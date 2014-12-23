var e;
var aa = aa || {}, t = this,
    ba = function(a) {
        return void 0 !== a
    }, v = function(a, b, c) {
        a = a.split(".");
        c = c || t;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)!a.length && ba(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
    }, da = function(a, b) {
        for (var c = a.split("."), d = b || t, f; f = c.shift();)
            if (null != d[f]) d = d[f];
            else return null;
        return d
    }, fa = function() {}, ga = function(a) {
        a.getInstance = function() {
            return a.instance_ ? a.instance_ : a.instance_ = new a
        }
    }, ha = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
            else if ("function" == b && "undefined" ==
            typeof a.call) return "object";
        return b
    }, ka = function(a) {
        return "array" == ha(a)
    }, la = function(a) {
        var b = ha(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, w = function(a) {
        return "string" == typeof a
    }, ma = function(a) {
        return "number" == typeof a
    }, na = function(a) {
        return "function" == ha(a)
    }, pa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, ua = function(a) {
        return a[ra] || (a[ra] = ++sa)
    }, ra = "closure_uid_" + (1E9 * Math.random() >>> 0),
    sa = 0,
    va = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    wa = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }, x = function(a, b, c) {
        x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va : wa;
        return x.apply(null, arguments)
    }, za = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b =
                c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, Aa = Date.now || function() {
        return +new Date
    }, Ba = function(a, b, c) {
        a[b] = c
    }, z = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.superClass_ = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.base = function(a, c, g) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    };
Function.prototype.bind = Function.prototype.bind || function(a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return x.apply(null, c)
    }
    return x(this, a)
};
Function.prototype.inherits = function(a) {
    z(this, a)
};
var Ca = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
z(Ca, Error);
Ca.prototype.name = "CustomError";
var Da;
var Ea = function(a, b) {
    for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;) d += c.shift() + f.shift();
    return d + c.join("%s")
}, Fa = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }, Ga = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }, Ha = function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, Ia = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }, Ja = function(a, b) {
        return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
    }, Ra = function(a,
        b) {
        if (b) return a.replace(Ka, "&amp;").replace(La, "&lt;").replace(Na, "&gt;").replace(Oa, "&quot;").replace(Pa, "&#39;");
        if (!Qa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ka, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(La, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Na, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;"));
        return a
    }, Ka = /&/g,
    La = /</g,
    Na = />/g,
    Oa = /"/g,
    Pa = /'/g,
    Qa = /[&<>"']/,
    Ta = function(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        },
            d;
        d = b ? b.createElement("div") : document.createElement("div");
        return a.replace(Sa, function(a, b) {
            var h = c[a];
            if (h) return h;
            if ("#" == b.charAt(0)) {
                var k = Number("0" + b.substr(1));
                isNaN(k) || (h = String.fromCharCode(k))
            }
            h || (d.innerHTML = a + " ", h = d.firstChild.nodeValue.slice(0, -1));
            return c[a] = h
        })
    }, Wa = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" == c.charAt(0)) {
                        var d = Number("0" + c.substr(1));
                        if (!isNaN(d)) return String.fromCharCode(d)
                    }
                    return a
            }
        })
    },
    Sa = /&([^;\s<&]+);?/g,
    Ya = function(a, b) {
        return -1 != a.indexOf(b)
    }, Za = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, $a = function(a, b) {
        return Array(b + 1).join(a)
    }, ab = function(a, b, c) {
        a = ba(c) ? a.toFixed(c) : String(a);
        c = a.indexOf("."); - 1 == c && (c = a.length);
        return $a("0", Math.max(0, b - c)) + a
    }, bb = function(a) {
        return null == a ? "" : String(a)
    }, cb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }, db = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    },
    gb = function(a, b) {
        var c = w(b) ? Za(b) : "\\s";
        return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
            return b + c.toUpperCase()
        })
    };
var hb = function(a, b) {
    b.unshift(a);
    Ca.call(this, Ea.apply(null, b));
    b.shift()
};
z(hb, Ca);
hb.prototype.name = "AssertionError";
var ib = function(a, b, c, d) {
    var f = "Assertion failed";
    if (c) var f = f + (": " + c),
    g = d;
    else a && (f += ": " + a, g = b);
    throw new hb("" + f, g || []);
}, B = function(a, b, c) {
        a || ib("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    }, jb = function(a, b) {
        throw new hb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }, kb = function(a, b, c) {
        w(a) || ib("Expected string but got %s: %s.", [ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, lb = function(a, b, c) {
        pa(a) || ib("Expected object but got %s: %s.", [ha(a),
            a
        ], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, mb = function(a, b, c) {
        pa(a) && 1 == a.nodeType || ib("Expected Element but got %s: %s.", [ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, nb = function(a, b, c, d) {
        a instanceof b || ib("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3));
        return a
    };
var ob = Array.prototype,
    pb = ob.indexOf ? function(a, b, c) {
        B(null != a.length);
        return ob.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (w(a)) return w(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }, D = ob.forEach ? function(a, b, c) {
        B(null != a.length);
        ob.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, f = w(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
    }, qb = ob.filter ? function(a, b, c) {
        B(null != a.length);
        return ob.filter.call(a,
            b, c)
    } : function(a, b, c) {
        for (var d = a.length, f = [], g = 0, h = w(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var m = h[k];
                b.call(c, m, k, a) && (f[g++] = m)
            }
        return f
    }, rb = ob.map ? function(a, b, c) {
        B(null != a.length);
        return ob.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (f[h] = b.call(c, g[h], h, a));
        return f
    }, sb = ob.some ? function(a, b, c) {
        B(null != a.length);
        return ob.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, f = w(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in f && b.call(c, f[g],
                g, a)) return !0;
        return !1
    }, vb = ob.every ? function(a, b, c) {
        B(null != a.length);
        return ob.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, f = w(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in f && !b.call(c, f[g], g, a)) return !1;
        return !0
    }, wb = function(a, b, c) {
        t: {
            for (var d = a.length, f = w(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in f && b.call(c, f[g], g, a)) {
                    b = g;
                    break t
                }
            b = -1
        }
        return 0 > b ? null : w(a) ? a.charAt(b) : a[b]
    }, xb = function(a, b) {
        return 0 <= pb(a, b)
    }, zb = function(a, b) {
        var c = pb(a, b),
            d;
        (d = 0 <= c) && yb(a, c);
        return d
    }, yb = function(a, b) {
        B(null != a.length);
        return 1 == ob.splice.call(a, b, 1).length
    }, Ab = function(a) {
        return ob.concat.apply(ob, arguments)
    }, Bb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }, Fb = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                f;
            if (ka(d) || (f = la(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
            else if (f)
                for (var g = a.length, h = d.length, k = 0; k < h; k++) a[g + k] = d[k];
            else a.push(d)
        }
    }, Hb = function(a, b, c, d) {
        B(null != a.length);
        return ob.splice.apply(a, Gb(arguments,
            1))
    }, Gb = function(a, b, c) {
        B(null != a.length);
        return 2 >= arguments.length ? ob.slice.call(a, b) : ob.slice.call(a, b, c)
    };
var Ib = function(a) {
    Ib[" "](a);
    return a
};
Ib[" "] = fa;
var Jb;
t: {
    var Kb = t.navigator;
    if (Kb) {
        var Lb = Kb.userAgent;
        if (Lb) {
            Jb = Lb;
            break t
        }
    }
    Jb = ""
};
var Mb, Nb, Ob, Pb = function() {
        return t.navigator || null
    }, Qb = Ya(Jb, "Opera") || Ya(Jb, "OPR"),
    E = Ya(Jb, "Trident") || Ya(Jb, "MSIE"),
    J = Ya(Jb, "Gecko") && !Ya(Jb.toLowerCase(), "webkit") && !(Ya(Jb, "Trident") || Ya(Jb, "MSIE")),
    K = Ya(Jb.toLowerCase(), "webkit"),
    Rb = K && Ya(Jb, "Mobile"),
    Sb = Pb(),
    Tb = Sb && Sb.platform || "";
Mb = Ya(Tb, "Mac");
Nb = Ya(Tb, "Win");
Ob = Ya(Tb, "Linux");
var Ub = !! Pb() && Ya(Pb().appVersion || "", "X11"),
    Vb = function() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }, Xb = function() {
        var a = "",
            b;
        if (Qb && t.opera) return a = t.opera.version, na(a) ? a() : a;
        J ? b = /rv\:([^\);]+)(\)|;)/ : E ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : K && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(Jb)) ? a[1] : "");
        return E && (b = Vb(), b > parseFloat(a)) ? String(b) : a
    }(),
    Yb = {}, Zb = function(a) {
        var b;
        if (!(b = Yb[a])) {
            b = 0;
            for (var c = Ha(String(Xb)).split("."), d = Ha(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b &&
                g < f; g++) {
                var h = c[g] || "",
                    k = d[g] || "",
                    m = RegExp("(\\d*)(\\D*)", "g"),
                    p = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var l = m.exec(h) || ["", "", ""],
                        n = p.exec(k) || ["", "", ""];
                    if (0 == l[0].length && 0 == n[0].length) break;
                    b = cb(0 == l[1].length ? 0 : parseInt(l[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || cb(0 == l[2].length, 0 == n[2].length) || cb(l[2], n[2])
                } while (0 == b)
            }
            b = Yb[a] = 0 <= b
        }
        return b
    }, ac = function(a) {
        return E && $b >= a
    }, bc = t.document,
    $b = bc && E ? Vb() || ("CSS1Compat" == bc.compatMode ? parseInt(Xb, 10) : 5) : void 0;
var cc = !E || ac(9),
    dc = !E || ac(9),
    ec = E && !Zb("9");
!K || Zb("528");
J && Zb("1.9b") || E && Zb("8") || Qb && Zb("9.5") || K && Zb("528");
J && !Zb("8") || E && Zb("9");
var fc = function() {};
e = fc.prototype;
e.disposed_ = !1;
e.isDisposed = function() {
    return this.disposed_
};
e.dispose = function() {
    this.disposed_ || (this.disposed_ = !0, this.disposeInternal())
};
e.registerDisposable = function(a) {
    this.addOnDisposeCallback(za(gc, a))
};
e.addOnDisposeCallback = function(a, b) {
    this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []);
    this.onDisposeCallbacks_.push(x(a, b))
};
e.disposeInternal = function() {
    if (this.onDisposeCallbacks_)
        for (; this.onDisposeCallbacks_.length;) this.onDisposeCallbacks_.shift()()
};
var gc = function(a) {
    a && "function" == typeof a.dispose && a.dispose()
}, hc = function(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            la(d) ? hc.apply(null, d) : gc(d)
        }
    };
var L = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.propagationStopped_ = !1;
    this.returnValue_ = !0
};
L.prototype.disposeInternal = function() {};
L.prototype.dispose = function() {};
L.prototype.stopPropagation = function() {
    this.propagationStopped_ = !0
};
L.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.returnValue_ = !1
};
var ic = function(a) {
    a.preventDefault()
};
var jc = E ? "focusin" : "DOMFocusIn",
    kc = E ? "focusout" : "DOMFocusOut";
var lc = function(a, b) {
    L.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.platformModifierKey = !1;
    this.event_ = null;
    a && this.init(a, b)
};
z(lc, L);
var mc = [1, 4, 2];
e = lc.prototype;
e.init = function(a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (J) {
            var f;
            t: {
                try {
                    Ib(d.nodeName);
                    f = !0;
                    break t
                } catch (g) {}
                f = !1
            }
            f || (d = null)
        }
    } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = K || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = K || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX =
        a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.platformModifierKey = Mb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.event_ = a;
    a.defaultPrevented && this.preventDefault()
};
e.isButton = function(a) {
    return cc ? this.event_.button == a : "click" == this.type ? 0 == a : !! (this.event_.button & mc[a])
};
e.isMouseActionButton = function() {
    return this.isButton(0) && !(K && Mb && this.ctrlKey)
};
e.stopPropagation = function() {
    lc.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
};
e.preventDefault = function() {
    lc.superClass_.preventDefault.call(this);
    var a = this.event_;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, ec) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
e.getBrowserEvent = function() {
    return this.event_
};
e.disposeInternal = function() {};
var nc = "closure_listenable_" + (1E6 * Math.random() | 0),
    oc = function(a) {
        try {
            return !(!a || !a[nc])
        } catch (b) {
            return !1
        }
    }, pc = 0;
var qc = function(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}, rc = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }, sc = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }, tc = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }, uc = function(a) {
        for (var b in a) return !1;
        return !0
    }, vc = function(a, b) {
        var c;
        (c = b in a) && delete a[b];
        return c
    }, wc = function(a, b, c) {
        if (b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }, xc = function(a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    },
    yc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    zc = function(a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < yc.length; g++) c = yc[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, Ac = function(a) {
        var b = arguments.length;
        if (1 == b && ka(arguments[0])) return Ac.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    }, Bc = function(a) {
        var b = arguments.length;
        if (1 == b && ka(arguments[0])) return Bc.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
var Cc = function(a, b, c, d, f, g) {
    this.listener = a;
    this.proxy = b;
    this.src = c;
    this.type = d;
    this.capture = !! f;
    this.handler = g;
    this.key = ++pc;
    this.removed = this.callOnce = !1
};
Cc.prototype.markAsRemoved = function() {
    this.removed = !0;
    this.handler = this.src = this.proxy = this.listener = null
};
var Dc = function(a) {
    this.src = a;
    this.listeners = {};
    this.typeCount_ = 0
};
e = Dc.prototype;
e.getTypeCount = function() {
    return this.typeCount_
};
e.add = function(a, b, c, d, f) {
    var g = a.toString();
    a = this.listeners[g];
    a || (a = this.listeners[g] = [], this.typeCount_++);
    var h = Ec(a, b, d, f); - 1 < h ? (b = a[h], c || (b.callOnce = !1)) : (b = new Cc(b, null, this.src, g, !! d, f), b.callOnce = c, a.push(b));
    return b
};
e.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.listeners)) return !1;
    var f = this.listeners[a];
    b = Ec(f, b, c, d);
    return -1 < b ? (f[b].markAsRemoved(), yb(f, b), 0 == f.length && (delete this.listeners[a], this.typeCount_--), !0) : !1
};
e.removeByKey = function(a) {
    var b = a.type;
    if (!(b in this.listeners)) return !1;
    var c = zb(this.listeners[b], a);
    c && (a.markAsRemoved(), 0 == this.listeners[b].length && (delete this.listeners[b], this.typeCount_--));
    return c
};
e.removeAll = function(a) {
    a = a && a.toString();
    var b = 0,
        c;
    for (c in this.listeners)
        if (!a || c == a) {
            for (var d = this.listeners[c], f = 0; f < d.length; f++)++b, d[f].markAsRemoved();
            delete this.listeners[c];
            this.typeCount_--
        }
    return b
};
e.getListeners = function(a, b) {
    var c = this.listeners[a.toString()],
        d = [];
    if (c)
        for (var f = 0; f < c.length; ++f) {
            var g = c[f];
            g.capture == b && d.push(g)
        }
    return d
};
e.getListener = function(a, b, c, d) {
    a = this.listeners[a.toString()];
    var f = -1;
    a && (f = Ec(a, b, c, d));
    return -1 < f ? a[f] : null
};
var Ec = function(a, b, c, d) {
    for (var f = 0; f < a.length; ++f) {
        var g = a[f];
        if (!g.removed && g.listener == b && g.capture == !! c && g.handler == d) return f
    }
    return -1
};
var Fc = "closure_lm_" + (1E6 * Math.random() | 0),
    Hc = {}, Ic = 0,
    N = function(a, b, c, d, f) {
        if (ka(b)) {
            for (var g = 0; g < b.length; g++) N(a, b[g], c, d, f);
            return null
        }
        c = Jc(c);
        return oc(a) ? a.listen(b, c, d, f) : Kc(a, b, c, !1, d, f)
    }, Kc = function(a, b, c, d, f, g) {
        if (!b) throw Error("Invalid event type");
        var h = !! f,
            k = Lc(a);
    	k || a!=null?(a[Fc] = k = new Dc(a)):0;
    	if (k==null)
    		return null;
        c = k.add(b, c, d, f, g);
        if (c.proxy) return c;
        d = Mc();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a!=null)
        	a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Nc(b.toString()), d);
        Ic++;
        return c
    }, Mc = function() {
        var a =
            Oc,
            b = dc ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }, Pc = function(a, b, c, d, f) {
        if (ka(b)) {
            for (var g = 0; g < b.length; g++) Pc(a, b[g], c, d, f);
            return null
        }
        c = Jc(c);
        return oc(a) ? a.listenOnce(b, c, d, f) : Kc(a, b, c, !0, d, f)
    }, Qc = function(a, b, c, d, f) {
        if (ka(b)) {
            for (var g = 0; g < b.length; g++) Qc(a, b[g], c, d, f);
            return null
        }
        c = Jc(c);
        if (oc(a)) return a.unlisten(b, c, d, f);
        if (!a) return !1;
        if (a = Lc(a))
            if (b = a.getListener(b, c, !! d, f)) return Rc(b);
        return !1
    }, Rc = function(a) {
        if (ma(a) || !a || a.removed) return !1;
        var b = a.src;
        if (oc(b)) return b.unlistenByKey(a);
        var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Nc(c), d);
        Ic--;
        (c = Lc(b)) ? (c.removeByKey(a), 0 == c.getTypeCount() && (c.src = null, b[Fc] = null)) : a.markAsRemoved();
        return !0
    }, Nc = function(a) {
        return a in Hc ? Hc[a] : Hc[a] = "on" + a
    }, Tc = function(a, b, c, d) {
        var f = 1;
        if (a = Lc(a))
            if (b = a.listeners[b.toString()])
                for (b = Bb(b), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.removed && (f &= !1 !== Sc(g,
                        d))
                }
            return Boolean(f)
    }, Sc = function(a, b) {
        var c = a.listener,
            d = a.handler || a.src;
        a.callOnce && Rc(a);
        return c.call(d, b)
    }, Uc = function(a, b) {
        B(oc(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
        return a.dispatchEvent(b)
    }, Oc = function(a, b) {
        if (a.removed) return !0;
        if (!dc) {
            var c = b || da("window.event"),
                d = new lc(c, this),
                f = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                t: {
                    var g = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break t
                    } catch (h) {
                        g = !0
                    }
                    if (g || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (g = d.currentTarget; g; g = g.parentNode) c.push(g);
                for (var g = a.type, k = c.length - 1; !d.propagationStopped_ && 0 <= k; k--) d.currentTarget = c[k], f &= Tc(c[k], g, !0, d);
                for (k = 0; !d.propagationStopped_ && k < c.length; k++) d.currentTarget = c[k], f &= Tc(c[k], g, !1, d)
            }
            return f
        }
        return Sc(a, new lc(b, this))
    }, Lc = function(a) {
    	if (a==null)
    		return null;
        a = a[Fc];
        return a instanceof Dc ? a : null
    }, Vc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    Jc = function(a) {
        B(a, "Listener can not be null.");
        if (na(a)) return a;
        B(a.handleEvent, "An object listener must have handleEvent method.");
        return a[Vc] || (a[Vc] = function(b) {
            return a.handleEvent(b)
        })
    };
var Wc = function(a) {
    return function() {
        return a
    }
}(null);
var Xc = function(a, b, c) {
    return Math.min(Math.max(a, b), c)
};
var P = function(a, b) {
    this.x = ba(a) ? a : 0;
    this.y = ba(b) ? b : 0
};
P.prototype.clone = function() {
    return new P(this.x, this.y)
};
P.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
};
var Yc = function(a, b) {
    return new P(a.x - b.x, a.y - b.y)
};
P.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
P.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
P.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
P.prototype.scale = function(a, b) {
    var c = ma(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};
var Zc = function(a, b) {
    this.width = a;
    this.height = b
};
e = Zc.prototype;
e.clone = function() {
    return new Zc(this.width, this.height)
};
e.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
e.area = function() {
    return this.width * this.height
};
e.isEmpty = function() {
    return !this.area()
};
e.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
e.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
e.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
e.scale = function(a, b) {
    var c = ma(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
var $c = !E || ac(9),
    ad = !J && !E || E && ac(9) || J && Zb("1.9.1"),
    bd = E && !Zb("9"),
    cd = E || Qb || K;
var fd = function(a) {
	if (a!=null){
    a = a.className;
    return w(a) && a.match(/\S+/g) || []} else return []
}, gd = function(a, b) {
        for (var c = fd(a), d = Gb(arguments, 1), f = c.length + d.length, g = c, h = 0; h < d.length; h++) xb(g, d[h]) || g.push(d[h]);
        g = c.join(" ");
    if (a!=null)
        a.className = g;
        return c.length == f
    }, id = function(a, b) {
        var c = fd(a),
            d = Gb(arguments, 1),
            f = hd(c, d),
            g = f.join(" ");
      if (a!=null)  a.className = g;
        return f.length == c.length - d.length
    }, hd = function(a, b) {
        return qb(a, function(a) {
            return !xb(b, a)
        })
    };
var ld = function(a) {
    return a ? new jd(kd(a)) : Da || (Da = new jd)
}, Q = function(a) {
        return w(a) ? document.getElementById(a) : a
    }, nd = function(a, b, c) {
        return md(document, a, b, c)
    }, od = function(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : md(document, "*", a, b)
    }, pd = function(a, b) {
        var c = b || document,
            d = null;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : md(document, "*", a, b)[0]) || null
    }, md = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll &&
            a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var f = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[f++] = h);
                d.length = f;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = f = 0; h = a[g]; g++) b = h.className, "function" == typeof b.split && xb(b.split(/\s+/), c) && (d[f++] = h);
            d.length = f;
            return d
        }
        return a
    }, rd = function(a, b) {
        qc(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor =
                b : d in qd ? a.setAttribute(qd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, qd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }, sd = function(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Zc(a.clientWidth, a.clientHeight)
    }, td = function(a) {
        return K || "CSS1Compat" !=
            a.compatMode ? a.body || a.documentElement : a.documentElement
    }, ud = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }, wd = function(a, b, c) {
        return vd(document, arguments)
    }, vd = function(a, b) {
        var c = b[0],
            d = b[1];
        if (!$c && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Ra(d.name), '"');
            if (d.type) {
                c.push(' type="', Ra(d.type), '"');
                var f = {};
                zc(f, d);
                delete f.type;
                d = f
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (w(d) ? c.className = d : ka(d) ? gd.apply(null, [c].concat(d)) : rd(c, d));
        2 < b.length && xd(a, c, b, 2);
        return c
    }, xd = function(a, b, c, d) {
        function f(c) {
            c && b.appendChild(w(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var g = c[d];
            !la(g) || pa(g) && 0 < g.nodeType ? f(g) : D(yd(g) ? Bb(g) : g, f)
        }
    }, zd = function(a, b) {
        xd(kd(a), a, arguments, 1)
    }, Ad = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }, Bd = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }, Cd = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }, Dd = function(a) {
        return ad && void 0 != a.children ? a.children : qb(a.childNodes, function(a) {
            return 1 ==
                a.nodeType
        })
    }, Fd = function(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : Ed(a.firstChild, !0)
    }, Ed = function(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }, Gd = function(a) {
        return pa(a) && 1 == a.nodeType
    }, Hd = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }, kd = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument ||
            a.document
    }, Id = function(a) {
        return a.contentDocument || a.contentWindow.document
    }, Jd = function(a, b) {
        B(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else Ad(a), a.appendChild(kd(a).createTextNode(String(b)))
    }, Ld = function(a, b) {
        var c = [];
        Kd(a, b, c, !1);
        return c
    }, Kd = function(a, b, c, d) {
        if (null != a)
            for (a =
                a.firstChild; a;) {
                if (b(a) && (c.push(a), d) || Kd(a, b, c, d)) return !0;
                a = a.nextSibling
            }
        return !1
    }, Md = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }, Nd = {
        IMG: " ",
        BR: "\n"
    }, Od = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }, Pd = function(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }, Qd = function(a) {
        a = a.tabIndex;
        return ma(a) && 0 <= a && 32768 > a
    }, Sd = function(a) {
        if (bd && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Rd(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g,
            " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        bd || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }, Zd = function(a) {
        var b = [];
        Rd(a, b, !1);
        return b.join("")
    }, Rd = function(a, b, c) {
        if (!(a.nodeName in Md))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Nd) b.push(Nd[a.nodeName]);
        else
            for (a = a.firstChild; a;) Rd(a, b, c), a = a.nextSibling
    }, yd = function(a) {
        if (a && "number" == typeof a.length) {
            if (pa(a)) return "function" == typeof a.item ||
                "string" == typeof a.item;
            if (na(a)) return "function" == typeof a.item
        }
        return !1
    }, ae = function(a, b, c) {
        if (!b && !c) return null;
        var d = b ? b.toUpperCase() : null;
        return $d(a, function(a) {
            var b;
            if (b = !d || a.nodeName == d)(b = !c) || (b = xb(fd(a), c));
            return b
        }, !0)
    }, be = function(a, b) {
        return ae(a, null, b)
    }, $d = function(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var f = 0; a && (c || f <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            f++
        }
        return null
    }, jd = function(a) {
        this.document_ = a || t.document || document
    };
e = jd.prototype;
e.getDomHelper = ld;
e.getDocument = function() {
    return this.document_
};
e.getElement = function(a) {
    return w(a) ? this.document_.getElementById(a) : a
};
e.$ = jd.prototype.getElement;
e.getElementsByTagNameAndClass = function(a, b, c) {
    return md(this.document_, a, b, c)
};
e.getElementsByClass = function(a, b) {
    return od(a, b || this.document_)
};
e.getElementByClass = function(a, b) {
    return pd(a, b || this.document_)
};
e.getViewportSize = function(a) {
    return sd(a || this.getWindow() || window)
};
e.createDom = function(a, b, c) {
    return vd(this.document_, arguments)
};
e.createElement = function(a) {
    return this.document_.createElement(a)
};
e.createTextNode = function(a) {
    return this.document_.createTextNode(String(a))
};
e.htmlToDocumentFragment = function(a) {
    var b;
    var c = this.document_;
    b = c.createElement("div");
    E ? (b.innerHTML = "<br>" + a, b.removeChild(b.firstChild)) : b.innerHTML = a;
    if (1 == b.childNodes.length) b = b.removeChild(b.firstChild);
    else {
        for (a = c.createDocumentFragment(); b.firstChild;) a.appendChild(b.firstChild);
        b = a
    }
    return b
};
e.isCss1CompatMode = function() {
    return "CSS1Compat" == this.document_.compatMode
};
e.getWindow = function() {
    var a = this.document_;
    return a.parentWindow || a.defaultView
};
e.getDocumentScrollElement = function() {
    return td(this.document_)
};
e.getDocumentScroll = function() {
    var a = this.document_,
        b = td(a),
        a = a.parentWindow || a.defaultView;
    return E && Zb("10") && a.pageYOffset != b.scrollTop ? new P(b.scrollLeft, b.scrollTop) : new P(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
};
e.appendChild = function(a, b) {
    a.appendChild(b)
};
e.append = zd;
e.removeChildren = Ad;
e.insertSiblingBefore = Bd;
e.removeNode = Cd;
e.getChildren = Dd;
e.getFirstElementChild = Fd;
e.isElement = Gd;
e.contains = Hd;
e.isFocusable = function(a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Pd(a) || Qd(a)) : Pd(a) && Qd(a)) && E ? (a = na(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
        height: a.offsetHeight,
        width: a.offsetWidth
    }, a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
};
var ce = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
e = ce.prototype;
e.clone = function() {
    return new ce(this.top, this.right, this.bottom, this.left)
};
e.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
e.contains = function(a) {
    return this && a ? a instanceof ce ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
e.expand = function(a, b, c, d) {
    pa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
};
e.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
e.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
e.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
e.scale = function(a, b) {
    var c = ma(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};
var de = function() {
    return K ? "Webkit" : J ? "Moz" : E ? "ms" : Qb ? "O" : null
}, ee = function() {
        return K ? "-webkit" : J ? "-moz" : E ? "-ms" : Qb ? "-o" : null
    };
var fe = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
e = fe.prototype;
e.clone = function() {
    return new fe(this.left, this.top, this.width, this.height)
};
e.toBox = function() {
    return new ce(this.top, this.left + this.width, this.top + this.height, this.left)
};
e.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
e.intersection = function(a) {
    var b = Math.max(this.left, a.left),
        c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
        var d = Math.max(this.top, a.top);
        a = Math.min(this.top + this.height, a.top + a.height);
        if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0
    }
    return !1
};
e.contains = function(a) {
    return a instanceof fe ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
e.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
e.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
e.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
e.scale = function(a, b) {
    var c = ma(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
var he = function(a, b, c) {
    w(b) ? ge(a, c, b) : qc(b, za(ge, a))
}, ge = function(a, b, c) {
        (c = ie(a, c)) && (a.style[c] = b)
    }, ie = function(a, b) {
        var c = db(b);
        if (void 0 === a.style[c]) {
            var d = de() + gb(b);
            if (void 0 !== a.style[d]) return d
        }
        return c
    }, je = function(a, b) {
        var c = kd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }, ke = function(a, b) {
        return je(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }, le = function(a) {
        return ke(a, "position")
    },
    ne = function(a, b, c) {
        var d, f = J && (Mb || Ub) && Zb("1.9");
        b instanceof P ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = me(d, f);
        a.style.top = me(b, f)
    }, oe = function(a) {
        a = a ? kd(a) : document;
        return !E || ac(9) || ld(a).isCss1CompatMode() ? a.documentElement : a.body
    }, pe = function(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        E && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }, qe = function(a) {
        if (E && !ac(8)) return a.offsetParent;
        var b = kd(a),
            c = ke(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = ke(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }, te = function(a) {
        for (var b = new ce(0, Infinity, Infinity, 0), c = ld(a), d = c.getDocument().body, f = c.getDocument().documentElement, g = c.getDocumentScrollElement(); a = qe(a);)
            if (!(E && 0 ==
                a.clientWidth || K && 0 == a.clientHeight && a == d || a == d || a == f || "visible" == ke(a, "overflow"))) {
                var h = re(a),
                    k;
                k = a;
                if (J && !Zb("1.9")) {
                    var m = parseFloat(je(k, "borderLeftWidth"));
                    if (se(k)) var p = k.offsetWidth - k.clientWidth - m - parseFloat(je(k, "borderRightWidth")),
                    m = m + p;
                    k = new P(m, parseFloat(je(k, "borderTopWidth")))
                } else k = new P(k.clientLeft, k.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d =
            g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, g);
        c = c.getViewportSize();
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }, ve = function(a, b, c) {
        var d = re(a),
            f = re(b),
            g = ue(b),
            h = d.x - f.x - g.left,
            d = d.y - f.y - g.top,
            f = b.clientWidth - a.offsetWidth;
        a = b.clientHeight - a.offsetHeight;
        g = b.scrollLeft;
        b = b.scrollTop;
        c ? (g += h - f / 2, b += d - a / 2) : (g += Math.min(h, Math.max(h - f, 0)), b += Math.min(d, Math.max(d - a, 0)));
        return new P(g,
            b)
    }, re = function(a) {
        var b, c = kd(a),
            d = ke(a, "position");
        lb(a, "Parameter is required");
        var f = J && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            g = new P(0, 0),
            h = oe(c);
        if (a == h) return g;
        if (a.getBoundingClientRect) b = pe(a), a = ld(c).getDocumentScroll(), g.x = b.left + a.x, g.y = b.top + a.y;
        else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                g.x += b.offsetLeft;
                g.y += b.offsetTop;
                b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
                if (K && "fixed" == le(b)) {
                    g.x += c.body.scrollLeft;
                    g.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (Qb || K && "absolute" == d) g.y -= c.body.offsetTop;
            for (b = a;
                (b = qe(b)) && b != c.body && b != h;) g.x -= b.scrollLeft, Qb && "TR" == b.tagName || (g.y -= b.scrollTop)
        }
        return g
    }, xe = function(a, b) {
        var c = we(a),
            d = we(b);
        return new P(c.x - d.x, c.y - d.y)
    }, ze = function(a) {
        var b;
        if (a.getBoundingClientRect) b = pe(a), b = new P(b.left, b.top);
        else {
            b = ld(a).getDocumentScroll();
            var c = re(a);
            b = new P(c.x -
                b.x, c.y - b.y)
        } if (J && !Zb(12)) {
            i: {
                c = db("transform");
                if (void 0 === a.style[c] && (c = de() + gb("transform"), void 0 !== a.style[c])) {
                    c = ee() + "-transform";
                    break i
                }
                c = "transform"
            }
            a = (a = ke(a, c) || ke(a, "transform")) ? (a = a.match(ye)) ? new P(parseFloat(a[1]), parseFloat(a[2])) : new P(0, 0) : new P(0, 0);
            a = new P(b.x + a.x, b.y + a.y)
        } else a = b;
        return a
    }, we = function(a) {
        B(a);
        if (1 == a.nodeType) return ze(a);
        var b = na(a.getBrowserEvent),
            c = a;
        a.targetTouches ? c = a.targetTouches[0] : b && a.getBrowserEvent().targetTouches && (c = a.getBrowserEvent().targetTouches[0]);
        return new P(c.clientX, c.clientY)
    }, Be = function(a, b, c) {
        if (b instanceof Zc) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        Ae(a, b);
        a.style.height = me(c, !0)
    }, me = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }, Ae = function(a, b) {
        a.style.width = me(b, !0)
    }, De = function(a) {
        var b;
        var c = Ce;
        if ("none" != ke(a, "display")) b = c(a);
        else {
            b = a.style;
            var d = b.display,
                f = b.visibility,
                g = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = c(a);
            b.display =
                d;
            b.position = g;
            b.visibility = f;
            b = a
        }
        return b
    }, Ce = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = K && !b && !c;
        return ba(b) && !d || !a.getBoundingClientRect ? new Zc(b, c) : (a = pe(a), new Zc(a.right - a.left, a.bottom - a.top))
    }, Ee = function(a) {
        var b = re(a);
        a = De(a);
        return new fe(b.x, b.y, a.width, a.height)
    }, Fe = function(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    }, S = function(a, b) {
    	if (a!=null)
        a.style.display = b ? "" : "none"
    }, se = function(a) {
        return "rtl" ==
            ke(a, "direction")
    }, Ge = J ? "MozUserSelect" : K ? "WebkitUserSelect" : null,
    He = function(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (Ge) {
            if (b = b ? "none" : "", a.style[Ge] = b, c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style[Ge] = b
            }
        } else if (E || Qb)
            if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    }, Ie = function(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var f = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = f;
        a.runtimeStyle[c] =
            g;
        return b
    }, Je = function(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? Ie(a, c, "left", "pixelLeft") : 0
    }, Ke = function(a, b) {
        if (E) {
            var c = Je(a, b + "Left"),
                d = Je(a, b + "Right"),
                f = Je(a, b + "Top"),
                g = Je(a, b + "Bottom");
            return new ce(f, d, g, c)
        }
        c = je(a, b + "Left");
        d = je(a, b + "Right");
        f = je(a, b + "Top");
        g = je(a, b + "Bottom");
        return new ce(parseFloat(f), parseFloat(d), parseFloat(g), parseFloat(c))
    }, Le = function(a) {
        return Ke(a, "padding")
    }, Me = {
        thin: 2,
        medium: 4,
        thick: 6
    }, Ne = function(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b +
            "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in Me ? Me[c] : Ie(a, c, "left", "pixelLeft")
    }, ue = function(a) {
        if (E && !ac(9)) {
            var b = Ne(a, "borderLeft"),
                c = Ne(a, "borderRight"),
                d = Ne(a, "borderTop");
            a = Ne(a, "borderBottom");
            return new ce(d, c, a, b)
        }
        b = je(a, "borderLeftWidth");
        c = je(a, "borderRightWidth");
        d = je(a, "borderTopWidth");
        a = je(a, "borderBottomWidth");
        return new ce(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    }, ye = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
var Oe = function(a) {
    var b = a.offsetLeft,
        c = a.offsetParent;
    c || "fixed" != le(a) || (c = kd(a).documentElement);
    if (!c) return b;
    if (J) var d = ue(c),
    b = b + d.left;
    else ac(8) && (d = ue(c), b -= d.left);
    return se(c) ? c.clientWidth - (b + a.offsetWidth) : b
};
var Se = function(a, b, c, d, f, g, h, k, m) {
    B(c);
    var p = Pe(c),
        l = Ee(a),
        n = te(a);
    n && l.intersection(new fe(n.left, n.top, n.right - n.left, n.bottom - n.top));
    var n = ld(a),
        s = ld(c);
    if (n.getDocument() != s.getDocument()) {
        var I = n.getDocument().body,
            s = s.getWindow(),
            F = new P(0, 0),
            qa = ud(kd(I)),
            r = I;
        do {
            var R = qa == s ? re(r) : ze(B(r));
            F.x += R.x;
            F.y += R.y
        } while (qa && qa != s && (r = qa.frameElement) && (qa = qa.parent));
        I = Yc(F, re(I));
        E && !n.isCss1CompatMode() && (I = Yc(I, n.getDocumentScroll()));
        l.left += I.x;
        l.top += I.y
    }
    a = Qe(a, b);
    l = new P(a & 2 ? l.left + l.width :
        l.left, a & 1 ? l.top + l.height : l.top);
    l = Yc(l, p);
    f && (l.x += (a & 2 ? -1 : 1) * f.x, l.y += (a & 1 ? -1 : 1) * f.y);
    var M;
    if (h)
        if (m) M = m;
        else if (M = te(c)) M.top -= p.y, M.right -= p.x, M.bottom -= p.y, M.left -= p.x;
    return Re(l, c, d, g, M, h, k)
}, Pe = function(a) {
        var b;
        if (a = a.offsetParent) {
            var c = "HTML" == a.tagName || "BODY" == a.tagName;
            c && "static" == le(a) || (b = re(a), c || (c = (c = se(a)) && J ? -a.scrollLeft : !c || E && Zb("8") || "visible" == ke(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = Yc(b, new P(c, a.scrollTop))))
        }
        return b || new P
    }, Re = function(a,
        b, c, d, f, g, h) {
        a = a.clone();
        var k = 0,
            m = Qe(b, c);
        c = De(b);
        h = h ? h.clone() : c.clone();
        if (d || 0 != m) m & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), m & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g && (f ? (k = a, d = 0, 65 == (g & 65) && (k.x < f.left || k.x >= f.right) && (g &= -2), 132 == (g & 132) && (k.y < f.top || k.y >= f.bottom) && (g &= -5), k.x < f.left && g & 1 && (k.x = f.left, d |= 1), k.x < f.left && k.x + h.width > f.right && g & 16 && (h.width = Math.max(h.width - (k.x + h.width - f.right), 0), d |= 4), k.x + h.width > f.right && g & 1 && (k.x = Math.max(f.right - h.width, f.left), d |= 1), g &
            2 && (d = d | (k.x < f.left ? 16 : 0) | (k.x + h.width > f.right ? 32 : 0)), k.y < f.top && g & 4 && (k.y = f.top, d |= 2), k.y <= f.top && k.y + h.height < f.bottom && g & 32 && (h.height = Math.max(h.height - (f.top - k.y), 0), k.y = f.top, d |= 8), k.y >= f.top && k.y + h.height > f.bottom && g & 32 && (h.height = Math.max(h.height - (k.y + h.height - f.bottom), 0), d |= 8), k.y + h.height > f.bottom && g & 4 && (k.y = Math.max(f.bottom - h.height, f.top), d |= 2), g & 8 && (d = d | (k.y < f.top ? 64 : 0) | (k.y + h.height > f.bottom ? 128 : 0)), k = d) : k = 256, k & 496)) return k;
        ne(b, a);
        c == h || c && h && c.width == h.width && c.height == h.height ||
            (f = ld(kd(b)).isCss1CompatMode(), !E || f && Zb("8") ? (b = b.style, J ? b.MozBoxSizing = "border-box" : K ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(h.width, 0) + "px", b.height = Math.max(h.height, 0) + "px") : (a = b.style, f ? (f = Le(b), b = ue(b), a.pixelWidth = h.width - b.left - f.left - f.right - b.right, a.pixelHeight = h.height - b.top - f.top - f.bottom - b.bottom) : (a.pixelWidth = h.width, a.pixelHeight = h.height)));
        return k
    }, Qe = function(a, b) {
        return (b & 4 && se(a) ? b ^ 2 : b) & -5
    };
var Te = function() {};
Te.prototype.reposition = function() {};
var Ue = function(a, b, c) {
    this.element = a;
    this.corner = b;
    this.overflow_ = c
};
z(Ue, Te);
Ue.prototype.reposition = function(a, b, c) {
    Se(this.element, this.corner, a, b, void 0, c, this.overflow_)
};
var Ve = function(a, b, c, d) {
    Ue.call(this, a, b);
    this.lastResortOverflow_ = c ? 5 : 0;
    this.overflowConstraint_ = d || void 0
};
z(Ve, Ue);
Ve.prototype.getLastResortOverflow = function() {
    return this.lastResortOverflow_
};
Ve.prototype.setLastResortOverflow = function(a) {
    this.lastResortOverflow_ = a
};
Ve.prototype.reposition = function(a, b, c, d) {
    var f = Se(this.element, this.corner, a, b, null, c, 10, d, this.overflowConstraint_);
    if (f & 496) {
        var g = this.adjustCorner(f, this.corner);
        b = this.adjustCorner(f, b);
        f = Se(this.element, g, a, b, null, c, 10, d, this.overflowConstraint_);
        f & 496 && (g = this.adjustCorner(f, g), b = this.adjustCorner(f, b), Se(this.element, g, a, b, null, c, this.getLastResortOverflow(), d, this.overflowConstraint_))
    }
};
Ve.prototype.adjustCorner = function(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
};
var We = function(a, b) {
    this.coordinate = a instanceof P ? a : new P(a, b)
};
z(We, Te);
We.prototype.reposition = function(a, b, c, d) {
    B(a);
    var f;
    f = kd(a);
    var g = f.body;
    f = f.documentElement;
    f = new P(g.scrollLeft || f.scrollLeft, g.scrollTop || f.scrollTop);
    g = this.coordinate.x + f.x;
    f = this.coordinate.y + f.y;
    var h = Pe(a),
        g = g - h.x;
    f -= h.y;
    Re(new P(g, f), a, b, c, null, null, d)
};
var Xe = function(a, b) {
    We.call(this, a, b)
};
z(Xe, We);
Xe.prototype.lastResortOverflow_ = 0;
Xe.prototype.setLastResortOverflow = function(a) {
    this.lastResortOverflow_ = a
};
Xe.prototype.reposition = function(a, b, c, d) {
    var f = oe(a),
        f = te(f),
        g = ld(a).getDocumentScrollElement(),
        g = new P(this.coordinate.x + g.scrollLeft, this.coordinate.y + g.scrollTop),
        h = b,
        k = Re(g, a, h, c, f, 10, d);
    if (0 != (k & 496)) {
        if (k & 16 || k & 32) h ^= 2;
        if (k & 64 || k & 128) h ^= 1;
        k = Re(g, a, h, c, f, 10, d);
        0 != (k & 496) && Re(g, a, b, c, f, this.lastResortOverflow_, d)
    }
};
var Ye = function(a) {
    this.handler_ = a;
    this.keys_ = {}
};
z(Ye, fc);
var Ze = [];
e = Ye.prototype;
e.listen = function(a, b, c, d) {
    return this.listen_(a, b, c, d)
};
e.listenWithScope = function(a, b, c, d, f) {
    return this.listen_(a, b, c, d, f)
};
e.listen_ = function(a, b, c, d, f) {
    ka(b) || (b && (Ze[0] = b.toString()), b = Ze);
    for (var g = 0; g < b.length; g++) {
        var h = N(a, b[g], c || this.handleEvent, d || !1, f || this.handler_ || this);
        if (!h) break;
        this.keys_[h.key] = h
    }
    return this
};
e.listenOnce = function(a, b, c, d) {
    return this.listenOnce_(a, b, c, d)
};
e.listenOnce_ = function(a, b, c, d, f) {
    if (ka(b))
        for (var g = 0; g < b.length; g++) this.listenOnce_(a, b[g], c, d, f);
    else {
        a = Pc(a, b, c || this.handleEvent, d, f || this.handler_ || this);
        if (!a) return this;
        this.keys_[a.key] = a
    }
    return this
};
e.listenWithWrapper = function(a, b, c, d) {
    return this.listenWithWrapper_(a, b, c, d)
};
e.listenWithWrapper_ = function(a, b, c, d, f) {
    b.listen(a, c, d, f || this.handler_ || this, this);
    return this
};
e.unlisten = function(a, b, c, d, f) {
    if (ka(b))
        for (var g = 0; g < b.length; g++) this.unlisten(a, b[g], c, d, f);
    else c = c || this.handleEvent, f = f || this.handler_ || this, c = Jc(c), d = !! d, b = oc(a) ? a.getListener(b, c, d, f) : a ? (a = Lc(a)) ? a.getListener(b, c, d, f) : null : null, b && (Rc(b), delete this.keys_[b.key]);
    return this
};
e.removeAll = function() {
    qc(this.keys_, Rc);
    this.keys_ = {}
};
e.disposeInternal = function() {
    Ye.superClass_.disposeInternal.call(this);
    this.removeAll()
};
e.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
var U = function() {
    this.eventTargetListeners_ = new Dc(this);
    this.actualEventTarget_ = this
};
z(U, fc);
U.prototype[nc] = !0;
e = U.prototype;
e.parentEventTarget_ = null;
e.getParentEventTarget = function() {
    return this.parentEventTarget_
};
e.setParentEventTarget = function(a) {
    this.parentEventTarget_ = a
};
e.addEventListener = function(a, b, c, d) {
    N(this, a, b, c, d)
};
e.removeEventListener = function(a, b, c, d) {
    Qc(this, a, b, c, d)
};
e.dispatchEvent = function(a) {
    this.assertInitialized_();
    var b, c = this.getParentEventTarget();
    if (c) {
        b = [];
        for (var d = 1; c; c = c.getParentEventTarget()) b.push(c), B(1E3 > ++d, "infinite loop")
    }
    c = this.actualEventTarget_;
    d = a.type || a;
    if (w(a)) a = new L(a, c);
    else if (a instanceof L) a.target = a.target || c;
    else {
        var f = a;
        a = new L(d, c);
        zc(a, f)
    }
    var f = !0,
        g;
    if (b)
        for (var h = b.length - 1; !a.propagationStopped_ && 0 <= h; h--) g = a.currentTarget = b[h], f = g.fireListeners(d, !0, a) && f;
    a.propagationStopped_ || (g = a.currentTarget = c, f = g.fireListeners(d, !0, a) && f, a.propagationStopped_ || (f = g.fireListeners(d, !1, a) && f));
    if (b)
        for (h = 0; !a.propagationStopped_ && h < b.length; h++) g = a.currentTarget = b[h], f = g.fireListeners(d, !1, a) && f;
    return f
};
e.disposeInternal = function() {
    U.superClass_.disposeInternal.call(this);
    this.removeAllListeners();
    this.parentEventTarget_ = null
};
e.listen = function(a, b, c, d) {
    this.assertInitialized_();
    return this.eventTargetListeners_.add(String(a), b, !1, c, d)
};
e.listenOnce = function(a, b, c, d) {
    return this.eventTargetListeners_.add(String(a), b, !0, c, d)
};
e.unlisten = function(a, b, c, d) {
    return this.eventTargetListeners_.remove(String(a), b, c, d)
};
e.unlistenByKey = function(a) {
    return this.eventTargetListeners_.removeByKey(a)
};
e.removeAllListeners = function(a) {
    return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll(a) : 0
};
e.fireListeners = function(a, b, c) {
    a = this.eventTargetListeners_.listeners[String(a)];
    if (!a) return !0;
    a = Bb(a);
    for (var d = !0, f = 0; f < a.length; ++f) {
        var g = a[f];
        if (g && !g.removed && g.capture == b) {
            var h = g.listener,
                k = g.handler || g.src;
            g.callOnce && this.unlistenByKey(g);
            d = !1 !== h.call(k, c) && d
        }
    }
    return d && !1 != c.returnValue_
};
e.getListeners = function(a, b) {
    return this.eventTargetListeners_.getListeners(String(a), b)
};
e.getListener = function(a, b, c, d) {
    return this.eventTargetListeners_.getListener(String(a), b, c, d)
};
e.assertInitialized_ = function() {
    B(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var $e = function(a, b) {
    U.call(this);
    this.baseId_ = a;
    this.type = b;
    this.enableFireSelectEvent_ = !0
};
z($e, U);
var af = {
    CATEGORY: "cat",
    KEYWORD: "q",
    GEO: "geo",
    TIME: "date",
    PROPERTY: "gprop"
};
v("trends.Picker.PickerType", af, void 0);
af.CATEGORY = "cat";
af.KEYWORD = "q";
af.GEO = "geo";
af.TIME = "date";
af.PROPERTY = "gprop";
v("trends.Picker.COMPARISON_PICKER_TYPE", "cmpt", void 0);
v("trends.Picker.idToType", function(a) {
    for (var b in af)
        if (af[b] == a) return b;
    return null
}, void 0);
e = $e.prototype;
e.getValue = function() {
    throw "unimplemented";
};
e.setValue = function() {
    throw "unimplemented";
};
e.reset = function() {
    throw "unimplemented";
};
e.setLabel = function() {
    throw "unimplemented";
};
e.getId = function() {
    return this.baseId_
};
e.focus = function() {};
e.fireSelectEvent = function(a) {
    this.enableFireSelectEvent_ && Uc(this, new L("select", a))
};
e.enableFireSelectEvent = function(a) {
    this.enableFireSelectEvent_ = a
};
e.getElement = function() {
    return Q(this.baseId_)
};
var jf = function(a, b, c, d, f) {
    if (!(E || K && Zb("525"))) return !0;
    if (Mb && f) return gf(a);
    if (f && !d) return !1;
    ma(b) && (b = hf(b));
    if (!c && (17 == b || 18 == b || Mb && 91 == b)) return !1;
    if (K && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (E && d && b == a) return !1;
    switch (a) {
        case 13:
            return !(E && ac(9));
        case 27:
            return !K
    }
    return gf(a)
}, gf = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || K && 0 == a) return !0;
        switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }, hf = function(a) {
        if (J) a = kf(a);
        else if (Mb && K) t: switch (a) {
            case 93:
                a = 91;
                break t
        }
        return a
    }, kf = function(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
var lf = function(a, b) {
    U.call(this);
    this.interval_ = a || 1;
    this.timerObject_ = b || t;
    this.boundTick_ = x(this.tick_, this);
    this.last_ = Aa()
};
z(lf, U);
e = lf.prototype;
e.enabled = !1;
e.timer_ = null;
e.setInterval = function(a) {
    this.interval_ = a;
    this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop()
};
e.tick_ = function() {
    if (this.enabled) {
        var a = Aa() - this.last_;
        0 < a && a < 0.8 * this.interval_ ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = Aa()))
    }
};
e.dispatchTick = function() {
    this.dispatchEvent("tick")
};
e.start = function() {
    this.enabled = !0;
    this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = Aa())
};
e.stop = function() {
    this.enabled = !1;
    this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null)
};
e.disposeInternal = function() {
    lf.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.timerObject_
};
var X = function(a, b, c) {
    if (na(a)) c && (a = x(a, c));
    else if (a && "function" == typeof a.handleEvent) a = x(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : t.setTimeout(a, b || 0)
};
var mf = function(a, b) {
    U.call(this);
    this.handler_ = new Ye(this);
    this.setElement(a || null);
    b && this.setType(b)
};
z(mf, U);
e = mf.prototype;
e.element_ = null;
e.autoHide_ = !0;
e.autoHideRegion_ = null;
e.isVisible_ = !1;
e.shouldHideAsync_ = !1;
e.lastShowTime_ = -1;
e.lastHideTime_ = -1;
e.hideOnEscape_ = !1;
e.enableCrossIframeDismissal_ = !0;
e.type_ = "toggle_display";
e.getType = function() {
    return this.type_
};
e.setType = function(a) {
    this.type_ = a
};
e.getElement = function() {
    return this.element_
};
e.setElement = function(a) {
    this.ensureNotVisible_();
    this.element_ = a
};
e.setTransition = function(a, b) {
    this.showTransition_ = a;
    this.hideTransition_ = b
};
e.getHandler = function() {
    return this.handler_
};
e.ensureNotVisible_ = function() {
    if (this.isVisible_) throw Error("Can not change this state of the popup while showing.");
};
e.isVisible = function() {
    return this.isVisible_
};
e.isOrWasRecentlyVisible = function() {
    return this.isVisible_ || 150 > Aa() - this.lastHideTime_
};
e.setVisible = function(a) {
    this.showTransition_ && this.showTransition_.stop();
    this.hideTransition_ && this.hideTransition_.stop();
    a ? this.show_() : this.hide_()
};
e.reposition = fa;
e.show_ = function() {
    if (!this.isVisible_ && this.onBeforeShow()) {
        if (!this.element_) throw Error("Caller must call setElement before trying to show the popup");
        this.reposition();
        var a = kd(this.element_);
        this.hideOnEscape_ && this.handler_.listen(a, "keydown", this.onDocumentKeyDown_, !0);
        if (this.autoHide_)
            if (this.handler_.listen(a, "mousedown", this.onDocumentMouseDown_, !0), E) {
                var b;
                try {
                    b = a.activeElement
                } catch (c) {}
                for (; b && "IFRAME" == b.nodeName;) {
                    try {
                        var d = Id(b)
                    } catch (f) {
                        break
                    }
                    a = d;
                    b = a.activeElement
                }
                this.handler_.listen(a,
                    "mousedown", this.onDocumentMouseDown_, !0);
                this.handler_.listen(a, "deactivate", this.onDocumentBlur_)
            } else this.handler_.listen(a, "blur", this.onDocumentBlur_);
            "toggle_display" == this.type_ ? this.showPopupElement() : "move_offscreen" == this.type_ && this.reposition();
        this.isVisible_ = !0;
        this.lastShowTime_ = Aa();
        this.lastHideTime_ = -1;
        if (this.showTransition_) Pc(this.showTransition_, "end", this.onShow_, !1, this), this.showTransition_.play();
        else this.onShow_()
    }
};
e.hide_ = function(a) {
    if (!this.isVisible_ || !this.onBeforeHide_(a)) return !1;
    this.handler_ && this.handler_.removeAll();
    this.isVisible_ = !1;
    this.lastHideTime_ = Aa();
    this.hideTransition_ ? (Pc(this.hideTransition_, "end", za(this.continueHidingPopup_, a), !1, this), this.hideTransition_.play()) : this.continueHidingPopup_(a);
    return !0
};
e.continueHidingPopup_ = function(a) {
    "toggle_display" == this.type_ ? this.shouldHideAsync_ ? X(this.hidePopupElement, 0, this) : this.hidePopupElement() : "move_offscreen" == this.type_ && this.moveOffscreen_();
    this.onHide_(a)
};
e.showPopupElement = function() {
    this.element_.style.visibility = "visible";
    S(this.element_, !0)
};
e.hidePopupElement = function() {
    this.element_.style.visibility = "hidden";
    S(this.element_, !1)
};
e.moveOffscreen_ = function() {
    this.element_.style.top = "-10000px"
};
e.onBeforeShow = function() {
    return this.dispatchEvent("beforeshow")
};
e.onShow_ = function() {
    this.dispatchEvent("show")
};
e.onBeforeHide_ = function(a) {
    return this.dispatchEvent({
        type: "beforehide",
        target: a
    })
};
e.onHide_ = function(a) {
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
e.onDocumentMouseDown_ = function(a) {
    a = a.target;
    Hd(this.element_, a) || this.autoHideRegion_ && !Hd(this.autoHideRegion_, a) || this.shouldDebounce_() || this.hide_(a)
};
e.onDocumentKeyDown_ = function(a) {
    27 == a.keyCode && this.hide_(a.target) && (a.preventDefault(), a.stopPropagation())
};
e.onDocumentBlur_ = function(a) {
    if (this.enableCrossIframeDismissal_) {
        var b = kd(this.element_);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || Hd(this.element_, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        this.shouldDebounce_() || this.hide_()
    }
};
e.shouldDebounce_ = function() {
    return 150 > Aa() - this.lastShowTime_
};
e.disposeInternal = function() {
    mf.superClass_.disposeInternal.call(this);
    this.handler_.dispose();
    gc(this.showTransition_);
    gc(this.hideTransition_);
    delete this.element_;
    delete this.handler_
};
var nf = function(a, b) {
    this.popupCorner_ = 4;
    this.position_ = b || void 0;
    mf.call(this, a)
};
z(nf, mf);
nf.prototype.setPinnedCorner = function(a) {
    this.popupCorner_ = a;
    this.isVisible() && this.reposition()
};
nf.prototype.setPosition = function(a) {
    this.position_ = a || void 0;
    this.isVisible() && this.reposition()
};
nf.prototype.setMargin = function(a, b, c, d) {
    this.margin_ = null == a || a instanceof ce ? a : new ce(a, b, c, d);
    this.isVisible() && this.reposition()
};
nf.prototype.reposition = function() {
    if (this.position_) {
        var a = !this.isVisible() && "move_offscreen" != this.getType(),
            b = this.getElement();
        a && (b.style.visibility = "hidden", S(b, !0));
        this.position_.reposition(b, this.popupCorner_, this.margin_);
        a && S(b, !1)
    }
};
var of, pf = {
        ACTIVEDESCENDANT: "activedescendant",
        ATOMIC: "atomic",
        AUTOCOMPLETE: "autocomplete",
        BUSY: "busy",
        CHECKED: "checked",
        CONTROLS: "controls",
        DESCRIBEDBY: "describedby",
        DISABLED: "disabled",
        DROPEFFECT: "dropeffect",
        EXPANDED: "expanded",
        FLOWTO: "flowto",
        GRABBED: "grabbed",
        HASPOPUP: "haspopup",
        HIDDEN: "hidden",
        INVALID: "invalid",
        LABEL: "label",
        LABELLEDBY: "labelledby",
        LEVEL: "level",
        LIVE: "live",
        MULTILINE: "multiline",
        MULTISELECTABLE: "multiselectable",
        ORIENTATION: "orientation",
        OWNS: "owns",
        POSINSET: "posinset",
        PRESSED: "pressed",
        READONLY: "readonly",
        RELEVANT: "relevant",
        REQUIRED: "required",
        SELECTED: "selected",
        SETSIZE: "setsize",
        SORT: "sort",
        VALUEMAX: "valuemax",
        VALUEMIN: "valuemin",
        VALUENOW: "valuenow",
        VALUETEXT: "valuetext"
    };
var qf = {
    ALERT: "alert",
    ALERTDIALOG: "alertdialog",
    APPLICATION: "application",
    ARTICLE: "article",
    BANNER: "banner",
    BUTTON: "button",
    CHECKBOX: "checkbox",
    COLUMNHEADER: "columnheader",
    COMBOBOX: "combobox",
    COMPLEMENTARY: "complementary",
    CONTENTINFO: "contentinfo",
    DEFINITION: "definition",
    DIALOG: "dialog",
    DIRECTORY: "directory",
    DOCUMENT: "document",
    FORM: "form",
    GRID: "grid",
    GRIDCELL: "gridcell",
    GROUP: "group",
    HEADING: "heading",
    IMG: "img",
    LINK: "link",
    LIST: "list",
    LISTBOX: "listbox",
    LISTITEM: "listitem",
    LOG: "log",
    MAIN: "main",
    MARQUEE: "marquee",
    MATH: "math",
    MENU: "menu",
    MENUBAR: "menubar",
    MENU_ITEM: "menuitem",
    MENU_ITEM_CHECKBOX: "menuitemcheckbox",
    MENU_ITEM_RADIO: "menuitemradio",
    NAVIGATION: "navigation",
    NOTE: "note",
    OPTION: "option",
    PRESENTATION: "presentation",
    PROGRESSBAR: "progressbar",
    RADIO: "radio",
    RADIOGROUP: "radiogroup",
    REGION: "region",
    ROW: "row",
    ROWGROUP: "rowgroup",
    ROWHEADER: "rowheader",
    SCROLLBAR: "scrollbar",
    SEARCH: "search",
    SEPARATOR: "separator",
    SLIDER: "slider",
    SPINBUTTON: "spinbutton",
    STATUS: "status",
    TAB: "tab",
    TAB_LIST: "tablist",
    TAB_PANEL: "tabpanel",
    TEXTBOX: "textbox",
    TIMER: "timer",
    TOOLBAR: "toolbar",
    TOOLTIP: "tooltip",
    TREE: "tree",
    TREEGRID: "treegrid",
    TREEITEM: "treeitem"
};
var rf = function(a, b) {
    b ? (B(tc(qf, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
}, Y = function(a, b, c) {
        la(c) && (c = c.join(" "));
        var d = sf(b);
        "" === c || void 0 == c ? (of || (of = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = of, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d,
            c)
    }, tf = function(a, b) {
        var c = a.getAttribute(sf(b));
        return null == c || void 0 == c ? "" : String(c)
    }, sf = function(a) {
        B(a, "ARIA attribute cannot be empty.");
        B(tc(pf, a), "No such ARIA attribute " + a);
        return "aria-" + a
    };
var uf = function(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return w(a) && a.match(/\S+/g) || []
}, vf = function(a, b) {
        a.className = b
    }, wf = function(a, b) {
        return a.classList ? a.classList.contains(b) : xb(uf(a), b)
    }, xf = function(a, b) {
        a.classList ? a.classList.add(b) : wf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }, yf = function(a, b) {
        if (a.classList) D(b, function(b) {
            xf(a, b)
        });
        else {
            var c = {};
            D(uf(a), function(a) {
                c[a] = !0
            });
            D(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " +
                d : d
        }
    }, zf = function(a, b) {
        a.classList ? a.classList.remove(b) : wf(a, b) && (a.className = qb(uf(a), function(a) {
            return a != b
        }).join(" "))
    }, Af = function(a, b) {
        a.classList ? D(b, function(b) {
            zf(a, b)
        }) : a.className = qb(uf(a), function(a) {
            return !xb(b, a)
        }).join(" ")
    }, Bf = function(a, b, c) {
        c ? xf(a, b) : zf(a, b)
    };
var Cf = Bc("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var Ef = function() {
    this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "";
    this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = Df
};
Ef.prototype.implementsGoogStringTypedString = !0;
Ef.prototype.getTypedStringValue = function() {
    return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
};
Ef.prototype.toString = function() {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
};
var Ff = function(a) {
    if (a instanceof Ef && a.constructor === Ef && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === Df) return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
    jb("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
}, Df = {};
var Hf = function() {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
    this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = Gf
};
Hf.prototype.implementsGoogStringTypedString = !0;
Hf.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
};
Hf.prototype.toString = function() {
    return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
};
var Gf = {};
var Jf = function() {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = If
};
e = Jf.prototype;
e.implementsGoogStringTypedString = !0;
e.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
};
e.implementsGoogI18nBidiDirectionalString = !0;
e.getDirection = function() {
    return 1
};
e.toString = function() {
    return "SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
};
var If = {};
var Lf = function() {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = Kf;
    this.dir_ = null
};
e = Lf.prototype;
e.implementsGoogI18nBidiDirectionalString = !0;
e.getDirection = function() {
    return this.dir_
};
e.implementsGoogStringTypedString = !0;
e.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
};
e.toString = function() {
    return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
};
var Mf = function(a) {
    if (a instanceof Lf && a.constructor === Lf && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === Kf) return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    jb("expected object of type SafeHtml, got '" + a + "'");
    return "type_error:SafeHtml"
}, Of = function(a) {
        var b = null;
        a.implementsGoogI18nBidiDirectionalString && (b = a.getDirection());
        return Nf(Ra(a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a)), b)
    }, Pf = /^[a-zA-Z0-9-]+$/,
    Qf = Bc("action", "cite", "data", "formaction", "href", "manifest",
        "poster", "src"),
    Rf = Bc("link", "script", "style"),
    Tf = function(a, b, c) {
        if (!Pf.test(a)) throw Error("Invalid tag name <" + a + ">.");
        if (a.toLowerCase() in Rf) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
        var d = null,
            f = "<" + a;
        if (b)
            for (var g in b) {
                if (!Pf.test(g)) throw Error('Invalid attribute name "' + g + '".');
                var h = b[g];
                if (null != h) {
                    if (h instanceof Ef) h = Ff(h);
                    else {
                        if (/^on/i.test(g)) throw Error('Attribute "' + g + '" requires goog.string.Const value, "' + h + '" given.');
                        if (h instanceof Jf) h instanceof Jf && h.constructor ===
                            Jf && h.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === If ? h = h.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (jb("expected object of type SafeUrl, got '" + h + "'"), h = "type_error:SafeUrl");
                        else {
                            if (g.toLowerCase() in Qf) throw Error('Attribute "' + g + '" requires goog.string.Const or goog.html.SafeUrl value, "' + h + '" given.');
                            h instanceof Hf && (B("style" == g.toLowerCase(), 'goog.html.SafeStyle is only supported in "style" attribute.'), h instanceof Hf && h.constructor === Hf && h.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                                Gf ? h = h.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (jb("expected object of type SafeStyle, got '" + h + "'"), h = "type_error:SafeStyle"))
                        }
                    }
                    f += " " + g + '="' + Ra(h) + '"'
                }
            }
        ba(c) ? ka(c) || (c = [c]) : c = [];
        !0 === Cf[a.toLowerCase()] ? (B(!c.length, "Void tag <" + a + "> does not allow content."), f += ">") : (d = Sf(c), f += ">" + Mf(d) + "</" + a + ">", d = d.getDirection());
        (a = b && b.dir) && (d = "ltr" == a.toLowerCase() ? 1 : "rtl" == a.toLowerCase() ? -1 : null);
        return Nf(f, d)
    }, Sf = function(a) {
        var b = 0,
            c = "",
            d = function(a) {
                ka(a) ? D(a, d) : (a = a instanceof Lf ? a : a.implementsGoogI18nBidiDirectionalString ?
                    Of(a) : a.implementsGoogStringTypedString ? Of(a.getTypedStringValue()) : Of(String(a)), c += Mf(a), a = a.getDirection(), 0 == b ? b = a : 0 != a && b != a && (b = null))
            };
        D(arguments, d);
        return Nf(c, b)
    }, Kf = {}, Nf = function(a, b) {
        var c = new Lf;
        c.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = a;
        c.dir_ = b;
        return c
    }, Uf = Of("");
var Vf = function(a, b) {
    a.innerHTML = Mf(b)
};
var Wf = function(a, b, c) {
    U.call(this);
    this.target = a;
    this.handle = b || a;
    this.limits = c || new fe(NaN, NaN, NaN, NaN);
    this.document_ = kd(a);
    this.eventHandler_ = new Ye(this);
    this.registerDisposable(this.eventHandler_);
    N(this.handle, ["touchstart", "mousedown"], this.startDrag, !1, this)
};
z(Wf, U);
var Xf = E || J && Zb("1.9.3");
e = Wf.prototype;
e.clientX = 0;
e.clientY = 0;
e.screenX = 0;
e.screenY = 0;
e.startX = 0;
e.startY = 0;
e.deltaX = 0;
e.deltaY = 0;
e.enabled_ = !0;
e.dragging_ = !1;
e.hysteresisDistanceSquared_ = 0;
e.mouseDownTime_ = 0;
e.ieDragStartCancellingOn_ = !1;
e.useRightPositioningForRtl_ = !1;
e.enableRightPositioningForRtl = function(a) {
    this.useRightPositioningForRtl_ = a
};
e.getHandler = function() {
    return this.eventHandler_
};
e.setLimits = function(a) {
    this.limits = a || new fe(NaN, NaN, NaN, NaN)
};
e.setEnabled = function(a) {
    this.enabled_ = a
};
e.disposeInternal = function() {
    Wf.superClass_.disposeInternal.call(this);
    Qc(this.handle, ["touchstart", "mousedown"], this.startDrag, !1, this);
    this.cleanUpAfterDragging_();
    this.handle = this.target = null
};
e.isRightToLeft_ = function() {
    ba(this.rightToLeft_) || (this.rightToLeft_ = se(this.target));
    return this.rightToLeft_
};
e.startDrag = function(a) {
    var b = "mousedown" == a.type;
    if (!this.enabled_ || this.dragging_ || b && !a.isMouseActionButton()) this.dispatchEvent("earlycancel");
    else {
        this.maybeReinitTouchEvent_(a);
        if (0 == this.hysteresisDistanceSquared_)
            if (this.fireDragStart_(a)) this.dragging_ = !0, a.preventDefault();
            else return;
            else a.preventDefault();
        this.setupDragHandlers();
        this.clientX = this.startX = a.clientX;
        this.clientY = this.startY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.computeInitialPosition();
        this.pageScroll =
            ld(this.document_).getDocumentScroll();
        this.mouseDownTime_ = Aa()
    }
};
e.setupDragHandlers = function() {
    var a = this.document_,
        b = a.documentElement,
        c = !Xf;
    this.eventHandler_.listen(a, ["touchmove", "mousemove"], this.handleMove_, c);
    this.eventHandler_.listen(a, ["touchend", "mouseup"], this.endDrag, c);
    Xf ? (b.setCapture(!1), this.eventHandler_.listen(b, "losecapture", this.endDrag)) : this.eventHandler_.listen(ud(a), "blur", this.endDrag);
    E && this.ieDragStartCancellingOn_ && this.eventHandler_.listen(a, "dragstart", ic);
    this.scrollTarget_ && this.eventHandler_.listen(this.scrollTarget_, "scroll",
        this.onScroll_, c)
};
e.fireDragStart_ = function(a) {
    return this.dispatchEvent(new Yf("start", this, a.clientX, a.clientY, a))
};
e.cleanUpAfterDragging_ = function() {
    this.eventHandler_.removeAll();
    Xf && this.document_.releaseCapture()
};
e.endDrag = function(a, b) {
    this.cleanUpAfterDragging_();
    if (this.dragging_) {
        this.maybeReinitTouchEvent_(a);
        this.dragging_ = !1;
        var c = this.limitX(this.deltaX),
            d = this.limitY(this.deltaY);
        this.dispatchEvent(new Yf("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
    } else this.dispatchEvent("earlycancel")
};
e.maybeReinitTouchEvent_ = function(a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? a.init(a.getBrowserEvent().targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || a.init(a.getBrowserEvent().changedTouches[0], a.currentTarget)
};
e.handleMove_ = function(a) {
    if (this.enabled_) {
        this.maybeReinitTouchEvent_(a);
        var b = (this.useRightPositioningForRtl_ && this.isRightToLeft_() ? -1 : 1) * (a.clientX - this.clientX),
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.dragging_) {
            var d = this.startX - this.clientX,
                f = this.startY - this.clientY;
            if (d * d + f * f > this.hysteresisDistanceSquared_)
                if (this.fireDragStart_(a)) this.dragging_ = !0;
                else {
                    this.isDisposed() || this.endDrag(a);
                    return
                }
        }
        c = this.calculatePosition_(b,
            c);
        b = c.x;
        c = c.y;
        this.dragging_ && this.dispatchEvent(new Yf("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (this.doDrag(a, b, c, !1), a.preventDefault())
    }
};
e.calculatePosition_ = function(a, b) {
    var c = ld(this.document_).getDocumentScroll();
    a += c.x - this.pageScroll.x;
    b += c.y - this.pageScroll.y;
    this.pageScroll = c;
    this.deltaX += a;
    this.deltaY += b;
    var c = this.limitX(this.deltaX),
        d = this.limitY(this.deltaY);
    return new P(c, d)
};
e.onScroll_ = function(a) {
    var b = this.calculatePosition_(0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    this.doDrag(a, b.x, b.y, !0)
};
e.doDrag = function(a, b, c) {
    this.defaultAction(b, c);
    this.dispatchEvent(new Yf("drag", this, a.clientX, a.clientY, a, b, c))
};
e.limitX = function(a) {
    var b = this.limits,
        c = isNaN(b.left) ? null : b.left,
        b = isNaN(b.width) ? 0 : b.width;
    return Math.min(null != c ? c + b : Infinity, Math.max(null != c ? c : -Infinity, a))
};
e.limitY = function(a) {
    var b = this.limits,
        c = isNaN(b.top) ? null : b.top,
        b = isNaN(b.height) ? 0 : b.height;
    return Math.min(null != c ? c + b : Infinity, Math.max(null != c ? c : -Infinity, a))
};
e.computeInitialPosition = function() {
    this.deltaX = this.useRightPositioningForRtl_ ? Oe(this.target) : this.target.offsetLeft;
    this.deltaY = this.target.offsetTop
};
e.defaultAction = function(a, b) {
    this.useRightPositioningForRtl_ && this.isRightToLeft_() ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
    this.target.style.top = b + "px"
};
var Yf = function(a, b, c, d, f, g, h) {
    L.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.browserEvent = f;
    this.left = ba(g) ? g : b.deltaX;
    this.top = ba(h) ? h : b.deltaY;
    this.dragger = b
};
z(Yf, L);
var Zf = "StopIteration" in t ? t.StopIteration : Error("StopIteration"),
    $f = function() {};
$f.prototype.next = function() {
    throw Zf;
};
$f.prototype.__iterator__ = function() {
    return this
};
var ag = function(a, b) {
    this.map_ = {};
    this.keys_ = [];
    this.version_ = this.count_ = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
};
e = ag.prototype;
e.getValues = function() {
    this.cleanupKeysArray_();
    for (var a = [], b = 0; b < this.keys_.length; b++) a.push(this.map_[this.keys_[b]]);
    return a
};
e.getKeys = function() {
    this.cleanupKeysArray_();
    return this.keys_.concat()
};
e.containsKey = function(a) {
    return bg(this.map_, a)
};
e.isEmpty = function() {
    return 0 == this.count_
};
e.clear = function() {
    this.map_ = {};
    this.version_ = this.count_ = this.keys_.length = 0
};
e.remove = function(a) {
    return bg(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1
};
e.cleanupKeysArray_ = function() {
    if (this.count_ != this.keys_.length) {
        for (var a = 0, b = 0; a < this.keys_.length;) {
            var c = this.keys_[a];
            bg(this.map_, c) && (this.keys_[b++] = c);
            a++
        }
        this.keys_.length = b
    }
    if (this.count_ != this.keys_.length) {
        for (var d = {}, b = a = 0; a < this.keys_.length;) c = this.keys_[a], bg(d, c) || (this.keys_[b++] = c, d[c] = 1), a++;
        this.keys_.length = b
    }
};
e.get = function(a, b) {
    return bg(this.map_, a) ? this.map_[a] : b
};
e.set = function(a, b) {
    bg(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
    this.map_[a] = b
};
e.addAll = function(a) {
    var b;
    a instanceof ag ? (b = a.getKeys(), a = a.getValues()) : (b = sc(a), a = rc(a));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
};
e.forEach = function(a, b) {
    for (var c = this.getKeys(), d = 0; d < c.length; d++) {
        var f = c[d],
            g = this.get(f);
        a.call(b, g, f, this)
    }
};
e.clone = function() {
    return new ag(this)
};
e.__iterator__ = function(a) {
    this.cleanupKeysArray_();
    var b = 0,
        c = this.keys_,
        d = this.map_,
        f = this.version_,
        g = this,
        h = new $f;
    h.next = function() {
        for (;;) {
            if (f != g.version_) throw Error("The map has changed since the iterator was created");
            if (b >= c.length) throw Zf;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
var bg = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var cg = function(a) {
    U.call(this);
    this.element_ = a;
    a = E ? "focusout" : "blur";
    this.listenKeyIn_ = N(this.element_, E ? "focusin" : "focus", this, !E);
    this.listenKeyOut_ = N(this.element_, a, this, !E)
};
z(cg, U);
cg.prototype.handleEvent = function(a) {
    var b = new lc(a.getBrowserEvent());
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
cg.prototype.disposeInternal = function() {
    cg.superClass_.disposeInternal.call(this);
    Rc(this.listenKeyIn_);
    Rc(this.listenKeyOut_);
    delete this.element_
};
var dg = function() {};
ga(dg);
dg.prototype.nextId_ = 0;
dg.prototype.getNextUniqueId = function() {
    return ":" + (this.nextId_++).toString(36)
};
var fg = function(a) {
    U.call(this);
    this.dom_ = a || ld();
    this.rightToLeft_ = eg
};
z(fg, U);
fg.prototype.idGenerator_ = dg.getInstance();
var eg = null,
    gg = function(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    };
e = fg.prototype;
e.id_ = null;
e.inDocument_ = !1;
e.element_ = null;
e.rightToLeft_ = null;
e.model_ = null;
e.parent_ = null;
e.children_ = null;
e.childIndex_ = null;
e.wasDecorated_ = !1;
e.getId = function() {
    return this.id_ || (this.id_ = this.idGenerator_.getNextUniqueId())
};
e.setId = function(a) {
    this.parent_ && this.parent_.childIndex_ && (vc(this.parent_.childIndex_, this.id_), wc(this.parent_.childIndex_, a, this));
    this.id_ = a
};
e.getElement = function() {
    return this.element_
};
e.getElementStrict = function() {
    var a = this.element_;
    B(a, "Can not call getElementStrict before rendering/decorating.");
    return a
};
e.setElementInternal = function(a) {
    this.element_ = a
};
e.getElementsByClass = function(a) {
    return this.element_ ? this.dom_.getElementsByClass(a, this.element_) : []
};
e.getElementByClass = function(a) {
    return this.element_ ? this.dom_.getElementByClass(a, this.element_) : null
};
e.getHandler = function() {
    this.googUiComponentHandler_ || (this.googUiComponentHandler_ = new Ye(this));
    return this.googUiComponentHandler_
};
e.setParent = function(a) {
    if (this == a) throw Error("Unable to set parent component");
    if (a && this.parent_ && this.id_ && this.parent_.getChild(this.id_) && this.parent_ != a) throw Error("Unable to set parent component");
    this.parent_ = a;
    fg.superClass_.setParentEventTarget.call(this, a)
};
e.getParent = function() {
    return this.parent_
};
e.setParentEventTarget = function(a) {
    if (this.parent_ && this.parent_ != a) throw Error("Method not supported");
    fg.superClass_.setParentEventTarget.call(this, a)
};
e.getDomHelper = function() {
    return this.dom_
};
e.isInDocument = function() {
    return this.inDocument_
};
e.createDom = function() {
    this.element_ = this.dom_.createElement("div")
};
e.render = function(a) {
    this.render_(a)
};
e.renderBefore = function(a) {
    this.render_(a.parentNode, a)
};
e.render_ = function(a, b) {
    if (this.inDocument_) throw Error("Component already rendered");
    this.element_ || this.createDom();
    a ? a.insertBefore(this.element_, b || null) : this.dom_.getDocument().body.appendChild(this.element_);
    this.parent_ && !this.parent_.isInDocument() || this.enterDocument()
};
e.decorate = function(a) {
    if (this.inDocument_) throw Error("Component already rendered");
    if (a && this.canDecorate(a)) {
        this.wasDecorated_ = !0;
        var b = kd(a);
        this.dom_ && this.dom_.getDocument() == b || (this.dom_ = ld(a));
        this.decorateInternal(a);
        this.enterDocument()
    } else{
     // throw Error("Invalid element to decorate");
 }
};
e.canDecorate = function() {
    return !0
};
e.decorateInternal = function(a) {
    this.element_ = a
};
e.enterDocument = function() {
    this.inDocument_ = !0;
    this.forEachChild(function(a) {
        !a.isInDocument() && a.getElement() && a.enterDocument()
    })
};
e.exitDocument = function() {
    this.forEachChild(function(a) {
        a.isInDocument() && a.exitDocument()
    });
    this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll();
    this.inDocument_ = !1
};
e.disposeInternal = function() {
    this.inDocument_ && this.exitDocument();
    this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_);
    this.forEachChild(function(a) {
        a.dispose()
    });
    !this.wasDecorated_ && this.element_ && Cd(this.element_);
    this.parent_ = this.model_ = this.element_ = this.childIndex_ = this.children_ = null;
    fg.superClass_.disposeInternal.call(this)
};
e.makeId = function(a) {
    return this.getId() + "." + a
};
e.getModel = function() {
    return this.model_
};
e.setModel = function(a) {
    this.model_ = a
};
e.addChild = function(a, b) {
    this.addChildAt(a, this.getChildCount(), b)
};
e.addChildAt = function(a, b, c) {
    B( !! a, "Provided element must not be null.");
    if (a.inDocument_ && (c || !this.inDocument_)) throw Error("Component already rendered");
    if (0 > b || b > this.getChildCount()) throw Error("Child component index out of bounds");
    this.childIndex_ && this.children_ || (this.childIndex_ = {}, this.children_ = []);
    if (a.getParent() == this) {
        var d = a.getId();
        this.childIndex_[d] = a;
        zb(this.children_, a)
    } else wc(this.childIndex_, a.getId(), a);
    a.setParent(this);
    Hb(this.children_, b, 0, a);
    a.inDocument_ && this.inDocument_ &&
        a.getParent() == this ? (c = this.getContentElement(), c.insertBefore(a.getElement(), c.childNodes[b] || null)) : c ? (this.element_ || this.createDom(), b = this.getChildAt(b + 1), a.render_(this.getContentElement(), b ? b.element_ : null)) : this.inDocument_ && !a.inDocument_ && a.element_ && a.element_.parentNode && 1 == a.element_.parentNode.nodeType && a.enterDocument()
};
e.getContentElement = function() {
    return this.element_
};
e.isRightToLeft = function() {
    null == this.rightToLeft_ && (this.rightToLeft_ = se(this.inDocument_ ? this.element_ : this.dom_.getDocument().body));
    return this.rightToLeft_
};
e.setRightToLeft = function(a) {
    if (this.inDocument_) throw Error("Component already rendered");
    this.rightToLeft_ = a
};
e.hasChildren = function() {
    return !!this.children_ && 0 != this.children_.length
};
e.getChildCount = function() {
    return this.children_ ? this.children_.length : 0
};
e.getChildIds = function() {
    var a = [];
    this.forEachChild(function(b) {
        a.push(b.getId())
    });
    return a
};
e.getChild = function(a) {
    if (this.childIndex_ && a) {
        var b = this.childIndex_;
        a = (a in b ? b[a] : void 0) || null
    } else a = null;
    return a
};
e.getChildAt = function(a) {
    return this.children_ ? this.children_[a] || null : null
};
e.forEachChild = function(a, b) {
    this.children_ && D(this.children_, a, b)
};
e.indexOfChild = function(a) {
    return this.children_ && a ? pb(this.children_, a) : -1
};
e.removeChild = function(a, b) {
    if (a) {
        var c = w(a) ? a : a.getId();
        a = this.getChild(c);
        c && a && (vc(this.childIndex_, c), zb(this.children_, a), b && (a.exitDocument(), a.element_ && Cd(a.element_)), a.setParent(null))
    }
    // if (!a) throw Error("Child is not in parent component");
    return a
};
e.removeChildAt = function(a, b) {
    return this.removeChild(this.getChildAt(a), b)
};
e.removeChildren = function(a) {
    for (var b = []; this.hasChildren();) b.push(this.removeChildAt(0, a));
    return b
};
var hg = function(a, b) {
    fg.call(this, b);
    this.useIframeMask_ = !! a;
    this.lastFocus_ = null
};
z(hg, fg);
e = hg.prototype;
e.focusHandler_ = null;
e.visible_ = !1;
e.bgEl_ = null;
e.bgIframeEl_ = null;
e.tabCatcherElement_ = null;
e.backwardTabWrapInProgress_ = !1;
e.getCssClass = function() {
    return "goog-modalpopup"
};
e.getBackgroundIframe = function() {
    return this.bgIframeEl_
};
e.getBackgroundElement = function() {
    return this.bgEl_
};
e.createDom = function() {
    hg.superClass_.createDom.call(this);
    var a = this.getElement();
    B(a);
    var b = Ha(this.getCssClass()).split(" ");
    yf(a, b);
    Od(a, !0);
    S(a, !1);
    this.manageBackgroundDom_();
    this.createTabCatcher_()
};
e.manageBackgroundDom_ = function() {
    this.useIframeMask_ && !this.bgIframeEl_ && (this.bgIframeEl_ = this.getDomHelper().createDom("iframe", {
        frameborder: 0,
        style: "border:0;vertical-align:bottom;",
        src: 'javascript:""'
    }), this.bgIframeEl_.className = this.getCssClass() + "-bg", S(this.bgIframeEl_, !1), Fe(this.bgIframeEl_, 0));
    this.bgEl_ || (this.bgEl_ = this.getDomHelper().createDom("div", this.getCssClass() + "-bg"), S(this.bgEl_, !1))
};
e.createTabCatcher_ = function() {
    this.tabCatcherElement_ || (this.tabCatcherElement_ = this.getDomHelper().createElement("span"), S(this.tabCatcherElement_, !1), Od(this.tabCatcherElement_, !0), this.tabCatcherElement_.style.position = "absolute")
};
e.setupBackwardTabWrap = function() {
    this.backwardTabWrapInProgress_ = !0;
    try {
        this.tabCatcherElement_.focus()
    } catch (a) {}
    X(this.resetBackwardTabWrap_, 0, this)
};
e.resetBackwardTabWrap_ = function() {
    this.backwardTabWrapInProgress_ = !1
};
e.renderBackground_ = function() {
    B( !! this.bgEl_, "Background element must not be null.");
    this.bgIframeEl_ && Bd(this.bgIframeEl_, this.getElement());
    Bd(this.bgEl_, this.getElement())
};
e.canDecorate = function(a) {
    return !!a && "DIV" == a.tagName
};
e.decorateInternal = function(a) {
    hg.superClass_.decorateInternal.call(this, a);
    a = Ha(this.getCssClass()).split(" ");
    yf(B(this.getElement()), a);
    this.manageBackgroundDom_();
    this.createTabCatcher_();
    S(this.getElement(), !1)
};
e.enterDocument = function() {
    this.renderBackground_();
    hg.superClass_.enterDocument.call(this);
    var a = this.getElement();
    a.parentNode && a.parentNode.insertBefore(this.tabCatcherElement_, a.nextSibling);
    this.focusHandler_ = new cg(this.getDomHelper().getDocument());
    this.getHandler().listen(this.focusHandler_, "focusin", this.onFocus);
    this.setA11YDetectBackground(!1)
};
e.exitDocument = function() {
    this.isVisible() && this.setVisible(!1);
    gc(this.focusHandler_);
    hg.superClass_.exitDocument.call(this);
    Cd(this.bgIframeEl_);
    Cd(this.bgEl_);
    Cd(this.tabCatcherElement_)
};
e.setVisible = function(a) {
    B(this.isInDocument(), "ModalPopup must be rendered first.");
    a != this.visible_ && (this.popupShowTransition_ && this.popupShowTransition_.stop(), this.bgShowTransition_ && this.bgShowTransition_.stop(), this.popupHideTransition_ && this.popupHideTransition_.stop(), this.bgHideTransition_ && this.bgHideTransition_.stop(), this.isInDocument() && this.setA11YDetectBackground(a), a ? this.show_() : this.hide_())
};
e.setA11YDetectBackground = function(a) {
    for (var b = this.getDomHelper().getDocument().body.firstChild; b; b = b.nextSibling)
        if (1 == b.nodeType) {
            var c = b;
            a ? Y(c, "hidden", a) : c.removeAttribute(sf("hidden"))
        }
    b = this.getElementStrict();
    (a = !a) ? Y(b, "hidden", a) : b.removeAttribute(sf("hidden"))
};
e.setTransition = function(a, b, c, d) {
    this.popupShowTransition_ = a;
    this.popupHideTransition_ = b;
    this.bgShowTransition_ = c;
    this.bgHideTransition_ = d
};
e.show_ = function() {
    if (this.dispatchEvent("beforeshow")) {
        try {
            this.lastFocus_ = this.getDomHelper().getDocument().activeElement
        } catch (a) {}
        this.resizeBackground_();
        this.reposition();
        this.getHandler().listen(this.getDomHelper().getWindow(), "resize", this.resizeBackground_);
        this.showPopupElement_(!0);
        this.focus();
        this.visible_ = !0;
        if (this.popupShowTransition_ && this.bgShowTransition_) Pc(this.popupShowTransition_, "end", this.onShow, !1, this), this.bgShowTransition_.play(), this.popupShowTransition_.play();
        else this.onShow()
    }
};
e.hide_ = function() {
    if (this.dispatchEvent("beforehide")) {
        this.getHandler().unlisten(this.getDomHelper().getWindow(), "resize", this.resizeBackground_);
        this.visible_ = !1;
        if (this.popupHideTransition_ && this.bgHideTransition_) Pc(this.popupHideTransition_, "end", this.onHide, !1, this), this.bgHideTransition_.play(), this.popupHideTransition_.play();
        else this.onHide();
        try {
            var a = this.getDomHelper().getDocument().body,
                b = this.getDomHelper().getDocument().activeElement || a;
            this.lastFocus_ && b == a && this.lastFocus_ != a &&
                this.lastFocus_.focus()
        } catch (c) {}
        this.lastFocus_ = null
    }
};
e.showPopupElement_ = function(a) {
    this.bgIframeEl_ && S(this.bgIframeEl_, a);
    this.bgEl_ && S(this.bgEl_, a);
    S(this.getElement(), a);
    S(this.tabCatcherElement_, a)
};
e.onShow = function() {
    this.dispatchEvent("show")
};
e.onHide = function() {
    this.showPopupElement_(!1);
    this.dispatchEvent("hide")
};
e.isVisible = function() {
    return this.visible_
};
e.focus = function() {
    this.focusElement_()
};
e.resizeBackground_ = function() {
    this.bgIframeEl_ && S(this.bgIframeEl_, !1);
    this.bgEl_ && S(this.bgEl_, !1);
    var a = this.getDomHelper().getDocument(),
        b = sd(ud(a) || window || window),
        c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
        a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.bgIframeEl_ && (S(this.bgIframeEl_, !0), Be(this.bgIframeEl_, c, a));
    this.bgEl_ && (S(this.bgEl_, !0), Be(this.bgEl_, c, a))
};
e.reposition = function() {
    var a = this.getDomHelper().getDocument(),
        b = ud(a) || window;
    if ("fixed" == le(this.getElement())) var c = a = 0;
    else c = this.getDomHelper().getDocumentScroll(), a = c.x, c = c.y;
    var d = De(this.getElement()),
        b = sd(b || window),
        a = Math.max(a + b.width / 2 - d.width / 2, 0),
        c = Math.max(c + b.height / 2 - d.height / 2, 0);
    ne(this.getElement(), a, c);
    ne(this.tabCatcherElement_, a, c)
};
e.onFocus = function(a) {
    this.backwardTabWrapInProgress_ ? this.resetBackwardTabWrap_() : a.target == this.tabCatcherElement_ && X(this.focusElement_, 0, this)
};
e.focusElement_ = function() {
    try {
        E && this.getDomHelper().getDocument().body.focus(), this.getElement().focus()
    } catch (a) {}
};
e.disposeInternal = function() {
    gc(this.popupShowTransition_);
    this.popupShowTransition_ = null;
    gc(this.popupHideTransition_);
    this.popupHideTransition_ = null;
    gc(this.bgShowTransition_);
    this.bgShowTransition_ = null;
    gc(this.bgHideTransition_);
    this.bgHideTransition_ = null;
    hg.superClass_.disposeInternal.call(this)
};
var lg = function(a, b, c) {
    hg.call(this, b, c);
    this.class_ = a || "modal-dialog";
    this.buttons_ = (new ig).addButton(jg, !0).addButton(kg, !1, !0)
};
z(lg, hg);
e = lg.prototype;
e.escapeToCancel_ = !0;
e.hasTitleCloseButton_ = !0;
e.modal_ = !0;
e.draggable_ = !0;
e.backgroundElementOpacity_ = 0.5;
e.title_ = "";
e.content_ = null;
e.dragger_ = null;
e.disposeOnHide_ = !1;
e.titleEl_ = null;
e.titleTextEl_ = null;
e.titleTextId_ = null;
e.titleCloseEl_ = null;
e.contentEl_ = null;
e.buttonEl_ = null;
e.preferredAriaRole_ = "dialog";
e.getCssClass = function() {
    return this.class_
};
e.setContent = function(a) {
    this.setSafeHtmlContent(Nf(a, null))
};
e.setSafeHtmlContent = function(a) {
    this.content_ = a;
    this.contentEl_ && Vf(this.contentEl_, a)
};
e.getContent = function() {
    return null != this.content_ ? Mf(this.content_) : ""
};
e.getPreferredAriaRole = function() {
    return this.preferredAriaRole_
};
e.setPreferredAriaRole = function(a) {
    this.preferredAriaRole_ = a
};
e.renderIfNoDom_ = function() {
    this.getElement() || this.render()
};
e.getContentElement = function() {
    this.renderIfNoDom_();
    return this.contentEl_
};
e.getTitleElement = function() {
    this.renderIfNoDom_();
    return this.titleEl_
};
e.getTitleCloseElement = function() {
    this.renderIfNoDom_();
    return this.titleCloseEl_
};
e.getDialogElement = function() {
    this.renderIfNoDom_();
    return this.getElement()
};
e.getBackgroundElement = function() {
    this.renderIfNoDom_();
    return lg.superClass_.getBackgroundElement.call(this)
};
e.setBackgroundElementOpacity = function(a) {
    this.backgroundElementOpacity_ = a;
    this.getElement() && (a = this.getBackgroundElement()) && Fe(a, this.backgroundElementOpacity_)
};
e.setModalInternal_ = function(a) {
    this.modal_ = a;
    if (this.isInDocument()) {
        var b = this.getDomHelper(),
            c = this.getBackgroundElement(),
            d = this.getBackgroundIframe();
        a ? (d && b.insertSiblingBefore(d, this.getElement()), b.insertSiblingBefore(c, this.getElement())) : (b.removeNode(d), b.removeNode(c))
    }
    this.isVisible() && this.setA11YDetectBackground(a)
};
e.getClass = function() {
    return this.getCssClass()
};
e.setDraggable = function(a) {
    this.draggable_ = a;
    this.setDraggingEnabled_(a && this.isInDocument())
};
e.createDragger = function() {
    return new Wf(this.getElement(), this.titleEl_)
};
e.getDraggable = function() {
    return this.draggable_
};
e.setDraggingEnabled_ = function(a) {
    var b = Ha(this.class_ + "-title-draggable").split(" ");
    this.getElement() && (a ? yf(B(this.titleEl_), b) : Af(B(this.titleEl_), b));
    a && !this.dragger_ ? (this.dragger_ = this.createDragger(), yf(B(this.titleEl_), b), N(this.dragger_, "start", this.setDraggerLimits_, !1, this)) : !a && this.dragger_ && (this.dragger_.dispose(), this.dragger_ = null)
};
e.createDom = function() {
    lg.superClass_.createDom.call(this);
    var a = this.getElement();
    B(a, "getElement() returns null");
    var b = this.getDomHelper();
    this.titleEl_ = b.createDom("div", this.class_ + "-title", this.titleTextEl_ = b.createDom("span", {
        className: this.class_ + "-title-text",
        id: this.getId()
    }, this.title_), this.titleCloseEl_ = b.createDom("span", this.class_ + "-title-close"));
    zd(a, this.titleEl_, this.contentEl_ = b.createDom("div", this.class_ + "-content"), this.buttonEl_ = b.createDom("div", this.class_ + "-buttons"));
    rf(this.titleCloseEl_, "button");
    Od(this.titleCloseEl_, !0);
    Y(this.titleCloseEl_, "label", "Close");
    this.titleTextId_ = this.titleTextEl_.id;
    rf(a, this.getPreferredAriaRole());
    Y(a, "labelledby", this.titleTextId_ || "");
    this.content_ && Vf(this.contentEl_, this.content_);
    S(this.titleCloseEl_, this.hasTitleCloseButton_);
    this.buttons_ && this.buttons_.attachToElement(this.buttonEl_);
    S(this.buttonEl_, !! this.buttons_);
    this.setBackgroundElementOpacity(this.backgroundElementOpacity_)
};
e.decorateInternal = function(a) {
    lg.superClass_.decorateInternal.call(this, a);
    a = this.getElement();
    B(a, "The DOM element for dialog cannot be null.");
    var b = this.class_ + "-content";
    this.contentEl_ = nd(null, b, a)[0];
    this.contentEl_ || (this.contentEl_ = this.getDomHelper().createDom("div", b), this.content_ && Vf(this.contentEl_, this.content_), a.appendChild(this.contentEl_));
    var b = this.class_ + "-title",
        c = this.class_ + "-title-text",
        d = this.class_ + "-title-close";
    (this.titleEl_ = nd(null, b, a)[0]) ? (this.titleTextEl_ = nd(null,
            c, this.titleEl_)[0], this.titleCloseEl_ = nd(null, d, this.titleEl_)[0]) : (this.titleEl_ = this.getDomHelper().createDom("div", b), a.insertBefore(this.titleEl_, this.contentEl_));
    this.titleTextEl_ ? (this.title_ = Sd(this.titleTextEl_), this.titleTextEl_.id || (this.titleTextEl_.id = this.getId())) : (this.titleTextEl_ = wd("span", {
        className: c,
        id: this.getId()
    }), this.titleEl_.appendChild(this.titleTextEl_));
    this.titleTextId_ = this.titleTextEl_.id;
    Y(a, "labelledby", this.titleTextId_ || "");
    this.titleCloseEl_ || (this.titleCloseEl_ =
        this.getDomHelper().createDom("span", d), this.titleEl_.appendChild(this.titleCloseEl_));
    S(this.titleCloseEl_, this.hasTitleCloseButton_);
    b = this.class_ + "-buttons";
    (this.buttonEl_ = nd(null, b, a)[0]) ? (this.buttons_ = new ig(this.getDomHelper()), this.buttons_.decorate(this.buttonEl_)) : (this.buttonEl_ = this.getDomHelper().createDom("div", b), a.appendChild(this.buttonEl_), this.buttons_ && this.buttons_.attachToElement(this.buttonEl_), S(this.buttonEl_, !! this.buttons_));
    this.setBackgroundElementOpacity(this.backgroundElementOpacity_)
};
e.enterDocument = function() {
    lg.superClass_.enterDocument.call(this);
    this.getHandler().listen(this.getElement(), "keydown", this.onKey_).listen(this.getElement(), "keypress", this.onKey_);
    this.getHandler().listen(this.buttonEl_, "click", this.onButtonClick_);
    this.setDraggingEnabled_(this.draggable_);
    this.getHandler().listen(this.titleCloseEl_, "click", this.onTitleCloseClick_);
    var a = this.getElement();
    B(a, "The DOM element for dialog cannot be null");
    rf(a, this.getPreferredAriaRole());
    "" !== this.titleTextEl_.id &&
        Y(a, "labelledby", this.titleTextEl_.id);
    this.modal_ || this.setModalInternal_(!1)
};
e.exitDocument = function() {
    this.isVisible() && this.setVisible(!1);
    this.setDraggingEnabled_(!1);
    lg.superClass_.exitDocument.call(this)
};
e.setVisible = function(a) {
    a != this.isVisible() && (this.isInDocument() || this.render(), lg.superClass_.setVisible.call(this, a))
};
e.onShow = function() {
    lg.superClass_.onShow.call(this);
    this.dispatchEvent("aftershow")
};
e.onHide = function() {
    lg.superClass_.onHide.call(this);
    this.dispatchEvent("afterhide");
    this.disposeOnHide_ && this.dispose()
};
e.setDraggerLimits_ = function() {
    var a = this.getDomHelper().getDocument(),
        b = sd(ud(a) || window || window),
        c = Math.max(a.body.scrollWidth, b.width),
        a = Math.max(a.body.scrollHeight, b.height),
        d = De(this.getElement());
    "fixed" == le(this.getElement()) ? this.dragger_.setLimits(new fe(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height))) : this.dragger_.setLimits(new fe(0, 0, c - d.width, a - d.height))
};
e.onTitleCloseClick_ = function() {
    this.handleTitleClose_()
};
e.handleTitleClose_ = function() {
    if (this.hasTitleCloseButton_) {
        var a = this.getButtonSet(),
            b = a && a.getCancel();
        b ? (a = a.get(b), this.dispatchEvent(new mg(b, a)) && this.setVisible(!1)) : this.setVisible(!1)
    }
};
e.setHasTitleCloseButton = function(a) {
    this.hasTitleCloseButton_ = a;
    this.titleCloseEl_ && S(this.titleCloseEl_, this.hasTitleCloseButton_)
};
e.disposeInternal = function() {
    this.buttonEl_ = this.titleCloseEl_ = null;
    lg.superClass_.disposeInternal.call(this)
};
e.setButtonSet = function(a) {
    this.buttons_ = a;
    this.buttonEl_ && (this.buttons_ ? this.buttons_.attachToElement(this.buttonEl_) : Vf(this.buttonEl_, Uf), S(this.buttonEl_, !! this.buttons_))
};
e.getButtonSet = function() {
    return this.buttons_
};
e.onButtonClick_ = function(a) {
    if ((a = this.findParentButton_(a.target)) && !a.disabled) {
        a = a.name;
        var b = this.getButtonSet().get(a);
        this.dispatchEvent(new mg(a, b)) && this.setVisible(!1)
    }
};
e.findParentButton_ = function(a) {
    for (; null != a && a != this.buttonEl_;) {
        if ("BUTTON" == a.tagName) return a;
        a = a.parentNode
    }
    return null
};
e.onKey_ = function(a) {
    var b = !1,
        c = !1,
        d = this.getButtonSet(),
        f = a.target;
    if ("keydown" == a.type)
        if (this.escapeToCancel_ && 27 == a.keyCode) {
            var g = d && d.getCancel(),
                f = "SELECT" == f.tagName && !f.disabled;
            g && !f ? (c = !0, b = d.get(g), b = this.dispatchEvent(new mg(g, b))) : f || (b = !0)
        } else 9 == a.keyCode && a.shiftKey && f == this.getElement() && this.setupBackwardTabWrap();
        else if (13 == a.keyCode) {
        if ("BUTTON" == f.tagName && !f.disabled) g = f.name;
        else if (f == this.titleCloseEl_) this.handleTitleClose_();
        else if (d) {
            var h = d.getDefault(),
                k = h && d.getButton(h),
                f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName || "A" == f.tagName) && !f.disabled;
            !k || k.disabled || f || (g = h)
        }
        g && d && (c = !0, b = this.dispatchEvent(new mg(g, String(d.get(g)))))
    } else f == this.titleCloseEl_ && 32 == a.keyCode && this.handleTitleClose_(); if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.setVisible(!1)
};
var mg = function(a, b) {
    this.type = "dialogselect";
    this.key = a;
    this.caption = b
};
z(mg, L);
var ig = function(a) {
    this.dom_ = a || ld();
    ag.call(this)
};
z(ig, ag);
e = ig.prototype;
e.class_ = "goog-buttonset";
e.defaultButton_ = null;
e.element_ = null;
e.cancelButton_ = null;
e.set = function(a, b, c, d) {
    ag.prototype.set.call(this, a, b);
    c && (this.defaultButton_ = a);
    d && (this.cancelButton_ = a);
    return this
};
e.addButton = function(a, b, c) {
    return this.set(a.key, a.caption, b, c)
};
e.attachToElement = function(a) {
    this.element_ = a;
    this.render()
};
e.render = function() {
    if (this.element_) {
        Vf(this.element_, Uf);
        var a = ld(this.element_);
        this.forEach(function(b, c) {
            var d = a.createDom("button", {
                name: c
            }, b);
            c == this.defaultButton_ && (d.className = this.class_ + "-default");
            this.element_.appendChild(d)
        }, this)
    }
};
e.decorate = function(a) {
    if (a && 1 == a.nodeType) {
        this.element_ = a;
        a = this.element_.getElementsByTagName("button");
        for (var b = 0, c, d, f; c = a[b]; b++)
            if (d = c.name || c.id, f = Sd(c) || c.value, d) {
                var g = 0 == b;
                this.set(d, f, g, "cancel" == c.name);
                g && xf(c, this.class_ + "-default")
            }
    }
};
e.getElement = function() {
    return this.element_
};
e.getDomHelper = function() {
    return this.dom_
};
e.getDefault = function() {
    return this.defaultButton_
};
e.getCancel = function() {
    return this.cancelButton_
};
e.getButton = function(a) {
    for (var b = this.getAllButtons(), c = 0, d; d = b[c]; c++)
        if (d.name == a || d.id == a) return d;
    return null
};
e.getAllButtons = function() {
    return this.element_.getElementsByTagName("BUTTON")
};
e.setButtonEnabled = function(a, b) {
    var c = this.getButton(a);
    c && (c.disabled = !b)
};
var jg = {
    key: "ok",
    caption: "OK"
}, kg = {
        key: "cancel",
        caption: "Cancel"
    }, ng = {
        key: "yes",
        caption: "Yes"
    }, og = {
        key: "no",
        caption: "No"
    }, pg = {
        key: "save",
        caption: "Save"
    }, qg = {
        key: "continue",
        caption: "Continue"
    };
"undefined" != typeof document && ((new ig).addButton(jg, !0, !0), (new ig).addButton(jg, !0).addButton(kg, !1, !0), (new ig).addButton(ng, !0).addButton(og, !1, !0), (new ig).addButton(ng).addButton(og, !0).addButton(kg, !1, !0), (new ig).addButton(qg).addButton(pg).addButton(kg, !0, !0));
var rg = function(a, b, c) {
    lg.call(this, a, b, c)
};
z(rg, lg);
rg.prototype.init = function() {
    this.setBackgroundElementOpacity(0.8);
    var a = x(function() {
        this.setVisible(!1)
    }, this);
    N(this.getBackgroundElement(), "click", a);
    this.getElement().ontouchmove = function(a) {
        a.stopPropagation()
    };
    this.getBackgroundElement().ontouchmove = function(a) {
        a.preventDefault()
    };
    this.setDraggable(!1);
    N(window, "resize", x(this.onWindowChange_, this));
    N(window, "scroll", x(this.onWindowChange_, this))
};
rg.prototype.setVisible = function(a, b) {
    document.body.style.overflow = a ? "hidden" : "auto";
    if (window.innerHeight) {
        var c = Math.round(0.7 * window.innerHeight) + "px";
        he(this.getContentElement(), "max-height", c)
    }
    window.innerWidth && (c = 0.9 * window.innerWidth, c = Math.round(c) + "px", he(this.getContentElement(), "max-width", c), b && (c = 0.5 * window.innerWidth, c = Math.round(c) + "px", he(this.getContentElement(), "min-width", c)));
    rg.superClass_.setVisible.call(this, a)
};
rg.prototype.onWindowChange_ = function() {
    this.isVisible() && X(x(function() {
        this.setVisible(!0);
        this.reposition()
    }, this), 100)
};
var sg = function(a, b, c) {
    $e.call(this, a, b);
    this.anchorElem_ = Q(a + "_anchor");
    N(this.anchorElem_, "click", x(this.handlePopupAnchorClick, this));
    this.captionElem_ = Q(a + "_caption");
    this.contentElem_ = Q(a + "_content");
    this.popup_ = c ? null : this.createPopup_();
    this.dialog_ = c ? this.createDialog_() : null
};
z(sg, $e);
e = sg.prototype;
e.createDialog_ = function() {
    var a = new rg;
    a.setButtonSet(null);
    a.render();
    a.getContentElement().appendChild(this.contentElem_);
    S(this.contentElem_, !0);
    a.init();
    a.getTitleCloseElement().innerHTML = Q("dialog-close-icon").innerHTML;
    a.getElement().style.zIndex = "1204";
    return a
};
e.createPopup_ = function() {
    var a = new nf(this.contentElem_);
    a.setPosition(new Ve(this.anchorElem_, 5));
    a.setPinnedCorner(4);
    a.setMargin(new ce(0, 0, 0, -10));
    a.getElement().style.zIndex = "1204";
    return a
};
e.handlePopupAnchorClick = function() {
    this.popup_ && this.setVisible(!this.popup_.isOrWasRecentlyVisible());
    this.dialog_ && this.setVisible(!0)
};
e.setVisible = function(a) {
    this.popup_ && this.popup_.setVisible(a);
    this.dialog_ && this.dialog_.setVisible(a, !0)
};
e.setAnchorCaption = function(a, b) {
	if (this.captionElem_!=null)
    this.captionElem_.innerHTML = a;
    b ? id(this.anchorElem_, "filter-control-anchor-selected") : gd(this.anchorElem_, "filter-control-anchor-selected")
};
e.setPopupWidth = function(a) {
    this.popup_ && Ae(this.popup_.getElement(), a);
    this.dialog_ && Ae(this.dialog_.getContentElement(), a)
};
e.setPopupMargin = function(a) {
    this.popup_ && this.popup_.setMargin(a);
    this.dialog_ && this.dialog_.getContentElement().setMargin(a)
};
e.setPopupZIndex = function(a) {
    this.popup_ && (this.popup_.getElement().style.zIndex = a);
    this.dialog_ && (this.dialog_.getContentElement().style.zIndex = a)
};
e.getPopup = function() {
    return this.popup_ || this.dialog_
};
e.getElement = function() {
    return this.anchorElem_
};
e.getContentElement = function() {
    return this.contentElem_
};
e.dispose = function() {
    gc(this.dialog_);
    gc(this.popup_)
};
var wg = function(a, b) {
    null != a && this.append.apply(this, arguments)
};
e = wg.prototype;
e.buffer_ = "";
e.set = function(a) {
    this.buffer_ = "" + a
};
e.append = function(a, b, c) {
    this.buffer_ += a;
    if (null != b)
        for (var d = 1; d < arguments.length; d++) this.buffer_ += arguments[d];
    return this
};
e.clear = function() {
    this.buffer_ = ""
};
e.toString = function() {
    return this.buffer_
};
var yg = function(a, b, c) {
    fg.call(this, c);
    this.config_ = b || xg;
    this.html_ = a instanceof Lf ? a : Nf(a, null)
};
z(yg, fg);
var zg = {};
e = yg.prototype;
e.selected_ = !1;
e.expanded_ = !1;
e.toolTip_ = null;
e.afterLabelHtml_ = Uf;
e.isUserCollapsible_ = !0;
e.depth_ = -1;
e.disposeInternal = function() {
    yg.superClass_.disposeInternal.call(this);
    this.tree && (this.tree.removeNode(this), this.tree = null);
    this.setElementInternal(null)
};
e.initAccessibility = function() {
    var a = this.getElement();
    if (a) {
        var b = this.getLabelElement();
        b && !b.id && (b.id = this.getId() + ".label");
        rf(a, "treeitem");
        Y(a, "selected", !1);
        Y(a, "expanded", !1);
        Y(a, "level", this.getDepth());
        b && Y(a, "labelledby", b.id);
        (a = this.getIconElement()) && rf(a, "presentation");
        (a = this.getExpandIconElement()) && rf(a, "presentation");
        if (a = this.getChildrenElement())
            if (rf(a, "group"), a.hasChildNodes())
                for (a = this.getChildCount(), b = 1; b <= a; b++) {
                    var c = this.getChildAt(b - 1).getElement();
                    B(c, "The child element cannot be null");
                    Y(c, "setsize", a);
                    Y(c, "posinset", b)
                }
    }
};
e.createDom = function() {
    var a = this.getDomHelper().htmlToDocumentFragment(Mf(this.toSafeHtml()));
    this.setElementInternal(a)
};
e.enterDocument = function() {
    yg.superClass_.enterDocument.call(this);
    zg[this.getId()] = this;
    this.initAccessibility()
};
e.exitDocument = function() {
    yg.superClass_.exitDocument.call(this);
    delete zg[this.getId()]
};
e.addChildAt = function(a, b) {
    B(!a.getParent());
    nb(a, yg);
    var c = this.getChildAt(b - 1),
        d = this.getChildAt(b);
    yg.superClass_.addChildAt.call(this, a, b);
    a.previousSibling_ = c;
    a.nextSibling_ = d;
    c ? c.nextSibling_ = a : this.firstChild_ = a;
    d ? d.previousSibling_ = a : this.lastChild_ = a;
    var f = this.getTree();
    f && a.setTreeInternal(f);
    a.setDepth_(this.getDepth() + 1);
    if (this.getElement() && (this.updateExpandIcon(), this.getExpanded())) {
        f = this.getChildrenElement();
        a.getElement() || a.createDom();
        var g = a.getElement(),
            h = d && d.getElement();
        f.insertBefore(g, h);
        this.isInDocument() && a.enterDocument();
        d || (c ? c.updateExpandIcon() : (S(f, !0), this.setExpanded(this.getExpanded())))
    }
};
e.add = function(a, b) {
    B(!b || b.getParent() == this, "Can only add nodes before siblings");
    a.getParent() && a.getParent().removeChild(a);
    this.addChildAt(a, b ? this.indexOfChild(b) : this.getChildCount());
    return a
};
e.removeChild = function(a) {
    var b = this.getTree(),
        c = b ? b.getSelectedItem() : null;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), X(this.onTimeoutSelect_, 10, this)) : this.select();
    yg.superClass_.removeChild.call(this, a);
    this.lastChild_ == a && (this.lastChild_ = a.previousSibling_);
    this.firstChild_ == a && (this.firstChild_ = a.nextSibling_);
    a.previousSibling_ && (a.previousSibling_.nextSibling_ = a.nextSibling_);
    a.nextSibling_ && (a.nextSibling_.previousSibling_ = a.previousSibling_);
    c = a.isLastSibling();
    a.tree = null;
    a.depth_ = -1;
    if (b && (b.removeNode(this), this.isInDocument())) {
        b = this.getChildrenElement();
        if (a.isInDocument()) {
            var d = a.getElement();
            b.removeChild(d);
            a.exitDocument()
        }
        c && (c = this.getLastChild()) && c.updateExpandIcon();
        this.hasChildren() || (b.style.display = "none", this.updateExpandIcon(), this.updateIcon_())
    }
    return a
};
e.remove = yg.prototype.removeChild;
e.onTimeoutSelect_ = function() {
    this.select()
};
e.getDepth = function() {
    var a = this.depth_;
    0 > a && (a = this.computeDepth_(), this.setDepth_(a));
    return a
};
e.computeDepth_ = function() {
    var a = this.getParent();
    return a ? a.getDepth() + 1 : 0
};
e.setDepth_ = function(a) {
    if (a != this.depth_) {
        this.depth_ = a;
        var b = this.getRowElement();
        if (b) {
            var c = this.getPixelIndent_() + "px";
            this.isRightToLeft() ? b.style.paddingRight = c : b.style.paddingLeft = c
        }
        this.forEachChild(function(b) {
            b.setDepth_(a + 1)
        })
    }
};
e.contains = function(a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
e.getChildren = function() {
    var a = [];
    this.forEachChild(function(b) {
        a.push(b)
    });
    return a
};
e.getFirstChild = function() {
    return this.getChildAt(0)
};
e.getLastChild = function() {
    return this.getChildAt(this.getChildCount() - 1)
};
e.getPreviousSibling = function() {
    return this.previousSibling_
};
e.getNextSibling = function() {
    return this.nextSibling_
};
e.isLastSibling = function() {
    return !this.nextSibling_
};
e.isSelected = function() {
    return this.selected_
};
e.select = function() {
    var a = this.getTree();
    a && a.setSelectedItem(this)
};
e.setSelectedInternal = function(a) {
    if (this.selected_ != a) {
        this.selected_ = a;
        this.updateRow();
        var b = this.getElement();
        b && (Y(b, "selected", a), a && (a = this.getTree().getElement(), B(a, "The DOM element for the tree cannot be null"), Y(a, "activedescendant", this.getId())))
    }
};
e.getExpanded = function() {
    return this.expanded_
};
e.setExpandedInternal = function(a) {
    this.expanded_ = a
};
e.setExpanded = function(a) {
    var b = a != this.expanded_;
    if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.expanded_ = a;
        c = this.getTree();
        var d = this.getElement();
        if (this.hasChildren()) {
            if (!a && c && this.contains(c.getSelectedItem()) && this.select(), d) {
                if (c = this.getChildrenElement())
                    if (S(c, a), a && this.isInDocument() && !c.hasChildNodes()) {
                        var f = [];
                        this.forEachChild(function(a) {
                            f.push(a.toSafeHtml())
                        });
                        Vf(c, Sf(f));
                        this.forEachChild(function(a) {
                            a.enterDocument()
                        })
                    }
                this.updateExpandIcon()
            }
        } else(c =
            this.getChildrenElement()) && S(c, !1);
        d && (this.updateIcon_(), Y(d, "expanded", a));
        b && this.dispatchEvent(a ? "expand" : "collapse")
    }
};
e.toggle = function() {
    this.setExpanded(!this.getExpanded())
};
e.expand = function() {
    this.setExpanded(!0)
};
e.reveal = function() {
    var a = this.getParent();
    a && (a.setExpanded(!0), a.reveal())
};
e.toSafeHtml = function() {
    var a = this.getTree(),
        b = !a.getShowLines() || a == this.getParent() && !a.getShowRootLines() ? this.config_.cssChildrenNoLines : this.config_.cssChildren,
        a = this.getExpanded() && this.hasChildren(),
        b = {
            "class": b,
            style: this.getLineStyle() + (a ? "" : "display:none;")
        }, c = [];
    a && this.forEachChild(function(a) {
        c.push(a.toSafeHtml())
    });
    a = Tf("div", b, c);
    return Tf("div", {
        "class": this.config_.cssItem,
        id: this.getId()
    }, [this.getRowSafeHtml(), a])
};
e.getPixelIndent_ = function() {
    return Math.max(0, (this.getDepth() - 1) * this.config_.indentWidth)
};
e.getRowSafeHtml = function() {
    var a = "padding-" + (this.isRightToLeft() ? "right:" : "left:"),
        a = {
            "class": this.getRowClassName(),
            style: a + this.getPixelIndent_() + "px"
        }, b = [this.getExpandIconSafeHtml(), this.getIconSafeHtml(), this.getLabelSafeHtml()];
    return Tf("div", a, b)
};
e.getRowClassName = function() {
    return this.config_.cssTreeRow + (this.isSelected() ? " " + this.config_.cssSelectedRow : "")
};
e.getLabelSafeHtml = function() {
    var a = Tf("span", {
        "class": this.config_.cssItemLabel,
        title: this.getToolTip() || null
    }, this.getSafeHtml());
    return Sf(a, Tf("span", {}, this.getAfterLabelSafeHtml()))
};
e.getAfterLabelSafeHtml = function() {
    return this.afterLabelHtml_
};
e.getIconSafeHtml = function() {
    return Tf("span", {
        style: "display:inline-block",
        "class": this.getCalculatedIconClass()
    })
};
e.getExpandIconSafeHtml = function() {
    return Tf("span", {
        type: "expand",
        style: "display:inline-block",
        "class": this.getExpandIconClass()
    })
};
e.getExpandIconClass = function() {
    var a = this.getTree(),
        b = !a.getShowLines() || a == this.getParent() && !a.getShowRootLines(),
        c = this.config_,
        d = new wg;
    d.append(c.cssTreeIcon, " ", c.cssExpandTreeIcon, " ");
    if (this.hasChildren()) {
        var f = 0;
        a.getShowExpandIcons() && this.isUserCollapsible_ && (f = this.getExpanded() ? 2 : 1);
        b || (f = this.isLastSibling() ? f + 4 : f + 8);
        switch (f) {
            case 1:
                d.append(c.cssExpandTreeIconPlus);
                break;
            case 2:
                d.append(c.cssExpandTreeIconMinus);
                break;
            case 4:
                d.append(c.cssExpandTreeIconL);
                break;
            case 5:
                d.append(c.cssExpandTreeIconLPlus);
                break;
            case 6:
                d.append(c.cssExpandTreeIconLMinus);
                break;
            case 8:
                d.append(c.cssExpandTreeIconT);
                break;
            case 9:
                d.append(c.cssExpandTreeIconTPlus);
                break;
            case 10:
                d.append(c.cssExpandTreeIconTMinus);
                break;
            default:
                d.append(c.cssExpandTreeIconBlank)
        }
    } else b ? d.append(c.cssExpandTreeIconBlank) : this.isLastSibling() ? d.append(c.cssExpandTreeIconL) : d.append(c.cssExpandTreeIconT);
    return d.toString()
};
e.getLineStyle = function() {
    return "background-position:" + this.getLineStyle2() + ";"
};
e.getLineStyle2 = function() {
    return (this.isLastSibling() ? "-100" : (this.getDepth() - 1) * this.config_.indentWidth) + "px 0"
};
e.getElement = function() {
    var a = yg.superClass_.getElement.call(this);
    a || (a = this.getDomHelper().getElement(this.getId()), this.setElementInternal(a));
    return a
};
e.getRowElement = function() {
    var a = this.getElement();
    return a ? a.firstChild : null
};
e.getExpandIconElement = function() {
    var a = this.getRowElement();
    return a ? a.firstChild : null
};
e.getIconElement = function() {
    var a = this.getRowElement();
    return a ? a.childNodes[1] : null
};
e.getLabelElement = function() {
    var a = this.getRowElement();
    return a && a.lastChild ? a.lastChild.previousSibling : null
};
e.getChildrenElement = function() {
    var a = this.getElement();
    return a ? a.lastChild : null
};
e.getIconClass = function() {
    return this.iconClass_
};
e.getExpandedIconClass = function() {
    return this.expandedIconClass_
};
e.getText = function() {
    var a = Mf(this.html_);
    return Ya(a, "&") ? "document" in t ? Ta(a) : Wa(a) : a
};
e.getSafeHtml = function() {
    return this.html_
};
e.getToolTip = function() {
    return this.toolTip_
};
e.updateRow = function() {
    var a = this.getRowElement();
    a && (a.className = this.getRowClassName())
};
e.updateExpandIcon = function() {
    var a = this.getExpandIconElement();
    a && (a.className = this.getExpandIconClass());
    if (a = this.getChildrenElement()) a.style.backgroundPosition = this.getLineStyle2()
};
e.updateIcon_ = function() {
    this.getIconElement().className = this.getCalculatedIconClass()
};
e.onMouseDown = function(a) {
    "expand" == a.target.getAttribute("type") && this.hasChildren() ? this.isUserCollapsible_ && this.toggle() : (this.select(), this.updateRow())
};
e.onClick_ = ic;
e.onDoubleClick_ = function(a) {
    "expand" == a.target.getAttribute("type") && this.hasChildren() || this.isUserCollapsible_ && this.toggle()
};
e.onKeyDown = function(a) {
    var b = !0;
    switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            this.hasChildren() && (this.getExpanded() ? this.getFirstChild().select() : this.setExpanded(!0));
            break;
        case 37:
            if (a.altKey) break;
            if (this.hasChildren() && this.getExpanded() && this.isUserCollapsible_) this.setExpanded(!1);
            else {
                var c = this.getParent(),
                    d = this.getTree();
                c && (d.getShowRootNode() || c != d) && c.select()
            }
            break;
        case 40:
            (c = this.getNextShownNode()) && c.select();
            break;
        case 38:
            (c = this.getPreviousShownNode()) && c.select();
            break;
        default:
            b = !1
    }
    b && (a.preventDefault(), (d = this.getTree()) && d.clearTypeAhead());
    return b
};
e.getLastShownDescendant = function() {
    return this.getExpanded() && this.hasChildren() ? this.getLastChild().getLastShownDescendant() : this
};
e.getNextShownNode = function() {
    if (this.hasChildren() && this.getExpanded()) return this.getFirstChild();
    for (var a = this, b; a != this.getTree();) {
        b = a.getNextSibling();
        if (null != b) return b;
        a = a.getParent()
    }
    return null
};
e.getPreviousShownNode = function() {
    var a = this.getPreviousSibling();
    if (null != a) return a.getLastShownDescendant();
    var a = this.getParent(),
        b = this.getTree();
    return b.getShowRootNode() || a != b ? a : null
};
e.getClientData = yg.prototype.getModel;
e.setClientData = yg.prototype.setModel;
e.getConfig = function() {
    return this.config_
};
e.setTreeInternal = function(a) {
    this.tree != a && (this.tree = a, a.setNode(this), this.forEachChild(function(b) {
        b.setTreeInternal(a)
    }))
};
var Ag = function(a, b, c) {
    yg.call(this, a, b, c)
};
z(Ag, yg);
Ag.prototype.getTree = function() {
    if (this.tree) return this.tree;
    var a = this.getParent();
    return a && (a = a.getTree()) ? (this.setTreeInternal(a), a) : null
};
Ag.prototype.getCalculatedIconClass = function() {
    var a = this.getExpanded(),
        b = this.getExpandedIconClass();
    if (a && b) return b;
    b = this.getIconClass();
    if (!a && b) return b;
    b = this.getConfig();
    if (this.hasChildren()) {
        if (a && b.cssExpandedFolderIcon) return b.cssTreeIcon + " " + b.cssExpandedFolderIcon;
        if (!a && b.cssCollapsedFolderIcon) return b.cssTreeIcon + " " + b.cssCollapsedFolderIcon
    } else if (b.cssFileIcon) return b.cssTreeIcon + " " + b.cssFileIcon;
    return ""
};
var Bg = function(a, b, c) {
    yg.call(this, a, b, c);
    this.baseIndent_ = 0;
    b && b.baseIndent && (this.baseIndent_ = b.baseIndent)
};
z(Bg, Ag);
Bg.prototype.getPixelIndent_ = function() {
    return this.baseIndent_ + yg.prototype.getPixelIndent_.call(this)
};
var Cg = function(a, b) {
    U.call(this);
    a && this.attach(a, b)
};
z(Cg, U);
e = Cg.prototype;
e.element_ = null;
e.keyPressKey_ = null;
e.keyDownKey_ = null;
e.keyUpKey_ = null;
e.lastKey_ = -1;
e.keyCode_ = -1;
e.altKey_ = !1;
var Dg = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}, Eg = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, Fg = E || K && Zb("525"),
    Gg = Mb && J;
e = Cg.prototype;
e.handleKeyDown_ = function(a) {
    K && (17 == this.lastKey_ && !a.ctrlKey || 18 == this.lastKey_ && !a.altKey || Mb && 91 == this.lastKey_ && !a.metaKey) && (this.keyCode_ = this.lastKey_ = -1); - 1 == this.lastKey_ && (a.ctrlKey && 17 != a.keyCode ? this.lastKey_ = 17 : a.altKey && 18 != a.keyCode ? this.lastKey_ = 18 : a.metaKey && 91 != a.keyCode && (this.lastKey_ = 91));
    Fg && !jf(a.keyCode, this.lastKey_, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.keyCode_ = hf(a.keyCode), Gg && (this.altKey_ = a.altKey))
};
e.resetState = function() {
    this.keyCode_ = this.lastKey_ = -1
};
e.handleKeyup_ = function(a) {
    this.resetState();
    this.altKey_ = a.altKey
};
e.handleEvent = function(a) {
    var b = a.getBrowserEvent(),
        c, d, f = b.altKey;
    E && "keypress" == a.type ? (c = this.keyCode_, d = 13 != c && 27 != c ? b.keyCode : 0) : K && "keypress" == a.type ? (c = this.keyCode_, d = 0 <= b.charCode && 63232 > b.charCode && gf(c) ? b.charCode : 0) : Qb ? (c = this.keyCode_, d = gf(c) ? b.keyCode : 0) : (c = b.keyCode || this.keyCode_, d = b.charCode || 0, Gg && (f = this.altKey_), Mb && 63 == d && 224 == c && (c = 191));
    var g = c = hf(c),
        h = b.keyIdentifier;
    c ? 63232 <= c && c in Dg ? g = Dg[c] : 25 == c && a.shiftKey && (g = 9) : h && h in Eg && (g = Eg[h]);
    a = g == this.lastKey_;
    this.lastKey_ =
        g;
    b = new Hg(g, d, a, b);
    b.altKey = f;
    this.dispatchEvent(b)
};
e.getElement = function() {
    return this.element_
};
e.attach = function(a, b) {
    this.keyUpKey_ && this.detach();
    this.element_ = a;
    this.keyPressKey_ = N(this.element_, "keypress", this, b);
    this.keyDownKey_ = N(this.element_, "keydown", this.handleKeyDown_, b, this);
    this.keyUpKey_ = N(this.element_, "keyup", this.handleKeyup_, b, this)
};
e.detach = function() {
    this.keyPressKey_ && (Rc(this.keyPressKey_), Rc(this.keyDownKey_), Rc(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null);
    this.element_ = null;
    this.keyCode_ = this.lastKey_ = -1
};
e.disposeInternal = function() {
    Cg.superClass_.disposeInternal.call(this);
    this.detach()
};
var Hg = function(a, b, c, d) {
    lc.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
};
z(Hg, lc);
var Ig = function(a) {
    if ("function" == typeof a.getValues) return a.getValues();
    if (w(a)) return a.split("");
    if (la(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return rc(a)
}, Jg = function(a) {
        if ("function" == typeof a.getKeys) return a.getKeys();
        if ("function" != typeof a.getValues) {
            if (la(a) || w(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            return sc(a)
        }
    }, Kg = function(a, b, c) {
        if ("function" == typeof a.forEach) a.forEach(b, c);
        else if (la(a) || w(a)) D(a, b, c);
        else
            for (var d = Jg(a), f = Ig(a), g = f.length,
                    h = 0; h < g; h++) b.call(c, f[h], d && d[h], a)
    };
var Mg = function(a, b) {
    try {
        var c;
        var d = da("window.location.href");
        if (w(a)) c = {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: d,
            stack: "Not available"
        };
        else {
            var f, g, h = !1;
            try {
                f = a.lineNumber || a.line || "Not available"
            } catch (k) {
                f = "Not available", h = !0
            }
            try {
                g = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || d
            } catch (m) {
                g = "Not available", h = !0
            }
            c = !h && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
                message: a.message || "Not available",
                name: a.name || "UnknownError",
                lineNumber: f,
                fileName: g,
                stack: a.stack || "Not available"
            }
        }
        return "Message: " + Ra(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + Ra(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ra(Lg(b) + "-> ")
    } catch (p) {
        return "Exception trying to expose exception! You win, we lose. " + p
    }
}, Lg = function(a) {
        var b;
        b || (b = Ng(a || arguments.callee.caller, []));
        return b
    }, Ng = function(a, b) {
        var c = [];
        if (xb(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(Og(a) +
                "(");
            for (var d = a.arguments, f = 0; d && f < d.length; f++) {
                0 < f && c.push(", ");
                var g;
                g = d[f];
                switch (typeof g) {
                    case "object":
                        g = g ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        g = String(g);
                        break;
                    case "boolean":
                        g = g ? "true" : "false";
                        break;
                    case "function":
                        g = (g = Og(g)) ? g : "[fn]";
                        break;
                    default:
                        g = typeof g
                }
                40 < g.length && (g = g.substr(0, 40) + "...");
                c.push(g)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(Ng(a.caller, b))
            } catch (h) {
                c.push("[exception trying to get caller]\n")
            }
        } else a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    },
    Og = function(a) {
        if (Pg[a]) return Pg[a];
        a = String(a);
        if (!Pg[a]) {
            var b = /function ([^\(]+)/.exec(a);
            Pg[a] = b ? b[1] : "[Anonymous]"
        }
        return Pg[a]
    }, Pg = {};
var Qg = function(a, b, c, d, f) {
    this.reset(a, b, c, d, f)
};
Qg.prototype.exception_ = null;
Qg.prototype.exceptionText_ = null;
var Rg = 0;
e = Qg.prototype;
e.reset = function(a, b, c, d, f) {
    "number" == typeof f || Rg++;
    d || Aa();
    this.level_ = a;
    this.msg_ = b;
    delete this.exception_;
    delete this.exceptionText_
};
e.setException = function(a) {
    this.exception_ = a
};
e.setExceptionText = function(a) {
    this.exceptionText_ = a
};
e.setLevel = function(a) {
    this.level_ = a
};
e.getMessage = function() {
    return this.msg_
};
var Sg = function(a) {
    this.name_ = a;
    this.handlers_ = this.children_ = this.level_ = this.parent_ = null
}, Tg = function(a, b) {
        this.name = a;
        this.value = b
    };
Tg.prototype.toString = function() {
    return this.name
};
var Ug = new Tg("SEVERE", 1E3),
    Vg = new Tg("WARNING", 900),
    Wg = new Tg("CONFIG", 700),
    Xg = new Tg("FINE", 500);
e = Sg.prototype;
e.getParent = function() {
    return this.parent_
};
e.getChildren = function() {
    this.children_ || (this.children_ = {});
    return this.children_
};
e.setLevel = function(a) {
    this.level_ = a
};
e.getEffectiveLevel = function() {
    if (this.level_) return this.level_;
    if (this.parent_) return this.parent_.getEffectiveLevel();
    jb("Root logger has no level set.");
    return null
};
e.isLoggable = function(a) {
    return a.value >= this.getEffectiveLevel().value
};
e.log = function(a, b, c) {
    this.isLoggable(a) && (na(b) && (b = b()), this.doLogRecord_(this.getLogRecord(a, b, c, Sg.prototype.log)))
};
e.getLogRecord = function(a, b, c, d) {
    a = new Qg(a, String(b), this.name_);
    c && (a.setException(c), a.setExceptionText(Mg(c, d || Sg.prototype.getLogRecord)));
    return a
};
e.severe = function(a, b) {
    this.log(Ug, a, b)
};
e.warning = function(a, b) {
    this.log(Vg, a, b)
};
e.config = function(a, b) {
    this.log(Wg, a, b)
};
e.fine = function(a, b) {
    this.log(Xg, a, b)
};
e.doLogRecord_ = function(a) {
    var b = "log:" + a.getMessage();
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for (b = this; b;) b.callPublish_(a), b = b.getParent()
};
e.callPublish_ = function(a) {
    if (this.handlers_)
        for (var b = 0, c; c = this.handlers_[b]; b++) c(a)
};
e.setParent_ = function(a) {
    this.parent_ = a
};
e.addChild_ = function(a, b) {
    this.getChildren()[a] = b
};
var Yg = {}, Zg = null,
    $g = function(a) {
        Zg || (Zg = new Sg(""), Yg[""] = Zg, Zg.setLevel(Wg));
        var b;
        if (!(b = Yg[a])) {
            b = new Sg(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1),
                c = $g(a.substr(0, c));
            c.addChild_(d, b);
            b.setParent_(c);
            Yg[a] = b
        }
        return b
    };
var ah = function(a, b) {
    var c = $g(a);
    b && c && c.setLevel(b);
    return c
}, bh = function(a, b, c) {
        a && a.fine(b, c)
    };
var ch = function(a) {
    this.value_ = void 0;
    this.childNodes_ = {};
    a && this.setAll(a)
};
e = ch.prototype;
e.set = function(a, b) {
    this.setOrAdd_(a, b, !1)
};
e.add = function(a, b) {
    this.setOrAdd_(a, b, !0)
};
e.setOrAdd_ = function(a, b, c) {
    for (var d = this, f = 0; f < a.length; f++) {
        var g = a.charAt(f);
        d.childNodes_[g] || (d.childNodes_[g] = new ch);
        d = d.childNodes_[g]
    }
    if (c && void 0 !== d.value_) throw Error('The collection already contains the key "' + a + '"');
    d.value_ = b
};
e.setAll = function(a) {
    var b = Jg(a);
    a = Ig(a);
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
};
e.getChildNode_ = function(a) {
    for (var b = this, c = 0; c < a.length; c++)
        if (b = b.childNodes_[a.charAt(c)], !b) return;
    return b
};
e.get = function(a) {
    return (a = this.getChildNode_(a)) ? a.value_ : void 0
};
e.getValues = function() {
    var a = [];
    this.getValuesInternal_(a);
    return a
};
e.getValuesInternal_ = function(a) {
    void 0 !== this.value_ && a.push(this.value_);
    for (var b in this.childNodes_) this.childNodes_[b].getValuesInternal_(a)
};
e.getKeys = function(a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var f = a.charAt(d);
            if (!c.childNodes_[f]) return [];
            c = c.childNodes_[f]
        }
        c.getKeysInternal_(a, b)
    } else this.getKeysInternal_("", b);
    return b
};
e.getKeysInternal_ = function(a, b) {
    void 0 !== this.value_ && b.push(a);
    for (var c in this.childNodes_) this.childNodes_[c].getKeysInternal_(a + c, b)
};
e.containsKey = function(a) {
    return void 0 !== this.get(a)
};
e.clear = function() {
    this.childNodes_ = {};
    this.value_ = void 0
};
e.remove = function(a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
        var f = a.charAt(d);
        if (!b.childNodes_[f]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, f]);
        b = b.childNodes_[f]
    }
    a = b.value_;
    for (delete b.value_; 0 < c.length;)
        if (f = c.pop(), b = f[0], f = f[1], b.childNodes_[f].isEmpty()) delete b.childNodes_[f];
        else break;
    return a
};
e.clone = function() {
    return new ch(this)
};
e.isEmpty = function() {
    return void 0 === this.value_ && uc(this.childNodes_)
};
var dh = function() {
    this.nodeMap_ = new ch
};
e = dh.prototype;
e.buffer_ = "";
e.matchingLabels_ = null;
e.matchingNodes_ = null;
e.matchingLabelIndex_ = 0;
e.matchingNodeIndex_ = 0;
e.handleNavigation = function(a) {
    var b = !1;
    switch (a.keyCode) {
        case 40:
        case 38:
            a.ctrlKey && (this.jumpTo_(40 == a.keyCode ? 1 : -1), b = !0);
            break;
        case 8:
            a = this.buffer_.length - 1;
            b = !0;
            0 < a ? (this.buffer_ = this.buffer_.substring(0, a), this.jumpToLabel_(this.buffer_)) : 0 == a ? this.buffer_ = "" : b = !1;
            break;
        case 27:
            this.buffer_ = "", b = !0
    }
    return b
};
e.handleTypeAheadChar = function(a) {
    var b = !1;
    a.ctrlKey || a.altKey || (a = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a) && (" " != a || this.buffer_) && (this.buffer_ += a, b = this.jumpToLabel_(this.buffer_)));
    return b
};
e.setNodeInMap = function(a) {
    var b = a.getText();
    if (b && !Fa(bb(b))) {
        var b = b.toLowerCase(),
            c = this.nodeMap_.get(b);
        c ? c.push(a) : this.nodeMap_.set(b, [a])
    }
};
e.removeNodeFromMap = function(a) {
    var b = a.getText();
    if (b && !Fa(bb(b))) {
        var b = b.toLowerCase(),
            c = this.nodeMap_.get(b);
        c && (zb(c, a), c.length && this.nodeMap_.remove(b))
    }
};
e.jumpToLabel_ = function(a) {
    var b = !1;
    (a = this.nodeMap_.getKeys(a)) && a.length && (this.matchingLabelIndex_ = this.matchingNodeIndex_ = 0, b = this.nodeMap_.get(a[0]), b = this.selectMatchingNode_(b)) && (this.matchingLabels_ = a);
    return b
};
e.jumpTo_ = function(a) {
    var b = !1,
        c = this.matchingLabels_;
    if (c) {
        var b = null,
            d = !1;
        if (this.matchingNodes_) {
            var f = this.matchingNodeIndex_ + a;
            0 <= f && f < this.matchingNodes_.length ? (this.matchingNodeIndex_ = f, b = this.matchingNodes_) : d = !0
        }
        b || (f = this.matchingLabelIndex_ + a, 0 <= f && f < c.length && (this.matchingLabelIndex_ = f), c.length > this.matchingLabelIndex_ && (b = this.nodeMap_.get(c[this.matchingLabelIndex_])), b && b.length && d && (this.matchingNodeIndex_ = -1 == a ? b.length - 1 : 0));
        if (b = this.selectMatchingNode_(b)) this.matchingLabels_ =
            c
    }
    return b
};
e.selectMatchingNode_ = function(a) {
    var b;
    a && (this.matchingNodeIndex_ < a.length && (b = a[this.matchingNodeIndex_], this.matchingNodes_ = a), b && (b.reveal(), b.select()));
    return !!b
};
e.clear = function() {
    this.buffer_ = ""
};
var eh = function(a, b, c) {
    yg.call(this, a, b, c);
    this.setExpandedInternal(!0);
    this.setSelectedInternal(!0);
    this.selectedItem_ = this;
    this.typeAhead_ = new dh;
    if (E) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (d) {
        (a = this.logger_) && a.warning("Failed to enable background image cache", void 0)
    }
};
z(eh, yg);
e = eh.prototype;
e.keyHandler_ = null;
e.focusHandler_ = null;
e.logger_ = ah("goog.ui.tree.TreeControl");
e.focused_ = !1;
e.focusedNode_ = null;
e.showLines_ = !0;
e.showExpandIcons_ = !0;
e.showRootNode_ = !0;
e.showRootLines_ = !0;
e.getTree = function() {
    return this
};
e.getDepth = function() {
    return 0
};
e.reveal = function() {};
e.handleFocus_ = function() {
    this.focused_ = !0;
    xf(B(this.getElement()), "focused");
    this.selectedItem_ && this.selectedItem_.select()
};
e.handleBlur_ = function() {
    this.focused_ = !1;
    zf(B(this.getElement()), "focused")
};
e.hasFocus = function() {
    return this.focused_
};
e.getExpanded = function() {
    return !this.showRootNode_ || eh.superClass_.getExpanded.call(this)
};
e.setExpanded = function(a) {
    this.showRootNode_ ? eh.superClass_.setExpanded.call(this, a) : this.setExpandedInternal(a)
};
e.getExpandIconSafeHtml = function() {
    return Uf
};
e.getIconElement = function() {
    var a = this.getRowElement();
    return a ? a.firstChild : null
};
e.getExpandIconElement = function() {
    return null
};
e.updateExpandIcon = function() {};
e.getRowClassName = function() {
    return eh.superClass_.getRowClassName.call(this) + (this.showRootNode_ ? "" : " " + this.getConfig().cssHideRoot)
};
e.getCalculatedIconClass = function() {
    var a = this.getExpanded(),
        b = this.getExpandedIconClass();
    if (a && b) return b;
    b = this.getIconClass();
    if (!a && b) return b;
    b = this.getConfig();
    return a && b.cssExpandedRootIcon ? b.cssTreeIcon + " " + b.cssExpandedRootIcon : !a && b.cssCollapsedRootIcon ? b.cssTreeIcon + " " + b.cssCollapsedRootIcon : ""
};
e.setSelectedItem = function(a) {
    if (this.selectedItem_ != a) {
        var b = !1;
        this.selectedItem_ && (b = this.selectedItem_ == this.focusedNode_, this.selectedItem_.setSelectedInternal(!1));
        if (this.selectedItem_ = a) a.setSelectedInternal(!0), b && a.select();
        this.dispatchEvent("change")
    }
};
e.getSelectedItem = function() {
    return this.selectedItem_
};
e.setShowLines = function(a) {
    this.showLines_ != a && (this.showLines_ = a, this.isInDocument() && this.updateLinesAndExpandIcons_())
};
e.getShowLines = function() {
    return this.showLines_
};
e.updateLinesAndExpandIcons_ = function() {
    function a(f) {
        var g = f.getChildrenElement();
        if (g) {
            var h = !c || b == f.getParent() && !d ? f.getConfig().cssChildrenNoLines : f.getConfig().cssChildren;
            g.className = h;
            if (g = f.getExpandIconElement()) g.className = f.getExpandIconClass()
        }
        f.forEachChild(a)
    }
    var b = this,
        c = b.getShowLines(),
        d = b.getShowRootLines();
    a(this)
};
e.getShowRootLines = function() {
    return this.showRootLines_
};
e.getShowExpandIcons = function() {
    return this.showExpandIcons_
};
e.getShowRootNode = function() {
    return this.showRootNode_
};
e.initAccessibility = function() {
    eh.superClass_.initAccessibility.call(this);
    var a = this.getElement();
    B(a, "The DOM element for the tree cannot be null.");
    rf(a, "tree");
    Y(a, "labelledby", this.getLabelElement().id)
};
e.enterDocument = function() {
    eh.superClass_.enterDocument.call(this);
    var a = this.getElement();
    a.className = this.getConfig().cssRoot;
    a.setAttribute("hideFocus", "true");
    this.attachEvents_();
    this.initAccessibility()
};
e.exitDocument = function() {
    eh.superClass_.exitDocument.call(this);
    this.detachEvents_()
};
e.attachEvents_ = function() {
    var a = this.getElement();
    a.tabIndex = 0;
    var b = this.keyHandler_ = new Cg(a),
        c = this.focusHandler_ = new cg(a);
    this.getHandler().listen(c, "focusout", this.handleBlur_).listen(c, "focusin", this.handleFocus_).listen(b, "key", this.handleKeyEvent).listen(a, "mousedown", this.handleMouseEvent_).listen(a, "click", this.handleMouseEvent_).listen(a, "dblclick", this.handleMouseEvent_)
};
e.detachEvents_ = function() {
    this.keyHandler_.dispose();
    this.keyHandler_ = null;
    this.focusHandler_.dispose();
    this.focusHandler_ = null
};
e.handleMouseEvent_ = function(a) {
    bh(this.logger_, "Received event " + a.type);
    var b = this.getNodeFromEvent_(a);
    if (b) switch (a.type) {
        case "mousedown":
            b.onMouseDown(a);
            break;
        case "click":
            b.onClick_(a);
            break;
        case "dblclick":
            b.onDoubleClick_(a)
    }
};
e.handleKeyEvent = function(a) {
    var b = !1;
    (b = this.typeAhead_.handleNavigation(a) || this.selectedItem_ && this.selectedItem_.onKeyDown(a) || this.typeAhead_.handleTypeAheadChar(a)) && a.preventDefault();
    return b
};
e.getNodeFromEvent_ = function(a) {
    var b = null;
    for (a = a.target; null != a;) {
        if (b = zg[a.id]) return b;
        if (a == this.getElement()) break;
        a = a.parentNode
    }
    return null
};
e.createNode = function(a) {
    return new Ag(a || Uf, this.getConfig(), this.getDomHelper())
};
e.setNode = function(a) {
    this.typeAhead_.setNodeInMap(a)
};
e.removeNode = function(a) {
    this.typeAhead_.removeNodeFromMap(a)
};
e.clearTypeAhead = function() {
    this.typeAhead_.clear()
};
var xg = {
    indentWidth: 19,
    cssRoot: "goog-tree-root goog-tree-item",
    cssHideRoot: "goog-tree-hide-root",
    cssItem: "goog-tree-item",
    cssChildren: "goog-tree-children",
    cssChildrenNoLines: "goog-tree-children-nolines",
    cssTreeRow: "goog-tree-row",
    cssItemLabel: "goog-tree-item-label",
    cssTreeIcon: "goog-tree-icon",
    cssExpandTreeIcon: "goog-tree-expand-icon",
    cssExpandTreeIconPlus: "goog-tree-expand-icon-plus",
    cssExpandTreeIconMinus: "goog-tree-expand-icon-minus",
    cssExpandTreeIconTPlus: "goog-tree-expand-icon-tplus",
    cssExpandTreeIconTMinus: "goog-tree-expand-icon-tminus",
    cssExpandTreeIconLPlus: "goog-tree-expand-icon-lplus",
    cssExpandTreeIconLMinus: "goog-tree-expand-icon-lminus",
    cssExpandTreeIconT: "goog-tree-expand-icon-t",
    cssExpandTreeIconL: "goog-tree-expand-icon-l",
    cssExpandTreeIconBlank: "goog-tree-expand-icon-blank",
    cssExpandedFolderIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedFolderIcon: "goog-tree-collapsed-folder-icon",
    cssFileIcon: "goog-tree-file-icon",
    cssExpandedRootIcon: "goog-tree-expanded-folder-icon",
    cssCollapsedRootIcon: "goog-tree-collapsed-folder-icon",
    cssSelectedRow: "selected"
};
var fh = function(a, b, c) {
    eh.call(this, a, b, c);
    this.baseIndent_ = 0;
    b && b.baseIndent && (this.baseIndent_ = b.baseIndent)
};
z(fh, eh);
fh.prototype.getPixelIndent_ = function() {
    return this.baseIndent_ + yg.prototype.getPixelIndent_.call(this)
};
fh.prototype.createNode = function(a) {
    return new Bg(a || "", this.getConfig(), this.getDomHelper())
};
var gh = function(a, b, c, d) {
    sg.call(this, a, b, c);
    this.rootId_ = d;
    this.minTreeBoxWidth_ = 250;
    this.selectedNode_ = this.keyHandler_ = this.eventHandler_ = this.tree_ = null
};
z(gh, sg);
e = gh.prototype;
e.setLabel = function(a) {
    a.htmlFor = this.getHiddenBox().id
};
e.getValue = function() {
    var a = this.getHiddenBox().value;
    return a == this.rootId_ ? "" : a
};
e.canonicalizeValue_ = function(a) {
    a = null != a && "" != a ? a : this.rootId_;
    this.isFullPathId_(a) || (a = (a = this.searchNode_(a)) ? this.buildAncestorsPathString(a) : this.rootId_);
    null == this.getNode_(a) && (a = this.rootId_);
    return a
};
e.getAncestorsPath_ = function(a) {
    for (var b = [a.getClientData()]; null != a.getParent();) a = a.getParent(), b.unshift(a.getClientData());
    return this.buildAncestorsPathString(b)
};
e.buildAncestorsPathString = function(a) {
    return a.join("-")
};
e.extractAncestorsPath = function(a) {
    return a.split("-")
};
e.setValue = function(a) {
    a = this.canonicalizeValue_(a);
    var b = this.getNode_(a);
    this.getHiddenBox().value = a;
    this.updateAnchorCaption_(b);
    if (b!=null)
    b.treeNode && (b.treeNode.reveal(), this.tree_.setSelectedItem(b.treeNode), this.selectedNode_ && (this.selectedNode_.getRowElement().style.backgroundColor = ""), this.selectedNode_ = b.treeNode, this.selectedNode_.getRowElement().style.backgroundColor = "#eee")
};
e.updateAnchorCaption_ = function(a) {
	if (a!=null)
    this.setAnchorCaption(a.name, a.id == this.rootId_)
};
e.reset = function() {
    this.setValue("")
};
e.isFullPathId_ = function(a) {
    return 0 <= a.indexOf("-") || a == this.rootId_
};
e.getNode_ = function(a) {
    a = this.extractAncestorsPath(a);
    var b = this.getTreeData();
    if (a[0] != this.rootId_) return null;
    a.shift();
    for (var c; 0 < a.length;) {
        c = !1;
        for (var d in b.children) {
            var f = b.children[d];
            if (f.id == a[0]) {
                b = f;
                c = !0;
                break
            }
        }
        if (!c) return null;
        a.shift()
    }
    return b
};
e.searchNode_ = function(a, b) {
    var c = null;
    b || (b = this.getTreeData());
    if (b.id == a && b.prime) c = [];
    else if (b.children)
        for (var d in b.children)
            if (c = this.searchNode_(a, b.children[d])) break;
    c && c.unshift(b.id);
    return c
};
e.getTreeData = function() {
    throw "unimplemented";
};
e.initTree = function(a) {
    this.getTreeBoxContent_() && (this.setValue(this.getValue()), this.tree_ = new fh(a.name, this.getTreeControlConfig_()), this.prepareTreeNode_(this.tree_, a), this.tree_.setShowLines(!1), Ad(this.getTreeBoxContent_()), this.buildNodes_(this.tree_, a.children), this.tree_.render(this.getTreeBoxContent_()), this.selectedNode_ || this.setValue(""), this.eventHandler_ = new Ye(this), this.keyHandler_ = new Cg(this.tree_.getElement()), this.eventHandler_.listen(this.keyHandler_, "key", this.handleKeyEvent_),
        this.minTreeBoxWidth_ = De(this.getTreeBoxContent_()).width, this.eventHandler_.listenWithScope(this.tree_, ["expand", "collapse"], this.handleTreeResize_, !1, this), this.selectedNode_.getRowElement().style.backgroundColor = "#eee", this.showRenderedTree_())
};
e.getTreeControlConfig_ = function() {
    var a = xc(xg);
    a.indentWidth = 16;
    a.baseIndent = 16;
    return a
};
e.handleTreeResize_ = function() {
    this.setPopupWidth(this.minTreeBoxWidth_);
    var a = De(this.getPopup().getElement()).width,
        b = this.getTreeBoxContent_().scrollWidth,
        c = document.createElement("div");
    c.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
    var d = document.createElement("div");
    Be(d, "200px", "200px");
    c.appendChild(d);
    document.body.appendChild(c);
    d = c.offsetWidth - c.clientWidth;
    Cd(c);
    b = b + d + 16;
    b > a && this.setPopupWidth(b);
    this.getPopup().reposition()
};
e.handleKeyEvent_ = function(a) {
    switch (a.keyCode) {
        case 13:
            this.handleSelect_(this.tree_.getSelectedItem());
            this.tree_.clearTypeAhead();
            a.preventDefault();
            break;
        case 9:
            this.tree_.clearTypeAhead();
            this.setVisible(!1);
            a.preventDefault();
            break;
        case 34:
        case 33:
        case 36:
        case 35:
            a.preventDefault();
            break;
        case 27:
            this.setVisible(!1);
            break;
        default:
            X(this.repositionTree_, 50, this)
    }
};
e.repositionTree_ = function() {
    var a = this.getTreeBoxContent_(),
        b = a.scrollTop,
        c = this.tree_.getSelectedItem().getRowElement(),
        d = c.offsetTop,
        f = a.clientHeight,
        c = c.offsetHeight;
    b > d ? a.scrollTop = d : d + c - b > f && (a.scrollTop = d + c - f)
};
e.buildNodes_ = function(a, b) {
    for (var c = 0, d; d = b[c]; c++) {
        var f = a.getTree().createNode(Ra(d.name));
        a.add(f);
        this.prepareTreeNode_(f, d);
        d.children && this.buildNodes_(f, d.children)
    }
};
e.prepareTreeNode_ = function(a, b) {
    a.setClientData(b.id);
    a.onClick_ = x(this.handleTreeClick_, this, this.getAncestorsPath_(a), a);
    this.getAncestorsPath_(a) != this.getValue() || this.selectedNode_ || (a.reveal(), this.tree_.setSelectedItem(a), this.selectedNode_ = a);
    b.treeNode = a
};
e.handleTreeClick_ = function(a, b, c) {
    xb(fd(c.target), "goog-tree-icon") || this.handleSelect_(b)
};
e.handleSelect_ = function(a) {
    this.setValue(this.getAncestorsPath_(a));
    this.setVisible(!1);
    this.fireSelectEvent()
};
e.getTreeBoxContent_ = function() {
    return Q(this.baseId_ + "_TreeContent")
};
e.getTreeBoxMask_ = function() {
    return Q(this.baseId_ + "_TreeMask")
};
e.getHiddenBox = function() {
    return Q(this.baseId_ + "_Hidden")
};
e.handlePopupAnchorClick = function() {
    this.toggleTree()
};
e.toggleTree = function() {
    var a = this.getPopup();
    a.isOrWasRecentlyVisible && a.isOrWasRecentlyVisible() || a.isVisible() ? this.setVisible(!1) : this.showTree_()
};
e.showTree_ = function() {
    this.tree_ ? this.showRenderedTree_() : (this.setVisible(!0), X(x(this.initTree, this, this.getTreeData()), 1))
};
e.showRenderedTree_ = function() {
    this.setVisible(!0);
    this.tree_.setSelectedItem(this.selectedNode_);
    this.selectedNode_.reveal();
    X(this.repositionTree_, 10, this);
    this.handleTreeResize_();
    this.updateTreeHeight_()
};
e.updateTreeHeight_ = function() {
    var a;
    a = this.getContentElement();
    var b = kd(a),
        c = E && a.currentStyle;
    c && ld(b).isCss1CompatMode() && "auto" != c.width && "auto" != c.height && !c.boxSizing ? (b = Ie(a, c.width, "width", "pixelWidth"), a = Ie(a, c.height, "height", "pixelHeight"), a = new Zc(b, a)) : (c = new Zc(a.offsetWidth, a.offsetHeight), b = Le(a), a = ue(a), a = new Zc(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom));
    a = a.height;
    for (var c = 0, b = Dd(this.getContentElement()), d = 0; d < b.length; d++) b[d] != this.getTreeBoxContent_() &&
        b[d] != this.getTreeBoxMask_() && (c += De(b[d]).height);
    a -= c;
    this.getTreeBoxContent_().style.height = me(a, !0);
    this.getTreeBoxMask_().style.height = me(a, !0)
};
e.resetTreeData = function() {
    this.selectedNode_ = this.keyHandler_ = this.eventHandler_ = this.tree_ = null
};
var hh = function(a) {
    var b = xc(a);
    if (a!=null&&a.children) {
        b.children = [];
        for (var c = 0; c < a.children.length; c++) b.children.push(hh(a.children[c]))
    }
    return b
};
var ih = function(a, b, c, d) {
    Ve.call(this, a, b, c || d);
    (c || d) && this.setLastResortOverflow(65 | (d ? 32 : 132))
};
z(ih, Ve);
var jh, kh;
kh = jh = !1;
var lh = Jb;
lh && (-1 != lh.indexOf("Firefox") || -1 != lh.indexOf("Camino") || (-1 != lh.indexOf("iPhone") || -1 != lh.indexOf("iPod") ? jh = !0 : -1 != lh.indexOf("iPad") && (kh = !0)));
var mh = jh,
    nh = kh;
var oh = function() {}, ph;
ga(oh);
var qh = function(a, b) {
    var c = new a;
    c.getCssClass = function() {
        return b
    };
    return c
}, rh = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
e = oh.prototype;
e.getAriaRole = function() {};
e.createDom = function(a) {
    var b = a.getDomHelper().createDom("div", this.getClassNames(a).join(" "), a.getContent());
    this.setAriaStates(a, b);
    return b
};
e.getContentElement = function(a) {
    return a
};
e.enableClassName = function(a, b, c) {
    if (a = a.getElement ? a.getElement() : a) {
        var d = [b];
        E && !Zb("7") && (d = this.getAppliedCombinedClassNames_(uf(a), b), d.push(b));
        (c ? yf : Af)(a, d)
    }
};
e.enableExtraClassName = function(a, b, c) {
    this.enableClassName(a, b, c)
};
e.canDecorate = function() {
    return !0
};
e.decorate = function(a, b) {
    b.id && a.setId(b.id);
    var c = this.getContentElement(b);
    c && c.firstChild ? a.setContentInternal(c.firstChild.nextSibling ? Bb(c.childNodes) : c.firstChild) : a.setContentInternal(null);
    var d = 0,
        f = this.getCssClass(),
        g = this.getStructuralCssClass(),
        h = !1,
        k = !1,
        c = !1,
        m = Bb(uf(b));
    D(m, function(a) {
        h || a != f ? k || a != g ? d |= this.getStateFromClass(a) : k = !0 : (h = !0, g == f && (k = !0))
    }, this);
    a.setStateInternal(d);
    h || (m.push(f), g == f && (k = !0));
    k || m.push(g);
    var p = a.getExtraClassNames();
    p && m.push.apply(m, p);
    if (E && !Zb("7")) {
        var l =
            this.getAppliedCombinedClassNames_(m);
        0 < l.length && (m.push.apply(m, l), c = !0)
    }
    h && k && !p && !c || vf(b, m.join(" "));
    this.setAriaStates(a, b);
    return b
};
e.initializeDom = function(a) {
    a.isRightToLeft() && this.setRightToLeft(a.getElement(), !0);
    a.isEnabled() && this.setFocusable(a, a.isVisible())
};
e.setAriaRole = function(a, b) {
    var c = b || this.getAriaRole();
    if (c) {
        B(a, "The element passed as a first parameter cannot be null.");
        var d = a.getAttribute("role") || null;
        c != d && rf(a, c)
    }
};
e.setAriaStates = function(a, b) {
    B(a);
    B(b);
    a.isVisible() || Y(b, "hidden", !a.isVisible());
    a.isEnabled() || this.updateAriaState(b, 1, !a.isEnabled());
    a.isSupportedState(8) && this.updateAriaState(b, 8, a.isSelected());
    a.isSupportedState(16) && this.updateAriaState(b, 16, a.isChecked());
    a.isSupportedState(64) && this.updateAriaState(b, 64, a.isOpen())
};
e.setAllowTextSelection = function(a, b) {
    He(a, !b, !E && !Qb)
};
e.setRightToLeft = function(a, b) {
    this.enableClassName(a, this.getStructuralCssClass() + "-rtl", b)
};
e.isFocusable = function(a) {
    var b;
    return a.isSupportedState(32) && (b = a.getKeyEventTarget()) ? Pd(b) && Qd(b) : !1
};
e.setFocusable = function(a, b) {
    var c;
    if (a.isSupportedState(32) && (c = a.getKeyEventTarget())) {
        if (!b && a.isFocused()) {
            try {
                c.blur()
            } catch (d) {}
            a.isFocused() && a.handleBlur(null)
        }(Pd(c) && Qd(c)) != b && Od(c, b)
    }
};
e.setVisible = function(a, b) {
    S(a, b);
    a && Y(a, "hidden", !b)
};
e.setState = function(a, b, c) {
    var d = a.getElement();
    if (d) {
        var f = this.getClassForState(b);
        f && this.enableClassName(a, f, c);
        this.updateAriaState(d, b, c)
    }
};
e.updateAriaState = function(a, b, c) {
    ph || (ph = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    B(a, "The element passed as a first parameter cannot be null.");
    b = ph[b];
    var d = a.getAttribute("role") || null;
    d && (d = rh[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && Y(a, b, c)
};
e.setContent = function(a, b) {
    var c = this.getContentElement(a);
    if (c && (Ad(c), b))
        if (w(b)) Jd(c, b);
        else {
            var d = function(a) {
                if (a) {
                    var b = kd(c);
                    c.appendChild(w(a) ? b.createTextNode(a) : a)
                }
            };
            ka(b) ? D(b, d) : !la(b) || "nodeType" in b ? d(b) : D(Bb(b), d)
        }
};
e.getKeyEventTarget = function(a) {
    return a.getElement()
};
e.getCssClass = function() {
    return "goog-control"
};
e.getIe6ClassCombinations = function() {
    return []
};
e.getStructuralCssClass = function() {
    return this.getCssClass()
};
e.getClassNames = function(a) {
    var b = this.getCssClass(),
        c = [b],
        d = this.getStructuralCssClass();
    d != b && c.push(d);
    b = this.getClassNamesForState(a.getState());
    c.push.apply(c, b);
    (a = a.getExtraClassNames()) && c.push.apply(c, a);
    E && !Zb("7") && c.push.apply(c, this.getAppliedCombinedClassNames_(c));
    return c
};
e.getAppliedCombinedClassNames_ = function(a, b) {
    var c = [];
    b && (a = a.concat([b]));
    D(this.getIe6ClassCombinations(), function(d) {
        !vb(d, za(xb, a)) || b && !xb(d, b) || c.push(d.join("_"))
    });
    return c
};
e.getClassNamesForState = function(a) {
    for (var b = []; a;) {
        var c = a & -a;
        b.push(this.getClassForState(c));
        a &= ~c
    }
    return b
};
e.getClassForState = function(a) {
    this.classByState_ || this.createClassByStateMap_();
    return this.classByState_[a]
};
e.getStateFromClass = function(a) {
    this.stateByClass_ || this.createStateByClassMap_();
    a = parseInt(this.stateByClass_[a], 10);
    return isNaN(a) ? 0 : a
};
e.createClassByStateMap_ = function() {
    var a = this.getStructuralCssClass(),
        b = !Ya(a.replace(/\xa0|\s/g, " "), " ");
    B(b, "ControlRenderer has an invalid css class: '" + a + "'");
    this.classByState_ = {
        1: a + "-disabled",
        2: a + "-hover",
        4: a + "-active",
        8: a + "-selected",
        16: a + "-checked",
        32: a + "-focused",
        64: a + "-open"
    }
};
e.createStateByClassMap_ = function() {
    this.classByState_ || this.createClassByStateMap_();
    var a = this.classByState_,
        b = {}, c;
    for (c in a) b[a[c]] = c;
    this.stateByClass_ = b
};
var sh = function() {};
z(sh, oh);
ga(sh);
e = sh.prototype;
e.getAriaRole = function() {
    return "button"
};
e.updateAriaState = function(a, b, c) {
    switch (b) {
        case 8:
        case 16:
            B(a, "The button DOM element cannot be null.");
            Y(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            sh.superClass_.updateAriaState.call(this, a, b, c)
    }
};
e.createDom = function(a) {
    var b = sh.superClass_.createDom.call(this, a);
    this.setTooltip(b, a.getTooltip());
    var c = a.getValue();
    c && this.setValue(b, c);
    a.isSupportedState(16) && this.updateAriaState(b, 16, a.isChecked());
    return b
};
e.decorate = function(a, b) {
    b = sh.superClass_.decorate.call(this, a, b);
    a.setValueInternal(this.getValue(b));
    a.setTooltipInternal(this.getTooltip(b));
    a.isSupportedState(16) && this.updateAriaState(b, 16, a.isChecked());
    return b
};
e.getValue = fa;
e.setValue = fa;
e.getTooltip = function(a) {
    return a.title
};
e.setTooltip = function(a, b) {
    a && b && (a.title = b)
};
e.setCollapsed = function(a, b) {
    var c = a.isRightToLeft(),
        d = this.getStructuralCssClass() + "-collapse-left",
        f = this.getStructuralCssClass() + "-collapse-right";
    a.enableClassName(c ? f : d, !! (b & 1));
    a.enableClassName(c ? d : f, !! (b & 2))
};
e.getCssClass = function() {
    return "goog-button"
};
var uh = function(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!na(b)) throw Error("Invalid decorator function " + b);
    th[a] = b
}, vh = {}, th = {};
var wh = function(a, b, c) {
    fg.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ua(b);
            if (d = vh[d]) break;
            b = b.superClass_ ? b.superClass_.constructor : null
        }
        b = d ? na(d.getInstance) ? d.getInstance() : new d : null
    }
    this.renderer_ = b;
    this.setContentInternal(ba(a) ? a : null)
};
z(wh, fg);
e = wh.prototype;
e.content_ = null;
e.state_ = 0;
e.supportedStates_ = 39;
e.autoStates_ = 255;
e.statesWithTransitionEvents_ = 0;
e.visible_ = !0;
e.extraClassNames_ = null;
e.handleMouseEvents_ = !0;
e.allowTextSelection_ = !1;
e.preferredAriaRole_ = null;
e.isHandleMouseEvents = function() {
    return this.handleMouseEvents_
};
e.setHandleMouseEvents = function(a) {
    this.isInDocument() && a != this.handleMouseEvents_ && this.enableMouseEventHandling_(a);
    this.handleMouseEvents_ = a
};
e.getKeyEventTarget = function() {
    return this.renderer_.getKeyEventTarget(this)
};
e.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new Cg)
};
e.getRenderer = function() {
    return this.renderer_
};
e.getExtraClassNames = function() {
    return this.extraClassNames_
};
e.addClassName = function(a) {
    a && (this.extraClassNames_ ? xb(this.extraClassNames_, a) || this.extraClassNames_.push(a) : this.extraClassNames_ = [a], this.renderer_.enableExtraClassName(this, a, !0))
};
e.removeClassName = function(a) {
    a && this.extraClassNames_ && zb(this.extraClassNames_, a) && (0 == this.extraClassNames_.length && (this.extraClassNames_ = null), this.renderer_.enableExtraClassName(this, a, !1))
};
e.enableClassName = function(a, b) {
    b ? this.addClassName(a) : this.removeClassName(a)
};
e.createDom = function() {
    var a = this.renderer_.createDom(this);
    this.setElementInternal(a);
    this.renderer_.setAriaRole(a, this.getPreferredAriaRole());
    this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(a, !1);
    this.isVisible() || this.renderer_.setVisible(a, !1)
};
e.getPreferredAriaRole = function() {
    return this.preferredAriaRole_
};
e.setPreferredAriaRole = function(a) {
    this.preferredAriaRole_ = a
};
e.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
};
e.canDecorate = function(a) {
    return this.renderer_.canDecorate(a)
};
e.decorateInternal = function(a) {
    a = this.renderer_.decorate(this, a);
    this.setElementInternal(a);
    this.renderer_.setAriaRole(a, this.getPreferredAriaRole());
    this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(a, !1);
    this.visible_ = "none" != a.style.display
};
e.enterDocument = function() {
    wh.superClass_.enterDocument.call(this);
    this.renderer_.initializeDom(this);
    if (this.supportedStates_ & -2 && (this.isHandleMouseEvents() && this.enableMouseEventHandling_(!0), this.isSupportedState(32))) {
        var a = this.getKeyEventTarget();
        if (a) {
            var b = this.getKeyHandler();
            b.attach(a);
            this.getHandler().listen(b, "key", this.handleKeyEvent).listen(a, "focus", this.handleFocus).listen(a, "blur", this.handleBlur)
        }
    }
};
e.enableMouseEventHandling_ = function(a) {
    var b = this.getHandler(),
        c = this.getElement();
    a ? (b.listen(c, "mouseover", this.handleMouseOver).listen(c, "mousedown", this.handleMouseDown).listen(c, "mouseup", this.handleMouseUp).listen(c, "mouseout", this.handleMouseOut), this.handleContextMenu != fa && b.listen(c, "contextmenu", this.handleContextMenu), E && b.listen(c, "dblclick", this.handleDblClick)) : (b.unlisten(c, "mouseover", this.handleMouseOver).unlisten(c, "mousedown", this.handleMouseDown).unlisten(c, "mouseup", this.handleMouseUp).unlisten(c,
        "mouseout", this.handleMouseOut), this.handleContextMenu != fa && b.unlisten(c, "contextmenu", this.handleContextMenu), E && b.unlisten(c, "dblclick", this.handleDblClick))
};
e.exitDocument = function() {
    wh.superClass_.exitDocument.call(this);
    this.keyHandler_ && this.keyHandler_.detach();
    this.isVisible() && this.isEnabled() && this.renderer_.setFocusable(this, !1)
};
e.disposeInternal = function() {
    wh.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), delete this.keyHandler_);
    delete this.renderer_;
    this.extraClassNames_ = this.content_ = null
};
e.getContent = function() {
    return this.content_
};
e.setContent = function(a) {
    this.renderer_.setContent(this.getElement(), a);
    this.setContentInternal(a)
};
e.setContentInternal = function(a) {
    this.content_ = a
};
e.getCaption = function() {
    var a = this.getContent();
    if (!a) return "";
    a = w(a) ? a : ka(a) ? rb(a, Zd).join("") : Sd(a);
    return Ga(a)
};
e.setRightToLeft = function(a) {
    wh.superClass_.setRightToLeft.call(this, a);
    var b = this.getElement();
    b && this.renderer_.setRightToLeft(b, a)
};
e.isAllowTextSelection = function() {
    return this.allowTextSelection_
};
e.setAllowTextSelection = function(a) {
    this.allowTextSelection_ = a;
    var b = this.getElement();
    b && this.renderer_.setAllowTextSelection(b, a)
};
e.isVisible = function() {
    return this.visible_
};
e.setVisible = function(a, b) {
    if (b || this.visible_ != a && this.dispatchEvent(a ? "show" : "hide")) {
        var c = this.getElement();
        c && this.renderer_.setVisible(c, a);
        this.isEnabled() && this.renderer_.setFocusable(this, a);
        this.visible_ = a;
        return !0
    }
    return !1
};
e.isEnabled = function() {
    return !this.hasState(1)
};
e.isParentDisabled_ = function() {
    var a = this.getParent();
    return !!a && "function" == typeof a.isEnabled && !a.isEnabled()
};
e.setEnabled = function(a) {
    !this.isParentDisabled_() && this.isTransitionAllowed(1, !a) && (a || (this.setActive(!1), this.setHighlighted(!1)), this.isVisible() && this.renderer_.setFocusable(this, a), this.setState(1, !a))
};
e.setHighlighted = function(a) {
    this.isTransitionAllowed(2, a) && this.setState(2, a)
};
e.isActive = function() {
    return this.hasState(4)
};
e.setActive = function(a) {
    this.isTransitionAllowed(4, a) && this.setState(4, a)
};
e.isSelected = function() {
    return this.hasState(8)
};
e.setSelected = function(a) {
    this.isTransitionAllowed(8, a) && this.setState(8, a)
};
e.isChecked = function() {
    return this.hasState(16)
};
e.setChecked = function(a) {
    this.isTransitionAllowed(16, a) && this.setState(16, a)
};
e.isFocused = function() {
    return this.hasState(32)
};
e.setFocused = function(a) {
    this.isTransitionAllowed(32, a) && this.setState(32, a)
};
e.isOpen = function() {
    return this.hasState(64)
};
e.setOpen = function(a) {
    this.isTransitionAllowed(64, a) && this.setState(64, a)
};
e.getState = function() {
    return this.state_
};
e.hasState = function(a) {
    return !!(this.state_ & a)
};
e.setState = function(a, b) {
    this.isSupportedState(a) && b != this.hasState(a) && (this.renderer_.setState(this, a, b), this.state_ = b ? this.state_ | a : this.state_ & ~a)
};
e.setStateInternal = function(a) {
    this.state_ = a
};
e.isSupportedState = function(a) {
    return !!(this.supportedStates_ & a)
};
e.setSupportedState = function(a, b) {
    if (this.isInDocument() && this.hasState(a) && !b) throw Error("Component already rendered");
    !b && this.hasState(a) && this.setState(a, !1);
    this.supportedStates_ = b ? this.supportedStates_ | a : this.supportedStates_ & ~a
};
e.isAutoState = function(a) {
    return !!(this.autoStates_ & a) && this.isSupportedState(a)
};
e.setAutoStates = function(a, b) {
    this.autoStates_ = b ? this.autoStates_ | a : this.autoStates_ & ~a
};
e.setDispatchTransitionEvents = function(a, b) {
    this.statesWithTransitionEvents_ = b ? this.statesWithTransitionEvents_ | a : this.statesWithTransitionEvents_ & ~a
};
e.isTransitionAllowed = function(a, b) {
    return this.isSupportedState(a) && this.hasState(a) != b && (!(this.statesWithTransitionEvents_ & a) || this.dispatchEvent(gg(a, b))) && !this.isDisposed()
};
e.handleMouseOver = function(a) {
    !xh(a, this.getElement()) && this.dispatchEvent("enter") && this.isEnabled() && this.isAutoState(2) && this.setHighlighted(!0)
};
e.handleMouseOut = function(a) {
    !xh(a, this.getElement()) && this.dispatchEvent("leave") && (this.isAutoState(4) && this.setActive(!1), this.isAutoState(2) && this.setHighlighted(!1))
};
e.handleContextMenu = fa;
var xh = function(a, b) {
    return !!a.relatedTarget && Hd(b, a.relatedTarget)
};
e = wh.prototype;
e.handleMouseDown = function(a) {
    this.isEnabled() && (this.isAutoState(2) && this.setHighlighted(!0), a.isMouseActionButton() && (this.isAutoState(4) && this.setActive(!0), this.renderer_.isFocusable(this) && this.getKeyEventTarget().focus()));
    !this.isAllowTextSelection() && a.isMouseActionButton() && a.preventDefault()
};
e.handleMouseUp = function(a) {
    this.isEnabled() && (this.isAutoState(2) && this.setHighlighted(!0), this.isActive() && this.performActionInternal(a) && this.isAutoState(4) && this.setActive(!1))
};
e.handleDblClick = function(a) {
    this.isEnabled() && this.performActionInternal(a)
};
e.performActionInternal = function(a) {
    this.isAutoState(16) && this.setChecked(!this.isChecked());
    this.isAutoState(8) && this.setSelected(!0);
    this.isAutoState(64) && this.setOpen(!this.isOpen());
    var b = new L("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.platformModifierKey = a.platformModifierKey);
    return this.dispatchEvent(b)
};
e.handleFocus = function() {
    this.isAutoState(32) && this.setFocused(!0)
};
e.handleBlur = function() {
    this.isAutoState(4) && this.setActive(!1);
    this.isAutoState(32) && this.setFocused(!1)
};
e.handleKeyEvent = function(a) {
    return this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
e.handleKeyEventInternal = function(a) {
    return 13 == a.keyCode && this.performActionInternal(a)
};
if (!na(wh)) throw Error("Invalid component class " + wh);
if (!na(oh)) throw Error("Invalid renderer class " + oh);
var yh = ua(wh);
vh[yh] = oh;
uh("goog-control", function() {
    return new wh(null)
});
var zh = function() {};
z(zh, sh);
ga(zh);
e = zh.prototype;
e.getAriaRole = function() {};
e.createDom = function(a) {
    this.setUpNativeButton_(a);
    return a.getDomHelper().createDom("button", {
        "class": this.getClassNames(a).join(" "),
        disabled: !a.isEnabled(),
        title: a.getTooltip() || "",
        value: a.getValue() || ""
    }, a.getCaption() || "")
};
e.canDecorate = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
e.decorate = function(a, b) {
    this.setUpNativeButton_(a);
    if (b.disabled) {
        var c = kb(this.getClassForState(1));
        xf(b, c)
    }
    return zh.superClass_.decorate.call(this, a, b)
};
e.initializeDom = function(a) {
    a.getHandler().listen(a.getElement(), "click", a.performActionInternal)
};
e.setAllowTextSelection = fa;
e.setRightToLeft = fa;
e.isFocusable = function(a) {
    return a.isEnabled()
};
e.setFocusable = fa;
e.setState = function(a, b, c) {
    zh.superClass_.setState.call(this, a, b, c);
    (a = a.getElement()) && 1 == b && (a.disabled = c)
};
e.getValue = function(a) {
    return a.value
};
e.setValue = function(a, b) {
    a && (a.value = b)
};
e.updateAriaState = fa;
e.setUpNativeButton_ = function(a) {
    a.setHandleMouseEvents(!1);
    a.setAutoStates(255, !1);
    a.setSupportedState(32, !1)
};
var Ah = function(a, b, c) {
    wh.call(this, a, b || zh.getInstance(), c)
};
z(Ah, wh);
e = Ah.prototype;
e.getValue = function() {
    return this.value_
};
e.setValue = function(a) {
    this.value_ = a;
    this.getRenderer().setValue(this.getElement(), a)
};
e.setValueInternal = function(a) {
    this.value_ = a
};
e.getTooltip = function() {
    return this.tooltip_
};
e.setTooltip = function(a) {
    this.tooltip_ = a;
    this.getRenderer().setTooltip(this.getElement(), a)
};
e.setTooltipInternal = function(a) {
    this.tooltip_ = a
};
e.setCollapsed = function(a) {
    this.getRenderer().setCollapsed(this, a)
};
e.disposeInternal = function() {
    Ah.superClass_.disposeInternal.call(this);
    delete this.value_;
    delete this.tooltip_
};
e.enterDocument = function() {
    Ah.superClass_.enterDocument.call(this);
    if (this.isSupportedState(32)) {
        var a = this.getKeyEventTarget();
        a && this.getHandler().listen(a, "keyup", this.handleKeyEventInternal)
    }
};
e.handleKeyEventInternal = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.performActionInternal(a) : 32 == a.keyCode
};
uh("goog-button", function() {
    return new Ah(null)
});
var Bh = function(a) {
    this.ariaRole_ = a
};
ga(Bh);
e = Bh.prototype;
e.getAriaRole = function() {
    return this.ariaRole_
};
e.enableTabIndex = function(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
e.createDom = function(a) {
    return a.getDomHelper().createDom("div", this.getClassNames(a).join(" "))
};
e.getContentElement = function(a) {
    return a
};
e.canDecorate = function(a) {
    return "DIV" == a.tagName
};
e.decorate = function(a, b) {
    b.id && a.setId(b.id);
    var c = this.getCssClass(),
        d = !1,
        f = uf(b);
    f && D(f, function(b) {
        b == c ? d = !0 : b && this.setStateFromClassName(a, b, c)
    }, this);
    d || xf(b, c);
    this.decorateChildren(a, this.getContentElement(b));
    return b
};
e.setStateFromClassName = function(a, b, c) {
    b == c + "-disabled" ? a.setEnabled(!1) : b == c + "-horizontal" ? a.setOrientation("horizontal") : b == c + "-vertical" && a.setOrientation("vertical")
};
e.decorateChildren = function(a, b, c) {
    if (b) {
        c = c || b.firstChild;
        for (var d; c && c.parentNode == b;) {
            d = c.nextSibling;
            if (1 == c.nodeType) {
                var f = this.getDecoratorForChild(c);
                f && (f.setElementInternal(c), a.isEnabled() || f.setEnabled(!1), a.addChild(f), f.decorate(c))
            } else c.nodeValue && "" != Ha(c.nodeValue) || b.removeChild(c);
            c = d
        }
    }
};
e.getDecoratorForChild = function(a) {
    t: {
        var b;
        B(a);
        a = uf(a);
        for (var c = 0, d = a.length; c < d; c++)
            if (b = a[c], b = b in th ? th[b]() : null) {
                a = b;
                break t
            }
        a = null
    }
    return a
};
e.initializeDom = function(a) {
    a = a.getElement();
    B(a, "The container DOM element cannot be null.");
    He(a, !0, J);
    E && (a.hideFocus = !0);
    var b = this.getAriaRole();
    b && rf(a, b)
};
e.getKeyEventTarget = function(a) {
    return a.getElement()
};
e.getCssClass = function() {
    return "goog-container"
};
e.getClassNames = function(a) {
    var b = this.getCssClass(),
        c = [b, "horizontal" == a.getOrientation() ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};
e.getDefaultOrientation = function() {
    return "vertical"
};
var Ch = function(a, b, c) {
    fg.call(this, c);
    this.renderer_ = b || Bh.getInstance();
    this.orientation_ = a || this.renderer_.getDefaultOrientation()
};
z(Ch, fg);
e = Ch.prototype;
e.keyEventTarget_ = null;
e.keyHandler_ = null;
e.renderer_ = null;
e.orientation_ = null;
e.visible_ = !0;
e.enabled_ = !0;
e.focusable_ = !0;
e.highlightedIndex_ = -1;
e.openItem_ = null;
e.mouseButtonPressed_ = !1;
e.allowFocusableChildren_ = !1;
e.openFollowsHighlight_ = !0;
e.childElementIdMap_ = null;
e.getKeyEventTarget = function() {
    return this.keyEventTarget_ || this.renderer_.getKeyEventTarget(this)
};
e.getKeyHandler = function() {
    return this.keyHandler_ || (this.keyHandler_ = new Cg(this.getKeyEventTarget()))
};
e.getRenderer = function() {
    return this.renderer_
};
e.createDom = function() {
    this.setElementInternal(this.renderer_.createDom(this))
};
e.getContentElement = function() {
    return this.renderer_.getContentElement(this.getElement())
};
e.canDecorate = function(a) {
    return this.renderer_.canDecorate(a)
};
e.decorateInternal = function(a) {
    this.setElementInternal(this.renderer_.decorate(this, a));
    "none" == a.style.display && (this.visible_ = !1)
};
e.enterDocument = function() {
    Ch.superClass_.enterDocument.call(this);
    this.forEachChild(function(a) {
        a.isInDocument() && this.registerChildId_(a)
    }, this);
    var a = this.getElement();
    this.renderer_.initializeDom(this);
    this.setVisible(this.visible_, !0);
    this.getHandler().listen(this, "enter", this.handleEnterItem).listen(this, "highlight", this.handleHighlightItem).listen(this, "unhighlight", this.handleUnHighlightItem).listen(this, "open", this.handleOpenItem).listen(this, "close", this.handleCloseItem).listen(a, "mousedown",
        this.handleMouseDown).listen(kd(a), "mouseup", this.handleDocumentMouseUp).listen(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.handleChildMouseEvents);
    this.isFocusable() && this.enableFocusHandling_(!0)
};
e.enableFocusHandling_ = function(a) {
    var b = this.getHandler(),
        c = this.getKeyEventTarget();
    a ? b.listen(c, "focus", this.handleFocus).listen(c, "blur", this.handleBlur).listen(this.getKeyHandler(), "key", this.handleKeyEvent) : b.unlisten(c, "focus", this.handleFocus).unlisten(c, "blur", this.handleBlur).unlisten(this.getKeyHandler(), "key", this.handleKeyEvent)
};
e.exitDocument = function() {
    this.setHighlightedIndex(-1);
    this.openItem_ && this.openItem_.setOpen(!1);
    this.mouseButtonPressed_ = !1;
    Ch.superClass_.exitDocument.call(this)
};
e.disposeInternal = function() {
    Ch.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), this.keyHandler_ = null);
    this.renderer_ = this.openItem_ = this.childElementIdMap_ = this.keyEventTarget_ = null
};
e.handleEnterItem = function() {
    return !0
};
e.handleHighlightItem = function(a) {
    var b = this.indexOfChild(a.target);
    if (-1 < b && b != this.highlightedIndex_) {
        var c = this.getHighlighted();
        c && c.setHighlighted(!1);
        this.highlightedIndex_ = b;
        c = this.getHighlighted();
        this.isMouseButtonPressed() && c.setActive(!0);
        this.openFollowsHighlight_ && this.openItem_ && c != this.openItem_ && (c.isSupportedState(64) ? c.setOpen(!0) : this.openItem_.setOpen(!1))
    }
    b = this.getElement();
    B(b, "The DOM element for the container cannot be null.");
    null != a.target.getElement() && Y(b, "activedescendant",
        a.target.getElement().id)
};
e.handleUnHighlightItem = function(a) {
    a.target == this.getHighlighted() && (this.highlightedIndex_ = -1);
    a = this.getElement();
    B(a, "The DOM element for the container cannot be null.");
    a.removeAttribute(sf("activedescendant"))
};
e.handleOpenItem = function(a) {
    (a = a.target) && a != this.openItem_ && a.getParent() == this && (this.openItem_ && this.openItem_.setOpen(!1), this.openItem_ = a)
};
e.handleCloseItem = function(a) {
    a.target == this.openItem_ && (this.openItem_ = null)
};
e.handleMouseDown = function(a) {
    this.enabled_ && this.setMouseButtonPressed(!0);
    var b = this.getKeyEventTarget();
    b && Pd(b) && Qd(b) ? b.focus() : a.preventDefault()
};
e.handleDocumentMouseUp = function() {
    this.setMouseButtonPressed(!1)
};
e.handleChildMouseEvents = function(a) {
    var b = this.getOwnerControl(a.target);
    if (b) switch (a.type) {
        case "mousedown":
            b.handleMouseDown(a);
            break;
        case "mouseup":
            b.handleMouseUp(a);
            break;
        case "mouseover":
            b.handleMouseOver(a);
            break;
        case "mouseout":
            b.handleMouseOut(a);
            break;
        case "contextmenu":
            b.handleContextMenu(a)
    }
};
e.getOwnerControl = function(a) {
    if (this.childElementIdMap_)
        for (var b = this.getElement(); a && a !== b;) {
            var c = a.id;
            if (c in this.childElementIdMap_) return this.childElementIdMap_[c];
            a = a.parentNode
        }
    return null
};
e.handleFocus = function() {};
e.handleBlur = function() {
    this.setHighlightedIndex(-1);
    this.setMouseButtonPressed(!1);
    this.openItem_ && this.openItem_.setOpen(!1)
};
e.handleKeyEvent = function(a) {
    return this.isEnabled() && this.isVisible() && (0 != this.getChildCount() || this.keyEventTarget_) && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
e.handleKeyEventInternal = function(a) {
    var b = this.getHighlighted();
    if (b && "function" == typeof b.handleKeyEvent && b.handleKeyEvent(a) || this.openItem_ && this.openItem_ != b && "function" == typeof this.openItem_.handleKeyEvent && this.openItem_.handleKeyEvent(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.isFocusable()) this.getKeyEventTarget().blur();
            else return !1;
            break;
        case 36:
            this.highlightFirst();
            break;
        case 35:
            this.highlightLast();
            break;
        case 38:
            if ("vertical" ==
                this.orientation_) this.highlightPrevious();
            else return !1;
            break;
        case 37:
            if ("horizontal" == this.orientation_) this.isRightToLeft() ? this.highlightNext() : this.highlightPrevious();
            else return !1;
            break;
        case 40:
            if ("vertical" == this.orientation_) this.highlightNext();
            else return !1;
            break;
        case 39:
            if ("horizontal" == this.orientation_) this.isRightToLeft() ? this.highlightPrevious() : this.highlightNext();
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};
e.registerChildId_ = function(a) {
    var b = a.getElement(),
        b = b.id || (b.id = a.getId());
    this.childElementIdMap_ || (this.childElementIdMap_ = {});
    this.childElementIdMap_[b] = a
};
e.addChild = function(a, b) {
    nb(a, wh, "The child of a container must be a control");
    Ch.superClass_.addChild.call(this, a, b)
};
e.addChildAt = function(a, b, c) {
    a.setDispatchTransitionEvents(2, !0);
    a.setDispatchTransitionEvents(64, !0);
    !this.isFocusable() && this.isFocusableChildrenAllowed() || a.setSupportedState(32, !1);
    a.setHandleMouseEvents(!1);
    Ch.superClass_.addChildAt.call(this, a, b, c);
    a.isInDocument() && this.isInDocument() && this.registerChildId_(a);
    b <= this.highlightedIndex_ && this.highlightedIndex_++
};
e.removeChild = function(a, b) {
    if (a = w(a) ? this.getChild(a) : a) {
        var c = this.indexOfChild(a); - 1 != c && (c == this.highlightedIndex_ ? (a.setHighlighted(!1), this.highlightedIndex_ = -1) : c < this.highlightedIndex_ && this.highlightedIndex_--);
        (c = a.getElement()) && c.id && this.childElementIdMap_ && vc(this.childElementIdMap_, c.id)
    }
    a = Ch.superClass_.removeChild.call(this, a, b);
    // a.setHandleMouseEvents(!0);
    return a
};
e.getOrientation = function() {
    return this.orientation_
};
e.setOrientation = function(a) {
    if (this.getElement()) throw Error("Component already rendered");
    this.orientation_ = a
};
e.isVisible = function() {
    return this.visible_
};
e.setVisible = function(a, b) {
    if (b || this.visible_ != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.visible_ = a;
        var c = this.getElement();
        c && (S(c, a), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), this.enabled_ && this.visible_), b || this.dispatchEvent(this.visible_ ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
e.isEnabled = function() {
    return this.enabled_
};
e.setEnabled = function(a) {
    this.enabled_ != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.enabled_ = !0, this.forEachChild(function(a) {
        a.wasDisabled ? delete a.wasDisabled : a.setEnabled(!0)
    })) : (this.forEachChild(function(a) {
        a.isEnabled() ? a.setEnabled(!1) : a.wasDisabled = !0
    }), this.enabled_ = !1, this.setMouseButtonPressed(!1)), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), a && this.visible_))
};
e.isFocusable = function() {
    return this.focusable_
};
e.setFocusable = function(a) {
    a != this.focusable_ && this.isInDocument() && this.enableFocusHandling_(a);
    this.focusable_ = a;
    this.enabled_ && this.visible_ && this.renderer_.enableTabIndex(this.getKeyEventTarget(), a)
};
e.isFocusableChildrenAllowed = function() {
    return this.allowFocusableChildren_
};
e.getHighlightedIndex = function() {
    return this.highlightedIndex_
};
e.setHighlightedIndex = function(a) {
    (a = this.getChildAt(a)) ? a.setHighlighted(!0) : -1 < this.highlightedIndex_ && this.getHighlighted().setHighlighted(!1)
};
e.setHighlighted = function(a) {
    this.setHighlightedIndex(this.indexOfChild(a))
};
e.getHighlighted = function() {
    return this.getChildAt(this.highlightedIndex_)
};
e.highlightFirst = function() {
    this.highlightHelper(function(a, b) {
        return (a + 1) % b
    }, this.getChildCount() - 1)
};
e.highlightLast = function() {
    this.highlightHelper(function(a, b) {
        a--;
        return 0 > a ? b - 1 : a
    }, 0)
};
e.highlightNext = function() {
    this.highlightHelper(function(a, b) {
        return (a + 1) % b
    }, this.highlightedIndex_)
};
e.highlightPrevious = function() {
    this.highlightHelper(function(a, b) {
        a--;
        return 0 > a ? b - 1 : a
    }, this.highlightedIndex_)
};
e.highlightHelper = function(a, b) {
    for (var c = 0 > b ? this.indexOfChild(this.openItem_) : b, d = this.getChildCount(), c = a.call(this, c, d), f = 0; f <= d;) {
        var g = this.getChildAt(c);
        if (g && this.canHighlightItem(g)) return this.setHighlightedIndexFromKeyEvent(c), !0;
        f++;
        c = a.call(this, c, d)
    }
    return !1
};
e.canHighlightItem = function(a) {
    return a.isVisible() && a.isEnabled() && a.isSupportedState(2)
};
e.setHighlightedIndexFromKeyEvent = function(a) {
    this.setHighlightedIndex(a)
};
e.isMouseButtonPressed = function() {
    return this.mouseButtonPressed_
};
e.setMouseButtonPressed = function(a) {
    this.mouseButtonPressed_ = a
};
var Dh = function() {};
z(Dh, oh);
ga(Dh);
Dh.prototype.getCssClass = function() {
    return "goog-menuheader"
};
var Eh = function(a, b, c) {
    wh.call(this, a, c || Dh.getInstance(), b);
    this.setSupportedState(1, !1);
    this.setSupportedState(2, !1);
    this.setSupportedState(4, !1);
    this.setSupportedState(32, !1);
    this.setStateInternal(1)
};
z(Eh, wh);
uh("goog-menuheader", function() {
    return new Eh(null)
});
var Fh = function() {
    this.classNameCache_ = []
};
z(Fh, oh);
ga(Fh);
e = Fh.prototype;
e.getCompositeCssClass_ = function(a) {
    var b = this.classNameCache_[a];
    if (!b) {
        switch (a) {
            case 0:
                b = this.getStructuralCssClass() + "-highlight";
                break;
            case 1:
                b = this.getStructuralCssClass() + "-checkbox";
                break;
            case 2:
                b = this.getStructuralCssClass() + "-content"
        }
        this.classNameCache_[a] = b
    }
    return b
};
e.getAriaRole = function() {
    return "menuitem"
};
e.createDom = function(a) {
    var b = a.getDomHelper().createDom("div", this.getClassNames(a).join(" "), this.createContent(a.getContent(), a.getDomHelper()));
    this.setEnableCheckBoxStructure(a, b, a.isSupportedState(8) || a.isSupportedState(16));
    this.setAriaStates(a, b);
    this.correctAriaRole(a, b);
    return b
};
e.getContentElement = function(a) {
    return a && a.firstChild
};
e.decorate = function(a, b) {
    B(b);
    this.hasContentStructure(b) || b.appendChild(this.createContent(b.childNodes, a.getDomHelper()));
    wf(b, "goog-option") && (a.setCheckable(!0), this.setCheckable(a, b, !0));
    return Fh.superClass_.decorate.call(this, a, b)
};
e.setContent = function(a, b) {
    var c = this.getContentElement(a),
        d = this.hasCheckBoxStructure(a) ? c.firstChild : null;
    Fh.superClass_.setContent.call(this, a, b);
    d && !this.hasCheckBoxStructure(a) && c.insertBefore(d, c.firstChild || null)
};
e.hasContentStructure = function(a) {
    a = Fd(a);
    var b = this.getCompositeCssClass_(2);
    return !!a && wf(a, b)
};
e.createContent = function(a, b) {
    var c = this.getCompositeCssClass_(2);
    return b.createDom("div", c, a)
};
e.setCheckable = function(a, b, c) {
    b && (rf(b, c ? "menuitemcheckbox" : this.getAriaRole()), this.setEnableCheckBoxStructure(a, b, c))
};
e.hasCheckBoxStructure = function(a) {
    if (a = this.getContentElement(a)) {
        a = a.firstChild;
        var b = this.getCompositeCssClass_(1);
        return !!a && Gd(a) && wf(a, b)
    }
    return !1
};
e.setEnableCheckBoxStructure = function(a, b, c) {
    B(b);
    c != this.hasCheckBoxStructure(b) && (Bf(b, "goog-option", c), b = this.getContentElement(b), c ? (c = this.getCompositeCssClass_(1), b.insertBefore(a.getDomHelper().createDom("div", c), b.firstChild || null)) : b.removeChild(b.firstChild))
};
e.getClassForState = function(a) {
    switch (a) {
        case 2:
            return this.getCompositeCssClass_(0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return Fh.superClass_.getClassForState.call(this, a)
    }
};
e.getStateFromClass = function(a) {
    var b = this.getCompositeCssClass_(0);
    switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return Fh.superClass_.getStateFromClass.call(this, a)
    }
};
e.getCssClass = function() {
    return "goog-menuitem"
};
e.correctAriaRole = function(a, b) {
    (a.isSupportedState(8) || a.isSupportedState(16)) && this.setAriaRole(b, a.isSupportedState(16) ? "menuitemcheckbox" : "menuitemradio")
};
var Gh = function(a, b, c, d) {
    wh.call(this, a, d || Fh.getInstance(), c);
    this.setValue(b)
};
z(Gh, wh);
e = Gh.prototype;
e.getValue = function() {
    var a = this.getModel();
    return null != a ? a : this.getCaption()
};
e.setValue = function(a) {
    this.setModel(a)
};
e.setCheckable = function(a) {
    this.setSupportedState(16, a);
    var b = this.getElement();
    b && this.getRenderer().setCheckable(this, b, a)
};
e.getCaption = function() {
    var a = this.getContent();
    return ka(a) ? (a = rb(a, function(a) {
        return Gd(a) && (wf(a, "goog-menuitem-accel") || wf(a, "goog-menuitem-mnemonic-separator")) ? "" : Zd(a)
    }).join(""), Ga(a)) : Gh.superClass_.getCaption.call(this)
};
e.handleMouseUp = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.openingCoords;
        b.openingCoords = null;
        if (b = c && ma(a.clientX)) b = new P(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
        if (b) return
    }
    Gh.superClass_.handleMouseUp.call(this, a)
};
e.handleKeyEventInternal = function(a) {
    return a.keyCode == this.getMnemonic() && this.performActionInternal(a) ? !0 : Gh.superClass_.handleKeyEventInternal.call(this, a)
};
e.getMnemonic = function() {
    return this.mnemonicKey_
};
uh("goog-menuitem", function() {
    return new Gh(null)
});
Gh.prototype.createDom = function() {
    Gh.superClass_.createDom.call(this);
    this.getRenderer().correctAriaRole(this, this.getElement())
};
Gh.prototype.getPreferredAriaRole = function() {
    return this.isSupportedState(16) ? "menuitemcheckbox" : this.isSupportedState(8) ? "menuitemradio" : Gh.superClass_.getPreferredAriaRole.call(this)
};
var Hh = function() {};
z(Hh, oh);
ga(Hh);
Hh.prototype.createDom = function(a) {
    return a.getDomHelper().createDom("div", this.getCssClass())
};
Hh.prototype.decorate = function(a, b) {
    b.id && a.setId(b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.createDom(a);
        Bd(b, c);
        Cd(c)
    } else xf(b, this.getCssClass());
    return b
};
Hh.prototype.setContent = function() {};
Hh.prototype.getCssClass = function() {
    return "goog-menuseparator"
};
var Ih = function(a, b) {
    wh.call(this, null, a || Hh.getInstance(), b);
    this.setSupportedState(1, !1);
    this.setSupportedState(2, !1);
    this.setSupportedState(4, !1);
    this.setSupportedState(32, !1);
    this.setStateInternal(1)
};
z(Ih, wh);
Ih.prototype.enterDocument = function() {
    Ih.superClass_.enterDocument.call(this);
    var a = this.getElement();
    B(a, "The DOM element for the separator cannot be null.");
    rf(a, "separator")
};
uh("goog-menuseparator", function() {
    return new Ih
});
var Jh = function(a) {
    this.ariaRole_ = a || "menu"
};
z(Jh, Bh);
ga(Jh);
e = Jh.prototype;
e.canDecorate = function(a) {
    return "UL" == a.tagName || Jh.superClass_.canDecorate.call(this, a)
};
e.getDecoratorForChild = function(a) {
    return "HR" == a.tagName ? new Ih : Jh.superClass_.getDecoratorForChild.call(this, a)
};
e.containsElement = function(a, b) {
    return Hd(a.getElement(), b)
};
e.getCssClass = function() {
    return "goog-menu"
};
e.initializeDom = function(a) {
    Jh.superClass_.initializeDom.call(this, a);
    a = a.getElement();
    B(a, "The menu DOM element cannot be null.");
    Y(a, "haspopup", "true")
};
uh("goog-menuseparator", function() {
    return new Ih
});
var Kh = function(a, b) {
    Ch.call(this, "vertical", b || Jh.getInstance(), a);
    this.setFocusable(!1)
};
z(Kh, Ch);
e = Kh.prototype;
e.allowAutoFocus_ = !0;
e.allowHighlightDisabled_ = !1;
e.getCssClass = function() {
    return this.getRenderer().getCssClass()
};
e.containsElement = function(a) {
    if (this.getRenderer().containsElement(this, a)) return !0;
    for (var b = 0, c = this.getChildCount(); b < c; b++) {
        var d = this.getChildAt(b);
        if ("function" == typeof d.containsElement && d.containsElement(a)) return !0
    }
    return !1
};
e.addItem = function(a) {
    this.addChild(a, !0)
};
e.addItemAt = function(a, b) {
    this.addChildAt(a, b, !0)
};
e.removeItem = function(a) {
    (a = this.removeChild(a, !0)) && a.dispose()
};
e.removeItemAt = function(a) {
    (a = this.removeChildAt(a, !0)) && a.dispose()
};
e.getItemAt = function(a) {
    return this.getChildAt(a)
};
e.getItemCount = function() {
    return this.getChildCount()
};
e.setPosition = function(a, b) {
    var c = this.isVisible();
    c || S(this.getElement(), !0);
    var d = this.getElement(),
        f = a,
        g = b,
        h = re(d);
    f instanceof P && (g = f.y, f = f.x);
    ne(d, d.offsetLeft + (f - h.x), d.offsetTop + (g - h.y));
    c || S(this.getElement(), !1)
};
e.setAllowAutoFocus = function(a) {
    (this.allowAutoFocus_ = a) && this.setFocusable(!0)
};
e.setVisible = function(a, b, c) {
    (b = Kh.superClass_.setVisible.call(this, a, b)) && a && this.isInDocument() && this.allowAutoFocus_ && this.getKeyEventTarget().focus();
    this.openingCoords = a && c && ma(c.clientX) ? new P(c.clientX, c.clientY) : null;
    return b
};
e.handleEnterItem = function(a) {
    this.allowAutoFocus_ && this.getKeyEventTarget().focus();
    return Kh.superClass_.handleEnterItem.call(this, a)
};
e.highlightNextPrefix = function(a) {
    var b = new RegExp("^" + Za(a), "i");
    return this.highlightHelper(function(a, d) {
        var f = 0 > a ? 0 : a,
            g = !1;
        do {
            ++a;
            a == d && (a = 0, g = !0);
            var h = this.getChildAt(a).getCaption();
            if (h && h.match(b)) return a
        } while (!g || a != f);
        return this.getHighlightedIndex()
    }, this.getHighlightedIndex())
};
e.canHighlightItem = function(a) {
    return (this.allowHighlightDisabled_ || a.isEnabled()) && a.isVisible() && a.isSupportedState(2)
};
e.decorateInternal = function(a) {
    this.decorateContent(a);
    Kh.superClass_.decorateInternal.call(this, a)
};
e.handleKeyEventInternal = function(a) {
    var b = Kh.superClass_.handleKeyEventInternal.call(this, a);
    b || this.forEachChild(function(c) {
        !b && c.getMnemonic && c.getMnemonic() == a.keyCode && (this.isEnabled() && this.setHighlighted(c), b = c.handleKeyEvent(a))
    }, this);
    return b
};
e.setHighlightedIndex = function(a) {
    Kh.superClass_.setHighlightedIndex.call(this, a);
    if (a = this.getChildAt(a)) {
        var b = a.getElement();
        a = this.getElement();
        b = ve(b, a, void 0);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
e.decorateContent = function(a) {
    var b = this.getRenderer();
    a = this.getDomHelper().getElementsByTagNameAndClass("div", b.getCssClass() + "-content", a);
    for (var c = a.length, d = 0; d < c; d++) b.decorateChildren(this, a[d])
};
var Lh = function() {};
z(Lh, sh);
ga(Lh);
e = Lh.prototype;
e.createDom = function(a) {
    var b = {
        "class": "goog-inline-block " + this.getClassNames(a).join(" ")
    }, b = a.getDomHelper().createDom("div", b, this.createButton(a.getContent(), a.getDomHelper()));
    this.setTooltip(b, a.getTooltip());
    this.setAriaStates(a, b);
    return b
};
e.getAriaRole = function() {
    return "button"
};
e.getContentElement = function(a) {
    return a && a.firstChild.firstChild
};
e.createButton = function(a, b) {
    return b.createDom("div", "goog-inline-block " + (this.getCssClass() + "-outer-box"), b.createDom("div", "goog-inline-block " + (this.getCssClass() + "-inner-box"), a))
};
e.canDecorate = function(a) {
    return "DIV" == a.tagName
};
e.hasBoxStructure = function(a, b) {
    var c = a.getDomHelper().getFirstElementChild(b),
        d = this.getCssClass() + "-outer-box";
    return c && wf(c, d) && (c = a.getDomHelper().getFirstElementChild(c), d = this.getCssClass() + "-inner-box", c && wf(c, d)) ? !0 : !1
};
e.decorate = function(a, b) {
    B(b);
    Mh(b, !0);
    Mh(b, !1);
    this.hasBoxStructure(a, b) || b.appendChild(this.createButton(b.childNodes, a.getDomHelper()));
    yf(b, ["goog-inline-block", this.getCssClass()]);
    return Lh.superClass_.decorate.call(this, a, b)
};
e.getCssClass = function() {
    return "goog-custom-button"
};
var Mh = function(a, b) {
    if (a)
        for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var f = c.nodeValue;
                if ("" == Ha(f)) a.removeChild(c);
                else {
                    c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : f.replace(/[\s\xa0]+$/, "");
                    break
                }
            } else break;
            c = d
        }
};
var Nh = function() {};
z(Nh, Lh);
ga(Nh);
e = Nh.prototype;
e.getContentElement = function(a) {
    return Nh.superClass_.getContentElement.call(this, a && a.firstChild)
};
e.decorate = function(a, b) {
    var c = nd("*", "goog-menu", b)[0];
    if (c) {
        S(c, !1);
        kd(c).body.appendChild(c);
        var d = new Kh;
        d.decorate(c);
        a.setMenu(d)
    }
    return Nh.superClass_.decorate.call(this, a, b)
};
e.createButton = function(a, b) {
    return Nh.superClass_.createButton.call(this, [this.createCaption(a, b), this.createDropdown(b)], b)
};
e.createCaption = function(a, b) {
    return b.createDom("div", "goog-inline-block " + (this.getCssClass() + "-caption"), a)
};
e.createDropdown = function(a) {
    return a.createDom("div", "goog-inline-block " + (this.getCssClass() + "-dropdown"), "\u00a0")
};
e.getCssClass = function() {
    return "goog-menu-button"
};
var Oh = function(a, b, c, d, f) {
    Ah.call(this, a, c || Nh.getInstance(), d);
    this.setSupportedState(64, !0);
    this.menuPosition_ = new ih(null, 5);
    b && this.setMenu(b);
    this.menuMargin_ = null;
    this.timer_ = new lf(500);
    !mh && !nh || Zb("533.17.9") || this.setFocusablePopupMenu(!0);
    this.menuRenderer_ = f || Jh.getInstance()
};
z(Oh, Ah);
e = Oh.prototype;
e.isFocusablePopupMenu_ = !1;
e.renderMenuAsSibling_ = !1;
e.enterDocument = function() {
    Oh.superClass_.enterDocument.call(this);
    this.attachKeyDownEventListener_(!0);
    this.menu_ && this.attachMenuEventListeners_(this.menu_, !0);
    Y(this.getElementStrict(), "haspopup", !! this.menu_)
};
e.exitDocument = function() {
    Oh.superClass_.exitDocument.call(this);
    this.attachKeyDownEventListener_(!1);
    if (this.menu_) {
        this.setOpen(!1);
        this.menu_.exitDocument();
        this.attachMenuEventListeners_(this.menu_, !1);
        var a = this.menu_.getElement();
        a && Cd(a)
    }
};
e.disposeInternal = function() {
    Oh.superClass_.disposeInternal.call(this);
    this.menu_ && (this.menu_.dispose(), delete this.menu_);
    delete this.positionElement_;
    this.timer_.dispose()
};
e.handleMouseDown = function(a) {
    Oh.superClass_.handleMouseDown.call(this, a);
    this.isActive() && (this.setOpen(!this.isOpen(), a), this.menu_ && this.menu_.setMouseButtonPressed(this.isOpen()))
};
e.handleMouseUp = function(a) {
    Oh.superClass_.handleMouseUp.call(this, a);
    this.menu_ && !this.isActive() && this.menu_.setMouseButtonPressed(!1)
};
e.performActionInternal = function() {
    this.setActive(!1);
    return !0
};
e.handleDocumentMouseDown = function(a) {
    this.menu_ && this.menu_.isVisible() && !this.containsElement(a.target) && this.setOpen(!1)
};
e.containsElement = function(a) {
    return a && Hd(this.getElement(), a) || this.menu_ && this.menu_.containsElement(a) || !1
};
e.handleKeyEventInternal = function(a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(), "keyup" != a.type) return !0
    } else if ("key" != a.type) return !1;
    if (this.menu_ && this.menu_.isVisible()) {
        var b = this.menu_.handleKeyEvent(a);
        return 27 == a.keyCode ? (this.setOpen(!1), !0) : b
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.setOpen(!0, a), !0) : !1
};
e.handleMenuAction = function() {
    this.setOpen(!1)
};
e.handleMenuBlur = function() {
    this.isActive() || this.setOpen(!1)
};
e.handleBlur = function(a) {
    this.isFocusablePopupMenu() || this.setOpen(!1);
    Oh.superClass_.handleBlur.call(this, a)
};
e.getMenu = function() {
    this.menu_ || this.setMenu(new Kh(this.getDomHelper(), this.menuRenderer_));
    return this.menu_ || null
};
e.setMenu = function(a) {
    var b = this.menu_;
    a != b && (b && (this.setOpen(!1), this.isInDocument() && this.attachMenuEventListeners_(b, !1), delete this.menu_), this.isInDocument() && Y(this.getElementStrict(), "haspopup", !! a), a && (this.menu_ = a, a.setParent(this), a.setVisible(!1), a.setAllowAutoFocus(this.isFocusablePopupMenu()), this.isInDocument() && this.attachMenuEventListeners_(a, !0)));
    return b
};
e.addItem = function(a) {
    this.getMenu().addChild(a, !0)
};
e.addItemAt = function(a, b) {
    this.getMenu().addChildAt(a, b, !0)
};
e.removeItem = function(a) {
    (a = this.getMenu().removeChild(a, !0)) && a.dispose()
};
e.removeItemAt = function(a) {
    (a = this.getMenu().removeChildAt(a, !0)) && a.dispose()
};
e.getItemAt = function(a) {
    return this.menu_ ? this.menu_.getChildAt(a) : null
};
e.getItemCount = function() {
    return this.menu_ ? this.menu_.getChildCount() : 0
};
e.setVisible = function(a, b) {
    var c = Oh.superClass_.setVisible.call(this, a, b);
    c && !this.isVisible() && this.setOpen(!1);
    return c
};
e.setEnabled = function(a) {
    Oh.superClass_.setEnabled.call(this, a);
    this.isEnabled() || this.setOpen(!1)
};
e.isScrollOnOverflow = function() {
    return this.menuPosition_.getLastResortOverflow && !! (this.menuPosition_.getLastResortOverflow() & 32)
};
e.isFocusablePopupMenu = function() {
    return this.isFocusablePopupMenu_
};
e.setFocusablePopupMenu = function(a) {
    this.isFocusablePopupMenu_ = a
};
e.showMenu = function() {
    this.setOpen(!0)
};
e.setOpen = function(a, b) {
    Oh.superClass_.setOpen.call(this, a);
    if (this.menu_ && this.hasState(64) == a) {
        if (a) this.menu_.isInDocument() || (this.renderMenuAsSibling_ ? this.menu_.render(this.getElement().parentNode) : this.menu_.render()), this.viewportBox_ = te(this.getElement()), this.buttonRect_ = Ee(this.getElement()), this.positionMenu(), this.menu_.setHighlightedIndex(!b || 40 != b.keyCode && 38 != b.keyCode ? -1 : 0);
        else {
            this.setActive(!1);
            this.menu_.setMouseButtonPressed(!1);
            var c = this.getElement();
            c && (Y(c, "activedescendant",
                ""), Y(c, "owns", ""));
            null != this.originalSize_ && (this.originalSize_ = void 0, (c = this.menu_.getElement()) && Be(c, "", ""))
        }
        this.menu_.setVisible(a, !1, b);
        this.isDisposed() || this.attachPopupListeners_(a)
    }
};
e.positionMenu = function() {
    if (this.menu_.isInDocument()) {
        var a = this.positionElement_ || this.getElement(),
            b = this.menuPosition_;
        this.menuPosition_.element = a;
        a = this.menu_.getElement();
        this.menu_.isVisible() || (a.style.visibility = "hidden", S(a, !0));
        !this.originalSize_ && this.isScrollOnOverflow() && (this.originalSize_ = De(a));
        b.reposition(a, b.corner ^ 1, this.menuMargin_, this.originalSize_);
        this.menu_.isVisible() || (S(a, !1), a.style.visibility = "visible")
    }
};
e.onTick_ = function() {
    var a = Ee(this.getElement()),
        b = te(this.getElement()),
        c;
    c = this.buttonRect_;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.viewportBox_, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.buttonRect_ = a, this.viewportBox_ = b, this.positionMenu())
};
e.attachMenuEventListeners_ = function(a, b) {
    var c = this.getHandler(),
        d = b ? c.listen : c.unlisten;
    d.call(c, a, "action", this.handleMenuAction);
    d.call(c, a, "highlight", this.handleHighlightItem);
    d.call(c, a, "unhighlight", this.handleUnHighlightItem)
};
e.attachKeyDownEventListener_ = function(a) {
    var b = this.getHandler();
    (a ? b.listen : b.unlisten).call(b, this.getElement(), "keydown", this.handleKeyDownEvent_)
};
e.handleHighlightItem = function(a) {
    var b = this.getElement();
    B(b, "The menu button DOM element cannot be null.");
    null != a.target.getElement() && (Y(b, "activedescendant", a.target.getElement().id), Y(b, "owns", a.target.getElement().id))
};
e.handleKeyDownEvent_ = function(a) {
    this.isSupportedState(32) && this.getKeyEventTarget() && this.menu_ && this.menu_.isVisible() && a.stopPropagation()
};
e.handleUnHighlightItem = function() {
    if (!this.menu_.getHighlighted()) {
        var a = this.getElement();
        B(a, "The menu button DOM element cannot be null.");
        Y(a, "activedescendant", "");
        Y(a, "owns", "")
    }
};
e.attachPopupListeners_ = function(a) {
    var b = this.getHandler(),
        c = a ? b.listen : b.unlisten;
    c.call(b, this.getDomHelper().getDocument(), "mousedown", this.handleDocumentMouseDown, !0);
    this.isFocusablePopupMenu() && c.call(b, this.menu_, "blur", this.handleMenuBlur);
    c.call(b, this.timer_, "tick", this.onTick_);
    a ? this.timer_.start() : this.timer_.stop()
};
uh("goog-menu-button", function() {
    return new Oh(null)
});
var Ph = function() {
    this.hiddenFormInput_ = Q("compareTypePicker_hidden");
    this.optionElementIdPrefix_ = "compareTypePicker_"
};
v("trends.CompareTypePicker", Ph, void 0);
Ph.prototype.setSelectedComparisonType = function(a) {
    this.hiddenFormInput_.value = a;
    D(od("sidebar-filter-selected"), function(a) {
        id(a, "sidebar-filter-selected")
    });
    (a = Q(this.optionElementIdPrefix_ + a)) && gd(a, "sidebar-filter-selected")
};
var Qh = function(a, b) {
    fg.call(this, b);
    this.label_ = a || ""
};
z(Qh, fg);
Qh.prototype.ffKeyRestoreValue_ = null;
Qh.prototype.labelRestoreDelayMs = 10;
var Rh = "placeholder" in document.createElement("input");
e = Qh.prototype;
e.hasFocus_ = !1;
e.createDom = function() {
    this.setElementInternal(this.getDomHelper().createDom("input", {
        type: "text"
    }))
};
e.decorateInternal = function(a) {
    Qh.superClass_.decorateInternal.call(this, a);
    this.label_ || (this.label_ = a.getAttribute("label") || "");
    var b;
    t: {
        var c = kd(a);
        try {
            b = c && c.activeElement;
            break t
        } catch (d) {}
        b = null
    }
    b == a && (this.hasFocus_ = !0, a = this.getElement(), B(a), zf(a, this.LABEL_CLASS_NAME));
    Rh ? this.getElement().placeholder = this.label_ : (a = this.getElement(), B(a, "The label input element cannot be null."), Y(a, "label", this.label_))
};
e.enterDocument = function() {
    Qh.superClass_.enterDocument.call(this);
    this.attachEvents_();
    this.check_();
    this.getElement().labelInput_ = this
};
e.exitDocument = function() {
    Qh.superClass_.exitDocument.call(this);
    this.detachEvents_();
    this.getElement().labelInput_ = null
};
e.attachEvents_ = function() {
    var a = new Ye(this);
    a.listen(this.getElement(), "focus", this.handleFocus_);
    a.listen(this.getElement(), "blur", this.handleBlur_);
    if (Rh) this.eventHandler_ = a;
    else {
        J && a.listen(this.getElement(), ["keypress", "keydown", "keyup"], this.handleEscapeKeys_);
        var b = kd(this.getElement());
        a.listen(ud(b), "load", this.handleWindowLoad_);
        this.eventHandler_ = a;
        this.attachEventsToForm_()
    }
};
e.attachEventsToForm_ = function() {
    !this.formAttached_ && this.eventHandler_ && this.getElement().form && (this.eventHandler_.listen(this.getElement().form, "submit", this.handleFormSubmit_), this.formAttached_ = !0)
};
e.detachEvents_ = function() {
    this.eventHandler_ && (this.eventHandler_.dispose(), this.eventHandler_ = null)
};
e.disposeInternal = function() {
    Qh.superClass_.disposeInternal.call(this);
    this.detachEvents_()
};
e.LABEL_CLASS_NAME = "label-input-label";
e.handleFocus_ = function() {
    this.hasFocus_ = !0;
    var a = this.getElement();
    B(a);
    zf(a, this.LABEL_CLASS_NAME);
    if (!Rh && !this.hasChanged() && !this.inFocusAndSelect_) {
        var b = this,
            a = function() {
                b.getElement() && (b.getElement().value = "")
            };
        E ? X(a, 10) : a()
    }
};
e.handleBlur_ = function() {
    Rh || (this.eventHandler_.unlisten(this.getElement(), "click", this.handleFocus_), this.ffKeyRestoreValue_ = null);
    this.hasFocus_ = !1;
    this.check_()
};
e.handleEscapeKeys_ = function(a) {
    27 == a.keyCode && ("keydown" == a.type ? this.ffKeyRestoreValue_ = this.getElement().value : "keypress" == a.type ? this.getElement().value = this.ffKeyRestoreValue_ : "keyup" == a.type && (this.ffKeyRestoreValue_ = null), a.preventDefault())
};
e.handleFormSubmit_ = function() {
    this.hasChanged() || (this.getElement().value = "", X(this.handleAfterSubmit_, 10, this))
};
e.handleAfterSubmit_ = function() {
    this.hasChanged() || (this.getElement().value = this.label_)
};
e.handleWindowLoad_ = function() {
    this.check_()
};
e.hasFocus = function() {
    return this.hasFocus_
};
e.hasChanged = function() {
    return !!this.getElement() && "" != this.getElement().value && this.getElement().value != this.label_
};
e.clear = function() {
    this.getElement().value = "";
    null != this.ffKeyRestoreValue_ && (this.ffKeyRestoreValue_ = "")
};
e.reset = function() {
    this.hasChanged() && (this.clear(), this.check_())
};
e.setValue = function(a) {
    null != this.ffKeyRestoreValue_ && (this.ffKeyRestoreValue_ = a);
    this.getElement().value = a;
    this.check_()
};
e.getValue = function() {
    return null != this.ffKeyRestoreValue_ ? this.ffKeyRestoreValue_ : this.hasChanged() ? this.getElement().value : ""
};
e.setLabel = function(a) {
    Rh ? (this.label_ = a, this.getElement() && (this.getElement().placeholder = this.label_)) : (this.getElement() && !this.hasChanged() && (this.getElement().value = ""), this.label_ = a, this.restoreLabel_(), (a = this.getElement()) && Y(a, "label", this.label_))
};
e.check_ = function() {
    var a = this.getElement();
    B(a, "The label input element cannot be null.");
    Rh ? this.getElement().placeholder != this.label_ && (this.getElement().placeholder = this.label_) : (this.attachEventsToForm_(), Y(a, "label", this.label_));
    this.hasChanged() ? (a = this.getElement(), B(a), zf(a, this.LABEL_CLASS_NAME)) : (this.inFocusAndSelect_ || this.hasFocus_ || (a = this.getElement(), B(a), xf(a, this.LABEL_CLASS_NAME)), Rh || X(this.restoreLabel_, this.labelRestoreDelayMs, this))
};
e.focusAndSelect = function() {
    var a = this.hasChanged();
    this.inFocusAndSelect_ = !0;
    this.getElement().focus();
    a || Rh || (this.getElement().value = this.label_);
    this.getElement().select();
    Rh || (this.eventHandler_ && this.eventHandler_.listenOnce(this.getElement(), "click", this.handleFocus_), X(this.focusAndSelect_, 10, this))
};
e.setEnabled = function(a) {
    this.getElement().disabled = !a;
    var b = this.getElement();
    B(b);
    Bf(b, this.LABEL_CLASS_NAME + "-disabled", !a)
};
e.isEnabled = function() {
    return !this.getElement().disabled
};
e.focusAndSelect_ = function() {
    this.inFocusAndSelect_ = !1
};
e.restoreLabel_ = function() {
    !this.getElement() || this.hasChanged() || this.hasFocus_ || (this.getElement().value = this.label_)
};
var Sh;
Sh = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz",
        "h:mm:ss a z", "h:mm:ss a", "h:mm a"
    ],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};
var Th = function(a, b, c) {
    ma(a) ? (this.date = this.buildDate_(a, b || 0, c || 1), this.maybeFixDst_(c || 1)) : pa(a) ? (this.date = this.buildDate_(a.getFullYear(), a.getMonth(), a.getDate()), this.maybeFixDst_(a.getDate())) : (this.date = new Date(Aa()), this.date.setHours(0), this.date.setMinutes(0), this.date.setSeconds(0), this.date.setMilliseconds(0))
};
e = Th.prototype;
e.buildDate_ = function(a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b
};
e.firstDayOfWeek_ = Sh.FIRSTDAYOFWEEK;
e.firstWeekCutOffDay_ = Sh.FIRSTWEEKCUTOFFDAY;
e.clone = function() {
    var a = new Th(this.date);
    a.firstDayOfWeek_ = this.firstDayOfWeek_;
    a.firstWeekCutOffDay_ = this.firstWeekCutOffDay_;
    return a
};
e.getFullYear = function() {
    return this.date.getFullYear()
};
e.getYear = function() {
    return this.getFullYear()
};
e.getMonth = function() {
    return this.date.getMonth()
};
e.getDate = function() {
    return this.date.getDate()
};
e.getTime = function() {
    return this.date.getTime()
};
e.getDay = function() {
    return this.date.getDay()
};
e.getUTCFullYear = function() {
    return this.date.getUTCFullYear()
};
e.getUTCMonth = function() {
    return this.date.getUTCMonth()
};
e.getUTCDate = function() {
    return this.date.getUTCDate()
};
e.getUTCHours = function() {
    return this.date.getUTCHours()
};
e.getUTCMinutes = function() {
    return this.date.getUTCMinutes()
};
e.getTimezoneOffset = function() {
    return this.date.getTimezoneOffset()
};
e.getTimezoneOffsetString = function() {
    var a;
    a = this.getTimezoneOffset();
    if (0 == a) a = "Z";
    else {
        var b = Math.abs(a) / 60,
            c = Math.floor(b),
            b = 60 * (b - c);
        a = (0 < a ? "-" : "+") + ab(c, 2) + ":" + ab(b, 2)
    }
    return a
};
e.set = function(a) {
    this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
e.setFullYear = function(a) {
    this.date.setFullYear(a)
};
e.setYear = function(a) {
    this.setFullYear(a)
};
e.setMonth = function(a) {
    this.date.setMonth(a)
};
e.setDate = function(a) {
    this.date.setDate(a)
};
e.add = function(a) {
    if (a.years || a.months) {
        var b = this.getMonth() + a.months + 12 * a.years,
            c = this.getYear() + Math.floor(b / 12),
            b = b % 12;
        0 > b && (b += 12);
        var d;
        t: {
            switch (b) {
                case 1:
                    d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                    break t;
                case 5:
                case 8:
                case 10:
                case 3:
                    d = 30;
                    break t
            }
            d = 31
        }
        d = Math.min(d, this.getDate());
        this.setDate(1);
        this.setFullYear(c);
        this.setMonth(b);
        this.setDate(d)
    }
    a.days && (b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.days), this.setDate(1), this.setFullYear(a.getFullYear()),
        this.setMonth(a.getMonth()), this.setDate(a.getDate()), this.maybeFixDst_(a.getDate()))
};
e.toIsoString = function(a, b) {
    return [this.getFullYear(), ab(this.getMonth() + 1, 2), ab(this.getDate(), 2)].join(a ? "-" : "") + (b ? this.getTimezoneOffsetString() : "")
};
e.toString = function() {
    return this.toIsoString()
};
e.maybeFixDst_ = function(a) {
    this.getDate() != a && (a = this.getDate() < a ? 1 : -1, this.date.setUTCHours(this.date.getUTCHours() + a))
};
e.valueOf = function() {
    return this.date.valueOf()
};
new Th(0, 0, 1);
new Th(9999, 11, 31);
var Uh = function() {}, Vh = function(a) {
        if ("number" == typeof a) {
            var b = new Uh;
            b.standardOffset_ = a;
            var c;
            c = a;
            if (0 == c) c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", ab(c, 2));
                c = d.join("")
            }
            b.timeZoneId_ = c;
            0 == a ? a = "UTC" : (c = ["UTC", 0 > a ? "+" : "-"], a = Math.abs(a), c.push(Math.floor(a / 60) % 100), a %= 60, 0 != a && c.push(":", a), a = c.join(""));
            b.tzNames_ = [a, a];
            b.transitions_ = [];
            return b
        }
        b = new Uh;
        b.timeZoneId_ = a.id;
        b.standardOffset_ = -a.std_offset;
        b.tzNames_ = a.names;
        b.transitions_ = a.transitions;
        return b
    };
e = Uh.prototype;
e.getDaylightAdjustment = function(a) {
    a = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes()) / 36E5;
    for (var b = 0; b < this.transitions_.length && a >= this.transitions_[b];) b += 2;
    return 0 == b ? 0 : this.transitions_[b - 1]
};
e.getGMTString = function(a) {
    a = this.getOffset(a);
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(ab(Math.floor(a / 60) % 100, 2), ":", ab(a % 60, 2));
    return b.join("")
};
e.getLongName = function(a) {
    return this.tzNames_[this.isDaylightTime(a) ? 3 : 1]
};
e.getOffset = function(a) {
    return this.standardOffset_ - this.getDaylightAdjustment(a)
};
e.getRFCTimeZoneString = function(a) {
    a = -this.getOffset(a);
    var b = [0 > a ? "-" : "+"];
    a = Math.abs(a);
    b.push(ab(Math.floor(a / 60) % 100, 2), ab(a % 60, 2));
    return b.join("")
};
e.getShortName = function(a) {
    return this.tzNames_[this.isDaylightTime(a) ? 2 : 0]
};
e.getTimeZoneId = function() {
    return this.timeZoneId_
};
e.isDaylightTime = function(a) {
    return 0 < this.getDaylightAdjustment(a)
};
var Wh = function(a, b) {
    B(ba(a), "Pattern must be defined");
    B(ba(b) || ba(Sh), "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.patternParts_ = [];
    this.dateTimeSymbols_ = b || Sh;
    "number" == typeof a ? this.applyStandardPattern_(a) : this.applyPattern_(a)
}, Xh = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvwzZ]+/];
e = Wh.prototype;
e.applyPattern_ = function(a) {
    for (; a;)
        for (var b = 0; b < Xh.length; ++b) {
            var c = a.match(Xh[b]);
            if (c) {
                c = c[0];
                a = a.substring(c.length);
                0 == b && ("''" == c ? c = "'" : (c = c.substring(1, c.length - 1), c = c.replace(/\'\'/, "'")));
                this.patternParts_.push({
                    text: c,
                    type: b
                });
                break
            }
        }
};
e.format = function(a, b) {
    if (!a) throw Error("The date to format must be non-null.");
    var c = b ? 6E4 * (a.getTimezoneOffset() - b.getOffset(a)) : 0,
        d = c ? new Date(a.getTime() + c) : a,
        f = d;
    b && d.getTimezoneOffset() != a.getTimezoneOffset() && (f = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
    for (var c = [], g = 0; g < this.patternParts_.length; ++g) {
        var h = this.patternParts_[g].text;
        1 == this.patternParts_[g].type ? c.push(this.formatField_(h, a, d, f, b)) : c.push(h)
    }
    return c.join("")
};
e.applyStandardPattern_ = function(a) {
    var b;
    if (4 > a) b = this.dateTimeSymbols_.DATEFORMATS[a];
    else if (8 > a) b = this.dateTimeSymbols_.TIMEFORMATS[a - 4];
    else if (12 > a) b = this.dateTimeSymbols_.DATETIMEFORMATS[a - 8], b = b.replace("{1}", this.dateTimeSymbols_.DATEFORMATS[a - 8]), b = b.replace("{0}", this.dateTimeSymbols_.TIMEFORMATS[a - 8]);
    else {
        this.applyStandardPattern_(10);
        return
    }
    this.applyPattern_(b)
};
e.localizeNumbers_ = function(a) {
    a = String(a);
    var b = this.dateTimeSymbols_ || Sh;
    if (void 0 !== b.ZERODIGIT) {
        for (var c = [], d = 0; d < a.length; d++) {
            var f = a.charCodeAt(d);
            c.push(48 <= f && 57 >= f ? String.fromCharCode(b.ZERODIGIT + f - 48) : a.charAt(d))
        }
        a = c.join("")
    }
    return a
};
e.formatEra_ = function(a, b) {
    var c = 0 < b.getFullYear() ? 1 : 0;
    return 4 <= a ? this.dateTimeSymbols_.ERANAMES[c] : this.dateTimeSymbols_.ERAS[c]
};
e.formatYear_ = function(a, b) {
    var c = b.getFullYear();
    0 > c && (c = -c);
    2 == a && (c %= 100);
    return this.localizeNumbers_(ab(c, a))
};
e.formatMonth_ = function(a, b) {
    var c = b.getMonth();
    switch (a) {
        case 5:
            return this.dateTimeSymbols_.NARROWMONTHS[c];
        case 4:
            return this.dateTimeSymbols_.MONTHS[c];
        case 3:
            return this.dateTimeSymbols_.SHORTMONTHS[c];
        default:
            return this.localizeNumbers_(ab(c + 1, a))
    }
};
var Yh = function(a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
};
e = Wh.prototype;
e.format24Hours_ = function(a, b) {
    Yh(b);
    return this.localizeNumbers_(ab(b.getHours() || 24, a))
};
e.formatFractionalSeconds_ = function(a, b) {
    return this.localizeNumbers_((b.getTime() % 1E3 / 1E3).toFixed(Math.min(3, a)).substr(2) + (3 < a ? ab(0, a - 3) : ""))
};
e.formatDayOfWeek_ = function(a, b) {
    var c = b.getDay();
    return 4 <= a ? this.dateTimeSymbols_.WEEKDAYS[c] : this.dateTimeSymbols_.SHORTWEEKDAYS[c]
};
e.formatAmPm_ = function(a, b) {
    Yh(b);
    var c = b.getHours();
    return this.dateTimeSymbols_.AMPMS[12 <= c && 24 > c ? 1 : 0]
};
e.format1To12Hours_ = function(a, b) {
    Yh(b);
    return this.localizeNumbers_(ab(b.getHours() % 12 || 12, a))
};
e.format0To11Hours_ = function(a, b) {
    Yh(b);
    return this.localizeNumbers_(ab(b.getHours() % 12, a))
};
e.format0To23Hours_ = function(a, b) {
    Yh(b);
    return this.localizeNumbers_(ab(b.getHours(), a))
};
e.formatStandaloneDay_ = function(a, b) {
    var c = b.getDay();
    switch (a) {
        case 5:
            return this.dateTimeSymbols_.STANDALONENARROWWEEKDAYS[c];
        case 4:
            return this.dateTimeSymbols_.STANDALONEWEEKDAYS[c];
        case 3:
            return this.dateTimeSymbols_.STANDALONESHORTWEEKDAYS[c];
        default:
            return this.localizeNumbers_(ab(c, 1))
    }
};
e.formatStandaloneMonth_ = function(a, b) {
    var c = b.getMonth();
    switch (a) {
        case 5:
            return this.dateTimeSymbols_.STANDALONENARROWMONTHS[c];
        case 4:
            return this.dateTimeSymbols_.STANDALONEMONTHS[c];
        case 3:
            return this.dateTimeSymbols_.STANDALONESHORTMONTHS[c];
        default:
            return this.localizeNumbers_(ab(c + 1, a))
    }
};
e.formatQuarter_ = function(a, b) {
    var c = Math.floor(b.getMonth() / 3);
    return 4 > a ? this.dateTimeSymbols_.SHORTQUARTERS[c] : this.dateTimeSymbols_.QUARTERS[c]
};
e.formatDate_ = function(a, b) {
    return this.localizeNumbers_(ab(b.getDate(), a))
};
e.formatMinutes_ = function(a, b) {
    Yh(b);
    return this.localizeNumbers_(ab(b.getMinutes(), a))
};
e.formatSeconds_ = function(a, b) {
    Yh(b);
    return this.localizeNumbers_(ab(b.getSeconds(), a))
};
e.formatWeekOfYear_ = function(a, b) {
    var c;
    c = b.getFullYear();
    var d = b.getMonth(),
        f = b.getDate();
    c = new Date(c, d, f);
    var d = this.dateTimeSymbols_.FIRSTWEEKCUTOFFDAY || 3,
        f = this.dateTimeSymbols_.FIRSTDAYOFWEEK || 0,
        g = ((c.getDay() + 6) % 7 - f + 7) % 7;
    c = c.valueOf() + 864E5 * ((d - f + 7) % 7 - g);
    d = (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf();
    c = Math.floor(Math.round((c - d) / 864E5) / 7) + 1;
    return this.localizeNumbers_(ab(c, a))
};
e.formatTimeZoneRFC_ = function(a, b, c) {
    c = c || Vh(b.getTimezoneOffset());
    return 4 > a ? c.getRFCTimeZoneString(b) : this.localizeNumbers_(c.getGMTString(b))
};
e.formatTimeZone_ = function(a, b, c) {
    c = c || Vh(b.getTimezoneOffset());
    return 4 > a ? c.getShortName(b) : c.getLongName(b)
};
e.formatTimeZoneId_ = function(a, b) {
    b = b || Vh(a.getTimezoneOffset());
    return b.getTimeZoneId()
};
e.formatField_ = function(a, b, c, d, f) {
    var g = a.length;
    switch (a.charAt(0)) {
        case "G":
            return this.formatEra_(g, c);
        case "y":
            return this.formatYear_(g, c);
        case "M":
            return this.formatMonth_(g, c);
        case "k":
            return this.format24Hours_(g, d);
        case "S":
            return this.formatFractionalSeconds_(g, d);
        case "E":
            return this.formatDayOfWeek_(g, c);
        case "a":
            return this.formatAmPm_(g, d);
        case "h":
            return this.format1To12Hours_(g, d);
        case "K":
            return this.format0To11Hours_(g, d);
        case "H":
            return this.format0To23Hours_(g, d);
        case "c":
            return this.formatStandaloneDay_(g,
                c);
        case "L":
            return this.formatStandaloneMonth_(g, c);
        case "Q":
            return this.formatQuarter_(g, c);
        case "d":
            return this.formatDate_(g, c);
        case "m":
            return this.formatMinutes_(g, d);
        case "s":
            return this.formatSeconds_(g, d);
        case "v":
            return this.formatTimeZoneId_(b, f);
        case "w":
            return this.formatWeekOfYear_(g, d);
        case "z":
            return this.formatTimeZone_(g, b, f);
        case "Z":
            return this.formatTimeZoneRFC_(g, b, f);
        default:
            return ""
    }
};
ah("goog.i18n.uChar.LocalNameFetcher");
var Zh = function(a) {
    return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
}, $h = function(a) {
        a = String(a);
        if (Zh(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };
/\uffff/.test("\uffff");
var ai = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
    ii = function(a) {
        if (hi) {
            hi = !1;
            var b = t.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = ii(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw hi = !0, Error();
            }
        }
        return a.match(ai)
    }, hi = K;
var ji = function() {};
ji.prototype.cachedOptions_ = null;
ji.prototype.getOptions = function() {
    return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions())
};
var ki, li = function() {};
z(li, ji);
li.prototype.createInstance = function() {
    var a = this.getProgId_();
    return a ? new ActiveXObject(a) : new XMLHttpRequest
};
li.prototype.internalGetOptions = function() {
    var a = {};
    this.getProgId_() && (a[0] = !0, a[1] = !0);
    return a
};
li.prototype.getProgId_ = function() {
    if (!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                return new ActiveXObject(c), this.ieProgId_ = c
            } catch (d) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return this.ieProgId_
};
ki = new li;
var mi = function(a) {
    U.call(this);
    this.headers = new ag;
    this.xmlHttpFactory_ = a || null;
    this.active_ = !1;
    this.xhrOptions_ = this.xhr_ = null;
    this.lastError_ = this.lastMethod_ = this.lastUri_ = "";
    this.inAbort_ = this.inOpen_ = this.inSend_ = this.errorDispatched_ = !1;
    this.timeoutInterval_ = 0;
    this.timeoutId_ = null;
    this.responseType_ = "";
    this.useXhr2Timeout_ = this.withCredentials_ = !1
};
z(mi, U);
mi.prototype.logger_ = ah("goog.net.XhrIo");
var ni = /^https?$/i,
    oi = ["POST", "PUT"],
    pi = [],
    qi = function(a, b, c, d, f, g, h) {
        var k = new mi;
        pi.push(k);
        b && k.listen("complete", b);
        k.listenOnce("ready", k.cleanupSend_);
        g && k.setTimeoutInterval(g);
        h && k.setWithCredentials(h);
        k.send(a, c, d, f)
    };
mi.prototype.cleanupSend_ = function() {
    this.dispose();
    zb(pi, this)
};
mi.prototype.setTimeoutInterval = function(a) {
    this.timeoutInterval_ = Math.max(0, a)
};
mi.prototype.setWithCredentials = function(a) {
    this.withCredentials_ = a
};
mi.prototype.send = function(a, b, c, d) {
    if (this.xhr_) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.lastUri_ = a;
    this.lastError_ = "";
    this.lastMethod_ = b;
    this.errorDispatched_ = !1;
    this.active_ = !0;
    this.xhr_ = this.createXhr();
    this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : ki.getOptions();
    this.xhr_.onreadystatechange = x(this.onReadyStateChange_, this);
    try {
        bh(this.logger_, this.formatMsg_("Opening Xhr")), this.inOpen_ = !0, this.xhr_.open(b, String(a), !0), this.inOpen_ = !1
    } catch (f) {
        bh(this.logger_, this.formatMsg_("Error opening Xhr: " + f.message));
        this.error_(5, f);
        return
    }
    a = c || "";
    var g = this.headers.clone();
    d && Kg(d, function(a, b) {
        g.set(b, a)
    });
    d = wb(g.getKeys(), ri);
    c = t.FormData && a instanceof t.FormData;
    !xb(oi, b) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    g.forEach(function(a, b) {
        this.xhr_.setRequestHeader(b, a)
    }, this);
    this.responseType_ && (this.xhr_.responseType = this.responseType_);
    "withCredentials" in
        this.xhr_ && (this.xhr_.withCredentials = this.withCredentials_);
    try {
        this.cleanUpTimeoutTimer_(), 0 < this.timeoutInterval_ && (this.useXhr2Timeout_ = si(this.xhr_), bh(this.logger_, this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete, xhr2 " + this.useXhr2Timeout_)), this.useXhr2Timeout_ ? (this.xhr_.timeout = this.timeoutInterval_, this.xhr_.ontimeout = x(this.timeout_, this)) : this.timeoutId_ = X(this.timeout_, this.timeoutInterval_, this)), bh(this.logger_, this.formatMsg_("Sending request")), this.inSend_ = !0, this.xhr_.send(a), this.inSend_ = !1
    } catch (h) {
        bh(this.logger_, this.formatMsg_("Send error: " + h.message)), this.error_(5, h)
    }
};
var si = function(a) {
    return E && Zb(9) && ma(a.timeout) && ba(a.ontimeout)
}, ri = function(a) {
        return "content-type" == a.toLowerCase()
    };
e = mi.prototype;
e.createXhr = function() {
    return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : ki.createInstance()
};
e.timeout_ = function() {
    "undefined" != typeof aa && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", bh(this.logger_, this.formatMsg_(this.lastError_)), this.dispatchEvent("timeout"), this.abort(8))
};
e.error_ = function(a, b) {
    this.active_ = !1;
    this.xhr_ && (this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1);
    this.lastError_ = b;
    this.dispatchErrors_();
    this.cleanUpXhr_()
};
e.dispatchErrors_ = function() {
    this.errorDispatched_ || (this.errorDispatched_ = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"))
};
e.abort = function() {
    this.xhr_ && this.active_ && (bh(this.logger_, this.formatMsg_("Aborting")), this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.cleanUpXhr_())
};
e.disposeInternal = function() {
    this.xhr_ && (this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1), this.cleanUpXhr_(!0));
    mi.superClass_.disposeInternal.call(this)
};
e.onReadyStateChange_ = function() {
    if (!this.isDisposed())
        if (this.inOpen_ || this.inSend_ || this.inAbort_) this.onReadyStateChangeHelper_();
        else this.onReadyStateChangeEntryPoint_()
};
e.onReadyStateChangeEntryPoint_ = function() {
    this.onReadyStateChangeHelper_()
};
e.onReadyStateChangeHelper_ = function() {
    if (this.active_ && "undefined" != typeof aa)
        if (this.xhrOptions_[1] && 4 == this.getReadyState() && 2 == this.getStatus()) bh(this.logger_, this.formatMsg_("Local request error detected and ignored"));
        else if (this.inSend_ && 4 == this.getReadyState()) X(this.onReadyStateChange_, 0, this);
    else if (this.dispatchEvent("readystatechange"), this.isComplete()) {
        bh(this.logger_, this.formatMsg_("Request complete"));
        this.active_ = !1;
        try {
            this.isSuccess() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) :
                (this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]", this.dispatchErrors_())
        } finally {
            this.cleanUpXhr_()
        }
    }
};
e.cleanUpXhr_ = function(a) {
    if (this.xhr_) {
        this.cleanUpTimeoutTimer_();
        var b = this.xhr_,
            c = this.xhrOptions_[0] ? fa : null;
        this.xhrOptions_ = this.xhr_ = null;
        a || this.dispatchEvent("ready");
        try {
            b.onreadystatechange = c
        } catch (d) {
            (a = this.logger_) && a.severe("Problem encountered resetting onreadystatechange: " + d.message, void 0)
        }
    }
};
e.cleanUpTimeoutTimer_ = function() {
    this.xhr_ && this.useXhr2Timeout_ && (this.xhr_.ontimeout = null);
    ma(this.timeoutId_) && (t.clearTimeout(this.timeoutId_), this.timeoutId_ = null)
};
e.isActive = function() {
    return !!this.xhr_
};
e.isComplete = function() {
    return 4 == this.getReadyState()
};
e.isSuccess = function() {
    var a = this.getStatus(),
        b;
    t: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            b = !0;
            break t;
        default:
            b = !1
    }
    return b || 0 === a && !this.isLastUriEffectiveSchemeHttp_()
};
e.isLastUriEffectiveSchemeHttp_ = function() {
    var a = ii(String(this.lastUri_))[1] || null;
    !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
    return ni.test(a ? a.toLowerCase() : "")
};
e.getReadyState = function() {
    return this.xhr_ ? this.xhr_.readyState : 0
};
e.getStatus = function() {
    try {
        return 2 < this.getReadyState() ? this.xhr_.status : -1
    } catch (a) {
        return -1
    }
};
e.getStatusText = function() {
    try {
        return 2 < this.getReadyState() ? this.xhr_.statusText : ""
    } catch (a) {
        return bh(this.logger_, "Can not get status: " + a.message), ""
    }
};
e.getResponseText = function() {
    try {
        return this.xhr_ ? this.xhr_.responseText : ""
    } catch (a) {
        return bh(this.logger_, "Can not get responseText: " + a.message), ""
    }
};
e.getResponseJson = function(a) {
    if (this.xhr_) {
        var b = this.xhr_.responseText;
        a && 0 == b.indexOf(a) && (b = b.substring(a.length));
        return $h(b)
    }
};
e.formatMsg_ = function(a) {
    return a + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]"
};
var ti = function(a, b) {
    var c;
    a instanceof ti ? (this.ignoreCase_ = ba(b) ? b : a.getIgnoreCase(), this.setScheme(a.getScheme()), this.setUserInfo(a.getUserInfo()), this.setDomain(a.getDomain()), this.setPort(a.getPort()), this.setPath(a.getPath()), this.setQueryData(a.getQueryData().clone()), this.setFragment(a.getFragment())) : a && (c = ii(String(a))) ? (this.ignoreCase_ = !! b, this.setScheme(c[1] || "", !0), this.setUserInfo(c[2] || "", !0), this.setDomain(c[3] || "", !0), this.setPort(c[4]), this.setPath(c[5] || "", !0), this.setQueryData(c[6] ||
        "", !0), this.setFragment(c[7] || "", !0)) : (this.ignoreCase_ = !! b, this.queryData_ = new ui(null, null, this.ignoreCase_))
};
e = ti.prototype;
e.scheme_ = "";
e.userInfo_ = "";
e.domain_ = "";
e.port_ = null;
e.path_ = "";
e.fragment_ = "";
e.isReadOnly_ = !1;
e.ignoreCase_ = !1;
e.toString = function() {
    var a = [],
        b = this.getScheme();
    b && a.push(vi(b, wi), ":");
    if (b = this.getDomain()) {
        a.push("//");
        var c = this.getUserInfo();
        c && a.push(vi(c, wi), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.getPort();
        null != b && a.push(":", String(b))
    }
    if (b = this.getPath()) this.hasDomain() && "/" != b.charAt(0) && a.push("/"), a.push(vi(b, "/" == b.charAt(0) ? xi : yi));
    (b = this.getEncodedQuery()) && a.push("?", b);
    (b = this.getFragment()) && a.push("#", vi(b, zi));
    return a.join("")
};
e.clone = function() {
    return new ti(this)
};
e.getScheme = function() {
    return this.scheme_
};
e.setScheme = function(a, b) {
    this.enforceReadOnly();
    if (this.scheme_ = b ? a ? decodeURIComponent(a) : "" : a) this.scheme_ = this.scheme_.replace(/:$/, "");
    return this
};
e.getUserInfo = function() {
    return this.userInfo_
};
e.setUserInfo = function(a, b) {
    this.enforceReadOnly();
    this.userInfo_ = b ? a ? decodeURIComponent(a) : "" : a;
    return this
};
e.getDomain = function() {
    return this.domain_
};
e.setDomain = function(a, b) {
    this.enforceReadOnly();
    this.domain_ = b ? a ? decodeURIComponent(a) : "" : a;
    return this
};
e.hasDomain = function() {
    return !!this.domain_
};
e.getPort = function() {
    return this.port_
};
e.setPort = function(a) {
    this.enforceReadOnly();
    if (a) {
        a = Number(a);
        if (isNaN(a) || 0 > a) throw Error("Bad port number " + a);
        this.port_ = a
    } else this.port_ = null;
    return this
};
e.getPath = function() {
    return this.path_
};
e.setPath = function(a, b) {
    this.enforceReadOnly();
    this.path_ = b ? a ? decodeURIComponent(a) : "" : a;
    return this
};
e.setQueryData = function(a, b) {
    this.enforceReadOnly();
    a instanceof ui ? (this.queryData_ = a, this.queryData_.setIgnoreCase(this.ignoreCase_)) : (b || (a = vi(a, Ai)), this.queryData_ = new ui(a, null, this.ignoreCase_));
    return this
};
e.getEncodedQuery = function() {
    return this.queryData_.toString()
};
e.getQueryData = function() {
    return this.queryData_
};
e.setParameterValue = function(a, b) {
    this.enforceReadOnly();
    this.queryData_.set(a, b);
    return this
};
e.setParameterValues = function(a, b) {
    this.enforceReadOnly();
    ka(b) || (b = [String(b)]);
    this.queryData_.setValues(a, b);
    return this
};
e.getFragment = function() {
    return this.fragment_
};
e.setFragment = function(a, b) {
    this.enforceReadOnly();
    this.fragment_ = b ? a ? decodeURIComponent(a) : "" : a;
    return this
};
e.enforceReadOnly = function() {
    if (this.isReadOnly_) throw Error("Tried to modify a read-only Uri");
};
e.setIgnoreCase = function(a) {
    this.ignoreCase_ = a;
    this.queryData_ && this.queryData_.setIgnoreCase(a);
    return this
};
e.getIgnoreCase = function() {
    return this.ignoreCase_
};
var vi = function(a, b) {
    return w(a) ? encodeURI(a).replace(b, Bi) : null
}, Bi = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, wi = /[#\/\?@]/g,
    yi = /[\#\?:]/g,
    xi = /[\#\?]/g,
    Ai = /[\#\?@]/g,
    zi = /#/g,
    ui = function(a, b, c) {
        this.encodedQuery_ = a || null;
        this.ignoreCase_ = !! c
    };
ui.prototype.ensureKeyMapInitialized_ = function() {
    if (!this.keyMap_ && (this.keyMap_ = new ag, this.count_ = 0, this.encodedQuery_))
        for (var a = this.encodedQuery_.split("&"), b = 0; b < a.length; b++) {
            var c = a[b].indexOf("="),
                d = null,
                f = null;
            0 <= c ? (d = a[b].substring(0, c), f = a[b].substring(c + 1)) : d = a[b];
            d = Ia(d);
            d = this.getKeyName_(d);
            this.add(d, f ? Ia(f) : "")
        }
};
var Ci = function(a, b, c) {
    b = Jg(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    c = new ui(null, null, c);
    a = Ig(a);
    for (var d = 0; d < b.length; d++) {
        var f = b[d],
            g = a[d];
        ka(g) ? c.setValues(f, g) : c.add(f, g)
    }
    return c
};
e = ui.prototype;
e.keyMap_ = null;
e.count_ = null;
e.add = function(a, b) {
    this.ensureKeyMapInitialized_();
    this.invalidateCache_();
    a = this.getKeyName_(a);
    var c = this.keyMap_.get(a);
    c || this.keyMap_.set(a, c = []);
    c.push(b);
    this.count_++;
    return this
};
e.remove = function(a) {
    this.ensureKeyMapInitialized_();
    a = this.getKeyName_(a);
    return this.keyMap_.containsKey(a) ? (this.invalidateCache_(), this.count_ -= this.keyMap_.get(a).length, this.keyMap_.remove(a)) : !1
};
e.clear = function() {
    this.invalidateCache_();
    this.keyMap_ = null;
    this.count_ = 0
};
e.isEmpty = function() {
    this.ensureKeyMapInitialized_();
    return 0 == this.count_
};
e.containsKey = function(a) {
    this.ensureKeyMapInitialized_();
    a = this.getKeyName_(a);
    return this.keyMap_.containsKey(a)
};
e.getKeys = function() {
    this.ensureKeyMapInitialized_();
    for (var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], d = 0; d < b.length; d++)
        for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
    return c
};
e.getValues = function(a) {
    this.ensureKeyMapInitialized_();
    var b = [];
    if (w(a)) this.containsKey(a) && (b = Ab(b, this.keyMap_.get(this.getKeyName_(a))));
    else {
        a = this.keyMap_.getValues();
        for (var c = 0; c < a.length; c++) b = Ab(b, a[c])
    }
    return b
};
e.set = function(a, b) {
    this.ensureKeyMapInitialized_();
    this.invalidateCache_();
    a = this.getKeyName_(a);
    this.containsKey(a) && (this.count_ -= this.keyMap_.get(a).length);
    this.keyMap_.set(a, [b]);
    this.count_++;
    return this
};
e.get = function(a, b) {
    var c = a ? this.getValues(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
e.setValues = function(a, b) {
    this.remove(a);
    0 < b.length && (this.invalidateCache_(), this.keyMap_.set(this.getKeyName_(a), Bb(b)), this.count_ += b.length)
};
e.toString = function() {
    if (this.encodedQuery_) return this.encodedQuery_;
    if (!this.keyMap_) return "";
    for (var a = [], b = this.keyMap_.getKeys(), c = 0; c < b.length; c++)
        for (var d = b[c], f = encodeURIComponent(String(d)), d = this.getValues(d), g = 0; g < d.length; g++) {
            var h = f;
            "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
            a.push(h)
        }
    return this.encodedQuery_ = a.join("&")
};
e.invalidateCache_ = function() {
    this.encodedQuery_ = null
};
e.clone = function() {
    var a = new ui;
    a.encodedQuery_ = this.encodedQuery_;
    this.keyMap_ && (a.keyMap_ = this.keyMap_.clone(), a.count_ = this.count_);
    return a
};
e.getKeyName_ = function(a) {
    a = String(a);
    this.ignoreCase_ && (a = a.toLowerCase());
    return a
};
e.setIgnoreCase = function(a) {
    a && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), this.keyMap_.forEach(function(a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.setValues(d, a))
    }, this));
    this.ignoreCase_ = a
};
ah("goog.i18n.uChar.RemoteNameFetcher");
var Di = function() {}, Ei = new Di,
    Fi = ["click", J ? "keypress" : "keydown", "keyup"];
Di.prototype.listen = function(a, b, c, d, f) {
    var g = function(a) {
        var c = Jc(b);
        "click" == a.type && a.isMouseActionButton() ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 == a.keyCode && "keyup" == a.type && "button" == (a.target.getAttribute("role") || null) && (c.call(d, a), a.preventDefault()) : (a.type = "keypress", c.call(d, a))
    };
    g.listener_ = b;
    g.scope_ = d;
    f ? f.listen(a, Fi, g, c) : N(a, Fi, g, c)
};
Di.prototype.unlisten = function(a, b, c, d, f) {
    for (var g, h = 0; g = Fi[h]; h++) {
        var k;
        var m = a;
        k = g;
        var p = !! c;
        k = oc(m) ? m.getListeners(k, p) : m ? (m = Lc(m)) ? m.getListeners(k, p) : [] : [];
        for (m = 0; p = k[m]; m++)
            if (p.listener.listener_ == b && p.listener.scope_ == d) {
                f ? f.unlisten(a, g, p.listener, c, d) : Qc(a, g, p.listener, c, d);
                break
            }
    }
};
var Gi = function() {
    U.call(this);
    this.state_ = 0;
    this.endTime = this.startTime = null
};
z(Gi, U);
e = Gi.prototype;
e.getStateInternal = function() {
    return this.state_
};
e.setStatePlaying = function() {
    this.state_ = 1
};
e.setStatePaused = function() {
    this.state_ = -1
};
e.setStateStopped = function() {
    this.state_ = 0
};
e.isPlaying = function() {
    return 1 == this.state_
};
e.isPaused = function() {
    return -1 == this.state_
};
e.isStopped = function() {
    return 0 == this.state_
};
e.onBegin = function() {
    this.dispatchAnimationEvent("begin")
};
e.onEnd = function() {
    this.dispatchAnimationEvent("end")
};
e.onFinish = function() {
    this.dispatchAnimationEvent("finish")
};
e.onPause = function() {
    this.dispatchAnimationEvent("pause")
};
e.onPlay = function() {
    this.dispatchAnimationEvent("play")
};
e.onResume = function() {
    this.dispatchAnimationEvent("resume")
};
e.onStop = function() {
    this.dispatchAnimationEvent("stop")
};
e.dispatchAnimationEvent = function(a) {
    this.dispatchEvent(a)
};
var Ii = function(a, b) {
    ka(b) || (b = [b]);
    B(0 < b.length, "At least one Css3Property should be specified.");
    var c = rb(b, function(a) {
        if (w(a)) return a;
        lb(a, "Expected css3 property to be an object.");
        var b = a.property + " " + a.duration + "s " + a.timing + " " + a.delay + "s";
        B(a.property && ma(a.duration) && a.timing && ma(a.delay), "Unexpected css3 property value: %s", b);
        return b
    });
    Hi(a, c.join(","))
}, Ji = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        if (E) return Zb("10.0");
        var a = document.createElement("div"),
            b = ee();
        a.innerHTML = '<div style="' + (b ? b + "-transition:opacity 1s linear;" : "") + 'transition:opacity 1s linear;">';
        a = a.firstChild;
        B(a.nodeType == Node.ELEMENT_NODE);
        b = a.style[db("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[ie(a, "transition")] || "")
    }),
    Hi = function(a, b) {
        he(a, "transition", b)
    };
var Ki = function(a, b, c, d, f) {
    Gi.call(this);
    this.element_ = a;
    this.duration_ = b;
    this.initialStyle_ = c;
    this.finalStyle_ = d;
    this.transitions_ = ka(f) ? f : [f]
};
z(Ki, Gi);
e = Ki.prototype;
e.play = function() {
    if (this.isPlaying()) return !1;
    this.onBegin();
    this.onPlay();
    this.startTime = Aa();
    this.setStatePlaying();
    if (Ji()) return he(this.element_, this.initialStyle_), this.timerId_ = X(this.play_, void 0, this), !0;
    this.stop_(!1);
    return !1
};
e.play_ = function() {
    Ii(this.element_, this.transitions_);
    he(this.element_, this.finalStyle_);
    this.timerId_ = X(x(this.stop_, this, !1), 1E3 * this.duration_)
};
e.stop = function() {
    this.isPlaying() && this.stop_(!0)
};
e.stop_ = function(a) {
    Hi(this.element_, "");
    t.clearTimeout(this.timerId_);
    he(this.element_, this.finalStyle_);
    this.endTime = Aa();
    this.setStateStopped();
    if (a) this.onStop();
    else this.onFinish();
    this.onEnd()
};
e.disposeInternal = function() {
    this.stop();
    Ki.superClass_.disposeInternal.call(this)
};
e.pause = function() {
    B(!1, "Css3 transitions does not support pause action.")
};
var Li = function(a, b, c, d, f) {
    return new Ki(a, b, {
        opacity: d
    }, {
        opacity: f
    }, {
        property: "opacity",
        duration: b,
        timing: c,
        delay: 0
    })
}, Mi = function(a, b) {
        return Li(a, b, "ease-out", 0, 1)
    }, Ni = function(a, b) {
        return Li(a, b, "ease-in", 1, 0)
    };
var Oi = {
    sanitizedContentKindHtml: !0
}, Pi = {
        sanitizedContentHtmlAttribute: !0
    }, Qi = {
        sanitizedContentKindText: !0
    }, Ri = function() {
        throw Error("Do not instantiate directly");
    };
Ri.prototype.contentDir = null;
Ri.prototype.toString = function() {
    return this.content
};
Ri.prototype.toSafeHtml = function() {
    if (this.contentKind === Qi) return Of(this.toString());
    if (this.contentKind !== Oi) throw Error("Sanitized content was not of kind TEXT or HTML.");
    var a = new Ef;
    a.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.";
    var b = this.toString(),
        c = this.contentDir;
    kb(Ff(a), "must provide justification");
    B(0 < Ha(Ff(a)).length, "must provide non-empty justification");
    return Nf(b, c || null)
};
var Vi = function(a, b, c, d) {
    B(a, "Soy template may not be null.");
    d = (d || ld()).createElement("DIV");
    a = Si(a(b || Ti, void 0, c));
    b = a.match(Ui);
    B(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a);
    d.innerHTML = a;
    return 1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType) ? a : d
}, Si = function(a) {
        if (!pa(a)) return String(a);
        if (a instanceof Ri) {
            if (a.contentKind === Oi) return kb(a.content);
            if (a.contentKind === Qi) return Ra(a.content)
        }
        jb("Soy template output is unsafe for use as HTML: " + a);
        return "zSoyz"
    }, Ui = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i,
    Ti = {};
var Wi = function(a, b) {
    this.className_ = a;
    this.disableSubpixels_ = !! b;
    this.arrowClassMap_ = {
        0: this.className_ + "-arrowright",
        1: this.className_ + "-arrowup",
        2: this.className_ + "-arrowdown",
        3: this.className_ + "-arrowleft"
    }
};
z(Wi, Te);
e = Wi.prototype;
e.isAutoReposition_ = !1;
e.arrowAlignment_ = 2;
e.arrowOffset_ = 20;
e.boxPosition_ = 3;
e.viewport_ = null;
e.offsetFromAnchor_ = -5;
e.setAnchorElement = function(a) {
    this.anchorElement_ = a
};
e.setPosition = function(a, b, c, d) {
    null != a && (this.boxPosition_ = a);
    null != b && (this.arrowAlignment_ = b);
    ma(c) && (this.arrowOffset_ = Math.max(c, 15));
    ma(d) && (this.offsetFromAnchor_ = d)
};
e.setElements = function(a, b) {
    this.boxElement_ = a;
    this.arrowElement_ = b
};
e.reposition = function(a, b, c) {
    B(this.arrowElement_, "Must call setElements first.");
    this.reposition_(this.boxPosition_, this.getEffectiveAlignment_(this.boxPosition_, this.arrowAlignment_), this.getEffectiveArrowOffset_(), c)
};
e.getEffectiveArrowOffset_ = function() {
    return 2 == this.arrowAlignment_ ? Xi(this.boxPosition_) ? this.boxElement_.offsetHeight / 2 : this.boxElement_.offsetWidth / 2 : this.arrowOffset_
};
e.getEffectiveAlignment_ = function(a, b) {
    2 == b && (b = 0);
    return b
};
e.setAutoReposition = function(a) {
    this.isAutoReposition_ = a
};
e.reposition_ = function(a, b, c, d, f) {
    if (this.anchorElement_) {
        var g = Yi(a, b),
            h;
        h = this.anchorElement_;
        var k = this.boxElement_,
            m = this.viewport_,
            p = De(h);
        t: {
            var p = (Xi(a) ? p.height / 2 : p.width / 2) - c,
                l = Qe(h, g);
            if (m) m = m.clone(), k && (k = Pe(k), m.left += k.x, m.right += k.x, m.top += k.y, m.bottom += k.y);
            else if (m = te(h), !m) {
                h = p;
                break t
            }
            h = Ee(h).toBox();
            Xi(a) ? h.top < m.top && !(l & 1) ? p -= m.top - h.top : h.bottom > m.bottom && l & 1 && (p -= h.bottom - m.bottom) : h.left < m.left && !(l & 2) ? p -= m.left - h.left : h.right > m.right && l & 2 && (p -= h.right - m.right);
            h = p
        }
        h = Xi(a) ? new P(this.offsetFromAnchor_, h) : new P(h, this.offsetFromAnchor_);
        p = Xi(a) ? 6 : 9;
        l = a ^ 3;
        Xi(a) && "rtl" == this.anchorElement_.dir && (l = a);
        g = Se(this.anchorElement_, Yi(l, b), this.boxElement_, g, h, d, this.isAutoReposition_ ? p : 0, void 0, this.viewport_);
        if (!f && g & 496) {
            this.reposition_(a ^ 3, b, c, d, !0);
            return
        }!this.disableSubpixels_ || g & 496 || (d = parseFloat(this.boxElement_.style.left), f = parseFloat(this.boxElement_.style.top), B(!isNaN(d) && !isNaN(f), "Could not parse position."), isFinite(d) && 0 == d % 1 && isFinite(f) && 0 == f % 1 || ne(this.boxElement_,
            Math.round(d), Math.round(f)))
    }
    this.positionArrow_(a, b, c)
};
e.positionArrow_ = function(a, b, c) {
    var d = this.arrowElement_;
    qc(this.arrowClassMap_, function(a) {
        Bf(d, a, !1)
    }, this);
    xf(d, this.arrowClassMap_[a]);
    d.style.top = d.style.left = d.style.right = d.style.bottom = "";
    this.anchorElement_ ? (b = xe(this.anchorElement_, this.boxElement_), c = Zi(this.anchorElement_, a), Xi(a) ? (a = $i(b.y + c.y, 15, this.boxElement_.offsetHeight - 15), d.style.top = a + "px") : (a = $i(b.x + c.x, 15, this.boxElement_.offsetWidth - 15), d.style.left = a + "px")) : d.style[0 == b ? Xi(a) ? "top" : "left" : Xi(a) ? "bottom" : "right"] = c + "px"
};
var $i = function(a, b, c) {
    return b > c ? b : Xc(a, b, c)
}, Yi = function(a, b) {
        switch (a) {
            case 2:
                return 0 == b ? 1 : 3;
            case 1:
                return 0 == b ? 0 : 2;
            case 0:
                return 0 == b ? 6 : 7;
            default:
                return 0 == b ? 4 : 5
        }
    }, Zi = function(a, b) {
        var c = 0,
            d = 0,
            f = De(a);
        switch (b) {
            case 2:
                c = f.width / 2;
                break;
            case 1:
                c = f.width / 2;
                d = f.height;
                break;
            case 0:
                d = f.height / 2;
                break;
            case 3:
                c = f.width, d = f.height / 2
        }
        return new P(c, d)
    }, Xi = function(a) {
        return 0 == a || 3 == a
    };
E && Zb(8);
var aj = function(a) {
    if (null != a) switch (a.contentDir) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}, bj = function() {
        Ri.call(this)
    };
z(bj, Ri);
bj.prototype.contentKind = Oi;
var ej = function(a) {
    return null != a && a.contentKind === Oi ? (B(a.constructor === bj), a) : Z(String(String(a)).replace(cj, dj), aj(a))
}, fj = function() {
        Ri.call(this)
    };
z(fj, Ri);
fj.prototype.contentKind = {
    sanitizedContentJsChars: !0
};
fj.prototype.contentDir = 1;
var gj = function() {
    Ri.call(this)
};
z(gj, Ri);
gj.prototype.contentKind = {
    sanitizedContentJsStrChars: !0
};
var hj = function() {
    Ri.call(this)
};
z(hj, Ri);
hj.prototype.contentKind = {
    sanitizedContentUri: !0
};
hj.prototype.contentDir = 1;
var ij = function() {
    Ri.call(this)
};
z(ij, Ri);
ij.prototype.contentKind = Pi;
ij.prototype.contentDir = 1;
var jj = function() {
    Ri.call(this)
};
z(jj, Ri);
jj.prototype.contentKind = {
    sanitizedContentCss: !0
};
jj.prototype.contentDir = 1;
var kj = function(a, b) {
    this.content = String(a);
    this.contentDir = null != b ? b : null
};
z(kj, Ri);
kj.prototype.contentKind = Qi;
var lj = function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        var f = new b;
        f.content = String(a);
        void 0 !== d && (f.contentDir = d);
        return f
    }
}, mj = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return function(a) {
            var d = new b;
            d.content = String(a);
            return d
        }
    }, Z = lj(bj);
mj(fj);
lj(gj);
mj(hj);
mj(ij);
mj(jj);
var nj = function(a, b) {
    function c() {}
    c.prototype = a;
    var d = new c,
        f;
    for (f in b) d[f] = b[f];
    return d
}, oj = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return function(a) {
            if (!String(a)) return "";
            var d = new b;
            d.content = String(a);
            return d
        }
    };
(function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        if (!String(a)) return "";
        var f = new b;
        f.content = String(a);
        void 0 !== d && (f.contentDir = d);
        return f
    }
})(bj);
oj(fj);
oj(hj);
oj(ij);
oj(jj);
var pj = /^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\b/,
    uj = function(a, b) {
        if (!b) return String(a).replace(qj, "").replace(rj, "&lt;");
        var c = String(a).replace(/\[/g, "&#91;"),
            d = [],
            c = c.replace(qj, function(a, c) {
                if (c && (c = c.toLowerCase(), b.hasOwnProperty(c) && b[c])) {
                    var f = d.length;
                    d[f] = ("/" === a.charAt(1) ? "</" : "<") + c + ">";
                    return "[" + f + "]"
                }
                return ""
            }),
            c = String(c).replace(sj, dj),
            f = tj(d),
            c = c.replace(/\[(\d+)\]/g, function(a, b) {
                return d[b]
            });
        return c + f
    }, tj = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var f = a[c];
            if ("/" === f.charAt(1)) {
                for (var g = b.length - 1; 0 <= g && b[g] != f;) g--;
                0 > g ? a[c] = "" : (a[c] = b.slice(g).reverse().join(""), b.length = g)
            } else pj.test(f) || b.push("</" + f.substring(1))
        }
        return b.reverse().join("")
    }, vj = function(a) {
        return null != a && a.contentKind === Oi ? (B(a.constructor === bj), a = uj(a.content), String(a).replace(sj, dj)) : String(a).replace(cj, dj)
    }, xj = function(a) {
        if (null != a && a.contentKind === Pi) return B(a.constructor === ij), a.content.replace(/([^"'\s])$/, "$1 ");
        a = String(a);
        wj.test(a) ||
            (jb("Bad value `%s` for |filterHtmlAttributes", [a]), a = "zSoyz");
        return a
    }, yj = function(a) {
        return null != a && a.contentKind === Qi ? (jb("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`", [a.content]), "zSoyz") : a
    }, zj = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    }, dj = function(a) {
        return zj[a]
    },
    cj = /[\x00\x22\x26\x27\x3c\x3e]/g,
    sj = /[\x00\x22\x27\x3c\x3e]/g,
    wj = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i,
    qj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    rj = /</g;
var Aj = function(a) {
    var b = '<div class="jfk-bubble"><div class="jfk-bubble-content-id"></div>';
    a.showCloseBox && (b += '<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="Close" role="button" tabindex=0></div>');
    return Z(b + '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>')
};
Aj.soyTemplateName = "jfk.templates.bubble.main";
var Bj = function(a) {
    fg.call(this, a);
    this.arrowPosition_ = new Wi(this.className_, !0);
    this.popup_ = new nf;
    this.hideYPosition_ = 0;
    this.extraCssClasses_ = []
};
z(Bj, fg);
e = Bj.prototype;
e.className_ = "jfk-bubble";
e.showCloseButton_ = !0;
e.disposeOnHide_ = !1;
e.setAnchorElement = function(a) {
    this.arrowPosition_.setAnchorElement(a);
    this.reposition()
};
e.setPosition = function(a, b, c, d) {
    B(!this.isInDocument(), "Must call setPosition() before rendering");
    this.arrowPosition_.setPosition(a, b, c, d)
};
e.showCloseButton = function(a) {
    B(!this.isInDocument(), "Must call setShowClosebox() before rendering");
    this.showCloseButton_ = a
};
e.addClassName = function(a) {
    B(!this.isInDocument(), "Must call addClassName() before rendering");
    this.extraCssClasses_.push(a)
};
e.setContent = function(a) {
    B(w(a) || a.nodeType || a instanceof bj || a instanceof Lf, "Content must be a string or HTML.");
    this.content_ = a;
    this.setContentInternal_(a)
};
e.setContentInternal_ = function(a) {
    var b = this.getContentElement();
    a && b && (w(a) ? Vf(b, Nf(a, null)) : a instanceof bj ? Vf(b, a.toSafeHtml()) : a instanceof Lf ? Vf(b, a) : (Vf(b, Uf), b.appendChild(a)))
};
e.setAutoReposition = function(a) {
    this.arrowPosition_.setAutoReposition(a)
};
e.getContentElement = function() {
    return this.getElementByClass(this.className_ + "-content-id")
};
e.createDom = function() {
    this.setElementInternal(Vi(Aj, {
        showCloseBox: this.showCloseButton_
    }, void 0, this.getDomHelper()));
    this.setContentInternal_(this.content_);
    S(this.getElement(), !1);
    this.popup_.setElement(this.getElement());
    this.configurePopupTransition(this.popup_);
    yf(this.getElement(), this.extraCssClasses_)
};
e.configurePopupTransition = function(a) {
    Rb || a.setTransition(Mi(this.getElement(), 0.218), Ni(this.getElement(), 0.218))
};
e.enterDocument = function() {
    Bj.superClass_.enterDocument.call(this);
    this.getHandler().listen(this.popup_, ["beforeshow", "show", "beforehide", "hide"], this.handlePopupEvent_);
    this.showCloseButton_ && this.getHandler().listenWithWrapper(this.getElementByClass(this.className_ + "-closebtn-id"), Ei, za(this.setVisible, !1));
    var a = this.getElement();
    B(a, "getElement() returns null.");
    var b = this.getElementByClass(this.className_ + "-arrow-id");
    B(b, "No arrow element is found!");
    this.arrowPosition_.setElements(a, b);
    this.popup_.setPosition(this.arrowPosition_)
};
e.setVisible = function(a) {
    this.popup_.setVisible(a)
};
e.isVisible = function() {
    return this.popup_.isVisible()
};
e.isOrWasRecentlyVisible = function() {
    return this.popup_.isOrWasRecentlyVisible()
};
e.reposition = function() {
    this.isVisible() && this.popup_.reposition()
};
e.disposeInternal = function() {
    this.popup_.dispose();
    delete this.popup_;
    Bj.superClass_.disposeInternal.call(this)
};
e.handleScroll_ = function() {
    var a = we(this.getElement());
    this.hideYPosition_ && a.y < this.hideYPosition_ && this.setVisible(!1);
    return !1
};
e.handlePopupEvent_ = function(a) {
    if ("show" == a.type || "hide" == a.type) {
        var b = this.getHandler(),
            c = this.getDomHelper(),
            c = E ? c.getWindow() : c.getDocument();
        "show" == a.type ? b.listen(c, "scroll", this.handleScroll_) : b.unlisten(c, "scroll", this.handleScroll_)
    }
    b = this.dispatchEvent(a.type);
    this.disposeOnHide_ && "hide" == a.type && this.dispose();
    return b
};
var Dj = function(a, b) {
    var c = Array.prototype.slice.call(arguments),
        d = c.shift();
    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, m, p, l, n) {
        if ("%" == p) return "%";
        var s = c.shift();
        if ("undefined" == typeof s) throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = s;
        return Cj[p].apply(null, arguments)
    })
}, Cj = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + $a(" ",
                c - a.length) : $a(" ", c - a.length) + a
        },
        f: function(a, b, c, d, f) {
            d = a.toString();
            isNaN(f) || "" == f || (d = a.toFixed(f));
            var g;
            g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= a && (d = g + d);
            if (isNaN(c) || d.length >= c) return d;
            d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
            a = c - d.length - g.length;
            return d = 0 <= b.indexOf("-", 0) ? g + d + $a(" ", a) : g + $a(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, f, g, h, k) {
            return Cj.f(parseInt(a, 10), b, c, d, 0, g, h, k)
        }
    };
Cj.i = Cj.d;
Cj.u = Cj.d;
v("trends.Msg", function(a) {
    Ej = a
}, void 0);
var Ej = {}, Fj = function(a, b, c) {
        a = Ej[a];
        null != b && (a = a.replace("%1", b));
        null != c && (a = a.replace("%2", c));
        return a
    };
var Gj = function(a, b) {
    $e.call(this, a, "q");
    this.labelInput = new Qh;
    this.labelInput.decorate(this.getTextBox_());
    b && this.setValue(b);
    N(this.getTextBox_(), "blur", x(this.handleInputBlur_, this))
};
z(Gj, $e);
e = Gj.prototype;
e.handleInputBlur_ = function() {
    this.fireSelectEvent()
};
e.getTextBox_ = function() {
    return document.getElementById(this.baseId_ + "T")
};
e.getValue = function() {
    var a = this.labelInput.getValue();
    return "" != a ? a : ""
};
e.setValue = function(a) {
    this.labelInput.setValue("" == a ? "" : a)
};
e.reset = function() {
    this.setValue("")
};
e.setLabel = function(a) {
    a.htmlFor = this.getTextBox_().id
};
e.focus = function() {
    this.labelInput.hasChanged() && this.labelInput.focusAndSelect();
    this.getTextBox_().focus()
};
var Ij = function(a, b, c, d, f, g) {
    a = Q(a);
    b = Q(b);
    S(b, !0);
    c = c ? 1 : 0;
    this.tooltip_ = new Bj;
    this.tooltip_.setAnchorElement(a);
    this.tooltip_.setAutoReposition(!0);
    this.tooltip_.setContent(b);
    this.tooltip_.showCloseButton(!1);
    this.tooltip_.setPosition(g ? g : 1, c, 10, -8);
    this.tooltip_.addClassName("jfk-bubble-promo");
    this.tooltip_.render();
    this.isMouseInTooltipArea_ = !1;
    this.fadeoutTime_ = f ? f : 500;
    N(a, "mouseover", x(this.handleAnchorMouseOver_, this));
    N(a, "mouseout", x(this.handleAnchorMouseOut_, this));
    N(this.tooltip_.getElement(),
        "mouseout", x(this.handleContentMouseOut_, this));
    N(this.tooltip_.getElement(), "mousemove", x(this.handleContentMouseMove_, this));
    d || Hj.push(this)
};
z(Ij, fc);
v("trends.Tooltip", Ij, void 0);
var Hj = [];
e = Ij.prototype;
e.dispose = function() {
    this.tooltip_.dispose()
};
e.handleAnchorMouseOver_ = function() {
    this.tooltip_.setVisible(!0)
};
e.handleAnchorMouseOut_ = function() {
    X(x(this.maybeHideTooltip_, this), this.fadeoutTime_)
};
e.maybeHideTooltip_ = function() {
    this.isMouseInTooltipArea_ || this.tooltip_.setVisible(!1)
};
e.handleContentMouseOut_ = function(a) {
    a.relatedTarget && !Hd(this.tooltip_.getElement(), a.relatedTarget) && (this.isMouseInTooltipArea_ = !1, this.tooltip_.setVisible(!1))
};
e.handleContentMouseMove_ = function() {
    this.isMouseInTooltipArea_ = !0
};
var Jj = function() {
    for (var a = 0; a < Hj.length; a++) Hj[a].dispose();
    Hj = []
};
var Kj = function(a, b) {
    Kh.call(this, a, b);
    this.setAllowAutoFocus(!0);
    this.setVisible(!1, !0);
    this.targets_ = new ag
};
z(Kj, Kh);
e = Kj.prototype;
e.toggleMode_ = !1;
e.lastHide_ = 0;
e.decorateInternal = function(a) {
    Kj.superClass_.decorateInternal.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.getDomHelper().getElement(a), 1)
};
e.enterDocument = function() {
    Kj.superClass_.enterDocument.call(this);
    this.targets_.forEach(this.attachEvent_, this);
    var a = this.getHandler();
    a.listen(this, "action", this.onAction_);
    a.listen(this.getDomHelper().getDocument(), "mousedown", this.onDocClick, !0);
    K && a.listen(this.getDomHelper().getDocument(), "contextmenu", this.onDocClick, !0)
};
e.attach = function(a, b, c, d, f) {
    this.isAttachTarget(a) || (a = this.createAttachTarget(a, b, c, d, f), this.isInDocument() && this.attachEvent_(a))
};
e.createAttachTarget = function(a, b, c, d, f) {
    if (!a) return null;
    b = {
        element_: a,
        targetCorner_: b,
        menuCorner_: c,
        eventType_: d ? "contextmenu" : "mousedown",
        margin_: f
    };
    this.targets_.set(ua(a), b);
    return b
};
e.isAttachTarget = function(a) {
    return a ? this.targets_.containsKey(ua(a)) : !1
};
e.attachEvent_ = function(a) {
    this.getHandler().listen(a.element_, a.eventType_, this.onTargetClick_)
};
e.detach = function(a) {
    if (!this.isAttachTarget(a)) throw Error("Menu not attached to provided element, unable to detach.");
    a = ua(a);
    this.isInDocument() && this.detachEvent_(this.targets_.get(a));
    this.targets_.remove(a)
};
e.detachEvent_ = function(a) {
    this.getHandler().unlisten(a.element_, a.eventType_, this.onTargetClick_)
};
e.setToggleMode = function(a) {
    this.toggleMode_ = a
};
e.showWithPosition = function(a, b, c) {
    var d = this.isVisible();
    this.isOrWasRecentlyVisible() && this.toggleMode_ ? this.hide() : this.dispatchEvent("beforeshow") && (b = "undefined" != typeof b ? b : 4, d || (this.getElement().style.visibility = "hidden"), S(this.getElement(), !0), a.reposition(this.getElement(), b, c), d || (this.getElement().style.visibility = "visible"), this.setHighlightedIndex(-1), this.setVisible(!0))
};
e.showMenu = function(a, b, c) {
    b = ba(a.targetCorner_) ? new Ve(a.element_, a.targetCorner_, !0) : new Xe(b, c);
    b.setLastResortOverflow && b.setLastResortOverflow(5);
    this.showWithPosition(b, a.menuCorner_, a.margin_, a.element_)
};
e.hide = function() {
    this.isVisible() && (this.setVisible(!1), this.isVisible() || (this.lastHide_ = Aa()))
};
e.isOrWasRecentlyVisible = function() {
    return this.isVisible() || this.wasRecentlyHidden()
};
e.wasRecentlyHidden = function() {
    return 150 > Aa() - this.lastHide_
};
e.onAction_ = function() {
    this.hide()
};
e.onTargetClick_ = function(a) {
    for (var b = this.targets_.getKeys(), c = 0; c < b.length; c++) {
        var d = this.targets_.get(b[c]);
        if (d.element_ == a.currentTarget) {
            this.showMenu(d, a.clientX, a.clientY);
            a.preventDefault();
            a.stopPropagation();
            break
        }
    }
};
e.onDocClick = function(a) {
    this.isVisible() && !this.containsElement(a.target) && this.hide()
};
e.handleBlur = function(a) {
    Kj.superClass_.handleBlur.call(this, a);
    this.hide()
};
e.disposeInternal = function() {
    Kj.superClass_.disposeInternal.call(this);
    this.targets_ && (this.targets_.clear(), delete this.targets_)
};
var Lj = function(a, b, c, d, f, g, h) {
    this.container_ = a;
    this.shareUrl_ = b;
    this.twitterShareTitle_ = c;
    this.twitterHashTag_ = d;
    this.idForTracking_ = f;
    this.useShareAndEmbedIcons_ = g;
    this.isMobile_ = !! h;
    this.buttonElement_ = this.container_.getElementsByClassName("share-button-element")[0];
    this.button_ = null;
    this.menuElement_ = this.container_.getElementsByClassName("share-menu")[0];
    this.menu_ = null;
    this.renderShareButton_()
};
z(Lj, fc);
v("trends.common.ShareButton", Lj, void 0);
e = Lj.prototype;
e.renderShareButton_ = function() {
    this.isMobile_ || (this.button_ = this.useShareAndEmbedIcons_ ? new Mj(this.container_.getElementsByClassName("share-button-img")[0], void 0, 5) : new Mj("Share", void 0, 5), this.button_.render(this.buttonElement_));
    this.menu_ = this.buildMenu_();
    this.menu_.attach(this.buttonElement_, 5, 4);
    this.menu_.render(this.menuElement_)
};
e.buildMenu_ = function() {
    var a = new Kj,
        b = this.buildMenuItem_("Google+", "SPRITE_gplus_share", x(this.handleGplusAction_, this));
    a.addChild(b, !0);
    b = this.buildMenuItem_("Twitter", "SPRITE_twitter_share", x(this.handleTwitterAction_, this));
    a.addChild(b, !0);
    b = this.buildMenuItem_("Facebook", "SPRITE_fb_share", x(this.handleFacebookAction_, this));
    a.addChild(b, !0);
    a.setToggleMode(!0);
    a.setAllowAutoFocus(!1);
    return a
};
e.buildMenuItem_ = function(a, b, c) {
    var d = wd("div", "share-menu-item-icon");
    gd(d, b);
    a = new Gh([d, document.createTextNode(String(a))]);
    N(a, "action", c);
    return a
};
e.handleGplusAction_ = function() {
    window.open("https://plus.google.com/share?url=" + this.shareUrl_, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
    _gaq.push(["_trackEvent", "click", "share-gplus", this.idForTracking_])
};
e.handleTwitterAction_ = function() {
    window.open("https://twitter.com/share?url=" + this.shareUrl_ + "&hashtags=" + this.twitterHashTag_ + "&text=" + this.twitterShareTitle_, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=550,height=420");
    _gaq.push(["_trackEvent", "click", "share-twitter", this.idForTracking_])
};
e.handleFacebookAction_ = function() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + this.shareUrl_, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=660,height=352");
    _gaq.push(["_trackEvent", "click", "share-facebook", this.idForTracking_])
};
e.dispose = function() {
    this.button_.dispose();
    this.menu_.dispose()
};
var Nj = function(a, b, c) {
    this.listener_ = a;
    this.interval_ = b || 0;
    this.handler_ = c;
    this.callback_ = x(this.doAction_, this)
};
z(Nj, fc);
e = Nj.prototype;
e.id_ = 0;
e.disposeInternal = function() {
    Nj.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.listener_;
    delete this.handler_
};
e.start = function(a) {
    this.stop();
    this.id_ = X(this.callback_, ba(a) ? a : this.interval_)
};
e.stop = function() {
    this.isActive() && t.clearTimeout(this.id_);
    this.id_ = 0
};
e.isActive = function() {
    return 0 != this.id_
};
e.doAction_ = function() {
    this.id_ = 0;
    this.listener_ && this.listener_.call(this.handler_)
};
var Oj = {}, Pj = null,
    Qj = function(a) {
        a = ua(a);
        delete Oj[a];
        uc(Oj) && Pj && Pj.stop()
    }, Sj = function() {
        Pj || (Pj = new Nj(function() {
            Rj(Aa())
        }, 20));
        var a = Pj;
        a.isActive() || a.start()
    }, Rj = function(a) {
        qc(Oj, function(b) {
            b.onAnimationFrame(a)
        });
        uc(Oj) || Sj()
    };
var Tj = function(a, b, c, d) {
    Gi.call(this);
    if (!ka(a) || !ka(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.startPoint = a;
    this.endPoint = b;
    this.duration = c;
    this.accel_ = d;
    this.coords = [];
    this.useRightPositioningForRtl_ = !1
};
z(Tj, Gi);
e = Tj.prototype;
e.enableRightPositioningForRtl = function(a) {
    this.useRightPositioningForRtl_ = a
};
e.isRightPositioningForRtlEnabled = function() {
    return this.useRightPositioningForRtl_
};
e.fps_ = 0;
e.progress = 0;
e.lastFrame = null;
e.play = function(a) {
    if (a || this.isStopped()) this.progress = 0, this.coords = this.startPoint;
    else if (this.isPlaying()) return !1;
    Qj(this);
    this.startTime = a = Aa();
    this.isPaused() && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.lastFrame = this.startTime;
    if (!this.progress) this.onBegin();
    this.onPlay();
    if (this.isPaused()) this.onResume();
    this.setStatePlaying();
    var b = ua(this);
    b in Oj || (Oj[b] = this);
    Sj();
    this.cycle(a);
    return !0
};
e.stop = function(a) {
    Qj(this);
    this.setStateStopped();
    a && (this.progress = 1);
    this.updateCoords_(this.progress);
    this.onStop();
    this.onEnd()
};
e.pause = function() {
    this.isPlaying() && (Qj(this), this.setStatePaused(), this.onPause())
};
e.getProgress = function() {
    return this.progress
};
e.disposeInternal = function() {
    this.isStopped() || this.stop(!1);
    this.onDestroy();
    Tj.superClass_.disposeInternal.call(this)
};
e.onAnimationFrame = function(a) {
    this.cycle(a)
};
e.cycle = function(a) {
    this.progress = (a - this.startTime) / (this.endTime - this.startTime);
    1 <= this.progress && (this.progress = 1);
    this.fps_ = 1E3 / (a - this.lastFrame);
    this.lastFrame = a;
    this.updateCoords_(this.progress);
    if (1 == this.progress) this.setStateStopped(), Qj(this), this.onFinish(), this.onEnd();
    else if (this.isPlaying()) this.onAnimate()
};
e.updateCoords_ = function(a) {
    na(this.accel_) && (a = this.accel_(a));
    this.coords = Array(this.startPoint.length);
    for (var b = 0; b < this.startPoint.length; b++) this.coords[b] = (this.endPoint[b] - this.startPoint[b]) * a + this.startPoint[b]
};
e.onAnimate = function() {
    this.dispatchAnimationEvent("animate")
};
e.onDestroy = function() {
    this.dispatchAnimationEvent("destroy")
};
e.dispatchAnimationEvent = function(a) {
    this.dispatchEvent(new Uj(a, this))
};
var Uj = function(a, b) {
    L.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.progress = b.getProgress();
    this.fps = b.fps_;
    this.state = b.getStateInternal()
};
z(Uj, L);
var Vj = function(a, b, c, d, f) {
    Tj.call(this, b, c, d, f);
    this.element = a
};
z(Vj, Tj);
e = Vj.prototype;
e.updateStyle = fa;
e.isRightToLeft = function() {
    ba(this.rightToLeft_) || (this.rightToLeft_ = se(this.element));
    return this.rightToLeft_
};
e.onAnimate = function() {
    this.updateStyle();
    Vj.superClass_.onAnimate.call(this)
};
e.onEnd = function() {
    this.updateStyle();
    Vj.superClass_.onEnd.call(this)
};
e.onBegin = function() {
    this.updateStyle();
    Vj.superClass_.onBegin.call(this)
};
var Wj = function(a, b, c, d, f) {
    if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
    Vj.apply(this, arguments)
};
z(Wj, Vj);
Wj.prototype.updateStyle = function() {
    var a = this.isRightPositioningForRtlEnabled() && this.isRightToLeft() ? "right" : "left";
    this.element.style[a] = Math.round(this.coords[0]) + "px";
    this.element.style.top = Math.round(this.coords[1]) + "px"
};
var Xj = function(a, b, c, d, f) {
    Vj.call(this, a, [b], [c], d, f)
};
z(Xj, Vj);
Xj.prototype.updateStyle = function() {
    this.element.style.width = Math.round(this.coords[0]) + "px"
};
var Yj = function(a, b, c, d, f) {
    Vj.call(this, a, [b], [c], d, f)
};
z(Yj, Vj);
Yj.prototype.updateStyle = function() {
    this.element.style.height = Math.round(this.coords[0]) + "px"
};
var Zj = function(a, b, c, d, f) {
    ma(b) && (b = [b]);
    ma(c) && (c = [c]);
    Vj.call(this, a, b, c, d, f);
    if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
};
z(Zj, Vj);
Zj.prototype.updateStyle = function() {
    Fe(this.element, this.coords[0])
};
Zj.prototype.show = function() {
    this.element.style.display = ""
};
Zj.prototype.hide = function() {
    this.element.style.display = "none"
};
var ak = function(a, b, c) {
    Zj.call(this, a, 1, 0, b, c)
};
z(ak, Zj);
var bk = function(a, b, c) {
    Zj.call(this, a, 1, 0, b, c)
};
z(bk, Zj);
bk.prototype.onBegin = function() {
    this.show();
    bk.superClass_.onBegin.call(this)
};
bk.prototype.onEnd = function() {
    this.hide();
    bk.superClass_.onEnd.call(this)
};
var ck = function(a, b, c) {
    Zj.call(this, a, 0, 1, b, c)
};
z(ck, Zj);
ck.prototype.onBegin = function() {
    this.show();
    ck.superClass_.onBegin.call(this)
};
var dk = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};
var gk = function(a) {
    U.call(this);
    this.shortcuts_ = {};
    this.lastKeys_ = {
        strokes: [],
        time: 0
    };
    this.globalKeys_ = Bc(ek);
    this.textInputs_ = Bc(fk);
    this.alwaysPreventDefault_ = !0;
    this.allShortcutsAreGlobal_ = this.alwaysStopPropagation_ = !1;
    this.modifierShortcutsAreGlobal_ = !0;
    this.allowSpaceKeyOnButtons_ = !1;
    this.activeShortcutKeyForGecko_ = null;
    this.initializeKeyListener(a)
}, hk;
z(gk, U);
var ek = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    fk = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
e = gk.prototype;
e.registerShortcut = function(a, b) {
    ik(this.shortcuts_, this.interpretStrokes_(1, arguments), a)
};
e.interpretStrokes_ = function(a, b) {
    var c;
    if (w(b[a])) {
        c = b[a];
        c = c.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
        c = c.split(" ");
        for (var d = [], f, g = 0; f = c[g]; g++) {
            var h = f.split("+"),
                k;
            f = 0;
            for (var m, p = 0; m = h[p]; p++) {
                switch (m) {
                    case "shift":
                        f |= 1;
                        continue;
                    case "ctrl":
                        f |= 2;
                        continue;
                    case "alt":
                        f |= 4;
                        continue;
                    case "meta":
                        f |= 8;
                        continue
                }
                k = m;
                if (!hk) {
                    h = {};
                    m = void 0;
                    for (m in dk) h[dk[m]] = m;
                    hk = h
                }
                k = hk[k];
                break
            }
            d.push({
                keyCode: k,
                modifiers: f
            })
        }
        c = d
    } else
        for (d = b, g = a, ka(b[a]) && (d = b[a], g = 0), c = []; g < d.length; g +=
            2) c.push({
            keyCode: d[g],
            modifiers: d[g + 1]
        });
    return c
};
e.unregisterAll = function() {
    this.shortcuts_ = {}
};
e.disposeInternal = function() {
    gk.superClass_.disposeInternal.call(this);
    this.unregisterAll();
    this.clearKeyListener()
};
e.initializeKeyListener = function(a) {
    this.keyTarget_ = a;
    N(this.keyTarget_, "keydown", this.handleKeyDown_, !1, this);
    J && N(this.keyTarget_, "keyup", this.handleGeckoKeyUp_, !1, this);
    Nb && !J && (N(this.keyTarget_, "keypress", this.handleWindowsKeyPress_, !1, this), N(this.keyTarget_, "keyup", this.handleWindowsKeyUp_, !1, this))
};
e.handleGeckoKeyUp_ = function(a) {
    if (Mb) {
        if (224 == a.keyCode) {
            this.metaKeyRecentlyReleased_ = !0;
            X(function() {
                this.metaKeyRecentlyReleased_ = !1
            }, 400, this);
            return
        }
        var b = a.metaKey || this.metaKeyRecentlyReleased_;
        67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b, this.handleKeyDown_(a))
    }
    32 == this.activeShortcutKeyForGecko_ && 32 == a.keyCode && a.preventDefault();
    this.activeShortcutKeyForGecko_ = null
};
e.isPossiblePrintableKey_ = function(a) {
    return Nb && !J && a.ctrlKey && a.altKey && !a.shiftKey
};
e.handleWindowsKeyPress_ = function(a) {
    32 < a.keyCode && this.isPossiblePrintableKey_(a) && (this.isPrintableKey_ = !0)
};
e.handleWindowsKeyUp_ = function(a) {
    !this.isPrintableKey_ && this.isPossiblePrintableKey_(a) && this.handleKeyDown_(a)
};
e.clearKeyListener = function() {
    Qc(this.keyTarget_, "keydown", this.handleKeyDown_, !1, this);
    J && Qc(this.keyTarget_, "keyup", this.handleGeckoKeyUp_, !1, this);
    Nb && !J && (Qc(this.keyTarget_, "keypress", this.handleWindowsKeyPress_, !1, this), Qc(this.keyTarget_, "keyup", this.handleWindowsKeyUp_, !1, this));
    this.keyTarget_ = null
};
var ik = function(a, b, c) {
    var d = b.shift(),
        d = d.keyCode & 255 | d.modifiers << 8,
        f = a[d];
    if (f && c && (0 == b.length || w(f))) throw Error("Keyboard shortcut conflicts with existing shortcut");
    b.length ? (f || (f = a[d] = {}), ik(f, b, c)) : a[d] = c
};
gk.prototype.getShortcut_ = function(a, b, c) {
    b = b || 0;
    return (c = (c || this.shortcuts_)[a[b]]) && !w(c) && 1 < a.length - b ? this.getShortcut_(a, b + 1, c) : c
};
gk.prototype.handleKeyDown_ = function(a) {
    if (this.isValidShortcut_(a))
        if ("keydown" == a.type && this.isPossiblePrintableKey_(a)) this.isPrintableKey_ = !1;
        else {
            var b = J ? kf(a.keyCode) : a.keyCode,
                c = b & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8,
                d, f, g = Aa();
            this.lastKeys_.strokes.length && 1500 >= g - this.lastKeys_.time ? d = this.getShortcut_(this.lastKeys_.strokes) : this.lastKeys_.strokes.length = 0;
            d = d ? d[c] : this.shortcuts_[c];
            d || (d = this.shortcuts_[c], this.lastKeys_.strokes = []);
            d && w(d) ? f = d : d ? (this.lastKeys_.strokes.push(c),
                this.lastKeys_.time = g, J && a.preventDefault()) : this.lastKeys_.strokes.length = 0;
            f && (this.alwaysPreventDefault_ && a.preventDefault(), this.alwaysStopPropagation_ && a.stopPropagation(), c = a.target, d = this.dispatchEvent(new jk("shortcut", f, c)), (d &= this.dispatchEvent(new jk("shortcut_" + f, f, c))) || a.preventDefault(), this.lastKeys_.strokes.length = 0, J && (this.activeShortcutKeyForGecko_ = b))
        }
};
gk.prototype.isValidShortcut_ = function(a) {
    var b = a.keyCode;
    if (16 == b || 17 == b || 18 == b) return !1;
    var c = a.target,
        d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
        f = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
    return !d && !f || this.globalKeys_[b] || this.allShortcutsAreGlobal_ ? !0 : f ? !1 : this.modifierShortcutsAreGlobal_ && (a.altKey || a.ctrlKey || a.metaKey) ? !0 : "INPUT" == c.tagName && this.textInputs_[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ?
        this.allowSpaceKeyOnButtons_ ? !0 : 32 != b : !1
};
var jk = function(a, b, c) {
    L.call(this, a, c);
    this.identifier = b
};
z(jk, L);
var kk = function() {
    this.classNameCache_ = []
};
z(kk, Fh);
ga(kk);
e = kk.prototype;
e.createDom = function(a) {
    var b = kk.superClass_.createDom.call(this, a);
    B(b);
    xf(b, "goog-submenu");
    this.addArrow_(a, b);
    return b
};
e.decorate = function(a, b) {
    b = kk.superClass_.decorate.call(this, a, b);
    B(b);
    xf(b, "goog-submenu");
    this.addArrow_(a, b);
    var c = nd("div", "goog-menu", b);
    if (c.length) {
        var d = new Kh(a.getDomHelper()),
            c = c[0];
        S(c, !1);
        a.getDomHelper().getDocument().body.appendChild(c);
        d.decorate(c);
        a.setMenu(d, !0)
    }
    return b
};
e.setContent = function(a, b) {
    var c = this.getContentElement(a),
        d = c && c.lastChild;
    kk.superClass_.setContent.call(this, a, b);
    d && c.lastChild != d && wf(d, "goog-submenu-arrow") && c.appendChild(d)
};
e.initializeDom = function(a) {
    kk.superClass_.initializeDom.call(this, a);
    var b = a.getContentElement(),
        c = a.getDomHelper().getElementsByTagNameAndClass("span", "goog-submenu-arrow", b)[0];
    lk(a, c);
    c != b.lastChild && b.appendChild(c);
    a = a.getElement();
    B(a, "The sub menu DOM element cannot be null.");
    Y(a, "haspopup", "true")
};
e.addArrow_ = function(a, b) {
    var c = a.getDomHelper().createDom("span");
    c.className = "goog-submenu-arrow";
    lk(a, c);
    this.getContentElement(b).appendChild(c)
};
var lk = function(a, b) {
    B(b);
    a.isRightToLeft() ? (xf(b, "goog-submenu-arrow-rtl"), Jd(b, a.isAlignedToEnd() ? "\u25c4" : "\u25ba")) : (zf(b, "goog-submenu-arrow-rtl"), Jd(b, a.isAlignedToEnd() ? "\u25ba" : "\u25c4"))
};
var mk = function(a, b, c, d) {
    Gh.call(this, a, b, c, d || kk.getInstance())
};
z(mk, Gh);
e = mk.prototype;
e.dismissTimer_ = null;
e.showTimer_ = null;
e.hasKeyboardControl_ = !1;
e.subMenu_ = null;
e.externalSubMenu_ = !1;
e.alignToEnd_ = !0;
e.isPositionAdjustable_ = !1;
e.enterDocument = function() {
    mk.superClass_.enterDocument.call(this);
    this.getHandler().listen(this.getParent(), "hide", this.onParentHidden_);
    this.subMenu_ && this.setMenuListenersEnabled_(this.subMenu_, !0)
};
e.exitDocument = function() {
    this.getHandler().unlisten(this.getParent(), "hide", this.onParentHidden_);
    this.subMenu_ && (this.setMenuListenersEnabled_(this.subMenu_, !1), this.externalSubMenu_ || (this.subMenu_.exitDocument(), Cd(this.subMenu_.getElement())));
    mk.superClass_.exitDocument.call(this)
};
e.disposeInternal = function() {
    this.subMenu_ && !this.externalSubMenu_ && this.subMenu_.dispose();
    this.subMenu_ = null;
    mk.superClass_.disposeInternal.call(this)
};
e.setHighlighted = function(a, b) {
    mk.superClass_.setHighlighted.call(this, a);
    b && this.getMenu().setMouseButtonPressed(!0);
    a || (this.dismissTimer_ && t.clearTimeout(this.dismissTimer_), this.dismissTimer_ = X(this.dismissSubMenu, 218, this))
};
e.showSubMenu = function() {
    var a = this.getParent();
    a && a.getHighlighted() == this && (this.setSubMenuVisible_(!0), this.dismissSiblings_())
};
e.dismissSubMenu = function() {
    var a = this.subMenu_;
    a && a.getParent() == this && (this.setSubMenuVisible_(!1), a.forEachChild(function(a) {
        "function" == typeof a.dismissSubMenu && a.dismissSubMenu()
    }))
};
e.clearTimers = function() {
    this.dismissTimer_ && t.clearTimeout(this.dismissTimer_);
    this.showTimer_ && t.clearTimeout(this.showTimer_)
};
e.setVisible = function(a, b) {
    var c = mk.superClass_.setVisible.call(this, a, b);
    c && !this.isVisible() && this.dismissSubMenu();
    return c
};
e.dismissSiblings_ = function() {
    this.getParent().forEachChild(function(a) {
        a != this && "function" == typeof a.dismissSubMenu && (a.dismissSubMenu(), a.clearTimers())
    }, this)
};
e.handleKeyEvent = function(a) {
    var b = a.keyCode,
        c = this.isRightToLeft() ? 37 : 39,
        d = this.isRightToLeft() ? 39 : 37;
    if (!this.hasKeyboardControl_) {
        if (!this.isEnabled() || b != c && b != this.getMnemonic()) return !1;
        this.showSubMenu();
        this.getMenu().highlightFirst();
        this.clearTimers()
    } else if (!this.getMenu().handleKeyEvent(a))
        if (b == d) this.dismissSubMenu();
        else return !1;
    a.preventDefault();
    return !0
};
e.onChildEnter_ = function() {
    this.subMenu_.getParent() == this && (this.clearTimers(), this.getParentEventTarget().setHighlighted(this), this.dismissSiblings_())
};
e.onParentHidden_ = function(a) {
    a.target == this.getParentEventTarget() && (this.dismissSubMenu(), this.clearTimers())
};
e.handleMouseOver = function(a) {
    this.isEnabled() && (this.clearTimers(), this.showTimer_ = X(this.showSubMenu, 218, this));
    mk.superClass_.handleMouseOver.call(this, a)
};
e.performActionInternal = function(a) {
    this.clearTimers();
    if (this.isSupportedState(8)) return mk.superClass_.performActionInternal.call(this, a);
    this.showSubMenu();
    return !0
};
e.setSubMenuVisible_ = function(a) {
    this.dispatchEvent(gg(64, a));
    var b = this.getMenu();
    a != b.isVisible() && (a && (b.isInDocument() || b.render(), b.setHighlightedIndex(-1)), this.hasKeyboardControl_ = a, Bf(B(this.getElement()), "goog-submenu-open", a), b.setVisible(a), a && this.positionSubMenu())
};
e.setMenuListenersEnabled_ = function(a, b) {
    var c = this.getHandler();
    (b ? c.listen : c.unlisten).call(c, a, "enter", this.onChildEnter_)
};
e.isAlignedToEnd = function() {
    return this.alignToEnd_
};
e.positionSubMenu = function() {
    var a = new Ve(this.getElement(), this.isAlignedToEnd() ? 6 : 4, this.isPositionAdjustable_),
        b = this.getMenu(),
        c = b.getElement();
    b.isVisible() || (c.style.visibility = "hidden", S(c, !0));
    a.reposition(c, this.isAlignedToEnd() ? 4 : 6);
    b.isVisible() || (S(c, !1), c.style.visibility = "visible")
};
e.addItem = function(a) {
    this.getMenu().addChild(a, !0)
};
e.addItemAt = function(a, b) {
    this.getMenu().addChildAt(a, b, !0)
};
e.removeItem = function(a) {
    (a = this.getMenu().removeChild(a, !0)) && a.dispose()
};
e.removeItemAt = function(a) {
    (a = this.getMenu().removeChildAt(a, !0)) && a.dispose()
};
e.getItemAt = function(a) {
    return this.getMenu().getChildAt(a)
};
e.getItemCount = function() {
    return this.getMenu().getChildCount()
};
e.getMenu = function() {
    this.subMenu_ ? this.externalSubMenu_ && this.subMenu_.getParent() != this && this.subMenu_.setParent(this) : this.setMenu(new Kh(this.getDomHelper()), !0);
    this.subMenu_.getElement() || this.subMenu_.createDom();
    return this.subMenu_
};
e.setMenu = function(a, b) {
    var c = this.subMenu_;
    a != c && (c && (this.dismissSubMenu(), this.isInDocument() && this.setMenuListenersEnabled_(c, !1)), this.subMenu_ = a, this.externalSubMenu_ = !b, a && (a.setParent(this), a.setVisible(!1, !0), a.setAllowAutoFocus(!1), a.setFocusable(!1), this.isInDocument() && this.setMenuListenersEnabled_(a, !0)))
};
e.containsElement = function(a) {
    return this.getMenu().containsElement(a)
};
uh("goog-submenu", function() {
    return new mk(null)
});
var nk = function(a, b, c, d, f) {
    function g(a) {
        a && (a.tabIndex = 0, rf(a, h.getAriaRole()), xf(a, "goog-zippy-header"), h.enableMouseEventsHandling_(a), h.enableKeyboardEventsHandling_(a))
    }
    U.call(this);
    this.dom_ = f || ld();
    this.elHeader_ = this.dom_.getElement(a) || null;
    this.elExpandedHeader_ = this.dom_.getElement(d || null);
    this.elContent_ = (this.lazyCreateFunc_ = na(b) ? b : null) || !b ? null : this.dom_.getElement(b);
    this.expanded_ = !0 == c;
    this.keyboardEventHandler_ = new Ye(this);
    this.mouseEventHandler_ = new Ye(this);
    var h = this;
    g(this.elHeader_);
    g(this.elExpandedHeader_);
    this.setExpanded(this.expanded_)
};
z(nk, U);
e = nk.prototype;
e.handleMouseEvents_ = !0;
e.disposeInternal = function() {
    nk.superClass_.disposeInternal.call(this);
    gc(this.keyboardEventHandler_);
    gc(this.mouseEventHandler_)
};
e.getAriaRole = function() {
    return "tab"
};
e.getContentElement = function() {
    return this.elContent_
};
e.getVisibleHeaderElement = function() {
    var a = this.elExpandedHeader_;
    return a && "none" != a.style.display ? a : this.elHeader_
};
e.expand = function() {
    this.setExpanded(!0)
};
e.toggle = function() {
    this.setExpanded(!this.expanded_)
};
e.setExpanded = function(a) {
    this.elContent_ ? S(this.elContent_, a) : a && this.lazyCreateFunc_ && (this.elContent_ = this.lazyCreateFunc_());
    this.elContent_ && xf(this.elContent_, "goog-zippy-content");
    this.elExpandedHeader_ ? (S(this.elHeader_, !a), S(this.elExpandedHeader_, a)) : this.updateHeaderClassName(a);
    this.setExpandedInternal(a);
    this.dispatchEvent(new ok("toggle", this, this.expanded_))
};
e.setExpandedInternal = function(a) {
    this.expanded_ = a
};
e.isExpanded = function() {
    return this.expanded_
};
e.updateHeaderClassName = function(a) {
    this.elHeader_ && (Bf(this.elHeader_, "goog-zippy-expanded", a), Bf(this.elHeader_, "goog-zippy-collapsed", !a), Y(this.elHeader_, "expanded", a))
};
e.isHandleMouseEvents = function() {
    return this.handleMouseEvents_
};
e.setHandleMouseEvents = function(a) {
    this.handleMouseEvents_ != a && ((this.handleMouseEvents_ = a) ? (this.enableMouseEventsHandling_(this.elHeader_), this.enableMouseEventsHandling_(this.elExpandedHeader_)) : this.mouseEventHandler_.removeAll())
};
e.enableKeyboardEventsHandling_ = function(a) {
    a && this.keyboardEventHandler_.listen(a, "keydown", this.onHeaderKeyDown_)
};
e.enableMouseEventsHandling_ = function(a) {
    a && this.mouseEventHandler_.listen(a, "click", this.onHeaderClick_)
};
e.onHeaderKeyDown_ = function(a) {
    if (13 == a.keyCode || 32 == a.keyCode) this.toggle(), this.dispatchActionEvent_(), a.preventDefault(), a.stopPropagation()
};
e.onHeaderClick_ = function() {
    this.toggle();
    this.dispatchActionEvent_()
};
e.dispatchActionEvent_ = function() {
    this.dispatchEvent(new L("action", this))
};
var ok = function(a, b, c) {
    L.call(this, a, b);
    this.expanded = c
};
z(ok, L);
var pk = function(a) {
    U.call(this);
    this.items_ = [];
    this.addItems(a)
};
z(pk, U);
e = pk.prototype;
e.selectedItem_ = null;
e.selectionHandler_ = null;
e.getItemCount = function() {
    return this.items_.length
};
e.indexOfItem = function(a) {
    return a ? pb(this.items_, a) : -1
};
e.getItemAt = function(a) {
    return this.items_[a] || null
};
e.addItems = function(a) {
    a && (D(a, function(a) {
        this.selectItem_(a, !1)
    }, this), Fb(this.items_, a))
};
e.addItem = function(a) {
    this.addItemAt(a, this.getItemCount())
};
e.addItemAt = function(a, b) {
    a && (this.selectItem_(a, !1), Hb(this.items_, b, 0, a))
};
e.removeItem = function(a) {
    a && zb(this.items_, a) && a == this.selectedItem_ && (this.selectedItem_ = null, this.dispatchEvent("select"))
};
e.removeItemAt = function(a) {
    this.removeItem(this.getItemAt(a))
};
e.getSelectedItem = function() {
    return this.selectedItem_
};
e.setSelectedItem = function(a) {
    a != this.selectedItem_ && (this.selectItem_(this.selectedItem_, !1), this.selectedItem_ = a, this.selectItem_(a, !0));
    this.dispatchEvent("select")
};
e.getSelectedIndex = function() {
    return this.indexOfItem(this.selectedItem_)
};
e.setSelectedIndex = function(a) {
    this.setSelectedItem(this.getItemAt(a))
};
e.clear = function() {
    var a = this.items_;
    if (!ka(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.selectedItem_ = null
};
e.disposeInternal = function() {
    pk.superClass_.disposeInternal.call(this);
    delete this.items_;
    this.selectedItem_ = null
};
e.selectItem_ = function(a, b) {
    a && ("function" == typeof this.selectionHandler_ ? this.selectionHandler_(a, b) : "function" == typeof a.setSelected && a.setSelected(b))
};
var qk = function(a, b) {
    fg.call(this, b);
    this.content_ = a
};
z(qk, fg);
qk.prototype.type_ = "info";
qk.prototype.mini_ = !1;
var rk = {
    info: "jfk-butterBar-info",
    error: "jfk-butterBar-error",
    warning: "jfk-butterBar-warning",
    promo: "jfk-butterBar-promo"
};
e = qk.prototype;
e.getType = function() {
    return this.type_
};
e.setType = function(a) {
    if (this.getContentElement()) {
        var b = this.getElement(),
            c = rk[a];
        zf(b, rk[this.type_]);
        xf(b, c)
    }
    this.type_ = a
};
e.setContent = function(a) {
    this.content_ = a;
    if (a = this.getElement()) {
        var b = this.getDomHelper();
        b.removeChildren(a);
        b.append(a, this.content_)
    }
};
e.isVisible = function() {
    var a = this.getElement();
    return null != a && wf(a, "jfk-butterBar-shown")
};
e.setVisible = function(a) {
    B(this.isInDocument(), "setVisible must only be called after the butter bar is rendered.");
    Bf(this.getElement(), "jfk-butterBar-shown", a)
};
e.setMini = function(a) {
    this.mini_ = a;
    (a = this.getElement()) && Bf(a, "jfk-butterBar-mini", this.mini_)
};
e.createDom = function() {
    this.setElementInternal(this.getDomHelper().createDom("div", "jfk-butterBar"));
    B(this.getElement(), "The DOM element for the butter bar cannot be null.");
    this.applyAriaLiveAttributes();
    this.setContent(this.content_);
    this.setMini(this.mini_);
    this.setType(this.type_)
};
e.applyAriaLiveAttributes = function() {
    var a = this.getElement();
    a && (Y(a, "live", "assertive"), Y(a, "atomic", "true"))
};
var sk = function(a) {
    this.dom = a || ld()
};
z(sk, fc);
sk.prototype.initAriaState = function() {
    rf(this.getElement(), this.getAriaRole());
    Y(this.getElement(), "live", "polite")
};
sk.prototype.getAriaRole = function() {
    return "tooltip"
};
var tk = function(a) {
    this.dom = a || ld();
    this.contentEl_ = this.dom.createDom("div", this.getClassName() + "-contentId");
    this.arrowEl_ = this.dom.createDom("div", this.getClassName() + "-arrow", this.dom.createDom("div", this.getClassName() + "-arrowimplbefore"), this.dom.createDom("div", this.getClassName() + "-arrowimplafter"));
    this.tooltipEl_ = this.dom.createDom("div", {
        "class": this.getClassName(),
        role: "tooltip"
    }, this.contentEl_, this.arrowEl_);
    this.initAriaState()
};
z(tk, sk);
e = tk.prototype;
e.getClassName = function() {
    return "jfk-tooltip"
};
e.getElement = function() {
    return this.tooltipEl_
};
e.getContentElement = function() {
    return this.contentEl_
};
e.getArrowElement = function() {
    return this.arrowEl_
};
e.disposeInternal = function() {
    this.tooltipEl_ && Cd(this.tooltipEl_)
};
var wk = function(a) {
    a = a || ld();
    var b = ua(a.getDocument());
    uk[b] || (uk[b] = new vk(a))
}, uk = {}, vk = function(a) {
        Ye.call(this);
        this.domHelper_ = a;
        this.delay_ = new Nj(this.throttledHover_, 0, this);
        this.registerDisposable(this.delay_);
        a = a.getDocument();
        this.listen(a, ["mouseout", "mousedown", "click", "blur", kc, "keydown"], this.clearActiveElement_, !0);
        this.listen(a, ["mouseover", "focus", jc], this.setActiveElement_, !0)
    };
z(vk, Ye);
e = vk.prototype;
e.disposeInternal = function() {
    this.clearSecondaryTimer_();
    vk.superClass_.disposeInternal.call(this)
};
e.trackEventTrigger_ = function(a) {
    switch (a.type) {
        case "mousedown":
        case "mouseover":
        case "mouseout":
        case "click":
            this.isKeyboardEvent_ = !1;
            break;
        case "keydown":
            this.isKeyboardEvent_ = !0
    }
};
e.setActiveElement_ = function(a) {
    this.trackEventTrigger_(a);
    var b = "focus" == a.type || a.type == jc;
    !this.isKeyboardEvent_ && b ? this.activeEl_ = null : (this.isFocusEvent_ = b, this.activeEl_ = a.target);
    this.resetTimer_()
};
e.clearActiveElement_ = function(a) {
    var b = a.target,
        c = "mousedown" == a.type || "click" == a.type,
        b = this.tooltip_ && Hd(this.tooltip_.getContentElement(), b);
    c && b || (this.trackEventTrigger_(a), this.activeEl_ = null, this.resetTimer_())
};
e.resetTimer_ = function() {
    this.clearSecondaryTimer_();
    this.delay_.start(this.hoverEl_ ? 50 : 300)
};
e.clearSecondaryTimer_ = function() {
    this.secondaryTimerId_ && (t.clearTimeout(this.secondaryTimerId_), this.secondaryTimerId_ = 0, this.hoverEl_ = null)
};
e.throttledHover_ = function() {
    if (!this.activeEl_) this.hideTooltip();
    else if (!(this.hoverEl_ && this.tooltip_ && Hd(this.tooltip_.getElement(), this.activeEl_))) {
        var a = $d(this.activeEl_, function(a) {
            return a.getAttribute && (a.getAttribute("data-tooltip-contained") || a.getAttribute("data-tooltip") || a.getAttribute("data-tooltip-html")) && !a.getAttribute("data-tooltip-suspended")
        }, !0),
            b = !1;
        this.hoverEl_ && this.hoverEl_ != a && (this.hideTooltip(), b = !0);
        if (!this.hoverEl_ && a && (this.hoverEl_ = a, !this.isFocusEvent_ || "mouse" !=
            a.getAttribute("data-tooltip-trigger"))) {
            var c = "";
            if (a.getAttribute("data-tooltip-contained"))
                for (var d = od("jfk-tooltip-data", a), f = 0; f < d.length; f++) {
                    if (d[f].parentNode == a) {
                        c = d[f].cloneNode(!0);
                        break
                    }
                } else c = (c = a.getAttribute("data-tooltip")) ? Ja(Ra(c)) : a.getAttribute("data-tooltip-html");
            d = a.getAttribute("data-tooltip-align");
            f = a.getAttribute("data-tooltip-class");
            if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                this.secondaryTimerId_ = X(za(this.showTooltipImpl_, this.hoverEl_, c,
                    d, f), a, this);
                return
            }
            this.showTooltipImpl_(this.hoverEl_, c, d, f)
        }
    }
};
var xk = function(a) {
    if (a) switch (a.toLowerCase().split(",")[0]) {
        case "l":
            return 0;
        case "t":
            return 2;
        case "r":
            return 3
    }
    return 1
};
vk.prototype.showTooltipImpl_ = function(a, b, c, d) {
    this.secondaryTimerId_ = 0;
    if (!this.tooltip_) {
        this.tooltip_ = new tk(this.domHelper_);
        this.hideTooltipImpl_();
        var f = this.tooltip_.getElement();
        this.domHelper_.getDocument().body.appendChild(f);
        this.registerDisposable(this.tooltip_);
        this.tooltipPos_ = new Wi(this.tooltip_.getClassName(), !0);
        this.tooltipPos_.setAutoReposition(!0);
        this.tooltipPos_.setElements(this.tooltip_.getElement(), this.tooltip_.getArrowElement())
    }
    t: {
        if (c) switch (c.toLowerCase().split(",")[1]) {
            case "l":
                f =
                    0;
                break t;
            case "r":
                f = 1;
                break t
        }
        f = 2
    }
    this.tooltipPos_.setPosition(xk(c), f, void 0, -1);
    zf(this.tooltip_.getElement(), "jfk-tooltip-hide");
    this.tooltipClass_ != d && (this.tooltipClass_ && !Fa(bb(this.tooltipClass_)) && zf(this.tooltip_.getElement(), this.tooltipClass_), Fa(bb(d)) || xf(this.tooltip_.getElement(), d), this.tooltipClass_ = d);
    ne(this.tooltip_.getElement(), 0, 0);
    if (w(b)) this.tooltip_.getContentElement().innerHTML = b;
    else
        for (Ad(this.tooltip_.getContentElement()); c = b.firstChild;) this.tooltip_.getContentElement().appendChild(c);
    this.tooltipPos_.setAnchorElement(a);
    this.tooltipPos_.reposition(null, 0)
};
vk.prototype.hideTooltipImpl_ = function() {
    this.tooltip_ && xf(this.tooltip_.getElement(), "jfk-tooltip-hide")
};
vk.prototype.hideTooltip = function() {
    this.hideTooltipImpl_();
    this.hoverEl_ = null
};
var yk = function(a) {
    a = a || {};
    var b = Z,
        c = '<div role="button"' + (a.id ? ' id="' + vj(a.id) + '"' : "") + ' class="',
        d;
    d = a || {};
    var f = "goog-inline-block jfk-button ";
    switch (d.style) {
        case 0:
            f += "jfk-button-standard";
            break;
        case 2:
            f += "jfk-button-action";
            break;
        case 3:
            f += "jfk-button-primary";
            break;
        case 1:
            f += "jfk-button-default";
            break;
        case 4:
            f += "jfk-button-flat";
            break;
        case 5:
            f += "jfk-button-mini";
            break;
        case 6:
            f += "jfk-button-contrast";
            break;
        default:
            f += "jfk-button-standard"
    }
    f += (1 == d.width ? " jfk-button-narrow" : "") + (d.checked ?
        " jfk-button-checked" : "") + (d.classes ? " " + d.classes : "") + (d.disabled ? " jfk-button-disabled" : "");
    return b(c + vj(new kj(f, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.tabindex ? vj(a.tabindex) : "0") + '"') + (a.title ? " " + (a.usingKennedyTooltip ? "data-tooltip" : "title") + '="' + vj(a.title) + '"' : "") + (a.value ? ' value="' + vj(a.value) + '"' : "") + (a.attributes ? " " + xj(a.attributes) : "") + ">" + ej(null != a.content ? a.content : "") + "</div>")
};
yk.soyTemplateName = "jfk.templates.button.strict";
var Mj = function(a, b, c, d) {
    Ah.call(this, a, zk.getInstance(), b);
    this.style_ = c || 0;
    this.width_ = d || 0;
    this.usingKennedyTooltip_ = !1
};
z(Mj, Ah);
e = Mj.prototype;
e.getStyle = function() {
    return this.style_
};
e.getWidth = function() {
    return this.width_
};
e.isUsingKennedyTooltip = function() {
    return this.usingKennedyTooltip_
};
e.setStyle = function(a) {
    this.style_ != a && (this.style_ = a, this.maybeUpdateElement_())
};
e.setWidth = function(a) {
    this.width_ != a && (this.width_ = a, this.maybeUpdateElement_())
};
e.setUsingKennedyTooltip = function(a) {
    this.usingKennedyTooltip_ = a
};
e.setTooltip = function(a) {
    this.setTooltipInternal(a);
    var b = this.getElement();
    if (b && a)
        if (this.usingKennedyTooltip_) {
            var c = void 0,
                c = a;
            b.removeAttribute("title");
            b.removeAttribute("data-tooltip-contained");
            a ? (b.setAttribute("data-tooltip", a), b.setAttribute("aria-label", c)) : (b.removeAttribute("data-tooltip"), b.removeAttribute("data-tooltip-html"), b.removeAttribute("aria-label"));
            wk(ld(b))
        } else b.title = a
};
e.setEnabled = function(a) {
    this.isEnabled() != a && (Mj.superClass_.setEnabled.call(this, a), this.maybeUpdateElement_())
};
e.setFocused = function(a) {
    Mj.superClass_.setFocused.call(this, a);
    this.setNoFocusOutline_(!1)
};
e.handleMouseDown = function(a) {
    Mj.superClass_.handleMouseDown.call(this, a);
    this.isEnabled() && this.setNoFocusOutline_(!0)
};
e.handleMouseUp = function(a) {
    Mj.superClass_.handleMouseUp.call(this, a);
    this.isEnabled() && this.setNoFocusOutline_(!0)
};
e.setNoFocusOutline_ = function(a) {
    this.getElement() && Bf(this.getElement(), "jfk-button-clear-outline", a)
};
e.maybeUpdateElement_ = function() {
    this.getElement() && this.getRenderer().updateButtonStyles(this)
};
var Ak = function(a, b) {
    var c = new Mj(a, b);
    c.setSupportedState(16, !0);
    return c
}, zk = function() {
        this.standardButtonClass_ = this.getCssClass() + "-standard";
        this.actionButtonClass_ = this.getCssClass() + "-action";
        this.primaryButtonClass_ = this.getCssClass() + "-primary";
        this.defaultButtonClass_ = this.getCssClass() + "-default";
        this.flatButtonClass_ = this.getCssClass() + "-flat";
        this.narrowButtonClass_ = this.getCssClass() + "-narrow";
        this.miniButtonClass_ = this.getCssClass() + "-mini";
        this.contrastButtonClass_ = this.getCssClass() +
            "-contrast"
    };
z(zk, sh);
ga(zk);
e = zk.prototype;
e.updateButton_ = function(a, b, c) {
    a && c.setStyle(a);
    b && c.setWidth(b)
};
e.getCssClass = function() {
    return "jfk-button"
};
e.createDom = function(a) {
    nb(a, Mj, "Button is expected to be instance of jfk.Button");
    var b = a.getDomHelper(),
        c = Vi(yk, {
            disabled: !a.isEnabled(),
            checked: a.isChecked(),
            style: a.getStyle(),
            title: a.getTooltip(),
            usingKennedyTooltip: a.isUsingKennedyTooltip(),
            value: a.getValue(),
            width: a.getWidth()
        }, void 0, b);
    b.append(c, a.getContent());
    this.decorate(a, c);
    return c
};
e.decorate = function(a, b) {
    zk.superClass_.decorate.call(this, a, b);
    this.classNamesToButtonUpdater_ || (this.classNamesToButtonUpdater_ = Ac(this.standardButtonClass_, za(this.updateButton_, 0, null), this.actionButtonClass_, za(this.updateButton_, 2, null), this.primaryButtonClass_, za(this.updateButton_, 3, null), this.defaultButtonClass_, za(this.updateButton_, 1, null), this.flatButtonClass_, za(this.updateButton_, 4, null), this.miniButtonClass_, za(this.updateButton_, 5, null), this.contrastButtonClass_, za(this.updateButton_,
        6, null), this.narrowButtonClass_, za(this.updateButton_, null, 1)));
    for (var c = uf(b), d = 0; d < c.length; ++d) {
        var f = this.classNamesToButtonUpdater_[c[d]];
        f && f(a)
    }
    if (c = b.getAttribute("data-tooltip")) a.setTooltipInternal(c), a.setUsingKennedyTooltip(!0);
    return b
};
e.getValue = function(a) {
    return a.getAttribute("value") || ""
};
e.setValue = function(a, b) {
    a && a.setAttribute("value", b)
};
e.setState = function(a, b, c) {
    zk.superClass_.setState.call(this, a, b, c);
    if (32 == b) try {
        var d = a.getElement();
        c ? d.focus() : d.blur()
    } catch (f) {}
};
e.updateButtonStyles = function(a) {
    function b(a, b) {
        (a ? c : d).push(b)
    }
    B(a.getElement(), "Button element must already exist when updating style.");
    var c = [],
        d = [],
        f = a.getStyle();
    b(0 == f, this.standardButtonClass_);
    b(2 == f, this.actionButtonClass_);
    b(3 == f, this.primaryButtonClass_);
    b(4 == f, this.flatButtonClass_);
    b(5 == f, this.miniButtonClass_);
    b(1 == f, this.defaultButtonClass_);
    b(6 == f, this.contrastButtonClass_);
    b(1 == a.getWidth(), this.narrowButtonClass_);
    b(!a.isEnabled(), this.getCssClass() + "-disabled");
    Af(a.getElement(),
        d);
    yf(a.getElement(), c)
};
var Bk = function() {};
z(Bk, oh);
ga(Bk);
e = Bk.prototype;
e.createDom = function(a) {
    var b = a.getDomHelper().createDom("span", this.getClassNames(a).join(" "));
    this.setCheckboxState(b, a.getChecked());
    return b
};
e.decorate = function(a, b) {
    b = Bk.superClass_.decorate.call(this, a, b);
    B(b);
    var c = uf(b),
        d = !1;
    xb(c, this.getClassForCheckboxState(null)) ? d = null : xb(c, this.getClassForCheckboxState(!0)) ? d = !0 : xb(c, this.getClassForCheckboxState(!1)) && (d = !1);
    a.setCheckedInternal(d);
    B(b, "The element cannot be null.");
    Y(b, "checked", this.ariaStateFromCheckState_(d));
    return b
};
e.getAriaRole = function() {
    return "checkbox"
};
e.setCheckboxState = function(a, b) {
    if (a) {
        B(a);
        var c = this.getClassForCheckboxState(b);
        B(c);
        B(a);
        wf(a, c) || (qc(Ck, function(b) {
            b = this.getClassForCheckboxState(b);
            B(a);
            Bf(a, b, b == c)
        }, this), Y(a, "checked", this.ariaStateFromCheckState_(b)))
    }
};
e.ariaStateFromCheckState_ = function(a) {
    return null == a ? "mixed" : !0 == a ? "true" : "false"
};
e.getCssClass = function() {
    return "goog-checkbox"
};
e.getClassForCheckboxState = function(a) {
    var b = this.getStructuralCssClass();
    if (!0 == a) return b + "-checked";
    if (!1 == a) return b + "-unchecked";
    if (null == a) return b + "-undetermined";
    throw Error("Invalid checkbox state: " + a);
};
var Dk = function(a, b, c) {
    c = c || Bk.getInstance();
    wh.call(this, null, c, b);
    this.checked_ = ba(a) ? a : !1
};
z(Dk, wh);
var Ck = {
    CHECKED: !0,
    UNCHECKED: !1,
    UNDETERMINED: null
};
e = Dk.prototype;
e.label_ = null;
e.getChecked = function() {
    return this.checked_
};
e.isChecked = function() {
    return !0 == this.checked_
};
e.isUndetermined = function() {
    return null == this.checked_
};
e.setChecked = function(a) {
    a != this.checked_ && (this.checked_ = a, this.getRenderer().setCheckboxState(this.getElement(), this.checked_))
};
e.setCheckedInternal = function(a) {
    this.checked_ = a
};
e.setLabel = function(a) {
    this.isInDocument() ? (this.exitDocument(), this.label_ = a, this.enterDocument()) : this.label_ = a
};
e.toggle = function() {
    this.setChecked(this.checked_ ? !1 : !0)
};
e.enterDocument = function() {
    Dk.superClass_.enterDocument.call(this);
    if (this.isHandleMouseEvents()) {
        var a = this.getHandler();
        this.label_ && a.listen(this.label_, "click", this.handleClickOrSpace_).listen(this.label_, "mouseover", this.handleMouseOver).listen(this.label_, "mouseout", this.handleMouseOut).listen(this.label_, "mousedown", this.handleMouseDown).listen(this.label_, "mouseup", this.handleMouseUp);
        a.listen(this.getElement(), "click", this.handleClickOrSpace_)
    }
    this.label_ && (this.label_.id || (this.label_.id =
        this.makeId("lbl")), a = this.getElement(), B(a, "The checkbox DOM element cannot be null."), Y(a, "labelledby", this.label_.id))
};
e.setEnabled = function(a) {
    Dk.superClass_.setEnabled.call(this, a);
    if (a = this.getElement()) a.tabIndex = this.isEnabled() ? 0 : -1
};
e.handleClickOrSpace_ = function(a) {
    a.stopPropagation();
    var b = this.checked_ ? "uncheck" : "check";
    this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
};
e.handleKeyEventInternal = function(a) {
    32 == a.keyCode && this.handleClickOrSpace_(a);
    return !1
};
uh("goog-checkbox", function() {
    return new Dk
});
var Ek = function(a) {
    a = a || {};
    return Z('<span class="jfk-checkbox goog-inline-block' + (a.undetermined ? " jfk-checkbox-undetermined" : a.checked ? " jfk-checkbox-checked" : " jfk-checkbox-unchecked") + (a.disabled ? " jfk-checkbox-disabled" : "") + (a.classes ? " " + vj(a.classes) : "") + '" role="checkbox" aria-checked="' + (a.undetermined ? "mixed" : a.checked ? "true" : "false") + '"' + (a.ariaLabelledBy ? 'aria-labelledby="' + vj(a.ariaLabelledBy) + '"' : "") + (a.id ? 'id="' + vj(a.id) + '"' : "") + (a.disabled ? 'aria-disabled="true" tabindex="-1"' : 'tabindex="' +
        (a.tabindex ? vj(a.tabindex) : "0") + '"') + (a.attributes ? " " + xj(a.attributes) : "") + 'dir="ltr"><div class="jfk-checkbox-checkmark"></div></span>')
};
Ek.soyTemplateName = "jfk.templates.checkbox.main";
var Fk = function(a, b) {
    var c = qh(Bk, "jfk-checkbox");
    Dk.call(this, a, b, c);
    this.setSupportedState(4, !0)
};
z(Fk, Dk);
e = Fk.prototype;
e.createDom = function() {
    this.setElementInternal(Vi(Ek, {
        checked: this.isChecked(),
        disabled: !this.isEnabled(),
        undetermined: this.isUndetermined()
    }, void 0, this.getDomHelper()))
};
e.decorateInternal = function(a) {
    Fk.superClass_.decorateInternal.call(this, a);
    xf(a, "goog-inline-block");
    this.getElement().dir = "ltr";
    this.getElementByClass("jfk-checkbox-checkmark") || this.createCheckmarkDiv_()
};
e.createCheckmarkDiv_ = function() {
    var a = this.getDomHelper().createDom("div", "jfk-checkbox-checkmark");
    this.getElement().appendChild(a)
};
e.setFocused = function(a) {
    Fk.superClass_.setFocused.call(this, a);
    this.setNoFocusOutline_(!1)
};
e.handleMouseDown = function(a) {
    Fk.superClass_.handleMouseDown.call(this, a);
    this.isEnabled() && this.setNoFocusOutline_(!0)
};
e.setNoFocusOutline_ = function(a) {
    this.getElement() && Bf(this.getElement(), "jfk-checkbox-clearOutline", a)
};
var Ik = function(a, b) {
    var c = za(Gk, a, b);
    a.isInDocument() ? c() : E ? Pc(a, "aftershow", c) : Pc(a, "beforeshow", c);
    var d = null;
    N(a, "aftershow", function() {
        a.getDraggable() && (d = new Hk(a))
    });
    N(a, "afterhide", function() {
        gc(d)
    })
}, Gk = function(a, b) {
        a.setBackgroundElementOpacity(0.75);
        var c = a.getButtonSet();
        c && (c = c.getButton(b)) && xf(c, "goog-buttonset-action");
        var c = Mi(a.getElement(), 0.13),
            d = Ni(a.getElement(), 0.13),
            f = Li(a.getBackgroundElement(), 0.13, "ease-out", 0, 0.75),
            g = Li(a.getBackgroundElement(), 0.13, "ease-in", 0.75, 0);
        a.setTransition(c, d, f, g)
    }, Hk = function(a) {
        Wf.call(this, a.getElement());
        this.dialog_ = a;
        N(this, "start", this.shouldDrag_, !1, this)
    };
z(Hk, Wf);
Hk.prototype.shouldDrag_ = function(a) {
    a = a.browserEvent;
    if (this.dialog_.getDraggable() && wf(a.target, this.dialog_.getClass())) {
        var b = De(this.dialog_.getElement()),
            b = new ce(0, b.width, b.height, 0),
            c = Le(this.dialog_.getElement());
        b.expand(-1 * c.top, -1 * c.right, -1 * c.bottom, -1 * c.left);
        if (!b.contains(new P(a.offsetX, a.offsetY))) return this.setDraggerLimits_(), !0
    }
    return !1
};
Hk.prototype.setDraggerLimits_ = function() {
    var a = this.dialog_.getDomHelper().getDocument(),
        b = sd(ud(a) || window),
        c = De(this.dialog_.getElement()),
        d;
    "fixed" == le(this.dialog_.getElement()) ? (d = b.width - c.width, c = b.height - c.height) : (d = Math.max(a.body.scrollWidth, b.width), b = Math.max(a.body.scrollHeight, b.height), d -= c.width, c = b - c.height);
    this.setLimits(new fe(0, 0, Math.max(0, d), Math.max(0, c)))
};
var Jk = function() {};
z(Jk, sh);
ga(Jk);
e = Jk.prototype;
e.createDom = function(a) {
    var b = {
        "class": "goog-inline-block " + this.getClassNames(a).join(" ")
    }, b = a.getDomHelper().createDom("div", b, a.getContent());
    this.setTooltip(b, a.getTooltip());
    this.setAriaStates(a, b);
    return b
};
e.getAriaRole = function() {
    return "button"
};
e.canDecorate = function(a) {
    return "DIV" == a.tagName
};
e.decorate = function(a, b) {
    B(b);
    xf(b, "goog-inline-block");
    return Jk.superClass_.decorate.call(this, a, b)
};
e.getValue = function() {
    return ""
};
e.getCssClass = function() {
    return "goog-flat-button"
};
uh("goog-flat-button", function() {
    return new Ah(null, Jk.getInstance())
});
var Kk = function() {};
z(Kk, Jk);
ga(Kk);
e = Kk.prototype;
e.createDom = function(a) {
    var b = {
        "class": "goog-inline-block " + this.getClassNames(a).join(" ")
    }, b = a.getDomHelper().createDom("div", b, [this.createCaption(a.getContent(), a.getDomHelper()), this.createDropdown(a.getDomHelper())]);
    this.setTooltip(b, a.getTooltip());
    this.setAriaStates(a, b);
    return b
};
e.getContentElement = function(a) {
    return a && a.firstChild
};
e.decorate = function(a, b) {
    var c = nd("*", "goog-menu", b)[0];
    if (c) {
        S(c, !1);
        a.getDomHelper().getDocument().body.appendChild(c);
        var d = new Kh;
        d.decorate(c);
        a.setMenu(d)
    }
    nd("*", this.getCssClass() + "-caption", b)[0] || b.appendChild(this.createCaption(b.childNodes, a.getDomHelper()));
    nd("*", this.getCssClass() + "-dropdown", b)[0] || b.appendChild(this.createDropdown(a.getDomHelper()));
    return Kk.superClass_.decorate.call(this, a, b)
};
e.createCaption = function(a, b) {
    return b.createDom("div", "goog-inline-block " + (this.getCssClass() + "-caption"), a)
};
e.createDropdown = function(a) {
    return a.createDom("div", {
        "class": "goog-inline-block " + (this.getCssClass() + "-dropdown"),
        "aria-hidden": !0
    }, "\u00a0")
};
e.getCssClass = function() {
    return "goog-flat-menu-button"
};
uh("goog-flat-menu-button", function() {
    return new Oh(null, null, Kk.getInstance())
});
var Lk = function(a, b, c, d, f) {
    Oh.call(this, a, b, c, d, f || new Jh("listbox"));
    this.defaultCaption_ = this.getContent();
    this.initialAriaLabel_ = null
};
z(Lk, Oh);
e = Lk.prototype;
e.selectionModel_ = null;
e.enterDocument = function() {
    Lk.superClass_.enterDocument.call(this);
    this.updateCaption();
    this.listenToSelectionModelEvents_()
};
e.decorateInternal = function(a) {
    Lk.superClass_.decorateInternal.call(this, a);
    (a = this.getCaption()) ? this.setDefaultCaption(a) : this.getSelectedItem() || this.setSelectedIndex(0)
};
e.disposeInternal = function() {
    Lk.superClass_.disposeInternal.call(this);
    this.selectionModel_ && (this.selectionModel_.dispose(), this.selectionModel_ = null);
    this.defaultCaption_ = null
};
e.handleMenuAction = function(a) {
    this.setSelectedItem(a.target);
    Lk.superClass_.handleMenuAction.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
};
e.handleSelectionChange = function() {
    var a = this.getSelectedItem();
    Lk.superClass_.setValue.call(this, a && a.getValue());
    this.updateCaption()
};
e.setMenu = function(a) {
    var b = Lk.superClass_.setMenu.call(this, a);
    a != b && (this.selectionModel_ && this.selectionModel_.clear(), a && (this.selectionModel_ ? a.forEachChild(function(a) {
        this.setCorrectAriaRole_(a);
        this.selectionModel_.addItem(a)
    }, this) : this.createSelectionModel_(a)));
    return b
};
e.setDefaultCaption = function(a) {
    this.defaultCaption_ = a;
    this.updateCaption()
};
e.addItem = function(a) {
    this.setCorrectAriaRole_(a);
    Lk.superClass_.addItem.call(this, a);
    this.selectionModel_ ? this.selectionModel_.addItem(a) : this.createSelectionModel_(this.getMenu())
};
e.addItemAt = function(a, b) {
    this.setCorrectAriaRole_(a);
    Lk.superClass_.addItemAt.call(this, a, b);
    this.selectionModel_ ? this.selectionModel_.addItemAt(a, b) : this.createSelectionModel_(this.getMenu())
};
e.removeItem = function(a) {
    Lk.superClass_.removeItem.call(this, a);
    this.selectionModel_ && this.selectionModel_.removeItem(a)
};
e.removeItemAt = function(a) {
    Lk.superClass_.removeItemAt.call(this, a);
    this.selectionModel_ && this.selectionModel_.removeItemAt(a)
};
e.setSelectedItem = function(a) {
    if (this.selectionModel_) {
        var b = this.getSelectedItem();
        this.selectionModel_.setSelectedItem(a);
        a != b && this.dispatchEvent("change")
    }
};
e.setSelectedIndex = function(a) {
    this.selectionModel_ && this.setSelectedItem(this.selectionModel_.getItemAt(a))
};
e.setValue = function(a) {
    if (null != a && this.selectionModel_)
        for (var b = 0, c; c = this.selectionModel_.getItemAt(b); b++)
            if (c && "function" == typeof c.getValue && c.getValue() == a) {
                this.setSelectedItem(c);
                return
            }
    this.setSelectedItem(null)
};
e.getValue = function() {
    var a = this.getSelectedItem();
    return a ? a.getValue() : null
};
e.getSelectedItem = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedItem() : null
};
e.getSelectedIndex = function() {
    return this.selectionModel_ ? this.selectionModel_.getSelectedIndex() : -1
};
e.createSelectionModel_ = function(a) {
    this.selectionModel_ = new pk;
    a && a.forEachChild(function(a) {
        this.setCorrectAriaRole_(a);
        this.selectionModel_.addItem(a)
    }, this);
    this.listenToSelectionModelEvents_()
};
e.listenToSelectionModelEvents_ = function() {
    this.selectionModel_ && this.getHandler().listen(this.selectionModel_, "select", this.handleSelectionChange)
};
e.updateCaption = function() {
    var a = this.getSelectedItem();
    this.setContent(a ? a.getCaption() : this.defaultCaption_);
    var b = this.getRenderer().getContentElement(this.getElement());
    b && this.getDomHelper().isElement(b) && (null == this.initialAriaLabel_ && (this.initialAriaLabel_ = tf(b, "label")), a = (a = a ? a.getElement() : null) ? tf(a, "label") : this.initialAriaLabel_, Y(b, "label", a))
};
e.setCorrectAriaRole_ = function(a) {
    a.setPreferredAriaRole(a instanceof Gh ? "option" : "separator")
};
e.setOpen = function(a, b) {
    Lk.superClass_.setOpen.call(this, a, b);
    this.isOpen() && this.getMenu().setHighlightedIndex(this.getSelectedIndex())
};
uh("goog-select", function() {
    return new Lk(null)
});
var Mk = function(a) {
    this.dom_ = a || ld();
    this.idGenerator_ = dg.getInstance()
};
z(Mk, fc);
e = Mk.prototype;
e.install = function() {
    (K || J && Zb(2)) && !this.installed_ && (this.installed_ = !0, this.rescan_())
};
e.disposeInternal = function() {
    this.installed_ = !1
};
e.installed_ = !1;
e.rescan_ = function() {
    this.installed_ && (X(this.rescan_, 250, this), D(this.dom_.getElementsByClass("jfkScrollable"), function(a) {
        this.processElement_(a)
    }, this))
};
e.processElement_ = function(a, b) {
    B(wf(a, "jfkScrollable"), "Element does not have necessary CSS class.");
    var c = Dd(a);
    B(0 < c.length && wf(c[0], "jfkScrollable-inner"), "Element does not have correct structure.");
    c = c[0];
    a.getAttribute("data-shadowenabled") ? b && this.fixShadow_(a, c) : (a.setAttribute("data-shadowenabled", "1"), c.addEventListener("scroll", x(this.handleScroll_, this)), this.initShadowElement_(a, "jfkScrollable-topShadow", "data-topshadow"), this.initShadowElement_(a, "jfkScrollable-bottomShadow", "data-bottomshadow"),
        this.fixShadow_(a, c))
};
e.initShadowElement_ = function(a, b, c) {
    a.getAttribute(c) || (b = this.dom_.createDom("div", b), this.dom_.appendChild(a, b), b = b.id = this.idGenerator_.getNextUniqueId(), a.setAttribute(c, b))
};
e.handleScroll_ = function(a) {
    this.fixShadow_(a.target.parentNode, a.target)
};
e.fixShadow_ = function(a, b) {
    if (wf(a, "jfkScrollable")) {
        var c = this.dom_.getElement(a.getAttribute("data-topshadow"));
        c && this.setShadowOpacity_(c, b.scrollTop);
        (c = this.dom_.getElement(a.getAttribute("data-bottomshadow"))) && this.setShadowOpacity_(c, b.scrollHeight - (b.scrollTop + b.clientHeight))
    }
};
e.setShadowOpacity_ = function(a, b) {
    a.style.opacity = Math.min(1, b / 15)
};
var Nk = [];
v("trends.GeoNames.worldwide", Nk, void 0);
v("trends.GeoNames.setWorldwide", function(a) {
    Nk = a
}, void 0);
var Ok = [];
v("trends.GeoNames.favoriteCountries", Ok, void 0);
v("trends.GeoNames.setFavoriteCountries", function(a) {
    Ok = a
}, void 0);
var Pk = {};
v("trends.GeoNames.countryToName", Pk, void 0);
v("trends.GeoNames.setCountryToName", function(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c][0]] = a[c][1];
    Pk = b
}, void 0);
var Qk = {};
v("trends.GeoNames.countryToRegions", Qk, void 0);
v("trends.GeoNames.setCountryToRegions", function(a) {
    var b = {}, c;
    for (c in a) {
        b[c] = {};
        for (var d = 0; d < a[c].length; d++) b[c][a[c][d][0]] = a[c][d][1]
    }
    Qk = b
}, void 0);
var Rk = {};
v("trends.GeoNames.countryToDmas", Rk, void 0);
v("trends.GeoNames.setCountryToDmas", function(a) {
    var b = {}, c;
    for (c in a) {
        b[c] = {};
        for (var d = 0; d < a[c].length; d++) b[c][" " + a[c][d][0]] = [a[c][d][1], a[c][d][2]]
    }
    Rk = b
}, void 0);
var Sk = {};
v("trends.GeoNames.regionToDmas", Sk, void 0);
v("trends.GeoNames.setRegionToDmas", function(a) {
    Sk = a
}, void 0);
var Tk = function(a, b, c) {
    gh.call(this, a, "geo", b, "");
    this.currentCountriesWhitelist_ = {};
    this.updateCountries();
    c ? this.setValue(c) : this.reset()
};
z(Tk, gh);
v("trends.Geo", Tk, void 0);
var Uk = Tk.prototype.treeData_ = null,
    Vk = function(a) {
        Uk = a
    };
Tk.setTreeData = Vk;
e = Tk.prototype;
e.getTreeData = function() {
    this.treeData_ || (this.treeData_ = hh(Uk));
    return this.treeData_
};
e.buildAncestorsPathString = function(a) {
    "" == a[0] && a.shift();
    return Tk.superClass_.buildAncestorsPathString.call(this, a)
};
e.extractAncestorsPath = function(a) {
    "" == a || 0 == a.lastIndexOf("-", 0) || (a = "-" + a);
    return Tk.superClass_.extractAncestorsPath.call(this, a)
};
e.updateCountries = function(a) {
    if (a != this.currentCountriesWhitelist_) {
        var b = this.getValue(),
            c;
        if (a) {
            c = Uk.children;
            var d = [];
            if (c)
                for (var f = 0; f < c.length; f++) xb(a, c[f].id) && !c[f].favorite && d.push(hh(c[f]));
            c = xc(Uk);
            c.children = d
        } else c = hh(Uk);
        this.treeData_ = c;
        this.resetTreeData();
        this.currentCountriesWhitelist_ = a;
        this.setValue(b)
    }
};
e.initTree = function(a) {
    Tk.superClass_.initTree.call(this, a);
    var b = this.getFirstNonFavoriteChildTreeNode_(a);
    a = a.children && a.children[0].treeNode == b;
    b && !a && gd(b.getElement(), "tree-separator-line")
};
e.getFirstNonFavoriteChildTreeNode_ = function(a) {
    if (a = a.children)
        for (var b = 0; b < a.length; b++)
            if (!a[b].favorite) return a[b].treeNode;
    return null
};
var Wk = function(a, b, c, d, f) {
    var g = new Fk;
    g.setChecked(d);
    g.setEnabled(c);
    g.render(Q(a));
    c || gd(Q(b), "checkbox-label-disabled");
    g.setLabel(Q(b));
    f && N(g, "change", f);
    return g
};
v("JfkUtils.createCheckbox", Wk, void 0);
v("JfkUtils.isChecked", function(a) {
    return a.isChecked()
}, void 0);
var Yk = function(a, b, c) {
    var d = Q(a + "_d");
    Xk.push(d);
    window.document.body.appendChild(d);
    this.dialog = new rg;
    this.dialog.decorate(d);
    d = new ig;
    d.set("ok", "Done", !0);
    this.dialog.setButtonSet(d);
    this.dialog.setHasTitleCloseButton(!1);
    this.dialog.getDialogElement().style.zIndex = 1305;
    this.dialog.getBackgroundElement().style.zIndex = 1304;
    this.dialog.init();
    Ik(this.dialog, "ok");
    this.embedSnippetElement_ = Q(a + "_content");
    this.widthElement_ = Q(a + "_width");
    this.heightElement_ = Q(a + "_height");
    this.defaultWidth_ = this.widthElement_.value;
    this.defaultHeight_ = this.heightElement_.value;
    this.width_ = this.defaultWidth_;
    this.height_ = this.defaultHeight_;
    this.embedUrlFormat_ = b;
    this.embedSnippetFormat_ = "";
    this.setEmbedSnippetFormat(b);
    this.alternateEmbedUrlFormat_ = c;
    Wk(a + "_alternative_format_checkbox", a + "_alternative_format_label", !0, !1, x(this.onUseAlternativeFormatCheckboxChange_, this))
};
v("trends.ShareControl", Yk, void 0);
var Xk = [];
Yk.prototype.show = function() {
    this.widthElement_.value = this.defaultWidth_;
    this.heightElement_.value = this.defaultHeight_;
    this.update();
    this.dialog.setVisible(!0)
};
Yk.prototype.show = Yk.prototype.show;
Yk.prototype.update = function() {
    this.isValidSize_(this.widthElement_.value) && (this.width_ = this.widthElement_.value);
    this.isValidSize_(this.heightElement_.value) && (this.height_ = this.heightElement_.value);
    this.render()
};
Yk.prototype.update = Yk.prototype.update;
Yk.prototype.setEmbedSnippetFormat = function(a) {
    this.embedSnippetFormat_ = Dj('<script type="text/javascript" src="%s">\x3c/script>', a);
    this.render()
};
Yk.prototype.setEmbedSnippetFormat = Yk.prototype.setEmbedSnippetFormat;
Yk.prototype.isValidSize_ = function(a) {
    return a && !/[^0-9]/.test(a)
};
Yk.prototype.render = function() {
    var a = this.embedSnippetFormat_.replace(/&w=%d/, "&w=" + this.width_).replace(/&h=%d/, "&h=" + this.height_);
    this.embedSnippetElement_.value = a
};
Yk.prototype.onUseAlternativeFormatCheckboxChange_ = function(a) {
    this.setEmbedSnippetFormat(a.target.checked_ ? this.alternateEmbedUrlFormat_ : this.embedUrlFormat_)
};
var Zk = function(a, b, c, d, f, g) {
    this.iframeContainerElement_ = Q(a + "_iframe_container");
    this.minWidth_ = c;
    this.maxWidth_ = d;
    this.minHeight_ = f;
    this.maxHeight_ = g;
    this.bothPanelsContainer_ = Q("embed-dialog-both-panels");
    Yk.call(this, a, b);
    N(window, "resize", x(this.resizePanelsContainer_, this))
};
z(Zk, Yk);
v("trends.PreviewShareControl", Zk, void 0);
e = Zk.prototype;
e.getInBoundriesValue = function(a, b, c) {
    a = parseInt(a);
    return a > b ? b : a < c ? c : a
};
e.update = function() {
    this.isValidSize_(this.widthElement_.value) && (this.width_ = this.getInBoundriesValue(this.widthElement_.value, this.maxWidth_, this.minWidth_), this.widthElement_.value = this.width_);
    this.isValidSize_(this.heightElement_.value) && (this.height_ = this.getInBoundriesValue(this.heightElement_.value, this.maxHeight_, this.minHeight_), this.heightElement_.value = this.height_);
    this.render();
    this.dialog.reposition()
};
e.setEmbedSnippetFormat = function(a) {
    this.embedSnippetFormat_ = Dj('<iframe scrolling="no" style="border:none;" width="$$width$$" height="$$height$$" src="%s"></iframe>', a);
    this.render()
};
e.render = function() {
    var a = this.embedSnippetFormat_.replace("$$h$$", this.height_).replace("$$width$$", this.width_).replace("$$height$$", this.height_);
    this.embedSnippetElement_.value = a;
    this.iframeContainerElement_.innerHTML = a;
    this.resizePanelsContainer_()
};
e.resizePanelsContainer_ = function() {
    for (var a = 0, b = Dd(this.bothPanelsContainer_), c = 0; c < b.length; ++c) var d = Ke(b[c], "margin"),
    a = a + (b[c].offsetWidth + d.left + d.right);
    this.bothPanelsContainer_.style.minWidth = a + "px";
    this.dialog.reposition()
};
e.show = function() {
    Zk.superClass_.show.call(this);
    this.resizePanelsContainer_()
};
var $k = function(a, b, c) {
    a = new ti(a);
    a.setParameterValue(b, c);
    return a.toString()
};
v("Utils.setParameterValue", $k, void 0);
var bl = function(a, b, c) {
    a = Q(a);
    al(c, b);
    N(a, "mouseover", function() {
        al(b, c)
    });
    N(a, "mouseout", function() {
        al(c, b)
    })
};
v("trends.Utils.toggleDisplayOnHover", bl, void 0);
var al = function(a, b) {
    Q(a).style.display = "";
    Q(b).style.display = "none";
    return !1
};
v("trends.Utils.toggleDisplay", al, void 0);
var cl = function(a) {
    a.forEachChild(function(a) {
        a.getContent() && a.getContent() instanceof Text && a.setContent(Ha(a.getContent().data))
    })
};
v("trends.Utils.moveElement", function(a, b) {
    var c = Q(b),
        d = null;
    c && (c.innerHTML = "", (d = Q(a)) && c.appendChild(d))
}, void 0);
v("trends.Utils.openInPopup", function(a, b, c) {
    c = Dj(c, encodeURIComponent(document.location.href));
    var d = ["menubar=no,toolbar=no,resizable=yes,scrollbars=yes"];
    d.push(",width=");
    d.push(a);
    d.push(",height=");
    d.push(b);
    window.open(c, "", d.join(""))
}, void 0);
v("trends.Utils.onImageLoad", function(a) {
    var b;
    !cd || E && Zb("9") && !Zb("10") && t.SVGElement && a instanceof t.SVGElement ? (b = a.parentNode, b = Gd(b) ? b : null) : b = a.parentElement;
    b = De(b);
    var c = b.width / b.height,
        d = De(a);
    d.width / d.height <= c ? (Ae(a, b.width), c = De(a).height, a.style.marginTop = Math.round((b.height - c) / 2) + "px") : (a.style.height = me(b.height, !0), c = De(a).width, a.style.marginLeft = Math.round((b.width - c) / 2) + "px")
}, void 0);
var dl = function(a, b, c) {
    b = od("share-button-container", b);
    var d = [];
    D(b, function(b) {
        var g = b.getAttribute("data-shareUrl"),
            h = b.getAttribute("data-twitterShareTitle"),
            k = b.getAttribute("data-twitterHashTag"),
            m = b.getAttribute("data-idForTracking");
        d.push(new Lj(b, g, h, k, m, a, c))
    });
    return d
};
v("trends.Utils.createShareButtons", dl, void 0);
v("trends.Utils.installScrollableRegion", function() {
    (new Mk).install()
}, void 0);
var el = function(a, b) {
    for (var c = "<" + b, d = "</" + b, f = a.indexOf(c), g = []; - 1 != f;) {
        var h = a.indexOf(">", f) + 1,
            f = a.indexOf(d, f);
        if (0 < f) g[g.length] = a.substring(h, f);
        else break;
        f = a.indexOf(c, f)
    }
    return g
}, fl = function(a, b) {
        var c = el(b, "script");
        a.innerHTML = b;
        t.eval(c.join(""))
    };
v("trends.Utils.createZippy", function(a, b, c, d) {
    new nk(a, b, c, d)
}, void 0);
var ml = function(a, b, c) {
    S(be(a.getElement(), "butterBar-container"), !0);
    a.setVisible(!0);
    a.getContentElement().innerHTML = b;
    a.setType("info");
    c && gl(a)
};
v("trends.Utils.showButterBarInfoMessage", ml, void 0);
var gl = function(a) {
    Fe(a.getElement(), 1);
    X(x(nl, void 0, a), 3E3)
}, nl = function(a) {
        (new ak(a.getElement(), 1E3)).play();
        X(x(ol, void 0, a), 1200)
    }, ol = function(a) {
        S(be(a.getElement(), "butterBar-container"), !1);
        a.setVisible(!1)
    }, pl = function() {
        S(Q("loading-bg"), !0)
    }, ql = function() {
        S(Q("loading-bg"), !1)
    };
var rl = function(a, b, c, d) {
    sg.call(this, a, b, c);
    this.menu_ = new Kh;
    this.menu_.decorate(this.getContentElement());
    this.menu_.getElement().style.padding = 0;
    cl(this.menu_);
    N(this.menu_, "action", x(this.handleMenuAction, this));
    this.defaultValue_ = d;
    this.selectedValue_ = ""
};
z(rl, sg);
e = rl.prototype;
e.handlePopupAnchorClick = function() {
    this.menu_.highlightFirst();
    this.menu_.highlightNextPrefix(this.selectedValue_);
    rl.superClass_.handlePopupAnchorClick.call(this)
};
e.setValue = function(a, b) {
    this.selectedValue_ = this.menu_.getChild(a).getCaption();
    this.setAnchorCaption(b ? b : this.selectedValue_, a == this.defaultValue_)
};
e.getHiddenBox = function() {
    return Q(this.baseId_ + "_hidden")
};
e.setLabel = function(a) {
    a.htmlFor = this.getHiddenBox().id
};
e.handleMenuAction = function(a) {
    this.setValue(a.target.getId());
    this.getPopup().setVisible(!1);
    this.fireSelectEvent()
};
var sl = function(a, b, c) {
    rl.call(this, a, "cmpt", b, "q");
    c && this.setValue(c)
};
z(sl, rl);
v("trends.CompareTypePickerMobile", sl, void 0);
e = sl.prototype;
e.setSelectedComparisonType = function(a) {
    this.setValue(a)
};
e.getValue = function() {
    var a = this.getHiddenBox().value;
    return "q" == a ? "" : a
};
e.setValue = function(a) {
    "" == a ? this.reset() : (this.getHiddenBox().value = a, rl.prototype.setValue.call(this, this.baseId_ + "_" + a))
};
e.reset = function() {
    this.setValue("q")
};
e.extractComparisonType = function(a) {
    return a.replace(this.baseId_ + "_", "")
};
e.handleMenuAction = function(a) {
    this.setValue(this.extractComparisonType(a.target.getId()));
    this.getPopup().setVisible(!1);
    this.fireSelectEvent(a.target)
};
var ul = function(a, b, c) {
    rl.call(this, a, "date", b, "all");
    this.fromPicker_ = new tl(this.baseId_ + "_from", x(this.onCustomModeChange, this, !0));
    this.toPicker_ = new tl(this.baseId_ + "_to", x(this.onCustomModeChange, this, !1));
    this.currentReposStartYear_ = this.findReposStartYear_();
    this.currentReposStartMonth_ = 1;
    this.monthLabelList_ = this.findMonthLabels_();
    this.monthIdList_ = this.findMonthIds_();
    this.customDateRangeDialog_ = null;
    this.createCustomDateRangeDialog_();
    this.customDateRangeDialogOpen_ = !1;
    this.reset();
    c &&
        this.setValue(c)
};
z(ul, rl);
e = ul.prototype;
e.createCustomDateRangeDialog_ = function() {
    // window.document.body.appendChild(this.getCustomDateRangeDialogElem_());
    this.customDateRangeDialog_ = new rg;
    this.customDateRangeDialog_.setHasTitleCloseButton(!1);
    this.customDateRangeDialog_.decorate(this.getCustomDateRangeDialogElem_());
    Ik(this.customDateRangeDialog_, "ok");
    // this.customDateRangeDialog_.getElement().style.zIndex = "2005";
    // this.customDateRangeDialog_.getBackgroundElement().style.zIndex = "2004";
    // this.customDateRangeDialog_.init();
    // N(this.customDateRangeDialog_,
    //     "dialogselect", x(this.handleDialogSelect_, this))
};
e.getCustomDateRangeDialogElem_ = function() {
    return Q(this.baseId_ + "_custom")
};
e.handleDialogSelect_ = function(a) {
    "ok" == a.key && (this.onCustomModeChange(!0), this.setValue(this.getCustomDateRangeValue_()), this.fireSelectEvent());
    this.customDateRangeDialogOpen_ = !1
};
e.getValue = function() {
    var a = this.getHiddenBox().value;
    return "all" == a ? "" : a
};
e.getStartYear = function() {
    return this.currentReposStartYear_
};
e.getStartMonth = function() {
    return this.currentReposStartMonth_
};
e.getCustomDateRangeValue_ = function() {
    var a = this.calculateMonthRange_();
    if (1 > a) return "";
    var b = this.fromPicker_.getValue();
    return (new Number(b.month + 1)).toString() + "/" + b.year + " " + a + "m"
};
e.calculateMonthRange_ = function() {
    var a = this.fromPicker_.getValue(),
        b = this.toPicker_.getValue();
    return 1 + (b.month - a.month) + 12 * (b.year - a.year)
};
e.setValue = function(a) {
    if ("" == a) this.reset();
    else {
        var b = a,
            c = void 0;
        if (!xb(this.menu_.getChildIds(), a)) try {
            var d = a.split(" "),
                f = d[0].split("/"),
                g = parseInt(f[0], 10) + parseInt(d[1].substring(0, d[1].length - 1), 10) - 1,
                d = (g - 1) % 12,
                h = parseInt(f[1], 10) + Math.floor((g - 1) / 12);
            this.fromPicker_.setMonth((new Number(f[0] - 1)).toString());
            this.fromPicker_.setYear((new Number(f[1])).toString());
            this.toPicker_.setMonth((new Number(d)).toString());
            this.toPicker_.setYear((new Number(h)).toString());
            b = "custom";
            c = this.getCustomDateRangeCaption_()
        } catch (k) {
            this.reset();
            return
        }
        this.getHiddenBox().value = a;
        ul.superClass_.setValue.call(this, b, c)
    }
};
e.getCustomDateRangeCaption_ = function() {
    return this.fromPicker_.getMonthYearForDisplay() + " - " + this.toPicker_.getMonthYearForDisplay()
};
e.reset = function() {
    this.customDateRangeDialog_.setVisible(!1);
    this.setValue("all");
    this.fromPicker_.reset();
    this.toPicker_.reset()
};
e.handleMenuAction = function(a) {
    "custom" == a.target.getId() ? (this.customDateRangeDialogOpen_ = !0, this.customDateRangeDialog_.setVisible(!0), this.getPopup().setVisible(!1)) : ul.superClass_.handleMenuAction.call(this, a)
};
e.getCustomDateRangeDialog = function() {
    return this.customDateRangeDialog_
};
e.onCustomModeChange = function(a) {
    this.updateMonthPickers_(a ? this.fromPicker_ : this.toPicker_);
    if (1 > this.calculateMonthRange_()) {
        var b = a ? this.toPicker_ : this.fromPicker_;
        a = a ? this.fromPicker_.getValue() : this.toPicker_.getValue();
        b.setMonth(a.month.toString());
        b.setYear(a.year.toString());
        this.updateMonthPickers_(b)
    }
};
e.changeReposStartDate = function(a, b) {
    // if (this.currentReposStartYear_ != a || this.currentReposStartMonth_ != b) {
    //     var c = this.getValue(),
    //         d = this.fromPicker_.getYearSelect(),
    //         f = this.toPicker_.getYearSelect(),
    //         g = this.menu_.getChildAt(0);
    //     for (g.setContent(g.getContent().replace(new RegExp(String(this.currentReposStartYear_)), String(a))); this.currentReposStartYear_ < a;) g = this.getLastYearItem_(), g.getId() == c && (c = ""), this.menu_.removeChild(g, !0), this.fromPicker_.isEarliestYearSelected() && (d.setSelectedIndex(0), c = this.getCustomDateRangeValue_()),
    //     d.removeItemAt(d.getItemCount() - 1), this.toPicker_.isEarliestYearSelected() && (f.setSelectedIndex(0), c = this.getCustomDateRangeValue_()), f.removeItemAt(f.getItemCount() - 1), this.currentReposStartYear_++;
    //     for (; this.currentReposStartYear_ > a;) {
    //         g = String(this.currentReposStartYear_);
    //         this.currentReposStartYear_--;
    //         var h = String(this.currentReposStartYear_);
    //         this.addReplacedCopyMenuItem_(this.menu_, this.getLastYearItem_(), g, h, this.getLastYearItemIndex_() + 1);
    //         var k = d.getItemAt(d.getItemCount() - 1);
    //         this.addReplacedCopyMenuItem_(d,
    //             k, g, h, d.getItemCount());
    //         this.addReplacedCopyMenuItem_(f, k, g, h, f.getItemCount())
    //     }
    //     this.setValue(c);
    //     this.currentReposStartMonth_ = b;
    //     this.updateMonthPickers_(this.fromPicker_);
    //     this.updateMonthPickers_(this.toPicker_)
    // }
};
e.getLastYearItem_ = function() {
    return this.menu_.getChildAt(this.getLastYearItemIndex_())
};
e.getLastYearItemIndex_ = function() {
    return this.menu_.getChildCount() - 3
};
e.addReplacedCopyMenuItem_ = function(a, b, c, d, f) {
    var g = b.getContent().replace(new RegExp(c), d);
    b = b.getId().replace(new RegExp(c), d);
    g = new Gh(g);
    g.setId(b);
    a.addItemAt(g, f)
};
e.findReposStartYear_ = function() {
    var a = this.fromPicker_.getYearSelect();
    return 10
};
e.updateMonthPickers_ = function(a) {
    var b = a.getMonthSelect(),
        c = 12 - b.getItemCount() + 1;
    a = a.isEarliestYearSelected() ? this.currentReposStartMonth_ : 1;
    if (c != a) {
        c += b.getSelectedIndex();
        c = Math.max(a, c) - a;
        b.getMenu().removeChildren(!0);
        for (a -= 1; 12 > a; a++) {
            var d = new Gh(this.monthLabelList_[a]);
            d.setId(this.monthIdList_[a]);
            b.addItem(d)
        }
        b.setSelectedIndex(c)
    }
};
e.findMonthLabels_ = function() {
    var a = [];
    this.fromPicker_.getMonthSelect().getMenu().forEachChild(function(b) {
        a.push(b.getContent())
    });
    return a
};
e.findMonthIds_ = function() {
    return this.fromPicker_.getMonthSelect().getMenu().getChildIds()
};
e.isCustomDateRangeDialogVisible = function() {
    return this.customDateRangeDialogOpen_
};
var tl = function(a, b) {
    this.id_ = a;
    this.monthSelect_ = this.createSelect_(this.id_ + "M", b);
    this.yearSelect_ = this.createSelect_(this.id_ + "Y", b);
    this.dateFormatter_ = new Wh("MMM yyyy")
};
e = tl.prototype;
e.createSelect_ = function(a, b) {
    var c = new Lk("", null, Kk.getInstance());
    c.decorate(Q(a));
    cl(c.getMenu());
    // c.getMenu().getElement().style.zIndex = "2006";
    b && N(c, "change", b);
    return c
};
e.getMonthSelect = function() {
    return this.monthSelect_
};
e.getYearSelect = function() {
    return this.yearSelect_
};
e.getValue = function() {
    var a = {};
    a.month = 10;
    a.year =10;
    return a
};
e.isEarliestYearSelected = function() {
    return this.yearSelect_.getSelectedIndex() == this.yearSelect_.getItemCount() - 1
};
e.getMonthYearForDisplay = function() {
    var a;
    a = this.yearSelect_.getSelectedItem().getId();
    isFinite(a) && (a = String(a));
    a = w(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
    a = new Th(a, this.monthSelect_.getSelectedIndex(), 1);
    return this.dateFormatter_.format(a)
};
e.setMonth = function(a) {
    this.monthSelect_.setSelectedItem(this.monthSelect_.getMenu().getChild(a))
};
e.setYear = function(a) {
    this.yearSelect_.setSelectedItem(this.yearSelect_.getMenu().getChild(a))
};
e.reset = function() {
    this.yearSelect_.setSelectedIndex(0);
    this.monthSelect_.setSelectedIndex(0)
};
var vl = function(a, b, c) {
    rl.call(this, a, "gprop", b, "google");
    c && this.setValue(c)
};
z(vl, rl);
v("trends.Property", vl, void 0);
vl.prototype.getValue = function() {
    var a = this.getHiddenBox().value;
    return "google" == a ? "" : a
};
vl.prototype.setValue = function(a) {
    "" == a ? this.reset() : (this.getHiddenBox().value = a, rl.prototype.setValue.call(this, a))
};
vl.prototype.reset = function() {
    this.setValue("google")
};
var wl = function(a) {
    this.createSearchBarTooltip_(a);
    this.registerSearchBarEvents_()
};
v("trends.SearchBar", wl, void 0);
var xl = function() {
    var a = da("gbar");
    return a && a.qfgq ? a.qfgq() : null
};
e = wl.prototype;
e.registerSearchBarEvents_ = function() {
    var a = new gk(document);
    a.registerShortcut("/", "/");
    N(a, "shortcut", x(this.handleKeyboardShortcutEvent_, this));
    if (a = xl()) N(a, "focus", x(this.showTooltipIfSearchBoxIsEmpty_, this)), N(a, "input", x(this.showTooltipIfSearchBoxIsEmpty_, this)), N(a, "keydown", x(this.showTooltipIfSearchBoxIsEmpty_, this)), N(window.top, "DOMContentLoaded", x(this.resizeDropdownStyle_, this)), N(window, "resize", x(this.resizeDropdownStyle_, this))
};
e.handleKeyboardShortcutEvent_ = function(a) {
    if ("/" == a.identifier && (a = xl())) {
        var b = window.document.body,
            c = ve(a, b, void 0);
        b.scrollLeft = c.x;
        b.scrollTop = c.y;
        a.focus()
    }
};
e.createSearchBarTooltip_ = function(a) {
    this.tooltip_ = new Bj;
    this.tooltip_.setAnchorElement(xl());
    this.tooltip_.setAutoReposition(!0);
    this.tooltip_.setContent(Q("trends-search-bar-tooltip"));
    this.tooltip_.setPosition(1, a ? 0 : 1, 0, -8);
    this.tooltip_.showCloseButton(!1);
    this.tooltip_.addClassName("trends-search-bar-bubble");
    this.tooltip_.render()
};
e.showTooltipIfSearchBoxIsEmpty_ = function() {
    var a = xl();
    a && this.tooltip_.setVisible("" == a.value)
};
e.resizeDropdownStyle_ = function() {
    var a = De(Q("gbqfqw")).width,
        b = pd("dropdown-menu");
    Ae(b, a - 1)
};
var yl = null;
v("trends.PageTracker.init", function(a, b) {
    (yl = a) && yl._setCookiePath(b)
}, void 0);
v("trends.PageTracker.trackPageView", function() {
    yl && yl._trackPageview()
}, void 0);
v("trends.PageTracker.trackLoggedIn", function(a) {
    yl && a && yl._setCustomVar(1, "Logged In", "loggedin", 2)
}, void 0);
v("trends.PageTracker.trackSoph", function(a) {
    if (yl) {
        a = a.replace(/\./g, "_");
        var b = [],
            c;
        t: {
            try {
                if (yl._getCustomVar) {
                    c = yl._getCustomVar(2).value;
                    break t
                }
                if (yl._getVisitorCustomVar) {
                    c = yl._getVisitorCustomVar(2);
                    break t
                }
            } catch (d) {}
            c = void 0
        }
        c && (b = c.split("."));
        0 > pb(b, a) && (b.push(a), b.sort(), yl._setCustomVar(2, "soph", b.join("."), 1))
    }
}, void 0);
v("trends.PageTracker.trackSrch", function(a, b) {
    yl && yl._setCustomVar(3, "Search Type", b + (a ? "." + a : ""), 3)
}, void 0);
var zl = function(a, b) {
    yl && yl._trackEvent("click", a, b)
};
v("trends.PageTracker.analyticsTrackEvent", zl, void 0);
var Al = function() {
    U.call(this)
};
z(Al, U);
var Bl = null,
    Cl = function() {
        Bl || (Bl = new Al);
        return Bl
    };
v("trends.CategorySuggest.onClick", function(a) {
    zl("Vertical Recomendation", a);
    Uc(Cl(), "click")
}, void 0);
var Dl = function(a, b, c) {
    gh.call(this, a, "cat", b, "0");
    c ? this.setValue(c) : this.reset();
    N(Cl(), "click", x(this.toggleTree, this))
};
z(Dl, gh);
v("trends.Category", Dl, void 0);
var El = null;
Dl.setTreeData = function(a) {
    El = a
};
Dl.setCleardotImage = function(a) {
    xg.cleardotPath = a
};
Dl.prototype.getTreeData = function() {
    return El
};
var Fl = {
    cat: function(a, b, c) {
        return new Dl(a, b, c)
    },
    q: function(a, b) {
        return new Gj(a, b)
    },
    geo: function(a, b, c) {
        return new Tk(a, b, c)
    },
    date: function(a, b, c) {
        return new ul(a, b, c)
    },
    gprop: function(a, b, c) {
        return new vl(a, b, c)
    }
};
var Gl = function(a, b, c, d) {
    $e.call(this, b, a);
    this.pickersType = a;
    this.pickersShown = 1;
    this.pickers_ = [];
    for (a = 0; 5 > a; a++) this.pickers_[a] = Fl[this.pickersType](this.getPickerId_(a), c, void 0), N(this.pickers_[a], "select", x(this.handlePickerSelect_, this));
    for (a = this.pickersShown; 5 > a; a++) this.getRow_(a).style.display = "none";
    5 == this.pickersShown && (this.getAddAnotherLink_().style.display = "none");
    d && this.setValue(d);
    this.setFirstRemoveButtonVisibility_()
};
Gl.inherits($e);
e = Gl.prototype;
e.handlePickerSelect_ = function() {
    this.fireSelectEvent()
};
e.setFirstRemoveButtonVisibility_ = function() {
    this.getFirstRemoveButton().style.visibility = 1 == this.pickersShown ? "hidden" : ""
};
e.getPickerId_ = function(a) {
    return this.baseId_ + "P" + a
};
e.getRow_ = function(a) {
    return document.getElementById(this.baseId_ + "R" + a)
};
e.getAddAnotherLink_ = function() {
    return document.getElementById(this.baseId_ + "AL")
};
e.getFirstRemoveButton = function() {
    return document.getElementById(this.baseId_ + "RP0")
};
e.addPicker = function(a) {
    this.pickersShown++;
    5 == this.pickersShown && (this.getAddAnotherLink_().style.display = "none");
    this.getRow_(this.pickersShown - 1).style.display = "";
    a && this.giveFocusToLastViewablePicker();
    this.setFirstRemoveButtonVisibility_()
};
Gl.prototype.addPicker = Gl.prototype.addPicker;
Gl.prototype.giveFocusToLastViewablePicker = function() {
    this.pickers_[this.pickersShown - 1].focus()
};
Gl.prototype.removePicker = function(a, b) {
    if (1 == this.pickersShown) this.pickers_[0].reset();
    else {
        for (var c = a; c + 1 < this.pickersShown; c++) this.pickers_[c].setValue(this.pickers_[c + 1].getValue());
        this.pickersShown--;
        this.pickers_[this.pickersShown].reset();
        this.getRow_(this.pickersShown).style.display = "none";
        this.getAddAnotherLink_().style.display = "";
        this.setFirstRemoveButtonVisibility_();
        b || this.fireSelectEvent()
    }
};
Gl.prototype.removePicker = Gl.prototype.removePicker;
e = Gl.prototype;
e.setInnerValue = function(a, b) {
    this.pickers_[a].setValue(b)
};
e.setValue = function(a, b) {
    var c = a.split(","),
        d;
    for (d = 0; d < c.length && 5 > d; d++) d == this.pickersShown && this.addPicker(!1), this.setInnerValue(d, b ? Ha(c[d]) : c[d]);
    for (; this.pickersShown > c.length;) this.removePicker(c.length, !0)
};
e.getInnerValue = function(a) {
    return this.pickers_[a].getValue()
};
e.getValue = function() {
    for (var a = [], b = 0; b < this.pickersShown; b++) {
        var c = this.pickers_[b].getValue();
        a.push(c)
    }
    return a.join(", ")
};
e.reset = function() {
    for (var a = 0; a < this.pickers_.length; a++) this.pickers_[a].reset();
    for (; 1 < this.pickersShown;) this.removePicker(0)
};
e.setLabel = function(a) {
    this.pickers_[0].setLabel(a)
};
e.performFuncOnPickers = function(a) {
    for (var b = 0; b < this.pickers_.length; b++) a(this.pickers_[b])
};
e.getPicker = function(a) {
    return this.pickers_[a]
};
Gl.prototype.getPicker = Gl.prototype.getPicker;
Gl.prototype.enableFireSelectEvent = function(a) {
    Gl.superClass_.enableFireSelectEvent.call(this, a);
    for (var b = 0; b < this.pickers_.length; b++) this.pickers_[b].enableFireSelectEvent(a)
};
var Jl = function(a, b, c, d, f, g) {
    this.missingComponents_ = {};
    this.currentParams_ = a;
    this.pollingFrequencyMs_ = b;
    this.useJsonResponse_ = !! d;
    this.ajaxSuccessfullCallback_ = f || fl;
    this.baseAjaxUrl_ = g || Hl;
    c && this.addMissingComponents(c);
    Il[Il.length] = this;
    X(this.sendPollRequest_, b * (0.5 + Math.random()), this)
}, Il = [],
    Kl = function() {
        for (var a = 0; a < Il.length; a++) Il[a].invalidate();
        Il = []
    }, Hl = "fetchComponent";
e = Jl.prototype;
e.sendPollRequest_ = function() {
    if (this.hasMissingComponents()) {
        var a = this.getSomeMissingDivId_(),
            b = this;
        qi(this.createAjaxUrl_(a, !0), function(c) {
            c.target.isSuccess() && b.consumeNewComponent_(a, b.useJsonResponse_ ? c.target.getResponseJson() : Ha(c.target.getResponseText()));
            X(b.sendPollRequest_, b.pollingFrequencyMs_, b)
        }, "GET", void 0, void 0, 2E4)
    }
};
e.getComponentForDiv = function(a) {
    if (this.isMissingComponent_(a)) {
        var b = this;
        qi(this.createAjaxUrl_(a, !1), function(c) {
            c.target.isSuccess() && b.consumeNewComponent_(a, b.useJsonResponse_ ? c.target.getResponseJson() : Ha(c.target.getResponseText()))
        }, "GET", void 0, void 0, 2E4)
    }
};
e.consumeNewComponent_ = function(a, b) {
    this.isMissingComponent_(a) && (this.removeMissingComponent_(a), this.ajaxSuccessfullCallback_(Q(a), b))
};
e.getSomeMissingDivId_ = function() {
    for (var a in this.missingComponents_) return a;
    return null
};
e.createAjaxUrl_ = function(a, b) {
    var c = this.baseAjaxUrl_ + "?" + this.currentParams_;
    b && (c = c + (Ya(c, "?") ? "&" : "?") + "lp=1");
    return c = c + (Ya(c, "?") ? "&" : "?") + "cid=" + this.missingComponents_[a]
};
e.removeMissingComponent_ = function(a) {
    this.missingComponents_[a] && delete this.missingComponents_[a]
};
e.isMissingComponent_ = function(a) {
    return this.missingComponents_ ? this.missingComponents_[a] : !1
};
e.addMissingComponents = function(a) {
    for (var b in a) this.missingComponents_[b] = a[b]
};
e.hasMissingComponents = function() {
    for (var a in this.missingComponents_) return !0;
    return !1
};
e.invalidate = function() {
    this.missingComponents_ = null
};
var Ll = function(a) {
    U.call(this);
    this.soyTemplate = a
};
z(Ll, U);
e = Ll.prototype;
e.renderDialog = function() {
    throw Error("renderDialog must be overridden by inheriting classes.");
};
e.updateSubscriptionButtons = function() {
    throw Error("updateSubscriptionButtons must be overridden by inheriting classes.");
};
e.setSubscribeButtonEnabled = function() {
    throw Error("setSubscribeButtonEnabled must be overridden by inheriting classes.");
};
e.getSubscribeMessage = function() {
    return "Subscribe"
};
e.getUnsubscribeMessage = function() {
    return "Unsubscribe"
};
e.getUpdateMessage = function() {
    return "Update"
};
e.getElement = function() {
    throw Error("getElement must be overridden by inheriting classes.");
};
var Ml = function(a) {
    Ll.call(this, a);
    this.dialogElement_ = Q("mobile-subscription-dialog");
    this.layoutElement_ = od("mobile-layout")[0]
};
z(Ml, Ll);
e = Ml.prototype;
e.renderDialog = function(a) {
    a = Vi(this.soyTemplate, a);
    Ad(this.dialogElement_);
    zd(this.dialogElement_, a);
    N(this.getSubscribeButtonElement_(), "click", x(this.onSubscribeClicked_, this));
    N(Q("mobile-subscription-cancel-button"), "click", x(this.onCancelClicked_, this));
    N(Q("mobile-subscription-unsubscribe-button"), "click", x(this.onUnsubscribeClicked_, this));
    this.setDialogVisibility_(!0);
    document.body.scrollTop = document.documentElement.scrollTop = 0
};
e.onCancelClicked_ = function() {
    this.setDialogVisibility_(!1)
};
e.onSubscribeClicked_ = function() {
    this.dispatchEvent("ok_button_clicked");
    this.setDialogVisibility_(!1)
};
e.onUnsubscribeClicked_ = function() {
    this.dispatchEvent("unsubscribe_button_clicked");
    this.setDialogVisibility_(!1)
};
e.setDialogVisibility_ = function(a) {
    a ? (gd(this.dialogElement_, "mobile-subscription-dialog-visible"), id(this.dialogElement_, "mobile-subscription-dialog-invisible")) : (gd(this.dialogElement_, "mobile-subscription-dialog-invisible"), id(this.dialogElement_, "mobile-subscription-dialog-visible"));
    S(this.layoutElement_, !a)
};
e.updateSubscriptionButtons = function(a, b) {
    var c = Q("mobile-subscription-unsubscribe-button");
    c && this.setVisibility_(c, a);
    b ? Jd(Q("mobile-subscription-subscribe-button-text"), a ? this.getUpdateMessage() : this.getSubscribeMessage()) : this.setVisibility_(Q("mobile-subscription-subscribe-button"), !a)
};
e.setSubscribeButtonEnabled = function(a) {
    this.setVisibility_(this.getSubscribeButtonElement_(), a)
};
e.getSubscribeButtonElement_ = function() {
    return Q("mobile-subscription-subscribe-button")
};
e.getElement = function() {
    return this.dialogElement_
};
e.setVisibility_ = function(a, b) {
    b ? id(a, "mobile-invisible") : gd(a, "mobile-invisible")
};
var Nl = function(a) {
    Ll.call(this, a);
    this.dialog_ = this.createDialog_()
};
z(Nl, Ll);
e = Nl.prototype;
e.createDialog_ = function() {
    var a = new rg,
        b = new ig;
    b.set("ok", this.getSubscribeMessage(), !0);
    b.set("cancel", "Cancel", !1, !0);
    b.set("no", this.getUnsubscribeMessage());
    a.setButtonSet(b);
    a.setHasTitleCloseButton(!1);
    he(a.getDialogElement(), "zIndex", 1005);
    a.init();
    gd(b.getButton("ok"), "goog-buttonset-action");
    gd(b.getButton("no"), "unsubscribe-button");
    he(a.getTitleElement(), "margin", "0");
    N(a, "dialogselect", x(this.onSubscriptionDialogButton_, this));
    return a
};
e.onSubscriptionDialogButton_ = function(a) {
    "no" == a.key ? this.dispatchEvent("unsubscribe_button_clicked") : "ok" == a.key && this.dispatchEvent("ok_button_clicked")
};
e.renderDialog = function(a) {
    a = Vi(this.soyTemplate, a);
    var b = this.dialog_.getContentElement();
    Ad(b);
    b.appendChild(a);
    this.dialog_.setVisible(!0)
};
e.updateSubscriptionButtons = function(a, b) {
    he(this.dialog_.getButtonSet().getButton("no"), "visibility", a ? "visible" : "hidden");
    b ? Jd(this.dialog_.getButtonSet().getButton("ok"), a ? this.getUpdateMessage() : this.getSubscribeMessage()) : this.setSubscribeButtonEnabled(!a)
};
e.setSubscribeButtonEnabled = function(a) {
    this.dialog_.getButtonSet().setButtonEnabled("ok", a)
};
e.getElement = function() {
    return this.dialog_.getContentElement()
};
var Ol = function(a, b, c, d) {
    U.call(this);
    this.subscriptionDialog_ = d ? new Ml(c) : new Nl(c);
    N(this.subscriptionDialog_, "unsubscribe_button_clicked", x(this.onUnsubscribeButtonClicked_, this));
    N(this.subscriptionDialog_, "ok_button_clicked", x(this.onOkButtonClicked_, this));
    this.butterBar_ = a;
    this.xsrfToken_ = b;
    this.isSubscribed_ = null;
    this.isMobile = d
};
z(Ol, U);
e = Ol.prototype;
e.sendOpenRequest = function() {
    var a = this.getSelectedParamsMap();
    a.set("sm", "r");
    a = Ci(a).toString();
    this.sendAjaxRequest(a, x(this.getSubscriptionsCallback, this))
};
e.saveSubscriptionCallback_ = function() {
    this.dispatchEvent("afterajax");
    ml(this.butterBar_, this.isSubscribed_ ? "Subscription updated successfully." : "Subscription added successfully.");
    gl(this.butterBar_);
    this.dispatchEvent("change")
};
e.getSubscriptionsCallback = function(a) {
    this.dispatchEvent("afterajax");
    a = a.target.getResponseJson();
    this.subscriptionDialog_.renderDialog(a);
    this.isSubscribed_ = this.checkIfSubscribed(a);
    this.updateSubscriptionButtons(this.isSubscribed_)
};
e.getDialogContentElement = function() {
    return this.subscriptionDialog_.getElement()
};
e.checkIfSubscribed = function(a) {
    return a.isSubscribed
};
e.updateSubscriptionButtons = function(a) {
    this.subscriptionDialog_.updateSubscriptionButtons(a, this.isUpdateable())
};
e.isUpdateable = function() {
    return !0
};
e.setSubscribeButtonEnabled = function(a) {
    this.subscriptionDialog_.setSubscribeButtonEnabled(a)
};
e.deleteSubscriptionCallback_ = function() {
    this.dispatchEvent("afterajax");
    ml(this.butterBar_, "Subscription removed successfully.");
    gl(this.butterBar_);
    this.dispatchEvent("change")
};
e.sendAjaxRequest = function(a, b) {
    this.dispatchEvent("beforeajax");
    qi(this.getSubscriptionUri(), b, "POST", a, void 0, 1E4)
};
e.getSubscriptionUri = function() {
    throw Error("Must override");
};
e.sendSaveRequest_ = function() {
    var a = this.getSelectedParamsMap();
    a.set("sm", "w");
    a = Ci(a).toString();
    this.sendAjaxRequest(a, x(this.saveSubscriptionCallback_, this))
};
e.sendEmptyRequest = function() {
    var a = this.getBaseParamsMap_();
    a.set("sm", "e");
    a = Ci(a).toString();
    this.sendAjaxRequest(a, x(this.getSubscriptionsCallback, this))
};
e.getBaseParamsMap_ = function() {
    var a = new ag;
    a.set("ajax", 1);
    a.set("xsrf", this.xsrfToken_);
    return a
};
e.getSelectedParamsMap = function() {
    return this.getBaseParamsMap_()
};
e.onUnsubscribeButtonClicked_ = function() {
    this.sendDeleteRequest()
};
e.onOkButtonClicked_ = function() {
    this.sendSaveRequest_()
};
e.sendDeleteRequest = function() {
    var a = this.getSelectedParamsMap();
    a.set("sm", "d");
    a = Ci(a).toString();
    this.sendAjaxRequest(a, x(this.deleteSubscriptionCallback_, this))
};
/*
 Copyright (c) 2008-2013, GreenSock. All rights reserved.
 This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 Club GreenSock members, the software agreement that was issued with your membership.

 @author: Jack Doyle, jack@greensock.com
*/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = [].slice,
            f = function(a, b, d) {
                c.call(this, a, b, d);
                this._cycle = 0;
                this._yoyo = !0 === this.vars.yoyo;
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._dirty = !0;
                this.render = f.prototype.render
            }, g = 1E-10,
            h = c._internals.isSelector,
            k = c._internals.isArray,
            m = f.prototype = c.to({}, 0.1, {}),
            p = [];
        f.version = "1.11.0";
        m.constructor = f;
        m.kill()._gc = !1;
        f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf;
        f.getTweensOf = c.getTweensOf;
        f.ticker = c.ticker;
        m.invalidate = function() {
            this._yoyo = !0 === this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(!0);
            return c.prototype.invalidate.call(this)
        };
        m.updateTo = function(a, b) {
            var d = this.ratio,
                f;
            b && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this,
                this._startTime - this._delay));
            for (f in a) this.vars[f] = a[f];
            if (this._initted)
                if (b) this._initted = !1;
                else if (this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), 0.998 < this._time / this._duration) d = this._time, this.render(0, !0, !1), this._initted = !1, this.render(d, !0, !1);
            else if (0 < this._time) {
                this._initted = !1;
                this._init();
                d = 1 / (1 - d);
                f = this._firstPT;
                for (var g; f;) g = f.s + f.c, f.c *= d, f.s = g - f.c, f = f._next
            }
            return this
        };
        m.render = function(a, b, c) {
            this._initted || 0 === this._duration && this.vars.repeat &&
                this.invalidate();
            var d = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._time,
                h = this._totalTime,
                k = this._cycle,
                s = this._duration,
                m, n, l, oa, C;
            if (a >= d) this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (this._cycle & 1) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = s, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (m = !0, n = "onComplete"), 0 === s && (C = this._rawPrevTime, (0 === a || 0 > C || C === g) && C !== a && (c = !0, C > g && (n = "onReverseComplete")),
                this._rawPrevTime = C = !b || a ? a : g);
            else if (1E-7 > a) {
                this._totalTime = this._time = this._cycle = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (0 !== h || 0 === s && this._rawPrevTime > g) n = "onReverseComplete", m = this._reversed;
                0 > a ? (this._active = !1, 0 === s && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = C = !b || a ? a : g)) : this._initted || (c = !0)
            } else if (this._totalTime = this._time = a, 0 !== this._repeat && (d = s + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--,
                this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (this._cycle & 1) && (this._time = s - this._time), this._time > s ? this._time = s : 0 > this._time && (this._time = 0)), this._easeType) {
                d = this._time / s;
                l = this._easeType;
                oa = this._easePower;
                if (1 === l || 3 === l && 0.5 <= d) d = 1 - d;
                3 === l && (d *= 2);
                1 === oa ? d *= d : 2 === oa ? d *= d * d : 3 === oa ? d *= d * d * d : 4 === oa && (d *= d * d * d * d);
                this.ratio = 1 === l ? 1 - d : 2 === l ? d : 0.5 > this._time / s ? d / 2 : 1 - d / 2
            } else this.ratio = this._ease.getRatio(this._time / s); if (f !== this._time || c || k !== this._cycle) {
                if (!this._initted) {
                    this._init();
                    if (!this._initted || this._gc) return;
                    this._time && !m ? this.ratio = this._ease.getRatio(this._time / s) : m && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }!this._active && !this._paused && this._time !== f && 0 <= a && (this._active = !0);
                0 === h && (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : n || (n = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== s || b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || p));
                for (f = this._firstPT; f;) {
                    if (f.f) f.t[f.p](f.c * this.ratio +
                        f.s);
                    else f.t[f.p] = f.c * this.ratio + f.s;
                    f = f._next
                }
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p));
                this._cycle !== k && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || p));
                n && !this._gc && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), m && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || p), 0 === s && this._rawPrevTime !== C && (this._rawPrevTime = 0))
            } else h !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p))
        };
        f.to = function(a, b, c) {
            return new f(a, b, c)
        };
        f.from = function(a, b, c) {
            c.runBackwards = !0;
            c.immediateRender = !1 != c.immediateRender;
            return new f(a, b, c)
        };
        f.fromTo = function(a, b, c, d) {
            d.startAt = c;
            d.immediateRender = !1 != d.immediateRender && !1 != c.immediateRender;
            return new f(a, b, d)
        };
        f.staggerTo = f.allTo = function(a, b, g, r, s, m, n) {
            r = r || 0;
            var l = g.delay || 0,
                Xa = [],
                ea = function() {
                    g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments);
                    s.apply(n || this, m || p)
                }, H, oa, C, W;
            k(a) || ("string" === typeof a && (a = c.selector(a) || a), h(a) && (a = d.call(a, 0)));
            H = a.length;
            for (C = 0; C < H; C++) {
                oa = {};
                for (W in g) oa[W] = g[W];
                oa.delay = l;
                C === H - 1 && s && (oa.onComplete = ea);
                Xa[C] = new f(a[C], b, oa);
                l += r
            }
            return Xa
        };
        f.staggerFrom = f.allFrom = function(a, b, c, d, g, h, k) {
            c.runBackwards = !0;
            c.immediateRender = !1 != c.immediateRender;
            return f.staggerTo(a, b, c, d, g, h, k)
        };
        f.staggerFromTo = f.allFromTo = function(a, b, c, d, g, h, k, s) {
            d.startAt = c;
            d.immediateRender = !1 != d.immediateRender && !1 != c.immediateRender;
            return f.staggerTo(a, b, d, g, h, k, s)
        };
        f.delayedCall = function(a, b, c, d, g) {
            return new f(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: g,
                overwrite: 0
            })
        };
        f.set = function(a, b) {
            return new f(a,
                0, b)
        };
        f.isTweening = function(a) {
            return 0 < c.getTweensOf(a, !0).length
        };
        var l = function(a, b) {
            for (var d = [], f = 0, g = a._first; g;) g instanceof c ? d[f++] = g : (b && (d[f++] = g), d = d.concat(l(g, b)), f = d.length), g = g._next;
            return d
        }, n = f.getAllTweens = function(b) {
                return l(a._rootTimeline, b).concat(l(a._rootFramesTimeline, b))
            };
        f.killAll = function(a, c, d, f) {
            null == c && (c = !0);
            null == d && (d = !0);
            var g = n(!1 != f),
                h = g.length;
            f = c && d && f;
            var k, s, m;
            for (m = 0; m < h; m++)
                if (s = g[m], f || s instanceof b || (k = s.target === s.vars.onComplete) && d || c && !k) a ? s.totalTime(s.totalDuration()) :
                    s._enabled(!1, !1)
        };
        f.killChildTweensOf = function(a, b) {
            if (null != a) {
                var g = c._tweenLookup,
                    r, s, m;
                "string" === typeof a && (a = c.selector(a) || a);
                h(a) && (a = d(a, 0));
                if (k(a))
                    for (g = a.length; - 1 < --g;) f.killChildTweensOf(a[g], b);
                else {
                    r = [];
                    for (m in g)
                        for (s = g[m].target.parentNode; s;) s === a && (r = r.concat(g[m].tweens)), s = s.parentNode;
                    s = r.length;
                    for (g = 0; g < s; g++) b && r[g].totalTime(r[g].totalDuration()), r[g]._enabled(!1, !1)
                }
            }
        };
        var s = function(a, c, d, f) {
            c = !1 !== c;
            d = !1 !== d;
            f = !1 !== f;
            var g = n(f);
            f = c && d && f;
            for (var h = g.length, k, s; - 1 < --h;) s =
                g[h], (f || s instanceof b || (k = s.target === s.vars.onComplete) && d || c && !k) && s.paused(a)
        };
        f.pauseAll = function(a, b, c) {
            s(!0, a, b, c)
        };
        f.resumeAll = function(a, b, c) {
            s(!1, a, b, c)
        };
        f.globalTimeScale = function(b) {
            var d = a._rootTimeline,
                f = c.ticker.time;
            if (!arguments.length) return d._timeScale;
            b = b || g;
            d._startTime = f - (f - d._startTime) * d._timeScale / b;
            d = a._rootFramesTimeline;
            f = c.ticker.frame;
            d._startTime = f - (f - d._startTime) * d._timeScale / b;
            return d._timeScale = a._rootTimeline._timeScale = b
        };
        m.progress = function(a) {
            return arguments.length ?
                this.totalTime(this.duration() * (this._yoyo && 0 !== (this._cycle & 1) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        };
        m.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        };
        m.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            a > this._duration && (a = this._duration);
            this._yoyo && 0 !== (this._cycle & 1) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) :
                0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay));
            return this.totalTime(a, b)
        };
        m.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration
        };
        m.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        };
        m.repeat = function(a) {
            if (!arguments.length) return this._repeat;
            this._repeat = a;
            return this._uncache(!0)
        };
        m.repeatDelay = function(a) {
            if (!arguments.length) return this._repeatDelay;
            this._repeatDelay = a;
            return this._uncache(!0)
        };
        m.yoyo = function(a) {
            if (!arguments.length) return this._yoyo;
            this._yoyo = a;
            return this
        };
        return f
    }, !0);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
            b.call(this, a);
            this._labels = {};
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
            this._sortChildren = !0;
            this._onUpdate = this.vars.onUpdate;
            a = this.vars;
            var c, d;
            for (d in a) c = a[d], h(c) && -1 !== c.join("").indexOf("{self}") && (a[d] = this._swapSelfInParams(c));
            h(a.tweens) && this.add(a.tweens, 0, a.align, a.stagger)
        }, f = 1E-10,
            g = c._internals.isSelector,
            h = c._internals.isArray,
            k = [],
            m = function(a) {
                var b = {}, c;
                for (c in a) b[c] = a[c];
                return b
            }, p = function(a, b, c, d) {
                a._timeline.pause(a._startTime);
                b && b.apply(d || a._timeline, c || k)
            }, l = k.slice,
            n = d.prototype =
                new b;
        d.version = "1.11.0";
        n.constructor = d;
        n.kill()._gc = !1;
        n.to = function(a, b, d, f) {
            return b ? this.add(new c(a, b, d), f) : this.set(a, d, f)
        };
        n.from = function(a, b, d, f) {
            return this.add(c.from(a, b, d), f)
        };
        n.fromTo = function(a, b, d, f, g) {
            return b ? this.add(c.fromTo(a, b, d, f), g) : this.set(a, f, g)
        };
        n.staggerTo = function(a, b, f, h, r, k, n, p) {
            k = new d({
                onComplete: k,
                onCompleteParams: n,
                onCompleteScope: p
            });
            "string" === typeof a && (a = c.selector(a) || a);
            g(a) && (a = l.call(a, 0));
            h = h || 0;
            for (n = 0; n < a.length; n++) f.startAt && (f.startAt = m(f.startAt)),
            k.to(a[n], b, m(f), n * h);
            return this.add(k, r)
        };
        n.staggerFrom = function(a, b, c, d, f, g, h, k) {
            c.immediateRender = !1 != c.immediateRender;
            c.runBackwards = !0;
            return this.staggerTo(a, b, c, d, f, g, h, k)
        };
        n.staggerFromTo = function(a, b, c, d, f, g, h, k, m) {
            d.startAt = c;
            d.immediateRender = !1 != d.immediateRender && !1 != c.immediateRender;
            return this.staggerTo(a, b, d, f, g, h, k, m)
        };
        n.call = function(a, b, d, f) {
            return this.add(c.delayedCall(0, a, b, d), f)
        };
        n.set = function(a, b, d) {
            d = this._parseTimeOrLabel(d, 0, !0);
            null == b.immediateRender && (b.immediateRender =
                d === this._time && !this._paused);
            return this.add(new c(a, 0, b), d)
        };
        d.exportRoot = function(a, b) {
            a = a || {};
            null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var f = new d(a),
                g = f._timeline,
                r, h;
            null == b && (b = !0);
            g._remove(f, !0);
            f._startTime = 0;
            f._rawPrevTime = f._time = f._totalTime = g._time;
            for (r = g._first; r;) h = r._next, b && r instanceof c && r.target === r.vars.onComplete || f.add(r, r._startTime - r._delay), r = h;
            g.add(f, 0);
            return f
        };
        n.add = function(f, g, k, m) {
            var r, n, l;
            "number" !== typeof g && (g = this._parseTimeOrLabel(g, 0, !0, f));
            if (!(f instanceof a)) {
                if (f instanceof Array || f && f.push && h(f)) {
                    k = k || "normal";
                    m = m || 0;
                    r = f.length;
                    for (n = 0; n < r; n++) h(l = f[n]) && (l = new d({
                        tweens: l
                    })), this.add(l, g), "string" !== typeof l && "function" !== typeof l && ("sequence" === k ? g = l._startTime + l.totalDuration() / l._timeScale : "start" === k && (l._startTime -= l.delay())), g += m;
                    return this._uncache(!0)
                }
                if ("string" === typeof f) return this.addLabel(f, g);
                if ("function" === typeof f) f = c.delayedCall(0, f);
                else throw "Cannot add " + f + " into the timeline; it is not a tween, timeline, function, or string.";
            }
            b.prototype.add.call(this, f, g);
            if (this._gc && !this._paused && this._duration < this.duration())
                for (k = this, f = k.rawTime() > f._startTime; k._gc && k._timeline;) k._timeline.smoothChildTiming && f ? k.totalTime(k._totalTime, !0) : k._enabled(!0, !1), k = k._timeline;
            return this
        };
        n.remove = function(b) {
            if (b instanceof a) return this._remove(b, !1);
            if (b instanceof Array || b && b.push && h(b)) {
                for (var c = b.length; - 1 < --c;) this.remove(b[c]);
                return this
            }
            return "string" === typeof b ? this.removeLabel(b) : this.kill(null, b)
        };
        n._remove = function(a,
            c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0;
            return this
        };
        n.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        };
        n.insert = n.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        };
        n.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        };
        n.addLabel = function(a, b) {
            this._labels[a] =
                this._parseTimeOrLabel(b);
            return this
        };
        n.addPause = function(a, b, c, d) {
            return this.call(p, ["{self}", b, c, d], this, a)
        };
        n.removeLabel = function(a) {
            delete this._labels[a];
            return this
        };
        n.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1
        };
        n._parseTimeOrLabel = function(b, c, d, f) {
            var g;
            if (f instanceof a && f.timeline === this) this.remove(f);
            else if (f && (f instanceof Array || f.push && h(f)))
                for (g = f.length; - 1 < --g;) f[g] instanceof a && f[g].timeline === this && this.remove(f[g]);
            if ("string" === typeof c) return this._parseTimeOrLabel(c,
                d && "number" === typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            c = c || 0;
            if ("string" !== typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
            else {
                g = b.indexOf("=");
                if (-1 === g) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1));
                b = 1 < g ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        };
        n.seek = function(a, b) {
            return this.totalTime("number" === typeof a ? a : this._parseTimeOrLabel(a), !1 !== b)
        };
        n.stop = function() {
            return this.paused(!0)
        };
        n.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        };
        n.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        };
        n.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d = this._dirty ? this.totalDuration() : this._totalDuration,
                g = this._time,
                h = this._startTime,
                m = this._timeScale,
                n = this._paused,
                l, p, ea, H;
            if (a >= d) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (p = !0, H = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || this._rawPrevTime ===
                f) && this._rawPrevTime !== a && this._first && (l = !0, this._rawPrevTime > f && (H = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a ? a : f, a = d + 1E-6;
            else if (1E-7 > a) {
                this._totalTime = this._time = 0;
                if (0 !== g || 0 === this._duration && (this._rawPrevTime > f || 0 > a && 0 <= this._rawPrevTime)) H = "onReverseComplete", p = this._reversed;
                0 > a ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && this._first && (l = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a ? a : f, a = 0, this._initted || (l = !0))
            } else this._totalTime =
                this._time = this._rawPrevTime = a; if (this._time !== g && this._first || c || l) {
                this._initted || (this._initted = !0);
                !this._active && !this._paused && this._time !== g && 0 < a && (this._active = !0);
                0 === g && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || k));
                if (this._time >= g)
                    for (l = this._first; l;) {
                        ea = l._next;
                        if (this._paused && !n) break;
                        else if (l._active || l._startTime <= this._time && !l._paused && !l._gc) l._reversed ? l.render((l._dirty ? l.totalDuration() : l._totalDuration) -
                            (a - l._startTime) * l._timeScale, b, c) : l.render((a - l._startTime) * l._timeScale, b, c);
                        l = ea
                    } else
                        for (l = this._last; l;) {
                            ea = l._prev;
                            if (this._paused && !n) break;
                            else if (l._active || l._startTime <= g && !l._paused && !l._gc) l._reversed ? l.render((l._dirty ? l.totalDuration() : l._totalDuration) - (a - l._startTime) * l._timeScale, b, c) : l.render((a - l._startTime) * l._timeScale, b, c);
                            l = ea
                        }
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || k));
                !H || this._gc || h !== this._startTime && m === this._timeScale || !(0 === this._time || d >= this.totalDuration()) || (p && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[H] && this.vars[H].apply(this.vars[H + "Scope"] || this, this.vars[H + "Params"] || k))
            }
        };
        n._hasPausedChild = function() {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next
            }
            return !1
        };
        n.getChildren = function(a, b, d, f) {
            f = f || -9999999999;
            for (var g = [], h = this._first, k = 0; h;) h._startTime < f || (h instanceof c ? !1 !== b && (g[k++] = h) : (!1 !== d && (g[k++] = h), !1 !== a && (g = g.concat(h.getChildren(!0, b, d)), k = g.length))), h = h._next;
            return g
        };
        n.getTweensOf = function(a, b) {
            for (var d = c.getTweensOf(a), f = d.length, g = [], h = 0; - 1 < --f;)
                if (d[f].timeline === this || b && this._contains(d[f])) g[h++] = d[f];
            return g
        };
        n._contains = function(a) {
            for (a = a.timeline; a;) {
                if (a === this) return !0;
                a = a.timeline
            }
            return !1
        };
        n.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d = this._first, f = this._labels, g; d;) d._startTime >= c && (d._startTime += a), d = d._next;
            if (b)
                for (g in f) f[g] >= c && (f[g] += a);
            return this._uncache(!0)
        };
        n._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, f = !1; - 1 < --d;) c[d]._kill(a, b) && (f = !0);
            return f
        };
        n.clear = function(a) {
            var b = this.getChildren(!1, !0, !0),
                c = b.length;
            for (this._time = this._totalTime = 0; - 1 < --c;) b[c]._enabled(!1, !1);
            !1 !== a && (this._labels = {});
            return this._uncache(!0)
        };
        n.invalidate = function() {
            for (var a = this._first; a;) a.invalidate(), a = a._next;
            return this
        };
        n._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c)
        };
        n.duration = function(a) {
            if (!arguments.length) return this._dirty && this.totalDuration(), this._duration;
            0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a);
            return this
        };
        n.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b = 0, c = this._last, d = 999999999999, f; c;) f = c._prev, c._dirty && c.totalDuration(), c._startTime > d && this._sortChildren && !c._paused ? this.add(c, c._startTime - c._delay) : d = c._startTime, 0 > c._startTime && !c._paused &&
                        (b -= c._startTime, this._timeline.smoothChildTiming && (this._startTime += c._startTime / this._timeScale), this.shiftChildren(-c._startTime, !1, -9999999999), d = 0), c = c._startTime + c._totalDuration / c._timeScale, c > b && (b = c), c = f;
                    this._duration = this._totalDuration = b;
                    this._dirty = !1
                }
                return this._totalDuration
            }
            0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a);
            return this
        };
        n.usesFrames = function() {
            for (var b = this._timeline; b._timeline;) b = b._timeline;
            return b === a._rootFramesTimeline
        };
        n.rawTime = function() {
            return this._paused ?
                this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return d
    }, !0);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
        var d = function(b) {
            a.call(this, b);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = !0 === this.vars.yoyo;
            this._dirty = !0
        }, f = 1E-10,
            g = [],
            h = new c(null, null, 1, 0);
        c = d.prototype = new a;
        c.constructor = d;
        c.kill()._gc = !1;
        d.version = "1.11.0";
        c.invalidate = function() {
            this._yoyo = !0 === this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(!0);
            return a.prototype.invalidate.call(this)
        };
        c.addCallback = function(a, c, d, f) {
            return this.add(b.delayedCall(0, a, d, f), c)
        };
        c.removeCallback = function(a, b) {
            if (a)
                if (null == b) this._kill(null, a);
                else
                    for (var c = this.getTweensOf(a, !1), d = c.length, f = this._parseTimeOrLabel(b); - 1 < --d;) c[d]._startTime === f && c[d]._enabled(!1, !1);
            return this
        };
        c.tweenTo = function(a, c) {
            c = c || {};
            var d = {
                ease: h,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1
            }, f, n;
            for (f in c) d[f] = c[f];
            d.time = this._parseTimeOrLabel(a);
            n = new b(this, Math.abs(Number(d.time) - this._time) / this._timeScale || 0.001, d);
            d.onStart = function() {
                n.target.paused(!0);
                n.vars.time !== n.target.time() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale);
                c.onStart && c.onStart.apply(c.onStartScope || n, c.onStartParams || g)
            };
            return n
        };
        c.tweenFromTo = function(a, b, c) {
            c = c || {};
            a = this._parseTimeOrLabel(a);
            c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                onCompleteScope: this
            };
            c.immediateRender = !1 !== c.immediateRender;
            b = this.tweenTo(b, c);
            return b.duration(Math.abs(b.vars.time - a) / this._timeScale || 0.001)
        };
        c.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d = this._dirty ? this.totalDuration() : this._totalDuration,
                h = this._duration,
                s = this._time,
                I = this._totalTime,
                F = this._startTime,
                qa = this._timeScale,
                r = this._rawPrevTime,
                R = this._paused,
                M = this._cycle,
                Ua, T, Xa, ea;
            if (a >= d) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (Ua = !0,
                T = "onComplete", 0 === this._duration && (0 === a || 0 > r || r === f) && r !== a && this._first && (Xa = !0, r > f && (T = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a ? a : f, this._yoyo && 0 !== (this._cycle & 1) ? this._time = a = 0 : (this._time = h, a = h + 1E-6);
            else if (1E-7 > a) {
                this._locked || (this._totalTime = this._cycle = 0);
                this._time = 0;
                if (0 !== s || 0 === h && (r > f || 0 > a && 0 <= r) && !this._locked) T = "onReverseComplete", Ua = this._reversed;
                0 > a ? (this._active = !1, 0 === h && 0 <= r && this._first && (Xa = !0), this._rawPrevTime = a) : (this._rawPrevTime = h || !b || a ? a : f,
                    a = 0, this._initted || (Xa = !0))
            } else 0 === h && 0 > r && (Xa = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (ea = h + this._repeatDelay, this._cycle = this._totalTime / ea >> 0, 0 !== this._cycle && this._cycle === this._totalTime / ea && this._cycle--, this._time = this._totalTime - this._cycle * ea, this._yoyo && 0 !== (this._cycle & 1) && (this._time = h - this._time), this._time > h ? (this._time = h, a = h + 1E-6) : 0 > this._time ? this._time = a = 0 : a = this._time)); if (this._cycle !== M && !this._locked) {
                ea = this._yoyo && 0 !== (M & 1);
                var H =
                    ea === (this._yoyo && 0 !== (this._cycle & 1)),
                    oa = this._totalTime,
                    C = this._cycle,
                    W = this._rawPrevTime,
                    V = this._time;
                this._totalTime = M * h;
                this._cycle < M ? ea = !ea : this._totalTime += h;
                this._time = s;
                this._rawPrevTime = 0 === h ? r - 1E-5 : r;
                this._cycle = M;
                this._locked = !0;
                s = ea ? 0 : h;
                this.render(s, b, 0 === h);
                b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || g);
                H && (s = ea ? h + 1E-6 : -1E-6, this.render(s, !0, !1));
                this._locked = !1;
                if (this._paused && !R) return;
                this._time = V;
                this._totalTime =
                    oa;
                this._cycle = C;
                this._rawPrevTime = W
            }
            if (this._time !== s && this._first || c || Xa) {
                this._initted || (this._initted = !0);
                !this._active && !this._paused && this._totalTime !== I && 0 < a && (this._active = !0);
                0 === I && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g));
                if (this._time >= s)
                    for (h = this._first; h;) {
                        I = h._next;
                        if (this._paused && !R) break;
                        else if (h._active || h._startTime <= this._time && !h._paused && !h._gc) h._reversed ? h.render((h._dirty ? h.totalDuration() :
                            h._totalDuration) - (a - h._startTime) * h._timeScale, b, c) : h.render((a - h._startTime) * h._timeScale, b, c);
                        h = I
                    } else
                        for (h = this._last; h;) {
                            I = h._prev;
                            if (this._paused && !R) break;
                            else if (h._active || h._startTime <= s && !h._paused && !h._gc) h._reversed ? h.render((h._dirty ? h.totalDuration() : h._totalDuration) - (a - h._startTime) * h._timeScale, b, c) : h.render((a - h._startTime) * h._timeScale, b, c);
                            h = I
                        }
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g));
                !T || this._locked || this._gc || F !==
                    this._startTime && qa === this._timeScale || !(0 === this._time || d >= this.totalDuration()) || (Ua && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[T] && this.vars[T].apply(this.vars[T + "Scope"] || this, this.vars[T + "Params"] || g))
            } else I !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g))
        };
        c.getActive = function(a, b, c) {
            null == a && (a = !0);
            null == b && (b = !0);
            null == c && (c = !1);
            var d = [];
            a = this.getChildren(a, b, c);
            b = 0;
            c = a.length;
            var f, g;
            for (f = 0; f < c; f++) g = a[f], g.isActive() && (d[b++] = g);
            return d
        };
        c.getLabelAfter = function(a) {
            a || 0 === a || (a = this._time);
            var b = this.getLabelsArray(),
                c = b.length,
                d;
            for (d = 0; d < c; d++)
                if (b[d].time > a) return b[d].name;
            return null
        };
        c.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; - 1 < --c;)
                if (b[c].time < a) return b[c].name;
            return null
        };
        c.getLabelsArray = function() {
            var a = [],
                b = 0,
                c;
            for (c in this._labels) a[b++] = {
                time: this._labels[c],
                name: c
            };
            a.sort(function(a, b) {
                return a.time -
                    b.time
            });
            return a
        };
        c.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (this._cycle & 1) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        };
        c.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        };
        c.totalDuration = function(b) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty &&
                (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        };
        c.time = function(a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            a > this._duration && (a = this._duration);
            this._yoyo && 0 !== (this._cycle & 1) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay));
            return this.totalTime(a, b)
        };
        c.repeat = function(a) {
            if (!arguments.length) return this._repeat;
            this._repeat = a;
            return this._uncache(!0)
        };
        c.repeatDelay = function(a) {
            if (!arguments.length) return this._repeatDelay;
            this._repeatDelay = a;
            return this._uncache(!0)
        };
        c.yoyo = function(a) {
            if (!arguments.length) return this._yoyo;
            this._yoyo = a;
            return this
        };
        c.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1E-8)
        };
        return d
    }, !0);
    (function() {
        var a = 180 / Math.PI,
            b = [],
            c = [],
            d = [],
            f = {}, g = function(a, b, c, d) {
                this.a =
                    a;
                this.b = b;
                this.c = c;
                this.d = d;
                this.da = d - a;
                this.ca = c - a;
                this.ba = b - a
            }, h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            k = function(a, b, c, d) {
                var f = {
                    a: a
                }, g = {}, h = {}, k = {
                        c: d
                    }, l = (a + b) / 2,
                    m = (b + c) / 2;
                c = (c + d) / 2;
                b = (l + m) / 2;
                var m = (m + c) / 2,
                    n = (m - b) / 8;
                f.b = l + (a - l) / 4;
                g.b = b + n;
                f.c = g.a = (f.b + g.b) / 2;
                g.c = h.a = (b + m) / 2;
                h.b = m - n;
                k.b = c + (d - c) / 4;
                h.c = k.a = (h.b + k.b) / 2;
                return [f, g, h, k]
            }, m = function(a, f, g, h, l) {
                var m = a.length -
                    1,
                    n = 0,
                    H = a[0].a,
                    p, C, s, V, A, y, xa, I, F;
                for (p = 0; p < m; p++) A = a[n], C = A.a, s = A.d, V = a[n + 1].d, l ? (xa = b[p], I = c[p], F = (I + xa) * f * 0.25 / (h ? 0.5 : d[p] || 0.5), y = s - (s - C) * (h ? 0.5 * f : 0 !== xa ? F / xa : 0), V = s + (V - s) * (h ? 0.5 * f : 0 !== I ? F / I : 0), xa = s - (y + ((V - y) * (3 * xa / (xa + I) + 0.5) / 4 || 0))) : (y = s - (s - C) * f * 0.5, V = s + (V - s) * f * 0.5, xa = s - (y + V) / 2), y += xa, V += xa, A.c = y, A.b = 0 !== p ? H : H = A.a + 0.6 * (A.c - A.a), A.da = s - C, A.ca = y - C, A.ba = H - C, g ? (H = k(C, H, y, s), a.splice(n, 1, H[0], H[1], H[2], H[3]), n += 4) : n++, H = V;
                A = a[n];
                A.b = H;
                A.c = H + 0.4 * (A.d - H);
                A.da = A.d - A.a;
                A.ca = A.c - A.a;
                A.ba = H - A.a;
                g && (H =
                    k(A.a, H, A.c, A.d), a.splice(n, 1, H[0], H[1], H[2], H[3]))
            }, p = function(a, d, f, h) {
                var k = [],
                    l, m, n, p;
                if (h)
                    for (a = [h].concat(a), l = a.length; - 1 < --l;) "string" === typeof(m = a[l][d]) && "=" === m.charAt(1) && (a[l][d] = h[d] + Number(m.charAt(0) + m.substr(2)));
                h = a.length - 2;
                if (0 > h) return k[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), k;
                for (l = 0; l < h; l++) m = a[l][d], n = a[l + 1][d], k[l] = new g(m, 0, 0, n), f && (p = a[l + 2][d], b[l] = (b[l] || 0) + (n - m) * (n - m), c[l] = (c[l] || 0) + (p - n) * (p - n));
                k[l] = new g(a[l][d], 0, 0, a[l + 1][d]);
                return k
            }, l = function(a, g, k, l, n, s) {
                var ea = {}, H = [],
                    oa = s || a[0],
                    C, W, V, A;
                n = "string" === typeof n ? "," + n + "," : h;
                null == g && (g = 1);
                for (W in a[0]) H.push(W);
                if (1 < a.length) {
                    A = a[a.length - 1];
                    V = !0;
                    for (C = H.length; - 1 < --C;)
                        if (W = H[C], 0.05 < Math.abs(oa[W] - A[W])) {
                            V = !1;
                            break
                        }
                    V && (a = a.concat(), s && a.unshift(s), a.push(a[1]), s = a[a.length - 3])
                }
                b.length = c.length = d.length = 0;
                for (C = H.length; - 1 < --C;) W = H[C], f[W] = -1 !== n.indexOf("," + W + ","), ea[W] = p(a, W, f[W], s);
                for (C = b.length; - 1 < --C;) b[C] = Math.sqrt(b[C]), c[C] = Math.sqrt(c[C]);
                if (!l) {
                    for (C = H.length; - 1 < --C;)
                        if (f[W])
                            for (a = ea[H[C]], oa =
                                a.length - 1, n = 0; n < oa; n++) s = a[n + 1].da / c[n] + a[n].da / b[n], d[n] = (d[n] || 0) + s * s;
                    for (C = d.length; - 1 < --C;) d[C] = Math.sqrt(d[C])
                }
                C = H.length;
                for (n = k ? 4 : 1; - 1 < --C;) W = H[C], a = ea[W], m(a, g, k, l, f[W]), V && (a.splice(0, n), a.splice(a.length - n, n));
                return ea
            }, n = function(a, b, c) {
                b = b || "soft";
                var d = {}, f = "cubic" === b ? 3 : 2;
                b = "soft" === b;
                var h = [],
                    k, l, m, n, p, s, A, y, I;
                b && c && (a = [c].concat(a));
                if (null == a || a.length < f + 1) throw "invalid Bezier data";
                for (l in a[0]) h.push(l);
                for (s = h.length; - 1 < --s;) {
                    l = h[s];
                    d[l] = p = [];
                    I = 0;
                    y = a.length;
                    for (A = 0; A < y; A++) k =
                        null == c ? a[A][l] : "string" === typeof(m = a[A][l]) && "=" === m.charAt(1) ? c[l] + Number(m.charAt(0) + m.substr(2)) : Number(m), b && 1 < A && A < y - 1 && (p[I++] = (k + p[I - 2]) / 2), p[I++] = k;
                    y = I - f + 1;
                    for (A = I = 0; A < y; A += f) k = p[A], l = p[A + 1], m = p[A + 2], n = 2 === f ? 0 : p[A + 3], p[I++] = m = 3 === f ? new g(k, l, m, n) : new g(k, (2 * l + k) / 3, (2 * l + m) / 3, m);
                    p.length = I
                }
                return d
            }, s = function(a, b, c) {
                for (var d = 1 / c, f = a.length, g, h, k, l, m, n, p; - 1 < --f;)
                    for (m = a[f], h = m.a, k = m.d - h, l = m.c - h, m = m.b - h, h = 0, n = 1; n <= c; n++) g = d * n, p = 1 - g, g = h - (h = (g * g * k + 3 * p * (g * l + p * m)) * g), p = f * c + n - 1, b[p] = (b[p] || 0) + g *
                        g
            }, I = function(a, b) {
                b = b >> 0 || 6;
                var c = [],
                    d = [],
                    f = 0,
                    g = 0,
                    h = b - 1,
                    k = [],
                    l = [],
                    m, n, p;
                for (m in a) s(a[m], c, b);
                n = c.length;
                for (m = 0; m < n; m++) f += Math.sqrt(c[m]), p = m % b, l[p] = f, p === h && (g += f, p = m / b >> 0, k[p] = l, d[p] = g, f = 0, l = []);
                return {
                    length: g,
                    lengths: d,
                    segments: k
                }
            }, F = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: !0,
                init: function(a, b, c) {
                    this._target = a;
                    b instanceof Array && (b = {
                        values: b
                    });
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                    var d =
                        b.values || [],
                        f = {}, g = d[0];
                    c = b.autoRotate || c.vars.orientToBezier;
                    var h, k;
                    this._autoRotate = c ? c instanceof Array ? c : [
                        ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
                    ] : null;
                    for (h in g) this._props.push(h);
                    for (g = this._props.length; - 1 < --g;) h = this._props[g], this._overwriteProps.push(h), c = this._func[h] = "function" === typeof a[h], f[h] = c ? a[h.indexOf("set") || "function" !== typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : parseFloat(a[h]), k || f[h] !== d[0][h] && (k = f);
                    this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !==
                        b.type ? l(d, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, k) : n(d, b.type, f);
                    this._segCount = this._beziers[h].length;
                    this._timeRes && (h = I(this._beziers, this._timeRes), this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length);
                    if (c = this._autoRotate)
                        for (c[0] instanceof Array || (this._autoRotate = c = [c]), g = c.length; - 1 < --g;)
                            for (b =
                                0; 3 > b; b++) h = c[g][b], this._func[h] = "function" === typeof a[h] ? a[h.indexOf("set") || "function" !== typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)] : !1;
                    return !0
                },
                set: function(b) {
                    var c = this._segCount,
                        d = this._func,
                        f = this._target,
                        g, h, k, l, m;
                    if (this._timeRes) {
                        g = this._lengths;
                        l = this._curSeg;
                        b *= this._length;
                        h = this._li;
                        if (b > this._l2 && h < c - 1) {
                            for (c -= 1; h < c && (this._l2 = g[++h]) <= b;);
                            this._l1 = g[h - 1];
                            this._li = h;
                            this._curSeg = l = this._segments[h];
                            this._s2 = l[this._s1 = this._si = 0]
                        } else if (b < this._l1 && 0 < h) {
                            for (; 0 < h && (this._l1 =
                                g[--h]) >= b;);
                            0 === h && b < this._l1 ? this._l1 = 0 : h++;
                            this._l2 = g[h];
                            this._li = h;
                            this._curSeg = l = this._segments[h];
                            this._s1 = l[(this._si = l.length - 1) - 1] || 0;
                            this._s2 = l[this._si]
                        }
                        g = h;
                        b -= this._l1;
                        h = this._si;
                        if (b > this._s2 && h < l.length - 1) {
                            for (c = l.length - 1; h < c && (this._s2 = l[++h]) <= b;);
                            this._s1 = l[h - 1];
                            this._si = h
                        } else if (b < this._s1 && 0 < h) {
                            for (; 0 < h && (this._s1 = l[--h]) >= b;);
                            0 === h && b < this._s1 ? this._s1 = 0 : h++;
                            this._s2 = l[h];
                            this._si = h
                        }
                        l = (h + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else g = 0 > b ? 0 : 1 <= b ? c - 1 : c * b >> 0, l = (b - 1 / c * g) * c;
                    c = 1 - l;
                    for (h = this._props.length; - 1 < --h;)
                        if (b = this._props[h], k = this._beziers[b][g], m = (l * l * k.da + 3 * c * (l * k.ca + c * k.ba)) * l + k.a, this._round[b] && (m = m + (0 < m ? 0.5 : -0.5) >> 0), d[b]) f[b](m);
                        else f[b] = m;
                    if (this._autoRotate) {
                        var c = this._autoRotate,
                            n, p, s, A, y;
                        for (h = c.length; - 1 < --h;)
                            if (b = c[h][2], A = c[h][3] || 0, y = !0 === c[h][4] ? 1 : a, k = this._beziers[c[h][0]], m = this._beziers[c[h][1]], k && m)
                                if (k = k[g], m = m[g], n = k.a + (k.b - k.a) * l, p = k.b + (k.c - k.b) * l, n += (p - n) * l, p += (k.c + (k.d - k.c) * l - p) * l, k = m.a + (m.b - m.a) * l, s = m.b + (m.c - m.b) * l, k += (s - k) * l, s +=
                                    (m.c + (m.d - m.c) * l - s) * l, m = Math.atan2(s - k, p - n) * y + A, d[b]) f[b](m);
                                else f[b] = m
                    }
                }
            }),
            qa = F.prototype;
        F.bezierThrough = l;
        F.cubicToQuadratic = k;
        F._autoCSS = !0;
        F.quadraticToCubic = function(a, b, c) {
            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
        };
        F._cssRegister = function() {
            var a = window._gsDefine.globals.CSSPlugin;
            if (a) {
                var b = a._internals,
                    c = b._parseToProxy,
                    d = b._setPluginRatio,
                    f = b.CSSPropTween;
                b._registerComplexSpecialProp("bezier", {
                    parser: function(a, b, g, h, k, l) {
                        b instanceof Array && (b = {
                            values: b
                        });
                        l = new F;
                        g = b.values;
                        var m = g.length -
                            1,
                            r = [],
                            n = {}, p, s, R;
                        if (0 > m) return k;
                        for (p = 0; p <= m; p++) R = c(a, g[p], h, k, l, m !== p), r[p] = R.end;
                        for (s in b) n[s] = b[s];
                        n.values = r;
                        k = new f(a, "bezier", 0, 0, R.pt, 2);
                        k.data = R;
                        k.plugin = l;
                        k.setRatio = d;
                        0 === n.autoRotate && (n.autoRotate = !0);
                        !n.autoRotate || n.autoRotate instanceof Array || (p = !0 === n.autoRotate ? 0 : Number(n.autoRotate), n.autoRotate = null != R.end.left ? [
                            ["left", "top", "rotation", p, !1]
                        ] : null != R.end.x ? [
                            ["x", "y", "rotation", p, !1]
                        ] : !1);
                        n.autoRotate && (h._transform || h._enableTransforms(!1), R.autoRotate = h._target._gsTransform);
                        l._onInitTween(R.proxy, n, h._tween);
                        return k
                    }
                })
            }
        };
        qa._roundProps = function(a, b) {
            for (var c = this._overwriteProps, d = c.length; - 1 < --d;)
                if (a[c[d]] || a.bezier || a.bezierThrough) this._round[c[d]] = b
        };
        qa._kill = function(a) {
            var b = this._props,
                c, d;
            for (c in this._beziers)
                if (c in a)
                    for (delete this._beziers[c], delete this._func[c], d = b.length; - 1 < --d;) b[d] === c && b.splice(d, 1);
            return this._super._kill.call(this, a)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c = function() {
            a.call(this,
                "css");
            this._overwriteProps.length = 0;
            this.setRatio = c.prototype.setRatio
        }, d, f, g, h, k = {}, m = c.prototype = new a("css");
        m.constructor = c;
        c.version = "1.11.0";
        c.API = 2;
        c.defaultTransformPerspective = 0;
        m = "px";
        c.suffixMap = {
            top: m,
            right: m,
            bottom: m,
            left: m,
            width: m,
            height: m,
            fontSize: m,
            padding: m,
            margin: m,
            perspective: m
        };
        var p = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            l = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            n = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            s = /[^\d\-\.]/g,
            I = /(?:\d|\-|\+|=|#|\.)*/g,
            F = /opacity *= *([^)]*)/,
            qa = /opacity:([^;]*)/,
            r = /alpha\(opacity *=.+?\)/i,
            R = /^(rgb|hsl)/,
            M = /([A-Z])/g,
            Ua = /-([a-z])/gi,
            T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            Xa = function(a, b) {
                return b.toUpperCase()
            }, ea = /(?:Left|Right|Width)/i,
            H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            oa = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            C = /,(?=[^\)]*(?:\(|$))/gi,
            W = Math.PI / 180,
            V = 180 / Math.PI,
            A = {}, y = document,
            xa = y.createElement("div"),
            bf = y.createElement("img"),
            Td = c._internals = {
                _specialProps: k
            }, Va = navigator.userAgent,
            Db, tg, Ud, Vd, Wb, eb, tb = function() {
                var a =
                    Va.indexOf("Android"),
                    b = y.createElement("div");
                Wb = (Ud = -1 !== Va.indexOf("Safari") && -1 === Va.indexOf("Chrome") && (-1 === a || 3 < Number(Va.substr(a + 8, 1)))) && 6 > Number(Va.substr(Va.indexOf("Version/") + 8, 1));
                Vd = -1 !== Va.indexOf("Firefox");
                /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Va);
                eb = parseFloat(RegExp.$1);
                b.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
                return (a = b.getElementsByTagName("a")[0]) ? /^0.55/.test(a.style.opacity) : !1
            }(),
            Wd = function(a) {
                return F.test("string" === typeof a ? a : (a.currentStyle ? a.currentStyle.filter :
                    a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, df = function(a) {
                window.console && console.log(a)
            }, ub = "",
            q = "",
            G = function(a, b) {
                b = b || xa;
                var c = b.style,
                    d, f;
                if (void 0 !== c[a]) return a;
                a = a.charAt(0).toUpperCase() + a.substr(1);
                d = ["O", "Moz", "ms", "Ms", "Webkit"];
                for (f = 5; - 1 < --f && void 0 === c[d[f] + a];);
                return 0 <= f ? (q = 3 === f ? "ms" : d[f], ub = "-" + q.toLowerCase() + "-", q + a) : null
            }, u = y.defaultView ? y.defaultView.getComputedStyle : function() {}, O = c.getStyle = function(a, b, c, d, f) {
                var g;
                if (!tb && "opacity" === b) return Wd(a);
                !d && a.style[b] ?
                    g = a.style[b] : (c = c || u(a, null)) ? g = (a = c.getPropertyValue(b.replace(M, "-$1").toLowerCase())) || c.length ? a : c[b] : a.currentStyle && (g = a.currentStyle[b]);
                return null == f || g && "none" !== g && "auto" !== g && "auto auto" !== g ? g : f
            }, ja = function(a, b, c, d, f) {
                if ("px" === d || !d) return c;
                if ("auto" === d || !c) return 0;
                var g = ea.test(b),
                    h = a,
                    q = xa.style,
                    k = 0 > c;
                k && (c = -c);
                "%" === d && -1 !== b.indexOf("border") ? g = c / 100 * (g ? a.clientWidth : a.clientHeight) : (q.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", "%" !== d && h.appendChild ?
                    q[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || y.body, q[g ? "width" : "height"] = c + d), h.appendChild(xa), g = parseFloat(xa[g ? "offsetWidth" : "offsetHeight"]), h.removeChild(xa), 0 !== g || f || (g = ja(a, b, c, d, !0)));
                return k ? -g : g
            }, ya = function(a, b, c) {
                if ("absolute" !== O(a, "position", c)) return 0;
                var d = "left" === b ? "Left" : "Top";
                c = O(a, "margin" + d, c);
                return a["offset" + d] - (ja(a, b, parseFloat(c), c.replace(I, "")) || 0)
            }, ia = function(a, b) {
                var c = {}, d;
                if (b = b || u(a, null))
                    if (d = b.length)
                        for (; - 1 < --d;) c[b[d].replace(Ua, Xa)] = b.getPropertyValue(b[d]);
                    else
                        for (d in b) c[d] = b[d];
                    else if (b = a.currentStyle || a.style)
                    for (d in b) "string" === typeof d && void 0 !== c[d] && (c[d.replace(Ua, Xa)] = b[d]);
                tb || (c.opacity = Wd(a));
                d = ef(a, b, !1);
                c.rotation = d.rotation;
                c.skewX = d.skewX;
                c.scaleX = d.scaleX;
                c.scaleY = d.scaleY;
                c.x = d.x;
                c.y = d.y;
                Gc && (c.z = d.z, c.rotationX = d.rotationX, c.rotationY = d.rotationY, c.scaleZ = d.scaleZ);
                c.filters && delete c.filters;
                return c
            }, ca = function(a, b, c, d, f) {
                var g = {}, h = a.style,
                    q, k, l;
                for (k in c) "cssText" !== k && "length" !== k && isNaN(k) && (b[k] !== (q = c[k]) || f && f[k]) && -1 === k.indexOf("Origin") && ("number" === typeof q || "string" === typeof q) && (g[k] = "auto" !== q || "left" !== k && "top" !== k ? "" !== q && "auto" !== q && "none" !== q || "string" !== typeof b[k] || "" === b[k].replace(s, "") ? q : 0 : ya(a, k), void 0 !== h[k] && (l = new bi(h, k, h[k], l)));
                if (d)
                    for (k in d) "className" !== k && (g[k] = d[k]);
                return {
                    difs: g,
                    firstMPT: l
                }
            }, Xd = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, Gn = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            Hn = function(a, b, c) {
                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight);
                b = Xd[b];
                var f = b.length;
                for (c = c || u(a, null); - 1 < --f;) d -= parseFloat(O(a, "padding" + b[f], c, !0)) || 0, d -= parseFloat(O(a, "border" + b[f] + "Width", c, !0)) || 0;
                return d
            }, ci = function(a, b) {
                if (null == a || "" === a || "auto" === a || "auto auto" === a) a = "0 0";
                var c = a.split(" "),
                    d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                    f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                null == f ? f = "0" : "center" === f && (f = "50%");
                if ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) d = "50%";
                b && (b.oxp = -1 !==
                    d.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(f.replace(s, "")));
                return d + " " + f + (2 < c.length ? " " + c[2] : "")
            }, hl = function(a, b) {
                return "string" === typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
            }, dd = function(a, b) {
                return null == a ? b : "string" === typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
            }, ff = function(a, b, c, d) {
                var f,
                    g;
                null == a ? a = b : "number" !== typeof a && (f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? 1 : V) - ("=" === a.charAt(1) ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= 360, g !== g % 180 && (g = 0 > g ? g + 360 : g - 360)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 3599999999640) % 360 - 360 * (g / 360 | 0) : -1 !== a.indexOf("ccw") && 0 < g && (g = (g - 3599999999640) % 360 - 360 * (g / 360 | 0))), a = b + g);
                1E-6 > a && -1E-6 < a && (a = 0);
                return a
            }, Yd = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, di = function(a, b, c) {
                a = 0 > a ? a + 1 : 1 < a ? a - 1 : a;
                return 255 * (1 > 6 * a ? b + (c - b) * a * 6 : 0.5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + 0.5 | 0
            }, ei = function(a) {
                var b, c, d;
                if (!a || "" === a) return Yd.black;
                if ("number" === typeof a) return [a >> 16, a >> 8 & 255, a & 255];
                "," === a.charAt(a.length -
                    1) && (a = a.substr(0, a.length - 1));
                if (Yd[a]) return Yd[a];
                if ("#" === a.charAt(0)) return 4 === a.length && (b = a.charAt(1), c = a.charAt(2), a = a.charAt(3), a = "#" + b + b + c + c + a + a), a = parseInt(a.substr(1), 16), [a >> 16, a >> 8 & 255, a & 255];
                if ("hsl" === a.substr(0, 3)) return a = a.match(p), d = Number(a[0]) % 360 / 360, c = Number(a[1]) / 100, b = Number(a[2]) / 100, c = 0.5 >= b ? b * (c + 1) : b + c - b * c, b = 2 * b - c, 3 < a.length && (a[3] = Number(a[3])), a[0] = di(d + 1 / 3, b, c), a[1] = di(d, b, c), a[2] = di(d - 1 / 3, b, c), a;
                a = a.match(p) || Yd.transparent;
                a[0] = Number(a[0]);
                a[1] = Number(a[1]);
                a[2] =
                    Number(a[2]);
                3 < a.length && (a[3] = Number(a[3]));
                return a
            }, ed = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (m in Yd) ed += "|" + m + "\\b";
        var ed = new RegExp(ed + ")", "gi"),
            il = function(a, b, c, d) {
                if (null == a) return function(a) {
                    return a
                };
                var f = b ? (a.match(ed) || [""])[0] : "",
                    g = a.split(f).join("").match(n) || [],
                    h = a.substr(0, a.indexOf(g[0])),
                    q = ")" === a.charAt(a.length - 1) ? ")" : "",
                    k = -1 !== a.indexOf(" ") ? " " : ",",
                    l = g.length,
                    u = 0 < l ? g[0].replace(p, "") : "",
                    m;
                return l ? b ? m = function(a) {
                    var b, cf, Cb;
                    if ("number" === typeof a) a +=
                        u;
                    else if (d && C.test(a)) {
                        a = a.replace(C, "|").split("|");
                        for (Cb = 0; Cb < a.length; Cb++) a[Cb] = m(a[Cb]);
                        return a.join(",")
                    }
                    b = (a.match(ed) || [f])[0];
                    cf = a.split(b).join("").match(n) || [];
                    Cb = cf.length;
                    if (l > Cb--)
                        for (; ++Cb < l;) cf[Cb] = c ? cf[(Cb - 1) / 2 | 0] : g[Cb];
                    return h + cf.join(k) + k + b + q + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : m = function(a) {
                    var b;
                    if ("number" === typeof a) a += u;
                    else if (d && C.test(a)) {
                        b = a.replace(C, "|").split("|");
                        for (a = 0; a < b.length; a++) b[a] = m(b[a]);
                        return b.join(",")
                    }
                    b = a.match(n) || [];
                    a = b.length;
                    if (l > a--)
                        for (; ++a <
                            l;) b[a] = c ? b[(a - 1) / 2 | 0] : g[a];
                    return h + b.join(k) + q
                } : function(a) {
                    return a
                }
            }, jl = function(a) {
                a = a.split(",");
                return function(b, c, d, f, g, h, q) {
                    c = (c + "").split(" ");
                    q = {};
                    for (d = 0; 4 > d; d++) q[a[d]] = c[d] = c[d] || c[(d - 1) / 2 >> 0];
                    return f.parse(b, q, g, h)
                }
            }, $n = Td._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                for (var b = this.data, c = b.proxy, d = b.firstMPT, f; d;) f = c[d.v], d.r ? f = 0 < f ? f + 0.5 | 0 : f - 0.5 | 0 : 1E-6 > f && -1E-6 < f && (f = 0), d.t[d.p] = f, d = d._next;
                b.autoRotate && (b.autoRotate.rotation = c.rotation);
                if (1 === a)
                    for (d = b.firstMPT; d;) {
                        a = d.t;
                        if (!a.type) a.e = a.s + a.xs0;
                        else if (1 === a.type) {
                            c = a.xs0 + a.s + a.xs1;
                            for (b = 1; b < a.l; b++) c += a["xn" + b] + a["xs" + (b + 1)];
                            a.e = c
                        }
                        d = d._next
                    }
            }, bi = function(a, b, c, d, f) {
                this.t = a;
                this.p = b;
                this.v = c;
                this.r = f;
                d && (d._prev = this, this._next = d)
            }, ao = Td._parseToProxy = function(a, b, c, d, f, g) {
                var h = d,
                    q = {}, k = {}, l = c._transform,
                    u = A,
                    m;
                c._transform = null;
                A = b;
                d = a = c.parse(a, b, d, f);
                A = u;
                g && (c._transform = l, h && (h._prev = null, h._prev && (h._prev._next = null)));
                for (; d && d !== h;) {
                    if (1 >= d.type && (l = d.p, k[l] = d.s + d.c, q[l] = d.s, g || (m = new bi(d, "s", l, m, d.r), d.c =
                        0), 1 === d.type))
                        for (c = d.l; 0 < --c;) u = "xn" + c, l = d.p + "_" + u, k[l] = d.data[u], q[l] = d[u], g || (m = new bi(d, u, l, m, d.rxp[u]));
                    d = d._next
                }
                return {
                    proxy: q,
                    end: k,
                    firstMPT: m,
                    pt: a
                }
            }, Ma = Td.CSSPropTween = function(a, b, c, f, g, q, k, l, u, m, r) {
                this.t = a;
                this.p = b;
                this.s = c;
                this.c = f;
                this.n = k || b;
                a instanceof Ma || h.push(this.n);
                this.r = l;
                this.type = q || 0;
                u && (this.pr = u, d = !0);
                this.b = void 0 === m ? c : m;
                this.e = void 0 === r ? c + f : r;
                g && (this._next = g, g._prev = this)
            }, ug = c.parseComplex = function(a, b, c, d, f, g, h, q, k, u) {
                c = c || g || "";
                h = new Ma(a, b, 0, 0, h, u ? 2 : 1, null, !1, q, c, d);
                d += "";
                a = c.split(", ").join(",").split(" ");
                b = d.split(", ").join(",").split(" ");
                q = a.length;
                var m = !1 !== Db,
                    r, G, O, n;
                if (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) a = a.join(" ").replace(C, ", ").split(" "), b = b.join(" ").replace(C, ", ").split(" "), q = a.length;
                q !== b.length && (a = (g || "").split(" "), q = a.length);
                h.plugin = k;
                h.setRatio = u;
                for (c = 0; c < q; c++)
                    if (g = a[c], u = b[c], (k = parseFloat(g)) || 0 === k) h.appendXtra("", k, hl(u, k), u.replace(l, ""), m && -1 !== u.indexOf("px"), !0);
                    else if (f && ("#" === g.charAt(0) || Yd[g] || R.test(g))) r =
                    "," === u.charAt(u.length - 1) ? ")," : ")", g = ei(g), u = ei(u), (k = 6 < g.length + u.length) && !tb && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(b[c]).join("transparent")) : (tb || (k = !1), h.appendXtra(k ? "rgba(" : "rgb(", g[0], u[0] - g[0], ",", !0, !0).appendXtra("", g[1], u[1] - g[1], ",", !0).appendXtra("", g[2], u[2] - g[2], k ? "," : r, !0), k && (g = 4 > g.length ? 1 : g[3], h.appendXtra("", g, (4 > u.length ? 1 : u[3]) - g, r, !1)));
                else if (k = g.match(p)) {
                    G = u.match(l);
                    if (!G || G.length !== k.length) return h;
                    for (u = r = 0; u < k.length; u++) n = k[u], O =
                        g.indexOf(n, r), h.appendXtra(g.substr(r, O - r), Number(n), hl(G[u], n), "", m && "px" === g.substr(O + n.length, 2), 0 === u), r = O + n.length;
                    h["xs" + h.l] += g.substr(r)
                } else h["xs" + h.l] += h.l ? " " + g : g; if (-1 !== d.indexOf("=") && h.data) {
                    r = h.xs0 + h.data.s;
                    for (c = 1; c < h.l; c++) r += h["xs" + c] + h.data["xn" + c];
                    h.e = r + h["xs" + c]
                }
                h.l || (h.type = -1, h.xs0 = h.e);
                return h.xfirst || h
            }, fb = 9,
            m = Ma.prototype;
        for (m.l = m.pr = 0; 0 < --fb;) m["xn" + fb] = 0, m["xs" + fb] = "";
        m.xs0 = "";
        m._next = m._prev = m.xfirst = m.data = m.plugin = m.setRatio = m.rxp = null;
        m.appendXtra = function(a, b,
            c, d, f, g) {
            var h = this.l;
            this["xs" + h] += g && h ? " " + a : a || "";
            if (!c && 0 !== h && !this.plugin) return this["xs" + h] += b + (d || ""), this;
            this.l++;
            this.type = this.setRatio ? 2 : 1;
            this["xs" + this.l] = d || "";
            if (0 < h) return this.data["xn" + h] = b + c, this.rxp["xn" + h] = f, this["xn" + h] = b, this.plugin || (this.xfirst = new Ma(this, "xn" + h, b, c, this.xfirst || this, 0, this.n, f, this.pr), this.xfirst.xs0 = 0), this;
            this.data = {
                s: b + c
            };
            this.rxp = {};
            this.s = b;
            this.c = c;
            this.r = f;
            return this
        };
        var kl = function(a, b) {
            b = b || {};
            this.p = b.prefix ? G(a) || a : a;
            k[a] = k[this.p] = this;
            this.format = b.formatter || il(b.defaultValue, b.color, b.collapsible, b.multi);
            b.parser && (this.parse = b.parser);
            this.clrs = b.color;
            this.multi = b.multi;
            this.keyword = b.keyword;
            this.dflt = b.defaultValue;
            this.pr = b.priority || 0
        }, ta = Td._registerComplexSpecialProp = function(a, b, c) {
                "object" !== typeof b && (b = {
                    parser: c
                });
                a = a.split(",");
                var d = b.defaultValue,
                    f;
                c = c || [d];
                for (f = 0; f < a.length; f++) b.prefix = 0 === f && b.prefix, b.defaultValue = c[f] || d, new kl(a[f], b)
            }, In = function(a) {
                if (!k[a]) {
                    var b = a.charAt(0).toUpperCase() + a.substr(1) +
                        "Plugin";
                    ta(a, {
                        parser: function(a, c, d, f, g, h, q) {
                            var u = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                            if (!u) return df("Error: " + b + " js file not loaded."), g;
                            u._cssRegister();
                            return k[d].parse(a, c, d, f, g, h, q)
                        }
                    })
                }
            }, m = kl.prototype;
        m.parseComplex = function(a, b, c, d, f, g) {
            var h = this.keyword,
                q, k, u, l;
            this.multi && (C.test(c) || C.test(b) ? (k = b.replace(C, "|").split("|"), u = c.replace(C, "|").split("|")) : h && (k = [b], u = [c]));
            if (u) {
                l = u.length > k.length ? u.length : k.length;
                for (q = 0; q < l; q++) b = k[q] = k[q] || this.dflt, c = u[q] =
                    u[q] || this.dflt, h && (b = b.indexOf(h), c = c.indexOf(h), b !== c && (c = -1 === c ? u : k, c[q] += " " + h));
                b = k.join(", ");
                c = u.join(", ")
            }
            return ug(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, f, g)
        };
        m.parse = function(a, b, c, d, f, h) {
            return this.parseComplex(a.style, this.format(O(a, this.p, g, !1, this.dflt)), this.format(b), f, h)
        };
        c.registerSpecialProp = function(a, b, c) {
            ta(a, {
                parser: function(a, d, f, g, h, q) {
                    h = new Ma(a, f, 0, 0, h, 2, f, !1, c);
                    h.plugin = q;
                    h.setRatio = b(a, d, g._tween, f);
                    return h
                },
                priority: c
            })
        };
        var ll = "scaleX scaleY scaleZ x y z skewX rotation rotationX rotationY perspective".split(" "),
            Eb = G("transform"),
            Jn = ub + "transform",
            fi = G("transformOrigin"),
            Gc = null !== G("perspective"),
            ef = function(a, b, d, f) {
                if (a._gsTransform && d && !f) return a._gsTransform;
                var g = d ? a._gsTransform || {
                    skewY: 0
                } : {
                    skewY: 0
                }, h = 0 > g.scaleX,
                    q = 179.99 * W,
                    k = Gc ? parseFloat(O(a, fi, b, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0,
                    u, l, m, r, G, n;
                Eb ? u = O(a, Jn, b, !0) : a.currentStyle && (u = (u = a.currentStyle.filter.match(H)) && 4 === u.length ? [u[0].substr(4), Number(u[2].substr(4)), Number(u[1].substr(4)), u[3].substr(4), g.x || 0, g.y || 0].join() : "");
                l = (u || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                for (u = l.length; - 1 < --u;) m = Number(l[u]), l[u] = (r = m - (m |= 0)) ? (1E5 * r + (0 > r ? -0.5 : 0.5) | 0) / 1E5 + m : m;
                if (16 === l.length) {
                    h = l[8];
                    b = l[9];
                    r = l[10];
                    m = l[12];
                    var p = l[13],
                        ja = l[14];
                    g.zOrigin && (ja = -g.zOrigin, m = h * ja - l[12], p = b * ja - l[13], ja = r * ja + g.zOrigin - l[14]);
                    if (!d || f || null == g.rotationX) {
                        f = l[0];
                        var s = l[1],
                            ca = l[2],
                            ya = l[3],
                            R = l[4],
                            C = l[5],
                            y = l[6],
                            ia = l[7];
                        l = l[11];
                        var A = Math.atan2(y, r),
                            I = A < -q || A > q,
                            M, Xd, F, T;
                        g.rotationX = A * V;
                        A && (F = Math.cos(-A), T = Math.sin(-A), A = R * F + h * T, M = C * F + b * T, Xd = y * F + r * T, h = R * -T + h * F, b = C * -T + b * F, r = y * -T + r * F, l = ia * -T +
                            l * F, R = A, C = M, y = Xd);
                        A = Math.atan2(h, f);
                        g.rotationY = A * V;
                        A && (G = A < -q || A > q, F = Math.cos(-A), T = Math.sin(-A), M = s * F - b * T, Xd = ca * F - r * T, b = s * T + b * F, r = ca * T + r * F, l = ya * T + l * F, f = f * F - h * T, s = M, ca = Xd);
                        A = Math.atan2(s, C);
                        g.rotation = A * V;
                        A && (n = A < -q || A > q, F = Math.cos(-A), T = Math.sin(-A), f = f * F + R * T, M = s * F + C * T, C = s * -T + C * F, y = ca * -T + y * F, s = M);
                        n && I ? g.rotation = g.rotationX = 0 : n && G ? g.rotation = g.rotationY = 0 : G && I && (g.rotationY = g.rotationX = 0);
                        g.scaleX = (1E5 * Math.sqrt(f * f + s * s) + 0.5 | 0) / 1E5;
                        g.scaleY = (1E5 * Math.sqrt(C * C + b * b) + 0.5 | 0) / 1E5;
                        g.scaleZ = (1E5 * Math.sqrt(y *
                            y + r * r) + 0.5 | 0) / 1E5;
                        g.skewX = 0;
                        g.perspective = l ? 1 / (0 > l ? -l : l) : 0;
                        g.x = m;
                        g.y = p;
                        g.z = ja
                    }
                } else if (!(Gc && !f && l.length && g.x === l[4] && g.y === l[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === O(a, "display", b))) {
                    n = (q = 6 <= l.length) ? l[0] : 1;
                    r = l[1] || 0;
                    b = l[2] || 0;
                    m = q ? l[3] : 1;
                    g.x = l[4] || 0;
                    g.y = l[5] || 0;
                    q = Math.sqrt(n * n + r * r);
                    G = Math.sqrt(m * m + b * b);
                    n = n || r ? Math.atan2(r, n) * V : g.rotation || 0;
                    l = b || m ? Math.atan2(b, m) * V + n : g.skewX || 0;
                    b = q - Math.abs(g.scaleX || 0);
                    r = G - Math.abs(g.scaleY || 0);
                    90 < Math.abs(l) && 270 > Math.abs(l) && (h ? (q *= -1, l += 0 >=
                        n ? 180 : -180, n += 0 >= n ? 180 : -180) : (G *= -1, l += 0 >= l ? 180 : -180));
                    h = (n - g.rotation) % 180;
                    m = (l - g.skewX) % 180;
                    if (void 0 === g.skewX || 2E-5 < b || -2E-5 > b || 2E-5 < r || -2E-5 > r || -179.99 < h && 179.99 > h && 1E5 * h | 0 || -179.99 < m && 179.99 > m && 1E5 * m | 0) g.scaleX = q, g.scaleY = G, g.rotation = n, g.skewX = l;
                    Gc && (g.rotationX = g.rotationY = g.z = 0, g.perspective = parseFloat(c.defaultTransformPerspective) || 0, g.scaleZ = 1)
                }
                g.zOrigin = k;
                for (u in g) 2E-5 > g[u] && -2E-5 < g[u] && (g[u] = 0);
                d && (a._gsTransform = g);
                return g
            }, Kn = function(a) {
                var b = this.data,
                    c = -b.rotation * W,
                    d = c + b.skewX *
                        W,
                    f = (Math.cos(c) * b.scaleX * 1E5 | 0) / 1E5,
                    g = (Math.sin(c) * b.scaleX * 1E5 | 0) / 1E5,
                    h = (Math.sin(d) * -b.scaleY * 1E5 | 0) / 1E5,
                    q = (Math.cos(d) * b.scaleY * 1E5 | 0) / 1E5,
                    d = this.t.style,
                    c = this.t.currentStyle,
                    k, l;
                if (c) {
                    l = g;
                    g = -h;
                    h = -l;
                    k = c.filter;
                    d.filter = "";
                    l = this.t.offsetWidth;
                    var u = this.t.offsetHeight,
                        m = "absolute" !== c.position,
                        r = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + g + ", M21=" + h + ", M22=" + q,
                        G = b.x,
                        n = b.y,
                        O, p;
                    null != b.ox && (O = (b.oxp ? l * b.ox * 0.01 : b.ox) - l / 2, p = (b.oyp ? u * b.oy * 0.01 : b.oy) - u / 2, G += O - (O * f + p * g), n += p - (O * h +
                        p * q));
                    m ? (O = l / 2, p = u / 2, r += ", Dx=" + (O - (O * f + p * g) + G) + ", Dy=" + (p - (O * h + p * q) + n) + ")") : r += ", sizingMethod='auto expand')";
                    d.filter = -1 !== k.indexOf("DXImageTransform.Microsoft.Matrix(") ? k.replace(oa, r) : r + " " + k;
                    0 !== a && 1 !== a || 1 !== f || 0 !== g || 0 !== h || 1 !== q || m && -1 === r.indexOf("Dx=0, Dy=0") || F.test(k) && 100 !== parseFloat(RegExp.$1) || -1 === k.indexOf(k.indexOf("Alpha")) && d.removeAttribute("filter");
                    if (!m)
                        for (a = 8 > eb ? 1 : -1, O = b.ieOffsetX || 0, p = b.ieOffsetY || 0, b.ieOffsetX = Math.round((l - ((0 > f ? -f : f) * l + (0 > g ? -g : g) * u)) / 2 + G), b.ieOffsetY =
                            Math.round((u - ((0 > q ? -q : q) * u + (0 > h ? -h : h) * l)) / 2 + n), fb = 0; 4 > fb; fb++) f = Gn[fb], g = c[f], l = -1 !== g.indexOf("px") ? parseFloat(g) : ja(this.t, f, parseFloat(g), g.replace(I, "")) || 0, g = l !== b[f] ? 2 > fb ? -b.ieOffsetX : -b.ieOffsetY : 2 > fb ? O - b.ieOffsetX : p - b.ieOffsetY, d[f] = (b[f] = Math.round(l - g * (0 === fb || 2 === fb ? 1 : a))) + "px"
                }
            }, Ln = function() {
                var a = this.data,
                    b = this.t.style,
                    c = a.rotation * W,
                    d = a.scaleX,
                    f = a.scaleY,
                    g = a.scaleZ,
                    h = a.perspective,
                    q, k, l, u, m, r, G, n, p, ja, s, ca, ya, C, R, A, y, ia, M, F, H;
                Vd && (q = b.top ? "top" : b.bottom ? "bottom" : parseFloat(O(this.t,
                    "top", null, !1)) ? "bottom" : "top", M = O(this.t, q, null, !1), k = parseFloat(M) || 0, l = M.substr((k + "").length) || "px", a._ffFix = !a._ffFix, b[q] = (a._ffFix ? k + 0.05 : k - 0.05) + l);
                if (c || a.skewX) y = Math.cos(c), ia = Math.sin(c), q = y, m = ia, a.skewX && (c -= a.skewX * W, y = Math.cos(c), ia = Math.sin(c)), k = -ia, r = y;
                else if (a.rotationY || a.rotationX || 1 !== g || h) q = r = 1, k = m = 0;
                else {
                    b[Eb] = "translate3d(" + a.x + "px," + a.y + "px," + a.z + "px)" + (1 !== d || 1 !== f ? " scale(" + d + "," + f + ")" : "");
                    return
                }
                s = 1;
                l = u = G = n = p = ja = ca = ya = C = 0;
                R = h ? -1 / h : 0;
                A = a.zOrigin;
                if (c = a.rotationY * W) y = Math.cos(c),
                ia = Math.sin(c), p = s * -ia, ya = R * -ia, l = q * ia, G = m * ia, s *= y, R *= y, q *= y, m *= y;
                if (c = a.rotationX * W) y = Math.cos(c), ia = Math.sin(c), M = k * y + l * ia, c = r * y + G * ia, F = ja * y + s * ia, H = C * y + R * ia, l = k * -ia + l * y, G = r * -ia + G * y, s = ja * -ia + s * y, R = C * -ia + R * y, k = M, r = c, ja = F, C = H;
                1 !== g && (l *= g, G *= g, s *= g, R *= g);
                1 !== f && (k *= f, r *= f, ja *= f, C *= f);
                1 !== d && (q *= d, m *= d, p *= d, ya *= d);
                A && (ca -= A, u = l * ca, n = G * ca, ca = s * ca + A);
                u = (M = (u += a.x) - (u |= 0)) ? (1E5 * M + (0 > M ? -0.5 : 0.5) | 0) / 1E5 + u : u;
                n = (M = (n += a.y) - (n |= 0)) ? (1E5 * M + (0 > M ? -0.5 : 0.5) | 0) / 1E5 + n : n;
                ca = (M = (ca += a.z) - (ca |= 0)) ? (1E5 * M + (0 > M ? -0.5 :
                    0.5) | 0) / 1E5 + ca : ca;
                b[Eb] = "matrix3d(" + [(1E5 * q | 0) / 1E5, (1E5 * m | 0) / 1E5, (1E5 * p | 0) / 1E5, (1E5 * ya | 0) / 1E5, (1E5 * k | 0) / 1E5, (1E5 * r | 0) / 1E5, (1E5 * ja | 0) / 1E5, (1E5 * C | 0) / 1E5, (1E5 * l | 0) / 1E5, (1E5 * G | 0) / 1E5, (1E5 * s | 0) / 1E5, (1E5 * R | 0) / 1E5, u, n, ca, h ? 1 + -ca / h : 1].join() + ")"
            }, Mn = function() {
                var a = this.data,
                    b = this.t,
                    c = b.style,
                    d, f, g;
                Vd && (d = c.top ? "top" : c.bottom ? "bottom" : parseFloat(O(b, "top", null, !1)) ? "bottom" : "top", f = O(b, d, null, !1), b = parseFloat(f) || 0, f = f.substr((b + "").length) || "px", a._ffFix = !a._ffFix, c[d] = (a._ffFix ? b + 0.05 : b - 0.05) + f);
                a.rotation ||
                    a.skewX ? (d = a.rotation * W, b = d - a.skewX * W, f = 1E5 * a.scaleX, g = 1E5 * a.scaleY, c[Eb] = "matrix(" + (Math.cos(d) * f | 0) / 1E5 + "," + (Math.sin(d) * f | 0) / 1E5 + "," + (Math.sin(b) * -g | 0) / 1E5 + "," + (Math.cos(b) * g | 0) / 1E5 + "," + a.x + "," + a.y + ")") : c[Eb] = "matrix(" + a.scaleX + ",0,0," + a.scaleY + "," + a.x + "," + a.y + ")"
            };
        ta("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(a, b, c, d, f, h, q) {
                if (d._transform) return f;
                b = d._transform = ef(a, g, !0, q.parseTransform);
                var k = a.style,
                    l = ll.length,
                    u = {}, m, r, G, n, p;
                if ("string" === typeof q.transform && Eb) r = k.cssText, k[Eb] = q.transform, k.display = "block", m = ef(a, null, !1), k.cssText = r;
                else if ("object" === typeof q) {
                    m = {
                        scaleX: dd(null != q.scaleX ? q.scaleX : q.scale, b.scaleX),
                        scaleY: dd(null != q.scaleY ? q.scaleY : q.scale, b.scaleY),
                        scaleZ: dd(null != q.scaleZ ? q.scaleZ : q.scale, b.scaleZ),
                        x: dd(q.x, b.x),
                        y: dd(q.y, b.y),
                        z: dd(q.z, b.z),
                        perspective: dd(q.transformPerspective,
                            b.perspective)
                    };
                    c = q.directionalRotation;
                    if (null != c)
                        if ("object" === typeof c)
                            for (r in c) q[r] = c[r];
                        else q.rotation = c;
                    m.rotation = ff("rotation" in q ? q.rotation : "shortRotation" in q ? q.shortRotation + "_short" : "rotationZ" in q ? q.rotationZ : b.rotation, b.rotation, "rotation", u);
                    Gc && (m.rotationX = ff("rotationX" in q ? q.rotationX : "shortRotationX" in q ? q.shortRotationX + "_short" : b.rotationX || 0, b.rotationX, "rotationX", u), m.rotationY = ff("rotationY" in q ? q.rotationY : "shortRotationY" in q ? q.shortRotationY + "_short" : b.rotationY ||
                        0, b.rotationY, "rotationY", u));
                    m.skewX = null == q.skewX ? b.skewX : ff(q.skewX, b.skewX);
                    m.skewY = null == q.skewY ? b.skewY : ff(q.skewY, b.skewY);
                    if (r = m.skewY - b.skewY) m.skewX += r, m.rotation += r
                }
                null != q.force3D && (b.force3D = q.force3D, p = !0);
                n = b.force3D || b.z || b.rotationX || b.rotationY || m.z || m.rotationX || m.rotationY || m.perspective;
                n || null == q.scale || (m.scaleZ = 1);
                for (; - 1 < --l;)
                    if (c = ll[l], G = m[c] - b[c], 1E-6 < G || -1E-6 > G || null != A[c]) p = !0, f = new Ma(b, c, b[c], G, f), c in u && (f.e = u[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n);
                if ((G =
                    q.transformOrigin) || Gc && n && b.zOrigin) Eb ? (p = !0, c = fi, G = (G || O(a, c, g, !1, "50% 50%")) + "", f = new Ma(k, c, 0, 0, f, -1, "transformOrigin"), f.b = k[c], f.plugin = h, Gc ? (r = b.zOrigin, G = G.split(" "), b.zOrigin = (2 < G.length && (0 === r || "0px" !== G[2]) ? parseFloat(G[2]) : r) || 0, f.xs0 = f.e = k[c] = G[0] + " " + (G[1] || "50%") + " 0px", f = new Ma(b, "zOrigin", 0, 0, f, -1, f.n), f.b = r, f.xs0 = f.e = b.zOrigin) : f.xs0 = f.e = k[c] = G) : ci(G + "", b);
                p && (d._transformType = n || 3 === this._transformType ? 3 : 2);
                return f
            },
            prefix: !0
        });
        ta("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        });
        ta("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, d, h) {
                b = this.format(b);
                d = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
                var q = a.style,
                    k, l, u, m, r, n, p, s, ca, ya, y, R;
                s = parseFloat(a.offsetWidth);
                ca = parseFloat(a.offsetHeight);
                b = b.split(" ");
                for (k = 0; k < d.length; k++) this.p.indexOf("border") && (d[k] = G(d[k])), m = u = O(a, d[k], g, !1, "0px"), -1 !== m.indexOf(" ") && (u = m.split(" "), m = u[0], u = u[1]), r = l = b[k], n = parseFloat(m),
                y = m.substr((n + "").length), (R = "=" === r.charAt(1)) ? (p = parseInt(r.charAt(0) + "1", 10), r = r.substr(2), p *= parseFloat(r), ya = r.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(r), ya = r.substr((p + "").length)), "" === ya && (ya = f[c] || y), ya !== y && (m = ja(a, "borderLeft", n, y), n = ja(a, "borderTop", n, y), "%" === ya ? (m = m / s * 100 + "%", u = n / ca * 100 + "%") : "em" === ya ? (y = ja(a, "borderLeft", 1, "em"), m = m / y + "em", u = n / y + "em") : (m += "px", u = n + "px"), R && (r = parseFloat(m) + p + ya, l = parseFloat(u) + p + ya)), h = ug(q, d[k], m + " " + u, r + " " + l, !1, "0px", h);
                return h
            },
            prefix: !0,
            formatter: il("0px 0px 0px 0px", !1, !0)
        });
        ta("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, h) {
                c = g || u(a, null);
                c = this.format((c ? eb ? c.getPropertyValue("background-position-x") + " " + c.getPropertyValue("background-position-y") : c.getPropertyValue("background-position") : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0");
                b = this.format(b);
                var q, k, l, m;
                if (-1 !== c.indexOf("%") !== (-1 !== b.indexOf("%")) && (k = O(a, "backgroundImage").replace(T, "")) && "none" !== k) {
                    d = c.split(" ");
                    q = b.split(" ");
                    bf.setAttribute("src", k);
                    for (k = 2; - 1 < --k;) c = d[k], l = -1 !== c.indexOf("%"), l !== (-1 !== q[k].indexOf("%")) && (m = 0 === k ? a.offsetWidth - bf.width : a.offsetHeight - bf.height, d[k] = l ? parseFloat(c) / 100 * m + "px" : parseFloat(c) / m * 100 + "%");
                    c = d.join(" ")
                }
                return this.parseComplex(a.style, c, b, f, h)
            },
            formatter: ci
        });
        ta("backgroundSize", {
            defaultValue: "0 0",
            formatter: ci
        });
        ta("perspective", {
            defaultValue: "0px",
            prefix: !0
        });
        ta("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        });
        ta("transformStyle", {
            prefix: !0
        });
        ta("backfaceVisibility", {
            prefix: !0
        });
        ta("userSelect", {
            prefix: !0
        });
        ta("margin", {
            parser: jl("marginTop,marginRight,marginBottom,marginLeft")
        });
        ta("padding", {
            parser: jl("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        ta("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, h) {
                9 > eb ? (d = a.currentStyle, c = 8 > eb ? " " : ",", d = "rect(" + d.clipTop + c + d.clipRight + c + d.clipBottom + c + d.clipLeft + ")", b = this.format(b).split(",").join(c)) : (d = this.format(O(a, this.p, g, !1, this.dflt)), b = this.format(b));
                return this.parseComplex(a.style,
                    d, b, f, h)
            }
        });
        ta("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        });
        ta("autoRound,strictUnits", {
            parser: function(a, b, c, d, f) {
                return f
            }
        });
        ta("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, h) {
                return this.parseComplex(a.style, this.format(O(a, "borderTopWidth", g, !1, "0px") + " " + O(a, "borderTopStyle", g, !1, "solid") + " " + O(a, "borderTopColor", g, !1, "#000")), this.format(b), f, h)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ed) || ["#000"])[0]
            }
        });
        ta("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, f) {
                a = a.style;
                d = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new Ma(a, d, 0, 0, f, -1, c, !1, 0, a[d], b)
            }
        });
        var Nn = function(a) {
            var b = this.t,
                c = b.filter || O(this.data, "filter");
            a = this.s + this.c * a | 0;
            var d;
            100 === a && (-1 === c.indexOf("atrix(") && -1 === c.indexOf("radient(") && -1 === c.indexOf("oader(") ? (b.removeAttribute("filter"), d = !O(this.data, "filter")) : (b.filter = c.replace(r, ""), d = !0));
            d || (this.xn1 && (b.filter = c = c || "alpha(opacity=" + a + ")"), -1 === c.indexOf("opacity") ?
                0 === a && this.xn1 || (b.filter = c + " alpha(opacity=" + a + ")") : b.filter = c.replace(F, "opacity=" + a))
        };
        ta("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, h) {
                var q = parseFloat(O(a, "opacity", g, !1, "1")),
                    k = a.style,
                    l = "autoAlpha" === c;
                "string" === typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + q);
                l && 1 === q && "hidden" === O(a, "visibility", g) && 0 !== b && (q = 0);
                tb ? f = new Ma(k, "opacity", q, b - q, f) : (f = new Ma(k, "opacity", 100 * q, 100 * (b - q), f), f.xn1 = l ? 1 : 0, k.zoom = 1, f.type = 2, f.b = "alpha(opacity=" +
                    f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = h, f.setRatio = Nn);
                l && (f = new Ma(k, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== q ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c));
                return f
            }
        });
        var gi = function(a, b) {
            b && (a.removeProperty ? a.removeProperty(b.replace(M, "-$1").toLowerCase()) : a.removeAttribute(b))
        }, On = function(a) {
                this.t._gsClassPT = this;
                if (1 === a || 0 === a) {
                    this.t.className = 0 === a ? this.b : this.e;
                    for (var b = this.data, c = this.t.style; b;) b.v ?
                        c[b.p] = b.v : gi(c, b.p), b = b._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        ta("className", {
            parser: function(a, b, c, f, h, q, k) {
                var l = a.className,
                    u = a.style.cssText,
                    m, r, G;
                h = f._classNamePT = new Ma(a, c, 0, 0, h, 2);
                h.setRatio = On;
                h.pr = -11;
                d = !0;
                h.b = l;
                c = ia(a, g);
                if (m = a._gsClassPT) {
                    r = {};
                    for (G = m.data; G;) r[G.p] = 1, G = G._next;
                    m.setRatio(1)
                }
                a._gsClassPT = h;
                h.e = "=" !== b.charAt(1) ? b : l.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ?
                    " " + b.substr(2) : "");
                f._tween._duration && (a.className = h.e, b = ca(a, c, ia(a), k, r), a.className = l, h.data = b.firstMPT, a.style.cssText = u, h = h.xfirst = f.parse(a, b.difs, h, q));
                return h
            }
        });
        var Pn = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                a = this.t.style;
                var b = k.transform.parse,
                    c, d, f, g;
                if ("all" === this.e) a.cssText = "", g = !0;
                else
                    for (c = this.e.split(","), f = c.length; - 1 < --f;) d = c[f], k[d] && (k[d].parse === b ? g = !0 : d = "transformOrigin" === d ? fi : k[d].p), gi(a, d);
                g &&
                    (gi(a, Eb), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        ta("clearProps", {
            parser: function(a, b, c, f, g) {
                g = new Ma(a, c, 0, 0, g, 2);
                g.setRatio = Pn;
                g.e = b;
                g.pr = -10;
                g.data = f._tween;
                d = !0;
                return g
            }
        });
        m = ["bezier", "throwProps", "physicsProps", "physics2D"];
        for (fb = m.length; fb--;) In(m[fb]);
        m = c.prototype;
        m._firstPT = null;
        m._onInitTween = function(a, b, q) {
            if (!a.nodeType) return !1;
            this._target = a;
            this._tween = q;
            this._vars = b;
            Db = b.autoRound;
            d = !1;
            f = b.suffixMap || c.suffixMap;
            g = u(a, "");
            h = this._overwriteProps;
            q = a.style;
            var k, l, m,
                r;
            tg && "" === q.zIndex && (k = O(a, "zIndex", g), "auto" === k || "" === k) && (q.zIndex = 0);
            "string" === typeof b && (l = q.cssText, k = ia(a, g), q.cssText = l + ";" + b, k = ca(a, k, ia(a)).difs, !tb && qa.test(b) && (k.opacity = parseFloat(RegExp.$1)), b = k, q.cssText = l);
            this._firstPT = b = this.parse(a, b, null);
            if (this._transformType) {
                k = 3 === this._transformType;
                Eb ? Ud && (tg = !0, "" === q.zIndex && (r = O(a, "zIndex", g), "auto" === r || "" === r) && (q.zIndex = 0), Wb && (q.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : q.zoom = 1;
                for (q =
                    b; q && q._next;) q = q._next;
                r = new Ma(a, "transform", 0, 0, null, 2);
                this._linkCSSP(r, null, q);
                r.setRatio = k && Gc ? Ln : Eb ? Mn : Kn;
                r.data = this._transform || ef(a, g, !0);
                h.pop()
            }
            if (d) {
                for (; b;) {
                    a = b._next;
                    for (q = l; q && q.pr > b.pr;) q = q._next;
                    (b._prev = q ? q._prev : m) ? b._prev._next = b : l = b;
                    (b._next = q) ? q._prev = b : m = b;
                    b = a
                }
                this._firstPT = l
            }
            return !0
        };
        m.parse = function(a, b, c, d) {
            var h = a.style,
                q, l, u, m, r, G, n, p;
            for (q in b) {
                r = b[q];
                if (l = k[q]) c = l.parse(a, r, q, this, c, d, b);
                else if (m = O(a, q, g) + "", n = "string" === typeof r, "color" === q || "fill" === q || "stroke" ===
                    q || -1 !== q.indexOf("Color") || n && R.test(r)) n || (r = ei(r), r = (3 < r.length ? "rgba(" : "rgb(") + r.join(",") + ")"), c = ug(h, q, m, r, !0, "transparent", c, 0, d);
                else if (!n || -1 === r.indexOf(" ") && -1 === r.indexOf(",")) {
                    G = (l = parseFloat(m)) || 0 === l ? m.substr((l + "").length) : "";
                    if ("" === m || "auto" === m) "width" === q || "height" === q ? (l = Hn(a, q, g), G = "px") : "left" === q || "top" === q ? (l = ya(a, q, g), G = "px") : (l = "opacity" !== q ? 0 : 1, G = "");
                    (p = n && "=" === r.charAt(1)) ? (u = parseInt(r.charAt(0) + "1", 10), r = r.substr(2), u *= parseFloat(r), n = r.replace(I, "")) : (u = parseFloat(r),
                        n = n ? r.substr((u + "").length) || "" : "");
                    "" === n && (n = f[q] || G);
                    r = u || 0 === u ? (p ? u + l : u) + n : b[q];
                    G === n || "" === n || !u && 0 !== u || !l && 0 !== l || (l = ja(a, q, l, G), "%" === n ? (l /= ja(a, q, 100, "%") / 100, 100 < l && (l = 100), !0 !== b.strictUnits && (m = l + "%")) : "em" === n ? l /= ja(a, q, 1, "em") : (u = ja(a, q, u, n), n = "px"), p && (u || 0 === u) && (r = u + l + n));
                    p && (u += l);
                    !l && 0 !== l || !u && 0 !== u ? void 0 !== h[q] && (r || "NaN" !== r + "" && null != r) ? (c = new Ma(h, q, u || l || 0, 0, c, -1, q, !1, 0, m, r), c.xs0 = "none" !== r || "display" !== q && -1 === q.indexOf("Style") ? r : m) : df("invalid " + q + " tween value: " + b[q]) :
                        (c = new Ma(h, q, l, u - l, c, 0, q, !1 !== Db && ("px" === n || "zIndex" === q), 0, m, r), c.xs0 = n)
                } else c = ug(h, q, m, r, !0, null, c, 0, d);
                d && c && !c.plugin && (c.plugin = d)
            }
            return c
        };
        m.setRatio = function(a) {
            var b = this._firstPT,
                c, d;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1E-6 === this._tween._rawPrevTime)
                    for (; b;) {
                        c = b.c * a + b.s;
                        b.r ? c = 0 < c ? c + 0.5 | 0 : c - 0.5 | 0 : 1E-6 > c && -1E-6 < c && (c = 0);
                        if (b.type)
                            if (1 === b.type)
                                if (d = b.l, 2 === d) b.t[b.p] = b.xs0 + c +
                                    b.xs1 + b.xn1 + b.xs2;
                                else if (3 === d) b.t[b.p] = b.xs0 + c + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3;
                        else if (4 === d) b.t[b.p] = b.xs0 + c + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4;
                        else if (5 === d) b.t[b.p] = b.xs0 + c + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4 + b.xn4 + b.xs5;
                        else {
                            c = b.xs0 + c + b.xs1;
                            for (d = 1; d < b.l; d++) c += b["xn" + d] + b["xs" + (d + 1)];
                            b.t[b.p] = c
                        } else -1 === b.type ? b.t[b.p] = b.xs0 : b.setRatio && b.setRatio(a);
                        else b.t[b.p] = c + b.xs0;
                        b = b._next
                    } else
                        for (; b;) 2 !== b.type ? b.t[b.p] = b.b : b.setRatio(a), b = b._next;
                else
                    for (; b;) 2 !== b.type ? b.t[b.p] = b.e :
                        b.setRatio(a), b = b._next
        };
        m._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
            this._transform = this._transform || ef(this._target, g, !0)
        };
        m._linkCSSP = function(a, b, c, d) {
            a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c);
            return a
        };
        m._kill = function(b) {
            var c = b,
                d, f;
            if (b.autoAlpha || b.alpha) {
                c = {};
                for (f in b) c[f] = b[f];
                c.opacity =
                    1;
                c.autoAlpha && (c.visibility = 1)
            }
            b.className && (d = this._classNamePT) && ((b = d.xfirst) && b._prev ? this._linkCSSP(b._prev, d._next, b._prev._prev) : b === this._firstPT && (this._firstPT = d._next), d._next && this._linkCSSP(d._next, d._next._next, b._prev), this._classNamePT = null);
            return a.prototype._kill.call(this, c)
        };
        var vg = function(a, b, c) {
            var d, f, g;
            if (a.slice)
                for (d = a.length; - 1 < --d;) vg(a[d], b, c);
            else
                for (a = a.childNodes, d = a.length; - 1 < --d;) f = a[d], g = f.type, f.style && (b.push(ia(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length ||
                    vg(f, b, c)
        };
        c.cascadeTo = function(a, c, d) {
            var f = b.to(a, c, d),
                g = [f],
                h = [],
                q = [],
                k = [],
                l = b._internals.reservedProps,
                u;
            a = f._targets || f.target;
            vg(a, h, k);
            f.render(c, !0);
            vg(a, q);
            f.render(0, !0);
            f._enabled(!0);
            for (a = k.length; - 1 < --a;)
                if (f = ca(k[a], h[a], q[a]), f.firstMPT) {
                    f = f.difs;
                    for (u in d) l[u] && (f[u] = d[u]);
                    g.push(b.to(k[a], c, f))
                }
            return g
        };
        a.activate([c]);
        return c
    }, !0);
    (function() {
        var a = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(a, c, d) {
                this._tween = d;
                return !0
            }
        }).prototype;
        a._onInitAllProps =
            function() {
                for (var a = this._tween, c = a.vars.roundProps instanceof Array ? a.vars.roundProps : a.vars.roundProps.split(","), d = c.length, f = {}, g = a._propLookup.roundProps, h, k, m; - 1 < --d;) f[c[d]] = 1;
                for (d = c.length; - 1 < --d;)
                    for (h = c[d], k = a._firstPT; k;) m = k._next, k.pg ? k.t._roundProps(f, !0) : k.n === h && (this._add(k.t, h, k.s, k.c), m && (m._prev = k._prev), k._prev ? k._prev._next = m : a._firstPT === k && (a._firstPT = m), k._next = k._prev = null, a._propLookup[h] = g), k = m;
                return !1
        };
        a._add = function(a, c, d, f) {
            this._addTween(a, c, d, d + f, c, !0);
            this._overwriteProps.push(c)
        }
    })();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(a, b) {
            var c;
            if ("function" !== typeof a.setAttribute) return !1;
            this._target = a;
            this._proxy = {};
            for (c in b) this._addTween(this._proxy, c, parseFloat(a.getAttribute(c)), b[c], c) && this._overwriteProps.push(c);
            return !0
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            a = this._overwriteProps;
            for (var b = a.length, c; - 1 < --b;) c = a[b], this._target.setAttribute(c, this._proxy[c] + "")
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(a,
            b) {
            "object" !== typeof b && (b = {
                rotation: b
            });
            this.finals = {};
            var c = !0 === b.useRadians ? 2 * Math.PI : 360,
                d, f, g, h, k;
            for (d in b) "useRadians" !== d && (k = (b[d] + "").split("_"), f = k[0], g = parseFloat("function" !== typeof a[d] ? a[d] : a[d.indexOf("set") || "function" !== typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]()), f = this.finals[d] = "string" === typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, h = f - g, k.length && (f = k.join("_"), -1 !== f.indexOf("short") && (h %= c, h !== h % (c / 2) && (h = 0 > h ? h + c : h - c)), -1 !== f.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * c) % c - (h / c | 0) * c : -1 !== f.indexOf("ccw") && 0 < h && (h = (h - 9999999999 * c) % c - (h / c | 0) * c)), 1E-6 < h || -1E-6 > h) && (this._addTween(a, d, g, g + h, d), this._overwriteProps.push(d));
            return !0
        },
        set: function(a) {
            if (1 !== a) this._super.setRatio.call(this, a);
            else
                for (a = this._firstPT; a;) {
                    if (a.f) a.t[a.p](this.finals[a.p]);
                    else a.t[a.p] = this.finals[a.p];
                    a = a._next
                }
        }
    })._autoCSS = !0;
    window._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var b = window.GreenSockGlobals || window,
            c = 2 * Math.PI,
            d = Math.PI /
                2,
            f = b.com.greensock._class,
            g = function(b, c) {
                var d = f("easing." + b, function() {}, !0),
                    g = d.prototype = new a;
                g.constructor = d;
                g.getRatio = c;
                return d
            }, h = a.register || function() {}, k = function(a, b, c, d) {
                b = f("easing." + a, {
                    easeOut: new b,
                    easeIn: new c,
                    easeInOut: new d
                }, !0);
                h(b, a);
                return b
            }, m = function(a, b, c) {
                this.t = a;
                this.v = b;
                c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
            }, p = function(b, c) {
                var d = f("easing." + b, function(a) {
                    this._p1 = a || 0 === a ? a : 1.70158;
                    this._p2 = 1.525 * this._p1
                }, !0),
                    g = d.prototype = new a;
                g.constructor =
                    d;
                g.getRatio = c;
                g.config = function(a) {
                    return new d(a)
                };
                return d
            }, l = k("Back", p("BackOut", function(a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
            }), p("BackIn", function(a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), p("BackInOut", function(a) {
                return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })),
            n = f("easing.SlowMo", function(a, b, c) {
                null == a ? a = 0.7 : 1 < a && (a = 1);
                this._p = 1 !== a ? b || 0 === b ? b : 0.7 : 0;
                this._p1 = (1 - a) / 2;
                this._p2 = a;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = !0 === c
            }, !0),
            s =
                n.prototype = new a,
            I, F, qa;
        s.constructor = n;
        s.getRatio = function(a) {
            var b = a + (0.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        };
        n.ease = new n(0.7, 0.7);
        s.config = n.config = function(a, b, c) {
            return new n(a, b, c)
        };
        I = f("easing.SteppedEase", function(a) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + 1
        }, !0);
        s = I.prototype = new a;
        s.constructor = I;
        s.getRatio = function(a) {
            0 > a ? a = 0 :
                1 <= a && (a = 0.999999999);
            return (this._p2 * a >> 0) * this._p1
        };
        s.config = I.config = function(a) {
            return new I(a)
        };
        F = f("easing.RoughEase", function(b) {
            b = b || {};
            var c = b.taper || "none",
                d = [],
                f = 0,
                g = (b.points || 20) | 0,
                h = g,
                k = !1 !== b.randomize,
                l = !0 === b.clamp,
                n = b.template instanceof a ? b.template : null;
            b = "number" === typeof b.strength ? 0.4 * b.strength : 0.4;
            for (var p, s, F; - 1 < --h;) p = k ? Math.random() : 1 / g * h, s = n ? n.getRatio(p) : p, "none" === c ? F = b : "out" === c ? (F = 1 - p, F = F * F * b) : "in" === c ? F = p * p * b : (F = 0.5 > p ? 2 * p : 2 * (1 - p), F = F * F * 0.5 * b), s = k ? s + (Math.random() *
                F - 0.5 * F) : h % 2 ? s + 0.5 * F : s - 0.5 * F, l && (1 < s ? s = 1 : 0 > s && (s = 0)), d[f++] = {
                x: p,
                y: s
            };
            d.sort(function(a, b) {
                return a.x - b.x
            });
            c = new m(1, 1, null);
            for (h = g; - 1 < --h;) g = d[h], c = new m(g.x, g.y, c);
            this._prev = new m(0, 0, 0 !== c.t ? c : c.next)
        }, !0);
        s = F.prototype = new a;
        s.constructor = F;
        s.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t;) b = b.next;
                b = b.prev
            } else
                for (; b.prev && a <= b.t;) b = b.prev;
            this._prev = b;
            return b.v + (a - b.t) / b.gap * b.c
        };
        s.config = function(a) {
            return new F(a)
        };
        F.ease = new F;
        k("Bounce", g("BounceOut", function(a) {
            return a <
                1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        }), g("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        }), g("BounceInOut", function(a) {
            var b = 0.5 > a;
            a = b ? 1 - 2 * a : 2 * a - 1;
            a = a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a +
                0.984375;
            return b ? 0.5 * (1 - a) : 0.5 * a + 0.5
        }));
        k("Circ", g("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), g("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), g("CircInOut", function(a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }));
        qa = function(b, d, g) {
            var h = f("easing." + b, function(a, b) {
                this._p1 = a || 1;
                this._p2 = b || g;
                this._p3 = this._p2 / c * (Math.asin(1 / this._p1) || 0)
            }, !0);
            b = h.prototype = new a;
            b.constructor = h;
            b.getRatio = d;
            b.config = function(a, b) {
                return new h(a, b)
            };
            return h
        };
        k("Elastic",
            qa("ElasticOut", function(a) {
                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * c / this._p2) + 1
            }, 0.3), qa("ElasticIn", function(a) {
                return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * c / this._p2))
            }, 0.3), qa("ElasticInOut", function(a) {
                return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * c / this._p2) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * c / this._p2) * 0.5 + 1
            }, 0.45));
        k("Expo", g("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), g("ExpoIn", function(a) {
            return Math.pow(2,
                10 * (a - 1)) - 0.001
        }), g("ExpoInOut", function(a) {
            return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
        }));
        k("Sine", g("SineOut", function(a) {
            return Math.sin(a * d)
        }), g("SineIn", function(a) {
            return -Math.cos(a * d) + 1
        }), g("SineInOut", function(a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        }));
        f("easing.EaseLookup", {
            find: function(b) {
                return a.map[b]
            }
        }, !0);
        h(b.SlowMo, "SlowMo", "ease,");
        h(F, "RoughEase", "ease,");
        h(I, "SteppedEase", "ease,");
        return l
    }, !0)
});
(function(a) {
    var b = a.GreenSockGlobals || a;
    if (!b.TweenLite) {
        var c = function(a) {
            a = a.split(".");
            var c = b,
                d;
            for (d = 0; d < a.length; d++) c[a[d]] = c = c[a[d]] || {};
            return c
        }, d = c("com.greensock"),
            f = 1E-10,
            g = [].slice,
            h = function() {}, k = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return c instanceof Array || "object" === typeof c && !! c.push && a.call(c) === b
                }
            }(),
            m, p, l, n, s, I = {}, F = function(d, f, g, h) {
                this.sc = I[d] ? I[d].sc : [];
                I[d] = this;
                this.gsClass = null;
                this.func = g;
                var k = [];
                this.check = function(l) {
                    for (var m =
                        f.length, n = m, p, r; - 1 < --m;)(p = I[f[m]] || new F(f[m], [])).gsClass ? (k[m] = p.gsClass, n--) : l && p.sc.push(this);
                    if (0 === n && g)
                        for (l = ("com.greensock." + d).split("."), m = l.pop(), r = c(l.join("."))[m] = this.gsClass = g.apply(g, k), h && (b[m] = r, "function" === typeof a.define && a.define.amd ? a.define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").join("/"), [], function() {
                            return r
                        }) : "undefined" !== typeof a.module && a.module.exports && (a.module.exports = r)), m = 0; m < this.sc.length; m++) this.sc[m].check()
                };
                this.check(!0)
            }, qa = a._gsDefine =
                function(a, b, c, d) {
                    return new F(a, b, c, d)
            }, r = d._class = function(a, b, c) {
                b = b || function() {};
                qa(a, [], function() {
                    return b
                }, c);
                return b
            };
        qa.globals = b;
        var R = [0, 0, 1, 1],
            M = [],
            Ua = r("easing.Ease", function(a, b, c, d) {
                this._func = a;
                this._type = c || 0;
                this._power = d || 0;
                this._params = b ? R.concat(b) : R
            }, !0),
            T = Ua.map = {}, Xa = Ua.register = function(a, b, c, f) {
                b = b.split(",");
                var g = b.length;
                c = (c || "easeIn,easeOut,easeInOut").split(",");
                for (var h, k, l, m; - 1 < --g;)
                    for (k = b[g], h = f ? r("easing." + k, null, !0) : d.easing[k] || {}, l = c.length; - 1 < --l;) m = c[l],
                T[k + "." + m] = T[m + k] = h[m] = a.getRatio ? a : a[m] || new a
            };
        l = Ua.prototype;
        l._calcEnd = !1;
        l.getRatio = function(a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type,
                c = this._power,
                d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d);
            return 1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
        };
        m = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
        for (p = m.length; - 1 < --p;) l = m[p] + ",Power" + p, Xa(new Ua(null, null, 1, p), l, "easeOut", !0), Xa(new Ua(null, null, 2,
            p), l, "easeIn" + (0 === p ? ",easeNone" : "")), Xa(new Ua(null, null, 3, p), l, "easeInOut");
        T.linear = d.easing.Linear.easeIn;
        T.swing = d.easing.Quad.easeInOut;
        var ea = r("events.EventDispatcher", function(a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        l = ea.prototype;
        l.addEventListener = function(a, b, c, d, f) {
            f = f || 0;
            var g = this._listeners[a],
                h = 0,
                k;
            null == g && (this._listeners[a] = g = []);
            for (k = g.length; - 1 < --k;) a = g[k], a.c === b && a.s === c ? g.splice(k, 1) : 0 === h && a.pr < f && (h = k + 1);
            g.splice(h, 0, {
                c: b,
                s: c,
                up: d,
                pr: f
            });
            this !== n || s || n.wake()
        };
        l.removeEventListener = function(a, b) {
            var c = this._listeners[a],
                d;
            if (c)
                for (d = c.length; - 1 < --d;)
                    if (c[d].c === b) {
                        c.splice(d, 1);
                        break
                    }
        };
        l.dispatchEvent = function(a) {
            var b = this._listeners[a],
                c, d, f;
            if (b)
                for (c = b.length, d = this._eventTarget; - 1 < --c;) f = b[c], f.up ? f.c.call(f.s || d, {
                    type: a,
                    target: d
                }) : f.c.call(f.s || d)
        };
        var H = a.requestAnimationFrame,
            oa = a.cancelAnimationFrame,
            C = Date.now || function() {
                return (new Date).getTime()
            }, W = C();
        m = ["ms", "moz", "webkit", "o"];
        for (p = m.length; - 1 < --p && !H;) H = a[m[p] + "RequestAnimationFrame"],
        oa = a[m[p] + "CancelAnimationFrame"] || a[m[p] + "CancelRequestAnimationFrame"];
        r("Ticker", function(a, b) {
            var c = this,
                d = C(),
                f = !1 !== b && H,
                g, k, l, m, p, r = function(a) {
                    W = C();
                    c.time = (W - d) / 1E3;
                    var b = c.time - p,
                        f;
                    if (!g || 0 < b || !0 === a) c.frame++, p += b + (b >= m ? 0.004 : m - b), f = !0;
                    !0 !== a && (l = k(r));
                    f && c.dispatchEvent("tick")
                };
            ea.call(c);
            c.time = c.frame = 0;
            c.tick = function() {
                r(!0)
            };
            c.sleep = function() {
                null != l && (f && oa ? oa(l) : clearTimeout(l), k = h, l = null, c === n && (s = !1))
            };
            c.wake = function() {
                null !== l && c.sleep();
                k = 0 === g ? h : f && H ? H : function(a) {
                    return setTimeout(a,
                        1E3 * (p - c.time) + 1 | 0)
                };
                c === n && (s = !0);
                r(2)
            };
            c.fps = function(a) {
                if (!arguments.length) return g;
                g = a;
                m = 1 / (g || 60);
                p = this.time + m;
                c.wake()
            };
            c.useRAF = function(a) {
                if (!arguments.length) return f;
                c.sleep();
                f = a;
                c.fps(g)
            };
            c.fps(a);
            setTimeout(function() {
                f && (!l || 5 > c.frame) && c.useRAF(!1)
            }, 1500)
        });
        l = d.Ticker.prototype = new d.events.EventDispatcher;
        l.constructor = d.Ticker;
        var V = r("core.Animation", function(a, b) {
            this.vars = b = b || {};
            this._duration = this._totalDuration = a || 0;
            this._delay = Number(b.delay) || 0;
            this._timeScale = 1;
            this._active = !0 === b.immediateRender;
            this.data = b.data;
            this._reversed = !0 === b.reversed;
            if (eb) {
                s || n.wake();
                var c = this.vars.useFrames ? Wb : eb;
                c.add(this, c._time);
                this.vars.paused && this.paused(!0)
            }
        });
        n = V.ticker = new d.Ticker;
        l = V.prototype;
        l._dirty = l._gc = l._initted = l._paused = !1;
        l._totalTime = l._time = 0;
        l._rawPrevTime = -1;
        l._next = l._last = l._onUpdate = l._timeline = l.timeline = null;
        l._paused = !1;
        var A = function() {
            2E3 < C() - W && n.wake();
            setTimeout(A, 2E3)
        };
        A();
        l.play = function(a, b) {
            arguments.length && this.seek(a, b);
            return this.reversed(!1).paused(!1)
        };
        l.pause = function(a, b) {
            arguments.length && this.seek(a, b);
            return this.paused(!0)
        };
        l.resume = function(a, b) {
            arguments.length && this.seek(a, b);
            return this.paused(!1)
        };
        l.seek = function(a, b) {
            return this.totalTime(Number(a), !1 !== b)
        };
        l.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
        };
        l.reverse = function(a, b) {
            arguments.length && this.seek(a || this.totalDuration(), b);
            return this.reversed(!0).paused(!1)
        };
        l.render = function() {};
        l.invalidate = function() {
            return this
        };
        l.isActive =
            function() {
                var a = this._timeline,
                    b = this._startTime,
                    c;
                return !a || !this._gc && !this._paused && a.isActive() && (c = a.rawTime()) >= b && c < b + this.totalDuration() / this._timeScale
        };
        l._enabled = function(a, b) {
            s || n.wake();
            this._gc = !a;
            this._active = this.isActive();
            !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0));
            return !1
        };
        l._kill = function() {
            return this._enabled(!1, !1)
        };
        l.kill = function(a, b) {
            this._kill(a, b);
            return this
        };
        l._uncache = function(a) {
            for (a =
                a ? this : this.timeline; a;) a._dirty = !0, a = a.timeline;
            return this
        };
        l._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); - 1 < --b;) "{self}" === a[b] && (c[b] = this);
            return c
        };
        l.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var f = this.vars;
                if (1 === arguments.length) return f[a];
                null == b ? delete f[a] : (f[a] = b, f[a + "Params"] = k(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, f[a + "Scope"] = d);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        };
        l.delay = function(a) {
            if (!arguments.length) return this._delay;
            this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay);
            this._delay = a;
            return this
        };
        l.duration = function(a) {
            if (!arguments.length) return this._dirty = !1, this._duration;
            this._duration = this._totalDuration = a;
            this._uncache(!0);
            this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a / this._duration * this._totalTime, !0);
            return this
        };
        l.totalDuration = function(a) {
            this._dirty = !1;
            return arguments.length ? this.duration(a) : this._totalDuration
        };
        l.time =
            function(a, b) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                return this.totalTime(a > this._duration ? this._duration : a, b)
        };
        l.totalTime = function(a, b, c) {
            s || n.wake();
            if (!arguments.length) return this._totalTime;
            if (this._timeline) {
                0 > a && !c && (a += this.totalDuration());
                if (this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        f = this._timeline;
                    a > d && !c && (a = d);
                    this._startTime = (this._paused ? this._pauseTime : f._time) - (this._reversed ? d - a : a) / this._timeScale;
                    f._dirty || this._uncache(!1);
                    if (f._timeline)
                        for (; f._timeline;) f._timeline._time !== (f._startTime + f._totalTime) / f._timeScale && f.totalTime(f._totalTime, !0), f = f._timeline
                }
                this._gc && this._enabled(!0, !1);
                this._totalTime === a && 0 !== this._duration || this.render(a, b, !1)
            }
            return this
        };
        l.progress = l.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        };
        l.startTime = function(a) {
            if (!arguments.length) return this._startTime;
            a !== this._startTime && (this._startTime =
                a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay));
            return this
        };
        l.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            a = a || f;
            if (this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    b = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = b - (b - this._startTime) * this._timeScale / a
            }
            this._timeScale = a;
            return this._uncache(!1)
        };
        l.reversed = function(a) {
            if (!arguments.length) return this._reversed;
            a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0));
            return this
        };
        l.paused = function(a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                s || a || n.wake();
                var b = this._timeline,
                    c = b.rawTime(),
                    d = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1));
                this._pauseTime = a ? c : null;
                this._paused = a;
                this._active = this.isActive();
                !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
            }
            this._gc && !a && this._enabled(!0, !1);
            return this
        };
        m = r("core.SimpleTimeline", function(a) {
            V.call(this, 0, a);
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        l = m.prototype = new V;
        l.constructor = m;
        l.kill()._gc = !1;
        l._first = l._last = null;
        l._sortChildren = !1;
        l.add = l.insert = function(a, b) {
            var c, d;
            a._startTime = Number(b || 0) + a._delay;
            a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale);
            a.timeline && a.timeline._remove(a, !0);
            a.timeline = a._timeline = this;
            a._gc && a._enabled(!0, !0);
            c = this._last;
            if (this._sortChildren)
                for (d =
                    a._startTime; c && c._startTime > d;) c = c._prev;
            c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a);
            a._next ? a._next._prev = a : this._last = a;
            a._prev = c;
            this._timeline && this._uncache(!0);
            return this
        };
        l._remove = function(a, b) {
            a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0));
            return this
        };
        l.render = function(a, b, c) {
            var d = this._first,
                f;
            for (this._totalTime = this._time = this._rawPrevTime = a; d;) {
                f = d._next;
                if (d._active || a >= d._startTime && !d._paused) d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                d = f
            }
        };
        l.rawTime = function() {
            s || n.wake();
            return this._totalTime
        };
        var y = r("TweenLite", function(b, c, d) {
            V.call(this, c, d);
            this.render = y.prototype.render;
            if (null == b) throw "Cannot tween a null target.";
            this.target = b = "string" !== typeof b ? b : y.selector(b) || b;
            var f = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
            d = this.vars.overwrite;
            var h;
            this._overwrite = d = null == d ? Vd[y.defaultOverwrite] : "number" === typeof d ? d >> 0 : Vd[d];
            if ((f || b instanceof Array || b.push && k(b)) && "number" !== typeof b[0])
                for (this._targets = h = g.call(b, 0), this._propLookup = [], this._siblings = [], b = 0; b < h.length; b++)(f = h[b]) ? "string" === typeof f ? (f = h[b--] = y.selector(f), "string" === typeof f && h.splice(b + 1, 1)) : f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (h.splice(b--, 1), this._targets = h = h.concat(g.call(f, 0))) : (this._siblings[b] = tb(f, this, !1), 1 === d && 1 < this._siblings[b].length && Wd(f, this, null, 1, this._siblings[b])) : h.splice(b--, 1);
            else this._propLookup = {}, this._siblings = tb(b, this, !1), 1 === d && 1 < this._siblings.length && Wd(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
        }, !0),
            xa = function(b) {
                return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType &&
                    b[0].style && !b.nodeType)
            }, bf = function(a, b) {
                var c = {}, d;
                for (d in a) Ud[d] || d in b && "x" !== d && "y" !== d && "width" !== d && "height" !== d && "className" !== d && "border" !== d || !(!Va[d] || Va[d] && Va[d]._autoCSS) || (c[d] = a[d], delete a[d]);
                a.css = c
            };
        l = y.prototype = new V;
        l.constructor = y;
        l.kill()._gc = !1;
        l.ratio = 0;
        l._firstPT = l._targets = l._overwrittenProps = l._startAt = null;
        l._notifyPluginsOfEnabled = !1;
        y.version = "1.11.0";
        y.defaultEase = l._ease = new Ua(null, null, 1, 1);
        y.defaultOverwrite = "auto";
        y.ticker = n;
        y.autoSleep = !0;
        y.selector = a.$ ||
            a.jQuery || function(b) {
                return a.$ ? (y.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
        };
        var Td = y._internals = {
            isArray: k,
            isSelector: xa
        }, Va = y._plugins = {}, Db = y._tweenLookup = {}, tg = 0,
            Ud = Td.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            }, Vd = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            }, Wb = V._rootFramesTimeline = new m,
            eb = V._rootTimeline = new m;
        eb._startTime = n.time;
        Wb._startTime = n.frame;
        eb._active = Wb._active = !0;
        V._updateRoot = function() {
            eb.render((n.time - eb._startTime) * eb._timeScale, !1, !1);
            Wb.render((n.frame - Wb._startTime) * Wb._timeScale, !1, !1);
            if (!(n.frame % 120)) {
                var a,
                    b, c;
                for (c in Db) {
                    b = Db[c].tweens;
                    for (a = b.length; - 1 < --a;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete Db[c]
                }
                c = eb._first;
                if ((!c || c._paused) && y.autoSleep && !Wb._first && 1 === n._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || n.sleep()
                }
            }
        };
        n.addEventListener("tick", V._updateRoot);
        var tb = function(a, b, c) {
            var d = a._gsTweenID,
                f;
            Db[d || (a._gsTweenID = d = "t" + tg++)] || (Db[d] = {
                target: a,
                tweens: []
            });
            if (b && (a = Db[d].tweens, a[f = a.length] = b, c))
                for (; - 1 < --f;) a[f] === b && a.splice(f, 1);
            return Db[d].tweens
        }, Wd = function(a, b,
                c, d, g) {
                var h, k, l;
                if (1 === d || 4 <= d) {
                    a = g.length;
                    for (h = 0; h < a; h++)
                        if ((l = g[h]) !== b) l._gc || l._enabled(!1, !1) && (k = !0);
                        else if (5 === d) break;
                    return k
                }
                var m = b._startTime + f,
                    n = [],
                    p = 0,
                    r = 0 === b._duration,
                    s;
                for (h = g.length; - 1 < --h;)(l = g[h]) === b || l._gc || l._paused || (l._timeline !== b._timeline ? (s = s || df(b, 0, r), 0 === df(l, s, r) && (n[p++] = l)) : l._startTime <= m && l._startTime + l.totalDuration() / l._timeScale + f > m && ((r || !l._initted) && 2E-10 >= m - l._startTime || (n[p++] = l)));
                for (h = p; - 1 < --h;) l = n[h], 2 === d && l._kill(c, a) && (k = !0), (2 !== d || !l._firstPT &&
                    l._initted) && l._enabled(!1, !1) && (k = !0);
                return k
            }, df = function(a, b, c) {
                for (var d = a._timeline, g = d._timeScale, h = a._startTime; d._timeline;) {
                    h += d._startTime;
                    g *= d._timeScale;
                    if (d._paused) return -100;
                    d = d._timeline
                }
                h /= g;
                return h > b ? h - b : c && h === b || !a._initted && h - b < 2 * f ? f : (h += a.totalDuration() / a._timeScale / g) > b + f ? 0 : h - b - f
            };
        l._init = function() {
            var a = this.vars,
                b = this._overwrittenProps,
                c = this._duration,
                d = a.immediateRender,
                f = a.ease,
                g, h;
            if (a.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), a.startAt.overwrite = 0, a.startAt.immediateRender = !0, this._startAt = y.to(this.target, 0, a.startAt), d)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== c) return
            } else if (a.runBackwards && 0 !== c)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    c = {};
                    for (h in a) Ud[h] && "autoCSS" !== h || (c[h] = a[h]);
                    c.overwrite = 0;
                    c.data = "isFromStart";
                    this._startAt = y.to(this.target, 0, c);
                    if (!a.immediateRender) this._startAt.render(-1, !0);
                    else if (0 === this._time) return
                }
            this._ease = f ? f instanceof Ua ? a.easeParams instanceof Array ? f.config.apply(f, a.easeParams) : f : "function" ===
                typeof f ? new Ua(f, a.easeParams) : T[f] || y.defaultEase : y.defaultEase;
            this._easeType = this._ease._type;
            this._easePower = this._ease._power;
            this._firstPT = null;
            if (this._targets)
                for (f = this._targets.length; - 1 < --f;) this._initProps(this._targets[f], this._propLookup[f] = {}, this._siblings[f], b ? b[f] : null) && (g = !0);
            else g = this._initProps(this.target, this._propLookup, this._siblings, b);
            g && y._onPluginEvent("_onInitAllProps", this);
            b && (this._firstPT || "function" !== typeof this.target && this._enabled(!1, !1));
            if (a.runBackwards)
                for (c =
                    this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = a.onUpdate;
            this._initted = !0
        };
        l._initProps = function(b, c, d, f) {
            var g, h, l, m, n;
            if (null == b) return !1;
            this.vars.css || b.style && b !== a && b.nodeType && Va.css && !1 !== this.vars.autoCSS && bf(this.vars, b);
            for (g in this.vars) {
                h = this.vars[g];
                if (Ud[g]) h && (h instanceof Array || h.push && k(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[g] = this._swapSelfInParams(h, this));
                else if (Va[g] && (m = new Va[g])._onInitTween(b, this.vars[g], this)) {
                    this._firstPT = n = {
                        _next: this._firstPT,
                        t: m,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: g,
                        pg: !0,
                        pr: m._priority
                    };
                    for (h = m._overwriteProps.length; - 1 < --h;) c[m._overwriteProps[h]] = this._firstPT;
                    if (m._priority || m._onInitAllProps) l = !0;
                    if (m._onDisable || m._onEnable) this._notifyPluginsOfEnabled = !0
                } else this._firstPT = c[g] = n = {
                    _next: this._firstPT,
                    t: b,
                    p: g,
                    f: "function" === typeof b[g],
                    n: g,
                    pg: !1,
                    pr: 0
                }, n.s = n.f ? b[g.indexOf("set") || "function" !== typeof b["get" + g.substr(3)] ? g : "get" + g.substr(3)]() : parseFloat(b[g]), n.c = "string" === typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) +
                    "1", 10) * Number(h.substr(2)) : Number(h) - n.s || 0;
                n && n._next && (n._next._prev = n)
            }
            return f && this._kill(f, b) ? this._initProps(b, c, d, f) : 1 < this._overwrite && this._firstPT && 1 < d.length && Wd(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, f)) : l
        };
        l.render = function(a, b, c) {
            var d = this._time,
                g = this._duration,
                h, l, k, m;
            if (a >= g) this._totalTime = this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (h = !0, l = "onComplete"), 0 === g && (m = this._rawPrevTime, (0 === a || 0 > m || m === f) && m !== a &&
                (c = !0, m > f && (l = "onReverseComplete")), this._rawPrevTime = m = !b || a ? a : f);
            else if (1E-7 > a) {
                this._totalTime = this._time = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (0 !== d || 0 === g && this._rawPrevTime > f) l = "onReverseComplete", h = this._reversed;
                0 > a ? (this._active = !1, 0 === g && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = m = !b || a ? a : f)) : this._initted || (c = !0)
            } else if (this._totalTime = this._time = a, this._easeType) {
                k = a / g;
                var n = this._easeType,
                    p = this._easePower;
                if (1 === n || 3 === n && 0.5 <= k) k = 1 - k;
                3 === n && (k *= 2);
                1 ===
                    p ? k *= k : 2 === p ? k *= k * k : 3 === p ? k *= k * k * k : 4 === p && (k *= k * k * k * k);
                this.ratio = 1 === n ? 1 - k : 2 === n ? k : 0.5 > a / g ? k / 2 : 1 - k / 2
            } else this.ratio = this._ease.getRatio(a / g); if (this._time !== d || c) {
                if (!this._initted) {
                    this._init();
                    if (!this._initted || this._gc) return;
                    this._time && !h ? this.ratio = this._ease.getRatio(this._time / g) : h && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }!this._active && !this._paused && this._time !== d && 0 <= a && (this._active = !0);
                0 === d && (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : l || (l =
                    "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== g || b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || M));
                for (k = this._firstPT; k;) {
                    if (k.f) k.t[k.p](k.c * this.ratio + k.s);
                    else k.t[k.p] = k.c * this.ratio + k.s;
                    k = k._next
                }
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || c && 0 === this._time && 0 === d || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || M));
                l && !this._gc && (0 > a && this._startAt && !this._onUpdate && this._startTime &&
                    this._startAt.render(a, b, c), h && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || M), 0 === g && this._rawPrevTime !== m && (this._rawPrevTime = 0))
            }
        };
        l._kill = function(a, b) {
            "all" === a && (a = null);
            if (null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
            b = "string" !== typeof b ? b || this._targets || this.target : y.selector(b) || b;
            var c, d, f, g, h, l, m;
            if ((k(b) || xa(b)) && "number" !== typeof b[0])
                for (c = b.length; - 1 <
                    --c;) this._kill(a, b[c]) && (h = !0);
            else {
                if (this._targets)
                    for (c = this._targets.length; - 1 < --c;) {
                        if (b === this._targets[c]) {
                            g = this._propLookup[c] || {};
                            this._overwrittenProps = this._overwrittenProps || [];
                            d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                            break
                        }
                    } else {
                        if (b !== this.target) return !1;
                        g = this._propLookup;
                        d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    } if (g) {
                        l = a || g;
                        m = a !== d && "all" !== d && a !== g && ("object" !== typeof a || !a._tempKill);
                        for (f in l) {
                            if (c = g[f]) c.pg && c.t._kill(l) && (h = !0),
                            c.pg && 0 !== c.t._overwriteProps.length || (c._prev ? c._prev._next = c._next : c === this._firstPT && (this._firstPT = c._next), c._next && (c._next._prev = c._prev), c._next = c._prev = null), delete g[f];
                            m && (d[f] = 1)
                        }!this._firstPT && this._initted && this._enabled(!1, !1)
                    }
            }
            return h
        };
        l.invalidate = function() {
            this._notifyPluginsOfEnabled && y._onPluginEvent("_onDisable", this);
            this._startAt = this._onUpdate = this._overwrittenProps = this._firstPT = null;
            this._initted = this._active = this._notifyPluginsOfEnabled = !1;
            this._propLookup = this._targets ? {} : [];
            return this
        };
        l._enabled = function(a, b) {
            s || n.wake();
            if (a && this._gc) {
                var c = this._targets,
                    d;
                if (c)
                    for (d = c.length; - 1 < --d;) this._siblings[d] = tb(c[d], this, !0);
                else this._siblings = tb(this.target, this, !0)
            }
            V.prototype._enabled.call(this, a, b);
            return this._notifyPluginsOfEnabled && this._firstPT ? y._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        y.to = function(a, b, c) {
            return new y(a, b, c)
        };
        y.from = function(a, b, c) {
            c.runBackwards = !0;
            c.immediateRender = !1 != c.immediateRender;
            return new y(a, b, c)
        };
        y.fromTo = function(a,
            b, c, d) {
            d.startAt = c;
            d.immediateRender = !1 != d.immediateRender && !1 != c.immediateRender;
            return new y(a, b, d)
        };
        y.delayedCall = function(a, b, c, d, f) {
            return new y(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: f,
                overwrite: 0
            })
        };
        y.set = function(a, b) {
            return new y(a, 0, b)
        };
        y.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" !== typeof a ? a : y.selector(a) || a;
            var c, d, f, g;
            if ((k(a) || xa(a)) && "number" !==
                typeof a[0]) {
                c = a.length;
                for (d = []; - 1 < --c;) d = d.concat(y.getTweensOf(a[c], b));
                for (c = d.length; - 1 < --c;)
                    for (g = d[c], f = c; - 1 < --f;) g === d[f] && d.splice(c, 1)
            } else
                for (d = tb(a).concat(), c = d.length; - 1 < --c;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        };
        y.killTweensOf = y.killDelayedCallsTo = function(a, b, c) {
            "object" === typeof b && (c = b, b = !1);
            b = y.getTweensOf(a, b);
            for (var d = b.length; - 1 < --d;) b[d]._kill(c, a)
        };
        var ub = r("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(",");
            this._propName = this._overwriteProps[0];
            this._priority = b || 0;
            this._super = ub.prototype
        }, !0);
        l = ub.prototype;
        ub.version = "1.10.1";
        ub.API = 2;
        l._firstPT = null;
        l._addTween = function(a, b, c, d, f, g) {
            var h;
            if (null != d && (h = "number" === typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)))) return this._firstPT = a = {
                _next: this._firstPT,
                t: a,
                p: b,
                s: c,
                c: h,
                f: "function" === typeof a[b],
                n: f || b,
                r: g
            }, a._next && (a._next._prev = a), a
        };
        l.setRatio = function(a) {
            for (var b = this._firstPT, c; b;) {
                c = b.c * a + b.s;
                b.r ? c = c + (0 < c ? 0.5 : -0.5) | 0 : 1E-6 > c && -1E-6 < c &&
                    (c = 0);
                if (b.f) b.t[b.p](c);
                else b.t[b.p] = c;
                b = b._next
            }
        };
        l._kill = function(a) {
            var b = this._overwriteProps,
                c = this._firstPT,
                d;
            if (null != a[this._propName]) this._overwriteProps = [];
            else
                for (d = b.length; - 1 < --d;) null != a[b[d]] && b.splice(d, 1);
            for (; c;) null != a[c.n] && (c._next && (c._next._prev = c._prev), c._prev ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next;
            return !1
        };
        l._roundProps = function(a, b) {
            for (var c = this._firstPT; c;) {
                if (a[this._propName] || null != c.n && a[c.n.split(this._propName +
                    "_").join("")]) c.r = b;
                c = c._next
            }
        };
        y._onPluginEvent = function(a, b) {
            var c = b._firstPT,
                d, f, g, h, k;
            if ("_onInitAllProps" === a) {
                for (; c;) {
                    k = c._next;
                    for (f = g; f && f.pr > c.pr;) f = f._next;
                    (c._prev = f ? f._prev : h) ? c._prev._next = c : g = c;
                    (c._next = f) ? f._prev = c : h = c;
                    c = k
                }
                c = b._firstPT = g
            }
            for (; c;) c.pg && "function" === typeof c.t[a] && c.t[a]() && (d = !0), c = c._next;
            return d
        };
        ub.activate = function(a) {
            for (var b = a.length; - 1 < --b;) a[b].API === ub.API && (Va[(new a[b])._propName] = a[b]);
            return !0
        };
        qa.plugin = function(a) {
            if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
            var b = a.propName,
                c = a.priority || 0,
                d = a.overwriteProps,
                f = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, g = r("plugins." + b.charAt(0).toUpperCase() + b.substr(1) + "Plugin", function() {
                    ub.call(this, b, c);
                    this._overwriteProps = d || []
                }, !0 === a.global),
                h = g.prototype = new ub(b),
                k;
            h.constructor = g;
            g.API = a.API;
            for (k in f) "function" === typeof a[k] && (h[f[k]] = a[k]);
            g.version = a.version;
            ub.activate([g]);
            return g
        };
        if (m = a._gsQueue) {
            for (p = 0; p < m.length; p++) m[p]();
            for (l in I) I[l].func ||
                a.console.log("GSAP encountered missing dependency: com.greensock." + l)
        }
        s = !1
    }
})(window);
var Pl = function(a, b) {
    this.zippys_ = [];
    this.scrollToSelected = !! b;
    var c = od("goog-zippy-header", a),
        d = od("goog-zippy-content", a);
    if (c.length != d.length) jb("Zippy header elements and content elements not matching");
    else
        for (var f = 0; f < c.length; f++) this.zippys_.push(new nk(c[f], d[f])), N(this.zippys_[f], "toggle", x(this.handleZippyToggle_, this))
};
Pl.prototype.handleZippyToggle_ = function(a) {
    a.expanded && (D(this.zippys_, x(function(b) {
        b != a.target && b.setExpanded(!1)
    }, this)), this.scrollToSelected && TweenMax.to(document.body, 0.7, {
        scrollTop: a.target.getVisibleHeaderElement().offsetTop
    }))
};
Pl.prototype.setSelectedIndex = function(a) {
    this.zippys_[a].setExpanded(!0)
};
var Ql = function(a, b) {
    for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
    return c.join("\x0B")
};
var Rl = function(a) {
    L.call(this, "navigate");
    this.token = a
};
z(Rl, L);
var Ul = function(a, b, c, d) {
    U.call(this);
    if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
    var f;
    c ? f = c : (f = "history_state" + Sl, document.write(Ea('<input type="text" name="%s" id="%s" style="display:none">', f, f)), f = Q(f));
    this.hiddenInput_ = f;
    this.window_ = c ? ud(kd(c)) : window;
    this.iframeSrc_ = b;
    E && !b && (this.iframeSrc_ = "https" == window.location.protocol ? "https:///" : 'javascript:""');
    this.timer_ = new lf(150);
    this.registerDisposable(this.timer_);
    this.userVisible_ = !a;
    this.eventHandler_ =
        new Ye(this);
    if (a || Tl) d ? a = d : (a = "history_iframe" + Sl, b = this.iframeSrc_ ? 'src="' + Ra(this.iframeSrc_) + '"' : "", document.write(Ea('<iframe id="%s" style="display:none" %s></iframe>', a, b)), a = Q(a)), this.iframe_ = a, this.unsetIframe_ = !0;
    Tl && (this.eventHandler_.listen(this.window_, "load", this.onDocumentLoaded), this.shouldEnable_ = this.documentLoaded = !1);
    this.userVisible_ ? this.setHash_(this.getToken(), !0) : this.setIframeToken_(this.hiddenInput_.value);
    Sl++
};
z(Ul, U);
Ul.prototype.enabled_ = !1;
Ul.prototype.longerPolling_ = !1;
Ul.prototype.lastToken_ = null;
var Vl = function(a, b) {
    var c = b || Ql;
    return function() {
        var b = this || t,
            b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
            f = c(ua(a), arguments);
        return b.hasOwnProperty(f) ? b[f] : b[f] = a.apply(this, arguments)
    }
}(function() {
    return E ? 8 <= document.documentMode : "onhashchange" in t
}),
    Tl = E && !ac(8);
e = Ul.prototype;
e.lockedToken_ = null;
e.disposeInternal = function() {
    Ul.superClass_.disposeInternal.call(this);
    this.eventHandler_.dispose();
    this.setEnabled(!1)
};
e.setEnabled = function(a) {
    if (a != this.enabled_)
        if (Tl && !this.documentLoaded) this.shouldEnable_ = a;
        else if (a)
        if (Qb ? this.eventHandler_.listen(this.window_.document, Wl, this.operaDefibrillator_) : J && this.eventHandler_.listen(this.window_, "pageshow", this.onShow_), Vl() && this.userVisible_) this.eventHandler_.listen(this.window_, "hashchange", this.onHashChange_), this.enabled_ = !0, this.dispatchEvent(new Rl(this.getToken(), !1));
        else {
            if (!E || this.documentLoaded) this.eventHandler_.listen(this.timer_, "tick", x(this.check_,
                this, !0)), this.enabled_ = !0, Tl || (this.lastToken_ = this.getToken(), this.dispatchEvent(new Rl(this.getToken(), !1))), this.timer_.start()
        } else this.enabled_ = !1, this.eventHandler_.removeAll(), this.timer_.stop()
};
e.onDocumentLoaded = function() {
    this.documentLoaded = !0;
    this.hiddenInput_.value && this.setIframeToken_(this.hiddenInput_.value, !0);
    this.setEnabled(this.shouldEnable_)
};
e.onShow_ = function(a) {
    a.getBrowserEvent().persisted && (this.setEnabled(!1), this.setEnabled(!0))
};
e.onHashChange_ = function() {
    var a = this.getLocationFragment_(this.window_);
    a != this.lastToken_ && this.update_(a, !0)
};
e.getToken = function() {
    return null != this.lockedToken_ ? this.lockedToken_ : this.userVisible_ ? this.getLocationFragment_(this.window_) : this.getIframeToken_() || ""
};
e.setToken = function(a, b) {
    this.setHistoryState_(a, !1, b)
};
e.replaceToken = function(a, b) {
    this.setHistoryState_(a, !0, b)
};
e.getLocationFragment_ = function(a) {
    a = a.location.href;
    var b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1)
};
e.setHistoryState_ = function(a, b, c) {
    this.getToken() != a && (this.userVisible_ ? (this.setHash_(a, b), Vl() || E && this.setIframeToken_(a, b, c), this.enabled_ && this.check_(!1)) : (this.setIframeToken_(a, b), this.lockedToken_ = this.lastToken_ = this.hiddenInput_.value = a, this.dispatchEvent(new Rl(a, !1))))
};
e.setHash_ = function(a, b) {
    var c = this.window_.location,
        d = c.href.split("#")[0],
        f = Ya(c.href, "#");
    if (Tl || f || a) d += "#" + a;
    d != c.href && (b ? c.replace(d) : c.href = d)
};
e.setIframeToken_ = function(a, b, c) {
    if (this.unsetIframe_ || a != this.getIframeToken_())
        if (this.unsetIframe_ = !1, a = encodeURIComponent(String(a)), E) {
            var d = Id(this.iframe_);
            d.open("text/html", b ? "replace" : void 0);
            d.write(Ea("<title>%s</title><body>%s</body>", Ra(c || this.window_.document.title), a));
            d.close()
        } else if (a = this.iframeSrc_ + "#" + a, c = this.iframe_.contentWindow) b ? c.location.replace(a) : c.location.href = a
};
e.getIframeToken_ = function() {
    if (E) {
        var a = Id(this.iframe_);
        return a.body ? Ia(a.body.innerHTML) : null
    }
    if (a = this.iframe_.contentWindow) {
        var b;
        try {
            b = Ia(this.getLocationFragment_(a))
        } catch (c) {
            return this.longerPolling_ || this.setLongerPolling_(!0), null
        }
        this.longerPolling_ && this.setLongerPolling_(!1);
        return b || null
    }
    return null
};
e.check_ = function(a) {
    if (this.userVisible_) {
        var b = this.getLocationFragment_(this.window_);
        b != this.lastToken_ && this.update_(b, a)
    }
    if (!this.userVisible_ || Tl)
        if (b = this.getIframeToken_() || "", null == this.lockedToken_ || b == this.lockedToken_) this.lockedToken_ = null, b != this.lastToken_ && this.update_(b, a)
};
e.update_ = function(a, b) {
    this.lastToken_ = this.hiddenInput_.value = a;
    this.userVisible_ ? (Tl && this.setIframeToken_(a), this.setHash_(a)) : this.setIframeToken_(a);
    this.dispatchEvent(new Rl(this.getToken(), b))
};
e.setLongerPolling_ = function(a) {
    this.longerPolling_ != a && this.timer_.setInterval(a ? 1E4 : 150);
    this.longerPolling_ = a
};
e.operaDefibrillator_ = function() {
    this.timer_.stop();
    this.timer_.start()
};
var Wl = ["mousedown", "keydown", "mousemove"],
    Sl = 0;
var Xl = function(a, b, c) {
    U.call(this);
    this.contentElement = Q(a);
    if (!this.contentElement) throw Error("Picker menu element not found.");
    this.anchorElement = Q(b + "_anchor");
    if (!this.anchorElement) throw Error("Picker anchor element not found.");
    this.anchorCaptionElement_ = Q(b + "_caption");
    if (!this.anchorCaptionElement_) throw Error("Picker anchor caption element not found.");
    od("hideable-menu-item", this.contentElement);
    this.idToButtonCaption_ = {};
    this.populateIdToButtonCaptionMap_(this.contentElement);
    this.buildPicker(this.contentElement,
        c)
};
z(Xl, U);
e = Xl.prototype;
e.buildPicker = function(a, b) {
    var c = new Kj;
    c.setToggleMode(!0);
    c.decorate(a);
    c.attach(this.anchorElement, 5, 4, !1, b || new ce(0, 0, 0, 0));
    N(c, "action", x(this.handleAction, this))
};
e.populateIdToButtonCaptionMap_ = function(a) {
    a = Ld(a, function(a) {
        try {
            return wf(a, "goog-menuitem")
        } catch (c) {
            return !1
        }
    });
    D(a, x(function(a) {
        var c = this.getDataId(a);
        null != c && a.hasAttribute("data-button-caption") && (this.idToButtonCaption_[c] = a.getAttribute("data-button-caption"))
    }, this))
};
e.handleAction = function(a) {
    var b = this.getDataId(a.target.getElement());
    null != b && (this.setSelectedId(b), a.selectedId = b, Uc(this, a))
};
e.setSelectedId = function(a) {
    this.anchorCaptionElement_.innerHTML = this.idToButtonCaption_[a]
};
e.getDataId = function(a) {
    return a.hasAttribute("data-id") ? a.getAttribute("data-id") : null
};
var Yl = function(a, b) {
    this.dialog_ = null;
    Xl.call(this, a, b);
    this.menus_ = [];
    new Pl(this.contentElement);
    var c = [];
    Fb(c, od("goog-menu", this.contentElement));
    xb(fd(this.contentElement), "goog-menu") && c.push(this.contentElement);
    D(c, x(function(a) {
        this.menus_.push(this.createMenu(a))
    }, this))
};
z(Yl, Xl);
e = Yl.prototype;
e.buildPicker = function(a) {
    this.dialog_ = new rg;
    this.dialog_.init();
    this.dialog_.setButtonSet(null);
    this.dialog_.getContentElement().appendChild(a);
    this.dialog_.getTitleCloseElement().innerHTML = Q("dialog-close-icon").innerHTML;
    N(this.anchorElement, "click", x(function() {
        this.dialog_.setVisible(!0, !0)
    }, this))
};
e.createMenu = function(a) {
    var b = new Kh;
    b.decorate(a);
    S(a, !0);
    N(b, "action", x(this.handleAction, this));
    return b
};
e.handleAction = function(a) {
    Yl.superClass_.handleAction.call(this, a);
    this.dialog_.setVisible(!1)
};
e.setSelectedId = function(a) {
    Yl.superClass_.setSelectedId.call(this, a);
    D(this.menus_, x(this.updateMenuWithSelectedId_, this, a))
};
e.updateMenuWithSelectedId_ = function(a, b) {
    b.forEachChild(x(function(b) {
        b.setChecked(!1);
        var d = this.getDataId(b.getElement());
        a == d && b.setChecked(!0)
    }, this))
};
var Zl = function() {
    return Z("How often")
}, $l = function(a) {
        return Z("Email address: " + ej(a.emailAddress))
    }, am = function() {
        return Z("Notify me when there is a new chart release.")
    }, bm = function() {
        return Z("Subscribe to receive updates about noteworthy events.")
    };
var cm = function() {
    return '<div class="mobile-subscription-buttons"><div class="mobile-subscription-subscribe-button mobile-subscription-button" id="mobile-subscription-subscribe-button"><div class="mobile-subscription-subscribe-button-text mobile-subscription-button-text" id="mobile-subscription-subscribe-button-text">' + Z("Subscribe") + '</div></div><div class="mobile-subscription-cancel-button mobile-subscription-button" id="mobile-subscription-cancel-button"><div class="mobile-subscription-cancel-button-text mobile-subscription-button-text" id="mobile-subscription-cancel-button-text">' +
        Z("Cancel") + '</div></div><div class="mobile-subscription-unsubscribe-button mobile-subscription-button mobile-invisible" id="mobile-subscription-unsubscribe-button"><div class="mobile-subscription-unsubscribe-button-text mobile-subscription-button-text" id="mobile-subscription-unsubscribe-button-text">' + Z("Unsubscribe") + "</div></div></div>"
};
var dm = function(a) {
    return '<div class="popup-picker-anchor ' + (a.selectButtonStyle ? "select-button-style" : "") + '" id="' + ej(a.id) + '_anchor"><span class="popup-picker-anchor-caption" id="' + ej(a.id) + '_caption">' + (a.anchorText ? ej(a.anchorText) : "") + '</span><span class="popup-picker-anchor-arrow"></span></div>'
}, em = function(a) {
        return '<div class="goog-menuitem ' + (a.isDisabled ? " goog-menuitem-disabled" : "") + (a.withCheckbox ? " goog-option" : "") + (a.hideableItem ? " hideable-menu-item" : "") + "\" data-id='" + ej(a.id) + "'" +
            (a.elementId ? "id='" + ej(a.elementId) + "'" : "") + "data-button-caption='" + ej(a.pickerButtonCaption) + "'>" + yj(a.visibleName) + "</div>"
    };
var gm = function(a) {
    return '<div><div class="hottrends-subscription-title">' + fm(a) + '</div><div><div class="hottrends-notification-hotness-title">Notify me about Hot Searches</div><div id="hottrends-notification-hotness-menu-button-saved" style="display: none;">' + (a.currentHotnessLevel ? "hottrends-notification-hotness-menuitem-" + ej(a.currentHotnessLevel) : "") + '</div><div id="hottrends-notification-hotness-menu-button" class="hottrends-notification-hotness-menu-button"><div id="hottrends-notification-hotness-menu" class="hottrends-notification-hotness-menu goog-menu"><div id="hottrends-notification-hotness-menuitem-HOTTEST" class="goog-menuitem">' +
        Z("Hottest (only the hottest searches)") + '</div><div id="hottrends-notification-hotness-menuitem-HOTTER" class="goog-menuitem">' + Z("Hotter (some hot searches)") + '</div><div id="hottrends-notification-hotness-menuitem-HOT" class="goog-menuitem">' + Z("Hot (all hot searches)") + '</div></div></div><div class="hottrends-notification-frequency-title">' + Zl(null) + '</div><div id="hottrends-notification-frequency-menu-button-saved" style="display: none;">' + (a.currentFrequency ? "hottrends-notification-frequency-menuitem-" +
            ej(a.currentFrequency) : "") + '</div><div id="hottrends-notification-frequency-menu-button" class="hottrends-notification-frequency-menu-button"><div id="hottrends-notification-frequency-menu" class="hottrends-notification-frequency-menu goog-menu"><div id="hottrends-notification-frequency-menuitem-AS_IT_HAPPENS" class="goog-menuitem">' + Z("As-it-happens") + '</div><div id="hottrends-notification-frequency-menuitem-ONCE_A_DAY" class="goog-menuitem">' + Z("Once a day") + '</div><div id="hottrends-notification-frequency-menuitem-ONCE_A_WEEK" class="goog-menuitem">' +
        Z("Once a week") + '</div></div></div><div class="notification-email-address">' + $l(a) + "</div></div></div>"
};
gm.soyTemplateName = "soy.trends.hot_trends_subscribe.subscribeSoyTemplate";
var jm = function(a) {
    return '<div><div class="hottrends-mobile-subscription-dialog-container mobile-subscription-dialog-container"><div class="hottrends-mobile-subscription-title mobile-subscription-title">' + fm(a) + '</div><div><div class="hottrends-mobile-notification-hotness-title mobile-subscription-picker-title mobile-subscription-first-picker-title">Notify me about</div><div id="hottrends-notification-hotness-menu-button-saved" style="display: none;">' + (a.currentHotnessLevel ? ej(a.currentHotnessLevel) :
        "HOTTEST") + "</div>" + hm({
        id: "hottrends-notification-hotness-menu-button"
    }) + '<div id="hottrends-notification-hotness-menu" class="hottrends-notification-hotness-menu goog-menu">' + im({
        id: "HOTTEST",
        visibleName: "" + Z("Hottest (only the hottest searches)")
    }) + im({
        id: "HOTTER",
        visibleName: "" + Z("Hotter (some hot searches)")
    }) + im({
        id: "HOT",
        visibleName: "" + Z("Hot (all hot searches)")
    }) + '</div><div class="hottrends-notification-frequency-title mobile-subscription-picker-title">' + Zl(null) + '</div><div id="hottrends-notification-frequency-menu-button-saved" style="display: none;">' +
        (a.currentFrequency ? ej(a.currentFrequency) : "AS_IT_HAPPENS") + "</div>" + hm({
        id: "hottrends-notification-frequency-menu-button"
    }) + '<div id="hottrends-notification-frequency-menu" class="hottrends-notification-frequency-menu goog-menu">' + im({
        id: "AS_IT_HAPPENS",
        visibleName: "" + Z("As-it-happens")
    }) + im({
        id: "ONCE_A_DAY",
        visibleName: "" + Z("Once a day")
    }) + im({
        id: "ONCE_A_WEEK",
        visibleName: "" + Z("Once a week")
    }) + '</div><div class="hottrends-notification-email-address mobile-subscription-email-address">' + $l(a) + "</div></div>" +
        cm(null) + "</div></div>"
};
jm.soyTemplateName = "soy.trends.hot_trends_subscribe.subscribeMobileSoyTemplate";
var im = function(a) {
    return "" + em({
        id: a.id,
        visibleName: a.visibleName,
        isDisabled: !1,
        pickerButtonCaption: a.visibleName,
        withCheckbox: !0
    })
}, hm = function(a) {
        return "" + dm({
            id: a.id,
            selectButtonStyle: !0
        })
    }, fm = function(a) {
        return "" + (a.isSubscribed ? "Edit subscription to Hot Searches (" + ej(a.countryName) + ")" : "Subscribe to Hot Searches (" + ej(a.countryName) + ")")
    };
var om = function(a) {
    var b = '<div class="term-subscription-dialog-content"><div class="term-subscription-title">' + km(a) + '</div><div class="term-subscription-subtitle">' + bm(null) + '</div><table class="term-subscription-table">',
        c;
    c = a || {};
    var d = "";
    Z("Type in a search term");
    c = "" + (c.currentSubscription ? ej(c.currentSubscription.term) : c.defaultTerm ? ej(c.defaultTerm) : "");
    d += '<tr><td class="dialog-filter-title">' + Z("Topic") + '</td><td class="term-subscription-topic-container" ng-controller="TermSubscribeCtrl" ng-init="init(\'' +
        yj(c) + "');\">" + lm({
            isMobile: !1
        }) + "</td></tr>";
    b += d;
    d = '<tr><td class="dialog-filter-title">' + Z("Country") + '</td><td class="term-subscription-geo-container">' + mm(nj(a, {
        isMobile: !1
    })) + "</td></tr>";
    return b + d + ('<tr><td class="dialog-filter-title">' + Zl(null) + '</td><td class="term-subscription-frequency-container">' + nm({
        isMobile: !1
    }) + "</td></tr>") + '</table><div class="notification-email-address">' + $l(a) + "</div></div>"
};
om.soyTemplateName = "soy.trends.term_subscribe.subscribeSoyTemplate";
var pm = function(a) {
    var b = '<div class="mobile-subscription-dialog-container term-subscription-dialog-content"><div class="mobile-term-subscription-title mobile-subscription-title">' + km(a) + '</div><div class="mobile-term-subscription-subtitle mobile-subscription-picker-title">' + bm(null) + '</div><div class="mobile-term-subscription-menus">',
        c;
    c = a || {};
    var d = "";
    c = "" + (c.currentSubscription ? ej(c.currentSubscription.term) : c.defaultTerm ? ej(c.defaultTerm) : "");
    d += '<div class="term-subscription-topic-picker-title mobile-subscription-picker-title mobile-subscription-first-picker-title">' +
        Z("Topic") + '</div><div class="term-subscription-topic-container" id="term-subscription-topic-container" ng-controller="TermSubscribeCtrl" ng-init="init(\'' + yj(c) + "');\">" + lm({
            isMobile: !0
        }) + "</div>";
    b += d;
    d = '<div class="term-subscription-geo-picker-title mobile-subscription-picker-title">' + Z("Country") + '</div><div class="term-subscription-geo-container">' + mm(nj(a, {
        isMobile: !0
    })) + "</div>";
    return b + d + ('<div class="mobile-term-subscription-subtitle mobile-subscription-picker-title">' + Zl(null) + '</div><div class="term-subscription-frequency-container">' +
        nm({
            isMobile: !0
        }) + "</div>") + '</div><div class="notification-email-address mobile-subscription-email-address">' + $l(a) + "</div>" + cm(null) + "</div>"
};
pm.soyTemplateName = "soy.trends.term_subscribe.subscribeMobileSoyTemplate";
var km = function(a) {
    a = a || {};
    return "" + (a.currentSubscription ? Z("Edit Subscription") : Z("Add Subscription"))
}, lm = function(a) {
        var b = "",
            c = "" + Z("Type in a search term");
        return b += '<div class="term-content" ng-hide="term.edit" ng-click="editTerm();"><div class="term-content-clipper">\n      <div class="{{term.content.type}}" dir="auto">\n        {{term.content.displayValue}}\n      </div>\n      <div class="term-description" dir="auto">\n        {{term.content.displayType}}\n      </div>\n      <div class="remove-btn" ng-click="removeTerm(); $event.stopPropagation();">\u00d7</div></div></div><div ng-show="term.edit"><autocomplete selected-term="term.content" edit="term.edit" num-edits-done="term.numEditsDone" min-input-length="2" num-results="6" enable-entities="enableEntities" disable-empty-term="true" placeholder="' + ej(c) +
            '" is-mobile="' + ej(a.isMobile) + '"></autocomplete></div>'
    }, mm = function(a) {
        return dm(nj(a, {
            id: "subscriptionGeoPicker",
            selectButtonStyle: a.isMobile
        })) + '<input type="hidden" id="subscriptionGeoPicker_Hidden"/><div id=\'subscriptionGeoPicker_content\' class="treePopup" style="display: none;"><iframe id="subscriptionGeoPicker_TreeMask" frameborder="0" class="treePopupMask"></iframe><div id="subscriptionGeoPicker_TreeContent" style="text-align: start" class="treePopupContent">Loading...</div></div>'
    }, nm =
        function(a) {
            var b = dm(nj(a, {
                id: "frequencyAnchor",
                selectButtonStyle: a.isMobile
            })) + '<div class="term-frequency-note">',
                c;
            c = "";
            var d = "" + Zl(null),
                d = (d = String(d)) ? new kj(d, void 0) : "";
            c += 'Note: "' + ej(d) + '" is only a rough estimate and will vary between topics and over time.';
            c = Z(c);
            return b + c + '</div><div id="frequency-picker-menu" class="goog-menu' + (a.isMobile ? "" : "-nocheckbox") + ' picker-menu">' + em({
                id: "0",
                visibleName: "" + Z("About once a week"),
                pickerButtonCaption: "" + Z("About once a week"),
                isDisabled: !1,
                withCheckbox: a.isMobile
            }) +
                em({
                    id: "1",
                    visibleName: "" + Z("About once a month"),
                    pickerButtonCaption: "" + Z("About once a month"),
                    isDisabled: !1,
                    withCheckbox: a.isMobile
                }) + "</div>"
    };
var rm = function(a) {
    return '<div><div class="topcharts-subscription-title">' + qm(a) + '</div><div><div class="topcharts-notification-title">' + am(null) + '</div></div><div><div class="notification-email-address">' + $l(a) + "</div></div></div>"
};
rm.soyTemplateName = "soy.trends.top_charts_subscribe.subscribeSoyTemplate";
var sm = function(a) {
    return '<div class="mobile-subscription-dialog-container"><div class="mobile-topcharts-subscription-title mobile-subscription-title">' + qm(a) + '</div><div class="mobile-topcharts-notification-title mobile-subscription-picker-title">' + am(null) + '</div><div class="topcharts-notification-email-address mobile-subscription-email-address">' + $l(a) + "</div>" + cm(null) + "</div>"
};
sm.soyTemplateName = "soy.trends.top_charts_subscribe.subscribeMobileSoyTemplate";
var qm = function(a) {
    return "" + ("CHART" == a.granularity ? a.isSubscribed ? "Edit subscription to the " + ej(a.visibleName) + " top chart (" + ej(a.geo) + ")" : "Subscribe to the " + ej(a.visibleName) + " top chart (" + ej(a.geo) + ")" : a.isSubscribed ? "Edit subscription to the " + ej(a.visibleName) + " category (" + ej(a.geo) + ")" : "Subscribe to the " + ej(a.visibleName) + " category (" + ej(a.geo) + ")")
};
var tm = function(a, b, c, d, f) {
    Ol.call(this, a, b, f ? pm : om, f);
    this.estimatedFrequencyPicker_ = this.geoPicker_ = this.originalSelectedGeo_ = this.originalSelectedTerm_ = this.selectedEstimatedFrequency_ = this.selectedGeo_ = this.selectedTerm_ = this.userSubscriptions_ = null;
    this.entitySuggestWorldwide_ = c;
    this.entitySuggestGeoPrefixes_ = d;
    this.angularSectionScope_ = null
};
z(tm, Ol);
v("trends.storyfinder.TermSubscriptionEditor", tm, void 0);
tm.prototype.getSelectedParamsMap = function() {
    var a = tm.superClass_.getSelectedParamsMap.call(this);
    this.selectedGeo_ && a.set("geo", this.selectedGeo_);
    this.selectedTerm_ && a.set("q", this.selectedTerm_);
    this.selectedEstimatedFrequency_ && a.set("af", this.selectedEstimatedFrequency_);
    this.originalSelectedTerm_ && a.set("oq", this.originalSelectedTerm_);
    this.originalSelectedGeo_ && a.set("mm_geo", this.originalSelectedGeo_);
    return a
};
tm.prototype.openSubscriptionSettings = function(a, b) {
    this.selectedTerm_ = a;
    this.selectedGeo_ = b;
    this.originalSelectedTerm_ = a;
    this.originalSelectedGeo_ = b;
    this.sendOpenRequest()
};
tm.prototype.openSubscriptionSettings = tm.prototype.openSubscriptionSettings;
e = tm.prototype;
e.deleteSubscriptionSettings = function(a, b) {
    this.selectedTerm_ = a;
    this.selectedGeo_ = b;
    this.sendDeleteRequest()
};
e.getSubscriptionUri = function() {
    return "subscribe/term"
};
e.getSubscriptionsCallback = function(a) {
    tm.superClass_.getSubscriptionsCallback.call(this, a);
    a = a.target.getResponseJson();
    this.userSubscriptions_ = a.userSubscriptionList;
    this.buildFrequencyMenu_(a);
    this.buildGeoPicker_(a);
    this.buildTermAutocomplete_(a);
    this.updateSubscriptionDialog_()
};
e.checkIfSubscribed = function(a) {
    return null != a.currentSubscription
};
e.buildTermAutocomplete_ = function() {
    var a = pd("term-subscription-topic-container", this.getDialogContentElement()),
        b = angular.element(a),
        c = b.scope();
    b.injector().get("$compile")(a)(c);
    c.$apply();
    b = pd("search-query", this.getDialogContentElement());
    gd(b, "jfk-textinput");
    this.angularSectionScope_ = angular.element(a).scope();
    this.angularSectionScope_.$watch("term.content", x(function(a) {
        a && (this.selectedTerm_ = a.value, this.updateSubscriptionDialog_())
    }, this));
    this.isMobile && (this.updateInputWidth_(), N(window,
        "resize", x(this.updateInputWidth_, this)))
};
e.updateInputWidth_ = function() {
    var a = Q("term-subscription-topic-container"),
        b = nd("input", null, a);
    Ae(b[0], De(a).width - 18);
    b = od("dropdown-menu", a);
    Ae(b[0], De(a).width - 2)
};
e.buildGeoPicker_ = function(a) {
    gc(this.geoPicker_);
    Vk($h(a.geoPickerJson));
    a = this.checkIfSubscribed(a) ? a.currentSubscription.geo : a.defaultGeo || "";
    this.geoPicker_ = new Tk("subscriptionGeoPicker", this.isMobile, a);
    this.isMobile || (this.geoPicker_.setPopupMargin(new ce(-2, 0, 0, -10)), this.updatePickerStyle_("subscriptionGeoPicker"));
    this.selectedGeo_ = a;
    N(this.geoPicker_, "select", x(function() {
        this.selectedGeo_ = this.geoPicker_.getValue();
        this.updateSubscriptionDialog_()
    }, this))
};
e.buildFrequencyMenu_ = function(a) {
    this.estimatedFrequencyPicker_ = this.isMobile ? new Yl("frequency-picker-menu", "frequencyAnchor") : new Xl("frequency-picker-menu", "frequencyAnchor", new ce(-2, 0, 0, -10));
    this.isMobile || this.updatePickerStyle_("frequencyAnchor");
    N(this.estimatedFrequencyPicker_, "action", x(function(a) {
        this.selectedEstimatedFrequency_ = a.selectedId
    }, this));
    a = this.checkIfSubscribed(a) ? a.currentSubscription.estimatedFrequency : 0;
    this.estimatedFrequencyPicker_.setSelectedId(a);
    this.selectedEstimatedFrequency_ =
        "" + a
};
e.updatePickerStyle_ = function(a) {
    a = Q(a + "_anchor");
    var b = void 0 != a.nextElementSibling ? a.nextElementSibling : Ed(a.nextSibling, !0);
    (new Mj(a)).renderBefore(b);
    a = pd("popup-picker-anchor-arrow", a);
    id(a, "popup-picker-anchor-arrow");
    gd(a, "goog-flat-menu-button-dropdown")
};
e.updateSubscriptionDialog_ = function() {
    var a = !1;
    D(this.userSubscriptions_, function(b) {
        b.term == this.selectedTerm_ && b.geo == this.selectedGeo_ && (b = b.estimatedFrequency, this.estimatedFrequencyPicker_.setSelectedId(b), this.selectedEstimatedFrequency_ = "" + b, a = !0)
    }, this);
    this.updateSubscriptionButtons(a);
    this.setSubscribeButtonEnabled("" != this.selectedTerm_);
    this.angularSectionScope_.enableEntities = this.isEntitiesEnabledForGeo_(this.selectedGeo_);
    this.angularSectionScope_.$$phase || this.angularSectionScope_.$apply()
};
e.isEntitiesEnabledForGeo_ = function(a) {
    return "" == a ? this.entitySuggestWorldwide_ : 0 == this.entitySuggestGeoPrefixes_.length ? !0 : sb(this.entitySuggestGeoPrefixes_, function(b) {
        return 0 == a.lastIndexOf(b, 0)
    })
};
var um = function(a, b) {
    this.type = a;
    this.url = b
};
z(um, L);
v("ControlPanelEvent.Types", {
    NAV_CHANGE: "nav",
    RESPONSE: "Response",
    PROPERTY_CHANGE: "property"
}, void 0);
var $ = function(a) {
    U.call(this);
    this.windowTitlePrefix_ = document.title;
    var b = a.ajax;
    if (this.useAjax_ = null == b || "1" == b) this.hist_ = new Ul, N(this.hist_, "navigate", x(this.navCallback, this));
    this.entitiesEnabled_ = !1;
    this.propertyToCountriesWhitelist_ = $h(a.p2wlcc);
    this.customPropertyToReposStartDate_ = $h(a.cp2rsd);
    this.otherPropertiesReposStartYear_ = parseInt(a.prsd[0].split("/")[1], 10);
    this.webPropertyReposStartYear_ = parseInt(a.prsd[1].split("/")[1], 10);
    this.otherPropertiesReposStartMonth_ = parseInt(a.prsd[0].split("/")[0],
        10);
    this.webPropertyReposStartMonth_ = parseInt(a.prsd[1].split("/")[0], 10);
    this.suggestGeoPrefixes_ = a.esgeos.split(",");
    this.isMobile_ = a.isMobile;
    this.useShareAndEmbedIcons_ = a.useShareAndEmbedIcons;
    this.suggestAllowWorldwide_ = a.eww;
    this.currentCompareType_ = null;
    this.pickers_ = {};
    this.multiPickers_ = {};
    this.contentElement_ = a.reportContentElement;
    this.hl_ = a.hl;
    this.currentParams_ = null;
    if (b = a.butterBarElement) this.butterBar_ = new qk(""), this.butterBar_.render(Q(b));
    this.compareTypePicker_ = null;
    this.compareTypePicker_ =
        this.isMobile_ ? new sl("resPckrcmpt", !0, "q") : new Ph;
    b = ["cat", "q", "geo", "date", "gprop"];
    D(b, function(a) {
        this.pickers_[a] = Fl[a]("resPckr" + a, this.isMobile_, void 0);
        "cat" != a && "gprop" != a && (this.multiPickers_[a] = new Gl(a, "cmpPckr" + a, this.isMobile_, void 0))
    }, this);
    D(b, function(a) {
        this.multiPickers_[a] && this.setComparison_(a, !1)
    }, this);
    this.isMobile_ && N(this.compareTypePicker_, "select", x(this.handleCompareTypeSelectEvent_, this));
    D(b, function(a) {
        "gprop" == a ? N(this.pickers_[a], "select", x(this.handlePropertySelectEvent_,
            this)) : N(this.pickers_[a], "select", x(this.handlePickerSelect_, this));
        this.multiPickers_[a] && N(this.multiPickers_[a], "select", x(this.handlePickerSelect_, this))
    }, this);
    this.resetValues(a);
    if (this.useAjax_) {
        var c = window.onload,
            d = this;
        window.onload = function(a) {
            "function" == typeof c && c(a);
            if (!d.hist_.getToken()) d.onSubmit();
            d.hist_.setEnabled(!0)
        }
    }
    a.xsrfToken && (this.termSubscriptionEditor_ = new tm(this.butterBar_, a.xsrfToken, this.suggestAllowWorldwide_, this.suggestGeoPrefixes_, this.isMobile_), N(this.termSubscriptionEditor_,
        "beforeajax", x(pl, this)), N(this.termSubscriptionEditor_, "afterajax", x(ql, this)))
};
z($, U);
v("trends.ControlPanel", $, void 0);
var vm = /.*\/m\/\w+/;
$.prototype.handlePropertySelectEvent_ = function() {
    this.handlePropertiesChange_();
    this.onSubmit();
    this.dispatchEvent(new L("property"))
};
$.prototype.handleCompareTypeSelectEvent_ = function(a) {
    a = this.compareTypePicker_.extractComparisonType(a.target.getId());
    this.changeComparisonType_(a);
    this.onSubmit()
};
$.prototype.handlePickerSelect_ = function() {
    this.onSubmit()
};
$.prototype.resetValues = function(a) {
    var b = a.cmpt;
    b || (b = "q");
    this.changeComparisonType_(b);
    var c = a.gprop;
    this.pickers_.gprop.setValue(void 0 == c ? "" : c);
    this.handlePropertiesChange_();
    for (var d in af)
        if (c = af[d], this.pickers_[c] && "gprop" != c) {
            var f = void 0 == a[c] ? "" : a[c];
            c != b ? this.pickers_[c].setValue(f) : this.multiPickers_[c] && (this.multiPickers_[c].enableFireSelectEvent(!1), this.multiPickers_[c].setValue(f, !0), this.multiPickers_[c].enableFireSelectEvent(!0))
        }
    xl() && (xl().value = "")
};
$.prototype.resetValues = $.prototype.resetValues;
$.prototype.navCallback = function(a) {
    a = a.token;
    if (this.currentParams_ != a) {
        this.currentParams_ = a;
        var b = a.split("&"),
            c = {};
        if (0 < a.length)
            for (var d in b) {
                var f = b[d].split("=");
                c[f[0]] = f[1] ? Ia(f[1]) : ""
            }
        this.resetValues(c);
        d = this.isEntitiesEnabled();
        !d && this.entitiesEnabled_ && vm.test(c.q) || this.fetchContent_(wm(document.getElementById("controlPanelForm"), this.hl_, a));
        this.entitiesEnabled_ = d;
        this.dispatchEvent(new L("nav"))
    }
};
$.prototype.getPicker = function(a) {
    return this.pickers_[a]
};
$.prototype.getPicker = $.prototype.getPicker;
$.prototype.getMultiPicker = function(a) {
    return this.multiPickers_[a]
};
$.prototype.getMultiPicker = $.prototype.getMultiPicker;
$.prototype.setComparison_ = function(a, b) {
    this.getMultiPickerRow_(a).style.display = b ? "" : "none";
    var c = this.getPicker(a).getElement();
    c && (c.style.display = b ? "none" : "");
    b ? "" != this.pickers_[a].getValue() && (this.multiPickers_[a].enableFireSelectEvent(!1), this.multiPickers_[a].setValue(this.pickers_[a].getValue()), this.multiPickers_[a].enableFireSelectEvent(!0)) : 1 == this.multiPickers_[a].pickersShown ? this.pickers_[a].setValue(this.multiPickers_[a].getInnerValue(0)) : this.pickers_[a].reset()
};
$.prototype.selectComparisonType = function(a) {
    this.changeComparisonType_(a);
    this.onSubmit()
};
$.prototype.selectComparisonType = $.prototype.selectComparisonType;
$.prototype.changeComparisonType_ = function(a) {
    this.compareTypePicker_.setSelectedComparisonType(a);
    a != this.currentCompareType_ && (a && this.setComparison_(a, !0), this.currentCompareType_ && this.setComparison_(this.currentCompareType_, !1), this.currentCompareType_ = a)
};
$.prototype.getMultiPickerRow_ = function(a) {
    return Q("cmpRow" + a)
};
$.prototype.setHiddenField_ = function(a, b) {
    document.getElementById("fFld" + a).value = b
};
$.prototype.onSubmit = function(a) {
    var b = this;
    a && xl() && (a = xl().value) && ("q" == this.currentCompareType_ ? this.multiPickers_.q.setValue(a) : this.pickers_.q.setValue(a));
    this.performFunctionOnVisiblePickers_(function(a) {
        b.setHiddenField_(a.type, a.getValue())
    });
    if (this.useAjax_) {
        if (0 <= this.hist_.getToken().indexOf("ajax=0")) return a = document.getElementById("fFldajax"), a.name = "ajax", a.value = "0", !0;
        xm(this.hist_, "controlPanelForm", this.hl_, this.entitiesEnabled_);
        return !1
    }
    return !0
};
$.prototype.onSubmit = $.prototype.onSubmit;
var xm = function(a, b, c, d) {
    b = wm(document.getElementById(b), c).split("?")[1];
    a.getToken() == b ? a.dispatchEvent(new Rl(b, !0)) : vm.test(a.getToken().replace(/%2F/g, "/")) && !d ? a.replaceToken(b) : a.setToken(b)
};
$.prototype.setButterBarMsg = function() {};
$.prototype.setBBMsg = $.prototype.setButterBarMsg;
$.prototype.fetchContent_ = function(a) {
    a += "&content=1";
    this.isMobile_ && (a += "&mob=1");
    if (this.getContentContainer_()) {
        Jl && Kl();
        for (Jj(); 0 < Xk.length;) Cd(Xk.shift());
        pl();
        qi(a, x(function(b) {
            var c = this.getContentContainer_();
            if (b.target.isSuccess() || 203 == b.target.getStatus()) {
                b = b.target.getResponseText();
                if (0 <= b.substr(0, 300).toLowerCase().indexOf("<html") && (c = document.body, b = el(b, "body").join(""), !b)) {
                    window.location = "/";
                    return
                }
                fl(c, b);
                dl(this.useShareAndEmbedIcons_, c, this.isMobile_);
                c = Q("explore-page-share-container");
                Ad(c);
                c.appendChild(Q("share-button-container"));
                ql();
                this.dispatchEvent(new um("Response", a))
            } else c.innerHTML = Fj("COMMUNICATION_ERROR_HTML"), document.title = this.windowTitlePrefix_ + " - " + Fj("COMMUNICATION_ERROR_TITLE"), ql()
        }, this), "GET")
    }
};
$.prototype.getContentContainer_ = function() {
    return Q(this.contentElement_)
};
var wm = function(a, b, c) {
    var d = [a.action];
    if (c) d.push("?hl=" + b), d.push("&" + c);
    else
        for (b = !0, c = 0; c < a.length; c++) {
            var f = a.elements[c];
            f.name && (f.checked || "hidden" == f.type) && "" != f.value && (d.push((b ? "?" : "&") + f.name + "=" + encodeURIComponent(String(f.value))), b = !1)
        }
    return d.join("")
};
$.prototype.performFunctionOnVisiblePickers_ = function(a) {
    for (var b in af) {
        var c = af[b];
        a(c == this.currentCompareType_ ? this.multiPickers_[c] : this.pickers_[c])
    }
};
$.prototype.updateGeo = function(a) {
    var b = this.pickers_.gprop.getValue();
    a.updateCountries(this.propertyToCountriesWhitelist_[b])
};
$.prototype.handlePropertiesChange_ = function() {
    var a = this.pickers_.gprop.getValue(),
        b = this.propertyToCountriesWhitelist_[a];
    this.pickers_.geo.updateCountries(b);
    this.multiPickers_.geo.performFuncOnPickers(function(a) {
        a.updateCountries(b)
    });
    var c = this.otherPropertiesReposStartYear_,
        d = this.otherPropertiesReposStartMonth_;
    if ("" == a) c = this.webPropertyReposStartYear_, d = this.webPropertyReposStartMonth_;
    else if (a = this.customPropertyToReposStartDate_[a]) a = a.split("/"), c = parseInt(a[1], 10), d = parseInt(a[0], 10);
    this.pickers_.date.changeReposStartDate(c, d);
    this.multiPickers_.date.performFuncOnPickers(function(a) {
        a.changeReposStartDate(c, d)
    })
};
$.prototype.addOnResponseCallback = function(a) {
    N(this, "Response", a)
};
$.prototype.addOnResponseCallback = $.prototype.addOnResponseCallback;
e = $.prototype;
e.getCurrentCompareType = function() {
    return this.currentCompareType_
};
e.isEntitiesEnabled = function() {
    if ("geo" == this.currentCompareType_) {
        var a = this.getMultiPicker("geo").getValue().split(",");
        return vb(a, x(function(a) {
            return this.isEntitiesEnabledForGeo_(a.trim())
        }, this))
    }
    a = this.getPicker("geo").getValue();
    return this.isEntitiesEnabledForGeo_(a)
};
e.isEntitiesEnabledForGeo_ = function(a) {
    return "" == a ? this.suggestAllowWorldwide_ : sb(this.suggestGeoPrefixes_, function(b) {
        return 0 == a.lastIndexOf(b, 0)
    })
};
e.getSingleValueOfType_ = function(a) {
    return this.currentCompareType_ == a ? (a = this.getMultiPicker(a).getValue().split(","), 1 == a.length ? a[0] : "") : this.pickers_[a].getValue()
};
e.addTermSubscription = function() {
    var a = this.getSingleValueOfType_("q"),
        b = this.getSingleValueOfType_("geo");
    this.termSubscriptionEditor_.openSubscriptionSettings(a, b)
};
$.prototype.addTermSubscription = $.prototype.addTermSubscription;
var ym = function(a, b, c) {
    a.timeOfStartCall = (new Date).getTime();
    if (b && JSON && JSON.stringify) {
        var d = JSON.stringify(b);
        200 >= d.length && (a.psdJson = d)
    }
    d = c || t;
    d.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
    var f = a.serverUri || "//www.google.com/tools/feedback",
        g = d.GOOGLE_FEEDBACK_START;
    if (g) g.apply(d, arguments);
    else {
        var f = f + "/load.js?",
            h;
        for (h in a) g = a[h], null != g && !pa(g) && (f += encodeURIComponent(h) + "=" + encodeURIComponent(g) + "&");
        h = d.document;
        d = h.createElement("script");
        d.src = f;
        h.body.appendChild(d)
    }
};
v("userfeedback.api.startFeedback", ym, void 0);
v("trends.feedback.startFeedback", function(a) {
    ym({
        productId: "84900",
        locale: a
    })
}, void 0);
var zm = function(a, b, c) {
    b || (b = {});
    var d = c || window;
    c = "undefined" != typeof a.href ? a.href : String(a);
    a = b.target || a.target;
    var f = [],
        g;
    for (g in b) switch (g) {
        case "width":
        case "height":
        case "top":
        case "left":
            f.push(g + "=" + b[g]);
            break;
        case "target":
        case "noreferrer":
            break;
        default:
            f.push(g + "=" + (b[g] ? 1 : 0))
    }
    g = f.join(",");
    if (b.noreferrer) {
        if (b = d.open("", a, g)) E && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), b.opener = null, c = Ra(c), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), b.document.close()
    } else b =
        d.open(c, a, g);
    return b
};
var Am = function(a, b, c) {
    this.csvType_ = c;
    this.exportUrl_ = null;
    N(b, "Response", x(this.handleSubmit_, this))
};
v("trends.ExportLinkHandler", Am, void 0);
Am.prototype.handleSubmit_ = function(a) {
    this.exportUrl_ = $k(a.url, "export", this.csvType_)
};
Am.prototype.doExport = function() {
    _gaq.push(["_trackEvent", "click", "export"]);
    zm(this.exportUrl_, {
        target: "_self"
    })
};
var Bm = function(a) {
    var b = Q("settings-menu-caption"),
        c = Q("settings-menu"),
        d = Q("settings-menu-button");
    if (b && c && d) {
        E && (gd(b, "out-of-sight"), gd(c, "out-of-sight"), he(b, "visibility", ""), he(c, "visibility", ""));
        var f = new Kh;
        f.decorate(c);
        f = new Oh(b, f, Kk.getInstance());
        f.render(d);
        E ? (id(b, "out-of-sight"), id(c, "out-of-sight")) : (he(b, "visibility", ""), he(c, "visibility", ""));
        N(f, "action", x(this.handleMenuSelect_, this))
    }
    this.exportLinkHandler_ = t.exportLinkHandler;
    this.helpCenterUrl_ = a;
    this.idToHandler_ = this.mapHandlers_()
};
e = Bm.prototype;
e.mapHandlers_ = function() {
    var a = {};
    a.exportMI = x(this.handleExport_, this);
    a.feedMI = x(this.handleFeedLink_, this);
    a.lclMI = x(this.handleLocaleLink_, this);
    a.hcMI = x(this.handleHelpLink_, this);
    return a
};
e.handleMenuSelect_ = function(a) {
    a = a.target.getId().split("#");
    var b = a.shift();
    this.idToHandler_[b](a)
};
e.handleExport_ = function() {
    this.exportLinkHandler_ && this.exportLinkHandler_.doExport()
};
e.handleHelpLink_ = function() {
    zm(this.helpCenterUrl_, {
        target: "_blank"
    })
};
e.handleFeedLink_ = function() {
    t.control && (_gaq.push(["_trackEvent", "click", "feed"]), zm(t.control.getFeedLinkUrl(), {
        target: "_self"
    }))
};
e.handleLocaleLink_ = function(a) {
    if (0 < a.length) {
        var b = new ti(window.document.URL);
        b.setParameterValue("hl", a[0]);
        zm(b.toString(), {
            target: "_self"
        })
    }
};
var Cm = function(a, b, c) {
    c ? (b && (a = new Yl("locale-menu", "locale-menu-button"), N(a, "action", x(this.handleLocalePickerAction_, this))), this.manipulateOneGoogleBar_()) : new Bm(a)
};
v("trends.Layout", Cm, void 0);
Cm.prototype.handleLocalePickerAction_ = function(a) {
    var b = new ti(window.document.URL);
    b.setParameterValue("hl", a.selectedId);
    zm(b.toString(), {
        target: "_self"
    })
};
Cm.prototype.manipulateOneGoogleBar_ = function() {
    var a = Q("invisible-mobile-components"),
        b = Q("gbzh");
    b && (b.removeChild(b.childNodes[0]), b.appendChild(Q("mobile-sidebar-title")));
    b = Q("trends-sidebar-nav");
    if (Q("gbz")) {
        var c = Q("gbzc");
        this.removeGoogleLinks_(c);
        gd(c.firstChild, "onegoogle-first-foreign-child");
        c.insertBefore(b, c.firstChild)
    }(b = Q("gb")) && b.insertBefore(Q("onegoogle-title"), Q("gbr"));
    document.body.removeChild(a)
};
Cm.prototype.removeGoogleLinks_ = function(a) {
    for (; 7 < a.childElementCount - 2;) a.removeChild(a.childNodes[7])
};
var Dm = function(a, b, c, d) {
    this.domContainerElement_ = Q(a);
    this.eventTarget_ = b;
    this.innerElementType_ = d;
    this.currentDisplayed_ = 0;
    this.resetContainer_();
    N(this.eventTarget_, c, x(this.handleSubmit, this))
};
v("trends.ContentChanger", Dm, void 0);
Dm.prototype.getElements_ = function() {
    return this.domContainerElement_.getElementsByTagName(this.innerElementType_)
};
Dm.prototype.resetContainer_ = function() {
    for (var a = this.getElements_(), b = 0; b < a.length; b++) a[b].style.display = b == this.currentDisplayed_ ? "" : "none"
};
Dm.prototype.handleSubmit = function() {
    var a = this.getElements_();
    a[this.currentDisplayed_].style.display = "none";
    this.currentDisplayed_ = (this.currentDisplayed_ + 1) % a.length;
    a[this.currentDisplayed_].style.display = ""
};
var Em = function(a, b, c, d) {
    U.call(this);
    this.dom_ = c || ld();
    this.el_ = a;
    this.pages_ = [];
    this.tabLocation_ = b ? b : 0;
    this.useMouseDown_ = !! d;
    this.create_()
};
z(Em, U);
e = Em.prototype;
e.create_ = function() {
    this.el_.className = "goog-tabpane";
    var a = this.getChildNodes_();
    this.elButtonBar_ = this.dom_.createDom("ul", {
        className: "goog-tabpane-tabs",
        tabIndex: "0"
    });
    this.elContent_ = this.dom_.createDom("div", "goog-tabpane-cont");
    this.el_.appendChild(this.elContent_);
    var b = mb(this.el_);
    switch (this.tabLocation_) {
        case 0:
            b.insertBefore(this.elButtonBar_, this.elContent_);
            b.insertBefore(this.createClear_(), this.elContent_);
            xf(b, "goog-tabpane-top");
            break;
        case 1:
            b.appendChild(this.elButtonBar_);
            b.appendChild(this.createClear_());
            xf(b, "goog-tabpane-bottom");
            break;
        case 2:
            b.insertBefore(this.elButtonBar_, this.elContent_);
            xf(b, "goog-tabpane-left");
            break;
        case 3:
            b.insertBefore(this.elButtonBar_, this.elContent_);
            xf(b, "goog-tabpane-right");
            break;
        default:
            throw Error("Invalid tab location");
    }
    this.elButtonBar_.tabIndex = 0;
    N(this.elButtonBar_, this.useMouseDown_ ? "mousedown" : "click", this.onHeaderClick_, !1, this);
    N(this.elButtonBar_, "keydown", this.onHeaderKeyDown_, !1, this);
    this.createPages_(a)
};
e.createClear_ = function() {
    var a = ld(void 0),
        b = null,
        c = a.getDocument();
    if (E && c.createStyleSheet) a = b = c.createStyleSheet(), E && ba(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
    else {
        c = a.getElementsByTagNameAndClass("head")[0];
        c || (b = a.getElementsByTagNameAndClass("body")[0], c = a.createDom("head"), b.parentNode.insertBefore(c, b));
        var d = b = a.createDom("style");
        E && ba(d.cssText) ? d.cssText =
            ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : d.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
        a.appendChild(c, b)
    }
    return this.dom_.createDom("div", "goog-tabpane-clear")
};
e.disposeInternal = function() {
    Em.superClass_.disposeInternal.call(this);
    Qc(this.elButtonBar_, this.useMouseDown_ ? "mousedown" : "click", this.onHeaderClick_, !1, this);
    Qc(this.elButtonBar_, "keydown", this.onHeaderKeyDown_, !1, this);
    delete this.el_;
    this.elContent_ = this.elButtonBar_ = null
};
e.getChildNodes_ = function() {
    for (var a = [], b = Fd(this.el_); b;) a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : Ed(b.nextSibling, !0);
    return a
};
e.createPages_ = function(a) {
    for (var b, c = 0; b = a[c]; c++) this.addPage(new Fm(b))
};
e.addPage = function(a, b) {
    a.parent_ && a.parent_ != this && a.parent_ instanceof Em && a.parent_.removePage(a);
    var c = this.pages_.length;
    ba(b) && b != c ? (c = b, this.pages_.splice(c, 0, a), this.elButtonBar_.insertBefore(a.elTitle_, this.elButtonBar_.childNodes[c])) : (this.pages_.push(a), this.elButtonBar_.appendChild(a.elTitle_));
    a.setParent_(this, c);
    this.selected_ || (this.selected_ = a, this.dispatchEvent(new Gm("change", this, this.selected_)));
    this.elContent_.appendChild(a.elContent_);
    a.setVisible_(a == this.selected_);
    for (var d =
        c + 1; c = this.pages_[d]; d++) c.index_ = d
};
e.removePage = function(a) {
    ma(a) && (a = this.pages_[a]);
    this.pages_.splice(a.index_, 1);
    a.setParent_(null);
    Cd(a.elTitle_);
    Cd(a.elContent_);
    for (var b = 0; a = this.pages_[b]; b++) a.setParent_(this, b)
};
e.getPage = function(a) {
    return this.pages_[a]
};
e.setSelectedPage = function(a) {
    !a.isEnabled() || this.selected_ && a == this.selected_ || (this.selected_.setVisible_(!1), a.setVisible_(!0), this.selected_ = a, this.dispatchEvent(new Gm("change", this, this.selected_)))
};
e.setSelectedIndex = function(a) {
    0 <= a && a < this.pages_.length && this.setSelectedPage(this.pages_[a])
};
e.getSelectedIndex = function() {
    return this.selected_ ? this.selected_.index_ : -1
};
e.getContentElement = function() {
    return this.elContent_ || null
};
e.getElement = function() {
    return this.el_ || null
};
e.onHeaderClick_ = function(a) {
    for (var b = a.target; b != this.elButtonBar_;) {
        if ("LI" == b.tagName) {
            var c;
            for (c = 0; b = b.previousSibling; c++);
            this.setSelectedIndex(c);
            break
        }
        b = b.parentNode
    }
    a.preventDefault()
};
e.onHeaderKeyDown_ = function(a) {
    if (!(a.altKey || a.metaKey || a.ctrlKey)) switch (a.keyCode) {
        case 37:
            a = this.selected_.getIndex() - 1;
            this.setSelectedIndex(0 > a ? this.pages_.length - 1 : a);
            break;
        case 39:
            a = this.selected_.getIndex() + 1;
            this.setSelectedIndex(a >= this.pages_.length ? 0 : a);
            break;
        case 36:
            this.setSelectedIndex(0);
            break;
        case 35:
            this.setSelectedIndex(this.pages_.length - 1)
    }
};
var Fm = function(a, b, c) {
    var d, f;
    if (w(a) && !ba(b)) d = a;
    else if (b) d = b, f = a;
    else if (a) {
        if (b = Fd(a)) d = Sd(b), b.parentNode.removeChild(b);
        f = a
    }
    this.dom_ = c || ld();
    this.elContent_ = f || this.dom_.createDom("div");
    this.elTitle_ = this.dom_.createDom("li", null, d);
    this.index_ = this.parent_ = null;
    this.enabled_ = !0
};
e = Fm.prototype;
e.getTitleElement = function() {
    return this.elTitle_
};
e.getContentElement = function() {
    return this.elContent_
};
e.getIndex = function() {
    return this.index_
};
e.getParent = function() {
    return this.parent_
};
e.select = function() {
    this.parent_ && this.parent_.setSelectedPage(this)
};
e.setEnabled = function(a) {
    this.enabled_ = a;
    this.elTitle_.className = a ? "goog-tabpane-tab" : "goog-tabpane-tab-disabled"
};
e.isEnabled = function() {
    return this.enabled_
};
e.setVisible_ = function(a) {
    this.isEnabled() && (this.elContent_.style.display = a ? "" : "none", this.elTitle_.className = a ? "goog-tabpane-tab-selected" : "goog-tabpane-tab")
};
e.setParent_ = function(a, b) {
    this.parent_ = a;
    this.index_ = ba(b) ? b : null
};
var Gm = function(a, b, c) {
    L.call(this, a, b);
    this.page = c
};
z(Gm, L);
var Hm = function(a) {
    U.call(this);
    this.tabPane_ = new Em(Q(a));
    N(this.tabPane_, "change", x(this.handleTabChanged_, this))
};
z(Hm, U);
v("trends.TabPane", Hm, void 0);
Hm.prototype.addTab = function(a, b, c, d, f) {
    a = new Fm(Q(a), b);
    he(a.getTitleElement(), "border-bottom-color", "#" + c);
    f && he(a.getTitleElement(), "max-width", f);
    d && a.getTitleElement().setAttribute("data-tooltip", d);
    c = !this.tabPane_.getPage(0);
    this.tabPane_.addPage(a);
    c && gd(a.getTitleElement(), "first-tab")
};
Hm.prototype.addTab = Hm.prototype.addTab;
Hm.prototype.handleTabChanged_ = function(a) {
    gd(this.tabPane_.getPage(0).getTitleElement(), "first-tab");
    this.dispatchEvent(new Im("change", this, a.page.getIndex()))
};
var Im = function(a, b, c) {
    L.call(this, a, b);
    this.tabIndex = c
};
z(Im, L);
var Jm = function(a, b, c, d, f) {
    this.chart_ = new google.visualization.ColumnChart(Q(a));
    this.width_ = d;
    this.height_ = f;
    this.chartOptions_ = this.createChartOptions_(c);
    this.dataArray_ = b
};
v("trends.AveragesChart", Jm, void 0);
Jm.prototype.render = function() {
    this.draw_(this.createInitialDataArray_(this.dataArray_));
    this.draw_(this.dataArray_)
};
Jm.prototype.render = Jm.prototype.render;
Jm.prototype.createChartOptions_ = function(a) {
    return {
        width: this.width_,
        height: this.height_,
        legend: {
            position: "none"
        },
        animation: {
            easing: "inAndOut",
            duration: "1500"
        },
        hAxis: {
            textStyle: {
                fontSize: "9",
                color: "#999999"
            }
        },
        vAxis: {
            baseline: -1,
            baselineColor: "#999999",
            gridlines: {
                count: 0
            },
            textPosition: "none",
            viewWindow: {
                min: -1,
                max: 100
            }
        },
        chartArea: {
            left: 0,
            top: "10",
            width: this.width_,
            height: this.height_ - 10 - 30
        },
        colors: a,
        tooltip: {
            isHtml: !0,
            showColorCode: !0,
            textStyle: {
                fontSize: 13
            }
        },
        bar: {
            groupWidth: 60
        }
    }
};
Jm.prototype.createInitialDataArray_ = function(a) {
    for (var b = [a[1][0]], c = 1; c < a[1].length; c++) b.push(0);
    return [a[0], b]
};
Jm.prototype.draw_ = function(a) {
    a = new google.visualization.arrayToDataTable(a);
    this.chart_.draw(a, this.chartOptions_)
};
var Km = function(a) {
    this.imageTagId = a;
    this.OriginalImageUrl = document.getElementById(a).src
};
Km.prototype.setMarker = function(a, b, c, d) {
    a = "&chm=a," + c + "," + b + "," + a + ",8";
    d ? (new Image).src = this.OriginalImageUrl + a : document.getElementById(this.imageTagId).src = this.OriginalImageUrl + a
};
Km.prototype.reset = function() {
    document.getElementById(this.imageTagId).src = this.OriginalImageUrl
};
v("trends.GraphController", Km, void 0);
Km.prototype.setMarker = Km.prototype.setMarker;
Km.prototype.reset = Km.prototype.reset;
Km.invokeSetMarker = function(a, b, c, d, f) {
    for (var g = 0; g < a.length; g++) a[g].setMarker(b, c, d, f)
};
Km.invokeReset = function(a) {
    for (var b = 0; b < a.length; b++) a[b].reset()
};
var Lm = function(a, b, c, d, f, g) {
    this.data_ = a;
    this.options_ = b;
    this.linkTemplate_ = c;
    this.segmentationLevel = d;
    this.containerElem_ = Q(f);
    this.chart_ = g || new google.visualization.GeoChart(this.containerElem_);
    null != g || google.visualization.events.addListener(this.chart_, "regionClick", x(this.regionClicked, this));
    N(window, "resize", x(this.draw, this))
};
v("trends.GeoMap", Lm, void 0);
Lm.prototype.draw = function() {
    this.chart_.draw(google.visualization.arrayToDataTable(this.data_), this.options_)
};
Lm.prototype.draw = Lm.prototype.draw;
Lm.prototype.hasData = function() {
    return this.data_ && 1 < this.data_.length
};
Lm.prototype.regionClicked = function(a) {
    a.region && (a = a.region, "dma" == this.segmentationLevel && (a = a.replace(/^[A-Z]{2}-/, "")), t.geoMapCodeOverrides && t.geoMapCodeOverrides[a] && (a = t.geoMapCodeOverrides[a]), window.location.href = this.linkTemplate_.replace(/%25s/g, a))
};
var Mm = function(a, b) {
    U.call(this);
    this.element_ = a;
    var c = Gd(this.element_) ? this.element_ : this.element_ ? this.element_.body : null;
    this.isRtl_ = !! c && se(c);
    this.listenKey_ = N(this.element_, J ? "DOMMouseScroll" : "mousewheel", this, b)
};
z(Mm, U);
Mm.prototype.handleEvent = function(a) {
    var b = 0,
        c = 0,
        d = 0;
    a = a.getBrowserEvent();
    if ("mousewheel" == a.type) {
        c = 1;
        if (E || K && (Nb || Zb("532.0"))) c = 40;
        d = Nm(-a.wheelDelta, c);
        ba(a.wheelDeltaX) ? (b = Nm(-a.wheelDeltaX, c), c = Nm(-a.wheelDeltaY, c)) : c = d
    } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), ba(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    ma(this.maxDeltaX_) && (b = Xc(b, -this.maxDeltaX_, this.maxDeltaX_));
    ma(this.maxDeltaY_) && (c = Xc(c, -this.maxDeltaY_, this.maxDeltaY_));
    this.isRtl_ && (b = -b);
    b = new Om(d, a, b, c);
    this.dispatchEvent(b)
};
var Nm = function(a, b) {
    return K && (Mb || Ob) && 0 != a % b ? a : a / b
};
Mm.prototype.disposeInternal = function() {
    Mm.superClass_.disposeInternal.call(this);
    Rc(this.listenKey_);
    this.listenKey_ = null
};
var Om = function(a, b, c, d) {
    lc.call(this, b);
    this.type = "mousewheel";
    this.detail = a;
    this.deltaX = c;
    this.deltaY = d
};
z(Om, lc);
var Pm = function() {
    Gi.call(this);
    this.queue = []
};
z(Pm, Gi);
Pm.prototype.add = function(a) {
    B(this.isStopped(), "Not allowed to add animations to a running animation queue.");
    xb(this.queue, a) || (this.queue.push(a), N(a, "finish", this.onAnimationFinish, !1, this))
};
Pm.prototype.remove = function(a) {
    B(this.isStopped(), "Not allowed to remove animations from a running animation queue.");
    zb(this.queue, a) && Qc(a, "finish", this.onAnimationFinish, !1, this)
};
Pm.prototype.disposeInternal = function() {
    D(this.queue, function(a) {
        a.dispose()
    });
    this.queue.length = 0;
    Pm.superClass_.disposeInternal.call(this)
};
var Qm = function() {
    Pm.call(this);
    this.finishedCounter_ = 0
};
z(Qm, Pm);
Qm.prototype.play = function(a) {
    if (0 == this.queue.length) return !1;
    if (a || this.isStopped()) this.finishedCounter_ = 0, this.onBegin();
    else if (this.isPlaying()) return !1;
    this.onPlay();
    if (this.isPaused()) this.onResume();
    var b = this.isPaused() && !a;
    this.startTime = Aa();
    this.endTime = null;
    this.setStatePlaying();
    D(this.queue, function(c) {
        b && !c.isPaused() || c.play(a)
    });
    return !0
};
Qm.prototype.pause = function() {
    this.isPlaying() && (D(this.queue, function(a) {
        a.isPlaying() && a.pause()
    }), this.setStatePaused(), this.onPause())
};
Qm.prototype.stop = function(a) {
    D(this.queue, function(b) {
        b.isStopped() || b.stop(a)
    });
    this.setStateStopped();
    this.endTime = Aa();
    this.onStop();
    this.onEnd()
};
Qm.prototype.onAnimationFinish = function() {
    this.finishedCounter_++;
    this.finishedCounter_ == this.queue.length && (this.endTime = Aa(), this.setStateStopped(), this.onFinish(), this.onEnd())
};
var Rm = function() {
    U.call(this)
};
z(Rm, U);
e = Rm.prototype;
e.value_ = 0;
e.minimum_ = 0;
e.maximum_ = 100;
e.extent_ = 0;
e.step_ = 1;
e.isChanging_ = !1;
e.mute_ = !1;
e.setMute = function(a) {
    this.mute_ = a
};
e.setValue = function(a) {
    a = this.roundToStepWithMin(a);
    this.value_ != a && (this.value_ = a + this.extent_ > this.maximum_ ? this.maximum_ - this.extent_ : a < this.minimum_ ? this.minimum_ : a, this.isChanging_ || this.mute_ || this.dispatchEvent("change"))
};
e.getValue = function() {
    return this.roundToStepWithMin(this.value_)
};
e.setExtent = function(a) {
    a = this.roundToStepWithMin(a);
    this.extent_ != a && (this.extent_ = 0 > a ? 0 : this.value_ + a > this.maximum_ ? this.maximum_ - this.value_ : a, this.isChanging_ || this.mute_ || this.dispatchEvent("change"))
};
e.getExtent = function() {
    return this.roundToStep(this.extent_)
};
e.setMinimum = function(a) {
    if (this.minimum_ != a) {
        var b = this.isChanging_;
        this.isChanging_ = !0;
        this.minimum_ = a;
        a + this.extent_ > this.maximum_ && (this.extent_ = this.maximum_ - this.minimum_);
        a > this.value_ && this.setValue(a);
        a > this.maximum_ && (this.extent_ = 0, this.setMaximum(a), this.setValue(a));
        (this.isChanging_ = b) || this.mute_ || this.dispatchEvent("change")
    }
};
e.getMinimum = function() {
    return this.roundToStepWithMin(this.minimum_)
};
e.setMaximum = function(a) {
    a = this.roundToStepWithMin(a);
    if (this.maximum_ != a) {
        var b = this.isChanging_;
        this.isChanging_ = !0;
        this.maximum_ = a;
        a < this.value_ + this.extent_ && this.setValue(a - this.extent_);
        a < this.minimum_ && (this.extent_ = 0, this.setMinimum(a), this.setValue(this.maximum_));
        a < this.minimum_ + this.extent_ && (this.extent_ = this.maximum_ - this.minimum_);
        (this.isChanging_ = b) || this.mute_ || this.dispatchEvent("change")
    }
};
e.getMaximum = function() {
    return this.roundToStepWithMin(this.maximum_)
};
e.getStep = function() {
    return this.step_
};
e.setStep = function(a) {
    this.step_ != a && (this.step_ = a, a = this.isChanging_, this.isChanging_ = !0, this.setMaximum(this.getMaximum()), this.setExtent(this.getExtent()), this.setValue(this.getValue()), (this.isChanging_ = a) || this.mute_ || this.dispatchEvent("change"))
};
e.roundToStepWithMin = function(a) {
    return null == this.step_ ? a : this.minimum_ + Math.round((a - this.minimum_) / this.step_) * this.step_
};
e.roundToStep = function(a) {
    return null == this.step_ ? a : Math.round(a / this.step_) * this.step_
};
var Sm = function(a, b) {
    fg.call(this, a);
    this.additionalAnimations_ = null;
    this.rangeModel = new Rm;
    this.labelFn_ = b || Wc;
    N(this.rangeModel, "change", this.handleRangeModelChange, !1, this)
};
z(Sm, fg);
e = Sm.prototype;
e.orientation_ = "horizontal";
e.isAnimating_ = !1;
e.moveToPointEnabled_ = !1;
e.blockIncrement_ = 10;
e.minExtent_ = 0;
e.isHandleMouseWheel_ = !0;
e.mouseDownTime_ = 0;
e.MOUSE_DOWN_DELAY_ = 1E3;
e.enabled_ = !0;
e.flipForRtl_ = !1;
e.createDom = function() {
    Sm.superClass_.createDom.call(this);
    var a = this.getDomHelper().createDom("div", this.getCssClass(this.orientation_));
    this.decorateInternal(a)
};
e.decorateInternal = function(a) {
    Sm.superClass_.decorateInternal.call(this, a);
    B(a);
    xf(a, this.getCssClass(this.orientation_));
    this.createThumbs();
    this.setAriaRoles()
};
e.enterDocument = function() {
    Sm.superClass_.enterDocument.call(this);
    this.valueDragger_ = new Wf(this.valueThumb);
    this.extentDragger_ = new Wf(this.extentThumb);
    this.valueDragger_.enableRightPositioningForRtl(this.flipForRtl_);
    this.extentDragger_.enableRightPositioningForRtl(this.flipForRtl_);
    this.valueDragger_.defaultAction = this.extentDragger_.defaultAction = fa;
    this.keyHandler_ = new Cg(this.getElement());
    this.enableEventHandlers_(!0);
    this.getElement().tabIndex = 0;
    this.updateUi_()
};
e.enableEventHandlers_ = function(a) {
    a ? (this.getHandler().listen(this.valueDragger_, "beforedrag", this.handleBeforeDrag_).listen(this.extentDragger_, "beforedrag", this.handleBeforeDrag_).listen(this.valueDragger_, ["start", "end"], this.handleThumbDragStartEnd_).listen(this.extentDragger_, ["start", "end"], this.handleThumbDragStartEnd_).listen(this.keyHandler_, "key", this.handleKeyDown_).listen(this.getElement(), "click", this.handleMouseDownAndClick_).listen(this.getElement(), "mousedown", this.handleMouseDownAndClick_),
        this.isHandleMouseWheel() && this.enableMouseWheelHandling_(!0)) : (this.getHandler().unlisten(this.valueDragger_, "beforedrag", this.handleBeforeDrag_).unlisten(this.extentDragger_, "beforedrag", this.handleBeforeDrag_).unlisten(this.valueDragger_, ["start", "end"], this.handleThumbDragStartEnd_).unlisten(this.extentDragger_, ["start", "end"], this.handleThumbDragStartEnd_).unlisten(this.keyHandler_, "key", this.handleKeyDown_).unlisten(this.getElement(), "click", this.handleMouseDownAndClick_).unlisten(this.getElement(),
        "mousedown", this.handleMouseDownAndClick_), this.isHandleMouseWheel() && this.enableMouseWheelHandling_(!1))
};
e.exitDocument = function() {
    Sm.superClass_.exitDocument.call(this);
    hc(this.valueDragger_, this.extentDragger_, this.keyHandler_, this.mouseWheelHandler_)
};
e.handleBeforeDrag_ = function(a) {
    var b = a.dragger == this.valueDragger_ ? this.valueThumb : this.extentThumb,
        c;
    "vertical" == this.orientation_ ? (c = this.getElement().clientHeight - b.offsetHeight, c = (c - a.top) / c * (this.getMaximum() - this.getMinimum()) + this.getMinimum()) : (c = this.getElement().clientWidth - b.offsetWidth, c = a.left / c * (this.getMaximum() - this.getMinimum()) + this.getMinimum());
    c = a.dragger == this.valueDragger_ ? Math.min(Math.max(c, this.getMinimum()), this.getValue() + this.getExtent()) : Math.min(Math.max(c, this.getValue()),
        this.getMaximum());
    this.setThumbPosition_(b, c)
};
e.handleThumbDragStartEnd_ = function(a) {
    var b = "start" == a.type;
    Bf(mb(this.getElement()), "goog-slider-dragging", b);
    Bf(mb(a.target.handle), "goog-slider-thumb-dragging", b);
    a = a.dragger == this.valueDragger_;
    b ? (this.dispatchEvent("l"), this.dispatchEvent(a ? "h" : "j")) : (this.dispatchEvent("m"), this.dispatchEvent(a ? "i" : "k"))
};
e.handleKeyDown_ = function(a) {
    var b = !0;
    switch (a.keyCode) {
        case 36:
            this.animatedSetValue(this.getMinimum());
            break;
        case 35:
            this.animatedSetValue(this.getMaximum());
            break;
        case 33:
            this.moveThumbs(this.getBlockIncrement());
            break;
        case 34:
            this.moveThumbs(-this.getBlockIncrement());
            break;
        case 37:
            var c = this.flipForRtl_ && this.isRightToLeft() ? 1 : -1;
            this.moveThumbs(a.shiftKey ? c * this.getBlockIncrement() : c * this.getUnitIncrement());
            break;
        case 40:
            this.moveThumbs(a.shiftKey ? -this.getBlockIncrement() : -this.getUnitIncrement());
            break;
        case 39:
            c = this.flipForRtl_ && this.isRightToLeft() ? -1 : 1;
            this.moveThumbs(a.shiftKey ? c * this.getBlockIncrement() : c * this.getUnitIncrement());
            break;
        case 38:
            this.moveThumbs(a.shiftKey ? this.getBlockIncrement() : this.getUnitIncrement());
            break;
        default:
            b = !1
    }
    b && a.preventDefault()
};
e.handleMouseDownAndClick_ = function(a) {
    this.getElement().focus && this.getElement().focus();
    var b = a.target;
    Hd(this.valueThumb, b) || Hd(this.extentThumb, b) || (b = "click" == a.type, b && Aa() < this.mouseDownTime_ + this.MOUSE_DOWN_DELAY_ || (b || (this.mouseDownTime_ = Aa()), this.moveToPointEnabled_ ? this.animatedSetValue(this.getValueFromMousePosition(a)) : this.startBlockIncrementing_(a)))
};
e.handleMouseWheel_ = function(a) {
    this.moveThumbs((0 < a.detail ? -1 : 1) * this.getUnitIncrement());
    a.preventDefault()
};
e.startBlockIncrementing_ = function(a) {
    this.storeMousePos_(a);
    this.thumbToMove_ = this.getClosestThumb_(this.getValueFromMousePosition(a));
    this.incrementing_ = "vertical" == this.orientation_ ? this.lastMousePosition_ < this.thumbToMove_.offsetTop : this.lastMousePosition_ > this.getOffsetStart_(this.thumbToMove_) + this.thumbToMove_.offsetWidth;
    a = kd(this.getElement());
    this.getHandler().listen(a, "mouseup", this.stopBlockIncrementing_, !0).listen(this.getElement(), "mousemove", this.storeMousePos_);
    this.incTimer_ || (this.incTimer_ =
        new lf(200), this.getHandler().listen(this.incTimer_, "tick", this.handleTimerTick_));
    this.handleTimerTick_();
    this.incTimer_.start()
};
e.handleTimerTick_ = function() {
    var a;
    if ("vertical" == this.orientation_) {
        var b = this.lastMousePosition_,
            c = this.thumbToMove_.offsetTop;
        this.incrementing_ ? b < c && (a = this.getThumbPosition_(this.thumbToMove_) + this.getBlockIncrement()) : b > c + this.thumbToMove_.offsetHeight && (a = this.getThumbPosition_(this.thumbToMove_) - this.getBlockIncrement())
    } else b = this.lastMousePosition_, c = this.getOffsetStart_(this.thumbToMove_), this.incrementing_ ? b > c + this.thumbToMove_.offsetWidth && (a = this.getThumbPosition_(this.thumbToMove_) +
        this.getBlockIncrement()) : b < c && (a = this.getThumbPosition_(this.thumbToMove_) - this.getBlockIncrement());
    ba(a) && this.setThumbPosition_(this.thumbToMove_, a)
};
e.stopBlockIncrementing_ = function() {
    this.incTimer_ && this.incTimer_.stop();
    var a = kd(this.getElement());
    this.getHandler().unlisten(a, "mouseup", this.stopBlockIncrementing_, !0).unlisten(this.getElement(), "mousemove", this.storeMousePos_)
};
e.getRelativeMousePos_ = function(a) {
    a = xe(a, this.getElement());
    return "vertical" == this.orientation_ ? a.y : this.flipForRtl_ && this.isRightToLeft() ? this.getElement().clientWidth - a.x : a.x
};
e.storeMousePos_ = function(a) {
    this.lastMousePosition_ = this.getRelativeMousePos_(a)
};
e.getValueFromMousePosition = function(a) {
    var b = this.getMinimum(),
        c = this.getMaximum();
    if ("vertical" == this.orientation_) {
        var d = this.valueThumb.offsetHeight,
            f = this.getElement().clientHeight - d;
        a = this.getRelativeMousePos_(a) - d / 2;
        return (c - b) * (f - a) / f + b
    }
    d = this.valueThumb.offsetWidth;
    f = this.getElement().clientWidth - d;
    a = this.getRelativeMousePos_(a) - d / 2;
    return (c - b) * a / f + b
};
e.getThumbPosition_ = function(a) {
    if (a == this.valueThumb) return this.rangeModel.getValue();
    if (a == this.extentThumb) return this.rangeModel.getValue() + this.rangeModel.getExtent();
    throw Error("Illegal thumb element. Neither minThumb nor maxThumb");
};
e.moveThumbs = function(a) {
    Math.abs(a) < this.getStep() && (a = (0 == a ? 0 : 0 > a ? -1 : 1) * this.getStep());
    var b = this.getThumbPosition_(this.valueThumb) + a;
    a = this.getThumbPosition_(this.extentThumb) + a;
    b = Xc(b, this.getMinimum(), this.getMaximum() - this.minExtent_);
    a = Xc(a, this.getMinimum() + this.minExtent_, this.getMaximum());
    this.setValueAndExtent(b, a - b)
};
e.setThumbPosition_ = function(a, b) {
    var c = this.rangeModel.roundToStepWithMin(b),
        d = a == this.valueThumb ? c : this.rangeModel.getValue(),
        c = a == this.extentThumb ? c : this.rangeModel.getValue() + this.rangeModel.getExtent();
    d >= this.getMinimum() && c >= d + this.minExtent_ && this.getMaximum() >= c && this.setValueAndExtent(d, c - d)
};
e.setValueAndExtent = function(a, b) {
    this.getMinimum() <= a && a <= this.getMaximum() - b && this.minExtent_ <= b && b <= this.getMaximum() - a && (a != this.getValue() || b != this.getExtent()) && (this.rangeModel.setMute(!0), this.rangeModel.setExtent(0), this.rangeModel.setValue(a), this.rangeModel.setExtent(b), this.rangeModel.setMute(!1), this.handleRangeModelChange(null))
};
e.getMinimum = function() {
    return this.rangeModel.getMinimum()
};
e.setMinimum = function(a) {
    this.rangeModel.setMinimum(a)
};
e.getMaximum = function() {
    return this.rangeModel.getMaximum()
};
e.setMaximum = function(a) {
    this.rangeModel.setMaximum(a)
};
e.getClosestThumb_ = function(a) {
    return a <= this.rangeModel.getValue() + this.rangeModel.getExtent() / 2 ? this.valueThumb : this.extentThumb
};
e.handleRangeModelChange = function() {
    this.updateUi_();
    this.updateAriaStates();
    this.dispatchEvent("change")
};
e.updateUi_ = function() {
    if (this.valueThumb && !this.isAnimating_) {
        var a = this.getThumbCoordinateForValue(this.getThumbPosition_(this.valueThumb)),
            b = this.getThumbCoordinateForValue(this.getThumbPosition_(this.extentThumb));
        if ("vertical" == this.orientation_) this.valueThumb.style.top = a.y + "px", this.extentThumb.style.top = b.y + "px", this.rangeHighlight && (a = this.calculateRangeHighlightPositioning_(b.y, a.y, this.valueThumb.offsetHeight), this.rangeHighlight.style.top = a.offset + "px", this.rangeHighlight.style.height =
            a.size + "px");
        else {
            var c = this.flipForRtl_ && this.isRightToLeft() ? "right" : "left";
            this.valueThumb.style[c] = a.x + "px";
            this.extentThumb.style[c] = b.x + "px";
            this.rangeHighlight && (a = this.calculateRangeHighlightPositioning_(a.x, b.x, this.valueThumb.offsetWidth), this.rangeHighlight.style[c] = a.offset + "px", this.rangeHighlight.style.width = a.size + "px")
        }
    }
};
e.calculateRangeHighlightPositioning_ = function(a, b, c) {
    var d = Math.ceil(c / 2);
    return {
        offset: a + d,
        size: Math.max(b - a + c - 2 * d, 0)
    }
};
e.getThumbCoordinateForValue = function(a) {
    var b = new P;
    if (this.valueThumb) {
        var c = this.getMinimum(),
            d = this.getMaximum();
        a = a == c && c == d ? 0 : (a - c) / (d - c);
        "vertical" == this.orientation_ ? (c = this.valueThumb.offsetHeight, c = this.getElement().clientHeight - c, a = Math.round(a * c), b.x = this.getOffsetStart_(this.valueThumb), b.y = c - a) : (c = this.getElement().clientWidth - this.valueThumb.offsetWidth, a = Math.round(a * c), b.x = a, b.y = this.valueThumb.offsetTop)
    }
    return b
};
e.animatedSetValue = function(a) {
    a = Xc(a, this.getMinimum(), this.getMaximum());
    this.isAnimating_ && this.currentAnimation_.stop(!0);
    var b = new Qm,
        c, d = this.getClosestThumb_(a),
        f = this.getValue(),
        g = this.getExtent(),
        h = this.getThumbPosition_(d),
        k = this.getThumbCoordinateForValue(h);
    c = this.getStep();
    Math.abs(a - h) < c && (a = Xc(h + (a > h ? c : -c), this.getMinimum(), this.getMaximum()));
    this.setThumbPosition_(d, a);
    h = this.getThumbCoordinateForValue(this.getThumbPosition_(d));
    c = "vertical" == this.orientation_ ? [this.getOffsetStart_(d),
        h.y
    ] : [h.x, d.offsetTop];
    k = new Wj(d, [k.x, k.y], c, 100);
    k.enableRightPositioningForRtl(this.flipForRtl_);
    b.add(k);
    this.rangeHighlight && this.addRangeHighlightAnimations_(d, f, g, h, b);
    this.additionalAnimations_ && (a = this.additionalAnimations_.createAnimations(f, a, 100), D(a, function(a) {
        b.add(a)
    }));
    this.currentAnimation_ = b;
    this.getHandler().listen(b, "end", this.endAnimation_);
    this.isAnimating_ = !0;
    b.play(!1)
};
e.addRangeHighlightAnimations_ = function(a, b, c, d, f) {
    var g = this.getThumbCoordinateForValue(b),
        h = this.getThumbCoordinateForValue(b + c);
    b = g;
    c = h;
    a == this.valueThumb ? b = d : c = d;
    "vertical" == this.orientation_ ? (a = this.calculateRangeHighlightPositioning_(h.y, g.y, this.valueThumb.offsetHeight), g = this.calculateRangeHighlightPositioning_(c.y, b.y, this.valueThumb.offsetHeight), d = new Wj(this.rangeHighlight, [this.getOffsetStart_(this.rangeHighlight), a.offset], [this.getOffsetStart_(this.rangeHighlight), g.offset], 100), a =
        new Yj(this.rangeHighlight, a.size, g.size, 100)) : (a = this.calculateRangeHighlightPositioning_(g.x, h.x, this.valueThumb.offsetWidth), g = this.calculateRangeHighlightPositioning_(b.x, c.x, this.valueThumb.offsetWidth), d = new Wj(this.rangeHighlight, [a.offset, this.rangeHighlight.offsetTop], [g.offset, this.rangeHighlight.offsetTop], 100), a = new Xj(this.rangeHighlight, a.size, g.size, 100));
    d.enableRightPositioningForRtl(this.flipForRtl_);
    a.enableRightPositioningForRtl(this.flipForRtl_);
    f.add(d);
    f.add(a)
};
e.endAnimation_ = function() {
    this.isAnimating_ = !1
};
e.setOrientation = function(a) {
    if (this.orientation_ != a) {
        var b = this.getCssClass(this.orientation_),
            c = this.getCssClass(a);
        this.orientation_ = a;
        this.getElement() && (a = B(this.getElement()), wf(a, b) && (zf(a, b), xf(a, c)), b = this.flipForRtl_ && this.isRightToLeft() ? "right" : "left", this.valueThumb.style[b] = this.valueThumb.style.top = "", this.extentThumb.style[b] = this.extentThumb.style.top = "", this.rangeHighlight && (this.rangeHighlight.style[b] = this.rangeHighlight.style.top = "", this.rangeHighlight.style.width = this.rangeHighlight.style.height =
            ""), this.updateUi_())
    }
};
e.getOrientation = function() {
    return this.orientation_
};
e.disposeInternal = function() {
    Sm.superClass_.disposeInternal.call(this);
    this.incTimer_ && this.incTimer_.dispose();
    delete this.incTimer_;
    this.currentAnimation_ && this.currentAnimation_.dispose();
    delete this.currentAnimation_;
    delete this.valueThumb;
    delete this.extentThumb;
    this.rangeHighlight && delete this.rangeHighlight;
    this.rangeModel.dispose();
    delete this.rangeModel;
    this.keyHandler_ && (this.keyHandler_.dispose(), delete this.keyHandler_);
    this.mouseWheelHandler_ && (this.mouseWheelHandler_.dispose(), delete this.mouseWheelHandler_);
    this.valueDragger_ && (this.valueDragger_.dispose(), delete this.valueDragger_);
    this.extentDragger_ && (this.extentDragger_.dispose(), delete this.extentDragger_)
};
e.getBlockIncrement = function() {
    return this.blockIncrement_
};
e.setBlockIncrement = function(a) {
    this.blockIncrement_ = a
};
e.unitIncrement_ = 1;
e.getUnitIncrement = function() {
    return this.unitIncrement_
};
e.getStep = function() {
    return this.rangeModel.getStep()
};
e.setStep = function(a) {
    this.rangeModel.setStep(a)
};
e.setMoveToPointEnabled = function(a) {
    this.moveToPointEnabled_ = a
};
e.getValue = function() {
    return this.rangeModel.getValue()
};
e.setValue = function(a) {
    this.setThumbPosition_(this.valueThumb, a)
};
e.getExtent = function() {
    return this.rangeModel.getExtent()
};
e.setExtent = function(a) {
    this.setThumbPosition_(this.extentThumb, this.rangeModel.getValue() + a)
};
e.setVisible = function(a) {
    S(this.getElement(), a);
    a && this.updateUi_()
};
e.setAriaRoles = function() {
    var a = this.getElement();
    B(a, "The DOM element for the slider base cannot be null.");
    rf(a, "slider");
    this.updateAriaStates()
};
e.updateAriaStates = function() {
    var a = this.getElement();
    a && (Y(a, "valuemin", this.getMinimum()), Y(a, "valuemax", this.getMaximum()), Y(a, "valuenow", this.getValue()), Y(a, "valuetext", this.getTextValue() || ""))
};
e.isHandleMouseWheel = function() {
    return this.isHandleMouseWheel_
};
e.enableMouseWheelHandling_ = function(a) {
    a ? (this.mouseWheelHandler_ || (this.mouseWheelHandler_ = new Mm(this.getElement())), this.getHandler().listen(this.mouseWheelHandler_, "mousewheel", this.handleMouseWheel_)) : this.getHandler().unlisten(this.mouseWheelHandler_, "mousewheel", this.handleMouseWheel_)
};
e.setEnabled = function(a) {
    this.enabled_ != a && this.dispatchEvent(a ? "enable" : "disable") && (this.enabled_ = a, this.enableEventHandlers_(a), a || this.stopBlockIncrementing_(), Bf(B(this.getElement()), "goog-slider-disabled", !a))
};
e.isEnabled = function() {
    return this.enabled_
};
e.getOffsetStart_ = function(a) {
    return this.flipForRtl_ ? Oe(a) : a.offsetLeft
};
e.getTextValue = function() {
    return this.labelFn_(this.getValue())
};
var Tm = function(a, b) {
    Sm.call(this, a, b);
    this.rangeModel.setExtent(0)
};
z(Tm, Sm);
Tm.prototype.getCssClass = function(a) {
    return "vertical" == a ? "goog-slider-vertical" : "goog-slider-horizontal"
};
Tm.prototype.createThumbs = function() {
    var a = this.getElement(),
        b = nd(null, "goog-slider-thumb", a)[0];
    b || (b = this.createThumb_(), a.appendChild(b));
    this.valueThumb = this.extentThumb = b
};
Tm.prototype.createThumb_ = function() {
    var a = this.getDomHelper().createDom("div", "goog-slider-thumb");
    rf(a, "button");
    return a
};
var Um = function(a, b) {
    this.idPrefix_ = a;
    this.getAnimationDataUrlCallback_ = b;
    this.map_ = null;
    this.isInAnimationMode = !1;
    this.startAnimationDiv_ = Q(a + "_startAnimation");
    this.animationContentDiv_ = Q(a + "_animationContent");
    this.animationLoadingDiv_ = Q(a + "_animationLoading");
    this.animationErrorDiv_ = Q(a + "_animationError");
    this.animationTimeoutDiv_ = Q(a + "_animationTimeout");
    this.animationButtonsDiv_ = Q(a + "_animationButtons");
    this.animationPlayButtonDiv_ = Q(a + "_animationPlay");
    this.animationPauseButtonDiv_ = Q(a + "_animationPause");
    this.animationTimeDiv_ = Q(a + "_animationTime");
    this.animationSliderDiv_ = Q(a + "_animationSlider");
    this.lastTimestamp_ = 0;
    this.timeToString_ = [];
    this.paused_ = !1;
    this.animationZippy_ = new nk(this.startAnimationDiv_, this.animationContentDiv_);
    N(this.animationZippy_, "toggle", x(this.handleZippyToggle_, this));
    this.animationSlider_ = new Tm;
    this.animationSliderInitialized_ = !1;
    this.initHoverToggles_()
}, Vm = {}, Wm = {}, Xm = null,
    Ym = 0;
e = Um.prototype;
e.prepareToShowMap = function(a) {
    this.map_ = a;
    this.hideAllDivs_();
    this.isInAnimationMode ? (S(this.animationButtonsDiv_, !0), S(this.animationPlayButtonDiv_, !0)) : S(this.startAnimationDiv_, a.isAnimationable())
};
e.handleNewAnimationData = function(a) {
    if (this.isInAnimationMode) {
        var b = Wm[a.reqId];
        a.data && (Vm[b] = a);
        if (Xm == b)
            if (Xm = null, a.errorMsg) this.onAnimationDataError_(a.errorMsg);
            else this.onAnimationDataLoaded_(a), this.showAnimationLoading_(!1)
    }
};
e.loadAnimation = function() {
    this.isInAnimationMode = !0;
    this.showAnimationLoading_(!0);
    var a = this.getAnimationDataUrlCallback_();
    this.initSliderIfNotAlready_();
    this.loadAnimationData_(a)
};
e.playAnimation = function(a) {
    this.animationSlider_.getValue() == this.lastTimestamp_ && this.animationSlider_.setValue(0);
    a = 1E3 * a / this.lastTimestamp_;
    this.paused_ = !1;
    X(za(this.drawAnimationFrame_, a, this.animationSlider_.getValue()), a, this);
    S(this.animationPlayButtonDiv_, !1);
    S(this.animationPauseButtonDiv_, !0)
};
e.pauseAnimation = function() {
    this.paused_ = !0;
    S(this.animationPlayButtonDiv_, !0);
    S(this.animationPauseButtonDiv_, !1)
};
e.closeZippy = function() {
    this.animationZippy_.setExpanded(!1)
};
e.handleZippyToggle_ = function() {
    this.animationZippy_.isExpanded() ? this.loadAnimation() : this.endAnimation_()
};
e.loadAnimationData_ = function(a) {
    Xm = a;
    var b = Vm[a];
    if (b) Xm = null, this.onAnimationDataLoaded_(b), this.showAnimationLoading_(!1);
    else {
        Wm[Ym] = a;
        var b = document.getElementsByTagName("head").item(0),
            c = document.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.src = Dj("%s&reqId=%s", a, Ym);
        b.appendChild(c);
        X(za(this.handleAnimationDataTimeout_, Ym), 1E4, this);
        Ym++
    }
};
e.onAnimationDataLoaded_ = function(a) {
    a = a.data;
    this.lastTimestamp_ = a.length - 1;
    this.timeToString_ = [];
    for (var b = 0; b < a.length; b++) this.timeToString_.push(a[b].timeStr);
    this.animationSlider_.setMinimum(0);
    this.animationSlider_.setMaximum(this.lastTimestamp_);
    this.animationSlider_.setStep(1);
    this.animationSlider_.setValue(0);
    this.updateTimeString_();
    this.map_.onAnimationDataLoaded(a)
};
e.handleAnimationDataTimeout_ = function(a) {
    Xm == Wm[a] && (Xm = null, this.showAnimationTimeout_())
};
e.drawAnimationFrame_ = function(a, b) {
    var c = null != b ? b : this.animationSlider_.getValue() + 1;
    c <= this.lastTimestamp_ ? this.paused_ ? this.paused_ = !1 : (this.animationSlider_.setValue(c), this.map_.updateTimestamp(c), this.recolorMap_(), X(za(this.drawAnimationFrame_, a), a, this)) : (S(this.animationPlayButtonDiv_, !0), S(this.animationPauseButtonDiv_, !1))
};
e.endAnimation_ = function() {
    this.pauseAnimation();
    this.isInAnimationMode = !1;
    this.map_.animationEnded()
};
e.initSliderIfNotAlready_ = function() {
    this.animationSliderInitialized_ || (this.animationSlider_.setMoveToPointEnabled(!1), this.animationSlider_.setBlockIncrement(1), this.animationSlider_.decorate(this.animationSliderDiv_), this.animationSlider_.addEventListener("change", x(function() {
        X(this.sliderChangeCallback_, 0, this)
    }, this)), this.animationSliderInitialized_ = !0)
};
e.initHoverToggles_ = function() {
    bl(this.idPrefix_ + "_play_pause_div", this.idPrefix_ + "_pause_over_image", this.idPrefix_ + "_pause_image");
    bl(this.idPrefix_ + "_play_pause_div", this.idPrefix_ + "_play_over_image", this.idPrefix_ + "_play_image")
};
e.sliderChangeCallback_ = function() {
    var a = this.animationSlider_.getValue();
    this.isInAnimationMode && this.map_.currentAnimationTimestamp != a && (this.map_.updateTimestamp(a), this.recolorMap_())
};
e.recolorMap_ = function() {
    this.map_.draw();
    this.updateTimeString_()
};
e.updateTimeString_ = function() {
    this.animationTimeDiv_.innerHTML = this.timeToString_[this.animationSlider_.getValue()]
};
e.hideAllDivs_ = function() {
    S(this.animationTimeoutDiv_, !1);
    S(this.animationErrorDiv_, !1);
    S(this.animationLoadingDiv_, !1)
};
e.onAnimationDataError_ = function(a) {
    this.hideAllDivs_();
    this.animationErrorDiv_.innerHTML = Dj(this.animationErrorDiv_.innerHTML, a);
    S(this.animationErrorDiv_, !0)
};
e.showAnimationLoading_ = function(a) {
    this.hideAllDivs_();
    S(this.animationLoadingDiv_, a);
    S(this.animationButtonsDiv_, !a)
};
e.showAnimationTimeout_ = function() {
    this.hideAllDivs_();
    S(this.animationTimeoutDiv_, !0)
};
var Zm = function(a, b, c, d, f, g) {
    Lm.call(this, b, c, d, f, g, a);
    this.originalData_ = this.data_;
    this.originalOptions_ = xc(this.options_);
    this.options_ && this.options_.colorAxis && (this.originalOptions_.colorAxis = xc(this.options_.colorAxis));
    this.animationTimeToData_ = [];
    this.animationTimeToIsAllSameValues_ = [];
    this.minMaxAnimationValues_ = [Infinity, -Infinity];
    this.currentAnimationTimestamp = -1
};
z(Zm, Lm);
e = Zm.prototype;
e.isAnimationable = function() {
    return this.hasData() && "city" != this.segmentationLevel
};
e.updateTimestamp = function(a) {
    this.currentAnimationTimestamp = a;
    this.data_ = this.animationTimeToData_[a];
    this.options_.colorAxis || (this.options_.colorAxis = {});
    this.animationTimeToIsAllSameValues_[a] ? (this.options_.colorAxis.maxValue = this.animationTimeToIsAllSameValues_[a] + 1, this.options_.colorAxis.minValue = this.animationTimeToIsAllSameValues_[a]) : this.minMaxAnimationValues_[0] < this.minMaxAnimationValues_[1] ? (this.options_.colorAxis.minValue = this.minMaxAnimationValues_[0], this.options_.colorAxis.maxValue =
        this.minMaxAnimationValues_[1]) : (delete this.options_.colorAxis.minValue, delete this.options_.colorAxis.maxValue)
};
e.animationEnded = function() {
    this.chart_.clearChart();
    this.data_ = this.originalData_;
    this.options_ = xc(this.originalOptions_);
    this.originalOptions_.colorAxis && (this.options_.colorAxis = xc(this.originalOptions_.colorAxis));
    this.draw()
};
e.onAnimationDataLoaded = function(a) {
    this.chart_.clearChart();
    this.animationTimeToData_ = [];
    for (var b = 0; b < a.length; b++) this.animationTimeToData_.push(a[b].frameData);
    this.options_.enableRegionInteractivity = !1;
    this.options_.legend = "none";
    this.initAnimationTimeToIsAllSameValues_();
    this.updateTimestamp(0);
    this.draw()
};
e.initAnimationTimeToIsAllSameValues_ = function() {
    this.animationTimeToIsAllSameValues_ = [];
    for (var a = 0; a < this.animationTimeToData_.length; a++) {
        for (var b = Infinity, c = -Infinity, d = 1; d < this.animationTimeToData_[a].length; d++) 2 < this.animationTimeToData_[a][d].length && (b = Math.min(b, this.animationTimeToData_[a][d][2]), c = Math.max(c, this.animationTimeToData_[a][d][2]));
        this.animationTimeToIsAllSameValues_[a] = b == c ? b : null;
        this.minMaxAnimationValues_[0] = Math.min(b, this.minMaxAnimationValues_[0]);
        this.minMaxAnimationValues_[1] =
            Math.max(c, this.minMaxAnimationValues_[1])
    }
};
var an = function(a, b, c, d, f, g, h, k) {
    this.json_ = a;
    this.tabPane_ = g;
    this.comparisonIndex_ = b;
    this.initComparisonIndex_();
    this.linkTemplate_ = c;
    this.animationDataLinkTemplate_ = d;
    this.containerElem_ = Q(f + "_map");
    this.captionElem_ = Q(f + "_caption");
    this.errorElem_ = Q(f + "_error");
    this.footerElem_ = Q(f + "_footer");
    h && !$m && (google.visualization.GeoChart.setMapsSource(h), $m = !0);
    this.chart_ = new google.visualization.GeoChart(this.containerElem_);
    google.visualization.events.addListener(this.chart_, "regionClick", x(this.regionClicked_,
        this));
    this.currentMapIndex_ = 0;
    this.singleMaps_ = this.initSingleMaps_(f);
    this.animation_ = null;
    k || (this.animation_ = new Um(f, x(this.getAnimationDataUrl_, this)));
    this.draw_();
    N(window, "resize", x(this.draw_, this))
};
v("trends.MultiSegmentMap", an, void 0);
var bn = 0,
    cn = [],
    $m = !1,
    dn = ["country", "region", "dma", "city"],
    en = !1;
an.animationResponse = function(a) {
    var b = cn[bn];
    b.animation_ && b.animation_.handleNewAnimationData(a)
};
an.prototype.initComparisonIndex_ = function() {
    cn[this.comparisonIndex_] = this;
    en || (en = !0, N(this.tabPane_, "change", fn))
};
var fn = function(a) {
    var b = cn[bn];
    b.animation_ && b.animation_.isInAnimationMode && b.animation_.closeZippy();
    bn = a.tabIndex;
    cn[bn].draw_()
};
an.prototype.regionClicked_ = function(a) {
    this.singleMaps_[this.currentMapIndex_].regionClicked(a)
};
an.prototype.getRegisteredEventHandler = function() {
    return x(function(a, b, c) {
        1 == a && this.changeSegmentation_(c)
    }, this)
};
an.prototype.getRegisteredEventHandler = an.prototype.getRegisteredEventHandler;
an.prototype.getAnimationDataUrl_ = function() {
    var a = pb(dn, this.singleMaps_[this.currentMapIndex_].segmentationLevel);
    return this.animationDataLinkTemplate_.replace(/%25s/, this.comparisonIndex_).replace(/%25s/, a)
};
an.prototype.loadAnimation = function() {
    this.animation_ && this.animation_.loadAnimation();
    return !1
};
an.prototype.loadAnimation = an.prototype.loadAnimation;
an.prototype.playAnimation = function(a) {
    this.animation_ && this.animation_.playAnimation(a);
    return !1
};
an.prototype.playAnimation = an.prototype.playAnimation;
an.prototype.pauseAnimation = function() {
    this.animation_ && this.animation_.pauseAnimation();
    return !1
};
an.prototype.pauseAnimation = an.prototype.pauseAnimation;
e = an.prototype;
e.initSingleMaps_ = function(a) {
    var b = [],
        c;
    for (c in this.json_) {
        var d = this.json_[c];
        b[d.segIndex] = new gn(this.chart_, d.gvizData, d.options, this.linkTemplate_, c, a + "_map", x(this.setCaption_, this), x(this.setErrorMessage_, this), d.caption, d.errorMessage)
    }
    return b
};
e.setCaption_ = function(a) {
    this.captionElem_.innerHTML = a || ""
};
e.setErrorMessage_ = function(a) {
    a && (this.errorElem_.innerHTML = a);
    S(this.errorElem_, a);
    S(this.footerElem_, !a)
};
e.changeSegmentation_ = function(a) {
    a != this.currentMapIndex_ && (this.animation_ && this.animation_.isInAnimationMode && this.animation_.closeZippy(), this.undraw_(), this.currentMapIndex_ = a, this.draw_())
};
e.draw_ = function() {
    var a = this.singleMaps_[this.currentMapIndex_];
    this.animation_ && this.animation_.prepareToShowMap(a);
    S(this.containerElem_, !0);
    a.draw()
};
e.undraw_ = function() {
    this.chart_.clearChart();
    this.setErrorMessage_();
    this.setCaption_()
};
var gn = function(a, b, c, d, f, g, h, k, m, p) {
    Zm.call(this, a, b, c, d, f, g);
    this.setCaptionCallback_ = h;
    this.setErrorMessageCallback_ = k;
    this.caption_ = m || null;
    this.errorMessage_ = p || null
};
z(gn, Zm);
gn.prototype.draw = function() {
    this.data_ && this.options_ ? this.chart_.draw(google.visualization.arrayToDataTable(this.data_), this.options_) : this.errorMessage_ && this.setErrorMessageCallback_(this.errorMessage_);
    this.caption_ && this.setCaptionCallback_(this.caption_)
};
var hn = function(a, b, c) {
    this.currentParams = a;
    this.bestEffortCycleMs = b;
    this.missingComponentsIndexes = c
};
v("trends.SearchTablesComponentBankAttributes", hn, void 0);
var jn = function(a, b, c) {
    this.selectedInLevel_ = {};
    this.selectedInLevel_[1] = b;
    this.selectedInLevel_[2] = c;
    this.compositeId_ = a;
    this.setLeafVis_(b, c, !1);
    this.componentsBank_ = null
};
v("trends.SearchCompositeTablesController", jn, void 0);
jn.prototype.setLazyHiddenTabsOn = function(a) {
    for (var b = {}, c = 0; c < a.missingComponentsIndexes.length; c++) {
        var d = this.getLeafDivId_(a.missingComponentsIndexes[c][0], a.missingComponentsIndexes[c][1]);
        b[d] = d
    }
    this.componentsBank_ = new Jl(a.currentParams, a.bestEffortCycleMs, b)
};
jn.prototype.setLazyHiddenTabsOn = jn.prototype.setLazyHiddenTabsOn;
jn.prototype.getLeafDiv_ = function(a, b) {
    return document.getElementById(this.getLeafDivId_(a, b))
};
jn.prototype.getLeafDivId_ = function(a, b) {
    return this.compositeId_ + "_" + a + "_" + b
};
jn.prototype.setLeafVis_ = function(a, b, c) {
    this.getLeafDiv_(a, b).style.display = c ? "none" : ""
};
jn.prototype.switchCommon = function(a, b) {
    this.setLeafVis_(this.selectedInLevel_[1], this.selectedInLevel_[2], !0);
    this.selectedInLevel_[a] = b;
    this.componentsBank_ && this.componentsBank_.getComponentForDiv(this.getLeafDivId_(this.selectedInLevel_[1], this.selectedInLevel_[2]));
    this.setLeafVis_(this.selectedInLevel_[1], this.selectedInLevel_[2], !1)
};
jn.prototype.switchCommon = jn.prototype.switchCommon;
var kn = function(a, b, c, d, f, g, h, k, m, p) {
    this.controller_ = new jn(a, d, f);
    this.multipleComponentsLevel_ = c;
    this.tabIndex_ = b;
    g && this.controller_.setLazyHiddenTabsOn(new hn(h, k, m));
    N(p, "change", x(this.handleTabChanged_, this))
};
v("trends.SearchesCompositeTables", kn, void 0);
kn.prototype.handleTabChanged_ = function(a) {
    a.tabIndex == this.tabIndex_ && this.controller_.switchCommon(this.multipleComponentsLevel_, a.tabIndex)
};
var mn = function(a, b, c, d, f, g, h, k, m, p, l, n, s) {
    this.dataTable_ = this.createDataTable_(b, c);
    this.numQueries_ = (b.length - 3) / 4;
    this.numRows_ = c.length;
    this.firstForecastRow_ = this.calcFirstForecastRow_(c);
    this.withLegend_ = s;
    this.chartOptions_ = this.createInitialChartOptions_(m, p, l);
    this.headlinesWithDataPoints_ = d;
    this.headlinesId_ = f;
    this.percentData_ = k;
    this.chart_ = new google.visualization.LineChart(document.getElementById(a));
    this.showHeadlines_ = g;
    this.showForecast_ = h;
    this.selectedHeadlineCell_ = null;
    this.axisAnnotations_ =
        n;
    this.dataView_ = null;
    google.visualization.events.addListener(this.chart_, "select", x(this.onChartElementSelected_, this));
    this.headlinesId_ && (ln[this.headlinesId_] = this);
    N(window, "resize", x(this.onWindowResize_, this))
};
v("trends.HtmlChart", mn, void 0);
mn.prototype.createDataTable_ = function(a, b) {
    for (var c = new google.visualization.DataTable, d = 0; d < a.length; d++) c.addColumn(a[d]);
    c.addRows(b);
    return c
};
mn.prototype.calcFirstForecastRow_ = function(a) {
    if (0 < a.length) {
        var b = null == a[a.length - 1][3];
        if (a[a.length - 1][6]) return -1;
        for (var c = a.length - 1; 0 <= c; --c)
            if (!0 == a[c][6] || b && a[c][3]) return c + 1
    }
    return -1
};
mn.prototype.createInitialChartOptions_ = function(a, b, c) {
    var d = this.withLegend_ ? 40 : 10,
        f = b - 0 - 5;
    0 >= b && (f = "100%");
    0 >= c && (c = "100%");
    return {
        backgroundColor: "transparent",
        width: f,
        height: c,
        chartArea: {
            left: 0,
            top: d,
            width: f,
            height: c - d - 30
        },
        legend: {
            position: this.withLegend_ ? "top" : "none"
        },
        hAxis: {
            baselineColor: "#fff",
            gridlines: {
                color: "#fff"
            },
            maxTextLines: 1,
            slantedText: !1,
            textStyle: {
                fontSize: 9,
                color: "#999999"
            }
        },
        vAxis: {
            baselineColor: "#999999",
            gridlines: {
                color: "#efefef",
                count: 6
            },
            textPosition: "none"
        },
        focusTarget: "category",
        colors: a,
        tooltip: {
            isHtml: !0
        }
    }
};
mn.prototype.render = function() {
    for (var a = new google.visualization.DataView(this.dataTable_), b = [0, 1, 2], c = 0; c < this.numQueries_; c++) {
        var d = 4 * c + 3;
        b.push(d + 0);
        this.showHeadlines_ && (b.push(d + 1), b.push(d + 2));
        b.push(d + 3)
    }
    a.setColumns(b);
    b = this.numRows_ - 1;
    !this.showForecast_ && 0 < this.firstForecastRow_ && (b = this.firstForecastRow_ - 1, a.setRows(0, b));
    1 <= b && (this.chartOptions_.hAxis.viewWindowMode = "explicit", this.chartOptions_.hAxis.viewWindow = {
        min: a.getValue(0, 0),
        max: a.getValue(b, 0)
    });
    this.percentData_ ? this.chartOptions_.vAxis.format =
        "#,###%" : (this.chartOptions_.vAxis.minValue = 0, this.chartOptions_.vAxis.maxValue = 100);
    this.dataView_ = a;
    this.chart_.draw(a, this.chartOptions_);
    this.showHeadlines_ && this.selectedHeadlineCell_ && this.chart_.setSelection([this.selectedHeadlineCell_])
};
mn.prototype.render = mn.prototype.render;
mn.prototype.onChartElementSelected_ = function() {
    var a = this.chart_.getSelection()[0];
    if (a && a.row && a.column) {
        var b = a.row;
        if (1 == a.column)
            for (a = 0; a < this.axisAnnotations_.length; a++) this.axisAnnotations_[a].row == b && zm(this.axisAnnotations_[a].url, {
                target: "_blank"
            });
        else {
            this.selectedHeadlineCell_ = a;
            for (var c = Math.floor((a.column - 3) / 4), a = 1; a < this.headlinesWithDataPoints_.length; a++) {
                var d = this.headlinesWithDataPoints_[a];
                if (d && b == d.row && c == d.queryId) {
                    zm(d.url, {
                        target: "_blank"
                    });
                    break
                }
            }
        }
    }
};
mn.prototype.onHeadlineVisibilityChanged = function(a) {
    this.showHeadlines_ = a;
    this.render()
};
mn.prototype.onHeadlineVisibilityChanged = mn.prototype.onHeadlineVisibilityChanged;
mn.prototype.onForecastVisibilityChanged = function(a) {
    this.showForecast_ = a;
    this.render()
};
mn.prototype.onForecastVisibilityChanged = mn.prototype.onForecastVisibilityChanged;
var ln = [];
v("trends.HtmlChart.headlineIdsToCharts", ln, void 0);
mn.prototype.onWindowResize_ = function() {
    this.dataView_ && this.chart_.draw(this.dataView_, this.chartOptions_)
};
var nn = function(a, b) {
    this.redirectIfNeeded_();
    this.setIframesSrc_();
    N(window, "resize", x(this.setIframesSrc_, this));
    this.isMobile_ = b;
    this.geoPicker_ = new(this.isMobile_ ? Yl : Xl)("geo-picker-menu", "geo-picker-button");
    N(this.geoPicker_, "action", x(this.handleGeoPickerAction_, this));
    this.geoPicker_.setSelectedId(a)
};
v("trends.LandingPage", nn, void 0);
nn.prototype.redirectIfNeeded_ = function() {
    var a = (new ti(window.location)).getFragment();
    a && this.openExplorePage_(a)
};
nn.prototype.setIframesSrc_ = function() {
    D(od("explore-iframe-container"), function(a) {
        var b = nd("iframe", null, a)[0];
        b && (a = De(a).height, b.src = b.src.replace("~~HEIGHT~~", a))
    })
};
nn.prototype.openExplorePage_ = function(a) {
    var b = new ti(window.location);
    b.setPath("/trends/explore", !1);
    b.setFragment(a, !1);
    a = b.toString();
    a = a.replace(/\+/g, "%2B");
    zm(a, {
        target: "_self"
    })
};
nn.prototype.handleGeoPickerAction_ = function(a) {
    a = a.selectedId;
    var b = new ti(window.document.URL),
        b = b.setParameterValues("geo", a);
    window.location = b.toString()
};
var pn = function(a, b) {
    this.scope_ = a;
    this.scope_.timeout = b;
    this.scope_.edit = !1;
    this.scope_.query = "";
    var c = on();
    c && (N(c, "focus", x(this.onSearchBarFocus_, this), !1), N(c, "blur", x(this.onSearchBarBlur_, this), !1), N(c, "input", x(this.onSearchBarValueChange_, this), !1), N(c, "keydown", x(this.onSearchBarKeyDown_, this), !1));
    c = x(this.onSelectedTermChanged_, this);
    a.onSelectedTermChanged = c;
    c = x(this.registerKeyHandler, this);
    this.scope_.registerKeyHandler = c;
    this.scope_.$watch("selectedTerm", this.scope_.onSelectedTermChanged, !0)
};
pn.$inject = ["$scope", "$timeout"];
e = pn.prototype;
e.onSelectedTermChanged_ = function() {
    this.scope_.selectedTerm && window.location.replace(this.scope_.explorePagePath + "#q=" + encodeURIComponent(this.scope_.selectedTerm.value))
};
e.registerKeyHandler = function(a) {
    this.scope_.keyHandler = a
};
e.onSearchBarFocus_ = function() {
    this.scope_.edit = !0;
    this.scope_.$apply()
};
e.onSearchBarBlur_ = function() {
    this.scope_.timeout(x(this.hideSuggestions_, this), 200)
};
e.hideSuggestions_ = function() {
    this.scope_.edit = !1;
    this.scope_.$apply()
};
e.onSearchBarValueChange_ = function() {
    this.scope_.edit = !0;
    this.scope_.query = on().value;
    this.scope_.$apply()
};
e.onSearchBarKeyDown_ = function(a) {
    this.scope_.keyHandler && this.scope_.keyHandler(a)
};
var on = function() {
    var a = da("gbar");
    return a && a.qfgq ? a.qfgq() : null
};
var rn = {
    autocompleteDropdown: function() {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                edit: "=",
                enableEntities: "=",
                query: "=",
                selectedTerm: "=",
                numEditsDone: "=",
                registerKeyHandler: "&"
            },
            controller: qn,
            template: '<div class="autocomplete-dropdown" ng-show="edit">  <ul class="dropdown-menu" ng-show="choices.length > 0">    <li ng-repeat="choice in choices"        ng-class="{active: isActive($index)}"        ng-mouseenter="setActive($index)"        ng-click="select($index)">      <div class="autocomplete-dropdown-element">        <div class="autocomplete-dropdown-value" dir="auto">          {{choice.displayValue}}        </div>        <div class="autocomplete-dropdown-type" dir="auto">          {{choice.displayType}}        </div>      </div>    </li>  </ul></div>',
            link: function(a, b, c) {
                a.numResults = a.parseIntAttribute(c.numResults, 5);
                a.minInputLength = a.parseIntAttribute(c.minInputLength, 2)
            }
        }
    }
}, qn = function(a, b, c) {
        this.scope_ = a;
        this.scope_.timeout = b;
        this.entityAutocomplete_ = c;
        this.scope_.choices = [];
        this.scope_.activeChoiceIndex = -1;
        this.scope_.lastQuery = "";
        this.scope_.searchId = 0;
        this.scope_.maxSearchIdResponseReceived = 0;
        a = x(this.select, this);
        this.scope_.select = a;
        a = x(this.isActive, this);
        this.scope_.isActive = a;
        a = x(this.setActive, this);
        this.scope_.setActive = a;
        a = x(this.cancel,
            this);
        this.scope_.cancel = a;
        a = x(this.save, this);
        this.scope_.save = a;
        a = x(this.onEditChange, this);
        this.scope_.onEditChange = a;
        a = x(this.updateSearch, this);
        this.scope_.updateSearch = a;
        a = x(this.fetchEntityName, this);
        this.scope_.fetchEntityName = a;
        a = x(this.keyDownHandler, this);
        this.scope_.keyDownHandler = a;
        a = x(this.parseIntAttribute, this);
        this.scope_.parseIntAttribute = a;
        this.scope_.$watch("query", this.scope_.updateSearch);
        this.scope_.$watch("edit", this.scope_.onEditChange);
        this.scope_.$watch("selectedTerm", this.scope_.fetchEntityName);
        this.scope_.registerKeyHandler && this.scope_.registerKeyHandler({
            fn: this.scope_.keyDownHandler
        })
    };
qn.$inject = ["$scope", "$timeout", "entityAutocomplete"];
e = qn.prototype;
e.select = function(a) {
    this.scope_.selectedTerm = this.scope_.choices[a];
    this.save()
};
e.onEditChange = function(a, b) {
    a && !b ? (this.scope_.selectedTerm && (this.scope_.query = this.scope_.selectedTerm.displayValue), this.scope_.queryOnEditStart = this.scope_.query, this.scope_.lastQuery = "", this.updateSearch()) : !a && b && (this.scope_.queryOnEditStart == this.scope_.query ? this.cancel() : this.save())
};
e.cancel = function() {
    this.close_()
};
e.save = function() {
    this.scope_.selectedTerm = 0 <= this.scope_.activeChoiceIndex ? this.scope_.choices[this.scope_.activeChoiceIndex] : {
        value: "",
        type: "keyword",
        displayValue: "",
        displayType: "Search term"
    };
    this.close_()
};
e.close_ = function() {
    this.scope_.query = this.scope_.lastQuery = this.scope_.queryOnEditStart = this.scope_.selectedTerm ? this.scope_.selectedTerm.displayValue : "";
    this.scope_.choices = [];
    this.scope_.setActive(-1);
    this.scope_.edit = !1;
    this.scope_.numEditsDone++
};
e.isActive = function(a) {
    return this.scope_.activeChoiceIndex == a
};
e.setActive = function(a) {
    this.scope_.activeChoiceIndex = a
};
e.updateSearch = function() {
    this.canRefresh_() && (this.scope_.lastQuery = this.scope_.query, this.searchRequestCallback_(++this.scope_.searchId, []), this.scope_.enableEntities && this.scope_.query.length >= this.scope_.minInputLength && this.entityAutocomplete_.fetchEntitySuggestions(this.scope_.query, this.scope_.numResults - 1, x(this.searchRequestCallback_, this, ++this.scope_.searchId)))
};
e.searchRequestCallback_ = function(a, b) {
    if (a > this.scope_.maxSearchIdResponseReceived) {
        this.scope_.maxSearchIdResponseReceived = a;
        var c = this.scope_.query;
        "" == c ? c = -1 : (b.splice(0, 0, {
            value: c,
            type: "keyword",
            displayValue: c,
            displayType: "Search term"
        }), c = 0);
        this.scope_.choices = b;
        this.scope_.activeChoiceIndex = c
    }
};
e.fetchEntityName = function() {
    if (this.scope_.selectedTerm && "entity" == this.scope_.selectedTerm.type && this.scope_.selectedTerm.value && void 0 == this.scope_.selectedTerm.displayValue && !this.scope_.fetchingEntityName) {
        this.scope_.fetchingEntityName = !0;
        this.scope_.selectedTerm.displayValue = "";
        this.scope_.selectedTerm.displayType = "";
        try {
            this.entityAutocomplete_.fetchEntitySuggestions(this.scope_.selectedTerm.value, 1, x(function(a) {
                a && 1 <= a.length && a[0].value == this.scope_.selectedTerm.value ? (this.scope_.selectedTerm.displayValue =
                    a[0].displayValue, this.scope_.selectedTerm.displayType = a[0].displayType) : (this.scope_.selectedTerm.displayValue = this.scope_.selectedTerm.value, this.scope_.selectedTerm.displayType = "");
                this.scope_.fetchingEntityName = !1
            }, this))
        } catch (a) {
            this.scope_.selectedTerm.displayValue = this.scope_.selectedTerm.value, this.scope_.selectedTerm.displayType = "", this.scope_.fetchingEntityName = !1
        }
    }
};
e.keyDownHandler = function(a) {
    switch (a.keyCode) {
        case 38:
            this.scope_.activeChoiceIndex = (this.scope_.activeChoiceIndex ? this.scope_.activeChoiceIndex : this.scope_.choices.length) - 1;
            break;
        case 40:
            this.scope_.activeChoiceIndex = (this.scope_.activeChoiceIndex + 1) % this.scope_.choices.length;
            break;
        case 13:
        case 108:
            this.save();
            break;
        case 27:
            this.cancel();
            break;
        default:
            return !1
    }
    a.preventDefault();
    this.scope_.$apply();
    return !0
};
e.canRefresh_ = function() {
    return this.scope_.query != this.scope_.lastQuery
};
e.parseIntAttribute = function(a, b) {
    return a ? parseInt(a) : b
};
var tn = function(a) {
    this.scope_ = a;
    this.scope_.colors = ["blue", "red", "yellow", "green", "purple"];
    this.scope_.maxNumTerms = this.scope_.colors.length;
    this.scope_.qTerms = [];
    this.scope_.qTermMaxWidth = 0;
    this.scope_.geoTerms = [];
    this.scope_.geoTermMaxWidth = 0;
    this.scope_.timeTerms = [];
    this.scope_.timeTermMaxWidth = 0;
    this.scope_.term = sn(!1);
    this.addTermPillWidth_ = De(od("add-term", Q("cmpq"))[0]).width;
    this.addGeoTermPillWidth_ = De(od("add-term", Q("cmpgeo"))[0]).width;
    this.addTimeTermPillWidth_ = De(od("add-term", Q("cmptime"))[0]).width;
    this.tempHiddenElements_ = od("temporary-hide");
    this.scope_.compareType = null;
    this.scope_.enableEntities = !1;
    this.controlPanel_ = t.controlPanel;
    this.currentState_ = null;
    this.showExampleCard_ = !0;
    this.exampleCardElement_ = Q("explore-page-examples-container");
    this.entitiesBetaMessageElements_ = od("entities-beta-message");
    this.appliedFiltersSummary_ = this.collapsedFiltersHeadingBeforeSummary_ = this.collapsedFiltersHeading_ = this.dataFilterElements_ = null;
    this.butterBar_ = new qk("");
    this.butterBar_.render(Q("butterBarWrap"));
    this.isMobile_ = this.entityAndQuery_ = this.shouldShowButterBar_ = !1;
    this.scope_.init = x(function(a) {
        this.isMobile_ = a;
        this.showExampleCard_ = !a;
        a && (this.dataFilterElements_ = od("popup-picker-anchor", Q("data-filters-zippy-content")), this.collapsedFiltersHeading_ = Q("filters-heading", Q("data-filters-zippy-header-collapsed")), this.collapsedFiltersHeadingBeforeSummary_ = Q("filters-heading-before-summary", Q("data-filters-zippy-header-collapsed")), this.appliedFiltersSummary_ = Q("applied-filters-summary"))
    }, this);
    Ba(a, "clearFocus", x(this.clearFocus, this));
    Ba(a, "editTerm", x(this.editTerm, this));
    Ba(a, "removeTerm", x(this.removeTerm, this));
    Ba(a, "isMaxNumTerms", x(this.isMaxNumTerms, this));
    Ba(a, "addTerm", x(this.addTerm, this));
    Ba(a, "onTabKeyQTerms", x(this.onTabKeyQTerms, this));
    Ba(a, "removeGeoTerm", x(this.removeGeoTerm, this));
    Ba(a, "addGeoTerm", x(this.addGeoTerm, this));
    Ba(a, "removeTimeTerm", x(this.removeTimeTerm, this));
    Ba(a, "addTimeTerm", x(this.addTimeTerm, this));
    Ba(a, "removeOtherCompTerm", x(this.removeOtherCompTerm,
        this));
    Ba(a, "addOtherCompTerm", x(this.addOtherCompTerm, this));
    Ba(a, "submit", x(this.submit, this));
    Ba(a, "onTermsChanged", x(this.onTermsChanged, this));
    Ba(a, "onGeoTermsChanged", x(this.onGeoTermsChanged, this));
    Ba(a, "onTimeTermsChanged", x(this.onTimeTermsChanged, this));
    this.scope_.$watch("qTerms", this.scope_.onTermsChanged, !0);
    this.scope_.$watch("geoTerms", this.scope_.onGeoTermsChanged, !0);
    this.scope_.$watch("timeTerms", this.scope_.onTimeTermsChanged, !0);
    this.scope_.$watch("term", this.scope_.submit, !0);
    N(this.controlPanel_, "nav", x(this.handleControlPanelDataChange_, this))
};
tn.$inject = ["$scope"];
var un = /^\/m\/\w+$/;
e = tn.prototype;
e.clearFocus = function() {
    angular.forEach(this.scope_.qTerms, function(a) {
        a.edit = !1
    })
};
e.editTerm = function(a) {
    this.clearFocus();
    a.edit = !0
};
e.removeTerm = function(a) {
    this.scope_.qTerms.splice(a, 1)
};
e.isMaxNumTerms = function(a) {
    return a.length >= this.scope_.maxNumTerms ? !0 : !1
};
e.addTerm = function() {
    this.scope_.qTerms.push(sn(!0));
    this.exampleCardElement_ && gd(this.exampleCardElement_, "vertically-disappear")
};
e.onTabKeyQTerms = function(a) {
    a < this.scope_.qTerms.length - 1 ? this.editTerm(this.scope_.qTerms[a + 1]) : this.isMaxNumTerms(this.scope_.qTerms) ? this.editTerm(this.scope_.qTerms[0]) : this.addTerm()
};
e.onTermsChanged = function(a, b) {
    if (a.length == b.length)
        for (var c = a.length, d = 0; d < c; d++)
            if (!a[d].edit && a[d].numEditsDone > b[d].numEditsDone && 0 == a[d].content.value.length) {
                this.scope_.qTerms.splice(d, 1);
                break
            }
    this.scope_.qTermMaxWidth = this.calculatePillMaxWidth_(this.scope_.qTerms.length, this.addTermPillWidth_);
    this.submit()
};
e.onGeoTermsChanged = function() {
    var a = [];
    D(this.scope_.geoTerms, function(b) {
        (b.edit || 0 < b.content.value.length) && a.push(b)
    });
    this.scope_.geoTerms.length != a.length && (this.scope_.geoTerms = a);
    this.scope_.geoTermMaxWidth = this.calculatePillMaxWidth_(this.scope_.geoTerms.length, this.addGeoTermPillWidth_);
    this.submit()
};
e.removeGeoTerm = function(a) {
    this.scope_.geoTerms.splice(a, 1)
};
e.addGeoTerm = function() {
    this.scope_.geoTerms.push({
        content: {
            value: ""
        },
        edit: !0
    })
};
e.onTimeTermsChanged = function() {
    var a = [];
    D(this.scope_.timeTerms, function(b) {
        (b.edit || 0 < b.content.value.length) && a.push(b)
    });
    this.scope_.timeTerms.length != a.length && (this.scope_.timeTerms = a);
    this.scope_.timeTermMaxWidth = this.calculatePillMaxWidth_(this.scope_.timeTerms.length, this.addTimeTermPillWidth_);
    this.submit()
};
e.removeTimeTerm = function(a) {
    this.scope_.timeTerms.splice(a, 1)
};
e.addTimeTerm = function() {
    this.scope_.timeTerms.push({
        content: {
            value: ""
        },
        edit: !0
    })
};
e.removeOtherCompTerm = function() {
    this.scope_.term = sn(!1)
};
e.addOtherCompTerm = function() {
    this.scope_.term = sn(!0)
};
e.submit = function() {
    var a = this.buildStateString_(this.scope_.qTerms, this.scope_.geoTerms, this.scope_.timeTerms, this.scope_.term, this.scope_.compareType, this.scope_.enableEntities);
    if (this.forceNextSubmit_ || this.currentState_ && a != this.currentState_) this.currentState_ = a, this.forceNextSubmit_ = !1, this.controlPanel_.getMultiPicker("q").setValue(this.getTermContents_(this.scope_.qTerms)), this.controlPanel_.getMultiPicker("geo").setValue(this.getTermContents_(this.scope_.geoTerms)), this.controlPanel_.getMultiPicker("date").setValue(this.getTermContents_(this.scope_.timeTerms)),
    this.controlPanel_.getPicker("q").setValue(this.scope_.term.content.value), this.controlPanel_.onSubmit()
};
e.buildStateString_ = function(a, b, c, d, f, g) {
    a = this.getTermContents_(a, "~~");
    b = this.getTermContents_(b, "~~");
    c = this.getTermContents_(c, "~~");
    return "q=" + a + "&geo=" + b + "&time=" + c + "&term=" + d.content.value + "&cmpt=" + f + "&en=" + g
};
e.getTermContents_ = function(a, b) {
    var c = [];
    D(a, function(a) {
        0 < a.content.value.length && c.push(a.content.value)
    });
    return c.join(b || ",")
};
e.displayAppliedFiltersSummary_ = function() {
    if (this.isMobile_) {
        var a = qb(this.dataFilterElements_, function(a) {
            if ("none" == a.style.display) return !1;
            a = a.id.replace(/^resPckr/, "").replace(/_anchor$/, "");
            a = this.controlPanel_.getPicker(a).getValue();
            return !Fa(bb(a))
        }, this),
            a = rb(a, function(a) {
                return a.innerText
            }).join(", ");
        this.appliedFiltersSummary_.innerText = a;
        Fa(bb(a)) ? (S(this.collapsedFiltersHeading_, !0), S(this.collapsedFiltersHeadingBeforeSummary_, !1)) : (S(this.collapsedFiltersHeading_, !1), S(this.collapsedFiltersHeadingBeforeSummary_, !0))
    }
};
e.setHiddenElementsShown_ = function(a) {
    D(this.tempHiddenElements_, function(b) {
        he(b, "visibility", a ? "visible" : "hidden")
    })
};
e.handleControlPanelDataChange_ = function() {
    var a = this.controlPanel_.getMultiPicker("q").getValue().split(","),
        b = this.controlPanel_.getMultiPicker("geo").getValue().split(","),
        c = this.controlPanel_.getMultiPicker("date").getValue().split(","),
        d = this.controlPanel_.getPicker("q").getValue(),
        f = !1,
        g = !1,
        h = [];
    D(a, x(function(a) {
        if (a = vn(a)) h.push(a), "entity" == a.content.type ? f = !0 : g = !0
    }, this));
    var k = [];
    D(b, function(a) {
        a = a.trim();
        0 < a.length && k.push({
            content: {
                value: a
            }
        })
    });
    var m = [];
    D(c, function(a) {
        a = a.trim();
        0 <
            a.length && m.push({
                content: {
                    value: a
                }
            })
    });
    (a = vn(d)) || (a = sn(!1));
    "entity" == a.content.type && (f = !0);
    b = this.controlPanel_.getCurrentCompareType();
    c = this.controlPanel_.isEntitiesEnabled();
    this.shouldShowButterBar_ ? this.shouldShowButterBar_ = !1 : this.butterBar_.setVisible(!1);
    c && f ? (D(this.entitiesBetaMessageElements_, function(a) {
        S(a, !0)
    }), g && !this.entityAndQuery_ && (this.butterBar_.getContentElement().innerHTML = "You are comparing topics and search terms. Please note that these are measured differently.", this.butterBar_.setType("info"),
        this.butterBar_.setVisible(!0))) : D(this.entitiesBetaMessageElements_, function(a) {
        S(a, !1)
    });
    this.entityAndQuery_ = g && f;
    c || (D(h, x(function(a) {
        var b = wb(this.scope_.qTerms, function(b) {
            return b.content.value == a.content.value && "entity" == b.content.type && "entity" == a.content.type
        });
        b && (this.convertEntityToSearchTerm_(b, a), this.forceNextSubmit_ = !0)
    }, this)), d && "entity" == a.content.type && (this.convertEntityToSearchTerm_(this.scope_.term, a), this.forceNextSubmit_ = !0));
    d = this.buildStateString_(h, k, m, a, b, c);
    d != this.currentState_ &&
        (this.currentState_ = d, this.scope_.qTerms = h, this.scope_.geoTerms = k, this.scope_.timeTerms = m, this.scope_.term = a, this.scope_.compareType = b, this.scope_.enableEntities = c, this.scope_.$$phase || this.scope_.$apply());
    this.showExampleCard_ && "q" == this.scope_.compareType && 0 == this.scope_.qTerms.length ? (S(this.exampleCardElement_, !0), this.showExampleCard_ = !1) : this.exampleCardElement_ && gd(this.exampleCardElement_, "vertically-disappear");
    this.displayAppliedFiltersSummary_();
    this.setHiddenElementsShown_(!0)
};
e.convertEntityToSearchTerm_ = function(a, b) {
    var c = a.content.displayValue.split(/,|\+/).join("");
    b.content.value = c;
    b.content.type = "keyword";
    b.content.displayValue = c;
    b.content.displayType = "Search term";
    this.showButterBarInfoMessage_(this.butterBar_, "Cannot currently measure search interest in <i>topics</i> in all countries. Showing search interest in the corresponding <i>search terms</i> instead.", this.isMobile_);
    this.shouldShowButterBar_ = !0
};
e.showButterBarInfoMessage_ = function(a, b, c) {
    S(be(this.butterBar_.getElement(), "butterBar-container"), !0);
    a.getContentElement().innerHTML = b;
    a.setType("info");
    a.setVisible(!0);
    c && (Fe(a.getElement(), 1), X(x(wn, void 0, a), 3E3))
};
var wn = function(a) {
    (new ak(a.getElement(), 1E3)).play();
    X(x(xn, void 0, a), 1200)
}, xn = function(a) {
        S(be(a.getElement(), "butterBar-container"), !1);
        a.setVisible(!1)
    }, sn = function(a) {
        return {
            content: {
                value: "",
                type: "keyword",
                displayValue: "",
                displayType: "Search term"
            },
            edit: a,
            numEditsDone: 0
        }
    }, vn = function(a) {
        a = a.trim();
        if (0 < a.length) {
            var b = {
                content: {
                    value: a
                },
                edit: !1,
                numEditsDone: 0
            };
            un.test(a) ? b.content.type = "entity" : (b.content.type = "keyword", b.content.displayValue = a, b.content.displayType = "Search term");
            return b
        }
        return null
    };
tn.prototype.calculatePillMaxWidth_ = function(a, b) {
    var c = 760;
    5 > a && (c -= b);
    return (c - 13 * a) / a + "px"
};
var yn = function(a, b) {
    this.scope_ = a;
    this.scope_.timeout = b;
    this.scope_.term = sn(!0);
    this.scope_.enableEntities = !0;
    this.scope_.init = x(function(a) {
        a && (this.scope_.term = vn(a))
    }, this);
    this.scope_.$watch("enableEntities", x(function(a) {
        a || "entity" != this.scope_.term.content.type || (a = this.scope_.term.content.displayValue.split(/,|\+/).join(""), this.scope_.term.content = {
            value: a,
            type: "keyword",
            displayValue: a,
            displayType: "Search term"
        })
    }, this));
    Ba(a, "editTerm", x(this.editTerm, this));
    Ba(a, "removeTerm", x(this.removeTerm,
        this))
};
yn.$inject = ["$scope", "$timeout"];
yn.prototype.removeTerm = function() {
    this.scope_.term = sn(!0)
};
yn.prototype.editTerm = function() {
    this.scope_.term.edit = !0
};
rn.autocomplete = function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            selectedTerm: "=",
            edit: "=",
            enableEntities: "=",
            isMobile: "=",
            numEditsDone: "=",
            onTabKey: "&",
            placeholder: "@",
            disableEmptyTerm: "@"
        },
        controller: zn,
        template: '<div class="search">  <form>    <input type="text" ng-model="query" placeholder="{{placeholder}}"            size="{{query.length || 6}}" dir="auto"           tabindex="1" accesskey="s" class="input-medium search-query">  </form>  <div ng-show="enableEntities">    <autocomplete-dropdown edit="edit" query="query"                            num-edits-done="numEditsDone"                           selected-term="selectedTerm"                            register-key-handler="registerKeyHandler(fn)"                           min-input-length="{{minInputLength}}"                            num-results="{{numResults}}"                           enable-entities="enableEntities">    </autocomplete-dropdown>  </div></div>',
        link: function(a, b, c) {
            a.numResults = a.parseIntAttribute(c.numResults, 5);
            a.minInputLength = a.parseIntAttribute(c.minInputLength, 2);
            a.inputElement = b.find("input");
            a.inputElement.bind("blur", function() {
                a.timeout(function() {
                    if (!a.disableEmptyTerm || a.selectedTerm && a.selectedTerm.value) a.edit = !1, a.$apply()
                }, 200)
            });
            a.inputElement.bind("keydown", function(b) {
                if (9 == b.keyCode) return a.edit = !1, a.$apply(), a.onTabKey(), !0;
                if (a.keyHandler) return a.keyHandler(b)
            })
        }
    }
};
var zn = function(a, b) {
    this.scope_ = a;
    this.scope_.timeout = b;
    this.scope_.query = "";
    var c = x(this.onEditChange, this);
    this.scope_.onEditChange = c;
    c = x(this.registerKeyHandler, this);
    this.scope_.registerKeyHandler = c;
    c = x(this.parseIntAttribute, this);
    this.scope_.parseIntAttribute = c;
    this.scope_.$watch("edit", this.scope_.onEditChange)
};
zn.$inject = ["$scope", "$timeout"];
zn.prototype.registerKeyHandler = function(a) {
    this.scope_.keyHandler = a
};
zn.prototype.parseIntAttribute = function(a, b) {
    return a ? parseInt(a) : b
};
zn.prototype.onEditChange = function(a) {
    var b = this.scope_.inputElement[0];
    a ? (a = function() {
        b.focus();
        b.select()
    }, this.scope_.isMobile ? a() : this.scope_.timeout(a, 100)) : this.scope_.isMobile && b.blur()
};
var An = function(a) {
    this.scope_ = a
};
An.$inject = ["$scope", "$timeout"];
An.prototype.updateGeoList_ = function() {
    null == this.picker_.getHiddenBox() ? Qc(t.controlPanel, "property", x(this.updateGeoList_, this)) : t.controlPanel.updateGeo(this.picker_)
};
An.prototype.handlePickerHide_ = function() {
    this.scope_.selectedTerm = this.picker_.getValue();
    this.scope_.edit = !1;
    this.scope_.$apply()
};
var Bn = 0;
var Cn = function(a) {
    this.scope_ = a
};
Cn.$inject = ["$scope"];
Cn.prototype.updateStartDate_ = function() {
    if (null == this.picker_.getHiddenBox()) Qc(t.controlPanel, "property", x(this.updateStartDate_, this));
    else {
        var a = this.getTimePicker_();
        this.picker_.changeReposStartDate(a.getStartYear(), a.getStartMonth())
    }
};
Cn.prototype.handlePickerHide_ = function() {
    this.picker_.isCustomDateRangeDialogVisible() || (this.scope_.selectedTerm = this.picker_.getValue(), this.scope_.edit = !1, this.scope_.$apply())
};
var Dn = 0;
Cn.prototype.getTimePicker_ = function() {
    return t.controlPanel.getPicker("date")
};
var En = function(a, b) {
    return a ? b : ""
};
var Fn = function(a) {
    this.$http_ = a
};
Fn.$inject = ["$http"];
Fn.prototype.fetchEntitySuggestions = function(a, b, c) {
    var d;
    a = {
        method: "GET",
        url: "entitiesQuery",
        params: {
            q: a,
            tn: b
        }
    };
    this.$http_.get(a.url, a).success(function(a, b, h, k) {
        a && a.entityList ? (d = a.entityList.map(function(a) {
            return {
                value: a.mid,
                type: "entity",
                displayValue: a.title,
                displayType: a.type && 0 < a.type.length ? a.type : "Topic"
            }
        }), d.length > k.params.tn && d.splice(k.params.tn, d.length - k.params.tn)) : d = [];
        c(d)
    }).error(function() {
        c([])
    })
};
angular.module("trends.services", []).service("entityAutocomplete", Fn);
rn.module = angular.module("trends.directives", ["trends.services"]).directive("autocomplete", rn.autocomplete).directive("autocompleteDropdown", rn.autocompleteDropdown).directive("geoPicker", function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            selectedTerm: "=",
            edit: "=",
            useDialog: "="
        },
        controller: An,
        template: "<div></div>",
        link: function(a, b, c, d) {
            c = "cmp-geo-picker-" + Bn;
            Bn++;
            var f = Q("template-geo-picker-menu").innerHTML.replace(RegExp("template-geo-picker-menu", "g"), c);
            b.append(f);
            d.picker_ = new Tk(c, a.useDialog,
                a.selectedTerm);
            a.useDialog || (d.picker_.setPopupMargin(new ce(0, 0, 0, -3)), d.picker_.setPopupZIndex(2E3));
            b = t.controlPanel;
            b.updateGeo(d.picker_);
            a.edit && d.picker_.handlePopupAnchorClick();
            N(b, "property", x(d.updateGeoList_, d));
            N(d.picker_.getPopup(), "hide", x(d.handlePickerHide_, d))
        }
    }
}).directive("timePicker", function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            selectedTerm: "=",
            edit: "=",
            useDialog: "="
        },
        controller: Cn,
        template: "<div></div>",
        link: function(a, b, c, d) {
            c = "cmp-time-picker-" + Dn;
            Dn++;
            var f = Q("template-time-picker-menu").innerHTML.replace(RegExp("template-time-picker-menu",
                "g"), c);
            b.append(f);
            d.picker_ = new ul(c, a.useDialog, a.selectedTerm);
            a.useDialog || (d.picker_.setPopupMargin(new ce(0, 0, 0, -3)), d.picker_.setPopupZIndex(2E3));
            b = d.getTimePicker_();
            d.picker_.changeReposStartDate(b.getStartYear(), b.getStartMonth());
            a.edit && d.picker_.handlePopupAnchorClick();
            N(t.controlPanel, "property", x(d.updateStartDate_, d));
            N(d.picker_.getPopup(), "hide", x(d.handlePickerHide_, d));
            N(d.picker_.getCustomDateRangeDialog(), "hide", x(d.handlePickerHide_, d))
        }
    }
});
var Qn = angular.module("trends", ["trends.directives"]);
Qn.controller("ExploreCtrl", tn);
Qn.controller("SearchBarCtrl", pn);
Qn.controller("TermSubscribeCtrl", yn);
Qn.filter("ifTrue", function() {
    return En
});
var Rn = function() {
    this.buttons_ = [];
    this.currentCheckedIndex_ = null
};
Rn.prototype.addButton = function(a, b, c) {
    null != c && c && (this.currentCheckedIndex_ = this.buttons_.length);
    c = this.buttons_.length;
    this.buttons_.push({
        button: a,
        callback: b
    });
    return c
};
Rn.prototype.render = function(a) {
    B(1 < this.buttons_.length, "No button was added");
    D(this.buttons_, function(b, c) {
        var d = b.button;
        d.setSupportedState(16, !0);
        this.currentCheckedIndex_ == c && d.setChecked(!0);
        N(d, "action", x(this.buttonClicked_, this, c));
        d.setCollapsed(0 == c ? 2 : c == this.buttons_.length - 1 ? 1 : 3);
        d.render(a)
    }, this)
};
Rn.prototype.buttonClicked_ = function(a) {
    var b = this.buttons_[this.currentCheckedIndex_],
        c = this.buttons_[a];
    this.currentCheckedIndex_ != a && (b && b.button.setChecked(!1), c.callback(a, this.currentCheckedIndex_), this.currentCheckedIndex_ = a);
    c.button.setChecked(!0)
};
Rn.prototype.getCheckedButton = function() {
    return this.currentCheckedIndex_
};
var Sn = function(a, b, c) {
    Ol.call(this, a, b, c ? jm : gm, c);
    this.selectedFrequencyId_ = this.selectedHotnessLevelId_ = this.pipelineName_ = null
};
z(Sn, Ol);
v("trends.hot.SubscriptionEditor", Sn, void 0);
e = Sn.prototype;
e.getSelectedHotnessLevel_ = function() {
    return this.stripSelectedHotnessLevelPrefix_(this.selectedHotnessLevelId_)
};
e.stripSelectedHotnessLevelPrefix_ = function(a) {
    return a.replace("hottrends-notification-hotness-menuitem-", "")
};
e.getSelectedFrequency_ = function() {
    return this.stripSelectedFrequencyPrefix_(this.selectedFrequencyId_)
};
e.stripSelectedFrequencyPrefix_ = function(a) {
    return a.replace("hottrends-notification-frequency-menuitem-", "")
};
e.getSelectedParamsMap = function() {
    var a = Sn.superClass_.getSelectedParamsMap.call(this);
    a.set("pn", this.pipelineName_);
    this.selectedHotnessLevelId_ && a.set("hs", this.getSelectedHotnessLevel_());
    this.selectedFrequencyId_ && a.set("fr", this.getSelectedFrequency_());
    return a
};
e.openSubscriptionSettings = function(a) {
    this.pipelineName_ = a;
    this.sendOpenRequest()
};
e.getSubscriptionsCallback = function(a) {
    Sn.superClass_.getSubscriptionsCallback.call(this, a);
    this.buildNotificationHotnessMenu_();
    this.buildNotificationFrequencyMenu_()
};
e.buildNotificationHotnessMenu_ = function() {
    this.selectedHotnessLevelId_ = this.buildNotificationMenu_("hottrends-notification-hotness-menu", "hottrends-notification-hotness-menu-button", this.getSavedHotnessLevelId_(), x(this.handleHotnessMenuSelect_, this))
};
e.getSavedHotnessLevelId_ = function() {
    return Q("hottrends-notification-hotness-menu-button-saved").innerText
};
e.handleHotnessMenuSelect_ = function(a) {
    this.selectedHotnessLevelId_ = this.getIdFromEvent_(a)
};
e.buildNotificationFrequencyMenu_ = function() {
    this.selectedFrequencyId_ = this.buildNotificationMenu_("hottrends-notification-frequency-menu", "hottrends-notification-frequency-menu-button", this.getSavedFrequencyId_(), x(this.handleFrequencyMenuSelect_, this))
};
e.buildNotificationMenu_ = function(a, b, c, d) {
    if (this.isMobile) return b = new Yl(a, b), b.setSelectedId(c), N(b, "action", d), c;
    a = new Lk(null, null, Kk.getInstance());
    a.decorate(Q(b));
    for (b = 0; b < a.getItemCount(); b++) a.getItemAt(b).getId() == c && a.setSelectedIndex(b);
    N(a, "change", d);
    return a.getSelectedItem().getId()
};
e.getSavedFrequencyId_ = function() {
    return Q("hottrends-notification-frequency-menu-button-saved").innerText
};
e.handleFrequencyMenuSelect_ = function(a) {
    this.selectedFrequencyId_ = this.getIdFromEvent_(a)
};
e.getIdFromEvent_ = function(a) {
    return this.isMobile ? a.selectedId : a.target.getSelectedItem().getId()
};
e.deleteSubscriptionSettings = function(a) {
    this.pipelineName_ = a;
    this.sendDeleteRequest()
};
e.getSubscriptionUri = function() {
    return "hottrends/subscribe"
};
var Tn = function(a, b, c) {
    Ol.call(this, a, b, c ? sm : rm, c);
    this.selectedGeo_ = this.selectedId_ = this.viewMode_ = null
};
z(Tn, Ol);
v("trends.topcharts.SubscriptionEditor", Tn, void 0);
e = Tn.prototype;
e.getSelectedParamsMap = function() {
    var a = Tn.superClass_.getSelectedParamsMap.call(this);
    a.set("vm", this.viewMode_);
    a.set("cid", this.selectedId_);
    a.set("geo", this.selectedGeo_);
    return a
};
e.openSubscriptionSettings = function(a, b, c) {
    this.viewMode_ = a;
    this.selectedId_ = b;
    this.selectedGeo_ = c;
    this.sendOpenRequest()
};
e.deleteSubscriptionSettings = function(a, b, c) {
    this.viewMode_ = a;
    this.selectedId_ = b;
    this.selectedGeo_ = c;
    this.sendDeleteRequest()
};
e.getSubscriptionUri = function() {
    return "topcharts/subscribe"
};
e.isUpdateable = function() {
    return !1
};
var Un = function(a, b, c, d) {
    this.butterBar_ = new qk("");
    this.butterBar_.render(Q("butterBarWrap"));
    this.renderAddSubscriptionButton_();
    this.xsrfToken_ = a;
    this.isMobile_ = b;
    this.hotTrendsSubscriptionEditor_ = new Sn(this.butterBar_, a, this.isMobile_);
    this.topChartsSubscriptionEditor_ = new Tn(this.butterBar_, a, this.isMobile_);
    this.termSubscriptionEditor_ = new tm(this.butterBar_, a, c, d, this.isMobile_);
    this.listenToEditor_(this.hotTrendsSubscriptionEditor_);
    this.listenToEditor_(this.topChartsSubscriptionEditor_);
    this.listenToEditor_(this.termSubscriptionEditor_);
    wk()
};
v("trends.subscriptions.Controller", Un, void 0);
Un.prototype.listenToEditor_ = function(a) {
    N(a, "change", x(this.refreshTableData_, this));
    N(a, "beforeajax", x(pl, this));
    N(a, "afterajax", x(ql, this))
};
Un.prototype.editHotTrendsSubscription = function(a) {
    this.hotTrendsSubscriptionEditor_.openSubscriptionSettings(a)
};
Un.prototype.editHotTrendsSubscription = Un.prototype.editHotTrendsSubscription;
Un.prototype.editTopChartsSubscription = function(a, b, c) {
    this.topChartsSubscriptionEditor_.openSubscriptionSettings(a, b, c)
};
Un.prototype.editTopChartsSubscription = Un.prototype.editTopChartsSubscription;
Un.prototype.editTermSubscription = function(a, b) {
    this.termSubscriptionEditor_.openSubscriptionSettings(a, b)
};
Un.prototype.editTermSubscription = Un.prototype.editTermSubscription;
Un.prototype.unsubscribeHotTrendsSubscription = function(a) {
    this.hotTrendsSubscriptionEditor_.deleteSubscriptionSettings(a)
};
Un.prototype.unsubscribeHotTrendsSubscription = Un.prototype.unsubscribeHotTrendsSubscription;
Un.prototype.unsubscribeTopChartsSubscription = function(a, b, c) {
    this.topChartsSubscriptionEditor_.deleteSubscriptionSettings(a, b, c)
};
Un.prototype.unsubscribeTopChartsSubscription = Un.prototype.unsubscribeTopChartsSubscription;
Un.prototype.unsubscribeTermSubscription = function(a, b) {
    this.termSubscriptionEditor_.deleteSubscriptionSettings(a, b)
};
Un.prototype.unsubscribeTermSubscription = Un.prototype.unsubscribeTermSubscription;
Un.prototype.addTermSubscription = function() {
    this.termSubscriptionEditor_.sendEmptyRequest()
};
Un.prototype.addTermSubscription = Un.prototype.addTermSubscription;
Un.prototype.refreshTableData_ = function() {
    var a = new ag;
    a.set("ajax", 1);
    a.set("xsrf", this.xsrfToken_);
    a.set("mob", this.isMobile_ ? "1" : "0");
    a = Ci(a).toString();
    this.sendAjaxRequest_("subscriptionsTable", a, x(this.getSubscriptionsTableCallback_, this))
};
Un.prototype.getSubscriptionsTableCallback_ = function(a) {
    ql();
    Q("subscriptions-table-container").innerHTML = a.target.getResponseText();
    this.renderAddSubscriptionButton_();
    wk()
};
Un.prototype.renderAddSubscriptionButton_ = function() {
    var a = new Mj("Add Subscription", void 0, 2);
    a.render(Q("add-subscription-button-container"));
    N(a, "action", x(this.addTermSubscription, this))
};
Un.prototype.sendAjaxRequest_ = function(a, b, c) {
    pl();
    qi(a, c, "POST", b, void 0, 1E4)
};
var Vn = function(a, b, c) {
    U.call(this);
    this.tabDivs_ = [];
    this.tabButtons_ = new Rn;
    a = Q(a);
    if (!a) throw "Tab control div not found!";
    for (var d = 0; d < b.length; d++) {
        this.tabDivs_.push(b[d].tabDivElements);
        D(b[d].tabDivElements, function(a) {
            S(a, !1)
        });
        var f = Ak(b[d].tabButtonDivElement);
        c && f.setWidth(1);
        f.setUsingKennedyTooltip(!0);
        f.setTooltip(b[d].tabTooltip);
        this.tabButtons_.addButton(f, x(this.selectTab, this), 0 == d)
    }
    this.tabButtons_.render(a);
    wk();
    this.selectTab(0, null)
};
z(Vn, U);
v("trends.TabControl", Vn, void 0);
Vn.prototype.selectTab = function(a, b) {
    b != a && (null != b && D(this.tabDivs_[b], function(a) {
        S(a, !1)
    }), D(this.tabDivs_[a], function(a) {
        S(a, !0)
    }));
    Uc(this, new Wn("change", this, a))
};
Vn.prototype.getSelectedTabIndex = function() {
    var a = this.tabButtons_.getCheckedButton();
    B(null != a);
    return a
};
v("trends.TabControl.prototype.getSelectedTabIndex", Vn.prototype.getSelectedTabIndex, void 0);
Vn.prototype.registerSwitchCallback = function(a) {
    N(this, "change", a)
};
v("trends.TabControl.prototype.registerSwitchCallback", Vn.prototype.registerSwitchCallback, void 0);
v("trends.TabControl.TabData", function(a, b, c) {
    this.tabDivElements = [];
    D(a, x(function(a) {
        this.tabDivElements.push(Q(a))
    }, this));
    this.tabButtonDivElement = Q(b);
    this.tabTooltip = c ? c : null
}, void 0);
var Wn = function(a, b, c) {
    L.call(this, a, b);
    this.tabIndex = c
};
z(Wn, L);
var Xn = function(a) {
    a = a || {};
    var b = wd("input", {
        id: "history_state",
        style: "display:none;",
        type: "hidden"
    });
    document.body.appendChild(b);
    this.history_ = new Ul(!1, null, b);
    this.hashParam_ = "hashParam" in a ? a.hashParam : "slide";
    this.elm_ = Q(a.carouselId);
    this.animInDuration_ = "animInDuration" in a ? a.animInDuration : 800;
    this.animOutDuration_ = "animOutDuration" in a ? a.animOutDuration : 800;
    this.selectedTabClass_ = a.selectedTabClass || "tab-on";
    this.isTimerSet_ = "isTimerSet" in a ? a.isTimerSet : !1;
    this.isHistorySet_ = "isHistorySet" in
        a ? a.isHistorySet : !1;
    this.navPreviousClass_ = a.navPreviousClass || "nav-previous";
    this.navNextClass_ = a.navNextClass || "nav-next";
    this.tabContainerClass_ = a.tabContainerClass || "tabs";
    this.timerDuration_ = "timerDuration" in a ? a.timerDuration : 5E3;
    this.tabs_ = [];
    this.timer_ = this.currentTab_ = null;
    this.tickCount_ = 0;
    this.isAnimating_ = !1;
    this.tabContainer_ = nd("", this.tabContainerClass_, this.elm_)[0];
    this.tabElms_ = nd("li", "", this.tabContainer_);
    this.previousElm_ = nd("", this.navPreviousClass_, this.elm_)[0];
    this.nextElm_ =
        nd("", this.navNextClass_, this.elm_)[0];
    this.eh_ = new Ye(this);
    if (1 < this.tabElms_.length)
        if (this.createTabs(), this.initEvents_(), this.isHistorySet_)
            if (a = (a = this.history_.getToken().match(new RegExp(this.hashParam_ + "=([^&]+)"))) ? a[1] : null, b = !1, a) {
                for (var c in this.tabs_) {
                    var d = nd("a", "", this.tabs_[c].elm_)[0].href.split("#")[1];
                    a == d && (this.tabs_[c].show(), b = !0)
                }
                b || (this.tabs_[0].show(), this.setToken_(0))
            } else this.tabs_[0].show(), this.setToken_(0);
            else this.tabs_[0].show();
            else 1 == this.tabElms_.length &&
                (this.tabElms_[0].parentNode.style.display = "none", this.previousElm_ && (this.previousElm_.parentNode.style.display = "none"), this.initEvents_())
};
v("gweb.ui.TimedCarousel", Xn, void 0);
e = Xn.prototype;
e.initEvents_ = function() {
    this.startAutoTimer_();
    this.bindNavigation_();
    this.setMouseEvents()
};
e.setMouseEvents = function() {
    this.isTimerSet_ && (this.eh_.listen(this.elm_, "mouseover", this.doTimerStop), this.eh_.listen(this.elm_, "mouseout", za(this.doTimerRestart, this.tickCount_)))
};
e.createTabs = function() {
    D(this.tabElms_, function(a, b) {
        var c = new Yn(a, this, b);
        this.tabs_.push(c);
        c.targetElm.style.display = "none"
    }, this)
};
e.startAutoTimer_ = function() {
    this.isTimerSet_ && this.doTimerStart()
};
e.doTimerStart = function() {
    gc(this.timer_);
    this.timer_ = new lf(this.timerDuration_);
    this.timer_.start();
    this.eh_.listen(this.timer_, "tick", function() {
        this.setToken_(this.tickCount_);
        this.tabs_[this.tickCount_].show();
        this.tickCount_ == this.tabs_.length - 1 ? this.tickCount_ = 0 : this.tickCount_++
    })
};
e.doTimerRestart = function(a) {
    this.tickCount_ = a;
    this.timer_.start()
};
e.doTimerStop = function() {
    this.timer_ && this.timer_.stop()
};
e.bindNavigation_ = function() {
    this.previousElm_ && this.eh_.listen(this.previousElm_, "click", function(a) {
        this.previous();
        a.preventDefault()
    });
    this.nextElm_ && this.eh_.listen(this.nextElm_, "click", function(a) {
        this.next();
        a.preventDefault()
    })
};
e.previous = function() {
    var a = 0 < this.currentTab_.index ? this.currentTab_.index - 1 : this.tabs_.length - 1;
    this.goToTab(a);
    return a
};
e.next = function() {
    var a = this.currentTab_.index < this.tabs_.length - 1 ? this.currentTab_.index + 1 : 0;
    this.goToTab(a);
    return a
};
e.setToken_ = function(a) {
    if (this.isHistorySet_) {
        var b = nd("a", "", this.currentTab_.elm_)[0].href.split("#")[1];
        a = nd("a", "", this.tabs_[a].elm_)[0].href.split("#")[1];
        var c = this.history_.getToken(),
            b = c ? c.replace(b, a) : a;
        this.history_.setToken(b)
    }
};
e.goToTab = function(a) {
    this.setToken_(a);
    this.isTimerSet_ && this.doTimerStop();
    this.tabs_[a].show();
    this.isTimerSet_ && this.doTimerRestart(a)
};
var Zn = /tab-(.*)$/,
    Yn = function(a, b, c) {
        this.index = c;
        this.elm_ = a;
        this.parent = b;
        a = this.elm_.id ? this.elm_.id.match(Zn)[1] : nd("a", "", this.elm_)[0].href.split("#")[1];
        this.targetElm = Q(a);
        N(this.elm_, "click", function(a) {
            this.parent.goToTab(this.index);
            a.preventDefault()
        }, !1, this)
    };
e = Yn.prototype;
e.show = function() {
    return this.parent.isAnimating_ ? null : this != this.parent.currentTab_ ? (this.parent.currentTab_ && this.parent.currentTab_.hide(), this.parent.isTimerSet_ && this.parent.doTimerRestart(this.index), this.fadeIn_(), gd(this.elm_, this.parent.selectedTabClass_), this.parent.currentTab_ = this, this) : null
};
e.hide = function() {
    this.fadeOut_();
    id(this.elm_, this.parent.selectedTabClass_);
    return this
};
e.fadeIn_ = function() {
    var a = new ck(this.targetElm, this.parent.animInDuration_);
    N(a, "begin", this.animationBegin, !1, this);
    N(a, "end", this.animationDone, !1, this);
    a.play()
};
e.fadeOut_ = function() {
    var a = new bk(this.targetElm, this.parent.animOutDuration_);
    N(a, "begin", this.animationBegin, !1, this);
    N(a, "end", this.animationDone, !1, this);
    a.play()
};
e.animationBegin = function() {
    this.parent.isAnimating_ = !0
};
e.animationDone = function() {
    this.parent.isAnimating_ = !1
};
v("trends.hot.Carousel", function(a) {
    new Xn({
        carouselId: a,
        tabClass: "hottrends-carousel-tab",
        isTimerSet: !0,
        timerDuration: 5E3,
        animInDuration: 700,
        animOutDuration: 700,
        navNextClass: "hottrends-carousel-nav-next",
        navPreviousClass: "hottrends-carousel-nav-previous",
        tabContainerClass: "hottrends-carousel-tabs"
    })
}, void 0);