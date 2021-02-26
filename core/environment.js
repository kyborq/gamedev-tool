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
