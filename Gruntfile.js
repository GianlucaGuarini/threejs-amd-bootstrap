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
          'assets/js/**/*.js'
        ],
        tasks: ['jshint']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'assets/js/**/*.js']
    },
    // compile the project in one single javascript file
    requirejs: {
      compile:{
        options: {
          baseUrl: 'assets/js',
          out: 'assets/min/build.min.js',
          mainConfigFile: 'assets/js/config.js',
          name: '../vendor/almond/almond',
          include: ['app'],
          insertRequire: ['app'],
          findNestedDependencies: true,
          wrap: true
        }
      }
    },
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['jshint', 'requirejs']);
  
};