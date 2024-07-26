// Import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// Import Swiper styles bundle
import 'swiper/css/bundle';

import mobimage1x from '../img/Projects/proj_1template_mob@1x.webp';
import mobimage2x from '../img/Projects/proj_1template_mob@2x.webp';
import tabimage2x from '../img/Projects/proj_1template_tab@2x.webp';
import descimage1x from '../img/Projects/proj_1template_desk@1x.webp';
import tabimage1x from '../img/Projects/proj_1template_tab@1x.webp';
import descimage2x from '../img/Projects/proj_1template_desk@2x.webp';

import mobimage1x from '../img/Projects/proj_2template_mob@1x.webp';
import mobimage2x from '../img/Projects/proj_2template_mob@2x.webp';
import tabimage2x from '../img/Projects/proj_2template_tab@1x.webp';
import descimage1x from '../img/Projects/proj_2template_tab@2x.webp';
import tabimage1x from '../img/Projects/proj_2template_desk@1x.webp';
import descimage2x from '../img/Projects/proj_2template_desk@2x.webp';

import mobimage1x from '../img/Projects/proj_3template_mob@1x.webp';
import mobimage2x from '../img/Projects/proj_3template_mob@2x.webp';
import tabimage2x from '../img/Projects/proj_3template_tab@2x.webp';
import descimage1x from '../img/Projects/proj_3template_desk@1x.webp';
import tabimage1x from '../img/Projects/proj_3template_tab@1x.webp';
import descimage3_2x from '../img/Projects/proj_3template_desk@2x.webp';

console.log(mobimage1x);

const imageUrl = mobimage1x.replace('1template_mob@1x.webp', '');
// console.log('🚀 ~ imageUrl:', imageUrl);

const refs = {
  projectListRef: document.querySelector('.project-list-js'),
  projectWrapper: document.querySelector('.project-swiper'),
  prevSlideProjBtn: document.querySelector('.projects-navigation-prev'),
  nextSlideProjBtn: document.querySelector('.projects-navigation-next'),
};

const projSwiper = new Swiper(refs.projectWrapper, {
  slidesPerView: 1,
  spaceBetween: 25,
  effect: 'cube', // Set the effect to 'cube'

  centerInsufficientSlides: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  watchSlidesVisibility: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true, // Enable keyboard control only when Swiper is in viewport
    pageUpDown: true, // Enable control via Page Up and Page Down keys
  },

  cubeEffect: {
    shadow: true, // Enables main slider shadow
    shadowOffset: 20, // Main shadow offset in px
    shadowScale: 0.94, // Main shadow scale ratio
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

let isProjectSwiperInViewPort = false;

projSwiper.on('keyPress', (swiper, keyCode) => {
  if (keyCode === 9 && isProjectSwiperInViewPort) {
    swiper.slideNext();
  }
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isProjectSwiperInViewPort = true;
      } else {
        isProjectSwiperInViewPort = false;
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  }
);
observer.observe(refs.projectWrapper);
const projectArray = [
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x,
    mobimage2x,
    tabimage1x,
    tabimage2x,
    descimage1x,
    descimage2x,
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x,
    mobimage2x,
    tabimage1x,
    tabimage2x,
    descimage1x,
    descimage2x,
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x,
    mobimage2x,
    tabimage1x,
    tabimage2x,
    descimage1x,
    descimage2x,
  },
  // {
  //   title: 'Programming Across Borders: Ideas, Technologies, Innovations',
  //   tags: ['react', 'js', 'node js', 'git'],
  //   links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
  //   mobimage1x: `${imageUrl}1template_mob@1x.webp`,
  //   mobimage2x: `${imageUrl}1template_mob@2x.webp`,
  //   tabimage1x: `${imageUrl}1template_tab@1x.webp`,
  //   tabimage2x: `${imageUrl}1template_tab@2x.webp`,
  //   descimage1x: `${imageUrl}1template_desk@1x.webp`,
  //   descimage2x: `${imageUrl}1template_desk@2x.webp`,
  // },
  // {
  //   title: 'Programming Across Borders: Ideas, Technologies, Innovations',
  //   tags: ['react', 'js', 'node js', 'git'],
  //   links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
  //   mobimage21x: `${imageUrl}2template_mob@1x.webp`,
  //   mobimage22x: `${imageUrl}2template_mob@2x.webp`,
  //   tabimage21x: `${imageUrl}2template_tab@1x.webp`,
  //   tabimage22x: `${imageUrl}2template_tab@2x.webp`,
  //   descimage21x: `${imageUrl}2template_desk@1x.webp`,
  //   descimage22x: `${imageUrl}2template_desk@2x.webp`,
  // },
  // {
  //   title: 'Programming Across Borders: Ideas, Technologies, Innovations',
  //   tags: ['react', 'js', 'node js', 'git'],
  //   links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
  //   mobimage31x: `${imageUrl}3template_mob@1x.webp`,
  //   mobimage32x: `${imageUrl}3template_mob@2x.webp`,
  //   tabimage31x: `${imageUrl}3template_tab@1x.webp`,
  //   tabimage32x: `${imageUrl}3template_tab@2x.webp`,
  //   descimage31x: `${imageUrl}3template_desk@1x.webp`,
  //   descimage32x: `${imageUrl}3template_desk@2x.webp`,
  // },
];

function createProjectExample(project) {
  const tags = project.tags
    .map(tag => `<li class="tag-item"><p class="tag-text">#${tag}</p></li>`)
    .join('');

  return `
    <li class="swiper-slide" tabindex="0">
      <div class="projects-li-item">
        <div class="projects-white-wrapper">
          <ul class="tag-list">${tags}</ul>
          <h3 class="projects-header">${project.title}</h3>
          <a class="project-btn" type="button" href="${project.links}" target="_blank">See project</a>
        </div>
        <div class="project-image-wrapper">
          <picture>
            <source media="(min-width: 1440px)" srcset="${project.descimage1x} 1x, ${project.descimage2x} 2x" type="image/webp">
            <source media="(min-width: 768px)" srcset="${project.tabimage1x} 1x, ${project.tabimage2x} 2x" type="image/webp">
            <source media="(max-width: 767px)" srcset="${project.mobimage1x} 1x, ${project.mobimage2x} 2x" type="image/webp">
            <img src="${project.mobimage1x}" alt="project example image" loading="lazy" class="project-image">
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
