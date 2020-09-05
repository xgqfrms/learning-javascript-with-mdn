"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-05
 * @modified
 *
 * @description class static getter & setter
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

let window = {
  username: "xgqfrms",
};
// let window = window || {
//   username: "xgqfrms",
// };

// global variable
// global.username = "web fullstack";
let username = "web fullstack";

class Person {
  constructor(name = `xgqfrms`, dollar = 100) {
    this.username = name;
    this.money = dollar;
  }
  // static property / public class field
  static staticName = `static property / public class field`;
  // static methods just only for the Utils function ✅
  static get getStaticName() {
    log(`\nstaticName =`, Person.staticName);
    return Person.staticName || Person.name;
  }
  static get userName() {
    log(`\nstatic userName =`, window.username || global.username);
    return window.username || global.username;
  }
  static set userName(name) {
    log(`\nnew name =`, name);
    if(window.username) {
      window.username = name;
    } else {
      global.username = name;
    }
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

log(Person.getStaticName);
// staticName = static property / public class field
log(Person.staticName);
// static property / public class field


log(Person.userName);
// static userName = xgqfrms

Person.userName = "abc xyz";

log(Person.userName);
// static userName = abc xyz

/*


get money = 100
100

set money = 888

get money = 888
888

*/
