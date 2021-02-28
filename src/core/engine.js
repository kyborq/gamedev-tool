function Debug(selector) {
  this.vars = [];

  this.add = function (label, variable) {
    this.vars.push({ name: label, value: variable });
    this.init();
  };

  this.update = function (label, value) {
    for (let variable of this.vars) {
      if (variable.name === label) {
        variable.value = value;
      }
    }
    this.init();
  };

  this.init = function () {
    let debug = document.querySelector(selector);

    if (debug) {
      while (debug.firstChild) {
        debug.removeChild(debug.firstChild);
      }
    }
    for (let variable of this.vars) {
      let line = document.createElement("p");
      line.innerText = variable.name + ": " + JSON.stringify(variable.value);
      debug.appendChild(line);
    }
  };
}

function Keyboard() {
  this.event = function (callback) {
    window.addEventListener("keydown", function (e) {
      this.key = e.key;
      callback && callback("down", e.key);
    });
    window.addEventListener("keyup", function (e) {
      this.key = e.key;
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

function Game(width, height) {
  this.width = width || 640;
  this.height = height || 480;
  this.canvas = document.createElement("canvas");
  this.context = this.canvas.getContext("2d");
  this.parent = document.querySelector("body");

  this.scene = [];

  this.init = function () {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.id = "game";
    this.parent.appendChild(this.canvas);
  };

  this.setScene = function (scene) {
    this.scene = scene;
  }
  
  this.start = function () {
    if (this.scene) {
      this.scene.render(this.canvas, this.context);
    }
  };

  this.updateIds = function () {
    for (let i = 0; i < this.scenes.length; i++) {
      this.scenes[i].id = i + 1;
    }
  };
  
  this.init();
}

function Scene() {
  this.id = 0;
  this.name = "";

  this.objects = [];

  this.add = function (object) {
    this.objects.push(object);
    this.updateIds();
  };

  this.delete = function (object) {
    this.updateIds();
  };

  this.render = function (canvas, ctx) {
    this.clear(ctx, canvas.width, canvas.height);
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].init();
      this.objects[i].width = this.objects[i].image.naturalWidth;
      this.objects[i].height = this.objects[i].image.naturalHeight;
      ctx.drawImage(this.objects[i].image, this.objects[i].x, this.objects[i].y);
    }
  };

  this.clear = function (ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  };

  this.updateIds = function () {
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].id = i + 1;
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

  this.init = function () {
    this.image.src = asset;
    this.width = this.image.naturalWidth;
    this.height = this.image.naturalHeight;
  };

  this.init();
}