$(function(){
  
  /*ANIMATIONS*/
  $(document).on('scroll', function(){
    var circleOffsetTop = $('.circle').offset().top;
    var circleHeight = $('.circle').outerHeight();
    var windowHeight = $(window).height();
    var windowScroll = $(this).scrollTop();
    
    if (windowScroll > (circleOffsetTop + circleHeight / 2 - windowHeight)) {
      $('.circle').addClass('animated slideInUp');
      $('.circle').show();
    }
  });
});