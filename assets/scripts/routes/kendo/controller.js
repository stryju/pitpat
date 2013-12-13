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
          read: '/data/products.json'
        },
        pageSize: 5
      });

      $scope.pie =({
          title : {
            position : 'bottom',
            text     : 'Share of Internet Population Growth'
          },
          legend : {
            visible : false
          },
          seriesDefaults : {
            labels: {
              visible    : true,
              background : 'transparent',
              template   : '#= category #: #= value#%'
            }
          },
          series : [
            {
              type       : 'pie',
              startAngle : 150,
              field      : 'value'
            }
          ],
          tooltip : {
            visible : true,
            format  : '{0}%'
          }
        });

      $scope.pieData = new kendo.data.DataSource({
        transport: {
          read: '/data/pieData.json'
        }
      });
    }
  ];
});

/*


 */
