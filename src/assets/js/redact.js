document.addEventListener("DOMContentLoaded", () => {
    const session = window.ArchiveAuth?.getSession?.();
    const clearance = Number.isFinite(session?.clearance) ? session.clearance : null;

    const decodeBase64Utf8 = (value) => {
        try {
            const bytes = Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
            return new TextDecoder("utf-8").decode(bytes);
        } catch (error) {
            return "";
        }
    };

    document.querySelectorAll("[data-redact][data-required-clearance]").forEach((el) => {
        const needed = Number(el.getAttribute("data-required-clearance"));

        if (clearance !== null && clearance >= needed) {
            const encoded = el.getAttribute("data-redact-text") || "";
            const textEl = el.querySelector(".redact-text");

            if (textEl && !textEl.textContent) {
                textEl.textContent = decodeBase64Utf8(encoded);
                textEl.removeAttribute("aria-hidden");
            }

            el.classList.add("is-cleared");
        }
    });
});
