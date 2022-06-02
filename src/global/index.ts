import { App } from 'vue';
import regesterDirectives from './register-directive';
// 用于注册全局组件
function regester(app: App) {
  // console.log(app);
  app.use(regesterDirectives);
}

export default regester;
