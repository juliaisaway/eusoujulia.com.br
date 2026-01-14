(() => {
  const STORAGE_KEY = "theme";
  const THEMES = {
    light: "light",
    dark: "dark",
  };

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  if (!toggleSwitch) return;

  const root = document.documentElement;

  const setAriaState = (isChecked) => {
    toggleSwitch.setAttribute("aria-checked", String(isChecked));
  };

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const isDark = theme === THEMES.dark;
    toggleSwitch.checked = isDark;
    setAriaState(isDark);
  };

  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme) return storedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? THEMES.dark : THEMES.light;
  };

  // Inicialização
  applyTheme(getInitialTheme());

  // Interação do usuário
  toggleSwitch.addEventListener("change", (event) => {
    const theme = event.target.checked ? THEMES.dark : THEMES.light;
    applyTheme(theme);
  });
})();
