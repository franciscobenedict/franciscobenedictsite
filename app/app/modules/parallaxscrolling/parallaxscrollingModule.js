(function (angular) {
  'use strict';
  
  angular.module('franciscobenedict.modules.parallaxscrolling', [])
    .directive('parallaxScrolling', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);

        // PARALLAX SCROLLING
        var parallax = angular.element(document.querySelector('.parallax'));
        var speed = 0.5;

        angular.element($window).bind('scroll', function() {
          if (debug) console.log('SCROLLING SCREEN');

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
      }
    }
  }]);
})(angular);