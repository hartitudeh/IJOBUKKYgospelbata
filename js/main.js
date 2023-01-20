/* ===================================
--------------------------------------
	Hnband | Music Event HTML Template
	Version: 1.0
	Copyright By: ColorLib
--------------------------------------
======================================*/

'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");
});

(function($) {

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Navigation
	--------------------*/
	$('.main__menu').slicknav({
		'appendTo' : '.header__warp',
		'openedSymbol': '<i class="fa fa-angle-up"></i>',
		'closedSymbol': '<i class="fa fa-angle-right"></i>'
	});


	/*-------------------
		Hero Slider
	-------------------*/
	$('.hero__slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
		dots: false,
		nav: true,
  		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
	});
	
	/*-------------------
		Magnific Popup
	-------------------*/
	$('.gallery__item').magnificPopup({
        type: 'image',
		gallery:{
			enabled:true
		}
    });
	
	/*-------------------
		Onscroll Nav Menu Background Change
	-------------------*/
	$(document).ready(function(){
		$(window).bind('scroll', function(){
			const gap = 0;
			if($(window).scrollTop() > gap){
				$('header').addClass('ijobukky');
			} else {
				$('header').removeClass('ijobukky')
			}
		});
	});

	/*-------------------
		INC DEC Input
	-------------------*/
	var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
	});

})(jQuery);

