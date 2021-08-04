/* eslint-disable import/extensions */
import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  // eslint-disable-next-line no-unused-vars
  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    setTimeout(() => {
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
