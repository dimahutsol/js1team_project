import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import image from '/img/symbols.svg';
Swiper.use([Navigation, Keyboard, Mousewheel]);

const refs = {
  listAcRef: document.querySelector('.about-me-ac-list'),
  listSkillsRef: document.querySelector('.about-me-skills-list'),
};

const aboutMeList = [
  {
    title: 'About me',
    svgPath: `${image}#arrow-up`,
    content: `
        <p class="about-me-desc">
          I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. 
          I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. 
          I always follow the latest trends and look for unconventional, creative solutions to problems. 
          I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.
        </p>
        <p class="about-me-desc">
          Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. 
          Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. 
          I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. 
          I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.
        </p>
      `,
  },
  {
    title: 'Role',
    svgPath: `${image}#arrow-down`,
    content: `
        <p class="about-me-role-text">Frontend development</p>
        <p class="about-me-role-text">HeadlessCMS,Wordpress</p>
        <p class="about-me-role-text">Blender(enjoy)</p>
      `,
      className: 'with-gap'
  },
  {
    title: 'Education',
    svgPath: `${image}#arrow-down`,
    content: `
        <p class="about-me-education-text">
          2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York
        </p>
        <p class="about-me-education-text">
          2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York
        </p>
        <p class="about-me-education-text">
          2020 - 2022 / Advanced Blender Animation Techniques, Udemy
        </p>
      `,
      className: 'with-gap'
  },
  
];

const aboutMeSkillsList = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'React Native',
  'Soft Skills',
  'Python',
];

function listItemTemplate({ title, svgPath, content }) {
  return `
      <li class="about-me-ac-list-item ac">
        <div class="ac-trigger">
          <h2 class="about-me-ac-item-title">${title}</h2>
          <button class="about-me-ac-button" type="button" aria-label="Slider button">
            <svg class="about-me-slider-arrow" width="10" height="10">
              <use href="${svgPath}"></use>
            </svg>
          </button>
        </div>
        <div class="about-me-desc-container ac-panel">
          ${content}
        </div>
      </li>
    `;
}

function listTemplate(arr) {
  return arr.map(listItemTemplate).join('');
}

function renderList(arr) {
  const markup = listTemplate(arr);
  refs.listAcRef.insertAdjacentHTML('beforeend', markup);
}

renderList(aboutMeList);

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.about-me-ac-list', {
    duration: 600,
    collapse: true,
    openOnInit: [0],
    showMultiple: true,
  });
});

document.querySelectorAll('.about-me-ac-button').forEach(button => {
  button.addEventListener('click', function () {
    const acItem = this.closest('.ac');
    acItem.classList.toggle('closed');
    this.querySelector('.about-me-slider-arrow').classList.toggle('rotate-180');
  });
});

function listSkillItemTemplate(nameSkill) {
  return `
    <li class="about-me-skills-item swiper-slide">
      <p>${nameSkill}</p>
    </li>
  `;
}

function renderSkillList(arr) {
  const markup = arr.map(skill => listSkillItemTemplate(skill)).join('');
  refs.listSkillsRef.insertAdjacentHTML('beforeend', markup);
}

renderSkillList(aboutMeSkillsList);

const skillsCarousel = new Swiper('.about-me-skills-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.about-me-swiper-button-next',
    grabCursor: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
    sensitivity: 1,
    eventsTarget: '.about-me-skills-swiper',
  },

  breakpoints: {
    375: {
      slidesPerView: 2,
      // width: 260,
    },

    768: {
      slidesPerView: 3,
      // width: 600,
    },

    1440: {
      slidesPerView: 6,
      // width: 1200,
    },
  },

  loop: true,
  setWrapperSize: true,
  spaceBetween: 0,
  speed: 600,
  simulateTouch: false,
  slideToClickedSlide: true,
  slidesPerGroup: 1,
  grabCursor: true,
});

function updateHighlight() {
  const slides = skillsCarousel.slides;
  slides.forEach(slide => slide.classList.remove('is-first'));
  const firstVisibleSlide = slides[skillsCarousel.activeIndex];
  firstVisibleSlide.classList.add('is-first');
}

document.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.preventDefault();
    skillsCarousel.slideNext(600);
  }
});

skillsCarousel.update();
skillsCarousel.on('slideChange', updateHighlight);

skillsCarousel.on('slideChangeTransitionEnd', updateHighlight);

updateHighlight();
