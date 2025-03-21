(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.sass */ "./assets/styles/app.sass");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ "./assets/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_fade_in_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/fade-in.js */ "./assets/js/fade-in.js");
/* harmony import */ var _js_fade_in_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_fade_in_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_fslightbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/fslightbox.js */ "./assets/js/fslightbox.js");
/* harmony import */ var _js_fslightbox_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_fslightbox_js__WEBPACK_IMPORTED_MODULE_3__);
// STYLE


// JS



// JS LIBS


/***/ }),

/***/ "./assets/js/fade-in.js":
/*!******************************!*\
  !*** ./assets/js/fade-in.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/*Apparition de tous les éléments lors du chargement de la page*/

document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.fade-in');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 1;
    setTimeout(function () {
      elements[i].style.opacity = 1;
    }, i * 500);
  }
});

/***/ }),

/***/ "./assets/js/fslightbox.js":
/*!*********************************!*\
  !*** ./assets/js/fslightbox.js ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.unshift.js */ "./node_modules/core-js/modules/es.array.unshift.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  if ("object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module))) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var o, n; }
}(window, function () {
  return function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function (t) {
        return e[t];
      }.bind(null, i));
      return o;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";

    n.r(t);
    var o,
      i = "fslightbox-",
      r = "".concat(i, "styles"),
      s = "".concat(i, "cursor-grabbing"),
      a = "".concat(i, "full-dimension"),
      c = "".concat(i, "flex-centered"),
      l = "".concat(i, "open"),
      u = "".concat(i, "transform-transition"),
      d = "".concat(i, "absoluted"),
      f = "".concat(i, "slide-btn"),
      p = "".concat(f, "-container"),
      h = "".concat(i, "fade-in"),
      m = "".concat(i, "fade-out"),
      g = h + "-strong",
      v = m + "-strong",
      b = "".concat(i, "opacity-"),
      x = "".concat(b, "1"),
      y = "".concat(i, "source");
    function w(e) {
      return (w = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }
    function S(e) {
      var t = e.stageIndexes,
        n = e.core.stageManager,
        o = e.props.sources.length - 1;
      n.getPreviousSlideIndex = function () {
        return 0 === t.current ? o : t.current - 1;
      }, n.getNextSlideIndex = function () {
        return t.current === o ? 0 : t.current + 1;
      }, n.updateStageIndexes = 0 === o ? function () {} : 1 === o ? function () {
        0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next);
      } : function () {
        t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex();
      }, n.i = o <= 2 ? function () {
        return !0;
      } : function (e) {
        var n = t.current;
        if (0 === n && e === o || n === o && 0 === e) return !0;
        var i = n - e;
        return -1 === i || 0 === i || 1 === i;
      };
    }
    "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((o = document.createElement("style")).className = r, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));
    function L(e) {
      var t,
        n = e.props,
        o = 0,
        i = {};
      this.getSourceTypeFromLocalStorageByUrl = function (e) {
        return t[e] ? t[e] : r(e);
      }, this.handleReceivedSourceTypeForUrl = function (e, n) {
        if (!1 === i[n] && (o--, "invalid" !== e ? i[n] = e : delete i[n], 0 === o)) {
          !function (e, t) {
            for (var n in t) e[n] = t[n];
          }(t, i);
          try {
            localStorage.setItem("fslightbox-types", JSON.stringify(t));
          } catch (e) {}
        }
      };
      var r = function r(e) {
        o++, i[e] = !1;
      };
      if (n.disableLocalStorage) this.getSourceTypeFromLocalStorageByUrl = function () {}, this.handleReceivedSourceTypeForUrl = function () {};else {
        try {
          t = JSON.parse(localStorage.getItem("fslightbox-types"));
        } catch (e) {}
        t || (t = {}, this.getSourceTypeFromLocalStorageByUrl = r);
      }
    }
    function A(e, t, n, o) {
      var i = e.data,
        r = e.elements.sources,
        s = n / o,
        a = 0;
      this.adjustSize = function () {
        if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c();
        a = o > i.maxSourceHeight ? i.maxSourceHeight : o, c();
      };
      var c = function c() {
        r[t].style.width = a * s + "px", r[t].style.height = a + "px";
      };
    }
    function C(e, t) {
      var n = this,
        o = e.collections.sourceSizers,
        i = e.elements,
        r = i.sourceAnimationWrappers,
        s = i.sources,
        a = e.isl,
        c = e.resolve;
      function l(e, n) {
        o[t] = c(A, [t, e, n]), o[t].adjustSize();
      }
      this.runActions = function (e, o) {
        a[t] = !0, s[t].classList.add(x), r[t].classList.add(g), r[t].removeChild(r[t].firstChild), l(e, o), n.runActions = l;
      };
    }
    function F(e, t) {
      var n,
        o = this,
        i = e.elements.sources,
        r = e.props,
        s = (0, e.resolve)(C, [t]);
      this.handleImageLoad = function (e) {
        var t = e.target,
          n = t.naturalWidth,
          o = t.naturalHeight;
        s.runActions(n, o);
      }, this.handleVideoLoad = function (e) {
        var t = e.target,
          o = t.videoWidth,
          i = t.videoHeight;
        n = !0, s.runActions(o, i);
      }, this.handleNotMetaDatedVideoLoad = function () {
        n || o.handleYoutubeLoad();
      }, this.handleYoutubeLoad = function () {
        var e = 1920,
          t = 1080;
        r.maxYoutubeDimensions && (e = r.maxYoutubeDimensions.width, t = r.maxYoutubeDimensions.height), s.runActions(e, t);
      }, this.handleCustomLoad = function () {
        setTimeout(function () {
          var e = i[t];
          s.runActions(e.offsetWidth, e.offsetHeight);
        });
      };
    }
    function E(e, t, n) {
      var o = e.elements.sources,
        i = e.props.customClasses,
        r = i[t] ? i[t] : "";
      o[t].className = n + " " + r;
    }
    function I(e, t) {
      var n = e.elements.sources,
        o = e.props.customAttributes;
      for (var i in o[t]) n[t].setAttribute(i, o[t][i]);
    }
    function T(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        i = o.sources,
        r = o.sourceAnimationWrappers,
        s = e.props.sources;
      i[t] = document.createElement("img"), E(e, t, y), i[t].src = s[t], i[t].onload = n[t].handleImageLoad, I(e, t), r[t].appendChild(i[t]);
    }
    function N(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        i = o.sources,
        r = o.sourceAnimationWrappers,
        s = e.props,
        a = s.sources,
        c = s.videosPosters;
      i[t] = document.createElement("video"), E(e, t, y), i[t].src = a[t], i[t].onloadedmetadata = function (e) {
        n[t].handleVideoLoad(e);
      }, i[t].controls = !0, I(e, t), c[t] && (i[t].poster = c[t]);
      var l = document.createElement("source");
      l.src = a[t], i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(i[t]);
    }
    function z(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        r = o.sources,
        s = o.sourceAnimationWrappers,
        a = e.props.sources;
      r[t] = document.createElement("iframe"), E(e, t, "".concat(y, " ").concat(i, "youtube-iframe"));
      var c = a[t],
        l = c.split("?")[1];
      r[t].src = "https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(l || ""), r[t].allowFullscreen = !0, I(e, t), s[t].appendChild(r[t]), n[t].handleYoutubeLoad();
    }
    function P(e, t) {
      var n = e.collections.sourceLoadHandlers,
        o = e.elements,
        i = o.sources,
        r = o.sourceAnimationWrappers,
        s = e.props.sources;
      i[t] = s[t], E(e, t, "".concat(i[t].className, " ").concat(y)), r[t].appendChild(i[t]), n[t].handleCustomLoad();
    }
    function k(e, t) {
      var n = e.elements,
        o = n.sources,
        r = n.sourceAnimationWrappers;
      e.props.sources;
      o[t] = document.createElement("div"), o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c), o[t].innerHTML = "Invalid source", r[t].classList.add(g), r[t].removeChild(r[t].firstChild), r[t].appendChild(o[t]);
    }
    function H(e) {
      var t = e.collections,
        n = t.sourceLoadHandlers,
        o = t.sourcesRenderFunctions,
        i = e.core.sourceDisplayFacade,
        r = e.resolve;
      this.runActionsForSourceTypeAndIndex = function (t, s) {
        var a;
        switch ("invalid" !== t && (n[s] = r(F, [s])), t) {
          case "image":
            a = T;
            break;
          case "video":
            a = N;
            break;
          case "youtube":
            a = z;
            break;
          case "custom":
            a = P;
            break;
          default:
            a = k;
        }
        o[s] = function () {
          return a(e, s);
        }, i.displaySourcesWhichShouldBeDisplayed();
      };
    }
    function W() {
      var e,
        t,
        n,
        o = {
          isUrlYoutubeOne: function isUrlYoutubeOne(e) {
            var t = document.createElement("a");
            return t.href = e, "www.youtube.com" === t.hostname || "youtu.be" === t.hostname;
          },
          getTypeFromResponseContentType: function getTypeFromResponseContentType(e) {
            return e.slice(0, e.indexOf("/"));
          }
        };
      function i() {
        if (4 !== n.readyState) {
          if (2 === n.readyState) {
            var e;
            switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
              case "image":
                e = "image";
                break;
              case "video":
                e = "video";
                break;
              default:
                e = "invalid";
            }
            n.onreadystatechange = null, n.abort(), t(e);
          }
        } else t("invalid");
      }
      this.setUrlToCheck = function (t) {
        e = t;
      }, this.getSourceType = function (r) {
        if (o.isUrlYoutubeOne(e)) return r("youtube");
        t = r, (n = new XMLHttpRequest()).onreadystatechange = i, n.open("GET", e, !0), n.send();
      };
    }
    function R(e, t, n) {
      var o = e.props,
        i = o.types,
        r = o.type,
        s = o.sources,
        a = e.resolve;
      this.getTypeSetByClientForIndex = function (e) {
        var t;
        return i && i[e] ? t = i[e] : r && (t = r), t;
      }, this.retrieveTypeWithXhrForIndex = function (e) {
        var o = a(W);
        o.setUrlToCheck(s[e]), o.getSourceType(function (o) {
          t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
        });
      };
    }
    function D(e, t) {
      var n = e.core.stageManager,
        o = e.elements,
        i = o.smw,
        r = o.sourceWrappersContainer,
        s = e.props,
        l = 0,
        f = document.createElement("div");
      function p(e) {
        f.style.transform = "translateX(".concat(e + l, "px)"), l = 0;
      }
      function h() {
        return (1 + s.slideDistance) * innerWidth;
      }
      f.className = "".concat(d, " ").concat(a, " ").concat(c), f.s = function () {
        f.style.display = "flex";
      }, f.h = function () {
        f.style.display = "none";
      }, f.a = function () {
        f.classList.add(u);
      }, f.d = function () {
        f.classList.remove(u);
      }, f.n = function () {
        f.style.removeProperty("transform");
      }, f.v = function (e) {
        return l = e, f;
      }, f.ne = function () {
        p(-h());
      }, f.z = function () {
        p(0);
      }, f.p = function () {
        p(h());
      }, n.i(t) || f.h(), i[t] = f, r.appendChild(f), function (e, t) {
        var n = e.elements,
          o = n.smw,
          i = n.sourceAnimationWrappers,
          r = document.createElement("div"),
          s = document.createElement("div");
        s.className = "fslightboxl";
        for (var a = 0; a < 3; a++) {
          var c = document.createElement("div");
          s.appendChild(c);
        }
        r.appendChild(s), o[t].appendChild(r), i[t] = r;
      }(e, t);
    }
    function O(e, t, n, o) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
      var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), r.appendChild(s), e.appendChild(r), r;
    }
    function M(e, t) {
      var n = document.createElement("div");
      return n.className = "".concat(i, "toolbar-button ").concat(c), n.title = t, e.appendChild(n), n;
    }
    function j(e, t) {
      var n = document.createElement("div");
      n.className = "".concat(i, "toolbar"), t.appendChild(n), function (e, t) {
        var n = e.componentsServices,
          o = e.data,
          i = e.fs,
          r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
          s = M(t);
        s.title = "Enter fullscreen";
        var a = O(s, "20px", "0 0 18 18", r);
        n.ofs = function () {
          o.ifs = !0, s.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
        }, n.xfs = function () {
          o.ifs = !1, s.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), a.firstChild.setAttributeNS(null, "d", r);
        }, s.onclick = i.t;
      }(e, n), function (e, t) {
        var n = M(t, "Close");
        n.onclick = e.core.lightboxCloser.closeLightbox, O(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
      }(e, n);
    }
    function X(e) {
      var t = e.props.sources,
        n = e.elements.container,
        o = document.createElement("div");
      o.className = "".concat(i, "nav"), n.appendChild(o), j(e, o), t.length > 1 && function (e, t) {
        var n = e.componentsServices,
          o = e.props.sources,
          r = (e.stageIndexes, document.createElement("div"));
        r.className = "".concat(i, "slide-number-container");
        var s = document.createElement("div");
        s.className = c;
        var a = document.createElement("span");
        n.setSlideNumber = function (e) {
          return a.innerHTML = e;
        };
        var l = document.createElement("span");
        l.className = "".concat(i, "slash");
        var u = document.createElement("div");
        u.innerHTML = o.length, r.appendChild(s), s.appendChild(a), s.appendChild(l), s.appendChild(u), t.appendChild(r), setTimeout(function () {
          s.offsetWidth > 55 && (r.style.justifyContent = "flex-start");
        });
      }(e, o);
    }
    function B(e, t, n, o) {
      var i = e.elements.container,
        r = n.charAt(0).toUpperCase() + n.slice(1),
        s = document.createElement("div");
      s.className = "".concat(p, " ").concat(p, "-").concat(n), s.title = "".concat(r, " slide"), s.onclick = t, function (e, t) {
        var n = document.createElement("div");
        n.className = "".concat(f, " ").concat(c), O(n, "20px", "0 0 20 20", t), e.appendChild(n);
      }(s, o), i.appendChild(s);
    }
    function U(e, t) {
      var n = e.classList;
      n.contains(t) && n.remove(t);
    }
    function q(e) {
      var t = e.core,
        n = t.lightboxCloser,
        o = t.slideChangeFacade,
        i = e.fs;
      this.listener = function (e) {
        switch (e.key) {
          case "Escape":
            n.closeLightbox();
            break;
          case "ArrowLeft":
            o.changeToPrevious();
            break;
          case "ArrowRight":
            o.changeToNext();
            break;
          case "F11":
            e.preventDefault(), i.t();
        }
      };
    }
    function V(e) {
      var t = e.elements,
        n = e.sourcePointerProps,
        o = e.stageIndexes;
      function i(e, o) {
        t.smw[e].v(n.swipedX)[o]();
      }
      this.runActionsForEvent = function (e) {
        var r, a, c;
        t.container.contains(t.slideSwipingHoverer) || t.container.appendChild(t.slideSwipingHoverer), r = t.container, a = s, (c = r.classList).contains(a) || c.add(a), n.swipedX = e.screenX - n.downScreenX;
        var l = o.previous,
          u = o.next;
        i(o.current, "z"), void 0 !== l && n.swipedX > 0 ? i(l, "ne") : void 0 !== u && n.swipedX < 0 && i(u, "p");
      };
    }
    function _(e) {
      var t = e.props.sources,
        n = e.resolve,
        o = e.sourcePointerProps,
        i = n(V);
      1 === t.length ? this.listener = function () {
        o.swipedX = 1;
      } : this.listener = function (e) {
        o.isPointering && i.runActionsForEvent(e);
      };
    }
    function Y(e) {
      var t = e.core.slideIndexChanger,
        n = e.elements.smw,
        o = e.stageIndexes,
        i = e.sws;
      function r(e) {
        var t = n[o.current];
        t.a(), t[e]();
      }
      function s(e, t) {
        void 0 !== e && (n[e].s(), n[e][t]());
      }
      this.runPositiveSwipedXActions = function () {
        var e = o.previous;
        if (void 0 === e) r("z");else {
          r("p");
          var n = o.next;
          t.changeTo(e);
          var a = o.previous;
          i.d(a), i.b(n), r("z"), s(a, "ne");
        }
      }, this.runNegativeSwipedXActions = function () {
        var e = o.next;
        if (void 0 === e) r("z");else {
          r("ne");
          var n = o.previous;
          t.changeTo(e);
          var a = o.next;
          i.d(a), i.b(n), r("z"), s(a, "p");
        }
      };
    }
    function J(e, t) {
      e.contains(t) && e.removeChild(t);
    }
    function G(e) {
      var t = e.core.lightboxCloser,
        n = e.elements,
        o = e.resolve,
        i = e.sourcePointerProps,
        r = o(Y);
      this.runNoSwipeActions = function () {
        J(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), i.isPointering = !1;
      }, this.runActions = function () {
        i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), J(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), i.isPointering = !1;
      };
    }
    function $(e) {
      var t = e.resolve,
        n = e.sourcePointerProps,
        o = t(G);
      this.listener = function () {
        n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
      };
    }
    function K(e) {
      var t = this,
        n = e.core,
        o = n.eventsDispatcher,
        i = n.globalEventsController,
        r = n.scrollbarRecompensor,
        s = e.data,
        a = e.elements,
        c = e.fs,
        u = e.props,
        d = e.sourcePointerProps;
      this.isLightboxFadingOut = !1, this.runActions = function () {
        t.isLightboxFadingOut = !0, a.container.classList.add(v), i.removeListeners(), u.exitFullscreenOnClose && s.ifs && c.x(), setTimeout(function () {
          t.isLightboxFadingOut = !1, d.isPointering = !1, a.container.classList.remove(v), document.documentElement.classList.remove(l), r.removeRecompense(), document.body.removeChild(a.container), o.dispatch("onClose");
        }, 270);
      };
    }
    function Q(e) {
      var t, n, o;
      n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function (e, t) {
        for (var n = 0; n < o[e].length; n++) U(o[e][n], t);
      }, function (e) {
        var t = e.core.eventsDispatcher,
          n = e.props;
        t.dispatch = function (e) {
          n[e] && n[e]();
        };
      }(e), function (e) {
        var t = e.componentsServices,
          n = e.data,
          o = e.fs,
          i = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
        function r(e) {
          for (var t = 0; t < i.length; t++) document[e](i[t], s);
        }
        function s() {
          document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t.ofs() : t.xfs();
        }
        o.o = function () {
          t.ofs();
          var e = document.documentElement;
          e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
        }, o.x = function () {
          t.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
        }, o.t = function () {
          n.ifs ? o.x() : o.o();
        }, o.l = function () {
          r("addEventListener");
        }, o.q = function () {
          r("removeEventListener");
        };
      }(e), function (e) {
        var t = e.core,
          n = t.globalEventsController,
          o = t.windowResizeActioner,
          i = e.fs,
          r = e.resolve,
          s = r(q),
          a = r(_),
          c = r($);
        n.attachListeners = function () {
          document.addEventListener("pointermove", a.listener), document.addEventListener("pointerup", c.listener), addEventListener("resize", o.runActions), document.addEventListener("keydown", s.listener), i.l();
        }, n.removeListeners = function () {
          document.removeEventListener("pointermove", a.listener), document.removeEventListener("pointerup", c.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", s.listener), i.q();
        };
      }(e), function (e) {
        var t = e.core.lightboxCloser,
          n = (0, e.resolve)(K);
        t.closeLightbox = function () {
          n.isLightboxFadingOut || n.runActions();
        };
      }(e), function (e) {
        var t = e.data,
          n = e.core.scrollbarRecompensor;
        function o() {
          document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
        }
        n.addRecompense = function () {
          "complete" === document.readyState ? o() : addEventListener("load", function () {
            o(), n.addRecompense = o;
          });
        }, n.removeRecompense = function () {
          document.body.style.removeProperty("margin-right");
        };
      }(e), function (e) {
        var t = e.core,
          n = t.slideChangeFacade,
          o = t.slideIndexChanger,
          i = t.stageManager;
        e.props.sources.length > 1 ? (n.changeToPrevious = function () {
          o.jumpTo(i.getPreviousSlideIndex());
        }, n.changeToNext = function () {
          o.jumpTo(i.getNextSlideIndex());
        }) : (n.changeToPrevious = function () {}, n.changeToNext = function () {});
      }(e), function (e) {
        var t = e.componentsServices,
          n = e.core,
          o = n.slideIndexChanger,
          i = n.sourceDisplayFacade,
          r = n.stageManager,
          s = e.elements,
          a = s.smw,
          c = s.sourceAnimationWrappers,
          l = e.isl,
          u = e.stageIndexes,
          d = e.sws;
        o.changeTo = function (e) {
          u.current = e, r.updateStageIndexes(), t.setSlideNumber(e + 1), i.displaySourcesWhichShouldBeDisplayed();
        }, o.jumpTo = function (e) {
          var t = u.previous,
            n = u.current,
            i = u.next,
            s = l[n],
            f = l[e];
          o.changeTo(e);
          for (var p = 0; p < a.length; p++) a[p].d();
          d.d(n), d.c(), requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              var e = u.previous,
                o = u.next;
              function p() {
                r.i(n) ? n === u.previous ? a[n].ne() : n === u.next && a[n].p() : (a[n].h(), a[n].n());
              }
              s && c[n].classList.add(m), f && c[u.current].classList.add(h), d.a(), void 0 !== e && e !== n && a[e].ne(), a[u.current].n(), void 0 !== o && o !== n && a[o].p(), d.b(t), d.b(i), l[n] ? setTimeout(p, 260) : p();
            });
          });
        };
      }(e), function (e) {
        var t = e.core,
          n = (t.classFacade, t.sourcesPointerDown),
          o = e.elements,
          i = o.smw,
          r = o.sources,
          s = e.sourcePointerProps,
          a = e.stageIndexes;
        n.listener = function (e) {
          "VIDEO" !== e.target.tagName && e.preventDefault(), s.isPointering = !0, s.downScreenX = e.screenX, s.swipedX = 0;
          var t = r[a.current];
          t && t.contains(e.target) ? s.isSourceDownEventTarget = !0 : s.isSourceDownEventTarget = !1;
          for (var n = 0; n < i.length; n++) i[n].d();
        };
      }(e), function (e) {
        var t = e.collections.sourcesRenderFunctions,
          n = e.core.sourceDisplayFacade,
          o = e.props,
          i = e.stageIndexes;
        function r(e) {
          t[e] && (t[e](), delete t[e]);
        }
        n.displaySourcesWhichShouldBeDisplayed = function () {
          if (o.loadOnlyCurrentSource) r(i.current);else for (var e in i) r(i[e]);
        };
      }(e), S(e), function (e) {
        var t = e.core.stageManager,
          n = e.elements,
          o = n.smw,
          i = n.sourceAnimationWrappers,
          r = e.isl,
          s = e.stageIndexes,
          a = e.sws;
        a.a = function () {
          for (var e in s) o[s[e]].s();
        }, a.b = function (e) {
          void 0 === e || t.i(e) || (o[e].h(), o[e].n());
        }, a.c = function () {
          for (var e in s) a.d(s[e]);
        }, a.d = function (e) {
          if (r[e]) {
            var t = i[e];
            U(t, g), U(t, h), U(t, m);
          }
        };
      }(e), function (e) {
        var t = e.collections.sourceSizers,
          n = e.core.windowResizeActioner,
          o = e.data,
          i = e.elements.smw,
          r = e.stageIndexes;
        n.runActions = function () {
          innerWidth < 992 ? o.maxSourceWidth = innerWidth : o.maxSourceWidth = .9 * innerWidth, o.maxSourceHeight = .9 * innerHeight;
          for (var e = 0; e < i.length; e++) i[e].d(), t[e] && t[e].adjustSize();
          var n = r.previous,
            s = r.next;
          void 0 !== n && i[n].ne(), void 0 !== s && i[s].p();
        };
      }(e);
    }
    function Z(e) {
      var t = e.componentsServices,
        n = e.core,
        o = n.eventsDispatcher,
        r = n.globalEventsController,
        s = n.scrollbarRecompensor,
        c = n.sourceDisplayFacade,
        u = n.stageManager,
        f = n.windowResizeActioner,
        p = e.data,
        h = e.elements,
        m = (e.props, e.stageIndexes),
        v = e.sws;
      function b() {
        var t, n;
        p.i = !0, p.scrollbarWidth = function () {
          var e = document.createElement("div"),
            t = e.style,
            n = document.createElement("div");
          t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", n.style.width = "100%", document.body.appendChild(e);
          var o = e.offsetWidth;
          return e.appendChild(n), o - n.offsetWidth;
        }(), Q(e), h.container = document.createElement("div"), h.container.className = "".concat(i, "container ").concat(a, " ").concat(g), function (e) {
          var t = e.elements;
          t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d);
        }(e), X(e), function (e) {
          var t = e.core.sourcesPointerDown,
            n = e.elements,
            o = e.props.sources,
            i = document.createElement("div");
          i.className = "".concat(d, " ").concat(a), n.container.appendChild(i), i.addEventListener("pointerdown", t.listener), n.sourceWrappersContainer = i;
          for (var r = 0; r < o.length; r++) D(e, r);
        }(e), e.props.sources.length > 1 && (n = (t = e).core.slideChangeFacade, B(t, n.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(t, n.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")), function (e) {
          for (var t = e.props.sources, n = e.resolve, o = n(L), i = n(H), r = n(R, [o, i]), s = 0; s < t.length; s++) if ("string" == typeof t[s]) {
            var a = r.getTypeSetByClientForIndex(s);
            if (a) i.runActionsForSourceTypeAndIndex(a, s);else {
              var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
              c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s);
            }
          } else i.runActionsForSourceTypeAndIndex("custom", s);
        }(e), o.dispatch("onInit");
      }
      e.open = function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          i = m.previous,
          a = m.current,
          d = m.next;
        m.current = n, p.i || S(e), u.updateStageIndexes(), p.i ? (v.c(), v.a(), v.b(i), v.b(a), v.b(d), o.dispatch("onShow")) : b(), u.updateStageIndexes(), c.displaySourcesWhichShouldBeDisplayed(), t.setSlideNumber(n + 1), document.body.appendChild(h.container), document.documentElement.classList.add(l), s.addRecompense(), r.attachListeners(), f.runActions(), h.smw[m.current].n(), o.dispatch("onOpen");
      };
    }
    function ee(e, t, n) {
      return (ee = te() ? Reflect.construct.bind() : function (e, t, n) {
        var o = [null];
        o.push.apply(o, t);
        var i = new (Function.bind.apply(e, o))();
        return n && ne(i, n.prototype), i;
      }).apply(null, arguments);
    }
    function te() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }
    function ne(e, t) {
      return (ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function oe(e) {
      return function (e) {
        if (Array.isArray(e)) return ie(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return ie(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function ie(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function re() {
      for (var e = document.getElementsByTagName("a"), t = function t(_t) {
          if (!e[_t].hasAttribute("data-fslightbox")) return "continue";
          var n = e[_t].getAttribute("data-fslightbox"),
            o = e[_t].hasAttribute("data-href") ? e[_t].getAttribute("data-href") : e[_t].getAttribute("href");
          fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox());
          var i = null;
          "#" === o.charAt(0) ? (i = document.getElementById(o.substring(1)).cloneNode(!0)).removeAttribute("id") : i = o, fsLightboxInstances[n].props.sources.push(i), fsLightboxInstances[n].elements.a.push(e[_t]);
          var r = fsLightboxInstances[n].props.sources.length - 1;
          e[_t].onclick = function (e) {
            e.preventDefault(), fsLightboxInstances[n].open(r);
          }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");
          for (var s = ["href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[_t].attributes, c = fsLightboxInstances[n].props.customAttributes, l = 0; l < a.length; l++) if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
            c[r] || (c[r] = {});
            var u = a[l].name.substr(5);
            c[r][u] = a[l].value;
          }
          function d(o, i) {
            e[_t].hasAttribute(i) && (fsLightboxInstances[n].props[o][r] = e[_t].getAttribute(i));
          }
        }, n = 0; n < e.length; n++) t(n);
      var o = Object.keys(fsLightboxInstances);
      window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
    }
    window.FsLightbox = function () {
      var e = this;
      this.props = {
        sources: [],
        customAttributes: [],
        customClasses: [],
        types: [],
        videosPosters: [],
        slideDistance: .3
      }, this.data = {
        isFullscreenOpen: !1,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: 0
      }, this.isl = [], this.sourcePointerProps = {
        downScreenX: null,
        isPointering: !1,
        isSourceDownEventTarget: !1,
        swipedX: 0
      }, this.stageIndexes = {}, this.elements = {
        a: [],
        container: null,
        slideSwipingHoverer: null,
        smw: [],
        sourceWrappersContainer: null,
        sources: [],
        sourceAnimationWrappers: []
      }, this.componentsServices = {
        setSlideNumber: function setSlideNumber() {}
      }, this.resolve = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return n.unshift(e), ee(t, oe(n));
      }, this.collections = {
        sourceLoadHandlers: [],
        sourcesRenderFunctions: [],
        sourceSizers: []
      }, this.core = {
        classFacade: {},
        eventsDispatcher: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        sourcesPointerDown: {},
        sourceDisplayFacade: {},
        stageManager: {},
        windowResizeActioner: {}
      }, this.fs = {}, this.sws = {}, Z(this), this.close = function () {
        return e.core.lightboxCloser.closeLightbox();
      };
    }, window.fsLightboxInstances = {}, re(), window.refreshFsLightbox = function () {
      for (var e in fsLightboxInstances) {
        var t = fsLightboxInstances[e].props;
        fsLightboxInstances[e] = new FsLightbox(), fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = [];
      }
      re();
    };
  }]);
});

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/*Transition entre les pages .slide-in*/

// Sélectionnez tous les éléments "a" dans le menu
var menuLinks = document.querySelectorAll(".onglet");

// Ajoutez un événement "click" à tous les éléments "a" dans le menu
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function (event) {
    event.preventDefault(); // Empêche la redirection par défaut
    var link = this;
    // Sélectionnez l'élément "slide-in"
    var slideIn = document.querySelector(".slide-in");
    // Modifiez les propriétés de style de l'élément "slide-in" pour le déplacer vers la gauche
    slideIn.style.left = "0%";
    setTimeout(function () {
      window.location = link.href; // Redirigez vers la page liée à l'élément "a" cliqué
    }, 1350);
  });
}

