(() => {
  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "pt-BR";

  const blocks = document.querySelectorAll("[data-lang]");
  const toggleButton = document.getElementById("language-toggle");

  if (!blocks.length || !toggleButton) return;

  const getOppositeLang = (lang) => (lang === "pt-BR" ? "en" : "pt-BR");

  const getButtonLabel = (lang) => (lang === "pt-BR" ? "EN" : "PT");

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;

    blocks.forEach((block) => {
      block.hidden = block.dataset.lang !== lang;
    });

    toggleButton.textContent = getButtonLabel(lang);
    toggleButton.setAttribute(
      "aria-label",
      `Mudar idioma para ${getOppositeLang(lang)}`
    );

    localStorage.setItem(STORAGE_KEY, lang);
  };

  toggleButton.addEventListener("click", () => {
    const currentLang = document.documentElement.lang || DEFAULT_LANG;

    setLanguage(getOppositeLang(currentLang));
  });

  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  setLanguage(savedLang);
})();
