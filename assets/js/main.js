
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $("header").addClass("bg-header");
  } else {
    $("header").removeClass("bg-header");
  }
});

$(document).ready(function () {

  // Initialize the thumbnail slider
  $(".thumbnail-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".main-slider",
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "98px",
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });
});