/* Toggle slide du panneau de contrôle */
var isSlideOpen = false;
function toggleSlide() {
  var slide = document.getElementById("panneau-controle-couleur");
  if (!isSlideOpen) {
    slide.style.width = "60px";
    slide.style.right = "0px";
    isSlideOpen = true;
  } else {
    slide.style.right = "-80px";
    isSlideOpen = false;
  }
}
window.toggleSlide = toggleSlide;

/* Panneau de contrôle des couleurs */

var colorSquares = document.querySelectorAll('.color-square');

/* Couleur par défaut */
var defaultColor = "#dd7631";
var color = sessionStorage.getItem('selectedColor') || defaultColor;
document.querySelectorAll('.color').forEach(function (el) {
  el.style.color = color;
});
document.querySelectorAll('.bg-color').forEach(function (el) {
  el.style.backgroundColor = color;
});
document.querySelectorAll('.signin').forEach(function (el) {
  el.style.boxShadow = "0 0 35px ".concat(color);
});
colorSquares.forEach(function (square) {
  square.addEventListener('click', function () {
    switch (this.id) {
      case 'color-1':
        color = "#c70039";
        break;
      case 'color-2':
        color = "#7121c7";
        break;
      case 'color-3':
        color = "#04A777";
        break;
      case 'color-4':
        color = "#035aa6";
        break;
      case 'color-5':
        color = "#00909e";
        break;
      case 'color-6':
        color = defaultColor;
        break;
    }
    sessionStorage.setItem('selectedColor', color);
    document.querySelectorAll('.color').forEach(function (el) {
      el.style.color = color;
    });
    document.querySelectorAll('.bg-color').forEach(function (el) {
      el.style.backgroundColor = color;
    });
    document.querySelectorAll('.signin').forEach(function (el) {
      el.style.boxShadow = "0 0 35px ".concat(color);
    });
  });
});

