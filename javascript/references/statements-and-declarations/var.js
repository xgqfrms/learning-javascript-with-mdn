// "use strict";

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
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var
 *
 */

const log = console.log;

// 1. var exist hoisting
log(`hoisting var =`, hoisting_var);
// hoisting var = undefined
var hoisting_var = 1;

/*
// equal to ✅

var hoisting_var
log(`hoisting var =`, hoisting_var);
// hoisting var = undefined
hoisting_var = 1;

*/

// 2. var can be redeclare
var redeclare_var = `A`;
var redeclare_var = `a`;
log(`redeclare var =`, redeclare_var);
// redeclare var = a

// 3.


// 4. global scope & function scope
function global_test() {
  // hoisting, global scope
  xyz = 7;
  log(`global var =`, xyz)
}
global_test();
log(`global scope var`, xyz)

function local_test() {
  // local, function scope
  var abc = 3;
  log(`local var =`, abc)
}
local_test();
// log(`local scope var =`, abc);
// ReferenceError: abc is not defined

// 5. global scope var, auto bind to window object
var window_var = 3;
log(`window var =`, window_var);
// (globalThis = window ? window : global)
// if(!window) {
//   // ReferenceError: window is not defined
//   global.window = {};
// }
// global.window = {};
(() => {
  window = {
    window_var: 7,
  };
})();
log(`\nglobalThis =`, globalThis, globalThis.window.window_var);
log(`global =`, global, global.window.window_var);
// log(`\nglobalThis =`, globalThis, globalThis.window_var);
// log(`global =`, global, global.window_var);

// log(`window var =`, global.window ? global.window.window_var : global.window_var);
// log(`window var =`, window ? window.window_var : global.window_var);
// ReferenceError: window is not defined
