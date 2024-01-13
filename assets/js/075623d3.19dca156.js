"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[1122],{1628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(5893),r=n(1151);const i={id:"dispatch-toast-outside-of-react-component",title:"Dispatch toast outside of react component",sidebar_label:"Dispatch toast outside of react component"},s=void 0,a={id:"dispatch-toast-outside-of-react-component",title:"Dispatch toast outside of react component",description:"The toast emitter is just a regular Javascript object, nothing less nothing more. You can dispatch notification from almost anywhere.",source:"@site/docs/dispatch-toast-outside-of-react-component.md",sourceDirName:".",slug:"/dispatch-toast-outside-of-react-component",permalink:"/react-toastify/dispatch-toast-outside-of-react-component",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/dispatch-toast-outside-of-react-component.md",tags:[],version:"current",frontMatter:{id:"dispatch-toast-outside-of-react-component",title:"Dispatch toast outside of react component",sidebar_label:"Dispatch toast outside of react component"},sidebar:"someSidebar",previous:{title:"How to style",permalink:"/react-toastify/how-to-style"},next:{title:"Play or pause the timer programmatically",permalink:"/react-toastify/timer"}},c={},l=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"toast"})," emitter is just a regular Javascript object, nothing less nothing more. You can dispatch notification from almost anywhere."]}),"\n",(0,o.jsx)(t.p,{children:"In the video below I've used it inside the service worker to notify the user that he's offline."}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/Z9DLrRu4sYs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"// index.js\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport 'normalize.css';\nimport App from 'src/components/App';\nimport { toast } from \"react-toastify\";\nimport registerServiceWorker from './registerServiceWorker';\n\nimport 'react-toastify/dist/ReactToastify.css';\nimport './index.css';\n\n\n\nReactDOM.render(\n    <App />,\n  document.getElementById('root')\n);\nregisterServiceWorker(toast);\n\n\n\n//registerServiceWorker.js\n\n// this is a classic service worker coming from CRA\n\nexport default function register(toast) {\n  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {\n    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);\n    if (publicUrl.origin !== window.location.origin) return;\n\n    window.addEventListener('load', () => {\n      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;\n      let isAppOnline = navigator.onLine;\n\n      window.addEventListener('online', () => {\n        if(!isAppOnline){\n          toast('\ud83e\udd84 The connectivity is back, sync in progress...');\n          isAppOnline = true;\n        }\n      });\n\n      window.addEventListener('offline', () => {\n        toast.warn('The app is running offline, any changes mades during this time will be synced as soon as the connectivity is back');\n        isAppOnline = false;\n      });\n\n      if (isLocalhost) {\n        checkValidServiceWorker(swUrl, toast);\n      } else {\n        registerValidSW(swUrl, toast);\n      }\n    });\n  }\n}\n\nfunction registerValidSW(swUrl, toast) {\n  navigator.serviceWorker\n    .register(swUrl)\n    .then(registration => {\n      registration.onupdatefound = () => {\n        const installingWorker = registration.installing;\n        installingWorker.onstatechange = () => {\n          if (installingWorker.state === 'installed') {\n            if (navigator.serviceWorker.controller) {\n              toast.info('\ud83d\udd04 New content is available; please refresh.')\n            } else {\n              toast('\ud83d\ude80 Content is cached for offline use.')\n            }\n          }\n        };\n      };\n    })\n    .catch(error => {\n      toast.error('Error during service worker registration: ' + error,);\n    });\n}\n\nfunction checkValidServiceWorker(swUrl, toast) {\n  fetch(swUrl)\n    .then(response => {\n      if (\n        response.status === 404 ||\n        response.headers.get('content-type').indexOf('javascript') === -1\n      ) {\n        navigator.serviceWorker.ready.then(registration => {\n          registration.unregister().then(() => {\n            window.location.reload();\n          });\n        });\n      } else {\n        registerValidSW(swUrl);\n      }\n    })\n    .catch(() => {\n      toast(\n        '\ud83d\udca9 No internet connection found. App is running in offline mode.'\n      );\n    });\n}\n\nexport function unregister() {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(registration => {\n      registration.unregister();\n    });\n  }\n}\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);