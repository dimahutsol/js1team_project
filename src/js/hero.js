const blinds = document.getElementById('blinds');
const slatCount = 20;

for (let i = 0; i < slatCount; i++) {
  const slat = document.createElement('div');
  slat.className = 'slat';
  blinds.appendChild(slat);
}

 document.addEventListener('DOMContentLoaded', function () {
   const slats = document.querySelectorAll('.slat');
   slats.forEach((slat, index) => {
     const lightness = 30 - index * 3;
     slat.style.background = `hsl(0, 100%, ${lightness}%)`;
     setTimeout(() => {
       slat.classList.add('show');
     }, index * 200);
   });
   document.querySelector('.hero').classList.add('show');
 });
