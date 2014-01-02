/**
 *
 * Configure here all the dependencies of your project
 *
 */
requirejs.config({
  paths: {
    'threejs': '../vendor/threejs/build/three',
    'lodash':'../vendor/lodash/dist/lodash',
    // require js plugin needed to load the shaders files
    'text':'../vendor/requirejs-text/text',
    'stats':'../vendor/stats.js/src/Stats',
    'dat.gui':'../vendor/dat.gui/dat.gui',
  },
  shim: {}
});