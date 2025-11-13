var menuIcon = document.querySelector('.menu-ícon');
var ul= document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{

    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-ícon img').src = 'img//menubranco.png';
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-ícon img').src = 'img//x.png';
    }

})

// Espera o DOM carregar antes de rodar
document.addEventListener("DOMContentLoaded", function () {
  
  const menuIcon = document.querySelector(".menu-ícon");
  const ul = document.querySelector(".ul");
  const dropdown = document.querySelector(".dropdown");

  // --- Botão do menu (mobile) ---
  if (menuIcon && ul) {
    menuIcon.addEventListener("click", () => {
      ul.classList.toggle("ativo");

      // Troca o ícone do menu
      const iconImg = menuIcon.querySelector("img");
      if (ul.classList.contains("ativo")) {
        iconImg.src = "../img/x.png";
      } else {
        iconImg.src = "../img/menubranco.png";
      }
    });
  }

  // --- Submenu Personagens ---
  if (dropdown) {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth < 900) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }
});

// --- Função para exibir personagem individual (opcional) ---
function mostrarPersonagem(id) {
  document.querySelectorAll(".personagem").forEach(div => div.classList.remove("ativo"));
  document.getElementById(id).classList.add("ativo");
}