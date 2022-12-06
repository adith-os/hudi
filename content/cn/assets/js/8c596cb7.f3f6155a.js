"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[19178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59465:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},i=void 0,s={unversionedId:"structure",id:"version-0.12.1/structure",title:"Structure",description:"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (HDFS or cloud stores) and provides three types of queries.",source:"@site/versioned_docs/version-0.12.1/structure.md",sourceDirName:".",slug:"/structure",permalink:"/cn/docs/structure",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/structure.md",tags:[],version:"0.12.1",frontMatter:{title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:"2019-12-30T19:59:57.000Z"}},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (",(0,n.kt)("a",{parentName:"p",href:"http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign"},"HDFS")," or cloud stores) and provides three types of queries."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Read Optimized query")," - Provides excellent query performance on pure columnar storage, much like plain ",(0,n.kt)("a",{parentName:"li",href:"https://parquet.apache.org/"},"Parquet")," tables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Incremental query")," - Provides a change stream out of the dataset to feed downstream jobs/ETLs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Snapshot query")," - Provides queries on real-time data, using a combination of columnar & row based storage (e.g Parquet + ",(0,n.kt)("a",{parentName:"li",href:"http://avro.apache.org/docs/current/mr"},"Avro"),")")),(0,n.kt)("figure",null,(0,n.kt)("img",{className:"docimage",src:r(65696).Z,alt:"hudi_intro_1.png"})),(0,n.kt)("p",null,"By carefully managing how data is laid out in storage & how it\u2019s exposed to queries, Hudi is able to power a rich data ecosystem where external sources can be ingested in near real-time and made available for interactive SQL Engines like ",(0,n.kt)("a",{parentName:"p",href:"https://prestodb.io"},"PrestoDB")," & ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/sql/"},"Spark"),", while at the same time capable of being consumed incrementally from processing/ETL frameworks like ",(0,n.kt)("a",{parentName:"p",href:"https://hive.apache.org/"},"Hive")," & ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/"},"Spark")," to build derived (Hudi) tables."),(0,n.kt)("p",null,"Hudi broadly consists of a self contained Spark library to build tables and integrations with existing query engines for data access. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-start-guide"},"quickstart")," for a demo."))}u.isMDXComponent=!0},65696:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hudi_intro_1-802c5b502d13c9b2a25b8e65c8cf27fd.png"}}]);