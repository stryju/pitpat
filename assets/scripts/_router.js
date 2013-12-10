/* global
  define: false
*/
define([
  'controllers/dashboard',
  'text!templates/pages/dashboard.html'
], function ( dashboardController, dashboardTemplate ) {
  'use strict';

  return [
    {
      route      : '/dashboard',
      controller : dashboardController,
      template   : dashboardTemplate,
      title      : 'Dashboard',
      name       : 'Dashboard'
    },

    {
      route : '/my-performance',
      title : 'My Performance',
      name  : 'MyPerformance'
    },

    {
      route : '/giving-feedback',
      title : 'Giving Feedback',
      name  : 'GivingFeedback'
    },

    {
      route : '/team-insights',
      title : 'Team Insights',
      name  : 'TeamInsights'
    },

    {
      route : '/analytics-reports',
      title : 'Analytics & Reports',
      name  : 'AnalyticsAndReports'
    }
  ];
});
