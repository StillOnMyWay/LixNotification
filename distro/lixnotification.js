var LixNotification = (function (exports) {
  'use strict';

  /**
   * @license
   * Copyright (c) 2017 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */
  class Lumo extends HTMLElement {
    static get version() {
      return '22.0.16';
    }
  }

  customElements.define('vaadin-lumo-styles', Lumo);

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$2=Symbol(),n$3=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$3.get(this.cssText);return t$1&&void 0===e&&(n$3.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$2),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$2)},i$1=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$1=window.trustedTypes,r$1=e$1?e$1.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$2=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$2};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$2.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t;const i=globalThis.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e,n$1=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v$1:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v$1||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$1:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e+y):s+e+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e),s=t.length-1;if(s>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e,t+1));)c.push({type:7,index:r}),t+=e.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i?i.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.6");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");

  /**
   * @license
   * Copyright (c) 2017 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */
  /**
   * @polymerMixin
   */
  const ThemePropertyMixin = (superClass) =>
    class VaadinThemePropertyMixin extends superClass {
      static get properties() {
        return {
          /**
           * Helper property with theme attribute value facilitating propagation
           * in shadow DOM.
           *
           * Enables the component implementation to propagate the `theme`
           * attribute value to the sub-components in Shadow DOM by binding
           * the sub-component’s "theme" attribute to the `theme` property of
           * the host.
           *
           * **NOTE:** Extending the mixin only provides the property for binding,
           * and does not make the propagation alone.
           *
           * See [Styling Components: Sub-components](https://vaadin.com/docs/latest/ds/customization/styling-components/#sub-components).
           * page for more information.
           *
           * @protected
           */
          theme: {
            type: String,
            readOnly: true,
          },
        };
      }

      /** @protected */
      attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);

        if (name === 'theme') {
          this._setTheme(newValue);
        }
      }
    };

  /**
   * @license
   * Copyright (c) 2017 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  /**
   * @typedef {Object} Theme
   * @property {string} themeFor
   * @property {CSSResult[]} styles
   * @property {string | string[]} [include]
   * @property {string} [moduleId]
   *
   * @typedef {CSSResult[] | CSSResult} CSSResultGroup
   */

  /**
   * @type {Theme[]}
   */
  const themeRegistry = [];

  /**
   * Registers CSS styles for a component type. Make sure to register the styles before
   * the first instance of a component of the type is attached to DOM.
   *
   * @param {string} themeFor The local/tag name of the component type to register the styles for
   * @param {CSSResultGroup} styles The CSS style rules to be registered for the component type
   * matching themeFor and included in the local scope of each component instance
   * @param {{moduleId?: string, include?: string | string[]}} options Additional options
   * @return {void}
   */
  function registerStyles(themeFor, styles, options = {}) {
    if (themeFor) {
      const elementClass = customElements.get(themeFor);
      if (elementClass && Object.prototype.hasOwnProperty.call(elementClass, '__finalized')) {
        console.warn(`The custom element definition for "${themeFor}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`);
      }
    }

    styles = recursiveFlattenStyles(styles);

    if (window.Vaadin && window.Vaadin.styleModules) {
      window.Vaadin.styleModules.registerStyles(themeFor, styles, options);
    } else {
      themeRegistry.push({
        themeFor,
        styles,
        include: options.include,
        moduleId: options.moduleId,
      });
    }
  }

  /**
   * Returns all registered themes. By default the themeRegistry is returend as is.
   * In case the style-modules adapter is imported, the themes are obtained from there instead
   * @returns {Theme[]}
   */
  function getAllThemes() {
    if (window.Vaadin && window.Vaadin.styleModules) {
      return window.Vaadin.styleModules.getAllThemes();
    } else {
      return themeRegistry;
    }
  }

  /**
   * Returns true if the themeFor string matches the tag name
   * @param {string} themeFor
   * @param {string} tagName
   * @returns {boolean}
   */
  function matchesThemeFor(themeFor, tagName) {
    return (themeFor || '').split(' ').some((themeForToken) => {
      return new RegExp('^' + themeForToken.split('*').join('.*') + '$').test(tagName);
    });
  }

  /**
   * Maps the moduleName to an include priority number which is used for
   * determining the order in which styles are applied.
   * @param {string} moduleName
   * @returns {number}
   */
  function getIncludePriority(moduleName = '') {
    let includePriority = 0;
    if (moduleName.indexOf('lumo-') === 0 || moduleName.indexOf('material-') === 0) {
      includePriority = 1;
    } else if (moduleName.indexOf('vaadin-') === 0) {
      includePriority = 2;
    }
    return includePriority;
  }

  /**
   * Flattens the styles into a single array of styles.
   * @param {CSSResultGroup} styles
   * @param {CSSResult[]} result
   * @returns {CSSResult[]}
   */
  function recursiveFlattenStyles(styles = [], result = []) {
    if (styles instanceof s$3) {
      result.push(styles);
    } else if (Array.isArray(styles)) {
      styles.forEach((style) => recursiveFlattenStyles(style, result));
    } else {
      console.warn('An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.');
    }
    return result;
  }

  /**
   * Gets an array of CSSResults matching the include property of the theme.
   * @param {Theme} theme
   * @returns {CSSResult[]}
   */
  function getIncludedStyles(theme) {
    const includedStyles = [];
    if (theme.include) {
      [].concat(theme.include).forEach((includeModuleId) => {
        const includedTheme = getAllThemes().find((s) => s.moduleId === includeModuleId);
        if (includedTheme) {
          includedStyles.push(...getIncludedStyles(includedTheme), ...includedTheme.styles);
        } else {
          console.warn(`Included moduleId ${includeModuleId} not found in style registry`);
        }
      }, theme.styles);
    }
    return includedStyles;
  }

  /**
   * Includes the styles to the template.
   * @param {CSSResult[]} styles
   * @param {HTMLTemplateElement} template
   */
  function addStylesToTemplate(styles, template) {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles
      // Remove duplicates so that the last occurrence remains
      .filter((style, index) => index === styles.lastIndexOf(style))
      .map((style) => style.cssText)
      .join('\n');
    template.content.appendChild(styleEl);
  }

  /**
   * Returns an array of themes that should be used for styling a component matching
   * the tag name. The array is sorted by the include order.
   * @param {string} tagName
   * @returns {Theme[]}
   */
  function getThemes(tagName) {
    const defaultModuleName = tagName + '-default-theme';

    const themes = getAllThemes()
      // Filter by matching themeFor properties
      .filter((theme) => theme.moduleId !== defaultModuleName && matchesThemeFor(theme.themeFor, tagName))
      .map((theme) => ({
        ...theme,
        // Prepend styles from included themes
        styles: [...getIncludedStyles(theme), ...theme.styles],
        // Map moduleId to includePriority
        includePriority: getIncludePriority(theme.moduleId),
      }))
      // Sort by includePriority
      .sort((themeA, themeB) => themeB.includePriority - themeA.includePriority);

    if (themes.length > 0) {
      return themes;
    } else {
      // No theme modules found, return the default module if it exists
      return getAllThemes().filter((theme) => theme.moduleId === defaultModuleName);
    }
  }

  /**
   * @polymerMixin
   * @mixes ThemePropertyMixin
   */
  const ThemableMixin = (superClass) =>
    class VaadinThemableMixin extends ThemePropertyMixin(superClass) {
      /**
       * Covers PolymerElement based component styling
       * @protected
       */
      static finalize() {
        super.finalize();

        const template = this.prototype._template;
        if (!template || template.__themes) {
          return;
        }

        const inheritedTemplate = Object.getPrototypeOf(this.prototype)._template;
        const inheritedThemes = (inheritedTemplate ? inheritedTemplate.__themes : []) || [];

        template.__themes = [...inheritedThemes, ...getThemes(this.is)];

        // Get flattened styles array
        const styles = template.__themes.reduce((styles, theme) => [...styles, ...theme.styles], []);
        addStylesToTemplate(styles, template);
      }

      /**
       * Covers LitElement based component styling
       *
       * NOTE: This is not yet an offically supported API!
       *
       * TODO: Add tests (run a variation of themable-mixin.test.js where the components get created as LitElements)
       * @protected
       */
      static finalizeStyles(styles) {
        return (
          getThemes(this.is)
            // Get flattened styles array
            .reduce((styles, theme) => [...styles, ...theme.styles], [])
            .concat(styles)
        );
      }
    };

  /**
   * @license
   * Copyright (c) 2017 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  const colorBase = r$2`
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
`;

  const $tpl$3 = document.createElement('template');
  $tpl$3.innerHTML = `<style>${colorBase.toString().replace(':host', 'html')}</style>`;
  document.head.appendChild($tpl$3.content);

  const color = r$2`
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
`;

  registerStyles('', color, { moduleId: 'lumo-color' });

  const colorLegacy = r$2`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;

  registerStyles('', [color, colorLegacy], { moduleId: 'lumo-color-legacy' });

  /**
   * @license
   * Copyright (c) 2017 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  const spacing = r$2`
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
`;

  const $tpl$2 = document.createElement('template');
  $tpl$2.innerHTML = `<style>${spacing.toString().replace(':host', 'html')}</style>`;
  document.head.appendChild($tpl$2.content);

  /**
   * @license
   * Copyright (c) 2017 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  const style = r$2`
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
`;

  const $tpl$1 = document.createElement('template');
  $tpl$1.innerHTML = `<style>${style.toString().replace(':host', 'html')}</style>`;
  document.head.appendChild($tpl$1.content);

  /**
   * @license
   * Copyright (c) 2017 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  const font = r$2`
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
`;

  const typography = r$2`
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
`;

  registerStyles('', typography, { moduleId: 'lumo-typography' });

  const $tpl = document.createElement('template');
  $tpl.innerHTML = `<style>${font.toString().replace(':host', 'html')}</style>`;
  document.head.appendChild($tpl.content);

  registerStyles(
    'vaadin-notification-card',
    r$2`
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
  `,
    { moduleId: 'lumo-notification-card' }
  );

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /* eslint-disable no-unused-vars */
  /**
   * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
   * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
   *
   * @param {?} prop Property name
   * @param {*} obj Reference object
   * @return {string} Potentially renamed property name
   */
  window.JSCompiler_renameProperty = function(prop, obj) {
    return prop;
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  let CSS_URL_RX = /(url\()([^)]*)(\))/g;
  let ABS_URL = /(^\/[^\/])|(^#)|(^[\w-\d]*:)/;
  let workingURL;
  let resolveDoc;
  /**
   * Resolves the given URL against the provided `baseUri'.
   *
   * Note that this function performs no resolution for URLs that start
   * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
   * URL resolution, use `window.URL`.
   *
   * @param {string} url Input URL to resolve
   * @param {?string=} baseURI Base URI to resolve the URL against
   * @return {string} resolved URL
   */
  function resolveUrl(url, baseURI) {
    if (url && ABS_URL.test(url)) {
      return url;
    }
    if (url === '//') {
      return url;
    }
    // Lazy feature detection.
    if (workingURL === undefined) {
      workingURL = false;
      try {
        const u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        workingURL = (u.href === 'http://a/c%20d');
      } catch (e) {
        // silently fail
      }
    }
    if (!baseURI) {
      baseURI = document.baseURI || window.location.href;
    }
    if (workingURL) {
      try {
        return (new URL(url, baseURI)).href;
      } catch (e) {
        // Bad url or baseURI structure. Do not attempt to resolve.
        return url;
      }
    }
    // Fallback to creating an anchor into a disconnected document.
    if (!resolveDoc) {
      resolveDoc = document.implementation.createHTMLDocument('temp');
      resolveDoc.base = resolveDoc.createElement('base');
      resolveDoc.head.appendChild(resolveDoc.base);
      resolveDoc.anchor = resolveDoc.createElement('a');
      resolveDoc.body.appendChild(resolveDoc.anchor);
    }
    resolveDoc.base.href = baseURI;
    resolveDoc.anchor.href = url;
    return resolveDoc.anchor.href || url;

  }

  /**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */
  function resolveCss(cssText, baseURI) {
    return cssText.replace(CSS_URL_RX, function(m, pre, url, post) {
      return pre + '\'' +
        resolveUrl(url.replace(/["']/g, ''), baseURI) +
        '\'' + post;
    });
  }

  /**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */
  function pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf('/') + 1);
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  const useShadow = !(window.ShadyDOM) || !(window.ShadyDOM.inUse);
  Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
  const supportsAdoptingStyleSheets = useShadow &&
      ('adoptedStyleSheets' in Document.prototype) &&
      ('replaceSync' in CSSStyleSheet.prototype) &&
      // Since spec may change, feature detect exact API we need
      (() => {
        try {
          const sheet = new CSSStyleSheet();
          sheet.replaceSync('');
          const host = document.createElement('div');
          host.attachShadow({mode: 'open'});
          host.shadowRoot.adoptedStyleSheets = [sheet];
          return (host.shadowRoot.adoptedStyleSheets[0] === sheet);
        } catch(e) {
          return false;
        }
      })();

  /**
   * Globally settable property that is automatically assigned to
   * `ElementMixin` instances, useful for binding in templates to
   * make URL's relative to an application's root.  Defaults to the main
   * document URL, but can be overridden by users.  It may be useful to set
   * `rootPath` to provide a stable application mount path when
   * using client side routing.
   */
  let rootPath = window.Polymer && window.Polymer.rootPath ||
    pathFromUrl(document.baseURI || window.location.href);

  /**
   * A global callback used to sanitize any value before inserting it into the DOM.
   * The callback signature is:
   *
   *  function sanitizeDOMValue(value, name, type, node) { ... }
   *
   * Where:
   *
   * `value` is the value to sanitize.
   * `name` is the name of an attribute or property (for example, href).
   * `type` indicates where the value is being inserted: one of property, attribute, or text.
   * `node` is the node where the value is being inserted.
   *
   * @type {(function(*,string,string,?Node):*)|undefined}
   */
  let sanitizeDOMValue =
    window.Polymer && window.Polymer.sanitizeDOMValue || undefined;

  /**
   * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
   * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
   * scrolling performance.
   * Defaults to `false` for backwards compatibility.
   */
  window.Polymer && window.Polymer.setPassiveTouchGestures || false;

  /**
   * Setting to ensure Polymer template evaluation only occurs based on tempates
   * defined in trusted script.  When true, `<dom-module>` re-registration is
   * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
   * templates will only evaluate in the context of a trusted element template.
   */
  let strictTemplatePolicy =
    window.Polymer && window.Polymer.strictTemplatePolicy || false;

  /**
   * Setting to enable dom-module lookup from Polymer.Element.  By default,
   * templates must be defined in script using the `static get template()`
   * getter and the `html` tag function.  To enable legacy loading of templates
   * via dom-module, set this flag to true.
   */
  let allowTemplateFromDomModule =
    window.Polymer && window.Polymer.allowTemplateFromDomModule || false;

  /**
   * Setting to skip processing style includes and re-writing urls in css styles.
   * Normally "included" styles are pulled into the element and all urls in styles
   * are re-written to be relative to the containing script url.
   * If no includes or relative urls are used in styles, these steps can be
   * skipped as an optimization.
   */
  let legacyOptimizations =
    window.Polymer && window.Polymer.legacyOptimizations || false;

  /**
   * Setting to add warnings useful when migrating from Polymer 1.x to 2.x.
   */
  let legacyWarnings =
    window.Polymer && window.Polymer.legacyWarnings || false;

  /**
   * Setting to perform initial rendering synchronously when running under ShadyDOM.
   * This matches the behavior of Polymer 1.
   */
  let syncInitialRender =
    window.Polymer && window.Polymer.syncInitialRender || false;

  /**
   * Setting to retain the legacy Polymer 1 behavior for multi-property
   * observers around undefined values. Observers and computed property methods
   * are not called until no argument is undefined.
   */
  let legacyUndefined =
    window.Polymer && window.Polymer.legacyUndefined || false;

  /**
   * Setting to ensure computed properties are computed in order to ensure
   * re-computation never occurs in a given turn.
   */
  let orderedComputed =
    window.Polymer && window.Polymer.orderedComputed || false;

  /**
   * Setting to remove nested templates inside `dom-if` and `dom-repeat` as
   * part of element template parsing.  This is a performance optimization that
   * eliminates most of the tax of needing two elements due to the loss of
   * type-extended templates as a result of the V1 specification changes.
   */
  let removeNestedTemplates =
    window.Polymer && window.Polymer.removeNestedTemplates || false;

  /**
   * Setting to place `dom-if` elements in a performance-optimized mode that takes
   * advantage of lighter-weight host runtime template stamping to eliminate the
   * need for an intermediate Templatizer `TemplateInstance` to mange the nodes
   * stamped by `dom-if`.  Under this setting, any Templatizer-provided API's
   * such as `modelForElement` will not be available for nodes stamped by
   * `dom-if`.
   */
  let fastDomIf = window.Polymer && window.Polymer.fastDomIf || false;

  /**
   * Setting to disable `dom-change` and `rendered-item-count` events from
   * `dom-if` and `dom-repeat`. Users can opt back into `dom-change` events by
   * setting the `notify-dom-change` attribute (`notifyDomChange: true` property)
   * to `dom-if`/`don-repeat` instances.
   */
  window.Polymer && window.Polymer.suppressTemplateNotifications || false;

  /**
   * Setting to disable use of dynamic attributes. This is an optimization
   * to avoid setting `observedAttributes`. Instead attributes are read
   * once at create time and set/removeAttribute are patched.
   */
  window.Polymer && window.Polymer.legacyNoObservedAttributes || false;

  /**
   * Setting to enable use of `adoptedStyleSheets` for sharing style sheets
   * between component instances' shadow roots, if the app uses built Shady CSS
   * styles.
   */
  let useAdoptedStyleSheetsWithBuiltCSS =
    window.Polymer && window.Polymer.useAdoptedStyleSheetsWithBuiltCSS || false;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // unique global id for deduping mixins.
  let dedupeId$1 = 0;

  /* eslint-disable valid-jsdoc */
  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */
  const dedupingMixin = function(mixin) {
    let mixinApplications = /** @type {!MixinFunction} */(mixin).__mixinApplications;
    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */(mixin).__mixinApplications = mixinApplications;
    }
    // maintain a unique id for each mixin
    let mixinDedupeId = dedupeId$1++;
    function dedupingMixin(base) {
      let baseSet = /** @type {!MixinFunction} */(base).__mixinSet;
      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }
      let map = mixinApplications;
      let extended = map.get(base);
      if (!extended) {
        extended = /** @type {!Function} */(mixin)(base);
        map.set(base, extended);
        // copy inherited mixin set from the extended class, or the base class
        // NOTE: we avoid use of Set here because some browser (IE11)
        // cannot extend a base Set via the constructor.
        let mixinSet = Object.create(/** @type {!MixinFunction} */(extended).__mixinSet || baseSet || null);
        mixinSet[mixinDedupeId] = true;
        /** @type {!MixinFunction} */(extended).__mixinSet = mixinSet;
      }
      return extended;
    }

    return dedupingMixin;
  };
  /* eslint-enable valid-jsdoc */

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  let modules = {};
  let lcModules = {};
  /**
   * Sets a dom-module into the global registry by id.
   *
   * @param {string} id dom-module id
   * @param {DomModule} module dom-module instance
   * @return {void}
   */
  function setModule(id, module) {
    // store id separate from lowercased id so that
    // in all cases mixedCase id will stored distinctly
    // and lowercase version is a fallback
    modules[id] = lcModules[id.toLowerCase()] = module;
  }
  /**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */
  function findModule(id) {
    return modules[id] || lcModules[id.toLowerCase()];
  }

  function styleOutsideTemplateCheck(inst) {
    if (inst.querySelector('style')) {
      console.warn('dom-module %s has style outside template', inst.id);
    }
  }

  /**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */
  class DomModule extends HTMLElement {

    /** @override */
    static get observedAttributes() { return ['id']; }

    /**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */
    static import(id, selector) {
      if (id) {
        let m = findModule(id);
        if (m && selector) {
          return m.querySelector(selector);
        }
        return m;
      }
      return null;
    }

    /* eslint-disable no-unused-vars */
    /**
     * @param {string} name Name of attribute.
     * @param {?string} old Old value of attribute.
     * @param {?string} value Current value of attribute.
     * @param {?string} namespace Attribute namespace.
     * @return {void}
     * @override
     */
    attributeChangedCallback(name, old, value, namespace) {
      if (old !== value) {
        this.register();
      }
    }
    /* eslint-enable no-unused-args */

    /**
     * The absolute URL of the original location of this `dom-module`.
     *
     * This value will differ from this element's `ownerDocument` in the
     * following ways:
     * - Takes into account any `assetpath` attribute added during bundling
     *   to indicate the original location relative to the bundled location
     * - Uses the HTMLImports polyfill's `importForElement` API to ensure
     *   the path is relative to the import document's location since
     *   `ownerDocument` is not currently polyfilled
     */
    get assetpath() {
      // Don't override existing assetpath.
      if (!this.__assetpath) {
        // note: assetpath set via an attribute must be relative to this
        // element's location; accommodate polyfilled HTMLImports
        const owner = window.HTMLImports && HTMLImports.importForElement ?
          HTMLImports.importForElement(this) || document : this.ownerDocument;
        const url = resolveUrl(
          this.getAttribute('assetpath') || '', owner.baseURI);
        this.__assetpath = pathFromUrl(url);
      }
      return this.__assetpath;
    }

    /**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */
    register(id) {
      id = id || this.id;
      if (id) {
        // Under strictTemplatePolicy, reject and null out any re-registered
        // dom-module since it is ambiguous whether first-in or last-in is trusted
        if (strictTemplatePolicy && findModule(id) !== undefined) {
          setModule(id, null);
          throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`);
        }
        this.id = id;
        setModule(id, this);
        styleOutsideTemplateCheck(this);
      }
    }
  }

  DomModule.prototype['modules'] = modules;

  customElements.define('dom-module', DomModule);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  const MODULE_STYLE_LINK_SELECTOR = 'link[rel=import][type~=css]';
  const INCLUDE_ATTR = 'include';
  const SHADY_UNSCOPED_ATTR = 'shady-unscoped';

  /**
   * @param {string} moduleId .
   * @return {?DomModule} .
   */
  function importModule(moduleId) {
    return /** @type {?DomModule} */(DomModule.import(moduleId));
  }

  function styleForImport(importDoc) {
    // NOTE: polyfill affordance.
    // under the HTMLImports polyfill, there will be no 'body',
    // but the import pseudo-doc can be used directly.
    let container = importDoc.body ? importDoc.body : importDoc;
    const importCss = resolveCss(container.textContent,
      importDoc.baseURI);
    const style = document.createElement('style');
    style.textContent = importCss;
    return style;
  }


  /**
   * Returns a list of <style> elements in a space-separated list of `dom-module`s.
   *
   * @function
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
   */
  function stylesFromModules(moduleIds) {
   const modules = moduleIds.trim().split(/\s+/);
   const styles = [];
   for (let i=0; i < modules.length; i++) {
     styles.push(...stylesFromModule(modules[i]));
   }
   return styles;
  }

  /**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */
  function stylesFromModule(moduleId) {
    const m = importModule(moduleId);

    if (!m) {
      console.warn('Could not find style data in module named', moduleId);
      return [];
    }

    if (m._styles === undefined) {
      const styles = [];
      // module imports: <link rel="import" type="css">
      styles.push(..._stylesFromModuleImports(m));
      // include css from the first template in the module
      const template = /** @type {?HTMLTemplateElement} */(
          m.querySelector('template'));
      if (template) {
        styles.push(...stylesFromTemplate(template,
          /** @type {templateWithAssetPath} */(m).assetpath));
      }

      m._styles = styles;
    }

    return m._styles;
  }

  /**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string=} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */
  function stylesFromTemplate(template, baseURI) {
    if (!template._styles) {
      const styles = [];
      // if element is a template, get content from its .content
      const e$ = template.content.querySelectorAll('style');
      for (let i=0; i < e$.length; i++) {
        let e = e$[i];
        // support style sharing by allowing styles to "include"
        // other dom-modules that contain styling
        let include = e.getAttribute(INCLUDE_ATTR);
        if (include) {
          styles.push(...stylesFromModules(include).filter(function(item, index, self) {
            return self.indexOf(item) === index;
          }));
        }
        if (baseURI) {
          e.textContent =
              resolveCss(e.textContent, /** @type {string} */ (baseURI));
        }
        styles.push(e);
      }
      template._styles = styles;
    }
    return template._styles;
  }

  /**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */
  function stylesFromModuleImports(moduleId) {
   let m = importModule(moduleId);
   return m ? _stylesFromModuleImports(m) : [];
  }

  /**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */
  function _stylesFromModuleImports(module) {
    const styles = [];
    const p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);
    for (let i=0; i < p$.length; i++) {
      let p = p$[i];
      if (p.import) {
        const importDoc = p.import;
        const unscoped = p.hasAttribute(SHADY_UNSCOPED_ATTR);
        if (unscoped && !importDoc._unscopedStyle) {
          const style = styleForImport(importDoc);
          style.setAttribute(SHADY_UNSCOPED_ATTR, '');
          importDoc._unscopedStyle = style;
        } else if (!importDoc._style) {
          importDoc._style = styleForImport(importDoc);
        }
        styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
      }
    }
    return styles;
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /* eslint-disable valid-jsdoc */
  /**
   * Node wrapper to ensure ShadowDOM safe operation regardless of polyfill
   * presence or mode. Note that with the introduction of `ShadyDOM.noPatch`,
   * a node wrapper must be used to access ShadowDOM API.
   * This is similar to using `Polymer.dom` but relies exclusively
   * on the presence of the ShadyDOM polyfill rather than requiring the loading
   * of legacy (Polymer.dom) API.
   * @type {function(Node):Node}
   */
  const wrap = (window['ShadyDOM'] && window['ShadyDOM']['noPatch'] && window['ShadyDOM']['wrap']) ?
    window['ShadyDOM']['wrap'] :
    (window['ShadyDOM'] ? (n) => ShadyDOM['patch'](n) : (n) => n);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Module with utilities for manipulating structured data path strings.
   *
   * @summary Module with utilities for manipulating structured data path strings.
   */

  /**
   * Returns true if the given string is a structured data path (has dots).
   *
   * Example:
   *
   * ```
   * isPath('foo.bar.baz') // true
   * isPath('foo')         // false
   * ```
   *
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */
  function isPath(path) {
    return path.indexOf('.') >= 0;
  }

  /**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */
  function root(path) {
    let dotIndex = path.indexOf('.');
    if (dotIndex === -1) {
      return path;
    }
    return path.slice(0, dotIndex);
  }

  /**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */
  function isAncestor(base, path) {
    //     base.startsWith(path + '.');
    return base.indexOf(path + '.') === 0;
  }

  /**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */
  function isDescendant(base, path) {
    //     path.startsWith(base + '.');
    return path.indexOf(base + '.') === 0;
  }

  /**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */
  function translate(base, newBase, path) {
    return newBase + path.slice(base.length);
  }

  /**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */
  function normalize(path) {
    if (Array.isArray(path)) {
      let parts = [];
      for (let i=0; i<path.length; i++) {
        let args = path[i].toString().split('.');
        for (let j=0; j<args.length; j++) {
          parts.push(args[j]);
        }
      }
      return parts.join('.');
    } else {
      return path;
    }
  }

  /**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */
  function split(path) {
    if (Array.isArray(path)) {
      return normalize(path).split('.');
    }
    return path.toString().split('.');
  }

  /**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */
  function get(root, path, info) {
    let prop = root;
    let parts = split(path);
    // Loop over path parts[0..n-1] and dereference
    for (let i=0; i<parts.length; i++) {
      if (!prop) {
        return;
      }
      let part = parts[i];
      prop = prop[part];
    }
    if (info) {
      info.path = parts.join('.');
    }
    return prop;
  }

  /**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */
  function set(root, path, value) {
    let prop = root;
    let parts = split(path);
    let last = parts[parts.length-1];
    if (parts.length > 1) {
      // Loop over path parts[0..n-2] and dereference
      for (let i=0; i<parts.length-1; i++) {
        let part = parts[i];
        prop = prop[part];
        if (!prop) {
          return;
        }
      }
      // Set value to object at end of path
      prop[last] = value;
    } else {
      // Simple property set
      prop[path] = value;
    }
    return parts.join('.');
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  const caseMap = {};
  const DASH_TO_CAMEL = /-[a-z]/g;
  const CAMEL_TO_DASH = /([A-Z])/g;

  /**
   * @fileoverview Module with utilities for converting between "dash-case" and
   * "camelCase" identifiers.
   */

  /**
   * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
   * (e.g. `fooBarBaz`).
   *
   * @param {string} dash Dash-case identifier
   * @return {string} Camel-case representation of the identifier
   */
  function dashToCamelCase(dash) {
    return caseMap[dash] || (
      caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL,
        (m) => m[1].toUpperCase()
      )
    );
  }

  /**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */
  function camelToDashCase(camel) {
    return caseMap[camel] || (
      caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase()
    );
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // Microtask implemented using Mutation Observer
  let microtaskCurrHandle = 0;
  let microtaskLastHandle = 0;
  let microtaskCallbacks$1 = [];
  let microtaskNodeContent = 0;
  let microtaskScheduled = false;
  let microtaskNode$1 = document.createTextNode('');
  new window.MutationObserver(microtaskFlush$1).observe(microtaskNode$1, {characterData: true});

  function microtaskFlush$1() {
    microtaskScheduled = false;
    const len = microtaskCallbacks$1.length;
    for (let i = 0; i < len; i++) {
      let cb = microtaskCallbacks$1[i];
      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(() => { throw e; });
        }
      }
    }
    microtaskCallbacks$1.splice(0, len);
    microtaskLastHandle += len;
  }

  /**
   * Async interface for enqueuing callbacks that run at microtask timing.
   *
   * Note that microtask timing is achieved via a single `MutationObserver`,
   * and thus callbacks enqueued with this API will all run in a single
   * batch, and not interleaved with other microtasks such as promises.
   * Promises are avoided as an implementation choice for the time being
   * due to Safari bugs that cause Promises to lack microtask guarantees.
   *
   * @namespace
   * @summary Async interface for enqueuing callbacks that run at microtask
   *   timing.
   */
  const microTask = {

    /**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */
    run(callback) {
      if (!microtaskScheduled) {
        microtaskScheduled = true;
        microtaskNode$1.textContent = microtaskNodeContent++;
      }
      microtaskCallbacks$1.push(callback);
      return microtaskCurrHandle++;
    },

    /**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel(handle) {
      const idx = handle - microtaskLastHandle;
      if (idx >= 0) {
        if (!microtaskCallbacks$1[idx]) {
          throw new Error('invalid async handle: ' + handle);
        }
        microtaskCallbacks$1[idx] = null;
      }
    }

  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @const {!AsyncInterface} */
  const microtask = microTask;

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  const PropertiesChanged = dedupingMixin(
      /**
       * @template T
       * @param {function(new:T)} superClass Class to apply mixin to.
       * @return {function(new:T)} superClass with mixin applied.
       */
      (superClass) => {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    class PropertiesChanged extends superClass {

      /**
       * Creates property accessors for the given property names.
       * @param {!Object} props Object whose keys are names of accessors.
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createProperties(props) {
        const proto = this.prototype;
        for (let prop in props) {
          // don't stomp an existing accessor
          if (!(prop in proto)) {
            proto._createPropertyAccessor(prop);
          }
        }
      }

      /**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */
      static attributeNameForProperty(property) {
        return property.toLowerCase();
      }

      /**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       * @nocollapse
       */
      static typeForProperty(name) { } //eslint-disable-line no-unused-vars

      /**
       * Creates a setter/getter pair for the named property with its own
       * local storage.  The getter returns the value in the local storage,
       * and the setter calls `_setProperty`, which updates the local storage
       * for the property and enqueues a `_propertiesChanged` callback.
       *
       * This method may be called on a prototype or an instance.  Calling
       * this method may overwrite a property value that already exists on
       * the prototype/instance by creating the accessor.
       *
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created; the
       *   protected `_setProperty` function must be used to set the property
       * @return {void}
       * @protected
       * @override
       */
      _createPropertyAccessor(property, readOnly) {
        this._addPropertyToAttributeMap(property);
        if (!this.hasOwnProperty(JSCompiler_renameProperty('__dataHasAccessor', this))) {
          this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
        }
        if (!this.__dataHasAccessor[property]) {
          this.__dataHasAccessor[property] = true;
          this._definePropertyAccessor(property, readOnly);
        }
      }

      /**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */
      _addPropertyToAttributeMap(property) {
        if (!this.hasOwnProperty(JSCompiler_renameProperty('__dataAttributes', this))) {
          this.__dataAttributes = Object.assign({}, this.__dataAttributes);
        }
        // This check is technically not correct; it's an optimization that
        // assumes that if a _property_ name is already in the map (note this is
        // an attr->property map), the property mapped directly to the attribute
        // and it has already been mapped.  This would fail if
        // `attributeNameForProperty` were overridden such that this was not the
        // case.
        let attr = this.__dataAttributes[property];
        if (!attr) {
          attr = this.constructor.attributeNameForProperty(property);
          this.__dataAttributes[attr] = property;
        }
        return attr;
      }

      /**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */
       _definePropertyAccessor(property, readOnly) {
        Object.defineProperty(this, property, {
          /* eslint-disable valid-jsdoc */
          /** @this {PropertiesChanged} */
          get() {
            // Inline for perf instead of using `_getProperty`
            return this.__data[property];
          },
          /** @this {PropertiesChanged} */
          set: readOnly ? function () {} : function (value) {
            // Inline for perf instead of using `_setProperty`
            if (this._setPendingProperty(property, value, true)) {
              this._invalidateProperties();
            }
          }
          /* eslint-enable */
        });
      }

      constructor() {
        super();
        /** @type {boolean} */
        this.__dataEnabled = false;
        this.__dataReady = false;
        this.__dataInvalid = false;
        this.__data = {};
        this.__dataPending = null;
        this.__dataOld = null;
        this.__dataInstanceProps = null;
        /** @type {number} */
        // NOTE: used to track re-entrant calls to `_flushProperties`
        this.__dataCounter = 0;
        this.__serializing = false;
        this._initializeProperties();
      }

      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */
      ready() {
        this.__dataReady = true;
        this._flushProperties();
      }

      /**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */
      _initializeProperties() {
        // Capture instance properties; these will be set into accessors
        // during first flush. Don't set them here, since we want
        // these to overwrite defaults/constructor assignments
        for (let p in this.__dataHasAccessor) {
          if (this.hasOwnProperty(p)) {
            this.__dataInstanceProps = this.__dataInstanceProps || {};
            this.__dataInstanceProps[p] = this[p];
            delete this[p];
          }
        }
      }

      /**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */
      _initializeInstanceProperties(props) {
        Object.assign(this, props);
      }

      /**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */
      _setProperty(property, value) {
        if (this._setPendingProperty(property, value)) {
          this._invalidateProperties();
        }
      }

      /**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */
      _getProperty(property) {
        return this.__data[property];
      }

      /* eslint-disable no-unused-vars */
      /**
       * Updates the local storage for a property, records the previous value,
       * and adds it to the set of "pending changes" that will be passed to the
       * `_propertiesChanged` callback.  This method does not enqueue the
       * `_propertiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} ext Not used here; affordance for closure
       * @return {boolean} Returns true if the property changed
       * @protected
       * @override
       */
      _setPendingProperty(property, value, ext) {
        let old = this.__data[property];
        let changed = this._shouldPropertyChange(property, value, old);
        if (changed) {
          if (!this.__dataPending) {
            this.__dataPending = {};
            this.__dataOld = {};
          }
          // Ensure old is captured from the last turn
          if (this.__dataOld && !(property in this.__dataOld)) {
            this.__dataOld[property] = old;
          }
          this.__data[property] = value;
          this.__dataPending[property] = value;
        }
        return changed;
      }
      /* eslint-enable */

      /**
       * @param {string} property Name of the property
       * @return {boolean} Returns true if the property is pending.
       */
      _isPropertyPending(property) {
        return !!(this.__dataPending && this.__dataPending.hasOwnProperty(property));
      }

      /**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @return {void}
       * @protected
       * @override
       */
      _invalidateProperties() {
        if (!this.__dataInvalid && this.__dataReady) {
          this.__dataInvalid = true;
          microtask.run(() => {
            if (this.__dataInvalid) {
              this.__dataInvalid = false;
              this._flushProperties();
            }
          });
        }
      }

      /**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */
      _enableProperties() {
        if (!this.__dataEnabled) {
          this.__dataEnabled = true;
          if (this.__dataInstanceProps) {
            this._initializeInstanceProperties(this.__dataInstanceProps);
            this.__dataInstanceProps = null;
          }
          this.ready();
        }
      }

      /**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */
      _flushProperties() {
        this.__dataCounter++;
        const props = this.__data;
        const changedProps = this.__dataPending;
        const old = this.__dataOld;
        if (this._shouldPropertiesChange(props, changedProps, old)) {
          this.__dataPending = null;
          this.__dataOld = null;
          this._propertiesChanged(props, changedProps, old);
        }
        this.__dataCounter--;
      }

      /**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */
      _shouldPropertiesChange(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
        return Boolean(changedProps);
      }

      /**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */
      _propertiesChanged(currentProps, changedProps, oldProps) { // eslint-disable-line no-unused-vars
      }

      /**
       * Method called to determine whether a property value should be
       * considered as a change and cause the `_propertiesChanged` callback
       * to be enqueued.
       *
       * The default implementation returns `true` if a strict equality
       * check fails. The method always returns false for `NaN`.
       *
       * Override this method to e.g. provide stricter checking for
       * Objects/Arrays when using immutable patterns.
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       *   and enqueue a `_proeprtiesChanged` callback
       * @protected
       * @override
       */
      _shouldPropertyChange(property, value, old) {
        return (
          // Strict equality check
          (old !== value &&
            // This ensures (old==NaN, value==NaN) always returns false
            (old === old || value === value))
        );
      }

      /**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */
      attributeChangedCallback(name, old, value, namespace) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
        if (super.attributeChangedCallback) {
          super.attributeChangedCallback(name, old, value, namespace);
        }
      }

      /**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */
      _attributeToProperty(attribute, value, type) {
        if (!this.__serializing) {
          const map = this.__dataAttributes;
          const property = map && map[attribute] || attribute;
          this[property] = this._deserializeValue(value, type ||
            this.constructor.typeForProperty(property));
        }
      }

      /**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */
      _propertyToAttribute(property, attribute, value) {
        this.__serializing = true;
        value = (arguments.length < 3) ? this[property] : value;
        this._valueToNodeAttribute(/** @type {!HTMLElement} */(this), value,
          attribute || this.constructor.attributeNameForProperty(property));
        this.__serializing = false;
      }

      /**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */
      _valueToNodeAttribute(node, value, attribute) {
        const str = this._serializeValue(value);
        if (attribute === 'class' || attribute === 'name' || attribute === 'slot') {
          node = /** @type {?Element} */(wrap(node));
        }
        if (str === undefined) {
          node.removeAttribute(attribute);
        } else {
          node.setAttribute(
              attribute,
              // Closure's type for `setAttribute`'s second parameter incorrectly
              // excludes `TrustedScript`.
              (str === '' && window.trustedTypes) ?
                  /** @type {?} */ (window.trustedTypes.emptyScript) :
                  str);
        }
      }

      /**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */
      _serializeValue(value) {
        switch (typeof value) {
          case 'boolean':
            return value ? '' : undefined;
          default:
            return value != null ? value.toString() : undefined;
        }
      }

      /**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */
      _deserializeValue(value, type) {
        switch (type) {
          case Boolean:
            return (value !== null);
          case Number:
            return Number(value);
          default:
            return value;
        }
      }

    }

    return PropertiesChanged;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // Save map of native properties; this forms a blacklist or properties
  // that won't have their values "saved" by `saveAccessorValue`, since
  // reading from an HTMLElement accessor from the context of a prototype throws
  const nativeProperties = {};
  let proto = HTMLElement.prototype;
  while (proto) {
    let props = Object.getOwnPropertyNames(proto);
    for (let i=0; i<props.length; i++) {
      nativeProperties[props[i]] = true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  const isTrustedType = (() => {
    if (!window.trustedTypes) {
      return () => false;
    }
    return (val) => trustedTypes.isHTML(val) ||
          trustedTypes.isScript(val) || trustedTypes.isScriptURL(val);
  })();

  /**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */
  function saveAccessorValue(model, property) {
    // Don't read/store value for any native properties since they could throw
    if (!nativeProperties[property]) {
      let value = model[property];
      if (value !== undefined) {
        if (model.__data) {
          // Adding accessor to instance; update the property
          // It is the user's responsibility to call _flushProperties
          model._setPendingProperty(property, value);
        } else {
          // Adding accessor to proto; save proto's value for instance-time use
          if (!model.__dataProto) {
            model.__dataProto = {};
          } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
            model.__dataProto = Object.create(model.__dataProto);
          }
          model.__dataProto[property] = value;
        }
      }
    }
  }

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get
   *     observedAttributes()`. Use `dash-case` attribute names to represent
   *     `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to
   *     generate property accessors for each observed attribute. This must be
   *     called before the first instance is created, for example, by calling it
   *     before calling `customElements.define`. It can also be called lazily from
   *     the element's `constructor`, as long as it's guarded so that the call is
   *     only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to
   *     enable the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  const PropertyAccessors = dedupingMixin(superClass => {

    /**
     * @constructor
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     * @private
     */
     const base = PropertiesChanged(superClass);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyAccessors}
     * @extends {base}
     * @unrestricted
     */
    class PropertyAccessors extends base {

      /**
       * Generates property accessors for all attributes in the standard
       * static `observedAttributes` array.
       *
       * Attribute names are mapped to property names using the `dash-case` to
       * `camelCase` convention
       *
       * @return {void}
       * @nocollapse
       */
      static createPropertiesForAttributes() {
        let a$ =  /** @type {?} */ (this).observedAttributes;
        for (let i=0; i < a$.length; i++) {
          this.prototype._createPropertyAccessor(dashToCamelCase(a$[i]));
        }
      }

      /**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */
      static attributeNameForProperty(property) {
        return camelToDashCase(property);
      }

      /**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       * @override
       */
      _initializeProperties() {
        if (this.__dataProto) {
          this._initializeProtoProperties(this.__dataProto);
          this.__dataProto = null;
        }
        super._initializeProperties();
      }

      /**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */
      _initializeProtoProperties(props) {
        for (let p in props) {
          this._setProperty(p, props[p]);
        }
      }

      /**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an
       *     element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       * @override
       */
      _ensureAttribute(attribute, value) {
        const el = /** @type {!HTMLElement} */(this);
        if (!el.hasAttribute(attribute)) {
          this._valueToNodeAttribute(el, value, attribute);
        }
      }

      /**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property
       *     value.
       * @override
       */
      _serializeValue(value) {
        /* eslint-disable no-fallthrough */
        switch (typeof value) {
          case 'object':
            if (value instanceof Date) {
              return value.toString();
            } else if (value) {
              if (isTrustedType(value)) {
                /**
                 * Here `value` isn't actually a string, but it should be
                 * passed into APIs that normally expect a string, like
                 * elem.setAttribute.
                 */
                return /** @type {?} */ (value);
              }
              try {
                return JSON.stringify(value);
              } catch(x) {
                return '';
              }
            }

          default:
            return super._serializeValue(value);
        }
      }

      /**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */
      _deserializeValue(value, type) {
        /**
         * @type {*}
         */
        let outValue;
        switch (type) {
          case Object:
            try {
              outValue = JSON.parse(/** @type {string} */(value));
            } catch(x) {
              // allow non-JSON literals like Strings and Numbers
              outValue = value;
            }
            break;
          case Array:
            try {
              outValue = JSON.parse(/** @type {string} */(value));
            } catch(x) {
              outValue = null;
              console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`);
            }
            break;
          case Date:
            outValue = isNaN(value) ? String(value) : Number(value);
            outValue = new Date(outValue);
            break;
          default:
            outValue = super._deserializeValue(value, type);
            break;
        }
        return outValue;
      }
      /* eslint-enable no-fallthrough */

      /**
       * Overrides PropertiesChanged implementation to save existing prototype
       * property value so that it can be reset.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       *
       * When calling on a prototype, any overwritten values are saved in
       * `__dataProto`, and it is up to the subclasser to decide how/when
       * to set those properties back into the accessor.  When calling on an
       * instance, the overwritten value is set via `_setPendingProperty`,
       * and the user should call `_invalidateProperties` or `_flushProperties`
       * for the values to take effect.
       * @protected
       * @return {void}
       * @override
       */
      _definePropertyAccessor(property, readOnly) {
        saveAccessorValue(this, property);
        super._definePropertyAccessor(property, readOnly);
      }

      /**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       * @override
       */
      _hasAccessor(property) {
        return this.__dataHasAccessor && this.__dataHasAccessor[property];
      }

      /**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       * @override
       */
      _isPropertyPending(prop) {
        return Boolean(this.__dataPending && (prop in this.__dataPending));
      }

    }

    return PropertyAccessors;

  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // 1.x backwards-compatible auto-wrapper for template type extensions
  // This is a clear layering violation and gives favored-nation status to
  // dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
  // a.) to ease 1.x backwards-compatibility due to loss of `is`, and
  // b.) to maintain if/repeat capability in parser-constrained elements
  //     (e.g. table, select) in lieu of native CE type extensions without
  //     massive new invention in this space (e.g. directive system)
  const templateExtensions = {
    'dom-if': true,
    'dom-repeat': true
  };

  let placeholderBugDetect = false;
  let placeholderBug = false;

  function hasPlaceholderBug() {
    if (!placeholderBugDetect) {
      placeholderBugDetect = true;
      const t = document.createElement('textarea');
      t.placeholder = 'a';
      placeholderBug = t.placeholder === t.textContent;
    }
    return placeholderBug;
  }

  /**
   * Some browsers have a bug with textarea, where placeholder text is copied as
   * a textnode child of the textarea.
   *
   * If the placeholder is a binding, this can break template stamping in two
   * ways.
   *
   * One issue is that when the `placeholder` attribute is removed when the
   * binding is processed, the textnode child of the textarea is deleted, and the
   * template info tries to bind into that node.
   *
   * With `legacyOptimizations` in use, when the template is stamped and the
   * `textarea.textContent` binding is processed, no corresponding node is found
   * because it was removed during parsing. An exception is generated when this
   * binding is updated.
   *
   * With `legacyOptimizations` not in use, the template is cloned before
   * processing and this changes the above behavior. The cloned template also has
   * a value property set to the placeholder and textContent. This prevents the
   * removal of the textContent when the placeholder attribute is removed.
   * Therefore the exception does not occur. However, there is an extra
   * unnecessary binding.
   *
   * @param {!Node} node Check node for placeholder bug
   * @return {void}
   */
  function fixPlaceholder(node) {
    if (hasPlaceholderBug() && node.localName === 'textarea' && node.placeholder
          && node.placeholder === node.textContent) {
      node.textContent = null;
    }
  }

  /**
   * Copies an attribute from one element to another, converting the value to a
   * `TrustedScript` if it is named like a Polymer template event listener.
   *
   * @param {!Element} dest The element to set the attribute on
   * @param {!Element} src The element to read the attribute from
   * @param {string} name The name of the attribute
   */
  const copyAttributeWithTemplateEventPolicy = (() => {
    /**
     * This `TrustedTypePolicy` is used to work around a Chrome bug in the Trusted
     * Types API where any attribute that starts with `on` may only be set to a
     * `TrustedScript` value, even if that attribute would not cause an event
     * listener to be created. (See https://crbug.com/993268 for details.)
     *
     * Polymer's template system allows `<dom-if>` and `<dom-repeat>` to be
     * written using the `<template is="...">` syntax, even if there is no UA
     * support for custom element extensions of built-in elements. In doing so, it
     * copies attributes from the original `<template>` to a newly created
     * `<dom-if>` or `<dom-repeat>`, which can trigger the bug mentioned above if
     * any of those attributes uses Polymer's `on-` syntax for event listeners.
     * (Note, the value of these `on-` listeners is not evaluated as script: it is
     * the name of a member function of a component that will be used as the event
     * listener.)
     *
     * @type {!TrustedTypePolicy|undefined}
     */
    const polymerTemplateEventAttributePolicy = window.trustedTypes &&
        window.trustedTypes.createPolicy(
            'polymer-template-event-attribute-policy', {
              createScript: x => x,
            });

    return (dest, src, name) => {
      const value = src.getAttribute(name);

      if (polymerTemplateEventAttributePolicy && name.startsWith('on-')) {
        dest.setAttribute(
            name, polymerTemplateEventAttributePolicy.createScript(value, name));
        return;
      }

      dest.setAttribute(name, value);
    };
  })();

  function wrapTemplateExtension(node) {
    let is = node.getAttribute('is');
    if (is && templateExtensions[is]) {
      let t = node;
      t.removeAttribute('is');
      node = t.ownerDocument.createElement(is);
      t.parentNode.replaceChild(node, t);
      node.appendChild(t);
      while(t.attributes.length) {
        const {name} = t.attributes[0];
        copyAttributeWithTemplateEventPolicy(node, t, name);
        t.removeAttribute(name);
      }
    }
    return node;
  }

  function findTemplateNode(root, nodeInfo) {
    // recursively ascend tree until we hit root
    let parent = nodeInfo.parentInfo && findTemplateNode(root, nodeInfo.parentInfo);
    // unwind the stack, returning the indexed node at each level
    if (parent) {
      // note: marginally faster than indexing via childNodes
      // (http://jsperf.com/childnodes-lookup)
      for (let n=parent.firstChild, i=0; n; n=n.nextSibling) {
        if (nodeInfo.parentIndex === i++) {
          return n;
        }
      }
    } else {
      return root;
    }
  }

  // construct `$` map (from id annotations)
  function applyIdToMap(inst, map, node, nodeInfo) {
    if (nodeInfo.id) {
      map[nodeInfo.id] = node;
    }
  }

  // install event listeners (from event annotations)
  function applyEventListener(inst, node, nodeInfo) {
    if (nodeInfo.events && nodeInfo.events.length) {
      for (let j=0, e$=nodeInfo.events, e; (j<e$.length) && (e=e$[j]); j++) {
        inst._addMethodEventListenerToNode(node, e.name, e.value, inst);
      }
    }
  }

  // push configuration references at configure time
  function applyTemplateInfo(inst, node, nodeInfo, parentTemplateInfo) {
    if (nodeInfo.templateInfo) {
      // Give the node an instance of this templateInfo and set its parent
      node._templateInfo = nodeInfo.templateInfo;
      node._parentTemplateInfo = parentTemplateInfo;
    }
  }

  function createNodeEventHandler(context, eventName, methodName) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    context = context._methodHost || context;
    let handler = function(e) {
      if (context[methodName]) {
        context[methodName](e, e.detail);
      } else {
        console.warn('listener method `' + methodName + '` not defined');
      }
    };
    return handler;
  }

  /**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */
  const TemplateStamp = dedupingMixin(
      /**
       * @template T
       * @param {function(new:T)} superClass Class to apply mixin to.
       * @return {function(new:T)} superClass with mixin applied.
       */
      (superClass) => {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_TemplateStamp}
     */
    class TemplateStamp extends superClass {

      /**
       * Scans a template to produce template metadata.
       *
       * Template-specific metadata are stored in the object returned, and node-
       * specific metadata are stored in objects in its flattened `nodeInfoList`
       * array.  Only nodes in the template that were parsed as nodes of
       * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
       * contains an `index` (`childNodes` index in parent) and optionally
       * `parent`, which points to node info of its parent (including its index).
       *
       * The template metadata object returned from this method has the following
       * structure (many fields optional):
       *
       * ```js
       *   {
       *     // Flattened list of node metadata (for nodes that generated metadata)
       *     nodeInfoList: [
       *       {
       *         // `id` attribute for any nodes with id's for generating `$` map
       *         id: {string},
       *         // `on-event="handler"` metadata
       *         events: [
       *           {
       *             name: {string},   // event name
       *             value: {string},  // handler method name
       *           }, ...
       *         ],
       *         // Notes when the template contained a `<slot>` for shady DOM
       *         // optimization purposes
       *         hasInsertionPoint: {boolean},
       *         // For nested `<template>`` nodes, nested template metadata
       *         templateInfo: {object}, // nested template metadata
       *         // Metadata to allow efficient retrieval of instanced node
       *         // corresponding to this metadata
       *         parentInfo: {number},   // reference to parent nodeInfo>
       *         parentIndex: {number},  // index in parent's `childNodes` collection
       *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
       *       },
       *       ...
       *     ],
       *     // When true, the template had the `strip-whitespace` attribute
       *     // or was nested in a template with that setting
       *     stripWhitespace: {boolean},
       *     // For nested templates, nested template content is moved into
       *     // a document fragment stored here; this is an optimization to
       *     // avoid the cost of nested template cloning
       *     content: {DocumentFragment}
       *   }
       * ```
       *
       * This method kicks off a recursive treewalk as follows:
       *
       * ```
       *    _parseTemplate <---------------------+
       *      _parseTemplateContent              |
       *        _parseTemplateNode  <------------|--+
       *          _parseTemplateNestedTemplate --+  |
       *          _parseTemplateChildNodes ---------+
       *          _parseTemplateNodeAttributes
       *            _parseTemplateNodeAttribute
       *
       * ```
       *
       * These methods may be overridden to add custom metadata about templates
       * to either `templateInfo` or `nodeInfo`.
       *
       * Note that this method may be destructive to the template, in that
       * e.g. event annotations may be removed after being noted in the
       * template metadata.
       *
       * @param {!HTMLTemplateElement} template Template to parse
       * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
       *   template, for parsing nested templates
       * @return {!TemplateInfo} Parsed template metadata
       * @nocollapse
       */
      static _parseTemplate(template, outerTemplateInfo) {
        // since a template may be re-used, memo-ize metadata
        if (!template._templateInfo) {
          // TODO(rictic): fix typing
          let /** ? */ templateInfo = template._templateInfo = {};
          templateInfo.nodeInfoList = [];
          templateInfo.nestedTemplate = Boolean(outerTemplateInfo);
          templateInfo.stripWhiteSpace =
            (outerTemplateInfo && outerTemplateInfo.stripWhiteSpace) ||
            (template.hasAttribute && template.hasAttribute('strip-whitespace'));
           // TODO(rictic): fix typing
           this._parseTemplateContent(
               template, templateInfo, /** @type {?} */ ({parent: null}));
        }
        return template._templateInfo;
      }

      /**
       * See docs for _parseTemplateNode.
       *
       * @param {!HTMLTemplateElement} template .
       * @param {!TemplateInfo} templateInfo .
       * @param {!NodeInfo} nodeInfo .
       * @return {boolean} .
       * @nocollapse
       */
      static _parseTemplateContent(template, templateInfo, nodeInfo) {
        return this._parseTemplateNode(template.content, templateInfo, nodeInfo);
      }

      /**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNode(node, templateInfo, nodeInfo) {
        let noted = false;
        let element = /** @type {!HTMLTemplateElement} */ (node);
        if (element.localName == 'template' && !element.hasAttribute('preserve-content')) {
          noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
        } else if (element.localName === 'slot') {
          // For ShadyDom optimization, indicating there is an insertion point
          templateInfo.hasInsertionPoint = true;
        }
        fixPlaceholder(element);
        if (element.firstChild) {
          this._parseTemplateChildNodes(element, templateInfo, nodeInfo);
        }
        if (element.hasAttributes && element.hasAttributes()) {
          noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
        }
        // Checking `nodeInfo.noted` allows a child node of this node (who gets
        // access to `parentInfo`) to cause the parent to be noted, which
        // otherwise has no return path via `_parseTemplateChildNodes` (used by
        // some optimizations)
        return noted || nodeInfo.noted;
      }

      /**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */
      static _parseTemplateChildNodes(root, templateInfo, nodeInfo) {
        if (root.localName === 'script' || root.localName === 'style') {
          return;
        }
        for (let node=root.firstChild, parentIndex=0, next; node; node=next) {
          // Wrap templates
          if (node.localName == 'template') {
            node = wrapTemplateExtension(node);
          }
          // collapse adjacent textNodes: fixes an IE issue that can cause
          // text nodes to be inexplicably split =(
          // note that root.normalize() should work but does not so we do this
          // manually.
          next = node.nextSibling;
          if (node.nodeType === Node.TEXT_NODE) {
            let /** Node */ n = next;
            while (n && (n.nodeType === Node.TEXT_NODE)) {
              node.textContent += n.textContent;
              next = n.nextSibling;
              root.removeChild(n);
              n = next;
            }
            // optionally strip whitespace
            if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
              root.removeChild(node);
              continue;
            }
          }
          let childInfo =
              /** @type {!NodeInfo} */ ({parentIndex, parentInfo: nodeInfo});
          if (this._parseTemplateNode(node, templateInfo, childInfo)) {
            childInfo.infoIndex = templateInfo.nodeInfoList.push(childInfo) - 1;
          }
          // Increment if not removed
          if (node.parentNode) {
            parentIndex++;
          }
        }
      }

      /**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
        // TODO(rictic): the type of node should be non-null
        let element = /** @type {!HTMLTemplateElement} */ (node);
        let templateInfo = this._parseTemplate(element, outerTemplateInfo);
        let content = templateInfo.content =
            element.content.ownerDocument.createDocumentFragment();
        content.appendChild(element.content);
        nodeInfo.templateInfo = templateInfo;
        return true;
      }

      /**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current
       *     template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
        // Make copy of original attribute list, since the order may change
        // as attributes are added and removed
        let noted = false;
        let attrs = Array.from(node.attributes);
        for (let i=attrs.length-1, a; (a=attrs[i]); i--) {
          noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a.name, a.value) || noted;
        }
        return noted;
      }

      /**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
        // events (on-*)
        if (name.slice(0, 3) === 'on-') {
          node.removeAttribute(name);
          nodeInfo.events = nodeInfo.events || [];
          nodeInfo.events.push({
            name: name.slice(3),
            value
          });
          return true;
        }
        // static id
        else if (name === 'id') {
          nodeInfo.id = value;
          return true;
        }
        return false;
      }

      /**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       * @nocollapse
       */
      static _contentForTemplate(template) {
        let templateInfo = /** @type {HTMLTemplateElementWithInfo} */ (template)._templateInfo;
        return (templateInfo && templateInfo.content) || template.content;
      }

      /**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @param {TemplateInfo=} templateInfo Optional template info associated
       *   with the template to be stamped; if omitted the template will be
       *   automatically parsed.
       * @return {!StampedTemplate} Cloned template content
       * @override
       */
      _stampTemplate(template, templateInfo) {
        // Polyfill support: bootstrap the template if it has not already been
        if (template && !template.content &&
            window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
          HTMLTemplateElement.decorate(template);
        }
        // Accepting the `templateInfo` via an argument allows for creating
        // instances of the `templateInfo` by the caller, useful for adding
        // instance-time information to the prototypical data
        templateInfo = templateInfo || this.constructor._parseTemplate(template);
        let nodeInfo = templateInfo.nodeInfoList;
        let content = templateInfo.content || template.content;
        let dom = /** @type {DocumentFragment} */ (document.importNode(content, true));
        // NOTE: ShadyDom optimization indicating there is an insertion point
        dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
        let nodes = dom.nodeList = new Array(nodeInfo.length);
        dom.$ = {};
        for (let i=0, l=nodeInfo.length, info; (i<l) && (info=nodeInfo[i]); i++) {
          let node = nodes[i] = findTemplateNode(dom, info);
          applyIdToMap(this, dom.$, node, info);
          applyTemplateInfo(this, node, info, templateInfo);
          applyEventListener(this, node, info);
        }
        dom = /** @type {!StampedTemplate} */(dom); // eslint-disable-line no-self-assign
        return dom;
      }

      /**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */
      _addMethodEventListenerToNode(node, eventName, methodName, context) {
        context = context || node;
        let handler = createNodeEventHandler(context, eventName, methodName);
        this._addEventListenerToNode(node, eventName, handler);
        return handler;
      }

      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */
      _addEventListenerToNode(node, eventName, handler) {
        node.addEventListener(eventName, handler);
      }

      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */
      _removeEventListenerFromNode(node, eventName, handler) {
        node.removeEventListener(eventName, handler);
      }

    }

    return TemplateStamp;

  });

  /**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */

  // Monotonically increasing unique ID used for de-duping effects triggered
  // from multiple properties in the same turn
  let dedupeId = 0;

  const NOOP = [];

  /**
   * Property effect types; effects are stored on the prototype using these keys
   * @enum {string}
   */
  const TYPES = {
    COMPUTE: '__computeEffects',
    REFLECT: '__reflectEffects',
    NOTIFY: '__notifyEffects',
    PROPAGATE: '__propagateEffects',
    OBSERVE: '__observeEffects',
    READ_ONLY: '__readOnly'
  };

  const COMPUTE_INFO = '__computeInfo';

  /** @const {!RegExp} */
  const capitalAttributeRegex = /[A-Z]/;

  /**
   * Ensures that the model has an own-property map of effects for the given type.
   * The model may be a prototype or an instance.
   *
   * Property effects are stored as arrays of effects by property in a map,
   * by named type on the model. e.g.
   *
   *   __computeEffects: {
   *     foo: [ ... ],
   *     bar: [ ... ]
   *   }
   *
   * If the model does not yet have an effect map for the type, one is created
   * and returned.  If it does, but it is not an own property (i.e. the
   * prototype had effects), the the map is deeply cloned and the copy is
   * set on the model and returned, ready for new effects to be added.
   *
   * @param {Object} model Prototype or instance
   * @param {string} type Property effect type
   * @param {boolean=} cloneArrays Clone any arrays assigned to the map when
   *   extending a superclass map onto this subclass
   * @return {Object} The own-property map of effects for the given type
   * @private
   */
  function ensureOwnEffectMap(model, type, cloneArrays) {
    let effects = model[type];
    if (!effects) {
      effects = model[type] = {};
    } else if (!model.hasOwnProperty(type)) {
      effects = model[type] = Object.create(model[type]);
      if (cloneArrays) {
        for (let p in effects) {
          let protoFx = effects[p];
          // Perf optimization over Array.slice
          let instFx = effects[p] = Array(protoFx.length);
          for (let i=0; i<protoFx.length; i++) {
            instFx[i] = protoFx[i];
          }
        }
      }
    }
    return effects;
  }

  // -- effects ----------------------------------------------

  /**
   * Runs all effects of a given type for the given set of property changes
   * on an instance.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {?Object} effects Object map of property-to-Array of effects
   * @param {?Object} props Bag of current property changes
   * @param {?Object=} oldProps Bag of previous values for changed properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */
  function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
    if (effects) {
      let ran = false;
      const id = dedupeId++;
      for (let prop in props) {
        // Inline `runEffectsForProperty` for perf.
        let rootProperty = hasPaths ? root(prop) : prop;
        let fxs = effects[rootProperty];
        if (fxs) {
          for (let i=0, l=fxs.length, fx; (i<l) && (fx=fxs[i]); i++) {
            if ((!fx.info || fx.info.lastRun !== id) &&
                (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
              if (fx.info) {
                fx.info.lastRun = id;
              }
              fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
              ran = true;
            }
          }
        }
      }
      return ran;
    }
    return false;
  }

  /**
   * Runs a list of effects for a given property.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {!Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */
  function runEffectsForProperty(inst, effects, dedupeId, prop, props, oldProps, hasPaths, extraArgs) {
    let ran = false;
    let rootProperty = hasPaths ? root(prop) : prop;
    let fxs = effects[rootProperty];
    if (fxs) {
      for (let i=0, l=fxs.length, fx; (i<l) && (fx=fxs[i]); i++) {
        if ((!fx.info || fx.info.lastRun !== dedupeId) &&
            (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          if (fx.info) {
            fx.info.lastRun = dedupeId;
          }
          fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
          ran = true;
        }
      }
    }
    return ran;
  }

  /**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {?DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */
  function pathMatchesTrigger(path, trigger) {
    if (trigger) {
      let triggerPath = /** @type {string} */ (trigger.name);
      return (triggerPath == path) ||
          !!(trigger.structured && isAncestor(triggerPath, path)) ||
          !!(trigger.wildcard && isDescendant(triggerPath, path));
    } else {
      return true;
    }
  }

  /**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runObserverEffect(inst, property, props, oldProps, info) {
    let fn = typeof info.method === "string" ? inst[info.method] : info.method;
    let changedProp = info.property;
    if (fn) {
      fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
    } else if (!info.dynamicFn) {
      console.warn('observer method `' + info.method + '` not defined');
    }
  }

  /**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
    // Notify
    let fxs = inst[TYPES.NOTIFY];
    let notified;
    let id = dedupeId++;
    // Try normal notify effects; if none, fall back to try path notification
    for (let prop in notifyProps) {
      if (notifyProps[prop]) {
        if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
          notified = true;
        } else if (hasPaths && notifyPath(inst, prop, props)) {
          notified = true;
        }
      }
    }
    // Flush host if we actually notified and host was batching
    // And the host has already initialized clients; this prevents
    // an issue with a host observing data changes before clients are ready.
    let host;
    if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
      host._invalidateProperties();
    }
  }

  /**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */
  function notifyPath(inst, path, props) {
    let rootProperty = root(path);
    if (rootProperty !== path) {
      let eventName = camelToDashCase(rootProperty) + '-changed';
      dispatchNotifyEvent(inst, eventName, props[path], path);
      return true;
    }
    return false;
  }

  /**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} eventName The name of the event to send
   *     ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property
   *     changed, the path that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */
  function dispatchNotifyEvent(inst, eventName, value, path) {
    let detail = {
      value: value,
      queueProperty: true
    };
    if (path) {
      detail.path = path;
    }
    // As a performance optimization, we could elide the wrap here since notifying
    // events are non-bubbling and shouldn't need retargeting. However, a very
    // small number of internal tests failed in obscure ways, which may indicate
    // user code relied on timing differences resulting from ShadyDOM flushing
    // as a result of the wrapped `dispatchEvent`.
    wrap(/** @type {!HTMLElement} */(inst)).dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  /**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
    let rootProperty = hasPaths ? root(property) : property;
    let path = rootProperty != property ? property : null;
    let value = path ? get(inst, path) : inst.__data[property];
    if (path && value === undefined) {
      value = props[property];  // specifically for .splices
    }
    dispatchNotifyEvent(inst, info.eventName, value, path);
  }

  /**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!Polymer_PropertyEffects} inst Host element instance handling the
   *     notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */
  function handleNotification(event, inst, fromProp, toPath, negate) {
    let value;
    let detail = /** @type {Object} */(event.detail);
    let fromPath = detail && detail.path;
    if (fromPath) {
      toPath = translate(fromProp, toPath, fromPath);
      value = detail && detail.value;
    } else {
      value = event.currentTarget[fromProp];
    }
    value = negate ? !value : value;
    if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
      if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath))
        && (!detail || !detail.queueProperty)) {
        inst._invalidateProperties();
      }
    }
  }

  /**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runReflectEffect(inst, property, props, oldProps, info) {
    let value = inst.__data[property];
    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, info.attrName, 'attribute', /** @type {Node} */(inst));
    }
    inst._propertyToAttribute(property, info.attrName, value);
  }

  /**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {?Object} changedProps Bag of changed properties
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
    let computeEffects = inst[TYPES.COMPUTE];
    if (computeEffects) {
      if (orderedComputed) {
        // Runs computed effects in efficient order by keeping a topologically-
        // sorted queue of compute effects to run, and inserting subsequently
        // invalidated effects as they are run
        dedupeId++;
        const order = getComputedOrder(inst);
        const queue = [];
        for (let p in changedProps) {
          enqueueEffectsFor(p, computeEffects, queue, order, hasPaths);
        }
        let info;
        while ((info = queue.shift())) {
          if (runComputedEffect(inst, '', changedProps, oldProps, info)) {
            enqueueEffectsFor(info.methodInfo, computeEffects, queue, order, hasPaths);
          }
        }
        Object.assign(/** @type {!Object} */ (oldProps), inst.__dataOld);
        Object.assign(/** @type {!Object} */ (changedProps), inst.__dataPending);
        inst.__dataPending = null;
      } else {
        // Original Polymer 2.x computed effects order, which continues running
        // effects until no further computed properties have been invalidated
        let inputProps = changedProps;
        while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
          Object.assign(/** @type {!Object} */ (oldProps), inst.__dataOld);
          Object.assign(/** @type {!Object} */ (changedProps), inst.__dataPending);
          inputProps = inst.__dataPending;
          inst.__dataPending = null;
        }
      }
    }
  }

  /**
   * Inserts a computed effect into a queue, given the specified order. Performs
   * the insert using a binary search.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {Object} info Property effects metadata
   * @param {Array<Object>} queue Ordered queue of effects
   * @param {Map<string,number>} order Map of computed property name->topological
   *   sort order
   */
  const insertEffect = (info, queue, order) => {
    let start = 0;
    let end = queue.length - 1;
    let idx = -1;
    while (start <= end) {
      const mid = (start + end) >> 1;
      // Note `methodInfo` is where the computed property name is stored in
      // the effect metadata
      const cmp = order.get(queue[mid].methodInfo) - order.get(info.methodInfo);
      if (cmp < 0) {
        start = mid + 1;
      } else if (cmp > 0) {
        end = mid - 1;
      } else {
        idx = mid;
        break;
      }
    }
    if (idx < 0) {
      idx = end + 1;
    }
    queue.splice(idx, 0, info);
  };

  /**
   * Inserts all downstream computed effects invalidated by the specified property
   * into the topologically-sorted queue of effects to be run.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {string} prop Property name
   * @param {Object} computeEffects Computed effects for this element
   * @param {Array<Object>} queue Topologically-sorted queue of computed effects
   *   to be run
   * @param {Map<string,number>} order Map of computed property name->topological
   *   sort order
   * @param {boolean} hasPaths True with `changedProps` contains one or more paths
   */
  const enqueueEffectsFor = (prop, computeEffects, queue, order, hasPaths) => {
    const rootProperty = hasPaths ? root(prop) : prop;
    const fxs = computeEffects[rootProperty];
    if (fxs) {
      for (let i=0; i<fxs.length; i++) {
        const fx = fxs[i];
        if ((fx.info.lastRun !== dedupeId) &&
            (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          fx.info.lastRun = dedupeId;
          insertEffect(fx.info, queue, order);
        }
      }
    }
  };

  /**
   * Generates and retrieves a memoized map of computed property name to its
   * topologically-sorted order.
   *
   * The map is generated by first assigning a "dependency count" to each property
   * (defined as number properties it depends on, including its method for
   * "dynamic functions"). Any properties that have no dependencies are added to
   * the `ready` queue, which are properties whose order can be added to the final
   * order map. Properties are popped off the `ready` queue one by one and a.) added as
   * the next property in the order map, and b.) each property that it is a
   * dependency for has its dep count decremented (and if that property's dep
   * count goes to zero, it is added to the `ready` queue), until all properties
   * have been visited and ordered.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {!Polymer_PropertyEffects} inst The instance to retrieve the computed
   *   effect order for.
   * @return {Map<string,number>} Map of computed property name->topological sort
   *   order
   */
  function getComputedOrder(inst) {
    let ordered = inst.constructor.__orderedComputedDeps;
    if (!ordered) {
      ordered = new Map();
      const effects = inst[TYPES.COMPUTE];
      let {counts, ready, total} = dependencyCounts(inst);
      let curr;
      while ((curr = ready.shift())) {
        ordered.set(curr, ordered.size);
        const computedByCurr = effects[curr];
        if (computedByCurr) {
          computedByCurr.forEach(fx => {
            // Note `methodInfo` is where the computed property name is stored
            const computedProp = fx.info.methodInfo;
            --total;
            if (--counts[computedProp] === 0) {
              ready.push(computedProp);
            }
          });
        }
      }
      if (total !== 0) {
        const el = /** @type {HTMLElement} */ (inst);
        console.warn(`Computed graph for ${el.localName} incomplete; circular?`);
      }
      inst.constructor.__orderedComputedDeps = ordered;
    }
    return ordered;
  }

  /**
   * Generates a map of property-to-dependency count (`counts`, where "dependency
   * count" is the number of dependencies a given property has assuming it is a
   * computed property, otherwise 0).  It also returns a pre-populated list of
   * `ready` properties that have no dependencies and a `total` count, which is
   * used for error-checking the graph.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {!Polymer_PropertyEffects} inst The instance to generate dependency
   *   counts for.
   * @return {!Object} Object containing `counts` map (property-to-dependency
   *   count) and pre-populated `ready` array of properties that had zero
   *   dependencies.
   */
  function dependencyCounts(inst) {
    const infoForComputed = inst[COMPUTE_INFO];
    const counts = {};
    const computedDeps = inst[TYPES.COMPUTE];
    const ready = [];
    let total = 0;
    // Count dependencies for each computed property
    for (let p in infoForComputed) {
      const info = infoForComputed[p];
      // Be sure to add the method name itself in case of "dynamic functions"
      total += counts[p] =
        info.args.filter(a => !a.literal).length + (info.dynamicFn ? 1 : 0);
    }
    // Build list of ready properties (that aren't themselves computed)
    for (let p in computedDeps) {
      if (!infoForComputed[p]) {
        ready.push(p);
      }
    }
    return {counts, ready, total};
  }

  /**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {?Object} changedProps Bag of current property changes
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {boolean} True when the property being computed changed
   * @private
   */
  function runComputedEffect(inst, property, changedProps, oldProps, info) {
    // Dirty check dependencies and run if any invalid
    let result = runMethodEffect(inst, property, changedProps, oldProps, info);
    // Abort if method returns a no-op result
    if (result === NOOP) {
      return false;
    }
    let computedProp = info.methodInfo;
    if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
      return inst._setPendingProperty(computedProp, result, true);
    } else {
      inst[computedProp] = result;
      return false;
    }
  }

  /**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!Polymer_PropertyEffects} inst The instance whose props are changing
   * @param {string} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */
  function computeLinkedPaths(inst, path, value) {
    let links = inst.__dataLinkedPaths;
    if (links) {
      let link;
      for (let a in links) {
        let b = links[a];
        if (isDescendant(a, path)) {
          link = translate(a, b, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        } else if (isDescendant(b, path)) {
          link = translate(b, a, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        }
      }
    }
  }

  // -- bindings ----------------------------------------------

  /**
   * Adds binding metadata to the current `nodeInfo`, and binding effects
   * for all part dependencies to `templateInfo`.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {NodeInfo} nodeInfo Node metadata for current template node
   * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
   * @param {string} target Target property name
   * @param {!Array<!BindingPart>} parts Array of binding part metadata
   * @param {string=} literal Literal text surrounding binding parts (specified
   *   only for 'property' bindings, since these must be initialized as part
   *   of boot-up)
   * @return {void}
   * @private
   */
  function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
    // Create binding metadata and add to nodeInfo
    nodeInfo.bindings = nodeInfo.bindings || [];
    let /** Binding */ binding = { kind, target, parts, literal, isCompound: (parts.length !== 1) };
    nodeInfo.bindings.push(binding);
    // Add listener info to binding metadata
    if (shouldAddListener(binding)) {
      let {event, negate} = binding.parts[0];
      binding.listenerEvent = event || (camelToDashCase(target) + '-changed');
      binding.listenerNegate = negate;
    }
    // Add "propagate" property effects to templateInfo
    let index = templateInfo.nodeInfoList.length;
    for (let i=0; i<binding.parts.length; i++) {
      let part = binding.parts[i];
      part.compoundIndex = i;
      addEffectForBindingPart(constructor, templateInfo, binding, part, index);
    }
  }

  /**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */
  function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
    if (!part.literal) {
      if (binding.kind === 'attribute' && binding.target[0] === '-') {
        console.warn('Cannot set attribute ' + binding.target +
          ' because "-" is not a valid attribute starting character');
      } else {
        let dependencies = part.dependencies;
        let info = { index, binding, part, evaluator: constructor };
        for (let j=0; j<dependencies.length; j++) {
          let trigger = dependencies[j];
          if (typeof trigger == 'string') {
            trigger = parseArg(trigger);
            trigger.wildcard = true;
          }
          constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
            fn: runBindingEffect,
            info, trigger
          });
        }
      }
    }
  }

  /**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */
  function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
    let node = nodeList[info.index];
    let binding = info.binding;
    let part = info.part;
    // Subpath notification: transform path and set to client
    // e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
    if (hasPaths && part.source && (path.length > part.source.length) &&
        (binding.kind == 'property') && !binding.isCompound &&
        node.__isPropertyEffectsClient &&
        node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
      let value = props[path];
      path = translate(part.source, binding.target, path);
      if (node._setPendingPropertyOrPath(path, value, false, true)) {
        inst._enqueueClient(node);
      }
    } else {
      let value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths);
      // Propagate value to child
      // Abort if value is a no-op result
      if (value !== NOOP) {
        applyBindingValue(inst, node, binding, part, value);
      }
    }
  }

  /**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!Polymer_PropertyEffects} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */
  function applyBindingValue(inst, node, binding, part, value) {
    value = computeBindingValue(node, value, binding, part);
    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, binding.target, binding.kind, node);
    }
    if (binding.kind == 'attribute') {
      // Attribute binding
      inst._valueToNodeAttribute(/** @type {Element} */(node), value, binding.target);
    } else {
      // Property binding
      let prop = binding.target;
      if (node.__isPropertyEffectsClient &&
          node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
        if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
          if (node._setPendingProperty(prop, value)) {
            inst._enqueueClient(node);
          }
        }
      } else {
        // In legacy no-batching mode, bindings applied before dataReady are
        // equivalent to the "apply config" phase, which only set managed props
        inst._setUnmanagedPropertyToNode(node, prop, value);
      }
    }
  }

  /**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */
  function computeBindingValue(node, value, binding, part) {
    if (binding.isCompound) {
      let storage = node.__dataCompoundStorage[binding.target];
      storage[part.compoundIndex] = value;
      value = storage.join('');
    }
    if (binding.kind !== 'attribute') {
      // Some browsers serialize `undefined` to `"undefined"`
      if (binding.target === 'textContent' ||
          (binding.target === 'value' &&
            (node.localName === 'input' || node.localName === 'textarea'))) {
        value = value == undefined ? '' : value;
      }
    }
    return value;
  }

  /**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */
  function shouldAddListener(binding) {
    return Boolean(binding.target) &&
           binding.kind != 'attribute' &&
           binding.kind != 'text' &&
           !binding.isCompound &&
           binding.parts[0].mode === '{';
  }

  /**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!Polymer_PropertyEffects} inst Instance that bas been previously
   *     bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */
  function setupBindings(inst, templateInfo) {
    // Setup compound storage, dataHost, and notify listeners
    let {nodeList, nodeInfoList} = templateInfo;
    if (nodeInfoList.length) {
      for (let i=0; i < nodeInfoList.length; i++) {
        let info = nodeInfoList[i];
        let node = nodeList[i];
        let bindings = info.bindings;
        if (bindings) {
          for (let i=0; i<bindings.length; i++) {
            let binding = bindings[i];
            setupCompoundStorage(node, binding);
            addNotifyListener(node, inst, binding);
          }
        }
        // This ensures all bound elements have a host set, regardless
        // of whether they upgrade synchronous to creation
        node.__dataHost = inst;
      }
    }
  }

  /**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */
  function setupCompoundStorage(node, binding) {
    if (binding.isCompound) {
      // Create compound storage map
      let storage = node.__dataCompoundStorage ||
        (node.__dataCompoundStorage = {});
      let parts = binding.parts;
      // Copy literals from parts into storage for this binding
      let literals = new Array(parts.length);
      for (let j=0; j<parts.length; j++) {
        literals[j] = parts[j].literal;
      }
      let target = binding.target;
      storage[target] = literals;
      // Configure properties with their literal parts
      if (binding.literal && binding.kind == 'property') {
        // Note, className needs style scoping so this needs wrapping.
        // We may also want to consider doing this for `textContent` and
        // `innerHTML`.
        if (target === 'className') {
          node = wrap(node);
        }
        node[target] = binding.literal;
      }
    }
  }

  /**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!Polymer_PropertyEffects} inst Host element instance to handle
   *     notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */
  function addNotifyListener(node, inst, binding) {
    if (binding.listenerEvent) {
      let part = binding.parts[0];
      node.addEventListener(binding.listenerEvent, function(e) {
        handleNotification(e, inst, binding.target, part.source, part.negate);
      });
    }
  }

  // -- for method-based effects (complexObserver & computed) --------------

  /**
   * Adds property effects for each argument in the method signature (and
   * optionally, for the method name if `dynamic` is true) that calls the
   * provided effect function.
   *
   * @param {Element | Object} model Prototype or instance
   * @param {!MethodSignature} sig Method signature metadata
   * @param {string} type Type of property effect to add
   * @param {Function} effectFn Function to run when arguments change
   * @param {*=} methodInfo Effect-specific information to be included in
   *   method effect metadata
   * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
   *   method names should be included as a dependency to the effect. Note,
   *   defaults to true if the signature is static (sig.static is true).
   * @return {!Object} Effect metadata for this method effect
   * @private
   */
  function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
    dynamicFn = sig.static || (dynamicFn &&
      (typeof dynamicFn !== 'object' || dynamicFn[sig.methodName]));
    let info = {
      methodName: sig.methodName,
      args: sig.args,
      methodInfo,
      dynamicFn
    };
    for (let i=0, arg; (i<sig.args.length) && (arg=sig.args[i]); i++) {
      if (!arg.literal) {
        model._addPropertyEffect(arg.rootProperty, type, {
          fn: effectFn, info: info, trigger: arg
        });
      }
    }
    if (dynamicFn) {
      model._addPropertyEffect(sig.methodName, type, {
        fn: effectFn, info: info
      });
    }
    return info;
  }

  /**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */
  function runMethodEffect(inst, property, props, oldProps, info) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    let context = inst._methodHost || inst;
    let fn = context[info.methodName];
    if (fn) {
      let args = inst._marshalArgs(info.args, property, props);
      return args === NOOP ? NOOP : fn.apply(context, args);
    } else if (!info.dynamicFn) {
      console.warn('method `' + info.methodName + '` not defined');
    }
  }

  const emptyArray = [];

  // Regular expressions used for binding
  const IDENT  = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
  const NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
  const SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
  const DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
  const STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
  const ARGUMENT = '(?:(' + IDENT + '|' + NUMBER + '|' +  STRING + ')\\s*' + ')';
  const ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
  const ARGUMENT_LIST = '(?:' + '\\(\\s*' +
                                '(?:' + ARGUMENTS + '?' + ')' +
                              '\\)\\s*' + ')';
  const BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')'; // Group 3
  const OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
  const CLOSE_BRACKET = '(?:]]|}})';
  const NEGATE = '(?:(!)\\s*)?'; // Group 2
  const EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
  const bindingRegex = new RegExp(EXPRESSION, "g");

  /**
   * Create a string from binding parts of all the literal parts
   *
   * @param {!Array<BindingPart>} parts All parts to stringify
   * @return {string} String made from the literal parts
   */
  function literalFromParts(parts) {
    let s = '';
    for (let i=0; i<parts.length; i++) {
      let literal = parts[i].literal;
      s += literal || '';
    }
    return s;
  }

  /**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */
  function parseMethod(expression) {
    // tries to match valid javascript property names
    let m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
    if (m) {
      let methodName = m[1];
      let sig = { methodName, static: true, args: emptyArray };
      if (m[2].trim()) {
        // replace escaped commas with comma entity, split on un-escaped commas
        let args = m[2].replace(/\\,/g, '&comma;').split(',');
        return parseArgs(args, sig);
      } else {
        return sig;
      }
    }
    return null;
  }

  /**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */
  function parseArgs(argList, sig) {
    sig.args = argList.map(function(rawArg) {
      let arg = parseArg(rawArg);
      if (!arg.literal) {
        sig.static = false;
      }
      return arg;
    }, this);
    return sig;
  }

  /**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */
  function parseArg(rawArg) {
    // clean up whitespace
    let arg = rawArg.trim()
      // replace comma entity with comma
      .replace(/&comma;/g, ',')
      // repair extra escape sequences; note only commas strictly need
      // escaping, but we allow any other char to be escaped since its
      // likely users will do this
      .replace(/\\(.)/g, '$1')
      ;
    // basic argument descriptor
    let a = {
      name: arg,
      value: '',
      literal: false
    };
    // detect literal value (must be String or Number)
    let fc = arg[0];
    if (fc === '-') {
      fc = arg[1];
    }
    if (fc >= '0' && fc <= '9') {
      fc = '#';
    }
    switch(fc) {
      case "'":
      case '"':
        a.value = arg.slice(1, -1);
        a.literal = true;
        break;
      case '#':
        a.value = Number(arg);
        a.literal = true;
        break;
    }
    // if not literal, look for structured path
    if (!a.literal) {
      a.rootProperty = root(arg);
      // detect structured path (has dots)
      a.structured = isPath(arg);
      if (a.structured) {
        a.wildcard = (arg.slice(-2) == '.*');
        if (a.wildcard) {
          a.name = arg.slice(0, -2);
        }
      }
    }
    return a;
  }

  function getArgValue(data, props, path) {
    let value = get(data, path);
    // when data is not stored e.g. `splices`, get the value from changedProps
    // TODO(kschaaf): Note, this can cause a rare issue where the wildcard
    // info.value could pull a stale value out of changedProps during a reentrant
    // change that sets the value back to undefined.
    // https://github.com/Polymer/polymer/issues/5479
    if (value === undefined) {
      value = props[path];
    }
    return value;
  }

  // data api

  /**
   * Sends array splice notifications (`.splices` and `.length`)
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {Array} splices Array of splice records
   * @return {void}
   * @private
   */
  function notifySplices(inst, array, path, splices) {
    const splicesData = { indexSplices: splices };
    // Legacy behavior stored splices in `__data__` so it was *not* ephemeral.
    // To match this behavior, we store splices directly on the array.
    if (legacyUndefined && !inst._overrideLegacyUndefined) {
      array.splices = splicesData;
    }
    inst.notifyPath(path + '.splices', splicesData);
    inst.notifyPath(path + '.length', array.length);
    // Clear splice data only when it's stored on the array.
    if (legacyUndefined && !inst._overrideLegacyUndefined) {
      splicesData.indexSplices = [];
    }
  }

  /**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */
  function notifySplice(inst, array, path, index, addedCount, removed) {
    notifySplices(inst, array, path, [{
      index: index,
      addedCount: addedCount,
      removed: removed,
      object: array,
      type: 'splice'
    }]);
  }

  /**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */
  function upper(name) {
    return name[0].toUpperCase() + name.substring(1);
  }

  /**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */
  const PropertyEffects = dedupingMixin(superClass => {

    /**
     * @constructor
     * @implements {Polymer_PropertyAccessors}
     * @implements {Polymer_TemplateStamp}
     * @unrestricted
     * @private
     */
    const propertyEffectsBase = TemplateStamp(PropertyAccessors(superClass));

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyEffects}
     * @extends {propertyEffectsBase}
     * @unrestricted
     */
    class PropertyEffects extends propertyEffectsBase {

      constructor() {
        super();
        /** @type {boolean} */
        // Used to identify users of this mixin, ala instanceof
        this.__isPropertyEffectsClient = true;
        /** @type {boolean} */
        this.__dataClientsReady;
        /** @type {Array} */
        this.__dataPendingClients;
        /** @type {Object} */
        this.__dataToNotify;
        /** @type {Object} */
        this.__dataLinkedPaths;
        /** @type {boolean} */
        this.__dataHasPaths;
        /** @type {Object} */
        this.__dataCompoundStorage;
        /** @type {Polymer_PropertyEffects} */
        this.__dataHost;
        /** @type {!Object} */
        this.__dataTemp;
        /** @type {boolean} */
        this.__dataClientsInitialized;
        /** @type {!Object} */
        this.__data;
        /** @type {!Object|null} */
        this.__dataPending;
        /** @type {!Object} */
        this.__dataOld;
        /** @type {Object} */
        this.__computeEffects;
        /** @type {Object} */
        this.__computeInfo;
        /** @type {Object} */
        this.__reflectEffects;
        /** @type {Object} */
        this.__notifyEffects;
        /** @type {Object} */
        this.__propagateEffects;
        /** @type {Object} */
        this.__observeEffects;
        /** @type {Object} */
        this.__readOnly;
        /** @type {!TemplateInfo} */
        this.__templateInfo;
        /** @type {boolean} */
        this._overrideLegacyUndefined;
      }

      get PROPERTY_EFFECT_TYPES() {
        return TYPES;
      }

      /**
       * @override
       * @return {void}
       */
      _initializeProperties() {
        super._initializeProperties();
        this._registerHost();
        this.__dataClientsReady = false;
        this.__dataPendingClients = null;
        this.__dataToNotify = null;
        this.__dataLinkedPaths = null;
        this.__dataHasPaths = false;
        // May be set on instance prior to upgrade
        this.__dataCompoundStorage = this.__dataCompoundStorage || null;
        this.__dataHost = this.__dataHost || null;
        this.__dataTemp = {};
        this.__dataClientsInitialized = false;
      }

      _registerHost() {
        if (hostStack.length) {
          let host = hostStack[hostStack.length-1];
          host._enqueueClient(this);
          // This ensures even non-bound elements have a host set, as
          // long as they upgrade synchronously
          this.__dataHost = host;
        }
      }

      /**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */
      _initializeProtoProperties(props) {
        this.__data = Object.create(props);
        this.__dataPending = Object.create(props);
        this.__dataOld = {};
      }

      /**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */
      _initializeInstanceProperties(props) {
        let readOnly = this[TYPES.READ_ONLY];
        for (let prop in props) {
          if (!readOnly || !readOnly[prop]) {
            this.__dataPending = this.__dataPending || {};
            this.__dataOld = this.__dataOld || {};
            this.__data[prop] = this.__dataPending[prop] = props[prop];
          }
        }
      }

      // Prototype setup ----------------------------------------

      /**
       * Equivalent to static `addPropertyEffect` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */
      _addPropertyEffect(property, type, effect) {
        this._createPropertyAccessor(property, type == TYPES.READ_ONLY);
        // effects are accumulated into arrays per property based on type
        let effects = ensureOwnEffectMap(this, type, true)[property];
        if (!effects) {
          effects = this[type][property] = [];
        }
        effects.push(effect);
      }

      /**
       * Removes the given property effect.
       *
       * @override
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */
      _removePropertyEffect(property, type, effect) {
        let effects = ensureOwnEffectMap(this, type, true)[property];
        let idx = effects.indexOf(effect);
        if (idx >= 0) {
          effects.splice(idx, 1);
        }
      }

      /**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @override
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */
      _hasPropertyEffect(property, type) {
        let effects = this[type];
        return Boolean(effects && effects[property]);
      }

      /**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */
      _hasReadOnlyEffect(property) {
        return this._hasPropertyEffect(property, TYPES.READ_ONLY);
      }

      /**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */
      _hasNotifyEffect(property) {
        return this._hasPropertyEffect(property, TYPES.NOTIFY);
      }

      /**
       * Returns whether the current prototype/instance has a "reflect to
       * attribute" property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */
      _hasReflectEffect(property) {
        return this._hasPropertyEffect(property, TYPES.REFLECT);
      }

      /**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */
      _hasComputedEffect(property) {
        return this._hasPropertyEffect(property, TYPES.COMPUTE);
      }

      // Runtime ----------------------------------------

      /**
       * Sets a pending property or path.  If the root property of the path in
       * question had no accessor, the path is set, otherwise it is enqueued
       * via `_setPendingProperty`.
       *
       * This function isolates relatively expensive functionality necessary
       * for the public API (`set`, `setProperties`, `notifyPath`, and property
       * change listeners via {{...}} bindings), such that it is only done
       * when paths enter the system, and not at every propagation step.  It
       * also sets a `__dataHasPaths` flag on the instance which is used to
       * fast-path slower path-matching code in the property effects host paths.
       *
       * `path` can be a path string or array of path parts as accepted by the
       * public API.
       *
       * @override
       * @param {string | !Array<number|string>} path Path to set
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify Set to true if this change should
       *  cause a property notification event dispatch
       * @param {boolean=} isPathNotification If the path being set is a path
       *   notification of an already changed value, as opposed to a request
       *   to set and notify the change.  In the latter `false` case, a dirty
       *   check is performed and then the value is set to the path before
       *   enqueuing the pending property change.
       * @return {boolean} Returns true if the property/path was enqueued in
       *   the pending changes bag.
       * @protected
       */
      _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
        if (isPathNotification ||
            root(Array.isArray(path) ? path[0] : path) !== path) {
          // Dirty check changes being set to a path against the actual object,
          // since this is the entry point for paths into the system; from here
          // the only dirty checks are against the `__dataTemp` cache to prevent
          // duplicate work in the same turn only. Note, if this was a notification
          // of a change already set to a path (isPathNotification: true),
          // we always let the change through and skip the `set` since it was
          // already dirty checked at the point of entry and the underlying
          // object has already been updated
          if (!isPathNotification) {
            let old = get(this, path);
            path = /** @type {string} */ (set(this, path, value));
            // Use property-accessor's simpler dirty check
            if (!path || !super._shouldPropertyChange(path, value, old)) {
              return false;
            }
          }
          this.__dataHasPaths = true;
          if (this._setPendingProperty(/**@type{string}*/(path), value, shouldNotify)) {
            computeLinkedPaths(this, /**@type{string}*/ (path), value);
            return true;
          }
        } else {
          if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
            return this._setPendingProperty(/**@type{string}*/(path), value, shouldNotify);
          } else {
            this[path] = value;
          }
        }
        return false;
      }

      /**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @override
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */
      _setUnmanagedPropertyToNode(node, prop, value) {
        // It is a judgment call that resetting primitives is
        // "bad" and resettings objects is also "good"; alternatively we could
        // implement a whitelist of tag & property values that should never
        // be reset (e.g. <input>.value && <select>.value)
        if (value !== node[prop] || typeof value == 'object') {
          // Note, className needs style scoping so this needs wrapping.
          if (prop === 'className') {
            node = /** @type {!Node} */(wrap(node));
          }
          node[prop] = value;
        }
      }

      /**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */
      _setPendingProperty(property, value, shouldNotify) {
        let propIsPath = this.__dataHasPaths && isPath(property);
        let prevProps = propIsPath ? this.__dataTemp : this.__data;
        if (this._shouldPropertyChange(property, value, prevProps[property])) {
          if (!this.__dataPending) {
            this.__dataPending = {};
            this.__dataOld = {};
          }
          // Ensure old is captured from the last turn
          if (!(property in this.__dataOld)) {
            this.__dataOld[property] = this.__data[property];
          }
          // Paths are stored in temporary cache (cleared at end of turn),
          // which is used for dirty-checking, all others stored in __data
          if (propIsPath) {
            this.__dataTemp[property] = value;
          } else {
            this.__data[property] = value;
          }
          // All changes go into pending property bag, passed to _propertiesChanged
          this.__dataPending[property] = value;
          // Track properties that should notify separately
          if (propIsPath || (this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property])) {
            this.__dataToNotify = this.__dataToNotify || {};
            this.__dataToNotify[property] = shouldNotify;
          }
          return true;
        }
        return false;
      }

      /**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */
      _setProperty(property, value) {
        if (this._setPendingProperty(property, value, true)) {
          this._invalidateProperties();
        }
      }

      /**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */
      _invalidateProperties() {
        if (this.__dataReady) {
          this._flushProperties();
        }
      }

      /**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @override
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */
      _enqueueClient(client) {
        this.__dataPendingClients = this.__dataPendingClients || [];
        if (client !== this) {
          this.__dataPendingClients.push(client);
        }
      }

      /**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @override
       * @return {void}
       * @protected
       */
      _flushClients() {
        if (!this.__dataClientsReady) {
          this.__dataClientsReady = true;
          this._readyClients();
          // Override point where accessors are turned on; importantly,
          // this is after clients have fully readied, providing a guarantee
          // that any property effects occur only after all clients are ready.
          this.__dataReady = true;
        } else {
          this.__enableOrFlushClients();
        }
      }

      // NOTE: We ensure clients either enable or flush as appropriate. This
      // handles two corner cases:
      // (1) clients flush properly when connected/enabled before the host
      // enables; e.g.
      //   (a) Templatize stamps with no properties and does not flush and
      //   (b) the instance is inserted into dom and
      //   (c) then the instance flushes.
      // (2) clients enable properly when not connected/enabled when the host
      // flushes; e.g.
      //   (a) a template is runtime stamped and not yet connected/enabled
      //   (b) a host sets a property, causing stamped dom to flush
      //   (c) the stamped dom enables.
      __enableOrFlushClients() {
        let clients = this.__dataPendingClients;
        if (clients) {
          this.__dataPendingClients = null;
          for (let i=0; i < clients.length; i++) {
            let client = clients[i];
            if (!client.__dataEnabled) {
              client._enableProperties();
            } else if (client.__dataPending) {
              client._flushProperties();
            }
          }
        }
      }

      /**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @override
       * @return {void}
       * @protected
       */
      _readyClients() {
        this.__enableOrFlushClients();
      }

      /**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @override
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */
      setProperties(props, setReadOnly) {
        for (let path in props) {
          if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
            //TODO(kschaaf): explicitly disallow paths in setProperty?
            // wildcard observers currently only pass the first changed path
            // in the `info` object, and you could do some odd things batching
            // paths, e.g. {'foo.bar': {...}, 'foo': null}
            this._setPendingPropertyOrPath(path, props[path], true);
          }
        }
        this._invalidateProperties();
      }

      /**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */
      ready() {
        // It is important that `super.ready()` is not called here as it
        // immediately turns on accessors. Instead, we wait until `readyClients`
        // to enable accessors to provide a guarantee that clients are ready
        // before processing any accessors side effects.
        this._flushProperties();
        // If no data was pending, `_flushProperties` will not `flushClients`
        // so ensure this is done.
        if (!this.__dataClientsReady) {
          this._flushClients();
        }
        // Before ready, client notifications do not trigger _flushProperties.
        // Therefore a flush is necessary here if data has been set.
        if (this.__dataPending) {
          this._flushProperties();
        }
      }

      /**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @override
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */
      _propertiesChanged(currentProps, changedProps, oldProps) {
        // ----------------------------
        // let c = Object.getOwnPropertyNames(changedProps || {});
        // window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
        // if (window.debug) { debugger; }
        // ----------------------------
        let hasPaths = this.__dataHasPaths;
        this.__dataHasPaths = false;
        let notifyProps;
        // Compute properties
        runComputedEffects(this, changedProps, oldProps, hasPaths);
        // Clear notify properties prior to possible reentry (propagate, observe),
        // but after computing effects have a chance to add to them
        notifyProps = this.__dataToNotify;
        this.__dataToNotify = null;
        // Propagate properties to clients
        this._propagatePropertyChanges(changedProps, oldProps, hasPaths);
        // Flush clients
        this._flushClients();
        // Reflect properties
        runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths);
        // Observe properties
        runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths);
        // Notify properties to host
        if (notifyProps) {
          runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
        }
        // Clear temporary cache at end of turn
        if (this.__dataCounter == 1) {
          this.__dataTemp = {};
        }
        // ----------------------------
        // window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
        // ----------------------------
      }

      /**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @override
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */
      _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
        if (this[TYPES.PROPAGATE]) {
          runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
        }
        if (this.__templateInfo) {
          this._runEffectsForTemplate(this.__templateInfo, changedProps, oldProps, hasPaths);
        }
      }

      _runEffectsForTemplate(templateInfo, changedProps, oldProps, hasPaths) {
        const baseRunEffects = (changedProps, hasPaths) => {
          runEffects(this, templateInfo.propertyEffects, changedProps, oldProps,
            hasPaths, templateInfo.nodeList);
          for (let info=templateInfo.firstChild; info; info=info.nextSibling) {
            this._runEffectsForTemplate(info, changedProps, oldProps, hasPaths);
          }
        };
        if (templateInfo.runEffects) {
          templateInfo.runEffects(baseRunEffects, changedProps, hasPaths);
        } else {
          baseRunEffects(changedProps, hasPaths);
        }
      }

      /**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @override
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */
      linkPaths(to, from) {
        to = normalize(to);
        from = normalize(from);
        this.__dataLinkedPaths = this.__dataLinkedPaths || {};
        this.__dataLinkedPaths[to] = from;
      }

      /**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @override
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */
      unlinkPaths(path) {
        path = normalize(path);
        if (this.__dataLinkedPaths) {
          delete this.__dataLinkedPaths[path];
        }
      }

      /**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1,
       *         object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1,
       *         object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       *
       * @override
       * @return {void}
       * @public
       */
      notifySplices(path, splices) {
        let info = {path: ''};
        let array = /** @type {Array} */(get(this, path, info));
        notifySplices(this, array, info.path, splices);
      }

      /**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */
      get(path, root) {
        return get(root || this, path);
      }

      /**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
       */
      set(path, value, root) {
        if (root) {
          set(root, path, value);
        } else {
          if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][/** @type {string} */(path)]) {
            if (this._setPendingPropertyOrPath(path, value, true)) {
              this._invalidateProperties();
            }
          }
        }
      }

      /**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */
      push(path, ...items) {
        let info = {path: ''};
        let array = /** @type {Array}*/(get(this, path, info));
        let len = array.length;
        let ret = array.push(...items);
        if (items.length) {
          notifySplice(this, array, info.path, len, items.length, []);
        }
        return ret;
      }

      /**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */
      pop(path) {
        let info = {path: ''};
        let array = /** @type {Array} */(get(this, path, info));
        let hadLength = Boolean(array.length);
        let ret = array.pop();
        if (hadLength) {
          notifySplice(this, array, info.path, array.length, 0, [ret]);
        }
        return ret;
      }

      /**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {!Array} Array of removed items.
       * @public
       */
      splice(path, start, deleteCount, ...items) {
        let info = {path : ''};
        let array = /** @type {Array} */(get(this, path, info));
        // Normalize fancy native splice handling of crazy start values
        if (start < 0) {
          start = array.length - Math.floor(-start);
        } else if (start) {
          start = Math.floor(start);
        }
        // array.splice does different things based on the number of arguments
        // you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
        // do different things. In the former, the whole array is cleared. In the
        // latter, no items are removed.
        // This means that we need to detect whether 1. one of the arguments
        // is actually passed in and then 2. determine how many arguments
        // we should pass on to the native array.splice
        //
        let ret;
        // Omit any additional arguments if they were not passed in
        if (arguments.length === 2) {
          ret = array.splice(start);
        // Either start was undefined and the others were defined, but in this
        // case we can safely pass on all arguments
        //
        // Note: this includes the case where none of the arguments were passed in,
        // e.g. this.splice('array'). However, if both start and deleteCount
        // are undefined, array.splice will not modify the array (as expected)
        } else {
          ret = array.splice(start, deleteCount, ...items);
        }
        // At the end, check whether any items were passed in (e.g. insertions)
        // or if the return array contains items (e.g. deletions).
        // Only notify if items were added or deleted.
        if (items.length || ret.length) {
          notifySplice(this, array, info.path, start, items.length, ret);
        }
        return ret;
      }

      /**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */
      shift(path) {
        let info = {path: ''};
        let array = /** @type {Array} */(get(this, path, info));
        let hadLength = Boolean(array.length);
        let ret = array.shift();
        if (hadLength) {
          notifySplice(this, array, info.path, 0, 0, [ret]);
        }
        return ret;
      }

      /**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */
      unshift(path, ...items) {
        let info = {path: ''};
        let array = /** @type {Array} */(get(this, path, info));
        let ret = array.unshift(...items);
        if (items.length) {
          notifySplice(this, array, info.path, 0, items.length, []);
        }
        return ret;
      }

      /**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @override
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
       */
      notifyPath(path, value) {
        /** @type {string} */
        let propPath;
        if (arguments.length == 1) {
          // Get value if not supplied
          let info = {path: ''};
          value = get(this, path, info);
          propPath = info.path;
        } else if (Array.isArray(path)) {
          // Normalize path if needed
          propPath = normalize(path);
        } else {
          propPath = /** @type{string} */(path);
        }
        if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
          this._invalidateProperties();
        }
      }

      /**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */
      _createReadOnlyProperty(property, protectedSetter) {
        this._addPropertyEffect(property, TYPES.READ_ONLY);
        if (protectedSetter) {
          this['_set' + upper(property)] = /** @this {PropertyEffects} */function(value) {
            this._setProperty(property, value);
          };
        }
      }

      /**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method
       *     to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */
      _createPropertyObserver(property, method, dynamicFn) {
        let info = { property, method, dynamicFn: Boolean(dynamicFn) };
        this._addPropertyEffect(property, TYPES.OBSERVE, {
          fn: runObserverEffect, info, trigger: {name: property}
        });
        if (dynamicFn) {
          this._addPropertyEffect(/** @type {string} */(method), TYPES.OBSERVE, {
            fn: runObserverEffect, info, trigger: {name: method}
          });
        }
      }

      /**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */
      _createMethodObserver(expression, dynamicFn) {
        let sig = parseMethod(expression);
        if (!sig) {
          throw new Error("Malformed observer expression '" + expression + "'");
        }
        createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
      }

      /**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       */
      _createNotifyingProperty(property) {
        this._addPropertyEffect(property, TYPES.NOTIFY, {
          fn: runNotifyEffect,
          info: {
            eventName: camelToDashCase(property) + '-changed',
            property: property
          }
        });
      }

      /**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @suppress {missingProperties} go/missingfnprops
       */
      _createReflectedProperty(property) {
        let attr = this.constructor.attributeNameForProperty(property);
        if (attr[0] === '-') {
          console.warn('Property ' + property + ' cannot be reflected to attribute ' +
            attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
        } else {
          this._addPropertyEffect(property, TYPES.REFLECT, {
            fn: runReflectEffect,
            info: {
              attrName: attr
            }
          });
        }
      }

      /**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */
      _createComputedProperty(property, expression, dynamicFn) {
        let sig = parseMethod(expression);
        if (!sig) {
          throw new Error("Malformed computed expression '" + expression + "'");
        }
        const info = createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
        // Effects are normally stored as map of dependency->effect, but for
        // ordered computation, we also need tree of computedProp->dependencies
        ensureOwnEffectMap(this, COMPUTE_INFO)[property] = info;
      }

      /**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {!Array<*>} Array of argument values
       * @private
       */
      _marshalArgs(args, path, props) {
        const data = this.__data;
        const values = [];
        for (let i=0, l=args.length; i<l; i++) {
          let {name, structured, wildcard, value, literal} = args[i];
          if (!literal) {
            if (wildcard) {
              const matches = isDescendant(name, path);
              const pathValue = getArgValue(data, props, matches ? path : name);
              value = {
                path: matches ? path : name,
                value: pathValue,
                base: matches ? get(data, name) : pathValue
              };
            } else {
              value = structured ? getArgValue(data, props, name) : data[name];
            }
          }
          // When the `legacyUndefined` flag is enabled, pass a no-op value
          // so that the observer, computed property, or compound binding is aborted.
          if (legacyUndefined && !this._overrideLegacyUndefined && value === undefined && args.length > 1) {
            return NOOP;
          }
          values[i] = value;
        }
        return values;
      }

      // -- static class methods ------------

      /**
       * Ensures an accessor exists for the specified property, and adds
       * to a list of "property effects" that will run when the accessor for
       * the specified property is set.  Effects are grouped by "type", which
       * roughly corresponds to a phase in effect processing.  The effect
       * metadata should be in the following form:
       *
       *     {
       *       fn: effectFunction, // Reference to function to call to perform effect
       *       info: { ... }       // Effect metadata passed to function
       *       trigger: {          // Optional triggering metadata; if not provided
       *         name: string      // the property is treated as a wildcard
       *         structured: boolean
       *         wildcard: boolean
       *       }
       *     }
       *
       * Effects are called from `_propertiesChanged` in the following order by
       * type:
       *
       * 1. COMPUTE
       * 2. PROPAGATE
       * 3. REFLECT
       * 4. OBSERVE
       * 5. NOTIFY
       *
       * Effect functions are called with the following signature:
       *
       *     effectFunction(inst, path, props, oldProps, info, hasPaths)
       *
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @nocollapse
       */
      static addPropertyEffect(property, type, effect) {
        this.prototype._addPropertyEffect(property, type, effect);
      }

      /**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createPropertyObserver(property, method, dynamicFn) {
        this.prototype._createPropertyObserver(property, method, dynamicFn);
      }

      /**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       * @nocollapse
       */
      static createMethodObserver(expression, dynamicFn) {
        this.prototype._createMethodObserver(expression, dynamicFn);
      }

      /**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createNotifyingProperty(property) {
        this.prototype._createNotifyingProperty(property);
      }

      /**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createReadOnlyProperty(property, protectedSetter) {
        this.prototype._createReadOnlyProperty(property, protectedSetter);
      }

      /**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createReflectedProperty(property) {
        this.prototype._createReflectedProperty(property);
      }

      /**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createComputedProperty(property, expression, dynamicFn) {
        this.prototype._createComputedProperty(property, expression, dynamicFn);
      }

      /**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       * @nocollapse
       */
      static bindTemplate(template) {
        return this.prototype._bindTemplate(template);
      }

      // -- binding ----------------------------------------------

      /*
       * Overview of binding flow:
       *
       * During finalization (`instanceBinding==false`, `wasPreBound==false`):
       *  `_bindTemplate(t, false)` called directly during finalization - parses
       *  the template (for the first time), and then assigns that _prototypical_
       *  template info to `__preboundTemplateInfo` _on the prototype_; note in
       *  this case `wasPreBound` is false; this is the first time we're binding
       *  it, thus we create accessors.
       *
       * During first stamping (`instanceBinding==true`, `wasPreBound==true`):
       *   `_stampTemplate` calls `_bindTemplate(t, true)`: the `templateInfo`
       *   returned matches the prebound one, and so this is `wasPreBound == true`
       *   state; thus we _skip_ creating accessors, but _do_ create an instance
       *   of the template info to serve as the start of our linked list (needs to
       *   be an instance, not the prototypical one, so that we can add `nodeList`
       *   to it to contain the `nodeInfo`-ordered list of instance nodes for
       *   bindings, and so we can chain runtime-stamped template infos off of
       *   it). At this point, the call to `_stampTemplate` calls
       *   `applyTemplateInfo` for each nested `<template>` found during parsing
       *   to hand prototypical `_templateInfo` to them; we also pass the _parent_
       *   `templateInfo` to the `<template>` so that we have the instance-time
       *   parent to link the `templateInfo` under in the case it was
       *   runtime-stamped.
       *
       * During subsequent runtime stamping (`instanceBinding==true`,
       *   `wasPreBound==false`): `_stampTemplate` calls `_bindTemplate(t, true)`
       *   - here `templateInfo` is guaranteed to _not_ match the prebound one,
       *   because it was either a different template altogether, or even if it
       *   was the same template, the step above created a instance of the info;
       *   in this case `wasPreBound == false`, so we _do_ create accessors, _and_
       *   link a instance into the linked list.
       */

      /**
       * Equivalent to static `bindTemplate` API but can be called on an instance
       * to add effects at runtime.  See that method for full API docs.
       *
       * This method may be called on the prototype (for prototypical template
       * binding, to avoid creating accessors every instance) once per prototype,
       * and will be called with `runtimeBinding: true` by `_stampTemplate` to
       * create and link an instance of the template metadata associated with a
       * particular stamping.
       *
       * @override
       * @param {!HTMLTemplateElement} template Template containing binding
       * bindings
       * @param {boolean=} instanceBinding When false (default), performs
       * "prototypical" binding of the template and overwrites any previously
       * bound template for the class. When true (as passed from
       * `_stampTemplate`), the template info is instanced and linked into the
       * list of bound templates.
       * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
       * this is an instance of the prototypical template info
       * @protected
       * @suppress {missingProperties} go/missingfnprops
       */
      _bindTemplate(template, instanceBinding) {
        let templateInfo = this.constructor._parseTemplate(template);
        let wasPreBound = this.__preBoundTemplateInfo == templateInfo;
        // Optimization: since this is called twice for proto-bound templates,
        // don't attempt to recreate accessors if this template was pre-bound
        if (!wasPreBound) {
          for (let prop in templateInfo.propertyEffects) {
            this._createPropertyAccessor(prop);
          }
        }
        if (instanceBinding) {
          // For instance-time binding, create instance of template metadata
          // and link into tree of templates if necessary
          templateInfo = /** @type {!TemplateInfo} */(Object.create(templateInfo));
          templateInfo.wasPreBound = wasPreBound;
          if (!this.__templateInfo) {
            // Set the info to the root of the tree
            this.__templateInfo = templateInfo;
          } else {
            // Append this template info onto the end of its parent template's
            // list, which will determine the tree structure via which property
            // effects are run; if this template was not nested in another
            // template, use the root template (the first stamped one) as the
            // parent. Note, `parent` is the `templateInfo` instance for this
            // template's parent (containing) template, which was set up in
            // `applyTemplateInfo`.  While a given template's `parent` is set
            // apriori, it is only added to the parent's child list at the point
            // that it is being bound, since a template may or may not ever be
            // stamped, and may be stamped more than once (in which case instances
            // of the template info will be in the tree under its parent more than
            // once).
            const parent = template._parentTemplateInfo || this.__templateInfo;
            const previous = parent.lastChild;
            templateInfo.parent = parent;
            parent.lastChild = templateInfo;
            templateInfo.previousSibling = previous;
            if (previous) {
              previous.nextSibling = templateInfo;
            } else {
              parent.firstChild = templateInfo;
            }
          }
        } else {
          this.__preBoundTemplateInfo = templateInfo;
        }
        return templateInfo;
      }

      /**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @nocollapse
       */
      static _addTemplatePropertyEffect(templateInfo, prop, effect) {
        let hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
        hostProps[prop] = true;
        let effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
        let propEffects = effects[prop] = effects[prop] || [];
        propEffects.push(effect);
      }

      /**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @param {TemplateInfo=} templateInfo Optional bound template info associated
       *   with the template to be stamped; if omitted the template will be
       *   automatically bound.
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */
      _stampTemplate(template, templateInfo) {
        templateInfo =  templateInfo || /** @type {!TemplateInfo} */(this._bindTemplate(template, true));
        // Ensures that created dom is `_enqueueClient`'d to this element so
        // that it can be flushed on next call to `_flushProperties`
        hostStack.push(this);
        let dom = super._stampTemplate(template, templateInfo);
        hostStack.pop();
        // Add template-instance-specific data to instanced templateInfo
        templateInfo.nodeList = dom.nodeList;
        // Capture child nodes to allow unstamping of non-prototypical templates
        if (!templateInfo.wasPreBound) {
          let nodes = templateInfo.childNodes = [];
          for (let n=dom.firstChild; n; n=n.nextSibling) {
            nodes.push(n);
          }
        }
        dom.templateInfo = templateInfo;
        // Setup compound storage, 2-way listeners, and dataHost for bindings
        setupBindings(this, templateInfo);
        // Flush properties into template nodes; the check on `__dataClientsReady`
        // ensures we don't needlessly run effects for an element's initial
        // prototypical template stamping since they will happen as a part of the
        // first call to `_propertiesChanged`. This flag is set to true
        // after running the initial propagate effects, and immediately before
        // flushing clients. Since downstream clients could cause stamping on
        // this host (e.g. a fastDomIf `dom-if` being forced to render
        // synchronously), this flag ensures effects for runtime-stamped templates
        // are run at this point during the initial element boot-up.
        if (this.__dataClientsReady) {
          this._runEffectsForTemplate(templateInfo, this.__data, null, false);
          this._flushClients();
        }
        return dom;
      }

      /**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @override
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */
      _removeBoundDom(dom) {
        // Unlink template info; Note that while the child is unlinked from its
        // parent list, a template's `parent` reference is never removed, since
        // this is is determined by the tree structure and applied at
        // `applyTemplateInfo` time.
        const templateInfo = dom.templateInfo;
        const {previousSibling, nextSibling, parent} = templateInfo;
        if (previousSibling) {
          previousSibling.nextSibling = nextSibling;
        } else if (parent) {
          parent.firstChild = nextSibling;
        }
        if (nextSibling) {
          nextSibling.previousSibling = previousSibling;
        } else if (parent) {
          parent.lastChild = previousSibling;
        }
        templateInfo.nextSibling = templateInfo.previousSibling = null;
        // Remove stamped nodes
        let nodes = templateInfo.childNodes;
        for (let i=0; i<nodes.length; i++) {
          let node = nodes[i];
          wrap(wrap(node).parentNode).removeChild(node);
        }
      }

      /**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */
      static _parseTemplateNode(node, templateInfo, nodeInfo) {
        // TODO(https://github.com/google/closure-compiler/issues/3240):
        //     Change back to just super.methodCall()
        let noted = propertyEffectsBase._parseTemplateNode.call(
          this, node, templateInfo, nodeInfo);
        if (node.nodeType === Node.TEXT_NODE) {
          let parts = this._parseBindings(node.textContent, templateInfo);
          if (parts) {
            // Initialize the textContent with any literal parts
            // NOTE: default to a space here so the textNode remains; some browsers
            // (IE) omit an empty textNode following cloneNode/importNode.
            node.textContent = literalFromParts(parts) || ' ';
            addBinding(this, templateInfo, nodeInfo, 'text', 'textContent', parts);
            noted = true;
          }
        }
        return noted;
      }

      /**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */
      static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
        let parts = this._parseBindings(value, templateInfo);
        if (parts) {
          // Attribute or property
          let origName = name;
          let kind = 'property';
          // The only way we see a capital letter here is if the attr has
          // a capital letter in it per spec. In this case, to make sure
          // this binding works, we go ahead and make the binding to the attribute.
          if (capitalAttributeRegex.test(name)) {
            kind = 'attribute';
          } else if (name[name.length-1] == '$') {
            name = name.slice(0, -1);
            kind = 'attribute';
          }
          // Initialize attribute bindings with any literal parts
          let literal = literalFromParts(parts);
          if (literal && kind == 'attribute') {
            // Ensure a ShadyCSS template scoped style is not removed
            // when a class$ binding's initial literal value is set.
            if (name == 'class' && node.hasAttribute('class')) {
              literal += ' ' + node.getAttribute(name);
            }
            node.setAttribute(name, literal);
          }
          // support disable-upgrade
          if (kind == 'attribute' && origName == 'disable-upgrade$') {
            node.setAttribute(name, '');
          }
          // Clear attribute before removing, since IE won't allow removing
          // `value` attribute if it previously had a value (can't
          // unconditionally set '' before removing since attributes with `$`
          // can't be set using setAttribute)
          if (node.localName === 'input' && origName === 'value') {
            node.setAttribute(origName, '');
          }
          // Remove annotation
          node.removeAttribute(origName);
          // Case hackery: attributes are lower-case, but bind targets
          // (properties) are case sensitive. Gambit is to map dash-case to
          // camel-case: `foo-bar` becomes `fooBar`.
          // Attribute bindings are excepted.
          if (kind === 'property') {
            name = dashToCamelCase(name);
          }
          addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
          return true;
        } else {
          // TODO(https://github.com/google/closure-compiler/issues/3240):
          //     Change back to just super.methodCall()
          return propertyEffectsBase._parseTemplateNodeAttribute.call(
            this, node, templateInfo, nodeInfo, name, value);
        }
      }

      /**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */
      static _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
        // TODO(https://github.com/google/closure-compiler/issues/3240):
        //     Change back to just super.methodCall()
        let noted = propertyEffectsBase._parseTemplateNestedTemplate.call(
          this, node, templateInfo, nodeInfo);
        const parent = node.parentNode;
        const nestedTemplateInfo = nodeInfo.templateInfo;
        const isDomIf = parent.localName === 'dom-if';
        const isDomRepeat = parent.localName === 'dom-repeat';
        // Remove nested template and redirect its host bindings & templateInfo
        // onto the parent (dom-if/repeat element)'s nodeInfo
        if (removeNestedTemplates && (isDomIf || isDomRepeat)) {
          parent.removeChild(node);
          // Use the parent's nodeInfo (for the dom-if/repeat) to record the
          // templateInfo, and use that for any host property bindings below
          nodeInfo = nodeInfo.parentInfo;
          nodeInfo.templateInfo = nestedTemplateInfo;
          // Ensure the parent dom-if/repeat is noted since it now may have host
          // bindings; it may not have been if it did not have its own bindings
          nodeInfo.noted = true;
          noted = false;
        }
        // Merge host props into outer template and add bindings
        let hostProps = nestedTemplateInfo.hostProps;
        if (fastDomIf && isDomIf) {
          // `fastDomIf` mode uses runtime-template stamping to add accessors/
          // effects to properties used in its template; as such we don't need to
          // tax the host element with `_host_` bindings for the `dom-if`.
          // However, in the event it is nested in a `dom-repeat`, it is still
          // important that its host properties are added to the
          // TemplateInstance's `hostProps` so that they are forwarded to the
          // TemplateInstance.
          if (hostProps) {
            templateInfo.hostProps =
              Object.assign(templateInfo.hostProps || {}, hostProps);
            // Ensure the dom-if is noted so that it has a __dataHost, since
            // `fastDomIf` uses the host for runtime template stamping; note this
            // was already ensured above in the `removeNestedTemplates` case
            if (!removeNestedTemplates) {
              nodeInfo.parentInfo.noted = true;
            }
          }
        } else {
          let mode = '{';
          for (let source in hostProps) {
            let parts = [{ mode, source, dependencies: [source], hostProp: true }];
            addBinding(this, templateInfo, nodeInfo, 'property', '_host_' + source, parts);
          }
        }
        return noted;
      }

      /**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       * @nocollapse
       */
      static _parseBindings(text, templateInfo) {
        let parts = [];
        let lastIndex = 0;
        let m;
        // Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
        // Regex matches:
        //        Iteration 1:  Iteration 2:
        // m[1]: '{{'          '[['
        // m[2]: ''            '!'
        // m[3]: 'prop'        'compute(foo,bar)'
        while ((m = bindingRegex.exec(text)) !== null) {
          // Add literal part
          if (m.index > lastIndex) {
            parts.push({literal: text.slice(lastIndex, m.index)});
          }
          // Add binding part
          let mode = m[1][0];
          let negate = Boolean(m[2]);
          let source = m[3].trim();
          let customEvent = false, notifyEvent = '', colon = -1;
          if (mode == '{' && (colon = source.indexOf('::')) > 0) {
            notifyEvent = source.substring(colon + 2);
            source = source.substring(0, colon);
            customEvent = true;
          }
          let signature = parseMethod(source);
          let dependencies = [];
          if (signature) {
            // Inline computed function
            let {args, methodName} = signature;
            for (let i=0; i<args.length; i++) {
              let arg = args[i];
              if (!arg.literal) {
                dependencies.push(arg);
              }
            }
            let dynamicFns = templateInfo.dynamicFns;
            if (dynamicFns && dynamicFns[methodName] || signature.static) {
              dependencies.push(methodName);
              signature.dynamicFn = true;
            }
          } else {
            // Property or path
            dependencies.push(source);
          }
          parts.push({
            source, mode, negate, customEvent, signature, dependencies,
            event: notifyEvent
          });
          lastIndex = bindingRegex.lastIndex;
        }
        // Add a final literal part
        if (lastIndex && lastIndex < text.length) {
          let literal = text.substring(lastIndex);
          if (literal) {
            parts.push({
              literal: literal
            });
          }
        }
        if (parts.length) {
          return parts;
        } else {
          return null;
        }
      }

      /**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {!Polymer_PropertyEffects} inst Element that should be used as
       *     scope for binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       * @nocollapse
       */
      static _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
        let value;
        if (part.signature) {
          value = runMethodEffect(inst, path, props, oldProps, part.signature);
        } else if (path != part.source) {
          value = get(inst, part.source);
        } else {
          if (hasPaths && isPath(path)) {
            value = get(inst, path);
          } else {
            value = inst.__data[path];
          }
        }
        if (part.negate) {
          value = !value;
        }
        return value;
      }

    }

    return PropertyEffects;
  });

  /**
   * Stack for enqueuing client dom created by a host element.
   *
   * By default elements are flushed via `_flushProperties` when
   * `connectedCallback` is called. Elements attach their client dom to
   * themselves at `ready` time which results from this first flush.
   * This provides an ordering guarantee that the client dom an element
   * creates is flushed before the element itself (i.e. client `ready`
   * fires before host `ready`).
   *
   * However, if `_flushProperties` is called *before* an element is connected,
   * as for example `Templatize` does, this ordering guarantee cannot be
   * satisfied because no elements are connected. (Note: Bound elements that
   * receive data do become enqueued clients and are properly ordered but
   * unbound elements are not.)
   *
   * To maintain the desired "client before host" ordering guarantee for this
   * case we rely on the "host stack. Client nodes registers themselves with
   * the creating host element when created. This ensures that all client dom
   * is readied in the proper order, maintaining the desired guarantee.
   *
   * @private
   */
  const hostStack = [];

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Registers a class prototype for telemetry purposes.
   * @param {!PolymerElementConstructor} prototype Element prototype to register
   * @protected
   */
  function register(prototype) {
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Creates a copy of `props` with each property normalized such that
   * upgraded it is an object with at least a type property { type: Type}.
   *
   * @param {!Object} props Properties to normalize
   * @return {!Object} Copy of input `props` with normalized properties that
   * are in the form {type: Type}
   * @private
   */
  function normalizeProperties(props) {
    const output = {};
    for (let p in props) {
      const o = props[p];
      output[p] = (typeof o === 'function') ? {type: o} : o;
    }
    return output;
  }

  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  const PropertiesMixin = dedupingMixin(superClass => {

   /**
    * @constructor
    * @implements {Polymer_PropertiesChanged}
    * @private
    */
   const base = PropertiesChanged(superClass);

   /**
    * Returns the super class constructor for the given class, if it is an
    * instance of the PropertiesMixin.
    *
    * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
    * @return {?PropertiesMixinConstructor} Super class constructor
    */
   function superPropertiesClass(constructor) {
     const superCtor = Object.getPrototypeOf(constructor);

     // Note, the `PropertiesMixin` class below only refers to the class
     // generated by this call to the mixin; the instanceof test only works
     // because the mixin is deduped and guaranteed only to apply once, hence
     // all constructors in a proto chain will see the same `PropertiesMixin`
     return (superCtor.prototype instanceof PropertiesMixin) ?
       /** @type {!PropertiesMixinConstructor} */ (superCtor) : null;
   }

   /**
    * Returns a memoized version of the `properties` object for the
    * given class. Properties not in object format are converted to at
    * least {type}.
    *
    * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
    * @return {Object} Memoized properties object
    */
   function ownProperties(constructor) {
     if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
       let props = null;

       if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor))) {
         const properties = constructor.properties;

         if (properties) {
          props = normalizeProperties(properties);
         }
       }

       constructor.__ownProperties = props;
     }
     return constructor.__ownProperties;
   }

   /**
    * @polymer
    * @mixinClass
    * @extends {base}
    * @implements {Polymer_PropertiesMixin}
    * @unrestricted
    */
   class PropertiesMixin extends base {

     /**
      * Implements standard custom elements getter to observes the attributes
      * listed in `properties`.
      * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
      * @nocollapse
      */
     static get observedAttributes() {
       if (!this.hasOwnProperty(JSCompiler_renameProperty('__observedAttributes', this))) {
         register(this.prototype);
         const props = this._properties;
         this.__observedAttributes = props ? Object.keys(props).map(p => this.prototype._addPropertyToAttributeMap(p)) : [];
       }
       return this.__observedAttributes;
     }

     /**
      * Finalizes an element definition, including ensuring any super classes
      * are also finalized. This includes ensuring property
      * accessors exist on the element prototype. This method calls
      * `_finalizeClass` to finalize each constructor in the prototype chain.
      * @return {void}
      * @nocollapse
      */
     static finalize() {
       if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
         const superCtor = superPropertiesClass(/** @type {!PropertiesMixinConstructor} */(this));
         if (superCtor) {
           superCtor.finalize();
         }
         this.__finalized = true;
         this._finalizeClass();
       }
     }

     /**
      * Finalize an element class. This includes ensuring property
      * accessors exist on the element prototype. This method is called by
      * `finalize` and finalizes the class constructor.
      *
      * @protected
      * @nocollapse
      */
     static _finalizeClass() {
       const props = ownProperties(/** @type {!PropertiesMixinConstructor} */(this));
       if (props) {
         /** @type {?} */ (this).createProperties(props);
       }
     }

     /**
      * Returns a memoized version of all properties, including those inherited
      * from super classes. Properties not in object format are converted to
      * at least {type}.
      *
      * @return {Object} Object containing properties for this class
      * @protected
      * @nocollapse
      */
     static get _properties() {
       if (!this.hasOwnProperty(
         JSCompiler_renameProperty('__properties', this))) {
         const superCtor = superPropertiesClass(/** @type {!PropertiesMixinConstructor} */(this));
         this.__properties = Object.assign({},
           superCtor && superCtor._properties,
           ownProperties(/** @type {PropertiesMixinConstructor} */(this)));
       }
       return this.__properties;
     }

     /**
      * Overrides `PropertiesChanged` method to return type specified in the
      * static `properties` object for the given property.
      * @param {string} name Name of property
      * @return {*} Type to which to deserialize attribute
      *
      * @protected
      * @nocollapse
      */
     static typeForProperty(name) {
       const info = this._properties[name];
       return info && info.type;
     }

     /**
      * Overrides `PropertiesChanged` method and adds a call to
      * `finalize` which lazily configures the element's property accessors.
      * @override
      * @return {void}
      */
     _initializeProperties() {
       this.constructor.finalize();
       super._initializeProperties();
     }

     /**
      * Called when the element is added to a document.
      * Calls `_enableProperties` to turn on property system from
      * `PropertiesChanged`.
      * @suppress {missingProperties} Super may or may not implement the callback
      * @return {void}
      * @override
      */
     connectedCallback() {
       if (super.connectedCallback) {
         super.connectedCallback();
       }
       this._enableProperties();
     }

     /**
      * Called when the element is removed from a document
      * @suppress {missingProperties} Super may or may not implement the callback
      * @return {void}
      * @override
      */
     disconnectedCallback() {
       if (super.disconnectedCallback) {
         super.disconnectedCallback();
       }
     }

   }

   return PropertiesMixin;

  });

  /**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */

  /**
   * Current Polymer version in Semver notation.
   * @type {string} Semver notation of the current version of Polymer.
   */
  const version = '3.5.1';

  const builtCSS = window.ShadyCSS && window.ShadyCSS['cssBuild'];

  /**
   * Element class mixin that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * Subclassers may provide the following static getters to return metadata
   * used to configure Polymer's features for the class:
   *
   * - `static get is()`: When the template is provided via a `dom-module`,
   *   users should return the `dom-module` id from a static `is` getter.  If
   *   no template is needed or the template is provided directly via the
   *   `template` getter, there is no need to define `is` for the element.
   *
   * - `static get template()`: Users may provide the template directly (as
   *   opposed to via `dom-module`) by implementing a static `template` getter.
   *   The getter must return an `HTMLTemplateElement`.
   *
   * - `static get properties()`: Should return an object describing
   *   property-related metadata used by Polymer features (key: property name
   *   value: object containing property metadata). Valid keys in per-property
   *   metadata include:
   *   - `type` (String|Number|Object|Array|...): Used by
   *     `attributeChangedCallback` to determine how string-based attributes
   *     are deserialized to JavaScript property values.
   *   - `notify` (boolean): Causes a change in the property to fire a
   *     non-bubbling event called `<property>-changed`. Elements that have
   *     enabled two-way binding to the property use this event to observe changes.
   *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *     To set a read-only property, use the private setter method
   *     `_setProperty(property, value)`.
   *   - `observer` (string): Observer method name that will be called when
   *     the property changes. The arguments of the method are
   *     `(value, previousValue)`.
   *   - `computed` (string): String describing method and dependent properties
   *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *     Computed properties are read-only by default and can only be changed
   *     via the return value of the computing method.
   *
   * - `static get observers()`: Array of strings describing multi-property
   *   observer methods and their dependent properties (e.g.
   *   `'observeABC(a, b, c)'`).
   *
   * The base class provides default implementations for the following standard
   * custom element lifecycle callbacks; users may override these, but should
   * call the super method to ensure
   * - `constructor`: Run when the element is created or upgraded
   * - `connectedCallback`: Run each time the element is connected to the
   *   document
   * - `disconnectedCallback`: Run each time the element is disconnected from
   *   the document
   * - `attributeChangedCallback`: Run each time an attribute in
   *   `observedAttributes` is set or removed (note: this element's default
   *   `observedAttributes` implementation will automatically return an array
   *   of dash-cased attributes based on `properties`)
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyEffects
   * @appliesMixin PropertiesMixin
   * @property rootPath {string} Set to the value of `rootPath`,
   *   which defaults to the main document path
   * @property importPath {string} Set to the value of the class's static
   *   `importPath` property, which defaults to the path of this element's
   *   `dom-module` (when `is` is used), but can be overridden for other
   *   import strategies.
   * @summary Element class mixin that provides the core API for Polymer's
   * meta-programming features.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  const ElementMixin$1 = dedupingMixin(base => {
    /**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @implements {Polymer_PropertiesMixin}
     * @extends {HTMLElement}
     * @private
     */
    const polymerElementBase = PropertiesMixin(PropertyEffects(base));

    /**
     * Returns a list of properties with default values.
     * This list is created as an optimization since it is a subset of
     * the list returned from `_properties`.
     * This list is used in `_initializeProperties` to set property defaults.
     *
     * @param {PolymerElementConstructor} constructor Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     *   that have default values
     * @private
     */
    function propertyDefaults(constructor) {
      if (!constructor.hasOwnProperty(
        JSCompiler_renameProperty('__propertyDefaults', constructor))) {
        constructor.__propertyDefaults = null;
        let props = constructor._properties;
        for (let p in props) {
          let info = props[p];
          if ('value' in info) {
            constructor.__propertyDefaults = constructor.__propertyDefaults || {};
            constructor.__propertyDefaults[p] = info;
          }
        }
      }
      return constructor.__propertyDefaults;
    }

    /**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */
    function ownObservers(constructor) {
      if (!constructor.hasOwnProperty(
        JSCompiler_renameProperty('__ownObservers', constructor))) {
        constructor.__ownObservers =
            constructor.hasOwnProperty(
                JSCompiler_renameProperty('observers', constructor)) ?
            /** @type {PolymerElementConstructor} */ (constructor).observers :
            null;
      }
      return constructor.__ownObservers;
    }

    /**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */
    function createPropertyFromConfig(proto, name, info, allProps) {
      // computed forces readOnly...
      if (info.computed) {
        info.readOnly = true;
      }
      // Note, since all computed properties are readOnly, this prevents
      // adding additional computed property effects (which leads to a confusing
      // setup where multiple triggers for setting a property)
      // While we do have `hasComputedEffect` this is set on the property's
      // dependencies rather than itself.
      if (info.computed) {
        if (proto._hasReadOnlyEffect(name)) {
          console.warn(`Cannot redefine computed property '${name}'.`);
        } else {
          proto._createComputedProperty(name, info.computed, allProps);
        }
      }
      if (info.readOnly && !proto._hasReadOnlyEffect(name)) {
        proto._createReadOnlyProperty(name, !info.computed);
      } else if (info.readOnly === false && proto._hasReadOnlyEffect(name)) {
        console.warn(`Cannot make readOnly property '${name}' non-readOnly.`);
      }
      if (info.reflectToAttribute && !proto._hasReflectEffect(name)) {
        proto._createReflectedProperty(name);
      } else if (info.reflectToAttribute === false && proto._hasReflectEffect(name)) {
        console.warn(`Cannot make reflected property '${name}' non-reflected.`);
      }
      if (info.notify && !proto._hasNotifyEffect(name)) {
        proto._createNotifyingProperty(name);
      } else if (info.notify === false && proto._hasNotifyEffect(name)) {
        console.warn(`Cannot make notify property '${name}' non-notify.`);
      }
      // always add observer
      if (info.observer) {
        proto._createPropertyObserver(name, info.observer, allProps[info.observer]);
      }
      // always create the mapping from attribute back to property for deserialization.
      proto._addPropertyToAttributeMap(name);
    }

    /**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */
    function processElementStyles(klass, template, is, baseURI) {
      if (!builtCSS) {
        const templateStyles = template.content.querySelectorAll('style');
        const stylesWithImports = stylesFromTemplate(template);
        // insert styles from <link rel="import" type="css"> at the top of the template
        const linkedStyles = stylesFromModuleImports(is);
        const firstTemplateChild = template.content.firstElementChild;
        for (let idx = 0; idx < linkedStyles.length; idx++) {
          let s = linkedStyles[idx];
          s.textContent = klass._processStyleText(s.textContent, baseURI);
          template.content.insertBefore(s, firstTemplateChild);
        }
        // keep track of the last "concrete" style in the template we have encountered
        let templateStyleIndex = 0;
        // ensure all gathered styles are actually in this template.
        for (let i = 0; i < stylesWithImports.length; i++) {
          let s = stylesWithImports[i];
          let templateStyle = templateStyles[templateStyleIndex];
          // if the style is not in this template, it's been "included" and
          // we put a clone of it in the template before the style that included it
          if (templateStyle !== s) {
            s = s.cloneNode(true);
            templateStyle.parentNode.insertBefore(s, templateStyle);
          } else {
            templateStyleIndex++;
          }
          s.textContent = klass._processStyleText(s.textContent, baseURI);
        }
      }
      if (window.ShadyCSS) {
        window.ShadyCSS.prepareTemplate(template, is);
      }
      // Support for `adoptedStylesheets` relies on using native Shadow DOM
      // and built CSS. Built CSS is required because runtime transformation of
      // `@apply` is not supported. This is because ShadyCSS relies on being able
      // to update a `style` element in the element template and this is
      // removed when using `adoptedStyleSheets`.
      // Note, it would be more efficient to allow style includes to become
      // separate stylesheets; however, because of `@apply` these are
      // potentially not shareable and sharing the ones that could be shared
      // would require some coordination. To keep it simple, all the includes
      // and styles are collapsed into a single shareable stylesheet.
      if (useAdoptedStyleSheetsWithBuiltCSS && builtCSS &&
          supportsAdoptingStyleSheets) {
        // Remove styles in template and make a shareable stylesheet
        const styles = template.content.querySelectorAll('style');
        if (styles) {
          let css = '';
          Array.from(styles).forEach(s => {
            css += s.textContent;
            s.parentNode.removeChild(s);
          });
          klass._styleSheet = new CSSStyleSheet();
          klass._styleSheet.replaceSync(css);
        }
      }
    }

    /**
     * Look up template from dom-module for element
     *
     * @param {string} is Element name to look up
     * @return {?HTMLTemplateElement|undefined} Template found in dom module, or
     *   undefined if not found
     * @protected
     */
    function getTemplateFromDomModule(is) {
      let template = null;
      // Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
      // when opted-in via allowTemplateFromDomModule
      if (is && (!strictTemplatePolicy || allowTemplateFromDomModule)) {
        template = /** @type {?HTMLTemplateElement} */ (
            DomModule.import(is, 'template'));
        // Under strictTemplatePolicy, require any element with an `is`
        // specified to have a dom-module
        if (strictTemplatePolicy && !template) {
          throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`);
        }
      }
      return template;
    }

    /**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     * @extends {polymerElementBase}
     */
    class PolymerElement extends polymerElementBase {

      /**
       * Current Polymer version in Semver notation.
       * @type {string} Semver notation of the current version of Polymer.
       * @nocollapse
       */
      static get polymerElementVersion() {
        return version;
      }

      /**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */
      static _finalizeClass() {
        // TODO(https://github.com/google/closure-compiler/issues/3240):
        //     Change back to just super.methodCall()
        polymerElementBase._finalizeClass.call(this);
        const observers = ownObservers(this);
        if (observers) {
          this.createObservers(observers, this._properties);
        }
        this._prepareTemplate();
      }

      /** @nocollapse */
      static _prepareTemplate() {
        // note: create "working" template that is finalized at instance time
        let template = /** @type {PolymerElementConstructor} */ (this).template;
        if (template) {
          if (typeof template === 'string') {
            console.error('template getter must return HTMLTemplateElement');
            template = null;
          } else if (!legacyOptimizations) {
            template = template.cloneNode(true);
          }
        }

        /** @override */
        this.prototype._template = template;
      }

      /**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @param {!Object} props .
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createProperties(props) {
        for (let p in props) {
          createPropertyFromConfig(
              /** @type {?} */ (this.prototype), p, props[p], props);
        }
      }

      /**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createObservers(observers, dynamicFns) {
        const proto = this.prototype;
        for (let i=0; i < observers.length; i++) {
          proto._createMethodObserver(observers[i], dynamicFns);
        }
      }

      /**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation will
       * return the first `<template>` in a `dom-module` whose `id` matches this
       * element's `is` (note that a `_template` property on the class prototype
       * takes precedence over the `dom-module` template, to maintain legacy
       * element semantics; a subclass will subsequently fall back to its super
       * class template if neither a `prototype._template` or a `dom-module` for
       * the class's `is` was found).
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       * @nocollapse
       */
      static get template() {
        // Explanation of template-related properties:
        // - constructor.template (this getter): the template for the class.
        //     This can come from the prototype (for legacy elements), from a
        //     dom-module, or from the super class's template (or can be overridden
        //     altogether by the user)
        // - constructor._template: memoized version of constructor.template
        // - prototype._template: working template for the element, which will be
        //     parsed and modified in place. It is a cloned version of
        //     constructor.template, saved in _finalizeClass(). Note that before
        //     this getter is called, for legacy elements this could be from a
        //     _template field on the info object passed to Polymer(), a behavior,
        //     or set in registered(); once the static getter runs, a clone of it
        //     will overwrite it on the prototype as the working template.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_template', this))) {
          let protoTemplate = this.prototype.hasOwnProperty(
            JSCompiler_renameProperty('_template', this.prototype)) ?
            this.prototype._template : undefined;
          // Accept a function for the legacy Polymer({_template:...}) field for
          // lazy parsing
          if (typeof protoTemplate === 'function') {
            protoTemplate = protoTemplate();
          }
          this._template =
            // If user has put template on prototype (e.g. in legacy via registered
            // callback or info object), prefer that first. Note that `null` is
            // used as a sentinel to indicate "no template" and can be used to
            // override a super template, whereas `undefined` is used as a
            // sentinel to mean "fall-back to default template lookup" via
            // dom-module and/or super.template.
            protoTemplate !== undefined ? protoTemplate :
            // Look in dom-module associated with this element's is
            ((this.hasOwnProperty(JSCompiler_renameProperty('is', this)) &&
            (getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/ (this).is))) ||
            // Next look for superclass template (call the super impl this
            // way so that `this` points to the superclass)
            Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/ (this).prototype).constructor.template);
        }
        return this._template;
      }

      /**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       * @nocollapse
       */
      static set template(value) {
        this._template = value;
      }

      /**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       * @nocollapse
       */
      static get importPath() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
          const meta = this.importMeta;
          if (meta) {
            this._importPath = pathFromUrl(meta.url);
          } else {
            const module = DomModule.import(/** @type {PolymerElementConstructor} */ (this).is);
            this._importPath = (module && module.assetpath) ||
              Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/ (this).prototype).constructor.importPath;
          }
        }
        return this._importPath;
      }

      constructor() {
        super();
        /** @type {HTMLTemplateElement} */
        this._template;
        /** @type {string} */
        this._importPath;
        /** @type {string} */
        this.rootPath;
        /** @type {string} */
        this.importPath;
        /** @type {StampedTemplate | HTMLElement | ShadowRoot} */
        this.root;
        /** @type {!Object<string, !Element>} */
        this.$;
      }

      /**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts,missingProperties} go/missingfnprops
       */
      _initializeProperties() {
        this.constructor.finalize();
        // note: finalize template when we have access to `localName` to
        // avoid dependence on `is` for polyfilling styling.
        this.constructor._finalizeTemplate(/** @type {!HTMLElement} */(this).localName);
        super._initializeProperties();
        // set path defaults
        this.rootPath = rootPath;
        this.importPath = this.constructor.importPath;
        // apply property defaults...
        let p$ = propertyDefaults(this.constructor);
        if (!p$) {
          return;
        }
        for (let p in p$) {
          let info = p$[p];
          if (this._canApplyPropertyDefault(p)) {
            let value = typeof info.value == 'function' ?
              info.value.call(this) :
              info.value;
            // Set via `_setProperty` if there is an accessor, to enable
            // initializing readOnly property defaults
            if (this._hasAccessor(p)) {
              this._setPendingProperty(p, value, true);
            } else {
              this[p] = value;
            }
          }
        }
      }

      /**
       * Determines if a property dfeault can be applied. For example, this
       * prevents a default from being applied when a property that has no
       * accessor is overridden by its host before upgrade (e.g. via a binding).
       * @override
       * @param {string} property Name of the property
       * @return {boolean} Returns true if the property default can be applied.
       */
      _canApplyPropertyDefault(property) {
        return !this.hasOwnProperty(property);
      }

      /**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       * @nocollapse
       */
      static _processStyleText(cssText, baseURI) {
        return resolveCss(cssText, baseURI);
      }

      /**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      * @nocollapse
      */
      static _finalizeTemplate(is) {
        /** @const {HTMLTemplateElement} */
        const template = this.prototype._template;
        if (template && !template.__polymerFinalized) {
          template.__polymerFinalized = true;
          const importPath = this.importPath;
          const baseURI = importPath ? resolveUrl(importPath) : '';
          // e.g. support `include="module-name"`, and ShadyCSS
          processElementStyles(this, template, is, baseURI);
          this.prototype._bindTemplate(template);
        }
      }

      /**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @override
       * @suppress {missingProperties, invalidCasts} Super may or may not
       *     implement the callback
       * @return {void}
       */
      connectedCallback() {
        if (window.ShadyCSS && this._template) {
          window.ShadyCSS.styleElement(/** @type {!HTMLElement} */(this));
        }
        super.connectedCallback();
      }

      /**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */
      ready() {
        if (this._template) {
          this.root = this._stampTemplate(this._template);
          this.$ = this.root.$;
        }
        super.ready();
      }

      /**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */
      _readyClients() {
        if (this._template) {
          this.root = this._attachDom(/** @type {StampedTemplate} */(this.root));
        }
        // The super._readyClients here sets the clients initialized flag.
        // We must wait to do this until after client dom is created/attached
        // so that this flag can be checked to prevent notifications fired
        // during this process from being handled before clients are ready.
        super._readyClients();
      }


      /**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @override
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */
      _attachDom(dom) {
        const n = wrap(this);
        if (n.attachShadow) {
          if (dom) {
            if (!n.shadowRoot) {
              n.attachShadow({mode: 'open', shadyUpgradeFragment: dom});
              n.shadowRoot.appendChild(dom);
              // When `adoptedStyleSheets` is supported a stylesheet is made
              // available on the element constructor.
              if (this.constructor._styleSheet) {
                n.shadowRoot.adoptedStyleSheets = [this.constructor._styleSheet];
              }
            }
            if (syncInitialRender && window.ShadyDOM) {
              window.ShadyDOM.flushInitial(n.shadowRoot);
            }
            return n.shadowRoot;
          }
          return null;
        } else {
          throw new Error('ShadowDOM not available. ' +
            // TODO(sorvell): move to compile-time conditional when supported
          'PolymerElement can create dom as children instead of in ' +
          'ShadowDOM by setting `this.root = this;\` before \`ready\`.');
        }
      }

      /**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @override
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */
      updateStyles(properties) {
        if (window.ShadyCSS) {
          window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */(this), properties);
        }
      }

      /**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @override
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */
      resolveUrl(url, base) {
        if (!base && this.importPath) {
          base = resolveUrl(this.importPath);
        }
        return resolveUrl(url, base);
      }

      /**
       * Overrides `PropertyEffects` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @param {!HTMLTemplateElement} template Template
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} .
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */
      static _parseTemplateContent(template, templateInfo, nodeInfo) {
        templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
        // TODO(https://github.com/google/closure-compiler/issues/3240):
        //     Change back to just super.methodCall()
        return polymerElementBase._parseTemplateContent.call(
          this, template, templateInfo, nodeInfo);
      }

      /**
       * Overrides `PropertyEffects` to warn on use of undeclared properties in
       * template.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */
      static _addTemplatePropertyEffect(templateInfo, prop, effect) {
        // Warn if properties are used in template without being declared.
        // Properties must be listed in `properties` to be included in
        // `observedAttributes` since CE V1 reads that at registration time, and
        // since we want to keep template parsing lazy, we can't automatically
        // add undeclared properties used in templates to `observedAttributes`.
        // The warning is only enabled in `legacyOptimizations` mode, since
        // we don't want to spam existing users who might have adopted the
        // shorthand when attribute deserialization is not important.
        if (legacyWarnings && !(prop in this._properties) &&
            // Methods used in templates with no dependencies (or only literal
            // dependencies) become accessors with template effects; ignore these
            !(effect.info.part.signature && effect.info.part.signature.static) &&
            // Warnings for bindings added to nested templates are handled by
            // templatizer so ignore both the host-to-template bindings
            // (`hostProp`) and TemplateInstance-to-child bindings
            // (`nestedTemplate`)
            !effect.info.part.hostProp && !templateInfo.nestedTemplate) {
          console.warn(`Property '${prop}' used in template but not declared in 'properties'; ` +
            `attribute will not be observed.`);
        }
        // TODO(https://github.com/google/closure-compiler/issues/3240):
        //     Change back to just super.methodCall()
        return polymerElementBase._addTemplatePropertyEffect.call(
          this, templateInfo, prop, effect);
      }

    }

    return PolymerElement;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Our TrustedTypePolicy for HTML which is declared using the Polymer html
   * template tag function.
   *
   * That HTML is a developer-authored constant, and is parsed with innerHTML
   * before any untrusted expressions have been mixed in. Therefor it is
   * considered safe by construction.
   *
   * @type {!TrustedTypePolicy|undefined}
   */
  const policy = window.trustedTypes &&
      trustedTypes.createPolicy('polymer-html-literal', {createHTML: (s) => s});

  /**
   * Class representing a static string value which can be used to filter
   * strings by asseting that they have been created via this class. The
   * `value` property returns the string passed to the constructor.
   */
  class LiteralString {
    /**
     * @param {!ITemplateArray} strings Constant parts of tagged template literal
     * @param {!Array<*>} values Variable parts of tagged template literal
     */
    constructor(strings, values) {
      assertValidTemplateStringParameters(strings, values);
      const string = values.reduce(
          (acc, v, idx) => acc + literalValue(v) + strings[idx + 1], strings[0]);
      /** @type {string} */
      this.value = string.toString();
    }
    /**
     * @return {string} LiteralString string value
     * @override
     */
    toString() {
      return this.value;
    }
  }

  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */
  function literalValue(value) {
    if (value instanceof LiteralString) {
      return /** @type {!LiteralString} */(value).value;
    } else {
      throw new Error(
          `non-literal value passed to Polymer's htmlLiteral function: ${value}`
      );
    }
  }

  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */
  function htmlValue(value) {
    if (value instanceof HTMLTemplateElement) {
      // This might be an mXSS risk – mainly in the case where this template
      // contains untrusted content that was believed to be sanitized.
      // However we can't just use the XMLSerializer here because it misencodes
      // `>` characters inside style tags.
      // For an example of an actual case that hit this encoding issue,
      // see b/198592167
      return /** @type {!HTMLTemplateElement } */(value).innerHTML;
    } else if (value instanceof LiteralString) {
      return literalValue(value);
    } else {
      throw new Error(
          `non-template value passed to Polymer's html function: ${value}`);
    }
  }

  /**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */
  const html = function html(strings, ...values) {
    assertValidTemplateStringParameters(strings, values);
    const template =
        /** @type {!HTMLTemplateElement} */ (document.createElement('template'));
    let value = values.reduce(
        (acc, v, idx) => acc + htmlValue(v) + strings[idx + 1], strings[0]);
    if (policy) {
      value = policy.createHTML(value);
    }
    template.innerHTML = value;
    return template;
  };

  /**
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {!Array<*>} values Array of values from quasis
   */
  const assertValidTemplateStringParameters = (strings, values) => {
    // Note: if/when https://github.com/tc39/proposal-array-is-template-object
    // is standardized, use that instead when available, as it can perform an
    // unforgable check (though of course, the function itself can be forged).
    if (!Array.isArray(strings) || !Array.isArray(strings.raw) ||
        (values.length !== strings.length - 1)) {
      // This is either caused by a browser bug, a compiler bug, or someone
      // calling the html template tag function as a regular function.
      //
      throw new TypeError('Invalid call to the html template tag');
    }
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * @customElement
   * @polymer
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends HTMLElement
   * @appliesMixin ElementMixin
   * @summary Custom element base class that provides the core API for Polymer's
   *   key meta-programming features including template stamping, data-binding,
   *   attribute deserialization, and property change observation
   */
  const PolymerElement = ElementMixin$1(HTMLElement);

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const v=(o,i)=>{var t,n;return void 0===i?void 0!==(null===(t=o)||void 0===t?void 0:t._$litType$):(null===(n=o)||void 0===n?void 0:n._$litType$)===i};

  /**
   * @license
   * Copyright (c) 2021 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  const testUserAgent = (regexp) => regexp.test(navigator.userAgent);

  const testPlatform = (regexp) => regexp.test(navigator.platform);

  const testVendor = (regexp) => regexp.test(navigator.vendor);

  testUserAgent(/Android/);

  testUserAgent(/Chrome/) && testVendor(/Google Inc/);

  testUserAgent(/Firefox/);

  // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  const isIPad = testPlatform(/^iPad/) || (testPlatform(/^Mac/) && navigator.maxTouchPoints > 1);

  const isIPhone = testPlatform(/^iPhone/);

  const isIOS = isIPhone || isIPad;

  testUserAgent(/^((?!chrome|android).)*safari/i);

  (() => {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  })();

  const DEV_MODE_CODE_REGEXP =
    /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

  const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

  function isMinified() {
    function test() {
      /** vaadin-dev-mode:start
      return false;
      vaadin-dev-mode:end **/
      return true;
    }
    return uncommentAndRun(test);
  }

  function isDevelopmentMode() {
    try {
      if (isForcedDevelopmentMode()) {
        return true;
      }

      if (!isLocalhost()) {
        return false;
      }

      if (FlowClients) {
        return !isFlowProductionMode();
      }

      return !isMinified();
    } catch (e) {
      // Some error in this code, assume production so no further actions will be taken
      return false;
    }
  }

  function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
  }

  function isLocalhost() {
    return (["localhost","127.0.0.1"].indexOf(window.location.hostname) >= 0);
  }

  function isFlowProductionMode() {
    if (FlowClients) {
      const productionModeApps = Object.keys(FlowClients)
        .map(key => FlowClients[key])
        .filter(client => client.productionMode);
      if (productionModeApps.length > 0) {
        return true;
      }
    }
    return false;
  }

  function uncommentAndRun(callback, args) {
    if (typeof callback !== 'function') {
      return;
    }

    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) {
      try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
      } catch (e) {
        // eat the exception
        console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
      }
    }

    return callback(args);
  }

  // A guard against polymer-modulizer removing the window.Vaadin
  // initialization above.
  window['Vaadin'] = window['Vaadin'] || {};

  /**
   * Inspects the source code of the given `callback` function for
   * specially-marked _commented_ code. If such commented code is found in the
   * callback source, uncomments and runs that code instead of the callback
   * itself. Otherwise runs the callback as is.
   *
   * The optional arguments are passed into the callback / uncommented code,
   * the result is returned.
   *
   * See the `isMinified()` function source code in this file for an example.
   *
   */
  const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) {
      return uncommentAndRun(callback, args);
    }
  };

  if (window.Vaadin.developmentMode === undefined) {
    window.Vaadin.developmentMode = isDevelopmentMode();
  }

  /* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

  function maybeGatherAndSendStats() {
    /** vaadin-dev-mode:start
    (function () {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var getPolymerVersion = function getPolymerVersion() {
    return window.Polymer && window.Polymer.version;
  };

  var StatisticsGatherer = function () {
    function StatisticsGatherer(logger) {
      classCallCheck(this, StatisticsGatherer);

      this.now = new Date().getTime();
      this.logger = logger;
    }

    createClass(StatisticsGatherer, [{
      key: 'frameworkVersionDetectors',
      value: function frameworkVersionDetectors() {
        return {
          'Flow': function Flow() {
            if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
              var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                return window.Vaadin.Flow.clients[key];
              }).filter(function (client) {
                return client.getVersionInfo;
              }).map(function (client) {
                return client.getVersionInfo().flow;
              });
              if (flowVersions.length > 0) {
                return flowVersions[0];
              }
            }
          },
          'Vaadin Framework': function VaadinFramework() {
            if (window.vaadin && window.vaadin.clients) {
              var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                return client.getVersionInfo;
              }).map(function (client) {
                return client.getVersionInfo().vaadinVersion;
              });
              if (frameworkVersions.length > 0) {
                return frameworkVersions[0];
              }
            }
          },
          'AngularJs': function AngularJs() {
            if (window.angular && window.angular.version && window.angular.version) {
              return window.angular.version.full;
            }
          },
          'Angular': function Angular() {
            if (window.ng) {
              var tags = document.querySelectorAll("[ng-version]");
              if (tags.length > 0) {
                return tags[0].getAttribute("ng-version");
              }
              return "Unknown";
            }
          },
          'Backbone.js': function BackboneJs() {
            if (window.Backbone) {
              return window.Backbone.VERSION;
            }
          },
          'React': function React() {
            var reactSelector = '[data-reactroot], [data-reactid]';
            if (!!document.querySelector(reactSelector)) {
              // React does not publish the version by default
              return "unknown";
            }
          },
          'Ember': function Ember() {
            if (window.Em && window.Em.VERSION) {
              return window.Em.VERSION;
            } else if (window.Ember && window.Ember.VERSION) {
              return window.Ember.VERSION;
            }
          },
          'jQuery': function (_jQuery) {
            function jQuery() {
              return _jQuery.apply(this, arguments);
            }

            jQuery.toString = function () {
              return _jQuery.toString();
            };

            return jQuery;
          }(function () {
            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
              return jQuery.prototype.jquery;
            }
          }),
          'Polymer': function Polymer() {
            var version = getPolymerVersion();
            if (version) {
              return version;
            }
          },
          'LitElement': function LitElement() {
            var version = window.litElementVersions && window.litElementVersions[0];
            if (version) {
              return version;
            }
          },
          'LitHtml': function LitHtml() {
            var version = window.litHtmlVersions && window.litHtmlVersions[0];
            if (version) {
              return version;
            }
          },
          'Vue.js': function VueJs() {
            if (window.Vue) {
              return window.Vue.version;
            }
          }
        };
      }
    }, {
      key: 'getUsedVaadinElements',
      value: function getUsedVaadinElements(elements) {
        var version = getPolymerVersion();
        var elementClasses = void 0;
        // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
        // Check all locations calling the method getEntries() in
        // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
        // Currently it is only used by BootstrapHandler.
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: components classes are stored in window.Vaadin
          elementClasses = Object.keys(window.Vaadin).map(function (c) {
            return window.Vaadin[c];
          }).filter(function (c) {
            return c.is;
          });
        } else {
          // Polymer 3: components classes are stored in window.Vaadin.registrations
          elementClasses = window.Vaadin.registrations || [];
        }
        elementClasses.forEach(function (klass) {
          var version = klass.version ? klass.version : "0.0.0";
          elements[klass.is] = { version: version };
        });
      }
    }, {
      key: 'getUsedVaadinThemes',
      value: function getUsedVaadinThemes(themes) {
        ['Lumo', 'Material'].forEach(function (themeName) {
          var theme;
          var version = getPolymerVersion();
          if (version && version.indexOf('2') === 0) {
            // Polymer 2: themes are stored in window.Vaadin
            theme = window.Vaadin[themeName];
          } else {
            // Polymer 3: themes are stored in custom element registry
            theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
          }
          if (theme && theme.version) {
            themes[themeName] = { version: theme.version };
          }
        });
      }
    }, {
      key: 'getFrameworks',
      value: function getFrameworks(frameworks) {
        var detectors = this.frameworkVersionDetectors();
        Object.keys(detectors).forEach(function (framework) {
          var detector = detectors[framework];
          try {
            var version = detector();
            if (version) {
              frameworks[framework] = { version: version };
            }
          } catch (e) {}
        });
      }
    }, {
      key: 'gather',
      value: function gather(storage) {
        var storedStats = storage.read();
        var gatheredStats = {};
        var types = ["elements", "frameworks", "themes"];

        types.forEach(function (type) {
          gatheredStats[type] = {};
          if (!storedStats[type]) {
            storedStats[type] = {};
          }
        });

        var previousStats = JSON.stringify(storedStats);

        this.getUsedVaadinElements(gatheredStats.elements);
        this.getFrameworks(gatheredStats.frameworks);
        this.getUsedVaadinThemes(gatheredStats.themes);

        var now = this.now;
        types.forEach(function (type) {
          var keys = Object.keys(gatheredStats[type]);
          keys.forEach(function (key) {
            if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
              storedStats[type][key] = { firstUsed: now };
            }
            // Discards any previously logged version number
            storedStats[type][key].version = gatheredStats[type][key].version;
            storedStats[type][key].lastUsed = now;
          });
        });

        var newStats = JSON.stringify(storedStats);
        storage.write(newStats);
        if (newStats != previousStats && Object.keys(storedStats).length > 0) {
          this.logger.debug("New stats: " + newStats);
        }
      }
    }]);
    return StatisticsGatherer;
  }();

  var StatisticsStorage = function () {
    function StatisticsStorage(key) {
      classCallCheck(this, StatisticsStorage);

      this.key = key;
    }

    createClass(StatisticsStorage, [{
      key: 'read',
      value: function read() {
        var localStorageStatsString = localStorage.getItem(this.key);
        try {
          return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
        } catch (e) {
          return {};
        }
      }
    }, {
      key: 'write',
      value: function write(data) {
        localStorage.setItem(this.key, data);
      }
    }, {
      key: 'clear',
      value: function clear() {
        localStorage.removeItem(this.key);
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        var storedStats = this.read();
        var empty = true;
        Object.keys(storedStats).forEach(function (key) {
          if (Object.keys(storedStats[key]).length > 0) {
            empty = false;
          }
        });

        return empty;
      }
    }]);
    return StatisticsStorage;
  }();

  var StatisticsSender = function () {
    function StatisticsSender(url, logger) {
      classCallCheck(this, StatisticsSender);

      this.url = url;
      this.logger = logger;
    }

    createClass(StatisticsSender, [{
      key: 'send',
      value: function send(data, errorHandler) {
        var logger = this.logger;

        if (navigator.onLine === false) {
          logger.debug("Offline, can't send");
          errorHandler();
          return;
        }
        logger.debug("Sending data to " + this.url);

        var req = new XMLHttpRequest();
        req.withCredentials = true;
        req.addEventListener("load", function () {
          // Stats sent, nothing more to do
          logger.debug("Response: " + req.responseText);
        });
        req.addEventListener("error", function () {
          logger.debug("Send failed");
          errorHandler();
        });
        req.addEventListener("abort", function () {
          logger.debug("Send aborted");
          errorHandler();
        });
        req.open("POST", this.url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
      }
    }]);
    return StatisticsSender;
  }();

  var StatisticsLogger = function () {
    function StatisticsLogger(id) {
      classCallCheck(this, StatisticsLogger);

      this.id = id;
    }

    createClass(StatisticsLogger, [{
      key: '_isDebug',
      value: function _isDebug() {
        return localStorage.getItem("vaadin." + this.id + ".debug");
      }
    }, {
      key: 'debug',
      value: function debug(msg) {
        if (this._isDebug()) {
          console.info(this.id + ": " + msg);
        }
      }
    }]);
    return StatisticsLogger;
  }();

  var UsageStatistics = function () {
    function UsageStatistics() {
      classCallCheck(this, UsageStatistics);

      this.now = new Date();
      this.timeNow = this.now.getTime();
      this.gatherDelay = 10; // Delay between loading this file and gathering stats
      this.initialDelay = 24 * 60 * 60;

      this.logger = new StatisticsLogger("statistics");
      this.storage = new StatisticsStorage("vaadin.statistics.basket");
      this.gatherer = new StatisticsGatherer(this.logger);
      this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
    }

    createClass(UsageStatistics, [{
      key: 'maybeGatherAndSend',
      value: function maybeGatherAndSend() {
        var _this = this;

        if (localStorage.getItem(UsageStatistics.optOutKey)) {
          return;
        }
        this.gatherer.gather(this.storage);
        setTimeout(function () {
          _this.maybeSend();
        }, this.gatherDelay * 1000);
      }
    }, {
      key: 'lottery',
      value: function lottery() {
        return true;
      }
    }, {
      key: 'currentMonth',
      value: function currentMonth() {
        return this.now.getYear() * 12 + this.now.getMonth();
      }
    }, {
      key: 'maybeSend',
      value: function maybeSend() {
        var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
        var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

        if (!firstUse) {
          // Use a grace period to avoid interfering with tests, incognito mode etc
          firstUse = this.timeNow;
          localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
        }

        if (this.timeNow < firstUse + this.initialDelay * 1000) {
          this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
          return;
        }
        if (this.currentMonth() <= monthProcessed) {
          this.logger.debug("This month has already been processed");
          return;
        }
        localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
        // Use random sampling
        if (this.lottery()) {
          this.logger.debug("Congratulations, we have a winner!");
        } else {
          this.logger.debug("Sorry, no stats from you this time");
          return;
        }

        this.send();
      }
    }, {
      key: 'send',
      value: function send() {
        // Ensure we have the latest data
        this.gatherer.gather(this.storage);

        // Read, send and clean up
        var data = this.storage.read();
        data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
        data["usageStatisticsVersion"] = UsageStatistics.version;
        var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
        var self = this;
        this.sender.send(info + JSON.stringify(data), function () {
          // Revert the 'month processed' flag
          localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
        });
      }
    }], [{
      key: 'version',
      get: function get$1() {
        return '2.1.2';
      }
    }, {
      key: 'firstUseKey',
      get: function get$1() {
        return 'vaadin.statistics.firstuse';
      }
    }, {
      key: 'monthProcessedKey',
      get: function get$1() {
        return 'vaadin.statistics.monthProcessed';
      }
    }, {
      key: 'optOutKey',
      get: function get$1() {
        return 'vaadin.statistics.optout';
      }
    }]);
    return UsageStatistics;
  }();

  try {
    window.Vaadin = window.Vaadin || {};
    window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
    window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
    // Intentionally ignored as this is not a problem in the app being developed
  }

  }());

    vaadin-dev-mode:end **/
  }

  const usageStatistics = function() {
    if (typeof runIfDevelopmentMode === 'function') {
      return runIfDevelopmentMode(maybeGatherAndSendStats);
    }
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  let microtaskCallbacks = [];
  let microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

  function microtaskFlush() {
    const len = microtaskCallbacks.length;
    for (let i = 0; i < len; i++) {
      let cb = microtaskCallbacks[i];
      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
      }
    }
    microtaskCallbacks.splice(0, len);
  }

  /**
   * Async interface wrapper around `requestIdleCallback`.  Falls back to
   * `setTimeout` on browsers that do not support `requestIdleCallback`.
   *
   * @namespace
   * @summary Async interface wrapper around `requestIdleCallback`.
   */
  const idlePeriod = {
    /**
     * Enqueues a function called at `requestIdleCallback` timing.
     *
     * @memberof idlePeriod
     * @param {function(!IdleDeadline):void} fn Callback to run
     * @return {number} Handle used for canceling task
     */
    run(fn) {
      return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
    },
    /**
     * Cancels a previously enqueued `idlePeriod` callback.
     *
     * @memberof idlePeriod
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel(handle) {
      window.cancelIdleCallback ? window.cancelIdleCallback(handle) : window.clearTimeout(handle);
    },
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @summary Collapse multiple callbacks into one invocation after a timer.
   */
  class Debouncer {
    constructor() {
      this._asyncModule = null;
      this._callback = null;
      this._timer = null;
    }
    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */
    setConfig(asyncModule, callback) {
      this._asyncModule = asyncModule;
      this._callback = callback;
      this._timer = this._asyncModule.run(() => {
        this._timer = null;
        debouncerQueue.delete(this);
        this._callback();
      });
    }
    /**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */
    cancel() {
      if (this.isActive()) {
        this._cancelAsync();
        // Canceling a debouncer removes its spot from the flush queue,
        // so if a debouncer is manually canceled and re-debounced, it
        // will reset its flush order (this is a very minor difference from 1.x)
        // Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
        debouncerQueue.delete(this);
      }
    }
    /**
     * Cancels a debouncer's async callback.
     *
     * @return {void}
     */
    _cancelAsync() {
      if (this.isActive()) {
        this._asyncModule.cancel(/** @type {number} */ (this._timer));
        this._timer = null;
      }
    }
    /**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */
    flush() {
      if (this.isActive()) {
        this.cancel();
        this._callback();
      }
    }
    /**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */
    isActive() {
      return this._timer != null;
    }
    /**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@vaadin/component-base/src/async.js';
     * import {Debouncer} from '@vaadin/component-base/src/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */
    static debounce(debouncer, asyncModule, callback) {
      if (debouncer instanceof Debouncer) {
        // Cancel the async callback, but leave in debouncerQueue if it was
        // enqueued, to maintain 1.x flush order
        debouncer._cancelAsync();
      } else {
        debouncer = new Debouncer();
      }
      debouncer.setConfig(asyncModule, callback);
      return debouncer;
    }
  }

  let debouncerQueue = new Set();

  /**
   * Adds a `Debouncer` to a list of globally flushable tasks.
   *
   * @param {!Debouncer} debouncer Debouncer to enqueue
   * @return {void}
   */
  const enqueueDebouncer = function (debouncer) {
    debouncerQueue.add(debouncer);
  };

  /**
   * @license
   * Copyright (c) 2021 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  /**
   * Helper that provides a set of functions for RTL.
   */
  class DirHelper {
    /**
     * Get the scroll type in the current browser view.
     *
     * @return {string} the scroll type. Possible values are `default|reverse|negative`
     */
    static detectScrollType() {
      const dummy = document.createElement('div');
      dummy.textContent = 'ABCD';
      dummy.dir = 'rtl';
      dummy.style.fontSize = '14px';
      dummy.style.width = '4px';
      dummy.style.height = '1px';
      dummy.style.position = 'absolute';
      dummy.style.top = '-1000px';
      dummy.style.overflow = 'scroll';
      document.body.appendChild(dummy);

      let cachedType = 'reverse';
      if (dummy.scrollLeft > 0) {
        cachedType = 'default';
      } else {
        dummy.scrollLeft = 2;
        if (dummy.scrollLeft < 2) {
          cachedType = 'negative';
        }
      }
      document.body.removeChild(dummy);
      return cachedType;
    }

    /**
     * Get the scrollLeft value of the element relative to the direction
     *
     * @param {string} scrollType type of the scroll detected with `detectScrollType`
     * @param {string} direction current direction of the element
     * @param {Element} element
     * @return {number} the scrollLeft value.
     */
    static getNormalizedScrollLeft(scrollType, direction, element) {
      const { scrollLeft } = element;
      if (direction !== 'rtl' || !scrollType) {
        return scrollLeft;
      }

      switch (scrollType) {
        case 'negative':
          return element.scrollWidth - element.clientWidth + scrollLeft;
        case 'reverse':
          return element.scrollWidth - element.clientWidth - scrollLeft;
      }
      return scrollLeft;
    }

    /**
     * Set the scrollLeft value of the element relative to the direction
     *
     * @param {string} scrollType type of the scroll detected with `detectScrollType`
     * @param {string} direction current direction of the element
     * @param {Element} element
     * @param {number} scrollLeft the scrollLeft value to be set
     */
    static setNormalizedScrollLeft(scrollType, direction, element, scrollLeft) {
      if (direction !== 'rtl' || !scrollType) {
        element.scrollLeft = scrollLeft;
        return;
      }

      switch (scrollType) {
        case 'negative':
          element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
          break;
        case 'reverse':
          element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
          break;
        default:
          element.scrollLeft = scrollLeft;
          break;
      }
    }
  }

  /**
   * @license
   * Copyright (c) 2021 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  /**
   * Array of Vaadin custom element classes that have been subscribed to the dir changes.
   */
  const directionSubscribers = [];
  const directionUpdater = function () {
    const documentDir = getDocumentDir();
    directionSubscribers.forEach((element) => {
      alignDirs(element, documentDir);
    });
  };

  let scrollType;

  const directionObserver = new MutationObserver(directionUpdater);
  directionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

  const alignDirs = function (element, documentDir, elementDir = element.getAttribute('dir')) {
    if (documentDir) {
      element.setAttribute('dir', documentDir);
    } else if (elementDir != null) {
      element.removeAttribute('dir');
    }
  };

  const getDocumentDir = function () {
    return document.documentElement.getAttribute('dir');
  };

  /**
   * A mixin to handle `dir` attribute based on the one set on the `<html>` element.
   *
   * @polymerMixin
   */
  const DirMixin = (superClass) =>
    class VaadinDirMixin extends superClass {
      static get properties() {
        return {
          /**
           * @protected
           */
          dir: {
            type: String,
            value: '',
            reflectToAttribute: true,
          },
        };
      }

      /** @protected */
      static finalize() {
        super.finalize();

        if (!scrollType) {
          scrollType = DirHelper.detectScrollType();
        }
      }

      /** @protected */
      connectedCallback() {
        super.connectedCallback();

        if (!this.hasAttribute('dir')) {
          this.__subscribe();
          alignDirs(this, getDocumentDir(), null);
        }
      }

      /** @protected */
      attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name !== 'dir') {
          return;
        }

        const documentDir = getDocumentDir();

        // New value equals to the document direction and the element is not subscribed to the changes
        const newValueEqlDocDir = newValue === documentDir && directionSubscribers.indexOf(this) === -1;
        // Value was emptied and the element is not subscribed to the changes
        const newValueEmptied = !newValue && oldValue && directionSubscribers.indexOf(this) === -1;
        // New value is different and the old equals to document direction and the element is not subscribed to the changes
        const newDiffValue = newValue !== documentDir && oldValue === documentDir;

        if (newValueEqlDocDir || newValueEmptied) {
          this.__subscribe();
          alignDirs(this, documentDir, newValue);
        } else if (newDiffValue) {
          this.__subscribe(false);
        }
      }

      /** @protected */
      disconnectedCallback() {
        super.disconnectedCallback();
        this.__subscribe(false);
        this.removeAttribute('dir');
      }

      /** @protected */
      _valueToNodeAttribute(node, value, attribute) {
        // Override default Polymer attribute reflection to match native behavior of HTMLElement.dir property
        // If the property contains an empty string then it should not create an empty attribute
        if (attribute === 'dir' && value === '' && !node.hasAttribute('dir')) {
          return;
        }
        super._valueToNodeAttribute(node, value, attribute);
      }

      /** @protected */
      _attributeToProperty(attribute, value, type) {
        // Override default Polymer attribute reflection to match native behavior of HTMLElement.dir property
        // If the attribute is removed, then the dir property should contain an empty string instead of null
        if (attribute === 'dir' && !value) {
          this.dir = '';
        } else {
          super._attributeToProperty(attribute, value, type);
        }
      }

      /** @private */
      __subscribe(push = true) {
        if (push) {
          directionSubscribers.indexOf(this) === -1 && directionSubscribers.push(this);
        } else {
          directionSubscribers.indexOf(this) > -1 && directionSubscribers.splice(directionSubscribers.indexOf(this), 1);
        }
      }

      /**
       * @param {Element} element
       * @return {number}
       * @protected
       */
      __getNormalizedScrollLeft(element) {
        return DirHelper.getNormalizedScrollLeft(scrollType, this.getAttribute('dir') || 'ltr', element);
      }

      /**
       * @param {Element} element
       * @param {number} scrollLeft
       * @protected
       */
      __setNormalizedScrollLeft(element, scrollLeft) {
        return DirHelper.setNormalizedScrollLeft(scrollType, this.getAttribute('dir') || 'ltr', element, scrollLeft);
      }
    };

  /**
   * @license
   * Copyright (c) 2021 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  window.Vaadin = window.Vaadin || {};

  /**
   * Array of Vaadin custom element classes that have been finalized.
   */
  window.Vaadin.registrations = window.Vaadin.registrations || [];

  window.Vaadin.developmentModeCallback = window.Vaadin.developmentModeCallback || {};

  window.Vaadin.developmentModeCallback['vaadin-usage-statistics'] = function () {
    usageStatistics();
  };

  let statsJob;

  const registered = new Set();

  /**
   * @polymerMixin
   * @mixes DirMixin
   */
  const ElementMixin = (superClass) =>
    class VaadinElementMixin extends DirMixin(superClass) {
      static get version() {
        return '22.0.16';
      }

      /** @protected */
      static finalize() {
        super.finalize();

        const { is } = this;

        // Registers a class prototype for telemetry purposes.
        if (is && !registered.has(is)) {
          window.Vaadin.registrations.push(this);
          registered.add(is);

          if (window.Vaadin.developmentModeCallback) {
            statsJob = Debouncer.debounce(statsJob, idlePeriod, () => {
              window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
            });
            enqueueDebouncer(statsJob);
          }
        }
      }

      constructor() {
        super();

        if (document.doctype === null) {
          console.warn(
            'Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.',
          );
        }
      }
    };

  /**
   * @license
   * Copyright (c) 2021 - 2022 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  /**
   * Passes the component to the template renderer callback if the template renderer is imported.
   * Otherwise, if there is a template, it warns that the template renderer needs to be imported.
   *
   * @param {HTMLElement} component
   */
  function processTemplates(component) {
    if (window.Vaadin && window.Vaadin.templateRendererCallback) {
      window.Vaadin.templateRendererCallback(component);
      return;
    }

    if (component.querySelector('template')) {
      console.warn(
        `WARNING: <template> inside <${component.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`,
      );
    }
  }

  /**
   * @license
   * Copyright (c) 2021 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */

  /**
   * An element used internally by `<vaadin-notification>`. Not intended to be used separately.
   *
   * @extends HTMLElement
   * @mixes ElementMixin
   * @mixes ThemableMixin
   * @private
   */
  class NotificationContainer extends ThemableMixin(ElementMixin(PolymerElement)) {
    static get template() {
      return html`
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
    `;
    }

    static get is() {
      return 'vaadin-notification-container';
    }

    static get properties() {
      return {
        /**
         * True when the container is opened
         * @type {boolean}
         */
        opened: {
          type: Boolean,
          value: false,
          observer: '_openedChanged'
        }
      };
    }

    /** @private */
    _openedChanged(opened) {
      if (opened) {
        document.body.appendChild(this);
        if (this._boundIosResizeListener) {
          this._detectIosNavbar();
          window.addEventListener('resize', this._boundIosResizeListener);
        }
      } else {
        document.body.removeChild(this);
        if (this._boundIosResizeListener) {
          window.removeEventListener('resize', this._boundIosResizeListener);
        }
      }
    }

    constructor() {
      super();

      if (isIOS) {
        this._boundIosResizeListener = () => this._detectIosNavbar();
      }
    }

    /** @private */
    _detectIosNavbar() {
      const innerHeight = window.innerHeight;
      const innerWidth = window.innerWidth;
      const landscape = innerWidth > innerHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (landscape && clientHeight > innerHeight) {
        this.style.bottom = clientHeight - innerHeight + 'px';
      } else {
        this.style.bottom = '0';
      }
    }
  }

  /**
   * An element used internally by `<vaadin-notification>`. Not intended to be used separately.
   *
   * @extends HTMLElement
   * @mixes ThemableMixin
   * @private
   */
  class NotificationCard extends ThemableMixin(PolymerElement) {
    static get template() {
      return html`
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
    `;
    }

    static get is() {
      return 'vaadin-notification-card';
    }

    /** @protected */
    ready() {
      super.ready();
      this.setAttribute('role', 'alert');
      this.setAttribute('aria-live', 'polite');
    }
  }

  /**
   * `<vaadin-notification>` is a Web Component providing accessible and customizable notifications (toasts).
   *
   * ### Rendering
   *
   * The content of the notification can be populated by using the renderer callback function.
   *
   * The renderer function provides `root`, `notification` arguments.
   * Generate DOM content, append it to the `root` element and control the state
   * of the host element by accessing `notification`. Before generating new content,
   * users are able to check if there is already content in `root` for reusing it.
   *
   * ```html
   * <vaadin-notification id="notification"></vaadin-notification>
   * ```
   * ```js
   * const notification = document.querySelector('#notification');
   * notification.renderer = function(root, notification) {
   *   root.textContent = "Your work has been saved";
   * };
   * ```
   *
   * Renderer is called on the opening of the notification.
   * DOM generated during the renderer call can be reused
   * in the next renderer call and will be provided with the `root` argument.
   * On first call it will be empty.
   *
   * ### Styling
   *
   * `<vaadin-notification>` uses `<vaadin-notification-card>` internal
   * themable component as the actual visible notification cards.
   *
   * The following shadow DOM parts of the `<vaadin-notification-card>` are available for styling:
   *
   * Part name | Description
   * ----------------|----------------
   * `overlay` | The notification container
   * `content` | The content of the notification
   *
   * See [Styling Components](https://vaadin.com/docs/latest/ds/customization/styling-components) documentation.
   *
   * Note: the `theme` attribute value set on `<vaadin-notification>` is
   * propagated to the internal `<vaadin-notification-card>`.
   *
   * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
   *
   * @extends HTMLElement
   * @mixes ThemePropertyMixin
   * @mixes ElementMixin
   */
  class Notification extends ThemePropertyMixin(ElementMixin(PolymerElement)) {
    static get template() {
      return html`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-notification-card theme$="[[theme]]"> </vaadin-notification-card>
    `;
    }

    static get is() {
      return 'vaadin-notification';
    }

    static get properties() {
      return {
        /**
         * The duration in milliseconds to show the notification.
         * Set to `0` or a negative number to disable the notification auto-closing.
         * @type {number}
         */
        duration: {
          type: Number,
          value: 5000
        },

        /**
         * True if the notification is currently displayed.
         * @type {boolean}
         */
        opened: {
          type: Boolean,
          value: false,
          notify: true,
          observer: '_openedChanged'
        },

        /**
         * Alignment of the notification in the viewport
         * Valid values are `top-stretch|top-start|top-center|top-end|middle|bottom-start|bottom-center|bottom-end|bottom-stretch`
         * @type {!NotificationPosition}
         */
        position: {
          type: String,
          value: 'bottom-start',
          observer: '_positionChanged'
        },

        /**
         * Custom function for rendering the content of the notification.
         * Receives two arguments:
         *
         * - `root` The `<vaadin-notification-card>` DOM element. Append
         *   your content to it.
         * - `notification` The reference to the `<vaadin-notification>` element.
         * @type {!NotificationRenderer | undefined}
         */
        renderer: Function
      };
    }

    static get observers() {
      return ['_durationChanged(duration, opened)', '_rendererChanged(renderer, opened, _card)'];
    }

    /** @protected */
    ready() {
      super.ready();

      this._card = this.shadowRoot.querySelector('vaadin-notification-card');

      processTemplates(this);
    }

    /**
     * Requests an update for the content of the notification.
     * While performing the update, it invokes the renderer passed in the `renderer` property.
     *
     * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
     */
    requestContentUpdate() {
      if (!this.renderer) return;

      this.renderer(this._card, this);
    }

    /** @private */
    _rendererChanged(renderer, opened, card) {
      if (!card) {
        return;
      }

      const rendererChanged = this._oldRenderer !== renderer;
      this._oldRenderer = renderer;

      if (rendererChanged) {
        card.innerHTML = '';
        // Whenever a Lit-based renderer is used, it assigns a Lit part to the node it was rendered into.
        // When clearing the rendered content, this part needs to be manually disposed of.
        // Otherwise, using a Lit-based renderer on the same node will throw an exception or render nothing afterward.
        delete card._$litPart$;
      }

      if (opened) {
        if (!this._didAnimateNotificationAppend) {
          this._animatedAppendNotificationCard();
        }
        this.requestContentUpdate();
      }
    }

    /**
     * Opens the notification.
     */
    open() {
      this.opened = true;
    }

    /**
     * Closes the notification.
     */
    close() {
      this.opened = false;
    }

    /** @private */
    get _container() {
      if (!Notification._container) {
        Notification._container = document.createElement('vaadin-notification-container');
        document.body.appendChild(Notification._container);
      }
      return Notification._container;
    }

    /** @private */
    _openedChanged(opened) {
      if (opened) {
        this._container.opened = true;
        this._animatedAppendNotificationCard();
      } else if (this._card) {
        this._closeNotificationCard();
      }
    }

    /** @private */
    _animatedAppendNotificationCard() {
      if (this._card) {
        this._card.setAttribute('opening', '');
        this._appendNotificationCard();
        const listener = () => {
          this._card.removeEventListener('animationend', listener);
          this._card.removeAttribute('opening');
        };
        this._card.addEventListener('animationend', listener);
        this._didAnimateNotificationAppend = true;
      } else {
        this._didAnimateNotificationAppend = false;
      }
    }

    /** @private */
    _appendNotificationCard() {
      if (!this._card) {
        return;
      }

      if (!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)) {
        console.warn(`Invalid alignment parameter provided: position=${this.position}`);
        return;
      }

      this._card.slot = this.position;
      if (this._container.firstElementChild && /top/.test(this.position)) {
        this._container.insertBefore(this._card, this._container.firstElementChild);
      } else {
        this._container.appendChild(this._card);
      }
    }

    /** @private */
    _removeNotificationCard() {
      this._card.parentNode && this._card.parentNode.removeChild(this._card);
      this._card.removeAttribute('closing');
      this._container.opened = Boolean(this._container.firstElementChild);
    }

    /** @private */
    _closeNotificationCard() {
      this._durationTimeoutId && clearTimeout(this._durationTimeoutId);
      this._animatedRemoveNotificationCard();
    }

    /** @private */
    _animatedRemoveNotificationCard() {
      this._card.setAttribute('closing', '');
      const name = getComputedStyle(this._card).getPropertyValue('animation-name');
      if (name && name != 'none') {
        const listener = () => {
          this._removeNotificationCard();
          this._card.removeEventListener('animationend', listener);
        };
        this._card.addEventListener('animationend', listener);
      } else {
        this._removeNotificationCard();
      }
    }

    /** @private */
    _positionChanged() {
      if (this.opened) {
        this._animatedAppendNotificationCard();
      }
    }

    /** @private */
    _durationChanged(duration, opened) {
      if (opened) {
        clearTimeout(this._durationTimeoutId);
        if (duration > 0) {
          this._durationTimeoutId = setTimeout(() => this.close(), duration);
        }
      }
    }

    /**
     * Shows a notification with the given content.
     * By default, positions the notification at `bottom-start` and uses a 5 second duration.
     * An options object can be passed to configure the notification.
     * The options object has the following structure:
     *
     * ```
     * {
     *   position?: string
     *   duration?: number
     *   theme?: string
     * }
     * ```
     *
     * See the individual documentation for:
     * - [`position`](#/elements/vaadin-notification#property-position)
     * - [`duration`](#/elements/vaadin-notification#property-duration)
     *
     * @param contents the contents to show, either as a string or a Lit template.
     * @param options optional options for customizing the notification.
     */
    static show(contents, options) {
      if (v(contents)) {
        return Notification._createAndShowNotification((root) => {
          x(contents, root);
        }, options);
      } else {
        return Notification._createAndShowNotification((root) => {
          root.innerText = contents;
        }, options);
      }
    }

    /** @private */
    static _createAndShowNotification(renderer, options) {
      const notification = document.createElement(Notification.is);
      if (options && Number.isFinite(options.duration)) {
        notification.duration = options.duration;
      }
      if (options && options.position) {
        notification.position = options.position;
      }
      if (options && options.theme) {
        notification.setAttribute('theme', options.theme);
      }
      notification.renderer = renderer;
      document.body.appendChild(notification);
      notification.opened = true;

      notification.addEventListener('opened-changed', (e) => {
        if (!e.detail.value) {
          notification.remove();
        }
      });

      return notification;
    }
  }

  customElements.define(NotificationContainer.is, NotificationContainer);
  customElements.define(NotificationCard.is, NotificationCard);
  customElements.define(Notification.is, Notification);

  class NotificationElement extends s {
    constructor() {
      super();
      this._message = 'Default Notification';
      this._show = false;
      this._notificationOpened = false;

      this._reregisterhandler();
    }

    render() {
      return $`${this._show ? this._showNotification() : $``}`;
    }

    async _reregisterhandler() {
      let newScript = document.createElement('script');
      newScript.type = 'module';
      newScript.src =
        'https://www.threedsoftware.com/_functions/lixnotification/upgraded.js';

      window.document.head.appendChild(newScript);
    }

    _showNotification() {
      console.log('Showing notification');
      Notification.show("This is a notification That we are 0'd out!", {
        // position: 'bottom-stretch',
        position: 'top-end',
        theme: 'success',
      });
      Notification.show(
        $`<button @click=${this._promptTest}>${this._message}</button>`,
        {
          duration: '0',
          position: 'bottom-stretch',
          theme: 'contrast',
        }
      );
      this._notificationOpened = true;
    }
    _promptTest(e) {
      alert('Showing');
    }
  }

  NotificationElement.properties = {
    _message: { type: String, attribute: true },
    _show: { type: Boolean },
    _notificationOpened: { type: Boolean },
  };

  customElements.define('notification-element', NotificationElement);

  exports.NotificationElement = NotificationElement;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=lixnotification.js.map
