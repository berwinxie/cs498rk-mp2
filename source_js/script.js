// Write any custom javascript functions here
// smooth scrolling
// http://jsfiddle.net/9SDLw/
$('.header-button').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top - 30
  }, 500);
  return false;
});

$(document).ready(function() {
  $('.adventure-carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});

// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// checking if element is in viewport
function isElInViewport(el) {
  var elRect = el.getBoundingClientRect(el);
  var rectCenterTop = (elRect.bottom + elRect.top)/16;
  var rectCenterBottom = 15*(elRect.bottom + elRect.top)/16;
  var rectTop = elRect.top;
  var rectBottom = elRect.bottom;
  // when scroll past the center of the first page, change to smaller toolbar
  return rectCenterTop >= 0 && rectCenterBottom <= (window.innerHeight || document.documentElement.clientHeight);
}

$(document).ready(function(){
  $("#section-one-button").addClass("active");
});

var currentSection = 1;
// document scroll handler
$(document).on( 'scroll', function(){

  var sectionOneVisible = isElInViewport(document.getElementById('section-one'));
  var sectionTwoVisible = isElInViewport(document.getElementById('section-two'));
  var sectionThreeVisible = isElInViewport(document.getElementById('section-three'));

  // console.log(currentSection);

  if(sectionOneVisible){
    currentSection = 1;
  }
  else if(sectionTwoVisible){
    currentSection = 2;
  }
  else if(sectionThreeVisible){
    currentSection = 3;
  }
  // else if(sectionFourVisible){
  //   currentSection = 4;
  // }

    // this is ugly im sorry

    if (currentSection == 1) {
      $(".header-button").css("padding", "20px");
      // $(".header-button").css("font-size", "3em");
      // $(".header-container").removeClass("minimized");
      $("#section-one-button").addClass("active");
      $("#section-one-button").removeClass("minimized");
      $("#section-two-button").removeClass("minimized");
      $("#section-three-button").removeClass("minimized");
    }
    else { 
      $(".header-button").css("padding", "5px");
      $("#section-one-button").addClass("minimized");
      $("#section-two-button").addClass("minimized");
      $("#section-three-button").addClass("minimized");
      $("#section-one-button").removeClass("active");
    }

    if (currentSection == 2) {
      // $("#top-container").css("height", "50px");
      // $(".header-container").addClass("minimized");
      $("#section-two-button").addClass("active");
    }
    else { 
      // $(".header-container").removeClass("minimized");
      $("#section-two-button").removeClass("active");
    }

    if (currentSection == 3) {

      // $("#top-container").css("height", "50px");
      // $(".header-container").addClass("minimized");
      $("#section-three-button").addClass("active");
    }
    else { 
      // $(".header-container").removeClass("minimized");
      $("#section-three-button").removeClass("active");
    }



  });


// http://stackoverflow.com/questions/9720294/jquery-how-to-detect-window-width-on-the-fly
var windowsize = $(window).width();

$(window).resize(function() {
  windowsize = $(window).width();
  if (windowsize > 600) {
    //if the window is greater than 440px wide then turn on jScrollPane..
    $('#menu-bar-select').addClass("horizontal");
    $('#menu-bar-select').removeClass("vertical");
  }
  else{
    $('#menu-bar-select').removeClass("horizontal");
    $('#menu-bar-select').addClass("vertical");
  }
});