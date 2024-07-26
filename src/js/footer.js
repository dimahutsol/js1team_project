import axios from 'axios';
import { showModal } from './modal';

const refs = {
  formFooter: document.querySelector('.js-form-footer'),
  sendBtnFooter: document.querySelector('.js-btn-footer'),
};

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

refs.formFooter.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(refs.formFooter);
  const email = formData.get('email');
  const comment = formData.get('comment');

  try {
    const response = await axios.post('/api-docs', {
      email,
      comment,
    });

    if (response.status !== 200) {
      throw new Error('Server error');
    }

    refs.formFooter.reset();
    showModal();
  } catch (error) {
    alert(
      'Error: ' + error.message + '. Please check your input and try again.'
    );
  }
});
