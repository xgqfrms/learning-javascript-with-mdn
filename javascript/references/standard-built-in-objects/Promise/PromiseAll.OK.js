"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-14
 * @modified
 *
 * @description PromiseAll
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * @solutions
 *
 */

const log = console.log;

const PromiseAll = (promises = []) => {
  let count = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(value => {
        if(value) {
          // result.push(value)
          result[i] = value;
          // result[count] = value;
          count += 1;
        }
        // if(result.length === promises.length) {
        //   // log(`PromiseAll OK`, promises)
        //   resolve(result)
        //   // return resolve(result)
        // }
        if(count === promises.length) {
          // log(`PromiseAll OK`, promises)
          resolve(result)
          // return resolve(result)
        }
      }, err => {
        // throw new Error(err);
        // log(`error 1`, err)
        reject(err);
      });
    });
  })
  // .catch(error => {
  //   log(`error 3`)
  //   log(`Promise Error 3`, error)
  //   // reject(error);
  //   // return reject(error);
  // });
}

/*

Unhandled promise rejection.
This error originated either by throwing inside of an async function without a catch block,
or by rejecting a promise which was not handled with .catch().
To terminate the node process on unhandled promise rejection,
use the CLI flag `--unhandled-rejections=strict`,
see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode

*/

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

$ node promiseAll.js

error = promise error
promisesOK values = [ 3, 42, 'foo' ]

OK = Promise { undefined }
Error = Promise { undefined }

*/
