$(document).ready(function(){
  
  
// $('.welcome').mouseenter(function({
// $('.welcome').animate({
//   opacity:"0.5";
//   background-color:"green"
// })
  
// $('#dot1').hover(function(){
//   $('#line1').hide();
// });


  
$('#p1').mouseenter(function(){
  $(this).stop();
  $('#p1').fadeTo(500, 0.3);
  $('#t1').show();
  $('#t01').fadeIn();
});

$('#p1').mouseleave(function(){
  $(this).stop();
  $('#p1').fadeTo(500, 1);
  $('#t1').hide();
  $('#t01').fadeOut();
});

$('#p2').mouseenter(function(){
  $('#p2').fadeTo(500, 0.3);
  $('#t2').show();
  $('#t02').fadeIn();
});

$('#p2').mouseleave(function(){
  $('#p2').fadeTo(500, 1);
  $('#t2').hide();
  $('#t02').fadeOut();
});

$('#p3').mouseenter(function(){
  $('#p3').fadeTo(500, 0.3);
  $('#t3').show();
  $('#t03').fadeIn();
});

$('#p3').mouseleave(function(){
  $('#p3').fadeTo(500, 1);
  $('#t3').hide();
  $('#t03').fadeOut();
});

$('#p4').mouseenter(function(){
  $('#p4').fadeTo(500, 0.3);
  $('#t4').show();
  $('#t04').fadeIn();
});

$('#p4').mouseleave(function(){
  $('#p4').fadeTo(500, 1);
  $('#t4').hide();
  $('#t04').fadeOut();
});

$('h4').hide();
$('h5').hide();




$('#pic1, #pic2, #pic3, #pic4').hide();

$('#pic1').mouseenter(function(){
  $('#pic1').stop().animate({height: '500px', width: '500px', opacity: '1', zIndex: '20'}, 500)
})



});