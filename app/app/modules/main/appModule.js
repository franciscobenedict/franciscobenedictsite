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
