/* global
  define: false
*/
define([
  './dashboard/controller',
  'text!./dashboard/template.html'
], function ( controller, template ) {
  'use strict';

  return {
    route      : '/dashboard',
    controller : controller,
    template   : template,
    title      : 'Dashboard',
    name       : 'Dashboard',
    group      : 'main'
  };
});
