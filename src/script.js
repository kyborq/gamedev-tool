// область переменных
let debug, game;

function start() {
  debug = new Debug();
  game = new Game(640, 480);
}

function draw() {
  debug.start();
  game.start();
}
