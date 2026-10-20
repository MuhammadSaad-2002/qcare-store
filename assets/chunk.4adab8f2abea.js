"use strict";(self.webpackChunkqcare_frontend=self.webpackChunkqcare_frontend||[]).push([[349],{349:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p,metadata:()=>m});var s=r(4848),n=r(5179),a=r(1213),i=r(7503),o=r(885),c=r(8252),l=r(1813),d=r(1397),h=r(895),u=r(7256);const m=(0,n.b0)("Your Order Details","View your Q Care Pharmacy order status, purchased items, delivery address and payment details.","/account",{noindex:!0});async function p({params:e}){await(0,u.HW)()||(0,i.V2)("/login");const{number:t}=await e,r=await(0,u.$Q)(`/orders/${encodeURIComponent(t)}`);r||(0,i.mX)();const n=r.data,m=e=>new Intl.NumberFormat("en-PK",{style:"currency",currency:n.currency_code}).format(Number(e)),p=n.shipping_address;return(0,s.jsxs)(h.m,{className:"store-catalog store-account-page",children:[(0,s.jsxs)("header",{className:"store-catalog-heading",children:[(0,s.jsxs)("nav",{"aria-label":"Breadcrumb",children:[(0,s.jsx)(a.A,{href:"/",children:"Home"}),(0,s.jsx)(o.A,{size:13}),(0,s.jsx)(a.A,{href:"/account",children:"Account"}),(0,s.jsx)(o.A,{size:13}),(0,s.jsx)("span",{"aria-current":"page",children:"Order details"})]}),(0,s.jsx)("h1",{children:"Order details"})]}),(0,s.jsxs)(a.A,{href:"/account",className:"store-account-back",children:[(0,s.jsx)(c.A,{size:17})," Back to your orders"]}),(0,s.jsxs)("div",{className:"store-account-detail-heading",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"store-account-eyebrow",children:"Order number"}),(0,s.jsx)("h2",{children:n.number}),(0,s.jsxs)("p",{children:["Placed ",new Date(n.placed_at).toLocaleDateString("en-PK",{day:"numeric",month:"long",year:"numeric"})]})]}),(0,s.jsx)("span",{className:"store-account-status",children:n.status.replaceAll("_"," ")})]}),(0,s.jsxs)("div",{className:"store-account-detail-layout",children:[(0,s.jsxs)("section",{className:"store-account-detail-card",children:[(0,s.jsxs)("h3",{children:[(0,s.jsx)(l.A,{size:20})," Items in your order"]}),n.items?.map((e=>(0,s.jsxs)("div",{className:"store-account-detail-item",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:e.name}),(0,s.jsxs)("span",{children:[e.sku," · Qty ",e.quantity," × ",m(e.unit_price)]})]}),(0,s.jsx)("strong",{children:m(e.line_total)})]},e.sku))),(0,s.jsxs)("div",{className:"store-account-totals",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Subtotal"}),(0,s.jsx)("span",{children:m(n.subtotal)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Delivery"}),(0,s.jsx)("span",{children:m(n.shipping_total)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Total"}),(0,s.jsx)("strong",{children:m(n.grand_total)})]})]})]}),(0,s.jsxs)("aside",{className:"store-account-detail-card",children:[(0,s.jsxs)("h3",{children:[(0,s.jsx)(d.A,{size:20})," Delivery details"]}),p&&(0,s.jsxs)("address",{children:[(0,s.jsx)("strong",{children:p.recipient_name}),(0,s.jsx)("span",{children:p.line_1}),p.line_2&&(0,s.jsx)("span",{children:p.line_2}),p.area&&(0,s.jsx)("span",{children:p.area}),(0,s.jsx)("span",{children:[p.city,p.region,p.postal_code].filter(Boolean).join(", ")}),p.phone&&(0,s.jsx)("span",{children:p.phone})]}),(0,s.jsxs)("div",{className:"store-account-payment",children:[(0,s.jsx)("span",{children:"Payment"}),(0,s.jsx)("strong",{children:"cod"===n.payment_method?"Cash on delivery":n.payment_method}),(0,s.jsx)("small",{children:n.payment_status.replaceAll("_"," ")})]})]})]})]})}},885:(e,t,r)=>{r.d(t,{A:()=>n});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},n=(0,r(8195).A)(s)},895:(e,t,r)=>{r.d(t,{m:()=>n});var s=r(4848);function n({children:e,className:t=""}){return(0,s.jsx)("div",{className:`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${t}`,children:e})}},1213:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(4848),n=r(6540),a=r(7503);const i=(0,n.forwardRef)((function({href:e,replace:t,scroll:r,prefetch:n,onClick:i,children:o,...c},l){const d=(0,a.rd)(),h="string"==typeof e?e:`${e.pathname??""}${e.query?"?"+new URLSearchParams(e.query):""}${e.hash??""}`;return(0,s.jsx)("a",{...c,href:h,ref:l,onClick:e=>{if(i?.(e),e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||"_blank"===c.target||null!=c.download)return;const s=new URL(h,window.location.href);s.origin!==window.location.origin||!["http:","https:"].includes(s.protocol)||s.hash&&s.pathname===location.pathname&&s.search===location.search||(e.preventDefault(),(t?d.replace:d.push)(s.pathname+s.search+s.hash,{scroll:r}))},children:o})}))},1397:(e,t,r)=>{r.d(t,{A:()=>n});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]},n=(0,r(8195).A)(s)},1813:(e,t,r)=>{r.d(t,{A:()=>n});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s={name:"package",size:24,node:[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]},n=(0,r(8195).A)(s)},5179:(e,t,r)=>{r.d(t,{$Y:()=>c,W6:()=>a,b0:()=>o,b2:()=>n,gk:()=>l});const s="Q Care Pharmacy",n="Shop medicines, vitamins, medical devices and nutrition at Q Care Pharmacy in Rawalpindi, with delivery across Pakistan.",a=new URL("https://store.qcare-pharmacy.com").origin,i=!["localhost","127.0.0.1","::1","[::1]"].includes(new URL(a).hostname);function o(e,t,r,n={}){const a=`${e} | ${s}`,o=n.image?[{url:n.image}]:void 0;return{title:{absolute:a},description:t,alternates:{canonical:r},robots:{index:i&&!n.noindex,follow:!0},openGraph:{type:"website",locale:"en_PK",siteName:s,title:a,description:t,url:r,...o?{images:o}:{}},twitter:{card:o?"summary_large_image":"summary",title:a,description:t,...n.image?{images:[n.image]}:{}}}}function c(e){const t=e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();return t.length<=160?t:`${t.slice(0,157).replace(/\s+\S*$/,"")}…`}function l(e){return JSON.stringify(e).replace(/</g,"\\u003c")}},8195:(e,t,r)=>{r.d(t,{A:()=>u});var s=r(6540);
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a=e=>{const t=(e=>{let t="",r=!1;for(const s of e)"-"===s||"_"===s||s<=" "?r=t.length>0:(0===t.length?t+=s.toLowerCase():t+=r?s.toUpperCase():s,r=!1);return t})(e);return t.charAt(0).toUpperCase()+t.slice(1)},i=(...e)=>e.filter(((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t)).join(" ").trim(),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
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
function l(e,t={}){return function(e,t={}){const r=t.attributeNames??{},s=e=>r[e]??e,n=e.size??e.width??o.width,a=e.size??e.height??o.height,l=e.aliases?.filter((e=>"string"==typeof e&&""!==e.trim())).map((e=>`lucide-${e}`))??[],d=[...e.name?[`lucide-${e.name}`]:[],...l],h=t.className?.split(" ").filter(Boolean)??[],u=!1===t.includeDefaultClasses?i(...h):i("lucide",...d,...h),m=t.absoluteStrokeWidth?Number(t.strokeWidth??o["stroke-width"])*Number(e.size??e.width??o.width)/Number(t.size??t.width??o.width):t.strokeWidth??o["stroke-width"];return["svg",{...Object.entries(o).reduce(((e,[t,r])=>(e[s(t)]=r,e)),{}),..."color"in t&&t.color&&{[s("stroke")]:t.color},..."size"in t&&c(t.size)&&{[s("width")]:t.size,[s("height")]:t.size},..."width"in t&&c(t.width)&&{[s("width")]:t.width},..."height"in t&&c(t.height)&&{[s("height")]:t.height},[s("stroke-width")]:m,...u&&{[s("class")]:u},[s("viewBox")]:`0 0 ${n} ${a}`,...!1===t.hasA11yProp?{[s("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map((e=>{const[r,n,a]=e,i=t.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...n}:n;return a?[r,i,a]:[r,i]}))]}(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d=(0,s.createContext)({});const h=(0,s.forwardRef)((({color:e,size:t,width:r,height:n,strokeWidth:a,absoluteStrokeWidth:o,nonScalingStroke:c,className:h="",children:u,iconNode:m=[],icon:p={node:m,aliases:[],size:24},...x},g)=>{const{size:f=24,strokeWidth:w=2,absoluteStrokeWidth:y=!1,nonScalingStroke:j=!1,color:k="currentColor",className:v=""}=(0,s.useContext)(d)??{},b=Boolean(u)||(e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(x),[N,A,z=[]]=l(p,{color:e??k,width:r??t??f,height:n??t??f,strokeWidth:a??w,absoluteStrokeWidth:o??y,nonScalingStroke:c??j,className:i(v,h),hasA11yProp:b,attributes:x});return(0,s.createElement)(N,{ref:g,...A},[...z.map((([e,t])=>(0,s.createElement)(e,t))),...Array.isArray(u)?u:[u]])}));
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function u(e,t=[],r=[]){const i="string"==typeof e?
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function(e,t,r=[]){if(null==t)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:n(e),size:24,node:t,...r.length>0?{aliases:r}:{}}}(e,t,r):e,o=(0,s.forwardRef)((({className:e,...t},r)=>(0,s.createElement)(h,{ref:r,icon:i,className:e,...t})));return i.name&&(o.displayName=a(i.name)),o}},8252:(e,t,r)=>{r.d(t,{A:()=>n});
/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]},n=(0,r(8195).A)(s)}}]);