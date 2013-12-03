/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return function () {
    console.log( 'init todo directive' );

    return {
      require    : '^todos',
      restrict   : 'E',
      transclude : true,
      scope      : {
        done : '@'
      },
      link : function ( scope, element, attrs, todosCtrl ) {
        todosCtrl.addTodo( scope );
      },
      template :
        '<li ng-class="{done:done}">' +
          '<input type="checkbox" ng-model="done">' +
          '<span ng-transclude></span>',
      replace : true
    };
  };
});
