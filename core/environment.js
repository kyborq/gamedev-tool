let loopFlag = true;

window.onload = function () {
  // improvised run by once function
  start();

  // improvised infinity loop for drawing
  if (loopFlag) {
    setInterval(function () {
      draw();
    }, 10);
  }
};

function distance(x1, y1, x2, y2) {
  return ((x2 - x1) ^ 2) + ((y2 - y1) ^ 2);
}
