const section = {
  cards1: document.querySelectorAll('.marquee__card1'),
  cards2: document.querySelectorAll('.marquee__card2'),
  covers: document.querySelector('.covers'),
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const animationCovers = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.cards1.forEach(card => {
        card.classList.add('line1');
      });
      section.cards2.forEach(card => {
        card.classList.add('line2');
      });
      return;
    }
    section.cards1.forEach(card => {
      card.classList.remove('line1');
    });
    section.cards2.forEach(card => {
      card.classList.remove('line2');
    });
  });
};

const observer = new IntersectionObserver(animationCovers, options);
observer.observe(section.covers);
