import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { WKRequestConfig, WKRequestHookInterceptors } from './types';
import { ElLoading } from 'element-plus';
import 'element-plus/theme-chalk/el-loading.css';
const DEFAULT_LOADING = false;
// axios的封装类
class WKRequest {
  instance: AxiosInstance;
  interceptors?: WKRequestHookInterceptors;
  loading?: any;
  showLoading: boolean;

  constructor(config: WKRequestConfig) {
    // 保存基本信息
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    // 后添加的拦截器先执行
    // 拦截器应用
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseIntercepotr,
      this.interceptors?.responseIntercepotrCatch
    );

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有示例共有请求拦截');
        // 创建loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0,0,0,0.5)'
          });
        }

        return config;
      },
      (error) => {
        console.log('所有实例共有的请求失败拦截');
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例共有的响应拦截器');
        // 关闭loading
        if (this.showLoading) {
          this.loading.close();
        }
        const data = res.data;
        // 在data中的响应状态码
        if (data.returnCode === '-1010') {
          console.log('请求失败~，错误信息');
        } else {
          return data;
        }
        // return res;
      },
      (error) => {
        console.log('所有实例共有的响应失败拦截器');
        this.loading.close();
        // HttpErrorCode
        if (error.response.status === 404) {
          console.log('404错误');
        }

        return error;
      }
    );
  }

  // 此处应该返回一个Promise, T 为Promise resolve 返回的类型
  request<T>(config: WKRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // 单个请求共有的响应拦截器
      if (config.interceptors?.requestInterceptor)
        config = config.interceptors?.requestInterceptor(config);

      // 当showLoading有值，或显示 则设置
      if (config.showLoading) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求自有的响应拦截器器
          if (config.interceptors?.responseIntercepotr)
            res = config.interceptors.responseIntercepotr(res);
          // 响应完成后将showLoading恢复默认值
          this.showLoading = DEFAULT_LOADING;
          // 将结果返回
          resolve(res);
        })
        .catch((err) => {
          // 将值设置成初始化值
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }

  get<T>(config: WKRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T>(config: WKRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T>(config: WKRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  patch<T>(config: WKRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default WKRequest;
