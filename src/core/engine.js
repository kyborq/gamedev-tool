function Game(width, height, title) {
  this.canvas = document.createElement("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.parent = document.querySelector("#app");
  this.title = title || "GameProject";
  this.scenes = [];
  this.currentScene = null;

  this.init = function () {
    this.canvas.id = "game";
    this.canvas.width = width;
    this.canvas.height = height;
    this.parent.appendChild(this.canvas);

    document.title = this.title;
  };

  this.addScene = function (scene, title) {
    scene.title = title || scene.title;
    this.scenes.push(scene);
  };

  this.deleteScene = function (sceneTitle) {
    this.scenes = this.scenes.filter(function (scn) {
      if (sceneTitle !== scn.title) {
        return scn;
      }
    });
  };

  this.setScene = function (scene) {
    if (typeof scene === "object") {
      this.currentScene = scene;
    }

    if (typeof scene === "string") {
      this.scenes.forEach((scn) => {
        if (scn.title === scene) {
          this.currentScene = scn;
        }
      });
    }
  };

  this.start = function () {
    // ...
  };

  this.init();
}

function Scene(title) {
  this.title = title || "";
  this.objects = [];

  this.render = function () {
    // ...
  };
}
