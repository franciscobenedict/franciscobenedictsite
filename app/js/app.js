var fbApp = angular.module('FBApp', ['firebase', 'ngSanitize']);

fbApp.controller('AppCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray, $sce) {

        // CREATE A FIREBASE REFERENCE
        var AppRef = new Firebase('https://franciscobenedict-1aa7b.firebaseio.com/');
        $scope.fbArray = $firebaseArray(AppRef);

        console.log('$scope.fbArray', $scope.fbArray);
        
        // $scope.welcome = $scope.fbArray[0][0];
        // console.log('$scope.welcome', $scope.welcome);

        // $scope.footerData 
        
        $scope.date = new Date();
    }
]);

angular.module('App', [])
	.filter('reverse',[function(){
	    return function(string){
	        return string.split('').reverse().join('');
	    }
	}
]);