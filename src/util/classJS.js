function Pointer(x, y) {
  this.x = x;
  this.y = y;
}

Pointer.prototype.toString = function () {
  return `(${this.x},${this.y})`;
};

/*
class是es6引入的实例语法糖

*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x},${this.y})`;
  }
}

const p = new Point(2, 3);
// console.log(p);

/*
super 表示父类的constructor
*/
class Factory {}

class Car extends Factory {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的方法
  }
}
