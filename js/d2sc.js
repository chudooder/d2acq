var ABILITIES = ['Acid Spray', 'Activate Fire Remnant', 'Adaptive Strike', 'Alacrity', 'Amplify Damage', 'Anchor Smash', 'Ancient Seal', 'Aphotic Shield', 'Arc Lightning', 'Arcane Bolt', 'Arcane Orb', 'Arctic Burn', 'Assassinate', 'Astral Imprisonment', 'Astral Spirit', 'Avalanche', 'Backstab', 'Ball Lightning', 'Bash (Slardar)', 'Battery Assault', 'Battle Cry', 'Battle Hunger', 'Battle Trance', 'Berserker\'s Call', 'Berserker\'s Rage', 'Black Hole', 'Blade Dance', 'Blade Fury', 'Blinding Light', 'Blink (AM)', 'Blink (Queen)', 'Blink Strike', 'Blood Rite', 'Bloodlust', 'Bloodrage', 'Borrowed Time', 'Boulder Smash', 'Brain Sap', 'Breathe Fire', 'Bristleback', 'Burning Spear', 'Burrowstrike', 'Call Down', 'Call of the Wild Boar', 'Call of the Wild Hawk', 'Caustic Finale', 'Chain Frost', 'Chakra Magic', 'Chakram', 'Chaos Bolt', 'Chaos Meteor', 'Chaos Strike', 'Chaotic Offering', 'Charge of Darkness', 'Chemical Rage', 'Chilling Touch', 'Chronosphere', 'Cold Embrace', 'Cold Feet', 'Cold Snap', 'Concussive Shot', 'Conjure Image', 'Consume', 'Corrosive Skin', 'Counter Helix', 'Coup de Grace', 'Craggy Exterior', 'Crippling Fear', 'Crypt Swarm', 'Crystal Nova', 'Culling Blade', 'Curse of the Silent', 'Cyclone', 'Dark Pact', 'Darkness', 'Deafening Blast', 'Death Pact', 'Death Pulse', 'Death Ward', 'Decay', 'Decrepify', 'Demonic Conversion', 'Demonic Purge', 'Desolate', 'Devour', 'Diabolic Edict', 'Dismember', 'Dispel Magic', 'Disruption', 'Doom ability', 'Doppelganger', 'Double Edge', 'Dragon Slave', 'Dragon Tail', 'Dream Coil', 'Druid Form', 'Drunken Brawler (Fire)', 'Drunken Brawler', 'Drunken Haze', 'Dual Breath', 'Duel', 'Earth Spike', 'Earth Splitter', 'Earthbind', 'Earthshock', 'Echo Slam', 'Echo Stomp', 'Eclipse', 'Elder Dragon Form', 'Electric Vortex', 'EMP', 'Empower', 'Empowering Haste', 'Enchant Remnant', 'Enchant Totem', 'Enchant', 'Enfeeble', 'Enrage', 'Ensnare', 'Entangling Claws', 'Epicenter', 'Essence Aura', 'Ether Shock', 'Ethereal Jaunt', 'Exorcism', 'Eye of the Storm', 'Eyes in the Forest', 'Fade Bolt', 'False Promise', 'Fatal Bonds', 'Fate\'s Edict', 'Fiend\'s Grip', 'Finger of Death', 'Fire Remnant', 'Fire Spirits', 'Fireblast', 'Firefly', 'Fissure', 'Flak Cannon', 'Flame Guard', 'Flamebreak', 'Flaming Lasso', 'Flesh Golem', 'Focus Fire', 'Focused Detonate', 'Forge Spirit', 'Fortune\'s End', 'Freezing Field', 'Frost Arrows', 'Frost Blast', 'Frostbite', 'Frozen Sigil', 'Geminate Attack', 'Geomagnetic Grip', 'Geostrike', 'Ghost Ship', 'Ghost Walk', 'Glaives of Wisdom', 'Glimpse', 'Global Silence', 'God\'s Strength', 'Grave Chill', 'Greater Bash', 'Grow', 'Guardian Angel', 'Gush', 'Gust', 'Hand of God', 'Haunt', 'Healing Ward', 'Heat-Seeking Missile', 'Hex (Lion)', 'Hex (Shadow Shaman)', 'Holy Persuasion', 'Homing Missile', 'Hoof Stomp', 'Hookshot', 'Howl', 'Hurl Boulder', 'Icarus Dive', 'Ice Armor', 'Ice Blast', 'Ice Path', 'Ice Shards', 'Ice Vortex', 'Ice Wall', 'Ignite', 'Illuminate', 'Illusory Orb', 'Impale', 'Impetus', 'Infest', 'Inner Vitality', 'Insatiable Hunger', 'Invoke', 'Ion Shell', 'Jinada', 'Juxtapose', 'Kinetic Field', 'Kraken Shell', 'Laguna Blade', 'Land Mines', 'Laser', 'Last Word', 'Launch Fire Spirit', 'Leap', 'Leech Seed', 'Life Break', 'Life Drain', 'Light Strike Array', 'Lightning Bolt', 'Lightning Storm', 'Liquid Fire', 'Living Armor', 'Lucent Beam', 'LVL Death', 'Macropyre', 'Magic Missile', 'Magnetize', 'Maledict', 'Malefice', 'Mana Break', 'Mana Burn', 'Mana Drain', 'Mana Leak', 'Mana Shield', 'Mana Void', 'March of the Machines', 'Mass Serpent Ward', 'Meat Hook', 'Meld', 'Metamorphosis', 'Midnight Pulse', 'Minefield Sign', 'Mirror Image', 'Mist Coil', 'Moment of Courage', 'Moon Glaive', 'Moonlight Shadow', 'Morph (Agility Gain)', 'Morph (Strength Gain)', 'Morph Replicate', 'Mortal Strike', 'Multicast', 'Mystic Flare', 'Mystic Snake', 'Nature\'s Attendants', 'Nature\'s Call', 'Nature\'s Guise', 'Nether Blast', 'Nether Strike', 'Nether Swap', 'Nether Ward', 'Nightmare End', 'Nightmare', 'Omnislash', 'Open Wounds', 'Overcharge', 'Overgrowth', 'Overload', 'Overpower', 'Overwhelming Odds', 'Paralyzing Cask', 'Penitence', 'Phantasm', 'Phantom Rush', 'Phase Shift', 'Pinpoint Detonate', 'Plague Ward', 'Plasma Field', 'Poison Attack', 'Poison Nova', 'Poison Touch', 'Poof', 'Pounce', 'Power Cogs', 'Powershot', 'Press the Attack', 'Primal Roar', 'Primal Split', 'Psi Blades', 'Psionic Trap Explode', 'Psionic Trap', 'Pulse Nova', 'Purification', 'Purifying Flames', 'Quill Spray', 'Rabid', 'Rage', 'Ravage', 'Reality Rift', 'Reality', 'Reaper\'s Scythe', 'Rearm', 'Recall', 'Reflection', 'Refraction', 'Reincarnation', 'Relocate', 'Remote Mines', 'Repel', 'Replicate', 'Requiem of Souls', 'Return', 'Reverse Polarity', 'Rip Tide', 'Rocket Barrage', 'Rocket Flare', 'Rolling Boulder', 'Rot', 'Rupture', 'Sacred Arrow', 'Sacrifice', 'Sand Storm', 'Sanity\'s Eclipse', 'Scorched Earth', 'Scream of Pain', 'Searing Arrows', 'Searing Chains', 'Shackles', 'Shackleshot', 'Shadow Dance', 'Shadow Poison', 'Shadow Strike', 'Shadow Walk', 'Shadow Wave', 'Shadow Word', 'Shadowraze', 'Shallow Grave', 'Shapeshift', 'Shockwave', 'Shrapnel', 'Shukuchi', 'Shuriken Toss', 'Silence', 'Skeleton Walk', 'Skewer', 'Sleight of Fist', 'Slithereen Crush', 'Smoke Screen', 'Snowball', 'Song of the Siren', 'Sonic Wave', 'Soul Assumption', 'Soul Catcher', 'Soul Rip', 'Spawn Spiderlings', 'Spectral Dagger', 'Spell Steal', 'Spiked Carapace', 'Spin Web', 'Spirit Form', 'Spirit Lance', 'Spirits', 'Splinter Blast', 'Split Earth', 'Split Shot', 'Sprint', 'Sprout', 'Stampede', 'Starstorm', 'Stasis Trap', 'Static Field', 'Static Link', 'Static Remnant', 'Static Storm', 'Sticky Napalm', 'Stifling Dagger', 'Stone Form', 'Stone Gaze', 'Stone Remnant', 'Storm Hammer', 'Strafe', 'Suicide Squad, Attack!', 'Summon Familiars', 'Summon Spirit Bear', 'Summon Wolves', 'Sun Ray', 'Sun Strike', 'Sunder', 'Supernova', 'Surge', 'Telekinesis', 'Teleportation', 'Test of Faith (Teleport)', 'Test of Faith', 'Tether', 'The Swarm', 'Thunder Clap', 'Thunder Strike', 'Thundergod\'s Wrath', 'Tidebringer', 'Timber Chain', 'Time Lapse', 'Time Lock', 'Time Walk', 'Tombstone', 'Tornado', 'Torrent', 'Toss', 'Track', 'Trap', 'True Form', 'Unstable Concoction', 'Upheaval', 'Vacuum', 'Vendetta', 'Venomous Gale', 'Viper Strike', 'Viscous Nasal Goo', 'Void', 'Voodoo Restoration', 'Wall of Replica', 'Walrus Punch', 'Waning Rift', 'Warcry', 'Wave of Terror', 'Waveform', 'Weave', 'Whirling Axes (Melee)', 'Whirling Axes (Ranged)', 'Whirling Death', 'Wild Axes', 'Windrun', 'Winter\'s Curse', 'Wraithfire Blast', 'Wrath of Nature', 'X Marks the Spot'];

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
	// console.log(curAbility);
	hidden = true;
	hintGiven = false;

	// Get rid of old hint
	$('#cheat').text('Give me a hint!');
	// hide ability icon
	$('#ability-icon').attr('src', 'img/icons/Unknown.png');
	//Set text to ???
	$('#ability-text').text('???');
	// set ability audio
	$('#ability-audio').attr('src', 'audio/'+curAbility+'.mp3');
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
			options.push(" " + curAbility);
		}
		else {
			options.push(" " + ABILITIES[Math.floor(Math.random() * ABILITIES.length)]);
		}
	}
	$('#cheat').text('It\'s one of these:' + options);
	hintGiven = true;
}

var revealAbility = function() {
	// reveal ability icon
	$('#ability-icon').attr('src', 'img/icons/'+curAbility+'.png');
	// set ability text
	$('#ability-text').text(curAbility);
}

var updateScore = function(correct) {
	var delta = 0;
	if(correct) {
		delta = 200 + 50 * streak;
		if(hintGiven) {
			delta /= 2;
		}
		score += delta;
		streak++;
		// create floating +score
	} else {
		misses++;
		streak = 0;
	}
	updateScoreElements(delta);
}

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

}

var submitAnswer = function(answer) {
	// console.log(answer)
	revealAbility();
	var correct = (answer === curAbility);
	updateScore(correct);
	unplayed.splice(unplayed.indexOf(curAbility), 1);
	if(misses < 3) {
		setTimeout(function() {
			setNewAbility();
		}, 2000);
	} else {
		$('.reset').css('visibility', 'visible');
	}

}
$(document).ready(function() {
	$('.reset').click(function() {
		resetGame();
	});
	resetGame();
});
