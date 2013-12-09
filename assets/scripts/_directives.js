/* global
  define: false
*/
define([
  'angular',
  'directives/todos',
  'directives/alerts'
], function ( ng, todos, alerts ) {
  'use strict';

  return ng.module( 'directives', [] )
    .directive( 'todos', todos )
    .directive( 'alerts', alerts );
});
