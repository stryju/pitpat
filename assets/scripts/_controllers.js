/* global
  define: false
*/
define([
  'angular',
  'controllers/pitpat',
], function ( ng, pitpat ) {
  'use strict';

  return ng.module( 'controllers', [] )
    .controller( 'PitPatCtrl', pitpat );
});
