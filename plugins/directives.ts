import Vue from 'vue';

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    // @ts-ignore
    el.clickOutsideEvent = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      const isClickOutside = path ? !path.includes(el) : !el.contains(event.target);

      if (isClickOutside) {
      // @ts-ignore
        vnode.context[binding.expression](event);
      }
    };
    // @ts-ignore
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    // @ts-ignore
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});

Vue.directive('focus', {
  inserted: (el) => {
    el.focus();
  }
});
