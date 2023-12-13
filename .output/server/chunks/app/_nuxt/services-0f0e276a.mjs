import { u as useServiceStore } from './service-f0201810.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, createVNode, unref, isRef, withAsyncContext, mergeProps, openBlock, createBlock, Fragment, renderList, toDisplayString, ref, reactive, computed, onUnmounted, createTextVNode, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs, V as VForm } from '../server.mjs';
import { e as exportXSLX } from './index-df451aa9.mjs';
import './fetch-ac2e87f5.mjs';
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
import 'moment';
import 'stream';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableServices",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const serviceStore = useServiceStore();
    const { services } = storeToRefs(serviceStore);
    [__temp, __restore] = withAsyncContext(() => serviceStore.getServices()), await __temp, __restore();
    const editService = (service) => {
      serviceStore.setCurrent(service);
      serviceStore.setShowForm(true);
    };
    const confirmService = (service) => {
      serviceStore.setCurrent(service);
      serviceStore.setShowConfirm(true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VTable = resolveComponent("VTable");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VTable, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th${_scopeId2}>Nombre</th><th${_scopeId2}>Descripci\xF3n</th><th${_scopeId2}>Acciones</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(services), (i) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(i.name)}</td><td${_scopeId2}>${ssrInterpolate(i.description)}</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-eye",
                      color: "warning",
                      variant: "text",
                      title: "Editar",
                      onClick: ($event) => editService(i)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-delete",
                      color: "error",
                      variant: "text",
                      title: "Eliminar",
                      onClick: ($event) => confirmService(i)
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", null, "Nombre"),
                        createVNode("th", null, "Descripci\xF3n"),
                        createVNode("th", null, "Acciones")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(services), (i) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", null, toDisplayString(i.name), 1),
                          createVNode("td", null, toDisplayString(i.description), 1),
                          createVNode("td", null, [
                            createVNode(_component_VBtn, {
                              icon: "mdi-eye",
                              color: "warning",
                              variant: "text",
                              title: "Editar",
                              onClick: ($event) => editService(i)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_VBtn, {
                              icon: "mdi-delete",
                              color: "error",
                              variant: "text",
                              title: "Eliminar",
                              onClick: ($event) => confirmService(i)
                            }, null, 8, ["onClick"])
                          ])
                        ]);
                      }), 256))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VTable, null, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "Nombre"),
                      createVNode("th", null, "Descripci\xF3n"),
                      createVNode("th", null, "Acciones")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(services), (i) => {
                      return openBlock(), createBlock("tr", null, [
                        createVNode("td", null, toDisplayString(i.name), 1),
                        createVNode("td", null, toDisplayString(i.description), 1),
                        createVNode("td", null, [
                          createVNode(_component_VBtn, {
                            icon: "mdi-eye",
                            color: "warning",
                            variant: "text",
                            title: "Editar",
                            onClick: ($event) => editService(i)
                          }, null, 8, ["onClick"]),
                          createVNode(_component_VBtn, {
                            icon: "mdi-delete",
                            color: "error",
                            variant: "text",
                            title: "Eliminar",
                            onClick: ($event) => confirmService(i)
                          }, null, 8, ["onClick"])
                        ])
                      ]);
                    }), 256))
                  ])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableServices.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormService",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const serviceStore = useServiceStore();
    const { loading, current } = storeToRefs(serviceStore);
    const formData = reactive({
      name: "",
      description: ""
    });
    const rules = {
      required: [
        (value) => !!value || "campo requerido!"
      ]
    };
    const title = computed(() => current.value ? "Editar" : "Agregar");
    const handleSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        if (current.value) {
          await serviceStore.update({ ...formData, _id: current.value._id });
        } else {
          await serviceStore.create(formData);
        }
      }
    };
    const cancel = () => {
      serviceStore.setShowForm(false);
    };
    onUnmounted(() => {
      serviceStore.setCurrent(null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardTitle, { class: "text-center text-h4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(title))} Servicio `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(title)) + " Servicio ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VForm), {
                    ref_key: "formRef",
                    ref: formRef,
                    onSubmit: handleSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VTextField, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          variant: "outlined",
                          label: "Nombre",
                          rules: rules.required
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VTextField, {
                          class: "mt-1",
                          modelValue: unref(formData).description,
                          "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                          variant: "outlined",
                          label: "Descripci\xF3n",
                          rules: rules.required
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VBtn, {
                          class: "mt-4",
                          variant: "tonal",
                          type: "submit",
                          loading: unref(loading),
                          block: "",
                          color: "primary",
                          text: "Guardar"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VBtn, {
                          class: "mt-2",
                          variant: "tonal",
                          disabled: unref(loading),
                          color: "error",
                          block: "",
                          onClick: cancel,
                          text: "Cancelar"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VTextField, {
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            variant: "outlined",
                            label: "Nombre",
                            rules: rules.required
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_VTextField, {
                            class: "mt-1",
                            modelValue: unref(formData).description,
                            "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                            variant: "outlined",
                            label: "Descripci\xF3n",
                            rules: rules.required
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_VBtn, {
                            class: "mt-4",
                            variant: "tonal",
                            type: "submit",
                            loading: unref(loading),
                            block: "",
                            color: "primary",
                            text: "Guardar"
                          }, null, 8, ["loading"]),
                          createVNode(_component_VBtn, {
                            class: "mt-2",
                            variant: "tonal",
                            disabled: unref(loading),
                            color: "error",
                            block: "",
                            onClick: cancel,
                            text: "Cancelar"
                          }, null, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VForm), {
                      ref_key: "formRef",
                      ref: formRef,
                      onSubmit: withModifiers(handleSubmit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VTextField, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          variant: "outlined",
                          label: "Nombre",
                          rules: rules.required
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_VTextField, {
                          class: "mt-1",
                          modelValue: unref(formData).description,
                          "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                          variant: "outlined",
                          label: "Descripci\xF3n",
                          rules: rules.required
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_VBtn, {
                          class: "mt-4",
                          variant: "tonal",
                          type: "submit",
                          loading: unref(loading),
                          block: "",
                          color: "primary",
                          text: "Guardar"
                        }, null, 8, ["loading"]),
                        createVNode(_component_VBtn, {
                          class: "mt-2",
                          variant: "tonal",
                          disabled: unref(loading),
                          color: "error",
                          block: "",
                          onClick: cancel,
                          text: "Cancelar"
                        }, null, 8, ["disabled"])
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
              createVNode(_component_VCardTitle, { class: "text-center text-h4" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(title)) + " Servicio ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_VCardText, null, {
                default: withCtx(() => [
                  createVNode(unref(VForm), {
                    ref_key: "formRef",
                    ref: formRef,
                    onSubmit: withModifiers(handleSubmit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VTextField, {
                        modelValue: unref(formData).name,
                        "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                        variant: "outlined",
                        label: "Nombre",
                        rules: rules.required
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_VTextField, {
                        class: "mt-1",
                        modelValue: unref(formData).description,
                        "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                        variant: "outlined",
                        label: "Descripci\xF3n",
                        rules: rules.required
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_VBtn, {
                        class: "mt-4",
                        variant: "tonal",
                        type: "submit",
                        loading: unref(loading),
                        block: "",
                        color: "primary",
                        text: "Guardar"
                      }, null, 8, ["loading"]),
                      createVNode(_component_VBtn, {
                        class: "mt-2",
                        variant: "tonal",
                        disabled: unref(loading),
                        color: "error",
                        block: "",
                        onClick: cancel,
                        text: "Cancelar"
                      }, null, 8, ["disabled"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormService.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmService",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceStore = useServiceStore();
    const { current, loading } = storeToRefs(serviceStore);
    const cancel = () => {
      serviceStore.setShowConfirm(false);
    };
    const confirm = async () => {
      await serviceStore.delete(current.value._id);
    };
    onUnmounted(() => {
      serviceStore.setCurrent(null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VCardActions = resolveComponent("VCardActions");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardTitle, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Eliminar servicio `);
                } else {
                  return [
                    createTextVNode(" Eliminar servicio ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(` \xBFEst\xE1s seguro de eliminar el servicio ${ssrInterpolate((_a = unref(current)) == null ? void 0 : _a.name)}? `);
                } else {
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar el servicio " + toDisplayString((_b = unref(current)) == null ? void 0 : _b.name) + "? ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCardActions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VBtn, {
                    variant: "tonal",
                    text: "Cancelar",
                    onClick: cancel,
                    disabled: unref(loading),
                    color: "error"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VBtn, {
                    variant: "tonal",
                    text: "Confirmar",
                    onClick: confirm,
                    loading: unref(loading),
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VSpacer),
                    createVNode(_component_VBtn, {
                      variant: "tonal",
                      text: "Cancelar",
                      onClick: cancel,
                      disabled: unref(loading),
                      color: "error"
                    }, null, 8, ["disabled"]),
                    createVNode(_component_VBtn, {
                      variant: "tonal",
                      text: "Confirmar",
                      onClick: confirm,
                      loading: unref(loading),
                      color: "primary"
                    }, null, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VCardTitle, { class: "text-center" }, {
                default: withCtx(() => [
                  createTextVNode(" Eliminar servicio ")
                ]),
                _: 1
              }),
              createVNode(_component_VCardText, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar el servicio " + toDisplayString((_a = unref(current)) == null ? void 0 : _a.name) + "? ", 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_VCardActions, null, {
                default: withCtx(() => [
                  createVNode(_component_VSpacer),
                  createVNode(_component_VBtn, {
                    variant: "tonal",
                    text: "Cancelar",
                    onClick: cancel,
                    disabled: unref(loading),
                    color: "error"
                  }, null, 8, ["disabled"]),
                  createVNode(_component_VBtn, {
                    variant: "tonal",
                    text: "Confirmar",
                    onClick: confirm,
                    loading: unref(loading),
                    color: "primary"
                  }, null, 8, ["loading"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceStore = useServiceStore();
    const { showForm, showConfirm, servicesReportXLSX } = storeToRefs(serviceStore);
    const toShowForm = () => {
      serviceStore.setShowForm(true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_TableServices = _sfc_main$3;
      const _component_VDialog = resolveComponent("VDialog");
      const _component_FormService = _sfc_main$2;
      const _component_ConfirmService = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center text-h3"${_scopeId3}>Servicios</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center text-h3" }, "Servicios")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center text-h3" }, "Servicios")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VBtn, {
                          color: "success",
                          icon: "mdi-plus",
                          onClick: ($event) => toShowForm()
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            color: "success",
                            icon: "mdi-plus",
                            onClick: ($event) => toShowForm()
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VBtn, {
                          color: "success",
                          icon: "mdi-file-excel",
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(servicesReportXLSX), "servicios")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            color: "success",
                            icon: "mdi-file-excel",
                            onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(servicesReportXLSX), "servicios")
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          color: "success",
                          icon: "mdi-plus",
                          onClick: ($event) => toShowForm()
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VSpacer),
                    createVNode(_component_VCol, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          color: "success",
                          icon: "mdi-file-excel",
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(servicesReportXLSX), "servicios")
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableServices, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableServices)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableServices)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center text-h3" }, "Servicios")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        color: "success",
                        icon: "mdi-plus",
                        onClick: ($event) => toShowForm()
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VSpacer),
                  createVNode(_component_VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_VBtn, {
                        color: "success",
                        icon: "mdi-file-excel",
                        onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(servicesReportXLSX), "servicios")
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_TableServices)
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
      }, _parent));
      _push(ssrRenderComponent(_component_VDialog, {
        modelValue: unref(showForm),
        "onUpdate:modelValue": ($event) => isRef(showForm) ? showForm.value = $event : null,
        persistent: "",
        "max-width": "650"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormService, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormService)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VDialog, {
        modelValue: unref(showConfirm),
        "onUpdate:modelValue": ($event) => isRef(showConfirm) ? showConfirm.value = $event : null,
        persistent: "",
        "max-width": "450"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ConfirmService, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ConfirmService)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-0f0e276a.mjs.map
