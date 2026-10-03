// WhatsApp number (international format, no + or spaces)
const WHATSAPP = "21655722905";

function waLink(message) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
}

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Package buttons open WhatsApp with a ready-made message
document.querySelectorAll(".pick").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pack = btn.dataset.pack;
    const msg = "Hello Beki, I'm interested in the " + pack + ". Can we talk about it?";
    window.open(waLink(msg), "_blank", "noopener");
  });
});

// Hero WhatsApp button
const waHero = document.getElementById("waHero");
waHero.href = waLink("Hello Beki, I found your website and I'd like to talk about your services.");
waHero.target = "_blank";
waHero.rel = "noopener";

// Highlight the nav link of the section on screen
const links = document.querySelectorAll("nav a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
