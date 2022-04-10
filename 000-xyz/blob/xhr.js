function generatorBlobVideo(url, type, dom) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://cdn.xgqfrms.xyz/HTML5/Blob/2022-04-07-sh.mp4');
  xhr.responseType = 'arrayBuffer';
  xhr.onload = function(res) {
    console.log('res', res);
    console.log('xhr.response', xhr.response);
    var blob = new Blob(
      // ['https://cdn.xgqfrms.xyz/HTML5/Blob/2022-04-07-sh.mp4'],
      [xhr.response],
      {"type" : "video/mp4"},
    );
    var urlBlob = URL.createObjectURL(blob);
    // video
    dom.src = urlBlob;
    console.log('urlBlob', urlBlob);
  };
  xhr.send();
}
