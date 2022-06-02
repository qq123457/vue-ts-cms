export interface IDirective {
  directiveName: string;
  directiveLifeCycle: {
    created?: (el: any, binding: any, vnode: any, prevVnode: any) => void;
    beforeMount?: (el: any, binding: any, vnode: any, prevVnode: any) => void;
    mounted?: (el: any, binding: any, vnode: any, prevVnode: any) => void;
    beforeUpdate?: (el: any, binding: any, vnode: any, prevVnode: any) => void;
    beforeUnmount?: (el: any, binding: any, vnode: any, prevVnode: any) => void;
    unmounted?: (el: any, binding: any, vnode: any, prevVnode: any) => void;
  };
}
