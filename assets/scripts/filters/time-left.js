/* global
  define: false,
  console: false
*/
define( function () {
  'use strict';

  return function () {
    return function ( expiryDate ) {
      try {
        var now  = new Date();
        var then = new Date( expiryDate );
        var delta = new Date( then - now );
        var days  = Math.floor( +delta / ( 1000 * 60 * 60 * 24 ) );

        var daysString = Math.abs( days ) + ' day' + ( Math.abs( days ) === 1 ? 's' : '' );

        if ( delta <= 0 ) {
          return 'deadline met ' + daysString + ' ago';
        }

        return 'deadline in ' + daysString;
      } catch (e) {}

      console.warn( 'parsing date string failed', expiryDate );
      return '?';
    };
  };
});
