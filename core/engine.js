function Game(selector, width, height) {
  let canvas = document.querySelector(selector || "canvas");
  let ctx = canvas.getContext("2d");

  this.width = width;
  this.height = height;

  canvas.width = this.width || 480;
  canvas.height = this.height || 320;

  this.objects = [];

  this.setScene = function (scene) {
    this.objects = scene.objects;
  };

  this.render = function () {
    this.clear();
    for (obj of this.objects) {
      if (obj.image) {
        obj.width = obj.image.naturalWidth;
        obj.height = obj.image.naturalHeight;

        ctx.drawImage(obj.image, obj.x, obj.y);
      } else {
        obj.draw(ctx);
      }
    }
  };

  this.clear = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}

function Scene() {
  this.objects = [];

  this.add = function (object) {
    this.objects.push(object);
    this.setIDS();
  };

  this.delete = function (id) {
    this.objects = this.objects.filter((object) => id !== object.id && object);
    this.setIDS();
  };

  this.setIDS = function () {
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].id = i + 1;
    }
  };
}

function Sprite(asset, x, y) {
  this.id = -1;
  this.x = x || 0;
  this.y = y || 0;
  this.width;
  this.height;

  this.image = new Image();
  this.image.src = asset;
}

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
