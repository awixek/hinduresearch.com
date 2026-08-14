(function () {
  "use strict";

  var STORAGE_KEY = "hrp-news-language";
  var DEFAULT_LANGUAGE = "en";
  var SUPPORTED = { en: true, hi: true };

  function readLanguage() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED[value] ? value : DEFAULT_LANGUAGE;
    } catch (error) {
      return DEFAULT_LANGUAGE;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // Private browsing / disabled storage should never break page behavior.
    }
  }

  function applyLanguage(language) {
    language = SUPPORTED[language] ? language : DEFAULT_LANGUAGE;
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-news-language", language);

    var sections = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < sections.length; i += 1) {
      sections[i].hidden = sections[i].getAttribute("data-lang") !== language;
    }

    var buttons = document.querySelectorAll("[data-language]");
    for (var j = 0; j < buttons.length; j += 1) {
      var active = buttons[j].getAttribute("data-language") === language;
      buttons[j].classList.toggle("active", active);
      buttons[j].setAttribute("aria-pressed", active ? "true" : "false");
    }

    saveLanguage(language);
  }

  function bindSwitcher() {
    var buttons = document.querySelectorAll("[data-language]");
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function () {
        applyLanguage(this.getAttribute("data-language"));
      });
    }
  }

  function init() {
    document.documentElement.classList.add("news-js-ready");
    bindSwitcher();
    applyLanguage(readLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.HinduResearchNewsLanguage = {
    set: applyLanguage,
    get: readLanguage,
    storageKey: STORAGE_KEY
  };
}());
