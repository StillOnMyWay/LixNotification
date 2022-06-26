var lixnotification=function(ht){"use strict";/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ui extends HTMLElement{static get version(){return"22.0.16"}}customElements.define("vaadin-lumo-styles",ui);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),Yt=new Map;class mt{constructor(t,o){if(this._$cssResult$=!0,o!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Yt.get(this.cssText);return pt&&t===void 0&&(Yt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const hi=r=>new mt(typeof r=="string"?r:r+"",ft),A=(r,...t)=>{const o=r.length===1?r[0]:t.reduce((i,e,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+r[s+1],r[0]);return new mt(o,ft)},pi=(r,t)=>{pt?r.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):t.forEach(o=>{const i=document.createElement("style"),e=window.litNonce;e!==void 0&&i.setAttribute("nonce",e),i.textContent=o.cssText,r.appendChild(i)})},Jt=pt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let o="";for(const i of t.cssRules)o+=i.cssText;return hi(o)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;const Gt=window.trustedTypes,fi=Gt?Gt.emptyScript:"",Xt=window.reactiveElementPolyfillSupport,yt={toAttribute(r,t){switch(t){case Boolean:r=r?fi:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let o=r;switch(t){case Boolean:o=r!==null;break;case Number:o=r===null?null:Number(r);break;case Object:case Array:try{o=JSON.parse(r)}catch{o=null}}return o}},Kt=(r,t)=>t!==r&&(t==t||r==r),gt={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:Kt};class O extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var o;(o=this.l)!==null&&o!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((o,i)=>{const e=this._$Eh(i,o);e!==void 0&&(this._$Eu.set(e,i),t.push(e))}),t}static createProperty(t,o=gt){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(t,o),!o.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,e=this.getPropertyDescriptor(t,i,o);e!==void 0&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,o,i){return{get(){return this[o]},set(e){const s=this[t];this[o]=e,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||gt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const o=this.properties,i=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const e of i)this.createProperty(e,o[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const e of i)o.unshift(Jt(e))}else t!==void 0&&o.push(Jt(t));return o}static _$Eh(t,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(o=>o(this))}addController(t){var o,i;((o=this._$Eg)!==null&&o!==void 0?o:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var o;(o=this._$Eg)===null||o===void 0||o.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,o)=>{this.hasOwnProperty(o)&&(this._$Et.set(o,this[o]),delete this[o])})}createRenderRoot(){var t;const o=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return pi(o,this.constructor.elementStyles),o}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostConnected)===null||i===void 0?void 0:i.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostDisconnected)===null||i===void 0?void 0:i.call(o)})}attributeChangedCallback(t,o,i){this._$AK(t,i)}_$ES(t,o,i=gt){var e,s;const n=this.constructor._$Eh(t,i);if(n!==void 0&&i.reflect===!0){const a=((s=(e=i.converter)===null||e===void 0?void 0:e.toAttribute)!==null&&s!==void 0?s:yt.toAttribute)(o,i.type);this._$Ei=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Ei=null}}_$AK(t,o){var i,e,s;const n=this.constructor,a=n._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const l=n.getPropertyOptions(a),c=l.converter,d=(s=(e=(i=c)===null||i===void 0?void 0:i.fromAttribute)!==null&&e!==void 0?e:typeof c=="function"?c:null)!==null&&s!==void 0?s:yt.fromAttribute;this._$Ei=a,this[a]=d(o,l.type),this._$Ei=null}}requestUpdate(t,o,i){let e=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Kt)(this[t],o)?(this._$AL.has(t)||this._$AL.set(t,o),i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((e,s)=>this[s]=e),this._$Et=void 0);let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostUpdate)===null||s===void 0?void 0:s.call(e)}),this.update(i)):this._$EU()}catch(e){throw o=!1,this._$EU(),e}o&&this._$AE(i)}willUpdate(t){}_$AE(t){var o;(o=this._$Eg)===null||o===void 0||o.forEach(i=>{var e;return(e=i.hostUpdated)===null||e===void 0?void 0:e.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((o,i)=>this._$ES(i,this[i],o)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}O.finalized=!0,O.elementProperties=new Map,O.elementStyles=[],O.shadowRootOptions={mode:"open"},Xt==null||Xt({ReactiveElement:O}),((_t=globalThis.reactiveElementVersions)!==null&&_t!==void 0?_t:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt;const N=globalThis.trustedTypes,Zt=N?N.createPolicy("lit-html",{createHTML:r=>r}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,Qt="?"+E,mi=`<${Qt}>`,M=document,H=(r="")=>M.createComment(r),U=r=>r===null||typeof r!="object"&&typeof r!="function",te=Array.isArray,_i=r=>{var t;return te(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,ie=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,re=/'/g,oe=/"/g,se=/^(?:script|style|textarea|title)$/i,yi=r=>(t,...o)=>({_$litType$:r,strings:t,values:o}),bt=yi(1),k=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ne=new WeakMap,ae=(r,t,o)=>{var i,e;const s=(i=o==null?void 0:o.renderBefore)!==null&&i!==void 0?i:t;let n=s._$litPart$;if(n===void 0){const a=(e=o==null?void 0:o.renderBefore)!==null&&e!==void 0?e:null;s._$litPart$=n=new V(t.insertBefore(H(),a),a,void 0,o!=null?o:{})}return n._$AI(r),n},L=M.createTreeWalker(M,129,null,!1),gi=(r,t)=>{const o=r.length-1,i=[];let e,s=t===2?"<svg>":"",n=B;for(let l=0;l<o;l++){const c=r[l];let d,u,h=-1,p=0;for(;p<c.length&&(n.lastIndex=p,u=n.exec(c),u!==null);)p=n.lastIndex,n===B?u[1]==="!--"?n=ee:u[1]!==void 0?n=ie:u[2]!==void 0?(se.test(u[2])&&(e=RegExp("</"+u[2],"g")),n=x):u[3]!==void 0&&(n=x):n===x?u[0]===">"?(n=e!=null?e:B,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?x:u[3]==='"'?oe:re):n===oe||n===re?n=x:n===ee||n===ie?n=B:(n=x,e=void 0);const m=n===x&&r[l+1].startsWith("/>")?" ":"";s+=n===B?c+mi:h>=0?(i.push(d),c.slice(0,h)+"$lit$"+c.slice(h)+E+m):c+E+(h===-2?(i.push(void 0),l):m)}const a=s+(r[o]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Zt!==void 0?Zt.createHTML(a):a,i]};class F{constructor({strings:t,_$litType$:o},i){let e;this.parts=[];let s=0,n=0;const a=t.length-1,l=this.parts,[c,d]=gi(t,o);if(this.el=F.createElement(c,i),L.currentNode=this.el.content,o===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(e=L.nextNode())!==null&&l.length<a;){if(e.nodeType===1){if(e.hasAttributes()){const u=[];for(const h of e.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(E)){const p=d[n++];if(u.push(h),p!==void 0){const m=e.getAttribute(p.toLowerCase()+"$lit$").split(E),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:y[2],strings:m,ctor:y[1]==="."?bi:y[1]==="?"?Pi:y[1]==="@"?Ci:Q})}else l.push({type:6,index:s})}for(const h of u)e.removeAttribute(h)}if(se.test(e.tagName)){const u=e.textContent.split(E),h=u.length-1;if(h>0){e.textContent=N?N.emptyScript:"";for(let p=0;p<h;p++)e.append(u[p],H()),L.nextNode(),l.push({type:2,index:++s});e.append(u[h],H())}}}else if(e.nodeType===8)if(e.data===Qt)l.push({type:2,index:s});else{let u=-1;for(;(u=e.data.indexOf(E,u+1))!==-1;)l.push({type:7,index:s}),u+=E.length-1}s++}}static createElement(t,o){const i=M.createElement("template");return i.innerHTML=t,i}}function R(r,t,o=r,i){var e,s,n,a;if(t===k)return t;let l=i!==void 0?(e=o._$Cl)===null||e===void 0?void 0:e[i]:o._$Cu;const c=U(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,o,i)),i!==void 0?((n=(a=o)._$Cl)!==null&&n!==void 0?n:a._$Cl=[])[i]=l:o._$Cu=l),l!==void 0&&(t=R(r,l._$AS(r,t.values),l,i)),t}class vi{constructor(t,o){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var o;const{el:{content:i},parts:e}=this._$AD,s=((o=t==null?void 0:t.creationScope)!==null&&o!==void 0?o:M).importNode(i,!0);L.currentNode=s;let n=L.nextNode(),a=0,l=0,c=e[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new V(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new Ai(n,this,t)),this.v.push(d),c=e[++l]}a!==(c==null?void 0:c.index)&&(n=L.nextNode(),a++)}return s}m(t){let o=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,o),o+=i.strings.length-2):i._$AI(t[o])),o++}}class V{constructor(t,o,i,e){var s;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=i,this.options=e,this._$Cg=(s=e==null?void 0:e.isConnected)===null||s===void 0||s}get _$AU(){var t,o;return(o=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&o!==void 0?o:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=R(this,t,o),U(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==k&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):_i(t)?this.S(t):this.$(t)}M(t,o=this._$AB){return this._$AA.parentNode.insertBefore(t,o)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==_&&U(this._$AH)?this._$AA.nextSibling.data=t:this.k(M.createTextNode(t)),this._$AH=t}T(t){var o;const{values:i,_$litType$:e}=t,s=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=F.createElement(e.h,this.options)),e);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===s)this._$AH.m(i);else{const n=new vi(s,this),a=n.p(this.options);n.m(i),this.k(a),this._$AH=n}}_$AC(t){let o=ne.get(t.strings);return o===void 0&&ne.set(t.strings,o=new F(t)),o}S(t){te(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,e=0;for(const s of t)e===o.length?o.push(i=new V(this.M(H()),this.M(H()),this,this.options)):i=o[e],i._$AI(s),e++;e<o.length&&(this._$AR(i&&i._$AB.nextSibling,e),o.length=e)}_$AR(t=this._$AA.nextSibling,o){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,o);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var o;this._$AM===void 0&&(this._$Cg=t,(o=this._$AP)===null||o===void 0||o.call(this,t))}}class Q{constructor(t,o,i,e,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=o,this._$AM=e,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,o=this,i,e){const s=this.strings;let n=!1;if(s===void 0)t=R(this,t,o,0),n=!U(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=R(this,a[i+l],o,l),c===k&&(c=this._$AH[l]),n||(n=!U(c)||c!==this._$AH[l]),c===_?t=_:t!==_&&(t+=(c!=null?c:"")+s[l+1]),this._$AH[l]=c}n&&!e&&this.C(t)}C(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class bi extends Q{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===_?void 0:t}}const wi=N?N.emptyScript:"";class Pi extends Q{constructor(){super(...arguments),this.type=4}C(t){t&&t!==_?this.element.setAttribute(this.name,wi):this.element.removeAttribute(this.name)}}class Ci extends Q{constructor(t,o,i,e,s){super(t,o,i,e,s),this.type=5}_$AI(t,o=this){var i;if((t=(i=R(this,t,o,0))!==null&&i!==void 0?i:_)===k)return;const e=this._$AH,s=t===_&&e!==_||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==_&&(e===_||s);s&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o,i;typeof this._$AH=="function"?this._$AH.call((i=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ai{constructor(t,o,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const le=window.litHtmlPolyfillSupport;le==null||le(F,V),((vt=globalThis.litHtmlVersions)!==null&&vt!==void 0?vt:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wt,Pt;class j extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,o;const i=super.createRenderRoot();return(t=(o=this.renderOptions).renderBefore)!==null&&t!==void 0||(o.renderBefore=i.firstChild),i}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ae(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return k}}j.finalized=!0,j._$litElement$=!0,(wt=globalThis.litElementHydrateSupport)===null||wt===void 0||wt.call(globalThis,{LitElement:j});const ce=globalThis.litElementPolyfillSupport;ce==null||ce({LitElement:j}),((Pt=globalThis.litElementVersions)!==null&&Pt!==void 0?Pt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const de=r=>class extends r{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(o,i,e){super.attributeChangedCallback(o,i,e),o==="theme"&&this._setTheme(e)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ue=[];function tt(r,t,o={}){if(r){const i=customElements.get(r);i&&Object.prototype.hasOwnProperty.call(i,"__finalized")&&console.warn(`The custom element definition for "${r}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`)}t=he(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,t,o):ue.push({themeFor:r,styles:t,include:o.include,moduleId:o.moduleId})}function Ct(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():ue}function Ei(r,t){return(r||"").split(" ").some(o=>new RegExp("^"+o.split("*").join(".*")+"$").test(t))}function Si(r=""){let t=0;return r.indexOf("lumo-")===0||r.indexOf("material-")===0?t=1:r.indexOf("vaadin-")===0&&(t=2),t}function he(r=[],t=[]){return r instanceof mt?t.push(r):Array.isArray(r)?r.forEach(o=>he(o,t)):console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),t}function pe(r){const t=[];return r.include&&[].concat(r.include).forEach(o=>{const i=Ct().find(e=>e.moduleId===o);i?t.push(...pe(i),...i.styles):console.warn(`Included moduleId ${o} not found in style registry`)},r.styles),t}function xi(r,t){const o=document.createElement("style");o.innerHTML=r.filter((i,e)=>e===r.lastIndexOf(i)).map(i=>i.cssText).join(`
`),t.content.appendChild(o)}function fe(r){const t=r+"-default-theme",o=Ct().filter(i=>i.moduleId!==t&&Ei(i.themeFor,r)).map(i=>({...i,styles:[...pe(i),...i.styles],includePriority:Si(i.moduleId)})).sort((i,e)=>e.includePriority-i.includePriority);return o.length>0?o:Ct().filter(i=>i.moduleId===t)}const me=r=>class extends de(r){static finalize(){super.finalize();const o=this.prototype._template;if(!o||o.__themes)return;const i=Object.getPrototypeOf(this.prototype)._template,e=(i?i.__themes:[])||[];o.__themes=[...e,...fe(this.is)];const s=o.__themes.reduce((n,a)=>[...n,...a.styles],[]);xi(s,o)}static finalizeStyles(o){return fe(this.is).reduce((i,e)=>[...i,...e.styles],[]).concat(o)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ti=A`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,_e=document.createElement("template");_e.innerHTML=`<style>${Ti.toString().replace(":host","html")}</style>`,document.head.appendChild(_e.content);const ye=A`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a {
    color: var(--lumo-primary-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;tt("",ye,{moduleId:"lumo-color"});const $i=A`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;tt("",[ye,$i],{moduleId:"lumo-color-legacy"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oi=A`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,ge=document.createElement("template");ge.innerHTML=`<style>${Oi.toString().replace(":host","html")}</style>`,document.head.appendChild(ge.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ni=A`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,ve=document.createElement("template");ve.innerHTML=`<style>${Ni.toString().replace(":host","html")}</style>`,document.head.appendChild(ve.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mi=A`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,ki=A`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;tt("",ki,{moduleId:"lumo-typography"});const be=document.createElement("template");be.innerHTML=`<style>${Mi.toString().replace(":host","html")}</style>`,document.head.appendChild(be.content),tt("vaadin-notification-card",A`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(r,t){return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Li=/(url\()([^)]*)(\))/g,Ri=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,et,v;function q(r,t){if(r&&Ri.test(r)||r==="//")return r;if(et===void 0){et=!1;try{const o=new URL("b","http://a");o.pathname="c%20d",et=o.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),et)try{return new URL(r,t).href}catch{return r}return v||(v=document.implementation.createHTMLDocument("temp"),v.base=v.createElement("base"),v.head.appendChild(v.base),v.anchor=v.createElement("a"),v.body.appendChild(v.anchor)),v.base.href=t,v.anchor.href=r,v.anchor.href||r}function At(r,t){return r.replace(Li,function(o,i,e,s){return i+"'"+q(e.replace(/["']/g,""),t)+"'"+s})}function Et(r){return r.substring(0,r.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zi=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Di=zi&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[r],t.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let Ii=window.Polymer&&window.Polymer.rootPath||Et(document.baseURI||window.location.href),it=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let St=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Hi=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ui=window.Polymer&&window.Polymer.legacyOptimizations||!1,Bi=window.Polymer&&window.Polymer.legacyWarnings||!1,Fi=window.Polymer&&window.Polymer.syncInitialRender||!1,xt=window.Polymer&&window.Polymer.legacyUndefined||!1,Vi=window.Polymer&&window.Polymer.orderedComputed||!1,we=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ji=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let qi=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Wi=0;const z=function(r){let t=r.__mixinApplications;t||(t=new WeakMap,r.__mixinApplications=t);let o=Wi++;function i(e){let s=e.__mixinSet;if(s&&s[o])return e;let n=t,a=n.get(e);if(!a){a=r(e),n.set(e,a);let l=Object.create(a.__mixinSet||s||null);l[o]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Tt={},Pe={};function Ce(r,t){Tt[r]=Pe[r.toLowerCase()]=t}function Ae(r){return Tt[r]||Pe[r.toLowerCase()]}function Yi(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class W extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,o){if(t){let i=Ae(t);return i&&o?i.querySelector(o):i}return null}attributeChangedCallback(t,o,i,e){o!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,o=q(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Et(o)}return this.__assetpath}register(t){if(t=t||this.id,t){if(St&&Ae(t)!==void 0)throw Ce(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ce(t,this),Yi(this)}}}W.prototype.modules=Tt,customElements.define("dom-module",W);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ji="link[rel=import][type~=css]",Gi="include",Ee="shady-unscoped";function Se(r){return W.import(r)}function xe(r){let t=r.body?r.body:r;const o=At(t.textContent,r.baseURI),i=document.createElement("style");return i.textContent=o,i}function Xi(r){const t=r.trim().split(/\s+/),o=[];for(let i=0;i<t.length;i++)o.push(...Ki(t[i]));return o}function Ki(r){const t=Se(r);if(!t)return console.warn("Could not find style data in module named",r),[];if(t._styles===void 0){const o=[];o.push(...$e(t));const i=t.querySelector("template");i&&o.push(...Te(i,t.assetpath)),t._styles=o}return t._styles}function Te(r,t){if(!r._styles){const o=[],i=r.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let s=i[e],n=s.getAttribute(Gi);n&&o.push(...Xi(n).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(s.textContent=At(s.textContent,t)),o.push(s)}r._styles=o}return r._styles}function Zi(r){let t=Se(r);return t?$e(t):[]}function $e(r){const t=[],o=r.querySelectorAll(Ji);for(let i=0;i<o.length;i++){let e=o[i];if(e.import){const s=e.import,n=e.hasAttribute(Ee);if(n&&!s._unscopedStyle){const a=xe(s);a.setAttribute(Ee,""),s._unscopedStyle=a}else s._style||(s._style=xe(s));t.push(n?s._unscopedStyle:s._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const T=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function $t(r){return r.indexOf(".")>=0}function $(r){let t=r.indexOf(".");return t===-1?r:r.slice(0,t)}function Qi(r,t){return r.indexOf(t+".")===0}function rt(r,t){return t.indexOf(r+".")===0}function ot(r,t,o){return t+o.slice(r.length)}function Y(r){if(Array.isArray(r)){let t=[];for(let o=0;o<r.length;o++){let i=r[o].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}else return r}function Oe(r){return Array.isArray(r)?Y(r).split("."):r.toString().split(".")}function g(r,t,o){let i=r,e=Oe(t);for(let s=0;s<e.length;s++){if(!i)return;let n=e[s];i=i[n]}return o&&(o.path=e.join(".")),i}function Ne(r,t,o){let i=r,e=Oe(t),s=e[e.length-1];if(e.length>1){for(let n=0;n<e.length-1;n++){let a=e[n];if(i=i[a],!i)return}i[s]=o}else i[t]=o;return e.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const st={},tr=/-[a-z]/g,er=/([A-Z])/g;function Me(r){return st[r]||(st[r]=r.indexOf("-")<0?r:r.replace(tr,t=>t[1].toUpperCase()))}function nt(r){return st[r]||(st[r]=r.replace(er,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ir=0,ke=0,D=[],rr=0,Ot=!1,Le=document.createTextNode("");new window.MutationObserver(or).observe(Le,{characterData:!0});function or(){Ot=!1;const r=D.length;for(let t=0;t<r;t++){let o=D[t];if(o)try{o()}catch(i){setTimeout(()=>{throw i})}}D.splice(0,r),ke+=r}const sr={run(r){return Ot||(Ot=!0,Le.textContent=rr++),D.push(r),ir++},cancel(r){const t=r-ke;if(t>=0){if(!D[t])throw new Error("invalid async handle: "+r);D[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nr=sr,Re=z(r=>{class t extends r{static createProperties(i){const e=this.prototype;for(let s in i)s in e||e._createPropertyAccessor(s)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,e){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,e))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[i];return e||(e=this.constructor.attributeNameForProperty(i),this.__dataAttributes[e]=i),e}_definePropertyAccessor(i,e){Object.defineProperty(this,i,{get(){return this.__data[i]},set:e?function(){}:function(s){this._setPendingProperty(i,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,e){this._setPendingProperty(i,e)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,e,s){let n=this.__data[i],a=this._shouldPropertyChange(i,e,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=n),this.__data[i]=e,this.__dataPending[i]=e),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,nr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,e=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(i,e,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,e,s)),this.__dataCounter--}_shouldPropertiesChange(i,e,s){return Boolean(e)}_propertiesChanged(i,e,s){}_shouldPropertyChange(i,e,s){return s!==e&&(s===s||e===e)}attributeChangedCallback(i,e,s,n){e!==s&&this._attributeToProperty(i,s),super.attributeChangedCallback&&super.attributeChangedCallback(i,e,s,n)}_attributeToProperty(i,e,s){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[i]||i;this[a]=this._deserializeValue(e,s||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,e,s){this.__serializing=!0,s=arguments.length<3?this[i]:s,this._valueToNodeAttribute(this,s,e||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,e,s){const n=this._serializeValue(e);(s==="class"||s==="name"||s==="slot")&&(i=T(i)),n===void 0?i.removeAttribute(s):i.setAttribute(s,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i!=null?i.toString():void 0}}_deserializeValue(i,e){switch(e){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ze={};let at=HTMLElement.prototype;for(;at;){let r=Object.getOwnPropertyNames(at);for(let t=0;t<r.length;t++)ze[r[t]]=!0;at=Object.getPrototypeOf(at)}const ar=(()=>window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1)();function lr(r,t){if(!ze[t]){let o=r[t];o!==void 0&&(r.__data?r._setPendingProperty(t,o):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[t]=o))}}const cr=z(r=>{const t=Re(r);class o extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let s=0;s<e.length;s++)this.prototype._createPropertyAccessor(Me(e[s]))}static attributeNameForProperty(e){return nt(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let s in e)this._setProperty(s,e[s])}_ensureAttribute(e,s){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,s,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e){if(ar(e))return e;try{return JSON.stringify(e)}catch{return""}}default:return super._serializeValue(e)}}_deserializeValue(e,s){let n;switch(s){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,s);break}return n}_definePropertyAccessor(e,s){lr(this,e),super._definePropertyAccessor(e,s)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}return o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const dr={"dom-if":!0,"dom-repeat":!0};let De=!1,Ie=!1;function ur(){if(!De){De=!0;const r=document.createElement("textarea");r.placeholder="a",Ie=r.placeholder===r.textContent}return Ie}function hr(r){ur()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const pr=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,o,i)=>{const e=o.getAttribute(i);if(r&&i.startsWith("on-")){t.setAttribute(i,r.createScript(e,i));return}t.setAttribute(i,e)}})();function fr(r){let t=r.getAttribute("is");if(t&&dr[t]){let o=r;for(o.removeAttribute("is"),r=o.ownerDocument.createElement(t),o.parentNode.replaceChild(r,o),r.appendChild(o);o.attributes.length;){const{name:i}=o.attributes[0];pr(r,o,i),o.removeAttribute(i)}}return r}function He(r,t){let o=t.parentInfo&&He(r,t.parentInfo);if(o){for(let i=o.firstChild,e=0;i;i=i.nextSibling)if(t.parentIndex===e++)return i}else return r}function mr(r,t,o,i){i.id&&(t[i.id]=o)}function _r(r,t,o){if(o.events&&o.events.length)for(let i=0,e=o.events,s;i<e.length&&(s=e[i]);i++)r._addMethodEventListenerToNode(t,s.name,s.value,r)}function yr(r,t,o,i){o.templateInfo&&(t._templateInfo=o.templateInfo,t._parentTemplateInfo=i)}function gr(r,t,o){return r=r._methodHost||r,function(e){r[o]?r[o](e,e.detail):console.warn("listener method `"+o+"` not defined")}}const vr=z(r=>{class t extends r{static _parseTemplate(i,e){if(!i._templateInfo){let s=i._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=Boolean(e),s.stripWhiteSpace=e&&e.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,s,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,e,s){return this._parseTemplateNode(i.content,e,s)}static _parseTemplateNode(i,e,s){let n=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,e,s)||n:a.localName==="slot"&&(e.hasInsertionPoint=!0),hr(a),a.firstChild&&this._parseTemplateChildNodes(a,e,s),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,e,s)||n),n||s.noted}static _parseTemplateChildNodes(i,e,s){if(!(i.localName==="script"||i.localName==="style"))for(let n=i.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=fr(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let d=l;for(;d&&d.nodeType===Node.TEXT_NODE;)n.textContent+=d.textContent,l=d.nextSibling,i.removeChild(d),d=l;if(e.stripWhiteSpace&&!n.textContent.trim()){i.removeChild(n);continue}}let c={parentIndex:a,parentInfo:s};this._parseTemplateNode(n,e,c)&&(c.infoIndex=e.nodeInfoList.push(c)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(i,e,s){let n=i,a=this._parseTemplate(n,e);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),s.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,e,s){let n=!1,a=Array.from(i.attributes);for(let l=a.length-1,c;c=a[l];l--)n=this._parseTemplateNodeAttribute(i,e,s,c.name,c.value)||n;return n}static _parseTemplateNodeAttribute(i,e,s,n,a){return n.slice(0,3)==="on-"?(i.removeAttribute(n),s.events=s.events||[],s.events.push({name:n.slice(3),value:a}),!0):n==="id"?(s.id=a,!0):!1}static _contentForTemplate(i){let e=i._templateInfo;return e&&e.content||i.content}_stampTemplate(i,e){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),e=e||this.constructor._parseTemplate(i);let s=e.nodeInfoList,n=e.content||i.content,a=document.importNode(n,!0);a.__noInsertionPoint=!e.hasInsertionPoint;let l=a.nodeList=new Array(s.length);a.$={};for(let c=0,d=s.length,u;c<d&&(u=s[c]);c++){let h=l[c]=He(a,u);mr(this,a.$,h,u),yr(this,h,u,e),_r(this,h,u)}return a=a,a}_addMethodEventListenerToNode(i,e,s,n){n=n||i;let a=gr(n,e,s);return this._addEventListenerToNode(i,e,a),a}_addEventListenerToNode(i,e,s){i.addEventListener(e,s)}_removeEventListenerFromNode(i,e,s){i.removeEventListener(e,s)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let J=0;const G=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ue="__computeInfo",br=/[A-Z]/;function Nt(r,t,o){let i=r[t];if(!i)i=r[t]={};else if(!r.hasOwnProperty(t)&&(i=r[t]=Object.create(r[t]),o))for(let e in i){let s=i[e],n=i[e]=Array(s.length);for(let a=0;a<s.length;a++)n[a]=s[a]}return i}function X(r,t,o,i,e,s){if(t){let n=!1;const a=J++;for(let l in o){let c=e?$(l):l,d=t[c];if(d)for(let u=0,h=d.length,p;u<h&&(p=d[u]);u++)(!p.info||p.info.lastRun!==a)&&(!e||Mt(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(r,l,o,i,p.info,e,s),n=!0)}return n}return!1}function wr(r,t,o,i,e,s,n,a){let l=!1,c=n?$(i):i,d=t[c];if(d)for(let u=0,h=d.length,p;u<h&&(p=d[u]);u++)(!p.info||p.info.lastRun!==o)&&(!n||Mt(i,p.trigger))&&(p.info&&(p.info.lastRun=o),p.fn(r,i,e,s,p.info,n,a),l=!0);return l}function Mt(r,t){if(t){let o=t.name;return o==r||!!(t.structured&&Qi(o,r))||!!(t.wildcard&&rt(o,r))}else return!0}function Be(r,t,o,i,e){let s=typeof e.method=="string"?r[e.method]:e.method,n=e.property;s?s.call(r,r.__data[n],i[n]):e.dynamicFn||console.warn("observer method `"+e.method+"` not defined")}function Pr(r,t,o,i,e){let s=r[f.NOTIFY],n,a=J++;for(let c in t)t[c]&&(s&&wr(r,s,a,c,o,i,e)||e&&Cr(r,c,o))&&(n=!0);let l;n&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Cr(r,t,o){let i=$(t);if(i!==t){let e=nt(i)+"-changed";return Fe(r,e,o[t],t),!0}return!1}function Fe(r,t,o,i){let e={value:o,queueProperty:!0};i&&(e.path=i),T(r).dispatchEvent(new CustomEvent(t,{detail:e}))}function Ar(r,t,o,i,e,s){let a=(s?$(t):t)!=t?t:null,l=a?g(r,a):r.__data[t];a&&l===void 0&&(l=o[t]),Fe(r,e.eventName,l,a)}function Er(r,t,o,i,e){let s,n=r.detail,a=n&&n.path;a?(i=ot(o,i,a),s=n&&n.value):s=r.currentTarget[o],s=e?!s:s,(!t[f.READ_ONLY]||!t[f.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,s,!0,Boolean(a))&&(!n||!n.queueProperty)&&t._invalidateProperties()}function Sr(r,t,o,i,e){let s=r.__data[t];it&&(s=it(s,e.attrName,"attribute",r)),r._propertyToAttribute(t,e.attrName,s)}function xr(r,t,o,i){let e=r[f.COMPUTE];if(e)if(Vi){J++;const s=$r(r),n=[];for(let l in t)Ve(l,e,n,s,i);let a;for(;a=n.shift();)je(r,"",t,o,a)&&Ve(a.methodInfo,e,n,s,i);Object.assign(o,r.__dataOld),Object.assign(t,r.__dataPending),r.__dataPending=null}else{let s=t;for(;X(r,e,s,o,i);)Object.assign(o,r.__dataOld),Object.assign(t,r.__dataPending),s=r.__dataPending,r.__dataPending=null}}const Tr=(r,t,o)=>{let i=0,e=t.length-1,s=-1;for(;i<=e;){const n=i+e>>1,a=o.get(t[n].methodInfo)-o.get(r.methodInfo);if(a<0)i=n+1;else if(a>0)e=n-1;else{s=n;break}}s<0&&(s=e+1),t.splice(s,0,r)},Ve=(r,t,o,i,e)=>{const s=e?$(r):r,n=t[s];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==J&&(!e||Mt(r,l.trigger))&&(l.info.lastRun=J,Tr(l.info,o,i))}};function $r(r){let t=r.constructor.__orderedComputedDeps;if(!t){t=new Map;const o=r[f.COMPUTE];let{counts:i,ready:e,total:s}=Or(r),n;for(;n=e.shift();){t.set(n,t.size);const a=o[n];a&&a.forEach(l=>{const c=l.info.methodInfo;--s,--i[c]===0&&e.push(c)})}s!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=t}return t}function Or(r){const t=r[Ue],o={},i=r[f.COMPUTE],e=[];let s=0;for(let n in t){const a=t[n];s+=o[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in i)t[n]||e.push(n);return{counts:o,ready:e,total:s}}function je(r,t,o,i,e){let s=Lt(r,t,o,i,e);if(s===G)return!1;let n=e.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[n]?r._setPendingProperty(n,s,!0):(r[n]=s,!1)}function Nr(r,t,o){let i=r.__dataLinkedPaths;if(i){let e;for(let s in i){let n=i[s];rt(s,t)?(e=ot(s,n,t),r._setPendingPropertyOrPath(e,o,!0,!0)):rt(n,t)&&(e=ot(n,s,t),r._setPendingPropertyOrPath(e,o,!0,!0))}}}function kt(r,t,o,i,e,s,n){o.bindings=o.bindings||[];let a={kind:i,target:e,parts:s,literal:n,isCompound:s.length!==1};if(o.bindings.push(a),zr(a)){let{event:c,negate:d}=a.parts[0];a.listenerEvent=c||nt(e)+"-changed",a.listenerNegate=d}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let d=a.parts[c];d.compoundIndex=c,Mr(r,t,a,d,l)}}function Mr(r,t,o,i,e){if(!i.literal)if(o.kind==="attribute"&&o.target[0]==="-")console.warn("Cannot set attribute "+o.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,n={index:e,binding:o,part:i,evaluator:r};for(let a=0;a<s.length;a++){let l=s[a];typeof l=="string"&&(l=Xe(l),l.wildcard=!0),r._addTemplatePropertyEffect(t,l.rootProperty,{fn:kr,info:n,trigger:l})}}}function kr(r,t,o,i,e,s,n){let a=n[e.index],l=e.binding,c=e.part;if(s&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let d=o[t];t=ot(c.source,l.target,t),a._setPendingPropertyOrPath(t,d,!1,!0)&&r._enqueueClient(a)}else{let d=e.evaluator._evaluateBinding(r,c,t,o,i,s);d!==G&&Lr(r,a,l,c,d)}}function Lr(r,t,o,i,e){if(e=Rr(t,e,o,i),it&&(e=it(e,o.target,o.kind,t)),o.kind=="attribute")r._valueToNodeAttribute(t,e,o.target);else{let s=o.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?(!t[f.READ_ONLY]||!t[f.READ_ONLY][s])&&t._setPendingProperty(s,e)&&r._enqueueClient(t):r._setUnmanagedPropertyToNode(t,s,e)}}function Rr(r,t,o,i){if(o.isCompound){let e=r.__dataCompoundStorage[o.target];e[i.compoundIndex]=t,t=e.join("")}return o.kind!=="attribute"&&(o.target==="textContent"||o.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(t=t==null?"":t),t}function zr(r){return Boolean(r.target)&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function Dr(r,t){let{nodeList:o,nodeInfoList:i}=t;if(i.length)for(let e=0;e<i.length;e++){let s=i[e],n=o[e],a=s.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Ir(n,c),Hr(n,r,c)}n.__dataHost=r}}function Ir(r,t){if(t.isCompound){let o=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),i=t.parts,e=new Array(i.length);for(let n=0;n<i.length;n++)e[n]=i[n].literal;let s=t.target;o[s]=e,t.literal&&t.kind=="property"&&(s==="className"&&(r=T(r)),r[s]=t.literal)}}function Hr(r,t,o){if(o.listenerEvent){let i=o.parts[0];r.addEventListener(o.listenerEvent,function(e){Er(e,t,o.target,i.source,i.negate)})}}function qe(r,t,o,i,e,s){s=t.static||s&&(typeof s!="object"||s[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:e,dynamicFn:s};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||r._addPropertyEffect(l.rootProperty,o,{fn:i,info:n,trigger:l});return s&&r._addPropertyEffect(t.methodName,o,{fn:i,info:n}),n}function Lt(r,t,o,i,e){let s=r._methodHost||r,n=s[e.methodName];if(n){let a=r._marshalArgs(e.args,t,o);return a===G?G:n.apply(s,a)}else e.dynamicFn||console.warn("method `"+e.methodName+"` not defined")}const Ur=[],We="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Br="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Fr="(?:'(?:[^'\\\\]|\\\\.)*')",Vr='(?:"(?:[^"\\\\]|\\\\.)*")',jr="(?:"+Fr+"|"+Vr+")",Ye="(?:("+We+"|"+Br+"|"+jr+")\\s*)",qr="(?:"+Ye+"(?:,\\s*"+Ye+")*)",Wr="(?:\\(\\s*(?:"+qr+"?)\\)\\s*)",Yr="("+We+"\\s*"+Wr+"?)",Jr="(\\[\\[|{{)\\s*",Gr="(?:]]|}})",Xr=Jr+"(?:(!)\\s*)?"+Yr+Gr,Je=new RegExp(Xr,"g");function Ge(r){let t="";for(let o=0;o<r.length;o++)t+=r[o].literal||"";return t}function Rt(r){let t=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:Ur};if(t[2].trim()){let e=t[2].replace(/\\,/g,"&comma;").split(",");return Kr(e,i)}else return i}return null}function Kr(r,t){return t.args=r.map(function(o){let i=Xe(o);return i.literal||(t.static=!1),i},this),t}function Xe(r){let t=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),o={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':o.value=t.slice(1,-1),o.literal=!0;break;case"#":o.value=Number(t),o.literal=!0;break}return o.literal||(o.rootProperty=$(t),o.structured=$t(t),o.structured&&(o.wildcard=t.slice(-2)==".*",o.wildcard&&(o.name=t.slice(0,-2)))),o}function Ke(r,t,o){let i=g(r,o);return i===void 0&&(i=t[o]),i}function Ze(r,t,o,i){const e={indexSplices:i};xt&&!r._overrideLegacyUndefined&&(t.splices=e),r.notifyPath(o+".splices",e),r.notifyPath(o+".length",t.length),xt&&!r._overrideLegacyUndefined&&(e.indexSplices=[])}function K(r,t,o,i,e,s){Ze(r,t,o,[{index:i,addedCount:e,removed:s,object:t,type:"splice"}])}function Zr(r){return r[0].toUpperCase()+r.substring(1)}const Qr=z(r=>{const t=vr(cr(r));class o extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Z.length){let e=Z[Z.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let s=this[f.READ_ONLY];for(let n in e)(!s||!s[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,s,n){this._createPropertyAccessor(e,s==f.READ_ONLY);let a=Nt(this,s,!0)[e];a||(a=this[s][e]=[]),a.push(n)}_removePropertyEffect(e,s,n){let a=Nt(this,s,!0)[e],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(e,s){let n=this[s];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,f.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,f.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,f.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,f.COMPUTE)}_setPendingPropertyOrPath(e,s,n,a){if(a||$(Array.isArray(e)?e[0]:e)!==e){if(!a){let l=g(this,e);if(e=Ne(this,e,s),!e||!super._shouldPropertyChange(e,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,s,n))return Nr(this,e,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,s,n);this[e]=s}return!1}_setUnmanagedPropertyToNode(e,s,n){(n!==e[s]||typeof n=="object")&&(s==="className"&&(e=T(e)),e[s]=n)}_setPendingProperty(e,s,n){let a=this.__dataHasPaths&&$t(e),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,s,l[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),a?this.__dataTemp[e]=s:this.__data[e]=s,this.__dataPending[e]=s,(a||this[f.NOTIFY]&&this[f.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,s){this._setPendingProperty(e,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let s=0;s<e.length;s++){let n=e[s];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,s){for(let n in e)(s||!this[f.READ_ONLY]||!this[f.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,s,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;xr(this,s,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,n,a),this._flushClients(),X(this,this[f.REFLECT],s,n,a),X(this,this[f.OBSERVE],s,n,a),l&&Pr(this,l,s,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,s,n){this[f.PROPAGATE]&&X(this,this[f.PROPAGATE],e,s,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,s,n)}_runEffectsForTemplate(e,s,n,a){const l=(c,d)=>{X(this,e.propertyEffects,c,n,d,e.nodeList);for(let u=e.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,c,n,d)};e.runEffects?e.runEffects(l,s,a):l(s,a)}linkPaths(e,s){e=Y(e),s=Y(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=s}unlinkPaths(e){e=Y(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,s){let n={path:""},a=g(this,e,n);Ze(this,a,n.path,s)}get(e,s){return g(s||this,e)}set(e,s,n){n?Ne(n,e,s):(!this[f.READ_ONLY]||!this[f.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,s,!0)&&this._invalidateProperties()}push(e,...s){let n={path:""},a=g(this,e,n),l=a.length,c=a.push(...s);return s.length&&K(this,a,n.path,l,s.length,[]),c}pop(e){let s={path:""},n=g(this,e,s),a=Boolean(n.length),l=n.pop();return a&&K(this,n,s.path,n.length,0,[l]),l}splice(e,s,n,...a){let l={path:""},c=g(this,e,l);s<0?s=c.length-Math.floor(-s):s&&(s=Math.floor(s));let d;return arguments.length===2?d=c.splice(s):d=c.splice(s,n,...a),(a.length||d.length)&&K(this,c,l.path,s,a.length,d),d}shift(e){let s={path:""},n=g(this,e,s),a=Boolean(n.length),l=n.shift();return a&&K(this,n,s.path,0,0,[l]),l}unshift(e,...s){let n={path:""},a=g(this,e,n),l=a.unshift(...s);return s.length&&K(this,a,n.path,0,s.length,[]),l}notifyPath(e,s){let n;if(arguments.length==1){let a={path:""};s=g(this,e,a),n=a.path}else Array.isArray(e)?n=Y(e):n=e;this._setPendingPropertyOrPath(n,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,s){this._addPropertyEffect(e,f.READ_ONLY),s&&(this["_set"+Zr(e)]=function(n){this._setProperty(e,n)})}_createPropertyObserver(e,s,n){let a={property:e,method:s,dynamicFn:Boolean(n)};this._addPropertyEffect(e,f.OBSERVE,{fn:Be,info:a,trigger:{name:e}}),n&&this._addPropertyEffect(s,f.OBSERVE,{fn:Be,info:a,trigger:{name:s}})}_createMethodObserver(e,s){let n=Rt(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");qe(this,n,f.OBSERVE,Lt,null,s)}_createNotifyingProperty(e){this._addPropertyEffect(e,f.NOTIFY,{fn:Ar,info:{eventName:nt(e)+"-changed",property:e}})}_createReflectedProperty(e){let s=this.constructor.attributeNameForProperty(e);s[0]==="-"?console.warn("Property "+e+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,f.REFLECT,{fn:Sr,info:{attrName:s}})}_createComputedProperty(e,s,n){let a=Rt(s);if(!a)throw new Error("Malformed computed expression '"+s+"'");const l=qe(this,a,f.COMPUTE,je,e,n);Nt(this,Ue)[e]=l}_marshalArgs(e,s,n){const a=this.__data,l=[];for(let c=0,d=e.length;c<d;c++){let{name:u,structured:h,wildcard:p,value:m,literal:y}=e[c];if(!y)if(p){const C=rt(u,s),b=Ke(a,n,C?s:u);m={path:C?s:u,value:b,base:C?g(a,u):b}}else m=h?Ke(a,n,u):a[u];if(xt&&!this._overrideLegacyUndefined&&m===void 0&&e.length>1)return G;l[c]=m}return l}static addPropertyEffect(e,s,n){this.prototype._addPropertyEffect(e,s,n)}static createPropertyObserver(e,s,n){this.prototype._createPropertyObserver(e,s,n)}static createMethodObserver(e,s){this.prototype._createMethodObserver(e,s)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,s){this.prototype._createReadOnlyProperty(e,s)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,s,n){this.prototype._createComputedProperty(e,s,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,s){let n=this.constructor._parseTemplate(e),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(s)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=e._parentTemplateInfo||this.__templateInfo,c=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=c,c?c.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,s,n){let a=e.hostProps=e.hostProps||{};a[s]=!0;let l=e.propertyEffects=e.propertyEffects||{};(l[s]=l[s]||[]).push(n)}_stampTemplate(e,s){s=s||this._bindTemplate(e,!0),Z.push(this);let n=super._stampTemplate(e,s);if(Z.pop(),s.nodeList=n.nodeList,!s.wasPreBound){let a=s.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=s,Dr(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){const s=e.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=s;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),s.nextSibling=s.previousSibling=null;let c=s.childNodes;for(let d=0;d<c.length;d++){let u=c[d];T(T(u).parentNode).removeChild(u)}}static _parseTemplateNode(e,s,n){let a=t._parseTemplateNode.call(this,e,s,n);if(e.nodeType===Node.TEXT_NODE){let l=this._parseBindings(e.textContent,s);l&&(e.textContent=Ge(l)||" ",kt(this,s,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(e,s,n,a,l){let c=this._parseBindings(l,s);if(c){let d=a,u="property";br.test(a)?u="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),u="attribute");let h=Ge(c);return h&&u=="attribute"&&(a=="class"&&e.hasAttribute("class")&&(h+=" "+e.getAttribute(a)),e.setAttribute(a,h)),u=="attribute"&&d=="disable-upgrade$"&&e.setAttribute(a,""),e.localName==="input"&&d==="value"&&e.setAttribute(d,""),e.removeAttribute(d),u==="property"&&(a=Me(a)),kt(this,s,n,u,a,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,e,s,n,a,l)}static _parseTemplateNestedTemplate(e,s,n){let a=t._parseTemplateNestedTemplate.call(this,e,s,n);const l=e.parentNode,c=n.templateInfo,d=l.localName==="dom-if",u=l.localName==="dom-repeat";we&&(d||u)&&(l.removeChild(e),n=n.parentInfo,n.templateInfo=c,n.noted=!0,a=!1);let h=c.hostProps;if(ji&&d)h&&(s.hostProps=Object.assign(s.hostProps||{},h),we||(n.parentInfo.noted=!0));else{let p="{";for(let m in h){let y=[{mode:p,source:m,dependencies:[m],hostProp:!0}];kt(this,s,n,"property","_host_"+m,y)}}return a}static _parseBindings(e,s){let n=[],a=0,l;for(;(l=Je.exec(e))!==null;){l.index>a&&n.push({literal:e.slice(a,l.index)});let c=l[1][0],d=Boolean(l[2]),u=l[3].trim(),h=!1,p="",m=-1;c=="{"&&(m=u.indexOf("::"))>0&&(p=u.substring(m+2),u=u.substring(0,m),h=!0);let y=Rt(u),C=[];if(y){let{args:b,methodName:w}=y;for(let Wt=0;Wt<b.length;Wt++){let di=b[Wt];di.literal||C.push(di)}let I=s.dynamicFns;(I&&I[w]||y.static)&&(C.push(w),y.dynamicFn=!0)}else C.push(u);n.push({source:u,mode:c,negate:d,customEvent:h,signature:y,dependencies:C,event:p}),a=Je.lastIndex}if(a&&a<e.length){let c=e.substring(a);c&&n.push({literal:c})}return n.length?n:null}static _evaluateBinding(e,s,n,a,l,c){let d;return s.signature?d=Lt(e,n,a,l,s.signature):n!=s.source?d=g(e,s.source):c&&$t(n)?d=g(e,n):d=e.__data[n],s.negate&&(d=!d),d}}return o}),Z=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function So(r){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function to(r){const t={};for(let o in r){const i=r[o];t[o]=typeof i=="function"?{type:i}:i}return t}const eo=z(r=>{const t=Re(r);function o(s){const n=Object.getPrototypeOf(s);return n.prototype instanceof e?n:null}function i(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let n=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const a=s.properties;a&&(n=to(a))}s.__ownProperties=n}return s.__ownProperties}class e extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=o(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=i(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=o(this);this.__properties=Object.assign({},n&&n._properties,i(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const io="3.5.1",Qe=window.ShadyCSS&&window.ShadyCSS.cssBuild,ro=z(r=>{const t=eo(Qr(r));function o(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let d in c){let u=c[d];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[d]=u)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function e(l,c,d,u){d.computed&&(d.readOnly=!0),d.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,d.computed,u)),d.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!d.computed):d.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),d.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):d.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),d.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):d.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),d.observer&&l._createPropertyObserver(c,d.observer,u[d.observer]),l._addPropertyToAttributeMap(c)}function s(l,c,d,u){if(!Qe){const h=c.content.querySelectorAll("style"),p=Te(c),m=Zi(d),y=c.content.firstElementChild;for(let b=0;b<m.length;b++){let w=m[b];w.textContent=l._processStyleText(w.textContent,u),c.content.insertBefore(w,y)}let C=0;for(let b=0;b<p.length;b++){let w=p[b],I=h[C];I!==w?(w=w.cloneNode(!0),I.parentNode.insertBefore(w,I)):C++,w.textContent=l._processStyleText(w.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,d),qi&&Qe&&Di){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(m=>{p+=m.textContent,m.parentNode.removeChild(m)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function n(l){let c=null;if(l&&(!St||Hi)&&(c=W.import(l,"template"),St&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return io}static _finalizeClass(){t._finalizeClass.call(this);const c=i(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Ui||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let d in c)e(this.prototype,d,c[d],c)}static createObservers(c,d){const u=this.prototype;for(let h=0;h<c.length;h++)u._createMethodObserver(c[h],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Et(c.url);else{const d=W.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ii,this.importPath=this.constructor.importPath;let c=o(this.constructor);if(!!c)for(let d in c){let u=c[d];if(this._canApplyPropertyDefault(d)){let h=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(d)?this._setPendingProperty(d,h,!0):this[d]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,d){return At(c,d)}static _finalizeTemplate(c){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const u=this.importPath,h=u?q(u):"";s(this,d,c,h),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const d=T(this);if(d.attachShadow)return c?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:c}),d.shadowRoot.appendChild(c),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Fi&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,d){return!d&&this.importPath&&(d=q(this.importPath)),q(c,d)}static _parseTemplateContent(c,d,u){return d.dynamicFns=d.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,d,u)}static _addTemplatePropertyEffect(c,d,u){return Bi&&!(d in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,d,u)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ti=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class ei{constructor(t,o){ri(t,o);const i=o.reduce((e,s,n)=>e+ii(s)+t[n+1],t[0]);this.value=i.toString()}toString(){return this.value}}function ii(r){if(r instanceof ei)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function oo(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof ei)return ii(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const zt=function(t,...o){ri(t,o);const i=document.createElement("template");let e=o.reduce((s,n,a)=>s+oo(n)+t[a+1],t[0]);return ti&&(e=ti.createHTML(e)),i.innerHTML=e,i},ri=(r,t)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||t.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dt=ro(HTMLElement);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=(r,t)=>{var o,i;return t===void 0?((o=r)===null||o===void 0?void 0:o._$litType$)!==void 0:((i=r)===null||i===void 0?void 0:i._$litType$)===t};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lt=r=>r.test(navigator.userAgent),It=r=>r.test(navigator.platform),no=r=>r.test(navigator.vendor);lt(/Android/),lt(/Chrome/)&&no(/Google Inc/),lt(/Firefox/);const ao=It(/^iPad/)||It(/^Mac/)&&navigator.maxTouchPoints>1,lo=It(/^iPhone/)||ao;lt(/^((?!chrome|android).)*safari/i),(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();const co=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ct=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function uo(){function r(){return!0}return oi(r)}function ho(){try{return po()?!0:fo()?ct?!mo():!uo():!1}catch{return!1}}function po(){return localStorage.getItem("vaadin.developmentmode.force")}function fo(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function mo(){return!!(ct&&Object.keys(ct).map(t=>ct[t]).filter(t=>t.productionMode).length>0)}function oi(r,t){if(typeof r!="function")return;const o=co.exec(r.toString());if(o)try{r=new Function(o[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(t)}window.Vaadin=window.Vaadin||{};const si=function(r,t){if(window.Vaadin.developmentMode)return oi(r,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ho());function _o(){}const yo=function(){if(typeof si=="function")return si(_o)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ht=[],go=document.createTextNode("");new window.MutationObserver(vo).observe(go,{characterData:!0});function vo(){const r=Ht.length;for(let t=0;t<r;t++){let o=Ht[t];if(o)try{o()}catch(i){setTimeout(()=>{throw i})}}Ht.splice(0,r)}const bo={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class dt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,o){this._asyncModule=t,this._callback=o,this._timer=this._asyncModule.run(()=>{this._timer=null,Ut.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ut.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,o,i){return t instanceof dt?t._cancelAsync():t=new dt,t.setConfig(o,i),t}}let Ut=new Set;const wo=function(r){Ut.add(r)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bt{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let o="reverse";return t.scrollLeft>0?o="default":(t.scrollLeft=2,t.scrollLeft<2&&(o="negative")),document.body.removeChild(t),o}static getNormalizedScrollLeft(t,o,i){const{scrollLeft:e}=i;if(o!=="rtl"||!t)return e;switch(t){case"negative":return i.scrollWidth-i.clientWidth+e;case"reverse":return i.scrollWidth-i.clientWidth-e}return e}static setNormalizedScrollLeft(t,o,i,e){if(o!=="rtl"||!t){i.scrollLeft=e;return}switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+e;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-e;break;default:i.scrollLeft=e;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const S=[],Po=function(){const r=Vt();S.forEach(t=>{Ft(t,r)})};let ut;new MutationObserver(Po).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ft=function(r,t,o=r.getAttribute("dir")){t?r.setAttribute("dir",t):o!=null&&r.removeAttribute("dir")},Vt=function(){return document.documentElement.getAttribute("dir")},Co=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),ut||(ut=Bt.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Ft(this,Vt(),null))}attributeChangedCallback(o,i,e){if(super.attributeChangedCallback(o,i,e),o!=="dir")return;const s=Vt(),n=e===s&&S.indexOf(this)===-1,a=!e&&i&&S.indexOf(this)===-1;n||a?(this.__subscribe(),Ft(this,s,e)):e!==s&&i===s&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(o,i,e){e==="dir"&&i===""&&!o.hasAttribute("dir")||super._valueToNodeAttribute(o,i,e)}_attributeToProperty(o,i,e){o==="dir"&&!i?this.dir="":super._attributeToProperty(o,i,e)}__subscribe(o=!0){o?S.indexOf(this)===-1&&S.push(this):S.indexOf(this)>-1&&S.splice(S.indexOf(this),1)}__getNormalizedScrollLeft(o){return Bt.getNormalizedScrollLeft(ut,this.getAttribute("dir")||"ltr",o)}__setNormalizedScrollLeft(o,i){return Bt.setNormalizedScrollLeft(ut,this.getAttribute("dir")||"ltr",o,i)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){yo()};let jt;const ni=new Set,ai=r=>class extends Co(r){static get version(){return"22.0.16"}static finalize(){super.finalize();const{is:o}=this;o&&!ni.has(o)&&(window.Vaadin.registrations.push(this),ni.add(o),window.Vaadin.developmentModeCallback&&(jt=dt.debounce(jt,bo,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),wo(jt)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ao(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class li extends me(ai(Dt)){static get template(){return zt`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(t){t?(document.body.appendChild(this),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),lo&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){const t=window.innerHeight,i=window.innerWidth>t,e=document.documentElement.clientHeight;i&&e>t?this.style.bottom=e-t+"px":this.style.bottom="0"}}class ci extends me(Dt){static get template(){return zt`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class P extends de(ai(Dt)){static get template(){return zt`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-notification-card theme$="[[theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),Ao(this)}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(t,o,i){if(!i)return;const e=this._oldRenderer!==t;this._oldRenderer=t,e&&(i.innerHTML="",delete i._$litPart$),o&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return P._container||(P._container=document.createElement("vaadin-notification-container"),document.body.appendChild(P._container)),P._container}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&t!="none"){const o=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",o)};this._card.addEventListener("animationend",o)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,o){o&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}static show(t,o){return so(t)?P._createAndShowNotification(i=>{ae(t,i)},o):P._createAndShowNotification(i=>{i.innerText=t},o)}static _createAndShowNotification(t,o){const i=document.createElement(P.is);return o&&Number.isFinite(o.duration)&&(i.duration=o.duration),o&&o.position&&(i.position=o.position),o&&o.theme&&i.setAttribute("theme",o.theme),i.renderer=t,document.body.appendChild(i),i.opened=!0,i.addEventListener("opened-changed",e=>{e.detail.value||i.remove()}),i}}customElements.define(li.is,li),customElements.define(ci.is,ci),customElements.define(P.is,P);class qt extends j{constructor(){super(),this._message="Default Notification",this._show=!1,this._notificationOpened=!1,this._reregisterhandler()}render(){return bt`${this._show?this._showNotification():bt``}`}async _reregisterhandler(){}_showNotification(t){console.log("Showing notification"),P.show(t||"This is a notification That we are 0'd out!",{position:"top-end",theme:"success"}),P.show(bt`<button @click=${this._promptTest}>${this._message}</button>`,{duration:"0",position:"bottom-stretch",theme:"contrast"}),this._notificationOpened=!0}hasUpdated(t){t.has("showMessage")?(console.log("Important Property"),this._message=t.get("showMessage"),console.log(t.get("showMessage")),console.log(this._message),this._showNotification(this._message)):console.log("Nothing important")}_promptTest(t){alert("Showing")}}return qt.properties={_message:{type:String,attribute:!0},showMessage:{attribute:"showmessage",reflect:!1,type:String},_show:{type:Boolean},_notificationOpened:{type:Boolean}},customElements.define("notification-element",qt),ht.NotificationElement=qt,Object.defineProperties(ht,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),ht}({});
