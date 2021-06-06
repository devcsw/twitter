export default class AuthService {
  async login(username, password) {
    return {
      username: 'devcsw',
      token: 'abc1234',
    };
  }

  async me() {
    return {
      username: 'devcsw',
      token: 'abc1234',
    };
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    return {
      username: 'devcsw',
      token: 'abc1234',
    };
  }
}
