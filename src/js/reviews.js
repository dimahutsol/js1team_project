import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getReviews } from './requests';

const refs = {
  sliderWrapper: document.querySelector('.reviews-wrapper'),
  reviewsList: document.querySelector('.reviews-cards'),
  prevSlideButton: document.querySelector('.reviews-navigation-prev'),
  nextSlideButton: document.querySelector('.reviews-navigation-next'),
};

let reviews;
let theHighestCard;
let isReviewsSwiperInViewPort = false;

const reviewsSwiper = new Swiper(refs.sliderWrapper, {
  slidesPerView: 1,
  spaceBetween: 16,
  centerInsufficientSlides: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  watchSlidesVisibility: true,
  keyboard: {
    onlyInViewport: true,
    enabled: true,
  },
  navigation: {
    prevEl: '.reviews-navigation-prev',
    nextEl: '.reviews-navigation-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isReviewsSwiperInViewPort = true;
      } else {
        isReviewsSwiperInViewPort = false;
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  }
);

observer.observe(refs.sliderWrapper);

reviewsSwiper.on('keyPress', (swiper, keyCode) => {
  if (keyCode === 9 && isReviewsSwiperInViewPort) {
    swiper.slideNext();
  }
});
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
document.addEventListener('keydown', e => e.preventDefault());
refs.reviewsList.addEventListener('click', onReviewsListClick);

async function onDocumentLoaded() {
  try {
    reviews = await getReviews();
    renderReviews(reviews);
    setCardsHeight();
  } catch (error) {
    iziToast.show({
      title: ':(',
      message: error.message,
    });
    refs.sliderWrapper.innerHTML = `<h2 class="reviews-error">Not Found...</h2>`;
  }
}

function onReviewsListClick(e) {
  if (e.target === e.currentTarget) return;
  const targetEl = e.target
    .closest('.reviews-card')
    .querySelector('.reviews-card-description');
  targetEl.classList.toggle('reviews-card-description-overflow-hidden');
}

function setCardsHeight() {
  setTimeout(() => {
    const cards = document.querySelectorAll('.reviews-card');
    theHighestCard = getTheHighestElement(cards);
    cards.forEach(el => (el.style.minHeight = `${theHighestCard}px`));
  }, 50);
}

function getTheHighestElement(elements) {
  if (elements.length === 0) return;
  const elementsHeights = [];
  elements.forEach(el =>
    elementsHeights.push(el.getBoundingClientRect().height)
  );
  return Math.max(...elementsHeights);
}

function createSingleReviewTemplate({ author, avatar_url, review }) {
  return `<li class="reviews-card swiper-slide">
        <div class="reviews-image-box">
          <img class="reviews-card-image" src="${avatar_url}" alt="photo of ${author}" />
        </div>
        <p class="reviews-card-name">${author}</p>
        <p class="reviews-card-description reviews-card-description-overflow-hidden">${review}</p>
      </li>`;
}

function createReviewsTemplate(items) {
  return items.map(createSingleReviewTemplate).join(' ');
}

function renderReviews(items) {
  const reviewsMarkup = createReviewsTemplate(items);
  refs.reviewsList.innerHTML = reviewsMarkup;
}
