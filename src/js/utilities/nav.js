import $ from "jquery"

$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
		$('.header').addClass("sticky");
		$('.logo').addClass("centered");
  	} else{
		$('.header').removeClass("sticky");
		$('.logo').removeClass("centered");
  	}
});