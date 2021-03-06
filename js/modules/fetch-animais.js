/* eslint-disable no-console */
/* eslint-disable import/extensions */
import initAnimaNumeros from './anima-numeros.js';

function createAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');
  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
  return div;
}

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponde = await fetch(url);
      const animaisJSON = await animaisResponde.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros(); // iniciando initAnimaNumeros só depois que o fetch terminar
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
