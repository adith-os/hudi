"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[42783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52281:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=n(87462),r=(n(67294),n(3905));const i={version:"0.6.0",title:"COS Filesystem",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:new Date("2020-04-21T21:38:24.000Z")},s=void 0,c={unversionedId:"cos_hoodie",id:"version-0.6.0/cos_hoodie",title:"COS Filesystem",description:"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS.",source:"@site/versioned_docs/version-0.6.0/cos_hoodie.md",sourceDirName:".",slug:"/cos_hoodie",permalink:"/docs/0.6.0/cos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/cos_hoodie.md",tags:[],version:"0.6.0",frontMatter:{version:"0.6.0",title:"COS Filesystem",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:"2020-04-21T21:38:24.000Z"},sidebar:"version-0.6.0/docs",previous:{title:"Azure Filesystem",permalink:"/docs/0.6.0/azure_hoodie"},next:{title:"Docker Demo",permalink:"/docs/0.6.0/docker_demo"}},a=[{value:"Tencent Cloud COS configs",id:"tencent-cloud-cos-configs",children:[{value:"Tencent Cloud COS Credentials",id:"tencent-cloud-cos-credentials",children:[],level:3},{value:"Tencent Cloud COS Libs",id:"tencent-cloud-cos-libs",children:[],level:3}],level:2}],l={toc:a};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS."),(0,r.kt)("h2",{id:"tencent-cloud-cos-configs"},"Tencent Cloud COS configs"),(0,r.kt)("p",null,"There are two configurations required for Hudi-COS compatibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding Tencent Cloud COS Credentials for Hudi"),(0,r.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,r.kt)("h3",{id:"tencent-cloud-cos-credentials"},"Tencent Cloud COS Credentials"),(0,r.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your COS bucket name, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretId")," with your COS secret Id, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretKey")," with your COS key. Hudi should be able to read/write from the bucket."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <property>\n        <name>fs.defaultFS</name>\n        <value>cosn://bucketname</value>\n        <description>COS bucket name</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretId</name>\n        <value>cos-secretId</value>\n        <description>Tencent Cloud Secret Id</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretKey</name>\n        <value>cos-secretkey</value>\n        <description>Tencent Cloud Secret Key</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.region</name>\n        <value>ap-region</value>\n        <description>The region where the bucket is located.</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.endpoint_suffix</name>\n        <value>cos.endpoint.suffix</value>\n        <description>\n          COS endpoint to connect to. \n          For public cloud users, it is recommended not to set this option, and only the correct area field is required.\n        </description>\n    </property>\n\n    <property>\n        <name>fs.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosFileSystem</value>\n        <description>The implementation class of the CosN Filesystem.</description>\n    </property>\n\n    <property>\n        <name>fs.AbstractFileSystem.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosN</value>\n        <description>The implementation class of the CosN AbstractFileSystem.</description>\n    </property>\n\n")),(0,r.kt)("h3",{id:"tencent-cloud-cos-libs"},"Tencent Cloud COS Libs"),(0,r.kt)("p",null,"COS hadoop libraries to add to our classpath"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-cos:2.8.5")))}p.isMDXComponent=!0}}]);