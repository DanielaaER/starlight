import axios from 'axios';

const API_URL = 'https://apigraphqlecommerce-service-leo-oh.cloud.okteto.net/graphql';

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + 'users/signin', {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
