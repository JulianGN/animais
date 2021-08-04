/* eslint-disable no-console */
// Date Object
// é uma função construtora que cria um objeto contendo uma data
// se na hora de criar o objeto, não definirmos nenhum argumento,
// ele vai criar um objeto com a data do momento da execução do script:

const now = new Date(); // Mon Apr 19 2021 20:05:48 GMT-0300

// Podemos também pegar características dessa data:

now.getDate(); // dia do mês
now.getDay(); // dia da semana (de 0 a 6)
now.getMonth(); // número do mês (de 0 a 11)
now.getFullYear(); // ano completo
now.getMinutes(); // minuto da hora executada
now.getTime(); // ms desde 01/01/1970
// eslint-disable-next-line no-unused-expressions
now.getUTCHours() - 3; // retorna o fuso horário (-3) que é o de Brasília

const agora = new Date();
const futuro = new Date('Jul 4 2021 00:01'); // retorna a data respectiva mas de 4 de julho de 2021, meia noite e um

console.log(futuro);

// sobre o getTime:
agora.getTime(); // mostra quantos ms já se passaram até o momento
// assim, podemos calcular o tempo que falta para uma data futura:

function msEmDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000); // (horas * minutos * segundo * ms)
}

// quantos dias faltam para o meu aniversário de 2021:

const diasAgora = msEmDias(agora.getTime());
const diasAniversario = msEmDias(futuro.getTime());

console.log(`Faltam ${Math.floor(diasAniversario - diasAgora)} dias para seu aniversário`);
