




const URL = this.window.URL || this.window.webkitURL;
const file = new Blob(
  // ["file:////Users/xgqfrms-mbp/Documents/GitHub/learning-javascript-with-mdn/000-xyz/blob/2022-04-07-sh.mp4"],
  ["https://cdn.xgqfrms.xyz/HTML5/Blob/2022-04-07-sh.mp4"],
  {"type" : "video/mp4"});
// blob url
const url = URL.createObjectURL(file);


/*


https://cdn.xgqfrms.xyz/HTML5/Blob/2022-04-07-sh.mp4

https://github.com/xgqfrms/learning-javascript-with-mdn/blob/master/000-xyz/blob/2022-04-07-sh.mp4
/Users/xgqfrms-mbp/Documents/GitHub/learning-javascript-with-mdn/000-xyz/blob/2022-04-07-sh.mp4


*/




