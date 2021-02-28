// global variables:
let game, debug;

function start() {
  // run by once:
  debug = new Debug();
  game = new Game(640, 480);

  debug.set("Переменная1", 24);
  debug.set("Переменная2", 33);
  console.log(debug);
  debug.update();
}

function draw() {
  // run infinitely:
}
