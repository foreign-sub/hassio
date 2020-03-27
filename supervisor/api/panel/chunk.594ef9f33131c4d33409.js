/*! For license information please see chunk.594ef9f33131c4d33409.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [14],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      "use strict";
      var n = i(51),
        r = [
          "kind",
          "resolve",
          "construct",
          "instanceOf",
          "predicate",
          "represent",
          "defaultStyle",
          "styleAliases"
        ],
        s = ["scalar", "sequence", "mapping"];
      t.exports = function(t, e) {
        var i, a;
        if (
          ((e = e || {}),
          Object.keys(e).forEach(function(e) {
            if (-1 === r.indexOf(e))
              throw new n(
                'Unknown option "' +
                  e +
                  '" is met in definition of "' +
                  t +
                  '" YAML type.'
              );
          }),
          (this.tag = t),
          (this.kind = e.kind || null),
          (this.resolve =
            e.resolve ||
            function() {
              return !0;
            }),
          (this.construct =
            e.construct ||
            function(t) {
              return t;
            }),
          (this.instanceOf = e.instanceOf || null),
          (this.predicate = e.predicate || null),
          (this.represent = e.represent || null),
          (this.defaultStyle = e.defaultStyle || null),
          (this.styleAliases =
            ((i = e.styleAliases || null),
            (a = {}),
            null !== i &&
              Object.keys(i).forEach(function(t) {
                i[t].forEach(function(e) {
                  a[String(e)] = t;
                });
              }),
            a)),
          -1 === s.indexOf(this.kind))
        )
          throw new n(
            'Unknown kind "' +
              this.kind +
              '" is specified for "' +
              t +
              '" YAML type.'
          );
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t) {
        return null == t;
      }
      (t.exports.isNothing = r),
        (t.exports.isObject = function(t) {
          return "object" === n(t) && null !== t;
        }),
        (t.exports.toArray = function(t) {
          return Array.isArray(t) ? t : r(t) ? [] : [t];
        }),
        (t.exports.repeat = function(t, e) {
          var i,
            n = "";
          for (i = 0; i < e; i += 1) n += t;
          return n;
        }),
        (t.exports.isNegativeZero = function(t) {
          return 0 === t && Number.NEGATIVE_INFINITY === 1 / t;
        }),
        (t.exports.extend = function(t, e) {
          var i, n, r, s;
          if (e)
            for (i = 0, n = (s = Object.keys(e)).length; i < n; i += 1)
              t[(r = s[i])] = e[r];
          return t;
        });
    },
    function(t, e, i) {
      "use strict";
      var n = i(38),
        r = i(51),
        s = i(14);
      function a(t, e, i) {
        var n = [];
        return (
          t.include.forEach(function(t) {
            i = a(t, e, i);
          }),
          t[e].forEach(function(t) {
            i.forEach(function(e, i) {
              e.tag === t.tag && e.kind === t.kind && n.push(i);
            }),
              i.push(t);
          }),
          i.filter(function(t, e) {
            return -1 === n.indexOf(e);
          })
        );
      }
      function o(t) {
        (this.include = t.include || []),
          (this.implicit = t.implicit || []),
          (this.explicit = t.explicit || []),
          this.implicit.forEach(function(t) {
            if (t.loadKind && "scalar" !== t.loadKind)
              throw new r(
                "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
              );
          }),
          (this.compiledImplicit = a(this, "implicit", [])),
          (this.compiledExplicit = a(this, "explicit", [])),
          (this.compiledTypeMap = (function() {
            var t,
              e,
              i = { scalar: {}, sequence: {}, mapping: {}, fallback: {} };
            function n(t) {
              i[t.kind][t.tag] = i.fallback[t.tag] = t;
            }
            for (t = 0, e = arguments.length; t < e; t += 1)
              arguments[t].forEach(n);
            return i;
          })(this.compiledImplicit, this.compiledExplicit));
      }
      (o.DEFAULT = null),
        (o.create = function() {
          var t, e;
          switch (arguments.length) {
            case 1:
              (t = o.DEFAULT), (e = arguments[0]);
              break;
            case 2:
              (t = arguments[0]), (e = arguments[1]);
              break;
            default:
              throw new r(
                "Wrong number of arguments for Schema.create function"
              );
          }
          if (
            ((t = n.toArray(t)),
            (e = n.toArray(e)),
            !t.every(function(t) {
              return t instanceof o;
            }))
          )
            throw new r(
              "Specified list of super schemas (or a single Schema object) contains a non-Schema object."
            );
          if (
            !e.every(function(t) {
              return t instanceof s;
            })
          )
            throw new r(
              "Specified list of YAML types (or a single Type object) contains a non-Type object."
            );
          return new o({ include: t, explicit: e });
        }),
        (t.exports = o);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      "use strict";
      function n(t, e) {
        Error.call(this),
          (this.name = "YAMLException"),
          (this.reason = t),
          (this.mark = e),
          (this.message =
            (this.reason || "(unknown reason)") +
            (this.mark ? " " + this.mark.toString() : "")),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack || "");
      }
      (n.prototype = Object.create(Error.prototype)),
        (n.prototype.constructor = n),
        (n.prototype.toString = function(t) {
          var e = this.name + ": ";
          return (
            (e += this.reason || "(unknown reason)"),
            !t && this.mark && (e += " " + this.mark.toString()),
            e
          );
        }),
        (t.exports = n);
    },
    function(t, e, i) {
      "use strict";
      var n = i(39);
      t.exports = new n({
        include: [i(122)],
        implicit: [i(151), i(152)],
        explicit: [i(153), i(159), i(160), i(161)]
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      "use strict";
      var n = i(39);
      t.exports = n.DEFAULT = new n({
        include: [i(52)],
        explicit: [i(162), i(163), i(164)]
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      "use strict";
      var n = i(39);
      t.exports = new n({ explicit: [i(144), i(145), i(146)] });
    },
    ,
    ,
    function(t, e) {
      t.exports = function(t, e) {
        var i = 0,
          n = {};
        t.addEventListener("message", function(e) {
          var i = e.data;
          if ("RPC" === i.type)
            if (i.id) {
              var r = n[i.id];
              r &&
                (delete n[i.id],
                i.error
                  ? r[1](Object.assign(Error(i.error.message), i.error))
                  : r[0](i.result));
            } else {
              var s = document.createEvent("Event");
              s.initEvent(i.method, !1, !1),
                (s.data = i.params),
                t.dispatchEvent(s);
            }
        }),
          e.forEach(function(e) {
            t[e] = function() {
              for (var r = [], s = arguments.length; s--; ) r[s] = arguments[s];
              return new Promise(function(s, a) {
                var o = ++i;
                (n[o] = [s, a]),
                  t.postMessage({ type: "RPC", id: o, method: e, params: r });
              });
            };
          });
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      "use strict";
      var n = i(39);
      t.exports = new n({ include: [i(123)] });
    },
    function(t, e, i) {
      "use strict";
      var n = i(39);
      t.exports = new n({
        include: [i(87)],
        implicit: [i(147), i(148), i(149), i(150)]
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e) {
      var i, n, r, s;
      (i = (function() {
        return this;
      })()),
        (r = {}),
        (s = {}),
        (function(t, e) {
          function i() {
            (this._delay = 0),
              (this._endDelay = 0),
              (this._fill = "none"),
              (this._iterationStart = 0),
              (this._iterations = 1),
              (this._duration = 0),
              (this._playbackRate = 1),
              (this._direction = "normal"),
              (this._easing = "linear"),
              (this._easingFunction = p);
          }
          function n() {
            return t.isDeprecated(
              "Invalid timing inputs",
              "2016-03-02",
              "TypeError exceptions will be thrown instead.",
              !0
            );
          }
          function r(e, n, r) {
            var s = new i();
            return (
              n && ((s.fill = "both"), (s.duration = "auto")),
              "number" != typeof e || isNaN(e)
                ? void 0 !== e &&
                  Object.getOwnPropertyNames(e).forEach(function(i) {
                    if ("auto" != e[i]) {
                      if (
                        ("number" == typeof s[i] || "duration" == i) &&
                        ("number" != typeof e[i] || isNaN(e[i]))
                      )
                        return;
                      if ("fill" == i && -1 == c.indexOf(e[i])) return;
                      if ("direction" == i && -1 == l.indexOf(e[i])) return;
                      if (
                        "playbackRate" == i &&
                        1 !== e[i] &&
                        t.isDeprecated(
                          "AnimationEffectTiming.playbackRate",
                          "2014-11-28",
                          "Use Animation.playbackRate instead."
                        )
                      )
                        return;
                      s[i] = e[i];
                    }
                  })
                : (s.duration = e),
              s
            );
          }
          function s(t, e, i, n) {
            return t < 0 || t > 1 || i < 0 || i > 1
              ? p
              : function(r) {
                  function s(t, e, i) {
                    return (
                      3 * t * (1 - i) * (1 - i) * i +
                      3 * e * (1 - i) * i * i +
                      i * i * i
                    );
                  }
                  if (r <= 0) {
                    var a = 0;
                    return (
                      t > 0 ? (a = e / t) : !e && i > 0 && (a = n / i), a * r
                    );
                  }
                  if (r >= 1) {
                    var o = 0;
                    return (
                      i < 1
                        ? (o = (n - 1) / (i - 1))
                        : 1 == i && t < 1 && (o = (e - 1) / (t - 1)),
                      1 + o * (r - 1)
                    );
                  }
                  for (var u = 0, h = 1; u < h; ) {
                    var c = (u + h) / 2,
                      l = s(t, i, c);
                    if (Math.abs(r - l) < 1e-5) return s(e, n, c);
                    l < r ? (u = c) : (h = c);
                  }
                  return s(e, n, c);
                };
          }
          function a(t, e) {
            return function(i) {
              if (i >= 1) return 1;
              var n = 1 / t;
              return (i += e * n) - (i % n);
            };
          }
          function o(t) {
            x || (x = document.createElement("div").style),
              (x.animationTimingFunction = ""),
              (x.animationTimingFunction = t);
            var e = x.animationTimingFunction;
            if ("" == e && n())
              throw new TypeError(t + " is not a valid value for easing");
            return e;
          }
          function u(t) {
            if ("linear" == t) return p;
            var e = v.exec(t);
            if (e) return s.apply(this, e.slice(1).map(Number));
            var i = D.exec(t);
            return i
              ? a(Number(i[1]), { start: f, middle: d, end: m }[i[2]])
              : y[t] || p;
          }
          function h(t, e, i) {
            if (null == e) return E;
            var n = i.delay + t + i.endDelay;
            return e < Math.min(i.delay, n)
              ? A
              : e >= Math.min(i.delay + t, n)
              ? C
              : b;
          }
          var c = "backwards|forwards|both|none".split("|"),
            l = "reverse|alternate|alternate-reverse".split("|"),
            p = function(t) {
              return t;
            };
          i.prototype = {
            _setMember: function(e, i) {
              (this["_" + e] = i),
                this._effect &&
                  ((this._effect._timingInput[e] = i),
                  (this._effect._timing = t.normalizeTimingInput(
                    this._effect._timingInput
                  )),
                  (this._effect.activeDuration = t.calculateActiveDuration(
                    this._effect._timing
                  )),
                  this._effect._animation &&
                    this._effect._animation._rebuildUnderlyingAnimation());
            },
            get playbackRate() {
              return this._playbackRate;
            },
            set delay(t) {
              this._setMember("delay", t);
            },
            get delay() {
              return this._delay;
            },
            set endDelay(t) {
              this._setMember("endDelay", t);
            },
            get endDelay() {
              return this._endDelay;
            },
            set fill(t) {
              this._setMember("fill", t);
            },
            get fill() {
              return this._fill;
            },
            set iterationStart(t) {
              if ((isNaN(t) || t < 0) && n())
                throw new TypeError(
                  "iterationStart must be a non-negative number, received: " +
                    timing.iterationStart
                );
              this._setMember("iterationStart", t);
            },
            get iterationStart() {
              return this._iterationStart;
            },
            set duration(t) {
              if ("auto" != t && (isNaN(t) || t < 0) && n())
                throw new TypeError(
                  "duration must be non-negative or auto, received: " + t
                );
              this._setMember("duration", t);
            },
            get duration() {
              return this._duration;
            },
            set direction(t) {
              this._setMember("direction", t);
            },
            get direction() {
              return this._direction;
            },
            set easing(t) {
              (this._easingFunction = u(o(t))), this._setMember("easing", t);
            },
            get easing() {
              return this._easing;
            },
            set iterations(t) {
              if ((isNaN(t) || t < 0) && n())
                throw new TypeError(
                  "iterations must be non-negative, received: " + t
                );
              this._setMember("iterations", t);
            },
            get iterations() {
              return this._iterations;
            }
          };
          var f = 1,
            d = 0.5,
            m = 0,
            y = {
              ease: s(0.25, 0.1, 0.25, 1),
              "ease-in": s(0.42, 0, 1, 1),
              "ease-out": s(0, 0, 0.58, 1),
              "ease-in-out": s(0.42, 0, 0.58, 1),
              "step-start": a(1, f),
              "step-middle": a(1, d),
              "step-end": a(1, m)
            },
            x = null,
            g = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
            v = new RegExp(
              "cubic-bezier\\(" + g + "," + g + "," + g + "," + g + "\\)"
            ),
            D = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
            E = 0,
            A = 1,
            C = 2,
            b = 3;
          (t.cloneTimingInput = function(t) {
            if ("number" == typeof t) return t;
            var e = {};
            for (var i in t) e[i] = t[i];
            return e;
          }),
            (t.makeTiming = r),
            (t.numericTimingToObject = function(t) {
              return (
                "number" == typeof t &&
                  (t = isNaN(t) ? { duration: 0 } : { duration: t }),
                t
              );
            }),
            (t.normalizeTimingInput = function(e, i) {
              return r((e = t.numericTimingToObject(e)), i);
            }),
            (t.calculateActiveDuration = function(t) {
              return Math.abs(
                (function(t) {
                  return 0 === t.duration || 0 === t.iterations
                    ? 0
                    : t.duration * t.iterations;
                })(t) / t.playbackRate
              );
            }),
            (t.calculateIterationProgress = function(t, e, i) {
              var n = h(t, e, i),
                r = (function(t, e, i, n, r) {
                  switch (n) {
                    case A:
                      return "backwards" == e || "both" == e ? 0 : null;
                    case b:
                      return i - r;
                    case C:
                      return "forwards" == e || "both" == e ? t : null;
                    case E:
                      return null;
                  }
                })(t, i.fill, e, n, i.delay);
              if (null === r) return null;
              var s = (function(t, e, i, n, r) {
                  var s = r;
                  return 0 === t ? e !== A && (s += i) : (s += n / t), s;
                })(i.duration, n, i.iterations, r, i.iterationStart),
                a = (function(t, e, i, n, r, s) {
                  var a = t === 1 / 0 ? e % 1 : t % 1;
                  return (
                    0 !== a ||
                      i !== C ||
                      0 === n ||
                      (0 === r && 0 !== s) ||
                      (a = 1),
                    a
                  );
                })(s, i.iterationStart, n, i.iterations, r, i.duration),
                o = (function(t, e, i, n) {
                  return t === C && e === 1 / 0
                    ? 1 / 0
                    : 1 === i
                    ? Math.floor(n) - 1
                    : Math.floor(n);
                })(n, i.iterations, a, s),
                u = (function(t, e, i) {
                  var n = t;
                  if ("normal" !== t && "reverse" !== t) {
                    var r = e;
                    "alternate-reverse" === t && (r += 1),
                      (n = "normal"),
                      r !== 1 / 0 && r % 2 != 0 && (n = "reverse");
                  }
                  return "normal" === n ? i : 1 - i;
                })(i.direction, o, a);
              return i._easingFunction(u);
            }),
            (t.calculatePhase = h),
            (t.normalizeEasing = o),
            (t.parseEasingFunction = u);
        })((n = {})),
        (function(t, e) {
          function i(t, e) {
            return (t in u && u[t][e]) || e;
          }
          function n(t, e, n) {
            if (
              !(function(t) {
                return (
                  "display" === t ||
                  0 === t.lastIndexOf("animation", 0) ||
                  0 === t.lastIndexOf("transition", 0)
                );
              })(t)
            ) {
              var r = s[t];
              if (r)
                for (var o in ((a.style[t] = e), r)) {
                  var u = r[o],
                    h = a.style[u];
                  n[u] = i(u, h);
                }
              else n[t] = i(t, e);
            }
          }
          function r(t) {
            var e = [];
            for (var i in t)
              if (!(i in ["easing", "offset", "composite"])) {
                var n = t[i];
                Array.isArray(n) || (n = [n]);
                for (var r, s = n.length, a = 0; a < s; a++)
                  ((r = {}).offset =
                    "offset" in t ? t.offset : 1 == s ? 1 : a / (s - 1)),
                    "easing" in t && (r.easing = t.easing),
                    "composite" in t && (r.composite = t.composite),
                    (r[i] = n[a]),
                    e.push(r);
              }
            return (
              e.sort(function(t, e) {
                return t.offset - e.offset;
              }),
              e
            );
          }
          var s = {
              background: [
                "backgroundImage",
                "backgroundPosition",
                "backgroundSize",
                "backgroundRepeat",
                "backgroundAttachment",
                "backgroundOrigin",
                "backgroundClip",
                "backgroundColor"
              ],
              border: [
                "borderTopColor",
                "borderTopStyle",
                "borderTopWidth",
                "borderRightColor",
                "borderRightStyle",
                "borderRightWidth",
                "borderBottomColor",
                "borderBottomStyle",
                "borderBottomWidth",
                "borderLeftColor",
                "borderLeftStyle",
                "borderLeftWidth"
              ],
              borderBottom: [
                "borderBottomWidth",
                "borderBottomStyle",
                "borderBottomColor"
              ],
              borderColor: [
                "borderTopColor",
                "borderRightColor",
                "borderBottomColor",
                "borderLeftColor"
              ],
              borderLeft: [
                "borderLeftWidth",
                "borderLeftStyle",
                "borderLeftColor"
              ],
              borderRadius: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomRightRadius",
                "borderBottomLeftRadius"
              ],
              borderRight: [
                "borderRightWidth",
                "borderRightStyle",
                "borderRightColor"
              ],
              borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
              borderWidth: [
                "borderTopWidth",
                "borderRightWidth",
                "borderBottomWidth",
                "borderLeftWidth"
              ],
              flex: ["flexGrow", "flexShrink", "flexBasis"],
              font: [
                "fontFamily",
                "fontSize",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "lineHeight"
              ],
              margin: [
                "marginTop",
                "marginRight",
                "marginBottom",
                "marginLeft"
              ],
              outline: ["outlineColor", "outlineStyle", "outlineWidth"],
              padding: [
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft"
              ]
            },
            a = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            o = { thin: "1px", medium: "3px", thick: "5px" },
            u = {
              borderBottomWidth: o,
              borderLeftWidth: o,
              borderRightWidth: o,
              borderTopWidth: o,
              fontSize: {
                "xx-small": "60%",
                "x-small": "75%",
                small: "89%",
                medium: "100%",
                large: "120%",
                "x-large": "150%",
                "xx-large": "200%"
              },
              fontWeight: { normal: "400", bold: "700" },
              outlineWidth: o,
              textShadow: { none: "0px 0px 0px transparent" },
              boxShadow: { none: "0px 0px 0px 0px transparent" }
            };
          (t.convertToArrayForm = r),
            (t.normalizeKeyframes = function(e) {
              if (null == e) return [];
              window.Symbol &&
                Symbol.iterator &&
                Array.prototype.from &&
                e[Symbol.iterator] &&
                (e = Array.from(e)),
                Array.isArray(e) || (e = r(e));
              for (
                var i = e.map(function(e) {
                    var i = {};
                    for (var r in e) {
                      var s = e[r];
                      if ("offset" == r) {
                        if (null != s) {
                          if (((s = Number(s)), !isFinite(s)))
                            throw new TypeError(
                              "Keyframe offsets must be numbers."
                            );
                          if (s < 0 || s > 1)
                            throw new TypeError(
                              "Keyframe offsets must be between 0 and 1."
                            );
                        }
                      } else if ("composite" == r) {
                        if ("add" == s || "accumulate" == s)
                          throw {
                            type: DOMException.NOT_SUPPORTED_ERR,
                            name: "NotSupportedError",
                            message: "add compositing is not supported"
                          };
                        if ("replace" != s)
                          throw new TypeError(
                            "Invalid composite mode " + s + "."
                          );
                      } else s = "easing" == r ? t.normalizeEasing(s) : "" + s;
                      n(r, s, i);
                    }
                    return (
                      null == i.offset && (i.offset = null),
                      null == i.easing && (i.easing = "linear"),
                      i
                    );
                  }),
                  s = !0,
                  a = -1 / 0,
                  o = 0;
                o < i.length;
                o++
              ) {
                var u = i[o].offset;
                if (null != u) {
                  if (u < a)
                    throw new TypeError(
                      "Keyframes are not loosely sorted by offset. Sort or specify offsets."
                    );
                  a = u;
                } else s = !1;
              }
              return (
                (i = i.filter(function(t) {
                  return t.offset >= 0 && t.offset <= 1;
                })),
                s ||
                  (function() {
                    var t = i.length;
                    null == i[t - 1].offset && (i[t - 1].offset = 1),
                      t > 1 && null == i[0].offset && (i[0].offset = 0);
                    for (var e = 0, n = i[0].offset, r = 1; r < t; r++) {
                      var s = i[r].offset;
                      if (null != s) {
                        for (var a = 1; a < r - e; a++)
                          i[e + a].offset = n + ((s - n) * a) / (r - e);
                        (e = r), (n = s);
                      }
                    }
                  })(),
                i
              );
            });
        })(n),
        (function(t) {
          var e = {};
          (t.isDeprecated = function(t, i, n, r) {
            var s = r ? "are" : "is",
              a = new Date(),
              o = new Date(i);
            return (
              o.setMonth(o.getMonth() + 3),
              !(
                a < o &&
                (t in e ||
                  console.warn(
                    "Web Animations: " +
                      t +
                      " " +
                      s +
                      " deprecated and will stop working on " +
                      o.toDateString() +
                      ". " +
                      n
                  ),
                (e[t] = !0),
                1)
              )
            );
          }),
            (t.deprecated = function(e, i, n, r) {
              var s = r ? "are" : "is";
              if (t.isDeprecated(e, i, n, r))
                throw new Error(e + " " + s + " no longer supported. " + n);
            });
        })(n),
        (function() {
          if (document.documentElement.animate) {
            var t = document.documentElement.animate([], 0),
              e = !0;
            if (
              (t &&
                ((e = !1),
                "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState"
                  .split("|")
                  .forEach(function(i) {
                    void 0 === t[i] && (e = !0);
                  })),
              !e)
            )
              return;
          }
          !(function(t, e, i) {
            e.convertEffectInput = function(i) {
              var n = (function(t) {
                  for (var e = {}, i = 0; i < t.length; i++)
                    for (var n in t[i])
                      if ("offset" != n && "easing" != n && "composite" != n) {
                        var r = {
                          offset: t[i].offset,
                          easing: t[i].easing,
                          value: t[i][n]
                        };
                        (e[n] = e[n] || []), e[n].push(r);
                      }
                  for (var s in e) {
                    var a = e[s];
                    if (0 != a[0].offset || 1 != a[a.length - 1].offset)
                      throw {
                        type: DOMException.NOT_SUPPORTED_ERR,
                        name: "NotSupportedError",
                        message: "Partial keyframes are not supported"
                      };
                  }
                  return e;
                })(t.normalizeKeyframes(i)),
                r = (function(i) {
                  var n = [];
                  for (var r in i)
                    for (var s = i[r], a = 0; a < s.length - 1; a++) {
                      var o = a,
                        u = a + 1,
                        h = s[o].offset,
                        c = s[u].offset,
                        l = h,
                        p = c;
                      0 == a && ((l = -1 / 0), 0 == c && (u = o)),
                        a == s.length - 2 && ((p = 1 / 0), 1 == h && (o = u)),
                        n.push({
                          applyFrom: l,
                          applyTo: p,
                          startOffset: s[o].offset,
                          endOffset: s[u].offset,
                          easingFunction: t.parseEasingFunction(s[o].easing),
                          property: r,
                          interpolation: e.propertyInterpolation(
                            r,
                            s[o].value,
                            s[u].value
                          )
                        });
                    }
                  return (
                    n.sort(function(t, e) {
                      return t.startOffset - e.startOffset;
                    }),
                    n
                  );
                })(n);
              return function(t, i) {
                if (null != i)
                  r.filter(function(t) {
                    return i >= t.applyFrom && i < t.applyTo;
                  }).forEach(function(n) {
                    var r = i - n.startOffset,
                      s = n.endOffset - n.startOffset,
                      a = 0 == s ? 0 : n.easingFunction(r / s);
                    e.apply(t, n.property, n.interpolation(a));
                  });
                else
                  for (var s in n)
                    "offset" != s &&
                      "easing" != s &&
                      "composite" != s &&
                      e.clear(t, s);
              };
            };
          })(n, r),
            (function(t, e, i) {
              function n(t) {
                return t.replace(/-(.)/g, function(t, e) {
                  return e.toUpperCase();
                });
              }
              function r(t, e, i) {
                (s[i] = s[i] || []), s[i].push([t, e]);
              }
              var s = {};
              e.addPropertiesHandler = function(t, e, i) {
                for (var s = 0; s < i.length; s++) r(t, e, n(i[s]));
              };
              var a = {
                backgroundColor: "transparent",
                backgroundPosition: "0% 0%",
                borderBottomColor: "currentColor",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderBottomWidth: "3px",
                borderLeftColor: "currentColor",
                borderLeftWidth: "3px",
                borderRightColor: "currentColor",
                borderRightWidth: "3px",
                borderSpacing: "2px",
                borderTopColor: "currentColor",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderTopWidth: "3px",
                bottom: "auto",
                clip: "rect(0px, 0px, 0px, 0px)",
                color: "black",
                fontSize: "100%",
                fontWeight: "400",
                height: "auto",
                left: "auto",
                letterSpacing: "normal",
                lineHeight: "120%",
                marginBottom: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                marginTop: "0px",
                maxHeight: "none",
                maxWidth: "none",
                minHeight: "0px",
                minWidth: "0px",
                opacity: "1.0",
                outlineColor: "invert",
                outlineOffset: "0px",
                outlineWidth: "3px",
                paddingBottom: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "0px",
                right: "auto",
                strokeDasharray: "none",
                strokeDashoffset: "0px",
                textIndent: "0px",
                textShadow: "0px 0px 0px transparent",
                top: "auto",
                transform: "",
                verticalAlign: "0px",
                visibility: "visible",
                width: "auto",
                wordSpacing: "normal",
                zIndex: "auto"
              };
              e.propertyInterpolation = function(i, r, o) {
                var u = i;
                /-/.test(i) &&
                  !t.isDeprecated(
                    "Hyphenated property names",
                    "2016-03-22",
                    "Use camelCase instead.",
                    !0
                  ) &&
                  (u = n(i)),
                  ("initial" != r && "initial" != o) ||
                    ("initial" == r && (r = a[u]),
                    "initial" == o && (o = a[u]));
                for (
                  var h = r == o ? [] : s[u], c = 0;
                  h && c < h.length;
                  c++
                ) {
                  var l = h[c][0](r),
                    p = h[c][0](o);
                  if (void 0 !== l && void 0 !== p) {
                    var f = h[c][1](l, p);
                    if (f) {
                      var d = e.Interpolation.apply(null, f);
                      return function(t) {
                        return 0 == t ? r : 1 == t ? o : d(t);
                      };
                    }
                  }
                }
                return e.Interpolation(!1, !0, function(t) {
                  return t ? o : r;
                });
              };
            })(n, r),
            (function(t, e, i) {
              e.KeyframeEffect = function(i, n, r, s) {
                var a,
                  o = (function(e) {
                    var i = t.calculateActiveDuration(e),
                      n = function(n) {
                        return t.calculateIterationProgress(i, n, e);
                      };
                    return (n._totalDuration = e.delay + i + e.endDelay), n;
                  })(t.normalizeTimingInput(r)),
                  u = e.convertEffectInput(n),
                  h = function() {
                    u(i, a);
                  };
                return (
                  (h._update = function(t) {
                    return null !== (a = o(t));
                  }),
                  (h._clear = function() {
                    u(i, null);
                  }),
                  (h._hasSameTarget = function(t) {
                    return i === t;
                  }),
                  (h._target = i),
                  (h._totalDuration = o._totalDuration),
                  (h._id = s),
                  h
                );
              };
            })(n, r),
            (function(t, e) {
              (t.apply = function(e, i, n) {
                e.style[t.propertyName(i)] = n;
              }),
                (t.clear = function(e, i) {
                  e.style[t.propertyName(i)] = "";
                });
            })(r),
            (function(t) {
              window.Element.prototype.animate = function(e, i) {
                var n = "";
                return (
                  i && i.id && (n = i.id),
                  t.timeline._play(t.KeyframeEffect(this, e, i, n))
                );
              };
            })(r),
            (r.Interpolation = function(t, e, i) {
              return function(n) {
                return i(
                  (function t(e, i, n) {
                    if ("number" == typeof e && "number" == typeof i)
                      return e * (1 - n) + i * n;
                    if ("boolean" == typeof e && "boolean" == typeof i)
                      return n < 0.5 ? e : i;
                    if (e.length == i.length) {
                      for (var r = [], s = 0; s < e.length; s++)
                        r.push(t(e[s], i[s], n));
                      return r;
                    }
                    throw "Mismatched interpolation arguments " + e + ":" + i;
                  })(t, e, n)
                );
              };
            }),
            (function(t, e, i) {
              t.sequenceNumber = 0;
              var n = function(t, e, i) {
                (this.target = t),
                  (this.currentTime = e),
                  (this.timelineTime = i),
                  (this.type = "finish"),
                  (this.bubbles = !1),
                  (this.cancelable = !1),
                  (this.currentTarget = t),
                  (this.defaultPrevented = !1),
                  (this.eventPhase = Event.AT_TARGET),
                  (this.timeStamp = Date.now());
              };
              (e.Animation = function(e) {
                (this.id = ""),
                  e && e._id && (this.id = e._id),
                  (this._sequenceNumber = t.sequenceNumber++),
                  (this._currentTime = 0),
                  (this._startTime = null),
                  (this._paused = !1),
                  (this._playbackRate = 1),
                  (this._inTimeline = !0),
                  (this._finishedFlag = !0),
                  (this.onfinish = null),
                  (this._finishHandlers = []),
                  (this._effect = e),
                  (this._inEffect = this._effect._update(0)),
                  (this._idle = !0),
                  (this._currentTimePending = !1);
              }),
                (e.Animation.prototype = {
                  _ensureAlive: function() {
                    this.playbackRate < 0 && 0 === this.currentTime
                      ? (this._inEffect = this._effect._update(-1))
                      : (this._inEffect = this._effect._update(
                          this.currentTime
                        )),
                      this._inTimeline ||
                        (!this._inEffect && this._finishedFlag) ||
                        ((this._inTimeline = !0),
                        e.timeline._animations.push(this));
                  },
                  _tickCurrentTime: function(t, e) {
                    t != this._currentTime &&
                      ((this._currentTime = t),
                      this._isFinished &&
                        !e &&
                        (this._currentTime =
                          this._playbackRate > 0 ? this._totalDuration : 0),
                      this._ensureAlive());
                  },
                  get currentTime() {
                    return this._idle || this._currentTimePending
                      ? null
                      : this._currentTime;
                  },
                  set currentTime(t) {
                    (t = +t),
                      isNaN(t) ||
                        (e.restart(),
                        this._paused ||
                          null == this._startTime ||
                          (this._startTime =
                            this._timeline.currentTime -
                            t / this._playbackRate),
                        (this._currentTimePending = !1),
                        this._currentTime != t &&
                          (this._idle &&
                            ((this._idle = !1), (this._paused = !0)),
                          this._tickCurrentTime(t, !0),
                          e.applyDirtiedAnimation(this)));
                  },
                  get startTime() {
                    return this._startTime;
                  },
                  set startTime(t) {
                    (t = +t),
                      isNaN(t) ||
                        this._paused ||
                        this._idle ||
                        ((this._startTime = t),
                        this._tickCurrentTime(
                          (this._timeline.currentTime - this._startTime) *
                            this.playbackRate
                        ),
                        e.applyDirtiedAnimation(this));
                  },
                  get playbackRate() {
                    return this._playbackRate;
                  },
                  set playbackRate(t) {
                    if (t != this._playbackRate) {
                      var i = this.currentTime;
                      (this._playbackRate = t),
                        (this._startTime = null),
                        "paused" != this.playState &&
                          "idle" != this.playState &&
                          ((this._finishedFlag = !1),
                          (this._idle = !1),
                          this._ensureAlive(),
                          e.applyDirtiedAnimation(this)),
                        null != i && (this.currentTime = i);
                    }
                  },
                  get _isFinished() {
                    return (
                      !this._idle &&
                      ((this._playbackRate > 0 &&
                        this._currentTime >= this._totalDuration) ||
                        (this._playbackRate < 0 && this._currentTime <= 0))
                    );
                  },
                  get _totalDuration() {
                    return this._effect._totalDuration;
                  },
                  get playState() {
                    return this._idle
                      ? "idle"
                      : (null == this._startTime &&
                          !this._paused &&
                          0 != this.playbackRate) ||
                        this._currentTimePending
                      ? "pending"
                      : this._paused
                      ? "paused"
                      : this._isFinished
                      ? "finished"
                      : "running";
                  },
                  _rewind: function() {
                    if (this._playbackRate >= 0) this._currentTime = 0;
                    else {
                      if (!(this._totalDuration < 1 / 0))
                        throw new DOMException(
                          "Unable to rewind negative playback rate animation with infinite duration",
                          "InvalidStateError"
                        );
                      this._currentTime = this._totalDuration;
                    }
                  },
                  play: function() {
                    (this._paused = !1),
                      (this._isFinished || this._idle) &&
                        (this._rewind(), (this._startTime = null)),
                      (this._finishedFlag = !1),
                      (this._idle = !1),
                      this._ensureAlive(),
                      e.applyDirtiedAnimation(this);
                  },
                  pause: function() {
                    this._isFinished || this._paused || this._idle
                      ? this._idle && (this._rewind(), (this._idle = !1))
                      : (this._currentTimePending = !0),
                      (this._startTime = null),
                      (this._paused = !0);
                  },
                  finish: function() {
                    this._idle ||
                      ((this.currentTime =
                        this._playbackRate > 0 ? this._totalDuration : 0),
                      (this._startTime =
                        this._totalDuration - this.currentTime),
                      (this._currentTimePending = !1),
                      e.applyDirtiedAnimation(this));
                  },
                  cancel: function() {
                    this._inEffect &&
                      ((this._inEffect = !1),
                      (this._idle = !0),
                      (this._paused = !1),
                      (this._isFinished = !0),
                      (this._finishedFlag = !0),
                      (this._currentTime = 0),
                      (this._startTime = null),
                      this._effect._update(null),
                      e.applyDirtiedAnimation(this));
                  },
                  reverse: function() {
                    (this.playbackRate *= -1), this.play();
                  },
                  addEventListener: function(t, e) {
                    "function" == typeof e &&
                      "finish" == t &&
                      this._finishHandlers.push(e);
                  },
                  removeEventListener: function(t, e) {
                    if ("finish" == t) {
                      var i = this._finishHandlers.indexOf(e);
                      i >= 0 && this._finishHandlers.splice(i, 1);
                    }
                  },
                  _fireEvents: function(t) {
                    if (this._isFinished) {
                      if (!this._finishedFlag) {
                        var e = new n(this, this._currentTime, t),
                          i = this._finishHandlers.concat(
                            this.onfinish ? [this.onfinish] : []
                          );
                        setTimeout(function() {
                          i.forEach(function(t) {
                            t.call(e.target, e);
                          });
                        }, 0),
                          (this._finishedFlag = !0);
                      }
                    } else this._finishedFlag = !1;
                  },
                  _tick: function(t, e) {
                    this._idle ||
                      this._paused ||
                      (null == this._startTime
                        ? e &&
                          (this.startTime =
                            t - this._currentTime / this.playbackRate)
                        : this._isFinished ||
                          this._tickCurrentTime(
                            (t - this._startTime) * this.playbackRate
                          )),
                      e &&
                        ((this._currentTimePending = !1), this._fireEvents(t));
                  },
                  get _needsTick() {
                    return (
                      this.playState in { pending: 1, running: 1 } ||
                      !this._finishedFlag
                    );
                  },
                  _targetAnimations: function() {
                    var t = this._effect._target;
                    return (
                      t._activeAnimations || (t._activeAnimations = []),
                      t._activeAnimations
                    );
                  },
                  _markTarget: function() {
                    var t = this._targetAnimations();
                    -1 === t.indexOf(this) && t.push(this);
                  },
                  _unmarkTarget: function() {
                    var t = this._targetAnimations(),
                      e = t.indexOf(this);
                    -1 !== e && t.splice(e, 1);
                  }
                });
            })(n, r),
            (function(t, e, i) {
              function n(t) {
                var e = h;
                (h = []),
                  t < m.currentTime && (t = m.currentTime),
                  m._animations.sort(r),
                  (m._animations = o(t, !0, m._animations)[0]),
                  e.forEach(function(e) {
                    e[1](t);
                  }),
                  a();
              }
              function r(t, e) {
                return t._sequenceNumber - e._sequenceNumber;
              }
              function s() {
                (this._animations = []),
                  (this.currentTime =
                    window.performance && performance.now
                      ? performance.now()
                      : 0);
              }
              function a() {
                f.forEach(function(t) {
                  t();
                }),
                  (f.length = 0);
              }
              function o(t, i, n) {
                (d = !0), (p = !1), (e.timeline.currentTime = t), (l = !1);
                var r = [],
                  s = [],
                  a = [],
                  o = [];
                return (
                  n.forEach(function(e) {
                    e._tick(t, i),
                      e._inEffect
                        ? (s.push(e._effect), e._markTarget())
                        : (r.push(e._effect), e._unmarkTarget()),
                      e._needsTick && (l = !0);
                    var n = e._inEffect || e._needsTick;
                    (e._inTimeline = n), n ? a.push(e) : o.push(e);
                  }),
                  f.push.apply(f, r),
                  f.push.apply(f, s),
                  l && requestAnimationFrame(function() {}),
                  (d = !1),
                  [a, o]
                );
              }
              var u = window.requestAnimationFrame,
                h = [],
                c = 0;
              (window.requestAnimationFrame = function(t) {
                var e = c++;
                return 0 == h.length && u(n), h.push([e, t]), e;
              }),
                (window.cancelAnimationFrame = function(t) {
                  h.forEach(function(e) {
                    e[0] == t && (e[1] = function() {});
                  });
                }),
                (s.prototype = {
                  _play: function(i) {
                    i._timing = t.normalizeTimingInput(i.timing);
                    var n = new e.Animation(i);
                    return (
                      (n._idle = !1),
                      (n._timeline = this),
                      this._animations.push(n),
                      e.restart(),
                      e.applyDirtiedAnimation(n),
                      n
                    );
                  }
                });
              var l = !1,
                p = !1;
              (e.restart = function() {
                return (
                  l ||
                    ((l = !0), requestAnimationFrame(function() {}), (p = !0)),
                  p
                );
              }),
                (e.applyDirtiedAnimation = function(t) {
                  if (!d) {
                    t._markTarget();
                    var i = t._targetAnimations();
                    i.sort(r),
                      o(e.timeline.currentTime, !1, i.slice())[1].forEach(
                        function(t) {
                          var e = m._animations.indexOf(t);
                          -1 !== e && m._animations.splice(e, 1);
                        }
                      ),
                      a();
                  }
                });
              var f = [],
                d = !1,
                m = new s();
              e.timeline = m;
            })(n, r),
            (function(t) {
              function e(t, e) {
                var i = t.exec(e);
                if (i)
                  return [
                    (i = t.ignoreCase ? i[0].toLowerCase() : i[0]),
                    e.substr(i.length)
                  ];
              }
              function i(t, e) {
                var i = t((e = e.replace(/^\s*/, "")));
                if (i) return [i[0], i[1].replace(/^\s*/, "")];
              }
              function n(t, e, i, n, r) {
                for (
                  var s = [],
                    a = [],
                    o = [],
                    u = (function(t, e) {
                      for (var i = t, n = e; i && n; )
                        i > n ? (i %= n) : (n %= i);
                      return (t * e) / (i + n);
                    })(n.length, r.length),
                    h = 0;
                  h < u;
                  h++
                ) {
                  var c = e(n[h % n.length], r[h % r.length]);
                  if (!c) return;
                  s.push(c[0]), a.push(c[1]), o.push(c[2]);
                }
                return [
                  s,
                  a,
                  function(e) {
                    var n = e
                      .map(function(t, e) {
                        return o[e](t);
                      })
                      .join(i);
                    return t ? t(n) : n;
                  }
                ];
              }
              (t.consumeToken = e),
                (t.consumeTrimmed = i),
                (t.consumeRepeated = function(t, n, r) {
                  t = i.bind(null, t);
                  for (var s = []; ; ) {
                    var a = t(r);
                    if (!a) return [s, r];
                    if ((s.push(a[0]), !(a = e(n, (r = a[1]))) || "" == a[1]))
                      return [s, r];
                    r = a[1];
                  }
                }),
                (t.consumeParenthesised = function(t, e) {
                  for (
                    var i = 0, n = 0;
                    n < e.length && (!/\s|,/.test(e[n]) || 0 != i);
                    n++
                  )
                    if ("(" == e[n]) i++;
                    else if (")" == e[n] && (0 == --i && n++, i <= 0)) break;
                  var r = t(e.substr(0, n));
                  return null == r ? void 0 : [r, e.substr(n)];
                }),
                (t.ignore = function(t) {
                  return function(e) {
                    var i = t(e);
                    return i && (i[0] = void 0), i;
                  };
                }),
                (t.optional = function(t, e) {
                  return function(i) {
                    return t(i) || [e, i];
                  };
                }),
                (t.consumeList = function(e, i) {
                  for (var n = [], r = 0; r < e.length; r++) {
                    var s = t.consumeTrimmed(e[r], i);
                    if (!s || "" == s[0]) return;
                    void 0 !== s[0] && n.push(s[0]), (i = s[1]);
                  }
                  if ("" == i) return n;
                }),
                (t.mergeNestedRepeated = n.bind(null, null)),
                (t.mergeWrappedNestedRepeated = n),
                (t.mergeList = function(t, e, i) {
                  for (
                    var n = [], r = [], s = [], a = 0, o = 0;
                    o < i.length;
                    o++
                  )
                    if ("function" == typeof i[o]) {
                      var u = i[o](t[a], e[a++]);
                      n.push(u[0]), r.push(u[1]), s.push(u[2]);
                    } else
                      !(function(t) {
                        n.push(!1),
                          r.push(!1),
                          s.push(function() {
                            return i[t];
                          });
                      })(o);
                  return [
                    n,
                    r,
                    function(t) {
                      for (var e = "", i = 0; i < t.length; i++)
                        e += s[i](t[i]);
                      return e;
                    }
                  ];
                });
            })(r),
            (function(t) {
              function e(e) {
                var i = { inset: !1, lengths: [], color: null },
                  n = t.consumeRepeated(
                    function(e) {
                      var n;
                      return (n = t.consumeToken(/^inset/i, e))
                        ? ((i.inset = !0), n)
                        : (n = t.consumeLengthOrPercent(e))
                        ? (i.lengths.push(n[0]), n)
                        : (n = t.consumeColor(e))
                        ? ((i.color = n[0]), n)
                        : void 0;
                    },
                    /^/,
                    e
                  );
                if (n && n[0].length) return [i, n[1]];
              }
              var i = function(e, i, n, r) {
                function s(t) {
                  return {
                    inset: t,
                    color: [0, 0, 0, 0],
                    lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }]
                  };
                }
                for (
                  var a = [], o = [], u = 0;
                  u < n.length || u < r.length;
                  u++
                ) {
                  var h = n[u] || s(r[u].inset),
                    c = r[u] || s(n[u].inset);
                  a.push(h), o.push(c);
                }
                return t.mergeNestedRepeated(e, i, a, o);
              }.bind(
                null,
                function(e, i) {
                  for (
                    ;
                    e.lengths.length <
                    Math.max(e.lengths.length, i.lengths.length);

                  )
                    e.lengths.push({ px: 0 });
                  for (
                    ;
                    i.lengths.length <
                    Math.max(e.lengths.length, i.lengths.length);

                  )
                    i.lengths.push({ px: 0 });
                  if (e.inset == i.inset && !!e.color == !!i.color) {
                    for (
                      var n, r = [], s = [[], 0], a = [[], 0], o = 0;
                      o < e.lengths.length;
                      o++
                    ) {
                      var u = t.mergeDimensions(
                        e.lengths[o],
                        i.lengths[o],
                        2 == o
                      );
                      s[0].push(u[0]), a[0].push(u[1]), r.push(u[2]);
                    }
                    if (e.color && i.color) {
                      var h = t.mergeColors(e.color, i.color);
                      (s[1] = h[0]), (a[1] = h[1]), (n = h[2]);
                    }
                    return [
                      s,
                      a,
                      function(t) {
                        for (
                          var i = e.inset ? "inset " : " ", s = 0;
                          s < r.length;
                          s++
                        )
                          i += r[s](t[0][s]) + " ";
                        return n && (i += n(t[1])), i;
                      }
                    ];
                  }
                },
                ", "
              );
              t.addPropertiesHandler(
                function(i) {
                  var n = t.consumeRepeated(e, /^,/, i);
                  if (n && "" == n[1]) return n[0];
                },
                i,
                ["box-shadow", "text-shadow"]
              );
            })(r),
            (function(t, e) {
              function i(t) {
                return t
                  .toFixed(3)
                  .replace(/0+$/, "")
                  .replace(/\.$/, "");
              }
              function n(t, e, i) {
                return Math.min(e, Math.max(t, i));
              }
              function r(t) {
                if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) return Number(t);
              }
              function s(t, e) {
                return function(r, s) {
                  return [
                    r,
                    s,
                    function(r) {
                      return i(n(t, e, r));
                    }
                  ];
                };
              }
              function a(t) {
                var e = t.trim().split(/\s*[\s,]\s*/);
                if (0 !== e.length) {
                  for (var i = [], n = 0; n < e.length; n++) {
                    var s = r(e[n]);
                    if (void 0 === s) return;
                    i.push(s);
                  }
                  return i;
                }
              }
              (t.clamp = n),
                t.addPropertiesHandler(
                  a,
                  function(t, e) {
                    if (t.length == e.length)
                      return [
                        t,
                        e,
                        function(t) {
                          return t.map(i).join(" ");
                        }
                      ];
                  },
                  ["stroke-dasharray"]
                ),
                t.addPropertiesHandler(r, s(0, 1 / 0), [
                  "border-image-width",
                  "line-height"
                ]),
                t.addPropertiesHandler(r, s(0, 1), [
                  "opacity",
                  "shape-image-threshold"
                ]),
                t.addPropertiesHandler(
                  r,
                  function(t, e) {
                    if (0 != t) return s(0, 1 / 0)(t, e);
                  },
                  ["flex-grow", "flex-shrink"]
                ),
                t.addPropertiesHandler(
                  r,
                  function(t, e) {
                    return [
                      t,
                      e,
                      function(t) {
                        return Math.round(n(1, 1 / 0, t));
                      }
                    ];
                  },
                  ["orphans", "widows"]
                ),
                t.addPropertiesHandler(
                  r,
                  function(t, e) {
                    return [t, e, Math.round];
                  },
                  ["z-index"]
                ),
                (t.parseNumber = r),
                (t.parseNumberList = a),
                (t.mergeNumbers = function(t, e) {
                  return [t, e, i];
                }),
                (t.numberToString = i);
            })(r),
            r.addPropertiesHandler(
              String,
              function(t, e) {
                if ("visible" == t || "visible" == e)
                  return [
                    0,
                    1,
                    function(i) {
                      return i <= 0 ? t : i >= 1 ? e : "visible";
                    }
                  ];
              },
              ["visibility"]
            ),
            (function(t, e) {
              function i(t) {
                (t = t.trim()), (s.fillStyle = "#000"), (s.fillStyle = t);
                var e = s.fillStyle;
                if (
                  ((s.fillStyle = "#fff"), (s.fillStyle = t), e == s.fillStyle)
                ) {
                  s.fillRect(0, 0, 1, 1);
                  var i = s.getImageData(0, 0, 1, 1).data;
                  s.clearRect(0, 0, 1, 1);
                  var n = i[3] / 255;
                  return [i[0] * n, i[1] * n, i[2] * n, n];
                }
              }
              function n(e, i) {
                return [
                  e,
                  i,
                  function(e) {
                    function i(t) {
                      return Math.max(0, Math.min(255, t));
                    }
                    if (e[3])
                      for (var n = 0; n < 3; n++)
                        e[n] = Math.round(i(e[n] / e[3]));
                    return (
                      (e[3] = t.numberToString(t.clamp(0, 1, e[3]))),
                      "rgba(" + e.join(",") + ")"
                    );
                  }
                ];
              }
              var r = document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "canvas"
              );
              r.width = r.height = 1;
              var s = r.getContext("2d");
              t.addPropertiesHandler(i, n, [
                "background-color",
                "border-bottom-color",
                "border-left-color",
                "border-right-color",
                "border-top-color",
                "color",
                "fill",
                "flood-color",
                "lighting-color",
                "outline-color",
                "stop-color",
                "stroke",
                "text-decoration-color"
              ]),
                (t.consumeColor = t.consumeParenthesised.bind(null, i)),
                (t.mergeColors = n);
            })(r),
            (function(t, e) {
              function i(t) {
                function e() {
                  var e = a.exec(t);
                  s = e ? e[0] : void 0;
                }
                function i() {
                  if ("(" !== s)
                    return (function() {
                      var t = Number(s);
                      return e(), t;
                    })();
                  e();
                  var t = r();
                  return ")" !== s ? NaN : (e(), t);
                }
                function n() {
                  for (var t = i(); "*" === s || "/" === s; ) {
                    var n = s;
                    e();
                    var r = i();
                    "*" === n ? (t *= r) : (t /= r);
                  }
                  return t;
                }
                function r() {
                  for (var t = n(); "+" === s || "-" === s; ) {
                    var i = s;
                    e();
                    var r = n();
                    "+" === i ? (t += r) : (t -= r);
                  }
                  return t;
                }
                var s,
                  a = /([\+\-\w\.]+|[\(\)\*\/])/g;
                return e(), r();
              }
              function n(t, e) {
                if ("0" == (e = e.trim().toLowerCase()) && "px".search(t) >= 0)
                  return { px: 0 };
                if (/^[^(]*$|^calc/.test(e)) {
                  e = e.replace(/calc\(/g, "(");
                  var n = {};
                  e = e.replace(t, function(t) {
                    return (n[t] = null), "U" + t;
                  });
                  for (
                    var r = "U(" + t.source + ")",
                      s = e
                        .replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N")
                        .replace(new RegExp("N" + r, "g"), "D")
                        .replace(/\s[+-]\s/g, "O")
                        .replace(/\s/g, ""),
                      a = [
                        /N\*(D)/g,
                        /(N|D)[*\/]N/g,
                        /(N|D)O\1/g,
                        /\((N|D)\)/g
                      ],
                      o = 0;
                    o < a.length;

                  )
                    a[o].test(s) ? ((s = s.replace(a[o], "$1")), (o = 0)) : o++;
                  if ("D" == s) {
                    for (var u in n) {
                      var h = i(
                        e
                          .replace(new RegExp("U" + u, "g"), "")
                          .replace(new RegExp(r, "g"), "*0")
                      );
                      if (!isFinite(h)) return;
                      n[u] = h;
                    }
                    return n;
                  }
                }
              }
              function r(t, e) {
                return s(t, e, !0);
              }
              function s(e, i, n) {
                var r,
                  s = [];
                for (r in e) s.push(r);
                for (r in i) s.indexOf(r) < 0 && s.push(r);
                return (
                  (e = s.map(function(t) {
                    return e[t] || 0;
                  })),
                  (i = s.map(function(t) {
                    return i[t] || 0;
                  })),
                  [
                    e,
                    i,
                    function(e) {
                      var i = e
                        .map(function(i, r) {
                          return (
                            1 == e.length && n && (i = Math.max(i, 0)),
                            t.numberToString(i) + s[r]
                          );
                        })
                        .join(" + ");
                      return e.length > 1 ? "calc(" + i + ")" : i;
                    }
                  ]
                );
              }
              var a = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
                o = n.bind(null, new RegExp(a, "g")),
                u = n.bind(null, new RegExp(a + "|%", "g")),
                h = n.bind(null, /deg|rad|grad|turn/g);
              (t.parseLength = o),
                (t.parseLengthOrPercent = u),
                (t.consumeLengthOrPercent = t.consumeParenthesised.bind(
                  null,
                  u
                )),
                (t.parseAngle = h),
                (t.mergeDimensions = s);
              var c = t.consumeParenthesised.bind(null, o),
                l = t.consumeRepeated.bind(void 0, c, /^/),
                p = t.consumeRepeated.bind(void 0, l, /^,/);
              t.consumeSizePairList = p;
              var f = t.mergeNestedRepeated.bind(void 0, r, " "),
                d = t.mergeNestedRepeated.bind(void 0, f, ",");
              (t.mergeNonNegativeSizePair = f),
                t.addPropertiesHandler(
                  function(t) {
                    var e = p(t);
                    if (e && "" == e[1]) return e[0];
                  },
                  d,
                  ["background-size"]
                ),
                t.addPropertiesHandler(u, r, [
                  "border-bottom-width",
                  "border-image-width",
                  "border-left-width",
                  "border-right-width",
                  "border-top-width",
                  "flex-basis",
                  "font-size",
                  "height",
                  "line-height",
                  "max-height",
                  "max-width",
                  "outline-width",
                  "width"
                ]),
                t.addPropertiesHandler(u, s, [
                  "border-bottom-left-radius",
                  "border-bottom-right-radius",
                  "border-top-left-radius",
                  "border-top-right-radius",
                  "bottom",
                  "left",
                  "letter-spacing",
                  "margin-bottom",
                  "margin-left",
                  "margin-right",
                  "margin-top",
                  "min-height",
                  "min-width",
                  "outline-offset",
                  "padding-bottom",
                  "padding-left",
                  "padding-right",
                  "padding-top",
                  "perspective",
                  "right",
                  "shape-margin",
                  "stroke-dashoffset",
                  "text-indent",
                  "top",
                  "vertical-align",
                  "word-spacing"
                ]);
            })(r),
            (function(t, e) {
              function i(e) {
                return (
                  t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e)
                );
              }
              function n(e) {
                var n = t.consumeList(
                  [
                    t.ignore(t.consumeToken.bind(null, /^rect/)),
                    t.ignore(t.consumeToken.bind(null, /^\(/)),
                    t.consumeRepeated.bind(null, i, /^,/),
                    t.ignore(t.consumeToken.bind(null, /^\)/))
                  ],
                  e
                );
                if (n && 4 == n[0].length) return n[0];
              }
              var r = t.mergeWrappedNestedRepeated.bind(
                null,
                function(t) {
                  return "rect(" + t + ")";
                },
                function(e, i) {
                  return "auto" == e || "auto" == i
                    ? [
                        !0,
                        !1,
                        function(n) {
                          var r = n ? e : i;
                          if ("auto" == r) return "auto";
                          var s = t.mergeDimensions(r, r);
                          return s[2](s[0]);
                        }
                      ]
                    : t.mergeDimensions(e, i);
                },
                ", "
              );
              (t.parseBox = n),
                (t.mergeBoxes = r),
                t.addPropertiesHandler(n, r, ["clip"]);
            })(r),
            (function(t, e) {
              function i(t) {
                return function(e) {
                  var i = 0;
                  return t.map(function(t) {
                    return t === h ? e[i++] : t;
                  });
                };
              }
              function n(t) {
                return t;
              }
              function r(e) {
                if ("none" == (e = e.toLowerCase().trim())) return [];
                for (
                  var i, n = /\s*(\w+)\(([^)]*)\)/g, r = [], s = 0;
                  (i = n.exec(e));

                ) {
                  if (i.index != s) return;
                  s = i.index + i[0].length;
                  var a = i[1],
                    o = p[a];
                  if (!o) return;
                  var u = i[2].split(","),
                    h = o[0];
                  if (h.length < u.length) return;
                  for (var f = [], d = 0; d < h.length; d++) {
                    var m,
                      y = u[d],
                      x = h[d];
                    if (
                      void 0 ===
                      (m = y
                        ? {
                            A: function(e) {
                              return "0" == e.trim() ? l : t.parseAngle(e);
                            },
                            N: t.parseNumber,
                            T: t.parseLengthOrPercent,
                            L: t.parseLength
                          }[x.toUpperCase()](y)
                        : { a: l, n: f[0], t: c }[x])
                    )
                      return;
                    f.push(m);
                  }
                  if ((r.push({ t: a, d: f }), n.lastIndex == e.length))
                    return r;
                }
              }
              function s(t) {
                return t.toFixed(6).replace(".000000", "");
              }
              function a(e, i) {
                if (e.decompositionPair !== i) {
                  e.decompositionPair = i;
                  var n = t.makeMatrixDecomposition(e);
                }
                if (i.decompositionPair !== e) {
                  i.decompositionPair = e;
                  var r = t.makeMatrixDecomposition(i);
                }
                return null == n[0] || null == r[0]
                  ? [
                      [!1],
                      [!0],
                      function(t) {
                        return t ? i[0].d : e[0].d;
                      }
                    ]
                  : (n[0].push(0),
                    r[0].push(1),
                    [
                      n,
                      r,
                      function(e) {
                        var i = t.quat(n[0][3], r[0][3], e[5]);
                        return t
                          .composeMatrix(e[0], e[1], e[2], i, e[4])
                          .map(s)
                          .join(",");
                      }
                    ]);
              }
              function o(t) {
                return t.replace(/[xy]/, "");
              }
              function u(t) {
                return t.replace(/(x|y|z|3d)?$/, "3d");
              }
              var h = null,
                c = { px: 0 },
                l = { deg: 0 },
                p = {
                  matrix: [
                    "NNNNNN",
                    [h, h, 0, 0, h, h, 0, 0, 0, 0, 1, 0, h, h, 0, 1],
                    n
                  ],
                  matrix3d: ["NNNNNNNNNNNNNNNN", n],
                  rotate: ["A"],
                  rotatex: ["A"],
                  rotatey: ["A"],
                  rotatez: ["A"],
                  rotate3d: ["NNNA"],
                  perspective: ["L"],
                  scale: ["Nn", i([h, h, 1]), n],
                  scalex: ["N", i([h, 1, 1]), i([h, 1])],
                  scaley: ["N", i([1, h, 1]), i([1, h])],
                  scalez: ["N", i([1, 1, h])],
                  scale3d: ["NNN", n],
                  skew: ["Aa", null, n],
                  skewx: ["A", null, i([h, l])],
                  skewy: ["A", null, i([l, h])],
                  translate: ["Tt", i([h, h, c]), n],
                  translatex: ["T", i([h, c, c]), i([h, c])],
                  translatey: ["T", i([c, h, c]), i([c, h])],
                  translatez: ["L", i([c, c, h])],
                  translate3d: ["TTL", n]
                };
              t.addPropertiesHandler(
                r,
                function(e, i) {
                  var n = t.makeMatrixDecomposition && !0,
                    r = !1;
                  if (!e.length || !i.length) {
                    e.length || ((r = !0), (e = i), (i = []));
                    for (var s = 0; s < e.length; s++) {
                      var h = e[s].t,
                        c = e[s].d,
                        l = "scale" == h.substr(0, 5) ? 1 : 0;
                      i.push({
                        t: h,
                        d: c.map(function(t) {
                          if ("number" == typeof t) return l;
                          var e = {};
                          for (var i in t) e[i] = l;
                          return e;
                        })
                      });
                    }
                  }
                  var f = function(t, e) {
                      return (
                        ("perspective" == t && "perspective" == e) ||
                        (("matrix" == t || "matrix3d" == t) &&
                          ("matrix" == e || "matrix3d" == e))
                      );
                    },
                    d = [],
                    m = [],
                    y = [];
                  if (e.length != i.length) {
                    if (!n) return;
                    (d = [(C = a(e, i))[0]]),
                      (m = [C[1]]),
                      (y = [["matrix", [C[2]]]]);
                  } else
                    for (s = 0; s < e.length; s++) {
                      var x = e[s].t,
                        g = i[s].t,
                        v = e[s].d,
                        D = i[s].d,
                        E = p[x],
                        A = p[g];
                      if (f(x, g)) {
                        if (!n) return;
                        var C = a([e[s]], [i[s]]);
                        d.push(C[0]), m.push(C[1]), y.push(["matrix", [C[2]]]);
                      } else {
                        if (x == g) h = x;
                        else if (E[2] && A[2] && o(x) == o(g))
                          (h = o(x)), (v = E[2](v)), (D = A[2](D));
                        else {
                          if (!E[1] || !A[1] || u(x) != u(g)) {
                            if (!n) return;
                            (d = [(C = a(e, i))[0]]),
                              (m = [C[1]]),
                              (y = [["matrix", [C[2]]]]);
                            break;
                          }
                          (h = u(x)), (v = E[1](v)), (D = A[1](D));
                        }
                        for (
                          var b = [], w = [], S = [], F = 0;
                          F < v.length;
                          F++
                        )
                          (C = ("number" == typeof v[F]
                            ? t.mergeNumbers
                            : t.mergeDimensions)(v[F], D[F])),
                            (b[F] = C[0]),
                            (w[F] = C[1]),
                            S.push(C[2]);
                        d.push(b), m.push(w), y.push([h, S]);
                      }
                    }
                  if (r) {
                    var k = d;
                    (d = m), (m = k);
                  }
                  return [
                    d,
                    m,
                    function(t) {
                      return t
                        .map(function(t, e) {
                          var i = t
                            .map(function(t, i) {
                              return y[e][1][i](t);
                            })
                            .join(",");
                          return (
                            "matrix" == y[e][0] &&
                              16 == i.split(",").length &&
                              (y[e][0] = "matrix3d"),
                            y[e][0] + "(" + i + ")"
                          );
                        })
                        .join(" ");
                    }
                  ];
                },
                ["transform"]
              ),
                (t.transformToSvgMatrix = function(e) {
                  var i = t.transformListToMatrix(r(e));
                  return (
                    "matrix(" +
                    s(i[0]) +
                    " " +
                    s(i[1]) +
                    " " +
                    s(i[4]) +
                    " " +
                    s(i[5]) +
                    " " +
                    s(i[12]) +
                    " " +
                    s(i[13]) +
                    ")"
                  );
                });
            })(r),
            (function(t, e) {
              function i(t, e) {
                e.concat([t]).forEach(function(e) {
                  e in document.documentElement.style && (n[t] = e), (r[e] = t);
                });
              }
              var n = {},
                r = {};
              i("transform", ["webkitTransform", "msTransform"]),
                i("transformOrigin", ["webkitTransformOrigin"]),
                i("perspective", ["webkitPerspective"]),
                i("perspectiveOrigin", ["webkitPerspectiveOrigin"]),
                (t.propertyName = function(t) {
                  return n[t] || t;
                }),
                (t.unprefixedPropertyName = function(t) {
                  return r[t] || t;
                });
            })(r);
        })(),
        (function() {
          if (void 0 === document.createElement("div").animate([]).oncancel) {
            if (window.performance && performance.now)
              var t = function() {
                return performance.now();
              };
            else
              t = function() {
                return Date.now();
              };
            var e = function(t, e, i) {
                (this.target = t),
                  (this.currentTime = e),
                  (this.timelineTime = i),
                  (this.type = "cancel"),
                  (this.bubbles = !1),
                  (this.cancelable = !1),
                  (this.currentTarget = t),
                  (this.defaultPrevented = !1),
                  (this.eventPhase = Event.AT_TARGET),
                  (this.timeStamp = Date.now());
              },
              i = window.Element.prototype.animate;
            window.Element.prototype.animate = function(n, r) {
              var s = i.call(this, n, r);
              (s._cancelHandlers = []), (s.oncancel = null);
              var a = s.cancel;
              s.cancel = function() {
                a.call(this);
                var i = new e(this, null, t()),
                  n = this._cancelHandlers.concat(
                    this.oncancel ? [this.oncancel] : []
                  );
                setTimeout(function() {
                  n.forEach(function(t) {
                    t.call(i.target, i);
                  });
                }, 0);
              };
              var o = s.addEventListener;
              s.addEventListener = function(t, e) {
                "function" == typeof e && "cancel" == t
                  ? this._cancelHandlers.push(e)
                  : o.call(this, t, e);
              };
              var u = s.removeEventListener;
              return (
                (s.removeEventListener = function(t, e) {
                  if ("cancel" == t) {
                    var i = this._cancelHandlers.indexOf(e);
                    i >= 0 && this._cancelHandlers.splice(i, 1);
                  } else u.call(this, t, e);
                }),
                s
              );
            };
          }
        })(),
        (function(t) {
          var e = document.documentElement,
            i = null,
            n = !1;
          try {
            var r =
              "0" == getComputedStyle(e).getPropertyValue("opacity")
                ? "1"
                : "0";
            ((i = e.animate(
              { opacity: [r, r] },
              {
                duration: 1
              }
            )).currentTime = 0),
              (n = getComputedStyle(e).getPropertyValue("opacity") == r);
          } catch (t) {
          } finally {
            i && i.cancel();
          }
          if (!n) {
            var s = window.Element.prototype.animate;
            window.Element.prototype.animate = function(e, i) {
              return (
                window.Symbol &&
                  Symbol.iterator &&
                  Array.prototype.from &&
                  e[Symbol.iterator] &&
                  (e = Array.from(e)),
                Array.isArray(e) || null === e || (e = t.convertToArrayForm(e)),
                s.call(this, e, i)
              );
            };
          }
        })(n),
        (function(t, e, i) {
          function n(t) {
            var i = e.timeline;
            (i.currentTime = t),
              i._discardAnimations(),
              0 == i._animations.length ? (s = !1) : requestAnimationFrame(n);
          }
          var r = window.requestAnimationFrame;
          (window.requestAnimationFrame = function(t) {
            return r(function(i) {
              e.timeline._updateAnimationsPromises(),
                t(i),
                e.timeline._updateAnimationsPromises();
            });
          }),
            (e.AnimationTimeline = function() {
              (this._animations = []), (this.currentTime = void 0);
            }),
            (e.AnimationTimeline.prototype = {
              getAnimations: function() {
                return this._discardAnimations(), this._animations.slice();
              },
              _updateAnimationsPromises: function() {
                e.animationsWithPromises = e.animationsWithPromises.filter(
                  function(t) {
                    return t._updatePromises();
                  }
                );
              },
              _discardAnimations: function() {
                this._updateAnimationsPromises(),
                  (this._animations = this._animations.filter(function(t) {
                    return "finished" != t.playState && "idle" != t.playState;
                  }));
              },
              _play: function(t) {
                var i = new e.Animation(t, this);
                return (
                  this._animations.push(i),
                  e.restartWebAnimationsNextTick(),
                  i._updatePromises(),
                  i._animation.play(),
                  i._updatePromises(),
                  i
                );
              },
              play: function(t) {
                return t && t.remove(), this._play(t);
              }
            });
          var s = !1;
          e.restartWebAnimationsNextTick = function() {
            s || ((s = !0), requestAnimationFrame(n));
          };
          var a = new e.AnimationTimeline();
          e.timeline = a;
          try {
            Object.defineProperty(window.document, "timeline", {
              configurable: !0,
              get: function() {
                return a;
              }
            });
          } catch (t) {}
          try {
            window.document.timeline = a;
          } catch (t) {}
        })(0, s),
        (function(t, e, i) {
          (e.animationsWithPromises = []),
            (e.Animation = function(e, i) {
              if (
                ((this.id = ""),
                e && e._id && (this.id = e._id),
                (this.effect = e),
                e && (e._animation = this),
                !i)
              )
                throw new Error(
                  "Animation with null timeline is not supported"
                );
              (this._timeline = i),
                (this._sequenceNumber = t.sequenceNumber++),
                (this._holdTime = 0),
                (this._paused = !1),
                (this._isGroup = !1),
                (this._animation = null),
                (this._childAnimations = []),
                (this._callback = null),
                (this._oldPlayState = "idle"),
                this._rebuildUnderlyingAnimation(),
                this._animation.cancel(),
                this._updatePromises();
            }),
            (e.Animation.prototype = {
              _updatePromises: function() {
                var t = this._oldPlayState,
                  e = this.playState;
                return (
                  this._readyPromise &&
                    e !== t &&
                    ("idle" == e
                      ? (this._rejectReadyPromise(),
                        (this._readyPromise = void 0))
                      : "pending" == t
                      ? this._resolveReadyPromise()
                      : "pending" == e && (this._readyPromise = void 0)),
                  this._finishedPromise &&
                    e !== t &&
                    ("idle" == e
                      ? (this._rejectFinishedPromise(),
                        (this._finishedPromise = void 0))
                      : "finished" == e
                      ? this._resolveFinishedPromise()
                      : "finished" == t && (this._finishedPromise = void 0)),
                  (this._oldPlayState = this.playState),
                  this._readyPromise || this._finishedPromise
                );
              },
              _rebuildUnderlyingAnimation: function() {
                this._updatePromises();
                var t,
                  i,
                  n,
                  r,
                  s = !!this._animation;
                s &&
                  ((t = this.playbackRate),
                  (i = this._paused),
                  (n = this.startTime),
                  (r = this.currentTime),
                  this._animation.cancel(),
                  (this._animation._wrapper = null),
                  (this._animation = null)),
                  (!this.effect ||
                    this.effect instanceof window.KeyframeEffect) &&
                    ((this._animation = e.newUnderlyingAnimationForKeyframeEffect(
                      this.effect
                    )),
                    e.bindAnimationForKeyframeEffect(this)),
                  (this.effect instanceof window.SequenceEffect ||
                    this.effect instanceof window.GroupEffect) &&
                    ((this._animation = e.newUnderlyingAnimationForGroup(
                      this.effect
                    )),
                    e.bindAnimationForGroup(this)),
                  this.effect &&
                    this.effect._onsample &&
                    e.bindAnimationForCustomEffect(this),
                  s &&
                    (1 != t && (this.playbackRate = t),
                    null !== n
                      ? (this.startTime = n)
                      : null !== r
                      ? (this.currentTime = r)
                      : null !== this._holdTime &&
                        (this.currentTime = this._holdTime),
                    i && this.pause()),
                  this._updatePromises();
              },
              _updateChildren: function() {
                if (this.effect && "idle" != this.playState) {
                  var t = this.effect._timing.delay;
                  this._childAnimations.forEach(
                    function(i) {
                      this._arrangeChildren(i, t),
                        this.effect instanceof window.SequenceEffect &&
                          (t += e.groupChildDuration(i.effect));
                    }.bind(this)
                  );
                }
              },
              _setExternalAnimation: function(t) {
                if (this.effect && this._isGroup)
                  for (var e = 0; e < this.effect.children.length; e++)
                    (this.effect.children[e]._animation = t),
                      this._childAnimations[e]._setExternalAnimation(t);
              },
              _constructChildAnimations: function() {
                if (this.effect && this._isGroup) {
                  var t = this.effect._timing.delay;
                  this._removeChildAnimations(),
                    this.effect.children.forEach(
                      function(i) {
                        var n = e.timeline._play(i);
                        this._childAnimations.push(n),
                          (n.playbackRate = this.playbackRate),
                          this._paused && n.pause(),
                          (i._animation = this.effect._animation),
                          this._arrangeChildren(n, t),
                          this.effect instanceof window.SequenceEffect &&
                            (t += e.groupChildDuration(i));
                      }.bind(this)
                    );
                }
              },
              _arrangeChildren: function(t, e) {
                null === this.startTime
                  ? (t.currentTime = this.currentTime - e / this.playbackRate)
                  : t.startTime !== this.startTime + e / this.playbackRate &&
                    (t.startTime = this.startTime + e / this.playbackRate);
              },
              get timeline() {
                return this._timeline;
              },
              get playState() {
                return this._animation ? this._animation.playState : "idle";
              },
              get finished() {
                return window.Promise
                  ? (this._finishedPromise ||
                      (-1 == e.animationsWithPromises.indexOf(this) &&
                        e.animationsWithPromises.push(this),
                      (this._finishedPromise = new Promise(
                        function(t, e) {
                          (this._resolveFinishedPromise = function() {
                            t(this);
                          }),
                            (this._rejectFinishedPromise = function() {
                              e({
                                type: DOMException.ABORT_ERR,
                                name: "AbortError"
                              });
                            });
                        }.bind(this)
                      )),
                      "finished" == this.playState &&
                        this._resolveFinishedPromise()),
                    this._finishedPromise)
                  : (console.warn(
                      "Animation Promises require JavaScript Promise constructor"
                    ),
                    null);
              },
              get ready() {
                return window.Promise
                  ? (this._readyPromise ||
                      (-1 == e.animationsWithPromises.indexOf(this) &&
                        e.animationsWithPromises.push(this),
                      (this._readyPromise = new Promise(
                        function(t, e) {
                          (this._resolveReadyPromise = function() {
                            t(this);
                          }),
                            (this._rejectReadyPromise = function() {
                              e({
                                type: DOMException.ABORT_ERR,
                                name: "AbortError"
                              });
                            });
                        }.bind(this)
                      )),
                      "pending" !== this.playState &&
                        this._resolveReadyPromise()),
                    this._readyPromise)
                  : (console.warn(
                      "Animation Promises require JavaScript Promise constructor"
                    ),
                    null);
              },
              get onfinish() {
                return this._animation.onfinish;
              },
              set onfinish(t) {
                this._animation.onfinish =
                  "function" == typeof t
                    ? function(e) {
                        (e.target = this), t.call(this, e);
                      }.bind(this)
                    : t;
              },
              get oncancel() {
                return this._animation.oncancel;
              },
              set oncancel(t) {
                this._animation.oncancel =
                  "function" == typeof t
                    ? function(e) {
                        (e.target = this), t.call(this, e);
                      }.bind(this)
                    : t;
              },
              get currentTime() {
                this._updatePromises();
                var t = this._animation.currentTime;
                return this._updatePromises(), t;
              },
              set currentTime(t) {
                this._updatePromises(),
                  (this._animation.currentTime = isFinite(t)
                    ? t
                    : Math.sign(t) * Number.MAX_VALUE),
                  this._register(),
                  this._forEachChild(function(e, i) {
                    e.currentTime = t - i;
                  }),
                  this._updatePromises();
              },
              get startTime() {
                return this._animation.startTime;
              },
              set startTime(t) {
                this._updatePromises(),
                  (this._animation.startTime = isFinite(t)
                    ? t
                    : Math.sign(t) * Number.MAX_VALUE),
                  this._register(),
                  this._forEachChild(function(e, i) {
                    e.startTime = t + i;
                  }),
                  this._updatePromises();
              },
              get playbackRate() {
                return this._animation.playbackRate;
              },
              set playbackRate(t) {
                this._updatePromises();
                var e = this.currentTime;
                (this._animation.playbackRate = t),
                  this._forEachChild(function(e) {
                    e.playbackRate = t;
                  }),
                  null !== e && (this.currentTime = e),
                  this._updatePromises();
              },
              play: function() {
                this._updatePromises(),
                  (this._paused = !1),
                  this._animation.play(),
                  -1 == this._timeline._animations.indexOf(this) &&
                    this._timeline._animations.push(this),
                  this._register(),
                  e.awaitStartTime(this),
                  this._forEachChild(function(t) {
                    var e = t.currentTime;
                    t.play(), (t.currentTime = e);
                  }),
                  this._updatePromises();
              },
              pause: function() {
                this._updatePromises(),
                  this.currentTime && (this._holdTime = this.currentTime),
                  this._animation.pause(),
                  this._register(),
                  this._forEachChild(function(t) {
                    t.pause();
                  }),
                  (this._paused = !0),
                  this._updatePromises();
              },
              finish: function() {
                this._updatePromises(),
                  this._animation.finish(),
                  this._register(),
                  this._updatePromises();
              },
              cancel: function() {
                this._updatePromises(),
                  this._animation.cancel(),
                  this._register(),
                  this._removeChildAnimations(),
                  this._updatePromises();
              },
              reverse: function() {
                this._updatePromises();
                var t = this.currentTime;
                this._animation.reverse(),
                  this._forEachChild(function(t) {
                    t.reverse();
                  }),
                  null !== t && (this.currentTime = t),
                  this._updatePromises();
              },
              addEventListener: function(t, e) {
                var i = e;
                "function" == typeof e &&
                  ((i = function(t) {
                    (t.target = this), e.call(this, t);
                  }.bind(this)),
                  (e._wrapper = i)),
                  this._animation.addEventListener(t, i);
              },
              removeEventListener: function(t, e) {
                this._animation.removeEventListener(t, (e && e._wrapper) || e);
              },
              _removeChildAnimations: function() {
                for (; this._childAnimations.length; )
                  this._childAnimations.pop().cancel();
              },
              _forEachChild: function(e) {
                var i = 0;
                if (
                  (this.effect.children &&
                    this._childAnimations.length <
                      this.effect.children.length &&
                    this._constructChildAnimations(),
                  this._childAnimations.forEach(
                    function(t) {
                      e.call(this, t, i),
                        this.effect instanceof window.SequenceEffect &&
                          (i += t.effect.activeDuration);
                    }.bind(this)
                  ),
                  "pending" != this.playState)
                ) {
                  var n = this.effect._timing,
                    r = this.currentTime;
                  null !== r &&
                    (r = t.calculateIterationProgress(
                      t.calculateActiveDuration(n),
                      r,
                      n
                    )),
                    (null == r || isNaN(r)) && this._removeChildAnimations();
                }
              }
            }),
            (window.Animation = e.Animation);
        })(n, s),
        (function(t, e, i) {
          function n(e) {
            this._frames = t.normalizeKeyframes(e);
          }
          function r() {
            for (var t = !1; u.length; ) u.shift()._updateChildren(), (t = !0);
            return t;
          }
          var s = function t(e) {
            if (
              ((e._animation = void 0),
              e instanceof window.SequenceEffect ||
                e instanceof window.GroupEffect)
            )
              for (var i = 0; i < e.children.length; i++) t(e.children[i]);
          };
          (e.removeMulti = function(t) {
            for (var e = [], i = 0; i < t.length; i++) {
              var n = t[i];
              n._parent
                ? (-1 == e.indexOf(n._parent) && e.push(n._parent),
                  n._parent.children.splice(n._parent.children.indexOf(n), 1),
                  (n._parent = null),
                  s(n))
                : n._animation &&
                  n._animation.effect == n &&
                  (n._animation.cancel(),
                  (n._animation.effect = new KeyframeEffect(null, [])),
                  n._animation._callback &&
                    (n._animation._callback._animation = null),
                  n._animation._rebuildUnderlyingAnimation(),
                  s(n));
            }
            for (i = 0; i < e.length; i++) e[i]._rebuild();
          }),
            (e.KeyframeEffect = function(e, i, r, s) {
              return (
                (this.target = e),
                (this._parent = null),
                (r = t.numericTimingToObject(r)),
                (this._timingInput = t.cloneTimingInput(r)),
                (this._timing = t.normalizeTimingInput(r)),
                (this.timing = t.makeTiming(r, !1, this)),
                (this.timing._effect = this),
                "function" == typeof i
                  ? (t.deprecated(
                      "Custom KeyframeEffect",
                      "2015-06-22",
                      "Use KeyframeEffect.onsample instead."
                    ),
                    (this._normalizedKeyframes = i))
                  : (this._normalizedKeyframes = new n(i)),
                (this._keyframes = i),
                (this.activeDuration = t.calculateActiveDuration(this._timing)),
                (this._id = s),
                this
              );
            }),
            (e.KeyframeEffect.prototype = {
              getFrames: function() {
                return "function" == typeof this._normalizedKeyframes
                  ? this._normalizedKeyframes
                  : this._normalizedKeyframes._frames;
              },
              set onsample(t) {
                if ("function" == typeof this.getFrames())
                  throw new Error(
                    "Setting onsample on custom effect KeyframeEffect is not supported."
                  );
                (this._onsample = t),
                  this._animation &&
                    this._animation._rebuildUnderlyingAnimation();
              },
              get parent() {
                return this._parent;
              },
              clone: function() {
                if ("function" == typeof this.getFrames())
                  throw new Error("Cloning custom effects is not supported.");
                var e = new KeyframeEffect(
                  this.target,
                  [],
                  t.cloneTimingInput(this._timingInput),
                  this._id
                );
                return (
                  (e._normalizedKeyframes = this._normalizedKeyframes),
                  (e._keyframes = this._keyframes),
                  e
                );
              },
              remove: function() {
                e.removeMulti([this]);
              }
            });
          var a = Element.prototype.animate;
          Element.prototype.animate = function(t, i) {
            var n = "";
            return (
              i && i.id && (n = i.id),
              e.timeline._play(new e.KeyframeEffect(this, t, i, n))
            );
          };
          var o = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          );
          (e.newUnderlyingAnimationForKeyframeEffect = function(t) {
            if (t) {
              var e = t.target || o;
              "function" == typeof (i = t._keyframes) && (i = []),
                ((n = t._timingInput).id = t._id);
            } else {
              e = o;
              var i = [],
                n = 0;
            }
            return a.apply(e, [i, n]);
          }),
            (e.bindAnimationForKeyframeEffect = function(t) {
              t.effect &&
                "function" == typeof t.effect._normalizedKeyframes &&
                e.bindAnimationForCustomEffect(t);
            });
          var u = [];
          e.awaitStartTime = function(t) {
            null === t.startTime &&
              t._isGroup &&
              (0 == u.length && requestAnimationFrame(r), u.push(t));
          };
          var h = window.getComputedStyle;
          Object.defineProperty(window, "getComputedStyle", {
            configurable: !0,
            enumerable: !0,
            value: function() {
              e.timeline._updateAnimationsPromises();
              var t = h.apply(this, arguments);
              return (
                r() && (t = h.apply(this, arguments)),
                e.timeline._updateAnimationsPromises(),
                t
              );
            }
          }),
            (window.KeyframeEffect = e.KeyframeEffect),
            (window.Element.prototype.getAnimations = function() {
              return document.timeline.getAnimations().filter(
                function(t) {
                  return null !== t.effect && t.effect.target == this;
                }.bind(this)
              );
            });
        })(n, s),
        (function(t, e, i) {
          function n(t) {
            t._registered ||
              ((t._registered = !0),
              a.push(t),
              o || ((o = !0), requestAnimationFrame(r)));
          }
          function r(t) {
            var e = a;
            (a = []),
              e.sort(function(t, e) {
                return t._sequenceNumber - e._sequenceNumber;
              }),
              (e = e.filter(function(t) {
                t();
                var e = t._animation ? t._animation.playState : "idle";
                return (
                  "running" != e && "pending" != e && (t._registered = !1),
                  t._registered
                );
              })),
              a.push.apply(a, e),
              a.length ? ((o = !0), requestAnimationFrame(r)) : (o = !1);
          }
          var s =
            (document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            0);
          e.bindAnimationForCustomEffect = function(e) {
            var i,
              r = e.effect.target,
              a = "function" == typeof e.effect.getFrames();
            i = a ? e.effect.getFrames() : e.effect._onsample;
            var o = e.effect.timing,
              u = null;
            o = t.normalizeTimingInput(o);
            var h = function n() {
              var s = n._animation ? n._animation.currentTime : null;
              null !== s &&
                ((s = t.calculateIterationProgress(
                  t.calculateActiveDuration(o),
                  s,
                  o
                )),
                isNaN(s) && (s = null)),
                s !== u &&
                  (a ? i(s, r, e.effect) : i(s, e.effect, e.effect._animation)),
                (u = s);
            };
            (h._animation = e),
              (h._registered = !1),
              (h._sequenceNumber = s++),
              (e._callback = h),
              n(h);
          };
          var a = [],
            o = !1;
          e.Animation.prototype._register = function() {
            this._callback && n(this._callback);
          };
        })(n, s),
        (function(t, e, i) {
          function n(t) {
            return t._timing.delay + t.activeDuration + t._timing.endDelay;
          }
          function r(e, i, n) {
            (this._id = n),
              (this._parent = null),
              (this.children = e || []),
              this._reparent(this.children),
              (i = t.numericTimingToObject(i)),
              (this._timingInput = t.cloneTimingInput(i)),
              (this._timing = t.normalizeTimingInput(i, !0)),
              (this.timing = t.makeTiming(i, !0, this)),
              (this.timing._effect = this),
              "auto" === this._timing.duration &&
                (this._timing.duration = this.activeDuration);
          }
          (window.SequenceEffect = function() {
            r.apply(this, arguments);
          }),
            (window.GroupEffect = function() {
              r.apply(this, arguments);
            }),
            (r.prototype = {
              _isAncestor: function(t) {
                for (var e = this; null !== e; ) {
                  if (e == t) return !0;
                  e = e._parent;
                }
                return !1;
              },
              _rebuild: function() {
                for (var t = this; t; )
                  "auto" === t.timing.duration &&
                    (t._timing.duration = t.activeDuration),
                    (t = t._parent);
                this._animation &&
                  this._animation._rebuildUnderlyingAnimation();
              },
              _reparent: function(t) {
                e.removeMulti(t);
                for (var i = 0; i < t.length; i++) t[i]._parent = this;
              },
              _putChild: function(t, e) {
                for (
                  var i = e
                      ? "Cannot append an ancestor or self"
                      : "Cannot prepend an ancestor or self",
                    n = 0;
                  n < t.length;
                  n++
                )
                  if (this._isAncestor(t[n]))
                    throw {
                      type: DOMException.HIERARCHY_REQUEST_ERR,
                      name: "HierarchyRequestError",
                      message: i
                    };
                for (n = 0; n < t.length; n++)
                  e ? this.children.push(t[n]) : this.children.unshift(t[n]);
                this._reparent(t), this._rebuild();
              },
              append: function() {
                this._putChild(arguments, !0);
              },
              prepend: function() {
                this._putChild(arguments, !1);
              },
              get parent() {
                return this._parent;
              },
              get firstChild() {
                return this.children.length ? this.children[0] : null;
              },
              get lastChild() {
                return this.children.length
                  ? this.children[this.children.length - 1]
                  : null;
              },
              clone: function() {
                for (
                  var e = t.cloneTimingInput(this._timingInput), i = [], n = 0;
                  n < this.children.length;
                  n++
                )
                  i.push(this.children[n].clone());
                return this instanceof GroupEffect
                  ? new GroupEffect(i, e)
                  : new SequenceEffect(i, e);
              },
              remove: function() {
                e.removeMulti([this]);
              }
            }),
            (window.SequenceEffect.prototype = Object.create(r.prototype)),
            Object.defineProperty(
              window.SequenceEffect.prototype,
              "activeDuration",
              {
                get: function() {
                  var t = 0;
                  return (
                    this.children.forEach(function(e) {
                      t += n(e);
                    }),
                    Math.max(t, 0)
                  );
                }
              }
            ),
            (window.GroupEffect.prototype = Object.create(r.prototype)),
            Object.defineProperty(
              window.GroupEffect.prototype,
              "activeDuration",
              {
                get: function() {
                  var t = 0;
                  return (
                    this.children.forEach(function(e) {
                      t = Math.max(t, n(e));
                    }),
                    t
                  );
                }
              }
            ),
            (e.newUnderlyingAnimationForGroup = function(i) {
              var n,
                r = null,
                s = new KeyframeEffect(null, [], i._timing, i._id);
              return (
                (s.onsample = function(e) {
                  var i = n._wrapper;
                  if (i && "pending" != i.playState && i.effect)
                    return null == e
                      ? void i._removeChildAnimations()
                      : 0 == e &&
                        i.playbackRate < 0 &&
                        (r || (r = t.normalizeTimingInput(i.effect.timing)),
                        (e = t.calculateIterationProgress(
                          t.calculateActiveDuration(r),
                          -1,
                          r
                        )),
                        isNaN(e) || null == e)
                      ? (i._forEachChild(function(t) {
                          t.currentTime = -1;
                        }),
                        void i._removeChildAnimations())
                      : void 0;
                }),
                (n = e.timeline._play(s))
              );
            }),
            (e.bindAnimationForGroup = function(t) {
              (t._animation._wrapper = t),
                (t._isGroup = !0),
                e.awaitStartTime(t),
                t._constructChildAnimations(),
                t._setExternalAnimation(t);
            }),
            (e.groupChildDuration = n);
        })(n, s),
        (i.true = {});
    },
    function(t, e, i) {
      "use strict";
      i(4), i(13);
      var n = i(93),
        r = i(7),
        s = i(6);
      function a() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return (
          (a = function() {
            return t;
          }),
          t
        );
      }
      Object(r.a)({
        _template: Object(s.a)(a()),
        is: "paper-listbox",
        behaviors: [n.a],
        hostAttributes: { role: "listbox" }
      });
    },
    function(t, e, i) {
      "use strict";
      i(4), i(12);
      var n = i(25),
        r = i(65),
        s = i(7),
        a = i(8),
        o = i(6);
      function u() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    \x3c!-- the mirror sizes the input/textarea so it grows with typing --\x3e\n    \x3c!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML --\x3e\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    \x3c!-- size the input/textarea with a div, because the textarea has intrinsic size in ff --\x3e\n    <div class="textarea-container fit">\n      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>\n    </div>\n'
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    \x3c!-- the mirror sizes the input/textarea so it grows with typing --\x3e\n    \x3c!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML --\x3e\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    \x3c!-- size the input/textarea with a div, because the textarea has intrinsic size in ff --\x3e\n    <div class="textarea-container fit">\n      <textarea id="textarea" name\\$="[[name]]" aria-label\\$="[[label]]" autocomplete\\$="[[autocomplete]]" autofocus\\$="[[autofocus]]" inputmode\\$="[[inputmode]]" placeholder\\$="[[placeholder]]" readonly\\$="[[readonly]]" required\\$="[[required]]" disabled\\$="[[disabled]]" rows\\$="[[rows]]" minlength\\$="[[minlength]]" maxlength\\$="[[maxlength]]"></textarea>\n    </div>\n'
          ]
        );
        return (
          (u = function() {
            return t;
          }),
          t
        );
      }
      Object(s.a)({
        _template: Object(o.a)(u()),
        is: "iron-autogrow-textarea",
        behaviors: [r.a, n.a],
        properties: {
          value: { observer: "_valueChanged", type: String, notify: !0 },
          bindValue: {
            observer: "_bindValueChanged",
            type: String,
            notify: !0
          },
          rows: { type: Number, value: 1, observer: "_updateCached" },
          maxRows: { type: Number, value: 0, observer: "_updateCached" },
          autocomplete: { type: String, value: "off" },
          autofocus: { type: Boolean, value: !1 },
          inputmode: { type: String },
          placeholder: { type: String },
          readonly: { type: String },
          required: { type: Boolean },
          minlength: { type: Number },
          maxlength: { type: Number },
          label: { type: String }
        },
        listeners: { input: "_onInput" },
        get textarea() {
          return this.$.textarea;
        },
        get selectionStart() {
          return this.$.textarea.selectionStart;
        },
        get selectionEnd() {
          return this.$.textarea.selectionEnd;
        },
        set selectionStart(t) {
          this.$.textarea.selectionStart = t;
        },
        set selectionEnd(t) {
          this.$.textarea.selectionEnd = t;
        },
        attached: function() {
          navigator.userAgent.match(/iP(?:[oa]d|hone)/) &&
            (this.$.textarea.style.marginLeft = "-3px");
        },
        validate: function() {
          var t = this.$.textarea.validity.valid;
          return (
            t &&
              (this.required && "" === this.value
                ? (t = !1)
                : this.hasValidator() &&
                  (t = r.a.validate.call(this, this.value))),
            (this.invalid = !t),
            this.fire("iron-input-validate"),
            t
          );
        },
        _bindValueChanged: function(t) {
          this.value = t;
        },
        _valueChanged: function(t) {
          var e = this.textarea;
          e &&
            (e.value !== t && (e.value = t || 0 === t ? t : ""),
            (this.bindValue = t),
            (this.$.mirror.innerHTML = this._valueForMirror()),
            this.fire("bind-value-changed", { value: this.bindValue }));
        },
        _onInput: function(t) {
          var e = Object(a.a)(t).path;
          this.value = e ? e[0].value : t.target.value;
        },
        _constrain: function(t) {
          var e;
          for (
            t = t || [""],
              e =
                this.maxRows > 0 && t.length > this.maxRows
                  ? t.slice(0, this.maxRows)
                  : t.slice(0);
            this.rows > 0 && e.length < this.rows;

          )
            e.push("");
          return e.join("<br/>") + "&#160;";
        },
        _valueForMirror: function() {
          var t = this.textarea;
          if (t)
            return (
              (this.tokens =
                t && t.value
                  ? t.value
                      .replace(/&/gm, "&amp;")
                      .replace(/"/gm, "&quot;")
                      .replace(/'/gm, "&#39;")
                      .replace(/</gm, "&lt;")
                      .replace(/>/gm, "&gt;")
                      .split("\n")
                  : [""]),
              this._constrain(this.tokens)
            );
        },
        _updateCached: function() {
          this.$.mirror.innerHTML = this._constrain(this.tokens);
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(141);
      t.exports = n;
    },
    function(t, e, i) {
      "use strict";
      var n = i(142),
        r = i(166);
      function s(t) {
        return function() {
          throw new Error(
            "Function " + t + " is deprecated and cannot be used."
          );
        };
      }
      (t.exports.Type = i(14)),
        (t.exports.Schema = i(39)),
        (t.exports.FAILSAFE_SCHEMA = i(87)),
        (t.exports.JSON_SCHEMA = i(123)),
        (t.exports.CORE_SCHEMA = i(122)),
        (t.exports.DEFAULT_SAFE_SCHEMA = i(52)),
        (t.exports.DEFAULT_FULL_SCHEMA = i(68)),
        (t.exports.load = n.load),
        (t.exports.loadAll = n.loadAll),
        (t.exports.safeLoad = n.safeLoad),
        (t.exports.safeLoadAll = n.safeLoadAll),
        (t.exports.dump = r.dump),
        (t.exports.safeDump = r.safeDump),
        (t.exports.YAMLException = i(51)),
        (t.exports.MINIMAL_SCHEMA = i(87)),
        (t.exports.SAFE_SCHEMA = i(52)),
        (t.exports.DEFAULT_SCHEMA = i(68)),
        (t.exports.scan = s("scan")),
        (t.exports.parse = s("parse")),
        (t.exports.compose = s("compose")),
        (t.exports.addConstructor = s("addConstructor"));
    },
    function(t, e, i) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var r = i(38),
        s = i(51),
        a = i(143),
        o = i(52),
        u = i(68),
        h = Object.prototype.hasOwnProperty,
        c = 1,
        l = 2,
        p = 3,
        f = 4,
        d = 1,
        m = 2,
        y = 3,
        x = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        g = /[\x85\u2028\u2029]/,
        v = /[,\[\]\{\}]/,
        D = /^(?:!|!!|![a-z\-]+!)$/i,
        E = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
      function A(t) {
        return Object.prototype.toString.call(t);
      }
      function C(t) {
        return 10 === t || 13 === t;
      }
      function b(t) {
        return 9 === t || 32 === t;
      }
      function w(t) {
        return 9 === t || 32 === t || 10 === t || 13 === t;
      }
      function S(t) {
        return 44 === t || 91 === t || 93 === t || 123 === t || 125 === t;
      }
      function F(t) {
        var e;
        return 48 <= t && t <= 57
          ? t - 48
          : 97 <= (e = 32 | t) && e <= 102
          ? e - 97 + 10
          : -1;
      }
      function k(t) {
        return 48 === t
          ? "\0"
          : 97 === t
          ? ""
          : 98 === t
          ? "\b"
          : 116 === t
          ? "\t"
          : 9 === t
          ? "\t"
          : 110 === t
          ? "\n"
          : 118 === t
          ? "\v"
          : 102 === t
          ? "\f"
          : 114 === t
          ? "\r"
          : 101 === t
          ? ""
          : 32 === t
          ? " "
          : 34 === t
          ? '"'
          : 47 === t
          ? "/"
          : 92 === t
          ? "\\"
          : 78 === t
          ? ""
          : 95 === t
          ? " "
          : 76 === t
          ? "\u2028"
          : 80 === t
          ? "\u2029"
          : "";
      }
      function _(t) {
        return t <= 65535
          ? String.fromCharCode(t)
          : String.fromCharCode(
              55296 + ((t - 65536) >> 10),
              56320 + ((t - 65536) & 1023)
            );
      }
      for (var T = new Array(256), B = new Array(256), N = 0; N < 256; N++)
        (T[N] = k(N) ? 1 : 0), (B[N] = k(N));
      function P(t, e) {
        (this.input = t),
          (this.filename = e.filename || null),
          (this.schema = e.schema || u),
          (this.onWarning = e.onWarning || null),
          (this.legacy = e.legacy || !1),
          (this.json = e.json || !1),
          (this.listener = e.listener || null),
          (this.implicitTypes = this.schema.compiledImplicit),
          (this.typeMap = this.schema.compiledTypeMap),
          (this.length = t.length),
          (this.position = 0),
          (this.line = 0),
          (this.lineStart = 0),
          (this.lineIndent = 0),
          (this.documents = []);
      }
      function I(t, e) {
        return new s(
          e,
          new a(
            t.filename,
            t.input,
            t.position,
            t.line,
            t.position - t.lineStart
          )
        );
      }
      function M(t, e) {
        throw I(t, e);
      }
      function O(t, e) {
        t.onWarning && t.onWarning.call(null, I(t, e));
      }
      var R = {
        YAML: function(t, e, i) {
          var n, r, s;
          null !== t.version && M(t, "duplication of %YAML directive"),
            1 !== i.length &&
              M(t, "YAML directive accepts exactly one argument"),
            null === (n = /^([0-9]+)\.([0-9]+)$/.exec(i[0])) &&
              M(t, "ill-formed argument of the YAML directive"),
            (r = parseInt(n[1], 10)),
            (s = parseInt(n[2], 10)),
            1 !== r && M(t, "unacceptable YAML version of the document"),
            (t.version = i[0]),
            (t.checkLineBreaks = s < 2),
            1 !== s &&
              2 !== s &&
              O(t, "unsupported YAML version of the document");
        },
        TAG: function(t, e, i) {
          var n, r;
          2 !== i.length && M(t, "TAG directive accepts exactly two arguments"),
            (n = i[0]),
            (r = i[1]),
            D.test(n) ||
              M(
                t,
                "ill-formed tag handle (first argument) of the TAG directive"
              ),
            h.call(t.tagMap, n) &&
              M(
                t,
                'there is a previously declared suffix for "' +
                  n +
                  '" tag handle'
              ),
            E.test(r) ||
              M(
                t,
                "ill-formed tag prefix (second argument) of the TAG directive"
              ),
            (t.tagMap[n] = r);
        }
      };
      function L(t, e, i, n) {
        var r, s, a, o;
        if (e < i) {
          if (((o = t.input.slice(e, i)), n))
            for (r = 0, s = o.length; r < s; r += 1)
              9 === (a = o.charCodeAt(r)) ||
                (32 <= a && a <= 1114111) ||
                M(t, "expected valid JSON character");
          else
            x.test(o) && M(t, "the stream contains non-printable characters");
          t.result += o;
        }
      }
      function U(t, e, i, n) {
        var s, a, o, u;
        for (
          r.isObject(i) ||
            M(
              t,
              "cannot merge mappings; the provided source object is unacceptable"
            ),
            o = 0,
            u = (s = Object.keys(i)).length;
          o < u;
          o += 1
        )
          (a = s[o]), h.call(e, a) || ((e[a] = i[a]), (n[a] = !0));
      }
      function z(t, e, i, r, s, a, o, u) {
        var c, l;
        if (Array.isArray(s))
          for (
            c = 0, l = (s = Array.prototype.slice.call(s)).length;
            c < l;
            c += 1
          )
            Array.isArray(s[c]) &&
              M(t, "nested arrays are not supported inside keys"),
              "object" === n(s) &&
                "[object Object]" === A(s[c]) &&
                (s[c] = "[object Object]");
        if (
          ("object" === n(s) &&
            "[object Object]" === A(s) &&
            (s = "[object Object]"),
          (s = String(s)),
          null === e && (e = {}),
          "tag:yaml.org,2002:merge" === r)
        )
          if (Array.isArray(a))
            for (c = 0, l = a.length; c < l; c += 1) U(t, e, a[c], i);
          else U(t, e, a, i);
        else
          t.json ||
            h.call(i, s) ||
            !h.call(e, s) ||
            ((t.line = o || t.line),
            (t.position = u || t.position),
            M(t, "duplicated mapping key")),
            (e[s] = a),
            delete i[s];
        return e;
      }
      function X(t) {
        var e;
        10 === (e = t.input.charCodeAt(t.position))
          ? t.position++
          : 13 === e
          ? (t.position++,
            10 === t.input.charCodeAt(t.position) && t.position++)
          : M(t, "a line break is expected"),
          (t.line += 1),
          (t.lineStart = t.position);
      }
      function j(t, e, i) {
        for (var n = 0, r = t.input.charCodeAt(t.position); 0 !== r; ) {
          for (; b(r); ) r = t.input.charCodeAt(++t.position);
          if (e && 35 === r)
            do {
              r = t.input.charCodeAt(++t.position);
            } while (10 !== r && 13 !== r && 0 !== r);
          if (!C(r)) break;
          for (
            X(t), r = t.input.charCodeAt(t.position), n++, t.lineIndent = 0;
            32 === r;

          )
            t.lineIndent++, (r = t.input.charCodeAt(++t.position));
        }
        return (
          -1 !== i &&
            0 !== n &&
            t.lineIndent < i &&
            O(t, "deficient indentation"),
          n
        );
      }
      function J(t) {
        var e,
          i = t.position;
        return !(
          (45 !== (e = t.input.charCodeAt(i)) && 46 !== e) ||
          e !== t.input.charCodeAt(i + 1) ||
          e !== t.input.charCodeAt(i + 2) ||
          ((i += 3), 0 !== (e = t.input.charCodeAt(i)) && !w(e))
        );
      }
      function K(t, e) {
        1 === e
          ? (t.result += " ")
          : e > 1 && (t.result += r.repeat("\n", e - 1));
      }
      function H(t, e) {
        var i,
          n,
          r = t.tag,
          s = t.anchor,
          a = [],
          o = !1;
        for (
          null !== t.anchor && (t.anchorMap[t.anchor] = a),
            n = t.input.charCodeAt(t.position);
          0 !== n && 45 === n && w(t.input.charCodeAt(t.position + 1));

        )
          if (((o = !0), t.position++, j(t, !0, -1) && t.lineIndent <= e))
            a.push(null), (n = t.input.charCodeAt(t.position));
          else if (
            ((i = t.line),
            q(t, e, p, !1, !0),
            a.push(t.result),
            j(t, !0, -1),
            (n = t.input.charCodeAt(t.position)),
            (t.line === i || t.lineIndent > e) && 0 !== n)
          )
            M(t, "bad indentation of a sequence entry");
          else if (t.lineIndent < e) break;
        return (
          !!o &&
          ((t.tag = r),
          (t.anchor = s),
          (t.kind = "sequence"),
          (t.result = a),
          !0)
        );
      }
      function Y(t) {
        var e,
          i,
          n,
          r,
          s = !1,
          a = !1;
        if (33 !== (r = t.input.charCodeAt(t.position))) return !1;
        if (
          (null !== t.tag && M(t, "duplication of a tag property"),
          60 === (r = t.input.charCodeAt(++t.position))
            ? ((s = !0), (r = t.input.charCodeAt(++t.position)))
            : 33 === r
            ? ((a = !0), (i = "!!"), (r = t.input.charCodeAt(++t.position)))
            : (i = "!"),
          (e = t.position),
          s)
        ) {
          do {
            r = t.input.charCodeAt(++t.position);
          } while (0 !== r && 62 !== r);
          t.position < t.length
            ? ((n = t.input.slice(e, t.position)),
              (r = t.input.charCodeAt(++t.position)))
            : M(t, "unexpected end of the stream within a verbatim tag");
        } else {
          for (; 0 !== r && !w(r); )
            33 === r &&
              (a
                ? M(t, "tag suffix cannot contain exclamation marks")
                : ((i = t.input.slice(e - 1, t.position + 1)),
                  D.test(i) ||
                    M(t, "named tag handle cannot contain such characters"),
                  (a = !0),
                  (e = t.position + 1))),
              (r = t.input.charCodeAt(++t.position));
          (n = t.input.slice(e, t.position)),
            v.test(n) &&
              M(t, "tag suffix cannot contain flow indicator characters");
        }
        return (
          n &&
            !E.test(n) &&
            M(t, "tag name cannot contain such characters: " + n),
          s
            ? (t.tag = n)
            : h.call(t.tagMap, i)
            ? (t.tag = t.tagMap[i] + n)
            : "!" === i
            ? (t.tag = "!" + n)
            : "!!" === i
            ? (t.tag = "tag:yaml.org,2002:" + n)
            : M(t, 'undeclared tag handle "' + i + '"'),
          !0
        );
      }
      function W(t) {
        var e, i;
        if (38 !== (i = t.input.charCodeAt(t.position))) return !1;
        for (
          null !== t.anchor && M(t, "duplication of an anchor property"),
            i = t.input.charCodeAt(++t.position),
            e = t.position;
          0 !== i && !w(i) && !S(i);

        )
          i = t.input.charCodeAt(++t.position);
        return (
          t.position === e &&
            M(t, "name of an anchor node must contain at least one character"),
          (t.anchor = t.input.slice(e, t.position)),
          !0
        );
      }
      function q(t, e, i, n, s) {
        var a,
          o,
          u,
          x,
          g,
          v,
          D,
          E,
          A = 1,
          k = !1,
          N = !1;
        if (
          (null !== t.listener && t.listener("open", t),
          (t.tag = null),
          (t.anchor = null),
          (t.kind = null),
          (t.result = null),
          (a = o = u = f === i || p === i),
          n &&
            j(t, !0, -1) &&
            ((k = !0),
            t.lineIndent > e
              ? (A = 1)
              : t.lineIndent === e
              ? (A = 0)
              : t.lineIndent < e && (A = -1)),
          1 === A)
        )
          for (; Y(t) || W(t); )
            j(t, !0, -1)
              ? ((k = !0),
                (u = a),
                t.lineIndent > e
                  ? (A = 1)
                  : t.lineIndent === e
                  ? (A = 0)
                  : t.lineIndent < e && (A = -1))
              : (u = !1);
        if (
          (u && (u = k || s),
          (1 !== A && f !== i) ||
            ((D = c === i || l === i ? e : e + 1),
            (E = t.position - t.lineStart),
            1 === A
              ? (u &&
                  (H(t, E) ||
                    (function(t, e, i) {
                      var n,
                        r,
                        s,
                        a,
                        o,
                        u = t.tag,
                        h = t.anchor,
                        c = {},
                        p = {},
                        d = null,
                        m = null,
                        y = null,
                        x = !1,
                        g = !1;
                      for (
                        null !== t.anchor && (t.anchorMap[t.anchor] = c),
                          o = t.input.charCodeAt(t.position);
                        0 !== o;

                      ) {
                        if (
                          ((n = t.input.charCodeAt(t.position + 1)),
                          (s = t.line),
                          (a = t.position),
                          (63 !== o && 58 !== o) || !w(n))
                        ) {
                          if (!q(t, i, l, !1, !0)) break;
                          if (t.line === s) {
                            for (o = t.input.charCodeAt(t.position); b(o); )
                              o = t.input.charCodeAt(++t.position);
                            if (58 === o)
                              w((o = t.input.charCodeAt(++t.position))) ||
                                M(
                                  t,
                                  "a whitespace character is expected after the key-value separator within a block mapping"
                                ),
                                x &&
                                  (z(t, c, p, d, m, null), (d = m = y = null)),
                                (g = !0),
                                (x = !1),
                                (r = !1),
                                (d = t.tag),
                                (m = t.result);
                            else {
                              if (!g) return (t.tag = u), (t.anchor = h), !0;
                              M(
                                t,
                                "can not read an implicit mapping pair; a colon is missed"
                              );
                            }
                          } else {
                            if (!g) return (t.tag = u), (t.anchor = h), !0;
                            M(
                              t,
                              "can not read a block mapping entry; a multiline key may not be an implicit key"
                            );
                          }
                        } else
                          63 === o
                            ? (x &&
                                (z(t, c, p, d, m, null), (d = m = y = null)),
                              (g = !0),
                              (x = !0),
                              (r = !0))
                            : x
                            ? ((x = !1), (r = !0))
                            : M(
                                t,
                                "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
                              ),
                            (t.position += 1),
                            (o = n);
                        if (
                          ((t.line === s || t.lineIndent > e) &&
                            (q(t, e, f, !0, r) &&
                              (x ? (m = t.result) : (y = t.result)),
                            x ||
                              (z(t, c, p, d, m, y, s, a), (d = m = y = null)),
                            j(t, !0, -1),
                            (o = t.input.charCodeAt(t.position))),
                          t.lineIndent > e && 0 !== o)
                        )
                          M(t, "bad indentation of a mapping entry");
                        else if (t.lineIndent < e) break;
                      }
                      return (
                        x && z(t, c, p, d, m, null),
                        g &&
                          ((t.tag = u),
                          (t.anchor = h),
                          (t.kind = "mapping"),
                          (t.result = c)),
                        g
                      );
                    })(t, E, D))) ||
                (function(t, e) {
                  var i,
                    n,
                    r,
                    s,
                    a,
                    o,
                    u,
                    h,
                    l,
                    p,
                    f = !0,
                    d = t.tag,
                    m = t.anchor,
                    y = {};
                  if (91 === (p = t.input.charCodeAt(t.position)))
                    (r = 93), (o = !1), (n = []);
                  else {
                    if (123 !== p) return !1;
                    (r = 125), (o = !0), (n = {});
                  }
                  for (
                    null !== t.anchor && (t.anchorMap[t.anchor] = n),
                      p = t.input.charCodeAt(++t.position);
                    0 !== p;

                  ) {
                    if (
                      (j(t, !0, e), (p = t.input.charCodeAt(t.position)) === r)
                    )
                      return (
                        t.position++,
                        (t.tag = d),
                        (t.anchor = m),
                        (t.kind = o ? "mapping" : "sequence"),
                        (t.result = n),
                        !0
                      );
                    f || M(t, "missed comma between flow collection entries"),
                      (l = null),
                      (s = a = !1),
                      63 === p &&
                        w(t.input.charCodeAt(t.position + 1)) &&
                        ((s = a = !0), t.position++, j(t, !0, e)),
                      (i = t.line),
                      q(t, e, c, !1, !0),
                      (h = t.tag),
                      (u = t.result),
                      j(t, !0, e),
                      (p = t.input.charCodeAt(t.position)),
                      (!a && t.line !== i) ||
                        58 !== p ||
                        ((s = !0),
                        (p = t.input.charCodeAt(++t.position)),
                        j(t, !0, e),
                        q(t, e, c, !1, !0),
                        (l = t.result)),
                      o
                        ? z(t, n, y, h, u, l)
                        : s
                        ? n.push(z(t, null, y, h, u, l))
                        : n.push(u),
                      j(t, !0, e),
                      44 === (p = t.input.charCodeAt(t.position))
                        ? ((f = !0), (p = t.input.charCodeAt(++t.position)))
                        : (f = !1);
                  }
                  M(t, "unexpected end of the stream within a flow collection");
                })(t, D)
                ? (N = !0)
                : ((o &&
                    (function(t, e) {
                      var i,
                        n,
                        s,
                        a,
                        o,
                        u = d,
                        h = !1,
                        c = !1,
                        l = e,
                        p = 0,
                        f = !1;
                      if (124 === (a = t.input.charCodeAt(t.position))) n = !1;
                      else {
                        if (62 !== a) return !1;
                        n = !0;
                      }
                      for (t.kind = "scalar", t.result = ""; 0 !== a; )
                        if (
                          43 === (a = t.input.charCodeAt(++t.position)) ||
                          45 === a
                        )
                          d === u
                            ? (u = 43 === a ? y : m)
                            : M(t, "repeat of a chomping mode identifier");
                        else {
                          if (
                            !((s = 48 <= (o = a) && o <= 57 ? o - 48 : -1) >= 0)
                          )
                            break;
                          0 === s
                            ? M(
                                t,
                                "bad explicit indentation width of a block scalar; it cannot be less than one"
                              )
                            : c
                            ? M(t, "repeat of an indentation width identifier")
                            : ((l = e + s - 1), (c = !0));
                        }
                      if (b(a)) {
                        do {
                          a = t.input.charCodeAt(++t.position);
                        } while (b(a));
                        if (35 === a)
                          do {
                            a = t.input.charCodeAt(++t.position);
                          } while (!C(a) && 0 !== a);
                      }
                      for (; 0 !== a; ) {
                        for (
                          X(t),
                            t.lineIndent = 0,
                            a = t.input.charCodeAt(t.position);
                          (!c || t.lineIndent < l) && 32 === a;

                        )
                          t.lineIndent++,
                            (a = t.input.charCodeAt(++t.position));
                        if (
                          (!c && t.lineIndent > l && (l = t.lineIndent), C(a))
                        )
                          p++;
                        else {
                          if (t.lineIndent < l) {
                            u === y
                              ? (t.result += r.repeat("\n", h ? 1 + p : p))
                              : u === d && h && (t.result += "\n");
                            break;
                          }
                          for (
                            n
                              ? b(a)
                                ? ((f = !0),
                                  (t.result += r.repeat("\n", h ? 1 + p : p)))
                                : f
                                ? ((f = !1),
                                  (t.result += r.repeat("\n", p + 1)))
                                : 0 === p
                                ? h && (t.result += " ")
                                : (t.result += r.repeat("\n", p))
                              : (t.result += r.repeat("\n", h ? 1 + p : p)),
                              h = !0,
                              c = !0,
                              p = 0,
                              i = t.position;
                            !C(a) && 0 !== a;

                          )
                            a = t.input.charCodeAt(++t.position);
                          L(t, i, t.position, !1);
                        }
                      }
                      return !0;
                    })(t, D)) ||
                  (function(t, e) {
                    var i, n, r;
                    if (39 !== (i = t.input.charCodeAt(t.position))) return !1;
                    for (
                      t.kind = "scalar",
                        t.result = "",
                        t.position++,
                        n = r = t.position;
                      0 !== (i = t.input.charCodeAt(t.position));

                    )
                      if (39 === i) {
                        if (
                          (L(t, n, t.position, !0),
                          39 !== (i = t.input.charCodeAt(++t.position)))
                        )
                          return !0;
                        (n = t.position), t.position++, (r = t.position);
                      } else
                        C(i)
                          ? (L(t, n, r, !0),
                            K(t, j(t, !1, e)),
                            (n = r = t.position))
                          : t.position === t.lineStart && J(t)
                          ? M(
                              t,
                              "unexpected end of the document within a single quoted scalar"
                            )
                          : (t.position++, (r = t.position));
                    M(
                      t,
                      "unexpected end of the stream within a single quoted scalar"
                    );
                  })(t, D) ||
                  (function(t, e) {
                    var i, n, r, s, a, o, u;
                    if (34 !== (o = t.input.charCodeAt(t.position))) return !1;
                    for (
                      t.kind = "scalar",
                        t.result = "",
                        t.position++,
                        i = n = t.position;
                      0 !== (o = t.input.charCodeAt(t.position));

                    ) {
                      if (34 === o)
                        return L(t, i, t.position, !0), t.position++, !0;
                      if (92 === o) {
                        if (
                          (L(t, i, t.position, !0),
                          C((o = t.input.charCodeAt(++t.position))))
                        )
                          j(t, !1, e);
                        else if (o < 256 && T[o])
                          (t.result += B[o]), t.position++;
                        else if (
                          (a =
                            120 === (u = o)
                              ? 2
                              : 117 === u
                              ? 4
                              : 85 === u
                              ? 8
                              : 0) > 0
                        ) {
                          for (r = a, s = 0; r > 0; r--)
                            (a = F((o = t.input.charCodeAt(++t.position)))) >= 0
                              ? (s = (s << 4) + a)
                              : M(t, "expected hexadecimal character");
                          (t.result += _(s)), t.position++;
                        } else M(t, "unknown escape sequence");
                        i = n = t.position;
                      } else
                        C(o)
                          ? (L(t, i, n, !0),
                            K(t, j(t, !1, e)),
                            (i = n = t.position))
                          : t.position === t.lineStart && J(t)
                          ? M(
                              t,
                              "unexpected end of the document within a double quoted scalar"
                            )
                          : (t.position++, (n = t.position));
                    }
                    M(
                      t,
                      "unexpected end of the stream within a double quoted scalar"
                    );
                  })(t, D)
                    ? (N = !0)
                    : !(function(t) {
                        var e, i, n;
                        if (42 !== (n = t.input.charCodeAt(t.position)))
                          return !1;
                        for (
                          n = t.input.charCodeAt(++t.position), e = t.position;
                          0 !== n && !w(n) && !S(n);

                        )
                          n = t.input.charCodeAt(++t.position);
                        return (
                          t.position === e &&
                            M(
                              t,
                              "name of an alias node must contain at least one character"
                            ),
                          (i = t.input.slice(e, t.position)),
                          t.anchorMap.hasOwnProperty(i) ||
                            M(t, 'unidentified alias "' + i + '"'),
                          (t.result = t.anchorMap[i]),
                          j(t, !0, -1),
                          !0
                        );
                      })(t)
                    ? (function(t, e, i) {
                        var n,
                          r,
                          s,
                          a,
                          o,
                          u,
                          h,
                          c,
                          l = t.kind,
                          p = t.result;
                        if (
                          w((c = t.input.charCodeAt(t.position))) ||
                          S(c) ||
                          35 === c ||
                          38 === c ||
                          42 === c ||
                          33 === c ||
                          124 === c ||
                          62 === c ||
                          39 === c ||
                          34 === c ||
                          37 === c ||
                          64 === c ||
                          96 === c
                        )
                          return !1;
                        if (
                          (63 === c || 45 === c) &&
                          (w((n = t.input.charCodeAt(t.position + 1))) ||
                            (i && S(n)))
                        )
                          return !1;
                        for (
                          t.kind = "scalar",
                            t.result = "",
                            r = s = t.position,
                            a = !1;
                          0 !== c;

                        ) {
                          if (58 === c) {
                            if (
                              w((n = t.input.charCodeAt(t.position + 1))) ||
                              (i && S(n))
                            )
                              break;
                          } else if (35 === c) {
                            if (w(t.input.charCodeAt(t.position - 1))) break;
                          } else {
                            if (
                              (t.position === t.lineStart && J(t)) ||
                              (i && S(c))
                            )
                              break;
                            if (C(c)) {
                              if (
                                ((o = t.line),
                                (u = t.lineStart),
                                (h = t.lineIndent),
                                j(t, !1, -1),
                                t.lineIndent >= e)
                              ) {
                                (a = !0), (c = t.input.charCodeAt(t.position));
                                continue;
                              }
                              (t.position = s),
                                (t.line = o),
                                (t.lineStart = u),
                                (t.lineIndent = h);
                              break;
                            }
                          }
                          a &&
                            (L(t, r, s, !1),
                            K(t, t.line - o),
                            (r = s = t.position),
                            (a = !1)),
                            b(c) || (s = t.position + 1),
                            (c = t.input.charCodeAt(++t.position));
                        }
                        return (
                          L(t, r, s, !1),
                          !!t.result || ((t.kind = l), (t.result = p), !1)
                        );
                      })(t, D, c === i) &&
                      ((N = !0), null === t.tag && (t.tag = "?"))
                    : ((N = !0),
                      (null === t.tag && null === t.anchor) ||
                        M(t, "alias node should not have any properties")),
                  null !== t.anchor && (t.anchorMap[t.anchor] = t.result))
              : 0 === A && (N = u && H(t, E))),
          null !== t.tag && "!" !== t.tag)
        )
          if ("?" === t.tag) {
            for (x = 0, g = t.implicitTypes.length; x < g; x += 1)
              if ((v = t.implicitTypes[x]).resolve(t.result)) {
                (t.result = v.construct(t.result)),
                  (t.tag = v.tag),
                  null !== t.anchor && (t.anchorMap[t.anchor] = t.result);
                break;
              }
          } else
            h.call(t.typeMap[t.kind || "fallback"], t.tag)
              ? ((v = t.typeMap[t.kind || "fallback"][t.tag]),
                null !== t.result &&
                  v.kind !== t.kind &&
                  M(
                    t,
                    "unacceptable node kind for !<" +
                      t.tag +
                      '> tag; it should be "' +
                      v.kind +
                      '", not "' +
                      t.kind +
                      '"'
                  ),
                v.resolve(t.result)
                  ? ((t.result = v.construct(t.result)),
                    null !== t.anchor && (t.anchorMap[t.anchor] = t.result))
                  : M(
                      t,
                      "cannot resolve a node with !<" + t.tag + "> explicit tag"
                    ))
              : M(t, "unknown tag !<" + t.tag + ">");
        return (
          null !== t.listener && t.listener("close", t),
          null !== t.tag || null !== t.anchor || N
        );
      }
      function G(t) {
        var e,
          i,
          n,
          r,
          s = t.position,
          a = !1;
        for (
          t.version = null,
            t.checkLineBreaks = t.legacy,
            t.tagMap = {},
            t.anchorMap = {};
          0 !== (r = t.input.charCodeAt(t.position)) &&
          (j(t, !0, -1),
          (r = t.input.charCodeAt(t.position)),
          !(t.lineIndent > 0 || 37 !== r));

        ) {
          for (
            a = !0, r = t.input.charCodeAt(++t.position), e = t.position;
            0 !== r && !w(r);

          )
            r = t.input.charCodeAt(++t.position);
          for (
            n = [],
              (i = t.input.slice(e, t.position)).length < 1 &&
                M(
                  t,
                  "directive name must not be less than one character in length"
                );
            0 !== r;

          ) {
            for (; b(r); ) r = t.input.charCodeAt(++t.position);
            if (35 === r) {
              do {
                r = t.input.charCodeAt(++t.position);
              } while (0 !== r && !C(r));
              break;
            }
            if (C(r)) break;
            for (e = t.position; 0 !== r && !w(r); )
              r = t.input.charCodeAt(++t.position);
            n.push(t.input.slice(e, t.position));
          }
          0 !== r && X(t),
            h.call(R, i)
              ? R[i](t, i, n)
              : O(t, 'unknown document directive "' + i + '"');
        }
        j(t, !0, -1),
          0 === t.lineIndent &&
          45 === t.input.charCodeAt(t.position) &&
          45 === t.input.charCodeAt(t.position + 1) &&
          45 === t.input.charCodeAt(t.position + 2)
            ? ((t.position += 3), j(t, !0, -1))
            : a && M(t, "directives end mark is expected"),
          q(t, t.lineIndent - 1, f, !1, !0),
          j(t, !0, -1),
          t.checkLineBreaks &&
            g.test(t.input.slice(s, t.position)) &&
            O(t, "non-ASCII line breaks are interpreted as content"),
          t.documents.push(t.result),
          t.position === t.lineStart && J(t)
            ? 46 === t.input.charCodeAt(t.position) &&
              ((t.position += 3), j(t, !0, -1))
            : t.position < t.length - 1 &&
              M(t, "end of the stream or a document separator is expected");
      }
      function $(t, e) {
        (e = e || {}),
          0 !== (t = String(t)).length &&
            (10 !== t.charCodeAt(t.length - 1) &&
              13 !== t.charCodeAt(t.length - 1) &&
              (t += "\n"),
            65279 === t.charCodeAt(0) && (t = t.slice(1)));
        var i = new P(t, e);
        for (i.input += "\0"; 32 === i.input.charCodeAt(i.position); )
          (i.lineIndent += 1), (i.position += 1);
        for (; i.position < i.length - 1; ) G(i);
        return i.documents;
      }
      function V(t, e, i) {
        var n,
          r,
          s = $(t, i);
        if ("function" != typeof e) return s;
        for (n = 0, r = s.length; n < r; n += 1) e(s[n]);
      }
      function Z(t, e) {
        var i = $(t, e);
        if (0 !== i.length) {
          if (1 === i.length) return i[0];
          throw new s(
            "expected a single document in the stream, but found more"
          );
        }
      }
      (t.exports.loadAll = V),
        (t.exports.load = Z),
        (t.exports.safeLoadAll = function(t, e, i) {
          if ("function" != typeof e) return V(t, r.extend({ schema: o }, i));
          V(t, e, r.extend({ schema: o }, i));
        }),
        (t.exports.safeLoad = function(t, e) {
          return Z(t, r.extend({ schema: o }, e));
        });
    },
    function(t, e, i) {
      "use strict";
      var n = i(38);
      function r(t, e, i, n, r) {
        (this.name = t),
          (this.buffer = e),
          (this.position = i),
          (this.line = n),
          (this.column = r);
      }
      (r.prototype.getSnippet = function(t, e) {
        var i, r, s, a, o;
        if (!this.buffer) return null;
        for (
          t = t || 4, e = e || 75, i = "", r = this.position;
          r > 0 &&
          -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(r - 1));

        )
          if (((r -= 1), this.position - r > e / 2 - 1)) {
            (i = " ... "), (r += 5);
            break;
          }
        for (
          s = "", a = this.position;
          a < this.buffer.length &&
          -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(a));

        )
          if ((a += 1) - this.position > e / 2 - 1) {
            (s = " ... "), (a -= 5);
            break;
          }
        return (
          (o = this.buffer.slice(r, a)),
          n.repeat(" ", t) +
            i +
            o +
            s +
            "\n" +
            n.repeat(" ", t + this.position - r + i.length) +
            "^"
        );
      }),
        (r.prototype.toString = function(t) {
          var e,
            i = "";
          return (
            this.name && (i += 'in "' + this.name + '" '),
            (i +=
              "at line " + (this.line + 1) + ", column " + (this.column + 1)),
            t || ((e = this.getSnippet()) && (i += ":\n" + e)),
            i
          );
        }),
        (t.exports = r);
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(t) {
          return null !== t ? t : "";
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(t) {
          return null !== t ? t : [];
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(t) {
          return null !== t ? t : {};
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: function(t) {
          if (null === t) return !0;
          var e = t.length;
          return (
            (1 === e && "~" === t) ||
            (4 === e && ("null" === t || "Null" === t || "NULL" === t))
          );
        },
        construct: function() {
          return null;
        },
        predicate: function(t) {
          return null === t;
        },
        represent: {
          canonical: function() {
            return "~";
          },
          lowercase: function() {
            return "null";
          },
          uppercase: function() {
            return "NULL";
          },
          camelcase: function() {
            return "Null";
          }
        },
        defaultStyle: "lowercase"
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: function(t) {
          if (null === t) return !1;
          var e = t.length;
          return (
            (4 === e && ("true" === t || "True" === t || "TRUE" === t)) ||
            (5 === e && ("false" === t || "False" === t || "FALSE" === t))
          );
        },
        construct: function(t) {
          return "true" === t || "True" === t || "TRUE" === t;
        },
        predicate: function(t) {
          return "[object Boolean]" === Object.prototype.toString.call(t);
        },
        represent: {
          lowercase: function(t) {
            return t ? "true" : "false";
          },
          uppercase: function(t) {
            return t ? "TRUE" : "FALSE";
          },
          camelcase: function(t) {
            return t ? "True" : "False";
          }
        },
        defaultStyle: "lowercase"
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(38),
        r = i(14);
      function s(t) {
        return 48 <= t && t <= 55;
      }
      function a(t) {
        return 48 <= t && t <= 57;
      }
      t.exports = new r("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: function(t) {
          if (null === t) return !1;
          var e,
            i,
            n = t.length,
            r = 0,
            o = !1;
          if (!n) return !1;
          if ((("-" !== (e = t[r]) && "+" !== e) || (e = t[++r]), "0" === e)) {
            if (r + 1 === n) return !0;
            if ("b" === (e = t[++r])) {
              for (r++; r < n; r++)
                if ("_" !== (e = t[r])) {
                  if ("0" !== e && "1" !== e) return !1;
                  o = !0;
                }
              return o && "_" !== e;
            }
            if ("x" === e) {
              for (r++; r < n; r++)
                if ("_" !== (e = t[r])) {
                  if (
                    !(
                      (48 <= (i = t.charCodeAt(r)) && i <= 57) ||
                      (65 <= i && i <= 70) ||
                      (97 <= i && i <= 102)
                    )
                  )
                    return !1;
                  o = !0;
                }
              return o && "_" !== e;
            }
            for (; r < n; r++)
              if ("_" !== (e = t[r])) {
                if (!s(t.charCodeAt(r))) return !1;
                o = !0;
              }
            return o && "_" !== e;
          }
          if ("_" === e) return !1;
          for (; r < n; r++)
            if ("_" !== (e = t[r])) {
              if (":" === e) break;
              if (!a(t.charCodeAt(r))) return !1;
              o = !0;
            }
          return (
            !(!o || "_" === e) &&
            (":" !== e || /^(:[0-5]?[0-9])+$/.test(t.slice(r)))
          );
        },
        construct: function(t) {
          var e,
            i,
            n = t,
            r = 1,
            s = [];
          return (
            -1 !== n.indexOf("_") && (n = n.replace(/_/g, "")),
            ("-" !== (e = n[0]) && "+" !== e) ||
              ("-" === e && (r = -1), (e = (n = n.slice(1))[0])),
            "0" === n
              ? 0
              : "0" === e
              ? "b" === n[1]
                ? r * parseInt(n.slice(2), 2)
                : "x" === n[1]
                ? r * parseInt(n, 16)
                : r * parseInt(n, 8)
              : -1 !== n.indexOf(":")
              ? (n.split(":").forEach(function(t) {
                  s.unshift(parseInt(t, 10));
                }),
                (n = 0),
                (i = 1),
                s.forEach(function(t) {
                  (n += t * i), (i *= 60);
                }),
                r * n)
              : r * parseInt(n, 10)
          );
        },
        predicate: function(t) {
          return (
            "[object Number]" === Object.prototype.toString.call(t) &&
            t % 1 == 0 &&
            !n.isNegativeZero(t)
          );
        },
        represent: {
          binary: function(t) {
            return t >= 0
              ? "0b" + t.toString(2)
              : "-0b" + t.toString(2).slice(1);
          },
          octal: function(t) {
            return t >= 0 ? "0" + t.toString(8) : "-0" + t.toString(8).slice(1);
          },
          decimal: function(t) {
            return t.toString(10);
          },
          hexadecimal: function(t) {
            return t >= 0
              ? "0x" + t.toString(16).toUpperCase()
              : "-0x" +
                  t
                    .toString(16)
                    .toUpperCase()
                    .slice(1);
          }
        },
        defaultStyle: "decimal",
        styleAliases: {
          binary: [2, "bin"],
          octal: [8, "oct"],
          decimal: [10, "dec"],
          hexadecimal: [16, "hex"]
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(38),
        r = i(14),
        s = new RegExp(
          "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
        );
      var a = /^[-+]?[0-9]+e/;
      t.exports = new r("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: function(t) {
          return null !== t && !(!s.test(t) || "_" === t[t.length - 1]);
        },
        construct: function(t) {
          var e, i, n, r;
          return (
            (i = "-" === (e = t.replace(/_/g, "").toLowerCase())[0] ? -1 : 1),
            (r = []),
            "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)),
            ".inf" === e
              ? 1 === i
                ? Number.POSITIVE_INFINITY
                : Number.NEGATIVE_INFINITY
              : ".nan" === e
              ? NaN
              : e.indexOf(":") >= 0
              ? (e.split(":").forEach(function(t) {
                  r.unshift(parseFloat(t, 10));
                }),
                (e = 0),
                (n = 1),
                r.forEach(function(t) {
                  (e += t * n), (n *= 60);
                }),
                i * e)
              : i * parseFloat(e, 10)
          );
        },
        predicate: function(t) {
          return (
            "[object Number]" === Object.prototype.toString.call(t) &&
            (t % 1 != 0 || n.isNegativeZero(t))
          );
        },
        represent: function(t, e) {
          var i;
          if (isNaN(t))
            switch (e) {
              case "lowercase":
                return ".nan";
              case "uppercase":
                return ".NAN";
              case "camelcase":
                return ".NaN";
            }
          else if (Number.POSITIVE_INFINITY === t)
            switch (e) {
              case "lowercase":
                return ".inf";
              case "uppercase":
                return ".INF";
              case "camelcase":
                return ".Inf";
            }
          else if (Number.NEGATIVE_INFINITY === t)
            switch (e) {
              case "lowercase":
                return "-.inf";
              case "uppercase":
                return "-.INF";
              case "camelcase":
                return "-.Inf";
            }
          else if (n.isNegativeZero(t)) return "-0.0";
          return (i = t.toString(10)), a.test(i) ? i.replace("e", ".e") : i;
        },
        defaultStyle: "lowercase"
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14),
        r = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
        s = new RegExp(
          "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
        );
      t.exports = new n("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: function(t) {
          return null !== t && (null !== r.exec(t) || null !== s.exec(t));
        },
        construct: function(t) {
          var e,
            i,
            n,
            a,
            o,
            u,
            h,
            c,
            l = 0,
            p = null;
          if ((null === (e = r.exec(t)) && (e = s.exec(t)), null === e))
            throw new Error("Date resolve error");
          if (((i = +e[1]), (n = +e[2] - 1), (a = +e[3]), !e[4]))
            return new Date(Date.UTC(i, n, a));
          if (((o = +e[4]), (u = +e[5]), (h = +e[6]), e[7])) {
            for (l = e[7].slice(0, 3); l.length < 3; ) l += "0";
            l = +l;
          }
          return (
            e[9] &&
              ((p = 6e4 * (60 * +e[10] + +(e[11] || 0))),
              "-" === e[9] && (p = -p)),
            (c = new Date(Date.UTC(i, n, a, o, u, h, l))),
            p && c.setTime(c.getTime() - p),
            c
          );
        },
        instanceOf: Date,
        represent: function(t) {
          return t.toISOString();
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: function(t) {
          return "<<" === t || null === t;
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n;
      try {
        n = i(154).Buffer;
      } catch (a) {}
      var r = i(14),
        s =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
      t.exports = new r("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: function(t) {
          if (null === t) return !1;
          var e,
            i,
            n = 0,
            r = t.length,
            a = s;
          for (i = 0; i < r; i++)
            if (!((e = a.indexOf(t.charAt(i))) > 64)) {
              if (e < 0) return !1;
              n += 6;
            }
          return n % 8 == 0;
        },
        construct: function(t) {
          var e,
            i,
            r = t.replace(/[\r\n=]/g, ""),
            a = r.length,
            o = s,
            u = 0,
            h = [];
          for (e = 0; e < a; e++)
            e % 4 == 0 &&
              e &&
              (h.push((u >> 16) & 255),
              h.push((u >> 8) & 255),
              h.push(255 & u)),
              (u = (u << 6) | o.indexOf(r.charAt(e)));
          return (
            0 == (i = (a % 4) * 6)
              ? (h.push((u >> 16) & 255),
                h.push((u >> 8) & 255),
                h.push(255 & u))
              : 18 === i
              ? (h.push((u >> 10) & 255), h.push((u >> 2) & 255))
              : 12 === i && h.push((u >> 4) & 255),
            n ? (n.from ? n.from(h) : new n(h)) : h
          );
        },
        predicate: function(t) {
          return n && n.isBuffer(t);
        },
        represent: function(t) {
          var e,
            i,
            n = "",
            r = 0,
            a = t.length,
            o = s;
          for (e = 0; e < a; e++)
            e % 3 == 0 &&
              e &&
              ((n += o[(r >> 18) & 63]),
              (n += o[(r >> 12) & 63]),
              (n += o[(r >> 6) & 63]),
              (n += o[63 & r])),
              (r = (r << 8) + t[e]);
          return (
            0 == (i = a % 3)
              ? ((n += o[(r >> 18) & 63]),
                (n += o[(r >> 12) & 63]),
                (n += o[(r >> 6) & 63]),
                (n += o[63 & r]))
              : 2 === i
              ? ((n += o[(r >> 10) & 63]),
                (n += o[(r >> 4) & 63]),
                (n += o[(r << 2) & 63]),
                (n += o[64]))
              : 1 === i &&
                ((n += o[(r >> 2) & 63]),
                (n += o[(r << 4) & 63]),
                (n += o[64]),
                (n += o[64])),
            n
          );
        }
      });
    },
    function(t, e, i) {
      "use strict";
      (function(t) {
        var n = i(156),
          r = i(157),
          s = i(158);
        function a() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function o(t, e) {
          if (a() < e) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
              : (null === t && (t = new u(e)), (t.length = e)),
            t
          );
        }
        function u(t, e, i) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(t, e, i);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return l(this, t);
          }
          return h(this, t, e, i);
        }
        function h(t, e, i, n) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function(t, e, i, n) {
                if ((e.byteLength, i < 0 || e.byteLength < i))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < i + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === i && void 0 === n
                    ? new Uint8Array(e)
                    : void 0 === n
                    ? new Uint8Array(e, i)
                    : new Uint8Array(e, i, n);
                u.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = u.prototype)
                  : (t = p(t, e));
                return t;
              })(t, e, i, n)
            : "string" == typeof e
            ? (function(t, e, i) {
                ("string" == typeof i && "" !== i) || (i = "utf8");
                if (!u.isEncoding(i))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | d(e, i),
                  r = (t = o(t, n)).write(e, i);
                r !== n && (t = t.slice(0, r));
                return t;
              })(t, e, i)
            : (function(t, e) {
                if (u.isBuffer(e)) {
                  var i = 0 | f(e.length);
                  return 0 === (t = o(t, i)).length
                    ? t
                    : (e.copy(t, 0, 0, i), t);
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length || (n = e.length) != n
                      ? o(t, 0)
                      : p(t, e);
                  if ("Buffer" === e.type && s(e.data)) return p(t, e.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function c(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function l(t, e) {
          if ((c(e), (t = o(t, e < 0 ? 0 : 0 | f(e))), !u.TYPED_ARRAY_SUPPORT))
            for (var i = 0; i < e; ++i) t[i] = 0;
          return t;
        }
        function p(t, e) {
          var i = e.length < 0 ? 0 : 0 | f(e.length);
          t = o(t, i);
          for (var n = 0; n < i; n += 1) t[n] = 255 & e[n];
          return t;
        }
        function f(t) {
          if (t >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function d(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var i = t.length;
          if (0 === i) return 0;
          for (var n = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return i;
              case "utf8":
              case "utf-8":
              case void 0:
                return z(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * i;
              case "hex":
                return i >>> 1;
              case "base64":
                return X(t).length;
              default:
                if (n) return z(t).length;
                (e = ("" + e).toLowerCase()), (n = !0);
            }
        }
        function m(t, e, i) {
          var n = t[e];
          (t[e] = t[i]), (t[i] = n);
        }
        function y(t, e, i, n, r) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof i
              ? ((n = i), (i = 0))
              : i > 2147483647
              ? (i = 2147483647)
              : i < -2147483648 && (i = -2147483648),
            (i = +i),
            isNaN(i) && (i = r ? 0 : t.length - 1),
            i < 0 && (i = t.length + i),
            i >= t.length)
          ) {
            if (r) return -1;
            i = t.length - 1;
          } else if (i < 0) {
            if (!r) return -1;
            i = 0;
          }
          if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
            return 0 === e.length ? -1 : x(t, e, i, n, r);
          if ("number" == typeof e)
            return (
              (e &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? r
                  ? Uint8Array.prototype.indexOf.call(t, e, i)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, i)
                : x(t, [e], i, n, r)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function x(t, e, i, n, r) {
          var s,
            a = 1,
            o = t.length,
            u = e.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (o /= 2), (u /= 2), (i /= 2);
          }
          function h(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (r) {
            var c = -1;
            for (s = i; s < o; s++)
              if (h(t, s) === h(e, -1 === c ? 0 : s - c)) {
                if ((-1 === c && (c = s), s - c + 1 === u)) return c * a;
              } else -1 !== c && (s -= s - c), (c = -1);
          } else
            for (i + u > o && (i = o - u), s = i; s >= 0; s--) {
              for (var l = !0, p = 0; p < u; p++)
                if (h(t, s + p) !== h(e, p)) {
                  l = !1;
                  break;
                }
              if (l) return s;
            }
          return -1;
        }
        function g(t, e, i, n) {
          i = Number(i) || 0;
          var r = t.length - i;
          n ? (n = Number(n)) > r && (n = r) : (n = r);
          var s = e.length;
          if (s % 2 != 0) throw new TypeError("Invalid hex string");
          n > s / 2 && (n = s / 2);
          for (var a = 0; a < n; ++a) {
            var o = parseInt(e.substr(2 * a, 2), 16);
            if (isNaN(o)) return a;
            t[i + a] = o;
          }
          return a;
        }
        function v(t, e, i, n) {
          return j(z(e, t.length - i), t, i, n);
        }
        function D(t, e, i, n) {
          return j(
            (function(t) {
              for (var e = [], i = 0; i < t.length; ++i)
                e.push(255 & t.charCodeAt(i));
              return e;
            })(e),
            t,
            i,
            n
          );
        }
        function E(t, e, i, n) {
          return D(t, e, i, n);
        }
        function A(t, e, i, n) {
          return j(X(e), t, i, n);
        }
        function C(t, e, i, n) {
          return j(
            (function(t, e) {
              for (
                var i, n, r, s = [], a = 0;
                a < t.length && !((e -= 2) < 0);
                ++a
              )
                (i = t.charCodeAt(a)),
                  (n = i >> 8),
                  (r = i % 256),
                  s.push(r),
                  s.push(n);
              return s;
            })(e, t.length - i),
            t,
            i,
            n
          );
        }
        function b(t, e, i) {
          return 0 === e && i === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, i));
        }
        function w(t, e, i) {
          i = Math.min(t.length, i);
          for (var n = [], r = e; r < i; ) {
            var s,
              a,
              o,
              u,
              h = t[r],
              c = null,
              l = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
            if (r + l <= i)
              switch (l) {
                case 1:
                  h < 128 && (c = h);
                  break;
                case 2:
                  128 == (192 & (s = t[r + 1])) &&
                    (u = ((31 & h) << 6) | (63 & s)) > 127 &&
                    (c = u);
                  break;
                case 3:
                  (s = t[r + 1]),
                    (a = t[r + 2]),
                    128 == (192 & s) &&
                      128 == (192 & a) &&
                      (u = ((15 & h) << 12) | ((63 & s) << 6) | (63 & a)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (c = u);
                  break;
                case 4:
                  (s = t[r + 1]),
                    (a = t[r + 2]),
                    (o = t[r + 3]),
                    128 == (192 & s) &&
                      128 == (192 & a) &&
                      128 == (192 & o) &&
                      (u =
                        ((15 & h) << 18) |
                        ((63 & s) << 12) |
                        ((63 & a) << 6) |
                        (63 & o)) > 65535 &&
                      u < 1114112 &&
                      (c = u);
              }
            null === c
              ? ((c = 65533), (l = 1))
              : c > 65535 &&
                ((c -= 65536),
                n.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              n.push(c),
              (r += l);
          }
          return (function(t) {
            var e = t.length;
            if (e <= S) return String.fromCharCode.apply(String, t);
            var i = "",
              n = 0;
            for (; n < e; )
              i += String.fromCharCode.apply(String, t.slice(n, (n += S)));
            return i;
          })(n);
        }
        (e.Buffer = u),
          (e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        }
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = a()),
          (u.poolSize = 8192),
          (u._augment = function(t) {
            return (t.__proto__ = u.prototype), t;
          }),
          (u.from = function(t, e, i) {
            return h(null, t, e, i);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0
              })),
          (u.alloc = function(t, e, i) {
            return (function(t, e, i, n) {
              return (
                c(e),
                e <= 0
                  ? o(t, e)
                  : void 0 !== i
                  ? "string" == typeof n
                    ? o(t, e).fill(i, n)
                    : o(t, e).fill(i)
                  : o(t, e)
              );
            })(null, t, e, i);
          }),
          (u.allocUnsafe = function(t) {
            return l(null, t);
          }),
          (u.allocUnsafeSlow = function(t) {
            return l(null, t);
          }),
          (u.isBuffer = function(t) {
            return !(null == t || !t._isBuffer);
          }),
          (u.compare = function(t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var i = t.length, n = e.length, r = 0, s = Math.min(i, n);
              r < s;
              ++r
            )
              if (t[r] !== e[r]) {
                (i = t[r]), (n = e[r]);
                break;
              }
            return i < n ? -1 : n < i ? 1 : 0;
          }),
          (u.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function(t, e) {
            if (!s(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            var i;
            if (void 0 === e)
              for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
            var n = u.allocUnsafe(e),
              r = 0;
            for (i = 0; i < t.length; ++i) {
              var a = t[i];
              if (!u.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(n, r), (r += a.length);
            }
            return n;
          }),
          (u.byteLength = d),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              m(this, e, e + 3), m(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              m(this, e, e + 7),
                m(this, e + 1, e + 6),
                m(this, e + 2, e + 5),
                m(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? w(this, 0, t)
              : function(t, e, i) {
                  var n = !1;
                  if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                    return "";
                  if (
                    ((void 0 === i || i > this.length) && (i = this.length),
                    i <= 0)
                  )
                    return "";
                  if ((i >>>= 0) <= (e >>>= 0)) return "";
                  for (t || (t = "utf8"); ; )
                    switch (t) {
                      case "hex":
                        return _(this, e, i);
                      case "utf8":
                      case "utf-8":
                        return w(this, e, i);
                      case "ascii":
                        return F(this, e, i);
                      case "latin1":
                      case "binary":
                        return k(this, e, i);
                      case "base64":
                        return b(this, e, i);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return T(this, e, i);
                      default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        (t = (t + "").toLowerCase()), (n = !0);
                    }
                }.apply(this, arguments);
          }),
          (u.prototype.equals = function(t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function() {
            var t = "",
              i = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, i)
                  .match(/.{2}/g)
                  .join(" ")),
                this.length > i && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (u.prototype.compare = function(t, e, i, n, r) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === i && (i = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === r && (r = this.length),
              e < 0 || i > t.length || n < 0 || r > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= r && e >= i) return 0;
            if (n >= r) return -1;
            if (e >= i) return 1;
            if (this === t) return 0;
            for (
              var s = (r >>>= 0) - (n >>>= 0),
                a = (i >>>= 0) - (e >>>= 0),
                o = Math.min(s, a),
                h = this.slice(n, r),
                c = t.slice(e, i),
                l = 0;
              l < o;
              ++l
            )
              if (h[l] !== c[l]) {
                (s = h[l]), (a = c[l]);
                break;
              }
            return s < a ? -1 : a < s ? 1 : 0;
          }),
          (u.prototype.includes = function(t, e, i) {
            return -1 !== this.indexOf(t, e, i);
          }),
          (u.prototype.indexOf = function(t, e, i) {
            return y(this, t, e, i, !0);
          }),
          (u.prototype.lastIndexOf = function(t, e, i) {
            return y(this, t, e, i, !1);
          }),
          (u.prototype.write = function(t, e, i, n) {
            if (void 0 === e) (n = "utf8"), (i = this.length), (e = 0);
            else if (void 0 === i && "string" == typeof e)
              (n = e), (i = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(i)
                  ? ((i |= 0), void 0 === n && (n = "utf8"))
                  : ((n = i), (i = void 0));
            }
            var r = this.length - e;
            if (
              ((void 0 === i || i > r) && (i = r),
              (t.length > 0 && (i < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var s = !1; ; )
              switch (n) {
                case "hex":
                  return g(this, t, e, i);
                case "utf8":
                case "utf-8":
                  return v(this, t, e, i);
                case "ascii":
                  return D(this, t, e, i);
                case "latin1":
                case "binary":
                  return E(this, t, e, i);
                case "base64":
                  return A(this, t, e, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return C(this, t, e, i);
                default:
                  if (s) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (s = !0);
              }
          }),
          (u.prototype.toJSON = function() {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          });
        var S = 4096;
        function F(t, e, i) {
          var n = "";
          i = Math.min(t.length, i);
          for (var r = e; r < i; ++r) n += String.fromCharCode(127 & t[r]);
          return n;
        }
        function k(t, e, i) {
          var n = "";
          i = Math.min(t.length, i);
          for (var r = e; r < i; ++r) n += String.fromCharCode(t[r]);
          return n;
        }
        function _(t, e, i) {
          var n = t.length;
          (!e || e < 0) && (e = 0), (!i || i < 0 || i > n) && (i = n);
          for (var r = "", s = e; s < i; ++s) r += U(t[s]);
          return r;
        }
        function T(t, e, i) {
          for (var n = t.slice(e, i), r = "", s = 0; s < n.length; s += 2)
            r += String.fromCharCode(n[s] + 256 * n[s + 1]);
          return r;
        }
        function B(t, e, i) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > i)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function N(t, e, i, n, r, s) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > r || e < s)
            throw new RangeError('"value" argument is out of bounds');
          if (i + n > t.length) throw new RangeError("Index out of range");
        }
        function P(t, e, i, n) {
          e < 0 && (e = 65535 + e + 1);
          for (var r = 0, s = Math.min(t.length - i, 2); r < s; ++r)
            t[i + r] =
              (e & (255 << (8 * (n ? r : 1 - r)))) >>> (8 * (n ? r : 1 - r));
        }
        function I(t, e, i, n) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var r = 0, s = Math.min(t.length - i, 4); r < s; ++r)
            t[i + r] = (e >>> (8 * (n ? r : 3 - r))) & 255;
        }
        function M(t, e, i, n, r, s) {
          if (i + n > t.length) throw new RangeError("Index out of range");
          if (i < 0) throw new RangeError("Index out of range");
        }
        function O(t, e, i, n, s) {
          return s || M(t, 0, i, 4), r.write(t, e, i, n, 23, 4), i + 4;
        }
        function R(t, e, i, n, s) {
          return s || M(t, 0, i, 8), r.write(t, e, i, n, 52, 8), i + 8;
        }
        (u.prototype.slice = function(t, e) {
          var i,
            n = this.length;
          if (
            ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0
              ? (e += n) < 0 && (e = 0)
              : e > n && (e = n),
            e < t && (e = t),
            u.TYPED_ARRAY_SUPPORT)
          )
            (i = this.subarray(t, e)).__proto__ = u.prototype;
          else {
            var r = e - t;
            i = new u(r, void 0);
            for (var s = 0; s < r; ++s) i[s] = this[s + t];
          }
          return i;
        }),
          (u.prototype.readUIntLE = function(t, e, i) {
            (t |= 0), (e |= 0), i || B(t, e, this.length);
            for (var n = this[t], r = 1, s = 0; ++s < e && (r *= 256); )
              n += this[t + s] * r;
            return n;
          }),
          (u.prototype.readUIntBE = function(t, e, i) {
            (t |= 0), (e |= 0), i || B(t, e, this.length);
            for (var n = this[t + --e], r = 1; e > 0 && (r *= 256); )
              n += this[t + --e] * r;
            return n;
          }),
          (u.prototype.readUInt8 = function(t, e) {
            return e || B(t, 1, this.length), this[t];
          }),
          (u.prototype.readUInt16LE = function(t, e) {
            return e || B(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function(t, e) {
            return e || B(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (u.prototype.readUInt32LE = function(t, e) {
            return (
              e || B(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (u.prototype.readUInt32BE = function(t, e) {
            return (
              e || B(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (u.prototype.readIntLE = function(t, e, i) {
            (t |= 0), (e |= 0), i || B(t, e, this.length);
            for (var n = this[t], r = 1, s = 0; ++s < e && (r *= 256); )
              n += this[t + s] * r;
            return n >= (r *= 128) && (n -= Math.pow(2, 8 * e)), n;
          }),
          (u.prototype.readIntBE = function(t, e, i) {
            (t |= 0), (e |= 0), i || B(t, e, this.length);
            for (var n = e, r = 1, s = this[t + --n]; n > 0 && (r *= 256); )
              s += this[t + --n] * r;
            return s >= (r *= 128) && (s -= Math.pow(2, 8 * e)), s;
          }),
          (u.prototype.readInt8 = function(t, e) {
            return (
              e || B(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function(t, e) {
            e || B(t, 2, this.length);
            var i = this[t] | (this[t + 1] << 8);
            return 32768 & i ? 4294901760 | i : i;
          }),
          (u.prototype.readInt16BE = function(t, e) {
            e || B(t, 2, this.length);
            var i = this[t + 1] | (this[t] << 8);
            return 32768 & i ? 4294901760 | i : i;
          }),
          (u.prototype.readInt32LE = function(t, e) {
            return (
              e || B(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function(t, e) {
            return (
              e || B(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readFloatLE = function(t, e) {
            return e || B(t, 4, this.length), r.read(this, t, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function(t, e) {
            return e || B(t, 4, this.length), r.read(this, t, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function(t, e) {
            return e || B(t, 8, this.length), r.read(this, t, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function(t, e) {
            return e || B(t, 8, this.length), r.read(this, t, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function(t, e, i, n) {
            ((t = +t), (e |= 0), (i |= 0), n) ||
              N(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
            var r = 1,
              s = 0;
            for (this[e] = 255 & t; ++s < i && (r *= 256); )
              this[e + s] = (t / r) & 255;
            return e + i;
          }),
          (u.prototype.writeUIntBE = function(t, e, i, n) {
            ((t = +t), (e |= 0), (i |= 0), n) ||
              N(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
            var r = i - 1,
              s = 1;
            for (this[e + r] = 255 & t; --r >= 0 && (s *= 256); )
              this[e + r] = (t / s) & 255;
            return e + i;
          }),
          (u.prototype.writeUInt8 = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeUInt16LE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : P(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeUInt16BE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : P(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeUInt32LE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : I(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeUInt32BE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : I(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeIntLE = function(t, e, i, n) {
            if (((t = +t), (e |= 0), !n)) {
              var r = Math.pow(2, 8 * i - 1);
              N(this, t, e, i, r - 1, -r);
            }
            var s = 0,
              a = 1,
              o = 0;
            for (this[e] = 255 & t; ++s < i && (a *= 256); )
              t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1),
                (this[e + s] = (((t / a) >> 0) - o) & 255);
            return e + i;
          }),
          (u.prototype.writeIntBE = function(t, e, i, n) {
            if (((t = +t), (e |= 0), !n)) {
              var r = Math.pow(2, 8 * i - 1);
              N(this, t, e, i, r - 1, -r);
            }
            var s = i - 1,
              a = 1,
              o = 0;
            for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); )
              t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1),
                (this[e + s] = (((t / a) >> 0) - o) & 255);
            return e + i;
          }),
          (u.prototype.writeInt8 = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : P(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : P(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : I(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function(t, e, i) {
            return (
              (t = +t),
              (e |= 0),
              i || N(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : I(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeFloatLE = function(t, e, i) {
            return O(this, t, e, !0, i);
          }),
          (u.prototype.writeFloatBE = function(t, e, i) {
            return O(this, t, e, !1, i);
          }),
          (u.prototype.writeDoubleLE = function(t, e, i) {
            return R(this, t, e, !0, i);
          }),
          (u.prototype.writeDoubleBE = function(t, e, i) {
            return R(this, t, e, !1, i);
          }),
          (u.prototype.copy = function(t, e, i, n) {
            if (
              (i || (i = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < i && (n = i),
              n === i)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (i < 0 || i >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              t.length - e < n - i && (n = t.length - e + i);
            var r,
              s = n - i;
            if (this === t && i < e && e < n)
              for (r = s - 1; r >= 0; --r) t[r + e] = this[r + i];
            else if (s < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (r = 0; r < s; ++r) t[r + e] = this[r + i];
            else Uint8Array.prototype.set.call(t, this.subarray(i, i + s), e);
            return s;
          }),
          (u.prototype.fill = function(t, e, i, n) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((n = e), (e = 0), (i = this.length))
                  : "string" == typeof i && ((n = i), (i = this.length)),
                1 === t.length)
              ) {
                var r = t.charCodeAt(0);
                r < 256 && (t = r);
              }
              if (void 0 !== n && "string" != typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < i)
              throw new RangeError("Out of range index");
            if (i <= e) return this;
            var s;
            if (
              ((e >>>= 0),
              (i = void 0 === i ? this.length : i >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (s = e; s < i; ++s) this[s] = t;
            else {
              var a = u.isBuffer(t) ? t : z(new u(t, n).toString()),
                o = a.length;
              for (s = 0; s < i - e; ++s) this[s + e] = a[s % o];
            }
            return this;
          });
        var L = /[^+\/0-9A-Za-z-_]/g;
        function U(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function z(t, e) {
          var i;
          e = e || 1 / 0;
          for (var n = t.length, r = null, s = [], a = 0; a < n; ++a) {
            if ((i = t.charCodeAt(a)) > 55295 && i < 57344) {
              if (!r) {
                if (i > 56319) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === n) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                r = i;
                continue;
              }
              if (i < 56320) {
                (e -= 3) > -1 && s.push(239, 191, 189), (r = i);
                continue;
              }
              i = 65536 + (((r - 55296) << 10) | (i - 56320));
            } else r && (e -= 3) > -1 && s.push(239, 191, 189);
            if (((r = null), i < 128)) {
              if ((e -= 1) < 0) break;
              s.push(i);
            } else if (i < 2048) {
              if ((e -= 2) < 0) break;
              s.push((i >> 6) | 192, (63 & i) | 128);
            } else if (i < 65536) {
              if ((e -= 3) < 0) break;
              s.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
            } else {
              if (!(i < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              s.push(
                (i >> 18) | 240,
                ((i >> 12) & 63) | 128,
                ((i >> 6) & 63) | 128,
                (63 & i) | 128
              );
            }
          }
          return s;
        }
        function X(t) {
          return n.toByteArray(
            (function(t) {
              if (
                (t = (function(t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(L, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function j(t, e, i, n) {
          for (var r = 0; r < n && !(r + i >= e.length || r >= t.length); ++r)
            e[r + i] = t[r];
          return r;
        }
      }.call(this, i(155)));
    },
    function(t, e) {
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) &&
          (n = window);
      }
      t.exports = n;
    },
    function(t, e, i) {
      "use strict";
      (e.byteLength = function(t) {
        var e = h(t),
          i = e[0],
          n = e[1];
        return (3 * (i + n)) / 4 - n;
      }),
        (e.toByteArray = function(t) {
          for (
            var e,
              i = h(t),
              n = i[0],
              a = i[1],
              o = new s(
                (function(t, e, i) {
                  return (3 * (e + i)) / 4 - i;
                })(0, n, a)
              ),
              u = 0,
              c = a > 0 ? n - 4 : n,
              l = 0;
            l < c;
            l += 4
          )
            (e =
              (r[t.charCodeAt(l)] << 18) |
              (r[t.charCodeAt(l + 1)] << 12) |
              (r[t.charCodeAt(l + 2)] << 6) |
              r[t.charCodeAt(l + 3)]),
              (o[u++] = (e >> 16) & 255),
              (o[u++] = (e >> 8) & 255),
              (o[u++] = 255 & e);
          2 === a &&
            ((e = (r[t.charCodeAt(l)] << 2) | (r[t.charCodeAt(l + 1)] >> 4)),
            (o[u++] = 255 & e));
          1 === a &&
            ((e =
              (r[t.charCodeAt(l)] << 10) |
              (r[t.charCodeAt(l + 1)] << 4) |
              (r[t.charCodeAt(l + 2)] >> 2)),
            (o[u++] = (e >> 8) & 255),
            (o[u++] = 255 & e));
          return o;
        }),
        (e.fromByteArray = function(t) {
          for (
            var e, i = t.length, r = i % 3, s = [], a = 0, o = i - r;
            a < o;
            a += 16383
          )
            s.push(c(t, a, a + 16383 > o ? o : a + 16383));
          1 === r
            ? ((e = t[i - 1]), s.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
            : 2 === r &&
              ((e = (t[i - 2] << 8) + t[i - 1]),
              s.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
          return s.join("");
        });
      for (
        var n = [],
          r = [],
          s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          o = 0,
          u = a.length;
        o < u;
        ++o
      )
        (n[o] = a[o]), (r[a.charCodeAt(o)] = o);
      function h(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var i = t.indexOf("=");
        return -1 === i && (i = e), [i, i === e ? 0 : 4 - (i % 4)];
      }
      function c(t, e, i) {
        for (var r, s, a = [], o = e; o < i; o += 3)
          (r =
            ((t[o] << 16) & 16711680) +
            ((t[o + 1] << 8) & 65280) +
            (255 & t[o + 2])),
            a.push(
              n[((s = r) >> 18) & 63] +
                n[(s >> 12) & 63] +
                n[(s >> 6) & 63] +
                n[63 & s]
            );
        return a.join("");
      }
      (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
    },
    function(t, e) {
      (e.read = function(t, e, i, n, r) {
        var s,
          a,
          o = 8 * r - n - 1,
          u = (1 << o) - 1,
          h = u >> 1,
          c = -7,
          l = i ? r - 1 : 0,
          p = i ? -1 : 1,
          f = t[e + l];
        for (
          l += p, s = f & ((1 << -c) - 1), f >>= -c, c += o;
          c > 0;
          s = 256 * s + t[e + l], l += p, c -= 8
        );
        for (
          a = s & ((1 << -c) - 1), s >>= -c, c += n;
          c > 0;
          a = 256 * a + t[e + l], l += p, c -= 8
        );
        if (0 === s) s = 1 - h;
        else {
          if (s === u) return a ? NaN : (1 / 0) * (f ? -1 : 1);
          (a += Math.pow(2, n)), (s -= h);
        }
        return (f ? -1 : 1) * a * Math.pow(2, s - n);
      }),
        (e.write = function(t, e, i, n, r, s) {
          var a,
            o,
            u,
            h = 8 * s - r - 1,
            c = (1 << h) - 1,
            l = c >> 1,
            p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            f = n ? 0 : s - 1,
            d = n ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((o = isNaN(e) ? 1 : 0), (a = c))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  (e += a + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 &&
                    (a++, (u /= 2)),
                  a + l >= c
                    ? ((o = 0), (a = c))
                    : a + l >= 1
                    ? ((o = (e * u - 1) * Math.pow(2, r)), (a += l))
                    : ((o = e * Math.pow(2, l - 1) * Math.pow(2, r)), (a = 0)));
            r >= 8;
            t[i + f] = 255 & o, f += d, o /= 256, r -= 8
          );
          for (
            a = (a << r) | o, h += r;
            h > 0;
            t[i + f] = 255 & a, f += d, a /= 256, h -= 8
          );
          t[i + f - d] |= 128 * m;
        });
    },
    function(t, e) {
      var i = {}.toString;
      t.exports =
        Array.isArray ||
        function(t) {
          return "[object Array]" == i.call(t);
        };
    },
    function(t, e, i) {
      "use strict";
      var n = i(14),
        r = Object.prototype.hasOwnProperty,
        s = Object.prototype.toString;
      t.exports = new n("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: function(t) {
          if (null === t) return !0;
          var e,
            i,
            n,
            a,
            o,
            u = [],
            h = t;
          for (e = 0, i = h.length; e < i; e += 1) {
            if (((n = h[e]), (o = !1), "[object Object]" !== s.call(n)))
              return !1;
            for (a in n)
              if (r.call(n, a)) {
                if (o) return !1;
                o = !0;
              }
            if (!o) return !1;
            if (-1 !== u.indexOf(a)) return !1;
            u.push(a);
          }
          return !0;
        },
        construct: function(t) {
          return null !== t ? t : [];
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14),
        r = Object.prototype.toString;
      t.exports = new n("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: function(t) {
          if (null === t) return !0;
          var e,
            i,
            n,
            s,
            a,
            o = t;
          for (a = new Array(o.length), e = 0, i = o.length; e < i; e += 1) {
            if (((n = o[e]), "[object Object]" !== r.call(n))) return !1;
            if (1 !== (s = Object.keys(n)).length) return !1;
            a[e] = [s[0], n[s[0]]];
          }
          return !0;
        },
        construct: function(t) {
          if (null === t) return [];
          var e,
            i,
            n,
            r,
            s,
            a = t;
          for (s = new Array(a.length), e = 0, i = a.length; e < i; e += 1)
            (n = a[e]), (r = Object.keys(n)), (s[e] = [r[0], n[r[0]]]);
          return s;
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14),
        r = Object.prototype.hasOwnProperty;
      t.exports = new n("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: function(t) {
          if (null === t) return !0;
          var e,
            i = t;
          for (e in i) if (r.call(i, e) && null !== i[e]) return !1;
          return !0;
        },
        construct: function(t) {
          return null !== t ? t : {};
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:js/undefined", {
        kind: "scalar",
        resolve: function() {
          return !0;
        },
        construct: function() {},
        predicate: function(t) {
          return void 0 === t;
        },
        represent: function() {
          return "";
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n = i(14);
      t.exports = new n("tag:yaml.org,2002:js/regexp", {
        kind: "scalar",
        resolve: function(t) {
          if (null === t) return !1;
          if (0 === t.length) return !1;
          var e = t,
            i = /\/([gim]*)$/.exec(t),
            n = "";
          if ("/" === e[0]) {
            if ((i && (n = i[1]), n.length > 3)) return !1;
            if ("/" !== e[e.length - n.length - 1]) return !1;
          }
          return !0;
        },
        construct: function(t) {
          var e = t,
            i = /\/([gim]*)$/.exec(t),
            n = "";
          return (
            "/" === e[0] &&
              (i && (n = i[1]), (e = e.slice(1, e.length - n.length - 1))),
            new RegExp(e, n)
          );
        },
        predicate: function(t) {
          return "[object RegExp]" === Object.prototype.toString.call(t);
        },
        represent: function(t) {
          var e = "/" + t.source + "/";
          return (
            t.global && (e += "g"),
            t.multiline && (e += "m"),
            t.ignoreCase && (e += "i"),
            e
          );
        }
      });
    },
    function(t, e, i) {
      "use strict";
      var n;
      try {
        n = i(165);
      } catch (s) {
        "undefined" != typeof window && (n = window.esprima);
      }
      var r = i(14);
      t.exports = new r("tag:yaml.org,2002:js/function", {
        kind: "scalar",
        resolve: function(t) {
          if (null === t) return !1;
          try {
            var e = "(" + t + ")",
              i = n.parse(e, { range: !0 });
            return (
              "Program" === i.type &&
              1 === i.body.length &&
              "ExpressionStatement" === i.body[0].type &&
              ("ArrowFunctionExpression" === i.body[0].expression.type ||
                "FunctionExpression" === i.body[0].expression.type)
            );
          } catch (r) {
            return !1;
          }
        },
        construct: function(t) {
          var e,
            i = "(" + t + ")",
            r = n.parse(i, { range: !0 }),
            s = [];
          if (
            "Program" !== r.type ||
            1 !== r.body.length ||
            "ExpressionStatement" !== r.body[0].type ||
            ("ArrowFunctionExpression" !== r.body[0].expression.type &&
              "FunctionExpression" !== r.body[0].expression.type)
          )
            throw new Error("Failed to resolve function");
          return (
            r.body[0].expression.params.forEach(function(t) {
              s.push(t.name);
            }),
            (e = r.body[0].expression.body.range),
            "BlockStatement" === r.body[0].expression.body.type
              ? new Function(s, i.slice(e[0] + 1, e[1] - 1))
              : new Function(s, "return " + i.slice(e[0], e[1]))
          );
        },
        predicate: function(t) {
          return "[object Function]" === Object.prototype.toString.call(t);
        },
        represent: function(t) {
          return t.toString();
        }
      });
    },
    function(t, e, i) {
      (function(t) {
        var i, n, r, s;
        function a(t) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        (s = function() {
          return (function(t) {
            var e = {};
            function i(n) {
              if (e[n]) return e[n].exports;
              var r = (e[n] = { exports: {}, id: n, loaded: !1 });
              return (
                t[n].call(r.exports, r, r.exports, i),
                (r.loaded = !0),
                r.exports
              );
            }
            return (i.m = t), (i.c = e), (i.p = ""), i(0);
          })([
            function(t, e, i) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = i(1),
                r = i(3),
                s = i(8),
                a = i(15);
              function o(t, e, i) {
                var a = null,
                  o = function(t, e) {
                    i && i(t, e), a && a.visit(t, e);
                  },
                  u = "function" == typeof i ? o : null,
                  h = !1;
                if (e) {
                  h = "boolean" == typeof e.comment && e.comment;
                  var c =
                    "boolean" == typeof e.attachComment && e.attachComment;
                  (h || c) &&
                    (((a = new n.CommentHandler()).attach = c),
                    (e.comment = !0),
                    (u = o));
                }
                var l,
                  p = !1;
                e &&
                  "string" == typeof e.sourceType &&
                  (p = "module" === e.sourceType),
                  (l =
                    e && "boolean" == typeof e.jsx && e.jsx
                      ? new r.JSXParser(t, e, u)
                      : new s.Parser(t, e, u));
                var f = p ? l.parseModule() : l.parseScript();
                return (
                  h && a && (f.comments = a.comments),
                  l.config.tokens && (f.tokens = l.tokens),
                  l.config.tolerant && (f.errors = l.errorHandler.errors),
                  f
                );
              }
              (e.parse = o),
                (e.parseModule = function(t, e, i) {
                  var n = e || {};
                  return (n.sourceType = "module"), o(t, n, i);
                }),
                (e.parseScript = function(t, e, i) {
                  var n = e || {};
                  return (n.sourceType = "script"), o(t, n, i);
                }),
                (e.tokenize = function(t, e, i) {
                  var n,
                    r = new a.Tokenizer(t, e);
                  n = [];
                  try {
                    for (;;) {
                      var s = r.getNextToken();
                      if (!s) break;
                      i && (s = i(s)), n.push(s);
                    }
                  } catch (o) {
                    r.errorHandler.tolerate(o);
                  }
                  return r.errorHandler.tolerant && (n.errors = r.errors()), n;
                });
              var u = i(2);
              (e.Syntax = u.Syntax), (e.version = "4.0.1");
            },
            function(t, e, i) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = i(2),
                r = (function() {
                  function t() {
                    (this.attach = !1),
                      (this.comments = []),
                      (this.stack = []),
                      (this.leading = []),
                      (this.trailing = []);
                  }
                  return (
                    (t.prototype.insertInnerComments = function(t, e) {
                      if (
                        t.type === n.Syntax.BlockStatement &&
                        0 === t.body.length
                      ) {
                        for (
                          var i = [], r = this.leading.length - 1;
                          r >= 0;
                          --r
                        ) {
                          var s = this.leading[r];
                          e.end.offset >= s.start &&
                            (i.unshift(s.comment),
                            this.leading.splice(r, 1),
                            this.trailing.splice(r, 1));
                        }
                        i.length && (t.innerComments = i);
                      }
                    }),
                    (t.prototype.findTrailingComments = function(t) {
                      var e = [];
                      if (this.trailing.length > 0) {
                        for (var i = this.trailing.length - 1; i >= 0; --i) {
                          var n = this.trailing[i];
                          n.start >= t.end.offset && e.unshift(n.comment);
                        }
                        return (this.trailing.length = 0), e;
                      }
                      var r = this.stack[this.stack.length - 1];
                      if (r && r.node.trailingComments) {
                        var s = r.node.trailingComments[0];
                        s &&
                          s.range[0] >= t.end.offset &&
                          ((e = r.node.trailingComments),
                          delete r.node.trailingComments);
                      }
                      return e;
                    }),
                    (t.prototype.findLeadingComments = function(t) {
                      for (var e, i = []; this.stack.length > 0; ) {
                        if (
                          !(
                            (s = this.stack[this.stack.length - 1]) &&
                            s.start >= t.start.offset
                          )
                        )
                          break;
                        (e = s.node), this.stack.pop();
                      }
                      if (e) {
                        for (
                          var n =
                            (e.leadingComments ? e.leadingComments.length : 0) -
                            1;
                          n >= 0;
                          --n
                        ) {
                          var r = e.leadingComments[n];
                          r.range[1] <= t.start.offset &&
                            (i.unshift(r), e.leadingComments.splice(n, 1));
                        }
                        return (
                          e.leadingComments &&
                            0 === e.leadingComments.length &&
                            delete e.leadingComments,
                          i
                        );
                      }
                      for (n = this.leading.length - 1; n >= 0; --n) {
                        var s;
                        (s = this.leading[n]).start <= t.start.offset &&
                          (i.unshift(s.comment), this.leading.splice(n, 1));
                      }
                      return i;
                    }),
                    (t.prototype.visitNode = function(t, e) {
                      if (!(t.type === n.Syntax.Program && t.body.length > 0)) {
                        this.insertInnerComments(t, e);
                        var i = this.findTrailingComments(e),
                          r = this.findLeadingComments(e);
                        r.length > 0 && (t.leadingComments = r),
                          i.length > 0 && (t.trailingComments = i),
                          this.stack.push({ node: t, start: e.start.offset });
                      }
                    }),
                    (t.prototype.visitComment = function(t, e) {
                      var i = "L" === t.type[0] ? "Line" : "Block",
                        n = { type: i, value: t.value };
                      if (
                        (t.range && (n.range = t.range),
                        t.loc && (n.loc = t.loc),
                        this.comments.push(n),
                        this.attach)
                      ) {
                        var r = {
                          comment: {
                            type: i,
                            value: t.value,
                            range: [e.start.offset, e.end.offset]
                          },
                          start: e.start.offset
                        };
                        t.loc && (r.comment.loc = t.loc),
                          (t.type = i),
                          this.leading.push(r),
                          this.trailing.push(r);
                      }
                    }),
                    (t.prototype.visit = function(t, e) {
                      "LineComment" === t.type
                        ? this.visitComment(t, e)
                        : "BlockComment" === t.type
                        ? this.visitComment(t, e)
                        : this.attach && this.visitNode(t, e);
                    }),
                    t
                  );
                })();
              e.CommentHandler = r;
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.Syntax = {
                  AssignmentExpression: "AssignmentExpression",
                  AssignmentPattern: "AssignmentPattern",
                  ArrayExpression: "ArrayExpression",
                  ArrayPattern: "ArrayPattern",
                  ArrowFunctionExpression: "ArrowFunctionExpression",
                  AwaitExpression: "AwaitExpression",
                  BlockStatement: "BlockStatement",
                  BinaryExpression: "BinaryExpression",
                  BreakStatement: "BreakStatement",
                  CallExpression: "CallExpression",
                  CatchClause: "CatchClause",
                  ClassBody: "ClassBody",
                  ClassDeclaration: "ClassDeclaration",
                  ClassExpression: "ClassExpression",
                  ConditionalExpression: "ConditionalExpression",
                  ContinueStatement: "ContinueStatement",
                  DoWhileStatement: "DoWhileStatement",
                  DebuggerStatement: "DebuggerStatement",
                  EmptyStatement: "EmptyStatement",
                  ExportAllDeclaration: "ExportAllDeclaration",
                  ExportDefaultDeclaration: "ExportDefaultDeclaration",
                  ExportNamedDeclaration: "ExportNamedDeclaration",
                  ExportSpecifier: "ExportSpecifier",
                  ExpressionStatement: "ExpressionStatement",
                  ForStatement: "ForStatement",
                  ForOfStatement: "ForOfStatement",
                  ForInStatement: "ForInStatement",
                  FunctionDeclaration: "FunctionDeclaration",
                  FunctionExpression: "FunctionExpression",
                  Identifier: "Identifier",
                  IfStatement: "IfStatement",
                  ImportDeclaration: "ImportDeclaration",
                  ImportDefaultSpecifier: "ImportDefaultSpecifier",
                  ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                  ImportSpecifier: "ImportSpecifier",
                  Literal: "Literal",
                  LabeledStatement: "LabeledStatement",
                  LogicalExpression: "LogicalExpression",
                  MemberExpression: "MemberExpression",
                  MetaProperty: "MetaProperty",
                  MethodDefinition: "MethodDefinition",
                  NewExpression: "NewExpression",
                  ObjectExpression: "ObjectExpression",
                  ObjectPattern: "ObjectPattern",
                  Program: "Program",
                  Property: "Property",
                  RestElement: "RestElement",
                  ReturnStatement: "ReturnStatement",
                  SequenceExpression: "SequenceExpression",
                  SpreadElement: "SpreadElement",
                  Super: "Super",
                  SwitchCase: "SwitchCase",
                  SwitchStatement: "SwitchStatement",
                  TaggedTemplateExpression: "TaggedTemplateExpression",
                  TemplateElement: "TemplateElement",
                  TemplateLiteral: "TemplateLiteral",
                  ThisExpression: "ThisExpression",
                  ThrowStatement: "ThrowStatement",
                  TryStatement: "TryStatement",
                  UnaryExpression: "UnaryExpression",
                  UpdateExpression: "UpdateExpression",
                  VariableDeclaration: "VariableDeclaration",
                  VariableDeclarator: "VariableDeclarator",
                  WhileStatement: "WhileStatement",
                  WithStatement: "WithStatement",
                  YieldExpression: "YieldExpression"
                });
            },
            function(t, e, i) {
              "use strict";
              var n,
                r =
                  (this && this.__extends) ||
                  ((n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function(t, e) {
                        t.__proto__ = e;
                      }) ||
                    function(t, e) {
                      for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                    }),
                  function(t, e) {
                    function i() {
                      this.constructor = t;
                    }
                    n(t, e),
                      (t.prototype =
                        null === e
                          ? Object.create(e)
                          : ((i.prototype = e.prototype), new i()));
                  });
              Object.defineProperty(e, "__esModule", { value: !0 });
              var s = i(4),
                a = i(5),
                o = i(6),
                u = i(7),
                h = i(8),
                c = i(13),
                l = i(14);
              function p(t) {
                var e;
                switch (t.type) {
                  case o.JSXSyntax.JSXIdentifier:
                    e = t.name;
                    break;
                  case o.JSXSyntax.JSXNamespacedName:
                    var i = t;
                    e = p(i.namespace) + ":" + p(i.name);
                    break;
                  case o.JSXSyntax.JSXMemberExpression:
                    var n = t;
                    e = p(n.object) + "." + p(n.property);
                }
                return e;
              }
              (c.TokenName[100] = "JSXIdentifier"),
                (c.TokenName[101] = "JSXText");
              var f = (function(t) {
                function e(e, i, n) {
                  return t.call(this, e, i, n) || this;
                }
                return (
                  r(e, t),
                  (e.prototype.parsePrimaryExpression = function() {
                    return this.match("<")
                      ? this.parseJSXRoot()
                      : t.prototype.parsePrimaryExpression.call(this);
                  }),
                  (e.prototype.startJSX = function() {
                    (this.scanner.index = this.startMarker.index),
                      (this.scanner.lineNumber = this.startMarker.line),
                      (this.scanner.lineStart =
                        this.startMarker.index - this.startMarker.column);
                  }),
                  (e.prototype.finishJSX = function() {
                    this.nextToken();
                  }),
                  (e.prototype.reenterJSX = function() {
                    this.startJSX(),
                      this.expectJSX("}"),
                      this.config.tokens && this.tokens.pop();
                  }),
                  (e.prototype.createJSXNode = function() {
                    return (
                      this.collectComments(),
                      {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                      }
                    );
                  }),
                  (e.prototype.createJSXChildNode = function() {
                    return {
                      index: this.scanner.index,
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart
                    };
                  }),
                  (e.prototype.scanXHTMLEntity = function(t) {
                    for (
                      var e = "&", i = !0, n = !1, r = !1, a = !1;
                      !this.scanner.eof() && i && !n;

                    ) {
                      var o = this.scanner.source[this.scanner.index];
                      if (o === t) break;
                      if (((n = ";" === o), (e += o), ++this.scanner.index, !n))
                        switch (e.length) {
                          case 2:
                            r = "#" === o;
                            break;
                          case 3:
                            r &&
                              ((i =
                                (a = "x" === o) ||
                                s.Character.isDecimalDigit(o.charCodeAt(0))),
                              (r = r && !a));
                            break;
                          default:
                            i =
                              (i =
                                i &&
                                !(
                                  r &&
                                  !s.Character.isDecimalDigit(o.charCodeAt(0))
                                )) &&
                              !(a && !s.Character.isHexDigit(o.charCodeAt(0)));
                        }
                    }
                    if (i && n && e.length > 2) {
                      var u = e.substr(1, e.length - 2);
                      r && u.length > 1
                        ? (e = String.fromCharCode(parseInt(u.substr(1), 10)))
                        : a && u.length > 2
                        ? (e = String.fromCharCode(
                            parseInt("0" + u.substr(1), 16)
                          ))
                        : r ||
                          a ||
                          !l.XHTMLEntities[u] ||
                          (e = l.XHTMLEntities[u]);
                    }
                    return e;
                  }),
                  (e.prototype.lexJSX = function() {
                    var t = this.scanner.source.charCodeAt(this.scanner.index);
                    if (
                      60 === t ||
                      62 === t ||
                      47 === t ||
                      58 === t ||
                      61 === t ||
                      123 === t ||
                      125 === t
                    )
                      return {
                        type: 7,
                        value: (o = this.scanner.source[this.scanner.index++]),
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: this.scanner.index - 1,
                        end: this.scanner.index
                      };
                    if (34 === t || 39 === t) {
                      for (
                        var e = this.scanner.index,
                          i = this.scanner.source[this.scanner.index++],
                          n = "";
                        !this.scanner.eof();

                      ) {
                        if (
                          (u = this.scanner.source[this.scanner.index++]) === i
                        )
                          break;
                        n += "&" === u ? this.scanXHTMLEntity(i) : u;
                      }
                      return {
                        type: 8,
                        value: n,
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: e,
                        end: this.scanner.index
                      };
                    }
                    if (46 === t) {
                      var r = this.scanner.source.charCodeAt(
                          this.scanner.index + 1
                        ),
                        a = this.scanner.source.charCodeAt(
                          this.scanner.index + 2
                        ),
                        o = 46 === r && 46 === a ? "..." : ".";
                      e = this.scanner.index;
                      return (
                        (this.scanner.index += o.length),
                        {
                          type: 7,
                          value: o,
                          lineNumber: this.scanner.lineNumber,
                          lineStart: this.scanner.lineStart,
                          start: e,
                          end: this.scanner.index
                        }
                      );
                    }
                    if (96 === t)
                      return {
                        type: 10,
                        value: "",
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: this.scanner.index,
                        end: this.scanner.index
                      };
                    if (s.Character.isIdentifierStart(t) && 92 !== t) {
                      e = this.scanner.index;
                      for (++this.scanner.index; !this.scanner.eof(); ) {
                        var u = this.scanner.source.charCodeAt(
                          this.scanner.index
                        );
                        if (s.Character.isIdentifierPart(u) && 92 !== u)
                          ++this.scanner.index;
                        else {
                          if (45 !== u) break;
                          ++this.scanner.index;
                        }
                      }
                      return {
                        type: 100,
                        value: this.scanner.source.slice(e, this.scanner.index),
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: e,
                        end: this.scanner.index
                      };
                    }
                    return this.scanner.lex();
                  }),
                  (e.prototype.nextJSXToken = function() {
                    this.collectComments(),
                      (this.startMarker.index = this.scanner.index),
                      (this.startMarker.line = this.scanner.lineNumber),
                      (this.startMarker.column =
                        this.scanner.index - this.scanner.lineStart);
                    var t = this.lexJSX();
                    return (
                      (this.lastMarker.index = this.scanner.index),
                      (this.lastMarker.line = this.scanner.lineNumber),
                      (this.lastMarker.column =
                        this.scanner.index - this.scanner.lineStart),
                      this.config.tokens &&
                        this.tokens.push(this.convertToken(t)),
                      t
                    );
                  }),
                  (e.prototype.nextJSXText = function() {
                    (this.startMarker.index = this.scanner.index),
                      (this.startMarker.line = this.scanner.lineNumber),
                      (this.startMarker.column =
                        this.scanner.index - this.scanner.lineStart);
                    for (
                      var t = this.scanner.index, e = "";
                      !this.scanner.eof();

                    ) {
                      var i = this.scanner.source[this.scanner.index];
                      if ("{" === i || "<" === i) break;
                      ++this.scanner.index,
                        (e += i),
                        s.Character.isLineTerminator(i.charCodeAt(0)) &&
                          (++this.scanner.lineNumber,
                          "\r" === i &&
                            "\n" === this.scanner.source[this.scanner.index] &&
                            ++this.scanner.index,
                          (this.scanner.lineStart = this.scanner.index));
                    }
                    (this.lastMarker.index = this.scanner.index),
                      (this.lastMarker.line = this.scanner.lineNumber),
                      (this.lastMarker.column =
                        this.scanner.index - this.scanner.lineStart);
                    var n = {
                      type: 101,
                      value: e,
                      lineNumber: this.scanner.lineNumber,
                      lineStart: this.scanner.lineStart,
                      start: t,
                      end: this.scanner.index
                    };
                    return (
                      e.length > 0 &&
                        this.config.tokens &&
                        this.tokens.push(this.convertToken(n)),
                      n
                    );
                  }),
                  (e.prototype.peekJSXToken = function() {
                    var t = this.scanner.saveState();
                    this.scanner.scanComments();
                    var e = this.lexJSX();
                    return this.scanner.restoreState(t), e;
                  }),
                  (e.prototype.expectJSX = function(t) {
                    var e = this.nextJSXToken();
                    (7 === e.type && e.value === t) ||
                      this.throwUnexpectedToken(e);
                  }),
                  (e.prototype.matchJSX = function(t) {
                    var e = this.peekJSXToken();
                    return 7 === e.type && e.value === t;
                  }),
                  (e.prototype.parseJSXIdentifier = function() {
                    var t = this.createJSXNode(),
                      e = this.nextJSXToken();
                    return (
                      100 !== e.type && this.throwUnexpectedToken(e),
                      this.finalize(t, new a.JSXIdentifier(e.value))
                    );
                  }),
                  (e.prototype.parseJSXElementName = function() {
                    var t = this.createJSXNode(),
                      e = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                      var i = e;
                      this.expectJSX(":");
                      var n = this.parseJSXIdentifier();
                      e = this.finalize(t, new a.JSXNamespacedName(i, n));
                    } else if (this.matchJSX("."))
                      for (; this.matchJSX("."); ) {
                        var r = e;
                        this.expectJSX(".");
                        var s = this.parseJSXIdentifier();
                        e = this.finalize(t, new a.JSXMemberExpression(r, s));
                      }
                    return e;
                  }),
                  (e.prototype.parseJSXAttributeName = function() {
                    var t,
                      e = this.createJSXNode(),
                      i = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                      var n = i;
                      this.expectJSX(":");
                      var r = this.parseJSXIdentifier();
                      t = this.finalize(e, new a.JSXNamespacedName(n, r));
                    } else t = i;
                    return t;
                  }),
                  (e.prototype.parseJSXStringLiteralAttribute = function() {
                    var t = this.createJSXNode(),
                      e = this.nextJSXToken();
                    8 !== e.type && this.throwUnexpectedToken(e);
                    var i = this.getTokenRaw(e);
                    return this.finalize(t, new u.Literal(e.value, i));
                  }),
                  (e.prototype.parseJSXExpressionAttribute = function() {
                    var t = this.createJSXNode();
                    this.expectJSX("{"),
                      this.finishJSX(),
                      this.match("}") &&
                        this.tolerateError(
                          "JSX attributes must only be assigned a non-empty expression"
                        );
                    var e = this.parseAssignmentExpression();
                    return (
                      this.reenterJSX(),
                      this.finalize(t, new a.JSXExpressionContainer(e))
                    );
                  }),
                  (e.prototype.parseJSXAttributeValue = function() {
                    return this.matchJSX("{")
                      ? this.parseJSXExpressionAttribute()
                      : this.matchJSX("<")
                      ? this.parseJSXElement()
                      : this.parseJSXStringLiteralAttribute();
                  }),
                  (e.prototype.parseJSXNameValueAttribute = function() {
                    var t = this.createJSXNode(),
                      e = this.parseJSXAttributeName(),
                      i = null;
                    return (
                      this.matchJSX("=") &&
                        (this.expectJSX("="),
                        (i = this.parseJSXAttributeValue())),
                      this.finalize(t, new a.JSXAttribute(e, i))
                    );
                  }),
                  (e.prototype.parseJSXSpreadAttribute = function() {
                    var t = this.createJSXNode();
                    this.expectJSX("{"),
                      this.expectJSX("..."),
                      this.finishJSX();
                    var e = this.parseAssignmentExpression();
                    return (
                      this.reenterJSX(),
                      this.finalize(t, new a.JSXSpreadAttribute(e))
                    );
                  }),
                  (e.prototype.parseJSXAttributes = function() {
                    for (
                      var t = [];
                      !this.matchJSX("/") && !this.matchJSX(">");

                    ) {
                      var e = this.matchJSX("{")
                        ? this.parseJSXSpreadAttribute()
                        : this.parseJSXNameValueAttribute();
                      t.push(e);
                    }
                    return t;
                  }),
                  (e.prototype.parseJSXOpeningElement = function() {
                    var t = this.createJSXNode();
                    this.expectJSX("<");
                    var e = this.parseJSXElementName(),
                      i = this.parseJSXAttributes(),
                      n = this.matchJSX("/");
                    return (
                      n && this.expectJSX("/"),
                      this.expectJSX(">"),
                      this.finalize(t, new a.JSXOpeningElement(e, n, i))
                    );
                  }),
                  (e.prototype.parseJSXBoundaryElement = function() {
                    var t = this.createJSXNode();
                    if ((this.expectJSX("<"), this.matchJSX("/"))) {
                      this.expectJSX("/");
                      var e = this.parseJSXElementName();
                      return (
                        this.expectJSX(">"),
                        this.finalize(t, new a.JSXClosingElement(e))
                      );
                    }
                    var i = this.parseJSXElementName(),
                      n = this.parseJSXAttributes(),
                      r = this.matchJSX("/");
                    return (
                      r && this.expectJSX("/"),
                      this.expectJSX(">"),
                      this.finalize(t, new a.JSXOpeningElement(i, r, n))
                    );
                  }),
                  (e.prototype.parseJSXEmptyExpression = function() {
                    var t = this.createJSXChildNode();
                    return (
                      this.collectComments(),
                      (this.lastMarker.index = this.scanner.index),
                      (this.lastMarker.line = this.scanner.lineNumber),
                      (this.lastMarker.column =
                        this.scanner.index - this.scanner.lineStart),
                      this.finalize(t, new a.JSXEmptyExpression())
                    );
                  }),
                  (e.prototype.parseJSXExpressionContainer = function() {
                    var t,
                      e = this.createJSXNode();
                    return (
                      this.expectJSX("{"),
                      this.matchJSX("}")
                        ? ((t = this.parseJSXEmptyExpression()),
                          this.expectJSX("}"))
                        : (this.finishJSX(),
                          (t = this.parseAssignmentExpression()),
                          this.reenterJSX()),
                      this.finalize(e, new a.JSXExpressionContainer(t))
                    );
                  }),
                  (e.prototype.parseJSXChildren = function() {
                    for (var t = []; !this.scanner.eof(); ) {
                      var e = this.createJSXChildNode(),
                        i = this.nextJSXText();
                      if (i.start < i.end) {
                        var n = this.getTokenRaw(i),
                          r = this.finalize(e, new a.JSXText(i.value, n));
                        t.push(r);
                      }
                      if ("{" !== this.scanner.source[this.scanner.index])
                        break;
                      var s = this.parseJSXExpressionContainer();
                      t.push(s);
                    }
                    return t;
                  }),
                  (e.prototype.parseComplexJSXElement = function(t) {
                    for (var e = []; !this.scanner.eof(); ) {
                      t.children = t.children.concat(this.parseJSXChildren());
                      var i = this.createJSXChildNode(),
                        n = this.parseJSXBoundaryElement();
                      if (n.type === o.JSXSyntax.JSXOpeningElement) {
                        var r = n;
                        if (r.selfClosing) {
                          var s = this.finalize(
                            i,
                            new a.JSXElement(r, [], null)
                          );
                          t.children.push(s);
                        } else
                          e.push(t),
                            (t = {
                              node: i,
                              opening: r,
                              closing: null,
                              children: []
                            });
                      }
                      if (n.type === o.JSXSyntax.JSXClosingElement) {
                        t.closing = n;
                        var u = p(t.opening.name);
                        if (
                          (u !== p(t.closing.name) &&
                            this.tolerateError(
                              "Expected corresponding JSX closing tag for %0",
                              u
                            ),
                          !(e.length > 0))
                        )
                          break;
                        s = this.finalize(
                          t.node,
                          new a.JSXElement(t.opening, t.children, t.closing)
                        );
                        (t = e[e.length - 1]).children.push(s), e.pop();
                      }
                    }
                    return t;
                  }),
                  (e.prototype.parseJSXElement = function() {
                    var t = this.createJSXNode(),
                      e = this.parseJSXOpeningElement(),
                      i = [],
                      n = null;
                    if (!e.selfClosing) {
                      var r = this.parseComplexJSXElement({
                        node: t,
                        opening: e,
                        closing: n,
                        children: i
                      });
                      (i = r.children), (n = r.closing);
                    }
                    return this.finalize(t, new a.JSXElement(e, i, n));
                  }),
                  (e.prototype.parseJSXRoot = function() {
                    this.config.tokens && this.tokens.pop(), this.startJSX();
                    var t = this.parseJSXElement();
                    return this.finishJSX(), t;
                  }),
                  (e.prototype.isStartOfExpression = function() {
                    return (
                      t.prototype.isStartOfExpression.call(this) ||
                      this.match("<")
                    );
                  }),
                  e
                );
              })(h.Parser);
              e.JSXParser = f;
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
              };
              e.Character = {
                fromCodePoint: function(t) {
                  return t < 65536
                    ? String.fromCharCode(t)
                    : String.fromCharCode(55296 + ((t - 65536) >> 10)) +
                        String.fromCharCode(56320 + ((t - 65536) & 1023));
                },
                isWhiteSpace: function(t) {
                  return (
                    32 === t ||
                    9 === t ||
                    11 === t ||
                    12 === t ||
                    160 === t ||
                    (t >= 5760 &&
                      [
                        5760,
                        8192,
                        8193,
                        8194,
                        8195,
                        8196,
                        8197,
                        8198,
                        8199,
                        8200,
                        8201,
                        8202,
                        8239,
                        8287,
                        12288,
                        65279
                      ].indexOf(t) >= 0)
                  );
                },
                isLineTerminator: function(t) {
                  return 10 === t || 13 === t || 8232 === t || 8233 === t;
                },
                isIdentifierStart: function(t) {
                  return (
                    36 === t ||
                    95 === t ||
                    (t >= 65 && t <= 90) ||
                    (t >= 97 && t <= 122) ||
                    92 === t ||
                    (t >= 128 &&
                      i.NonAsciiIdentifierStart.test(
                        e.Character.fromCodePoint(t)
                      ))
                  );
                },
                isIdentifierPart: function(t) {
                  return (
                    36 === t ||
                    95 === t ||
                    (t >= 65 && t <= 90) ||
                    (t >= 97 && t <= 122) ||
                    (t >= 48 && t <= 57) ||
                    92 === t ||
                    (t >= 128 &&
                      i.NonAsciiIdentifierPart.test(
                        e.Character.fromCodePoint(t)
                      ))
                  );
                },
                isDecimalDigit: function(t) {
                  return t >= 48 && t <= 57;
                },
                isHexDigit: function(t) {
                  return (
                    (t >= 48 && t <= 57) ||
                    (t >= 65 && t <= 70) ||
                    (t >= 97 && t <= 102)
                  );
                },
                isOctalDigit: function(t) {
                  return t >= 48 && t <= 55;
                }
              };
            },
            function(t, e, i) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = i(6),
                r = (function() {
                  return function(t) {
                    (this.type = n.JSXSyntax.JSXClosingElement),
                      (this.name = t);
                  };
                })();
              e.JSXClosingElement = r;
              var s = (function() {
                return function(t, e, i) {
                  (this.type = n.JSXSyntax.JSXElement),
                    (this.openingElement = t),
                    (this.children = e),
                    (this.closingElement = i);
                };
              })();
              e.JSXElement = s;
              var a = (function() {
                return function() {
                  this.type = n.JSXSyntax.JSXEmptyExpression;
                };
              })();
              e.JSXEmptyExpression = a;
              var o = (function() {
                return function(t) {
                  (this.type = n.JSXSyntax.JSXExpressionContainer),
                    (this.expression = t);
                };
              })();
              e.JSXExpressionContainer = o;
              var u = (function() {
                return function(t) {
                  (this.type = n.JSXSyntax.JSXIdentifier), (this.name = t);
                };
              })();
              e.JSXIdentifier = u;
              var h = (function() {
                return function(t, e) {
                  (this.type = n.JSXSyntax.JSXMemberExpression),
                    (this.object = t),
                    (this.property = e);
                };
              })();
              e.JSXMemberExpression = h;
              var c = (function() {
                return function(t, e) {
                  (this.type = n.JSXSyntax.JSXAttribute),
                    (this.name = t),
                    (this.value = e);
                };
              })();
              e.JSXAttribute = c;
              var l = (function() {
                return function(t, e) {
                  (this.type = n.JSXSyntax.JSXNamespacedName),
                    (this.namespace = t),
                    (this.name = e);
                };
              })();
              e.JSXNamespacedName = l;
              var p = (function() {
                return function(t, e, i) {
                  (this.type = n.JSXSyntax.JSXOpeningElement),
                    (this.name = t),
                    (this.selfClosing = e),
                    (this.attributes = i);
                };
              })();
              e.JSXOpeningElement = p;
              var f = (function() {
                return function(t) {
                  (this.type = n.JSXSyntax.JSXSpreadAttribute),
                    (this.argument = t);
                };
              })();
              e.JSXSpreadAttribute = f;
              var d = (function() {
                return function(t, e) {
                  (this.type = n.JSXSyntax.JSXText),
                    (this.value = t),
                    (this.raw = e);
                };
              })();
              e.JSXText = d;
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.JSXSyntax = {
                  JSXAttribute: "JSXAttribute",
                  JSXClosingElement: "JSXClosingElement",
                  JSXElement: "JSXElement",
                  JSXEmptyExpression: "JSXEmptyExpression",
                  JSXExpressionContainer: "JSXExpressionContainer",
                  JSXIdentifier: "JSXIdentifier",
                  JSXMemberExpression: "JSXMemberExpression",
                  JSXNamespacedName: "JSXNamespacedName",
                  JSXOpeningElement: "JSXOpeningElement",
                  JSXSpreadAttribute: "JSXSpreadAttribute",
                  JSXText: "JSXText"
                });
            },
            function(t, e, i) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = i(2),
                r = (function() {
                  return function(t) {
                    (this.type = n.Syntax.ArrayExpression), (this.elements = t);
                  };
                })();
              e.ArrayExpression = r;
              var s = (function() {
                return function(t) {
                  (this.type = n.Syntax.ArrayPattern), (this.elements = t);
                };
              })();
              e.ArrayPattern = s;
              var a = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ArrowFunctionExpression),
                    (this.id = null),
                    (this.params = t),
                    (this.body = e),
                    (this.generator = !1),
                    (this.expression = i),
                    (this.async = !1);
                };
              })();
              e.ArrowFunctionExpression = a;
              var o = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.AssignmentExpression),
                    (this.operator = t),
                    (this.left = e),
                    (this.right = i);
                };
              })();
              e.AssignmentExpression = o;
              var u = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.AssignmentPattern),
                    (this.left = t),
                    (this.right = e);
                };
              })();
              e.AssignmentPattern = u;
              var h = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ArrowFunctionExpression),
                    (this.id = null),
                    (this.params = t),
                    (this.body = e),
                    (this.generator = !1),
                    (this.expression = i),
                    (this.async = !0);
                };
              })();
              e.AsyncArrowFunctionExpression = h;
              var c = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.FunctionDeclaration),
                    (this.id = t),
                    (this.params = e),
                    (this.body = i),
                    (this.generator = !1),
                    (this.expression = !1),
                    (this.async = !0);
                };
              })();
              e.AsyncFunctionDeclaration = c;
              var l = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.FunctionExpression),
                    (this.id = t),
                    (this.params = e),
                    (this.body = i),
                    (this.generator = !1),
                    (this.expression = !1),
                    (this.async = !0);
                };
              })();
              e.AsyncFunctionExpression = l;
              var p = (function() {
                return function(t) {
                  (this.type = n.Syntax.AwaitExpression), (this.argument = t);
                };
              })();
              e.AwaitExpression = p;
              var f = (function() {
                return function(t, e, i) {
                  var r = "||" === t || "&&" === t;
                  (this.type = r
                    ? n.Syntax.LogicalExpression
                    : n.Syntax.BinaryExpression),
                    (this.operator = t),
                    (this.left = e),
                    (this.right = i);
                };
              })();
              e.BinaryExpression = f;
              var d = (function() {
                return function(t) {
                  (this.type = n.Syntax.BlockStatement), (this.body = t);
                };
              })();
              e.BlockStatement = d;
              var m = (function() {
                return function(t) {
                  (this.type = n.Syntax.BreakStatement), (this.label = t);
                };
              })();
              e.BreakStatement = m;
              var y = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.CallExpression),
                    (this.callee = t),
                    (this.arguments = e);
                };
              })();
              e.CallExpression = y;
              var x = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.CatchClause),
                    (this.param = t),
                    (this.body = e);
                };
              })();
              e.CatchClause = x;
              var g = (function() {
                return function(t) {
                  (this.type = n.Syntax.ClassBody), (this.body = t);
                };
              })();
              e.ClassBody = g;
              var v = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ClassDeclaration),
                    (this.id = t),
                    (this.superClass = e),
                    (this.body = i);
                };
              })();
              e.ClassDeclaration = v;
              var D = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ClassExpression),
                    (this.id = t),
                    (this.superClass = e),
                    (this.body = i);
                };
              })();
              e.ClassExpression = D;
              var E = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.MemberExpression),
                    (this.computed = !0),
                    (this.object = t),
                    (this.property = e);
                };
              })();
              e.ComputedMemberExpression = E;
              var A = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ConditionalExpression),
                    (this.test = t),
                    (this.consequent = e),
                    (this.alternate = i);
                };
              })();
              e.ConditionalExpression = A;
              var C = (function() {
                return function(t) {
                  (this.type = n.Syntax.ContinueStatement), (this.label = t);
                };
              })();
              e.ContinueStatement = C;
              var b = (function() {
                return function() {
                  this.type = n.Syntax.DebuggerStatement;
                };
              })();
              e.DebuggerStatement = b;
              var w = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.ExpressionStatement),
                    (this.expression = t),
                    (this.directive = e);
                };
              })();
              e.Directive = w;
              var S = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.DoWhileStatement),
                    (this.body = t),
                    (this.test = e);
                };
              })();
              e.DoWhileStatement = S;
              var F = (function() {
                return function() {
                  this.type = n.Syntax.EmptyStatement;
                };
              })();
              e.EmptyStatement = F;
              var k = (function() {
                return function(t) {
                  (this.type = n.Syntax.ExportAllDeclaration),
                    (this.source = t);
                };
              })();
              e.ExportAllDeclaration = k;
              var _ = (function() {
                return function(t) {
                  (this.type = n.Syntax.ExportDefaultDeclaration),
                    (this.declaration = t);
                };
              })();
              e.ExportDefaultDeclaration = _;
              var T = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ExportNamedDeclaration),
                    (this.declaration = t),
                    (this.specifiers = e),
                    (this.source = i);
                };
              })();
              e.ExportNamedDeclaration = T;
              var B = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.ExportSpecifier),
                    (this.exported = e),
                    (this.local = t);
                };
              })();
              e.ExportSpecifier = B;
              var N = (function() {
                return function(t) {
                  (this.type = n.Syntax.ExpressionStatement),
                    (this.expression = t);
                };
              })();
              e.ExpressionStatement = N;
              var P = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ForInStatement),
                    (this.left = t),
                    (this.right = e),
                    (this.body = i),
                    (this.each = !1);
                };
              })();
              e.ForInStatement = P;
              var I = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.ForOfStatement),
                    (this.left = t),
                    (this.right = e),
                    (this.body = i);
                };
              })();
              e.ForOfStatement = I;
              var M = (function() {
                return function(t, e, i, r) {
                  (this.type = n.Syntax.ForStatement),
                    (this.init = t),
                    (this.test = e),
                    (this.update = i),
                    (this.body = r);
                };
              })();
              e.ForStatement = M;
              var O = (function() {
                return function(t, e, i, r) {
                  (this.type = n.Syntax.FunctionDeclaration),
                    (this.id = t),
                    (this.params = e),
                    (this.body = i),
                    (this.generator = r),
                    (this.expression = !1),
                    (this.async = !1);
                };
              })();
              e.FunctionDeclaration = O;
              var R = (function() {
                return function(t, e, i, r) {
                  (this.type = n.Syntax.FunctionExpression),
                    (this.id = t),
                    (this.params = e),
                    (this.body = i),
                    (this.generator = r),
                    (this.expression = !1),
                    (this.async = !1);
                };
              })();
              e.FunctionExpression = R;
              var L = (function() {
                return function(t) {
                  (this.type = n.Syntax.Identifier), (this.name = t);
                };
              })();
              e.Identifier = L;
              var U = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.IfStatement),
                    (this.test = t),
                    (this.consequent = e),
                    (this.alternate = i);
                };
              })();
              e.IfStatement = U;
              var z = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.ImportDeclaration),
                    (this.specifiers = t),
                    (this.source = e);
                };
              })();
              e.ImportDeclaration = z;
              var X = (function() {
                return function(t) {
                  (this.type = n.Syntax.ImportDefaultSpecifier),
                    (this.local = t);
                };
              })();
              e.ImportDefaultSpecifier = X;
              var j = (function() {
                return function(t) {
                  (this.type = n.Syntax.ImportNamespaceSpecifier),
                    (this.local = t);
                };
              })();
              e.ImportNamespaceSpecifier = j;
              var J = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.ImportSpecifier),
                    (this.local = t),
                    (this.imported = e);
                };
              })();
              e.ImportSpecifier = J;
              var K = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.LabeledStatement),
                    (this.label = t),
                    (this.body = e);
                };
              })();
              e.LabeledStatement = K;
              var H = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.Literal),
                    (this.value = t),
                    (this.raw = e);
                };
              })();
              e.Literal = H;
              var Y = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.MetaProperty),
                    (this.meta = t),
                    (this.property = e);
                };
              })();
              e.MetaProperty = Y;
              var W = (function() {
                return function(t, e, i, r, s) {
                  (this.type = n.Syntax.MethodDefinition),
                    (this.key = t),
                    (this.computed = e),
                    (this.value = i),
                    (this.kind = r),
                    (this.static = s);
                };
              })();
              e.MethodDefinition = W;
              var q = (function() {
                return function(t) {
                  (this.type = n.Syntax.Program),
                    (this.body = t),
                    (this.sourceType = "module");
                };
              })();
              e.Module = q;
              var G = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.NewExpression),
                    (this.callee = t),
                    (this.arguments = e);
                };
              })();
              e.NewExpression = G;
              var $ = (function() {
                return function(t) {
                  (this.type = n.Syntax.ObjectExpression),
                    (this.properties = t);
                };
              })();
              e.ObjectExpression = $;
              var V = (function() {
                return function(t) {
                  (this.type = n.Syntax.ObjectPattern), (this.properties = t);
                };
              })();
              e.ObjectPattern = V;
              var Z = (function() {
                return function(t, e, i, r, s, a) {
                  (this.type = n.Syntax.Property),
                    (this.key = e),
                    (this.computed = i),
                    (this.value = r),
                    (this.kind = t),
                    (this.method = s),
                    (this.shorthand = a);
                };
              })();
              e.Property = Z;
              var Q = (function() {
                return function(t, e, i, r) {
                  (this.type = n.Syntax.Literal),
                    (this.value = t),
                    (this.raw = e),
                    (this.regex = { pattern: i, flags: r });
                };
              })();
              e.RegexLiteral = Q;
              var tt = (function() {
                return function(t) {
                  (this.type = n.Syntax.RestElement), (this.argument = t);
                };
              })();
              e.RestElement = tt;
              var et = (function() {
                return function(t) {
                  (this.type = n.Syntax.ReturnStatement), (this.argument = t);
                };
              })();
              e.ReturnStatement = et;
              var it = (function() {
                return function(t) {
                  (this.type = n.Syntax.Program),
                    (this.body = t),
                    (this.sourceType = "script");
                };
              })();
              e.Script = it;
              var nt = (function() {
                return function(t) {
                  (this.type = n.Syntax.SequenceExpression),
                    (this.expressions = t);
                };
              })();
              e.SequenceExpression = nt;
              var rt = (function() {
                return function(t) {
                  (this.type = n.Syntax.SpreadElement), (this.argument = t);
                };
              })();
              e.SpreadElement = rt;
              var st = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.MemberExpression),
                    (this.computed = !1),
                    (this.object = t),
                    (this.property = e);
                };
              })();
              e.StaticMemberExpression = st;
              var at = (function() {
                return function() {
                  this.type = n.Syntax.Super;
                };
              })();
              e.Super = at;
              var ot = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.SwitchCase),
                    (this.test = t),
                    (this.consequent = e);
                };
              })();
              e.SwitchCase = ot;
              var ut = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.SwitchStatement),
                    (this.discriminant = t),
                    (this.cases = e);
                };
              })();
              e.SwitchStatement = ut;
              var ht = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.TaggedTemplateExpression),
                    (this.tag = t),
                    (this.quasi = e);
                };
              })();
              e.TaggedTemplateExpression = ht;
              var ct = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.TemplateElement),
                    (this.value = t),
                    (this.tail = e);
                };
              })();
              e.TemplateElement = ct;
              var lt = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.TemplateLiteral),
                    (this.quasis = t),
                    (this.expressions = e);
                };
              })();
              e.TemplateLiteral = lt;
              var pt = (function() {
                return function() {
                  this.type = n.Syntax.ThisExpression;
                };
              })();
              e.ThisExpression = pt;
              var ft = (function() {
                return function(t) {
                  (this.type = n.Syntax.ThrowStatement), (this.argument = t);
                };
              })();
              e.ThrowStatement = ft;
              var dt = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.TryStatement),
                    (this.block = t),
                    (this.handler = e),
                    (this.finalizer = i);
                };
              })();
              e.TryStatement = dt;
              var mt = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.UnaryExpression),
                    (this.operator = t),
                    (this.argument = e),
                    (this.prefix = !0);
                };
              })();
              e.UnaryExpression = mt;
              var yt = (function() {
                return function(t, e, i) {
                  (this.type = n.Syntax.UpdateExpression),
                    (this.operator = t),
                    (this.argument = e),
                    (this.prefix = i);
                };
              })();
              e.UpdateExpression = yt;
              var xt = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.VariableDeclaration),
                    (this.declarations = t),
                    (this.kind = e);
                };
              })();
              e.VariableDeclaration = xt;
              var gt = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.VariableDeclarator),
                    (this.id = t),
                    (this.init = e);
                };
              })();
              e.VariableDeclarator = gt;
              var vt = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.WhileStatement),
                    (this.test = t),
                    (this.body = e);
                };
              })();
              e.WhileStatement = vt;
              var Dt = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.WithStatement),
                    (this.object = t),
                    (this.body = e);
                };
              })();
              e.WithStatement = Dt;
              var Et = (function() {
                return function(t, e) {
                  (this.type = n.Syntax.YieldExpression),
                    (this.argument = t),
                    (this.delegate = e);
                };
              })();
              e.YieldExpression = Et;
            },
            function(t, e, i) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = i(9),
                r = i(10),
                s = i(11),
                a = i(7),
                o = i(12),
                u = i(2),
                h = i(13),
                c = (function() {
                  function t(t, e, i) {
                    void 0 === e && (e = {}),
                      (this.config = {
                        range: "boolean" == typeof e.range && e.range,
                        loc: "boolean" == typeof e.loc && e.loc,
                        source: null,
                        tokens: "boolean" == typeof e.tokens && e.tokens,
                        comment: "boolean" == typeof e.comment && e.comment,
                        tolerant: "boolean" == typeof e.tolerant && e.tolerant
                      }),
                      this.config.loc &&
                        e.source &&
                        null !== e.source &&
                        (this.config.source = String(e.source)),
                      (this.delegate = i),
                      (this.errorHandler = new r.ErrorHandler()),
                      (this.errorHandler.tolerant = this.config.tolerant),
                      (this.scanner = new o.Scanner(t, this.errorHandler)),
                      (this.scanner.trackComment = this.config.comment),
                      (this.operatorPrecedence = {
                        ")": 0,
                        ";": 0,
                        ",": 0,
                        "=": 0,
                        "]": 0,
                        "||": 1,
                        "&&": 2,
                        "|": 3,
                        "^": 4,
                        "&": 5,
                        "==": 6,
                        "!=": 6,
                        "===": 6,
                        "!==": 6,
                        "<": 7,
                        ">": 7,
                        "<=": 7,
                        ">=": 7,
                        "<<": 8,
                        ">>": 8,
                        ">>>": 8,
                        "+": 9,
                        "-": 9,
                        "*": 11,
                        "/": 11,
                        "%": 11
                      }),
                      (this.lookahead = {
                        type: 2,
                        value: "",
                        lineNumber: this.scanner.lineNumber,
                        lineStart: 0,
                        start: 0,
                        end: 0
                      }),
                      (this.hasLineTerminator = !1),
                      (this.context = {
                        isModule: !1,
                        await: !1,
                        allowIn: !0,
                        allowStrictDirective: !0,
                        allowYield: !0,
                        firstCoverInitializedNameError: null,
                        isAssignmentTarget: !1,
                        isBindingElement: !1,
                        inFunctionBody: !1,
                        inIteration: !1,
                        inSwitch: !1,
                        labelSet: {},
                        strict: !1
                      }),
                      (this.tokens = []),
                      (this.startMarker = {
                        index: 0,
                        line: this.scanner.lineNumber,
                        column: 0
                      }),
                      (this.lastMarker = {
                        index: 0,
                        line: this.scanner.lineNumber,
                        column: 0
                      }),
                      this.nextToken(),
                      (this.lastMarker = {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                      });
                  }
                  return (
                    (t.prototype.throwError = function(t) {
                      for (var e = [], i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                      var r = Array.prototype.slice.call(arguments, 1),
                        s = t.replace(/%(\d)/g, function(t, e) {
                          return (
                            n.assert(
                              e < r.length,
                              "Message reference must be in range"
                            ),
                            r[e]
                          );
                        }),
                        a = this.lastMarker.index,
                        o = this.lastMarker.line,
                        u = this.lastMarker.column + 1;
                      throw this.errorHandler.createError(a, o, u, s);
                    }),
                    (t.prototype.tolerateError = function(t) {
                      for (var e = [], i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                      var r = Array.prototype.slice.call(arguments, 1),
                        s = t.replace(/%(\d)/g, function(t, e) {
                          return (
                            n.assert(
                              e < r.length,
                              "Message reference must be in range"
                            ),
                            r[e]
                          );
                        }),
                        a = this.lastMarker.index,
                        o = this.scanner.lineNumber,
                        u = this.lastMarker.column + 1;
                      this.errorHandler.tolerateError(a, o, u, s);
                    }),
                    (t.prototype.unexpectedTokenError = function(t, e) {
                      var i,
                        n = e || s.Messages.UnexpectedToken;
                      if (
                        (t
                          ? (e ||
                              ((n =
                                2 === t.type
                                  ? s.Messages.UnexpectedEOS
                                  : 3 === t.type
                                  ? s.Messages.UnexpectedIdentifier
                                  : 6 === t.type
                                  ? s.Messages.UnexpectedNumber
                                  : 8 === t.type
                                  ? s.Messages.UnexpectedString
                                  : 10 === t.type
                                  ? s.Messages.UnexpectedTemplate
                                  : s.Messages.UnexpectedToken),
                              4 === t.type &&
                                (this.scanner.isFutureReservedWord(t.value)
                                  ? (n = s.Messages.UnexpectedReserved)
                                  : this.context.strict &&
                                    this.scanner.isStrictModeReservedWord(
                                      t.value
                                    ) &&
                                    (n = s.Messages.StrictReservedWord))),
                            (i = t.value))
                          : (i = "ILLEGAL"),
                        (n = n.replace("%0", i)),
                        t && "number" == typeof t.lineNumber)
                      ) {
                        var r = t.start,
                          a = t.lineNumber,
                          o = this.lastMarker.index - this.lastMarker.column,
                          u = t.start - o + 1;
                        return this.errorHandler.createError(r, a, u, n);
                      }
                      (r = this.lastMarker.index),
                        (a = this.lastMarker.line),
                        (u = this.lastMarker.column + 1);
                      return this.errorHandler.createError(r, a, u, n);
                    }),
                    (t.prototype.throwUnexpectedToken = function(t, e) {
                      throw this.unexpectedTokenError(t, e);
                    }),
                    (t.prototype.tolerateUnexpectedToken = function(t, e) {
                      this.errorHandler.tolerate(
                        this.unexpectedTokenError(t, e)
                      );
                    }),
                    (t.prototype.collectComments = function() {
                      if (this.config.comment) {
                        var t = this.scanner.scanComments();
                        if (t.length > 0 && this.delegate)
                          for (var e = 0; e < t.length; ++e) {
                            var i = t[e],
                              n = void 0;
                            (n = {
                              type: i.multiLine
                                ? "BlockComment"
                                : "LineComment",
                              value: this.scanner.source.slice(
                                i.slice[0],
                                i.slice[1]
                              )
                            }),
                              this.config.range && (n.range = i.range),
                              this.config.loc && (n.loc = i.loc);
                            var r = {
                              start: {
                                line: i.loc.start.line,
                                column: i.loc.start.column,
                                offset: i.range[0]
                              },
                              end: {
                                line: i.loc.end.line,
                                column: i.loc.end.column,
                                offset: i.range[1]
                              }
                            };
                            this.delegate(n, r);
                          }
                      } else this.scanner.scanComments();
                    }),
                    (t.prototype.getTokenRaw = function(t) {
                      return this.scanner.source.slice(t.start, t.end);
                    }),
                    (t.prototype.convertToken = function(t) {
                      var e = {
                        type: h.TokenName[t.type],
                        value: this.getTokenRaw(t)
                      };
                      if (
                        (this.config.range && (e.range = [t.start, t.end]),
                        this.config.loc &&
                          (e.loc = {
                            start: {
                              line: this.startMarker.line,
                              column: this.startMarker.column
                            },
                            end: {
                              line: this.scanner.lineNumber,
                              column:
                                this.scanner.index - this.scanner.lineStart
                            }
                          }),
                        9 === t.type)
                      ) {
                        var i = t.pattern,
                          n = t.flags;
                        e.regex = { pattern: i, flags: n };
                      }
                      return e;
                    }),
                    (t.prototype.nextToken = function() {
                      var t = this.lookahead;
                      (this.lastMarker.index = this.scanner.index),
                        (this.lastMarker.line = this.scanner.lineNumber),
                        (this.lastMarker.column =
                          this.scanner.index - this.scanner.lineStart),
                        this.collectComments(),
                        this.scanner.index !== this.startMarker.index &&
                          ((this.startMarker.index = this.scanner.index),
                          (this.startMarker.line = this.scanner.lineNumber),
                          (this.startMarker.column =
                            this.scanner.index - this.scanner.lineStart));
                      var e = this.scanner.lex();
                      return (
                        (this.hasLineTerminator =
                          t.lineNumber !== e.lineNumber),
                        e &&
                          this.context.strict &&
                          3 === e.type &&
                          this.scanner.isStrictModeReservedWord(e.value) &&
                          (e.type = 4),
                        (this.lookahead = e),
                        this.config.tokens &&
                          2 !== e.type &&
                          this.tokens.push(this.convertToken(e)),
                        t
                      );
                    }),
                    (t.prototype.nextRegexToken = function() {
                      this.collectComments();
                      var t = this.scanner.scanRegExp();
                      return (
                        this.config.tokens &&
                          (this.tokens.pop(),
                          this.tokens.push(this.convertToken(t))),
                        (this.lookahead = t),
                        this.nextToken(),
                        t
                      );
                    }),
                    (t.prototype.createNode = function() {
                      return {
                        index: this.startMarker.index,
                        line: this.startMarker.line,
                        column: this.startMarker.column
                      };
                    }),
                    (t.prototype.startNode = function(t, e) {
                      void 0 === e && (e = 0);
                      var i = t.start - t.lineStart,
                        n = t.lineNumber;
                      return (
                        i < 0 && ((i += e), n--),
                        {
                          index: t.start,
                          line: n,
                          column: i
                        }
                      );
                    }),
                    (t.prototype.finalize = function(t, e) {
                      if (
                        (this.config.range &&
                          (e.range = [t.index, this.lastMarker.index]),
                        this.config.loc &&
                          ((e.loc = {
                            start: {
                              line: t.line,
                              column: t.column
                            },
                            end: {
                              line: this.lastMarker.line,
                              column: this.lastMarker.column
                            }
                          }),
                          this.config.source &&
                            (e.loc.source = this.config.source)),
                        this.delegate)
                      ) {
                        var i = {
                          start: {
                            line: t.line,
                            column: t.column,
                            offset: t.index
                          },
                          end: {
                            line: this.lastMarker.line,
                            column: this.lastMarker.column,
                            offset: this.lastMarker.index
                          }
                        };
                        this.delegate(e, i);
                      }
                      return e;
                    }),
                    (t.prototype.expect = function(t) {
                      var e = this.nextToken();
                      (7 === e.type && e.value === t) ||
                        this.throwUnexpectedToken(e);
                    }),
                    (t.prototype.expectCommaSeparator = function() {
                      if (this.config.tolerant) {
                        var t = this.lookahead;
                        7 === t.type && "," === t.value
                          ? this.nextToken()
                          : 7 === t.type && ";" === t.value
                          ? (this.nextToken(), this.tolerateUnexpectedToken(t))
                          : this.tolerateUnexpectedToken(
                              t,
                              s.Messages.UnexpectedToken
                            );
                      } else this.expect(",");
                    }),
                    (t.prototype.expectKeyword = function(t) {
                      var e = this.nextToken();
                      (4 === e.type && e.value === t) ||
                        this.throwUnexpectedToken(e);
                    }),
                    (t.prototype.match = function(t) {
                      return (
                        7 === this.lookahead.type && this.lookahead.value === t
                      );
                    }),
                    (t.prototype.matchKeyword = function(t) {
                      return (
                        4 === this.lookahead.type && this.lookahead.value === t
                      );
                    }),
                    (t.prototype.matchContextualKeyword = function(t) {
                      return (
                        3 === this.lookahead.type && this.lookahead.value === t
                      );
                    }),
                    (t.prototype.matchAssign = function() {
                      if (7 !== this.lookahead.type) return !1;
                      var t = this.lookahead.value;
                      return (
                        "=" === t ||
                        "*=" === t ||
                        "**=" === t ||
                        "/=" === t ||
                        "%=" === t ||
                        "+=" === t ||
                        "-=" === t ||
                        "<<=" === t ||
                        ">>=" === t ||
                        ">>>=" === t ||
                        "&=" === t ||
                        "^=" === t ||
                        "|=" === t
                      );
                    }),
                    (t.prototype.isolateCoverGrammar = function(t) {
                      var e = this.context.isBindingElement,
                        i = this.context.isAssignmentTarget,
                        n = this.context.firstCoverInitializedNameError;
                      (this.context.isBindingElement = !0),
                        (this.context.isAssignmentTarget = !0),
                        (this.context.firstCoverInitializedNameError = null);
                      var r = t.call(this);
                      return (
                        null !== this.context.firstCoverInitializedNameError &&
                          this.throwUnexpectedToken(
                            this.context.firstCoverInitializedNameError
                          ),
                        (this.context.isBindingElement = e),
                        (this.context.isAssignmentTarget = i),
                        (this.context.firstCoverInitializedNameError = n),
                        r
                      );
                    }),
                    (t.prototype.inheritCoverGrammar = function(t) {
                      var e = this.context.isBindingElement,
                        i = this.context.isAssignmentTarget,
                        n = this.context.firstCoverInitializedNameError;
                      (this.context.isBindingElement = !0),
                        (this.context.isAssignmentTarget = !0),
                        (this.context.firstCoverInitializedNameError = null);
                      var r = t.call(this);
                      return (
                        (this.context.isBindingElement =
                          this.context.isBindingElement && e),
                        (this.context.isAssignmentTarget =
                          this.context.isAssignmentTarget && i),
                        (this.context.firstCoverInitializedNameError =
                          n || this.context.firstCoverInitializedNameError),
                        r
                      );
                    }),
                    (t.prototype.consumeSemicolon = function() {
                      this.match(";")
                        ? this.nextToken()
                        : this.hasLineTerminator ||
                          (2 === this.lookahead.type ||
                            this.match("}") ||
                            this.throwUnexpectedToken(this.lookahead),
                          (this.lastMarker.index = this.startMarker.index),
                          (this.lastMarker.line = this.startMarker.line),
                          (this.lastMarker.column = this.startMarker.column));
                    }),
                    (t.prototype.parsePrimaryExpression = function() {
                      var t,
                        e,
                        i,
                        n = this.createNode();
                      switch (this.lookahead.type) {
                        case 3:
                          (this.context.isModule || this.context.await) &&
                            "await" === this.lookahead.value &&
                            this.tolerateUnexpectedToken(this.lookahead),
                            (t = this.matchAsyncFunction()
                              ? this.parseFunctionExpression()
                              : this.finalize(
                                  n,
                                  new a.Identifier(this.nextToken().value)
                                ));
                          break;
                        case 6:
                        case 8:
                          this.context.strict &&
                            this.lookahead.octal &&
                            this.tolerateUnexpectedToken(
                              this.lookahead,
                              s.Messages.StrictOctalLiteral
                            ),
                            (this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1),
                            (e = this.nextToken()),
                            (i = this.getTokenRaw(e)),
                            (t = this.finalize(n, new a.Literal(e.value, i)));
                          break;
                        case 1:
                          (this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1),
                            (e = this.nextToken()),
                            (i = this.getTokenRaw(e)),
                            (t = this.finalize(
                              n,
                              new a.Literal("true" === e.value, i)
                            ));
                          break;
                        case 5:
                          (this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1),
                            (e = this.nextToken()),
                            (i = this.getTokenRaw(e)),
                            (t = this.finalize(n, new a.Literal(null, i)));
                          break;
                        case 10:
                          t = this.parseTemplateLiteral();
                          break;
                        case 7:
                          switch (this.lookahead.value) {
                            case "(":
                              (this.context.isBindingElement = !1),
                                (t = this.inheritCoverGrammar(
                                  this.parseGroupExpression
                                ));
                              break;
                            case "[":
                              t = this.inheritCoverGrammar(
                                this.parseArrayInitializer
                              );
                              break;
                            case "{":
                              t = this.inheritCoverGrammar(
                                this.parseObjectInitializer
                              );
                              break;
                            case "/":
                            case "/=":
                              (this.context.isAssignmentTarget = !1),
                                (this.context.isBindingElement = !1),
                                (this.scanner.index = this.startMarker.index),
                                (e = this.nextRegexToken()),
                                (i = this.getTokenRaw(e)),
                                (t = this.finalize(
                                  n,
                                  new a.RegexLiteral(
                                    e.regex,
                                    i,
                                    e.pattern,
                                    e.flags
                                  )
                                ));
                              break;
                            default:
                              t = this.throwUnexpectedToken(this.nextToken());
                          }
                          break;
                        case 4:
                          !this.context.strict &&
                          this.context.allowYield &&
                          this.matchKeyword("yield")
                            ? (t = this.parseIdentifierName())
                            : !this.context.strict && this.matchKeyword("let")
                            ? (t = this.finalize(
                                n,
                                new a.Identifier(this.nextToken().value)
                              ))
                            : ((this.context.isAssignmentTarget = !1),
                              (this.context.isBindingElement = !1),
                              this.matchKeyword("function")
                                ? (t = this.parseFunctionExpression())
                                : this.matchKeyword("this")
                                ? (this.nextToken(),
                                  (t = this.finalize(
                                    n,
                                    new a.ThisExpression()
                                  )))
                                : (t = this.matchKeyword("class")
                                    ? this.parseClassExpression()
                                    : this.throwUnexpectedToken(
                                        this.nextToken()
                                      )));
                          break;
                        default:
                          t = this.throwUnexpectedToken(this.nextToken());
                      }
                      return t;
                    }),
                    (t.prototype.parseSpreadElement = function() {
                      var t = this.createNode();
                      this.expect("...");
                      var e = this.inheritCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      return this.finalize(t, new a.SpreadElement(e));
                    }),
                    (t.prototype.parseArrayInitializer = function() {
                      var t = this.createNode(),
                        e = [];
                      for (this.expect("["); !this.match("]"); )
                        if (this.match(",")) this.nextToken(), e.push(null);
                        else if (this.match("...")) {
                          var i = this.parseSpreadElement();
                          this.match("]") ||
                            ((this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1),
                            this.expect(",")),
                            e.push(i);
                        } else
                          e.push(
                            this.inheritCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          ),
                            this.match("]") || this.expect(",");
                      return (
                        this.expect("]"),
                        this.finalize(t, new a.ArrayExpression(e))
                      );
                    }),
                    (t.prototype.parsePropertyMethod = function(t) {
                      (this.context.isAssignmentTarget = !1),
                        (this.context.isBindingElement = !1);
                      var e = this.context.strict,
                        i = this.context.allowStrictDirective;
                      this.context.allowStrictDirective = t.simple;
                      var n = this.isolateCoverGrammar(
                        this.parseFunctionSourceElements
                      );
                      return (
                        this.context.strict &&
                          t.firstRestricted &&
                          this.tolerateUnexpectedToken(
                            t.firstRestricted,
                            t.message
                          ),
                        this.context.strict &&
                          t.stricted &&
                          this.tolerateUnexpectedToken(t.stricted, t.message),
                        (this.context.strict = e),
                        (this.context.allowStrictDirective = i),
                        n
                      );
                    }),
                    (t.prototype.parsePropertyMethodFunction = function() {
                      var t = this.createNode(),
                        e = this.context.allowYield;
                      this.context.allowYield = !0;
                      var i = this.parseFormalParameters(),
                        n = this.parsePropertyMethod(i);
                      return (
                        (this.context.allowYield = e),
                        this.finalize(
                          t,
                          new a.FunctionExpression(null, i.params, n, !1)
                        )
                      );
                    }),
                    (t.prototype.parsePropertyMethodAsyncFunction = function() {
                      var t = this.createNode(),
                        e = this.context.allowYield,
                        i = this.context.await;
                      (this.context.allowYield = !1), (this.context.await = !0);
                      var n = this.parseFormalParameters(),
                        r = this.parsePropertyMethod(n);
                      return (
                        (this.context.allowYield = e),
                        (this.context.await = i),
                        this.finalize(
                          t,
                          new a.AsyncFunctionExpression(null, n.params, r)
                        )
                      );
                    }),
                    (t.prototype.parseObjectPropertyKey = function() {
                      var t,
                        e = this.createNode(),
                        i = this.nextToken();
                      switch (i.type) {
                        case 8:
                        case 6:
                          this.context.strict &&
                            i.octal &&
                            this.tolerateUnexpectedToken(
                              i,
                              s.Messages.StrictOctalLiteral
                            );
                          var n = this.getTokenRaw(i);
                          t = this.finalize(e, new a.Literal(i.value, n));
                          break;
                        case 3:
                        case 1:
                        case 5:
                        case 4:
                          t = this.finalize(e, new a.Identifier(i.value));
                          break;
                        case 7:
                          "[" === i.value
                            ? ((t = this.isolateCoverGrammar(
                                this.parseAssignmentExpression
                              )),
                              this.expect("]"))
                            : (t = this.throwUnexpectedToken(i));
                          break;
                        default:
                          t = this.throwUnexpectedToken(i);
                      }
                      return t;
                    }),
                    (t.prototype.isPropertyKey = function(t, e) {
                      return (
                        (t.type === u.Syntax.Identifier && t.name === e) ||
                        (t.type === u.Syntax.Literal && t.value === e)
                      );
                    }),
                    (t.prototype.parseObjectProperty = function(t) {
                      var e,
                        i = this.createNode(),
                        n = this.lookahead,
                        r = null,
                        o = null,
                        u = !1,
                        h = !1,
                        c = !1,
                        l = !1;
                      if (3 === n.type) {
                        var p = n.value;
                        this.nextToken(),
                          (u = this.match("[")),
                          (r = (l = !(
                            this.hasLineTerminator ||
                            "async" !== p ||
                            this.match(":") ||
                            this.match("(") ||
                            this.match("*") ||
                            this.match(",")
                          ))
                            ? this.parseObjectPropertyKey()
                            : this.finalize(i, new a.Identifier(p)));
                      } else
                        this.match("*")
                          ? this.nextToken()
                          : ((u = this.match("[")),
                            (r = this.parseObjectPropertyKey()));
                      var f = this.qualifiedPropertyName(this.lookahead);
                      if (3 === n.type && !l && "get" === n.value && f)
                        (e = "get"),
                          (u = this.match("[")),
                          (r = this.parseObjectPropertyKey()),
                          (this.context.allowYield = !1),
                          (o = this.parseGetterMethod());
                      else if (3 === n.type && !l && "set" === n.value && f)
                        (e = "set"),
                          (u = this.match("[")),
                          (r = this.parseObjectPropertyKey()),
                          (o = this.parseSetterMethod());
                      else if (7 === n.type && "*" === n.value && f)
                        (e = "init"),
                          (u = this.match("[")),
                          (r = this.parseObjectPropertyKey()),
                          (o = this.parseGeneratorMethod()),
                          (h = !0);
                      else if (
                        (r || this.throwUnexpectedToken(this.lookahead),
                        (e = "init"),
                        this.match(":") && !l)
                      )
                        !u &&
                          this.isPropertyKey(r, "__proto__") &&
                          (t.value &&
                            this.tolerateError(
                              s.Messages.DuplicateProtoProperty
                            ),
                          (t.value = !0)),
                          this.nextToken(),
                          (o = this.inheritCoverGrammar(
                            this.parseAssignmentExpression
                          ));
                      else if (this.match("("))
                        (o = l
                          ? this.parsePropertyMethodAsyncFunction()
                          : this.parsePropertyMethodFunction()),
                          (h = !0);
                      else if (3 === n.type) {
                        p = this.finalize(i, new a.Identifier(n.value));
                        if (this.match("=")) {
                          (this.context.firstCoverInitializedNameError = this.lookahead),
                            this.nextToken(),
                            (c = !0);
                          var d = this.isolateCoverGrammar(
                            this.parseAssignmentExpression
                          );
                          o = this.finalize(i, new a.AssignmentPattern(p, d));
                        } else (c = !0), (o = p);
                      } else this.throwUnexpectedToken(this.nextToken());
                      return this.finalize(i, new a.Property(e, r, u, o, h, c));
                    }),
                    (t.prototype.parseObjectInitializer = function() {
                      var t = this.createNode();
                      this.expect("{");
                      for (var e = [], i = { value: !1 }; !this.match("}"); )
                        e.push(this.parseObjectProperty(i)),
                          this.match("}") || this.expectCommaSeparator();
                      return (
                        this.expect("}"),
                        this.finalize(t, new a.ObjectExpression(e))
                      );
                    }),
                    (t.prototype.parseTemplateHead = function() {
                      n.assert(
                        this.lookahead.head,
                        "Template literal must start with a template head"
                      );
                      var t = this.createNode(),
                        e = this.nextToken(),
                        i = e.value,
                        r = e.cooked;
                      return this.finalize(
                        t,
                        new a.TemplateElement({ raw: i, cooked: r }, e.tail)
                      );
                    }),
                    (t.prototype.parseTemplateElement = function() {
                      10 !== this.lookahead.type && this.throwUnexpectedToken();
                      var t = this.createNode(),
                        e = this.nextToken(),
                        i = e.value,
                        n = e.cooked;
                      return this.finalize(
                        t,
                        new a.TemplateElement({ raw: i, cooked: n }, e.tail)
                      );
                    }),
                    (t.prototype.parseTemplateLiteral = function() {
                      var t = this.createNode(),
                        e = [],
                        i = [],
                        n = this.parseTemplateHead();
                      for (i.push(n); !n.tail; )
                        e.push(this.parseExpression()),
                          (n = this.parseTemplateElement()),
                          i.push(n);
                      return this.finalize(t, new a.TemplateLiteral(i, e));
                    }),
                    (t.prototype.reinterpretExpressionAsPattern = function(t) {
                      switch (t.type) {
                        case u.Syntax.Identifier:
                        case u.Syntax.MemberExpression:
                        case u.Syntax.RestElement:
                        case u.Syntax.AssignmentPattern:
                          break;
                        case u.Syntax.SpreadElement:
                          (t.type = u.Syntax.RestElement),
                            this.reinterpretExpressionAsPattern(t.argument);
                          break;
                        case u.Syntax.ArrayExpression:
                          t.type = u.Syntax.ArrayPattern;
                          for (var e = 0; e < t.elements.length; e++)
                            null !== t.elements[e] &&
                              this.reinterpretExpressionAsPattern(
                                t.elements[e]
                              );
                          break;
                        case u.Syntax.ObjectExpression:
                          t.type = u.Syntax.ObjectPattern;
                          for (e = 0; e < t.properties.length; e++)
                            this.reinterpretExpressionAsPattern(
                              t.properties[e].value
                            );
                          break;
                        case u.Syntax.AssignmentExpression:
                          (t.type = u.Syntax.AssignmentPattern),
                            delete t.operator,
                            this.reinterpretExpressionAsPattern(t.left);
                      }
                    }),
                    (t.prototype.parseGroupExpression = function() {
                      var t;
                      if ((this.expect("("), this.match(")")))
                        this.nextToken(),
                          this.match("=>") || this.expect("=>"),
                          (t = {
                            type: "ArrowParameterPlaceHolder",
                            params: [],
                            async: !1
                          });
                      else {
                        var e = this.lookahead,
                          i = [];
                        if (this.match("..."))
                          (t = this.parseRestElement(i)),
                            this.expect(")"),
                            this.match("=>") || this.expect("=>"),
                            (t = {
                              type: "ArrowParameterPlaceHolder",
                              params: [t],
                              async: !1
                            });
                        else {
                          var n = !1;
                          if (
                            ((this.context.isBindingElement = !0),
                            (t = this.inheritCoverGrammar(
                              this.parseAssignmentExpression
                            )),
                            this.match(","))
                          ) {
                            var r = [];
                            for (
                              this.context.isAssignmentTarget = !1, r.push(t);
                              2 !== this.lookahead.type && this.match(",");

                            ) {
                              if ((this.nextToken(), this.match(")"))) {
                                this.nextToken();
                                for (var s = 0; s < r.length; s++)
                                  this.reinterpretExpressionAsPattern(r[s]);
                                (n = !0),
                                  (t = {
                                    type: "ArrowParameterPlaceHolder",
                                    params: r,
                                    async: !1
                                  });
                              } else if (this.match("...")) {
                                this.context.isBindingElement ||
                                  this.throwUnexpectedToken(this.lookahead),
                                  r.push(this.parseRestElement(i)),
                                  this.expect(")"),
                                  this.match("=>") || this.expect("=>"),
                                  (this.context.isBindingElement = !1);
                                for (s = 0; s < r.length; s++)
                                  this.reinterpretExpressionAsPattern(r[s]);
                                (n = !0),
                                  (t = {
                                    type: "ArrowParameterPlaceHolder",
                                    params: r,
                                    async: !1
                                  });
                              } else
                                r.push(
                                  this.inheritCoverGrammar(
                                    this.parseAssignmentExpression
                                  )
                                );
                              if (n) break;
                            }
                            n ||
                              (t = this.finalize(
                                this.startNode(e),
                                new a.SequenceExpression(r)
                              ));
                          }
                          if (!n) {
                            if (
                              (this.expect(")"),
                              this.match("=>") &&
                                (t.type === u.Syntax.Identifier &&
                                  "yield" === t.name &&
                                  ((n = !0),
                                  (t = {
                                    type: "ArrowParameterPlaceHolder",
                                    params: [t],
                                    async: !1
                                  })),
                                !n))
                            ) {
                              if (
                                (this.context.isBindingElement ||
                                  this.throwUnexpectedToken(this.lookahead),
                                t.type === u.Syntax.SequenceExpression)
                              )
                                for (s = 0; s < t.expressions.length; s++)
                                  this.reinterpretExpressionAsPattern(
                                    t.expressions[s]
                                  );
                              else this.reinterpretExpressionAsPattern(t);
                              t = {
                                type: "ArrowParameterPlaceHolder",
                                params:
                                  t.type === u.Syntax.SequenceExpression
                                    ? t.expressions
                                    : [t],
                                async: !1
                              };
                            }
                            this.context.isBindingElement = !1;
                          }
                        }
                      }
                      return t;
                    }),
                    (t.prototype.parseArguments = function() {
                      this.expect("(");
                      var t = [];
                      if (!this.match(")"))
                        for (;;) {
                          var e = this.match("...")
                            ? this.parseSpreadElement()
                            : this.isolateCoverGrammar(
                                this.parseAssignmentExpression
                              );
                          if ((t.push(e), this.match(")"))) break;
                          if ((this.expectCommaSeparator(), this.match(")")))
                            break;
                        }
                      return this.expect(")"), t;
                    }),
                    (t.prototype.isIdentifierName = function(t) {
                      return (
                        3 === t.type ||
                        4 === t.type ||
                        1 === t.type ||
                        5 === t.type
                      );
                    }),
                    (t.prototype.parseIdentifierName = function() {
                      var t = this.createNode(),
                        e = this.nextToken();
                      return (
                        this.isIdentifierName(e) ||
                          this.throwUnexpectedToken(e),
                        this.finalize(t, new a.Identifier(e.value))
                      );
                    }),
                    (t.prototype.parseNewExpression = function() {
                      var t,
                        e = this.createNode(),
                        i = this.parseIdentifierName();
                      if (
                        (n.assert(
                          "new" === i.name,
                          "New expression must start with `new`"
                        ),
                        this.match("."))
                      )
                        if (
                          (this.nextToken(),
                          3 === this.lookahead.type &&
                            this.context.inFunctionBody &&
                            "target" === this.lookahead.value)
                        ) {
                          var r = this.parseIdentifierName();
                          t = new a.MetaProperty(i, r);
                        } else this.throwUnexpectedToken(this.lookahead);
                      else {
                        var s = this.isolateCoverGrammar(
                            this.parseLeftHandSideExpression
                          ),
                          o = this.match("(") ? this.parseArguments() : [];
                        (t = new a.NewExpression(s, o)),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                      }
                      return this.finalize(e, t);
                    }),
                    (t.prototype.parseAsyncArgument = function() {
                      var t = this.parseAssignmentExpression();
                      return (
                        (this.context.firstCoverInitializedNameError = null), t
                      );
                    }),
                    (t.prototype.parseAsyncArguments = function() {
                      this.expect("(");
                      var t = [];
                      if (!this.match(")"))
                        for (;;) {
                          var e = this.match("...")
                            ? this.parseSpreadElement()
                            : this.isolateCoverGrammar(this.parseAsyncArgument);
                          if ((t.push(e), this.match(")"))) break;
                          if ((this.expectCommaSeparator(), this.match(")")))
                            break;
                        }
                      return this.expect(")"), t;
                    }),
                    (t.prototype.parseLeftHandSideExpressionAllowCall = function() {
                      var t,
                        e = this.lookahead,
                        i = this.matchContextualKeyword("async"),
                        n = this.context.allowIn;
                      for (
                        this.context.allowIn = !0,
                          this.matchKeyword("super") &&
                          this.context.inFunctionBody
                            ? ((t = this.createNode()),
                              this.nextToken(),
                              (t = this.finalize(t, new a.Super())),
                              this.match("(") ||
                                this.match(".") ||
                                this.match("[") ||
                                this.throwUnexpectedToken(this.lookahead))
                            : (t = this.inheritCoverGrammar(
                                this.matchKeyword("new")
                                  ? this.parseNewExpression
                                  : this.parsePrimaryExpression
                              ));
                        ;

                      )
                        if (this.match(".")) {
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !0),
                            this.expect(".");
                          var r = this.parseIdentifierName();
                          t = this.finalize(
                            this.startNode(e),
                            new a.StaticMemberExpression(t, r)
                          );
                        } else if (this.match("(")) {
                          var s =
                            i && e.lineNumber === this.lookahead.lineNumber;
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !1);
                          var o = s
                            ? this.parseAsyncArguments()
                            : this.parseArguments();
                          if (
                            ((t = this.finalize(
                              this.startNode(e),
                              new a.CallExpression(t, o)
                            )),
                            s && this.match("=>"))
                          ) {
                            for (var u = 0; u < o.length; ++u)
                              this.reinterpretExpressionAsPattern(o[u]);
                            t = {
                              type: "ArrowParameterPlaceHolder",
                              params: o,
                              async: !0
                            };
                          }
                        } else if (this.match("[")) {
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !0),
                            this.expect("[");
                          r = this.isolateCoverGrammar(this.parseExpression);
                          this.expect("]"),
                            (t = this.finalize(
                              this.startNode(e),
                              new a.ComputedMemberExpression(t, r)
                            ));
                        } else {
                          if (
                            10 !== this.lookahead.type ||
                            !this.lookahead.head
                          )
                            break;
                          var h = this.parseTemplateLiteral();
                          t = this.finalize(
                            this.startNode(e),
                            new a.TaggedTemplateExpression(t, h)
                          );
                        }
                      return (this.context.allowIn = n), t;
                    }),
                    (t.prototype.parseSuper = function() {
                      var t = this.createNode();
                      return (
                        this.expectKeyword("super"),
                        this.match("[") ||
                          this.match(".") ||
                          this.throwUnexpectedToken(this.lookahead),
                        this.finalize(t, new a.Super())
                      );
                    }),
                    (t.prototype.parseLeftHandSideExpression = function() {
                      n.assert(
                        this.context.allowIn,
                        "callee of new expression always allow in keyword."
                      );
                      for (
                        var t = this.startNode(this.lookahead),
                          e =
                            this.matchKeyword("super") &&
                            this.context.inFunctionBody
                              ? this.parseSuper()
                              : this.inheritCoverGrammar(
                                  this.matchKeyword("new")
                                    ? this.parseNewExpression
                                    : this.parsePrimaryExpression
                                );
                        ;

                      )
                        if (this.match("[")) {
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !0),
                            this.expect("[");
                          var i = this.isolateCoverGrammar(
                            this.parseExpression
                          );
                          this.expect("]"),
                            (e = this.finalize(
                              t,
                              new a.ComputedMemberExpression(e, i)
                            ));
                        } else if (this.match(".")) {
                          (this.context.isBindingElement = !1),
                            (this.context.isAssignmentTarget = !0),
                            this.expect(".");
                          i = this.parseIdentifierName();
                          e = this.finalize(
                            t,
                            new a.StaticMemberExpression(e, i)
                          );
                        } else {
                          if (
                            10 !== this.lookahead.type ||
                            !this.lookahead.head
                          )
                            break;
                          var r = this.parseTemplateLiteral();
                          e = this.finalize(
                            t,
                            new a.TaggedTemplateExpression(e, r)
                          );
                        }
                      return e;
                    }),
                    (t.prototype.parseUpdateExpression = function() {
                      var t,
                        e = this.lookahead;
                      if (this.match("++") || this.match("--")) {
                        var i = this.startNode(e),
                          n = this.nextToken();
                        (t = this.inheritCoverGrammar(
                          this.parseUnaryExpression
                        )),
                          this.context.strict &&
                            t.type === u.Syntax.Identifier &&
                            this.scanner.isRestrictedWord(t.name) &&
                            this.tolerateError(s.Messages.StrictLHSPrefix),
                          this.context.isAssignmentTarget ||
                            this.tolerateError(
                              s.Messages.InvalidLHSInAssignment
                            );
                        var r = !0;
                        (t = this.finalize(
                          i,
                          new a.UpdateExpression(n.value, t, r)
                        )),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                      } else if (
                        ((t = this.inheritCoverGrammar(
                          this.parseLeftHandSideExpressionAllowCall
                        )),
                        !this.hasLineTerminator &&
                          7 === this.lookahead.type &&
                          (this.match("++") || this.match("--")))
                      ) {
                        this.context.strict &&
                          t.type === u.Syntax.Identifier &&
                          this.scanner.isRestrictedWord(t.name) &&
                          this.tolerateError(s.Messages.StrictLHSPostfix),
                          this.context.isAssignmentTarget ||
                            this.tolerateError(
                              s.Messages.InvalidLHSInAssignment
                            ),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                        var o = this.nextToken().value;
                        r = !1;
                        t = this.finalize(
                          this.startNode(e),
                          new a.UpdateExpression(o, t, r)
                        );
                      }
                      return t;
                    }),
                    (t.prototype.parseAwaitExpression = function() {
                      var t = this.createNode();
                      this.nextToken();
                      var e = this.parseUnaryExpression();
                      return this.finalize(t, new a.AwaitExpression(e));
                    }),
                    (t.prototype.parseUnaryExpression = function() {
                      var t;
                      if (
                        this.match("+") ||
                        this.match("-") ||
                        this.match("~") ||
                        this.match("!") ||
                        this.matchKeyword("delete") ||
                        this.matchKeyword("void") ||
                        this.matchKeyword("typeof")
                      ) {
                        var e = this.startNode(this.lookahead),
                          i = this.nextToken();
                        (t = this.inheritCoverGrammar(
                          this.parseUnaryExpression
                        )),
                          (t = this.finalize(
                            e,
                            new a.UnaryExpression(i.value, t)
                          )),
                          this.context.strict &&
                            "delete" === t.operator &&
                            t.argument.type === u.Syntax.Identifier &&
                            this.tolerateError(s.Messages.StrictDelete),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                      } else
                        t =
                          this.context.await &&
                          this.matchContextualKeyword("await")
                            ? this.parseAwaitExpression()
                            : this.parseUpdateExpression();
                      return t;
                    }),
                    (t.prototype.parseExponentiationExpression = function() {
                      var t = this.lookahead,
                        e = this.inheritCoverGrammar(this.parseUnaryExpression);
                      if (
                        e.type !== u.Syntax.UnaryExpression &&
                        this.match("**")
                      ) {
                        this.nextToken(),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                        var i = e,
                          n = this.isolateCoverGrammar(
                            this.parseExponentiationExpression
                          );
                        e = this.finalize(
                          this.startNode(t),
                          new a.BinaryExpression("**", i, n)
                        );
                      }
                      return e;
                    }),
                    (t.prototype.binaryPrecedence = function(t) {
                      var e = t.value;
                      return 7 === t.type
                        ? this.operatorPrecedence[e] || 0
                        : 4 === t.type &&
                          ("instanceof" === e ||
                            (this.context.allowIn && "in" === e))
                        ? 7
                        : 0;
                    }),
                    (t.prototype.parseBinaryExpression = function() {
                      var t = this.lookahead,
                        e = this.inheritCoverGrammar(
                          this.parseExponentiationExpression
                        ),
                        i = this.lookahead,
                        n = this.binaryPrecedence(i);
                      if (n > 0) {
                        this.nextToken(),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                        for (
                          var r = [t, this.lookahead],
                            s = e,
                            o = this.isolateCoverGrammar(
                              this.parseExponentiationExpression
                            ),
                            u = [s, i.value, o],
                            h = [n];
                          !((n = this.binaryPrecedence(this.lookahead)) <= 0);

                        ) {
                          for (; u.length > 2 && n <= h[h.length - 1]; ) {
                            o = u.pop();
                            var c = u.pop();
                            h.pop(), (s = u.pop()), r.pop();
                            var l = this.startNode(r[r.length - 1]);
                            u.push(
                              this.finalize(l, new a.BinaryExpression(c, s, o))
                            );
                          }
                          u.push(this.nextToken().value),
                            h.push(n),
                            r.push(this.lookahead),
                            u.push(
                              this.isolateCoverGrammar(
                                this.parseExponentiationExpression
                              )
                            );
                        }
                        var p = u.length - 1;
                        e = u[p];
                        for (var f = r.pop(); p > 1; ) {
                          var d = r.pop(),
                            m = f && f.lineStart;
                          (l = this.startNode(d, m)), (c = u[p - 1]);
                          (e = this.finalize(
                            l,
                            new a.BinaryExpression(c, u[p - 2], e)
                          )),
                            (p -= 2),
                            (f = d);
                        }
                      }
                      return e;
                    }),
                    (t.prototype.parseConditionalExpression = function() {
                      var t = this.lookahead,
                        e = this.inheritCoverGrammar(
                          this.parseBinaryExpression
                        );
                      if (this.match("?")) {
                        this.nextToken();
                        var i = this.context.allowIn;
                        this.context.allowIn = !0;
                        var n = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                        (this.context.allowIn = i), this.expect(":");
                        var r = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                        (e = this.finalize(
                          this.startNode(t),
                          new a.ConditionalExpression(e, n, r)
                        )),
                          (this.context.isAssignmentTarget = !1),
                          (this.context.isBindingElement = !1);
                      }
                      return e;
                    }),
                    (t.prototype.checkPatternParam = function(t, e) {
                      switch (e.type) {
                        case u.Syntax.Identifier:
                          this.validateParam(t, e, e.name);
                          break;
                        case u.Syntax.RestElement:
                          this.checkPatternParam(t, e.argument);
                          break;
                        case u.Syntax.AssignmentPattern:
                          this.checkPatternParam(t, e.left);
                          break;
                        case u.Syntax.ArrayPattern:
                          for (var i = 0; i < e.elements.length; i++)
                            null !== e.elements[i] &&
                              this.checkPatternParam(t, e.elements[i]);
                          break;
                        case u.Syntax.ObjectPattern:
                          for (i = 0; i < e.properties.length; i++)
                            this.checkPatternParam(t, e.properties[i].value);
                      }
                      t.simple = t.simple && e instanceof a.Identifier;
                    }),
                    (t.prototype.reinterpretAsCoverFormalsList = function(t) {
                      var e,
                        i = [t],
                        n = !1;
                      switch (t.type) {
                        case u.Syntax.Identifier:
                          break;
                        case "ArrowParameterPlaceHolder":
                          (i = t.params), (n = t.async);
                          break;
                        default:
                          return null;
                      }
                      e = { simple: !0, paramSet: {} };
                      for (var r = 0; r < i.length; ++r) {
                        (a = i[r]).type === u.Syntax.AssignmentPattern
                          ? a.right.type === u.Syntax.YieldExpression &&
                            (a.right.argument &&
                              this.throwUnexpectedToken(this.lookahead),
                            (a.right.type = u.Syntax.Identifier),
                            (a.right.name = "yield"),
                            delete a.right.argument,
                            delete a.right.delegate)
                          : n &&
                            a.type === u.Syntax.Identifier &&
                            "await" === a.name &&
                            this.throwUnexpectedToken(this.lookahead),
                          this.checkPatternParam(e, a),
                          (i[r] = a);
                      }
                      if (this.context.strict || !this.context.allowYield)
                        for (r = 0; r < i.length; ++r) {
                          var a;
                          (a = i[r]).type === u.Syntax.YieldExpression &&
                            this.throwUnexpectedToken(this.lookahead);
                        }
                      if (e.message === s.Messages.StrictParamDupe) {
                        var o = this.context.strict
                          ? e.stricted
                          : e.firstRestricted;
                        this.throwUnexpectedToken(o, e.message);
                      }
                      return {
                        simple: e.simple,
                        params: i,
                        stricted: e.stricted,
                        firstRestricted: e.firstRestricted,
                        message: e.message
                      };
                    }),
                    (t.prototype.parseAssignmentExpression = function() {
                      var t;
                      if (
                        !this.context.allowYield &&
                        this.matchKeyword("yield")
                      )
                        t = this.parseYieldExpression();
                      else {
                        var e = this.lookahead,
                          i = e;
                        if (
                          ((t = this.parseConditionalExpression()),
                          3 === i.type &&
                            i.lineNumber === this.lookahead.lineNumber &&
                            "async" === i.value &&
                            (3 === this.lookahead.type ||
                              this.matchKeyword("yield")))
                        ) {
                          var n = this.parsePrimaryExpression();
                          this.reinterpretExpressionAsPattern(n),
                            (t = {
                              type: "ArrowParameterPlaceHolder",
                              params: [n],
                              async: !0
                            });
                        }
                        if (
                          "ArrowParameterPlaceHolder" === t.type ||
                          this.match("=>")
                        ) {
                          (this.context.isAssignmentTarget = !1),
                            (this.context.isBindingElement = !1);
                          var r = t.async,
                            o = this.reinterpretAsCoverFormalsList(t);
                          if (o) {
                            this.hasLineTerminator &&
                              this.tolerateUnexpectedToken(this.lookahead),
                              (this.context.firstCoverInitializedNameError = null);
                            var h = this.context.strict,
                              c = this.context.allowStrictDirective;
                            this.context.allowStrictDirective = o.simple;
                            var l = this.context.allowYield,
                              p = this.context.await;
                            (this.context.allowYield = !0),
                              (this.context.await = r);
                            var f = this.startNode(e);
                            this.expect("=>");
                            var d = void 0;
                            if (this.match("{")) {
                              var m = this.context.allowIn;
                              (this.context.allowIn = !0),
                                (d = this.parseFunctionSourceElements()),
                                (this.context.allowIn = m);
                            } else
                              d = this.isolateCoverGrammar(
                                this.parseAssignmentExpression
                              );
                            var y = d.type !== u.Syntax.BlockStatement;
                            this.context.strict &&
                              o.firstRestricted &&
                              this.throwUnexpectedToken(
                                o.firstRestricted,
                                o.message
                              ),
                              this.context.strict &&
                                o.stricted &&
                                this.tolerateUnexpectedToken(
                                  o.stricted,
                                  o.message
                                ),
                              (t = r
                                ? this.finalize(
                                    f,
                                    new a.AsyncArrowFunctionExpression(
                                      o.params,
                                      d,
                                      y
                                    )
                                  )
                                : this.finalize(
                                    f,
                                    new a.ArrowFunctionExpression(
                                      o.params,
                                      d,
                                      y
                                    )
                                  )),
                              (this.context.strict = h),
                              (this.context.allowStrictDirective = c),
                              (this.context.allowYield = l),
                              (this.context.await = p);
                          }
                        } else if (this.matchAssign()) {
                          if (
                            (this.context.isAssignmentTarget ||
                              this.tolerateError(
                                s.Messages.InvalidLHSInAssignment
                              ),
                            this.context.strict &&
                              t.type === u.Syntax.Identifier)
                          ) {
                            var x = t;
                            this.scanner.isRestrictedWord(x.name) &&
                              this.tolerateUnexpectedToken(
                                i,
                                s.Messages.StrictLHSAssignment
                              ),
                              this.scanner.isStrictModeReservedWord(x.name) &&
                                this.tolerateUnexpectedToken(
                                  i,
                                  s.Messages.StrictReservedWord
                                );
                          }
                          this.match("=")
                            ? this.reinterpretExpressionAsPattern(t)
                            : ((this.context.isAssignmentTarget = !1),
                              (this.context.isBindingElement = !1));
                          var g = (i = this.nextToken()).value,
                            v = this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            );
                          (t = this.finalize(
                            this.startNode(e),
                            new a.AssignmentExpression(g, t, v)
                          )),
                            (this.context.firstCoverInitializedNameError = null);
                        }
                      }
                      return t;
                    }),
                    (t.prototype.parseExpression = function() {
                      var t = this.lookahead,
                        e = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                      if (this.match(",")) {
                        var i = [];
                        for (
                          i.push(e);
                          2 !== this.lookahead.type && this.match(",");

                        )
                          this.nextToken(),
                            i.push(
                              this.isolateCoverGrammar(
                                this.parseAssignmentExpression
                              )
                            );
                        e = this.finalize(
                          this.startNode(t),
                          new a.SequenceExpression(i)
                        );
                      }
                      return e;
                    }),
                    (t.prototype.parseStatementListItem = function() {
                      var t;
                      if (
                        ((this.context.isAssignmentTarget = !0),
                        (this.context.isBindingElement = !0),
                        4 === this.lookahead.type)
                      )
                        switch (this.lookahead.value) {
                          case "export":
                            this.context.isModule ||
                              this.tolerateUnexpectedToken(
                                this.lookahead,
                                s.Messages.IllegalExportDeclaration
                              ),
                              (t = this.parseExportDeclaration());
                            break;
                          case "import":
                            this.context.isModule ||
                              this.tolerateUnexpectedToken(
                                this.lookahead,
                                s.Messages.IllegalImportDeclaration
                              ),
                              (t = this.parseImportDeclaration());
                            break;
                          case "const":
                            t = this.parseLexicalDeclaration({ inFor: !1 });
                            break;
                          case "function":
                            t = this.parseFunctionDeclaration();
                            break;
                          case "class":
                            t = this.parseClassDeclaration();
                            break;
                          case "let":
                            t = this.isLexicalDeclaration()
                              ? this.parseLexicalDeclaration({ inFor: !1 })
                              : this.parseStatement();
                            break;
                          default:
                            t = this.parseStatement();
                        }
                      else t = this.parseStatement();
                      return t;
                    }),
                    (t.prototype.parseBlock = function() {
                      var t = this.createNode();
                      this.expect("{");
                      for (var e = []; !this.match("}"); )
                        e.push(this.parseStatementListItem());
                      return (
                        this.expect("}"),
                        this.finalize(t, new a.BlockStatement(e))
                      );
                    }),
                    (t.prototype.parseLexicalBinding = function(t, e) {
                      var i = this.createNode(),
                        n = this.parsePattern([], t);
                      this.context.strict &&
                        n.type === u.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(n.name) &&
                        this.tolerateError(s.Messages.StrictVarName);
                      var r = null;
                      return (
                        "const" === t
                          ? this.matchKeyword("in") ||
                            this.matchContextualKeyword("of") ||
                            (this.match("=")
                              ? (this.nextToken(),
                                (r = this.isolateCoverGrammar(
                                  this.parseAssignmentExpression
                                )))
                              : this.throwError(
                                  s.Messages.DeclarationMissingInitializer,
                                  "const"
                                ))
                          : ((!e.inFor && n.type !== u.Syntax.Identifier) ||
                              this.match("=")) &&
                            (this.expect("="),
                            (r = this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            ))),
                        this.finalize(i, new a.VariableDeclarator(n, r))
                      );
                    }),
                    (t.prototype.parseBindingList = function(t, e) {
                      for (
                        var i = [this.parseLexicalBinding(t, e)];
                        this.match(",");

                      )
                        this.nextToken(),
                          i.push(this.parseLexicalBinding(t, e));
                      return i;
                    }),
                    (t.prototype.isLexicalDeclaration = function() {
                      var t = this.scanner.saveState();
                      this.scanner.scanComments();
                      var e = this.scanner.lex();
                      return (
                        this.scanner.restoreState(t),
                        3 === e.type ||
                          (7 === e.type && "[" === e.value) ||
                          (7 === e.type && "{" === e.value) ||
                          (4 === e.type && "let" === e.value) ||
                          (4 === e.type && "yield" === e.value)
                      );
                    }),
                    (t.prototype.parseLexicalDeclaration = function(t) {
                      var e = this.createNode(),
                        i = this.nextToken().value;
                      n.assert(
                        "let" === i || "const" === i,
                        "Lexical declaration must be either let or const"
                      );
                      var r = this.parseBindingList(i, t);
                      return (
                        this.consumeSemicolon(),
                        this.finalize(e, new a.VariableDeclaration(r, i))
                      );
                    }),
                    (t.prototype.parseBindingRestElement = function(t, e) {
                      var i = this.createNode();
                      this.expect("...");
                      var n = this.parsePattern(t, e);
                      return this.finalize(i, new a.RestElement(n));
                    }),
                    (t.prototype.parseArrayPattern = function(t, e) {
                      var i = this.createNode();
                      this.expect("[");
                      for (var n = []; !this.match("]"); )
                        if (this.match(",")) this.nextToken(), n.push(null);
                        else {
                          if (this.match("...")) {
                            n.push(this.parseBindingRestElement(t, e));
                            break;
                          }
                          n.push(this.parsePatternWithDefault(t, e)),
                            this.match("]") || this.expect(",");
                        }
                      return (
                        this.expect("]"),
                        this.finalize(i, new a.ArrayPattern(n))
                      );
                    }),
                    (t.prototype.parsePropertyPattern = function(t, e) {
                      var i,
                        n,
                        r = this.createNode(),
                        s = !1,
                        o = !1;
                      if (3 === this.lookahead.type) {
                        var u = this.lookahead;
                        i = this.parseVariableIdentifier();
                        var h = this.finalize(r, new a.Identifier(u.value));
                        if (this.match("=")) {
                          t.push(u), (o = !0), this.nextToken();
                          var c = this.parseAssignmentExpression();
                          n = this.finalize(
                            this.startNode(u),
                            new a.AssignmentPattern(h, c)
                          );
                        } else
                          this.match(":")
                            ? (this.expect(":"),
                              (n = this.parsePatternWithDefault(t, e)))
                            : (t.push(u), (o = !0), (n = h));
                      } else
                        (s = this.match("[")),
                          (i = this.parseObjectPropertyKey()),
                          this.expect(":"),
                          (n = this.parsePatternWithDefault(t, e));
                      return this.finalize(
                        r,
                        new a.Property("init", i, s, n, !1, o)
                      );
                    }),
                    (t.prototype.parseObjectPattern = function(t, e) {
                      var i = this.createNode(),
                        n = [];
                      for (this.expect("{"); !this.match("}"); )
                        n.push(this.parsePropertyPattern(t, e)),
                          this.match("}") || this.expect(",");
                      return (
                        this.expect("}"),
                        this.finalize(i, new a.ObjectPattern(n))
                      );
                    }),
                    (t.prototype.parsePattern = function(t, e) {
                      var i;
                      return (
                        this.match("[")
                          ? (i = this.parseArrayPattern(t, e))
                          : this.match("{")
                          ? (i = this.parseObjectPattern(t, e))
                          : (!this.matchKeyword("let") ||
                              ("const" !== e && "let" !== e) ||
                              this.tolerateUnexpectedToken(
                                this.lookahead,
                                s.Messages.LetInLexicalBinding
                              ),
                            t.push(this.lookahead),
                            (i = this.parseVariableIdentifier(e))),
                        i
                      );
                    }),
                    (t.prototype.parsePatternWithDefault = function(t, e) {
                      var i = this.lookahead,
                        n = this.parsePattern(t, e);
                      if (this.match("=")) {
                        this.nextToken();
                        var r = this.context.allowYield;
                        this.context.allowYield = !0;
                        var s = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                        (this.context.allowYield = r),
                          (n = this.finalize(
                            this.startNode(i),
                            new a.AssignmentPattern(n, s)
                          ));
                      }
                      return n;
                    }),
                    (t.prototype.parseVariableIdentifier = function(t) {
                      var e = this.createNode(),
                        i = this.nextToken();
                      return (
                        4 === i.type && "yield" === i.value
                          ? this.context.strict
                            ? this.tolerateUnexpectedToken(
                                i,
                                s.Messages.StrictReservedWord
                              )
                            : this.context.allowYield ||
                              this.throwUnexpectedToken(i)
                          : 3 !== i.type
                          ? this.context.strict &&
                            4 === i.type &&
                            this.scanner.isStrictModeReservedWord(i.value)
                            ? this.tolerateUnexpectedToken(
                                i,
                                s.Messages.StrictReservedWord
                              )
                            : (this.context.strict ||
                                "let" !== i.value ||
                                "var" !== t) &&
                              this.throwUnexpectedToken(i)
                          : (this.context.isModule || this.context.await) &&
                            3 === i.type &&
                            "await" === i.value &&
                            this.tolerateUnexpectedToken(i),
                        this.finalize(e, new a.Identifier(i.value))
                      );
                    }),
                    (t.prototype.parseVariableDeclaration = function(t) {
                      var e = this.createNode(),
                        i = this.parsePattern([], "var");
                      this.context.strict &&
                        i.type === u.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(i.name) &&
                        this.tolerateError(s.Messages.StrictVarName);
                      var n = null;
                      return (
                        this.match("=")
                          ? (this.nextToken(),
                            (n = this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )))
                          : i.type === u.Syntax.Identifier ||
                            t.inFor ||
                            this.expect("="),
                        this.finalize(e, new a.VariableDeclarator(i, n))
                      );
                    }),
                    (t.prototype.parseVariableDeclarationList = function(t) {
                      var e = { inFor: t.inFor },
                        i = [];
                      for (
                        i.push(this.parseVariableDeclaration(e));
                        this.match(",");

                      )
                        this.nextToken(),
                          i.push(this.parseVariableDeclaration(e));
                      return i;
                    }),
                    (t.prototype.parseVariableStatement = function() {
                      var t = this.createNode();
                      this.expectKeyword("var");
                      var e = this.parseVariableDeclarationList({ inFor: !1 });
                      return (
                        this.consumeSemicolon(),
                        this.finalize(t, new a.VariableDeclaration(e, "var"))
                      );
                    }),
                    (t.prototype.parseEmptyStatement = function() {
                      var t = this.createNode();
                      return (
                        this.expect(";"),
                        this.finalize(t, new a.EmptyStatement())
                      );
                    }),
                    (t.prototype.parseExpressionStatement = function() {
                      var t = this.createNode(),
                        e = this.parseExpression();
                      return (
                        this.consumeSemicolon(),
                        this.finalize(t, new a.ExpressionStatement(e))
                      );
                    }),
                    (t.prototype.parseIfClause = function() {
                      return (
                        this.context.strict &&
                          this.matchKeyword("function") &&
                          this.tolerateError(s.Messages.StrictFunction),
                        this.parseStatement()
                      );
                    }),
                    (t.prototype.parseIfStatement = function() {
                      var t,
                        e = this.createNode(),
                        i = null;
                      this.expectKeyword("if"), this.expect("(");
                      var n = this.parseExpression();
                      return (
                        !this.match(")") && this.config.tolerant
                          ? (this.tolerateUnexpectedToken(this.nextToken()),
                            (t = this.finalize(
                              this.createNode(),
                              new a.EmptyStatement()
                            )))
                          : (this.expect(")"),
                            (t = this.parseIfClause()),
                            this.matchKeyword("else") &&
                              (this.nextToken(), (i = this.parseIfClause()))),
                        this.finalize(e, new a.IfStatement(n, t, i))
                      );
                    }),
                    (t.prototype.parseDoWhileStatement = function() {
                      var t = this.createNode();
                      this.expectKeyword("do");
                      var e = this.context.inIteration;
                      this.context.inIteration = !0;
                      var i = this.parseStatement();
                      (this.context.inIteration = e),
                        this.expectKeyword("while"),
                        this.expect("(");
                      var n = this.parseExpression();
                      return (
                        !this.match(")") && this.config.tolerant
                          ? this.tolerateUnexpectedToken(this.nextToken())
                          : (this.expect(")"),
                            this.match(";") && this.nextToken()),
                        this.finalize(t, new a.DoWhileStatement(i, n))
                      );
                    }),
                    (t.prototype.parseWhileStatement = function() {
                      var t,
                        e = this.createNode();
                      this.expectKeyword("while"), this.expect("(");
                      var i = this.parseExpression();
                      if (!this.match(")") && this.config.tolerant)
                        this.tolerateUnexpectedToken(this.nextToken()),
                          (t = this.finalize(
                            this.createNode(),
                            new a.EmptyStatement()
                          ));
                      else {
                        this.expect(")");
                        var n = this.context.inIteration;
                        (this.context.inIteration = !0),
                          (t = this.parseStatement()),
                          (this.context.inIteration = n);
                      }
                      return this.finalize(e, new a.WhileStatement(i, t));
                    }),
                    (t.prototype.parseForStatement = function() {
                      var t,
                        e,
                        i,
                        n = null,
                        r = null,
                        o = null,
                        h = !0,
                        c = this.createNode();
                      if (
                        (this.expectKeyword("for"),
                        this.expect("("),
                        this.match(";"))
                      )
                        this.nextToken();
                      else if (this.matchKeyword("var")) {
                        (n = this.createNode()), this.nextToken();
                        var l = this.context.allowIn;
                        this.context.allowIn = !1;
                        var p = this.parseVariableDeclarationList({
                          inFor: !0
                        });
                        if (
                          ((this.context.allowIn = l),
                          1 === p.length && this.matchKeyword("in"))
                        ) {
                          var f = p[0];
                          f.init &&
                            (f.id.type === u.Syntax.ArrayPattern ||
                              f.id.type === u.Syntax.ObjectPattern ||
                              this.context.strict) &&
                            this.tolerateError(
                              s.Messages.ForInOfLoopInitializer,
                              "for-in"
                            ),
                            (n = this.finalize(
                              n,
                              new a.VariableDeclaration(p, "var")
                            )),
                            this.nextToken(),
                            (t = n),
                            (e = this.parseExpression()),
                            (n = null);
                        } else
                          1 === p.length &&
                          null === p[0].init &&
                          this.matchContextualKeyword("of")
                            ? ((n = this.finalize(
                                n,
                                new a.VariableDeclaration(p, "var")
                              )),
                              this.nextToken(),
                              (t = n),
                              (e = this.parseAssignmentExpression()),
                              (n = null),
                              (h = !1))
                            : ((n = this.finalize(
                                n,
                                new a.VariableDeclaration(p, "var")
                              )),
                              this.expect(";"));
                      } else if (
                        this.matchKeyword("const") ||
                        this.matchKeyword("let")
                      ) {
                        n = this.createNode();
                        var d = this.nextToken().value;
                        if (
                          this.context.strict ||
                          "in" !== this.lookahead.value
                        ) {
                          l = this.context.allowIn;
                          this.context.allowIn = !1;
                          p = this.parseBindingList(d, { inFor: !0 });
                          (this.context.allowIn = l),
                            1 === p.length &&
                            null === p[0].init &&
                            this.matchKeyword("in")
                              ? ((n = this.finalize(
                                  n,
                                  new a.VariableDeclaration(p, d)
                                )),
                                this.nextToken(),
                                (t = n),
                                (e = this.parseExpression()),
                                (n = null))
                              : 1 === p.length &&
                                null === p[0].init &&
                                this.matchContextualKeyword("of")
                              ? ((n = this.finalize(
                                  n,
                                  new a.VariableDeclaration(p, d)
                                )),
                                this.nextToken(),
                                (t = n),
                                (e = this.parseAssignmentExpression()),
                                (n = null),
                                (h = !1))
                              : (this.consumeSemicolon(),
                                (n = this.finalize(
                                  n,
                                  new a.VariableDeclaration(p, d)
                                )));
                        } else
                          (n = this.finalize(n, new a.Identifier(d))),
                            this.nextToken(),
                            (t = n),
                            (e = this.parseExpression()),
                            (n = null);
                      } else {
                        var m = this.lookahead;
                        l = this.context.allowIn;
                        if (
                          ((this.context.allowIn = !1),
                          (n = this.inheritCoverGrammar(
                            this.parseAssignmentExpression
                          )),
                          (this.context.allowIn = l),
                          this.matchKeyword("in"))
                        )
                          (this.context.isAssignmentTarget &&
                            n.type !== u.Syntax.AssignmentExpression) ||
                            this.tolerateError(s.Messages.InvalidLHSInForIn),
                            this.nextToken(),
                            this.reinterpretExpressionAsPattern(n),
                            (t = n),
                            (e = this.parseExpression()),
                            (n = null);
                        else if (this.matchContextualKeyword("of"))
                          (this.context.isAssignmentTarget &&
                            n.type !== u.Syntax.AssignmentExpression) ||
                            this.tolerateError(s.Messages.InvalidLHSInForLoop),
                            this.nextToken(),
                            this.reinterpretExpressionAsPattern(n),
                            (t = n),
                            (e = this.parseAssignmentExpression()),
                            (n = null),
                            (h = !1);
                        else {
                          if (this.match(",")) {
                            for (var y = [n]; this.match(","); )
                              this.nextToken(),
                                y.push(
                                  this.isolateCoverGrammar(
                                    this.parseAssignmentExpression
                                  )
                                );
                            n = this.finalize(
                              this.startNode(m),
                              new a.SequenceExpression(y)
                            );
                          }
                          this.expect(";");
                        }
                      }
                      if (
                        (void 0 === t &&
                          (this.match(";") || (r = this.parseExpression()),
                          this.expect(";"),
                          this.match(")") || (o = this.parseExpression())),
                        !this.match(")") && this.config.tolerant)
                      )
                        this.tolerateUnexpectedToken(this.nextToken()),
                          (i = this.finalize(
                            this.createNode(),
                            new a.EmptyStatement()
                          ));
                      else {
                        this.expect(")");
                        var x = this.context.inIteration;
                        (this.context.inIteration = !0),
                          (i = this.isolateCoverGrammar(this.parseStatement)),
                          (this.context.inIteration = x);
                      }
                      return void 0 === t
                        ? this.finalize(c, new a.ForStatement(n, r, o, i))
                        : h
                        ? this.finalize(c, new a.ForInStatement(t, e, i))
                        : this.finalize(c, new a.ForOfStatement(t, e, i));
                    }),
                    (t.prototype.parseContinueStatement = function() {
                      var t = this.createNode();
                      this.expectKeyword("continue");
                      var e = null;
                      if (
                        3 === this.lookahead.type &&
                        !this.hasLineTerminator
                      ) {
                        var i = this.parseVariableIdentifier();
                        e = i;
                        var n = "$" + i.name;
                        Object.prototype.hasOwnProperty.call(
                          this.context.labelSet,
                          n
                        ) || this.throwError(s.Messages.UnknownLabel, i.name);
                      }
                      return (
                        this.consumeSemicolon(),
                        null !== e ||
                          this.context.inIteration ||
                          this.throwError(s.Messages.IllegalContinue),
                        this.finalize(t, new a.ContinueStatement(e))
                      );
                    }),
                    (t.prototype.parseBreakStatement = function() {
                      var t = this.createNode();
                      this.expectKeyword("break");
                      var e = null;
                      if (
                        3 === this.lookahead.type &&
                        !this.hasLineTerminator
                      ) {
                        var i = this.parseVariableIdentifier(),
                          n = "$" + i.name;
                        Object.prototype.hasOwnProperty.call(
                          this.context.labelSet,
                          n
                        ) || this.throwError(s.Messages.UnknownLabel, i.name),
                          (e = i);
                      }
                      return (
                        this.consumeSemicolon(),
                        null !== e ||
                          this.context.inIteration ||
                          this.context.inSwitch ||
                          this.throwError(s.Messages.IllegalBreak),
                        this.finalize(t, new a.BreakStatement(e))
                      );
                    }),
                    (t.prototype.parseReturnStatement = function() {
                      this.context.inFunctionBody ||
                        this.tolerateError(s.Messages.IllegalReturn);
                      var t = this.createNode();
                      this.expectKeyword("return");
                      var e =
                        (!this.match(";") &&
                          !this.match("}") &&
                          !this.hasLineTerminator &&
                          2 !== this.lookahead.type) ||
                        8 === this.lookahead.type ||
                        10 === this.lookahead.type
                          ? this.parseExpression()
                          : null;
                      return (
                        this.consumeSemicolon(),
                        this.finalize(t, new a.ReturnStatement(e))
                      );
                    }),
                    (t.prototype.parseWithStatement = function() {
                      this.context.strict &&
                        this.tolerateError(s.Messages.StrictModeWith);
                      var t,
                        e = this.createNode();
                      this.expectKeyword("with"), this.expect("(");
                      var i = this.parseExpression();
                      return (
                        !this.match(")") && this.config.tolerant
                          ? (this.tolerateUnexpectedToken(this.nextToken()),
                            (t = this.finalize(
                              this.createNode(),
                              new a.EmptyStatement()
                            )))
                          : (this.expect(")"), (t = this.parseStatement())),
                        this.finalize(e, new a.WithStatement(i, t))
                      );
                    }),
                    (t.prototype.parseSwitchCase = function() {
                      var t,
                        e = this.createNode();
                      this.matchKeyword("default")
                        ? (this.nextToken(), (t = null))
                        : (this.expectKeyword("case"),
                          (t = this.parseExpression())),
                        this.expect(":");
                      for (
                        var i = [];
                        !(
                          this.match("}") ||
                          this.matchKeyword("default") ||
                          this.matchKeyword("case")
                        );

                      )
                        i.push(this.parseStatementListItem());
                      return this.finalize(e, new a.SwitchCase(t, i));
                    }),
                    (t.prototype.parseSwitchStatement = function() {
                      var t = this.createNode();
                      this.expectKeyword("switch"), this.expect("(");
                      var e = this.parseExpression();
                      this.expect(")");
                      var i = this.context.inSwitch;
                      this.context.inSwitch = !0;
                      var n = [],
                        r = !1;
                      for (this.expect("{"); !this.match("}"); ) {
                        var o = this.parseSwitchCase();
                        null === o.test &&
                          (r &&
                            this.throwError(
                              s.Messages.MultipleDefaultsInSwitch
                            ),
                          (r = !0)),
                          n.push(o);
                      }
                      return (
                        this.expect("}"),
                        (this.context.inSwitch = i),
                        this.finalize(t, new a.SwitchStatement(e, n))
                      );
                    }),
                    (t.prototype.parseLabelledStatement = function() {
                      var t,
                        e = this.createNode(),
                        i = this.parseExpression();
                      if (i.type === u.Syntax.Identifier && this.match(":")) {
                        this.nextToken();
                        var n = i,
                          r = "$" + n.name;
                        Object.prototype.hasOwnProperty.call(
                          this.context.labelSet,
                          r
                        ) &&
                          this.throwError(
                            s.Messages.Redeclaration,
                            "Label",
                            n.name
                          ),
                          (this.context.labelSet[r] = !0);
                        var o = void 0;
                        if (this.matchKeyword("class"))
                          this.tolerateUnexpectedToken(this.lookahead),
                            (o = this.parseClassDeclaration());
                        else if (this.matchKeyword("function")) {
                          var h = this.lookahead,
                            c = this.parseFunctionDeclaration();
                          this.context.strict
                            ? this.tolerateUnexpectedToken(
                                h,
                                s.Messages.StrictFunction
                              )
                            : c.generator &&
                              this.tolerateUnexpectedToken(
                                h,
                                s.Messages.GeneratorInLegacyContext
                              ),
                            (o = c);
                        } else o = this.parseStatement();
                        delete this.context.labelSet[r],
                          (t = new a.LabeledStatement(n, o));
                      } else
                        this.consumeSemicolon(),
                          (t = new a.ExpressionStatement(i));
                      return this.finalize(e, t);
                    }),
                    (t.prototype.parseThrowStatement = function() {
                      var t = this.createNode();
                      this.expectKeyword("throw"),
                        this.hasLineTerminator &&
                          this.throwError(s.Messages.NewlineAfterThrow);
                      var e = this.parseExpression();
                      return (
                        this.consumeSemicolon(),
                        this.finalize(t, new a.ThrowStatement(e))
                      );
                    }),
                    (t.prototype.parseCatchClause = function() {
                      var t = this.createNode();
                      this.expectKeyword("catch"),
                        this.expect("("),
                        this.match(")") &&
                          this.throwUnexpectedToken(this.lookahead);
                      for (
                        var e = [], i = this.parsePattern(e), n = {}, r = 0;
                        r < e.length;
                        r++
                      ) {
                        var o = "$" + e[r].value;
                        Object.prototype.hasOwnProperty.call(n, o) &&
                          this.tolerateError(
                            s.Messages.DuplicateBinding,
                            e[r].value
                          ),
                          (n[o] = !0);
                      }
                      this.context.strict &&
                        i.type === u.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(i.name) &&
                        this.tolerateError(s.Messages.StrictCatchVariable),
                        this.expect(")");
                      var h = this.parseBlock();
                      return this.finalize(t, new a.CatchClause(i, h));
                    }),
                    (t.prototype.parseFinallyClause = function() {
                      return this.expectKeyword("finally"), this.parseBlock();
                    }),
                    (t.prototype.parseTryStatement = function() {
                      var t = this.createNode();
                      this.expectKeyword("try");
                      var e = this.parseBlock(),
                        i = this.matchKeyword("catch")
                          ? this.parseCatchClause()
                          : null,
                        n = this.matchKeyword("finally")
                          ? this.parseFinallyClause()
                          : null;
                      return (
                        i || n || this.throwError(s.Messages.NoCatchOrFinally),
                        this.finalize(t, new a.TryStatement(e, i, n))
                      );
                    }),
                    (t.prototype.parseDebuggerStatement = function() {
                      var t = this.createNode();
                      return (
                        this.expectKeyword("debugger"),
                        this.consumeSemicolon(),
                        this.finalize(t, new a.DebuggerStatement())
                      );
                    }),
                    (t.prototype.parseStatement = function() {
                      var t;
                      switch (this.lookahead.type) {
                        case 1:
                        case 5:
                        case 6:
                        case 8:
                        case 10:
                        case 9:
                          t = this.parseExpressionStatement();
                          break;
                        case 7:
                          var e = this.lookahead.value;
                          t =
                            "{" === e
                              ? this.parseBlock()
                              : "(" === e
                              ? this.parseExpressionStatement()
                              : ";" === e
                              ? this.parseEmptyStatement()
                              : this.parseExpressionStatement();
                          break;
                        case 3:
                          t = this.matchAsyncFunction()
                            ? this.parseFunctionDeclaration()
                            : this.parseLabelledStatement();
                          break;
                        case 4:
                          switch (this.lookahead.value) {
                            case "break":
                              t = this.parseBreakStatement();
                              break;
                            case "continue":
                              t = this.parseContinueStatement();
                              break;
                            case "debugger":
                              t = this.parseDebuggerStatement();
                              break;
                            case "do":
                              t = this.parseDoWhileStatement();
                              break;
                            case "for":
                              t = this.parseForStatement();
                              break;
                            case "function":
                              t = this.parseFunctionDeclaration();
                              break;
                            case "if":
                              t = this.parseIfStatement();
                              break;
                            case "return":
                              t = this.parseReturnStatement();
                              break;
                            case "switch":
                              t = this.parseSwitchStatement();
                              break;
                            case "throw":
                              t = this.parseThrowStatement();
                              break;
                            case "try":
                              t = this.parseTryStatement();
                              break;
                            case "var":
                              t = this.parseVariableStatement();
                              break;
                            case "while":
                              t = this.parseWhileStatement();
                              break;
                            case "with":
                              t = this.parseWithStatement();
                              break;
                            default:
                              t = this.parseExpressionStatement();
                          }
                          break;
                        default:
                          t = this.throwUnexpectedToken(this.lookahead);
                      }
                      return t;
                    }),
                    (t.prototype.parseFunctionSourceElements = function() {
                      var t = this.createNode();
                      this.expect("{");
                      var e = this.parseDirectivePrologues(),
                        i = this.context.labelSet,
                        n = this.context.inIteration,
                        r = this.context.inSwitch,
                        s = this.context.inFunctionBody;
                      for (
                        this.context.labelSet = {},
                          this.context.inIteration = !1,
                          this.context.inSwitch = !1,
                          this.context.inFunctionBody = !0;
                        2 !== this.lookahead.type && !this.match("}");

                      )
                        e.push(this.parseStatementListItem());
                      return (
                        this.expect("}"),
                        (this.context.labelSet = i),
                        (this.context.inIteration = n),
                        (this.context.inSwitch = r),
                        (this.context.inFunctionBody = s),
                        this.finalize(t, new a.BlockStatement(e))
                      );
                    }),
                    (t.prototype.validateParam = function(t, e, i) {
                      var n = "$" + i;
                      this.context.strict
                        ? (this.scanner.isRestrictedWord(i) &&
                            ((t.stricted = e),
                            (t.message = s.Messages.StrictParamName)),
                          Object.prototype.hasOwnProperty.call(t.paramSet, n) &&
                            ((t.stricted = e),
                            (t.message = s.Messages.StrictParamDupe)))
                        : t.firstRestricted ||
                          (this.scanner.isRestrictedWord(i)
                            ? ((t.firstRestricted = e),
                              (t.message = s.Messages.StrictParamName))
                            : this.scanner.isStrictModeReservedWord(i)
                            ? ((t.firstRestricted = e),
                              (t.message = s.Messages.StrictReservedWord))
                            : Object.prototype.hasOwnProperty.call(
                                t.paramSet,
                                n
                              ) &&
                              ((t.stricted = e),
                              (t.message = s.Messages.StrictParamDupe))),
                        "function" == typeof Object.defineProperty
                          ? Object.defineProperty(t.paramSet, n, {
                              value: !0,
                              enumerable: !0,
                              writable: !0,
                              configurable: !0
                            })
                          : (t.paramSet[n] = !0);
                    }),
                    (t.prototype.parseRestElement = function(t) {
                      var e = this.createNode();
                      this.expect("...");
                      var i = this.parsePattern(t);
                      return (
                        this.match("=") &&
                          this.throwError(s.Messages.DefaultRestParameter),
                        this.match(")") ||
                          this.throwError(
                            s.Messages.ParameterAfterRestParameter
                          ),
                        this.finalize(e, new a.RestElement(i))
                      );
                    }),
                    (t.prototype.parseFormalParameter = function(t) {
                      for (
                        var e = [],
                          i = this.match("...")
                            ? this.parseRestElement(e)
                            : this.parsePatternWithDefault(e),
                          n = 0;
                        n < e.length;
                        n++
                      )
                        this.validateParam(t, e[n], e[n].value);
                      (t.simple = t.simple && i instanceof a.Identifier),
                        t.params.push(i);
                    }),
                    (t.prototype.parseFormalParameters = function(t) {
                      var e;
                      if (
                        ((e = {
                          simple: !0,
                          params: [],
                          firstRestricted: t
                        }),
                        this.expect("("),
                        !this.match(")"))
                      )
                        for (
                          e.paramSet = {};
                          2 !== this.lookahead.type &&
                          (this.parseFormalParameter(e), !this.match(")")) &&
                          (this.expect(","), !this.match(")"));

                        );
                      return (
                        this.expect(")"),
                        {
                          simple: e.simple,
                          params: e.params,
                          stricted: e.stricted,
                          firstRestricted: e.firstRestricted,
                          message: e.message
                        }
                      );
                    }),
                    (t.prototype.matchAsyncFunction = function() {
                      var t = this.matchContextualKeyword("async");
                      if (t) {
                        var e = this.scanner.saveState();
                        this.scanner.scanComments();
                        var i = this.scanner.lex();
                        this.scanner.restoreState(e),
                          (t =
                            e.lineNumber === i.lineNumber &&
                            4 === i.type &&
                            "function" === i.value);
                      }
                      return t;
                    }),
                    (t.prototype.parseFunctionDeclaration = function(t) {
                      var e = this.createNode(),
                        i = this.matchContextualKeyword("async");
                      i && this.nextToken(), this.expectKeyword("function");
                      var n,
                        r = !i && this.match("*");
                      r && this.nextToken();
                      var o = null,
                        u = null;
                      if (!t || !this.match("(")) {
                        var h = this.lookahead;
                        (o = this.parseVariableIdentifier()),
                          this.context.strict
                            ? this.scanner.isRestrictedWord(h.value) &&
                              this.tolerateUnexpectedToken(
                                h,
                                s.Messages.StrictFunctionName
                              )
                            : this.scanner.isRestrictedWord(h.value)
                            ? ((u = h), (n = s.Messages.StrictFunctionName))
                            : this.scanner.isStrictModeReservedWord(h.value) &&
                              ((u = h), (n = s.Messages.StrictReservedWord));
                      }
                      var c = this.context.await,
                        l = this.context.allowYield;
                      (this.context.await = i), (this.context.allowYield = !r);
                      var p = this.parseFormalParameters(u),
                        f = p.params,
                        d = p.stricted;
                      (u = p.firstRestricted), p.message && (n = p.message);
                      var m = this.context.strict,
                        y = this.context.allowStrictDirective;
                      this.context.allowStrictDirective = p.simple;
                      var x = this.parseFunctionSourceElements();
                      return (
                        this.context.strict &&
                          u &&
                          this.throwUnexpectedToken(u, n),
                        this.context.strict &&
                          d &&
                          this.tolerateUnexpectedToken(d, n),
                        (this.context.strict = m),
                        (this.context.allowStrictDirective = y),
                        (this.context.await = c),
                        (this.context.allowYield = l),
                        i
                          ? this.finalize(
                              e,
                              new a.AsyncFunctionDeclaration(o, f, x)
                            )
                          : this.finalize(
                              e,
                              new a.FunctionDeclaration(o, f, x, r)
                            )
                      );
                    }),
                    (t.prototype.parseFunctionExpression = function() {
                      var t = this.createNode(),
                        e = this.matchContextualKeyword("async");
                      e && this.nextToken(), this.expectKeyword("function");
                      var i,
                        n = !e && this.match("*");
                      n && this.nextToken();
                      var r,
                        o = null,
                        u = this.context.await,
                        h = this.context.allowYield;
                      if (
                        ((this.context.await = e),
                        (this.context.allowYield = !n),
                        !this.match("("))
                      ) {
                        var c = this.lookahead;
                        (o =
                          this.context.strict ||
                          n ||
                          !this.matchKeyword("yield")
                            ? this.parseVariableIdentifier()
                            : this.parseIdentifierName()),
                          this.context.strict
                            ? this.scanner.isRestrictedWord(c.value) &&
                              this.tolerateUnexpectedToken(
                                c,
                                s.Messages.StrictFunctionName
                              )
                            : this.scanner.isRestrictedWord(c.value)
                            ? ((r = c), (i = s.Messages.StrictFunctionName))
                            : this.scanner.isStrictModeReservedWord(c.value) &&
                              ((r = c), (i = s.Messages.StrictReservedWord));
                      }
                      var l = this.parseFormalParameters(r),
                        p = l.params,
                        f = l.stricted;
                      (r = l.firstRestricted), l.message && (i = l.message);
                      var d = this.context.strict,
                        m = this.context.allowStrictDirective;
                      this.context.allowStrictDirective = l.simple;
                      var y = this.parseFunctionSourceElements();
                      return (
                        this.context.strict &&
                          r &&
                          this.throwUnexpectedToken(r, i),
                        this.context.strict &&
                          f &&
                          this.tolerateUnexpectedToken(f, i),
                        (this.context.strict = d),
                        (this.context.allowStrictDirective = m),
                        (this.context.await = u),
                        (this.context.allowYield = h),
                        e
                          ? this.finalize(
                              t,
                              new a.AsyncFunctionExpression(o, p, y)
                            )
                          : this.finalize(
                              t,
                              new a.FunctionExpression(o, p, y, n)
                            )
                      );
                    }),
                    (t.prototype.parseDirective = function() {
                      var t = this.lookahead,
                        e = this.createNode(),
                        i = this.parseExpression(),
                        n =
                          i.type === u.Syntax.Literal
                            ? this.getTokenRaw(t).slice(1, -1)
                            : null;
                      return (
                        this.consumeSemicolon(),
                        this.finalize(
                          e,
                          n
                            ? new a.Directive(i, n)
                            : new a.ExpressionStatement(i)
                        )
                      );
                    }),
                    (t.prototype.parseDirectivePrologues = function() {
                      for (var t = null, e = []; ; ) {
                        var i = this.lookahead;
                        if (8 !== i.type) break;
                        var n = this.parseDirective();
                        e.push(n);
                        var r = n.directive;
                        if ("string" != typeof r) break;
                        "use strict" === r
                          ? ((this.context.strict = !0),
                            t &&
                              this.tolerateUnexpectedToken(
                                t,
                                s.Messages.StrictOctalLiteral
                              ),
                            this.context.allowStrictDirective ||
                              this.tolerateUnexpectedToken(
                                i,
                                s.Messages.IllegalLanguageModeDirective
                              ))
                          : !t && i.octal && (t = i);
                      }
                      return e;
                    }),
                    (t.prototype.qualifiedPropertyName = function(t) {
                      switch (t.type) {
                        case 3:
                        case 8:
                        case 1:
                        case 5:
                        case 6:
                        case 4:
                          return !0;
                        case 7:
                          return "[" === t.value;
                      }
                      return !1;
                    }),
                    (t.prototype.parseGetterMethod = function() {
                      var t = this.createNode(),
                        e = this.context.allowYield;
                      this.context.allowYield = !0;
                      var i = this.parseFormalParameters();
                      i.params.length > 0 &&
                        this.tolerateError(s.Messages.BadGetterArity);
                      var n = this.parsePropertyMethod(i);
                      return (
                        (this.context.allowYield = e),
                        this.finalize(
                          t,
                          new a.FunctionExpression(null, i.params, n, !1)
                        )
                      );
                    }),
                    (t.prototype.parseSetterMethod = function() {
                      var t = this.createNode(),
                        e = this.context.allowYield;
                      this.context.allowYield = !0;
                      var i = this.parseFormalParameters();
                      1 !== i.params.length
                        ? this.tolerateError(s.Messages.BadSetterArity)
                        : i.params[0] instanceof a.RestElement &&
                          this.tolerateError(s.Messages.BadSetterRestParameter);
                      var n = this.parsePropertyMethod(i);
                      return (
                        (this.context.allowYield = e),
                        this.finalize(
                          t,
                          new a.FunctionExpression(null, i.params, n, !1)
                        )
                      );
                    }),
                    (t.prototype.parseGeneratorMethod = function() {
                      var t = this.createNode(),
                        e = this.context.allowYield;
                      this.context.allowYield = !0;
                      var i = this.parseFormalParameters();
                      this.context.allowYield = !1;
                      var n = this.parsePropertyMethod(i);
                      return (
                        (this.context.allowYield = e),
                        this.finalize(
                          t,
                          new a.FunctionExpression(null, i.params, n, !0)
                        )
                      );
                    }),
                    (t.prototype.isStartOfExpression = function() {
                      var t = !0,
                        e = this.lookahead.value;
                      switch (this.lookahead.type) {
                        case 7:
                          t =
                            "[" === e ||
                            "(" === e ||
                            "{" === e ||
                            "+" === e ||
                            "-" === e ||
                            "!" === e ||
                            "~" === e ||
                            "++" === e ||
                            "--" === e ||
                            "/" === e ||
                            "/=" === e;
                          break;
                        case 4:
                          t =
                            "class" === e ||
                            "delete" === e ||
                            "function" === e ||
                            "let" === e ||
                            "new" === e ||
                            "super" === e ||
                            "this" === e ||
                            "typeof" === e ||
                            "void" === e ||
                            "yield" === e;
                      }
                      return t;
                    }),
                    (t.prototype.parseYieldExpression = function() {
                      var t = this.createNode();
                      this.expectKeyword("yield");
                      var e = null,
                        i = !1;
                      if (!this.hasLineTerminator) {
                        var n = this.context.allowYield;
                        (this.context.allowYield = !1),
                          (i = this.match("*"))
                            ? (this.nextToken(),
                              (e = this.parseAssignmentExpression()))
                            : this.isStartOfExpression() &&
                              (e = this.parseAssignmentExpression()),
                          (this.context.allowYield = n);
                      }
                      return this.finalize(t, new a.YieldExpression(e, i));
                    }),
                    (t.prototype.parseClassElement = function(t) {
                      var e = this.lookahead,
                        i = this.createNode(),
                        n = "",
                        r = null,
                        o = null,
                        u = !1,
                        h = !1,
                        c = !1,
                        l = !1;
                      if (this.match("*")) this.nextToken();
                      else if (
                        ((u = this.match("[")),
                        "static" === (r = this.parseObjectPropertyKey()).name &&
                          (this.qualifiedPropertyName(this.lookahead) ||
                            this.match("*")) &&
                          ((e = this.lookahead),
                          (c = !0),
                          (u = this.match("[")),
                          this.match("*")
                            ? this.nextToken()
                            : (r = this.parseObjectPropertyKey())),
                        3 === e.type &&
                          !this.hasLineTerminator &&
                          "async" === e.value)
                      ) {
                        var p = this.lookahead.value;
                        ":" !== p &&
                          "(" !== p &&
                          "*" !== p &&
                          ((l = !0),
                          (e = this.lookahead),
                          (r = this.parseObjectPropertyKey()),
                          3 === e.type &&
                            "constructor" === e.value &&
                            this.tolerateUnexpectedToken(
                              e,
                              s.Messages.ConstructorIsAsync
                            ));
                      }
                      var f = this.qualifiedPropertyName(this.lookahead);
                      return (
                        3 === e.type
                          ? "get" === e.value && f
                            ? ((n = "get"),
                              (u = this.match("[")),
                              (r = this.parseObjectPropertyKey()),
                              (this.context.allowYield = !1),
                              (o = this.parseGetterMethod()))
                            : "set" === e.value &&
                              f &&
                              ((n = "set"),
                              (u = this.match("[")),
                              (r = this.parseObjectPropertyKey()),
                              (o = this.parseSetterMethod()))
                          : 7 === e.type &&
                            "*" === e.value &&
                            f &&
                            ((n = "init"),
                            (u = this.match("[")),
                            (r = this.parseObjectPropertyKey()),
                            (o = this.parseGeneratorMethod()),
                            (h = !0)),
                        !n &&
                          r &&
                          this.match("(") &&
                          ((n = "init"),
                          (o = l
                            ? this.parsePropertyMethodAsyncFunction()
                            : this.parsePropertyMethodFunction()),
                          (h = !0)),
                        n || this.throwUnexpectedToken(this.lookahead),
                        "init" === n && (n = "method"),
                        u ||
                          (c &&
                            this.isPropertyKey(r, "prototype") &&
                            this.throwUnexpectedToken(
                              e,
                              s.Messages.StaticPrototype
                            ),
                          !c &&
                            this.isPropertyKey(r, "constructor") &&
                            (("method" !== n || !h || (o && o.generator)) &&
                              this.throwUnexpectedToken(
                                e,
                                s.Messages.ConstructorSpecialMethod
                              ),
                            t.value
                              ? this.throwUnexpectedToken(
                                  e,
                                  s.Messages.DuplicateConstructor
                                )
                              : (t.value = !0),
                            (n = "constructor"))),
                        this.finalize(i, new a.MethodDefinition(r, u, o, n, c))
                      );
                    }),
                    (t.prototype.parseClassElementList = function() {
                      var t = [],
                        e = { value: !1 };
                      for (this.expect("{"); !this.match("}"); )
                        this.match(";")
                          ? this.nextToken()
                          : t.push(this.parseClassElement(e));
                      return this.expect("}"), t;
                    }),
                    (t.prototype.parseClassBody = function() {
                      var t = this.createNode(),
                        e = this.parseClassElementList();
                      return this.finalize(t, new a.ClassBody(e));
                    }),
                    (t.prototype.parseClassDeclaration = function(t) {
                      var e = this.createNode(),
                        i = this.context.strict;
                      (this.context.strict = !0), this.expectKeyword("class");
                      var n =
                          t && 3 !== this.lookahead.type
                            ? null
                            : this.parseVariableIdentifier(),
                        r = null;
                      this.matchKeyword("extends") &&
                        (this.nextToken(),
                        (r = this.isolateCoverGrammar(
                          this.parseLeftHandSideExpressionAllowCall
                        )));
                      var s = this.parseClassBody();
                      return (
                        (this.context.strict = i),
                        this.finalize(e, new a.ClassDeclaration(n, r, s))
                      );
                    }),
                    (t.prototype.parseClassExpression = function() {
                      var t = this.createNode(),
                        e = this.context.strict;
                      (this.context.strict = !0), this.expectKeyword("class");
                      var i =
                          3 === this.lookahead.type
                            ? this.parseVariableIdentifier()
                            : null,
                        n = null;
                      this.matchKeyword("extends") &&
                        (this.nextToken(),
                        (n = this.isolateCoverGrammar(
                          this.parseLeftHandSideExpressionAllowCall
                        )));
                      var r = this.parseClassBody();
                      return (
                        (this.context.strict = e),
                        this.finalize(t, new a.ClassExpression(i, n, r))
                      );
                    }),
                    (t.prototype.parseModule = function() {
                      (this.context.strict = !0),
                        (this.context.isModule = !0),
                        (this.scanner.isModule = !0);
                      for (
                        var t = this.createNode(),
                          e = this.parseDirectivePrologues();
                        2 !== this.lookahead.type;

                      )
                        e.push(this.parseStatementListItem());
                      return this.finalize(t, new a.Module(e));
                    }),
                    (t.prototype.parseScript = function() {
                      for (
                        var t = this.createNode(),
                          e = this.parseDirectivePrologues();
                        2 !== this.lookahead.type;

                      )
                        e.push(this.parseStatementListItem());
                      return this.finalize(t, new a.Script(e));
                    }),
                    (t.prototype.parseModuleSpecifier = function() {
                      var t = this.createNode();
                      8 !== this.lookahead.type &&
                        this.throwError(s.Messages.InvalidModuleSpecifier);
                      var e = this.nextToken(),
                        i = this.getTokenRaw(e);
                      return this.finalize(t, new a.Literal(e.value, i));
                    }),
                    (t.prototype.parseImportSpecifier = function() {
                      var t,
                        e,
                        i = this.createNode();
                      return (
                        3 === this.lookahead.type
                          ? ((e = t = this.parseVariableIdentifier()),
                            this.matchContextualKeyword("as") &&
                              (this.nextToken(),
                              (e = this.parseVariableIdentifier())))
                          : ((e = t = this.parseIdentifierName()),
                            this.matchContextualKeyword("as")
                              ? (this.nextToken(),
                                (e = this.parseVariableIdentifier()))
                              : this.throwUnexpectedToken(this.nextToken())),
                        this.finalize(i, new a.ImportSpecifier(e, t))
                      );
                    }),
                    (t.prototype.parseNamedImports = function() {
                      this.expect("{");
                      for (var t = []; !this.match("}"); )
                        t.push(this.parseImportSpecifier()),
                          this.match("}") || this.expect(",");
                      return this.expect("}"), t;
                    }),
                    (t.prototype.parseImportDefaultSpecifier = function() {
                      var t = this.createNode(),
                        e = this.parseIdentifierName();
                      return this.finalize(t, new a.ImportDefaultSpecifier(e));
                    }),
                    (t.prototype.parseImportNamespaceSpecifier = function() {
                      var t = this.createNode();
                      this.expect("*"),
                        this.matchContextualKeyword("as") ||
                          this.throwError(s.Messages.NoAsAfterImportNamespace),
                        this.nextToken();
                      var e = this.parseIdentifierName();
                      return this.finalize(
                        t,
                        new a.ImportNamespaceSpecifier(e)
                      );
                    }),
                    (t.prototype.parseImportDeclaration = function() {
                      this.context.inFunctionBody &&
                        this.throwError(s.Messages.IllegalImportDeclaration);
                      var t,
                        e = this.createNode();
                      this.expectKeyword("import");
                      var i = [];
                      if (8 === this.lookahead.type)
                        t = this.parseModuleSpecifier();
                      else {
                        if (
                          (this.match("{")
                            ? (i = i.concat(this.parseNamedImports()))
                            : this.match("*")
                            ? i.push(this.parseImportNamespaceSpecifier())
                            : this.isIdentifierName(this.lookahead) &&
                              !this.matchKeyword("default")
                            ? (i.push(this.parseImportDefaultSpecifier()),
                              this.match(",") &&
                                (this.nextToken(),
                                this.match("*")
                                  ? i.push(this.parseImportNamespaceSpecifier())
                                  : this.match("{")
                                  ? (i = i.concat(this.parseNamedImports()))
                                  : this.throwUnexpectedToken(this.lookahead)))
                            : this.throwUnexpectedToken(this.nextToken()),
                          !this.matchContextualKeyword("from"))
                        ) {
                          var n = this.lookahead.value
                            ? s.Messages.UnexpectedToken
                            : s.Messages.MissingFromClause;
                          this.throwError(n, this.lookahead.value);
                        }
                        this.nextToken(), (t = this.parseModuleSpecifier());
                      }
                      return (
                        this.consumeSemicolon(),
                        this.finalize(e, new a.ImportDeclaration(i, t))
                      );
                    }),
                    (t.prototype.parseExportSpecifier = function() {
                      var t = this.createNode(),
                        e = this.parseIdentifierName(),
                        i = e;
                      return (
                        this.matchContextualKeyword("as") &&
                          (this.nextToken(), (i = this.parseIdentifierName())),
                        this.finalize(t, new a.ExportSpecifier(e, i))
                      );
                    }),
                    (t.prototype.parseExportDeclaration = function() {
                      this.context.inFunctionBody &&
                        this.throwError(s.Messages.IllegalExportDeclaration);
                      var t,
                        e = this.createNode();
                      if (
                        (this.expectKeyword("export"),
                        this.matchKeyword("default"))
                      )
                        if ((this.nextToken(), this.matchKeyword("function"))) {
                          var i = this.parseFunctionDeclaration(!0);
                          t = this.finalize(
                            e,
                            new a.ExportDefaultDeclaration(i)
                          );
                        } else if (this.matchKeyword("class")) {
                          i = this.parseClassDeclaration(!0);
                          t = this.finalize(
                            e,
                            new a.ExportDefaultDeclaration(i)
                          );
                        } else if (this.matchContextualKeyword("async")) {
                          i = this.matchAsyncFunction()
                            ? this.parseFunctionDeclaration(!0)
                            : this.parseAssignmentExpression();
                          t = this.finalize(
                            e,
                            new a.ExportDefaultDeclaration(i)
                          );
                        } else {
                          this.matchContextualKeyword("from") &&
                            this.throwError(
                              s.Messages.UnexpectedToken,
                              this.lookahead.value
                            );
                          i = this.match("{")
                            ? this.parseObjectInitializer()
                            : this.match("[")
                            ? this.parseArrayInitializer()
                            : this.parseAssignmentExpression();
                          this.consumeSemicolon(),
                            (t = this.finalize(
                              e,
                              new a.ExportDefaultDeclaration(i)
                            ));
                        }
                      else if (this.match("*")) {
                        if (
                          (this.nextToken(),
                          !this.matchContextualKeyword("from"))
                        ) {
                          var n = this.lookahead.value
                            ? s.Messages.UnexpectedToken
                            : s.Messages.MissingFromClause;
                          this.throwError(n, this.lookahead.value);
                        }
                        this.nextToken();
                        var r = this.parseModuleSpecifier();
                        this.consumeSemicolon(),
                          (t = this.finalize(e, new a.ExportAllDeclaration(r)));
                      } else if (4 === this.lookahead.type) {
                        i = void 0;
                        switch (this.lookahead.value) {
                          case "let":
                          case "const":
                            i = this.parseLexicalDeclaration({ inFor: !1 });
                            break;
                          case "var":
                          case "class":
                          case "function":
                            i = this.parseStatementListItem();
                            break;
                          default:
                            this.throwUnexpectedToken(this.lookahead);
                        }
                        t = this.finalize(
                          e,
                          new a.ExportNamedDeclaration(i, [], null)
                        );
                      } else if (this.matchAsyncFunction()) {
                        i = this.parseFunctionDeclaration();
                        t = this.finalize(
                          e,
                          new a.ExportNamedDeclaration(i, [], null)
                        );
                      } else {
                        var o = [],
                          u = null,
                          h = !1;
                        for (this.expect("{"); !this.match("}"); )
                          (h = h || this.matchKeyword("default")),
                            o.push(this.parseExportSpecifier()),
                            this.match("}") || this.expect(",");
                        if (
                          (this.expect("}"),
                          this.matchContextualKeyword("from"))
                        )
                          this.nextToken(),
                            (u = this.parseModuleSpecifier()),
                            this.consumeSemicolon();
                        else if (h) {
                          n = this.lookahead.value
                            ? s.Messages.UnexpectedToken
                            : s.Messages.MissingFromClause;
                          this.throwError(n, this.lookahead.value);
                        } else this.consumeSemicolon();
                        t = this.finalize(
                          e,
                          new a.ExportNamedDeclaration(null, o, u)
                        );
                      }
                      return t;
                    }),
                    t
                  );
                })();
              e.Parser = c;
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.assert = function(t, e) {
                  if (!t) throw new Error("ASSERT: " + e);
                });
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = (function() {
                function t() {
                  (this.errors = []), (this.tolerant = !1);
                }
                return (
                  (t.prototype.recordError = function(t) {
                    this.errors.push(t);
                  }),
                  (t.prototype.tolerate = function(t) {
                    if (!this.tolerant) throw t;
                    this.recordError(t);
                  }),
                  (t.prototype.constructError = function(t, e) {
                    var i = new Error(t);
                    try {
                      throw i;
                    } catch (n) {
                      Object.create &&
                        Object.defineProperty &&
                        ((i = Object.create(n)),
                        Object.defineProperty(i, "column", { value: e }));
                    }
                    return i;
                  }),
                  (t.prototype.createError = function(t, e, i, n) {
                    var r = "Line " + e + ": " + n,
                      s = this.constructError(r, i);
                    return (
                      (s.index = t), (s.lineNumber = e), (s.description = n), s
                    );
                  }),
                  (t.prototype.throwError = function(t, e, i, n) {
                    throw this.createError(t, e, i, n);
                  }),
                  (t.prototype.tolerateError = function(t, e, i, n) {
                    var r = this.createError(t, e, i, n);
                    if (!this.tolerant) throw r;
                    this.recordError(r);
                  }),
                  t
                );
              })();
              e.ErrorHandler = i;
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.Messages = {
                  BadGetterArity: "Getter must not have any formal parameters",
                  BadSetterArity:
                    "Setter must have exactly one formal parameter",
                  BadSetterRestParameter:
                    "Setter function argument must not be a rest parameter",
                  ConstructorIsAsync:
                    "Class constructor may not be an async method",
                  ConstructorSpecialMethod:
                    "Class constructor may not be an accessor",
                  DeclarationMissingInitializer:
                    "Missing initializer in %0 declaration",
                  DefaultRestParameter: "Unexpected token =",
                  DuplicateBinding: "Duplicate binding %0",
                  DuplicateConstructor: "A class may only have one constructor",
                  DuplicateProtoProperty:
                    "Duplicate __proto__ fields are not allowed in object literals",
                  ForInOfLoopInitializer:
                    "%0 loop variable declaration may not have an initializer",
                  GeneratorInLegacyContext:
                    "Generator declarations are not allowed in legacy contexts",
                  IllegalBreak: "Illegal break statement",
                  IllegalContinue: "Illegal continue statement",
                  IllegalExportDeclaration: "Unexpected token",
                  IllegalImportDeclaration: "Unexpected token",
                  IllegalLanguageModeDirective:
                    "Illegal 'use strict' directive in function with non-simple parameter list",
                  IllegalReturn: "Illegal return statement",
                  InvalidEscapedReservedWord:
                    "Keyword must not contain escaped characters",
                  InvalidHexEscapeSequence:
                    "Invalid hexadecimal escape sequence",
                  InvalidLHSInAssignment:
                    "Invalid left-hand side in assignment",
                  InvalidLHSInForIn: "Invalid left-hand side in for-in",
                  InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                  InvalidModuleSpecifier: "Unexpected token",
                  InvalidRegExp: "Invalid regular expression",
                  LetInLexicalBinding:
                    "let is disallowed as a lexically bound name",
                  MissingFromClause: "Unexpected token",
                  MultipleDefaultsInSwitch:
                    "More than one default clause in switch statement",
                  NewlineAfterThrow: "Illegal newline after throw",
                  NoAsAfterImportNamespace: "Unexpected token",
                  NoCatchOrFinally: "Missing catch or finally after try",
                  ParameterAfterRestParameter:
                    "Rest parameter must be last formal parameter",
                  Redeclaration: "%0 '%1' has already been declared",
                  StaticPrototype:
                    "Classes may not have static property named prototype",
                  StrictCatchVariable:
                    "Catch variable may not be eval or arguments in strict mode",
                  StrictDelete:
                    "Delete of an unqualified identifier in strict mode.",
                  StrictFunction:
                    "In strict mode code, functions can only be declared at top level or inside a block",
                  StrictFunctionName:
                    "Function name may not be eval or arguments in strict mode",
                  StrictLHSAssignment:
                    "Assignment to eval or arguments is not allowed in strict mode",
                  StrictLHSPostfix:
                    "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                  StrictLHSPrefix:
                    "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                  StrictModeWith:
                    "Strict mode code may not include a with statement",
                  StrictOctalLiteral:
                    "Octal literals are not allowed in strict mode.",
                  StrictParamDupe:
                    "Strict mode function may not have duplicate parameter names",
                  StrictParamName:
                    "Parameter name eval or arguments is not allowed in strict mode",
                  StrictReservedWord:
                    "Use of future reserved word in strict mode",
                  StrictVarName:
                    "Variable name may not be eval or arguments in strict mode",
                  TemplateOctalLiteral:
                    "Octal literals are not allowed in template strings.",
                  UnexpectedEOS: "Unexpected end of input",
                  UnexpectedIdentifier: "Unexpected identifier",
                  UnexpectedNumber: "Unexpected number",
                  UnexpectedReserved: "Unexpected reserved word",
                  UnexpectedString: "Unexpected string",
                  UnexpectedTemplate: "Unexpected quasi %0",
                  UnexpectedToken: "Unexpected token %0",
                  UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                  UnknownLabel: "Undefined label '%0'",
                  UnterminatedRegExp: "Invalid regular expression: missing /"
                });
            },
            function(t, e, i) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = i(9),
                r = i(4),
                s = i(11);
              function a(t) {
                return "0123456789abcdef".indexOf(t.toLowerCase());
              }
              function o(t) {
                return "01234567".indexOf(t);
              }
              var u = (function() {
                function t(t, e) {
                  (this.source = t),
                    (this.errorHandler = e),
                    (this.trackComment = !1),
                    (this.isModule = !1),
                    (this.length = t.length),
                    (this.index = 0),
                    (this.lineNumber = t.length > 0 ? 1 : 0),
                    (this.lineStart = 0),
                    (this.curlyStack = []);
                }
                return (
                  (t.prototype.saveState = function() {
                    return {
                      index: this.index,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart
                    };
                  }),
                  (t.prototype.restoreState = function(t) {
                    (this.index = t.index),
                      (this.lineNumber = t.lineNumber),
                      (this.lineStart = t.lineStart);
                  }),
                  (t.prototype.eof = function() {
                    return this.index >= this.length;
                  }),
                  (t.prototype.throwUnexpectedToken = function(t) {
                    return (
                      void 0 === t && (t = s.Messages.UnexpectedTokenIllegal),
                      this.errorHandler.throwError(
                        this.index,
                        this.lineNumber,
                        this.index - this.lineStart + 1,
                        t
                      )
                    );
                  }),
                  (t.prototype.tolerateUnexpectedToken = function(t) {
                    void 0 === t && (t = s.Messages.UnexpectedTokenIllegal),
                      this.errorHandler.tolerateError(
                        this.index,
                        this.lineNumber,
                        this.index - this.lineStart + 1,
                        t
                      );
                  }),
                  (t.prototype.skipSingleLineComment = function(t) {
                    var e,
                      i,
                      n = [];
                    for (
                      this.trackComment &&
                      ((n = []),
                      (e = this.index - t),
                      (i = {
                        start: {
                          line: this.lineNumber,
                          column: this.index - this.lineStart - t
                        },
                        end: {}
                      }));
                      !this.eof();

                    ) {
                      var s = this.source.charCodeAt(this.index);
                      if ((++this.index, r.Character.isLineTerminator(s))) {
                        if (this.trackComment) {
                          i.end = {
                            line: this.lineNumber,
                            column: this.index - this.lineStart - 1
                          };
                          var a = {
                            multiLine: !1,
                            slice: [e + t, this.index - 1],
                            range: [e, this.index - 1],
                            loc: i
                          };
                          n.push(a);
                        }
                        return (
                          13 === s &&
                            10 === this.source.charCodeAt(this.index) &&
                            ++this.index,
                          ++this.lineNumber,
                          (this.lineStart = this.index),
                          n
                        );
                      }
                    }
                    if (this.trackComment) {
                      i.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart
                      };
                      a = {
                        multiLine: !1,
                        slice: [e + t, this.index],
                        range: [e, this.index],
                        loc: i
                      };
                      n.push(a);
                    }
                    return n;
                  }),
                  (t.prototype.skipMultiLineComment = function() {
                    var t,
                      e,
                      i = [];
                    for (
                      this.trackComment &&
                      ((i = []),
                      (t = this.index - 2),
                      (e = {
                        start: {
                          line: this.lineNumber,
                          column: this.index - this.lineStart - 2
                        },
                        end: {}
                      }));
                      !this.eof();

                    ) {
                      var n = this.source.charCodeAt(this.index);
                      if (r.Character.isLineTerminator(n))
                        13 === n &&
                          10 === this.source.charCodeAt(this.index + 1) &&
                          ++this.index,
                          ++this.lineNumber,
                          ++this.index,
                          (this.lineStart = this.index);
                      else if (42 === n) {
                        if (47 === this.source.charCodeAt(this.index + 1)) {
                          if (((this.index += 2), this.trackComment)) {
                            e.end = {
                              line: this.lineNumber,
                              column: this.index - this.lineStart
                            };
                            var s = {
                              multiLine: !0,
                              slice: [t + 2, this.index - 2],
                              range: [t, this.index],
                              loc: e
                            };
                            i.push(s);
                          }
                          return i;
                        }
                        ++this.index;
                      } else ++this.index;
                    }
                    if (this.trackComment) {
                      e.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart
                      };
                      s = {
                        multiLine: !0,
                        slice: [t + 2, this.index],
                        range: [t, this.index],
                        loc: e
                      };
                      i.push(s);
                    }
                    return this.tolerateUnexpectedToken(), i;
                  }),
                  (t.prototype.scanComments = function() {
                    var t;
                    this.trackComment && (t = []);
                    for (var e = 0 === this.index; !this.eof(); ) {
                      var i = this.source.charCodeAt(this.index);
                      if (r.Character.isWhiteSpace(i)) ++this.index;
                      else if (r.Character.isLineTerminator(i))
                        ++this.index,
                          13 === i &&
                            10 === this.source.charCodeAt(this.index) &&
                            ++this.index,
                          ++this.lineNumber,
                          (this.lineStart = this.index),
                          (e = !0);
                      else if (47 === i)
                        if (
                          47 === (i = this.source.charCodeAt(this.index + 1))
                        ) {
                          this.index += 2;
                          var n = this.skipSingleLineComment(2);
                          this.trackComment && (t = t.concat(n)), (e = !0);
                        } else {
                          if (42 !== i) break;
                          this.index += 2;
                          n = this.skipMultiLineComment();
                          this.trackComment && (t = t.concat(n));
                        }
                      else if (e && 45 === i) {
                        if (
                          45 !== this.source.charCodeAt(this.index + 1) ||
                          62 !== this.source.charCodeAt(this.index + 2)
                        )
                          break;
                        this.index += 3;
                        n = this.skipSingleLineComment(3);
                        this.trackComment && (t = t.concat(n));
                      } else {
                        if (60 !== i || this.isModule) break;
                        if (
                          "!--" !==
                          this.source.slice(this.index + 1, this.index + 4)
                        )
                          break;
                        this.index += 4;
                        n = this.skipSingleLineComment(4);
                        this.trackComment && (t = t.concat(n));
                      }
                    }
                    return t;
                  }),
                  (t.prototype.isFutureReservedWord = function(t) {
                    switch (t) {
                      case "enum":
                      case "export":
                      case "import":
                      case "super":
                        return !0;
                      default:
                        return !1;
                    }
                  }),
                  (t.prototype.isStrictModeReservedWord = function(t) {
                    switch (t) {
                      case "implements":
                      case "interface":
                      case "package":
                      case "private":
                      case "protected":
                      case "public":
                      case "static":
                      case "yield":
                      case "let":
                        return !0;
                      default:
                        return !1;
                    }
                  }),
                  (t.prototype.isRestrictedWord = function(t) {
                    return "eval" === t || "arguments" === t;
                  }),
                  (t.prototype.isKeyword = function(t) {
                    switch (t.length) {
                      case 2:
                        return "if" === t || "in" === t || "do" === t;
                      case 3:
                        return (
                          "var" === t ||
                          "for" === t ||
                          "new" === t ||
                          "try" === t ||
                          "let" === t
                        );
                      case 4:
                        return (
                          "this" === t ||
                          "else" === t ||
                          "case" === t ||
                          "void" === t ||
                          "with" === t ||
                          "enum" === t
                        );
                      case 5:
                        return (
                          "while" === t ||
                          "break" === t ||
                          "catch" === t ||
                          "throw" === t ||
                          "const" === t ||
                          "yield" === t ||
                          "class" === t ||
                          "super" === t
                        );
                      case 6:
                        return (
                          "return" === t ||
                          "typeof" === t ||
                          "delete" === t ||
                          "switch" === t ||
                          "export" === t ||
                          "import" === t
                        );
                      case 7:
                        return (
                          "default" === t || "finally" === t || "extends" === t
                        );
                      case 8:
                        return (
                          "function" === t ||
                          "continue" === t ||
                          "debugger" === t
                        );
                      case 10:
                        return "instanceof" === t;
                      default:
                        return !1;
                    }
                  }),
                  (t.prototype.codePointAt = function(t) {
                    var e = this.source.charCodeAt(t);
                    if (e >= 55296 && e <= 56319) {
                      var i = this.source.charCodeAt(t + 1);
                      if (i >= 56320 && i <= 57343)
                        e = 1024 * (e - 55296) + i - 56320 + 65536;
                    }
                    return e;
                  }),
                  (t.prototype.scanHexEscape = function(t) {
                    for (var e = "u" === t ? 4 : 2, i = 0, n = 0; n < e; ++n) {
                      if (
                        this.eof() ||
                        !r.Character.isHexDigit(
                          this.source.charCodeAt(this.index)
                        )
                      )
                        return null;
                      i = 16 * i + a(this.source[this.index++]);
                    }
                    return String.fromCharCode(i);
                  }),
                  (t.prototype.scanUnicodeCodePointEscape = function() {
                    var t = this.source[this.index],
                      e = 0;
                    for (
                      "}" === t && this.throwUnexpectedToken();
                      !this.eof() &&
                      ((t = this.source[this.index++]),
                      r.Character.isHexDigit(t.charCodeAt(0)));

                    )
                      e = 16 * e + a(t);
                    return (
                      (e > 1114111 || "}" !== t) && this.throwUnexpectedToken(),
                      r.Character.fromCodePoint(e)
                    );
                  }),
                  (t.prototype.getIdentifier = function() {
                    for (var t = this.index++; !this.eof(); ) {
                      var e = this.source.charCodeAt(this.index);
                      if (92 === e)
                        return (this.index = t), this.getComplexIdentifier();
                      if (e >= 55296 && e < 57343)
                        return (this.index = t), this.getComplexIdentifier();
                      if (!r.Character.isIdentifierPart(e)) break;
                      ++this.index;
                    }
                    return this.source.slice(t, this.index);
                  }),
                  (t.prototype.getComplexIdentifier = function() {
                    var t,
                      e = this.codePointAt(this.index),
                      i = r.Character.fromCodePoint(e);
                    for (
                      this.index += i.length,
                        92 === e &&
                          (117 !== this.source.charCodeAt(this.index) &&
                            this.throwUnexpectedToken(),
                          ++this.index,
                          "{" === this.source[this.index]
                            ? (++this.index,
                              (t = this.scanUnicodeCodePointEscape()))
                            : (null !== (t = this.scanHexEscape("u")) &&
                                "\\" !== t &&
                                r.Character.isIdentifierStart(
                                  t.charCodeAt(0)
                                )) ||
                              this.throwUnexpectedToken(),
                          (i = t));
                      !this.eof() &&
                      ((e = this.codePointAt(this.index)),
                      r.Character.isIdentifierPart(e));

                    )
                      (i += t = r.Character.fromCodePoint(e)),
                        (this.index += t.length),
                        92 === e &&
                          ((i = i.substr(0, i.length - 1)),
                          117 !== this.source.charCodeAt(this.index) &&
                            this.throwUnexpectedToken(),
                          ++this.index,
                          "{" === this.source[this.index]
                            ? (++this.index,
                              (t = this.scanUnicodeCodePointEscape()))
                            : (null !== (t = this.scanHexEscape("u")) &&
                                "\\" !== t &&
                                r.Character.isIdentifierPart(
                                  t.charCodeAt(0)
                                )) ||
                              this.throwUnexpectedToken(),
                          (i += t));
                    return i;
                  }),
                  (t.prototype.octalToDecimal = function(t) {
                    var e = "0" !== t,
                      i = o(t);
                    return (
                      !this.eof() &&
                        r.Character.isOctalDigit(
                          this.source.charCodeAt(this.index)
                        ) &&
                        ((e = !0),
                        (i = 8 * i + o(this.source[this.index++])),
                        "0123".indexOf(t) >= 0 &&
                          !this.eof() &&
                          r.Character.isOctalDigit(
                            this.source.charCodeAt(this.index)
                          ) &&
                          (i = 8 * i + o(this.source[this.index++]))),
                      {
                        code: i,
                        octal: e
                      }
                    );
                  }),
                  (t.prototype.scanIdentifier = function() {
                    var t,
                      e = this.index,
                      i =
                        92 === this.source.charCodeAt(e)
                          ? this.getComplexIdentifier()
                          : this.getIdentifier();
                    if (
                      3 !==
                        (t =
                          1 === i.length
                            ? 3
                            : this.isKeyword(i)
                            ? 4
                            : "null" === i
                            ? 5
                            : "true" === i || "false" === i
                            ? 1
                            : 3) &&
                      e + i.length !== this.index
                    ) {
                      var n = this.index;
                      (this.index = e),
                        this.tolerateUnexpectedToken(
                          s.Messages.InvalidEscapedReservedWord
                        ),
                        (this.index = n);
                    }
                    return {
                      type: t,
                      value: i,
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: e,
                      end: this.index
                    };
                  }),
                  (t.prototype.scanPunctuator = function() {
                    var t = this.index,
                      e = this.source[this.index];
                    switch (e) {
                      case "(":
                      case "{":
                        "{" === e && this.curlyStack.push("{"), ++this.index;
                        break;
                      case ".":
                        ++this.index,
                          "." === this.source[this.index] &&
                            "." === this.source[this.index + 1] &&
                            ((this.index += 2), (e = "..."));
                        break;
                      case "}":
                        ++this.index, this.curlyStack.pop();
                        break;
                      case ")":
                      case ";":
                      case ",":
                      case "[":
                      case "]":
                      case ":":
                      case "?":
                      case "~":
                        ++this.index;
                        break;
                      default:
                        ">>>=" === (e = this.source.substr(this.index, 4))
                          ? (this.index += 4)
                          : "===" === (e = e.substr(0, 3)) ||
                            "!==" === e ||
                            ">>>" === e ||
                            "<<=" === e ||
                            ">>=" === e ||
                            "**=" === e
                          ? (this.index += 3)
                          : "&&" === (e = e.substr(0, 2)) ||
                            "||" === e ||
                            "==" === e ||
                            "!=" === e ||
                            "+=" === e ||
                            "-=" === e ||
                            "*=" === e ||
                            "/=" === e ||
                            "++" === e ||
                            "--" === e ||
                            "<<" === e ||
                            ">>" === e ||
                            "&=" === e ||
                            "|=" === e ||
                            "^=" === e ||
                            "%=" === e ||
                            "<=" === e ||
                            ">=" === e ||
                            "=>" === e ||
                            "**" === e
                          ? (this.index += 2)
                          : ((e = this.source[this.index]),
                            "<>=!+-*%&|^/".indexOf(e) >= 0 && ++this.index);
                    }
                    return (
                      this.index === t && this.throwUnexpectedToken(),
                      {
                        type: 7,
                        value: e,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: t,
                        end: this.index
                      }
                    );
                  }),
                  (t.prototype.scanHexLiteral = function(t) {
                    for (
                      var e = "";
                      !this.eof() &&
                      r.Character.isHexDigit(
                        this.source.charCodeAt(this.index)
                      );

                    )
                      e += this.source[this.index++];
                    return (
                      0 === e.length && this.throwUnexpectedToken(),
                      r.Character.isIdentifierStart(
                        this.source.charCodeAt(this.index)
                      ) && this.throwUnexpectedToken(),
                      {
                        type: 6,
                        value: parseInt("0x" + e, 16),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: t,
                        end: this.index
                      }
                    );
                  }),
                  (t.prototype.scanBinaryLiteral = function(t) {
                    for (
                      var e, i = "";
                      !this.eof() &&
                      ("0" === (e = this.source[this.index]) || "1" === e);

                    )
                      i += this.source[this.index++];
                    return (
                      0 === i.length && this.throwUnexpectedToken(),
                      this.eof() ||
                        ((e = this.source.charCodeAt(this.index)),
                        (r.Character.isIdentifierStart(e) ||
                          r.Character.isDecimalDigit(e)) &&
                          this.throwUnexpectedToken()),
                      {
                        type: 6,
                        value: parseInt(i, 2),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: t,
                        end: this.index
                      }
                    );
                  }),
                  (t.prototype.scanOctalLiteral = function(t, e) {
                    var i = "",
                      n = !1;
                    for (
                      r.Character.isOctalDigit(t.charCodeAt(0))
                        ? ((n = !0), (i = "0" + this.source[this.index++]))
                        : ++this.index;
                      !this.eof() &&
                      r.Character.isOctalDigit(
                        this.source.charCodeAt(this.index)
                      );

                    )
                      i += this.source[this.index++];
                    return (
                      n || 0 !== i.length || this.throwUnexpectedToken(),
                      (r.Character.isIdentifierStart(
                        this.source.charCodeAt(this.index)
                      ) ||
                        r.Character.isDecimalDigit(
                          this.source.charCodeAt(this.index)
                        )) &&
                        this.throwUnexpectedToken(),
                      {
                        type: 6,
                        value: parseInt(i, 8),
                        octal: n,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: e,
                        end: this.index
                      }
                    );
                  }),
                  (t.prototype.isImplicitOctalLiteral = function() {
                    for (var t = this.index + 1; t < this.length; ++t) {
                      var e = this.source[t];
                      if ("8" === e || "9" === e) return !1;
                      if (!r.Character.isOctalDigit(e.charCodeAt(0))) return !0;
                    }
                    return !0;
                  }),
                  (t.prototype.scanNumericLiteral = function() {
                    var t = this.index,
                      e = this.source[t];
                    n.assert(
                      r.Character.isDecimalDigit(e.charCodeAt(0)) || "." === e,
                      "Numeric literal must start with a decimal digit or a decimal point"
                    );
                    var i = "";
                    if ("." !== e) {
                      if (
                        ((i = this.source[this.index++]),
                        (e = this.source[this.index]),
                        "0" === i)
                      ) {
                        if ("x" === e || "X" === e)
                          return ++this.index, this.scanHexLiteral(t);
                        if ("b" === e || "B" === e)
                          return ++this.index, this.scanBinaryLiteral(t);
                        if ("o" === e || "O" === e)
                          return this.scanOctalLiteral(e, t);
                        if (
                          e &&
                          r.Character.isOctalDigit(e.charCodeAt(0)) &&
                          this.isImplicitOctalLiteral()
                        )
                          return this.scanOctalLiteral(e, t);
                      }
                      for (
                        ;
                        r.Character.isDecimalDigit(
                          this.source.charCodeAt(this.index)
                        );

                      )
                        i += this.source[this.index++];
                      e = this.source[this.index];
                    }
                    if ("." === e) {
                      for (
                        i += this.source[this.index++];
                        r.Character.isDecimalDigit(
                          this.source.charCodeAt(this.index)
                        );

                      )
                        i += this.source[this.index++];
                      e = this.source[this.index];
                    }
                    if ("e" === e || "E" === e)
                      if (
                        ((i += this.source[this.index++]),
                        ("+" !== (e = this.source[this.index]) && "-" !== e) ||
                          (i += this.source[this.index++]),
                        r.Character.isDecimalDigit(
                          this.source.charCodeAt(this.index)
                        ))
                      )
                        for (
                          ;
                          r.Character.isDecimalDigit(
                            this.source.charCodeAt(this.index)
                          );

                        )
                          i += this.source[this.index++];
                      else this.throwUnexpectedToken();
                    return (
                      r.Character.isIdentifierStart(
                        this.source.charCodeAt(this.index)
                      ) && this.throwUnexpectedToken(),
                      {
                        type: 6,
                        value: parseFloat(i),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: t,
                        end: this.index
                      }
                    );
                  }),
                  (t.prototype.scanStringLiteral = function() {
                    var t = this.index,
                      e = this.source[t];
                    n.assert(
                      "'" === e || '"' === e,
                      "String literal must starts with a quote"
                    ),
                      ++this.index;
                    for (var i = !1, a = ""; !this.eof(); ) {
                      var o = this.source[this.index++];
                      if (o === e) {
                        e = "";
                        break;
                      }
                      if ("\\" === o)
                        if (
                          (o = this.source[this.index++]) &&
                          r.Character.isLineTerminator(o.charCodeAt(0))
                        )
                          ++this.lineNumber,
                            "\r" === o &&
                              "\n" === this.source[this.index] &&
                              ++this.index,
                            (this.lineStart = this.index);
                        else
                          switch (o) {
                            case "u":
                              if ("{" === this.source[this.index])
                                ++this.index,
                                  (a += this.scanUnicodeCodePointEscape());
                              else {
                                var u = this.scanHexEscape(o);
                                null === u && this.throwUnexpectedToken(),
                                  (a += u);
                              }
                              break;
                            case "x":
                              var h = this.scanHexEscape(o);
                              null === h &&
                                this.throwUnexpectedToken(
                                  s.Messages.InvalidHexEscapeSequence
                                ),
                                (a += h);
                              break;
                            case "n":
                              a += "\n";
                              break;
                            case "r":
                              a += "\r";
                              break;
                            case "t":
                              a += "\t";
                              break;
                            case "b":
                              a += "\b";
                              break;
                            case "f":
                              a += "\f";
                              break;
                            case "v":
                              a += "\v";
                              break;
                            case "8":
                            case "9":
                              (a += o), this.tolerateUnexpectedToken();
                              break;
                            default:
                              if (
                                o &&
                                r.Character.isOctalDigit(o.charCodeAt(0))
                              ) {
                                var c = this.octalToDecimal(o);
                                (i = c.octal || i),
                                  (a += String.fromCharCode(c.code));
                              } else a += o;
                          }
                      else {
                        if (r.Character.isLineTerminator(o.charCodeAt(0)))
                          break;
                        a += o;
                      }
                    }
                    return (
                      "" !== e &&
                        ((this.index = t), this.throwUnexpectedToken()),
                      {
                        type: 8,
                        value: a,
                        octal: i,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: t,
                        end: this.index
                      }
                    );
                  }),
                  (t.prototype.scanTemplate = function() {
                    var t = "",
                      e = !1,
                      i = this.index,
                      n = "`" === this.source[i],
                      a = !1,
                      o = 2;
                    for (++this.index; !this.eof(); ) {
                      var u = this.source[this.index++];
                      if ("`" === u) {
                        (o = 1), (a = !0), (e = !0);
                        break;
                      }
                      if ("$" === u) {
                        if ("{" === this.source[this.index]) {
                          this.curlyStack.push("${"), ++this.index, (e = !0);
                          break;
                        }
                        t += u;
                      } else if ("\\" === u)
                        if (
                          ((u = this.source[this.index++]),
                          r.Character.isLineTerminator(u.charCodeAt(0)))
                        )
                          ++this.lineNumber,
                            "\r" === u &&
                              "\n" === this.source[this.index] &&
                              ++this.index,
                            (this.lineStart = this.index);
                        else
                          switch (u) {
                            case "n":
                              t += "\n";
                              break;
                            case "r":
                              t += "\r";
                              break;
                            case "t":
                              t += "\t";
                              break;
                            case "u":
                              if ("{" === this.source[this.index])
                                ++this.index,
                                  (t += this.scanUnicodeCodePointEscape());
                              else {
                                var h = this.index,
                                  c = this.scanHexEscape(u);
                                null !== c
                                  ? (t += c)
                                  : ((this.index = h), (t += u));
                              }
                              break;
                            case "x":
                              var l = this.scanHexEscape(u);
                              null === l &&
                                this.throwUnexpectedToken(
                                  s.Messages.InvalidHexEscapeSequence
                                ),
                                (t += l);
                              break;
                            case "b":
                              t += "\b";
                              break;
                            case "f":
                              t += "\f";
                              break;
                            case "v":
                              t += "\v";
                              break;
                            default:
                              "0" === u
                                ? (r.Character.isDecimalDigit(
                                    this.source.charCodeAt(this.index)
                                  ) &&
                                    this.throwUnexpectedToken(
                                      s.Messages.TemplateOctalLiteral
                                    ),
                                  (t += "\0"))
                                : r.Character.isOctalDigit(u.charCodeAt(0))
                                ? this.throwUnexpectedToken(
                                    s.Messages.TemplateOctalLiteral
                                  )
                                : (t += u);
                          }
                      else
                        r.Character.isLineTerminator(u.charCodeAt(0))
                          ? (++this.lineNumber,
                            "\r" === u &&
                              "\n" === this.source[this.index] &&
                              ++this.index,
                            (this.lineStart = this.index),
                            (t += "\n"))
                          : (t += u);
                    }
                    return (
                      e || this.throwUnexpectedToken(),
                      n || this.curlyStack.pop(),
                      {
                        type: 10,
                        value: this.source.slice(i + 1, this.index - o),
                        cooked: t,
                        head: n,
                        tail: a,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: i,
                        end: this.index
                      }
                    );
                  }),
                  (t.prototype.testRegExp = function(t, e) {
                    var i = t,
                      n = this;
                    e.indexOf("u") >= 0 &&
                      (i = i
                        .replace(
                          /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                          function(t, e, i) {
                            var r = parseInt(e || i, 16);
                            return (
                              r > 1114111 &&
                                n.throwUnexpectedToken(
                                  s.Messages.InvalidRegExp
                                ),
                              r <= 65535 ? String.fromCharCode(r) : "￿"
                            );
                          }
                        )
                        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));
                    try {
                      RegExp(i);
                    } catch (r) {
                      this.throwUnexpectedToken(s.Messages.InvalidRegExp);
                    }
                    try {
                      return new RegExp(t, e);
                    } catch (a) {
                      return null;
                    }
                  }),
                  (t.prototype.scanRegExpBody = function() {
                    var t = this.source[this.index];
                    n.assert(
                      "/" === t,
                      "Regular expression literal must start with a slash"
                    );
                    for (
                      var e = this.source[this.index++], i = !1, a = !1;
                      !this.eof();

                    )
                      if (((e += t = this.source[this.index++]), "\\" === t))
                        (t = this.source[this.index++]),
                          r.Character.isLineTerminator(t.charCodeAt(0)) &&
                            this.throwUnexpectedToken(
                              s.Messages.UnterminatedRegExp
                            ),
                          (e += t);
                      else if (r.Character.isLineTerminator(t.charCodeAt(0)))
                        this.throwUnexpectedToken(
                          s.Messages.UnterminatedRegExp
                        );
                      else if (i) "]" === t && (i = !1);
                      else {
                        if ("/" === t) {
                          a = !0;
                          break;
                        }
                        "[" === t && (i = !0);
                      }
                    return (
                      a ||
                        this.throwUnexpectedToken(
                          s.Messages.UnterminatedRegExp
                        ),
                      e.substr(1, e.length - 2)
                    );
                  }),
                  (t.prototype.scanRegExpFlags = function() {
                    for (var t = ""; !this.eof(); ) {
                      var e = this.source[this.index];
                      if (!r.Character.isIdentifierPart(e.charCodeAt(0))) break;
                      if ((++this.index, "\\" !== e || this.eof())) (t += e), e;
                      else if ("u" === (e = this.source[this.index])) {
                        ++this.index;
                        var i = this.index,
                          n = this.scanHexEscape("u");
                        if (null !== n)
                          for (t += n, "\\u"; i < this.index; ++i)
                            this.source[i];
                        else (this.index = i), (t += "u"), "\\u";
                        this.tolerateUnexpectedToken();
                      } else "\\", this.tolerateUnexpectedToken();
                    }
                    return t;
                  }),
                  (t.prototype.scanRegExp = function() {
                    var t = this.index,
                      e = this.scanRegExpBody(),
                      i = this.scanRegExpFlags();
                    return {
                      type: 9,
                      value: "",
                      pattern: e,
                      flags: i,
                      regex: this.testRegExp(e, i),
                      lineNumber: this.lineNumber,
                      lineStart: this.lineStart,
                      start: t,
                      end: this.index
                    };
                  }),
                  (t.prototype.lex = function() {
                    if (this.eof())
                      return {
                        type: 2,
                        value: "",
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: this.index,
                        end: this.index
                      };
                    var t = this.source.charCodeAt(this.index);
                    return r.Character.isIdentifierStart(t)
                      ? this.scanIdentifier()
                      : 40 === t || 41 === t || 59 === t
                      ? this.scanPunctuator()
                      : 39 === t || 34 === t
                      ? this.scanStringLiteral()
                      : 46 === t
                      ? r.Character.isDecimalDigit(
                          this.source.charCodeAt(this.index + 1)
                        )
                        ? this.scanNumericLiteral()
                        : this.scanPunctuator()
                      : r.Character.isDecimalDigit(t)
                      ? this.scanNumericLiteral()
                      : 96 === t ||
                        (125 === t &&
                          "${" === this.curlyStack[this.curlyStack.length - 1])
                      ? this.scanTemplate()
                      : t >= 55296 &&
                        t < 57343 &&
                        r.Character.isIdentifierStart(
                          this.codePointAt(this.index)
                        )
                      ? this.scanIdentifier()
                      : this.scanPunctuator();
                  }),
                  t
                );
              })();
              e.Scanner = u;
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.TokenName = {}),
                (e.TokenName[1] = "Boolean"),
                (e.TokenName[2] = "<end>"),
                (e.TokenName[3] = "Identifier"),
                (e.TokenName[4] = "Keyword"),
                (e.TokenName[5] = "Null"),
                (e.TokenName[6] = "Numeric"),
                (e.TokenName[7] = "Punctuator"),
                (e.TokenName[8] = "String"),
                (e.TokenName[9] = "RegularExpression"),
                (e.TokenName[10] = "Template");
            },
            function(t, e) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.XHTMLEntities = {
                  quot: '"',
                  amp: "&",
                  apos: "'",
                  gt: ">",
                  nbsp: " ",
                  iexcl: "¡",
                  cent: "¢",
                  pound: "£",
                  curren: "¤",
                  yen: "¥",
                  brvbar: "¦",
                  sect: "§",
                  uml: "¨",
                  copy: "©",
                  ordf: "ª",
                  laquo: "«",
                  not: "¬",
                  shy: "­",
                  reg: "®",
                  macr: "¯",
                  deg: "°",
                  plusmn: "±",
                  sup2: "²",
                  sup3: "³",
                  acute: "´",
                  micro: "µ",
                  para: "¶",
                  middot: "·",
                  cedil: "¸",
                  sup1: "¹",
                  ordm: "º",
                  raquo: "»",
                  frac14: "¼",
                  frac12: "½",
                  frac34: "¾",
                  iquest: "¿",
                  Agrave: "À",
                  Aacute: "Á",
                  Acirc: "Â",
                  Atilde: "Ã",
                  Auml: "Ä",
                  Aring: "Å",
                  AElig: "Æ",
                  Ccedil: "Ç",
                  Egrave: "È",
                  Eacute: "É",
                  Ecirc: "Ê",
                  Euml: "Ë",
                  Igrave: "Ì",
                  Iacute: "Í",
                  Icirc: "Î",
                  Iuml: "Ï",
                  ETH: "Ð",
                  Ntilde: "Ñ",
                  Ograve: "Ò",
                  Oacute: "Ó",
                  Ocirc: "Ô",
                  Otilde: "Õ",
                  Ouml: "Ö",
                  times: "×",
                  Oslash: "Ø",
                  Ugrave: "Ù",
                  Uacute: "Ú",
                  Ucirc: "Û",
                  Uuml: "Ü",
                  Yacute: "Ý",
                  THORN: "Þ",
                  szlig: "ß",
                  agrave: "à",
                  aacute: "á",
                  acirc: "â",
                  atilde: "ã",
                  auml: "ä",
                  aring: "å",
                  aelig: "æ",
                  ccedil: "ç",
                  egrave: "è",
                  eacute: "é",
                  ecirc: "ê",
                  euml: "ë",
                  igrave: "ì",
                  iacute: "í",
                  icirc: "î",
                  iuml: "ï",
                  eth: "ð",
                  ntilde: "ñ",
                  ograve: "ò",
                  oacute: "ó",
                  ocirc: "ô",
                  otilde: "õ",
                  ouml: "ö",
                  divide: "÷",
                  oslash: "ø",
                  ugrave: "ù",
                  uacute: "ú",
                  ucirc: "û",
                  uuml: "ü",
                  yacute: "ý",
                  thorn: "þ",
                  yuml: "ÿ",
                  OElig: "Œ",
                  oelig: "œ",
                  Scaron: "Š",
                  scaron: "š",
                  Yuml: "Ÿ",
                  fnof: "ƒ",
                  circ: "ˆ",
                  tilde: "˜",
                  Alpha: "Α",
                  Beta: "Β",
                  Gamma: "Γ",
                  Delta: "Δ",
                  Epsilon: "Ε",
                  Zeta: "Ζ",
                  Eta: "Η",
                  Theta: "Θ",
                  Iota: "Ι",
                  Kappa: "Κ",
                  Lambda: "Λ",
                  Mu: "Μ",
                  Nu: "Ν",
                  Xi: "Ξ",
                  Omicron: "Ο",
                  Pi: "Π",
                  Rho: "Ρ",
                  Sigma: "Σ",
                  Tau: "Τ",
                  Upsilon: "Υ",
                  Phi: "Φ",
                  Chi: "Χ",
                  Psi: "Ψ",
                  Omega: "Ω",
                  alpha: "α",
                  beta: "β",
                  gamma: "γ",
                  delta: "δ",
                  epsilon: "ε",
                  zeta: "ζ",
                  eta: "η",
                  theta: "θ",
                  iota: "ι",
                  kappa: "κ",
                  lambda: "λ",
                  mu: "μ",
                  nu: "ν",
                  xi: "ξ",
                  omicron: "ο",
                  pi: "π",
                  rho: "ρ",
                  sigmaf: "ς",
                  sigma: "σ",
                  tau: "τ",
                  upsilon: "υ",
                  phi: "φ",
                  chi: "χ",
                  psi: "ψ",
                  omega: "ω",
                  thetasym: "ϑ",
                  upsih: "ϒ",
                  piv: "ϖ",
                  ensp: " ",
                  emsp: " ",
                  thinsp: " ",
                  zwnj: "‌",
                  zwj: "‍",
                  lrm: "‎",
                  rlm: "‏",
                  ndash: "–",
                  mdash: "—",
                  lsquo: "‘",
                  rsquo: "’",
                  sbquo: "‚",
                  ldquo: "“",
                  rdquo: "”",
                  bdquo: "„",
                  dagger: "†",
                  Dagger: "‡",
                  bull: "•",
                  hellip: "…",
                  permil: "‰",
                  prime: "′",
                  Prime: "″",
                  lsaquo: "‹",
                  rsaquo: "›",
                  oline: "‾",
                  frasl: "⁄",
                  euro: "€",
                  image: "ℑ",
                  weierp: "℘",
                  real: "ℜ",
                  trade: "™",
                  alefsym: "ℵ",
                  larr: "←",
                  uarr: "↑",
                  rarr: "→",
                  darr: "↓",
                  harr: "↔",
                  crarr: "↵",
                  lArr: "⇐",
                  uArr: "⇑",
                  rArr: "⇒",
                  dArr: "⇓",
                  hArr: "⇔",
                  forall: "∀",
                  part: "∂",
                  exist: "∃",
                  empty: "∅",
                  nabla: "∇",
                  isin: "∈",
                  notin: "∉",
                  ni: "∋",
                  prod: "∏",
                  sum: "∑",
                  minus: "−",
                  lowast: "∗",
                  radic: "√",
                  prop: "∝",
                  infin: "∞",
                  ang: "∠",
                  and: "∧",
                  or: "∨",
                  cap: "∩",
                  cup: "∪",
                  int: "∫",
                  there4: "∴",
                  sim: "∼",
                  cong: "≅",
                  asymp: "≈",
                  ne: "≠",
                  equiv: "≡",
                  le: "≤",
                  ge: "≥",
                  sub: "⊂",
                  sup: "⊃",
                  nsub: "⊄",
                  sube: "⊆",
                  supe: "⊇",
                  oplus: "⊕",
                  otimes: "⊗",
                  perp: "⊥",
                  sdot: "⋅",
                  lceil: "⌈",
                  rceil: "⌉",
                  lfloor: "⌊",
                  rfloor: "⌋",
                  loz: "◊",
                  spades: "♠",
                  clubs: "♣",
                  hearts: "♥",
                  diams: "♦",
                  lang: "⟨",
                  rang: "⟩"
                });
            },
            function(t, e, i) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = i(10),
                r = i(12),
                s = i(13),
                a = (function() {
                  function t() {
                    (this.values = []), (this.curly = this.paren = -1);
                  }
                  return (
                    (t.prototype.beforeFunctionExpression = function(t) {
                      return (
                        [
                          "(",
                          "{",
                          "[",
                          "in",
                          "typeof",
                          "instanceof",
                          "new",
                          "return",
                          "case",
                          "delete",
                          "throw",
                          "void",
                          "=",
                          "+=",
                          "-=",
                          "*=",
                          "**=",
                          "/=",
                          "%=",
                          "<<=",
                          ">>=",
                          ">>>=",
                          "&=",
                          "|=",
                          "^=",
                          ",",
                          "+",
                          "-",
                          "*",
                          "**",
                          "/",
                          "%",
                          "++",
                          "--",
                          "<<",
                          ">>",
                          ">>>",
                          "&",
                          "|",
                          "^",
                          "!",
                          "~",
                          "&&",
                          "||",
                          "?",
                          ":",
                          "===",
                          "==",
                          ">=",
                          "<=",
                          "<",
                          ">",
                          "!=",
                          "!=="
                        ].indexOf(t) >= 0
                      );
                    }),
                    (t.prototype.isRegexStart = function() {
                      var t = this.values[this.values.length - 1],
                        e = null !== t;
                      switch (t) {
                        case "this":
                        case "]":
                          e = !1;
                          break;
                        case ")":
                          var i = this.values[this.paren - 1];
                          e =
                            "if" === i ||
                            "while" === i ||
                            "for" === i ||
                            "with" === i;
                          break;
                        case "}":
                          if (
                            ((e = !1),
                            "function" === this.values[this.curly - 3])
                          )
                            e =
                              !!(n = this.values[this.curly - 4]) &&
                              !this.beforeFunctionExpression(n);
                          else if ("function" === this.values[this.curly - 4]) {
                            var n;
                            e =
                              !(n = this.values[this.curly - 5]) ||
                              !this.beforeFunctionExpression(n);
                          }
                      }
                      return e;
                    }),
                    (t.prototype.push = function(t) {
                      7 === t.type || 4 === t.type
                        ? ("{" === t.value
                            ? (this.curly = this.values.length)
                            : "(" === t.value &&
                              (this.paren = this.values.length),
                          this.values.push(t.value))
                        : this.values.push(null);
                    }),
                    t
                  );
                })(),
                o = (function() {
                  function t(t, e) {
                    (this.errorHandler = new n.ErrorHandler()),
                      (this.errorHandler.tolerant =
                        !!e && "boolean" == typeof e.tolerant && e.tolerant),
                      (this.scanner = new r.Scanner(t, this.errorHandler)),
                      (this.scanner.trackComment =
                        !!e && "boolean" == typeof e.comment && e.comment),
                      (this.trackRange =
                        !!e && "boolean" == typeof e.range && e.range),
                      (this.trackLoc =
                        !!e && "boolean" == typeof e.loc && e.loc),
                      (this.buffer = []),
                      (this.reader = new a());
                  }
                  return (
                    (t.prototype.errors = function() {
                      return this.errorHandler.errors;
                    }),
                    (t.prototype.getNextToken = function() {
                      if (0 === this.buffer.length) {
                        var t = this.scanner.scanComments();
                        if (this.scanner.trackComment)
                          for (var e = 0; e < t.length; ++e) {
                            var i = t[e],
                              n = this.scanner.source.slice(
                                i.slice[0],
                                i.slice[1]
                              ),
                              r = {
                                type: i.multiLine
                                  ? "BlockComment"
                                  : "LineComment",
                                value: n
                              };
                            this.trackRange && (r.range = i.range),
                              this.trackLoc && (r.loc = i.loc),
                              this.buffer.push(r);
                          }
                        if (!this.scanner.eof()) {
                          var a = void 0;
                          this.trackLoc &&
                            (a = {
                              start: {
                                line: this.scanner.lineNumber,
                                column:
                                  this.scanner.index - this.scanner.lineStart
                              },
                              end: {}
                            });
                          var o =
                            "/" === this.scanner.source[this.scanner.index] &&
                            this.reader.isRegexStart()
                              ? this.scanner.scanRegExp()
                              : this.scanner.lex();
                          this.reader.push(o);
                          var u = {
                            type: s.TokenName[o.type],
                            value: this.scanner.source.slice(o.start, o.end)
                          };
                          if (
                            (this.trackRange && (u.range = [o.start, o.end]),
                            this.trackLoc &&
                              ((a.end = {
                                line: this.scanner.lineNumber,
                                column:
                                  this.scanner.index - this.scanner.lineStart
                              }),
                              (u.loc = a)),
                            9 === o.type)
                          ) {
                            var h = o.pattern,
                              c = o.flags;
                            u.regex = { pattern: h, flags: c };
                          }
                          this.buffer.push(u);
                        }
                      }
                      return this.buffer.shift();
                    }),
                    t
                  );
                })();
              e.Tokenizer = o;
            }
          ]);
        }),
          "object" === a(e) && "object" === a(t)
            ? (t.exports = s())
            : ((n = []),
              void 0 ===
                (r = "function" == typeof (i = s) ? i.apply(e, n) : i) ||
                (t.exports = r));
      }.call(this, i(66)(t)));
    },
    function(t, e, i) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var r = i(38),
        s = i(51),
        a = i(68),
        o = i(52),
        u = Object.prototype.toString,
        h = Object.prototype.hasOwnProperty,
        c = 9,
        l = 10,
        p = 32,
        f = 33,
        d = 34,
        m = 35,
        y = 37,
        x = 38,
        g = 39,
        v = 42,
        D = 44,
        E = 45,
        A = 58,
        C = 62,
        b = 63,
        w = 64,
        S = 91,
        F = 93,
        k = 96,
        _ = 123,
        T = 124,
        B = 125,
        N = {
          0: "\\0",
          7: "\\a",
          8: "\\b",
          9: "\\t",
          10: "\\n",
          11: "\\v",
          12: "\\f",
          13: "\\r",
          27: "\\e",
          34: '\\"',
          92: "\\\\",
          133: "\\N",
          160: "\\_",
          8232: "\\L",
          8233: "\\P"
        },
        P = [
          "y",
          "Y",
          "yes",
          "Yes",
          "YES",
          "on",
          "On",
          "ON",
          "n",
          "N",
          "no",
          "No",
          "NO",
          "off",
          "Off",
          "OFF"
        ];
      function I(t) {
        var e, i, n;
        if (((e = t.toString(16).toUpperCase()), t <= 255)) (i = "x"), (n = 2);
        else if (t <= 65535) (i = "u"), (n = 4);
        else {
          if (!(t <= 4294967295))
            throw new s(
              "code point within a string may not be greater than 0xFFFFFFFF"
            );
          (i = "U"), (n = 8);
        }
        return "\\" + i + r.repeat("0", n - e.length) + e;
      }
      function M(t) {
        (this.schema = t.schema || a),
          (this.indent = Math.max(1, t.indent || 2)),
          (this.noArrayIndent = t.noArrayIndent || !1),
          (this.skipInvalid = t.skipInvalid || !1),
          (this.flowLevel = r.isNothing(t.flowLevel) ? -1 : t.flowLevel),
          (this.styleMap = (function(t, e) {
            var i, n, r, s, a, o, u;
            if (null === e) return {};
            for (i = {}, r = 0, s = (n = Object.keys(e)).length; r < s; r += 1)
              (a = n[r]),
                (o = String(e[a])),
                "!!" === a.slice(0, 2) &&
                  (a = "tag:yaml.org,2002:" + a.slice(2)),
                (u = t.compiledTypeMap.fallback[a]) &&
                  h.call(u.styleAliases, o) &&
                  (o = u.styleAliases[o]),
                (i[a] = o);
            return i;
          })(this.schema, t.styles || null)),
          (this.sortKeys = t.sortKeys || !1),
          (this.lineWidth = t.lineWidth || 80),
          (this.noRefs = t.noRefs || !1),
          (this.noCompatMode = t.noCompatMode || !1),
          (this.condenseFlow = t.condenseFlow || !1),
          (this.implicitTypes = this.schema.compiledImplicit),
          (this.explicitTypes = this.schema.compiledExplicit),
          (this.tag = null),
          (this.result = ""),
          (this.duplicates = []),
          (this.usedDuplicates = null);
      }
      function O(t, e) {
        for (
          var i, n = r.repeat(" ", e), s = 0, a = -1, o = "", u = t.length;
          s < u;

        )
          -1 === (a = t.indexOf("\n", s))
            ? ((i = t.slice(s)), (s = u))
            : ((i = t.slice(s, a + 1)), (s = a + 1)),
            i.length && "\n" !== i && (o += n),
            (o += i);
        return o;
      }
      function R(t, e) {
        return "\n" + r.repeat(" ", t.indent * e);
      }
      function L(t) {
        return t === p || t === c;
      }
      function U(t) {
        return (
          (32 <= t && t <= 126) ||
          (161 <= t && t <= 55295 && 8232 !== t && 8233 !== t) ||
          (57344 <= t && t <= 65533 && 65279 !== t) ||
          (65536 <= t && t <= 1114111)
        );
      }
      function z(t) {
        return (
          U(t) &&
          65279 !== t &&
          t !== D &&
          t !== S &&
          t !== F &&
          t !== _ &&
          t !== B &&
          t !== A &&
          t !== m
        );
      }
      function X(t) {
        return /^\n* /.test(t);
      }
      var j = 1,
        J = 2,
        K = 3,
        H = 4,
        Y = 5;
      function W(t, e, i, n, r) {
        var s,
          a,
          o,
          u = !1,
          h = !1,
          c = -1 !== n,
          p = -1,
          N =
            U((o = t.charCodeAt(0))) &&
            65279 !== o &&
            !L(o) &&
            o !== E &&
            o !== b &&
            o !== A &&
            o !== D &&
            o !== S &&
            o !== F &&
            o !== _ &&
            o !== B &&
            o !== m &&
            o !== x &&
            o !== v &&
            o !== f &&
            o !== T &&
            o !== C &&
            o !== g &&
            o !== d &&
            o !== y &&
            o !== w &&
            o !== k &&
            !L(t.charCodeAt(t.length - 1));
        if (e)
          for (s = 0; s < t.length; s++) {
            if (!U((a = t.charCodeAt(s)))) return Y;
            N = N && z(a);
          }
        else {
          for (s = 0; s < t.length; s++) {
            if ((a = t.charCodeAt(s)) === l)
              (u = !0),
                c && ((h = h || (s - p - 1 > n && " " !== t[p + 1])), (p = s));
            else if (!U(a)) return Y;
            N = N && z(a);
          }
          h = h || (c && s - p - 1 > n && " " !== t[p + 1]);
        }
        return u || h ? (i > 9 && X(t) ? Y : h ? H : K) : N && !r(t) ? j : J;
      }
      function q(t, e, i, n) {
        t.dump = (function() {
          if (0 === e.length) return "''";
          if (!t.noCompatMode && -1 !== P.indexOf(e)) return "'" + e + "'";
          var r = t.indent * Math.max(1, i),
            a =
              -1 === t.lineWidth
                ? -1
                : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - r),
            o = n || (t.flowLevel > -1 && i >= t.flowLevel);
          switch (
            W(e, o, t.indent, a, function(e) {
              return (function(t, e) {
                var i, n;
                for (i = 0, n = t.implicitTypes.length; i < n; i += 1)
                  if (t.implicitTypes[i].resolve(e)) return !0;
                return !1;
              })(t, e);
            })
          ) {
            case j:
              return e;
            case J:
              return "'" + e.replace(/'/g, "''") + "'";
            case K:
              return "|" + G(e, t.indent) + $(O(e, r));
            case H:
              return (
                ">" +
                G(e, t.indent) +
                $(
                  O(
                    (function(t, e) {
                      var i,
                        n,
                        r = /(\n+)([^\n]*)/g,
                        s =
                          ((o = t.indexOf("\n")),
                          (o = -1 !== o ? o : t.length),
                          (r.lastIndex = o),
                          V(t.slice(0, o), e)),
                        a = "\n" === t[0] || " " === t[0];
                      var o;
                      for (; (n = r.exec(t)); ) {
                        var u = n[1],
                          h = n[2];
                        (i = " " === h[0]),
                          (s += u + (a || i || "" === h ? "" : "\n") + V(h, e)),
                          (a = i);
                      }
                      return s;
                    })(e, a),
                    r
                  )
                )
              );
            case Y:
              return (
                '"' +
                (function(t) {
                  for (var e, i, n, r = "", s = 0; s < t.length; s++)
                    (e = t.charCodeAt(s)) >= 55296 &&
                    e <= 56319 &&
                    (i = t.charCodeAt(s + 1)) >= 56320 &&
                    i <= 57343
                      ? ((r += I(1024 * (e - 55296) + i - 56320 + 65536)), s++)
                      : ((n = N[e]), (r += !n && U(e) ? t[s] : n || I(e)));
                  return r;
                })(e) +
                '"'
              );
            default:
              throw new s("impossible error: invalid scalar style");
          }
        })();
      }
      function G(t, e) {
        var i = X(t) ? String(e) : "",
          n = "\n" === t[t.length - 1];
        return (
          i +
          (n && ("\n" === t[t.length - 2] || "\n" === t) ? "+" : n ? "" : "-") +
          "\n"
        );
      }
      function $(t) {
        return "\n" === t[t.length - 1] ? t.slice(0, -1) : t;
      }
      function V(t, e) {
        if ("" === t || " " === t[0]) return t;
        for (
          var i, n, r = / [^ ]/g, s = 0, a = 0, o = 0, u = "";
          (i = r.exec(t));

        )
          (o = i.index) - s > e &&
            ((n = a > s ? a : o), (u += "\n" + t.slice(s, n)), (s = n + 1)),
            (a = o);
        return (
          (u += "\n"),
          t.length - s > e && a > s
            ? (u += t.slice(s, a) + "\n" + t.slice(a + 1))
            : (u += t.slice(s)),
          u.slice(1)
        );
      }
      function Z(t, e, i) {
        var r, a, o, c, l, p;
        for (
          o = 0, c = (a = i ? t.explicitTypes : t.implicitTypes).length;
          o < c;
          o += 1
        )
          if (
            ((l = a[o]).instanceOf || l.predicate) &&
            (!l.instanceOf ||
              ("object" === n(e) && e instanceof l.instanceOf)) &&
            (!l.predicate || l.predicate(e))
          ) {
            if (((t.tag = i ? l.tag : "?"), l.represent)) {
              if (
                ((p = t.styleMap[l.tag] || l.defaultStyle),
                "[object Function]" === u.call(l.represent))
              )
                r = l.represent(e, p);
              else {
                if (!h.call(l.represent, p))
                  throw new s(
                    "!<" +
                      l.tag +
                      '> tag resolver accepts not "' +
                      p +
                      '" style'
                  );
                r = l.represent[p](e, p);
              }
              t.dump = r;
            }
            return !0;
          }
        return !1;
      }
      function Q(t, e, i, n, r, a) {
        (t.tag = null), (t.dump = i), Z(t, i, !1) || Z(t, i, !0);
        var o = u.call(t.dump);
        n && (n = t.flowLevel < 0 || t.flowLevel > e);
        var h,
          c,
          p = "[object Object]" === o || "[object Array]" === o;
        if (
          (p && (c = -1 !== (h = t.duplicates.indexOf(i))),
          ((null !== t.tag && "?" !== t.tag) ||
            c ||
            (2 !== t.indent && e > 0)) &&
            (r = !1),
          c && t.usedDuplicates[h])
        )
          t.dump = "*ref_" + h;
        else {
          if (
            (p && c && !t.usedDuplicates[h] && (t.usedDuplicates[h] = !0),
            "[object Object]" === o)
          )
            n && 0 !== Object.keys(t.dump).length
              ? (!(function(t, e, i, n) {
                  var r,
                    a,
                    o,
                    u,
                    h,
                    c,
                    p = "",
                    f = t.tag,
                    d = Object.keys(i);
                  if (!0 === t.sortKeys) d.sort();
                  else if ("function" == typeof t.sortKeys) d.sort(t.sortKeys);
                  else if (t.sortKeys)
                    throw new s("sortKeys must be a boolean or a function");
                  for (r = 0, a = d.length; r < a; r += 1)
                    (c = ""),
                      (n && 0 === r) || (c += R(t, e)),
                      (u = i[(o = d[r])]),
                      Q(t, e + 1, o, !0, !0, !0) &&
                        ((h =
                          (null !== t.tag && "?" !== t.tag) ||
                          (t.dump && t.dump.length > 1024)) &&
                          (t.dump && l === t.dump.charCodeAt(0)
                            ? (c += "?")
                            : (c += "? ")),
                        (c += t.dump),
                        h && (c += R(t, e)),
                        Q(t, e + 1, u, !0, h) &&
                          (t.dump && l === t.dump.charCodeAt(0)
                            ? (c += ":")
                            : (c += ": "),
                          (p += c += t.dump)));
                  (t.tag = f), (t.dump = p || "{}");
                })(t, e, t.dump, r),
                c && (t.dump = "&ref_" + h + t.dump))
              : (!(function(t, e, i) {
                  var n,
                    r,
                    s,
                    a,
                    o,
                    u = "",
                    h = t.tag,
                    c = Object.keys(i);
                  for (n = 0, r = c.length; n < r; n += 1)
                    (o = t.condenseFlow ? '"' : ""),
                      0 !== n && (o += ", "),
                      (a = i[(s = c[n])]),
                      Q(t, e, s, !1, !1) &&
                        (t.dump.length > 1024 && (o += "? "),
                        (o +=
                          t.dump +
                          (t.condenseFlow ? '"' : "") +
                          ":" +
                          (t.condenseFlow ? "" : " ")),
                        Q(t, e, a, !1, !1) && (u += o += t.dump));
                  (t.tag = h), (t.dump = "{" + u + "}");
                })(t, e, t.dump),
                c && (t.dump = "&ref_" + h + " " + t.dump));
          else if ("[object Array]" === o) {
            var f = t.noArrayIndent && e > 0 ? e - 1 : e;
            n && 0 !== t.dump.length
              ? (!(function(t, e, i, n) {
                  var r,
                    s,
                    a = "",
                    o = t.tag;
                  for (r = 0, s = i.length; r < s; r += 1)
                    Q(t, e + 1, i[r], !0, !0) &&
                      ((n && 0 === r) || (a += R(t, e)),
                      t.dump && l === t.dump.charCodeAt(0)
                        ? (a += "-")
                        : (a += "- "),
                      (a += t.dump));
                  (t.tag = o), (t.dump = a || "[]");
                })(t, f, t.dump, r),
                c && (t.dump = "&ref_" + h + t.dump))
              : (!(function(t, e, i) {
                  var n,
                    r,
                    s = "",
                    a = t.tag;
                  for (n = 0, r = i.length; n < r; n += 1)
                    Q(t, e, i[n], !1, !1) &&
                      (0 !== n && (s += "," + (t.condenseFlow ? "" : " ")),
                      (s += t.dump));
                  (t.tag = a), (t.dump = "[" + s + "]");
                })(t, f, t.dump),
                c && (t.dump = "&ref_" + h + " " + t.dump));
          } else {
            if ("[object String]" !== o) {
              if (t.skipInvalid) return !1;
              throw new s("unacceptable kind of an object to dump " + o);
            }
            "?" !== t.tag && q(t, t.dump, e, a);
          }
          null !== t.tag &&
            "?" !== t.tag &&
            (t.dump = "!<" + t.tag + "> " + t.dump);
        }
        return !0;
      }
      function tt(t, e) {
        var i,
          r,
          s = [],
          a = [];
        for (
          (function t(e, i, r) {
            var s, a, o;
            if (null !== e && "object" === n(e))
              if (-1 !== (a = i.indexOf(e))) -1 === r.indexOf(a) && r.push(a);
              else if ((i.push(e), Array.isArray(e)))
                for (a = 0, o = e.length; a < o; a += 1) t(e[a], i, r);
              else
                for (s = Object.keys(e), a = 0, o = s.length; a < o; a += 1)
                  t(e[s[a]], i, r);
          })(t, s, a),
            i = 0,
            r = a.length;
          i < r;
          i += 1
        )
          e.duplicates.push(s[a[i]]);
        e.usedDuplicates = new Array(r);
      }
      function et(t, e) {
        var i = new M((e = e || {}));
        return i.noRefs || tt(t, i), Q(i, 0, t, !0, !0) ? i.dump + "\n" : "";
      }
      (t.exports.dump = et),
        (t.exports.safeDump = function(t, e) {
          return et(t, r.extend({ schema: o }, e));
        });
    },
    function(t, e, i) {
      "use strict";
      i(4);
      var n = i(7),
        r = i(8),
        s = i(6);
      function a() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        outline: none;\n        z-index: 1002;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n        cursor: default;\n      }\n\n      #tooltip {\n        display: block;\n        outline: none;\n        @apply --paper-font-common-base;\n        font-size: 10px;\n        line-height: 1;\n        background-color: var(--paper-tooltip-background, #616161);\n        color: var(--paper-tooltip-text-color, white);\n        padding: 8px;\n        border-radius: 2px;\n        @apply --paper-tooltip;\n      }\n\n      @keyframes keyFrameScaleUp {\n        0% {\n          transform: scale(0.0);\n        }\n        100% {\n          transform: scale(1.0);\n        }\n      }\n\n      @keyframes keyFrameScaleDown {\n        0% {\n          transform: scale(1.0);\n        }\n        100% {\n          transform: scale(0.0);\n        }\n      }\n\n      @keyframes keyFrameFadeInOpacity {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameFadeOutOpacity {\n        0% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes keyFrameSlideDownIn {\n        0% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameSlideDownOut {\n        0% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n      }\n\n      .fade-in-animation {\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameFadeInOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .fade-out-animation {\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 0ms);\n        animation-name: keyFrameFadeOutOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-up-animation {\n        transform: scale(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameScaleUp;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-down-animation {\n        transform: scale(1);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameScaleDown;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation {\n        transform: translateY(-2000px);\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownIn;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation-out {\n        transform: translateY(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownOut;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .cancel-animation {\n        animation-delay: -30s !important;\n      }\n\n      /* Thanks IE 10. */\n\n      .hidden {\n        display: none !important;\n      }\n    </style>\n\n    <div id="tooltip" class="hidden">\n      <slot></slot>\n    </div>\n'
        ]);
        return (
          (a = function() {
            return t;
          }),
          t
        );
      }
      Object(n.a)({
        _template: Object(s.a)(a()),
        is: "paper-tooltip",
        hostAttributes: { role: "tooltip", tabindex: -1 },
        properties: {
          for: { type: String, observer: "_findTarget" },
          manualMode: {
            type: Boolean,
            value: !1,
            observer: "_manualModeChanged"
          },
          position: { type: String, value: "bottom" },
          fitToVisibleBounds: { type: Boolean, value: !1 },
          offset: { type: Number, value: 14 },
          marginTop: { type: Number, value: 14 },
          animationDelay: {
            type: Number,
            value: 500,
            observer: "_delayChange"
          },
          animationEntry: { type: String, value: "" },
          animationExit: { type: String, value: "" },
          animationConfig: {
            type: Object,
            value: function() {
              return {
                entry: [
                  {
                    name: "fade-in-animation",
                    node: this,
                    timing: { delay: 0 }
                  }
                ],
                exit: [{ name: "fade-out-animation", node: this }]
              };
            }
          },
          _showing: { type: Boolean, value: !1 }
        },
        listeners: { webkitAnimationEnd: "_onAnimationEnd" },
        get target() {
          var t = Object(r.a)(this).parentNode,
            e = Object(r.a)(this).getOwnerRoot();
          return this.for
            ? Object(r.a)(e).querySelector("#" + this.for)
            : t.nodeType == Node.DOCUMENT_FRAGMENT_NODE
            ? e.host
            : t;
        },
        attached: function() {
          this._findTarget();
        },
        detached: function() {
          this.manualMode || this._removeListeners();
        },
        playAnimation: function(t) {
          "entry" === t ? this.show() : "exit" === t && this.hide();
        },
        cancelAnimation: function() {
          this.$.tooltip.classList.add("cancel-animation");
        },
        show: function() {
          if (!this._showing) {
            if ("" === Object(r.a)(this).textContent.trim()) {
              for (
                var t = !0,
                  e = Object(r.a)(this).getEffectiveChildNodes(),
                  i = 0;
                i < e.length;
                i++
              )
                if ("" !== e[i].textContent.trim()) {
                  t = !1;
                  break;
                }
              if (t) return;
            }
            (this._showing = !0),
              this.$.tooltip.classList.remove("hidden"),
              this.$.tooltip.classList.remove("cancel-animation"),
              this.$.tooltip.classList.remove(this._getAnimationType("exit")),
              this.updatePosition(),
              (this._animationPlaying = !0),
              this.$.tooltip.classList.add(this._getAnimationType("entry"));
          }
        },
        hide: function() {
          if (this._showing) {
            if (this._animationPlaying)
              return (this._showing = !1), void this._cancelAnimation();
            this._onAnimationFinish(),
              (this._showing = !1),
              (this._animationPlaying = !0);
          }
        },
        updatePosition: function() {
          if (this._target && this.offsetParent) {
            var t = this.offset;
            14 != this.marginTop && 14 == this.offset && (t = this.marginTop);
            var e,
              i,
              n = this.offsetParent.getBoundingClientRect(),
              r = this._target.getBoundingClientRect(),
              s = this.getBoundingClientRect(),
              a = (r.width - s.width) / 2,
              o = (r.height - s.height) / 2,
              u = r.left - n.left,
              h = r.top - n.top;
            switch (this.position) {
              case "top":
                (e = u + a), (i = h - s.height - t);
                break;
              case "bottom":
                (e = u + a), (i = h + r.height + t);
                break;
              case "left":
                (e = u - s.width - t), (i = h + o);
                break;
              case "right":
                (e = u + r.width + t), (i = h + o);
            }
            this.fitToVisibleBounds
              ? (n.left + e + s.width > window.innerWidth
                  ? ((this.style.right = "0px"), (this.style.left = "auto"))
                  : ((this.style.left = Math.max(0, e) + "px"),
                    (this.style.right = "auto")),
                n.top + i + s.height > window.innerHeight
                  ? ((this.style.bottom = n.height - h + t + "px"),
                    (this.style.top = "auto"))
                  : ((this.style.top = Math.max(-n.top, i) + "px"),
                    (this.style.bottom = "auto")))
              : ((this.style.left = e + "px"), (this.style.top = i + "px"));
          }
        },
        _addListeners: function() {
          this._target &&
            (this.listen(this._target, "mouseenter", "show"),
            this.listen(this._target, "focus", "show"),
            this.listen(this._target, "mouseleave", "hide"),
            this.listen(this._target, "blur", "hide"),
            this.listen(this._target, "tap", "hide")),
            this.listen(this.$.tooltip, "animationend", "_onAnimationEnd"),
            this.listen(this, "mouseenter", "hide");
        },
        _findTarget: function() {
          this.manualMode || this._removeListeners(),
            (this._target = this.target),
            this.manualMode || this._addListeners();
        },
        _delayChange: function(t) {
          500 !== t &&
            this.updateStyles({ "--paper-tooltip-delay-in": t + "ms" });
        },
        _manualModeChanged: function() {
          this.manualMode ? this._removeListeners() : this._addListeners();
        },
        _cancelAnimation: function() {
          this.$.tooltip.classList.remove(this._getAnimationType("entry")),
            this.$.tooltip.classList.remove(this._getAnimationType("exit")),
            this.$.tooltip.classList.remove("cancel-animation"),
            this.$.tooltip.classList.add("hidden");
        },
        _onAnimationFinish: function() {
          this._showing &&
            (this.$.tooltip.classList.remove(this._getAnimationType("entry")),
            this.$.tooltip.classList.remove("cancel-animation"),
            this.$.tooltip.classList.add(this._getAnimationType("exit")));
        },
        _onAnimationEnd: function() {
          (this._animationPlaying = !1),
            this._showing ||
              (this.$.tooltip.classList.remove(this._getAnimationType("exit")),
              this.$.tooltip.classList.add("hidden"));
        },
        _getAnimationType: function(t) {
          if ("entry" === t && "" !== this.animationEntry)
            return this.animationEntry;
          if ("exit" === t && "" !== this.animationExit)
            return this.animationExit;
          if (
            this.animationConfig[t] &&
            "string" == typeof this.animationConfig[t][0].name
          ) {
            if (
              this.animationConfig[t][0].timing &&
              this.animationConfig[t][0].timing.delay &&
              0 !== this.animationConfig[t][0].timing.delay
            ) {
              var e = this.animationConfig[t][0].timing.delay;
              "entry" === t
                ? this.updateStyles({ "--paper-tooltip-delay-in": e + "ms" })
                : "exit" === t &&
                  this.updateStyles({
                    "--paper-tooltip-delay-out": e + "ms"
                  });
            }
            return this.animationConfig[t][0].name;
          }
        },
        _removeListeners: function() {
          this._target &&
            (this.unlisten(this._target, "mouseenter", "show"),
            this.unlisten(this._target, "focus", "show"),
            this.unlisten(this._target, "mouseleave", "hide"),
            this.unlisten(this._target, "blur", "hide"),
            this.unlisten(this._target, "tap", "hide")),
            this.unlisten(this.$.tooltip, "animationend", "_onAnimationEnd"),
            this.unlisten(this, "mouseenter", "hide");
        }
      });
    },
    ,
    ,
    ,
    ,
    ,
    function(t, e, i) {
      "use strict";
      i(4), i(26), i(22), i(40), i(126), i(103), i(13), i(73);
      var n = document.createElement("template");
      n.setAttribute("style", "display: none;"),
        (n.innerHTML =
          '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>'),
        document.head.appendChild(n.content);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(r.content);
      var s = i(45),
        a = i(25),
        o = i(86),
        u = i(65),
        h = i(7),
        c = i(8),
        l = i(58),
        p = i(6);
      function f() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style include="paper-dropdown-menu-shared-styles"></style>\n\n    \x3c!-- this div fulfills an a11y requirement for combobox, do not remove --\x3e\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">\n      \x3c!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> --\x3e\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <paper-ripple></paper-ripple>\n        \x3c!-- paper-input has type="text" for a11y, do not remove --\x3e\n        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">\n          \x3c!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> --\x3e\n          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n'
        ]);
        return (
          (f = function() {
            return t;
          }),
          t
        );
      }
      Object(h.a)({
        _template: Object(p.a)(f()),
        is: "paper-dropdown-menu",
        behaviors: [s.a, a.a, o.a, u.a],
        properties: {
          selectedItemLabel: { type: String, notify: !0, readOnly: !0 },
          selectedItem: { type: Object, notify: !0, readOnly: !0 },
          value: { type: String, notify: !0 },
          label: { type: String },
          placeholder: { type: String },
          errorMessage: { type: String },
          opened: {
            type: Boolean,
            notify: !0,
            value: !1,
            observer: "_openedChanged"
          },
          allowOutsideScroll: { type: Boolean, value: !1 },
          noLabelFloat: { type: Boolean, value: !1, reflectToAttribute: !0 },
          alwaysFloatLabel: { type: Boolean, value: !1 },
          noAnimations: { type: Boolean, value: !1 },
          horizontalAlign: { type: String, value: "right" },
          verticalAlign: { type: String, value: "top" },
          verticalOffset: Number,
          dynamicAlign: { type: Boolean },
          restoreFocusOnClose: { type: Boolean, value: !0 }
        },
        listeners: { tap: "_onTap" },
        keyBindings: { "up down": "open", esc: "close" },
        hostAttributes: {
          role: "combobox",
          "aria-autocomplete": "none",
          "aria-haspopup": "true"
        },
        observers: ["_selectedItemChanged(selectedItem)"],
        attached: function() {
          var t = this.contentElement;
          t && t.selectedItem && this._setSelectedItem(t.selectedItem);
        },
        get contentElement() {
          for (
            var t = Object(c.a)(this.$.content).getDistributedNodes(),
              e = 0,
              i = t.length;
            e < i;
            e++
          )
            if (t[e].nodeType === Node.ELEMENT_NODE) return t[e];
        },
        open: function() {
          this.$.menuButton.open();
        },
        close: function() {
          this.$.menuButton.close();
        },
        _onIronSelect: function(t) {
          this._setSelectedItem(t.detail.item);
        },
        _onIronDeselect: function(t) {
          this._setSelectedItem(null);
        },
        _onTap: function(t) {
          l.c(t) === this && this.open();
        },
        _selectedItemChanged: function(t) {
          var e = "";
          (e = t
            ? t.label || t.getAttribute("label") || t.textContent.trim()
            : ""),
            (this.value = e),
            this._setSelectedItemLabel(e);
        },
        _computeMenuVerticalOffset: function(t, e) {
          return e || (t ? -4 : 8);
        },
        _getValidity: function(t) {
          return (
            this.disabled || !this.required || (this.required && !!this.value)
          );
        },
        _openedChanged: function() {
          var t = this.opened ? "true" : "false",
            e = this.contentElement;
          e && e.setAttribute("aria-expanded", t);
        }
      });
    },
    function(t, e, i) {
      "use strict";
      i(4), i(12), i(46), i(13), i(30);
      var n = document.createElement("template");
      n.setAttribute("style", "display: none;"),
        (n.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(n.content);
      var r = i(7),
        s = i(6),
        a = i(45),
        o = i(25),
        u = [a.a, o.a, { hostAttributes: { role: "option", tabindex: "0" } }];
      function h() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n'
        ]);
        return (
          (h = function() {
            return t;
          }),
          t
        );
      }
      Object(r.a)({
        _template: Object(s.a)(h()),
        is: "paper-item",
        behaviors: [u]
      });
    }
  ]
]);
//# sourceMappingURL=chunk.594ef9f33131c4d33409.js.map
