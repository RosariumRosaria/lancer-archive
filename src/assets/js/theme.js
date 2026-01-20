(function () {
    const storageKey = "archive_theme";
    const toggles = document.querySelectorAll("[data-theme-toggle]");

    function applyTheme(theme) {
        if (!theme) return;
        document.body.setAttribute("data-theme", theme);
        toggles.forEach((btn) => {
            btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        });

        const logo = document.querySelector("[data-theme-logo]");
        if (logo) {
            const lightSrc = logo.getAttribute("data-logo-light");
            const darkSrc = logo.getAttribute("data-logo-dark");
            logo.src = theme === "dark" ? darkSrc : lightSrc;
        }
    }

    function getCurrentTheme() {
        return document.body.getAttribute("data-theme") || "default";
    }

    function toggleTheme() {
        const current = getCurrentTheme();
        const next = current === "dark" ? "default" : "dark";
        localStorage.setItem(storageKey, next);
        applyTheme(next);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            applyTheme(saved);
        } else {
            applyTheme(getCurrentTheme());
        }

        toggles.forEach((btn) => {
            btn.addEventListener("click", toggleTheme);
        });
    });
})();
