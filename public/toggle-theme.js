const primaryColorScheme = "";
const currentValue = localStorage.getItem("theme");
const getCurrentTheme = () => {
  if (currentValue) return currentValue;

  if (primaryColorScheme) return primaryColorScheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

let themeValue = getCurrentTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);
  document.querySelector("#btn-theme")?.setAttribute("aria-label", themeValue);
  document.querySelector("#btn-theme-mobile")?.setAttribute("aria-label", themeValue);

  const body = document.body;

  if (body) {
    const computedStyle = window.getComputedStyle(body);

    const bgColor = computedStyle.backgroundColor;

    document.querySelector("meta[name='theme-color']")?.setAttribute("content", bgColor);
  }
}

reflectPreference();

window.onload = () => {
  function setTheme() {
    reflectPreference();

    document.querySelector("#btn-theme")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";

      setPreference();
    });

    document.querySelector("#btn-theme-mobile")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";

      setPreference();
    });
  }

  setTheme();

  document.addEventListener("astro:after-swap", () => {
    setTheme();
  });
};

document.addEventListener("astro:before-swap", () => {
  const bgColor = window.document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");

  event.newDocument.querySelector("meta[name='theme-color']")?.setAttribute("content", bgColor);
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
