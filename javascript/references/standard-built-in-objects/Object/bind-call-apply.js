"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-01
 * @modified
 *
 * @description call, apply, bind & Object.prototype.toString()
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
 * @solutions
 *
 */

const log = console.log;

/*

# call, apply, bind

相同点:
bind, call, apply 都是改变 this 的指向!

不同点:
bind 不会立即执行, 需要手动调用

call 会立即执行, 参数列表(arg1, arg2, arg3, ...)
apply 会立即执行，参数数组 ([arg1, arg2, arg3, ...])

*/


// 检测 js 数据类型
// IIFE
(() => {
  Object.prototype.toString({})
  // "[object Object]"
  Object.prototype.toString([])
  // "[object Object]"
  Object.prototype.toString(Symbol())
  // "[object Object]"
  Object.prototype.toString(BigInt(1n))
  // "[object Object]"
})();

// bind
(() => {
  Object.prototype.toString.bind([]);
  // ƒ toString() { [native code] }
  Object.prototype.toString.bind([])();
  "[object Array]"
  // "[object Array]"
  Object.prototype.toString.bind(Symbol());
  // ƒ toString() { [native code] }
  Object.prototype.toString.bind(Symbol())();
  // "[object Symbol]"
  Object.prototype.toString.bind(BigInt(1n));
  // ƒ toString() { [native code] }
  Object.prototype.toString.bind(BigInt(1n))();
  // "[object BigInt]"
})();

// call
(() => {
  Object.prototype.toString.call([]);
  // "[object Array]"
  Object.prototype.toString.call(Symbol());
  // "[object Symbol]"
  Object.prototype.toString.call(BigInt(1n));
  // "[object BigInt]"
})();

// apply
(() => {
  Object.prototype.toString.apply([]);
  // "[object Array]"
  Object.prototype.toString.apply(Symbol());
  // "[object Symbol]"
  Object.prototype.toString.apply(BigInt(1n));
  // "[object BigInt]"
})();
