import Swiper from 'swiper';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getReviews } from './requests';

const refs = {
  reviewsWrapper: document.querySelector('.reviews-wrapper'),
  sliderWrapper: document.querySelector('.reviews-wrapper'),
  reviewsList: document.querySelector('.reviews-cards'),
  prevSlideButton: document.querySelector('.reviews-pagination-prev'),
  nextSlideButton: document.querySelector('.reviews-pagination-next'),
};

let reviews;

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
reviewsSwiper.on('transitionStart', checkSwiperStatus);

function checkSwiperStatus() {
  console.log('1', reviewsSwiper.isBeginning);
  if (reviewsSwiper.isBeginning) {
    refs.prevSlideButton.classList.add('reviews-pagination-btn-disabled');
    refs.prevSlideButton.firstElementChild.classList.add(
      'reviews-pagination-icon-disabled'
    );
  } else {
    refs.prevSlideButton.classList.remove('reviews-pagination-btn-disabled');
    refs.prevSlideButton.firstElementChild.classList.remove(
      'reviews-pagination-icon-disabled'
    );
  }

  if (reviewsSwiper.isEnd) {
    refs.nextSlideButton.classList.add('reviews-pagination-btn-disabled');
    refs.nextSlideButton.firstElementChild.classList.add(
      'reviews-pagination-icon-disabled'
    );
  } else {
    refs.nextSlideButton.classList.remove('reviews-pagination-btn-disabled');
    refs.nextSlideButton.firstElementChild.classList.remove(
      'reviews-pagination-icon-disabled'
    );
  }
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
document.addEventListener('keydown', onKeyDown);
refs.prevSlideButton.addEventListener('click', onPrevSlideButtonClick);
refs.nextSlideButton.addEventListener('click', onNextSlideButtonClick);

async function onDocumentLoaded() {
  try {
    reviews = await getReviews();
    renderReviews(reviews);
  } catch (error) {
    iziToast.show({
      title: ':(',
      message: error.message,
    });
    refs.reviewsWrapper.innerHTML = `<h2 class="reviews-error">Not Found...</h2>`;
  }
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
