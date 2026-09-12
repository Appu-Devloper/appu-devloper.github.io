const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
      navToggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav")) closeMenu();
  });
  window.matchMedia("(min-width: 721px)").addEventListener("change", closeMenu);
}

// Content remains visible when JavaScript is disabled.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
document.querySelectorAll(".cert-carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  if (!track || !prev || !next) return;
  const updateButtons = () => {
    prev.disabled = track.scrollLeft <= 1;
    next.disabled =
      track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
  };
  const move = (direction) =>
    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
});
