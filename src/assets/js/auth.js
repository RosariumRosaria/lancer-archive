(function () {
    function getSession() {
        const clearance = Number(localStorage.getItem("archive_clearance"));
        const user = localStorage.getItem("archive_user");
        return {
            user: user || null,
            clearance: Number.isFinite(clearance) ? clearance : null,
        };
    }

    function setSession(user, clearance) {
        localStorage.setItem("archive_user", user);
        localStorage.setItem("archive_clearance", String(clearance));
    }

    function clearSession() {
        localStorage.removeItem("archive_user");
        localStorage.removeItem("archive_clearance");
    }

    function applyHeaderBadge() {
        const session = getSession();
        const el = document.querySelector("[data-archive-session]");
        if (!el) return;

        if (!session.clearance && session.clearance !== 0) {
            el.textContent = "SESSION: NONE";
            return;
        }

        el.textContent = `SESSION: ACTIVE • CLEARANCE L${session.clearance}${session.user ? " • " + session.user.toUpperCase() : ""}`;
    }

    // Expose helpers for login page and redirect logic
    window.ArchiveAuth = {
        getSession,
        setSession,
        clearSession,
        applyHeaderBadge,
    };

    // Apply badge on every page load
    document.addEventListener("DOMContentLoaded", applyHeaderBadge);
})();
