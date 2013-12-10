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
        function ( $scope ) {
        //   // $scope.todos = [];

          this.addTodo = function ( todo ) {
            $scope.todos.push( todo );
            console.log( $scope.todos );
          };
        }
      ],
      template : template
    };
  };
});
