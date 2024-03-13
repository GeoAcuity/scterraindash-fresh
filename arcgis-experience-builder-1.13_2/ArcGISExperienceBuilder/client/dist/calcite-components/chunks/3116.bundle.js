/*! For license information please see 3116.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3116],{5611:(e,t,n)=>{function i(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}n.d(t,{g:()=>i})},3116:(e,t,n)=>{n.r(t),n.d(t,{calcite_rating:()=>f});var i=n(8641),a=n(1788),s=n(6851),o=n(9336),l=n(7039),r=n(3844),c=n(4879),u=n(339),d=n(2322);n(8274);const h=({full:e,scale:t,partial:n})=>(0,i.h)("calcite-icon",{class:n?void 0:"icon",icon:e?"star-f":"star",scale:t}),f=class{constructor(e){(0,i.r)(this,e),this.calciteRatingChange=(0,i.c)(this,"calciteRatingChange",6),this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=!1},this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=!0,this.hoverValue=null},this.handleHostKeyDown=()=>{this.isKeyboardInteraction=!0},this.handleLabelKeyDown=e=>{const t=this.getValueFromLabelEvent(e),n=e.key,i=" "==n?void 0:Number(n);if(this.emit=!0,isNaN(i))switch(n){case"Enter":case" ":this.value=this.required||this.value!==t?t:0;break;case"ArrowLeft":this.value=this.getPreviousRatingValue(t),this.updateFocus(),e.preventDefault();break;case"ArrowRight":this.value=this.getNextRatingValue(t),this.updateFocus(),e.preventDefault();break;case"Tab":this.hoverValue=null}else(!this.required&&i>=0&&i<=this.max||this.required&&i>0&&i<=this.max)&&(this.value=i),this.updateFocus()},this.handleInputChange=e=>{if(!0===this.isKeyboardInteraction){const t=Number(e.target.value);this.hoverValue=t,this.value=t}},this.handleLabelPointerOver=e=>{this.hoverValue=this.getValueFromLabelEvent(e)},this.handleLabelPointerDown=e=>{const t=e.currentTarget,n=this.getValueFromLabelEvent(e);this.hoverValue=n,this.emit=!0,this.value=this.required||this.value!==n?n:0,t.focus()},this.handleLabelClick=e=>{e.preventDefault()},this.handleLabelFocus=e=>{const t=this.getValueFromLabelEvent(e);this.hoverValue=t},this.setLabelEl=e=>{this.labelElements.push(e)},this.emit=!1,this.guid=`calcite-ratings-${(0,s.g)()}`,this.isKeyboardInteraction=!0,this.labelElements=[],this.max=5,this.average=void 0,this.count=void 0,this.disabled=!1,this.form=void 0,this.messages=void 0,this.messageOverrides=void 0,this.name=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.showChip=!1,this.value=0,this.effectiveLocale="",this.defaultMessages=void 0,this.hoverValue=void 0}onMessagesChange(){}handleValueUpdate(e){this.hoverValue=e,this.emit&&this.calciteRatingChange.emit(),this.emit=!1}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}connectedCallback(){(0,o.c)(this),(0,c.c)(this),(0,u.c)(this),(0,l.c)(this),(0,a.c)(this)}async componentWillLoad(){await(0,u.s)(this),(0,r.s)(this)}componentWillRender(){this.starsMap=Array.from({length:this.max},((e,t)=>{const n=t+1,i=!this.hoverValue&&this.average&&!this.value&&n<=this.average,a=n===this.value,s=this.average&&this.average+1-n,o=n<=this.hoverValue;return{average:i,checked:a,fraction:s,hovered:o,id:`${this.guid}-${n}`,partial:!this.hoverValue&&!this.value&&!o&&s>0&&s<1,selected:this.value>=n,value:n,tabIndex:this.getTabIndex(n)}}))}componentDidLoad(){(0,r.a)(this)}disconnectedCallback(){(0,o.d)(this),(0,c.d)(this),(0,u.d)(this),(0,l.d)(this),(0,a.d)(this)}componentDidRender(){(0,o.u)(this)}render(){return(0,i.h)(i.H,{onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},(0,i.h)("span",{class:"wrapper"},(0,i.h)("fieldset",{class:"fieldset",disabled:this.disabled},(0,i.h)("legend",{class:"visually-hidden"},this.messages.rating),this.starsMap.map((({average:e,checked:t,fraction:n,hovered:a,id:s,partial:o,selected:l,value:r,tabIndex:c})=>(0,i.h)("label",{class:{star:!0,selected:l,hovered:a,average:e,partial:o},"data-value":r,htmlFor:s,onClick:this.handleLabelClick,onFocus:this.handleLabelFocus,onKeyDown:this.handleLabelKeyDown,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver,tabIndex:c,ref:this.setLabelEl},(0,i.h)("input",{checked:t,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:s,name:this.guid,onChange:this.handleInputChange,tabIndex:-1,type:"radio",value:r}),(0,i.h)(h,{full:l||e,scale:this.scale}),o&&(0,i.h)("div",{class:"fraction",style:{width:100*n+"%"}},(0,i.h)(h,{full:!0,partial:!0,scale:this.scale})),(0,i.h)("span",{class:"visually-hidden"},this.messages.stars.replace("{num}",`${r}`))))),(this.count||this.average)&&this.showChip?(0,i.h)("calcite-chip",{scale:this.scale,value:this.count?.toString()},!!this.average&&(0,i.h)("span",{class:"number--average"},this.average.toString()),!!this.count&&(0,i.h)("span",{class:"number--count"},"(",this.count?.toString(),")")):null),(0,i.h)(a.H,{component:this})))}onLabelClick(){this.setFocus()}updateFocus(){this.hoverValue=this.value,this.labelElements[this.value-1].focus()}getTabIndex(e){return this.readOnly||this.value!==e&&(this.value||1!==e)?-1:0}getValueFromLabelEvent(e){const t=e.currentTarget;return Number(t.getAttribute("data-value"))}getNextRatingValue(e){return 5===e?1:e+1}getPreviousRatingValue(e){return 1===e?5:e-1}async setFocus(){await(0,r.c)(this),(0,d.f)(this.el)}static get assetsDirs(){return["assets"]}get el(){return(0,i.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};f.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.star:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"},1788:(e,t,n)=>{n.d(t,{H:()=>E,a:()=>m,c:()=>d,d:()=>v,f:()=>h,r:()=>u,s:()=>c});var i=n(2322),a=n(8641);!function(e){function t(e,t,n){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",n)}"function"!=typeof e.requestSubmit&&(e.requestSubmit=function(e){e?(function(e,n){e instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==e.type||t(TypeError,"The specified element is not a submit button"),e.form==n||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}(e,this),e.click()):((e=document.createElement("input")).type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))})}(HTMLFormElement.prototype);const s="hidden-form-input";function o(e){return"checked"in e}const l=new WeakMap,r=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function u(e){e.formEl?.reset()}function d(e){const{el:t,value:n}=e,a=h(e);if(!a||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(n,(e=>{a=e.composedPath().some((e=>r.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),a}(a,t))return;e.formEl=a,e.defaultValue=n,o(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||f).bind(e);a.addEventListener("reset",s),l.set(e.el,s),r.add(t)}function h(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function f(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function v(e){const{el:t,formEl:n}=e;if(!n)return;const i=l.get(t);n.removeEventListener("reset",i),l.delete(t),e.formEl=null,r.delete(t)}function m(e,t){e.defaultValue=t}const p=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},b=e=>e.removeEventListener("change",p);function g(e,t,n){const{defaultValue:i,disabled:a,form:s,name:l,required:r}=e;t.defaultValue=i,t.disabled=a,t.name=l,t.required=r,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const E=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:a}=e,{ownerDocument:o}=t,l=t.querySelectorAll(`input[slot="${s}"]`);if(!n||!i)return void l.forEach((e=>{b(e),e.remove()}));const r=Array.isArray(a)?a:[a],c=[],u=new Set;let d;l.forEach((t=>{const n=r.find((e=>e==t.value));null!=n?(u.add(n),g(e,t,n)):c.push(t)})),r.forEach((t=>{if(u.has(t))return;let n=c.pop();n||(n=o.createElement("input"),n.slot=s),d||(d=o.createDocumentFragment()),d.append(n),n.addEventListener("change",p),g(e,n,t)})),d&&t.append(d),c.forEach((e=>{b(e),e.remove()}))}(e),(0,a.h)("slot",{name:s}))},9336:(e,t,n)=>{n.d(t,{c:()=>m,d:()=>p,u:()=>d});var i=n(5611);const a=/firefox/i.test((0,i.g)()),s=a?new WeakMap:null;function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){const t=e.target;if(a&&!s.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const r=["mousedown","mouseup","click"];function c(e){if(a&&!s.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const u={capture:!0};function d(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void h(e);v(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function h(e){var t;e.el.click=o,(t=a?f(e):e.el)&&(t.addEventListener("pointerdown",l,u),r.forEach((e=>t.addEventListener(e,c,u))))}function f(e){return s.get(e.el)}function v(e){var t;delete e.el.click,(t=a?f(e):e.el)&&(t.removeEventListener("pointerdown",l,u),r.forEach((e=>t.removeEventListener(e,c,u))))}function m(e){if(!e.disabled||!a)return;const t=e.el.parentElement||e.el;s.set(e.el,t),h(e)}function p(e){a&&(s.delete(e.el),v(e))}},7039:(e,t,n)=>{n.d(t,{a:()=>o,c:()=>v,d:()=>m,g:()=>b,l:()=>s});var i=n(2322);const a="calciteInternalLabelClick",s="calciteInternalLabelConnected",o="calciteInternalLabelDisconnected",l="calcite-label",r=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakSet,f=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${l}[for="${t}"]`});if(n)return n;const a=(0,i.c)(e,l);return!a||function(e,t){let n;const i="custom-element-ancestor-check",a=i=>{i.stopImmediatePropagation();const a=i.composedPath();n=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(i,a,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,a);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function v(e){const t=f(e.el);if(c.has(t)&&t===e.labelEl||!t&&h.has(e))return;const n=w.bind(e);if(t){e.labelEl=t;const i=r.get(t)||[];i.push(e),r.set(t,i.sort(p)),c.has(e.labelEl)||(c.set(e.labelEl,g),e.labelEl.addEventListener(a,g)),h.delete(e),document.removeEventListener(s,u.get(e)),d.set(e,n),document.addEventListener(o,n)}else h.has(e)||(n(),document.removeEventListener(o,d.get(e)))}function m(e){if(h.delete(e),document.removeEventListener(s,u.get(e)),document.removeEventListener(o,d.get(e)),u.delete(e),d.delete(e),!e.labelEl)return;const t=r.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(a,c.get(e.labelEl)),c.delete(e.labelEl)),r.set(e.labelEl,t.filter((t=>t!==e)).sort(p)),e.labelEl=null}function p(e,t){return(0,i.k)(e.el,t.el)?-1:1}function b(e){return e.label||e.labelEl?.textContent?.trim()||""}function g(e){const t=e.detail.sourceEvent.target,n=r.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const a=n[0];a.disabled||a.onLabelClick(e)}function E(){h.has(this)&&v(this)}function w(){h.add(this);const e=u.get(this)||E.bind(this);u.set(this,e),document.addEventListener(s,e)}},3844:(e,t,n)=>{n.d(t,{a:()=>l,b:()=>r,c:()=>c,s:()=>o});var i=n(8641);const a=new WeakMap,s=new WeakMap;function o(e){s.set(e,new Promise((t=>a.set(e,t))))}function l(e){a.get(e)()}function r(e){return s.get(e)}async function c(e){return await r(e),(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},339:(e,t,n)=>{n.d(t,{c:()=>d,d:()=>h,s:()=>r,u:()=>u});var i=n(8641),a=n(4879);const s={};function o(){throw new Error("could not fetch component message bundle")}function l(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function r(e){e.defaultMessages=await c(e,e.effectiveLocale),l(e)}async function c(e,t){const{el:n}=e,l=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return s[n]||(s[n]=fetch((0,i.g)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||o(),e.json()))).catch((()=>o()))),s[n]}((0,a.g)(t,"t9n"),l)}async function u(e,t){e.defaultMessages=await c(e,t),l(e)}function d(e){e.onMessagesChange=f}function h(e){e.onMessagesChange=void 0}function f(){l(this)}}}]);