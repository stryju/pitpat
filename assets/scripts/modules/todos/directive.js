/* global
  define: false,
  console: false
*/
define([
  './controller',
  'text!./template.html'
], function ( controller, template ) {
  'use strict';

  return function () {
    console.log( 'init todos directive' );

    return {
      restrict   : 'E',
      replace    : true,
      scope      : {
        todos : '=data'
      },

      controller : controller,
      template   : template
    };
  };
});
