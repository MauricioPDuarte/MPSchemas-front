import api from './api';

class SchemaSevice {
    get() {
        return api.get('/schemas');
    }

    getByUser() {
        return api.get(`/schemas/me`);
    }

    insert(data) {
        return api.post('/schemas', data);
    }

    delete(id) {
        return api.delete(`/schemas/${id}`);
    }
}

export default new SchemaSevice();

