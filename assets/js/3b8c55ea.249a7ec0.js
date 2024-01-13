"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[3217],{6995:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=e(5893),a=e(1151);const o={id:"installation",title:"Installation",sidebar_label:"Installation"},s=void 0,r={id:"installation",title:"Installation",description:"Requirements",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/react-toastify/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/react-toastify/introduction"},next:{title:"\ud83d\ude80 Migrate to v10",permalink:"/react-toastify/migration-v10"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"The gist",id:"the-gist",level:2}];function d(t){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://reactjs.org",children:"React"})," version >= 16.8 or above"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"With npm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install --save react-toastify\n"})}),"\n",(0,i.jsx)(n.p,{children:"With yarn:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"yarn add react-toastify\n"})}),"\n",(0,i.jsx)(n.h2,{id:"the-gist",children:"The gist"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"  import React from 'react';\n  import { ToastContainer, toast } from 'react-toastify';\n\n  import 'react-toastify/dist/ReactToastify.css';\n  // minified version is also included\n  // import 'react-toastify/dist/ReactToastify.min.css';\n\n  function App(){\n    const notify = () => toast(\"Wow so easy !\");\n\n    return (\n      <div>\n        <button onClick={notify}>Notify !</button>\n        <ToastContainer />\n      </div>\n    );\n  }\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"important",children:(0,i.jsxs)(n.p,{children:["Remember to render the ",(0,i.jsx)(n.code,{children:"ToastContainer"})," ",(0,i.jsx)(n.em,{children:"once"})," in your application tree.\nIf you can't figure out where to put it, rendering it in the application root would be the best bet."]})})]})}function u(t={}){const{wrapper:n}={...(0,a.a)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>r,a:()=>s});var i=e(7294);const a={},o=i.createContext(a);function s(t){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(o.Provider,{value:n},t.children)}}}]);