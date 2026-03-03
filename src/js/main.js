function initReveal() {
  ScrollReveal({ reset: true });
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: false,
  });

  sr.reveal(".about__data", { origin: "left" });
  sr.reveal(".about__img", { origin: "right" });
  sr.reveal(".summary__about", { origin: "bottom" });
  sr.reveal(".avatar__experiences", { origin: "left" });
  sr.reveal(".experience__title", { origin: "top" });
  sr.reveal(".experience__content", { origin: "right" });
  sr.reveal(".service__about__1", { origin: "left" });
  sr.reveal(".service__about__2", { origin: "right" });
}

document.addEventListener("DOMContentLoaded", initReveal);
document.addEventListener("astro:after-swap", initReveal);
