/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a, a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500);
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('a').click(function() {
    $('.navbar-toggler:not(.collapsed)').click();
});

$(window).scroll(function() {
   var hT = $('section:first-of-type').offset().top,
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS + 40 > hT){
      $('.navbar-fixed-top').addClass('navbar-shrink');
   } else { 
      $('.navbar-fixed-top').removeClass('navbar-shrink');
   }
});
