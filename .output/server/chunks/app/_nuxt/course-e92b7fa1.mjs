import { u as useCourseStore, _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './ConfirmCourse-802aad27.mjs';
import { e as exportXSLX } from './index-df451aa9.mjs';
import { defineComponent, resolveComponent, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { s as storeToRefs } from '../server.mjs';
import 'moment';
import './service-f0201810.mjs';
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
import './teacher-8f8d4486.mjs';
import './index-327045ba.mjs';
import 'stream';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'chart.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "course",
  __ssrInlineRender: true,
  setup(__props) {
    const courseStore = useCourseStore();
    const { showForm, showConfirm, coursesReportXLSX } = storeToRefs(courseStore);
    const toShowForm = () => {
      courseStore.setShowForm(true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_TableCourse = _sfc_main$2;
      const _component_VDialog = resolveComponent("VDialog");
      const _component_FormCourse = _sfc_main$1;
      const _component_ConfirmCourse = _sfc_main$3;
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
                        _push4(`<h2 class="text-center text-h3"${_scopeId3}>Cursos</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center text-h3" }, "Cursos")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center text-h3" }, "Cursos")
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
                          icon: "mdi-plus",
                          onClick: ($event) => toShowForm(),
                          color: "success"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            icon: "mdi-plus",
                            onClick: ($event) => toShowForm(),
                            color: "success"
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
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(coursesReportXLSX), "cursos")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            color: "success",
                            icon: "mdi-file-excel",
                            onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(coursesReportXLSX), "cursos")
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
                          icon: "mdi-plus",
                          onClick: ($event) => toShowForm(),
                          color: "success"
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
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(coursesReportXLSX), "cursos")
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
                        _push4(ssrRenderComponent(_component_TableCourse, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableCourse)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCourse)
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
                      createVNode("h2", { class: "text-center text-h3" }, "Cursos")
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
                        icon: "mdi-plus",
                        onClick: ($event) => toShowForm(),
                        color: "success"
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
                        onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(coursesReportXLSX), "cursos")
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
                      createVNode(_component_TableCourse)
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
            _push2(ssrRenderComponent(_component_FormCourse, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormCourse)
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
            _push2(ssrRenderComponent(_component_ConfirmCourse, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ConfirmCourse)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=course-e92b7fa1.mjs.map
