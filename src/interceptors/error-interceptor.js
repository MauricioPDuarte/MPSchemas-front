import Vue from 'vue';
import router from '../router';
import store from '../store';

export default (error) => {
    const statusCode = error.response ? error.response.status : null;
    const { message } = error.response.data; 

    switch(statusCode){
        case 404:
            console.log('404');
            break;
        case 401: 
            if(message){
                Vue.toasted.error(message, {duration: 5000, iconPack: 'fontawesome', icon: 'exclamation-triangle'  });
            }else {
                store.dispatch('auth/logout');
                router.push('/login');
            }
            break;
        case 403:
            
            break;
        default: 
            console.log('error padrao');

            
    }
}

