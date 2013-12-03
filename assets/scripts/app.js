/* global
  define: false
*/
define([
  'angular',
  'directives/_directives'
], function( ng ){
  'use strict';

  ng.element( document )
    .ready(function() {
      ng.module( 'pitpat', [ 'directives' ] );
      ng.bootstrap( document, [ 'pitpat' ] );
    });
});
