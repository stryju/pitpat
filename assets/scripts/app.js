/* global
  define: false,
  console: false
*/
define([
  'angular',
  'directives/_directives'
], function( ng, directives ){
  'use strict';

  var app = ng.module( 'pitpat', [ 'directives' ] );
  // var app = ng.module( 'pitpat', [] );

  // app.config( function ( $routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide ) {
  //   app.controllerProvider = $controllerProvider;
  //   app.compileProvider    = $compileProvider;
  //   app.routeProvider      = $routeProvider;
  //   app.filterProvider     = $filterProvider;
  //   app.provide            = $provide;

  //   // Register routes with the $routeProvider
  // });

  // directives( app );

  console.log( app );

  // todos( app );
});
