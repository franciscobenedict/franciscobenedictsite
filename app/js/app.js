var fbApp = angular.module('FBApp', ['ngRoute', 'firebase', 'ngSanitize', 'ui.bootstrap']);

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
        })
        .otherwise({
            redirectTo: "/page-not-found",
            templateUrl: "../app/views/404.html"
        });
});

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
    }
]);

fbApp.directive('scrollTo', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            // SCROLL-TO SECTION
            element.on('click', function () {
                var target = $(attrs.scrollTo);
                if (target.length > 0) {
                    $('html, body').animate({
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
            $('body').scrollspy({target: ".secondary-nav"});
            $('body').scrollspy({target: ".secondary-nav-mobile"});
        }
    }
});

fbApp.directive('secondaryNavSpy', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $('body').scrollspy({target: ".secondary-nav"});
            $('body').scrollspy({target: ".secondary-nav-mobile"});
        }
    }
});

fbApp.directive('parallaxScrolling', function ($window) {
    return function(scope, element, attrs) {
        // PARALLAX SCROLLING
        var parallax = angular.element(document.querySelector('.parallax'));
        var speed = 0.5;

        angular.element($window).bind('scroll', function() {
            scope.visible = false;
            scope.$apply();
            [].slice.call(parallax).forEach(function(el,i){
                var aboutSection = angular.element(document.querySelector('#aboutSection'));
                if (aboutSection.length){
                    var aboutSectionFromTop = aboutSection.offset().top,
                        moveFromTop = aboutSectionFromTop - $window.pageYOffset,
                        windowYOffset = moveFromTop,
                        elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
                    el.style.backgroundPosition = elBackgrounPos;
                }
            });
        });
    };
});

// angular.module('App', [])
// 	.filter('reverse',[function(){
// 	    return function(string){
// 	        return string.split('').reverse().join('');
// 	    }
// 	}
// ]);