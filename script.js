  // Seleciona todos os botões na seção especificada
  const buttons = document.querySelectorAll(".button-section");
  // Seleciona o modal
  const modal = document.getElementById("dialog-servicos");
  // Seleciona o botão de fechar dentro do modal
  const closeX = document.getElementById("btn-close");
  // Seleciona o botão de voltar
  const voltar = document.getElementById("arrow");

  // Adiciona um evento de clique a cada botão para abrir o modal
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      modal.showModal();
    });
  });

  // Adiciona um evento para fechar o modal ao clicar no botão de fechar
  closeX.addEventListener("click", function () {
    modal.close();
  });

  // Adiciona um evento para fechar o modal clicando fora dele
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });

  // Seleciona todos os elementos com a classe .COMBO-CLICK
  const combo = document.getElementById("COMBO-CLICK");
  // Seleciona todos os elementos com a classe .ComBos
  const divCombos = document.querySelectorAll(".ComBos");
  // Seleciona todos os elementos com a classe .click-combos
  const novoConteudo = document.querySelectorAll(".click-combos");

  const cabelo = document.getElementById("cabelo-click");

  const conteudoCabelo = document.querySelectorAll(".click-cabelo")

  // Adiciona um listener de clique ao elemento combo
  combo.addEventListener("click", () => {
    console.log("Combo clicado");

    // Esconde todos os elementos em divCombos
    divCombos.forEach((element) => {
      element.classList.add("hidden");
    });

    // Mostra todos os elementos em novoConteudo
    novoConteudo.forEach((element) => {
      element.classList.remove("hidden");
    });
  });

    // Adiciona um evento para rolar para a div 'combo' ao clicar no botão de voltar
    voltar.addEventListener("click", () => {
      divCombos.forEach((element) => {
        element.classList.remove("hidden");
      });
  
      // Mostra todos os elementos em novoConteudo
      novoConteudo.forEach((element) => {
        element.classList.add("hidden");
      });
      
    });
  
  // Adiciona um listener de clique ao elemento combo
  cabelo.addEventListener("click", () => {

    // Esconde todos os elementos em divCombos
    divCombos.forEach((element) => {
      element.classList.add("hidden");


      conteudoCabelo.forEach((element) => {
        element.classList.remove("hidden");
      })
    })});


