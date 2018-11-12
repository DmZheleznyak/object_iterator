var a = { 0:0, 1:1, 2:2 }

var iter = function () { //[Symbol.iterator] это function которая возвращает object
	var _this = this;
// сохраняем this в переменную	
	var keys = null;
// ставим keys null для будущей проверки	
	var index = 0;
// 	
  
  return { // возвращает object
    next: function () { // в котором есть метод
      if (keys === null) {	//
        keys = Object.keys(_this).sort( ( a,b ) => a - b );
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