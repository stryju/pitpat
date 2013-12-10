/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$http',

    function ( $http ) {
      return $http.get( 'data/todos.json' );
    }
  ];
});
