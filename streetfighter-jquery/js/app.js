<<<<<<< HEAD
  $(document).keydown(function(event){
    if(event.which == 88)
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  })
    $(document).keyup(function(event){
    if(event.which == 88)
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
  })
$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
=======
$(function() {

  $(document).keydown(function(event) {
    if (event.which == 88) {
      alert("Handler for .keydown() called.");
    }
  })


  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  }).mouseleave(function() {
>>>>>>> cbaa9f0c030546f70e4aced499d012973cc81f9e
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
    .mousedown(function() {
      playHadouken();
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show()
        .animate({
            'left': '300px'
          },
          500,
          function() {
            $(this).hide();
            $(this).css('left', '-167px');
          }
      );
    })
    .mouseup(function() {
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
    });

  function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

})