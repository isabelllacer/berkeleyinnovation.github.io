$(document).ready(function(){
  console.log('ready');
  /* Code for potential scrolling process box */
  // var height = $(window).height();
  // var scrollTop = $(window).scrollTop();
  // $('.process_box').scroll(function() {
  //   var pos = $(this).scrollTop();
  //   if (pos > 500 && pos < 800) {
  //       $('.process_box').css('color', "#000000");
  //       console.log('passed');
  //   } else if (pos >= 800) {
  //       $('.process_box').css( "background-color", "#ffffff" );
  //       console.log('passed more');
  //   }});


  $(".subheader").attr("display", "none");

  $(".active_page").hover(function(){
    $(".subheader").fadeIn(200);
  }, function() {
    $(".subheader").fadeOut(200);
  });

  $(".subheader").hover(function(){
    $(".subheader").fadeIn(200);
  }, function() {
    $(".subheader").fadeOut(200);
  });


});
