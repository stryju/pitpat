/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return function ( $http ) {
    var app = this;

    app.todos  = [];

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
  };
});
