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
      replace    : true,
      scope      : {
        done : '@'
      },

      link : function ( scope, el, attrs, todosCtrl ) {
        if ( 'done' in attrs ) {
          el.addClass( 'is:done' );
        }

        // el.bind( 'click', function ( ev ) {
        //   ev.preventDefault();
        //   ev.stopPropagation();
        //   console.log( ev );
        // });

        // todosCtrl.addTodo( scope );
      },

      template :
        '<li>' +
          '<input type="checkbox" ng-model="$scope.done">' +
          '<span ng-transclude></span>'
    };
  };
});
