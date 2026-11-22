function t(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,m=f.trustedTypes,_=m?m.emptyScript:"",g=f.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const s=o.fromAttribute(e,t.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(void 0!==t){const s=this.constructor;if(!1===n&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,g?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,C=t=>t,A=w.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+N,k=`<${T}>`,P=document,O=()=>P.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,R="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,H=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,Y=P.createTreeWalker(P,129);function G(t,e){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":3===e?"<math>":"",r=M;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===M?"!--"===l[1]?r=U:void 0!==l[1]?r=H:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=o??M,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?D:'"'===l[3]?z:L):r===z||r===L?r=D:r===U||r===H?r=M:(r=D,o=void 0);const h=r===D&&t[e+1].startsWith("/>")?" ":"";s+=r===M?i+k:c>=0?(n.push(a),i.slice(0,c)+E+i.slice(c)+N+h):i+N+(-2===c?e:h)}return[G(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class K{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=J(t,e);if(this.el=K.createElement(l,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=Y.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(E)){const e=c[s++],i=n.getAttribute(t).split(N),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(N)&&(a.push({type:6,index:o}),n.removeAttribute(t));if(B.test(n.tagName)){const t=n.textContent.split(N),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],O()),Y.nextNode(),a.push({type:2,index:++o});n.append(t[e],O())}}}else if(8===n.nodeType)if(n.data===T)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(N,t+1));)a.push({type:7,index:o}),t+=N.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,n){if(e===W)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=I(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??P).importNode(e,!0);Y.currentNode=n;let o=Y.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++r]}s!==a?.index&&(o=Y.nextNode(),s++)}return Y.currentNode=P,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new X(this.O(O()),this.O(O()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=C(t).nextSibling;C(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=Z(this,t,e,0),s=!I(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Z(this,n[i+r],e,r),a===W&&(a=this._$AH[r]),s||=!I(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends tt{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===W)return;const i=this._$AH,n=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(K,X),(w.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new X(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const lt=rt.litElementPolyfillSupport;lt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ht=(t=dt,e,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ut({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=1;let mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t="important",gt=" !"+_t,$t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends mt{constructor(t){if(super(t),t.type!==ft||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const n=e[t];if(null!=n){this.ft.add(t);const e="string"==typeof n&&n.endsWith(gt);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?_t:""):i[t]=n}}return W}});var yt,bt,vt,xt,wt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(yt||(yt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(bt||(bt={})),function(t){t.local="local",t.server="server"}(vt||(vt={})),function(t){t.language="language",t.system="system",t.DMY="DMY",t.MDY="MDY",t.YMD="YMD"}(xt||(xt={})),function(t){t.language="language",t.monday="monday",t.tuesday="tuesday",t.wednesday="wednesday",t.thursday="thursday",t.friday="friday",t.saturday="saturday",t.sunday="sunday"}(wt||(wt={}));const Ct="list-card",At="list-card-editor",St=[{name:"entity",required:!0,selector:{entity:{}}},{name:"title",selector:{text:{}}},{name:"feed_attribute",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"row_limit",selector:{number:{min:0,mode:"box"}}},{name:"card_height",selector:{text:{}}},{name:"page_size",selector:{number:{min:0,mode:"box"}}},{name:"page_interval",selector:{number:{min:0,mode:"box",unit_of_measurement:"s"}}}]},{name:"empty_message",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"show_header",selector:{boolean:{}}},{name:"wrap_text",selector:{boolean:{}}},{name:"striped_rows",selector:{boolean:{}}}]}],Et=[{name:"include",selector:{text:{multiple:!0}}},{name:"exclude",selector:{text:{multiple:!0}}},{name:"fields",selector:{text:{multiple:!0}}},{name:"case_sensitive",selector:{boolean:{}}}],Nt=[{name:"value",required:!0,selector:{text:{}}},{name:"reverse",selector:{boolean:{}}}];let Tt=class extends at{constructor(){super(...arguments),this._openSection="general",this._columnOpenByIndex={},this._advancedOpenByColumn={},this._onGeneralChanged=t=>{if(t.stopPropagation(),!this._config)return;const e=t.detail.value,i={...this._config,entity:e.entity??this._config.entity};for(const t of["title","feed_attribute","card_height","empty_message"]){const n=e[t];n&&""!==n.trim()?i[t]=n:delete i[t]}for(const t of["row_limit","page_size","page_interval"]){const n=e[t];null!=n&&""!==n&&Number(n)>0?i[t]=Number(n):delete i[t]}i.show_header=!1!==e.show_header;for(const t of["wrap_text","striped_rows"])!0===e[t]?i[t]=!0:delete i[t];this._updateConfig(i)},this._computeGeneralLabel=t=>({entity:"Entity",title:"Title",feed_attribute:"Feed Attribute",row_limit:"Row Limit",card_height:"Card Height",page_size:"Rows per Page",page_interval:"Auto-advance Pages Every",empty_message:"Message When Empty",show_header:"Show Header",wrap_text:"Wrap Text",striped_rows:"Striped Rows"}[t.name]??t.name),this._onFilterChanged=t=>{if(t.stopPropagation(),!this._config)return;const e=t.detail.value??{},i={};for(const t of["include","exclude","fields"]){const n=(e[t]??[]).map(t=>t.trim()).filter(Boolean);n.length&&(i[t]=n)}e.case_sensitive&&(i.case_sensitive=!0);const n={...this._config};Object.keys(i).length?n.filter=i:delete n.filter,this._updateConfig(n)},this._computeFilterLabel=t=>({include:"Include Keywords",exclude:"Exclude Keywords",fields:"Fields to Search",case_sensitive:"Case Sensitive"}[t.name]??t.name),this._onSortToggle=t=>{if(!this._config)return;const e=t.target.checked,i={...this._config};e?i.sort={value:"",reverse:!1}:delete i.sort,this._updateConfig(i)},this._onSortChanged=t=>{t.stopPropagation(),this._config&&this._updateConfig({...this._config,sort:t.detail.value})},this._computeSortLabel=t=>({value:"Sort Field",reverse:"Reverse"}[t.name]??t.name),this._handleColumnToggle=t=>{t.stopPropagation(),t.preventDefault();const e=t.currentTarget,i=Number(e.dataset.index);Number.isNaN(i)||(this._columnOpenByIndex={...this._columnOpenByIndex,[i]:!(this._columnOpenByIndex[i]??0===i)},this.requestUpdate())},this._handleAdvancedToggle=t=>{t.stopPropagation(),t.preventDefault();const e=t.currentTarget,i=Number(e.dataset.index);Number.isNaN(i)||(this._advancedOpenByColumn={...this._advancedOpenByColumn,[i]:!this._advancedOpenByColumn[i]},this.requestUpdate())},this._onColumnInput=t=>{if(!this._config)return;const e=t.currentTarget,i=Number.parseInt(e.dataset.index??"",10),n=e.dataset.field;if(Number.isNaN(i)||!n)return;const o=[...this._config.columns??[]],s={...o[i]},r=e.value?.trim()??"";"width"===n||"height"===n||"column_width"===n?""===r?delete s[n]:/^\d+$/.test(r)?s[n]=Number.parseInt(r,10):s[n]=r:"title"===n||"field"===n?s[n]=r:""===r?delete s[n]:s[n]=r,o[i]=s,this._updateConfig({...this._config,columns:o})},this._onColumnSelectorChanged=t=>{if(!this._config)return;const e=t.target,i=Number.parseInt(e.dataset.index??"",10),n=e.dataset.field;if(Number.isNaN(i)||!n)return;const o=[...this._config.columns??[]],s={...o[i]},r=t.detail.value;r&&""!==r?s[n]=r:delete s[n],o[i]=s,this._updateConfig({...this._config,columns:o})},this._onFullWidthToggle=t=>{if(!this._config)return;const e=t.currentTarget,i=Number.parseInt(e.dataset.index??"",10);if(Number.isNaN(i))return;const n=[...this._config.columns??[]],o={...n[i]};e.checked?o.full_width=!0:delete o.full_width,n[i]=o,this._updateConfig({...this._config,columns:n})},this._onColumnActionChanged=t=>{if(!this._config)return;const e=t.target,i=Number.parseInt(e.dataset.index??"",10),n=e.dataset.field;if(Number.isNaN(i)||!n)return;const o=[...this._config.columns??[]],s={...o[i]},r=t.detail.value;r?.action?s[n]=r:delete s[n],o[i]=s,this._updateConfig({...this._config,columns:o})},this._onAddStyle=t=>{if(!this._config)return;const e=t.currentTarget,i=Number.parseInt(e.dataset.index??"",10);if(Number.isNaN(i))return;const n=[...this._config.columns??[]],o={...n[i]};o.style=[...o.style??[],{"":""}],n[i]=o,this._updateConfig({...this._config,columns:n})},this._onRemoveStyle=t=>{if(!this._config)return;const e=t.currentTarget,i=Number.parseInt(e.dataset.col??"",10),n=Number.parseInt(e.dataset.si??"",10);if(Number.isNaN(i)||Number.isNaN(n))return;const o=[...this._config.columns??[]],s={...o[i]},r=[...s.style??[]];r.splice(n,1),s.style=r.length>0?r:void 0,s.style||delete s.style,o[i]=s,this._updateConfig({...this._config,columns:o})},this._onStyleInput=t=>{if(!this._config)return;const e=t.currentTarget,i=Number.parseInt(e.dataset.col??"",10),n=Number.parseInt(e.dataset.si??"",10),o=e.dataset.role;if(Number.isNaN(i)||Number.isNaN(n))return;const s=[...this._config.columns??[]],r={...s[i]},a=[...r.style??[]],l={...a[n]};if("prop"===o){const t=l[Object.keys(l)[0]??""]??"",i=e.value?.trim()??"";a[n]={[i]:t}}else{l[Object.keys(l)[0]??""]=e.value??"",a[n]=l}r.style=a,s[i]=r,this._updateConfig({...this._config,columns:s})},this._onAddColumn=()=>{if(!this._config)return;const t=[...this._config.columns??[]];t.push({title:"",field:""});const e=t.length-1;this._columnOpenByIndex={...this._columnOpenByIndex,[e]:!0},this._updateConfig({...this._config,columns:t})},this._onRemoveColumn=t=>{if(!this._config)return;const e=t.currentTarget,i=Number.parseInt(e.dataset.index??"",10);if(Number.isNaN(i))return;const n=[...this._config.columns??[]];n.splice(i,1);const o={},s={};for(const[t,e]of Object.entries(this._columnOpenByIndex)){const n=Number(t);n!==i&&(o[n>i?n-1:n]=e)}for(const[t,e]of Object.entries(this._advancedOpenByColumn)){const n=Number(t);n!==i&&(s[n>i?n-1:n]=e)}this._columnOpenByIndex=o,this._advancedOpenByColumn=s,this._updateConfig({...this._config,columns:n})}}set hass(t){const e=this._hass;this._hass=t,this.requestUpdate("hass",e)}get hass(){return this._hass}createRenderRoot(){const t=this.shadowRoot??this.attachShadow({mode:"open"}),e=this.constructor;for(const i of e.elementStyles){const e=document.createElement("style");e.textContent=i.cssText??"",t.appendChild(e)}return t}setConfig(t){this._config=structuredClone(t),this.requestUpdate()}shouldUpdate(){return!0}render(){if(!this.hass||!this._config)return F`<div>Loading…</div>`;const t={show_header:!0,...this._config};return F`
      <div class="editor">
        ${this._renderSection("general","General",F`
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${St}
              .computeLabel=${this._computeGeneralLabel}
              @value-changed=${this._onGeneralChanged}
            ></ha-form>
          `)}
        ${this._renderSection("columns","Columns",this._renderColumnsSection())}
        ${this._renderSection("sort","Sort",this._renderSortSection())}
        ${this._renderSection("filter","Filter",this._renderFilterSection())}
      </div>
    `}_toggleSection(t,e){t.stopPropagation(),this._openSection=this._openSection===e?"":e,this.requestUpdate()}_renderSection(t,e,i){const n=this._openSection===t;return F`
      <div class="accordion ${n?"accordion--open":""}">
        <button
          type="button"
          class="accordion__header"
          @click=${e=>this._toggleSection(e,t)}
          aria-expanded=${n}
        >
          <span>${e}</span>
          <ha-icon icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
        </button>
        <div class="accordion__body">
          <div class="accordion__content">${i}</div>
        </div>
      </div>
    `}_renderFilterSection(){return F`
      <div class="helper">
        Show only rows containing an "include" keyword and hide rows containing an "exclude" keyword. Searches the
        column fields unless "Fields" is set.
      </div>
      <ha-form
        .hass=${this.hass}
        .data=${this._config?.filter??{}}
        .schema=${Et}
        .computeLabel=${this._computeFilterLabel}
        @value-changed=${this._onFilterChanged}
      ></ha-form>
    `}_renderSortSection(){const t=!!this._config?.sort;return F`
      <ha-formfield label="Enable Sort">
        <ha-switch .checked=${t} @change=${this._onSortToggle}></ha-switch>
      </ha-formfield>

      ${t?F`
              <ha-form
                .hass=${this.hass}
                .data=${this._config?.sort??{value:"",reverse:!1}}
                .schema=${Nt}
                .computeLabel=${this._computeSortLabel}
                @value-changed=${this._onSortChanged}
              ></ha-form>
            `:q}
    `}_renderColumnsSection(){const t=this._config?.columns??[];return F`
      <div class="columns-header">
        <span>Configured: ${t.length}</span>
        <button type="button" class="btn btn--primary" @click=${this._onAddColumn}>+ Add Column</button>
      </div>
      ${0===t.length?F`<div class="helper">No columns configured.</div>`:t.map((t,e)=>this._renderColumnAccordion(t,e))}
    `}_renderColumnAccordion(t,e){const i=t.title||t.field||`Column ${e+1}`,n=this._columnOpenByIndex[e]??0===e,o=this._advancedOpenByColumn[e]??!1;return F`
      <div class="accordion ${n?"accordion--open":""} accordion--nested">
        <button
          type="button"
          class="accordion__header accordion__header--column"
          data-index=${String(e)}
          @click=${this._handleColumnToggle}
        >
          <span>${i}</span>
          <ha-icon icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
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
    `}_renderColumnStyleEditor(t,e){const i=t.style??[];return F`
      <div class="style-editor">
        <div class="style-editor__header">
          <span class="style-editor__label">CSS Styles</span>
          <button type="button" class="btn btn--small" data-index=${String(e)} @click=${this._onAddStyle}>
            + Add
          </button>
        </div>
        ${i.map((t,i)=>{const n=Object.keys(t)[0]??"",o=t[n]??"";return F`
            <div class="style-row">
              <ha-textfield
                label="Property"
                .value=${n}
                data-col=${String(e)}
                data-si=${String(i)}
                data-role="prop"
                @input=${this._onStyleInput}
              ></ha-textfield>
              <ha-textfield
                label="Value"
                .value=${o}
                data-col=${String(e)}
                data-si=${String(i)}
                data-role="val"
                @input=${this._onStyleInput}
              ></ha-textfield>
              <button
                type="button"
                class="btn btn--icon btn--danger"
                data-col=${String(e)}
                data-si=${String(i)}
                @click=${this._onRemoveStyle}
              >
                ✕
              </button>
            </div>
          `})}
      </div>
    `}_updateConfig(t){this._config=t,((t,e,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});o.detail=i,t.dispatchEvent(o)})(this,"config-changed",{config:t})}static{this.styles=r`
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
  `}};t([ut({attribute:!1})],Tt.prototype,"hass",null),t([pt()],Tt.prototype,"_config",void 0),t([pt()],Tt.prototype,"_openSection",void 0),t([pt()],Tt.prototype,"_columnOpenByIndex",void 0),t([pt()],Tt.prototype,"_advancedOpenByColumn",void 0),Tt=t([ct(At)],Tt);const kt="file_list";function Pt(t,e){if(!e||null===t||"object"!=typeof t)return;const i=t;if(Object.prototype.hasOwnProperty.call(i,e))return i[e];const n=e.replace(/\[(\w+)\]/g,".$1").split(".").filter(t=>""!==t);if(n.length<2)return;let o=t;for(const t of n){if(null===o||"object"!=typeof o)return;o=o[t]}return o}function Ot(t){if(null==t)return"";if("string"==typeof t)return t;if("object"==typeof t)try{return JSON.stringify(t)}catch{return String(t)}return String(t)}function It(t,e){return t.replace(/\[\[\s*(.*?)\s*\]\]/g,(t,i)=>Ot(Pt(e,i)))}const jt={date:{dateStyle:"medium"},time:{timeStyle:"short"},datetime:{dateStyle:"medium",timeStyle:"short"}},Rt=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60],["second",1]];function Mt(t,e,i,n,o=new Date){const s=function(t){if(t instanceof Date)return Number.isNaN(t.getTime())?void 0:t;if("number"==typeof t||"string"==typeof t&&/^\d+(\.\d+)?$/.test(t.trim())){const e=Number(t),i=new Date(e<1e12?1e3*e:e);return Number.isNaN(i.getTime())?void 0:i}if("string"==typeof t&&""!==t.trim()){if(!/\d{4}/.test(t))return;const e=new Date(t);return Number.isNaN(e.getTime())?void 0:e}}(t);if(!s)return Ot(t);try{if("relative"===e){const t=(s.getTime()-o.getTime())/1e3,e=new Intl.RelativeTimeFormat(i,{numeric:"auto"});for(const[i,n]of Rt)if(Math.abs(t)>=n||"second"===i)return e.format(Math.round(t/n),i)}const t=n??jt[e];return new Intl.DateTimeFormat(i,t).format(s)}catch(e){return console.warn("list-card: unable to format value",t,e),Ot(t)}}function Ut(t,e,i){const n=void 0!==e.template?It(e.template,t):Pt(t,e.field);let o=e.format?Mt(n,e.format,i,e.format_options):Ot(n);return e.regex&&(o=function(t,e){let i;try{i=new RegExp(e,"u")}catch(i){return console.warn(`list-card: invalid regex '${e}'`,i),t}const n=i.exec(t);return n?n.length>1&&void 0!==n[1]?n[1]:n[0]:""}(o,e.regex)),e.prefix&&(o=`${e.prefix}${o}`),e.postfix&&(o=`${o}${e.postfix}`),o}function Ht(t){const e={};return(t??[]).forEach(t=>{Object.entries(t??{}).forEach(([t,i])=>{t&&(e[t]=String(i))})}),e}function Dt(t,e){return t.filter(t=>e.some(e=>function(t,e){return void 0!==Pt(t,e)}(t,e.field)||void 0!==e.template||"icon"===e.type&&e.icon))}const Lt="minmax(0, 1fr)",zt=/^\d*\.?\d+(px|%|em|rem|ch|vw|vh)$/,Bt=/^(\d*\.?\d+)fr$/;function Ft(t){return 0===t.length?Lt:t.map(t=>function(t){if(null==t||""===t)return Lt;if("number"==typeof t)return Number.isFinite(t)&&t>0?`minmax(0, ${t}fr)`:Lt;const e=t.trim();if(/^\d*\.?\d+$/.test(e))return Number(e)>0?`minmax(0, ${e}fr)`:Lt;const i=Bt.exec(e);return i?Number(i[1])>0?`minmax(0, ${i[1]}fr)`:Lt:zt.test(e)||["auto","min-content","max-content"].includes(e)?e:Lt}(t.column_width)).join(" ")}const Wt=[{title:"Path",field:"path"},{title:"Name",field:"name"},{title:"Filename",field:"filename"},{title:"Full Path",field:"fullpath",add_link:"fullpath"},{title:"Ext",field:"ext"}];let qt=class extends at{constructor(){super(...arguments),this._page=0,this._holdFired=!1,this._pageCount=1,this._clearHold=()=>{this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}}createRenderRoot(){const t=this.shadowRoot??this.attachShadow({mode:"open"}),e=this.constructor;for(const i of e.elementStyles){const e=document.createElement("style");e.textContent=i.cssText??"",t.appendChild(e)}return t}setConfig(t){if(!t||!t.entity)throw new Error("Please define an entity");if(void 0!==t.columns&&!Array.isArray(t.columns))throw new Error("columns must be a list");if(t.sort&&!t.sort.value)throw new Error("You need to specify a value to sort on");this._config={...t,columns:t.feed_attribute!==kt||t.columns&&0!==t.columns.length?t.columns:Wt},this._page=0,this._restartPageTimer()}connectedCallback(){super.connectedCallback(),this._restartPageTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopPageTimer(),this._clearHold(),this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}render(){if(!this.hass||!this._config)return q;const t=this._config,e=this.hass.states[t.entity];if(!e)return this._renderWarning(`Entity not available: ${t.entity}`);const i=function(t,e){const i=t??{};let n=i;if(e&&(n=Pt(i,e),void 0===n))return{ok:!1,reason:"missing_attribute",available:Object.keys(i)};if(null==n||""===n)return{ok:!0,rows:[]};if("string"==typeof n)try{n=JSON.parse(n)}catch{return{ok:!0,rows:[]}}return e===kt&&Array.isArray(n)?{ok:!0,rows:(o=n.filter(t=>"string"==typeof t),o.map(t=>{const e=t.substring(0,t.lastIndexOf("/")+1),i=t.substring(t.lastIndexOf("/")+1),n=i.lastIndexOf("."),o=n>0?i.substring(0,n):i,s=n>0?i.substring(n+1):"";let r=o;if(/^\d{14}$/.test(o)){const t=new Date(`${o.slice(0,4)}-${o.slice(4,6)}-${o.slice(6,8)}T${o.slice(8,10)}:${o.slice(10,12)}:${o.slice(12)}`);Number.isNaN(t.getTime())||(r=t.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}))}return{path:e,name:r,filename:i,fullpath:`${e}${i}`,ext:s}}))}:{ok:!0,rows:(Array.isArray(n)?n:"object"==typeof n?Object.values(n):[]).filter(t=>"object"==typeof t&&null!==t&&!Array.isArray(t))};var o}(e.attributes,t.feed_attribute);if(!i.ok){const e=i.available.length?` Available attributes: ${i.available.join(", ")}`:"";return this._renderWarning(`Attribute '${t.feed_attribute}' not found on ${t.entity}. Attribute names are case-sensitive.${e}`)}const n=t.columns??[];if(0===n.length){const t=i.rows[0]?Object.keys(i.rows[0]).join(", "):"";return this._renderWarning("No columns configured."+(t?` Fields available in the first row: ${t}`:""))}const o=this._visibleRows(i.rows,n);if(0===o.length)return t.empty_message?(this.style.display="",F`<ha-card .header=${t.title??""}>
        <div class="empty">${t.empty_message}</div>
      </ha-card>`):(this.style.display="none",q);this.style.display="";const s=n.filter(t=>!t.full_width),r={maxHeight:(a=t.card_height,null==a||""===a?"300px":"number"==typeof a?`${a}px`:/^\d+$/.test(a.trim())?`${a.trim()}px`:a),"--list-card-template":Ft(s)};var a;return F`
      <ha-card .header=${t.title??""}>
        <div class=${this._containerClass(t)} style=${$t(r)}>
          ${!1!==t.show_header&&s.some(t=>t.title)?F`
                  <div class="grid-row grid-header-row">
                    ${s.map(t=>F`<div
                          class="grid-cell grid-header ${this._fieldClass(t)}"
                          style=${$t(Ht(t.style))}
                        >
                          ${t.title}
                        </div>`)}
                  </div>
                `:q}
          ${o.map((t,e)=>this._renderRow(t,n,e))}
        </div>
        ${this._renderPager()}
      </ha-card>
    `}_renderWarning(t){return this.style.display="",F`<ha-card .header=${this._config?.title??""}>
      <div class="warning">${t}</div>
    </ha-card>`}_visibleRows(t,e){const i=this._config,n=Dt(function(t,e,i){const n=(e?.include??[]).filter(t=>""!==t),o=(e?.exclude??[]).filter(t=>""!==t);if(0===n.length&&0===o.length)return t;const s=e?.case_sensitive??!1,r=t=>(s?t:t.toLocaleLowerCase()).normalize("NFC"),a=e?.fields?.length?e.fields:i.map(t=>t.field).filter(Boolean),l=n.map(r),c=o.map(r);return t.filter(t=>{const e=r(a.map(e=>Ot(Pt(t,e))).join("\n"));return!(l.length>0&&!l.some(t=>e.includes(t))||c.some(t=>e.includes(t)))})}(function(t,e){if(!e?.value)return[...t];const i=e.reverse??!1;return[...t].sort((t,n)=>{const o=Pt(t,e.value),s=Pt(n,e.value);if(o===s)return 0;if(null==o)return i?1:-1;if(null==s)return i?-1:1;const r="number"==typeof o&&"number"==typeof s?o-s:Ot(o).localeCompare(Ot(s),void 0,{numeric:!0});return i?-r:r})}(t,i.sort),i.filter,e),e),o=i.row_limit&&i.row_limit>0?n.slice(0,i.row_limit):n,s=i.page_size&&i.page_size>0?i.page_size:0;if(!s)return this._pageCount=1,o;this._pageCount=Math.max(1,Math.ceil(o.length/s));const r=Math.min(this._page,this._pageCount-1);return o.slice(r*s,r*s+s)}_renderPager(){if(this._pageCount<=1)return q;const t=Math.min(this._page,this._pageCount-1);return F`
      <div class="pager">
        <button type="button" class="pager-button" aria-label="Previous page" @click=${()=>this._changePage(-1)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <span class="pager-label">${t+1} / ${this._pageCount}</span>
        <button type="button" class="pager-button" aria-label="Next page" @click=${()=>this._changePage(1)}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    `}_changePage(t,e=!1){const i=this._pageCount;i<=1||(this._page=((Math.min(this._page,i-1)+t)%i+i)%i,e||this._restartPageTimer())}_restartPageTimer(){this._stopPageTimer();const t=this._config?.page_interval;this.isConnected&&this._config?.page_size&&t&&!(t<=0)&&(this._pageTimer=setInterval(()=>this._changePage(1,!0),1e3*t))}_stopPageTimer(){this._pageTimer&&(clearInterval(this._pageTimer),this._pageTimer=void 0)}_fieldClass(t){return(t.field??"").replace(/[^\w-]/g,"_")}_containerClass(t){const e=["grid-container"];return t.wrap_text&&e.push("wrap-text"),t.striped_rows&&e.push("striped"),e.join(" ")}_renderRow(t,e,i){return F`<div class="grid-row ${i%2==0?"odd":"even"}">${e.map(e=>this._renderCell(t,e))}</div>`}_renderCell(t,e){const i=Boolean(e.tap_action||e.hold_action||e.double_tap_action),n=["grid-cell",this._fieldClass(e)];return i&&n.push("actionable"),e.full_width&&n.push("full-width"),e.type&&n.push(`type-${e.type}`),F`
      <div
        class=${n.join(" ")}
        style=${$t(Ht(e.style))}
        @click=${i?i=>this._onClick(i,e,t):void 0}
        @dblclick=${i?i=>this._onDoubleClick(i,e,t):void 0}
        @pointerdown=${e.hold_action?()=>this._startHold(e,t):void 0}
        @pointerup=${e.hold_action?this._clearHold:void 0}
        @pointerleave=${e.hold_action?this._clearHold:void 0}
        @pointercancel=${e.hold_action?this._clearHold:void 0}
      >
        ${this._renderCellContent(t,e)}
      </div>
    `}_renderCellContent(t,e){if("image"===e.type){const i=function(t){if("string"==typeof t)return t;const e=t=>{if(!t||"object"!=typeof t)return"string"==typeof t?t:void 0;const e=t,i=e.url??e.href??e.src;return"string"==typeof i&&""!==i?i:void 0};if(Array.isArray(t)){const i=t.find(t=>t&&"object"==typeof t&&"string"==typeof t.type&&t.type.startsWith("image/")&&e(t));if(i)return e(i)??"";const n=t.find(t=>t&&"object"==typeof t&&"enclosure"===t.rel);if(n&&e(n))return e(n)??"";for(const i of t){const t=e(i);if(t)return t}return""}return e(t)??Ot(t)}(Pt(t,e.field));if(!i)return F``;const n=e.width??70,o=e.height??90,s=F`<img
        src=${i}
        width=${String(n)}
        height=${String(o)}
        loading="lazy"
        alt=""
        style=${$t(Ht(e.image_style))}
      />`;return this._wrapLinkIfNeeded(e,t,s)}if("icon"===e.type){const i=e.icon??Ot(Pt(t,e.field));return this._wrapLinkIfNeeded(e,t,F`<ha-icon .icon=${i}></ha-icon>`)}const i=this.hass?.locale?.language??this.hass?.language,n=F`<span>${Ut(t,e,i)}</span>`;return this._wrapLinkIfNeeded(e,t,n)}_wrapLinkIfNeeded(t,e,i){if(!t.add_link)return i;const n=Ot(Pt(e,t.add_link)).replace(/^\/?config\/www/,"/local");if(!n)return i;const o=t.link_target??"_blank";return F`<a href=${n} target=${o} rel="noreferrer noopener">${i}</a>`}_onClick(t,e,i){if(this._holdFired)return this._holdFired=!1,void t.preventDefault();if(e.tap_action){if(t.preventDefault(),e.double_tap_action)return this._tapTimer?(clearTimeout(this._tapTimer),void(this._tapTimer=void 0)):void(this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._handleAction(e,i,"tap")},250));this._handleAction(e,i,"tap")}}_onDoubleClick(t,e,i){e.double_tap_action&&(t.preventDefault(),this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0),this._handleAction(e,i,"double_tap"))}_startHold(t,e){this._clearHold(),this._holdFired=!1,this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._holdFired=!0,this._handleAction(t,e,"hold")},500)}_handleAction(t,e,i){const n=t[`${i}_action`];if(!n?.action)return void console.warn("list-card: invalid action config",n);if("none"===n.action)return;const o=function(t,e){const i=t=>"string"==typeof t?t.includes("[[")?It(t,e):t:Array.isArray(t)?t.map(i):t&&"object"==typeof t?Object.fromEntries(Object.entries(t).map(([t,e])=>[t,i(e)])):t;return i(t)}(structuredClone(n),e),s=new Event("hass-action",{bubbles:!0,composed:!0});s.detail={config:{entity:this._config?.entity,[`${i}_action`]:o},action:i},this.dispatchEvent(s)}getCardSize(){const t=this._config?.page_size??this._config?.row_limit??5;return Math.min(Math.max(1,Math.ceil(t/2)+(this._config?.title?1:0)),10)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}static async getConfigElement(){return document.createElement(At)}static getStubConfig(t){let e,i="";for(const[n,o]of Object.entries(t?.states??{})){const t=Object.entries(o?.attributes??{}).find(([,t])=>Array.isArray(t)&&t.length>0&&"object"==typeof t[0]);if(t){i=n,e=t[0];break}}return{type:`custom:${Ct}`,entity:i,title:"List Card",...e?{feed_attribute:e}:{},columns:[{title:"Title",field:"title"}]}}static{this.styles=r`
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
  `}};t([ut({attribute:!1})],qt.prototype,"hass",void 0),t([pt()],qt.prototype,"_config",void 0),t([pt()],qt.prototype,"_page",void 0),qt=t([ct(Ct)],qt),console.info("%clist-card\n%cVersion: 1.1.1","color: #EED202; font-weight: bold; background-color: black;",""),window.customCards=window.customCards||[],window.customCards.push({type:Ct,name:"List Card",preview:!0,description:"The List Card generates a grid with data from a sensor that provides data as a list of attributes.",documentationURL:"https://github.com/iantrich/list-card"});export{qt as ListCard};
