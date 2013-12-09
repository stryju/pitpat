/* global
  define: false
*/
define([
  'controllers/dashboard',
  'text!templates/pages/dashboard.html'
], function ( dashboardController, dashboardTemplate ) {
  'use strict';

  return {
    '/': {
      controller : dashboardController,
      template   : dashboardTemplate,
      title      : 'Dashboard'
    }
  };
});
