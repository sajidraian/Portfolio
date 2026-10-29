const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent(
      "Portfolio contact from " + d.get("name"),
    );
    const body = encodeURIComponent(
      "Hi Sajid,\\n\\n" +
        d.get("message") +
        "\\n\\nFrom: " +
        d.get("name") +
        " (" +
        d.get("email") +
        ")",
    );
    window.location.href =
      "mailto:raian.12511010.cse@gmail.com?subject=" +
      subject +
      "&body=" +
      body;
  });
}
/* =====================================
   DARK MODE TOGGLE
===================================== */
/* =====================================
   DARK MODE TOGGLE
===================================== */

(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  const storageKey = "sajid-portfolio-theme";

  function getInitialTheme() {
    try {
      const savedTheme = localStorage.getItem(storageKey);

      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
    } catch (error) {
      // Continue with system preference.
    }

    return window.matchMedia?.("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme, save = true) {
    root.dataset.theme = theme;

    const isDark = theme === "dark";

    if (icon) {
      icon.textContent = isDark ? "☀️" : "🌙";
    }

    if (toggle) {
      const label = isDark
        ? "Switch to light mode"
        : "Switch to dark mode";

      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
    }

    if (save) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Theme still works without localStorage.
      }
    }
  }

  // Initialize theme even if the toggle button is missing.
  applyTheme(getInitialTheme(), false);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = root.dataset.theme || "light";

      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }
})();