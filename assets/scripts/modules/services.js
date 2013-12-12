/* global
  define: false
*/
define([
  'angular',
  'factories/todos',
  'factories/notes'
], function ( ng, todos, notes ) {
  'use strict';

  return ng.module( 'services', [] )
    .factory( 'Todos', todos )
    .factory( 'Notes', notes );
});
