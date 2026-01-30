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
        const isAuthed = isAuthenticated(session);

        const badgeEl = document.querySelector("[data-archive-session]");
        const authBtn = document.querySelector("[data-archive-auth-toggle]");
        const clearanceBtn = document.querySelector("[data-archive-clearance]");

        if (clearanceBtn) {
            clearanceBtn.textContent = isAuthed
                ? `CL ${session.clearance}`
                : "CL 0";
        }

        if (authBtn) {
            authBtn.textContent = isAuthed ? "LOG OUT" : "LOG IN";
        }


        function handleAuthToggle() {
            const session = getSession();

            if (isAuthenticated(session)) {
                clearSession();
                applyHeaderBadge();
                window.location.href = "/login/";
            } else {
                window.location.href = "/login/";
            }
        }

        window.ArchiveAuth = {
            getSession,
            setSession,
            clearSession,
            isAuthenticated,
            applyHeaderBadge,
        };

        document.addEventListener("DOMContentLoaded", () => {
            applyHeaderBadge();

            const authBtn = document.querySelector("[data-archive-auth-toggle]");
            if (authBtn) {
                authBtn.addEventListener("click", handleAuthToggle);
            }
        });
    }) ();
