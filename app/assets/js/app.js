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
    'lodash'
  ], function(Renderer, Scene, Camera) {
    /**
     * Initialize all the global variables
     */
    var time = 0,
        camera = new Camera(),
        scene = new Scene(),
        renderer = new Renderer(),
        app = {
          /**
           * init the application (method to trigger only once)
           */
          init: function () {
            // setup the camera position
            camera.position.z = 800;
            // append the canvas to the body
            renderer.appendToBody();

            // add custom meshes
            scene.addCube();
            scene.addSphere();
            // add the lights
            scene.addLights();

            // bring it on!
            this.setViewport()
                .render();

            return this;

          },
          /**
           * Render loop function
           */
          render: function() {

            window.requestAnimationFrame(app.render);

            // move the cube
            scene.children[0].rotation.x += 0.005;
            scene.children[0].rotation.y += 0.01;

            // let bounce the ball
            scene.children[1].position.y += Math.sin(time) * 5;

            renderer.render(scene, camera);

            time += 0.1;

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