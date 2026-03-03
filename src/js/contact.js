const publicContactKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;

function initContact() {
  window.addEventListener("DOMContentLoaded", () => {
    emailjs.init({
      publicKey: publicContactKey,
    });

    const form = document.getElementById("contact-form");
    const contactMessage = document.getElementById("contact-message");

    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm(serviceId, templateId, form)
        .then(() => {
          contactMessage.textContent = "Message sent successfully!";
          contactMessage.classList.remove("text-red-500");
          contactMessage.classList.add("text-green-500");
          form.reset();
        })
        .catch(error => {
          contactMessage.textContent = "Failed to send message!";
          contactMessage.classList.remove("text-green-500");
          contactMessage.classList.add("text-red-500");
          // eslint-disable-next-line no-console
          console.error(error);
        });
    });
  });
}

document.addEventListener("DOMContentLoaded", initContact);
document.addEventListener("astro:after-swap", initContact);
