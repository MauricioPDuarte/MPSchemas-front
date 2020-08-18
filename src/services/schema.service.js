import api from './api';

class SchemaSevice {
    getSchemas() {
        return api.get('/schemas');
    }
}

export default new SchemaSevice();

