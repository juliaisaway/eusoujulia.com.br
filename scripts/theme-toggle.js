class ThemeToggle extends HTMLElement {
  static STORAGE_KEY = "theme";
  static THEMES = {
    light: "light",
    dark: "dark",
  };

  connectedCallback() {
    this.render();
    this.cacheElements();
    this.initTheme();
    this.bindEvents();
  }

  render() {
    this.innerHTML = `
      <div class="theme-switch-wrapper">
        <label class="theme-switch">
          <input
            type="checkbox"
            role="switch"
            aria-label="Alternar tema claro e escuro"
          />
          <div class="slider round"></div>
        </label>
      </div>
    `;
  }

  cacheElements() {
    this.checkbox = this.querySelector('input[type="checkbox"]');
  }

  bindEvents() {
    this.checkbox.addEventListener("change", () => {
      const theme = this.checkbox.checked
        ? ThemeToggle.THEMES.dark
        : ThemeToggle.THEMES.light;

      this.applyTheme(theme);

      this.dispatchEvent(
        new CustomEvent("theme-change", {
          detail: { theme },
          bubbles: true,
        })
      );
    });
  }

  getInitialTheme() {
    const stored = localStorage.getItem(ThemeToggle.STORAGE_KEY);
    if (stored) return stored;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? ThemeToggle.THEMES.dark : ThemeToggle.THEMES.light;
  }

  applyTheme(theme) {
    const isDark = theme === ThemeToggle.THEMES.dark;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(ThemeToggle.STORAGE_KEY, theme);

    this.checkbox.checked = isDark;
    this.checkbox.setAttribute("aria-checked", String(isDark));
  }

  initTheme() {
    this.applyTheme(this.getInitialTheme());
  }
}

customElements.define("theme-toggle", ThemeToggle);