/*Pour gérer la couleur de l'icone du menu hamburger*/
var lines = document.querySelectorAll('.line');
document.querySelector('#menu-toggle-btn').addEventListener('mouseover', function () {
  for (var _i = 0; _i < lines.length; _i++) {
    lines[_i].style.stroke = color;
  }
});
document.querySelector('#menu-toggle-btn').addEventListener('mouseout', function () {
  for (var _i2 = 0; _i2 < lines.length; _i2++) {
    lines[_i2].style.stroke = "";
  }
});

/*Pour gérer la couleur de certains boutons qui ont la classe bg-color-hov */
var bgColorHov = document.querySelectorAll('.bg-color-hov');
bgColorHov.forEach(function (el) {
  el.addEventListener('mouseover', function () {
    this.style.backgroundColor = color;
  });
  el.addEventListener('mouseout', function () {
    this.style.backgroundColor = "";
  });
});

/*Pour gérer la couleur des onglets dans le menu qui ont la classe onglet */
var onglet = document.querySelectorAll('.onglet');
onglet.forEach(function (el) {
  el.addEventListener('mouseover', function () {
    this.style.color = color;
  });
  el.addEventListener('mouseout', function () {
    this.style.color = "";
  });
});

// Récupère les éléments de bouton de menu et de menu
var toggleBtn = document.querySelector('#menu-toggle-btn');
var menu = document.querySelector('#menu');

// Ajoute un écouteur d'événement click au bouton de menu
toggleBtn.addEventListener('click', function () {
  // Inverse l'état de visibilité du menu
  menu.classList.toggle('visible');
});

//Animation txt rotate dans la page accueil (=home)

var TxtRotate = function TxtRotate(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  var that = this;
  var delta = 300 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.setAttribute('type', 'text/css');
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid #666 }";
  document.body.appendChild(css);
};

/***/ }),

