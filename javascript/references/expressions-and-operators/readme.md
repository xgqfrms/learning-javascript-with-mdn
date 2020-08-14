# Expressions and operators

> Operators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

## Operators

```md
  Addition (+)
  Addition assignment (+=)
  Assignment (=)
  Bitwise AND (&)
  Bitwise AND assignment (&=)
  Bitwise NOT (~)
  Bitwise OR (|)
  Bitwise OR assignment (|=)
  Bitwise XOR (^)
  Bitwise XOR assignment (^=)
  Comma operator (,)
  Conditional (ternary) operator
  Decrement (--)
  Destructuring assignment
  Division (/)
  Division assignment (/=)
  Equality (==)
  Exponentiation (**)
  Exponentiation assignment (**=)
  Function expression
  Greater than (>)
  Greater than or equal (>=)
  Grouping operator ( )
  Increment (++)
  Inequality (!=)
  Left shift (<<)
  Left shift assignment (<<=)
  Less than (<)
  Less than or equal (<=)
  Logical AND (&&)
  Logical AND assignment (&&=)
  Logical NOT (!)
  Logical OR (||)
  Logical OR assignment (||=)
  Logical nullish assignment (??=)
  Multiplication (*)
  Multiplication assignment (*=)
  Nullish coalescing operator (??)
  Object initializer
  Operator precedence
  Optional chaining (?.)
  Pipeline operator (|>) 🧪(No support)
  Property accessors
  Remainder (%)
  Remainder assignment (%=)
  Right shift (>>)
  Right shift assignment (>>=)
  Spread syntax (...)
  Strict equality (===)
  Strict inequality (!==)
  Subtraction (-)
  Subtraction assignment (-=)
  Unary negation (-)
  Unary plus (+)
  Unsigned right shift (>>>)
  Unsigned right shift assignment (>>>=)
  async function expression
  await
  class expression
  delete operator
  function* expression
  in operator
  instanceof
  new operator
  new.target
  super
  this
  typeof
  void operator
  yield
  yield*
```

## Expressions and operators by category

### Primary expressions

> Basic keywords and general expressions in JavaScript.

**this**

The this keyword refers to a special property of an execution context.

**function**

The function keyword defines a function expression.

**class**

The class keyword defines a class expression.

**function\***

The function* keyword defines a generator function expression.

**yield**

Pause and resume a generator function.

**yield\***

Delegate to another generator function or iterable object.

**async function**

The async function defines an async function expression.

**await**

Pause and resume an async function and wait for the promise's resolution/rejection.

**[]**

Array initializer/literal syntax.

**{}**

Object initializer/literal syntax.

**/ab+c/i**

Regular expression literal syntax.

**( )**

Grouping operator.

### Left-hand-side expressions

> Left values are the destination of an assignment.

**Property accessors**

Member operators provide access to a property or method of an object
(**object.property** and **object["property"]**).

**new**

The new operator creates an instance of a constructor.

**new.target**

In constructors, new.target refers to the constructor that was invoked by new.

**super**

The super keyword calls the parent constructor.

**...obj**

Spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

### Increment and decrement

> Postfix/prefix increment and postfix/prefix decrement operators.

**A++**

Postfix increment operator.

**A--**

Postfix decrement operator.

**++A**

Prefix increment operator.

**--A**

Prefix decrement operator.

### Unary operators

> A unary operation is operation with only one operand.

**delete**

The delete operator deletes a property from an object.

**void**

The void operator discards an expression's return value.

**typeof**

The typeof operator determines the type of a given object.

**+**

The unary plus operator converts its operand to Number type.

**-**

The unary negation operator converts its operand to Number type and then negates it.

**~**

Bitwise NOT operator.

**!**

Logical NOT operator.

### Arithmetic operators

> Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

**+**

Addition operator.

**-**

Subtraction operator.

**/**

Division operator.

**\***

Multiplication operator.

**%**

Remainder operator.

**\*\***

Exponentiation operator.

### Relational operators

> A comparison operator compares its operands and returns a Boolean value based on whether the comparison is true.

**in**

The in operator determines whether an object has a given property.

**instanceof**

The instanceof operator determines whether an object is an instance of another object.

**<**

Less than operator.

**>**

Greater than operator.

**<=**

Less than or equal operator.

**>=**

Greater than or equal operator.

Note: `=>` is not an operator, but the notation for Arrow functions.

### Equality operators

> The result of evaluating an equality operator is always of type Boolean based on whether the comparison is true.

**==**

Equality operator.

**!=**

Inequality operator.

**===**

Identity operator.

**!==**

Nonidentity operator.

### Bitwise shift operators

> Operations to shift all bits of the operand.

**<<**

Bitwise left shift operator.

**>>**

Bitwise right shift operator.

**>>>**

Bitwise unsigned right shift operator.


### Binary bitwise operators

> Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

**&**

Bitwise AND.

**|**

Bitwise OR.

**^**

Bitwise XOR.

### Binary logical operators

> Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.

**&&**

Logical AND.

**||**

Logical OR.

### Conditional (ternary) operator

**(condition ? ifTrue : ifFalse)**

The conditional operator returns one of two values based on the logical value of the condition.

### Assignment operators

> An assignment operator assigns a value to its left operand based on the value of its right operand.

**=**

Assignment operator.

***=**

Multiplication assignment.

**/=**

Division assignment.

**%=**

Remainder assignment.

**+=**

Addition assignment.

**-=**

Subtraction assignment.

**<<=**

Left shift assignment.

**>>=**

Right shift assignment.

**>>>=**

Unsigned right shift assignment.

**&=**

Bitwise AND assignment.

**^=**

Bitwise XOR assignment.

**|=**

Bitwise OR assignment.

**&&=**

Logical AND assignment.

**||=**

Logical OR assignment.

**??=**

Logical nullish assignment.

**[a, b] = [1, 2]**

**{a, b} = {a:1, b:2}**

Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.

### Comma operator

**,**

The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.
