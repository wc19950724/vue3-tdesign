import 'tdesign-vue-next/es/style/index.css';
import '@/styles/index.less';
import './permission';

import TDesign from 'tdesign-vue-next';
import {
    createApp,
} from 'vue';

import App from './App.vue';
import router from './router';
import {
    store,
} from './store';

const app = createApp(App);

app.use(TDesign);
app.use(router);
app.use(store);

app.mount('#app');
