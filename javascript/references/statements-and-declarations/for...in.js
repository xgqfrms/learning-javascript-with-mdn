
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
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in
 *
 */

const log = console.log;


const obj = {
  a: 1,
  b: 2,
};

for(const key in obj) {
 log(`for in object key =`, key)
}
