/* global
  define: false,
  console: false
*/
define([
  'text!./template.html'
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
