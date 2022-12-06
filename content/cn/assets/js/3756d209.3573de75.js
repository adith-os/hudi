"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(c,".").concat(d)]||u[d]||y[d]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Apache Hudi Key Generators",excerpt:"Different key generators available with Apache Hudi",author:"shivnarayan",category:"blog",tags:["blog","key-generators","apache hudi"]},o=void 0,l={permalink:"/cn/blog/2021/02/13/hudi-key-generators",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-02-13-hudi-key-generators.md",source:"@site/blog/2021-02-13-hudi-key-generators.md",title:"Apache Hudi Key Generators",description:"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where",date:"2021-02-13T00:00:00.000Z",formattedDate:"February 13, 2021",tags:[{label:"blog",permalink:"/cn/blog/tags/blog"},{label:"key-generators",permalink:"/cn/blog/tags/key-generators"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:5.855,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Time travel operations in Hopsworks Feature Store",permalink:"/cn/blog/2021/02/24/Time-travel-operations-in-Hopsworks-Feature-Store"},nextItem:{title:"Optimize Data lake layout using Clustering in Apache Hudi",permalink:"/cn/blog/2021/01/27/hudi-clustering-intro"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where\nthe record belongs to. Using primary keys, Hudi can impose a) partition level uniqueness integrity constraint\nb) enable fast updates and deletes on records. One should choose the partitioning scheme wisely as it could be a\ndetermining factor for your ingestion and query latency."))}u.isMDXComponent=!0}}]);