import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import mobimage1_1x from '../img/Projects/proj_1template_mob@1x.webp';
import mobimage1_2x from '../img/Projects/proj_1template_mob@2x.webp';
import tabimage1_1x from '../img/Projects/proj_1template_tab@1x.webp';
import tabimage1_2x from '../img/Projects/proj_1template_tab@2x.webp';
import descimage1_1x from '../img/Projects/proj_1template_desk@1x.webp';
import descimage1_2x from '../img/Projects/proj_1template_desk@2x.webp';

import mobimage2_1x from '../img/Projects/proj_2template_mob@1x.webp';
import mobimage2_2x from '../img/Projects/proj_2template_mob@2x.webp';
import tabimage2_1x from '../img/Projects/proj_2template_tab@1x.webp';
import tabimage2_2x from '../img/Projects/proj_2template_tab@2x.webp';
import descimage2_1x from '../img/Projects/proj_2template_desk@1x.webp';
import descimage2_2x from '../img/Projects/proj_2template_desk@2x.webp';

import mobimage3_1x from '../img/Projects/proj_3template_mob@1x.webp';
import mobimage3_2x from '../img/Projects/proj_3template_mob@2x.webp';
import tabimage3_1x from '../img/Projects/proj_3template_tab@1x.webp';
import tabimage3_2x from '../img/Projects/proj_3template_tab@2x.webp';
import descimage3_1x from '../img/Projects/proj_3template_desk@1x.webp';
import descimage3_2x from '../img/Projects/proj_3template_desk@2x.webp';

const refs = {
  projectListRef: document.querySelector('.project-list-js'),
  projectWrapper: document.querySelector('.project-swiper'),
  prevSlideProjBtn: document.querySelector('.projects-navigation-prev'),
  nextSlideProjBtn: document.querySelector('.projects-navigation-next'),
};

let isProjectSwiperInViewPort = false;

const projSwiper = new Swiper(refs.projectWrapper, {
  slidesPerView: 1,
  spaceBetween: 25,
  effect: 'cube',

  centerInsufficientSlides: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  watchSlidesVisibility: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  cubeEffect: {
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    slideShadows: true,
  },

  pagination: {
    el: '.projects-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.projects-navigation-next',
    prevEl: '.projects-navigation-prev',
  },
});

const swiperObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      isProjectSwiperInViewPort = entry.isIntersecting;
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
);

swiperObserver.observe(refs.projectWrapper);

document.addEventListener('keydown', event => {
  if (isProjectSwiperInViewPort) {
    if (event.key === 'Tab') {
      event.preventDefault();
      if (event.shiftKey) {
        projSwiper.slidePrev();
      } else {
        projSwiper.slideNext();
      }
    }
  }
});

const projectArray = [
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    imgMob_1x: mobimage1_1x,
    imgMob_2x: mobimage1_2x,
    imgTab_1x: tabimage1_1x,
    imgTab_2x: tabimage1_2x,
    imgDesc_1x: descimage1_1x,
    imgDesc_2x: descimage1_2x,
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    imgMob_1x: mobimage2_1x,
    imgMob_2x: mobimage2_2x,
    imgTab_1x: tabimage2_1x,
    imgTab_2x: tabimage2_2x,
    imgDesc_1x: descimage2_1x,
    imgDesc_2x: descimage2_2x,
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    imgMob_1x: mobimage3_1x,
    imgMob_2x: mobimage3_2x,
    imgTab_1x: tabimage3_1x,
    imgTab_2x: tabimage3_2x,
    imgDesc_1x: descimage3_1x,
    imgDesc_2x: descimage3_2x,
  },
];

function createProjectExample({
  title,
  tags,
  links,
  imgMob_1x,
  imgMob_2x,
  imgTab_1x,
  imgTab_2x,
  imgDesc_1x,
  imgDesc_2x,
}) {
  const newTags = tags
    .map(tag => `<li class="tag-item"><p class="tag-text">#${tag}</p></li>`)
    .join('');
  return `
    <li class="swiper-slide">
      <div class="projects-li-item">
        <div class="projects-white-wrapper">
          <ul class="tag-list">${newTags}</ul>
          <div>
          <h3 class="projects-header">${title}</h3>
          <a class="project-btn" type="button" href="${links}" target="_blank">See project</a>
          </div>
        </div>
        <div class="project-image-wrapper">
          <picture>
            <source media="(min-width: 1440px)" srcset="${imgDesc_1x} 1x, ${imgDesc_2x} 2x" type="image/webp" alt="project example image" loading="lazy">
            <source media="(min-width: 768px)" srcset="${imgTab_1x} 1x, ${imgTab_2x} 2x" type="image/webp" alt="project example image" loading="lazy">
            <source media="(max-width: 767px)" srcset="${imgMob_1x} 1x, ${imgMob_2x} 2x" type="image/webp" alt="project example image" loading="lazy">
            <img src="${imgMob_1x}" alt="project example image" loading="lazy" class="project-image">
          </picture>
        </div>
      </div>
    </li>`;
}

function projectList(arr) {
  return arr.map(createProjectExample).join('');
}

function renderProjectList() {
  const markup = projectList(projectArray);
  refs.projectListRef.innerHTML = markup;
}

renderProjectList();
