
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $("header").addClass("header-sticky");
  } else {
    $("header").removeClass("header-sticky");
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

	if ($(".scene").length > 0){
		var sceneElements = document.querySelectorAll('.scene');
		var parallaxScenes = [];
		for (var i = 0; i < sceneElements.length; i++) {
		  parallaxScenes.push(new Parallax(sceneElements[i]));
		}
		var scene = $(".scene")[0];
		var parallax = new Parallax(scene, {
			scalarX: 5,
			scalarY: 5
		});
	}