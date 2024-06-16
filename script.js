// Seleciona todos os botões na seção especificada com a classe .button-section
const buttons = document.querySelectorAll(".button-section");

// Seleciona o modal com o ID dialog-servicos
const modal = document.getElementById("dialog-servicos");

// Seleciona o botão de fechar dentro do modal com o ID btn-close
const closeX = document.getElementById("btn-close");

// Seleciona os botões de voltar com os IDs voltar-cortes, voltar-combos, voltar-barba e voltar-sobrancelha
const voltarCortes = document.getElementById("voltar-cortes");
const voltarCombos = document.getElementById("voltar-combos");
const voltarBarba = document.getElementById("voltar-barba");
const voltarSobrancelha = document.getElementById("voltar-sobrancelha");
const voltarServicoCorte = document.getElementById("voltar-servico-cortes")

// Adiciona um evento de clique a cada botão para abrir o modal
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    modal.showModal(); // Abre o modal
  });
});

// Adiciona um evento para fechar o modal ao clicar no botão de fechar (X)
closeX.addEventListener("click", function () {
  modal.close(); // Fecha o modal
});

// Adiciona um evento para fechar o modal ao clicar fora dele
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close(); // Fecha o modal se o clique for fora do conteúdo do modal
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

// Seleciona o elemento com o ID servico-barba
const servicoBarba = document.getElementById("servico-barba");

// Seleciona todos os elementos com a classe .filho-click-barba
const itensServicosBarba = document.querySelectorAll(".filho-click-barba");

// Seleciona o elemento com o ID servico-sobrancelha
const servicoSobrancelha = document.getElementById("servico-sobrancelha");

// Seleciona todos os elementos com a classe .filho-click-sobrancelha
const itensServicosSobrancelha = document.querySelectorAll(".filho-click-sobrancelha");

// Seleciona o elemento com o ID 'click-corteEbarba'
const clickCorteBarba = document.getElementById("click-corteEbarba");

// Seleciona todos os elementos com a classe 'pai-left-livro'
const guiaServicosLeft = document.querySelectorAll(".pai-left-livro");

// Seleciona o elemento com o ID 'left-filho-click-corte'
const newGuiaServicos = document.getElementById("left-filho-click-corte");

const newServicoCorte = document.querySelectorAll(".newServicosCorte")

// Adiciona um listener de clique ao elemento 'clickCorteBarba'
clickCorteBarba.addEventListener("click", () => {
  console.log("Corte + barba clicado");

  // Esconde todos os elementos com a classe 'pai-left-livro'
  guiaServicosLeft.forEach((element) => {
    element.classList.add("hidden");
  });

  // Verifica se 'newGuiaServicos' existe e, se sim, remove a classe 'hidden'
  if (newGuiaServicos) {
    newGuiaServicos.classList.remove("hidden");
  }
  itensServicosCombo.forEach((element) => {
    element.classList.add("hidden");
  })
  voltarServicoCorte.classList.remove("hidden");

  newServicoCorte.forEach((element) => {
    element.classList.remove("hidden");
  })
});
voltarServicoCorte.addEventListener("click", () => {
  // Mostra todos os elementos com a classe .function-combo
  itensServicosCombo.forEach((element) => {
    element.classList.remove("hidden");
  })
  newServicoCorte.forEach((element) =>{
    element.classList.add("hidden");
  })

  guiaServicosLeft.forEach((element) => {
    element.classList.remove("hidden");
  });
  if (newGuiaServicos) {
    newGuiaServicos.classList.add("hidden");
  }
});


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

// Adiciona um listener de clique ao elemento servicoBarba para mostrar itens de barba
servicoBarba.addEventListener("click", () => {
  console.log("Barba clicado");

  // Esconde todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.add("hidden");
  });

  // Mostra todos os elementos com a classe .filho-click-barba
  itensServicosBarba.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Mostra o botão de voltar para barba
  voltarBarba.classList.remove("hidden");
});

// Adiciona um evento para mostrar os elementos de barba ao clicar no botão de voltar
voltarBarba.addEventListener("click", () => {
  // Mostra todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Esconde todos os elementos com a classe .filho-click-barba
  itensServicosBarba.forEach((element) => {
    element.classList.add("hidden");
  });

  // Esconde o botão de voltar para barba
  voltarBarba.classList.add("hidden");
});

// Adiciona um listener de clique ao elemento servicoSobrancelha para mostrar itens de sobrancelha
servicoSobrancelha.addEventListener("click", () => {
  console.log("Sobrancelha clicado");

  // Esconde todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.add("hidden");
  });

  // Mostra todos os elementos com a classe .filho-click-sobrancelha
  itensServicosSobrancelha.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Mostra o botão de voltar para sobrancelha
  voltarSobrancelha.classList.remove("hidden");
});

// Adiciona um evento para mostrar os elementos de sobrancelha ao clicar no botão de voltar
voltarSobrancelha.addEventListener("click", () => {
  // Mostra todos os elementos com a classe .function-combo
  itemServico.forEach((element) => {
    element.classList.remove("hidden");
  });

  // Esconde todos os elementos com a classe .filho-click-sobrancelha
  itensServicosSobrancelha.forEach((element) => {
    element.classList.add("hidden");
  });

  // Esconde o botão de voltar para sobrancelha
  voltarSobrancelha.classList.add("hidden");
});


