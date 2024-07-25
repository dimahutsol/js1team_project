import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

  const refs = {
    listRef: document.querySelector('.about-me-ac-list'),
  };
  
  const aboutMeList = [
    {
      title: 'About me',
      svgPath: '../img/symbols.svg#arrow-down',
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
      `
    },
    {
      title: 'Role',
      svgPath: '../img/symbols.svg#arrow-down',
      content: `
        <p class="about-me-role-text">Frontend development</p>
        <p class="about-me-role-text">HeadlessCMS,Wordpress</p>
        <p class="about-me-role-text">Blender(enjoy)</p>
      `
    },
    {
      title: 'Education',
      svgPath: '../img/symbols.svg#arrow-down',
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
      `
    }
  ];
  
  function listItemTemplate({ title, svgPath, content }) {
    return `
      <li class="about-me-ac-list-item ac">
        <div class="ac-trigger">
          <h4 class="about-me-ac-item-title">${title}</h4>
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
    refs.listRef.insertAdjacentHTML('beforeend', markup);
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
    button.addEventListener('click', function() {
      const acItem = this.closest('.ac');
      acItem.classList.toggle('closed');
      this.querySelector('.about-me-slider-arrow').classList.toggle('rotate-180');
    });
  });
  

  
  