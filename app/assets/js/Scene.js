define([
  'meshes/Cube',
  'meshes/Sphere',
  'threejs',
  'lodash'
], function (Cube,Sphere) {
  'use strict';
  return function (customOptions) {

    /**
     * Merge the options passed to this class the default options
     */
    
    var options = _.extend({
      ambientLight: new THREE.AmbientLight(0x009900),
      directionalLight: new THREE.DirectionalLight(0xffffff)
    }, customOptions);

    /**
     *
     * Return an extended version of the threejs PerspectiveCamera class
     * 
     */
    
    return _.extend(new THREE.Scene(), {

      /**
       *
       * Public helper methods
       * Do not override the original threejs scene methods and properties
       *
       */

      addCube: function () {

        var cube = new Cube({
          color: 'green'
        });
        
        cube.position.x = 300;

        this.add(cube);

        return cube;

      },
      addSphere: function () {

        var sphere = new Sphere();

        sphere.position.x = -300;

        this.add(sphere);

        return sphere;

      },
      addLights: function () {

        // add lights
        this.add(options.ambientLight);
        options.directionalLight.position.set(1, 1, 1).normalize();
        this.add(options.directionalLight);

        return this;

      }

    });

  };

});