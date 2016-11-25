//jQuery to collapse the navbar on scroll

// $(function() {
var parallax = $(".parallax"),
    speed = 0.5;


$(window).scroll(function() {
    $('body').scrollspy({ target: '.secondary-nav' });
    
    if ($(".navbar").length) {
        if ($(".navbar").offset().top > 25) {
            // 50 pixels and beyond top of screen
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            
            // Show the black version of the logo
            $('.white-logo').addClass('hidden');
            $('.grey-logo').removeClass('hidden');
            
            // Laguange links turns grey on hover
            // $('#language a').addClass('green-link');
            // $('#language a').removeClass('grey-link');

            // Shift secondary nav up
            $('.secondary-nav').addClass('shift-up');

        } else {
            // Top of screen
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            
            // Show the green version of the logo
            $('.white-logo').removeClass('hidden');
            $('.grey-logo').addClass('hidden');
            
            // // Laguange links turns green on hover
            // $('#language a').removeClass('green-link');
            // $('#language a').addClass('grey-link');

            // Shift secondary nav down
            $('.secondary-nav').removeClass('shift-up');
        }
    }

    [].slice.call(parallax).forEach(function(el,i){
        var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
        el.style.backgroundPosition = elBackgrounPos;
        console.log('el.style.backgroundPosition', el.style.backgroundPosition);
    });

});

// // PARALLAX SCROLLING
// (function(){

//     console.log('PARALLAX SCROLLING LOADED');

//     var parallax = document.querySelectorAll(".parallax"),
//     speed = 0.5;

//     window.onscroll = function(){
//         [].slice.call(parallax).forEach(function(el,i){

//             var windowYOffset = window.pageYOffset,
//             elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

//             el.style.backgroundPosition = elBackgrounPos;

//         });
//     };

// })();