const headerMobileMenuDiv = document.querySelector('.header-mobile-menu');
const headerNavMenuBtn = document.querySelector('.header-nav-menu');
const headerBtnCloseMenu = document.querySelector('.header-btn-close-menu');
const bodyEl = document.querySelector('body');
const headerTabList = document.querySelector('.header-tab-list');
const headerTabProject = document.querySelector('.header-tab-project');
const headerModalMenuList = document.querySelector('.header-modal-menu-list');
const headerLinkProject = document.querySelector('.header-link-project');

headerNavMenuBtn.addEventListener('click', () => {
  headerMobileMenuDiv.classList.add('header-mob-open');
  bodyEl.classList.add('blockScroll');
});

headerBtnCloseMenu.addEventListener('click', () => {
  headerMobileMenuDiv.classList.remove('header-mob-open');
  bodyEl.classList.remove('blockScroll');
});

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
}

function closeMobileMenu() {
  headerMobileMenuDiv.classList.remove('header-mob-open');
  bodyEl.classList.remove('blockScroll');
}

// Обробник для header-tab-list
headerTabList.addEventListener('click', event => {
  if (event.target.classList.contains('header-tab-link')) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    smoothScroll(target);
  }
});

headerTabProject.addEventListener('click', event => {
  event.preventDefault();
  const target = headerTabProject.querySelector('a').getAttribute('href');
  smoothScroll(target);
});

headerModalMenuList.addEventListener('click', event => {
  if (event.target.classList.contains('header-modal-link')) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    closeMobileMenu();
    setTimeout(() => smoothScroll(target), 300);
  }
});

headerLinkProject.addEventListener('click', event => {
  event.preventDefault();
  const target = headerLinkProject.getAttribute('href');
  closeMobileMenu();
  setTimeout(() => smoothScroll(target), 300);
});
