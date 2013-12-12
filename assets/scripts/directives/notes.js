/* global
  define: false,
  console: false
*/
define([
  'text!templates/directives/notes.html'
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
        'Notes',

        function ( $scope, Notes ) {
          $scope.addTodo = Notes.add;
        }
      ],
      template : template
    };
  };
});
