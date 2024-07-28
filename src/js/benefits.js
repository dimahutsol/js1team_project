import image from '/img/symbols.svg';
const refs = {
  listRef: document.querySelector('.benefit-list'),
};

const benefitList = [
  {
    svgPath: `${image}#user`,
    title: 'Expertise',
    text: 'As a highly experienced developer, I have deep knowledge of programming and website development.',
  },
  {
    svgPath: `${image}#message`,
    title: 'Communication',
    text: 'Understanding your needs and wants is my priority and I am always open to discussions and corrections.',
  },
  {
    svgPath: `${image}#brush`,
    title: 'Art',
    text: 'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life.',
  },
  {
    svgPath: `${image}#hourglass`,
    title: 'Urgent execution',
    text: 'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
  },
];

function cardTemplate({ svgPath, title, text }) {
  return `<li class="benefit-list-card section-animation">
            <div class="benefit-list-icon">
              <svg class="benefit-list-icon-svg" width="24" height="24">
                <use href="${svgPath}"></use>
              </svg>
            </div>
            <h3 class="benefits-item-title">${title}</h3>
            <p class="benefits-item-text">${text}</p>
          </li>`;
}

function cardsTemplate(arr) {
  return arr.map(cardTemplate).join('');
}

function renderList(arr) {
  const markup = cardsTemplate(arr);
  refs.listRef.insertAdjacentHTML('beforeend', markup);
}

renderList(benefitList);
