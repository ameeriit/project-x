/* search btn */
jQuery(function ($) {
	$('.search-btn').click(function () {
		$('.search').addClass('search-open-close');
	})
	$('.cross-btn').click(function () {
		$('.search').removeClass('search-open-close');
	})
})


/* hamburger menu */

jQuery(function ($) {
	$('.ham-menu').click(function () {
		$('body').toggleClass('expand');
		$(this).toggleClass('toggle');
	})
})



/* swiper for cards slider service section */
const swiper = new Swiper('.swiper-container', {
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		200: {
			slidesPerView: 1,
			spaceBetween: 5
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 30
		},
		// when window width is >= 480px
		767: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
})


/* slick for brands slider brand section*/
$(".brands-wrapper").slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1225,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 567,
			settings: {
				slidesToShow: 1
			}
		}
	]
});


/* magnific popup */
$(document).ready(function () {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});
});


/* sync slick slider */
$('.testimonial-content-slide').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.testimonial-content-slide-nav'
});
$('.testimonial-content-slide-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.testimonial-content-slide',
	dots: false,
	arrows: false,
	focusOnSelect: true,
});