"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*------------------------------------*\
     Plugins - Table of contents
 \*------------------------------------*/

/*

- Menu on scroll
- anime.js
- Jarallax
- Isotope
*/

/*
 anime.js
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this = void 0;

(function (v, p) {
  "function" === typeof define && define.amd ? define([], p) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = p() : v.anime = p();
})(void 0, function () {
  function v(a) {
    if (!g.col(a)) try {
      return document.querySelectorAll(a);
    } catch (b) {}
  }

  function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(g.arr(d) ? p(d) : d);
    }, []);
  }

  function w(a) {
    if (g.arr(a)) return a;
    g.str(a) && (a = v(a) || a);
    return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }

  function F(a, b) {
    return a.some(function (a) {
      return a === b;
    });
  }

  function A(a) {
    var b = {},
        d;

    for (d in a) {
      b[d] = a[d];
    }

    return b;
  }

  function G(a, b) {
    var d = A(a),
        c;

    for (c in a) {
      d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
    }

    return d;
  }

  function B(a, b) {
    var d = A(a),
        c;

    for (c in b) {
      d[c] = g.und(a[c]) ? b[c] : a[c];
    }

    return d;
  }

  function S(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, d, h) {
      return b + b + d + d + h + h;
    });
    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(b[1], 16);
    var d = parseInt(b[2], 16),
        b = parseInt(b[3], 16);
    return "rgb(" + a + "," + d + "," + b + ")";
  }

  function T(a) {
    function b(a, b, c) {
      0 > c && (c += 1);
      1 < c && --c;
      return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
    }

    var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
    a = parseInt(d[1]) / 360;
    var c = parseInt(d[2]) / 100,
        d = parseInt(d[3]) / 100;
    if (0 == c) c = d = a = d;else {
      var e = .5 > d ? d * (1 + c) : d + c - d * c,
          l = 2 * d - e,
          c = b(l, e, a + 1 / 3),
          d = b(l, e, a);
      a = b(l, e, a - 1 / 3);
    }
    return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")";
  }

  function x(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2];
  }

  function U(a) {
    if (-1 < a.indexOf("translate")) return "px";
    if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }

  function H(a, b) {
    return g.fnc(a) ? a(b.target, b.id, b.total) : a;
  }

  function C(a, b) {
    if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }

  function I(a, b) {
    if (g.dom(a) && F(V, b)) return "transform";
    if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute";
    if (g.dom(a) && "transform" !== b && C(a, b)) return "css";
    if (null != a[b]) return "object";
  }

  function W(a, b) {
    var d = U(b),
        d = -1 < b.indexOf("scale") ? 1 : 0 + d;
    a = a.style.transform;
    if (!a) return d;

    for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);) {
      e.push(c[1]), l.push(c[2]);
    }

    a = l.filter(function (a, c) {
      return e[c] === b;
    });
    return a.length ? a[0] : d;
  }

  function J(a, b) {
    switch (I(a, b)) {
      case "transform":
        return W(a, b);

      case "css":
        return C(a, b);

      case "attribute":
        return a.getAttribute(b);
    }

    return a[b] || 0;
  }

  function K(a, b) {
    var d = /^(\*=|\+=|-=)/.exec(a);
    if (!d) return a;
    b = parseFloat(b);
    a = parseFloat(a.replace(d[0], ""));

    switch (d[0][0]) {
      case "+":
        return b + a;

      case "-":
        return b - a;

      case "*":
        return b * a;
    }
  }

  function D(a) {
    return g.obj(a) && a.hasOwnProperty("totalLength");
  }

  function X(a, b) {
    function d(c) {
      c = void 0 === c ? 0 : c;
      return a.el.getPointAtLength(1 <= b + c ? b + c : 0);
    }

    var c = d(),
        e = d(-1),
        l = d(1);

    switch (a.property) {
      case "x":
        return c.x;

      case "y":
        return c.y;

      case "angle":
        return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI;
    }
  }

  function L(a, b) {
    var d = /-?\d*\.?\d+/g;
    a = D(a) ? a.totalLength : a;
    if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;else {
      var c = x(a);
      a = c ? a.substr(0, a.length - c.length) : a;
      b = b ? a + b : a;
    }
    b += "";
    return {
      original: b,
      numbers: b.match(d) ? b.match(d).map(Number) : [0],
      strings: b.split(d)
    };
  }

  function Y(a, b) {
    return b.reduce(function (b, c, e) {
      return b + a[e - 1] + c;
    });
  }

  function M(a) {
    return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function (a, d, c) {
      return c.indexOf(a) === d;
    });
  }

  function Z(a) {
    var b = M(a);
    return b.map(function (a, c) {
      return {
        target: a,
        id: c,
        total: b.length
      };
    });
  }

  function aa(a, b) {
    var d = A(b);

    if (g.arr(a)) {
      var c = a.length;
      2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = {
        value: a
      };
    }

    return w(a).map(function (a, c) {
      c = c ? 0 : b.delay;
      a = g.obj(a) && !D(a) ? a : {
        value: a
      };
      g.und(a.delay) && (a.delay = c);
      return a;
    }).map(function (a) {
      return B(a, d);
    });
  }

  function ba(a, b) {
    var d = {},
        c;

    for (c in a) {
      var e = H(a[c], b);
      g.arr(e) && (e = e.map(function (a) {
        return H(a, b);
      }), 1 === e.length && (e = e[0]));
      d[c] = e;
    }

    d.duration = parseFloat(d.duration);
    d.delay = parseFloat(d.delay);
    return d;
  }

  function ca(a) {
    return g.arr(a) ? y.apply(this, a) : N[a];
  }

  function da(a, b) {
    var d;
    return a.tweens.map(function (c) {
      c = ba(c, b);
      var e = c.value,
          l = J(b.target, a.name),
          h = d ? d.to.original : l,
          h = g.arr(e) ? e[0] : h,
          m = K(g.arr(e) ? e[1] : e, h),
          l = x(m) || x(h) || x(l);
      c.isPath = D(e);
      c.from = L(h, l);
      c.to = L(m, l);
      c.start = d ? d.end : a.offset;
      c.end = c.start + c.delay + c.duration;
      c.easing = ca(c.easing);
      c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;
      g.col(c.from.original) && (c.round = 1);
      return d = c;
    });
  }

  function ea(a, b) {
    return p(a.map(function (a) {
      return b.map(function (b) {
        var c = I(a.target, b.name);

        if (c) {
          var d = da(b, a);
          b = {
            type: c,
            property: b.name,
            animatable: a,
            tweens: d,
            duration: d[d.length - 1].end,
            delay: d[0].delay
          };
        } else b = void 0;

        return b;
      });
    })).filter(function (a) {
      return !g.und(a);
    });
  }

  function O(a, b, d) {
    var c = "delay" === a ? Math.min : Math.max;
    return b.length ? c.apply(Math, b.map(function (b) {
      return b[a];
    })) : d[a];
  }

  function fa(a) {
    var b = G(ga, a),
        d = G(ha, a),
        c = Z(a.targets),
        e = [],
        g = B(b, d),
        h;

    for (h in a) {
      g.hasOwnProperty(h) || "targets" === h || e.push({
        name: h,
        offset: g.offset,
        tweens: aa(a[h], d)
      });
    }

    a = ea(c, e);
    return B(b, {
      children: [],
      animatables: c,
      animations: a,
      duration: O("duration", a, d),
      delay: O("delay", a, d)
    });
  }

  function n(a) {
    function b() {
      return window.Promise && new Promise(function (a) {
        return Q = a;
      });
    }

    function d(a) {
      return f.reversed ? f.duration - a : a;
    }

    function c(a) {
      for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
        var g = d[b],
            h = g.animatable,
            m = g.tweens;
        e.tween = m.filter(function (b) {
          return a < b.end;
        })[0] || m[m.length - 1];
        e.isPath$1 = e.tween.isPath;
        e.round = e.tween.round;
        e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);
        m = Y(e.tween.to.numbers.map(function (a) {
          return function (b, c) {
            c = a.isPath$1 ? 0 : a.tween.from.numbers[c];
            b = c + a.eased * (b - c);
            a.isPath$1 && (b = X(a.tween.value, b));
            a.round && (b = Math.round(b * a.round) / a.round);
            return b;
          };
        }(e)), e.tween.to.strings);
        ia[g.type](h.target, g.property, m, c, h.id);
        g.currentValue = m;
        b++;
        e = {
          isPath$1: e.isPath$1,
          tween: e.tween,
          eased: e.eased,
          round: e.round
        };
      }

      if (c) for (var k in c) {
        E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[E] = c[k].join(" ");
      }
      f.currentTime = a;
      f.progress = a / f.duration * 100;
    }

    function e(a) {
      if (f[a]) f[a](f);
    }

    function g() {
      f.remaining && !0 !== f.remaining && f.remaining--;
    }

    function h(a) {
      var h = f.duration,
          l = f.offset,
          n = f.delay,
          P = f.currentTime,
          q = f.reversed,
          r = d(a),
          r = Math.min(Math.max(r, 0), h);

      if (f.children) {
        var p = f.children;
        if (r >= f.currentTime) for (var u = 0; u < p.length; u++) {
          p[u].seek(r);
        } else for (u = p.length; u--;) {
          p[u].seek(r);
        }
      }

      r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e("begin")), e("run")) : (r <= l && 0 !== P && (c(0), q && g()), r >= h && P !== h && (c(h), q || g()));
      a >= h && (f.remaining ? (t = m, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), "Promise" in window && (Q(), R = b()), f.completed || (f.completed = !0, e("complete"))), k = 0);
      e("update");
    }

    a = void 0 === a ? {} : a;
    var m,
        t,
        k = 0,
        Q = null,
        R = b(),
        f = fa(a);

    f.reset = function () {
      var a = f.direction,
          b = f.loop;
      f.currentTime = 0;
      f.progress = 0;
      f.paused = !0;
      f.began = !1;
      f.completed = !1;
      f.reversed = "reverse" === a;
      f.remaining = "alternate" === a && 1 === b ? 2 : b;

      for (a = f.children.length; a--;) {
        b = f.children[a], b.seek(b.offset), b.reset();
      }
    };

    f.tick = function (a) {
      m = a;
      t || (t = m);
      h((k + m - t) * n.speed);
    };

    f.seek = function (a) {
      h(d(a));
    };

    f.pause = function () {
      var a = q.indexOf(f);
      -1 < a && q.splice(a, 1);
      f.paused = !0;
    };

    f.play = function () {
      f.paused && (f.paused = !1, t = 0, k = d(f.currentTime), q.push(f), z || ja());
    };

    f.reverse = function () {
      f.reversed = !f.reversed;
      t = 0;
      k = d(f.currentTime);
    };

    f.restart = function () {
      f.pause();
      f.reset();
      f.play();
    };

    f.finished = R;
    f.reset();
    f.autoplay && f.play();
    return f;
  }

  var ga = {
    update: void 0,
    begin: void 0,
    run: void 0,
    complete: void 0,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    offset: 0
  },
      ha = {
    duration: 1E3,
    delay: 0,
    easing: "easeOutElastic",
    elasticity: 500,
    round: 0
  },
      V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
      E,
      g = {
    arr: function arr(a) {
      return Array.isArray(a);
    },
    obj: function obj(a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    },
    svg: function svg(a) {
      return a instanceof SVGElement;
    },
    dom: function dom(a) {
      return a.nodeType || g.svg(a);
    },
    str: function str(a) {
      return "string" === typeof a;
    },
    fnc: function fnc(a) {
      return "function" === typeof a;
    },
    und: function und(a) {
      return "undefined" === typeof a;
    },
    hex: function hex(a) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function rgb(a) {
      return /^rgb/.test(a);
    },
    hsl: function hsl(a) {
      return /^hsl/.test(a);
    },
    col: function col(a) {
      return g.hex(a) || g.rgb(a) || g.hsl(a);
    }
  },
      y = function () {
    function a(a, d, c) {
      return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a;
    }

    return function (b, d, c, e) {
      if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
        var g = new Float32Array(11);
        if (b !== d || c !== e) for (var h = 0; 11 > h; ++h) {
          g[h] = a(.1 * h, b, c);
        }
        return function (h) {
          if (b === d && c === e) return h;
          if (0 === h) return 0;
          if (1 === h) return 1;

          for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k) {
            m += .1;
          }

          --k;
          var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1,
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;

          if (.001 <= l) {
            for (m = 0; 4 > m; ++m) {
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
              if (0 === l) break;
              var n = a(k, b, c) - h,
                  k = k - n / l;
            }

            h = k;
          } else if (0 === l) h = k;else {
            var k = m,
                m = m + .1,
                f = 0;

            do {
              n = k + (m - k) / 2, l = a(n, b, c) - h, 0 < l ? m = n : k = n;
            } while (1e-7 < Math.abs(l) && 10 > ++f);

            h = n;
          }

          return a(h, d, e);
        };
      }
    };
  }(),
      N = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }

    var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = {
      In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a],
      Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }],
      InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }]
    },
        c = {
      linear: y(.25, .25, .75, .75)
    },
        e = {},
        l;

    for (l in d) {
      e.type = l, d[e.type].forEach(function (a) {
        return function (d, e) {
          c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d);
        };
      }(e)), e = {
        type: e.type
      };
    }

    return c;
  }(),
      ia = {
    css: function css(a, b, d) {
      return a.style[b] = d;
    },
    attribute: function attribute(a, b, d) {
      return a.setAttribute(b, d);
    },
    object: function object(a, b, d) {
      return a[b] = d;
    },
    transform: function transform(a, b, d, c, e) {
      c[e] || (c[e] = []);
      c[e].push(b + "(" + d + ")");
    }
  },
      q = [],
      z = 0,
      ja = function () {
    function a() {
      z = requestAnimationFrame(b);
    }

    function b(b) {
      var c = q.length;

      if (c) {
        for (var d = 0; d < c;) {
          q[d] && q[d].tick(b), d++;
        }

        a();
      } else cancelAnimationFrame(z), z = 0;
    }

    return a;
  }();

  n.version = "2.0.2";
  n.speed = 1;
  n.running = q;

  n.remove = function (a) {
    a = M(a);

    for (var b = q.length; b--;) {
      for (var d = q[b], c = d.animations, e = c.length; e--;) {
        F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause());
      }
    }
  };

  n.getValue = J;

  n.path = function (a, b) {
    var d = g.str(a) ? v(a)[0] : a,
        c = b || 100;
    return function (a) {
      return {
        el: d,
        property: a,
        totalLength: d.getTotalLength() * (c / 100)
      };
    };
  };

  n.setDashoffset = function (a) {
    var b = a.getTotalLength();
    a.setAttribute("stroke-dasharray", b);
    return b;
  };

  n.bezier = y;
  n.easings = N;

  n.timeline = function (a) {
    var b = n(a);
    b.pause();
    b.duration = 0;

    b.add = function (a) {
      b.children.forEach(function (a) {
        a.began = !0;
        a.completed = !0;
      });
      w(a).forEach(function (a) {
        var c = b.duration,
            d = a.offset;
        a.autoplay = !1;
        a.offset = g.und(d) ? c : K(d, c);
        b.seek(a.offset);
        a = n(a);
        a.duration > c && (b.duration = a.duration);
        a.began = !0;
        b.children.push(a);
      });
      b.reset();
      b.seek(0);
      b.autoplay && b.restart();
      return b;
    };

    return b;
  };

  n.random = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  };

  return n;
});
/*!
 * Jarallax v2.0.2 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */


