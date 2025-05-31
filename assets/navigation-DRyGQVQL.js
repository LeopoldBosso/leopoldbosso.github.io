import{a as l,t as v,o,s as m}from"./chunk-D4RADZKF-R3cz4WnU.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,n)=>n?n.toUpperCase():s.toLowerCase()),x=t=>{const e=f(t);return e.charAt(0).toUpperCase()+e.slice(1)},p=(...t)=>t.filter((e,s,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===s).join(" ").trim(),w=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:a="",children:r,iconNode:d,...h},i)=>l.createElement("svg",{ref:i,...y,width:e,height:e,stroke:t,strokeWidth:n?Number(s)*24/Number(e):s,className:p("lucide",a),...!r&&!w(h)&&{"aria-hidden":"true"},...h},[...d.map(([u,k])=>l.createElement(u,k)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(t,e)=>{const s=l.forwardRef(({className:n,...a},r)=>l.createElement(b,{ref:r,iconNode:e,className:p(`lucide-${g(x(t))}`,`lucide-${t}`,n),...a}));return s.displayName=x(t),s};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],j=c("book",P);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],C=c("briefcase",N);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],A=c("chevron-down",$);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],M=c("file",_);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],H=c("house",L);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],B=c("school",E),I=[{icon:H,link:"",titlePage:"Accueil"},{icon:B,link:"education",titlePage:"Études"},{icon:C,link:"workexperience",titlePage:"Expériences"},{icon:j,link:"folio",titlePage:"Projets",subPages:[{link:"folio/suiteaurora",titlePage:"Suite Aurora"},{link:"folio/gidoc",titlePage:"Gidoc"},{link:"folio/sfm",titlePage:"SFM"}]},{icon:M,link:"cvlbgraph",titlePage:"CV"}],S=({icon:t})=>o.jsx(t,{className:"w-5 h-5"}),z=()=>{const[t,e]=l.useState(null),s=v();let n;return o.jsx("div",{className:"print:hidden fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50",children:o.jsx("nav",{className:"mt-2 bg-gray-100 shadow-xl shadow-gray-500/30 px-6 py-3 rounded-xl flex justify-center items-center",children:o.jsx("div",{className:"relative w-full",children:o.jsx("div",{className:"md:overflow-visible overflow-x-auto scrollbar-hide",children:o.jsx("div",{className:"flex space-x-6 whitespace-nowrap px-2 md:justify-center min-w-max",children:I.map(a=>{const r=t===a.titlePage,d=!!a.subPages,h=a.link!==""&&s.pathname.startsWith(`/${a.link}`);return o.jsxs("div",{className:"relative",onMouseEnter:()=>{clearTimeout(n),d&&e(a.titlePage)},onMouseLeave:i=>{var u;n=setTimeout(()=>{e(null)},150),(u=i.relatedTarget)!=null&&u.contains(i.currentTarget)||e(null)},children:[o.jsxs(m,{to:`/${a.link}`,className:`flex items-center gap-2 px-4 py-2 rounded 
                        ${h?"text-blue-600 font-bold":"text-gray-800 hover:text-blue-600"}`,children:[o.jsx(S,{icon:a.icon}),a.titlePage,d&&o.jsx(A,{className:"hidden md:inline w-3 h-3 text-gray-400 ml-0.5"})]}),d&&r&&o.jsx("div",{className:"hidden md:block absolute left-0 top-full mt-1 w-36 bg-gray-100 border border-gray-300 shadow-lg rounded-lg z-10",children:a.subPages.map(i=>o.jsx(m,{to:`/${i.link}`,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>e(null),children:i.titlePage},i.titlePage))})]},a.titlePage)})})})})})})};export{z as B,M as F,B as S,c};
