//e para exportar a função como módulo, utilize a palavra chave export antes da função desejada: 
// export default se for apenas uma função

const activeClass = 'ativo';//para não precisar repetir a class activeClass sempre

export default function initAnimScroll(){

    const sections = document.querySelectorAll('[data-scroll="scroll"]');

    if(sections.length){
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;//descobre a distância do topo de cada um dos elementos, atualizando a cada vez que mover o scroll
                const calculoDistancia = window.innerHeight * 0.75;
                if(sectionTop < calculoDistancia){
                    section.classList.add(activeClass)
                } else if(section.classList.contains(activeClass)) {
                    //aprimoramento para não remover o tempo todo
                    section.classList.remove(activeClass)
                }
            });
        }

        animaScroll();//para ativar o primeiro ativo

        window.addEventListener('scroll',animaScroll)
    }
}