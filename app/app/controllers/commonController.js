(function () {
    "use strict";

    app.controller("commonController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
        var vm = this;

        $http.get("/content/json/common.json").then(function (response) {
            vm.commonContent = response.data;
            console.log("vm.commonContent: ", vm.commonContent);

            // Header and Footer
            $scope.headerContent = vm.commonContent.headerContent;
            $scope.footerContent = vm.commonContent.footerContent;

            // Go to page
            $scope.go = function (path) {
                $location.path(path);
            };
        },
        function (error) {
            console.log('error: ', error);
        });
    }]);
})();