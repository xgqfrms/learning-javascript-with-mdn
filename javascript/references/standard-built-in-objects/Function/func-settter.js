"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-05
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://youtu.be/y4wDanUBNmE?t=347
 * @solutions
 *
 */

const log = console.log;

class Square {
  constructor (size = 0) {
    // init
    this.acreage = size**2;
    this.width = size;
    this.height = size;
    this.size = size;
  }
  get area () {
    log(`\narea = ${this.acreage}`);
    return this.acreage;
  }
  set area (acreage = 0) {
    const size = Math.sqrt(acreage);
    log(`area size =`, size);
    this.acreage = size**2;
    this.width = size;
    this.height = size;
    this.size = size;
  }
}


const test = new Square(3);

log(test.area);

test.area = 36;

log(test.area);



/*


area = 9
9
area size = 6

area = 36
36

*/
