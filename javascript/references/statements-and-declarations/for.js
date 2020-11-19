"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-01-01
 * @modified
 *
 * @description
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for
 *
 */

const log = console.log;

for(var i = 0; i < 3; i++) {
  log(`for var i =`, i);
}
log(`var i =`, i);

for(let j = 0; j < 3; j++) {
 log(`for let j =`, j);
}
// log(`j =`, j);
// ReferenceError: j is not defined

for(const k = 0; k < 3; k++) {
  // TypeError: Assignment to constant variable.
  log(`for const k =`, k);
}
// log(`k =`, k);
// ReferenceError: k is not defined
