"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2021-09-02
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example https://github.com/xgqfrms/typescript-in-action/issues/17#issuecomment-910461508
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * @solutions
 *
 */

const log = console.log;

// "use strict";
var FruitEnum;
(function (FruitEnum) {
    FruitEnum[FruitEnum["tomato"] = 1] = "tomato";
    FruitEnum[FruitEnum["banana"] = 2] = "banana";
    FruitEnum[FruitEnum["apple"] = 3] = "apple";
})(FruitEnum || (FruitEnum = {}));

// const FruitList = Object.entity(FruitEnum);

Object.entries(FruitEnum);

/*

FruitEnum;
{1: 'tomato', 2: 'banana', 3: 'apple', tomato: 1, banana: 2, apple: 3}


Object.entries(FruitEnum);
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ['1', 'tomato']
1: (2) ['2', 'banana']
2: (2) ['3', 'apple']
3: (2) ['tomato', 1]
4: (2) ['banana', 2]
5: (2) ['apple', 3]

*/


const map = new Map(Object.entries(FruitEnum));
// Map(6) {'1' => 'tomato', '2' => 'banana', '3' => 'apple', 'tomato' => 1, 'banana' => 2, …}

Object.fromEntries(map);
// {1: 'tomato', 2: 'banana', 3: 'apple', tomato: 1, banana: 2, apple: 3}1: "tomato"2: "banana"3: "apple"apple: 3banana: 2tomato: 1[[Prototype]]: Object

