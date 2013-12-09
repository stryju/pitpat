/*global
  require: false
*/
require.config({
  urlArgs : 'nocache=' + ( new Date() ).getTime(),

  shim : {
    jquery : {
      exports : '$'
    },

    lodash : {
      exports : '_'
    },

    angular : {
      exports : 'angular'
    },

    'angular.route' : {
      deps : [
        'angular'
      ]
    },

    'kendo-ui' : {
      deps : [
        'jquery'
      ]
    },

    'angular.kendo-ui' : {
      deps : [
        'kendo-ui',
        'angular'
      ]
    },

    foundation : {
      exports : 'Foundation',
      deps    : [
        'jquery'
      ]
    }
  },

  paths : {
    angular            : 'vendor/angular',
    'angular.route'    : 'vendor/angular-route',
    'angular.kendo-ui' : 'vendor/angular-kendo',
    foundation         : 'vendor/foundation',
    jquery             : 'vendor/jquery',
    'kendo-ui'         : 'vendor/kendo.web.min',
    'lodash'           : 'vendor/lodash'
  }
});
