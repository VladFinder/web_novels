"use strict";(self["webpackChunkweb_novels"]=self["webpackChunkweb_novels"]||[]).push([[504],{33:(t,e,n)=>{
/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}n.d(e,{$3:()=>f,$H:()=>V,BH:()=>K,BX:()=>nt,Bm:()=>_,C4:()=>Y,CE:()=>g,CP:()=>l,DY:()=>F,Gv:()=>E,J$:()=>J,Kg:()=>b,MZ:()=>s,Mp:()=>c,NO:()=>a,Oj:()=>i,PT:()=>O,Qd:()=>A,Ro:()=>$,SU:()=>D,TF:()=>h,Tg:()=>M,Tn:()=>w,Tr:()=>H,We:()=>q,X$:()=>u,Y2:()=>tt,ZH:()=>L,Zf:()=>I,bB:()=>B,cy:()=>p,gd:()=>v,pD:()=>r,rU:()=>P,tE:()=>o,u3:()=>rt,vM:()=>m,v_:()=>it,yI:()=>x,yL:()=>T,yQ:()=>U});const s={},i=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),l=t=>t.startsWith("onUpdate:"),u=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),y=t=>"[object Date]"===S(t),v=t=>"[object RegExp]"===S(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,_=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),C=Object.prototype.toString,S=t=>C.call(t),I=t=>S(t).slice(8,-1),A=t=>"[object Object]"===S(t),x=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,D=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-(\w)/g,O=k((t=>t.replace(N,((t,e)=>e?e.toUpperCase():"")))),R=/\B([A-Z])/g,M=k((t=>t.replace(R,"-$1").toLowerCase())),L=k((t=>t.charAt(0).toUpperCase()+t.slice(1))),P=k((t=>{const e=t?`on${L(t)}`:"";return e})),V=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},U=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},B=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let j;const q=()=>j||(j="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",K=r(z);function H(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=b(r)?X(r):H(r);if(s)for(const t in s)e[t]=s[t]}return e}if(b(t)||E(t))return t}const G=/;(?![^(]*\))/g,Q=/:([^]+)/,W=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(W,"").split(G).forEach((t=>{if(t){const n=t.split(Q);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J=r(Z);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=_(t),r=_(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const st=t=>!(!t||!0!==t["__v_isRef"]),it=t=>b(t)?t:null==t?"":p(t)||E(t)&&(t.toString===C||!w(t.toString))?st(t)?it(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>st(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:_(e)?at(e):!E(e)||p(e)||A(e)?e:String(e),at=(t,e="")=>{var n;return _(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},72:(t,e,n)=>{n.d(e,{cY:()=>w,FA:()=>P,g:()=>L,u:()=>u,Uj:()=>l,Fy:()=>E,bD:()=>U,T9:()=>v,yU:()=>y,mS:()=>h,Ku:()=>$,ZQ:()=>x,zJ:()=>b,zW:()=>O,nr:()=>k,Ov:()=>N,gE:()=>_,P1:()=>A,eX:()=>R});const r=()=>{},s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const c=s<t.length,l=c?n[t.charAt(s)]:64;++s;const u=s<t.length,h=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==l||null==h)throw new a;const d=e<<2|o>>4;if(r.push(d),64!==l){const t=o<<4&240|l>>2;if(r.push(t),64!==h){const t=l<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=s(t);return o.encodeByteArray(e,!0)},l=function(t){return c(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */const d=()=>h().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_API_URL:"https://your-api-domain.com",BASE_URL:"/test/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||d()||f()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function b(t){return t.endsWith(".cloudworkstations.dev")}async function _(t){const e=await fetch(t,{credentials:"include"});return e.ok}
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
 */function E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}const T={};function C(){const t={prod:[],emulator:[]};for(const e of Object.keys(T))T[e]?t.emulator.push(e):t.prod.push(e);return t}function S(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let I=!1;function A(t,e){if("undefined"===typeof window||"undefined"===typeof document||!b(window.location.host)||T[t]===e||T[t]||I)return;function n(t){return`__firebase__banner__${t}`}T[t]=e;const r="__firebase__banner",s=C(),i=s.prod.length>0;function o(){const t=document.getElementById(r);t&&t.remove()}function a(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}function c(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}function l(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{I=!0,o()},t}function u(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}function h(){const t=S(r),e=n("text"),s=document.getElementById(e)||document.createElement("span"),o=n("learnmore"),h=document.getElementById(o)||document.createElement("a"),d=n("preprendIcon"),f=document.getElementById(d)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;a(e),u(h,o);const n=l();c(f,d),e.append(f,s,h,n),document.body.appendChild(e)}i?(s.innerText="Preview backend disconnected.",f.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(f.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',s.innerText="Preview backend running in this workspace."),s.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",h):h()}
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
 */function x(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function D(){var t;const e=null===(t=g())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function k(){return!D()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N(){return!D()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function O(){try{return"object"===typeof indexedDB}catch(t){return!1}}function R(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const M="FirebaseError";class L extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=M,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?V(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new L(r,o,n);return a}}function V(t,e){return t.replace(F,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
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
 */function U(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(B(n)&&B(i)){if(!U(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function B(t){return null!==t&&"object"===typeof t}
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
function $(t){return t&&t._delegate?t._delegate:t}},125:(t,e,n)=>{n.d(e,{h1:()=>l,uA:()=>s});var r=n(72);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const i="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},223:(t,e,n)=>{n.d(e,{Wp:()=>r.Wp});var r=n(928),s="firebase",i="11.9.1";
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
(0,r.KO)(s,i,"app")},262:(t,e)=>{e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},424:(t,e,n)=>{n.d(e,{$b:()=>s,Vy:()=>l});
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
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},641:(t,e,n)=>{n.d(e,{$u:()=>rt,CE:()=>He,Df:()=>B,FK:()=>Le,Gy:()=>M,K9:()=>ce,Lk:()=>Ze,MZ:()=>U,OW:()=>F,QP:()=>P,Wv:()=>Ge,bF:()=>Je,dY:()=>m,g2:()=>ht,nI:()=>pn,pI:()=>gt,qL:()=>o,uX:()=>$e});var r=n(953),s=n(33);function i(t,e,n,r){try{return r?t(...r):t()}catch(s){a(s,e,n)}}function o(t,e,n,r){if((0,s.Tn)(t)){const o=i(t,e,n,r);return o&&(0,s.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,s.cy)(t)){const s=[];for(let i=0;i<t.length;i++)s.push(o(t[i],e,n,r));return s}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=e&&e.appContext.config||s.MZ;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(s){const e=s.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;s=s.parent}if(l)return(0,r.C4)(),i(l,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,a,o,u)}function c(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const l=[];let u=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=u+1,n=l.length;while(e<n){const r=e+n>>>1,s=l[r],i=T(s);i<t||i===t&&2&s.flags?e=r+1:n=r}return e}function v(t){if(!(1&t.flags)){const e=T(t),n=l[l.length-1];!n||!(2&t.flags)&&e>=T(n)?l.push(t):l.splice(y(e),0,t),t.flags|=1,w()}}function w(){g||(g=p.then(C))}function b(t){(0,s.cy)(t)?h.push(...t):d&&-1===t.id?d.splice(f+1,0,t):1&t.flags||(h.push(t),t.flags|=1),w()}function _(t,e,n=u+1){for(0;n<l.length;n++){const e=l[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,l.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>T(t)-T(e)));if(h.length=0,d)return void d.push(...t);for(d=t,f=0;f<d.length;f++){const t=d[f];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}d=null,f=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function C(t){s.tE;try{for(u=0;u<l.length;u++){const t=l[u];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),i(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;u<l.length;u++){const t=l[u];t&&(t.flags&=-2)}u=-1,l.length=0,E(t),g=null,(l.length||h.length)&&C(t)}}let S=null,I=null;function A(t){const e=S;return S=t,I=t&&t.type.__scopeId||null,e}function x(t,e=S,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&ze(-1);const s=A(e);let i;try{i=t(...n)}finally{A(s),r._d&&ze(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function D(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const l=i[c];a&&(l.oldValue=a[c].value);let u=l.dir[s];u&&((0,r.C4)(),o(u,n,8,[t.el,l,t,e]),(0,r.bl)())}}const k=Symbol("_vte"),N=t=>t.__isTeleport;const O=Symbol("_leaveCb"),R=Symbol("_enterCb");function M(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return et((()=>{t.isMounted=!0})),st((()=>{t.isUnmounting=!0})),t}const L=[Function,Array],P={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function V(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function F(t,e,n,r,i){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:_}=e,E=String(t.key),T=V(n,t),C=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];C(t,e),(0,s.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:c,persisted:l,beforeEnter(e){let r=u;if(!n.isMounted){if(!a)return;r=v||u}e[O]&&e[O](!0);const s=T[E];s&&We(t,s)&&s.el[O]&&s.el[O](),C(r,[e])},enter(t){let e=h,r=d,s=f;if(!n.isMounted){if(!a)return;e=w||h,r=b||d,s=_||f}let i=!1;const o=t[R]=e=>{i||(i=!0,C(e?s:r,[t]),I.delayedLeave&&I.delayedLeave(),t[R]=void 0)};e?S(e,[t,o]):o()},leave(e,r){const s=String(t.key);if(e[R]&&e[R](!0),n.isUnmounting)return r();C(p,[e]);let i=!1;const o=e[O]=n=>{i||(i=!0,r(),C(n?y:m,[e]),e[O]=void 0,T[s]===t&&delete T[s])};T[s]=t,g?S(g,[e,o]):o()},clone(t){const s=F(t,e,n,r,i);return i&&i(s),s}};return I}function U(t,e){6&t.shapeFlag&&t.component?(t.transition=e,U(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function B(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Le?(128&o.patchFlag&&s++,r=r.concat(B(o.children,e,a))):(e||o.type!==Ve)&&r.push(null!=a?nn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function $(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function j(t,e,n,o,a=!1){if((0,s.cy)(t))return void t.forEach(((t,r)=>j(t,e&&((0,s.cy)(e)?e[r]:e),n,o,a)));if(q(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&j(t,e,n,o.component.subTree));const c=4&o.shapeFlag?Dn(o.component):o.el,l=a?null:c,{i:u,r:h}=t;const d=e&&e.r,f=u.refs===s.MZ?u.refs={}:u.refs,p=u.setupState,g=(0,r.ux)(p),m=p===s.MZ?()=>!1:t=>(0,s.$3)(g,t);if(null!=d&&d!==h&&((0,s.Kg)(d)?(f[d]=null,m(d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,s.Tn)(h))i(h,u,12,[l,f]);else{const e=(0,s.Kg)(h),i=(0,r.i9)(h);if(e||i){const r=()=>{if(t.f){const n=e?m(h)?p[h]:f[h]:h.value;a?(0,s.cy)(n)&&(0,s.TF)(n,c):(0,s.cy)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],m(h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=l,m(h)&&(p[h]=l)):i&&(h.value=l,t.k&&(f[t.k]=l))};l?(r.id=-1,ae(r,n)):r()}else 0}}(0,s.We)().requestIdleCallback,(0,s.We)().cancelIdleCallback;const q=t=>!!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */const z=t=>t.type.__isKeepAlive;RegExp,RegExp;function K(t,e){return(0,s.cy)(t)?t.some((t=>K(t,e))):(0,s.Kg)(t)?t.split(",").includes(e):!!(0,s.gd)(t)&&(t.lastIndex=0,t.test(e))}function H(t,e){Q(t,"a",e)}function G(t,e){Q(t,"da",e)}function Q(t,e,n=fn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Z(e,r,n),n){let t=n.parent;while(t&&t.parent)z(t.parent.vnode)&&W(r,e,n,t),t=t.parent}}function W(t,e,n,r){const i=Z(e,t,r,!0);it((()=>{(0,s.TF)(r[e],i)}),n)}function X(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Y(t){return 128&t.shapeFlag?t.ssContent:t}function Z(t,e,n=fn,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{(0,r.C4)();const i=yn(n),a=o(e,n,t,s);return i(),(0,r.bl)(),a});return s?i.unshift(a):i.push(a),a}}const J=t=>(e,n=fn)=>{En&&"sp"!==t||Z(t,((...t)=>e(...t)),n)},tt=J("bm"),et=J("m"),nt=J("bu"),rt=J("u"),st=J("bum"),it=J("um"),ot=J("sp"),at=J("rtg"),ct=J("rtc");function lt(t,e=fn){Z("ec",t,e)}const ut="components";function ht(t,e){return ft(ut,t,!0,e)||t}const dt=Symbol.for("v-ndc");function ft(t,e,n=!0,r=!1){const i=S||fn;if(i){const n=i.type;if(t===ut){const t=kn(n,!1);if(t&&(t===e||t===(0,s.PT)(e)||t===(0,s.ZH)((0,s.PT)(e))))return n}const o=pt(i[t]||n[t],e)||pt(i.appContext[t],e);return!o&&r?n:o}}function pt(t,e){return t&&(t[e]||t[(0,s.PT)(e)]||t[(0,s.ZH)((0,s.PT)(e))])}function gt(t,e,n,i){let o;const a=n&&n[i],c=(0,s.cy)(t);if(c||(0,s.Kg)(t)){const n=c&&(0,r.g8)(t);let s=!1,i=!1;n&&(s=!(0,r.fE)(t),i=(0,r.Tm)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let c=0,l=t.length;c<l;c++)o[c]=e(s?i?(0,r.a1)((0,r.lJ)(t[c])):(0,r.lJ)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,s.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];o[r]=e(t[s],s,r,a&&a[r])}}else o=[];return n&&(n[i]=o),o}const mt=t=>t?wn(t)?Dn(t):mt(t.parent):null,yt=(0,s.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mt(t.parent),$root:t=>mt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>It(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>_e.bind(t)}),vt=(t,e)=>t!==s.MZ&&!t.__isScriptSetup&&(0,s.$3)(t,e),wt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(vt(i,e))return c[e]=1,i[e];if(o!==s.MZ&&(0,s.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.$3)(h,e))return c[e]=3,a[e];if(n!==s.MZ&&(0,s.$3)(n,e))return c[e]=4,n[e];_t&&(c[e]=0)}}const d=yt[e];let f,p;return d?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),d(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==s.MZ&&(0,s.$3)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,s.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return vt(i,e)?(i[e]=n,!0):r!==s.MZ&&(0,s.$3)(r,e)?(r[e]=n,!0):!(0,s.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.MZ&&(0,s.$3)(t,a)||vt(e,a)||(c=o[0])&&(0,s.$3)(c,a)||(0,s.$3)(r,a)||(0,s.$3)(yt,a)||(0,s.$3)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bt(t){return(0,s.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let _t=!0;function Et(t){const e=It(t),n=t.proxy,i=t.ctx;_t=!1,e.beforeCreate&&Ct(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:C,renderTriggered:S,errorCaptured:I,serverPrefetch:A,expose:x,inheritAttrs:D,components:k,directives:N,filters:O}=e,R=null;if(h&&Tt(h,i,R),c)for(const r in c){const t=c[r];(0,s.Tn)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(_t=!0,a)for(const r in a){const t=a[r],e=(0,s.Tn)(t)?t.bind(n,n):(0,s.Tn)(t.get)?t.get.bind(n,n):s.tE;0;const o=!(0,s.Tn)(t)&&(0,s.Tn)(t.set)?t.set.bind(n):s.tE,c=On({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const r in l)St(l[r],i,n,r);if(u){const t=(0,s.Tn)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{Bt(e,t[e])}))}function M(t,e){(0,s.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Ct(d,t,"c"),M(tt,f),M(et,p),M(nt,g),M(rt,m),M(H,y),M(G,v),M(lt,I),M(ct,C),M(at,S),M(st,b),M(it,E),M(ot,A),(0,s.cy)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===s.tE&&(t.render=T),null!=D&&(t.inheritAttrs=D),k&&(t.components=k),N&&(t.directives=N),A&&$(t)}function Tt(t,e,n=s.tE){(0,s.cy)(t)&&(t=Nt(t));for(const i in t){const n=t[i];let o;o=(0,s.Gv)(n)?"default"in n?$t(n.from||i,n.default,!0):$t(n.from||i):$t(n),(0,r.i9)(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[i]=o}}function Ct(t,e,n){o((0,s.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function St(t,e,n,r){let i=r.includes(".")?Ee(n,r):()=>n[r];if((0,s.Kg)(t)){const n=e[t];(0,s.Tn)(n)&&we(i,n)}else if((0,s.Tn)(t))we(i,t.bind(n));else if((0,s.Gv)(t))if((0,s.cy)(t))t.forEach((t=>St(t,e,n,r)));else{const r=(0,s.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.Tn)(r)&&we(i,r,t)}else 0}function It(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let l;return c?l=c:i.length||n||r?(l={},i.length&&i.forEach((t=>At(l,t,a,!0))),At(l,e,a)):l=e,(0,s.Gv)(e)&&o.set(e,l),l}function At(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&At(t,i,n,!0),s&&s.forEach((e=>At(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=xt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const xt={data:Dt,props:Mt,emits:Mt,methods:Rt,computed:Rt,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Rt,directives:Rt,watch:Lt,provide:Dt,inject:kt};function Dt(t,e){return e?t?function(){return(0,s.X$)((0,s.Tn)(t)?t.call(this,this):t,(0,s.Tn)(e)?e.call(this,this):e)}:e:t}function kt(t,e){return Rt(Nt(t),Nt(e))}function Nt(t){if((0,s.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Rt(t,e){return t?(0,s.X$)(Object.create(null),t,e):e}function Mt(t,e){return t?(0,s.cy)(t)&&(0,s.cy)(e)?[...new Set([...t,...e])]:(0,s.X$)(Object.create(null),bt(t),bt(null!=e?e:{})):e}function Lt(t,e){if(!t)return e;if(!e)return t;const n=(0,s.X$)(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function Pt(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vt=0;function Ft(t,e){return function(n,r=null){(0,s.Tn)(n)||(n=(0,s.X$)({},n)),null==r||(0,s.Gv)(r)||(r=null);const i=Pt(),a=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Vt++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Rn,get config(){return i.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,s.Tn)(t.install)?(a.add(t),t.install(u,...e)):(0,s.Tn)(t)&&(a.add(t),t(u,...e))),u},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),u},component(t,e){return e?(i.components[t]=e,u):i.components[t]},directive(t,e){return e?(i.directives[t]=e,u):i.directives[t]},mount(s,o,a){if(!l){0;const c=u._ceVNode||Je(n,r);return c.appContext=i,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,s):t(c,s,a),l=!0,u._container=s,s.__vue_app__=u,Dn(c.component)}},onUnmount(t){c.push(t)},unmount(){l&&(o(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(t,e){return i.provides[t]=e,u},runWithContext(t){const e=Ut;Ut=u;try{return t()}finally{Ut=e}}};return u}}let Ut=null;function Bt(t,e){if(fn){let n=fn.provides;const r=fn.parent&&fn.parent.provides;r===n&&(n=fn.provides=Object.create(r)),n[t]=e}else 0}function $t(t,e,n=!1){const r=fn||S;if(r||Ut){let i=Ut?Ut._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.Tn)(e)?e.call(r&&r.proxy):e}else 0}const jt={},qt=()=>Object.create(jt),zt=t=>Object.getPrototypeOf(t)===jt;function Kt(t,e,n,s=!1){const i={},o=qt();t.propsDefaults=Object.create(null),Gt(t,e,i,o);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);n?t.props=s?i:(0,r.Gc)(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function Ht(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,r.ux)(o),[u]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;Gt(t,e,o,a)&&(h=!0);for(const i in l)e&&((0,s.$3)(e,i)||(r=(0,s.Tg)(i))!==i&&(0,s.$3)(e,r))||(u?!n||void 0===n[i]&&void 0===n[r]||(o[i]=Qt(u,l,i,void 0,t,!0)):delete o[i]);if(a!==l)for(const t in a)e&&(0,s.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(Ie(t.emitsOptions,i))continue;const c=e[i];if(u)if((0,s.$3)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s.PT)(i);o[e]=Qt(u,l,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Gt(t,e,n,i){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let r in e){if((0,s.SU)(r))continue;const u=e[r];let h;o&&(0,s.$3)(o,h=(0,s.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:Ie(t.emitsOptions,r)||r in i&&u===i[r]||(i[r]=u,l=!0)}if(a){const e=(0,r.ux)(n),i=c||s.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Qt(o,e,c,i[c],t,!(0,s.$3)(i,c))}}return l}function Qt(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,s.Tn)(t)){const{propsDefaults:s}=i;if(n in s)r=s[n];else{const o=yn(i);r=s[n]=t.call(null,e),o()}}else r=t;i.ce&&i.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.Tg)(n)||(r=!0))}return r}const Wt=new WeakMap;function Xt(t,e,n=!1){const r=n?Wt:e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let l=!1;if(!(0,s.Tn)(t)){const r=t=>{l=!0;const[n,r]=Xt(t,e,!0);(0,s.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!l)return(0,s.Gv)(t)&&r.set(t,s.Oj),s.Oj;if((0,s.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,s.PT)(o[h]);Yt(t)&&(a[t]=s.MZ)}else if(o){0;for(const t in o){const e=(0,s.PT)(t);if(Yt(e)){const n=o[t],r=a[e]=(0,s.cy)(n)||(0,s.Tn)(n)?{type:n}:(0,s.X$)({},n),i=r.type;let l=!1,u=!0;if((0,s.cy)(i))for(let t=0;t<i.length;++t){const e=i[t],n=(0,s.Tn)(e)&&e.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,s.Tn)(i)&&"Boolean"===i.name;r[0]=l,r[1]=u,(l||(0,s.$3)(r,"default"))&&c.push(e)}}}const u=[a,c];return(0,s.Gv)(t)&&r.set(t,u),u}function Yt(t){return"$"!==t[0]&&!(0,s.SU)(t)}const Zt=t=>"_"===t[0]||"$stable"===t,Jt=t=>(0,s.cy)(t)?t.map(sn):[sn(t)],te=(t,e,n)=>{if(e._n)return e;const r=x(((...t)=>Jt(e(...t))),n);return r._c=!1,r},ee=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Zt(i))continue;const n=t[i];if((0,s.Tn)(n))e[i]=te(i,n,r);else if(null!=n){0;const t=Jt(n);e[i]=()=>t}}},ne=(t,e)=>{const n=Jt(e);t.slots.default=()=>n},re=(t,e,n)=>{for(const r in e)!n&&Zt(r)||(t[r]=e[r])},se=(t,e,n)=>{const r=t.slots=qt();if(32&t.vnode.shapeFlag){const t=e._;t?(re(r,e,n),n&&(0,s.yQ)(r,"_",t,!0)):ee(e,r)}else e&&ne(t,e)},ie=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:re(i,e,n):(o=!e.$stable,ee(e,i)),a=e}else e&&(ne(t,e),a={default:1});if(o)for(const s in i)Zt(s)||null!=a[s]||delete i[s]};function oe(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,s.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ae=Me;function ce(t){return le(t)}function le(t,e){oe();const n=(0,s.We)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=s.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,s=null,i=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!We(t,e)&&(r=J(t),Q(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Pe:w(t,e,n,r);break;case Ve:b(t,e,n,r);break;case Fe:null==t&&T(e,n,r,o);break;case Le:L(t,e,n,r,s,i,o,a,c);break;default:1&h?I(t,e,n,r,s,i,o,a,c):6&h?P(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&l.process(t,e,n,r,s,i,o,a,c,nt)}null!=u&&s&&j(u,t&&t.ref,i,e||t,!e)},w=(t,e,n,r)=>{if(null==t)i(e.el=l(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},C=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},I=(t,e,n,r,s,i,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?A(e,n,r,s,i,o,a,c):O(t,e,s,i,o,a,c)},A=(t,e,n,r,o,l,u,h)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(f=t.el=c(t.type,l,g&&g.is,g),8&m?d(f,t.children):16&m&&N(t.children,f,null,r,o,ue(t,l),u,h),v&&D(t,null,r,"created"),x(f,t,t.scopeId,u,r),g){for(const t in g)"value"===t||(0,s.SU)(t)||a(f,t,null,g[t],l,r);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&ln(p,r,t)}v&&D(t,null,r,"beforeMount");const w=de(o,y);w&&y.beforeEnter(f),i(f,e,n),((p=g&&g.onVnodeMounted)||w||v)&&ae((()=>{p&&ln(p,r,t),w&&y.enter(f),v&&D(t,null,r,"mounted")}),o)},x=(t,e,n,r,s)=>{if(n&&g(t,n),r)for(let i=0;i<r.length;i++)g(t,r[i]);if(s){let n=s.subTree;if(e===n||Re(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=s.vnode;x(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},N=(t,e,n,r,s,i,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?on(t[l]):sn(t[l]);y(null,c,e,n,r,s,i,o,a)}},O=(t,e,n,r,i,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=e;u|=16&t.patchFlag;const p=t.props||s.MZ,g=e.props||s.MZ;let m;if(n&&he(n,!1),(m=g.onVnodeBeforeUpdate)&&ln(m,n,e,t),f&&D(e,t,n,"beforeUpdate"),n&&he(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(l,""),h?R(t.dynamicChildren,h,l,n,r,ue(e,i),o):c||$(t,e,l,null,n,r,ue(e,i),o,!1),u>0){if(16&u)M(l,p,g,n,i);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,i),4&u&&a(l,"style",p.style,g.style,i),8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],s=p[r],o=g[r];o===s&&"value"!==r||a(l,r,s,o,i,n)}}1&u&&t.children!==e.children&&d(l,e.children)}else c||null!=h||M(l,p,g,n,i);((m=g.onVnodeUpdated)||f)&&ae((()=>{m&&ln(m,n,e,t),f&&D(e,t,n,"updated")}),r)},R=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===Le||!We(c,l)||198&c.shapeFlag)?f(c.el):n;y(c,l,u,null,r,s,i,o,!0)}},M=(t,e,n,r,i)=>{if(e!==n){if(e!==s.MZ)for(const o in e)(0,s.SU)(o)||o in n||a(t,o,e[o],null,i,r);for(const o in n){if((0,s.SU)(o))continue;const c=n[o],l=e[o];c!==l&&"value"!==o&&a(t,o,l,c,i,r)}"value"in n&&a(t,"value",e.value,n.value,i)}},L=(t,e,n,r,s,o,a,c,u)=>{const h=e.el=t?t.el:l(""),d=e.anchor=t?t.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(i(h,n,r),i(d,n,r),N(e.children||[],n,d,s,o,a,c,u)):f>0&&64&f&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&fe(t,e,!0)):$(t,e,n,d,s,o,a,c,u)},P=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):V(e,n,r,s,i,o,c):F(t,e,c)},V=(t,e,n,r,s,i,o)=>{const a=t.component=dn(t,r,s);if(z(t)&&(a.ctx.renderer=nt),Tn(a,!1,o),a.asyncDep){if(s&&s.registerDep(a,U,o),!t.el){const t=a.subTree=Je(Ve);b(null,t,e,n)}}else U(a,t,e,n,s,i,o)},F=(t,e,n)=>{const r=e.component=t.component;if(ke(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,i,o,a,c)=>{const l=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:i,vnode:u}=t;{const n=ge(t);if(n)return e&&(e.el=u.el,B(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||l()}))}let h,d=e;0,he(t,!1),e?(e.el=u.el,B(t,e,c)):e=u,n&&(0,s.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&ln(h,i,e,u),he(t,!0);const p=Ae(t);0;const g=t.subTree;t.subTree=p,y(g,p,f(g.el),J(g),t,o,a),e.el=p.el,null===d&&Oe(t,p.el),r&&ae(r,o),(h=e.props&&e.props.onVnodeUpdated)&&ae((()=>ln(h,i,e,u)),o)}else{let r;const{el:c,props:l}=e,{bm:u,m:h,parent:d,root:f,type:p}=t,g=q(e);if(he(t,!1),u&&(0,s.DY)(u),!g&&(r=l&&l.onVnodeBeforeMount)&&ln(r,d,e),he(t,!0),c&&st){const e=()=>{t.subTree=Ae(t),st(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{f.ce&&f.ce._injectChildStyle(p);const r=t.subTree=Ae(t);0,y(null,r,n,i,t,o,a),e.el=r.el}if(h&&ae(h,o),!g&&(r=l&&l.onVnodeMounted)){const t=e;ae((()=>ln(r,d,t)),o)}(256&e.shapeFlag||d&&q(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&ae(t.a,o),t.isMounted=!0,e=n=i=null}};t.scope.on();const u=t.effect=new r.X2(l);t.scope.off();const h=t.update=u.run.bind(u),d=t.job=u.runIfDirty.bind(u);d.i=t,d.id=t.uid,u.scheduler=()=>v(d),he(t,!0),h()},B=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,Ht(t,e.props,s,n),ie(t,e.children,n),(0,r.C4)(),_(t),(0,r.bl)()},$=(t,e,n,r,s,i,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void H(l,h,n,r,s,i,o,a,c);if(256&f)return void K(l,h,n,r,s,i,o,a,c)}8&p?(16&u&&Z(l,s,i),h!==l&&d(n,h)):16&u?16&p?H(l,h,n,r,s,i,o,a,c):Z(l,s,i,!0):(8&u&&d(n,""),16&p&&N(h,n,r,s,i,o,a,c))},K=(t,e,n,r,i,o,a,c,l)=>{t=t||s.Oj,e=e||s.Oj;const u=t.length,h=e.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=e[f]=l?on(e[f]):sn(e[f]);y(t[f],r,n,null,i,o,a,c,l)}u>h?Z(t,i,o,!0,!1,d):N(e,n,r,i,o,a,c,l,d)},H=(t,e,n,r,i,o,a,c,l)=>{let u=0;const h=e.length;let d=t.length-1,f=h-1;while(u<=d&&u<=f){const r=t[u],s=e[u]=l?on(e[u]):sn(e[u]);if(!We(r,s))break;y(r,s,n,null,i,o,a,c,l),u++}while(u<=d&&u<=f){const r=t[d],s=e[f]=l?on(e[f]):sn(e[f]);if(!We(r,s))break;y(r,s,n,null,i,o,a,c,l),d--,f--}if(u>d){if(u<=f){const t=f+1,s=t<h?e[t].el:r;while(u<=f)y(null,e[u]=l?on(e[u]):sn(e[u]),n,s,i,o,a,c,l),u++}}else if(u>f)while(u<=d)Q(t[u],i,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const t=e[u]=l?on(e[u]):sn(e[u]);null!=t.key&&m.set(t.key,u)}let v,w=0;const b=f-g+1;let _=!1,E=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=d;u++){const r=t[u];if(w>=b){Q(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(v=g;v<=f;v++)if(0===T[v-g]&&We(r,e[v])){s=v;break}void 0===s?Q(r,i,o,!0):(T[s-g]=u+1,s>=E?E=s:_=!0,y(r,e[s],n,null,i,o,a,c,l),w++)}const C=_?pe(T):s.Oj;for(v=C.length-1,u=b-1;u>=0;u--){const t=g+u,s=e[t],d=t+1<h?e[t+1].el:r;0===T[u]?y(null,s,n,d,i,o,a,c,l):_&&(v<0||u!==C[v]?G(s,n,d,2):v--)}}},G=(t,e,n,r,s=null)=>{const{el:a,type:c,transition:l,children:u,shapeFlag:h}=t;if(6&h)return void G(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,nt);if(c===Le){i(a,e,n);for(let t=0;t<u.length;t++)G(u[t],e,n,r);return void i(t.anchor,e,n)}if(c===Fe)return void C(t,e,n);const d=2!==r&&1&h&&l;if(d)if(0===r)l.beforeEnter(a),i(a,e,n),ae((()=>l.enter(a)),s);else{const{leave:r,delayLeave:s,afterLeave:c}=l,u=()=>{t.ctx.isUnmounted?o(a):i(a,e,n)},h=()=>{r(a,(()=>{u(),c&&c()}))};s?s(a,u,h):h()}else i(a,e,n)},Q=(t,e,n,s=!1,i=!1)=>{const{type:o,props:a,ref:c,children:l,dynamicChildren:u,shapeFlag:h,patchFlag:d,dirs:f,cacheIndex:p}=t;if(-2===d&&(i=!1),null!=c&&((0,r.C4)(),j(c,null,n,t,!0),(0,r.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const g=1&h&&f,m=!q(t);let y;if(m&&(y=a&&a.onVnodeBeforeUnmount)&&ln(y,e,t),6&h)Y(t.component,n,s);else{if(128&h)return void t.suspense.unmount(n,s);g&&D(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,nt,s):u&&!u.hasOnce&&(o!==Le||d>0&&64&d)?Z(u,e,n,!1,!0):(o===Le&&384&d||!i&&16&h)&&Z(l,e,n),s&&W(t)}(m&&(y=a&&a.onVnodeUnmounted)||g)&&ae((()=>{y&&ln(y,e,t),g&&D(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Le)return void X(n,r);if(e===Fe)return void S(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:i,job:o,subTree:a,um:c,m:l,a:u,parent:h,slots:{__:d}}=t;me(l),me(u),r&&(0,s.DY)(r),h&&(0,s.cy)(d)&&d.forEach((t=>{h.renderCache[t]=void 0})),i.stop(),o&&(o.flags|=8,Q(a,t,e,n)),c&&ae(c,e),ae((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Z=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)Q(t[o],e,n,r,s)},J=t=>{if(6&t.shapeFlag)return J(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[k];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&Q(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,_(),E(),tt=!1)},nt={p:y,um:Q,m:G,r:W,mt:V,mc:N,pc:$,pbc:R,n:J,o:t};let rt,st;return e&&([rt,st]=e(nt)),{render:et,hydrate:rt,createApp:Ft(et,rt)}}function ue({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function he({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function de(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fe(t,e,n=!1){const r=t.children,i=e.children;if((0,s.cy)(r)&&(0,s.cy)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=on(i[s]),e.el=t.el),n||-2===e.patchFlag||fe(t,e)),e.type===Pe&&(e.el=t.el),e.type!==Ve||e.el||(e.el=t.el)}}function pe(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}function ge(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ge(e)}function me(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ye=Symbol.for("v-scx"),ve=()=>{{const t=$t(ye);return t}};function we(t,e,n){return be(t,e,n)}function be(t,e,n=s.MZ){const{immediate:i,deep:a,flush:c,once:l}=n;const u=(0,s.X$)({},n);const h=e&&i||!e&&"post"!==c;let d;if(En)if("sync"===c){const t=ve();d=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=s.tE,t.resume=s.tE,t.pause=s.tE,t}const f=fn;u.call=(t,e,n)=>o(t,f,e,n);let p=!1;"post"===c?u.scheduler=t=>{ae(t,f&&f.suspense)}:"sync"!==c&&(p=!0,u.scheduler=(t,e)=>{e?t():v(t)}),u.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,f&&(t.id=f.uid,t.i=f))};const g=(0,r.wB)(t,e,u);return En&&(d?d.push(g):h&&g()),g}function _e(t,e,n){const r=this.proxy,i=(0,s.Kg)(t)?t.includes(".")?Ee(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.Tn)(e)?o=e:(o=e.handler,n=e);const a=yn(this),c=be(i,o.bind(r),n);return a(),c}function Ee(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Te=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,s.PT)(e)}Modifiers`]||t[`${(0,s.Tg)(e)}Modifiers`];function Ce(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.MZ;let i=n;const a=e.startsWith("update:"),c=a&&Te(r,e.slice(7));let l;c&&(c.trim&&(i=n.map((t=>(0,s.Kg)(t)?t.trim():t))),c.number&&(i=n.map(s.bB)));let u=r[l=(0,s.rU)(e)]||r[l=(0,s.rU)((0,s.PT)(e))];!u&&a&&(u=r[l=(0,s.rU)((0,s.Tg)(e))]),u&&o(u,t,6,i);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,i)}}function Se(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.Tn)(t)){const r=t=>{const n=Se(t,e,!0);n&&(c=!0,(0,s.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.cy)(o)?o.forEach((t=>a[t]=null)):(0,s.X$)(a,o),(0,s.Gv)(t)&&r.set(t,a),a):((0,s.Gv)(t)&&r.set(t,null),null)}function Ie(t,e){return!(!t||!(0,s.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,s.$3)(t,(0,s.Tg)(e))||(0,s.$3)(t,e))}function Ae(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=A(t);let w,b;try{if(4&n.shapeFlag){const t=i||r,e=t;w=sn(h.call(e,t,d,f,g,p,m)),b=l}else{const t=e;0,w=sn(t.length>1?t(f,{attrs:l,slots:c,emit:u}):t(f,null)),b=e.props?l:xe(l)}}catch(E){Ue.length=0,a(E,t,1),w=Je(Ve)}let _=w;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(o&&t.some(s.CP)&&(b=De(b,o)),_=nn(_,b,!1,!0))}return n.dirs&&(_=nn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&U(_,n.transition),w=_,A(v),w}const xe=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},De=(t,e)=>{const n={};for(const r in t)(0,s.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function ke(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||Ne(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Ne(r,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Ie(l,n))return!0}}return!1}function Ne(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ie(n,i))return!0}return!1}function Oe({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const Re=t=>t.__isSuspense;function Me(t,e){e&&e.pendingBranch?(0,s.cy)(t)?e.effects.push(...t):e.effects.push(t):b(t)}const Le=Symbol.for("v-fgt"),Pe=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),Fe=Symbol.for("v-stc"),Ue=[];let Be=null;function $e(t=!1){Ue.push(Be=t?null:[])}function je(){Ue.pop(),Be=Ue[Ue.length-1]||null}let qe=1;function ze(t,e=!1){qe+=t,t<0&&Be&&e&&(Be.hasOnce=!0)}function Ke(t){return t.dynamicChildren=qe>0?Be||s.Oj:null,je(),qe>0&&Be&&Be.push(t),t}function He(t,e,n,r,s,i){return Ke(Ze(t,e,n,r,s,i,!0))}function Ge(t,e,n,r,s){return Ke(Je(t,e,n,r,s,!0))}function Qe(t){return!!t&&!0===t.__v_isVNode}function We(t,e){return t.type===e.type&&t.key===e.key}const Xe=({key:t})=>null!=t?t:null,Ye=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,s.Kg)(t)||(0,r.i9)(t)||(0,s.Tn)(t)?{i:S,r:t,k:e,f:!!n}:t:null);function Ze(t,e=null,n=null,r=0,i=null,o=(t===Le?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xe(e),ref:e&&Ye(e),scopeId:I,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:S};return c?(an(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,s.Kg)(n)?8:16),qe>0&&!a&&Be&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Be.push(l),l}const Je=tn;function tn(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==dt||(t=Ve),Qe(t)){const r=nn(t,e,!0);return n&&an(r,n),qe>0&&!a&&Be&&(6&r.shapeFlag?Be[Be.indexOf(t)]=r:Be.push(r)),r.patchFlag=-2,r}if(Nn(t)&&(t=t.__vccOpts),e){e=en(e);let{class:t,style:n}=e;t&&!(0,s.Kg)(t)&&(e.class=(0,s.C4)(t)),(0,s.Gv)(n)&&((0,r.ju)(n)&&!(0,s.cy)(n)&&(n=(0,s.X$)({},n)),e.style=(0,s.Tr)(n))}const c=(0,s.Kg)(t)?1:Re(t)?128:N(t)?64:(0,s.Gv)(t)?4:(0,s.Tn)(t)?2:0;return Ze(t,e,n,i,o,c,a,!0)}function en(t){return t?(0,r.ju)(t)||zt(t)?(0,s.X$)({},t):t:null}function nn(t,e,n=!1,r=!1){const{props:i,ref:o,patchFlag:a,children:c,transition:l}=t,u=e?cn(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Xe(u),ref:e&&e.ref?n&&o?(0,s.cy)(o)?o.concat(Ye(e)):[o,Ye(e)]:Ye(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&U(h,l.clone(h)),h}function rn(t=" ",e=0){return Je(Pe,null,t,e)}function sn(t){return null==t||"boolean"===typeof t?Je(Ve):(0,s.cy)(t)?Je(Le,null,t.slice()):Qe(t)?on(t):Je(Pe,null,String(t))}function on(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:nn(t)}function an(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),an(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||zt(e)?3===r&&S&&(1===S.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=S}}else(0,s.Tn)(e)?(e={default:e,_ctx:S},n=32):(e=String(e),64&r?(n=16,e=[rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function cn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C4)([e.class,r.class]));else if("style"===t)e.style=(0,s.Tr)([e.style,r.style]);else if((0,s.Mp)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.cy)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function ln(t,e,n,r=null){o(t,e,7,[n,r])}const un=Pt();let hn=0;function dn(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||un,a={uid:hn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xt(i,o),emitsOptions:Se(i,o),emit:null,emitted:null,propsDefaults:s.MZ,inheritAttrs:i.inheritAttrs,ctx:s.MZ,data:s.MZ,props:s.MZ,attrs:s.MZ,slots:s.MZ,refs:s.MZ,setupState:s.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ce.bind(null,a),t.ce&&t.ce(a),a}let fn=null;const pn=()=>fn||S;let gn,mn;{const t=(0,s.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};gn=e("__VUE_INSTANCE_SETTERS__",(t=>fn=t)),mn=e("__VUE_SSR_SETTERS__",(t=>En=t))}const yn=t=>{const e=fn;return gn(t),t.scope.on(),()=>{t.scope.off(),gn(e)}},vn=()=>{fn&&fn.scope.off(),gn(null)};function wn(t){return 4&t.vnode.shapeFlag}let bn,_n,En=!1;function Tn(t,e=!1,n=!1){e&&mn(e);const{props:r,children:s}=t.vnode,i=wn(t);Kt(t,r,i,e),se(t,s,n||e);const o=i?Cn(t,e):void 0;return e&&mn(!1),o}function Cn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wt);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?xn(t):null,c=yn(t),l=i(o,t,0,[t.props,n]),u=(0,s.yL)(l);if((0,r.bl)(),c(),!u&&!t.sp||q(t)||$(t),u){if(l.then(vn,vn),e)return l.then((n=>{Sn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=l}else Sn(t,l,e)}else In(t,e)}function Sn(t,e,n){(0,s.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),In(t,n)}function In(t,e,n){const i=t.type;if(!t.render){if(!e&&bn&&!i.render){const e=i.template||It(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.X$)((0,s.X$)({isCustomElement:n,delimiters:o},r),a);i.render=bn(e,c)}}t.render=i.render||s.tE,_n&&_n(t)}{const e=yn(t);(0,r.C4)();try{Et(t)}finally{(0,r.bl)(),e()}}}const An={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function xn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,An),slots:t.slots,emit:t.emit,expose:e}}function Dn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in yt?yt[n](t):void 0},has(t,e){return e in t||e in yt}})):t.proxy}function kn(t,e=!0){return(0,s.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Nn(t){return(0,s.Tn)(t)&&"__vccOpts"in t}const On=(t,e)=>{const n=(0,r.EW)(t,e,En);return n};const Rn="3.5.16"},751:(t,e,n)=>{n.d(e,{Ef:()=>H});var r=n(641),s=n(33);n(953);
/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let i;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{i=o.createPolicy("vue",{createHTML:t=>t})}catch(W){}const a=i?t=>i.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s="svg"===e?u.createElementNS(c,t):"mathml"===e?u.createElementNS(l,t):n?u.createElement(t,{is:n}):u.createElement(t);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>u.createTextNode(t),createComment:t=>u.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>u.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const s=h.content;if("svg"===r||"mathml"===r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[f];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh");const v=Symbol("");const w=/(^|;)\s*display\s*:/;function b(t,e,n){const r=t.style,i=(0,s.Kg)(n);let o=!1;if(n&&!i){if(e)if((0,s.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&E(r,e,"")}else for(const t in e)null==n[t]&&E(r,t,"");for(const t in n)"display"===t&&(o=!0),E(r,t,n[t])}else if(i){if(e!==n){const t=r[v];t&&(n+=";"+t),r.cssText=n,o=w.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[y]&&(r.display="none"))}const _=/\s*!important$/;function E(t,e,n){if((0,s.cy)(n))n.forEach((n=>E(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=S(t,e);_.test(n)?t.setProperty((0,s.Tg)(r),n.replace(_,""),"important"):t[r]=n}}const T=["Webkit","Moz","ms"],C={};function S(t,e){const n=C[e];if(n)return n;let r=(0,s.PT)(e);if("filter"!==r&&r in t)return C[e]=r;r=(0,s.ZH)(r);for(let s=0;s<T.length;s++){const n=T[s]+r;if(n in t)return C[e]=n}return e}const I="http://www.w3.org/1999/xlink";function A(t,e,n,r,i,o=(0,s.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(I,e.slice(6,e.length)):t.setAttributeNS(I,e,n):null==n||o&&!(0,s.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,s.Bm)(n)?String(n):n)}function x(t,e,n,r,i){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,s=null==n?"checkbox"===t.type?"on":"":String(n);return r===s&&"_value"in t||(t.value=s),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,s.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(W){0}c&&t.removeAttribute(i||e)}function D(t,e,n,r){t.addEventListener(e,n,r)}function k(t,e,n,r){t.removeEventListener(e,n,r)}const N=Symbol("_vei");function O(t,e,n,r,s=null){const i=t[N]||(t[N]={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=M(e);if(r){const o=i[e]=F(r,s);D(t,n,o,a)}else o&&(k(t,n,o,a),i[e]=void 0)}}const R=/(?:Once|Passive|Capture)$/;function M(t){let e;if(R.test(t)){let n;e={};while(n=t.match(R))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,s.Tg)(t.slice(2));return[n,e]}let L=0;const P=Promise.resolve(),V=()=>L||(P.then((()=>L=0)),L=Date.now());function F(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(U(t,n.value),e,5,[t])};return n.value=t,n.attached=V(),n}function U(t,e){if((0,s.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const B=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$=(t,e,n,r,i,o)=>{const a="svg"===i;"class"===e?g(t,r,a):"style"===e?b(t,n,r):(0,s.Mp)(e)?(0,s.CP)(e)||O(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):j(t,e,r,a))?(x(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||A(t,e,r,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,s.Kg)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),A(t,e,r,a)):x(t,(0,s.PT)(e),r,o,e)};function j(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&B(e)&&(0,s.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!B(e)||!(0,s.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");Symbol("_assign");const q=(0,s.X$)({patchProp:$},d);let z;function K(){return z||(z=(0,r.K9)(q))}const H=(...t)=>{const e=K().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=Q(t);if(!r)return;const i=e._component;(0,s.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,G(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function G(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function Q(t){if((0,s.Kg)(t)){const e=document.querySelector(t);return e}return t}},884:(t,e,n)=>{n.d(e,{gS:()=>nl,rJ:()=>rc,GG:()=>el,aU:()=>lc,P:()=>Bc,_M:()=>jc});var r,s,i=n(928),o=n(125),a=n(424),c=n(72),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,s=this.h,i=0;i<e;){if(0==s)for(;i<=n;)o(this,t,i),i+=this.blockSize;if("string"===typeof t){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){o(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){o(this,r),s=0;break}}this.h=s,this.o+=e},i.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var l={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new c([0|t],0>t?-1:0)})):new c([0|t],0>t?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return w(d(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(e,8)),r=p,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=d(Math.pow(e,i)),r=r.j(i).add(d(o))):(r=r.j(n),r=r.add(d(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function b(t,e){return t.add(w(e))}function _(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(p,p);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(30<t.g.length){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;0>=r.l(t);)n=C(n),r=C(r);var s=S(n,1),i=S(r,1);for(r=S(r,2),n=S(n,2);!y(r);){var o=i.add(r);0>=o.l(t)&&(s=s.add(n),i=o),r=S(r,1),n=S(n,1)}return e=b(t,s.j(e)),new E(s,e)}for(s=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=d(n),o=i.j(e);v(o)||0<o.l(t);)n-=r,i=d(n),o=i.j(e);y(i)&&(i=g),s=s.add(i),t=b(t,o)}return new E(s,t)}function C(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.i(i+n)>>>e|t.i(i+n+1)<<32-e:t.i(i+n);return new c(s,t.h)}t=c.prototype,t.m=function(){if(v(this))return-w(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);for(var e=d(Math.pow(t,6)),n=this,r="";;){var s=T(n,e).g;n=b(n,s.j(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,y(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(65535&this.i(s))+(65535&t.i(s)),o=(i>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(0>this.l(m)&&0>t.l(m))return d(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.i(r)>>>16,o=65535&this.i(r),a=t.i(s)>>>16,l=65535&t.i(s);n[2*r+2*s]+=o*l,_(n,2*r+2*s),n[2*r+2*s+1]+=i*l,_(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,_(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,_(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new c(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,s=u.Md5=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,r=u.Integer=c}).apply("undefined"!==typeof l?l:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,g,m,y,v,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},b={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function s(t,n){if(n)t:{var s=r;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}t=t[t.length-1],i=s[t],n=n(i),n!=i&&null!=n&&e(s,t,{configurable:!0,writable:!0,value:n})}}function i(t,e){t instanceof String&&(t+="");var n=0,r=!1,s={next:function(){if(!r&&n<t.length){var s=n++;return{value:e(s,t[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}s("Array.prototype.values",(function(t){return t||function(){return i(this,(function(t,e){return e}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function u(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u:_,E.apply(null,arguments)}function T(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}class A{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function x(t){return/^[\s\xa0]*$/.test(t)}function D(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return k[" "](t),t}k[" "]=function(){};var N=-1!=D().indexOf("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&-1==D().indexOf("Edge"))&&!(-1!=D().indexOf("Trident")||-1!=D().indexOf("MSIE"))&&-1==D().indexOf("Edge");function O(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function R(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function F(t){a.setTimeout((()=>{throw t}),0)}function U(){var t=K;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class B{constructor(){this.h=this.g=null}add(t,e){const n=$.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var $=new A((()=>new j),(t=>t.reset()));class j{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let q,z=!1,K=new B,H=()=>{const t=a.Promise.resolve(void 0);q=()=>{t.then(G)}};var G=()=>{for(var t;t=U();){try{t.h.call(t.g)}catch(n){F(n)}var e=$;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}z=!1};function Q(){this.s=this.s,this.C=this.C}function W(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},W.prototype.h=function(){this.defaultPrevented=!0};var X=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Y(t,e){if(W.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{k(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Z[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Y.aa.h.call(this)}}C(Y,W);var Z={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),tt=0;function et(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++tt,this.da=this.fa=!1}function nt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rt(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(nt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function it(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}rt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=it(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new et(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var ot="closure_lm_"+(1e6*Math.random()|0),at={};function ct(t,e,n,r,s){if(r&&r.once)return ht(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ct(t,e[i],n,r,s);return null}return n=vt(n),t&&t[J]?t.K(e,n,l(r)?!!r.capture:!!r,s):lt(t,e,n,!1,r,s)}function lt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=l(s)?!!s.capture:!!s,a=mt(t);if(a||(t[ot]=a=new rt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ut(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)X||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(pt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ut(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}function ht(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ht(t,e[i],n,r,s);return null}return n=vt(n),t&&t[J]?t.L(e,n,l(r)?!!r.capture:!!r,s):lt(t,e,n,!0,r,s)}function dt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)dt(t,e[i],n,r,s);else r=l(r)?!!r.capture:!!r,n=vt(n),t&&t[J]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=it(i,n,r,s),-1<n&&(nt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=it(e,n,r,s)),(n=-1<t?e[t]:null)&&ft(n))}function ft(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[J])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mt(e))?(st(n,t),0==n.h&&(n.src=null,e[ot]=null)):nt(t)}}}function pt(t){return t in at?at[t]:at[t]="on"+t}function gt(t,e){if(t.da)t=!0;else{e=new Y(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&ft(t),t=n.call(r,e)}return t}function mt(t){return t=t[ot],t instanceof rt?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"===typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function wt(){Q.call(this),this.i=new rt(this),this.M=this,this.F=null}function bt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new W(e,t);else if(e instanceof W)e.target=e.target||t;else{var s=e;e=new W(r,t),P(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=_t(o,r,!0,e)&&s}if(o=e.g=t,s=_t(o,r,!0,e)&&s,s=_t(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=_t(o,r,!1,e)&&s}function _t(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&st(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}function Et(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Tt(t){t.g=Et((()=>{t.g=null,t.i&&(t.i=!1,Tt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}C(wt,Q),wt.prototype[J]=!0,wt.prototype.removeEventListener=function(t,e,n,r){dt(this,t,e,n,r)},wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)nt(n[r]);delete e.g[t],e.h--}}this.F=null},wt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class Ct extends Q{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(t){Q.call(this),this.h=t,this.g={}}C(St,Q);var It=[];function At(t){O(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ft(t)}),t),t.g={}}St.prototype.N=function(){St.aa.N.call(this),At(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xt=a.JSON.stringify,Dt=a.JSON.parse,kt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Ot(t){return t.h||(t.h=t.i())}function Rt(){}Nt.prototype.h=null;var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lt(){W.call(this,"d")}function Pt(){W.call(this,"c")}C(Lt,W),C(Pt,W);var Vt={},Ft=null;function Ut(){return Ft=Ft||new wt}function Bt(t){W.call(this,Vt.La,t)}function $t(t){const e=Ut();bt(e,new Bt(e))}function jt(t,e){W.call(this,Vt.STAT_EVENT,t),this.stat=e}function qt(t){const e=Ut();bt(e,new jt(e,t))}function zt(t,e){W.call(this,Vt.Ma,t),this.size=e}function Kt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Ht(){this.g=!0}function Gt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Wt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(r?" "+r:"")}))}function Xt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return xt(n)}catch(a){return e}}Vt.La="serverreachability",C(Bt,W),Vt.STAT_EVENT="statevent",C(jt,W),Vt.Ma="timingevent",C(zt,W),Ht.prototype.xa=function(){this.g=!1},Ht.prototype.info=function(){};var Zt,Jt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},te={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ee(){}function ne(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new St(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new re}function re(){this.i=null,this.g="",this.h=!1}C(ee,Nt),ee.prototype.g=function(){return new XMLHttpRequest},ee.prototype.i=function(){return{}},Zt=new ee;var se={},ie={};function oe(t,e,n){t.L=1,t.v=Le(ke(e)),t.m=n,t.P=!0,ae(t,null)}function ae(t,e){t.F=Date.now(),ue(t),t.A=ke(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Qe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new re,t.g=$n(t.j,n?e:null,!t.m),0<t.O&&(t.M=new Ct(E(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(It[0]=s.toString()),s=It);for(var i=0;i<s.length;i++){var o=ct(n,s[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?M(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),$t(),Gt(t.i,t.u,t.A,t.l,t.R,t.m)}function ce(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ie:(n=Number(e.substring(n,r)),isNaN(n)?se:(r+=1,r+n>e.length?ie:(e=e.slice(r,r+n),t.C=r+n,e)))}function ue(t){t.S=Date.now()+t.I,he(t,t.I)}function he(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Kt(E(t.ba,t),e)}function de(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function fe(t){0==t.j.G||t.J||Pn(t.j,t)}function pe(t){de(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,At(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ge(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||be(n.h,t)))if(!t.K&&be(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ln(n),Cn(n)}On(n),qt(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Kt(E(n.Za,n),6e3));if(1>=we(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else Fn(n,11)}else if((t.K||n.g==t)&&Ln(n),!x(e))for(s=n.Da.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const e=l[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const s=l[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(_e(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Me(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=Bn(r,r.J?r.ia:null,r.W),o.K){Ee(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(de(a),ue(a)),r.g=o}else Nn(r);0<n.i.length&&In(n)}else"stop"!=l[0]&&"close"!=l[0]||Fn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Fn(n,7):Tn(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}$t(4)}catch(l){}}ne.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==vn(t)?e.j():this.Y(t)},ne.prototype.Y=function(t){try{if(t==this.g)t:{const d=vn(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||wn(this.g)))){this.J||4!=d||7==e||$t(8==e||0>=f?3:2),de(this);var n=this.g.Z();this.X=n;e:if(ce(this)){var r=wn(this.g);t="";var s=r.length,i=4==vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){pe(this),fe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(i&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Qt(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(c)){var u=c;break e}}u=null}if(!(n=u)){this.o=!1,this.s=3,qt(12),pe(this),fe(this);break t}Wt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ge(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=le(this,o),t==ie){4==d&&(this.s=4,qt(14),n=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}if(t==se){this.s=4,qt(15),Wt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Wt(this.i,this.l,t,null),ge(this,t)}if(ce(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,qt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Rn(h),h.M=!0,qt(11))}}else Wt(this.i,this.l,o,"[Invalid Chunked Response]"),pe(this),fe(this)}else Wt(this.i,this.l,o,null),ge(this,o);4==d&&pe(this),this.o&&!this.J&&(4==d?Pn(this.j,this):(this.o=!1,ue(this)))}else bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),pe(this),fe(this)}}}catch(d){}},ne.prototype.cancel=function(){this.J=!0,pe(this)},ne.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Xt(this.i,this.A),2!=this.L&&($t(),qt(17)),pe(this),this.s=2,fe(this)):he(this,this.S-t)};var me=class{constructor(t,e){this.g=t,this.map=e}};function ye(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ve(t){return!!t.h||!!t.g&&t.g.size>=t.j}function we(t){return t.h?1:t.g?t.g.size:0}function be(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function _e(t,e){t.g?t.g.add(e):t.h=e}function Ee(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function Ce(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Se(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ie(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Se(t),r=Ce(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}ye.prototype.cancel=function(){if(this.i=Te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Ae=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function De(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof De){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,Oe(this,t.s),this.l=t.l;var e=t.i,n=new ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Re(this,n),this.m=t.m}else t&&(e=String(t).match(Ae))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=Pe(e[2]||""),this.g=Pe(e[3]||"",!0),Oe(this,e[4]),this.l=Pe(e[5]||"",!0),Re(this,e[6]||"",!0),this.m=Pe(e[7]||"")):(this.h=!1,this.i=new ze(null,this.h))}function ke(t){return new De(t)}function Ne(t,e,n){t.j=n?Pe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Re(t,e,n){e instanceof ze?(t.i=e,Xe(t.i,t.h)):(n||(e=Ve(e,je)),t.i=new ze(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Le(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ve(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Fe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}De.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ve(e,Ue,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ve(e,Ue,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ve(n,"/"==n.charAt(0)?$e:Be,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ve(n,qe)),t.join("")};var Ue=/[#\/\?@]/g,Be=/[#\?:]/g,$e=/[#\?]/g,je=/[#\?@]/g,qe=/#/g;function ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Map,t.h=0,t.i&&xe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function He(t,e){Ke(t),e=We(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ge(t,e){return Ke(t),e=We(t,e),t.g.has(e)}function Qe(t,e,n){He(t,e),0<n.length&&(t.i=null,t.g.set(We(t,e),S(n)),t.h+=n.length)}function We(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Xe(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(He(this,e),Qe(this,n,t))}),t)),t.j=e}function Ye(t,e){const n=new Ht;if(a.Image){const r=new Image;r.onload=T(Je,n,"TestLoadImage: loaded",!0,e,r),r.onerror=T(Je,n,"TestLoadImage: error",!1,e,r),r.onabort=T(Je,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=T(Je,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Ze(t,e){const n=new Ht,r=new AbortController,s=setTimeout((()=>{r.abort(),Je(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(s),t.ok?Je(n,"TestPingServer: ok",!0,e):Je(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(s),Je(n,"TestPingServer: error",!1,e)}))}function Je(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function tn(){this.g=new kt}function en(t,e,n){const r=n||"";try{Ie(t,(function(t,n){let s=t;l(t)&&(s=xt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function nn(t){this.l=t.Ub||null,this.j=t.eb||!1}function rn(t,e){wt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function sn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function on(t){t.readyState=4,t.l=null,t.j=null,t.v=null,an(t)}function an(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function cn(t){let e="";return O(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ln(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=cn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Me(t,e,n))}function un(t){wt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=ze.prototype,t.add=function(t,e){Ke(this),this.i=null,t=We(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ke(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){Ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},t.V=function(t){Ke(this);let e=[];if("string"===typeof t)Ge(this,t)&&(e=e.concat(this.g.get(We(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ke(this),this.i=null,t=We(this,t),Ge(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")},C(nn,Nt),nn.prototype.g=function(){return new rn(this.l,this.j)},nn.prototype.i=function(t){return function(){return t}}({}),C(rn,wt),t=rn.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,an(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?on(this):an(this),3==this.readyState&&sn(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,on(this))},t.Qa=function(t){this.g&&(this.response=t,on(this))},t.ga=function(){this.g&&on(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),C(un,wt);var hn=/^https?$/i,dn=["POST","PUT"];function fn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,pn(t),mn(t)}function pn(t){t.A||(t.A=!0,bt(t,"complete"),bt(t,"error"))}function gn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=vn(t)||2!=t.Z()))if(t.u&&4==vn(t))Et(t.Ea,0,t);else if(bt(t,"readystatechange"),4==vn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.D).match(Ae)[1]||null;!s&&a.self&&a.self.location&&(s=a.self.location.protocol.slice(0,-1)),r=!hn.test(s?s.toLowerCase():"")}n=r}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var i=2<vn(t)?t.g.statusText:""}catch(c){i=""}t.l=i+" ["+t.Z()+"]",pn(t)}}finally{mn(t)}}}function mn(t,e){if(t.g){yn(t);const r=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||bt(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function yn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function vn(t){return t.g?t.g.readyState:0}function wn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function bn(t){const e={};t=(t.g&&2<=vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(x(t[r]))continue;var n=V(t[r]);const s=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}R(e,(function(t){return t.join(", ")}))}function _n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function En(t){this.Aa=0,this.i=[],this.j=new Ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,t),this.cb=_n("retryDelaySeedMs",1e4,t),this.Wa=_n("forwardChannelMaxRetries",2,t),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ye(t&&t.concurrentRequestLimit),this.Da=new tn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Tn(t){if(Sn(t),3==t.G){var e=t.U++,n=ke(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),Dn(t,n),e=new ne(t,t.j,e),e.L=2,e.v=Le(ke(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=$n(e.j,null),e.g.ea(e.v)),e.F=Date.now(),ue(e)}Un(t)}function Cn(t){t.g&&(Rn(t),t.g.cancel(),t.g=null)}function Sn(t){Cn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Ln(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function In(t){if(!ve(t.h)&&!t.s){t.s=!0;var e=t.Ga;q||H(),z||(q(),z=!0),K.add(e,t),t.B=0}}function An(t,e){return!(we(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Kt(E(t.Ga,t,e),Vn(t,t.B)),t.B++,!0))}function xn(t,e){var n;n=e?e.l:t.U++;const r=ke(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.T),Dn(t,r),t.m&&t.o&&ln(r,t.m,t.o),n=new ne(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=kn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),_e(t.h,n),oe(n,r,e)}function Dn(t,e){t.H&&O(t.H,(function(t,n){Me(e,n,t)})),t.l&&Ie({},(function(t,n){Me(e,n,t)}))}function kn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?E(t.l.Na,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const c=s[a].map;if(n-=e,0>n)e=Math.max(0,s[a].g-100),o=!1;else try{en(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;q||H(),z||(q(),z=!0),K.add(e,t),t.v=0}}function On(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Kt(E(t.Fa,t),Vn(t,t.v)),t.v++,!0)}function Rn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Mn(t){t.g=new ne(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ke(t.qa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.T),Me(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Me(e,"TO",t.ja),Me(e,"TYPE","xmlhttp"),Dn(t,e),t.m&&t.o&&ln(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Le(ke(e)),n.m=null,n.P=!0,ae(n,t)}function Ln(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Pn(t,e){var n=null;if(t.g==e){Ln(t),Rn(t),t.g=null;var r=2}else{if(!be(t.h,e))return;n=e.D,Ee(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var s=t.B;r=Ut(),bt(r,new zt(r,n)),In(t)}else Nn(t);else if(s=e.s,3==s||0==s&&0<e.X||!(1==r&&An(t,e)||2==r&&On(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}function Vn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Fn(t,e){if(t.j.info("Error code "+e),2==e){var n=E(t.fb,t),r=t.Xa;const e=!r;r=new De(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(r,"https"),Le(r),e?Ye(r.toString(),n):Ze(r.toString(),n)}else qt(2);t.G=0,t.l&&t.l.sa(e),Un(t),Sn(t)}function Un(t){if(t.G=0,t.ka=[],t.l){const e=Te(t.h);0==e.length&&0==t.i.length||(I(t.ka,e),I(t.ka,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.ra()}}function Bn(t,e,n){var r=n instanceof De?ke(n):new De(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Oe(r,r.s);else{var s=a.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new De(null);r&&Ne(i,r),e&&(i.g=e),s&&Oe(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.ya,n&&e&&Me(r,n,e),Me(r,"VER",t.la),Dn(t,r),r}function $n(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new un(new nn({eb:n})):new un(t.pa),e.Ha(t.J),e}function jn(){}function qn(){}function zn(t,e){wt.call(this),this.g=new En(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!x(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gn(this)}function Kn(t){Lt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Hn(){Pt.call(this),this.status=1}function Gn(t){this.g=t}t=un.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zt.g(),this.v=this.o?Ot(this.o):Ot(Zt),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(i){return void fn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dn,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yn(this),this.u=!0,this.g.send(t),this.u=!1}catch(i){fn(this,i)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),mn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),un.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gn(this):this.bb())},t.bb=function(){gn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Dt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=En.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){qt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Bn(this,null,this.W),In(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new ne(this,this.j,t);let i=this.o;if(this.S&&(i?(i=M(i),P(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=kn(this,s,e),n=ke(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Dn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(cn(i)))+"&"+e:this.m&&ln(n,this.m,i)),_e(this.h,s),this.Ua&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),s.T=!0,oe(s,n,null)):oe(s,n,e),this.G=2}}else 3==this.G&&(t?xn(this,t):0==this.i.length||ve(this.h)||xn(this))},t.Fa=function(){if(this.u=null,Mn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Kt(E(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),Cn(this),Mn(this))},t.Za=function(){null!=this.C&&(this.C=null,Cn(this),On(this),qt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=jn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},qn.prototype.g=function(t,e){return new zn(t,e)},C(zn,wt),zn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zn.prototype.close=function(){Tn(this.g)},zn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=xt(t),t=n);e.i.push(new me(e.Ya++,t)),3==e.G&&In(e)},zn.prototype.N=function(){this.g.l=null,delete this.j,Tn(this.g),delete this.g,zn.aa.N.call(this)},C(Kn,Lt),C(Hn,Pt),C(Gn,jn),Gn.prototype.ua=function(){bt(this.g,"a")},Gn.prototype.ta=function(t){bt(this.g,new Kn(t))},Gn.prototype.sa=function(t){bt(this.g,new Hn)},Gn.prototype.ra=function(){bt(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,zn.prototype.send=zn.prototype.o,zn.prototype.open=zn.prototype.m,zn.prototype.close=zn.prototype.close,v=b.createWebChannelTransport=function(){return new qn},y=b.getStatEventTarget=function(){return Ut()},m=b.Event=Vt,g=b.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,p=b.ErrorCode=Jt,te.COMPLETE="complete",f=b.EventType=te,Rt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",wt.prototype.listen=wt.prototype.K,d=b.WebChannel=Rt,b.FetchXmlHttpFactory=nn,un.prototype.listenOnce=un.prototype.L,un.prototype.getLastError=un.prototype.Ka,un.prototype.getLastErrorCode=un.prototype.Ba,un.prototype.getStatus=un.prototype.Z,un.prototype.getResponseJson=un.prototype.Oa,un.prototype.getResponseText=un.prototype.oa,un.prototype.send=un.prototype.ea,un.prototype.setWithCredentials=un.prototype.Ha,h=b.XhrIo=un}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const _="@firebase/firestore",E="4.7.17";
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
 */class T{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
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
let C="11.9.0";
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
 */const S=new a.Vy("@firebase/firestore");function I(){return S.logLevel}function A(t,...e){if(S.logLevel<=a.$b.DEBUG){const n=e.map(k);S.debug(`Firestore (${C}): ${t}`,...n)}}function x(t,...e){if(S.logLevel<=a.$b.ERROR){const n=e.map(k);S.error(`Firestore (${C}): ${t}`,...n)}}function D(t,...e){if(S.logLevel<=a.$b.WARN){const n=e.map(k);S.warn(`Firestore (${C}): ${t}`,...n)}}function k(t){if("string"==typeof t)return t;try{
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
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
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
 */function N(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,O(t,r,n)}function O(t,e,n){let r=`FIRESTORE (${C}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw x(r),new Error(r)}function R(t,e,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,t||O(e,s,r)}function M(t,e){return t}
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class V{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class F{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class U{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(T.UNAUTHENTICATED)))}shutdown(){}}class B{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ${constructor(t){this.t=t,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){R(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new V;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new V,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new V)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(R("string"==typeof e.accessToken,31837,{l:e}),new F(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return R(null===t||"string"==typeof t,2055,{h:t}),new T(t)}}class j{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class q{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new j(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,i.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){R(void 0===this.o,3512);const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new z(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(R("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new z(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
function H(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */function G(){return new TextEncoder}
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
 */class Q{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=H(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function W(t,e){return t<e?-1:t>e?1:0}function X(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return W(r,s);{const i=G(),o=Z(i.encode(Y(t,n)),i.encode(Y(e,n)));return 0!==o?o:W(r,s)}}n+=r>65535?2:1}return W(t.length,e.length)}function Y(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Z(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return W(t[n],e[n]);return W(t.length,e.length)}function J(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
const tt=-62135596800,et=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*et);return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<tt)throw new P(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/et}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-tt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class rt{static fromTimestamp(t){return new rt(t)}static min(){return new rt(new nt(0,0))}static max(){return new rt(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */const st="__name__";class it{constructor(t,e,n){void 0===e?e=0:e>t.length&&N(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&N(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===it.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof it?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=it.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return W(t.length,e.length)}static compareSegments(t,e){const n=it.isNumericId(t),r=it.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?it.extractNumericId(t).compare(it.extractNumericId(e)):X(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class ot extends it{construct(t,e,n){return new ot(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(L.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ot(e)}static emptyPath(){return new ot([])}}const at=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends it{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return at.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===st}static keyField(){return new ct([st])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new P(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new P(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new P(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}
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
 */class lt{constructor(t){this.path=t}static fromPath(t){return new lt(ot.fromString(t))}static fromName(t){return new lt(ot.fromString(t).popFirst(5))}static empty(){return new lt(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ot.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new lt(new ot(t.slice()))}}
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
 */const ut=-1;class ht{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ht.UNKNOWN_ID=-1;function dt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=rt.fromTimestamp(1e9===r?new nt(n+1,0):new nt(n,r));return new pt(s,lt.empty(),e)}function ft(t){return new pt(t.readTime,t.key,ut)}class pt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new pt(rt.min(),lt.empty(),ut)}static max(){return new pt(rt.max(),lt.empty(),ut)}}function gt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=lt.comparator(t.documentKey,e.documentKey),0!==n?n:W(t.largestBatchId,e.largestBatchId)
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
 */)}const mt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function vt(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==mt)throw t;A("LocalStore","Unexpectedly lost primary lease")}
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
 */class wt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&N(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new wt(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof wt?e:wt.resolve(e)}catch(t){return wt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):wt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):wt.reject(e)}static resolve(t){return new wt(((e,n)=>{e(t)}))}static reject(t){return new wt(((e,n)=>{n(t)}))}static waitFor(t){return new wt(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=wt.resolve(!1);for(const n of t)e=e.next((t=>t?wt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new wt(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new wt(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
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
 */function bt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _t(t){return"IndexedDbTransactionError"===t.name}
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
class Et{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ue(t),this.ce=t=>e.writeSequenceNumber(t))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Et.le=-1;
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
const Tt=-1;function Ct(t){return null==t}function St(t){return 0===t&&1/t==-1/0}function It(t){return"number"==typeof t&&Number.isInteger(t)&&!St(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const At="";function xt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kt(e)),e=Dt(t.get(n),e);return kt(e)}function Dt(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case At:n+="";break;default:n+=e}}return n}function kt(t){return t+At+""}
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
const Nt="remoteDocuments",Ot="owner",Rt="mutationQueues",Mt="mutations";
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
 */const Lt="documentMutations",Pt="remoteDocumentsV14",Vt="remoteDocumentGlobal",Ft="targets",Ut="targetDocuments",Bt="targetGlobal",$t="collectionParents",jt="clientMetadata",qt="bundles",zt="namedQueries",Kt="indexConfiguration",Ht="indexState",Gt="indexEntries",Qt="documentOverlays",Wt="globals",Xt=[Rt,Mt,Lt,Nt,Ft,Ot,Bt,Ut,jt,Vt,$t,qt,zt],Yt=[Rt,Mt,Lt,Pt,Ft,Ot,Bt,Ut,jt,Vt,$t,qt,zt,Qt],Zt=Yt,Jt=[...Zt,Kt,Ht,Gt];
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
function te(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ee(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ne(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class re{constructor(t,e){this.comparator=t,this.root=e||ie.EMPTY}insert(t,e){return new re(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(t){return new re(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ie.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new se(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new se(this.root,t,this.comparator,!1)}getReverseIterator(){return new se(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new se(this.root,t,this.comparator,!0)}}class se{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ie{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:ie.RED,this.left=null!=r?r:ie.EMPTY,this.right=null!=s?s:ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new ie(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ie.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw N(43730,{key:this.key,value:this.value});if(this.right.isRed())throw N(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw N(27949);return t+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1,ie.EMPTY=new class{constructor(){this.size=0}get key(){throw N(57766)}get value(){throw N(16141)}get color(){throw N(16727)}get left(){throw N(29726)}get right(){throw N(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class oe{constructor(t){this.comparator=t,this.data=new re(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ae(this.data.getIterator())}getIteratorFrom(t){return new ae(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof oe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new oe(this.comparator);return e.data=t,e}}class ae{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class ce{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new ce([])}unionWith(t){let e=new oe(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ce(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return J(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class le extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new le("Invalid base64 string: "+t):t}}(t);return new ue(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ue(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const he=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function de(t){if(R(!!t,39018),"string"==typeof t){let e=0;const n=he.exec(t);if(R(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function pe(t){return"string"==typeof t?ue.fromBase64String(t):ue.fromUint8Array(t)}
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
 */const ge="server_timestamp",me="__type__",ye="__previous_value__",ve="__local_write_time__";function we(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[me])||void 0===n?void 0:n.stringValue)===ge}function be(t){const e=t.mapValue.fields[ye];return we(e)?be(e):e}function _e(t){const e=de(t.mapValue.fields[ve].timestampValue);return new nt(e.seconds,e.nanos)}
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
 */class Ee{constructor(t,e,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=l}}const Te="(default)";class Ce{constructor(t,e){this.projectId=t,this.database=e||Te}static empty(){return new Ce("","")}get isDefaultDatabase(){return this.database===Te}isEqual(t){return t instanceof Ce&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Se="__type__",Ie="__max__",Ae={mapValue:{fields:{__type__:{stringValue:Ie}}}},xe="__vector__",De="value";function ke(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?we(t)?4:Ge(t)?9007199254740991:Ke(t)?10:11:N(28295,{value:t})}function Ne(t,e){if(t===e)return!0;const n=ke(t);if(n!==ke(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _e(t).isEqual(_e(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=de(t.timestampValue),r=de(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return pe(t.bytesValue).isEqual(pe(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return fe(t.geoPointValue.latitude)===fe(e.geoPointValue.latitude)&&fe(t.geoPointValue.longitude)===fe(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return fe(t.integerValue)===fe(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=fe(t.doubleValue),r=fe(e.doubleValue);return n===r?St(n)===St(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return J(t.arrayValue.values||[],e.arrayValue.values||[],Ne);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(te(n)!==te(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ne(n[s],r[s])))return!1;return!0}(t,e);default:return N(52216,{left:t})}}function Oe(t,e){return void 0!==(t.values||[]).find((t=>Ne(t,e)))}function Re(t,e){if(t===e)return 0;const n=ke(t),r=ke(e);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=fe(t.integerValue||t.doubleValue),r=fe(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Me(t.timestampValue,e.timestampValue);case 4:return Me(_e(t),_e(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(t,e){const n=pe(t),r=pe(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=W(n[s],r[s]);if(0!==t)return t}return W(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=W(fe(t.latitude),fe(e.latitude));return 0!==n?n:W(fe(t.longitude),fe(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Le(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,s,i;const o=t.fields||{},a=e.fields||{},c=null===(n=o[De])||void 0===n?void 0:n.arrayValue,l=null===(r=a[De])||void 0===r?void 0:r.arrayValue,u=W((null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0,(null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0);return 0!==u?u:Le(c,l)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Ae.mapValue&&e===Ae.mapValue)return 0;if(t===Ae.mapValue)return 1;if(e===Ae.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=X(r[o],i[o]);if(0!==t)return t;const e=Re(n[r[o]],s[i[o]]);if(0!==e)return e}return W(r.length,i.length)}(t.mapValue,e.mapValue);default:throw N(23264,{Pe:n})}}function Me(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return W(t,e);const n=de(t),r=de(e),s=W(n.seconds,r.seconds);return 0!==s?s:W(n.nanos,r.nanos)}function Le(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Re(n[s],r[s]);if(t)return t}return W(n.length,r.length)}function Pe(t){return Ve(t)}function Ve(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=de(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return pe(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return lt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ve(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Ve(t.fields[s])}`;return n+"}"}(t.mapValue):N(61005,{value:t})}function Fe(t){switch(ke(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=be(t);return e?16+Fe(e):16;case 5:return 2*t.stringValue.length;case 6:return pe(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Fe(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return ee(t.fields,((t,n)=>{e+=t.length+Fe(n)})),e}(t.mapValue);default:throw N(13486,{value:t})}}function Ue(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Be(t){return!!t&&"integerValue"in t}function $e(t){return!!t&&"arrayValue"in t}function je(t){return!!t&&"nullValue"in t}function qe(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ze(t){return!!t&&"mapValue"in t}function Ke(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[Se])||void 0===n?void 0:n.stringValue)===xe}function He(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ee(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=He(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=He(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ge(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ie}
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
class Qe{constructor(t){this.value=t}static empty(){return new Qe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ze(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=He(e)}setAll(t){let e=ct.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=He(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());ze(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ne(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ee(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Qe(He(this.value))}}function We(t){const e=[];return ee(t.fields,((t,n)=>{const r=new ct([t]);if(ze(n)){const t=We(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ce(e)
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
 */}class Xe{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Xe(t,0,rt.min(),rt.min(),rt.min(),Qe.empty(),0)}static newFoundDocument(t,e,n,r){return new Xe(t,1,e,rt.min(),n,r,0)}static newNoDocument(t,e){return new Xe(t,2,e,rt.min(),rt.min(),Qe.empty(),0)}static newUnknownDocument(t,e){return new Xe(t,3,e,rt.min(),rt.min(),Qe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(rt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ye{constructor(t,e){this.position=t,this.inclusive=e}}function Ze(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?lt.comparator(lt.fromName(o.referenceValue),n.key):Re(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Je(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ne(t.position[n],e.position[n]))return!1;return!0}
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
 */class tn{constructor(t,e="asc"){this.field=t,this.dir=e}}function en(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class nn{}class rn extends nn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new dn(t,e,n):"array-contains"===e?new mn(t,n):"in"===e?new yn(t,n):"not-in"===e?new vn(t,n):"array-contains-any"===e?new wn(t,n):new rn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new fn(t,n):new pn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Re(e,this.value)):null!==e&&ke(this.value)===ke(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return N(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends nn{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new sn(t,e)}matches(t){return on(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function on(t){return"and"===t.op}function an(t){return cn(t)&&on(t)}function cn(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function ln(t){if(t instanceof rn)return t.field.canonicalString()+t.op.toString()+Pe(t.value);if(an(t))return t.filters.map((t=>ln(t))).join(",");{const e=t.filters.map((t=>ln(t))).join(",");return`${t.op}(${e})`}}function un(t,e){return t instanceof rn?function(t,e){return e instanceof rn&&t.op===e.op&&t.field.isEqual(e.field)&&Ne(t.value,e.value)}(t,e):t instanceof sn?function(t,e){return e instanceof sn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&un(n,e.filters[r])),!0)}(t,e):void N(19439)}function hn(t){return t instanceof rn?function(t){return`${t.field.canonicalString()} ${t.op} ${Pe(t.value)}`}(t):t instanceof sn?function(t){return t.op.toString()+" {"+t.getFilters().map(hn).join(" ,")+"}"}(t):"Filter"}class dn extends rn{constructor(t,e,n){super(t,e,n),this.key=lt.fromName(n.referenceValue)}matches(t){const e=lt.comparator(t.key,this.key);return this.matchesComparison(e)}}class fn extends rn{constructor(t,e){super(t,"in",e),this.keys=gn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class pn extends rn{constructor(t,e){super(t,"not-in",e),this.keys=gn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function gn(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>lt.fromName(t.referenceValue)))}class mn extends rn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $e(e)&&Oe(e.arrayValue,this.value)}}class yn extends rn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Oe(this.value.arrayValue,e)}}class vn extends rn{constructor(t,e){super(t,"not-in",e)}matches(t){if(Oe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Oe(this.value.arrayValue,e)}}class wn extends rn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$e(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Oe(this.value.arrayValue,t)))}}
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
 */class bn{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Ie=null}}function _n(t,e=null,n=[],r=[],s=null,i=null,o=null){return new bn(t,e,n,r,s,i,o)}function En(t){const e=M(t);if(null===e.Ie){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ln(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ct(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Pe(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Pe(t))).join(",")),e.Ie=t}return e.Ie}function Tn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!en(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!un(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Je(t.startAt,e.startAt)&&Je(t.endAt,e.endAt)}function Cn(t){return lt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Sn{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function In(t,e,n,r,s,i,o,a){return new Sn(t,e,n,r,s,i,o,a)}function An(t){return new Sn(t)}function xn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Dn(t){return null!==t.collectionGroup}function kn(t){const e=M(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new oe(ct.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new tn(r,n))})),t.has(ct.keyField().canonicalString())||e.Ee.push(new tn(ct.keyField(),n))}return e.Ee}function Nn(t){const e=M(t);return e.de||(e.de=On(e,kn(t))),e.de}function On(t,e){if("F"===t.limitType)return _n(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new tn(t.field,e)}));const n=t.endAt?new Ye(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ye(t.startAt.position,t.startAt.inclusive):null;return _n(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rn(t,e){const n=t.filters.concat([e]);return new Sn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Mn(t,e,n){return new Sn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ln(t,e){return Tn(Nn(t),Nn(e))&&t.limitType===e.limitType}function Pn(t){return`${En(Nn(t))}|lt:${t.limitType}`}function Vn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>hn(t))).join(", ")}]`),Ct(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Pe(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Pe(t))).join(",")),`Target(${e})`}(Nn(t))}; limitType=${t.limitType})`}function Fn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):lt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of kn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ze(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,kn(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ze(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,kn(t),e))}(t,e)}function Un(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bn(t){return(e,n)=>{let r=!1;for(const s of kn(t)){const t=$n(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function $n(t,e,n){const r=t.field.isKeyField()?lt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Re(r,s):N(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return N(19790,{direction:t.dir})}}
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
 */class jn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ee(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return ne(this.inner)}size(){return this.innerSize}}
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
 */const qn=new re(lt.comparator);function zn(){return qn}const Kn=new re(lt.comparator);function Hn(...t){let e=Kn;for(const n of t)e=e.insert(n.key,n);return e}function Gn(t){let e=Kn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Qn(){return Xn()}function Wn(){return Xn()}function Xn(){return new jn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Yn=new re(lt.comparator),Zn=new oe(lt.comparator);function Jn(...t){let e=Zn;for(const n of t)e=e.add(n);return e}const tr=new oe(W);function er(){return tr}
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
 */function nr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:St(e)?"-0":e}}function rr(t){return{integerValue:""+t}}function sr(t,e){return It(e)?rr(e):nr(t,e)}
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
 */class ir{constructor(){this._=void 0}}function or(t,e,n){return t instanceof lr?function(t,e){const n={fields:{[me]:{stringValue:ge},[ve]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&we(e)&&(e=be(e)),e&&(n.fields[ye]=e),{mapValue:n}}(n,e):t instanceof ur?hr(t,e):t instanceof dr?fr(t,e):function(t,e){const n=cr(t,e),r=gr(n)+gr(t.Re);return Be(n)&&Be(t.Re)?rr(r):nr(t.serializer,r)}(t,e)}function ar(t,e,n){return t instanceof ur?hr(t,e):t instanceof dr?fr(t,e):n}function cr(t,e){return t instanceof pr?function(t){return Be(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class lr extends ir{}class ur extends ir{constructor(t){super(),this.elements=t}}function hr(t,e){const n=mr(e);for(const r of t.elements)n.some((t=>Ne(t,r)))||n.push(r);return{arrayValue:{values:n}}}class dr extends ir{constructor(t){super(),this.elements=t}}function fr(t,e){let n=mr(e);for(const r of t.elements)n=n.filter((t=>!Ne(t,r)));return{arrayValue:{values:n}}}class pr extends ir{constructor(t,e){super(),this.serializer=t,this.Re=e}}function gr(t){return fe(t.integerValue||t.doubleValue)}function mr(t){return $e(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function yr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ur&&e instanceof ur||t instanceof dr&&e instanceof dr?J(t.elements,e.elements,Ne):t instanceof pr&&e instanceof pr?Ne(t.Re,e.Re):t instanceof lr&&e instanceof lr}(t.transform,e.transform)}class vr{constructor(t,e){this.version=t,this.transformResults=e}}class wr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wr}static exists(t){return new wr(void 0,t)}static updateTime(t){return new wr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function br(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class _r{}function Er(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Or(t.key,wr.none()):new Ar(t.key,t.data,wr.none());{const n=t.data,r=Qe.empty();let s=new oe(ct.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new xr(t.key,r,new ce(s.toArray()),wr.none())}}function Tr(t,e,n){t instanceof Ar?function(t,e,n){const r=t.value.clone(),s=kr(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(t,e,n){if(!br(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=kr(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Dr(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Cr(t,e,n,r){return t instanceof Ar?function(t,e,n,r){if(!br(t.precondition,e))return n;const s=t.value.clone(),i=Nr(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(t,e,n,r){if(!br(t.precondition,e))return n;const s=Nr(t.fieldTransforms,r,e),i=e.data;return i.setAll(Dr(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return br(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Sr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=cr(r.transform,t||null);null!=s&&(null===n&&(n=Qe.empty()),n.set(r.field,s))}return n||null}function Ir(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&J(t,e,((t,e)=>yr(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ar extends _r{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xr extends _r{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dr(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function kr(t,e,n){const r=new Map;R(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ar(o,a,n[s]))}return r}function Nr(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,or(t,i,e))}return r}class Or extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rr extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Mr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Tr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Cr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Cr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Wn();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Er(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(rt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Jn())}isEqual(t){return this.batchId===t.batchId&&J(this.mutations,t.mutations,((t,e)=>Ir(t,e)))&&J(this.baseMutations,t.baseMutations,((t,e)=>Ir(t,e)))}}class Lr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){R(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let r=function(){return Yn}();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Lr(t,e,n,r)}}
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
 */class Pr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Vr{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var Fr,Ur;function Br(t){switch(t){case L.OK:return N(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return N(15467,{code:t})}}function $r(t){if(void 0===t)return x("GRPC error has no .code"),L.UNKNOWN;switch(t){case Fr.OK:return L.OK;case Fr.CANCELLED:return L.CANCELLED;case Fr.UNKNOWN:return L.UNKNOWN;case Fr.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Fr.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Fr.INTERNAL:return L.INTERNAL;case Fr.UNAVAILABLE:return L.UNAVAILABLE;case Fr.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Fr.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Fr.NOT_FOUND:return L.NOT_FOUND;case Fr.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Fr.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Fr.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Fr.ABORTED:return L.ABORTED;case Fr.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Fr.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Fr.DATA_LOSS:return L.DATA_LOSS;default:return N(39323,{code:t})}}(Ur=Fr||(Fr={}))[Ur.OK=0]="OK",Ur[Ur.CANCELLED=1]="CANCELLED",Ur[Ur.UNKNOWN=2]="UNKNOWN",Ur[Ur.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ur[Ur.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ur[Ur.NOT_FOUND=5]="NOT_FOUND",Ur[Ur.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ur[Ur.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ur[Ur.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ur[Ur.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ur[Ur.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ur[Ur.ABORTED=10]="ABORTED",Ur[Ur.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ur[Ur.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ur[Ur.INTERNAL=13]="INTERNAL",Ur[Ur.UNAVAILABLE=14]="UNAVAILABLE",Ur[Ur.DATA_LOSS=15]="DATA_LOSS";
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
let jr=null;
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
 */const qr=new r([4294967295,4294967295],0);function zr(t){const e=G().encode(t),n=new s;return n.update(e),new Uint8Array(n.digest())}function Kr(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,s],0),new r([i,o],0)]}class Hr{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Gr(`Invalid padding: ${e}`);if(n<0)throw new Gr(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Gr(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Gr(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=r.fromNumber(this.pe)}we(t,e,n){let s=t.add(e.multiply(r.fromNumber(n)));return 1===s.compare(qr)&&(s=new r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.pe)return!1;const e=zr(t),[n,r]=Kr(e);for(let s=0;s<this.hashCount;s++){const t=this.we(n,r,s);if(!this.be(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new Hr(s,r,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.pe)return;const e=zr(t),[n,r]=Kr(e);for(let s=0;s<this.hashCount;s++){const t=this.we(n,r,s);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Qr{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Wr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Qr(rt.min(),r,new re(W),zn(),Jn())}}class Wr{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Wr(n,e,Jn(),Jn(),Jn())}}
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
 */class Xr{constructor(t,e,n,r){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=r}}class Yr{constructor(t,e){this.targetId=t,this.Ce=e}}class Zr{constructor(t,e,n=ue.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Jr{constructor(){this.Fe=0,this.Me=ns(),this.xe=ue.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return 0!==this.Fe}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Jn(),e=Jn(),n=Jn();return this.Me.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:N(38017,{changeType:s})}})),new Wr(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=ns()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,R(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ts{constructor(t){this.ze=t,this.je=new Map,this.He=zn(),this.Je=es(),this.Ye=es(),this.Ze=new re(W)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,(e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:N(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach(((t,n)=>{this.it(n)&&e(n)}))}ot(t){const e=t.targetId,n=t.Ce.count,r=this._t(e);if(r){const s=r.target;if(Cn(s))if(0===n){const t=new lt(s.path);this.tt(e,t,Xe.newNoDocument(t,rt.min()))}else R(1===n,20013,{expectedCount:n});else{const r=this.ut(e);if(r!==n){const n=this.ct(t),s=n?this.lt(n,t,r):1;if(0!==s){this.st(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}null==jr||jr.ht(function(t,e,n,r,s){var i,o,a,c,l,u;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===s,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
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
 */(r,t.Ce,this.ze.Pt(),n,s))}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=pe(n).toUint8Array()}catch(t){if(t instanceof le)return D("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Hr(i,r,s)}catch(t){return D(t instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.pe?null:o}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.ze.Pt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.tt(e,n,null),r++)})),r}It(t){const e=new Map;this.je.forEach(((n,r)=>{const s=this._t(r);if(s){if(n.current&&Cn(s.target)){const e=new lt(s.target.path);this.Et(e).has(r)||this.dt(r,e)||this.tt(r,e,Xe.newNoDocument(e,t))}n.Le&&(e.set(r,n.qe()),n.Qe())}}));let n=Jn();this.Ye.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this._t(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.He.forEach(((e,n)=>n.setReadTime(t)));const r=new Qr(t,e,this.Ze,this.He,n);return this.He=zn(),this.Je=es(),this.Ye=es(),this.Ze=new re(W),r}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const r=this.rt(t);this.dt(t,e)?r.$e(e,1):r.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Jr,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new oe(W),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new oe(W),this.Je=this.Je.insert(t,e)),e}it(t){const e=null!==this._t(t);return e||A("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Jr),this.ze.getRemoteKeysForTarget(t).forEach((e=>{this.tt(t,e,null)}))}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function es(){return new re(lt.comparator)}function ns(){return new re(lt.comparator)}const rs=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ss=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),is=(()=>{const t={and:"AND",or:"OR"};return t})();class os{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function as(t,e){return t.useProto3Json||Ct(e)?e:{value:e}}function cs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ls(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function us(t,e){return cs(t,e.toTimestamp())}function hs(t){return R(!!t,49232),rt.fromTimestamp(function(t){const e=de(t);return new nt(e.seconds,e.nanos)}(t))}function ds(t,e){return fs(t,e).canonicalString()}function fs(t,e){const n=function(t){return new ot(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function ps(t){const e=ot.fromString(t);return R(Vs(e),10190,{key:e.toString()}),e}function gs(t,e){return ds(t.databaseId,e.path)}function ms(t,e){const n=ps(e);if(n.get(1)!==t.databaseId.projectId)throw new P(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new lt(bs(n))}function ys(t,e){return ds(t.databaseId,e)}function vs(t){const e=ps(t);return 4===e.length?ot.emptyPath():bs(e)}function ws(t){return new ot(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bs(t){return R(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function _s(t,e,n){return{name:gs(t,e),fields:n.value.mapValue.fields}}function Es(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:N(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(R(void 0===e||"string"==typeof e,58123),ue.fromBase64String(e||"")):(R(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),ue.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?L.UNKNOWN:$r(t.code);return new P(e,t.message||"")}(o);n=new Zr(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(t,r.document.name),i=hs(r.document.updateTime),o=r.document.createTime?hs(r.document.createTime):rt.min(),a=new Qe({mapValue:{fields:r.document.fields}}),c=Xe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Xr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ms(t,r.document),i=r.readTime?hs(r.readTime):rt.min(),o=Xe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Xr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ms(t,r.document),i=r.removedTargetIds||[];n=new Xr([],i,s,null)}else{if(!("filter"in e))return N(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new Vr(r,s),o=t.targetId;n=new Yr(o,i)}}return n}function Ts(t,e){let n;if(e instanceof Ar)n={update:_s(t,e.key,e.value)};else if(e instanceof Or)n={delete:gs(t,e.key)};else if(e instanceof xr)n={update:_s(t,e.key,e.data),updateMask:Ps(e.fieldMask)};else{if(!(e instanceof Rr))return N(16599,{ft:e.type});n={verify:gs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof lr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ur)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof dr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof pr)return{fieldPath:e.field.canonicalString(),increment:n.Re};throw N(20930,{transform:e.transform})}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:us(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:N(27497)}(t,e.precondition)),n}function Cs(t,e){return t&&t.length>0?(R(void 0!==e,14353),t.map((t=>function(t,e){let n=t.updateTime?hs(t.updateTime):hs(e);return n.isEqual(rt.min())&&(n=hs(e)),new vr(n,t.transformResults||[])}(t,e)))):[]}function Ss(t,e){return{documents:[ys(t,e.path)]}}function Is(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ys(t,s);const i=function(t){if(0!==t.length)return Ls(sn.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Rs(t.field),direction:ks(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=as(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{gt:n,parent:s}}function As(t){let e=vs(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){R(1===r,65062);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Ds(t);return e instanceof sn&&an(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new tn(Ms(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ct(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ye(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Ye(n,e)}(n.endAt)),In(e,s,o,i,a,"F",c,l)}function xs(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return N(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ds(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ms(t.unaryFilter.field);return rn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ms(t.unaryFilter.field);return rn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ms(t.unaryFilter.field);return rn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ms(t.unaryFilter.field);return rn.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return N(61313);default:return N(60726)}}(t):void 0!==t.fieldFilter?function(t){return rn.create(Ms(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return N(58110);default:return N(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return sn.create(t.compositeFilter.filters.map((t=>Ds(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return N(1026)}}(t.compositeFilter.op))}(t):N(30097,{filter:t})}function ks(t){return rs[t]}function Ns(t){return ss[t]}function Os(t){return is[t]}function Rs(t){return{fieldPath:t.canonicalString()}}function Ms(t){return ct.fromServerFormat(t.fieldPath)}function Ls(t){return t instanceof rn?function(t){if("=="===t.op){if(qe(t.value))return{unaryFilter:{field:Rs(t.field),op:"IS_NAN"}};if(je(t.value))return{unaryFilter:{field:Rs(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(qe(t.value))return{unaryFilter:{field:Rs(t.field),op:"IS_NOT_NAN"}};if(je(t.value))return{unaryFilter:{field:Rs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rs(t.field),op:Ns(t.op),value:t.value}}}(t):t instanceof sn?function(t){const e=t.getFilters().map((t=>Ls(t)));return 1===e.length?e[0]:{compositeFilter:{op:Os(t.op),filters:e}}}(t):N(54877,{filter:t})}function Ps(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Vs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Fs{constructor(t,e,n,r,s=rt.min(),i=rt.min(),o=ue.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Fs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Us{constructor(t){this.wt=t}}function Bs(t){const e=As({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Mn(e,e.limit,"L"):e}
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
class $s{constructor(){}vt(t,e){this.Ct(t,e),e.Ft()}Ct(t,e){if("nullValue"in t)this.Mt(e,5);else if("booleanValue"in t)this.Mt(e,10),e.xt(t.booleanValue?1:0);else if("integerValue"in t)this.Mt(e,15),e.xt(fe(t.integerValue));else if("doubleValue"in t){const n=fe(t.doubleValue);isNaN(n)?this.Mt(e,13):(this.Mt(e,15),St(n)?e.xt(0):e.xt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Mt(e,20),"string"==typeof n&&(n=de(n)),e.Ot(`${n.seconds||""}`),e.xt(n.nanos||0)}else if("stringValue"in t)this.Nt(t.stringValue,e),this.Bt(e);else if("bytesValue"in t)this.Mt(e,30),e.Lt(pe(t.bytesValue)),this.Bt(e);else if("referenceValue"in t)this.kt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Mt(e,45),e.xt(n.latitude||0),e.xt(n.longitude||0)}else"mapValue"in t?Ge(t)?this.Mt(e,Number.MAX_SAFE_INTEGER):Ke(t)?this.qt(t.mapValue,e):(this.Qt(t.mapValue,e),this.Bt(e)):"arrayValue"in t?(this.$t(t.arrayValue,e),this.Bt(e)):N(19022,{Ut:t})}Nt(t,e){this.Mt(e,25),this.Kt(t,e)}Kt(t,e){e.Ot(t)}Qt(t,e){const n=t.fields||{};this.Mt(e,55);for(const r of Object.keys(n))this.Nt(r,e),this.Ct(n[r],e)}qt(t,e){var n,r;const s=t.fields||{};this.Mt(e,53);const i=De,o=(null===(r=null===(n=s[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Mt(e,15),e.xt(fe(o)),this.Nt(i,e),this.Ct(s[i],e)}$t(t,e){const n=t.values||[];this.Mt(e,50);for(const r of n)this.Ct(r,e)}kt(t,e){this.Mt(e,37),lt.fromName(t).path.forEach((t=>{this.Mt(e,60),this.Kt(t,e)}))}Mt(t,e){t.xt(e)}Bt(t){t.xt(2)}}$s.Wt=new $s;
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
class js{constructor(){this.Cn=new qs}addToCollectionParentIndex(t,e){return this.Cn.add(e),wt.resolve()}getCollectionParents(t,e){return wt.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return wt.resolve()}deleteFieldIndex(t,e){return wt.resolve()}deleteAllFieldIndexes(t){return wt.resolve()}createTargetIndexes(t,e){return wt.resolve()}getDocumentsMatchingTarget(t,e){return wt.resolve(null)}getIndexType(t,e){return wt.resolve(0)}getFieldIndexes(t,e){return wt.resolve([])}getNextCollectionGroupToUpdate(t){return wt.resolve(null)}getMinOffset(t,e){return wt.resolve(pt.min())}getMinOffsetFromCollectionGroup(t,e){return wt.resolve(pt.min())}updateCollectionGroup(t,e,n){return wt.resolve()}updateIndexEntries(t,e){return wt.resolve()}}class qs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new oe(ot.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new oe(ot.comparator)).toArray()}}
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
const zs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ks=41943040;class Hs{static withCacheSize(t){return new Hs(t,Hs.DEFAULT_COLLECTION_PERCENTILE,Hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */Hs.DEFAULT_COLLECTION_PERCENTILE=10,Hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hs.DEFAULT=new Hs(Ks,Hs.DEFAULT_COLLECTION_PERCENTILE,Hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hs.DISABLED=new Hs(-1,0,0);
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
class Gs{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Gs(0)}static lr(){return new Gs(-1)}}
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
const Qs="LruGarbageCollector",Ws=1048576;function Xs([t,e],[n,r]){const s=W(t,n);return 0===s?W(e,r):s}class Ys{constructor(t){this.Er=t,this.buffer=new oe(Xs),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Xs(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Zs{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Vr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return null!==this.Vr}mr(t){A(Qs,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_t(t)?A(Qs,"Ignoring IndexedDB error during garbage collection: ",t):await vt(t)}await this.mr(3e5)}))}}class Js{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return wt.resolve(Et.le);const n=new Ys(e);return this.gr.forEachTarget(t,(t=>n.Rr(t.sequenceNumber))).next((()=>this.gr.yr(t,(t=>n.Rr(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.gr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector","Garbage collection skipped; disabled"),wt.resolve(zs)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zs):this.wr(t,e)))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let n,r,s,i,o,c,l;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(s=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(l=Date.now(),I()<=a.$b.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(l-c)+"ms\n"+`Total Duration: ${l-u}ms`),wt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t}))))}}function ti(t,e){return new Js(t,e)}
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
class ei{constructor(){this.changes=new jn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Xe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?wt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class ni{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class ri{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Cr(n.mutation,t,ce.empty(),nt.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Jn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Jn()){const r=Qn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Hn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Qn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Jn())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=zn();const i=Xn(),o=function(){return Xn()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof xr)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Cr(o.mutation,e,o.mutation.getFieldMask(),nt.now())):i.set(e.key,ce.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ni(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Xn();let r=new re(((t,e)=>t-e)),s=Jn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||ce.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Jn()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=Wn();c.forEach((t=>{if(!s.has(t)){const r=Er(e.get(t),n.get(t));null!==r&&l.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,l))}return wt.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return lt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Dn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):wt.resolve(Qn());let o=ut,a=s;return i.next((e=>wt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?wt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Jn()))).next((t=>({batchId:o,changes:Gn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new lt(e)).next((t=>{let e=Hn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=Hn();return this.indexManager.getCollectionParents(t,s).next((o=>wt.forEach(o,(o=>{const a=function(t,e){return new Sn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r)))).next((t=>{s.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Xe.newInvalidDocument(r)))}));let n=Hn();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&Cr(i.mutation,r,ce.empty(),nt.now()),Fn(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class si{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return wt.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:hs(t.createTime)}}(e)),wt.resolve()}getNamedQuery(t,e){return wt.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(t){return{name:t.name,query:Bs(t.bundledQuery),readTime:hs(t.readTime)}}(e)),wt.resolve()}}
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
 */class ii{constructor(){this.overlays=new re(lt.comparator),this.Qr=new Map}getOverlay(t,e){return wt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Qn();return wt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.St(t,e,r)})),wt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Qr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Qr.delete(n)),wt.resolve()}getOverlaysForCollection(t,e,n){const r=Qn(),s=e.length+1,i=new lt(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return wt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new re(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Qn(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Qn(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return wt.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Qr.get(r.largestBatchId).delete(n.key);this.Qr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Pr(e,n));let s=this.Qr.get(e);void 0===s&&(s=Jn(),this.Qr.set(e,s)),this.Qr.set(e,s.add(n.key))}}
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
 */class oi{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(t){return wt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,wt.resolve()}}
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
 */class ai{constructor(){this.$r=new oe(ci.Ur),this.Kr=new oe(ci.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const n=new ci(t,e);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.zr(new ci(t,e))}jr(t,e){t.forEach((t=>this.removeReference(t,e)))}Hr(t){const e=new lt(new ot([])),n=new ci(e,t),r=new ci(e,t+1),s=[];return this.Kr.forEachInRange([n,r],(t=>{this.zr(t),s.push(t.key)})),s}Jr(){this.$r.forEach((t=>this.zr(t)))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new lt(new ot([])),n=new ci(e,t),r=new ci(e,t+1);let s=Jn();return this.Kr.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new ci(t,0),n=this.$r.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ci{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return lt.comparator(t.key,e.key)||W(t.Zr,e.Zr)}static Wr(t,e){return W(t.Zr,e.Zr)||lt.comparator(t.key,e.key)}}
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
 */class li{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new oe(ci.Ur)}checkEmpty(t){return wt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Mr(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.Xr=this.Xr.add(new ci(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return wt.resolve(i)}lookupMutationBatch(t,e){return wt.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ti(n),s=r<0?0:r;return wt.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return wt.resolve(0===this.mutationQueue.length?Tt:this.nr-1)}getAllMutationBatches(t){return wt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ci(e,0),r=new ci(e,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([n,r],(t=>{const e=this.ei(t.Zr);s.push(e)})),wt.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new oe(W);return e.forEach((t=>{const e=new ci(t,0),r=new ci(t,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([e,r],(t=>{n=n.add(t.Zr)}))})),wt.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;lt.isDocumentKey(s)||(s=s.child(""));const i=new ci(new lt(s),0);let o=new oe(W);return this.Xr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Zr)),!0)}),i),wt.resolve(this.ni(o))}ni(t){const e=[];return t.forEach((t=>{const n=this.ei(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){R(0===this.ri(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Xr;return wt.forEach(e.mutations,(r=>{const s=new ci(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Xr=n}))}sr(t){}containsKey(t,e){const n=new ci(e,0),r=this.Xr.firstAfterOrEqual(n);return wt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,wt.resolve()}ri(t,e){return this.ti(t)}ti(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class ui{constructor(t){this.ii=t,this.docs=function(){return new re(lt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ii(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return wt.resolve(n?n.document.mutableCopy():Xe.newInvalidDocument(e))}getEntries(t,e){let n=zn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Xe.newInvalidDocument(t))})),wt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=zn();const i=e.path,o=new lt(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||gt(ft(o),n)<=0||(r.has(o.key)||Fn(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return wt.resolve(s)}getAllFromCollectionGroup(t,e,n,r){N(9500)}si(t,e){return wt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new hi(this)}getSize(t){return wt.resolve(this.size)}}class hi extends ei{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Br.addEntry(t,r)):this.Br.removeEntry(n)})),wt.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}
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
 */class di{constructor(t){this.persistence=t,this.oi=new jn((t=>En(t)),Tn),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this._i=0,this.ai=new ai,this.targetCount=0,this.ui=Gs.cr()}forEachTarget(t,e){return this.oi.forEach(((t,n)=>e(n))),wt.resolve()}getLastRemoteSnapshotVersion(t){return wt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return wt.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),wt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this._i&&(this._i=e),wt.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Gs(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,wt.resolve()}updateTargetData(t,e){return this.Tr(e),wt.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,wt.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.oi.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.oi.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),wt.waitFor(s).next((()=>r))}getTargetCount(t){return wt.resolve(this.targetCount)}getTargetData(t,e){const n=this.oi.get(e)||null;return wt.resolve(n)}addMatchingKeys(t,e,n){return this.ai.Gr(e,n),wt.resolve()}removeMatchingKeys(t,e,n){this.ai.jr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),wt.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),wt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ai.Yr(e);return wt.resolve(n)}containsKey(t,e){return wt.resolve(this.ai.containsKey(e))}}
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
 */class fi{constructor(t,e){this.ci={},this.overlays={},this.li=new Et(0),this.hi=!1,this.hi=!0,this.Pi=new oi,this.referenceDelegate=t(this),this.Ti=new di(this),this.indexManager=new js,this.remoteDocumentCache=function(t){return new ui(t)}((t=>this.referenceDelegate.Ii(t))),this.serializer=new Us(e),this.Ei=new si(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ii,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ci[t.toKey()];return n||(n=new li(e,this.referenceDelegate),this.ci[t.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const r=new pi(this.li.next());return this.referenceDelegate.di(),n(r).next((t=>this.referenceDelegate.Ai(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ri(t,e){return wt.or(Object.values(this.ci).map((n=>()=>n.containsKey(t,e))))}}class pi extends yt{constructor(t){super(),this.currentSequenceNumber=t}}class gi{constructor(t){this.persistence=t,this.Vi=new ai,this.mi=null}static fi(t){return new gi(t)}get gi(){if(this.mi)return this.mi;throw N(60996)}addReference(t,e,n){return this.Vi.addReference(n,e),this.gi.delete(n.toString()),wt.resolve()}removeReference(t,e,n){return this.Vi.removeReference(n,e),this.gi.add(n.toString()),wt.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),wt.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach((t=>this.gi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.gi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return wt.forEach(this.gi,(n=>{const r=lt.fromPath(n);return this.pi(t,r).next((t=>{t||e.removeEntry(r,rt.min())}))})).next((()=>(this.mi=null,e.apply(t))))}updateLimboDocument(t,e){return this.pi(t,e).next((t=>{t?this.gi.delete(e.toString()):this.gi.add(e.toString())}))}Ii(t){return 0}pi(t,e){return wt.or([()=>wt.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class mi{constructor(t,e){this.persistence=t,this.yi=new jn((t=>xt(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=ti(this,e)}static fi(t,e){return new mi(t,e)}di(){}Ai(t){return wt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}br(t){let e=0;return this.yr(t,(t=>{e++})).next((()=>e))}yr(t,e){return wt.forEach(this.yi,((n,r)=>this.Dr(t,n,r).next((t=>t?wt.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.si(t,(r=>this.Dr(t,r,e).next((t=>{t||(n++,s.removeEntry(r,rt.min()))})))).next((()=>s.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),wt.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),wt.resolve()}removeReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),wt.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),wt.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Fe(t.data.value)),e}Dr(t,e,n){return wt.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.yi.get(e);return wt.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
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
class yi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ds=n,this.As=r}static Rs(t,e){let n=Jn(),r=Jn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new yi(t,e.fromCache,n,r)}}
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
 */class vi{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class wi{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return(0,c.nr)()?8:bt((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.ws(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.bs(t,e,r,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new vi;return this.Ss(t,e,n).next((r=>{if(s.result=r,this.fs)return this.Ds(t,e,n,r.size)}))})).next((()=>s.result))}Ds(t,e,n,r){return n.documentReadCount<this.gs?(I()<=a.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Vn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),wt.resolve()):(I()<=a.$b.DEBUG&&A("QueryEngine","Query:",Vn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ps*r?(I()<=a.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Vn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nn(e))):wt.resolve())}ws(t,e){if(xn(e))return wt.resolve(null);let n=Nn(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Mn(e,null,"F"),n=Nn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=Jn(...r);return this.ys.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.vs(e,r);return this.Cs(e,i,s,n.readTime)?this.ws(t,Mn(e,null,"F")):this.Fs(t,i,e,n)}))))})))))}bs(t,e,n,r){return xn(e)||r.isEqual(rt.min())?wt.resolve(null):this.ys.getDocuments(t,n).next((s=>{const i=this.vs(e,s);return this.Cs(e,i,n,r)?wt.resolve(null):(I()<=a.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vn(e)),this.Fs(t,i,e,dt(r,ut)).next((t=>t)))}))}vs(t,e){let n=new oe(Bn(t));return e.forEach(((e,r)=>{Fn(t,r)&&(n=n.add(r))})),n}Cs(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ss(t,e,n){return I()<=a.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Vn(e)),this.ys.getDocumentsMatchingQuery(t,e,pt.min(),n)}Fs(t,e,n,r){return this.ys.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */const bi="LocalStore",_i=3e8;class Ei{constructor(t,e,n,r){this.persistence=t,this.Ms=e,this.serializer=r,this.xs=new re(W),this.Os=new jn((t=>En(t)),Tn),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(n)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ri(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.xs)))}}function Ti(t,e,n,r){return new Ei(t,e,n,r)}async function Ci(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.Ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Jn();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ks:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function Si(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=wt.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);R(null!==i,48541),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Jn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ii(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ti.getLastRemoteSnapshotVersion(t)))}function Ai(t,e){const n=M(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Ti.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Ti.addMatchingKeys(t,i.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?l=l.withResumeToken(ue.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,r)),s=s.insert(a,l),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=_i)return!0;const s=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return s>0}(c,l,i)&&o.push(n.Ti.updateTargetData(t,l))}));let a=zn(),c=Jn();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(xi(t,i,e.documentUpdates).next((t=>{a=t.qs,c=t.Qs}))),!r.isEqual(rt.min())){const e=n.Ti.getLastRemoteSnapshotVersion(t).next((e=>n.Ti.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return wt.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.xs=s,t)))}function xi(t,e,n){let r=Jn(),s=Jn();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=zn();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(rt.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):A(bi,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{qs:r,Qs:s}}))}function Di(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=Tt),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function ki(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ti.getTargetData(t,e).next((s=>s?(r=s,wt.resolve(r)):n.Ti.allocateTargetId(t).next((s=>(r=new Fs(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Ti.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.xs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.xs=n.xs.insert(t.targetId,t),n.Os.set(e,t.targetId)),t}))}async function Ni(t,e,n){const r=M(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!_t(t))throw t;A(bi,`Failed to update sequence numbers for target ${e}: ${t}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Oi(t,e,n){const r=M(t);let s=rt.min(),i=Jn();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=M(t),s=r.Os.get(n);return void 0!==s?wt.resolve(r.xs.get(s)):r.Ti.getTargetData(e,n)}(r,t,Nn(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Ms.getDocumentsMatchingQuery(t,e,n?s:rt.min(),n?i:Jn()))).next((t=>(Ri(r,Un(e),t),{documents:t,$s:i})))))}function Ri(t,e,n){let r=t.Ns.get(e)||rt.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ns.set(e,r)}class Mi{constructor(){this.activeTargetIds=er()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Li{constructor(){this.xo=new Mi,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,n){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Mi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Pi{No(t){}shutdown(){}}
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
 */const Vi="ConnectivityMonitor";class Fi{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){A(Vi,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){A(Vi,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Ui=null;function Bi(){return null===Ui?Ui=function(){return 268435456+Math.round(2147483648*Math.random())}():Ui++,"0x"+Ui.toString(16)
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
 */}const $i="RestConnection",ji={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qi{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${n}/databases/${r}`,this.Go=this.databaseId.database===Te?`project_id=${n}`:`project_id=${n}&database_id=${r}`}zo(t,e,n,r,s){const i=Bi(),o=this.jo(t,e.toUriEncodedString());A($i,`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(a,r,s);const{host:l}=new URL(o),u=(0,c.zJ)(l);return this.Jo(t,o,a,n,u).then((e=>(A($i,`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw D($i,`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Yo(t,e,n,r,s,i){return this.zo(t,e,n,r,s)}Ho(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+C}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}jo(t,e){const n=ji[t];return`${this.Ko}/v1/${e}:${n}`}terminate(){}}
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
 */class zi{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}
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
 */const Ki="WebChannelConnection";class Hi extends qi{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,r,s){const i=Bi();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();A(Ki,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case p.TIMEOUT:A(Ki,`RPC '${t}' ${i} timed out`),o(new P(L.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(A(Ki,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(e)>=0?e:L.UNKNOWN}(e.status);o(new P(t,e.message))}else o(new P(L.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(L.UNAVAILABLE,"Connection failed."));break;default:N(9055,{h_:t,streamId:i,P_:a.getLastErrorCode(),T_:a.getLastError()})}}finally{A(Ki,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);A(Ki,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}I_(t,e,n){const r=Bi(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=v(),o=y(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=s.join("");A(Ki,`Creating RPC '${t}' stream ${r}: ${l}`,a);const u=i.createWebChannel(l,a);this.E_(u);let h=!1,f=!1;const p=new zi({Zo:e=>{f?A(Ki,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(A(Ki,`Opening RPC '${t}' stream ${r} transport.`),u.open(),h=!0),A(Ki,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Xo:()=>u.close()}),w=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return w(u,d.EventType.OPEN,(()=>{f||(A(Ki,`RPC '${t}' stream ${r} transport opened.`),p.__())})),w(u,d.EventType.CLOSE,(()=>{f||(f=!0,A(Ki,`RPC '${t}' stream ${r} transport closed`),p.u_(),this.d_(u))})),w(u,d.EventType.ERROR,(e=>{f||(f=!0,D(Ki,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),p.u_(new P(L.UNAVAILABLE,"The operation could not be completed")))})),w(u,d.EventType.MESSAGE,(e=>{var n;if(!f){const s=e.data[0];R(!!s,16349);const i=s,o=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){A(Ki,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Fr[t];if(void 0!==e)return $r(e)}(e),s=o.message;void 0===n&&(n=L.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),f=!0,p.u_(new P(n,s)),u.close()}else A(Ki,`RPC '${t}' stream ${r} received:`,s),p.c_(s)}})),w(o,m.STAT_EVENT,(e=>{e.stat===g.PROXY?A(Ki,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===g.NOPROXY&&A(Ki,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.a_()}),0),p}terminate(){this.l_.forEach((t=>t.close())),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter((e=>e===t))}}
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
 */function Gi(){return"undefined"!=typeof document?document:null}
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
 */function Qi(t){return new os(t,!0)}
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
 */class Wi{constructor(t,e,n=1e3,r=1.5,s=6e4){this.xi=t,this.timerId=e,this.A_=n,this.R_=r,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),r=Math.max(0,e-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,(()=>(this.g_=Date.now(),t()))),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){null!==this.f_&&(this.f_.skipDelay(),this.f_=null)}cancel(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}
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
 */const Xi="PersistentStream";class Yi{constructor(t,e,n,r,s,i,o,a){this.xi=t,this.S_=n,this.D_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Wi(t,e)}O_(){return 1===this.state||5===this.state||this.N_()}N_(){return 2===this.state||3===this.state}start(){this.M_=0,4!==this.state?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&null===this.C_&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,(()=>this.q_())))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,4!==t?this.x_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(x(e.toString()),x("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===L.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.v_===e&&this.z_(t,n)}),(e=>{t((()=>{const t=new P(L.UNKNOWN,"Fetching auth token failed: "+e.message);return this.j_(t)}))}))}z_(t,e){const n=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_((()=>{n((()=>this.listener.e_()))})),this.stream.n_((()=>{n((()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,(()=>(this.N_()&&(this.state=3),Promise.resolve()))),this.listener.n_())))})),this.stream.i_((t=>{n((()=>this.j_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.M_?this.J_(t):this.onNext(t)))}))}B_(){this.state=5,this.x_.y_((async()=>{this.state=0,this.start()}))}j_(t){return A(Xi,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget((()=>this.v_===t?e():(A(Xi,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Zi extends Yi{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=Es(this.serializer,t),n=function(t){if(!("targetChange"in t))return rt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?rt.min():e.readTime?hs(e.readTime):rt.min()}(t);return this.listener.Y_(e,n)}Z_(t){const e={};e.database=ws(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Cn(r)?{documents:Ss(t,r)}:{query:Is(t,r).gt},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ls(t,e.resumeToken);const r=as(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(rt.min())>0){n.readTime=cs(t,e.snapshotVersion.toTimestamp());const r=as(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=xs(this.serializer,t);n&&(e.labels=n),this.Q_(e)}X_(t){const e={};e.database=ws(this.serializer),e.removeTarget=t,this.Q_(e)}}class Ji extends Yi{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return R(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,R(!t.writeResults||0===t.writeResults.length,55816),this.listener.na()}onNext(t){R(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=Cs(t.writeResults,t.commitTime),n=hs(t.commitTime);return this.listener.ra(n,e)}ia(){const t={};t.database=ws(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ts(this.serializer,t)))};this.Q_(e)}}
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
 */class to{}class eo extends to{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.sa=!1}oa(){if(this.sa)throw new P(L.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,n,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.zo(t,fs(e,n),r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(L.UNKNOWN,t.toString())}))}Yo(t,e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Yo(t,fs(e,n),r,i,o,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(L.UNKNOWN,t.toString())}))}terminate(){this.sa=!0,this.connection.terminate()}}class no{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){0===this._a&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve()))))}Pa(t){"Online"===this.state?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,"Online"===t&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(x(e),this.ua=!1):A("OnlineStateTracker",e)}Ta(){null!==this.aa&&(this.aa.cancel(),this.aa=null)}}
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
 */const ro="RemoteStore";class so{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No((t=>{n.enqueueAndForget((async()=>{po(this)&&(A(ro,"Restarting streams for network reachability change."),await async function(t){const e=M(t);e.da.add(4),await oo(e),e.Va.set("Unknown"),e.da.delete(4),await io(e)}(this))}))})),this.Va=new no(n,r)}}async function io(t){if(po(t))for(const e of t.Aa)await e(!0)}async function oo(t){for(const e of t.Aa)await e(!1)}function ao(t,e){const n=M(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),fo(n)?ho(n):Ro(n).N_()&&lo(n,e))}function co(t,e){const n=M(t),r=Ro(n);n.Ea.delete(e),r.N_()&&uo(n,e),0===n.Ea.size&&(r.N_()?r.k_():po(n)&&n.Va.set("Unknown"))}function lo(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(rt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(t).Z_(e)}function uo(t,e){t.ma.Ke(e),Ro(t).X_(e)}function ho(t){t.ma=new ts({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.Va.ca()}function fo(t){return po(t)&&!Ro(t).O_()&&t.Ea.size>0}function po(t){return 0===M(t).da.size}function go(t){t.ma=void 0}async function mo(t){t.Va.set("Online")}async function yo(t){t.Ea.forEach(((e,n)=>{lo(t,e)}))}async function vo(t,e){go(t),fo(t)?(t.Va.Pa(e),ho(t)):t.Va.set("Unknown")}async function wo(t,e,n){if(t.Va.set("Online"),e instanceof Zr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ea.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ea.delete(r),t.ma.removeTarget(r))}(t,e)}catch(n){A(ro,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bo(t,n)}else if(e instanceof Xr?t.ma.Xe(e):e instanceof Yr?t.ma.ot(e):t.ma.nt(e),!n.isEqual(rt.min()))try{const e=await Ii(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.ma.It(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Ea.get(r);s&&t.Ea.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Ea.get(e);if(!r)return;t.Ea.set(e,r.withResumeToken(ue.EMPTY_BYTE_STRING,r.snapshotVersion)),uo(t,e);const s=new Fs(r.target,e,n,r.sequenceNumber);lo(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){A(ro,"Failed to raise snapshot:",e),await bo(t,e)}}async function bo(t,e,n){if(!_t(e))throw e;t.da.add(1),await oo(t),t.Va.set("Offline"),n||(n=()=>Ii(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{A(ro,"Retrying IndexedDB access"),await n(),t.da.delete(1),await io(t)}))}function _o(t,e){return e().catch((n=>bo(t,n,e)))}async function Eo(t){const e=M(t),n=Mo(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Tt;for(;To(e);)try{const t=await Di(e.localStore,r);if(null===t){0===e.Ia.length&&n.k_();break}r=t.batchId,Co(e,t)}catch(t){await bo(e,t)}So(e)&&Io(e)}function To(t){return po(t)&&t.Ia.length<10}function Co(t,e){t.Ia.push(e);const n=Mo(t);n.N_()&&n.ea&&n.ta(e.mutations)}function So(t){return po(t)&&!Mo(t).O_()&&t.Ia.length>0}function Io(t){Mo(t).start()}async function Ao(t){Mo(t).ia()}async function xo(t){const e=Mo(t);for(const n of t.Ia)e.ta(n.mutations)}async function Do(t,e,n){const r=t.Ia.shift(),s=Lr.from(r,e,n);await _o(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Eo(t)}async function ko(t,e){e&&Mo(t).ea&&await async function(t,e){if(function(t){return Br(t)&&t!==L.ABORTED}(e.code)){const n=t.Ia.shift();Mo(t).L_(),await _o(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Eo(t)}}(t,e),So(t)&&Io(t)}async function No(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),A(ro,"RemoteStore received new credentials");const r=po(n);n.da.add(3),await oo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await io(n)}async function Oo(t,e){const n=M(t);e?(n.da.delete(2),await io(n)):e||(n.da.add(2),await oo(n),n.Va.set("Unknown"))}function Ro(t){return t.fa||(t.fa=function(t,e,n){const r=M(t);return r.oa(),new Zi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{e_:mo.bind(null,t),n_:yo.bind(null,t),i_:vo.bind(null,t),Y_:wo.bind(null,t)}),t.Aa.push((async e=>{e?(t.fa.L_(),fo(t)?ho(t):t.Va.set("Unknown")):(await t.fa.stop(),go(t))}))),t.fa}function Mo(t){return t.ga||(t.ga=function(t,e,n){const r=M(t);return r.oa(),new Ji(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:Ao.bind(null,t),i_:ko.bind(null,t),na:xo.bind(null,t),ra:Do.bind(null,t)}),t.Aa.push((async e=>{e?(t.ga.L_(),await Eo(t)):(await t.ga.stop(),t.Ia.length>0&&(A(ro,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))}))),t.ga
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
 */}class Lo{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new V,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Lo(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Po(t,e){if(x("AsyncQueue",`${e}: ${t}`),_t(t))return new P(L.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Vo{static emptySet(t){return new Vo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||lt.comparator(e.key,n.key):(t,e)=>lt.comparator(t.key,e.key),this.keyedMap=Hn(),this.sortedSet=new re(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Fo{constructor(){this.pa=new re(lt.comparator)}track(t){const e=t.doc.key,n=this.pa.get(e);n?0!==t.type&&3===n.type?this.pa=this.pa.insert(e,t):3===t.type&&1!==n.type?this.pa=this.pa.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pa=this.pa.remove(e):1===t.type&&2===n.type?this.pa=this.pa.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):N(63341,{Vt:t,ya:n}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Uo{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Uo(t,e,Vo.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ln(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Bo{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some((t=>t.va()))}}class $o{constructor(){this.queries=jo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=M(t),r=n.queries;n.queries=jo(),r.forEach(((t,n)=>{for(const r of n.Sa)r.onError(e)}))}(this,new P(L.ABORTED,"Firestore shutting down"))}}function jo(){return new jn((t=>Pn(t)),Ln)}async function qo(t,e){const n=M(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new Bo,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(t){const n=Po(t,`Initialization of query '${Vn(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&Go(n)}async function zo(t,e){const n=M(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.Sa.indexOf(e);t>=0&&(i.Sa.splice(t,1),0===i.Sa.length?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ko(t,e){const n=M(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.Sa)t.Ma(s)&&(r=!0);e.ba=s}}r&&Go(n)}function Ho(t,e,n){const r=M(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Go(t){t.Ca.forEach((t=>{t.next()}))}var Qo,Wo;(Wo=Qo||(Qo={})).xa="default",Wo.Cache="cache";class Xo{constructor(t,e,n){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=n||{}}Ma(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Uo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache)return!0;if(!this.va())return!0;const n="Offline"!==e;return(!this.options.Qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}qa(t){t=Uo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Qo.Cache}}
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
class Yo{constructor(t){this.key=t}}class Zo{constructor(t){this.key=t}}class Jo{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Jn(),this.mutatedKeys=Jn(),this.Za=Bn(t),this.Xa=new Vo(this.Za)}get eu(){return this.Ha}tu(t,e){const n=e?e.nu:new Fo,r=e?e.Xa:this.Xa;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const l=r.get(t),u=Fn(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.ru(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Za(u,a)>0||c&&this.Za(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Xa:i,nu:n,Cs:o,mutatedKeys:s}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const i=t.nu.wa();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N(20277,{Vt:t})}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Za(t.doc,e.doc))),this.iu(n),r=null!=r&&r;const o=e&&!r?this.su():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Ja;return this.Ja=a,0!==i.length||c?{snapshot:new Uo(this.query,t.Xa,s,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),ou:o}:{ou:o}}Fa(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Fo,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=Jn(),this.Xa.forEach((t=>{this._u(t.key)&&(this.Ya=this.Ya.add(t.key))}));const e=[];return t.forEach((t=>{this.Ya.has(t)||e.push(new Zo(t))})),this.Ya.forEach((n=>{t.has(n)||e.push(new Yo(n))})),e}au(t){this.Ha=t.$s,this.Ya=Jn();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return Uo.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,0===this.Ja,this.hasCachedResults)}}const ta="SyncEngine";class ea{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class na{constructor(t){this.key=t,this.cu=!1}}class ra{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.lu={},this.hu=new jn((t=>Pn(t)),Ln),this.Pu=new Map,this.Tu=new Set,this.Iu=new re(lt.comparator),this.Eu=new Map,this.du=new ai,this.Au={},this.Ru=new Map,this.Vu=Gs.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return!0===this.mu}}async function sa(t,e,n=!0){const r=Ia(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await oa(r,e,n,!0),s}async function ia(t,e){const n=Ia(t);await oa(n,e,!0,!1)}async function oa(t,e,n,r){const s=await ki(t.localStore,Nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await aa(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&ao(t.remoteStore,s),a}async function aa(t,e,n,r,s){t.fu=(e,n,r)=>async function(t,e,n,r){let s=e.view.tu(n);s.Cs&&(s=await Oi(t.localStore,e.query,!1).then((({documents:t})=>e.view.tu(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return ba(t,e.targetId,a.ou),a.snapshot}(t,e,n,r);const i=await Oi(t.localStore,e,!0),o=new Jo(e,i.$s),a=o.tu(i.documents),c=Wr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),l=o.applyChanges(a,t.isPrimaryClient,c);ba(t,n,l.ou);const u=new ea(e,n,o);return t.hu.set(e,u),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),l.snapshot}async function ca(t,e,n){const r=M(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter((t=>!Ln(t,e)))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ni(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&co(r.remoteStore,s.targetId),va(r,s.targetId)})).catch(vt)):(va(r,s.targetId),await Ni(r.localStore,s.targetId,!0))}async function la(t,e){const n=M(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),co(n.remoteStore,r.targetId))}async function ua(t,e,n){const r=Aa(t);try{const t=await function(t,e){const n=M(t),r=nt.now(),s=e.reduce(((t,e)=>t.add(e.key)),Jn());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=zn(),c=Jn();return n.Bs.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=Sr(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new xr(t.key,e,We(e.value.mapValue),wr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Gn(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Au[t.currentUser.toKey()];r||(r=new re(W)),r=r.insert(e,n),t.Au[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ta(r,t.changes),await Eo(r.remoteStore)}catch(t){const e=Po(t,"Failed to persist write");n.reject(e)}}async function ha(t,e){const n=M(t);try{const t=await Ai(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Eu.get(e);r&&(R(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.cu=!0:t.modifiedDocuments.size>0?R(r.cu,14607):t.removedDocuments.size>0&&(R(r.cu,42227),r.cu=!1))})),await Ta(n,t,e)}catch(t){await vt(t)}}function da(t,e,n){const r=M(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.hu.forEach(((n,r)=>{const s=r.view.Fa(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=M(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.Sa)s.Fa(e)&&(r=!0)})),r&&Go(n)}(r.eventManager,e),t.length&&r.lu.Y_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fa(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let t=new re(lt.comparator);t=t.insert(i,Xe.newNoDocument(i,rt.min()));const n=Jn().add(i),s=new Qr(rt.min(),new Map,new re(W),t,n);await ha(r,s),r.Iu=r.Iu.remove(i),r.Eu.delete(e),Ea(r)}else await Ni(r.localStore,e,!1).then((()=>va(r,e,n))).catch(vt)}async function pa(t,e){const n=M(t),r=e.batch.batchId;try{const t=await Si(n.localStore,e);ya(n,r,null),ma(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,t)}catch(t){await vt(t)}}async function ga(t,e,n){const r=M(t);try{const t=await function(t,e){const n=M(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(R(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);ya(r,e,n),ma(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,t)}catch(n){await vt(n)}}function ma(t,e){(t.Ru.get(e)||[]).forEach((t=>{t.resolve()})),t.Ru.delete(e)}function ya(t,e,n){const r=M(t);let s=r.Au[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function va(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach((e=>{t.du.containsKey(e)||wa(t,e)}))}function wa(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);null!==n&&(co(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),Ea(t))}function ba(t,e,n){for(const r of n)r instanceof Yo?(t.du.addReference(r.key,e),_a(t,r)):r instanceof Zo?(A(ta,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||wa(t,r.key)):N(19791,{pu:r})}function _a(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(A(ta,"New document in limbo: "+n),t.Tu.add(r),Ea(t))}function Ea(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new lt(ot.fromString(e)),r=t.Vu.next();t.Eu.set(r,new na(n)),t.Iu=t.Iu.insert(n,r),ao(t.remoteStore,new Fs(Nn(An(n.path)),r,"TargetPurposeLimboResolution",Et.le))}}async function Ta(t,e,n){const r=M(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach(((t,a)=>{o.push(r.fu(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const s=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=yi.Rs(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.lu.Y_(s),await async function(t,e){const n=M(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>wt.forEach(e,(e=>wt.forEach(e.ds,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>wt.forEach(e.As,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!_t(t))throw t;A(bi,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.xs.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.xs=n.xs.insert(t,s)}}}(r.localStore,i))}async function Ca(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){A(ta,"User change. New user:",e.toKey());const t=await Ci(n.localStore,e);n.currentUser=e,function(t,e){t.Ru.forEach((t=>{t.forEach((t=>{t.reject(new P(L.CANCELLED,e))}))})),t.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ta(n,t.ks)}}function Sa(t,e){const n=M(t),r=n.Eu.get(e);if(r&&r.cu)return Jn().add(r.key);{let t=Jn();const r=n.Pu.get(e);if(!r)return t;for(const e of r){const r=n.hu.get(e);t=t.unionWith(r.view.eu)}return t}}function Ia(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ha.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sa.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fa.bind(null,e),e.lu.Y_=Ko.bind(null,e.eventManager),e.lu.gu=Ho.bind(null,e.eventManager),e}function Aa(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pa.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ga.bind(null,e),e}class xa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qi(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Ti(this.persistence,new wi,t.initialUser,this.serializer)}Su(t){return new fi(gi.fi,this.serializer)}bu(t){return new Li}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xa.provider={build:()=>new xa};class Da extends xa{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){R(this.persistence.referenceDelegate instanceof mi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Zs(n,t.asyncQueue,e)}Su(t){const e=void 0!==this.cacheSizeBytes?Hs.withCacheSize(this.cacheSizeBytes):Hs.DEFAULT;return new fi((t=>mi.fi(t,e)),this.serializer)}}class ka{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>da(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ca.bind(null,this.syncEngine),await Oo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $o}()}createDatastore(t){const e=Qi(t.databaseInfo.databaseId),n=function(t){return new Hi(t)}(t.databaseInfo);return function(t,e,n,r){return new eo(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,s){return new so(t,e,n,r,s)}(this.localStore,this.datastore,t.asyncQueue,(t=>da(this.syncEngine,t,0)),function(){return Fi.C()?new Fi:new Pi}())}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new ra(t,e,n,r,s,i);return o&&(a.mu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=M(t);A(ro,"RemoteStore shutting down."),e.da.add(5),await oo(e),e.Ra.shutdown(),e.Va.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}ka.provider={build:()=>new ka};
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
class Na{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):x("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
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
const Oa="FirestoreClient";class Ra{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=Q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async t=>{A(Oa,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(A(Oa,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new V;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Po(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ma(t,e){t.asyncQueue.verifyOperationInProgress(),A(Oa,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ci(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function La(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pa(t);A(Oa,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>No(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>No(e.remoteStore,n))),t._onlineComponents=e}async function Pa(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A(Oa,"Using user provided OfflineComponentProvider");try{await Ma(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;D("Error using user provided cache. Falling back to memory cache: "+n),await Ma(t,new xa)}}else A(Oa,"Using default OfflineComponentProvider"),await Ma(t,new Da(void 0));return t._offlineComponents}async function Va(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A(Oa,"Using user provided OnlineComponentProvider"),await La(t,t._uninitializedComponentsProvider._online)):(A(Oa,"Using default OnlineComponentProvider"),await La(t,new ka))),t._onlineComponents}function Fa(t){return Va(t).then((t=>t.syncEngine))}async function Ua(t){const e=await Va(t),n=e.eventManager;return n.onListen=sa.bind(null,e.syncEngine),n.onUnlisten=ca.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ia.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=la.bind(null,e.syncEngine),n}function Ba(t,e,n={}){const r=new V;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Na({next:n=>{i.xu(),e.enqueueAndForget((()=>zo(t,o))),n.fromCache&&"server"===r.source?s.reject(new P(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Xo(n,i,{includeMetadataChanges:!0,Qa:!0});return qo(t,o)}(await Ua(t),t.asyncQueue,e,n,r))),r.promise}
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
function $a(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const ja=new Map;
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
 */function qa(t,e,n){if(!n)throw new P(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function za(t,e,n,r){if(!0===e&&!0===r)throw new P(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ka(t){if(!lt.isDocumentKey(t))throw new P(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ha(t){if(lt.isDocumentKey(t))throw new P(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ga(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":N(12329,{type:typeof t})}function Qa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ga(t);throw new P(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const Wa="firestore.googleapis.com",Xa=!0;class Ya{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new P(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wa,this.ssl=Xa}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:Xa;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Ks;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<Ws)throw new P(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}za("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$a(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new P(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new P(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new P(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Za{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ya({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ya(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new U;switch(t.type){case"firstParty":return new q(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ja.get(t);e&&(A("ComponentProvider","Removing Datastore"),ja.delete(t),e.terminate())}(this),Promise.resolve()}}function Ja(t,e,n,r={}){var s;t=Qa(t,Za);const i=(0,c.zJ)(e),o=t._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&((0,c.gE)(`https://${l}`),(0,c.P1)("Firestore",!0)),o.host!==Wa&&o.host!==l&&D("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!(0,c.bD)(u,a)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=T.MOCK_USER;else{e=(0,c.Fy)(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new P(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(i)}t._authCredentials=new B(new F(e,n))}}
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
 */class tc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new tc(this.firestore,t,this._query)}}class ec{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ec(this.firestore,t,this._key)}}class nc extends tc{constructor(t,e,n){super(t,e,An(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ec(this.firestore,null,new lt(t))}withConverter(t){return new nc(this.firestore,t,this._path)}}function rc(t,e,...n){if(t=(0,c.Ku)(t),qa("collection","path",e),t instanceof Za){const r=ot.fromString(e,...n);return Ha(r),new nc(t,null,r)}{if(!(t instanceof ec||t instanceof nc))throw new P(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ot.fromString(e,...n));return Ha(r),new nc(t.firestore,null,r)}}function sc(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=Q.newId()),qa("doc","path",e),t instanceof Za){const r=ot.fromString(e,...n);return Ka(r),new ec(t,null,new lt(r))}{if(!(t instanceof ec||t instanceof nc))throw new P(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ot.fromString(e,...n));return Ka(r),new ec(t.firestore,t instanceof nc?t.converter:null,new lt(r))}}
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
const ic="AsyncQueue";class oc{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Wi(this,"async_queue_retry"),this.rc=()=>{const t=Gi();t&&A(ic,"Visibility state changed to "+t.visibilityState),this.x_.b_()},this.sc=t;const e=Gi();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=Gi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise((()=>{}));const e=new V;return this._c((()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ju.push(t),this.ac())))}async ac(){if(0!==this.Ju.length){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!_t(t))throw t;A(ic,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_((()=>this.ac()))}}_c(t){const e=this.sc.then((()=>(this.ec=!0,t().catch((t=>{throw this.Xu=t,this.ec=!1,x("INTERNAL UNHANDLED ERROR: ",ac(t)),t})).then((t=>(this.ec=!1,t))))));return this.sc=e,e}enqueueAfterDelay(t,e,n){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const r=Lo.createAndSchedule(this,t,e,n,(t=>this.uc(t)));return this.Zu.push(r),r}oc(){this.Xu&&N(47125,{cc:ac(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do{t=this.sc,await t}while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then((()=>{this.Zu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Zu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.lc()}))}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function ac(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
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
 */}class cc extends Za{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new oc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new oc(t),this._firestoreClient=void 0,await t}}}function lc(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||Te,s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,c.yU)("firestore");t&&Ja(s,...t)}return s}function uc(t){if(t._terminated)throw new P(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hc(t),t._firestoreClient}function hc(t){var e,n,r;const s=t._freezeSettings(),i=function(t,e,n,r){return new Ee(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,$a(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Ra(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
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
class dc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new dc(ue.fromBase64String(t))}catch(t){throw new P(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new dc(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class fc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class pc{constructor(t){this._methodName=t}}
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
 */class gc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}}
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
 */class mc{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
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
 */const yc=/^__.*__$/;class vc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new xr(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ar(t,this.data,e,this.fieldTransforms)}}function wc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N(40011,{Ic:t})}}class bc{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new bc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.dc({path:n,Rc:!1});return r.Vc(t),r}mc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.dc({path:n,Rc:!1});return r.Ec(),r}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return Oc(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(0===t.length)throw this.gc("Document fields must not be empty");if(wc(this.Ic)&&yc.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class _c{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Qi(t)}bc(t,e,n,r=!1){return new bc({Ic:t,methodName:e,wc:n,path:ct.emptyPath(),Rc:!1,yc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ec(t){const e=t._freezeSettings(),n=Qi(t._databaseId);return new _c(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tc(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);xc("Data must be an object, but it was:",o,r);const a=Ic(r,o);let c,l;if(i.merge)c=new ce(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Dc(e,r,n);if(!o.contains(s))throw new P(L.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Rc(t,s)||t.push(s)}c=new ce(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new vc(new Qe(a),c,l)}function Cc(t,e,n,r=!1){return Sc(n,t.bc(r?4:3,e))}function Sc(t,e){if(Ac(t=(0,c.Ku)(t)))return xc("Unsupported field value:",e,t),Ic(t,e);if(t instanceof pc)return function(t,e){if(!wc(e.Ic))throw e.gc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.gc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&4!==e.Ic)throw e.gc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Sc(s,e.fc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return sr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=nt.fromDate(t);return{timestampValue:cs(e.serializer,n)}}if(t instanceof nt){const n=new nt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:cs(e.serializer,n)}}if(t instanceof gc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof dc)return{bytesValue:ls(e.serializer,t._byteString)};if(t instanceof ec){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.gc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ds(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof mc)return function(t,e){const n={fields:{[Se]:{stringValue:xe},[De]:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.gc("VectorValues must only contain numeric values.");return nr(e.serializer,t)}))}}}};return{mapValue:n}}(t,e);throw e.gc(`Unsupported field value: ${Ga(t)}`)}(t,e)}function Ic(t,e){const n={};return ne(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ee(t,((t,r)=>{const s=Sc(r,e.Ac(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Ac(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof gc||t instanceof dc||t instanceof ec||t instanceof pc||t instanceof mc)}function xc(t,e,n){if(!Ac(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ga(n);throw"an object"===r?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function Dc(t,e,n){if((e=(0,c.Ku)(e))instanceof fc)return e._internalPath;if("string"==typeof e)return Nc(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const kc=new RegExp("[~\\*/\\[\\]]");function Nc(t,e,n){if(e.search(kc)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fc(...e.split("."))._internalPath}catch(r){throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new P(L.INVALID_ARGUMENT,a+t+c)}function Rc(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Mc{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ec(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Lc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Lc extends Mc{data(){return super.data()}}function Pc(t,e){return"string"==typeof e?Nc(t,e):e instanceof fc?e._internalPath:e._delegate._internalPath}
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
 */function Vc(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new P(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fc{}class Uc extends Fc{}function Bc(t,e,...n){let r=[];e instanceof Fc&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof qc)).length,n=t.filter((t=>t instanceof $c)).length;if(e>1||e>0&&n>0)throw new P(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const s of r)t=s._apply(t);return t}class $c extends Uc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new $c(t,e,n)}_apply(t){const e=this._parse(t);return Hc(t._query,e),new tc(t.firestore,t.converter,Rn(t._query,e))}_parse(t){const e=Ec(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new P(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Kc(o,i);const e=[];for(const n of o)e.push(zc(r,t,n));a={arrayValue:{values:e}}}else a=zc(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Kc(o,i),a=Cc(n,e,o,"in"===i||"not-in"===i);const c=rn.create(s,i,a);return c}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function jc(t,e,n){const r=e,s=Pc("where",t);return $c._create(s,r,n)}class qc extends Fc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qc(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:sn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)Hc(n,s),n=Rn(n,s)}(t._query,e),new tc(t.firestore,t.converter,Rn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function zc(t,e,n){if("string"==typeof(n=(0,c.Ku)(n))){if(""===n)throw new P(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dn(e)&&-1!==n.indexOf("/"))throw new P(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ot.fromString(n));if(!lt.isDocumentKey(r))throw new P(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ue(t,new lt(r))}if(n instanceof ec)return Ue(t,n._key);throw new P(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(n)}.`)}function Kc(t,e){if(!Array.isArray(t)||0===t.length)throw new P(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hc(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new P(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Gc{convertValue(t,e="none"){switch(ke(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw N(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ee(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const s=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e[De].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>fe(t.doubleValue)));return new mc(s)}convertGeoPoint(t){return new gc(fe(t.latitude),fe(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=be(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_e(t));default:return null}}convertTimestamp(t){const e=de(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ot.fromString(t);R(Vs(n),9688,{name:t});const r=new Ce(n.get(1),n.get(3)),s=new lt(n.popFirst(5));return r.isEqual(e)||x(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function Qc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class Wc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xc extends Mc{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Pc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Yc extends Xc{data(t={}){return super.data(t)}}class Zc{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Wc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Yc(this._firestore,this._userDataWriter,n.key,n,new Wc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new P(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Yc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Wc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Yc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Wc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Jc(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Jc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return N(61501,{type:t})}}class tl extends Gc{constructor(t){super(),this.firestore=t}convertBytes(t){return new dc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}function el(t){t=Qa(t,tc);const e=Qa(t.firestore,cc),n=uc(e),r=new tl(e);return Vc(t._query),Ba(n,t._query).then((n=>new Zc(e,r,t,n)))}function nl(t,e){const n=Qa(t.firestore,cc),r=sc(t),s=Qc(t.converter,e);return rl(n,[Tc(Ec(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,wr.exists(!1))]).then((()=>r))}function rl(t,e){return function(t,e){const n=new V;return t.asyncQueue.enqueueAndForget((async()=>ua(await Fa(t),e,n))),n.promise}(uc(t),e)}new WeakMap;
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
 */!function(t,e=!0){!function(t){C=t}(i.MF),(0,i.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new cc(new $(t.getProvider("auth-internal")),new K(s,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ce(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(_,E,t),(0,i.KO)(_,E,"esm2017")}()},928:(t,e,n)=>{n.d(e,{MF:()=>wt,j6:()=>pt,xZ:()=>gt,om:()=>ft,Sx:()=>_t,Wp:()=>bt,KO:()=>Et});var r=n(125),s=n(424),i=n(72);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(E(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,l())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return A.set(e,i),i}w((t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
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
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",O="0.13.1",R=new s.Vy("@firebase/app"),M="@firebase/app-compat",L="@firebase/analytics-compat",P="@firebase/analytics",V="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",$="@firebase/database",j="@firebase/data-connect",q="@firebase/database-compat",z="@firebase/functions",K="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",Q="@firebase/messaging",W="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",Z="@firebase/remote-config",J="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/ai",st="@firebase/firestore-compat",it="firebase",ot="11.9.0",at="[DEFAULT]",ct={[N]:"fire-core",[M]:"fire-core-compat",[P]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[V]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[$]:"fire-rtdb",[j]:"fire-data-connect",[q]:"fire-rtdb-compat",[z]:"fire-fn",[K]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[Q]:"fire-fcm",[W]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[Z]:"fire-rc",[J]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[st]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[it]:"fire-js-all"},lt=new Map,ut=new Map,ht=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(ht.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of lt.values())dt(n,t);for(const n of ut.values())dt(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
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
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new i.FA("app","Firebase",mt);
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
class vt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}
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
const wt=ot;function bt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:at,automaticDataCollectionEnabled:!0},e),o=s.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.T9)()),!n)throw yt.create("no-options");const a=lt.get(o);if(a){if((0,i.bD)(n,a.options)&&(0,i.bD)(s,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const l=new vt(n,s,c);return lt.set(o,l),l}function _t(t=at){const e=lt.get(t);if(!e&&t===at&&(0,i.T9)())return bt();if(!e)throw yt.create("no-app",{appName:t});return e}function Et(t,e,n){var s;let i=null!==(s=ct[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}ft(new r.uA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
const Tt="firebase-heartbeat-database",Ct=1,St="firebase-heartbeat-store";let It=null;function At(){return It||(It=C(Tt,Ct,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch((t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})}))),It}async function xt(t){try{const e=await At(),n=e.transaction(St),r=await n.objectStore(St).get(kt(t));return await n.done,r}catch(e){if(e instanceof i.g)R.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});R.warn(t.message)}}}async function Dt(t,e){try{const n=await At(),r=n.transaction(St,"readwrite"),s=r.objectStore(St);await s.put(e,kt(t)),await r.done}catch(n){if(n instanceof i.g)R.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
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
 */const Nt=1024,Ot=30;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),s=Mt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some((t=>t.date===s)))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Ot){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){R.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Mt(),{heartbeatsToSend:n,unsentEntries:r}=Lt(this._heartbeatsCache.heartbeats),s=(0,i.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return R.warn(e),""}}}function Mt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=Nt){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Vt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await xt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Vt(t){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
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
 */function Ut(t){ft(new r.uA("platform-logger",(t=>new D(t)),"PRIVATE")),ft(new r.uA("heartbeat",(t=>new Rt(t)),"PRIVATE")),Et(N,O,t),Et(N,O,"esm2017"),Et("fire-js","")}Ut("")},953:(t,e,n)=>{n.d(e,{C4:()=>C,EW:()=>Rt,Gc:()=>yt,IG:()=>St,Kh:()=>mt,Pr:()=>Nt,R1:()=>Dt,Tm:()=>_t,X2:()=>l,a1:()=>At,bl:()=>S,fE:()=>Et,g8:()=>bt,hZ:()=>P,i9:()=>xt,ju:()=>Tt,lJ:()=>It,qA:()=>F,u4:()=>L,ux:()=>Ct,wB:()=>Ft,yC:()=>o});var r=n(33);
/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let s,i;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=s,!t&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){1===++this._on&&(this.prevScope=s,s=this)}off(){this._on>0&&0===--this._on&&(s=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return s}const c=new WeakSet;class l{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,s&&s.active&&s.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,I(this),m(this);const t=i,e=E;i=this,E=!0;try{return this.fn()}finally{0,y(this),i=t,E=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)b(t);this.deps=this.depsTail=void 0,I(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let u,h,d=0;function f(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=u,u=t}function p(){d++}function g(){if(--d>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),b(r),_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function v(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===A)return;if(t.globalVersion=A,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!v(t)))return;t.flags|=2;const e=t.dep,n=i,s=E;i=t,E=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{i=n,E=s,y(t),t.flags&=-3}}function b(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)b(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function _(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let E=!0;const T=[];function C(){T.push(E),E=!1}function S(){const t=T.pop();E=void 0===t||t}function I(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=i;i=void 0;try{e()}finally{i=t}}}let A=0;class x{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class D{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!i||!E||i===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==i)e=this.activeLink=new x(i,this),i.deps?(e.prevDep=i.depsTail,i.depsTail.nextDep=e,i.depsTail=e):i.deps=i.depsTail=e,k(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=i.depsTail,e.nextDep=void 0,i.depsTail.nextDep=e,i.depsTail=e,i.deps===e&&(i.deps=t)}return e}trigger(t){this.version++,A++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function k(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)k(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const N=new WeakMap,O=Symbol(""),R=Symbol(""),M=Symbol("");function L(t,e,n){if(E&&i){let e=N.get(t);e||N.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new D),r.map=e,r.key=n),r.track()}}function P(t,e,n,s,i,o){const a=N.get(t);if(!a)return void A++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const i=(0,r.cy)(t),o=i&&(0,r.yI)(n);if(i&&"length"===n){const t=Number(s);a.forEach(((e,n)=>{("length"===n||n===M||!(0,r.Bm)(n)&&n>=t)&&c(e)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(M)),e){case"add":i?o&&c(a.get("length")):(c(a.get(O)),(0,r.CE)(t)&&c(a.get(R)));break;case"delete":i||(c(a.get(O)),(0,r.CE)(t)&&c(a.get(R)));break;case"set":(0,r.CE)(t)&&c(a.get(O));break}}g()}function V(t){const e=Ct(t);return e===t?e:(L(e,"iterate",M),Et(t)?e:e.map(It))}function F(t){return L(t=Ct(t),"iterate",M),t}const U={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,It)},concat(...t){return V(this).concat(...t.map((t=>(0,r.cy)(t)?V(t):t)))},entries(){return B(this,"entries",(t=>(t[1]=It(t[1]),t)))},every(t,e){return j(this,"every",t,e,void 0,arguments)},filter(t,e){return j(this,"filter",t,e,(t=>t.map(It)),arguments)},find(t,e){return j(this,"find",t,e,It,arguments)},findIndex(t,e){return j(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return j(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return j(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return j(this,"forEach",t,e,void 0,arguments)},includes(...t){return z(this,"includes",t)},indexOf(...t){return z(this,"indexOf",t)},join(t){return V(this).join(t)},lastIndexOf(...t){return z(this,"lastIndexOf",t)},map(t,e){return j(this,"map",t,e,void 0,arguments)},pop(){return K(this,"pop")},push(...t){return K(this,"push",t)},reduce(t,...e){return q(this,"reduce",t,e)},reduceRight(t,...e){return q(this,"reduceRight",t,e)},shift(){return K(this,"shift")},some(t,e){return j(this,"some",t,e,void 0,arguments)},splice(...t){return K(this,"splice",t)},toReversed(){return V(this).toReversed()},toSorted(t){return V(this).toSorted(t)},toSpliced(...t){return V(this).toSpliced(...t)},unshift(...t){return K(this,"unshift",t)},values(){return B(this,"values",It)}};function B(t,e,n){const r=F(t),s=r[e]();return r===t||Et(t)||(s._next=s.next,s.next=()=>{const t=s._next();return t.value&&(t.value=n(t.value)),t}),s}const $=Array.prototype;function j(t,e,n,r,s,i){const o=F(t),a=o!==t&&!Et(t),c=o[e];if(c!==$[e]){const e=c.apply(t,i);return a?It(e):e}let l=n;o!==t&&(a?l=function(e,r){return n.call(this,It(e),r,t)}:n.length>2&&(l=function(e,r){return n.call(this,e,r,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function q(t,e,n,r){const s=F(t);let i=n;return s!==t&&(Et(t)?n.length>3&&(i=function(e,r,s){return n.call(this,e,r,s,t)}):i=function(e,r,s){return n.call(this,e,It(r),s,t)}),s[e](i,...r)}function z(t,e,n){const r=Ct(t);L(r,"iterate",M);const s=r[e](...n);return-1!==s&&!1!==s||!Tt(n[0])?s:(n[0]=Ct(n[0]),r[e](...n))}function K(t,e,n=[]){C(),p();const r=Ct(t)[e].apply(t,n);return g(),S(),r}const H=(0,r.pD)("__proto__,__v_isRef,__isVue"),G=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm));function Q(t){(0,r.Bm)(t)||(t=String(t));const e=Ct(this);return L(e,"has",t),e.hasOwnProperty(t)}class W{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const s=this._isReadonly,i=this._isShallow;if("__v_isReactive"===e)return!s;if("__v_isReadonly"===e)return s;if("__v_isShallow"===e)return i;if("__v_raw"===e)return n===(s?i?ft:dt:i?ht:ut).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!s){let t;if(o&&(t=U[e]))return t;if("hasOwnProperty"===e)return Q}const a=Reflect.get(t,e,xt(t)?t:n);return((0,r.Bm)(e)?G.has(e):H(e))?a:(s||L(t,"get",e),i?a:xt(a)?o&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?s?vt(a):mt(a):a)}}class X extends W{constructor(t=!1){super(!1,t)}set(t,e,n,s){let i=t[e];if(!this._isShallow){const e=_t(i);if(Et(n)||_t(n)||(i=Ct(i),n=Ct(n)),!(0,r.cy)(t)&&xt(i)&&!xt(n))return!e&&(i.value=n,!0)}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,xt(t)?t:s);return t===Ct(s)&&(o?(0,r.$H)(n,i)&&P(t,"set",e,n,i):P(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&P(t,"delete",e,void 0,s),i}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&G.has(e)||L(t,"has",e),n}ownKeys(t){return L(t,"iterate",(0,r.cy)(t)?"length":O),Reflect.ownKeys(t)}}class Y extends W{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Z=new X,J=new Y,tt=new X(!0),et=t=>t,nt=t=>Reflect.getPrototypeOf(t);function rt(t,e,n){return function(...s){const i=this["__v_raw"],o=Ct(i),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=i[t](...s),h=n?et:e?At:It;return!e&&L(o,"iterate",l?R:O),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function it(t,e){const n={get(n){const s=this["__v_raw"],i=Ct(s),o=Ct(n);t||((0,r.$H)(n,o)&&L(i,"get",n),L(i,"get",o));const{has:a}=nt(i),c=e?et:t?At:It;return a.call(i,n)?c(s.get(n)):a.call(i,o)?c(s.get(o)):void(s!==i&&s.get(n))},get size(){const e=this["__v_raw"];return!t&&L(Ct(e),"iterate",O),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],s=Ct(n),i=Ct(e);return t||((0,r.$H)(e,i)&&L(s,"has",e),L(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)},forEach(n,r){const s=this,i=s["__v_raw"],o=Ct(i),a=e?et:t?At:It;return!t&&L(o,"iterate",O),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}};(0,r.X$)(n,t?{add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear")}:{add(t){e||Et(t)||_t(t)||(t=Ct(t));const n=Ct(this),r=nt(n),s=r.has.call(n,t);return s||(n.add(t),P(n,"add",t,t)),this},set(t,n){e||Et(n)||_t(n)||(n=Ct(n));const s=Ct(this),{has:i,get:o}=nt(s);let a=i.call(s,t);a||(t=Ct(t),a=i.call(s,t));const c=o.call(s,t);return s.set(t,n),a?(0,r.$H)(n,c)&&P(s,"set",t,n,c):P(s,"add",t,n),this},delete(t){const e=Ct(this),{has:n,get:r}=nt(e);let s=n.call(e,t);s||(t=Ct(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&P(e,"delete",t,void 0,i),o},clear(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&P(t,"clear",void 0,void 0,n),r}});const s=["keys","values","entries",Symbol.iterator];return s.forEach((r=>{n[r]=rt(r,t,e)})),n}function ot(t,e){const n=it(t,e);return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.$3)(n,s)&&s in e?n:e,s,i)}const at={get:ot(!1,!1)},ct={get:ot(!1,!0)},lt={get:ot(!0,!1)};const ut=new WeakMap,ht=new WeakMap,dt=new WeakMap,ft=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt((0,r.Zf)(t))}function mt(t){return _t(t)?t:wt(t,!1,Z,at,ut)}function yt(t){return wt(t,!1,tt,ct,ht)}function vt(t){return wt(t,!0,J,lt,dt)}function wt(t,e,n,s,i){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=gt(t);if(0===o)return t;const a=i.get(t);if(a)return a;const c=new Proxy(t,2===o?s:n);return i.set(t,c),c}function bt(t){return _t(t)?bt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function _t(t){return!(!t||!t["__v_isReadonly"])}function Et(t){return!(!t||!t["__v_isShallow"])}function Tt(t){return!!t&&!!t["__v_raw"]}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function St(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const It=t=>(0,r.Gv)(t)?mt(t):t,At=t=>(0,r.Gv)(t)?vt(t):t;function xt(t){return!!t&&!0===t["__v_isRef"]}function Dt(t){return xt(t)?t.value:t}const kt={get:(t,e,n)=>"__v_raw"===e?t:Dt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Nt(t){return bt(t)?t:new Proxy(t,kt)}class Ot{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new D(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||i===this))return f(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Rt(t,e,n=!1){let s,i;(0,r.Tn)(t)?s=t:(s=t.get,i=t.set);const o=new Ot(s,i,n);return o}const Mt={},Lt=new WeakMap;let Pt;function Vt(t,e=!1,n=Pt){if(n){let e=Lt.get(n);e||Lt.set(n,e=[]),e.push(t)}else 0}function Ft(t,e,n=r.MZ){const{immediate:s,deep:i,once:o,scheduler:c,augmentJob:u,call:h}=n,d=t=>i?t:Et(t)||!1===i||0===i?Ut(t,1):Ut(t);let f,p,g,m,y=!1,v=!1;if(xt(t)?(p=()=>t.value,y=Et(t)):bt(t)?(p=()=>d(t),y=!0):(0,r.cy)(t)?(v=!0,y=t.some((t=>bt(t)||Et(t))),p=()=>t.map((t=>xt(t)?t.value:bt(t)?d(t):(0,r.Tn)(t)?h?h(t,2):t():void 0))):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){C();try{g()}finally{S()}}const e=Pt;Pt=f;try{return h?h(t,3,[m]):t(m)}finally{Pt=e}}:r.tE,e&&i){const t=p,e=!0===i?1/0:i;p=()=>Ut(t(),e)}const w=a(),b=()=>{f.stop(),w&&w.active&&(0,r.TF)(w.effects,f)};if(o&&e){const t=e;e=(...e)=>{t(...e),b()}}let _=v?new Array(t.length).fill(Mt):Mt;const E=t=>{if(1&f.flags&&(f.dirty||t))if(e){const t=f.run();if(i||y||(v?t.some(((t,e)=>(0,r.$H)(t,_[e]))):(0,r.$H)(t,_))){g&&g();const n=Pt;Pt=f;try{const n=[t,_===Mt?void 0:v&&_[0]===Mt?[]:_,m];_=t,h?h(e,3,n):e(...n)}finally{Pt=n}}}else f.run()};return u&&u(E),f=new l(p),f.scheduler=c?()=>c(E,!1):E,m=t=>Vt(t,!1,f),g=f.onStop=()=>{const t=Lt.get(f);if(t){if(h)h(t,4);else for(const e of t)e();Lt.delete(f)}},e?s?E(!0):_=f.run():c?c(E.bind(null,!0),!0):f.run(),b.pause=f.pause.bind(f),b.resume=f.resume.bind(f),b.stop=b,b}function Ut(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,xt(t))Ut(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)Ut(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{Ut(t,e,n)}));else if((0,r.Qd)(t)){for(const r in t)Ut(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ut(t[r],e,n)}return t}}}]);
//# sourceMappingURL=chunk-vendors.2b312731.js.map