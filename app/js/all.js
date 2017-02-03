"use strict";
var fbApp = angular.module("FBApp", [
	"ngRoute",
	"firebase",
	"ngSanitize",
	"ui.bootstrap",
	"ngParallax",
	"ngScrollSpy",
	"formio",

	"franciscobenedict.modules.main",
	"franciscobenedict.modules.scrollto",
	"franciscobenedict.modules.closenav",
	"franciscobenedict.modules.parallaxscrolling",
	"franciscobenedict.modules.navcollapse",
	"franciscobenedict.modules.contactform",
	"franciscobenedict.modules.limitchar"
]);

(function () {
    "use strict";

    fbApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/home/", { redirectTo: "/" })
            .when("/", {
                templateUrl: "../app/views/home.html",
                title: "Francisco Benedict: the developer"
            })
            .when("/profile/", {
                templateUrl: "../app/views/profile.html",
                title: "The profile of Francisco Benedict: career summary, key professional skills, qualification and Education"
            })
            .when("/portfolio/", {
                templateUrl: "../app/views/portfolio.html",
                title: "View the portfolio of Francisco Benedict: see web User Interfaces I've created and links to my Github repos"
            })
            .when("/contact-me/", {
                templateUrl: "../app/views/contactme.html",
                title: "Get in touch with Francisco Benedict"
            })
            .when("/thank-you-for-making-contact/", {
                templateUrl: "../app/views/thankyou.html",
                title: "Thank you for gettoing in touch with Francisco Benedict"
            })
            .otherwise({
                redirectTo: "/page-not-found/",
                templateUrl: "../app/views/404.html",
                title: "This page is not found on the www.franciscobenedict.com website"
            });
    }]);

    fbApp.run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);
})();

(function (){
    'use strict';

    angular.module('franciscobenedict.modules.main', [])
    .controller('AppCtrl', ['$rootScope', '$scope', '$firebaseArray', '$location', '$element', '$window',
        function($rootScope, $scope, $firebaseArray, $location, $element, $window) {
            //Debug switch
            var debug = false;
            if (debug) console.log('debug = ' + debug);

            $scope.showSecondaryNav = function(viewLocation) {
                return viewLocation === $location.path();
            };
            $scope.location = $location;
            $scope.currentPath = $location.path();
            $scope.absoluteUrl = $location.absUrl();

            // GET CURRENT YEAR
            $scope.today = new Date();
            
            // CREATE A FIREBASE REFERENCE
            var firebareURL = atob("aHR0cHM6Ly9mcmFuY2lzY29iZW5lZGljdC0xYWE3Yi5maXJlYmFzZWlvLmNvbS8=");
            var AppRef = new Firebase(firebareURL);
            $scope.fbArray = $firebaseArray(AppRef);
            if (debug) console.log('$scope.fbArray', $scope.fbArray);

            // QUOATE CAROUSEL
            $scope.myInterval = 10000;

            // PROFILE PAGE SHOW FULL CAREER DETAILS
            $scope.showDetails = !$scope.showDetails;

            // FLIP CARDS SHOW TECHNOLOGIES USED
            $scope.showTechUsed = !$scope.showTechUsed;

            // GITHUB API
            var githubUsername = atob("ZnJhbmNpc2NvYmVuZWRpY3Q=");
            // This makes an AJAX call to github, injects my username and then gets all public facing repos available from my GitHub account
            $.ajax({
                type: "GET",
                url: "https://api.github.com/users/" + githubUsername + "/repos",
                dataType: "json",
                success: function(result) {
                    $scope.githubResult = result;
                }
            });

            // On successful Submit
            $scope.$on('formSubmission', function(err, submission) {
                if (debug) console.log("CONTROLLER: form sucessfully submitted so let's redirect");
                $location.path('thank-you-for-making-contact');
            })

            // COUNT WORDS IN RECOMMENDATIONS
            $scope.countOf = function(text) {
                var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
                return s ? s.length : '';
            };


            // ----------------------------
        }
    ]);
})();

(function (angular) {
  'use strict';
  
  angular.module('franciscobenedict.modules.scrollto', [])
    .directive('scrollTo', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);


        // SCROLL-TO SECTION
        element.on('click', function () {
          var target = $(attrs.scrollTo);
          if (debug) console.log('target = ' + target.selector);
          if (target.length > 0) {
            angular.element('html, body').animate({
                scrollTop: target.offset().top
            });
          }
        });


        // --------------------
      }
    }
  });
})(angular);

