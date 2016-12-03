(function (angular) {
  'use strict';
  
  angular.module('franciscobenedict.modules.scrollto', [])
    .directive('scrollTo', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);


        // SCROLL-TO SECTION
        element.on('click', function () {
          var target = $(attrs.scrollTo);
          if (debug) console.log('target = ' + target.selector);
          if (target.length > 0) {
            angular.element('html, body').animate({
                scrollTop: target.offset().top
            });
          }
        });


        // --------------------
      }
    }
  });
})(angular);
