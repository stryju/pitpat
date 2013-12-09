/*global
  require: false
*/
require([
  'require-config'
], function () {
  'use strict';

  require([
    'jquery',
    'angular',
    'foundation',
    'app'
  ], function ( $, ng ) {
    ng.bootstrap( document, [ 'pitpat' ] );

    $( document ).foundation();
  });
});

