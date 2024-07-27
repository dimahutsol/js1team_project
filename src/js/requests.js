import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReviews() {
  const result = await axios.get('/reviews');
  return result.data;
}
export async function postComment(data) {
  const result = await axios.post('/requests', data);
  return result.data;
}
