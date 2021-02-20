let game;

function start() {
  game = new Engine("#game", 640, 480);
}

function draw() {
  game.render();
}
