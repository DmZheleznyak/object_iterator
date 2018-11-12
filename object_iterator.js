var a = { 0:0, 1:1, 3:3 }

var iter = function () {
  var _this = this;
  var keys = null;
  var index = 0;
  
  return {
    next: function () {
      if (keys === null) {
        keys = Object.keys(_this).sort();
      }
      
      return {
        value: +keys[index], done: index++ >= keys.length
      };
    }
  }
}

a[Symbol.iterator] = iter

var b = [...a]
console.log(b) // [ 0,1,2 ]