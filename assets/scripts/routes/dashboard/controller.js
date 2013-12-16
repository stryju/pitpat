/* global
  define: false,
  console: false
*/
define([
  'kendo-ui'
], function ( kendo ) {
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

      $scope.donut = ({
          title : {
            text     : 'What is you favourite sport?',
            position : 'bottom'
          },
          legend : {
            visible : false
          },
          seriesDefaults : {
            type       : 'donut',
            overlay    : {
              gradient : 'none'
            },
            startAngle : 90,
            field      : 'value',
            labels     : {
              visible : false
            }
          },
          tooltip : {
            visible  : true,
            template : '#= category # - #= kendo.format(\'{0:P}\', percentage) #'
          }
        });

      $scope.donutData = new kendo.data.DataSource({
        transport: {
          read: '/data/donutData.json'
        }
      });
    }
  ];
});
