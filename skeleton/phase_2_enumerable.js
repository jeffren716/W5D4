Array.prototype.myEach = function myEach(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function myMap(cb) {
  const result = [];
  this.myEach(function(el) {
    result.push(cb(el));
  });
  return result;
};

Array.prototype.myReduce = function myReduce(cb, initialValue) {
  if(arguments.length > 1) {
    let acc = initialValue;
    this.myEach(function(el) {
      acc = (cb(acc, el));
    });
    return acc;
  }
  else {
    let acc = this[0];
    for(let i = 1; i < this.length; i++) {
      acc = (cb(acc, this[i]));
    }
    return acc;
  }
};


// class Array
//
//   def self.myMap {block}
//     result = []
//     self.each do |el|
//       result << block(el)
//     end
//     result
//   end
// end
