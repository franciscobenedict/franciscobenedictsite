var fbApp = angular.module('FBApp', ['ngRoute', 'firebase', 'ngSanitize', 'ui.bootstrap']);

fbApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/home", { redirectTo: "/" })
        .when("/", {
            templateUrl: "../app/views/home.html",
            title: "Francisco Benedict: the developer"
        })
        .when("/profile", {
            templateUrl: "../app/views/profile.html",
            title: "The profile of Francisco Benedict: career summary, key professional skills, qualification and Education"
        })
        .when("/portfolio", {
            templateUrl: "../app/views/portfolio.html",
            title: "View the portfolio of Francisco Benedict: see web User Interfaces I've created and links to my Github repos"
        })
        .when("/contact-me", {
            templateUrl: "../app/views/contactme.html",
            title: "Get in touch with Francisco Benedict"
        })
        .otherwise({
            redirectTo: "/page-not-found",
            templateUrl: "../app/views/404.html",
            title: "This page is not found on the www.franciscobenedict.com website"
        });
});

fbApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);


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