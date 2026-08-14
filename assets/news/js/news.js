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
      sections[i].hidden =
        sections[i].getAttribute("data-lang") !== language;
    }

    var buttons = document.querySelectorAll("[data-language]");

    for (var j = 0; j < buttons.length; j += 1) {
      var active =
        buttons[j].getAttribute("data-language") === language;

      buttons[j].classList.toggle("active", active);
      buttons[j].setAttribute(
        "aria-pressed",
        active ? "true" : "false"
      );
    }

    saveLanguage(language);
  }

  /*
   * Individual news-card language switching.
   *
   * Unlike the global language switcher, a card-level switch
   * changes only that particular card.
   */
  function applyCardLanguage(card, language) {
    if (!card || !SUPPORTED[language]) {
      return;
    }

    var sections = card.querySelectorAll("[data-lang]");

    for (var i = 0; i < sections.length; i += 1) {
      sections[i].hidden =
        sections[i].getAttribute("data-lang") !== language;
    }

    var buttons = card.querySelectorAll("[data-card-language]");

    for (var j = 0; j < buttons.length; j += 1) {
      var buttonLanguage =
        buttons[j].getAttribute("data-card-language");

      var active = buttonLanguage === language;

      buttons[j].classList.toggle("active", active);
      buttons[j].setAttribute(
        "aria-pressed",
        active ? "true" : "false"
      );

      /*
       * Keep the requested lightweight UX:
       * Hindi state shows "See in English"
       * English state shows "हिंदी में देखें"
       */
      if (buttonLanguage === "hi") {
        buttonLanguage = language === "hi"
          ? "See in English"
          : "हिंदी में देखें";

        buttons[j].textContent = "🌐 " + buttonLanguage;
      }
    }
  }

  function bindCardSwitchers() {
    var cards = document.querySelectorAll(".news-card");

    for (var i = 0; i < cards.length; i += 1) {
      (function (card) {
        var buttons =
          card.querySelectorAll("[data-card-language]");

        /*
         * Initial card state follows the persistent site preference.
         */
        applyCardLanguage(card, readLanguage());

        for (var j = 0; j < buttons.length; j += 1) {
          buttons[j].addEventListener("click", function () {
            var language =
              this.getAttribute("data-card-language");

            /*
             * Each card changes independently.
             */
            applyCardLanguage(card, language);

            /*
             * Persist the user's choice so future pages/articles
             * open in the selected language.
             */
            saveLanguage(language);
          });
        }
      })(cards[i]);
    }
  }

  function bindSwitcher() {
    var buttons = document.querySelectorAll("[data-language]");

    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function () {
        var language =
          this.getAttribute("data-language");

        applyLanguage(language);

        /*
         * Re-apply the same preference to individual cards
         * without changing their independent switching behavior.
         */
        var cards = document.querySelectorAll(".news-card");

        for (var j = 0; j < cards.length; j += 1) {
          applyCardLanguage(cards[j], language);
        }
      });
    }
  }

  function init() {
    document.documentElement.classList.add("news-js-ready");

    bindSwitcher();
    bindCardSwitchers();

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
