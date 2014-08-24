function GameController(options) {
  this.options = options || {};
  this.size = this.options.size = this.options.size || [1,1];
  this.grid = new Grid(this.options);
  this.grid.init();
}

GameController.prototype.step = function () {
  var previousState = deepCopy(this.grid);
  for (var i = 0; i<this.size[0]; i++) {
    for (var j = 0; j<this.size[1]; j++) {
      var cell = this.grid.cell(i,j);
      if (cell.alive == false && this._cellShouldLive(cell, i, j, previousState)) {
      }
      cell.alive = this._cellShouldLive(cell, i, j, previousState);
    }
  }
};

GameController.prototype.cellAlive = function (i, j) {
  this.grid.cell(i, j).alive = true;
}

GameController.prototype.allCells = function () {
  var cells = [];
  for (var i = 0; i<this.size[0]; i++) {
    for (var j = 0; j<this.size[1]; j++) {
      cells.push({cell:this.grid.cell(i, j), x:j, y:i});
    }
  }
  return cells;
}

GameController.prototype._cellShouldLive = function (cell, i, j, previousState) {
  var neighbors = previousState.neighbors(i, j);
  var liveNeighborCount = this._countLivingNeighbors(neighbors);
  if (liveNeighborCount < 2 && cell.alive) {
    return false;
  }
  if ((liveNeighborCount == 2 || liveNeighborCount == 3) && cell.alive) {
    return true;
  }
  if ((liveNeighborCount > 3) && cell.alive) {
    return false;
  }
  if ((liveNeighborCount == 3) && (cell.alive == false)) {
    return true;
  }
  return false;
}

GameController.prototype._countLivingNeighbors = function (neighbors) {
  var count = 0;
  neighbors.forEach(function (neighbor) {
    if (neighbor.alive) {
      count += 1      
    }
  });
  return count;
}