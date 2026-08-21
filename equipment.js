(function () {
  "use strict";

  const header = document.getElementById("site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("primary-nav");
  const navLinks = Array.from(document.querySelectorAll(".primary-nav a"));
  const equipmentLinks = Array.from(document.querySelectorAll(".equipment-index a"));
  const equipmentSections = Array.from(document.querySelectorAll(".equipment-section[id]"));

  function updateHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
  }

  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(willOpen));
      navigation.classList.toggle("open", willOpen);
      document.body.classList.toggle("menu-open", willOpen);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          equipmentLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-36% 0px -54%", threshold: 0 }
    );

    equipmentSections.forEach(function (section) {
      sectionObserver.observe(section);
    });

    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (element) {
      element.classList.add("in-view");
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
})();
