"use strict";(self.webpackChunkqcare_frontend=self.webpackChunkqcare_frontend||[]).push([[575],{526:(e,t,n)=>{n.d(t,{A:()=>s,u:()=>i});var r=n(4848);function i({src:e,fill:t,priority:n,quality:r,unoptimized:i,placeholder:s,blurDataURL:o,loader:a,onLoadingComplete:c,...l}){const d="string"==typeof e?e:e?.src;return{props:{...l,src:d,srcSet:`${d} 1x`,loading:n?"eager":l.loading??"lazy",decoding:"async",...n?{fetchPriority:"high"}:{},style:{...t?{position:"absolute",height:"100%",width:"100%",inset:0}:{},...l.style}}}}const s=(0,n(6540).forwardRef)((function(e,t){const{props:n}=i(e);return(0,r.jsx)("img",{...n,ref:t})}))},885:(e,t,n)=>{n.d(t,{A:()=>i});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},i=(0,n(8195).A)(r)},895:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(4848);function i({children:e,className:t=""}){return(0,r.jsx)("div",{className:`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${t}`,children:e})}},1213:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(4848),i=n(6540),s=n(7503);const o=(0,i.forwardRef)((function({href:e,replace:t,scroll:n,prefetch:i,onClick:o,children:a,...c},l){const d=(0,s.rd)(),h="string"==typeof e?e:`${e.pathname??""}${e.query?"?"+new URLSearchParams(e.query):""}${e.hash??""}`;return(0,r.jsx)("a",{...c,href:h,ref:l,onClick:e=>{if(o?.(e),e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||"_blank"===c.target||null!=c.download)return;const r=new URL(h,window.location.href);r.origin!==window.location.origin||!["http:","https:"].includes(r.protocol)||r.hash&&r.pathname===location.pathname&&r.search===location.search||(e.preventDefault(),(t?d.replace:d.push)(r.pathname+r.search+r.hash,{scroll:n}))},children:a})}))},1595:(e,t,n)=>{n.d(t,{A:()=>i});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},i=(0,n(8195).A)(r)},2882:(e,t,n)=>{n.d(t,{M:()=>r,n:()=>i});const r="qcare:store-notice";function i(e){"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent(r,{detail:e}))}},3286:(e,t,n)=>{n.d(t,{A:()=>i});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r={name:"package-search",size:24,node:[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"M20.27 18.27 22 20",key:"er2am"}],["path",{d:"M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559",key:"tok1h1"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}],["circle",{cx:"18.5",cy:"16.5",r:"2.5",key:"ke13xx"}]]},i=(0,n(8195).A)(r)},3308:(e,t,n)=>{n.d(t,{D:()=>c});var r=n(4848),i=n(1213),s=n(9294),o=n(8533),a=n(5279);function c({kind:e}){const t="cart"===e,n=t?s.A:o.A;return(0,r.jsxs)("section",{className:"store-collection-empty","aria-labelledby":"empty-collection-title",children:[(0,r.jsx)("div",{className:"store-collection-empty-icon",children:(0,r.jsx)(n,{size:38,strokeWidth:1.5,"aria-hidden":"true"})}),(0,r.jsx)("p",{className:"store-section-kicker",children:t?"Your next essentials are waiting":"A little care, saved for later"}),(0,r.jsx)("h2",{id:"empty-collection-title",children:t?"Your cart is empty":"Keep your favourites close"}),(0,r.jsx)("p",{children:t?"Explore our pharmacy essentials and add what you need. Your chosen products will appear here.":"Tap the heart on any product to save it here, ready for your next shop."}),(0,r.jsxs)(i.A,{href:"/shop",className:"store-sidecart-view",children:[t?"Start shopping":"Explore products",(0,r.jsx)(a.A,{size:18,"aria-hidden":"true"})]}),t?(0,r.jsxs)(i.A,{href:"/wishlist",className:"store-collection-empty-secondary",children:[(0,r.jsx)(o.A,{size:17,"aria-hidden":"true"}),"View your wishlist"]}):(0,r.jsx)("small",{children:"Your wishlist is saved in this browser."})]})}},5279:(e,t,n)=>{n.d(t,{A:()=>i});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]},i=(0,n(8195).A)(r)},6194:(e,t,n)=>{n.d(t,{L4:()=>g,M0:()=>w,U4:()=>y,_$:()=>f,nU:()=>p,oS:()=>m,qC:()=>k,sX:()=>v});var r=n(6540),i=n(2882);const s="qcare:wishlist:v1",o="qcare:cart:v1",a="qcare:collections-change";function c(e){try{return"undefined"==typeof window?"[]":localStorage.getItem(e)??"[]"}catch{return"[]"}}function l(e){return window.addEventListener(a,e),window.addEventListener("storage",e),()=>{window.removeEventListener(a,e),window.removeEventListener("storage",e)}}function d(e){try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function h(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),window.dispatchEvent(new Event(a)),!0}catch{return(0,i.n)({kind:"error",title:"Could not save your change",description:"Your browser could not store this update. Check storage settings and try again."}),!1}}function u(e){return!!e&&"string"==typeof e.slug&&"string"==typeof e.name&&"string"==typeof e.sku&&"string"==typeof e.unitPrice&&"string"==typeof e.currency&&/^[A-Z]{3}$/.test(e.currency)&&(null===e.imageUrl||"string"==typeof e.imageUrl)&&(void 0===e.packSize||"string"==typeof e.packSize)}function p(){return d((0,r.useSyncExternalStore)(l,(()=>c(s)),(()=>"[]"))).filter(u)}function f(){return d((0,r.useSyncExternalStore)(l,(()=>c(o)),(()=>"[]"))).filter((e=>u(e)&&Number.isInteger(e.quantity)&&e.quantity>0))}function m(e){const t=d(c(s)),n=t.some((t=>t.slug===e.slug));h(s,n?t.filter((t=>t.slug!==e.slug)):[...t,e])&&(0,i.n)(n?{kind:"success",title:"Removed from wishlist",description:e.name}:{kind:"success",title:"Saved to wishlist",description:e.name,href:"/wishlist",actionLabel:"View wishlist"})}function w(e){const t=d(c(s)),n=t.find((t=>t.slug===e));n&&h(s,t.filter((t=>t.slug!==e)))&&(0,i.n)({kind:"success",title:"Removed from wishlist",description:n.name})}function y(e,t=1){if(!Number.isInteger(t)||t<1||t>99)return!1;const n=d(c(o)),r=n.find((t=>t.slug===e.slug&&t.sku===e.sku));if((r?.quantity??0)+t>99)return(0,i.n)({kind:"error",title:"Cart limit reached",description:`You can add up to 99 packs of ${e.name}.`}),!1;if(r?(Object.assign(r,e),r.quantity+=t):n.push({...e,quantity:t}),h(o,n)){const n=r?.quantity??t;return(0,i.n)({kind:"success",title:"Added to cart",description:`${e.name} · ${n} ${1===n?"pack":"packs"} in cart`,href:"/cart",actionLabel:"View cart"}),!0}return!1}function k(e,t,n){const r=d(c(o)),s=r.find((n=>n.slug===e&&n.sku===t)),a=Math.max(1,Math.min(99,n));s&&s.quantity!==a&&h(o,r.map((n=>n.slug===e&&n.sku===t?{...n,quantity:a}:n)))&&(0,i.n)({kind:"success",title:"Cart updated",description:`${s.name} · ${a} ${1===a?"pack":"packs"}`})}function g(e,t){const n=d(c(o)),r=n.find((n=>n.slug===e&&n.sku===t));r&&h(o,n.filter((n=>n.slug!==e||n.sku!==t)))&&(0,i.n)({kind:"success",title:"Removed from cart",description:r.name})}function v(){return h(o,[])}},8195:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(6540);
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s=e=>{const t=(e=>{let t="",n=!1;for(const r of e)"-"===r||"_"===r||r<=" "?n=t.length>0:(0===t.length?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t})(e);return t.charAt(0).toUpperCase()+t.slice(1)},o=(...e)=>e.filter(((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t)).join(" ").trim(),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function c(e){return null!=e}
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function l(e,t={}){return function(e,t={}){const n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??a.width,s=e.size??e.height??a.height,l=e.aliases?.filter((e=>"string"==typeof e&&""!==e.trim())).map((e=>`lucide-${e}`))??[],d=[...e.name?[`lucide-${e.name}`]:[],...l],h=t.className?.split(" ").filter(Boolean)??[],u=!1===t.includeDefaultClasses?o(...h):o("lucide",...d,...h),p=t.absoluteStrokeWidth?Number(t.strokeWidth??a["stroke-width"])*Number(e.size??e.width??a.width)/Number(t.size??t.width??a.width):t.strokeWidth??a["stroke-width"];return["svg",{...Object.entries(a).reduce(((e,[t,n])=>(e[r(t)]=n,e)),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&c(t.size)&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&c(t.width)&&{[r("width")]:t.width},..."height"in t&&c(t.height)&&{[r("height")]:t.height},[r("stroke-width")]:p,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${i} ${s}`,...!1===t.hasA11yProp?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map((e=>{const[n,i,s]=e,o=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...i}:i;return s?[n,o,s]:[n,o]}))]}(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d=(0,r.createContext)({});const h=(0,r.forwardRef)((({color:e,size:t,width:n,height:i,strokeWidth:s,absoluteStrokeWidth:a,nonScalingStroke:c,className:h="",children:u,iconNode:p=[],icon:f={node:p,aliases:[],size:24},...m},w)=>{const{size:y=24,strokeWidth:k=2,absoluteStrokeWidth:g=!1,nonScalingStroke:v=!1,color:x="currentColor",className:A=""}=(0,r.useContext)(d)??{},b=Boolean(u)||(e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(m),[z,N,S=[]]=l(f,{color:e??x,width:n??t??y,height:i??t??y,strokeWidth:s??k,absoluteStrokeWidth:a??g,nonScalingStroke:c??v,className:o(A,h),hasA11yProp:b,attributes:m});return(0,r.createElement)(z,{ref:w,...N},[...S.map((([e,t])=>(0,r.createElement)(e,t))),...Array.isArray(u)?u:[u]])}));
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function u(e,t=[],n=[]){const o="string"==typeof e?
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function(e,t,n=[]){if(null==t)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:i(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}(e,t,n):e,a=(0,r.forwardRef)((({className:e,...t},n)=>(0,r.createElement)(h,{ref:n,icon:o,className:e,...t})));return o.name&&(a.displayName=s(o.name)),a}},8407:(e,t,n)=>{function r(e){if(/^https?:\/\//i.test(e))return e;const t=window.location.origin;if(!t)return e;const n=new URL(t);return"undefined"!=typeof window&&["localhost","127.0.0.1"].includes(n.hostname)&&["localhost","127.0.0.1"].includes(window.location.hostname)&&(n.hostname=window.location.hostname),`${n.origin}${e.startsWith("/")?e:`/${e}`}`}n.d(t,{P:()=>r})},8533:(e,t,n)=>{n.d(t,{A:()=>i});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]},i=(0,n(8195).A)(r)},9294:(e,t,n)=>{n.d(t,{A:()=>i});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},i=(0,n(8195).A)(r)}}]);