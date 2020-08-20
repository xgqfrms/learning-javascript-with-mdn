"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-01
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * @solutions
 *
 */

const log = console.log;

const months = ['1', '2', '3'];

// insert, delete 0
months.splice(1, 0, '5');
// ["1", "5", "2", "3"]
log(months);

// replace, delete 1
months.splice(3, 1, '6');
// ["1", "5", "2", "6"]
log(months);

// add, delete -1
months.splice(4, 1, '7');
// ["1", "5", "2", "6", "7"]
log(months);

// delete, delete 1
months.splice(4, 1);
// ["1", "5", "2", "6"]
log(months);
