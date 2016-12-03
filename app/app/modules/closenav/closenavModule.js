(function (angular) {
  'use strict';

  angular.module('franciscobenedict.modules.closenav', [])
  .directive('closeNav', ['$window', '$document', function ($window, $document) {
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


        // CLOSE MENU WHEN SELECTING ITEM IN MOBILE VIEW
        element.on('click', function(e) {
          if (debug) console.log('CLOSE MENU WHEN SELECTING ITEM IN MOBILE VIEW');
          $(document).mouseup(function (e) {
            if (angular.element('#mainMenu').hasClass('in')) {
              if (debug) console.log('MENU IS OPEN!! ');
              angular.element('#hamburgerButon').trigger('click');
            }
          });
        });

        // ------------------------
      }
    }
  }]);
})(angular);
