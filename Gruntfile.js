module.exports = function ( grunt ) {
  'use strict';

  grunt.initConfig({
    dirs : {
      src   : 'assets',
      dist  : 'public',
      bower : 'bower_components',
      http  : ''
    },

    copy : {
      bower_scripts : {
        expand  : true,
        flatten : true,
        cwd     : '<%= dirs.bower %>',
        src     : [
          'requirejs/require.js',
          'jquery/jquery.*',
          'foundation/js/foundation.*',
          'angular/angular.*',
          'kendo-ui/js/kendo.web.*',
          'angular-kendo-ui/build/angular-kendo.*'
        ],
        dest    : '<%= dirs.src %>/scripts/vendor'
      },

      images : {
        expand : true,
        cwd    : '<%= dirs.src %>/images',
        src    : '**/*.{jpg,jpeg,svg,png,gif,webp}',
        dest   : '<%= dirs.dist %>/images'
      },

      mock : {
        expand : true,
        cwd    : '<%= dirs.src %>/data',
        src    : '**/*.json',
        dest   : '<%= dirs.dist %>/data'
      },

      scripts : {
        expand : true,
        cwd    : '<%= dirs.src %>/scripts',
        src    : '**/*.{js,map,html}',
        dest   : '<%= dirs.dist %>/scripts'
      }
    },

    compass : {
      options : {
        sassDir   : '<%= dirs.src %>/styles',
        imagesDir : '<%= dirs.src %>/images',
        fontsDir  : '<%= dirs.src %>/fonts',

        generatedImagesDir : '<%= dirs.dist %>/images',
        cssDir             : '<%= dirs.dist %>/styles',

        httpPath                : '/',
        httpStylesheetsPath     : '<%= dirs.http %>/styles',
        httpGeneratedImagesPath : '<%= dirs.http %>/images',
        httpFontsPath           : '<%= dirs.http %>/fonts'
      },

      clean : {
        options : {
          clean : true
        }
      },

      watch : {
        options: {
          watch     : true,
          debugInfo : true
        }
      }
    },

    watch : {
      images : {
        files : '<%= dirs.src %>/images/**/*.{jpg,jpeg,webp,png,gif,svg}',

        tasks : [
          'newer:copy:images'
        ],

        options : {
          spawn : false
        }
      },

      fonts : {
        files : '<%= dirs.src %>/fonts/**/*.{woff,ttf,otf,eot,svg}',

        tasks : [
          'newer:copy:fonts'
        ],

        options : {
          spawn : false
        }
      },

      mock : {
        files : '<%= dirs.src %>/data/**/*.json',

        tasks : [
          'newer:copy:mock'
        ],

        options : {
          spawn : false
        }
      },

      scripts : {
        files : [
          '<%= dirs.src %>/**/*.{js,map,html}',
          'Gruntfile.js'
        ],

        tasks : [
          'newer:copy:scripts'
        ],

        options : {
          spawn : false
        }
      }
    },

    connect : {
      serve: {
        options: {
          port      : 0,
          base      : 'public',
          keepalive : true,
          open      : true
        }
      }
    },

    concurrent : {
      options : {
        logConcurrentOutput: true
      },

      watch : [
        'watch',
        'compass:watch',
        'connect:serve'
      ]
    }
  });

  require( 'matchdep' )
    .filterAll( 'grunt-*', require( './package.json' ) )
      .forEach( grunt.loadNpmTasks );

  grunt.registerTask( 'default', [
    'newer:copy',
    'concurrent:watch'
  ]);
};
