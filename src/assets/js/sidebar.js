(() => {
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const scrim = document.querySelector("[data-sidebar-scrim]");

  if (!toggle || !scrim) {
    return;
  }

  const closeSidebar = () => {
    document.body.classList.remove("sidebar-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  const toggleSidebar = () => {
    const isOpen = document.body.classList.contains("sidebar-open");
    if (isOpen) {
      closeSidebar();
      return;
    }
    openSidebar();
  };

  toggle.addEventListener("click", toggleSidebar);
  scrim.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
})();
