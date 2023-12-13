import { useSSRContext, defineComponent, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, ref, reactive, computed, onUnmounted, createTextVNode, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { d as defineStore, s as storeToRefs, V as VForm } from '../server.mjs';
import moment from 'moment';
import { u as useErrorStore, _ as _sfc_main$3 } from './Error-ca355657.mjs';
import { u as useFetch } from './fetch-ac2e87f5.mjs';

const useInscriptionStore = defineStore("inscription", {
  state: () => ({
    currentCourse: null,
    inscriptions: [],
    showForm: false,
    loading: false,
    current: null,
    showConfirm: false
  }),
  actions: {
    async getCourseById(id) {
      const { data } = await useFetch(`/api/course/${id}`, "$aUtzL72O18");
      this.currentCourse = data.value;
    },
    async getAllByCourse() {
      const { data } = await useFetch(`/api/inscription/${this.currentCourse._id}`, "$ve3Rnt2hzZ");
      this.inscriptions = data.value.data;
    },
    async create(body) {
      const errorStore = useErrorStore();
      this.loading = true;
      const { data, error } = await useFetch("/api/inscription", {
        method: "POST",
        body
      }, "$2gmNLljEIb");
      this.loading = false;
      if (error.value) {
        errorStore.setError(error.value.statusMessage);
        return;
      }
      this.showForm = false;
      this.inscriptions.push(data.value);
    },
    async update(body) {
      const errorStore = useErrorStore();
      this.loading = true;
      const { data, error } = await useFetch("/api/inscription", {
        method: "PATCH",
        body
      }, "$5Dh9q4kvkT");
      this.loading = false;
      if (error.value) {
        errorStore.setError(error.value.statusMessage);
        return;
      }
      this.showForm = false;
      this.inscriptions = this.inscriptions.map((x) => x._id === body._id ? data.value : x);
    },
    async delete(id) {
      this.loading = true;
      await useFetch(`/api/inscription/delete/${id}`, {
        method: "DELETE"
      }, "$Oi6BUwItgv");
      this.inscriptions = this.inscriptions.filter((x) => x._id !== id);
      this.loading = false;
      this.showConfirm = false;
    },
    setShowForm(payload) {
      this.showForm = payload;
    },
    setCurrent(payload) {
      this.current = payload;
    },
    setShowConfirm(payload) {
      this.showConfirm = payload;
    }
  },
  getters: {
    inscriptionsReportXLSX(state) {
      return state.inscriptions.map((x) => ({
        nombre: x.name,
        fechaNacimiento: moment(x.birdthDate).format("DD-MM-YYYY"),
        direccion: x.address,
        zona: x.zone,
        sexo: x.sexo,
        telefono: x.phone,
        cedula: x.cedula
      }));
    }
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableInscription",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const inscriptionStore = useInscriptionStore();
    const { inscriptions } = storeToRefs(inscriptionStore);
    [__temp, __restore] = withAsyncContext(() => inscriptionStore.getAllByCourse()), await __temp, __restore();
    const editService = (inscription) => {
      inscriptionStore.setCurrent(inscription);
      inscriptionStore.setShowForm(true);
    };
    const confirmService = (inscription) => {
      inscriptionStore.setCurrent(inscription);
      inscriptionStore.setShowConfirm(true);
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
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th${_scopeId2}>Nombre</th><th${_scopeId2}>Fecha nacimiento</th><th${_scopeId2}>Zona</th><th${_scopeId2}>Direcci\xF3n</th><th${_scopeId2}>Telefono</th><th${_scopeId2}>C\xE9dula</th><th${_scopeId2}>Sexo</th><th${_scopeId2}>Acciones</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(inscriptions), (i) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(i.name)}</td><td${_scopeId2}>${ssrInterpolate(unref(moment)(i.birdthDate).format("DD/MM/YYYY"))}</td><td${_scopeId2}>${ssrInterpolate(i.zone)}</td><td${_scopeId2}>${ssrInterpolate(i.address)}</td><td${_scopeId2}>${ssrInterpolate(i.phone)}</td><td${_scopeId2}>${ssrInterpolate(i.cedula)}</td><td${_scopeId2}>${ssrInterpolate(i.sexo)}</td><td${_scopeId2}>`);
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
                        createVNode("th", null, "Fecha nacimiento"),
                        createVNode("th", null, "Zona"),
                        createVNode("th", null, "Direcci\xF3n"),
                        createVNode("th", null, "Telefono"),
                        createVNode("th", null, "C\xE9dula"),
                        createVNode("th", null, "Sexo"),
                        createVNode("th", null, "Acciones")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(inscriptions), (i) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", null, toDisplayString(i.name), 1),
                          createVNode("td", null, toDisplayString(unref(moment)(i.birdthDate).format("DD/MM/YYYY")), 1),
                          createVNode("td", null, toDisplayString(i.zone), 1),
                          createVNode("td", null, toDisplayString(i.address), 1),
                          createVNode("td", null, toDisplayString(i.phone), 1),
                          createVNode("td", null, toDisplayString(i.cedula), 1),
                          createVNode("td", null, toDisplayString(i.sexo), 1),
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
                      createVNode("th", null, "Fecha nacimiento"),
                      createVNode("th", null, "Zona"),
                      createVNode("th", null, "Direcci\xF3n"),
                      createVNode("th", null, "Telefono"),
                      createVNode("th", null, "C\xE9dula"),
                      createVNode("th", null, "Sexo"),
                      createVNode("th", null, "Acciones")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(inscriptions), (i) => {
                      return openBlock(), createBlock("tr", null, [
                        createVNode("td", null, toDisplayString(i.name), 1),
                        createVNode("td", null, toDisplayString(unref(moment)(i.birdthDate).format("DD/MM/YYYY")), 1),
                        createVNode("td", null, toDisplayString(i.zone), 1),
                        createVNode("td", null, toDisplayString(i.address), 1),
                        createVNode("td", null, toDisplayString(i.phone), 1),
                        createVNode("td", null, toDisplayString(i.cedula), 1),
                        createVNode("td", null, toDisplayString(i.sexo), 1),
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableInscription.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormInscription",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const inscriptionStore = useInscriptionStore();
    const errorStore = useErrorStore();
    const { loading, current, currentCourse } = storeToRefs(inscriptionStore);
    const formData = reactive({
      name: "",
      birdthDate: "",
      zone: "urbana",
      address: "",
      phone: "",
      cedula: "",
      sexo: "M"
    });
    const rules = {
      required: [
        (value) => !!value || "Campo requerido!"
      ],
      min: [
        (value) => !!value && value.length === 10 || "Debe tener 10 d\xEDgitos"
      ]
    };
    const title = computed(() => current.value ? "Editar" : "Agregar");
    const handleSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        if (current.value) {
          await inscriptionStore.update({
            ...formData,
            birdthDate: moment(formData.birdthDate).utc().valueOf(),
            sexo: formData.sexo,
            _id: current.value._id,
            _course: currentCourse.value._id
          });
        } else {
          await inscriptionStore.create({
            ...formData,
            _course: currentCourse.value._id,
            birdthDate: moment(formData.birdthDate).utc().valueOf(),
            sexo: formData.sexo
          });
        }
      }
    };
    const cancel = () => {
      inscriptionStore.setShowForm(false);
    };
    onUnmounted(() => {
      inscriptionStore.setCurrent(null);
      errorStore.resetError();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_Error = _sfc_main$3;
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VSelect = resolveComponent("VSelect");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VCardTitle, { class: "text-center text-h4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(title))} Inscripci\xF3n `);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(title)) + " Inscripci\xF3n ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VCardTitle, { class: "text-center text-h4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(title)) + " Inscripci\xF3n ", 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_VCardTitle, { class: "text-center text-h4" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(title)) + " Inscripci\xF3n ", 1)
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
                        _push4(ssrRenderComponent(_component_VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Error, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Error)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Error)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VTextField, {
                                      modelValue: unref(formData).name,
                                      "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                                      variant: "outlined",
                                      label: "Nombre",
                                      rules: rules.required
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        modelValue: unref(formData).name,
                                        "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                                        variant: "outlined",
                                        label: "Nombre",
                                        rules: rules.required
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VTextField, {
                                      type: "date",
                                      modelValue: unref(formData).birdthDate,
                                      "onUpdate:modelValue": ($event) => unref(formData).birdthDate = $event,
                                      variant: "outlined",
                                      label: "Fecha de nacimiento",
                                      rules: rules.required
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "date",
                                        modelValue: unref(formData).birdthDate,
                                        "onUpdate:modelValue": ($event) => unref(formData).birdthDate = $event,
                                        variant: "outlined",
                                        label: "Fecha de nacimiento",
                                        rules: rules.required
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      modelValue: unref(formData).name,
                                      "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                                      variant: "outlined",
                                      label: "Nombre",
                                      rules: rules.required
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      type: "date",
                                      modelValue: unref(formData).birdthDate,
                                      "onUpdate:modelValue": ($event) => unref(formData).birdthDate = $event,
                                      variant: "outlined",
                                      label: "Fecha de nacimiento",
                                      rules: rules.required
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VTextField, {
                                      modelValue: unref(formData).cedula,
                                      "onUpdate:modelValue": ($event) => unref(formData).cedula = $event,
                                      variant: "outlined",
                                      label: "C\xE9dula",
                                      rules: [...rules.required, ...rules.min]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        modelValue: unref(formData).cedula,
                                        "onUpdate:modelValue": ($event) => unref(formData).cedula = $event,
                                        variant: "outlined",
                                        label: "C\xE9dula",
                                        rules: [...rules.required, ...rules.min]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VTextField, {
                                      type: "tel",
                                      modelValue: unref(formData).phone,
                                      "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                                      variant: "outlined",
                                      label: "Tel\xE9fono",
                                      rules: [...rules.required, ...rules.min]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "tel",
                                        modelValue: unref(formData).phone,
                                        "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                                        variant: "outlined",
                                        label: "Tel\xE9fono",
                                        rules: [...rules.required, ...rules.min]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      modelValue: unref(formData).cedula,
                                      "onUpdate:modelValue": ($event) => unref(formData).cedula = $event,
                                      variant: "outlined",
                                      label: "C\xE9dula",
                                      rules: [...rules.required, ...rules.min]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      type: "tel",
                                      modelValue: unref(formData).phone,
                                      "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                                      variant: "outlined",
                                      label: "Tel\xE9fono",
                                      rules: [...rules.required, ...rules.min]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VSelect, {
                                      modelValue: unref(formData).zone,
                                      "onUpdate:modelValue": ($event) => unref(formData).zone = $event,
                                      variant: "outlined",
                                      items: ["urbana", "rural"],
                                      label: "Zona",
                                      rules: rules.required
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VSelect, {
                                        modelValue: unref(formData).zone,
                                        "onUpdate:modelValue": ($event) => unref(formData).zone = $event,
                                        variant: "outlined",
                                        items: ["urbana", "rural"],
                                        label: "Zona",
                                        rules: rules.required
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VTextField, {
                                      modelValue: unref(formData).address,
                                      "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                      variant: "outlined",
                                      label: "Direccion",
                                      rules: rules.required
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        modelValue: unref(formData).address,
                                        "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                        variant: "outlined",
                                        label: "Direccion",
                                        rules: rules.required
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VSelect, {
                                      modelValue: unref(formData).zone,
                                      "onUpdate:modelValue": ($event) => unref(formData).zone = $event,
                                      variant: "outlined",
                                      items: ["urbana", "rural"],
                                      label: "Zona",
                                      rules: rules.required
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      modelValue: unref(formData).address,
                                      "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                      variant: "outlined",
                                      label: "Direccion",
                                      rules: rules.required
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_radio_group, {
                          inline: "",
                          modelValue: unref(formData).sexo,
                          "onUpdate:modelValue": ($event) => unref(formData).sexo = $event
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Sexo `);
                            } else {
                              return [
                                createTextVNode(" Sexo ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_radio, { value: "M" }, {
                                label: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}>Masculino</div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, "Masculino")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_radio, { value: "F" }, {
                                label: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}>Femenino</div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, "Femenino")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_radio, { value: "M" }, {
                                  label: withCtx(() => [
                                    createVNode("div", null, "Masculino")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_radio, { value: "F" }, {
                                  label: withCtx(() => [
                                    createVNode("div", null, "Femenino")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                          createVNode(_component_VRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Error)
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
                                  createVNode(_component_VTextField, {
                                    modelValue: unref(formData).name,
                                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                                    variant: "outlined",
                                    label: "Nombre",
                                    rules: rules.required
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    type: "date",
                                    modelValue: unref(formData).birdthDate,
                                    "onUpdate:modelValue": ($event) => unref(formData).birdthDate = $event,
                                    variant: "outlined",
                                    label: "Fecha de nacimiento",
                                    rules: rules.required
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                  createVNode(_component_VTextField, {
                                    modelValue: unref(formData).cedula,
                                    "onUpdate:modelValue": ($event) => unref(formData).cedula = $event,
                                    variant: "outlined",
                                    label: "C\xE9dula",
                                    rules: [...rules.required, ...rules.min]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    type: "tel",
                                    modelValue: unref(formData).phone,
                                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                                    variant: "outlined",
                                    label: "Tel\xE9fono",
                                    rules: [...rules.required, ...rules.min]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                  createVNode(_component_VSelect, {
                                    modelValue: unref(formData).zone,
                                    "onUpdate:modelValue": ($event) => unref(formData).zone = $event,
                                    variant: "outlined",
                                    items: ["urbana", "rural"],
                                    label: "Zona",
                                    rules: rules.required
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    modelValue: unref(formData).address,
                                    "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                    variant: "outlined",
                                    label: "Direccion",
                                    rules: rules.required
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_radio_group, {
                            inline: "",
                            modelValue: unref(formData).sexo,
                            "onUpdate:modelValue": ($event) => unref(formData).sexo = $event
                          }, {
                            label: withCtx(() => [
                              createTextVNode(" Sexo ")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_radio, { value: "M" }, {
                                label: withCtx(() => [
                                  createVNode("div", null, "Masculino")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_radio, { value: "F" }, {
                                label: withCtx(() => [
                                  createVNode("div", null, "Femenino")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
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
                        createVNode(_component_VRow, null, {
                          default: withCtx(() => [
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_Error)
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
                                createVNode(_component_VTextField, {
                                  modelValue: unref(formData).name,
                                  "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                                  variant: "outlined",
                                  label: "Nombre",
                                  rules: rules.required
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextField, {
                                  type: "date",
                                  modelValue: unref(formData).birdthDate,
                                  "onUpdate:modelValue": ($event) => unref(formData).birdthDate = $event,
                                  variant: "outlined",
                                  label: "Fecha de nacimiento",
                                  rules: rules.required
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                createVNode(_component_VTextField, {
                                  modelValue: unref(formData).cedula,
                                  "onUpdate:modelValue": ($event) => unref(formData).cedula = $event,
                                  variant: "outlined",
                                  label: "C\xE9dula",
                                  rules: [...rules.required, ...rules.min]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextField, {
                                  type: "tel",
                                  modelValue: unref(formData).phone,
                                  "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                                  variant: "outlined",
                                  label: "Tel\xE9fono",
                                  rules: [...rules.required, ...rules.min]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                createVNode(_component_VSelect, {
                                  modelValue: unref(formData).zone,
                                  "onUpdate:modelValue": ($event) => unref(formData).zone = $event,
                                  variant: "outlined",
                                  items: ["urbana", "rural"],
                                  label: "Zona",
                                  rules: rules.required
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextField, {
                                  modelValue: unref(formData).address,
                                  "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                  variant: "outlined",
                                  label: "Direccion",
                                  rules: rules.required
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_radio_group, {
                          inline: "",
                          modelValue: unref(formData).sexo,
                          "onUpdate:modelValue": ($event) => unref(formData).sexo = $event
                        }, {
                          label: withCtx(() => [
                            createTextVNode(" Sexo ")
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_radio, { value: "M" }, {
                              label: withCtx(() => [
                                createVNode("div", null, "Masculino")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_radio, { value: "F" }, {
                              label: withCtx(() => [
                                createVNode("div", null, "Femenino")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
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
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode(_component_VCardTitle, { class: "text-center text-h4" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(title)) + " Inscripci\xF3n ", 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
                      createVNode(_component_VRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_Error)
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
                              createVNode(_component_VTextField, {
                                modelValue: unref(formData).name,
                                "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                                variant: "outlined",
                                label: "Nombre",
                                rules: rules.required
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                type: "date",
                                modelValue: unref(formData).birdthDate,
                                "onUpdate:modelValue": ($event) => unref(formData).birdthDate = $event,
                                variant: "outlined",
                                label: "Fecha de nacimiento",
                                rules: rules.required
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                              createVNode(_component_VTextField, {
                                modelValue: unref(formData).cedula,
                                "onUpdate:modelValue": ($event) => unref(formData).cedula = $event,
                                variant: "outlined",
                                label: "C\xE9dula",
                                rules: [...rules.required, ...rules.min]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                type: "tel",
                                modelValue: unref(formData).phone,
                                "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                                variant: "outlined",
                                label: "Tel\xE9fono",
                                rules: [...rules.required, ...rules.min]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                              createVNode(_component_VSelect, {
                                modelValue: unref(formData).zone,
                                "onUpdate:modelValue": ($event) => unref(formData).zone = $event,
                                variant: "outlined",
                                items: ["urbana", "rural"],
                                label: "Zona",
                                rules: rules.required
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                modelValue: unref(formData).address,
                                "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                variant: "outlined",
                                label: "Direccion",
                                rules: rules.required
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_radio_group, {
                        inline: "",
                        modelValue: unref(formData).sexo,
                        "onUpdate:modelValue": ($event) => unref(formData).sexo = $event
                      }, {
                        label: withCtx(() => [
                          createTextVNode(" Sexo ")
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_radio, { value: "M" }, {
                            label: withCtx(() => [
                              createVNode("div", null, "Masculino")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_radio, { value: "F" }, {
                            label: withCtx(() => [
                              createVNode("div", null, "Femenino")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormInscription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConfirmInscription",
  __ssrInlineRender: true,
  setup(__props) {
    const inscriptionStore = useInscriptionStore();
    const { current, loading } = storeToRefs(inscriptionStore);
    const cancel = () => {
      inscriptionStore.setShowConfirm(false);
    };
    const confirm = async () => {
      await inscriptionStore.delete(current.value._id);
    };
    onUnmounted(() => {
      inscriptionStore.setCurrent(null);
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
                  _push3(` Eliminar Inscripci\xF3n `);
                } else {
                  return [
                    createTextVNode(" Eliminar Inscripci\xF3n ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(` \xBFEst\xE1s seguro de eliminar la inscripci\xF3n de ${ssrInterpolate((_a = unref(current)) == null ? void 0 : _a.name)}? `);
                } else {
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar la inscripci\xF3n de " + toDisplayString((_b = unref(current)) == null ? void 0 : _b.name) + "? ", 1)
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
                  createTextVNode(" Eliminar Inscripci\xF3n ")
                ]),
                _: 1
              }),
              createVNode(_component_VCardText, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar la inscripci\xF3n de " + toDisplayString((_a = unref(current)) == null ? void 0 : _a.name) + "? ", 1)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmInscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b, useInscriptionStore as u };
//# sourceMappingURL=ConfirmInscription-3fbeb4f0.mjs.map
