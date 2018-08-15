var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});

$(document).ready(function () {

  $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the 
    //nav bar to stick.  
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 40) {
      $('nav').addClass("navbar-fixed scrolling-navbar");
      $('.scrolling-navbar a').css('color', '#fff');
    }
    if ($(window).scrollTop() < 41) {
      $('nav').removeClass("navbar-fixed scrolling-navbar");
      $('nav a').css({"color": "rgb(0,0,0)"});
    }
    if ($(window).scrollTop() > 750) {
      $('.scrolling-navbar').css('background-color', '#fff');
      $('.scrolling-navbar a').css('color', '#000');
    }
    if ($(window).scrollTop() < 749) {
      $('.scrolling-navbar').css('background-color', 'transparent');
      $('.scrolling-navbar a').css('color', '#fff');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#back-to-top').fadeIn();
      $('#back-to-top').tooltip('show');
    } else {
      $('#back-to-top').fadeOut();
      $('#back-to-top').tooltip('hide');
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
