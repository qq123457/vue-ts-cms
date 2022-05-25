import WKRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const wkRequest = new WKRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 拦截请求，并添加token
      const token = '';
      if (token) {
        if (config.headers) config.headers.Authorization = `Bearer`;
      }
      return config;
    }
  }
});
export default wkRequest;
