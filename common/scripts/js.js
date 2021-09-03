$(document).ready(function(){
  
  $(document).scroll(function(){
  	var scroll = $(document).scrollTop();
  	var h = $('#fixed').innerHeight();
  	var top = $('#fixed').parent().offset().top + 50;
  	var t = $('#fixed').css("top");
  	var calc = (scroll - top);

  	//Fixed left col
  	if($(document).innerWidth() > 900){
	  	if(scroll < top){
	  		$('#fixed').css({
	  			"top": 0 + "px"
	  		});
	  	}
	  	if(scroll > top){
	  		$('#fixed').css({
	  			"top": calc + 100 + "px"
	  		});
	  	}
	  }

	//Fade Up animation  
	for (var i = 0; i < $('.anim1').length; i++) {
		if( scroll > $('.anim1').eq(i).offset().top - ($(window).innerHeight() / 1.2) ) {
		$('.anim1').eq(i).css({
			"opacity": 1,
			"top": "0px"
		});
	}else{
		$('.anim1').eq(i).css({
			"opacity": 0,
			"top": "-20px"
		});
	}
	}

	//Fade Right animation
	var delay = 200;

	for (var i = 0; i < $('.competences li').length; i++) {
		$('.competences li').eq(i).css({
			"transition-delay": delay +"ms"
		});
		delay += 100;
		}

	if (scroll > $('.competences li').eq(0).offset().top - ($(window).innerHeight() / 1.2) ) {
		$('.competences li').css({
			"opacity": 1,
			"left": "0px"
		});
	}else{
		$('.competences li').css({
			"opacity": 0,
			"left": "-20px"
		});
	}


	if (scroll < $('.hero').innerHeight()) {
		$('.h-header').css("top", "-100px")
	}

	if (scroll >= $('.hero').innerHeight()) {
		$('.h-header').css("top", "0px")
	}	

  });

});