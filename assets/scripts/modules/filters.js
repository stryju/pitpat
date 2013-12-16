/* global
  define: false
*/
define([
  'angular',
  './filters/time-left',
  './filters/hashtags'
], function ( ng, timeLeft, hashtags ) {
  'use strict';

  return ng.module( 'filters', [] )
    .filter( 'timeLeft', timeLeft )
    .filter( 'hashtags', hashtags );
});
