"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[748],{6089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(5893),s=n(1151);const i={id:"migration-v8",title:"Migrate to v8",sidebar_label:"Migrate to v8"},a=void 0,r={id:"migration-v8",title:"Migrate to v8",description:"React-toastify has been around for 5 years(will turn five the 8 November \ud83c\udf82). Since the beginning, one of the goals was to provide a library that is highly customizable and also able to work out of the box. Every major release introduces breaking changes but this is for the best \ud83d\udc4c.",source:"@site/docs/migrate-to-v8.md",sourceDirName:".",slug:"/migration-v8",permalink:"/react-toastify/migration-v8",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/migrate-to-v8.md",tags:[],version:"current",frontMatter:{id:"migration-v8",title:"Migrate to v8",sidebar_label:"Migrate to v8"},sidebar:"someSidebar",previous:{title:"Migrate to v9",permalink:"/react-toastify/migration-v9"},next:{title:"Release notes",permalink:"/react-toastify/release-notes"}},l={},c=[{value:"What is new in v8",id:"what-is-new-in-v8",level:2},{value:"Who doesn&#39;t like icons",id:"who-doesnt-like-icons",level:3},{value:"Clear separation between type and theme",id:"clear-separation-between-type-and-theme",level:3},{value:"I promise this is new, I&#39;ll tell you if you await",id:"i-promise-this-is-new-ill-tell-you-if-you-await",level:3},{value:"Pass data even when you are not rendering a react component",id:"pass-data-even-when-you-are-not-rendering-a-react-component",level:3},{value:"I just want to change few colors",id:"i-just-want-to-change-few-colors",level:3},{value:"Breaking changes",id:"breaking-changes",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"React-toastify has been around for 5 years(will turn five the 8 November \ud83c\udf82). Since the beginning, one of the goals was to provide a library that is highly customizable and also able to work out of the box. Every major release introduces breaking changes but this is for the best \ud83d\udc4c."}),"\n",(0,o.jsx)(t.h2,{id:"what-is-new-in-v8",children:"What is new in v8"}),"\n",(0,o.jsx)(t.p,{children:"A video is worth a thousand words."}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/cZ4Uj4ojTH4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(t.h3,{id:"who-doesnt-like-icons",children:"Who doesn't like icons"}),"\n",(0,o.jsxs)(t.p,{children:["Let's break down what is happening in the video above. Notifications of different types (",(0,o.jsx)(t.code,{children:"toast.info"}),", ",(0,o.jsx)(t.code,{children:"toast.error"}),", ",(0,o.jsx)(t.code,{children:"toast.success"}),", ",(0,o.jsx)(t.code,{children:"toast.warning"}),") display an icon associated with the selected type. You can also notice that the progress bar color matches the type color."]}),"\n",(0,o.jsx)("img",{width:"200",alt:"v8-icons-light",src:"https://user-images.githubusercontent.com/5574267/130860515-c9cf2b64-88b4-4711-971f-9149ec497152.png"}),"\n",(0,o.jsx)("img",{width:"200",alt:"v8-icons-dark",src:"https://user-images.githubusercontent.com/5574267/130860512-3a165ce6-7af3-4c24-8e81-f3f5a4561841.png"}),"\n",(0,o.jsx)("img",{width:"200",alt:"v8-icons-colored",src:"https://user-images.githubusercontent.com/5574267/130860506-750d2799-fb73-45cf-971a-7f4f3f8f48ce.png"}),"\n",(0,o.jsx)(t.p,{children:"Don't be afraid \ud83d\ude31, if you don't like those icons you can use your own or remove them. This is what it looks like in practice."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'toast("Default toast behavior is untouched, no icon to display");\ntoast.info("Lorem ipsum dolor"); // same as toast(message, {type: "info"});\ntoast.error("Lorem ipsum dolor")\ntoast.success("Lorem ipsum dolor")\ntoast.warn("Lorem ipsum dolor")\ntoast.error("Without icon", {\n  icon: false\n});\ntoast.success("You can provide any string", {\n  icon: "\ud83d\ude80"\n});\n// custom icons have access to the theme and the toast type\ntoast.success("And of course a component of your choice", {\n  icon: MyIcon\n});\ntoast.success("Even a function, given you return something that can be rendered", {\n  icon: ({theme, type}) =>  <img src="url"/>\n});\n//Disable icons\n<ToastContainer icon={false} />\n'})}),"\n",(0,o.jsx)(t.h3,{id:"clear-separation-between-type-and-theme",children:"Clear separation between type and theme"}),"\n",(0,o.jsxs)(t.p,{children:["Prior to v8, ",(0,o.jsx)(t.code,{children:"toast.info"}),", ",(0,o.jsx)(t.code,{children:"toast.error"}),", etc... Would display respectively a blue notification, a red notification, etc... This is not the case anymore. There are 3 distinct themes: ",(0,o.jsx)(t.code,{children:"light"}),", ",(0,o.jsx)(t.code,{children:"dark"}),", ",(0,o.jsx)(t.code,{children:"colored"}),". The theme can be applied globally or per notification."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'//Set the theme globally \n<ToastContainer theme="dark" />\n\n// define per toast\ntoast.info("Display a dark notification of type info");\ntoast.info("Display a light notification of type info", { theme: "light" });\ntoast.info("Display a blue notification of type info", { theme: "colored" });\n'})}),"\n",(0,o.jsx)(t.p,{children:"This separation will benefit theming in the future."}),"\n",(0,o.jsx)(t.h3,{id:"i-promise-this-is-new-ill-tell-you-if-you-await",children:"I promise this is new, I'll tell you if you await"}),"\n",(0,o.jsx)("img",{width:"400",alt:"v8-promise",src:"https://user-images.githubusercontent.com/5574267/130862557-8d13ddf0-c6bf-4f52-968a-1d91c62b6016.png"}),"\n",(0,o.jsx)("img",{width:"400",alt:"v8-promise-resolved",src:"https://user-images.githubusercontent.com/5574267/130862554-652397ed-1b1e-40d4-a250-c38734ec8e5d.png"}),"\n",(0,o.jsxs)(t.p,{children:["The library exposes a ",(0,o.jsx)(t.code,{children:"toast.promise"})," function. Supply a promise and the notification will be updated if it resolves or fails. When the promise is pending a spinner is displayed. Again you hide it, I bet you already know how to\ud83d\ude06."]}),"\n",(0,o.jsx)(t.p,{children:"Let's start with a simple example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));\ntoast.promise(\n    resolveAfter3Sec,\n    {\n      pending: 'Promise is pending',\n      success: 'Promise resolved \ud83d\udc4c',\n      error: 'Promise rejected \ud83e\udd2f'\n    }\n)\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Displaying a simple message is what you would want to do in 90% of cases. But what if the message you want to display depends on the promise response, what if you want to change some options for the error notification? Rest assured, under the hood, the library uses ",(0,o.jsx)(t.code,{children:"toast.update"}),". Thanks to this, you have full control over each notification."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));\ntoast.promise(\n    resolveAfter3Sec,\n    {\n      pending: \'Promise is pending\',\n      success: {\n        render({data}){\n          return `Hello ${data}`\n        },\n        // other options\n        icon: "\ud83d\udfe2",\n      },\n      error: {\n        render({data}){\n          // When the promise is rejected, data will contain the error\n          return <MyErrorComponent message={data.message} />\n        }\n      }\n    }\n)\n'})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["Because you have the full power of ",(0,o.jsx)(t.code,{children:"toast.update"}),", you can even supply a custom transition if you want \ud83e\udd2f"]}),(0,o.jsx)("img",{width:"300",alt:"v8-promise-resolved",src:"https://user-images.githubusercontent.com/5574267/130869645-586777a3-3326-4664-917e-a13aee367c43.gif"})]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to take care of each step yourself you can use ",(0,o.jsx)(t.code,{children:"toast.loading"})," and update the notification yourself."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'const id = toast.loading("Please wait...")\n//do something else\ntoast.update(id, { render: "All is good", type: "success" });\n'})}),"\n",(0,o.jsx)(t.h3,{id:"pass-data-even-when-you-are-not-rendering-a-react-component",children:"Pass data even when you are not rendering a react component"}),"\n",(0,o.jsxs)(t.p,{children:["One way to pass data to the notification was to use the context api or provide your own component. Starting v8 a ",(0,o.jsx)(t.code,{children:"data"})," option is now available to make it easier."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'toast(({data}) => `Hello ${data}`, {\n  data: "world"\n})\n'})}),"\n",(0,o.jsx)(t.h3,{id:"i-just-want-to-change-few-colors",children:"I just want to change few colors"}),"\n",(0,o.jsx)(t.p,{children:"Most of the time, users are ok with the default style, they just want to change some colors to match their brand. I think one way to improve the DX for all of us is to embrace CSS variables. That's why the library has switched to css variables!\nAll you want is to change the color of the progress bar? No problem"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:":root{\n  // this is the default value below\n  --toastify-color-progress-light: linear-gradient(\n    to right,\n    #4cd964,\n    #5ac8fa,\n    #007aff,\n    #34aadc,\n    #5856d6,\n    #ff2d55\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can find the list of all exposed variables ",(0,o.jsx)(t.a,{href:"/react-toastify/how-to-style#override-css-variables",children:"here"})]}),"\n",(0,o.jsx)(t.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,o.jsx)(t.p,{children:"There are few breaking changes."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The separation between theme and type. The type ",(0,o.jsx)(t.code,{children:"dark"})," has been removed"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'// before v8\ntoast("hello", {\n  type: "dark"\n})\n// toast.TYPE.DARK is no longer available\n\n// in v8\ntoast("hello", {\n  theme: "dark"\n})\n// or\ntoast.dark("hello")\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Notifications of different types are not colored by default, but they look pretty by default now \ud83d\ude06. You can use the ",(0,o.jsx)(t.code,{children:"colored"})," theme to get the same behavior as the previous version"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'toast.info("hello", {\n  theme: "colored"\n})\n// or apply the theme globally\n<ToastContainer theme="colored" />\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["An icon is displayed by default for the notificaiton of type ",(0,o.jsx)(t.code,{children:"info"}),", ",(0,o.jsx)(t.code,{children:"error"}),", ",(0,o.jsx)(t.code,{children:"warning"}),", ",(0,o.jsx)(t.code,{children:"success"})]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'// to opt-out gloablly from this behavior\n<ToastContainer icon={false} />\n\n// or per toast\ntoast.info("hello", {\n  icon: false\n});\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the following css classes has been removed"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".Toastify__toast--dark {\n}\n.Toastify__toast--default {\n}\n.Toastify__toast--info {\n}\n.Toastify__toast--success {\n}\n.Toastify__toast--warning {\n}\n.Toastify__toast--error {\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"That's it for this release. Thank you for using react-toastify and happy coding!"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);