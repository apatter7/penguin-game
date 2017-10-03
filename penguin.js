
$(document).ready(function(){


	$('.penguin1').click(function(){
		$(this).toggleClass('on');
	});
	$('.penguin2').click(function(){
		$(this).toggleClass('on');
	});
	$('.penguin3').click(function(){
		$(this).toggleClass('on');
	});
	$('.penguin4').click(function(){
		$(this).toggleClass('on');
	});
	$('.penguin5').click(function(){
		$(this).toggleClass('on');
	});
	$('.penguin6').click(function(){
		$(this).toggleClass('on');
	});
	$('.penguin7').click(function(){
		$(this).toggleClass('on');
	});
	$('.yeti').click(function(){
		$(this).toggleClass('on');
		$(this).append('<embed id="embed_player" src="audio/roar.wav" autostart="false" hidden="true"></embed>');
	});
 
});