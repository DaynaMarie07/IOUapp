var APIkey = "c85d91f801f64b9e94d85180affeb654"; 


var myScroll;
function loaded(){
  myScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', loaded, false);


fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
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
  