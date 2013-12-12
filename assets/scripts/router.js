/* global
  define: false
*/
define([
  'routes/dashboard',
  'routes/kendo',
  'routes/my-performance',
  'routes/feedback',
  'routes/team-insights',
  'routes/reports',
  'routes/settings',
  'routes/logout'
], function ( dashboard, kendo, perf, feedback, team, reports, settings, logout ) {
  'use strict';

  return [
    dashboard,
    kendo,
    perf,
    feedback,
    team,
    reports,
    settings,
    logout
  ];

  // return [
  //   dashboard,

  //   {
  //     route : '/my-performance',
  //     title : 'My Performance',
  //     name  : 'MyPerformance',
  //     group : 'main'
  //   },

  //   {
  //     route : '/feedback',
  //     title : 'Giving Feedback',
  //     name  : 'GivingFeedback',
  //     group : 'main'
  //   },

  //   {
  //     route : '/team-insights',
  //     title : 'Team Insights',
  //     name  : 'TeamInsights',
  //     group : 'main'
  //   },

  //   {
  //     route : '/reports',
  //     title : 'Analytics & Reports',
  //     name  : 'AnalyticsAndReports',
  //     group : 'main'
  //   },

  //   {
  //     route : '/settings',
  //     title : 'Settings',
  //     name  : 'Settings',
  //     group : 'user'
  //   },

  //   {
  //     route : '/logout',
  //     title : 'Logout',
  //     name  : 'Logout',
  //     group : 'user'
  //   }
  // ];
});
