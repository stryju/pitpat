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
  'angular.sanitize',
  'angular.kendo-ui',

  'modules/controllers',
  'modules/todos',
  'modules/alerts',
  'modules/notes',
  // 'modules/services',
  // 'modules/directives',
  'modules/filters'
], function( _, ng, router ){
  'use strict';

  return ng
    // define module with dependencies for deferred loading
    .module( 'pitpat', [
      'ngRoute',
      'ngSanitize',
      'kendo.directives',
      // 'services',
      'controllers',
      // 'directives',
      'Todos',
      'Notes',
      'Alerts',
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
