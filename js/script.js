
const CONFIG = {
  whatsapp: "5511950325870",
  instagram: "https://www.instagram.com/natyacompanhante?rpxt=MTd4czQ1bmJlM3plcw==", 
  email: "natyacompanhante24@gmail.com"
};

const mensagemWhatsApp = "Olá! Encontrei seu site e gostaria de saber mais sobre o acompanhamento de idosos por hora.";

function configurarContatos() {
  const numero = CONFIG.whatsapp.replace(/\D/g, "");
  const linkWhatsApp = numero
    ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagemWhatsApp)}`
    : "#";

  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.href = linkWhatsApp;
    if (linkWhatsApp === "#") {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Configure o número do WhatsApp no arquivo js/script.js antes de publicar o site.");
      });
    }
  });

  document.querySelectorAll(".instagram-link").forEach((link) => {
    link.href = CONFIG.instagram;
    link.addEventListener("click", (event) => {
      if (CONFIG.instagram.includes("SEU_PERFIL")) {
        event.preventDefault();
        alert("Configure o perfil do Instagram no arquivo js/script.js antes de publicar o site.");
      }
    });
  });

  document.querySelectorAll(".email-link").forEach((link) => {
    link.href = `mailto:${CONFIG.email}`;
    link.addEventListener("click", (event) => {
      if (CONFIG.email.includes("exemplo.com")) {
        event.preventDefault();
        alert("Configure o e-mail no arquivo js/script.js antes de publicar o site.");
      }
    });
  });
}

function configurarMenu() {
  const toggle = document.querySelector("#menuToggle");
  const nav = document.querySelector("#mainNav");

  toggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(aberto));
    toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

document.querySelector("#currentYear").textContent = new Date().getFullYear();
configurarContatos();
configurarMenu();
