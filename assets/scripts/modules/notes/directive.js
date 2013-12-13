/* global
  define: false,
  console: false
*/
define([
  'text!./template.html'
], function ( template ) {
  'use strict';

  return function () {
    console.log( 'init notes directive' );

    return {
      restrict   : 'E',
      replace    : true,
      scope      : {
        notes : '=data'
      },

      controller : [
        '$scope',
        'Notes.service',

        function ( $scope, Notes ) {
          $scope.addNote = Notes.add;
        }
      ],
      template : template
    };
  };
});
