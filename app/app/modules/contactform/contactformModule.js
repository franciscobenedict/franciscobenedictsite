(function (angular) {
  'use strict';

  angular.module('franciscobenedict.modules.contactform', [])
  .directive('contactForm', ['$http', '$window', '$document', '$timeout', function ($http, $window, $document, $timeout) {
    return {
      restrict: 'A',
      scope: {
        offset: "@",
        scrollClass: "@"
      },
      link: function (scope, element, attrs, http) {
        console.log('contact form directive loaded');
        $timeout(function(){
          var inputElement = $('input, textarea');
          var labelElement = inputElement.parent().parent().find('.control-label');
          
          if (inputElement) {
            // IF IS FOCUSED
            inputElement.focus(function() {
              var thisInput = $(this);
              var thisLabel = $(this).parent().parent().find('.control-label');
              
              inputElement.removeClass('has-focus');
              thisInput.addClass('has-focus');

              labelElement.removeClass('has-focus');
              thisLabel.addClass('has-focus');
              // thisLabel.addClass('has-focus');
            });

            // IF IS FILLED
            inputElement.blur(function(){
              var thisInput = $(this);
              var thisLabel = $(this).parent().parent().find('.control-label');
              if($(this).val().length === 0) {
                inputElement.removeClass('is-filled');
                labelElement.removeClass('is-filled');
              } else {
                thisInput.addClass('is-filled');
                thisLabel.addClass('is-filled');
              }
            });
          }
        }, 500);

        // ------------------------
      }
    }
  }]);
})(angular);