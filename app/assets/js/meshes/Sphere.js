/**
 * Simple sphere mesh without too much ceremony
 */
define(['threejs', 'lodash'], function() {
  
  'use strict';

  return function(options) {

    /**
     *
     * Merge the options passed to this class the default options
     *
     */
    
    var opt = _.extend({
        radius: 200,
        widthSegments:50,
        heightSegments: 50,
        color: 'blue'
      }, options),
      geometry = new THREE.SphereGeometry( opt.radius, opt.widthSegments, opt.heightSegments ),
      material = new THREE.MeshLambertMaterial({
        color: opt.color
      }),
      mesh = new THREE.Mesh(geometry, material);

    return mesh;

  };

});