/***/ "./assets/styles/app.sass":
/*!********************************!*\
  !*** ./assets/styles/app.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-7f32ba"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Ozs7Ozs7Ozs7OztBQ3JOSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZhZGUtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZzbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Fzcz85MTgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNUWUxFXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zYXNzJztcblxuLy8gSlNcbmltcG9ydCAnLi9qcy9tYWluLmpzJztcbmltcG9ydCAnLi9qcy9mYWRlLWluLmpzJztcblxuLy8gSlMgTElCU1xuaW1wb3J0ICcuL2pzL2ZzbGlnaHRib3guanMnO1xuIiwiLypBcHBhcml0aW9uIGRlIHRvdXMgbGVzIMOpbMOpbWVudHMgbG9ycyBkdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2UqL1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhZGUtaW4nKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZWxlbWVudHNbaV0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgfSwgaSAqIDUwMCk7XHJcbiAgICB9XHJcbn0pOyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgbj10KCk7Zm9yKHZhciBvIGluIG4pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109bltvXX19KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihvKXtpZih0W29dKXJldHVybiB0W29dLmV4cG9ydHM7dmFyIGk9dFtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbiksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxvKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKW4uZChvLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIG8saT1cImZzbGlnaHRib3gtXCIscj1cIlwiLmNvbmNhdChpLFwic3R5bGVzXCIpLHM9XCJcIi5jb25jYXQoaSxcImN1cnNvci1ncmFiYmluZ1wiKSxhPVwiXCIuY29uY2F0KGksXCJmdWxsLWRpbWVuc2lvblwiKSxjPVwiXCIuY29uY2F0KGksXCJmbGV4LWNlbnRlcmVkXCIpLGw9XCJcIi5jb25jYXQoaSxcIm9wZW5cIiksdT1cIlwiLmNvbmNhdChpLFwidHJhbnNmb3JtLXRyYW5zaXRpb25cIiksZD1cIlwiLmNvbmNhdChpLFwiYWJzb2x1dGVkXCIpLGY9XCJcIi5jb25jYXQoaSxcInNsaWRlLWJ0blwiKSxwPVwiXCIuY29uY2F0KGYsXCItY29udGFpbmVyXCIpLGg9XCJcIi5jb25jYXQoaSxcImZhZGUtaW5cIiksbT1cIlwiLmNvbmNhdChpLFwiZmFkZS1vdXRcIiksZz1oK1wiLXN0cm9uZ1wiLHY9bStcIi1zdHJvbmdcIixiPVwiXCIuY29uY2F0KGksXCJvcGFjaXR5LVwiKSx4PVwiXCIuY29uY2F0KGIsXCIxXCIpLHk9XCJcIi5jb25jYXQoaSxcInNvdXJjZVwiKTtmdW5jdGlvbiB3KGUpe3JldHVybih3PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiBTKGUpe3ZhciB0PWUuc3RhZ2VJbmRleGVzLG49ZS5jb3JlLnN0YWdlTWFuYWdlcixvPWUucHJvcHMuc291cmNlcy5sZW5ndGgtMTtuLmdldFByZXZpb3VzU2xpZGVJbmRleD1mdW5jdGlvbigpe3JldHVybiAwPT09dC5jdXJyZW50P286dC5jdXJyZW50LTF9LG4uZ2V0TmV4dFNsaWRlSW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jdXJyZW50PT09bz8wOnQuY3VycmVudCsxfSxuLnVwZGF0ZVN0YWdlSW5kZXhlcz0wPT09bz9mdW5jdGlvbigpe306MT09PW8/ZnVuY3Rpb24oKXswPT09dC5jdXJyZW50Pyh0Lm5leHQ9MSxkZWxldGUgdC5wcmV2aW91cyk6KHQucHJldmlvdXM9MCxkZWxldGUgdC5uZXh0KX06ZnVuY3Rpb24oKXt0LnByZXZpb3VzPW4uZ2V0UHJldmlvdXNTbGlkZUluZGV4KCksdC5uZXh0PW4uZ2V0TmV4dFNsaWRlSW5kZXgoKX0sbi5pPW88PTI/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7dmFyIG49dC5jdXJyZW50O2lmKDA9PT1uJiZlPT09b3x8bj09PW8mJjA9PT1lKXJldHVybiEwO3ZhciBpPW4tZTtyZXR1cm4tMT09PWl8fDA9PT1pfHwxPT09aX19XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQ/XCJ1bmRlZmluZWRcIjp3KGRvY3VtZW50KSkmJigobz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpLmNsYXNzTmFtZT1yLG8uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIuZnNsaWdodGJveC1hYnNvbHV0ZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LWZhZGUtaW57YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1pbiAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dHthbmltYXRpb246ZnNsaWdodGJveC1mYWRlLW91dCAuM3MgZWFzZX0uZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3thbmltYXRpb246ZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZyAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuNywxKX0uZnNsaWdodGJveC1mYWRlLW91dC1zdHJvbmd7YW5pbWF0aW9uOmZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25nIC4zcyBlYXNlfUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWlue2Zyb217b3BhY2l0eTouNjV9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXR7ZnJvbXtvcGFjaXR5Oi4zNX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZnNsaWdodGJveC1mYWRlLWluLXN0cm9uZ3tmcm9te29wYWNpdHk6LjN9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZzbGlnaHRib3gtZmFkZS1vdXQtc3Ryb25ne2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19LmZzbGlnaHRib3gtY3Vyc29yLWdyYWJiaW5ne2N1cnNvcjpncmFiYmluZ30uZnNsaWdodGJveC1mdWxsLWRpbWVuc2lvbnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LW9wZW57b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxMDAlfS5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5mc2xpZ2h0Ym94LW9wYWNpdHktMHtvcGFjaXR5OjAhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LW9wYWNpdHktMXtvcGFjaXR5OjEhaW1wb3J0YW50fS5mc2xpZ2h0Ym94LXNjcm9sbGJhcmZpeHtwYWRkaW5nLXJpZ2h0OjE3cHh9LmZzbGlnaHRib3gtdHJhbnNmb3JtLXRyYW5zaXRpb257dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzfS5mc2xpZ2h0Ym94LWNvbnRhaW5lcntmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChyZ2JhKDMwLDMwLDMwLC45KSwjMDAwIDE4MTAlKTt0b3VjaC1hY3Rpb246cGluY2gtem9vbTt6LWluZGV4OjEwMDAwMDAwMDA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0uZnNsaWdodGJveC1jb250YWluZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmZzbGlnaHRib3gtc3ZnLXBhdGh7dHJhbnNpdGlvbjpmaWxsIC4xNXMgZWFzZTtmaWxsOiNkZGR9LmZzbGlnaHRib3gtbmF2e2hlaWdodDo0NXB4O3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5mc2xpZ2h0Ym94LXNsaWRlLW51bWJlci1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiNkN2Q3ZDc7ei1pbmRleDowO21heC13aWR0aDo1NXB4O3RleHQtYWxpZ246bGVmdH0uZnNsaWdodGJveC1zbGlkZS1udW1iZXItY29udGFpbmVyIC5mc2xpZ2h0Ym94LWZsZXgtY2VudGVyZWR7aGVpZ2h0OjEwMCV9LmZzbGlnaHRib3gtc2xhc2h7ZGlzcGxheTpibG9jazttYXJnaW46MCA1cHg7d2lkdGg6MXB4O2hlaWdodDoxMnB4O3RyYW5zZm9ybTpyb3RhdGUoMTVkZWcpO2JhY2tncm91bmQ6I2ZmZn0uZnNsaWdodGJveC10b29sYmFye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MztyaWdodDowO3RvcDowO2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kOnJnYmEoMzUsMzUsMzUsLjY1KX0uZnNsaWdodGJveC10b29sYmFyLWJ1dHRvbntoZWlnaHQ6MTAwJTt3aWR0aDo0NXB4O2N1cnNvcjpwb2ludGVyfS5mc2xpZ2h0Ym94LXRvb2xiYXItYnV0dG9uOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2ZmZn0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoxMnB4IDEycHggMTJweCA2cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjM7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXJ7cGFkZGluZzoyMnB4IDIycHggMjJweCA2cHh9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVye3BhZGRpbmc6MzBweCAzMHB4IDMwcHggNnB4fX0uZnNsaWdodGJveC1zbGlkZS1idG4tY29udGFpbmVyOmhvdmVyIC5mc2xpZ2h0Ym94LXN2Zy1wYXRoe2ZpbGw6I2YxZjFmMX0uZnNsaWdodGJveC1zbGlkZS1idG57cGFkZGluZzo5cHg7Zm9udC1zaXplOjI2cHg7YmFja2dyb3VuZDpyZ2JhKDM1LDM1LDM1LC42NSl9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bntwYWRkaW5nOjEwcHh9fUBtZWRpYSAobWluLXdpZHRoOjE2MDBweCl7LmZzbGlnaHRib3gtc2xpZGUtYnRue3BhZGRpbmc6MTFweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1wcmV2aW91c3tsZWZ0OjB9QG1lZGlhIChtYXgtd2lkdGg6NDc1Ljk5cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItcHJldmlvdXN7cGFkZGluZy1sZWZ0OjNweH19LmZzbGlnaHRib3gtc2xpZGUtYnRuLWNvbnRhaW5lci1uZXh0e3JpZ2h0OjA7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDozcHh9QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MjJweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLWxlZnQ6MzBweH19QG1lZGlhIChtaW4td2lkdGg6NDc2cHgpey5mc2xpZ2h0Ym94LXNsaWRlLWJ0bi1jb250YWluZXItbmV4dHtwYWRkaW5nLXJpZ2h0OjZweH19LmZzbGlnaHRib3gtZG93bi1ldmVudC1kZXRlY3Rvcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjF9LmZzbGlnaHRib3gtc2xpZGUtc3dpcGluZy1ob3ZlcmVye3otaW5kZXg6NH0uZnNsaWdodGJveC1pbnZhbGlkLWZpbGUtd3JhcHBlcntmb250LXNpemU6MjJweDtjb2xvcjojZWFlYmViO21hcmdpbjphdXRvfS5mc2xpZ2h0Ym94LXZpZGVve29iamVjdC1maXQ6Y292ZXJ9LmZzbGlnaHRib3gteW91dHViZS1pZnJhbWV7Ym9yZGVyOjB9LmZzbGlnaHRib3hse2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6NjdweDtoZWlnaHQ6NjdweH0uZnNsaWdodGJveGwgZGl2e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjU0cHg7aGVpZ2h0OjU0cHg7bWFyZ2luOjZweDtib3JkZXI6NXB4IHNvbGlkO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2FuaW1hdGlvbjpmc2xpZ2h0Ym94bCAxLjJzIGN1YmljLWJlemllciguNSwwLC41LDEpIGluZmluaXRlfS5mc2xpZ2h0Ym94bCBkaXY6bnRoLWNoaWxkKDEpe2FuaW1hdGlvbi1kZWxheTotLjQ1c30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgyKXthbmltYXRpb24tZGVsYXk6LS4zc30uZnNsaWdodGJveGwgZGl2Om50aC1jaGlsZCgzKXthbmltYXRpb24tZGVsYXk6LS4xNXN9QGtleWZyYW1lcyBmc2xpZ2h0Ym94bHswJXt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uZnNsaWdodGJveC1zb3VyY2V7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyO29wYWNpdHk6MH1cIikpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobykpO2Z1bmN0aW9uIEwoZSl7dmFyIHQsbj1lLnByb3BzLG89MCxpPXt9O3RoaXMuZ2V0U291cmNlVHlwZUZyb21Mb2NhbFN0b3JhZ2VCeVVybD1mdW5jdGlvbihlKXtyZXR1cm4gdFtlXT90W2VdOnIoZSl9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKGUsbil7aWYoITE9PT1pW25dJiYoby0tLFwiaW52YWxpZFwiIT09ZT9pW25dPWU6ZGVsZXRlIGlbbl0sMD09PW8pKXshZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl19KHQsaSk7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnNsaWdodGJveC10eXBlc1wiLEpTT04uc3RyaW5naWZ5KHQpKX1jYXRjaChlKXt9fX07dmFyIHI9ZnVuY3Rpb24oZSl7bysrLGlbZV09ITF9O2lmKG4uZGlzYWJsZUxvY2FsU3RvcmFnZSl0aGlzLmdldFNvdXJjZVR5cGVGcm9tTG9jYWxTdG9yYWdlQnlVcmw9ZnVuY3Rpb24oKXt9LHRoaXMuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsPWZ1bmN0aW9uKCl7fTtlbHNle3RyeXt0PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmc2xpZ2h0Ym94LXR5cGVzXCIpKX1jYXRjaChlKXt9dHx8KHQ9e30sdGhpcy5nZXRTb3VyY2VUeXBlRnJvbUxvY2FsU3RvcmFnZUJ5VXJsPXIpfX1mdW5jdGlvbiBBKGUsdCxuLG8pe3ZhciBpPWUuZGF0YSxyPWUuZWxlbWVudHMuc291cmNlcyxzPW4vbyxhPTA7dGhpcy5hZGp1c3RTaXplPWZ1bmN0aW9uKCl7aWYoKGE9aS5tYXhTb3VyY2VXaWR0aC9zKTxpLm1heFNvdXJjZUhlaWdodClyZXR1cm4gbjxpLm1heFNvdXJjZVdpZHRoJiYoYT1vKSxjKCk7YT1vPmkubWF4U291cmNlSGVpZ2h0P2kubWF4U291cmNlSGVpZ2h0Om8sYygpfTt2YXIgYz1mdW5jdGlvbigpe3JbdF0uc3R5bGUud2lkdGg9YSpzK1wicHhcIixyW3RdLnN0eWxlLmhlaWdodD1hK1wicHhcIn19ZnVuY3Rpb24gQyhlLHQpe3ZhciBuPXRoaXMsbz1lLmNvbGxlY3Rpb25zLnNvdXJjZVNpemVycyxpPWUuZWxlbWVudHMscj1pLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLHM9aS5zb3VyY2VzLGE9ZS5pc2wsYz1lLnJlc29sdmU7ZnVuY3Rpb24gbChlLG4pe29bdF09YyhBLFt0LGUsbl0pLG9bdF0uYWRqdXN0U2l6ZSgpfXRoaXMucnVuQWN0aW9ucz1mdW5jdGlvbihlLG8pe2FbdF09ITAsc1t0XS5jbGFzc0xpc3QuYWRkKHgpLHJbdF0uY2xhc3NMaXN0LmFkZChnKSxyW3RdLnJlbW92ZUNoaWxkKHJbdF0uZmlyc3RDaGlsZCksbChlLG8pLG4ucnVuQWN0aW9ucz1sfX1mdW5jdGlvbiBGKGUsdCl7dmFyIG4sbz10aGlzLGk9ZS5lbGVtZW50cy5zb3VyY2VzLHI9ZS5wcm9wcyxzPSgwLGUucmVzb2x2ZSkoQyxbdF0pO3RoaXMuaGFuZGxlSW1hZ2VMb2FkPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LG49dC5uYXR1cmFsV2lkdGgsbz10Lm5hdHVyYWxIZWlnaHQ7cy5ydW5BY3Rpb25zKG4sbyl9LHRoaXMuaGFuZGxlVmlkZW9Mb2FkPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LG89dC52aWRlb1dpZHRoLGk9dC52aWRlb0hlaWdodDtuPSEwLHMucnVuQWN0aW9ucyhvLGkpfSx0aGlzLmhhbmRsZU5vdE1ldGFEYXRlZFZpZGVvTG9hZD1mdW5jdGlvbigpe258fG8uaGFuZGxlWW91dHViZUxvYWQoKX0sdGhpcy5oYW5kbGVZb3V0dWJlTG9hZD1mdW5jdGlvbigpe3ZhciBlPTE5MjAsdD0xMDgwO3IubWF4WW91dHViZURpbWVuc2lvbnMmJihlPXIubWF4WW91dHViZURpbWVuc2lvbnMud2lkdGgsdD1yLm1heFlvdXR1YmVEaW1lbnNpb25zLmhlaWdodCkscy5ydW5BY3Rpb25zKGUsdCl9LHRoaXMuaGFuZGxlQ3VzdG9tTG9hZD1mdW5jdGlvbigpe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dmFyIGU9aVt0XTtzLnJ1bkFjdGlvbnMoZS5vZmZzZXRXaWR0aCxlLm9mZnNldEhlaWdodCl9KSl9fWZ1bmN0aW9uIEUoZSx0LG4pe3ZhciBvPWUuZWxlbWVudHMuc291cmNlcyxpPWUucHJvcHMuY3VzdG9tQ2xhc3NlcyxyPWlbdF0/aVt0XTpcIlwiO29bdF0uY2xhc3NOYW1lPW4rXCIgXCIrcn1mdW5jdGlvbiBJKGUsdCl7dmFyIG49ZS5lbGVtZW50cy5zb3VyY2VzLG89ZS5wcm9wcy5jdXN0b21BdHRyaWJ1dGVzO2Zvcih2YXIgaSBpbiBvW3RdKW5bdF0uc2V0QXR0cmlidXRlKGksb1t0XVtpXSl9ZnVuY3Rpb24gVChlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLnNvdXJjZXM7aVt0XT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLEUoZSx0LHkpLGlbdF0uc3JjPXNbdF0saVt0XS5vbmxvYWQ9blt0XS5oYW5kbGVJbWFnZUxvYWQsSShlLHQpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSl9ZnVuY3Rpb24gTihlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLGE9cy5zb3VyY2VzLGM9cy52aWRlb3NQb3N0ZXJzO2lbdF09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpLEUoZSx0LHkpLGlbdF0uc3JjPWFbdF0saVt0XS5vbmxvYWRlZG1ldGFkYXRhPWZ1bmN0aW9uKGUpe25bdF0uaGFuZGxlVmlkZW9Mb2FkKGUpfSxpW3RdLmNvbnRyb2xzPSEwLEkoZSx0KSxjW3RdJiYoaVt0XS5wb3N0ZXI9Y1t0XSk7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtsLnNyYz1hW3RdLGlbdF0uYXBwZW5kQ2hpbGQobCksc2V0VGltZW91dChuW3RdLmhhbmRsZU5vdE1ldGFEYXRlZFZpZGVvTG9hZCwzZTMpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSl9ZnVuY3Rpb24geihlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxyPW8uc291cmNlcyxzPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMsYT1lLnByb3BzLnNvdXJjZXM7clt0XT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpLEUoZSx0LFwiXCIuY29uY2F0KHksXCIgXCIpLmNvbmNhdChpLFwieW91dHViZS1pZnJhbWVcIikpO3ZhciBjPWFbdF0sbD1jLnNwbGl0KFwiP1wiKVsxXTtyW3RdLnNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiLmNvbmNhdChjLm1hdGNoKC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLylbMl0sXCI/XCIpLmNvbmNhdChsfHxcIlwiKSxyW3RdLmFsbG93RnVsbHNjcmVlbj0hMCxJKGUsdCksc1t0XS5hcHBlbmRDaGlsZChyW3RdKSxuW3RdLmhhbmRsZVlvdXR1YmVMb2FkKCl9ZnVuY3Rpb24gUChlLHQpe3ZhciBuPWUuY29sbGVjdGlvbnMuc291cmNlTG9hZEhhbmRsZXJzLG89ZS5lbGVtZW50cyxpPW8uc291cmNlcyxyPW8uc291cmNlQW5pbWF0aW9uV3JhcHBlcnMscz1lLnByb3BzLnNvdXJjZXM7aVt0XT1zW3RdLEUoZSx0LFwiXCIuY29uY2F0KGlbdF0uY2xhc3NOYW1lLFwiIFwiKS5jb25jYXQoeSkpLHJbdF0uYXBwZW5kQ2hpbGQoaVt0XSksblt0XS5oYW5kbGVDdXN0b21Mb2FkKCl9ZnVuY3Rpb24gayhlLHQpe3ZhciBuPWUuZWxlbWVudHMsbz1uLnNvdXJjZXMscj1uLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzO2UucHJvcHMuc291cmNlcztvW3RdPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksb1t0XS5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcImludmFsaWQtZmlsZS13cmFwcGVyIFwiKS5jb25jYXQoYyksb1t0XS5pbm5lckhUTUw9XCJJbnZhbGlkIHNvdXJjZVwiLHJbdF0uY2xhc3NMaXN0LmFkZChnKSxyW3RdLnJlbW92ZUNoaWxkKHJbdF0uZmlyc3RDaGlsZCksclt0XS5hcHBlbmRDaGlsZChvW3RdKX1mdW5jdGlvbiBIKGUpe3ZhciB0PWUuY29sbGVjdGlvbnMsbj10LnNvdXJjZUxvYWRIYW5kbGVycyxvPXQuc291cmNlc1JlbmRlckZ1bmN0aW9ucyxpPWUuY29yZS5zb3VyY2VEaXNwbGF5RmFjYWRlLHI9ZS5yZXNvbHZlO3RoaXMucnVuQWN0aW9uc0ZvclNvdXJjZVR5cGVBbmRJbmRleD1mdW5jdGlvbih0LHMpe3ZhciBhO3N3aXRjaChcImludmFsaWRcIiE9PXQmJihuW3NdPXIoRixbc10pKSx0KXtjYXNlXCJpbWFnZVwiOmE9VDticmVhaztjYXNlXCJ2aWRlb1wiOmE9TjticmVhaztjYXNlXCJ5b3V0dWJlXCI6YT16O2JyZWFrO2Nhc2VcImN1c3RvbVwiOmE9UDticmVhaztkZWZhdWx0OmE9a31vW3NdPWZ1bmN0aW9uKCl7cmV0dXJuIGEoZSxzKX0saS5kaXNwbGF5U291cmNlc1doaWNoU2hvdWxkQmVEaXNwbGF5ZWQoKX19ZnVuY3Rpb24gVygpe3ZhciBlLHQsbixvPXtpc1VybFlvdXR1YmVPbmU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7cmV0dXJuIHQuaHJlZj1lLFwid3d3LnlvdXR1YmUuY29tXCI9PT10Lmhvc3RuYW1lfHxcInlvdXR1LmJlXCI9PT10Lmhvc3RuYW1lfSxnZXRUeXBlRnJvbVJlc3BvbnNlQ29udGVudFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2xpY2UoMCxlLmluZGV4T2YoXCIvXCIpKX19O2Z1bmN0aW9uIGkoKXtpZig0IT09bi5yZWFkeVN0YXRlKXtpZigyPT09bi5yZWFkeVN0YXRlKXt2YXIgZTtzd2l0Y2goby5nZXRUeXBlRnJvbVJlc3BvbnNlQ29udGVudFR5cGUobi5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKSkpe2Nhc2VcImltYWdlXCI6ZT1cImltYWdlXCI7YnJlYWs7Y2FzZVwidmlkZW9cIjplPVwidmlkZW9cIjticmVhaztkZWZhdWx0OmU9XCJpbnZhbGlkXCJ9bi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxuLmFib3J0KCksdChlKX19ZWxzZSB0KFwiaW52YWxpZFwiKX10aGlzLnNldFVybFRvQ2hlY2s9ZnVuY3Rpb24odCl7ZT10fSx0aGlzLmdldFNvdXJjZVR5cGU9ZnVuY3Rpb24ocil7aWYoby5pc1VybFlvdXR1YmVPbmUoZSkpcmV0dXJuIHIoXCJ5b3V0dWJlXCIpO3Q9ciwobj1uZXcgWE1MSHR0cFJlcXVlc3QpLm9ucmVhZHlzdGF0ZWNoYW5nZT1pLG4ub3BlbihcIkdFVFwiLGUsITApLG4uc2VuZCgpfX1mdW5jdGlvbiBSKGUsdCxuKXt2YXIgbz1lLnByb3BzLGk9by50eXBlcyxyPW8udHlwZSxzPW8uc291cmNlcyxhPWUucmVzb2x2ZTt0aGlzLmdldFR5cGVTZXRCeUNsaWVudEZvckluZGV4PWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBpJiZpW2VdP3Q9aVtlXTpyJiYodD1yKSx0fSx0aGlzLnJldHJpZXZlVHlwZVdpdGhYaHJGb3JJbmRleD1mdW5jdGlvbihlKXt2YXIgbz1hKFcpO28uc2V0VXJsVG9DaGVjayhzW2VdKSxvLmdldFNvdXJjZVR5cGUoKGZ1bmN0aW9uKG8pe3QuaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsKG8sc1tlXSksbi5ydW5BY3Rpb25zRm9yU291cmNlVHlwZUFuZEluZGV4KG8sZSl9KSl9fWZ1bmN0aW9uIEQoZSx0KXt2YXIgbj1lLmNvcmUuc3RhZ2VNYW5hZ2VyLG89ZS5lbGVtZW50cyxpPW8uc213LHI9by5zb3VyY2VXcmFwcGVyc0NvbnRhaW5lcixzPWUucHJvcHMsbD0wLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmdW5jdGlvbiBwKGUpe2Yuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlWChcIi5jb25jYXQoZStsLFwicHgpXCIpLGw9MH1mdW5jdGlvbiBoKCl7cmV0dXJuKDErcy5zbGlkZURpc3RhbmNlKSppbm5lcldpZHRofWYuY2xhc3NOYW1lPVwiXCIuY29uY2F0KGQsXCIgXCIpLmNvbmNhdChhLFwiIFwiKS5jb25jYXQoYyksZi5zPWZ1bmN0aW9uKCl7Zi5zdHlsZS5kaXNwbGF5PVwiZmxleFwifSxmLmg9ZnVuY3Rpb24oKXtmLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9LGYuYT1mdW5jdGlvbigpe2YuY2xhc3NMaXN0LmFkZCh1KX0sZi5kPWZ1bmN0aW9uKCl7Zi5jbGFzc0xpc3QucmVtb3ZlKHUpfSxmLm49ZnVuY3Rpb24oKXtmLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNmb3JtXCIpfSxmLnY9ZnVuY3Rpb24oZSl7cmV0dXJuIGw9ZSxmfSxmLm5lPWZ1bmN0aW9uKCl7cCgtaCgpKX0sZi56PWZ1bmN0aW9uKCl7cCgwKX0sZi5wPWZ1bmN0aW9uKCl7cChoKCkpfSxuLmkodCl8fGYuaCgpLGlbdF09ZixyLmFwcGVuZENoaWxkKGYpLGZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5lbGVtZW50cyxvPW4uc213LGk9bi5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPVwiZnNsaWdodGJveGxcIjtmb3IodmFyIGE9MDthPDM7YSsrKXt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuYXBwZW5kQ2hpbGQoYyl9ci5hcHBlbmRDaGlsZChzKSxvW3RdLmFwcGVuZENoaWxkKHIpLGlbdF09cn0oZSx0KX1mdW5jdGlvbiBPKGUsdCxuLG8pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIik7ci5zZXRBdHRyaWJ1dGVOUyhudWxsLFwid2lkdGhcIix0KSxyLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJoZWlnaHRcIix0KSxyLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ2aWV3Qm94XCIsbik7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInBhdGhcIik7cmV0dXJuIHMuc2V0QXR0cmlidXRlTlMobnVsbCxcImNsYXNzXCIsXCJcIi5jb25jYXQoaSxcInN2Zy1wYXRoXCIpKSxzLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJkXCIsbyksci5hcHBlbmRDaGlsZChzKSxlLmFwcGVuZENoaWxkKHIpLHJ9ZnVuY3Rpb24gTShlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJ0b29sYmFyLWJ1dHRvbiBcIikuY29uY2F0KGMpLG4udGl0bGU9dCxlLmFwcGVuZENoaWxkKG4pLG59ZnVuY3Rpb24gaihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInRvb2xiYXJcIiksdC5hcHBlbmRDaGlsZChuKSxmdW5jdGlvbihlLHQpe3ZhciBuPWUuY29tcG9uZW50c1NlcnZpY2VzLG89ZS5kYXRhLGk9ZS5mcyxyPVwiTTQuNSAxMUgzdjRoNHYtMS41SDQuNVYxMXpNMyA3aDEuNVY0LjVIN1YzSDN2NHptMTAuNSA2LjVIMTFWMTVoNHYtNGgtMS41djIuNXpNMTEgM3YxLjVoMi41VjdIMTVWM2gtNHpcIixzPU0odCk7cy50aXRsZT1cIkVudGVyIGZ1bGxzY3JlZW5cIjt2YXIgYT1PKHMsXCIyMHB4XCIsXCIwIDAgMTggMThcIixyKTtuLm9mcz1mdW5jdGlvbigpe28uaWZzPSEwLHMudGl0bGU9XCJFeGl0IGZ1bGxzY3JlZW5cIixhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ3aWR0aFwiLFwiMjRweFwiKSxhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJoZWlnaHRcIixcIjI0cHhcIiksYS5zZXRBdHRyaWJ1dGVOUyhudWxsLFwidmlld0JveFwiLFwiMCAwIDk1MCAxMDI0XCIpLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGVOUyhudWxsLFwiZFwiLFwiTTY4MiAzNDJoMTI4djg0aC0yMTJ2LTIxMmg4NHYxMjh6TTU5OCA4MTB2LTIxMmgyMTJ2ODRoLTEyOHYxMjhoLTg0ek0zNDIgMzQydi0xMjhoODR2MjEyaC0yMTJ2LTg0aDEyOHpNMjE0IDY4MnYtODRoMjEydjIxMmgtODR2LTEyOGgtMTI4elwiKX0sbi54ZnM9ZnVuY3Rpb24oKXtvLmlmcz0hMSxzLnRpdGxlPVwiRW50ZXIgZnVsbHNjcmVlblwiLGEuc2V0QXR0cmlidXRlTlMobnVsbCxcIndpZHRoXCIsXCIyMHB4XCIpLGEuc2V0QXR0cmlidXRlTlMobnVsbCxcImhlaWdodFwiLFwiMjBweFwiKSxhLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJ2aWV3Qm94XCIsXCIwIDAgMTggMThcIiksYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZU5TKG51bGwsXCJkXCIscil9LHMub25jbGljaz1pLnR9KGUsbiksZnVuY3Rpb24oZSx0KXt2YXIgbj1NKHQsXCJDbG9zZVwiKTtuLm9uY2xpY2s9ZS5jb3JlLmxpZ2h0Ym94Q2xvc2VyLmNsb3NlTGlnaHRib3gsTyhuLFwiMjBweFwiLFwiMCAwIDI0IDI0XCIsXCJNIDQuNzA3MDMxMiAzLjI5Mjk2ODggTCAzLjI5Mjk2ODggNC43MDcwMzEyIEwgMTAuNTg1OTM4IDEyIEwgMy4yOTI5Njg4IDE5LjI5Mjk2OSBMIDQuNzA3MDMxMiAyMC43MDcwMzEgTCAxMiAxMy40MTQwNjIgTCAxOS4yOTI5NjkgMjAuNzA3MDMxIEwgMjAuNzA3MDMxIDE5LjI5Mjk2OSBMIDEzLjQxNDA2MiAxMiBMIDIwLjcwNzAzMSA0LjcwNzAzMTIgTCAxOS4yOTI5NjkgMy4yOTI5Njg4IEwgMTIgMTAuNTg1OTM4IEwgNC43MDcwMzEyIDMuMjkyOTY4OCB6XCIpfShlLG4pfWZ1bmN0aW9uIFgoZSl7dmFyIHQ9ZS5wcm9wcy5zb3VyY2VzLG49ZS5lbGVtZW50cy5jb250YWluZXIsbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO28uY2xhc3NOYW1lPVwiXCIuY29uY2F0KGksXCJuYXZcIiksbi5hcHBlbmRDaGlsZChvKSxqKGUsbyksdC5sZW5ndGg+MSYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNvbXBvbmVudHNTZXJ2aWNlcyxvPWUucHJvcHMuc291cmNlcyxyPShlLnN0YWdlSW5kZXhlcyxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChpLFwic2xpZGUtbnVtYmVyLWNvbnRhaW5lclwiKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPWM7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi5zZXRTbGlkZU51bWJlcj1mdW5jdGlvbihlKXtyZXR1cm4gYS5pbm5lckhUTUw9ZX07dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bC5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInNsYXNoXCIpO3ZhciB1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5pbm5lckhUTUw9by5sZW5ndGgsci5hcHBlbmRDaGlsZChzKSxzLmFwcGVuZENoaWxkKGEpLHMuYXBwZW5kQ2hpbGQobCkscy5hcHBlbmRDaGlsZCh1KSx0LmFwcGVuZENoaWxkKHIpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cy5vZmZzZXRXaWR0aD41NSYmKHIuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCIpfSkpfShlLG8pfWZ1bmN0aW9uIEIoZSx0LG4sbyl7dmFyIGk9ZS5lbGVtZW50cy5jb250YWluZXIscj1uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSkscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NOYW1lPVwiXCIuY29uY2F0KHAsXCIgXCIpLmNvbmNhdChwLFwiLVwiKS5jb25jYXQobikscy50aXRsZT1cIlwiLmNvbmNhdChyLFwiIHNsaWRlXCIpLHMub25jbGljaz10LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLmNsYXNzTmFtZT1cIlwiLmNvbmNhdChmLFwiIFwiKS5jb25jYXQoYyksTyhuLFwiMjBweFwiLFwiMCAwIDIwIDIwXCIsdCksZS5hcHBlbmRDaGlsZChuKX0ocyxvKSxpLmFwcGVuZENoaWxkKHMpfWZ1bmN0aW9uIFUoZSx0KXt2YXIgbj1lLmNsYXNzTGlzdDtuLmNvbnRhaW5zKHQpJiZuLnJlbW92ZSh0KX1mdW5jdGlvbiBxKGUpe3ZhciB0PWUuY29yZSxuPXQubGlnaHRib3hDbG9zZXIsbz10LnNsaWRlQ2hhbmdlRmFjYWRlLGk9ZS5mczt0aGlzLmxpc3RlbmVyPWZ1bmN0aW9uKGUpe3N3aXRjaChlLmtleSl7Y2FzZVwiRXNjYXBlXCI6bi5jbG9zZUxpZ2h0Ym94KCk7YnJlYWs7Y2FzZVwiQXJyb3dMZWZ0XCI6by5jaGFuZ2VUb1ByZXZpb3VzKCk7YnJlYWs7Y2FzZVwiQXJyb3dSaWdodFwiOm8uY2hhbmdlVG9OZXh0KCk7YnJlYWs7Y2FzZVwiRjExXCI6ZS5wcmV2ZW50RGVmYXVsdCgpLGkudCgpfX19ZnVuY3Rpb24gVihlKXt2YXIgdD1lLmVsZW1lbnRzLG49ZS5zb3VyY2VQb2ludGVyUHJvcHMsbz1lLnN0YWdlSW5kZXhlcztmdW5jdGlvbiBpKGUsbyl7dC5zbXdbZV0udihuLnN3aXBlZFgpW29dKCl9dGhpcy5ydW5BY3Rpb25zRm9yRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIHIsYSxjO3QuY29udGFpbmVyLmNvbnRhaW5zKHQuc2xpZGVTd2lwaW5nSG92ZXJlcil8fHQuY29udGFpbmVyLmFwcGVuZENoaWxkKHQuc2xpZGVTd2lwaW5nSG92ZXJlcikscj10LmNvbnRhaW5lcixhPXMsKGM9ci5jbGFzc0xpc3QpLmNvbnRhaW5zKGEpfHxjLmFkZChhKSxuLnN3aXBlZFg9ZS5zY3JlZW5YLW4uZG93blNjcmVlblg7dmFyIGw9by5wcmV2aW91cyx1PW8ubmV4dDtpKG8uY3VycmVudCxcInpcIiksdm9pZCAwIT09bCYmbi5zd2lwZWRYPjA/aShsLFwibmVcIik6dm9pZCAwIT09dSYmbi5zd2lwZWRYPDAmJmkodSxcInBcIil9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZS5wcm9wcy5zb3VyY2VzLG49ZS5yZXNvbHZlLG89ZS5zb3VyY2VQb2ludGVyUHJvcHMsaT1uKFYpOzE9PT10Lmxlbmd0aD90aGlzLmxpc3RlbmVyPWZ1bmN0aW9uKCl7by5zd2lwZWRYPTF9OnRoaXMubGlzdGVuZXI9ZnVuY3Rpb24oZSl7by5pc1BvaW50ZXJpbmcmJmkucnVuQWN0aW9uc0ZvckV2ZW50KGUpfX1mdW5jdGlvbiBZKGUpe3ZhciB0PWUuY29yZS5zbGlkZUluZGV4Q2hhbmdlcixuPWUuZWxlbWVudHMuc213LG89ZS5zdGFnZUluZGV4ZXMsaT1lLnN3cztmdW5jdGlvbiByKGUpe3ZhciB0PW5bby5jdXJyZW50XTt0LmEoKSx0W2VdKCl9ZnVuY3Rpb24gcyhlLHQpe3ZvaWQgMCE9PWUmJihuW2VdLnMoKSxuW2VdW3RdKCkpfXRoaXMucnVuUG9zaXRpdmVTd2lwZWRYQWN0aW9ucz1mdW5jdGlvbigpe3ZhciBlPW8ucHJldmlvdXM7aWYodm9pZCAwPT09ZSlyKFwielwiKTtlbHNle3IoXCJwXCIpO3ZhciBuPW8ubmV4dDt0LmNoYW5nZVRvKGUpO3ZhciBhPW8ucHJldmlvdXM7aS5kKGEpLGkuYihuKSxyKFwielwiKSxzKGEsXCJuZVwiKX19LHRoaXMucnVuTmVnYXRpdmVTd2lwZWRYQWN0aW9ucz1mdW5jdGlvbigpe3ZhciBlPW8ubmV4dDtpZih2b2lkIDA9PT1lKXIoXCJ6XCIpO2Vsc2V7cihcIm5lXCIpO3ZhciBuPW8ucHJldmlvdXM7dC5jaGFuZ2VUbyhlKTt2YXIgYT1vLm5leHQ7aS5kKGEpLGkuYihuKSxyKFwielwiKSxzKGEsXCJwXCIpfX19ZnVuY3Rpb24gSihlLHQpe2UuY29udGFpbnModCkmJmUucmVtb3ZlQ2hpbGQodCl9ZnVuY3Rpb24gRyhlKXt2YXIgdD1lLmNvcmUubGlnaHRib3hDbG9zZXIsbj1lLmVsZW1lbnRzLG89ZS5yZXNvbHZlLGk9ZS5zb3VyY2VQb2ludGVyUHJvcHMscj1vKFkpO3RoaXMucnVuTm9Td2lwZUFjdGlvbnM9ZnVuY3Rpb24oKXtKKG4uY29udGFpbmVyLG4uc2xpZGVTd2lwaW5nSG92ZXJlciksaS5pc1NvdXJjZURvd25FdmVudFRhcmdldHx8dC5jbG9zZUxpZ2h0Ym94KCksaS5pc1BvaW50ZXJpbmc9ITF9LHRoaXMucnVuQWN0aW9ucz1mdW5jdGlvbigpe2kuc3dpcGVkWD4wP3IucnVuUG9zaXRpdmVTd2lwZWRYQWN0aW9ucygpOnIucnVuTmVnYXRpdmVTd2lwZWRYQWN0aW9ucygpLEoobi5jb250YWluZXIsbi5zbGlkZVN3aXBpbmdIb3ZlcmVyKSxuLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHMpLGkuaXNQb2ludGVyaW5nPSExfX1mdW5jdGlvbiAkKGUpe3ZhciB0PWUucmVzb2x2ZSxuPWUuc291cmNlUG9pbnRlclByb3BzLG89dChHKTt0aGlzLmxpc3RlbmVyPWZ1bmN0aW9uKCl7bi5pc1BvaW50ZXJpbmcmJihuLnN3aXBlZFg/by5ydW5BY3Rpb25zKCk6by5ydW5Ob1N3aXBlQWN0aW9ucygpKX19ZnVuY3Rpb24gSyhlKXt2YXIgdD10aGlzLG49ZS5jb3JlLG89bi5ldmVudHNEaXNwYXRjaGVyLGk9bi5nbG9iYWxFdmVudHNDb250cm9sbGVyLHI9bi5zY3JvbGxiYXJSZWNvbXBlbnNvcixzPWUuZGF0YSxhPWUuZWxlbWVudHMsYz1lLmZzLHU9ZS5wcm9wcyxkPWUuc291cmNlUG9pbnRlclByb3BzO3RoaXMuaXNMaWdodGJveEZhZGluZ091dD0hMSx0aGlzLnJ1bkFjdGlvbnM9ZnVuY3Rpb24oKXt0LmlzTGlnaHRib3hGYWRpbmdPdXQ9ITAsYS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh2KSxpLnJlbW92ZUxpc3RlbmVycygpLHUuZXhpdEZ1bGxzY3JlZW5PbkNsb3NlJiZzLmlmcyYmYy54KCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0LmlzTGlnaHRib3hGYWRpbmdPdXQ9ITEsZC5pc1BvaW50ZXJpbmc9ITEsYS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh2KSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsKSxyLnJlbW92ZVJlY29tcGVuc2UoKSxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEuY29udGFpbmVyKSxvLmRpc3BhdGNoKFwib25DbG9zZVwiKX0pLDI3MCl9fWZ1bmN0aW9uIFEoZSl7dmFyIHQsbixvO249KHQ9ZSkuY29yZS5jbGFzc0ZhY2FkZSxvPXQuZWxlbWVudHMsbi5yZW1vdmVGcm9tRWFjaEVsZW1lbnRDbGFzc0lmQ29udGFpbnM9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPG9bZV0ubGVuZ3RoO24rKylVKG9bZV1bbl0sdCl9LGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZS5ldmVudHNEaXNwYXRjaGVyLG49ZS5wcm9wczt0LmRpc3BhdGNoPWZ1bmN0aW9uKGUpe25bZV0mJm5bZV0oKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29tcG9uZW50c1NlcnZpY2VzLG49ZS5kYXRhLG89ZS5mcyxpPVtcImZ1bGxzY3JlZW5jaGFuZ2VcIixcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIixcIm1vemZ1bGxzY3JlZW5jaGFuZ2VcIixcIk1TRnVsbHNjcmVlbkNoYW5nZVwiXTtmdW5jdGlvbiByKGUpe2Zvcih2YXIgdD0wO3Q8aS5sZW5ndGg7dCsrKWRvY3VtZW50W2VdKGlbdF0scyl9ZnVuY3Rpb24gcygpe2RvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50fHxkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW58fGRvY3VtZW50Lm1vekZ1bGxTY3JlZW58fGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQ/dC5vZnMoKTp0LnhmcygpfW8ubz1mdW5jdGlvbigpe3Qub2ZzKCk7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2UucmVxdWVzdEZ1bGxzY3JlZW4/ZS5yZXF1ZXN0RnVsbHNjcmVlbigpOmUubW96UmVxdWVzdEZ1bGxTY3JlZW4/ZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpOmUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4/ZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOmUubXNSZXF1ZXN0RnVsbHNjcmVlbiYmZS5tc1JlcXVlc3RGdWxsc2NyZWVuKCl9LG8ueD1mdW5jdGlvbigpe3QueGZzKCksZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4/ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTpkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuP2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTpkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbj9kb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpOmRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4mJmRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKX0sby50PWZ1bmN0aW9uKCl7bi5pZnM/by54KCk6by5vKCl9LG8ubD1mdW5jdGlvbigpe3IoXCJhZGRFdmVudExpc3RlbmVyXCIpfSxvLnE9ZnVuY3Rpb24oKXtyKFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiKX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZSxuPXQuZ2xvYmFsRXZlbnRzQ29udHJvbGxlcixvPXQud2luZG93UmVzaXplQWN0aW9uZXIsaT1lLmZzLHI9ZS5yZXNvbHZlLHM9cihxKSxhPXIoXyksYz1yKCQpO24uYXR0YWNoTGlzdGVuZXJzPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYS5saXN0ZW5lciksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLGMubGlzdGVuZXIpLGFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixvLnJ1bkFjdGlvbnMpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIscy5saXN0ZW5lciksaS5sKCl9LG4ucmVtb3ZlTGlzdGVuZXJzPWZ1bmN0aW9uKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYS5saXN0ZW5lciksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLGMubGlzdGVuZXIpLHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixvLnJ1bkFjdGlvbnMpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIscy5saXN0ZW5lciksaS5xKCl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUubGlnaHRib3hDbG9zZXIsbj0oMCxlLnJlc29sdmUpKEspO3QuY2xvc2VMaWdodGJveD1mdW5jdGlvbigpe24uaXNMaWdodGJveEZhZGluZ091dHx8bi5ydW5BY3Rpb25zKCl9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmRhdGEsbj1lLmNvcmUuc2Nyb2xsYmFyUmVjb21wZW5zb3I7ZnVuY3Rpb24gbygpe2RvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0PmlubmVySGVpZ2h0JiYoZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5SaWdodD10LnNjcm9sbGJhcldpZHRoK1wicHhcIil9bi5hZGRSZWNvbXBlbnNlPWZ1bmN0aW9uKCl7XCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9vKCk6YWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXtvKCksbi5hZGRSZWNvbXBlbnNlPW99KSl9LG4ucmVtb3ZlUmVjb21wZW5zZT1mdW5jdGlvbigpe2RvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW4tcmlnaHRcIil9fShlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUsbj10LnNsaWRlQ2hhbmdlRmFjYWRlLG89dC5zbGlkZUluZGV4Q2hhbmdlcixpPXQuc3RhZ2VNYW5hZ2VyO2UucHJvcHMuc291cmNlcy5sZW5ndGg+MT8obi5jaGFuZ2VUb1ByZXZpb3VzPWZ1bmN0aW9uKCl7by5qdW1wVG8oaS5nZXRQcmV2aW91c1NsaWRlSW5kZXgoKSl9LG4uY2hhbmdlVG9OZXh0PWZ1bmN0aW9uKCl7by5qdW1wVG8oaS5nZXROZXh0U2xpZGVJbmRleCgpKX0pOihuLmNoYW5nZVRvUHJldmlvdXM9ZnVuY3Rpb24oKXt9LG4uY2hhbmdlVG9OZXh0PWZ1bmN0aW9uKCl7fSl9KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29tcG9uZW50c1NlcnZpY2VzLG49ZS5jb3JlLG89bi5zbGlkZUluZGV4Q2hhbmdlcixpPW4uc291cmNlRGlzcGxheUZhY2FkZSxyPW4uc3RhZ2VNYW5hZ2VyLHM9ZS5lbGVtZW50cyxhPXMuc213LGM9cy5zb3VyY2VBbmltYXRpb25XcmFwcGVycyxsPWUuaXNsLHU9ZS5zdGFnZUluZGV4ZXMsZD1lLnN3cztvLmNoYW5nZVRvPWZ1bmN0aW9uKGUpe3UuY3VycmVudD1lLHIudXBkYXRlU3RhZ2VJbmRleGVzKCksdC5zZXRTbGlkZU51bWJlcihlKzEpLGkuZGlzcGxheVNvdXJjZXNXaGljaFNob3VsZEJlRGlzcGxheWVkKCl9LG8uanVtcFRvPWZ1bmN0aW9uKGUpe3ZhciB0PXUucHJldmlvdXMsbj11LmN1cnJlbnQsaT11Lm5leHQscz1sW25dLGY9bFtlXTtvLmNoYW5nZVRvKGUpO2Zvcih2YXIgcD0wO3A8YS5sZW5ndGg7cCsrKWFbcF0uZCgpO2QuZChuKSxkLmMoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3ZhciBlPXUucHJldmlvdXMsbz11Lm5leHQ7ZnVuY3Rpb24gcCgpe3IuaShuKT9uPT09dS5wcmV2aW91cz9hW25dLm5lKCk6bj09PXUubmV4dCYmYVtuXS5wKCk6KGFbbl0uaCgpLGFbbl0ubigpKX1zJiZjW25dLmNsYXNzTGlzdC5hZGQobSksZiYmY1t1LmN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoaCksZC5hKCksdm9pZCAwIT09ZSYmZSE9PW4mJmFbZV0ubmUoKSxhW3UuY3VycmVudF0ubigpLHZvaWQgMCE9PW8mJm8hPT1uJiZhW29dLnAoKSxkLmIodCksZC5iKGkpLGxbbl0/c2V0VGltZW91dChwLDI2MCk6cCgpfSkpfSkpfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb3JlLG49KHQuY2xhc3NGYWNhZGUsdC5zb3VyY2VzUG9pbnRlckRvd24pLG89ZS5lbGVtZW50cyxpPW8uc213LHI9by5zb3VyY2VzLHM9ZS5zb3VyY2VQb2ludGVyUHJvcHMsYT1lLnN0YWdlSW5kZXhlcztuLmxpc3RlbmVyPWZ1bmN0aW9uKGUpe1wiVklERU9cIiE9PWUudGFyZ2V0LnRhZ05hbWUmJmUucHJldmVudERlZmF1bHQoKSxzLmlzUG9pbnRlcmluZz0hMCxzLmRvd25TY3JlZW5YPWUuc2NyZWVuWCxzLnN3aXBlZFg9MDt2YXIgdD1yW2EuY3VycmVudF07dCYmdC5jb250YWlucyhlLnRhcmdldCk/cy5pc1NvdXJjZURvd25FdmVudFRhcmdldD0hMDpzLmlzU291cmNlRG93bkV2ZW50VGFyZ2V0PSExO2Zvcih2YXIgbj0wO248aS5sZW5ndGg7bisrKWlbbl0uZCgpfX0oZSksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb2xsZWN0aW9ucy5zb3VyY2VzUmVuZGVyRnVuY3Rpb25zLG49ZS5jb3JlLnNvdXJjZURpc3BsYXlGYWNhZGUsbz1lLnByb3BzLGk9ZS5zdGFnZUluZGV4ZXM7ZnVuY3Rpb24gcihlKXt0W2VdJiYodFtlXSgpLGRlbGV0ZSB0W2VdKX1uLmRpc3BsYXlTb3VyY2VzV2hpY2hTaG91bGRCZURpc3BsYXllZD1mdW5jdGlvbigpe2lmKG8ubG9hZE9ubHlDdXJyZW50U291cmNlKXIoaS5jdXJyZW50KTtlbHNlIGZvcih2YXIgZSBpbiBpKXIoaVtlXSl9fShlKSxTKGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29yZS5zdGFnZU1hbmFnZXIsbj1lLmVsZW1lbnRzLG89bi5zbXcsaT1uLnNvdXJjZUFuaW1hdGlvbldyYXBwZXJzLHI9ZS5pc2wscz1lLnN0YWdlSW5kZXhlcyxhPWUuc3dzO2EuYT1mdW5jdGlvbigpe2Zvcih2YXIgZSBpbiBzKW9bc1tlXV0ucygpfSxhLmI9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZXx8dC5pKGUpfHwob1tlXS5oKCksb1tlXS5uKCkpfSxhLmM9ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gcylhLmQoc1tlXSl9LGEuZD1mdW5jdGlvbihlKXtpZihyW2VdKXt2YXIgdD1pW2VdO1UodCxnKSxVKHQsaCksVSh0LG0pfX19KGUpLGZ1bmN0aW9uKGUpe3ZhciB0PWUuY29sbGVjdGlvbnMuc291cmNlU2l6ZXJzLG49ZS5jb3JlLndpbmRvd1Jlc2l6ZUFjdGlvbmVyLG89ZS5kYXRhLGk9ZS5lbGVtZW50cy5zbXcscj1lLnN0YWdlSW5kZXhlcztuLnJ1bkFjdGlvbnM9ZnVuY3Rpb24oKXtpbm5lcldpZHRoPDk5Mj9vLm1heFNvdXJjZVdpZHRoPWlubmVyV2lkdGg6by5tYXhTb3VyY2VXaWR0aD0uOSppbm5lcldpZHRoLG8ubWF4U291cmNlSGVpZ2h0PS45KmlubmVySGVpZ2h0O2Zvcih2YXIgZT0wO2U8aS5sZW5ndGg7ZSsrKWlbZV0uZCgpLHRbZV0mJnRbZV0uYWRqdXN0U2l6ZSgpO3ZhciBuPXIucHJldmlvdXMscz1yLm5leHQ7dm9pZCAwIT09biYmaVtuXS5uZSgpLHZvaWQgMCE9PXMmJmlbc10ucCgpfX0oZSl9ZnVuY3Rpb24gWihlKXt2YXIgdD1lLmNvbXBvbmVudHNTZXJ2aWNlcyxuPWUuY29yZSxvPW4uZXZlbnRzRGlzcGF0Y2hlcixyPW4uZ2xvYmFsRXZlbnRzQ29udHJvbGxlcixzPW4uc2Nyb2xsYmFyUmVjb21wZW5zb3IsYz1uLnNvdXJjZURpc3BsYXlGYWNhZGUsdT1uLnN0YWdlTWFuYWdlcixmPW4ud2luZG93UmVzaXplQWN0aW9uZXIscD1lLmRhdGEsaD1lLmVsZW1lbnRzLG09KGUucHJvcHMsZS5zdGFnZUluZGV4ZXMpLHY9ZS5zd3M7ZnVuY3Rpb24gYigpe3ZhciB0LG47cC5pPSEwLHAuc2Nyb2xsYmFyV2lkdGg9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQ9ZS5zdHlsZSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC52aXNpYmlsaXR5PVwiaGlkZGVuXCIsdC53aWR0aD1cIjEwMHB4XCIsdC5tc092ZXJmbG93U3R5bGU9XCJzY3JvbGxiYXJcIix0Lm92ZXJmbG93PVwic2Nyb2xsXCIsbi5zdHlsZS53aWR0aD1cIjEwMCVcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO3ZhciBvPWUub2Zmc2V0V2lkdGg7cmV0dXJuIGUuYXBwZW5kQ2hpbGQobiksby1uLm9mZnNldFdpZHRofSgpLFEoZSksaC5jb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxoLmNvbnRhaW5lci5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcImNvbnRhaW5lciBcIikuY29uY2F0KGEsXCIgXCIpLmNvbmNhdChnKSxmdW5jdGlvbihlKXt2YXIgdD1lLmVsZW1lbnRzO3Quc2xpZGVTd2lwaW5nSG92ZXJlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQuc2xpZGVTd2lwaW5nSG92ZXJlci5jbGFzc05hbWU9XCJcIi5jb25jYXQoaSxcInNsaWRlLXN3aXBpbmctaG92ZXJlciBcIikuY29uY2F0KGEsXCIgXCIpLmNvbmNhdChkKX0oZSksWChlKSxmdW5jdGlvbihlKXt2YXIgdD1lLmNvcmUuc291cmNlc1BvaW50ZXJEb3duLG49ZS5lbGVtZW50cyxvPWUucHJvcHMuc291cmNlcyxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc05hbWU9XCJcIi5jb25jYXQoZCxcIiBcIikuY29uY2F0KGEpLG4uY29udGFpbmVyLmFwcGVuZENoaWxkKGkpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsdC5saXN0ZW5lciksbi5zb3VyY2VXcmFwcGVyc0NvbnRhaW5lcj1pO2Zvcih2YXIgcj0wO3I8by5sZW5ndGg7cisrKUQoZSxyKX0oZSksZS5wcm9wcy5zb3VyY2VzLmxlbmd0aD4xJiYobj0odD1lKS5jb3JlLnNsaWRlQ2hhbmdlRmFjYWRlLEIodCxuLmNoYW5nZVRvUHJldmlvdXMsXCJwcmV2aW91c1wiLFwiTTE4LjI3MSw5LjIxMkgzLjYxNWw0LjE4NC00LjE4NGMwLjMwNi0wLjMwNiwwLjMwNi0wLjgwMSwwLTEuMTA3Yy0wLjMwNi0wLjMwNi0wLjgwMS0wLjMwNi0xLjEwNywwTDEuMjEsOS40MDNDMS4xOTQsOS40MTcsMS4xNzQsOS40MjEsMS4xNTgsOS40MzdjLTAuMTgxLDAuMTgxLTAuMjQyLDAuNDI1LTAuMjA5LDAuNjZjMC4wMDUsMC4wMzgsMC4wMTIsMC4wNzEsMC4wMjIsMC4xMDljMC4wMjgsMC4wOTgsMC4wNzUsMC4xODgsMC4xNDIsMC4yNzFjMC4wMjEsMC4wMjYsMC4wMjEsMC4wNjEsMC4wNDUsMC4wODVjMC4wMTUsMC4wMTYsMC4wMzQsMC4wMiwwLjA1LDAuMDMzbDUuNDg0LDUuNDgzYzAuMzA2LDAuMzA3LDAuODAxLDAuMzA3LDEuMTA3LDBjMC4zMDYtMC4zMDUsMC4zMDYtMC44MDEsMC0xLjEwNWwtNC4xODQtNC4xODVoMTQuNjU2YzAuNDM2LDAsMC43ODgtMC4zNTMsMC43ODgtMC43ODhTMTguNzA3LDkuMjEyLDE4LjI3MSw5LjIxMnpcIiksQih0LG4uY2hhbmdlVG9OZXh0LFwibmV4dFwiLFwiTTEuNzI5LDkuMjEyaDE0LjY1NmwtNC4xODQtNC4xODRjLTAuMzA3LTAuMzA2LTAuMzA3LTAuODAxLDAtMS4xMDdjMC4zMDUtMC4zMDYsMC44MDEtMC4zMDYsMS4xMDYsMGw1LjQ4MSw1LjQ4MmMwLjAxOCwwLjAxNCwwLjAzNywwLjAxOSwwLjA1MywwLjAzNGMwLjE4MSwwLjE4MSwwLjI0MiwwLjQyNSwwLjIwOSwwLjY2Yy0wLjAwNCwwLjAzOC0wLjAxMiwwLjA3MS0wLjAyMSwwLjEwOWMtMC4wMjgsMC4wOTgtMC4wNzUsMC4xODgtMC4xNDMsMC4yNzFjLTAuMDIxLDAuMDI2LTAuMDIxLDAuMDYxLTAuMDQ1LDAuMDg1Yy0wLjAxNSwwLjAxNi0wLjAzNCwwLjAyLTAuMDUxLDAuMDMzbC01LjQ4Myw1LjQ4M2MtMC4zMDYsMC4zMDctMC44MDIsMC4zMDctMS4xMDYsMGMtMC4zMDctMC4zMDUtMC4zMDctMC44MDEsMC0xLjEwNWw0LjE4NC00LjE4NUgxLjcyOWMtMC40MzYsMC0wLjc4OC0wLjM1My0wLjc4OC0wLjc4OFMxLjI5Myw5LjIxMiwxLjcyOSw5LjIxMnpcIikpLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnByb3BzLnNvdXJjZXMsbj1lLnJlc29sdmUsbz1uKEwpLGk9bihIKSxyPW4oUixbbyxpXSkscz0wO3M8dC5sZW5ndGg7cysrKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0W3NdKXt2YXIgYT1yLmdldFR5cGVTZXRCeUNsaWVudEZvckluZGV4KHMpO2lmKGEpaS5ydW5BY3Rpb25zRm9yU291cmNlVHlwZUFuZEluZGV4KGEscyk7ZWxzZXt2YXIgYz1vLmdldFNvdXJjZVR5cGVGcm9tTG9jYWxTdG9yYWdlQnlVcmwodFtzXSk7Yz9pLnJ1bkFjdGlvbnNGb3JTb3VyY2VUeXBlQW5kSW5kZXgoYyxzKTpyLnJldHJpZXZlVHlwZVdpdGhYaHJGb3JJbmRleChzKX19ZWxzZSBpLnJ1bkFjdGlvbnNGb3JTb3VyY2VUeXBlQW5kSW5kZXgoXCJjdXN0b21cIixzKX0oZSksby5kaXNwYXRjaChcIm9uSW5pdFwiKX1lLm9wZW49ZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxpPW0ucHJldmlvdXMsYT1tLmN1cnJlbnQsZD1tLm5leHQ7bS5jdXJyZW50PW4scC5pfHxTKGUpLHUudXBkYXRlU3RhZ2VJbmRleGVzKCkscC5pPyh2LmMoKSx2LmEoKSx2LmIoaSksdi5iKGEpLHYuYihkKSxvLmRpc3BhdGNoKFwib25TaG93XCIpKTpiKCksdS51cGRhdGVTdGFnZUluZGV4ZXMoKSxjLmRpc3BsYXlTb3VyY2VzV2hpY2hTaG91bGRCZURpc3BsYXllZCgpLHQuc2V0U2xpZGVOdW1iZXIobisxKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGguY29udGFpbmVyKSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChsKSxzLmFkZFJlY29tcGVuc2UoKSxyLmF0dGFjaExpc3RlbmVycygpLGYucnVuQWN0aW9ucygpLGguc213W20uY3VycmVudF0ubigpLG8uZGlzcGF0Y2goXCJvbk9wZW5cIil9fWZ1bmN0aW9uIGVlKGUsdCxuKXtyZXR1cm4oZWU9dGUoKT9SZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk6ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPVtudWxsXTtvLnB1c2guYXBwbHkobyx0KTt2YXIgaT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseShlLG8pKTtyZXR1cm4gbiYmbmUoaSxuLnByb3RvdHlwZSksaX0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiB0ZSgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fWZ1bmN0aW9uIG5lKGUsdCl7cmV0dXJuKG5lPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0pKGUsdCl9ZnVuY3Rpb24gb2UoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGllKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBpZShlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBpZShlLHQpfShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpZShlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLG89bmV3IEFycmF5KHQpO248dDtuKyspb1tuXT1lW25dO3JldHVybiBvfWZ1bmN0aW9uIHJlKCl7Zm9yKHZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSx0PWZ1bmN0aW9uKHQpe2lmKCFlW3RdLmhhc0F0dHJpYnV0ZShcImRhdGEtZnNsaWdodGJveFwiKSlyZXR1cm5cImNvbnRpbnVlXCI7dmFyIG49ZVt0XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZzbGlnaHRib3hcIiksbz1lW3RdLmhhc0F0dHJpYnV0ZShcImRhdGEtaHJlZlwiKT9lW3RdLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTplW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIik7ZnNMaWdodGJveEluc3RhbmNlc1tuXXx8KGZzTGlnaHRib3hJbnN0YW5jZXNbbl09bmV3IEZzTGlnaHRib3gpO3ZhciBpPW51bGw7XCIjXCI9PT1vLmNoYXJBdCgwKT8oaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChvLnN1YnN0cmluZygxKSkuY2xvbmVOb2RlKCEwKSkucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik6aT1vLGZzTGlnaHRib3hJbnN0YW5jZXNbbl0ucHJvcHMuc291cmNlcy5wdXNoKGkpLGZzTGlnaHRib3hJbnN0YW5jZXNbbl0uZWxlbWVudHMuYS5wdXNoKGVbdF0pO3ZhciByPWZzTGlnaHRib3hJbnN0YW5jZXNbbl0ucHJvcHMuc291cmNlcy5sZW5ndGgtMTtlW3RdLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGZzTGlnaHRib3hJbnN0YW5jZXNbbl0ub3BlbihyKX0sZChcInR5cGVzXCIsXCJkYXRhLXR5cGVcIiksZChcInZpZGVvc1Bvc3RlcnNcIixcImRhdGEtdmlkZW8tcG9zdGVyXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWNsYXNzXCIpLGQoXCJjdXN0b21DbGFzc2VzXCIsXCJkYXRhLWN1c3RvbS1jbGFzc1wiKTtmb3IodmFyIHM9W1wiaHJlZlwiLFwiZGF0YS1mc2xpZ2h0Ym94XCIsXCJkYXRhLWhyZWZcIixcImRhdGEtdHlwZVwiLFwiZGF0YS12aWRlby1wb3N0ZXJcIixcImRhdGEtY2xhc3NcIixcImRhdGEtY3VzdG9tLWNsYXNzXCJdLGE9ZVt0XS5hdHRyaWJ1dGVzLGM9ZnNMaWdodGJveEluc3RhbmNlc1tuXS5wcm9wcy5jdXN0b21BdHRyaWJ1dGVzLGw9MDtsPGEubGVuZ3RoO2wrKylpZigtMT09PXMuaW5kZXhPZihhW2xdLm5hbWUpJiZcImRhdGEtXCI9PT1hW2xdLm5hbWUuc3Vic3RyKDAsNSkpe2Nbcl18fChjW3JdPXt9KTt2YXIgdT1hW2xdLm5hbWUuc3Vic3RyKDUpO2Nbcl1bdV09YVtsXS52YWx1ZX1mdW5jdGlvbiBkKG8saSl7ZVt0XS5oYXNBdHRyaWJ1dGUoaSkmJihmc0xpZ2h0Ym94SW5zdGFuY2VzW25dLnByb3BzW29dW3JdPWVbdF0uZ2V0QXR0cmlidXRlKGkpKX19LG49MDtuPGUubGVuZ3RoO24rKyl0KG4pO3ZhciBvPU9iamVjdC5rZXlzKGZzTGlnaHRib3hJbnN0YW5jZXMpO3dpbmRvdy5mc0xpZ2h0Ym94PWZzTGlnaHRib3hJbnN0YW5jZXNbb1tvLmxlbmd0aC0xXV19d2luZG93LkZzTGlnaHRib3g9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucHJvcHM9e3NvdXJjZXM6W10sY3VzdG9tQXR0cmlidXRlczpbXSxjdXN0b21DbGFzc2VzOltdLHR5cGVzOltdLHZpZGVvc1Bvc3RlcnM6W10sc2xpZGVEaXN0YW5jZTouM30sdGhpcy5kYXRhPXtpc0Z1bGxzY3JlZW5PcGVuOiExLG1heFNvdXJjZVdpZHRoOjAsbWF4U291cmNlSGVpZ2h0OjAsc2Nyb2xsYmFyV2lkdGg6MH0sdGhpcy5pc2w9W10sdGhpcy5zb3VyY2VQb2ludGVyUHJvcHM9e2Rvd25TY3JlZW5YOm51bGwsaXNQb2ludGVyaW5nOiExLGlzU291cmNlRG93bkV2ZW50VGFyZ2V0OiExLHN3aXBlZFg6MH0sdGhpcy5zdGFnZUluZGV4ZXM9e30sdGhpcy5lbGVtZW50cz17YTpbXSxjb250YWluZXI6bnVsbCxzbGlkZVN3aXBpbmdIb3ZlcmVyOm51bGwsc213OltdLHNvdXJjZVdyYXBwZXJzQ29udGFpbmVyOm51bGwsc291cmNlczpbXSxzb3VyY2VBbmltYXRpb25XcmFwcGVyczpbXX0sdGhpcy5jb21wb25lbnRzU2VydmljZXM9e3NldFNsaWRlTnVtYmVyOmZ1bmN0aW9uKCl7fX0sdGhpcy5yZXNvbHZlPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpbXTtyZXR1cm4gbi51bnNoaWZ0KGUpLGVlKHQsb2UobikpfSx0aGlzLmNvbGxlY3Rpb25zPXtzb3VyY2VMb2FkSGFuZGxlcnM6W10sc291cmNlc1JlbmRlckZ1bmN0aW9uczpbXSxzb3VyY2VTaXplcnM6W119LHRoaXMuY29yZT17Y2xhc3NGYWNhZGU6e30sZXZlbnRzRGlzcGF0Y2hlcjp7fSxnbG9iYWxFdmVudHNDb250cm9sbGVyOnt9LGxpZ2h0Ym94Q2xvc2VyOnt9LGxpZ2h0Ym94VXBkYXRlcjp7fSxzY3JvbGxiYXJSZWNvbXBlbnNvcjp7fSxzbGlkZUNoYW5nZUZhY2FkZTp7fSxzbGlkZUluZGV4Q2hhbmdlcjp7fSxzb3VyY2VzUG9pbnRlckRvd246e30sc291cmNlRGlzcGxheUZhY2FkZTp7fSxzdGFnZU1hbmFnZXI6e30sd2luZG93UmVzaXplQWN0aW9uZXI6e319LHRoaXMuZnM9e30sdGhpcy5zd3M9e30sWih0aGlzKSx0aGlzLmNsb3NlPWZ1bmN0aW9uKCl7cmV0dXJuIGUuY29yZS5saWdodGJveENsb3Nlci5jbG9zZUxpZ2h0Ym94KCl9fSx3aW5kb3cuZnNMaWdodGJveEluc3RhbmNlcz17fSxyZSgpLHdpbmRvdy5yZWZyZXNoRnNMaWdodGJveD1mdW5jdGlvbigpe2Zvcih2YXIgZSBpbiBmc0xpZ2h0Ym94SW5zdGFuY2VzKXt2YXIgdD1mc0xpZ2h0Ym94SW5zdGFuY2VzW2VdLnByb3BzO2ZzTGlnaHRib3hJbnN0YW5jZXNbZV09bmV3IEZzTGlnaHRib3gsZnNMaWdodGJveEluc3RhbmNlc1tlXS5wcm9wcz10LGZzTGlnaHRib3hJbnN0YW5jZXNbZV0ucHJvcHMuc291cmNlcz1bXSxmc0xpZ2h0Ym94SW5zdGFuY2VzW2VdLmVsZW1lbnRzLmE9W119cmUoKX19XSl9KSk7IiwiXHJcblxyXG5cclxuLypUcmFuc2l0aW9uIGVudHJlIGxlcyBwYWdlcyAuc2xpZGUtaW4qL1xyXG5cclxuXHJcbi8vIFPDqWxlY3Rpb25uZXogdG91cyBsZXMgw6lsw6ltZW50cyBcImFcIiBkYW5zIGxlIG1lbnVcclxudmFyIG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub25nbGV0XCIpO1xyXG5cclxuLy8gQWpvdXRleiB1biDDqXbDqW5lbWVudCBcImNsaWNrXCIgw6AgdG91cyBsZXMgw6lsw6ltZW50cyBcImFcIiBkYW5zIGxlIG1lbnVcclxuZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51TGlua3MubGVuZ3RoOyBpKyspIHtcclxubWVudUxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5ldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBFbXDDqmNoZSBsYSByZWRpcmVjdGlvbiBwYXIgZMOpZmF1dFxyXG52YXIgbGluayA9IHRoaXM7XHJcbi8vIFPDqWxlY3Rpb25uZXogbCfDqWzDqW1lbnQgXCJzbGlkZS1pblwiXHJcbnZhciBzbGlkZUluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1pblwiKTtcclxuLy8gTW9kaWZpZXogbGVzIHByb3ByacOpdMOpcyBkZSBzdHlsZSBkZSBsJ8OpbMOpbWVudCBcInNsaWRlLWluXCIgcG91ciBsZSBkw6lwbGFjZXIgdmVycyBsYSBnYXVjaGVcclxuc2xpZGVJbi5zdHlsZS5sZWZ0ID0gXCIwJVwiO1xyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG53aW5kb3cubG9jYXRpb24gPSBsaW5rLmhyZWY7IC8vIFJlZGlyaWdleiB2ZXJzIGxhIHBhZ2UgbGnDqWUgw6AgbCfDqWzDqW1lbnQgXCJhXCIgY2xpcXXDqVxyXG59LCAxMzUwKTtcclxufSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIFRvZ2dsZSBzbGlkZSBkdSBwYW5uZWF1IGRlIGNvbnRyw7RsZSAqL1xyXG52YXIgaXNTbGlkZU9wZW4gPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNsaWRlKCkge1xyXG4gICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYW5uZWF1LWNvbnRyb2xlLWNvdWxldXJcIik7XHJcbiAgICBpZiAoIWlzU2xpZGVPcGVuKSB7XHJcbiAgICAgICAgc2xpZGUuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgICBzbGlkZS5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgaXNTbGlkZU9wZW4gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzbGlkZS5zdHlsZS5yaWdodCA9IFwiLTgwcHhcIjtcclxuICAgICAgICBpc1NsaWRlT3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cudG9nZ2xlU2xpZGUgPSB0b2dnbGVTbGlkZTtcclxuXHJcblxyXG4vKiBQYW5uZWF1IGRlIGNvbnRyw7RsZSBkZXMgY291bGV1cnMgKi9cclxuXHJcbmNvbnN0IGNvbG9yU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1zcXVhcmUnKTtcclxuXHJcbi8qIENvdWxldXIgcGFyIGTDqWZhdXQgKi9cclxuY29uc3QgZGVmYXVsdENvbG9yID0gXCIjZGQ3NjMxXCI7XHJcbmxldCBjb2xvciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkQ29sb3InKSB8fCBkZWZhdWx0Q29sb3I7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3InKS5mb3JFYWNoKGVsID0+IHtcclxuICBlbC5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJnLWNvbG9yJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZ25pbicpLmZvckVhY2goZWwgPT4ge1xyXG4gIGVsLnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMzVweCAke2NvbG9yfWA7XHJcbn0pO1xyXG5cclxuY29sb3JTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcclxuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHN3aXRjaCAodGhpcy5pZCkge1xyXG4gICAgICBjYXNlICdjb2xvci0xJzpcclxuICAgICAgICBjb2xvciA9IFwiI2M3MDAzOVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvci0yJzpcclxuICAgICAgICBjb2xvciA9IFwiIzcxMjFjN1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvci0zJzpcclxuICAgICAgICBjb2xvciA9IFwiIzA0QTc3N1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvci00JzpcclxuICAgICAgICBjb2xvciA9IFwiIzAzNWFhNlwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvci01JzpcclxuICAgICAgICBjb2xvciA9IFwiIzAwOTA5ZVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvci02JzpcclxuICAgICAgICBjb2xvciA9IGRlZmF1bHRDb2xvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkQ29sb3InLCBjb2xvcik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3InKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWwuc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJnLWNvbG9yJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lnbmluJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGVsLnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMzVweCAke2NvbG9yfWA7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLypQb3VyIGfDqXJlciBsYSBjb3VsZXVyIGRlIGwnaWNvbmUgZHUgbWVudSBoYW1idXJnZXIqL1xyXG4gIGNvbnN0IGxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUnKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsaW5lc1tpXS5zdHlsZS5zdHJva2UgPSBjb2xvcjtcclxuICB9XHJcbn0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsaW5lc1tpXS5zdHlsZS5zdHJva2UgPSBcIlwiO1xyXG4gIH1cclxufSk7XHJcblxyXG4gICAgLypQb3VyIGfDqXJlciBsYSBjb3VsZXVyIGRlIGNlcnRhaW5zIGJvdXRvbnMgcXVpIG9udCBsYSBjbGFzc2UgYmctY29sb3ItaG92ICovXHJcbiAgY29uc3QgYmdDb2xvckhvdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZy1jb2xvci1ob3YnKTtcclxuXHJcbmJnQ29sb3JIb3YuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8qUG91ciBnw6lyZXIgbGEgY291bGV1ciBkZXMgb25nbGV0cyBkYW5zIGxlIG1lbnUgcXVpIG9udCBsYSBjbGFzc2Ugb25nbGV0ICovXHJcbmNvbnN0IG9uZ2xldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vbmdsZXQnKTtcclxuXHJcbm9uZ2xldC5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuICAgIH0pO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuLy8gUsOpY3Vww6hyZSBsZXMgw6lsw6ltZW50cyBkZSBib3V0b24gZGUgbWVudSBldCBkZSBtZW51XHJcbnZhciB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUtYnRuJyk7XHJcbnZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcclxuXHJcbi8vIEFqb3V0ZSB1biDDqWNvdXRldXIgZCfDqXbDqW5lbWVudCBjbGljayBhdSBib3V0b24gZGUgbWVudVxyXG50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIEludmVyc2UgbCfDqXRhdCBkZSB2aXNpYmlsaXTDqSBkdSBtZW51XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcclxufSk7XHJcblxyXG5cclxuLy9BbmltYXRpb24gdHh0IHJvdGF0ZSBkYW5zIGxhIHBhZ2UgYWNjdWVpbCAoPWhvbWUpXHJcblxyXG52YXIgVHh0Um90YXRlID0gZnVuY3Rpb24oZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcclxuICAgIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMubG9vcE51bSA9IDA7XHJcbiAgICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XHJcbiAgICB0aGlzLnR4dCA9ICcnO1xyXG4gICAgdGhpcy50aWNrKCk7XHJcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcclxuICB9O1xyXG4gIFxyXG4gIFR4dFJvdGF0ZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcclxuICAgIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcclxuICBcclxuICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcclxuICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nK3RoaXMudHh0Kyc8L3NwYW4+JztcclxuICBcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHZhciBkZWx0YSA9IDMwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XHJcbiAgXHJcbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cclxuICBcclxuICAgIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XHJcbiAgICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XHJcbiAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcclxuICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubG9vcE51bSsrO1xyXG4gICAgICBkZWx0YSA9IDUwMDtcclxuICAgIH1cclxuICBcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoYXQudGljaygpO1xyXG4gICAgfSwgZGVsdGEpO1xyXG4gIH07XHJcbiAgXHJcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHh0LXJvdGF0ZScpO1xyXG4gICAgZm9yICh2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGUnKTtcclxuICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJpb2QnKTtcclxuICAgICAgaWYgKHRvUm90YXRlKSB7XHJcbiAgICAgICAgbmV3IFR4dFJvdGF0ZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElOSkVDVCBDU1NcclxuICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICBjc3Muc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XHJcbiAgICBjc3MuaW5uZXJIVE1MID0gXCIudHh0LXJvdGF0ZSA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjFlbSBzb2xpZCAjNjY2IH1cIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInN0eWxlIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJlIiwidCIsImV4cG9ydHMiLCJfdHlwZW9mIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwibiIsIm8iLCJ3aW5kb3ciLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiX19lc01vZHVsZSIsImNyZWF0ZSIsImJpbmQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiY29uY2F0IiwiYSIsInUiLCJmIiwiaCIsImciLCJ2IiwiYiIsIngiLCJ5IiwidyIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJTIiwic3RhZ2VJbmRleGVzIiwiY29yZSIsInN0YWdlTWFuYWdlciIsInByb3BzIiwic291cmNlcyIsImdldFByZXZpb3VzU2xpZGVJbmRleCIsImN1cnJlbnQiLCJnZXROZXh0U2xpZGVJbmRleCIsInVwZGF0ZVN0YWdlSW5kZXhlcyIsIm5leHQiLCJwcmV2aW91cyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsIkwiLCJnZXRTb3VyY2VUeXBlRnJvbUxvY2FsU3RvcmFnZUJ5VXJsIiwiaGFuZGxlUmVjZWl2ZWRTb3VyY2VUeXBlRm9yVXJsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXNhYmxlTG9jYWxTdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiQSIsImRhdGEiLCJhZGp1c3RTaXplIiwibWF4U291cmNlV2lkdGgiLCJtYXhTb3VyY2VIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIkMiLCJjb2xsZWN0aW9ucyIsInNvdXJjZVNpemVycyIsInNvdXJjZUFuaW1hdGlvbldyYXBwZXJzIiwiaXNsIiwicmVzb2x2ZSIsInJ1bkFjdGlvbnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJGIiwiaGFuZGxlSW1hZ2VMb2FkIiwidGFyZ2V0IiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsImhhbmRsZVZpZGVvTG9hZCIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImhhbmRsZU5vdE1ldGFEYXRlZFZpZGVvTG9hZCIsImhhbmRsZVlvdXR1YmVMb2FkIiwibWF4WW91dHViZURpbWVuc2lvbnMiLCJoYW5kbGVDdXN0b21Mb2FkIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJFIiwiY3VzdG9tQ2xhc3NlcyIsIkkiLCJjdXN0b21BdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwiVCIsInNvdXJjZUxvYWRIYW5kbGVycyIsInNyYyIsIm9ubG9hZCIsIk4iLCJ2aWRlb3NQb3N0ZXJzIiwib25sb2FkZWRtZXRhZGF0YSIsImNvbnRyb2xzIiwicG9zdGVyIiwieiIsInNwbGl0IiwibWF0Y2giLCJhbGxvd0Z1bGxzY3JlZW4iLCJQIiwiayIsImlubmVySFRNTCIsIkgiLCJzb3VyY2VzUmVuZGVyRnVuY3Rpb25zIiwic291cmNlRGlzcGxheUZhY2FkZSIsInJ1bkFjdGlvbnNGb3JTb3VyY2VUeXBlQW5kSW5kZXgiLCJkaXNwbGF5U291cmNlc1doaWNoU2hvdWxkQmVEaXNwbGF5ZWQiLCJXIiwiaXNVcmxZb3V0dWJlT25lIiwiaHJlZiIsImhvc3RuYW1lIiwiZ2V0VHlwZUZyb21SZXNwb25zZUNvbnRlbnRUeXBlIiwic2xpY2UiLCJpbmRleE9mIiwicmVhZHlTdGF0ZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiYWJvcnQiLCJzZXRVcmxUb0NoZWNrIiwiZ2V0U291cmNlVHlwZSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJSIiwidHlwZXMiLCJ0eXBlIiwiZ2V0VHlwZVNldEJ5Q2xpZW50Rm9ySW5kZXgiLCJyZXRyaWV2ZVR5cGVXaXRoWGhyRm9ySW5kZXgiLCJEIiwic213Iiwic291cmNlV3JhcHBlcnNDb250YWluZXIiLCJ0cmFuc2Zvcm0iLCJzbGlkZURpc3RhbmNlIiwiaW5uZXJXaWR0aCIsImRpc3BsYXkiLCJyZW1vdmUiLCJyZW1vdmVQcm9wZXJ0eSIsIm5lIiwiTyIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiTSIsInRpdGxlIiwiaiIsImNvbXBvbmVudHNTZXJ2aWNlcyIsImZzIiwib2ZzIiwiaWZzIiwieGZzIiwib25jbGljayIsImxpZ2h0Ym94Q2xvc2VyIiwiY2xvc2VMaWdodGJveCIsIlgiLCJjb250YWluZXIiLCJzZXRTbGlkZU51bWJlciIsImp1c3RpZnlDb250ZW50IiwiQiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiVSIsImNvbnRhaW5zIiwicSIsInNsaWRlQ2hhbmdlRmFjYWRlIiwibGlzdGVuZXIiLCJrZXkiLCJjaGFuZ2VUb1ByZXZpb3VzIiwiY2hhbmdlVG9OZXh0IiwicHJldmVudERlZmF1bHQiLCJWIiwic291cmNlUG9pbnRlclByb3BzIiwic3dpcGVkWCIsInJ1bkFjdGlvbnNGb3JFdmVudCIsInNsaWRlU3dpcGluZ0hvdmVyZXIiLCJzY3JlZW5YIiwiZG93blNjcmVlblgiLCJfIiwiaXNQb2ludGVyaW5nIiwiWSIsInNsaWRlSW5kZXhDaGFuZ2VyIiwic3dzIiwicnVuUG9zaXRpdmVTd2lwZWRYQWN0aW9ucyIsImNoYW5nZVRvIiwicnVuTmVnYXRpdmVTd2lwZWRYQWN0aW9ucyIsIkoiLCJHIiwicnVuTm9Td2lwZUFjdGlvbnMiLCJpc1NvdXJjZURvd25FdmVudFRhcmdldCIsIiQiLCJLIiwiZXZlbnRzRGlzcGF0Y2hlciIsImdsb2JhbEV2ZW50c0NvbnRyb2xsZXIiLCJzY3JvbGxiYXJSZWNvbXBlbnNvciIsImlzTGlnaHRib3hGYWRpbmdPdXQiLCJyZW1vdmVMaXN0ZW5lcnMiLCJleGl0RnVsbHNjcmVlbk9uQ2xvc2UiLCJkb2N1bWVudEVsZW1lbnQiLCJyZW1vdmVSZWNvbXBlbnNlIiwiYm9keSIsImRpc3BhdGNoIiwiUSIsImNsYXNzRmFjYWRlIiwicmVtb3ZlRnJvbUVhY2hFbGVtZW50Q2xhc3NJZkNvbnRhaW5zIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRJc0Z1bGxTY3JlZW4iLCJtb3pGdWxsU2NyZWVuIiwibXNGdWxsc2NyZWVuRWxlbWVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm1zRXhpdEZ1bGxzY3JlZW4iLCJ3aW5kb3dSZXNpemVBY3Rpb25lciIsImF0dGFjaExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbm5lckhlaWdodCIsIm1hcmdpblJpZ2h0Iiwic2Nyb2xsYmFyV2lkdGgiLCJhZGRSZWNvbXBlbnNlIiwianVtcFRvIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic291cmNlc1BvaW50ZXJEb3duIiwidGFnTmFtZSIsImxvYWRPbmx5Q3VycmVudFNvdXJjZSIsIloiLCJ2aXNpYmlsaXR5IiwibXNPdmVyZmxvd1N0eWxlIiwib3ZlcmZsb3ciLCJhcmd1bWVudHMiLCJlZSIsInRlIiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInB1c2giLCJhcHBseSIsIkZ1bmN0aW9uIiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIm9lIiwiQXJyYXkiLCJpc0FycmF5IiwiaWUiLCJmcm9tIiwidG9TdHJpbmciLCJuYW1lIiwidGVzdCIsIlR5cGVFcnJvciIsInJlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJmc0xpZ2h0Ym94SW5zdGFuY2VzIiwiRnNMaWdodGJveCIsImdldEVsZW1lbnRCeUlkIiwic3Vic3RyaW5nIiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsInN1YnN0ciIsImtleXMiLCJmc0xpZ2h0Ym94IiwiaXNGdWxsc2NyZWVuT3BlbiIsInVuc2hpZnQiLCJsaWdodGJveFVwZGF0ZXIiLCJjbG9zZSIsInJlZnJlc2hGc0xpZ2h0Ym94IiwibWVudUxpbmtzIiwiZXZlbnQiLCJsaW5rIiwic2xpZGVJbiIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwibG9jYXRpb24iLCJpc1NsaWRlT3BlbiIsInRvZ2dsZVNsaWRlIiwic2xpZGUiLCJyaWdodCIsImNvbG9yU3F1YXJlcyIsImRlZmF1bHRDb2xvciIsImNvbG9yIiwic2Vzc2lvblN0b3JhZ2UiLCJmb3JFYWNoIiwiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJzcXVhcmUiLCJpZCIsImxpbmVzIiwic3Ryb2tlIiwiYmdDb2xvckhvdiIsIm9uZ2xldCIsInRvZ2dsZUJ0biIsIm1lbnUiLCJ0b2dnbGUiLCJUeHRSb3RhdGUiLCJ0b1JvdGF0ZSIsInBlcmlvZCIsImxvb3BOdW0iLCJwYXJzZUludCIsInR4dCIsInRpY2siLCJpc0RlbGV0aW5nIiwiZnVsbFR4dCIsInRoYXQiLCJkZWx0YSIsIk1hdGgiLCJyYW5kb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY3NzIl0sInNvdXJjZVJvb3QiOiIifQ==