(function (angular) {
  'use strict';

  angular.module('franciscobenedict.modules.closenav', [])
  .directive('closeNav', ['$window', '$document', '$timeout', function ($window, $document, $timeout) {
    return {
      restrict: 'A',
      scope: {
        offset: "@",
        scrollClass: "@"
      },
      link: function (scope, element, attrs) {

        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);

        $timeout(function() {
          // CLOSE MENU WHEN SELECTING ITEM IN MOBILE VIEW
          $(document).mousedown(function (e) {
            element.on('click', function(e) {
              if (debug) console.log('CLOSE MENU WHEN SELECTING ITEM IS IN MOBILE VIEW');
              if (angular.element('#mainMenu').hasClass('in')) {
                if (debug) console.log('MENU IS OPEN!! ');
                angular.element('#hamburgerButon').trigger('click');
              }
            });
          });
        }, 50);

        // ------------------------
      }
    }
  }]);
})(angular);

(function (angular) {
  'use strict';
  
  angular.module('franciscobenedict.modules.parallaxscrolling', [])
    .directive('parallaxScrolling', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);

        // PARALLAX SCROLLING
        var parallax = angular.element(document.querySelector('.parallax'));
        var speed = 0.5;

        angular.element($window).bind('scroll', function() {
          if (debug) console.log('SCROLLING SCREEN');

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
      }
    }
  }]);
})(angular);
(function (angular) {
  'use strict';

  angular.module('franciscobenedict.modules.navcollapse', [])
  .directive('collapseNav', [ function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        //Debug switch
        var debug = false;
        if (debug) console.log('debug = ' + debug);

        var $page = angular.element(window)
        var $el   = element[0]
        var last_top = $el.getBoundingClientRect().top - 60;
        
        $page.bind('scroll', function () {
          // COLLAPSE THE MENU BAR ON SCROLL
          var navBar = angular.element('.navbar'),
              navBarFixedTop = angular.element('.navbar-fixed-top'),
              secondaryNav = angular.element('.secondary-nav'),
              secondaryNavMobile = angular.element('.secondary-nav-mobile'),
              whiteLogo = angular.element('.white-logo'),
              greyLogo = angular.element('.grey-logo');

          if (navBar.length) {
            // 25 pixels and beyond top of screen
            if (navBar.offset().top > 25) {
              navBarFixedTop.addClass("top-nav-collapse");
              
              // Show the black version of the logo
              whiteLogo.addClass('hidden');
              greyLogo.removeClass('hidden');

              // Shift secondary nav up
              secondaryNav.addClass('shift-up');
              secondaryNavMobile.addClass('shift-up');

            } else {
              // Top of screen
              navBarFixedTop.removeClass("top-nav-collapse");
              
              // Show the green version of the logo
              whiteLogo.removeClass('hidden');
              greyLogo.addClass('hidden');

              // Shift secondary nav down
              secondaryNav.removeClass('shift-up');
              secondaryNavMobile.removeClass('shift-up');
            }
          }
        });

        
        // ------------------------
      }
    }
  }]);
})(angular);

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
(function (angular) {
  'use strict';
  
  angular.module('franciscobenedict.modules.limitchar', [])
  .filter('limitChar', function () {
    return function (input, words) {
      if (isNaN(words)) {
        return input;
      }
      if (words <= 0) {
        return '';
      }
      if (input) {
        var inputWords = input.split(/\s+/);
        if (inputWords.length > words) {
          input = inputWords.slice(0, words).join(' ') + '\u2026';
        }
      }

      return input;
      // --------------------
    };
  });
})(angular);

//Debug switch
var debug = false;
if (debug) console.log('debug = ' + debug);

var 
    apiKeyEnc =             atob("QUl6YVN5QUxsaTBpd3otTThtYUQ5dk55a2wzT1pBb1FxdU1mN3Jj"),
    authDomainEnc =         atob("ZnJhbmNpc2NvYmVuZWRpY3QtMWFhN2IuZmlyZWJhc2VhcHAuY29t"),
    databaseURLEnc =        atob("aHR0cHM6Ly9mcmFuY2lzY29iZW5lZGljdC0xYWE3Yi5maXJlYmFzZWlvLmNvbQ=="),
    storageBucketEnc =      atob("ZnJhbmNpc2NvYmVuZWRpY3QtMWFhN2IuYXBwc3BvdC5jb20="),
    messagingSenderIdEnc =  atob("MzcyNjQzNTE5MDQ0");

var firebase_config = {
	apiKey: apiKeyEnc,
    authDomain: authDomainEnc,
    databaseURL: databaseURLEnc,
    storageBucket: storageBucketEnc,
    messagingSenderId: messagingSenderIdEnc
};

if (debug) console.log('firebase_config', firebase_config);

firebase.initializeApp(firebase_config);