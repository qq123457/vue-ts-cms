import type { AxiosRequestConfig } from 'axios';

// 拦截器hooks类型
export interface WKRequestHookInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseIntercepotr?: (res: any) => any;
  responseIntercepotrCatch?: (error: any) => any;
}
// 给配置扩展拦截器hooks
export interface WKRequestConfig extends AxiosRequestConfig {
  interceptors?: WKRequestHookInterceptors;
  showLoading?: boolean;
}
