import axios from 'axios';

export default class RequestUtil {
  static post(data, url, successMessage) {
    axios
      .post(`${process.env.GATSBY_BACKEND_URL}/${url}`, data)
      .then((res) => {
        alert(successMessage || 'the message sent!');
      })
      .catch((err) => {
        console.log(err);
        alert('there is some error, please try again later');
      });
  }

  static async postAsync(data, url) {
    return axios.post(`${process.env.GATSBY_BACKEND_URL}/${url}`, data);

  }
}
