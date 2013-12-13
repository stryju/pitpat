/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$http',

    function ( $http ) {
      var alerts = [];

      return {
        get : function ( url ) {
          console.log( '%cfetching alerts', 'color:#69c' );

          return $http
            .get( url )
            .then( function ( response ) {
              alerts = response.data;

              return alerts;
            });
        }
      };
    }
  ];
});
