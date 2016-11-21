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
        })
        .otherwise({
            redirectTo: "/page-not-found",
            templateUrl: "../app/views/404.html"
        });
});


fbApp.controller('AppCtrl', ['$rootScope', '$scope', '$firebaseArray', '$location', '$element', 
    function($rootScope, $scope, $firebaseArray, $location, $element) {

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

// fbApp.directive('scrollSpy', function($timeout){
//     return {
//         restrict: 'A',
//         link: function(scope, elem, attr) {
//             var offset = parseInt(attr.scrollOffset, 10)
//             if(!offset) offset = 10;
//             console.log("offset:  " + offset);
//             elem.scrollspy({ "offset" : offset});
//             scope.$watch(attr.scrollSpy, function(value) {
//                 $timeout(function() { 
//                   elem.scrollspy('refresh', { "offset" : offset})
//                 }, 1);
//             }, true);
//         }
//     }
// });

















// // =============================
// fbApp.directive('scrollSpy', function($timeout){
//     return {
//         restrict: 'A',
//         link: function(scope, elem, attr) {
//             var offset = parseInt(attr.scrollOffset, 10)
//             if(!offset) offset = 10;
//             console.log("offset:  " + offset);
//             elem.scrollspy({ "offset" : offset});
//             scope.$watch(attr.scrollSpy, function(value) {
//                 $timeout(function() { 
//                   elem.scrollspy('refresh', { "offset" : offset})
//                 }, 1);
//             }, true);
//         }
//     }
// });

// fbApp.directive('preventDefault', function() {
//     return function(scope, element, attrs) {
//         jQuery(element).click(function(event) {
//             event.preventDefault();
//         });
//     }
// });

// fbApp.directive("scrollTo", ["$window", function($window){
//     return {
//         restrict : "AC",
//         compile : function(){

//             function scrollInto(elementId) {
//                 if(!elementId) $window.scrollTo(0, 0);
//                 //check if an element can be found with id attribute
//                 var el = document.getElementById(elementId);
//                 if(el) el.scrollIntoView();
//             }

//             return function(scope, element, attr) {
//                 element.bind("click", function(event){
//                     scrollInto(attr.scrollTo);
//                 });
//             };
//         }
//     };
// }]);
// // =============================

















// fbApp.directive('preventDefault', function() {
//     return function(scope, element, attrs) {
//         jQuery(element).click(function(event) {
//             event.preventDefault();
//         });
//     }
// });

// angular.module('App', [])
// 	.filter('reverse',[function(){
// 	    return function(string){
// 	        return string.split('').reverse().join('');
// 	    }
// 	}
// ]);