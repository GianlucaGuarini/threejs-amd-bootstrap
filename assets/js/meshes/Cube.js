define(['threejs', 'lodash'], function() {
	
	'use strict';

	return function(options) {

		var defaults = {
				size: 200,
				color: 'red'
			},
			opt = _.extend(defaults, options),
			geometry = new THREE.CubeGeometry(opt.size, opt.size, opt.size),
			material = new THREE.MeshLambertMaterial({
				color: opt.color
			}),
			mesh = new THREE.Mesh(geometry, material);

		return mesh;

	};

});