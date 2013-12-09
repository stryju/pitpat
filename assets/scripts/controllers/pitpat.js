/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return function ( $http ) {
    var app = this;

    app.alerts = [];
    app.todos  = [];

    $http.get( '/data/alerts.json' )
      .success( function ( data ) {
        app.alerts = data;
      });

    $http.get( '/data/user.json' )
      .success( function ( data ) {
        app.user = data;
      });

    $http.get( '/data/todos.json' )
      .success( function ( data ) {
        app.todos = data;
      });

    app.addTodo = function ( todo ) {
      app.todos.push( todo );
    };
  };
});
