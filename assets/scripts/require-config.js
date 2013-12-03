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
  }
});
