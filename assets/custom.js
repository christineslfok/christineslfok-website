$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.banner').css('background-position', 'center ' + ((scrolledY)) + 'px');
});

// My Role on Homepage
// var textArray = ["UX Designer","UI Designer","UX Writer","Content Strategist","Visual Designer","Cognitive Designer"];
// var index = 0;
// setInterval(function(){        
// $("#myWork").animate({
// opacity:0
// },function()
// {
//   if(textArray.length > index) {
//   $(this).text(textArray[index]).animate({opacity:1})
//   index++; 
//   }
//   else {
//     index = 0;
//     $(this).text("UX Content Strategist").animate({opacity:1})
//   }
// });
// },2000);

// Contact Form
$("#formName").focusout(function () {
    $("#yourName").html($("#formName").val());
  });



// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
