var a = { 0:0, 1:1, 2:2 }

var iter = function () { //[Symbol.iterator] это function которая возвращает object
// создаём массив(arrOfKeys) для заполнения его ключами итерируемого обьекта 
// в нашем случае это обьект a
	var arrOfKeys = []
// создаём переменную в которой сохраняется индекс
// для сохранения при каждом вызове метода next()  
	var index = 0;
  
  for (let key in this) {
// цикл for...in сразу выдаёт отсортируемые ключи     
    arrOfKeys.push( key )  //заполняем массив ключами текущего обекта
  }
  
  return { // возвращаем object
    next: function () { // в котором есть метод
// при каждом шаге итерации возвращается объект
// с полем value со значением массива с ключами со значениями объекта,
// а также с полем done выпелнен ли полный обход по всем значениям текущего массива

      return {
// в поле value попадает текущее(index) значение(arrOfKeys[index]) массива(arrOfKeys)
// меняя тип строки на нужный нам тип - число(+arrOfKeys[index])
// поле done: проверка пройден ли полностью цикл, сверяя текущий индекс значения с длиной массива
// также при каждом вызове увеличиваем индекс значения - (index++)         
        value: +arrOfKeys[index], done: index++ >= arrOfKeys.length
      };

    }
  }
}

a[Symbol.iterator] = iter

var b = [...a]
console.log(b) // [ 0,1,2 ]