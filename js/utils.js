(function (global) {
  "use strict";

  function qs(selector, context) {
    return (context || document).querySelector(selector);
  }

  function qsa(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector));
  }

  function reducedMotion() {
    return typeof global.matchMedia === "function" &&
      global.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  global.RUSC = {
    qs: qs,
    qsa: qsa,
    reducedMotion: reducedMotion
  };
})(window);
