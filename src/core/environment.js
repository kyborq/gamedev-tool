window.onload = function () {
  // deltatime calculation variables
  let lastTime, currentTime;

  // improvised run by once function
  start();

  // improvised infinity loop for drawing
  setInterval(function () {
    lastTime = Date.now();

    let dt = (currentTime - lastTime) / 1000.0;
    draw(dt);

    currentTime = lastTime;
  }, 1000 / 60);
};
