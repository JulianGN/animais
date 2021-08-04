/* eslint-disable max-len */
export default function initModal() {
  // selecionando botões
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }
  function cliqueForaModal(event) {
    if (event.target === containerModal) {
      toggleModal(event); // precisa dizer o event para o preventDefault reconhecer o elemento clicado
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) { // verificando se as variáveis foram encontradas
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
