$.ajax({
  URL: "http://newsapi.org/v2/top-headlines?country=us&apiKey=c85d91f801f64b9e94d85180affeb654",
 
  success: function(data){
    data.forEach(element => {
      console.log("Title: " + element.title);
    });
        $("#twitter-timeline").html(data);
  }
})

// console.log("script.js loading...")

$.ajax({
  URL: "/api/ious",
  type: "GET",
  success: function(data){
    console.log(data);
  }
})







// var myScroll;
// function loaded(){
//   myScroll = new iScroll('wrapper');
// }
// document.addEventListener('DOMContentLoaded', loaded, false);


// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
// $(window).scroll(function(e){ 
//     var $el = $('.scroll'); 
//     var isPositionFixed = ($el.css('position') == 'fixed');
//     if ($(this).scrollTop() > 200 && !isPositionFixed){ 
//       $('.scroll').css({'position': 'fixed', 'top': '0px'}); 
//     }
//     if ($(this).scrollTop() < 200 && isPositionFixed)
//     {
//       $('.scroll').css({'position': 'static', 'top': '0px'}); 
//     } 
//   });
  