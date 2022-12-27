/* hamburger menu */

// jQuery(function ($) {
//     $('.menu-btn').click(function () {
//         $(this).toggleClass('open');
//         $('.menu-list').toggleClass('expand');
//     });
// });


/* smooth scrolling for button js */
function scrollToAnchor(aid) {
	const destination = $("a[name='" + aid + "']");
	$('html,body').animate({
		scrollTop: destination.offset().top
	}, 'slow');
}

$(document).on('click', '.smooth-link-top', function () {
	scrollToAnchor('demo-top');
})
$(document).on('click', '.smooth-link-bottom', function () {
	scrollToAnchor('demo-bottom');
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
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 567,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

/* swiper for cards slider service section */


const swiper = new Swiper('.swiper-container', {
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 30,
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




/* hamburger */

// $(document).ready(function () {
// 	$(".ham-menu").click(function () {
// 		$(".menu").toggleClass("intro");
// 	});
// });

jQuery(function ($) {
	$('.ham-menu').click(function () {
		$('body').toggleClass('expand');
		$(this).toggleClass('toggle');
	})
})


/* search bar */
function opensearch() {
	document.getElementById("myOverlay").style.display = "block";
  }
  
  function closesearch() {
	document.getElementById("myOverlay").style.display = "none";
  }