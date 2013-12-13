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

    function ( $scope ) {
      $scope.pieData = new kendo.data.DataSource({
        transport: {
          read: '/data/pieData.json'
        }
      });

      $scope.dropdown = {
        dataSource: {
          data: [{ name: 'Thing 1', id: 1 },
                 { name: 'Thing 2', id: 2 },
                 { name: 'Thing 3', id: 3 }]
        },
        dataTextField: 'name',
        dataValueField: 'id',
        optionLabel: 'Select A Thing'
      };

      $scope.products = new kendo.data.DataSource({
        transport: {
          read: '/data/products.json'
        },
        pageSize: 5
      });

      $scope.pie =({
          title: {
            position: "bottom",
            text: "Share of Internet Population Growth"
          },
          legend: {
            visible: false
          },
          chartArea: {
            background: ""
          },
          seriesDefaults: {
            labels: {
              visible: true,
              background: "transparent",
              template: "#= category #: #= value#%"
            }
          },
          series: [{
            type: "pie",
            startAngle: 150,
            data: [{
              category: "Asia",
              value: 53.8,
              color: "#9de219"
            },{
              category: "Europe",
              value: 16.1,
              color: "#90cc38"
            },{
              category: "Latin America",
              value: 11.3,
              color: "#068c35"
            },{
              category: "Africa",
              value: 9.6,
              color: "#006634"
            },{
              category: "Middle East",
              value: 5.2,
              color: "#004d38"
            },{
              category: "North America",
              value: 3.6,
              color: "#033939"
            }]
          }],
          tooltip: {
            visible: true,
            format: "{0}%"
          }
        });
    }
  ];
});

/*


 */
