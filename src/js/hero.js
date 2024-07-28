const blinds = document.getElementById('blinds');
const slatCount = 20;

for (let i = 0; i < slatCount; i++) {
  const slat = document.createElement('div');
  slat.className = 'slat';
  blinds.appendChild(slat);
}
document.addEventListener('DOMContentLoaded', onDomLoadedAnimation);

export function onDomLoadedAnimation() {
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
}
