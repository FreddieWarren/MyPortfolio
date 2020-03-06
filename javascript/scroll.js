// NAV BAR FIX ON SCROLL
$("document").ready (function ($) {
  var nav = $('#nav');
  var height =$('#home').height();

  $(window).scroll(function () {
    if ($(this).scrollTop() > height - 50){
      nav.addClass("fixed");
    } else {
      nav.removeClass("fixed");
    }
  });
});

// NAV LINK HIGHLIGHTING
$(window).scroll(function(){
var scrollTop = $(document).scrollTop();
var anchors = $('body').find('.section');

for (var i = 0; i < anchors.length; i++){
  if (scrollTop > $(anchors[i]).offset().top - 50 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 50) {
    $('nav div div[id="' + $(anchors[i]).attr('id') + '-link"]').addClass('active');
  } else {
    $('nav div div[id="' + $(anchors[i]).attr('id') + '-link"]').removeClass('active');
  }
}
});

// SCROLL ON NAV/BUTTONS
$(".about-btn").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});

$(".about-btn-nav").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});

$(".home-btn-nav").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#home").offset().top
  }, 1000);
});

$(".project-btn-nav").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#projects").offset().top
  }, 1000);
});

$(".contact-btn-nav").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
});

