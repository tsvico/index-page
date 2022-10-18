let t = window.performance && window.performance.timing;
let timer = setInterval(() => {
  const res = t.domInteractive - t.fetchStart;
  if (res > 0) {
    $('pss')
      .eq(0)
      .find('ping')
      .text(`${t.domInteractive - t.fetchStart}ms`);
    clearInterval(timer);
  }
}, 20);
