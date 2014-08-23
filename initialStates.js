function InitialStateController (size) {
  this.size = size;
  this.middleX = (this.size[0] - (this.size[0] % 2)) / 2;
  this.middleY = (this.size[1] - (this.size[1] % 2)) / 2;
};

InitialStateController.prototype.rPentomino = function () {
  initialPositions = []
  initialPositions.push([this.middleX, this.middleY + 1]);
  initialPositions.push([this.middleX + 1, this.middleY + 0]);
  initialPositions.push([this.middleX + 1, this.middleY + 1]);
  initialPositions.push([this.middleX + 1, this.middleY + 2]);
  initialPositions.push([this.middleX + 2, this.middleY]);
  return initialPositions;
};

InitialStateController.prototype.bPentomino = function () {
  initialPositions = []
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
  initialPositions = []
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
  initialPositions = []
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