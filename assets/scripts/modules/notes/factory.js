/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$http',

    function ( $http ) {
      var notes = [];

      return {
        get : function ( url ) {
          console.log( '%cfetching notes', 'color:#69c' );

          return $http
            .get( url )
            .then( function ( response ) {
              notes = response.data;

              return notes;
            });
        },

        add : function ( todo ) {
          return notes.push( todo );
        }
      };
    }
  ];
});
