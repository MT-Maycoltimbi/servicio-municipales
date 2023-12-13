import { d as defineStore, s as storeToRefs } from '../server.mjs';
import { useSSRContext, defineComponent, resolveComponent, unref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const useErrorStore = defineStore("error", {
  state: () => ({
    error: null
  }),
  actions: {
    resetError() {
      this.error = null;
    },
    setError(payload) {
      this.error = payload;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Error",
  __ssrInlineRender: true,
  setup(__props) {
    const errorStore = useErrorStore();
    const { error } = storeToRefs(errorStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VAlert = resolveComponent("VAlert");
      const _component_VBtn = resolveComponent("VBtn");
      if (unref(error)) {
        _push(ssrRenderComponent(_component_VAlert, mergeProps({
          color: "error",
          text: unref(error)
        }, _attrs), {
          append: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_VBtn, {
                variant: "text",
                icon: "mdi-close",
                onClick: ($event) => unref(errorStore).resetError()
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_VBtn, {
                  variant: "text",
                  icon: "mdi-close",
                  onClick: ($event) => unref(errorStore).resetError()
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useErrorStore as u };
//# sourceMappingURL=Error-ca355657.mjs.map
