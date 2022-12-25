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
});

/* swiper for cards slider service section */
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 3,
	spaceBetween: 30,
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
	focusOnSelect: true
  });

  /* hamburger */
  $(document).ready(function(){
	$(".header-right > a").click(function() {
	  $(".hamburger-menu").addClass("active");
	});
	$(".close").click(function() {
	  $(".hamburger-menu").removeClass("active");
	});
  });