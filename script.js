let game, scene, player;

function start() {
  game = new Game(640, 480);
  scene = new Scene();

  player = new Sprite("assets/player.png", game.width / 2, game.height / 2);
  
  scene.add(player);
  game.setScene(scene);
}

function draw() {
  game.start();
}
