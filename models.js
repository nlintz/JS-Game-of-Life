function Cell () {
  this.alive = false;
}

function Grid (options) {
  this.size = options.size;
}

Grid.prototype.init = function () {
  this.cells = new Array(this.size[0]);
  for (var i = 0; i<this.size[0]; i++) {
    this.cells[i] = new Array(this.size[1]);
  }

  for (var i = 0; i<this.size[0]; i++) {
    for (var j = 0; j<this.size[1]; j++) {
      this.cells[i][j] = new Cell();
    }
  }
}

Grid.prototype.cell = function (x, y) {
  if (x < 0 || x >= this.size[0])
    return false;
  if (y < 0 || y >= this.size[1])
    return false;
  return this.cells[x][y];
}

Grid.prototype.neighbors = function (x, y) {
  var neighbors = [];
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var cell = this.cell(x + i, y + j);

      if (i != 0 || j != 0) {
        if (cell) {
          neighbors.push(cell);
        }
      }
    }
  }
  return neighbors;
}