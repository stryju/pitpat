/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$scope',
    'Todos.service',

    function ( $scope, Todos ) {

      function addTodo( todo ) {
        Todos.add( todo );
        $scope.newTodo = {};
      }

      function removeTodo( todo ) {
        Todos.remove( todo );
      }

      $scope.addTodo = addTodo;
      $scope.removeTodo = removeTodo;
    }
  ];
});
