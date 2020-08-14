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
  return new Promise(resolve, reject).then(() => {
    // promises;
    resolve(`ok`)
  }).catch(err => log(`PromiseAll Error`, err));
}

// test
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 0, 'foo');
});
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
  log(`error =`, err)
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
