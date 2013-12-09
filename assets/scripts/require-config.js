/*global
  require: false
*/
require.config({
  urlArgs : 'nocache=' + ( new Date() ).getTime(),

  shim : {
    jquery : {
      exports : '$'
    },

    angular : {
      exports : 'angular'
    },

    'kendo-ui' : {
      deps : [
        'jquery'
      ]
    },

    'angular-kendo-ui' : {
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
    jquery             : 'vendor/jquery',
    foundation         : 'vendor/foundation',
    'kendo-ui'         : 'vendor/kendo.web.min',
    'angular-kendo-ui' : 'vendor/angular-kendo'
  }
});
