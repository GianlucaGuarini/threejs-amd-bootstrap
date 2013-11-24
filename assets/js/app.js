require(['config'], function() {
  'use strict';
  require([
    'Renderer',
    'Scene',
    'Camera',
    'threejs',
    'lodash'
  ], function(Renderer, Scene, Camera) {
    var camera = new Camera(),
        scene = new Scene(),
        renderer = new Renderer(),
        app = {
          init: function () {
            camera.position.z = 400;

            renderer.appendToBody();

            scene.addCube();
            scene.addLights();

            this.setViewport()
                .render();

          },
          render: function() {

            window.requestAnimationFrame(app.render);

            scene.children[0].rotation.x += 0.005;
            scene.children[0].rotation.y += 0.01;

            renderer.render(scene, camera);

            return this;
          },
          setViewport: function() {

            renderer.updateSize();
            camera.updateSize();

            return this;

          }
        };

    app.init();

    // bind events
    window.addEventListener('resize', _.debounce(app.setViewport, 50));

  });
});