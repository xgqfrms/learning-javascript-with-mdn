"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-01
 * @modified
 *
 * @description Pipeline operator (|>) / 管道运算符 |>
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator
 * @solutions
 *
 */

const log = console.log;

/*

expression |> function

// 实验性管道运算符|>（当前处于阶段1）将表达式的值通过管道传递给函数。

*/

const double = (n) => n * 2;
const increment = (n) => n + 1;

// without pipeline operator
double(increment(double(double(5))));
// 42

// with pipeline operator
5 |> double |> double |> increment |> double;
// 42
