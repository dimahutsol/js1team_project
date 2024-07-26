const refs = {
  closeModalBtn: document.querySelector('.btnCloseModal'),
  backdrop: document.querySelector('.backdrop'),
};

refs.closeModalBtn.addEventListener('click', () => {
  closeModal();
});

window.addEventListener('click', e => {
  if (e.target === refs.backdrop) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

export function showModal() {
  refs.backdrop.classList.add('is-open');
}
function closeModal() {
  refs.backdrop.classList.remove('is-open');
}
