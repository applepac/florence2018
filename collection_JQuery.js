$(document).ready(function(){
  
  console.log("Test");
  

  
  
$('#panel_1').click(function(){
  $('#popup_1').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
});

$('#panel_2').click(function(){
  $('#popup_2').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_3').click(function(){
  $('#popup_3').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_4').click(function(){
  $('#popup_4').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_5').click(function(){
  $('#popup_5').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_6').click(function(){
  $('#popup_6').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_7').click(function(){
  $('#popup_7').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_8').click(function(){
  $('#popup_8').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_9').click(function(){
  $('#popup_9').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_10').click(function(){
  $('#popup_10').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_11').click(function(){
  $('#popup_11').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('#panel_12').click(function(){
  $('#popup_12').animate({zIndex: '20', opacity: '1'}, 500);
  $('.close_button').animate({zIndex: '120', opacity: '1' }, 500);
})

$('.close_button').click(function(){
  $('.POPUP').animate({zIndex: '-1', display: 'none', opacity:'0'}, 500);
  $('.close_button').animate({zIndex: '-1', opacity: '0'}, 500);
})
  
$('.menu').click(function(){
  $('.navibar').animate({zIndex: '1', opacity: '1'}, 500);
  
})

$('.navibar').mouseleave(function(){
  $('.navibar').animate({zIndex: '-1', opacity: '0'}, 500);
  
})
  
  
  
  
  
  
  
  
  
});