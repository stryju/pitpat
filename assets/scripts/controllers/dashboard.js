/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$scope',
    '$http',

    function ( $scope, $http ) {
      var app = this;

      app.alerts = [];

      $http.get( '/data/alerts.json' )
        .success( function ( data ) {
          console.log( 'got alerts' );
          app.alerts = data;
        });

      $http.get( '/data/pie.json' )
        .success( function ( data ) {
          console.log( 'got pie' );
          app.pie = data;
        });

      // app.addTodo = function ( todo ) {
      //   app.todos.push( todo );
      // };
    }
  ];
});
