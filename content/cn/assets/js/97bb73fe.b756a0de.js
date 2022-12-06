"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[62888],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(o),b=r,m=c["".concat(d,".").concat(b)]||c[b]||p[b]||i;return o?n.createElement(m,a(a({ref:t},l),{},{components:o})):n.createElement(m,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},86174:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const i={title:"Baidu Cloud",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with bos filesystem.",last_modified_at:new Date("2021-06-09T21:38:24.000Z")},a=void 0,s={unversionedId:"bos_hoodie",id:"version-0.11.1/bos_hoodie",title:"Baidu Cloud",description:"In this page, we explain how to get your Hudi job to store into Baidu BOS.",source:"@site/versioned_docs/version-0.11.1/bos_hoodie.md",sourceDirName:".",slug:"/bos_hoodie",permalink:"/cn/docs/0.11.1/bos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/bos_hoodie.md",tags:[],version:"0.11.1",frontMatter:{title:"Baidu Cloud",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with bos filesystem.",last_modified_at:"2021-06-09T21:38:24.000Z"},sidebar:"docs",previous:{title:"IBM Cloud",permalink:"/cn/docs/0.11.1/ibm_cos_hoodie"},next:{title:"JuiceFS",permalink:"/cn/docs/0.11.1/jfs_hoodie"}},d=[{value:"Baidu BOS configs",id:"baidu-bos-configs",children:[{value:"Baidu BOS Credentials",id:"baidu-bos-credentials",children:[],level:3},{value:"Baidu bos Libs",id:"baidu-bos-libs",children:[],level:3}],level:2}],u={toc:d};function l(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this page, we explain how to get your Hudi job to store into Baidu BOS."),(0,r.kt)("h2",{id:"baidu-bos-configs"},"Baidu BOS configs"),(0,r.kt)("p",null,"There are two configurations required for Hudi-BOS compatibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding Baidu BOS Credentials for Hudi"),(0,r.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,r.kt)("h3",{id:"baidu-bos-credentials"},"Baidu BOS Credentials"),(0,r.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your BOS bucket name, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.bos.endpoint")," with your bos endpoint, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.bos.access.key")," with your bos key, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.bos.secret.access.key")," with your bos secret key. Hudi should be able to read/write from the bucket."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>fs.defaultFS</name>\n  <value>bos://bucketname/</value>\n</property>\n\n<property>\n  <name>fs.bos.endpoint</name>\n  <value>bos-endpoint-address</value>\n  <description>Baidu bos endpoint to connect to,for example : http://bj.bcebos.com</description>\n</property>\n\n<property>\n  <name>fs.bos.access.key</name>\n  <value>bos-key</value>\n  <description>Baidu access key</description>\n</property>\n\n<property>\n  <name>fs.bos.secret.access.key</name>\n  <value>bos-secret-key</value>\n  <description>Baidu secret key.</description>\n</property>\n\n<property>\n  <name>fs.bos.impl</name>\n  <value>org.apache.hadoop.fs.bos.BaiduBosFileSystem</value>\n</property>\n")),(0,r.kt)("h3",{id:"baidu-bos-libs"},"Baidu bos Libs"),(0,r.kt)("p",null,"Baidu hadoop libraries jars to add to our classpath"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"com.baidubce:bce-java-sdk:0.10.165"),(0,r.kt)("li",{parentName:"ul"},"bos-hdfs-sdk-1.0.2-community.jar ")),(0,r.kt)("p",null,"You can  download the bos-hdfs-sdk jar from ",(0,r.kt)("a",{parentName:"p",href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.2-community.jar.zip"},"here")," , and then unzip it."))}l.isMDXComponent=!0}}]);