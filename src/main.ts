import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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

// console.log(process.env.VUE_APP_BASE_URL);
import wkRequest from './service';
interface DataType {
  args: any;
  headers: any;
  origin: any;
  url: any;
}
wkRequest
  .request<DataType>({
    baseURL: 'http://httpbin.org/get?acwink=123',
    showLoading: false
  })
  .then((res) => {
    console.log(res.args);
    console.log(res.url);
  });
