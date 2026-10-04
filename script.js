"use strict";

// All content remains readable without JavaScript. This file only enhances navigation.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
const mobileNavigation = window.matchMedia("(max-width: 1200px)");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  navigation.classList.toggle("is-open", open);
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});

document.addEventListener("focusin", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});

mobileNavigation.addEventListener("change", () => setMenu(false));

if ("IntersectionObserver" in window) {
  const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
  );
  navLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) sectionObserver.observe(target);
  });
}
