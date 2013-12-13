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
    'Todos.service',

    function ( $scope, $http, $location, Todos ) {
      var app = this;

      $scope.router = router;
      $scope.todos  = [];

      $http.get( '/data/user.json' )
        .success( function ( data ) {
          console.log( 'got user' );
          app.user = data;
        });

      Todos.get( '/data/todos.json' )
        .then( function ( data ) {
          console.log( 'got todos' );
          $scope.todos = data;
        });

      $scope.foo = function ( foo ) {
        console.log( foo );
      };

      $scope.currentRoute = function( path, klass ) {
        if ( $location.path().substr( 0, path.length ) === path) {
          return klass;
        }

        return '';
      };
    }
  ];
});
