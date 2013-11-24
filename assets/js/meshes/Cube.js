/**
 * Simple cube mesh without too much ceremony
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
				size: 200,
				color: 'red'
			}, options),
			geometry = new THREE.CubeGeometry(opt.size, opt.size, opt.size),
			material = new THREE.MeshLambertMaterial({
				color: opt.color
			}),
			mesh = new THREE.Mesh(geometry, material);

		return mesh;

	};

});