const blinds = document.getElementById('blinds');
const slatCount = 20;

for (let i = 0; i < slatCount; i++) {
  const slat = document.createElement('div');
  slat.className = 'slat';
  blinds.appendChild(slat);
}
document.addEventListener('DOMContentLoaded', function () {
  const blinds = document.getElementById('blinds');
  const numberOfSlats = 20; // Загальна кількість слатів

  // Видаляємо всі існуючі слати перед створенням нових
  blinds.innerHTML = '';

  // Створюємо слати
  for (let i = 0; i < numberOfSlats; i++) {
    const slat = document.createElement('div');
    slat.className = 'slat';
    slat.style.setProperty('--index', i);
    blinds.appendChild(slat);
  }

  // Встановлюємо CSS змінні для градієнта
  blinds.style.setProperty('--slat-count', numberOfSlats);

  // Додаємо анімацію появи слатів з невеликою затримкою
  setTimeout(() => {
    document.querySelectorAll('.slat').forEach((slat, index) => {
      setTimeout(() => {
        slat.classList.add('show');
      }, index * 100);
    });
  }, 500);
});


