(self.webpackJsonp = self.webpackJsonp || []).push([
  [10],
  {
    10: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return s;
      }),
        r.d(t, "b", function() {
          return c;
        }),
        r.d(t, "c", function() {
          return l;
        });
      var n = r(5);
      function i() {
        var e = a([
          "\n  /* prevent clipping of positioned elements */\n  paper-dialog-scrollable {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: auto;\n    }\n  }\n\n  /* force smooth scrolling for iOS 10 */\n  paper-dialog-scrollable.can-scroll {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n\n  .paper-dialog-buttons {\n    align-items: flex-end;\n    padding: 8px;\n  }\n\n  @media all and (min-width: 450px) {\n    ha-paper-dialog {\n      min-width: 400px;\n    }\n  }\n\n  @media all and (max-width: 450px), all and (max-height: 500px) {\n    paper-dialog,\n    ha-paper-dialog {\n      margin: 0;\n      width: 100% !important;\n      max-height: calc(100% - 64px);\n\n      position: fixed !important;\n      bottom: 0px;\n      left: 0px;\n      right: 0px;\n      overflow: scroll;\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n  }\n\n  /* mwc-dialog (ha-dialog) styles */\n  ha-dialog {\n    --mdc-dialog-min-width: 400px;\n    --mdc-dialog-max-width: 600px;\n    --mdc-dialog-heading-ink-color: var(--primary-text-color);\n    --mdc-dialog-content-ink-color: var(--primary-text-color);\n    --justify-action-buttons: space-between;\n  }\n\n  ha-dialog .form {\n    padding-bottom: 24px;\n    color: var(--primary-text-color);\n  }\n\n  /* make dialog fullscreen on small screens */\n  @media all and (max-width: 450px), all and (max-height: 500px) {\n    ha-dialog {\n      --mdc-dialog-min-width: 100vw;\n      --mdc-dialog-max-height: 100vh;\n      --mdc-dialog-shape-radius: 0px;\n      --vertial-align-dialog: flex-end;\n    }\n  }\n  mwc-button.warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n  .error {\n    color: var(--google-red-500);\n  }\n"
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = a([
          "\n  :host {\n    @apply --paper-font-body1;\n  }\n\n  app-header-layout,\n  ha-app-layout {\n    background-color: var(--primary-background-color);\n  }\n\n  app-header,\n  app-toolbar {\n    background-color: var(--app-header-background-color);\n    font-weight: 400;\n    color: var(--app-header-text-color, white);\n  }\n\n  app-toolbar ha-menu-button + [main-title],\n  app-toolbar ha-paper-icon-button-arrow-prev + [main-title],\n  app-toolbar paper-icon-button + [main-title] {\n    margin-left: 24px;\n  }\n\n  h1 {\n    @apply --paper-font-title;\n  }\n\n  .secondary {\n    color: var(--secondary-text-color);\n  }\n\n  .error {\n    color: var(--google-red-500);\n  }\n\n  .warning {\n    color: var(--google-red-500);\n  }\n\n  mwc-button.warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n\n  button.link {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    text-align: left;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n\n  .card-actions a {\n    text-decoration: none;\n  }\n\n  .card-actions .warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n\n  .layout.horizontal,\n  .layout.vertical {\n    display: flex;\n  }\n  .layout.inline {\n    display: inline-flex;\n  }\n  .layout.horizontal {\n    flex-direction: row;\n  }\n  .layout.vertical {\n    flex-direction: column;\n  }\n  .layout.wrap {\n    flex-wrap: wrap;\n  }\n  .layout.no-wrap {\n    flex-wrap: nowrap;\n  }\n  .layout.center,\n  .layout.center-center {\n    align-items: center;\n  }\n  .layout.bottom {\n    align-items: flex-end;\n  }\n  .layout.center-justified,\n  .layout.center-center {\n    justify-content: center;\n  }\n  .flex {\n    flex: 1;\n    flex-basis: 0.000000001px;\n  }\n  .flex-auto {\n    flex: 1 1 auto;\n  }\n  .flex-none {\n    flex: none;\n  }\n  .layout.justified {\n    justify-content: space-between;\n  }\n"
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      function a(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var s = {
          "paper-spinner-color": "var(--primary-color)",
          "error-state-color": "var(--error-color)",
          "state-icon-unavailable-color": "var(--disabled-text-color)",
          "sidebar-text-color": "var(--primary-text-color)",
          "sidebar-background-color": "var(--paper-listbox-background-color);",
          "sidebar-selected-text-color": "var(--primary-color)",
          "sidebar-selected-icon-color": "var(--primary-color)",
          "sidebar-icon-color": "rgba(var(--rgb-primary-text-color), 0.6)",
          "switch-checked-color": "var(--primary-color)",
          "switch-checked-button-color":
            "var(--switch-checked-color, var(--primary-background-color))",
          "switch-checked-track-color": "var(--switch-checked-color, #000000)",
          "switch-unchecked-button-color":
            "var(--switch-unchecked-color, var(--primary-background-color))",
          "switch-unchecked-track-color":
            "var(--switch-unchecked-color, #000000)",
          "slider-color": "var(--primary-color)",
          "slider-secondary-color": "var(--light-primary-color)",
          "slider-bar-color": "var(--disabled-text-color)",
          "label-badge-grey": "var(--paper-grey-500)",
          "label-badge-background-color": "var(--card-background-color)",
          "label-badge-text-color": "rgba(var(--rgb-primary-text-color), 0.8)",
          "paper-card-background-color": "var(--card-background-color)",
          "paper-listbox-background-color": "var(--card-background-color)",
          "paper-item-icon-color": "var(--state-icon-color)",
          "paper-item-icon-active-color": "var(--state-icon-active-color)",
          "table-row-background-color": "var(--primary-background-color)",
          "table-row-alternative-background-color":
            "var(--secondary-background-color)",
          "paper-slider-knob-color": "var(--slider-color)",
          "paper-slider-knob-start-color": "var(--slider-color)",
          "paper-slider-pin-color": "var(--slider-color)",
          "paper-slider-active-color": "var(--slider-color)",
          "paper-slider-secondary-color": "var(--slider-secondary-color)",
          "paper-slider-container-color": "var(--slider-bar-color)",
          "data-table-background-color": "var(--card-background-color)",
          "mdc-theme-primary": "var(--primary-color)",
          "mdc-theme-secondary": "var(--accent-color)",
          "mdc-theme-background": "var(--primary-background-color)",
          "mdc-theme-surface": "var(--card-background-color)",
          "mdc-theme-on-primary": "var(--text-primary-color)",
          "mdc-theme-on-secondary": "var(--text-primary-color)",
          "mdc-theme-on-surface": "var(--primary-text-color)",
          "app-header-text-color": "var(--text-primary-color)",
          "app-header-background-color": "var(--primary-color)",
          "material-body-text-color": "var(--primary-text-color)",
          "material-background-color": "var(--card-background-color)",
          "material-secondary-background-color":
            "var(--secondary-background-color)"
        },
        c = Object(n.c)(o()),
        l = Object(n.c)(i());
    },
    102: function(e, t) {},
    106: function(e, t, r) {
      "use strict";
      var n = r(5),
        i = (r(92), r(107), r(47));
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a() {
        var e = c([
          '\n      :host {\n        display: block;\n        height: 100%;\n        background-color: var(--primary-background-color);\n      }\n\n      .toolbar {\n        display: flex;\n        align-items: center;\n        font-size: 20px;\n        height: 65px;\n        padding: 0 16px;\n        pointer-events: none;\n        background-color: var(--app-header-background-color);\n        font-weight: 400;\n        color: var(--app-header-text-color, white);\n        border-bottom: var(--app-header-border-bottom, none);\n        box-sizing: border-box;\n      }\n\n      ha-menu-button,\n      ha-paper-icon-button-arrow-prev,\n      ::slotted([slot="toolbar-icon"]) {\n        pointer-events: auto;\n      }\n\n      ha-paper-icon-button-arrow-prev.hidden {\n        visibility: hidden;\n      }\n\n      [main-title] {\n        margin: 0 0 0 24px;\n        line-height: 20px;\n        flex-grow: 1;\n      }\n\n      .content {\n        position: relative;\n        width: 100%;\n        height: calc(100% - 65px);\n        overflow-y: auto;\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n    '
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = c([
          '\n      <div class="toolbar">\n        <ha-paper-icon-button-arrow-prev\n          aria-label="Back"\n          .hassio=',
          "\n          @click=",
          "\n          class=",
          "\n        ></ha-paper-icon-button-arrow-prev>\n\n        <div main-title>",
          '</div>\n        <slot name="toolbar-icon"></slot>\n      </div>\n      <div class="content"><slot></slot></div>\n    '
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t,
          r = v(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function p(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function h(e) {
        return e.decorators && e.decorators.length;
      }
      function m(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function y(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function v(e) {
        var t = (function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!h(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = v(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = y(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = y(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (m(o.descriptor) || m(i.descriptor)) {
                    if (h(o) || h(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (h(o)) {
                      if (h(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    p(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(f)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-subpage")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var s = arguments.length, c = new Array(s), d = 0;
                  d < s;
                  d++
                )
                  c[d] = arguments[d];
                return (
                  (i = this),
                  (r =
                    !(a = (t = l(n)).call.apply(t, [this].concat(c))) ||
                    ("object" !== o(a) && "function" != typeof a)
                      ? u(i)
                      : a),
                  e(u(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && d(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "header",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "showBackButton",
                value: function() {
                  return !0;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "hassio",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    s(),
                    this.hassio,
                    this._backTapped,
                    Object(i.a)({ hidden: !this.showBackButton }),
                    this.header
                  );
                }
              },
              {
                kind: "method",
                key: "_backTapped",
                value: function() {
                  history.back();
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(a());
                }
              }
            ]
          };
        },
        n.a
      );
    },
    107: function(e, t, r) {
      "use strict";
      r(24);
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function a(e, t, r) {
        return (a =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = s(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var l = customElements.get("paper-icon-button"),
        u = (function(e) {
          function t() {
            var e, r, i, a, c, l, u;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var d = arguments.length, f = new Array(d), p = 0; p < d; p++)
              f[p] = arguments[p];
            return (
              (i = this),
              (r =
                !(a = (e = s(t)).call.apply(e, [this].concat(f))) ||
                ("object" !== n(a) && "function" != typeof a)
                  ? o(i)
                  : a),
              (c = o(r)),
              (u = void 0),
              (l = "hassio") in c
                ? Object.defineProperty(c, l, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (c[l] = u),
              r
            );
          }
          var r, u, d;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && c(e, t);
            })(t, l),
            (r = t),
            (u = [
              {
                key: "connectedCallback",
                value: function() {
                  var e = this;
                  a(s(t.prototype), "connectedCallback", this).call(this),
                    setTimeout(function() {
                      e.icon =
                        "ltr" === window.getComputedStyle(e).direction
                          ? e.hassio
                            ? "hassio:arrow-left"
                            : "hass:arrow-left"
                          : e.hassio
                          ? "hassio:arrow-right"
                          : "hass:arrow-right";
                    }, 100);
                }
              }
            ]) && i(r.prototype, u),
            d && i(r, d),
            t
          );
        })();
      customElements.define("ha-paper-icon-button-arrow-prev", u);
    },
    108: function(e, t, r) {
      "use strict";
      r(48), r(82);
      var n = r(5),
        i = (r(92), r(107), r(10));
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a() {
        var e = u([
          "\n        :host {\n          display: block;\n          height: 100%;\n          background-color: var(--primary-background-color);\n        }\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n      "
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = u([
          "\n              <ha-paper-icon-button-arrow-prev\n                @click=",
          "\n              ></ha-paper-icon-button-arrow-prev>\n            "
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = u([
          "\n              <ha-menu-button\n                .hass=",
          "\n                .narrow=",
          "\n              ></ha-menu-button>\n            "
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = u([
          "\n      <app-toolbar>\n        ",
          '\n      </app-toolbar>\n      <div class="content">\n        <paper-spinner-lite active></paper-spinner-lite>\n      </div>\n    '
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e) {
        var t,
          r = g(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function m(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function y(e) {
        return e.decorators && e.decorators.length;
      }
      function v(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function b(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function g(e) {
        var t = (function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!y(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = g(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = b(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = b(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (v(o.descriptor) || v(i.descriptor)) {
                    if (y(o) || y(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (y(o)) {
                      if (y(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    m(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(h)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-loading-screen")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var s = arguments.length, c = new Array(s), l = 0;
                  l < s;
                  l++
                )
                  c[l] = arguments[l];
                return (
                  (i = this),
                  (r =
                    !(a = (t = d(n)).call.apply(t, [this].concat(c))) ||
                    ("object" !== o(a) && "function" != typeof a)
                      ? f(i)
                      : a),
                  e(f(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && p(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "rootnav",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    l(),
                    this.rootnav
                      ? Object(n.e)(c(), this.hass, this.narrow)
                      : Object(n.e)(s(), this._handleBack)
                  );
                }
              },
              {
                kind: "method",
                key: "_handleBack",
                value: function() {
                  history.back();
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, Object(n.c)(a())];
                }
              }
            ]
          };
        },
        n.a
      );
    },
    11: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      var n = function(e, t, r, n) {
        (n = n || {}), (r = null == r ? {} : r);
        var i = new Event(t, {
          bubbles: void 0 === n.bubbles || n.bubbles,
          cancelable: Boolean(n.cancelable),
          composed: void 0 === n.composed || n.composed
        });
        return (i.detail = r), e.dispatchEvent(i), i;
      };
    },
    115: function(e, t, r) {
      "use strict";
      r(18), r(132);
      var n = r(6),
        i = r(34);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        .container {\n          position: relative;\n          display: inline-block;\n        }\n\n        mwc-button {\n          transition: all 1s;\n        }\n\n        .success mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-green-500);\n          transition: none;\n        }\n\n        .error mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-red-500);\n          transition: none;\n        }\n\n        .progress {\n          @apply --layout;\n          @apply --layout-center-center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n        }\n      </style>\n      <div class="container" id="container">\n        <mwc-button\n          id="button"\n          disabled="[[computeDisabled(disabled, progress)]]"\n          on-click="buttonTapped"\n        >\n          <slot></slot>\n        </mwc-button>\n        <template is="dom-if" if="[[progress]]">\n          <div class="progress"><paper-spinner active=""></paper-spinner></div>\n        </template>\n      </div>\n    '
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function c(e, t) {
        return !t || ("object" !== o(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function l(e, t, r) {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = u(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            c(this, u(t).apply(this, arguments))
          );
        }
        var r, o, f;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && d(e, t);
          })(t, i["a"]),
          (r = t),
          (f = [
            {
              key: "template",
              get: function() {
                return Object(n.a)(a());
              }
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  progress: { type: Boolean, value: !1 },
                  disabled: { type: Boolean, value: !1 }
                };
              }
            }
          ]),
          (o = [
            {
              key: "tempClass",
              value: function(e) {
                var t = this.$.container.classList;
                t.add(e),
                  setTimeout(function() {
                    t.remove(e);
                  }, 1e3);
              }
            },
            {
              key: "ready",
              value: function() {
                var e = this;
                l(u(t.prototype), "ready", this).call(this),
                  this.addEventListener("click", function(t) {
                    return e.buttonTapped(t);
                  });
              }
            },
            {
              key: "buttonTapped",
              value: function(e) {
                this.progress && e.stopPropagation();
              }
            },
            {
              key: "actionSuccess",
              value: function() {
                this.tempClass("success");
              }
            },
            {
              key: "actionError",
              value: function() {
                this.tempClass("error");
              }
            },
            {
              key: "computeDisabled",
              value: function(e, t) {
                return e || t;
              }
            }
          ]) && s(r.prototype, o),
          f && s(r, f),
          t
        );
      })();
      customElements.define("ha-progress-button", f);
    },
    117: function(e, t, r) {
      "use strict";
      r.d(t, "d", function() {
        return a;
      }),
        r.d(t, "c", function() {
          return s;
        }),
        r.d(t, "e", function() {
          return c;
        }),
        r.d(t, "a", function() {
          return l;
        }),
        r.d(t, "b", function() {
          return u;
        });
      var n = r(49);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/snapshots")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent),
                        e.abrupt("return", (0, e.t0)(e.t1).snapshots)
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/snapshots/".concat(r, "/info"))
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/snapshots/reload")
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/snapshots/new/full", r)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/snapshots/new/partial", r)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })();
    },
    118: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return a;
      }),
        r.d(t, "b", function() {
          return s;
        });
      var n = r(49);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/hardware/audio")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/hardware/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
    },
    119: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      });
      var n = r(11),
        i = function(e, t) {
          Object(n.a)(e, "show-dialog", {
            dialogTag: "dialog-hassio-markdown",
            dialogImport: function() {
              return r.e(4).then(r.bind(null, 168));
            },
            dialogParams: t
          });
        };
    },
    120: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      }),
        r.d(t, "b", function() {
          return a;
        });
      var n = r(5);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n  .bold {\n    font-weight: bold;\n  }\n  .italic {\n    font-style: italic;\n  }\n  .underline {\n    text-decoration: underline;\n  }\n  .strikethrough {\n    text-decoration: line-through;\n  }\n  .underline.strikethrough {\n    text-decoration: underline line-through;\n  }\n  .fg-red {\n    color: rgb(222, 56, 43);\n  }\n  .fg-green {\n    color: rgb(57, 181, 74);\n  }\n  .fg-yellow {\n    color: rgb(255, 199, 6);\n  }\n  .fg-blue {\n    color: rgb(0, 111, 184);\n  }\n  .fg-magenta {\n    color: rgb(118, 38, 113);\n  }\n  .fg-cyan {\n    color: rgb(44, 181, 233);\n  }\n  .fg-white {\n    color: rgb(204, 204, 204);\n  }\n  .bg-black {\n    background-color: rgb(0, 0, 0);\n  }\n  .bg-red {\n    background-color: rgb(222, 56, 43);\n  }\n  .bg-green {\n    background-color: rgb(57, 181, 74);\n  }\n  .bg-yellow {\n    background-color: rgb(255, 199, 6);\n  }\n  .bg-blue {\n    background-color: rgb(0, 111, 184);\n  }\n  .bg-magenta {\n    background-color: rgb(118, 38, 113);\n  }\n  .bg-cyan {\n    background-color: rgb(44, 181, 233);\n  }\n  .bg-white {\n    background-color: rgb(204, 204, 204);\n  }\n"
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(n.c)(i());
      function a(e) {
        for (
          var t,
            r = document.createElement("pre"),
            n = /\033(?:\[(.*?)[@-~]|\].*?(?:\007|\033\\))/g,
            i = 0,
            o = {
              bold: !1,
              italic: !1,
              underline: !1,
              strikethrough: !1,
              foregroundColor: null,
              backgroundColor: null
            },
            a = function(e) {
              var t = document.createElement("span");
              o.bold && t.classList.add("bold"),
                o.italic && t.classList.add("italic"),
                o.underline && t.classList.add("underline"),
                o.strikethrough && t.classList.add("strikethrough"),
                null !== o.foregroundColor &&
                  t.classList.add("fg-".concat(o.foregroundColor)),
                null !== o.backgroundColor &&
                  t.classList.add("bg-".concat(o.backgroundColor)),
                t.appendChild(document.createTextNode(e)),
                r.appendChild(t);
            };
          null !== (t = n.exec(e));

        ) {
          var s = t.index;
          a(e.substring(i, s)),
            (i = s + t[0].length),
            void 0 !== t[1] &&
              t[1].split(";").forEach(function(e) {
                switch (parseInt(e, 10)) {
                  case 0:
                    (o.bold = !1),
                      (o.italic = !1),
                      (o.underline = !1),
                      (o.strikethrough = !1),
                      (o.foregroundColor = null),
                      (o.backgroundColor = null);
                    break;
                  case 1:
                    o.bold = !0;
                    break;
                  case 3:
                    o.italic = !0;
                    break;
                  case 4:
                    o.underline = !0;
                    break;
                  case 9:
                    o.strikethrough = !0;
                    break;
                  case 22:
                    o.bold = !1;
                    break;
                  case 23:
                    o.italic = !1;
                    break;
                  case 24:
                    o.underline = !1;
                    break;
                  case 29:
                    o.strikethrough = !1;
                    break;
                  case 30:
                    o.foregroundColor = null;
                    break;
                  case 31:
                    o.foregroundColor = "red";
                    break;
                  case 32:
                    o.foregroundColor = "green";
                    break;
                  case 33:
                    o.foregroundColor = "yellow";
                    break;
                  case 34:
                    o.foregroundColor = "blue";
                    break;
                  case 35:
                    o.foregroundColor = "magenta";
                    break;
                  case 36:
                    o.foregroundColor = "cyan";
                    break;
                  case 37:
                    o.foregroundColor = "white";
                    break;
                  case 39:
                    o.foregroundColor = null;
                    break;
                  case 40:
                    o.backgroundColor = "black";
                    break;
                  case 41:
                    o.backgroundColor = "red";
                    break;
                  case 42:
                    o.backgroundColor = "green";
                    break;
                  case 43:
                    o.backgroundColor = "yellow";
                    break;
                  case 44:
                    o.backgroundColor = "blue";
                    break;
                  case 45:
                    o.backgroundColor = "magenta";
                    break;
                  case 46:
                    o.backgroundColor = "cyan";
                    break;
                  case 47:
                    o.backgroundColor = "white";
                    break;
                  case 49:
                    o.backgroundColor = null;
                }
              });
        }
        return a(e.substring(i)), r;
      }
    },
    121: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return a;
      }),
        r.d(t, "b", function() {
          return s;
        });
      var n = r(11),
        i = function() {
          return Promise.all([r.e(0), r.e(3)]).then(r.bind(null, 169));
        },
        o = function(e, t, r) {
          return new Promise(function(o) {
            var a = t.cancel,
              s = t.confirm;
            Object(n.a)(e, "show-dialog", {
              dialogTag: "dialog-box",
              dialogImport: i,
              dialogParams: Object.assign({}, t, {}, r, {
                cancel: function() {
                  o(!(null == r || !r.prompt) && null), a && a();
                },
                confirm: function(e) {
                  o(null == r || !r.prompt || e), s && s(e);
                }
              })
            });
          });
        },
        a = function(e, t) {
          return o(e, t);
        },
        s = function(e, t) {
          return o(e, t, { confirmation: !0 });
        };
    },
    15: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      });
      var n = r(5);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n  .content {\n    margin: 8px;\n  }\n  h1 {\n    color: var(--primary-text-color);\n    font-size: 2em;\n    margin-bottom: 8px;\n    font-family: var(--paper-font-headline_-_font-family);\n    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);\n    font-size: var(--paper-font-headline_-_font-size);\n    font-weight: var(--paper-font-headline_-_font-weight);\n    letter-spacing: var(--paper-font-headline_-_letter-spacing);\n    line-height: var(--paper-font-headline_-_line-height);\n    padding-left: 8px;\n  }\n  .description {\n    margin-top: 4px;\n    padding-left: 8px;\n  }\n  .card-group {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-gap: 8px;\n  }\n  @media screen and (min-width: 640px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));\n    }\n  }\n  @media screen and (min-width: 1020px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.333fr));\n    }\n  }\n  @media screen and (min-width: 1300px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.25fr));\n    }\n  }\n  ha-call-api-button {\n    font-weight: 500;\n    color: var(--primary-color);\n  }\n  .error {\n    color: var(--error-color);\n    margin-top: 16px;\n  }\n"
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(n.c)(i());
    },
    2: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(5),
        i = (r(24), r(131), r(128), r(10));
      function o(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var a = document.createElement("template");
      a.setAttribute("style", "display: none;"),
        (a.innerHTML = "<custom-style>\n  <style>\n    /*\n      Home Assistant default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n      --error-color: #db4437;\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* for label-badge */\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n\n      /*\n        Paper-styles color.html dependency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --mwc-switch-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* set our slider style */\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* rgb */\n      --rgb-primary-color: 3, 169, 244;\n      --rgb-accent-color: 255, 152, 0;\n      --rgb-primary-text-color: 33, 33, 33;\n      --rgb-secondary-text-color: 114, 114, 114;\n      --rgb-text-primary-color: 255, 255, 255;\n\n      "
          .concat(
            Object.entries(i.a)
              .map(function(e) {
                var t = o(e, 2),
                  r = t[0],
                  n = t[1];
                return "--".concat(r, ": ").concat(n, ";");
              })
              .join(""),
            '\n    }\n  </style>\n\n  <style shady-unscoped="">\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) &gt; .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll &gt; .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n  </style>\n</custom-style><dom-module id="ha-style">\n  <template>\n    <style>\n    '
          )
          .concat(
            i.b.cssText,
            '\n    </style>\n  </template>\n</dom-module><dom-module id="ha-style-dialog">\n  <template>\n    <style>\n      '
          )
          .concat(i.c.cssText, "\n    </style>\n  </template>\n</dom-module>")),
        document.head.appendChild(a.content);
      var s = {},
        c = function(e, t) {
          if (t.themes[e]) {
            for (
              var r,
                n,
                o = Object.assign({}, i.a, {}, t.themes[e]),
                a = {},
                c = {},
                l = 0,
                u = Object.keys(o);
              l < u.length;
              l++
            ) {
              var d = u[l],
                f = "--".concat(d),
                p = o[d];
              if (((a[f] = p), (c[f] = ""), p.startsWith("#"))) {
                var h = "rgb-".concat(d);
                if (void 0 === o[h]) {
                  var m =
                    ((r = void 0),
                    (n = void 0),
                    (r = p.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(
                      e,
                      t,
                      r,
                      n
                    ) {
                      return t + t + r + r + n + n;
                    })),
                    (n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))
                      ? ""
                          .concat(parseInt(n[1], 16), ", ")
                          .concat(parseInt(n[2], 16), ", ")
                          .concat(parseInt(n[3], 16))
                      : null);
                  if (null !== m) {
                    var y = "--".concat(h);
                    (a[y] = m), (c[y] = "");
                  }
                }
              }
            }
            return (s[e] = { styles: a, keys: c }), { styles: a, keys: c };
          }
        },
        l = r(11);
      r(18), r(106);
      function u(e) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d() {
        var e = p([
          "\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n        }\n      "
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = p([
          '\n      <hass-subpage>\n        <div class="content">\n          <h3>',
          "</h3>\n          <slot>\n            <mwc-button @click=",
          ">go back</mwc-button>\n          </slot>\n        </div>\n      </hass-subpage>\n    "
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function p(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function v(e) {
        var t,
          r = E(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function b(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function g(e) {
        return e.decorators && e.decorators.length;
      }
      function w(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function k(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function E(e) {
        var t = (function(e, t) {
          if ("object" !== u(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === u(t) ? t : String(t);
      }
      (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!g(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = E(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = k(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = k(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (w(o.descriptor) || w(i.descriptor)) {
                    if (g(o) || g(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (g(o)) {
                      if (g(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    b(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(v)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-error-screen")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = h(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== u(o) && "function" != typeof o)
                      ? m(i)
                      : o),
                  e(m(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && y(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "error",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(f(), this.error, this._backTapped);
                }
              },
              {
                kind: "method",
                key: "_backTapped",
                value: function() {
                  history.back();
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [Object(n.c)(d())];
                }
              }
            ]
          };
        },
        n.a
      ),
        r(108);
      var O = r(37),
        P = r(83);
      function j(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function x(e) {
        return (x =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function _(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function C(e) {
        var t,
          r = R(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function D(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function T(e) {
        return e.decorators && e.decorators.length;
      }
      function A(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function z(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function R(e) {
        var t = (function(e, t) {
          if ("object" !== x(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== x(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === x(t) ? t : String(t);
      }
      function I(e, t, r) {
        return (I =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = F(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function F(e) {
        return (F = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var L = (function(e, t, r, n) {
          var i = (function() {
            var e = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function(e, t) {
                ["method", "field"].forEach(function(r) {
                  t.forEach(function(t) {
                    t.kind === r &&
                      "own" === t.placement &&
                      this.defineClassElement(e, t);
                  }, this);
                }, this);
              },
              initializeClassElements: function(e, t) {
                var r = e.prototype;
                ["method", "field"].forEach(function(n) {
                  t.forEach(function(t) {
                    var i = t.placement;
                    if (t.kind === n && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? e : r;
                      this.defineClassElement(o, t);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function(e, t) {
                var r = t.descriptor;
                if ("field" === t.kind) {
                  var n = t.initializer;
                  r = {
                    enumerable: r.enumerable,
                    writable: r.writable,
                    configurable: r.configurable,
                    value: void 0 === n ? void 0 : n.call(e)
                  };
                }
                Object.defineProperty(e, t.key, r);
              },
              decorateClass: function(e, t) {
                var r = [],
                  n = [],
                  i = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function(e) {
                    this.addElementPlacement(e, i);
                  }, this),
                  e.forEach(function(e) {
                    if (!T(e)) return r.push(e);
                    var t = this.decorateElement(e, i);
                    r.push(t.element),
                      r.push.apply(r, t.extras),
                      n.push.apply(n, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: r, finishers: n };
                var o = this.decorateConstructor(r, t);
                return n.push.apply(n, o.finishers), (o.finishers = n), o;
              },
              addElementPlacement: function(e, t, r) {
                var n = t[e.placement];
                if (!r && -1 !== n.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                n.push(e.key);
              },
              decorateElement: function(e, t) {
                for (
                  var r = [], n = [], i = e.decorators, o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var a = t[e.placement];
                  a.splice(a.indexOf(e.key), 1);
                  var s = this.fromElementDescriptor(e),
                    c = this.toElementFinisherExtras((0, i[o])(s) || s);
                  (e = c.element),
                    this.addElementPlacement(e, t),
                    c.finisher && n.push(c.finisher);
                  var l = c.extras;
                  if (l) {
                    for (var u = 0; u < l.length; u++)
                      this.addElementPlacement(l[u], t);
                    r.push.apply(r, l);
                  }
                }
                return { element: e, finishers: n, extras: r };
              },
              decorateConstructor: function(e, t) {
                for (var r = [], n = t.length - 1; n >= 0; n--) {
                  var i = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[n])(i) || i);
                  if (
                    (void 0 !== o.finisher && r.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    e = o.elements;
                    for (var a = 0; a < e.length - 1; a++)
                      for (var s = a + 1; s < e.length; s++)
                        if (
                          e[a].key === e[s].key &&
                          e[a].placement === e[s].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + e[a].key + ")"
                          );
                  }
                }
                return { elements: e, finishers: r };
              },
              fromElementDescriptor: function(e) {
                var t = {
                  kind: e.kind,
                  key: e.key,
                  placement: e.placement,
                  descriptor: e.descriptor
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  "field" === e.kind && (t.initializer = e.initializer),
                  t
                );
              },
              toElementDescriptors: function(e) {
                var t;
                if (void 0 !== e)
                  return ((t = e),
                  (function(e) {
                    if (Array.isArray(e)) return e;
                  })(t) ||
                    (function(e) {
                      if (
                        Symbol.iterator in Object(e) ||
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    (function() {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    })()).map(function(e) {
                    var t = this.toElementDescriptor(e);
                    return (
                      this.disallowProperty(
                        e,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
                      t
                    );
                  }, this);
              },
              toElementDescriptor: function(e) {
                var t = String(e.kind);
                if ("method" !== t && "field" !== t)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      t +
                      '"'
                  );
                var r = R(e.key),
                  n = String(e.placement);
                if ("static" !== n && "prototype" !== n && "own" !== n)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      n +
                      '"'
                  );
                var i = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: r,
                  placement: n,
                  descriptor: Object.assign({}, i)
                };
                return (
                  "field" !== t
                    ? this.disallowProperty(
                        e,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        i,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = e.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function(e) {
                var t = this.toElementDescriptor(e),
                  r = z(e, "finisher"),
                  n = this.toElementDescriptors(e.extras);
                return { element: t, finisher: r, extras: n };
              },
              fromClassDescriptor: function(e) {
                var t = {
                  kind: "class",
                  elements: e.map(this.fromElementDescriptor, this)
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  t
                );
              },
              toClassDescriptor: function(e) {
                var t = String(e.kind);
                if ("class" !== t)
                  throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                      t +
                      '"'
                  );
                this.disallowProperty(e, "key", "A class descriptor"),
                  this.disallowProperty(e, "placement", "A class descriptor"),
                  this.disallowProperty(e, "descriptor", "A class descriptor"),
                  this.disallowProperty(e, "initializer", "A class descriptor"),
                  this.disallowProperty(e, "extras", "A class descriptor");
                var r = z(e, "finisher"),
                  n = this.toElementDescriptors(e.elements);
                return { elements: n, finisher: r };
              },
              runClassFinishers: function(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = (0, t[r])(e);
                  if (void 0 !== n) {
                    if ("function" != typeof n)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
                    e = n;
                  }
                }
                return e;
              },
              disallowProperty: function(e, t, r) {
                if (void 0 !== e[t])
                  throw new TypeError(r + " can't have a ." + t + " property.");
              }
            };
            return e;
          })();
          if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
          var a = t(function(e) {
              i.initializeInstanceElements(e, s.elements);
            }, r),
            s = i.decorateClass(
              (function(e) {
                for (
                  var t = [],
                    r = function(e) {
                      return (
                        "method" === e.kind &&
                        e.key === o.key &&
                        e.placement === o.placement
                      );
                    },
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i,
                    o = e[n];
                  if ("method" === o.kind && (i = t.find(r)))
                    if (A(o.descriptor) || A(i.descriptor)) {
                      if (T(o) || T(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (T(o)) {
                        if (T(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      D(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(a.d.map(C)),
              e
            );
          return (
            i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers)
          );
        })(
          null,
          function(e, t) {
            var r = (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = F(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== x(o) && "function" != typeof o)
                      ? _(i)
                      : o),
                  e(_(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && S(e, t);
                })(n, t),
                n
              );
            })();
            return {
              F: r,
              d: [
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "route",
                  value: void 0
                },
                {
                  kind: "field",
                  key: "routerOptions",
                  value: void 0
                },
                {
                  kind: "field",
                  key: "_currentPage",
                  value: function() {
                    return "";
                  }
                },
                {
                  kind: "field",
                  key: "_currentLoadProm",
                  value: void 0
                },
                {
                  kind: "field",
                  key: "_cache",
                  value: function() {
                    return {};
                  }
                },
                {
                  kind: "field",
                  key: "_initialLoadDone",
                  value: function() {
                    return !1;
                  }
                },
                {
                  kind: "field",
                  key: "_computeTail",
                  value: function() {
                    return Object(P.a)(function(e) {
                      var t = e.path.indexOf("/", 1);
                      return -1 === t
                        ? {
                            prefix: e.prefix + e.path,
                            path: ""
                          }
                        : {
                            prefix: e.prefix + e.path.substr(0, t),
                            path: e.path.substr(t)
                          };
                    });
                  }
                },
                {
                  kind: "method",
                  key: "update",
                  value: function(e) {
                    var t = this;
                    I(F(r.prototype), "update", this).call(this, e);
                    var n = this.routerOptions || { routes: {} };
                    if (!n || !n.initialLoad || this._initialLoadDone)
                      if (e.has("route")) {
                        var i = this.route,
                          o = n.defaultPage;
                        i &&
                          "" === i.path &&
                          void 0 !== o &&
                          Object(O.a)(
                            this,
                            "".concat(i.prefix, "/").concat(o),
                            !0
                          );
                        for (
                          var a = i
                              ? (function(e, t) {
                                  if ("" === e) return t;
                                  var r = e.indexOf("/", 1);
                                  return -1 === r
                                    ? e.substr(1)
                                    : e.substr(1, r - 1);
                                })(i.path, o || "")
                              : "not_found",
                            s = n.routes[a];
                          "string" == typeof s;

                        )
                          (a = s), (s = n.routes[a]);
                        if (n.beforeRender) {
                          var c = n.beforeRender(a);
                          if (void 0 !== c) {
                            for (a = c, s = n.routes[a]; "string" == typeof s; )
                              (a = s), (s = n.routes[a]);
                            i &&
                              Object(O.a)(
                                this,
                                "".concat(i.prefix, "/").concat(c),
                                !0
                              );
                          }
                        }
                        if (this._currentPage !== a) {
                          if (!s)
                            return (
                              (this._currentPage = ""),
                              void (
                                this.lastChild &&
                                this.removeChild(this.lastChild)
                              )
                            );
                          this._currentPage = a;
                          var l = s.load ? s.load() : Promise.resolve();
                          if (
                            (l.catch(function(e) {
                              if (
                                (console.error("Error loading page", a, e),
                                t._currentPage === a)
                              ) {
                                t.removeChild(t.lastChild);
                                var r = document.createElement(
                                  "hass-error-screen"
                                );
                                (r.error = "Error while loading page ".concat(
                                  a,
                                  "."
                                )),
                                  t.appendChild(r);
                              }
                            }),
                            n.showLoading)
                          ) {
                            var u = !1;
                            setTimeout(function() {
                              u ||
                                t._currentPage !== a ||
                                (t.lastChild && t.removeChild(t.lastChild),
                                t.appendChild(t.createLoadingScreen()));
                            }, 400),
                              (this._currentLoadProm = l.then(
                                function() {
                                  (t._currentLoadProm = void 0),
                                    t._currentPage === a &&
                                      ((u = !0), t._createPanel(n, a, s));
                                },
                                function() {
                                  t._currentLoadProm = void 0;
                                }
                              ));
                          } else this._createPanel(n, a, s);
                        } else
                          this.lastChild &&
                            this.updatePageEl(this.lastChild, e);
                      } else
                        this.lastChild &&
                          !this._currentLoadProm &&
                          this.updatePageEl(this.lastChild, e);
                  }
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function(e) {
                    var t = this;
                    I(F(r.prototype), "firstUpdated", this).call(this, e);
                    var n = this.routerOptions;
                    n &&
                      (n.preloadAll &&
                        Object.values(n.routes).forEach(function(e) {
                          return "object" === x(e) && e.load && e.load();
                        }),
                      n.initialLoad &&
                        (setTimeout(function() {
                          t._initialLoadDone ||
                            t.appendChild(t.createLoadingScreen());
                        }, 400),
                        n.initialLoad().then(function() {
                          (t._initialLoadDone = !0), t.requestUpdate("route");
                        })));
                  }
                },
                {
                  kind: "method",
                  key: "createLoadingScreen",
                  value: function() {
                    return document.createElement("hass-loading-screen");
                  }
                },
                {
                  kind: "method",
                  key: "rebuild",
                  value: (function() {
                    var e,
                      t =
                        ((e = regeneratorRuntime.mark(function e() {
                          var t;
                          return regeneratorRuntime.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (void 0 !== (t = this.route)) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 3:
                                    return (
                                      (this.route = void 0),
                                      (e.next = 6),
                                      this.updateComplete
                                    );
                                  case 6:
                                    void 0 === this.route && (this.route = t);
                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })),
                        function() {
                          var t = this,
                            r = arguments;
                          return new Promise(function(n, i) {
                            var o = e.apply(t, r);
                            function a(e) {
                              j(o, n, i, a, s, "next", e);
                            }
                            function s(e) {
                              j(o, n, i, a, s, "throw", e);
                            }
                            a(void 0);
                          });
                        });
                    return function() {
                      return t.apply(this, arguments);
                    };
                  })()
                },
                {
                  kind: "get",
                  key: "pageRendered",
                  value: function() {
                    var e = this;
                    return this.updateComplete.then(function() {
                      return e._currentLoadProm;
                    });
                  }
                },
                {
                  kind: "method",
                  key: "createElement",
                  value: function(e) {
                    return document.createElement(e);
                  }
                },
                {
                  kind: "method",
                  key: "updatePageEl",
                  value: function(e, t) {}
                },
                {
                  kind: "get",
                  key: "routeTail",
                  value: function() {
                    return this._computeTail(this.route);
                  }
                },
                {
                  kind: "method",
                  key: "_createPanel",
                  value: function(e, t, r) {
                    this.lastChild && this.removeChild(this.lastChild);
                    var n = this._cache[t] || this.createElement(r.tag);
                    this.updatePageEl(n),
                      this.appendChild(n),
                      (e.cacheAll || r.cache) && (this._cache[t] = n);
                  }
                }
              ]
            };
          },
          n.b
        ),
        N = r(64),
        U = r(49);
      function H(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function B(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              H(o, n, i, a, s, "next", e);
            }
            function s(e) {
              H(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var M = (function() {
          var e = B(
            regeneratorRuntime.mark(function e(t) {
              var r;
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.callApi("GET", "hassio/host/info");
                    case 2:
                      return (r = e.sent), e.abrupt("return", Object(U.a)(r));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        G = (function() {
          var e = B(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = U.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/os/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        V = r(27);
      function q(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function W(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              q(o, n, i, a, s, "next", e);
            }
            function s(e) {
              q(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var J = {},
        Y = (function() {
          var e = W(
            regeneratorRuntime.mark(function e(t, r, n, i, o) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        i in J ||
                          (J[i] = n().then(function() {
                            var e = document.createElement(i);
                            return t.provideHass(e), r.appendChild(e), e;
                          })),
                        (e.next = 3),
                        J[i]
                      );
                    case 3:
                      e.sent.showDialog(o);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r, n, i, o) {
            return e.apply(this, arguments);
          };
        })();
      function $(e) {
        return ($ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function K(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Q(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function X(e, t, r) {
        return (X =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Z(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Z(e) {
        return (Z = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ee(e, t) {
        return (ee =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function te(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      r(111), r(127), r(48), r(113), r(175), r(92), r(19);
      var re = r(15),
        ne = (r(41), r(85));
      function ie(e) {
        return (ie =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function oe() {
        var e = le([
          "\n        paper-card {\n          cursor: pointer;\n        }\n      "
        ]);
        return (
          (oe = function() {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = le([
          "\n                    <paper-card .addon=",
          " @click=",
          '>\n                      <div class="card-content">\n                        <hassio-card-content\n                          .hass=',
          "\n                          .title=",
          "\n                          .description=",
          "\n                          available\n                          .showTopbar=",
          '\n                          topbarClass="update"\n                          .icon=',
          "\n                          .iconTitle=",
          "\n                          .iconClass=",
          "\n                          .iconImage=",
          "\n                        ></hassio-card-content>\n                      </div>\n                    </paper-card>\n                  "
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = le([
          '\n                <paper-card>\n                  <div class="card-content">\n                    You don\'t have any add-ons installed yet. Head over to\n                    <a href="#" @click=',
          ">the add-on store</a>\n                    to get started!\n                  </div>\n                </paper-card>\n              "
        ]);
        return (
          (se = function() {
            return e;
          }),
          e
        );
      }
      function ce() {
        var e = le([
          '\n      <div class="content">\n        <h1>Add-ons</h1>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (ce = function() {
            return e;
          }),
          e
        );
      }
      function le(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ue(e) {
        return (ue = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function de(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function fe(e, t) {
        return (fe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function pe(e) {
        var t,
          r = be(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function he(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function me(e) {
        return e.decorators && e.decorators.length;
      }
      function ye(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ve(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function be(e) {
        var t = (function(e, t) {
          if ("object" !== ie(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ie(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ie(t) ? t : String(t);
      }
      (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!me(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = be(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = ve(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = ve(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (ye(o.descriptor) || ye(i.descriptor)) {
                    if (me(o) || me(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (me(o)) {
                      if (me(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    he(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(pe)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addons")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = ue(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== ie(o) && "function" != typeof o)
                      ? de(i)
                      : o),
                  e(de(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && fe(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "addons",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this;
                  return Object(n.e)(
                    ce(),
                    this.addons
                      ? this.addons
                          .sort(function(e, t) {
                            return e.name > t.name ? 1 : -1;
                          })
                          .map(function(t) {
                            return Object(n.e)(
                              ae(),
                              t,
                              e._addonTapped,
                              e.hass,
                              t.name,
                              t.description,
                              t.installed !== t.version,
                              t.installed !== t.version
                                ? "hassio:arrow-up-bold-circle"
                                : "hassio:puzzle",
                              "started" !== t.state
                                ? "Add-on is stopped"
                                : t.installed !== t.version
                                ? "New version available"
                                : "Add-on is running",
                              t.installed && t.installed !== t.version
                                ? "started" === t.state
                                  ? "update"
                                  : "update stopped"
                                : t.installed && "started" === t.state
                                ? "running"
                                : "stopped",
                              Object(ne.a)(
                                e.hass.connection.haVersion,
                                0,
                                105
                              ) && t.icon
                                ? "/api/hassio/addons/".concat(t.slug, "/icon")
                                : void 0
                            );
                          })
                      : Object(n.e)(se(), this._openStore)
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, re.a, Object(n.c)(oe())];
                }
              },
              {
                kind: "method",
                key: "_addonTapped",
                value: function(e) {
                  Object(O.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug)
                  );
                }
              },
              {
                kind: "method",
                key: "_openStore",
                value: function() {
                  Object(O.a)(this, "/hassio/store");
                }
              }
            ]
          };
        },
        n.a
      ),
        r(22),
        r(50);
      function ge() {
        var e = _e([
          "\n        .icon {\n          --iron-icon-height: 48px;\n          --iron-icon-width: 48px;\n          float: right;\n          margin: 0 0 2px 10px;\n        }\n        .update-heading {\n          font-size: var(--paper-font-subhead_-_font-size);\n          font-weight: 500;\n          margin-bottom: 0.5em;\n        }\n        .warning {\n          color: var(--secondary-text-color);\n        }\n        .card-content {\n          height: calc(100% - 47px);\n          box-sizing: border-box;\n        }\n        .card-actions {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          padding: 16px;\n        }\n        a {\n          text-decoration: none;\n        }\n      "
        ]);
        return (
          (ge = function() {
            return e;
          }),
          e
        );
      }
      function we(e) {
        return (we =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ke() {
        var e = _e([
          '\n                <div class="icon">\n                  <iron-icon .icon="',
          '" />\n                </div>\n              '
        ]);
        return (
          (ke = function() {
            return e;
          }),
          e
        );
      }
      function Ee() {
        var e = _e([
          '\n      <paper-card>\n        <div class="card-content">\n          ',
          '\n          <div class="update-heading">',
          " ",
          '</div>\n          <div class="warning">\n            You are currently running version ',
          '\n          </div>\n        </div>\n        <div class="card-actions">\n          <a href="',
          '" target="_blank" rel="noreferrer">\n            <mwc-button>Release notes</mwc-button>\n          </a>\n          <ha-call-api-button\n            .hass=',
          "\n            .path=",
          "\n            @hass-api-called=",
          "\n          >\n            Update\n          </ha-call-api-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (Ee = function() {
            return e;
          }),
          e
        );
      }
      function Oe() {
        var e = _e([""]);
        return (
          (Oe = function() {
            return e;
          }),
          e
        );
      }
      function Pe() {
        var e = _e([
          '\n              <div class="error">Error: ',
          "</div>\n            "
        ]);
        return (
          (Pe = function() {
            return e;
          }),
          e
        );
      }
      function je() {
        var e = _e([
          '\n      <div class="content">\n        ',
          "\n        <h1>\n          ",
          '\n        </h1>\n        <div class="card-group">\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (je = function() {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = _e([""]);
        return (
          (xe = function() {
            return e;
          }),
          e
        );
      }
      function _e(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Se(e) {
        return (Se = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ce(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function De(e, t) {
        return (De =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Te(e) {
        var t,
          r = Fe(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Ae(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ze(e) {
        return e.decorators && e.decorators.length;
      }
      function Re(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ie(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Fe(e) {
        var t = (function(e, t) {
          if ("object" !== we(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== we(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === we(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!ze(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Fe(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Ie(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Ie(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Re(o.descriptor) || Re(i.descriptor)) {
                    if (ze(o) || ze(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ze(o)) {
                      if (ze(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Ae(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Te)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-update")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = Se(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== we(o) && "function" != typeof o)
                      ? Ce(i)
                      : o),
                  e(Ce(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && De(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = [
                    this.hassInfo,
                    this.supervisorInfo,
                    this.hassOsInfo
                  ].filter(function(e) {
                    return (
                      !!e &&
                      (e.version_latest
                        ? e.version !== e.version_latest
                        : !!e.version_latest && e.version !== e.version_latest)
                    );
                  }).length;
                  return e
                    ? Object(n.e)(
                        je(),
                        this._error ? Object(n.e)(Pe(), this._error) : "",
                        e > 1 ? "Updates Available 🎉" : "Update Available 🎉",
                        this._renderUpdateCard(
                          "Home Assistant Core",
                          this.hassInfo.version,
                          this.hassInfo.version_latest,
                          "hassio/homeassistant/update",
                          "https://".concat(
                            this.hassInfo.version_latest.includes("b")
                              ? "rc"
                              : "www",
                            ".home-assistant.io/latest-release-notes/"
                          ),
                          "hassio:home-assistant"
                        ),
                        this._renderUpdateCard(
                          "Supervisor",
                          this.supervisorInfo.version,
                          this.supervisorInfo.version_latest,
                          "hassio/supervisor/update",
                          "https://github.com//home-assistant/hassio/releases/tag/".concat(
                            this.supervisorInfo.version_latest
                          )
                        ),
                        this.hassOsInfo
                          ? this._renderUpdateCard(
                              "Operating System",
                              this.hassOsInfo.version,
                              this.hassOsInfo.version_latest,
                              "hassio/os/update",
                              "https://github.com//home-assistant/hassos/releases/tag/".concat(
                                this.hassOsInfo.version_latest
                              )
                            )
                          : ""
                      )
                    : Object(n.e)(xe());
                }
              },
              {
                kind: "method",
                key: "_renderUpdateCard",
                value: function(e, t, r, i, o, a) {
                  return r && r !== t
                    ? Object(n.e)(
                        Ee(),
                        a ? Object(n.e)(ke(), a) : "",
                        e,
                        r,
                        t,
                        o,
                        this.hass,
                        i,
                        this._apiCalled
                      )
                    : Object(n.e)(Oe());
                }
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  if (e.detail.success) this._error = "";
                  else {
                    var t = e.detail.response;
                    "object" === we(t.body)
                      ? (this._error = t.body.message || "Unknown error")
                      : (this._error = t.body);
                  }
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, re.a, Object(n.c)(ge())];
                }
              }
            ]
          };
        },
        n.a
      );
      function Le(e) {
        return (Le =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ne() {
        var e = He([
          "\n        .content {\n          margin: 0 auto;\n        }\n      "
        ]);
        return (
          (Ne = function() {
            return e;
          }),
          e
        );
      }
      function Ue() {
        var e = He([
          '\n      <div class="content">\n        <hassio-update\n          .hass=',
          "\n          .hassInfo=",
          "\n          .supervisorInfo=",
          "\n          .hassOsInfo=",
          "\n        ></hassio-update>\n        <hassio-addons\n          .hass=",
          "\n          .addons=",
          "\n        ></hassio-addons>\n      </div>\n    "
        ]);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      function He(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Be(e) {
        return (Be = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Me(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ge(e, t) {
        return (Ge =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ve(e) {
        var t,
          r = $e(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function qe(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function We(e) {
        return e.decorators && e.decorators.length;
      }
      function Je(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ye(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function $e(e) {
        var t = (function(e, t) {
          if ("object" !== Le(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Le(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Le(t) ? t : String(t);
      }
      (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!We(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = $e(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Ye(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Ye(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Je(o.descriptor) || Je(i.descriptor)) {
                    if (We(o) || We(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (We(o)) {
                      if (We(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    qe(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ve)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-dashboard")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = Be(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Le(o) && "function" != typeof o)
                      ? Me(i)
                      : o),
                  e(Me(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && Ge(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    Ue(),
                    this.hass,
                    this.hassInfo,
                    this.supervisorInfo,
                    this.hassOsInfo,
                    this.hass,
                    this.supervisorInfo.addons
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, Object(n.c)(Ne())];
                }
              }
            ]
          };
        },
        n.a
      ),
        r(133),
        r(40),
        r(116),
        r(134);
      var Ke = r(117);
      function Qe(e) {
        return (Qe =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Xe() {
        var e = st([
          '\n        paper-radio-group {\n          display: block;\n        }\n        paper-radio-button {\n          padding: 0 0 2px 2px;\n        }\n        paper-radio-button,\n        paper-checkbox,\n        paper-input[type="password"] {\n          display: block;\n          margin: 4px 0 4px 48px;\n        }\n        .pointer {\n          cursor: pointer;\n        }\n      '
        ]);
        return (
          (Xe = function() {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = st([
          '\n                  <paper-card\n                    class="pointer"\n                    .snapshot=',
          "\n                    @click=",
          '\n                  >\n                    <div class="card-content">\n                      <hassio-card-content\n                        .hass=',
          "\n                        .title=",
          "\n                        .description=",
          "\n                        .datetime=",
          "\n                        .icon=",
          '\n                        .\n                        .icon-class="snapshot"\n                      ></hassio-card-content>\n                    </div>\n                  </paper-card>\n                '
        ]);
        return (
          (Ze = function() {
            return e;
          }),
          e
        );
      }
      function et() {
        var e = st([
          '\n                <paper-card>\n                  <div class="card-content">\n                    You don\'t have any snapshots yet.\n                  </div>\n                </paper-card>\n              '
        ]);
        return (
          (et = function() {
            return e;
          }),
          e
        );
      }
      function tt() {
        var e = st([
          '\n                    <p class="error">',
          "</p>\n                  "
        ]);
        return (
          (tt = function() {
            return e;
          }),
          e
        );
      }
      function rt() {
        var e = st([
          '\n                    <paper-input\n                      label="Password"\n                      type="password"\n                      name="snapshotPassword"\n                      .value=',
          "\n                      @value-changed=",
          "\n                    ></paper-input>\n                  "
        ]);
        return (
          (rt = function() {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = st([
          "\n                        <paper-checkbox\n                          .idx=",
          '\n                          .checked="{{item.checked}}"\n                          @checked-changed=',
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      "
        ]);
        return (
          (nt = function() {
            return e;
          }),
          e
        );
      }
      function it() {
        var e = st([
          "\n                        <paper-checkbox\n                          .idx=",
          "\n                          .checked=",
          "\n                          @checked-changed=",
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      "
        ]);
        return (
          (it = function() {
            return e;
          }),
          e
        );
      }
      function ot() {
        var e = st([
          "\n                    Folders:\n                    ",
          "\n                    Add-ons:\n                    ",
          "\n                  "
        ]);
        return (
          (ot = function() {
            return e;
          }),
          e
        );
      }
      function at() {
        var e = st([
          '\n      <div class="content">\n        <h1>\n          Create snapshot\n        </h1>\n        <p class="description">\n          Snapshots allow you to easily backup and restore all data of your Home\n          Assistant instance.\n        </p>\n        <div class="card-group">\n          <paper-card>\n            <div class="card-content">\n              <paper-input\n                autofocus\n                label="Name"\n                name="snapshotName"\n                .value=',
          "\n                @value-changed=",
          '\n              ></paper-input>\n              Type:\n              <paper-radio-group\n                name="snapshotType"\n                .selected=',
          "\n                @selected-changed=",
          '\n              >\n                <paper-radio-button name="full">\n                  Full snapshot\n                </paper-radio-button>\n                <paper-radio-button name="partial">\n                  Partial snapshot\n                </paper-radio-button>\n              </paper-radio-group>\n              ',
          '\n              Security:\n              <paper-checkbox\n                name="snapshotHasPassword"\n                .checked=',
          "\n                @checked-changed=",
          "\n              >\n                Password protection\n              </paper-checkbox>\n              ",
          "\n              ",
          '\n            </div>\n            <div class="card-actions">\n              <mwc-button\n                .disabled=',
          "\n                @click=",
          '\n              >\n                Create\n              </mwc-button>\n            </div>\n          </paper-card>\n        </div>\n\n        <h1>Available snapshots</h1>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (at = function() {
            return e;
          }),
          e
        );
      }
      function st(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ct(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function lt(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              ct(o, n, i, a, s, "next", e);
            }
            function s(e) {
              ct(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ut(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function dt(e, t) {
        return (dt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ft(e) {
        var t,
          r = vt(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function pt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ht(e) {
        return e.decorators && e.decorators.length;
      }
      function mt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function yt(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function vt(e) {
        var t = (function(e, t) {
          if ("object" !== Qe(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Qe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Qe(t) ? t : String(t);
      }
      function bt(e, t, r) {
        return (bt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = gt(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function gt(e) {
        return (gt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!ht(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = vt(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = yt(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = yt(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (mt(o.descriptor) || mt(i.descriptor)) {
                    if (ht(o) || ht(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ht(o)) {
                      if (ht(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    pt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(ft)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-snapshots")],
        function(e, t) {
          var o = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = gt(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Qe(o) && "function" != typeof o)
                    ? ut(i)
                    : o),
                e(ut(r)),
                r
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && dt(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: o,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotName",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotPassword",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotHasPassword",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotType",
                value: function() {
                  return "full";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshots",
                value: function() {
                  return [];
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_addonList",
                value: function() {
                  return [];
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_folderList",
                value: function() {
                  return [
                    {
                      slug: "homeassistant",
                      name: "Home Assistant configuration",
                      checked: !0
                    },
                    { slug: "ssl", name: "SSL", checked: !0 },
                    { slug: "share", name: "Share", checked: !0 },
                    {
                      slug: "addons/local",
                      name: "Local add-ons",
                      checked: !0
                    }
                  ];
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_creatingSnapshot",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: function() {
                  return "";
                }
              },
              {
                kind: "method",
                key: "refreshData",
                value: (function() {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Object(Ke.e)(this.hass);
                              case 2:
                                return (e.next = 4), this._updateSnapshots();
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this;
                  return Object(n.e)(
                    at(),
                    this._snapshotName,
                    this._handleTextValueChanged,
                    this._snapshotType,
                    this._handleRadioValueChanged,
                    "full" === this._snapshotType
                      ? void 0
                      : Object(n.e)(
                          ot(),
                          this._folderList.map(function(t, r) {
                            return Object(n.e)(
                              it(),
                              r,
                              t.checked,
                              e._folderChecked,
                              t.name
                            );
                          }),
                          this._addonList.map(function(t, r) {
                            return Object(n.e)(
                              nt(),
                              r,
                              e._addonChecked,
                              t.name
                            );
                          })
                        ),
                    this._snapshotHasPassword,
                    this._handleCheckboxValueChanged,
                    this._snapshotHasPassword
                      ? Object(n.e)(
                          rt(),
                          this._snapshotPassword,
                          this._handleTextValueChanged
                        )
                      : void 0,
                    "" !== this._error
                      ? Object(n.e)(tt(), this._error)
                      : void 0,
                    this._creatingSnapshot,
                    this._createSnapshot,
                    void 0 === this._snapshots
                      ? void 0
                      : 0 === this._snapshots.length
                      ? Object(n.e)(et())
                      : this._snapshots.map(function(t) {
                          return Object(n.e)(
                            Ze(),
                            t,
                            e._snapshotClicked,
                            e.hass,
                            t.name || t.slug,
                            e._computeDetails(t),
                            t.date,
                            "full" === t.type
                              ? "hassio:package-variant-closed"
                              : "hassio:package-variant"
                          );
                        })
                  );
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  bt(gt(o.prototype), "firstUpdated", this).call(this, e),
                    this._updateSnapshots();
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  e.has("supervisorInfo") &&
                    (this._addonList = this.supervisorInfo.addons
                      .map(function(e) {
                        return {
                          slug: e.slug,
                          name: e.name,
                          checked: !0
                        };
                      })
                      .sort(function(e, t) {
                        return e.name < t.name ? -1 : 1;
                      }));
                }
              },
              {
                kind: "method",
                key: "_handleTextValueChanged",
                value: function(e) {
                  var t = e.currentTarget;
                  this["_".concat(t.name)] = e.detail.value;
                }
              },
              {
                kind: "method",
                key: "_handleCheckboxValueChanged",
                value: function(e) {
                  var t = e.currentTarget;
                  this["_".concat(t.name)] = t.checked;
                }
              },
              {
                kind: "method",
                key: "_handleRadioValueChanged",
                value: function(e) {
                  var t = e.currentTarget;
                  this["_".concat(t.getAttribute("name"))] = e.detail.value;
                }
              },
              {
                kind: "method",
                key: "_folderChecked",
                value: function(e) {
                  var t = e.currentTarget,
                    r = t.idx,
                    n = t.checked;
                  this._folderList = this._folderList.map(function(e, t) {
                    return t === r ? Object.assign({}, e, { checked: n }) : e;
                  });
                }
              },
              {
                kind: "method",
                key: "_addonChecked",
                value: function(e) {
                  var t = e.currentTarget,
                    r = t.idx,
                    n = t.checked;
                  this._addonList = this._addonList.map(function(e, t) {
                    return t === r ? Object.assign({}, e, { checked: n }) : e;
                  });
                }
              },
              {
                kind: "method",
                key: "_updateSnapshots",
                value: (function() {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  Object(Ke.d)(this.hass)
                                );
                              case 3:
                                (this._snapshots = e.sent),
                                  this._snapshots.sort(function(e, t) {
                                    return e.date < t.date ? 1 : -1;
                                  }),
                                  (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(0)),
                                  (this._error = e.t0.message);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 7]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_createSnapshot",
                value: (function() {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, o;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this._error = ""),
                                  !this._snapshotHasPassword ||
                                    this._snapshotPassword.length)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (this._error = "Please enter a password."),
                                  e.abrupt("return")
                                );
                              case 4:
                                return (
                                  (this._creatingSnapshot = !0),
                                  (e.next = 7),
                                  this.updateComplete
                                );
                              case 7:
                                if (
                                  ((t =
                                    this._snapshotName ||
                                    new Date().toLocaleDateString(
                                      navigator.language,
                                      {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                      }
                                    )),
                                  (e.prev = 8),
                                  "full" !== this._snapshotType)
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                return (
                                  (r = { name: t }),
                                  this._snapshotHasPassword &&
                                    (r.password = this._snapshotPassword),
                                  (e.next = 14),
                                  Object(Ke.a)(this.hass, r)
                                );
                              case 14:
                                e.next = 22;
                                break;
                              case 16:
                                return (
                                  (n = this._addonList
                                    .filter(function(e) {
                                      return e.checked;
                                    })
                                    .map(function(e) {
                                      return e.slug;
                                    })),
                                  (i = this._folderList
                                    .filter(function(e) {
                                      return e.checked;
                                    })
                                    .map(function(e) {
                                      return e.slug;
                                    })),
                                  (o = { name: t, folders: i, addons: n }),
                                  this._snapshotHasPassword &&
                                    (o.password = this._snapshotPassword),
                                  (e.next = 22),
                                  Object(Ke.b)(this.hass, o)
                                );
                              case 22:
                                this._updateSnapshots(),
                                  Object(l.a)(this, "hass-api-called", {
                                    success: !0,
                                    response: null
                                  }),
                                  (e.next = 29);
                                break;
                              case 26:
                                (e.prev = 26),
                                  (e.t0 = e.catch(8)),
                                  (this._error = e.t0.message);
                              case 29:
                                return (
                                  (e.prev = 29),
                                  (this._creatingSnapshot = !1),
                                  e.finish(29)
                                );
                              case 32:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[8, 26, 29, 32]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_computeDetails",
                value: function(e) {
                  var t =
                    "full" === e.type ? "Full snapshot" : "Partial snapshot";
                  return e.protected ? "".concat(t, ", password protected") : t;
                }
              },
              {
                kind: "method",
                key: "_snapshotClicked",
                value: function(e) {
                  var t,
                    n,
                    i = this;
                  (t = this),
                    (n = {
                      slug: e.currentTarget.snapshot.slug,
                      onDelete: function() {
                        return i._updateSnapshots();
                      }
                    }),
                    Object(l.a)(t, "show-dialog", {
                      dialogTag: "dialog-hassio-snapshot",
                      dialogImport: function() {
                        return r.e(5).then(r.bind(null, 181));
                      },
                      dialogParams: n
                    });
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, re.a, Object(n.c)(Xe())];
                }
              }
            ]
          };
        },
        n.a
      );
      var wt = r(135);
      function kt(e) {
        return (kt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Et() {
        var e = xt([
          "\n        paper-card {\n          cursor: pointer;\n        }\n        .not_available {\n          opacity: 0.6;\n        }\n        a.repo {\n          color: var(--primary-text-color);\n        }\n      "
        ]);
        return (
          (Et = function() {
            return e;
          }),
          e
        );
      }
      function Ot() {
        var e = xt([
          "\n              <paper-card\n                .addon=",
          "\n                class=",
          "\n                @click=",
          '\n              >\n                <div class="card-content">\n                  <hassio-card-content\n                    .hass=',
          "\n                    .title=",
          "\n                    .description=",
          "\n                    .available=",
          "\n                    .icon=",
          "\n                    .iconTitle=",
          "\n                    .iconClass=",
          "\n                    .iconImage=",
          "\n                    .showTopbar=",
          "\n                    .topbarClass=",
          "\n                  ></hassio-card-content>\n                </div>\n              </paper-card>\n            "
        ]);
        return (
          (Ot = function() {
            return e;
          }),
          e
        );
      }
      function Pt() {
        var e = xt([
          '\n      <div class="content">\n        <h1>\n          ',
          '\n        </h1>\n        <p class="description">\n          Maintained by ',
          '<br />\n          <a class="repo" href=',
          ' target="_blank" rel="noreferrer">\n            ',
          '\n          </a>\n        </p>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (Pt = function() {
            return e;
          }),
          e
        );
      }
      function jt() {
        var e = xt([
          '\n        <div class="content">\n          <p class="description">\n            No results found in "',
          '"\n          </p>\n        </div>\n      '
        ]);
        return (
          (jt = function() {
            return e;
          }),
          e
        );
      }
      function xt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function _t(e) {
        return (_t = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function St(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ct(e, t) {
        return (Ct =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Dt(e) {
        var t,
          r = It(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Tt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function At(e) {
        return e.decorators && e.decorators.length;
      }
      function zt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Rt(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function It(e) {
        var t = (function(e, t) {
          if ("object" !== kt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== kt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === kt(t) ? t : String(t);
      }
      var Ft = (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!At(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = It(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Rt(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Rt(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (zt(o.descriptor) || zt(i.descriptor)) {
                    if (At(o) || At(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (At(o)) {
                      if (At(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Tt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Dt)),
            e
          );
        return (
          i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = _t(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== kt(o) && "function" != typeof o)
                      ? St(i)
                      : o),
                  e(St(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && Ct(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "repo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "addons",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "filter",
                value: void 0
              },
              {
                kind: "field",
                key: "_getAddons",
                value: function() {
                  return Object(P.a)(function(e, t) {
                    return t
                      ? (function(e, t) {
                          return new wt(e, {
                            keys: ["name", "description", "slug"],
                            caseSensitive: !1,
                            minMatchCharLength: 2,
                            threshold: 0.2
                          }).search(t);
                        })(e, t)
                      : e.sort(function(e, t) {
                          return e.name.toUpperCase() < t.name.toUpperCase()
                            ? -1
                            : 1;
                        });
                  });
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this,
                    t = this.repo,
                    r = this._getAddons(this.addons, this.filter);
                  return this.filter && r.length < 1
                    ? Object(n.e)(jt(), t.name)
                    : Object(n.e)(
                        Pt(),
                        t.name,
                        t.maintainer,
                        t.url,
                        t.url,
                        r.map(function(t) {
                          return Object(n.e)(
                            Ot(),
                            t,
                            t.available ? "" : "not_available",
                            e._addonTapped,
                            e.hass,
                            t.name,
                            t.description,
                            t.available,
                            t.installed && t.installed !== t.version
                              ? "hassio:arrow-up-bold-circle"
                              : "hassio:puzzle",
                            t.installed
                              ? t.installed !== t.version
                                ? "New version available"
                                : "Add-on is installed"
                              : t.available
                              ? "Add-on is not installed"
                              : "Add-on is not available on your system",
                            t.installed
                              ? t.installed !== t.version
                                ? "update"
                                : "installed"
                              : t.available
                              ? ""
                              : "not_available",
                            Object(ne.a)(e.hass.connection.haVersion, 0, 105) &&
                              t.icon
                              ? "/api/hassio/addons/".concat(t.slug, "/icon")
                              : void 0,
                            t.installed || !t.available,
                            t.installed
                              ? t.installed !== t.version
                                ? "update"
                                : "installed"
                              : t.available
                              ? ""
                              : "unavailable"
                          );
                        })
                      );
                }
              },
              {
                kind: "method",
                key: "_addonTapped",
                value: function(e) {
                  Object(O.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug)
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [re.a, Object(n.c)(Et())];
                }
              }
            ]
          };
        },
        n.a
      );
      customElements.define("hassio-addon-repository", Ft);
      var Lt = r(136);
      function Nt(e) {
        return (Nt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ut() {
        var e = Mt([
          "\n        .add {\n          padding: 12px 16px;\n        }\n        iron-icon {\n          color: var(--secondary-text-color);\n          margin-right: 16px;\n          display: inline-block;\n        }\n        paper-input {\n          width: calc(100% - 49px);\n          display: inline-block;\n          margin-top: -4px;\n        }\n      "
        ]);
        return (
          (Ut = function() {
            return e;
          }),
          e
        );
      }
      function Ht() {
        var e = Mt([
          '\n              <paper-card>\n                <div class="card-content">\n                  <hassio-card-content\n                    .hass=',
          "\n                    .title=",
          "\n                    .description=",
          '\n                    icon="hassio:github-circle"\n                  ></hassio-card-content>\n                </div>\n                <div class="card-actions">\n                  <ha-call-api-button\n                    path="hassio/supervisor/options"\n                    .hass=',
          "\n                    .data=",
          '\n                    class="warning"\n                  >\n                    Remove\n                  </ha-call-api-button>\n                </div>\n              </paper-card>\n            '
        ]);
        return (
          (Ht = function() {
            return e;
          }),
          e
        );
      }
      function Bt() {
        var e = Mt([
          '\n      <div class="content">\n        <h1>\n          Repositories\n        </h1>\n        <p class="description">\n          Configure which add-on repositories to fetch data from:\n        </p>\n        <div class="card-group">\n          ',
          '\n\n          <paper-card>\n            <div class="card-content add">\n              <iron-icon icon="hassio:github-circle"></iron-icon>\n              <paper-input\n                label="Add new repository by URL"\n                .value=',
          "\n                @value-changed=",
          '\n              ></paper-input>\n            </div>\n            <div class="card-actions">\n              <ha-call-api-button\n                path="hassio/supervisor/options"\n                .hass=',
          "\n                .data=",
          "\n              >\n                Add\n              </ha-call-api-button>\n            </div>\n          </paper-card>\n        </div>\n      </div>\n    "
        ]);
        return (
          (Bt = function() {
            return e;
          }),
          e
        );
      }
      function Mt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Gt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Vt(e, t) {
        return (Vt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function qt(e) {
        var t,
          r = Kt(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Wt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Jt(e) {
        return e.decorators && e.decorators.length;
      }
      function Yt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function $t(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Kt(e) {
        var t = (function(e, t) {
          if ("object" !== Nt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Nt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Nt(t) ? t : String(t);
      }
      function Qt(e, t, r) {
        return (Qt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Xt(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Xt(e) {
        return (Xt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Jt(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Kt(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = $t(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = $t(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Yt(o.descriptor) || Yt(i.descriptor)) {
                    if (Jt(o) || Jt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Jt(o)) {
                      if (Jt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Wt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(qt)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-repositories-editor")],
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = Xt(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Nt(o) && "function" != typeof o)
                    ? Gt(i)
                    : o),
                e(Gt(r)),
                r
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && Vt(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "repos",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_repoUrl",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                key: "_sortedRepos",
                value: function() {
                  return Object(P.a)(function(e) {
                    return e
                      .filter(function(e) {
                        return "core" !== e.slug && "local" !== e.slug;
                      })
                      .sort(function(e, t) {
                        return e.name < t.name ? -1 : 1;
                      });
                  });
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this,
                    t = this._sortedRepos(this.repos);
                  return Object(n.e)(
                    Bt(),
                    Object(Lt.a)(
                      t,
                      function(e) {
                        return e.slug;
                      },
                      function(r) {
                        return Object(n.e)(
                          Ht(),
                          e.hass,
                          r.name,
                          r.url,
                          e.hass,
                          e.computeRemoveRepoData(t, r.url)
                        );
                      }
                    ),
                    this._repoUrl,
                    this._urlChanged,
                    this.hass,
                    this.computeAddRepoData(t, this._repoUrl)
                  );
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  Qt(Xt(r.prototype), "updated", this).call(this, e),
                    e.has("repos") && (this._repoUrl = "");
                }
              },
              {
                kind: "method",
                key: "_urlChanged",
                value: function(e) {
                  this._repoUrl = e.detail.value;
                }
              },
              {
                kind: "method",
                key: "computeRemoveRepoData",
                value: function(e, t) {
                  return {
                    addons_repositories: e
                      .filter(function(e) {
                        return e.url !== t;
                      })
                      .map(function(e) {
                        return e.source;
                      })
                  };
                }
              },
              {
                kind: "method",
                key: "computeAddRepoData",
                value: function(e, t) {
                  var r = e
                    ? e.map(function(e) {
                        return e.source;
                      })
                    : [];
                  return r.push(t), { addons_repositories: r };
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [re.a, Object(n.c)(Ut())];
                }
              }
            ]
          };
        },
        n.a
      );
      var Zt = r(16);
      r(82);
      function er(e) {
        return (er =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function tr() {
        var e = nr([
          "\n      :host {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    "
        ]);
        return (
          (tr = function() {
            return e;
          }),
          e
        );
      }
      function rr() {
        var e = nr([
          "\n      <paper-spinner-lite active></paper-spinner-lite>\n    "
        ]);
        return (
          (rr = function() {
            return e;
          }),
          e
        );
      }
      function nr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ir(e) {
        return (ir = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function or(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ar(e, t) {
        return (ar =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function sr(e) {
        var t,
          r = fr(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function cr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function lr(e) {
        return e.decorators && e.decorators.length;
      }
      function ur(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function dr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function fr(e) {
        var t = (function(e, t) {
          if ("object" !== er(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== er(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === er(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!lr(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = fr(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = dr(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = dr(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (ur(o.descriptor) || ur(i.descriptor)) {
                    if (lr(o) || lr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (lr(o)) {
                      if (lr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    cr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(sr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("loading-screen")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = ir(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== er(o) && "function" != typeof o)
                      ? or(i)
                      : o),
                  e(or(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && ar(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(rr());
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(tr());
                }
              }
            ]
          };
        },
        n.a
      );
      function pr(e) {
        return (pr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function hr() {
        var e = gr([
          "\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    "
        ]);
        return (
          (hr = function() {
            return e;
          }),
          e
        );
      }
      function mr(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function yr(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              mr(o, n, i, a, s, "next", e);
            }
            function s(e) {
              mr(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function vr() {
        var e = gr([
          '\n              <paper-icon-button\n                slot="suffix"\n                class="suffix"\n                @click=',
          '\n                icon="hassio:close"\n                alt="Clear"\n                title="Clear"\n              ></paper-icon-button>\n            '
        ]);
        return (
          (vr = function() {
            return e;
          }),
          e
        );
      }
      function br() {
        var e = gr([
          '\n      <div class="search-container">\n        <paper-input\n          label="Search"\n          .value=',
          "\n          @value-changed=",
          '\n        >\n          <iron-icon\n            icon="hassio:magnify"\n            slot="prefix"\n            class="prefix"\n          ></iron-icon>\n          ',
          "\n        </paper-input>\n      </div>\n    "
        ]);
        return (
          (br = function() {
            return e;
          }),
          e
        );
      }
      function gr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function wr(e) {
        return (wr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function kr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Er(e, t) {
        return (Er =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Or(e) {
        var t,
          r = Sr(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Pr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function jr(e) {
        return e.decorators && e.decorators.length;
      }
      function xr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function _r(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Sr(e) {
        var t = (function(e, t) {
          if ("object" !== pr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== pr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === pr(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!jr(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Sr(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = _r(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = _r(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (xr(o.descriptor) || xr(i.descriptor)) {
                    if (jr(o) || jr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (jr(o)) {
                      if (jr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Pr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Or)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-search-input")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = wr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== pr(o) && "function" != typeof o)
                      ? kr(i)
                      : o),
                  e(kr(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && Er(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "filter",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(Zt.g)(
                    br(),
                    this.filter,
                    this._filterInputChanged,
                    this.filter && Object(Zt.g)(vr(), this._clearSearch)
                  );
                }
              },
              {
                kind: "method",
                key: "_filterChanged",
                value: (function() {
                  var e = yr(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                Object(l.a)(this, "value-changed", {
                                  value: String(t)
                                });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_filterInputChanged",
                value: (function() {
                  var e = yr(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._filterChanged(t.target.value);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_clearSearch",
                value: (function() {
                  var e = yr(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._filterChanged("");
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(hr());
                }
              }
            ]
          };
        },
        n.a
      );
      function Cr(e) {
        return (Cr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Dr() {
        var e = Rr([
          "\n      hassio-addon-repository {\n        margin-top: 24px;\n      }\n    "
        ]);
        return (
          (Dr = function() {
            return e;
          }),
          e
        );
      }
      function Tr() {
        var e = Rr([
          "\n        <hassio-addon-repository\n          .hass=",
          "\n          .repo=",
          "\n          .addons=",
          "\n          .filter=",
          "\n        ></hassio-addon-repository>\n      "
        ]);
        return (
          (Tr = function() {
            return e;
          }),
          e
        );
      }
      function Ar() {
        var e = Rr([
          "\n      <hassio-repositories-editor\n        .hass=",
          "\n        .repos=",
          "\n      ></hassio-repositories-editor>\n\n      <hassio-search-input\n        .filter=",
          "\n        @value-changed=",
          "\n      ></hassio-search-input>\n\n      ",
          "\n    "
        ]);
        return (
          (Ar = function() {
            return e;
          }),
          e
        );
      }
      function zr() {
        var e = Rr(["\n        <loading-screen></loading-screen>\n      "]);
        return (
          (zr = function() {
            return e;
          }),
          e
        );
      }
      function Rr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Ir(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Fr(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Ir(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Ir(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Lr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Nr(e, t) {
        return (Nr =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ur(e) {
        var t,
          r = Vr(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Hr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Br(e) {
        return e.decorators && e.decorators.length;
      }
      function Mr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Gr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Vr(e) {
        var t = (function(e, t) {
          if ("object" !== Cr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Cr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Cr(t) ? t : String(t);
      }
      function qr(e, t, r) {
        return (qr =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Wr(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Wr(e) {
        return (Wr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Jr = function(e, t) {
          return "local" === e.slug
            ? -1
            : "local" === t.slug
            ? 1
            : "core" === e.slug
            ? -1
            : "core" === t.slug
            ? 1
            : e.name.toUpperCase() < t.name.toUpperCase()
            ? -1
            : 1;
        },
        Yr = (function(e, t, r, n) {
          var i = (function() {
            var e = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function(e, t) {
                ["method", "field"].forEach(function(r) {
                  t.forEach(function(t) {
                    t.kind === r &&
                      "own" === t.placement &&
                      this.defineClassElement(e, t);
                  }, this);
                }, this);
              },
              initializeClassElements: function(e, t) {
                var r = e.prototype;
                ["method", "field"].forEach(function(n) {
                  t.forEach(function(t) {
                    var i = t.placement;
                    if (t.kind === n && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? e : r;
                      this.defineClassElement(o, t);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function(e, t) {
                var r = t.descriptor;
                if ("field" === t.kind) {
                  var n = t.initializer;
                  r = {
                    enumerable: r.enumerable,
                    writable: r.writable,
                    configurable: r.configurable,
                    value: void 0 === n ? void 0 : n.call(e)
                  };
                }
                Object.defineProperty(e, t.key, r);
              },
              decorateClass: function(e, t) {
                var r = [],
                  n = [],
                  i = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function(e) {
                    this.addElementPlacement(e, i);
                  }, this),
                  e.forEach(function(e) {
                    if (!Br(e)) return r.push(e);
                    var t = this.decorateElement(e, i);
                    r.push(t.element),
                      r.push.apply(r, t.extras),
                      n.push.apply(n, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: r, finishers: n };
                var o = this.decorateConstructor(r, t);
                return n.push.apply(n, o.finishers), (o.finishers = n), o;
              },
              addElementPlacement: function(e, t, r) {
                var n = t[e.placement];
                if (!r && -1 !== n.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                n.push(e.key);
              },
              decorateElement: function(e, t) {
                for (
                  var r = [], n = [], i = e.decorators, o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var a = t[e.placement];
                  a.splice(a.indexOf(e.key), 1);
                  var s = this.fromElementDescriptor(e),
                    c = this.toElementFinisherExtras((0, i[o])(s) || s);
                  (e = c.element),
                    this.addElementPlacement(e, t),
                    c.finisher && n.push(c.finisher);
                  var l = c.extras;
                  if (l) {
                    for (var u = 0; u < l.length; u++)
                      this.addElementPlacement(l[u], t);
                    r.push.apply(r, l);
                  }
                }
                return { element: e, finishers: n, extras: r };
              },
              decorateConstructor: function(e, t) {
                for (var r = [], n = t.length - 1; n >= 0; n--) {
                  var i = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[n])(i) || i);
                  if (
                    (void 0 !== o.finisher && r.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    e = o.elements;
                    for (var a = 0; a < e.length - 1; a++)
                      for (var s = a + 1; s < e.length; s++)
                        if (
                          e[a].key === e[s].key &&
                          e[a].placement === e[s].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + e[a].key + ")"
                          );
                  }
                }
                return { elements: e, finishers: r };
              },
              fromElementDescriptor: function(e) {
                var t = {
                  kind: e.kind,
                  key: e.key,
                  placement: e.placement,
                  descriptor: e.descriptor
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  "field" === e.kind && (t.initializer = e.initializer),
                  t
                );
              },
              toElementDescriptors: function(e) {
                var t;
                if (void 0 !== e)
                  return ((t = e),
                  (function(e) {
                    if (Array.isArray(e)) return e;
                  })(t) ||
                    (function(e) {
                      if (
                        Symbol.iterator in Object(e) ||
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    (function() {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    })()).map(function(e) {
                    var t = this.toElementDescriptor(e);
                    return (
                      this.disallowProperty(
                        e,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
                      t
                    );
                  }, this);
              },
              toElementDescriptor: function(e) {
                var t = String(e.kind);
                if ("method" !== t && "field" !== t)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      t +
                      '"'
                  );
                var r = Vr(e.key),
                  n = String(e.placement);
                if ("static" !== n && "prototype" !== n && "own" !== n)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      n +
                      '"'
                  );
                var i = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: r,
                  placement: n,
                  descriptor: Object.assign({}, i)
                };
                return (
                  "field" !== t
                    ? this.disallowProperty(
                        e,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        i,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = e.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function(e) {
                var t = this.toElementDescriptor(e),
                  r = Gr(e, "finisher"),
                  n = this.toElementDescriptors(e.extras);
                return { element: t, finisher: r, extras: n };
              },
              fromClassDescriptor: function(e) {
                var t = {
                  kind: "class",
                  elements: e.map(this.fromElementDescriptor, this)
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  t
                );
              },
              toClassDescriptor: function(e) {
                var t = String(e.kind);
                if ("class" !== t)
                  throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                      t +
                      '"'
                  );
                this.disallowProperty(e, "key", "A class descriptor"),
                  this.disallowProperty(e, "placement", "A class descriptor"),
                  this.disallowProperty(e, "descriptor", "A class descriptor"),
                  this.disallowProperty(e, "initializer", "A class descriptor"),
                  this.disallowProperty(e, "extras", "A class descriptor");
                var r = Gr(e, "finisher"),
                  n = this.toElementDescriptors(e.elements);
                return { elements: n, finisher: r };
              },
              runClassFinishers: function(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = (0, t[r])(e);
                  if (void 0 !== n) {
                    if ("function" != typeof n)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
                    e = n;
                  }
                }
                return e;
              },
              disallowProperty: function(e, t, r) {
                if (void 0 !== e[t])
                  throw new TypeError(r + " can't have a ." + t + " property.");
              }
            };
            return e;
          })();
          if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
          var a = t(function(e) {
              i.initializeInstanceElements(e, s.elements);
            }, r),
            s = i.decorateClass(
              (function(e) {
                for (
                  var t = [],
                    r = function(e) {
                      return (
                        "method" === e.kind &&
                        e.key === o.key &&
                        e.placement === o.placement
                      );
                    },
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i,
                    o = e[n];
                  if ("method" === o.kind && (i = t.find(r)))
                    if (Mr(o.descriptor) || Mr(i.descriptor)) {
                      if (Br(o) || Br(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (Br(o)) {
                        if (Br(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      Hr(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(a.d.map(Ur)),
              e
            );
          return (
            i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers)
          );
        })(
          null,
          function(e, t) {
            var r = (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = Wr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Cr(o) && "function" != typeof o)
                      ? Lr(i)
                      : o),
                  e(Lr(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && Nr(e, t);
                })(n, t),
                n
              );
            })();
            return {
              F: r,
              d: [
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "hass",
                  value: void 0
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_addons",
                  value: void 0
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_repos",
                  value: void 0
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_filter",
                  value: void 0
                },
                {
                  kind: "method",
                  key: "refreshData",
                  value: (function() {
                    var e = Fr(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this._repos = void 0),
                                    (this._addons = void 0),
                                    (this._filter = void 0),
                                    (e.next = 5),
                                    Object(V.f)(this.hass)
                                  );
                                case 5:
                                  return (e.next = 7), this._loadData();
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function() {
                      return e.apply(this, arguments);
                    };
                  })()
                },
                {
                  kind: "method",
                  key: "render",
                  value: function() {
                    var e = this;
                    if (!this._addons || !this._repos)
                      return Object(Zt.g)(zr());
                    var t = [],
                      r = !0,
                      n = !1,
                      i = void 0;
                    try {
                      for (
                        var o,
                          a = function() {
                            var r = o.value,
                              n = e._addons.filter(function(e) {
                                return e.repository === r.slug;
                              });
                            if (0 === n.length) return "continue";
                            t.push(Object(Zt.g)(Tr(), e.hass, r, n, e._filter));
                          },
                          s = this._repos[Symbol.iterator]();
                        !(r = (o = s.next()).done);
                        r = !0
                      )
                        a();
                    } catch (c) {
                      (n = !0), (i = c);
                    } finally {
                      try {
                        r || null == s.return || s.return();
                      } finally {
                        if (n) throw i;
                      }
                    }
                    return Object(Zt.g)(
                      Ar(),
                      this.hass,
                      this._repos,
                      this._filter,
                      this._filterChanged,
                      t
                    );
                  }
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function(e) {
                    var t = this;
                    qr(Wr(r.prototype), "firstUpdated", this).call(this, e),
                      this.addEventListener("hass-api-called", function(e) {
                        return t.apiCalled(e);
                      }),
                      this._loadData();
                  }
                },
                {
                  kind: "method",
                  key: "apiCalled",
                  value: function(e) {
                    e.detail.success && this._loadData();
                  }
                },
                {
                  kind: "method",
                  key: "_loadData",
                  value: (function() {
                    var e = Fr(
                      regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    Object(V.d)(this.hass)
                                  );
                                case 3:
                                  (t = e.sent),
                                    (this._repos = t.repositories),
                                    this._repos.sort(Jr),
                                    (this._addons = t.addons),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    alert("Failed to fetch add-on info");
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 9]]
                        );
                      })
                    );
                    return function() {
                      return e.apply(this, arguments);
                    };
                  })()
                },
                {
                  kind: "method",
                  key: "_filterChanged",
                  value: (function() {
                    var e = Fr(
                      regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this._filter = t.detail.value;
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function(t) {
                      return e.apply(this, arguments);
                    };
                  })()
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                    return Object(n.c)(Dr());
                  }
                }
              ]
            };
          },
          n.a
        );
      customElements.define("hassio-addon-store", Yr);
      r(126);
      var $r = r(118),
        Kr = r(119);
      function Qr(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Xr(e) {
        return (Xr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Zr() {
        var e = ln([
          "\n        paper-card {\n          height: 100%;\n          width: 100%;\n        }\n        .card-content {\n          color: var(--primary-text-color);\n          box-sizing: border-box;\n          height: calc(100% - 47px);\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n        mwc-button.info {\n          max-width: calc(50% - 12px);\n        }\n        table.info {\n          margin-bottom: 10px;\n        }\n        .warning {\n          --mdc-theme-primary: var(--google-red-500);\n        }\n      "
        ]);
        return (
          (Zr = function() {
            return e;
          }),
          e
        );
      }
      function en() {
        var e = ln([
          "\n                <ha-call-api-button .hass=",
          ' path="hassio/os/update"\n                  >Update</ha-call-api-button\n                >\n              '
        ]);
        return (
          (en = function() {
            return e;
          }),
          e
        );
      }
      function tn() {
        var e = ln([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/os/config/sync"\n                  title="Load HassOS configs or updates from USB"\n                  >Import from USB</ha-call-api-button\n                >\n              '
        ]);
        return (
          (tn = function() {
            return e;
          }),
          e
        );
      }
      function rn() {
        var e = ln([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/shutdown"\n                  >Shutdown</ha-call-api-button\n                >\n              '
        ]);
        return (
          (rn = function() {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = ln([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/reboot"\n                  >Reboot</ha-call-api-button\n                >\n              '
        ]);
        return (
          (nn = function() {
            return e;
          }),
          e
        );
      }
      function on() {
        var e = ln([
          '\n                <div class="errors">Error: ',
          "</div>\n              "
        ]);
        return (
          (on = function() {
            return e;
          }),
          e
        );
      }
      function an() {
        var e = ln([
          "\n                <mwc-button\n                  raised\n                  @click=",
          '\n                  class="info"\n                >\n                  Change hostname\n                </mwc-button>\n              '
        ]);
        return (
          (an = function() {
            return e;
          }),
          e
        );
      }
      function sn() {
        var e = ln([
          "\n                    <tr>\n                      <td>Deployment</td>\n                      <td>",
          "</td>\n                    </tr>\n                  "
        ]);
        return (
          (sn = function() {
            return e;
          }),
          e
        );
      }
      function cn() {
        var e = ln([
          '\n      <paper-card>\n        <div class="card-content">\n          <h2>Host system</h2>\n          <table class="info">\n            <tbody>\n              <tr>\n                <td>Hostname</td>\n                <td>',
          "</td>\n              </tr>\n              <tr>\n                <td>System</td>\n                <td>",
          "</td>\n              </tr>\n              ",
          "\n            </tbody>\n          </table>\n          <mwc-button raised @click=",
          ' class="info">\n            Hardware\n          </mwc-button>\n          ',
          "\n          ",
          '\n        </div>\n        <div class="card-actions">\n          ',
          "\n          ",
          "\n          ",
          "\n          ",
          "\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (cn = function() {
            return e;
          }),
          e
        );
      }
      function ln(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function un(e) {
        return (un = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function dn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function fn(e, t) {
        return (fn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function pn(e) {
        var t,
          r = bn(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function hn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function mn(e) {
        return e.decorators && e.decorators.length;
      }
      function yn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function vn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function bn(e) {
        var t = (function(e, t) {
          if ("object" !== Xr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Xr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Xr(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!mn(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = bn(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = vn(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = vn(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (yn(o.descriptor) || yn(i.descriptor)) {
                    if (mn(o) || mn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (mn(o)) {
                      if (mn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    hn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(pn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-host-info")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = un(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Xr(o) && "function" != typeof o)
                      ? dn(i)
                      : o),
                  e(dn(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && fn(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_errors",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    cn(),
                    this.hostInfo.hostname,
                    this.hostInfo.operating_system,
                    this.hostInfo.deployment
                      ? Object(n.e)(sn(), this.hostInfo.deployment)
                      : "",
                    this._showHardware,
                    this.hostInfo.features.includes("hostname")
                      ? Object(n.e)(an(), this._changeHostnameClicked)
                      : "",
                    this._errors ? Object(n.e)(on(), this._errors) : "",
                    this.hostInfo.features.includes("reboot")
                      ? Object(n.e)(nn(), this.hass)
                      : "",
                    this.hostInfo.features.includes("shutdown")
                      ? Object(n.e)(rn(), this.hass)
                      : "",
                    this.hostInfo.features.includes("hassos")
                      ? Object(n.e)(tn(), this.hass)
                      : "",
                    this.hostInfo.version !== this.hostInfo.version_latest
                      ? Object(n.e)(en(), this.hass)
                      : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, re.a, Object(n.c)(Zr())];
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function() {
                  var e = this;
                  this.addEventListener("hass-api-called", function(t) {
                    return e._apiCalled(t);
                  });
                }
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  if (e.detail.success) this._errors = void 0;
                  else {
                    var t = e.detail.response;
                    this._errors =
                      "object" === Xr(t.body)
                        ? t.body.message || "Unknown error"
                        : t.body;
                  }
                }
              },
              {
                kind: "method",
                key: "_showHardware",
                value: (function() {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.t0 = this),
                                    (e.next = 4),
                                    Object($r.b)(this.hass)
                                  );
                                case 4:
                                  (e.t1 = e.sent),
                                    (t = e.t0._objectToMarkdown.call(
                                      e.t0,
                                      e.t1
                                    )),
                                    Object(Kr.a)(this, {
                                      title: "Hardware",
                                      content: t
                                    }),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t2 = e.catch(0)),
                                    Object(Kr.a)(this, {
                                      title: "Hardware",
                                      content: "Error getting hardware info"
                                    });
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 9]]
                        );
                      })),
                      function() {
                        var t = this,
                          r = arguments;
                        return new Promise(function(n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            Qr(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            Qr(o, n, i, a, s, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_objectToMarkdown",
                value: function(e) {
                  var t = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n = "";
                  return (
                    Object.keys(e).forEach(function(i) {
                      "object" !== Xr(e[i])
                        ? (n += ""
                            .concat(r, "- ")
                            .concat(i, ": ")
                            .concat(e[i], "\n"))
                        : ((n += "".concat(r, "- ").concat(i, ":\n")),
                          Array.isArray(e[i])
                            ? e[i].length &&
                              (n +=
                                "".concat(r, "    - ") +
                                e[i].join("\n".concat(r, "    - ")) +
                                "\n")
                            : (n += t._objectToMarkdown(
                                e[i],
                                "    ".concat(r)
                              )));
                    }),
                    n
                  );
                }
              },
              {
                kind: "method",
                key: "_changeHostnameClicked",
                value: function() {
                  var e = this.hostInfo.hostname,
                    t = prompt("Please enter a new hostname:", e);
                  t &&
                    t !== e &&
                    this.hass.callApi("POST", "hassio/host/options", {
                      hostname: t
                    });
                }
              }
            ]
          };
        },
        n.a
      );
      function gn(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function wn(e) {
        return (wn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function kn() {
        var e = Sn([
          "\n        paper-card {\n          height: 100%;\n          width: 100%;\n        }\n        .card-content {\n          color: var(--primary-text-color);\n          box-sizing: border-box;\n          height: calc(100% - 47px);\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n      "
        ]);
        return (
          (kn = function() {
            return e;
          }),
          e
        );
      }
      function En() {
        var e = Sn([
          "\n                <mwc-button\n                  @click=",
          '\n                  class="warning"\n                  title="Get beta updates for Home Assistant (RCs), supervisor and host"\n                  >Join beta channel</mwc-button\n                >\n              '
        ]);
        return (
          (En = function() {
            return e;
          }),
          e
        );
      }
      function On() {
        var e = Sn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/options"\n                  .data=',
          "\n                  >Leave beta channel</ha-call-api-button\n                >\n              "
        ]);
        return (
          (On = function() {
            return e;
          }),
          e
        );
      }
      function Pn() {
        var e = Sn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/update"\n                  >Update</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Pn = function() {
            return e;
          }),
          e
        );
      }
      function jn() {
        var e = Sn([
          '\n                <div class="errors">Error: ',
          "</div>\n              "
        ]);
        return (
          (jn = function() {
            return e;
          }),
          e
        );
      }
      function xn() {
        var e = Sn([
          "\n                    <tr>\n                      <td>Channel</td>\n                      <td>",
          "</td>\n                    </tr>\n                  "
        ]);
        return (
          (xn = function() {
            return e;
          }),
          e
        );
      }
      function _n() {
        var e = Sn([
          '\n      <paper-card>\n        <div class="card-content">\n          <h2>Supervisor</h2>\n          <table class="info">\n            <tbody>\n              <tr>\n                <td>Version</td>\n                <td>',
          "</td>\n              </tr>\n              <tr>\n                <td>Latest version</td>\n                <td>",
          "</td>\n              </tr>\n              ",
          "\n            </tbody>\n          </table>\n          ",
          '\n        </div>\n        <div class="card-actions">\n          <ha-call-api-button .hass=',
          ' path="hassio/supervisor/reload"\n            >Reload</ha-call-api-button\n          >\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (_n = function() {
            return e;
          }),
          e
        );
      }
      function Sn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Cn(e) {
        return (Cn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Dn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Tn(e, t) {
        return (Tn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function An(e) {
        var t,
          r = Ln(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function zn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Rn(e) {
        return e.decorators && e.decorators.length;
      }
      function In(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Fn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ln(e) {
        var t = (function(e, t) {
          if ("object" !== wn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== wn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === wn(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Rn(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Ln(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Fn(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Fn(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (In(o.descriptor) || In(i.descriptor)) {
                    if (Rn(o) || Rn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Rn(o)) {
                      if (Rn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    zn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(An)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-supervisor-info")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = Cn(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== wn(o) && "function" != typeof o)
                      ? Dn(i)
                      : o),
                  e(Dn(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && Tn(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_errors",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    _n(),
                    this.supervisorInfo.version,
                    this.supervisorInfo.version_latest,
                    "stable" !== this.supervisorInfo.channel
                      ? Object(n.e)(xn(), this.supervisorInfo.channel)
                      : "",
                    this._errors ? Object(n.e)(jn(), this._errors) : "",
                    this.hass,
                    this.supervisorInfo.version !==
                      this.supervisorInfo.version_latest
                      ? Object(n.e)(Pn(), this.hass)
                      : "",
                    "beta" === this.supervisorInfo.channel
                      ? Object(n.e)(On(), this.hass, { channel: "stable" })
                      : "",
                    "stable" === this.supervisorInfo.channel
                      ? Object(n.e)(En(), this._joinBeta)
                      : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, re.a, Object(n.c)(kn())];
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function() {
                  var e = this;
                  this.addEventListener("hass-api-called", function(t) {
                    return e._apiCalled(t);
                  });
                }
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  if (e.detail.success) this._errors = void 0;
                  else {
                    var t = e.detail.response;
                    this._errors =
                      "object" === wn(t.body)
                        ? t.body.message || "Unknown error"
                        : t.body;
                  }
                }
              },
              {
                kind: "method",
                key: "_joinBeta",
                value: (function() {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t, r, n;
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    confirm(
                                      "WARNING:\nBeta releases are for testers and early adopters and can contain unstable code changes. Make sure you have backups of your data before you activate this feature.\n\nThis includes beta releases for:\n- Home Assistant (Release Candidates)\n- Hass.io supervisor\n- Host system"
                                    )
                                  ) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (e.prev = 2),
                                    (t = {
                                      channel: "beta"
                                    }),
                                    (e.next = 6),
                                    Object(N.e)(this.hass, t)
                                  );
                                case 6:
                                  (r = {
                                    success: !0,
                                    response: void 0,
                                    path: "option"
                                  }),
                                    Object(l.a)(this, "hass-api-called", r),
                                    (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10),
                                    (e.t0 = e.catch(2)),
                                    (this._errors = "Error joining beta channel, ".concat(
                                      (null === (n = e.t0.body) || void 0 === n
                                        ? void 0
                                        : n.message) || e.t0
                                    ));
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[2, 10]]
                        );
                      })),
                      function() {
                        var t = this,
                          r = arguments;
                        return new Promise(function(n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            gn(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            gn(o, n, i, a, s, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()
              }
            ]
          };
        },
        n.a
      );
      var Nn = r(120);
      function Un(e) {
        return (Un =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Hn() {
        var e = Gn([
          "\n        paper-card {\n          width: 100%;\n        }\n        pre {\n          white-space: pre-wrap;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n      "
        ]);
        return (
          (Hn = function() {
            return e;
          }),
          e
        );
      }
      function Bn() {
        var e = Gn([
          '\n              <div class="errors">',
          "</div>\n            "
        ]);
        return (
          (Bn = function() {
            return e;
          }),
          e
        );
      }
      function Mn() {
        var e = Gn([
          "\n      <paper-card>\n        ",
          '\n        <div class="card-content" id="content"></div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Refresh</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (Mn = function() {
            return e;
          }),
          e
        );
      }
      function Gn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Vn(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function qn(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Vn(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Vn(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Wn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Jn(e, t) {
        return (Jn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Yn(e) {
        var t,
          r = Zn(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function $n(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Kn(e) {
        return e.decorators && e.decorators.length;
      }
      function Qn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Xn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Zn(e) {
        var t = (function(e, t) {
          if ("object" !== Un(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Un(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Un(t) ? t : String(t);
      }
      function ei(e, t, r) {
        return (ei =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = ti(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function ti(e) {
        return (ti = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Kn(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Zn(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Xn(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Xn(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Qn(o.descriptor) || Qn(i.descriptor)) {
                    if (Kn(o) || Kn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Kn(o)) {
                      if (Kn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    $n(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Yn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-supervisor-log")],
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = ti(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Un(o) && "function" != typeof o)
                    ? Wn(i)
                    : o),
                e(Wn(r)),
                r
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && Jn(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.g)("#content")],
                key: "_logContent",
                value: void 0
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: (function() {
                  var e = qn(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  ei(
                                    ti(r.prototype),
                                    "connectedCallback",
                                    this
                                  ).call(this),
                                  (e.next = 3),
                                  this._loadData()
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    Mn(),
                    this._error ? Object(n.e)(Bn(), this._error) : "",
                    this._refresh
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, re.a, Nn.a, Object(n.c)(Hn())];
                }
              },
              {
                kind: "method",
                key: "_loadData",
                value: (function() {
                  var e = qn(
                    regeneratorRuntime.mark(function e() {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(N.d)(this.hass)
                                );
                              case 4:
                                for (t = e.sent; this._logContent.lastChild; )
                                  this._logContent.removeChild(
                                    this._logContent.lastChild
                                  );
                                this._logContent.appendChild(Object(Nn.b)(t)),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(1)),
                                  (this._error = "Failed to get supervisor logs, ".concat(
                                    (null === (r = e.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || e.t0
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 9]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_refresh",
                value: (function() {
                  var e = qn(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._loadData();
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]
          };
        },
        n.a
      );
      function ri(e) {
        return (ri =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ni() {
        var e = oi([
          "\n        .content {\n          margin: 8px;\n          color: var(--primary-text-color);\n        }\n        .title {\n          margin-top: 24px;\n          color: var(--primary-text-color);\n          font-size: 2em;\n          padding-left: 8px;\n          margin-bottom: 8px;\n        }\n        hassio-supervisor-log {\n          width: 100%;\n        }\n      "
        ]);
        return (
          (ni = function() {
            return e;
          }),
          e
        );
      }
      function ii() {
        var e = oi([
          '\n      <div class="content">\n        <h1>Information</h1>\n        <div class="card-group">\n          <hassio-supervisor-info\n            .hass=',
          "\n            .supervisorInfo=",
          "\n          ></hassio-supervisor-info>\n          <hassio-host-info\n            .hass=",
          "\n            .hostInfo=",
          "\n            .hassOsInfo=",
          "\n          ></hassio-host-info>\n        </div>\n        <h1>System log</h1>\n        <hassio-supervisor-log .hass=",
          "></hassio-supervisor-log>\n      </div>\n    "
        ]);
        return (
          (ii = function() {
            return e;
          }),
          e
        );
      }
      function oi(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ai(e) {
        return (ai = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function si(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ci(e, t) {
        return (ci =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function li(e) {
        var t,
          r = hi(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function ui(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function di(e) {
        return e.decorators && e.decorators.length;
      }
      function fi(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function pi(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function hi(e) {
        var t = (function(e, t) {
          if ("object" !== ri(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ri(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ri(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!di(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = hi(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = pi(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = pi(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (fi(o.descriptor) || fi(i.descriptor)) {
                    if (di(o) || di(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (di(o)) {
                      if (di(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    ui(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(li)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-system")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = ai(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== ri(o) && "function" != typeof o)
                      ? si(i)
                      : o),
                  e(si(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && ci(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    ii(),
                    this.hass,
                    this.supervisorInfo,
                    this.hass,
                    this.hostInfo,
                    this.hassOsInfo,
                    this.hass
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, re.a, Object(n.c)(ni())];
                }
              }
            ]
          };
        },
        n.a
      );
      function mi(e) {
        return (mi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function yi(e) {
        return (yi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function vi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function bi(e, t) {
        return (bi =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function gi(e) {
        var t,
          r = Pi(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function wi(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ki(e) {
        return e.decorators && e.decorators.length;
      }
      function Ei(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Oi(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Pi(e) {
        var t = (function(e, t) {
          if ("object" !== mi(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== mi(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === mi(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!ki(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Pi(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Oi(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Oi(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Ei(o.descriptor) || Ei(i.descriptor)) {
                    if (ki(o) || ki(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ki(o)) {
                      if (ki(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    wi(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(gi)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-tabs-router")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = yi(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== mi(o) && "function" != typeof o)
                      ? vi(i)
                      : o),
                  e(vi(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && bi(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function() {
                  return {
                    routes: {
                      dashboard: { tag: "hassio-dashboard" },
                      snapshots: { tag: "hassio-snapshots" },
                      store: { tag: "hassio-addon-store" },
                      system: { tag: "hassio-system" }
                    }
                  };
                }
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function(e) {
                  "setProperties" in e
                    ? e.setProperties({
                        hass: this.hass,
                        supervisorInfo: this.supervisorInfo,
                        hostInfo: this.hostInfo,
                        hassInfo: this.hassInfo,
                        hassOsInfo: this.hassOsInfo
                      })
                    : ((e.hass = this.hass),
                      (e.supervisorInfo = this.supervisorInfo),
                      (e.hostInfo = this.hostInfo),
                      (e.hassInfo = this.hassInfo),
                      (e.hassOsInfo = this.hassOsInfo));
                }
              }
            ]
          };
        },
        L
      );
      function ji(e) {
        return (ji =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function xi() {
        var e = Ci([
          "\n        :host {\n          color: var(--primary-text-color);\n          --paper-card-header-color: var(--primary-text-color);\n        }\n        paper-tabs {\n          margin-left: 12px;\n          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);\n          text-transform: uppercase;\n        }\n      "
        ]);
        return (
          (xi = function() {
            return e;
          }),
          e
        );
      }
      function _i() {
        var e = Ci([
          '\n                  <paper-icon-button\n                    icon="hassio:refresh"\n                    @click=',
          "\n                  ></paper-icon-button>\n                "
        ]);
        return (
          (_i = function() {
            return e;
          }),
          e
        );
      }
      function Si() {
        var e = Ci([
          '\n      <app-header-layout has-scrolling-region>\n        <app-header fixed slot="header">\n          <app-toolbar>\n            <ha-menu-button\n              .hass=',
          "\n              .narrow=",
          "\n              hassio\n            ></ha-menu-button>\n            <div main-title>Supervisor</div>\n            ",
          '\n          </app-toolbar>\n          <paper-tabs\n            scrollable\n            attr-for-selected="page-name"\n            .selected=',
          "\n            @iron-activate=",
          '\n          >\n            <paper-tab page-name="dashboard">Dashboard</paper-tab>\n            <paper-tab page-name="snapshots">Snapshots</paper-tab>\n            <paper-tab page-name="store">Add-on store</paper-tab>\n            <paper-tab page-name="system">System</paper-tab>\n          </paper-tabs>\n        </app-header>\n        <hassio-tabs-router\n          .route=',
          "\n          .hass=",
          "\n          .supervisorInfo=",
          "\n          .hostInfo=",
          "\n          .hassInfo=",
          "\n          .hassOsInfo=",
          "\n        ></hassio-tabs-router>\n      </app-header-layout>\n    "
        ]);
        return (
          (Si = function() {
            return e;
          }),
          e
        );
      }
      function Ci(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Di(e) {
        return (Di = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ti(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ai(e, t) {
        return (Ai =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function zi(e) {
        var t,
          r = Ni(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Ri(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Ii(e) {
        return e.decorators && e.decorators.length;
      }
      function Fi(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Li(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ni(e) {
        var t = (function(e, t) {
          if ("object" !== ji(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ji(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ji(t) ? t : String(t);
      }
      var Ui = ["store", "snapshots"],
        Hi =
          ((function(e, t, r, n) {
            var i = (function() {
              var e = {
                elementsDefinitionOrder: [["method"], ["field"]],
                initializeInstanceElements: function(e, t) {
                  ["method", "field"].forEach(function(r) {
                    t.forEach(function(t) {
                      t.kind === r &&
                        "own" === t.placement &&
                        this.defineClassElement(e, t);
                    }, this);
                  }, this);
                },
                initializeClassElements: function(e, t) {
                  var r = e.prototype;
                  ["method", "field"].forEach(function(n) {
                    t.forEach(function(t) {
                      var i = t.placement;
                      if (
                        t.kind === n &&
                        ("static" === i || "prototype" === i)
                      ) {
                        var o = "static" === i ? e : r;
                        this.defineClassElement(o, t);
                      }
                    }, this);
                  }, this);
                },
                defineClassElement: function(e, t) {
                  var r = t.descriptor;
                  if ("field" === t.kind) {
                    var n = t.initializer;
                    r = {
                      enumerable: r.enumerable,
                      writable: r.writable,
                      configurable: r.configurable,
                      value: void 0 === n ? void 0 : n.call(e)
                    };
                  }
                  Object.defineProperty(e, t.key, r);
                },
                decorateClass: function(e, t) {
                  var r = [],
                    n = [],
                    i = { static: [], prototype: [], own: [] };
                  if (
                    (e.forEach(function(e) {
                      this.addElementPlacement(e, i);
                    }, this),
                    e.forEach(function(e) {
                      if (!Ii(e)) return r.push(e);
                      var t = this.decorateElement(e, i);
                      r.push(t.element),
                        r.push.apply(r, t.extras),
                        n.push.apply(n, t.finishers);
                    }, this),
                    !t)
                  )
                    return { elements: r, finishers: n };
                  var o = this.decorateConstructor(r, t);
                  return n.push.apply(n, o.finishers), (o.finishers = n), o;
                },
                addElementPlacement: function(e, t, r) {
                  var n = t[e.placement];
                  if (!r && -1 !== n.indexOf(e.key))
                    throw new TypeError("Duplicated element (" + e.key + ")");
                  n.push(e.key);
                },
                decorateElement: function(e, t) {
                  for (
                    var r = [], n = [], i = e.decorators, o = i.length - 1;
                    o >= 0;
                    o--
                  ) {
                    var a = t[e.placement];
                    a.splice(a.indexOf(e.key), 1);
                    var s = this.fromElementDescriptor(e),
                      c = this.toElementFinisherExtras((0, i[o])(s) || s);
                    (e = c.element),
                      this.addElementPlacement(e, t),
                      c.finisher && n.push(c.finisher);
                    var l = c.extras;
                    if (l) {
                      for (var u = 0; u < l.length; u++)
                        this.addElementPlacement(l[u], t);
                      r.push.apply(r, l);
                    }
                  }
                  return { element: e, finishers: n, extras: r };
                },
                decorateConstructor: function(e, t) {
                  for (var r = [], n = t.length - 1; n >= 0; n--) {
                    var i = this.fromClassDescriptor(e),
                      o = this.toClassDescriptor((0, t[n])(i) || i);
                    if (
                      (void 0 !== o.finisher && r.push(o.finisher),
                      void 0 !== o.elements)
                    ) {
                      e = o.elements;
                      for (var a = 0; a < e.length - 1; a++)
                        for (var s = a + 1; s < e.length; s++)
                          if (
                            e[a].key === e[s].key &&
                            e[a].placement === e[s].placement
                          )
                            throw new TypeError(
                              "Duplicated element (" + e[a].key + ")"
                            );
                    }
                  }
                  return { elements: e, finishers: r };
                },
                fromElementDescriptor: function(e) {
                  var t = {
                    kind: e.kind,
                    key: e.key,
                    placement: e.placement,
                    descriptor: e.descriptor
                  };
                  return (
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                    }),
                    "field" === e.kind && (t.initializer = e.initializer),
                    t
                  );
                },
                toElementDescriptors: function(e) {
                  var t;
                  if (void 0 !== e)
                    return ((t = e),
                    (function(e) {
                      if (Array.isArray(e)) return e;
                    })(t) ||
                      (function(e) {
                        if (
                          Symbol.iterator in Object(e) ||
                          "[object Arguments]" ===
                            Object.prototype.toString.call(e)
                        )
                          return Array.from(e);
                      })(t) ||
                      (function() {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance"
                        );
                      })()).map(function(e) {
                      var t = this.toElementDescriptor(e);
                      return (
                        this.disallowProperty(
                          e,
                          "finisher",
                          "An element descriptor"
                        ),
                        this.disallowProperty(
                          e,
                          "extras",
                          "An element descriptor"
                        ),
                        t
                      );
                    }, this);
                },
                toElementDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("method" !== t && "field" !== t)
                    throw new TypeError(
                      'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                        t +
                        '"'
                    );
                  var r = Ni(e.key),
                    n = String(e.placement);
                  if ("static" !== n && "prototype" !== n && "own" !== n)
                    throw new TypeError(
                      'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                        n +
                        '"'
                    );
                  var i = e.descriptor;
                  this.disallowProperty(e, "elements", "An element descriptor");
                  var o = {
                    kind: t,
                    key: r,
                    placement: n,
                    descriptor: Object.assign({}, i)
                  };
                  return (
                    "field" !== t
                      ? this.disallowProperty(
                          e,
                          "initializer",
                          "A method descriptor"
                        )
                      : (this.disallowProperty(
                          i,
                          "get",
                          "The property descriptor of a field descriptor"
                        ),
                        this.disallowProperty(
                          i,
                          "set",
                          "The property descriptor of a field descriptor"
                        ),
                        this.disallowProperty(
                          i,
                          "value",
                          "The property descriptor of a field descriptor"
                        ),
                        (o.initializer = e.initializer)),
                    o
                  );
                },
                toElementFinisherExtras: function(e) {
                  var t = this.toElementDescriptor(e),
                    r = Li(e, "finisher"),
                    n = this.toElementDescriptors(e.extras);
                  return { element: t, finisher: r, extras: n };
                },
                fromClassDescriptor: function(e) {
                  var t = {
                    kind: "class",
                    elements: e.map(this.fromElementDescriptor, this)
                  };
                  return (
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                    }),
                    t
                  );
                },
                toClassDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("class" !== t)
                    throw new TypeError(
                      'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                        t +
                        '"'
                    );
                  this.disallowProperty(e, "key", "A class descriptor"),
                    this.disallowProperty(e, "placement", "A class descriptor"),
                    this.disallowProperty(
                      e,
                      "descriptor",
                      "A class descriptor"
                    ),
                    this.disallowProperty(
                      e,
                      "initializer",
                      "A class descriptor"
                    ),
                    this.disallowProperty(e, "extras", "A class descriptor");
                  var r = Li(e, "finisher"),
                    n = this.toElementDescriptors(e.elements);
                  return { elements: n, finisher: r };
                },
                runClassFinishers: function(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = (0, t[r])(e);
                    if (void 0 !== n) {
                      if ("function" != typeof n)
                        throw new TypeError(
                          "Finishers must return a constructor."
                        );
                      e = n;
                    }
                  }
                  return e;
                },
                disallowProperty: function(e, t, r) {
                  if (void 0 !== e[t])
                    throw new TypeError(
                      r + " can't have a ." + t + " property."
                    );
                }
              };
              return e;
            })();
            if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
            var a = t(function(e) {
                i.initializeInstanceElements(e, s.elements);
              }, r),
              s = i.decorateClass(
                (function(e) {
                  for (
                    var t = [],
                      r = function(e) {
                        return (
                          "method" === e.kind &&
                          e.key === o.key &&
                          e.placement === o.placement
                        );
                      },
                      n = 0;
                    n < e.length;
                    n++
                  ) {
                    var i,
                      o = e[n];
                    if ("method" === o.kind && (i = t.find(r)))
                      if (Fi(o.descriptor) || Fi(i.descriptor)) {
                        if (Ii(o) || Ii(i))
                          throw new ReferenceError(
                            "Duplicated methods (" +
                              o.key +
                              ") can't be decorated."
                          );
                        i.descriptor = o.descriptor;
                      } else {
                        if (Ii(o)) {
                          if (Ii(i))
                            throw new ReferenceError(
                              "Decorators can't be placed on different accessors with for the same property (" +
                                o.key +
                                ")."
                            );
                          i.decorators = o.decorators;
                        }
                        Ri(o, i);
                      }
                    else t.push(o);
                  }
                  return t;
                })(a.d.map(zi)),
                e
              );
            i.initializeClassElements(a.F, s.elements),
              i.runClassFinishers(a.F, s.finishers);
          })(
            [Object(n.d)("hassio-pages-with-tabs")],
            function(e, t) {
              return {
                F: (function(r) {
                  function n() {
                    var t, r, i, o;
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, n);
                    for (
                      var a = arguments.length, s = new Array(a), c = 0;
                      c < a;
                      c++
                    )
                      s[c] = arguments[c];
                    return (
                      (i = this),
                      (r =
                        !(o = (t = Di(n)).call.apply(t, [this].concat(s))) ||
                        ("object" !== ji(o) && "function" != typeof o)
                          ? Ti(i)
                          : o),
                      e(Ti(r)),
                      r
                    );
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t && Ai(e, t);
                    })(n, t),
                    n
                  );
                })(),
                d: [
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hass",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "narrow",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "route",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "supervisorInfo",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hostInfo",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hassInfo",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hassOsInfo",
                    value: void 0
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function() {
                      var e = this._page;
                      return Object(n.e)(
                        Si(),
                        this.hass,
                        this.narrow,
                        Ui.includes(e)
                          ? Object(n.e)(_i(), this.refreshClicked)
                          : void 0,
                        e,
                        this.handlePageSelected,
                        this.route,
                        this.hass,
                        this.supervisorInfo,
                        this.hostInfo,
                        this.hassInfo,
                        this.hassOsInfo
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "handlePageSelected",
                    value: function(e) {
                      var t,
                        r,
                        n,
                        i,
                        o,
                        a,
                        s,
                        c = e.detail.item.getAttribute("page-name");
                      c !== this._page &&
                        Object(O.a)(this, "/hassio/".concat(c)),
                        (t = this),
                        (r = this.shadowRoot.querySelector("app-header-layout")
                          .header.scrollTarget),
                        (n = r),
                        (i = Math.random()),
                        (o = Date.now()),
                        (a = n.scrollTop),
                        (s = 0 - a),
                        (t._currentAnimationId = i),
                        function e() {
                          var r,
                            c = Date.now() - o;
                          c > 200
                            ? (n.scrollTop = 0)
                            : t._currentAnimationId === i &&
                              ((n.scrollTop =
                                ((r = c), -s * (r /= 200) * (r - 2) + a)),
                              requestAnimationFrame(e.bind(t)));
                        }.call(t);
                    }
                  },
                  {
                    kind: "method",
                    key: "refreshClicked",
                    value: function() {
                      "snapshots" === this._page
                        ? this.shadowRoot
                            .querySelector("hassio-snapshots")
                            .refreshData()
                        : this.shadowRoot
                            .querySelector("hassio-addon-store")
                            .refreshData();
                    }
                  },
                  {
                    kind: "get",
                    key: "_page",
                    value: function() {
                      return this.route.path.substr(1);
                    }
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function() {
                      return [i.b, Object(n.c)(xi())];
                    }
                  }
                ]
              };
            },
            n.a
          ),
          r(121));
      function Bi(e) {
        return (Bi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Mi(e, t) {
        return (
          eo(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          Zi()
        );
      }
      function Gi(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Vi(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Gi(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Gi(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function qi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Wi(e, t) {
        return (Wi =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ji(e) {
        var t,
          r = Xi(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Yi(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function $i(e) {
        return e.decorators && e.decorators.length;
      }
      function Ki(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Qi(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Xi(e) {
        var t = (function(e, t) {
          if ("object" !== Bi(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Bi(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Bi(t) ? t : String(t);
      }
      function Zi() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function eo(e) {
        if (Array.isArray(e)) return e;
      }
      function to(e, t, r) {
        return (to =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = ro(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function ro(e) {
        return (ro = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      customElements.get("paper-icon-button").prototype._keyBindings = {};
      var no;
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!$i(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                eo(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  Zi()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Xi(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Qi(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Qi(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Ki(o.descriptor) || Ki(i.descriptor)) {
                    if ($i(o) || $i(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if ($i(o)) {
                      if ($i(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Yi(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ji)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-main")],
        function(e, t) {
          var i = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = ro(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Bi(o) && "function" != typeof o)
                    ? qi(i)
                    : o),
                e(qi(r)),
                r
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && Wi(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: i,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "panel",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function() {
                  var e = this;
                  return {
                    defaultPage: "dashboard",
                    initialLoad: function() {
                      return e._fetchData();
                    },
                    showLoading: !0,
                    routes: {
                      dashboard: { tag: "hassio-pages-with-tabs", cache: !0 },
                      snapshots: "dashboard",
                      store: "dashboard",
                      system: "dashboard",
                      addon: {
                        tag: "hassio-addon-view",
                        load: function() {
                          return Promise.all([r.e(0), r.e(14), r.e(7)]).then(
                            r.bind(null, 179)
                          );
                        }
                      },
                      ingress: {
                        tag: "hassio-ingress-view",
                        load: function() {
                          return r.e(9).then(r.bind(null, 177));
                        }
                      }
                    }
                  };
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hassInfo",
                value: void 0
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  var t,
                    r,
                    n,
                    o = this;
                  to(ro(i.prototype), "firstUpdated", this).call(this, e),
                    (function(e, t, r) {
                      var n = r ? s[r] || c(r, t) : void 0;
                      if (e._themes || n) {
                        var i = Object.assign(
                          {},
                          e._themes,
                          {},
                          null == n ? void 0 : n.styles
                        );
                        (e._themes = null == n ? void 0 : n.keys),
                          e.updateStyles
                            ? e.updateStyles(i)
                            : window.ShadyCSS &&
                              window.ShadyCSS.styleSubtree(e, i);
                      }
                    })(
                      this.parentElement,
                      this.hass.themes,
                      this.hass.selectedTheme || this.hass.themes.default_theme
                    ),
                    this.addEventListener("hass-api-called", function(e) {
                      return o._apiCalled(e);
                    }),
                    this.addEventListener("hass-toggle-menu", function() {
                      Object(l.a)(
                        window.parent.customPanel,
                        o.hass.dockedSidebar
                          ? "hass-close-menu"
                          : "hass-open-menu"
                      );
                    }),
                    window.addEventListener("location-changed", function(e) {
                      return Object(l.a)(o, e.type, e.detail, { bubbles: !1 });
                    }),
                    window.addEventListener("haptic", function(e) {
                      Object(l.a)(window.parent, e.type, e.detail, {
                        bubbles: !1
                      });
                    }),
                    (t = this),
                    (r = document.body),
                    t.addEventListener(
                      "show-dialog",
                      ((n = W(
                        regeneratorRuntime.mark(function e(n) {
                          var i, o, a, s;
                          return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (i = n.detail),
                                    (o = i.dialogTag),
                                    (a = i.dialogImport),
                                    (s = i.dialogParams),
                                    Y(t, r, a, o, s);
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )),
                      function(e) {
                        return n.apply(this, arguments);
                      })
                    );
                }
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function(e) {
                  var t =
                    "HASSIO-PAGES-WITH-TABS" === e.nodeName
                      ? this.route
                      : this.routeTail;
                  "setProperties" in e
                    ? e.setProperties({
                        hass: this.hass,
                        narrow: this.narrow,
                        supervisorInfo: this._supervisorInfo,
                        hostInfo: this._hostInfo,
                        hassInfo: this._hassInfo,
                        hassOsInfo: this._hassOsInfo,
                        route: t
                      })
                    : ((e.hass = this.hass),
                      (e.narrow = this.narrow),
                      (e.supervisorInfo = this._supervisorInfo),
                      (e.hostInfo = this._hostInfo),
                      (e.hassInfo = this._hassInfo),
                      (e.hassOsInfo = this._hassOsInfo),
                      (e.route = t));
                }
              },
              {
                kind: "method",
                key: "_fetchData",
                value: (function() {
                  var e = Vi(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, o;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !this.panel.config ||
                                  !this.panel.config.ingress
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  this._redirectIngress(
                                    this.panel.config.ingress
                                  )
                                );
                              case 3:
                                return e.abrupt("return");
                              case 4:
                                return (
                                  (e.next = 6),
                                  Promise.all([
                                    Object(N.c)(this.hass),
                                    M(this.hass),
                                    Object(N.b)(this.hass)
                                  ])
                                );
                              case 6:
                                if (
                                  ((t = e.sent),
                                  (r = Mi(t, 3)),
                                  (n = r[0]),
                                  (i = r[1]),
                                  (o = r[2]),
                                  (this._supervisorInfo = n),
                                  (this._hostInfo = i),
                                  (this._hassInfo = o),
                                  !this._hostInfo.features ||
                                    !this._hostInfo.features.includes("hassos"))
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (e.next = 17), G(this.hass);
                              case 17:
                                this._hassOsInfo = e.sent;
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_redirectIngress",
                value: (function() {
                  var e = Vi(
                    regeneratorRuntime.mark(function e(t) {
                      var r,
                        n,
                        i,
                        o = this;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = (function() {
                                    var e = Vi(
                                      regeneratorRuntime.mark(function e(t, r) {
                                        return regeneratorRuntime.wrap(function(
                                          e
                                        ) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  new Promise(function(e) {
                                                    (t.confirm = e),
                                                      Object(Hi.a)(o, t);
                                                  })
                                                );
                                              case 2:
                                                return (
                                                  r(),
                                                  (e.next = 5),
                                                  new Promise(function(e) {
                                                    return setTimeout(e, 1e3);
                                                  })
                                                );
                                              case 5:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e);
                                      })
                                    );
                                    return function(t, r) {
                                      return e.apply(this, arguments);
                                    };
                                  })()),
                                  (n = Object(N.a)(this.hass).then(
                                    function() {
                                      return !0;
                                    },
                                    function() {
                                      return !1;
                                    }
                                  )),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(V.b)(this.hass, t)
                                );
                              case 5:
                                (i = e.sent), (e.next = 13);
                                break;
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (e.next = 12),
                                  r(
                                    {
                                      text:
                                        "Unable to fetch add-on info to start Ingress",
                                      title: "Hass.io"
                                    },
                                    function() {
                                      return history.back();
                                    }
                                  )
                                );
                              case 12:
                                return e.abrupt("return");
                              case 13:
                                if (i.ingress_url) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.next = 16),
                                  r(
                                    {
                                      text: "Add-on does not support Ingress",
                                      title: i.name
                                    },
                                    function() {
                                      return history.back();
                                    }
                                  )
                                );
                              case 16:
                                return e.abrupt("return");
                              case 17:
                                if ("started" === i.state) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.next = 20),
                                  r(
                                    {
                                      text:
                                        "Add-on is not running. Please start it first",
                                      title: i.name
                                    },
                                    function() {
                                      return Object(O.a)(
                                        o,
                                        "/hassio/addon/".concat(i.slug),
                                        !0
                                      );
                                    }
                                  )
                                );
                              case 20:
                                return e.abrupt("return");
                              case 21:
                                return (e.next = 23), n;
                              case 23:
                                if (e.sent) {
                                  e.next = 27;
                                  break;
                                }
                                return (
                                  (e.next = 26),
                                  r(
                                    {
                                      text:
                                        "Unable to create an Ingress session",
                                      title: i.name
                                    },
                                    function() {
                                      return history.back();
                                    }
                                  )
                                );
                              case 26:
                                return e.abrupt("return");
                              case 27:
                                return (
                                  location.assign(i.ingress_url),
                                  (e.next = 30),
                                  new Promise(function() {})
                                );
                              case 30:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 8]]
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  var t = this;
                  if (e.detail.success) {
                    var r = 1;
                    !(function e() {
                      t._fetchData().catch(function() {
                        (r += 1), setTimeout(e, 1e3 * Math.min(r, 5));
                      });
                    })();
                  }
                }
              }
            ]
          };
        },
        ((no = L),
        (function(e) {
          function t() {
            var e, r, n, i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
              a[s] = arguments[s];
            return (
              (n = this),
              (r =
                !(i = (e = Z(t)).call.apply(e, [this].concat(a))) ||
                ("object" !== $(i) && "function" != typeof i)
                  ? Q(n)
                  : i),
              te(Q(r), "hass", void 0),
              te(Q(r), "__provideHass", []),
              r
            );
          }
          var r, n, i;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && ee(e, t);
            })(t, no),
            (r = t),
            (n = [
              {
                key: "provideHass",
                value: function(e) {
                  this.__provideHass.push(e), (e.hass = this.hass);
                }
              },
              {
                key: "updated",
                value: function(e) {
                  var r = this;
                  X(Z(t.prototype), "updated", this).call(this, e),
                    e.has("hass") &&
                      this.__provideHass.forEach(function(e) {
                        e.hass = r.hass;
                      });
                }
              }
            ]) && K(r.prototype, n),
            i && K(r, i),
            t
          );
        })())
      );
    },
    27: function(e, t, r) {
      "use strict";
      r.d(t, "f", function() {
        return a;
      }),
        r.d(t, "d", function() {
          return s;
        }),
        r.d(t, "b", function() {
          return c;
        }),
        r.d(t, "a", function() {
          return l;
        }),
        r.d(t, "c", function() {
          return u;
        }),
        r.d(t, "g", function() {
          return d;
        }),
        r.d(t, "h", function() {
          return f;
        }),
        r.d(t, "e", function() {
          return p;
        }),
        r.d(t, "i", function() {
          return h;
        });
      var n = r(49);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), t.callApi("POST", "hassio/addons/reload")
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/addons")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/addons/".concat(r, "/info"))
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi(
                          "GET",
                          "hassio/addons/".concat(r, "/changelog")
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi("GET", "hassio/addons/".concat(r, "/logs"))
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r, n) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/options"),
                          n
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        })(),
        f = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r, n) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/security"),
                          n
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r, n) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/install")
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })(),
        h = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/uninstall")
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })();
    },
    37: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      });
      var n = r(11),
        i = function(e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          r
            ? history.replaceState(null, "", t)
            : history.pushState(null, "", t),
            Object(n.a)(window, "location-changed", { replace: r });
        };
    },
    41: function(e, t, r) {
      "use strict";
      var n = r(5),
        i = (r(22), r(8)),
        o = r(34),
        a = [60, 60, 24, 7],
        s = ["second", "minute", "hour", "day"];
      var c = r(17);
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t) {
        return !t || ("object" !== l(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var h = Object(c.a)(function(e) {
        return (function(t) {
          function r() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              d(this, f(r).apply(this, arguments))
            );
          }
          var n, i, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && p(e, t);
            })(r, e),
            (n = r),
            (o = [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: Object,
                    localize: {
                      type: Function,
                      computed: "__computeLocalize(hass.localize)"
                    }
                  };
                }
              }
            ]),
            (i = [
              {
                key: "__computeLocalize",
                value: function(e) {
                  return e;
                }
              }
            ]) && u(n.prototype, i),
            o && u(n, o),
            r
          );
        })();
      });
      function m(e) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e, t, r) {
        return (v =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = b(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function w(e, t, r) {
        return t && g(e.prototype, t), r && g(e, r), e;
      }
      function k(e, t) {
        return (k =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var E = (function(e) {
        function t() {
          var e, r, n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((e =
              !(n = b(t).call(this)) ||
              ("object" !== m(n) && "function" != typeof n)
                ? y(r)
                : n).updateRelative = e.updateRelative.bind(y(e))),
            e
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && k(e, t);
          })(t, h(o["a"])),
          w(t, null, [
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  datetime: {
                    type: String,
                    observer: "datetimeChanged"
                  },
                  datetimeObj: {
                    type: Object,
                    observer: "datetimeObjChanged"
                  },
                  parsedDateTime: Object
                };
              }
            }
          ]),
          w(t, [
            {
              key: "connectedCallback",
              value: function() {
                v(b(t.prototype), "connectedCallback", this).call(this),
                  (this.updateInterval = setInterval(this.updateRelative, 6e4));
              }
            },
            {
              key: "disconnectedCallback",
              value: function() {
                v(b(t.prototype), "disconnectedCallback", this).call(this),
                  clearInterval(this.updateInterval);
              }
            },
            {
              key: "datetimeChanged",
              value: function(e) {
                (this.parsedDateTime = e ? new Date(e) : null),
                  this.updateRelative();
              }
            },
            {
              key: "datetimeObjChanged",
              value: function(e) {
                (this.parsedDateTime = e), this.updateRelative();
              }
            },
            {
              key: "updateRelative",
              value: function() {
                var e = Object(i.a)(this);
                this.parsedDateTime
                  ? (e.innerHTML = (function(e, t) {
                      var r,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        i =
                          ((n.compareTime || new Date()).getTime() -
                            e.getTime()) /
                          1e3,
                        o = i >= 0 ? "past" : "future";
                      i = Math.abs(i);
                      for (var c = 0; c < a.length; c++) {
                        if (i < a[c]) {
                          (i = Math.floor(i)),
                            (r = t(
                              "ui.components.relative_time.duration.".concat(
                                s[c]
                              ),
                              "count",
                              i
                            ));
                          break;
                        }
                        i /= a[c];
                      }
                      return (
                        void 0 === r &&
                          (r = t(
                            "ui.components.relative_time.duration.week",
                            "count",
                            (i = Math.floor(i))
                          )),
                        !1 === n.includeTense
                          ? r
                          : t(
                              "ui.components.relative_time.".concat(o),
                              "time",
                              r
                            )
                      );
                    })(this.parsedDateTime, this.localize))
                  : (e.innerHTML = this.localize(
                      "ui.components.relative_time.never"
                    ));
              }
            }
          ]),
          t
        );
      })();
      function O(e) {
        return (O =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function P() {
        var e = D([
          "\n      iron-icon {\n        margin-right: 24px;\n        margin-left: 8px;\n        margin-top: 12px;\n        float: left;\n        color: var(--secondary-text-color);\n      }\n      iron-icon.update {\n        color: var(--paper-orange-400);\n      }\n      iron-icon.running,\n      iron-icon.installed {\n        color: var(--paper-green-400);\n      }\n      iron-icon.hassupdate,\n      iron-icon.snapshot {\n        color: var(--paper-item-icon-color);\n      }\n      iron-icon.not_available {\n        color: var(--google-red-500);\n      }\n      .title {\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n      .addition {\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        position: relative;\n        height: 2.4em;\n        line-height: 1.2em;\n      }\n      ha-relative-time {\n        display: block;\n      }\n      .icon_image img {\n        max-height: 40px;\n        max-width: 40px;\n        margin-top: 4px;\n        margin-right: 16px;\n        float: left;\n      }\n      .icon_image.stopped,\n      .icon_image.not_available {\n        filter: grayscale(1);\n      }\n      .dot {\n        position: absolute;\n        background-color: var(--paper-orange-400);\n        width: 12px;\n        height: 12px;\n        top: 8px;\n        right: 8px;\n        border-radius: 50%;\n      }\n      .topbar {\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        top: 0;\n        left: 0;\n        border-top-left-radius: 2px;\n        border-top-right-radius: 2px;\n      }\n      .topbar.installed {\n        background-color: var(--primary-color);\n      }\n      .topbar.update {\n        background-color: var(--accent-color);\n      }\n      .topbar.unavailable {\n        background-color: var(--error-color);\n      }\n    "
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = D([
          "\n                <ha-relative-time\n                  .hass=",
          '\n                  class="addition"\n                  .datetime=',
          "\n                ></ha-relative-time>\n              "
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = D([
          "\n            <iron-icon\n              class=",
          "\n              .icon=",
          "\n              .title=",
          "\n            ></iron-icon>\n          "
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = D([
          '\n            <div class="icon_image ',
          '">\n              <img src="',
          '" title="',
          '" />\n              <div></div>\n            </div>\n          '
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = D([
          '\n            <div class="topbar ',
          '"></div>\n          '
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = D([
          "\n      ",
          "\n      ",
          '\n      <div>\n        <div class="title">\n          ',
          '\n        </div>\n        <div class="addition">\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function D(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function T(e) {
        return (T = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function A(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function z(e, t) {
        return (z =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function R(e) {
        var t,
          r = U(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function I(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function F(e) {
        return e.decorators && e.decorators.length;
      }
      function L(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function N(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function U(e) {
        var t = (function(e, t) {
          if ("object" !== O(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== O(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === O(t) ? t : String(t);
      }
      customElements.define("ha-relative-time", E);
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!F(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = U(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = N(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = N(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (L(o.descriptor) || L(i.descriptor)) {
                    if (F(o) || F(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (F(o)) {
                      if (F(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    I(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(R)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-card-content")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = T(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== O(o) && "function" != typeof o)
                      ? A(i)
                      : o),
                  e(A(r)),
                  r
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && z(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "title",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "description",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "available",
                value: function() {
                  return !0;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "showTopbar",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "topbarClass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "datetime",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconTitle",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconClass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "icon",
                value: function() {
                  return "hass:help-circle";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconImage",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    C(),
                    this.showTopbar ? Object(n.e)(S(), this.topbarClass) : "",
                    this.iconImage
                      ? Object(n.e)(
                          _(),
                          this.iconClass,
                          this.iconImage,
                          this.iconTitle
                        )
                      : Object(n.e)(
                          x(),
                          this.iconClass,
                          this.icon,
                          this.iconTitle
                        ),
                    this.title,
                    this.description,
                    !1 === this.available ? " (Not available)" : "",
                    this.datetime
                      ? Object(n.e)(j(), this.hass, this.datetime)
                      : void 0
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(P());
                }
              }
            ]
          };
        },
        n.a
      );
    },
    46: function(e, t) {},
    49: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      var n = function(e) {
        return e.data;
      };
    },
    50: function(e, t, r) {
      "use strict";
      var n = r(5),
        i = (r(115), r(11));
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <ha-progress-button\n        .progress="',
          '"\n        @click="',
          '"\n        ?disabled="',
          '"\n        ><slot></slot\n      ></ha-progress-button>\n    '
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        return !t || ("object" !== o(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t, r) {
        return t && u(e.prototype, t), r && u(e, r), e;
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = c(this, l(t).call(this))).method = "POST"),
            (e.data = {}),
            (e.disabled = !1),
            (e.progress = !1),
            e
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && f(e, t);
          })(t, n["a"]),
          d(t, [
            {
              key: "render",
              value: function() {
                return Object(n.e)(
                  s(),
                  this.progress,
                  this._buttonTapped,
                  this.disabled
                );
              }
            }
          ]),
          d(
            t,
            [
              {
                key: "_buttonTapped",
                value: (function() {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.progress = !0),
                                    (t = {
                                      method: this.method,
                                      path: this.path,
                                      data: this.data
                                    }),
                                    (e.prev = 2),
                                    (e.next = 5),
                                    this.hass.callApi(
                                      this.method,
                                      this.path,
                                      this.data
                                    )
                                  );
                                case 5:
                                  (r = e.sent),
                                    (this.progress = !1),
                                    this.progressButton.actionSuccess(),
                                    (t.success = !0),
                                    (t.response = r),
                                    (e.next = 18);
                                  break;
                                case 12:
                                  (e.prev = 12),
                                    (e.t0 = e.catch(2)),
                                    (this.progress = !1),
                                    this.progressButton.actionError(),
                                    (t.success = !1),
                                    (t.response = e.t0);
                                case 18:
                                  Object(i.a)(this, "hass-api-called", t);
                                case 19:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[2, 12]]
                        );
                      })),
                      function() {
                        var t = this,
                          r = arguments;
                        return new Promise(function(n, i) {
                          var o = e.apply(t, r);
                          function s(e) {
                            a(o, n, i, s, c, "next", e);
                          }
                          function c(e) {
                            a(o, n, i, s, c, "throw", e);
                          }
                          s(void 0);
                        });
                      });
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()
              },
              {
                key: "progressButton",
                get: function() {
                  return this.renderRoot.querySelector("ha-progress-button");
                }
              }
            ],
            [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: {},
                    progress: Boolean,
                    path: String,
                    method: String,
                    data: {},
                    disabled: Boolean
                  };
                }
              }
            ]
          ),
          t
        );
      })();
      customElements.define("ha-call-api-button", p);
    },
    64: function(e, t, r) {
      "use strict";
      r.d(t, "b", function() {
        return a;
      }),
        r.d(t, "c", function() {
          return s;
        }),
        r.d(t, "d", function() {
          return c;
        }),
        r.d(t, "a", function() {
          return l;
        }),
        r.d(t, "e", function() {
          return u;
        });
      var n = r(49);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/core/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/supervisor/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi("GET", "hassio/supervisor/logs")
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              var r;
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/ingress/session")
                      );
                    case 2:
                      (r = e.sent),
                        (document.cookie = "ingress_session=".concat(
                          r.data.session,
                          ";path=/api/hassio_ingress/"
                        ));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function() {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/supervisor/options", r)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })();
    },
    85: function(e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      r.d(t, "a", function() {
        return i;
      });
      var i = function(e, t, r) {
        var i = n(e.split(".", 2), 2),
          o = i[0],
          a = i[1];
        return Number(o) > t || (Number(o) === t && Number(a) >= r);
      };
    },
    92: function(e, t, r) {
      "use strict";
      r(24);
      var n = r(5),
        i = r(11),
        o = r(180),
        a = function(e) {
          return e.sendMessagePromise({ type: "persistent_notification/get" });
        },
        s = function(e, t) {
          return e.subscribeEvents(function() {
            return a(e).then(function(e) {
              return t.setState(e, !0);
            });
          }, "persistent_notifications_updated");
        };
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function l() {
        var e = f([
          "\n      :host {\n        position: relative;\n      }\n      .dot {\n        pointer-events: none;\n        position: absolute;\n        background-color: var(--accent-color);\n        width: 12px;\n        height: 12px;\n        top: 5px;\n        right: 2px;\n        border-radius: 50%;\n        border: 2px solid var(--app-header-background-color);\n      }\n    "
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = f(['\n            <div class="dot"></div>\n          ']);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = f([
          "\n      <paper-icon-button\n        aria-label=",
          "\n        .icon=",
          "\n        @click=",
          "\n      ></paper-icon-button>\n      ",
          "\n    "
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function f(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e) {
        var t,
          r = w(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function y(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function v(e) {
        return e.decorators && e.decorators.length;
      }
      function b(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function g(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function w(e) {
        var t = (function(e, t) {
          if ("object" !== c(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      function k(e, t, r) {
        return (k =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = E(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!v(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = w(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = g(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = g(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (b(o.descriptor) || b(i.descriptor)) {
                    if (v(o) || v(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (v(o)) {
                      if (v(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    y(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(m)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("ha-menu-button")],
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), l = 0;
                l < a;
                l++
              )
                s[l] = arguments[l];
              return (
                (i = this),
                (r =
                  !(o = (t = E(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== c(o) && "function" != typeof o)
                    ? p(i)
                    : o),
                e(p(r)),
                r
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && h(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "hassio",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hasNotifications",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                key: "_alwaysVisible",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                key: "_attachNotifOnConnect",
                value: function() {
                  return !1;
                }
              },
              { kind: "field", key: "_unsubNotifications", value: void 0 },
              {
                kind: "method",
                key: "connectedCallback",
                value: function() {
                  k(E(r.prototype), "connectedCallback", this).call(this),
                    this._attachNotifOnConnect &&
                      ((this._attachNotifOnConnect = !1),
                      this._subscribeNotifications());
                }
              },
              {
                kind: "method",
                key: "disconnectedCallback",
                value: function() {
                  k(E(r.prototype), "disconnectedCallback", this).call(this),
                    this._unsubNotifications &&
                      ((this._attachNotifOnConnect = !0),
                      this._unsubNotifications(),
                      (this._unsubNotifications = void 0));
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e =
                    (this.narrow ||
                      "always_hidden" === this.hass.dockedSidebar) &&
                    (this._hasNotifications ||
                      Object.keys(this.hass.states).some(function(e) {
                        return (
                          "configurator" ===
                          (function(e) {
                            return e.substr(0, e.indexOf("."));
                          })(e)
                        );
                      }));
                  return Object(n.e)(
                    d(),
                    this.hass.localize("ui.sidebar.sidebar_toggle"),
                    this.hassio ? "hassio:menu" : "hass:menu",
                    this._toggleMenu,
                    e ? Object(n.e)(u()) : ""
                  );
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  k(E(r.prototype), "firstUpdated", this).call(this, e),
                    this.hassio &&
                      (this._alwaysVisible =
                        (Number(window.parent.frontendVersion) || 0) <
                        20190710);
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  if (
                    (k(E(r.prototype), "updated", this).call(this, e),
                    e.has("narrow") || e.has("hass"))
                  ) {
                    var t = e.get("hass"),
                      n =
                        e.get("narrow") ||
                        (t && "always_hidden" === t.dockedSidebar),
                      i =
                        this.narrow ||
                        "always_hidden" === this.hass.dockedSidebar;
                    if (n !== i) {
                      if (
                        ((this.style.visibility =
                          i || this._alwaysVisible ? "initial" : "hidden"),
                        !i)
                      )
                        return (
                          (this._hasNotifications = !1),
                          void (
                            this._unsubNotifications &&
                            (this._unsubNotifications(),
                            (this._unsubNotifications = void 0))
                          )
                        );
                      this._subscribeNotifications();
                    }
                  }
                }
              },
              {
                kind: "method",
                key: "_subscribeNotifications",
                value: function() {
                  var e,
                    t,
                    r = this;
                  this._unsubNotifications =
                    ((e = this.hass.connection),
                    (t = function(e) {
                      r._hasNotifications = e.length > 0;
                    }),
                    Object(o.a)("_ntf", a, s, e, t));
                }
              },
              {
                kind: "method",
                key: "_toggleMenu",
                value: function() {
                  Object(i.a)(this, "hass-toggle-menu");
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(l());
                }
              }
            ]
          };
        },
        n.a
      );
    }
  }
]);
//# sourceMappingURL=chunk.7b1a3970d90b4082531e.js.map
