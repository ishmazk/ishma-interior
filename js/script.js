/* INTERIOR BANYUWANGI — script.js
   Minimal vanilla JS: mobile nav, footer year.
   Site works fully without JS; this only enhances UX. */
(function () {
  "use strict";

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");
  var closeBtn = document.querySelector(".nav-close");
  var backdrop = document.querySelector(".nav-backdrop");

  function openMenu() {
    if (!menu) return;
    menu.classList.add("open");
    backdrop.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    var firstLink = menu.querySelector("a");
    if (firstLink) firstLink.focus();
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.contains("open") ? closeMenu() : openMenu();
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
})();
