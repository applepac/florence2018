
$(document).ready(function(){
  
  console.log("Test");
  
// $('.welcome').mouseenter(function({
// $('.welcome').animate({
//   opacity:"0.5";
//   background-color:"green"
// })
  
// $('#dot1').hover(function(){
//   $('#line1').hide();
// });

// $('#dot2').mouseover(function(){
//   $('#line3').hide();
// })
  
// $('#dot3').mouseover(function(){
//   $('#line5').hide();
// })
  
// $('#dot4').mouseover(function(){
//   $('#line4').hide();
// })
  
// $('#dot5').mouseover(function(){
//   $('#line2').hide();
// })
  
// $('#dot6').mouseover(function(){
//   $('#line6').hide();
// })
  
$('#dot1').click(function(){
  $('#pic1').fadeIn();
})

$('#dot2').click(function(){
  $('#pic2').fadeIn();
})

$('#dot3').click(function(){
  $('#pic3').fadeIn();
})

$('#dot4').click(function(){
  $('#pic4').fadeIn();
})

$('#dot5').click(function(){
  $('').show();
})

$('#dot6').click(function(){
  $('').show();
})

$('#pic1, #pic2, #pic3, #pic4').hide();

$('#pic1').mouseenter(function(){
  $('#pic1').stop().animate({height: '500px', width: '500px', opacity: '1', zIndex: '20'}, 500)
})

$('#pic1').mouseleave(function(){
  $('#pic1').stop().animate({width: '300px', height: '300px', opacity: '0.6', zIndex: '2'}, 500)
})
  
$('#pic2').mouseenter(function(){
  $('#pic2').stop().animate({height: '700px', width: '450px', opacity: '1', top:'200px', zIndex: '20'}, 500)
})

$('#pic2').mouseleave(function(){
  $('#pic2').stop().animate({width: '300px', height: '500px', opacity: '0.6', zIndex: '2'}, 500)
})
  
$('#pic3').mouseenter(function(){
  $('#pic3').stop().animate({height: '400px', width: '600px', opacity: '1',left: '900px', zIndex: '20'
  }, 500)
})

$('#pic3').mouseleave(function(){
  $('#pic3').stop().animate({width: '400px', height: '250px', opacity: '0.6', top: '100px', left: '1000px', zIndex: '2'}, 500)
})

$('#pic4').mouseenter(function(){
  $('#pic4').stop().animate({height: '700px', width: '450px', opacity: '1', zIndex: '20', top: '200px'}, 500)
})

$('#pic4').mouseleave(function(){
  $('#pic4').stop().animate({width: '300px', height: '500px', opacity: '0.6', zIndex: '2'}, 500)
})
  

$('h1').animate({opacity:'1'}, 3000).delay(1000).animate({opacity: '0'}, 3000);


});


