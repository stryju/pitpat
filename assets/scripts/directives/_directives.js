/* global
  define: false
*/
define([
  'angular',
  './todos/todos',
  './todos/todo'
],
function ( ng, todos, todo ) {
  'use strict';

  return ng.module( 'directives', [])
    .directive( 'todos', todos )
    .directive( 'todo', todo );

  return function ( app ) {
    app.compileProvider.register( 'todos', todos );
    app.compileProvider.register( 'todo', todo );
  };
});
