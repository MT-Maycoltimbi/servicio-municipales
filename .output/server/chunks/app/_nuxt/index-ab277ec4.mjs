import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { useSSRContext, defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, withModifiers } from 'vue';
import { _ as _export_sfc, a as useAuth, V as VForm, n as navigateTo } from '../server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref(null);
    const dataForm = reactive({
      email: "",
      password: ""
    });
    const loading = ref(false);
    const rules = {
      email: [
        (value) => !!value || "El correo es requerido",
        (value) => /.+@.+\..+/.test(value) || "El correo debe ser v\xE1lido"
      ],
      password: [
        (value) => !!value || "La contrase\xF1a es requerida",
        (value) => value && value.length >= 8 || "La contrase\xF1a debe tener al menos 8 caracteres"
      ]
    };
    const { data, signIn } = useAuth();
    const handleSubmit = async () => {
      loading.value = true;
      await signIn("credentials", { ...dataForm, redirect: false });
      if (data.value) {
        navigateTo("/admin");
      } else {
        alert("Credenciales incorrectas!");
      }
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_VRow = resolveComponent("VRow");
      const _component_NuxtLink = __nuxt_component_0;
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
                        _push4(`Inicio de sesion`);
                      } else {
                        return [
                          createTextVNode("Inicio de sesion")
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
                          variant: "outlined",
                          modelValue: unref(dataForm).email,
                          "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                          type: "email",
                          label: "Correo",
                          rules: rules.email,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      variant: "outlined",
                                      class: "mt-3",
                                      type: "password",
                                      modelValue: unref(dataForm).password,
                                      "onUpdate:modelValue": ($event) => unref(dataForm).password = $event,
                                      rules: rules.password,
                                      label: "Contrase\xF1a",
                                      required: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        variant: "outlined",
                                        class: "mt-3",
                                        type: "password",
                                        modelValue: unref(dataForm).password,
                                        "onUpdate:modelValue": ($event) => unref(dataForm).password = $event,
                                        rules: rules.password,
                                        label: "Contrase\xF1a",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VRow, { justify: "end" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NuxtLink, { to: "/recovery" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\xBFOlvid\xF3 su contrase\xF1a?`);
                                        } else {
                                          return [
                                            createTextVNode("\xBFOlvid\xF3 su contrase\xF1a?")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NuxtLink, { to: "/recovery" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\xBFOlvid\xF3 su contrase\xF1a?")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      variant: "outlined",
                                      class: "mt-3",
                                      type: "password",
                                      modelValue: unref(dataForm).password,
                                      "onUpdate:modelValue": ($event) => unref(dataForm).password = $event,
                                      rules: rules.password,
                                      label: "Contrase\xF1a",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VRow, { justify: "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, { to: "/recovery" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\xBFOlvid\xF3 su contrase\xF1a?")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                              _push5(`Iniciar sesi\xF3n`);
                            } else {
                              return [
                                createTextVNode("Iniciar sesi\xF3n")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            variant: "outlined",
                            modelValue: unref(dataForm).email,
                            "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                            type: "email",
                            label: "Correo",
                            rules: rules.email,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_VContainer, null, {
                            default: withCtx(() => [
                              createVNode(_component_VRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    variant: "outlined",
                                    class: "mt-3",
                                    type: "password",
                                    modelValue: unref(dataForm).password,
                                    "onUpdate:modelValue": ($event) => unref(dataForm).password = $event,
                                    rules: rules.password,
                                    label: "Contrase\xF1a",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VRow, { justify: "end" }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, { to: "/recovery" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\xBFOlvid\xF3 su contrase\xF1a?")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            type: "submit",
                            variant: "tonal",
                            class: "mt-4",
                            color: "primary",
                            width: "400",
                            disabled: unref(loading)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Iniciar sesi\xF3n")
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
                        createTextVNode("Inicio de sesion")
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
                          variant: "outlined",
                          modelValue: unref(dataForm).email,
                          "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                          type: "email",
                          label: "Correo",
                          rules: rules.email,
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_VContainer, null, {
                          default: withCtx(() => [
                            createVNode(_component_VRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  variant: "outlined",
                                  class: "mt-3",
                                  type: "password",
                                  modelValue: unref(dataForm).password,
                                  "onUpdate:modelValue": ($event) => unref(dataForm).password = $event,
                                  rules: rules.password,
                                  label: "Contrase\xF1a",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VRow, { justify: "end" }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, { to: "/recovery" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\xBFOlvid\xF3 su contrase\xF1a?")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          type: "submit",
                          variant: "tonal",
                          class: "mt-4",
                          color: "primary",
                          width: "400",
                          disabled: unref(loading)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Iniciar sesi\xF3n")
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
                      createTextVNode("Inicio de sesion")
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
                        variant: "outlined",
                        modelValue: unref(dataForm).email,
                        "onUpdate:modelValue": ($event) => unref(dataForm).email = $event,
                        type: "email",
                        label: "Correo",
                        rules: rules.email,
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_VContainer, null, {
                        default: withCtx(() => [
                          createVNode(_component_VRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                variant: "outlined",
                                class: "mt-3",
                                type: "password",
                                modelValue: unref(dataForm).password,
                                "onUpdate:modelValue": ($event) => unref(dataForm).password = $event,
                                rules: rules.password,
                                label: "Contrase\xF1a",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VRow, { justify: "end" }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, { to: "/recovery" }, {
                                default: withCtx(() => [
                                  createTextVNode("\xBFOlvid\xF3 su contrase\xF1a?")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        type: "submit",
                        variant: "tonal",
                        class: "mt-4",
                        color: "primary",
                        width: "400",
                        disabled: unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Iniciar sesi\xF3n")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94c97baf"]]);

export { index as default };
//# sourceMappingURL=index-ab277ec4.mjs.map
