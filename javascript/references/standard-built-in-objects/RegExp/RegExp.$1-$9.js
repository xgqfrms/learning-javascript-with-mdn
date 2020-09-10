"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-01
 * @modified
 *
 * @description RegExp.$1-$9
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

// RegExp.$1-$9

(() => {
  const re = /(\w+)\s(\w+)/;
  log(`RegExp.$1 =`, RegExp.$1)
  log(`RegExp.$2 =`, RegExp.$2)
  let str = 'John Smith';
  str.replace(re, '$2, $1');
  // "Smith, John"
  RegExp.$1;
  // "John"
  RegExp.$2;
  // "Smith"
  log(`\nstr =`, str)
  log(`RegExp.$1 =`, RegExp.$1)
  log(`RegExp.$2 =`, RegExp.$2)
  log(`\ntest`, re.test(str));
  log(`\nmatch`, re.exec(str));
})();



(() => {
  let str = 'Testing 24';
  let number = /(\d+)/.test(str) ? RegExp.$1 : '0';
  log(`\nnumber =`, number);
  // "24"
})();

/*

RegExp.$1 =
RegExp.$2 =

str = John Smith
RegExp.$1 = John
RegExp.$2 = Smith

test true

match [
  'John Smith',
  'John',
  'Smith',
  index: 0,
  input: 'John Smith',
  groups: undefined
]


*/
