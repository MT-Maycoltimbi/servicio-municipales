import { u as useDashboardStore } from './dashboard-dab582c7.mjs';
import { defineComponent, withAsyncContext, resolveComponent, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs } from '../server.mjs';
import { Bar, Pie } from 'vue-chartjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const dashboardStore = useDashboardStore();
    const { barServices, pieZone, data, barCourses, pieSexByService } = storeToRefs(dashboardStore);
    const chartOptions = {
      responsive: true
    };
    [__temp, __restore] = withAsyncContext(() => dashboardStore.getStatistics()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VContainer = resolveComponent("VContainer");
      const _component_VRow = resolveComponent("VRow");
      const _component_VCol = resolveComponent("VCol");
      const _component_VCard = resolveComponent("VCard");
      const _component_VCardTitle = resolveComponent("VCardTitle");
      const _component_VCardText = resolveComponent("VCardText");
      const _component_VDivider = resolveComponent("VDivider");
      _push(ssrRenderComponent(_component_VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center text-h4"${_scopeId3}>Datos generales</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center text-h4" }, "Datos generales")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center text-h4" }, "Datos generales")
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
                  _push3(ssrRenderComponent(_component_VCol, { cols: "6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VCard, { width: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Servicios `);
                                  } else {
                                    return [
                                      createTextVNode(" Servicios ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Bar), {
                                      id: "my-chart-id",
                                      options: { ...chartOptions },
                                      data: unref(barServices)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Bar), {
                                        id: "my-chart-id",
                                        options: { ...chartOptions },
                                        data: unref(barServices)
                                      }, null, 8, ["options", "data"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Servicios ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Bar), {
                                      id: "my-chart-id",
                                      options: { ...chartOptions },
                                      data: unref(barServices)
                                    }, null, 8, ["options", "data"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VCard, { width: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Servicios ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Bar), {
                                    id: "my-chart-id",
                                    options: { ...chartOptions },
                                    data: unref(barServices)
                                  }, null, 8, ["options", "data"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VCol, { cols: "6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VCard, { width: "auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VCardTitle, { class: "text-h4 text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Por zona `);
                                  } else {
                                    return [
                                      createTextVNode(" Por zona ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Pie), {
                                      id: "my-chart-id",
                                      options: {
                                        responsive: true,
                                        maintainAspectRatio: false
                                        // plugins: {
                                        //   legend: {
                                        //     labels: {
                                        //       color: 'blue',
                                        //     },
                                        //   },
                                        // },  
                                      },
                                      data: unref(pieZone)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Pie), {
                                        id: "my-chart-id",
                                        options: {
                                          responsive: true,
                                          maintainAspectRatio: false
                                          // plugins: {
                                          //   legend: {
                                          //     labels: {
                                          //       color: 'blue',
                                          //     },
                                          //   },
                                          // },  
                                        },
                                        data: unref(pieZone)
                                      }, null, 8, ["data"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VCardTitle, { class: "text-h4 text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Por zona ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Pie), {
                                      id: "my-chart-id",
                                      options: {
                                        responsive: true,
                                        maintainAspectRatio: false
                                        // plugins: {
                                        //   legend: {
                                        //     labels: {
                                        //       color: 'blue',
                                        //     },
                                        //   },
                                        // },  
                                      },
                                      data: unref(pieZone)
                                    }, null, 8, ["data"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VCard, { width: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardTitle, { class: "text-h4 text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Por zona ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Pie), {
                                    id: "my-chart-id",
                                    options: {
                                      responsive: true,
                                      maintainAspectRatio: false
                                      // plugins: {
                                      //   legend: {
                                      //     labels: {
                                      //       color: 'blue',
                                      //     },
                                      //   },
                                      // },  
                                    },
                                    data: unref(pieZone)
                                  }, null, 8, ["data"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VCol, { cols: "6" }, {
                      default: withCtx(() => [
                        createVNode(_component_VCard, { width: "auto" }, {
                          default: withCtx(() => [
                            createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Servicios ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCardText, null, {
                              default: withCtx(() => [
                                createVNode(unref(Bar), {
                                  id: "my-chart-id",
                                  options: { ...chartOptions },
                                  data: unref(barServices)
                                }, null, 8, ["options", "data"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VCol, { cols: "6" }, {
                      default: withCtx(() => [
                        createVNode(_component_VCard, { width: "auto" }, {
                          default: withCtx(() => [
                            createVNode(_component_VCardTitle, { class: "text-h4 text-center" }, {
                              default: withCtx(() => [
                                createTextVNode(" Por zona ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VCardText, null, {
                              default: withCtx(() => [
                                createVNode(unref(Pie), {
                                  id: "my-chart-id",
                                  options: {
                                    responsive: true,
                                    maintainAspectRatio: false
                                    // plugins: {
                                    //   legend: {
                                    //     labels: {
                                    //       color: 'blue',
                                    //     },
                                    //   },
                                    // },  
                                  },
                                  data: unref(pieZone)
                                }, null, 8, ["data"])
                              ]),
                              _: 1
                            })
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
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (service) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_VDivider, { class: "ma-4" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_VCol, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h2 class="text-center text-h4"${_scopeId3}>${ssrInterpolate(service.name)}</h2>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-center text-h4" }, toDisplayString(service.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_VCol, null, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-center text-h4" }, toDisplayString(service.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_VCol, { cols: "6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_VCard, { width: "auto" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Cursos `);
                                    } else {
                                      return [
                                        createTextVNode(" Cursos ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_VCardText, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Bar), {
                                        options: { ...chartOptions },
                                        data: unref(barCourses)(service._id)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(Bar), {
                                          options: { ...chartOptions },
                                          data: unref(barCourses)(service._id)
                                        }, null, 8, ["options", "data"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cursos ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(Bar), {
                                        options: { ...chartOptions },
                                        data: unref(barCourses)(service._id)
                                      }, null, 8, ["options", "data"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_VCard, { width: "auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cursos ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Bar), {
                                      options: { ...chartOptions },
                                      data: unref(barCourses)(service._id)
                                    }, null, 8, ["options", "data"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_VCol, { cols: "6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_VCard, { width: "auto" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Por sexo `);
                                    } else {
                                      return [
                                        createTextVNode(" Por sexo ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_VCardText, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Pie), {
                                        id: "my-chart-id",
                                        options: {
                                          responsive: true,
                                          maintainAspectRatio: false
                                        },
                                        data: unref(pieSexByService)(service._id)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(Pie), {
                                          id: "my-chart-id",
                                          options: {
                                            responsive: true,
                                            maintainAspectRatio: false
                                          },
                                          data: unref(pieSexByService)(service._id)
                                        }, null, 8, ["data"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Por sexo ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(Pie), {
                                        id: "my-chart-id",
                                        options: {
                                          responsive: true,
                                          maintainAspectRatio: false
                                        },
                                        data: unref(pieSexByService)(service._id)
                                      }, null, 8, ["data"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_VCard, { width: "auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Por sexo ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Pie), {
                                      id: "my-chart-id",
                                      options: {
                                        responsive: true,
                                        maintainAspectRatio: false
                                      },
                                      data: unref(pieSexByService)(service._id)
                                    }, null, 8, ["data"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, { width: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cursos ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Bar), {
                                    options: { ...chartOptions },
                                    data: unref(barCourses)(service._id)
                                  }, null, 8, ["options", "data"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, { width: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Por sexo ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Pie), {
                                    id: "my-chart-id",
                                    options: {
                                      responsive: true,
                                      maintainAspectRatio: false
                                    },
                                    data: unref(pieSexByService)(service._id)
                                  }, null, 8, ["data"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, null, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center text-h4" }, "Datos generales")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_VRow, null, {
                default: withCtx(() => [
                  createVNode(_component_VCol, { cols: "6" }, {
                    default: withCtx(() => [
                      createVNode(_component_VCard, { width: "auto" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Servicios ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCardText, null, {
                            default: withCtx(() => [
                              createVNode(unref(Bar), {
                                id: "my-chart-id",
                                options: { ...chartOptions },
                                data: unref(barServices)
                              }, null, 8, ["options", "data"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VCol, { cols: "6" }, {
                    default: withCtx(() => [
                      createVNode(_component_VCard, { width: "auto" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCardTitle, { class: "text-h4 text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" Por zona ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VCardText, null, {
                            default: withCtx(() => [
                              createVNode(unref(Pie), {
                                id: "my-chart-id",
                                options: {
                                  responsive: true,
                                  maintainAspectRatio: false
                                  // plugins: {
                                  //   legend: {
                                  //     labels: {
                                  //       color: 'blue',
                                  //     },
                                  //   },
                                  // },  
                                },
                                data: unref(pieZone)
                              }, null, 8, ["data"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (service) => {
                return openBlock(), createBlock(Fragment, null, [
                  createVNode(_component_VDivider, { class: "ma-4" }),
                  createVNode(_component_VRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_VCol, null, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-center text-h4" }, toDisplayString(service.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_VRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, { width: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cursos ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Bar), {
                                    options: { ...chartOptions },
                                    data: unref(barCourses)(service._id)
                                  }, null, 8, ["options", "data"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode(_component_VCard, { width: "auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_VCardTitle, { class: "text-h5 text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Por sexo ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Pie), {
                                    id: "my-chart-id",
                                    options: {
                                      responsive: true,
                                      maintainAspectRatio: false
                                    },
                                    data: unref(pieSexByService)(service._id)
                                  }, null, 8, ["data"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ], 64);
              }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-68a08a26.mjs.map
