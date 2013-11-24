define(['threejs', 'lodash'], function () {

  'use strict';

  return function (customOptions) {

    /**
     *
     * Merge the options passed to this class the default options
     *
     */

    var options = _.extend({
      fov: 70,
      aspect: window.innerWidth / window.innerHeight,
      near: 1,
      far: 1000
    }, customOptions);

    /**
     *
     * Return an extended version of the threejs PerspectiveCamera class
     *
     */

    return _.extend(new THREE.PerspectiveCamera(options.fov,options.aspect,options.near,options.far), {

      /**
       *
       * Public helper methods
       * Do not override the original threejs camera methods and properties
       *
       */

      updateSize: function () {

        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();

        return this;

      }
    });
  };
});