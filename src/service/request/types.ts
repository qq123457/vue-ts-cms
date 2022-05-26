import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// 拦截器hooks类型
export interface WKRequestHookInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseIntercepotr?: (res: T) => T;
  responseIntercepotrCatch?: (error: any) => any;
}
// 给配置扩展拦截器hooks
export interface WKRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WKRequestHookInterceptors<T>;
  showLoading?: boolean;
}
