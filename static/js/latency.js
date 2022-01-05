var ping = 1,
  urlList = ['http://www.peoplevip.cn'];
setInterval('ping++', 20);
newRequest();

function newRequest() {
  for (var i = 0; i < urlList.length; i++) {
    $('pss').eq(i).find('ping').html('Testing...');
    // prettier-ignore
    $("pss").eq(i).find("ping").append(
          `<img src='https://www.peoplevip.cn/ping' width='1' height='1' onerror='autotest("${i}")' style='display:none'>`
        );
  }
}

function autotest(a) {
  // prettier-ignore
  $("pss").eq(a).find("ping").text(ping * 20 + "ms");
}
