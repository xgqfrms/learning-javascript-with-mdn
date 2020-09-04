"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-0
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

class Person {
  constructor(name = `xgqfrms`, dollar = 100) {
    this.username = name;
    this.money = dollar;
  }
  // static property / public class field
  static staticName = `static property / public class field`;
  static getStaticName() {
    log(`staticName =`, staticName);
    return this.staticName;
  }
  get fortune() {
    log(`\nget money =`, this.money);
    return this.money;
  }
  set fortune(dollar) {
    log(`\nset money =`, dollar);
    this.money = dollar;
  }
  // static 只能修改全局属性，不能用于类实例中 ✅
  // static get fortune() {
  //   log(`get money =`, this.money);
  //   return this.money;
  // }
  // static set fortune(dollar) {
  //   log(`set money =`, dollar);
  //   this.money = dollar;
  // }
}

const user = new Person(`web fullstack`);

log(user.fortune);

user.fortune = 888;

log(user.fortune);


/*


get money = 100
100

set money = 888

get money = 888
888

*/
