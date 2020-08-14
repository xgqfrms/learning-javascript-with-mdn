# 类

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes

## 类

```code
  Private class fields
  Public class fields
  constructor
  extends
  static
```

## 定义类

> 类实际上是一个“特殊的函数”, 就像你能够定义的函数表达式和函数声明一样, 类的语法有两个组成部分：类表达式和类声明.

### 类声明

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

**不存在 Hoisting 提升**

```js
const p = new Rectangle();
// ReferenceError

class Rectangle {}
```

### 类表达式

```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name);
// output: "Rectangle"
```

```js
// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name);
// output: "Rectangle2"
```

## 类体和方法定义

### 严格模式

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

### 构造函数

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

### 原型方法

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area);
// 100
```

### 静态方法

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // static method
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
    // Math.hypot 函数返回其参数平方和的平方根，？？？加权平方根
  }
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
// https://s0developer0mozilla0org.icopy.site/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
// https://www.shuxuele.com/algebra/square-root.html

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance;
//undefined
p2.distance;
//undefined

console.log(Point.distance(p1, p2));
// 7.0710678118654755

```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_object_(class_instance)

### 使用原型和静态方法绑定 this

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak();
// the Animal object

let speak = obj.speak;
speak();
// undefined

Animal.eat();
// class Animal
let eat = Animal.eat;
eat();
// undefined

```

```js
function Animal() { }
Animal.prototype.speak = function() {
  return this;
}
Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak();
// global object (in non–strict mode)

let eat = Animal.eat;
eat();
// global object (in non-strict mode)

```

https://developer.mozilla.org/zh-CN/docs/Glossary/Global_object

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

### 实例属性

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;

```

### 字段声明

> Public and private field declarations are an experimental feature (stage 3) proposed at TC39,

1. 公有字段声明

```js
class Rectangle {
  // public
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields

2. 私有字段声明

```js
class Rectangle {
  // private #
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}

```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields

## 使用 extends 创建子类

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    // call the super class constructor and pass in the name parameter
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('puppy');
d.speak();
// puppy barks.
```

```js
function Animal (name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('puppy');
d.speak();
// puppy barks.
// For similar methods, the child's method takes precedence over parent's method
```

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('puppy');
d.speak();
// puppy makes a noise.

```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/extends

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf


## 种类

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let a = new MyArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray);
// false
console.log(mapped instanceof Array);
// true

```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species

## 使用 super 调用超类

```js
class Cat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    // super.method();
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super


## Mix-ins

> 抽象子类或 mix-ins 是类的模板

```js
let calculatorMixin = Base => class extends Base {
  calc() { }
};

let randomizerMixin = Base => class extends Base {
  randomize() { }
};

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

```
