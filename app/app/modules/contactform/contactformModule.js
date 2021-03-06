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
        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);

        if (debug) console.log('contact form directive loaded');
        $timeout(function(){
          $(document).ready(function(){
            var fbContactFormElements = $('#fbContactForm form');
            var inputElement = $('input, textarea');
            var labelElement = inputElement.parent().parent().find('.control-label');
            
            // ADD AUTOCOMPLETE="OFF" ATTRIBUTE TO EACH FORM INPUT ELEMENT
            if (fbContactFormElements) {
              fbContactFormElements.attr('autocomplete', 'off');
            }

            if (inputElement) {
              $('#fbContactForm').delegate( '*', 'focus blur', function() {
                inputElement.attr('autocomplete', 'off');
                var thisInput = $(this);
                var thisLabel = $(this).parent().prev('label');
                setTimeout(function() {
                  // IF IS FOCUSED
                  thisInput.toggleClass('has-focus', thisInput.is(':focus'));
                  thisLabel.toggleClass('has-focus', thisInput.is(':focus'));

                  // IF INPUT FIELD IS FILLED
                  if(thisInput.val().length === 0) {
                    inputElement.removeClass('is-filled');
                    labelElement.removeClass('is-filled');
                  } else {
                    thisInput.addClass('is-filled');
                    thisLabel.addClass('is-filled');
                  }

                }, 0 );
              });
            }
          });
        }, 500);


        // ------------------------
      }
    }
  }]);
})(angular);