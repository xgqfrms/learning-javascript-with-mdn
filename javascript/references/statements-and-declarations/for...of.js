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
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
 *
 */

const log = console.log;

const obj = {
  a: 1,
  b: 2,
};
for(const in obj) {
 log(`for in object i =`, i)
}

/*

// error
const test1 = isValid(`((}}`);
// ok
const test2 = isValid(`()[]{}`);

log(`❌test =`, test1 ? `✅` : `❌`);
log(`✅test ok =`, test2 ? `✅` : `❌`);

*/
