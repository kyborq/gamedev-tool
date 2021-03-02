function Keyboard() {
  this.key = [];

  this.event = function (callback) {
    window.addEventListener("keydown", function (e) {
      this.key[0] = e.key;
      callback && callback("down", e.key);
    });
    window.addEventListener("keyup", function (e) {
      this.key[0] = e.key;
      callback && callback("up", e.key);
    });
  };
}

function Mouse(selector) {
  this.x = 0;
  this.y = 0;

  this.event = function (callback) {
    document
      .querySelector(selector)
      .addEventListener("mousemove", function (e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        callback && callback(e.offsetX, e.offsetY);
      });
  };

  this.click = function (callback) {
    document.querySelector(selector).addEventListener("click", function (e) {
      callback && callback(e.offsetX, e.offsetY);
    });
  };
}

function Debug() {
  this.objects = [];
  this.parent = document.querySelector("#app");
  this.debug = document.createElement("div");

  this.add = function (label, value) {
    this.objects.push({ label: label, value: value });
  };

  this.set = function (label, value) {
    if (
      this.objects.filter((object) => object && object.label === label).length >
      0
    ) {
      for (let object of this.objects) {
        if (object.label === label) {
          object.value = value;
        }
      }
    } else {
      this.add(label, value);
    }
  };

  this.init = function () {
    this.debug.id = "debug";

    this.parent.appendChild(this.debug);
  };

  this.start = function () {
    while (this.debug.firstChild) {
      this.debug.removeChild(this.debug.firstChild);
    }

    for (let object of this.objects) {
      let line = document.createElement("p");
      line.innerText = object.label + ": " + JSON.stringify(object.value);
      this.debug.appendChild(line);
    }
  };

  this.init();
}

function Game(width, height) {
  this.width = width || 640;
  this.height = height || 480;
  this.canvas = document.createElement("canvas");
  this.context = this.canvas.getContext("2d");
  this.parent = document.querySelector("#app");

  this.scene = [];

  this.init = function () {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.id = "game";
    this.parent.appendChild(this.canvas);
  };

  this.setScene = function (scene) {
    this.scene = scene;
  };

  this.start = function () {
    if (this.scene) {
      this.scene.render(this.canvas, this.context);
    }
  };

  this.updateIds = function () {
    for (let i = 0; i < this.scenes.length; i++) {
      this.scenes[i].id = i + 1;
      this.scenes[i].name = "scene-" + (i + 1);
    }
  };

  this.init();
}

function Scene() {
  this.id = 0;
  this.name = "";

  this.objects = [];

  this.add = function (object, x, y) {
    object.x = x || object.x;
    object.y = y || object.y;
    this.objects.push(object);
    this.updateIds();
  };

  this.delete = function (object) {
    this.objects = this.objects.filter((obj) => obj.id !== object.id);
  };

  this.render = function (canvas, ctx) {
    this.clear(ctx, canvas.width, canvas.height);
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].init();
      this.objects[i].width = this.objects[i].image.naturalWidth;
      this.objects[i].height = this.objects[i].image.naturalHeight;
      ctx.drawImage(
        this.objects[i].image,
        this.objects[i].x,
        this.objects[i].y
      );
    }
  };

  this.clear = function (ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  };

  this.updateIds = function () {
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].id = i + 1;
      this.objects[i].name = "object-" + (i + 1);
    }
  };
}

function Sprite(asset, x, y) {
  this.id = 0;
  this.name = "";

  this.x = x || 0;
  this.y = y || 0;
  this.width = 0;
  this.height = 0;
  this.image = new Image();

  this.setPosition = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
  };

  this.init = function () {
    this.image.src = asset;
    this.width = this.image.naturalWidth;
    this.height = this.image.naturalHeight;
  };

  this.init();
}
