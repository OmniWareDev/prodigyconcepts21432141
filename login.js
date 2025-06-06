!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t, n) {
    var i, r, o = (n = n || _e).createElement("script");
    if (o.text = e, t) for (i in we) (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function i(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[pe.call(e)] || "object" : typeof e;
  }
  function r(e) {
    var t = !!e && "length" in e && e.length, n = i(e);
    return !("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) && !(null != e && e === e.window) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  function a(e, t) {
    return t ? "" === e ? " " : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }
  function s(e, t, n) {
    return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? Te.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? Te.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? Te.grep(e, function (e) {
      return fe.call(t, e) > -1 !== n;
    }) : Te.filter(t, e, n);
  }
  function l(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) ;
    return e;
  }
  function u(e) {
    var t = {};
    return Te.each(e.match(Be) || [], function (e, n) {
      t[n] = true;
    }), t;
  }
  function f(e) {
    throw e;
  }
  function d(e, t, n, i) {
    var r;
    try {
      e && ("function" == typeof (r = e.promise) && "number" != typeof (r = e.promise).nodeType && "function" != typeof (r = e.promise).item) ? r.call(e).done(t).fail(n) : e && ("function" == typeof (r = e.then) && "number" != typeof (r = e.then).nodeType && "function" != typeof (r = e.then).item) ? r.call(e, t, n) : t.apply(undefined, [e].slice(i));
    } catch (e) {
      n.apply(undefined, [e]);
    }
  }
  function p() {
    _e.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Te.ready();
  }
  function g() {
    this.expando = Te.expando + g.uid++;
  }
  function y(e, t, n) {
    var i;
    if (undefined === n && 1 === e.nodeType) if (i = "data-" + t.replace(Ge, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : Ke.test(n) ? JSON.parse(n) : n);
      } catch (e) {}
      Ye.set(e, t, n);
    } else n = undefined;
    return n;
  }
  function b(e, t, n, i) {
    var r, o, a = 20, s = i ? function () {
      return i.cur();
    } : function () {
      return Te.css(e, t, "");
    }, l = s(), u = n && n[3] || (Te.cssNumber[t] ? "" : "px"), c = e.nodeType && (Te.cssNumber[t] || "px" !== u && +l) && Ze.exec(Te.css(e, t));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; a--;) Te.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0), c /= o;
      c *= 2, Te.style(e, t, c + u), n = n || [];
    }
    return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r;
  }
  function _(e) {
    var t, n = e.ownerDocument, i = e.nodeName, r = ot[i];
    return r || (t = n.body.appendChild(n.createElement(i)), r = Te.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ot[i] = r, r);
  }
  function w(e, t) {
    for (var n, i, r = [], o = 0, a = e.length; o < a; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = ze.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ("none" === (i = t || i).style.display || "" === i.style.display && Te.contains(i.ownerDocument, i) && "none" === Te.css(i, "display")) && (r[o] = _(i))) : "none" !== n && (r[o] = "none", ze.set(i, "display", n)));
    for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  function x(e, t) {
    var n;
    return n = undefined !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : undefined !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], undefined === t || t && (e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()) ? Te.merge([e], n) : n;
  }
  function E(e, t) {
    for (var n = 0, i = e.length; n < i; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"));
  }
  function T(e, t, n, r, o) {
    for (var a, s, l, u, c, f, d = t.createDocumentFragment(), p = [], h = 0, m = e.length; h < m; h++) if ((a = e[h]) || 0 === a) if ("object" === i(a)) Te.merge(p, a.nodeType ? [a] : a); else if (dt.test(a)) {
      for (s = s || d.appendChild(t.createElement("div")), l = (ut.exec(a) || ["", ""])[1].toLowerCase(), u = ft[l] || ft._default, s.innerHTML = u[1] + Te.htmlPrefilter(a) + u[2], f = u[0]; f--;) s = s.lastChild;
      Te.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
    } else p.push(t.createTextNode(a));
    for (d.textContent = "", h = 0; a = p[h++];) if (r && Te.inArray(a, r) > -1) o && o.push(a); else if (c = Te.contains(a.ownerDocument, a), s = x(d.appendChild(a), "script"), c && E(s), n) for (f = 0; a = s[f++];) ct.test(a.type || "") && n.push(a);
    return d;
  }
  function S(e, t, n, i, r, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (i = i || n, n = undefined), t) S(e, s, n, i, t[s], o);
      return e;
    }
    if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), false === r) r = j; else if (!r) return e;
    return 1 === o && (a = r, r = function (e) {
      return Te().off(e), a.apply(this, arguments);
    }, r.guid = a.guid || (a.guid = Te.guid++)), e.each(function () {
      Te.event.add(this, t, r, i, n);
    });
  }
  function k(e, t, n) {
    n ? (ze.set(e, t, false), Te.event.add(e, t, {namespace: false, handler: function (e) {
      var n, i = ze.get(this, t);
      if (1 & e.isTrigger && this[t]) {
        if (i) (Te.event.special[t] || {}).delegateType && e.stopPropagation(); else if (i = le.call(arguments), ze.set(this, t, i), this[t](), n = ze.get(this, t), ze.set(this, t, false), i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n;
      } else i && (ze.set(this, t, Te.event.trigger(i[0], i.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = C);
    }})) : undefined === ze.get(e, t) && Te.event.add(e, t, C);
  }
  function O(e, t) {
    var n, i, r, o, a, s;
    if (1 === t.nodeType) {
      if (ze.hasData(e) && (s = ze.get(e).events)) for (r in ze.remove(t, "handle events"), s) for (n = 0, i = s[r].length; n < i; n++) Te.event.add(t, r, s[r][n]);
      Ye.hasData(e) && (o = Ye.access(e), a = Te.extend({}, o), Ye.set(t, a));
    }
  }
  function L(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && lt.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }
  function I(e, t, i, r) {
    t = ue(t);
    var o, a, s, l, u, c, f = 0, d = e.length, p = d - 1, h = t[0], m = "function" == typeof h && "number" != typeof h.nodeType && "function" != typeof h.item;
    if (m || d > 1 && "string" == typeof h && !ve.checkClone && mt.test(h)) return e.each(function (n) {
      var o = e.eq(n);
      m && (t[0] = h.call(this, n, o.html())), I(o, t, i, r);
    });
    if (d && (a = (o = T(t, e[0].ownerDocument, false, e, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
      for (l = (s = Te.map(x(o, "script"), A)).length; f < d; f++) u = o, f !== p && (u = Te.clone(u, true, true), l && Te.merge(s, x(u, "script"))), i.call(e[f], u, f);
      if (l) for (c = s[s.length - 1].ownerDocument, Te.map(s, N), f = 0; f < l; f++) u = s[f], ct.test(u.type || "") && !ze.access(u, "globalEval") && Te.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Te._evalUrl && !u.noModule && Te._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, c) : n(u.textContent.replace(gt, ""), u, c));
    }
    return e;
  }
  function q(e, t, n) {
    for (var i, r = t ? Te.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || Te.cleanData(x(i)), i.parentNode && (n && Te.contains(i.ownerDocument, i) && E(x(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  function P(e, t, n) {
    var i, r, o, a, s = yt.test(t), l = e.style;
    return (n = n || bt(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(De, "$1") || undefined), "" !== a || Te.contains(e.ownerDocument, e) || (a = Te.style(e, t)), !ve.pixelBoxStyles() && vt.test(a) && wt.test(t) && (i = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = n.width, l.width = i, l.minWidth = r, l.maxWidth = o)), undefined !== a ? a + "" : a;
  }
  function H(e, t) {
    return {get: function () {
      if (!e()) return (this.get = t).apply(this, arguments);
      delete this.get;
    }};
  }
  function R(e) {
    for (var t = e[0].toUpperCase() + e.slice(1), n = xt.length; n--;) if ((e = xt[n] + t) in Et) return e;
  }
  function F(e) {
    var t = Te.cssProps[e] || Tt[e];
    return t || (e in Et ? e : Tt[e] = R(e) || e);
  }
  function M(e, t, n) {
    var i = Ze.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function B(e, t, n, i, r, o) {
    var a = "width" === t ? 1 : 0, s = 0, l = 0, u = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += Te.css(e, n + et[a], true, r)), i ? ("content" === n && (l -= Te.css(e, "padding" + et[a], true, r)), "margin" !== n && (l -= Te.css(e, "border" + et[a] + "Width", true, r))) : (l += Te.css(e, "padding" + et[a], true, r), "padding" !== n ? l += Te.css(e, "border" + et[a] + "Width", true, r) : s += Te.css(e, "border" + et[a] + "Width", true, r));
    return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5)) || 0), l + u;
  }
  function W(e, t, n) {
    var i = bt(e), r = (!ve.boxSizingReliable() || n) && "border-box" === Te.css(e, "boxSizing", false, i), a = r, s = P(e, t, i), l = "offset" + t[0].toUpperCase() + t.slice(1);
    if (vt.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (!ve.boxSizingReliable() && r || !ve.reliableTrDimensions() && (e.nodeName && e.nodeName.toLowerCase() === "tr".toLowerCase()) || "auto" === s || !parseFloat(s) && "inline" === Te.css(e, "display", false, i)) && e.getClientRects().length && (r = "border-box" === Te.css(e, "boxSizing", false, i), (a = l in e) && (s = e[l])), (s = parseFloat(s) || 0) + B(e, t, n || (r ? "border" : "content"), a, i, s) + "px";
  }
  function U(e, t, n, i, r) {
    return new U.prototype.init(e, t, n, i, r);
  }
  function $() {
    Dt && (false === _e.hidden && e.requestAnimationFrame ? e.requestAnimationFrame($) : e.setTimeout($, Te.fx.interval), Te.fx.tick());
  }
  function Q() {
    return e.setTimeout(function () {
      kt = undefined;
    }), kt = Date.now();
  }
  function V(e, t) {
    var n, i = 0, r = {height: e};
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = et[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function X(e, t, n) {
    for (var i, r = (K.tweeners[t] || []).concat(K.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i;
  }
  function z(e, t, n) {
    var i, r, o, a, s, l, u, c, f = "width" in t || "height" in t, d = this, p = {}, h = e.style, m = e.nodeType && ("none" === (e = t || e).style.display || "" === e.style.display && Te.contains(e.ownerDocument, e) && "none" === Te.css(e, "display")), g = ze.get(e, "fxshow");
    for (i in n.queue || (null == (a = Te._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, d.always(function () {
      d.always(function () {
        a.unqueued--, Te.queue(e, "fx").length || a.empty.fire();
      });
    })), t) if (r = t[i], At.test(r)) {
      if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
        if ("show" !== r || !g || undefined === g[i]) continue;
        m = true;
      }
      p[i] = g && g[i] || Te.style(e, i);
    }
    if ((l = !Te.isEmptyObject(t)) || !Te.isEmptyObject(p)) for (i in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = g && g.display) && (u = ze.get(e, "display")), "none" === (c = Te.css(e, "display")) && (u ? c = u : (w([e], true), u = e.style.display || u, c = Te.css(e, "display"), w([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === Te.css(e, "float") && (l || (d.done(function () {
      h.display = u;
    }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
      h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
    })), l = false, p) l || (g ? "hidden" in g && (m = g.hidden) : g = ze.access(e, "fxshow", {display: u}), o && (g.hidden = !m), m && w([e], true), d.done(function () {
      for (i in m || w([e]), ze.remove(e, "fxshow"), p) Te.style(e, i, p[i]);
    })), l = X(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
  }
  function Y(e, t) {
    var n, i, r, o, a;
    for (n in e) if (r = t[i = n.replace(Qe, "ms-").replace(Ve, h)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = Te.cssHooks[i]) && "expand" in a) for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r;
  }
  function K(e, t, n) {
    var i, r, o = 0, a = K.prefilters.length, s = Te.Deferred().always(function () {
      delete l.elem;
    }), l = function () {
      if (r) return false;
      for (var t = kt || Q(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
      return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), false);
    }, u = s.promise({elem: e, props: Te.extend({}, t), opts: Te.extend(true, {specialEasing: {}, easing: Te.easing._default}, n), originalProperties: t, originalOptions: n, startTime: kt || Q(), duration: n.duration, tweens: [], createTween: function (t, n) {
      var i = Te.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
      return u.tweens.push(i), i;
    }, stop: function (t) {
      var n = 0, i = t ? u.tweens.length : 0;
      if (r) return this;
      for (r = true; n < i; n++) u.tweens[n].run(1);
      return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
    }}), c = u.props;
    for (Y(c, u.opts.specialEasing); o < a; o++) if (i = K.prefilters[o].call(u, e, c, u.opts)) return "function" == typeof i.stop && "number" != typeof i.stop.nodeType && "function" != typeof i.stop.item && (Te._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    return Te.map(c, X, u), "function" == typeof u.opts.start && "number" != typeof u.opts.start.nodeType && "function" != typeof u.opts.start.item && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), Te.fx.timer(Te.extend(l, {elem: e, anim: u, queue: u.opts.queue})), u;
  }
  function Z(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(Be) || [];
  }
  function ee(e, t, n, r) {
    var o;
    if (Array.isArray(t)) Te.each(t, function (t, i) {
      n || Wt.test(e) ? r(e, i) : ee(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
    }); else if (n || "object" !== i(t)) r(e, t); else for (o in t) ee(e + "[" + o + "]", t[o], n, r);
  }
  function te(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, r = 0, o = t.toLowerCase().match(Be) || [];
      if ("function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
    };
  }
  function ne(e, t, n, i) {
    function r(s) {
      var l;
      return o[s] = true, Te.each(e[s] || [], function (e, s) {
        var u = s(t, n, i);
        return "string" != typeof u || a || o[u] ? a ? !(l = u) : undefined : (t.dataTypes.unshift(u), r(u), false);
      }), l;
    }
    var o = {}, a = e === en;
    return r(t.dataTypes[0]) || !o["*"] && r("*");
  }
  function ie(e, t) {
    var n, i, r = Te.ajaxSettings.flatOptions || {};
    for (n in t) undefined !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && Te.extend(true, e, i), e;
  }
  function re(e, t, n) {
    for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), undefined === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i) for (r in s) if (s[r] && s[r].test(i)) {
      l.unshift(r);
      break;
    }
    if (l[0] in n) o = l[0]; else {
      for (r in n) {
        if (!l[0] || e.converters[r + " " + l[0]]) {
          o = r;
          break;
        }
        a || (a = r);
      }
      o = o || a;
    }
    if (o) return o !== l[0] && l.unshift(o), n[o];
  }
  function oe(e, t, n, i) {
    var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
      if (!(a = u[l + " " + o] || u["* " + o])) for (r in u) if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
        true === a ? a = u[r] : true !== u[r] && (o = s[0], c.unshift(s[1]));
        break;
      }
      if (true !== a) if (a && e.throws) t = a(t); else try {
        t = a(t);
      } catch (e) {
        return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o};
      }
    }
    return {state: "success", data: t};
  }
  var ae = [], se = Object.getPrototypeOf, le = ae.slice, ue = ae.flat ? function (e) {
    return ae.flat.call(e);
  } : function (e) {
    return ae.concat.apply([], e);
  }, ce = ae.push, fe = ae.indexOf, de = {}, pe = de.toString, he = de.hasOwnProperty, me = he.toString, ge = me.call(Object), ve = {}, _e = e.document, we = {type: true, src: true, nonce: true, noModule: true}, xe = "3.7.0", Ee = /HTML$/i, Te = function (e, t) {
    return new Te.fn.init(e, t);
  };
  Te.fn = Te.prototype = {jquery: xe, constructor: Te, length: 0, toArray: function () {
    return le.call(this);
  }, get: function (e) {
    return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e];
  }, pushStack: function (e) {
    var t = Te.merge(this.constructor(), e);
    return t.prevObject = this, t;
  }, each: function (e) {
    return Te.each(this, e);
  }, map: function (e) {
    return this.pushStack(Te.map(this, function (t, n) {
      return e.call(t, n, t);
    }));
  }, slice: function () {
    return this.pushStack(le.apply(this, arguments));
  }, first: function () {
    return this.eq(0);
  }, last: function () {
    return this.eq(-1);
  }, even: function () {
    return this.pushStack(Te.grep(this, function (e, t) {
      return (t + 1) % 2;
    }));
  }, odd: function () {
    return this.pushStack(Te.grep(this, function (e, t) {
      return t % 2;
    }));
  }, eq: function (e) {
    var t = this.length, n = +e + (e < 0 ? t : 0);
    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
  }, end: function () {
    return this.prevObject || this.constructor();
  }, push: ce, sort: ae.sort, splice: ae.splice}, Te.extend = Te.fn.extend = function () {
    var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = false;
    for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || "function" == typeof a && "number" != typeof a.nodeType && "function" != typeof a.item || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) i = e[t], "__proto__" !== t && a !== i && (u && i && (Te.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || Te.isPlainObject(n) ? n : {}, r = false, a[t] = Te.extend(u, o, i)) : undefined !== i && (a[t] = i));
    return a;
  }, Te.extend({expando: "jQuery" + (xe + Math.random()).replace(/\D/g, ""), isReady: true, error: function (e) {
    throw new Error(e);
  }, noop: function () {}, isPlainObject: function (e) {
    var t, n;
    return !(!e || "[object Object]" !== pe.call(e)) && (!(t = se(e)) || "function" == typeof (n = he.call(t, "constructor") && t.constructor) && me.call(n) === ge);
  }, isEmptyObject: function (e) {
    var t;
    for (t in e) return false;
    return true;
  }, globalEval: function (e, t, i) {
    n(e, {nonce: t && t.nonce}, i);
  }, each: function (e, t) {
    var n, i = 0;
    if (r(e)) for (n = e.length; i < n && false !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (false === t.call(e[i], i, e[i])) break;
    return e;
  }, text: function (e) {
    var t, n = "", i = 0, r = e.nodeType;
    if (r) {
      if (1 === r || 9 === r || 11 === r) return e.textContent;
      if (3 === r || 4 === r) return e.nodeValue;
    } else for (; t = e[i++];) n += Te.text(t);
    return n;
  }, makeArray: function (e, t) {
    var n = t || [];
    return null != e && (r(Object(e)) ? Te.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n;
  }, inArray: function (e, t, n) {
    return null == t ? -1 : fe.call(t, e, n);
  }, isXMLDoc: function (e) {
    var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
    return !Ee.test(t || n && n.nodeName || "HTML");
  }, merge: function (e, t) {
    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
    return e.length = r, e;
  }, grep: function (e, t, n) {
    for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
    return i;
  }, map: function (e, t, n) {
    var i, o, a = 0, s = [];
    if (r(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o); else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
    return ue(s);
  }, guid: 1, support: ve}), "function" == typeof Symbol && (Te.fn[Symbol.iterator] = ae[Symbol.iterator]), Te.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    de["[object " + t + "]"] = t.toLowerCase();
  });
  var Ce = ae.pop, je = ae.sort, Se = ae.splice, ke = "[\\x20\\t\\r\\n\\f]", De = new RegExp("^" + ke + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ke + "+$", "g");
  Te.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var Ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  Te.escapeSelector = function (e) {
    return (e + "").replace(Ae, a);
  };
  var Ne = _e, Oe = ce;
  !function () {
    function t() {
      try {
        return A.activeElement;
      } catch (e) {}
    }
    function n(e, t, i, r) {
      var o, a, s, l, u, c, p, g = t && t.ownerDocument, v = t ? t.nodeType : 9;
      if (i = i || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return i;
      if (!r && (d(t), t = t || A, O)) {
        if (11 !== v && (u = ie.exec(e))) if (o = u[1]) {
          if (9 === v) {
            if (!(s = t.getElementById(o))) return i;
            if (s.id === o) return q.call(i, s), i;
          } else if (g && (s = g.getElementById(o)) && n.contains(t, s) && s.id === o) return q.call(i, s), i;
        } else {
          if (u[2]) return q.apply(i, t.getElementsByTagName(e)), i;
          if ((o = u[3]) && t.getElementsByClassName) return q.apply(i, t.getElementsByClassName(o)), i;
        }
        if (!(W[e + " "] || L && L.test(e))) {
          if (p = e, g = t, 1 === v && (G.test(e) || K.test(e))) {
            for ((g = re.test(e) && (t.parentNode && undefined !== t.parentNode.getElementsByTagName && t.parentNode) || t) == t && ve.scope || ((l = t.getAttribute("id")) ? l = Te.escapeSelector(l) : t.setAttribute("id", l = P)), a = (c = t.toUpperCase()).length; a--;) c[a] = (l ? "#" + l : ":scope") + " " + c[a].replace(Qe, "ms-").replace(Ve, h);
            p = c.join(",");
          }
          try {
            return q.apply(i, g.querySelectorAll(p)), i;
          } catch (t) {
            W(e, true);
          } finally {
            l === P && t.removeAttribute("id");
          }
        }
      }
      return T(e.replace(De, "$1"), t, i, r);
    }
    function i() {
      var t = [];
      return e;
    }
    function a(e) {
      var t = A.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return false;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function s(e) {
      return function (t) {
        return t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase() && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        return (t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase() || t.nodeName && t.nodeName.toLowerCase() === "button".toLowerCase()) && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        return "form" in t ? t.parentNode && false === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }
    function c(e) {
      return function (t) {
        return t = +t, (function (n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]));
        }[P] = true, function (n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]));
        });
      }[P] = true, function (t) {
        return t = +t, (function (n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]));
        }[P] = true, function (n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]));
        });
      };
    }
    function d(e) {
      var t, i = e ? e.ownerDocument || e : Ne;
      return i != A && 9 === i.nodeType && i.documentElement ? (N = (A = i).documentElement, O = !Te.isXMLDoc(A), I = N.matches || N.webkitMatchesSelector || N.msMatchesSelector, Ne != A && (t = A.defaultView) && t.top !== t && t.addEventListener("unload", ue), ve.getById = a(function (e) {
        return N.appendChild(e).id = Te.expando, !A.getElementsByName || !A.getElementsByName(Te.expando).length;
      }), ve.disconnectedMatch = a(function (e) {
        return I.call(e, "*");
      }), ve.scope = a(function () {
        return A.querySelectorAll(":scope");
      }), ve.cssHas = a(function () {
        try {
          return A.querySelector(":has(*,:jqfake)"), false;
        } catch (e) {
          return true;
        }
      }), ve.getById ? (j.filter.ID = function (e) {
        var t = e.replace(oe, se);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, j.find.ID = function (e, t) {
        if (undefined !== t.getElementById && O) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (j.filter.ID = function (e) {
        var t = e.replace(oe, se);
        return function (e) {
          var n = undefined !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, j.find.ID = function (e, t) {
        if (undefined !== t.getElementById && O) {
          var n, i, r, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), j.find.TAG = function (e, t) {
        return undefined !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
      }, j.find.CLASS = function (e, t) {
        if (undefined !== t.getElementsByClassName && O) return t.getElementsByClassName(e);
      }, L = [], a(function (e) {
        var t;
        N.appendChild(e).innerHTML = "<a id='" + P + "' href='' disabled='disabled'></a><select id='" + P + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || L.push("\\[" + ke + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + P + "-]").length || L.push("~="), e.querySelectorAll("a#" + P + "+*").length || L.push(".#.+[+~]"), e.querySelectorAll(":checked").length || L.push(":checked"), (t = A.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), N.appendChild(e).disabled = true, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), (t = A.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || L.push("\\[" + ke + "*name" + ke + "*=" + ke + "*(?:''|\"\")");
      }), ve.cssHas || L.push(":has"), L = L.length && new RegExp(L.join("|")), U = function (e, t) {
        if (e === t) return D = true, 0;
        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !ve.sortDetached && t.compareDocumentPosition(e) === i ? e === A || e.ownerDocument == Ne && n.contains(Ne, e) ? -1 : t === A || t.ownerDocument == Ne && n.contains(Ne, t) ? 1 : k ? fe.call(k, e) - fe.call(k, t) : 0 : 4 & i ? -1 : 1);
      }, A) : A;
    }
    function p() {}
    function h(e, t) {
      var i, r, o, a, s, l, u, c = M[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (s = e, l = [], u = j.preFilter; s;) {
        for (a in i && !(r = Y.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = false, (r = K.exec(s)) && (i = r.shift(), o.push({value: i, type: r[0].replace(De, " ")}), s = s.slice(i.length)), j.filter) !(r = ee[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({value: i, type: a, matches: r}), s = s.slice(i.length));
        if (!i) break;
      }
      return t ? s.length : s ? n.error(e) : M(e, l).slice(0);
    }
    function m(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function g(e, t, n) {
      var i = t.dir, r = t.next, a = r || i, s = n && "parentNode" === a, l = R++;
      return t.first ? function (t, n, r) {
        for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, r);
        return false;
      } : function (t, n, u) {
        var c, f, d = [H, l];
        if (u) {
          for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, u)) return true;
        } else for (; t = t[i];) if (1 === t.nodeType || s) if (f = t[P] || (t[P] = {}), r && (t.nodeName && t.nodeName.toLowerCase() === r.toLowerCase())) t = t[i] || t; else {
          if ((c = f[a]) && c[0] === H && c[1] === l) return d[2] = c[2];
          if (f[a] = d, d[2] = e(t, n, u)) return true;
        }
        return false;
      };
    }
    function v(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) if (!e[r](t, n, i)) return false;
        return true;
      } : e[0];
    }
    function y(e, t, i) {
      for (var r = 0, o = t.length; r < o; r++) n(e, t[r], i);
      return i;
    }
    function b(e, t, n, i, r) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
      return a;
    }
    function _(e, t, n, i, o, a) {
      return i && !i[P] && (i = _(i)), o && !o[P] && (o = _(o, a)), (function (r, a, s, l) {
        var u, c, f, d, p = [], h = [], m = a.length, g = r || y(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? g : b(g, p, e, s, l);
        if (n ? n(v, d = o || (r ? e : m || i) ? [] : a, s, l) : d = v, i) for (u = b(d, h), i(u, [], s, l), c = u.length; c--;) (f = u[c]) && (d[h[c]] = !(v[h[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (u = [], c = d.length; c--;) (f = d[c]) && u.push(v[c] = f);
              null.nodeName && null.nodeName.toLowerCase() === (d = []).toLowerCase();
            }
            for (c = d.length; c--;) (f = d[c]) && (u = o ? fe.call(r, f) : p[c]) > -1 && (r[u] = !(a[u] = f));
          }
        } else d = b(d === a ? d.splice(m, d.length) : d), o ? null.nodeName && null.nodeName.toLowerCase() === a.toLowerCase() : q.apply(a, d);
      }[P] = true, function (r, a, s, l) {
        var u, c, f, d, p = [], h = [], m = a.length, g = r || y(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? g : b(g, p, e, s, l);
        if (n ? n(v, d = o || (r ? e : m || i) ? [] : a, s, l) : d = v, i) for (u = b(d, h), i(u, [], s, l), c = u.length; c--;) (f = u[c]) && (d[h[c]] = !(v[h[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (u = [], c = d.length; c--;) (f = d[c]) && u.push(v[c] = f);
              null.nodeName && null.nodeName.toLowerCase() === (d = []).toLowerCase();
            }
            for (c = d.length; c--;) (f = d[c]) && (u = o ? fe.call(r, f) : p[c]) > -1 && (r[u] = !(a[u] = f));
          }
        } else d = b(d === a ? d.splice(m, d.length) : d), o ? null.nodeName && null.nodeName.toLowerCase() === a.toLowerCase() : q.apply(a, d);
      });
    }
    function w(e) {
      for (var t, n, i, r = e.length, o = j.relative[e[0].type], a = o || j.relative[" "], s = o ? 1 : 0, l = g(function (e) {
        return e === t;
      }, a, true), u = g(function (e) {
        return fe.call(t, e) > -1;
      }, a, true), c = [function (e, n, i) {
        var r = !o && (i || n != S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
        return t = null, r;
      }]; s < r; s++) if (n = j.relative[e[s].type]) c = [g("true" === c || "false" !== c && ("null" === c ? null : c === +c + "" ? +c : Ke.test(c) ? JSON.parse(c) : c), n)]; else {
        if ((n = j.filter[e[s].type].apply(null, e[s].matches))[P]) {
          for (i = ++s; i < r && !j.relative[e[i].type]; i++) ;
          return _(s > 1 && ("true" === c || "false" !== c && ("null" === c ? null : c === +c + "" ? +c : Ke.test(c) ? JSON.parse(c) : c)), s > 1 && e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""}).replace(Qe, "ms-").replace(Ve, h).replace(De, "$1"), n, s < i && w(e.slice(s, i)), i < r && w(e = e.slice(i)), i < r && e.replace(Qe, "ms-").replace(Ve, h));
        }
        c.push(n);
      }
      return "true" === c || "false" !== c && ("null" === c ? null : c === +c + "" ? +c : Ke.test(c) ? JSON.parse(c) : c);
    }
    function x(e, t) {
      var n = t.length > 0, i = e.length > 0, o = function (r, o, a, s, l) {
        var u, c, f, p = 0, h = "0", m = r && [], g = [], v = S, y = r || i && j.find.TAG("*", l), _ = H += null == v ? 1 : Math.random() || 0.1, w = y.length;
        for (l && (S = o == A || o || l); h !== w && null != (u = y[h]); h++) {
          if (i && u) {
            for (c = 0, o || u.ownerDocument == A || (d(u), a = !O); f = e[c++];) if (u && undefined !== u.getElementsByTagName && u) {
              q.call(s, u);
              break;
            }
            l && (H = _);
          }
          n && ((u = !f && u) && p--, r && m.push(u));
        }
        if (p += h, n && h !== p) {
          for (c = 0; f = t[c++];) m && undefined !== m.getElementsByTagName && m;
          if (r) {
            if (p > 0) for (; h--;) m[h] || g[h] || (g[h] = Ce.call(s));
            g = b(g);
          }
          q.apply(s, g), l && !r && g.length > 0 && p + t.length > 1 && Te.uniqueSort(s);
        }
        return l && (H = _, S = v), m;
      };
      return n ? (o[P] = true, o) : o;
    }
    function E(e, t) {
      var n, i = [], r = [], o = B[e + " "];
      if (!o) {
        for (t || (t = t.toUpperCase()), n = t.length; n--;) (o = w(t[n]))[P] ? i.push(o) : r.push(o);
        (o = B(e, x(r, i))).selector = e;
      }
      return o;
    }
    function T(e, t, n, i) {
      var r, o, a, s, l, u = "function" == typeof e && e, c = !i && t.toUpperCase();
      if (n = n || [], 1 === c.length) {
        if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && j.relative[o[1].type]) {
          if (!(t = (j.find.ID(a.matches[0].replace(oe, se), t) || [])[0])) return n;
          u && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        for (r = ee.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !j.relative[s = a.type]);) if ((l = j.find[s]) && (i = l(a.matches[0].replace(oe, se), re.test(o[0].type) && (t.parentNode && undefined !== t.parentNode.getElementsByTagName && t.parentNode) || t))) {
          if (o.splice(r, 1), !(e = i.length && o.replace(Qe, "ms-").replace(Ve, h))) return q.apply(n, i), n;
          break;
        }
      }
      return (u || E(e, c))(i, t, !O, n, !t || re.test(e) && (t.parentNode && undefined !== t.parentNode.getElementsByTagName && t.parentNode) || t), n;
    }
    var C, j, S, k, D, A, N, O, L, I, q = Oe, P = Te.expando, H = 0, R = 0, F = i(), M = i(), B = i(), W = i(), $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Q = "(?:\\\\[\\da-fA-F]{1,6}" + ke + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^-\\x7f])+", V = "\\[" + ke + "*(" + Q + ")(?:" + ke + "*([*^$|!~]?=)" + ke + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Q + "))|)" + ke + "*\\]", X = ":(" + Q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + V + ")*)|.*)\\)|)", z = new RegExp(ke + "+", "g"), Y = new RegExp("^" + ke + "*," + ke + "*"), K = new RegExp("^" + ke + "*([>+~]|" + ke + ")" + ke + "*"), G = new RegExp(ke + "|>"), J = new RegExp(X), Z = new RegExp("^" + Q + "$"), ee = {ID: new RegExp("^#(" + Q + ")"), CLASS: new RegExp("^\\.(" + Q + ")"), TAG: new RegExp("^(" + Q + "|[*])"), ATTR: new RegExp("^" + V), PSEUDO: new RegExp("^" + X), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ke + "*(even|odd|(([+-]|)(\\d*)n|)" + ke + "*(?:([+-]|)" + ke + "*(\\d+)|))" + ke + "*\\)|)", "i"), bool: new RegExp("^(?:" + $ + ")$", "i"), needsContext: new RegExp("^" + ke + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ke + "*((?:-\\d)?\\d*)" + ke + "*\\)|)(?=[^-]|$)", "i")}, te = /^(?:input|select|textarea|button)$/i, ne = /^h\d$/i, ie = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, re = /[+~]/, oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + ke + "?|\\\\([^\\r\\n\\f])", "g"), se = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    }, ue = function () {
      d();
    }, ce = g(function (e) {
      return true === e.disabled && (e.nodeName && e.nodeName.toLowerCase() === "fieldset".toLowerCase());
    }, {dir: "parentNode", next: "legend"});
    try {
      q.apply(ae = le.call(Ne.childNodes), Ne.childNodes), ae[Ne.childNodes.length].nodeType;
    } catch (e) {
      q = {apply: function (e, t) {
        Oe.apply(e, le.call(t));
      }, call: function (e) {
        Oe.apply(e, le.call(arguments, 1));
      }};
    }
    for (C in n.matches = function (e, t) {
      return n(e, null, null, t);
    }, n.matchesSelector = function (e, t) {
      if (d(e), O && !W[t + " "] && (!L || !L.test(t))) try {
        var i = I.call(e, t);
        if (i || ve.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {
        W(t, true);
      }
      return n(t, A, null, [e]).length > 0;
    }, n.contains = function (e, t) {
      return (e.ownerDocument || e) != A && d(e), Te.contains(e, t);
    }, n.attr = function (e, t) {
      (e.ownerDocument || e) != A && d(e);
      var n = j.attrHandle[t.toLowerCase()], i = n && he.call(j.attrHandle, t.toLowerCase()) ? n(e, t, !O) : undefined;
      return undefined !== i ? i : e.getAttribute(t);
    }, n.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, Te.uniqueSort = function (e) {
      var t, n = [], i = 0, r = 0;
      if (D = !ve.sortStable, k = !ve.sortStable && le.call(e, 0), je.call(e, U), D) {
        for (; t = e[r++];) t === e[r] && (i = n.push(r));
        for (; i--;) Se.call(e, n[i], 1);
      }
      return k = null, e;
    }, Te.fn.uniqueSort = function () {
      return this.pushStack(Te.uniqueSort(le.apply(this)));
    }, j = Te.expr = {cacheLength: 50, createPseudo: r, match: ee, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: true}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: true}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
      return e[1] = e[1].replace(oe, se), e[3] = (e[3] || e[4] || e[5] || "").replace(oe, se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
    }, CHILD: function (e) {
      return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e;
    }, PSEUDO: function (e) {
      var t, n = !e[6] && e[2];
      return ee.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && J.test(n) && (t = true.toUpperCase()) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
    }}, filter: {TAG: function (e) {
      var t = e.replace(oe, se).toLowerCase();
      return "*" === e ? function () {
        return true;
      } : function (e) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      };
    }, CLASS: function (e) {
      var t = F[e + " "];
      return t || (t = new RegExp("(^|" + ke + ")" + e + "(" + ke + "|$)")) && F(e, function (e) {
        return t.test("string" == typeof e.className && e.className || undefined !== e.getAttribute && e.getAttribute("class") || "");
      });
    }, ATTR: function (e, t, i) {
      return function (r) {
        var o = n.attr(r, e);
        return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o.replace(z, " ") + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"));
      };
    }, CHILD: function (e, t, n, i, r) {
      var a = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), l = "of-type" === t;
      return 1 === i && 0 === r ? function (e) {
        return !!e.parentNode;
      } : function (t, n, u) {
        var c, f, d, p, h, m = a !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = l && t.nodeName.toLowerCase(), y = !u && !l, b = false;
        if (g) {
          if (a) {
            for (; m;) {
              for (d = t; d = d[m];) if (l ? d.nodeName && d.nodeName.toLowerCase() === v.toLowerCase() : 1 === d.nodeType) return false;
              h = m = "only" === e && !h && "nextSibling";
            }
            return true;
          }
          if (h = [s ? g.firstChild : g.lastChild], s && y) {
            for (b = (p = (c = (f = g[P] || (g[P] = {}))[e] || [])[0] === H && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();) if (1 === d.nodeType && ++b && d === t) {
              f[e] = [H, p, b];
              break;
            }
          } else if (y && (b = p = (c = (f = t[P] || (t[P] = {}))[e] || [])[0] === H && c[1]), false === b) for (; (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && (!(l ? d.nodeName && d.nodeName.toLowerCase() === v.toLowerCase() : 1 === d.nodeType) || !++b || (y && ((f = d[P] || (d[P] = {}))[e] = [H, b]), d !== t));) ;
          return (b -= r) === i || b % i == 0 && b / i >= 0;
        }
      };
    }, PSEUDO: function (e, t) {
      var i, o = j.pseudos[e] || j.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
      return o[P] ? t.nodeName && t.nodeName.toLowerCase() === t.toLowerCase() : o.length > 1 ? (i = [e, e, "", t], j.setFilters.hasOwnProperty(e.toLowerCase()) ? (function (e, n) {
        for (var i, r = e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase(), a = r.length; a--;) e[i = fe.call(e, r[a])] = !(n[i] = r[a]);
      }[P] = true, function (e, n) {
        for (var i, r = e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase(), a = r.length; a--;) e[i = fe.call(e, r[a])] = !(n[i] = r[a]);
      }) : function (e) {
        return e.nodeName && e.nodeName.toLowerCase() === 0..toLowerCase();
      }) : o;
    }}, pseudos: {not: (function (e) {
      var t = [], n = [], i = E(e.replace(De, "$1"));
      return i[P] ? (function (e, t, n, r) {
        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
      }[P] = true, function (e, t, n, r) {
        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
      }) : function (e, r, o) {
        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
      };
    }[P] = true, function (e) {
      var t = [], n = [], i = E(e.replace(De, "$1"));
      return i[P] ? (function (e, t, n, r) {
        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
      }[P] = true, function (e, t, n, r) {
        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
      }) : function (e, r, o) {
        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
      };
    }), has: (function (e) {
      return function (t) {
        return n(e, t).length > 0;
      };
    }[P] = true, function (e) {
      return function (t) {
        return n(e, t).length > 0;
      };
    }), contains: (function (e) {
      return e = e.replace(oe, se), function (t) {
        return (t.textContent || Te.text(t)).indexOf(e) > -1;
      };
    }[P] = true, function (e) {
      return e = e.replace(oe, se), function (t) {
        return (t.textContent || Te.text(t)).indexOf(e) > -1;
      };
    }), lang: (function (e) {
      return Z.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(oe, se).toLowerCase(), function (t) {
        var n;
        do {
          if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
        } while ((t = t.parentNode) && 1 === t.nodeType);
        return false;
      };
    }[P] = true, function (e) {
      return Z.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(oe, se).toLowerCase(), function (t) {
        var n;
        do {
          if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
        } while ((t = t.parentNode) && 1 === t.nodeType);
        return false;
      };
    }), target: function (t) {
      var n = e.location && e.location.hash;
      return n && n.slice(1) === t.id;
    }, root: function (e) {
      return e === N;
    }, focus: function (e) {
      return e === t() && A.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
    }, enabled: u(false), disabled: u(true), checked: function (e) {
      return e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase() && !!e.checked || e.nodeName && e.nodeName.toLowerCase() === "option".toLowerCase() && !!e.selected;
    }, selected: function (e) {
      return e.parentNode && e.parentNode.selectedIndex, true === e.selected;
    }, empty: function (e) {
      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return false;
      return true;
    }, parent: function (e) {
      return !j.pseudos.empty(e);
    }, header: function (e) {
      return ne.test(e.nodeName);
    }, input: function (e) {
      return te.test(e.nodeName);
    }, button: function (e) {
      return e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase() && "button" === e.type || e.nodeName && e.nodeName.toLowerCase() === "button".toLowerCase();
    }, text: function (e) {
      var t;
      return e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
    }, first: function () {
      return [0];
    }, last: function (e, t) {
      return [t - 1];
    }, eq: function (e, t, n) {
      return [n < 0 ? n + t : n];
    }, even: function (e, t) {
      for (var n = 0; n < t; n += 2) e.push(n);
      return e;
    }, odd: function (e, t) {
      for (var n = 1; n < t; n += 2) e.push(n);
      return e;
    }, lt: function (e, t, n) {
      var i;
      for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
      return e;
    }, gt: function (e, t, n) {
      for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
      return e;
    }}}, j.pseudos.nth = j.pseudos.eq, {radio: true, checkbox: true, file: true, password: true, image: true}) j.pseudos[C] = s(C);
    for (C in {submit: true, reset: true}) j.pseudos[C] = l(C);
    p.prototype = j.filters = j.pseudos, j.setFilters = new p, ve.sortStable = P.split("").sort(U).join("") === P, d(), ve.sortDetached = a(function (e) {
      return 1 & e.compareDocumentPosition(A.createElement("fieldset"));
    }), Te.find = n, Te.expr[":"] = Te.expr.pseudos, Te.unique = Te.uniqueSort, n.compile = E, n.select = T, n.setDocument = d, n.escape = Te.escapeSelector, n.getText = Te.text, n.isXML = Te.isXMLDoc, n.selectors = Te.expr, n.support = Te.support, n.uniqueSort = Te.uniqueSort;
  }();
  var Le = function (e, t, n) {
    for (var i = [], r = undefined !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (r && Te(e).is(n)) break;
      i.push(e);
    }
    return i;
  }, Ie = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n;
  }, qe = Te.expr.match.needsContext, Pe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  Te.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Te.find.matchesSelector(i, e) ? [i] : [] : Te.find.matches(e, Te.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, Te.fn.extend({find: function (e) {
    var t, n, i = this.length, r = this;
    if ("string" != typeof e) return this.pushStack(Te(e).filter(function () {
      for (t = 0; t < i; t++) if (Te.contains(r[t], this)) return true;
    }));
    for (n = this.pushStack([]), t = 0; t < i; t++) Te.find(e, r[t], n);
    return i > 1 ? Te.uniqueSort(n) : n;
  }, filter: function (e) {
    return this.pushStack(s(this, e || [], false));
  }, not: function (e) {
    return this.pushStack(s(this, e || [], true));
  }, is: function (e) {
    return !!s(this, "string" == typeof e && qe.test(e) ? Te(e) : e || [], false).length;
  }});
  var He, Re = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (Te.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (n = n || He, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Re.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof Te ? t[0] : t, Te.merge(this, Te.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : _e, true)), Pe.test(i[1]) && Te.isPlainObject(t)) for (i in t) "function" == typeof this[i] && "number" != typeof this[i].nodeType && "function" != typeof this[i].item ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (r = _e.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? undefined !== n.ready ? n.ready(e) : e(Te) : Te.makeArray(e, this);
  }).prototype = Te.fn, He = Te(_e);
  var Fe = /^(?:parents|prev(?:Until|All))/, Me = {children: true, contents: true, next: true, prev: true};
  Te.fn.extend({has: function (e) {
    var t = Te(e, this), n = t.length;
    return this.filter(function () {
      for (var e = 0; e < n; e++) if (Te.contains(this, t[e])) return true;
    });
  }, closest: function (e, t) {
    var n, i = 0, r = this.length, o = [], a = "string" != typeof e && Te(e);
    if (!qe.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Te.find.matchesSelector(n, e))) {
      o.push(n);
      break;
    }
    return this.pushStack(o.length > 1 ? Te.uniqueSort(o) : o);
  }, index: function (e) {
    return e ? "string" == typeof e ? fe.call(Te(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function (e, t) {
    return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))));
  }, addBack: function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }}), Te.each({parent: function (e) {
    var t = e.parentNode;
    return t && 11 !== t.nodeType ? t : null;
  }, parents: function (e) {
    return Le(e, "parentNode");
  }, parentsUntil: function (e, t, n) {
    return Le(e, "parentNode", n);
  }, next: function (e) {
    return l(e, "nextSibling");
  }, prev: function (e) {
    return l(e, "previousSibling");
  }, nextAll: function (e) {
    return Le(e, "nextSibling");
  }, prevAll: function (e) {
    return Le(e, "previousSibling");
  }, nextUntil: function (e, t, n) {
    return Le(e, "nextSibling", n);
  }, prevUntil: function (e, t, n) {
    return Le(e, "previousSibling", n);
  }, siblings: function (e) {
    return Ie((e.parentNode || {}).firstChild, e);
  }, children: function (e) {
    return Ie(e.firstChild);
  }, contents: function (e) {
    return null != e.contentDocument && se(e.contentDocument) ? e.contentDocument : (e.nodeName && e.nodeName.toLowerCase() === "template".toLowerCase() && (e = e.content || e), Te.merge([], e.childNodes));
  }}, function (e, t) {
    Te.fn[e] = function (n, i) {
      var r = Te.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Te.filter(i, r)), this.length > 1 && (Me[e] || Te.uniqueSort(r), Fe.test(e) && r.reverse()), this.pushStack(r);
    };
  });
  var Be = /[^\x20\t\r\n\f]+/g;
  Te.Callbacks = function (e) {
    e = "string" == typeof e ? u(e) : Te.extend({}, e);
    var t, n, r, o, a = [], s = [], l = -1, c = function () {
      for (o = o || e.once, r = t = true; s.length; l = -1) for (n = s.shift(); ++l < a.length;) false === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = false);
      e.memory || (n = false), t = false, o && (a = n ? [] : "");
    }, f = {add: function () {
      return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
        Te.each(n, function (n, r) {
          "function" == typeof r && "number" != typeof r.nodeType && "function" != typeof r.item ? e.unique && f.has(r) || a.push(r) : r && r.length && "string" !== i(r) && t(r);
        });
      }(arguments), n && !t && e), this;
    }, remove: function () {
      return Te.each(arguments, function (e, t) {
        for (var n; (n = Te.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--;
      }), this;
    }, has: function (e) {
      return e ? Te.inArray(e, a) > -1 : a.length > 0;
    }, empty: function () {
      return a && (a = []), this;
    }, disable: function () {
      return o = s = [], a = n = "", this;
    }, disabled: function () {
      return !a;
    }, lock: function () {
      return o = s = [], n || t || (a = n = ""), this;
    }, locked: function () {
      return !!o;
    }, fireWith: function (e, n) {
      return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || e), this;
    }, fire: function () {
      return f.fireWith(this, arguments), this;
    }, fired: function () {
      return !!r;
    }};
    return f;
  }, Te.extend({Deferred: function (t) {
    var n = [["notify", "progress", Te.Callbacks("memory"), Te.Callbacks("memory"), 2], ["resolve", "done", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 1, "rejected"]], i = "pending", r = {state: function () {
      return i;
    }, always: function () {
      return o.done(arguments).fail(arguments), this;
    }, catch: function (e) {
      return r.then(null, e);
    }, pipe: function () {
      var e = arguments;
      return Te.Deferred(function (t) {
        Te.each(n, function (n, i) {
          var r = "function" == typeof e[i[4]] && "number" != typeof e[i[4]].nodeType && "function" != typeof e[i[4]].item && e[i[4]];
          o[i[1]](function () {
            var e = r && r.apply(this, arguments);
            e && ("function" == typeof e.promise && "number" != typeof e.promise.nodeType && "function" != typeof e.promise.item) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
          });
        }), e = null;
      }).promise();
    }, then: function (t, i, r) {
      function o(t, n, i, r) {
        return function () {
          var s = this, l = arguments, u = function () {
            var e, u;
            if (!(t < a)) {
              if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
              u = e && ("object" == typeof e || "function" == typeof e) && e.then, "function" == typeof u && "number" != typeof u.nodeType && "function" != typeof u.item ? r ? u.call(e, a.nodeName && a.nodeName.toLowerCase() === n.toLowerCase(), a.nodeName && a.nodeName.toLowerCase() === n.toLowerCase()) : (a++, u.call(e, a.nodeName && a.nodeName.toLowerCase() === n.toLowerCase(), a.nodeName && a.nodeName.toLowerCase() === n.toLowerCase(), a.nodeName && a.nodeName.toLowerCase() === n.toLowerCase())) : (i !== c && (s = undefined, l = [e]), (r || n.resolveWith)(s, l));
            }
          }, d = r ? u : function () {
            try {
              u();
            } catch (e) {
              Te.Deferred.exceptionHook && Te.Deferred.exceptionHook(e, d.error), t + 1 >= a && (i !== f && (s = undefined, l = [e]), n.rejectWith(s, l));
            }
          };
          t ? d() : (Te.Deferred.getErrorHook ? d.error = Te.Deferred.getErrorHook() : Te.Deferred.getStackHook && (d.error = Te.Deferred.getStackHook()), e.setTimeout(d));
        };
      }
      var a = 0;
      return Te.Deferred(function (e) {
        n[0][3].add(0..nodeName && 0..nodeName.toLowerCase() === e.toLowerCase()), n[1][3].add(0..nodeName && 0..nodeName.toLowerCase() === e.toLowerCase()), n[2][3].add(0..nodeName && 0..nodeName.toLowerCase() === e.toLowerCase());
      }).promise();
    }, promise: function (e) {
      return null != e ? Te.extend(e, r) : r;
    }}, o = {};
    return Te.each(n, function (e, t) {
      var a = t[2], s = t[5];
      r[t[1]] = a.add, s && a.add(function () {
        i = s;
      }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
        return o[t[0] + "With"](this === o ? undefined : this, arguments), this;
      }, o[t[0] + "With"] = a.fireWith;
    }), r.promise(o), t && t.call(o, o), o;
  }, when: function (e) {
    var t = arguments.length, n = t, i = Array(n), r = le.call(arguments), o = Te.Deferred(), a = function (e) {
      return function (n) {
        i[e] = this, r[e] = arguments.length > 1 ? le.call(arguments) : n, --t || o.resolveWith(i, r);
      };
    };
    if (t <= 1 && (d(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || "function" == typeof (r[n] && r[n].then) && "number" != typeof (r[n] && r[n].then).nodeType && "function" != typeof (r[n] && r[n].then).item)) return o.then();
    for (; n--;) d(r[n], a(n), o.reject);
    return o.promise();
  }});
  var We = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  Te.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && We.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, Te.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var Ue = Te.Deferred();
  Te.fn.ready = function (e) {
    return Ue.then(e).catch(function (e) {
      Te.readyException(e);
    }), this;
  }, Te.extend({isReady: false, readyWait: 1, ready: function (e) {
    (true === e ? --Te.readyWait : Te.isReady) || (Te.isReady = true, true !== e && --Te.readyWait > 0 || Ue.resolveWith(_e, [Te]));
  }}), Te.ready.then = Ue.then, "complete" === _e.readyState || "loading" !== _e.readyState && !_e.documentElement.doScroll ? e.setTimeout(Te.ready) : (_e.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
  var $e = function (e, t, n, r, o, a, s) {
    var l = 0, u = e.length, c = null == n;
    if ("object" === i(n)) for (l in o = true, n) $e(e, t, l, n[l], true, a, s); else if (undefined !== r && (o = true, "function" == typeof r && "number" != typeof r.nodeType && "function" != typeof r.item || (s = true), c && (s ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
      return c.call(Te(e), n);
    })), t)) for (; l < u; l++) t(e[l], n, s ? r : r.call(e[l], l, t(e[l], n)));
    return o ? e : c ? t.call(e) : u ? t(e[0], n) : a;
  }, Qe = /^-ms-/, Ve = /-([a-z])/g;
  g.uid = 1, g.prototype = {cache: function (e) {
    var t = e[this.expando];
    return t || (t = {}, (1 === e.nodeType || 9 === e.nodeType || !+e.nodeType) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {value: t, configurable: true}))), t;
  }, set: function (e, t, n) {
    var i, r = this.cache(e);
    if ("string" == typeof t) r[t.replace(Qe, "ms-").replace(Ve, h)] = n; else for (i in t) r[i.replace(Qe, "ms-").replace(Ve, h)] = t[i];
    return r;
  }, get: function (e, t) {
    return undefined === t ? this.cache(e) : e[this.expando] && e[this.expando][t.replace(Qe, "ms-").replace(Ve, h)];
  }, access: function (e, t, n) {
    return undefined === t || t && "string" == typeof t && undefined === n ? this.get(e, t) : (this.set(e, t, n), undefined !== n ? n : t);
  }, remove: function (e, t) {
    var n, i = e[this.expando];
    if (undefined !== i) {
      if (undefined !== t) {
        n = (t = Array.isArray(t) ? t.map(m) : (t = t.replace(Qe, "ms-").replace(Ve, h)) in i ? [t] : t.match(Be) || []).length;
        for (; n--;) delete i[t[n]];
      }
      (undefined === t || Te.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando]);
    }
  }, hasData: function (e) {
    var t = e[this.expando];
    return undefined !== t && !Te.isEmptyObject(t);
  }};
  var ze = new g, Ye = new g, Ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ge = /[A-Z]/g;
  Te.extend({hasData: function (e) {
    return Ye.hasData(e) || ze.hasData(e);
  }, data: function (e, t, n) {
    return Ye.access(e, t, n);
  }, removeData: function (e, t) {
    Ye.remove(e, t);
  }, _data: function (e, t, n) {
    return ze.access(e, t, n);
  }, _removeData: function (e, t) {
    ze.remove(e, t);
  }}), Te.fn.extend({data: function (e, t) {
    var n, i, r, o = this[0], a = o && o.attributes;
    if (undefined === e) {
      if (this.length && (r = Ye.get(o), 1 === o.nodeType && !ze.get(o, "hasDataAttrs"))) {
        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = i.slice(5).replace(Qe, "ms-").replace(Ve, h), y(o, i, r[i]));
        ze.set(o, "hasDataAttrs", true);
      }
      return r;
    }
    return "object" == typeof e ? this.each(function () {
      Ye.set(this, e);
    }) : $e(this, function (t) {
      var n;
      if (o && undefined === t) return undefined !== (n = Ye.get(o, e)) || undefined !== (n = y(o, e)) ? n : undefined;
      this.each(function () {
        Ye.set(this, e, t);
      });
    }, null, t, arguments.length > 1, null, true);
  }, removeData: function (e) {
    return this.each(function () {
      Ye.remove(this, e);
    });
  }}), Te.extend({queue: function (e, t, n) {
    var i;
    if (e) return t = (t || "fx") + "queue", i = ze.get(e, t), n && (!i || Array.isArray(n) ? i = ze.access(e, t, Te.makeArray(n)) : i.push(n)), i || [];
  }, dequeue: function (e, t) {
    t = t || "fx";
    var n = Te.queue(e, t), i = n.length, r = n.shift(), o = Te._queueHooks(e, t), a = function () {
      Te.dequeue(e, t);
    };
    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire();
  }, _queueHooks: function (e, t) {
    var n = t + "queueHooks";
    return ze.get(e, n) || ze.access(e, n, {empty: Te.Callbacks("once memory").add(function () {
      ze.remove(e, [t + "queue", n]);
    })});
  }}), Te.fn.extend({queue: function (e, t) {
    var n = 2;
    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Te.queue(this[0], e) : undefined === t ? this : this.each(function () {
      var n = Te.queue(this, e, t);
      Te._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Te.dequeue(this, e);
    });
  }, dequeue: function (e) {
    return this.each(function () {
      Te.dequeue(this, e);
    });
  }, clearQueue: function (e) {
    return this.queue(e || "fx", []);
  }, promise: function (e, t) {
    var n, i = 1, r = Te.Deferred(), o = this, a = this.length, s = function () {
      --i || r.resolveWith(o, [o]);
    };
    for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;) (n = ze.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
    return s(), r.promise(t);
  }});
  var Je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ze = new RegExp("^(?:([+-])=|)(" + Je + ")([a-z%]*)$", "i"), et = ["Top", "Right", "Bottom", "Left"], tt = _e.documentElement, it = {composed: true};
  tt.getRootNode && (nt = function (e) {
    return Te.contains(e.ownerDocument, e) || e.getRootNode(it) === e.ownerDocument;
  });
  var ot = {};
  Te.fn.extend({show: function () {
    return w(this, true);
  }, hide: function () {
    return w(this);
  }, toggle: function (e) {
    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
      "none" === (this = t || this).style.display || "" === this.style.display && Te.contains(this.ownerDocument, this) && "none" === Te.css(this, "display") ? Te(this).show() : Te(this).hide();
    });
  }});
  var at, st, lt = /^(?:checkbox|radio)$/i, ut = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ct = /^$|^module$|\/(?:java|ecma)script/i;
  at = _e.createDocumentFragment().appendChild(_e.createElement("div")), (st = _e.createElement("input")).setAttribute("type", "radio"), st.setAttribute("checked", "checked"), st.setAttribute("name", "t"), at.appendChild(st), ve.checkClone = at.cloneNode(true).cloneNode(true).lastChild.checked, at.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!at.cloneNode(true).lastChild.defaultValue, at.innerHTML = "<option></option>", ve.option = !!at.lastChild;
  var ft = {thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
  ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td, ve.option || (ft.optgroup = ft.option = [1, "<select multiple='multiple'>", "</select>"]);
  var dt = /<|&#?\w+;/, pt = /^([^.]*)(?:\.(.+)|)/;
  Te.event = {global: {}, add: function (e, t, n, i, r) {
    var o, a, s, l, u, c, f, d, p, h, m, g = ze.get(e);
    if (1 === e.nodeType || 9 === e.nodeType || !+e.nodeType) for (n.handler && (n = (o = n).handler, r = o.selector), r && Te.find.matchesSelector(tt, r), n.guid || (n.guid = Te.guid++), (l = g.events) || (l = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function (t) {
      return undefined !== Te && Te.event.triggered !== t.type ? Te.event.dispatch.apply(e, arguments) : undefined;
    }), u = (t = (t || "").match(Be) || [""]).length; u--;) p = m = (s = pt.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = Te.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = Te.event.special[p] || {}, c = Te.extend({type: p, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && Te.expr.match.needsContext.test(r), namespace: h.join(".")}, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && false !== f.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), Te.event.global[p] = true);
  }, remove: function (e, t, n, i, r) {
    var o, a, s, l, u, c, f, d, p, h, m, g = ze.hasData(e) && ze.get(e);
    if (g && (l = g.events)) {
      for (u = (t = (t || "").match(Be) || [""]).length; u--;) if (p = m = (s = pt.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
        for (f = Te.event.special[p] || {}, d = l[p = (i ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
        a && !d.length && (f.teardown && false !== f.teardown.call(e, h, g.handle) || Te.removeEvent(e, p, g.handle), delete l[p]);
      } else for (p in l) Te.event.remove(e, p + t[u], n, i, true);
      Te.isEmptyObject(l) && ze.remove(e, "handle events");
    }
  }, dispatch: function (e) {
    var t, n, i, r, o, a, s = new Array(arguments.length), l = Te.event.fix(e), u = (ze.get(this, "events") || Object.create(null))[l.type] || [], c = Te.event.special[l.type] || {};
    for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
    if (l.delegateTarget = this, !c.preDispatch || false !== c.preDispatch.call(this, l)) {
      for (a = Te.event.handlers.call(this, l, u), t = 0; (r = a[t++]) && !l.isPropagationStopped();) for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && false !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, undefined !== (i = ((Te.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && false === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
      return c.postDispatch && c.postDispatch.call(this, l), l.result;
    }
  }, handlers: function (e, t) {
    var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
    if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || true !== u.disabled)) {
      for (o = [], a = {}, n = 0; n < l; n++) undefined === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? Te(r, this).index(u) > -1 : Te.find(r, this, null, [u]).length), a[r] && o.push(i);
      o.length && s.push({elem: u, handlers: o});
    }
    return u = this, l < t.length && s.push({elem: u, handlers: t.slice(l)}), s;
  }, addProp: function (e, t) {
    Object.defineProperty(Te.Event.prototype, e, {enumerable: true, configurable: true, get: "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? function () {
      if (this.originalEvent) return t(this.originalEvent);
    } : function () {
      if (this.originalEvent) return this.originalEvent[e];
    }, set: function (t) {
      Object.defineProperty(this, e, {enumerable: true, configurable: true, writable: true, value: t});
    }});
  }, fix: function (e) {
    return e[Te.expando] ? e : new Te.Event(e);
  }, special: {load: {noBubble: true}, click: {setup: function (e) {
    var t = this || e;
    return lt.test(t.type) && t.click && (t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase()) && k(t, "click", true), false;
  }, trigger: function (e) {
    var t = this || e;
    return lt.test(t.type) && t.click && (t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase()) && k(t, "click"), true;
  }, _default: function (e) {
    var t = e.target;
    return lt.test(t.type) && t.click && (t.nodeName && t.nodeName.toLowerCase() === "input".toLowerCase()) && ze.get(t, "click") || t.nodeName && t.nodeName.toLowerCase() === "a".toLowerCase();
  }}, beforeunload: {postDispatch: function (e) {
    undefined !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
  }}}}, Te.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, Te.Event = function (e, t) {
    if (!(this instanceof Te.Event)) return new Te.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || undefined === e.defaultPrevented && false === e.returnValue ? C : j, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Te.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Te.expando] = true;
  }, Te.Event.prototype = {constructor: Te.Event, isDefaultPrevented: j, isPropagationStopped: j, isImmediatePropagationStopped: j, isSimulated: false, preventDefault: function () {
    var e = this.originalEvent;
    this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault();
  }, stopPropagation: function () {
    var e = this.originalEvent;
    this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation();
  }, stopImmediatePropagation: function () {
    var e = this.originalEvent;
    this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
  }}, Te.each({altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, char: true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true}, Te.event.addProp), Te.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    function n(e) {
      if (_e.documentMode) {
        var n = ze.get(this, "handle"), i = Te.event.fix(e);
        i.type = "focusin" === e.type ? "focus" : "blur", i.isSimulated = true, n(e), i.target === i.currentTarget && n(i);
      } else Te.event.simulate(t, e.target, Te.event.fix(e));
    }
    Te.event.special[e] = {setup: function () {
      var i;
      if (k(this, e, true), !_e.documentMode) return false;
      (i = ze.get(this, t)) || this.addEventListener(t, n), ze.set(this, t, (i || 0) + 1);
    }, trigger: function () {
      return k(this, e), true;
    }, teardown: function () {
      var e;
      if (!_e.documentMode) return false;
      (e = ze.get(this, t) - 1) ? ze.set(this, t, e) : (this.removeEventListener(t, n), ze.remove(this, t));
    }, _default: function (t) {
      return ze.get(t.target, e);
    }, delegateType: t}, Te.event.special[t] = {setup: function () {
      var i = this.ownerDocument || this.document || this, r = _e.documentMode ? this : i, o = ze.get(r, t);
      o || (_e.documentMode ? this.addEventListener(t, n) : i.addEventListener(e, n, true)), ze.set(r, t, (o || 0) + 1);
    }, teardown: function () {
      var i = this.ownerDocument || this.document || this, r = _e.documentMode ? this : i, o = ze.get(r, t) - 1;
      o ? ze.set(r, t, o) : (_e.documentMode ? this.removeEventListener(t, n) : i.removeEventListener(e, n, true), ze.remove(r, t));
    }};
  }), Te.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (e, t) {
    Te.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
      var n, i = this, r = e.relatedTarget, o = e.handleObj;
      return r && (r === i || Te.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
    }};
  }), Te.fn.extend({on: function (e, t, n, i) {
    return S(this, e, t, n, i);
  }, one: function (e, t, n, i) {
    return S(this, e, t, n, i, 1);
  }, off: function (e, t, n) {
    var i, r;
    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Te(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
    if ("object" == typeof e) {
      for (r in e) this.off(r, t, e[r]);
      return this;
    }
    return false !== t && "function" != typeof t || (n = t, t = undefined), false === n && (n = j), this.each(function () {
      Te.event.remove(this, e, n, t);
    });
  }});
  var ht = /<script|<style|<link/i, mt = /checked\s*(?:[^=]|=\s*.checked.)/i, gt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  Te.extend({htmlPrefilter: function (e) {
    return e;
  }, clone: function (e, t, n) {
    var i, r, o, a, s = e.cloneNode(true), l = Te.contains(e.ownerDocument, e);
    if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Te.isXMLDoc(e))) for (a = x(s), i = 0, r = (o = x(e)).length; i < r; i++) L(o[i], a[i]);
    if (t) if (n) for (o = o || x(e), a = a || x(s), i = 0, r = o.length; i < r; i++) O(o[i], a[i]); else O(e, s);
    return (a = x(s, "script")).length > 0 && E(a, !l && x(e, "script")), s;
  }, cleanData: function (e) {
    for (var t, n, i, r = Te.event.special, o = 0; undefined !== (n = e[o]); o++) if (1 === n.nodeType || 9 === n.nodeType || !+n.nodeType) {
      if (t = n[ze.expando]) {
        if (t.events) for (i in t.events) r[i] ? Te.event.remove(n, i) : Te.removeEvent(n, i, t.handle);
        n[ze.expando] = undefined;
      }
      n[Ye.expando] && (n[Ye.expando] = undefined);
    }
  }}), Te.fn.extend({detach: function (e) {
    return q(this, e, true);
  }, remove: function (e) {
    return q(this, e);
  }, text: function (e) {
    return $e(this, function (e) {
      return undefined === e ? Te.text(this) : this.empty().each(function () {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
      });
    }, null, e, arguments.length);
  }, append: function () {
    return I(this, arguments, function (e) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.nodeName && this.nodeName.toLowerCase() === "table".toLowerCase() && ((11 !== e.nodeType ? e : e.firstChild).nodeName && (11 !== e.nodeType ? e : e.firstChild).nodeName.toLowerCase() === "tr".toLowerCase()) && Te(this).children("tbody")[0] || this).appendChild(e);
    });
  }, prepend: function () {
    return I(this, arguments, function (e) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t = this.nodeName && this.nodeName.toLowerCase() === "table".toLowerCase() && ((11 !== e.nodeType ? e : e.firstChild).nodeName && (11 !== e.nodeType ? e : e.firstChild).nodeName.toLowerCase() === "tr".toLowerCase()) && Te(this).children("tbody")[0] || this;
        t.insertBefore(e, t.firstChild);
      }
    });
  }, before: function () {
    return I(this, arguments, function (e) {
      this.parentNode && this.parentNode.insertBefore(e, this);
    });
  }, after: function () {
    return I(this, arguments, function (e) {
      this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
    });
  }, empty: function () {
    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Te.cleanData(x(e, false)), e.textContent = "");
    return this;
  }, clone: function (e, t) {
    return e = null != e && e, t = null == t ? e : t, this.map(function () {
      return Te.clone(this, e, t);
    });
  }, html: function (e) {
    return $e(this, function (e) {
      var t = this[0] || {}, n = 0, i = this.length;
      if (undefined === e && 1 === t.nodeType) return t.innerHTML;
      if ("string" == typeof e && !ht.test(e) && !ft[(ut.exec(e) || ["", ""])[1].toLowerCase()]) {
        e = Te.htmlPrefilter(e);
        try {
          for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (Te.cleanData(x(t, false)), t.innerHTML = e);
          t = 0;
        } catch (e) {}
      }
      t && this.empty().append(e);
    }, null, e, arguments.length);
  }, replaceWith: function () {
    var e = [];
    return I(this, arguments, function (t) {
      var n = this.parentNode;
      Te.inArray(this, e) < 0 && (Te.cleanData(x(this)), n && n.replaceChild(t, this));
    }, e);
  }}), Te.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
    Te.fn[e] = function (e) {
      for (var n, i = [], r = Te(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(true), Te(r[a])[t](n), ce.apply(i, n.get());
      return this.pushStack(i);
    };
  });
  var vt = new RegExp("^(" + Je + ")(?!px)[a-z%]+$", "i"), yt = /^--/, bt = function (t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  }, _t = function (e, t, n) {
    var i, r, o = {};
    for (r in t) o[r] = e.style[r], e.style[r] = t[r];
    for (r in i = n.call(e), t) e.style[r] = o[r];
    return i;
  }, wt = new RegExp(et.join("|"), "i");
  !function () {
    function t() {
      if (c) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", tt.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, l = 12 === Math.round(parseFloat(t.marginLeft)), c.style.right = "60%", a = 36 === Math.round(parseFloat(t.right)), r = 36 === Math.round(parseFloat(t.width)), c.style.position = "absolute", o = 12 === Math.round(parseFloat(c.offsetWidth / 3)), tt.removeChild(u), c = null;
      }
    }
    var i, r, o, a, s, l, u = _e.createElement("div"), c = _e.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(true).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === c.style.backgroundClip, Te.extend(ve, {boxSizingReliable: function () {
      return t(), r;
    }, pixelBoxStyles: function () {
      return t(), a;
    }, pixelPosition: function () {
      return t(), i;
    }, reliableMarginLeft: function () {
      return t(), l;
    }, scrollboxSize: function () {
      return t(), o;
    }, reliableTrDimensions: function () {
      var t, n, i, r;
      return null == s && (t = _e.createElement("table"), n = _e.createElement("tr"), i = _e.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", tt.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), s = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, tt.removeChild(t)), s;
    }}));
  }();
  var xt = ["Webkit", "Moz", "ms"], Et = _e.createElement("div").style, Tt = {}, Ct = /^(none|table(?!-c[ea]).+)/, jt = {position: "absolute", visibility: "hidden", display: "block"}, St = {letterSpacing: "0", fontWeight: "400"};
  Te.extend({cssHooks: {opacity: {get: function (e, t) {
    if (t) {
      var n = P(e, "opacity");
      return "" === n ? "1" : n;
    }
  }}}, cssNumber: {animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true}, cssProps: {}, style: function (e, t, n, i) {
    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
      var r, o, a, s = t.replace(Qe, "ms-").replace(Ve, h), l = yt.test(t), u = e.style;
      if (l || (t = F(s)), a = Te.cssHooks[t] || Te.cssHooks[s], undefined === n) return a && "get" in a && undefined !== (r = a.get(e, false, i)) ? r : u[t];
      "string" === (o = typeof n) && (r = Ze.exec(n)) && r[1] && (n = b(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (Te.cssNumber[s] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && undefined === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
    }
  }, css: function (e, t, n, i) {
    var r, o, a, s = t.replace(Qe, "ms-").replace(Ve, h);
    return yt.test(t) || (t = F(s)), (a = Te.cssHooks[t] || Te.cssHooks[s]) && "get" in a && (r = a.get(e, true, n)), undefined === r && (r = P(e, t, i)), "normal" === r && t in St && (r = St[t]), "" === n || n ? (o = parseFloat(r), true === n || isFinite(o) ? o || 0 : r) : r;
  }}), Te.each(["height", "width"], function (e, t) {
    Te.cssHooks[t] = {get: function (e, n, i) {
      if (n) return !Ct.test(Te.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? W(e, t, i) : _t(e, jt, function () {
        return W(e, t, i);
      });
    }, set: function (e, n, i) {
      var r, o = bt(e), a = !ve.scrollboxSize() && "absolute" === o.position, s = (a || i) && "border-box" === Te.css(e, "boxSizing", false, o), l = i ? B(e, t, i, s, o) : 0;
      return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - B(e, t, "border", false, o) - 0.5)), l && (r = Ze.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = Te.css(e, t)), M(e, n, l);
    }};
  }), Te.cssHooks.marginLeft = H(ve.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - _t(e, {marginLeft: 0}, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), Te.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    Te.cssHooks[e + t] = {expand: function (n) {
      for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + et[i] + t] = o[i] || o[i - 2] || o[0];
      return r;
    }}, "margin" !== e && (Te.cssHooks[e + t].set = M);
  }), Te.fn.extend({css: function (e, t) {
    return $e(this, function (e, t, n) {
      var i, r, o = {}, a = 0;
      if (Array.isArray(t)) {
        for (i = bt(e), r = t.length; a < r; a++) o[t[a]] = Te.css(e, t[a], false, i);
        return o;
      }
      return undefined !== n ? Te.style(e, t, n) : Te.css(e, t);
    }, e, t, arguments.length > 1);
  }}), Te.Tween = U, U.prototype = {constructor: U, init: function (e, t, n, i, r, o) {
    this.elem = e, this.prop = n, this.easing = r || Te.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Te.cssNumber[n] ? "" : "px");
  }, cur: function () {
    var e = U.propHooks[this.prop];
    return e && e.get ? e.get(this) : U.propHooks._default.get(this);
  }, run: function (e) {
    var t, n = U.propHooks[this.prop];
    return this.options.duration ? this.pos = t = Te.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : U.propHooks._default.set(this), this;
  }}, U.prototype.init.prototype = U.prototype, U.propHooks = {_default: {get: function (e) {
    var t;
    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Te.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
  }, set: function (e) {
    Te.fx.step[e.prop] ? Te.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Te.cssHooks[e.prop] && null == e.elem.style[F(e.prop)] ? e.elem[e.prop] = e.now : Te.style(e.elem, e.prop, e.now + e.unit);
  }}}, U.propHooks.scrollTop = U.propHooks.scrollLeft = {set: function (e) {
    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
  }}, Te.easing = {linear: function (e) {
    return e;
  }, swing: function (e) {
    return 0.5 - Math.cos(e * Math.PI) / 2;
  }, _default: "swing"}, Te.fx = U.prototype.init, Te.fx.step = {};
  var kt, Dt, At = /^(?:toggle|show|hide)$/, Nt = /queueHooks$/;
  Te.Animation = Te.extend(K, {tweeners: {"*": [function (e, t) {
    var n = this.createTween(e, t);
    return b(n.elem, e, Ze.exec(t), n), n;
  }]}, tweener: function (e, t) {
    "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? (t = e, e = ["*"]) : e = e.match(Be);
    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(t);
  }, prefilters: [z], prefilter: function (e, t) {
    t ? K.prefilters.unshift(e) : K.prefilters.push(e);
  }}), Te.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? Te.extend({}, e) : {complete: n || !n && t || "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item && e, duration: e, easing: n && t || t && !("function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item) && t};
    return Te.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Te.fx.speeds ? i.duration = Te.fx.speeds[i.duration] : i.duration = Te.fx.speeds._default), null != i.queue && true !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      "function" == typeof i.old && "number" != typeof i.old.nodeType && "function" != typeof i.old.item && i.old.call(this), i.queue && Te.dequeue(this, i.queue);
    }, i;
  }, Te.fn.extend({fadeTo: function (e, t, n, i) {
    return this.filter(rt).css("opacity", 0).show().end().animate({opacity: t}, e, n, i);
  }, animate: function (e, t, n, i) {
    var r = Te.isEmptyObject(e), o = Te.speed(t, n, i), a = function () {
      var t = K(this, Te.extend({}, e), o);
      (r || ze.get(this, "finish")) && t.stop(true);
    };
    return a.finish = a, r || false === o.queue ? this.each(a) : this.queue(o.queue, a);
  }, stop: function (e, t, n) {
    var i = function (e) {
      var t = e.stop;
      delete e.stop, t(n);
    };
    return "string" != typeof e && (n = t, t = e, e = undefined), t && this.queue(e || "fx", []), this.each(function () {
      var t = true, r = null != e && e + "queueHooks", o = Te.timers, a = ze.get(this);
      if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && Nt.test(r) && i(a[r]);
      for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = false, o.splice(r, 1));
      !t && n || Te.dequeue(this, e);
    });
  }, finish: function (e) {
    return false !== e && (e = e || "fx"), this.each(function () {
      var t, n = ze.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = Te.timers, a = i ? i.length : 0;
      for (n.finish = true, Te.queue(this, e, []), r && r.stop && r.stop.call(this, true), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(true), o.splice(t, 1));
      for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
      delete n.finish;
    });
  }}), Te.each(["toggle", "show", "hide"], function (e, t) {
    var n = Te.fn[t];
    Te.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, true), e, i, r);
    };
  }), Te.each({slideDown: V("show"), slideUp: V("hide"), slideToggle: V("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
    Te.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), Te.timers = [], Te.fx.tick = function () {
    var e, t = 0, n = Te.timers;
    for (kt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || Te.fx.stop(), kt = undefined;
  }, Te.fx.timer = function (e) {
    Te.timers.push(e), Te.fx.start();
  }, Te.fx.interval = 13, Te.fx.start = function () {
    Dt || (Dt = true, $());
  }, Te.fx.stop = function () {
    Dt = null;
  }, Te.fx.speeds = {slow: 600, fast: 200, _default: 400}, Te.fn.delay = function (t, n) {
    return t = Te.fx && Te.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);
      i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = _e.createElement("input"), t = _e.createElement("select").appendChild(_e.createElement("option"));
    e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = t.selected, (e = _e.createElement("input")).value = "t", e.type = "radio", ve.radioValue = "t" === e.value;
  }();
  var Ot, Lt = Te.expr.attrHandle;
  Te.fn.extend({attr: function (e, t) {
    return $e(this, Te.attr, e, t, arguments.length > 1);
  }, removeAttr: function (e) {
    return this.each(function () {
      Te.removeAttr(this, e);
    });
  }}), Te.extend({attr: function (e, t, n) {
    var i, r, o = e.nodeType;
    if (3 !== o && 8 !== o && 2 !== o) return undefined === e.getAttribute ? Te.prop(e, t, n) : (1 === o && Te.isXMLDoc(e) || (r = Te.attrHooks[t.toLowerCase()] || (Te.expr.match.bool.test(t) ? Ot : undefined)), undefined !== n ? null === n ? void Te.removeAttr(e, t) : r && "set" in r && undefined !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = Te.find.attr(e, t)) ? undefined : i);
  }, attrHooks: {type: {set: function (e, t) {
    if (!ve.radioValue && "radio" === t && (e.nodeName && e.nodeName.toLowerCase() === "input".toLowerCase())) {
      var n = e.value;
      return e.setAttribute("type", t), n && (e.value = n), t;
    }
  }}}, removeAttr: function (e, t) {
    var n, i = 0, r = t && t.match(Be);
    if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n);
  }}), Ot = {set: function (e, t, n) {
    return false === t ? Te.removeAttr(e, n) : e.setAttribute(n, n), n;
  }}, Te.each(Te.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = Lt[t] || Te.find.attr;
    Lt[t] = function (e, t, i) {
      var r, o, a = t.toLowerCase();
      return i || (o = Lt[a], Lt[a] = r, r = null != n(e, t, i) ? a : null, Lt[a] = o), r;
    };
  });
  var It = /^(?:input|select|textarea|button)$/i, qt = /^(?:a|area)$/i;
  Te.fn.extend({prop: function (e, t) {
    return $e(this, Te.prop, e, t, arguments.length > 1);
  }, removeProp: function (e) {
    return this.each(function () {
      delete this[Te.propFix[e] || e];
    });
  }}), Te.extend({prop: function (e, t, n) {
    var i, r, o = e.nodeType;
    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Te.isXMLDoc(e) || (t = Te.propFix[t] || t, r = Te.propHooks[t]), undefined !== n ? r && "set" in r && undefined !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
  }, propHooks: {tabIndex: {get: function (e) {
    var t = Te.find.attr(e, "tabindex");
    return t ? parseInt(t, 10) : It.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1;
  }}}, propFix: {for: "htmlFor", class: "className"}}), ve.optSelected || (Te.propHooks.selected = {get: function (e) {
    var t = e.parentNode;
    return t && t.parentNode && t.parentNode.selectedIndex, null;
  }, set: function (e) {
    var t = e.parentNode;
    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
  }}), Te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    Te.propFix[this.toLowerCase()] = this;
  }), Te.fn.extend({addClass: function (e) {
    var t, n, i, r, o, a;
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? this.each(function (t) {
      Te(this).addClass(e.call(this, t, this.getAttribute && this.getAttribute("class") || ""));
    }) : (t = Z(e)).length ? this.each(function () {
      if (i = this.getAttribute && this.getAttribute("class") || "", n = 1 === this.nodeType && " " + (i.match(Be) || []).join(" ") + " ") {
        for (o = 0; o < t.length; o++) r = t[o], n.indexOf(" " + r + " ") < 0 && (n += r + " ");
        a = (n.match(Be) || []).join(" "), i !== a && this.setAttribute("class", a);
      }
    }) : this;
  }, removeClass: function (e) {
    var t, n, i, r, o, a;
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? this.each(function (t) {
      Te(this).removeClass(e.call(this, t, this.getAttribute && this.getAttribute("class") || ""));
    }) : arguments.length ? (t = Z(e)).length ? this.each(function () {
      if (i = this.getAttribute && this.getAttribute("class") || "", n = 1 === this.nodeType && " " + (i.match(Be) || []).join(" ") + " ") {
        for (o = 0; o < t.length; o++) for (r = t[o]; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
        a = (n.match(Be) || []).join(" "), i !== a && this.setAttribute("class", a);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function (e, t) {
    var n, i, r, o, a = typeof e, s = "string" === a || Array.isArray(e);
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? this.each(function (n) {
      Te(this).toggleClass(e.call(this, n, this.getAttribute && this.getAttribute("class") || "", t), t);
    }) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = Z(e), this.each(function () {
      if (s) for (o = Te(this), r = 0; r < n.length; r++) i = n[r], o.hasClass(i) ? o.removeClass(i) : o.addClass(i); else undefined !== e && "boolean" !== a || ((i = this.getAttribute && this.getAttribute("class") || "") && ze.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || false === e ? "" : ze.get(this, "__className__") || ""));
    }));
  }, hasClass: function (e) {
    var t, n, i = 0;
    for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + ((n.getAttribute && n.getAttribute("class") || "").match(Be) || []).join(" ") + " ").indexOf(t) > -1) return true;
    return false;
  }});
  var Pt = /\r/g;
  Te.fn.extend({val: function (e) {
    var t, n, i, r = this[0];
    return arguments.length ? (i = "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item, this.each(function (n) {
      var r;
      1 === this.nodeType && (null == (r = i ? e.call(this, n, Te(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = Te.map(r, function (e) {
        return null == e ? "" : e + "";
      })), (t = Te.valHooks[this.type] || Te.valHooks[this.nodeName.toLowerCase()]) && "set" in t && undefined !== t.set(this, r, "value") || (this.value = r));
    })) : r ? (t = Te.valHooks[r.type] || Te.valHooks[r.nodeName.toLowerCase()]) && "get" in t && undefined !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(Pt, "") : null == n ? "" : n : undefined;
  }}), Te.extend({valHooks: {option: {get: function (e) {
    var t = Te.find.attr(e, "value");
    return null != t ? t : (Te.text(e).match(Be) || []).join(" ");
  }}, select: {get: function (e) {
    var t, n, i, r = e.options, a = e.selectedIndex, s = "select-one" === e.type, l = s ? null : [], u = s ? a + 1 : r.length;
    for (i = a < 0 ? u : s ? a : 0; i < u; i++) if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !(n.parentNode.nodeName && n.parentNode.nodeName.toLowerCase() === "optgroup".toLowerCase()))) {
      if (t = Te(n).val(), s) return t;
      l.push(t);
    }
    return l;
  }, set: function (e, t) {
    for (var n, i, r = e.options, o = Te.makeArray(t), a = r.length; a--;) ((i = r[a]).selected = Te.inArray(Te.valHooks.option.get(i), o) > -1) && (n = true);
    return n || (e.selectedIndex = -1), o;
  }}}}), Te.each(["radio", "checkbox"], function () {
    Te.valHooks[this] = {set: function (e, t) {
      if (Array.isArray(t)) return e.checked = Te.inArray(Te(e).val(), t) > -1;
    }}, ve.checkOn || (Te.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Ht = e.location, Rt = {guid: Date.now()}, Ft = /\?/;
  Te.parseXML = function (t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml");
    } catch (e) {}
    return i = n && n.getElementsByTagName("parsererror")[0], n && !i || Te.error("Invalid XML: " + (i ? Te.map(i.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : t)), n;
  };
  var Mt = /^(?:focusinfocus|focusoutblur)$/, Bt = function (e) {
    e.stopPropagation();
  };
  Te.extend(Te.event, {trigger: function (t, n, i, r) {
    var o, a, s, l, u, c, f, d, p = [i || _e], h = he.call(t, "type") ? t.type : t, m = he.call(t, "namespace") ? t.namespace.split(".") : [];
    if (a = d = s = i = i || _e, 3 !== i.nodeType && 8 !== i.nodeType && !Mt.test(h + Te.event.triggered) && (h.indexOf(".") > -1 && (m = h.split("."), h = m.shift(), m.sort()), u = h.indexOf(":") < 0 && "on" + h, (t = t[Te.expando] ? t : new Te.Event(h, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : Te.makeArray(n, [t]), f = Te.event.special[h] || {}, r || !f.trigger || false !== f.trigger.apply(i, n))) {
      if (!r && !f.noBubble && !(null != i && i === i.window)) {
        for (l = f.delegateType || h, Mt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
        s === (i.ownerDocument || _e) && p.push(s.defaultView || s.parentWindow || e);
      }
      for (o = 0; (a = p[o++]) && !t.isPropagationStopped();) d = a, t.type = o > 1 ? l : f.bindType || h, (c = (ze.get(a, "events") || Object.create(null))[t.type] && ze.get(a, "handle")) && c.apply(a, n), (c = u && a[u]) && c.apply && (1 === a.nodeType || 9 === a.nodeType || !+a.nodeType) && (t.result = c.apply(a, n), false === t.result && t.preventDefault());
      return t.type = h, r || t.isDefaultPrevented() || f._default && false !== f._default.apply(p.pop(), n) || !(1 === i.nodeType || 9 === i.nodeType || !+i.nodeType) || u && ("function" == typeof i[h] && "number" != typeof i[h].nodeType && "function" != typeof i[h].item) && !(null != i && i === i.window) && ((s = i[u]) && (i[u] = null), Te.event.triggered = h, t.isPropagationStopped() && d.addEventListener(h, Bt), i[h](), t.isPropagationStopped() && d.removeEventListener(h, Bt), Te.event.triggered = undefined, s && (i[u] = s)), t.result;
    }
  }, simulate: function (e, t, n) {
    var i = Te.extend(new Te.Event, n, {type: e, isSimulated: true});
    Te.event.trigger(i, null, t);
  }}), Te.fn.extend({trigger: function (e, t) {
    return this.each(function () {
      Te.event.trigger(e, t, this);
    });
  }, triggerHandler: function (e, t) {
    var n = this[0];
    if (n) return Te.event.trigger(e, t, n, true);
  }});
  var Wt = /\[\]$/, Ut = /\r?\n/g, $t = /^(?:submit|button|image|reset|file)$/i, Qt = /^(?:input|select|textarea|keygen)/i;
  Te.param = function (e, t) {
    var n, i = [], r = function (e, t) {
      var n = "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? t() : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !Te.isPlainObject(e)) Te.each(e, function () {
      r(this.name, this.value);
    }); else for (n in e) ee(n, e[n], t, r);
    return i.join("&");
  }, Te.fn.extend({serialize: function () {
    return Te.param(this.serializeArray());
  }, serializeArray: function () {
    return this.map(function () {
      var e = Te.prop(this, "elements");
      return e ? Te.makeArray(e) : this;
    }).filter(function () {
      var e = this.type;
      return this.name && !Te(this).is(":disabled") && Qt.test(this.nodeName) && !$t.test(e) && (this.checked || !lt.test(e));
    }).map(function (e, t) {
      var n = Te(this).val();
      return null == n ? null : Array.isArray(n) ? Te.map(n, function (e) {
        return {name: t.name, value: e.replace(Ut, "\r\n")};
      }) : {name: t.name, value: n.replace(Ut, "\r\n")};
    }).get();
  }});
  var Vt = /%20/g, Xt = /#.*$/, zt = /([?&])_=[^&]*/, Yt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gt = /^(?:GET|HEAD)$/, Jt = /^\/\//, Zt = {}, en = {}, tn = "*/".concat("*"), nn = _e.createElement("a");
  nn.href = Ht.href, Te.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Ht.href, type: "GET", isLocal: Kt.test(Ht.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": tn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": true, "text json": JSON.parse, "text xml": Te.parseXML}, flatOptions: {url: true, context: true}}, ajaxSetup: function (e, t) {
    return t ? ie(ie(e, Te.ajaxSettings), t) : ie(Te.ajaxSettings, e);
  }, ajaxPrefilter: te(Zt), ajaxTransport: te(en), ajax: function (t, n) {
    function i(t, n, i, s) {
      var u, d, p, _, w, x = n;
      c || (c = true, l && e.clearTimeout(l), r = undefined, a = s || "", E.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (_ = re(h, E, i)), !u && Te.inArray("script", h.dataTypes) > -1 && Te.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), _ = oe(h, _, E, u), u ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (Te.lastModified[o] = w), (w = E.getResponseHeader("etag")) && (Te.etag[o] = w)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, d = _.data, u = !(p = _.error))) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || x) + "", u ? v.resolveWith(m, [d, x, E]) : v.rejectWith(m, [E, x, p]), E.statusCode(b), b = undefined, f && g.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? d : p]), y.fireWith(m, [E, x]), f && (g.trigger("ajaxComplete", [E, h]), --Te.active || Te.event.trigger("ajaxStop")));
    }
    "object" == typeof t && (n = t, t = undefined), n = n || {};
    var r, o, a, s, l, u, c, f, d, p, h = Te.ajaxSetup({}, n), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? Te(m) : Te.event, v = Te.Deferred(), y = Te.Callbacks("once memory"), b = h.statusCode || {}, _ = {}, w = {}, x = "canceled", E = {readyState: 0, getResponseHeader: function (e) {
      var t;
      if (c) {
        if (!s) for (s = {}; t = Yt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
        t = s[e.toLowerCase() + " "];
      }
      return null == t ? null : t.join(", ");
    }, getAllResponseHeaders: function () {
      return c ? a : null;
    }, setRequestHeader: function (e, t) {
      return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this;
    }, overrideMimeType: function (e) {
      return null == c && (h.mimeType = e), this;
    }, statusCode: function (e) {
      var t;
      if (e) if (c) E.always(e[E.status]); else for (t in e) b[t] = [b[t], e[t]];
      return this;
    }, abort: function (e) {
      var t = e || x;
      return r && r.abort(t), i(0, t), this;
    }};
    if (v.promise(E), h.url = ((t || h.url || Ht.href) + "").replace(Jt, Ht.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Be) || [""], null == h.crossDomain) {
      u = _e.createElement("a");
      try {
        u.href = h.url, u.href = u.href, h.crossDomain = nn.protocol + "//" + nn.host != u.protocol + "//" + u.host;
      } catch (e) {
        h.crossDomain = true;
      }
    }
    if (h.data && h.processData && "string" != typeof h.data && (h.data = Te.param(h.data, h.traditional)), ne(Zt, h, n, E), c) return E;
    for (d in (f = Te.event && h.global) && 0 == Te.active++ && Te.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Gt.test(h.type), o = h.url.replace(Xt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Vt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ft.test(o) ? "&" : "?") + h.data, delete h.data), false === h.cache && (o = o.replace(zt, "$1"), p = (Ft.test(o) ? "&" : "?") + "_=" + Rt.guid++ + p), h.url = o + p), h.ifModified && (Te.lastModified[o] && E.setRequestHeader("If-Modified-Since", Te.lastModified[o]), Te.etag[o] && E.setRequestHeader("If-None-Match", Te.etag[o])), (h.data && h.hasContent && false !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(d, h.headers[d]);
    if (h.beforeSend && (false === h.beforeSend.call(m, E, h) || c)) return E.abort();
    if (x = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), r = ne(en, h, n, E)) {
      if (E.readyState = 1, f && g.trigger("ajaxSend", [E, h]), c) return E;
      h.async && h.timeout > 0 && (l = e.setTimeout(function () {
        E.abort("timeout");
      }, h.timeout));
      try {
        c = false, r.send(_, i);
      } catch (e) {
        if (c) throw e;
        i(-1, e);
      }
    } else i(-1, "No Transport");
    return E;
  }, getJSON: function (e, t, n) {
    return Te.get(e, t, n, "json");
  }, getScript: function (e, t) {
    return Te.get(e, undefined, t, "script");
  }}), Te.each(["get", "post"], function (e, t) {
    Te[t] = function (e, n, i, r) {
      return "function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item && (r = r || i, i = n, n = undefined), Te.ajax(Te.extend({url: e, type: t, dataType: r, data: n, success: i}, Te.isPlainObject(e) && e));
    };
  }), Te.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), Te._evalUrl = function (e, t, n) {
    return Te.ajax({url: e, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: {"text script": function () {}}, dataFilter: function (e) {
      Te.globalEval(e, t, n);
    }});
  }, Te.fn.extend({wrapAll: function (e) {
    var t;
    return this[0] && ("function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item && (e = e.call(this[0])), t = Te(e, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
      for (var e = this; e.firstElementChild;) e = e.firstElementChild;
      return e;
    }).append(this)), this;
  }, wrapInner: function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item ? this.each(function (t) {
      Te(this).wrapInner(e.call(this, t));
    }) : this.each(function () {
      var t = Te(this), n = t.contents();
      n.length ? n.wrapAll(e) : t.append(e);
    });
  }, wrap: function (e) {
    var t = "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    return this.each(function (n) {
      Te(this).wrapAll(t ? e.call(this, n) : e);
    });
  }, unwrap: function (e) {
    return this.parent(e).not("body").each(function () {
      Te(this).replaceWith(this.childNodes);
    }), this;
  }}), Te.expr.pseudos.hidden = function (e) {
    return !Te.expr.pseudos.visible(e);
  }, Te.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, Te.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest;
    } catch (e) {}
  };
  var rn = {0: 200, 1223: 204}, on = Te.ajaxSettings.xhr();
  ve.cors = !!on && "withCredentials" in on, ve.ajax = on = !!on, Te.ajaxTransport(function (t) {
    var n, i;
    if (ve.cors || on && !t.crossDomain) return {send: function (r, o) {
      var a, s = t.xhr();
      if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
      for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
      n = function (e) {
        return function () {
          n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? 0..nodeName && 0..nodeName.toLowerCase() === "error".toLowerCase() : s.status.nodeName && s.status.nodeName.toLowerCase() === s.statusText.toLowerCase() : (rn[s.status] || s.status).nodeName && (rn[s.status] || s.status).nodeName.toLowerCase() === s.statusText.toLowerCase());
        };
      }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), undefined !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
        4 === s.readyState && e.setTimeout(function () {
          n && i();
        });
      }, n = n("abort");
      try {
        s.send(t.hasContent && t.data || null);
      } catch (e) {
        if (n) throw e;
      }
    }, abort: function () {
      n && n();
    }};
  }), Te.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = false);
  }), Te.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {"text script": function (e) {
    return Te.globalEval(e), e;
  }}}), Te.ajaxPrefilter("script", function (e) {
    undefined === e.cache && (e.cache = false), e.crossDomain && (e.type = "GET");
  }), Te.ajaxTransport("script", function (e) {
    var t, n;
    if (e.crossDomain || e.scriptAttrs) return {send: function (i, r) {
      t = Te("<script>").attr(e.scriptAttrs || {}).prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type);
      }), _e.head.appendChild(t[0]);
    }, abort: function () {
      n && n();
    }};
  });
  var an, sn = [], ln = /(=)\?(?=&|$)|\?\?/;
  Te.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
    var e = sn.pop() || Te.expando + "_" + Rt.guid++;
    return this[e] = true, e;
  }}), Te.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r, o, a, s = false !== t.jsonp && (ln.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ln.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = "function" == typeof t.jsonpCallback && "number" != typeof t.jsonpCallback.nodeType && "function" != typeof t.jsonpCallback.item ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ln, "$1" + r) : false !== t.jsonp && (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return a || Te.error(r + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      a = arguments;
    }, i.always(function () {
      undefined === o ? Te(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, sn.push(r)), a && ("function" == typeof o && "number" != typeof o.nodeType && "function" != typeof o.item) && (a[0].nodeName && a[0].nodeName.toLowerCase() === t.toLowerCase()), a = o = undefined;
    }), "script";
  }), ve.createHTMLDocument = ((an = _e.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === an.childNodes.length), Te.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = false), t || (ve.createHTMLDocument ? ((i = (t = _e.implementation.createHTMLDocument("")).createElement("base")).href = _e.location.href, t.head.appendChild(i)) : t = _e), o = !n && [], (r = Pe.exec(e)) ? [t.createElement(r[1])] : (r = T([e], t, o), o && o.length && Te(o).remove(), Te.merge([], r.childNodes)));
    var i, r, o;
  }, Te.fn.load = function (e, t, n) {
    var i, r, o, a = this, s = e.indexOf(" ");
    return s > -1 && (i = (e.slice(s).match(Be) || []).join(" "), e = e.slice(0, s)), "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), a.length > 0 && Te.ajax({url: e, type: r || "GET", dataType: "html", data: t}).done(function (e) {
      o = arguments, a.html(i ? Te("<div>").append(Te.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, Te.expr.pseudos.animated = function (e) {
    return Te.grep(Te.timers, function (t) {
      return e === t.elem;
    }).length;
  }, Te.offset = {setOffset: function (e, t, n) {
    var i, r, o, a, s, l, u = Te.css(e, "position"), c = Te(e), f = {};
    "static" === u && (e.style.position = "relative"), s = c.offset(), o = Te.css(e, "top"), l = Te.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item && (t = t.call(e, n, Te.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : c.css(f);
  }}, Te.fn.extend({offset: function (e) {
    if (arguments.length) return undefined === e ? this : this.each(function (t) {
      Te.offset.setOffset(this, e, t);
    });
    var t, n, i = this[0];
    return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {top: t.top + n.pageYOffset, left: t.left + n.pageXOffset}) : {top: 0, left: 0} : undefined;
  }, position: function () {
    if (this[0]) {
      var e, t, n, i = this[0], r = {top: 0, left: 0};
      if ("fixed" === Te.css(i, "position")) t = i.getBoundingClientRect(); else {
        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Te.css(e, "position");) e = e.parentNode;
        e && e !== i && 1 === e.nodeType && ((r = Te(e).offset()).top += Te.css(e, "borderTopWidth", true), r.left += Te.css(e, "borderLeftWidth", true));
      }
      return {top: t.top - r.top - Te.css(i, "marginTop", true), left: t.left - r.left - Te.css(i, "marginLeft", true)};
    }
  }, offsetParent: function () {
    return this.map(function () {
      for (var e = this.offsetParent; e && "static" === Te.css(e, "position");) e = e.offsetParent;
      return e || tt;
    });
  }}), Te.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
    var n = "pageYOffset" === t;
    Te.fn[e] = function (i) {
      return $e(this, function (e, i, r) {
        var o;
        if (null != e && e === e.window ? o = e : 9 === e.nodeType && (o = e.defaultView), undefined === r) return o ? o[t] : e[i];
        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
      }, e, i, arguments.length);
    };
  }), Te.each(["top", "left"], function (e, t) {
    Te.cssHooks[t] = H(ve.pixelPosition, function (e, n) {
      if (n) return n = P(e, t), vt.test(n) ? Te(e).position()[t] + "px" : n;
    });
  }), Te.each({Height: "height", Width: "width"}, function (e, t) {
    Te.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
      Te.fn[i] = function (r, o) {
        var a = arguments.length && (n || "boolean" != typeof r), s = n || (true === r || true === o ? "margin" : "border");
        return $e(this, function (t, n, r) {
          var o;
          return null != t && t === t.window ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : undefined === r ? Te.css(t, n, s) : Te.style(t, n, r, s);
        }, t, a ? r : undefined, a);
      };
    });
  }), Te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    Te.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), Te.fn.extend({bind: function (e, t, n) {
    return this.on(e, null, t, n);
  }, unbind: function (e, t) {
    return this.off(e, null, t);
  }, delegate: function (e, t, n, i) {
    return this.on(t, e, n, i);
  }, undelegate: function (e, t, n) {
    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
  }, hover: function (e, t) {
    return this.mouseenter(e).mouseleave(t || e);
  }}), Te.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    Te.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  });
  var un = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  Te.proxy = function (e, t) {
    var n, i, r;
    if ("string" == typeof t && (n = e[t], t = e, e = n), "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item) return i = le.call(arguments, 2), r = function () {
      return e.apply(t || this, i.concat(le.call(arguments)));
    }, r.guid = e.guid = e.guid || Te.guid++, r;
  }, Te.holdReady = function (e) {
    e ? Te.readyWait++ : Te.ready(true);
  }, Te.isArray = Array.isArray, Te.parseJSON = JSON.parse, Te.nodeName = o, Te.isFunction = ye, Te.isWindow = be, Te.camelCase = m, Te.type = i, Te.now = Date.now, Te.isNumeric = function (e) {
    var t = Te.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, Te.trim = function (e) {
    return null == e ? "" : (e + "").replace(un, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return Te;
  });
  var cn = e.jQuery, fn = e.$;
  return Te.noConflict = function (t) {
    return e.$ === Te && (e.$ = fn), t && e.jQuery === Te && (e.jQuery = cn), Te;
  }, undefined === t && (e.jQuery = e.$ = Te), Te;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Rails = t();
}(this, function () {
  "use strict";
  const e = "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]", t = {selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])", exclude: "form button"}, n = "select[data-remote], input[data-remote], textarea[data-remote]", i = "form:not([data-turbo=true])", r = "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])", o = "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", a = "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", s = "input[name][type=file]:not([disabled])", l = "a[data-disable-with], a[data-disable]", u = "button[data-remote][data-disable-with], button[data-remote][data-disable]";
  let c = null;
  const f = () => {
    const e = document.querySelector("meta[name=csp-nonce]");
    return c = e && e.content;
  }, d = () => c || f(), p = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, h = function (e, t) {
    return t.exclude ? p.call(e, t.selector) && !p.call(e, t.exclude) : p.call(e, t);
  }, m = "_ujsData", g = (e, t) => e[m] ? e[m][t] : undefined, y = e => Array.prototype.slice.call(document.querySelectorAll(e)), b = function (e) {
    var t = false;
    do {
      if (e.isContentEditable) {
        t = true;
        break;
      }
      e = e.parentElement;
    } while (e);
    return t;
  }, _ = () => {
    const e = document.querySelector("meta[name=csrf-token]");
    return e && e.content;
  }, w = () => {
    const e = document.querySelector("meta[name=csrf-param]");
    return e && e.content;
  }, x = e => {
    const t = _();
    if (t) return e.setRequestHeader("X-CSRF-Token", t);
  }, E = () => {
    const e = _(), t = w();
    if (e && t) return y('form input[name="' + t + '"]').forEach(t => t.value = e);
  }, T = {"*": "*/*", text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript", script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, C = e => {
    e = (e.url = e.url || location.href, e.type = e.type.toUpperCase(), "GET" === e.type && e.data && (e.url.indexOf("?") < 0 ? e.url += "?" + e.data : e.url += "&" + e.data), e.dataType in T || (e.dataType = "*"), e.accept = T[e.dataType], "*" !== e.dataType && (e.accept += ", */*; q=0.01"), e);
    var t = S(e, function () {
      const n = k(null != t.response ? t.response : t.responseText, t.getResponseHeader("Content-Type"));
      return 2 === Math.floor(t.status / 100) ? "function" == typeof e.success && e.success(n, t.statusText, t) : "function" == typeof e.error && e.error(n, t.statusText, t), "function" == typeof e.complete ? e.complete(t, t.statusText) : undefined;
    });
    return !(e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : undefined);
  };
  var S = function (e, t) {
    const n = new XMLHttpRequest;
    return n.open(e.type, e.url, true), n.setRequestHeader("Accept", e.accept), "string" == typeof e.data && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.crossDomain || (n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), x(n)), n.withCredentials = !!e.withCredentials, n.onreadystatechange = function () {
      if (n.readyState === XMLHttpRequest.DONE) return t(n);
    }, n;
  }, k = function (e, t) {
    if ("string" == typeof e && "string" == typeof t) if (t.match(/\bjson\b/)) try {
      e = JSON.parse(e);
    } catch (e) {} else if (t.match(/\b(?:java|ecma)script\b/)) {
      const t = document.createElement("script");
      t.setAttribute("nonce", d()), t.text = e, document.head.appendChild(t).parentNode.removeChild(t);
    } else if (t.match(/\b(xml|html|svg)\b/)) {
      const n = new DOMParser;
      t = t.replace(/;.+/, "");
      try {
        e = n.parseFromString(e, t);
      } catch (e) {}
    }
    return e;
  };
  const D = e => e.href, A = function (e) {
    const t = document.createElement("a");
    t.href = location.href;
    const n = document.createElement("a");
    try {
      return n.href = e, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host);
    } catch (e) {
      return true;
    }
  };
  let N, {CustomEvent: O} = window;
  "function" != typeof O && (O = function (e, t) {
    const n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
  }, O.prototype = window.Event.prototype, {preventDefault: N} = O.prototype, O.prototype.preventDefault = function () {
    const e = N.call(this);
    return this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {get: () => true}), e;
  });
  const L = (e, t, n) => {
    const i = new O(t, {bubbles: true, cancelable: true, detail: n});
    return e.dispatchEvent(i), !i.defaultPrevented;
  }, I = e => {
    L(e.target, "ujs:everythingStopped"), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
  }, q = (e, t, n, i) => e.addEventListener(n, function (e) {
    let {target: n} = e;
    for (; n instanceof Element && !h(n, t);) n = n.parentNode;
    n instanceof Element && false === i.call(n, e) && (e.preventDefault(), e.stopPropagation());
  }), P = e => Array.prototype.slice.call(e), H = (e, t) => {
    let n = [e];
    h(e, "form") && (n = P(e.elements));
    const i = [];
    return n.forEach(function (e) {
      e.name && !e.disabled && (h(e, "fieldset[disabled] *") || (h(e, "select") ? P(e.options).forEach(function (t) {
        t.selected && i.push({name: e.name, value: t.value});
      }) : (e.checked || -1 === ["radio", "checkbox", "submit"].indexOf(e.type)) && i.push({name: e.name, value: e.value})));
    }), t && i.push(t), i.map(function (e) {
      return e.name ? `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}` : e;
    }).join("&");
  }, R = (e, t) => h(e, "form") ? P(e.elements).filter(e => h(e, t)) : P(e.querySelectorAll(t)), F = e => function (t) {
    M(this, e) || I(t);
  };
  var M = function (e, t) {
    let n;
    const i = e.getAttribute("data-confirm");
    if (!i) return true;
    let r = false;
    if (L(e, "confirm")) {
      try {
        r = t.confirm(i, e);
      } catch (e) {}
      n = L(e, "confirm:complete", [r]);
    }
    return r && n;
  };
  const B = function (e) {
    this.disabled && I(e);
  }, W = e => {
    let t;
    if (e instanceof Event) {
      if (K(e)) return;
      t = e.target;
    } else t = e;
    if (!b(t)) return h(t, l) ? Q(t) : h(t, u) || h(t, a) ? Y(t) : h(t, i) ? z(t) : undefined;
  }, U = e => {
    const t = e instanceof Event ? e.target : e;
    if (!b(t)) return h(t, l) ? $(t) : h(t, u) || h(t, o) ? X(t) : h(t, i) ? V(t) : undefined;
  };
  var $ = function (e) {
    if (g(e, "ujs:disabled")) return;
    const t = e.getAttribute("data-disable-with");
    return null != t && (e[m] || (e[m] = {}), e[m]["ujs:enable-with"] = e.innerHTML, e.innerHTML = t), e.addEventListener("click", I), (e[m] || (e[m] = {}), e[m]["ujs:disabled"] = true);
  }, Q = function (e) {
    const t = g(e, "ujs:enable-with");
    return null != t && (e.innerHTML = t, (e[m] || (e[m] = {}), e[m]["ujs:enable-with"] = null)), e.removeEventListener("click", I), (e[m] || (e[m] = {}), e[m]["ujs:disabled"] = null);
  }, V = e => R(e, o).forEach(X), X = function (e) {
    if (g(e, "ujs:disabled")) return;
    const t = e.getAttribute("data-disable-with");
    return null != t && (h(e, "button") ? (e[m] || (e[m] = {}), e[m]["ujs:enable-with"] = e.innerHTML, e.innerHTML = t) : (e[m] || (e[m] = {}), e[m]["ujs:enable-with"] = e.value, e.value = t)), e.disabled = true, (e[m] || (e[m] = {}), e[m]["ujs:disabled"] = true);
  }, z = e => R(e, a).forEach(e => Y(e)), Y = function (e) {
    const t = g(e, "ujs:enable-with");
    return null != t && (h(e, "button") ? e.innerHTML = t : e.value = t, (e[m] || (e[m] = {}), e[m]["ujs:enable-with"] = null)), e.disabled = false, (e[m] || (e[m] = {}), e[m]["ujs:disabled"] = null);
  }, K = function (e) {
    const t = e.detail ? e.detail[0] : undefined;
    return t && t.getResponseHeader("X-Xhr-Redirect");
  };
  const G = e => function (t) {
    const n = this, i = n.getAttribute("data-method");
    if (!i) return;
    if (b(this)) return;
    const r = e.href(n), o = _(), a = w(), s = document.createElement("form");
    let l = `<input name='_method' value='${i}' type='hidden' />`;
    a && o && !A(r) && (l += `<input name='${a}' value='${o}' type='hidden' />`), l += '<input type="submit" />', s.method = "post", s.action = r, s.target = n.target, s.innerHTML = l, s.style.display = "none", document.body.appendChild(s), s.querySelector('[type="submit"]').click(), I(t);
  }, J = function (e) {
    const t = e.getAttribute("data-remote");
    return null != t && "false" !== t;
  }, Z = e => function (r) {
    let o, a, s;
    const l = this;
    if (!J(l)) return true;
    if (!L(l, "ajax:before")) return L(l, "ajax:stopped"), false;
    if (b(l)) return L(l, "ajax:stopped"), false;
    const u = l.getAttribute("data-with-credentials"), c = l.getAttribute("data-type") || "script";
    if (h(l, i)) {
      const e = g(l, "ujs:submit-button");
      a = g(l, "ujs:submit-button-formmethod") || l.getAttribute("method") || "get", s = g(l, "ujs:submit-button-formaction") || l.getAttribute("action") || location.href, "GET" === a.toUpperCase() && (s = s.replace(/\?.*$/, "")), "multipart/form-data" === l.enctype ? (o = new FormData(l), null != e && o.append(e.name, e.value)) : o = H(l, e), (l[m] || (l[m] = {}), l[m]["ujs:submit-button"] = null), (l[m] || (l[m] = {}), l[m]["ujs:submit-button-formmethod"] = null), (l[m] || (l[m] = {}), l[m]["ujs:submit-button-formaction"] = null);
    } else h(l, t) || h(l, n) ? (a = l.getAttribute("data-method"), s = l.getAttribute("data-url"), o = H(l, l.getAttribute("data-params"))) : (a = l.getAttribute("data-method"), s = e.href(l), o = l.getAttribute("data-params"));
    C({type: a || "GET", url: s, data: o, dataType: c, beforeSend: (e, t) => L(l, "ajax:beforeSend", [e, t]) ? L(l, "ajax:send", [e]) : (L(l, "ajax:stopped"), false), success: (...e) => L(l, "ajax:success", e), error: (...e) => L(l, "ajax:error", e), complete: (...e) => L(l, "ajax:complete", e), crossDomain: A(s), withCredentials: null != u && "false" !== u}), I(r);
  }, ee = function () {
    const e = this, {form: t} = e;
    if (t) return e.name && (t[m] || (t[m] = {}), t[m]["ujs:submit-button"] = {name: e.name, value: e.value}), (t[m] || (t[m] = {}), t[m]["ujs:formnovalidate-button"] = e.formNoValidate), (t[m] || (t[m] = {}), t[m]["ujs:submit-button-formaction"] = e.getAttribute("formaction")), (t[m] || (t[m] = {}), t[m]["ujs:submit-button-formmethod"] = e.getAttribute("formmethod"));
  }, te = function (e) {
    const t = this, n = (t.getAttribute("data-method") || "GET").toUpperCase(), i = t.getAttribute("data-params"), r = (e.metaKey || e.ctrlKey) && "GET" === n && !i;
    (null != e.button && 0 !== e.button || r) && e.stopImmediatePropagation();
  }, ne = {$: y, ajax: C, buttonClickSelector: t, buttonDisableSelector: u, confirm: e => window.confirm(e), cspNonce: d, csrfToken: _, csrfParam: w, CSRFProtection: x, delegate: q, disableElement: U, enableElement: W, fileInputSelector: s, fire: L, formElements: R, formEnableSelector: a, formDisableSelector: o, formInputClickSelector: r, formSubmitButtonClick: ee, formSubmitSelector: i, getData: g, handleDisabledElement: B, href: D, inputChangeSelector: n, isCrossDomain: A, linkClickSelector: e, linkDisableSelector: l, loadCSPNonce: f, matches: h, preventInsignificantClick: te, refreshCSRFTokens: E, serializeElement: H, setData: v, stopEverything: I}, ie = F(ne);
  ne.handleConfirm = ie;
  const re = G(ne);
  ne.handleMethod = re;
  const oe = Z(ne);
  ne.handleRemote = oe;
  const ae = function () {
    if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
    return window.addEventListener("pageshow", function () {
      y(a).forEach(function (e) {
        g(e, "ujs:disabled") && W(e);
      }), y(l).forEach(function (e) {
        g(e, "ujs:disabled") && W(e);
      });
    }), q(document, l, "ajax:complete", W), q(document, l, "ajax:stopped", W), q(document, u, "ajax:complete", W), q(document, u, "ajax:stopped", W), q(document, e, "click", te), q(document, e, "click", B), q(document, e, "click", ie), q(document, e, "click", U), q(document, e, "click", oe), q(document, e, "click", re), q(document, t, "click", te), q(document, t, "click", B), q(document, t, "click", ie), q(document, t, "click", U), q(document, t, "click", oe), q(document, n, "change", B), q(document, n, "change", ie), q(document, n, "change", oe), q(document, i, "submit", B), q(document, i, "submit", ie), q(document, i, "submit", oe), q(document, i, "submit", e => setTimeout(() => U(e), 13)), q(document, i, "ajax:send", U), q(document, i, "ajax:complete", W), q(document, r, "click", te), q(document, r, "click", B), q(document, r, "click", ie), q(document, r, "click", ee), document.addEventListener("DOMContentLoaded", E), document.addEventListener("DOMContentLoaded", f), window._rails_loaded = true;
  };
  if (ne.start = ae, "undefined" != typeof jQuery && jQuery && jQuery.ajax) {
    if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
    jQuery.rails = ne, jQuery.ajaxPrefilter(function (e, t, n) {
      if (!e.crossDomain) return x(n);
    });
  }
  return "object" != typeof exports && "undefined" == typeof module && (window.Rails = ne, L(document, "rails:attachBindings") && ae()), ne;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
}(this, function () {
  "use strict";
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function n(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function i(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var r = t(e), o = r.overflow, a = r.overflowX, s = r.overflowY;
    return /(auto|scroll|overlay)/.test(o + s + a) ? e : i(n(e));
  }
  function r(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }
  function o(e) {
    return 11 === e ? re : 10 === e ? oe : re || oe;
  }
  function a(e) {
    if (!e) return document.documentElement;
    for (var n = o(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
    var r = i && i.nodeName;
    return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? a(i) : i : e ? e.ownerDocument.documentElement : document.documentElement;
  }
  function s(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || a(e.firstElementChild) === e);
  }
  function l(e) {
    return null === e.parentNode ? e : l(e.parentNode);
  }
  function u(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e, o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var c = o.commonAncestorContainer;
    if (e !== c && t !== c || i.contains(r)) return s(c) ? c : a(c);
    var f = l(e);
    return f.host ? u(f.host, t) : u(e, l(t).host);
  }
  function c(e) {
    var t = "top" === (1 < arguments.length && undefined !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n = e.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || i)[t];
    }
    return e[t];
  }
  function f(e, t) {
    var n = 2 < arguments.length && undefined !== arguments[2] && arguments[2], i = c(t, "top"), r = c(t, "left"), o = n ? -1 : 1;
    return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e;
  }
  function d(e, t) {
    var n = "x" === t ? "Left" : "Top", i = "Left" == n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"]);
  }
  function h(e) {
    var t = e.body, n = e.documentElement, i = o(10) && getComputedStyle(n);
    return {height: ee(t.offsetHeight, t.scrollHeight, n.clientHeight, n.offsetHeight, n.scrollHeight, o(10) ? parseInt(n.offsetHeight) + parseInt(i["margin" + "Top"]) + parseInt(i["margin" + "Bottom"]) : 0), width: ee(t.offsetWidth, t.scrollWidth, n.clientWidth, n.offsetWidth, n.scrollWidth, o(10) ? parseInt(n.offsetWidth) + parseInt(i["margin" + "Left"]) + parseInt(i["margin" + "Right"]) : 0)};
  }
  function g(e) {
    var n = {};
    try {
      if (o(10)) {
        n = e.getBoundingClientRect();
        var i = c(e, "top"), r = c(e, "left");
        n.top += i, n.left += r, n.bottom += i, n.right += r;
      } else n = e.getBoundingClientRect();
    } catch (e) {}
    var a = {left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top}, s = "HTML" === e.nodeName ? h(e.ownerDocument) : {}, l = s.width || e.clientWidth || a.width, u = s.height || e.clientHeight || a.height, f = e.offsetWidth - l, p = e.offsetHeight - u;
    if (f || p) {
      var g = t(e);
      f -= d(g, "x"), p -= d(g, "y"), a.width -= f, a.height -= p;
    }
    return ue({}, a, {right: a.left + a.width, bottom: a.top + a.height});
  }
  function v(e, n) {
    var r = 2 < arguments.length && undefined !== arguments[2] && arguments[2], a = o(10), s = "HTML" === n.nodeName, l = g(e), u = g(n), c = i(e), d = t(n), p = parseFloat(d.borderTopWidth), h = parseFloat(d.borderLeftWidth);
    r && s && (u.top = ee(u.top, 0), u.left = ee(u.left, 0));
    var v = ue({}, {top: l.top - u.top - p, left: l.left - u.left - h, width: l.width, height: l.height}, {right: {top: l.top - u.top - p, left: l.left - u.left - h, width: l.width, height: l.height}.left + {top: l.top - u.top - p, left: l.left - u.left - h, width: l.width, height: l.height}.width, bottom: {top: l.top - u.top - p, left: l.left - u.left - h, width: l.width, height: l.height}.top + {top: l.top - u.top - p, left: l.left - u.left - h, width: l.width, height: l.height}.height});
    if (v.marginTop = 0, v.marginLeft = 0, !a && s) {
      var y = parseFloat(d.marginTop), b = parseFloat(d.marginLeft);
      v.top -= p - y, v.bottom -= p - y, v.left -= h - b, v.right -= h - b, v.marginTop = y, v.marginLeft = b;
    }
    return (a && !r ? n.contains(c) : n === c && "BODY" !== c.nodeName) && (v = f(v, n)), v;
  }
  function y(e) {
    var t = 1 < arguments.length && undefined !== arguments[1] && arguments[1], n = e.ownerDocument.documentElement, i = v(e, n), r = ee(n.clientWidth, window.innerWidth || 0), o = ee(n.clientHeight, window.innerHeight || 0), a = t ? 0 : c(n), s = t ? 0 : c(n, "left");
    return ue({}, {top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o}, {right: {top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o}.left + {top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o}.width, bottom: {top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o}.top + {top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o}.height});
  }
  function b(e) {
    var i = e.nodeName;
    if ("BODY" === i || "HTML" === i) return false;
    if ("fixed" === t(e, "position")) return true;
    var r = n(e);
    return !!r && b(r);
  }
  function _(e) {
    if (!e || !e.parentElement || o()) return document.documentElement;
    for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
    return n || document.documentElement;
  }
  function w(e, t, o, a) {
    var s = 4 < arguments.length && undefined !== arguments[4] && arguments[4], l = {top: 0, left: 0}, c = s ? _(e) : u(e, r(t));
    if ("viewport" === a) l = y(c, s); else {
      var f;
      "scrollParent" === a ? "BODY" === (f = i(n(t))).nodeName && (f = e.ownerDocument.documentElement) : f = "window" === a ? e.ownerDocument.documentElement : a;
      var d = v(f, c, s);
      if ("HTML" !== f.nodeName || b(c)) l = d; else {
        var p = h(e.ownerDocument), m = p.height, g = p.width;
        l.top += d.top - d.marginTop, l.bottom = m + d.top, l.left += d.left - d.marginLeft, l.right = g + d.left;
      }
    }
    var w = "number" == typeof (o = o || 0);
    return l.left += w ? o : o.left || 0, l.top += w ? o : o.top || 0, l.right -= w ? o : o.right || 0, l.bottom -= w ? o : o.bottom || 0, l;
  }
  function E(e, t, n, i, r) {
    var o = 5 < arguments.length && undefined !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var a = w(n, i, o, r), s = {top: {width: a.width, height: t.top - a.top}, right: {width: a.right - t.right, height: a.height}, bottom: {width: a.width, height: a.bottom - t.bottom}, left: {width: t.left - a.left, height: a.height}}, l = Object.keys(s).map(function (e) {
      return ue({key: e}, s[e], {area: s[e].width * s[e].height});
    }).sort(function (e, t) {
      return t.area - e.area;
    }), u = l.filter(function (e) {
      var t = e.width, i = e.height;
      return t >= n.clientWidth && i >= n.clientHeight;
    }), c = 0 < u.length ? u[0].key : l[0].key, f = e.split("-")[1];
    return c + (f ? "-" + f : "");
  }
  function T(e, t, n) {
    var i = 3 < arguments.length && undefined !== arguments[3] ? arguments[3] : null;
    return v(n, i ? _(t) : u(t, r(n)), i);
  }
  function C(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e), n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0), i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return {width: e.offsetWidth + i, height: e.offsetHeight + n};
  }
  function j(e) {
    var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function S(e, t, n) {
    n = n.split("-")[0];
    var i = C(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n), a = o ? "top" : "left", s = o ? "left" : "top", l = o ? "height" : "width", u = o ? "width" : "height";
    return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[u] : t[j(s)], r;
  }
  function k(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function D(e, t, n) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === n;
    });
    var i = k(e, function (e) {
      return e[t] === n;
    });
    return e.indexOf(i);
  }
  function A(t, n, i) {
    return (undefined === i ? t : t.slice(0, D(t, "name", i))).forEach(function (t) {
      t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var i = t.function || t.fn;
      t.enabled && (i && "[object Function]" === {}.toString.call(i)) && (n.offsets.popper = ue({}, n.offsets.popper, {right: n.offsets.popper.left + n.offsets.popper.width, bottom: n.offsets.popper.top + n.offsets.popper.height}), n.offsets.reference = ue({}, n.offsets.reference, {right: n.offsets.reference.left + n.offsets.reference.width, bottom: n.offsets.reference.top + n.offsets.reference.height}), n = i(n, t));
    }), n;
  }
  function N() {
    if (!this.state.isDestroyed) {
      var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {}};
      e.offsets.reference = T(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = A(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = true, this.options.onCreate(e));
    }
  }
  function O(e, t) {
    return e.some(function (e) {
      var n = e.name;
      return e.enabled && n === t;
    });
  }
  function L(e) {
    for (var t = [false, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var r = t[i], o = r ? "" + r + n : e;
      if (undefined !== document.body.style[o]) return o;
    }
    return null;
  }
  function q(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function P(e, t, n, r) {
    var o = "BODY" === e.nodeName, a = o ? e.ownerDocument.defaultView : e;
    a.addEventListener(t, n, {passive: true}), o || P(i(a.parentNode), t, n, r), r.push(a);
  }
  function H(e, t, n, r) {
    n.updateBound = r, q(e).addEventListener("resize", n.updateBound, {passive: true});
    var o = i(e);
    return P(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = true, n;
  }
  function R() {
    this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function F(e, t) {
    return q(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = false, t;
  }
  function M() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = F(this.reference, this.state));
  }
  function W(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && ("" !== t[n] && !isNaN(parseFloat(t[n])) && isFinite(t[n])) && (i = "px"), e.style[n] = t[n] + i;
    });
  }
  function U(e, t) {
    Object.keys(t).forEach(function (n) {
      false === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
    });
  }
  function $(e, t) {
    var n = e.offsets, i = n.popper, r = n.reference, o = Z, s = o(r.width), l = o(i.width), u = -1 !== ["left", "right"].indexOf(e.placement), c = -1 !== e.placement.indexOf("-"), f = t ? u || c || s % 2 == l % 2 ? o : J : a, d = t ? o : a;
    return {left: f(1 == s % 2 && 1 == l % 2 && !c && t ? i.left - 1 : i.left), top: d(i.top), bottom: d(i.bottom), right: f(i.right)};
  }
  function Q(e, t, n) {
    var i = k(e, function (e) {
      return e.name === t;
    }), r = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });
    if (!r) {
      var o = "`" + t + "`";
      console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }
    return r;
  }
  function V(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function X(e) {
    var t = 1 < arguments.length && undefined !== arguments[1] && arguments[1], n = de.indexOf(e), i = de.slice(n + 1).concat(de.slice(0, n));
    return t ? i.reverse() : i;
  }
  function z(e, t, n, i) {
    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], a = r[2];
    if (!o) return e;
    if (0 === a.indexOf("%")) {
      var s;
      if ("%p" === a) s = n; else s = i;
      return ue({}, s, {right: s.left + s.width, bottom: s.top + s.height})[t] / 100 * o;
    }
    return "vh" === a || "vw" === a ? ("vh" === a ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o;
  }
  function Y(e, t, n, i) {
    var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), a = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }), s = a.indexOf(k(a, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/, u = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
    return u = u.map(function (e, i) {
      var r = (1 === i ? !o : o) ? "height" : "width", a = false;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = true, e) : a ? (e[e.length - 1] += t, a = false, e) : e.concat(t);
      }, []).map(function (e) {
        return z(e, r, t, n);
      });
    }), u.forEach(function (e, t) {
      e.forEach(function (n, i) {
        "" !== n && !isNaN(parseFloat(n)) && isFinite(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
      });
    }), r;
  }
  function K(e, t) {
    var n, i = t.offset, r = e.placement, o = e.offsets, a = o.popper, s = o.reference, l = r.split("-")[0];
    return n = "" !== +i && !isNaN(parseFloat(+i)) && isFinite(+i) ? [+i, 0] : Y(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e;
  }
  var G = Math.min, J = Math.floor, Z = Math.round, ee = Math.max, te = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, ne = function () {
    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
    return 0;
  }(), ie = te && window.Promise ? function (e) {
    var t = false;
    return function () {
      t || (t = true, window.Promise.resolve().then(function () {
        t = false, e && "[object Function]" === {}.toString.call(e);
      }));
    };
  } : function (e) {
    var t = false;
    return function () {
      t || (t = true, setTimeout(function () {
        t = false, e && "[object Function]" === {}.toString.call(e);
      }, ne));
    };
  }, re = te && !(!window.MSInputMethodContext || !document.documentMode), oe = te && /MSIE 10/.test(navigator.userAgent), ae = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }, se = function () {
    function e(e, t) {
      for (var n, i = 0; i < t.length; i++) (n = t[i]).enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
    }
    return function (t, n, i) {
      return n && (t.prototype && "[object Function]" === {}.toString.call(t.prototype)), i && (t && "[object Function]" === {}.toString.call(t)), t;
    };
  }(), ue = Object.assign || function (e) {
    for (var t, n = 1; n < arguments.length; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, ce = te && /Firefox/i.test(navigator.userAgent), fe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], de = fe.slice(3), pe = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"}, he = function () {
    function t(n, i) {
      var r = this, o = 2 < arguments.length && undefined !== arguments[2] ? arguments[2] : {};
      ae(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(r.update);
      }, this.update = ie(this.update.bind(this)), this.options = ue({}, t.Defaults, o), this.state = {isDestroyed: false, isCreated: false, scrollParents: []}, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(ue({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
        r.options.modifiers[e] = ue({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return ue({name: e}, r.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && (t.onLoad && "[object Function]" === {}.toString.call(t.onLoad)) && t.onLoad(r.reference, r.popper, r.options, t, r.state);
      }), this.update();
      var a = this.options.eventsEnabled;
      a && this.enableEventListeners(), this.state.eventsEnabled = a;
    }
    return se(t, [{key: "update", value: function () {
      return N.call(this);
    }}, {key: "destroy", value: function () {
      return I.call(this);
    }}, {key: "enableEventListeners", value: function () {
      return R.call(this);
    }}, {key: "disableEventListeners", value: function () {
      return M.call(this);
    }}]), t;
  }();
  return he.Utils = ("undefined" == typeof window ? global : window).PopperUtils, he.placements = fe, he.Defaults = {placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function () {}, onUpdate: function () {}, modifiers: {shift: {order: 100, enabled: true, fn: function (e) {
    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
    if (i) {
      var r = e.offsets, o = r.reference, a = r.popper, s = -1 !== ["bottom", "top"].indexOf(n), l = s ? "left" : "top", u = s ? "width" : "height", c = {start: (l in {} ? Object.defineProperty({}, l, {value: o[l], enumerable: true, configurable: true, writable: true}) : {}[l] = o[l], {}), end: (l in {} ? Object.defineProperty({}, l, {value: o[l] + o[u] - a[u], enumerable: true, configurable: true, writable: true}) : {}[l] = o[l] + o[u] - a[u], {})};
      e.offsets.popper = ue({}, a, c[i]);
    }
    return e;
  }}, offset: {order: 200, enabled: true, fn: K, offset: 0}, preventOverflow: {order: 300, enabled: true, fn: function (e, t) {
    var n = t.boundariesElement || a(e.instance.popper);
    e.instance.reference === n && (n = a(n));
    var i = L("transform"), r = e.instance.popper.style, o = r.top, s = r.left, l = r[i];
    r.top = "", r.left = "", r[i] = "";
    var u = w(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
    r.top = o, r.left = s, r[i] = l, t.boundaries = u;
    var c = t.priority, f = e.offsets.popper, d = {primary: function (e) {
      var n = f[e];
      return f[e] < u[e] && !t.escapeWithReference && (n = ee(f[e], u[e])), (e in {} ? Object.defineProperty({}, e, {value: n, enumerable: true, configurable: true, writable: true}) : {}[e] = n, {});
    }, secondary: function (e) {
      var n = "right" === e ? "left" : "top", i = f[n];
      return f[e] > u[e] && !t.escapeWithReference && (i = G(f[n], u[e] - ("right" === e ? f.width : f.height))), (n in {} ? Object.defineProperty({}, n, {value: i, enumerable: true, configurable: true, writable: true}) : {}[n] = i, {});
    }};
    return c.forEach(function (e) {
      var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
      f = ue({}, f, d[t](e));
    }), e.offsets.popper = f, e;
  }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"}, keepTogether: {order: 400, enabled: true, fn: function (e) {
    var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = J, a = -1 !== ["top", "bottom"].indexOf(r), s = a ? "right" : "bottom", l = a ? "left" : "top", u = a ? "width" : "height";
    return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e;
  }}, arrow: {order: 500, enabled: true, fn: function (e, n) {
    var i;
    if (!Q(e.instance.modifiers, "arrow", "keepTogether")) return e;
    var r = n.element;
    if ("string" == typeof r) {
      if (!(r = e.instance.popper.querySelector(r))) return e;
    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
    var o = e.placement.split("-")[0], a = e.offsets, s = a.popper, l = a.reference, u = -1 !== ["left", "right"].indexOf(o), c = u ? "height" : "width", f = u ? "Top" : "Left", d = f.toLowerCase(), p = u ? "left" : "top", h = u ? "bottom" : "right", g = C(r)[c];
    l[h] - g < s[d] && (e.offsets.popper[d] -= s[d] - (l[h] - g)), l[d] + g > s[h] && (e.offsets.popper[d] += l[d] + g - s[h]), e.offsets.popper = ue({}, e.offsets.popper, {right: e.offsets.popper.left + e.offsets.popper.width, bottom: e.offsets.popper.top + e.offsets.popper.height});
    var v = l[d] + l[c] / 2 - g / 2, y = t(e.instance.popper), b = parseFloat(y["margin" + f]), _ = parseFloat(y["border" + f + "Width"]), w = v - e.offsets.popper[d] - b - _;
    return w = ee(G(s[c] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (d in (i = {}) ? Object.defineProperty(i = {}, d, {value: Z(w), enumerable: true, configurable: true, writable: true}) : (i = {})[d] = Z(w), i = {}, (p in i ? Object.defineProperty(i, p, {value: "", enumerable: true, configurable: true, writable: true}) : i[p] = "", i), i), e;
  }, element: "[x-arrow]"}, flip: {order: 600, enabled: true, fn: function (e, t) {
    if (O(e.instance.modifiers, "inner")) return e;
    if (e.flipped && e.placement === e.originalPlacement) return e;
    var n = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), i = e.placement.split("-")[0], r = j(i), o = e.placement.split("-")[1] || "", a = [];
    switch (t.behavior) {
      case pe.FLIP:
        a = [i, r];
        break;
      case pe.CLOCKWISE:
        a = X(i);
        break;
      case pe.COUNTERCLOCKWISE:
        a = X(i, true);
        break;
      default:
        a = t.behavior;
    }
    return a.forEach(function (s, l) {
      if (i !== s || a.length === l + 1) return e;
      i = e.placement.split("-")[0], r = j(i);
      var u = e.offsets.popper, c = e.offsets.reference, f = J, d = "left" === i && f(u.right) > f(c.left) || "right" === i && f(u.left) < f(c.right) || "top" === i && f(u.bottom) > f(c.top) || "bottom" === i && f(u.top) < f(c.bottom), p = f(u.left) < f(n.left), h = f(u.right) > f(n.right), m = f(u.top) < f(n.top), g = f(u.bottom) > f(n.bottom), v = "left" === i && p || "right" === i && h || "top" === i && m || "bottom" === i && g, y = -1 !== ["top", "bottom"].indexOf(i), b = !!t.flipVariations && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && m || !y && "end" === o && g), _ = !!t.flipVariationsByContent && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m), w = b || _;
      (d || v || w) && (e.flipped = true, (d || v) && (i = a[l + 1]), w && (o = V(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = ue({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = A(e.instance.modifiers, e, "flip"));
    }), e;
  }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: false, flipVariationsByContent: false}, inner: {order: 700, enabled: false, fn: function (e) {
    var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference, a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
    return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = j(t), e.offsets.popper = ue({}, r, {right: r.left + r.width, bottom: r.top + r.height}), e;
  }}, hide: {order: 800, enabled: true, fn: function (e) {
    if (!Q(e.instance.modifiers, "hide", "preventOverflow")) return e;
    var t = e.offsets.reference, n = k(e.instance.modifiers, function (e) {
      return "preventOverflow" === e.name;
    }).boundaries;
    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
      if (true === e.hide) return e;
      e.hide = true, e.attributes["x-out-of-boundaries"] = "";
    } else {
      if (false === e.hide) return e;
      e.hide = false, e.attributes["x-out-of-boundaries"] = false;
    }
    return e;
  }}, computeStyle: {order: 850, enabled: true, fn: function (e, t) {
    var n = t.x, i = t.y, r = e.offsets.popper, o = k(e.instance.modifiers, function (e) {
      return "applyStyle" === e.name;
    }).gpuAcceleration;
    undefined !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    var s, l, u = undefined === o ? t.gpuAcceleration : o, c = a(e.instance.popper), f = g(c), d = {position: r.position}, p = $(e, 2 > window.devicePixelRatio || !ce), h = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", v = L("transform");
    if (l = "bottom" == h ? "HTML" === c.nodeName ? -c.clientHeight + p.bottom : -f.height + p.bottom : p.top, s = "right" == m ? "HTML" === c.nodeName ? -c.clientWidth + p.right : -f.width + p.right : p.left, u && v) d[v] = "translate3d(" + s + "px, " + l + "px, 0)", d[h] = 0, d[m] = 0, d.willChange = "transform"; else {
      var y = "bottom" == h ? -1 : 1, b = "right" == m ? -1 : 1;
      d[h] = l * y, d[m] = s * b, d.willChange = h + ", " + m;
    }
    var _ = {"x-placement": e.placement};
    return e.attributes = ue({}, _, e.attributes), e.styles = ue({}, d, e.styles), e.arrowStyles = ue({}, e.offsets.arrow, e.arrowStyles), e;
  }, gpuAcceleration: true, x: "bottom", y: "right"}, applyStyle: {order: 900, enabled: true, fn: function (e) {
    return W(e.instance.popper, e.styles), U(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && W(e.arrowElement, e.arrowStyles), e;
  }, onLoad: function (e, t, n, i, r) {
    var o = T(r, t, e, n.positionFixed), a = E(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
    return t.setAttribute("x-placement", a), W(t, {position: n.positionFixed ? "fixed" : "absolute"}), n;
  }, gpuAcceleration: undefined}}}, he;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Util = t(e.jQuery);
}(this, function (e) {
  "use strict";
  function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function n(e) {
    return null == e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
  }
  function i() {
    return {bindType: s, delegateType: s, handle: function (e) {
      if (a.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
    }};
  }
  function r(e) {
    var t = this, n = false;
    return a.default(this).one(c.TRANSITION_END, function () {
      n = true;
    }), setTimeout(function () {
      n || c.triggerTransitionEnd(t);
    }, e), this;
  }
  function o() {
    a.default.fn.emulateTransitionEnd = r, a.default.event.special[c.TRANSITION_END] = i();
  }
  var a = t(e), s = "transitionend", l = 1e6, u = 1e3, c = {TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
    do {
      e += ~~(Math.random() * l);
    } while (document.getElementById(e));
    return e;
  }, getSelectorFromElement: function (e) {
    var t = e.getAttribute("data-target");
    if (!t || "#" === t) {
      var n = e.getAttribute("href");
      t = n && "#" !== n ? n.trim() : "";
    }
    try {
      return document.querySelector(t) ? t : null;
    } catch (e) {
      return null;
    }
  }, getTransitionDurationFromElement: function (e) {
    if (!e) return 0;
    var t = a.default(e).css("transition-duration"), n = a.default(e).css("transition-delay"), i = parseFloat(t), r = parseFloat(n);
    return i || r ? (t = t.split(",")[0], n = n.split(",")[0], (parseFloat(t) + parseFloat(n)) * u) : 0;
  }, reflow: function (e) {
    return e.offsetHeight;
  }, triggerTransitionEnd: function (e) {
    a.default(e).trigger(s);
  }, supportsTransitionEnd: function () {
    return Boolean(s);
  }, isElement: function (e) {
    return (e[0] || e).nodeType;
  }, typeCheckConfig: function (e, t, i) {
    for (var r in i) if (Object.prototype.hasOwnProperty.call(i, r)) {
      var o = i[r], a = t[r], s = a && c.isElement(a) ? "element" : n(a);
      if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".');
    }
  }, findShadowRoot: function (e) {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof e.getRootNode) {
      var t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null;
  }, jQueryDetection: function () {
    if (undefined === a.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = a.default.fn.jquery.split(" ")[0].split("."), t = 1, n = 2, i = 9, r = 1, o = 4;
    if (e[0] < n && e[1] < i || e[0] === t && e[1] === i && e[2] < r || e[0] >= o) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }};
  return c.jQueryDetection(), o(), c;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Alert = t(e.jQuery, e.Util);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  var o = n(e), a = n(t), s = "alert", l = "4.6.2", u = "bs.alert", c = "." + u, f = ".data-api", d = o.default.fn[s], p = "alert", h = "fade", m = "show", g = "close" + c, v = "closed" + c, y = "click" + c + f, b = '[data-dismiss="alert"]', _ = function () {
    function e(e) {
      this._element = e;
    }
    var t = e.prototype;
    return t.close = function (e) {
      var t = this._element;
      e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, t.dispose = function () {
      o.default.removeData(this._element, u), this._element = null;
    }, t._getRootElement = function (e) {
      var t = a.default.getSelectorFromElement(e), n = false;
      return t && (n = document.querySelector(t)), n || (n = o.default(e).closest("." + p)[0]), n;
    }, t._triggerCloseEvent = function (e) {
      var t = o.default.Event(g);
      return o.default(e).trigger(t), t;
    }, t._removeElement = function (e) {
      var t = this;
      if (o.default(e).removeClass(m), o.default(e).hasClass(h)) {
        var n = a.default.getTransitionDurationFromElement(e);
        o.default(e).one(a.default.TRANSITION_END, function (n) {
          return t._destroyElement(e, n);
        }).emulateTransitionEnd(n);
      } else this._destroyElement(e);
    }, t._destroyElement = function (e) {
      o.default(e).detach().trigger(v).remove();
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this), i = n.data(u);
        i || (i = new e(this), n.data(u, i)), "close" === t && i[t](this);
      });
    }, e._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, (null && i(e.prototype, null), [{key: "VERSION", get: function () {
      return l;
    }}] && i(e, [{key: "VERSION", get: function () {
      return l;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return o.default(document).on(y, b, _._handleDismiss(new _)), o.default.fn[s] = _._jQueryInterface, o.default.fn[s].Constructor = _, o.default.fn[s].noConflict = function () {
    return o.default.fn[s] = d, _._jQueryInterface;
  }, _;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Button = t(e.jQuery);
}(this, function (e) {
  "use strict";
  function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  var r = t(e), o = "button", a = "4.6.2", s = "bs.button", l = "." + s, u = ".data-api", c = r.default.fn[o], f = "active", d = "btn", p = "focus", h = "click" + l + u, m = "focus" + l + u + " blur" + l + u, g = "load" + l + u, v = '[data-toggle^="button"]', y = '[data-toggle="buttons"]', b = '[data-toggle="button"]', _ = '[data-toggle="buttons"] .btn', w = 'input:not([type="hidden"])', x = ".active", E = ".btn", T = function () {
    function e(e) {
      this._element = e, this.shouldAvoidTriggerChange = false;
    }
    var t = e.prototype;
    return t.toggle = function () {
      var e = true, t = true, n = r.default(this._element).closest(y)[0];
      if (n) {
        var i = this._element.querySelector(w);
        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(f)) e = false; else {
            var o = n.querySelector(x);
            o && r.default(o).removeClass(f);
          }
          e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(f)), this.shouldAvoidTriggerChange || r.default(i).trigger("change")), i.focus(), t = false;
        }
      }
      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(f)), e && r.default(this._element).toggleClass(f));
    }, t.dispose = function () {
      r.default.removeData(this._element, s), this._element = null;
    }, e._jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = r.default(this), o = i.data(s);
        o || (o = new e(this), i.data(s, o)), o.shouldAvoidTriggerChange = n, "toggle" === t && o[t]();
      });
    }, (null && n(e.prototype, null), [{key: "VERSION", get: function () {
      return a;
    }}] && n(e, [{key: "VERSION", get: function () {
      return a;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return r.default(document).on(h, v, function (e) {
    var t = e.target, n = t;
    if (r.default(t).hasClass(d) || (t = r.default(t).closest(E)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault(); else {
      var i = t.querySelector(w);
      if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
      "INPUT" !== n.tagName && "LABEL" === t.tagName || T._jQueryInterface.call(r.default(t), "toggle", "INPUT" === n.tagName);
    }
  }).on(m, v, function (e) {
    var t = r.default(e.target).closest(E)[0];
    r.default(t).toggleClass(p, /^focus(in)?$/.test(e.type));
  }), r.default(window).on(g, function () {
    for (var e = [].slice.call(document.querySelectorAll(_)), t = 0, n = e.length; t < n; t++) {
      var i = e[t], r = i.querySelector(w);
      r.checked || r.hasAttribute("checked") ? i.classList.add(f) : i.classList.remove(f);
    }
    for (var o = 0, a = (e = [].slice.call(document.querySelectorAll(b))).length; o < a; o++) {
      var s = e[o];
      "true" === s.getAttribute("aria-pressed") ? s.classList.add(f) : s.classList.remove(f);
    }
  }), r.default.fn[o] = T._jQueryInterface, r.default.fn[o].Constructor = T, r.default.fn[o].noConflict = function () {
    return r.default.fn[o] = c, T._jQueryInterface;
  }, T;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Carousel = t(e.jQuery, e.Util);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function o() {
    return o = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, o.apply(this, arguments);
  }
  var a = n(e), s = n(t), l = "carousel", u = "4.6.2", c = "bs.carousel", f = "." + c, d = ".data-api", p = a.default.fn[l], h = 37, m = 39, g = 500, v = 40, y = "carousel", b = "active", _ = "slide", w = "carousel-item-right", x = "carousel-item-left", E = "carousel-item-next", T = "carousel-item-prev", C = "pointer-event", j = "next", S = "prev", k = "left", D = "right", A = "slide" + f, N = "slid" + f, O = "keydown" + f, L = "mouseenter" + f, I = "mouseleave" + f, q = "touchstart" + f, P = "touchmove" + f, H = "touchend" + f, R = "pointerdown" + f, F = "pointerup" + f, M = "dragstart" + f, B = "load" + f + d, W = "click" + f + d, U = ".active", $ = ".active.carousel-item", Q = ".carousel-item", V = ".carousel-item img", X = ".carousel-item-next, .carousel-item-prev", z = ".carousel-indicators", Y = "[data-slide], [data-slide-to]", K = '[data-ride="carousel"]', G = {interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true}, J = {interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean"}, Z = {TOUCH: "touch", PEN: "pen"}, ee = function () {
    function e(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(z), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }
    var t = e.prototype;
    return t.next = function () {
      this._isSliding || this._slide(j);
    }, t.nextWhenVisible = function () {
      var e = a.default(this._element);
      !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(S);
    }, t.pause = function (e) {
      e || (this._isPaused = true), this._element.querySelector(X) && (s.default.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (e) {
      e || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (e) {
      var t = this;
      this._activeElement = this._element.querySelector($);
      var n = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) a.default(this._element).one(N, function () {
        return t.to(e);
      }); else {
        if (n === e) return this.pause(), void this.cycle();
        var i = e > n ? j : S;
        this._slide(i, this._items[e]);
      }
    }, t.dispose = function () {
      a.default(this._element).off(f), a.default.removeData(this._element, c), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (e) {
      return e = o({}, G, e), s.default.typeCheckConfig(l, e, J), e;
    }, t._handleSwipe = function () {
      var e = Math.abs(this.touchDeltaX);
      if (!(e <= v)) {
        var t = e / this.touchDeltaX;
        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && a.default(this._element).on(O, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && a.default(this._element).on(L, function (t) {
        return e.pause(t);
      }).on(I, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var e = this;
      if (this._touchSupported) {
        var t = function (t) {
          e._pointerEvent && Z[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
        }, n = function (t) {
          e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX;
        }, i = function (t) {
          e._pointerEvent && Z[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, g + e._config.interval));
        };
        a.default(this._element.querySelectorAll(V)).on(M, function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (a.default(this._element).on(R, function (e) {
          return t(e);
        }), a.default(this._element).on(F, function (e) {
          return i(e);
        }), this._element.classList.add(C)) : (a.default(this._element).on(q, function (e) {
          return t(e);
        }), a.default(this._element).on(P, function (e) {
          return n(e);
        }), a.default(this._element).on(H, function (e) {
          return i(e);
        }));
      }
    }, t._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
        case h:
          e.preventDefault(), this.prev();
          break;
        case m:
          e.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(Q)) : [], this._items.indexOf(e);
    }, t._getItemByDirection = function (e, t) {
      var n = e === j, i = e === S, r = this._getItemIndex(t), o = this._items.length - 1;
      if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
      var a = (r + (e === S ? -1 : 1)) % this._items.length;
      return -1 === a ? this._items[this._items.length - 1] : this._items[a];
    }, t._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e), i = this._getItemIndex(this._element.querySelector($)), r = a.default.Event(A, {relatedTarget: e, direction: t, from: i, to: n});
      return a.default(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(U));
        a.default(t).removeClass(b);
        var n = this._indicatorsElement.children[this._getItemIndex(e)];
        n && a.default(n).addClass(b);
      }
    }, t._updateInterval = function () {
      var e = this._activeElement || this._element.querySelector($);
      if (e) {
        var t = parseInt(e.getAttribute("data-interval"), 10);
        t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, t._slide = function (e, t) {
      var n, i, r, o = this, l = this._element.querySelector($), u = this._getItemIndex(l), c = t || l && this._getItemByDirection(e, l), f = this._getItemIndex(c), d = Boolean(this._interval);
      if (e === j ? (n = x, i = E, r = k) : (n = w, i = T, r = D), c && a.default(c).hasClass(b)) this._isSliding = false; else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && l && c) {
        this._isSliding = true, d && this.pause(), this._setActiveIndicatorElement(c), this._activeElement = c;
        var p = a.default.Event(N, {relatedTarget: c, direction: r, from: u, to: f});
        if (a.default(this._element).hasClass(_)) {
          a.default(c).addClass(i), s.default.reflow(c), a.default(l).addClass(n), a.default(c).addClass(n);
          var h = s.default.getTransitionDurationFromElement(l);
          a.default(l).one(s.default.TRANSITION_END, function () {
            a.default(c).removeClass(n + " " + i).addClass(b), a.default(l).removeClass(b + " " + i + " " + n), o._isSliding = false, setTimeout(function () {
              return a.default(o._element).trigger(p);
            }, 0);
          }).emulateTransitionEnd(h);
        } else a.default(l).removeClass(b), a.default(c).addClass(b), this._isSliding = false, a.default(this._element).trigger(p);
        d && this.cycle();
      }
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = a.default(this).data(c), i = o({}, G, a.default(this).data());
        "object" == typeof t && (i = o({}, i, t));
        var r = "string" == typeof t ? t : i.slide;
        if (n || (n = new e(this, i), a.default(this).data(c, n)), "number" == typeof t) n.to(t); else if ("string" == typeof r) {
          if (undefined === n[r]) throw new TypeError('No method named "' + r + '"');
          n[r]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      });
    }, e._dataApiClickHandler = function (t) {
      var n = s.default.getSelectorFromElement(this);
      if (n) {
        var i = a.default(n)[0];
        if (i && a.default(i).hasClass(y)) {
          var r = o({}, a.default(i).data(), a.default(this).data()), l = this.getAttribute("data-slide-to");
          l && (r.interval = false), e._jQueryInterface.call(a.default(i), r), l && a.default(i).data(c).to(l), t.preventDefault();
        }
      }
    }, (null && i(e.prototype, null), [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return G;
    }}] && i(e, [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return G;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return a.default(document).on(W, Y, ee._dataApiClickHandler), a.default(window).on(B, function () {
    for (var e = [].slice.call(document.querySelectorAll(K)), t = 0, n = e.length; t < n; t++) {
      var i = a.default(e[t]);
      ee._jQueryInterface.call(i, i.data());
    }
  }), a.default.fn[l] = ee._jQueryInterface, a.default.fn[l].Constructor = ee, a.default.fn[l].noConflict = function () {
    return a.default.fn[l] = p, ee._jQueryInterface;
  }, ee;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Collapse = t(e.jQuery, e.Util);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function o() {
    return o = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, o.apply(this, arguments);
  }
  var a = n(e), s = n(t), l = "collapse", u = "4.6.2", c = "bs.collapse", f = "." + c, d = ".data-api", p = a.default.fn[l], h = "show", m = "collapse", g = "collapsing", v = "collapsed", y = "width", b = "height", _ = "show" + f, w = "shown" + f, x = "hide" + f, E = "hidden" + f, T = "click" + f + d, C = ".show, .collapsing", j = '[data-toggle="collapse"]', S = {toggle: true, parent: ""}, k = {toggle: "boolean", parent: "(string|element)"}, D = function () {
    function e(e, t) {
      this._isTransitioning = false, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
      for (var n = [].slice.call(document.querySelectorAll(j)), i = 0, r = n.length; i < r; i++) {
        var o = n[i], a = s.default.getSelectorFromElement(o), l = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
          return t === e;
        });
        null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(o));
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }
    var t = e.prototype;
    return t.toggle = function () {
      a.default(this._element).hasClass(h) ? this.hide() : this.show();
    }, t.show = function () {
      var t, n, i = this;
      if (!this._isTransitioning && !a.default(this._element).hasClass(h) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(C)).filter(function (e) {
        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(m);
      })).length && (t = null), !(t && (n = a.default(t).not(this._selector).data(c)) && n._isTransitioning))) {
        var r = a.default.Event(_);
        if (a.default(this._element).trigger(r), !r.isDefaultPrevented()) {
          t && (e._jQueryInterface.call(a.default(t).not(this._selector), "hide"), n || a.default(t).data(c, null));
          var o = this._getDimension();
          a.default(this._element).removeClass(m).addClass(g), this._element.style[o] = 0, this._triggerArray.length && a.default(this._triggerArray).removeClass(v).attr("aria-expanded", true), this.setTransitioning(true);
          var l = function () {
            a.default(i._element).removeClass(g).addClass(m + " " + h), i._element.style[o] = "", i.setTransitioning(false), a.default(i._element).trigger(w);
          }, u = "scroll" + (o[0].toUpperCase() + o.slice(1)), f = s.default.getTransitionDurationFromElement(this._element);
          a.default(this._element).one(s.default.TRANSITION_END, l).emulateTransitionEnd(f), this._element.style[o] = this._element[u] + "px";
        }
      }
    }, t.hide = function () {
      var e = this;
      if (!this._isTransitioning && a.default(this._element).hasClass(h)) {
        var t = a.default.Event(x);
        if (a.default(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();
          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", s.default.reflow(this._element), a.default(this._element).addClass(g).removeClass(m + " " + h);
          var i = this._triggerArray.length;
          if (i > 0) for (var r = 0; r < i; r++) {
            var o = this._triggerArray[r], l = s.default.getSelectorFromElement(o);
            if (null !== l) a.default([].slice.call(document.querySelectorAll(l))).hasClass(h) || a.default(o).addClass(v).attr("aria-expanded", false);
          }
          this.setTransitioning(true);
          var u = function () {
            e.setTransitioning(false), a.default(e._element).removeClass(g).addClass(m).trigger(E);
          };
          this._element.style[n] = "";
          var c = s.default.getTransitionDurationFromElement(this._element);
          a.default(this._element).one(s.default.TRANSITION_END, u).emulateTransitionEnd(c);
        }
      }
    }, t.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, t.dispose = function () {
      a.default.removeData(this._element, c), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (e) {
      return (e = o({}, S, e)).toggle = Boolean(e.toggle), s.default.typeCheckConfig(l, e, k), e;
    }, t._getDimension = function () {
      return a.default(this._element).hasClass(y) ? y : b;
    }, t._getParent = function () {
      var t, n = this;
      s.default.isElement(this._config.parent) ? (t = this._config.parent, undefined !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', r = [].slice.call(t.querySelectorAll(i));
      return a.default(r).each(function (t, i) {
        n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (e, t) {
      var n = a.default(e).hasClass(h);
      t.length && a.default(t).toggleClass(v, !n).attr("aria-expanded", n);
    }, e._getTargetFromElement = function (e) {
      var t = s.default.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = a.default(this), i = n.data(c), r = o({}, S, n.data(), "object" == typeof t && t ? t : {});
        if (!i && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = false), i || (i = new e(this, r), n.data(c, i)), "string" == typeof t) {
          if (undefined === i[t]) throw new TypeError('No method named "' + t + '"');
          i[t]();
        }
      });
    }, (null && i(e.prototype, null), [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return S;
    }}] && i(e, [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return S;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return a.default(document).on(T, j, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var t = a.default(this), n = s.default.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(n));
    a.default(i).each(function () {
      var e = a.default(this), n = e.data(c) ? "toggle" : t.data();
      D._jQueryInterface.call(e, n);
    });
  }), a.default.fn[l] = D._jQueryInterface, a.default.fn[l].Constructor = D, a.default.fn[l].noConflict = function () {
    return a.default.fn[l] = p, D._jQueryInterface;
  }, D;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("popper.js"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "popper.js", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Dropdown = t(e.jQuery, e.Popper, e.Util);
}(this, function (e, t, n) {
  "use strict";
  function i(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function a() {
    return a = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, a.apply(this, arguments);
  }
  var s = i(e), l = i(t), u = i(n), c = "dropdown", f = "4.6.2", d = "bs.dropdown", p = "." + d, h = ".data-api", m = s.default.fn[c], g = 27, v = 32, y = 9, b = 38, _ = 40, w = 3, x = new RegExp(b + "|" + _ + "|" + g), E = "disabled", T = "show", C = "dropup", j = "dropright", S = "dropleft", k = "dropdown-menu-right", D = "position-static", A = "hide" + p, N = "hidden" + p, O = "show" + p, L = "shown" + p, I = "click" + p, q = "click" + p + h, P = "keydown" + p + h, H = "keyup" + p + h, R = '[data-toggle="dropdown"]', F = ".dropdown form", M = ".dropdown-menu", B = ".navbar-nav", W = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", U = "top-start", $ = "top-end", Q = "bottom-start", V = "bottom-end", X = "right-start", z = "left-start", Y = {offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null}, K = {offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)"}, G = function () {
    function e(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }
    var t = e.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !s.default(this._element).hasClass(E)) {
        var t = s.default(this._menu).hasClass(T);
        e._clearMenus(), t || this.show(true);
      }
    }, t.show = function (t) {
      if (undefined === t && (t = false), !(this._element.disabled || s.default(this._element).hasClass(E) || s.default(this._menu).hasClass(T))) {
        var n = {relatedTarget: this._element}, i = s.default.Event(O, n), r = e._getParentFromElement(this._element);
        if (s.default(r).trigger(i), !i.isDefaultPrevented()) {
          if (!this._inNavbar && t) {
            if (undefined === l.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var o = this._element;
            "parent" === this._config.reference ? o = r : u.default.isElement(this._config.reference) && (o = this._config.reference, undefined !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && s.default(r).addClass(D), this._popper = new l.default(o, this._menu, this._getPopperConfig());
          }
          "ontouchstart" in document.documentElement && 0 === s.default(r).closest(B).length && s.default(document.body).children().on("mouseover", null, s.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), s.default(this._menu).toggleClass(T), s.default(r).toggleClass(T).trigger(s.default.Event(L, n));
        }
      }
    }, t.hide = function () {
      if (!this._element.disabled && !s.default(this._element).hasClass(E) && s.default(this._menu).hasClass(T)) {
        var t = {relatedTarget: this._element}, n = s.default.Event(A, t), i = e._getParentFromElement(this._element);
        s.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), s.default(this._menu).toggleClass(T), s.default(i).toggleClass(T).trigger(s.default.Event(N, t)));
      }
    }, t.dispose = function () {
      s.default.removeData(this._element, d), s.default(this._element).off(p), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      s.default(this._element).on(I, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (e) {
      return e = a({}, this.constructor.Default, s.default(this._element).data(), e), u.default.typeCheckConfig(c, e, this.constructor.DefaultType), e;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = e._getParentFromElement(this._element);
        t && (this._menu = t.querySelector(M));
      }
      return this._menu;
    }, t._getPlacement = function () {
      var e = s.default(this._element.parentNode), t = Q;
      return e.hasClass(C) ? t = s.default(this._menu).hasClass(k) ? $ : U : e.hasClass(j) ? t = X : e.hasClass(S) ? t = z : s.default(this._menu).hasClass(k) && (t = V), t;
    }, t._detectNavbar = function () {
      return s.default(this._element).closest(".navbar").length > 0;
    }, t._getOffset = function () {
      var e = this, t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element)), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var e = {placement: this._getPlacement(), modifiers: {offset: this._getOffset(), flip: {enabled: this._config.flip}, preventOverflow: {boundariesElement: this._config.boundary}}};
      return "static" === this._config.display && (e.modifiers.applyStyle = {enabled: false}), a({}, e, this._config.popperConfig);
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = s.default(this).data(d);
        if (n || (n = new e(this, "object" == typeof t ? t : null), s.default(this).data(d, n)), "string" == typeof t) {
          if (undefined === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, e._clearMenus = function (t) {
      if (!t || t.which !== w && ("keyup" !== t.type || t.which === y)) for (var n = [].slice.call(document.querySelectorAll(R)), i = 0, r = n.length; i < r; i++) {
        var o = e._getParentFromElement(n[i]), a = s.default(n[i]).data(d), l = {relatedTarget: n[i]};
        if (t && "click" === t.type && (l.clickEvent = t), a) {
          var u = a._menu;
          if (s.default(o).hasClass(T) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && t.which === y) && s.default.contains(o, t.target))) {
            var c = s.default.Event(A, l);
            s.default(o).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && s.default(document.body).children().off("mouseover", null, s.default.noop), n[i].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), s.default(u).removeClass(T), s.default(o).removeClass(T).trigger(s.default.Event(N, l)));
          }
        }
      }
    }, e._getParentFromElement = function (e) {
      var t, n = u.default.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, e._dataApiKeydownHandler = function (t) {
      if (!(/input|textarea/i.test(t.target.tagName) ? t.which === v || t.which !== g && (t.which !== _ && t.which !== b || s.default(t.target).closest(M).length) : !x.test(t.which)) && !this.disabled && !s.default(this).hasClass(E)) {
        var n = e._getParentFromElement(this), i = s.default(n).hasClass(T);
        if (i || t.which !== g) {
          if (t.preventDefault(), t.stopPropagation(), !i || t.which === g || t.which === v) return t.which === g && s.default(n.querySelector(R)).trigger("focus"), void s.default(this).trigger("click");
          var r = [].slice.call(n.querySelectorAll(W)).filter(function (e) {
            return s.default(e).is(":visible");
          });
          if (0 !== r.length) {
            var o = r.indexOf(t.target);
            t.which === b && o > 0 && o--, t.which === _ && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
          }
        }
      }
    }, (null && r(e.prototype, null), [{key: "VERSION", get: function () {
      return f;
    }}, {key: "Default", get: function () {
      return Y;
    }}, {key: "DefaultType", get: function () {
      return K;
    }}] && r(e, [{key: "VERSION", get: function () {
      return f;
    }}, {key: "Default", get: function () {
      return Y;
    }}, {key: "DefaultType", get: function () {
      return K;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return s.default(document).on(P, R, G._dataApiKeydownHandler).on(P, M, G._dataApiKeydownHandler).on(q + " " + H, G._clearMenus).on(q, R, function (e) {
    e.preventDefault(), e.stopPropagation(), G._jQueryInterface.call(s.default(this), "toggle");
  }).on(q, F, function (e) {
    e.stopPropagation();
  }), s.default.fn[c] = G._jQueryInterface, s.default.fn[c].Constructor = G, s.default.fn[c].noConflict = function () {
    return s.default.fn[c] = m, G._jQueryInterface;
  }, G;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Modal = t(e.jQuery, e.Util);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function o() {
    return o = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, o.apply(this, arguments);
  }
  var a = n(e), s = n(t), l = "modal", u = "4.6.2", c = "bs.modal", f = "." + c, d = ".data-api", p = a.default.fn[l], h = 27, m = "modal-dialog-scrollable", g = "modal-scrollbar-measure", v = "modal-backdrop", y = "modal-open", b = "fade", _ = "show", w = "modal-static", x = "hide" + f, E = "hidePrevented" + f, T = "hidden" + f, C = "show" + f, j = "shown" + f, S = "focusin" + f, k = "resize" + f, D = "click.dismiss" + f, A = "keydown.dismiss" + f, N = "mouseup.dismiss" + f, O = "mousedown.dismiss" + f, L = "click" + f + d, I = ".modal-dialog", q = ".modal-body", P = '[data-toggle="modal"]', H = '[data-dismiss="modal"]', R = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", F = ".sticky-top", M = {backdrop: true, keyboard: true, focus: true, show: true}, B = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, W = function () {
    function e(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(I), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollbarWidth = 0;
    }
    var t = e.prototype;
    return t.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, t.show = function (e) {
      var t = this;
      if (!this._isShown && !this._isTransitioning) {
        var n = a.default.Event(C, {relatedTarget: e});
        a.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = true, a.default(this._element).hasClass(b) && (this._isTransitioning = true), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), a.default(this._element).on(D, H, function (e) {
          return t.hide(e);
        }), a.default(this._dialog).on(O, function () {
          a.default(t._element).one(N, function (e) {
            a.default(e.target).is(t._element) && (t._ignoreBackdropClick = true);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, t.hide = function (e) {
      var t = this;
      if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = a.default.Event(x);
        if (a.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = false;
          var i = a.default(this._element).hasClass(b);
          if (i && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), a.default(document).off(S), a.default(this._element).removeClass(_), a.default(this._element).off(D), a.default(this._dialog).off(O), i) {
            var r = s.default.getTransitionDurationFromElement(this._element);
            a.default(this._element).one(s.default.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return a.default(e).off(f);
      }), a.default(document).off(S), a.default.removeData(this._element, c), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (e) {
      return e = o({}, M, e), s.default.typeCheckConfig(l, e, B), e;
    }, t._triggerBackdropTransition = function () {
      var e = this, t = a.default.Event(E);
      if (a.default(this._element).trigger(t), !t.isDefaultPrevented()) {
        var n = this._element.scrollHeight > document.documentElement.clientHeight;
        n || (this._element.style.overflowY = "hidden"), this._element.classList.add(w);
        var i = s.default.getTransitionDurationFromElement(this._dialog);
        a.default(this._element).off(s.default.TRANSITION_END), a.default(this._element).one(s.default.TRANSITION_END, function () {
          e._element.classList.remove(w), n || a.default(e._element).one(s.default.TRANSITION_END, function () {
            e._element.style.overflowY = "";
          }).emulateTransitionEnd(e._element, i);
        }).emulateTransitionEnd(i), this._element.focus();
      }
    }, t._showElement = function (e) {
      var t = this, n = a.default(this._element).hasClass(b), i = this._dialog ? this._dialog.querySelector(q) : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), a.default(this._dialog).hasClass(m) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && s.default.reflow(this._element), a.default(this._element).addClass(_), this._config.focus && this._enforceFocus();
      var r = a.default.Event(j, {relatedTarget: e}), o = function () {
        t._config.focus && t._element.focus(), t._isTransitioning = false, a.default(t._element).trigger(r);
      };
      if (n) {
        var l = s.default.getTransitionDurationFromElement(this._dialog);
        a.default(this._dialog).one(s.default.TRANSITION_END, o).emulateTransitionEnd(l);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      a.default(document).off(S).on(S, function (t) {
        document !== t.target && e._element !== t.target && 0 === a.default(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown ? a.default(this._element).on(A, function (t) {
        e._config.keyboard && t.which === h ? (t.preventDefault(), e.hide()) : e._config.keyboard || t.which !== h || e._triggerBackdropTransition();
      }) : this._isShown || a.default(this._element).off(A);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? a.default(window).on(k, function (t) {
        return e.handleUpdate(t);
      }) : a.default(window).off(k);
    }, t._hideModal = function () {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._showBackdrop(function () {
        a.default(document.body).removeClass(y), e._resetAdjustments(), e._resetScrollbar(), a.default(e._element).trigger(T);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (a.default(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (e) {
      var t = this, n = a.default(this._element).hasClass(b) ? b : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = v, n && this._backdrop.classList.add(n), a.default(this._backdrop).appendTo(document.body), a.default(this._element).on(D, function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = false : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide());
        }), n && s.default.reflow(this._backdrop), a.default(this._backdrop).addClass(_), !e) return;
        if (!n) return void e();
        var i = s.default.getTransitionDurationFromElement(this._backdrop);
        a.default(this._backdrop).one(s.default.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        a.default(this._backdrop).removeClass(_);
        var r = function () {
          t._removeBackdrop(), e && e();
        };
        if (a.default(this._element).hasClass(b)) {
          var o = s.default.getTransitionDurationFromElement(this._backdrop);
          a.default(this._backdrop).one(s.default.TRANSITION_END, r).emulateTransitionEnd(o);
        } else t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {writable: false}), e;
      } else e && e();
    }, t._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var e = this;
      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(R)), n = [].slice.call(document.querySelectorAll(F));
        a.default(t).each(function (t, n) {
          var i = n.style.paddingRight, r = a.default(n).css("padding-right");
          a.default(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
        }), a.default(n).each(function (t, n) {
          var i = n.style.marginRight, r = a.default(n).css("margin-right");
          a.default(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
        });
        var i = document.body.style.paddingRight, r = a.default(document.body).css("padding-right");
        a.default(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }
      a.default(document.body).addClass(y);
    }, t._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(R));
      a.default(e).each(function (e, t) {
        var n = a.default(t).data("padding-right");
        a.default(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });
      var t = [].slice.call(document.querySelectorAll("" + F));
      a.default(t).each(function (e, t) {
        var n = a.default(t).data("margin-right");
        undefined !== n && a.default(t).css("margin-right", n).removeData("margin-right");
      });
      var n = a.default(document.body).data("padding-right");
      a.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = g, document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, e._jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = a.default(this).data(c), r = o({}, M, a.default(this).data(), "object" == typeof t && t ? t : {});
        if (i || (i = new e(this, r), a.default(this).data(c, i)), "string" == typeof t) {
          if (undefined === i[t]) throw new TypeError('No method named "' + t + '"');
          i[t](n);
        } else r.show && i.show(n);
      });
    }, (null && i(e.prototype, null), [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return M;
    }}] && i(e, [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return M;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return a.default(document).on(L, P, function (e) {
    var t, n = this, i = s.default.getSelectorFromElement(this);
    i && (t = document.querySelector(i));
    var r = a.default(t).data(c) ? "toggle" : o({}, a.default(t).data(), a.default(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var l = a.default(t).one(C, function (e) {
      e.isDefaultPrevented() || l.one(T, function () {
        a.default(n).is(":visible") && n.focus();
      });
    });
    W._jQueryInterface.call(a.default(t), r, this);
  }), a.default.fn[l] = W._jQueryInterface, a.default.fn[l].Constructor = W, a.default.fn[l].noConflict = function () {
    return a.default.fn[l] = p, W._jQueryInterface;
  }, W;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("popper.js"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "popper.js", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Tooltip = t(e.jQuery, e.Popper, e.Util);
}(this, function (e, t, n) {
  "use strict";
  function i(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function a() {
    return a = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, a.apply(this, arguments);
  }
  function s(e, t) {
    var n = e.nodeName.toLowerCase();
    if (-1 !== t.indexOf(n)) return -1 === d.indexOf(n) || Boolean(h.test(e.nodeValue) || m.test(e.nodeValue));
    for (var i = t.filter(function (e) {
      return e instanceof RegExp;
    }), r = 0, o = i.length; r < o; r++) if (i[r].test(n)) return true;
    return false;
  }
  function l(e, t, n) {
    if (0 === e.length) return e;
    if (n && "function" == typeof n) return n(e);
    for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), a = function (e) {
      var n = o[e], i = n.nodeName.toLowerCase();
      if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
      var a = [].slice.call(n.attributes), l = [].concat(t["*"] || [], t[i] || []);
      a.forEach(function (e) {
        s(e, l) || n.removeAttribute(e.nodeName);
      });
    }, l = 0, u = o.length; l < u; l++) a(l);
    return i.body.innerHTML;
  }
  var u = i(e), c = i(t), f = i(n), d = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], p = {"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: []}, h = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, m = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, g = "tooltip", v = "4.6.2", y = "bs.tooltip", b = "." + y, _ = u.default.fn[g], w = "bs-tooltip", x = new RegExp("(^|\\s)" + w + "\\S+", "g"), E = ["sanitize", "whiteList", "sanitizeFn"], T = "fade", C = "show", j = "show", S = "out", k = ".tooltip-inner", D = ".arrow", A = "hover", N = "focus", O = "click", L = "manual", I = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, q = {animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: true, sanitizeFn: null, whiteList: p, popperConfig: null}, P = {animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)"}, H = {HIDE: "hide" + b, HIDDEN: "hidden" + b, SHOW: "show" + b, SHOWN: "shown" + b, INSERTED: "inserted" + b, CLICK: "click" + b, FOCUSIN: "focusin" + b, FOCUSOUT: "focusout" + b, MOUSEENTER: "mouseenter" + b, MOUSELEAVE: "mouseleave" + b}, R = function () {
    function e(e, t) {
      if (undefined === c.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }
    var t = e.prototype;
    return t.enable = function () {
      this._isEnabled = true;
    }, t.disable = function () {
      this._isEnabled = false;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY, n = u.default(e.currentTarget).data(t);
        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), u.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (u.default(this.getTipElement()).hasClass(C)) return void this._leave(null, this);
        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), u.default.removeData(this.element, this.constructor.DATA_KEY), u.default(this.element).off(this.constructor.EVENT_KEY), u.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && u.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === u.default(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = u.default.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        u.default(this.element).trigger(t);
        var n = f.default.findShadowRoot(this.element), i = u.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !i) return;
        var r = this.getTipElement(), o = f.default.getUID(this.constructor.NAME);
        r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && u.default(r).addClass(T);
        var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement, s = this._getAttachment(a);
        this.addAttachmentClass(s);
        var l = this._getContainer();
        u.default(r).data(this.constructor.DATA_KEY, this), u.default.contains(this.element.ownerDocument.documentElement, this.tip) || u.default(r).appendTo(l), u.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c.default(this.element, r, this._getPopperConfig(s)), u.default(r).addClass(C), u.default(r).addClass(this.config.customClass), "ontouchstart" in document.documentElement && u.default(document.body).children().on("mouseover", null, u.default.noop);
        var d = function () {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, u.default(e.element).trigger(e.constructor.Event.SHOWN), t === S && e._leave(null, e);
        };
        if (u.default(this.tip).hasClass(T)) {
          var p = f.default.getTransitionDurationFromElement(this.tip);
          u.default(this.tip).one(f.default.TRANSITION_END, d).emulateTransitionEnd(p);
        } else d();
      }
    }, t.hide = function (e) {
      var t = this, n = this.getTipElement(), i = u.default.Event(this.constructor.Event.HIDE), r = function () {
        t._hoverState !== j && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), u.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e();
      };
      if (u.default(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (u.default(n).removeClass(C), "ontouchstart" in document.documentElement && u.default(document.body).children().off("mouseover", null, u.default.noop), this._activeTrigger[O] = false, this._activeTrigger[N] = false, this._activeTrigger[A] = false, u.default(this.tip).hasClass(T)) {
          var o = f.default.getTransitionDurationFromElement(n);
          u.default(n).one(f.default.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (e) {
      u.default(this.getTipElement()).addClass(w + "-" + e);
    }, t.getTipElement = function () {
      return this.tip = this.tip || u.default(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(u.default(e.querySelectorAll(k)), this.getTitle()), u.default(e).removeClass(T + " " + C);
    }, t.setElementContent = function (e, t) {
      "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = l(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? u.default(t).parent().is(e) || e.empty().append(t) : e.text(u.default(t).text());
    }, t.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, t._getPopperConfig = function (e) {
      var t = this;
      return a({}, {placement: e, modifiers: {offset: this._getOffset(), flip: {behavior: this.config.fallbackPlacement}, arrow: {element: D}, preventOverflow: {boundariesElement: this.config.boundary}}, onCreate: function (e) {
        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
      }, onUpdate: function (e) {
        return t._handlePopperPlacementChange(e);
      }}, this.config.popperConfig);
    }, t._getOffset = function () {
      var e = this, t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element)), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return false === this.config.container ? document.body : f.default.isElement(this.config.container) ? u.default(this.config.container) : u.default(document).find(this.config.container);
    }, t._getAttachment = function (e) {
      return I[e.toUpperCase()];
    }, t._setListeners = function () {
      var e = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) u.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
          return e.toggle(t);
        }); else if (t !== L) {
          var n = t === A ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN, i = t === A ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
          u.default(e.element).on(n, e.config.selector, function (t) {
            return e._enter(t);
          }).on(i, e.config.selector, function (t) {
            return e._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        e.element && e.hide();
      }, u.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {trigger: "manual", selector: ""}) : this._fixTitle();
    }, t._fixTitle = function () {
      var e = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || u.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), u.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? N : A] = true), u.default(t.getTipElement()).hasClass(C) || t._hoverState === j ? t._hoverState = j : (clearTimeout(t._timeout), t._hoverState = j, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        t._hoverState === j && t.show();
      }, t.config.delay.show) : t.show());
    }, t._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || u.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), u.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? N : A] = false), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = S, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        t._hoverState === S && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, t._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) if (this._activeTrigger[e]) return true;
      return false;
    }, t._getConfig = function (e) {
      var t = u.default(this.element).data();
      return Object.keys(t).forEach(function (e) {
        -1 !== E.indexOf(e) && delete t[e];
      }), "number" == typeof (e = a({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {show: e.delay, hide: e.delay}), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), f.default.typeCheckConfig(g, e, this.constructor.DefaultType), e.sanitize && (e.template = l(e.template, e.whiteList, e.sanitizeFn)), e;
    }, t._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      return e;
    }, t._cleanTipClass = function () {
      var e = u.default(this.getTipElement()), t = e.attr("class").match(x);
      null !== t && t.length && e.removeClass(t.join(""));
    }, t._handlePopperPlacementChange = function (e) {
      this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, t._fixTransition = function () {
      var e = this.getTipElement(), t = this.config.animation;
      null === e.getAttribute("x-placement") && (u.default(e).removeClass(T), this.config.animation = false, this.hide(), this.show(), this.config.animation = t);
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = u.default(this), i = n.data(y), r = "object" == typeof t && t;
        if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), n.data(y, i)), "string" == typeof t)) {
          if (undefined === i[t]) throw new TypeError('No method named "' + t + '"');
          i[t]();
        }
      });
    }, (null && r(e.prototype, null), [{key: "VERSION", get: function () {
      return v;
    }}, {key: "Default", get: function () {
      return q;
    }}, {key: "NAME", get: function () {
      return g;
    }}, {key: "DATA_KEY", get: function () {
      return y;
    }}, {key: "Event", get: function () {
      return H;
    }}, {key: "EVENT_KEY", get: function () {
      return b;
    }}, {key: "DefaultType", get: function () {
      return P;
    }}] && r(e, [{key: "VERSION", get: function () {
      return v;
    }}, {key: "Default", get: function () {
      return q;
    }}, {key: "NAME", get: function () {
      return g;
    }}, {key: "DATA_KEY", get: function () {
      return y;
    }}, {key: "Event", get: function () {
      return H;
    }}, {key: "EVENT_KEY", get: function () {
      return b;
    }}, {key: "DefaultType", get: function () {
      return P;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return u.default.fn[g] = R._jQueryInterface, u.default.fn[g].Constructor = R, u.default.fn[g].noConflict = function () {
    return u.default.fn[g] = _, R._jQueryInterface;
  }, R;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./tooltip.js")) : "function" == typeof define && define.amd ? define(["jquery", "./tooltip"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Popover = t(e.jQuery, e.Tooltip);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function o() {
    return o = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, o.apply(this, arguments);
  }
  function a(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, s(e, t);
  }
  function s(e, t) {
    return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, s(e, t);
  }
  var l = n(e), u = n(t), c = "popover", f = "4.6.2", d = "bs.popover", p = "." + d, h = l.default.fn[c], m = "bs-popover", g = new RegExp("(^|\\s)" + m + "\\S+", "g"), v = "fade", y = "show", b = ".popover-header", _ = ".popover-body", w = o({}, u.default.Default, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}), x = o({}, u.default.DefaultType, {content: "(string|element|function)"}), E = {HIDE: "hide" + p, HIDDEN: "hidden" + p, SHOW: "show" + p, SHOWN: "shown" + p, INSERTED: "inserted" + p, CLICK: "click" + p, FOCUSIN: "focusin" + p, FOCUSOUT: "focusout" + p, MOUSEENTER: "mouseenter" + p, MOUSELEAVE: "mouseleave" + p}, T = function (e) {
    a(t, e);
    var n = t.prototype;
    return n.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, n.addAttachmentClass = function (e) {
      l.default(this.getTipElement()).addClass(m + "-" + e);
    }, n.getTipElement = function () {
      return this.tip = this.tip || l.default(this.config.template)[0], this.tip;
    }, n.setContent = function () {
      var e = l.default(this.getTipElement());
      this.setElementContent(e.find(b), this.getTitle());
      var t = this._getContent();
      "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(_), t), e.removeClass(v + " " + y);
    }, n._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, n._cleanTipClass = function () {
      var e = l.default(this.getTipElement()), t = e.attr("class").match(g);
      null !== t && t.length > 0 && e.removeClass(t.join(""));
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = l.default(this).data(d), i = "object" == typeof e ? e : null;
        if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i), l.default(this).data(d, n)), "string" == typeof e)) {
          if (undefined === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, (null && i(t.prototype, null), [{key: "VERSION", get: function () {
      return f;
    }}, {key: "Default", get: function () {
      return w;
    }}, {key: "NAME", get: function () {
      return c;
    }}, {key: "DATA_KEY", get: function () {
      return d;
    }}, {key: "Event", get: function () {
      return E;
    }}, {key: "EVENT_KEY", get: function () {
      return p;
    }}, {key: "DefaultType", get: function () {
      return x;
    }}] && i(t, [{key: "VERSION", get: function () {
      return f;
    }}, {key: "Default", get: function () {
      return w;
    }}, {key: "NAME", get: function () {
      return c;
    }}, {key: "DATA_KEY", get: function () {
      return d;
    }}, {key: "Event", get: function () {
      return E;
    }}, {key: "EVENT_KEY", get: function () {
      return p;
    }}, {key: "DefaultType", get: function () {
      return x;
    }}]), Object.defineProperty(t, "prototype", {writable: false}), t), t;
  }(u.default);
  return l.default.fn[c] = T._jQueryInterface, l.default.fn[c].Constructor = T, l.default.fn[c].noConflict = function () {
    return l.default.fn[c] = h, T._jQueryInterface;
  }, T;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).ScrollSpy = t(e.jQuery, e.Util);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function o() {
    return o = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, o.apply(this, arguments);
  }
  var a = n(e), s = n(t), l = "scrollspy", u = "4.6.2", c = "bs.scrollspy", f = "." + c, d = ".data-api", p = a.default.fn[l], h = "dropdown-item", m = "active", g = "activate" + f, v = "scroll" + f, y = "load" + f + d, b = "offset", _ = "position", w = '[data-spy="scroll"]', x = ".nav, .list-group", E = ".nav-link", T = ".nav-item", C = ".list-group-item", j = ".dropdown", S = ".dropdown-item", k = ".dropdown-toggle", D = {offset: 10, method: "auto", target: ""}, A = {offset: "number", method: "string", target: "(string|element)"}, N = function () {
    function e(e, t) {
      var n = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + E + "," + this._config.target + " " + C + "," + this._config.target + " " + S, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a.default(this._scrollElement).on(v, function (e) {
        return n._process(e);
      }), this.refresh(), this._process();
    }
    var t = e.prototype;
    return t.refresh = function () {
      var e = this, t = this._scrollElement === this._scrollElement.window ? b : _, n = "auto" === this._config.method ? t : this._config.method, i = n === _ ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t, r = s.default.getSelectorFromElement(e);
        if (r && (t = document.querySelector(r)), t) {
          var o = t.getBoundingClientRect();
          if (o.width || o.height) return [a.default(t)[n]().top + i, r];
        }
        return null;
      }).filter(Boolean).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      a.default.removeData(this._element, c), a.default(this._scrollElement).off(f), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (e) {
      if ("string" != typeof (e = o({}, D, "object" == typeof e && e ? e : {})).target && s.default.isElement(e.target)) {
        var t = a.default(e.target).attr("id");
        t || (t = s.default.getUID(l), a.default(e.target).attr("id", t)), e.target = "#" + t;
      }
      return s.default.typeCheckConfig(l, e, A), e;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(), n = this._config.offset + t - this._getOffsetHeight();
      if (this._scrollHeight !== t && this.refresh(), e >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (undefined === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();
      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }), n = a.default([].slice.call(document.querySelectorAll(t.join(","))));
      n.hasClass(h) ? (n.closest(j).find(k).addClass(m), n.addClass(m)) : (n.addClass(m), n.parents(x).prev(E + ", " + C).addClass(m), n.parents(x).prev(T).children(E).addClass(m)), a.default(this._scrollElement).trigger(g, {relatedTarget: e});
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
        return e.classList.contains(m);
      }).forEach(function (e) {
        return e.classList.remove(m);
      });
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = a.default(this).data(c);
        if (n || (n = new e(this, "object" == typeof t && t), a.default(this).data(c, n)), "string" == typeof t) {
          if (undefined === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, (null && i(e.prototype, null), [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return D;
    }}] && i(e, [{key: "VERSION", get: function () {
      return u;
    }}, {key: "Default", get: function () {
      return D;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return a.default(window).on(y, function () {
    for (var e = [].slice.call(document.querySelectorAll(w)), t = e.length; t--;) {
      var n = a.default(e[t]);
      N._jQueryInterface.call(n, n.data());
    }
  }), a.default.fn[l] = N._jQueryInterface, a.default.fn[l].Constructor = N, a.default.fn[l].noConflict = function () {
    return a.default.fn[l] = p, N._jQueryInterface;
  }, N;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Tab = t(e.jQuery, e.Util);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  var o = n(e), a = n(t), s = "tab", l = "4.6.2", u = "bs.tab", c = "." + u, f = ".data-api", d = o.default.fn[s], p = "dropdown-menu", h = "active", m = "disabled", g = "fade", v = "show", y = "hide" + c, b = "hidden" + c, _ = "show" + c, w = "shown" + c, x = "click" + c + f, E = ".dropdown", T = ".nav, .list-group", C = ".active", j = "> li > .active", S = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', k = ".dropdown-toggle", D = "> .dropdown-menu .active", A = function () {
    function e(e) {
      this._element = e;
    }
    var t = e.prototype;
    return t.show = function () {
      var e = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass(h) || o.default(this._element).hasClass(m) || this._element.hasAttribute("disabled"))) {
        var t, n, i = o.default(this._element).closest(T)[0], r = a.default.getSelectorFromElement(this._element);
        if (i) {
          var s = "UL" === i.nodeName || "OL" === i.nodeName ? j : C;
          n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1];
        }
        var l = o.default.Event(y, {relatedTarget: this._element}), u = o.default.Event(_, {relatedTarget: n});
        if (n && o.default(n).trigger(l), o.default(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
          r && (t = document.querySelector(r)), this._activate(this._element, i);
          var c = function () {
            var t = o.default.Event(b, {relatedTarget: e._element}), i = o.default.Event(w, {relatedTarget: n});
            o.default(n).trigger(t), o.default(e._element).trigger(i);
          };
          t ? this._activate(t, t.parentNode, c) : c();
        }
      }
    }, t.dispose = function () {
      o.default.removeData(this._element, u), this._element = null;
    }, t._activate = function (e, t, n) {
      var i = this, r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? o.default(t).children(C) : o.default(t).find(j))[0], s = n && r && o.default(r).hasClass(g);
      if (r && s) {
        var u = a.default.getTransitionDurationFromElement(r);
        o.default(r).removeClass(v).one(a.default.TRANSITION_END, l).emulateTransitionEnd(u);
      } else i._transitionComplete(e, r, n);
    }, t._transitionComplete = function (e, t, n) {
      if (t) {
        o.default(t).removeClass(h);
        var i = o.default(t.parentNode).find(D)[0];
        i && o.default(i).removeClass(h), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", false);
      }
      o.default(e).addClass(h), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", true), a.default.reflow(e), e.classList.contains(g) && e.classList.add(v);
      var r = e.parentNode;
      if (r && "LI" === r.nodeName && (r = r.parentNode), r && o.default(r).hasClass(p)) {
        var s = o.default(e).closest(E)[0];
        if (s) {
          var l = [].slice.call(s.querySelectorAll(k));
          o.default(l).addClass(h);
        }
        e.setAttribute("aria-expanded", true);
      }
      n && n();
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this), i = n.data(u);
        if (i || (i = new e(this), n.data(u, i)), "string" == typeof t) {
          if (undefined === i[t]) throw new TypeError('No method named "' + t + '"');
          i[t]();
        }
      });
    }, (null && i(e.prototype, null), [{key: "VERSION", get: function () {
      return l;
    }}] && i(e, [{key: "VERSION", get: function () {
      return l;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return o.default(document).on(x, S, function (e) {
    e.preventDefault(), A._jQueryInterface.call(o.default(this), "show");
  }), o.default.fn[s] = A._jQueryInterface, o.default.fn[s].Constructor = A, o.default.fn[s].noConflict = function () {
    return o.default.fn[s] = d, A._jQueryInterface;
  }, A;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Toast = t(e.jQuery, e.Util);
}(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {default: e};
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  function o() {
    return o = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }, o.apply(this, arguments);
  }
  var a = n(e), s = n(t), l = "toast", u = "4.6.2", c = "bs.toast", f = "." + c, d = a.default.fn[l], p = "fade", h = "hide", m = "show", g = "showing", v = "click.dismiss" + f, y = "hide" + f, b = "hidden" + f, _ = "show" + f, w = "shown" + f, x = '[data-dismiss="toast"]', E = {animation: true, autohide: true, delay: 500}, T = {animation: "boolean", autohide: "boolean", delay: "number"}, C = function () {
    function e(e, t) {
      this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
    }
    var t = e.prototype;
    return t.show = function () {
      var e = this, t = a.default.Event(_);
      if (a.default(this._element).trigger(t), !t.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add(p);
        var n = function () {
          e._element.classList.remove(g), e._element.classList.add(m), a.default(e._element).trigger(w), e._config.autohide && (e._timeout = setTimeout(function () {
            e.hide();
          }, e._config.delay));
        };
        if (this._element.classList.remove(h), s.default.reflow(this._element), this._element.classList.add(g), this._config.animation) {
          var i = s.default.getTransitionDurationFromElement(this._element);
          a.default(this._element).one(s.default.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, t.hide = function () {
      if (this._element.classList.contains(m)) {
        var e = a.default.Event(y);
        a.default(this._element).trigger(e), e.isDefaultPrevented() || this._close();
      }
    }, t.dispose = function () {
      this._clearTimeout(), this._element.classList.contains(m) && this._element.classList.remove(m), a.default(this._element).off(v), a.default.removeData(this._element, c), this._element = null, this._config = null;
    }, t._getConfig = function (e) {
      return e = o({}, E, a.default(this._element).data(), "object" == typeof e && e ? e : {}), s.default.typeCheckConfig(l, e, this.constructor.DefaultType), e;
    }, t._setListeners = function () {
      var e = this;
      a.default(this._element).on(v, x, function () {
        return e.hide();
      });
    }, t._close = function () {
      var e = this, t = function () {
        e._element.classList.add(h), a.default(e._element).trigger(b);
      };
      if (this._element.classList.remove(m), this._config.animation) {
        var n = s.default.getTransitionDurationFromElement(this._element);
        a.default(this._element).one(s.default.TRANSITION_END, t).emulateTransitionEnd(n);
      } else t();
    }, t._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = a.default(this), i = n.data(c);
        if (i || (i = new e(this, "object" == typeof t && t), n.data(c, i)), "string" == typeof t) {
          if (undefined === i[t]) throw new TypeError('No method named "' + t + '"');
          i[t](this);
        }
      });
    }, (null && i(e.prototype, null), [{key: "VERSION", get: function () {
      return u;
    }}, {key: "DefaultType", get: function () {
      return T;
    }}, {key: "Default", get: function () {
      return E;
    }}] && i(e, [{key: "VERSION", get: function () {
      return u;
    }}, {key: "DefaultType", get: function () {
      return T;
    }}, {key: "Default", get: function () {
      return E;
    }}]), Object.defineProperty(e, "prototype", {writable: false}), e), e;
  }();
  return a.default.fn[l] = C._jQueryInterface, a.default.fn[l].Constructor = C, a.default.fn[l].noConflict = function () {
    return a.default.fn[l] = d, C._jQueryInterface;
  }, C;
}), $(document).ready(() => {
  "undefined" != typeof analytics && (segmentUtils.trackPageView(), segmentUtils.setupButtonClickTracking());
});
const segmentUtils = {_commonProps: null, getCommonProperties: async () => (segmentUtils._commonProps || (segmentUtils._commonProps = {}, segmentUtils.assignDataSessionID(segmentUtils._commonProps), segmentUtils.assignDeviceID(segmentUtils._commonProps), await segmentUtils.assignHasWebcam(segmentUtils._commonProps), segmentUtils.assignPasswordLengthConstraints(segmentUtils._commonProps)), segmentUtils._commonProps), assignDataSessionID: e => {
  const t = getCookie("data_session_id");
  t && (e.data_session_id = t);
}, assignDeviceID: e => {
  const t = getCookie("device_id");
  t && (e.device_id = t);
}, assignPasswordLengthConstraints: e => {
  let t = Array.from(document.querySelectorAll("input[name*='password']"));
  if (!t.length) return;
  let n = Math.max(t.map(e => e.dataset.maxlength)), i = Math.min(t.map(e => e.dataset.minlength));
  Number.isFinite(n) && (e.max_password_length = n), Number.isFinite(i) && (e.min_password_length = i);
}, assignHasWebcam: async e => {
  let t = navigator.mediaDevices;
  if (!t || !t.enumerateDevices) return false;
  let n = await t.enumerateDevices();
  e.has_webcam = n.some(e => "videoinput" === e.kind);
}, trackPageView: async () => {
  let e = Object.assign({}, await segmentUtils.getCommonProperties());
  analytics.page(null, e);
}, setupButtonClickTracking: () => {
  document.querySelectorAll('[id][data-event-type="button-clicked"]').forEach(async e => {
    let t = Object.assign({button_identifer: e.id, button_text: e.innerText.trim() || e.ariaLabel || e.value, page_path: window.location.pathname}, await segmentUtils.getCommonProperties());
    analytics.trackLink(e, "Button Clicked", t);
  });
}};
window.getCookie = function (e) {
  const t = new RegExp(`(^| )${e}=([^;]+)`), n = document.cookie.match(t);
  if (n) return n[2];
}, $(document).ready(() => {
  const e = $(".js-password-input").first(), t = $("#js-show-password");
  t && t.click(function () {
    const t = $("#js-password-show-icon").first(), n = $("#js-password-show-text").first();
    "password" === e.first().attr("type") ? (e.first().attr("type", "text"), t.get(0).classList.replace("fa-eye", "fa-eye-slash"), n.first().text("Hide")) : (e.first().attr("type", "password"), t.get(0).classList.replace("fa-eye-slash", "fa-eye"), n.text("Show"));
  });
}), $(document).ready(() => {
  function e(e) {
    window.postMessage(JSON.stringify({type: "OPEN_URL_IN_BROWSER", payload: e}), "*");
  }
  function n() {
    const e = parseInt($("body").data("native-app-version"), 10);
    return NaN !== e && e >= 2;
  }
  function r() {
    return $(".leave-app").removeClass("hidden"), new Promise(function (e, t) {
      $(".js-game-leave-button").click(() => {
        e();
      }), $(".js-game-stay-button").click(() => {
        $("body").hasClass("native-app");
      });
    });
  }
  function o(t, n) {
    r().finally(() => $(".leave-app").addClass("hidden")).then(() => {
      t.dispatchEvent(new Event("acceptExternalNavigation")), "nativeApp" === n ? e(t.href) : window.location.href = t.href;
    }, () => {});
  }
  const a = document.getElementById("js-trying-to-play-game-close");
  a && (a.onclick = function () {
    document.getElementById("js-trying-to-play-game").remove();
  }), $("body").hasClass("native-app") && !n() && $("body").on("click", "a", e => {
    new URL(e.currentTarget.href, new URL(window.location)).origin !== new URL(window.location).origin && (e.preventDefault(), o(e.currentTarget, "nativeApp"));
  }), $(":submit").click(() => {
    $(".disable-on-submit").addClass("half-transparent");
  });
});
const isValidAndAccessibleUrl = e => {
  try {
    return new URL(e.location.href), e.location.href;
  } catch (e) {
    return false;
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementsByClassName("google-sso-link with-popup")[0];
  if (e) {
    const n = e.getAttribute("href");
    function t() {
      hideEdLoginHelper();
    }
    e.removeAttribute("href"), e.addEventListener("click", function (e) {
      e.preventDefault();
      const i = 600, r = 700, o = window.innerWidth / 2 - i / 2, a = window.innerHeight / 2 - r / 2 + 50, s = window.open(n, "Google Sign Up", `width=${i},height=${r},top=${a},left=${o}`), l = setInterval(() => {
        try {
          const e = isValidAndAccessibleUrl(s);
          if (false === e) return;
          if (new URL(e).hostname.includes("prodigygame")) {
            clearInterval(l);
            const e = s.location.href;
            s.close(), window.location.href = e;
          }
        } catch (e) {
          Sentry.captureException(e);
        }
      }, 200), u = setInterval(function () {
        s && !s.closed || (clearInterval(u), t());
      }, 500);
      setTimeout(function () {
        s && !s.closed && showEdLoginHelper();
      }, 15e3);
    });
  }
});
