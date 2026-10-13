(function (global) {
  "use strict";

  var utils = global.RUSC;

  function setYear() {
    var year = String(new Date().getFullYear());
    utils.qsa("[data-year]").forEach(function (node) {
      node.textContent = year;
    });
  }

  function initContactForm() {
    var form = utils.qs("[data-contact-form]");
    if (!form) {
      return;
    }

    var status = utils.qs("[data-form-status]", form);

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (status) {
        status.textContent =
          "Gràcies! Aquest formulari és una demostració i encara no envia missatges. Escriu-nos a hola@rusc.net.";
      }

      form.reset();
    });
  }

  setYear();
  initContactForm();
})(window);
