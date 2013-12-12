/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$scope',
    '$http',
    'Notes',

    function ( $scope, $http, Notes ) {
      $scope.alerts  = [];
      $scope.notes   = [];

      $http.get( '/data/alerts.json' )
        .success( function ( data ) {
          console.log( 'got alerts' );
          $scope.alerts = data;
        });

      Notes.get( '/data/notes.json' )
        .then( function ( data ) {
          console.log( 'got notes' );
          $scope.notes = data;
        });
    }
  ];
});
