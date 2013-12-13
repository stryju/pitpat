/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$http',

    function ( $http ) {
      var todos = [];

      return {
        get : function ( url ) {
          console.log( '%cfetching todos', 'color:#69c' );

          return $http
            .get( url )
            .then( function ( response ) {
              todos = response.data;

              return todos;
            });
        },

        add : function ( todo ) {
          return todos.push( todo );
        }
      };
    }
  ];
});
