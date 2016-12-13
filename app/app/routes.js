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
