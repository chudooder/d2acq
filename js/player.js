$(document).ready(function(){
	var player = $('#ability-player');
	player[0].volume = 0.5;
	$('#ability-icon').click(function(){
		player.currentTime = 0;
		player[0].play();
	});

	var hintbox = $('#cheat');
	hintbox.click(function(){
		giveHint()
	})
});