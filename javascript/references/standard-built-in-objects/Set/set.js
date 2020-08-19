"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-19
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

const mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
// Set(3) {1, 5, "some text"}
const obj = {a: 1, b: 2}

mySet.add(obj)
// Set(4) {1, 5, "some text", {…}}[[Entries]]0: 11: 52: "some text"3: Objectvalue: {a: 1, b: 2}size: (...)__proto__: Set
mySet.has(1)
// true
mySet.has(o)
// true
