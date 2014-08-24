var WINDOW = {width:Math.min(window.innerWidth, window.innerHeight), 
              height:Math.min(window.innerWidth, window.innerHeight)
              }

function Renderer () {
  this.canvas = this._createCanvas(WINDOW.width, WINDOW.height);
  this.dirtyChecker = new DirtyChecker();
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
  ctx.fillRect(x, y, w, h);

  ctx.strokeStyle = strokeColor;
  ctx.strokeRect(x, y, w, h);

};

Renderer.prototype.render = function (cells, size) {
  if (this.dirtyChecker.previousState == undefined) {
    this.dirtyChecker.setPreviousState(cells);
  } else {
    cells = this.dirtyChecker.getDirtyElements(cells);
  }
  cellHeight = WINDOW.height / size[0];
  cellWidth = WINDOW.width / size[1];
  cells.forEach(function (obj) {
    if (obj.cell.alive) {
      this._drawRectangle(this.canvas, cellWidth * obj.x, cellHeight * obj.y, cellWidth, cellHeight, 'black', 'white');
    }
    else {
      this._drawRectangle(this.canvas, cellWidth * obj.x, cellHeight * obj.y, cellWidth, cellHeight, 'white', 'white');
    }
  }.bind(this));
};

function DirtyChecker () {
  this.previousState;
}

DirtyChecker.prototype.setPreviousState = function (previousState) {
  this.previousState = deepCopy(previousState);
}

DirtyChecker.prototype.getDirtyElements = function (currentState) {
  var statesToUpdate = [];
  currentState.forEach(function (obj, index) {
    if (!this._sameObject(this.previousState[index], obj)) {
      statesToUpdate.push(obj)
    }
  }.bind(this))
  this.setPreviousState(currentState);
  return statesToUpdate;
}

DirtyChecker.prototype._sameObject = function (a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}