import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-me-ac-list', {
    duration: 600,
    collapse: true,
    openOnInit: [0],
    showMultiple: true,
  });

  document.querySelectorAll('.about-me-ac-button').forEach(button => {
    button.addEventListener('click', function() {
      const acItem = this.closest('.ac');
      acItem.classList.toggle('closed');
      this.querySelector('.about-me-slider-arrow').classList.toggle('rotate-180');
    });
  });
  

  
  