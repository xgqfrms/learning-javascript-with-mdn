"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-14
 * @modified
 *
 * @description PromiseAll & async promise order OK ✅
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * @solutions
 *
 */

const log = console.log;

const PromiseAll = (promises = [], debug = false) => {
  const result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(value => {
        if(value) {
          // async promise order OK ✅
          result[i] = value;
          // async push order bug ❌
          // result.push(value)
        }
        if(result.length === promises.length) {
          if(debug) {
            log(`PromiseAll OK`, promises)
          }
          resolve(result)
        }
      }, err => {
        reject(err);
      });
    });
  });
}

// test
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 0, 'foo');
});
const promise3 = 42;
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 0, 'foo');
// });
const promise4 = new Promise((resolve, reject) => {
  reject(`promise error`);
});

const promisesOK = [promise1, promise2, promise3];
const promisesError = [promise1, promise2, promise3, promise4];

const OK = PromiseAll(promisesOK).then((values) => {
  log(`promisesOK values =`, values);
});

// const OK = Promise.all(promisesOK).then((values) => {
//   log(`promisesOK values =`, values);
// });

const Error = PromiseAll(promisesError).then((values) => {
  log(`promisesError values =`, values);
}).catch(err => {
  log(`catch error =`, err)
});

// const Error = Promise.all(promisesError).then((values) => {
//   log(`promisesError values =`, values);
// }).catch(err => {
//   log(`error =`, err)
// });

setTimeout(() => {
  log(`\nOK =`, OK)
  log(`Error =`, Error)
}, 5);


/*
$ node PromiseAll.js ✅

catch error = promise error
promisesOK values = [ 3, 'foo', 42 ]

OK = Promise { undefined }

*/

/*

$ node promise.all.js

error = promise error
promisesOK values = [ 3, 'foo', 42 ]

OK = Promise { undefined }
Error = Promise { undefined }

*/

