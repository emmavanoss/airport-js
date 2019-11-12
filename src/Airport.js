function Airport() {
  this._planes = [];
};

Airport.prototype.land = function(plane) {
  this._planes.push(plane);
  return plane;
};

Airport.prototype.takeOff = function(plane) {
  console.log('planes before: ' + this._planes);
  index = this._planes.indexOf(plane);
  this._planes.splice(index, 1);
  console.log('planes after: ' + this._planes);
  return plane;
}
