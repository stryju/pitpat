/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return function () {
    console.log( 'init todos directive' );

    return {
      restrict   : 'E',
      transclude : true,
      scope      : {
        title : '@'
      },
      controller : function ( $scope ) {
      // controller: function ( $scope, $element ) {
        var todos = $scope.todos = [];

        // $scope.select = function(todo) {
        //   angular.forEach(todos, function(todo) {
        //     todo.selected = false;
        //   });
        //   todo.selected = true;
        // };

        this.addTodo = function ( todo ) {
          todos.push( todo );
        };
      },
      template :
        '<section class="todos">' +
          '<h1>{{title}}</h1>' +
          '<ul class="todos-list" ng-transclude>' +
            '<todo ng-repeat="todo in todos" />' +
          '</ul>' +
        '</section>',
      replace : true
    };
  };
});
