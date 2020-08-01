# 标准内置对象

> 全局对象(全局作用域内的对象, 不是 this 指向的 global 对象)

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects

## 内置对象

```md
  AggregateError 🧪
  Array
  ArrayBuffer
  AsyncFunction
  Atomics
  BigInt
  BigInt64Array
  BigUint64Array
  Boolean
  DataView
  Date
  Error
  EvalError
  FinalizationRegistry
  Float32Array
  Float64Array
  Function
  Generator
  GeneratorFunction
  Infinity
  Int16Array
  Int32Array
  Int8Array
  InternalError
  Intl
  JSON
  Map
  Math
  NaN
  Number
  Object
  Promise
  Proxy
  RangeError
  ReferenceError
  Reflect
  RegExp
  Set
  SharedArrayBuffer
  String
  Symbol
  SyntaxError
  TypeError
  TypedArray
  URIError
  Uint16Array
  Uint32Array
  Uint8Array
  Uint8ClampedArray
  WeakMap
  WeakRef
  WeakSet
  WebAssembly
  decodeURI()
  decodeURIComponent()
  encodeURI()
  encodeURIComponent()
  escape() 👎
  eval()
  globalThis
  isFinite()
  isNaN()
  null
  parseFloat()
  parseInt()
  undefined
  unescape() 👎
  uneval() ⚠️
```

## 标准对象(按类别)

### 值属性

> These global properties return a simple value. They have no properties or methods.

```md
  Infinity
  NaN
  undefined
  globalThis
```

### 函数属性

> These global functions—functions which are called globally, rather than on an object—directly return their results to the caller.

```md
  eval()
  uneval() ⚠️
  isFinite()
  isNaN()
  parseFloat()
  parseInt()
  encodeURI()
  encodeURIComponent()
  decodeURI()
  decodeURIComponent()
  Deprecated
  escape() 👎
  unescape() 👎
```

### 基本对象

> These are the fundamental, basic objects upon which all other objects are based. This includes general objects, booleans, functions, and symbols.

```md
  Object
  Function
  Boolean
  Symbol
```

#### 错误对象

> Error objects are a special type of fundamental object. They include the basic Error type, as well as several specialized error types.

```md
  Error
  AggregateError 🧪
  EvalError
  InternalError
  RangeError
  ReferenceError
  SyntaxError
  TypeError
  URIError
```

### 数字和日期

> These are the base objects representing numbers, dates, and mathematical calculations.

```md
  Number
  BigInt
  Math
  Date
```

### 数字和日期

> These objects represent strings and support manipulating them.

```md
  String
  RegExp
```

### 索引集合(可索引访问的集合)

> These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

```md
  Array
  Int8Array
  Uint8Array
  Uint8ClampedArray
  Int16Array
  Uint16Array
  Int32Array
  Uint32Array
  Float32Array
  Float64Array
  BigInt64Array
  BigUint64Array
```

### 键值集合(可键值访问的集合)

> These objects represent collections which use keys. The iterable collections (Map and Set) contain elements which are easily iterated in the order of insertion.

  Map
  Set
  WeakMap
  WeakSet

### 结构化数据

> These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).

```md
  ArrayBuffer
  SharedArrayBuffer
  Atomics
  DataView
  JSON
```

### 控制抽象对象

> Control abstractions can help to structure code, especially async code (without using deeply nested callbacks, for example).

```md
  Promise
  Generator
  GeneratorFunction
  AsyncFunction
```

### 反射

```md
  Reflect
  Proxy
```

### 国际化

> Additions to the ECMAScript core for language-sensitive functionalities.

```md
  Intl
  Intl.Collator
  Intl.DateTimeFormat
  Intl.ListFormat
  Intl.NumberFormat
  Intl.PluralRules
  Intl.RelativeTimeFormat
  Intl.Locale
```

### WebAssembly (Web 汇编)

```md
  WebAssembly
  WebAssembly.Module
  WebAssembly.Instance
  WebAssembly.Memory
  WebAssembly.Table
  WebAssembly.CompileError
  WebAssembly.LinkError
  WebAssembly.RuntimeError
```

### 其他

```md
  arguments
```
