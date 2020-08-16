import axios from 'axios';

class AuthService {
    login(user) {
        return axios
            .post("https://localhost:44357/sessions", user)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('user', JSON.stringify(res.data));
                }

                return res.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

}

export default new AuthService();