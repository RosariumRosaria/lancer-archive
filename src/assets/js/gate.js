document.addEventListener("DOMContentLoaded", () => {
    const required = Number(document.body.dataset.requiredClearance || "0");
    const deniedUrl = "/access-denied/";
    const clearance = window.ArchiveAuth?.getSession?.()?.clearance;

    const isLoggedIn = clearance != null;

    if (required > 0 && !isLoggedIn) {
        window.location.replace("/login/");
        return;
    }

    if (required > clearance) {
        window.location.replace(deniedUrl);
        return;
    }

    document.body.classList.remove("gate-pending");
});
