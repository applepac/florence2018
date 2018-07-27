$(document).ready(function(){
  
  console.log("Test");
  

  
  
$('#panel_1').click(function(){
  $('#popup_1').css({"z-index": "20", "opacity": "1"});
  $('.close_button').css({"opacity": "1", "z-index": "100"});
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});


$('#panel_2').click(function(){
  $('#popup_2').css({"z-index": "20", "opacity": "1"});
  $('.close_button').css({"z-index": "120", "opacity": "1"});
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_3').click(function(){
  $('#popup_3').css({"z-index": "20", "opacity": "1"});
  $('.close_button').css({"z-index": "120", "opacity": "1"});
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_4').click(function(){
  $('#popup_4').css({"z-index": "20", "opacity": "1"});
  $('.close_button').css({"z-index": "120", "opacity": "1"});
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_5').click(function(){
  $('#popup_5').css({"z-index": "20", "opacity": "1"});
  $('.close_button').css({"z-index": "120", "opacity": "1"});
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_6').click(function(){
  $('#popup_6').css({"z-index": "20" , "opacity": "1"});
  $('.close_button').css({"z-index": '120', "opacity": '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_7').click(function(){
  $('#popup_7').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_8').click(function(){
  $('#popup_8').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_9').click(function(){
  $('#popup_9').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_10').click(function(){
  $('#popup_10').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_11').click(function(){
  $('#popup_11').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_12').click(function(){
  $('#popup_12').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_13').click(function(){
  $('#popup_13').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_13').click(function(){
  $('#popup_13').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_14').click(function(){
  $('#popup_14').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_15').click(function(){
  $('#popup_15').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_16').click(function(){
  $('#popup_16').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_17').click(function(){
  $('#popup_17').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_18').click(function(){
  $('#popup_18').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('#panel_19').click(function(){
  $('#popup_19').css({zIndex: '20', opacity: '1'});
  $('.close_button').css({zIndex: '120', opacity: '1' });
  $('body>*:not(.POPUPS)').addClass("thickbox-open");
});

$('.close_button').click(function(){
  $('.POPUP').css({zIndex: '-1', opacity:'0'});
  $('.close_button').css({zIndex: '-1', opacity: '0'});
  $('body>*:not(.POPUPS)').removeClass("thickbox-open");
});
  
$('.menu').click(function(){
  $('.navibar').css({zIndex: '1', opacity: '1'});
  
});

$('.navibar').mouseleave(function(){
  $('.navibar').css({zIndex: '-1', opacity: '0'});
});

$('.card').mousemove(function(){
  $(this).css({borderWidth: '10px', borderColor: 'gold', animationPlayState: 'paused'});
});
  
  
$('.card').mouseout(function(){
  $('.card').css({"border-width": "0", "animation-play-state": 'running'});
});
  
$('#about').toggle(function(){
  $('#abouttext').css({"display": "block" , "font-family": "'Doris', sans-serif"});
});


  
// $('.disablemotion').click(function(){
//   $('.card').css({"animation-play-state": "paused"});
//   $('.disablemotion').css({"background-color": "lightgreen"});},
  
//   function(){
//     $('.card').css({"animation-play-state": "running"});
//     $('.disablemotion').css({"background-color": "transparent"});
  
// });
  

  
});