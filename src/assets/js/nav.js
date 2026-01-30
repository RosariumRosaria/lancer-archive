(function () {
    const toggleBtn = document.querySelector("[data-dir-toggle]");
    if (!toggleBtn) {
        return;
    }

    function setNavState(isOpen) {
        document.body.classList.toggle("nav-open", isOpen);
    }

    toggleBtn.addEventListener("click", () => {
        setNavState(!document.body.classList.contains("nav-open"));
    });

    document.addEventListener("click", (event) => {
        if (
            document.body.classList.contains("nav-open") &&
            !event.target.closest(".sidebar, [data-dir-toggle]")
        ) {
            setNavState(false);
        }
    });

    const mobileQuery = window.matchMedia("(max-width: 900px)");
    mobileQuery.addEventListener("change", () => setNavState(false));
})();
