//e para exportar a função como módulo, utilize a palavra chave export antes da função desejada: 
// export default se for apenas uma função

const activeClass = 'ativo';//para não precisar repetir a class activeClass sempre

export default function initSmoothScroll(){

    const linksInternos = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href= this.getAttribute('href');
        const section = document.querySelector(href);

        /* Forma 1: scrollTo:
        const distancia = section.offsetTop;
        // window.scrollTo(0,distancia); //-- é possível simplesmente passar os valores x e y, ou criar com o objeto de options, como a seguir:
        window.scrollTo({
            top:distancia,
            behavior:'smooth'
        });
        */

        /************
        Forma 2: scrollIntoview()
        ************/

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }

    linksInternos.forEach((link) => {
        link.addEventListener('click',scrollToSection);
    })

}