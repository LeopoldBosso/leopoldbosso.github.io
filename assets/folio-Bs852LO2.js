import{w as g}from"./with-props-B6V7a6HP.js";import{t as v,v as j,a as s,o as t,O as b}from"./chunk-D4RADZKF-R3cz4WnU.js";import{c as l,B as w}from"./navigation-CAqkqs7l.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],P=l("chevron-left",N);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],I=l("chevron-right",y),e=[{path:"suiteaurora",label:"Suite Aurora"},{path:"gidoc",label:"Gidoc"},{path:"sfm",label:"SFM"}];function k(){const o=v(),c=j(),d=o.pathname.split("/").pop(),n=e.findIndex(a=>a.path===d),[h,x]=s.useState(o.pathname),[C,u]=s.useState(0);s.useEffect(()=>{const a=e.findIndex(f=>f.path===h.split("/").pop());u(n>a?1:-1),x(o.pathname)},[o.pathname]);const i=a=>{const r=e[a].path;c(`/folio/${r}`)},p=()=>i((n-1+e.length)%e.length),m=()=>i((n+1)%e.length);return t.jsx("div",{className:"flex",children:t.jsxs("div",{className:"max-w-4xl mx-auto p-6 pt-[9rem] w-full",children:[t.jsx(w,{}),n!==-1&&t.jsxs("div",{className:"md:hidden flex justify-between items-center mb-6 px-4",children:[t.jsx("button",{onClick:p,"aria-label":"Projet précédent",className:"p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition duration-300 ease-in-out",children:t.jsx(P,{size:24})}),t.jsx("span",{className:"font-semibold text-gray-900 text-lg tracking-wide",children:e[n].label}),t.jsx("button",{onClick:m,"aria-label":"Projet suivant",className:"p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition duration-300 ease-in-out",children:t.jsx(I,{size:24})})]}),t.jsx("div",{className:"space-y-6 max-w-4xl mx-auto relative",children:t.jsx(b,{})})]})})}function L({}){return[{title:"folio"},{name:"folio des projets",content:"En html!"}]}const R=g(function(){return t.jsx(k,{})});export{R as default,L as meta};
