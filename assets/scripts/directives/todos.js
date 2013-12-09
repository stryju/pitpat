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
      // transclude : true,
      replace    : true,
      scope      : {
        title : '@',
        todos : '='
      },
      controller : function ( $scope ) {
      //   // $scope.todos = [];

        this.addTodo = function ( todo ) {
          $scope.todos.push( todo );
          console.log( $scope.todos );
        };
      },
      template : template
    };
  };
});
