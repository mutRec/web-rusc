(function (global) {
  "use strict";

  var INTERVAL_MS = 6000;

  function initBackground() {
    var utils = global.RUSC;
    var layers = utils.qsa(".bg__img");

    if (layers.length < 2 || utils.reducedMotion()) {
      return;
    }

    var current = 0;
    var timer = null;

    function showNext() {
      layers[current].classList.remove("is-active");
      current = (current + 1) % layers.length;
      layers[current].classList.add("is-active");
    }

    function start() {
      if (timer === null) {
        timer = global.setInterval(showNext, INTERVAL_MS);
      }
    }

    function stop() {
      if (timer !== null) {
        global.clearInterval(timer);
        timer = null;
      }
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    });

    start();
  }

  initBackground();
})(window);
