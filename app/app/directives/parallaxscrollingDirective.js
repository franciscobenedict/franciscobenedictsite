(function() {
    "use strict";
    fbApp.directive('parallaxScrolling', function ($window) {
        return function(scope, element, attrs) {
            // PARALLAX SCROLLING
            var parallax = angular.element(document.querySelector('.parallax'));
            var speed = 0.5;

            angular.element($window).bind('scroll', function() {
                scope.visible = false;
                scope.$apply();
                [].slice.call(parallax).forEach(function(el,i){
                    var aboutSection = angular.element(document.querySelector('#aboutSection'));
                    if (aboutSection.length){
                        var aboutSectionFromTop = aboutSection.offset().top,
                            moveFromTop = aboutSectionFromTop - $window.pageYOffset,
                            windowYOffset = moveFromTop,
                            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
                        el.style.backgroundPosition = elBackgrounPos;
                    }
                });
            });
        };
    });
})();