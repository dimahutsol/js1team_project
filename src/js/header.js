const headerMobileMenuDiv = document.querySelector('.header-mobile-menu');
const headerNavMenuBtn = document.querySelector('.header-nav-menu');
const headerBtnCloseMenu = document.querySelector('.header-btn-close-menu');

headerNavMenuBtn.addEventListener('click', () => {
  headerMobileMenuDiv.classList.add('header-mob-open');
});

    headerMobileMenuDiv.classList.remove('header-mob-open');
})