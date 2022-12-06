"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[92648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9752:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"File Layouts",toc:!0},o=void 0,l={unversionedId:"file_layouts",id:"file_layouts",title:"File Layouts",description:"The following describes the general file layout structure for Apache Hudi",source:"@site/docs/file_layouts.md",sourceDirName:".",slug:"/file_layouts",permalink:"/cn/docs/next/file_layouts",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/file_layouts.md",tags:[],version:"current",frontMatter:{title:"File Layouts",toc:!0},sidebar:"docs",previous:{title:"Indexing",permalink:"/cn/docs/next/indexing"},next:{title:"Metadata Table",permalink:"/cn/docs/next/metadata"}},c=[],s={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following describes the general file layout structure for Apache Hudi"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hudi organizes data tables into a directory structure under a base path on a distributed file system"),(0,a.kt)("li",{parentName:"ul"},"Tables are broken up into partitions"),(0,a.kt)("li",{parentName:"ul"},"Within each partition, files are organized into file groups, uniquely identified by a file ID"),(0,a.kt)("li",{parentName:"ul"},"Each file group contains several file slices "),(0,a.kt)("li",{parentName:"ul"},"Each slice contains a base file (",(0,a.kt)("em",{parentName:"li"},".parquet) produced at a certain commit/compaction instant time, along with set of log files ("),".log.*) that contain inserts/updates to the base file since the base file was produced. ")),(0,a.kt)("p",null,"Hudi adopts Multiversion Concurrency Control (MVCC), where ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/compaction"},"compaction")," action merges logs and base files to produce new\nfile slices and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/hoodie_cleaner"},"cleaning")," action gets rid of unused/older file slices to reclaim space on the file system."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Partition On HDFS",src:n(79719).Z})))}u.isMDXComponent=!0},79719:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hudi_partitions_HDFS-5f9da4e0c57c9ee20b74b31c035ba0e6.png"}}]);