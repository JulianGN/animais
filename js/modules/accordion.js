//e para exportar a função como módulo, utilize a palavra chave export antes da função desejada: 
// export default se for apenas uma função

const activeClass = 'ativo';//para não precisar repetir a class activeClass sempre

export default function initAccordion(){

    const accordionList = document.querySelectorAll('[data-accord="accordion"] dt');

    if(accordionList.length) {//verificando se o .js-accordion existe
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);


        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click',activeAccordion)
        })
    }
}