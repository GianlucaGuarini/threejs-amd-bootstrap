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
    // compile the project in one single file
    requirejs: {
      options: {
        baseUrl: 'assets/js',
        out: 'min/build.min.js',
        mainConfigFile: 'assets/js/config.js',
        name: '../vendor/almond/almond',
        include: ['main'],
        insertRequire: ['main'],
        wrap: true
      }
    },
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['jshint', 'requirejs']);


};