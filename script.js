// spaghetti code, need to clean this up at a later stage.
(function($){
  var $caret = $("#caret"),
      $nav = $(".nav"),
      $navLinks = $(".nav a");
  
  $(window).scroll(scrollFunctionality);
  $caret.on("click", dropdownFunctionality);
  
  function scrollFunctionality() {
    var scrollTop = $(window).scrollTop(),
        $aboutNav = $("#about-nav"),
        $projectsNav = $("#projects-nav"),
        $resumeNav = $("#resume-nav"),
        $contactNav = $("#contact-nav");
    
    if (scrollTop < 196) {
      $aboutNav.siblings().removeClass("active");
      $aboutNav.addClass("active");
    } else if (scrollTop < 713) {
      $projectsNav.siblings().removeClass("active");
      $projectsNav.addClass("active");
    } else if (scrollTop < 1690) {
      $resumeNav.siblings().removeClass("active");
      $resumeNav.addClass("active");
    } else {
      $contactNav.siblings().removeClass("active");
      $contactNav.addClass("active");
    }
  }
  
  function dropdownFunctionality() {
    if ($caret.hasClass("fa-caret-square-o-down")) {
      $navLinks.css("display", "block");
      $caret.removeClass("fa-caret-square-o-down").addClass("fa-caret-square-o-up");
      $nav.css("height", "542px");
    } else {
      $navLinks.css("display", "none");
      $caret.removeClass("fa-caret-square-o-up").addClass("fa-caret-square-o-down");
      $nav.css("height", "60px")
    }
  }
  
})(jQuery)