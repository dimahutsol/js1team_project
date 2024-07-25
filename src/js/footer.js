const refs = {
  formFooter: document.querySelector('.js-form-footer'),
  sendBtnFooter: document.querySelector('.js-btn-footer'),
};

refs.formFooter.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(refs.formFooter);
  console.log(formData);
  const email = formData.get('email');
  const comment = formData.get('comment');

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api-docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, comment }),
    });

    if (!response.ok) {
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
