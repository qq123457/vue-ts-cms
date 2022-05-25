let BASE_URL = '';
const TIME_OUT = 10000;
// 根据当前环境配置不同的请求BASE_URL
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:4000';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:4000';
} else {
  BASE_URL = '';
}

export { BASE_URL, TIME_OUT };
