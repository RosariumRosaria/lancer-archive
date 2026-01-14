(function () {
    function getSession() {
        const clearanceRaw = localStorage.getItem("archive_clearance");
        const clearance = clearanceRaw === null ? null : Number(clearanceRaw);
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

    function isAuthenticated(session = getSession()) {
        return session.clearance !== null;
    }

    function applyHeaderBadge() {
        const session = getSession();

        const badgeEl = document.querySelector("[data-archive-session]");
        if (badgeEl) {
            if (!isAuthenticated(session)) {
                badgeEl.textContent = "SESSION: NONE";
            } else {
                badgeEl.textContent =
                    `SESSION: ACTIVE • CLEARANCE L${session.clearance}` +
                    (session.user ? " • " + session.user.toUpperCase() : "");
            }
        }

        // Optional logout control (only shown when authenticated)
        const logoutEl = document.querySelector("[data-archive-logout]");
        if (logoutEl) {
            logoutEl.style.display = isAuthenticated(session) ? "inline-flex" : "none";
        }
    }

    function logout({ redirectTo = "/login/" } = {}) {
        clearSession();
        applyHeaderBadge();
        window.location.href = redirectTo;
    }

    // Expose helpers for login page and redirect logic
    window.ArchiveAuth = {
        getSession,
        setSession,
        clearSession,
        applyHeaderBadge,
        isAuthenticated,
        logout,
    };

    document.addEventListener("DOMContentLoaded", () => {
        applyHeaderBadge();

        // Bind logout click handler if a control exists
        const logoutEl = document.querySelector("[data-archive-logout]");
        if (logoutEl) {
            logoutEl.addEventListener("click", (e) => {
                e.preventDefault();
                logout();
            });
        }
    });
})();
