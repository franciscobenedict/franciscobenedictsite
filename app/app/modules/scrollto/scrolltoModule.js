(function (angular) {
    'use strict';
    
    angular.module('franciscobenedict.modules.scrollto', [])
        .directive('scrollTo', function () {
		    return {
		        restrict: 'A',
		        link: function (scope, element, attrs) {

		            // SCROLL-TO SECTION
		            element.on('click', function () {
		                var target = $(attrs.scrollTo);
		                if (target.length > 0) {
		                    angular.element('html, body').animate({
		                        scrollTop: target.offset().top
		                    });
		                }
		            });

		            // CLOSE MENU WHEN SELECTING ITEM IN MOBILE VIEW
		            element.on('click', function(e) {
		                if (angular.element('#mainMenu').hasClass('in')) {
		                    angular.element('#hamburgerButon').trigger('click');   
		                }
		            });

		            // SCROLL-SPY
		            angular.element('body').scrollspy({target: ".secondary-nav"});
		            angular.element('body').scrollspy({target: ".secondary-nav-mobile"});
		        }
		    }
		});
})(angular);
