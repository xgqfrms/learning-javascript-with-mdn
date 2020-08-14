# Promise

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

## Promise.all

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all


### Basic Example

```js
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout( function() {
    resolve("Success!")  // Yay! Everything went well!
  }, 250)
})

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage)
});

```

## Example with diverse situations

```js
"use strict";

// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8;
// can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  try {
    setTimeout(function() {
      const randomInt = Date.now();
      const value = randomInt % 10;
      try {
        if(value >= THRESHOLD_A) {
          throw new Error(`Too large: ${value}`);
        }
      } catch(msg) {
        reject(`Error in callback ${msg}`);
      }
      resolve(value);
      return;
    }, 500);
    // To experiment with error at set-up, uncomment the following 'throw'.
    // throw new Error("Bad setup");
  } catch(err) {
    reject(`Error during setup: ${err}`);
  }
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false ;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Trouble getting number: ${reason}`);
  throw -999; // must "throw" something, to maintain error state down the chain
}

function promiseGetWord(parityInfo) {
  // The "tetheredGetWord()" function gets "parityInfo" as closure variable.
  var tetheredGetWord = function(resolve,reject) {
    const theNumber = parityInfo.theNumber;
    const threshold_B = THRESHOLD_A - 1;
    if(theNumber >= threshold_B) {
      reject(`Still too large: ${theNumber}`);
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
      resolve(parityInfo);
    }
    return;
  }
  return new Promise(tetheredGetWord);
}

(
  new Promise(tetheredGetNumber)).then(determineParity,troubleWithGetNumber)
    .then(promiseGetWord)
    .then((info) => {
      console.log("Got: ",info.theNumber," , ", info.wordEvenOdd);
      return info;
    })
    .catch((reason) => {
      if(reason === -999) {
        console.error("Had previously handled error");
      }
      else {
        console.error(`Trouble with promiseGetWord(): ${reason}`);
      }
    })
    .finally((info) => console.log("All done")
);

```

### Advanced Example

```js
"use strict";
var promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;
  let log = document.getElementById('log');
  // begin
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>');
  // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
  let p1 = new Promise((resolve, reject) => {
    // The executor function is called with the ability to resolve or reject the promise
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise started (<small>Async code started</small>)<br/>');
    // This is only an example to create asynchronism
    window.setTimeout(function() {
        // We fulfill the promise !
        resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });

  // We define what to do when the promise is resolved with the then() call,
  // and what to do when the promise is rejected with the catch() call
  p1.then(function(val) {
    // Log the fulfillment value
    log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
  }).catch((reason) => {
    // Log the rejection reason
    console.log(`Handle rejected promise (${reason}) here.`);
  });
  // end
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');
}

```
