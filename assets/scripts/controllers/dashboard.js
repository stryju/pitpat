/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return function ( $http ) {
    var app = this;

    app.alerts = [];

    $http.get( '/data/alerts.json' )
      .success( function ( data ) {
        app.alerts = data;
      });

    // app.addTodo = function ( todo ) {
    //   app.todos.push( todo );
    // };
  };
});
