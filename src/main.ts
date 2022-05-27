import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { uploadCache } from './store';

import regester from './global';
import '@/assets/css/main.scss';
// import '@/service/axios_demo';

import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-loading.css';

const app = createApp(App);
app.use(store);
app.use(router);

app.use(regester);

app.mount('#app');
// vuex 状态初始化
uploadCache();
