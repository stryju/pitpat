/* global
  define: false
*/
define([
  'angular',
  'directives/todos',
  'directives/notes',
  'directives/alerts'
], function ( ng, todos, notes, alerts ) {
  'use strict';

  return ng.module( 'directives', [] )
    .directive( 'todos', todos )
    .directive( 'notes', notes )
    .directive( 'alerts', alerts );
});
