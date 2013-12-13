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
    console.log( 'init notes directive' );

    return {
      restrict   : 'E',
      replace    : true,
      scope      : {
        notes : '=data'
      },

      controller : controller,
      template : template
    };
  };
});
