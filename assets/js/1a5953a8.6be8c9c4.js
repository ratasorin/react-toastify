"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[2957],{1714:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(5893),i=n(1151);const s={id:"remove-toast",title:"Remove toast programmatically",sidebar_label:"Remove toast programmatically"},a=void 0,r={id:"remove-toast",title:"Remove toast programmatically",description:"An id is returned each time you display a toast, use it to remove a given toast programmatically by calling toast.dismiss(id)",source:"@site/docs/remove-toast.md",sourceDirName:".",slug:"/remove-toast",permalink:"/react-toastify/remove-toast",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/remove-toast.md",tags:[],version:"current",frontMatter:{id:"remove-toast",title:"Remove toast programmatically",sidebar_label:"Remove toast programmatically"},sidebar:"someSidebar",previous:{title:"Render Anything",permalink:"/react-toastify/render-what-you-want"},next:{title:"Handling promise",permalink:"/react-toastify/promise"}},c={},l=[{value:"Remove notification from a given container",id:"remove-notification-from-a-given-container",level:2}];function d(t){const e={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["An id is returned each time you display a toast, use it to remove a given toast programmatically by calling ",(0,o.jsx)(e.code,{children:"toast.dismiss(id)"})]}),"\n",(0,o.jsx)(e.admonition,{title:"Info",type:"info",children:(0,o.jsxs)(e.p,{children:["If you call ",(0,o.jsx)(e.code,{children:"toast.dismiss"})," without argument, all the displayed toasts will be removed."]})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import React from 'react';\nimport { toast } from 'react-toastify';\n\nfunction Example(){\n  const toastId = React.useRef(null);\n\n  const notify = () => toastId.current = toast(\"Lorem ipsum dolor\");\n\n  const dismiss = () =>  toast.dismiss(toastId.current);\n\n  const dismissAll = () =>  toast.dismiss();\n\n  return (\n    <div>\n      <button onClick={notify}>Notify</button>\n      <button onClick={dismiss}>Dismiss</button>\n      <button onClick={dismissAll}>Dismiss All</button>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"remove-notification-from-a-given-container",children:"Remove notification from a given container"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Remove all toasts that belongs to a given container"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'toast.dismiss({ container: "123" })\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Remove toast that has a given id for a specific container"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'toast.dismiss({ id: "123", containerId: "12" })\n'})})]})}function m(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);