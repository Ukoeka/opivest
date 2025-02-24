(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});
	
	/* Click to Scroll */
	if($('.btn-demo').length)
	{
		$(".btn-demo").click(function() {
			$('html, body').animate({
				scrollTop: $(".demo-layout").offset().top
			}, 600);
			
			return false;
		});
	}
	
		/* Scroll to section */
	$(document).on('click','.smoothscroll',function(){
		
		if($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 70
			}, 800);
			return false;
		}
		
	});
	
	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length)
	{
		if ($(window).width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				 offset: 0,
			});
		}
	}
	
})(jQuery);