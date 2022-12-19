/* hamburger menu */

jQuery(function ($) {
    $('.menu-btn').click(function () {
        $(this).toggleClass('open');
        $('.menu-list').toggleClass('expand');
    });
});