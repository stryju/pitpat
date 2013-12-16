/* global
  define: false
*/
define( function () {
  'use strict';

  return [
    '$scope',
    'Notes.service',

    function ( $scope, Notes ) {

      function addNote( note ) {
        Notes.add({
          content   : note,
          timestamp : new Date()
        });

        $scope.newNote = '';
      }

      function removeNote( note ) {
        Notes.remove( note );
      }

      $scope.addNote = addNote;
      $scope.removeNote = removeNote;
    }
  ];
});
