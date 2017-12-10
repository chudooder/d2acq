(function() {
    var unplayed = ABILITIES.slice();

    var curAbility;
    var hidden;
    var score;
    var streak;
    var misses;
    var hintGiven;

    var resetGame = function() {
        score = 0;
        streak = 0;
        misses = 0;
        unplayed = ABILITIES.slice();
        hidden = true;
        hintGiven = false;

        $('.reset').css('visibility', 'hidden');

        setNewAbility();
        updateScoreElements(0);
    };

    var setNewAbility = function() {
        var index = Math.floor(Math.random() * unplayed.length);
        curAbility = unplayed[index];

        // hash curAbility to prevent DOM inspection cheating
        var hashedAbility = sha256(curAbility.value);

        hidden = true;
        hintGiven = false;

        // Get rid of old hint
        $('#cheat').text('Give me a hint! (less points)');
        // hide ability icon
        $('#ability-icon').attr('src', 'img/icons/Unknown.png');
        //Set text to ???
        $('#ability-text').text('???');
        // set ability audio
        $('#ability-audio').attr('src', 'audio/'+hashedAbility+'.mp3');
        // load and play audio
        $('#ability-player').load();
        $('.typeahead').typeahead('val', '');
    };

    var giveHint = function() {
        if (hintGiven == true) {
            return;
        }
        var right = Math.floor(Math.random() * 4);
        var options = [];
        for (var i = 0; i <= 3; i++) {
            if (i == right) {
                options.push(" " + curAbility.value);
            }
            else {
                options.push(" " + ABILITIES[Math.floor(Math.random() * ABILITIES.length)].value);
            }
        }
        $('#cheat').text('It\'s one of these:' + options);
        hintGiven = true;
    };

    var revealAbility = function() {
        // reveal ability icon
        $('#ability-icon').attr('src', 'img/icons/'+curAbility.value+'.png');
        // set ability text
        $('#ability-text').text(curAbility.value);
    };

    var updateScore = function(correct) {
        var delta = 0;
        if(correct) {
            delta = 100 + 20 * streak;
            if(hintGiven) {
                delta /= 5;
            }
            score += delta;
            streak++;
            // create floating +score
        } else {
            misses++;
            streak = 0;
        }
        updateScoreElements(delta);
    };

    var updateScoreElements = function(delta) {
        $('#score-text').text("Score: "+score);
        $('#streak-text').text("Streak: "+streak);
        $('#misses-text').text("Misses: "+misses);
        if(delta != 0) {
            $('#score-text').prepend("<div class=\"score-popup\">+"+delta+"</div>");
            $(".score-popup").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", 
            function(){
                $('.score-popup').remove();
            });
        }

    };

    var submitAnswer = function(answer) {
        // console.log(answer)
        revealAbility();
        var correct = (answer === curAbility.value);
        updateScore(correct);
        unplayed.splice(unplayed.indexOf(curAbility), 1);
        if(misses < 3 && unplayed.length > 0) {
            setTimeout(function() {
                setNewAbility();
            }, 2000);
        } else {
            $('.reset').css('visibility', 'visible');
            if(unplayed.length == 0) {
                $('.reset').text('Complete victory! Play again?');
            } else {
                $('.reset').text('Game over! Play again?');
            }
        }
    };

    // set up the lookahead engine
    var abilitiesBloodhound = new Bloodhound({
        datumTokenizer: function(datum) {
            return datum.value.split(" ").concat(datum.hero.split(" "));
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: ABILITIES
    });

    abilitiesBloodhound.initialize();

    $(document).ready(function() {
        $('#input-box .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1,
            limit: 7
        },
        {
            name: 'abilitiesBloodhound',
            display: function(datum) { return datum.hero + ": " + datum.value; },
            source: abilitiesBloodhound.ttAdapter()
        }).on('typeahead:selected', function (obj, datum) {
            submitAnswer(datum.value)
        });

        $('.reset').click(function() {
            resetGame();
        });
        resetGame();

        var hintbox = $('#cheat');
        hintbox.click(function(){
            giveHint();
        })
    });
}());