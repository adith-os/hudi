"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[57866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,y=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},26221:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},i=void 0,l={unversionedId:"syncing_aws_glue_data_catalog",id:"version-0.12.1/syncing_aws_glue_data_catalog",title:"AWS Glue Data Catalog",description:"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on HiveSyncTool",source:"@site/versioned_docs/version-0.12.1/syncing_aws_glue_data_catalog.md",sourceDirName:".",slug:"/syncing_aws_glue_data_catalog",permalink:"/cn/docs/syncing_aws_glue_data_catalog",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/syncing_aws_glue_data_catalog.md",tags:[],version:"0.12.1",frontMatter:{title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},sidebar:"docs",previous:{title:"Flink Setup",permalink:"/cn/docs/flink_configuration"},next:{title:"DataHub",permalink:"/cn/docs/syncing_datahub"}},c=[{value:"Configurations",id:"configurations",children:[],level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on ",(0,r.kt)("inlineCode",{parentName:"p"},"HiveSyncTool"),"\n, ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool")," makes use of all the configurations that are taken by ",(0,r.kt)("inlineCode",{parentName:"p"},"HiveSyncTool"),"\nand send them to AWS Glue."),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"There is no additional configuration for using ",(0,r.kt)("inlineCode",{parentName:"p"},"AwsGlueCatalogSyncTool"),"; you just need to set it as one of the sync tool\nclasses for ",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," and everything configured as shown in ",(0,r.kt)("a",{parentName:"p",href:"syncing_metastore"},"Sync to Hive Metastore")," will\nbe passed along."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--sync-tool-classes org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool\n")))}u.isMDXComponent=!0}}]);