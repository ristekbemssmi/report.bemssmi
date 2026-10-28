/*! genie.js - animasi buka/tutup jendela dari sebuah pemicu (tanpa dependensi)
 *
 * Mode:
 *   'natural' (default): jendela tumbuh dari titik pemicu dengan gerak pegas (spring)
 *                        yang sedikit memantul saat buka, dan menutup cepat dan halus.
 *   'genie'            : efek tersedot ala macOS (clip-path + transform).
 *   'scale'            : zoom + fade sederhana.
 *
 * API:
 *   Genie.open(windowEl, triggerEl, options?)
 *   Genie.close(windowEl)
 *   Genie.toggle(windowEl, triggerEl, options?)
 *   Genie.defaults   -> { mode, spring:{damping,speed}, closeEasing, ... }
 *
 * Opsi: mode, openDuration (ms), closeDuration (ms), openEasing, closeEasing,
 *       spring: { damping: 0.4-0.95 (kecil = lebih memantul), speed: 8-25 (besar = lebih cepat) }
 *
 * Atribut HTML (auto-init):
 *   data-genie-toggle="#id"  | data-genie-open="#id"  (pada pemicu)
 *   data-genie-close         (pada tombol di dalam jendela)
 *   data-genie-mode="natural|genie|scale"  (pada jendela, opsional)
 */
