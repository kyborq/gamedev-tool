let debug, game, scene, player, door;

function start() {
  debug = new Debug();
  game = new Game(640, 480);
  scene = new Scene();

  player = new Sprite("assets/player.png");
  door = new Sprite("assets/door.png");

  player.setPosition(250, 240);
  door.setPosition(400, 240);

  scene.add(door);
  scene.add(player);

  game.setScene(scene);
  console.log(scene);
}

function draw() {
  debug.start();
  game.start();
}
