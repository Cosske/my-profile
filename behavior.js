"use strict";
const title = document.querySelector(".page-title");
const helloButton = document.querySelector(".shout-button");
const copyButton = document.querySelector(".copy-email");
const profileLink = document.querySelector(".email");
const status = document.querySelector(".copy-status");
let resetTimer;
function sayHello() {
  title.textContent = "Bienvenue sur mon profil !";
}
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profileLink.textContent.trim());
    copyButton.textContent = "Lien copié !";
    status.textContent = "Le lien du profil est dans ton presse-papiers.";
    clearTimeout(resetTimer);
    resetTimer = setTimeout(function () {
      copyButton.textContent = "Copier mon profil";
      status.textContent = "";
    }, 2000);
  } catch {
    status.textContent = "La copie a échoué. Tu peux sélectionner et copier le lien ci-dessus.";
  }
}
helloButton.addEventListener("click", sayHello);
copyButton.addEventListener("click", copyEmail);