(function (global) {
  'use strict';

  var defaults = {
    mode: 'genie',
    openEasing: null,                       // null = otomatis (spring / cubic-bezier)
    closeEasing: 'cubic-bezier(.32, 0, .67, 0)',
    spring: { damping: 0.68, speed: 11 }
  };

  // [buka, tutup] dalam ms, per mode
  var DURATIONS = { natural: [600, 260], genie: [520, 340], scale: [420, 240] };

  var reduceQuery = global.matchMedia ? global.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var store = new WeakMap();   // windowEl -> state
  var stack = [];              // urutan jendela terbuka (untuk Escape)
  var zCounter = 1000;
  var springCache = {};

  function $(el) { return typeof el === 'string' ? document.querySelector(el) : el; }
  function reduced() { return !!(reduceQuery && reduceQuery.matches); }
  function stateOf(win) {
    var s = store.get(win);
    if (!s) { s = { open: false, trigger: null, triggerRect: null, anim: null, dir: null, cfg: null }; store.set(win, s); }
    return s;
  }

  // ---- Easing pegas, dibuat sebagai CSS linear() ----
  function springEasing(sp) {
    var fallback = 'cubic-bezier(.22, 1, .36, 1)';
    if (!(global.CSS && CSS.supports && CSS.supports('animation-timing-function', 'linear(0, 1)'))) return fallback;
    var z = Math.min(Math.max(sp.damping, 0.2), 0.98), w = sp.speed;
    var key = z + '|' + w;
    if (springCache[key]) return springCache[key];
    var wd = w * Math.sqrt(1 - z * z), pts = [], n = 48;
    for (var i = 0; i <= n; i++) {
      var t = i / n;
      var v = 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
      pts.push(+v.toFixed(4));
    }
    pts[0] = 0; pts[n] = 1;
    return (springCache[key] = 'linear(' + pts.join(', ') + ')');
  }

  // ---- Keyframe ----
  var CLIP_FULL   = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  var CLIP_FUNNEL = 'polygon(0% 0%, 100% 0%, 55% 100%, 45% 100%)';
  var CLIP_NECK   = 'polygon(0% 0%, 100% 0%, 66% 100%, 34% 100%)';
  var CLIP_WIDE   = 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)';

  function buildFrames(win, trigger, mode) {
    var s = store.get(win);
    var t = (s && s.triggerRect) ? s.triggerRect : (trigger ? trigger.getBoundingClientRect() : null);
    if (!t) {
      return [
        { opacity: 0, transform: 'scale(0.95)' },
        { opacity: 1, transform: 'none' }
      ];
    }
    var w = win.getBoundingClientRect(); // jendela sudah tampil, tanpa transform
    var tcx = t.left + t.width / 2, tcy = t.top + t.height / 2;

    if (mode === 'natural') {
      // Skala tumbuh dari titik pemicu: jendela bergerak ke posisinya sambil membesar
      win.style.transformOrigin = (tcx - w.left) + 'px ' + (tcy - w.top) + 'px';
      return [
        { transform: 'scale(0.2) translateY(10px)', opacity: 0, offset: 0 },
        { opacity: 1, offset: 0.3 },
        { transform: 'none', opacity: 1, offset: 1 }
      ];
    }

    var dx = tcx - (w.left + w.width / 2), dy = tcy - (w.top + w.height / 2);
    function move(k) { return 'translate(' + (dx * k) + 'px,' + (dy * k) + 'px)'; }

    if (mode === 'scale') {
      return [
        { transform: move(1) + ' scale(0.1)', opacity: 0 },
        { transform: 'none', opacity: 1 }
      ];
    }
    return [ // genie
      { transform: move(1)    + ' scale(0.06, 0.04)', clipPath: CLIP_FUNNEL, webkitClipPath: CLIP_FUNNEL, opacity: 0, offset: 0 },
      { transform: move(0.6)  + ' scale(0.3, 0.4)',   clipPath: CLIP_NECK,   webkitClipPath: CLIP_NECK,   opacity: 1, offset: 0.3 },
      { transform: move(0.15) + ' scale(0.8, 0.85)',  clipPath: CLIP_WIDE,   webkitClipPath: CLIP_WIDE,   opacity: 1, offset: 0.7 },
      { transform: 'none',                            clipPath: CLIP_FULL,   webkitClipPath: CLIP_FULL,   opacity: 1, offset: 1 }
    ];
  }

  function reverseFrames(frames) {
    return frames.slice().reverse().map(function (f) {
      var c = Object.assign({}, f);
      if (c.offset != null) c.offset = 1 - c.offset;
      return c;
    });
  }

  function resolveConfig(win, options) {
    var o = options || {};
    var cfg = Object.assign({}, defaults, o);
    if (win.dataset.genieMode) cfg.mode = win.dataset.genieMode;
    if (!DURATIONS[cfg.mode]) cfg.mode = 'genie';
    var d = DURATIONS[cfg.mode];
    cfg.openMs = o.openDuration != null ? o.openDuration : d[0];
    cfg.closeMs = o.closeDuration != null ? o.closeDuration : d[1];
    cfg.openEase = cfg.openEasing || o.easing ||
      (cfg.mode === 'genie' ? 'cubic-bezier(.22, 1, .36, 1)' : springEasing(cfg.spring));
    cfg.closeEase = cfg.closeEasing;
    return cfg;
  }

  // ---- Inti ----
  function play(win, s, closing) {
    var cfg = s.cfg;
    var frames = buildFrames(win, s.trigger, cfg.mode);
    if (closing) frames = reverseFrames(frames);
    var anim = win.animate(frames, {
      duration: closing ? cfg.closeMs : cfg.openMs,
      easing: closing ? cfg.closeEase : cfg.openEase,
      fill: 'both'
    });
    s.anim = anim;
    s.dir = closing ? 'close' : 'open';
    anim.onfinish = function () {
      anim.cancel();
      s.anim = null;
      win.style.transformOrigin = '';
      if (!s.open) hide(win, s);
      if (s.dir === 'open' && typeof cfg.onOpen === 'function') cfg.onOpen(win);
      if (s.dir === 'close' && typeof cfg.onClose === 'function') cfg.onClose(win);
      if (typeof cfg.onFinish === 'function') cfg.onFinish(win, s.dir);
    };
  }

  function hide(win, s) {
    win.classList.remove('is-open');
    var i = stack.indexOf(win);
    if (i > -1) stack.splice(i, 1);
    if (s.trigger && s.trigger.focus) s.trigger.focus({ preventScroll: true });
  }

  function open(win, trigger, options) {
    win = $(win); trigger = $(trigger);
    if (!win) return;
    var s = stateOf(win);
    if (trigger) {
      s.trigger = trigger;
      // Capture undisturbed trigger bounding rect
      var r = trigger.getBoundingClientRect();
      if (r && (r.width > 0 || r.height > 0)) {
        s.triggerRect = r;
      }
    }
    s.cfg = resolveConfig(win, options);
    s.open = true;

    win.style.zIndex = ++zCounter;
    win.removeAttribute('inert');
    win.setAttribute('aria-hidden', 'false');
    if (!win.hasAttribute('tabindex')) win.setAttribute('tabindex', '-1');
    var i = stack.indexOf(win); if (i > -1) stack.splice(i, 1); stack.push(win);

    if (s.anim) { // sedang menutup: balik arah dari posisi sekarang
      s.anim.updatePlaybackRate(s.dir === 'open' ? 1 : -1);
      s.anim.play();
      return;
    }
    win.classList.add('is-open');
    win.focus({ preventScroll: true });
    if (reduced() || !s.trigger || !win.animate) return;
    play(win, s, false);
  }

  function close(win) {
    win = $(win);
    if (!win) return;
    var s = stateOf(win);
    if (!s.open) return;
    s.open = false;
    win.setAttribute('aria-hidden', 'true');
    win.setAttribute('inert', '');

    if (reduced() || !s.trigger || !win.animate) {
      if (s.anim) { s.anim.cancel(); s.anim = null; }
      win.style.transformOrigin = '';
      hide(win, s);
      return;
    }
    if (s.anim) { // sedang membuka: balik arah
      s.anim.updatePlaybackRate(s.dir === 'close' ? 1 : -1);
      s.anim.play();
      return;
    }
    play(win, s, true);
  }

  function toggle(win, trigger, options) {
    win = $(win);
    if (!win) return;
    if (stateOf(win).open) close(win); else open(win, trigger, options);
  }

  // ---- Auto-init lewat atribut data-* ----
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-genie-toggle],[data-genie-open],[data-genie-close]');
    if (!el) return;
    if (el.hasAttribute('data-genie-close')) {
      var target = el.getAttribute('data-genie-close');
      close(target ? $(target) : el.closest('.genie-window'));
      return;
    }
    if (el.hasAttribute('data-genie-open')) {
      open($(el.getAttribute('data-genie-open')), el);
      return;
    }
    toggle($(el.getAttribute('data-genie-toggle')), el);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && stack.length) close(stack[stack.length - 1]);
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.genie-window').forEach(function (w) {
      w.setAttribute('aria-hidden', 'true');
      w.setAttribute('inert', '');
    });
  });

  global.Genie = { open: open, close: close, toggle: toggle, defaults: defaults };
})(window);
