document.addEventListener("DOMContentLoaded", () => {
    const required = Number(document.body.dataset.requiredClearance || "0");
    const deniedUrl = "/access-denied/";
    const session = window.ArchiveAuth?.getSession?.();
    const clearance = session?.clearance;

    const isLoggedIn = clearance === 0 || Boolean(clearance);
    const hasClearance = isLoggedIn && clearance >= required;

    if (required > 0 && !isLoggedIn) {
        window.location.replace("/login/");
        return;
    }

    if (required > 0 && !hasClearance) {
        window.location.replace(deniedUrl);
        return;
    }

    document.body.classList.remove("gate-pending");
});
