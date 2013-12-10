/* global
  define: false
*/
define([
  'lodash',
  'angular',
  'controllers/pitpat',
  '_router'
], function ( _, ng, pitpat, router ) {
  'use strict';

  var app = ng.module( 'controllers', [] )
    .controller( 'PitPatCtrl', pitpat );

  _.each( router, function ( route ) {
    if ( route.controller ) {
      app.controller( route.name + 'Ctrl', route.controller );
    }
  });

  return app;
});
