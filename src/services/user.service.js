import api from './api';

class UserService {
  register(user) {
    return api.post('/users', user)
    .catch((err) => {
      return Promise.reject(err);
    })
  }
}

export default new UserService();