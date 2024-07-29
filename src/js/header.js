const selectors = {
  headerMobileMenu: '.header-mobile-menu',
  headerNavMenu: '.header-nav-menu',
  headerBtnCloseMenu: '.header-btn-close-menu',
  body: 'body',
  headerTabList: '.header-tab-list',
  headerTabProject: '.header-tab-project',
  headerModalMenuList: '.header-modal-menu-list',
  headerLinkProject: '.header-link-project',
  header: '.header',
  themeSwitcher: '.theme-switcher-btn',
  mobileBlinds: '#mobile-blinds',
};

const elements = {};
for (const [key, selector] of Object.entries(selectors)) {
  elements[key] = document.querySelector(selector);
}

function toggleMobileMenu(open) {
  elements.headerMobileMenu.classList.toggle('header-mob-open', open);
  elements.header.classList.toggle('container-header', open);
  elements.body.classList.toggle('blockScroll', open);
  elements.themeSwitcher.style.display = open ? 'none' : 'flex';

  if (open) {
    createMobileBlinds();
    setTimeout(animateMobileBlinds, 100);
  } else {
    document
      .querySelectorAll('.mobile-slat')
      .forEach(slat => slat.classList.remove('show'));
  }
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
}

function handleNavClick(event, closeMenu = false) {
  if (event.target.matches('a') || event.target === elements.headerTabProject) {
    event.preventDefault();
    const target =
      event.target.getAttribute('href') ||
      event.target.querySelector('a').getAttribute('href');
    if (closeMenu) {
      toggleMobileMenu(false);
      setTimeout(() => smoothScroll(target), 300);
    } else {
      smoothScroll(target);
    }
  }
}

function createMobileBlinds() {
  const numberOfSlats = 20;
  elements.mobileBlinds.innerHTML = Array(numberOfSlats)
    .fill('<div class="mobile-slat"></div>')
    .join('');
  elements.mobileBlinds.style.setProperty('--slat-count', numberOfSlats);
}

function animateMobileBlinds() {
  const slats = document.querySelectorAll('.mobile-slat');
  const middleIndex = Math.floor(slats.length / 2);
  slats.forEach((slat, i) => {
    setTimeout(
      () => slat.classList.add('show'),
      Math.abs(i - middleIndex) * 50
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const menuBox = document.querySelector('.header-tab-menu-box');
  const menu = document.querySelector('.header-tab-list');

  function toggleMenu() {
    const isActive = menu.classList.toggle('is-active');
    menu.style.animation = isActive
      ? 'scaleIn 0.3s forwards'
      : 'scaleOut 0.3s forwards';
  }

  menuBox.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', e => {
    if (!menuBox.contains(e.target) && menu.classList.contains('is-active')) {
      toggleMenu();
    }
  });

  elements.headerNavMenu.addEventListener('click', () =>
    toggleMobileMenu(true)
  );
  elements.headerBtnCloseMenu.addEventListener('click', () =>
    toggleMobileMenu(false)
  );
  elements.headerTabList.addEventListener('click', handleNavClick);
  elements.headerTabProject.addEventListener('click', handleNavClick);
  elements.headerModalMenuList.addEventListener('click', e =>
    handleNavClick(e, true)
  );
  elements.headerLinkProject.addEventListener('click', e =>
    handleNavClick(e, true)
  );
});
