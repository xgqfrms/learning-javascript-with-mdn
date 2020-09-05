"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-05
 * @modified
 *
 * @description object getter & setter
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://youtu.be/bl98dm7vJt0?t=332
 * @solutions
 *
 */

const log = console.log;


const person = {
  name: "xgqfrms",
  firstName: "web",
  lastName: "fullstack",
  get fullName () {
    log(`\nfullName = ${this.firstName} ${this.lastName}`);
    return `${this.firstName} ${this.lastName}`;
    // return this.firstName + this.lastName;
  },
  set fullName (name) {
    // const names = name.split(` `).map(item => item.trim());
    // this.firstName = names[0];
    // this.lastName = names[1];
    [this.firstName, this.lastName] = name.split(` `).map(item => item.trim());
    // [this.firstName, this.lastName, ...others] = name.split(` `).map(item => item.trim());
  },
}

log(person.fullName);

person.fullName = `abc xyz`;

log(person.fullName);


/*


fullName = web fullstack
web fullstack

fullName = abc xyz
abc xyz

*/
