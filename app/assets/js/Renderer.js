define(['threejs', 'lodash'], function() {

  'use strict';

  return function (customOptions) {

    /**
     * 
     * Merge the options passed to this class the default options
     * 
     */
    
    var options = _.extend({
      alpha: false
    }, customOptions);

    return _.extend(new THREE.WebGLRenderer(options), {

      /**
       *
       * Public helper methods
       * Do not override the original threejs renderer methods and properties
       *
       */
      
      updateSize: function () {

        this.setSize(window.innerWidth, window.innerHeight);

        return this;

      },
      appendToBody: function () {

        document.body.appendChild(this.domElement);

        return this;

      }
    });
  };
});