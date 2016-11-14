(function($){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop < 196) {
      $("#about-nav").siblings().removeClass("active")
      $("#about-nav").addClass("active")
    } else if (scrollTop < 713) {
      $("#projects-nav").siblings().removeClass("active")
      $("#projects-nav").addClass("active")
    } else if (scrollTop < 1690) {
      $("#resume-nav").siblings().removeClass("active")
      $("#resume-nav").addClass("active")
    } else {
      $("#contact-nav").siblings().removeClass("active")
      $("#contact-nav").addClass("active")
    }
  });
})(jQuery)