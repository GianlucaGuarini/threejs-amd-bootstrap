module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      js: {
        // watch all the changes in these files
        files: [
          'app/assets/js/**/*.js'
        ],
        tasks: ['jshint']
      }
    },
    clean: {
      build: {
        src: ["dist"]
      }
    },
    copy: {
      build: {
        files:[{
          expand: true,
          cwd:'app/',
          src: [
            '**',
            // exclude these folders because we'll pick only the files needed using the requirejs task
            '!assets/js/**',
            '!assets/vendor/**'],
          dest: 'dist/'
        }]
      },
    },
    jshint: {
      all: ['Gruntfile.js', 'app/assets/js/**/*.js']
    },
    // compile the project in one single javascript file
    requirejs: {
      build:{
        options: {
          baseUrl: 'app/assets/js',
          out: 'dist/assets/js/build.min.js',
          mainConfigFile: 'app/assets/js/config.js',
          name: '../vendor/almond/almond',
          include: ['app'],
          insertRequire: ['app'],
          findNestedDependencies: true,
          preserveLicenseComments:false,
          wrap: true
        }
      }
    },
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['clean','jshint', 'copy','requirejs']);
  
};