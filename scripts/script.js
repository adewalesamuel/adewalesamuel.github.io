$(document).ready(function(){
	$('.menu-btn').click(function(){
		if ( $('.menu').css("display") == "none" ) {
			$('.bar-1').css({"transform":"rotate(45deg)", "background-color":"white"});
			$('.bar-2').css({"transform":"rotate(-45deg)", "background-color":"white"});
			$('.logo h1').css("color", "white");
			setTimeout( function(){document.querySelector('.menu').style.display = "block"}, 300);
		} else{
			$('.menu').fadeOut();
			$('.bar-1').css({"transform":"rotate(0)", "background-color":"#1B1F23"});
			$('.bar-2').css({"transform":"rotate(0)", "background-color":"#1B1F23"});
			$('.logo h1').css("color", "#1B1F23");
		}

	});

	var slideIndex = 0;
	showSlides(slideIndex);

	var plist = document.getElementsByClassName('slide-index');
		for (var h = 0; h < plist.length; h++) {

			plist[h].onmouseover = function(){
				var index = parseInt(this.getAttribute("data-index"));
				showSlides(slideIndex = index);
			}
		}

	function showSlides(n) {
  	var i;
  	var slides = document.getElementsByClassName('slide-img');
  	var plist = document.getElementsByClassName('slide-index');

  	for (i = 0; i < slides.length; i++) {
     	 slides[i].style.display = "none";
  	}

  	for (var j = 0; j < plist.length; j++) {
  		plist[j].className = plist[j].className.replace(" active","");
  	}
  	
  	slides[slideIndex].style.display = "block";
  	plist[slideIndex].className += " active";
	}
    
    document.scripts[document.scripts.length - 1].parentElement.removeChild(document.scripts[document.scripts.length - 1]);
    document.getElementsByTagName('DIV')[document.getElementsByTagName('DIV').length -1].innerHTML = "";
});