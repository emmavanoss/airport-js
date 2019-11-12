function Airport() {
  this._planes = [];
  this._capacity = 1;
};

Airport.prototype.land = function(plane) {
  if (this._planes.length >= this._capacity) throw "airport full!";
  this._planes.push(plane);
  return plane;
};

Airport.prototype.takeOff = function(plane) {
  index = this._planes.indexOf(plane);
  this._planes.splice(index, 1);
  return plane;
}
