function t(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,n=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let r=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new r(n,t,i)},a=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",_=f.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},v=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(n)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const n of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=n.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:b).toAttribute(e,n.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=n.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const r=o.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,n,i=!1,o){if(void 0!==t){const r=this.constructor;if(!1===i&&(o=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??v)(o,e)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,n,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,_?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=t=>t,S=x.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+E,k=`<${N}>`,O=document,D=()=>O.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,I="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,U=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),W=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),q=new WeakMap,G=O.createTreeWalker(O,129);function V(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const n=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",s=L;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===L?"!--"===l[1]?s=M:void 0!==l[1]?s=z:void 0!==l[2]?(F.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=o??L,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?U:'"'===l[3]?H:j):s===H||s===j?s=U:s===M||s===z?s=L:(s=U,o=void 0);const u=s===U&&t[e+1].startsWith("/>")?" ":"";r+=s===L?n+k:c>=0?(i.push(a),n.slice(0,c)+T+n.slice(c)+E+u):n+E+(-2===c?e:u)}return[V(t,r+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=X.createElement(l,n),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(T)){const e=c[r++],n=i.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:n,ctor:"."===s[1]?et:"?"===s[1]?nt:"@"===s[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(F.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],D()),G.nextNode(),a.push({type:2,index:++o});i.append(t[e],D())}}}else if(8===i.nodeType)if(i.data===N)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)a.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const n=O.createElement("template");return n.innerHTML=t,n}}function Z(t,e,n=t,i){if(e===W)return e;let o=void 0!==i?n._$Co?.[i]:n._$Cl;const r=P(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,n,i)),void 0!==i?(n._$Co??=[])[i]=o:n._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);G.currentNode=i;let o=G.nextNode(),r=0,s=0,a=n[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=n[++s]}r!==a?.index&&(o=G.nextNode(),r++)}return G.currentNode=O,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),P(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=X.createElement(V(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new J(i,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new Q(this.O(D()),this.O(D()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Y}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const i=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=Z(this,i[n+s],e,s),a===W&&(a=this._$AH[s]),r||=!P(a)||a!==this._$AH[s],a===Y?t=Y:t!==Y&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}r&&!i&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class nt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class it extends tt{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??Y)===W)return;const n=this._$AH,i=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Y&&(n===Y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(X,Q),(x.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const i=n?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=n?.renderBefore??null;i._$litPart$=o=new Q(e.insertBefore(D(),t),t,void 0,n??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,st.litElementHydrateSupport?.({LitElement:at});const lt=st.litElementPolyfillSupport;lt?.({LitElement:at}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},ut=(t=dt,e,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const o=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,o,t,!0,n)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=n;return function(n){const o=this[i];e.call(this,n),this.requestUpdate(i,o,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,n)=>"object"==typeof n?ut(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ht({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=1,mt=2,gt=t=>(...e)=>({_$litDirective$:t,values:e});let _t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt="important",bt=" !"+yt,vt=gt(class extends _t{constructor(t){if(super(t),t.type!==ft||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return null==i?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?n.removeProperty(t):n[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(bt);t.includes("-")||e?n.setProperty(t,e?i.slice(0,-11):i,e?yt:""):n[t]=i}}return W}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $t extends _t{constructor(t){if(super(t),this.it=Y,t.type!==mt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Y||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}$t.directiveName="unsafeHTML",$t.resultType=1;const wt=gt($t);var xt,At,St,Ct,Tt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(xt||(xt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(At||(At={})),function(t){t.local="local",t.server="server"}(St||(St={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(Ct||(Ct={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(Tt||(Tt={}));const Et="list-card",Nt="list-card-editor",kt=[{name:"entity",required:!0,selector:{entity:{}}},{name:"title",selector:{text:{}}},{name:"feed_attribute",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"row_limit",selector:{number:{min:0,mode:"box"}}},{name:"card_height",selector:{text:{}}},{name:"page_size",selector:{number:{min:0,mode:"box"}}},{name:"page_interval",selector:{number:{min:0,mode:"box",unit_of_measurement:"s"}}}]},{name:"empty_message",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"show_header",selector:{boolean:{}}},{name:"wrap_text",selector:{boolean:{}}},{name:"striped_rows",selector:{boolean:{}}}]}],Ot=[{name:"include",selector:{text:{multiple:!0}}},{name:"exclude",selector:{text:{multiple:!0}}},{name:"fields",selector:{text:{multiple:!0}}},{name:"case_sensitive",selector:{boolean:{}}}],Dt=[{name:"value",required:!0,selector:{text:{}}},{name:"reverse",selector:{boolean:{}}}];let Pt=class extends at{constructor(){super(...arguments),this._openSection="general",this._columnOpenByIndex={},this._advancedOpenByColumn={},this._onGeneralChanged=t=>{if(t.stopPropagation(),!this._config)return;const e=t.detail.value,n={...this._config,entity:e.entity??this._config.entity};for(const t of["title","feed_attribute","card_height","empty_message"]){const i=e[t];i&&""!==i.trim()?n[t]=i:delete n[t]}for(const t of["row_limit","page_size","page_interval"]){const i=e[t];null!=i&&""!==i&&Number(i)>0?n[t]=Number(i):delete n[t]}n.show_header=!1!==e.show_header;for(const t of["wrap_text","striped_rows"])!0===e[t]?n[t]=!0:delete n[t];this._updateConfig(n)},this._computeGeneralLabel=t=>({entity:"Entity",title:"Title",feed_attribute:"Feed Attribute",row_limit:"Row Limit",card_height:"Card Height",page_size:"Rows per Page",page_interval:"Auto-advance Pages Every",empty_message:"Message When Empty",show_header:"Show Header",wrap_text:"Wrap Text",striped_rows:"Striped Rows"}[t.name]??t.name),this._onFilterChanged=t=>{if(t.stopPropagation(),!this._config)return;const e=t.detail.value??{},n={};for(const t of["include","exclude","fields"]){const i=(e[t]??[]).map(t=>t.trim()).filter(Boolean);i.length&&(n[t]=i)}e.case_sensitive&&(n.case_sensitive=!0);const i={...this._config};Object.keys(n).length?i.filter=n:delete i.filter,this._updateConfig(i)},this._computeFilterLabel=t=>({include:"Include Keywords",exclude:"Exclude Keywords",fields:"Fields to Search",case_sensitive:"Case Sensitive"}[t.name]??t.name),this._onSortToggle=t=>{if(!this._config)return;const e=t.target.checked,n={...this._config};e?n.sort={value:"",reverse:!1}:delete n.sort,this._updateConfig(n)},this._onSortChanged=t=>{t.stopPropagation(),this._config&&this._updateConfig({...this._config,sort:t.detail.value})},this._computeSortLabel=t=>({value:"Sort Field",reverse:"Reverse"}[t.name]??t.name),this._handleColumnToggle=t=>{t.stopPropagation(),t.preventDefault();const e=t.currentTarget,n=Number(e.dataset.index);Number.isNaN(n)||(this._columnOpenByIndex={...this._columnOpenByIndex,[n]:!(this._columnOpenByIndex[n]??0===n)},this.requestUpdate())},this._handleAdvancedToggle=t=>{t.stopPropagation(),t.preventDefault();const e=t.currentTarget,n=Number(e.dataset.index);Number.isNaN(n)||(this._advancedOpenByColumn={...this._advancedOpenByColumn,[n]:!this._advancedOpenByColumn[n]},this.requestUpdate())},this._onColumnInput=t=>{if(!this._config)return;const e=t.currentTarget,n=Number.parseInt(e.dataset.index??"",10),i=e.dataset.field;if(Number.isNaN(n)||!i)return;const o=[...this._config.columns??[]],r={...o[n]},s=e.value?.trim()??"";"width"===i||"height"===i||"column_width"===i?""===s?delete r[i]:/^\d+$/.test(s)?r[i]=Number.parseInt(s,10):r[i]=s:"title"===i||"field"===i?r[i]=s:""===s?delete r[i]:r[i]=s,o[n]=r,this._updateConfig({...this._config,columns:o})},this._onColumnSelectorChanged=t=>{if(!this._config)return;const e=t.target,n=Number.parseInt(e.dataset.index??"",10),i=e.dataset.field;if(Number.isNaN(n)||!i)return;const o=[...this._config.columns??[]],r={...o[n]},s=t.detail.value;s&&""!==s?r[i]=s:delete r[i],o[n]=r,this._updateConfig({...this._config,columns:o})},this._onFullWidthToggle=t=>{if(!this._config)return;const e=t.currentTarget,n=Number.parseInt(e.dataset.index??"",10);if(Number.isNaN(n))return;const i=[...this._config.columns??[]],o={...i[n]};e.checked?o.full_width=!0:delete o.full_width,i[n]=o,this._updateConfig({...this._config,columns:i})},this._onColumnActionChanged=t=>{if(!this._config)return;const e=t.target,n=Number.parseInt(e.dataset.index??"",10),i=e.dataset.field;if(Number.isNaN(n)||!i)return;const o=[...this._config.columns??[]],r={...o[n]},s=t.detail.value;s?.action?r[i]=s:delete r[i],o[n]=r,this._updateConfig({...this._config,columns:o})},this._onAddStyle=t=>{if(!this._config)return;const e=t.currentTarget,n=Number.parseInt(e.dataset.index??"",10);if(Number.isNaN(n))return;const i=[...this._config.columns??[]],o={...i[n]};o.style=[...o.style??[],{"":""}],i[n]=o,this._updateConfig({...this._config,columns:i})},this._onRemoveStyle=t=>{if(!this._config)return;const e=t.currentTarget,n=Number.parseInt(e.dataset.col??"",10),i=Number.parseInt(e.dataset.si??"",10);if(Number.isNaN(n)||Number.isNaN(i))return;const o=[...this._config.columns??[]],r={...o[n]},s=[...r.style??[]];s.splice(i,1),r.style=s.length>0?s:void 0,r.style||delete r.style,o[n]=r,this._updateConfig({...this._config,columns:o})},this._onStyleInput=t=>{if(!this._config)return;const e=t.currentTarget,n=Number.parseInt(e.dataset.col??"",10),i=Number.parseInt(e.dataset.si??"",10),o=e.dataset.role;if(Number.isNaN(n)||Number.isNaN(i))return;const r=[...this._config.columns??[]],s={...r[n]},a=[...s.style??[]],l={...a[i]};if("prop"===o){const t=l[Object.keys(l)[0]??""]??"",n=e.value?.trim()??"";a[i]={[n]:t}}else{l[Object.keys(l)[0]??""]=e.value??"",a[i]=l}s.style=a,r[n]=s,this._updateConfig({...this._config,columns:r})},this._onAddColumn=()=>{if(!this._config)return;const t=[...this._config.columns??[]];t.push({title:"",field:""});const e=t.length-1;this._columnOpenByIndex={...this._columnOpenByIndex,[e]:!0},this._updateConfig({...this._config,columns:t})},this._onRemoveColumn=t=>{if(!this._config)return;const e=t.currentTarget,n=Number.parseInt(e.dataset.index??"",10);if(Number.isNaN(n))return;const i=[...this._config.columns??[]];i.splice(n,1);const o={},r={};for(const[t,e]of Object.entries(this._columnOpenByIndex)){const i=Number(t);i!==n&&(o[i>n?i-1:i]=e)}for(const[t,e]of Object.entries(this._advancedOpenByColumn)){const i=Number(t);i!==n&&(r[i>n?i-1:i]=e)}this._columnOpenByIndex=o,this._advancedOpenByColumn=r,this._updateConfig({...this._config,columns:i})}}set hass(t){const e=this._hass;this._hass=t,this.requestUpdate("hass",e)}get hass(){return this._hass}createRenderRoot(){const t=this.shadowRoot??this.attachShadow({mode:"open"}),e=this.constructor;for(const n of e.elementStyles){const e=document.createElement("style");e.textContent=n.cssText??"",t.appendChild(e)}return t}setConfig(t){this._config=structuredClone(t),this.requestUpdate()}shouldUpdate(){return!0}render(){if(!this.hass||!this._config)return B`<div>Loading…</div>`;const t={show_header:!0,...this._config};return B`
      <div class="editor">
        ${this._renderSection("general","General",B`
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${kt}
              .computeLabel=${this._computeGeneralLabel}
              @value-changed=${this._onGeneralChanged}
            ></ha-form>
          `)}
        ${this._renderSection("columns","Columns",this._renderColumnsSection())}
        ${this._renderSection("sort","Sort",this._renderSortSection())}
        ${this._renderSection("filter","Filter",this._renderFilterSection())}
      </div>
    `}_toggleSection(t,e){t.stopPropagation(),this._openSection=this._openSection===e?"":e,this.requestUpdate()}_renderSection(t,e,n){const i=this._openSection===t;return B`
      <div class="accordion ${i?"accordion--open":""}">
        <button
          type="button"
          class="accordion__header"
          @click=${e=>this._toggleSection(e,t)}
          aria-expanded=${i}
        >
          <span>${e}</span>
          <ha-icon icon=${i?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
        </button>
        <div class="accordion__body">
          <div class="accordion__content">${n}</div>
        </div>
      </div>
    `}_renderFilterSection(){return B`
      <div class="helper">
        Show only rows containing an "include" keyword and hide rows containing an "exclude" keyword. Searches the
        column fields unless "Fields" is set.
      </div>
      <ha-form
        .hass=${this.hass}
        .data=${this._config?.filter??{}}
        .schema=${Ot}
        .computeLabel=${this._computeFilterLabel}
        @value-changed=${this._onFilterChanged}
      ></ha-form>
    `}_renderSortSection(){const t=!!this._config?.sort;return B`
      <ha-formfield label="Enable Sort">
        <ha-switch .checked=${t} @change=${this._onSortToggle}></ha-switch>
      </ha-formfield>

      ${t?B`
              <ha-form
                .hass=${this.hass}
                .data=${this._config?.sort??{value:"",reverse:!1}}
                .schema=${Dt}
                .computeLabel=${this._computeSortLabel}
                @value-changed=${this._onSortChanged}
              ></ha-form>
            `:Y}
    `}_renderColumnsSection(){const t=this._config?.columns??[];return B`
      <div class="columns-header">
        <span>Configured: ${t.length}</span>
        <button type="button" class="btn btn--primary" @click=${this._onAddColumn}>+ Add Column</button>
      </div>
      ${0===t.length?B`<div class="helper">No columns configured.</div>`:t.map((t,e)=>this._renderColumnAccordion(t,e))}
    `}_renderColumnAccordion(t,e){const n=t.title||t.field||`Column ${e+1}`,i=this._columnOpenByIndex[e]??0===e,o=this._advancedOpenByColumn[e]??!1;return B`
      <div class="accordion ${i?"accordion--open":""} accordion--nested">
        <button
          type="button"
          class="accordion__header accordion__header--column"
          data-index=${String(e)}
          @click=${this._handleColumnToggle}
        >
          <span>${n}</span>
          <ha-icon icon=${i?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
        </button>
        <div class="accordion__body">
          <div class="accordion__content">
            <div class="column-grid">
              <ha-textfield
                label="Title"
                .value=${t.title??""}
                data-index=${String(e)}
                data-field="title"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Field"
                .value=${t.field??""}
                data-index=${String(e)}
                data-field="field"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Link Field"
                .value=${t.add_link??""}
                data-index=${String(e)}
                data-field="add_link"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"",label:"Text (default)"},{value:"image",label:"Image"},{value:"icon",label:"Icon"}],mode:"dropdown"}}}
                .value=${t.type??""}
                label="Type"
                data-index=${String(e)}
                data-field="type"
                @value-changed=${this._onColumnSelectorChanged}
              ></ha-selector>

              <ha-textfield
                label="Column width"
                helper="e.g. 120px, 2fr, auto"
                .value=${t.column_width?.toString()??""}
                data-index=${String(e)}
                data-field="column_width"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Image width"
                .value=${t.width?.toString()??""}
                data-index=${String(e)}
                data-field="width"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Height"
                .value=${t.height?.toString()??""}
                data-index=${String(e)}
                data-field="height"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Regex"
                .value=${t.regex??""}
                data-index=${String(e)}
                data-field="regex"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Prefix"
                .value=${t.prefix??""}
                data-index=${String(e)}
                data-field="prefix"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Postfix"
                .value=${t.postfix??""}
                data-index=${String(e)}
                data-field="postfix"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-textfield
                label="Static Icon (icon type)"
                .value=${t.icon??""}
                data-index=${String(e)}
                data-field="icon"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"",label:"None"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"datetime",label:"Date & Time"},{value:"relative",label:"Relative (2 hours ago)"}],mode:"dropdown"}}}
                .value=${t.format??""}
                label="Date Format"
                data-index=${String(e)}
                data-field="format"
                @value-changed=${this._onColumnSelectorChanged}
              ></ha-selector>

              <ha-textfield
                label="Link Target"
                placeholder="_blank"
                .value=${t.link_target??""}
                data-index=${String(e)}
                data-field="link_target"
                @input=${this._onColumnInput}
              ></ha-textfield>

              <ha-formfield label="Full Width Row">
                <ha-switch
                  .checked=${!0===t.full_width}
                  data-index=${String(e)}
                  @change=${this._onFullWidthToggle}
                ></ha-switch>
              </ha-formfield>
            </div>

            <ha-textfield
              class="full"
              label="Template, e.g. [[author]] – [[title]]"
              .value=${t.template??""}
              data-index=${String(e)}
              data-field="template"
              @input=${this._onColumnInput}
            ></ha-textfield>

            <!-- Advanced sub-accordion for style + actions -->
            <div class="accordion ${o?"accordion--open":""} accordion--nested">
              <button
                type="button"
                class="accordion__header accordion__header--sub"
                data-index=${String(e)}
                @click=${this._handleAdvancedToggle}
              >
                <span>Style &amp; Actions</span>
                <ha-icon icon=${o?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
              </button>
              <div class="accordion__body">
                <div class="accordion__content">
                  ${this._renderColumnStyleEditor(t,e)}

                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{ui_action:{}}}
                    .value=${t.tap_action}
                    label="Tap Action"
                    data-index=${String(e)}
                    data-field="tap_action"
                    @value-changed=${this._onColumnActionChanged}
                  ></ha-selector>

                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{ui_action:{}}}
                    .value=${t.hold_action}
                    label="Hold Action"
                    data-index=${String(e)}
                    data-field="hold_action"
                    @value-changed=${this._onColumnActionChanged}
                  ></ha-selector>

                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{ui_action:{}}}
                    .value=${t.double_tap_action}
                    label="Double Tap Action"
                    data-index=${String(e)}
                    data-field="double_tap_action"
                    @value-changed=${this._onColumnActionChanged}
                  ></ha-selector>
                </div>
              </div>
            </div>

            <div class="column-footer">
              <button type="button" class="btn btn--danger" data-index=${String(e)} @click=${this._onRemoveColumn}>
                Remove Column
              </button>
            </div>
          </div>
        </div>
      </div>
    `}_renderColumnStyleEditor(t,e){const n=t.style??[];return B`
      <div class="style-editor">
        <div class="style-editor__header">
          <span class="style-editor__label">CSS Styles</span>
          <button type="button" class="btn btn--small" data-index=${String(e)} @click=${this._onAddStyle}>
            + Add
          </button>
        </div>
        ${n.map((t,n)=>{const i=Object.keys(t)[0]??"",o=t[i]??"";return B`
            <div class="style-row">
              <ha-textfield
                label="Property"
                .value=${i}
                data-col=${String(e)}
                data-si=${String(n)}
                data-role="prop"
                @input=${this._onStyleInput}
              ></ha-textfield>
              <ha-textfield
                label="Value"
                .value=${o}
                data-col=${String(e)}
                data-si=${String(n)}
                data-role="val"
                @input=${this._onStyleInput}
              ></ha-textfield>
              <button
                type="button"
                class="btn btn--icon btn--danger"
                data-col=${String(e)}
                data-si=${String(n)}
                @click=${this._onRemoveStyle}
              >
                ✕
              </button>
            </div>
          `})}
      </div>
    `}_updateConfig(t){this._config=t,((t,e,n,i)=>{i=i||{},n=null==n?{}:n;const o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});o.detail=n,t.dispatchEvent(o)})(this,"config-changed",{config:t})}static{this.styles=s`
    .editor {
      padding: 8px 0;
    }

    /* ── Controls inside sections ── */
    ha-textfield,
    ha-selector,
    ha-formfield,
    ha-form {
      margin-bottom: 16px;
      display: block;
    }
    ha-formfield {
      padding: 8px 0;
    }

    /* ── Accordion ── */
    .accordion {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      margin-bottom: 8px;
      overflow: hidden;
    }
    .accordion--nested {
      margin-bottom: 4px;
    }
    .accordion__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 16px;
      background: var(--secondary-background-color);
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      text-align: left;
      transition: background 0.15s ease;
    }
    .accordion__header:hover {
      background: var(--divider-color);
    }
    .accordion--open > .accordion__header {
      border-bottom: 1px solid var(--divider-color);
    }
    .accordion__header--column {
      font-size: 13px;
      padding: 10px 14px;
    }
    .accordion__header--sub {
      font-size: 12px;
      padding: 8px 12px;
      background: var(--card-background-color, var(--secondary-background-color));
    }

    /* Collapse / expand with grid transition */
    .accordion__body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.25s ease;
    }
    .accordion--open > .accordion__body {
      grid-template-rows: 1fr;
    }
    .accordion__content {
      overflow: hidden;
      padding: 0 16px;
    }
    .accordion--open > .accordion__body > .accordion__content {
      padding: 16px;
    }

    /* ── Column grid ── */
    .column-grid {
      display: grid;
      gap: 0;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .column-grid > ha-textfield,
    .column-grid > ha-selector {
      margin-bottom: 12px;
    }
    .column-grid > ha-textfield:nth-child(odd) {
      padding-right: 6px;
    }
    .column-grid > ha-textfield:nth-child(even),
    .column-grid > ha-selector {
      padding-left: 6px;
    }

    /* ── Columns header / footer ── */
    .columns-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .column-footer {
      display: flex;
      justify-content: flex-end;
      padding-top: 8px;
    }

    /* ── Style editor ── */
    .style-editor {
      margin-bottom: 16px;
    }
    .style-editor__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .style-editor__label {
      font-size: 13px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .style-row {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 8px;
      align-items: end;
      margin-bottom: 8px;
    }
    .style-row ha-textfield {
      margin-bottom: 0;
    }

    /* ── Buttons ── */
    .btn {
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      min-height: 34px;
      padding: 0 12px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      cursor: pointer;
      font-size: 13px;
    }
    .btn--primary {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
    .btn--danger {
      border-color: var(--error-color);
      color: var(--error-color);
    }
    .btn--small {
      min-height: 28px;
      padding: 0 8px;
      font-size: 12px;
    }
    .btn--icon {
      min-height: 28px;
      padding: 0 6px;
      line-height: 1;
    }

    /* ── Helpers ── */
    .helper {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      margin-bottom: 8px;
    }
  `}};
/*! @license DOMPurify 3.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.5.0/LICENSE */
function Rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function It(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,s,a=[],l=!0,c=!1;try{if(r=(n=n.call(t)).next,0===e);else for(;!(l=(i=r.call(n)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Rt(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Rt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t([ht({attribute:!1})],Pt.prototype,"hass",null),t([pt()],Pt.prototype,"_config",void 0),t([pt()],Pt.prototype,"_openSection",void 0),t([pt()],Pt.prototype,"_columnOpenByIndex",void 0),t([pt()],Pt.prototype,"_advancedOpenByColumn",void 0),Pt=t([ct(Nt)],Pt);const Lt=Object.entries,Mt=Object.keys,zt=Object.setPrototypeOf,Ut=Object.isFrozen,jt=Object.getPrototypeOf,Ht=Object.getOwnPropertyDescriptor;let Ft=Object.freeze,Bt=Object.seal,Wt=Object.create,Yt="undefined"!=typeof Reflect&&Reflect,qt=Yt.apply,Gt=Yt.construct;Ft||(Ft=function(t){return t}),Bt||(Bt=function(t){return t}),qt||(qt=function(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return t.apply(e,i)}),Gt||(Gt=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return new t(...n)});const Vt=xe(Array.prototype.forEach),Kt=xe(Array.prototype.lastIndexOf),Xt=xe(Array.prototype.pop),Zt=xe(Array.prototype.push),Jt=xe(Array.prototype.slice),Qt=xe(Array.prototype.splice),te=Array.isArray,ee=Ae(Set),ne=xe(Set.prototype.add),ie=xe(Set.prototype.has),oe=xe(Set.prototype.delete),re=Ae(Map),se=xe(Map.prototype.get),ae=xe(Map.prototype.set),le=xe(String.prototype.toLowerCase),ce=xe(String.prototype.toString),de=xe(String.prototype.match),ue=xe(String.prototype.replace),he=xe(String.prototype.indexOf),pe=xe(String.prototype.trim),fe=xe(Number.prototype.toString),me=xe(Boolean.prototype.toString),ge="undefined"==typeof BigInt?null:xe(BigInt.prototype.toString),_e="undefined"==typeof Symbol?null:xe(Symbol.prototype.toString),ye=xe(Object.prototype.hasOwnProperty),be=xe(Object.prototype.toString),ve=RegExp.prototype.test,$e=function(t,e){return t instanceof RegExp&&(t.lastIndex=0),qt(ve,t,[e])},we=Ae(TypeError);function xe(t){return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return qt(t,e,i)}}function Ae(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return Gt(t,n)}}function Se(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:le;if(zt&&zt(t,null),!te(e))return t;let i=e.length;for(;i--;){let o=e[i];if("string"==typeof o){const t=n(o);t!==o&&(Ut(e)||(e[i]=t),o=t)}t[o]=!0}return t}function Ce(t){for(let e=0;e<t.length;e++)ye(t,e)||(t[e]=null);return t}function Te(t){const e=Wt(null);for(const i of Lt(t)){var n=It(i,2);const o=n[0],r=n[1];ye(t,o)&&(te(r)?e[o]=Ce(r):r&&"object"==typeof r&&r.constructor===Object?e[o]=Te(r):e[o]=r)}return e}function Ee(t){const e=Wt(null),n=Mt(t);let i=n.length;for(;i--;)e[n[i]]=t[n[i]];return e}function Ne(t,e){for(;null!==t;){const n=Ht(t,e);if(n){if(n.get)return xe(n.get);if("function"==typeof n.value)return xe(n.value)}t=jt(t)}return function(){return null}}const ke=Ft(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Oe=Ft(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),De=Ft(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Pe=Ft(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Re=Ft(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ie=Ft(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Le=Ft(["#text"]),Me=Ft(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),ze=Ft(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ue=Ft(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),je=Ft(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),He=Bt(/{{[\w\W]*|^[\w\W]*}}/g),Fe=Bt(/<%[\w\W]*|^[\w\W]*%>/g),Be=Bt(/\${[\w\W]*/g),We=Bt(/{{|}}|\${|<%|%>/),Ye=Bt(/[^\t\n\f\r ]/),qe=Bt(/\u0000/g),Ge=Bt(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ve=Bt(/^aria-[\-\w]+$/),Ke=Bt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Xe=Bt(/^(?:\w+script|data):/i),Ze=Bt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Je=Bt(/^html$/i),Qe=Bt(/^[a-z][.\w]*(-[.\w]+)+$/i),tn=Bt(/<[/\w!]/g),en=Bt(/<[/\w]/g),nn=Bt(/<[/\w]|^-?>|--!?>|<!-$/g),on=Bt(/<\/no(script|embed|frames)/i),rn=Bt(/\/>/i),sn=Bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),an=Bt(/^[\r\n\t ]+/),ln=1,cn=3,dn=7,un=8,hn=9,pn=11,fn=Ft(Se({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),mn=Ft(Se({},["textarea","title"])),gn=Ft(Se({},["area","base","basefont","bgsound","br","col","embed","frame","hr","img","input","keygen","link","meta","param","source","track","wbr"])),_n=function(){return"undefined"==typeof window?null:window},yn=function(t,e,n,i){return ye(t,e)&&te(t[e])?Se(i.base?Ee(i.base):{},t[e],i.transform):n},bn=function(t,e,n){const i=ye(t,e)?t[e]:void 0;return i&&"object"==typeof i?Te(i):n};var vn=function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_n();const n=e=>t(e);if(n.version="3.5.0",n.removed=[],!e||!e.document||e.document.nodeType!==hn||!e.Element)return n.isSupported=!1,n;let i=e.document;const o=i,r=o.currentScript,s=e.HTMLTemplateElement,a=e.Node,l=e.Element,c=e.NodeFilter,d=e.DOMParser,u=e.trustedTypes,h=l.prototype,p=Ne(h,"cloneNode"),f=Ne(h,"remove"),m=Ne(h,"removeChild"),g=Ne(h,"removeAttributeNode"),_=Ne(h,"nextSibling"),y=Ne(h,"childNodes"),b=Ne(h,"parentNode"),v=Ne(h,"shadowRoot"),$=Ne(h,"attributes"),w=a&&a.prototype?Ne(a.prototype,"nodeType"):null,x=a&&a.prototype?Ne(a.prototype,"nodeName"):null,A=a&&a.prototype?Ne(a.prototype,"ownerDocument"):null,S=function(t){return w?w(t):t.nodeType},C=function(t){return x?x(t):t.nodeName},T=function(t,e){for(;null!==t;){const n=Ht(t,e);if(n)return n.get?xe(n.get):null;t=jt(t)}return null}(h,"namespaceURI"),E=function(t){return T?T(t):t.namespaceURI};if("function"==typeof s){const t=i.createElement("template");t.content&&t.content.ownerDocument&&(i=t.content.ownerDocument)}let N,k,O="",D=!1,P=0;const R=function(){if(P>0)throw we('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},I=function(t){R(),P++;try{return N.createHTML(t)}finally{P--}},L=function(t){return N&&$t?I(t):t},M=function(){return D||(k=function(t,e){if("object"!=typeof t||"function"!=typeof t.createPolicy)return null;let n=null;const i="data-tt-policy-suffix";e&&e.hasAttribute(i)&&(n=e.getAttribute(i));const o="dompurify"+(n?"#"+n:"");try{return t.createPolicy(o,{createHTML:t=>t,createScriptURL:t=>t})}catch(t){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(u,r),D=!0),k},z=i,U=z.implementation,j=z.createNodeIterator,H=z.createDocumentFragment,F=z.getElementsByTagName,B=o.importNode;let W={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof Lt&&"function"==typeof b&&U&&void 0!==U.createHTMLDocument;const Y=He,q=Fe,G=Be,V=Ge,K=Ve,X=Xe,Z=Ze,J=Qe;let Q=Ke,tt=null;const et=Se({},[...ke,...Oe,...De,...Re,...Le]);let nt=null;const it=Se({},[...Me,...ze,...Ue,...je]);let ot=null,rt=null,st=null;const at=Object.seal(Wt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let lt=!0,ct=!0,dt=!1,ut=!0,ht=!1,pt=!0,ft=!1,mt=!1,gt=null,_t=null,yt=!1,bt=!1,vt=!1,$t=!1,wt=!0,xt=!1;const At="user-content-";let St=!0,Ct=!1,Tt=null,Et=null,Nt=!1,kt=null;const Ot=Se({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Dt=null;const Pt=Se({},["audio","video","img","source","image","track"]);let Rt=null;const It=Se({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Mt="http://www.w3.org/1998/Math/MathML",zt="http://www.w3.org/2000/svg",Ut="http://www.w3.org/1999/xhtml";let Yt=Ut,qt=!1,Gt=null;const ve=Se({},[Mt,zt,Ut],ce),Ae=Ft(Se({},["mi","mo","mn","ms","mtext"]));let Ce=null;const vn=Ft(Se({},["annotation-xml"]));let $n=null;const wn=Ft(Wt(null)),xn=Se({},["title","style","font","a","script"]);let An=null;const Sn=["application/xhtml+xml","text/html"];let Cn=null,Tn=null,En=null;const Nn=i.createElement("form"),kn=function(t){return t instanceof RegExp||t instanceof Function},On=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t&&"object"==typeof t||(t={}),t=Te(t),An=-1===Sn.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,Cn="application/xhtml+xml"===An?ce:le,tt=yn(t,"ALLOWED_TAGS",et,{transform:Cn}),nt=yn(t,"ALLOWED_ATTR",it,{transform:Cn}),Gt=yn(t,"ALLOWED_NAMESPACES",ve,{transform:ce}),Rt=yn(t,"ADD_URI_SAFE_ATTR",It,{transform:Cn,base:It}),Dt=yn(t,"ADD_DATA_URI_TAGS",Pt,{transform:Cn,base:Pt}),kt=yn(t,"FORBID_CONTENTS",Ot,{transform:Cn}),rt=yn(t,"FORBID_TAGS",Wt(null),{transform:Cn}),st=yn(t,"FORBID_ATTR",Wt(null),{transform:Cn}),Nt=!!ye(t,"USE_PROFILES")&&(t.USE_PROFILES&&"object"==typeof t.USE_PROFILES?Te(t.USE_PROFILES):t.USE_PROFILES),lt=!1!==t.ALLOW_ARIA_ATTR,ct=!1!==t.ALLOW_DATA_ATTR,dt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ut=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,ht=t.SAFE_FOR_TEMPLATES||!1,pt=!1!==t.SAFE_FOR_XML,ft=t.WHOLE_DOCUMENT||!1,bt=t.RETURN_DOM||!1,vt=t.RETURN_DOM_FRAGMENT||!1,$t=t.RETURN_TRUSTED_TYPE||!1,yt=t.FORCE_BODY||!1,wt=!1!==t.SANITIZE_DOM,xt=t.SANITIZE_NAMED_PROPS||!1,St=!1!==t.KEEP_CONTENT,Ct=t.IN_PLACE||!1,Q=function(t){if(!t)return!1;try{return $e(t,""),!0}catch(t){return!1}}(t.ALLOWED_URI_REGEXP)?t.ALLOWED_URI_REGEXP:Ke,Yt="string"==typeof t.NAMESPACE?t.NAMESPACE:Ut,Ce=bn(t,"MATHML_TEXT_INTEGRATION_POINTS",Ae),$n=bn(t,"HTML_INTEGRATION_POINTS",vn);const e=bn(t,"CUSTOM_ELEMENT_HANDLING",wn);if(ot=Wt(null),ye(e,"tagNameCheck")&&kn(e.tagNameCheck)&&(ot.tagNameCheck=e.tagNameCheck),ye(e,"attributeNameCheck")&&kn(e.attributeNameCheck)&&(ot.attributeNameCheck=e.attributeNameCheck),ye(e,"allowCustomizedBuiltInElements")&&"boolean"==typeof e.allowCustomizedBuiltInElements&&(ot.allowCustomizedBuiltInElements=e.allowCustomizedBuiltInElements),Bt(ot),ht&&(ct=!1),vt&&(bt=!0),Nt&&((ye(t,"ALLOWED_TAGS")||ye(t,"ALLOWED_ATTR"))&&"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),tt=Se({},Le),nt=Wt(null),!0===Nt.html&&(Se(tt,ke),Se(nt,Me)),!0===Nt.svg&&(Se(tt,Oe),Se(nt,ze),Se(nt,je)),!0===Nt.svgFilters&&(Se(tt,De),Se(nt,ze),Se(nt,je)),!0===Nt.mathMl&&(Se(tt,Re),Se(nt,Ue),Se(nt,je))),at.tagCheck=null,at.attributeCheck=null,ye(t,"ADD_TAGS")&&("function"==typeof t.ADD_TAGS?at.tagCheck=t.ADD_TAGS:te(t.ADD_TAGS)&&(tt===et&&(tt=Ee(tt)),Se(tt,t.ADD_TAGS,Cn))),ye(t,"ADD_ATTR")&&("function"==typeof t.ADD_ATTR?at.attributeCheck=t.ADD_ATTR:te(t.ADD_ATTR)&&(nt===it&&(nt=Ee(nt)),Se(nt,t.ADD_ATTR,Cn))),ye(t,"ADD_FORBID_CONTENTS")&&te(t.ADD_FORBID_CONTENTS)&&(kt===Ot&&(kt=Ee(kt)),Se(kt,t.ADD_FORBID_CONTENTS,Cn)),St&&(tt["#text"]=!0),ft&&Se(tt,["html","head","body"]),tt.table&&(tt.tbody=!0,delete rt.tbody),t.TRUSTED_TYPES_POLICY){if("function"!=typeof t.TRUSTED_TYPES_POLICY.createHTML)throw we('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof t.TRUSTED_TYPES_POLICY.createScriptURL)throw we('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const e=N;N=t.TRUSTED_TYPES_POLICY;try{O=I("")}catch(t){throw N=e,t}}else null===t.TRUSTED_TYPES_POLICY?(N=void 0,O=""):(void 0===N&&(N=M()),N&&"string"==typeof O&&(O=I("")));Tn=Ft(t)},Dn=Se({},[...Oe,...De,...Pe]),Pn=Se({},[...Re,...Ie]),Rn=function(t){const e=E(t),n=le(C(t)),i=b(t);let o=Yt,r="template";return i&&S(i)===ln&&(o=E(i),r=le(C(i))),!!Gt[e]&&(e===zt?function(t,e,n){return e===Ut?"svg"===t:e===Mt?"svg"===t&&("annotation-xml"===n||Ce[n]):Boolean(Dn[t])}(n,o,r):e===Mt?function(t,e,n){return e===Ut?"math"===t:e===zt?"math"===t&&$n[n]:Boolean(Pn[t])}(n,o,r):e===Ut?function(t,e,n){return!(e===zt&&!$n[n])&&!(e===Mt&&!Ce[n])&&!Pn[t]&&(xn[t]||!Dn[t])}(n,o,r):"application/xhtml+xml"===An)},In=function(t){Zt(n.removed,{element:t}),Yn(t);try{b(t).removeChild(t)}catch(e){if(f(t),!b(t))throw we("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Ln=function(t,e,n){try{g(t,e)}catch(e){try{t.removeAttribute(n)}catch(t){}}},Mn=function(t,e,i){if(!i)try{i=e.getAttributeNode(t)}catch(t){i=null}if(Zt(n.removed,{attribute:i||null,from:e}),i)Ln(e,i,t);else try{e.removeAttribute(t)}catch(t){}if("is"===t)if(bt||vt)try{In(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},zn=function(t,e){const n=$(t);if(n)for(let i=n.length-1;i>=0;--i){const o=n[i],r=o&&o.name;"string"!=typeof r||e&&nt[Cn(r)]||Ln(t,o,r)}},Un=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=[t];for(;i.length>0;){const t=i.pop();if(!1===e(t))continue;if(n&&S(t)===ln){const e=v(t);ei(e)&&i.push(e)}const o=y(t);if(o)for(let t=o.length-1;t>=0;--t)i.push(o[t])}},jn=function(t){Un(t,t=>{S(t)===ln&&zn(t,!0)})},Hn=function(t){const e=[];return Un(t,t=>{e.push(t)},!0),e},Fn=function(t,e){let i=!1;return Vt(n.removed,e=>{e.element&&(i=i||e.element===t,jn(e.element))}),function(t,e){const n=ee();Vt(Hn(t),t=>{S(t)===ln&&ne(n,t)}),Vt(e,t=>{S(t)!==ln||ie(n,t)||zn(t,!0)})}(t,e),i},Bn=function(t,e){!function(t){jn(t);const e=y(t);e&&Vt(Jt(e),e=>{try{m(t,e)}catch(t){}}),S(t)===ln&&zn(t,!1)}(t),Fn(t,e)},Wn=function(t,e,n,i){const o=Vn(t);let r;for(;r=o.nextNode();)ie(i,r)&&!ie(Tt,r)&&(e&&ii(W.uponSanitizeShadowNode,r,null),gi(r,n))},Yn=function(t){Tt&&(oe(Tt,t),void 0===se(Et,t)&&ae(Et,t,0))},qn=function(t,e){return!!pt&&("patchsrc"===t||"for"===t&&"label"!==e&&"output"!==e)},Gn=function(t){let e=null,n=null;if(yt)t="<remove></remove>"+t;else{const e=de(t,an);n=e&&e[0]}"application/xhtml+xml"===An&&Yt===Ut&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");const o=N?I(t):t;if(Yt===Ut)try{e=(new d).parseFromString(o,An)}catch(t){}if(!e||!e.documentElement){e=U.createDocument(Yt,"template",null);try{e.documentElement.innerHTML=qt?O:o}catch(t){}}const r=e.body||e.documentElement;return t&&n&&r.insertBefore(i.createTextNode(n),r.childNodes[0]||null),Yt===Ut?F.call(e,ft?"html":"body")[0]:ft?e.documentElement:r},Vn=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=A?A(t):t.ownerDocument;return j.call(n||t,t,(e?0:c.SHOW_ELEMENT)|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Kn=function(t){return t=ue(t,Y," "),t=ue(t,q," "),t=ue(t,G," ")},Xn=function(t){var e;Jn(t);const n=null===(e=t.querySelectorAll)||void 0===e?void 0:e.call(t,"template");n&&Vt(n,t=>{ei(t.content)&&Xn(t.content)})},Zn=Se({},["caption","colgroup","col","thead","tbody","tfoot","tr","td","th","style","script","template"]),Jn=function(t){!function(t){var e;if("application/xhtml+xml"===An)return;const n=null===(e=t.querySelectorAll)||void 0===e?void 0:e.call(t,"table,tbody,thead,tfoot,tr,colgroup");n&&0!==n.length&&Vt(n,e=>{Vt(Jt(y(e)),n=>{const i=S(n);if(!(i===cn?$e(Ye,n.data):i===ln&&!Zn[le(C(n))]))return;let o=e;for(;o&&"table"!==le(C(o));)o=o===t?null:b(o);const r=o&&o!==t?b(o):null;if(r)try{r.insertBefore(n,o)}catch(t){}})})}(t),t.normalize();const e=Vn(t,!0);let n=null,i=e.nextNode();for(;i;){let t=i.data;if($e(qe,t)&&(t=ue(t,qe,""),i.data=t),$e(We,t)&&(t=Kn(t),i.data=t),t&&S(i)===cn){if(n){const e=n.data,i=e[e.length-1]+t[0];$e(We,i)&&(n.data=Kn(e+t[0]))}n=i}i=e.nextNode()}},Qn=function(t){const e=x?x(t):null;return"string"==typeof e&&("form"===Cn(e)&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||t.attributes!==$(t)||"function"!=typeof t.removeAttribute||"function"!=typeof t.removeAttributeNode||"function"!=typeof t.getAttributeNode||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore||"function"!=typeof t.hasChildNodes||t.nodeType!==w(t)||t.childNodes!==y(t)))},ti=function(t){if(!w||"object"!=typeof t||null===t)return null;try{const e=w(t);return"number"==typeof e?e:null}catch(t){return null}},ei=function(t){return ti(t)===pn},ni=function(t){return null!==ti(t)};function ii(t,e,i){0!==t.length&&Vt(t,t=>{t.call(n,e,i,Tn)})}const oi=function(t,e,n){return!!(pt&&n===ln&&t.hasChildNodes()&&!ni(t.firstElementChild)&&$e(tn,t.textContent)&&$e(tn,t.innerHTML))||(!(!pt||n!==ln||!function(t,e){const n=Boolean(gn[e]),i=Boolean(fn[e]);return!!(n||i||mn[e])&&E(t)===Ut&&(n?t.hasChildNodes():!!ni(t.firstElementChild)||i&&"string"==typeof t.textContent&&$e(tn,t.textContent))}(t,e))||(n===dn||!(!pt||n!==un||!$e(nn,t.data))))},ri=function(t,e){if(t instanceof RegExp)return $e(t,e);if(t instanceof Function){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return Boolean(t(e,...i))}return!1},si=function(t,e,n,i){return 0===t.length?e:e===n||e===i?Ee(e):e},ai=function(t,e){return t!==e&&null===b(t)&&(Ct&&jn(t),Yn(t),!0)},li=function(t,e){if(function(t){if(!Tt)return;ne(Tt,t);const e=se(Et,t);if(void 0!==e){if(e>=8)throw we("the tree kept changing during in-place sanitization; refusing to return it");ae(Et,t,e+1)}}(t),ii(W.beforeSanitizeElements,t,null),ai(t,e))return!0;if(Qn(t))return In(t),!0;const i=Cn(C(t)),o=S(t);if(tt=si(W.uponSanitizeElement,tt,et,gt),ii(W.uponSanitizeElement,t,{tagName:i,allowedTags:tt}),ai(t,e))return!0;if(oi(t,i,o))return In(t),!0;if((rt[i]||!(at.tagCheck instanceof Function&&at.tagCheck(i))&&!tt[i])&&function(t,e,n){if(!rt[e]&&ui(e)&&ri(ot.tagNameCheck,e))return!1;if(St&&!kt[e]&&!kt[le(e)]){const e=b(t),i=y(t);if(i&&e)for(let o=i.length-1;o>=0;--o){const r=t===n?p(i[o],!0):i[o];e.insertBefore(r,_(t))}}return In(t),!0}(t,i,e))return!0;if(o===ln&&!Rn(t))return In(t),!0;if(("noscript"===i||"noembed"===i||"noframes"===i)&&$e(on,t.innerHTML))return In(t),!0;if(ht&&o===cn){const e=t.textContent,i=Kn(e);e!==i&&(Zt(n.removed,{element:t.cloneNode()}),t.textContent=i)}return ii(W.afterSanitizeElements,t,null),ai(t,e)},ci=function(t,e,n){if(st[e])return!1;if(qn(e,t))return!1;if(wt&&("id"===e||"name"===e)&&(n in i||n in Nn))return!1;const o=nt[e]||at.attributeCheck instanceof Function&&at.attributeCheck(e,t);if(ct&&$e(V,e))return!0;if(lt&&$e(K,e))return!0;if(!o)return ui(t)&&ri(ot.tagNameCheck,t)&&ri(ot.attributeNameCheck,e,t)||"is"===e&&ot.allowCustomizedBuiltInElements&&ri(ot.tagNameCheck,n);if(Rt[e])return!0;const r=ue(n,Z,"");return!!$e(Q,r)||(!("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==he(n,"data:")||!Dt[t])||(!(!dt||$e(X,r))||!n))},di=Se({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ui=function(t){return!di[le(t)]&&$e(J,t)},hi=function(t,e,n,i){if(N&&"object"==typeof u&&"function"==typeof u.getAttributeType&&!n)switch(u.getAttributeType(t,e)){case"TrustedHTML":return I(i);case"TrustedScriptURL":return function(t){R(),P++;try{return N.createScriptURL(t)}finally{P--}}(i)}return i},pi=function(t,e,n,i){try{return n?t.setAttributeNS(n,e,i):t.setAttribute(e,i),!Qn(t)||(In(t),!1)}catch(n){return Mn(e,t),!1}},fi=function(t,e){return!(!pt||!$e(sn,e))||"attributename"===le(t)&&-1!==he(e,"href")},mi=function(t,e){if(ii(W.beforeSanitizeAttributes,t,null),ai(t,e))return;const i=S(o=t)===ln?$(o):null;var o;if(!i||Qn(t))return;nt=si(W.uponSanitizeAttribute,nt,it,_t);const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:nt,forceKeepAttr:void 0};let s=i.length;const a=Cn(C(t));for(;s--;){const e=i[s];if(!e)continue;const o=e.name,l=e.namespaceURI,c=e.value,d=Cn(o),u=c;let h="value"===o?u:pe(u),p=!1;r.attrName=d,r.attrValue=h,r.keepAttr=!0,r.forceKeepAttr=void 0,ii(W.uponSanitizeAttribute,t,r),h=r.attrValue,!xt||"id"!==d&&"name"!==d||0===he(h,At)||(Mn(o,t,e),h=At+h,p=!0),fi(o,h)?Mn(o,t,e):r.forceKeepAttr||(r.keepAttr&&(ut||!$e(rn,h))?(ht&&(h=Kn(h)),ci(a,d,h)?(h=hi(a,d,l,h),h!==u&&pi(t,o,l,h)&&p&&Xt(n.removed)):Mn(o,t,e)):Mn(o,t,e))}ii(W.afterSanitizeAttributes,t,null),ai(t,e)},gi=function(t,e){li(t,e),mi(t,e),ei(t.content)&&_i(t.content)},_i=function(t){let e=null;const n=Vn(t);for(ii(W.beforeSanitizeShadowDOM,t,null);e=n.nextNode();)if(ii(W.uponSanitizeShadowNode,e,null),gi(e,t),S(e)===ln){const t=v(e);ei(t)&&(yi(t),_i(t))}ht&&Jn(t),ii(W.afterSanitizeShadowDOM,t,null)},yi=function(t){const e=[{node:t,shadow:null}];for(;e.length>0;){const t=e.pop();if(t.shadow){_i(t.shadow);continue}const n=t.node,i=S(n)===ln,o=y(n);if(o)for(let t=o.length-1;t>=0;--t)e.push({node:o[t],shadow:null});if(i){const t=x?x(n):null;if("string"==typeof t&&"template"===Cn(t)){const t=n.content;ei(t)&&e.push({node:t,shadow:null})}}if(i){const t=v(n);ei(t)&&e.push({node:null,shadow:t},{node:t,shadow:null})}}},bi=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null,r=null,s=null,a=null;if(qt=!t,qt&&(t="\x3c!--\x3e"),"string"!=typeof t&&!ni(t)&&"string"!=typeof(t=function(t){switch(typeof t){case"string":return t;case"number":return fe(t);case"boolean":return me(t);case"bigint":return ge?ge(t):"0";case"symbol":return _e?_e(t):"Symbol()";case"undefined":default:return be(t);case"function":case"object":{if(null===t)return be(t);const e=t,n=Ne(e,"toString");if("function"==typeof n){const t=n(e);return"string"==typeof t?t:be(t)}return be(t)}}}(t)))throw we("dirty is not a string, aborting");if(!n.isSupported)return t;mt?(tt=gt,nt=_t):On(e),En=Tn,n.removed=[];const l=Ct&&"string"!=typeof t&&ni(t);let c=[];const d=Tt,u=Et;if(l){h=t,pt&&Un(h,t=>{const e=S(t);if(e===dn||e===un&&$e(en,t.data)){try{f(t)}catch(t){}return!1}if(e===ln){const e=t,n=Cn(C(t));try{e.hasAttribute&&e.hasAttribute("patchsrc")&&e.removeAttribute("patchsrc"),e.hasAttribute&&e.hasAttribute("for")&&qn("for",n)&&e.removeAttribute("for")}catch(t){}}return!0}),c=Hn(t);const e=C(t);if("string"==typeof e){const n=Cn(e);if(!tt[n]||rt[n])throw Bn(t,c),we("root node is forbidden and cannot be sanitized in-place")}if(Qn(t))throw Bn(t,c),we("root node is clobbered and cannot be sanitized in-place");Tt=ee(),Et=re()}else if(ni(t))i=Gn("\x3c!----\x3e"),r=i.ownerDocument.importNode(t,!0),r.nodeType===ln&&"BODY"===r.nodeName||"HTML"===r.nodeName?i=r:i.appendChild(r),yi(i);else{if(!bt&&!ht&&!ft&&-1===t.indexOf("<"))return L(t);if(i=Gn(t),!i)return bt?null:$t?O:""}var h;i&&yt&&In(i.firstChild);const p=l?t:i;try{l&&yi(t);const e=Vn(p);for(;s=e.nextNode();)gi(s,p);l&&function(t,e){const n=Tt;let i=null;const o=()=>(i||(i=ee(),Vt(e,t=>{ne(i,t)})),i);for(let e=0;;e++){const i=Hn(t),r=[t];let s=!1;if(Vt(i,t=>{S(t)===pn?Zt(r,t):s||ie(n,t)||(s=ie(o(),t))}),!s)return;if(e>=8)throw we("the tree kept changing during in-place sanitization; refusing to return it");Vt(r,(e,n)=>{Wn(e,n>0,t,o())})}}(t,c)}catch(e){throw l&&Bn(t,c),e}finally{Tt=d,Et=u}if(l){if(Fn(t,c))throw we("a node selected for removal could not be safely returned; refusing to sanitize in place");return ht&&Xn(t),t}if(bt){if(ht&&Xn(i),vt)for(a=H.call(i.ownerDocument);i.firstChild;)a.appendChild(i.firstChild);else a=i;return(nt.shadowroot||nt.shadowrootmode)&&(a=B.call(o,a,!0)),a}ht&&Jn(i);let m=ft?i.outerHTML:i.innerHTML;return ft&&tt["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&$e(Je,i.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+m),L(m)};return n.sanitize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=En,o=tt,r=nt,s=n.removed;En=null;try{return bi(t,e)}finally{En=i,i&&(mt||On(i),tt=o,nt=r,n.removed=s)}},n.setConfig=function(){On(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),mt=!0,gt=tt,_t=nt},n.clearConfig=function(){Tn=null,mt=!1,gt=null,_t=null,N=k,O=""},n.isValidAttribute=function(t,e,n){Tn||On({});const i=Cn(t),o=Cn(e);return("string"!=typeof n||!(fi(e,n)||!ut&&$e(rn,n)))&&ci(i,o,n)},n.addHook=function(t,e){"function"==typeof e&&ye(W,t)&&Zt(W[t],e)},n.removeHook=function(t,e){if(ye(W,t)){if(void 0!==e){const n=Kt(W[t],e);return-1===n?void 0:Qt(W[t],n,1)[0]}return Xt(W[t])}},n.removeHooks=function(t){ye(W,t)&&(W[t]=[])},n.removeAllHooks=function(){W={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const $n=["a","abbr","b","blockquote","br","code","del","div","em","h1","h2","h3","h4","h5","h6","i","img","ins","li","mark","ol","p","pre","s","small","span","strong","sub","sup","u","ul"],wn=["href","title","src","alt","width","height"],xn=new Map,An=new Map;let Sn=!1;function Cn(t,e=!0){if(""===t||!/[<&]/.test(t))return t;const n=e?xn:An,i=n.get(t);if(void 0!==i)return i;if(!vn.isSupported)return function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}(t);Sn||(Sn=!0,vn.addHook("afterSanitizeAttributes",t=>{"A"===t.tagName&&t.hasAttribute("href")&&(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer"))}));const o=vn.sanitize(t,{ALLOWED_TAGS:e?$n:$n.filter(t=>"a"!==t),ALLOWED_ATTR:wn,ALLOW_DATA_ATTR:!1});return n.size>=500&&n.delete(n.keys().next().value),n.set(t,o),o}const Tn="file_list";function En(t,e){if(!e||null===t||"object"!=typeof t)return;const n=t;if(Object.prototype.hasOwnProperty.call(n,e))return n[e];const i=e.replace(/\[(\w+)\]/g,".$1").split(".").filter(t=>""!==t);if(i.length<2)return;let o=t;for(const t of i){if(null===o||"object"!=typeof o)return;o=o[t]}return o}function Nn(t){if(null==t)return"";if("string"==typeof t)return t;if("object"==typeof t)try{return JSON.stringify(t)}catch{return String(t)}return String(t)}function kn(t,e){return t.replace(/\[\[\s*(.*?)\s*\]\]/g,(t,n)=>Nn(En(e,n)))}const On={date:{dateStyle:"medium"},time:{timeStyle:"short"},datetime:{dateStyle:"medium",timeStyle:"short"}},Dn=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60],["second",1]];function Pn(t,e,n,i,o=new Date){const r=function(t){if(t instanceof Date)return Number.isNaN(t.getTime())?void 0:t;if("number"==typeof t||"string"==typeof t&&/^\d+(\.\d+)?$/.test(t.trim())){const e=Number(t),n=new Date(e<1e12?1e3*e:e);return Number.isNaN(n.getTime())?void 0:n}if("string"==typeof t&&""!==t.trim()){if(!/\d{4}/.test(t))return;const e=new Date(t);return Number.isNaN(e.getTime())?void 0:e}}(t);if(!r)return Nn(t);try{if("relative"===e){const t=(r.getTime()-o.getTime())/1e3,e=new Intl.RelativeTimeFormat(n,{numeric:"auto"});for(const[n,i]of Dn)if(Math.abs(t)>=i||"second"===n)return e.format(Math.round(t/i),n)}const t=i??On[e];return new Intl.DateTimeFormat(n,t).format(r)}catch(e){return console.warn("list-card: unable to format value",t,e),Nn(t)}}function Rn(t,e,n){const i=void 0!==e.template?kn(e.template,t):En(t,e.field);let o=e.format?Pn(i,e.format,n,e.format_options):Nn(i);return e.regex&&(o=function(t,e){let n;try{n=new RegExp(e,"u")}catch(n){return console.warn(`list-card: invalid regex '${e}'`,n),t}const i=n.exec(t);return i?i.length>1&&void 0!==i[1]?i[1]:i[0]:""}(o,e.regex)),e.prefix&&(o=`${e.prefix}${o}`),e.postfix&&(o=`${o}${e.postfix}`),o}function In(t){const e={};return(t??[]).forEach(t=>{Object.entries(t??{}).forEach(([t,n])=>{t&&(e[t]=String(n))})}),e}function Ln(t,e){return t.filter(t=>e.some(e=>function(t,e){return void 0!==En(t,e)}(t,e.field)||void 0!==e.template||"icon"===e.type&&e.icon))}const Mn="minmax(0, 1fr)",zn=/^\d*\.?\d+(px|%|em|rem|ch|vw|vh)$/,Un=/^(\d*\.?\d+)fr$/;function jn(t){return 0===t.length?Mn:t.map(t=>function(t){if(null==t||""===t)return Mn;if("number"==typeof t)return Number.isFinite(t)&&t>0?`minmax(0, ${t}fr)`:Mn;const e=t.trim();if(/^\d*\.?\d+$/.test(e))return Number(e)>0?`minmax(0, ${e}fr)`:Mn;const n=Un.exec(e);return n?Number(n[1])>0?`minmax(0, ${n[1]}fr)`:Mn:zn.test(e)||["auto","min-content","max-content"].includes(e)?e:Mn}(t.column_width)).join(" ")}const Hn=[{title:"Path",field:"path"},{title:"Name",field:"name"},{title:"Filename",field:"filename"},{title:"Full Path",field:"fullpath",add_link:"fullpath"},{title:"Ext",field:"ext"}];let Fn=class extends at{constructor(){super(...arguments),this._page=0,this._holdFired=!1,this._pageCount=1,this._clearHold=()=>{this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}}createRenderRoot(){const t=this.shadowRoot??this.attachShadow({mode:"open"}),e=this.constructor;for(const n of e.elementStyles){const e=document.createElement("style");e.textContent=n.cssText??"",t.appendChild(e)}return t}setConfig(t){if(!t||!t.entity)throw new Error("Please define an entity");if(void 0!==t.columns&&!Array.isArray(t.columns))throw new Error("columns must be a list");if(t.sort&&!t.sort.value)throw new Error("You need to specify a value to sort on");this._config={...t,columns:t.feed_attribute!==Tn||t.columns&&0!==t.columns.length?t.columns:Hn},this._page=0,this._restartPageTimer()}connectedCallback(){super.connectedCallback(),this._restartPageTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopPageTimer(),this._clearHold(),this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}render(){if(!this.hass||!this._config)return Y;const t=this._config,e=this.hass.states[t.entity];if(!e)return this._renderWarning(`Entity not available: ${t.entity}`);const n=function(t,e){const n=t??{};let i=n;if(e&&(i=En(n,e),void 0===i))return{ok:!1,reason:"missing_attribute",available:Object.keys(n)};if(null==i||""===i)return{ok:!0,rows:[]};if("string"==typeof i)try{i=JSON.parse(i)}catch{return{ok:!0,rows:[]}}return e===Tn&&Array.isArray(i)?{ok:!0,rows:(o=i.filter(t=>"string"==typeof t),o.map(t=>{const e=t.substring(0,t.lastIndexOf("/")+1),n=t.substring(t.lastIndexOf("/")+1),i=n.lastIndexOf("."),o=i>0?n.substring(0,i):n,r=i>0?n.substring(i+1):"";let s=o;if(/^\d{14}$/.test(o)){const t=new Date(`${o.slice(0,4)}-${o.slice(4,6)}-${o.slice(6,8)}T${o.slice(8,10)}:${o.slice(10,12)}:${o.slice(12)}`);Number.isNaN(t.getTime())||(s=t.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}))}return{path:e,name:s,filename:n,fullpath:`${e}${n}`,ext:r}}))}:{ok:!0,rows:(Array.isArray(i)?i:"object"==typeof i?Object.values(i):[]).filter(t=>"object"==typeof t&&null!==t&&!Array.isArray(t))};var o}(e.attributes,t.feed_attribute);if(!n.ok){const e=n.available.length?` Available attributes: ${n.available.join(", ")}`:"";return this._renderWarning(`Attribute '${t.feed_attribute}' not found on ${t.entity}. Attribute names are case-sensitive.${e}`)}const i=t.columns??[];if(0===i.length){const t=n.rows[0]?Object.keys(n.rows[0]).join(", "):"";return this._renderWarning("No columns configured."+(t?` Fields available in the first row: ${t}`:""))}const o=this._visibleRows(n.rows,i);if(0===o.length)return t.empty_message?(this.style.display="",B`<ha-card .header=${t.title??""}>
        <div class="empty">${t.empty_message}</div>
      </ha-card>`):(this.style.display="none",Y);this.style.display="";const r=i.filter(t=>!t.full_width),s={maxHeight:(a=t.card_height,null==a||""===a?"300px":"number"==typeof a?`${a}px`:/^\d+$/.test(a.trim())?`${a.trim()}px`:a),"--list-card-template":jn(r)};var a;return B`
      <ha-card .header=${t.title??""}>
        <div class=${this._containerClass(t)} style=${vt(s)}>
          ${!1!==t.show_header&&r.some(t=>t.title)?B`
                  <div class="grid-row grid-header-row">
                    ${r.map(t=>B`<div
                          class="grid-cell grid-header ${this._fieldClass(t)}"
                          style=${vt(In(t.style))}
                        >
                          ${t.title}
                        </div>`)}
                  </div>
                `:Y}
          ${o.map((t,e)=>this._renderRow(t,i,e))}
        </div>
        ${this._renderPager()}
      </ha-card>
    `}_renderWarning(t){return this.style.display="",B`<ha-card .header=${this._config?.title??""}>
      <div class="warning">${t}</div>
    </ha-card>`}_visibleRows(t,e){const n=this._config,i=Ln(function(t,e,n){const i=(e?.include??[]).filter(t=>""!==t),o=(e?.exclude??[]).filter(t=>""!==t);if(0===i.length&&0===o.length)return t;const r=e?.case_sensitive??!1,s=t=>(r?t:t.toLocaleLowerCase()).normalize("NFC"),a=e?.fields?.length?e.fields:n.map(t=>t.field).filter(Boolean),l=i.map(s),c=o.map(s);return t.filter(t=>{const e=s(a.map(e=>Nn(En(t,e))).join("\n"));return!(l.length>0&&!l.some(t=>e.includes(t))||c.some(t=>e.includes(t)))})}(function(t,e){if(!e?.value)return[...t];const n=e.reverse??!1;return[...t].sort((t,i)=>{const o=En(t,e.value),r=En(i,e.value);if(o===r)return 0;if(null==o)return n?1:-1;if(null==r)return n?-1:1;const s="number"==typeof o&&"number"==typeof r?o-r:Nn(o).localeCompare(Nn(r),void 0,{numeric:!0});return n?-s:s})}(t,n.sort),n.filter,e),e),o=n.row_limit&&n.row_limit>0?i.slice(0,n.row_limit):i,r=n.page_size&&n.page_size>0?n.page_size:0;if(!r)return this._pageCount=1,o;this._pageCount=Math.max(1,Math.ceil(o.length/r));const s=Math.min(this._page,this._pageCount-1);return o.slice(s*r,s*r+r)}_renderPager(){if(this._pageCount<=1)return Y;const t=Math.min(this._page,this._pageCount-1);return B`
      <div class="pager">
        <button type="button" class="pager-button" aria-label="Previous page" @click=${()=>this._changePage(-1)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="pager-label">${t+1} / ${this._pageCount}</span>
        <button type="button" class="pager-button" aria-label="Next page" @click=${()=>this._changePage(1)}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    `}_changePage(t,e=!1){const n=this._pageCount;n<=1||(this._page=((Math.min(this._page,n-1)+t)%n+n)%n,e||this._restartPageTimer())}_restartPageTimer(){this._stopPageTimer();const t=this._config?.page_interval;this.isConnected&&this._config?.page_size&&t&&!(t<=0)&&(this._pageTimer=setInterval(()=>this._changePage(1,!0),1e3*t))}_stopPageTimer(){this._pageTimer&&(clearInterval(this._pageTimer),this._pageTimer=void 0)}_fieldClass(t){return(t.field??"").replace(/[^\w-]/g,"_")}_containerClass(t){const e=["grid-container"];return t.wrap_text&&e.push("wrap-text"),t.striped_rows&&e.push("striped"),e.join(" ")}_renderRow(t,e,n){return B`<div class="grid-row ${n%2==0?"odd":"even"}">${e.map(e=>this._renderCell(t,e))}</div>`}_renderCell(t,e){const n=Boolean(e.tap_action||e.hold_action||e.double_tap_action),i=["grid-cell",this._fieldClass(e)];return n&&i.push("actionable"),e.full_width&&i.push("full-width"),e.type&&i.push(`type-${e.type}`),B`
      <div
        class=${i.join(" ")}
        style=${vt(In(e.style))}
        @click=${n?n=>this._onClick(n,e,t):void 0}
        @dblclick=${n?n=>this._onDoubleClick(n,e,t):void 0}
        @pointerdown=${e.hold_action?()=>this._startHold(e,t):void 0}
        @pointerup=${e.hold_action?this._clearHold:void 0}
        @pointerleave=${e.hold_action?this._clearHold:void 0}
        @pointercancel=${e.hold_action?this._clearHold:void 0}
      >
        ${this._renderCellContent(t,e)}
      </div>
    `}_renderCellContent(t,e){if("image"===e.type){const n=function(t){if("string"==typeof t)return t;const e=t=>{if(!t||"object"!=typeof t)return"string"==typeof t?t:void 0;const e=t,n=e.url??e.href??e.src;return"string"==typeof n&&""!==n?n:void 0};if(Array.isArray(t)){const n=t.find(t=>t&&"object"==typeof t&&"string"==typeof t.type&&t.type.startsWith("image/")&&e(t));if(n)return e(n)??"";const i=t.find(t=>t&&"object"==typeof t&&"enclosure"===t.rel);if(i&&e(i))return e(i)??"";for(const n of t){const t=e(n);if(t)return t}return""}return e(t)??Nn(t)}(En(t,e.field));if(!n)return B``;const i=e.width??70,o=e.height??90,r=B`<img
        src=${n}
        width=${String(i)}
        height=${String(o)}
        loading="lazy"
        alt=""
        style=${vt(In(e.image_style))}
      />`;return this._wrapLinkIfNeeded(e,t,r)}if("icon"===e.type){const n=e.icon??Nn(En(t,e.field));return this._wrapLinkIfNeeded(e,t,B`<ha-icon .icon=${n}></ha-icon>`)}const n=Cn(Rn(t,e,this.hass?.locale?.language??this.hass?.language),!e.add_link),i=B`<span class="cell-html">${wt(n)}</span>`;return this._wrapLinkIfNeeded(e,t,i)}_wrapLinkIfNeeded(t,e,n){if(!t.add_link)return n;const i=Nn(En(e,t.add_link)).replace(/^\/?config\/www/,"/local");if(!i)return n;const o=t.link_target??"_blank";return B`<a href=${i} target=${o} rel="noreferrer noopener">${n}</a>`}_onClick(t,e,n){if(this._holdFired)return this._holdFired=!1,void t.preventDefault();if(e.tap_action){if(t.preventDefault(),e.double_tap_action)return this._tapTimer?(clearTimeout(this._tapTimer),void(this._tapTimer=void 0)):void(this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._handleAction(e,n,"tap")},250));this._handleAction(e,n,"tap")}}_onDoubleClick(t,e,n){e.double_tap_action&&(t.preventDefault(),this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0),this._handleAction(e,n,"double_tap"))}_startHold(t,e){this._clearHold(),this._holdFired=!1,this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._holdFired=!0,this._handleAction(t,e,"hold")},500)}_handleAction(t,e,n){const i=t[`${n}_action`];if(!i?.action)return void console.warn("list-card: invalid action config",i);if("none"===i.action)return;const o=function(t,e){const n=t=>"string"==typeof t?t.includes("[[")?kn(t,e):t:Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.fromEntries(Object.entries(t).map(([t,e])=>[t,n(e)])):t;return n(t)}(structuredClone(i),e),r=new Event("hass-action",{bubbles:!0,composed:!0});r.detail={config:{entity:this._config?.entity,[`${n}_action`]:o},action:n},this.dispatchEvent(r)}getCardSize(){const t=this._config?.page_size??this._config?.row_limit??5;return Math.min(Math.max(1,Math.ceil(t/2)+(this._config?.title?1:0)),10)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}static async getConfigElement(){return document.createElement(Nt)}static getStubConfig(t){let e,n="";for(const[i,o]of Object.entries(t?.states??{})){const t=Object.entries(o?.attributes??{}).find(([,t])=>Array.isArray(t)&&t.length>0&&"object"==typeof t[0]);if(t){n=i,e=t[0];break}}return{type:`custom:${Et}`,entity:n,title:"List Card",...e?{feed_attribute:e}:{},columns:[{title:"Title",field:"title"}]}}static{this.styles=s`
    :host {
      display: block;
    }

    .grid-container {
      display: grid;
      gap: 8px;
      padding: 16px;
      overflow-y: auto;
    }

    .grid-row {
      display: grid;
      grid-template-columns: var(--list-card-template, minmax(0, 1fr));
      gap: 8px;
      align-items: center;
    }

    .grid-header {
      font-weight: bold;
      text-align: center;
    }

    .grid-cell {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      user-select: text;
      -webkit-user-select: text;
    }

    .grid-cell.full-width {
      grid-column: 1 / -1;
      white-space: normal;
    }

    /* Keep block-level feed markup on one line when the cell truncates. */
    .grid-container:not(.wrap-text)
      .grid-cell:not(.full-width)
      .cell-html
      :is(p, div, ul, ol, li, blockquote, pre, h1, h2, h3, h4, h5, h6) {
      display: inline;
      margin: 0;
      padding: 0;
    }

    .cell-html > :first-child {
      margin-top: 0;
    }

    .cell-html > :last-child {
      margin-bottom: 0;
    }

    .wrap-text .grid-cell {
      white-space: normal;
      overflow-wrap: anywhere;
    }

    .grid-container.striped {
      gap: 0;
    }

    .striped .grid-row {
      padding: 4px 8px;
    }

    .striped .grid-row.even {
      background-color: var(--secondary-background-color);
    }

    .actionable {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      object-fit: contain;
    }

    .pager {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0 16px 12px;
    }

    .pager-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      color: var(--primary-text-color);
      cursor: pointer;
      padding: 4px;
      border-radius: 50%;
    }

    .pager-button:hover {
      background: var(--secondary-background-color);
    }

    .pager-label {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }

    .warning {
      padding: 16px;
      color: var(--primary-text-color);
      background: rgba(var(--rgb-warning-color, 255, 166, 0), 0.15);
      border-left: 4px solid var(--warning-color, #ffa600);
      word-break: break-word;
    }

    .empty {
      padding: 16px;
      color: var(--secondary-text-color);
    }
  `}};t([ht({attribute:!1})],Fn.prototype,"hass",void 0),t([pt()],Fn.prototype,"_config",void 0),t([pt()],Fn.prototype,"_page",void 0),Fn=t([ct(Et)],Fn),console.info("%clist-card\n%cVersion: 1.2.0","color: #EED202; font-weight: bold; background-color: black;",""),window.customCards=window.customCards||[],window.customCards.push({type:Et,name:"List Card",preview:!0,description:"The List Card generates a grid with data from a sensor that provides data as a list of attributes.",documentationURL:"https://github.com/iantrich/list-card"});export{Fn as ListCard};
