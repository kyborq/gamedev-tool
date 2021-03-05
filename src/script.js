let game, scene, player, key;

function start() {
  game = new Game(640, 480); // Создание холста размером 640 на 480 пикселей
  scene = new Scene(); // Создание игровой сцены

  // Создание игровых объектов, изображение берется из папки assets
  player = new Sprite("assets/player.png", 120, 300); // игрок
  key = new Sprite("assets/key.png", 340, 200); // ключ по координатам 340 и 200

  // добавление объектов на сцену
  scene.add(key);
  scene.add(player);

  game.setScene(scene); // Установка сцены
}

function draw() {
  control(player);

  // --- область-изменений

  game.start();
}
