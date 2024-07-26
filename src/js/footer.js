import { showModal } from './modal';
import { postComment } from './requests';

const refs = {
  formFooter: document.querySelector('.js-form-footer'),
  sendBtnFooter: document.querySelector('.js-btn-footer'),
  emailInput: document.querySelector('.js-email-input'),
  emailMessage: document.querySelector('.js-email-message'),
};

function validateEmail() {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const email = refs.emailInput.value;
  if (pattern.test(email)) {
    refs.emailInput.classList.remove('invalid');
    refs.emailInput.classList.add('valid');
    refs.emailMessage.textContent = 'Success!';
    refs.emailMessage.classList.remove('error');
    refs.emailMessage.classList.add('success');
  } else {
    refs.emailInput.classList.remove('valid');
    refs.emailInput.classList.add('invalid');
    refs.emailMessage.textContent = 'Invalid email, try again';
    refs.emailMessage.classList.remove('success');
    refs.emailMessage.classList.add('error');
  }
}

refs.emailInput.addEventListener('input', validateEmail);

refs.formFooter.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(refs.formFooter);
  const email = formData.get('email');
  const comment = formData.get('comment');

  try {
    const response = await postComment({
      email,
      comment,
    });

    if (!response) {
      throw new Error('Server error');
    }

    refs.formFooter.reset();
    refs.emailInput.classList.remove('valid', 'invalid');
    refs.emailMessage.textContent = '';

    refs.formFooter.reset();
    showModal(response);
  } catch (error) {
    alert(
      'Error: ' + error.message + '. Please check your input and try again.'
    );
  }
});
