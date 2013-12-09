/* global
  define: false
*/
define([
  'angular',
  'text!templates/pages/dashboard.html',
  'angular-kendo-ui',
  '_controllers',
  '_directives'
], function( ng, dashboardTemplate ){
  'use strict';

  return ng.module( 'pitpat', [
    'kendo.directives',
    'controllers',
    'directives'
  ]).config( function ( $routeProvider ) {
    $routeProvider
      .when( '/', {
        template: dashboardTemplate
      })
      .otherwise({
        redirectTo: '/'
      });
  });

});
