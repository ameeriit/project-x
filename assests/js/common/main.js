/* hamburger menu */

jQuery(function ($) {
    $('.menu-btn').click(function () {
        $(this).toggleClass('open');
        $('.menu-list').toggleClass('expand');
    });
});



$('.brands-wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});


$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});