(() => {
  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "pt-BR";
  const LANGS = ["pt-BR", "en"];

  const toggleButton = document.getElementById("language-toggle");
  const targets = {
    intro: document.getElementById("intro-content"),
    who: document.getElementById("who-content"),
    picture: document.getElementById("picture-content"),
    work: document.getElementById("work-content"),
    contact: document.getElementById("contact-content"),
  };

  if (!toggleButton || Object.values(targets).some((target) => !target)) return;

  const getOppositeLang = (lang) => (lang === "pt-BR" ? "en" : "pt-BR");
  const getButtonLabel = (lang) => (lang === "pt-BR" ? "EN" : "PT");

  const escapeHtml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const renderInline = (value) =>
    escapeHtml(value)
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
      .replace(/\*([^*]+)\*/g, "<i>$1</i>");

  const renderImage = (value) => {
    const match = value.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);

    if (!match) return "";

    const [, alt, src] = match;

    return `<img src="${escapeHtml(src)}" loading="lazy" alt="${escapeHtml(
      alt
    )}" />`;
  };

  const renderBlock = (block) =>
    block
      .trim()
      .split(/\n{2,}/)
      .map((chunk) => {
        const value = chunk.trim();

        if (value.startsWith("# ")) {
          return `<h1>${renderInline(value.replace("# ", ""))}</h1>`;
        }

        if (value.startsWith("## ")) {
          return `<h2>${renderInline(value.replace("## ", ""))}</h2>`;
        }

        if (value.startsWith("![")) {
          return renderImage(value);
        }

        return `<p>${renderInline(value)}</p>`;
      })
      .join("");

  const splitPictureFromProfile = (block) => {
    const lines = block.trim().split("\n");
    const imageIndex = lines.findIndex((line) => line.trim().startsWith("!["));

    if (imageIndex === -1) {
      return { text: block, image: "" };
    }

    return {
      text: lines.slice(0, imageIndex).join("\n"),
      image: lines.slice(imageIndex).join("\n"),
    };
  };

  const renderPage = (markdown) => {
    const [intro = "", profile = "", work = "", contact = ""] =
      markdown.split(/\n---\n/);
    const profileContent = splitPictureFromProfile(profile);

    targets.intro.innerHTML = renderBlock(intro);
    targets.who.innerHTML = renderBlock(profileContent.text);
    targets.picture.innerHTML = renderBlock(profileContent.image);
    targets.work.innerHTML = renderBlock(work);
    targets.contact.innerHTML = renderBlock(contact);
  };

  const setLanguage = async (lang) => {
    const nextLang = LANGS.includes(lang) ? lang : DEFAULT_LANG;

    document.documentElement.lang = nextLang;
    toggleButton.disabled = true;

    try {
      const response = await fetch(`content/${nextLang}.md`);

      if (!response.ok) {
        throw new Error(`Content not found: ${nextLang}`);
      }

      renderPage(await response.text());

      toggleButton.textContent = getButtonLabel(nextLang);
      toggleButton.setAttribute(
        "aria-label",
        `Mudar idioma para ${getOppositeLang(nextLang)}`
      );

      localStorage.setItem(STORAGE_KEY, nextLang);
    } catch (error) {
      targets.intro.innerHTML =
        "<p>Não foi possível carregar o conteúdo do site.</p>";
      console.error(error);
    } finally {
      toggleButton.disabled = false;
    }
  };

  toggleButton.addEventListener("click", () => {
    const currentLang = document.documentElement.lang || DEFAULT_LANG;
    setLanguage(getOppositeLang(currentLang));
  });

  setLanguage(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
})();
