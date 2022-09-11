/**
 * Директива для обнаружения события клика вне элемента
 * Использование v-click-outside="handler"
 */
export default {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      const isClickOutside = path ? !path.includes(el) : !el.contains(event.target);

      if (isClickOutside) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
};
