# Functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

## Functions

```md
  Arrow function expressions
  Default parameters
  Method definitions
  Rest parameters
  The arguments object
  getter
  setter
```

## Function object

> Every function in JavaScript is a `Function object`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function


### The function declaration (function statement)

```js

function name([param[, param[, ... param]]]) {
  statements
}

```

### The function expression (function expression)

```js

function [name]([param[, param[, ... param]]]) {
  statements
}

```

### The generator function declaration (function* statement)

```js

function* name([param[, param[, ... param]]]) {
  statements
}

```

### The generator function expression (function* expression)

```js

function* [name]([param[, param[, ... param]]]) {
  statements
}

```

### The arrow function expression (=>)

```js

([param[, param]]) => {
   statements
}

param => expression

```

### The Function constructor

```js

new Function (arg1, arg2, ... argN, functionBody)

```

### The GeneratorFunction constructor

```js

new GeneratorFunction (arg1, arg2, ... argN, functionBody)

```

## Function parameters

### Default parameters

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

### Rest parameters

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

## The `arguments` object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

**arguments**

An array-like object containing the arguments passed to the currently executing function.

**arguments.callee**

The currently executing function.

**arguments.caller**

The function that invoked the currently executing function.

**arguments.length**

The number of arguments passed to the function.

## Defining method functions

### Getter and setter functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

### Method definition syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

```js

var obj = {
  foo() {},
  bar() {}
};

```

## Constructor vs. declaration vs. expression

```js
var multiply = new Function('x', 'y', 'return x * y');

function multiply(x, y) {
   return x * y;
}
// there is no semicolon here

var multiply = function(x, y) {
  return x * y;
};

var multiply = function func_name(x, y) {
  return x * y;
};

```

> Differences

```js

```

## Block-level functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

```js
'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1;
// true

// f() === 2 in non-strict mode
```

### Block-level functions in non-strict code

```js
// 'use strict';
if (shouldDefineZero) {
  function zero() {
    // DANGER: compatibility risk
  console.log("This is zero.");
  }
}

```

```js
// 'use strict';
var zero;
if (shouldDefineZero) {
   zero = function() {
      console.log("This is zero.");
   };
}

```

## examples

### Returning a formatted number

```js

// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  var numStr = num.toString();
  // Initialize return value as string
  var numZeros = totalLen - numStr.length;
  // Calculate no. of zeros
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}

// call the padZeros function.

var result;
result = padZeros(42,4);
// returns "0042"
result = padZeros(42,2);
// returns "42"
result = padZeros(5,4);
// returns "0005"

```

### Determining whether a function exists

```js

if (typeof window.noFunc === 'function') {
  // use noFunc()
  noFunc();
} else {
  // do something else
}

```
