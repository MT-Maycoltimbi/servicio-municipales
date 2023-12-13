import { d as defineStore, a as useAuth, s as storeToRefs, n as navigateTo, V as VForm } from '../server.mjs';
import { c as convertUtcToLocalTime } from './index-df451aa9.mjs';
import { useSSRContext, defineComponent, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, ref, reactive, computed, onUnmounted, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';
import { u as useServiceStore } from './service-f0201810.mjs';
import { u as useTeacherStore } from './teacher-8f8d4486.mjs';
import { d as dias } from './index-327045ba.mjs';
import { u as useFetch } from './fetch-ac2e87f5.mjs';

const useCourseStore = defineStore("course", {
  state: () => ({
    courses: [],
    showForm: false,
    showConfirm: false,
    loading: false,
    current: null
  }),
  actions: {
    async create(body) {
      this.loading = true;
      const { data } = await useFetch("/api/course", {
        body,
        method: "POST"
      }, "$e5XGgdwATT");
      this.courses.push(data.value);
      this.loading = false;
      this.showForm = false;
    },
    async getAll(idService) {
      const { data } = await useFetch(`/api/course${idService ? "?idService=" + idService : ""}`, "$DW8ycvAIQY");
      this.courses = data.value.data;
    },
    async update(body) {
      this.loading = true;
      const { data } = await useFetch("/api/course", {
        method: "PATCH",
        body
      }, "$ynEEKJf8oS");
      this.loading = false;
      this.showForm = false;
      this.courses = this.courses.map((x) => x._id === body._id ? data.value : x);
    },
    async delete(id) {
      this.loading = true;
      await useFetch(`/api/course/${id}`, {
        method: "DELETE"
      }, "$2Qi63FBHcD");
      this.courses = this.courses.filter((x) => x._id !== id);
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
    coursesReportXLSX(state) {
      return state.courses.map((x) => ({
        nombre: x.name,
        inicio: moment(x.startDate).format("DD-MM-YYYY"),
        fin: moment(x.endDate).format("DD-MM-YYYY"),
        lugar: x.location,
        profesor: x._teacher.fullName
      }));
    }
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableCourse",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, signOut } = useAuth();
    const courseStore = useCourseStore();
    const { courses } = storeToRefs(courseStore);
    [__temp, __restore] = withAsyncContext(() => courseStore.getAll(data.value._service)), await __temp, __restore();
    const editCourse = (course) => {
      courseStore.setCurrent(course);
      courseStore.setShowForm(true);
    };
    const confirmCourse = (course) => {
      courseStore.setCurrent(course);
      courseStore.setShowConfirm(true);
    };
    const formatDate = (date) => {
      return moment(date).format("DD/MM/YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VTable = resolveComponent("VTable");
      const _component_VChipGroup = resolveComponent("VChipGroup");
      const _component_VChip = resolveComponent("VChip");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VTable, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th${_scopeId2}>Nombre</th><th${_scopeId2}>Fecha</th><th${_scopeId2}>Lugar</th><th${_scopeId2}>Horarios</th><th${_scopeId2}>Profesor</th><th${_scopeId2}>Acciones</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(courses), (i) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(i.name)}</td><td${_scopeId2}>${ssrInterpolate(formatDate(i.startDate))} - ${ssrInterpolate(formatDate(i.endDate))}</td><td${_scopeId2}>${ssrInterpolate(i.location)}</td><th${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_VChipGroup, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(i.schedules, (item) => {
                            _push4(ssrRenderComponent(_component_VChip, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.day)} ${ssrInterpolate(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.startTime))} - ${ssrInterpolate(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.endTime))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.day) + " " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.startTime)) + " - " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.endTime)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(i.schedules, (item) => {
                              return openBlock(), createBlock(_component_VChip, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.day) + " " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.startTime)) + " - " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.endTime)), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</th><th${_scopeId2}>${ssrInterpolate(i._teacher.fullName)}</th><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-eye",
                      color: "warning",
                      variant: "text",
                      title: "Editar",
                      onClick: ($event) => editCourse(i)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-delete",
                      color: "error",
                      variant: "text",
                      title: "Eliminar",
                      onClick: ($event) => confirmCourse(i)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_VBtn, {
                      icon: "mdi-list-box-outline",
                      color: "success",
                      variant: "text",
                      title: "Inscripciones",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/${unref(data).rol}/inscription/${i._id}`)
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", null, "Nombre"),
                        createVNode("th", null, "Fecha"),
                        createVNode("th", null, "Lugar"),
                        createVNode("th", null, "Horarios"),
                        createVNode("th", null, "Profesor"),
                        createVNode("th", null, "Acciones")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (i) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", null, toDisplayString(i.name), 1),
                          createVNode("td", null, toDisplayString(formatDate(i.startDate)) + " - " + toDisplayString(formatDate(i.endDate)), 1),
                          createVNode("td", null, toDisplayString(i.location), 1),
                          createVNode("th", null, [
                            createVNode(_component_VChipGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(i.schedules, (item) => {
                                  return openBlock(), createBlock(_component_VChip, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.day) + " " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.startTime)) + " - " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.endTime)), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("th", null, toDisplayString(i._teacher.fullName), 1),
                          createVNode("td", null, [
                            createVNode(_component_VBtn, {
                              icon: "mdi-eye",
                              color: "warning",
                              variant: "text",
                              title: "Editar",
                              onClick: ($event) => editCourse(i)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_VBtn, {
                              icon: "mdi-delete",
                              color: "error",
                              variant: "text",
                              title: "Eliminar",
                              onClick: ($event) => confirmCourse(i)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_VBtn, {
                              icon: "mdi-list-box-outline",
                              color: "success",
                              variant: "text",
                              title: "Inscripciones",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/${unref(data).rol}/inscription/${i._id}`)
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
                      createVNode("th", null, "Fecha"),
                      createVNode("th", null, "Lugar"),
                      createVNode("th", null, "Horarios"),
                      createVNode("th", null, "Profesor"),
                      createVNode("th", null, "Acciones")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (i) => {
                      return openBlock(), createBlock("tr", null, [
                        createVNode("td", null, toDisplayString(i.name), 1),
                        createVNode("td", null, toDisplayString(formatDate(i.startDate)) + " - " + toDisplayString(formatDate(i.endDate)), 1),
                        createVNode("td", null, toDisplayString(i.location), 1),
                        createVNode("th", null, [
                          createVNode(_component_VChipGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(i.schedules, (item) => {
                                return openBlock(), createBlock(_component_VChip, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.day) + " " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.startTime)) + " - " + toDisplayString(("convertUtcToLocalTime" in _ctx ? _ctx.convertUtcToLocalTime : unref(convertUtcToLocalTime))(item.endTime)), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("th", null, toDisplayString(i._teacher.fullName), 1),
                        createVNode("td", null, [
                          createVNode(_component_VBtn, {
                            icon: "mdi-eye",
                            color: "warning",
                            variant: "text",
                            title: "Editar",
                            onClick: ($event) => editCourse(i)
                          }, null, 8, ["onClick"]),
                          createVNode(_component_VBtn, {
                            icon: "mdi-delete",
                            color: "error",
                            variant: "text",
                            title: "Eliminar",
                            onClick: ($event) => confirmCourse(i)
                          }, null, 8, ["onClick"]),
                          createVNode(_component_VBtn, {
                            icon: "mdi-list-box-outline",
                            color: "success",
                            variant: "text",
                            title: "Inscripciones",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/${unref(data).rol}/inscription/${i._id}`)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableCourse.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormCourse",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const formRef = ref(null);
    const courseStore = useCourseStore();
    const serviceStore = useServiceStore();
    const teacheStore = useTeacherStore();
    const { services } = storeToRefs(serviceStore);
    const { teachers } = storeToRefs(teacheStore);
    const { loading, current } = storeToRefs(courseStore);
    const formData = reactive({
      name: "",
      spaces: 0,
      startDate: "",
      endDate: "",
      schedules: [],
      location: "",
      rangeAge: {
        min: 12,
        max: 50
      },
      _service: "",
      _teacher: ""
    });
    const schedule = reactive({
      day: "",
      endTime: "",
      startTime: ""
    });
    const rules = {
      required: [
        (value) => !!value || "campo requerido!"
      ],
      spaces: [
        (value) => !!value || "campo requerido!",
        (value) => value >= 1 || "debe ser positivo"
      ],
      endDate: [
        (value) => !!value || "campo requerido!",
        (value) => !!formData.startDate && moment(value).isAfter(moment(formData.startDate)) || "Debe ser mayor que la fecha inicial"
      ],
      minAge: [
        (value) => !!value || "campo requerido!",
        (value) => value >= 1 && value <= 120 || "Edad inv\xE1lida"
      ],
      maxAge: [
        (value) => formData.rangeAge.min <= value || "no puede ser menor que la edad m\xEDnima"
      ]
    };
    const title = computed(() => current.value ? "Editar curso" : "Agregar curso");
    const handleSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        if (current.value) {
          await courseStore.update({
            ...formData,
            _id: current.value._id,
            startDate: moment(formData.startDate + "").utc().valueOf(),
            endDate: moment(formData.endDate).utc().valueOf(),
            schedules: formData.schedules.map((x) => ({ ...x, startTime: convertTimeUtc(x.startTime), endTime: convertTimeUtc(x.endTime) }))
          });
        } else {
          await courseStore.create({
            ...formData,
            startDate: moment(formData.startDate + "").utc().valueOf(),
            endDate: moment(formData.endDate).utc().valueOf(),
            schedules: formData.schedules.map((x) => ({ ...x, startTime: convertTimeUtc(x.startTime), endTime: convertTimeUtc(x.endTime) }))
          });
        }
      }
    };
    const convertTimeUtc = (time) => {
      return moment(`${moment().format("yyyy-MM-DD")}T${time}`).utc().valueOf();
    };
    const addSchedule = () => {
      if (schedule.day !== "" && schedule.startTime !== "" && schedule.endTime !== "") {
        formData.schedules.push({ ...schedule });
        schedule.day = "";
        schedule.startTime = "";
        schedule.endTime = "";
      }
    };
    const cancel = () => {
      courseStore.setShowForm(false);
    };
    [__temp, __restore] = withAsyncContext(() => serviceStore.getServices()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => teacheStore.getAll()), await __temp, __restore();
    onUnmounted(() => {
      courseStore.setCurrent(null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_VSelect = resolveComponent("VSelect");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VChip = resolveComponent("VChip");
      _push(ssrRenderComponent(_component_VCard, mergeProps({ elevation: "5" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VCardTitle, { class: "text-center text-h4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(title))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(title)), 1)
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
                                      type: "number",
                                      modelValue: unref(formData).spaces,
                                      "onUpdate:modelValue": ($event) => unref(formData).spaces = $event,
                                      modelModifiers: { number: true },
                                      variant: "outlined",
                                      label: "Cupos",
                                      rules: rules.spaces
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "number",
                                        modelValue: unref(formData).spaces,
                                        "onUpdate:modelValue": ($event) => unref(formData).spaces = $event,
                                        modelModifiers: { number: true },
                                        variant: "outlined",
                                        label: "Cupos",
                                        rules: rules.spaces
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
                                      type: "number",
                                      modelValue: unref(formData).spaces,
                                      "onUpdate:modelValue": ($event) => unref(formData).spaces = $event,
                                      modelModifiers: { number: true },
                                      variant: "outlined",
                                      label: "Cupos",
                                      rules: rules.spaces
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
                                      type: "date",
                                      variant: "underlined",
                                      label: "Fecha inicio",
                                      modelValue: unref(formData).startDate,
                                      "onUpdate:modelValue": ($event) => unref(formData).startDate = $event,
                                      modelModifiers: { trim: true }
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "date",
                                        variant: "underlined",
                                        label: "Fecha inicio",
                                        modelValue: unref(formData).startDate,
                                        "onUpdate:modelValue": ($event) => unref(formData).startDate = $event,
                                        modelModifiers: { trim: true }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      variant: "underlined",
                                      label: "Fecha fin",
                                      rules: rules.endDate,
                                      modelValue: unref(formData).endDate,
                                      "onUpdate:modelValue": ($event) => unref(formData).endDate = $event,
                                      modelModifiers: { trim: true }
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "date",
                                        variant: "underlined",
                                        label: "Fecha fin",
                                        rules: rules.endDate,
                                        modelValue: unref(formData).endDate,
                                        "onUpdate:modelValue": ($event) => unref(formData).endDate = $event,
                                        modelModifiers: { trim: true }
                                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
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
                                      type: "date",
                                      variant: "underlined",
                                      label: "Fecha inicio",
                                      modelValue: unref(formData).startDate,
                                      "onUpdate:modelValue": ($event) => unref(formData).startDate = $event,
                                      modelModifiers: { trim: true }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      type: "date",
                                      variant: "underlined",
                                      label: "Fecha fin",
                                      rules: rules.endDate,
                                      modelValue: unref(formData).endDate,
                                      "onUpdate:modelValue": ($event) => unref(formData).endDate = $event,
                                      modelModifiers: { trim: true }
                                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
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
                                    _push6(`<p${_scopeId5}>Agregue el horario</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, "Agregue el horario")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, "Agregue el horario")
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
                                      label: "D\xEDa",
                                      items: unref(dias),
                                      disabled: !unref(formData).startDate,
                                      modelValue: unref(schedule).day,
                                      "onUpdate:modelValue": ($event) => unref(schedule).day = $event
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VSelect, {
                                        label: "D\xEDa",
                                        items: unref(dias),
                                        disabled: !unref(formData).startDate,
                                        modelValue: unref(schedule).day,
                                        "onUpdate:modelValue": ($event) => unref(schedule).day = $event
                                      }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VTextField, {
                                      type: "time",
                                      variant: "underlined",
                                      label: "Hora inicio",
                                      disabled: !unref(formData).startDate,
                                      modelValue: unref(schedule).startTime,
                                      "onUpdate:modelValue": ($event) => unref(schedule).startTime = $event,
                                      modelModifiers: { trim: true }
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "time",
                                        variant: "underlined",
                                        label: "Hora inicio",
                                        disabled: !unref(formData).startDate,
                                        modelValue: unref(schedule).startTime,
                                        "onUpdate:modelValue": ($event) => unref(schedule).startTime = $event,
                                        modelModifiers: { trim: true }
                                      }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VTextField, {
                                      type: "time",
                                      variant: "underlined",
                                      label: "Hora fin",
                                      disabled: !unref(formData).startDate,
                                      modelValue: unref(schedule).endTime,
                                      "onUpdate:modelValue": ($event) => unref(schedule).endTime = $event,
                                      modelModifiers: { trim: true }
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "time",
                                        variant: "underlined",
                                        label: "Hora fin",
                                        disabled: !unref(formData).startDate,
                                        modelValue: unref(schedule).endTime,
                                        "onUpdate:modelValue": ($event) => unref(schedule).endTime = $event,
                                        modelModifiers: { trim: true }
                                      }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VBtn, {
                                      color: "primary",
                                      icon: "mdi-plus",
                                      onClick: addSchedule,
                                      fab: "",
                                      disabled: !unref(formData).startDate
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VBtn, {
                                        color: "primary",
                                        icon: "mdi-plus",
                                        onClick: addSchedule,
                                        fab: "",
                                        disabled: !unref(formData).startDate
                                      }, null, 8, ["disabled"])
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
                                      label: "D\xEDa",
                                      items: unref(dias),
                                      disabled: !unref(formData).startDate,
                                      modelValue: unref(schedule).day,
                                      "onUpdate:modelValue": ($event) => unref(schedule).day = $event
                                    }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      type: "time",
                                      variant: "underlined",
                                      label: "Hora inicio",
                                      disabled: !unref(formData).startDate,
                                      modelValue: unref(schedule).startTime,
                                      "onUpdate:modelValue": ($event) => unref(schedule).startTime = $event,
                                      modelModifiers: { trim: true }
                                    }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      type: "time",
                                      variant: "underlined",
                                      label: "Hora fin",
                                      disabled: !unref(formData).startDate,
                                      modelValue: unref(schedule).endTime,
                                      "onUpdate:modelValue": ($event) => unref(schedule).endTime = $event,
                                      modelModifiers: { trim: true }
                                    }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, { cols: "auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_VBtn, {
                                      color: "primary",
                                      icon: "mdi-plus",
                                      onClick: addSchedule,
                                      fab: "",
                                      disabled: !unref(formData).startDate
                                    }, null, 8, ["disabled"])
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
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(formData).schedules, (i) => {
                                _push5(ssrRenderComponent(_component_VCol, { cols: "auto" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_VChip, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(i.day)} ${ssrInterpolate(i.startTime)} - ${ssrInterpolate(i.endTime)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(i.day) + " " + toDisplayString(i.startTime) + " - " + toDisplayString(i.endTime), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_VChip, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(i.day) + " " + toDisplayString(i.startTime) + " - " + toDisplayString(i.endTime), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(formData).schedules, (i) => {
                                  return openBlock(), createBlock(_component_VCol, { cols: "auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VChip, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(i.day) + " " + toDisplayString(i.startTime) + " - " + toDisplayString(i.endTime), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
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
                                      variant: "outlined",
                                      modelValue: unref(formData)._service,
                                      "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                                      label: "Servicio",
                                      items: unref(services),
                                      "item-title": "name",
                                      "item-value": "_id",
                                      rules: rules.required
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VSelect, {
                                        variant: "outlined",
                                        modelValue: unref(formData)._service,
                                        "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                                        label: "Servicio",
                                        items: unref(services),
                                        "item-title": "name",
                                        "item-value": "_id",
                                        rules: rules.required
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCol, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_VSelect, {
                                      label: "Profesor",
                                      variant: "outlined",
                                      modelValue: unref(formData)._teacher,
                                      "onUpdate:modelValue": ($event) => unref(formData)._teacher = $event,
                                      items: unref(teachers),
                                      "item-title": "fullName",
                                      "item-value": "_id",
                                      rules: rules.required
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VSelect, {
                                        label: "Profesor",
                                        variant: "outlined",
                                        modelValue: unref(formData)._teacher,
                                        "onUpdate:modelValue": ($event) => unref(formData)._teacher = $event,
                                        items: unref(teachers),
                                        "item-title": "fullName",
                                        "item-value": "_id",
                                        rules: rules.required
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
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
                                      variant: "outlined",
                                      modelValue: unref(formData)._service,
                                      "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                                      label: "Servicio",
                                      items: unref(services),
                                      "item-title": "name",
                                      "item-value": "_id",
                                      rules: rules.required
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VSelect, {
                                      label: "Profesor",
                                      variant: "outlined",
                                      modelValue: unref(formData)._teacher,
                                      "onUpdate:modelValue": ($event) => unref(formData)._teacher = $event,
                                      items: unref(teachers),
                                      "item-title": "fullName",
                                      "item-value": "_id",
                                      rules: rules.required
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
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
                                      modelValue: unref(formData).rangeAge.min,
                                      "onUpdate:modelValue": ($event) => unref(formData).rangeAge.min = $event,
                                      variant: "outlined",
                                      label: "Edad m\xEDnima",
                                      rules: rules.minAge
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        modelValue: unref(formData).rangeAge.min,
                                        "onUpdate:modelValue": ($event) => unref(formData).rangeAge.min = $event,
                                        variant: "outlined",
                                        label: "Edad m\xEDnima",
                                        rules: rules.minAge
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
                                      type: "number",
                                      modelValue: unref(formData).rangeAge.max,
                                      "onUpdate:modelValue": ($event) => unref(formData).rangeAge.max = $event,
                                      modelModifiers: { number: true },
                                      variant: "outlined",
                                      label: "Edad m\xE1xima",
                                      rules: [...rules.minAge, ...rules.maxAge]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        type: "number",
                                        modelValue: unref(formData).rangeAge.max,
                                        "onUpdate:modelValue": ($event) => unref(formData).rangeAge.max = $event,
                                        modelModifiers: { number: true },
                                        variant: "outlined",
                                        label: "Edad m\xE1xima",
                                        rules: [...rules.minAge, ...rules.maxAge]
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
                                      modelValue: unref(formData).rangeAge.min,
                                      "onUpdate:modelValue": ($event) => unref(formData).rangeAge.min = $event,
                                      variant: "outlined",
                                      label: "Edad m\xEDnima",
                                      rules: rules.minAge
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCol, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      type: "number",
                                      modelValue: unref(formData).rangeAge.max,
                                      "onUpdate:modelValue": ($event) => unref(formData).rangeAge.max = $event,
                                      modelModifiers: { number: true },
                                      variant: "outlined",
                                      label: "Edad m\xE1xima",
                                      rules: [...rules.minAge, ...rules.maxAge]
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
                                      modelValue: unref(formData).location,
                                      "onUpdate:modelValue": ($event) => unref(formData).location = $event,
                                      variant: "outlined",
                                      label: "Lugar",
                                      rules: rules.required
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_VTextField, {
                                        modelValue: unref(formData).location,
                                        "onUpdate:modelValue": ($event) => unref(formData).location = $event,
                                        variant: "outlined",
                                        label: "Lugar",
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
                                      modelValue: unref(formData).location,
                                      "onUpdate:modelValue": ($event) => unref(formData).location = $event,
                                      variant: "outlined",
                                      label: "Lugar",
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
                        _push4(ssrRenderComponent(_component_VBtn, {
                          class: "mt-4",
                          variant: "tonal",
                          type: "submit",
                          loading: unref(loading),
                          block: "",
                          disabled: unref(formData).schedules.length === 0,
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
                                    type: "number",
                                    modelValue: unref(formData).spaces,
                                    "onUpdate:modelValue": ($event) => unref(formData).spaces = $event,
                                    modelModifiers: { number: true },
                                    variant: "outlined",
                                    label: "Cupos",
                                    rules: rules.spaces
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
                                    type: "date",
                                    variant: "underlined",
                                    label: "Fecha inicio",
                                    modelValue: unref(formData).startDate,
                                    "onUpdate:modelValue": ($event) => unref(formData).startDate = $event,
                                    modelModifiers: { trim: true }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    type: "date",
                                    variant: "underlined",
                                    label: "Fecha fin",
                                    rules: rules.endDate,
                                    modelValue: unref(formData).endDate,
                                    "onUpdate:modelValue": ($event) => unref(formData).endDate = $event,
                                    modelModifiers: { trim: true }
                                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
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
                                  createVNode("p", null, "Agregue el horario")
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
                                    label: "D\xEDa",
                                    items: unref(dias),
                                    disabled: !unref(formData).startDate,
                                    modelValue: unref(schedule).day,
                                    "onUpdate:modelValue": ($event) => unref(schedule).day = $event
                                  }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    type: "time",
                                    variant: "underlined",
                                    label: "Hora inicio",
                                    disabled: !unref(formData).startDate,
                                    modelValue: unref(schedule).startTime,
                                    "onUpdate:modelValue": ($event) => unref(schedule).startTime = $event,
                                    modelModifiers: { trim: true }
                                  }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    type: "time",
                                    variant: "underlined",
                                    label: "Hora fin",
                                    disabled: !unref(formData).startDate,
                                    modelValue: unref(schedule).endTime,
                                    "onUpdate:modelValue": ($event) => unref(schedule).endTime = $event,
                                    modelModifiers: { trim: true }
                                  }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, { cols: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VBtn, {
                                    color: "primary",
                                    icon: "mdi-plus",
                                    onClick: addSchedule,
                                    fab: "",
                                    disabled: !unref(formData).startDate
                                  }, null, 8, ["disabled"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(formData).schedules, (i) => {
                                return openBlock(), createBlock(_component_VCol, { cols: "auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_VChip, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(i.day) + " " + toDisplayString(i.startTime) + " - " + toDisplayString(i.endTime), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VSelect, {
                                    variant: "outlined",
                                    modelValue: unref(formData)._service,
                                    "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                                    label: "Servicio",
                                    items: unref(services),
                                    "item-title": "name",
                                    "item-value": "_id",
                                    rules: rules.required
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VSelect, {
                                    label: "Profesor",
                                    variant: "outlined",
                                    modelValue: unref(formData)._teacher,
                                    "onUpdate:modelValue": ($event) => unref(formData)._teacher = $event,
                                    items: unref(teachers),
                                    "item-title": "fullName",
                                    "item-value": "_id",
                                    rules: rules.required
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
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
                                    modelValue: unref(formData).rangeAge.min,
                                    "onUpdate:modelValue": ($event) => unref(formData).rangeAge.min = $event,
                                    variant: "outlined",
                                    label: "Edad m\xEDnima",
                                    rules: rules.minAge
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCol, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    type: "number",
                                    modelValue: unref(formData).rangeAge.max,
                                    "onUpdate:modelValue": ($event) => unref(formData).rangeAge.max = $event,
                                    modelModifiers: { number: true },
                                    variant: "outlined",
                                    label: "Edad m\xE1xima",
                                    rules: [...rules.minAge, ...rules.maxAge]
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
                                    modelValue: unref(formData).location,
                                    "onUpdate:modelValue": ($event) => unref(formData).location = $event,
                                    variant: "outlined",
                                    label: "Lugar",
                                    rules: rules.required
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VBtn, {
                            class: "mt-4",
                            variant: "tonal",
                            type: "submit",
                            loading: unref(loading),
                            block: "",
                            disabled: unref(formData).schedules.length === 0,
                            color: "primary",
                            text: "Guardar"
                          }, null, 8, ["loading", "disabled"]),
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
                                  type: "number",
                                  modelValue: unref(formData).spaces,
                                  "onUpdate:modelValue": ($event) => unref(formData).spaces = $event,
                                  modelModifiers: { number: true },
                                  variant: "outlined",
                                  label: "Cupos",
                                  rules: rules.spaces
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
                                  type: "date",
                                  variant: "underlined",
                                  label: "Fecha inicio",
                                  modelValue: unref(formData).startDate,
                                  "onUpdate:modelValue": ($event) => unref(formData).startDate = $event,
                                  modelModifiers: { trim: true }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextField, {
                                  type: "date",
                                  variant: "underlined",
                                  label: "Fecha fin",
                                  rules: rules.endDate,
                                  modelValue: unref(formData).endDate,
                                  "onUpdate:modelValue": ($event) => unref(formData).endDate = $event,
                                  modelModifiers: { trim: true }
                                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
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
                                createVNode("p", null, "Agregue el horario")
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
                                  label: "D\xEDa",
                                  items: unref(dias),
                                  disabled: !unref(formData).startDate,
                                  modelValue: unref(schedule).day,
                                  "onUpdate:modelValue": ($event) => unref(schedule).day = $event
                                }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextField, {
                                  type: "time",
                                  variant: "underlined",
                                  label: "Hora inicio",
                                  disabled: !unref(formData).startDate,
                                  modelValue: unref(schedule).startTime,
                                  "onUpdate:modelValue": ($event) => unref(schedule).startTime = $event,
                                  modelModifiers: { trim: true }
                                }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextField, {
                                  type: "time",
                                  variant: "underlined",
                                  label: "Hora fin",
                                  disabled: !unref(formData).startDate,
                                  modelValue: unref(schedule).endTime,
                                  "onUpdate:modelValue": ($event) => unref(schedule).endTime = $event,
                                  modelModifiers: { trim: true }
                                }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, { cols: "auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_VBtn, {
                                  color: "primary",
                                  icon: "mdi-plus",
                                  onClick: addSchedule,
                                  fab: "",
                                  disabled: !unref(formData).startDate
                                }, null, 8, ["disabled"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(formData).schedules, (i) => {
                              return openBlock(), createBlock(_component_VCol, { cols: "auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VChip, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(i.day) + " " + toDisplayString(i.startTime) + " - " + toDisplayString(i.endTime), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VRow, null, {
                          default: withCtx(() => [
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  variant: "outlined",
                                  modelValue: unref(formData)._service,
                                  "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                                  label: "Servicio",
                                  items: unref(services),
                                  "item-title": "name",
                                  "item-value": "_id",
                                  rules: rules.required
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  label: "Profesor",
                                  variant: "outlined",
                                  modelValue: unref(formData)._teacher,
                                  "onUpdate:modelValue": ($event) => unref(formData)._teacher = $event,
                                  items: unref(teachers),
                                  "item-title": "fullName",
                                  "item-value": "_id",
                                  rules: rules.required
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
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
                                  modelValue: unref(formData).rangeAge.min,
                                  "onUpdate:modelValue": ($event) => unref(formData).rangeAge.min = $event,
                                  variant: "outlined",
                                  label: "Edad m\xEDnima",
                                  rules: rules.minAge
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCol, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextField, {
                                  type: "number",
                                  modelValue: unref(formData).rangeAge.max,
                                  "onUpdate:modelValue": ($event) => unref(formData).rangeAge.max = $event,
                                  modelModifiers: { number: true },
                                  variant: "outlined",
                                  label: "Edad m\xE1xima",
                                  rules: [...rules.minAge, ...rules.maxAge]
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
                                  modelValue: unref(formData).location,
                                  "onUpdate:modelValue": ($event) => unref(formData).location = $event,
                                  variant: "outlined",
                                  label: "Lugar",
                                  rules: rules.required
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VBtn, {
                          class: "mt-4",
                          variant: "tonal",
                          type: "submit",
                          loading: unref(loading),
                          block: "",
                          disabled: unref(formData).schedules.length === 0,
                          color: "primary",
                          text: "Guardar"
                        }, null, 8, ["loading", "disabled"]),
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
                  createTextVNode(toDisplayString(unref(title)), 1)
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
                                type: "number",
                                modelValue: unref(formData).spaces,
                                "onUpdate:modelValue": ($event) => unref(formData).spaces = $event,
                                modelModifiers: { number: true },
                                variant: "outlined",
                                label: "Cupos",
                                rules: rules.spaces
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
                                type: "date",
                                variant: "underlined",
                                label: "Fecha inicio",
                                modelValue: unref(formData).startDate,
                                "onUpdate:modelValue": ($event) => unref(formData).startDate = $event,
                                modelModifiers: { trim: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                type: "date",
                                variant: "underlined",
                                label: "Fecha fin",
                                rules: rules.endDate,
                                modelValue: unref(formData).endDate,
                                "onUpdate:modelValue": ($event) => unref(formData).endDate = $event,
                                modelModifiers: { trim: true }
                              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
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
                              createVNode("p", null, "Agregue el horario")
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
                                label: "D\xEDa",
                                items: unref(dias),
                                disabled: !unref(formData).startDate,
                                modelValue: unref(schedule).day,
                                "onUpdate:modelValue": ($event) => unref(schedule).day = $event
                              }, null, 8, ["items", "disabled", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                type: "time",
                                variant: "underlined",
                                label: "Hora inicio",
                                disabled: !unref(formData).startDate,
                                modelValue: unref(schedule).startTime,
                                "onUpdate:modelValue": ($event) => unref(schedule).startTime = $event,
                                modelModifiers: { trim: true }
                              }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                type: "time",
                                variant: "underlined",
                                label: "Hora fin",
                                disabled: !unref(formData).startDate,
                                modelValue: unref(schedule).endTime,
                                "onUpdate:modelValue": ($event) => unref(schedule).endTime = $event,
                                modelModifiers: { trim: true }
                              }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, { cols: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VBtn, {
                                color: "primary",
                                icon: "mdi-plus",
                                onClick: addSchedule,
                                fab: "",
                                disabled: !unref(formData).startDate
                              }, null, 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(formData).schedules, (i) => {
                            return openBlock(), createBlock(_component_VCol, { cols: "auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_VChip, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(i.day) + " " + toDisplayString(i.startTime) + " - " + toDisplayString(i.endTime), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 256))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                variant: "outlined",
                                modelValue: unref(formData)._service,
                                "onUpdate:modelValue": ($event) => unref(formData)._service = $event,
                                label: "Servicio",
                                items: unref(services),
                                "item-title": "name",
                                "item-value": "_id",
                                rules: rules.required
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                label: "Profesor",
                                variant: "outlined",
                                modelValue: unref(formData)._teacher,
                                "onUpdate:modelValue": ($event) => unref(formData)._teacher = $event,
                                items: unref(teachers),
                                "item-title": "fullName",
                                "item-value": "_id",
                                rules: rules.required
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
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
                                modelValue: unref(formData).rangeAge.min,
                                "onUpdate:modelValue": ($event) => unref(formData).rangeAge.min = $event,
                                variant: "outlined",
                                label: "Edad m\xEDnima",
                                rules: rules.minAge
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCol, null, {
                            default: withCtx(() => [
                              createVNode(_component_VTextField, {
                                type: "number",
                                modelValue: unref(formData).rangeAge.max,
                                "onUpdate:modelValue": ($event) => unref(formData).rangeAge.max = $event,
                                modelModifiers: { number: true },
                                variant: "outlined",
                                label: "Edad m\xE1xima",
                                rules: [...rules.minAge, ...rules.maxAge]
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
                                modelValue: unref(formData).location,
                                "onUpdate:modelValue": ($event) => unref(formData).location = $event,
                                variant: "outlined",
                                label: "Lugar",
                                rules: rules.required
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VBtn, {
                        class: "mt-4",
                        variant: "tonal",
                        type: "submit",
                        loading: unref(loading),
                        block: "",
                        disabled: unref(formData).schedules.length === 0,
                        color: "primary",
                        text: "Guardar"
                      }, null, 8, ["loading", "disabled"]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormCourse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConfirmCourse",
  __ssrInlineRender: true,
  setup(__props) {
    const courseStore = useCourseStore();
    const { current, loading } = storeToRefs(courseStore);
    const cancel = () => {
      courseStore.setShowConfirm(false);
    };
    const confirm = async () => {
      await courseStore.delete(current.value._id);
    };
    onUnmounted(() => {
      courseStore.setCurrent(null);
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
                  _push3(` Eliminar curso `);
                } else {
                  return [
                    createTextVNode(" Eliminar curso ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(` \xBFEst\xE1s seguro de eliminar el curso ${ssrInterpolate((_a = unref(current)) == null ? void 0 : _a.name)}, se borrar\xE1 toda la informaci\xF3n relacionada? `);
                } else {
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar el curso " + toDisplayString((_b = unref(current)) == null ? void 0 : _b.name) + ", se borrar\xE1 toda la informaci\xF3n relacionada? ", 1)
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
                  createTextVNode(" Eliminar curso ")
                ]),
                _: 1
              }),
              createVNode(_component_VCardText, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(" \xBFEst\xE1s seguro de eliminar el curso " + toDisplayString((_a = unref(current)) == null ? void 0 : _a.name) + ", se borrar\xE1 toda la informaci\xF3n relacionada? ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmCourse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b, useCourseStore as u };
//# sourceMappingURL=ConfirmCourse-802aad27.mjs.map
