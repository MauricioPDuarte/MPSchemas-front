import api from './api';

class AuthService {
    login(user) {
        return api.post("/sessions", user)
            .then(
                (response) => {
                if (response && response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }

                return response.data;
            }).catch(error => {
                return Promise.reject(error);
            })
    }

    logout() {
        localStorage.removeItem('user');
    }

}

export default new AuthService();