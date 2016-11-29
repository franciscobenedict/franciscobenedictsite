(function() {
	"use strict";
	
	fbApp.directive('secondaryNavSpy', function () {
	    return {
	        restrict: 'A',
	        link: function (scope, element, attrs) {
	            $('body').scrollspy({target: ".secondary-nav"});
	            $('body').scrollspy({target: ".secondary-nav-mobile"});
	        }
	    }
	});
})();