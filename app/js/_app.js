var app = angular.module('App', ['ngRoute', 'firebase', 'ngSanitize']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../app/views/home.html"
    })
    // .when("/red", {
    //     templateUrl : "red.htm"
    // })
    // .when("/green", {
    //     templateUrl : "green.htm"
    // })
    // .when("/blue", {
    //     templateUrl : "blue.htm"
    // });
});

app.controller('AppCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray, $sce) {

        // Get current year
        $scope.date = new Date();

        // CREATE A FIREBASE REFERENCE
        var AppRef = new Firebase('https://franciscobenedict-1aa7b.firebaseio.com/');
        $scope.fbArray = $firebaseArray(AppRef);
        console.log('$scope.fbArray', $scope.fbArray);
    }
]);

// angular.module('App', [])
// 	.filter('reverse',[function(){
// 	    return function(string){
// 	        return string.split('').reverse().join('');
// 	    }
// 	}
// ]);