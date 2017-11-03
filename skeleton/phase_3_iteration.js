Array.prototype.bubbleSort = function bubbleSort() {
  let sorted = false;
  while(sorted === false) {
    sorted = true;
    for(let i = 0; i < this.length - 1; i ++) {
      let j = i + 1;
      if(this[i] > this[j]) {
        let hold = this[i];
        this[i] = this[j];
        this[j] = hold;
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function substrings() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 1; j < this.length - i + 1; j++) {
      result.push(this.substr(i, j));
    }
  }
  return result;
};
