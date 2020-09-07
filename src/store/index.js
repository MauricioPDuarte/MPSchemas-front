import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import notifier from '../plugins/notifier';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
    },
    plugins:[
        notifier
    ]
});