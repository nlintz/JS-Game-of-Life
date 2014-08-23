var WINDOW = {width:window.innerWidth, 
              height:window.innerHeight
              }

function Renderer () {
  this.canvas = this._createCanvas(WINDOW.width, WINDOW.height);
  document.body.appendChild(this.canvas);
}

Renderer.prototype._createCanvas = function(w, h) {
  var canvas = document.createElement('canvas');
  canvas.width  = w;
  canvas.height = h;
  canvas.style.width  = w;
  canvas.style.height = h;
  return canvas
};

Renderer.prototype._drawRectangle = function(canvas, x, y, w, h, fillColor, strokeColor) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;

  ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);
};

Renderer.prototype.render = function (cells, size) {
  cellHeight = WINDOW.height / size[0];
  cellWidth = WINDOW.width / size[1];
  cells.forEach(function (obj) {
    if (obj.cell.alive) {
      this._drawRectangle(this.canvas, cellWidth * obj.x, cellHeight * obj.y, cellWidth, cellHeight, 'black', 'gray');
    }
    else {
      this._drawRectangle(this.canvas, cellWidth * obj.x, cellHeight * obj.y, cellWidth, cellHeight, 'white', 'white');
    }
  }.bind(this));
};