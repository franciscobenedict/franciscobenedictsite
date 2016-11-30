(function (angular) {
    'use strict';
    
    angular.module('franciscobenedict.modules.scrollspy', [])
        .directive('scrollSpy', function () {
      //   	return {
		    //     restrict: 'A',
		    //     link: function(scope, elem, attr) {
		    //         // var offset = parseInt(attr.scrollOffset, 10)
		    //         // if(!offset) offset = 10;
		    //         // console.log("offset:  " + offset);
		    //         // elem.scrollspy({ "offset" : offset});
		    //         // scope.$watch(attr.scrollSpy, function(value) {
		    //         //     $timeout(function() { 
		    //         //       elem.scrollspy('refresh', { "offset" : offset})
		    //         //     }, 1);
		    //         // }, true);
		    //     }
		    // }

		    return {
		        restrict: 'A',
		        link: function (scope, element, attrs) {

		        	console.log('scroll spy');

		        	// var offset = parseInt(attr.scrollOffset, 10);
		         //    if(!offset) offset = 10;
		         //    console.log("offset:  " + offset);
		         //    element.scrollspy({ "offset" : offset});
		         //    scope.$watch(attr.scrollSpy, function(value) {
		         //        $timeout(function() { 
		         //          element.scrollspy('refresh', { "offset" : offset})
		         //        }, 1);
		         //    }, true);
		        }
		    }


		   //      	angular.element('body').scrollspy({ target: '.secondary-nav' });
					// if (angular.element(".navbar").length) {
					// 	// 25 pixels and beyond top of screen

					// 	if (angular.element(".navbar").offset().top > 25) {
					// 		console.log('NOT top of screen');
					// 		angular.element(".navbar-fixed-top").addClass("top-nav-collapse");

					// 		// Show the black version of the logo
					// 		angular.element('.white-logo').addClass('hidden');
					// 		angular.element('.grey-logo').removeClass('hidden');

					// 		// Shift secondary nav up
					// 		angular.element('.secondary-nav').addClass('shift-up');

					// 	} else {
					// 		console.log('top of screen');
					// 		// Top of screen
					// 		angular.element(".navbar-fixed-top").removeClass("top-nav-collapse");

					// 		// Show the green version of the logo
					// 		angular.element('.white-logo').removeClass('hidden');
					// 		angular.element('.grey-logo').addClass('hidden');

					// 		// Shift secondary nav down
					// 		angular.element('.secondary-nav').removeClass('shift-up');
					// 	}
					// }


		            // // SCROLL-TO SECTION
		            // element.on('click', function () {
		            //     var target = $(attrs.scrollTo);
		            //     if (target.length > 0) {
		            //         angular.element('html, body').animate({
		            //             scrollTop: target.offset().top
		            //         });
		            //     }
		            // });

		            // // CLOSE MENU WHEN SELECTING ITEM IN MOBILE VIEW
		            // element.on('click', function(e) {
		            //     if (angular.element('#mainMenu').hasClass('in')) {
		            //         angular.element('#hamburgerButon').trigger('click');   
		            //     }
		            // });

		            // // SCROLL-SPY
		            // angular.element('body').scrollspy({target: ".secondary-nav"});
		            // angular.element('body').scrollspy({target: ".secondary-nav-mobile"});



		            /*
						$('body').scrollspy({ target: '.secondary-nav' });
						if ($(".navbar").length) {
							// 25 pixels and beyond top of screen

							if ($(".navbar").offset().top > 25) {
								console.log('NOT top of screen');
								$(".navbar-fixed-top").addClass("top-nav-collapse");

								// Show the black version of the logo
								$('.white-logo').addClass('hidden');
								$('.grey-logo').removeClass('hidden');

								// Shift secondary nav up
								$('.secondary-nav').addClass('shift-up');

							} else {
								console.log('top of screen');
								// Top of screen
								$(".navbar-fixed-top").removeClass("top-nav-collapse");

								// Show the green version of the logo
								$('.white-logo').removeClass('hidden');
								$('.grey-logo').addClass('hidden');

								// Shift secondary nav down
								$('.secondary-nav').removeClass('shift-up');
							}
						}
		            */
		        // }
		    // }
		});
})(angular);
