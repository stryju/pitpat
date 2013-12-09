/* global
  define: false
*/
define([
  'lodash',
  'angular',
  '_router',
  'angular.route',
  'angular.kendo-ui',
  '_controllers',
  '_directives',
], function( _, ng, router ){
  'use strict';

  return ng.module( 'pitpat', [
    'ngRoute',
    'kendo.directives',
    'controllers',
    'directives'
  ]).config([ '$routeProvider', function ( $routeProvider ) {
    _.each( router, function ( view, route ) {
      $routeProvider.when( route, view );
    });

    $routeProvider.otherwise({
        redirectTo: '/'
      });
  }]);

});
