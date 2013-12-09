/* global
  define: false,
  console: false
*/
define([
  'text!templates/directives/alert.html'
], function ( template ) {
  'use strict';

  return function () {
    console.log( 'init alerts directive' );

    return {
      restrict   : 'E',
      replace    : true,
      scope      : {
        alerts : '='
      },
      template : template
    };
  };
});
