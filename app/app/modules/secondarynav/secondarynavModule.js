(function (angular) {
	'use strict';

	angular.module('franciscobenedict.modules.secondarynav', [])
		.directive('secondaryNavSpy', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					angular.element('body').scrollspy({target: ".secondary-nav"});
					angular.element('body').scrollspy({target: ".secondary-nav-mobile"});
				}
			}
		});
})(angular);