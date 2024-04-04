//import LocomotiveScroll from "../../node_modules/locomotive-scroll";

// import { gsap } from "../../node_modules/gsap/all";

// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";
// import { ScrollToPlugin } from "../../node_modules/gsap/ScrollToPlugin";
// import { Observer } from "../../node_modules/gsap/Observer";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(Observer);

// gsap.registe;

function init() {
  locomotiveScrollScript.init();
  locomotiveScroll.init();
  headerScroll.init();
  pageCheck.init();
  // imageParallax.init();
}

var locomotiveScrollScript = {
  init: function () {
    !(function (t, e) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : ((t || self).LocomotiveScroll = e());
    })(this, function () {
      function t() {
        return (
          (t = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                }
                return t;
              }),
          t.apply(this, arguments)
        );
      }
      function e(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s;
      }
      function i(t, i) {
        var s =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (s) return (s = s.call(t)).next.bind(s);
        if (
          Array.isArray(t) ||
          (s = (function (t, i) {
            if (t) {
              if ("string" == typeof t) return e(t, i);
              var s = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === s && t.constructor && (s = t.constructor.name),
                "Map" === s || "Set" === s
                  ? Array.from(t)
                  : "Arguments" === s ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                  ? e(t, i)
                  : void 0
              );
            }
          })(t)) ||
          (i && t && "number" == typeof t.length)
        ) {
          s && (t = s);
          var n = 0;
          return function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                }
                return t;
              }),
          s.apply(this, arguments)
        );
      }
      function n(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      class r {
        advance(t) {
          var e;
          if (!this.isRunning) return;
          let i = !1;
          if (this.lerp)
            (this.value =
              ((s = this.value),
              (r = this.to),
              (1 - (o = 1 - Math.exp(-60 * this.lerp * t))) * s + o * r)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (i = !0));
          else {
            this.currentTime += t;
            const e = n(0, this.currentTime / this.duration, 1);
            i = e >= 1;
            const s = i ? 1 : this.easing(e);
            this.value = this.from + (this.to - this.from) * s;
          }
          var s, r, o;
          null == (e = this.onUpdate) || e.call(this, this.value, i),
            i && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          t,
          e,
          {
            lerp: i = 0.1,
            duration: s = 1,
            easing: n = (t) => t,
            onStart: r,
            onUpdate: o,
          }
        ) {
          (this.from = this.value = t),
            (this.to = e),
            (this.lerp = i),
            (this.duration = s),
            (this.easing = n),
            (this.currentTime = 0),
            (this.isRunning = !0),
            null == r || r(),
            (this.onUpdate = o);
        }
      }
      class o {
        constructor({ wrapper: t, content: e, autoResize: i = !0 } = {}) {
          if (
            ((this.resize = () => {
              this.onWrapperResize(), this.onContentResize();
            }),
            (this.onWrapperResize = () => {
              this.wrapper === window
                ? ((this.width = window.innerWidth),
                  (this.height = window.innerHeight))
                : ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              (this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth);
            }),
            (this.wrapper = t),
            (this.content = e),
            i)
          ) {
            const t = (function (t, e) {
              let i;
              return function () {
                let e = arguments,
                  s = this;
                clearTimeout(i),
                  (i = setTimeout(function () {
                    t.apply(s, e);
                  }, 250));
              };
            })(this.resize);
            this.wrapper !== window &&
              ((this.wrapperResizeObserver = new ResizeObserver(t)),
              this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(t)),
              this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        destroy() {
          var t, e;
          null == (t = this.wrapperResizeObserver) || t.disconnect(),
            null == (e = this.contentResizeObserver) || e.disconnect();
        }
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class l {
        constructor() {
          this.events = {};
        }
        emit(t, ...e) {
          let i = this.events[t] || [];
          for (let t = 0, s = i.length; t < s; t++) i[t](...e);
        }
        on(t, e) {
          var i;
          return (
            (null == (i = this.events[t]) ? void 0 : i.push(e)) ||
              (this.events[t] = [e]),
            () => {
              var i;
              this.events[t] =
                null == (i = this.events[t])
                  ? void 0
                  : i.filter((t) => e !== t);
            }
          );
        }
        off(t, e) {
          var i;
          this.events[t] =
            null == (i = this.events[t]) ? void 0 : i.filter((t) => e !== t);
        }
        destroy() {
          this.events = {};
        }
      }
      class a {
        constructor(
          t,
          {
            wheelMultiplier: e = 1,
            touchMultiplier: i = 2,
            normalizeWheel: s = !1,
          }
        ) {
          (this.onTouchStart = (t) => {
            const { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t;
            (this.touchStart.x = e),
              (this.touchStart.y = i),
              (this.lastDelta = { x: 0, y: 0 });
          }),
            (this.onTouchMove = (t) => {
              const { clientX: e, clientY: i } = t.targetTouches
                  ? t.targetTouches[0]
                  : t,
                s = -(e - this.touchStart.x) * this.touchMultiplier,
                n = -(i - this.touchStart.y) * this.touchMultiplier;
              (this.touchStart.x = e),
                (this.touchStart.y = i),
                (this.lastDelta = { x: s, y: n }),
                this.emitter.emit("scroll", { deltaX: s, deltaY: n, event: t });
            }),
            (this.onTouchEnd = (t) => {
              this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t,
              });
            }),
            (this.onWheel = (t) => {
              let { deltaX: e, deltaY: i } = t;
              this.normalizeWheel &&
                ((e = n(-100, e, 100)), (i = n(-100, i, 100))),
                (e *= this.wheelMultiplier),
                (i *= this.wheelMultiplier),
                this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
            }),
            (this.element = t),
            (this.wheelMultiplier = e),
            (this.touchMultiplier = i),
            (this.normalizeWheel = s),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new l()),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        destroy() {
          this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
      }
      class h {
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          wheelEventsTarget: i = t,
          eventsTarget: n = i,
          smoothWheel: h = !0,
          smoothTouch: c = !1,
          syncTouch: u = !1,
          syncTouchLerp: d = 0.1,
          __iosNoInertiaSyncTouchLerp: v = 0.4,
          touchInertiaMultiplier: m = 35,
          duration: p,
          easing: f = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: g = !p && 0.1,
          infinite: b = !1,
          orientation: S = "vertical",
          gestureOrientation: E = "vertical",
          touchMultiplier: I = 1,
          wheelMultiplier: w = 1,
          normalizeWheel: O = !1,
          autoResize: y = !0,
        } = {}) {
          (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
            if (i.ctrlKey) return;
            const n = i.type.includes("touch"),
              r = i.type.includes("wheel");
            if (
              ("both" === this.options.gestureOrientation &&
                0 === t &&
                0 === e) ||
              ("vertical" === this.options.gestureOrientation && 0 === e) ||
              ("horizontal" === this.options.gestureOrientation && 0 === t) ||
              (n &&
                "vertical" === this.options.gestureOrientation &&
                0 === this.scroll &&
                !this.options.infinite &&
                e <= 0)
            )
              return;
            let o = i.composedPath();
            if (
              ((o = o.slice(0, o.indexOf(this.rootElement))),
              o.find((t) => {
                var e;
                return (
                  (null == t.hasAttribute
                    ? void 0
                    : t.hasAttribute("data-lenis-prevent")) ||
                  (n &&
                    (null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent-touch"))) ||
                  (r &&
                    (null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent-wheel"))) ||
                  (null == (e = t.classList) ? void 0 : e.contains("lenis"))
                );
              }))
            )
              return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (
              ((this.isSmooth =
                ((this.options.smoothTouch || this.options.syncTouch) && n) ||
                (this.options.smoothWheel && r)),
              !this.isSmooth)
            )
              return (this.isScrolling = !1), void this.animate.stop();
            i.preventDefault();
            let l = e;
            "both" === this.options.gestureOrientation
              ? (l = Math.abs(e) > Math.abs(t) ? e : t)
              : "horizontal" === this.options.gestureOrientation && (l = t);
            const a = n && this.options.syncTouch,
              h = n && "touchend" === i.type && Math.abs(l) > 1;
            h && (l = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(
                this.targetScroll + l,
                s(
                  { programmatic: !1 },
                  a && {
                    lerp: h
                      ? this.syncTouchLerp
                      : this.options.__iosNoInertiaSyncTouchLerp,
                  }
                )
              );
          }),
            (this.onNativeScroll = () => {
              if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const t = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.velocity = 0),
                  (this.direction = Math.sign(this.animatedScroll - t)),
                  this.emit();
              }
            }),
            (window.lenisVersion = "1.0.29"),
            (t !== document.documentElement && t !== document.body) ||
              (t = window),
            (this.options = {
              wrapper: t,
              content: e,
              wheelEventsTarget: i,
              eventsTarget: n,
              smoothWheel: h,
              smoothTouch: c,
              syncTouch: u,
              syncTouchLerp: d,
              __iosNoInertiaSyncTouchLerp: v,
              touchInertiaMultiplier: m,
              duration: p,
              easing: f,
              lerp: g,
              infinite: b,
              gestureOrientation: E,
              orientation: S,
              touchMultiplier: I,
              wheelMultiplier: w,
              normalizeWheel: O,
              autoResize: y,
            }),
            (this.animate = new r()),
            (this.emitter = new l()),
            (this.dimensions = new o({
              wrapper: t,
              content: e,
              autoResize: y,
            })),
            this.toggleClass("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = u || h || c),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            (this.virtualScroll = new a(n, {
              touchMultiplier: I,
              wheelMultiplier: w,
              normalizeWheel: O,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClass("lenis", !1),
            this.toggleClass("lenis-smooth", !1),
            this.toggleClass("lenis-scrolling", !1),
            this.toggleClass("lenis-stopped", !1),
            this.toggleClass("lenis-locked", !1);
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          return this.emitter.off(t, e);
        }
        setScroll(t) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = t)
            : (this.rootElement.scrollTop = t);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          (this.isStopped = !1), this.reset();
        }
        stop() {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }
        raf(t) {
          const e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }
        scrollTo(
          t,
          {
            offset: e = 0,
            immediate: i = !1,
            lock: s = !1,
            duration: r = this.options.duration,
            easing: o = this.options.easing,
            lerp: l = !r && this.options.lerp,
            onComplete: a = null,
            force: h = !1,
            programmatic: c = !0,
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || h) {
            if (["top", "left", "start"].includes(t)) t = 0;
            else if (["bottom", "right", "end"].includes(t)) t = this.limit;
            else {
              var u;
              let i;
              if (
                ("string" == typeof t
                  ? (i = document.querySelector(t))
                  : null != (u = t) && u.nodeType && (i = t),
                i)
              ) {
                if (this.options.wrapper !== window) {
                  const t = this.options.wrapper.getBoundingClientRect();
                  e -= this.isHorizontal ? t.left : t.top;
                }
                const s = i.getBoundingClientRect();
                t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof t) {
              if (
                ((t += e),
                (t = Math.round(t)),
                this.options.infinite
                  ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (t = n(0, t, this.limit)),
                i)
              )
                return (
                  (this.animatedScroll = this.targetScroll = t),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (null == a || a(this))
                );
              if (!c) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: r,
                easing: o,
                lerp: l,
                onStart: () => {
                  s && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (t, e) => {
                  (this.isScrolling = !0),
                    (this.velocity = t - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = t),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = t),
                    e || this.emit(),
                    e &&
                      (this.reset(),
                      this.emit(),
                      null == a || a(this),
                      (this.__preventNextScrollEvent = !0),
                      requestAnimationFrame(() => {
                        delete this.__preventNextScrollEvent;
                      }));
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? ((this.animatedScroll % (t = this.limit)) + t) % t
            : this.animatedScroll;
          var t;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(t) {
          this.__isSmooth !== t &&
            ((this.__isSmooth = t), this.toggleClass("lenis-smooth", t));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t) {
          this.__isScrolling !== t &&
            ((this.__isScrolling = t), this.toggleClass("lenis-scrolling", t));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t) {
          this.__isStopped !== t &&
            ((this.__isStopped = t), this.toggleClass("lenis-stopped", t));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(t) {
          this.__isLocked !== t &&
            ((this.__isLocked = t), this.toggleClass("lenis-locked", t));
        }
        get className() {
          let t = "lenis";
          return (
            this.isStopped && (t += " lenis-stopped"),
            this.isLocked && (t += " lenis-locked"),
            this.isScrolling && (t += " lenis-scrolling"),
            this.isSmooth && (t += " lenis-smooth"),
            t
          );
        }
        toggleClass(t, e) {
          this.rootElement.classList.toggle(t, e),
            this.emitter.emit("className change", this);
        }
      }
      var c = /*#__PURE__*/ (function () {
        function t(t) {
          var e = t.scrollElements,
            i = t.rootMargin,
            s = void 0 === i ? "-1px -1px -1px -1px" : i,
            n = t.IORaf;
          (this.scrollElements = void 0),
            (this.rootMargin = void 0),
            (this.IORaf = void 0),
            (this.observer = void 0),
            (this.scrollElements = e),
            (this.rootMargin = s),
            (this.IORaf = n),
            this._init();
        }
        var e = t.prototype;
        return (
          (e._init = function () {
            var t = this;
            this.observer = new IntersectionObserver(
              function (e) {
                e.forEach(function (e) {
                  var i = t.scrollElements.find(function (t) {
                    return t.$el === e.target;
                  });
                  e.isIntersecting
                    ? (i && (i.isAlreadyIntersected = !0), t._setInview(e))
                    : i && i.isAlreadyIntersected && t._setOutOfView(e);
                });
              },
              { rootMargin: this.rootMargin }
            );
            for (var e, s = i(this.scrollElements); !(e = s()).done; )
              this.observe(e.value.$el);
          }),
          (e.destroy = function () {
            this.observer.disconnect();
          }),
          (e.observe = function (t) {
            t && this.observer.observe(t);
          }),
          (e.unobserve = function (t) {
            t && this.observer.unobserve(t);
          }),
          (e._setInview = function (t) {
            var e = this.scrollElements.find(function (e) {
              return e.$el === t.target;
            });
            this.IORaf && (null == e || e.setInteractivityOn()),
              !this.IORaf && (null == e || e.setInview());
          }),
          (e._setOutOfView = function (t) {
            var e = this.scrollElements.find(function (e) {
              return e.$el === t.target;
            });
            this.IORaf && (null == e || e.setInteractivityOff()),
              !this.IORaf && (null == e || e.setOutOfView()),
              (null != e && e.attributes.scrollRepeat) ||
                this.IORaf ||
                this.unobserve(t.target);
          }),
          t
        );
      })();
      function u(t, e, i, s, n) {
        return i + (((n - t) / (e - t)) * (s - i) || 0);
      }
      function d(t, e) {
        return t.reduce(function (t, i) {
          return Math.abs(i - e) < Math.abs(t - e) ? i : t;
        });
      }
      var v = /*#__PURE__*/ (function () {
          function t(t) {
            var e,
              i,
              s,
              n,
              r,
              o = t.$el,
              l = t.id,
              a = t.modularInstance,
              h = t.subscribeElementUpdateFn,
              c = t.unsubscribeElementUpdateFn,
              u = t.needRaf,
              d = t.scrollOrientation;
            (this.$el = void 0),
              (this.id = void 0),
              (this.needRaf = void 0),
              (this.attributes = void 0),
              (this.scrollOrientation = void 0),
              (this.isAlreadyIntersected = void 0),
              (this.intersection = void 0),
              (this.metrics = void 0),
              (this.currentScroll = void 0),
              (this.translateValue = void 0),
              (this.progress = void 0),
              (this.lastProgress = void 0),
              (this.modularInstance = void 0),
              (this.progressModularModules = void 0),
              (this.isInview = void 0),
              (this.isInteractive = void 0),
              (this.isInFold = void 0),
              (this.isFirstResize = void 0),
              (this.subscribeElementUpdateFn = void 0),
              (this.unsubscribeElementUpdateFn = void 0),
              (this.$el = o),
              (this.id = l),
              (this.needRaf = u),
              (this.scrollOrientation = d),
              (this.modularInstance = a),
              (this.subscribeElementUpdateFn = h),
              (this.unsubscribeElementUpdateFn = c),
              (this.attributes = {
                scrollClass:
                  null != (e = this.$el.dataset.scrollClass) ? e : "is-inview",
                scrollOffset:
                  null != (i = this.$el.dataset.scrollOffset) ? i : "0,0",
                scrollPosition:
                  null != (s = this.$el.dataset.scrollPosition)
                    ? s
                    : "start,end",
                scrollModuleProgress:
                  null != this.$el.dataset.scrollModuleProgress,
                scrollCssProgress: null != this.$el.dataset.scrollCssProgress,
                scrollEventProgress:
                  null != (n = this.$el.dataset.scrollEventProgress) ? n : null,
                scrollSpeed:
                  null != this.$el.dataset.scrollSpeed
                    ? parseFloat(this.$el.dataset.scrollSpeed)
                    : null,
                scrollRepeat: null != this.$el.dataset.scrollRepeat,
                scrollCall:
                  null != (r = this.$el.dataset.scrollCall) ? r : null,
                scrollCallSelf: null != this.$el.dataset.scrollCallSelf,
                scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold,
                scrollEnableTouchSpeed:
                  null != this.$el.dataset.scrollEnableTouchSpeed,
              }),
              (this.intersection = { start: 0, end: 0 }),
              (this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }),
              (this.currentScroll =
                "vertical" === this.scrollOrientation
                  ? window.scrollY
                  : window.scrollX),
              (this.translateValue = 0),
              (this.progress = 0),
              (this.lastProgress = null),
              (this.progressModularModules = []),
              (this.isInview = !1),
              (this.isInteractive = !1),
              (this.isAlreadyIntersected = !1),
              (this.isInFold = !1),
              (this.isFirstResize = !0),
              this._init();
          }
          var e = t.prototype;
          return (
            (e._init = function () {
              this.needRaf &&
                (this.modularInstance &&
                  this.attributes.scrollModuleProgress &&
                  this._getProgressModularModules(),
                this._resize());
            }),
            (e.onResize = function (t) {
              (this.currentScroll = t.currentScroll), this._resize();
            }),
            (e.onRender = function (t) {
              var e = t.smooth,
                i =
                  "vertical" === this.scrollOrientation
                    ? window.innerHeight
                    : window.innerWidth;
              if (
                ((this.currentScroll = t.currentScroll),
                this._computeProgress(),
                this.attributes.scrollSpeed &&
                  !isNaN(this.attributes.scrollSpeed))
              )
                if (this.attributes.scrollEnableTouchSpeed || e) {
                  if (this.isInFold) {
                    var s = Math.max(0, this.progress);
                    this.translateValue =
                      s * i * this.attributes.scrollSpeed * -1;
                  } else {
                    var n = u(0, 1, -1, 1, this.progress);
                    this.translateValue =
                      n * i * this.attributes.scrollSpeed * -1;
                  }
                  this.$el.style.transform =
                    "vertical" === this.scrollOrientation
                      ? "translate3d(0, " + this.translateValue + "px, 0)"
                      : "translate3d(" + this.translateValue + "px, 0, 0)";
                } else
                  this.translateValue &&
                    (this.$el.style.transform = "translate3d(0, 0, 0)"),
                    (this.translateValue = 0);
            }),
            (e.setInview = function () {
              if (!this.isInview) {
                (this.isInview = !0),
                  this.$el.classList.add(this.attributes.scrollClass);
                var t = this._getScrollCallFrom();
                this.attributes.scrollCall && this._dispatchCall("enter", t);
              }
            }),
            (e.setOutOfView = function () {
              if (this.isInview && this.attributes.scrollRepeat) {
                (this.isInview = !1),
                  this.$el.classList.remove(this.attributes.scrollClass);
                var t = this._getScrollCallFrom();
                this.attributes.scrollCall && this._dispatchCall("leave", t);
              }
            }),
            (e.setInteractivityOn = function () {
              this.isInteractive ||
                ((this.isInteractive = !0),
                this.subscribeElementUpdateFn(this));
            }),
            (e.setInteractivityOff = function () {
              this.isInteractive &&
                ((this.isInteractive = !1),
                this.unsubscribeElementUpdateFn(this),
                null != this.lastProgress &&
                  this._computeProgress(d([0, 1], this.lastProgress)));
            }),
            (e._resize = function () {
              (this.metrics.bcr = this.$el.getBoundingClientRect()),
                this._computeMetrics(),
                this._computeIntersection(),
                this.isFirstResize &&
                  ((this.isFirstResize = !1),
                  this.isInFold && this.setInview());
            }),
            (e._computeMetrics = function () {
              var t = this.metrics.bcr,
                e =
                  "vertical" === this.scrollOrientation
                    ? window.innerHeight
                    : window.innerWidth,
                i = "vertical" === this.scrollOrientation ? t.height : t.width;
              (this.metrics.offsetStart =
                this.currentScroll +
                ("vertical" === this.scrollOrientation ? t.top : t.left) -
                this.translateValue),
                (this.metrics.offsetEnd = this.metrics.offsetStart + i),
                (this.isInFold =
                  this.metrics.offsetStart < e &&
                  !this.attributes.scrollIgnoreFold);
            }),
            (e._computeIntersection = function () {
              var t =
                  "vertical" === this.scrollOrientation
                    ? window.innerHeight
                    : window.innerWidth,
                e =
                  "vertical" === this.scrollOrientation
                    ? this.metrics.bcr.height
                    : this.metrics.bcr.width,
                i = this.attributes.scrollOffset.split(","),
                s = null != i[0] ? i[0].trim() : "0",
                n = null != i[1] ? i[1].trim() : "0",
                r = this.attributes.scrollPosition.split(","),
                o = null != r[0] ? r[0].trim() : "start",
                l = null != r[1] ? r[1].trim() : "end",
                a = s.includes("%")
                  ? t * parseInt(s.replace("%", "").trim()) * 0.01
                  : parseInt(s),
                h = n.includes("%")
                  ? t * parseInt(n.replace("%", "").trim()) * 0.01
                  : parseInt(n);
              switch ((this.isInFold && (o = "fold"), o)) {
                case "start":
                default:
                  this.intersection.start = this.metrics.offsetStart - t + a;
                  break;
                case "middle":
                  this.intersection.start =
                    this.metrics.offsetStart - t + a + 0.5 * e;
                  break;
                case "end":
                  this.intersection.start =
                    this.metrics.offsetStart - t + a + e;
                  break;
                case "fold":
                  this.intersection.start = 0;
              }
              switch (l) {
                case "start":
                  this.intersection.end = this.metrics.offsetStart - h;
                  break;
                case "middle":
                  this.intersection.end =
                    this.metrics.offsetStart - h + 0.5 * e;
                  break;
                default:
                  this.intersection.end = this.metrics.offsetStart - h + e;
              }
              if (this.intersection.end <= this.intersection.start)
                switch (l) {
                  case "start":
                  default:
                    this.intersection.end = this.intersection.start + 1;
                    break;
                  case "middle":
                    this.intersection.end = this.intersection.start + 0.5 * e;
                    break;
                  case "end":
                    this.intersection.end = this.intersection.start + e;
                }
            }),
            (e._computeProgress = function (t) {
              var e,
                s =
                  null != t
                    ? t
                    : (e = u(
                        this.intersection.start,
                        this.intersection.end,
                        0,
                        1,
                        this.currentScroll
                      )) < 0
                    ? 0
                    : e > 1
                    ? 1
                    : e;
              if (((this.progress = s), s != this.lastProgress)) {
                if (
                  ((this.lastProgress = s),
                  this.attributes.scrollCssProgress && this._setCssProgress(s),
                  this.attributes.scrollEventProgress &&
                    this._setCustomEventProgress(s),
                  this.attributes.scrollModuleProgress)
                )
                  for (
                    var n, r = i(this.progressModularModules);
                    !(n = r()).done;

                  ) {
                    var o = n.value;
                    this.modularInstance &&
                      this.modularInstance.call(
                        "onScrollProgress",
                        s,
                        o.moduleName,
                        o.moduleId
                      );
                  }
                s > 0 && s < 1 && this.setInview(),
                  0 === s && this.setOutOfView(),
                  1 === s && this.setOutOfView();
              }
            }),
            (e._setCssProgress = function (t) {
              void 0 === t && (t = 0),
                this.$el.style.setProperty("--progress", t.toString());
            }),
            (e._setCustomEventProgress = function (t) {
              void 0 === t && (t = 0);
              var e = this.attributes.scrollEventProgress;
              if (e) {
                var i = new CustomEvent(e, {
                  detail: { target: this.$el, progress: t },
                });
                window.dispatchEvent(i);
              }
            }),
            (e._getProgressModularModules = function () {
              if (this.modularInstance) {
                var t = Object.keys(this.$el.dataset).filter(function (t) {
                    return t.includes("module");
                  }),
                  e = Object.entries(this.modularInstance.modules);
                if (t.length)
                  for (var s, n = i(t); !(s = n()).done; ) {
                    var r = this.$el.dataset[s.value];
                    if (!r) return;
                    for (var o, l = i(e); !(o = l()).done; ) {
                      var a = o.value;
                      r in a[1] &&
                        this.progressModularModules.push({
                          moduleName: a[0],
                          moduleId: r,
                        });
                    }
                  }
              }
            }),
            (e._getScrollCallFrom = function () {
              var t = d(
                [this.intersection.start, this.intersection.end],
                this.currentScroll
              );
              return this.intersection.start === t ? "start" : "end";
            }),
            (e._dispatchCall = function (t, e) {
              var i,
                s,
                n =
                  null == (i = this.attributes.scrollCall)
                    ? void 0
                    : i.split(","),
                r = null == (s = this.attributes) ? void 0 : s.scrollCallSelf;
              if (n && n.length > 1) {
                var o,
                  l,
                  a = n[0],
                  h = n[1],
                  c = n[2];
                (l = r ? this.$el.dataset["module" + h.trim()] : c),
                  this.modularInstance &&
                    this.modularInstance.call(
                      a.trim(),
                      { target: this.$el, way: t, from: e },
                      h.trim(),
                      null == (o = l) ? void 0 : o.trim()
                    );
              } else if (n) {
                var u = new CustomEvent(n[0], {
                  detail: { target: this.$el, way: t, from: e },
                });
                window.dispatchEvent(u);
              }
            }),
            t
          );
        })(),
        m = [
          "scrollOffset",
          "scrollPosition",
          "scrollModuleProgress",
          "scrollCssProgress",
          "scrollEventProgress",
          "scrollSpeed",
        ],
        p = /*#__PURE__*/ (function () {
          function t(t) {
            var e = t.$el,
              i = t.modularInstance,
              s = t.triggerRootMargin,
              n = t.rafRootMargin,
              r = t.scrollOrientation;
            (this.$scrollContainer = void 0),
              (this.modularInstance = void 0),
              (this.triggerRootMargin = void 0),
              (this.rafRootMargin = void 0),
              (this.scrollElements = void 0),
              (this.triggeredScrollElements = void 0),
              (this.RAFScrollElements = void 0),
              (this.scrollElementsToUpdate = void 0),
              (this.IOTriggerInstance = void 0),
              (this.IORafInstance = void 0),
              (this.scrollOrientation = void 0),
              e
                ? ((this.$scrollContainer = e),
                  (this.modularInstance = i),
                  (this.scrollOrientation = r),
                  (this.triggerRootMargin =
                    null != s ? s : "-1px -1px -1px -1px"),
                  (this.rafRootMargin = null != n ? n : "100% 100% 100% 100%"),
                  (this.scrollElements = []),
                  (this.triggeredScrollElements = []),
                  (this.RAFScrollElements = []),
                  (this.scrollElementsToUpdate = []),
                  this._init())
                : console.error(
                    "Please provide a DOM Element as scrollContainer"
                  );
          }
          var e = t.prototype;
          return (
            (e._init = function () {
              var t = this.$scrollContainer.querySelectorAll("[data-scroll]"),
                e = Array.from(t);
              this._subscribeScrollElements(e),
                (this.IOTriggerInstance = new c({
                  scrollElements: [].concat(this.triggeredScrollElements),
                  rootMargin: this.triggerRootMargin,
                  IORaf: !1,
                })),
                (this.IORafInstance = new c({
                  scrollElements: [].concat(this.RAFScrollElements),
                  rootMargin: this.rafRootMargin,
                  IORaf: !0,
                }));
            }),
            (e.destroy = function () {
              this.IOTriggerInstance.destroy(),
                this.IORafInstance.destroy(),
                this._unsubscribeAllScrollElements();
            }),
            (e.onResize = function (t) {
              for (
                var e, s = t.currentScroll, n = i(this.RAFScrollElements);
                !(e = n()).done;

              )
                e.value.onResize({ currentScroll: s });
            }),
            (e.onRender = function (t) {
              for (
                var e,
                  s = t.currentScroll,
                  n = t.smooth,
                  r = i(this.scrollElementsToUpdate);
                !(e = r()).done;

              )
                e.value.onRender({ currentScroll: s, smooth: n });
            }),
            (e.removeScrollElements = function (t) {
              var e = this,
                i = t.querySelectorAll("[data-scroll]");
              if (i.length) {
                for (var s = 0; s < this.triggeredScrollElements.length; s++) {
                  var n = this.triggeredScrollElements[s];
                  Array.from(i).indexOf(n.$el) > -1 &&
                    (this.IOTriggerInstance.unobserve(n.$el),
                    this.triggeredScrollElements.splice(s, 1));
                }
                for (var r = 0; r < this.RAFScrollElements.length; r++) {
                  var o = this.RAFScrollElements[r];
                  Array.from(i).indexOf(o.$el) > -1 &&
                    (this.IORafInstance.unobserve(o.$el),
                    this.RAFScrollElements.splice(r, 1));
                }
                i.forEach(function (t) {
                  var i = e.scrollElementsToUpdate.find(function (e) {
                      return e.$el === t;
                    }),
                    s = e.scrollElements.find(function (e) {
                      return e.$el === t;
                    });
                  i && e._unsubscribeElementUpdate(i),
                    s &&
                      (e.scrollElements = e.scrollElements.filter(function (t) {
                        return t.id != s.id;
                      }));
                });
              }
            }),
            (e.addScrollElements = function (t) {
              var e = t.querySelectorAll("[data-scroll]"),
                i = [];
              this.scrollElements.forEach(function (t) {
                i.push(t.id);
              });
              var s = Math.max.apply(Math, i) + 1,
                n = Array.from(e);
              this._subscribeScrollElements(n, s, !0);
            }),
            (e._subscribeScrollElements = function (t, e, i) {
              void 0 === e && (e = 0), void 0 === i && (i = !1);
              for (var s = 0; s < t.length; s++) {
                var n = t[s],
                  r = this._checkRafNeeded(n),
                  o = new v({
                    $el: n,
                    id: e + s,
                    scrollOrientation: this.scrollOrientation,
                    modularInstance: this.modularInstance,
                    subscribeElementUpdateFn:
                      this._subscribeElementUpdate.bind(this),
                    unsubscribeElementUpdateFn:
                      this._unsubscribeElementUpdate.bind(this),
                    needRaf: r,
                  });
                this.scrollElements.push(o),
                  r
                    ? (this.RAFScrollElements.push(o),
                      i &&
                        (this.IORafInstance.scrollElements.push(o),
                        this.IORafInstance.observe(o.$el)))
                    : (this.triggeredScrollElements.push(o),
                      i &&
                        (this.IOTriggerInstance.scrollElements.push(o),
                        this.IOTriggerInstance.observe(o.$el)));
              }
            }),
            (e._unsubscribeAllScrollElements = function () {
              (this.scrollElements = []),
                (this.RAFScrollElements = []),
                (this.triggeredScrollElements = []),
                (this.scrollElementsToUpdate = []);
            }),
            (e._subscribeElementUpdate = function (t) {
              this.scrollElementsToUpdate.push(t);
            }),
            (e._unsubscribeElementUpdate = function (t) {
              this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(
                function (e) {
                  return e.id != t.id;
                }
              );
            }),
            (e._checkRafNeeded = function (t) {
              var e = [].concat(m),
                s = function (t) {
                  e = e.filter(function (e) {
                    return e != t;
                  });
                };
              if (t.dataset.scrollOffset) {
                if (
                  "0,0" !=
                  t.dataset.scrollOffset
                    .split(",")
                    .map(function (t) {
                      return t.replace("%", "").trim();
                    })
                    .join(",")
                )
                  return !0;
                s("scrollOffset");
              } else s("scrollOffset");
              if (t.dataset.scrollPosition) {
                if ("top,bottom" != t.dataset.scrollPosition.trim()) return !0;
                s("scrollPosition");
              } else s("scrollPosition");
              if (
                t.dataset.scrollSpeed &&
                !isNaN(parseFloat(t.dataset.scrollSpeed))
              )
                return !0;
              s("scrollSpeed");
              for (var n, r = i(e); !(n = r()).done; )
                if (n.value in t.dataset) return !0;
              return !1;
            }),
            t
          );
        })(),
        f = /*#__PURE__*/ (function () {
          function t(t) {
            var e = t.resizeElements,
              i = t.resizeCallback,
              s = void 0 === i ? function () {} : i;
            (this.$resizeElements = void 0),
              (this.isFirstObserve = void 0),
              (this.observer = void 0),
              (this.resizeCallback = void 0),
              (this.$resizeElements = e),
              (this.resizeCallback = s),
              (this.isFirstObserve = !0),
              this._init();
          }
          var e = t.prototype;
          return (
            (e._init = function () {
              var t = this;
              this.observer = new ResizeObserver(function (e) {
                !t.isFirstObserve &&
                  (null == t.resizeCallback || t.resizeCallback()),
                  (t.isFirstObserve = !1);
              });
              for (var e, s = i(this.$resizeElements); !(e = s()).done; )
                this.observer.observe(e.value);
            }),
            (e.destroy = function () {
              this.observer.disconnect();
            }),
            t
          );
        })(),
        g = {
          wrapper: window,
          content: document.documentElement,
          eventsTarget: window,
          lerp: 0.1,
          duration: 0.75,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: !0,
          smoothTouch: !1,
          syncTouch: !1,
          syncTouchLerp: 0.1,
          touchInertiaMultiplier: 35,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          normalizeWheel: !1,
          autoResize: !0,
          easing: function (t) {
            return Math.min(1, 1.001 - Math.pow(2, -10 * t));
          },
        }; /*#__PURE__*/
      return (function () {
        function e(e) {
          var i = void 0 === e ? {} : e,
            s = i.lenisOptions,
            n = void 0 === s ? {} : s,
            r = i.modularInstance,
            o = i.triggerRootMargin,
            l = i.rafRootMargin,
            a = i.autoResize,
            h = void 0 === a || a,
            c = i.autoStart,
            u = void 0 === c || c,
            d = i.scrollCallback,
            v = void 0 === d ? function () {} : d,
            m = i.initCustomTicker,
            p = i.destroyCustomTicker;
          (this.rafPlaying = void 0),
            (this.lenisInstance = void 0),
            (this.coreInstance = void 0),
            (this.lenisOptions = void 0),
            (this.modularInstance = void 0),
            (this.triggerRootMargin = void 0),
            (this.rafRootMargin = void 0),
            (this.rafInstance = void 0),
            (this.autoResize = void 0),
            (this.autoStart = void 0),
            (this.ROInstance = void 0),
            (this.initCustomTicker = void 0),
            (this.destroyCustomTicker = void 0),
            (this._onRenderBind = void 0),
            (this._onResizeBind = void 0),
            (this._onScrollToBind = void 0),
            (this.lenisOptions = t({}, g, n)),
            Object.assign(this, {
              lenisOptions: n,
              modularInstance: r,
              triggerRootMargin: o,
              rafRootMargin: l,
              autoResize: h,
              autoStart: u,
              scrollCallback: v,
              initCustomTicker: m,
              destroyCustomTicker: p,
            }),
            (this._onRenderBind = this._onRender.bind(this)),
            (this._onScrollToBind = this._onScrollTo.bind(this)),
            (this._onResizeBind = this._onResize.bind(this)),
            (this.rafPlaying = !1),
            this._init();
        }
        var i = e.prototype;
        return (
          (i._init = function () {
            var t,
              e = this;
            (this.lenisInstance = new h({
              wrapper: this.lenisOptions.wrapper,
              content: this.lenisOptions.content,
              eventsTarget: this.lenisOptions.eventsTarget,
              lerp: this.lenisOptions.lerp,
              duration: this.lenisOptions.duration,
              orientation: this.lenisOptions.orientation,
              gestureOrientation: this.lenisOptions.gestureOrientation,
              smoothWheel: this.lenisOptions.smoothWheel,
              smoothTouch: this.lenisOptions.smoothTouch,
              syncTouch: this.lenisOptions.syncTouch,
              syncTouchLerp: this.lenisOptions.syncTouchLerp,
              touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier,
              wheelMultiplier: this.lenisOptions.wheelMultiplier,
              touchMultiplier: this.lenisOptions.touchMultiplier,
              normalizeWheel: this.lenisOptions.normalizeWheel,
              easing: this.lenisOptions.easing,
            })),
              null == (t = this.lenisInstance) ||
                t.on("scroll", this.scrollCallback),
              document.documentElement.setAttribute(
                "data-scroll-orientation",
                this.lenisInstance.options.orientation
              ),
              requestAnimationFrame(function () {
                (e.coreInstance = new p({
                  $el: e.lenisInstance.rootElement,
                  modularInstance: e.modularInstance,
                  triggerRootMargin: e.triggerRootMargin,
                  rafRootMargin: e.rafRootMargin,
                  scrollOrientation: e.lenisInstance.options.orientation,
                })),
                  e._bindEvents(),
                  e.initCustomTicker && !e.destroyCustomTicker
                    ? console.warn(
                        "initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble."
                      )
                    : !e.initCustomTicker &&
                      e.destroyCustomTicker &&
                      console.warn(
                        "destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."
                      ),
                  e.autoStart && e.start();
              });
          }),
          (i.destroy = function () {
            var t,
              e = this;
            this.stop(),
              this._unbindEvents(),
              this.lenisInstance.destroy(),
              null == (t = this.coreInstance) || t.destroy(),
              requestAnimationFrame(function () {
                var t;
                null == (t = e.coreInstance) || t.destroy();
              });
          }),
          (i._bindEvents = function () {
            this._bindScrollToEvents(),
              this.autoResize &&
                ("ResizeObserver" in window
                  ? (this.ROInstance = new f({
                      resizeElements: [document.body],
                      resizeCallback: this._onResizeBind,
                    }))
                  : window.addEventListener("resize", this._onResizeBind));
          }),
          (i._unbindEvents = function () {
            this._unbindScrollToEvents(),
              this.autoResize &&
                ("ResizeObserver" in window
                  ? this.ROInstance && this.ROInstance.destroy()
                  : window.removeEventListener("resize", this._onResizeBind));
          }),
          (i._bindScrollToEvents = function (t) {
            var e = this,
              i = t || this.lenisInstance.rootElement,
              s = null == i ? void 0 : i.querySelectorAll("[data-scroll-to]");
            (null == s ? void 0 : s.length) &&
              s.forEach(function (t) {
                t.addEventListener("click", e._onScrollToBind, !1);
              });
          }),
          (i._unbindScrollToEvents = function (t) {
            var e = this,
              i = t || this.lenisInstance.rootElement,
              s = null == i ? void 0 : i.querySelectorAll("[data-scroll-to]");
            (null == s ? void 0 : s.length) &&
              s.forEach(function (t) {
                t.removeEventListener("click", e._onScrollToBind, !1);
              });
          }),
          (i._onResize = function () {
            var t = this;
            requestAnimationFrame(function () {
              var e;
              null == (e = t.coreInstance) ||
                e.onResize({ currentScroll: t.lenisInstance.scroll });
            });
          }),
          (i._onRender = function () {
            var t, e;
            null == (t = this.lenisInstance) || t.raf(Date.now()),
              null == (e = this.coreInstance) ||
                e.onRender({
                  currentScroll: this.lenisInstance.scroll,
                  smooth: this.lenisInstance.isSmooth,
                });
          }),
          (i._onScrollTo = function (t) {
            var e;
            t.preventDefault();
            var i = null != (e = t.currentTarget) ? e : null;
            if (i) {
              var s =
                  i.getAttribute("data-scroll-to-href") ||
                  i.getAttribute("href"),
                n = i.getAttribute("data-scroll-to-offset") || 0,
                r =
                  i.getAttribute("data-scroll-to-duration") ||
                  this.lenisOptions.duration ||
                  g.duration;
              s &&
                this.scrollTo(s, {
                  offset: "string" == typeof n ? parseInt(n) : n,
                  duration: "string" == typeof r ? parseInt(r) : r,
                });
            }
          }),
          (i.start = function () {
            var t;
            this.rafPlaying ||
              (null == (t = this.lenisInstance) || t.start(),
              (this.rafPlaying = !0),
              this.initCustomTicker
                ? this.initCustomTicker(this._onRenderBind)
                : this._raf());
          }),
          (i.stop = function () {
            var t;
            this.rafPlaying &&
              (null == (t = this.lenisInstance) || t.stop(),
              (this.rafPlaying = !1),
              this.destroyCustomTicker
                ? this.destroyCustomTicker(this._onRenderBind)
                : this.rafInstance && cancelAnimationFrame(this.rafInstance));
          }),
          (i.removeScrollElements = function (t) {
            var e;
            t
              ? (this._unbindScrollToEvents(t),
                null == (e = this.coreInstance) || e.removeScrollElements(t))
              : console.error("Please provide a DOM Element as $oldContainer");
          }),
          (i.addScrollElements = function (t) {
            var e,
              i = this;
            t
              ? (null == (e = this.coreInstance) || e.addScrollElements(t),
                requestAnimationFrame(function () {
                  i._bindScrollToEvents(t);
                }))
              : console.error("Please provide a DOM Element as $newContainer");
          }),
          (i.resize = function () {
            this._onResizeBind();
          }),
          (i.scrollTo = function (t, e) {
            var i;
            null == (i = this.lenisInstance) ||
              i.scrollTo(t, {
                offset: null == e ? void 0 : e.offset,
                lerp: null == e ? void 0 : e.lerp,
                duration: null == e ? void 0 : e.duration,
                immediate: null == e ? void 0 : e.immediate,
                lock: null == e ? void 0 : e.lock,
                force: null == e ? void 0 : e.force,
                easing: null == e ? void 0 : e.easing,
                onComplete: null == e ? void 0 : e.onComplete,
              });
          }),
          (i._raf = function () {
            var t = this;
            this._onRenderBind(),
              (this.rafInstance = requestAnimationFrame(function () {
                return t._raf();
              }));
          }),
          e
        );
      })();
    });
  },
};

var locomotiveScroll = {
  init: function () {
    setTimeout(function () {
      const locomotiveScroll = new LocomotiveScroll();
    }, 100);
  },
};
var headerScroll = {
  init: function () {
    const select = (el, all = false) => {
      if (typeof el !== "string" || el.trim() === "") {
        // Add a check to ensure that the selector is not empty
        return all ? [] : null;
      }

      el = el.trim();

      return all
        ? [...document.querySelectorAll(el)]
        : document.querySelector(el);
    };

    const on = (type, el, listener, all = false) => {
      const selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      select("#navbar .scrollto", true).forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        const section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    const scrollto = (el) => {
      let offset = select("#header").offsetHeight;
      if (!select("#header").classList.contains("header-scrolled")) {
        offset -= 16;
      }
      const elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    const headerScrolled = () => {
      select("#header").classList.toggle(
        "header-scrolled",
        window.scrollY > 100
      );
    };
    const toggleBacktotop = () => {
      select(".back-to-top").classList.toggle("active", window.scrollY > 100);
    };

    on("load", window, () => {
      navbarlinksActive();
      headerScrolled();
      toggleBacktotop();
    });

    onscroll(document, () => {
      navbarlinksActive();
      headerScrolled();
      toggleBacktotop();
    });

    on("click", ".mobile-nav-toggle", function () {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();
          const navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            select(".mobile-nav-toggle").classList.toggle("bi-list");
            select(".mobile-nav-toggle").classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );

    on("load", window, () => {
      const portfolioContainer = select(".portfolio-container");
      if (portfolioContainer) {
        const portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows",
        });

        const portfolioFilters = select("#portfolio-flters li", true);

        on(
          "click",
          "#portfolio-flters li",
          function (e) {
            e.preventDefault();
            portfolioFilters.forEach((el) =>
              el.classList.remove("filter-active")
            );
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
          },
          true
        );
      }
    });

    on("load", window, () => {
      if (window.location.hash && select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    });
  },
};
var pageCheck = {
  init: function () {
    const select = (el, all = false) => {
      if (typeof el !== "string" || el.trim() === "") {
        // Add a check to ensure that the selector is not empty
        return all ? [] : null;
      }

      el = el.trim();

      return all
        ? [...document.querySelectorAll(el)]
        : document.querySelector(el);
    };

    const on = (type, el, listener, all = false) => {
      const selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const innerPageCheck = () => {
      // Check if the class 'myClass' exists on any element in the document
      setTimeout(function () {
        // alert("load function");
        var elementsWithClass = document.querySelectorAll(".inner-page");

        if (elementsWithClass.length > 0) {
          select("#header").classList.add("header-inner-pages");
        } else {
          select("#header").classList.remove("header-inner-pages");
        }
      }, 100);
    };

    const smmooooth = () => {
      const locomotiveScroll = new LocomotiveScroll();
    };

    on(
      "click",
      ".nav-link",
      function (e) {
        innerPageCheck();
      },
      true
    );

    innerPageCheck();
  },
};

var imageParallax = {
  init: function () {
    if (document.getElementsByClassName("hero-container").length > 0) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".hero-container").forEach(function (container) {
        let image = container.querySelector("img");

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            pin: false,
          },
        });
        tl.from(image, {
          yPercent: -30,
          ease: "none",
        }).to(image, {
          yPercent: 30,
          ease: "none",
        });
      });
    }
  },
};

// Initialize on first load
init();

// Re-initialize after swapping pages
document.addEventListener("astro:after-swap", init);
