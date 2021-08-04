/* eslint-disable max-len */
export default function initFuncionamento() {

}

const funncionamento = document.querySelector('[data-semana]');
const diasSemana = funncionamento.dataset.semana.split(',').map(Number); // retorna a string com os dias definidos no html, mas o split converte em array e o .map(Number) faz a conversão em número na nova array
const horarioSemana = funncionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // verificando se o 'diaAgora' é um dos dias do 'diasSemana'. Caso retorne -1, não está na array (é sábado (6) ou domingo (0))

const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]); // verificando se o horário que a pessoa está vendo é depois das 8 e antes das 18

if (semanaAberto && horarioAberto) { // se está dentro do dia da semana e do horário aberto:
  funncionamento.classList.add('aberto');
}
