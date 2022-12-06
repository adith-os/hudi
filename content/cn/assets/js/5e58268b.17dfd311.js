"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3958],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(d,s(s({ref:r},m),{},{components:t})):n.createElement(d,s({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25759:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={title:"Transformers",toc:!0},s=void 0,i={unversionedId:"transforms",id:"version-0.10.0/transforms",title:"Transformers",description:"Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.",source:"@site/versioned_docs/version-0.10.0/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/cn/docs/0.10.0/transforms",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/transforms.md",tags:[],version:"0.10.0",frontMatter:{title:"Transformers",toc:!0},sidebar:"version-0.10.0/docs",previous:{title:"Cleaning",permalink:"/cn/docs/0.10.0/hoodie_cleaner"},next:{title:"Marker Mechanism",permalink:"/cn/docs/0.10.0/markers"}},l=[{value:"SQL Query Transformer",id:"sql-query-transformer",children:[],level:3},{value:"SQL File Transformer",id:"sql-file-transformer",children:[],level:3},{value:"Flattening Transformer",id:"flattening-transformer",children:[],level:3},{value:"Chained Transformer",id:"chained-transformer",children:[],level:3},{value:"AWS DMS Transformer",id:"aws-dms-transformer",children:[],level:3},{value:"Custom Transformer Implementation",id:"custom-transformer-implementation",children:[],level:3}],c={toc:l};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.\nThere are several ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform"},"out-of-the-box"),"\ntransformers available and you can build your own custom transformer class as well."),(0,a.kt)("h3",{id:"sql-query-transformer"},"SQL Query Transformer"),(0,a.kt)("p",null,"You can pass a SQL Query to be executed during write."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.SqlQueryBasedTransformer\n--hoodie-conf hoodie.deltastreamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n")),(0,a.kt)("h3",{id:"sql-file-transformer"},"SQL File Transformer"),(0,a.kt)("p",null,"You can specify a File with a SQL script to be executed during write. The SQL file is configured with this hoodie property:\nhoodie.deltastreamer.transformer.sql.file"),(0,a.kt)("p",null,'The query should reference the source as a table named "\\<SRC',">",'"'),(0,a.kt)("p",null,"The final sql statement result is used as the write payload."),(0,a.kt)("p",null,"Example Spark SQL Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CACHE TABLE tmp_personal_trips AS\nSELECT * FROM <SRC> WHERE trip_type='personal_trips';\n\nSELECT * FROM tmp_personal_trips;\n")),(0,a.kt)("h3",{id:"flattening-transformer"},"Flattening Transformer"),(0,a.kt)("p",null,"This transformer can flatten nested objects. It flattens the nested fields in the incoming records by prefixing\ninner-fields with outer-field and _ in a nested fashion. Currently flattening of arrays is not supported."),(0,a.kt)("p",null,"An example schema may look something like the below where name is a nested field of StructType in the original source"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"age as intColumn,address as stringColumn,name.first as name_first,name.last as name_last, name.middle as name_middle\n")),(0,a.kt)("p",null,"Set the config as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer\n")),(0,a.kt)("h3",{id:"chained-transformer"},"Chained Transformer"),(0,a.kt)("p",null,"If you wish to use multiple transformers together, you can use the Chained transformers to pass multiple to be executed sequentially."),(0,a.kt)("p",null,"Example below first flattens the incoming records and then does sql projection based on the query specified:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer,org.apache.hudi.utilities.transform.SqlQueryBasedTransformer   \n--hoodie-conf hoodie.deltastreamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n")),(0,a.kt)("h3",{id:"aws-dms-transformer"},"AWS DMS Transformer"),(0,a.kt)("p",null,"This transformer is specific for AWS DMS data. It adds ",(0,a.kt)("inlineCode",{parentName:"p"},"Op")," field with value ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," if the field is not present."),(0,a.kt)("p",null,"Set the config as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.AWSDmsTransformer\n")),(0,a.kt)("h3",{id:"custom-transformer-implementation"},"Custom Transformer Implementation"),(0,a.kt)("p",null,"You can write your own custom transformer by extending ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform"},"this class")))}m.isMDXComponent=!0}}]);