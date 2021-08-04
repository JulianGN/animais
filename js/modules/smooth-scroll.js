/* eslint-disable max-len */
// e para exportar a função como módulo, utilize a palavra chave export antes da função desejada:
// export default se for apenas uma função

// const activeClass = 'ativo';// para não precisar repetir a class activeClass sempre

export default class SmoothScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this); // utilizar o bind para reforçar que o this é o objeto que deve ser chamado
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
