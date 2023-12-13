import { useSSRContext, defineComponent, resolveComponent, withCtx, createVNode, unref, isRef, withAsyncContext, mergeProps, openBlock, createBlock, Fragment, renderList, toDisplayString, ref, reactive, computed, onUnmounted, createTextVNode, createCommentVNode, withModifiers } from 'vue';
import { u as useFetch } from './fetch-ac2e87f5.mjs';
import { u as useErrorStore, _ as _sfc_main$5 } from './Error-ca355657.mjs';
import { d as defineStore, s as storeToRefs, V as VForm } from '../server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useServiceStore } from './service-f0201810.mjs';
import { R as Role } from './index-327045ba.mjs';
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

const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    showForm: false,
    loading: false,
    current: null,
    showConfirm: false,
    showChangePassword: false
  }),
  actions: {
    async getUsers() {
      var _a;
      const { data } = await useFetch("/api/user", "$skGXEh7uod");
      this.users = (_a = data.value) == null ? void 0 : _a.data;
    },
    async create(body) {
      const errorStore = useErrorStore();
      errorStore.resetError();
      this.loading = true;
      const { data, error } = await useFetch("/api/user", {
        method: "POST",
        body
      }, "$dHxgorQbTP");
      this.loading = false;
      if (error.value) {
        errorStore.setError(error.value.statusMessage);
      } else {
        this.users.push(data.value);
        this.showForm = false;
      }
    },
    async update(body) {
      const errorStore = useErrorStore();
      errorStore.resetError();
      this.loading = true;
      const { data, error } = await useFetch("/api/user", {
        method: "PATCH",
        body
      }, "$8dM5SCvYiu");
      this.loading = false;
      if (error.value) {
        errorStore.setError(error.value.statusMessage);
      } else {
        this.users = this.users.map((x) => x._id === body._id ? data.value : x);
        this.showForm = false;
      }
    },
    async changePassword(body) {
      const errorStore = useErrorStore();
      errorStore.resetError();
      this.loading = true;
      const { data, error } = await useFetch("/api/user/change-password", {
        method: "PUT",
        body
      }, "$zQ0LwgiUW6");
      this.loading = false;
      if (error.value) {
        errorStore.setError(error.value.statusMessage);
      } else {
        this.showChangePassword = false;
      }
    },
    async delete(id) {
      this.loading = true;
      await useFetch(`/api/user/${id}`, {
        method: "DELETE"
      }, "$LBSBx8XOkA");
      this.loading = false;
      this.users = this.users.filter((x) => x._id !== id);
      this.showConfirm = false;
    },
    setShowForm(payload) {
      this.showForm = payload;
    },
    setShowChangePassword(payload) {
      this.showChangePassword = payload;
    },
    setCurrent(payload) {
      this.current = payload;
    },
    setShowConfirm(payload) {
      this.showConfirm = payload;
    }
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableUsers",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const { users } = storeToRefs(userStore);
    [__temp, __restore] = withAsyncContext(() => userStore.getUsers()), await __temp, __restore();
    const toEdit = (user) => {
      userStore.setCurrent(user);
      userStore.setShowForm(true);
    };
    const toChangePassword = (user) => {
      userStore.setCurrent(user);
      userStore.setShowChangePassword(true);
    };
    const toConfirm = (user) => {
      userStore.setCurrent(user);
      userStore.setShowConfirm(true);
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
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th${_scopeId2}>Nombre completo</th><th${_scopeId2}>Email</th><th${_scopeId2}>Rol</th><th${_scopeId2}>Servicio</th><th${_scopeId2}>Acciones</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(users), (i) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(i.fullName)}</td><td${_scopeId2}>${ssrInterpolate(i.email)}</td><td${_scopeId2}>${ssrInterpolate(i.rol)}</td><td${_scopeId2}>${ssrInterpolate((i == null ? void 0 : i._service) ? i._service.name : "Todos")}</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-lock-reset",
                      color: "success",
                      variant: "text",
                      title: "Cambiar contrase\xF1a",
                      onClick: ($event) => toChangePassword(i)
                    }, null, _parent3, _scopeId2));
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
                        createVNode("th", null, "Rol"),
                        createVNode("th", null, "Servicio"),
                        createVNode("th", null, "Acciones")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (i) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", null, toDisplayString(i.fullName), 1),
                          createVNode("td", null, toDisplayString(i.email), 1),
                          createVNode("td", null, toDisplayString(i.rol), 1),
                          createVNode("td", null, toDisplayString((i == null ? void 0 : i._service) ? i._service.name : "Todos"), 1),
                          createVNode("td", null, [
                            createVNode(_component_VBtn, {
                              icon: "mdi-lock-reset",
                              color: "success",
                              variant: "text",
                              title: "Cambiar contrase\xF1a",
                              onClick: ($event) => toChangePassword(i)
                            }, null, 8, ["onClick"]),
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
                      createVNode("th", null, "Rol"),
                      createVNode("th", null, "Servicio"),
                      createVNode("th", null, "Acciones")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (i) => {
                      return openBlock(), createBlock("tr", null, [
                        createVNode("td", null, toDisplayString(i.fullName), 1),
                        createVNode("td", null, toDisplayString(i.email), 1),
                        createVNode("td", null, toDisplayString(i.rol), 1),
                        createVNode("td", null, toDisplayString((i == null ? void 0 : i._service) ? i._service.name : "Todos"), 1),
                        createVNode("td", null, [
                          createVNode(_component_VBtn, {
                            icon: "mdi-lock-reset",
                            color: "success",
                            variant: "text",
                            title: "Cambiar contrase\xF1a",
                            onClick: ($event) => toChangePassword(i)
                          }, null, 8, ["onClick"]),
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableUsers.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormUser",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const formRef = ref(null);
    const userStore = useUserStore();
    const serviceStore = useServiceStore();
    const { services } = storeToRefs(serviceStore);
    const { loading, current } = storeToRefs(userStore);
    const formData = reactive({
      fullName: "",
      email: "",
      rol: null,
      _service: ""
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
    [__temp, __restore] = withAsyncContext(() => serviceStore.getServices()), await __temp, __restore();
    const roles = [{ value: Role.ADMIN, title: "Administrador" }, { value: Role.ASSISTANT, title: "Asistente" }];
    const title = computed(() => current.value ? "Editar" : "Agregar");
    const handleSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        if (current.value) {
          await userStore.update({
            _id: current.value._id,
            fullName: formData.fullName,
            rol: formData.rol,
            _service: formData.rol === Role.ADMIN ? void 0 : formData._service
          });
        } else {
          await userStore.create({
            ...formData,
            rol: formData.rol,
            _service: formData.rol === Role.ADMIN ? void 0 : formData._service
          });
        }
      }
    };
    const toCancel = () => {
      userStore.setShowForm(false);
    };
    onUnmounted(() => {
      userStore.setCurrent(null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_Error = _sfc_main$5;
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VSelect = resolveComponent("VSelect");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardTitle, { class: "text-center text-h4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(title))} usuario `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(title)) + " usuario ", 1)
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
                          rules: rules.email,
                          disabled: !!unref(current)
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VSelect, {
                          class: "mt-1",
                          variant: "outlined",
                          rules: rules.required,
                          modelValue: unref(formData).rol,
                          "onUpdate:modelValue": ($event) => unref(formData).rol = $event,
                          label: "Rol",
                          items: roles,
                          "item-title": "title",
                          "item-value": "value"
                        }, null, _parent4, _scopeId3));
                        if (unref(formData).rol === unref(Role).ASSISTANT) {
                          _push4(ssrRenderComponent(_component_VSelect, {
                            class: "mt-1",
                            variant: "outlined",
                            rules: rules.required,
                            modelValue: unref(formData)._service,
                            "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                            label: "Servicios",
                            items: unref(services),
                            "item-title": "name",
                            "item-value": "_id"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
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
                            rules: rules.email,
                            disabled: !!unref(current)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"]),
                          createVNode(_component_VSelect, {
                            class: "mt-1",
                            variant: "outlined",
                            rules: rules.required,
                            modelValue: unref(formData).rol,
                            "onUpdate:modelValue": ($event) => unref(formData).rol = $event,
                            label: "Rol",
                            items: roles,
                            "item-title": "title",
                            "item-value": "value"
                          }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                          unref(formData).rol === unref(Role).ASSISTANT ? (openBlock(), createBlock(_component_VSelect, {
                            key: 0,
                            class: "mt-1",
                            variant: "outlined",
                            rules: rules.required,
                            modelValue: unref(formData)._service,
                            "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                            label: "Servicios",
                            items: unref(services),
                            "item-title": "name",
                            "item-value": "_id"
                          }, null, 8, ["rules", "modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
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
                          rules: rules.email,
                          disabled: !!unref(current)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"]),
                        createVNode(_component_VSelect, {
                          class: "mt-1",
                          variant: "outlined",
                          rules: rules.required,
                          modelValue: unref(formData).rol,
                          "onUpdate:modelValue": ($event) => unref(formData).rol = $event,
                          label: "Rol",
                          items: roles,
                          "item-title": "title",
                          "item-value": "value"
                        }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                        unref(formData).rol === unref(Role).ASSISTANT ? (openBlock(), createBlock(_component_VSelect, {
                          key: 0,
                          class: "mt-1",
                          variant: "outlined",
                          rules: rules.required,
                          modelValue: unref(formData)._service,
                          "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                          label: "Servicios",
                          items: unref(services),
                          "item-title": "name",
                          "item-value": "_id"
                        }, null, 8, ["rules", "modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
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
                  createTextVNode(toDisplayString(unref(title)) + " usuario ", 1)
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
                        rules: rules.email,
                        disabled: !!unref(current)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "disabled"]),
                      createVNode(_component_VSelect, {
                        class: "mt-1",
                        variant: "outlined",
                        rules: rules.required,
                        modelValue: unref(formData).rol,
                        "onUpdate:modelValue": ($event) => unref(formData).rol = $event,
                        label: "Rol",
                        items: roles,
                        "item-title": "title",
                        "item-value": "value"
                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                      unref(formData).rol === unref(Role).ASSISTANT ? (openBlock(), createBlock(_component_VSelect, {
                        key: 0,
                        class: "mt-1",
                        variant: "outlined",
                        rules: rules.required,
                        modelValue: unref(formData)._service,
                        "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                        label: "Servicios",
                        items: unref(services),
                        "item-title": "name",
                        "item-value": "_id"
                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormChangePassword",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const userStore = useUserStore();
    const { loading, current } = storeToRefs(userStore);
    const formData = reactive({
      email: "",
      password: ""
    });
    const rules = {
      password: [
        (value) => !!value || "La contrase\xF1a es requerida",
        (value) => value && value.length >= 8 || "La contrase\xF1a debe tener al menos 8 caracteres"
      ]
    };
    const handleSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        if (current.value) {
          await userStore.changePassword({
            email: current.value.email,
            password: formData.password
          });
        }
      }
    };
    const toCancel = () => {
      userStore.setShowChangePassword(false);
    };
    onUnmounted(() => {
      userStore.setCurrent(null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_Error = _sfc_main$5;
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardTitle, { class: "text-center text-h4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cambiar contrase\xF1a `);
                } else {
                  return [
                    createTextVNode(" Cambiar contrase\xF1a ")
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
                          class: "mt-1",
                          type: "email",
                          modelValue: unref(formData).email,
                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                          variant: "outlined",
                          label: "Email",
                          disabled: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VTextField, {
                          class: "mt-3",
                          modelValue: unref(formData).password,
                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                          variant: "outlined",
                          label: "Password",
                          rules: rules.password
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
                            class: "mt-1",
                            type: "email",
                            modelValue: unref(formData).email,
                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                            variant: "outlined",
                            label: "Email",
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_VTextField, {
                            class: "mt-3",
                            modelValue: unref(formData).password,
                            "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                            variant: "outlined",
                            label: "Password",
                            rules: rules.password
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
                          class: "mt-1",
                          type: "email",
                          modelValue: unref(formData).email,
                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                          variant: "outlined",
                          label: "Email",
                          disabled: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_VTextField, {
                          class: "mt-3",
                          modelValue: unref(formData).password,
                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                          variant: "outlined",
                          label: "Password",
                          rules: rules.password
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
                  createTextVNode(" Cambiar contrase\xF1a ")
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
                        class: "mt-1",
                        type: "email",
                        modelValue: unref(formData).email,
                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                        variant: "outlined",
                        label: "Email",
                        disabled: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_VTextField, {
                        class: "mt-3",
                        modelValue: unref(formData).password,
                        "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                        variant: "outlined",
                        label: "Password",
                        rules: rules.password
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormChangePassword.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmUser",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { current, loading } = storeToRefs(userStore);
    const cancel = () => {
      userStore.setShowConfirm(false);
    };
    const confirm = async () => {
      await userStore.delete(current.value._id);
    };
    onUnmounted(() => {
      userStore.setCurrent(null);
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
                  _push3(` Eliminar usuario `);
                } else {
                  return [
                    createTextVNode(" Eliminar usuario ")
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
                  createTextVNode(" Eliminar usuario ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "users",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { showForm, showConfirm, showChangePassword } = storeToRefs(userStore);
    const toShowForm = () => {
      userStore.setShowForm(true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_TableUsers = _sfc_main$4;
      const _component_VDialog = resolveComponent("VDialog");
      const _component_FormUser = _sfc_main$3;
      const _component_FormChangePassword = _sfc_main$2;
      const _component_ConfirmUser = _sfc_main$1;
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
                        _push4(`<h2 class="text-center text-h3"${_scopeId3}>Usuarios</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center text-h3" }, "Usuarios")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center text-h3" }, "Usuarios")
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
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_VBtn, {
                          color: "success",
                          icon: "mdi-plus",
                          onClick: ($event) => toShowForm()
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
                        _push4(ssrRenderComponent(_component_TableUsers, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableUsers)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableUsers)
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
                      createVNode("h2", { class: "text-center text-h3" }, "Usuarios")
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
                      createVNode(_component_VBtn, {
                        color: "success",
                        icon: "mdi-plus",
                        onClick: ($event) => toShowForm()
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
                      createVNode(_component_TableUsers)
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
            _push2(ssrRenderComponent(_component_FormUser, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormUser)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VDialog, {
        modelValue: unref(showChangePassword),
        "onUpdate:modelValue": ($event) => isRef(showChangePassword) ? showChangePassword.value = $event : null,
        persistent: "",
        "max-width": "650"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormChangePassword, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormChangePassword)
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
            _push2(ssrRenderComponent(_component_ConfirmUser, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ConfirmUser)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=users-f65836b6.mjs.map
