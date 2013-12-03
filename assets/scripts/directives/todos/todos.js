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
      // replace    : true,
      scope      : {
        title : '@',
        todos : '='
      },
      controller : function ( $scope ) {
        // $scope.todos = [];

        this.addTodo = function ( todo ) {
        //   $scope.todos.push( todo );
          console.log( $scope.todos );
        };
      },
      template :
        '<section class="todos">' +
          '<h1>{{title}}</h1>' +
          '<ul class="todos-list" ng-transclude>' +
          '</ul>' +
          '<form class="row collapse" ng-submit="addTodo()">' +
            '<div class="column small-9">' +
              '<input type="text" />' +
            '</div>' +
            '<div class="column small-3">' +
              '<button type="submit" class="button postfix">+</button>' +
            '</div>' +
          '</form>' +
        '</section>'
    };
  };
});
