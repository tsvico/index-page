var maxTime = 10;
var timeoutInterval = 5;
var usedTime = 0;
var isManualFocus = false;

function check() {
  if (!isManualFocus && document['activeElement']['tagName']['toLowerCase']() == 'input') {
    console['log']('BLURRED');
    document['activeElement']['blur']();
  }
  usedTime += timeoutInterval;
  if (usedTime < maxTime) {
    window['setTimeout'](check, timeoutInterval);
  }
}
check();
document['body']['addEventListener']('click', function (_0x45a9x6) {
  if (_0x45a9x6['target']['tagName'] == 'INPUT') {
    console['log']('MANUAL CLICK');
    isManualFocus = true;
  }
});
document['body']['addEventListener']('keydown', function (_0x45a9x6) {
  isManualFocus = true;
});
