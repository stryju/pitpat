/* global
  define: false
*/
define([
  'angular',
  'factories/todos'
], function ( ng, todosFactory ) {
  'use strict';

  return ng.module( 'factories', [] )
    .factory( 'todosFactory', todosFactory );
});
