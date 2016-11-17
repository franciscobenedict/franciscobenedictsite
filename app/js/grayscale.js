//jQuery to collapse the navbar on scroll
$(window).scroll(function() {


    
    $('body').scrollspy({ target: '.secondary-nav' });
    
    if ($(".navbar").length) {
        if ($(".navbar").offset().top > 50) {
            // 50 pixels and beyond top of screen
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            
            // Show the black version of the logo
            $('.black-logo').addClass('hidden');
            $('.green-logo').removeClass('hidden');
            
            // Laguange links turns grey on hover
            $('#language a').addClass('green-link');
            $('#language a').removeClass('grey-link');

            // Shift secondary nav up
            $('.secondary-nav').addClass('shift-up');

        } else {
            // Top of screen
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            
            // Show the green version of the logo
            $('.black-logo').removeClass('hidden');
            $('.green-logo').addClass('hidden');
            
            // Laguange links turns green on hover
            $('#language a').removeClass('green-link');
            $('#language a').addClass('grey-link');

            // Shift secondary nav down
            $('.secondary-nav').removeClass('shift-up');
        }
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Close the menu when in mobile mode if user clicks a link in the nav
    $('a.nav-link').delegate(function () {
        // If user clicks a link within the nav bar, close the navbar it is open
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-toggle').trigger('click');
        }
    })


    $('.navbar-toggle').on('click', function(){
        console.log('navbat-toggle clicked');
    });

});