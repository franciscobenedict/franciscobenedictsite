var fbApp = angular.module('FBApp', ['ngRoute', 'firebase', 'ngSanitize']);

fbApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/home", { redirectTo: "/" })
        .when("/", {
            templateUrl: "../app/views/home.html"
        })
        .when("/profile", {
            templateUrl: "../app/views/profile.html"
        })
        .when("/portfolio", {
            templateUrl: "../app/views/portfolio.html"
        })
        .when("/contactme", {
            templateUrl: "../app/views/contactme.html"
        });
    $routeProvider.otherwise({
        templateUrl: "../app/views/404.html"
    });
});


fbApp.controller('AppCtrl', ['$scope', '$firebaseArray', '$location', '$element', 
    function($scope, $firebaseArray, $location, $element) {
        $scope.urlLocation = $location.path();
        // console.log('$scope.urlLocation: ', $scope.urlLocation);

        // $scope.showSecondaryNav = $location.path() === '/';
        $scope.checkLocation = function() {
            // $scope.urlLocation = '';
            $scope.urlLocation = $location.path();
            // console.log('$scope.urlLocation: ', $scope.urlLocation);
            // console.log('checkLocation function called');
            // $scope.showSecondaryNav = $location.path() === '/';
            // console.log('$location.path(): ', $location.path());
        }

        // GET CURRENT YEAR
        $scope.date = new Date();
        
        // CREATE A FIREBASE REFERENCE
        var AppRef = new Firebase('https://franciscobenedict-1aa7b.firebaseio.com/');
        $scope.fbArray = $firebaseArray(AppRef);
        console.log('$scope.fbArray', $scope.fbArray);
    }
]);

fbApp.directive('scrollTo', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                var target = $(attrs.scrollTo);
                if (target.length > 0) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    });
                }
            });

            element.on('click', function(e) {
                if (angular.element('#mobileMenu').hasClass('in')) {
                    angular.element('#hamburgerButon').trigger('click');   
                }
            });
        }
    }
});

// angular.module('App', [])
// 	.filter('reverse',[function(){
// 	    return function(string){
// 	        return string.split('').reverse().join('');
// 	    }
// 	}
// ]);