angular.module('App', [])
	.filter('reverse',[function(){
	    return function(string){
	        return string.split('').reverse().join('');
	    }
	}
]);