"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[1681],{2833:(t,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var e=o(5893),i=o(1151);const s={id:"multi-containers",title:"Multi containers",sidebar_label:"Multi containers"},a=void 0,r={id:"multi-containers",title:"Multi containers",description:"Multi containers support",source:"@site/docs/multi-containers.md",sourceDirName:".",slug:"/multi-containers",permalink:"/react-toastify/multi-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/multi-containers.md",tags:[],version:"current",frontMatter:{id:"multi-containers",title:"Multi containers",sidebar_label:"Multi containers"},sidebar:"someSidebar",previous:{title:"Stacked Notifications (v10)",permalink:"/react-toastify/stacked"},next:{title:"How to style",permalink:"/react-toastify/how-to-style"}},c={},l=[{value:"Multi containers support",id:"multi-containers-support",level:2}];function u(t){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"multi-containers-support",children:"Multi containers support"}),"\n",(0,e.jsxs)(n.p,{children:["To enable multiple containers support, you have to specify a ",(0,e.jsx)(n.code,{children:"containerId"})," and use it in\neach toast, to do so add ",(0,e.jsx)(n.code,{children:"containerId"})," to the toast's options object."]}),"\n",(0,e.jsx)(n.p,{children:"A simple example to demonstrate multi toast container capability."}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Notify A button will show a toast on the bottom left."}),"\n",(0,e.jsx)(n.li,{children:"Notify B button will show a toast on the top right."}),"\n"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-js",children:"  import { ToastContainer, toast } from 'react-toastify';\n  import 'react-toastify/dist/ReactToastify.css';\n\n\n function App() {\n    const notifyA = () => toast('Wow so easy !', {containerId: 'A'});\n    const notifyB = () => toast('Wow so easy !', {containerId: 'B'});\n\n    return (\n      <div>\n          <ToastContainer containerId=\"A\" position=\"bottom-left\" />\n          <ToastContainer containerId=\"B\" position=\"top-right\" />\n    \n          <button onClick={notifyA}>Notify A !</button>\n          <button onClick={notifyB}>Notify B !</button>          \n      </div>\n    );\n  }\n"})})]})}function d(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(u,{...t})}):u(t)}},1151:(t,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var e=o(7294);const i={},s=e.createContext(i);function a(t){const n=e.useContext(s);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),e.createElement(s.Provider,{value:n},t.children)}}}]);