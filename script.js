let game, scene;

function start() {
  game = new Game("#game", 640, 480);
  scene = new Scene();

  // scene.add(object);

  game.setScene(scene);
}

function draw() {
  game.render();
}
