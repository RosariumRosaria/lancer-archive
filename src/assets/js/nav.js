(function () {
    const toggleBtn = document.querySelector("[data-dir-toggle]");
    if (!toggleBtn) {
        return;
    }

    const mobileQuery = window.matchMedia("(max-width: 900px)");

    function setNavState(isOpen) {
        document.body.classList.toggle("nav-open", isOpen);
        toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        toggleBtn.textContent = "DIR";
    }

    toggleBtn.addEventListener("click", () => {
        setNavState(!document.body.classList.contains("nav-open"));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setNavState(false);
        }
    });

    document.addEventListener("click", (event) => {
        if (!document.body.classList.contains("nav-open")) {
            return;
        }

        if (!event.target.closest(".sidebar") && !event.target.closest("[data-dir-toggle]")) {
            setNavState(false);
        }
    });

    if (mobileQuery && typeof mobileQuery.addEventListener === "function") {
        mobileQuery.addEventListener("change", (event) => {
            if (!event.matches) {
                setNavState(false);
            }
        });
    }
})();
