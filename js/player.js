$(document).ready(function(){
	var player = $('#ability-player');
	console.log(player)
	$('#ability-icon').click(function(){
		player.currentTime = 0;
		player[0].play();
	});
});