var SIZE = [100, 100]
var renderer = new Renderer();
var controller = new GameController({size:SIZE});
var initialStateController = new InitialStateController(SIZE);

window.onload = function () {
  var initialPositions = initialStateController.rPentomino();
  initialPositions.forEach(function (position) {
    controller.cellAlive(position[0], position[1]);
  });

  draw(controller.allCells(), renderer)
  window.requestAnimFrame(update.bind(null, controller, renderer));
}

function step () {
  controller.step();
  draw(controller.allCells(), renderer);
}

function update(controller, renderer) {
  controller.step();
  draw(controller.allCells(), renderer);
  window.requestAnimFrame(update.bind(null, controller, renderer))
}

function draw (cells, renderer) {
  renderer.render(cells, SIZE);
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
