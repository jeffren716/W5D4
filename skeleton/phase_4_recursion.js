const range = function range(start, end) {
  if(start === end) {
    let result = new Array;
    result.push(start);
    return result;
  }
  else {
    let arr = range(start, end - 1);
    arr.push(end);
    return arr;
  }
};

const sumRec = function sumRec(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  else {
    let newArr = arr.slice(0, arr.length - 1);
    let result = sumRec(newArr) + arr[arr.length - 1];
    return result;
  }
};

const exponentOne = function exponentOne(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else {
    return exponentOne(base, exp - 1) * base;
  }
};

const exponentTwo = function exponentTwo(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  else {
    if (exp % 2 === 0) {
      return exponentTwo(base, exp / 2) ** 2;
    }
    else {
      return base * (exponentTwo(base, (exp - 1) / 2) ** 2);
    }
  }
};

const fibonacci = function fibonacci(n) {
  if (n === 1) {
    let result = [1];
    return result;
  }
  else if (n === 2) {
    let result = [1, 1];
    return result;
  }
  else {
    let result = fibonacci(n - 1);
    result.push(result[result.length - 2] + result[result.length - 1]);
    return result;
  }
};

const bsearch = function bsearch(arr, target) {
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  if (arr[middle] === target) {
    return middle;
  }
  else if (arr.length === 1) {
    return -1;
  }
  else if (arr[middle] > target) {
    let result = bsearch(left, target);
    return result;
  }
  else if (arr[middle] < target ){
    let result = bsearch(right, target);
    if (result === -1) {
      return -1;
    }
    else {
      return result + middle;
    }
  }
};

const quicksort = function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  else {
    let pivot = arr[0];
    let left = [];
    let right = [];
    let slice = arr.slice(1);
    slice.forEach (function (el) {
      if (el < pivot) {
        left.push(el);
      }
      else {
        right.push(el);
      }
    });
    let result = quicksort(left).concat([pivot]).concat(quicksort(right));
    return result;
  }
};
