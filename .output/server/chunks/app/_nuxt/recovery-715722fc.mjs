import { useSSRContext, defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, withModifiers } from 'vue';
import { _ as _export_sfc, V as VForm, n as navigateTo } from '../server.mjs';
import { u as useFetch } from './fetch-ac2e87f5.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'mongoose';
import 'bcrypt';
import 'generate-password';
import 'nodemailer';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'chart.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recovery",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref(null);
    const dataForm = reactive({
      email: ""
    });
    const loading = ref(false);
    const rules = {
      email: [
        (value) => !!value || "El correo es requerido",
        (value) => /.+@.+\..+/.test(value) || "El correo debe ser v\xE1lido"
      ]
    };
    const handleSubmit = async () => {
      loading.value = true;
      const { data, error } = await useFetch("/api/user/recovery", { method: "POST", body: dataForm }, "$3wxDyfUQIw");
      if (data.value) {
        alert("Las credenciales se enviaron a su email");
        navigateTo("/");
      } else {
        alert("El email no existe!");
      }
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_VContainer, mergeProps({ class: "centerDiv" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCard, {
              elevation: "5",
              class: "pa-5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCardTitle, { class: "text-center text-h4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Recuperar contrase\xF1a`);
                      } else {
                        return [
                          createTextVNode("Recuperar contrase\xF1a")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VForm), {
                    ref_key: "form",
                    ref: form,
                    onSubmit: handleSubmit,
                    "fast-fail": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          class: "mt-3",
                          variant: "outlined",
                          modelValue: unref(dataForm).email,
                          "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                          type: "email",
                          label: "Correo",
                          rules: rules.email,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          type: "submit",
                          variant: "tonal",
                          class: "mt-4",
                          color: "primary",
                          width: "400",
                          disabled: unref(loading)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Restablecer`);
                            } else {
                              return [
                                createTextVNode("Restablecer")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            class: "mt-3",
                            variant: "outlined",
                            modelValue: unref(dataForm).email,
                            "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                            type: "email",
                            label: "Correo",
                            rules: rules.email,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_btn, {
                            type: "submit",
                            variant: "tonal",
                            class: "mt-4",
                            color: "primary",
                            width: "400",
                            disabled: unref(loading)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Restablecer")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCardTitle, { class: "text-center text-h4" }, {
                      default: withCtx(() => [
                        createTextVNode("Recuperar contrase\xF1a")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VForm), {
                      ref_key: "form",
                      ref: form,
                      onSubmit: withModifiers(handleSubmit, ["prevent"]),
                      "fast-fail": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          class: "mt-3",
                          variant: "outlined",
                          modelValue: unref(dataForm).email,
                          "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                          type: "email",
                          label: "Correo",
                          rules: rules.email,
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_v_btn, {
                          type: "submit",
                          variant: "tonal",
                          class: "mt-4",
                          color: "primary",
                          width: "400",
                          disabled: unref(loading)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Restablecer")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VCard, {
                elevation: "5",
                class: "pa-5"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VCardTitle, { class: "text-center text-h4" }, {
                    default: withCtx(() => [
                      createTextVNode("Recuperar contrase\xF1a")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VForm), {
                    ref_key: "form",
                    ref: form,
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    "fast-fail": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        class: "mt-3",
                        variant: "outlined",
                        modelValue: unref(dataForm).email,
                        "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                        type: "email",
                        label: "Correo",
                        rules: rules.email,
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_btn, {
                        type: "submit",
                        variant: "tonal",
                        class: "mt-4",
                        color: "primary",
                        width: "400",
                        disabled: unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Restablecer")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }, 8, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4aee07bc"]]);

export { recovery as default };
//# sourceMappingURL=recovery-715722fc.mjs.map
