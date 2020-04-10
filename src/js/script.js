'use strict';

const modal = document.querySelector('.modal');
const jsButtonCart = document.querySelector('.js-button-cart');
const modalClose = document.querySelector('.modal__close');
const jsButtonClose = document.querySelector('.js-button-close');

const openModal = (event) => {
  event.preventDefault();
  modal.classList.add('is-open');
  modalClose.addEventListener('click', closeModal);
  jsButtonClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', closeModal);
  modal.addEventListener('click', closeModal); 
};

const closeModal = event => {
    const target = event.target;

    if(target.className === 'modal is-open' || target.classList.contains('modal__close') || target.classList.contains('js-button-close') ||  event.keyCode === 27) {
      modal.classList.remove('is-open');
      modalClose.removeEventListener('click', closeModal);
      jsButtonClose.removeEventListener('click', closeModal);
      window.removeEventListener('keydown', closeModal);
      modal.removeEventListener('click', closeModal);
    }
};

jsButtonCart.addEventListener('click', openModal);

new WOW().init();