var ping = 1,
  urlList = ['http://www.peoplevip.cn'];
setInterval('ping++', 100);
newRequest();

function newRequest() {
  for (var _0x9121x4 = 0; _0x9121x4 < urlList['length']; _0x9121x4++) {
    $('pss')['eq'](_0x9121x4)['find']('ping')['html']('Testing...');
    $('pss')
      ['eq'](_0x9121x4)
      ['find']('ping')
      ['append']("<img src='https://www.peoplevip.cn/ping' width='1' height='1' onerror='autotest(" + _0x9121x4 + ")' style='display:none'>");
  }
}

function autotest(_0x9121x4) {
  $('pss')
    ['eq'](_0x9121x4)
    ['find']('ping')
    ['text'](ping * 10 + 'ms');
}
