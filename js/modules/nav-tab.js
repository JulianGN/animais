/* eslint-disable max-len */
// e para exportar a função como módulo, utilize a palavra chave export antes da função desejada:
// export default se for apenas uma função

const activeClass = 'ativo';// para não precisar repetir a class activeClass sempre

export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // como esse código pode ser utilizado em diversas páginas, inclusive páginas que não contenham os sections que serão ativos, é importante inserir o código abaixo dentro de um if:

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });

    const direcao = tabContent[index].dataset.anime; // inserindo a classe conforme o data-
    tabContent[index].classList.add(activeClass, direcao);
  }

  if (tabMenu.length && tabContent.length) { // quando não houver itens dentro de uma dessas arrray likes, o código não é executado
    tabContent[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