!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jarallax = t();
}(void 0, function () {
  "use strict";

  function e(e) {
    "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, {
      capture: !0,
      once: !0,
      passive: !0
    });
  }

  var t;
  t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  var i = t;
  var o = i.navigator,
      n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o.userAgent);
  var a, s;

  function l() {
    n ? (!a && document.body && (a = document.createElement("div"), a.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(a)), s = (a ? a.clientHeight : 0) || i.innerHeight || document.documentElement.clientHeight) : s = i.innerHeight || document.documentElement.clientHeight;
  }

  l(), i.addEventListener("resize", l), i.addEventListener("orientationchange", l), i.addEventListener("load", l), e(function () {
    l();
  });
  var r = [];

  function m() {
    r.length && (r.forEach(function (e, t) {
      var o = e.instance,
          n = e.oldData,
          a = o.$item.getBoundingClientRect(),
          l = {
        width: a.width,
        height: a.height,
        top: a.top,
        bottom: a.bottom,
        wndW: i.innerWidth,
        wndH: s
      },
          m = !n || n.wndW !== l.wndW || n.wndH !== l.wndH || n.width !== l.width || n.height !== l.height,
          c = m || !n || n.top !== l.top || n.bottom !== l.bottom;
      r[t].oldData = l, m && o.onResize(), c && o.onScroll();
    }), i.requestAnimationFrame(m));
  }

  var c = 0;

  var p =
  /*#__PURE__*/
  function () {
    function p(e, t) {
      var _s, _s2;

      _classCallCheck(this, p);

      var i = this;
      i.instanceID = c, c += 1, i.$item = e, i.defaults = {
        type: "scroll",
        speed: .5,
        imgSrc: null,
        imgElement: ".jarallax-img",
        imgSize: "cover",
        imgPosition: "50% 50%",
        imgRepeat: "no-repeat",
        keepImg: !1,
        elementInViewport: null,
        zIndex: -100,
        disableParallax: !1,
        disableVideo: !1,
        videoSrc: null,
        videoStartTime: 0,
        videoEndTime: 0,
        videoVolume: 0,
        videoLoop: !0,
        videoPlayOnlyVisible: !0,
        videoLazyLoading: !0,
        onScroll: null,
        onInit: null,
        onDestroy: null,
        onCoverImage: null
      };
      var n = i.$item.dataset || {},
          a = {};

      if (Object.keys(n).forEach(function (e) {
        var t = e.substr(0, 1).toLowerCase() + e.substr(1);
        t && void 0 !== i.defaults[t] && (a[t] = n[e]);
      }), i.options = i.extend({}, i.defaults, a, t), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach(function (e) {
        "true" === i.options[e] ? i.options[e] = !0 : "false" === i.options[e] && (i.options[e] = !1);
      }), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp) {
        var _e = i.options.disableParallax;

        i.options.disableParallax = function () {
          return _e.test(o.userAgent);
        };
      }

      if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = function () {
        return !1;
      }), "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp) {
        var _e2 = i.options.disableVideo;

        i.options.disableVideo = function () {
          return _e2.test(o.userAgent);
        };
      }

      "function" != typeof i.options.disableVideo && (i.options.disableVideo = function () {
        return !1;
      });
      var s = i.options.elementInViewport;
      s && "object" == _typeof(s) && void 0 !== s.length && (_s = s, _s2 = _slicedToArray(_s, 1), s = _s2[0], _s), s instanceof Element || (s = null), i.options.elementInViewport = s, i.image = {
        src: i.options.imgSrc || null,
        $container: null,
        useImgTag: !1,
        position: "fixed"
      }, i.initImg() && i.canInitParallax() && i.init();
    }

    _createClass(p, [{
      key: "css",
      value: function css(e, t) {
        return "string" == typeof t ? i.getComputedStyle(e).getPropertyValue(t) : (Object.keys(t).forEach(function (i) {
          e.style[i] = t[i];
        }), e);
      }
    }, {
      key: "extend",
      value: function extend(e) {
        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        return e = e || {}, Object.keys(t).forEach(function (i) {
          t[i] && Object.keys(t[i]).forEach(function (o) {
            e[o] = t[i][o];
          });
        }), e;
      }
    }, {
      key: "getWindowData",
      value: function getWindowData() {
        return {
          width: i.innerWidth || document.documentElement.clientWidth,
          height: s,
          y: document.documentElement.scrollTop
        };
      }
    }, {
      key: "initImg",
      value: function initImg() {
        var e = this;
        var t = e.options.imgElement;
        return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image(), t.src = e.options.imgSrc) : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage));
      }
    }, {
      key: "canInitParallax",
      value: function canInitParallax() {
        return !this.options.disableParallax();
      }
    }, {
      key: "init",
      value: function init() {
        var e = this,
            t = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden"
        };
        var o = {
          pointerEvents: "none",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          willChange: "transform,opacity"
        };

        if (!e.options.keepImg) {
          var _t = e.$item.getAttribute("style");

          if (_t && e.$item.setAttribute("data-jarallax-original-styles", _t), e.image.useImgTag) {
            var _t2 = e.image.$item.getAttribute("style");

            _t2 && e.image.$item.setAttribute("data-jarallax-original-styles", _t2);
          }
        }

        if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
          position: "relative"
        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
          zIndex: 0
        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
          "z-index": e.options.zIndex
        }), "fixed" === this.image.position && e.css(e.image.$container, {
          "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }), e.image.$container.setAttribute("id", "jarallax-container-".concat(e.instanceID)), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({
          "object-fit": e.options.imgSize,
          "object-position": e.options.imgPosition,
          "max-width": "none"
        }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({
          "background-position": e.options.imgPosition,
          "background-size": e.options.imgSize,
          "background-repeat": e.options.imgRepeat,
          "background-image": e.image.bgImage || "url(\"".concat(e.image.src, "\")")
        }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
          var _t3 = function (e) {
            var t = [];

            for (; null !== e.parentElement;) {
              1 === (e = e.parentElement).nodeType && t.push(e);
            }

            return t;
          }(e.$item).filter(function (e) {
            var t = i.getComputedStyle(e),
                o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
            return o && "none" !== o || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"]);
          });

          e.image.position = _t3.length ? "absolute" : "fixed";
        }

        o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
          "background-image": "none"
        }), e.addToParallaxList();
      }
    }, {
      key: "addToParallaxList",
      value: function addToParallaxList() {
        r.push({
          instance: this
        }), 1 === r.length && i.requestAnimationFrame(m);
      }
    }, {
      key: "removeFromParallaxList",
      value: function removeFromParallaxList() {
        var e = this;
        r.forEach(function (t, i) {
          t.instance.instanceID === e.instanceID && r.splice(i, 1);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var e = this;
        e.removeFromParallaxList();
        var t = e.$item.getAttribute("data-jarallax-original-styles");

        if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
          var _i2 = e.image.$item.getAttribute("data-jarallax-original-styles");

          e.image.$item.removeAttribute("data-jarallax-original-styles"), _i2 ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item);
        }

        e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
      }
    }, {
      key: "clipContainer",
      value: function clipContainer() {}
    }, {
      key: "coverImage",
      value: function coverImage() {
        var e = this,
            t = e.image.$container.getBoundingClientRect(),
            i = t.height,
            o = e.options.speed,
            n = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
        var a = 0,
            l = i,
            r = 0;
        return n && (0 > o ? (a = o * Math.max(i, s), s < i && (a -= o * (i - s))) : a = o * (i + s), 1 < o ? l = Math.abs(a - s) : 0 > o ? l = a / o + Math.abs(a) : l += (s - i) * (1 - o), a /= 2), e.parallaxScrollDistance = a, r = n ? (s - l) / 2 : (i - l) / 2, e.css(e.image.$item, {
          height: "".concat(l, "px"),
          marginTop: "".concat(r, "px"),
          left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
          width: "".concat(t.width, "px")
        }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
          image: {
            height: l,
            marginTop: r
          },
          container: t
        };
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return this.isElementInViewport || !1;
      }
    }, {
      key: "onScroll",
      value: function onScroll(e) {
        var t = this,
            o = t.$item.getBoundingClientRect(),
            n = o.top,
            a = o.height,
            l = {};
        var r = o;
        if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= s && r.left <= i.innerWidth, !e && !t.isElementInViewport) return;
        var m = Math.max(0, n),
            c = Math.max(0, a + n),
            p = Math.max(0, -n),
            d = Math.max(0, n + a - s),
            g = Math.max(0, a - (n + a - s)),
            u = Math.max(0, -n + s - a),
            f = 1 - (s - n) / (s + a) * 2;
        var h = 1;

        if (a < s ? h = 1 - (p || d) / a : c <= s ? h = c / s : g <= s && (h = g / s), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (l.transform = "translate3d(0,0,0)", l.opacity = h), "scale" === t.options.type || "scale-opacity" === t.options.type) {
          var _e3 = 1;
          0 > t.options.speed ? _e3 -= t.options.speed * h : _e3 += t.options.speed * (1 - h), l.transform = "scale(".concat(_e3, ") translate3d(0,0,0)");
        }

        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
          var _e4 = t.parallaxScrollDistance * f;

          "absolute" === t.image.position && (_e4 -= n), l.transform = "translate3d(0,".concat(_e4, "px,0)");
        }

        t.css(t.image.$item, l), t.options.onScroll && t.options.onScroll.call(t, {
          section: o,
          beforeTop: m,
          beforeTopEnd: c,
          afterTop: p,
          beforeBottom: d,
          beforeBottomEnd: g,
          afterBottom: u,
          visiblePercent: h,
          fromViewportCenter: f
        });
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.coverImage();
      }
    }]);

    return p;
  }();

  var d = function d(e, t) {
    ("object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? e instanceof HTMLElement : e && "object" == _typeof(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
    var o = e.length;
    var n,
        a = 0;

    for (var _len2 = arguments.length, i = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      i[_key2 - 2] = arguments[_key2];
    }

    for (; a < o; a += 1) {
      if ("object" == _typeof(t) || void 0 === t ? e[a].jarallax || (e[a].jarallax = new p(e[a], t)) : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, i)), void 0 !== n) return n;
    }

    return e;
  };

  d.constructor = p;
  var g = i.jQuery;

  if (void 0 !== g) {
    var _e5 = function _e5() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      Array.prototype.unshift.call(e, this);
      var t = d.apply(i, e);
      return "object" != _typeof(t) ? t : this;
    };

    _e5.constructor = d.constructor;
    var _t4 = g.fn.jarallax;
    g.fn.jarallax = _e5, g.fn.jarallax.noConflict = function () {
      return g.fn.jarallax = _t4, this;
    };
  }

  return e(function () {
    d(document.querySelectorAll("[data-jarallax]"));
  }), d;
});
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.AOS = t() : e.AOS = t();
}(void 0, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }

      return e;
    },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    },
        j = function j() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (k = !0), k) return w = (0, y["default"])(w, x), (0, b["default"])(w, x.once), w;
    },
        O = function O() {
      w = (0, h["default"])(), j();
    },
        _ = function _() {
      w.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        S = function S(e) {
      return e === !0 || "mobile" === e && p["default"].mobile() || "phone" === e && p["default"].phone() || "tablet" === e && p["default"].tablet() || "function" == typeof e && e() === !0;
    },
        z = function z(e) {
      x = i(x, e), w = (0, h["default"])();
      var t = document.all && !window.atob;
      return S(x.disable) || t ? _() : (document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener("resize", (0, f["default"])(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f["default"])(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u["default"])(function () {
        (0, b["default"])(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || (0, d["default"])("[data-aos]", O), w);
    };

    e.exports = {
      init: z,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
              o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }

        function r(e) {
          return k = e, h = setTimeout(s, t), _ ? o(e) : g;
        }

        function a(e) {
          var n = e - w,
              o = e - k,
              i = t - n;
          return S ? j(i, y - o) : i;
        }

        function c(e) {
          var n = e - w,
              o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function s() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
        }

        function d(e) {
          return h = void 0, z && b ? o(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(O());
        }

        function m() {
          var e = O(),
              n = c(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(s, t), o(w);
          }

          return void 0 === h && (h = setTimeout(s, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            _ = !1,
            S = !1,
            z = !0;

        if ("function" != typeof e) throw new TypeError(f);
        return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m;
      }

      function o(e, t, o) {
        var r = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError(f);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return s;

        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
      }

      var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          f = "Expected a function",
          s = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function O() {
        return h.Date.now();
      };

      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
              o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }

        function r(e) {
          return O = e, h = setTimeout(s, t), _ ? i(e) : g;
        }

        function u(e) {
          var n = e - w,
              o = e - O,
              i = t - n;
          return S ? x(i, y - o) : i;
        }

        function f(e) {
          var n = e - w,
              o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function s() {
          var e = j();
          return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
        }

        function d(e) {
          return h = void 0, z && b ? i(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(j());
        }

        function m() {
          var e = j(),
              n = f(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(s, t), i(w);
          }

          return void 0 === h && (h = setTimeout(s, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            _ = !1,
            S = !1,
            z = !0;

        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m;
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s;
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return f;

        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
      }

      var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          c = "Expected a function",
          f = NaN,
          s = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function j() {
        return g.Date.now();
      };

      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      var n = window.document,
          r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
          a = new r(o);
      i = t, a.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }

    function o(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            n = Array.prototype.slice.call(e.removedNodes),
            o = t.concat(n).filter(function (e) {
          return e.hasAttribute && e.hasAttribute("data-aos");
        }).length;
        o && i();
      });
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = function i() {};

    t["default"] = n;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = function () {
      function e() {
        n(this, e);
      }

      return i(e, [{
        key: "phone",
        value: function value() {
          var e = o();
          return !(!r.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: "mobile",
        value: function value() {
          var e = o();
          return !(!u.test(e) && !c.test(e.substr(0, 4)));
        }
      }, {
        key: "tablet",
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t["default"] = new f();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e, t, _n2) {
      var o = e.node.getAttribute("data-aos-once");
      t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !_n2 && "true" !== o) && e.node.classList.remove("aos-animate");
    },
        o = function o(e, t) {
      var o = window.pageYOffset,
          i = window.innerHeight;
      e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };

    t["default"] = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(12),
        r = o(i),
        a = function a(e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add("aos-init"), e.position = (0, r["default"])(e.node, t.offset);
      }), e;
    };

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(13),
        r = o(i),
        a = function a(e, t) {
      var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r["default"])(e).top, a.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          n += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          n += e.offsetHeight;
          break;

        case "top-center":
          n += i / 2;
          break;

        case "bottom-center":
          n += i / 2 + e.offsetHeight;
          break;

        case "center-center":
          n += i / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          n += i;
          break;

        case "bottom-top":
          n += e.offsetHeight + i;
          break;

        case "center-top":
          n += e.offsetHeight / 2 + i;
      }

      return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };

    t["default"] = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: n,
        left: t
      };
    };

    t["default"] = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };

    t["default"] = n;
  }]);
});
/* Chocolat-1.0.4 */

/* jQuery plugin for lightbox */

!function () {
  "use strict";

  var e = void 0;

  function t(e, t) {
    return new Promise(function (s) {
      var i = function i() {
        t.removeEventListener("transitionend", i), s();
      };

      t.addEventListener("transitionend", i);
      var l = t.getAttribute("class"),
          n = t.getAttribute("style");
      e(), l === t.getAttribute("class") && n === t.getAttribute("style") && i(), 0 === parseFloat(getComputedStyle(t).transitionDuration) && i();
    });
  }

  function s(_ref) {
    var e = _ref.src,
        t = _ref.srcset,
        s = _ref.sizes;
    var i = new Image();
    return i.src = e, t && (i.srcset = t), s && (i.sizes = s), "decode" in i ? new Promise(function (e, t) {
      i.decode().then(function () {
        e(i);
      })["catch"](function () {
        t(i);
      });
    }) : new Promise(function (e, t) {
      i.onload = e(i), i.onerror = t(i);
    });
  }

  function i(e) {
    var t, s;
    var i = e.imgHeight,
        l = e.imgWidth,
        n = e.containerHeight,
        a = e.containerWidth,
        o = e.canvasWidth,
        c = e.canvasHeight,
        h = e.imageSize,
        r = i / l;
    return "cover" == h ? r < n / a ? s = (t = n) / r : t = (s = a) * r : "native" == h ? (t = i, s = l) : (r > c / o ? s = (t = c) / r : t = (s = o) * r, "scale-down" === h && (s >= l || t >= i) && (s = l, t = i)), {
      height: t,
      width: s
    };
  }

  function l(e) {
    return e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : Promise.reject();
  }

  function n() {
    return document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : Promise.reject();
  }

  var a = {
    container: document.body,
    className: void 0,
    imageSize: "scale-down",
    fullScreen: !1,
    loop: !1,
    linkImages: !0,
    setIndex: 0,
    firstImageIndex: 0,
    lastImageIndex: !1,
    currentImageIndex: void 0,
    allowZoom: !0,
    closeOnBackgroundClick: !0,
    setTitle: function setTitle() {
      return "";
    },
    description: function description() {
      return this.images[this.settings.currentImageIndex].title;
    },
    pagination: function pagination() {
      var e = this.settings.lastImageIndex + 1;
      return this.settings.currentImageIndex + 1 + "/" + e;
    },
    afterInitialize: function afterInitialize() {},
    afterMarkup: function afterMarkup() {},
    afterImageLoad: function afterImageLoad() {},
    afterClose: function afterClose() {},
    zoomedPaddingX: function zoomedPaddingX(e, t) {
      return 0;
    },
    zoomedPaddingY: function zoomedPaddingY(e, t) {
      return 0;
    }
  };

  var o =
  /*#__PURE__*/
  function () {
    function o(e, t) {
      var _this = this;

      _classCallCheck(this, o);

      this.settings = t, this.elems = {}, this.images = [], this.events = [], this.state = {
        fullScreenOpen: !1,
        initialZoomState: null,
        initialized: !1,
        timer: !1,
        visible: !1
      }, this._cssClasses = ["chocolat-open", "chocolat-in-container", "chocolat-cover", "chocolat-zoomable", "chocolat-zoomed", "chocolat-zooming-in", "chocolat-zooming-out"], NodeList.prototype.isPrototypeOf(e) || HTMLCollection.prototype.isPrototypeOf(e) ? e.forEach(function (e, t) {
        _this.images.push({
          title: e.getAttribute("title"),
          src: e.getAttribute("href"),
          srcset: e.getAttribute("data-srcset"),
          sizes: e.getAttribute("data-sizes")
        }), _this.off(e, "click.chocolat"), _this.on(e, "click.chocolat", function (e) {
          _this.init(t), e.preventDefault();
        });
      }) : this.images = e, this.settings.container instanceof Element || this.settings.container instanceof HTMLElement ? this.elems.container = this.settings.container : this.elems.container = document.body, this.api = {
        open: function open(e) {
          return e = parseInt(e) || 0, _this.init(e);
        },
        close: function close() {
          return _this.close();
        },
        next: function next() {
          return _this.change(1);
        },
        prev: function prev() {
          return _this.change(-1);
        },
        "goto": function goto(e) {
          return _this.open(e);
        },
        current: function current() {
          return _this.settings.currentImageIndex;
        },
        position: function position() {
          return _this.position(_this.elems.img);
        },
        destroy: function destroy() {
          return _this.destroy();
        },
        set: function set(e, t) {
          return _this.settings[e] = t, t;
        },
        get: function get(e) {
          return _this.settings[e];
        },
        getElem: function getElem(e) {
          return _this.elems[e];
        }
      };
    }

    _createClass(o, [{
      key: "init",
      value: function init(e) {
        return this.state.initialized || (this.markup(), this.attachListeners(), this.settings.lastImageIndex = this.images.length - 1, this.state.initialized = !0), this.settings.afterInitialize.call(this), this.load(e);
      }
    }, {
      key: "load",
      value: function load(e) {
        var _this2 = this;

        if (this.state.visible || (this.state.visible = !0, setTimeout(function () {
          _this2.elems.overlay.classList.add("chocolat-visible"), _this2.elems.wrapper.classList.add("chocolat-visible");
        }, 0), this.elems.container.classList.add("chocolat-open")), this.settings.fullScreen && l(this.elems.wrapper), this.settings.currentImageIndex === e) return Promise.resolve();
        var i,
            n,
            a = setTimeout(function () {
          _this2.elems.loader.classList.add("chocolat-visible");
        }, 1e3),
            o = setTimeout(function () {
          o = void 0, i = t(function () {
            _this2.elems.imageCanvas.classList.remove("chocolat-visible");
          }, _this2.elems.imageCanvas);
        }, 80);
        return s(this.images[e]).then(function (e) {
          return n = e, o ? (clearTimeout(o), Promise.resolve()) : i;
        }).then(function () {
          var t = e + 1;
          return null != _this2.images[t] && s(_this2.images[t]), _this2.settings.currentImageIndex = e, _this2.elems.description.textContent = _this2.settings.description.call(_this2), _this2.elems.pagination.textContent = _this2.settings.pagination.call(_this2), _this2.arrows(), _this2.position(n).then(function () {
            return _this2.elems.loader.classList.remove("chocolat-visible"), clearTimeout(a), _this2.appear(n);
          });
        }).then(function () {
          _this2.elems.container.classList.toggle("chocolat-zoomable", _this2.zoomable(n, _this2.elems.wrapper)), _this2.settings.afterImageLoad.call(_this2);
        });
      }
    }, {
      key: "position",
      value: function position(_ref2) {
        var _this3 = this;

        var e = _ref2.naturalHeight,
            s = _ref2.naturalWidth;

        var l = {
          imgHeight: e,
          imgWidth: s,
          containerHeight: this.elems.container.clientHeight,
          containerWidth: this.elems.container.clientWidth,
          canvasWidth: this.elems.imageCanvas.clientWidth,
          canvasHeight: this.elems.imageCanvas.clientHeight,
          imageSize: this.settings.imageSize
        },
            _i3 = i(l),
            n = _i3.width,
            a = _i3.height;

        return t(function () {
          Object.assign(_this3.elems.imageWrapper.style, {
            width: n + "px",
            height: a + "px"
          });
        }, this.elems.imageWrapper);
      }
    }, {
      key: "appear",
      value: function appear(e) {
        var _this4 = this;

        return this.elems.imageWrapper.removeChild(this.elems.img), this.elems.img = e, this.elems.img.setAttribute("class", "chocolat-img"), this.elems.imageWrapper.appendChild(this.elems.img), t(function () {
          _this4.elems.imageCanvas.classList.add("chocolat-visible");
        }, this.elems.imageCanvas);
      }
    }, {
      key: "change",
      value: function change(e) {
        if (!this.state.visible) return;
        if (!this.settings.linkImages) return;
        this.zoomOut();
        var t = this.settings.currentImageIndex + parseInt(e);

        if (t > this.settings.lastImageIndex) {
          if (this.settings.loop) return this.load(this.settings.firstImageIndex);
        } else {
          if (!(t < this.settings.firstImageIndex)) return this.load(t);
          if (this.settings.loop) return this.load(this.settings.lastImageIndex);
        }
      }
    }, {
      key: "arrows",
      value: function arrows() {
        this.settings.loop ? (this.elems.left.classList.add("active"), this.elems.right.classList.add("active")) : this.settings.linkImages ? (this.elems.right.classList.toggle("active", this.settings.currentImageIndex !== this.settings.lastImageIndex), this.elems.left.classList.toggle("active", this.settings.currentImageIndex !== this.settings.firstImageIndex)) : (this.elems.left.classList.remove("active"), this.elems.right.classList.remove("active"));
      }
    }, {
      key: "close",
      value: function close() {
        var _this5 = this;

        if (this.state.fullScreenOpen) return void n();
        this.state.visible = !1;
        var e = t(function () {
          _this5.elems.overlay.classList.remove("chocolat-visible");
        }, this.elems.overlay),
            s = t(function () {
          _this5.elems.wrapper.classList.remove("chocolat-visible");
        }, this.elems.wrapper);
        return Promise.all([e, s]).then(function () {
          _this5.elems.container.classList.remove("chocolat-open"), _this5.settings.afterClose.call(_this5);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this$elems$container;

        for (var _e6 = this.events.length - 1; _e6 >= 0; _e6--) {
          var _this$events$_e = this.events[_e6],
              _t5 = _this$events$_e.element,
              _s3 = _this$events$_e.eventName;
          this.off(_t5, _s3);
        }

        this.state.initialized && (this.state.fullScreenOpen && n(), this.settings.currentImageIndex = void 0, this.state.visible = !1, this.state.initialized = !1, (_this$elems$container = this.elems.container.classList).remove.apply(_this$elems$container, _toConsumableArray(this._cssClasses)), this.elems.wrapper.parentNode.removeChild(this.elems.wrapper));
      }
    }, {
      key: "markup",
      value: function markup() {
        this.elems.container.classList.add("chocolat-open", this.settings.className), "cover" == this.settings.imageSize && this.elems.container.classList.add("chocolat-cover"), this.elems.container !== document.body && this.elems.container.classList.add("chocolat-in-container"), this.elems.wrapper = document.createElement("div"), this.elems.wrapper.setAttribute("id", "chocolat-content-" + this.settings.setIndex), this.elems.wrapper.setAttribute("class", "chocolat-wrapper"), this.elems.container.appendChild(this.elems.wrapper), this.elems.overlay = document.createElement("div"), this.elems.overlay.setAttribute("class", "chocolat-overlay"), this.elems.wrapper.appendChild(this.elems.overlay), this.elems.loader = document.createElement("div"), this.elems.loader.setAttribute("class", "chocolat-loader"), this.elems.wrapper.appendChild(this.elems.loader), this.elems.layout = document.createElement("div"), this.elems.layout.setAttribute("class", "chocolat-layout"), this.elems.wrapper.appendChild(this.elems.layout), this.elems.top = document.createElement("div"), this.elems.top.setAttribute("class", "chocolat-top"), this.elems.layout.appendChild(this.elems.top), this.elems.center = document.createElement("div"), this.elems.center.setAttribute("class", "chocolat-center"), this.elems.layout.appendChild(this.elems.center), this.elems.left = document.createElement("div"), this.elems.left.setAttribute("class", "chocolat-left"), this.elems.center.appendChild(this.elems.left), this.elems.imageCanvas = document.createElement("div"), this.elems.imageCanvas.setAttribute("class", "chocolat-image-canvas"), this.elems.center.appendChild(this.elems.imageCanvas), this.elems.imageWrapper = document.createElement("div"), this.elems.imageWrapper.setAttribute("class", "chocolat-image-wrapper"), this.elems.imageCanvas.appendChild(this.elems.imageWrapper), this.elems.img = document.createElement("img"), this.elems.img.setAttribute("class", "chocolat-img"), this.elems.imageWrapper.appendChild(this.elems.img), this.elems.right = document.createElement("div"), this.elems.right.setAttribute("class", "chocolat-right"), this.elems.center.appendChild(this.elems.right), this.elems.bottom = document.createElement("div"), this.elems.bottom.setAttribute("class", "chocolat-bottom"), this.elems.layout.appendChild(this.elems.bottom), this.elems.close = document.createElement("span"), this.elems.close.setAttribute("class", "chocolat-close"), this.elems.top.appendChild(this.elems.close), this.elems.description = document.createElement("span"), this.elems.description.setAttribute("class", "chocolat-description"), this.elems.bottom.appendChild(this.elems.description), this.elems.pagination = document.createElement("span"), this.elems.pagination.setAttribute("class", "chocolat-pagination"), this.elems.bottom.appendChild(this.elems.pagination), this.elems.setTitle = document.createElement("span"), this.elems.setTitle.setAttribute("class", "chocolat-set-title"), this.elems.setTitle.textContent = this.settings.setTitle(), this.elems.bottom.appendChild(this.elems.setTitle), this.elems.fullscreen = document.createElement("span"), this.elems.fullscreen.setAttribute("class", "chocolat-fullscreen"), this.elems.bottom.appendChild(this.elems.fullscreen), this.settings.afterMarkup.call(this);
      }
    }, {
      key: "attachListeners",
      value: function attachListeners() {
        var _this6 = this;

        this.off(document, "keydown.chocolat"), this.on(document, "keydown.chocolat", function (e) {
          _this6.state.initialized && (37 == e.keyCode ? _this6.change(-1) : 39 == e.keyCode ? _this6.change(1) : 27 == e.keyCode && _this6.close());
        });
        var t = this.elems.wrapper.querySelector(".chocolat-right");
        this.off(t, "click.chocolat"), this.on(t, "click.chocolat", function () {
          _this6.change(1);
        });
        var s = this.elems.wrapper.querySelector(".chocolat-left");
        this.off(s, "click.chocolat"), this.on(s, "click.chocolat", function () {
          _this6.change(-1);
        }), this.off(this.elems.close, "click.chocolat"), this.on(this.elems.close, "click.chocolat", this.close.bind(this)), this.off(this.elems.fullscreen, "click.chocolat"), this.on(this.elems.fullscreen, "click.chocolat", function () {
          _this6.state.fullScreenOpen ? n() : l(_this6.elems.wrapper);
        }), this.off(document, "fullscreenchange.chocolat"), this.on(document, "fullscreenchange.chocolat", function () {
          document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? _this6.state.fullScreenOpen = !0 : _this6.state.fullScreenOpen = !1;
        }), this.off(document, "webkitfullscreenchange.chocolat"), this.on(document, "webkitfullscreenchange.chocolat", function () {
          document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? _this6.state.fullScreenOpen = !0 : _this6.state.fullScreenOpen = !1;
        }), this.settings.closeOnBackgroundClick && (this.off(this.elems.overlay, "click.chocolat"), this.on(this.elems.overlay, "click.chocolat", this.close.bind(this))), this.off(this.elems.wrapper, "click.chocolat"), this.on(this.elems.wrapper, "click.chocolat", function () {
          null !== _this6.state.initialZoomState && _this6.state.visible && (_this6.elems.container.classList.add("chocolat-zooming-out"), _this6.zoomOut().then(function () {
            _this6.elems.container.classList.remove("chocolat-zoomed"), _this6.elems.container.classList.remove("chocolat-zooming-out");
          }));
        }), this.off(this.elems.imageWrapper, "click.chocolat"), this.on(this.elems.imageWrapper, "click.chocolat", function (e) {
          null === _this6.state.initialZoomState && _this6.elems.container.classList.contains("chocolat-zoomable") && (e.stopPropagation(), _this6.elems.container.classList.add("chocolat-zooming-in"), _this6.zoomIn(e).then(function () {
            _this6.elems.container.classList.add("chocolat-zoomed"), _this6.elems.container.classList.remove("chocolat-zooming-in");
          }));
        }), this.on(this.elems.wrapper, "mousemove.chocolat", function (e) {
          if (null === _this6.state.initialZoomState || !_this6.state.visible) return;

          var t = _this6.elems.wrapper.getBoundingClientRect(),
              s = t.top + window.scrollY,
              i = t.left + window.scrollX,
              l = _this6.elems.wrapper.clientHeight,
              n = _this6.elems.wrapper.clientWidth,
              a = _this6.elems.img.width,
              o = _this6.elems.img.height,
              c = [e.pageX - n / 2 - i, e.pageY - l / 2 - s];

          var h = 0;

          if (a > n) {
            var _e7 = _this6.settings.zoomedPaddingX(a, n);

            h = c[0] / (n / 2), h *= (a - n) / 2 + _e7;
          }

          var r = 0;

          if (o > l) {
            var _e8 = _this6.settings.zoomedPaddingY(o, l);

            r = c[1] / (l / 2), r *= (o - l) / 2 + _e8;
          }

          _this6.elems.img.style.marginLeft = -h + "px", _this6.elems.img.style.marginTop = -r + "px";
        }), this.on(window, "resize.chocolat", function (t) {
          _this6.state.initialized && _this6.state.visible && function (t, s) {
            clearTimeout(e), e = setTimeout(function () {
              s();
            }, t);
          }(50, function () {
            var e = {
              imgHeight: _this6.elems.img.naturalHeight,
              imgWidth: _this6.elems.img.naturalWidth,
              containerHeight: _this6.elems.wrapper.clientHeight,
              containerWidth: _this6.elems.wrapper.clientWidth,
              canvasWidth: _this6.elems.imageCanvas.clientWidth,
              canvasHeight: _this6.elems.imageCanvas.clientHeight,
              imageSize: _this6.settings.imageSize
            },
                _i4 = i(e),
                t = _i4.width,
                s = _i4.height;

            _this6.position(_this6.elems.img).then(function () {
              _this6.elems.container.classList.toggle("chocolat-zoomable", _this6.zoomable(_this6.elems.img, _this6.elems.wrapper));
            });
          });
        });
      }
    }, {
      key: "zoomable",
      value: function zoomable(e, t) {
        var s = t.clientWidth,
            i = t.clientHeight,
            l = !(!this.settings.allowZoom || !(e.naturalWidth > s || e.naturalHeight > i)),
            n = e.clientWidth > e.naturalWidth || e.clientHeight > e.naturalHeight;
        return l && !n;
      }
    }, {
      key: "zoomIn",
      value: function zoomIn(e) {
        return this.state.initialZoomState = this.settings.imageSize, this.settings.imageSize = "native", this.position(this.elems.img);
      }
    }, {
      key: "zoomOut",
      value: function zoomOut(e) {
        return this.settings.imageSize = this.state.initialZoomState || this.settings.imageSize, this.state.initialZoomState = null, this.elems.img.style.margin = 0, this.position(this.elems.img);
      }
    }, {
      key: "on",
      value: function on(e, t, s) {
        var i = this.events.push({
          element: e,
          eventName: t,
          cb: s
        });
        e.addEventListener(t.split(".")[0], this.events[i - 1].cb);
      }
    }, {
      key: "off",
      value: function off(e, t) {
        var s = this.events.findIndex(function (s) {
          return s.element === e && s.eventName === t;
        });
        this.events[s] && (e.removeEventListener(t.split(".")[0], this.events[s].cb), this.events.splice(s, 1));
      }
    }]);

    return o;
  }();

  var c = [];

  window.Chocolat = function (e, t) {
    var s = Object.assign({}, a, {
      images: []
    }, t, {
      setIndex: c.length
    }),
        i = new o(e, s);
    return c.push(i), i;
  };
}();
/* Stellar Nav - jQuery Menu */

!function (u) {
  u.fn.stellarNav = function (n, r, h) {
    nav = u(this), r = u(window).width();
    var f = u.extend({
      theme: "plain",
      breakpoint: 768,
      menuLabel: "Menu",
      sticky: !1,
      position: "static",
      openingSpeed: 250,
      closingDelay: 250,
      showArrows: !0,
      phoneBtn: "",
      phoneLabel: "Call Us",
      locationBtn: "",
      locationLabel: "Location",
      closeBtn: !1,
      closeLabel: "Close",
      mobileMode: !1,
      scrollbarFix: !1
    }, n);
    return this.each(function () {
      if ("light" != f.theme && "dark" != f.theme || nav.addClass(f.theme), f.breakpoint && (h = f.breakpoint), f.menuLabel ? menuLabel = f.menuLabel : menuLabel = "", f.phoneLabel ? phoneLabel = f.phoneLabel : phoneLabel = "", f.locationLabel ? locationLabel = f.locationLabel : locationLabel = "", f.closeLabel ? closeLabel = f.closeLabel : closeLabel = "", f.phoneBtn && f.locationBtn) var n = "third";else if (f.phoneBtn || f.locationBtn) n = "half";else n = "full";

      if ("right" == f.position || "left" == f.position ? nav.prepend('<a href="#" class="menu-toggle"><span class="bars"><span></span><span></span><span></span></span> ' + menuLabel + "</a>") : nav.prepend('<a href="#" class="menu-toggle ' + n + '"><span class="bars"><span></span><span></span><span></span></span> ' + menuLabel + "</a>"), f.phoneBtn && "right" != f.position && "left" != f.position) {
        var e = '<a href="tel:' + f.phoneBtn + '" class="call-btn-mobile ' + n + '"><svg id="icon-phone"></svg> <span>' + phoneLabel + "</span></a>";
        nav.find("a.menu-toggle").after(e);
      }

      if (f.locationBtn && "right" != f.position && "left" != f.position) {
        e = '<a href="' + f.locationBtn + '" class="location-btn-mobile ' + n + '" target="_blank"><svg id="icon-location"></svg> <span>' + locationLabel + "</span></a>";
        nav.find("a.menu-toggle").after(e);
      }

      if (f.sticky && (navPos = nav.offset().top, h <= r && u(window).on("scroll", function () {
        u(window).scrollTop() > navPos ? nav.addClass("fixed") : nav.removeClass("fixed");
      })), "top" == f.position && nav.addClass("top"), "left" == f.position || "right" == f.position) {
        var i = '<a href="#" class="close-menu ' + n + '"><span class="icon-close"></span>' + closeLabel + "</a>",
            s = '<a href="tel:' + f.phoneBtn + '" class="call-btn-mobile ' + n + '"><svg id="icon-phone"></svg></a>',
            t = '<a href="' + f.locationBtn + '" class="location-btn-mobile ' + n + '" target="_blank"><svg id="icon-location"></svg></i></a>';
        nav.find("ul:first").prepend(i), f.locationBtn && nav.find("ul:first").prepend(t), f.phoneBtn && nav.find("ul:first").prepend(s);
      }

      "right" == f.position && nav.addClass("right"), "left" == f.position && nav.addClass("left"), f.showArrows || nav.addClass("hide-arrows"), f.closeBtn && "right" != f.position && "left" != f.position && nav.find("ul:first").append('<li><a href="#" class="close-menu"><span class="icon-close"></span> ' + closeLabel + "</a></li>"), f.scrollbarFix && u("body").addClass("stellarnav-noscroll-x");
      var a = document.getElementById("icon-phone");

      if (a) {
        a.setAttribute("viewBox", "0 0 480 480");
        var l = document.createElementNS("http://www.w3.org/2000/svg", "path");
        l.setAttribute("d", "M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076 c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257     c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194 C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02     C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876 c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029     C350.631,303.527,350.95,285.795,340.273,275.083z"), a.appendChild(l);
      }

      var o = document.getElementById("icon-location");

      if (o) {
        o.setAttribute("viewBox", "0 0 480 480");
        var d = document.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("d", "M322.621,42.825C294.073,14.272,259.619,0,219.268,0c-40.353,0-74.803,14.275-103.353,42.825 c-28.549,28.549-42.825,63-42.825,103.353c0,20.749,3.14,37.782,9.419,51.106l104.21,220.986   c2.856,6.276,7.283,11.225,13.278,14.838c5.996,3.617,12.419,5.428,19.273,5.428c6.852,0,13.278-1.811,19.273-5.428 c5.996-3.613,10.513-8.562,13.559-14.838l103.918-220.986c6.282-13.324,9.424-30.358,9.424-51.106 C365.449,105.825,351.176,71.378,322.621,42.825z M270.942,197.855c-14.273,14.272-31.497,21.411-51.674,21.411 s-37.401-7.139-51.678-21.411c-14.275-14.277-21.414-31.501-21.414-51.678c0-20.175,7.139-37.402,21.414-51.675 c14.277-14.275,31.504-21.414,51.678-21.414c20.177,0,37.401,7.139,51.674,21.414c14.274,14.272,21.413,31.5,21.413,51.675 C292.355,166.352,285.217,183.575,270.942,197.855z"), o.appendChild(d);
      }

      u(".menu-toggle, .stellarnav-open").on("click", function (n) {
        n.preventDefault(), "left" == f.position || "right" == f.position ? (nav.find("ul:first").stop(!0, !0).fadeToggle(f.openingSpeed), nav.toggleClass("active"), nav.hasClass("active") && nav.hasClass("mobile") && u(document).on("click", function (n) {
          nav.hasClass("mobile") && (u(n.target).closest(nav).length || (nav.find("ul:first").stop(!0, !0).fadeOut(f.openingSpeed), nav.removeClass("active")));
        })) : (nav.find("ul:first").stop(!0, !0).slideToggle(f.openingSpeed), nav.toggleClass("active"));
      }), u(".close-menu, .stellarnav-close").on("click", function () {
        nav.removeClass("active"), "left" == f.position || "right" == f.position ? nav.find("ul:first").stop(!0, !0).fadeToggle(f.openingSpeed) : nav.find("ul:first").stop(!0, !0).slideUp(f.openingSpeed).toggleClass("active");
      }), nav.find("li a").each(function () {
        0 < u(this).next().length && u(this).parent("li").addClass("has-sub").append('<a class="dd-toggle" href="#"><span class="icon-plus"></span></a>');
      }), nav.find("li .dd-toggle").on("click", function (n) {
        n.preventDefault(), u(this).parent("li").children("ul").stop(!0, !0).slideToggle(f.openingSpeed), u(this).parent("li").toggleClass("open");
      });

      var c = function c() {
        nav.find("li").off("mouseenter"), nav.find("li").off("mouseleave");
      };

      parentItems = nav.find("> ul > li");

      function p() {
        window.innerWidth <= h || f.mobileMode ? (c(), nav.addClass("mobile"), nav.removeClass("desktop"), !nav.hasClass("active") && nav.find("ul:first").is(":visible") && nav.find("ul:first").hide(), nav.find("li.mega").each(function () {
          u(this).find("ul").first().removeAttr("style"), u(this).find("ul").first().children().removeAttr("style");
        })) : (nav.addClass("desktop"), nav.removeClass("mobile"), nav.hasClass("active") && nav.removeClass("active"), !nav.hasClass("active") && nav.find("ul:first").is(":hidden") && nav.find("ul:first").show(), u("li.open").removeClass("open").find("ul:visible").hide(), c(), u(parentItems).each(function () {
          u(this).hasClass("mega") ? (u(this).on("mouseenter", function () {
            u(this).find("ul").first().stop(!0, !0).slideDown(f.openingSpeed);
          }), u(this).on("mouseleave", function () {
            u(this).find("ul").first().stop(!0, !0).slideUp(f.openingSpeed);
          })) : (u(this).on("mouseenter", function () {
            u(this).children("ul").stop(!0, !0).slideDown(f.openingSpeed);
          }), u(this).on("mouseleave", function () {
            u(this).children("ul").stop(!0, !0).delay(f.closingDelay).slideUp(f.openingSpeed);
          }), u(this).find("li.has-sub").on("mouseenter", function () {
            u(this).children("ul").stop(!0, !0).slideDown(f.openingSpeed);
          }), u(this).find("li.has-sub").on("mouseleave", function () {
            u(this).children("ul").stop(!0, !0).delay(f.closingDelay).slideUp(f.openingSpeed);
          }));
        }), navWidth = 0, u(parentItems).each(function () {
          navWidth += u(this)[0].getBoundingClientRect().width, navWidth = Math.round(navWidth), u(this).hasClass("mega") && (u(this).find("ul").first().css({
            left: 0,
            right: 0,
            margin: "0px auto"
          }), numCols = u(this).attr("data-columns"), 2 == numCols ? u(this).find("li.has-sub").width("50%") : 3 == numCols ? u(this).find("ul").first().children().width("33.33%") : 4 == numCols ? u(this).find("ul").first().children().width("25%") : 5 == numCols ? u(this).find("ul").first().children().width("20%") : 6 == numCols ? u(this).find("ul").first().children().width("16.66%") : 7 == numCols ? u(this).find("ul").first().children().width("14.28%") : 8 == numCols ? u(this).find("ul").first().children().width("12.5%") : u(this).find("ul").first().children().width("25%"));
        }), parentItems.hasClass("mega") && nav.find("li.mega > ul").css({
          "max-width": navWidth
        }));
      }

      p(), u(window).on("resize", function () {
        p();
      });
    });
  };
}(jQuery);
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, o) {
      var n,
          s = "$()." + i + '("' + e + '")';
      return t.each(function (t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n;
      }), void 0 !== n ? n : t;
    }

    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
      });
    }

    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);
        return u(this, t, e);
      }

      return h(this, t), this;
    }, o(a));
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = i);
  }

  var n = Array.prototype.slice,
      s = t.console,
      r = "undefined" == typeof s ? function () {} : function (t) {
    s.error(t);
  };
  return o(e || t.jQuery), i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : void 0, function () {
  function t() {}

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          o = i[t] = i[t] || [];
      return o.indexOf(e) == -1 && o.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
          o = i[t] = i[t] || {};
      return o[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      i = i.slice(0), e = e || [];

      for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
            r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e);
      }

      return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e;
  }

  function e() {}

  function i() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0;
    }

    return t;
  }

  function o(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
  }

  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
    }
  }

  function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == _typeof(e) && e.nodeType) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;

      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
            c = s[f],
            m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m;
      }

      var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);

      x !== !1 && (a.width = x + (I ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
    }
  }

  var r,
      a = "undefined" == typeof console ? e : function (t) {
    console.error(t);
  },
      u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      h = u.length,
      d = !1;
  return s;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";

  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";

    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
          n = o + "MatchesSelector";
      if (t[n]) return n;
    }
  }();

  return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var i = {};
  i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  };
  var o = Array.prototype.slice;
  i.makeArray = function (t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == _typeof(t) && "number" == typeof t.length;
    return e ? o.call(t) : [t];
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, i.filterFindElements = function (t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);

        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
          n.push(i[s]);
        }
      }
    }), n;
  }, i.debounceMethod = function (t, e, i) {
    i = i || 100;
    var o = t.prototype[e],
        n = e + "Timeout";

    t.prototype[e] = function () {
      var t = this[n];
      clearTimeout(t);
      var e = arguments,
          s = this;
      this[n] = setTimeout(function () {
        o.apply(s, e), delete s[n];
      }, i);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var n = t.console;
  return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var s = i.toDashed(o),
          r = "data-" + s,
          a = document.querySelectorAll("[" + r + "]"),
          u = document.querySelectorAll(".js-" + s),
          h = i.makeArray(a).concat(i.makeArray(u)),
          d = r + "-options",
          l = t.jQuery;
      h.forEach(function (t) {
        var i,
            s = t.getAttribute(r) || t.getAttribute(d);

        try {
          i = s && JSON.parse(s);
        } catch (a) {
          return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
        }

        var u = new e(t, i);
        l && l.data(t, o, u);
      });
    });
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
  "use strict";

  function i(t) {
    for (var e in t) {
      return !1;
    }

    return e = null, !0;
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create());
  }

  function n(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend"
  }[r],
      h = {
    transform: a,
    transition: r,
    transitionDuration: r + "Duration",
    transitionProperty: r + "Property",
    transitionDelay: r + "Delay"
  },
      d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    });
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, d.getSize = function () {
    this.size = e(this.element);
  }, d.css = function (t) {
    var e = this.element.style;

    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i];
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        o = t[e ? "left" : "right"],
        n = t[i ? "top" : "bottom"],
        s = parseFloat(o),
        r = parseFloat(n),
        a = this.layout.size;

    o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
  }, d.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop"),
        n = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        r = i ? "right" : "left",
        a = this.position.x + t[n];

    e[s] = this.getXValue(a), e[r] = "";
    var u = o ? "paddingTop" : "paddingBottom",
        h = o ? "top" : "bottom",
        d = o ? "bottom" : "top",
        l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, d._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
        o = this.position.y,
        n = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
    var s = t - i,
        r = e - o,
        a = {};
    a.transform = this.getTranslate(s, r), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    });
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop");

    return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e);
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);

    for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;

    for (var i in t.onTransitionEnd) {
      e.onEnd[i] = t.onTransitionEnd[i];
    }

    for (i in t.to) {
      e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    }

    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null;
    }

    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
  };
  var l = "opacity," + n(a);
  d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1);
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t);
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          o = f[t.propertyName] || t.propertyName;

      if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o];
      }

      this.emitEvent("transitionEnd", [this]);
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
  }, d._removeStyles = function (t) {
    var e = {};

    for (var i in t) {
      e[i] = "";
    }

    this.css(e);
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function () {
    this.css(c);
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }, d.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, d.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";

    for (var i in e) {
      return i;
    }
  }, d.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"));
  }, d.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }, o;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
    return e(t, i, o, n, s);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, o, n) {
  "use strict";

  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
    var n = ++l;
    this.element.outlayerGUID = n, f[n] = this, this._create();

    var s = this._getOption("initLayout");

    s && this.layout();
  }

  function r(t) {
    function e() {
      t.apply(this, arguments);
    }

    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n;
  }

  var u = t.console,
      h = t.jQuery,
      d = function d() {},
      l = 0,
      f = {};

  s.namespace = "outlayer", s.Item = n, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function (t) {
    o.extend(this.options, t);
  }, c._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);

    var t = this._getOption("resize");

    t && this.bindResize();
  }, c.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, c._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
          r = new i(s, this);
      o.push(r);
    }

    return o;
  }, c._filterFindItemElements = function (t) {
    return o.filterFindElements(t, this.options.itemSelector);
  }, c.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, c.layout = function () {
    this._resetLayout(), this._manageStamps();

    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, c._init = c.layout, c._resetLayout = function () {
    this.getSize();
  }, c.getSize = function () {
    this.size = i(this.element);
  }, c._getMeasurement = function (t, e) {
    var o,
        n = this.options[t];
    n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
  }, c.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, c._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, c._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function (t) {
        var o = this._getItemLayoutPosition(t);

        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
      }, this), this._processLayoutQueue(i);
    }
  }, c._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    };
  }, c._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, c.updateStagger = function () {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
  }, c._positionItem = function (t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
  }, c._postLayout = function () {
    this.resizeContainer();
  }, c.resizeContainer = function () {
    var t = this._getOption("resizeContainer");

    if (t) {
      var e = this._getContainerSize();

      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, c._emitCompleteOnItems = function (t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e]);
    }

    function o() {
      r++, r == s && i();
    }

    var n = this,
        s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function (e) {
      e.once(t, o);
    });
  }, c.dispatchEvent = function (t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
      var n = h.Event(e);
      n.type = t, this.$element.trigger(n, i);
    } else this.$element.trigger(t, i);
  }, c.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }, c.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }, c.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, c.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      o.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, c._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
  }, c._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, c._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }, c._manageStamp = d, c._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        o = this._boundingRect,
        n = i(t),
        s = {
      left: e.left - o.left - n.marginLeft,
      top: e.top - o.top - n.marginTop,
      right: o.right - e.right - n.marginRight,
      bottom: o.bottom - e.bottom - n.marginBottom
    };
    return s;
  }, c.handleEvent = o.handleEvent, c.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, c.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, c.onresize = function () {
    this.resize();
  }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, c.needsResizeLayout = function () {
    var t = i(this.element),
        e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth;
  }, c.addItems = function (t) {
    var e = this._itemize(t);

    return e.length && (this.items = this.items.concat(e)), e;
  }, c.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, c.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, c.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }, c.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }, c.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e);
  }, c.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e);
  }, c.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i;
    }
  }, c.getItems = function (t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function (t) {
      var i = this.getItem(t);
      i && e.push(i);
    }, this), e;
  }, c.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), o.removeFrom(this.items, t);
    }, this);
  }, c.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
  }, s.data = function (t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e];
  }, s.create = function (t, e) {
    var i = r(s);
    return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = n, s;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments);
  }

  var i = e.prototype = Object.create(t.Item.prototype),
      o = i._create;
  i._create = function () {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
  }, i.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
          e = this.layout._sorters;

      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this);
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function () {
    n.apply(this, arguments), this.css({
      display: ""
    });
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
  }

  var o = i.prototype,
      n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function (t) {
    o[t] = function () {
      return e.prototype[t].apply(this.isotope, arguments);
    };
  }), o.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element),
        i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight;
  }, o._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  }, o.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  }, o.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  }, o.getSegmentSize = function (t, e) {
    var i = t + e,
        o = "outer" + e;

    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e];
    }
  }, o.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element);
  }, o.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  }, o.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function (t, e) {
    function n() {
      i.apply(this, arguments);
    }

    return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];

    for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }

    this.maxY = 0, this.horizontalColIndex = 0;
  }, o.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }

    var o = this.columnWidth += this.gutter,
        n = this.containerWidth + this.gutter,
        s = n / o,
        r = o - n % o,
        a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1);
  }, o.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
        i = t ? this.element.parentNode : this.element,
        o = e(i);

    this.containerWidth = o && o.innerWidth;
  }, o._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
        i = e && e < 1 ? "round" : "ceil",
        o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);

    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
      x: this.columnWidth * s.col,
      y: s.y
    }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
      this.colYs[h] = a;
    }

    return r;
  }, o._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
        i = Math.min.apply(Math, e);

    return {
      col: e.indexOf(i),
      y: i
    };
  }, o._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;

    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
      e[o] = this._getColGroupY(o, t);
    }

    return e;
  }, o._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i);
  }, o._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols,
        o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    };
  }, o._manageStamp = function (t) {
    var i = e(t),
        o = this._getElementOffset(t),
        n = this._getOption("originLeft"),
        s = n ? o.left : o.right,
        r = s + i.outerWidth,
        a = Math.floor(s / this.columnWidth);

    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);

    for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
      this.colYs[l] = Math.max(d, this.colYs[l]);
    }
  }, o._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, o._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }

    return (this.cols - t) * this.columnWidth - this.gutter;
  }, o.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth;
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
  "use strict";

  var i = t.create("masonry"),
      o = i.prototype,
      n = {
    _getElementOffset: !0,
    layout: !0,
    _getMeasurement: !0
  };

  for (var s in e.prototype) {
    n[s] || (o[s] = e.prototype[s]);
  }

  var r = o.measureColumns;

  o.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this);
  };

  var a = o._getOption;
  return o._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";

  var e = t.create("fitRows"),
      i = e.prototype;
  return i._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
  }, i._getContainerSize = function () {
    return {
      height: this.maxY
    };
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";

  var e = t.create("vertical", {
    horizontalAlignment: 0
  }),
      i = e.prototype;
  return i._resetLayout = function () {
    this.y = 0;
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    };
  }, i._getContainerSize = function () {
    return {
      height: this.y
    };
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, o, n, s, r) {
  function a(t, e) {
    return function (i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];

        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h;
        }
      }

      return 0;
    };
  }

  var u = t.jQuery,
      h = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      d = e.create("isotope", {
    layoutMode: "masonry",
    isJQueryFiltering: !0,
    sortAscending: !0
  });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];

    for (var t in r.modes) {
      this._initLayoutMode(t);
    }
  }, l.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this);
  }, l._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];
      o.id = this.itemGUID++;
    }

    return this._updateItemsSortData(t), t;
  }, l._initLayoutMode = function (t) {
    var e = r.modes[t],
        i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
  }, l.layout = function () {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
  }, l._layout = function () {
    var t = this._getIsInstant();

    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
  }, l.arrange = function (t) {
    this.option(t), this._getIsInstant();

    var e = this._filter(this.items);

    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
  }, l._init = l.arrange, l._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }, l._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    return this._isInstant = e, e;
  }, l._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
    }

    var e,
        i,
        o,
        n = this;
    this.once("layoutComplete", function () {
      e = !0, t();
    }), this.once("hideComplete", function () {
      i = !0, t();
    }), this.once("revealComplete", function () {
      o = !0, t();
    });
  }, l._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";

    for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];

      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
      }
    }

    return {
      matches: i,
      needReveal: o,
      needHide: n
    };
  }, l._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function (e) {
      return t(e.element);
    } : function (e) {
      return o(e.element, t);
    };
  }, l.updateSortData = function (t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
  }, l._getSorters = function () {
    var t = this.options.getSortData;

    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i);
    }
  }, l._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData();
    }
  };

  var f = function () {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
      return t = a ? function (t) {
        return t && a(r(t));
      } : function (t) {
        return t && r(t);
      };
    }

    function e(t, e) {
      return t ? function (e) {
        return e.getAttribute(t);
      } : function (t) {
        var i = t.querySelector(e);
        return i && i.textContent;
      };
    }

    return t;
  }();

  d.sortDataParsers = {
    parseInt: function (_parseInt) {
      function parseInt(_x) {
        return _parseInt.apply(this, arguments);
      }

      parseInt.toString = function () {
        return _parseInt.toString();
      };

      return parseInt;
    }(function (t) {
      return parseInt(t, 10);
    }),
    parseFloat: function (_parseFloat) {
      function parseFloat(_x2) {
        return _parseFloat.apply(this, arguments);
      }

      parseFloat.toString = function () {
        return _parseFloat.toString();
      };

      return parseFloat;
    }(function (t) {
      return parseFloat(t);
    })
  }, l._sort = function () {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e);
    }
  }, l._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] != this.sortHistory[e]) return !1;
    }

    return !0;
  }, l._mode = function () {
    var t = this.options.layoutMode,
        e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e;
  }, l._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, l._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t);
  }, l._manageStamp = function (t) {
    this._mode()._manageStamp(t);
  }, l._getContainerSize = function () {
    return this._mode()._getContainerSize();
  }, l.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  }, l.appended = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i = this._filterRevealAdded(e);

      this.filteredItems = this.filteredItems.concat(i);
    }
  }, l.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      this._resetLayout(), this._manageStamps();

      var i = this._filterRevealAdded(e);

      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
    }
  }, l._filterRevealAdded = function (t) {
    var e = this._filter(t);

    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, l.insert = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i,
          o,
          n = e.length;

      for (i = 0; i < n; i++) {
        o = e[i], this.element.appendChild(o.element);
      }

      var s = this._filter(e).matches;

      for (i = 0; i < n; i++) {
        e[i].isLayoutInstant = !0;
      }

      for (this.arrange(), i = 0; i < n; i++) {
        delete e[i].isLayoutInstant;
      }

      this.reveal(s);
    }
  };
  var c = l.remove;
  return l.remove = function (t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);

    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s);
    }
  }, l.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random();
    }

    this.options.sortBy = "random", this._sort(), this._layout();
  }, l._noTransition = function (t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return this.options.transitionDuration = i, o;
  }, l.getFilteredItemElements = function () {
    return this.filteredItems.map(function (t) {
      return t.element;
    });
  }, d;
});