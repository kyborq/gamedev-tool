let game, scene, player;

function start() {
  game = new Game(640, 480, "Hello World");
  scene = new Scene();

  game.addScene(scene, "game");
}

function draw(dt) {
  game.start();
}
