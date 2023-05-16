import{q as m,s as ce,t as le,F as I,w as W,c as V,i as X,x as de,l as me,d as _,b,g as ue,y as N,f as pe,Q as fe,R as be,A as ye}from"./index.qwik-7b47eba7.js";/**
 * @license
 * @builder.io/qwik/server 1.0.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var he=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function G(e,t){const n=t==null?void 0:t.mapper,o=e.symbolMapper?e.symbolMapper:s=>{var r;if(n){const a=S(s),l=n[a];if(!l){if((r=globalThis.__qwik_reg_symbols)==null?void 0:r.has(a))return[s,"_"];console.error("Cannot resolve symbol",s,"in",n)}return l}};return{isServer:!0,async importSymbol(s,r,a){var x;const l=S(a),y=(x=globalThis.__qwik_reg_symbols)==null?void 0:x.get(l);if(y)return y;let d=String(r);d.endsWith(".js")||(d+=".js");const q=he(d);if(!(a in q))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${d}'.`);return q[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(r=>{setTimeout(()=>{r(s())})}),chunkForSymbol(s){return o(s,n)}}}async function we(e,t){const n=G(e,t);W(n)}var S=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e};function z(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function ee(e){let t=e.base;return typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var ge='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',_e=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,qe='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',xe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function ve(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?xe:qe).replace("window.qEvents",JSON.stringify(e.events)):e.debug?_e:ge}function je(e,t,n){if(!n)return[];const o=t.prefetchStrategy,i=ee(t);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return ke(e,n,i);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:n.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function ke(e,t,n){const o=[],i=e==null?void 0:e.qrls,{mapper:s,manifest:r}=t,a=new Set;if(Array.isArray(i))for(const l of i){const y=l.getHash(),d=s[y];d&&te(r,a,o,n,d[1])}return o}function te(e,t,n,o,i){const s=o+i;if(!t.has(s)){t.add(s);const r=e.bundles[i];if(r){const a={url:s,imports:[]};if(n.push(a),Array.isArray(r.imports))for(const l of r.imports)te(e,t,a.imports,o,l)}}}function Ne(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function E(){let i=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return i+="w.postMessage(u.map(u=>new URL(u,origin)+''));",i+="w.onmessage=()=>{w.terminate()};",i}function ze(e){const t={bundles:v(e).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(t)}}))`}function v(e){const t=[],n=o=>{if(Array.isArray(o))for(const i of o)t.includes(i.url)||(t.push(i.url),n(i.imports))};return n(e),t}function Se(e,t,n){const o=Fe(e==null?void 0:e.implementation),i=[];return o.prefetchEvent==="always"&&Ee(i,t,n),o.linkInsert==="html-append"&&Ie(i,t,o),o.linkInsert==="js-append"?Ae(i,t,o,n):o.workerFetchInsert==="always"&&Ce(i,t,n),i.length>0?m(I,{children:i}):null}function Ee(e,t,n){e.push(m("script",{type:"module",dangerouslySetInnerHTML:ze(t),nonce:n}))}function Ie(e,t,n){const o=v(t),i=n.linkRel||"prefetch";for(const s of o){const r={};r.href=s,r.rel=i,(i==="prefetch"||i==="preload")&&s.endsWith(".js")&&(r.as="script"),e.push(m("link",r,void 0))}}function Ae(e,t,n,o){const i=n.linkRel||"prefetch";let s="";n.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(v(t))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${i}");`,n.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${i}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",n.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=E(),s+="}"),n.workerFetchInsert==="always"&&(s+=E()),e.push(m("script",{type:"module",dangerouslySetInnerHTML:s,nonce:o}))}function Ce(e,t,n){let o=`const u=${JSON.stringify(v(t))};`;o+=E(),e.push(m("script",{type:"module",dangerouslySetInnerHTML:o,nonce:n}))}function Fe(e){return e&&typeof e=="object"?e:Le}var Le={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Te="<!DOCTYPE html>";async function Re(e,t){var P;t=Oe(t);let n=t.stream,o=0,i=0,s=0,r=0;const a=((P=t.streaming)==null?void 0:P.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},l=t.containerTagName??"html",y=t.containerAttributes??{};let d="";const q=n,x=z();function A(){d&&(q.write(d),d="",o=0,s++,s===1&&(r=x()))}function C(c){o+=c.length,i+=c.length,d+=c}switch(a.strategy){case"disabled":n={write:C};break;case"direct":n=q;break;case"auto":let c=0,h=!1;const j=a.maximunChunk??0,k=a.maximunInitialChunk??0;n={write(w){w==="<!--qkssr-f-->"?h||(h=!0):w==="<!--qkssr-pu-->"?c++:w==="<!--qkssr-po-->"?c--:C(w),c===0&&(h||o>=(s===0?k:j))&&(h=!1,A())}};break}l==="html"?n.write(Te):(n.write("<!--cq-->"),t.qwikLoader?(t.qwikLoader.include===void 0&&(t.qwikLoader.include="never"),t.qwikLoader.position===void 0&&(t.qwikLoader.position="bottom")):t.qwikLoader={include:"never"}),t.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.");const se=ee(t),f=ne(t.manifest);await we(t,f);let p;const F=f==null?void 0:f.manifest.injections,oe=F?F.map(c=>m(c.tag,c.attributes??{})):void 0,ie=z(),L=[];let T=0,R=0,K=!1;await ce(e,{stream:n,containerTagName:l,containerAttributes:y,serverData:t.serverData,base:se,beforeContent:oe,beforeClose:async(c,h,j)=>{var D,Q,Z,U,Y,B,J;T=ie();const k=z();K=j,p=await le(c,h);const w=JSON.stringify(p.state,void 0,void 0),g=[m("script",{type:"qwik/json",dangerouslySetInnerHTML:Ke(w),nonce:(D=t.serverData)==null?void 0:D.nonce})];if(p.funcs.length>0&&g.push(m("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:$e(p.funcs),nonce:(Q=t.serverData)==null?void 0:Q.nonce})),t.prefetchStrategy!==null){const u=je(p,t,f);if(u.length>0){const H=Se(t.prefetchStrategy,u,(Z=t.serverData)==null?void 0:Z.nonce);H&&g.push(H)}}const ae=!p||p.mode!=="static",O=((U=t.qwikLoader)==null?void 0:U.include)??"auto",$=O==="always"||O==="auto"&&ae;if($){const u=ve({events:(Y=t.qwikLoader)==null?void 0:Y.events,debug:t.debug});g.push(m("script",{id:"qwikloader",dangerouslySetInnerHTML:u,nonce:(B=t.serverData)==null?void 0:B.nonce}))}const M=Array.from(h.$events$,u=>JSON.stringify(u));if(M.length>0){let u=`window.qwikevents.push(${M.join(", ")})`;$||(u=`window.qwikevents||=[];${u}`),g.push(m("script",{dangerouslySetInnerHTML:u,nonce:(J=t.serverData)==null?void 0:J.nonce}))}return Pe(L,c),R=k(),m(I,{children:g})}}),l!=="html"&&n.write("<!--/cq-->"),A();const re=K||p.resources.some(c=>c._cache!==1/0);return{prefetchResources:void 0,snapshotResult:p,flushes:s,manifest:f==null?void 0:f.manifest,size:i,isStatic:!re,timing:{render:T,snapshot:R,firstFlush:r},_symbols:L}}function ne(e){if(e){if("mapper"in e)return e;if(e=Ne(e),e){const t={};return Object.entries(e.mapping).forEach(([n,o])=>{t[S(n)]=[n,o]}),{mapper:t,manifest:e}}}}var Ke=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Pe(e,t){var n;for(const o of t){const i=(n=o.$componentQrl$)==null?void 0:n.getSymbol();i&&!e.includes(i)&&e.push(i)}}function Oe(e){const t={...e};return e&&typeof e.base=="function"&&(t.base=e.base(t)),t}function $e(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}async function Je(e){const t=G({manifest:e},ne(e));W(t)}const Me={symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag"},s_LQPhZ0qOjrk:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useVisibleTask",canonicalFilename:"s_lqphz0qojrk",hash:"LQPhZ0qOjrk",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_PxZ05oEiFy8"},s_0RuWJF374SY:{origin:"routes/blog/index.tsx",displayName:"blog_component",canonicalFilename:"s_0ruwjf374sy",hash:"0RuWJF374SY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_1IGnfcKQ6IE:{origin:"routes/red-social-erotica/mujeres/index.tsx",displayName:"mujeres_component",canonicalFilename:"s_1ignfckq6ie",hash:"1IGnfcKQ6IE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_3m5w9lVATIM:{origin:"routes/escorts/trans-travestis/index.tsx",displayName:"trans_travestis_component",canonicalFilename:"s_3m5w9lvatim",hash:"3m5w9lVATIM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_AKetNByE5TM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_aketnbye5tm",hash:"AKetNByE5TM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_J4V2qsF7Yxo:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_j4v2qsf7yxo",hash:"J4V2qsF7Yxo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_M0MhZOWBKK8:{origin:"routes/contact/index.tsx",displayName:"contact_component",canonicalFilename:"s_m0mhzowbkk8",hash:"M0MhZOWBKK8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_Nvf4dOviksc:{origin:"routes/auth/login/index.tsx",displayName:"login_component",canonicalFilename:"s_nvf4doviksc",hash:"Nvf4dOviksc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_PxZ05oEiFy8:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_pxz05oeify8",hash:"PxZ05oEiFy8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_RHghKyFdb04:{origin:"routes/auth/recover-account/index.tsx",displayName:"recover_account_component",canonicalFilename:"s_rhghkyfdb04",hash:"RHghKyFdb04",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_U0nTftZXNWo:{origin:"routes/escorts/mujeres/index.tsx",displayName:"mujeres_component",canonicalFilename:"s_u0ntftzxnwo",hash:"U0nTftZXNWo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_WbQ5pcYcyS4:{origin:"routes/escorts/hombres/index.tsx",displayName:"hombres_component",canonicalFilename:"s_wbq5pcycys4",hash:"WbQ5pcYcyS4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_lSg6nTHu0yo:{origin:"routes/auth/signin/index.tsx",displayName:"signin_component",canonicalFilename:"s_lsg6nthu0yo",hash:"lSg6nTHu0yo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_mBt9fIl89mc:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_mbt9fil89mc",hash:"mBt9fIl89mc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_u0bwM0i5dA8:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_u0bwm0i5da8",hash:"u0bwM0i5dA8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_6duC1tkZ0hQ:{origin:"components/starter/header/header.tsx",displayName:"header_component_header_document_onScroll",canonicalFilename:"s_6duc1tkz0hq",hash:"6duC1tkZ0hQ",ctxKind:"eventHandler",ctxName:"document:onScroll$",captures:!0,parent:"s_mBt9fIl89mc"},s_JKHgMZ4xLZQ:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_jkhgmz4xlzq",hash:"JKHgMZ4xLZQ",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_VkLNXphUh5s"},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag"},s_HU55RV7VfPc:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_hu55rv7vfpc",hash:"HU55RV7VfPc",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_PxZ05oEiFy8"},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null},s_JtGc0nS5Nuo:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_div_input_onInput",canonicalFilename:"s_jtgc0ns5nuo",hash:"JtGc0nS5Nuo",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_PxZ05oEiFy8"},s_KnNE9eL0qfc:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component_useOnDocument_event",canonicalFilename:"s_knne9el0qfc",hash:"KnNE9eL0qfc",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_AKetNByE5TM"},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM"},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag"},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM"},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y"}},mapping:{s_02wMImzEAbk:"q-2d21ba7b.js",s_LQPhZ0qOjrk:"q-9023e2a4.js",s_0RuWJF374SY:"q-f293c0a2.js",s_1IGnfcKQ6IE:"q-e7ac0e04.js",s_3m5w9lVATIM:"q-900ba357.js",s_3sccYCDd1Z0:"q-40017390.js",s_8gdLBszqbaM:"q-1f675239.js",s_AKetNByE5TM:"q-d3af8062.js",s_J4V2qsF7Yxo:"q-90c8702b.js",s_M0MhZOWBKK8:"q-9fbfe7c7.js",s_Nk9PlpjQm9Y:"q-d310337d.js",s_Nvf4dOviksc:"q-7c596a17.js",s_PxZ05oEiFy8:"q-9023e2a4.js",s_RHghKyFdb04:"q-e1ff4c1c.js",s_TxCFOy819ag:"q-2d21ba7b.js",s_U0nTftZXNWo:"q-e7ac0e04.js",s_VkLNXphUh5s:"q-53d72a20.js",s_WbQ5pcYcyS4:"q-43572102.js",s_lSg6nTHu0yo:"q-61db162b.js",s_mBt9fIl89mc:"q-a0624af5.js",s_u0bwM0i5dA8:"q-b8406990.js",s_xYL1qOwPyDI:"q-b9c59132.js",s_zrbrqoaqXSY:"q-f01cda52.js",s_6duC1tkZ0hQ:"q-a0624af5.js",s_JKHgMZ4xLZQ:"q-53d72a20.js",s_RPDJAz33WLA:"q-2d21ba7b.js",s_HU55RV7VfPc:"q-9023e2a4.js",s_A5bZC7WO00A:"q-7dd81fea.js",s_JtGc0nS5Nuo:"q-9023e2a4.js",s_KnNE9eL0qfc:"q-d56fd61c.js",s_eBQ0vFsFKsk:"q-c16691a9.js",s_fX0bDjeJa0E:"q-2d21ba7b.js",s_i1Cv0pYJNR0:"q-1f675239.js",s_p9MSze0ojs4:"q-d310337d.js"},bundles:{"q-1f675239.js":{size:958,imports:["q-40017390.js","q-c486ece7.js"],dynamicImports:["q-c16691a9.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-2d21ba7b.js":{size:3998,imports:["q-40017390.js","q-c486ece7.js"],dynamicImports:["q-43d07ea2.js","q-4968b765.js","q-523a1052.js","q-5b3e9995.js","q-71f85dc3.js","q-8c92c03b.js","q-925c71d7.js","q-9d521d15.js","q-b04036a9.js","q-c32d5f05.js","q-cef9e1f6.js","q-d8923e35.js","q-d9198081.js","q-ef29f7c2.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-40017390.js":{size:7679,imports:["q-c486ece7.js"],dynamicImports:["q-1f675239.js","q-2d21ba7b.js","q-7dd81fea.js","q-d310337d.js","q-d3af8062.js","q-f01cda52.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs","src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-43572102.js":{size:151,imports:["q-c486ece7.js"],origins:["src/entry_hombres.js","src/s_wbq5pcycys4.js"],symbols:["s_WbQ5pcYcyS4"]},"q-43d07ea2.js":{size:229,imports:["q-c486ece7.js"],dynamicImports:["q-61db162b.js"],origins:["src/routes/auth/signin/index.tsx"]},"q-45aab3b6.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-4968b765.js":{size:241,imports:["q-c486ece7.js"],dynamicImports:["q-9023e2a4.js"],origins:["src/routes/demo/flower/index.tsx"]},"q-523a1052.js":{size:272,imports:["q-40017390.js","q-c486ece7.js"],dynamicImports:["q-53d72a20.js"],origins:["src/routes/layout.tsx"]},"q-53d72a20.js":{size:5379,imports:["q-c486ece7.js"],dynamicImports:["q-a0624af5.js","q-b8406990.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/routes/styles.css?used&inline","src/s_jkhgmz4xlzq.js","src/s_vklnxphuh5s.js"],symbols:["s_JKHgMZ4xLZQ","s_VkLNXphUh5s"]},"q-5b3e9995.js":{size:229,imports:["q-c486ece7.js"],dynamicImports:["q-e1ff4c1c.js"],origins:["src/routes/auth/recover-account/index.tsx"]},"q-61422cdf.js":{size:153,origins:["src/routes/auth/login/login.module.css?used"]},"q-61db162b.js":{size:2484,imports:["q-40017390.js","q-61422cdf.js","q-c486ece7.js"],origins:["src/entry_signin.js","src/s_lsg6nthu0yo.js"],symbols:["s_lSg6nTHu0yo"]},"q-71f85dc3.js":{size:185,imports:["q-c486ece7.js"],dynamicImports:["q-900ba357.js"],origins:["src/routes/escorts/trans-travestis/index.tsx"]},"q-7c596a17.js":{size:1723,imports:["q-40017390.js","q-61422cdf.js","q-c486ece7.js"],origins:["src/entry_login.js","src/s_nvf4doviksc.js"],symbols:["s_Nvf4dOviksc"]},"q-7dd81fea.js":{size:751,imports:["q-c486ece7.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-8c92c03b.js":{size:185,imports:["q-c486ece7.js"],dynamicImports:["q-f293c0a2.js"],origins:["src/routes/blog/index.tsx"]},"q-900ba357.js":{size:158,imports:["q-c486ece7.js"],origins:["src/entry_trans_travestis.js","src/s_3m5w9lvatim.js"],symbols:["s_3m5w9lVATIM"]},"q-9023e2a4.js":{size:2686,imports:["q-40017390.js","q-c486ece7.js"],origins:["src/entry_flower.js","src/routes/demo/flower/flower.css?used&inline","src/s_hu55rv7vfpc.js","src/s_jtgc0ns5nuo.js","src/s_lqphz0qojrk.js","src/s_pxz05oeify8.js"],symbols:["s_HU55RV7VfPc","s_JtGc0nS5Nuo","s_LQPhZ0qOjrk","s_PxZ05oEiFy8"]},"q-90c8702b.js":{size:1219,imports:["q-40017390.js","q-c486ece7.js","q-d9198081.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_j4v2qsf7yxo.js"],symbols:["s_J4V2qsF7Yxo"]},"q-925c71d7.js":{size:185,imports:["q-c486ece7.js"],dynamicImports:["q-9fbfe7c7.js"],origins:["src/routes/contact/index.tsx"]},"q-9d521d15.js":{size:112,imports:["q-c486ece7.js"],dynamicImports:["q-45aab3b6.js"],origins:["@qwik-city-entries"]},"q-9fbfe7c7.js":{size:150,imports:["q-c486ece7.js"],origins:["src/entry_contact.js","src/s_m0mhzowbkk8.js"],symbols:["s_M0MhZOWBKK8"]},"q-a0624af5.js":{size:2350,imports:["q-40017390.js","q-c486ece7.js"],origins:["src/components/starter/header/header.module.css?used","src/entry_header.js","src/s_6duc1tkz0hq.js","src/s_mbt9fil89mc.js"],symbols:["s_6duC1tkZ0hQ","s_mBt9fIl89mc"]},"q-b04036a9.js":{size:185,imports:["q-c486ece7.js"],dynamicImports:["q-43572102.js"],origins:["src/routes/escorts/hombres/index.tsx"]},"q-b8406990.js":{size:1498,imports:["q-c486ece7.js"],origins:["src/components/starter/footer/footer.module.css?used","src/entry_footer.js","src/s_u0bwm0i5da8.js"],symbols:["s_u0bwM0i5dA8"]},"q-b9c59132.js":{size:1609,imports:["q-c486ece7.js"],origins:["src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-c16691a9.js":{size:128,imports:["q-40017390.js","q-c486ece7.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-c32d5f05.js":{size:229,imports:["q-c486ece7.js"],dynamicImports:["q-7c596a17.js"],origins:["src/routes/auth/login/index.tsx"]},"q-c486ece7.js":{size:45931,dynamicImports:["q-40017390.js"],origins:["node_modules/@builder.io/qwik/core.min.mjs","src/global.css","src/root.tsx"]},"q-c4f07649.js":{size:58,imports:["q-c486ece7.js"]},"q-cef9e1f6.js":{size:185,imports:["q-c486ece7.js"],dynamicImports:["q-e7ac0e04.js"],origins:["src/routes/red-social-erotica/mujeres/index.tsx"]},"q-d310337d.js":{size:1006,imports:["q-40017390.js","q-c486ece7.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-d3af8062.js":{size:404,imports:["q-40017390.js","q-c486ece7.js"],dynamicImports:["q-d56fd61c.js"],origins:["src/entry_RouterOutlet.js","src/s_aketnbye5tm.js"],symbols:["s_AKetNByE5TM"]},"q-d56fd61c.js":{size:210,origins:["src/s_knne9el0qfc.js"],symbols:["s_KnNE9eL0qfc"]},"q-d8923e35.js":{size:283,imports:["q-c486ece7.js"],dynamicImports:["q-b9c59132.js"],origins:["src/routes/index.tsx"]},"q-d9198081.js":{size:411,imports:["q-40017390.js","q-c486ece7.js"],dynamicImports:["q-90c8702b.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-e1ff4c1c.js":{size:1128,imports:["q-40017390.js","q-61422cdf.js","q-c486ece7.js"],origins:["src/entry_recover_account.js","src/s_rhghkyfdb04.js"],symbols:["s_RHghKyFdb04"]},"q-e7ac0e04.js":{size:238,imports:["q-c486ece7.js"],origins:["src/entry_mujeres.js","src/s_1ignfckq6ie.js","src/s_u0ntftzxnwo.js"],symbols:["s_1IGnfcKQ6IE","s_U0nTftZXNWo"]},"q-ef29f7c2.js":{size:185,imports:["q-c486ece7.js"],dynamicImports:["q-e7ac0e04.js"],origins:["src/routes/escorts/mujeres/index.tsx"]},"q-f01cda52.js":{size:666,imports:["q-40017390.js","q-c486ece7.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-f293c0a2.js":{size:147,imports:["q-c486ece7.js"],origins:["src/entry_blog.js","src/s_0ruwjf374sy.js"],symbols:["s_0RuWJF374SY"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-057171b9.css",dangerouslySetInnerHTML:`/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
 */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.fixed{position:fixed}.left-0{left:0px}.top-0{top:0px}.m-auto{margin:auto}.mx-3{margin-left:.75rem;margin-right:.75rem}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.ml-2{margin-left:.5rem}.mr-6{margin-right:1.5rem}.mt-12{margin-top:3rem}.mt-20{margin-top:5rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline{display:inline}.flex{display:flex}.h-8{height:2rem}.w-28{width:7rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-80{width:20rem}.w-full{width:100%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.items-center{align-items:center}.justify-between{justify-content:space-between}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-x{border-left-width:1px;border-right-width:1px}.border-y{border-top-width:1px;border-bottom-width:1px}.border-b{border-bottom-width:1px}.border-solid{border-style:solid}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.bg-\\[\\#070707\\]{--tw-bg-opacity: 1;background-color:rgb(7 7 7 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.p-0{padding:0}.p-3{padding:.75rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-20{padding-top:5rem;padding-bottom:5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-2{padding-bottom:.5rem}.pr-3{padding-right:.75rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-light{font-weight:300}.uppercase{text-transform:uppercase}.text-\\[\\#f5f5f5\\]{--tw-text-opacity: 1;color:rgb(245 245 245 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-150{transition-delay:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--qwik-dark-background: rgba(0, 0, 0);--qwik-dark-text: #f5f5f5}html{line-height:1;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;margin:0;line-height:inherit}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}.about_section{box-sizing:border-box;background:url(/assets/images/about-desktop.png) no-repeat center center / 100% 100%}.slider_section{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100vw;height:100vh;overflow:hidden;background:url(/assets/slides/01.webp);background-size:cover!important;background-repeat:no-repeat!important}.slider_section .title{font-size:40px;font-weight:300;color:#f5f5f5}.slider_button{margin-top:40px}.slider_button a{color:#fff}.slider_button a:active{background:#f5f5f5;border:solid 1px #f5f5f5;color:#161616;transition:all .2s ease-in}@media (max-width: 650px){.slider_section .title{font-size:24px;font-weight:300;color:#f5f5f5;margin-top:60px}.slider_button{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:0}.slider_button a{margin-bottom:20px;width:100%;text-align:center}}.hover\\:opacity-100:hover{opacity:1}.peer\\/draft:checked~.peer-checked\\/draft\\:text-sky-500{--tw-text-opacity: 1;color:rgb(14 165 233 / var(--tw-text-opacity))}.peer\\/published:checked~.peer-checked\\/published\\:text-sky-500{--tw-text-opacity: 1;color:rgb(14 165 233 / var(--tw-text-opacity))}@media (min-width: 640px){.sm\\:p-8{padding:2rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}._main_section_192mj_1{width:100vw;height:auto;display:flex;align-items:center;justify-content:center;position:relative;background:url(/assets/slides/01.jpg);background-size:cover!important;background-repeat:no-repeat!important;z-index:0;padding-top:60px;padding-bottom:40px}._main_section_192mj_1:before{width:100vw;height:100%;content:"";position:absolute;top:0;left:0;-webkit-backdrop-filter:brightness(45%) blur(calc((40 / 14) * 1em));backdrop-filter:brightness(45%) blur(calc((40 / 14) * 1em));z-index:-1}._main_section_192mj_1 ._logo_192mj_51{width:calc((190 / 14) * 1em);margin:0 auto}._subtitle_192mj_59{margin-top:calc((25 / 18) * 1em);font-weight:500;color:#fff;font-size:18px;text-align:center;margin-top:30px;margin-bottom:20px}._form_192mj_77{width:calc((250 / 14) * 1em);margin:0 auto}._list_1ofyy_1{display:flex;flex-direction:column;gap:20px;color:#fff}._list_1ofyy_1,._empty_1ofyy_9{min-height:250px}._list_1ofyy_1 li{list-style:none}._empty_1ofyy_9{color:#fff;display:block}._input_1ofyy_22{background:white;color:var(--qwik-light-blue);border:none;border-radius:8px;padding:15px 20px;margin-right:10px;font-size:.8rem}._hint_1ofyy_32{font-size:.8rem;color:#fff;margin-top:30px}@media screen and (min-width: 768px){._input_1ofyy_22{padding:23px 35px;margin-right:20px;font-size:1rem}}._main_footer_1js1i_1{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100vw;padding:calc((50 / 14) * 1em) 0;box-sizing:border-box;background:#000000}._copyright_label_1js1i_23{margin:1.25em 0;font-size:14px;font-weight:300;text-align:center;color:#fff;opacity:.5}._navigation_1js1i_41{display:flex;align-items:center;justify-content:center}._nav_item_1js1i_53{background:none;border:none;cursor:pointer;margin:0 10px;font-size:calc((16 / 14) * 1em);font-weight:300;color:#fff;text-decoration:underline}._anchor_1js1i_75{color:#fff!important;display:block;font-size:1.2rem;text-align:center;text-decoration:underline;line-height:1.5;margin:0 10px}._social_networks_container_1js1i_93 button{opacity:.5}._social_networks_container_1js1i_93 a:hover{opacity:1}._anchor_1js1i_75 span:not(._spacer_1js1i_107){display:block}._spacer_1js1i_107{display:none;padding:0 15px}@media screen and (min-width: 768px){._anchor_1js1i_75 span{display:inline!important}}li{margin:0 8px}img{width:16px}._logo_boron_29{width:120px}@media (max-width: 650px){._nav_boron_111{padding:10px}}
`}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"1.0.0",vite:"",rollup:"3.21.5",env:"node",os:"win32",node:"18.16.0"}},De=()=>{const e=de(),t=me();return _(I,{children:[b("title",null,null,e.title,1,null),b("link",null,{rel:"canonical",href:ue(n=>n.url.href,[t],"p0.url.href")},null,3,null),b("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),b("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(n=>N("meta",{...n},null,0,n.key)),e.links.map(n=>N("link",{...n},null,0,n.key)),e.styles.map(n=>N("style",{...n.props,dangerouslySetInnerHTML:pe(n,"style")},null,0,n.key))]},1,"OA_0")},Qe=V(X(De,"s_zrbrqoaqXSY"));const Ze=()=>_(fe,{children:[b("head",null,null,[b("meta",null,{charSet:"utf-8"},null,3,null),b("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),_(Qe,null,3,"35_0")],1,null),b("body",null,{lang:"en"},[_(be,null,3,"35_1"),_(ye,null,3,"35_2")],1,null)]},1,"35_3"),Ue=V(X(Ze,"s_3sccYCDd1Z0"));function He(e){return Re(_(Ue,null,3,"pY_0"),{manifest:Me,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Me as m,He as r,Je as s};
