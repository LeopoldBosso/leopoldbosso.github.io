import{a as i,t as v,o,s as u}from"./chunk-D4RADZKF-R3cz4WnU.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,a)=>a?a.toUpperCase():s.toLowerCase()),m=t=>{const e=f(t);return e.charAt(0).toUpperCase()+e.slice(1)},x=(...t)=>t.filter((e,s,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===s).join(" ").trim(),w=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:n,iconNode:h,...r},d)=>i.createElement("svg",{ref:d,...y,width:e,height:e,stroke:t,strokeWidth:a?Number(s)*24/Number(e):s,className:x("lucide",c),...!n&&!w(r)&&{"aria-hidden":"true"},...r},[...h.map(([p,k])=>i.createElement(p,k)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(t,e)=>{const s=i.forwardRef(({className:a,...c},n)=>i.createElement(b,{ref:n,iconNode:e,className:x(`lucide-${g(m(t))}`,`lucide-${t}`,a),...c}));return s.displayName=m(t),s};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],j=l("book",P);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],C=l("briefcase",N);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],A=l("chevron-down",$);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],M=l("file",_);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],H=l("house",L);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],B=l("school",E),S=[{icon:H,link:"",titlePage:"Accueil"},{icon:B,link:"education",titlePage:"Études"},{icon:C,link:"workexperience",titlePage:"Expériences"},{icon:j,link:"folio",titlePage:"Projets",subPages:[{link:"folio/suiteaurora",titlePage:"Suite Aurora"},{link:"folio/gidoc",titlePage:"Gidoc"},{link:"folio/sfm",titlePage:"SFM"}]},{icon:M,link:"cvlbgraph",titlePage:"CV"}],I=({icon:t})=>o.jsx(t,{className:"w-5 h-5"}),z=()=>{const[t,e]=i.useState(null),s=v();return o.jsx("div",{className:"print:hidden fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50",children:o.jsx("nav",{className:"mt-2 bg-gray-100 shadow-xl shadow-gray-500/30 px-6 py-3 rounded-xl flex justify-center items-center",children:o.jsx("div",{className:"relative w-full",children:o.jsx("div",{className:"md:overflow-visible overflow-x-auto scrollbar-hide",children:o.jsx("div",{className:"flex space-x-6 whitespace-nowrap px-2 w-full justify-center",children:S.map(a=>{const c=t===a.titlePage,n=!!a.subPages,h=a.link!==""&&s.pathname.startsWith(`/${a.link}`);return o.jsxs("div",{className:"relative",onMouseEnter:()=>n&&e(a.titlePage),onMouseLeave:r=>{var d;(d=r.relatedTarget)!=null&&d.contains(r.currentTarget)||e(null)},children:[o.jsxs(u,{to:`/${a.link}`,className:`flex items-center gap-2 px-4 py-2 rounded 
                        ${h?"text-blue-600 font-bold":"text-gray-800 hover:text-blue-600"}`,children:[o.jsx(I,{icon:a.icon}),a.titlePage,n&&o.jsx(A,{className:"hidden md:inline w-3 h-3 text-gray-400 ml-0.5"})]}),n&&c&&o.jsx("div",{className:"hidden md:block absolute left-0 top-full mt-1 w-36 bg-gray-100 border border-gray-300 shadow-lg rounded-lg z-10",children:a.subPages.map(r=>o.jsx(u,{to:`/${r.link}`,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>e(null),children:r.titlePage},r.titlePage))})]},a.titlePage)})})})})})})};export{z as B,M as F,B as S,l as c};
