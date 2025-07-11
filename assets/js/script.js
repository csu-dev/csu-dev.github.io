// script.js is intentionally left blank.function copiarEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email);

  const nota = document.getElementById("notificacao");
  nota.style.display = "block";

  setTimeout(() => {
    nota.style.display = "none";
  }, 2000);
}
