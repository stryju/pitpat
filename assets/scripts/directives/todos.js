/* global
  define: false,
  console: false
*/
define([
  'text!templates/directives/todos.html'
], function ( template ) {
  'use strict';

  return function () {
    console.log( 'init todos directive' );

    return {
      restrict   : 'E',
      replace    : true,
      scope      : {
        todos : '=data'
      },

      controller : [
        '$scope',
        'Todos',

        function ( $scope, Todos ) {
          $scope.addTodo = Todos.add;
        }
      ],
      template : template
    };
  };
});
