/* global
  define: false
*/
define( function () {
  'use strict';

  return function () {
    return function ( text ) {
      return text.replace( /(#\w+)/g, '<mark>$1</mark>' );
    };
  };
});
