const headerMobileMenuDiv = document.querySelector('.header-mobile-menu');
const headerNavMenuBtn = document.querySelector('.header-nav-menu');
const headerBtnCloseMenu = document.querySelector('.header-btn-close-menu');
const bodyEl = document.querySelector('body');
const headerTabList = document.querySelector('.header-tab-list');
const headerTabProject = document.querySelector('.header-tab-project');
const headerModalMenuList = document.querySelector('.header-modal-menu-list');
const headerLinkProject = document.querySelector('.header-link-project');
const headerEl = document.querySelector('.header');

headerNavMenuBtn.addEventListener('click', () => {
  headerMobileMenuDiv.classList.add('header-mob-open');
  headerEl.classList.add('container-header');
  bodyEl.classList.add('blockScroll');
});

headerBtnCloseMenu.addEventListener('click', () => {
  headerMobileMenuDiv.classList.remove('header-mob-open');
  headerEl.classList.remove('container-header');
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
    headerEl.classList.remove('container-header');
    setTimeout(() => smoothScroll(target), 300);
  }
});

headerLinkProject.addEventListener('click', event => {
  event.preventDefault();
  const target = headerLinkProject.getAttribute('href');
  headerEl.classList.remove('container-header');
  closeMobileMenu();
  setTimeout(() => smoothScroll(target), 300);
});

function createMobileBlinds() {
  const mobileBlinds = document.getElementById('mobile-blinds');
  const numberOfSlats = 20;

  mobileBlinds.innerHTML = '';

  for (let i = 0; i < numberOfSlats; i++) {
    const slat = document.createElement('div');
    slat.className = 'mobile-slat';
    slat.style.setProperty('--index', i);
    mobileBlinds.appendChild(slat);
  }

  mobileBlinds.style.setProperty('--slat-count', numberOfSlats);
}

function animateMobileBlinds() {
  const slats = document.querySelectorAll('.mobile-slat');
  const middleIndex = Math.floor(slats.length / 2);

  for (let i = 0; i < slats.length; i++) {
    const delay = Math.abs(i - middleIndex) * 70;
    setTimeout(() => {
      slats[i].classList.add('show');
    }, delay);
  }
}

headerNavMenuBtn.addEventListener('click', () => {
  headerMobileMenuDiv.classList.add('header-mob-open');
  headerEl.classList.add('container-header');
  bodyEl.classList.add('blockScroll');
  createMobileBlinds();
  setTimeout(animateMobileBlinds, 200);
});

headerBtnCloseMenu.addEventListener('click', () => {
  headerMobileMenuDiv.classList.remove('header-mob-open');
  headerEl.classList.remove('container-header');
  bodyEl.classList.remove('blockScroll');
  document.querySelectorAll('.mobile-slat').forEach(slat => {
    slat.classList.remove('show');
  });
});
