function InitialStateController (size) {
  this.size = size;
  this.middleX = (this.size[0] - (this.size[0] % 2)) / 2;
  this.middleY = (this.size[1] - (this.size[1] % 2)) / 2;
};

InitialStateController.prototype.rPentomino = function () {
  var initialPositions = []
  initialPositions.push([this.middleX + 1, this.middleY]);
  initialPositions.push([this.middleX, this.middleY + 1]);
  initialPositions.push([this.middleX + 1, this.middleY + 1]);
  initialPositions.push([this.middleX + 2, this.middleY + 1]);
  initialPositions.push([this.middleX, this.middleY + 2]);
  return initialPositions;
};

InitialStateController.prototype.bPentomino = function () {
  var initialPositions = []
  initialPositions.push([this.middleX, this.middleY]);
  initialPositions.push([this.middleX, this.middleY+1]);
  initialPositions.push([this.middleX+1, this.middleY+1]);
  initialPositions.push([this.middleX+1, this.middleY+2]);
  initialPositions.push([this.middleX+2, this.middleY]);
  initialPositions.push([this.middleX+2, this.middleY+1]);
  initialPositions.push([this.middleX+3, this.middleY]);
  return initialPositions;
};

InitialStateController.prototype.acorn = function () {
  var initialPositions = []
  initialPositions.push([this.middleX, this.middleY+2]);
  initialPositions.push([this.middleX+1, this.middleY]);
  initialPositions.push([this.middleX+1, this.middleY+2]);
  initialPositions.push([this.middleX+3, this.middleY+1]);
  initialPositions.push([this.middleX+4, this.middleY+2]);
  initialPositions.push([this.middleX+5, this.middleY+2]);
  initialPositions.push([this.middleX+6, this.middleY+2]);
  return initialPositions;
};

InitialStateController.prototype.rabbits = function () {
  var initialPositions = []
  initialPositions.push([this.middleX, this.middleY]);
  initialPositions.push([this.middleX, this.middleY+1]);
  initialPositions.push([this.middleX+1, this.middleY+1]);
  initialPositions.push([this.middleX+1, this.middleY+2]);
  initialPositions.push([this.middleX+2, this.middleY+1]);
  initialPositions.push([this.middleX+4, this.middleY]);
  initialPositions.push([this.middleX+5, this.middleY]);
  initialPositions.push([this.middleX+5, this.middleY+1]);
  initialPositions.push([this.middleX+6, this.middleY]);
  return initialPositions;
};

InitialStateController.prototype.gliderGun = function () {
  var initialPositions = []
  initialPositions = initialPositions.concat(this._rect(5, 1, 6, 2));
  
  initialPositions = initialPositions.concat(this._rect(5, 11, 7, 11));
  
  initialPositions = initialPositions.concat(this._rect(4, 12, 4, 12));
  initialPositions = initialPositions.concat(this._rect(8, 12, 8, 12));
  
  initialPositions = initialPositions.concat(this._rect(3, 13, 3, 14));
  initialPositions = initialPositions.concat(this._rect(9, 13, 9, 14));

  initialPositions = initialPositions.concat(this._rect(6, 15, 6, 15));

  initialPositions = initialPositions.concat(this._rect(4, 16, 4, 16));
  initialPositions = initialPositions.concat(this._rect(8, 16, 8, 16));

  initialPositions = initialPositions.concat(this._rect(5, 17, 7, 17));
  
  initialPositions = initialPositions.concat(this._rect(6, 18, 6, 18));

  initialPositions = initialPositions.concat(this._rect(3, 21, 5, 22));

  initialPositions = initialPositions.concat(this._rect(2, 23, 2, 23));
  initialPositions = initialPositions.concat(this._rect(6, 23, 6, 23));

  initialPositions = initialPositions.concat(this._rect(1, 25, 2, 25));
  initialPositions = initialPositions.concat(this._rect(6, 25, 7, 25));
  
  initialPositions = initialPositions.concat(this._rect(3, 35, 4, 36));

  return this._shift(initialPositions, -10, -20);
}

InitialStateController.prototype._rect = function(xStart, yStart, xEnd, yEnd) {
  var initialPositions = [];
  for (var i = xStart; i<= xEnd; i++) {
    for (var j = yStart; j <= yEnd; j++) {
      initialPositions.push([this.middleX + i, this.middleY + j]);
    }
  }
  return initialPositions;
} 

InitialStateController.prototype._shift = function (positions, xShift, yShift) {
  console.log(positions)
  positions.forEach(function (position) {
    position[0] = position[0] + xShift;
    position[1] = position[1] + yShift;
  });
  return positions;
}