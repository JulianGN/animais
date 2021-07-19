import outsideClick from './outsideclick.js';

export default function initDropDownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach((userevent) => { //aqui foi criada uma array com forEach para não precisar repetir o mesmos addEventListener para cada tipo de interação
            menu.addEventListener(userevent,handleClick) //'click' demora 300ms para ser iniciado, já o 'touchstart' inicia instantaneamente
        })
        ; 
    })
    
    function handleClick(event){
        event.preventDefault();
        this.classList.toggle('active')
    
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        })
    }
     
}