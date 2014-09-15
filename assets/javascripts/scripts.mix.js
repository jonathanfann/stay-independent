@import "bootstrap/affix.js";
@import "bootstrap/button.js";
@import "bootstrap/carousel.js";
@import "bootstrap/collapse.js";
@import "bootstrap/dropdown.js";
@import "bootstrap/tab.js";
@import "bootstrap/transition.js";
@import "bootstrap/scrollspy.js";
@import "bootstrap/modal.js";
@import "bootstrap/tooltip.js";
@import "bootstrap/popover.js";

@import "application.js";

// ------------------------------
// http://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('a').click(function(){  
    //Toggle Class (disabled)
   /* $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active'); */
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();