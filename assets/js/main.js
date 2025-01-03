
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
  
  var mySwiper = new Swiper ('.testimonial-1', {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 2000,
        reverseDirection: true,
        disableOnInteraction: false,
    },
  })

  var swiper = new Swiper(".ai-platform-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 2,
    navigation: {
      nextEl: ".next-arrow",
      prevEl: ".prev-arrow",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5,
      },
      1700: {
        slidesPerView: 6,
      },
    },
  });

  const swiper1 = new Swiper('.swiper1', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      // reverseDirection: true, // Swiper-2 scrolls in reverse

    },
    speed: 20000, // Smooth scrolling speed
     allowTouchMove: false,
  });
  
  const swiper2 = new Swiper('.swiper2', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true, // Swiper-2 scrolls in reverse
    },
    speed: 20000,
     allowTouchMove: false,
  });
  
  const swiper3 = new Swiper('.swiper3', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      // reverseDirection: true, // Swiper-2 scrolls in reverse

    },
    speed: 20000,
     allowTouchMove: false,
  });
  