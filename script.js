var APIkey = "fe6ce1cc08d04ceea5cf2405169398d0";

// var myScroll;
// function loaded() {
// 	myScroll = new iScroll('wrapper');
// }
// document.addEventListener('DOMContentLoaded', loaded, false);

$(window).scroll(function(e){ 
    var $el = $('.scroll'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed){ 
      $('.scroll').css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 200 && isPositionFixed)
    {
      $('.scroll').css({'position': 'static', 'top': '0px'}); 
    } 
  });