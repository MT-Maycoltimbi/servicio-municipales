import { u as useTeacherStore } from './teacher-8f8d4486.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, createVNode, unref, isRef, withAsyncContext, mergeProps, openBlock, createBlock, Fragment, renderList, toDisplayString, ref, reactive, computed, onUnmounted, createTextVNode, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs, V as VForm } from '../server.mjs';
import { _ as _sfc_main$4 } from './Error-ca355657.mjs';
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
  __name: "TableTeachers",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const teacherStore = useTeacherStore();
    const { teachers } = storeToRefs(teacherStore);
    [__temp, __restore] = withAsyncContext(() => teacherStore.getAll()), await __temp, __restore();
    const toEdit = (teacher) => {
      teacherStore.setCurrent(teacher);
      teacherStore.setShowForm(true);
    };
    const toConfirm = (teacher) => {
      teacherStore.setCurrent(teacher);
      teacherStore.setShowConfirm(true);
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
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th${_scopeId2}>Nombre completo</th><th${_scopeId2}>Email</th><th${_scopeId2}>T\xEDtulo</th><th${_scopeId2}>Acciones</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(teachers), (i) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(i.fullName)}</td><td${_scopeId2}>${ssrInterpolate(i.email)}</td><td${_scopeId2}>${ssrInterpolate(i.degree)}</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-eye",
                      color: "warning",
                      variant: "text",
                      title: "Editar",
                      onClick: ($event) => toEdit(i)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-delete",
                      color: "error",
                      variant: "text",
                      title: "Eliminar",
                      onClick: ($event) => toConfirm(i)
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", null, "Nombre completo"),
                        createVNode("th", null, "Email"),
                        createVNode("th", null, "T\xEDtulo"),
                        createVNode("th", null, "Acciones")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(teachers), (i) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", null, toDisplayString(i.fullName), 1),
                          createVNode("td", null, toDisplayString(i.email), 1),
                          createVNode("td", null, toDisplayString(i.degree), 1),
                          createVNode("td", null, [
                            createVNode(_component_VBtn, {
                              icon: "mdi-eye",
                              color: "warning",
                              variant: "text",
                              title: "Editar",
                              onClick: ($event) => toEdit(i)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_VBtn, {
                              icon: "mdi-delete",
                              color: "error",
                              variant: "text",
                              title: "Eliminar",
                              onClick: ($event) => toConfirm(i)
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
                      createVNode("th", null, "Nombre completo"),
                      createVNode("th", null, "Email"),
                      createVNode("th", null, "T\xEDtulo"),
                      createVNode("th", null, "Acciones")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(teachers), (i) => {
                      return openBlock(), createBlock("tr", null, [
                        createVNode("td", null, toDisplayString(i.fullName), 1),
                        createVNode("td", null, toDisplayString(i.email), 1),
                        createVNode("td", null, toDisplayString(i.degree), 1),
                        createVNode("td", null, [
                          createVNode(_component_VBtn, {
                            icon: "mdi-eye",
                            color: "warning",
                            variant: "text",
                            title: "Editar",
                            onClick: ($event) => toEdit(i)
                          }, null, 8, ["onClick"]),
                          createVNode(_component_VBtn, {
                            icon: "mdi-delete",
                            color: "error",
                            variant: "text",
                            title: "Eliminar",
                            onClick: ($event) => toConfirm(i)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableTeachers.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormTeacher",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const teacherStore = useTeacherStore();
    const { loading, current } = storeToRefs(teacherStore);
    const formData = reactive({
      fullName: "",
      email: "",
      degree: ""
    });
    const rules = {
      required: [
        (value) => !!value || "campo requerido!"
      ],
      email: [
        (value) => !!value || "El correo es requerido",
        (value) => /.+@.+\..+/.test(value) || "El correo debe ser v\xE1lido"
      ]
    };
    const title = computed(() => current.value ? "Editar" : "Agregar");
    const handleSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        if (current.value) {
          await teacherStore.update({
            _id: current.value._id,
            ...formData
          });
        } else {
          await teacherStore.create(formData);
        }
      }
    };
    const toCancel = () => {
      teacherStore.setShowForm(false);
    };
    onUnmounted(() => {
      teacherStore.setCurrent(null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_Error = _sfc_main$4;
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardTitle, { class: "text-center text-h4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(title))} profesor `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(title)) + " profesor ", 1)
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
                        _push4(ssrRenderComponent(_component_Error, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VTextField, {
                          class: "mt-3",
                          modelValue: unref(formData).fullName,
                          "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                          variant: "outlined",
                          label: "Nombre",
                          rules: rules.required
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VTextField, {
                          class: "mt-1",
                          type: "email",
                          modelValue: unref(formData).email,
                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                          variant: "outlined",
                          label: "Email",
                          rules: rules.email
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VTextField, {
                          class: "mt-3",
                          modelValue: unref(formData).degree,
                          "onUpdate:modelValue": ($event) => unref(formData).degree = $event,
                          variant: "outlined",
                          label: "T\xEDtulo",
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
                          onClick: toCancel,
                          text: "Cancelar"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Error),
                          createVNode(_component_VTextField, {
                            class: "mt-3",
                            modelValue: unref(formData).fullName,
                            "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                            variant: "outlined",
                            label: "Nombre",
                            rules: rules.required
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_VTextField, {
                            class: "mt-1",
                            type: "email",
                            modelValue: unref(formData).email,
                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                            variant: "outlined",
                            label: "Email",
                            rules: rules.email
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_VTextField, {
                            class: "mt-3",
                            modelValue: unref(formData).degree,
                            "onUpdate:modelValue": ($event) => unref(formData).degree = $event,
                            variant: "outlined",
                            label: "T\xEDtulo",
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
                            onClick: toCancel,
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
                        createVNode(_component_Error),
                        createVNode(_component_VTextField, {
                          class: "mt-3",
                          modelValue: unref(formData).fullName,
                          "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                          variant: "outlined",
                          label: "Nombre",
                          rules: rules.required
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_VTextField, {
                          class: "mt-1",
                          type: "email",
                          modelValue: unref(formData).email,
                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                          variant: "outlined",
                          label: "Email",
                          rules: rules.email
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_VTextField, {
                          class: "mt-3",
                          modelValue: unref(formData).degree,
                          "onUpdate:modelValue": ($event) => unref(formData).degree = $event,
                          variant: "outlined",
                          label: "T\xEDtulo",
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
                          onClick: toCancel,
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
                  createTextVNode(toDisplayString(unref(title)) + " profesor ", 1)
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
                      createVNode(_component_Error),
                      createVNode(_component_VTextField, {
                        class: "mt-3",
                        modelValue: unref(formData).fullName,
                        "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                        variant: "outlined",
                        label: "Nombre",
                        rules: rules.required
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_VTextField, {
                        class: "mt-1",
                        type: "email",
                        modelValue: unref(formData).email,
                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                        variant: "outlined",
                        label: "Email",
                        rules: rules.email
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_VTextField, {
                        class: "mt-3",
                        modelValue: unref(formData).degree,
                        "onUpdate:modelValue": ($event) => unref(formData).degree = $event,
                        variant: "outlined",
                        label: "T\xEDtulo",
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
                        onClick: toCancel,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormTeacher.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmTeacher",
  __ssrInlineRender: true,
  setup(__props) {
    const teacherStore = useTeacherStore();
    const { current, loading } = storeToRefs(teacherStore);
    const cancel = () => {
      teacherStore.setShowConfirm(false);
    };
    const confirm = async () => {
      await teacherStore.delete(current.value._id);
    };
    onUnmounted(() => {
      teacherStore.setCurrent(null);
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
                  _push3(` Eliminar profesor `);
                } else {
                  return [
                    createTextVNode(" Eliminar profesor ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(` \xBFEst\xE1s seguro de eliminar a ${ssrInterpolate((_a = unref(current)) == null ? void 0 : _a.fullName)}? `);
                } else {
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar a " + toDisplayString((_b = unref(current)) == null ? void 0 : _b.fullName) + "? ", 1)
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
                  createTextVNode(" Eliminar profesor ")
                ]),
                _: 1
              }),
              createVNode(_component_VCardText, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar a " + toDisplayString((_a = unref(current)) == null ? void 0 : _a.fullName) + "? ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmTeacher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "teachers",
  __ssrInlineRender: true,
  setup(__props) {
    const teacherStore = useTeacherStore();
    const { showForm, showConfirm, teachersReportXLSX } = storeToRefs(teacherStore);
    const toShowForm = () => {
      teacherStore.setShowForm(true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_TableTeachers = _sfc_main$3;
      const _component_VDialog = resolveComponent("VDialog");
      const _component_FormTeacher = _sfc_main$2;
      const _component_ConfirmTeacher = _sfc_main$1;
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
                        _push4(`<h2 class="text-center text-h3"${_scopeId3}>Profesores</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center text-h3" }, "Profesores")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center text-h3" }, "Profesores")
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
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(teachersReportXLSX), "profesores")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            color: "success",
                            icon: "mdi-file-excel",
                            onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(teachersReportXLSX), "profesores")
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
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(teachersReportXLSX), "profesores")
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
                        _push4(ssrRenderComponent(_component_TableTeachers, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableTeachers)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableTeachers)
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
                      createVNode("h2", { class: "text-center text-h3" }, "Profesores")
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
                        onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(teachersReportXLSX), "profesores")
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
                      createVNode(_component_TableTeachers)
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
            _push2(ssrRenderComponent(_component_FormTeacher, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormTeacher)
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
            _push2(ssrRenderComponent(_component_ConfirmTeacher, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ConfirmTeacher)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/teachers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=teachers-774969c9.mjs.map
