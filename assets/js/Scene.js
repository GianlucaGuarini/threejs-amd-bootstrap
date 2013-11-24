define(['meshes/Cube','threejs', 'lodash'], function (Cube) {
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
        var mesh = new Cube({
          color: 'green'
        });
        
        this.add(mesh);

        return mesh;

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