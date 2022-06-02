import { App } from 'vue';
import { IDirective } from './types';

const directives: IDirective[] = [
  {
    directiveName: 'fm-date',
    directiveLifeCycle: {
      created(el: Element, binding, vnode, prevVnode) {
        const formatPattern = binding.value ?? 'YYYY/MM/DD';

        if (el.textContent !== null) {
          const dateStr = el.textContent;
          const date = new Date(dateStr);
          const year = `${date.getFullYear()}`.padStart(4, '0');
          const month = `${date.getMonth() + 1}`.padStart(2, '0');
          const day = `${date.getDate()}`.padStart(2, '0');
          el.textContent = `${year}/${month}/${day}`;
        }
      }
    }
  }
];

function regesterDirectives(app: App) {
  directives.forEach((directive) =>
    app.directive(directive.directiveName, directive.directiveLifeCycle)
  );
}

export default regesterDirectives;
