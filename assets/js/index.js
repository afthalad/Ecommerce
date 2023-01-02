/** @format */

$(document).ready(function () {
  $(".your-class").slick({
    arrows: false,
    swipeToSlide: true,
    loop: true,
    pauseOnFocus: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
  });
  $(".easyzoom").easyZoom();
  $.elevator({ speed: 200 });
});
