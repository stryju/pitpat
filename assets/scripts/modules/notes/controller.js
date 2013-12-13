/* global
  define: false
*/
define( function () {
  'use strict';

  return [
    '$scope',
    'Notes.service',

    function ( $scope, Notes ) {
      $scope.addNote = Notes.add;
    }
  ];
});
