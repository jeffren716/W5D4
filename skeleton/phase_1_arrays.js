Array.prototype.uniq = function uniq() {
  const result = [];
  this.forEach(function (el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.twoSum = function twoSum() {
  const result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function transpose() {
  const result = [];
  this[0].forEach(function (el) {
    result.push(new Array);
  });
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this[i].length; j++) {
      result[j].push(this[i][j]);
    }
  }
  return result;
};
