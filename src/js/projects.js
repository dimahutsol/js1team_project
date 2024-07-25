// Import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// Import Swiper styles bundle
import 'swiper/css/bundle';

const refs = {
  projectListRef: document.querySelector('.project-list-js'),
  projectWrapper: document.querySelector('.project-swiper'),
  prevSlideProjBtn: document.querySelector('.projects-navigation-prev'),
  nextSlideProjBtn: document.querySelector('.projects-navigation-next'),
};

const projSwiper = new Swiper(refs.projectWrapper, {
  slidesPerView: 1,
  spaceBetween: 25,
  centerInsufficientSlides: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  watchSlidesVisibility: true,
  keyboard: { enabled: true },

  pagination: {
    el: '.projects-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.projects-navigation-next',
    prevEl: '.projects-navigation-prev',
  },
});

function updateNavigation() {
  if (projSwiper.isBeginning) {
    refs.prevSlideProjBtn.classList.add('projects-navigation-btn-disabled');
    refs.prevSlideProjBtn.setAttribute('disabled', true);
    refs.prevSlideProjBtn
      .querySelector('svg')
      .classList.add('projects-navigation-icon-disabled');
  } else {
    refs.prevSlideProjBtn.classList.remove('projects-navigation-btn-disabled');
    refs.prevSlideProjBtn.removeAttribute('disabled');
    refs.prevSlideProjBtn
      .querySelector('svg')
      .classList.remove('projects-navigation-icon-disabled');
  }

  if (projSwiper.isEnd) {
    refs.nextSlideProjBtn.classList.add('projects-navigation-btn-disabled');
    refs.nextSlideProjBtn.setAttribute('disabled', true);
    refs.nextSlideProjBtn
      .querySelector('svg')
      .classList.add('projects-navigation-icon-disabled');
  } else {
    refs.nextSlideProjBtn.classList.remove('projects-navigation-btn-disabled');
    refs.nextSlideProjBtn.removeAttribute('disabled');
    refs.nextSlideProjBtn
      .querySelector('svg')
      .classList.remove('projects-navigation-icon-disabled');
  }
}

projSwiper.on('slideChange', updateNavigation);
projSwiper.on('reachBeginning', updateNavigation);
projSwiper.on('reachEnd', updateNavigation);
projSwiper.on('init', updateNavigation);

const projectArray = [
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x: '../img/Projects/proj_1template_mob@1x.png',
    mobimage2x: '../img/Projects/proj_1template_mob@2x.png',
    tabimage1x: '../img/Projects/proj_1template_tab@1x.png',
    tabimage2x: '../img/Projects/proj_1template_tab@2x.png',
    descimage1x: '../img/Projects/proj_1template_desk@1x.png',
    descimage2x: '../img/Projects/proj_1template_desk@2x.png',
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x: '../img/Projects/proj_2template_mob@1x.png',
    mobimage2x: '../img/Projects/proj_2template_mob@2x.png',
    tabimage1x: '../img/Projects/proj_2template_tab@1x.png',
    tabimage2x: '../img/Projects/proj_2template_tab@2x.png',
    descimage1x: '../img/Projects/proj_2template_desk@1x.png',
    descimage2x: '../img/Projects/proj_2template_desk@2x.png',
  },
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    tags: ['react', 'js', 'node js', 'git'],
    links: 'https://github.com/dimahutsol/js1team_project/tree/dev',
    mobimage1x: '../img/Projects/proj_3template_mob@1x.png',
    mobimage2x: '../img/Projects/proj_3template_mob@2x.png',
    tabimage1x: '../img/Projects/proj_3template_tab@1x.png',
    tabimage2x: '../img/Projects/proj_3template_tab@2x.png',
    descimage1x: '../img/Projects/proj_3template_desk@1x.png',
    descimage2x: '../img/Projects/proj_3template_desk@2x.png',
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
        <img class="project-image" 
             src="${project.mobimage1x}"
             srcset="${project.mobimage1x} 1x, ${project.mobimage2x} 2x, 
                     ${project.tabimage1x} 1x, ${project.tabimage2x} 2x, 
                     ${project.descimage1x} 1x, ${project.descimage2x} 2x"
             alt="project example image" />
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
