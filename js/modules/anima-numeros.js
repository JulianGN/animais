/* eslint-disable no-param-reassign */
export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 10 * Math.random()); // para que cada número aumente em uma velocidade diferente
    });
  }

  // MutationObserver
  // para criarmos um observador de mutação
  // (ele vai ativar o timer no momento que os números estiverem visíveis)

  function handleMutation(mutation) { // o parâmetro será a própria mutação
    if (mutation[0].target.classList.contains('ativo')) { // se a mutação observada [0] contém a classe ativo:
      // eslint-disable-next-line no-use-before-define
      observer.disconnect(); // desliga o obsrvador, para ele não ativar cada vez que mexer o scroll
      animaNumeros(); // ativa a função
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
