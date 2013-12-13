/* global
  define: false
*/
define([
  'angular',
  './notes/directive',
  './notes/factory'
], function ( ng, directive, factory ) {
  'use strict';

  return ng.module( 'Notes', [] )
    .directive( 'notes', directive )
    .factory( 'Notes.service', factory );
});
