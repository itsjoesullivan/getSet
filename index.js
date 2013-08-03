var Set = module.exports = function() {}
Set.prototype.set = function(k,v) {
  if(v === undefined) {
    for(var i in k) {
      this.set(i,k[i]);
    }
    return;
  }
  if(this[k] !== v) {
    this[k] = v;
    if(typeof this.emit === 'function')
      this.emit('change:' + k,v);
  }
};

Set.prototype.get = function(k) {
  return this[k]
};
