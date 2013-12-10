/* global
  define: false
*/
define([
  'controllers/dashboard',
  'text!templates/pages/dashboard.html'
], function ( dashboardController, dashboardTemplate ) {
  'use strict';

  return {
    route      : '/dashboard',
    controller : dashboardController,
    template   : dashboardTemplate,
    title      : 'Dashboard',
    name       : 'Dashboard',
    group      : 'main'
  };
});
