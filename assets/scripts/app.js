/* global
  define: false,
  console: false
*/
define([
  'angular',
  'directives/_directives'
], function( ng ){
  'use strict';

  var app = ng.module( 'pitpat', [ 'directives' ] );

  console.log( app );
});
