var $r = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports);
var Ko = $r((zo, Ze) => {
    function tr(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }

    const {toString: Qr} = Object.prototype, {getPrototypeOf: St} = Object, Ye = /* @__PURE__ */ ((e) => (t) => {
            const r = Qr.call(t);
            return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(/* @__PURE__ */ Object.create(null)), de = (e) => (e = e.toLowerCase(), (t) => Ye(t) === e),
        $e = (e) => (t) => typeof t === e, {isArray: Te} = Array, Ne = $e("undefined");

    function Xr(e) {
        return e !== null && !Ne(e) && e.constructor !== null && !Ne(e.constructor) && le(e.constructor.isBuffer) && e.constructor.isBuffer(e);
    }

    const rr = de("ArrayBuffer");

    function en(e) {
        let t;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rr(e.buffer), t;
    }

    const tn = $e("string"), le = $e("function"), nr = $e("number"), Qe = (e) => e !== null && typeof e == "object",
        rn = (e) => e === !0 || e === !1, We = (e) => {
            if (Ye(e) !== "object")
                return !1;
            const t = St(e);
            return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
        }, nn = de("Date"), sn = de("File"), on = de("Blob"), an = de("FileList"), cn = (e) => Qe(e) && le(e.pipe),
        ln = (e) => {
            let t;
            return e && (typeof FormData == "function" && e instanceof FormData || le(e.append) && ((t = Ye(e)) === "formdata" || // detect form-data instance
                t === "object" && le(e.toString) && e.toString() === "[object FormData]"));
        }, un = de("URLSearchParams"), [dn, fn, hn, pn] = ["ReadableStream", "Request", "Response", "Headers"].map(de),
        mn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

    function De(e, t, {allOwnKeys: r = !1} = {}) {
        if (e === null || typeof e > "u")
            return;
        let n, s;
        if (typeof e != "object" && (e = [e]), Te(e))
            for (n = 0, s = e.length; n < s; n++)
                t.call(null, e[n], n, e);
        else {
            const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
            let a;
            for (n = 0; n < i; n++)
                a = o[n], t.call(null, e[a], a, e);
        }
    }

    function sr(e, t) {
        t = t.toLowerCase();
        const r = Object.keys(e);
        let n = r.length, s;
        for (; n-- > 0;)
            if (s = r[n], t === s.toLowerCase())
                return s;
        return null;
    }

    const me = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
        or = (e) => !Ne(e) && e !== me;

    function ut() {
        const {caseless: e} = or(this) && this || {}, t = {}, r = (n, s) => {
            const o = e && sr(t, s) || s;
            We(t[o]) && We(n) ? t[o] = ut(t[o], n) : We(n) ? t[o] = ut({}, n) : Te(n) ? t[o] = n.slice() : t[o] = n;
        };
        for (let n = 0, s = arguments.length; n < s; n++)
            arguments[n] && De(arguments[n], r);
        return t;
    }

    const gn = (e, t, r, {allOwnKeys: n} = {}) => (De(t, (s, o) => {
            r && le(s) ? e[o] = tr(s, r) : e[o] = s;
        }, {allOwnKeys: n}), e), yn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), In = (e, t, r, n) => {
            e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), r && Object.assign(e.prototype, r);
        }, Cn = (e, t, r, n) => {
            let s, o, i;
            const a = {};
            if (t = t || {}, e == null) return t;
            do {
                for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0;)
                    i = s[o], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
                e = r !== !1 && St(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
        }, Sn = (e, t, r) => {
            e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
            const n = e.indexOf(t, r);
            return n !== -1 && n === r;
        }, bn = (e) => {
            if (!e) return null;
            if (Te(e)) return e;
            let t = e.length;
            if (!nr(t)) return null;
            const r = new Array(t);
            for (; t-- > 0;)
                r[t] = e[t];
            return r;
        }, An = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && St(Uint8Array)),
        vn = (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let s;
            for (; (s = n.next()) && !s.done;) {
                const o = s.value;
                t.call(e, o[0], o[1]);
            }
        }, wn = (e, t) => {
            let r;
            const n = [];
            for (; (r = e.exec(t)) !== null;)
                n.push(r);
            return n;
        }, Rn = de("HTMLFormElement"), Tn = (e) => e.toLowerCase().replace(
            /[-_\s]([a-z\d])(\w*)/g,
            function (r, n, s) {
                return n.toUpperCase() + s;
            }
        ), Ot = (({hasOwnProperty: e}) => (t, r) => e.call(t, r))(Object.prototype), On = de("RegExp"), ir = (e, t) => {
            const r = Object.getOwnPropertyDescriptors(e), n = {};
            De(r, (s, o) => {
                let i;
                (i = t(s, o, e)) !== !1 && (n[o] = i || s);
            }), Object.defineProperties(e, n);
        }, kn = (e) => {
            ir(e, (t, r) => {
                if (le(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
                    return !1;
                const n = e[r];
                if (le(n)) {
                    if (t.enumerable = !1, "writable" in t) {
                        t.writable = !1;
                        return;
                    }
                    t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + r + "'");
                    });
                }
            });
        }, En = (e, t) => {
            const r = {}, n = (s) => {
                s.forEach((o) => {
                    r[o] = !0;
                });
            };
            return Te(e) ? n(e) : n(String(e).split(t)), r;
        }, Mn = () => {
        }, Nn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, nt = "abcdefghijklmnopqrstuvwxyz",
        kt = "0123456789", ar = {
            DIGIT: kt,
            ALPHA: nt,
            ALPHA_DIGIT: nt + nt.toUpperCase() + kt
        }, Fn = (e = 16, t = ar.ALPHA_DIGIT) => {
            let r = "";
            const {length: n} = t;
            for (; e--;)
                r += t[Math.random() * n | 0];
            return r;
        };

    function xn(e) {
        return !!(e && le(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
    }

    const Dn = (e) => {
            const t = new Array(10), r = (n, s) => {
                if (Qe(n)) {
                    if (t.indexOf(n) >= 0)
                        return;
                    if (!("toJSON" in n)) {
                        t[s] = n;
                        const o = Te(n) ? [] : {};
                        return De(n, (i, a) => {
                            const l = r(i, s + 1);
                            !Ne(l) && (o[a] = l);
                        }), t[s] = void 0, o;
                    }
                }
                return n;
            };
            return r(e, 0);
        }, Ln = de("AsyncFunction"), _n = (e) => e && (Qe(e) || le(e)) && le(e.then) && le(e.catch),
        cr = ((e, t) => e ? setImmediate : t ? ((r, n) => (me.addEventListener("message", ({source: s, data: o}) => {
            s === me && o === r && n.length && n.shift()();
        }, !1), (s) => {
            n.push(s), me.postMessage(r, "*");
        }))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
            typeof setImmediate == "function",
            le(me.postMessage)
        ), Bn = typeof queueMicrotask < "u" ? queueMicrotask.bind(me) : typeof process < "u" && process.nextTick || cr,
        h = {
            isArray: Te,
            isArrayBuffer: rr,
            isBuffer: Xr,
            isFormData: ln,
            isArrayBufferView: en,
            isString: tn,
            isNumber: nr,
            isBoolean: rn,
            isObject: Qe,
            isPlainObject: We,
            isReadableStream: dn,
            isRequest: fn,
            isResponse: hn,
            isHeaders: pn,
            isUndefined: Ne,
            isDate: nn,
            isFile: sn,
            isBlob: on,
            isRegExp: On,
            isFunction: le,
            isStream: cn,
            isURLSearchParams: un,
            isTypedArray: An,
            isFileList: an,
            forEach: De,
            merge: ut,
            extend: gn,
            trim: mn,
            stripBOM: yn,
            inherits: In,
            toFlatObject: Cn,
            kindOf: Ye,
            kindOfTest: de,
            endsWith: Sn,
            toArray: bn,
            forEachEntry: vn,
            matchAll: wn,
            isHTMLForm: Rn,
            hasOwnProperty: Ot,
            hasOwnProp: Ot,
            // an alias to avoid ESLint no-prototype-builtins detection
            reduceDescriptors: ir,
            freezeMethods: kn,
            toObjectSet: En,
            toCamelCase: Tn,
            noop: Mn,
            toFiniteNumber: Nn,
            findKey: sr,
            global: me,
            isContextDefined: or,
            ALPHABET: ar,
            generateString: Fn,
            isSpecCompliantForm: xn,
            toJSONObject: Dn,
            isAsyncFn: Ln,
            isThenable: _n,
            setImmediate: cr,
            asap: Bn
        };

    function M(e, t, r, n, s) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
    }

    h.inherits(M, Error, {
        toJSON: function () {
            return {
                // Standard
                message: this.message,
                name: this.name,
                // Microsoft
                description: this.description,
                number: this.number,
                // Mozilla
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                // Axios
                config: h.toJSONObject(this.config),
                code: this.code,
                status: this.status
            };
        }
    });
    const lr = M.prototype, ur = {};
    [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
    ].forEach((e) => {
        ur[e] = {value: e};
    });
    Object.defineProperties(M, ur);
    Object.defineProperty(lr, "isAxiosError", {value: !0});
    M.from = (e, t, r, n, s, o) => {
        const i = Object.create(lr);
        return h.toFlatObject(e, i, function (l) {
            return l !== Error.prototype;
        }, (a) => a !== "isAxiosError"), M.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
    };
    const Un = null;

    function dt(e) {
        return h.isPlainObject(e) || h.isArray(e);
    }

    function dr(e) {
        return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }

    function Et(e, t, r) {
        return e ? e.concat(t).map(function (s, o) {
            return s = dr(s), !r && o ? "[" + s + "]" : s;
        }).join(r ? "." : "") : t;
    }

    function Wn(e) {
        return h.isArray(e) && !e.some(dt);
    }

    const Pn = h.toFlatObject(h, {}, null, function (t) {
        return /^is[A-Z]/.test(t);
    });

    function Xe(e, t, r) {
        if (!h.isObject(e))
            throw new TypeError("target must be an object");
        t = t || new FormData(), r = h.toFlatObject(r, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function (g, y) {
            return !h.isUndefined(y[g]);
        });
        const n = r.metaTokens, s = r.visitor || u, o = r.dots, i = r.indexes,
            l = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
        if (!h.isFunction(s))
            throw new TypeError("visitor must be a function");

        function c(f) {
            if (f === null) return "";
            if (h.isDate(f))
                return f.toISOString();
            if (!l && h.isBlob(f))
                throw new M("Blob is not supported. Use a Buffer instead.");
            return h.isArrayBuffer(f) || h.isTypedArray(f) ? l && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
        }

        function u(f, g, y) {
            let v = f;
            if (f && !y && typeof f == "object") {
                if (h.endsWith(g, "{}"))
                    g = n ? g : g.slice(0, -2), f = JSON.stringify(f);
                else if (h.isArray(f) && Wn(f) || (h.isFileList(f) || h.endsWith(g, "[]")) && (v = h.toArray(f)))
                    return g = dr(g), v.forEach(function (C, N) {
                        !(h.isUndefined(C) || C === null) && t.append(
                            // eslint-disable-next-line no-nested-ternary
                            i === !0 ? Et([g], N, o) : i === null ? g : g + "[]",
                            c(C)
                        );
                    }), !1;
            }
            return dt(f) ? !0 : (t.append(Et(y, g, o), c(f)), !1);
        }

        const d = [], p = Object.assign(Pn, {
            defaultVisitor: u,
            convertValue: c,
            isVisitable: dt
        });

        function m(f, g) {
            if (!h.isUndefined(f)) {
                if (d.indexOf(f) !== -1)
                    throw Error("Circular reference detected in " + g.join("."));
                d.push(f), h.forEach(f, function (v, I) {
                    (!(h.isUndefined(v) || v === null) && s.call(
                        t,
                        v,
                        h.isString(I) ? I.trim() : I,
                        g,
                        p
                    )) === !0 && m(v, g ? g.concat(I) : [I]);
                }), d.pop();
            }
        }

        if (!h.isObject(e))
            throw new TypeError("data must be an object");
        return m(e), t;
    }

    function Mt(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
            return t[n];
        });
    }

    function bt(e, t) {
        this._pairs = [], e && Xe(e, this, t);
    }

    const fr = bt.prototype;
    fr.append = function (t, r) {
        this._pairs.push([t, r]);
    };
    fr.toString = function (t) {
        const r = t ? function (n) {
            return t.call(this, n, Mt);
        } : Mt;
        return this._pairs.map(function (s) {
            return r(s[0]) + "=" + r(s[1]);
        }, "").join("&");
    };

    function Gn(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }

    function hr(e, t, r) {
        if (!t)
            return e;
        const n = r && r.encode || Gn, s = r && r.serialize;
        let o;
        if (s ? o = s(t, r) : o = h.isURLSearchParams(t) ? t.toString() : new bt(t, r).toString(n), o) {
            const i = e.indexOf("#");
            i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
        }
        return e;
    }

    class Nt {
        constructor() {
            this.handlers = [];
        }

        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(t, r, n) {
            return this.handlers.push({
                fulfilled: t,
                rejected: r,
                synchronous: n ? n.synchronous : !1,
                runWhen: n ? n.runWhen : null
            }), this.handlers.length - 1;
        }

        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null);
        }

        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
            this.handlers && (this.handlers = []);
        }

        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(t) {
            h.forEach(this.handlers, function (n) {
                n !== null && t(n);
            });
        }
    }

    const pr = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }, Vn = typeof URLSearchParams < "u" ? URLSearchParams : bt, Zn = typeof FormData < "u" ? FormData : null,
        Hn = typeof Blob < "u" ? Blob : null, Kn = {
            isBrowser: !0,
            classes: {
                URLSearchParams: Vn,
                FormData: Zn,
                Blob: Hn
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        }, At = typeof window < "u" && typeof document < "u", ft = typeof navigator == "object" && navigator || void 0,
        jn = At && (!ft || ["ReactNative", "NativeScript", "NS"].indexOf(ft.product) < 0),
        zn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
            self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
        Jn = At && window.location.href || "http://localhost",
        qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
            __proto__: null,
            hasBrowserEnv: At,
            hasStandardBrowserEnv: jn,
            hasStandardBrowserWebWorkerEnv: zn,
            navigator: ft,
            origin: Jn
        }, Symbol.toStringTag, {value: "Module"})), ae = {
            ...qn,
            ...Kn
        };

    function Yn(e, t) {
        return Xe(e, new ae.classes.URLSearchParams(), Object.assign({
            visitor: function (r, n, s, o) {
                return ae.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
            }
        }, t));
    }

    function $n(e) {
        return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
    }

    function Qn(e) {
        const t = {}, r = Object.keys(e);
        let n;
        const s = r.length;
        let o;
        for (n = 0; n < s; n++)
            o = r[n], t[o] = e[o];
        return t;
    }

    function mr(e) {
        function t(r, n, s, o) {
            let i = r[o++];
            if (i === "__proto__") return !0;
            const a = Number.isFinite(+i), l = o >= r.length;
            return i = !i && h.isArray(s) ? s.length : i, l ? (h.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !a) : ((!s[i] || !h.isObject(s[i])) && (s[i] = []), t(r, n, s[i], o) && h.isArray(s[i]) && (s[i] = Qn(s[i])), !a);
        }

        if (h.isFormData(e) && h.isFunction(e.entries)) {
            const r = {};
            return h.forEachEntry(e, (n, s) => {
                t($n(n), s, r, 0);
            }), r;
        }
        return null;
    }

    function Xn(e, t, r) {
        if (h.isString(e))
            try {
                return (t || JSON.parse)(e), h.trim(e);
            } catch (n) {
                if (n.name !== "SyntaxError")
                    throw n;
            }
        return (0, JSON.stringify)(e);
    }

    const Le = {
        transitional: pr,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function (t, r) {
            const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = h.isObject(t);
            if (o && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
                return s ? JSON.stringify(mr(t)) : t;
            if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
                return t;
            if (h.isArrayBufferView(t))
                return t.buffer;
            if (h.isURLSearchParams(t))
                return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
            let a;
            if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return Yn(t, this.formSerializer).toString();
                if ((a = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                    const l = this.env && this.env.FormData;
                    return Xe(
                        a ? {"files[]": t} : t,
                        l && new l(),
                        this.formSerializer
                    );
                }
            }
            return o || s ? (r.setContentType("application/json", !1), Xn(t)) : t;
        }],
        transformResponse: [function (t) {
            const r = this.transitional || Le.transitional, n = r && r.forcedJSONParsing,
                s = this.responseType === "json";
            if (h.isResponse(t) || h.isReadableStream(t))
                return t;
            if (t && h.isString(t) && (n && !this.responseType || s)) {
                const i = !(r && r.silentJSONParsing) && s;
                try {
                    return JSON.parse(t);
                } catch (a) {
                    if (i)
                        throw a.name === "SyntaxError" ? M.from(a, M.ERR_BAD_RESPONSE, this, null, this.response) : a;
                }
            }
            return t;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: ae.classes.FormData,
            Blob: ae.classes.Blob
        },
        validateStatus: function (t) {
            return t >= 200 && t < 300;
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    h.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Le.headers[e] = {};
    });
    const es = h.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
    ]), ts = (e) => {
        const t = {};
        let r, n, s;
        return e && e.split(`
`).forEach(function (i) {
            s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || t[r] && es[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
        }), t;
    }, Ft = Symbol("internals");

    function ke(e) {
        return e && String(e).trim().toLowerCase();
    }

    function Pe(e) {
        return e === !1 || e == null ? e : h.isArray(e) ? e.map(Pe) : String(e);
    }

    function rs(e) {
        const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let n;
        for (; n = r.exec(e);)
            t[n[1]] = n[2];
        return t;
    }

    const ns = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

    function st(e, t, r, n, s) {
        if (h.isFunction(n))
            return n.call(this, t, r);
        if (s && (t = r), !!h.isString(t)) {
            if (h.isString(n))
                return t.indexOf(n) !== -1;
            if (h.isRegExp(n))
                return n.test(t);
        }
    }

    function ss(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
    }

    function os(e, t) {
        const r = h.toCamelCase(" " + t);
        ["get", "set", "has"].forEach((n) => {
            Object.defineProperty(e, n + r, {
                value: function (s, o, i) {
                    return this[n].call(this, t, s, o, i);
                },
                configurable: !0
            });
        });
    }

    class ce {
        constructor(t) {
            t && this.set(t);
        }

        set(t, r, n) {
            const s = this;

            function o(a, l, c) {
                const u = ke(l);
                if (!u)
                    throw new Error("header name must be a non-empty string");
                const d = h.findKey(s, u);
                (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || l] = Pe(a));
            }

            const i = (a, l) => h.forEach(a, (c, u) => o(c, u, l));
            if (h.isPlainObject(t) || t instanceof this.constructor)
                i(t, r);
            else if (h.isString(t) && (t = t.trim()) && !ns(t))
                i(ts(t), r);
            else if (h.isHeaders(t))
                for (const [a, l] of t.entries())
                    o(l, a, n);
            else
                t != null && o(r, t, n);
            return this;
        }

        get(t, r) {
            if (t = ke(t), t) {
                const n = h.findKey(this, t);
                if (n) {
                    const s = this[n];
                    if (!r)
                        return s;
                    if (r === !0)
                        return rs(s);
                    if (h.isFunction(r))
                        return r.call(this, s, n);
                    if (h.isRegExp(r))
                        return r.exec(s);
                    throw new TypeError("parser must be boolean|regexp|function");
                }
            }
        }

        has(t, r) {
            if (t = ke(t), t) {
                const n = h.findKey(this, t);
                return !!(n && this[n] !== void 0 && (!r || st(this, this[n], n, r)));
            }
            return !1;
        }

        delete(t, r) {
            const n = this;
            let s = !1;

            function o(i) {
                if (i = ke(i), i) {
                    const a = h.findKey(n, i);
                    a && (!r || st(n, n[a], a, r)) && (delete n[a], s = !0);
                }
            }

            return h.isArray(t) ? t.forEach(o) : o(t), s;
        }

        clear(t) {
            const r = Object.keys(this);
            let n = r.length, s = !1;
            for (; n--;) {
                const o = r[n];
                (!t || st(this, this[o], o, t, !0)) && (delete this[o], s = !0);
            }
            return s;
        }

        normalize(t) {
            const r = this, n = {};
            return h.forEach(this, (s, o) => {
                const i = h.findKey(n, o);
                if (i) {
                    r[i] = Pe(s), delete r[o];
                    return;
                }
                const a = t ? ss(o) : String(o).trim();
                a !== o && delete r[o], r[a] = Pe(s), n[a] = !0;
            }), this;
        }

        concat(...t) {
            return this.constructor.concat(this, ...t);
        }

        toJSON(t) {
            const r = /* @__PURE__ */ Object.create(null);
            return h.forEach(this, (n, s) => {
                n != null && n !== !1 && (r[s] = t && h.isArray(n) ? n.join(", ") : n);
            }), r;
        }

        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
        }

        toString() {
            return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
        }

        get [Symbol.toStringTag]() {
            return "AxiosHeaders";
        }

        static from(t) {
            return t instanceof this ? t : new this(t);
        }

        static concat(t, ...r) {
            const n = new this(t);
            return r.forEach((s) => n.set(s)), n;
        }

        static accessor(t) {
            const n = (this[Ft] = this[Ft] = {
                accessors: {}
            }).accessors, s = this.prototype;

            function o(i) {
                const a = ke(i);
                n[a] || (os(s, i), n[a] = !0);
            }

            return h.isArray(t) ? t.forEach(o) : o(t), this;
        }
    }

    ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    h.reduceDescriptors(ce.prototype, ({value: e}, t) => {
        let r = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(n) {
                this[r] = n;
            }
        };
    });
    h.freezeMethods(ce);

    function ot(e, t) {
        const r = this || Le, n = t || r, s = ce.from(n.headers);
        let o = n.data;
        return h.forEach(e, function (a) {
            o = a.call(r, o, s.normalize(), t ? t.status : void 0);
        }), s.normalize(), o;
    }

    function gr(e) {
        return !!(e && e.__CANCEL__);
    }

    function Oe(e, t, r) {
        M.call(this, e ?? "canceled", M.ERR_CANCELED, t, r), this.name = "CanceledError";
    }

    h.inherits(Oe, M, {
        __CANCEL__: !0
    });

    function yr(e, t, r) {
        const n = r.config.validateStatus;
        !r.status || !n || n(r.status) ? e(r) : t(new M(
            "Request failed with status code " + r.status,
            [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
            r.config,
            r.request,
            r
        ));
    }

    function is(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || "";
    }

    function as(e, t) {
        e = e || 10;
        const r = new Array(e), n = new Array(e);
        let s = 0, o = 0, i;
        return t = t !== void 0 ? t : 1e3, function (l) {
            const c = Date.now(), u = n[o];
            i || (i = c), r[s] = l, n[s] = c;
            let d = o, p = 0;
            for (; d !== s;)
                p += r[d++], d = d % e;
            if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
                return;
            const m = u && c - u;
            return m ? Math.round(p * 1e3 / m) : void 0;
        };
    }

    function cs(e, t) {
        let r = 0, n = 1e3 / t, s, o;
        const i = (c, u = Date.now()) => {
            r = u, s = null, o && (clearTimeout(o), o = null), e.apply(null, c);
        };
        return [(...c) => {
            const u = Date.now(), d = u - r;
            d >= n ? i(c, u) : (s = c, o || (o = setTimeout(() => {
                o = null, i(s);
            }, n - d)));
        }, () => s && i(s)];
    }

    const He = (e, t, r = 3) => {
        let n = 0;
        const s = as(50, 250);
        return cs((o) => {
            const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - n, c = s(l), u = i <= a;
            n = i;
            const d = {
                loaded: i,
                total: a,
                progress: a ? i / a : void 0,
                bytes: l,
                rate: c || void 0,
                estimated: c && a && u ? (a - i) / c : void 0,
                event: o,
                lengthComputable: a != null,
                [t ? "download" : "upload"]: !0
            };
            e(d);
        }, r);
    }, xt = (e, t) => {
        const r = e != null;
        return [(n) => t[0]({
            lengthComputable: r,
            total: e,
            loaded: n
        }), t[1]];
    }, Dt = (e) => (...t) => h.asap(() => e(...t)), ls = ae.hasStandardBrowserEnv ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function () {
            const t = ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent), r = document.createElement("a");
            let n;

            function s(o) {
                let i = o;
                return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
                };
            }

            return n = s(window.location.href), function (i) {
                const a = h.isString(i) ? s(i) : i;
                return a.protocol === n.protocol && a.host === n.host;
            };
        }()
    ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        /* @__PURE__ */ function () {
            return function () {
                return !0;
            };
        }()
    ), us = ae.hasStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        {
            write(e, t, r, n, s, o) {
                const i = [e + "=" + encodeURIComponent(t)];
                h.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), h.isString(n) && i.push("path=" + n), h.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null;
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5);
            }
        }
    ) : (
        // Non-standard browser env (web workers, react-native) lack needed support.
        {
            write() {
            },
            read() {
                return null;
            },
            remove() {
            }
        }
    );

    function ds(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
    }

    function fs(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
    }

    function Ir(e, t) {
        return e && !ds(t) ? fs(e, t) : t;
    }

    const Lt = (e) => e instanceof ce ? {...e} : e;

    function Ie(e, t) {
        t = t || {};
        const r = {};

        function n(c, u, d) {
            return h.isPlainObject(c) && h.isPlainObject(u) ? h.merge.call({caseless: d}, c, u) : h.isPlainObject(u) ? h.merge({}, u) : h.isArray(u) ? u.slice() : u;
        }

        function s(c, u, d) {
            if (h.isUndefined(u)) {
                if (!h.isUndefined(c))
                    return n(void 0, c, d);
            } else return n(c, u, d);
        }

        function o(c, u) {
            if (!h.isUndefined(u))
                return n(void 0, u);
        }

        function i(c, u) {
            if (h.isUndefined(u)) {
                if (!h.isUndefined(c))
                    return n(void 0, c);
            } else return n(void 0, u);
        }

        function a(c, u, d) {
            if (d in t)
                return n(c, u);
            if (d in e)
                return n(void 0, c);
        }

        const l = {
            url: o,
            method: o,
            data: o,
            baseURL: i,
            transformRequest: i,
            transformResponse: i,
            paramsSerializer: i,
            timeout: i,
            timeoutMessage: i,
            withCredentials: i,
            withXSRFToken: i,
            adapter: i,
            responseType: i,
            xsrfCookieName: i,
            xsrfHeaderName: i,
            onUploadProgress: i,
            onDownloadProgress: i,
            decompress: i,
            maxContentLength: i,
            maxBodyLength: i,
            beforeRedirect: i,
            transport: i,
            httpAgent: i,
            httpsAgent: i,
            cancelToken: i,
            socketPath: i,
            responseEncoding: i,
            validateStatus: a,
            headers: (c, u) => s(Lt(c), Lt(u), !0)
        };
        return h.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
            const d = l[u] || s, p = d(e[u], t[u], u);
            h.isUndefined(p) && d !== a || (r[u] = p);
        }), r;
    }

    const Cr = (e) => {
            const t = Ie({}, e);
            let {data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a} = t;
            t.headers = i = ce.from(i), t.url = hr(Ir(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
                "Authorization",
                "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
            );
            let l;
            if (h.isFormData(r)) {
                if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
                    i.setContentType(void 0);
                else if ((l = i.getContentType()) !== !1) {
                    const [c, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
                    i.setContentType([c || "multipart/form-data", ...u].join("; "));
                }
            }
            if (ae.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && ls(t.url))) {
                const c = s && o && us.read(o);
                c && i.set(s, c);
            }
            return t;
        }, hs = typeof XMLHttpRequest < "u", ps = hs && function (e) {
            return new Promise(function (r, n) {
                const s = Cr(e);
                let o = s.data;
                const i = ce.from(s.headers).normalize();
                let {responseType: a, onUploadProgress: l, onDownloadProgress: c} = s, u, d, p, m, f;

                function g() {
                    m && m(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
                }

                let y = new XMLHttpRequest();
                y.open(s.method.toUpperCase(), s.url, !0), y.timeout = s.timeout;

                function v() {
                    if (!y)
                        return;
                    const C = ce.from(
                        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
                    ), D = {
                        data: !a || a === "text" || a === "json" ? y.responseText : y.response,
                        status: y.status,
                        statusText: y.statusText,
                        headers: C,
                        config: e,
                        request: y
                    };
                    yr(function (Z) {
                        r(Z), g();
                    }, function (Z) {
                        n(Z), g();
                    }, D), y = null;
                }

                "onloadend" in y ? y.onloadend = v : y.onreadystatechange = function () {
                    !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(v);
                }, y.onabort = function () {
                    y && (n(new M("Request aborted", M.ECONNABORTED, e, y)), y = null);
                }, y.onerror = function () {
                    n(new M("Network Error", M.ERR_NETWORK, e, y)), y = null;
                }, y.ontimeout = function () {
                    let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
                    const D = s.transitional || pr;
                    s.timeoutErrorMessage && (N = s.timeoutErrorMessage), n(new M(
                        N,
                        D.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED,
                        e,
                        y
                    )), y = null;
                }, o === void 0 && i.setContentType(null), "setRequestHeader" in y && h.forEach(i.toJSON(), function (N, D) {
                    y.setRequestHeader(D, N);
                }), h.isUndefined(s.withCredentials) || (y.withCredentials = !!s.withCredentials), a && a !== "json" && (y.responseType = s.responseType), c && ([p, f] = He(c, !0), y.addEventListener("progress", p)), l && y.upload && ([d, m] = He(l), y.upload.addEventListener("progress", d), y.upload.addEventListener("loadend", m)), (s.cancelToken || s.signal) && (u = (C) => {
                    y && (n(!C || C.type ? new Oe(null, e, y) : C), y.abort(), y = null);
                }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
                const I = is(s.url);
                if (I && ae.protocols.indexOf(I) === -1) {
                    n(new M("Unsupported protocol " + I + ":", M.ERR_BAD_REQUEST, e));
                    return;
                }
                y.send(o || null);
            });
        }, ms = (e, t) => {
            const {length: r} = e = e ? e.filter(Boolean) : [];
            if (t || r) {
                let n = new AbortController(), s;
                const o = function (c) {
                    if (!s) {
                        s = !0, a();
                        const u = c instanceof Error ? c : this.reason;
                        n.abort(u instanceof M ? u : new Oe(u instanceof Error ? u.message : u));
                    }
                };
                let i = t && setTimeout(() => {
                    i = null, o(new M(`timeout ${t} of ms exceeded`, M.ETIMEDOUT));
                }, t);
                const a = () => {
                    e && (i && clearTimeout(i), i = null, e.forEach((c) => {
                        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
                    }), e = null);
                };
                e.forEach((c) => c.addEventListener("abort", o));
                const {signal: l} = n;
                return l.unsubscribe = () => h.asap(a), l;
            }
        }, gs = function* (e, t) {
            let r = e.byteLength;
            if (r < t) {
                yield e;
                return;
            }
            let n = 0, s;
            for (; n < r;)
                s = n + t, yield e.slice(n, s), n = s;
        }, ys = async function* (e, t) {
            for await (const r of Is(e))
                yield* gs(r, t);
        }, Is = async function* (e) {
            if (e[Symbol.asyncIterator]) {
                yield* e;
                return;
            }
            const t = e.getReader();
            try {
                for (; ;) {
                    const {done: r, value: n} = await t.read();
                    if (r)
                        break;
                    yield n;
                }
            } finally {
                await t.cancel();
            }
        }, _t = (e, t, r, n) => {
            const s = ys(e, t);
            let o = 0, i, a = (l) => {
                i || (i = !0, n && n(l));
            };
            return new ReadableStream({
                async pull(l) {
                    try {
                        const {done: c, value: u} = await s.next();
                        if (c) {
                            a(), l.close();
                            return;
                        }
                        let d = u.byteLength;
                        if (r) {
                            let p = o += d;
                            r(p);
                        }
                        l.enqueue(new Uint8Array(u));
                    } catch (c) {
                        throw a(c), c;
                    }
                },
                cancel(l) {
                    return a(l), s.return();
                }
            }, {
                highWaterMark: 2
            });
        }, et = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
        Sr = et && typeof ReadableStream == "function",
        Cs = et && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        br = (e, ...t) => {
            try {
                return !!e(...t);
            } catch {
                return !1;
            }
        }, Ss = Sr && br(() => {
            let e = !1;
            const t = new Request(ae.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                    return e = !0, "half";
                }
            }).headers.has("Content-Type");
            return e && !t;
        }), Bt = 64 * 1024, ht = Sr && br(() => h.isReadableStream(new Response("").body)), Ke = {
            stream: ht && ((e) => e.body)
        };
    et && ((e) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
            !Ke[t] && (Ke[t] = h.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
                throw new M(`Response type '${t}' is not supported`, M.ERR_NOT_SUPPORT, n);
            });
        });
    })(new Response());
    const bs = async (e) => {
        if (e == null)
            return 0;
        if (h.isBlob(e))
            return e.size;
        if (h.isSpecCompliantForm(e))
            return (await new Request(ae.origin, {
                method: "POST",
                body: e
            }).arrayBuffer()).byteLength;
        if (h.isArrayBufferView(e) || h.isArrayBuffer(e))
            return e.byteLength;
        if (h.isURLSearchParams(e) && (e = e + ""), h.isString(e))
            return (await Cs(e)).byteLength;
    }, As = async (e, t) => {
        const r = h.toFiniteNumber(e.getContentLength());
        return r ?? bs(t);
    }, vs = et && (async (e) => {
        let {
            url: t,
            method: r,
            data: n,
            signal: s,
            cancelToken: o,
            timeout: i,
            onDownloadProgress: a,
            onUploadProgress: l,
            responseType: c,
            headers: u,
            withCredentials: d = "same-origin",
            fetchOptions: p
        } = Cr(e);
        c = c ? (c + "").toLowerCase() : "text";
        let m = ms([s, o && o.toAbortSignal()], i), f;
        const g = m && m.unsubscribe && (() => {
            m.unsubscribe();
        });
        let y;
        try {
            if (l && Ss && r !== "get" && r !== "head" && (y = await As(u, n)) !== 0) {
                let D = new Request(t, {
                    method: "POST",
                    body: n,
                    duplex: "half"
                }), B;
                if (h.isFormData(n) && (B = D.headers.get("content-type")) && u.setContentType(B), D.body) {
                    const [Z, L] = xt(
                        y,
                        He(Dt(l))
                    );
                    n = _t(D.body, Bt, Z, L);
                }
            }
            h.isString(d) || (d = d ? "include" : "omit");
            const v = "credentials" in Request.prototype;
            f = new Request(t, {
                ...p,
                signal: m,
                method: r.toUpperCase(),
                headers: u.normalize().toJSON(),
                body: n,
                duplex: "half",
                credentials: v ? d : void 0
            });
            let I = await fetch(f);
            const C = ht && (c === "stream" || c === "response");
            if (ht && (a || C && g)) {
                const D = {};
                ["status", "statusText", "headers"].forEach((J) => {
                    D[J] = I[J];
                });
                const B = h.toFiniteNumber(I.headers.get("content-length")), [Z, L] = a && xt(
                    B,
                    He(Dt(a), !0)
                ) || [];
                I = new Response(
                    _t(I.body, Bt, Z, () => {
                        L && L(), g && g();
                    }),
                    D
                );
            }
            c = c || "text";
            let N = await Ke[h.findKey(Ke, c) || "text"](I, e);
            return !C && g && g(), await new Promise((D, B) => {
                yr(D, B, {
                    data: N,
                    headers: ce.from(I.headers),
                    status: I.status,
                    statusText: I.statusText,
                    config: e,
                    request: f
                });
            });
        } catch (v) {
            throw g && g(), v && v.name === "TypeError" && /fetch/i.test(v.message) ? Object.assign(
                new M("Network Error", M.ERR_NETWORK, e, f),
                {
                    cause: v.cause || v
                }
            ) : M.from(v, v && v.code, e, f);
        }
    }), pt = {
        http: Un,
        xhr: ps,
        fetch: vs
    };
    h.forEach(pt, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {value: t});
            } catch {
            }
            Object.defineProperty(e, "adapterName", {value: t});
        }
    });
    const Ut = (e) => `- ${e}`, ws = (e) => h.isFunction(e) || e === null || e === !1, Ar = {
        getAdapter: (e) => {
            e = h.isArray(e) ? e : [e];
            const {length: t} = e;
            let r, n;
            const s = {};
            for (let o = 0; o < t; o++) {
                r = e[o];
                let i;
                if (n = r, !ws(r) && (n = pt[(i = String(r)).toLowerCase()], n === void 0))
                    throw new M(`Unknown adapter '${i}'`);
                if (n)
                    break;
                s[i || "#" + o] = n;
            }
            if (!n) {
                const o = Object.entries(s).map(
                    ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
                );
                let i = t ? o.length > 1 ? `since :
` + o.map(Ut).join(`
`) : " " + Ut(o[0]) : "as no adapter specified";
                throw new M(
                    "There is no suitable adapter to dispatch the request " + i,
                    "ERR_NOT_SUPPORT"
                );
            }
            return n;
        },
        adapters: pt
    };

    function it(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
            throw new Oe(null, e);
    }

    function Wt(e) {
        return it(e), e.headers = ce.from(e.headers), e.data = ot.call(
            e,
            e.transformRequest
        ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ar.getAdapter(e.adapter || Le.adapter)(e).then(function (n) {
            return it(e), n.data = ot.call(
                e,
                e.transformResponse,
                n
            ), n.headers = ce.from(n.headers), n;
        }, function (n) {
            return gr(n) || (it(e), n && n.response && (n.response.data = ot.call(
                e,
                e.transformResponse,
                n.response
            ), n.response.headers = ce.from(n.response.headers))), Promise.reject(n);
        });
    }

    const vr = "1.7.7", vt = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        vt[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    });
    const Pt = {};
    vt.transitional = function (t, r, n) {
        function s(o, i) {
            return "[Axios v" + vr + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
        }

        return (o, i, a) => {
            if (t === !1)
                throw new M(
                    s(i, " has been removed" + (r ? " in " + r : "")),
                    M.ERR_DEPRECATED
                );
            return r && !Pt[i] && (Pt[i] = !0, console.warn(
                s(
                    i,
                    " has been deprecated since v" + r + " and will be removed in the near future"
                )
            )), t ? t(o, i, a) : !0;
        };
    };

    function Rs(e, t, r) {
        if (typeof e != "object")
            throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
        const n = Object.keys(e);
        let s = n.length;
        for (; s-- > 0;) {
            const o = n[s], i = t[o];
            if (i) {
                const a = e[o], l = a === void 0 || i(a, o, e);
                if (l !== !0)
                    throw new M("option " + o + " must be " + l, M.ERR_BAD_OPTION_VALUE);
                continue;
            }
            if (r !== !0)
                throw new M("Unknown option " + o, M.ERR_BAD_OPTION);
        }
    }

    const mt = {
        assertOptions: Rs,
        validators: vt
    }, he = mt.validators;

    class ye {
        constructor(t) {
            this.defaults = t, this.interceptors = {
                request: new Nt(),
                response: new Nt()
            };
        }

        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        async request(t, r) {
            try {
                return await this._request(t, r);
            } catch (n) {
                if (n instanceof Error) {
                    let s;
                    Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
                    const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                    try {
                        n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
                    } catch {
                    }
                }
                throw n;
            }
        }

        _request(t, r) {
            typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ie(this.defaults, r);
            const {transitional: n, paramsSerializer: s, headers: o} = r;
            n !== void 0 && mt.assertOptions(n, {
                silentJSONParsing: he.transitional(he.boolean),
                forcedJSONParsing: he.transitional(he.boolean),
                clarifyTimeoutError: he.transitional(he.boolean)
            }, !1), s != null && (h.isFunction(s) ? r.paramsSerializer = {
                serialize: s
            } : mt.assertOptions(s, {
                encode: he.function,
                serialize: he.function
            }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
            let i = o && h.merge(
                o.common,
                o[r.method]
            );
            o && h.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (f) => {
                    delete o[f];
                }
            ), r.headers = ce.concat(i, o);
            const a = [];
            let l = !0;
            this.interceptors.request.forEach(function (g) {
                typeof g.runWhen == "function" && g.runWhen(r) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
            });
            const c = [];
            this.interceptors.response.forEach(function (g) {
                c.push(g.fulfilled, g.rejected);
            });
            let u, d = 0, p;
            if (!l) {
                const f = [Wt.bind(this), void 0];
                for (f.unshift.apply(f, a), f.push.apply(f, c), p = f.length, u = Promise.resolve(r); d < p;)
                    u = u.then(f[d++], f[d++]);
                return u;
            }
            p = a.length;
            let m = r;
            for (d = 0; d < p;) {
                const f = a[d++], g = a[d++];
                try {
                    m = f(m);
                } catch (y) {
                    g.call(this, y);
                    break;
                }
            }
            try {
                u = Wt.call(this, m);
            } catch (f) {
                return Promise.reject(f);
            }
            for (d = 0, p = c.length; d < p;)
                u = u.then(c[d++], c[d++]);
            return u;
        }

        getUri(t) {
            t = Ie(this.defaults, t);
            const r = Ir(t.baseURL, t.url);
            return hr(r, t.params, t.paramsSerializer);
        }
    }

    h.forEach(["delete", "get", "head", "options"], function (t) {
        ye.prototype[t] = function (r, n) {
            return this.request(Ie(n || {}, {
                method: t,
                url: r,
                data: (n || {}).data
            }));
        };
    });
    h.forEach(["post", "put", "patch"], function (t) {
        function r(n) {
            return function (o, i, a) {
                return this.request(Ie(a || {}, {
                    method: t,
                    headers: n ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: o,
                    data: i
                }));
            };
        }

        ye.prototype[t] = r(), ye.prototype[t + "Form"] = r(!0);
    });

    class wt {
        constructor(t) {
            if (typeof t != "function")
                throw new TypeError("executor must be a function.");
            let r;
            this.promise = new Promise(function (o) {
                r = o;
            });
            const n = this;
            this.promise.then((s) => {
                if (!n._listeners) return;
                let o = n._listeners.length;
                for (; o-- > 0;)
                    n._listeners[o](s);
                n._listeners = null;
            }), this.promise.then = (s) => {
                let o;
                const i = new Promise((a) => {
                    n.subscribe(a), o = a;
                }).then(s);
                return i.cancel = function () {
                    n.unsubscribe(o);
                }, i;
            }, t(function (o, i, a) {
                n.reason || (n.reason = new Oe(o, i, a), r(n.reason));
            });
        }

        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
            if (this.reason)
                throw this.reason;
        }

        /**
         * Subscribe to the cancel signal
         */
        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return;
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t];
        }

        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(t) {
            if (!this._listeners)
                return;
            const r = this._listeners.indexOf(t);
            r !== -1 && this._listeners.splice(r, 1);
        }

        toAbortSignal() {
            const t = new AbortController(), r = (n) => {
                t.abort(n);
            };
            return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
        }

        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
            let t;
            return {
                token: new wt(function (s) {
                    t = s;
                }),
                cancel: t
            };
        }
    }

    function Ts(e) {
        return function (r) {
            return e.apply(null, r);
        };
    }

    function Os(e) {
        return h.isObject(e) && e.isAxiosError === !0;
    }

    const gt = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(gt).forEach(([e, t]) => {
        gt[t] = e;
    });

    function wr(e) {
        const t = new ye(e), r = tr(ye.prototype.request, t);
        return h.extend(r, ye.prototype, t, {allOwnKeys: !0}), h.extend(r, t, null, {allOwnKeys: !0}), r.create = function (s) {
            return wr(Ie(e, s));
        }, r;
    }

    const Y = wr(Le);
    Y.Axios = ye;
    Y.CanceledError = Oe;
    Y.CancelToken = wt;
    Y.isCancel = gr;
    Y.VERSION = vr;
    Y.toFormData = Xe;
    Y.AxiosError = M;
    Y.Cancel = Y.CanceledError;
    Y.all = function (t) {
        return Promise.all(t);
    };
    Y.spread = Ts;
    Y.isAxiosError = Os;
    Y.mergeConfig = Ie;
    Y.AxiosHeaders = ce;
    Y.formToJSON = (e) => mr(h.isHTMLForm(e) ? new FormData(e) : e);
    Y.getAdapter = Ar.getAdapter;
    Y.HttpStatusCode = gt;
    Y.default = Y;
    const Gt = window.base_url, at = {
        ip: `${Gt}/?nicen_replay_getip=1`,
        event: `${Gt}/?nicen_replay_event=1`
    };
    var ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Es(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }

    var Rr = {exports: {}};
    (function (e, t) {
        (function (r, n) {
            e.exports = n();
        })(ks, function () {
            var r = 1e3, n = 6e4, s = 36e5, o = "millisecond", i = "second", a = "minute", l = "hour", c = "day",
                u = "week", d = "month", p = "quarter", m = "year", f = "date", g = "Invalid Date",
                y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function (w) {
                        var b = ["th", "st", "nd", "rd"], S = w % 100;
                        return "[" + w + (b[(S - 20) % 10] || b[S] || b[0]) + "]";
                    }
                }, C = function (w, b, S) {
                    var R = String(w);
                    return !R || R.length >= b ? w : "" + Array(b + 1 - R.length).join(S) + w;
                }, N = {
                    s: C, z: function (w) {
                        var b = -w.utcOffset(), S = Math.abs(b), R = Math.floor(S / 60), A = S % 60;
                        return (b <= 0 ? "+" : "-") + C(R, 2, "0") + ":" + C(A, 2, "0");
                    }, m: function w(b, S) {
                        if (b.date() < S.date()) return -w(S, b);
                        var R = 12 * (S.year() - b.year()) + (S.month() - b.month()), A = b.clone().add(R, d),
                            T = S - A < 0, O = b.clone().add(R + (T ? -1 : 1), d);
                        return +(-(R + (S - A) / (T ? A - O : O - A)) || 0);
                    }, a: function (w) {
                        return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
                    }, p: function (w) {
                        return {
                            M: d,
                            y: m,
                            w: u,
                            d: c,
                            D: f,
                            h: l,
                            m: a,
                            s: i,
                            ms: o,
                            Q: p
                        }[w] || String(w || "").toLowerCase().replace(/s$/, "");
                    }, u: function (w) {
                        return w === void 0;
                    }
                }, D = "en", B = {};
            B[D] = I;
            var Z = "$isDayjsObject", L = function (w) {
                return w instanceof re || !(!w || !w[Z]);
            }, J = function w(b, S, R) {
                var A;
                if (!b) return D;
                if (typeof b == "string") {
                    var T = b.toLowerCase();
                    B[T] && (A = T), S && (B[T] = S, A = T);
                    var O = b.split("-");
                    if (!A && O.length > 1) return w(O[0]);
                } else {
                    var _ = b.name;
                    B[_] = b, A = _;
                }
                return !R && A && (D = A), A || !R && D;
            }, W = function (w, b) {
                if (L(w)) return w.clone();
                var S = typeof b == "object" ? b : {};
                return S.date = w, S.args = arguments, new re(S);
            }, F = N;
            F.l = J, F.i = L, F.w = function (w, b) {
                return W(w, {locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset});
            };
            var re = function () {
                function w(S) {
                    this.$L = J(S.locale, null, !0), this.parse(S), this.$x = this.$x || S.x || {}, this[Z] = !0;
                }

                var b = w.prototype;
                return b.parse = function (S) {
                    this.$d = function (R) {
                        var A = R.date, T = R.utc;
                        if (A === null) return /* @__PURE__ */ new Date(NaN);
                        if (F.u(A)) return /* @__PURE__ */ new Date();
                        if (A instanceof Date) return new Date(A);
                        if (typeof A == "string" && !/Z$/i.test(A)) {
                            var O = A.match(y);
                            if (O) {
                                var _ = O[2] - 1 || 0, E = (O[7] || "0").substring(0, 3);
                                return T ? new Date(Date.UTC(O[1], _, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, E)) : new Date(O[1], _, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, E);
                            }
                        }
                        return new Date(A);
                    }(S), this.init();
                }, b.init = function () {
                    var S = this.$d;
                    this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
                }, b.$utils = function () {
                    return F;
                }, b.isValid = function () {
                    return this.$d.toString() !== g;
                }, b.isSame = function (S, R) {
                    var A = W(S);
                    return this.startOf(R) <= A && A <= this.endOf(R);
                }, b.isAfter = function (S, R) {
                    return W(S) < this.startOf(R);
                }, b.isBefore = function (S, R) {
                    return this.endOf(R) < W(S);
                }, b.$g = function (S, R, A) {
                    return F.u(S) ? this[R] : this.set(A, S);
                }, b.unix = function () {
                    return Math.floor(this.valueOf() / 1e3);
                }, b.valueOf = function () {
                    return this.$d.getTime();
                }, b.startOf = function (S, R) {
                    var A = this, T = !!F.u(R) || R, O = F.p(S), _ = function (V, H) {
                        var x = F.w(A.$u ? Date.UTC(A.$y, H, V) : new Date(A.$y, H, V), A);
                        return T ? x : x.endOf(c);
                    }, E = function (V, H) {
                        return F.w(A.toDate()[V].apply(A.toDate("s"), (T ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(H)), A);
                    }, G = this.$W, K = this.$M, X = this.$D, k = "set" + (this.$u ? "UTC" : "");
                    switch (O) {
                        case m:
                            return T ? _(1, 0) : _(31, 11);
                        case d:
                            return T ? _(1, K) : _(0, K + 1);
                        case u:
                            var z = this.$locale().weekStart || 0, $ = (G < z ? G + 7 : G) - z;
                            return _(T ? X - $ : X + (6 - $), K);
                        case c:
                        case f:
                            return E(k + "Hours", 0);
                        case l:
                            return E(k + "Minutes", 1);
                        case a:
                            return E(k + "Seconds", 2);
                        case i:
                            return E(k + "Milliseconds", 3);
                        default:
                            return this.clone();
                    }
                }, b.endOf = function (S) {
                    return this.startOf(S, !1);
                }, b.$set = function (S, R) {
                    var A, T = F.p(S), O = "set" + (this.$u ? "UTC" : ""),
                        _ = (A = {}, A[c] = O + "Date", A[f] = O + "Date", A[d] = O + "Month", A[m] = O + "FullYear", A[l] = O + "Hours", A[a] = O + "Minutes", A[i] = O + "Seconds", A[o] = O + "Milliseconds", A)[T],
                        E = T === c ? this.$D + (R - this.$W) : R;
                    if (T === d || T === m) {
                        var G = this.clone().set(f, 1);
                        G.$d[_](E), G.init(), this.$d = G.set(f, Math.min(this.$D, G.daysInMonth())).$d;
                    } else _ && this.$d[_](E);
                    return this.init(), this;
                }, b.set = function (S, R) {
                    return this.clone().$set(S, R);
                }, b.get = function (S) {
                    return this[F.p(S)]();
                }, b.add = function (S, R) {
                    var A, T = this;
                    S = Number(S);
                    var O = F.p(R), _ = function (K) {
                        var X = W(T);
                        return F.w(X.date(X.date() + Math.round(K * S)), T);
                    };
                    if (O === d) return this.set(d, this.$M + S);
                    if (O === m) return this.set(m, this.$y + S);
                    if (O === c) return _(1);
                    if (O === u) return _(7);
                    var E = (A = {}, A[a] = n, A[l] = s, A[i] = r, A)[O] || 1, G = this.$d.getTime() + S * E;
                    return F.w(G, this);
                }, b.subtract = function (S, R) {
                    return this.add(-1 * S, R);
                }, b.format = function (S) {
                    var R = this, A = this.$locale();
                    if (!this.isValid()) return A.invalidDate || g;
                    var T = S || "YYYY-MM-DDTHH:mm:ssZ", O = F.z(this), _ = this.$H, E = this.$m, G = this.$M,
                        K = A.weekdays, X = A.months, k = A.meridiem, z = function (H, x, Q, fe) {
                            return H && (H[x] || H(R, T)) || Q[x].slice(0, fe);
                        }, $ = function (H) {
                            return F.s(_ % 12 || 12, H, "0");
                        }, V = k || function (H, x, Q) {
                            var fe = H < 12 ? "AM" : "PM";
                            return Q ? fe.toLowerCase() : fe;
                        };
                    return T.replace(v, function (H, x) {
                        return x || function (Q) {
                            switch (Q) {
                                case "YY":
                                    return String(R.$y).slice(-2);
                                case "YYYY":
                                    return F.s(R.$y, 4, "0");
                                case "M":
                                    return G + 1;
                                case "MM":
                                    return F.s(G + 1, 2, "0");
                                case "MMM":
                                    return z(A.monthsShort, G, X, 3);
                                case "MMMM":
                                    return z(X, G);
                                case "D":
                                    return R.$D;
                                case "DD":
                                    return F.s(R.$D, 2, "0");
                                case "d":
                                    return String(R.$W);
                                case "dd":
                                    return z(A.weekdaysMin, R.$W, K, 2);
                                case "ddd":
                                    return z(A.weekdaysShort, R.$W, K, 3);
                                case "dddd":
                                    return K[R.$W];
                                case "H":
                                    return String(_);
                                case "HH":
                                    return F.s(_, 2, "0");
                                case "h":
                                    return $(1);
                                case "hh":
                                    return $(2);
                                case "a":
                                    return V(_, E, !0);
                                case "A":
                                    return V(_, E, !1);
                                case "m":
                                    return String(E);
                                case "mm":
                                    return F.s(E, 2, "0");
                                case "s":
                                    return String(R.$s);
                                case "ss":
                                    return F.s(R.$s, 2, "0");
                                case "SSS":
                                    return F.s(R.$ms, 3, "0");
                                case "Z":
                                    return O;
                            }
                            return null;
                        }(H) || O.replace(":", "");
                    });
                }, b.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }, b.diff = function (S, R, A) {
                    var T, O = this, _ = F.p(R), E = W(S), G = (E.utcOffset() - this.utcOffset()) * n, K = this - E,
                        X = function () {
                            return F.m(O, E);
                        };
                    switch (_) {
                        case m:
                            T = X() / 12;
                            break;
                        case d:
                            T = X();
                            break;
                        case p:
                            T = X() / 3;
                            break;
                        case u:
                            T = (K - G) / 6048e5;
                            break;
                        case c:
                            T = (K - G) / 864e5;
                            break;
                        case l:
                            T = K / s;
                            break;
                        case a:
                            T = K / n;
                            break;
                        case i:
                            T = K / r;
                            break;
                        default:
                            T = K;
                    }
                    return A ? T : F.a(T);
                }, b.daysInMonth = function () {
                    return this.endOf(d).$D;
                }, b.$locale = function () {
                    return B[this.$L];
                }, b.locale = function (S, R) {
                    if (!S) return this.$L;
                    var A = this.clone(), T = J(S, R, !0);
                    return T && (A.$L = T), A;
                }, b.clone = function () {
                    return F.w(this.$d, this);
                }, b.toDate = function () {
                    return new Date(this.valueOf());
                }, b.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null;
                }, b.toISOString = function () {
                    return this.$d.toISOString();
                }, b.toString = function () {
                    return this.$d.toUTCString();
                }, w;
            }(), ne = re.prototype;
            return W.prototype = ne, [["$ms", o], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", d], ["$y", m], ["$D", f]].forEach(function (w) {
                ne[w[1]] = function (b) {
                    return this.$g(b, w[0], w[1]);
                };
            }), W.extend = function (w, b) {
                return w.$i || (w(b, re, W), w.$i = !0), W;
            }, W.locale = J, W.isDayjs = L, W.unix = function (w) {
                return W(1e3 * w);
            }, W.en = B[D], W.Ls = B, W.p = {}, W;
        });
    })(Rr);
    var Ms = Rr.exports;
    const Ns = /* @__PURE__ */ Es(Ms);

    function Fs(e) {
        return new Promise((t) => setTimeout(t, e));
    }

    var te;
    (function (e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment";
    })(te || (te = {}));

    function xs(e) {
        return e.nodeType === e.ELEMENT_NODE;
    }

    function Ee(e) {
        var t = e == null ? void 0 : e.host;
        return (t == null ? void 0 : t.shadowRoot) === e;
    }

    function Me(e) {
        return Object.prototype.toString.call(e) === "[object ShadowRoot]";
    }

    function Ds(e) {
        return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), e;
    }

    function yt(e) {
        try {
            var t = e.rules || e.cssRules;
            return t ? Ds(Array.from(t).map(Tr).join("")) : null;
        } catch {
            return null;
        }
    }

    function Tr(e) {
        var t = e.cssText;
        if (Ls(e))
            try {
                t = yt(e.styleSheet) || t;
            } catch {
            }
        return t;
    }

    function Ls(e) {
        return "styleSheet" in e;
    }

    var Or = function () {
        function e() {
            this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
        }

        return e.prototype.getId = function (t) {
            var r;
            if (!t)
                return -1;
            var n = (r = this.getMeta(t)) === null || r === void 0 ? void 0 : r.id;
            return n ?? -1;
        }, e.prototype.getNode = function (t) {
            return this.idNodeMap.get(t) || null;
        }, e.prototype.getIds = function () {
            return Array.from(this.idNodeMap.keys());
        }, e.prototype.getMeta = function (t) {
            return this.nodeMetaMap.get(t) || null;
        }, e.prototype.removeNodeFromMap = function (t) {
            var r = this, n = this.getId(t);
            this.idNodeMap.delete(n), t.childNodes && t.childNodes.forEach(function (s) {
                return r.removeNodeFromMap(s);
            });
        }, e.prototype.has = function (t) {
            return this.idNodeMap.has(t);
        }, e.prototype.hasNode = function (t) {
            return this.nodeMetaMap.has(t);
        }, e.prototype.add = function (t, r) {
            var n = r.id;
            this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, r);
        }, e.prototype.replace = function (t, r) {
            var n = this.getNode(t);
            if (n) {
                var s = this.nodeMetaMap.get(n);
                s && this.nodeMetaMap.set(r, s);
            }
            this.idNodeMap.set(t, r);
        }, e.prototype.reset = function () {
            this.idNodeMap = /* @__PURE__ */ new Map(), this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
        }, e;
    }();

    function _s() {
        return new Or();
    }

    function Rt(e) {
        var t = e.maskInputOptions, r = e.tagName, n = e.type, s = e.value, o = e.maskInputFn, i = s || "";
        return (t[r.toLowerCase()] || t[n]) && (o ? i = o(i) : i = "*".repeat(i.length)), i;
    }

    var Vt = "__rrweb_original__";

    function Bs(e) {
        var t = e.getContext("2d");
        if (!t)
            return !0;
        for (var r = 50, n = 0; n < e.width; n += r)
            for (var s = 0; s < e.height; s += r) {
                var o = t.getImageData, i = Vt in o ? o[Vt] : o,
                    a = new Uint32Array(i.call(t, n, s, Math.min(r, e.width - n), Math.min(r, e.height - s)).data.buffer);
                if (a.some(function (l) {
                    return l !== 0;
                }))
                    return !1;
            }
        return !0;
    }

    var Us = 1, Ws = new RegExp("[^a-z0-9-_:]"), Fe = -2;

    function kr() {
        return Us++;
    }

    function Ps(e) {
        if (e instanceof HTMLFormElement)
            return "form";
        var t = e.tagName.toLowerCase().trim();
        return Ws.test(t) ? "div" : t;
    }

    function Gs(e) {
        return e.cssRules ? Array.from(e.cssRules).map(function (t) {
            return t.cssText || "";
        }).join("") : "";
    }

    function Vs(e) {
        var t = "";
        return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0], t = t.split("?")[0], t;
    }

    var Ce, Zt, Zs = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        Hs = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/, Ks = /^(data:)([^,]*),(.*)/i;

    function je(e, t) {
        return (e || "").replace(Zs, function (r, n, s, o, i, a) {
            var l = s || i || a, c = n || o || "";
            if (!l)
                return r;
            if (!Hs.test(l) || Ks.test(l))
                return "url(".concat(c).concat(l).concat(c, ")");
            if (l[0] === "/")
                return "url(".concat(c).concat(Vs(t) + l).concat(c, ")");
            var u = t.split("/"), d = l.split("/");
            u.pop();
            for (var p = 0, m = d; p < m.length; p++) {
                var f = m[p];
                f !== "." && (f === ".." ? u.pop() : u.push(f));
            }
            return "url(".concat(c).concat(u.join("/")).concat(c, ")");
        });
    }

    var js = /^[^ \t\n\r\u000c]+/, zs = /^[, \t\n\r\u000c]+/;

    function Js(e, t) {
        if (t.trim() === "")
            return t;
        var r = 0;

        function n(c) {
            var u, d = c.exec(t.substring(r));
            return d ? (u = d[0], r += u.length, u) : "";
        }

        for (var s = []; n(zs), !(r >= t.length);) {
            var o = n(js);
            if (o.slice(-1) === ",")
                o = be(e, o.substring(0, o.length - 1)), s.push(o);
            else {
                var i = "";
                o = be(e, o);
                for (var a = !1; ;) {
                    var l = t.charAt(r);
                    if (l === "") {
                        s.push((o + i).trim());
                        break;
                    } else if (a)
                        l === ")" && (a = !1);
                    else if (l === ",") {
                        r += 1, s.push((o + i).trim());
                        break;
                    } else l === "(" && (a = !0);
                    i += l, r += 1;
                }
            }
        }
        return s.join(", ");
    }

    function be(e, t) {
        if (!t || t.trim() === "")
            return t;
        var r = e.createElement("a");
        return r.href = t, r.href;
    }

    function qs(e) {
        return !!(e.tagName === "svg" || e.ownerSVGElement);
    }

    function Tt() {
        var e = document.createElement("a");
        return e.href = "", e.href;
    }

    function Er(e, t, r, n) {
        return r === "src" || r === "href" && n && !(t === "use" && n[0] === "#") || r === "xlink:href" && n && n[0] !== "#" || r === "background" && n && (t === "table" || t === "td" || t === "th") ? be(e, n) : r === "srcset" && n ? Js(e, n) : r === "style" && n ? je(n, Tt()) : t === "object" && r === "data" && n ? be(e, n) : n;
    }

    function Ys(e, t, r) {
        if (typeof t == "string") {
            if (e.classList.contains(t))
                return !0;
        } else
            for (var n = e.classList.length; n--;) {
                var s = e.classList[n];
                if (t.test(s))
                    return !0;
            }
        return r ? e.matches(r) : !1;
    }

    function ze(e, t, r) {
        if (!e)
            return !1;
        if (e.nodeType !== e.ELEMENT_NODE)
            return r ? ze(e.parentNode, t, r) : !1;
        for (var n = e.classList.length; n--;) {
            var s = e.classList[n];
            if (t.test(s))
                return !0;
        }
        return r ? ze(e.parentNode, t, r) : !1;
    }

    function Mr(e, t, r) {
        var n = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (n === null)
            return !1;
        if (typeof t == "string") {
            if (n.classList.contains(t) || n.closest(".".concat(t)))
                return !0;
        } else if (ze(n, t, !0))
            return !0;
        return !!(r && (n.matches(r) || n.closest(r)));
    }

    function $s(e, t, r) {
        var n = e.contentWindow;
        if (n) {
            var s = !1, o;
            try {
                o = n.document.readyState;
            } catch {
                return;
            }
            if (o !== "complete") {
                var i = setTimeout(function () {
                    s || (t(), s = !0);
                }, r);
                e.addEventListener("load", function () {
                    clearTimeout(i), s = !0, t();
                });
                return;
            }
            var a = "about:blank";
            if (n.location.href !== a || e.src === a || e.src === "")
                return setTimeout(t, 0), e.addEventListener("load", t);
            e.addEventListener("load", t);
        }
    }

    function Qs(e, t, r) {
        var n = !1, s;
        try {
            s = e.sheet;
        } catch {
            return;
        }
        if (!s) {
            var o = setTimeout(function () {
                n || (t(), n = !0);
            }, r);
            e.addEventListener("load", function () {
                clearTimeout(o), n = !0, t();
            });
        }
    }

    function Xs(e, t) {
        var r = t.doc, n = t.mirror, s = t.blockClass, o = t.blockSelector, i = t.maskTextClass, a = t.maskTextSelector,
            l = t.inlineStylesheet, c = t.maskInputOptions, u = c === void 0 ? {} : c, d = t.maskTextFn,
            p = t.maskInputFn, m = t.dataURLOptions, f = m === void 0 ? {} : m, g = t.inlineImages, y = t.recordCanvas,
            v = t.keepIframeSrcFn, I = t.newlyAddedElement, C = I === void 0 ? !1 : I, N = eo(r, n);
        switch (e.nodeType) {
            case e.DOCUMENT_NODE:
                return e.compatMode !== "CSS1Compat" ? {
                    type: te.Document,
                    childNodes: [],
                    compatMode: e.compatMode
                } : {
                    type: te.Document,
                    childNodes: []
                };
            case e.DOCUMENT_TYPE_NODE:
                return {
                    type: te.DocumentType,
                    name: e.name,
                    publicId: e.publicId,
                    systemId: e.systemId,
                    rootId: N
                };
            case e.ELEMENT_NODE:
                return ro(e, {
                    doc: r,
                    blockClass: s,
                    blockSelector: o,
                    inlineStylesheet: l,
                    maskInputOptions: u,
                    maskInputFn: p,
                    dataURLOptions: f,
                    inlineImages: g,
                    recordCanvas: y,
                    keepIframeSrcFn: v,
                    newlyAddedElement: C,
                    rootId: N
                });
            case e.TEXT_NODE:
                return to(e, {
                    maskTextClass: i,
                    maskTextSelector: a,
                    maskTextFn: d,
                    rootId: N
                });
            case e.CDATA_SECTION_NODE:
                return {
                    type: te.CDATA,
                    textContent: "",
                    rootId: N
                };
            case e.COMMENT_NODE:
                return {
                    type: te.Comment,
                    textContent: e.textContent || "",
                    rootId: N
                };
            default:
                return !1;
        }
    }

    function eo(e, t) {
        if (t.hasNode(e)) {
            var r = t.getId(e);
            return r === 1 ? void 0 : r;
        }
    }

    function to(e, t) {
        var r, n = t.maskTextClass, s = t.maskTextSelector, o = t.maskTextFn, i = t.rootId,
            a = e.parentNode && e.parentNode.tagName, l = e.textContent, c = a === "STYLE" ? !0 : void 0,
            u = a === "SCRIPT" ? !0 : void 0;
        if (c && l) {
            try {
                e.nextSibling || e.previousSibling || !((r = e.parentNode.sheet) === null || r === void 0) && r.cssRules && (l = Gs(e.parentNode.sheet));
            } catch (d) {
                console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(d), e);
            }
            l = je(l, Tt());
        }
        return u && (l = "SCRIPT_PLACEHOLDER"), !c && !u && l && Mr(e, n, s) && (l = o ? o(l) : l.replace(/[\S]/g, "*")), {
            type: te.Text,
            textContent: l || "",
            isStyle: c,
            rootId: i
        };
    }

    function ro(e, t) {
        for (var r = t.doc, n = t.blockClass, s = t.blockSelector, o = t.inlineStylesheet, i = t.maskInputOptions, a = i === void 0 ? {} : i, l = t.maskInputFn, c = t.dataURLOptions, u = c === void 0 ? {} : c, d = t.inlineImages, p = t.recordCanvas, m = t.keepIframeSrcFn, f = t.newlyAddedElement, g = f === void 0 ? !1 : f, y = t.rootId, v = Ys(e, n, s), I = Ps(e), C = {}, N = e.attributes.length, D = 0; D < N; D++) {
            var B = e.attributes[D];
            C[B.name] = Er(r, I, B.name, B.value);
        }
        if (I === "link" && o) {
            var Z = Array.from(r.styleSheets).find(function (O) {
                return O.href === e.href;
            }), L = null;
            Z && (L = yt(Z)), L && (delete C.rel, delete C.href, C._cssText = je(L, Z.href));
        }
        if (I === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
            var L = yt(e.sheet);
            L && (C._cssText = je(L, Tt()));
        }
        if (I === "input" || I === "textarea" || I === "select") {
            var J = e.value, W = e.checked;
            C.type !== "radio" && C.type !== "checkbox" && C.type !== "submit" && C.type !== "button" && J ? C.value = Rt({
                type: C.type,
                tagName: I,
                value: J,
                maskInputOptions: a,
                maskInputFn: l
            }) : W && (C.checked = W);
        }
        if (I === "option" && (e.selected && !a.select ? C.selected = !0 : delete C.selected), I === "canvas" && p) {
            if (e.__context === "2d")
                Bs(e) || (C.rr_dataURL = e.toDataURL(u.type, u.quality));
            else if (!("__context" in e)) {
                var F = e.toDataURL(u.type, u.quality), re = document.createElement("canvas");
                re.width = e.width, re.height = e.height;
                var ne = re.toDataURL(u.type, u.quality);
                F !== ne && (C.rr_dataURL = F);
            }
        }
        if (I === "img" && d) {
            Ce || (Ce = r.createElement("canvas"), Zt = Ce.getContext("2d"));
            var w = e, b = w.crossOrigin;
            w.crossOrigin = "anonymous";
            var S = function () {
                try {
                    Ce.width = w.naturalWidth, Ce.height = w.naturalHeight, Zt.drawImage(w, 0, 0), C.rr_dataURL = Ce.toDataURL(u.type, u.quality);
                } catch (O) {
                    console.warn("Cannot inline img src=".concat(w.currentSrc, "! Error: ").concat(O));
                }
                b ? C.crossOrigin = b : w.removeAttribute("crossorigin");
            };
            w.complete && w.naturalWidth !== 0 ? S() : w.onload = S;
        }
        if ((I === "audio" || I === "video") && (C.rr_mediaState = e.paused ? "paused" : "played", C.rr_mediaCurrentTime = e.currentTime), g || (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft), e.scrollTop && (C.rr_scrollTop = e.scrollTop)), v) {
            var R = e.getBoundingClientRect(), A = R.width, T = R.height;
            C = {
                class: C.class,
                rr_width: "".concat(A, "px"),
                rr_height: "".concat(T, "px")
            };
        }
        return I === "iframe" && !m(C.src) && (e.contentDocument || (C.rr_src = C.src), delete C.src), {
            type: te.Element,
            tagName: I,
            attributes: C,
            childNodes: [],
            isSVG: qs(e) || void 0,
            needBlock: v,
            rootId: y
        };
    }

    function j(e) {
        return e === void 0 ? "" : e.toLowerCase();
    }

    function no(e, t) {
        if (t.comment && e.type === te.Comment)
            return !0;
        if (e.type === te.Element) {
            if (t.script && (e.tagName === "script" || e.tagName === "link" && e.attributes.rel === "preload" && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && e.attributes.href.endsWith(".js")))
                return !0;
            if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (j(e.attributes.name).match(/^msapplication-tile(image|color)$/) || j(e.attributes.name) === "application-name" || j(e.attributes.rel) === "icon" || j(e.attributes.rel) === "apple-touch-icon" || j(e.attributes.rel) === "shortcut icon")))
                return !0;
            if (e.tagName === "meta") {
                if (t.headMetaDescKeywords && j(e.attributes.name).match(/^description|keywords$/))
                    return !0;
                if (t.headMetaSocial && (j(e.attributes.property).match(/^(og|twitter|fb):/) || j(e.attributes.name).match(/^(og|twitter):/) || j(e.attributes.name) === "pinterest"))
                    return !0;
                if (t.headMetaRobots && (j(e.attributes.name) === "robots" || j(e.attributes.name) === "googlebot" || j(e.attributes.name) === "bingbot"))
                    return !0;
                if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
                    return !0;
                if (t.headMetaAuthorship && (j(e.attributes.name) === "author" || j(e.attributes.name) === "generator" || j(e.attributes.name) === "framework" || j(e.attributes.name) === "publisher" || j(e.attributes.name) === "progid" || j(e.attributes.property).match(/^article:/) || j(e.attributes.property).match(/^product:/)))
                    return !0;
                if (t.headMetaVerification && (j(e.attributes.name) === "google-site-verification" || j(e.attributes.name) === "yandex-verification" || j(e.attributes.name) === "csrf-token" || j(e.attributes.name) === "p:domain_verify" || j(e.attributes.name) === "verify-v1" || j(e.attributes.name) === "verification" || j(e.attributes.name) === "shopify-checkout-api-token"))
                    return !0;
            }
        }
        return !1;
    }

    function Ae(e, t) {
        var r = t.doc, n = t.mirror, s = t.blockClass, o = t.blockSelector, i = t.maskTextClass, a = t.maskTextSelector,
            l = t.skipChild, c = l === void 0 ? !1 : l, u = t.inlineStylesheet, d = u === void 0 ? !0 : u,
            p = t.maskInputOptions, m = p === void 0 ? {} : p, f = t.maskTextFn, g = t.maskInputFn,
            y = t.slimDOMOptions, v = t.dataURLOptions, I = v === void 0 ? {} : v, C = t.inlineImages,
            N = C === void 0 ? !1 : C, D = t.recordCanvas, B = D === void 0 ? !1 : D, Z = t.onSerialize,
            L = t.onIframeLoad, J = t.iframeLoadTimeout, W = J === void 0 ? 5e3 : J, F = t.onStylesheetLoad,
            re = t.stylesheetLoadTimeout, ne = re === void 0 ? 5e3 : re, w = t.keepIframeSrcFn,
            b = w === void 0 ? function () {
                return !1;
            } : w, S = t.newlyAddedElement, R = S === void 0 ? !1 : S, A = t.preserveWhiteSpace,
            T = A === void 0 ? !0 : A, O = Xs(e, {
                doc: r,
                mirror: n,
                blockClass: s,
                blockSelector: o,
                maskTextClass: i,
                maskTextSelector: a,
                inlineStylesheet: d,
                maskInputOptions: m,
                maskTextFn: f,
                maskInputFn: g,
                dataURLOptions: I,
                inlineImages: N,
                recordCanvas: B,
                keepIframeSrcFn: b,
                newlyAddedElement: R
            });
        if (!O)
            return console.warn(e, "not serialized"), null;
        var _;
        n.hasNode(e) ? _ = n.getId(e) : no(O, y) || !T && O.type === te.Text && !O.isStyle && !O.textContent.replace(/^\s+|\s+$/gm, "").length ? _ = Fe : _ = kr();
        var E = Object.assign(O, {id: _});
        if (n.add(e, E), _ === Fe)
            return null;
        Z && Z(e);
        var G = !c;
        if (E.type === te.Element) {
            G = G && !E.needBlock, delete E.needBlock;
            var K = e.shadowRoot;
            K && Me(K) && (E.isShadowHost = !0);
        }
        if ((E.type === te.Document || E.type === te.Element) && G) {
            y.headWhitespace && E.type === te.Element && E.tagName === "head" && (T = !1);
            for (var X = {
                doc: r,
                mirror: n,
                blockClass: s,
                blockSelector: o,
                maskTextClass: i,
                maskTextSelector: a,
                skipChild: c,
                inlineStylesheet: d,
                maskInputOptions: m,
                maskTextFn: f,
                maskInputFn: g,
                slimDOMOptions: y,
                dataURLOptions: I,
                inlineImages: N,
                recordCanvas: B,
                preserveWhiteSpace: T,
                onSerialize: Z,
                onIframeLoad: L,
                iframeLoadTimeout: W,
                onStylesheetLoad: F,
                stylesheetLoadTimeout: ne,
                keepIframeSrcFn: b
            }, k = 0, z = Array.from(e.childNodes); k < z.length; k++) {
                var $ = z[k], V = Ae($, X);
                V && E.childNodes.push(V);
            }
            if (xs(e) && e.shadowRoot)
                for (var H = 0, x = Array.from(e.shadowRoot.childNodes); H < x.length; H++) {
                    var $ = x[H], V = Ae($, X);
                    V && (Me(e.shadowRoot) && (V.isShadow = !0), E.childNodes.push(V));
                }
        }
        return e.parentNode && Ee(e.parentNode) && Me(e.parentNode) && (E.isShadow = !0), E.type === te.Element && E.tagName === "iframe" && $s(e, function () {
            var Q = e.contentDocument;
            if (Q && L) {
                var fe = Ae(Q, {
                    doc: Q,
                    mirror: n,
                    blockClass: s,
                    blockSelector: o,
                    maskTextClass: i,
                    maskTextSelector: a,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: m,
                    maskTextFn: f,
                    maskInputFn: g,
                    slimDOMOptions: y,
                    dataURLOptions: I,
                    inlineImages: N,
                    recordCanvas: B,
                    preserveWhiteSpace: T,
                    onSerialize: Z,
                    onIframeLoad: L,
                    iframeLoadTimeout: W,
                    onStylesheetLoad: F,
                    stylesheetLoadTimeout: ne,
                    keepIframeSrcFn: b
                });
                fe && L(e, fe);
            }
        }, W), E.type === te.Element && E.tagName === "link" && E.attributes.rel === "stylesheet" && Qs(e, function () {
            if (F) {
                var Q = Ae(e, {
                    doc: r,
                    mirror: n,
                    blockClass: s,
                    blockSelector: o,
                    maskTextClass: i,
                    maskTextSelector: a,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: m,
                    maskTextFn: f,
                    maskInputFn: g,
                    slimDOMOptions: y,
                    dataURLOptions: I,
                    inlineImages: N,
                    recordCanvas: B,
                    preserveWhiteSpace: T,
                    onSerialize: Z,
                    onIframeLoad: L,
                    iframeLoadTimeout: W,
                    onStylesheetLoad: F,
                    stylesheetLoadTimeout: ne,
                    keepIframeSrcFn: b
                });
                Q && F(e, Q);
            }
        }, ne), E;
    }

    function so(e, t) {
        var r = t || {}, n = r.mirror, s = n === void 0 ? new Or() : n, o = r.blockClass,
            i = o === void 0 ? "rr-block" : o, a = r.blockSelector, l = a === void 0 ? null : a, c = r.maskTextClass,
            u = c === void 0 ? "rr-mask" : c, d = r.maskTextSelector, p = d === void 0 ? null : d,
            m = r.inlineStylesheet, f = m === void 0 ? !0 : m, g = r.inlineImages, y = g === void 0 ? !1 : g,
            v = r.recordCanvas, I = v === void 0 ? !1 : v, C = r.maskAllInputs, N = C === void 0 ? !1 : C,
            D = r.maskTextFn, B = r.maskInputFn, Z = r.slimDOM, L = Z === void 0 ? !1 : Z, J = r.dataURLOptions,
            W = r.preserveWhiteSpace, F = r.onSerialize, re = r.onIframeLoad, ne = r.iframeLoadTimeout,
            w = r.onStylesheetLoad, b = r.stylesheetLoadTimeout, S = r.keepIframeSrcFn, R = S === void 0 ? function () {
                return !1;
            } : S, A = N === !0 ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                password: !0
            } : N === !1 ? {
                password: !0
            } : N, T = L === !0 || L === "all" ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaDescKeywords: L === "all",
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaAuthorship: !0,
                headMetaVerification: !0
            } : L === !1 ? {} : L;
        return Ae(e, {
            doc: e,
            mirror: s,
            blockClass: i,
            blockSelector: l,
            maskTextClass: u,
            maskTextSelector: p,
            skipChild: !1,
            inlineStylesheet: f,
            maskInputOptions: A,
            maskTextFn: D,
            maskInputFn: B,
            slimDOMOptions: T,
            dataURLOptions: J,
            inlineImages: y,
            recordCanvas: I,
            preserveWhiteSpace: W,
            onSerialize: F,
            onIframeLoad: re,
            iframeLoadTimeout: ne,
            onStylesheetLoad: w,
            stylesheetLoadTimeout: b,
            keepIframeSrcFn: R,
            newlyAddedElement: !1
        });
    }

    function oe(e, t, r = document) {
        const n = {capture: !0, passive: !0};
        return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
    }

    const Se = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
    let Ht = {
        map: {},
        getId() {
            return console.error(Se), -1;
        },
        getNode() {
            return console.error(Se), null;
        },
        removeNodeFromMap() {
            console.error(Se);
        },
        has() {
            return console.error(Se), !1;
        },
        reset() {
            console.error(Se);
        }
    };
    typeof window < "u" && window.Proxy && window.Reflect && (Ht = new Proxy(Ht, {
        get(e, t, r) {
            return t === "map" && console.error(Se), Reflect.get(e, t, r);
        }
    }));

    function xe(e, t, r = {}) {
        let n = null, s = 0;
        return function (...o) {
            const i = Date.now();
            !s && r.leading === !1 && (s = i);
            const a = t - (i - s), l = this;
            a <= 0 || a > t ? (n && (clearTimeout(n), n = null), s = i, e.apply(l, o)) : !n && r.trailing !== !1 && (n = setTimeout(() => {
                s = r.leading === !1 ? 0 : Date.now(), n = null, e.apply(l, o);
            }, a));
        };
    }

    function tt(e, t, r, n, s = window) {
        const o = s.Object.getOwnPropertyDescriptor(e, t);
        return s.Object.defineProperty(e, t, n ? r : {
            set(i) {
                setTimeout(() => {
                    r.set.call(this, i);
                }, 0), o && o.set && o.set.call(this, i);
            }
        }), () => tt(e, t, o || {}, !0);
    }

    function we(e, t, r) {
        try {
            if (!(t in e))
                return () => {
                };
            const n = e[t], s = r(n);
            return typeof s == "function" && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: n
                }
            })), e[t] = s, () => {
                e[t] = n;
            };
        } catch {
            return () => {
            };
        }
    }

    function Nr() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
    }

    function Fr() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
    }

    function ie(e, t, r, n) {
        if (!e)
            return !1;
        const s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (!s)
            return !1;
        if (typeof t == "string") {
            if (s.classList.contains(t) || n && s.closest("." + t) !== null)
                return !0;
        } else if (ze(s, t, n))
            return !0;
        return !!(r && (e.matches(r) || n && s.closest(r) !== null));
    }

    function oo(e, t) {
        return t.getId(e) !== -1;
    }

    function ct(e, t) {
        return t.getId(e) === Fe;
    }

    function xr(e, t) {
        if (Ee(e))
            return !1;
        const r = t.getId(e);
        return t.has(r) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? xr(e.parentNode, t) : !0 : !0;
    }

    function Dr(e) {
        return !!e.changedTouches;
    }

    function io(e = window) {
        "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...t) => {
            let r = t[0];
            if (!(0 in t))
                throw new TypeError("1 argument is required");
            do
                if (this === r)
                    return !0;
            while (r = r && r.parentNode);
            return !1;
        });
    }

    function Lr(e, t) {
        return !!(e.nodeName === "IFRAME" && t.getMeta(e));
    }

    function _r(e, t) {
        return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e));
    }

    function Br(e) {
        return !!(e != null && e.shadowRoot);
    }

    class ao {
        constructor() {
            this.id = 1, this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map();
        }

        getId(t) {
            var r;
            return (r = this.styleIDMap.get(t)) !== null && r !== void 0 ? r : -1;
        }

        has(t) {
            return this.styleIDMap.has(t);
        }

        add(t, r) {
            if (this.has(t))
                return this.getId(t);
            let n;
            return r === void 0 ? n = this.id++ : n = r, this.styleIDMap.set(t, n), this.idStyleMap.set(n, t), n;
        }

        getStyle(t) {
            return this.idStyleMap.get(t) || null;
        }

        reset() {
            this.styleIDMap = /* @__PURE__ */ new WeakMap(), this.idStyleMap = /* @__PURE__ */ new Map(), this.id = 1;
        }

        generateId() {
            return this.id++;
        }
    }

    var P = /* @__PURE__ */ ((e) => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(P || {}),
        U = /* @__PURE__ */ ((e) => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e))(U || {}),
        It = /* @__PURE__ */ ((e) => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(It || {}),
        Re = /* @__PURE__ */ ((e) => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(Re || {});

    function Kt(e) {
        return "__ln" in e;
    }

    class co {
        constructor() {
            this.length = 0, this.head = null;
        }

        get(t) {
            if (t >= this.length)
                throw new Error("Position outside of list range");
            let r = this.head;
            for (let n = 0; n < t; n++)
                r = (r == null ? void 0 : r.next) || null;
            return r;
        }

        addNode(t) {
            const r = {
                value: t,
                previous: null,
                next: null
            };
            if (t.__ln = r, t.previousSibling && Kt(t.previousSibling)) {
                const n = t.previousSibling.__ln.next;
                r.next = n, r.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = r, n && (n.previous = r);
            } else if (t.nextSibling && Kt(t.nextSibling) && t.nextSibling.__ln.previous) {
                const n = t.nextSibling.__ln.previous;
                r.previous = n, r.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = r, n && (n.next = r);
            } else
                this.head && (this.head.previous = r), r.next = this.head, this.head = r;
            this.length++;
        }

        removeNode(t) {
            const r = t.__ln;
            this.head && (r.previous ? (r.previous.next = r.next, r.next && (r.next.previous = r.previous)) : (this.head = r.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--);
        }
    }

    const jt = (e, t) => `${e}@${t}`;

    class lo {
        constructor() {
            this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.processMutations = (t) => {
                t.forEach(this.processMutation), this.emit();
            }, this.emit = () => {
                if (this.frozen || this.locked)
                    return;
                const t = [], r = new co(), n = (a) => {
                    let l = a, c = Fe;
                    for (; c === Fe;)
                        l = l && l.nextSibling, c = l && this.mirror.getId(l);
                    return c;
                }, s = (a) => {
                    var l, c, u, d;
                    let p = null;
                    ((c = (l = a.getRootNode) === null || l === void 0 ? void 0 : l.call(a)) === null || c === void 0 ? void 0 : c.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && a.getRootNode().host && (p = a.getRootNode().host);
                    let m = p;
                    for (; ((d = (u = m == null ? void 0 : m.getRootNode) === null || u === void 0 ? void 0 : u.call(m)) === null || d === void 0 ? void 0 : d.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && m.getRootNode().host;)
                        m = m.getRootNode().host;
                    const f = !this.doc.contains(a) && (!m || !this.doc.contains(m));
                    if (!a.parentNode || f)
                        return;
                    const g = Ee(a.parentNode) ? this.mirror.getId(p) : this.mirror.getId(a.parentNode), y = n(a);
                    if (g === -1 || y === -1)
                        return r.addNode(a);
                    const v = Ae(a, {
                        doc: this.doc,
                        mirror: this.mirror,
                        blockClass: this.blockClass,
                        blockSelector: this.blockSelector,
                        maskTextClass: this.maskTextClass,
                        maskTextSelector: this.maskTextSelector,
                        skipChild: !0,
                        newlyAddedElement: !0,
                        inlineStylesheet: this.inlineStylesheet,
                        maskInputOptions: this.maskInputOptions,
                        maskTextFn: this.maskTextFn,
                        maskInputFn: this.maskInputFn,
                        slimDOMOptions: this.slimDOMOptions,
                        dataURLOptions: this.dataURLOptions,
                        recordCanvas: this.recordCanvas,
                        inlineImages: this.inlineImages,
                        onSerialize: (I) => {
                            Lr(I, this.mirror) && this.iframeManager.addIframe(I), _r(I, this.mirror) && this.stylesheetManager.trackLinkElement(I), Br(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, this.doc);
                        },
                        onIframeLoad: (I, C) => {
                            this.iframeManager.attachIframe(I, C), this.shadowDomManager.observeAttachShadow(I);
                        },
                        onStylesheetLoad: (I, C) => {
                            this.stylesheetManager.attachLinkElement(I, C);
                        }
                    });
                    v && t.push({
                        parentId: g,
                        nextId: y,
                        node: v
                    });
                };
                for (; this.mapRemoves.length;)
                    this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (const a of Array.from(this.movedSet.values()))
                    zt(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || s(a);
                for (const a of Array.from(this.addedSet.values()))
                    !Jt(this.droppedSet, a) && !zt(this.removes, a, this.mirror) || Jt(this.movedSet, a) ? s(a) : this.droppedSet.add(a);
                let o = null;
                for (; r.length;) {
                    let a = null;
                    if (o) {
                        const l = this.mirror.getId(o.value.parentNode), c = n(o.value);
                        l !== -1 && c !== -1 && (a = o);
                    }
                    if (!a)
                        for (let l = r.length - 1; l >= 0; l--) {
                            const c = r.get(l);
                            if (c) {
                                const u = this.mirror.getId(c.value.parentNode);
                                if (n(c.value) === -1)
                                    continue;
                                if (u !== -1) {
                                    a = c;
                                    break;
                                } else {
                                    const p = c.value;
                                    if (p.parentNode && p.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                        const m = p.parentNode.host;
                                        if (this.mirror.getId(m) !== -1) {
                                            a = c;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    if (!a) {
                        for (; r.head;)
                            r.removeNode(r.head.value);
                        break;
                    }
                    o = a.previous, r.removeNode(a.value), s(a.value);
                }
                const i = {
                    texts: this.texts.map((a) => ({
                        id: this.mirror.getId(a.node),
                        value: a.value
                    })).filter((a) => this.mirror.has(a.id)),
                    attributes: this.attributes.map((a) => ({
                        id: this.mirror.getId(a.node),
                        attributes: a.attributes
                    })).filter((a) => this.mirror.has(a.id)),
                    removes: this.removes,
                    adds: t
                };
                !i.texts.length && !i.attributes.length && !i.removes.length && !i.adds.length || (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = /* @__PURE__ */ new Set(), this.movedSet = /* @__PURE__ */ new Set(), this.droppedSet = /* @__PURE__ */ new Set(), this.movedMap = {}, this.mutationCb(i));
            }, this.processMutation = (t) => {
                if (!ct(t.target, this.mirror))
                    switch (t.type) {
                        case "characterData": {
                            const r = t.target.textContent;
                            !ie(t.target, this.blockClass, this.blockSelector, !1) && r !== t.oldValue && this.texts.push({
                                value: Mr(t.target, this.maskTextClass, this.maskTextSelector) && r ? this.maskTextFn ? this.maskTextFn(r) : r.replace(/[\S]/g, "*") : r,
                                node: t.target
                            });
                            break;
                        }
                        case "attributes": {
                            const r = t.target;
                            let n = t.target.getAttribute(t.attributeName);
                            if (t.attributeName === "value" && (n = Rt({
                                maskInputOptions: this.maskInputOptions,
                                tagName: t.target.tagName,
                                type: t.target.getAttribute("type"),
                                value: n,
                                maskInputFn: this.maskInputFn
                            })), ie(t.target, this.blockClass, this.blockSelector, !1) || n === t.oldValue)
                                return;
                            let s = this.attributes.find((o) => o.node === t.target);
                            if (r.tagName === "IFRAME" && t.attributeName === "src" && !this.keepIframeSrcFn(n))
                                if (!r.contentDocument)
                                    t.attributeName = "rr_src";
                                else
                                    return;
                            if (s || (s = {
                                node: t.target,
                                attributes: {}
                            }, this.attributes.push(s)), t.attributeName === "style") {
                                const o = this.doc.createElement("span");
                                t.oldValue && o.setAttribute("style", t.oldValue), (s.attributes.style === void 0 || s.attributes.style === null) && (s.attributes.style = {});
                                const i = s.attributes.style;
                                for (const a of Array.from(r.style)) {
                                    const l = r.style.getPropertyValue(a), c = r.style.getPropertyPriority(a);
                                    (l !== o.style.getPropertyValue(a) || c !== o.style.getPropertyPriority(a)) && (c === "" ? i[a] = l : i[a] = [l, c]);
                                }
                                for (const a of Array.from(o.style))
                                    r.style.getPropertyValue(a) === "" && (i[a] = !1);
                            } else
                                s.attributes[t.attributeName] = Er(this.doc, r.tagName, t.attributeName, n);
                            break;
                        }
                        case "childList": {
                            if (ie(t.target, this.blockClass, this.blockSelector, !0))
                                return;
                            t.addedNodes.forEach((r) => this.genAdds(r, t.target)), t.removedNodes.forEach((r) => {
                                const n = this.mirror.getId(r),
                                    s = Ee(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                ie(t.target, this.blockClass, this.blockSelector, !1) || ct(r, this.mirror) || !oo(r, this.mirror) || (this.addedSet.has(r) ? (Ct(this.addedSet, r), this.droppedSet.add(r)) : this.addedSet.has(t.target) && n === -1 || xr(t.target, this.mirror) || (this.movedSet.has(r) && this.movedMap[jt(n, s)] ? Ct(this.movedSet, r) : this.removes.push({
                                    parentId: s,
                                    id: n,
                                    isShadow: Ee(t.target) && Me(t.target) ? !0 : void 0
                                })), this.mapRemoves.push(r));
                            });
                            break;
                        }
                    }
            }, this.genAdds = (t, r) => {
                if (this.mirror.hasNode(t)) {
                    if (ct(t, this.mirror))
                        return;
                    this.movedSet.add(t);
                    let n = null;
                    r && this.mirror.hasNode(r) && (n = this.mirror.getId(r)), n && n !== -1 && (this.movedMap[jt(this.mirror.getId(t), n)] = !0);
                } else
                    this.addedSet.add(t), this.droppedSet.delete(t);
                ie(t, this.blockClass, this.blockSelector, !1) || t.childNodes.forEach((n) => this.genAdds(n));
            };
        }

        init(t) {
            [
                "mutationCb",
                "blockClass",
                "blockSelector",
                "maskTextClass",
                "maskTextSelector",
                "inlineStylesheet",
                "maskInputOptions",
                "maskTextFn",
                "maskInputFn",
                "keepIframeSrcFn",
                "recordCanvas",
                "inlineImages",
                "slimDOMOptions",
                "dataURLOptions",
                "doc",
                "mirror",
                "iframeManager",
                "stylesheetManager",
                "shadowDomManager",
                "canvasManager"
            ].forEach((r) => {
                this[r] = t[r];
            });
        }

        freeze() {
            this.frozen = !0, this.canvasManager.freeze();
        }

        unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
        }

        isFrozen() {
            return this.frozen;
        }

        lock() {
            this.locked = !0, this.canvasManager.lock();
        }

        unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit();
        }

        reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset();
        }
    }

    function Ct(e, t) {
        e.delete(t), t.childNodes.forEach((r) => Ct(e, r));
    }

    function zt(e, t, r) {
        return e.length === 0 ? !1 : Ur(e, t, r);
    }

    function Ur(e, t, r) {
        const {parentNode: n} = t;
        if (!n)
            return !1;
        const s = r.getId(n);
        return e.some((o) => o.id === s) ? !0 : Ur(e, n, r);
    }

    function Jt(e, t) {
        return e.size === 0 ? !1 : Wr(e, t);
    }

    function Wr(e, t) {
        const {parentNode: r} = t;
        return r ? e.has(r) ? !0 : Wr(e, r) : !1;
    }

    const ge = [], Pr = typeof CSSGroupingRule < "u", Gr = typeof CSSMediaRule < "u", Vr = typeof CSSSupportsRule < "u",
        Zr = typeof CSSConditionRule < "u";

    function _e(e) {
        try {
            if ("composedPath" in e) {
                const t = e.composedPath();
                if (t.length)
                    return t[0];
            } else if ("path" in e && e.path.length)
                return e.path[0];
            return e.target;
        } catch {
            return e.target;
        }
    }

    function Hr(e, t) {
        var r, n;
        const s = new lo();
        ge.push(s), s.init(e);
        let o = window.MutationObserver || window.__rrMutationObserver;
        const i = (n = (r = window == null ? void 0 : window.Zone) === null || r === void 0 ? void 0 : r.__symbol__) === null || n === void 0 ? void 0 : n.call(r, "MutationObserver");
        i && window[i] && (o = window[i]);
        const a = new o(s.processMutations.bind(s));
        return a.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }), a;
    }

    function uo({mousemoveCb: e, sampling: t, doc: r, mirror: n}) {
        if (t.mousemove === !1)
            return () => {
            };
        const s = typeof t.mousemove == "number" ? t.mousemove : 50,
            o = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
        let i = [], a;
        const l = xe((d) => {
            const p = Date.now() - a;
            e(i.map((m) => (m.timeOffset -= p, m)), d), i = [], a = null;
        }, o), c = xe((d) => {
            const p = _e(d), {clientX: m, clientY: f} = Dr(d) ? d.changedTouches[0] : d;
            a || (a = Date.now()), i.push({
                x: m,
                y: f,
                id: n.getId(p),
                timeOffset: Date.now() - a
            }), l(typeof DragEvent < "u" && d instanceof DragEvent ? U.Drag : d instanceof MouseEvent ? U.MouseMove : U.TouchMove);
        }, s, {
            trailing: !1
        }), u = [
            oe("mousemove", c, r),
            oe("touchmove", c, r),
            oe("drag", c, r)
        ];
        return () => {
            u.forEach((d) => d());
        };
    }

    function fo({mouseInteractionCb: e, doc: t, mirror: r, blockClass: n, blockSelector: s, sampling: o}) {
        if (o.mouseInteraction === !1)
            return () => {
            };
        const i = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction, a = [],
            l = (c) => (u) => {
                const d = _e(u);
                if (ie(d, n, s, !0))
                    return;
                const p = Dr(u) ? u.changedTouches[0] : u;
                if (!p)
                    return;
                const m = r.getId(d), {clientX: f, clientY: g} = p;
                e({
                    type: It[c],
                    id: m,
                    x: f,
                    y: g
                });
            };
        return Object.keys(It).filter((c) => Number.isNaN(Number(c)) && !c.endsWith("_Departed") && i[c] !== !1).forEach((c) => {
            const u = c.toLowerCase(), d = l(c);
            a.push(oe(u, d, t));
        }), () => {
            a.forEach((c) => c());
        };
    }

    function Kr({scrollCb: e, doc: t, mirror: r, blockClass: n, blockSelector: s, sampling: o}) {
        const i = xe((a) => {
            const l = _e(a);
            if (!l || ie(l, n, s, !0))
                return;
            const c = r.getId(l);
            if (l === t) {
                const u = t.scrollingElement || t.documentElement;
                e({
                    id: c,
                    x: u.scrollLeft,
                    y: u.scrollTop
                });
            } else
                e({
                    id: c,
                    x: l.scrollLeft,
                    y: l.scrollTop
                });
        }, o.scroll || 100);
        return oe("scroll", i, t);
    }

    function ho({viewportResizeCb: e}) {
        let t = -1, r = -1;
        const n = xe(() => {
            const s = Nr(), o = Fr();
            (t !== s || r !== o) && (e({
                width: Number(o),
                height: Number(s)
            }), t = s, r = o);
        }, 200);
        return oe("resize", n, window);
    }

    function qt(e, t) {
        const r = Object.assign({}, e);
        return t || delete r.userTriggered, r;
    }

    const po = ["INPUT", "TEXTAREA", "SELECT"], Yt = /* @__PURE__ */ new WeakMap();

    function mo({
                    inputCb: e,
                    doc: t,
                    mirror: r,
                    blockClass: n,
                    blockSelector: s,
                    ignoreClass: o,
                    maskInputOptions: i,
                    maskInputFn: a,
                    sampling: l,
                    userTriggeredOnInput: c
                }) {
        function u(v) {
            let I = _e(v);
            const C = v.isTrusted;
            if (I && I.tagName === "OPTION" && (I = I.parentElement), !I || !I.tagName || po.indexOf(I.tagName) < 0 || ie(I, n, s, !0))
                return;
            const N = I.type;
            if (I.classList.contains(o))
                return;
            let D = I.value, B = !1;
            N === "radio" || N === "checkbox" ? B = I.checked : (i[I.tagName.toLowerCase()] || i[N]) && (D = Rt({
                maskInputOptions: i,
                tagName: I.tagName,
                type: N,
                value: D,
                maskInputFn: a
            })), d(I, qt({text: D, isChecked: B, userTriggered: C}, c));
            const Z = I.name;
            N === "radio" && Z && B && t.querySelectorAll(`input[type="radio"][name="${Z}"]`).forEach((L) => {
                L !== I && d(L, qt({
                    text: L.value,
                    isChecked: !B,
                    userTriggered: !1
                }, c));
            });
        }

        function d(v, I) {
            const C = Yt.get(v);
            if (!C || C.text !== I.text || C.isChecked !== I.isChecked) {
                Yt.set(v, I);
                const N = r.getId(v);
                e(Object.assign(Object.assign({}, I), {id: N}));
            }
        }

        const m = (l.input === "last" ? ["change"] : ["input", "change"]).map((v) => oe(v, u, t)), f = t.defaultView;
        if (!f)
            return () => {
                m.forEach((v) => v());
            };
        const g = f.Object.getOwnPropertyDescriptor(f.HTMLInputElement.prototype, "value"), y = [
            [f.HTMLInputElement.prototype, "value"],
            [f.HTMLInputElement.prototype, "checked"],
            [f.HTMLSelectElement.prototype, "value"],
            [f.HTMLTextAreaElement.prototype, "value"],
            [f.HTMLSelectElement.prototype, "selectedIndex"],
            [f.HTMLOptionElement.prototype, "selected"]
        ];
        return g && g.set && m.push(...y.map((v) => tt(v[0], v[1], {
            set() {
                u({target: this});
            }
        }, !1, f))), () => {
            m.forEach((v) => v());
        };
    }

    function Je(e) {
        const t = [];

        function r(n, s) {
            if (Pr && n.parentRule instanceof CSSGroupingRule || Gr && n.parentRule instanceof CSSMediaRule || Vr && n.parentRule instanceof CSSSupportsRule || Zr && n.parentRule instanceof CSSConditionRule) {
                const i = Array.from(n.parentRule.cssRules).indexOf(n);
                s.unshift(i);
            } else if (n.parentStyleSheet) {
                const i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
                s.unshift(i);
            }
            return s;
        }

        return r(e, t);
    }

    function pe(e, t, r) {
        let n, s;
        return e ? (e.ownerNode ? n = t.getId(e.ownerNode) : s = r.getId(e), {
            styleId: s,
            id: n
        }) : {};
    }

    function go({styleSheetRuleCb: e, mirror: t, stylesheetManager: r}, {win: n}) {
        const s = n.CSSStyleSheet.prototype.insertRule;
        n.CSSStyleSheet.prototype.insertRule = function (u, d) {
            const {id: p, styleId: m} = pe(this, t, r.styleMirror);
            return (p && p !== -1 || m && m !== -1) && e({
                id: p,
                styleId: m,
                adds: [{rule: u, index: d}]
            }), s.apply(this, [u, d]);
        };
        const o = n.CSSStyleSheet.prototype.deleteRule;
        n.CSSStyleSheet.prototype.deleteRule = function (u) {
            const {id: d, styleId: p} = pe(this, t, r.styleMirror);
            return (d && d !== -1 || p && p !== -1) && e({
                id: d,
                styleId: p,
                removes: [{index: u}]
            }), o.apply(this, [u]);
        };
        let i;
        n.CSSStyleSheet.prototype.replace && (i = n.CSSStyleSheet.prototype.replace, n.CSSStyleSheet.prototype.replace = function (u) {
            const {id: d, styleId: p} = pe(this, t, r.styleMirror);
            return (d && d !== -1 || p && p !== -1) && e({
                id: d,
                styleId: p,
                replace: u
            }), i.apply(this, [u]);
        });
        let a;
        n.CSSStyleSheet.prototype.replaceSync && (a = n.CSSStyleSheet.prototype.replaceSync, n.CSSStyleSheet.prototype.replaceSync = function (u) {
            const {id: d, styleId: p} = pe(this, t, r.styleMirror);
            return (d && d !== -1 || p && p !== -1) && e({
                id: d,
                styleId: p,
                replaceSync: u
            }), a.apply(this, [u]);
        });
        const l = {};
        Pr ? l.CSSGroupingRule = n.CSSGroupingRule : (Gr && (l.CSSMediaRule = n.CSSMediaRule), Zr && (l.CSSConditionRule = n.CSSConditionRule), Vr && (l.CSSSupportsRule = n.CSSSupportsRule));
        const c = {};
        return Object.entries(l).forEach(([u, d]) => {
            c[u] = {
                insertRule: d.prototype.insertRule,
                deleteRule: d.prototype.deleteRule
            }, d.prototype.insertRule = function (p, m) {
                const {id: f, styleId: g} = pe(this.parentStyleSheet, t, r.styleMirror);
                return (f && f !== -1 || g && g !== -1) && e({
                    id: f,
                    styleId: g,
                    adds: [
                        {
                            rule: p,
                            index: [
                                ...Je(this),
                                m || 0
                            ]
                        }
                    ]
                }), c[u].insertRule.apply(this, [p, m]);
            }, d.prototype.deleteRule = function (p) {
                const {id: m, styleId: f} = pe(this.parentStyleSheet, t, r.styleMirror);
                return (m && m !== -1 || f && f !== -1) && e({
                    id: m,
                    styleId: f,
                    removes: [
                        {index: [...Je(this), p]}
                    ]
                }), c[u].deleteRule.apply(this, [p]);
            };
        }), () => {
            n.CSSStyleSheet.prototype.insertRule = s, n.CSSStyleSheet.prototype.deleteRule = o, i && (n.CSSStyleSheet.prototype.replace = i), a && (n.CSSStyleSheet.prototype.replaceSync = a), Object.entries(l).forEach(([u, d]) => {
                d.prototype.insertRule = c[u].insertRule, d.prototype.deleteRule = c[u].deleteRule;
            });
        };
    }

    function jr({mirror: e, stylesheetManager: t}, r) {
        var n, s, o;
        let i = null;
        r.nodeName === "#document" ? i = e.getId(r) : i = e.getId(r.host);
        const a = r.nodeName === "#document" ? (n = r.defaultView) === null || n === void 0 ? void 0 : n.Document : (o = (s = r.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) === null || o === void 0 ? void 0 : o.ShadowRoot,
            l = Object.getOwnPropertyDescriptor(a == null ? void 0 : a.prototype, "adoptedStyleSheets");
        return i === null || i === -1 || !a || !l ? () => {
        } : (Object.defineProperty(r, "adoptedStyleSheets", {
            configurable: l.configurable,
            enumerable: l.enumerable,
            get() {
                var c;
                return (c = l.get) === null || c === void 0 ? void 0 : c.call(this);
            },
            set(c) {
                var u;
                const d = (u = l.set) === null || u === void 0 ? void 0 : u.call(this, c);
                if (i !== null && i !== -1)
                    try {
                        t.adoptStyleSheets(c, i);
                    } catch {
                    }
                return d;
            }
        }), () => {
            Object.defineProperty(r, "adoptedStyleSheets", {
                configurable: l.configurable,
                enumerable: l.enumerable,
                get: l.get,
                set: l.set
            });
        });
    }

    function yo({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: r, stylesheetManager: n}, {win: s}) {
        const o = s.CSSStyleDeclaration.prototype.setProperty;
        s.CSSStyleDeclaration.prototype.setProperty = function (a, l, c) {
            var u;
            if (r.has(a))
                return o.apply(this, [a, l, c]);
            const {
                id: d,
                styleId: p
            } = pe((u = this.parentRule) === null || u === void 0 ? void 0 : u.parentStyleSheet, t, n.styleMirror);
            return (d && d !== -1 || p && p !== -1) && e({
                id: d,
                styleId: p,
                set: {
                    property: a,
                    value: l,
                    priority: c
                },
                index: Je(this.parentRule)
            }), o.apply(this, [a, l, c]);
        };
        const i = s.CSSStyleDeclaration.prototype.removeProperty;
        return s.CSSStyleDeclaration.prototype.removeProperty = function (a) {
            var l;
            if (r.has(a))
                return i.apply(this, [a]);
            const {
                id: c,
                styleId: u
            } = pe((l = this.parentRule) === null || l === void 0 ? void 0 : l.parentStyleSheet, t, n.styleMirror);
            return (c && c !== -1 || u && u !== -1) && e({
                id: c,
                styleId: u,
                remove: {
                    property: a
                },
                index: Je(this.parentRule)
            }), i.apply(this, [a]);
        }, () => {
            s.CSSStyleDeclaration.prototype.setProperty = o, s.CSSStyleDeclaration.prototype.removeProperty = i;
        };
    }

    function Io({mediaInteractionCb: e, blockClass: t, blockSelector: r, mirror: n, sampling: s}) {
        const o = (a) => xe((l) => {
            const c = _e(l);
            if (!c || ie(c, t, r, !0))
                return;
            const {currentTime: u, volume: d, muted: p, playbackRate: m} = c;
            e({
                type: a,
                id: n.getId(c),
                currentTime: u,
                volume: d,
                muted: p,
                playbackRate: m
            });
        }, s.media || 500), i = [
            oe("play", o(0)),
            oe("pause", o(1)),
            oe("seeked", o(2)),
            oe("volumechange", o(3)),
            oe("ratechange", o(4))
        ];
        return () => {
            i.forEach((a) => a());
        };
    }

    function Co({fontCb: e, doc: t}) {
        const r = t.defaultView;
        if (!r)
            return () => {
            };
        const n = [], s = /* @__PURE__ */ new WeakMap(), o = r.FontFace;
        r.FontFace = function (l, c, u) {
            const d = new o(l, c, u);
            return s.set(d, {
                family: l,
                buffer: typeof c != "string",
                descriptors: u,
                fontSource: typeof c == "string" ? c : JSON.stringify(Array.from(new Uint8Array(c)))
            }), d;
        };
        const i = we(t.fonts, "add", function (a) {
            return function (l) {
                return setTimeout(() => {
                    const c = s.get(l);
                    c && (e(c), s.delete(l));
                }, 0), a.apply(this, [l]);
            };
        });
        return n.push(() => {
            r.FontFace = o;
        }), n.push(i), () => {
            n.forEach((a) => a());
        };
    }

    function So(e) {
        const {doc: t, mirror: r, blockClass: n, blockSelector: s, selectionCb: o} = e;
        let i = !0;
        const a = () => {
            const l = t.getSelection();
            if (!l || i && (l != null && l.isCollapsed))
                return;
            i = l.isCollapsed || !1;
            const c = [], u = l.rangeCount || 0;
            for (let d = 0; d < u; d++) {
                const p = l.getRangeAt(d), {startContainer: m, startOffset: f, endContainer: g, endOffset: y} = p;
                ie(m, n, s, !0) || ie(g, n, s, !0) || c.push({
                    start: r.getId(m),
                    startOffset: f,
                    end: r.getId(g),
                    endOffset: y
                });
            }
            o({ranges: c});
        };
        return a(), oe("selectionchange", a);
    }

    function bo(e, t) {
        const {
            mutationCb: r,
            mousemoveCb: n,
            mouseInteractionCb: s,
            scrollCb: o,
            viewportResizeCb: i,
            inputCb: a,
            mediaInteractionCb: l,
            styleSheetRuleCb: c,
            styleDeclarationCb: u,
            canvasMutationCb: d,
            fontCb: p,
            selectionCb: m
        } = e;
        e.mutationCb = (...f) => {
            t.mutation && t.mutation(...f), r(...f);
        }, e.mousemoveCb = (...f) => {
            t.mousemove && t.mousemove(...f), n(...f);
        }, e.mouseInteractionCb = (...f) => {
            t.mouseInteraction && t.mouseInteraction(...f), s(...f);
        }, e.scrollCb = (...f) => {
            t.scroll && t.scroll(...f), o(...f);
        }, e.viewportResizeCb = (...f) => {
            t.viewportResize && t.viewportResize(...f), i(...f);
        }, e.inputCb = (...f) => {
            t.input && t.input(...f), a(...f);
        }, e.mediaInteractionCb = (...f) => {
            t.mediaInteaction && t.mediaInteaction(...f), l(...f);
        }, e.styleSheetRuleCb = (...f) => {
            t.styleSheetRule && t.styleSheetRule(...f), c(...f);
        }, e.styleDeclarationCb = (...f) => {
            t.styleDeclaration && t.styleDeclaration(...f), u(...f);
        }, e.canvasMutationCb = (...f) => {
            t.canvasMutation && t.canvasMutation(...f), d(...f);
        }, e.fontCb = (...f) => {
            t.font && t.font(...f), p(...f);
        }, e.selectionCb = (...f) => {
            t.selection && t.selection(...f), m(...f);
        };
    }

    function Ao(e, t = {}) {
        const r = e.doc.defaultView;
        if (!r)
            return () => {
            };
        bo(e, t);
        const n = Hr(e, e.doc), s = uo(e), o = fo(e), i = Kr(e), a = ho(e), l = mo(e), c = Io(e), u = go(e, {win: r}),
            d = jr(e, e.doc), p = yo(e, {
                win: r
            }), m = e.collectFonts ? Co(e) : () => {
            }, f = So(e), g = [];
        for (const y of e.plugins)
            g.push(y.observer(y.callback, r, y.options));
        return () => {
            ge.forEach((y) => y.reset()), n.disconnect(), s(), o(), i(), a(), l(), c(), u(), d(), p(), m(), f(), g.forEach((y) => y());
        };
    }

    class $t {
        constructor(t) {
            this.generateIdFn = t, this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
        }

        getId(t, r, n, s) {
            const o = n || this.getIdToRemoteIdMap(t), i = s || this.getRemoteIdToIdMap(t);
            let a = o.get(r);
            return a || (a = this.generateIdFn(), o.set(r, a), i.set(a, r)), a;
        }

        getIds(t, r) {
            const n = this.getIdToRemoteIdMap(t), s = this.getRemoteIdToIdMap(t);
            return r.map((o) => this.getId(t, o, n, s));
        }

        getRemoteId(t, r, n) {
            const s = n || this.getRemoteIdToIdMap(t);
            if (typeof r != "number")
                return r;
            const o = s.get(r);
            return o || -1;
        }

        getRemoteIds(t, r) {
            const n = this.getRemoteIdToIdMap(t);
            return r.map((s) => this.getRemoteId(t, s, n));
        }

        reset(t) {
            if (!t) {
                this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap(), this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
                return;
            }
            this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
        }

        getIdToRemoteIdMap(t) {
            let r = this.iframeIdToRemoteIdMap.get(t);
            return r || (r = /* @__PURE__ */ new Map(), this.iframeIdToRemoteIdMap.set(t, r)), r;
        }

        getRemoteIdToIdMap(t) {
            let r = this.iframeRemoteIdToIdMap.get(t);
            return r || (r = /* @__PURE__ */ new Map(), this.iframeRemoteIdToIdMap.set(t, r)), r;
        }
    }

    class vo {
        constructor(t) {
            this.iframes = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMap = /* @__PURE__ */ new WeakMap(), this.crossOriginIframeMirror = new $t(kr), this.mutationCb = t.mutationCb, this.wrappedEmit = t.wrappedEmit, this.stylesheetManager = t.stylesheetManager, this.recordCrossOriginIframes = t.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new $t(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = t.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
        }

        addIframe(t) {
            this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
        }

        addLoadListener(t) {
            this.loadListener = t;
        }

        attachIframe(t, r) {
            var n;
            this.mutationCb({
                adds: [
                    {
                        parentId: this.mirror.getId(t),
                        nextId: null,
                        node: r
                    }
                ],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }), (n = this.loadListener) === null || n === void 0 || n.call(this, t), t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument));
        }

        handleMessage(t) {
            if (t.data.type === "rrweb") {
                if (!t.source)
                    return;
                const n = this.crossOriginIframeMap.get(t.source);
                if (!n)
                    return;
                const s = this.transformCrossOriginEvent(n, t.data.event);
                s && this.wrappedEmit(s, t.data.isCheckout);
            }
        }

        transformCrossOriginEvent(t, r) {
            var n;
            switch (r.type) {
                case P.FullSnapshot:
                    return this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), this.replaceIdOnNode(r.data.node, t), {
                        timestamp: r.timestamp,
                        type: P.IncrementalSnapshot,
                        data: {
                            source: U.Mutation,
                            adds: [
                                {
                                    parentId: this.mirror.getId(t),
                                    nextId: null,
                                    node: r.data.node
                                }
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    };
                case P.Meta:
                case P.Load:
                case P.DomContentLoaded:
                    return !1;
                case P.Plugin:
                    return r;
                case P.Custom:
                    return this.replaceIds(r.data.payload, t, ["id", "parentId", "previousId", "nextId"]), r;
                case P.IncrementalSnapshot:
                    switch (r.data.source) {
                        case U.Mutation:
                            return r.data.adds.forEach((s) => {
                                this.replaceIds(s, t, [
                                    "parentId",
                                    "nextId",
                                    "previousId"
                                ]), this.replaceIdOnNode(s.node, t);
                            }), r.data.removes.forEach((s) => {
                                this.replaceIds(s, t, ["parentId", "id"]);
                            }), r.data.attributes.forEach((s) => {
                                this.replaceIds(s, t, ["id"]);
                            }), r.data.texts.forEach((s) => {
                                this.replaceIds(s, t, ["id"]);
                            }), r;
                        case U.Drag:
                        case U.TouchMove:
                        case U.MouseMove:
                            return r.data.positions.forEach((s) => {
                                this.replaceIds(s, t, ["id"]);
                            }), r;
                        case U.ViewportResize:
                            return !1;
                        case U.MediaInteraction:
                        case U.MouseInteraction:
                        case U.Scroll:
                        case U.CanvasMutation:
                        case U.Input:
                            return this.replaceIds(r.data, t, ["id"]), r;
                        case U.StyleSheetRule:
                        case U.StyleDeclaration:
                            return this.replaceIds(r.data, t, ["id"]), this.replaceStyleIds(r.data, t, ["styleId"]), r;
                        case U.Font:
                            return r;
                        case U.Selection:
                            return r.data.ranges.forEach((s) => {
                                this.replaceIds(s, t, ["start", "end"]);
                            }), r;
                        case U.AdoptedStyleSheet:
                            return this.replaceIds(r.data, t, ["id"]), this.replaceStyleIds(r.data, t, ["styleIds"]), (n = r.data.styles) === null || n === void 0 || n.forEach((s) => {
                                this.replaceStyleIds(s, t, ["styleId"]);
                            }), r;
                    }
            }
        }

        replace(t, r, n, s) {
            for (const o of s)
                !Array.isArray(r[o]) && typeof r[o] != "number" || (Array.isArray(r[o]) ? r[o] = t.getIds(n, r[o]) : r[o] = t.getId(n, r[o]));
            return r;
        }

        replaceIds(t, r, n) {
            return this.replace(this.crossOriginIframeMirror, t, r, n);
        }

        replaceStyleIds(t, r, n) {
            return this.replace(this.crossOriginIframeStyleMirror, t, r, n);
        }

        replaceIdOnNode(t, r) {
            this.replaceIds(t, r, ["id"]), "childNodes" in t && t.childNodes.forEach((n) => {
                this.replaceIdOnNode(n, r);
            });
        }
    }

    class wo {
        constructor(t) {
            this.shadowDoms = /* @__PURE__ */ new WeakSet(), this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
            const r = this;
            this.restorePatches.push(we(Element.prototype, "attachShadow", function (n) {
                return function (s) {
                    const o = n.call(this, s);
                    return this.shadowRoot && r.addShadowRoot(this.shadowRoot, this.ownerDocument), o;
                };
            }));
        }

        addShadowRoot(t, r) {
            Me(t) && (this.shadowDoms.has(t) || (this.shadowDoms.add(t), Hr(Object.assign(Object.assign({}, this.bypassOptions), {
                doc: r,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            }), t), Kr(Object.assign(Object.assign({}, this.bypassOptions), {
                scrollCb: this.scrollCb,
                doc: t,
                mirror: this.mirror
            })), setTimeout(() => {
                t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)), jr({
                    mirror: this.mirror,
                    stylesheetManager: this.bypassOptions.stylesheetManager
                }, t);
            }, 0)));
        }

        observeAttachShadow(t) {
            if (t.contentWindow) {
                const r = this;
                this.restorePatches.push(we(t.contentWindow.HTMLElement.prototype, "attachShadow", function (n) {
                    return function (s) {
                        const o = n.call(this, s);
                        return this.shadowRoot && r.addShadowRoot(this.shadowRoot, t.contentDocument), o;
                    };
                }));
            }
        }

        reset() {
            this.restorePatches.forEach((t) => t()), this.shadowDoms = /* @__PURE__ */ new WeakSet();
        }
    }

    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function Ro(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
        return r;
    }

    function To(e, t, r, n) {
        function s(o) {
            return o instanceof r ? o : new r(function (i) {
                i(o);
            });
        }

        return new (r || (r = Promise))(function (o, i) {
            function a(u) {
                try {
                    c(n.next(u));
                } catch (d) {
                    i(d);
                }
            }

            function l(u) {
                try {
                    c(n.throw(u));
                } catch (d) {
                    i(d);
                }
            }

            function c(u) {
                u.done ? o(u.value) : s(u.value).then(a, l);
            }

            c((n = n.apply(e, [])).next());
        });
    }

    var ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Oo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
    for (var Ue = 0; Ue < ve.length; Ue++)
        Oo[ve.charCodeAt(Ue)] = Ue;
    var ko = function (e) {
        var t = new Uint8Array(e), r, n = t.length, s = "";
        for (r = 0; r < n; r += 3)
            s += ve[t[r] >> 2], s += ve[(t[r] & 3) << 4 | t[r + 1] >> 4], s += ve[(t[r + 1] & 15) << 2 | t[r + 2] >> 6], s += ve[t[r + 2] & 63];
        return n % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : n % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="), s;
    };
    const Qt = /* @__PURE__ */ new Map();

    function Eo(e, t) {
        let r = Qt.get(e);
        return r || (r = /* @__PURE__ */ new Map(), Qt.set(e, r)), r.has(t) || r.set(t, []), r.get(t);
    }

    const zr = (e, t, r) => {
        if (!e || !(qr(e, t) || typeof e == "object"))
            return;
        const n = e.constructor.name, s = Eo(r, n);
        let o = s.indexOf(e);
        return o === -1 && (o = s.length, s.push(e)), o;
    };

    function Ge(e, t, r) {
        if (e instanceof Array)
            return e.map((n) => Ge(n, t, r));
        if (e === null)
            return e;
        if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray)
            return {
                rr_type: e.constructor.name,
                args: [Object.values(e)]
            };
        if (e instanceof ArrayBuffer) {
            const n = e.constructor.name, s = ko(e);
            return {
                rr_type: n,
                base64: s
            };
        } else {
            if (e instanceof DataView)
                return {
                    rr_type: e.constructor.name,
                    args: [
                        Ge(e.buffer, t, r),
                        e.byteOffset,
                        e.byteLength
                    ]
                };
            if (e instanceof HTMLImageElement) {
                const n = e.constructor.name, {src: s} = e;
                return {
                    rr_type: n,
                    src: s
                };
            } else if (e instanceof HTMLCanvasElement) {
                const n = "HTMLImageElement", s = e.toDataURL();
                return {
                    rr_type: n,
                    src: s
                };
            } else {
                if (e instanceof ImageData)
                    return {
                        rr_type: e.constructor.name,
                        args: [Ge(e.data, t, r), e.width, e.height]
                    };
                if (qr(e, t) || typeof e == "object") {
                    const n = e.constructor.name, s = zr(e, t, r);
                    return {
                        rr_type: n,
                        index: s
                    };
                }
            }
        }
        return e;
    }

    const Jr = (e, t, r) => [...e].map((n) => Ge(n, t, r)), qr = (e, t) => !![
        "WebGLActiveInfo",
        "WebGLBuffer",
        "WebGLFramebuffer",
        "WebGLProgram",
        "WebGLRenderbuffer",
        "WebGLShader",
        "WebGLShaderPrecisionFormat",
        "WebGLTexture",
        "WebGLUniformLocation",
        "WebGLVertexArrayObject",
        "WebGLVertexArrayObjectOES"
    ].filter((s) => typeof t[s] == "function").find((s) => e instanceof t[s]);

    function Mo(e, t, r, n) {
        const s = [], o = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
        for (const i of o)
            try {
                if (typeof t.CanvasRenderingContext2D.prototype[i] != "function")
                    continue;
                const a = we(t.CanvasRenderingContext2D.prototype, i, function (l) {
                    return function (...c) {
                        return ie(this.canvas, r, n, !0) || setTimeout(() => {
                            const u = Jr([...c], t, this);
                            e(this.canvas, {
                                type: Re["2D"],
                                property: i,
                                args: u
                            });
                        }, 0), l.apply(this, c);
                    };
                });
                s.push(a);
            } catch {
                const l = tt(t.CanvasRenderingContext2D.prototype, i, {
                    set(c) {
                        e(this.canvas, {
                            type: Re["2D"],
                            property: i,
                            args: [c],
                            setter: !0
                        });
                    }
                });
                s.push(l);
            }
        return () => {
            s.forEach((i) => i());
        };
    }

    function Xt(e, t, r) {
        const n = [];
        try {
            const s = we(e.HTMLCanvasElement.prototype, "getContext", function (o) {
                return function (i, ...a) {
                    return ie(this, t, r, !0) || "__context" in this || (this.__context = i), o.apply(this, [i, ...a]);
                };
            });
            n.push(s);
        } catch {
            console.error("failed to patch HTMLCanvasElement.prototype.getContext");
        }
        return () => {
            n.forEach((s) => s());
        };
    }

    function er(e, t, r, n, s, o, i) {
        const a = [], l = Object.getOwnPropertyNames(e);
        for (const c of l)
            if (![
                "isContextLost",
                "canvas",
                "drawingBufferWidth",
                "drawingBufferHeight"
            ].includes(c))
                try {
                    if (typeof e[c] != "function")
                        continue;
                    const u = we(e, c, function (d) {
                        return function (...p) {
                            const m = d.apply(this, p);
                            if (zr(m, i, this), !ie(this.canvas, n, s, !0)) {
                                const f = Jr([...p], i, this), g = {
                                    type: t,
                                    property: c,
                                    args: f
                                };
                                r(this.canvas, g);
                            }
                            return m;
                        };
                    });
                    a.push(u);
                } catch {
                    const d = tt(e, c, {
                        set(p) {
                            r(this.canvas, {
                                type: t,
                                property: c,
                                args: [p],
                                setter: !0
                            });
                        }
                    });
                    a.push(d);
                }
        return a;
    }

    function No(e, t, r, n, s) {
        const o = [];
        return o.push(...er(t.WebGLRenderingContext.prototype, Re.WebGL, e, r, n, s, t)), typeof t.WebGL2RenderingContext < "u" && o.push(...er(t.WebGL2RenderingContext.prototype, Re.WebGL2, e, r, n, s, t)), () => {
            o.forEach((i) => i());
        };
    }

    var Yr = null;
    try {
        var Fo = typeof Ze < "u" && typeof Ze.require == "function" && Ze.require("worker_threads") || typeof __non_webpack_require__ == "function" && __non_webpack_require__("worker_threads") || typeof require == "function" && require("worker_threads");
        Yr = Fo.Worker;
    } catch {
    }

    function xo(e, t) {
        return Buffer.from(e, "base64").toString("utf8");
    }

    function Do(e, t, r) {
        var n = xo(e), s = n.indexOf(`
`, 10) + 1, o = n.substring(s) + "";
        return function (a) {
            return new Yr(o, Object.assign({}, a, {eval: !0}));
        };
    }

    function Lo(e, t) {
        var r = atob(e);
        return r;
    }

    function _o(e, t, r) {
        var n = Lo(e), s = n.indexOf(`
`, 10) + 1, o = n.substring(s) + "", i = new Blob([o], {type: "application/javascript"});
        return URL.createObjectURL(i);
    }

    function Bo(e, t, r) {
        var n;
        return function (o) {
            return n = n || _o(e), new Worker(n, o);
        };
    }

    var Uo = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";

    function Wo() {
        return Uo;
    }

    function Po(e, t, r) {
        return Wo() ? Do(e) : Bo(e);
    }

    var Go = Po("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=");

    class Vo {
        constructor(t) {
            this.pendingCanvasMutations = /* @__PURE__ */ new Map(), this.rafStamps = {
                latestId: 0,
                invokeId: null
            }, this.frozen = !1, this.locked = !1, this.processMutation = (l, c) => {
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(l) || this.pendingCanvasMutations.set(l, []), this.pendingCanvasMutations.get(l).push(c);
            };
            const {
                sampling: r = "all",
                win: n,
                blockClass: s,
                blockSelector: o,
                recordCanvas: i,
                dataURLOptions: a
            } = t;
            this.mutationCb = t.mutationCb, this.mirror = t.mirror, i && r === "all" && this.initCanvasMutationObserver(n, s, o), i && typeof r == "number" && this.initCanvasFPSObserver(r, n, s, o, {
                dataURLOptions: a
            });
        }

        reset() {
            this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
        }

        freeze() {
            this.frozen = !0;
        }

        unfreeze() {
            this.frozen = !1;
        }

        lock() {
            this.locked = !0;
        }

        unlock() {
            this.locked = !1;
        }

        initCanvasFPSObserver(t, r, n, s, o) {
            const i = Xt(r, n, s), a = /* @__PURE__ */ new Map(), l = new Go();
            l.onmessage = (f) => {
                const {id: g} = f.data;
                if (a.set(g, !1), !("base64" in f.data))
                    return;
                const {base64: y, type: v, width: I, height: C} = f.data;
                this.mutationCb({
                    id: g,
                    type: Re["2D"],
                    commands: [
                        {
                            property: "clearRect",
                            args: [0, 0, I, C]
                        },
                        {
                            property: "drawImage",
                            args: [
                                {
                                    rr_type: "ImageBitmap",
                                    args: [
                                        {
                                            rr_type: "Blob",
                                            data: [{rr_type: "ArrayBuffer", base64: y}],
                                            type: v
                                        }
                                    ]
                                },
                                0,
                                0
                            ]
                        }
                    ]
                });
            };
            const c = 1e3 / t;
            let u = 0, d;
            const p = () => {
                const f = [];
                return r.document.querySelectorAll("canvas").forEach((g) => {
                    ie(g, n, s, !0) || f.push(g);
                }), f;
            }, m = (f) => {
                if (u && f - u < c) {
                    d = requestAnimationFrame(m);
                    return;
                }
                u = f, p().forEach((g) => To(this, void 0, void 0, function* () {
                    var y;
                    const v = this.mirror.getId(g);
                    if (a.get(v))
                        return;
                    if (a.set(v, !0), ["webgl", "webgl2"].includes(g.__context)) {
                        const C = g.getContext(g.__context);
                        ((y = C == null ? void 0 : C.getContextAttributes()) === null || y === void 0 ? void 0 : y.preserveDrawingBuffer) === !1 && (C == null || C.clear(C.COLOR_BUFFER_BIT));
                    }
                    const I = yield createImageBitmap(g);
                    l.postMessage({
                        id: v,
                        bitmap: I,
                        width: g.width,
                        height: g.height,
                        dataURLOptions: o.dataURLOptions
                    }, [I]);
                })), d = requestAnimationFrame(m);
            };
            d = requestAnimationFrame(m), this.resetObservers = () => {
                i(), cancelAnimationFrame(d);
            };
        }

        initCanvasMutationObserver(t, r, n) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const s = Xt(t, r, n), o = Mo(this.processMutation.bind(this), t, r, n),
                i = No(this.processMutation.bind(this), t, r, n, this.mirror);
            this.resetObservers = () => {
                s(), o(), i();
            };
        }

        startPendingCanvasMutationFlusher() {
            requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }

        startRAFTimestamping() {
            const t = (r) => {
                this.rafStamps.latestId = r, requestAnimationFrame(t);
            };
            requestAnimationFrame(t);
        }

        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((t, r) => {
                const n = this.mirror.getId(r);
                this.flushPendingCanvasMutationFor(r, n);
            }), requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }

        flushPendingCanvasMutationFor(t, r) {
            if (this.frozen || this.locked)
                return;
            const n = this.pendingCanvasMutations.get(t);
            if (!n || r === -1)
                return;
            const s = n.map((i) => Ro(i, ["type"])), {type: o} = n[0];
            this.mutationCb({id: r, type: o, commands: s}), this.pendingCanvasMutations.delete(t);
        }
    }

    class Zo {
        constructor(t) {
            this.trackedLinkElements = /* @__PURE__ */ new WeakSet(), this.styleMirror = new ao(), this.mutationCb = t.mutationCb, this.adoptedStyleSheetCb = t.adoptedStyleSheetCb;
        }

        attachLinkElement(t, r) {
            "_cssText" in r.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [
                    {
                        id: r.id,
                        attributes: r.attributes
                    }
                ]
            }), this.trackLinkElement(t);
        }

        trackLinkElement(t) {
            this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
        }

        adoptStyleSheets(t, r) {
            if (t.length === 0)
                return;
            const n = {
                id: r,
                styleIds: []
            }, s = [];
            for (const o of t) {
                let i;
                if (this.styleMirror.has(o))
                    i = this.styleMirror.getId(o);
                else {
                    i = this.styleMirror.add(o);
                    const a = Array.from(o.rules || CSSRule);
                    s.push({
                        styleId: i,
                        rules: a.map((l, c) => ({
                            rule: Tr(l),
                            index: c
                        }))
                    });
                }
                n.styleIds.push(i);
            }
            s.length > 0 && (n.styles = s), this.adoptedStyleSheetCb(n);
        }

        reset() {
            this.styleMirror.reset(), this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
        }

        trackStylesheetInLinkElement(t) {
        }
    }

    function ee(e) {
        return Object.assign(Object.assign({}, e), {timestamp: Date.now()});
    }

    let q, Ve, lt, qe = !1;
    const ue = _s();

    function Be(e = {}) {
        const {
            emit: t,
            checkoutEveryNms: r,
            checkoutEveryNth: n,
            blockClass: s = "rr-block",
            blockSelector: o = null,
            ignoreClass: i = "rr-ignore",
            maskTextClass: a = "rr-mask",
            maskTextSelector: l = null,
            inlineStylesheet: c = !0,
            maskAllInputs: u,
            maskInputOptions: d,
            slimDOMOptions: p,
            maskInputFn: m,
            maskTextFn: f,
            hooks: g,
            packFn: y,
            sampling: v = {},
            dataURLOptions: I = {},
            mousemoveWait: C,
            recordCanvas: N = !1,
            recordCrossOriginIframes: D = !1,
            userTriggeredOnInput: B = !1,
            collectFonts: Z = !1,
            inlineImages: L = !1,
            plugins: J,
            keepIframeSrcFn: W = () => !1,
            ignoreCSSAttributes: F = /* @__PURE__ */ new Set([])
        } = e, re = D ? window.parent === window : !0;
        let ne = !1;
        if (!re)
            try {
                window.parent.document, ne = !1;
            } catch {
                ne = !0;
            }
        if (re && !t)
            throw new Error("emit function is required");
        C !== void 0 && v.mousemove === void 0 && (v.mousemove = C), ue.reset();
        const w = u === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
        } : d !== void 0 ? d : {password: !0}, b = p === !0 || p === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: p === "all",
            headMetaDescKeywords: p === "all"
        } : p || {};
        io();
        let S, R = 0;
        const A = (k) => {
            for (const z of J || [])
                z.eventProcessor && (k = z.eventProcessor(k));
            return y && (k = y(k)), k;
        };
        q = (k, z) => {
            var $;
            if (!(($ = ge[0]) === null || $ === void 0) && $.isFrozen() && k.type !== P.FullSnapshot && !(k.type === P.IncrementalSnapshot && k.data.source === U.Mutation) && ge.forEach((V) => V.unfreeze()), re)
                t == null || t(A(k), z);
            else if (ne) {
                const V = {
                    type: "rrweb",
                    event: A(k),
                    isCheckout: z
                };
                window.parent.postMessage(V, "*");
            }
            if (k.type === P.FullSnapshot)
                S = k, R = 0;
            else if (k.type === P.IncrementalSnapshot) {
                if (k.data.source === U.Mutation && k.data.isAttachIframe)
                    return;
                R++;
                const V = n && R >= n, H = r && k.timestamp - S.timestamp > r;
                (V || H) && Ve(!0);
            }
        };
        const T = (k) => {
            q(ee({
                type: P.IncrementalSnapshot,
                data: Object.assign({source: U.Mutation}, k)
            }));
        }, O = (k) => q(ee({
            type: P.IncrementalSnapshot,
            data: Object.assign({source: U.Scroll}, k)
        })), _ = (k) => q(ee({
            type: P.IncrementalSnapshot,
            data: Object.assign({source: U.CanvasMutation}, k)
        })), E = (k) => q(ee({
            type: P.IncrementalSnapshot,
            data: Object.assign({source: U.AdoptedStyleSheet}, k)
        })), G = new Zo({
            mutationCb: T,
            adoptedStyleSheetCb: E
        }), K = new vo({
            mirror: ue,
            mutationCb: T,
            stylesheetManager: G,
            recordCrossOriginIframes: D,
            wrappedEmit: q
        });
        for (const k of J || [])
            k.getMirror && k.getMirror({
                nodeMirror: ue,
                crossOriginIframeMirror: K.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: K.crossOriginIframeStyleMirror
            });
        lt = new Vo({
            recordCanvas: N,
            mutationCb: _,
            win: window,
            blockClass: s,
            blockSelector: o,
            mirror: ue,
            sampling: v.canvas,
            dataURLOptions: I
        });
        const X = new wo({
            mutationCb: T,
            scrollCb: O,
            bypassOptions: {
                blockClass: s,
                blockSelector: o,
                maskTextClass: a,
                maskTextSelector: l,
                inlineStylesheet: c,
                maskInputOptions: w,
                dataURLOptions: I,
                maskTextFn: f,
                maskInputFn: m,
                recordCanvas: N,
                inlineImages: L,
                sampling: v,
                slimDOMOptions: b,
                iframeManager: K,
                stylesheetManager: G,
                canvasManager: lt,
                keepIframeSrcFn: W
            },
            mirror: ue
        });
        Ve = (k = !1) => {
            var z, $, V, H, x, Q;
            q(ee({
                type: P.Meta,
                data: {
                    href: window.location.href,
                    width: Fr(),
                    height: Nr()
                }
            }), k), G.reset(), ge.forEach((se) => se.lock());
            const fe = so(document, {
                mirror: ue,
                blockClass: s,
                blockSelector: o,
                maskTextClass: a,
                maskTextSelector: l,
                inlineStylesheet: c,
                maskAllInputs: w,
                maskTextFn: f,
                slimDOM: b,
                dataURLOptions: I,
                recordCanvas: N,
                inlineImages: L,
                onSerialize: (se) => {
                    Lr(se, ue) && K.addIframe(se), _r(se, ue) && G.trackLinkElement(se), Br(se) && X.addShadowRoot(se.shadowRoot, document);
                },
                onIframeLoad: (se, rt) => {
                    K.attachIframe(se, rt), X.observeAttachShadow(se);
                },
                onStylesheetLoad: (se, rt) => {
                    G.attachLinkElement(se, rt);
                },
                keepIframeSrcFn: W
            });
            if (!fe)
                return console.warn("Failed to snapshot the document");
            q(ee({
                type: P.FullSnapshot,
                data: {
                    node: fe,
                    initialOffset: {
                        left: window.pageXOffset !== void 0 ? window.pageXOffset : (document == null ? void 0 : document.documentElement.scrollLeft) || (($ = (z = document == null ? void 0 : document.body) === null || z === void 0 ? void 0 : z.parentElement) === null || $ === void 0 ? void 0 : $.scrollLeft) || ((V = document == null ? void 0 : document.body) === null || V === void 0 ? void 0 : V.scrollLeft) || 0,
                        top: window.pageYOffset !== void 0 ? window.pageYOffset : (document == null ? void 0 : document.documentElement.scrollTop) || ((x = (H = document == null ? void 0 : document.body) === null || H === void 0 ? void 0 : H.parentElement) === null || x === void 0 ? void 0 : x.scrollTop) || ((Q = document == null ? void 0 : document.body) === null || Q === void 0 ? void 0 : Q.scrollTop) || 0
                    }
                }
            })), ge.forEach((se) => se.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && G.adoptStyleSheets(document.adoptedStyleSheets, ue.getId(document));
        };
        try {
            const k = [];
            k.push(oe("DOMContentLoaded", () => {
                q(ee({
                    type: P.DomContentLoaded,
                    data: {}
                }));
            }));
            const z = (V) => {
                var H;
                return Ao({
                    mutationCb: T,
                    mousemoveCb: (x, Q) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: {
                            source: Q,
                            positions: x
                        }
                    })),
                    mouseInteractionCb: (x) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: Object.assign({source: U.MouseInteraction}, x)
                    })),
                    scrollCb: O,
                    viewportResizeCb: (x) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: Object.assign({source: U.ViewportResize}, x)
                    })),
                    inputCb: (x) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: Object.assign({source: U.Input}, x)
                    })),
                    mediaInteractionCb: (x) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: Object.assign({source: U.MediaInteraction}, x)
                    })),
                    styleSheetRuleCb: (x) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: Object.assign({source: U.StyleSheetRule}, x)
                    })),
                    styleDeclarationCb: (x) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: Object.assign({source: U.StyleDeclaration}, x)
                    })),
                    canvasMutationCb: _,
                    fontCb: (x) => q(ee({
                        type: P.IncrementalSnapshot,
                        data: Object.assign({source: U.Font}, x)
                    })),
                    selectionCb: (x) => {
                        q(ee({
                            type: P.IncrementalSnapshot,
                            data: Object.assign({source: U.Selection}, x)
                        }));
                    },
                    blockClass: s,
                    ignoreClass: i,
                    maskTextClass: a,
                    maskTextSelector: l,
                    maskInputOptions: w,
                    inlineStylesheet: c,
                    sampling: v,
                    recordCanvas: N,
                    inlineImages: L,
                    userTriggeredOnInput: B,
                    collectFonts: Z,
                    doc: V,
                    maskInputFn: m,
                    maskTextFn: f,
                    keepIframeSrcFn: W,
                    blockSelector: o,
                    slimDOMOptions: b,
                    dataURLOptions: I,
                    mirror: ue,
                    iframeManager: K,
                    stylesheetManager: G,
                    shadowDomManager: X,
                    canvasManager: lt,
                    ignoreCSSAttributes: F,
                    plugins: ((H = J == null ? void 0 : J.filter((x) => x.observer)) === null || H === void 0 ? void 0 : H.map((x) => ({
                        observer: x.observer,
                        options: x.options,
                        callback: (Q) => q(ee({
                            type: P.Plugin,
                            data: {
                                plugin: x.name,
                                payload: Q
                            }
                        }))
                    }))) || []
                }, g);
            };
            K.addLoadListener((V) => {
                k.push(z(V.contentDocument));
            });
            const $ = () => {
                Ve(), k.push(z(document)), qe = !0;
            };
            return document.readyState === "interactive" || document.readyState === "complete" ? $() : k.push(oe("load", () => {
                q(ee({
                    type: P.Load,
                    data: {}
                })), $();
            }, window)), () => {
                k.forEach((V) => V()), qe = !1;
            };
        } catch (k) {
            console.warn(k);
        }
    }

    Be.addCustomEvent = (e, t) => {
        if (!qe)
            throw new Error("please add custom event after start recording");
        q(ee({
            type: P.Custom,
            data: {
                tag: e,
                payload: t
            }
        }));
    };
    Be.freezePage = () => {
        ge.forEach((e) => e.freeze());
    };
    Be.takeFullSnapshot = (e) => {
        if (!qe)
            throw new Error("please take full snapshot after start recording");
        Ve(e);
    };
    Be.mirror = ue;
    const Ho = () => {
        const e = [], t = /* @__PURE__ */ Object.create(null);
        try {
            Y.get(at.ip).then((r) => {
                r.data.code && (t.ip = r.data.data, t.time = Ns().unix(), Be({
                    emit(n) {
                        e.push(n);
                    }
                }), document.addEventListener("visibilitychange", function () {
                    if (document.visibilityState === "hidden") {
                        const s = new FormData();
                        s.append("ip", t.ip), s.append("events", e.splice(0, e.length)), navigator.sendBeacon(at.event, s);
                    }
                }));
            }).catch((r) => {
                console.log(r);
            });
        } catch (r) {
            console.log(r);
        }
        (async () => {
            for (; ;) {
                if (e.length > 5)
                    try {
                        Y.post(at.event, {
                            ip: t.ip,
                            time: t.time,
                            events: e.splice(0, e.length)
                        }).catch((r) => {
                            console.log(r);
                        });
                    } catch (r) {
                        console.log(r);
                    }
                await Fs(1500);
            }
        })();
    };
    window.replayInit = Ho;
});
Ko();
