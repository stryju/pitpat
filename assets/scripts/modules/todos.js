/* global
  define: false
*/
define([
  'angular',
  './todos/directive',
  './todos/factory'
], function ( ng, directive, factory ) {
  'use strict';

  return ng.module( 'Todos', [] )
    .directive( 'todos', directive )
    .factory( 'Todos.service', factory );
});
