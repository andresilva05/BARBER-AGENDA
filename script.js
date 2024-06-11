// Seleciona todos os botões na seção especificada com a classe .button-section
const buttons = document.querySelectorAll(".button-section");

// Seleciona o modal com o ID dialog-servicos
const modal = document.getElementById("dialog-servicos");

// Seleciona o botão de fechar dentro do modal com o ID btn-close
const closeX = document.getElementById("btn-close");

// Seleciona os botões de voltar com os IDs voltar-cortes e voltar-combos
const voltarCortes = document.getElementById("voltar-cortes");
const voltarCombos = document.getElementById("voltar-combos");

// Adiciona um evento de clique a cada botão para abrir o modal
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    modal.showModal();
  });
});

// Adiciona um evento para fechar o modal ao clicar no botão de fechar (X)
closeX.addEventListener("click", function () {
  modal.close();
});

// Adiciona um evento para fechar o modal ao clicar fora dele
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});

// Seleciona o elemento com o ID servico-combo
const servicoCombo = document.getElementById("servico-combo");

// Seleciona o elemento com o ID servico-cabelo
const servicoCabelo = document.getElementById("servico-cabelo");

// Seleciona todos os elementos com a classe .itens-servico-cabelo
const itensServicoCabelo = document.querySelectorAll(".itens-servico-cabelo");

// Seleciona todos os elementos com a classe .function-combo
const itemServico = document.querySelectorAll(".function-combo");

// Seleciona todos os elementos com a classe .click-combos
const itensServicosCombo = document.querySelectorAll(".click-combos");

// Adiciona um listener de clique ao elemento servicoCombo para mostrar itens de combo
servicoCombo.addEventListener("click", () => {
  console.log("Combo clicado");

  // Esconde todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.add("hidden");
  });

  // Mostra todos os elementos com a classe .click-combos
  itensServicosCombo.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Mostra o botão de voltar para combos
  voltarCombos.classList.remove("hidden");
});

// Adiciona um evento para mostrar os elementos de combo ao clicar no botão de voltar
voltarCombos.addEventListener("click", () => {
  // Mostra todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Esconde todos os elementos com a classe .click-combos
  itensServicosCombo.forEach((element) => {
    element.classList.add("hidden");
  });

  // Esconde o botão de voltar para combos
  voltarCombos.classList.add("hidden");
});

// Adiciona um listener de clique ao elemento servicoCabelo para mostrar itens de cabelo
servicoCabelo.addEventListener("click", () => {
  // Esconde todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.add("hidden");
  });

  // Mostra todos os elementos com a classe .itens-servico-cabelo
  itensServicoCabelo.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Mostra o botão de voltar para cortes
  voltarCortes.classList.remove("hidden");
});

// Adiciona um evento para mostrar os elementos de cabelo ao clicar no botão de voltar
voltarCortes.addEventListener("click", () => {
  // Mostra todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Esconde todos os elementos com a classe .itens-servico-cabelo
  itensServicoCabelo.forEach((element) => {
    element.classList.add("hidden");
  });

  // Esconde o botão de voltar para cortes
  voltarCortes.classList.add("hidden");
});
