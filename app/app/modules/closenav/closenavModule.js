(function (angular) {
  'use strict';

  angular.module('franciscobenedict.modules.closenav', [])
  .directive('closeNav', ['$window', '$document', '$timeout', function ($window, $document, $timeout) {
    return {
      restrict: 'A',
      scope: {
        offset: "@",
        scrollClass: "@"
      },
      link: function (scope, element, attrs) {

        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);

        $timeout(function() {
          // CLOSE MENU WHEN SELECTING ITEM IN MOBILE VIEW
          $(document).mousedown(function (e) {
            element.on('click', function(e) {
              if (debug) console.log('CLOSE MENU WHEN SELECTING ITEM IS IN MOBILE VIEW');
              if (angular.element('#mainMenu').hasClass('in')) {
                if (debug) console.log('MENU IS OPEN!! ');
                angular.element('#hamburgerButon').trigger('click');
              }
            });
          });
        }, 50);

        // ------------------------
      }
    }
  }]);
})(angular);
