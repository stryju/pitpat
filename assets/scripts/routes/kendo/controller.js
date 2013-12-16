/* global
  define: false
*/
define([
  'kendo-ui'
], function ( kendo ) {
  'use strict';

  return [
    '$scope',

    function ( $scope ) {

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

      $scope.grid = {
        selectable : 'row',
        pageable   : {
          refresh   : true,
          pageSizes : true
        },
        columns    : [
          {
            field : 'ProductName',
            title : 'Name'
          },
          {
            field : 'Supplier.SupplierName',
            title : 'Supplier'
          },
          {
            field : 'Category.CategoryName',
            title : 'Category'
          }
        ],
        sortable   : true,
        groupable  : true,
        filterable : true
      };

      $scope.gridData = new kendo.data.DataSource({
        transport: {
          read: '/data/gridData.json'
        },
        pageSize: 5
      });

      $scope.pie = {
        title : {
          position : 'bottom',
          text     : 'Share of Internet Population Growth'
        },
        legend : {
          visible : false
        },
        seriesDefaults : {
          type       : 'pie',
          overlay    : {
            gradient : 'none'
          },
          startAngle : 135,
          field      : 'value',
          labels     : {
            visible : true
          }
        },
        series : [
          {
          }
        ],
        tooltip : {
          visible : true,
          format  : '{0}%'
        }
      };

      $scope.pieData = new kendo.data.DataSource({
        transport: {
          read: '/data/pieData.json'
        }
      });

      $scope.funnel = {
        legend : {
          visible : false
        },
        title : {
          text : 'Spain windpower electricity production (GWh)'
        },
        seriesDefaults : {
          type          : 'funnel',
          dynamicSlope  : true,
          dynamicHeight : false,
          labels        : {
            visible  : true,
            template : '#= dataItem.year #'
          }
        },
        series : [
          {
            field          : 'wind',
            categoryField  : 'year',
            segmentSpacing : 2
          }
        ],
        tooltip : {
          visible  : true,
          template : '#= category # - #= value # GWh'
        }
      };

      $scope.funnelData = new kendo.data.DataSource({
        transport: {
          read: '/data/funnelData.json'
        }
      });

      $scope.lineChart = {
        title : {
          text : 'Stock Prices 2011'
        },
        series : [
          {
            type  : 'line',
            field : 'close',
            name  : '#= group.value # (close)'
          }
        ],
        legend : {
          position : 'bottom'
        },
        valueAxis : {
          labels : {
            format : '${0}',
            skip   : 2,
            step   : 2
          }
        },
        categoryAxis : {
          field  : 'date',
          labels : {
            format : 'MMM'
          }
        }
      };

      $scope.lineChartData = new kendo.data.DataSource({
        transport: {
          read: '/data/linechartData.json'
        },
        group: {
          field: 'symbol'
        },

        sort: {
          field: 'date',
          dir: 'asc'
        },

        schema: {
          model: {
            fields: {
              date: {
                type: 'date'
              }
            }
          }
        }
      });

      $scope.polar = {
        title : {
          text : 'Polar plot'
        },
        seriesDefaults : {
          type  : 'polarLine',
          style : 'smooth'
        },
        series: [
          {
            data: [
              [0, 0], [15, 2], [30, 4],
              [45, 6], [60, 8], [75, 10],
              [90, 12], [105, 14], [120, 16],
              [135, 18], [150, 20], [165, 22],
              [180, 24], [195, 26], [210, 28],
              [225, 30], [240, 32], [255, 34],
              [270, 36], [285, 38], [300, 40],
              [315, 42], [330, 44], [345, 46],
              [360, 48], [15, 50], [30, 52],
              [45, 54], [60, 56], [75, 58], [90, 60]
            ]
          },
          {
            data: [
              [0, 0], [15, 1], [30, 2],
              [45, 3], [60, 4], [75, 5],
              [90, 6], [105, 7], [120, 8],
              [135, 9], [150, 10], [165, 11],
              [180, 12], [195, 13], [210, 14],
              [225, 15], [240, 16], [255, 17],
              [270, 18], [285, 19], [300, 20],
              [315, 21], [330, 22], [345, 23],
              [360, 24], [15, 25], [30, 26],
              [45, 27], [60, 28], [75, 29], [90, 30]
            ]
          },
          {
            data: [
              [0, 0], [15, 3], [30, 6],
              [45, 9], [60, 12], [75, 15],
              [90, 18], [105, 21], [120, 24],
              [135, 27], [150, 30], [165, 33],
              [180, 36], [195, 39], [210, 42],
              [225, 45], [240, 48], [255, 51],
              [270, 54], [285, 57], [300, 60],
              [315, 63], [330, 66], [345, 69],
              [360, 72], [15, 75], [30, 78],
              [45, 81], [60, 84], [75, 87], [90, 90]
            ]
          }
        ]
      };

      $scope.scheduler = {
        // date      : new Date('2013/6/13'),
        // startTime : new Date('2013/6/13 07:00 AM'),
        timezone   : 'Europe/Berlin',
        height     : 600,
        selectable : true,
        views      : [
          'day',
          {
            type     : 'week',
            selected : true
          },
          'month',
          'agenda'
        ]
      };

    }
  ];
});

/*


 */
