// global variables:
let game, debug;

let a = 0;
let b = 0;

function start() {
  // run by once:
  debug = new Debug();
  game = new Game(640, 480);

  a = a + 1;

  debug.set("A", a);
}

function draw() {
  // run infinitely:
  debug.set("B", b);

  debug.update();
}
