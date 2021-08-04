/* eslint-disable import/extensions */
import initTabNav from './modules/nav-tab.js';

import initAccordion from './modules/accordion.js';

import SmoothScroll from './modules/smooth-scroll.js';

import initAnimScroll from './modules/anim-scroll.js';

import initModal from './modules/modal.js';

import initTooltip from './modules/tooltip.js';

import initDropDownMenu from './modules/dropdown.js';

import initMenuMobile from './modules/menu-mobile.js';

// initAnimaNumeros foi para dentro do fecth-animais

import initFuncionamento from './modules/funcionamento.js';

import initFetchAnimais from './modules/fetch-animais.js';

import initFetchBitcoin from './modules/fetch-bitcoin.js';

initTabNav();
initAccordion();

const optionsSmooth = {
  behavior: 'smooth',
  block: 'start',
};

const scrollSuave = new SmoothScroll('[data-tab="menu"] a[href^="#"]', optionsSmooth);
scrollSuave.init();

initAnimScroll();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
