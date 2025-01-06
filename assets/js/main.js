
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
        slidesPerView: 1.3,
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
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
     breakpoints: {
      0: {
        spaceBetween: 20,
       },
       767: {
         spaceBetween: 30,
       },
       1199: {
         spaceBetween: 40,
       }
    },
  });
  
  const swiper2 = new Swiper('.swiper2', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 5000,
    breakpoints: {
      0: {
        spaceBetween: 20,
       },
       767: {
         spaceBetween: 30,
       },
       1199: {
         spaceBetween: 40,
       }
    },
  });
  
  const swiper3 = new Swiper('.swiper3', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    breakpoints: {
      0: {
        spaceBetween: 20,
       },
       767: {
         spaceBetween: 30,
       },
       1199: {
         spaceBetween: 40,
       }
    },
  });
  

  jQuery(document).ready(function($){
    //set animation timing
    var animationDelay = 3500;
    
    initHeadline();
  
    function initHeadline() {
      //insert <i> element for each letter of a changing word
      singleLetters($('.cd-headline.letters').find('b'));
      //initialise headline animation
      animateHeadline($('.cd-headline'));
    }
  
    function singleLetters($words) {
      $words.each(function(){
        var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
        for (i in letters) {
          if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
          letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
        }
          var newLetters = letters.join('');
          word.html(newLetters).css('opacity', 1);
      });
    }
  
    function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function(){
        var headline = $(this);
        
        if(headline.hasClass('loading-bar')) {
          duration = barAnimationDelay;
          setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
        } 
  
        //trigger animation
        setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
      });
    }
  
    function hideWord($word) {
      var nextWord = takeNext($word);
      
      if($word.parents('.cd-headline').hasClass('type')) {
        var parentSpan = $word.parent('.cd-words-wrapper');
        parentSpan.addClass('selected').removeClass('waiting');	
        setTimeout(function(){ 
          parentSpan.removeClass('selected'); 
          $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
        }, selectionDuration);
        setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
      
      } else if($word.parents('.cd-headline').hasClass('letters')) {
        var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
  
      }  else if($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
          switchWord($word, nextWord);
          showWord(nextWord);
        });
  
      } else if ($word.parents('.cd-headline').hasClass('loading-bar')){
        $word.parents('.cd-words-wrapper').removeClass('is-loading');
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
        setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
  
      } else {
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, animationDelay);
      }
    }
  
    function showWord($word, $duration) {
      if($word.parents('.cd-headline').hasClass('type')) {
        showLetter($word.find('i').eq(0), $word, false, $duration);
        $word.addClass('is-visible').removeClass('is-hidden');
  
      }  else if($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
          setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
        });
      }
    }
  
    function hideLetter($letter, $word, $bool, $duration) {
      $letter.removeClass('in').addClass('out');
      
      if(!$letter.is(':last-child')) {
         setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
      } else if($bool) { 
         setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
      }
  
      if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
      } 
    }
  
    function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass('in').removeClass('out');
      
      if(!$letter.is(':last-child')) { 
        setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
      } else { 
        if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
        if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
      }
    }
  
    function takeNext($word) {
      return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }
  
    function takePrev($word) {
      return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }
  
    function switchWord($oldWord, $newWord) {
      $oldWord.removeClass('is-visible').addClass('is-hidden');
      $newWord.removeClass('is-hidden').addClass('is-visible');
    }
  });