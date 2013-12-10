/* global
  define: false,
  console: false
*/
define([
  'lodash',
  'angular',
  'router',

  // modules
  'angular.route',
  'angular.kendo-ui',
  'modules/factories',
  'modules/controllers',
  'modules/directives',
  'modules/filters'
], function( _, ng, router ){
  'use strict';

  return ng
    // define module with dependencies for deferred loading
    .module( 'pitpat', [
      'ngRoute',
      'kendo.directives',
      'factories',
      'controllers',
      'directives',
      'filters'
    ])
    // setup routing
    .config([ '$routeProvider', function ( $routeProvider ) {
      _.each( router, function ( route ) {
        $routeProvider.when( route.route, route );
      });

      $routeProvider.otherwise({
        redirectTo: _.first( router ).route
      });
    }])
    // log the routing
    .run( function( $rootScope ) {
      $rootScope.$on( '$routeChangeSuccess', function ( to, from ) {
        console.log( 'route change', from, to );
      });
    });
});
