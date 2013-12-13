/* global
  define: false
*/
define([
  'angular',
  './filters/time-left'
], function ( ng, timeLeft ) {
  'use strict';

  return ng.module( 'filters', [] )
    .filter( 'timeLeft', timeLeft );
});
