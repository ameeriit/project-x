/* hamburger menu */

// jQuery(function ($) {
//     $('.menu-btn').click(function () {
//         $(this).toggleClass('open');
//         $('.menu-list').toggleClass('expand');
//     });
// });

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
