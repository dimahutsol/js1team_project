import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const blinds = document.getElementById('blinds');
const slatCount = 20;

for (let i = 0; i < slatCount; i++) {
  const slat = document.createElement('div');
  slat.className = 'slat';
  blinds.appendChild(slat);
}
document.addEventListener('DOMContentLoaded', function () {
  const blinds = document.getElementById('blinds');
  const numberOfSlats = 20;

  blinds.innerHTML = '';

  for (let i = 0; i < numberOfSlats; i++) {
    const slat = document.createElement('div');
    slat.className = 'slat';
    slat.style.setProperty('--index', i);
    blinds.appendChild(slat);
  }

  blinds.style.setProperty('--slat-count', numberOfSlats);

  setTimeout(() => {
    document.querySelectorAll('.slat').forEach((slat, index) => {
      setTimeout(() => {
        slat.classList.add('show');
      }, index * 100);
    });
  }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');

  if (heroTitle) {
    const originalText = heroTitle.textContent;
    const alternateText = 'what is the text?';

    heroTitle.addEventListener('mouseenter', () => {
      gsap.to(heroTitle, {
        duration: 2,
        text: alternateText,
        ease: 'none',
      });
    });

    heroTitle.addEventListener('mouseleave', () => {
      gsap.to(heroTitle, {
        duration: 2,
        text: originalText,
        ease: 'none',
      });
    });
  }
});
