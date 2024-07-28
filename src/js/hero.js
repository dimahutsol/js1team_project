const slatCount = 20;

function createSlats() {
  const blinds = document.getElementById('blinds');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < slatCount; i++) {
    const slat = document.createElement('div');
    slat.className = 'slat';
    slat.style.setProperty('--index', i);
    fragment.appendChild(slat);
  }

  blinds.innerHTML = '';
  blinds.appendChild(fragment);
  blinds.style.setProperty('--slat-count', slatCount);
}

export function onDomLoadedAnimation() {
  createSlats();

  setTimeout(() => {
    const slats = document.querySelectorAll('.slat');
    slats.forEach((slat, index) => {
      setTimeout(() => {
        slat.classList.add('show');
      }, index * 100);
    });
  }, 500);
}

document.addEventListener('DOMContentLoaded', onDomLoadedAnimation);
