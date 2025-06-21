"use strict";(self["webpackChunkweb_novels"]=self["webpackChunkweb_novels"]||[]).push([[504],{130:(t,e,n)=>{n.d(e,{D$:()=>Q,Ef:()=>tt,Jo:()=>q});var i=n(768),r=n(232);n(144);
/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(it){}const a=s?t=>s.createHTML(t):t=>t,l="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r="svg"===e?u.createElementNS(l,t):"mathml"===e?u.createElementNS(c,t):n?u.createElement(t,{is:n}):u.createElement(t);return"select"===t&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:t=>u.createTextNode(t),createComment:t=>u.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>u.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(e.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{h.innerHTML=a("svg"===i?`<svg>${t}</svg>`:"mathml"===i?`<math>${t}</math>`:t);const r=h.content;if("svg"===i||"mathml"===i){const t=r.firstChild;while(t.firstChild)r.appendChild(t.firstChild);r.removeChild(t)}e.insertBefore(r,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};i.QP;function g(t,e,n){const i=t[d];i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh");const v=Symbol("");const b=/(^|;)\s*display\s*:/;function w(t,e,n){const i=t.style,s=(0,r.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,r.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&_(i,e,"")}else for(const t in e)null==n[t]&&_(i,t,"");for(const t in n)"display"===t&&(o=!0),_(i,t,n[t])}else if(s){if(e!==n){const t=i[v];t&&(n+=";"+t),i.cssText=n,o=b.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?i.display:"",t[y]&&(i.display="none"))}const E=/\s*!important$/;function _(t,e,n){if((0,r.cy)(n))n.forEach((n=>_(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=C(t,e);E.test(n)?t.setProperty((0,r.Tg)(i),n.replace(E,""),"important"):t[i]=n}}const T=["Webkit","Moz","ms"],S={};function C(t,e){const n=S[e];if(n)return n;let i=(0,r.PT)(e);if("filter"!==i&&i in t)return S[e]=i;i=(0,r.ZH)(i);for(let r=0;r<T.length;r++){const n=T[r]+i;if(n in t)return S[e]=n}return e}const A="http://www.w3.org/1999/xlink";function I(t,e,n,i,s,o=(0,r.J$)(e)){i&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(A,e.slice(6,e.length)):t.setAttributeNS(A,e,n):null==n||o&&!(0,r.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,r.Bm)(n)?String(n):n)}function x(t,e,n,i,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const i="OPTION"===o?t.getAttribute("value")||"":t.value,r=null==n?"checkbox"===t.type?"on":"":String(n);return i===r&&"_value"in t||(t.value=r),null==n&&t.removeAttribute(e),void(t._value=n)}let l=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{t[e]=n}catch(it){0}l&&t.removeAttribute(s||e)}function D(t,e,n,i){t.addEventListener(e,n,i)}function k(t,e,n,i){t.removeEventListener(e,n,i)}const N=Symbol("_vei");function O(t,e,n,i,r=null){const s=t[N]||(t[N]={}),o=s[e];if(i&&o)o.value=i;else{const[n,a]=M(e);if(i){const o=s[e]=F(i,r);D(t,n,o,a)}else o&&(k(t,n,o,a),s[e]=void 0)}}const R=/(?:Once|Passive|Capture)$/;function M(t){let e;if(R.test(t)){let n;e={};while(n=t.match(R))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.Tg)(t.slice(2));return[n,e]}let L=0;const P=Promise.resolve(),V=()=>L||(P.then((()=>L=0)),L=Date.now());function F(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.qL)(U(t,n.value),e,5,[t])};return n.value=t,n.attached=V(),n}function U(t,e){if((0,r.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const B=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,j=(t,e,n,i,s,o)=>{const a="svg"===s;"class"===e?g(t,i,a):"style"===e?w(t,n,i):(0,r.Mp)(e)?(0,r.CP)(e)||O(t,e,n,i,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):$(t,e,i,a))?(x(t,e,i),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||I(t,e,i,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,r.Kg)(i)?("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),I(t,e,i,a)):x(t,(0,r.PT)(e),i,o,e)};function $(t,e,n,i){if(i)return"innerHTML"===e||"textContent"===e||!!(e in t&&B(e)&&(0,r.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!B(e)||!(0,r.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const H=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.cy)(e)?t=>(0,r.DY)(e,t):e};function K(t){t.target.composing=!0}function G(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const z=Symbol("_assign"),q={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[z]=H(s);const o=i||s.props&&"number"===s.props.type;D(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.bB)(i)),t[z](i)})),n&&D(t,"change",(()=>{t.value=t.value.trim()})),e||(D(t,"compositionstart",K),D(t,"compositionend",G),D(t,"change",G))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},a){if(t[z]=H(a),t.composing)return;const l=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,r.bB)(t.value),c=null==e?"":e;if(l!==c){if(document.activeElement===t&&"range"!==t.type){if(i&&e===n)return;if(s&&t.value.trim()===c)return}t.value=c}}};const X=["ctrl","shift","alt","meta"],W={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>X.some((n=>t[`${n}Key`]&&!e.includes(n)))},Q=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(n,...i)=>{for(let t=0;t<e.length;t++){const i=W[e[t]];if(i&&i(n,e))return}return t(n,...i)})},Y=(0,r.X$)({patchProp:j},f);let Z;function J(){return Z||(Z=(0,i.K9)(Y))}const tt=(...t)=>{const e=J().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=nt(t);if(!i)return;const s=e._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,et(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function et(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function nt(t){if((0,r.Kg)(t)){const e=document.querySelector(t);return e}return t}},144:(t,e,n)=>{n.d(e,{C4:()=>S,EW:()=>Rt,Gc:()=>yt,IG:()=>Ct,Kh:()=>mt,Pr:()=>Nt,R1:()=>Dt,Tm:()=>Et,X2:()=>c,a1:()=>It,bl:()=>C,fE:()=>_t,g8:()=>wt,hV:()=>Ut,hZ:()=>P,i9:()=>xt,ju:()=>Tt,lJ:()=>At,qA:()=>F,u4:()=>L,ux:()=>St,wB:()=>Ft,yC:()=>o});var i=n(232);
/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let r,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=r,!t&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=r;try{return r=this,t()}finally{r=e}}else 0}on(){1===++this._on&&(this.prevScope=r,r=this)}off(){this._on>0&&0===--this._on&&(r=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return r}const l=new WeakSet;class c{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,r&&r.active&&r.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||d(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,A(this),m(this);const t=s,e=_;s=this,_=!0;try{return this.fn()}finally{0,y(this),s=t,_=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)w(t);this.deps=this.depsTail=void 0,A(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let u,h,f=0;function d(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=u,u=t}function p(){f++}function g(){if(--f>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(u){let n=u;u=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=i}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,i=n;while(i){const t=i.prevDep;-1===i.version?(i===n&&(n=t),w(i),E(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=t}t.deps=e,t.depsTail=n}function v(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(b(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function b(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===I)return;if(t.globalVersion=I,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!v(t)))return;t.flags|=2;const e=t.dep,n=s,r=_;s=t,_=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,i.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,_=r,y(t),t.flags&=-3}}function w(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)w(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function E(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _=!0;const T=[];function S(){T.push(_),_=!1}function C(){const t=T.pop();_=void 0===t||t}function A(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let I=0;class x{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class D{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!s||!_||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new x(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,k(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,I++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function k(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)k(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const N=new WeakMap,O=Symbol(""),R=Symbol(""),M=Symbol("");function L(t,e,n){if(_&&s){let e=N.get(t);e||N.set(t,e=new Map);let i=e.get(n);i||(e.set(n,i=new D),i.map=e,i.key=n),i.track()}}function P(t,e,n,r,s,o){const a=N.get(t);if(!a)return void I++;const l=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(l);else{const s=(0,i.cy)(t),o=s&&(0,i.yI)(n);if(s&&"length"===n){const t=Number(r);a.forEach(((e,n)=>{("length"===n||n===M||!(0,i.Bm)(n)&&n>=t)&&l(e)}))}else switch((void 0!==n||a.has(void 0))&&l(a.get(n)),o&&l(a.get(M)),e){case"add":s?o&&l(a.get("length")):(l(a.get(O)),(0,i.CE)(t)&&l(a.get(R)));break;case"delete":s||(l(a.get(O)),(0,i.CE)(t)&&l(a.get(R)));break;case"set":(0,i.CE)(t)&&l(a.get(O));break}}g()}function V(t){const e=St(t);return e===t?e:(L(e,"iterate",M),_t(t)?e:e.map(At))}function F(t){return L(t=St(t),"iterate",M),t}const U={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,At)},concat(...t){return V(this).concat(...t.map((t=>(0,i.cy)(t)?V(t):t)))},entries(){return B(this,"entries",(t=>(t[1]=At(t[1]),t)))},every(t,e){return $(this,"every",t,e,void 0,arguments)},filter(t,e){return $(this,"filter",t,e,(t=>t.map(At)),arguments)},find(t,e){return $(this,"find",t,e,At,arguments)},findIndex(t,e){return $(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return $(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $(this,"forEach",t,e,void 0,arguments)},includes(...t){return K(this,"includes",t)},indexOf(...t){return K(this,"indexOf",t)},join(t){return V(this).join(t)},lastIndexOf(...t){return K(this,"lastIndexOf",t)},map(t,e){return $(this,"map",t,e,void 0,arguments)},pop(){return G(this,"pop")},push(...t){return G(this,"push",t)},reduce(t,...e){return H(this,"reduce",t,e)},reduceRight(t,...e){return H(this,"reduceRight",t,e)},shift(){return G(this,"shift")},some(t,e){return $(this,"some",t,e,void 0,arguments)},splice(...t){return G(this,"splice",t)},toReversed(){return V(this).toReversed()},toSorted(t){return V(this).toSorted(t)},toSpliced(...t){return V(this).toSpliced(...t)},unshift(...t){return G(this,"unshift",t)},values(){return B(this,"values",At)}};function B(t,e,n){const i=F(t),r=i[e]();return i===t||_t(t)||(r._next=r.next,r.next=()=>{const t=r._next();return t.value&&(t.value=n(t.value)),t}),r}const j=Array.prototype;function $(t,e,n,i,r,s){const o=F(t),a=o!==t&&!_t(t),l=o[e];if(l!==j[e]){const e=l.apply(t,s);return a?At(e):e}let c=n;o!==t&&(a?c=function(e,i){return n.call(this,At(e),i,t)}:n.length>2&&(c=function(e,i){return n.call(this,e,i,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function H(t,e,n,i){const r=F(t);let s=n;return r!==t&&(_t(t)?n.length>3&&(s=function(e,i,r){return n.call(this,e,i,r,t)}):s=function(e,i,r){return n.call(this,e,At(i),r,t)}),r[e](s,...i)}function K(t,e,n){const i=St(t);L(i,"iterate",M);const r=i[e](...n);return-1!==r&&!1!==r||!Tt(n[0])?r:(n[0]=St(n[0]),i[e](...n))}function G(t,e,n=[]){S(),p();const i=St(t)[e].apply(t,n);return g(),C(),i}const z=(0,i.pD)("__proto__,__v_isRef,__isVue"),q=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(i.Bm));function X(t){(0,i.Bm)(t)||(t=String(t));const e=St(this);return L(e,"has",t),e.hasOwnProperty(t)}class W{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!r;if("__v_isReadonly"===e)return r;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(r?s?dt:ft:s?ht:ut).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,i.cy)(t);if(!r){let t;if(o&&(t=U[e]))return t;if("hasOwnProperty"===e)return X}const a=Reflect.get(t,e,xt(t)?t:n);return((0,i.Bm)(e)?q.has(e):z(e))?a:(r||L(t,"get",e),s?a:xt(a)?o&&(0,i.yI)(e)?a:a.value:(0,i.Gv)(a)?r?vt(a):mt(a):a)}}class Q extends W{constructor(t=!1){super(!1,t)}set(t,e,n,r){let s=t[e];if(!this._isShallow){const e=Et(s);if(_t(n)||Et(n)||(s=St(s),n=St(n)),!(0,i.cy)(t)&&xt(s)&&!xt(n))return!e&&(s.value=n,!0)}const o=(0,i.cy)(t)&&(0,i.yI)(e)?Number(e)<t.length:(0,i.$3)(t,e),a=Reflect.set(t,e,n,xt(t)?t:r);return t===St(r)&&(o?(0,i.$H)(n,s)&&P(t,"set",e,n,s):P(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,i.$3)(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&P(t,"delete",e,void 0,r),s}has(t,e){const n=Reflect.has(t,e);return(0,i.Bm)(e)&&q.has(e)||L(t,"has",e),n}ownKeys(t){return L(t,"iterate",(0,i.cy)(t)?"length":O),Reflect.ownKeys(t)}}class Y extends W{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Z=new Q,J=new Y,tt=new Q(!0),et=t=>t,nt=t=>Reflect.getPrototypeOf(t);function it(t,e,n){return function(...r){const s=this["__v_raw"],o=St(s),a=(0,i.CE)(o),l="entries"===t||t===Symbol.iterator&&a,c="keys"===t&&a,u=s[t](...r),h=n?et:e?It:At;return!e&&L(o,"iterate",c?R:O),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:l?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function st(t,e){const n={get(n){const r=this["__v_raw"],s=St(r),o=St(n);t||((0,i.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=nt(s),l=e?et:t?It:At;return a.call(s,n)?l(r.get(n)):a.call(s,o)?l(r.get(o)):void(r!==s&&r.get(n))},get size(){const e=this["__v_raw"];return!t&&L(St(e),"iterate",O),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],r=St(n),s=St(e);return t||((0,i.$H)(e,s)&&L(r,"has",e),L(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,i){const r=this,s=r["__v_raw"],o=St(s),a=e?et:t?It:At;return!t&&L(o,"iterate",O),s.forEach(((t,e)=>n.call(i,a(t),a(e),r)))}};(0,i.X$)(n,t?{add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear")}:{add(t){e||_t(t)||Et(t)||(t=St(t));const n=St(this),i=nt(n),r=i.has.call(n,t);return r||(n.add(t),P(n,"add",t,t)),this},set(t,n){e||_t(n)||Et(n)||(n=St(n));const r=St(this),{has:s,get:o}=nt(r);let a=s.call(r,t);a||(t=St(t),a=s.call(r,t));const l=o.call(r,t);return r.set(t,n),a?(0,i.$H)(n,l)&&P(r,"set",t,n,l):P(r,"add",t,n),this},delete(t){const e=St(this),{has:n,get:i}=nt(e);let r=n.call(e,t);r||(t=St(t),r=n.call(e,t));const s=i?i.call(e,t):void 0,o=e.delete(t);return r&&P(e,"delete",t,void 0,s),o},clear(){const t=St(this),e=0!==t.size,n=void 0,i=t.clear();return e&&P(t,"clear",void 0,void 0,n),i}});const r=["keys","values","entries",Symbol.iterator];return r.forEach((i=>{n[i]=it(i,t,e)})),n}function ot(t,e){const n=st(t,e);return(e,r,s)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get((0,i.$3)(n,r)&&r in e?n:e,r,s)}const at={get:ot(!1,!1)},lt={get:ot(!1,!0)},ct={get:ot(!0,!1)};const ut=new WeakMap,ht=new WeakMap,ft=new WeakMap,dt=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt((0,i.Zf)(t))}function mt(t){return Et(t)?t:bt(t,!1,Z,at,ut)}function yt(t){return bt(t,!1,tt,lt,ht)}function vt(t){return bt(t,!0,J,ct,ft)}function bt(t,e,n,r,s){if(!(0,i.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=gt(t);if(0===o)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,2===o?r:n);return s.set(t,l),l}function wt(t){return Et(t)?wt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function _t(t){return!(!t||!t["__v_isShallow"])}function Tt(t){return!!t&&!!t["__v_raw"]}function St(t){const e=t&&t["__v_raw"];return e?St(e):t}function Ct(t){return!(0,i.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,i.yQ)(t,"__v_skip",!0),t}const At=t=>(0,i.Gv)(t)?mt(t):t,It=t=>(0,i.Gv)(t)?vt(t):t;function xt(t){return!!t&&!0===t["__v_isRef"]}function Dt(t){return xt(t)?t.value:t}const kt={get:(t,e,n)=>"__v_raw"===e?t:Dt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return xt(r)&&!xt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Nt(t){return wt(t)?t:new Proxy(t,kt)}class Ot{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new D(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=I-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return d(this,!0),!0}get value(){const t=this.dep.track();return b(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Rt(t,e,n=!1){let r,s;(0,i.Tn)(t)?r=t:(r=t.get,s=t.set);const o=new Ot(r,s,n);return o}const Mt={},Lt=new WeakMap;let Pt;function Vt(t,e=!1,n=Pt){if(n){let e=Lt.get(n);e||Lt.set(n,e=[]),e.push(t)}else 0}function Ft(t,e,n=i.MZ){const{immediate:r,deep:s,once:o,scheduler:l,augmentJob:u,call:h}=n,f=t=>s?t:_t(t)||!1===s||0===s?Ut(t,1):Ut(t);let d,p,g,m,y=!1,v=!1;if(xt(t)?(p=()=>t.value,y=_t(t)):wt(t)?(p=()=>f(t),y=!0):(0,i.cy)(t)?(v=!0,y=t.some((t=>wt(t)||_t(t))),p=()=>t.map((t=>xt(t)?t.value:wt(t)?f(t):(0,i.Tn)(t)?h?h(t,2):t():void 0))):p=(0,i.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){S();try{g()}finally{C()}}const e=Pt;Pt=d;try{return h?h(t,3,[m]):t(m)}finally{Pt=e}}:i.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>Ut(t(),e)}const b=a(),w=()=>{d.stop(),b&&b.active&&(0,i.TF)(b.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),w()}}let E=v?new Array(t.length).fill(Mt):Mt;const _=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(s||y||(v?t.some(((t,e)=>(0,i.$H)(t,E[e]))):(0,i.$H)(t,E))){g&&g();const n=Pt;Pt=d;try{const n=[t,E===Mt?void 0:v&&E[0]===Mt?[]:E,m];E=t,h?h(e,3,n):e(...n)}finally{Pt=n}}}else d.run()};return u&&u(_),d=new c(p),d.scheduler=l?()=>l(_,!1):_,m=t=>Vt(t,!1,d),g=d.onStop=()=>{const t=Lt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();Lt.delete(d)}},e?r?_(!0):E=d.run():l?l(_.bind(null,!0),!0):d.run(),w.pause=d.pause.bind(d),w.resume=d.resume.bind(d),w.stop=w,w}function Ut(t,e=1/0,n){if(e<=0||!(0,i.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,xt(t))Ut(t.value,e,n);else if((0,i.cy)(t))for(let i=0;i<t.length;i++)Ut(t[i],e,n);else if((0,i.vM)(t)||(0,i.CE)(t))t.forEach((t=>{Ut(t,e,n)}));else if((0,i.Qd)(t)){for(const i in t)Ut(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ut(t[i],e,n)}return t}},232:(t,e,n)=>{
/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}n.d(e,{$3:()=>d,$H:()=>V,BH:()=>G,BX:()=>nt,Bm:()=>E,C4:()=>Y,CE:()=>g,CP:()=>c,DY:()=>F,Gv:()=>_,J$:()=>J,Kg:()=>w,MZ:()=>r,Mp:()=>l,NO:()=>a,Oj:()=>s,PT:()=>O,Qd:()=>I,Ro:()=>j,SU:()=>D,TF:()=>h,Tg:()=>M,Tn:()=>b,Tr:()=>z,We:()=>H,X$:()=>u,Y2:()=>tt,ZH:()=>L,Zf:()=>A,bB:()=>B,cy:()=>p,gd:()=>v,pD:()=>i,rU:()=>P,tE:()=>o,u3:()=>it,vM:()=>m,v_:()=>st,yI:()=>x,yL:()=>T,yQ:()=>U});const r={},s=[],o=()=>{},a=()=>!1,l=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),c=t=>t.startsWith("onUpdate:"),u=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===C(t),m=t=>"[object Set]"===C(t),y=t=>"[object Date]"===C(t),v=t=>"[object RegExp]"===C(t),b=t=>"function"===typeof t,w=t=>"string"===typeof t,E=t=>"symbol"===typeof t,_=t=>null!==t&&"object"===typeof t,T=t=>(_(t)||b(t))&&b(t.then)&&b(t.catch),S=Object.prototype.toString,C=t=>S.call(t),A=t=>C(t).slice(8,-1),I=t=>"[object Object]"===C(t),x=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,D=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},N=/-(\w)/g,O=k((t=>t.replace(N,((t,e)=>e?e.toUpperCase():"")))),R=/\B([A-Z])/g,M=k((t=>t.replace(R,"-$1").toLowerCase())),L=k((t=>t.charAt(0).toUpperCase()+t.slice(1))),P=k((t=>{const e=t?`on${L(t)}`:"";return e})),V=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},U=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},B=t=>{const e=parseFloat(t);return isNaN(e)?t:e},j=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const H=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const K="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",G=i(K);function z(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=w(i)?Q(i):z(i);if(r)for(const t in r)e[t]=r[t]}return e}if(w(t)||_(t))return t}const q=/;(?![^(]*\))/g,X=/:([^]+)/,W=/\/\*[^]*?\*\//g;function Q(t){const e={};return t.replace(W,"").split(q).forEach((t=>{if(t){const n=t.split(X);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const i=Y(t[n]);i&&(e+=i+" ")}else if(_(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J=i(Z);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=nt(t[i],e[i]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),i=y(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=E(t),i=E(e),n||i)return t===e;if(n=p(t),i=p(e),n||i)return!(!n||!i)&&et(t,e);if(n=_(t),i=_(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const n in t){const i=t.hasOwnProperty(n),r=e.hasOwnProperty(n);if(i&&!r||!i&&r||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function it(t,e){return t.findIndex((t=>nt(t,e)))}const rt=t=>!(!t||!0!==t["__v_isRef"]),st=t=>w(t)?t:null==t?"":p(t)||_(t)&&(t.toString===S||!b(t.toString))?rt(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>rt(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],i)=>(t[at(e,i)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:E(e)?at(e):!_(e)||p(e)||I(e)?e:String(e),at=(t,e="")=>{var n;return E(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},241:(t,e)=>{e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n}},363:(t,e,n)=>{n.d(e,{$b:()=>r,Vy:()=>c});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},400:(t,e,n)=>{n.d(e,{Wp:()=>i.Wp});var i=n(405),r="firebase",s="11.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(r,s,"app")},405:(t,e,n)=>{n.d(e,{MF:()=>bt,j6:()=>pt,xZ:()=>gt,om:()=>dt,Sx:()=>Et,Wp:()=>wt,KO:()=>_t});var i=n(852),r=n(363),s=n(774);const o=(t,e)=>e.some((e=>t instanceof e));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(_(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){v=t(v)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const i=t.call(T(this),e,...n);return d.set(i,e.sort?e.sort():[e]),_(i)}}function E(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&y(t),o(t,c())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=_(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(_(o.result),t.oldVersion,t.newVersion,_(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],I=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=A.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!C.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return I.set(e,s),s}b((t=>({...t,get:(e,n,i)=>x(e,n)||t.get(e,n,i),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",O="0.13.1",R=new r.Vy("@firebase/app"),M="@firebase/app-compat",L="@firebase/analytics-compat",P="@firebase/analytics",V="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/data-connect",H="@firebase/database-compat",K="@firebase/functions",G="@firebase/functions-compat",z="@firebase/installations",q="@firebase/installations-compat",X="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",Z="@firebase/remote-config",J="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",it="@firebase/ai",rt="@firebase/firestore-compat",st="firebase",ot="11.9.0",at="[DEFAULT]",lt={[N]:"fire-core",[M]:"fire-core-compat",[P]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[V]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-data-connect",[H]:"fire-rtdb-compat",[K]:"fire-fn",[G]:"fire-fn-compat",[z]:"fire-iid",[q]:"fire-iid-compat",[X]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[Z]:"fire-rc",[J]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[rt]:"fire-fst-compat",[it]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ct=new Map,ut=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ct.values())ft(n,t);for(const n of ut.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new s.FA("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt=ot;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:at,automaticDataCollectionEnabled:!0},e),o=r.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw yt.create("no-options");const a=ct.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const l=new i.h1(o);for(const i of ht.values())l.addComponent(i);const c=new vt(n,r,l);return ct.set(o,c),c}function Et(t=at){const e=ct.get(t);if(!e&&t===at&&(0,s.T9)())return wt();if(!e)throw yt.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let s=null!==(r=lt[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}dt(new i.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="firebase-heartbeat-database",St=1,Ct="firebase-heartbeat-store";let At=null;function It(){return At||(At=S(Tt,St,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ct)}catch(n){console.warn(n)}}}}).catch((t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})}))),At}async function xt(t){try{const e=await It(),n=e.transaction(Ct),i=await n.objectStore(Ct).get(kt(t));return await n.done,i}catch(e){if(e instanceof s.g)R.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});R.warn(t.message)}}}async function Dt(t,e){try{const n=await It(),i=n.transaction(Ct,"readwrite"),r=i.objectStore(Ct);await r.put(e,kt(t)),await i.done}catch(n){if(n instanceof s.g)R.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1024,Ot=30;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Mt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ot){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){R.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Mt(),{heartbeatsToSend:n,unsentEntries:i}=Lt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return R.warn(e),""}}}function Mt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=Nt){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Vt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Vt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Pt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await xt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Vt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){dt(new i.uA("platform-logger",(t=>new D(t)),"PRIVATE")),dt(new i.uA("heartbeat",(t=>new Rt(t)),"PRIVATE")),_t(N,O,t),_t(N,O,"esm2017"),_t("fire-js","")}Ut("")},617:(t,e,n)=>{n.d(e,{aU:()=>Jr});var i,r=n(405),s=n(852),o=n(363),a=n(774),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function s(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function o(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function a(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},r.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.B,r=this.h,o=0;o<e;){if(0==r)for(;o<=n;)s(this,t,o),o+=this.blockSize;if("string"===typeof t){for(;o<e;)if(i[r++]=t.charCodeAt(o++),r==this.blockSize){s(this,i),r=0;break}}else for(;o<e;)if(i[r++]=t[o++],r==this.blockSize){s(this,i),r=0;break}}this.h=r,this.o+=e},r.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var l={};function u(t){return-128<=t&&128>t?o(t,(function(t){return new a([0|t],0>t?-1:0)})):new a([0|t],0>t?-1:0)}function h(t){if(isNaN(t)||!isFinite(t))return d;if(0>t)return v(h(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new a(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return v(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(e,8)),i=d,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=h(Math.pow(e,s)),i=i.j(s).add(h(o))):(i=i.j(n),i=i.add(h(o)))}return i}var d=u(0),p=u(1),g=u(16777216);function m(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function v(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new a(n,~t.h).add(p)}function b(t,e){return t.add(v(e))}function w(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function _(t,e){if(m(e))throw Error("division by zero");if(m(t))return new E(d,d);if(y(t))return e=_(v(t),e),new E(v(e.g),v(e.h));if(y(e))return e=_(t,v(e)),new E(v(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=p,i=e;0>=i.l(t);)n=T(n),i=T(i);var r=S(n,1),s=S(i,1);for(i=S(i,2),n=S(n,2);!m(i);){var o=s.add(i);0>=o.l(t)&&(r=r.add(n),s=o),i=S(i,1),n=S(n,1)}return e=b(t,r.j(e)),new E(r,e)}for(r=d;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=h(n),o=s.j(e);y(o)||0<o.l(t);)n-=i,s=h(n),o=s.j(e);m(s)&&(s=p),r=r.add(s),t=b(t,o)}return new E(r,t)}function T(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new a(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new a(r,t.h)}t=a.prototype,t.m=function(){if(y(this))return-v(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.i(n);t+=(0<=i?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(m(this))return"0";if(y(this))return"-"+v(this).toString(t);for(var e=h(Math.pow(t,6)),n=this,i="";;){var r=_(n,e).g;n=b(n,r.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,m(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),y(t)?-1:m(t)?0:1},t.abs=function(){return y(this)?v(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.i(r))+(65535&t.i(r)),o=(s>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new a(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(m(this)||m(t))return d;if(y(this))return y(t)?v(this).j(v(t)):v(v(this).j(t));if(y(t))return v(this.j(v(t)));if(0>this.l(g)&&0>t.l(g))return h(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.i(i)>>>16,o=65535&this.i(i),l=t.i(r)>>>16,c=65535&t.i(r);n[2*i+2*r]+=o*c,w(n,2*i+2*r),n[2*i+2*r+1]+=s*c,w(n,2*i+2*r+1),n[2*i+2*r+1]+=o*l,w(n,2*i+2*r+1),n[2*i+2*r+2]+=s*l,w(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new a(n,0)},t.A=function(t){return _(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new a(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new a(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new a(n,this.h^t.h)},r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,i=c.Integer=a}).apply("undefined"!==typeof l?l:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var u,h,f,d,p,g,m,y,v="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},b={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof v&&v];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var i=n(this);function r(t,n){if(n)t:{var r=i;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in r))break t;r=r[o]}t=t[t.length-1],s=r[t],n=n(s),n!=s&&null!=n&&e(r,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,i=!1,r={next:function(){if(!i&&n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}r("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function l(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function c(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function w(t,e,n){return t.call.apply(t.bind,arguments)}function E(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:E,_.apply(null,arguments)}function T(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function S(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function A(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(l(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}class I{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function x(t){return/^[\s\xa0]*$/.test(t)}function D(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return k[" "](t),t}k[" "]=function(){};var N=-1!=D().indexOf("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&-1==D().indexOf("Edge"))&&!(-1!=D().indexOf("Trident")||-1!=D().indexOf("MSIE"))&&-1==D().indexOf("Edge");function O(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function R(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function V(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function F(t){a.setTimeout((()=>{throw t}),0)}function U(){var t=G;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class B{constructor(){this.h=this.g=null}add(t,e){const n=j.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var j=new I((()=>new $),(t=>t.reset()));class ${constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let H,K=!1,G=new B,z=()=>{const t=a.Promise.resolve(void 0);H=()=>{t.then(q)}};var q=()=>{for(var t;t=U();){try{t.h.call(t.g)}catch(n){F(n)}var e=j;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}K=!1};function X(){this.s=this.s,this.C=this.C}function W(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},W.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Y(t,e){if(W.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{k(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Z[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Y.aa.h.call(this)}}S(Y,W);var Z={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),tt=0;function et(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++tt,this.da=this.fa=!1}function nt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function it(t){this.src=t,this.g={},this.h=0}function rt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Array.prototype.indexOf.call(r,e,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(nt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function st(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}it.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=st(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new et(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var ot="closure_lm_"+(1e6*Math.random()|0),at={};function lt(t,e,n,i,r){if(i&&i.once)return ht(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,i,r);return null}return n=vt(n),t&&t[J]?t.K(e,n,c(i)?!!i.capture:!!i,r):ct(t,e,n,!1,i,r)}function ct(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=c(r)?!!r.capture:!!r,a=mt(t);if(a||(t[ot]=a=new it(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=ut(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Q||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(pt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ut(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}function ht(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ht(t,e[s],n,i,r);return null}return n=vt(n),t&&t[J]?t.L(e,n,c(i)?!!i.capture:!!i,r):ct(t,e,n,!0,i,r)}function ft(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ft(t,e[s],n,i,r);else i=c(i)?!!i.capture:!!i,n=vt(n),t&&t[J]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=st(s,n,i,r),-1<n&&(nt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=st(e,n,i,r)),(n=-1<t?e[t]:null)&&dt(n))}function dt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[J])rt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(pt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=mt(e))?(rt(n,t),0==n.h&&(n.src=null,e[ot]=null)):nt(t)}}}function pt(t){return t in at?at[t]:at[t]="on"+t}function gt(t,e){if(t.da)t=!0;else{e=new Y(e,this);var n=t.listener,i=t.ha||t.src;t.fa&&dt(t),t=n.call(i,e)}return t}function mt(t){return t=t[ot],t instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"===typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function bt(){X.call(this),this.i=new it(this),this.M=this,this.F=null}function wt(t,e){var n,i=t.F;if(i)for(n=[];i;i=i.F)n.push(i);if(t=t.M,i=e.type||e,"string"===typeof e)e=new W(e,t);else if(e instanceof W)e.target=e.target||t;else{var r=e;e=new W(i,t),P(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Et(o,i,!0,e)&&r}if(o=e.g=t,r=Et(o,i,!0,e)&&r,r=Et(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Et(o,i,!1,e)&&r}function Et(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&rt(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}function _t(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Tt(t){t.g=_t((()=>{t.g=null,t.i&&(t.i=!1,Tt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}S(bt,X),bt.prototype[J]=!0,bt.prototype.removeEventListener=function(t,e,n,i){ft(this,t,e,n,i)},bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)nt(n[i]);delete e.g[t],e.h--}}this.F=null},bt.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},bt.prototype.L=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class St extends X{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(t){X.call(this),this.h=t,this.g={}}S(Ct,X);var At=[];function It(t){O(t.g,(function(t,e){this.g.hasOwnProperty(e)&&dt(t)}),t),t.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),It(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xt=a.JSON.stringify,Dt=a.JSON.parse,kt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Ot(t){return t.h||(t.h=t.i())}function Rt(){}Nt.prototype.h=null;var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lt(){W.call(this,"d")}function Pt(){W.call(this,"c")}S(Lt,W),S(Pt,W);var Vt={},Ft=null;function Ut(){return Ft=Ft||new bt}function Bt(t){W.call(this,Vt.La,t)}function jt(t){const e=Ut();wt(e,new Bt(e))}function $t(t,e){W.call(this,Vt.STAT_EVENT,t),this.stat=e}function Ht(t){const e=Ut();wt(e,new $t(e,t))}function Kt(t,e){W.call(this,Vt.Ma,t),this.size=e}function Gt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function zt(){this.g=!0}function qt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Wt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(i?" "+i:"")}))}function Qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return xt(n)}catch(a){return e}}Vt.La="serverreachability",S(Bt,W),Vt.STAT_EVENT="statevent",S($t,W),Vt.Ma="timingevent",S(Kt,W),zt.prototype.xa=function(){this.g=!1},zt.prototype.info=function(){};var Zt,Jt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},te={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ee(){}function ne(t,e,n,i){this.j=t,this.i=e,this.l=n,this.R=i||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ie}function ie(){this.i=null,this.g="",this.h=!1}S(ee,Nt),ee.prototype.g=function(){return new XMLHttpRequest},ee.prototype.i=function(){return{}},Zt=new ee;var re={},se={};function oe(t,e,n){t.L=1,t.v=Le(ke(e)),t.m=n,t.P=!0,ae(t,null)}function ae(t,e){t.F=Date.now(),ue(t),t.A=ke(t.v);var n=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),Xe(n.i,"t",i),t.C=0,n=t.j.J,t.h=new ie,t.g=jn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new St(_(t.Y,t,t.g),t.O)),e=t.U,n=t.g,i=t.ca;var r="readystatechange";Array.isArray(r)||(r&&(At[0]=r.toString()),r=At);for(var s=0;s<r.length;s++){var o=lt(n,r[s],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?M(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),jt(),qt(t.i,t.u,t.A,t.l,t.R,t.m)}function le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function ce(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?se:(n=Number(e.substring(n,i)),isNaN(n)?re:(i+=1,i+n>e.length?se:(e=e.slice(i,i+n),t.C=i+n,e)))}function ue(t){t.S=Date.now()+t.I,he(t,t.I)}function he(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Gt(_(t.ba,t),e)}function fe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function de(t){0==t.j.G||t.J||Pn(t.j,t)}function pe(t){fe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,It(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ge(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||we(n.h,t)))if(!t.K&&we(n.h,t)&&3==n.G){try{var i=n.Da.g.parse(e)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ln(n),Sn(n)}On(n),Ht(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=Gt(_(n.Za,n),6e3));if(1>=be(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else Fn(n,11)}else if((t.K||n.g==t)&&Ln(n),!x(e))for(r=n.Da.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const e=c[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const r=c[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ee(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,Me(i.I,i.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),i=n;var o=t;if(i.qa=Bn(i,i.J?i.ia:null,i.W),o.K){_e(i.h,o);var a=o,l=i.L;l&&(a.I=l),a.B&&(fe(a),ue(a)),i.g=o}else Nn(i);0<n.i.length&&An(n)}else"stop"!=c[0]&&"close"!=c[0]||Fn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Fn(n,7):Tn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}jt(4)}catch(c){}}ne.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==vn(t)?e.j():this.Y(t)},ne.prototype.Y=function(t){try{if(t==this.g)t:{const f=vn(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=f||7==e||jt(8==e||0>=d?3:2),fe(this);var n=this.g.Z();this.X=n;e:if(le(this)){var i=bn(this.g);t="";var r=i.length,s=4==vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){pe(this),de(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:!(s&&e==r-1)});i.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Xt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(l)){var u=l;break e}}u=null}if(!(n=u)){this.o=!1,this.s=3,Ht(12),pe(this),de(this);break t}Wt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ge(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=ce(this,o),t==se){4==f&&(this.s=4,Ht(14),n=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}if(t==re){this.s=4,Ht(15),Wt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Wt(this.i,this.l,t,null),ge(this,t)}if(le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,Ht(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Rn(h),h.M=!0,Ht(11))}}else Wt(this.i,this.l,o,"[Invalid Chunked Response]"),pe(this),de(this)}else Wt(this.i,this.l,o,null),ge(this,o);4==f&&pe(this),this.o&&!this.J&&(4==f?Pn(this.j,this):(this.o=!1,ue(this)))}else wn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),pe(this),de(this)}}}catch(f){}},ne.prototype.cancel=function(){this.J=!0,pe(this)},ne.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Qt(this.i,this.A),2!=this.L&&(jt(),Ht(17)),pe(this),this.s=2,de(this)):he(this,this.S-t)};var me=class{constructor(t,e){this.g=t,this.map=e}};function ye(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ve(t){return!!t.h||!!t.g&&t.g.size>=t.j}function be(t){return t.h?1:t.g?t.g.size:0}function we(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ee(t,e){t.g?t.g.add(e):t.h=e}function _e(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function Se(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Ce(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(l(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ae(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ce(t),i=Se(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}ye.prototype.cancel=function(){if(this.i=Te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Ie=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function De(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof De){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,Oe(this,t.s),this.l=t.l;var e=t.i,n=new Ke;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Re(this,n),this.m=t.m}else t&&(e=String(t).match(Ie))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=Pe(e[2]||""),this.g=Pe(e[3]||"",!0),Oe(this,e[4]),this.l=Pe(e[5]||"",!0),Re(this,e[6]||"",!0),this.m=Pe(e[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}function ke(t){return new De(t)}function Ne(t,e,n){t.j=n?Pe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Re(t,e,n){e instanceof Ke?(t.i=e,Qe(t.i,t.h)):(n||(e=Ve(e,$e)),t.i=new Ke(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Le(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ve(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Fe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}De.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ve(e,Ue,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ve(e,Ue,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ve(n,"/"==n.charAt(0)?je:Be,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ve(n,He)),t.join("")};var Ue=/[#\/\?@]/g,Be=/[#\?:]/g,je=/[#\?]/g,$e=/[#\?@]/g,He=/#/g;function Ke(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ge(t){t.g||(t.g=new Map,t.h=0,t.i&&xe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ze(t,e){Ge(t),e=We(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qe(t,e){return Ge(t),e=We(t,e),t.g.has(e)}function Xe(t,e,n){ze(t,e),0<n.length&&(t.i=null,t.g.set(We(t,e),C(n)),t.h+=n.length)}function We(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Qe(t,e){e&&!t.j&&(Ge(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ze(this,e),Xe(this,n,t))}),t)),t.j=e}function Ye(t,e){const n=new zt;if(a.Image){const i=new Image;i.onload=T(Je,n,"TestLoadImage: loaded",!0,e,i),i.onerror=T(Je,n,"TestLoadImage: error",!1,e,i),i.onabort=T(Je,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=T(Je,n,"TestLoadImage: timeout",!1,e,i),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Ze(t,e){const n=new zt,i=new AbortController,r=setTimeout((()=>{i.abort(),Je(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:i.signal}).then((t=>{clearTimeout(r),t.ok?Je(n,"TestPingServer: ok",!0,e):Je(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(r),Je(n,"TestPingServer: error",!1,e)}))}function Je(t,e,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function tn(){this.g=new kt}function en(t,e,n){const i=n||"";try{Ae(t,(function(t,n){let r=t;c(t)&&(r=xt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function nn(t){this.l=t.Ub||null,this.j=t.eb||!1}function rn(t,e){bt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function sn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function on(t){t.readyState=4,t.l=null,t.j=null,t.v=null,an(t)}function an(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ln(t){let e="";return O(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function cn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ln(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Me(t,e,n))}function un(t){bt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Ke.prototype,t.add=function(t,e){Ge(this),this.i=null,t=We(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ge(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},t.na=function(){Ge(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},t.V=function(t){Ge(this);let e=[];if("string"===typeof t)qe(this,t)&&(e=e.concat(this.g.get(We(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ge(this),this.i=null,t=We(this,t),qe(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")},S(nn,Nt),nn.prototype.g=function(){return new rn(this.l,this.j)},nn.prototype.i=function(t){return function(){return t}}({}),S(rn,bt),t=rn.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,an(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?on(this):an(this),3==this.readyState&&sn(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,on(this))},t.Qa=function(t){this.g&&(this.response=t,on(this))},t.ga=function(){this.g&&on(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),S(un,bt);var hn=/^https?$/i,fn=["POST","PUT"];function dn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,pn(t),mn(t)}function pn(t){t.A||(t.A=!0,wt(t,"complete"),wt(t,"error"))}function gn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=vn(t)||2!=t.Z()))if(t.u&&4==vn(t))_t(t.Ea,0,t);else if(wt(t,"readystatechange"),4==vn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.D).match(Ie)[1]||null;!r&&a.self&&a.self.location&&(r=a.self.location.protocol.slice(0,-1)),i=!hn.test(r?r.toLowerCase():"")}n=i}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var s=2<vn(t)?t.g.statusText:""}catch(l){s=""}t.l=s+" ["+t.Z()+"]",pn(t)}}finally{mn(t)}}}function mn(t,e){if(t.g){yn(t);const i=t.g,r=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||wt(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function yn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function vn(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function wn(t){const e={};t=(t.g&&2<=vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(x(t[i]))continue;var n=V(t[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}R(e,(function(t){return t.join(", ")}))}function En(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _n(t){this.Aa=0,this.i=[],this.j=new zt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,t),this.cb=En("retryDelaySeedMs",1e4,t),this.Wa=En("forwardChannelMaxRetries",2,t),this.wa=En("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ye(t&&t.concurrentRequestLimit),this.Da=new tn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Tn(t){if(Cn(t),3==t.G){var e=t.U++,n=ke(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),Dn(t,n),e=new ne(t,t.j,e),e.L=2,e.v=Le(ke(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(i){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=jn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),ue(e)}Un(t)}function Sn(t){t.g&&(Rn(t),t.g.cancel(),t.g=null)}function Cn(t){Sn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Ln(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function An(t){if(!ve(t.h)&&!t.s){t.s=!0;var e=t.Ga;H||z(),K||(H(),K=!0),G.add(e,t),t.B=0}}function In(t,e){return!(be(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Gt(_(t.Ga,t,e),Vn(t,t.B)),t.B++,!0))}function xn(t,e){var n;n=e?e.l:t.U++;const i=ke(t.I);Me(i,"SID",t.K),Me(i,"RID",n),Me(i,"AID",t.T),Dn(t,i),t.m&&t.o&&cn(i,t.m,t.o),n=new ne(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=kn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ee(t.h,n),oe(n,i,e)}function Dn(t,e){t.H&&O(t.H,(function(t,n){Me(e,n,t)})),t.l&&Ae({},(function(t,n){Me(e,n,t)}))}function kn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?_(t.l.Na,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const l=r[a].map;if(n-=e,0>n)e=Math.max(0,r[a].g-100),o=!1;else try{en(l,t,"req"+n+"_")}catch(s){i&&i(l)}}if(o){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;H||z(),K||(H(),K=!0),G.add(e,t),t.v=0}}function On(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Gt(_(t.Fa,t),Vn(t,t.v)),t.v++,!0)}function Rn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Mn(t){t.g=new ne(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ke(t.qa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.T),Me(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Me(e,"TO",t.ja),Me(e,"TYPE","xmlhttp"),Dn(t,e),t.m&&t.o&&cn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Le(ke(e)),n.m=null,n.P=!0,ae(n,t)}function Ln(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Pn(t,e){var n=null;if(t.g==e){Ln(t),Rn(t),t.g=null;var i=2}else{if(!we(t.h,e))return;n=e.D,_e(t.h,e),i=1}if(0!=t.G)if(e.o)if(1==i){n=e.m?e.m.length:0,e=Date.now()-e.F;var r=t.B;i=Ut(),wt(i,new Kt(i,n)),An(t)}else Nn(t);else if(r=e.s,3==r||0==r&&0<e.X||!(1==i&&In(t,e)||2==i&&On(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}function Vn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Fn(t,e){if(t.j.info("Error code "+e),2==e){var n=_(t.fb,t),i=t.Xa;const e=!i;i=new De(i||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(i,"https"),Le(i),e?Ye(i.toString(),n):Ze(i.toString(),n)}else Ht(2);t.G=0,t.l&&t.l.sa(e),Un(t),Cn(t)}function Un(t){if(t.G=0,t.ka=[],t.l){const e=Te(t.h);0==e.length&&0==t.i.length||(A(t.ka,e),A(t.ka,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ra()}}function Bn(t,e,n){var i=n instanceof De?ke(n):new De(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Oe(i,i.s);else{var r=a.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new De(null);i&&Ne(s,i),e&&(s.g=e),r&&Oe(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.ya,n&&e&&Me(i,n,e),Me(i,"VER",t.la),Dn(t,i),i}function jn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new un(new nn({eb:n})):new un(t.pa),e.Ha(t.J),e}function $n(){}function Hn(){}function Kn(t,e){bt.call(this),this.g=new _n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!x(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qn(this)}function Gn(t){Lt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function zn(){Pt.call(this),this.status=1}function qn(t){this.g=t}t=un.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zt.g(),this.v=this.o?Ot(this.o):Ot(Zt),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void dn(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(fn,e,void 0))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yn(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){dn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),mn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),un.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gn(this):this.bb())},t.bb=function(){gn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Dt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=_n.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,i){Ht(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=Bn(this,null,this.W),An(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ne(this,this.j,t);let s=this.o;if(this.S&&(s?(s=M(s),P(s,this.S)):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=kn(this,r,e),n=ke(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Dn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ln(s)))+"&"+e:this.m&&cn(n,this.m,s)),Ee(this.h,r),this.Ua&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),r.T=!0,oe(r,n,null)):oe(r,n,e),this.G=2}}else 3==this.G&&(t?xn(this,t):0==this.i.length||ve(this.h)||xn(this))},t.Fa=function(){if(this.u=null,Mn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Gt(_(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),Sn(this),Mn(this))},t.Za=function(){null!=this.C&&(this.C=null,Sn(this),On(this),Ht(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=$n.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Hn.prototype.g=function(t,e){return new Kn(t,e)},S(Kn,bt),Kn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kn.prototype.close=function(){Tn(this.g)},Kn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=xt(t),t=n);e.i.push(new me(e.Ya++,t)),3==e.G&&An(e)},Kn.prototype.N=function(){this.g.l=null,delete this.j,Tn(this.g),delete this.g,Kn.aa.N.call(this)},S(Gn,Lt),S(zn,Pt),S(qn,$n),qn.prototype.ua=function(){wt(this.g,"a")},qn.prototype.ta=function(t){wt(this.g,new Gn(t))},qn.prototype.sa=function(t){wt(this.g,new zn)},qn.prototype.ra=function(){wt(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,Kn.prototype.send=Kn.prototype.o,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,y=b.createWebChannelTransport=function(){return new Hn},m=b.getStatEventTarget=function(){return Ut()},g=b.Event=Vt,p=b.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,d=b.ErrorCode=Jt,te.COMPLETE="complete",f=b.EventType=te,Rt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",bt.prototype.listen=bt.prototype.K,h=b.WebChannel=Rt,b.FetchXmlHttpFactory=nn,un.prototype.listenOnce=un.prototype.L,un.prototype.getLastError=un.prototype.Ka,un.prototype.getLastErrorCode=un.prototype.Ba,un.prototype.getStatus=un.prototype.Z,un.prototype.getResponseJson=un.prototype.Oa,un.prototype.getResponseText=un.prototype.oa,un.prototype.send=un.prototype.ea,un.prototype.setWithCredentials=un.prototype.Ha,u=b.XhrIo=un}).apply("undefined"!==typeof v?v:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const w="@firebase/firestore",E="4.7.17";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let T="11.9.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new o.Vy("@firebase/firestore");function C(){return S.logLevel}function A(t,...e){if(S.logLevel<=o.$b.DEBUG){const n=e.map(D);S.debug(`Firestore (${T}): ${t}`,...n)}}function I(t,...e){if(S.logLevel<=o.$b.ERROR){const n=e.map(D);S.error(`Firestore (${T}): ${t}`,...n)}}function x(t,...e){if(S.logLevel<=o.$b.WARN){const n=e.map(D);S.warn(`Firestore (${T}): ${t}`,...n)}}function D(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e,n){let i="Unexpected state";"string"==typeof e?i=e:n=e,N(t,i,n)}function N(t,e,n){let i=`FIRESTORE (${T}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{i+=" CONTEXT: "+JSON.stringify(n)}catch(t){i+=" CONTEXT: "+n}throw I(i),new Error(i)}function O(t,e,n,i){let r="Unexpected state";"string"==typeof n?r=n:i=n,t||N(e,r,i)}function R(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(_.UNAUTHENTICATED)))}shutdown(){}}class U{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class B{constructor(t){this.t=t,this.currentUser=_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){O(void 0===this.o,42304);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new P;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new P,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new P)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(O("string"==typeof e.accessToken,31837,{l:e}),new V(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return O(null===t||"string"==typeof t,2055,{h:t}),new _(t)}}class j{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ${constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new j(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(_.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class H{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,r.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){O(void 0===this.o,3512);const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?i(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new H(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(O("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new H(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e){return t<e?-1:t>e?1:0}function q(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=t.codePointAt(n),r=e.codePointAt(n);if(i!==r){if(i<128&&r<128)return z(i,r);{const s=G(),o=W(s.encode(X(t,n)),s.encode(X(e,n)));return 0!==o?o:z(i,r)}}n+=i>65535?2:1}return z(t.length,e.length)}function X(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function W(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return z(t[n],e[n]);return z(t.length,e.length)}function Q(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=-62135596800,Z=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Z);return new J(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Y)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Z}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Y;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{static fromTimestamp(t){return new tt(t)}static min(){return new tt(new J(0,0))}static max(){return new tt(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="__name__";class nt{constructor(t,e,n){void 0===e?e=0:e>t.length&&k(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&k(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===nt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nt?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=nt.compareSegments(t.get(i),e.get(i));if(0!==n)return n}return z(t.length,e.length)}static compareSegments(t,e){const n=nt.isNumericId(t),i=nt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?nt.extractNumericId(t).compare(nt.extractNumericId(e)):q(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return i.fromString(t.substring(4,t.length-2))}}class it extends nt{construct(t,e,n){return new it(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new it(e)}static emptyPath(){return new it([])}}const rt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends nt{construct(t,e,n){return new st(t,e,n)}static isValidIdentifier(t){return rt.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===et}static keyField(){return new st([et])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new L(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new L(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new L(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new L(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.path=t}static fromPath(t){return new ot(it.fromString(t))}static fromName(t){return new ot(it.fromString(t).popFirst(5))}static empty(){return new ot(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===it.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return it.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ot(new it(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=-1;class lt{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}lt.UNKNOWN_ID=-1;function ct(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=tt.fromTimestamp(1e9===i?new J(n+1,0):new J(n,i));return new ht(r,ot.empty(),e)}function ut(t){return new ht(t.readTime,t.key,at)}class ht{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ht(tt.min(),ot.empty(),at)}static max(){return new ht(tt.max(),ot.empty(),at)}}function ft(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ot.comparator(t.documentKey,e.documentKey),0!==n?n:z(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class dt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&k(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new pt(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof pt?e:pt.resolve(e)}catch(t){return pt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):pt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):pt.reject(e)}static resolve(t){return new pt(((e,n)=>{e(t)}))}static reject(t){return new pt(((e,n)=>{n(t)}))}static waitFor(t){return new pt(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=pt.resolve(!1);for(const n of t)e=e.next((t=>t?pt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new pt(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new pt(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mt(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ue(t),this.ce=t=>e.writeSequenceNumber(t))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}yt.le=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=-1;function bt(t){return null==t}function wt(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et="remoteDocuments",_t="owner",Tt="mutationQueues",St="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="documentMutations",At="remoteDocumentsV14",It="remoteDocumentGlobal",xt="targets",Dt="targetDocuments",kt="targetGlobal",Nt="collectionParents",Ot="clientMetadata",Rt="bundles",Mt="namedQueries",Lt="indexConfiguration",Pt="indexState",Vt="indexEntries",Ft="documentOverlays",Ut="globals",Bt=[Tt,St,Ct,Et,xt,_t,kt,Dt,Ot,It,Nt,Rt,Mt],jt=[Tt,St,Ct,At,xt,_t,kt,Dt,Ot,It,Nt,Rt,Mt,Ft],$t=jt,Ht=[...$t,Lt,Pt,Vt];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e){this.comparator=t,this.root=e||Wt.EMPTY}insert(t,e){return new qt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(t){return new qt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xt(this.root,t,this.comparator,!0)}}class Xt{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Wt{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Wt.RED,this.left=null!=i?i:Wt.EMPTY,this.right=null!=r?r:Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Wt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Wt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw k(43730,{key:this.key,value:this.value});if(this.right.isRed())throw k(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw k(27949);return t+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1,Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw k(57766)}get value(){throw k(16141)}get color(){throw k(16727)}get left(){throw k(29726)}get right(){throw k(36894)}copy(t,e,n,i,r){return this}insert(t,e,n){return new Wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t){this.comparator=t,this.data=new qt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Yt(this.data.getIterator())}getIteratorFrom(t){return new Yt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Qt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Qt(this.comparator);return e.data=t,e}}class Yt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new Zt([])}unionWith(t){let e=new Qt(st.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Q(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Jt("Invalid base64 string: "+t):t}}(t);return new te(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new te(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}te.EMPTY_BYTE_STRING=new te("");const ee=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(t){if(O(!!t,39018),"string"==typeof t){let e=0;const n=ee.exec(t);if(O(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ie(t.seconds),nanos:ie(t.nanos)}}function ie(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function re(t){return"string"==typeof t?te.fromBase64String(t):te.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="server_timestamp",oe="__type__",ae="__previous_value__",le="__local_write_time__";function ce(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[oe])||void 0===n?void 0:n.stringValue)===se}function ue(t){const e=t.mapValue.fields[ae];return ce(e)?ue(e):e}function he(t){const e=ne(t.mapValue.fields[le].timestampValue);return new J(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="(default)";class de{constructor(t,e){this.projectId=t,this.database=e||fe}static empty(){return new de("","")}get isDefaultDatabase(){return this.database===fe}isEqual(t){return t instanceof de&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="__type__",ge="__max__",me={mapValue:{fields:{__type__:{stringValue:ge}}}},ye="__vector__",ve="value";function be(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ce(t)?4:Oe(t)?9007199254740991:ke(t)?10:11:k(28295,{value:t})}function we(t,e){if(t===e)return!0;const n=be(t);if(n!==be(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return he(t).isEqual(he(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ne(t.timestampValue),i=ne(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return re(t.bytesValue).isEqual(re(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ie(t.geoPointValue.latitude)===ie(e.geoPointValue.latitude)&&ie(t.geoPointValue.longitude)===ie(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ie(t.integerValue)===ie(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ie(t.doubleValue),i=ie(e.doubleValue);return n===i?wt(n)===wt(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Q(t.arrayValue.values||[],e.arrayValue.values||[],we);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Kt(n)!==Kt(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!we(n[r],i[r])))return!1;return!0}(t,e);default:return k(52216,{left:t})}}function Ee(t,e){return void 0!==(t.values||[]).find((t=>we(t,e)))}function _e(t,e){if(t===e)return 0;const n=be(t),i=be(e);if(n!==i)return z(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return z(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ie(t.integerValue||t.doubleValue),i=ie(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Te(t.timestampValue,e.timestampValue);case 4:return Te(he(t),he(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(t,e){const n=re(t),i=re(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=z(n[r],i[r]);if(0!==t)return t}return z(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=z(ie(t.latitude),ie(e.latitude));return 0!==n?n:z(ie(t.longitude),ie(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Se(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,i,r,s;const o=t.fields||{},a=e.fields||{},l=null===(n=o[ve])||void 0===n?void 0:n.arrayValue,c=null===(i=a[ve])||void 0===i?void 0:i.arrayValue,u=z((null===(r=null==l?void 0:l.values)||void 0===r?void 0:r.length)||0,(null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:Se(l,c)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===me.mapValue&&e===me.mapValue)return 0;if(t===me.mapValue)return 1;if(e===me.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=q(i[o],s[o]);if(0!==t)return t;const e=_e(n[i[o]],r[s[o]]);if(0!==e)return e}return z(i.length,s.length)}(t.mapValue,e.mapValue);default:throw k(23264,{Pe:n})}}function Te(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return z(t,e);const n=ne(t),i=ne(e),r=z(n.seconds,i.seconds);return 0!==r?r:z(n.nanos,i.nanos)}function Se(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=_e(n[r],i[r]);if(t)return t}return z(n.length,i.length)}function Ce(t){return Ae(t)}function Ae(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ne(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return re(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ot.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Ae(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Ae(t.fields[r])}`;return n+"}"}(t.mapValue):k(61005,{value:t})}function Ie(t){return!!t&&"integerValue"in t}function xe(t){return!!t&&"arrayValue"in t}function De(t){return!!t&&"mapValue"in t}function ke(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[pe])||void 0===n?void 0:n.stringValue)===ye}function Ne(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ne(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ne(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Oe(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ge}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(t){this.value=t}static empty(){return new Re({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!De(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ne(e)}setAll(t){let e=st.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Ne(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());De(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return we(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];De(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Gt(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Re(Ne(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Me(t,0,tt.min(),tt.min(),tt.min(),Re.empty(),0)}static newFoundDocument(t,e,n,i){return new Me(t,1,e,tt.min(),n,i,0)}static newNoDocument(t,e){return new Me(t,2,e,tt.min(),tt.min(),Re.empty(),0)}static newUnknownDocument(t,e){return new Me(t,3,e,tt.min(),tt.min(),Re.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(tt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Me&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e){this.position=t,this.inclusive=e}}function Pe(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?ot.comparator(ot.fromName(o.referenceValue),n.key):_e(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ve(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!we(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ue(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{}class je extends Be{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new We(t,e,n):"array-contains"===e?new Je(t,n):"in"===e?new tn(t,n):"not-in"===e?new en(t,n):"array-contains-any"===e?new nn(t,n):new je(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Qe(t,n):new Ye(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(_e(e,this.value)):null!==e&&be(this.value)===be(e)&&this.matchesComparison(_e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return k(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Be{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new $e(t,e)}matches(t){return He(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function He(t){return"and"===t.op}function Ke(t){return Ge(t)&&He(t)}function Ge(t){for(const e of t.filters)if(e instanceof $e)return!1;return!0}function ze(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Ce(t.value);if(Ke(t))return t.filters.map((t=>ze(t))).join(",");{const e=t.filters.map((t=>ze(t))).join(",");return`${t.op}(${e})`}}function qe(t,e){return t instanceof je?function(t,e){return e instanceof je&&t.op===e.op&&t.field.isEqual(e.field)&&we(t.value,e.value)}(t,e):t instanceof $e?function(t,e){return e instanceof $e&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&qe(n,e.filters[i])),!0)}(t,e):void k(19439)}function Xe(t){return t instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${Ce(t.value)}`}(t):t instanceof $e?function(t){return t.op.toString()+" {"+t.getFilters().map(Xe).join(" ,")+"}"}(t):"Filter"}class We extends je{constructor(t,e,n){super(t,e,n),this.key=ot.fromName(n.referenceValue)}matches(t){const e=ot.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qe extends je{constructor(t,e){super(t,"in",e),this.keys=Ze("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ye extends je{constructor(t,e){super(t,"not-in",e),this.keys=Ze("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ze(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ot.fromName(t.referenceValue)))}class Je extends je{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xe(e)&&Ee(e.arrayValue,this.value)}}class tn extends je{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ee(this.value.arrayValue,e)}}class en extends je{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ee(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Ee(this.value.arrayValue,e)}}class nn extends je{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xe(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ee(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.Ie=null}}function sn(t,e=null,n=[],i=[],r=null,s=null,o=null){return new rn(t,e,n,i,r,s,o)}function on(t){const e=R(t);if(null===e.Ie){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ze(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),bt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ce(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ce(t))).join(",")),e.Ie=t}return e.Ie}function an(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ue(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qe(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ve(t.startAt,e.startAt)&&Ve(t.endAt,e.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function cn(t,e,n,i,r,s,o,a){return new ln(t,e,n,i,r,s,o,a)}function un(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function hn(t){return null!==t.collectionGroup}function fn(t){const e=R(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ee.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new Qt(st.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Fe(i,n))})),t.has(st.keyField().canonicalString())||e.Ee.push(new Fe(st.keyField(),n))}return e.Ee}function dn(t){const e=R(t);return e.de||(e.de=pn(e,fn(t))),e.de}function pn(t,e){if("F"===t.limitType)return sn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Fe(t.field,e)}));const n=t.endAt?new Le(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Le(t.startAt.position,t.startAt.inclusive):null;return sn(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function gn(t,e,n){return new ln(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mn(t,e){return an(dn(t),dn(e))&&t.limitType===e.limitType}function yn(t){return`${on(dn(t))}|lt:${t.limitType}`}function vn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Xe(t))).join(", ")}]`),bt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ce(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ce(t))).join(",")),`Target(${e})`}(dn(t))}; limitType=${t.limitType})`}function bn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ot.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of fn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Pe(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,fn(t),e))&&!(t.endAt&&!function(t,e,n){const i=Pe(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,fn(t),e))}(t,e)}function wn(t){return(e,n)=>{let i=!1;for(const r of fn(t)){const t=En(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function En(t,e,n){const i=t.field.isKeyField()?ot.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?_e(i,r):k(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return k(19790,{direction:t.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Gt(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return zt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new qt(ot.comparator);function Sn(){return Tn}const Cn=new qt(ot.comparator);function An(...t){let e=Cn;for(const n of t)e=e.insert(n.key,n);return e}function In(t){let e=Cn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function xn(){return kn()}function Dn(){return kn()}function kn(){return new _n((t=>t.toString()),((t,e)=>t.isEqual(e)))}new qt(ot.comparator);const Nn=new Qt(ot.comparator);function On(...t){let e=Nn;for(const n of t)e=e.add(n);return e}const Rn=new Qt(z);function Mn(){return Rn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wt(e)?"-0":e}}function Pn(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this._=void 0}}function Fn(t,e,n){return t instanceof jn?function(t,e){const n={fields:{[oe]:{stringValue:se},[le]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ce(e)&&(e=ue(e)),e&&(n.fields[ae]=e),{mapValue:n}}(n,e):t instanceof $n?Hn(t,e):t instanceof Kn?Gn(t,e):function(t,e){const n=Bn(t,e),i=qn(n)+qn(t.Re);return Ie(n)&&Ie(t.Re)?Pn(i):Ln(t.serializer,i)}(t,e)}function Un(t,e,n){return t instanceof $n?Hn(t,e):t instanceof Kn?Gn(t,e):n}function Bn(t,e){return t instanceof zn?function(t){return Ie(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class jn extends Vn{}class $n extends Vn{constructor(t){super(),this.elements=t}}function Hn(t,e){const n=Xn(e);for(const i of t.elements)n.some((t=>we(t,i)))||n.push(i);return{arrayValue:{values:n}}}class Kn extends Vn{constructor(t){super(),this.elements=t}}function Gn(t,e){let n=Xn(e);for(const i of t.elements)n=n.filter((t=>!we(t,i)));return{arrayValue:{values:n}}}class zn extends Vn{constructor(t,e){super(),this.serializer=t,this.Re=e}}function qn(t){return ie(t.integerValue||t.doubleValue)}function Xn(t){return xe(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof $n&&e instanceof $n||t instanceof Kn&&e instanceof Kn?Q(t.elements,e.elements,we):t instanceof zn&&e instanceof zn?we(t.Re,e.Re):t instanceof jn&&e instanceof jn}(t.transform,e.transform)}class Qn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qn}static exists(t){return new Qn(void 0,t)}static updateTime(t){return new Qn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Zn{}function Jn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new li(t.key,Qn.none()):new ii(t.key,t.data,Qn.none());{const n=t.data,i=Re.empty();let r=new Qt(st.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new ri(t.key,i,new Zt(r.toArray()),Qn.none())}}function ti(t,e,n){t instanceof ii?function(t,e,n){const i=t.value.clone(),r=oi(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(t,e,n){if(!Yn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=oi(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(si(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ei(t,e,n,i){return t instanceof ii?function(t,e,n,i){if(!Yn(t.precondition,e))return n;const r=t.value.clone(),s=ai(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof ri?function(t,e,n,i){if(!Yn(t.precondition,e))return n;const r=ai(t.fieldTransforms,i,e),s=e.data;return s.setAll(si(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Yn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ni(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Q(t,e,((t,e)=>Wn(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ii extends Zn{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends Zn{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function si(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function oi(t,e,n){const i=new Map;O(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Un(o,a,n[r]))}return i}function ai(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Fn(t,s,e))}return i}class li extends Zn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ci{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&ti(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ei(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ei(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Dn();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Jn(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(tt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),On())}isEqual(t){return this.batchId===t.batchId&&Q(this.mutations,t.mutations,((t,e)=>ni(t,e)))&&Q(this.baseMutations,t.baseMutations,((t,e)=>ni(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi,fi;function di(t){if(void 0===t)return I("GRPC error has no .code"),M.UNKNOWN;switch(t){case hi.OK:return M.OK;case hi.CANCELLED:return M.CANCELLED;case hi.UNKNOWN:return M.UNKNOWN;case hi.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case hi.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case hi.INTERNAL:return M.INTERNAL;case hi.UNAVAILABLE:return M.UNAVAILABLE;case hi.UNAUTHENTICATED:return M.UNAUTHENTICATED;case hi.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case hi.NOT_FOUND:return M.NOT_FOUND;case hi.ALREADY_EXISTS:return M.ALREADY_EXISTS;case hi.PERMISSION_DENIED:return M.PERMISSION_DENIED;case hi.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case hi.ABORTED:return M.ABORTED;case hi.OUT_OF_RANGE:return M.OUT_OF_RANGE;case hi.UNIMPLEMENTED:return M.UNIMPLEMENTED;case hi.DATA_LOSS:return M.DATA_LOSS;default:return k(39323,{code:t})}}(fi=hi||(hi={}))[fi.OK=0]="OK",fi[fi.CANCELLED=1]="CANCELLED",fi[fi.UNKNOWN=2]="UNKNOWN",fi[fi.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fi[fi.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fi[fi.NOT_FOUND=5]="NOT_FOUND",fi[fi.ALREADY_EXISTS=6]="ALREADY_EXISTS",fi[fi.PERMISSION_DENIED=7]="PERMISSION_DENIED",fi[fi.UNAUTHENTICATED=16]="UNAUTHENTICATED",fi[fi.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fi[fi.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fi[fi.ABORTED=10]="ABORTED",fi[fi.OUT_OF_RANGE=11]="OUT_OF_RANGE",fi[fi.UNIMPLEMENTED=12]="UNIMPLEMENTED",fi[fi.INTERNAL=13]="INTERNAL",fi[fi.UNAVAILABLE=14]="UNAVAILABLE",fi[fi.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new i([4294967295,4294967295],0);Error;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();class pi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gi(t){return O(!!t,49232),tt.fromTimestamp(function(t){const e=ne(t);return new J(e.seconds,e.nanos)}(t))}function mi(t,e){const n=function(t){return new it(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function yi(t){const e=it.fromString(t);return O(Ti(e),10190,{key:e.toString()}),e}function vi(t){const e=yi(t);return 4===e.length?it.emptyPath():bi(e)}function bi(t){return O(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function wi(t){let e=vi(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){O(1===i,65062);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ei(t);return e instanceof $e&&Ke(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Fe(_i(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,bt(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Le(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Le(n,e)}(n.endAt)),cn(e,r,o,s,a,"F",l,c)}function Ei(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_i(t.unaryFilter.field);return je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_i(t.unaryFilter.field);return je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_i(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=_i(t.unaryFilter.field);return je.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return k(61313);default:return k(60726)}}(t):void 0!==t.fieldFilter?function(t){return je.create(_i(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return k(58110);default:return k(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return $e.create(t.compositeFilter.filters.map((t=>Ei(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return k(1026)}}(t.compositeFilter.op))}(t):k(30097,{filter:t})}function _i(t){return st.fromServerFormat(t.fieldPath)}function Ti(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this.wt=t}}function Ci(t){const e=wi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?gn(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){}vt(t,e){this.Ct(t,e),e.Ft()}Ct(t,e){if("nullValue"in t)this.Mt(e,5);else if("booleanValue"in t)this.Mt(e,10),e.xt(t.booleanValue?1:0);else if("integerValue"in t)this.Mt(e,15),e.xt(ie(t.integerValue));else if("doubleValue"in t){const n=ie(t.doubleValue);isNaN(n)?this.Mt(e,13):(this.Mt(e,15),wt(n)?e.xt(0):e.xt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Mt(e,20),"string"==typeof n&&(n=ne(n)),e.Ot(`${n.seconds||""}`),e.xt(n.nanos||0)}else if("stringValue"in t)this.Nt(t.stringValue,e),this.Bt(e);else if("bytesValue"in t)this.Mt(e,30),e.Lt(re(t.bytesValue)),this.Bt(e);else if("referenceValue"in t)this.kt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Mt(e,45),e.xt(n.latitude||0),e.xt(n.longitude||0)}else"mapValue"in t?Oe(t)?this.Mt(e,Number.MAX_SAFE_INTEGER):ke(t)?this.qt(t.mapValue,e):(this.Qt(t.mapValue,e),this.Bt(e)):"arrayValue"in t?(this.$t(t.arrayValue,e),this.Bt(e)):k(19022,{Ut:t})}Nt(t,e){this.Mt(e,25),this.Kt(t,e)}Kt(t,e){e.Ot(t)}Qt(t,e){const n=t.fields||{};this.Mt(e,55);for(const i of Object.keys(n))this.Nt(i,e),this.Ct(n[i],e)}qt(t,e){var n,i;const r=t.fields||{};this.Mt(e,53);const s=ve,o=(null===(i=null===(n=r[s].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.Mt(e,15),e.xt(ie(o)),this.Nt(s,e),this.Ct(r[s],e)}$t(t,e){const n=t.values||[];this.Mt(e,50);for(const i of n)this.Ct(i,e)}kt(t,e){this.Mt(e,37),ot.fromName(t).path.forEach((t=>{this.Mt(e,60),this.Kt(t,e)}))}Mt(t,e){t.xt(e)}Bt(t){t.xt(2)}}Ai.Wt=new Ai;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(){this.Cn=new xi}addToCollectionParentIndex(t,e){return this.Cn.add(e),pt.resolve()}getCollectionParents(t,e){return pt.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return pt.resolve()}deleteFieldIndex(t,e){return pt.resolve()}deleteAllFieldIndexes(t){return pt.resolve()}createTargetIndexes(t,e){return pt.resolve()}getDocumentsMatchingTarget(t,e){return pt.resolve(null)}getIndexType(t,e){return pt.resolve(0)}getFieldIndexes(t,e){return pt.resolve([])}getNextCollectionGroupToUpdate(t){return pt.resolve(null)}getMinOffset(t,e){return pt.resolve(ht.min())}getMinOffsetFromCollectionGroup(t,e){return pt.resolve(ht.min())}updateCollectionGroup(t,e,n){return pt.resolve()}updateIndexEntries(t,e){return pt.resolve()}}class xi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Qt(it.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Qt(it.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Di=41943040;class ki{static withCacheSize(t){return new ki(t,ki.DEFAULT_COLLECTION_PERCENTILE,ki.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ki.DEFAULT_COLLECTION_PERCENTILE=10,ki.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ki.DEFAULT=new ki(Di,ki.DEFAULT_COLLECTION_PERCENTILE,ki.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ki.DISABLED=new ki(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ni(0)}static lr(){return new Ni(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oi=1048576;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri{constructor(){this.changes=new _n((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Me.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?pt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ei(n.mutation,t,Zt.empty(),J.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,On()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=On()){const i=xn();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=An();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=xn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,On())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Sn();const s=kn(),o=function(){return kn()}();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof ri)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ei(o.mutation,e,o.mutation.getFieldMask(),J.now())):s.set(e.key,Zt.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Mi(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=kn();let i=new qt(((t,e)=>t-e)),r=On();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Zt.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||On()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=Dn();l.forEach((t=>{if(!r.has(t)){const i=Jn(e.get(t),n.get(t));null!==i&&c.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return pt.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return ot.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):pt.resolve(xn());let o=at,a=r;return s.next((e=>pt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?pt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,On()))).next((t=>({batchId:o,changes:In(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ot(e)).next((t=>{let e=An();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=An();return this.indexManager.getCollectionParents(t,r).next((o=>pt.forEach(o,(o=>{const a=function(t,e){return new ln(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,Me.newInvalidDocument(i)))}));let n=An();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&ei(s.mutation,i,Zt.empty(),J.now()),bn(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return pt.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:gi(t.createTime)}}(e)),pt.resolve()}getNamedQuery(t,e){return pt.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(t){return{name:t.name,query:Ci(t.bundledQuery),readTime:gi(t.readTime)}}(e)),pt.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.overlays=new qt(ot.comparator),this.Qr=new Map}getOverlay(t,e){return pt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=xn();return pt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.St(t,e,i)})),pt.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Qr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Qr.delete(n)),pt.resolve()}getOverlaysForCollection(t,e,n){const i=xn(),r=e.length+1,s=new ot(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return pt.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new qt(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=xn(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=xn(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return pt.resolve(o)}St(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Qr.get(i.largestBatchId).delete(n.key);this.Qr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ui(e,n));let r=this.Qr.get(e);void 0===r&&(r=On(),this.Qr.set(e,r)),this.Qr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.sessionToken=te.EMPTY_BYTE_STRING}getSessionToken(t){return pt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,pt.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.$r=new Qt(Bi.Ur),this.Kr=new Qt(Bi.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const n=new Bi(t,e);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.zr(new Bi(t,e))}jr(t,e){t.forEach((t=>this.removeReference(t,e)))}Hr(t){const e=new ot(new it([])),n=new Bi(e,t),i=new Bi(e,t+1),r=[];return this.Kr.forEachInRange([n,i],(t=>{this.zr(t),r.push(t.key)})),r}Jr(){this.$r.forEach((t=>this.zr(t)))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new ot(new it([])),n=new Bi(e,t),i=new Bi(e,t+1);let r=On();return this.Kr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Bi(t,0),n=this.$r.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Bi{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return ot.comparator(t.key,e.key)||z(t.Zr,e.Zr)}static Wr(t,e){return z(t.Zr,e.Zr)||ot.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new Qt(Bi.Ur)}checkEmpty(t){return pt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ci(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.Xr=this.Xr.add(new Bi(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return pt.resolve(s)}lookupMutationBatch(t,e){return pt.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ti(n),r=i<0?0:i;return pt.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return pt.resolve(0===this.mutationQueue.length?vt:this.nr-1)}getAllMutationBatches(t){return pt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Bi(e,0),i=new Bi(e,Number.POSITIVE_INFINITY),r=[];return this.Xr.forEachInRange([n,i],(t=>{const e=this.ei(t.Zr);r.push(e)})),pt.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qt(z);return e.forEach((t=>{const e=new Bi(t,0),i=new Bi(t,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([e,i],(t=>{n=n.add(t.Zr)}))})),pt.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;ot.isDocumentKey(r)||(r=r.child(""));const s=new Bi(new ot(r),0);let o=new Qt(z);return this.Xr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.Zr)),!0)}),s),pt.resolve(this.ni(o))}ni(t){const e=[];return t.forEach((t=>{const n=this.ei(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){O(0===this.ri(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Xr;return pt.forEach(e.mutations,(i=>{const r=new Bi(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Xr=n}))}sr(t){}containsKey(t,e){const n=new Bi(e,0),i=this.Xr.firstAfterOrEqual(n);return pt.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,pt.resolve()}ri(t,e){return this.ti(t)}ti(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t){this.ii=t,this.docs=function(){return new qt(ot.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.ii(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return pt.resolve(n?n.document.mutableCopy():Me.newInvalidDocument(e))}getEntries(t,e){let n=Sn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Me.newInvalidDocument(t))})),pt.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Sn();const s=e.path,o=new ot(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||ft(ut(o),n)<=0||(i.has(o.key)||bn(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return pt.resolve(r)}getAllFromCollectionGroup(t,e,n,i){k(9500)}si(t,e){return pt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Hi(this)}getSize(t){return pt.resolve(this.size)}}class Hi extends Ri{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Br.addEntry(t,i)):this.Br.removeEntry(n)})),pt.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t){this.persistence=t,this.oi=new _n((t=>on(t)),an),this.lastRemoteSnapshotVersion=tt.min(),this.highestTargetId=0,this._i=0,this.ai=new Ui,this.targetCount=0,this.ui=Ni.cr()}forEachTarget(t,e){return this.oi.forEach(((t,n)=>e(n))),pt.resolve()}getLastRemoteSnapshotVersion(t){return pt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return pt.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),pt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this._i&&(this._i=e),pt.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Ni(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,pt.resolve()}updateTargetData(t,e){return this.Tr(e),pt.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,pt.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.oi.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.oi.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),pt.waitFor(r).next((()=>i))}getTargetCount(t){return pt.resolve(this.targetCount)}getTargetData(t,e){const n=this.oi.get(e)||null;return pt.resolve(n)}addMatchingKeys(t,e,n){return this.ai.Gr(e,n),pt.resolve()}removeMatchingKeys(t,e,n){this.ai.jr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),pt.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),pt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ai.Yr(e);return pt.resolve(n)}containsKey(t,e){return pt.resolve(this.ai.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,e){this.ci={},this.overlays={},this.li=new yt(0),this.hi=!1,this.hi=!0,this.Pi=new Fi,this.referenceDelegate=t(this),this.Ti=new Ki(this),this.indexManager=new Ii,this.remoteDocumentCache=function(t){return new $i(t)}((t=>this.referenceDelegate.Ii(t))),this.serializer=new Si(e),this.Ei=new Pi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Vi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ci[t.toKey()];return n||(n=new ji(e,this.referenceDelegate),this.ci[t.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const i=new zi(this.li.next());return this.referenceDelegate.di(),n(i).next((t=>this.referenceDelegate.Ai(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ri(t,e){return pt.or(Object.values(this.ci).map((n=>()=>n.containsKey(t,e))))}}class zi extends dt{constructor(t){super(),this.currentSequenceNumber=t}}class qi{constructor(t){this.persistence=t,this.Vi=new Ui,this.mi=null}static fi(t){return new qi(t)}get gi(){if(this.mi)return this.mi;throw k(60996)}addReference(t,e,n){return this.Vi.addReference(n,e),this.gi.delete(n.toString()),pt.resolve()}removeReference(t,e,n){return this.Vi.removeReference(n,e),this.gi.add(n.toString()),pt.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),pt.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach((t=>this.gi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.gi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pt.forEach(this.gi,(n=>{const i=ot.fromPath(n);return this.pi(t,i).next((t=>{t||e.removeEntry(i,tt.min())}))})).next((()=>(this.mi=null,e.apply(t))))}updateLimboDocument(t,e){return this.pi(t,e).next((t=>{t?this.gi.delete(e.toString()):this.gi.add(e.toString())}))}Ii(t){return 0}pi(t,e){return pt.or([()=>pt.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ds=n,this.As=i}static Rs(t,e){let n=On(),i=On();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Xi(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return(0,a.nr)()?8:gt((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.ws(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.bs(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new Wi;return this.Ss(t,e,n).next((i=>{if(r.result=i,this.fs)return this.Ds(t,e,n,i.size)}))})).next((()=>r.result))}Ds(t,e,n,i){return n.documentReadCount<this.gs?(C()<=o.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",vn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),pt.resolve()):(C()<=o.$b.DEBUG&&A("QueryEngine","Query:",vn(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ps*i?(C()<=o.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",vn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,dn(e))):pt.resolve())}ws(t,e){if(un(e))return pt.resolve(null);let n=dn(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=gn(e,null,"F"),n=dn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=On(...i);return this.ys.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.vs(e,i);return this.Cs(e,s,r,n.readTime)?this.ws(t,gn(e,null,"F")):this.Fs(t,s,e,n)}))))})))))}bs(t,e,n,i){return un(e)||i.isEqual(tt.min())?pt.resolve(null):this.ys.getDocuments(t,n).next((r=>{const s=this.vs(e,r);return this.Cs(e,s,n,i)?pt.resolve(null):(C()<=o.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vn(e)),this.Fs(t,s,e,ct(i,at)).next((t=>t)))}))}vs(t,e){let n=new Qt(wn(t));return e.forEach(((e,i)=>{bn(t,i)&&(n=n.add(i))})),n}Cs(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(t,e,n){return C()<=o.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",vn(e)),this.ys.getDocumentsMatchingQuery(t,e,ht.min(),n)}Fs(t,e,n,i){return this.ys.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="LocalStore";class Zi{constructor(t,e,n,i){this.persistence=t,this.Ms=e,this.serializer=i,this.xs=new qt(z),this.Os=new _n((t=>on(t)),an),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(n)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Li(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.xs)))}}function Ji(t,e,n,i){return new Zi(t,e,n,i)}async function tr(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=On();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ks:t,removedBatchIds:r,addedBatchIds:s})))}))}))}class er{constructor(){this.activeTargetIds=Mn()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nr{constructor(){this.xo=new er,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,n){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new er,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{No(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="ConnectivityMonitor";class sr{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){A(rr,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){A(rr,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or=null;function ar(){return null===or?or=function(){return 268435456+Math.round(2147483648*Math.random())}():or++,"0x"+or.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const lr="RestConnection",cr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ur{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${n}/databases/${i}`,this.Go=this.databaseId.database===fe?`project_id=${n}`:`project_id=${n}&database_id=${i}`}zo(t,e,n,i,r){const s=ar(),o=this.jo(t,e.toUriEncodedString());A(lr,`Sending RPC '${t}' ${s}:`,o,n);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,i,r);const{host:c}=new URL(o),u=(0,a.zJ)(c);return this.Jo(t,o,l,n,u).then((e=>(A(lr,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw x(lr,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Yo(t,e,n,i,r,s){return this.zo(t,e,n,i,r)}Ho(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+T}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}jo(t,e){const n=cr[t];return`${this.Ko}/v1/${e}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="WebChannelConnection";class dr extends ur{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,r){const s=ar();return new Promise(((r,o)=>{const a=new u;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();A(fr,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),r(e);break;case d.TIMEOUT:A(fr,`RPC '${t}' ${s} timed out`),o(new L(M.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(A(fr,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(e)>=0?e:M.UNKNOWN}(e.status);o(new L(t,e.message))}else o(new L(M.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(M.UNAVAILABLE,"Connection failed."));break;default:k(9055,{h_:t,streamId:s,P_:a.getLastErrorCode(),T_:a.getLastError()})}}finally{A(fr,`RPC '${t}' ${s} completed.`)}}));const l=JSON.stringify(i);A(fr,`RPC '${t}' ${s} sending request:`,i),a.send(e,"POST",l,n,15)}))}I_(t,e,n){const i=ar(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=y(),o=m(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");A(fr,`Creating RPC '${t}' stream ${i}: ${c}`,a);const u=s.createWebChannel(c,a);this.E_(u);let f=!1,d=!1;const v=new hr({Zo:e=>{d?A(fr,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(f||(A(fr,`Opening RPC '${t}' stream ${i} transport.`),u.open(),f=!0),A(fr,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},Xo:()=>u.close()}),b=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return b(u,h.EventType.OPEN,(()=>{d||(A(fr,`RPC '${t}' stream ${i} transport opened.`),v.__())})),b(u,h.EventType.CLOSE,(()=>{d||(d=!0,A(fr,`RPC '${t}' stream ${i} transport closed`),v.u_(),this.d_(u))})),b(u,h.EventType.ERROR,(e=>{d||(d=!0,x(fr,`RPC '${t}' stream ${i} transport errored. Name:`,e.name,"Message:",e.message),v.u_(new L(M.UNAVAILABLE,"The operation could not be completed")))})),b(u,h.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];O(!!r,16349);const s=r,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){A(fr,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=hi[t];if(void 0!==e)return di(e)}(e),r=o.message;void 0===n&&(n=M.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,v.u_(new L(n,r)),u.close()}else A(fr,`RPC '${t}' stream ${i} received:`,r),v.c_(r)}})),b(o,g.STAT_EVENT,(e=>{e.stat===p.PROXY?A(fr,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===p.NOPROXY&&A(fr,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{v.a_()}),0),v}terminate(){this.l_.forEach((t=>t.close())),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter((e=>e===t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){return new pi(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,n=1e3,i=1.5,r=6e4){this.xi=t,this.timerId=e,this.A_=n,this.R_=i,this.V_=r,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),i=Math.max(0,e-n);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,(()=>(this.g_=Date.now(),t()))),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){null!==this.f_&&(this.f_.skipDelay(),this.f_=null)}cancel(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{}class vr extends yr{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new L(M.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,n,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.zo(t,mi(e,n),i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(M.UNKNOWN,t.toString())}))}Yo(t,e,n,i,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Yo(t,mi(e,n),i,s,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(M.UNKNOWN,t.toString())}))}terminate(){this.sa=!0,this.connection.terminate()}}class br{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){0===this._a&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve()))))}Pa(t){"Online"===this.state?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,"Online"===t&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(I(e),this.ua=!1):A("OnlineStateTracker",e)}Ta(){null!==this.aa&&(this.aa.cancel(),this.aa=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="RemoteStore";class Er{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=r,this.Ra.No((t=>{n.enqueueAndForget((async()=>{Sr(this)&&(A(wr,"Restarting streams for network reachability change."),await async function(t){const e=R(t);e.da.add(4),await Tr(e),e.Va.set("Unknown"),e.da.delete(4),await _r(e)}(this))}))})),this.Va=new br(n,i)}}async function _r(t){if(Sr(t))for(const e of t.Aa)await e(!0)}async function Tr(t){for(const e of t.Aa)await e(!1)}function Sr(t){return 0===R(t).da.size}async function Cr(t,e){const n=R(t);e?(n.da.delete(2),await _r(n)):e||(n.da.add(2),await Tr(n),n.Va.set("Unknown"))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new P,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Ar(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class Ir{constructor(){this.queries=xr(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=R(t),i=n.queries;n.queries=xr(),i.forEach(((t,n)=>{for(const i of n.Sa)i.onError(e)}))}(this,new L(M.ABORTED,"Firestore shutting down"))}}function xr(){return new _n((t=>yn(t)),mn)}function Dr(t){t.Ca.forEach((t=>{t.next()}))}var kr,Nr;(Nr=kr||(kr={})).xa="default",Nr.Cache="cache";const Or="SyncEngine";class Rr{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.lu={},this.hu=new _n((t=>yn(t)),mn),this.Pu=new Map,this.Tu=new Set,this.Iu=new qt(ot.comparator),this.Eu=new Map,this.du=new Ui,this.Au={},this.Ru=new Map,this.Vu=Ni.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return!0===this.mu}}function Mr(t,e,n){const i=R(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.hu.forEach(((n,i)=>{const r=i.view.Fa(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=R(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.Sa)r.Fa(e)&&(i=!0)})),i&&Dr(n)}(i.eventManager,e),t.length&&i.lu.Y_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Lr(t,e,n){const i=R(t),r=[],s=[],o=[];i.hu.isEmpty()||(i.hu.forEach(((t,a)=>{o.push(i.fu(a,e,n).then((t=>{var e;if((t||n)&&i.isPrimaryClient){const r=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;i.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);const e=Xi.Rs(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.lu.Y_(r),await async function(t,e){const n=R(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>pt.forEach(e,(e=>pt.forEach(e.ds,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>pt.forEach(e.As,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!mt(t))throw t;A(Yi,"Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.xs.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.xs=n.xs.insert(t,r)}}}(i.localStore,s))}async function Pr(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){A(Or,"User change. New user:",e.toKey());const t=await tr(n.localStore,e);n.currentUser=e,function(t,e){t.Ru.forEach((t=>{t.forEach((t=>{t.reject(new L(M.CANCELLED,e))}))})),t.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Lr(n,t.ks)}}class Vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=gr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Ji(this.persistence,new Qi,t.initialUser,this.serializer)}Su(t){return new Gi(qi.fi,this.serializer)}bu(t){return new nr}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vr.provider={build:()=>new Vr};class Fr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Mr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pr.bind(null,this.syncEngine),await Cr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ir}()}createDatastore(t){const e=gr(t.databaseInfo.databaseId),n=function(t){return new dr(t)}(t.databaseInfo);return function(t,e,n,i){return new vr(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Er(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>Mr(this.syncEngine,t,0)),function(){return sr.C()?new sr:new ir}())}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Rr(t,e,n,i,r,s);return o&&(a.mu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=R(t);A(wr,"RemoteStore shutting down."),e.da.add(5),await Tr(e),e.Ra.shutdown(),e.Va.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Fr.provider={build:()=>new Fr};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ur(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Br=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e,n,i){if(!0===e&&!0===i)throw new L(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $r(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":k(12329,{type:typeof t})}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$r(t);throw new L(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kr="firestore.googleapis.com",Gr=!0;class zr{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new L(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kr,this.ssl=Gr}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:Gr;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Di;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<Oi)throw new L(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jr("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ur(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class qr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zr(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new $(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Br.get(t);e&&(A("ComponentProvider","Removing Datastore"),Br.delete(t),e.terminate())}(this),Promise.resolve()}}function Xr(t,e,n,i={}){var r;t=Hr(t,qr);const s=(0,a.zJ)(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;s&&((0,a.gE)(`https://${c}`),(0,a.P1)("Firestore",!0)),o.host!==Kr&&o.host!==c&&x("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:i});if(!(0,a.bD)(u,l)&&(t._setSettings(u),i.mockUserToken)){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=_.MOCK_USER;else{e=(0,a.Fy)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new L(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new _(s)}t._authCredentials=new U(new V(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wr="AsyncQueue";class Qr{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new mr(this,"async_queue_retry"),this.rc=()=>{const t=pr();t&&A(Wr,"Visibility state changed to "+t.visibilityState),this.x_.b_()},this.sc=t;const e=pr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=pr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise((()=>{}));const e=new P;return this._c((()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ju.push(t),this.ac())))}async ac(){if(0!==this.Ju.length){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!mt(t))throw t;A(Wr,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_((()=>this.ac()))}}_c(t){const e=this.sc.then((()=>(this.ec=!0,t().catch((t=>{throw this.Xu=t,this.ec=!1,I("INTERNAL UNHANDLED ERROR: ",Yr(t)),t})).then((t=>(this.ec=!1,t))))));return this.sc=e,e}enqueueAfterDelay(t,e,n){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const i=Ar.createAndSchedule(this,t,e,n,(t=>this.uc(t)));return this.Zu.push(i),i}oc(){this.Xu&&k(47125,{cc:Yr(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do{t=this.sc,await t}while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then((()=>{this.Zu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Zu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.lc()}))}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function Yr(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zr extends qr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Qr,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qr(t),this._firestoreClient=void 0,await t}}}function Jr(t,e){const n="object"==typeof t?t:(0,r.Sx)(),i="string"==typeof t?t:e||fe,s=(0,r.j6)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.yU)("firestore");t&&Xr(s,...t)}return s}new RegExp("[~\\*/\\[\\]]");new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){T=t}(r.MF),(0,r.om)(new s.uA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new Zr(new B(t.getProvider("auth-internal")),new K(r,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new de(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(w,E,t),(0,r.KO)(w,E,"esm2017")}()},768:(t,e,n)=>{n.d(e,{$u:()=>rt,CE:()=>qe,Df:()=>j,FK:()=>Pe,Gy:()=>L,K9:()=>ce,Lk:()=>Je,MZ:()=>B,OW:()=>U,Q3:()=>on,QP:()=>V,Wv:()=>Xe,bF:()=>tn,bo:()=>D,dY:()=>m,eW:()=>sn,g2:()=>ft,nI:()=>mn,pI:()=>mt,qL:()=>o,uX:()=>$e});var i=n(144),r=n(232);function s(t,e,n,i){try{return i?t(...i):t()}catch(r){a(r,e,n)}}function o(t,e,n,i){if((0,r.Tn)(t)){const o=s(t,e,n,i);return o&&(0,r.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,r.cy)(t)){const r=[];for(let s=0;s<t.length;s++)r.push(o(t[s],e,n,i));return r}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:c,throwUnhandledErrorInProduction:u}=e&&e.appContext.config||r.MZ;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;r=r.parent}if(c)return(0,i.C4)(),s(c,null,10,[t,o,a]),void(0,i.bl)()}l(t,n,a,o,u)}function l(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const c=[];let u=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=u+1,n=c.length;while(e<n){const i=e+n>>>1,r=c[i],s=T(r);s<t||s===t&&2&r.flags?e=i+1:n=i}return e}function v(t){if(!(1&t.flags)){const e=T(t),n=c[c.length-1];!n||!(2&t.flags)&&e>=T(n)?c.push(t):c.splice(y(e),0,t),t.flags|=1,b()}}function b(){g||(g=p.then(S))}function w(t){(0,r.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),b()}function E(t,e,n=u+1){for(0;n<c.length;n++){const e=c[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,c.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function _(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>T(t)-T(e)));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function S(t){r.tE;try{for(u=0;u<c.length;u++){const t=c[u];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;u<c.length;u++){const t=c[u];t&&(t.flags&=-2)}u=-1,c.length=0,_(t),g=null,(c.length||h.length)&&S(t)}}let C=null,A=null;function I(t){const e=C;return C=t,A=t&&t.type.__scopeId||null,e}function x(t,e=C,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&Ge(-1);const r=I(e);let s;try{s=t(...n)}finally{I(r),i._d&&Ge(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function D(t,e){if(null===C)return t;const n=Nn(C),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,l,c=r.MZ]=e[o];t&&((0,r.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,i.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function k(t,e,n,r){const s=t.dirs,a=e&&e.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[r];u&&((0,i.C4)(),o(u,n,8,[t.el,c,t,e]),(0,i.bl)())}}const N=Symbol("_vte"),O=t=>t.__isTeleport;const R=Symbol("_leaveCb"),M=Symbol("_enterCb");function L(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nt((()=>{t.isMounted=!0})),st((()=>{t.isUnmounting=!0})),t}const P=[Function,Array],V={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:P,onEnter:P,onAfterEnter:P,onEnterCancelled:P,onBeforeLeave:P,onLeave:P,onAfterLeave:P,onLeaveCancelled:P,onBeforeAppear:P,onAppear:P,onAfterAppear:P,onAppearCancelled:P};function F(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function U(t,e,n,i,s){const{appear:a,mode:l,persisted:c=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:b,onAfterAppear:w,onAppearCancelled:E}=e,_=String(t.key),T=F(n,t),S=(t,e)=>{t&&o(t,i,9,e)},C=(t,e)=>{const n=e[1];S(t,e),(0,r.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},A={mode:l,persisted:c,beforeEnter(e){let i=u;if(!n.isMounted){if(!a)return;i=v||u}e[R]&&e[R](!0);const r=T[_];r&&Qe(t,r)&&r.el[R]&&r.el[R](),S(i,[e])},enter(t){let e=h,i=f,r=d;if(!n.isMounted){if(!a)return;e=b||h,i=w||f,r=E||d}let s=!1;const o=t[M]=e=>{s||(s=!0,S(e?r:i,[t]),A.delayedLeave&&A.delayedLeave(),t[M]=void 0)};e?C(e,[t,o]):o()},leave(e,i){const r=String(t.key);if(e[M]&&e[M](!0),n.isUnmounting)return i();S(p,[e]);let s=!1;const o=e[R]=n=>{s||(s=!0,i(),S(n?y:m,[e]),e[R]=void 0,T[r]===t&&delete T[r])};T[r]=t,g?C(g,[e,o]):o()},clone(t){const r=U(t,e,n,i,s);return s&&s(r),r}};return A}function B(t,e){6&t.shapeFlag&&t.component?(t.transition=e,B(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function j(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Pe?(128&o.patchFlag&&r++,i=i.concat(j(o.children,e,a))):(e||o.type!==Fe)&&i.push(null!=a?rn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function $(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function H(t,e,n,o,a=!1){if((0,r.cy)(t))return void t.forEach(((t,i)=>H(t,e&&((0,r.cy)(e)?e[i]:e),n,o,a)));if(K(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&H(t,e,n,o.component.subTree));const l=4&o.shapeFlag?Nn(o.component):o.el,c=a?null:l,{i:u,r:h}=t;const f=e&&e.r,d=u.refs===r.MZ?u.refs={}:u.refs,p=u.setupState,g=(0,i.ux)(p),m=p===r.MZ?()=>!1:t=>(0,r.$3)(g,t);if(null!=f&&f!==h&&((0,r.Kg)(f)?(d[f]=null,m(f)&&(p[f]=null)):(0,i.i9)(f)&&(f.value=null)),(0,r.Tn)(h))s(h,u,12,[c,d]);else{const e=(0,r.Kg)(h),s=(0,i.i9)(h);if(e||s){const i=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,l):(0,r.cy)(n)?n.includes(l)||n.push(l):e?(d[h]=[l],m(h)&&(p[h]=d[h])):(h.value=[l],t.k&&(d[t.k]=h.value))}else e?(d[h]=c,m(h)&&(p[h]=c)):s&&(h.value=c,t.k&&(d[t.k]=c))};c?(i.id=-1,le(i,n)):i()}else 0}}(0,r.We)().requestIdleCallback,(0,r.We)().cancelIdleCallback;const K=t=>!!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */const G=t=>t.type.__isKeepAlive;RegExp,RegExp;function z(t,e){return(0,r.cy)(t)?t.some((t=>z(t,e))):(0,r.Kg)(t)?t.split(",").includes(e):!!(0,r.gd)(t)&&(t.lastIndex=0,t.test(e))}function q(t,e){W(t,"a",e)}function X(t,e){W(t,"da",e)}function W(t,e,n=gn){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(J(e,i,n),n){let t=n.parent;while(t&&t.parent)G(t.parent.vnode)&&Q(i,e,n,t),t=t.parent}}function Q(t,e,n,i){const s=J(e,t,i,!0);ot((()=>{(0,r.TF)(i[e],s)}),n)}function Y(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Z(t){return 128&t.shapeFlag?t.ssContent:t}function J(t,e,n=gn,r=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...r)=>{(0,i.C4)();const s=bn(n),a=o(e,n,t,r);return s(),(0,i.bl)(),a});return r?s.unshift(a):s.push(a),a}}const tt=t=>(e,n=gn)=>{Sn&&"sp"!==t||J(t,((...t)=>e(...t)),n)},et=tt("bm"),nt=tt("m"),it=tt("bu"),rt=tt("u"),st=tt("bum"),ot=tt("um"),at=tt("sp"),lt=tt("rtg"),ct=tt("rtc");function ut(t,e=gn){J("ec",t,e)}const ht="components";function ft(t,e){return pt(ht,t,!0,e)||t}const dt=Symbol.for("v-ndc");function pt(t,e,n=!0,i=!1){const s=C||gn;if(s){const n=s.type;if(t===ht){const t=On(n,!1);if(t&&(t===e||t===(0,r.PT)(e)||t===(0,r.ZH)((0,r.PT)(e))))return n}const o=gt(s[t]||n[t],e)||gt(s.appContext[t],e);return!o&&i?n:o}}function gt(t,e){return t&&(t[e]||t[(0,r.PT)(e)]||t[(0,r.ZH)((0,r.PT)(e))])}function mt(t,e,n,s){let o;const a=n&&n[s],l=(0,r.cy)(t);if(l||(0,r.Kg)(t)){const n=l&&(0,i.g8)(t);let r=!1,s=!1;n&&(r=!(0,i.fE)(t),s=(0,i.Tm)(t),t=(0,i.qA)(t)),o=new Array(t.length);for(let l=0,c=t.length;l<c;l++)o[l]=e(r?s?(0,i.a1)((0,i.lJ)(t[l])):(0,i.lJ)(t[l]):t[l],l,void 0,a&&a[l])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,r.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];o[i]=e(t[r],r,i,a&&a[i])}}else o=[];return n&&(n[s]=o),o}const yt=t=>t?En(t)?Nn(t):yt(t.parent):null,vt=(0,r.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yt(t.parent),$root:t=>yt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>It(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>_e.bind(t)}),bt=(t,e)=>t!==r.MZ&&!t.__isScriptSetup&&(0,r.$3)(t,e),wt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=t;let h;if("$"!==e[0]){const i=l[e];if(void 0!==i)switch(i){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(bt(s,e))return l[e]=1,s[e];if(o!==r.MZ&&(0,r.$3)(o,e))return l[e]=2,o[e];if((h=t.propsOptions[0])&&(0,r.$3)(h,e))return l[e]=3,a[e];if(n!==r.MZ&&(0,r.$3)(n,e))return l[e]=4,n[e];_t&&(l[e]=0)}}const f=vt[e];let d,p;return f?("$attrs"===e&&(0,i.u4)(t.attrs,"get",""),f(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==r.MZ&&(0,r.$3)(n,e)?(l[e]=4,n[e]):(p=u.config.globalProperties,(0,r.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return bt(s,e)?(s[e]=n,!0):i!==r.MZ&&(0,r.$3)(i,e)?(i[e]=n,!0):!(0,r.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||t!==r.MZ&&(0,r.$3)(t,a)||bt(e,a)||(l=o[0])&&(0,r.$3)(l,a)||(0,r.$3)(i,a)||(0,r.$3)(vt,a)||(0,r.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,r.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Et(t){return(0,r.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let _t=!0;function Tt(t){const e=It(t),n=t.proxy,s=t.ctx;_t=!1,e.beforeCreate&&Ct(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:w,destroyed:E,unmounted:_,render:T,renderTracked:S,renderTriggered:C,errorCaptured:A,serverPrefetch:I,expose:x,inheritAttrs:D,components:k,directives:N,filters:O}=e,R=null;if(h&&St(h,s,R),l)for(const i in l){const t=l[i];(0,r.Tn)(t)&&(s[i]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,r.Gv)(e)&&(t.data=(0,i.Kh)(e))}if(_t=!0,a)for(const i in a){const t=a[i],e=(0,r.Tn)(t)?t.bind(n,n):(0,r.Tn)(t.get)?t.get.bind(n,n):r.tE;0;const o=!(0,r.Tn)(t)&&(0,r.Tn)(t.set)?t.set.bind(n):r.tE,l=Mn({get:e,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:t=>l.value=t})}if(c)for(const i in c)At(c[i],s,n,i);if(u){const t=(0,r.Tn)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{jt(e,t[e])}))}function M(t,e){(0,r.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Ct(f,t,"c"),M(et,d),M(nt,p),M(it,g),M(rt,m),M(q,y),M(X,v),M(ut,A),M(ct,S),M(lt,C),M(st,w),M(ot,_),M(at,I),(0,r.cy)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===r.tE&&(t.render=T),null!=D&&(t.inheritAttrs=D),k&&(t.components=k),N&&(t.directives=N),I&&$(t)}function St(t,e,n=r.tE){(0,r.cy)(t)&&(t=Ot(t));for(const s in t){const n=t[s];let o;o=(0,r.Gv)(n)?"default"in n?$t(n.from||s,n.default,!0):$t(n.from||s):$t(n),(0,i.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Ct(t,e,n){o((0,r.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function At(t,e,n,i){let s=i.includes(".")?Te(n,i):()=>n[i];if((0,r.Kg)(t)){const n=e[t];(0,r.Tn)(n)&&we(s,n)}else if((0,r.Tn)(t))we(s,t.bind(n));else if((0,r.Gv)(t))if((0,r.cy)(t))t.forEach((t=>At(t,e,n,i)));else{const i=(0,r.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,r.Tn)(i)&&we(s,i,t)}else 0}function It(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let c;return l?c=l:s.length||n||i?(c={},s.length&&s.forEach((t=>xt(c,t,a,!0))),xt(c,e,a)):c=e,(0,r.Gv)(e)&&o.set(e,c),c}function xt(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&xt(t,s,n,!0),r&&r.forEach((e=>xt(t,e,n,!0)));for(const o in e)if(i&&"expose"===o);else{const i=Dt[o]||n&&n[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const Dt={data:kt,props:Lt,emits:Lt,methods:Mt,computed:Mt,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Mt,directives:Mt,watch:Pt,provide:kt,inject:Nt};function kt(t,e){return e?t?function(){return(0,r.X$)((0,r.Tn)(t)?t.call(this,this):t,(0,r.Tn)(e)?e.call(this,this):e)}:e:t}function Nt(t,e){return Mt(Ot(t),Ot(e))}function Ot(t){if((0,r.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Mt(t,e){return t?(0,r.X$)(Object.create(null),t,e):e}function Lt(t,e){return t?(0,r.cy)(t)&&(0,r.cy)(e)?[...new Set([...t,...e])]:(0,r.X$)(Object.create(null),Et(t),Et(null!=e?e:{})):e}function Pt(t,e){if(!t)return e;if(!e)return t;const n=(0,r.X$)(Object.create(null),t);for(const i in e)n[i]=Rt(t[i],e[i]);return n}function Vt(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ft=0;function Ut(t,e){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const s=Vt(),a=new WeakSet,l=[];let c=!1;const u=s.app={_uid:Ft++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Ln,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,r.Tn)(t.install)?(a.add(t),t.install(u,...e)):(0,r.Tn)(t)&&(a.add(t),t(u,...e))),u},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),u},component(t,e){return e?(s.components[t]=e,u):s.components[t]},directive(t,e){return e?(s.directives[t]=e,u):s.directives[t]},mount(r,o,a){if(!c){0;const l=u._ceVNode||tn(n,i);return l.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(l,r):t(l,r,a),c=!0,u._container=r,r.__vue_app__=u,Nn(l.component)}},onUnmount(t){l.push(t)},unmount(){c&&(o(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(t,e){return s.provides[t]=e,u},runWithContext(t){const e=Bt;Bt=u;try{return t()}finally{Bt=e}}};return u}}let Bt=null;function jt(t,e){if(gn){let n=gn.provides;const i=gn.parent&&gn.parent.provides;i===n&&(n=gn.provides=Object.create(i)),n[t]=e}else 0}function $t(t,e,n=!1){const i=gn||C;if(i||Bt){let s=Bt?Bt._context.provides:i?null==i.parent||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,r.Tn)(e)?e.call(i&&i.proxy):e}else 0}const Ht={},Kt=()=>Object.create(Ht),Gt=t=>Object.getPrototypeOf(t)===Ht;function zt(t,e,n,r=!1){const s={},o=Kt();t.propsDefaults=Object.create(null),Xt(t,e,s,o);for(const i in t.propsOptions[0])i in s||(s[i]=void 0);n?t.props=r?s:(0,i.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function qt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=t,c=(0,i.ux)(o),[u]=t.propsOptions;let h=!1;if(!(s||l>0)||16&l){let i;Xt(t,e,o,a)&&(h=!0);for(const s in c)e&&((0,r.$3)(e,s)||(i=(0,r.Tg)(s))!==s&&(0,r.$3)(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Wt(u,c,s,void 0,t,!0)):delete o[s]);if(a!==c)for(const t in a)e&&(0,r.$3)(e,t)||(delete a[t],h=!0)}else if(8&l){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(Ie(t.emitsOptions,s))continue;const l=e[s];if(u)if((0,r.$3)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const e=(0,r.PT)(s);o[e]=Wt(u,c,e,l,t,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,i.hZ)(t.attrs,"set","")}function Xt(t,e,n,s){const[o,a]=t.propsOptions;let l,c=!1;if(e)for(let i in e){if((0,r.SU)(i))continue;const u=e[i];let h;o&&(0,r.$3)(o,h=(0,r.PT)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:Ie(t.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,c=!0)}if(a){const e=(0,i.ux)(n),s=l||r.MZ;for(let i=0;i<a.length;i++){const l=a[i];n[l]=Wt(o,e,l,s[l],t,!(0,r.$3)(s,l))}}return c}function Wt(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=(0,r.$3)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(t)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=bn(s);i=r[n]=t.call(null,e),o()}}else i=t;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}const Qt=new WeakMap;function Yt(t,e,n=!1){const i=n?Qt:e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},l=[];let c=!1;if(!(0,r.Tn)(t)){const i=t=>{c=!0;const[n,i]=Yt(t,e,!0);(0,r.X$)(a,n),i&&l.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!c)return(0,r.Gv)(t)&&i.set(t,r.Oj),r.Oj;if((0,r.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,r.PT)(o[h]);Zt(t)&&(a[t]=r.MZ)}else if(o){0;for(const t in o){const e=(0,r.PT)(t);if(Zt(e)){const n=o[t],i=a[e]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n),s=i.type;let c=!1,u=!0;if((0,r.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,r.Tn)(e)&&e.name;if("Boolean"===n){c=!0;break}"String"===n&&(u=!1)}else c=(0,r.Tn)(s)&&"Boolean"===s.name;i[0]=c,i[1]=u,(c||(0,r.$3)(i,"default"))&&l.push(e)}}}const u=[a,l];return(0,r.Gv)(t)&&i.set(t,u),u}function Zt(t){return"$"!==t[0]&&!(0,r.SU)(t)}const Jt=t=>"_"===t[0]||"$stable"===t,te=t=>(0,r.cy)(t)?t.map(an):[an(t)],ee=(t,e,n)=>{if(e._n)return e;const i=x(((...t)=>te(e(...t))),n);return i._c=!1,i},ne=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Jt(s))continue;const n=t[s];if((0,r.Tn)(n))e[s]=ee(s,n,i);else if(null!=n){0;const t=te(n);e[s]=()=>t}}},ie=(t,e)=>{const n=te(e);t.slots.default=()=>n},re=(t,e,n)=>{for(const i in e)!n&&Jt(i)||(t[i]=e[i])},se=(t,e,n)=>{const i=t.slots=Kt();if(32&t.vnode.shapeFlag){const t=e._;t?(re(i,e,n),n&&(0,r.yQ)(i,"_",t,!0)):ne(e,i)}else e&&ie(t,e)},oe=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r.MZ;if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:re(s,e,n):(o=!e.$stable,ne(e,s)),a=e}else e&&(ie(t,e),a={default:1});if(o)for(const r in s)Jt(r)||null!=a[r]||delete s[r]};function ae(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const le=Le;function ce(t){return ue(t)}function ue(t,e){ae();const n=(0,r.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=r.tE,insertStaticContent:m}=t,y=(t,e,n,i=null,r=null,s=null,o=void 0,a=null,l=!!e.dynamicChildren)=>{if(t===e)return;t&&!Qe(t,e)&&(i=J(t),X(t,r,s,!0),t=null),-2===e.patchFlag&&(l=!1,e.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=e;switch(c){case Ve:b(t,e,n,i);break;case Fe:w(t,e,n,i);break;case Ue:null==t&&T(e,n,i,o);break;case Pe:L(t,e,n,i,r,s,o,a,l);break;default:1&h?A(t,e,n,i,r,s,o,a,l):6&h?P(t,e,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(t,e,n,i,r,s,o,a,l,nt)}null!=u&&r&&H(u,t&&t.ref,s,e||t,!e)},b=(t,e,n,i)=>{if(null==t)s(e.el=c(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,i)=>{null==t?s(e.el=u(e.children||""),n,i):e.el=t.el},T=(t,e,n,i)=>{[t.el,t.anchor]=m(t.children,e,n,i,t.el,t.anchor)},S=({el:t,anchor:e},n,i)=>{let r;while(t&&t!==e)r=p(t),s(t,n,i),t=r;s(e,n,i)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,i,r,s,o,a,l)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?I(e,n,i,r,s,o,a,l):O(t,e,r,s,o,a,l)},I=(t,e,n,i,o,c,u,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=l(t.type,c,g&&g.is,g),8&m?f(d,t.children):16&m&&D(t.children,d,null,i,o,he(t,c),u,h),v&&k(t,null,i,"created"),x(d,t,t.scopeId,u,i),g){for(const t in g)"value"===t||(0,r.SU)(t)||a(d,t,null,g[t],c,i);"value"in g&&a(d,"value",null,g.value,c),(p=g.onVnodeBeforeMount)&&hn(p,i,t)}v&&k(t,null,i,"beforeMount");const b=de(o,y);b&&y.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||b||v)&&le((()=>{p&&hn(p,i,t),b&&y.enter(d),v&&k(t,null,i,"mounted")}),o)},x=(t,e,n,i,r)=>{if(n&&g(t,n),i)for(let s=0;s<i.length;s++)g(t,i[s]);if(r){let n=r.subTree;if(e===n||Me(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=r.vnode;x(t,e,e.scopeId,e.slotScopeIds,r.parent)}}},D=(t,e,n,i,r,s,o,a,l=0)=>{for(let c=l;c<t.length;c++){const l=t[c]=a?ln(t[c]):an(t[c]);y(null,l,e,n,i,r,s,o,a)}},O=(t,e,n,i,s,o,l)=>{const c=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=e;u|=16&t.patchFlag;const p=t.props||r.MZ,g=e.props||r.MZ;let m;if(n&&fe(n,!1),(m=g.onVnodeBeforeUpdate)&&hn(m,n,e,t),d&&k(e,t,n,"beforeUpdate"),n&&fe(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(c,""),h?R(t.dynamicChildren,h,c,n,i,he(e,s),o):l||j(t,e,c,null,n,i,he(e,s),o,!1),u>0){if(16&u)M(c,p,g,n,s);else if(2&u&&p.class!==g.class&&a(c,"class",null,g.class,s),4&u&&a(c,"style",p.style,g.style,s),8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const i=t[e],r=p[i],o=g[i];o===r&&"value"!==i||a(c,i,r,o,s,n)}}1&u&&t.children!==e.children&&f(c,e.children)}else l||null!=h||M(c,p,g,n,s);((m=g.onVnodeUpdated)||d)&&le((()=>{m&&hn(m,n,e,t),d&&k(e,t,n,"updated")}),i)},R=(t,e,n,i,r,s,o)=>{for(let a=0;a<e.length;a++){const l=t[a],c=e[a],u=l.el&&(l.type===Pe||!Qe(l,c)||198&l.shapeFlag)?d(l.el):n;y(l,c,u,null,i,r,s,o,!0)}},M=(t,e,n,i,s)=>{if(e!==n){if(e!==r.MZ)for(const o in e)(0,r.SU)(o)||o in n||a(t,o,e[o],null,s,i);for(const o in n){if((0,r.SU)(o))continue;const l=n[o],c=e[o];l!==c&&"value"!==o&&a(t,o,c,l,s,i)}"value"in n&&a(t,"value",e.value,n.value,s)}},L=(t,e,n,i,r,o,a,l,u)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(l=l?l.concat(g):g),null==t?(s(h,n,i),s(f,n,i),D(e.children||[],n,f,r,o,a,l,u)):d>0&&64&d&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,r,o,a,l),(null!=e.key||r&&e===r.subTree)&&pe(t,e,!0)):j(t,e,n,f,r,o,a,l,u)},P=(t,e,n,i,r,s,o,a,l)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?r.ctx.activate(e,n,i,o,l):V(e,n,i,r,s,o,l):F(t,e,l)},V=(t,e,n,i,r,s,o)=>{const a=t.component=pn(t,i,r);if(G(t)&&(a.ctx.renderer=nt),Cn(a,!1,o),a.asyncDep){if(r&&r.registerDep(a,U,o),!t.el){const t=a.subTree=tn(Fe);w(null,t,e,n)}}else U(a,t,e,n,r,s,o)},F=(t,e,n)=>{const i=e.component=t.component;if(Ne(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void B(i,e,n);i.next=e,i.update()}else e.el=t.el,i.vnode=e},U=(t,e,n,s,o,a,l)=>{const c=()=>{if(t.isMounted){let{next:e,bu:n,u:i,parent:s,vnode:u}=t;{const n=me(t);if(n)return e&&(e.el=u.el,B(t,e,l)),void n.asyncDep.then((()=>{t.isUnmounted||c()}))}let h,f=e;0,fe(t,!1),e?(e.el=u.el,B(t,e,l)):e=u,n&&(0,r.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&hn(h,s,e,u),fe(t,!0);const p=xe(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),J(g),t,o,a),e.el=p.el,null===f&&Re(t,p.el),i&&le(i,o),(h=e.props&&e.props.onVnodeUpdated)&&le((()=>hn(h,s,e,u)),o)}else{let i;const{el:l,props:c}=e,{bm:u,m:h,parent:f,root:d,type:p}=t,g=K(e);if(fe(t,!1),u&&(0,r.DY)(u),!g&&(i=c&&c.onVnodeBeforeMount)&&hn(i,f,e),fe(t,!0),l&&rt){const e=()=>{t.subTree=xe(t),rt(l,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(l,t,e):e()}else{d.ce&&d.ce._injectChildStyle(p);const i=t.subTree=xe(t);0,y(null,i,n,s,t,o,a),e.el=i.el}if(h&&le(h,o),!g&&(i=c&&c.onVnodeMounted)){const t=e;le((()=>hn(i,f,t)),o)}(256&e.shapeFlag||f&&K(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&le(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const u=t.effect=new i.X2(c);t.scope.off();const h=t.update=u.run.bind(u),f=t.job=u.runIfDirty.bind(u);f.i=t,f.id=t.uid,u.scheduler=()=>v(f),fe(t,!0),h()},B=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,qt(t,e.props,r,n),oe(t,e.children,n),(0,i.C4)(),E(t),(0,i.bl)()},j=(t,e,n,i,r,s,o,a,l=!1)=>{const c=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(c,h,n,i,r,s,o,a,l);if(256&d)return void $(c,h,n,i,r,s,o,a,l)}8&p?(16&u&&Z(c,r,s),h!==c&&f(n,h)):16&u?16&p?z(c,h,n,i,r,s,o,a,l):Z(c,r,s,!0):(8&u&&f(n,""),16&p&&D(h,n,i,r,s,o,a,l))},$=(t,e,n,i,s,o,a,l,c)=>{t=t||r.Oj,e=e||r.Oj;const u=t.length,h=e.length,f=Math.min(u,h);let d;for(d=0;d<f;d++){const i=e[d]=c?ln(e[d]):an(e[d]);y(t[d],i,n,null,s,o,a,l,c)}u>h?Z(t,s,o,!0,!1,f):D(e,n,i,s,o,a,l,c,f)},z=(t,e,n,i,s,o,a,l,c)=>{let u=0;const h=e.length;let f=t.length-1,d=h-1;while(u<=f&&u<=d){const i=t[u],r=e[u]=c?ln(e[u]):an(e[u]);if(!Qe(i,r))break;y(i,r,n,null,s,o,a,l,c),u++}while(u<=f&&u<=d){const i=t[f],r=e[d]=c?ln(e[d]):an(e[d]);if(!Qe(i,r))break;y(i,r,n,null,s,o,a,l,c),f--,d--}if(u>f){if(u<=d){const t=d+1,r=t<h?e[t].el:i;while(u<=d)y(null,e[u]=c?ln(e[u]):an(e[u]),n,r,s,o,a,l,c),u++}}else if(u>d)while(u<=f)X(t[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=d;u++){const t=e[u]=c?ln(e[u]):an(e[u]);null!=t.key&&m.set(t.key,u)}let v,b=0;const w=d-g+1;let E=!1,_=0;const T=new Array(w);for(u=0;u<w;u++)T[u]=0;for(u=p;u<=f;u++){const i=t[u];if(b>=w){X(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Qe(i,e[v])){r=v;break}void 0===r?X(i,s,o,!0):(T[r-g]=u+1,r>=_?_=r:E=!0,y(i,e[r],n,null,s,o,a,l,c),b++)}const S=E?ge(T):r.Oj;for(v=S.length-1,u=w-1;u>=0;u--){const t=g+u,r=e[t],f=t+1<h?e[t+1].el:i;0===T[u]?y(null,r,n,f,s,o,a,l,c):E&&(v<0||u!==S[v]?q(r,n,f,2):v--)}}},q=(t,e,n,i,r=null)=>{const{el:a,type:l,transition:c,children:u,shapeFlag:h}=t;if(6&h)return void q(t.component.subTree,e,n,i);if(128&h)return void t.suspense.move(e,n,i);if(64&h)return void l.move(t,e,n,nt);if(l===Pe){s(a,e,n);for(let t=0;t<u.length;t++)q(u[t],e,n,i);return void s(t.anchor,e,n)}if(l===Ue)return void S(t,e,n);const f=2!==i&&1&h&&c;if(f)if(0===i)c.beforeEnter(a),s(a,e,n),le((()=>c.enter(a)),r);else{const{leave:i,delayLeave:r,afterLeave:l}=c,u=()=>{t.ctx.isUnmounted?o(a):s(a,e,n)},h=()=>{i(a,(()=>{u(),l&&l()}))};r?r(a,u,h):h()}else s(a,e,n)},X=(t,e,n,r=!1,s=!1)=>{const{type:o,props:a,ref:l,children:c,dynamicChildren:u,shapeFlag:h,patchFlag:f,dirs:d,cacheIndex:p}=t;if(-2===f&&(s=!1),null!=l&&((0,i.C4)(),H(l,null,n,t,!0),(0,i.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const g=1&h&&d,m=!K(t);let y;if(m&&(y=a&&a.onVnodeBeforeUnmount)&&hn(y,e,t),6&h)Y(t.component,n,r);else{if(128&h)return void t.suspense.unmount(n,r);g&&k(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,nt,r):u&&!u.hasOnce&&(o!==Pe||f>0&&64&f)?Z(u,e,n,!1,!0):(o===Pe&&384&f||!s&&16&h)&&Z(c,e,n),r&&W(t)}(m&&(y=a&&a.onVnodeUnmounted)||g)&&le((()=>{y&&hn(y,e,t),g&&k(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:i,transition:r}=t;if(e===Pe)return void Q(n,i);if(e===Ue)return void C(t);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&t.shapeFlag&&r&&!r.persisted){const{leave:e,delayLeave:i}=r,o=()=>e(n,s);i?i(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:i,scope:s,job:o,subTree:a,um:l,m:c,a:u,parent:h,slots:{__:f}}=t;ye(c),ye(u),i&&(0,r.DY)(i),h&&(0,r.cy)(f)&&f.forEach((t=>{h.renderCache[t]=void 0})),s.stop(),o&&(o.flags|=8,X(a,t,e,n)),l&&le(l,e),le((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Z=(t,e,n,i=!1,r=!1,s=0)=>{for(let o=s;o<t.length;o++)X(t[o],e,n,i,r)},J=t=>{if(6&t.shapeFlag)return J(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[N];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&X(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,E(),_(),tt=!1)},nt={p:y,um:X,m:q,r:W,mt:V,mc:D,pc:j,pbc:R,n:J,o:t};let it,rt;return e&&([it,rt]=e(nt)),{render:et,hydrate:it,createApp:Ut(et,it)}}function he({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fe({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function de(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pe(t,e,n=!1){const i=t.children,s=e.children;if((0,r.cy)(i)&&(0,r.cy)(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=ln(s[r]),e.el=t.el),n||-2===e.patchFlag||pe(t,e)),e.type===Ve&&(e.el=t.el),e.type!==Fe||e.el||(e.el=t.el)}}function ge(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const l=t[i];if(0!==l){if(r=n[n.length-1],t[r]<l){e[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function me(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:me(e)}function ye(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ve=Symbol.for("v-scx"),be=()=>{{const t=$t(ve);return t}};function we(t,e,n){return Ee(t,e,n)}function Ee(t,e,n=r.MZ){const{immediate:s,deep:a,flush:l,once:c}=n;const u=(0,r.X$)({},n);const h=e&&s||!e&&"post"!==l;let f;if(Sn)if("sync"===l){const t=be();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=r.tE,t.resume=r.tE,t.pause=r.tE,t}const d=gn;u.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===l?u.scheduler=t=>{le(t,d&&d.suspense)}:"sync"!==l&&(p=!0,u.scheduler=(t,e)=>{e?t():v(t)}),u.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,i.wB)(t,e,u);return Sn&&(f?f.push(g):h&&g()),g}function _e(t,e,n){const i=this.proxy,s=(0,r.Kg)(t)?t.includes(".")?Te(i,t):()=>i[t]:t.bind(i,i);let o;(0,r.Tn)(e)?o=e:(o=e.handler,n=e);const a=bn(this),l=Ee(s,o.bind(i),n);return a(),l}function Te(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Se=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,r.PT)(e)}Modifiers`]||t[`${(0,r.Tg)(e)}Modifiers`];function Ce(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||r.MZ;let s=n;const a=e.startsWith("update:"),l=a&&Se(i,e.slice(7));let c;l&&(l.trim&&(s=n.map((t=>(0,r.Kg)(t)?t.trim():t))),l.number&&(s=n.map(r.bB)));let u=i[c=(0,r.rU)(e)]||i[c=(0,r.rU)((0,r.PT)(e))];!u&&a&&(u=i[c=(0,r.rU)((0,r.Tg)(e))]),u&&o(u,t,6,s);const h=i[c+"Once"];if(h){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,o(h,t,6,s)}}function Ae(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},l=!1;if(!(0,r.Tn)(t)){const i=t=>{const n=Ae(t,e,!0);n&&(l=!0,(0,r.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||l?((0,r.cy)(o)?o.forEach((t=>a[t]=null)):(0,r.X$)(a,o),(0,r.Gv)(t)&&i.set(t,a),a):((0,r.Gv)(t)&&i.set(t,null),null)}function Ie(t,e){return!(!t||!(0,r.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,r.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,r.$3)(t,(0,r.Tg)(e))||(0,r.$3)(t,e))}function xe(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=I(t);let b,w;try{if(4&n.shapeFlag){const t=s||i,e=t;b=an(h.call(e,t,f,d,g,p,m)),w=c}else{const t=e;0,b=an(t.length>1?t(d,{attrs:c,slots:l,emit:u}):t(d,null)),w=e.props?c:De(c)}}catch(_){Be.length=0,a(_,t,1),b=tn(Fe)}let E=b;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(o&&t.some(r.CP)&&(w=ke(w,o)),E=rn(E,w,!1,!0))}return n.dirs&&(E=rn(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&B(E,n.transition),b=E,I(v),b}const De=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,r.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},ke=(t,e)=>{const n={};for(const i in t)(0,r.CP)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function Ne(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||Oe(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?Oe(i,o,c):!!o;if(8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==i[n]&&!Ie(c,n))return!0}}return!1}function Oe(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ie(n,s))return!0}return!1}function Re({vnode:t,parent:e},n){while(e){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i!==t)break;(t=e.vnode).el=n,e=e.parent}}const Me=t=>t.__isSuspense;function Le(t,e){e&&e.pendingBranch?(0,r.cy)(t)?e.effects.push(...t):e.effects.push(t):w(t)}const Pe=Symbol.for("v-fgt"),Ve=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),Ue=Symbol.for("v-stc"),Be=[];let je=null;function $e(t=!1){Be.push(je=t?null:[])}function He(){Be.pop(),je=Be[Be.length-1]||null}let Ke=1;function Ge(t,e=!1){Ke+=t,t<0&&je&&e&&(je.hasOnce=!0)}function ze(t){return t.dynamicChildren=Ke>0?je||r.Oj:null,He(),Ke>0&&je&&je.push(t),t}function qe(t,e,n,i,r,s){return ze(Je(t,e,n,i,r,s,!0))}function Xe(t,e,n,i,r){return ze(tn(t,e,n,i,r,!0))}function We(t){return!!t&&!0===t.__v_isVNode}function Qe(t,e){return t.type===e.type&&t.key===e.key}const Ye=({key:t})=>null!=t?t:null,Ze=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,r.Kg)(t)||(0,i.i9)(t)||(0,r.Tn)(t)?{i:C,r:t,k:e,f:!!n}:t:null);function Je(t,e=null,n=null,i=0,s=null,o=(t===Pe?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ye(e),ref:e&&Ze(e),scopeId:A,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:C};return l?(cn(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=(0,r.Kg)(n)?8:16),Ke>0&&!a&&je&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&je.push(c),c}const tn=en;function en(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==dt||(t=Fe),We(t)){const i=rn(t,e,!0);return n&&cn(i,n),Ke>0&&!a&&je&&(6&i.shapeFlag?je[je.indexOf(t)]=i:je.push(i)),i.patchFlag=-2,i}if(Rn(t)&&(t=t.__vccOpts),e){e=nn(e);let{class:t,style:n}=e;t&&!(0,r.Kg)(t)&&(e.class=(0,r.C4)(t)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),e.style=(0,r.Tr)(n))}const l=(0,r.Kg)(t)?1:Me(t)?128:O(t)?64:(0,r.Gv)(t)?4:(0,r.Tn)(t)?2:0;return Je(t,e,n,s,o,l,a,!0)}function nn(t){return t?(0,i.ju)(t)||Gt(t)?(0,r.X$)({},t):t:null}function rn(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:l,transition:c}=t,u=e?un(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ye(u),ref:e&&e.ref?n&&o?(0,r.cy)(o)?o.concat(Ze(e)):[o,Ze(e)]:Ze(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&B(h,c.clone(h)),h}function sn(t=" ",e=0){return tn(Ve,null,t,e)}function on(t="",e=!1){return e?($e(),Xe(Fe,null,t)):tn(Fe,null,t)}function an(t){return null==t||"boolean"===typeof t?tn(Fe):(0,r.cy)(t)?tn(Pe,null,t.slice()):We(t)?ln(t):tn(Ve,null,String(t))}function ln(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:rn(t)}function cn(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,r.cy)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),cn(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||Gt(e)?3===i&&C&&(1===C.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=C}}else(0,r.Tn)(e)?(e={default:e,_ctx:C},n=32):(e=String(e),64&i?(n=16,e=[sn(e)]):n=8);t.children=e,t.shapeFlag|=n}function un(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,r.C4)([e.class,i.class]));else if("style"===t)e.style=(0,r.Tr)([e.style,i.style]);else if((0,r.Mp)(t)){const n=e[t],s=i[t];!s||n===s||(0,r.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function hn(t,e,n,i=null){o(t,e,7,[n,i])}const fn=Vt();let dn=0;function pn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||fn,a={uid:dn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yt(s,o),emitsOptions:Ae(s,o),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:s.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ce.bind(null,a),t.ce&&t.ce(a),a}let gn=null;const mn=()=>gn||C;let yn,vn;{const t=(0,r.We)(),e=(e,n)=>{let i;return(i=t[e])||(i=t[e]=[]),i.push(n),t=>{i.length>1?i.forEach((e=>e(t))):i[0](t)}};yn=e("__VUE_INSTANCE_SETTERS__",(t=>gn=t)),vn=e("__VUE_SSR_SETTERS__",(t=>Sn=t))}const bn=t=>{const e=gn;return yn(t),t.scope.on(),()=>{t.scope.off(),yn(e)}},wn=()=>{gn&&gn.scope.off(),yn(null)};function En(t){return 4&t.vnode.shapeFlag}let _n,Tn,Sn=!1;function Cn(t,e=!1,n=!1){e&&vn(e);const{props:i,children:r}=t.vnode,s=En(t);zt(t,i,s,e),se(t,r,n||e);const o=s?An(t,e):void 0;return e&&vn(!1),o}function An(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wt);const{setup:o}=n;if(o){(0,i.C4)();const n=t.setupContext=o.length>1?kn(t):null,l=bn(t),c=s(o,t,0,[t.props,n]),u=(0,r.yL)(c);if((0,i.bl)(),l(),!u&&!t.sp||K(t)||$(t),u){if(c.then(wn,wn),e)return c.then((n=>{In(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else In(t,c,e)}else xn(t,e)}function In(t,e,n){(0,r.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,r.Gv)(e)&&(t.setupState=(0,i.Pr)(e)),xn(t,n)}function xn(t,e,n){const s=t.type;if(!t.render){if(!e&&_n&&!s.render){const e=s.template||It(t).template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:o},i),a);s.render=_n(e,l)}}t.render=s.render||r.tE,Tn&&Tn(t)}{const e=bn(t);(0,i.C4)();try{Tt(t)}finally{(0,i.bl)(),e()}}}const Dn={get(t,e){return(0,i.u4)(t,"get",""),t[e]}};function kn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Dn),slots:t.slots,emit:t.emit,expose:e}}function Nn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in vt?vt[n](t):void 0},has(t,e){return e in t||e in vt}})):t.proxy}function On(t,e=!0){return(0,r.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Rn(t){return(0,r.Tn)(t)&&"__vccOpts"in t}const Mn=(t,e)=>{const n=(0,i.EW)(t,e,Sn);return n};const Ln="3.5.16"},774:(t,e,n)=>{n.d(e,{cY:()=>b,FA:()=>P,g:()=>L,u:()=>u,Uj:()=>c,Fy:()=>_,bD:()=>U,T9:()=>v,yU:()=>y,mS:()=>h,Ku:()=>j,ZQ:()=>x,zJ:()=>w,zW:()=>O,nr:()=>k,Ov:()=>N,gE:()=>E,P1:()=>I,eX:()=>R});const i=()=>{},r=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},s=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(h=64)),i.push(n[c],n[u],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const l=r<t.length,c=l?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==h)throw new a;const f=e<<2|o>>4;if(i.push(f),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==h){const t=c<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return l(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_API_URL:"https://your-api-domain.com",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},g=()=>{try{return i()||f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},v=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t){return t.endsWith(".cloudworkstations.dev")}async function E(t){const e=await fetch(t,{credentials:"include"});return e.ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}const T={};function S(){const t={prod:[],emulator:[]};for(const e of Object.keys(T))T[e]?t.emulator.push(e):t.prod.push(e);return t}function C(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let A=!1;function I(t,e){if("undefined"===typeof window||"undefined"===typeof document||!w(window.location.host)||T[t]===e||T[t]||A)return;function n(t){return`__firebase__banner__${t}`}T[t]=e;const i="__firebase__banner",r=S(),s=r.prod.length>0;function o(){const t=document.getElementById(i);t&&t.remove()}function a(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}function l(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}function c(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{A=!0,o()},t}function u(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}function h(){const t=C(i),e=n("text"),r=document.getElementById(e)||document.createElement("span"),o=n("learnmore"),h=document.getElementById(o)||document.createElement("a"),f=n("preprendIcon"),d=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;a(e),u(h,o);const n=c();l(d,f),e.append(d,r,h,n),document.body.appendChild(e)}s?(r.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',r.innerText="Preview backend running in this workspace."),r.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",h):h()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function D(){var t;const e=null===(t=g())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function k(){return!D()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N(){return!D()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function O(){try{return"object"===typeof indexedDB}catch(t){return!1}}function R(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M="FirebaseError";class L extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=M,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?V(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new L(i,o,n);return a}}function V(t,e){return t.replace(F,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(B(n)&&B(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function B(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){return t&&t._delegate?t._delegate:t}},852:(t,e,n)=>{n.d(e,{h1:()=>c,uA:()=>r});var i=n(774);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}}}]);
//# sourceMappingURL=chunk-vendors.bd0aa83f81c718f0.js.map