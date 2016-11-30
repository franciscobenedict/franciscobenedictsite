//jQuery to collapse the navbar on scroll
$(window).scroll(function() {

    // console.log('greyscale.js loaded');
    $('body').scrollspy({ target: '.secondary-nav' });
    
    if ($(".navbar").length) {
        // 25 pixels and beyond top of screen
        if ($(".navbar").offset().top > 25) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            
            // Show the black version of the logo
            $('.white-logo').addClass('hidden');
            $('.grey-logo').removeClass('hidden');

            // Shift secondary nav up
            $('.secondary-nav').addClass('shift-up');
            $('.secondary-nav-mobile').addClass('shift-up');

        } else {
            // Top of screen
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            
            // Show the green version of the logo
            $('.white-logo').removeClass('hidden');
            $('.grey-logo').addClass('hidden');

            // Shift secondary nav down
            $('.secondary-nav').removeClass('shift-up');
            $('.secondary-nav-mobile').removeClass('shift-up');
        }
    }
});