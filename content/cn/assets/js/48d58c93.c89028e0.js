"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[25156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7158:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"\u4e91\u50a8\u5b58",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2019-06-17T01:59:57.000Z"),language:"cn"},a=void 0,l={unversionedId:"cloud",id:"version-0.9.0/cloud",title:"\u4e91\u50a8\u5b58",description:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.9.0/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/cn/docs/0.9.0/cloud",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/cloud.md",tags:[],version:"0.9.0",frontMatter:{title:"\u4e91\u50a8\u5b58",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2019-06-17T01:59:57.000Z",language:"cn"},sidebar:"version-0.9.0/docs",previous:{title:"\u7ba1\u7406 Hudi Pipelines",permalink:"/cn/docs/0.9.0/deployment"},next:{title:"S3 Filesystem",permalink:"/cn/docs/0.9.0/s3_hoodie"}},c=[{value:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",id:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",children:[],level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5"},"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5"),(0,o.kt)("p",null,"\u65e0\u8bba\u4f7f\u7528RDD/WriteClient API\u8fd8\u662f\u6570\u636e\u6e90\uff0c\u4ee5\u4e0b\u4fe1\u606f\u90fd\u6709\u52a9\u4e8e\u914d\u7f6e\u5bf9\u4e91\u5b58\u50a8\u7684\u8bbf\u95ee\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cn/docs/s3_hoodie"},"AWS S3")," ",(0,o.kt)("br",null),"\nS3\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cn/docs/gcs_hoodie"},"Google Cloud Storage")," ",(0,o.kt)("br",null),"\nGCS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cn/docs/oss_hoodie"},"Alibaba Cloud OSS")," ",(0,o.kt)("br",null),"\n\u963f\u91cc\u4e91\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cn/docs/azure_hoodie"},"Microsoft Azure")," ",(0,o.kt)("br",null),"\nAzure\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cn/docs/cos_hoodie"},"Tencent Cloud Object Storage")," ",(0,o.kt)("br",null),"\nCOS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cn/docs/ibm_cos_hoodie"},"IBM Cloud Object Storage")," ",(0,o.kt)("br",null),"\nIBM Cloud Object Storage\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"bos_hoodie"},"Baidu Cloud Object Storage")," ",(0,o.kt)("br",null),"\n\u767e\u5ea6BOS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002")))}d.isMDXComponent=!0}}]);