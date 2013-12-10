/* global
  define: false,
  console: false
*/
define([
  '_router'
], function ( router ) {
  'use strict';

  return [
    '$scope',
    '$http',
    '$location',

    function ( $scope, $http, $location ) {
      var app = this;

      app.todos  = [];
      app.router = router;

      $http.get( '/data/user.json' )
        .success( function ( data ) {
          app.user = data;
        });

      $http.get( '/data/todos.json' )
        .success( function ( data ) {
          app.todos = data;
        });

      app.addTodo = function ( todo ) {
        console.log( 'adding todo', todo );
        app.todos.push( todo );
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
