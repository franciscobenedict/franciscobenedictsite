(function () {
    "use strict";

    app.config(["$provide", "$routeProvider", "$locationProvider", function ($provide, $routeProvider, $locationProvider) {
        
        //$provide.decorator('$sniffer', function($delegate) {
	    //    $delegate.history = false;
	    //    return $delegate;
		//});

        //$locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        $routeProvider
            .when("/home", { redirectTo: "/" })
            .when("/", {
                controller: "homeController",
                controllerAs: "vm",
                templateUrl: "/app/views/home.html"
            })
        
            /*
                // .when("/selectTest", {
                //     controller: "selecttestController",
                //     controllerAs: "vm",
                //     templateUrl: "/app/views/selecttest/select-test.html"
                // })
                // .when("/assignTest", {
                //     controller: "assigntestController",
                //     controllerAs: "vm",
                //     templateUrl: "/app/views/assigntest/assign-test.html"
                // })
                // .when("/dashboardDetail", {
                //     controller: "dashboarddetailController",
                //     controllerAs: "vm",
                //     templateUrl: "/app/views/dashboarddetail/dashboard-detail.html"
                // })
                // .when("/studentProfile", {
                //     controller: "studentprofileController",
                //     controllerAs: "vm",
                //     templateUrl: "/app/views/studentprofile/student-profile.html"
                // });
            */

        $routeProvider.otherwise({
            controller: "pageNotFoundController",
            controllerAs: "vm",
            templateUrl: "/app/views/404.html"
        });
    }]);
})();
