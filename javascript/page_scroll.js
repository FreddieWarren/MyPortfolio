$("#about-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#home-btn-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

$("#about-btn-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#project-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

$("#project-btn-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

// $("#home-btn").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#home").offset().top
//     }, 1000);
// });

// $(window).bind('scroll', function () {
//     var menu = $('.nav-menu');
//     if ($(window).scrollTop() > menu.offset().top) {
//         menu.addClass('fixed');
//     } else {
//         menu.removeClass('fixed');
//     }
// });


$("document").ready(function($){
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



