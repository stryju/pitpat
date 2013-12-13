/* global
  define: false
*/
define([
  'angular',
  './alerts/directive',
  './alerts/factory'
], function ( ng, directive, factory ) {
  'use strict';

  return ng.module( 'Alerts', [] )
    .directive( 'alerts', directive )
    .factory( 'Alerts.service', factory );
});
