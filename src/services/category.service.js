import api from './api';

class CategorySevice {
    get() {
        return api.get('/categories');
    }

}

export default new CategorySevice();