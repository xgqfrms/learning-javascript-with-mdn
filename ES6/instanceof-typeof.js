"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-04-29
 * @modified
 *
 * @description typeof & instanceof
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @link
 *
 */

const log = console.log;


// ??? {} block
// {} instanceof Object;
// Uncaught SyntaxError: Unexpected token 'instanceof'
const obj = {};
obj instanceof Object;
// true
obj instanceof Array;
// false
obj instanceof Function;
// false


const arr = [];
[] instanceof Array;
// true
arr instanceof Object;
// true
arr instanceof Array;
// true
arr instanceof Function;
// false

// true
const func = () => {};
// func = function() {};
func instanceof Function;
// true
func instanceof Object;
// true
func instanceof Array;
// false



Object.keys(obj).length
// 0
for(let key in obj) {
  log(`key`, key)
}
obj.hasOwnProperty();
// false

obj.a = `a`;
obj.hasOwnProperty();
// false
for(let key in obj) {
  log(`key =`, key)
}
// key = a


log(typeof 42);
// "number"
log(typeof 'str');
// "string"
log(typeof true);
// "boolean"
log(typeof undeclaredVariable);
// "undefined";

log(typeof null);
// "object"
log(typeof NaN);
// "number"

log(typeof Symbol);
// "function"

log(typeof 1n);
// "bigint"
log(typeof BigInt(`1`));
// "bigint"
log(typeof BigInt(1));
// "bigint"

// const func = () => {}
log(typeof func);
// "function"

log(typeof []);
// "object"
log(typeof {});
// "object"
