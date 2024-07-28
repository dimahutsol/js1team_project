// Sections animation
// let blocks = document.querySelectorAll('.section-animation');

// function checkBlocksVisibility() {
//   let windowHeight = window.innerHeight;

//   blocks.forEach((block, index) => {
//     let blockPosition = block.getBoundingClientRect().top;
//     if (blockPosition < windowHeight - 100) {
//       block.style.opacity = '1';
//       block.style.transform = 'translateY(0)';
//     }
//   });
// }

// checkBlocksVisibility();

// window.addEventListener('scroll', checkBlocksVisibility);

// function animateBlock(entry, index) {
//   const block = entry.target;

//   if (alreadyAnimated.has(block)) return;

//   // Використовуємо translateZ(0) для активації апаратного прискорення
//   block.style.willChange = 'transform, opacity';
//   block.style.opacity = '1';
//   if (index % 2 === 0) {
//     block.classList.add('animate__animated', 'animate__fadeInBottomLeft');
//   } else {
//     block.classList.add('animate__animated', 'animate__fadeInBottomRight');
//   }

//   alreadyAnimated.add(block);
//   observer.unobserve(block); // Stop observing the block once it's animated
// }

// let observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         let index = Array.from(blocks).indexOf(entry.target);
//         animateBlock(entry, index);
//       }
//     });
//   },
//   {
//     threshold: 0.1, // Adjust as needed, 0.1 means the block is 10% visible
//   }
// );

// blocks.forEach(block => {
//   observer.observe(block);
// });

//

let blocks = document.querySelectorAll('.section-animation');

function checkBlocksVisibility() {
  let windowHeight = window.innerHeight;

  blocks.forEach(block => {
    let blockPosition = block.getBoundingClientRect().top;
    if (blockPosition < windowHeight - 100) {
      block.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkBlocksVisibility);
window.addEventListener('resize', checkBlocksVisibility);
document.addEventListener('DOMContentLoaded', checkBlocksVisibility);

// Smooth scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  });
});
//
