const headerMobileMenuDiv = document.querySelector('.header-mobile-menu');
const headerNavMenuBtn = document.querySelector('.header-nav-menu');
const headerBtnCloseMenu = document.querySelector('.header-btn-close-menu');
const bodyEl = document.querySelector('body');

headerNavMenuBtn.addEventListener('click', () => {
  headerMobileMenuDiv.classList.add('header-mob-open');
  bodyEl.classList.add('blockScroll');
});

headerBtnCloseMenu.addEventListener('click', () => {
  headerMobileMenuDiv.classList.remove('header-mob-open');
  bodyEl.classList.remove('blockScroll');
});
