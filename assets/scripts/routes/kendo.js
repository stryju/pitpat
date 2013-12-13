/* global
  define: false
*/
define([
  './kendo/controller',
  'text!./kendo/template.html'
], function ( controller, template ) {
  'use strict';

  return {
    route      : '/kendo',
    controller : controller,
    template   : template,
    title      : 'kendo',
    name       : 'kendo',
    group      : 'main'
  };
});
