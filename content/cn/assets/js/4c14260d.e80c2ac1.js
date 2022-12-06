"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[83777],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return r?i.createElement(f,o(o({ref:t},c),{},{components:r})):i.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},41198:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(87462),a=(r(67294),r(3905));const n={title:"Release 0.8.0",sidebar_position:9,layout:"releases",toc:!0,last_modified_at:new Date("2020-05-28T15:40:00.000Z")},o="[Release 0.8.0](https://github.com/apache/hudi/releases/tag/release-0.8.0) ([docs](/docs/quick-start-guide))",l={unversionedId:"release-0.8.0",id:"release-0.8.0",title:"Release 0.8.0",description:"Migration Guide for this release",source:"@site/releases/release-0.8.0.md",sourceDirName:".",slug:"/release-0.8.0",permalink:"/cn/releases/release-0.8.0",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Release 0.8.0",sidebar_position:9,layout:"releases",toc:!0,last_modified_at:"2020-05-28T15:40:00.000Z"},sidebar:"releases",previous:{title:"Release 0.9.0",permalink:"/cn/releases/release-0.9.0"},next:{title:"Release 0.7.0",permalink:"/cn/releases/release-0.7.0"}},s=[{value:"Migration Guide for this release",id:"migration-guide-for-this-release",children:[],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Flink Integration",id:"flink-integration",children:[],level:3},{value:"Parallel Writers Support",id:"parallel-writers-support",children:[],level:3},{value:"Writer side improvements",id:"writer-side-improvements",children:[],level:3},{value:"Query side improvements",id:"query-side-improvements",children:[],level:3},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:3}],level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-080-docs"},(0,a.kt)("a",{parentName:"h1",href:"https://github.com/apache/hudi/releases/tag/release-0.8.0"},"Release 0.8.0")," (",(0,a.kt)("a",{parentName:"h1",href:"/docs/quick-start-guide"},"docs"),")"),(0,a.kt)("h2",{id:"migration-guide-for-this-release"},"Migration Guide for this release"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If migrating from release older than 0.5.3, please also check the upgrade instructions for each subsequent release below."),(0,a.kt)("li",{parentName:"ul"},"Specifically check upgrade instructions for 0.6.0. This release does not introduce any new table versions."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"HoodieRecordPayload")," interface deprecated existing methods, in favor of new ones that also lets us pass properties at runtime. Users are\nencouraged to migrate out of the deprecated methods, since they will be removed in 0.9.0."),(0,a.kt)("li",{parentName:"ul"},'"auto.offset.reset" is a config used for Kafka sources in deltastreamer utility to reset offset to be consumed from such\nsources. We had a bug around this config with 0.8.0 which has been fixed in 0.9.0. Please use "auto.reset.offsets" instead.\nPossible values for this config are "earliest" and "latest"(default). So, would recommend using "auto.reset.offsets" only in\n0.8.0 and for all other releases, you can use "auto.offset.reset".')),(0,a.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,a.kt)("h3",{id:"flink-integration"},"Flink Integration"),(0,a.kt)("p",null,"Since the initial support for the Hudi Flink Writer in the 0.7.0 release, the Hudi community made great progress on improving the Flink/Hudi integration,\nincluding redesigning the Flink writer pipeline with better performance and scalability, state-backed indexing with bootstrap support,\nFlink writer for MOR table, batch reader for COW&MOR table, streaming reader for MOR table, and Flink SQL connector for both source and sink.\nIn the 0.8.0 release, user is able to use all those features with Flink 1.11+."),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+24%3A+Hoodie+Flink+Writer+Proposal"},"RFC-24"),"\nfor more implementation details for the Flink writer and follow this ",(0,a.kt)("a",{parentName:"p",href:"/docs/flink-quick-start-guide"},"page"),"\nto get started with Flink!"),(0,a.kt)("h3",{id:"parallel-writers-support"},"Parallel Writers Support"),(0,a.kt)("p",null,"As many users requested, now Hudi supports multiple ingestion writers to the same Hudi Table with optimistic concurrency control.\nHudi supports file level OCC, i.e., for any 2 commits (or writers) happening to the same table, if they do not have writes to overlapping files being changed,\nboth writers are allowed to succeed. This feature is currently experimental and requires either Zookeeper or HiveMetastore to acquire locks."),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+22+%3A+Snapshot+Isolation+using+Optimistic+Concurrency+Control+for+multi-writers"},"RFC-22"),"\nfor more implementation details and follow this ",(0,a.kt)("a",{parentName:"p",href:"/docs/concurrency_control"},"page")," to get started with concurrency control!"),(0,a.kt)("h3",{id:"writer-side-improvements"},"Writer side improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"InsertOverwrite Support for Flink writer client."),(0,a.kt)("li",{parentName:"ul"},"Support CopyOnWriteTable in Java writer client.")),(0,a.kt)("h3",{id:"query-side-improvements"},"Query side improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support Spark Structured Streaming read from Hudi table."),(0,a.kt)("li",{parentName:"ul"},"Performance improvement of Metadata table."),(0,a.kt)("li",{parentName:"ul"},"Performance improvement of Clustering.")),(0,a.kt)("h3",{id:"raw-release-notes"},"Raw Release Notes"),(0,a.kt)("p",null,"The raw release notes are available ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12349423"},"here")))}c.isMDXComponent=!0}}]);