/*global
  require: false
*/
require.config({
  urlArgs : 'nocache=' + ( new Date() ).getTime(),

  shim : {
    angular : {
      exports : 'angular'
    }
  },

  paths : {
    angular : 'vendor/angular/angular'
    // lodash     : 'vendor/lodash.min',
    // backbone   : 'vendor/backbone-min',
    // jquery     : 'vendor/jquery.min',

    // stylesheet : '../../public/styles/lumberjack.css',

    // text       : 'vendor/text',
    // dust       : 'vendor/dust-full-2.0.0.min',

    // component  : 'util/component',
    // parser     : 'util/parser',
    // elastic    : 'util/elastic',
    // messenger  : 'util/messenger',
    // chronos    : 'util/chronos',

    // d3         : 'vendor/d3.min',
    // charts     : 'util/charts',

    // config     : 'util/config'
  }
});
