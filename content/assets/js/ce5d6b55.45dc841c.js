"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Monitor Hudi metrics with Datadog",excerpt:"Introducing the feature of reporting Hudi metrics via Datadog HTTP API",author:"rxu",category:"blog",tags:["how-to","metrics","apache hudi"]},i=void 0,c={permalink:"/blog/2020/05/28/monitoring-hudi-metrics-with-datadog",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-05-28-monitoring-hudi-metrics-with-datadog.md",source:"@site/blog/2020-05-28-monitoring-hudi-metrics-with-datadog.md",title:"Monitor Hudi metrics with Datadog",description:"Availability",date:"2020-05-28T00:00:00.000Z",formattedDate:"May 28, 2020",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"metrics",permalink:"/blog/tags/metrics"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:1.415,truncated:!0,authors:[{name:"rxu"}],prevItem:{title:"The Apache Software Foundation Announces Apache\xae Hudi\u2122 as a Top-Level Project",permalink:"/blog/2020/06/04/The-Apache-Software-Foundation-Announces-Apache-Hudi-as-a-Top-Level-Project"},nextItem:{title:"Apache Hudi Support on Apache Zeppelin",permalink:"/blog/2020/04/27/apache-hudi-apache-zepplin"}},l={authorsImageUrls:[void 0]},p=[{value:"Availability",id:"availability",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"0.6.0 (unreleased)")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"Datadog")," is a popular monitoring service. In the upcoming ",(0,a.kt)("inlineCode",{parentName:"p"},"0.6.0")," release of Apache Hudi, we will introduce the feature of reporting Hudi metrics via Datadog HTTP API, in addition to the current reporter types: Graphite and JMX."))}d.isMDXComponent=!0}}]);