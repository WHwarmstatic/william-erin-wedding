const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const form = document.querySelector("#rsvp-form");
const status = document.querySelector("#rsvp-status");
if (form && status) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const existing = JSON.parse(localStorage.getItem("we-rsvps") || "[]");
    existing.push({ ...data, submittedAt: new Date().toISOString() });
    localStorage.setItem("we-rsvps", JSON.stringify(existing));
    status.hidden = false;
    status.textContent = `Thank you, ${data.name}. Your RSVP for ${data.attending} has been saved on this device. Connect a form backend (Tally, Google Form, or email) before sending real invitations.`;
    form.reset();
  });
}
