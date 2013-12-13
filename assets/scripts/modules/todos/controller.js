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
      $scope.addTodo = function ( todo ) {
        Todos.add( todo );
        // $scope.newTodoForm.$setPristine();
        $scope.newTodo = {};
      };
    }
  ];
});
