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

    'angular.sanitize' : {
      deps : [
        'angular'
      ]
    },

    'kendo-ui' : {
      exports : 'kendo',
      deps    : [
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
    'angular.sanitize' : 'vendor/angular-sanitize',
    'angular.kendo-ui' : 'vendor/angular-kendo',
    foundation         : 'vendor/foundation',
    jquery             : 'vendor/jquery',
    'kendo-ui'         : 'http://cdn.kendostatic.com/2013.3.1119/js/kendo.all.min',
    lodash             : 'vendor/lodash'
  }
});
