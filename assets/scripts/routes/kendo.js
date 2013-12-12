/* global
  define: false
*/
define([
  'controllers/kendo',
  'text!templates/pages/kendo.html'
], function ( kendoController, kendoTemplate ) {
  'use strict';

  return {
    route      : '/kendo',
    controller : kendoController,
    template   : kendoTemplate,
    title      : 'kendo',
    name       : 'kendo',
    group      : 'main'
  };
});
