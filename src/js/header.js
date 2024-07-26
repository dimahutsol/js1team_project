const headerMobileMenuDiv = document.querySelector('.header-mobile-menu');
const headerNavMenuBtn = document.querySelector('.header-nav-menu');
const headerBtnCloseMenu = document.querySelector('.header-btn-close-menu');
const headerTabList = document.querySelector('.header-tab-list');
const bodyEl = document.querySelector('body');

headerNavMenuBtn.addEventListener('click', () => {
  headerMobileMenuDiv.classList.add('header-mob-open');
  bodyEl.classList.add('blockScroll');
});

headerBtnCloseMenu.addEventListener('click', () => {
  headerMobileMenuDiv.classList.remove('header-mob-open');
  bodyEl.classList.remove('blockScroll');
});

headerTabList.addEventListener('click', event => {
  if (event.target.nodeName === 'A') {
    event.preventDefault();

    const targetId = event.target.getAttribute('href').substring(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });

      headerMobileMenuDiv.classList.remove('header-mob-open');
      bodyEl.classList.remove('blockScroll');
    }
  }
});
