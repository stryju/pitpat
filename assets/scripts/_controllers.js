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

  _.each( router, function ( view ) {
    if ( view.controller ) {
      app.controller( view.title + 'Ctrl', view.controller );
    }
  });

  return app;
});
