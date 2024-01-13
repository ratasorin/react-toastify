"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[7012],{1139:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(5893),r=o(1151);const a={id:"use-a-controlled-progress-bar",title:"Use a controlled progress bar",sidebar_label:"Use a controlled progress bar"},s=void 0,i={id:"use-a-controlled-progress-bar",title:"Use a controlled progress bar",description:"Imagine you want to see the progress of a file upload. The example below features axios, but it works with anything!",source:"@site/docs/controlled-progress-bar.md",sourceDirName:".",slug:"/use-a-controlled-progress-bar",permalink:"/react-toastify/use-a-controlled-progress-bar",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/controlled-progress-bar.md",tags:[],version:"current",frontMatter:{id:"use-a-controlled-progress-bar",title:"Use a controlled progress bar",sidebar_label:"Use a controlled progress bar"},sidebar:"someSidebar",previous:{title:"Limit the number of toast displayed",permalink:"/react-toastify/limit-the-number-of-toast-displayed"},next:{title:"Update a toast",permalink:"/react-toastify/update-toast"}},l={},d=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Imagine you want to see the progress of a file upload. The example below features ",(0,n.jsx)(t.a,{href:"https://github.com/axios/axios",children:"axios"}),", but it works with anything!"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import axios from 'axios';\nimport { toast } from 'react-toastify';\n\nfunction Example(){\n  // we need to keep a reference of the toastId to be able to update it\n  const toastId = React.useRef(null);\n\n  function handleUpload(){\n    axios.request({\n      method: \"post\", \n      url: \"/foobar\", \n      data: myData, \n      onUploadProgress: p => {\n        const progress = p.loaded / p.total;\n\n        // check if we already displayed a toast\n        if (toastId.current === null) {\n          toastId.current = toast('Upload in Progress', { progress });\n        } else {\n          toast.update(toastId.current, { progress });\n        }\n      }\n    }).then(data => {\n      // Upload is done! \n      // The remaining progress bar will be filled up\n      // The toast will be closed when the transition end\n      toast.done(toastId.current);\n    })\n  }\n\n  return (\n    <div>\n      <button onClick={handleUpload}>Upload something</button>\n    </div>\n  )\n}\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var n=o(7294);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);