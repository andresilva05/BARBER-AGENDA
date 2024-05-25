// Seleciona todos os botões na seção especificada
const buttons = document.querySelectorAll(".button-section");
// Seleciona o modal
const modal = document.getElementById("pai-selecionar");

// Adiciona um evento de clique a cada botão para abrir o modal
buttons.forEach(button => {
  button.addEventListener("click", function () {
    modal.showModal();
  });
});

// Opcional: Adiciona um evento para fechar o modal clicando fora dele
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});
