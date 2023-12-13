import { u as useInscriptionStore, _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './ConfirmInscription-3fbeb4f0.mjs';
import { e as exportXSLX } from './index-df451aa9.mjs';
import { defineComponent, withAsyncContext, resolveComponent, withCtx, unref, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs } from '../server.mjs';
import { useRoute } from 'vue-router';
import 'moment';
import './Error-ca355657.mjs';
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
import 'stream';
import 'unhead';
import '@unhead/shared';
import 'chart.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[idCourse]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { idCourse } = useRoute().params;
    const inscriptionStore = useInscriptionStore();
    const { currentCourse, showConfirm, showForm, inscriptionsReportXLSX } = storeToRefs(inscriptionStore);
    const toShowForm = () => {
      inscriptionStore.setShowForm(true);
    };
    [__temp, __restore] = withAsyncContext(() => inscriptionStore.getCourseById(idCourse)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VBtn = resolveComponent("VBtn");
      const _component_VSpacer = resolveComponent("VSpacer");
      const _component_TableInscription = _sfc_main$2;
      const _component_VDialog = resolveComponent("VDialog");
      const _component_FormInscription = _sfc_main$1;
      const _component_ConfirmInscription = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<h2 class="text-center text-h3"${_scopeId3}>Inscripciones de ${ssrInterpolate((_a = unref(currentCourse)) == null ? void 0 : _a.name)}</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center text-h3" }, "Inscripciones de " + toDisplayString((_b = unref(currentCourse)) == null ? void 0 : _b.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("h2", { class: "text-center text-h3" }, "Inscripciones de " + toDisplayString((_a = unref(currentCourse)) == null ? void 0 : _a.name), 1)
                        ];
                      }),
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
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(inscriptionsReportXLSX), "inscripciones")
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VBtn, {
                            color: "success",
                            icon: "mdi-file-excel",
                            onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(inscriptionsReportXLSX), "inscripciones")
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
                          onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(inscriptionsReportXLSX), "inscripciones")
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
                        _push4(ssrRenderComponent(_component_TableInscription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableInscription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableInscription)
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
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("h2", { class: "text-center text-h3" }, "Inscripciones de " + toDisplayString((_a = unref(currentCourse)) == null ? void 0 : _a.name), 1)
                      ];
                    }),
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
                        onClick: ($event) => ("exportXSLX" in _ctx ? _ctx.exportXSLX : unref(exportXSLX))(unref(inscriptionsReportXLSX), "inscripciones")
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
                      createVNode(_component_TableInscription)
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
            _push2(ssrRenderComponent(_component_FormInscription, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormInscription)
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
            _push2(ssrRenderComponent(_component_ConfirmInscription, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ConfirmInscription)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/assistant/inscription/[idCourse].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_idCourse_-c0284c11.mjs.map
