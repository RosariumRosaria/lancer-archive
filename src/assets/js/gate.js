document.addEventListener("DOMContentLoaded", () => {
    const required = Number(document.body.dataset.requiredClearance || "0");
    const redactedUrl = document.body.dataset.redactedUrl || "";
    const fullUrl = document.body.dataset.fullUrl || "";

    // If no URLs are defined, do nothing
    if (!redactedUrl && !fullUrl) return;

    const session = window.ArchiveAuth?.getSession?.();
    const clearance = session?.clearance;

    const isLoggedIn = clearance === 0 || Boolean(clearance);
    const hasClearance = isLoggedIn && clearance >= required;

    const path = window.location.pathname;
    const onFullPage = fullUrl && path === fullUrl;
    const onRedactedPage = redactedUrl && path === redactedUrl;

    if (onFullPage && (!isLoggedIn || clearance < required)) {
        window.location.replace(redactedUrl || "/login/");
        return;
    }


    if (onRedactedPage && fullUrl && fullUrl !== redactedUrl && hasClearance) {
        window.location.replace(fullUrl);
        return;
    }

    // Optional: if required > 0 and not logged in, you can redirect to login
    // (Use this only if you want “hard” gating everywhere.)
    // if (required > 0 && !isLoggedIn) {
    //   window.location.replace(`/login/?next=${encodeURIComponent(path)}`);
    // }
});
