/**
 * threejs application
 */
require(['config'], function() {
  'use strict';
  require([
    'Renderer',
    'Scene',
    'Camera',
    'threejs',
    'lodash',
    'stats',
    'dat.gui'
  ], function(Renderer, Scene, Camera) {
    /**
     * Initialize all the global variables
     */
    var time = 0,
        camera = new Camera(),
        scene = new Scene(),
        renderer = new Renderer(),
        // meshes
        sphere,cube,
        app = {
          /**
           * init the application (method to trigger only once)
           */
          init: function () {
            // bind this to all the public methods
            _.bindAll(this);
            // setup the camera position
            camera.position.z = 800;
            // append the canvas to the body
            renderer.appendToBody();

            // add custom meshes
            cube = scene.addCube();
            sphere = scene.addSphere();
            // add the lights
            scene.addLights();

            // bring it on!
            this.setViewport()
                .render()
                .debug();

            return this;

          },
          /**
           * Helpers to debug the application
           */
          debug: function () {
            // setup the stats
            this.stats = new Stats();
            // Align top-left
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.left = '0px';
            this.stats.domElement.style.top = '0px';
            document.body.appendChild(this.stats.domElement);

            // init dat gui
            var gui = new dat.GUI(),
              cameraPosFldr = gui.addFolder('Camera Position'),
              cameraRotFldr = gui.addFolder('Camera Rotation');

            cameraPosFldr.add(camera.position, 'x', -1000, 1000);
            cameraPosFldr.add(camera.position, 'y', -1000, 1000);
            cameraPosFldr.add(camera.position, 'z', 0, 1000);

            cameraRotFldr.add(camera.rotation, 'x', -1, 1);
            cameraRotFldr.add(camera.rotation, 'y', -1, 1);
            cameraRotFldr.add(camera.rotation, 'z', -1, 1);
          },
          /**
           * Render loop function
           */
          render: function() {


            window.requestAnimationFrame(app.render);

            if (this.stats)
              this.stats.begin();

            // move the cube
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.01;

            // let bounce the ball
            sphere.position.y += Math.sin(time) * 5;
            // animate the vertex shader
            sphere.material.uniforms.amplitude.value = Math.sin(time);

            renderer.render(scene, camera);

            time += 0.1;

            if (this.stats)
              this.stats.end();

            return this;
          },
          /**
           * set the viewport according to the window size
           */
          setViewport: function() {

            renderer.updateSize();
            camera.updateSize();

            return this;

          }
        };

    // let's rock
    app.init();

    // bind events
    window.addEventListener('resize', _.debounce(app.setViewport, 50));

  });
});