// Import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// Import Swiper styles bundle
import 'swiper/css/bundle';
import mobimage1x from '../img/Projects/proj_1template_mob@1x.png';
console.log(mobimage1x);
const imageUrl = mobimage1x.replace('1template_mob@1x.png', '');
console.log('🚀 ~ imageUrl:', imageUrl);
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
  // Enables slide shadows
  centerInsufficientSlides: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  watchSlidesVisibility: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true, // Enable keyboard control only when Swiper is in viewport
    pageUpDown: true, // Enable control via Page Up and Page Down keys
  },

  keyPress: (swiper, keyCode, event) => {
    if (keyCode === 9) {
      // Tab key
      if (event.shiftKey) {
        // Shift + Tab -> Navigate to previous slide
        if (!swiper.isBeginning) {
          swiper.slidePrev();
        }
      } else {
        // Tab -> Navigate to next slide
        if (!swiper.isEnd) {
          swiper.slideNext();
        }
      }
    }
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

const projectArray = [
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x: `${imageUrl}1template_mob@1x.png`,
    mobimage2x: './img/Projects/proj_1template_mob@2x.png',
    tabimage1x: './img/Projects/proj_1template_tab@1x.png',
    tabimage2x: './img/Projects/proj_1template_tab@2x.png',
    descimage1x: './img/Projects/proj_1template_desk@1x.png',
    descimage2x: './img/Projects/proj_1template_desk@2x.png',
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x: './img/Projects/proj_2template_mob@1x.png',
    mobimage2x: './img/Projects/proj_2template_mob@2x.png',
    tabimage1x: './img/Projects/proj_2template_tab@1x.png',
    tabimage2x: './img/Projects/proj_2template_tab@2x.png',
    descimage1x: './img/Projects/proj_2template_desk@1x.png',
    descimage2x: './img/Projects/proj_2template_desk@2x.png',
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x: './img/Projects/proj_3template_mob@1x.png',
    mobimage2x: './img/Projects/proj_3template_mob@2x.png',
    tabimage1x: './img/Projects/proj_3template_tab@1x.png',
    tabimage2x: './img/Projects/proj_3template_tab@2x.png',
    descimage1x: './img/Projects/proj_3template_desk@1x.png',
    descimage2x: './img/Projects/proj_3template_desk@2x.png',
  },
];

function createProjectExample(project) {
  const tags = project.tags
    .map(tag => `<li class="tag-item"><p class="tag-text">#${tag}</p></li>`)
    .join('');
  return `
    <li class="swiper-slide">
    <div class="projects-li-item ">
      <div class="projects-white-wrapper">
        <ul class="tag-list">
          ${tags}
        </ul>
        <h3 class="projects-header">${project.title}</h3>
        <a class="project-btn" type="button" href="${project.links}">See project</a>
      </div>
      <div class="project-image-wrapper">
        <img class="project-image" loading="lazy"
             src="${project.mobimage1x}"
             srcset="${project.mobimage1x} 1x, ${project.mobimage2x} 2x, 
                     ${project.tabimage1x} 1x, ${project.tabimage2x} 2x, 
                     ${project.descimage1x} 1x, ${project.descimage2x} 2x"
             alt="project example image" />
      </div>
      </div>
    </li>`;
}
{
  /* <picture>
  <source
    media="(min-width: 1440px)"
    srcset="
                ${item.imgTab1} 1x,
                ${item.imgTab2} 2x
                "
    type="image/webp"
  />
  <source
    media="(min-width: 768px)"
    srcset="
                ${item.imgTab1} 1x,
                ${item.imgTab2} 2x
                "
    type="image/webp"
  />
  <source
    media="(max-width: 767px)"
    srcset="
                ${item.imgMob1} 1x,
                ${item.imgMob2} 2x
                "
    type="image/webp"
  />
  <img
    src="${item.imgMob1}"
    alt="project"
    width="311"
    height="195"
    class="projects-card-img"
  /> */
}
{
  /* </picture>; */
}

function projectList(arr) {
  return arr.map(createProjectExample).join('');
}

function renderProjectList() {
  const markup = projectList(projectArray);
  refs.projectListRef.innerHTML = markup;
}

renderProjectList();
