(function (){
	"use strict";
	fbApp.controller('AppCtrl', ['$rootScope', '$scope', '$firebaseArray', '$location', '$element', '$window',
	    function($rootScope, $scope, $firebaseArray, $location, $element, $window) {
	        $scope.showSecondaryNav = function(viewLocation) {
	            return viewLocation === $location.path();
	        };
	        $scope.location = $location;
	        $scope.currentPath = $location.path();
	        $scope.absoluteUrl = $location.absUrl();

	        // GET CURRENT YEAR
	        $scope.today = new Date();
	        
	        // CREATE A FIREBASE REFERENCE
	        var AppRef = new Firebase('https://franciscobenedict-1aa7b.firebaseio.com/');
	        $scope.fbArray = $firebaseArray(AppRef);
	        console.log('$scope.fbArray', $scope.fbArray);

	        // QUOATE CAROUSEL
	        $scope.myInterval = 10000;

	        // PROFILE PAGE SHOW FULL CAREER DETAILS
	        $scope.showDetails = !$scope.showDetails;

	        // FLIP CARDS SHOW TECHNOLOGIES USED
	        $scope.showTechUsed = !$scope.showTechUsed;

	        // GITHUB API
	        var githubUsername = "franciscobenedict"; // my github username
	        // This makes an AJAX call to github, injects my username and then gets all public facing repos available from my GitHub account
	        $.ajax({
	            type: "GET",
	            url: "https://api.github.com/users/" + githubUsername + "/repos",
	            dataType: "json",
	            success: function(result) {
	                $scope.githubResult = result;
	            }
	        });

	        // $scope.myPattern = 'images/img_parallax.png';
	        //ng-parallax pattern="myPattern" speed="0"

	        // setTimeout(function(){
	        // 	console.log('scrollspy');
        	
		  //       $('body').scrollspy({ target: '.secondary-nav' });
				// if ($(".navbar").length) {
				// 	// 25 pixels and beyond top of screen

				// 	if ($(".navbar").offset().top > 25) {
				// 		console.log('NOT top of screen');
				// 		$(".navbar-fixed-top").addClass("top-nav-collapse");

				// 		// Show the black version of the logo
				// 		$('.white-logo').addClass('hidden');
				// 		$('.grey-logo').removeClass('hidden');

				// 		// Shift secondary nav up
				// 		$('.secondary-nav').addClass('shift-up');

				// 	} else {
				// 		console.log('top of screen');
				// 		// Top of screen
				// 		$(".navbar-fixed-top").removeClass("top-nav-collapse");

				// 		// Show the green version of the logo
				// 		$('.white-logo').removeClass('hidden');
				// 		$('.grey-logo').addClass('hidden');

				// 		// Shift secondary nav down
				// 		$('.secondary-nav').removeClass('shift-up');
				// 	}
				// }
			
	        // }, 0);

	    }
	]);
})();