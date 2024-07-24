import Swiper from 'swiper';
import 'swiper/css/bundle';
import { getReviews } from './requests';

const refs = {
  sliderWrapper: document.querySelector('.reviews-wrapper'),
  reviewsList: document.querySelector('.reviews-cards'),
  prevSlideButton: document.querySelector('.reviews-pagination-prev'),
  nextSlideButton: document.querySelector('.reviews-pagination-next'),
};

const reviewsSwiper = new Swiper(refs.sliderWrapper, {
  slidesPerView: 1,
  spaceBetween: 16,
  centerInsufficientSlides: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  watchSlidesVisibility: true,
  navigation: {
    prevEl: '.reviews-pagination-prev',
    nextEl: '.reviews-pagination-next',
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

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
document.addEventListener('keydown', onKeyDown);
refs.prevSlideButton.addEventListener('click', onPrevSlideButtonClick);
refs.nextSlideButton.addEventListener('click', onNextSlideButtonClick);

async function onDocumentLoaded() {
  const reviews = await getReviews();
  renderReviews(reviews);
}

function onKeyDown(e) {
  const action = e.code;
  switch (action) {
    case 'ArrowLeft':
      reviewsSwiper.slidePrev();
      break;
    case 'ArrowRight':
      reviewsSwiper.slideNext();
      break;
    case 'Tab':
      reviewsSwiper.slideNext();
      break;
  }
}

function onPrevSlideButtonClick() {
  reviewsSwiper.slidePrev();
}

function onNextSlideButtonClick() {
  reviewsSwiper.slideNext();
}

function createSingleReviewTemplate({ author, avatar_url, review }) {
  return `<li class="reviews-card swiper-slide">
        <div class="reviews-image-box">
          <img class="reviews-card-image" src="${avatar_url}" alt="photo of ${author}" />
        </div>
        <p class="reviews-card-name">${author}</p>
        <p class="reviews-card-description">${review}</p>
      </li>`;
}

function createReviewsTemplate(items) {
  return items.map(createSingleReviewTemplate).join(' ');
}

function renderReviews(items) {
  const reviewsMarkup = createReviewsTemplate(items);
  refs.reviewsList.innerHTML = reviewsMarkup;
}
