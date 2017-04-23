'use strict';
const angular = require('angular');

/*@ngInject*/
export function jsFonctionsService() {
  // AngularJS will instantiate a singleton by calling "new" on this function

  this.pluginScript = function () {
    /******************************************
    File Name: plugins.js
    Template Name: Teach Me
    Created By: Show WP Team
    Envato Profile: http://themeforest.net/user/wordpressshowcase
    Website: https://showwp.com
    Version: 1.0
    Support: wordpressshowcasecom@gmail.com
    /******************************************/

    (function ($) {
      "use strict";

      /* ==============================================
      TOOLTIP
      =============================================== */
      $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });

      /* ==============================================
      LOADER -->
      =============================================== */

      $(window).load(function () {
        $('#loader').delay(300).fadeOut('slow');
        $('#loader-container').delay(200).fadeOut('slow');
        $('body').delay(300).css({
          'overflow': 'visible'
        });
      })

      /* ==============================================
      MENU -->
      =============================================== */

      $('ul.dropdown-menu [data-toggle=dropdown]').bind('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().addClass('open');
        $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
      });

      /* ==============================================
      ACCORDION -->
      =============================================== */

      function toggleChevron(e) {
        $(e.target)
          .prev('.panel-heading')
          .find("i.indicator")
          .toggleClass('fa-minus fa-plus');
      }
      $('#accordion3').bind('hidden.bs.collapse', toggleChevron);
      $('#accordion3').bind('shown.bs.collapse', toggleChevron);

      /* ==============================================
      FUN -->
      =============================================== */

      function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1;
        $this.html(++current);
        if (current > $this.data('count')) {
          $this.html($this.data('count'));
        } else {
          setTimeout(function () {
            count($this)
          }, 1);
        }
      }
      $(".stat-count").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
      });

      /* ==============================================
      BACK TOP
      =============================================== */
      jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1) {
          jQuery('.dmtop').css({
            bottom: "25px"
          });
          // jQuery('header').removeClass('header-absolute').css({position: "fixed"});
        } else {
          jQuery('.dmtop').css({
            bottom: "-100px"
          });
          // jQuery('header').addClass('header-absolute');
        }
      });
      jQuery('.dmtop').click(function () {
        jQuery('html, body').animate({
          scrollTop: '0px'
        }, 800);
        return false;
      });

      /************************************************
      RETINA DISPLAY
      ************************************************/
      ! function () {
        function t() {}

        function e(t) {
          return r.retinaImageSuffix + t
        }

        function i(t, i) {
          if (this.path = t || "", "undefined" != typeof i && null !== i) this.at_2x_path = i, this.perform_check = !1;
          else {
            if (void 0 !== document.createElement) {
              var n = document.createElement("a");
              n.href = this.path, n.pathname = n.pathname.replace(o, e), this.at_2x_path = n.href
            } else {
              var a = this.path.split("?");
              a[0] = a[0].replace(o, e), this.at_2x_path = a.join("?")
            }
            this.perform_check = !0
          }
        }

        function n(t) {
          this.el = t, this.path = new i(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
          var e = this;
          this.path.check_2x_variant(function (t) {
            t && e.swap()
          })
        }
        var a = "undefined" == typeof exports ? window : exports,
          r = {
            retinaImageSuffix: "@2x",
            check_mime_type: !0,
            force_original_dimensions: !0
          };
        a.Retina = t, t.configure = function (t) {
          null === t && (t = {});
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e])
        }, t.init = function (t) {
          null === t && (t = a);
          var e = t.onload || function () {};
          t.onload = function () {
            var t, i, a = document.getElementsByTagName("img"),
              r = [];
            for (t = 0; t < a.length; t += 1) i = a[t], i.getAttributeNode("data-no-retina") || r.push(new n(i));
            e()
          }
        }, t.isRetina = function () {
          var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
          return a.devicePixelRatio > 1 ? !0 : a.matchMedia && a.matchMedia(t).matches ? !0 : !1
        };
        var o = /\.\w+$/;
        a.RetinaImagePath = i, i.confirmed_paths = [], i.prototype.is_external = function () {
          return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
        }, i.prototype.check_2x_variant = function (t) {
          var e, n = this;
          return this.is_external() ? t(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in i.confirmed_paths ? t(!0) : (e = new XMLHttpRequest, e.open("HEAD", this.at_2x_path), e.onreadystatechange = function () {
            if (4 !== e.readyState) return t(!1);
            if (e.status >= 200 && e.status <= 399) {
              if (r.check_mime_type) {
                var a = e.getResponseHeader("Content-Type");
                if (null === a || !a.match(/^image/i)) return t(!1)
              }
              return i.confirmed_paths.push(n.at_2x_path), t(!0)
            }
            return t(!1)
          }, e.send(), void 0) : t(!0)
        }, a.RetinaImage = n, n.prototype.swap = function (t) {
          function e() {
            i.el.complete ? (r.force_original_dimensions && (i.el.setAttribute("width", i.el.offsetWidth), i.el.setAttribute("height", i.el.offsetHeight)), i.el.setAttribute("src", t)) : setTimeout(e, 5)
          }
          "undefined" == typeof t && (t = this.path.at_2x_path);
          var i = this;
          e()
        }, t.isRetina() && t.init(a)
      }();
    })(jQuery);

    /************************************************
    PARALLAX
    ************************************************/
    function fullscreenFix() {
      var a = $("body").height();
      $(".content-b").each(function (i) {
        $(this).innerHeight() <= a && $(this).closest(".fullscreen").addClass("not-overflow")
      })
    }

    function backgroundResize() {
      var a = $(window).height();
      $(".paralbackground").each(function (i) {
        var t = $(this),
          e = t.width(),
          s = t.height(),
          o = t.attr("data-img-width"),
          n = t.attr("data-img-height"),
          r = o / n,
          l = parseFloat(t.attr("data-diff"));
        l = l ? l : 0;
        var c = 0;
        if (t.hasClass("parallax") && !$("html").hasClass("touch")) {
          c = a - s
        }
        n = s + c + l, o = n * r, e > o && (o = e, n = o / r), t.data("resized-imgW", o), t.data("resized-imgH", n), t.css("background-size", o + "px " + n + "px")
      })
    }

    function parallaxPosition(a) {
      var i = $(window).height(),
        t = $(window).scrollTop(),
        e = t + i,
        s = (t + e) / 2;
      $(".parallax").each(function (a) {
        var o = $(this),
          n = o.height(),
          r = o.offset().top,
          l = r + n;
        if (e > r && l > t) {
          var c = (o.data("resized-imgW"), o.data("resized-imgH")),
            d = 0,
            h = -c + i,
            u = i > n ? c - n : c - i;
          r -= u, l += u;
          var g = d + (h - d) * (s - r) / (l - r),
            w = o.attr("data-oriz-pos");
          w = w ? w : "50%", $(this).css("background-position", w + " " + g + "px")
        }
      })
    }
    "ontouchstart" in window && (document.documentElement.className = document.documentElement.className + " touch"), $("html").hasClass("touch") || $(".parallax").css("background-attachment", "fixed"), $(window).resize(fullscreenFix), fullscreenFix(), $(window).resize(backgroundResize), $(window).focus(backgroundResize), backgroundResize(), $("html").hasClass("touch") || ($(window).resize(parallaxPosition), $(window).scroll(parallaxPosition), parallaxPosition());

    /************************************************
    CAROUSEL
    ************************************************/
    ! function (t, e, i, s) {
      function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function (t, e) {
          this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Pipe, t.proxy(function (e, i) {
          this._pipe.push({
            filter: i.filter,
            run: t.proxy(i.run, this)
          })
        }, this)), this.setup(), this.initialize()
      }

      function o(t) {
        if (t.touches !== s) return {
          x: t.touches[0].pageX,
          y: t.touches[0].pageY
        };
        if (t.touches === s) {
          if (t.pageX !== s) return {
            x: t.pageX,
            y: t.pageY
          };
          if (t.pageX === s) return {
            x: t.clientX,
            y: t.clientY
          }
        }
      }

      function r(t) {
        var e, s, n = i.createElement("div"),
          o = t;
        for (e in o)
          if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
        return [!1]
      }

      function a() {
        return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
      }

      function h() {
        return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
      }

      function l() {
        return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
      }

      function c() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
      }

      function d() {
        return e.navigator.msPointerEnabled
      }
      var p, u, g;
      p = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
      }, u = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
      }, g = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
      }, n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
      }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
      }, n.Plugins = {}, n.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)]
        }
      }, {
        filter: ["items", "settings"],
        run: function () {
          var t = this._clones,
            e = this.$stage.children(".cloned");
          (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
      }, {
        filter: ["items", "settings"],
        run: function () {
          var t, e, i = this._clones,
            s = this._items,
            n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
          for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function () {
          var t, e, i, s = this.settings.rtl ? 1 : -1,
            n = (this.width() / this.settings.items).toFixed(3),
            o = 0;
          for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function () {
          var e, i, s = (this.width() / this.settings.items).toFixed(3),
            n = {
              width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
              "padding-left": this.settings.stagePadding || "",
              "padding-right": this.settings.stagePadding || ""
            };
          if (this.$stage.css(n), n = {
              width: this.settings.autoWidth ? "auto" : s - this.settings.margin
            }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
              return t > 1
            }).length > 0)
            for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
          else this.$stage.children().css(n)
        }
      }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
          t.current && this.reset(this.$stage.children().index(t.current))
        }
      }, {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current))
        }
      }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var t, e, i, s, n = this.settings.rtl ? 1 : -1,
            o = 2 * this.settings.stagePadding,
            r = this.coordinates(this.current()) + o,
            a = r + this.width() * n,
            h = [];
          for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
          this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
      }], n.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
          var e, i, n;
          if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
      }, n.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          s = -1,
          n = null;
        i ? (t.each(i, function (t) {
          e >= t && t > s && (s = Number(t))
        }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function (t, e) {
          return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
          property: {
            name: "settings",
            value: n
          }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
          property: {
            name: "settings",
            value: this.settings
          }
        }))
      }, n.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
      }, n.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {
          content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
          content: i.data
        }), i.data
      }, n.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
            return this[t]
          }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}
      }, n.prototype.width = function (t) {
        switch (t = t || n.Width.Default) {
          case n.Width.Inner:
          case n.Width.Outer:
            return this._width;
          default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
      }, n.prototype.refresh = function () {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
      }, n.prototype.eventsCall = function () {
        this.e._onDragStart = t.proxy(function (t) {
          this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function (t) {
          this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function (t) {
          this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function (t) {
          this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function (t) {
          this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function (t) {
          this.preventClick(t)
        }, this)
      }, n.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
      }, n.prototype.onResize = function () {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
      }, n.prototype.eventsRouter = function (t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
      }, n.prototype.internalEvents = function () {
        var i = (c(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
          this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function () {
          return !1
        }), this.$stage.get(0).onselectstart = function () {
          return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
          this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
      }, n.prototype.onDragStart = function (s) {
        var n, r, a, h;
        if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
        if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
          this.eventsRouter(t)
        }, this))
      }, n.prototype.onDragMove = function (t) {
        var i, n, r, a, h, l;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), h = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
      }, n.prototype.onDragEnd = function (e) {
        var s, n, o;
        if (this.state.isTouch) {
          if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
          this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
      }, n.prototype.removeClick = function (i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
          t(i).off("click.preventClick")
        }, 300)
      }, n.prototype.preventClick = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
      }, n.prototype.getTransformProperty = function () {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
      }, n.prototype.closest = function (e) {
        var i = -1,
          s = 30,
          n = this.width(),
          o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function (t, r) {
          return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
      }, n.prototype.animate = function (e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
          transform: "translate3d(" + e + "px,0px, 0px)",
          transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
          left: e + "px"
        }) : this.$stage.animate({
          left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
          this.state.inMotion && this.transitionEnd()
        }, this))
      }, n.prototype.current = function (t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
          var e = this.trigger("change", {
            property: {
              name: "position",
              value: t
            }
          });
          e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
            property: {
              name: "position",
              value: this._current
            }
          })
        }
        return this._current
      }, n.prototype.invalidate = function (t) {
        this._invalidated[t] = !0
      }, n.prototype.reset = function (t) {
        t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
      }, n.prototype.normalize = function (e, i) {
        var n = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
      }, n.prototype.relative = function (t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
      }, n.prototype.maximum = function (t) {
        var e, i, s, n = 0,
          o = this.settings;
        if (t) return this._items.length - 1;
        if (!o.loop && o.center) e = this._items.length - 1;
        else if (o.loop || o.center)
          if (o.loop || o.center) e = this._items.length + o.items;
          else {
            if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
            for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
              (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
          }
        else e = this._items.length - o.items;
        return e
      }, n.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
      }, n.prototype.items = function (t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
      }, n.prototype.mergers = function (t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
      }, n.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          n = i + this._items.length,
          o = function (t) {
            return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
          };
        return e === s ? t.map(this._clones, function (t, e) {
          return o(e)
        }) : t.map(this._clones, function (t, i) {
          return t === e ? o(i) : null
        })
      }, n.prototype.speed = function (t) {
        return t !== s && (this._speed = t), this._speed
      }, n.prototype.coordinates = function (e) {
        var i = null;
        return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
          return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
      }, n.prototype.duration = function (t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
      }, n.prototype.to = function (i, s) {
        if (this.settings.loop) {
          var n = i - this.relative(this.current()),
            o = this.current(),
            r = this.current(),
            a = this.current() + n,
            h = 0 > r - a ? !0 : !1,
            l = this._clones.length + this._items.length;
          a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
            this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
          }, this), 30)
        } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
      }, n.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
      }, n.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
      }, n.prototype.transitionEnd = function (t) {
        return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
      }, n.prototype.viewport = function () {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else {
          if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
          s = i.documentElement.clientWidth
        }
        return s
      }, n.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
          return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
          e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
      }, n.prototype.add = function (t, e) {
        e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
          content: t,
          position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
          content: t,
          position: e
        })
      }, n.prototype.remove = function (t) {
        t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
          content: this._items[t],
          position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
          content: null,
          position: t
        }))
      }, n.prototype.addTriggerableEvents = function () {
        var e = t.proxy(function (e, i) {
          return t.proxy(function (t) {
            t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
          }, this)
        }, this);
        t.each({
          next: this.next,
          prev: this.prev,
          to: this.to,
          destroy: this.destroy,
          refresh: this.refresh,
          replace: this.replace,
          add: this.add,
          remove: this.remove
        }, t.proxy(function (t, i) {
          this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
      }, n.prototype.watchVisibility = function () {
        function i(t) {
          return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        function s() {
          i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
      }, n.prototype.preloadAutoWidthImages = function (e) {
        var i, s, n, o;
        i = 0, s = this, e.each(function (r, a) {
          n = t(a), o = new Image, o.onload = function () {
            i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
          }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
        })
      }, n.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var s in this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
          return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
      }, n.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
          case "<":
            return s ? t > i : i > t;
          case ">":
            return s ? i > t : t > i;
          case ">=":
            return s ? i >= t : t >= i;
          case "<=":
            return s ? t >= i : i >= t
        }
      }, n.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
      }, n.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
      }, n.prototype.trigger = function (e, i, s) {
        var n = {
            item: {
              count: this._items.length,
              index: this.current()
            }
          },
          o = t.camelCase(t.grep(["on", e, s], function (t) {
            return t
          }).join("-").toLowerCase()),
          r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
            relatedTarget: this
          }, n, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
          e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
      }, n.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
          this._supress[e] = !0
        }, this))
      }, n.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
          delete this._supress[e]
        }, this))
      }, n.prototype.browserSupport = function () {
        if (this.support3d = l(), this.support3d) {
          this.transformVendor = h();
          var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
          this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
      }, t.fn.owlCarousel = function (e) {
        return this.each(function () {
          t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
        })
      }, t.fn.owlCarousel.Constructor = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, s) {
      var n = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
          "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
            if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
              for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function (t, e) {
                  this.load(e)
                }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
          }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
      };
      n.Defaults = {
        lazyLoad: !1
      }, n.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i),
          n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
          var n, o = t(s),
            r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
          this._core.trigger("load", {
            element: o,
            url: r
          }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
            o.css("opacity", 1), this._core.trigger("loaded", {
              element: o,
              url: r
            }, "lazy")
          }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function () {
            o.css({
              "background-image": "url(" + r + ")",
              opacity: "1"
            }), this._core.trigger("loaded", {
              element: o,
              url: r
            }, "lazy")
          }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
      }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, s) {
      var n = function (e) {
        this._core = e, this._handlers = {
          "initialized.owl.carousel": t.proxy(function () {
            this._core.settings.autoHeight && this.update()
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            this._core.settings.autoHeight && "position" == t.property.name && this.update()
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
          }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
      };
      n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
      }, n.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
      }, n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, s) {
      var n = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
          "resize.owl.carousel": t.proxy(function (t) {
            this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
          }, this),
          "refresh.owl.carousel changed.owl.carousel": t.proxy(function (t) {
            this._playing && this.stop()
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            var i = t(e.content).find(".owl-video");
            i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
          }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
          this.play(t)
        }, this))
      };
      n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
      }, n.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
          s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
        else {
          if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
          i = "vimeo"
        }
        s = s[6], this._videos[r] = {
          type: i,
          id: s,
          width: n,
          height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
      }, n.prototype.thumbnail = function (e, i) {
        var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
          a = e.find("img"),
          h = "src",
          l = "",
          c = this._core.settings,
          d = function (t) {
            n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
          };
        return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({
          type: "GET",
          url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function (t) {
            o = t[0].thumbnail_large, d(o)
          }
        }))
      }, n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
      }, n.prototype.play = function (e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, s, n = t(e.target || e.srcElement),
          o = n.closest("." + this._core.settings.itemClass),
          r = this._videos[o.attr("data-video")],
          a = r.width || "100%",
          h = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
      }, n.prototype.isInFullScreen = function () {
        var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), s && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
      }, n.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, s) {
      var n = function (e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
            this.swapping = "translated" == t.type
          }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
          }, this)
        }, this.core.$element.on(this.handlers)
      };
      n.Defaults = {
        animateOut: !1,
        animateIn: !1
      }, n.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
          this.core.speed(0);
          var e, i = t.proxy(this.clear, this),
            s = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
            left: e + "px"
          }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
      }, n.prototype.clear = function (e) {
        t(e.target).css({
          left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
      }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, s) {
      var n = function (e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options),
          this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
              this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function (t, e, i) {
              this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function () {
              this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function () {
              this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function () {
              this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
          }, this.core.$element.on(this.handlers)
      };
      n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
      }, n.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
          this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
      }, n.prototype.play = function (t, s) {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
      }, n.prototype.stop = function () {
        e.clearInterval(this.interval)
      }, n.prototype.pause = function () {
        e.clearInterval(this.interval)
      }, n.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, s) {
      "use strict";
      var n = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }, this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
          }, this),
          "add.owl.carousel": t.proxy(function (e) {
            this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
          }, this),
          "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
            this._core.settings.dotsData && this._templates.splice(t.position, 1)
          }, this),
          "change.owl.carousel": t.proxy(function (t) {
            if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
              var e = this._core.current(),
                i = this._core.maximum(),
                s = this._core.minimum();
              t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            "position" == t.property.name && this.draw()
          }, this),
          "refreshed.owl.carousel": t.proxy(function () {
            this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
          }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
      };
      n.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
      }, n.prototype.initialize = function () {
        var e, i, s = this._core.settings;
        s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
          var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
          e.preventDefault(), this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function (t) {
          this.prev(s.navSpeed)
        }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function (t) {
          this.next(s.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
      }, n.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
      }, n.prototype.update = function () {
        var t, e, i, s = this._core.settings,
          n = this._core.clones().length / 2,
          o = n + this._core.items().length,
          r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
          for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
            start: t - n,
            end: t - n + r - 1
          }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
      }, n.prototype.draw = function () {
        var e, i, s = "",
          n = this._core.settings,
          o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
          if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
            for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
            this._controls.$indicators.html(s)
          } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
          this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(n.dots)
      }, n.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
      }, n.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function (t) {
          return t.start <= e && t.end >= e
        }).pop()
      }, n.prototype.getPosition = function (e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
      }, n.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
      }, n.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
      }, n.prototype.to = function (e, i, s) {
        var n;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
      }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
    }(window.Zepto || window.jQuery, window, document),
    function (t, e, i, s) {
      "use strict";
      var n = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
          "initialized.owl.carousel": t.proxy(function () {
            "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
            this._hashes[i] = e.content
          }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
          var t = e.location.hash.substring(1),
            i = this._core.$stage.children(),
            s = this._hashes[t] && i.index(this._hashes[t]) || 0;
          return t ? void this._core.to(s, !1, !0) : !1
        }, this))
      };
      n.Defaults = {
        URLhashListener: !1
      }, n.prototype.destroy = function () {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
      }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
    }(window.Zepto || window.jQuery, window, document);

    $('#owl-testimonial').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })

    $('#owl-client').owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 5
        }
      }
    })

    $('#owl-blog').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1100: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    })

    $('#owl-services').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1100: {
          items: 4
        },
        1200: {
          items: 4
        }
      }
    })

    $('#owl-annonces').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1100: {
          items: 1
        },
        1200: {
          items: 1
        }
      }
    })

    $('#owl-testimonial-2').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })

    $('#owl-courses').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })


    $('#owl-shop').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1100: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    })

    /************************************************
    VIDEO PLAYER
    ************************************************/
    var mejs = mejs || {};
    mejs.version = "2.20.1", mejs.meIndex = 0, mejs.plugins = {
        silverlight: [{
          version: [3, 0],
          types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }],
        flash: [{
          version: [9, 0, 124],
          types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL"]
        }],
        youtube: [{
          version: null,
          types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
        }],
        vimeo: [{
          version: null,
          types: ["video/vimeo", "video/x-vimeo"]
        }]
      }, mejs.Utility = {
        encodeUrl: function (a) {
          return encodeURIComponent(a)
        },
        escapeHTML: function (a) {
          return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
        },
        absolutizeUrl: function (a) {
          var b = document.createElement("div");
          return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href
        },
        getScriptPath: function (a) {
          for (var b, c, d, e, f, g, h = 0, i = "", j = "", k = document.getElementsByTagName("script"), l = k.length, m = a.length; l > h; h++) {
            for (e = k[h].src, c = e.lastIndexOf("/"), c > -1 ? (g = e.substring(c + 1), f = e.substring(0, c + 1)) : (g = e, f = ""), b = 0; m > b; b++)
              if (j = a[b], d = g.indexOf(j), d > -1) {
                i = f;
                break
              }
            if ("" !== i) break
          }
          return i
        },
        calculateTimeFormat: function (a, b, c) {
          0 > a && (a = 0), "undefined" == typeof c && (c = 25);
          var d = b.timeFormat,
            e = d[0],
            f = d[1] == d[0],
            g = f ? 2 : 1,
            h = ":",
            i = Math.floor(a / 3600) % 24,
            j = Math.floor(a / 60) % 60,
            k = Math.floor(a % 60),
            l = Math.floor((a % 1 * c).toFixed(3)),
            m = [
              [l, "f"],
              [k, "s"],
              [j, "m"],
              [i, "h"]
            ];
          d.length < g && (h = d[g]);
          for (var n = !1, o = 0, p = m.length; p > o; o++)
            if (-1 !== d.indexOf(m[o][1])) n = !0;
            else if (n) {
            for (var q = !1, r = o; p > r; r++)
              if (m[r][0] > 0) {
                q = !0;
                break
              }
            if (!q) break;
            f || (d = e + d), d = m[o][1] + h + d, f && (d = m[o][1] + d), e = m[o][1]
          }
          b.currentTimeFormat = d
        },
        twoDigitsString: function (a) {
          return 10 > a ? "0" + a : String(a)
        },
        secondsToTimeCode: function (a, b) {
          if (0 > a && (a = 0), "object" != typeof b) {
            var c = "m:ss";
            c = arguments[1] ? "hh:mm:ss" : c, c = arguments[2] ? c + ":ff" : c, b = {
              currentTimeFormat: c,
              framesPerSecond: arguments[3] || 25
            }
          }
          var d = b.framesPerSecond;
          "undefined" == typeof d && (d = 25);
          var c = b.currentTimeFormat,
            e = Math.floor(a / 3600) % 24,
            f = Math.floor(a / 60) % 60,
            g = Math.floor(a % 60),
            h = Math.floor((a % 1 * d).toFixed(3));
          var lis = [];
          lis = [
            [h, "f"],
            [g, "s"],
            [f, "m"],
            [e, "h"]
          ];
          var j = c;
          for (var i = 0, len = lis.length; i < len; i++) j = j.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), j = j.replace(lis[i][1], lis[i][0]);
          return j
        },
        timeCodeToSeconds: function (a, b, c, d) {
          "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
          var e = a.split(":"),
            f = parseInt(e[0], 10),
            g = parseInt(e[1], 10),
            h = parseInt(e[2], 10),
            i = 0,
            j = 0;
          return c && (i = parseInt(e[3]) / d), j = 3600 * f + 60 * g + h + i
        },
        convertSMPTEtoSeconds: function (a) {
          if ("string" != typeof a) return !1;
          a = a.replace(",", ".");
          var b = 0,
            c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0,
            d = 1;
          a = a.split(":").reverse();
          for (var e = 0; e < a.length; e++) d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
          return Number(b.toFixed(c))
        },
        removeSwf: function (a) {
          var b = document.getElementById(a);
          b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", function () {
            4 == b.readyState ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
          }()) : b.parentNode.removeChild(b))
        },
        removeObjectInIE: function (a) {
          var b = document.getElementById(a);
          if (b) {
            for (var c in b) "function" == typeof b[c] && (b[c] = null);
            b.parentNode.removeChild(b)
          }
        }
      }, mejs.PluginDetector = {
        hasPluginVersion: function (a, b) {
          var c = this.plugins[a];
          return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? !0 : !1
        },
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),
        plugins: [],
        addPlugin: function (a, b, c, d, e) {
          this.plugins[a] = this.detectPlugin(b, c, d, e)
        },
        detectPlugin: function (a, b, c, d) {
          var e, f, g, h = [0, 0, 0];
          if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[a]) {
            if (e = this.nav.plugins[a].description, e && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[b] || this.nav.mimeTypes[b].enabledPlugin))
              for (h = e.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), f = 0; f < h.length; f++) h[f] = parseInt(h[f].match(/\d+/), 10)
          } else if ("undefined" != typeof window.ActiveXObject) try {
            g = new ActiveXObject(c), g && (h = d(g))
          } catch (i) {}
          return h
        }
      }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
        var b = [],
          c = a.GetVariable("$version");
        return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
      }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (a) {
        var b = [0, 0, 0, 0],
          c = function (a, b, c, d) {
            for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[c] += d;
            b[c] -= d
          };
        return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b
      }), mejs.MediaFeatures = {
        init: function () {
          var a, b, c = this,
            d = document,
            e = mejs.PluginDetector.nav,
            f = mejs.PluginDetector.ua.toLowerCase(),
            g = ["source", "track", "audio", "video"];
          c.isiPad = null !== f.match(/ipad/i), c.isiPhone = null !== f.match(/iphone/i), c.isiOS = c.isiPhone || c.isiPad, c.isAndroid = null !== f.match(/android/i), c.isBustedAndroid = null !== f.match(/android 2\.[12]/), c.isBustedNativeHTTPS = "https:" === location.protocol && (null !== f.match(/android [12]\./) || null !== f.match(/macintosh.* version.* safari/)), c.isIE = -1 != e.appName.toLowerCase().indexOf("microsoft") || null !== e.appName.toLowerCase().match(/trident/gi), c.isChrome = null !== f.match(/chrome/gi), c.isChromium = null !== f.match(/chromium/gi), c.isFirefox = null !== f.match(/firefox/gi), c.isWebkit = null !== f.match(/webkit/gi), c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE, c.isOpera = null !== f.match(/opera/gi), c.hasTouch = "ontouchstart" in window, c.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
          for (a = 0; a < g.length; a++) b = document.createElement(g[a]);
          c.supportsMediaTag = "undefined" != typeof b.canPlayType || c.isBustedAndroid;
          try {
            b.canPlayType("video/mp4")
          } catch (h) {
            c.supportsMediaTag = !1
          }
          c.supportsPointerEvents = function () {
            var a, b = document.createElement("x"),
              c = document.documentElement,
              d = window.getComputedStyle;
            return "pointerEvents" in b.style ? (b.style.pointerEvents = "auto", b.style.pointerEvents = "x", c.appendChild(b), a = d && "auto" === d(b, "").pointerEvents, c.removeChild(b), !!a) : !1
          }(), c.hasFirefoxPluginMovingProblem = !1, c.hasiOSFullScreen = "undefined" != typeof b.webkitEnterFullscreen, c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen, c.hasWebkitNativeFullScreen = "undefined" != typeof b.webkitRequestFullScreen, c.hasMozNativeFullScreen = "undefined" != typeof b.mozRequestFullScreen, c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen, c.hasTrueNativeFullScreen = c.hasWebkitNativeFullScreen || c.hasMozNativeFullScreen || c.hasMsNativeFullScreen, c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen, c.hasMozNativeFullScreen ? c.nativeFullScreenEnabled = document.mozFullScreenEnabled : c.hasMsNativeFullScreen && (c.nativeFullScreenEnabled = document.msFullscreenEnabled), c.isChrome && (c.hasiOSFullScreen = !1), c.hasTrueNativeFullScreen && (c.fullScreenEventName = "", c.hasWebkitNativeFullScreen ? c.fullScreenEventName = "webkitfullscreenchange" : c.hasMozNativeFullScreen ? c.fullScreenEventName = "mozfullscreenchange" : c.hasMsNativeFullScreen && (c.fullScreenEventName = "MSFullscreenChange"), c.isFullScreen = function () {
            return c.hasMozNativeFullScreen ? d.mozFullScreen : c.hasWebkitNativeFullScreen ? d.webkitIsFullScreen : c.hasMsNativeFullScreen ? null !== d.msFullscreenElement : void 0
          }, c.requestFullScreen = function (a) {
            c.hasWebkitNativeFullScreen ? a.webkitRequestFullScreen() : c.hasMozNativeFullScreen ? a.mozRequestFullScreen() : c.hasMsNativeFullScreen && a.msRequestFullscreen()
          }, c.cancelFullScreen = function () {
            c.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : c.hasMozNativeFullScreen ? document.mozCancelFullScreen() : c.hasMsNativeFullScreen && document.msExitFullscreen()
          }), c.hasiOSFullScreen && f.match(/mac os x 10_5/i) && (c.hasNativeFullScreen = !1, c.hasiOSFullScreen = !1)
        }
      }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
        pluginType: "native",
        isFullScreen: !1,
        setCurrentTime: function (a) {
          this.currentTime = a
        },
        setMuted: function (a) {
          this.muted = a
        },
        setVolume: function (a) {
          this.volume = a
        },
        stop: function () {
          this.pause()
        },
        setSrc: function (a) {
          for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
          if ("string" == typeof a) this.src = a;
          else {
            var c, d;
            for (c = 0; c < a.length; c++)
              if (d = a[c], this.canPlayType(d.type)) {
                this.src = d.src;
                break
              }
          }
        },
        setVideoSize: function (a, b) {
          this.width = a, this.height = b
        }
      }, mejs.PluginMediaElement = function (a, b, c) {
        this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {}
      }, mejs.PluginMediaElement.prototype = {
        pluginElement: null,
        pluginType: "",
        isFullScreen: !1,
        playbackRate: -1,
        defaultPlaybackRate: -1,
        seekable: [],
        played: [],
        paused: !0,
        ended: !1,
        seeking: !1,
        duration: 0,
        error: null,
        tagName: "",
        muted: !1,
        volume: 1,
        currentTime: 0,
        play: function () {
          null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
        },
        load: function () {
          null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
        },
        pause: function () {
          null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
        },
        stop: function () {
          null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
        },
        canPlayType: function (a) {
          var b, c, d, e = mejs.plugins[this.pluginType];
          for (b = 0; b < e.length; b++)
            if (d = e[b], mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
              for (c = 0; c < d.types.length; c++)
                if (a == d.types[c]) return "probably";
          return ""
        },
        positionFullscreenButton: function (a, b, c) {
          null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
        },
        hideFullscreenButton: function () {
          null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
        },
        setSrc: function (a) {
          if ("string" == typeof a) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)), this.src = mejs.Utility.absolutizeUrl(a);
          else {
            var b, c;
            for (b = 0; b < a.length; b++)
              if (c = a[b], this.canPlayType(c.type)) {
                this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(c.src);
                break
              }
          }
        },
        setCurrentTime: function (a) {
          null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), this.currentTime = a)
        },
        setVolume: function (a) {
          null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * a) : this.pluginApi.setVolume(a), this.volume = a)
        },
        setMuted: function (a) {
          null != this.pluginApi && ("youtube" == this.pluginType ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = a, this.dispatchEvent({
            type: "volumechange"
          })) : this.pluginApi.setMuted(a), this.muted = a)
        },
        setVideoSize: function (a, b) {
          this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = a + "px", this.pluginElement.style.height = b + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
        },
        setFullscreen: function (a) {
          null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
        },
        enterFullScreen: function () {
          null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
        },
        exitFullScreen: function () {
          null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
        },
        addEventListener: function (a, b, c) {
          this.events[a] = this.events[a] || [], this.events[a].push(b)
        },
        removeEventListener: function (a, b) {
          if (!a) return this.events = {}, !0;
          var c = this.events[a];
          if (!c) return !0;
          if (!b) return this.events[a] = [], !0;
          for (var d = 0; d < c.length; d++)
            if (c[d] === b) return this.events[a].splice(d, 1), !0;
          return !1
        },
        dispatchEvent: function (a) {
          var b, c = this.events[a.type];
          if (c)
            for (b = 0; b < c.length; b++) c[b].apply(this, [a])
        },
        hasAttribute: function (a) {
          return a in this.attributes
        },
        removeAttribute: function (a) {
          delete this.attributes[a]
        },
        getAttribute: function (a) {
          return this.hasAttribute(a) ? this.attributes[a] : ""
        },
        setAttribute: function (a, b) {
          this.attributes[a] = b
        },
        remove: function () {
          mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
        }
      }, mejs.MediaPluginBridge = {
        pluginMediaElements: {},
        htmlMediaElements: {},
        registerPluginElement: function (a, b, c) {
          this.pluginMediaElements[a] = b, this.htmlMediaElements[a] = c
        },
        unregisterPluginElement: function (a) {
          delete this.pluginMediaElements[a], delete this.htmlMediaElements[a]
        },
        initPlugin: function (a) {
          var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
          if (b) {
            switch (b.pluginType) {
              case "flash":
                b.pluginElement = b.pluginApi = document.getElementById(a);
                break;
              case "silverlight":
                b.pluginElement = document.getElementById(b.id), b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            null != b.pluginApi && b.success && b.success(b, c)
          }
        },
        fireEvent: function (a, b, c) {
          var d, e, f, g = this.pluginMediaElements[a];
          if (g) {
            d = {
              type: b,
              target: g
            };
            for (e in c) g[e] = c[e], d[e] = c[e];
            f = c.bufferedTime || 0, d.target.buffered = d.buffered = {
              start: function (a) {
                return 0
              },
              end: function (a) {
                return f
              },
              length: 1
            }, g.dispatchEvent(d)
          }
        }
      }, mejs.MediaElementDefaults = {
        mode: "auto",
        plugins: ["flash", "silverlight", "youtube", "vimeo"],
        enablePluginDebug: !1,
        httpsBasicAuthSite: !1,
        type: "",
        pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
        flashName: "flashmediaelement.swf",
        flashStreamer: "",
        flashScriptAccess: "sameDomain",
        enablePluginSmoothing: !1,
        enablePseudoStreaming: !1,
        pseudoStreamingStartQueryParam: "start",
        silverlightName: "silverlightmediaelement.xap",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        pluginWidth: -1,
        pluginHeight: -1,
        pluginVars: [],
        timerRate: 250,
        startVolume: .8,
        success: function () {},
        error: function () {}
      }, mejs.MediaElement = function (a, b) {
        return mejs.HtmlMediaElementShim.create(a, b)
      }, mejs.HtmlMediaElementShim = {
        create: function (a, b) {
          var c, d, e = {},
            f = "string" == typeof a ? document.getElementById(a) : a,
            g = f.tagName.toLowerCase(),
            h = "audio" === g || "video" === g,
            i = h ? f.getAttribute("src") : f.getAttribute("href"),
            j = f.getAttribute("poster"),
            k = f.getAttribute("autoplay"),
            l = f.getAttribute("preload"),
            m = f.getAttribute("controls");
          for (d in mejs.MediaElementDefaults) e[d] = mejs.MediaElementDefaults[d];
          for (d in b) e[d] = b[d];
          return i = "undefined" == typeof i || null === i || "" == i ? null : i, j = "undefined" == typeof j || null === j ? "" : j, l = "undefined" == typeof l || null === l || "false" === l ? "none" : l, k = !("undefined" == typeof k || null === k || "false" === k), m = !("undefined" == typeof m || null === m || "false" === m), c = this.determinePlayback(f, e, mejs.MediaFeatures.supportsMediaTag, h, i), c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : "", "native" == c.method ? (mejs.MediaFeatures.isBustedAndroid && (f.src = c.url, f.addEventListener("click", function () {
            f.play()
          }, !1)), this.updateNative(c, e, k, l)) : "" !== c.method ? this.createPlugin(c, e, j, k, l, m) : (this.createErrorMessage(c, e, j), this)
        },
        determinePlayback: function (a, b, c, d, e) {
          var f, g, h, i, j, k, l, m, n, o, p, q = [],
            r = {
              method: "",
              url: "",
              htmlMediaElement: a,
              isVideo: "audio" != a.tagName.toLowerCase()
            };
          if ("undefined" != typeof b.type && "" !== b.type)
            if ("string" == typeof b.type) q.push({
              type: b.type,
              url: e
            });
            else
              for (f = 0; f < b.type.length; f++) q.push({
                type: b.type[f],
                url: e
              });
          else if (null !== e) k = this.formatType(e, a.getAttribute("type")), q.push({
            type: k,
            url: e
          });
          else
            for (f = 0; f < a.childNodes.length; f++) j = a.childNodes[f], 1 == j.nodeType && "source" == j.tagName.toLowerCase() && (e = j.getAttribute("src"), k = this.formatType(e, j.getAttribute("type")), p = j.getAttribute("media"), (!p || !window.matchMedia || window.matchMedia && window.matchMedia(p).matches) && q.push({
              type: k,
              url: e
            }));
          if (!d && q.length > 0 && null !== q[0].url && this.getTypeFromFile(q[0].url).indexOf("audio") > -1 && (r.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function (a) {
              return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
            }), mejs.MediaFeatures.isChromium && (a.canPlayType = function (a) {
              return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
            }), c && ("auto" === b.mode || "auto_plugin" === b.mode || "native" === b.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || b.httpsBasicAuthSite !== !0)) {
            for (d || (o = document.createElement(r.isVideo ? "video" : "audio"), a.parentNode.insertBefore(o, a), a.style.display = "none", r.htmlMediaElement = a = o), f = 0; f < q.length; f++)
              if ("video/m3u8" == q[f].type || "" !== a.canPlayType(q[f].type).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                r.method = "native", r.url = q[f].url;
                break
              }
            if ("native" === r.method && (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode)) return r
          }
          if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode)
            for (f = 0; f < q.length; f++)
              for (k = q[f].type, g = 0; g < b.plugins.length; g++)
                for (l = b.plugins[g], m = mejs.plugins[l], h = 0; h < m.length; h++)
                  if (n = m[h], null == n.version || mejs.PluginDetector.hasPluginVersion(l, n.version))
                    for (i = 0; i < n.types.length; i++)
                      if (k.toLowerCase() == n.types[i].toLowerCase()) return r.method = l, r.url = q[f].url, r;
          return "auto_plugin" === b.mode && "native" === r.method ? r : ("" === r.method && q.length > 0 && (r.url = q[0].url), r)
        },
        formatType: function (a, b) {
          return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
        },
        getTypeFromFile: function (a) {
          a = a.split("?")[0];
          var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase(),
            c = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video/" : "audio/";
          return this.getTypeFromExtension(b, c)
        },
        getTypeFromExtension: function (a, b) {
          switch (b = b || "", a) {
            case "mp4":
            case "m4v":
            case "m4a":
            case "f4v":
            case "f4a":
              return b + "mp4";
            case "flv":
              return b + "x-flv";
            case "webm":
            case "webma":
            case "webmv":
              return b + "webm";
            case "ogg":
            case "oga":
            case "ogv":
              return b + "ogg";
            case "m3u8":
              return "application/x-mpegurl";
            case "ts":
              return b + "mp2t";
            default:
              return b + a
          }
        },
        createErrorMessage: function (a, b, c) {
          var d = a.htmlMediaElement,
            e = document.createElement("div"),
            f = b.customError;
          e.className = "me-cannotplay";
          try {
            e.style.width = d.width + "px", e.style.height = d.height + "px"
          } catch (g) {}
          f || (f = '<a href="' + a.url + '">', "" !== c && (f += '<img src="' + c + '" width="100%" height="100%" alt="" />'), f += "<span>" + mejs.i18n.t("Download File") + "</span></a>"), e.innerHTML = f, d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d)
        },
        createPlugin: function (a, b, c, d, e, f) {
          var g, h, i, j = a.htmlMediaElement,
            k = 1,
            l = 1,
            m = "me_" + a.method + "_" + mejs.meIndex++,
            n = new mejs.PluginMediaElement(m, a.method, a.url),
            o = document.createElement("div");
          n.tagName = j.tagName;
          for (var p = 0; p < j.attributes.length; p++) {
            var q = j.attributes[p];
            q.specified && n.setAttribute(q.name, q.value)
          }
          for (h = j.parentNode; null !== h && null != h.tagName && "body" !== h.tagName.toLowerCase() && null != h.parentNode && null != h.parentNode.tagName && null != h.parentNode.constructor && "ShadowRoot" === h.parentNode.constructor.name;) {
            if ("p" === h.parentNode.tagName.toLowerCase()) {
              h.parentNode.parentNode.insertBefore(h, h.parentNode);
              break
            }
            h = h.parentNode
          }
          switch (a.isVideo ? (k = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : null !== j.getAttribute("width") ? j.getAttribute("width") : b.defaultVideoWidth, l = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : null !== j.getAttribute("height") ? j.getAttribute("height") : b.defaultVideoHeight, k = mejs.Utility.encodeUrl(k), l = mejs.Utility.encodeUrl(l)) : b.enablePluginDebug && (k = 320, l = 240), n.success = b.success, mejs.MediaPluginBridge.registerPluginElement(m, n, j), o.className = "me-plugin", o.id = m + "_container", a.isVideo ? j.parentNode.insertBefore(o, j) : document.body.insertBefore(o, document.body.childNodes[0]), i = ["id=" + m, "jsinitfunction=mejs.MediaPluginBridge.initPlugin", "jscallbackfunction=mejs.MediaPluginBridge.fireEvent", "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + k, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + l, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam], null !== a.url && ("flash" == a.method ? i.push("file=" + mejs.Utility.encodeUrl(a.url)) : i.push("file=" + a.url)), b.enablePluginDebug && i.push("debug=true"), b.enablePluginSmoothing && i.push("smoothing=true"), b.enablePseudoStreaming && i.push("pseudostreaming=true"), f && i.push("controls=true"), b.pluginVars && (i = i.concat(b.pluginVars)), a.method) {
            case "silverlight":
              o.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + m + '" name="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
              break;
            case "flash":
              mejs.MediaFeatures.isIE ? (g = document.createElement("div"), o.appendChild(g), g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + b.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : o.innerHTML = '<embed id="' + m + '" name="' + m + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + b.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + i.join("&") + '" width="' + k + '" height="' + l + '" scale="default"class="mejs-shim"></embed>';
              break;
            case "youtube":
              var r; - 1 != a.url.lastIndexOf("youtu.be") ? (r = a.url.substr(a.url.lastIndexOf("/") + 1), -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?")))) : r = a.url.substr(a.url.lastIndexOf("=") + 1), youtubeSettings = {
                container: o,
                containerId: o.id,
                pluginMediaElement: n,
                pluginId: m,
                videoId: r,
                height: l,
                width: k
              }, window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) && mejs.YouTubeApi.createFlash(youtubeSettings, b);
              break;
            case "vimeo":
              var s = m + "_player";
              if (n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), o.innerHTML = '<iframe src="//player.vimeo.com/video/' + n.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + s + '" width="' + k + '" height="' + l + '" frameborder="0" class="mejs-shim" id="' + s + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
                var t = $f(o.childNodes[0]);
                t.addEvent("ready", function () {
                  function a(a, b, c, d) {
                    var e = {
                      type: c,
                      target: b
                    };
                    "timeupdate" == c && (b.currentTime = e.currentTime = d.seconds, b.duration = e.duration = d.duration), b.dispatchEvent(e)
                  }
                  t.playVideo = function () {
                    t.api("play")
                  }, t.stopVideo = function () {
                    t.api("unload")
                  }, t.pauseVideo = function () {
                    t.api("pause")
                  }, t.seekTo = function (a) {
                    t.api("seekTo", a)
                  }, t.setVolume = function (a) {
                    t.api("setVolume", a)
                  }, t.setMuted = function (a) {
                    a ? (t.lastVolume = t.api("getVolume"), t.api("setVolume", 0)) : (t.api("setVolume", t.lastVolume), delete t.lastVolume)
                  }, t.addEvent("play", function () {
                    a(t, n, "play"), a(t, n, "playing")
                  }), t.addEvent("pause", function () {
                    a(t, n, "pause")
                  }), t.addEvent("finish", function () {
                    a(t, n, "ended")
                  }), t.addEvent("playProgress", function (b) {
                    a(t, n, "timeupdate", b)
                  }), n.pluginElement = o, n.pluginApi = t, mejs.MediaPluginBridge.initPlugin(m)
                })
              } else console.warn("You need to include froogaloop for vimeo to work")
          }
          return j.style.display = "none", j.removeAttribute("autoplay"), n
        },
        updateNative: function (a, b, c, d) {
          var e, f = a.htmlMediaElement;
          for (e in mejs.HtmlMediaElement) f[e] = mejs.HtmlMediaElement[e];
          return b.success(f, f), f
        }
      }, mejs.YouTubeApi = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        loadIframeApi: function () {
          if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b), this.isIframeStarted = !0
          }
        },
        iframeQueue: [],
        enqueueIframe: function (a) {
          this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(), this.iframeQueue.push(a))
        },
        createIframe: function (a) {
          var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
              height: a.height,
              width: a.width,
              videoId: a.videoId,
              playerVars: {
                controls: 0,
                wmode: "transparent"
              },
              events: {
                onReady: function () {
                  c.setVideoSize = function (a, b) {
                    c.setSize(a, b)
                  }, a.pluginMediaElement.pluginApi = c, a.pluginMediaElement.pluginElement = document.getElementById(a.containerId), mejs.MediaPluginBridge.initPlugin(a.pluginId), setInterval(function () {
                    mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                  }, 250)
                },
                onStateChange: function (a) {
                  mejs.YouTubeApi.handleStateChange(a.data, c, b)
                }
              }
            })
        },
        createEvent: function (a, b, c) {
          var d = {
            type: c,
            target: b
          };
          if (a && a.getDuration) {
            b.currentTime = d.currentTime = a.getCurrentTime(), b.duration = d.duration = a.getDuration(), d.paused = b.paused, d.ended = b.ended, d.muted = a.isMuted(), d.volume = a.getVolume() / 100, d.bytesTotal = a.getVideoBytesTotal(), d.bufferedBytes = a.getVideoBytesLoaded();
            var e = d.bufferedBytes / d.bytesTotal * d.duration;
            d.target.buffered = d.buffered = {
              start: function (a) {
                return 0
              },
              end: function (a) {
                return e
              },
              length: 1
            }
          }
          b.dispatchEvent(d)
        },
        iFrameReady: function () {
          for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
            var a = this.iframeQueue.pop();
            this.createIframe(a)
          }
        },
        flashPlayers: {},
        createFlash: function (a) {
          this.flashPlayers[a.pluginId] = a;
          var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
          mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
        },
        flashReady: function (a) {
          var b = this.flashPlayers[a],
            c = document.getElementById(a),
            d = b.pluginMediaElement;
          d.pluginApi = d.pluginElement = c, mejs.MediaPluginBridge.initPlugin(a), c.cueVideoById(b.videoId);
          var e = b.containerId + "_callback";
          window[e] = function (a) {
            mejs.YouTubeApi.handleStateChange(a, c, d)
          }, c.addEventListener("onStateChange", e), setInterval(function () {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
          }, 250), mejs.YouTubeApi.createEvent(c, d, "canplay")
        },
        handleStateChange: function (a, b, c) {
          switch (a) {
            case -1:
              c.paused = !0, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
              break;
            case 0:
              c.paused = !1, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "ended");
              break;
            case 1:
              c.paused = !1, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
              break;
            case 2:
              c.paused = !0, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "pause");
              break;
            case 3:
              mejs.YouTubeApi.createEvent(b, c, "progress");
              break;
            case 5:
          }
        }
      }, window.onYouTubePlayerAPIReady = function () {
        mejs.YouTubeApi.iFrameReady()
      }, window.onYouTubePlayerReady = function (a) {
        mejs.YouTubeApi.flashReady(a)
      }, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
      function (a, b, c) {
        "use strict";
        var d = {
          locale: {
            language: b.i18n && b.i18n.locale.language || "",
            strings: b.i18n && b.i18n.locale.strings || {}
          },
          ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
          methods: {}
        };
        d.getLanguage = function () {
          var a = d.locale.language || window.navigator.userLanguage || window.navigator.language;
          return d.ietf_lang_regex.exec(a) ? a : null
        }, "undefined" != typeof mejsL10n && (d.locale.language = mejsL10n.language), d.methods.checkPlain = function (a) {
          var b, c, d = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
          };
          a = String(a);
          for (b in d) d.hasOwnProperty(b) && (c = new RegExp(b, "g"), a = a.replace(c, d[b]));
          return a
        }, d.methods.t = function (a, b) {
          return d.locale.strings && d.locale.strings[b.context] && d.locale.strings[b.context][a] && (a = d.locale.strings[b.context][a]), d.methods.checkPlain(a)
        }, d.t = function (a, b) {
          if ("string" == typeof a && a.length > 0) {
            var c = d.getLanguage();
            return b = b || {
              context: c
            }, d.methods.t(a, b)
          }
          throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
          }
        }, b.i18n = d
      }(document, mejs),
      function (a, b) {
        "use strict";
        "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings)
      }(mejs.i18n.locale.strings),
      /*!
       *
       * MediaElementPlayer
       * http://mediaelementjs.com/
       *
       * Creates a controller bar for HTML5 <video> add <audio> tags
       * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
       *
       * Copyright 2010-2013, John Dyer (http://j.hn/)
       * License: MIT
       *
       */
      "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto, Zepto.fn.outerWidth = function (a) {
        var b = $(this).width();
        return a && (b += parseInt($(this).css("margin-right"), 10), b += parseInt($(this).css("margin-left"), 10)), b
      }) : "undefined" != typeof ender && (mejs.$ = ender),
      function (a) {
        mejs.MepDefaults = {
            poster: "",
            showPosterWhenEnded: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 30,
            defaultSeekBackwardInterval: function (a) {
              return .05 * a.duration
            },
            defaultSeekForwardInterval: function (a) {
              return .05 * a.duration
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            startVolume: .8,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            timeFormat: "",
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            autosizeProgress: !0,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            clickToPlayPause: !0,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            isVideo: !0,
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            keyActions: [{
              keys: [32, 179],
              action: function (a, b) {
                b.paused || b.ended ? b.play() : b.pause()
              }
            }, {
              keys: [38],
              action: function (a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                var c = Math.min(b.volume + .1, 1);
                b.setVolume(c)
              }
            }, {
              keys: [40],
              action: function (a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                var c = Math.max(b.volume - .1, 0);
                b.setVolume(c)
              }
            }, {
              keys: [37, 227],
              action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                  a.isVideo && (a.showControls(), a.startControlsTimer());
                  var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                  b.setCurrentTime(c)
                }
              }
            }, {
              keys: [39, 228],
              action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                  a.isVideo && (a.showControls(), a.startControlsTimer());
                  var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                  b.setCurrentTime(c)
                }
              }
            }, {
              keys: [70],
              action: function (a, b) {
                "undefined" != typeof a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
              }
            }, {
              keys: [77],
              action: function (a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
              }
            }]
          }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function (b, c) {
            if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(b, c);
            var d = this;
            return d.$media = d.$node = a(b), d.node = d.media = d.$media[0], d.node ? "undefined" != typeof d.node.player ? d.node.player : ("undefined" == typeof c && (c = d.$node.data("mejsoptions")), d.options = a.extend({}, mejs.MepDefaults, c), d.options.timeFormat || (d.options.timeFormat = "mm:ss", d.options.alwaysShowHours && (d.options.timeFormat = "hh:mm:ss"), d.options.showTimecodeFrameCount && (d.options.timeFormat += ":ff")), mejs.Utility.calculateTimeFormat(0, d.options, d.options.framesPerSecond || 25), d.id = "mep_" + mejs.mepIndex++, mejs.players[d.id] = d, d.init(), d) : void 0
          }, mejs.MediaElementPlayer.prototype = {
            hasFocus: !1,
            controlsAreVisible: !0,
            init: function () {
              var b = this,
                c = mejs.MediaFeatures,
                d = a.extend(!0, {}, b.options, {
                  success: function (a, c) {
                    b.meReady(a, c)
                  },
                  error: function (a) {
                    b.handleError(a)
                  }
                }),
                e = b.media.tagName.toLowerCase();
              if (b.isDynamic = "audio" !== e && "video" !== e, b.isDynamic ? b.isVideo = b.options.isVideo : b.isVideo = "audio" !== e && b.options.isVideo, c.isiPad && b.options.iPadUseNativeControls || c.isiPhone && b.options.iPhoneUseNativeControls) b.$media.attr("controls", "controls"), c.isiPad && null !== b.media.getAttribute("autoplay") && b.play();
              else if (c.isAndroid && b.options.AndroidUseNativeControls);
              else {
                b.$media.removeAttr("controls");
                var f = b.isVideo ? mejs.i18n.t("Video Player") : mejs.i18n.t("Audio Player");
                a('<span class="mejs-offscreen">' + f + "</span>").insertBefore(b.$media), b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + f + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function (a) {
                  if (!b.controlsAreVisible) {
                    b.showControls(!0);
                    var c = b.container.find(".mejs-playpause-button > button");
                    c.focus()
                  }
                }), b.container.addClass((c.isAndroid ? "mejs-android " : "") + (c.isiOS ? "mejs-ios " : "") + (c.isiPad ? "mejs-ipad " : "") + (c.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio ")), b.container.find(".mejs-mediaelement").append(b.$media), b.node.player = b, b.controls = b.container.find(".mejs-controls"), b.layers = b.container.find(".mejs-layers");
                var g = b.isVideo ? "video" : "audio",
                  h = g.substring(0, 1).toUpperCase() + g.substring(1);
                b.options[g + "Width"] > 0 || b.options[g + "Width"].toString().indexOf("%") > -1 ? b.width = b.options[g + "Width"] : "" !== b.media.style.width && null !== b.media.style.width ? b.width = b.media.style.width : null !== b.media.getAttribute("width") ? b.width = b.$media.attr("width") : b.width = b.options["default" + h + "Width"], b.options[g + "Height"] > 0 || b.options[g + "Height"].toString().indexOf("%") > -1 ? b.height = b.options[g + "Height"] : "" !== b.media.style.height && null !== b.media.style.height ? b.height = b.media.style.height : null !== b.$media[0].getAttribute("height") ? b.height = b.$media.attr("height") : b.height = b.options["default" + h + "Height"], b.setPlayerSize(b.width, b.height), d.pluginWidth = b.width, d.pluginHeight = b.height
              }
              mejs.MediaElement(b.$media[0], d), "undefined" != typeof b.container && b.controlsAreVisible && b.container.trigger("controlsshown")
            },
            showControls: function (a) {
              var b = this;
              a = "undefined" == typeof a || a, b.controlsAreVisible || (a ? (b.controls.removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
                b.controlsAreVisible = !0, b.container.trigger("controlsshown")
              }), b.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
                b.controlsAreVisible = !0
              })) : (b.controls.removeClass("mejs-offscreen").css("display", "block"), b.container.find(".mejs-control").removeClass("mejs-offscreen").css("display", "block"), b.controlsAreVisible = !0, b.container.trigger("controlsshown")), b.setControlsSize())
            },
            hideControls: function (b) {
              var c = this;
              b = "undefined" == typeof b || b, !c.controlsAreVisible || c.options.alwaysShowControls || c.keyboardAction || (b ? (c.controls.stop(!0, !0).fadeOut(200, function () {
                a(this).addClass("mejs-offscreen").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")
              }), c.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function () {
                a(this).addClass("mejs-offscreen").css("display", "block")
              })) : (c.controls.addClass("mejs-offscreen").css("display", "block"), c.container.find(".mejs-control").addClass("mejs-offscreen").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")))
            },
            controlsTimer: null,
            startControlsTimer: function (a) {
              var b = this;
              a = "undefined" != typeof a ? a : 1500, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function () {
                b.hideControls(), b.killControlsTimer("hide")
              }, a)
            },
            killControlsTimer: function (a) {
              var b = this;
              null !== b.controlsTimer && (clearTimeout(b.controlsTimer), delete b.controlsTimer, b.controlsTimer = null)
            },
            controlsEnabled: !0,
            disableControls: function () {
              var a = this;
              a.killControlsTimer(), a.hideControls(!1), this.controlsEnabled = !1
            },
            enableControls: function () {
              var a = this;
              a.showControls(!1), a.controlsEnabled = !0
            },
            meReady: function (b, c) {
              var d, e, f = this,
                g = mejs.MediaFeatures,
                h = c.getAttribute("autoplay"),
                i = !("undefined" == typeof h || null === h || "false" === h);
              if (!f.created) {
                if (f.created = !0, f.media = b, f.domNode = c, !(g.isAndroid && f.options.AndroidUseNativeControls || g.isiPad && f.options.iPadUseNativeControls || g.isiPhone && f.options.iPhoneUseNativeControls)) {
                  f.buildposter(f, f.controls, f.layers, f.media), f.buildkeyboard(f, f.controls, f.layers, f.media), f.buildoverlays(f, f.controls, f.layers, f.media), f.findTracks();
                  for (d in f.options.features)
                    if (e = f.options.features[d], f["build" + e]) try {
                      f["build" + e](f, f.controls, f.layers, f.media)
                    } catch (j) {}
                  f.container.trigger("controlsready"), f.setPlayerSize(f.width, f.height), f.setControlsSize(), f.isVideo && (mejs.MediaFeatures.hasTouch ? f.$media.bind("touchstart", function () {
                    f.controlsAreVisible ? f.hideControls(!1) : f.controlsEnabled && f.showControls(!1)
                  }) : (f.clickToPlayPauseCallback = function () {
                    f.options.clickToPlayPause && (f.media.paused ? f.play() : f.pause())
                  }, f.media.addEventListener("click", f.clickToPlayPauseCallback, !1), f.container.bind("mouseenter", function () {
                    f.controlsEnabled && (f.options.alwaysShowControls || (f.killControlsTimer("enter"), f.showControls(), f.startControlsTimer(2500)))
                  }).bind("mousemove", function () {
                    f.controlsEnabled && (f.controlsAreVisible || f.showControls(), f.options.alwaysShowControls || f.startControlsTimer(2500))
                  }).bind("mouseleave", function () {
                    f.controlsEnabled && (f.media.paused || f.options.alwaysShowControls || f.startControlsTimer(1e3))
                  })), f.options.hideVideoControlsOnLoad && f.hideControls(!1), i && !f.options.alwaysShowControls && f.hideControls(), f.options.enableAutosize && f.media.addEventListener("loadedmetadata", function (a) {
                    f.options.videoHeight <= 0 && null === f.domNode.getAttribute("height") && !isNaN(a.target.videoHeight) && (f.setPlayerSize(a.target.videoWidth, a.target.videoHeight), f.setControlsSize(), f.media.setVideoSize(a.target.videoWidth, a.target.videoHeight))
                  }, !1)), b.addEventListener("play", function () {
                    var a;
                    for (a in mejs.players) {
                      var b = mejs.players[a];
                      b.id == f.id || !f.options.pauseOtherPlayers || b.paused || b.ended || b.pause(), b.hasFocus = !1
                    }
                    f.hasFocus = !0
                  }, !1), f.media.addEventListener("ended", function (b) {
                    if (f.options.autoRewind) try {
                      f.media.setCurrentTime(0), window.setTimeout(function () {
                        a(f.container).find(".mejs-overlay-loading").parent().hide()
                      }, 20)
                    } catch (c) {}
                    f.media.pause(), f.setProgressRail && f.setProgressRail(), f.setCurrentRail && f.setCurrentRail(), f.options.loop ? f.play() : !f.options.alwaysShowControls && f.controlsEnabled && f.showControls()
                  }, !1), f.media.addEventListener("loadedmetadata", function (a) {
                    f.updateDuration && f.updateDuration(), f.updateCurrent && f.updateCurrent(), f.isFullScreen || (f.setPlayerSize(f.width, f.height), f.setControlsSize())
                  }, !1);
                  var k = null;
                  f.media.addEventListener("timeupdate", function () {
                    k !== this.duration && (k = this.duration, mejs.Utility.calculateTimeFormat(k, f.options, f.options.framesPerSecond || 25))
                  }, !1), f.container.focusout(function (b) {
                    if (b.relatedTarget) {
                      var c = a(b.relatedTarget);
                      f.keyboardAction && 0 === c.parents(".mejs-container").length && (f.keyboardAction = !1, f.hideControls(!0))
                    }
                  }), setTimeout(function () {
                    f.setPlayerSize(f.width, f.height), f.setControlsSize()
                  }, 50), f.globalBind("resize", function () {
                    f.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || f.setPlayerSize(f.width, f.height), f.setControlsSize()
                  }), "youtube" == f.media.pluginType && (g.isiOS || g.isAndroid) && f.container.find(".mejs-overlay-play").hide()
                }
                i && "native" == b.pluginType && f.play(), f.options.success && ("string" == typeof f.options.success ? window[f.options.success](f.media, f.domNode, f) : f.options.success(f.media, f.domNode, f))
              }
            },
            handleError: function (a) {
              var b = this;
              b.controls && b.controls.hide(), b.options.error && b.options.error(a)
            },
            setPlayerSize: function (b, c) {
              var d = this;
              if (!d.options.setDimensions) return !1;
              if ("undefined" != typeof b && (d.width = b), "undefined" != typeof c && (d.height = c), d.height.toString().indexOf("%") > 0 || "none" !== d.$node.css("max-width") && "t.width" !== d.$node.css("max-width") || d.$node[0].currentStyle && "100%" === d.$node[0].currentStyle.maxWidth) {
                var e = function () {
                    return d.isVideo ? d.media.videoWidth && d.media.videoWidth > 0 ? d.media.videoWidth : null !== d.media.getAttribute("width") ? d.media.getAttribute("width") : d.options.defaultVideoWidth : d.options.defaultAudioWidth
                  }(),
                  f = function () {
                    return d.isVideo ? d.media.videoHeight && d.media.videoHeight > 0 ? d.media.videoHeight : null !== d.media.getAttribute("height") ? d.media.getAttribute("height") : d.options.defaultVideoHeight : d.options.defaultAudioHeight
                  }(),
                  g = d.container.parent().closest(":visible").width(),
                  h = d.container.parent().closest(":visible").height(),
                  i = d.isVideo || !d.options.autosizeProgress ? parseInt(g * f / e, 10) : f;
                isNaN(i) && (i = h), d.container.parent().length > 0 && "body" === d.container.parent()[0].tagName.toLowerCase() && (g = a(window).width(), i = a(window).height()), i && g && (d.container.width(g).height(i), d.$media.add(d.container.find(".mejs-shim")).width("100%").height("100%"), d.isVideo && d.media.setVideoSize && d.media.setVideoSize(g, i), d.layers.children(".mejs-layer").width("100%").height("100%"))
              } else d.container.width(d.width).height(d.height), d.layers.children(".mejs-layer").width(d.width).height(d.height)
            },
            setControlsSize: function () {
              var b = this,
                c = 0,
                d = 0,
                e = b.controls.find(".mejs-time-rail"),
                f = b.controls.find(".mejs-time-total"),
                g = e.siblings(),
                h = g.last(),
                i = null;
              if (b.container.is(":visible") && e.length && e.is(":visible")) {
                b.options && !b.options.autosizeProgress && (d = parseInt(e.css("width"), 10)), 0 !== d && d || (g.each(function () {
                  var b = a(this);
                  "absolute" != b.css("position") && b.is(":visible") && (c += a(this).outerWidth(!0))
                }), d = b.controls.width() - c - (e.outerWidth(!0) - e.width()));
                do e.width(d), f.width(d - (f.outerWidth(!0) - f.width())), "absolute" != h.css("position") && (i = h.length ? h.position() : null, d--); while (null !== i && i.top > 0 && d > 0);
                b.container.trigger("controlsresize")
              }
            },
            buildposter: function (b, c, d, e) {
              var f = this,
                g = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),
                h = b.$media.attr("poster");
              "" !== b.options.poster && (h = b.options.poster), h ? f.setPoster(h) : g.hide(), e.addEventListener("play", function () {
                g.hide()
              }, !1), b.options.showPosterWhenEnded && b.options.autoRewind && e.addEventListener("ended", function () {
                g.show()
              }, !1)
            },
            setPoster: function (b) {
              var c = this,
                d = c.container.find(".mejs-poster"),
                e = d.find("img");
              0 === e.length && (e = a('<img width="100%" height="100%" alt="" />').appendTo(d)), e.attr("src", b), d.css({
                "background-image": "url(" + b + ")"
              })
            },
            buildoverlays: function (b, c, d, e) {
              var f = this;
              if (b.isVideo) {
                var g = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),
                  h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),
                  i = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click", function () {
                    f.options.clickToPlayPause && e.paused && e.play()
                  });
                e.addEventListener("play", function () {
                  i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                }, !1), e.addEventListener("playing", function () {
                  i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                }, !1), e.addEventListener("seeking", function () {
                  g.show(), c.find(".mejs-time-buffering").show()
                }, !1), e.addEventListener("seeked", function () {
                  g.hide(), c.find(".mejs-time-buffering").hide()
                }, !1), e.addEventListener("pause", function () {
                  mejs.MediaFeatures.isiPhone || i.show()
                }, !1), e.addEventListener("waiting", function () {
                  g.show(), c.find(".mejs-time-buffering").show()
                }, !1), e.addEventListener("loadeddata", function () {
                  g.show(), c.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (e.canplayTimeout = window.setTimeout(function () {
                    if (document.createEvent) {
                      var a = document.createEvent("HTMLEvents");
                      return a.initEvent("canplay", !0, !0), e.dispatchEvent(a)
                    }
                  }, 300))
                }, !1), e.addEventListener("canplay", function () {
                  g.hide(), c.find(".mejs-time-buffering").hide(), clearTimeout(e.canplayTimeout)
                }, !1), e.addEventListener("error", function (a) {
                  f.handleError(a), g.hide(), i.hide(), h.show(), h.find(".mejs-overlay-error").html("Error loading this resource")
                }, !1), e.addEventListener("keydown", function (a) {
                  f.onkeydown(b, e, a)
                }, !1)
              }
            },
            buildkeyboard: function (b, c, d, e) {
              var f = this;
              f.container.keydown(function () {
                f.keyboardAction = !0
              }), f.globalBind("keydown", function (c) {
                return b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length, f.onkeydown(b, e, c)
              }), f.globalBind("click", function (c) {
                b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length
              })
            },
            onkeydown: function (a, b, c) {
              if (a.hasFocus && a.options.enableKeyboard)
                for (var d = 0, e = a.options.keyActions.length; e > d; d++)
                  for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++)
                    if (c.keyCode == f.keys[g]) return "function" == typeof c.preventDefault && c.preventDefault(), f.action(a, b, c.keyCode), !1;
              return !0
            },
            findTracks: function () {
              var b = this,
                c = b.$media.find("track");
              b.tracks = [], c.each(function (c, d) {
                d = a(d), b.tracks.push({
                  srclang: d.attr("srclang") ? d.attr("srclang").toLowerCase() : "",
                  src: d.attr("src"),
                  kind: d.attr("kind"),
                  label: d.attr("label") || "",
                  entries: [],
                  isLoaded: !1
                })
              })
            },
            changeSkin: function (a) {
              this.container[0].className = "mejs-container " + a, this.setPlayerSize(this.width, this.height), this.setControlsSize()
            },
            play: function () {
              this.load(), this.media.play()
            },
            pause: function () {
              try {
                this.media.pause()
              } catch (a) {}
            },
            load: function () {
              this.isLoaded || this.media.load(), this.isLoaded = !0
            },
            setMuted: function (a) {
              this.media.setMuted(a)
            },
            setCurrentTime: function (a) {
              this.media.setCurrentTime(a)
            },
            getCurrentTime: function () {
              return this.media.currentTime
            },
            setVolume: function (a) {
              this.media.setVolume(a)
            },
            getVolume: function () {
              return this.media.volume
            },
            setSrc: function (a) {
              this.media.setSrc(a)
            },
            remove: function () {
              var a, b, c = this;
              c.container.prev(".mejs-offscreen").remove();
              for (a in c.options.features)
                if (b = c.options.features[a], c["clean" + b]) try {
                  c["clean" + b](c)
                } catch (d) {}
              c.isDynamic ? c.$node.insertBefore(c.container) : (c.$media.prop("controls", !0), c.$node.clone().insertBefore(c.container).show(), c.$node.remove()), "native" !== c.media.pluginType && c.media.remove(), delete mejs.players[c.id], "object" == typeof c.container && c.container.remove(), c.globalUnbind(), delete c.node.player
            },
            rebuildtracks: function () {
              var a = this;
              a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media)
            },
            resetSize: function () {
              var a = this;
              setTimeout(function () {
                a.setPlayerSize(a.width, a.height), a.setControlsSize()
              }, 50)
            }
          },
          function () {
            function b(b, d) {
              var e = {
                d: [],
                w: []
              };
              return a.each((b || "").split(" "), function (a, b) {
                var f = b + "." + d;
                0 === f.indexOf(".") ? (e.d.push(f), e.w.push(f)) : e[c.test(b) ? "w" : "d"].push(f)
              }), e.d = e.d.join(" "), e.w = e.w.join(" "), e
            }
            var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
            mejs.MediaElementPlayer.prototype.globalBind = function (c, d, e) {
              var f = this,
                g = f.node ? f.node.ownerDocument : document;
              c = b(c, f.id), c.d && a(g).bind(c.d, d, e), c.w && a(window).bind(c.w, d, e)
            }, mejs.MediaElementPlayer.prototype.globalUnbind = function (c, d) {
              var e = this,
                f = e.node ? e.node.ownerDocument : document;
              c = b(c, e.id), c.d && a(f).unbind(c.d, d), c.w && a(window).unbind(c.w, d)
            }
          }(), "undefined" != typeof a && (a.fn.mediaelementplayer = function (b) {
            return b === !1 ? this.each(function () {
              var b = a(this).data("mediaelementplayer");
              b && b.remove(), a(this).removeData("mediaelementplayer")
            }) : this.each(function () {
              a(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, b))
            }), this
          }, a(document).ready(function () {
            a(".mejs-player").mediaelementplayer()
          })), window.MediaElementPlayer = mejs.MediaElementPlayer
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          playText: mejs.i18n.t("Play"),
          pauseText: mejs.i18n.t("Pause")
        }), a.extend(MediaElementPlayer.prototype, {
          buildplaypause: function (b, c, d, e) {
            function f(a) {
              "play" === a ? (i.removeClass("mejs-play").addClass("mejs-pause"), j.attr({
                title: h.pauseText,
                "aria-label": h.pauseText
              })) : (i.removeClass("mejs-pause").addClass("mejs-play"), j.attr({
                title: h.playText,
                "aria-label": h.playText
              }))
            }
            var g = this,
              h = g.options,
              i = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + g.id + '" title="' + h.playText + '" aria-label="' + h.playText + '"></button></div>').appendTo(c).click(function (a) {
                return a.preventDefault(), e.paused ? e.play() : e.pause(), !1
              }),
              j = i.find("button");
            f("pse"), e.addEventListener("play", function () {
              f("play")
            }, !1), e.addEventListener("playing", function () {
              f("play")
            }, !1), e.addEventListener("pause", function () {
              f("pse")
            }, !1), e.addEventListener("paused", function () {
              f("pse")
            }, !1)
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          stopText: "Stop"
        }), a.extend(MediaElementPlayer.prototype, {
          buildstop: function (b, c, d, e) {
            var f = this;
            a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + f.id + '" title="' + f.options.stopText + '" aria-label="' + f.options.stopText + '"></button></div>').appendTo(c).click(function () {
              e.paused || e.pause(), e.currentTime > 0 && (e.setCurrentTime(0), e.pause(), c.find(".mejs-time-current").width("0px"), c.find(".mejs-time-handle").css("left", "0px"), c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, b.options)), c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, b.options)), d.find(".mejs-poster").show())
            })
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          progessHelpText: mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")
        }), a.extend(MediaElementPlayer.prototype, {
          buildprogress: function (b, c, d, e) {
            a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(c), c.find(".mejs-time-buffering").hide();
            var f = this,
              g = c.find(".mejs-time-total"),
              h = c.find(".mejs-time-loaded"),
              i = c.find(".mejs-time-current"),
              j = c.find(".mejs-time-handle"),
              k = c.find(".mejs-time-float"),
              l = c.find(".mejs-time-float-current"),
              m = c.find(".mejs-time-slider"),
              n = function (a) {
                var c, d = g.offset(),
                  f = g.width(),
                  h = 0,
                  i = 0,
                  j = 0;
                c = a.originalEvent && a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.changedTouches ? a.changedTouches[0].pageX : a.pageX, e.duration && (c < d.left ? c = d.left : c > f + d.left && (c = f + d.left), j = c - d.left, h = j / f, i = .02 >= h ? 0 : h * e.duration, o && i !== e.currentTime && e.setCurrentTime(i), mejs.MediaFeatures.hasTouch || (k.css("left", j), l.html(mejs.Utility.secondsToTimeCode(i, b.options)), k.show()))
              },
              o = !1,
              p = !1,
              q = 0,
              r = !1,
              s = b.options.autoRewind,
              t = function (a) {
                var c = e.currentTime,
                  d = mejs.i18n.t("Time Slider"),
                  f = mejs.Utility.secondsToTimeCode(c, b.options),
                  g = e.duration;
                m.attr({
                  "aria-label": d,
                  "aria-valuemin": 0,
                  "aria-valuemax": g,
                  "aria-valuenow": c,
                  "aria-valuetext": f,
                  role: "slider",
                  tabindex: 0
                })
              },
              u = function () {
                var a = new Date;
                a - q >= 1e3 && e.play()
              };
            m.bind("focus", function (a) {
              b.options.autoRewind = !1
            }), m.bind("blur", function (a) {
              b.options.autoRewind = s
            }), m.bind("keydown", function (a) {
              new Date - q >= 1e3 && (r = e.paused);
              var b = a.keyCode,
                c = e.duration,
                d = e.currentTime;
              switch (b) {
                case 37:
                  d -= 1;
                  break;
                case 39:
                  d += 1;
                  break;
                case 38:
                  d += Math.floor(.1 * c);
                  break;
                case 40:
                  d -= Math.floor(.1 * c);
                  break;
                case 36:
                  d = 0;
                  break;
                case 35:
                  d = c;
                  break;
                case 10:
                  return void(e.paused ? e.play() : e.pause());
                case 13:
                  return void(e.paused ? e.play() : e.pause());
                default:
                  return
              }
              return d = 0 > d ? 0 : d >= c ? c : Math.floor(d), q = new Date, r || e.pause(), d < e.duration && !r && setTimeout(u, 1100), e.setCurrentTime(d), a.preventDefault(), a.stopPropagation(), !1
            }), g.bind("mousedown touchstart", function (a) {
              (1 === a.which || 0 === a.which) && (o = !0, n(a), f.globalBind("mousemove.dur touchmove.dur", function (a) {
                n(a)
              }), f.globalBind("mouseup.dur touchend.dur", function (a) {
                o = !1, k.hide(), f.globalUnbind(".dur")
              }))
            }).bind("mouseenter", function (a) {
              p = !0, f.globalBind("mousemove.dur", function (a) {
                n(a)
              }), mejs.MediaFeatures.hasTouch || k.show()
            }).bind("mouseleave", function (a) {
              p = !1, o || (f.globalUnbind(".dur"), k.hide())
            }), e.addEventListener("progress", function (a) {
              b.setProgressRail(a), b.setCurrentRail(a)
            }, !1), e.addEventListener("timeupdate", function (a) {
              b.setProgressRail(a), b.setCurrentRail(a), t(a)
            }, !1), f.container.on("controlsresize", function () {
              b.setProgressRail(), b.setCurrentRail()
            }), f.loaded = h, f.total = g, f.current = i, f.handle = j
          },
          setProgressRail: function (a) {
            var b = this,
              c = void 0 !== a ? a.target : b.media,
              d = null;
            c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration ? d = c.buffered.end(c.buffered.length - 1) / c.duration : c && void 0 !== c.bytesTotal && c.bytesTotal > 0 && void 0 !== c.bufferedBytes ? d = c.bufferedBytes / c.bytesTotal : a && a.lengthComputable && 0 !== a.total && (d = a.loaded / a.total), null !== d && (d = Math.min(1, Math.max(0, d)), b.loaded && b.total && b.loaded.width(b.total.width() * d))
          },
          setCurrentRail: function () {
            var a = this;
            if (void 0 !== a.media.currentTime && a.media.duration && a.total && a.handle) {
              var b = Math.round(a.total.width() * a.media.currentTime / a.media.duration),
                c = b - Math.round(a.handle.outerWidth(!0) / 2);
              a.current.width(b), a.handle.css("left", c)
            }
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          duration: -1,
          timeAndDurationSeparator: "<span> | </span>"
        }), a.extend(MediaElementPlayer.prototype, {
          buildcurrent: function (b, c, d, e) {
            var f = this;
            a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, b.options) + "</span></div>").appendTo(c), f.currenttime = f.controls.find(".mejs-currenttime"), e.addEventListener("timeupdate", function () {
              b.updateCurrent()
            }, !1)
          },
          buildduration: function (b, c, d, e) {
            var f = this;
            c.children().last().find(".mejs-currenttime").length > 0 ? a(f.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span>").appendTo(c.find(".mejs-time")) : (c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span></div>").appendTo(c)), f.durationD = f.controls.find(".mejs-duration"), e.addEventListener("timeupdate", function () {
              b.updateDuration()
            }, !1)
          },
          updateCurrent: function () {
            var a = this,
              b = a.media.currentTime;
            isNaN(b) && (b = 0), a.currenttime && a.currenttime.html(mejs.Utility.secondsToTimeCode(b, a.options))
          },
          updateDuration: function () {
            var a = this,
              b = a.media.duration;
            a.options.duration > 0 && (b = a.options.duration), isNaN(b) && (b = 0), a.container.toggleClass("mejs-long-video", b > 3600), a.durationD && b > 0 && a.durationD.html(mejs.Utility.secondsToTimeCode(b, a.options))
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          muteText: mejs.i18n.t("Mute Toggle"),
          allyVolumeControlText: mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),
          hideVolumeOnTouchDevices: !0,
          audioVolume: "horizontal",
          videoVolume: "vertical"
        }), a.extend(MediaElementPlayer.prototype, {
          buildvolume: function (b, c, d, e) {
            if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
              var f = this,
                g = f.isVideo ? f.options.videoVolume : f.options.audioVolume,
                h = "horizontal" == g ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),
                i = f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                j = f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                k = f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                l = f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                m = function (a, b) {
                  if (!i.is(":visible") && "undefined" == typeof b) return i.show(), m(a, !0), void i.hide();
                  a = Math.max(0, a), a = Math.min(a, 1), 0 === a ? (h.removeClass("mejs-mute").addClass("mejs-unmute"), h.children("button").attr("title", mejs.i18n.t("Unmute")).attr("aria-label", mejs.i18n.t("Unmute"))) : (h.removeClass("mejs-unmute").addClass("mejs-mute"), h.children("button").attr("title", mejs.i18n.t("Mute")).attr("aria-label", mejs.i18n.t("Mute")));
                  var c = j.position();
                  if ("vertical" == g) {
                    var d = j.height(),
                      e = d - d * a;
                    l.css("top", Math.round(c.top + e - l.height() / 2)), k.height(d - e), k.css("top", c.top + e)
                  } else {
                    var f = j.width(),
                      n = f * a;
                    l.css("left", Math.round(c.left + n - l.width() / 2)), k.width(Math.round(n))
                  }
                },
                n = function (a) {
                  var b = null,
                    c = j.offset();
                  if ("vertical" === g) {
                    var d = j.height(),
                      f = a.pageY - c.top;
                    if (b = (d - f) / d, 0 === c.top || 0 === c.left) return
                  } else {
                    var h = j.width(),
                      i = a.pageX - c.left;
                    b = i / h
                  }
                  b = Math.max(0, b), b = Math.min(b, 1), m(b), 0 === b ? e.setMuted(!0) : e.setMuted(!1), e.setVolume(b)
                },
                o = !1,
                p = !1;
              h.hover(function () {
                i.show(), p = !0
              }, function () {
                p = !1, o || "vertical" != g || i.hide()
              });
              var q = function (a) {
                var b = Math.floor(100 * e.volume);
                i.attr({
                  "aria-label": mejs.i18n.t("volumeSlider"),
                  "aria-valuemin": 0,
                  "aria-valuemax": 100,
                  "aria-valuenow": b,
                  "aria-valuetext": b + "%",
                  role: "slider",
                  tabindex: 0
                })
              };
              i.bind("mouseover", function () {
                p = !0
              }).bind("mousedown", function (a) {
                return n(a), f.globalBind("mousemove.vol", function (a) {
                  n(a)
                }), f.globalBind("mouseup.vol", function () {
                  o = !1, f.globalUnbind(".vol"), p || "vertical" != g || i.hide()
                }), o = !0, !1
              }).bind("keydown", function (a) {
                var b = a.keyCode,
                  c = e.volume;
                switch (b) {
                  case 38:
                    c += .1;
                    break;
                  case 40:
                    c -= .1;
                    break;
                  default:
                    return !0
                }
                return o = !1, m(c), e.setVolume(c), !1
              }), h.find("button").click(function () {
                e.setMuted(!e.muted)
              }), h.find("button").bind("focus", function () {
                i.show()
              }), e.addEventListener("volumechange", function (a) {
                o || (e.muted ? (m(0), h.removeClass("mejs-mute").addClass("mejs-unmute")) : (m(e.volume), h.removeClass("mejs-unmute").addClass("mejs-mute"))), q(a)
              }, !1), 0 === b.options.startVolume && e.setMuted(!0), "native" === e.pluginType && e.setVolume(b.options.startVolume), f.container.on("controlsresize", function () {
                m(e.volume)
              })
            }
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          usePluginFullScreen: !0,
          newWindowCallback: function () {
            return ""
          },
          fullscreenText: mejs.i18n.t("Fullscreen")
        }), a.extend(MediaElementPlayer.prototype, {
          isFullScreen: !1,
          isNativeFullScreen: !1,
          isInIframe: !1,
          fullscreenMode: "",
          buildfullscreen: function (b, c, d, e) {
            if (b.isVideo) {
              b.isInIframe = window.location != window.parent.location, e.addEventListener("play", function () {
                b.detectFullscreenMode()
              });
              var f = this,
                g = null,
                h = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + f.id + '" title="' + f.options.fullscreenText + '" aria-label="' + f.options.fullscreenText + '"></button></div>').appendTo(c).on("click", function () {
                  var a = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || b.isFullScreen;
                  a ? b.exitFullScreen() : b.enterFullScreen()
                }).on("mouseover", function () {
                  if ("plugin-hover" == f.fullscreenMode) {
                    // null !== g && (clearTimeout(g), delete g);
                    var a = h.offset(),
                      c = b.container.offset();
                    e.positionFullscreenButton(a.left - c.left, a.top - c.top, !0)
                  }
                }).on("mouseout", function () {
                  //   "plugin-hover" == f.fullscreenMode && (null !== g && (clearTimeout(g), delete g),
                  //    g = setTimeout(function () {
                  //     e.hideFullscreenButton()
                  //   }, 1500))
                });
              if (b.fullscreenBtn = h, f.globalBind("keydown", function (a) {
                  27 == a.keyCode && (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || f.isFullScreen) && b.exitFullScreen()
                }), f.normalHeight = 0, f.normalWidth = 0, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                var i = function (a) {
                  b.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (b.isNativeFullScreen = !0, b.setControlsSize()) : (b.isNativeFullScreen = !1, b.exitFullScreen()))
                };
                b.globalBind(mejs.MediaFeatures.fullScreenEventName, i)
              }
            }
          },
          detectFullscreenMode: function () {
            var a = this,
              b = "",
              c = mejs.MediaFeatures;
            return c.hasTrueNativeFullScreen && "native" === a.media.pluginType ? b = "native-native" : c.hasTrueNativeFullScreen && "native" !== a.media.pluginType && !c.hasFirefoxPluginMovingProblem ? b = "plugin-native" : a.usePluginFullScreen ? mejs.MediaFeatures.supportsPointerEvents ? (b = "plugin-click", a.createPluginClickThrough()) : b = "plugin-hover" : b = "fullwindow", a.fullscreenMode = b, b
          },
          isPluginClickThroughCreated: !1,
          createPluginClickThrough: function () {
            var b = this;
            if (!b.isPluginClickThroughCreated) {
              var c, d, e = !1,
                f = function () {
                  if (e) {
                    for (var a in g) g[a].hide();
                    b.fullscreenBtn.css("pointer-events", ""), b.controls.css("pointer-events", ""), b.media.removeEventListener("click", b.clickToPlayPauseCallback), e = !1
                  }
                },
                g = {},
                h = ["top", "left", "right", "bottom"],
                i = function () {
                  var a = fullscreenBtn.offset().left - b.container.offset().left,
                    d = fullscreenBtn.offset().top - b.container.offset().top,
                    e = fullscreenBtn.outerWidth(!0),
                    f = fullscreenBtn.outerHeight(!0),
                    h = b.container.width(),
                    i = b.container.height();
                  for (c in g) g[c].css({
                    position: "absolute",
                    top: 0,
                    left: 0
                  });
                  g.top.width(h).height(d), g.left.width(a).height(f).css({
                    top: d
                  }), g.right.width(h - a - e).height(f).css({
                    top: d,
                    left: a + e
                  }), g.bottom.width(h).height(i - f - d).css({
                    top: d + f
                  })
                };
              for (b.globalBind("resize", function () {
                  i()
                }), c = 0, d = h.length; d > c; c++) g[h[c]] = a('<div class="mejs-fullscreen-hover" />').appendTo(b.container).mouseover(f).hide();
              fullscreenBtn.on("mouseover", function () {
                if (!b.isFullScreen) {
                  var a = fullscreenBtn.offset(),
                    d = player.container.offset();
                  media.positionFullscreenButton(a.left - d.left, a.top - d.top, !1), b.fullscreenBtn.css("pointer-events", "none"), b.controls.css("pointer-events", "none"), b.media.addEventListener("click", b.clickToPlayPauseCallback);
                  for (c in g) g[c].show();
                  i(), e = !0
                }
              }), media.addEventListener("fullscreenchange", function (a) {
                b.isFullScreen = !b.isFullScreen, b.isFullScreen ? b.media.removeEventListener("click", b.clickToPlayPauseCallback) : b.media.addEventListener("click", b.clickToPlayPauseCallback), f()
              }), b.globalBind("mousemove", function (a) {
                if (e) {
                  var c = fullscreenBtn.offset();
                  (a.pageY < c.top || a.pageY > c.top + fullscreenBtn.outerHeight(!0) || a.pageX < c.left || a.pageX > c.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), b.controls.css("pointer-events", ""), e = !1)
                }
              }), b.isPluginClickThroughCreated = !0
            }
          },
          cleanfullscreen: function (a) {
            a.exitFullScreen()
          },
          containerSizeTimeout: null,
          enterFullScreen: function () {
            var b = this;
            return mejs.MediaFeatures.hasiOSFullScreen ? void b.media.webkitEnterFullscreen() : (a(document.documentElement).addClass("mejs-fullscreen"), b.normalHeight = b.container.height(), b.normalWidth = b.container.width(), "native-native" === b.fullscreenMode || "plugin-native" === b.fullscreenMode ? (mejs.MediaFeatures.requestFullScreen(b.container[0]), b.isInIframe && setTimeout(function c() {
              if (b.isNativeFullScreen) {
                var d = window.devicePixelRatio || 1,
                  e = .002,
                  f = d * a(window).width(),
                  g = screen.width,
                  h = d * f;
                Math.abs(g - f) > Math.abs(g - h) && (f = h);
                var i = Math.abs(g - f),
                  j = g * e;
                i > j ? b.exitFullScreen() : setTimeout(c, 500)
              }
            }, 1e3)) : "fullwindow" == b.fullscreeMode, b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), b.containerSizeTimeout = setTimeout(function () {
              b.container.css({
                width: "100%",
                height: "100%"
              }), b.setControlsSize()
            }, 500), "native" === b.media.pluginType ? b.$media.width("100%").height("100%") : (b.container.find(".mejs-shim").width("100%").height("100%"), setTimeout(function () {
              var c = a(window),
                d = c.width(),
                e = c.height();
              b.media.setVideoSize(d, e)
            }, 500)), b.layers.children("div").width("100%").height("100%"), b.fullscreenBtn && b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), b.setControlsSize(), b.isFullScreen = !0, b.container.find(".mejs-captions-text").css("font-size", screen.width / b.width * 1 * 100 + "%"), b.container.find(".mejs-captions-position").css("bottom", "45px"), void b.container.trigger("enteredfullscreen"))
          },
          exitFullScreen: function () {
            var b = this;
            clearTimeout(b.containerSizeTimeout), mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), a(document.documentElement).removeClass("mejs-fullscreen"), b.container.removeClass("mejs-container-fullscreen").width(b.normalWidth).height(b.normalHeight), "native" === b.media.pluginType ? b.$media.width(b.normalWidth).height(b.normalHeight) : (b.container.find(".mejs-shim").width(b.normalWidth).height(b.normalHeight), b.media.setVideoSize(b.normalWidth, b.normalHeight)), b.layers.children("div").width(b.normalWidth).height(b.normalHeight), b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), b.setControlsSize(), b.isFullScreen = !1, b.container.find(".mejs-captions-text").css("font-size", ""), b.container.find(".mejs-captions-position").css("bottom", ""), b.container.trigger("exitedfullscreen")
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
          defaultSpeed: "1.00",
          speedChar: "x"
        }), a.extend(MediaElementPlayer.prototype, {
          buildspeed: function (b, c, d, e) {
            var f = this;
            if ("native" == f.media.pluginType) {
              for (var g = null, h = null, i = null, j = null, k = [], l = !1, m = 0, n = f.options.speeds.length; n > m; m++) {
                var o = f.options.speeds[m];
                "string" == typeof o ? (k.push({
                  name: o + f.options.speedChar,
                  value: o
                }), o === f.options.defaultSpeed && (l = !0)) : (k.push(o), o.value === f.options.defaultSpeed && (l = !0))
              }
              l || k.push({
                name: f.options.defaultSpeed + f.options.speedChar,
                value: f.options.defaultSpeed
              }), k.sort(function (a, b) {
                return parseFloat(b.value) - parseFloat(a.value)
              });
              var p = function (a) {
                  for (m = 0, n = k.length; n > m; m++)
                    if (k[m].value === a) return k[m].name
                },
                q = '<div class="mejs-button mejs-speed-button"><button type="button">' + p(f.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
              for (m = 0, il = k.length; m < il; m++) j = f.id + "-speed-" + k[m].value, q += '<li><input type="radio" name="speed" value="' + k[m].value + '" id="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? " checked" : "") + ' /><label for="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + k[m].name + "</label></li>";
              q += "</ul></div></div>", g = a(q).appendTo(c), h = g.find(".mejs-speed-selector"), i = f.options.defaultSpeed, e.addEventListener("loadedmetadata", function (a) {
                i && (e.playbackRate = parseFloat(i))
              }, !0), h.on("click", 'input[type="radio"]', function () {
                var b = a(this).attr("value");
                i = b, e.playbackRate = parseFloat(b), g.find("button").html(p(b)), g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
              }), g.one("mouseenter focusin", function () {
                h.height(g.find(".mejs-speed-selector ul").outerHeight(!0) + g.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * h.height() + "px")
              })
            }
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          startLanguage: "",
          tracksText: mejs.i18n.t("Captions/Subtitles"),
          tracksAriaLive: !1,
          hideCaptionsButtonWhenEmpty: !0,
          toggleCaptionsButtonWhenOnlyOne: !1,
          slidesSelector: ""
        }), a.extend(MediaElementPlayer.prototype, {
          hasChapters: !1,
          cleartracks: function (a, b, c, d) {
            a && (a.captions && a.captions.remove(), a.chapters && a.chapters.remove(), a.captionsText && a.captionsText.remove(), a.captionsButton && a.captionsButton.remove())
          },
          buildtracks: function (b, c, d, e) {
            if (0 !== b.tracks.length) {
              var f, g = this,
                h = g.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "";
              if (g.domNode.textTracks)
                for (f = g.domNode.textTracks.length - 1; f >= 0; f--) g.domNode.textTracks[f].mode = "hidden";
              g.cleartracks(b, c, d, e), b.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(), b.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + h + '><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(), b.captionsText = b.captions.find(".mejs-captions-text"), b.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.tracksText + '" aria-label="' + g.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + b.id + '_captions" id="' + b.id + '_captions_none" value="none" checked="checked" /><label for="' + b.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(c);
              var i = 0;
              for (f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && i++;
              for (g.options.toggleCaptionsButtonWhenOnlyOne && 1 == i ? b.captionsButton.on("click", function () {
                  null === b.selectedTrack ? lang = b.tracks[0].srclang : lang = "none", b.setTrack(lang)
                }) : (b.captionsButton.on("mouseenter focusin", function () {
                  a(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")
                }).on("click", "input[type=radio]", function () {
                  lang = this.value, b.setTrack(lang)
                }), b.captionsButton.on("mouseleave focusout", function () {
                  a(this).find(".mejs-captions-selector").addClass("mejs-offscreen")
                })), b.options.alwaysShowControls ? b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : b.container.bind("controlsshown", function () {
                  b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function () {
                  e.paused || b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                }), b.trackToLoad = -1, b.selectedTrack = null, b.isLoadingTrack = !1, f = 0; f < b.tracks.length; f++) "subtitles" == b.tracks[f].kind && b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
              b.loadNextTrack(), e.addEventListener("timeupdate", function (a) {
                b.displayCaptions()
              }, !1), "" !== b.options.slidesSelector && (b.slidesContainer = a(b.options.slidesSelector), e.addEventListener("timeupdate", function (a) {
                b.displaySlides()
              }, !1)), e.addEventListener("loadedmetadata", function (a) {
                b.displayChapters()
              }, !1), b.container.hover(function () {
                b.hasChapters && (b.chapters.removeClass("mejs-offscreen"), b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))
              }, function () {
                b.hasChapters && !e.paused && b.chapters.fadeOut(200, function () {
                  a(this).addClass("mejs-offscreen"), a(this).css("display", "block")
                })
              }), g.container.on("controlsresize", function () {
                g.adjustLanguageBox()
              }), null !== b.node.getAttribute("autoplay") && b.chapters.addClass("mejs-offscreen")
            }
          },
          setTrack: function (a) {
            var b, c = this;
            if ("none" == a) c.selectedTrack = null, c.captionsButton.removeClass("mejs-captions-enabled");
            else
              for (b = 0; b < c.tracks.length; b++)
                if (c.tracks[b].srclang == a) {
                  null === c.selectedTrack && c.captionsButton.addClass("mejs-captions-enabled"), c.selectedTrack = c.tracks[b], c.captions.attr("lang", c.selectedTrack.srclang), c.displayCaptions();
                  break
                }
          },
          loadNextTrack: function () {
            var a = this;
            a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack = !0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack = !1, a.checkForTracks())
          },
          loadTrack: function (b) {
            var c = this,
              d = c.tracks[b],
              e = function () {
                d.isLoaded = !0, c.enableTrackButton(d.srclang, d.label), c.loadNextTrack()
              };
            a.ajax({
              url: d.src,
              dataType: "text",
              success: function (a) {
                "string" == typeof a && /<tt\s+xml/gi.exec(a) ? d.entries = mejs.TrackFormatParser.dfxp.parse(a) : d.entries = mejs.TrackFormatParser.webvtt.parse(a), e(), "chapters" == d.kind && c.media.addEventListener("play", function (a) {
                  c.media.duration > 0 && c.displayChapters(d)
                }, !1), "slides" == d.kind && c.setupSlides(d)
              },
              error: function () {
                c.removeTrackButton(d.srclang), c.loadNextTrack()
              }
            })
          },
          enableTrackButton: function (b, c) {
            var d = this;
            "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("input[value=" + b + "]").prop("disabled", !1).siblings("label").html(c), d.options.startLanguage == b && a("#" + d.id + "_captions_" + b).prop("checked", !0).trigger("click"), d.adjustLanguageBox()
          },
          removeTrackButton: function (a) {
            var b = this;
            b.captionsButton.find("input[value=" + a + "]").closest("li").remove(), b.adjustLanguageBox()
          },
          addTrackButton: function (b, c) {
            var d = this;
            "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("ul").append(a('<li><input type="radio" name="' + d.id + '_captions" id="' + d.id + "_captions_" + b + '" value="' + b + '" disabled="disabled" /><label for="' + d.id + "_captions_" + b + '">' + c + " (loading)</label></li>")), d.adjustLanguageBox(), d.container.find(".mejs-captions-translations option[value=" + b + "]").remove()
          },
          adjustLanguageBox: function () {
            var a = this;
            a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
          },
          checkForTracks: function () {
            var a = this,
              b = !1;
            if (a.options.hideCaptionsButtonWhenEmpty) {
              for (i = 0; i < a.tracks.length; i++)
                if ("subtitles" == a.tracks[i].kind && a.tracks[i].isLoaded) {
                  b = !0;
                  break
                }
              b || (a.captionsButton.hide(), a.setControlsSize())
            }
          },
          displayCaptions: function () {
            if ("undefined" != typeof this.tracks) {
              var a, b = this,
                c = b.selectedTrack;
              if (null !== c && c.isLoaded) {
                for (a = 0; a < c.entries.times.length; a++)
                  if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return b.captionsText.html(c.entries.text[a]).attr("class", "mejs-captions-text " + (c.entries.times[a].identifier || "")), void b.captions.show().height(0);
                b.captions.hide()
              } else b.captions.hide()
            }
          },
          setupSlides: function (a) {
            var b = this;
            b.slides = a, b.slides.entries.imgs = [b.slides.entries.text.length], b.showSlide(0)
          },
          showSlide: function (b) {
            if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
              var c = this,
                d = c.slides.entries.text[b],
                e = c.slides.entries.imgs[b];
              "undefined" == typeof e || "undefined" == typeof e.fadeIn ? c.slides.entries.imgs[b] = e = a('<img src="' + d + '">').on("load", function () {
                e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
              }) : e.is(":visible") || e.is(":animated") || e.fadeIn().siblings(":visible").fadeOut()
            }
          },
          displaySlides: function () {
            if ("undefined" != typeof this.slides) {
              var a, b = this,
                c = b.slides;
              for (a = 0; a < c.entries.times.length; a++)
                if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop) return void b.showSlide(a)
            }
          },
          displayChapters: function () {
            var a, b = this;
            for (a = 0; a < b.tracks.length; a++)
              if ("chapters" == b.tracks[a].kind && b.tracks[a].isLoaded) {
                b.drawChapters(b.tracks[a]), b.hasChapters = !0;
                break
              }
          },
          drawChapters: function (b) {
            var c, d, e = this,
              f = 0,
              g = 0;
            for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++) d = b.entries.times[c].stop - b.entries.times[c].start, f = Math.floor(d / e.media.duration * 100), (f + g > 100 || c == b.entries.times.length - 1 && 100 > f + g) && (f = 100 - g), e.chapters.append(a('<div class="mejs-chapter" rel="' + b.entries.times[c].start + '" style="left: ' + g.toString() + "%;width: " + f.toString() + '%;"><div class="mejs-chapter-block' + (c == b.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + b.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(b.entries.times[c].start, e.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(b.entries.times[c].stop, e.options) + "</span></div></div>")), g += f;
            e.chapters.find("div.mejs-chapter").click(function () {
              e.media.setCurrentTime(parseFloat(a(this).attr("rel"))), e.media.paused && e.media.play()
            }), e.chapters.show()
          }
        }), mejs.language = {
          codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            fl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
          }
        }, mejs.TrackFormatParser = {
          webvtt: {
            pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (b) {
              for (var c, d, e, f = 0, g = mejs.TrackFormatParser.split2(b, /\r?\n/), h = {
                  text: [],
                  times: []
                }; f < g.length; f++) {
                if (c = this.pattern_timecode.exec(g[f]), c && f < g.length) {
                  for (f - 1 >= 0 && "" !== g[f - 1] && (e = g[f - 1]), f++, d = g[f], f++;
                    "" !== g[f] && f < g.length;) d = d + "\n" + g[f], f++;
                  d = a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), h.text.push(d), h.times.push({
                    identifier: e,
                    start: 0 === mejs.Utility.convertSMPTEtoSeconds(c[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(c[1]),
                    stop: mejs.Utility.convertSMPTEtoSeconds(c[3]),
                    settings: c[5]
                  })
                }
                e = ""
              }
              return h
            }
          },
          dfxp: {
            parse: function (b) {
              b = a(b).filter("tt");
              var c, d, e = 0,
                f = b.children("div").eq(0),
                g = f.find("p"),
                h = b.find("#" + f.attr("style")),
                i = {
                  text: [],
                  times: []
                };
              if (h.length) {
                var j = h.removeAttr("id").get(0).attributes;
                if (j.length)
                  for (c = {}, e = 0; e < j.length; e++) c[j[e].name.split(":")[1]] = j[e].value
              }
              for (e = 0; e < g.length; e++) {
                var k, l = {
                  start: null,
                  stop: null,
                  style: null
                };
                if (g.eq(e).attr("begin") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))), !l.start && g.eq(e - 1).attr("end") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e - 1).attr("end"))), g.eq(e).attr("end") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))), !l.stop && g.eq(e + 1).attr("begin") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e + 1).attr("begin"))), c) {
                  k = "";
                  for (var m in c) k += m + ":" + c[m] + ";"
                }
                k && (l.style = k), 0 === l.start && (l.start = .2), i.times.push(l), d = a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.text.push(d), 0 === i.times.start && (i.times.start = 2)
              }
              return i
            }
          },
          split2: function (a, b) {
            return a.split(b)
          }
        }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function (a, b) {
          var c, d = [],
            e = "";
          for (c = 0; c < a.length; c++) e += a.substring(c, c + 1), b.test(e) && (d.push(e.replace(b, "")), e = "");
          return d.push(e), d
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          contextMenuItems: [{
            render: function (a) {
              return "undefined" == typeof a.enterFullScreen ? null : a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function (a) {
              a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
          }, {
            render: function (a) {
              return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function (a) {
              a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
            }
          }, {
            isSeparator: !0
          }, {
            render: function (a) {
              return mejs.i18n.t("Download Video")
            },
            click: function (a) {
              window.location.href = a.media.currentSrc
            }
          }]
        }), a.extend(MediaElementPlayer.prototype, {
          buildcontextmenu: function (b, c, d, e) {
            b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(), b.container.bind("contextmenu", function (a) {
              return b.isContextMenuEnabled ? (a.preventDefault(), b.renderContextMenu(a.clientX - 1, a.clientY - 1), !1) : void 0
            }), b.container.bind("click", function () {
              b.contextMenu.hide()
            }), b.contextMenu.bind("mouseleave", function () {
              b.startContextMenuTimer()
            })
          },
          cleancontextmenu: function (a) {
            a.contextMenu.remove()
          },
          isContextMenuEnabled: !0,
          enableContextMenu: function () {
            this.isContextMenuEnabled = !0
          },
          disableContextMenu: function () {
            this.isContextMenuEnabled = !1
          },
          contextMenuTimeout: null,
          startContextMenuTimer: function () {
            var a = this;
            a.killContextMenuTimer(), a.contextMenuTimer = setTimeout(function () {
              a.hideContextMenu(), a.killContextMenuTimer()
            }, 750)
          },
          killContextMenuTimer: function () {
            var a = this.contextMenuTimer;
            // null != a && (clearTimeout(a), delete a, a = null)
          },
          hideContextMenu: function () {
            this.contextMenu.hide()
          },
          renderContextMenu: function (b, c) {
            for (var d = this, e = "", f = d.options.contextMenuItems, g = 0, h = f.length; h > g; g++)
              if (f[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
              else {
                var i = f[g].render(d);
                null != i && (e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + 1e6 * Math.random() + '">' + i + "</div>")
              }
            d.contextMenu.empty().append(a(e)).css({
              top: c,
              left: b
            }).show(), d.contextMenu.find(".mejs-contextmenu-item").each(function () {
              var b = a(this),
                c = parseInt(b.data("itemindex"), 10),
                e = d.options.contextMenuItems[c];
              "undefined" != typeof e.show && e.show(b, d), b.click(function () {
                "undefined" != typeof e.click && e.click(d), d.contextMenu.hide()
              })
            }), setTimeout(function () {
              d.killControlsTimer("rev3")
            }, 100)
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          skipBackInterval: 30,
          skipBackText: mejs.i18n.t("Skip back %1 seconds")
        }), a.extend(MediaElementPlayer.prototype, {
          buildskipback: function (b, c, d, e) {
            var f = this,
              g = f.options.skipBackText.replace("%1", f.options.skipBackInterval);
            a('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + f.id + '" title="' + g + '" aria-label="' + g + '">' + f.options.skipBackInterval + "</button></div>").appendTo(c).click(function () {
              e.setCurrentTime(Math.max(e.currentTime - f.options.skipBackInterval, 0)), a(this).find("button").blur()
            })
          }
        })
      }(mejs.$),
      function (a) {
        a.extend(mejs.MepDefaults, {
          postrollCloseText: mejs.i18n.t("Close")
        }), a.extend(MediaElementPlayer.prototype, {
          buildpostroll: function (b, c, d, e) {
            var f = this,
              g = f.container.find('link[rel="postroll"]').attr("href");
            "undefined" != typeof g && (b.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + f.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(), f.media.addEventListener("ended", function (c) {
              a.ajax({
                dataType: "html",
                url: g,
                success: function (a, b) {
                  d.find(".mejs-postroll-layer-content").html(a)
                }
              }), b.postroll.show()
            }, !1))
          }
        })
      }(mejs.$);

    /************************************************
    FITVIDEO
    ************************************************/

    ! function (t) {
      "use strict";
      t.fn.fitVids = function (e) {
        var i = {
          customSelector: null,
          ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
          var r = document.head || document.getElementsByTagName("head")[0],
            a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
            d = document.createElement("div");
          d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function () {
          var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
          i.customSelector && e.push(i.customSelector);
          var r = ".fitvidsignore";
          i.ignore && (r = r + ", " + i.ignore);
          var a = t(this).find(e.join(","));
          a = a.not("object object"), a = a.not(r), a.each(function () {
            var e = t(this);
            if (!(e.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
              e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
              var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                a = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                d = i / a;
              if (!e.attr("name")) {
                var o = "fitvid" + t.fn.fitVids._count;
                e.attr("name", o), t.fn.fitVids._count++
              }
              e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * d + "%"), e.removeAttr("height").removeAttr("width")
            }
          })
        })
      }, t.fn.fitVids._count = 0
    }(window.jQuery || window.Zepto);

    /************************************************
    ELEMENTS
    ************************************************/

    $(document).ready(function () {
      // Target your .container, .wrapper, .post, etc.
      $(".post-media").fitVids();

      $('video').mediaelementplayer({
        // if the <video width> is not specified, this is the default
        defaultVideoWidth: 750,
        // if the <video height> is not specified, this is the default
        defaultVideoHeight: 420,
        // if set, overrides <video width>
        videoWidth: -1,
        // if set, overrides <video height>
        videoHeight: -1,
        // width of audio player
        // initial volume when the player starts
        startVolume: 0.8,
        // useful for <audio> player loops
        loop: false,
        // enables Flash and Silverlight to resize to content size
        enableAutosize: false,
        // the order of controls you want on the control bar (and other plugins below)
        features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen'],
        // Hide controls when playing and mouse is not over the video
        alwaysShowControls: true,
        keyActions: []
      });

    });

    /************************************************
    PROGRESS
    ************************************************/
    ! function (t) {
      "use strict";
      var e = function (n, a) {
        this.$element = t(n), this.options = t.extend({}, e.defaults, a)
      };
      e.defaults = {
        transition_delay: 300,
        refresh_speed: 50,
        display_text: "none",
        use_percentage: !0,
        percent_format: function (t) {
          return t + "%"
        },
        amount_format: function (t, e, n) {
          return t + " / " + e
        },
        update: t.noop,
        done: t.noop,
        fail: t.noop
      }, e.prototype.transition = function () {
        var n = this.$element,
          a = n.parent(),
          s = this.$back_text,
          r = this.$front_text,
          i = this.options,
          o = parseInt(n.attr("data-transitiongoal")),
          h = parseInt(n.attr("aria-valuemin")) || 0,
          d = parseInt(n.attr("aria-valuemax")) || 100,
          f = a.hasClass("vertical"),
          p = i.update && "function" == typeof i.update ? i.update : e.defaults.update,
          u = i.done && "function" == typeof i.done ? i.done : e.defaults.done,
          c = i.fail && "function" == typeof i.fail ? i.fail : e.defaults.fail;
        if (isNaN(o)) return void c("data-transitiongoal not set");
        var l = Math.round(100 * (o - h) / (d - h));
        if ("center" === i.display_text && !s && !r) {
          this.$back_text = s = t("<span>").addClass("progressbar-back-text").prependTo(a), this.$front_text = r = t("<span>").addClass("progressbar-front-text").prependTo(n);
          var g;
          f ? (g = a.css("height"), s.css({
            height: g,
            "line-height": g
          }), r.css({
            height: g,
            "line-height": g
          }), t(window).resize(function () {
            g = a.css("height"), s.css({
              height: g,
              "line-height": g
            }), r.css({
              height: g,
              "line-height": g
            })
          })) : (g = a.css("width"), r.css({
            width: g
          }), t(window).resize(function () {
            g = a.css("width"), r.css({
              width: g
            })
          }))
        }
        setTimeout(function () {
          var t, e, c, g, _;
          f ? n.css("height", l + "%") : n.css("width", l + "%");
          var x = setInterval(function () {
            f ? (c = n.height(), g = a.height()) : (c = n.width(), g = a.width()), t = Math.round(100 * c / g), e = Math.round(h + c / g * (d - h)), t >= l && (t = l, e = o, u(n), clearInterval(x)), "none" !== i.display_text && (_ = i.use_percentage ? i.percent_format(t) : i.amount_format(e, d, h), "fill" === i.display_text ? n.text(_) : "center" === i.display_text && (s.text(_), r.text(_))), n.attr("aria-valuenow", e), p(t, n)
          }, i.refresh_speed)
        }, i.transition_delay)
      };
      var n = t.fn.progressbar;
      t.fn.progressbar = function (n) {
        return this.each(function () {
          var a = t(this),
            s = a.data("bs.progressbar"),
            r = "object" == typeof n && n;
          s || a.data("bs.progressbar", s = new e(this, r)), s.transition()
        })
      }, t.fn.progressbar.Constructor = e, t.fn.progressbar.noConflict = function () {
        return t.fn.progressbar = n, this
      }
    }(window.jQuery);
    $('.progress .progress-bar').progressbar({
      transition_delay: 800
    });

    /************************************************
    ANIMATION
    ************************************************/
    (function () {
      var t, e, n, i, o, r = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        },
        s = [].indexOf || function (t) {
          for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t) return e;
          return -1
        };
      e = function () {
        function t() {}
        return t.prototype.extend = function (t, e) {
          var n, i;
          for (n in e) i = e[n], null == t[n] && (t[n] = i);
          return t
        }, t.prototype.isMobile = function (t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, n, i) {
          var o;
          return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function (t, e) {
          return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, n) {
          return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function (t, e, n) {
          return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function () {
          return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
      }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
        function t() {
          this.keys = [], this.values = []
        }
        return t.prototype.get = function (t) {
          var e, n, i, o, r;
          for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i)
            if (n = r[e], n === t) return this.values[e]
        }, t.prototype.set = function (t, e) {
          var n, i, o, r, s;
          for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)
            if (i = s[n], i === t) return void(this.values[n] = e);
          return this.keys.push(t), this.values.push(e)
        }, t
      }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
        function t() {
          "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function () {}, t
      }()), i = this.getComputedStyle || function (t, e) {
        return this.getPropertyValue = function (e) {
          var n;
          return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function (t, e) {
            return e.toUpperCase()
          }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
      }, o = /(\-([a-z]){1})/g, this.WOW = function () {
        function o(t) {
          null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null
        }, o.prototype.init = function () {
          var t;
          return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function () {
          var e, n, i, o;
          if (this.stopped = !1, this.boxes = function () {
              var t, n, i, o;
              for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
              return o
            }.call(this), this.all = function () {
              var t, n, i, o;
              for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
              return o
            }.call(this), this.boxes.length)
            if (this.disabled()) this.resetStyle();
            else
              for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
          return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
            return function (e) {
              var n, i, o, r, s;
              for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function () {
                var t, e, n, i;
                for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o));
                return i
              }.call(t));
              return s
            }
          }(this)).observe(document.body, {
            childList: !0,
            subtree: !0
          }) : void 0
        }, o.prototype.stop = function () {
          return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function (e) {
          return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function (t) {
          var e, n, i, o, r;
          if (null == t && (t = this.element), 1 === t.nodeType) {
            for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
            return r
          }
        }, o.prototype.show = function (t) {
          return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function (t, e) {
          var n, i, o;
          return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function (r) {
            return function () {
              return r.customStyle(t, e, i, n, o)
            }
          }(this))
        }, o.prototype.animate = function () {
          return "requestAnimationFrame" in window ? function (t) {
            return window.requestAnimationFrame(t)
          } : function (t) {
            return t()
          }
        }(), o.prototype.resetStyle = function () {
          var t, e, n, i, o;
          for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
          return o
        }, o.prototype.resetAnimation = function (t) {
          var e;
          return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, o.prototype.customStyle = function (t, e, n, i, o) {
          return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
            animationDuration: n
          }), i && this.vendorSet(t.style, {
            animationDelay: i
          }), o && this.vendorSet(t.style, {
            animationIterationCount: o
          }), this.vendorSet(t.style, {
            animationName: e ? "none" : this.cachedAnimationName(t)
          }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function (t, e) {
          var n, i, o, r;
          i = [];
          for (n in e) o = e[n], t["" + n] = o, i.push(function () {
            var e, i, s, l;
            for (s = this.vendors, l = [], e = 0, i = s.length; i > e; e++) r = s[e], l.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
            return l
          }.call(this));
          return i
        }, o.prototype.vendorCSS = function (t, e) {
          var n, o, r, s, l, a;
          for (l = i(t), s = l.getPropertyCSSValue(e), r = this.vendors, n = 0, o = r.length; o > n; n++) a = r[n], s = s || l.getPropertyCSSValue("-" + a + "-" + e);
          return s
        }, o.prototype.animationName = function (t) {
          var e;
          try {
            e = this.vendorCSS(t, "animation-name").cssText
          } catch (n) {
            e = i(t).getPropertyValue("animation-name")
          }
          return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function (t) {
          return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function (t) {
          return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function () {
          return this.scrolled = !0
        }, o.prototype.scrollCallback = function () {
          var t;
          return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
            var e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
            return o
          }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function (t) {
          for (var e; void 0 === t.offsetTop;) t = t.parentNode;
          for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
          return e
        }, o.prototype.isVisible = function (t) {
          var e, n, i, o, r;
          return n = t.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function () {
          return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function () {
          return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
      }()
    }).call(this), wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0
    }), wow.init();

  }
  
  this.otherScript = function () {
    (function ($) {
      "use strict";
      var tpj = jQuery;
      var revapi98;
      tpj(document).ready(function () {
        if (tpj("#rev_slider_98_1").revolution == undefined) {
          revslider_showDoubleJqueryError("#rev_slider_98_1");
        } else {
          revapi98 = tpj("#rev_slider_98_1").show().revolution({
            sliderType: "hero",
            jsFileLocation: "assets/revolution/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 550, 400, 300],
            lazyType: "none",
            parallax: {
              type: "mouse",
              origo: "slidercenter",
              speed: 2000,
              levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              disableFocusListener: false,
            }
          });
        }
      }); /*ready*/

      var tpj = jQuery;
      var revapi98;
      tpj(document).ready(function () {
        if (tpj("#rev_slider_98_2").revolution == undefined) {
          revslider_showDoubleJqueryError("#rev_slider_98_2");
        } else {
          revapi98 = tpj("#rev_slider_98_2").show().revolution({
            sliderType: "hero",
            jsFileLocation: "assets/revolution/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [400, 350, 300, 300],
            lazyType: "none",
            parallax: {
              type: "mouse",
              origo: "slidercenter",
              speed: 2000,
              levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              disableFocusListener: false,
            }
          });
        }
      }); /*ready*/
    })(jQuery);
  }

  this.mapjs = function () {
    /* ==============================================
        MAP -->
        =============================================== */
    var locations = [
      ['<div class="infobox"><h3 class="title"><a href="#">OUR USA OFFICE</a></h3><span>NEW YORK CITY 2045 / 65</span><span>+90 555 666 77 88</span></div>', -37.801578, 145.060508, 2]
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      scrollwheel: false,
      navigationControl: true,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,
      styles: [{
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#444444"
          }]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
              "color": "#3ca1db"
            },
            {
              "visibility": "on"
            }
          ]
        }
      ],
      center: new google.maps.LatLng(14.7470808, -17.4381106),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/marker.png'
      });
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

  }
}

export default angular.module('samaschoolApp.jsFonctions', [])
  .service('jsFonctions', jsFonctionsService)
  .name;
