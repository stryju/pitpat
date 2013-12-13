/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return [
    '$scope',
    'Alerts.service',
    'Notes.service',

    function ( $scope, Alerts, Notes ) {
      $scope.alerts  = [];
      $scope.notes   = [];

      Alerts.get( '/data/alerts.json' )
        .then( function ( data ) {
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
