function generatorBlobVideo(url, type, dom, link) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'arraybuffer';
  // xhr.responseType = 'arrayBuffer';
  // xhr.responseType = 'Blob';
  // xhr.responseType = type;
  xhr.onload = function(res) {
    console.log('res =', res);
    console.log('xhr.response =', xhr.response);
    // var file = new File([url], "filename", {
    //   type: type,
    // });
    // console.log('file =', file);
    var blob = new Blob(
      [xhr.response],
      // [file],
      // [url],
      // [new File(xhr.response, 'test')],
      // ['https://cdn.xgqfrms.xyz/HTML5/Blob/2022-04-07-sh.mp4'],
      {'type' : type},
    );
    var urlBlob = URL.createObjectURL(blob);
    dom.src = urlBlob;
    link.href = urlBlob;
    link.innerText = urlBlob;
    // console.log('urlBlob', urlBlob);
    // console.log('link', link);
  };
  xhr.send();
}

(function() {
  var type = 'image/png';
  var url = 'https://cdn.xgqfrms.xyz/logo/icon.png';
  var dom = document.querySelector('#img');
  var link = document.querySelector('#img-link');
  console.log('img link =', link);
  generatorBlobVideo(url, type, dom, link);
})();
(function() {
  var type = 'video/mp4';
  var url = 'https://cdn.xgqfrms.xyz/HTML5/Blob/2022-04-07-sh.mp4';
  var dom = document.querySelector('#video');
  var link = document.querySelector('#video-link');
  console.log('vidoe link =', link);
  setTimeout(() => {
    generatorBlobVideo(url, type, dom, link);
  }, 3000);
})();
