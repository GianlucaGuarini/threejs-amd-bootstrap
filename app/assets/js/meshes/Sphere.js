/**
 * Simple sphere mesh using custom ShaderMaterial 
 *
 *  Shaders provided by by Paul Lewis
 *  http://www.html5rocks.com/en/tutorials/webgl/shaders/
 */
define([
  'text!materials/shaders/SphereShader.vert',
  'text!materials/shaders/SphereShader.frag'
], function(vertexShader, fragmentShader) {
  'use strict';

  return function(options) {

    /**
     *
     * Merge the options passed to this class the default options
     *
     */

    var opt = _.extend({
      radius: 200,
      widthSegments: 50,
      heightSegments: 50
    }, options),
      geometry = new THREE.SphereGeometry(opt.radius, opt.widthSegments, opt.heightSegments),
      material = new THREE.ShaderMaterial({
        uniforms: {
          amplitude: {
            type: 'f',
            value: 0
          }
        },
        attributes: {
          displacement: {
            type: 'f',
            value: []
          }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      }),
      mesh = new THREE.Mesh(geometry, material),
      values = material.attributes.displacement.value;

    // now populate the array of attributes needed for the vertex shader
    _.each(geometry.vertices,function(){
      values.push(Math.random() * 30);
    });

    console.log(mesh);

    return mesh;

  };

});