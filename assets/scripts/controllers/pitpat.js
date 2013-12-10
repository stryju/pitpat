/* global
  define: false,
  console: false
*/
define([
  'router'
], function ( router ) {
  'use strict';

  return [
    '$scope',
    '$http',
    '$location',
    'todosFactory',

    function ( $scope, $http, $location, todosFactory ) {
      var app = this;

      app.todos  = [];
      app.router = router;

      $http.get( '/data/user.json' )
        .success( function ( data ) {
          console.log( 'got user' );
          app.user = data;
        });

      todosFactory
        .success( function ( data ) {
          console.log( 'got todos' );
          app.todos = data;
        });

      app.addTodo = function ( todo ) {
        console.log( 'adding todo', todo );
        app.todos.unshift( todo );
      };

      app.currentRoute = function( path, klass ) {
        if ( $location.path().substr( 0, path.length ) === path) {
          return klass;
        }

        return '';
      };
    }
  ];
});
