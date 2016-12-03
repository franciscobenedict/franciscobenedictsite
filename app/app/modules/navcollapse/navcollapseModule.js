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
