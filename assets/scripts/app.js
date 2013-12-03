/* global
  define: false
*/
define([
  'angular',
  'directives/_directives'
], function( ng ){
  'use strict';

  ng.module( 'pitpat', [ 'directives' ] );
  ng.bootstrap( document, [ 'pitpat' ] );
});
