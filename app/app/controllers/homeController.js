(function () {
    'use strict';

    app.controller("homeController", ["$scope", "$http", "$firebaseArray", function ($scope, $http, $routeProvider, $firebaseArray) {
        var vm = this;

        console.log('HOME CONTROLLER LOADED');

        $scope.date = new Date();

        // CREATE A FIREBASE REFERENCE
        var AppRef = new Firebase('https://franciscobenedict-1aa7b.firebaseio.com/');
        $scope.fbArray = $firebaseArray(AppRef);
        console.log('$scope.fbArray', $scope.fbArray);

        // vm.title = "Lorem ipsum dolor sit amet";
        // vm.homePageIntro = "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

        // $http.get("/content/json/home.json").then(function (response) {
        // },
        // function (error) { });

        // $scope.change = function (option) {
        //     console.log(option);
        // }
    }]);
})();