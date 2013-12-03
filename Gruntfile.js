module.exports = function ( grunt ) {
  'use strict';

  grunt.initConfig({
    dirs : {
      src  : 'assets',
      dist : 'public',
      http : ''
    },

    copy : {
      images : {
        expand : true,
        cwd    : '<%= dirs.src %>/images',
        src    : '**/*.{jpg,jpeg,svg,png,gif,webp}',
        dest   : '<%= dirs.dist %>/images'
      },
      scripts : {
        expand : true,
        cwd    : '<%= dirs.src %>/scripts',
        src    : [
          '**/*.{js,map}',
          // oh, require...
          '!vendor/**/{test,tests,dist}/**/*.*'
        ],
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


      scripts : {
        files : [
          '<%= dirs.src %>/**/*.js',
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
