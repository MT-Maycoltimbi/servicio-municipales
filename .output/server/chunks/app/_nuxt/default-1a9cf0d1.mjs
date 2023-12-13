import { a as useAuth, f as useTheme, n as navigateTo } from '../server.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, unref, renderSlot, createVNode, openBlock, createBlock, createCommentVNode, computed, createTextVNode, mergeProps, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Nabvar",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const { data, signOut } = useAuth();
    const changeTheme = () => {
      theme.global.name.value = theme.global.name.value === "dark" ? "light" : "dark";
    };
    const iconTheme = computed(() => {
      const value = theme.global.name.value;
      return value === "dark" ? "mdi-weather-night" : "mdi-weather-sunny";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VAppBar = resolveComponent("VAppBar");
      const _component_VImg = resolveComponent("VImg");
      const _component_VBtn = resolveComponent("VBtn");
      _push(ssrRenderComponent(_component_VAppBar, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sistema Municipal `);
          } else {
            return [
              createTextVNode(" Sistema Municipal ")
            ];
          }
        }),
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VImg, { src: "/images/logo.png" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VImg, { src: "/images/logo.png" })
            ];
          }
        }),
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VBtn, {
              icon: unref(iconTheme),
              onClick: ($event) => changeTheme()
            }, null, _parent2, _scopeId));
            if (unref(data)) {
              _push2(ssrRenderComponent(_component_VBtn, {
                onClick: unref(signOut),
                title: "Salir",
                icon: "mdi-logout",
                text: "Cerrar Sesi\xF3n"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_VBtn, {
                icon: unref(iconTheme),
                onClick: ($event) => changeTheme()
              }, null, 8, ["icon", "onClick"]),
              unref(data) ? (openBlock(), createBlock(_component_VBtn, {
                key: 0,
                onClick: unref(signOut),
                title: "Salir",
                icon: "mdi-logout",
                text: "Cerrar Sesi\xF3n"
              }, null, 8, ["onClick"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nabvar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavigationDrawer",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useAuth();
    const items = [
      {
        name: "Dashboard",
        route: "/admin",
        icon: "mdi-home"
      },
      {
        name: "Usuarios",
        route: "/admin/users",
        icon: "mdi-account-group"
      },
      {
        name: "Servicios",
        route: "/admin/services",
        icon: "mdi-account-check"
      },
      {
        name: "Profesores",
        route: "/admin/teachers",
        icon: "mdi-human-male-board-poll"
      },
      {
        name: "Cursos",
        route: "/admin/course",
        icon: "mdi-ticket"
      },
      {
        name: "Dashboard",
        route: "/assistant",
        icon: "mdi-home"
      },
      {
        name: "Cursos",
        route: "/assistant/course",
        icon: "mdi-ticket"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VNavigationDrawer = resolveComponent("VNavigationDrawer");
      const _component_VListItem = resolveComponent("VListItem");
      const _component_VDivider = resolveComponent("VDivider");
      const _component_VList = resolveComponent("VList");
      _push(ssrRenderComponent(_component_VNavigationDrawer, mergeProps({
        "expand-on-hover": "",
        rail: "",
        permanent: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(_component_VListItem, {
              "prepend-avatar": "https://pre00.deviantart.net/1fa9/th/pre/i/2010/182/2/d/facebook_avatar_3_by_cynfullpryde.jpg",
              title: (_b = (_a = unref(data)) == null ? void 0 : _a.user) == null ? void 0 : _b.name,
              nav: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (i) => {
                    _push3(`<!--[-->`);
                    if (i.route.includes(unref(data).rol)) {
                      _push3(ssrRenderComponent(_component_VListItem, {
                        link: "",
                        to: i.route,
                        "prepend-icon": i.icon,
                        title: i.name,
                        value: i.name,
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(i.route)
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(items, (i) => {
                      return openBlock(), createBlock(Fragment, {
                        key: i.name
                      }, [
                        i.route.includes(unref(data).rol) ? (openBlock(), createBlock(_component_VListItem, {
                          key: 0,
                          link: "",
                          to: i.route,
                          "prepend-icon": i.icon,
                          title: i.name,
                          value: i.name,
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(i.route)
                        }, null, 8, ["to", "prepend-icon", "title", "value", "onClick"])) : createCommentVNode("", true)
                      ], 64);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VListItem, {
                "prepend-avatar": "https://pre00.deviantart.net/1fa9/th/pre/i/2010/182/2/d/facebook_avatar_3_by_cynfullpryde.jpg",
                title: (_d = (_c = unref(data)) == null ? void 0 : _c.user) == null ? void 0 : _d.name,
                nav: ""
              }, null, 8, ["title"]),
              createVNode(_component_VDivider),
              createVNode(_component_VList, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(items, (i) => {
                    return openBlock(), createBlock(Fragment, {
                      key: i.name
                    }, [
                      i.route.includes(unref(data).rol) ? (openBlock(), createBlock(_component_VListItem, {
                        key: 0,
                        link: "",
                        to: i.route,
                        "prepend-icon": i.icon,
                        title: i.name,
                        value: i.name,
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(i.route)
                      }, null, 8, ["to", "prepend-icon", "title", "value", "onClick"])) : createCommentVNode("", true)
                    ], 64);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavigationDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VApp = resolveComponent("VApp");
      const _component_Nabvar = _sfc_main$2;
      const _component_NavigationDrawer = _sfc_main$1;
      const _component_VMain = resolveComponent("VMain");
      _push(ssrRenderComponent(_component_VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Nabvar, null, null, _parent2, _scopeId));
            if (unref(data)) {
              _push2(ssrRenderComponent(_component_NavigationDrawer, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Nabvar),
              unref(data) ? (openBlock(), createBlock(_component_NavigationDrawer, { key: 0 })) : createCommentVNode("", true),
              createVNode(_component_VMain, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-1a9cf0d1.mjs.map
