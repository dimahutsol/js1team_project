const refs = {
  closeModalBtn: document.querySelector('.btnCloseModal'),
  backdrop: document.querySelector('.backdrop'),
  titleModal: document.querySelector('.title-modal'),
  textModal: document.querySelector('.text-modal'),
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

export function showModal({ title, message }) {
  refs.titleModal.innerHTML = title;
  refs.textModal.innerHTML = message;
  refs.backdrop.classList.add('is-open');
}
function closeModal() {
  refs.backdrop.classList.remove('is-open');
}
