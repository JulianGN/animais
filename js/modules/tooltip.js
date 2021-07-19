export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]');

    function criarToolTipBox(element){
        const tooltipBox = document.createElement('div');
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = element.getAttribute('aria-label');
        document.body.appendChild(tooltipBox); //adiciona a tooltipBox no final do body
    
        return tooltipBox
    }
    
    const onMouseLeave = {
        handleEvent(){
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave) //remover o evento enquanto o mouse está sobre, otimizando o código
            this.element.removeEventListener('mousemove', onMouseMove)
        }
        //handleEvent é um método obrigatório quando você quer ativar um objeto como callback
    }
    
    const onMouseMove = {
        handleEvent(event){
            this.tooltipBox.style.top = event.pageY + 20 + 'px'; //adicionado 20px no Y e no X para deslocar um pouco a div que surge ao passar o mouse e fazia que piscasse
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }
    
    function onMouseOver(event){
        const tooltipBox = criarToolTipBox(this); //this é o próprio item que está sendo clicado
        // função foi criada para poder depois remover a caixa
        tooltipBox.style.top = event.pageY + 'px'; //com a propriedade style, podemos chamar e alterar o css inline do elemento criado
        tooltipBox.style.left = event.pageX + 'px'; //event.pageY e pageX dão as coordenadas na página (sem unidade. Por isso, precisamos concatenar)   
        
        onMouseLeave.tooltipBox = tooltipBox; //está colocando a const tooltipBox dessa função dentro do objeto onMouseLeave
        onMouseLeave.element = this; //vai inserir o elemento selecionado dentro do objeto onMouseLeave
        this.addEventListener('mouseleave', onMouseLeave);
    
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);
    }
    
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    }) 
}