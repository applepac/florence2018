$(document).ready(function(){
  

  
// $('.welcome').mouseenter(function({
// $('.welcome').animate({
//   opacity:"0.5";
//   background-color:"green"
// })
  
// $('#dot1').hover(function(){
//   $('#line1').hide();
// });


  
$('#img1').mouseenter(function(){
  $('#img').animate({opacity: '1'}, 500);
});

$('#img1').mouseleave(function(){
  $('#img').animate({opacity: '0.5'}, 500);
});


$('#pic1, #pic2, #pic3, #pic4').hide();

$('#pic1').mouseenter(function(){
  $('#pic1').stop().animate({height: '500px', width: '500px', opacity: '1', zIndex: '20'}, 500)
})

  



});