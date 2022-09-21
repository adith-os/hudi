"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[63993],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>c});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function s(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?s(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),d=function(e){var i=n.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},u=function(e){var i=d(e.components);return n.createElement(o.Provider,{value:i},e.children)},f={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,g=p["".concat(o,".").concat(c)]||p[c]||f[c]||s;return t?n.createElement(g,l(l({ref:i},u),{},{components:t})):n.createElement(g,l({ref:i},u))}));function c(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=p;var r={};for(var o in i)hasOwnProperty.call(i,o)&&(r[o]=i[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<s;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34012:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const s={title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",excerpt:"Maintaining well-sized files can improve query performance significantly",author:"shivnarayan",category:"blog",image:"/assets/images/blog/2021-03-01-hudi-file-sizing.png",tags:["design","file-sizing","apache hudi"]},l=void 0,r={permalink:"/cn/blog/2021/03/01/hudi-file-sizing",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-03-01-hudi-file-sizing.md",source:"@site/blog/2021-03-01-hudi-file-sizing.md",title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",description:"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.",date:"2021-03-01T00:00:00.000Z",formattedDate:"March 1, 2021",tags:[{label:"design",permalink:"/cn/blog/tags/design"},{label:"file-sizing",permalink:"/cn/blog/tags/file-sizing"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:4.33,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",permalink:"/cn/blog/2021/03/04/Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi"},nextItem:{title:"Data Lakehouse: Building the Next Generation of Data Lakes using Apache Hudi",permalink:"/cn/blog/2021/03/01/Data-Lakehouse-Building-the-Next-Generation-of-Data-Lakes-using-Apache-Hudi"}},o={authorsImageUrls:[void 0]},d=[{value:"During Write vs After Write",id:"during-write-vs-after-write",children:[{value:"Configs",id:"configs",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],u={toc:d};function f(e){let{components:i,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.\nOne such key feature that hudi provides is self-managing file sizing so that users don\u2019t need to worry about\nmanual table maintenance. Having a lot of small files will make it harder to achieve good query performance, due to query engines\nhaving to open/read/close files way too many times, to plan and execute queries. But for streaming data lake use-cases,\ninherently ingests are going to end up having smaller volume of writes, which might result in lot of small files if no special handling is done."),(0,a.kt)("h2",{id:"during-write-vs-after-write"},"During Write vs After Write"),(0,a.kt)("p",null,"Common approaches to writing very small files and then later stitching them together solve for system scalability issues posed\nby small files but might violate query SLA's by exposing small files to them. In fact, you can easily do so on a Hudi table,\nby running a clustering operation, as detailed in a ",(0,a.kt)("a",{parentName:"p",href:"/blog/2021/01/27/hudi-clustering-intro"},"previous blog"),". "),(0,a.kt)("p",null,"In this blog, we discuss file sizing optimizations in Hudi, during the initial write time, so we don't have to effectively\nre-write all data again, just for file sizing. If you want to have both (a) self managed file sizing and\n(b) Avoid exposing small files to queries, automatic file sizing feature saves the day."),(0,a.kt)("p",null,"Hudi has the ability to maintain a configured target file size, when performing inserts/upsert operations.\n(Note: bulk_insert operation does not provide this functionality and is designed as a simpler replacement for\nnormal ",(0,a.kt)("inlineCode",{parentName:"p"},"spark.write.parquet"),")."),(0,a.kt)("h3",{id:"configs"},"Configs"),(0,a.kt)("p",null,"For illustration purposes, we are going to consider only COPY_ON_WRITE table."),(0,a.kt)("p",null,"Configs of interest before we dive into the algorithm:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#limitFileSize"},"Max file size"),": Max size for a given data file. Hudi will try to maintain file sizes to this configured value ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#compactionSmallFileSize"},"Soft file limit"),": Max file size below which a given data file is considered to a small file ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#insertSplitSize"},"Insert split size"),": Number of inserts grouped for a single partition. This value should match\nthe number of records in a single file (you can determine based on max file size and per record size)")),(0,a.kt)("p",null,"For instance, if your first config value is 120MB and 2nd config value is set to 100MB, any file whose size is < 100MB\nwould be considered a small file."),(0,a.kt)("p",null,"If you wish to turn off this feature, set the config value for soft file limit to 0."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Let\u2019s say this is the layout of data files for a given partition."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Initial layout",src:t(82998).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"Figure: Initial data file sizes for a given partition of interest")),(0,a.kt)("p",null,"Let\u2019s assume the configured values for max file size and small file size limit are 120MB and 100MB. File_1\u2019s current\nsize is 40MB, File_2\u2019s size is 80MB, File_3\u2019s size is 90MB, File_4\u2019s size is 130MB and File_5\u2019s size is 105MB. Let\u2019s see\nwhat happens when a new write happens. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Assigning updates to files. In this step, We look up the index to find the tagged location and records are\nassigned to respective files. Note that we assume updates are only going to increase the file size and that would simply result\nin a much bigger file. When updates lower the file size (by say, nulling out lot of fields), then a subsequent write will deem\nit a small file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:"),"  Determine small files for each partition path. The soft file limit config value will be leveraged here\nto determine eligible small files. In our example, given the config value is set to 100MB, the small files are File_1(40MB)\nand File_2(80MB) and file_3\u2019s (90MB)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Once small files are determined, incoming inserts are assigned to them so that they reach their max capacity of\n120MB. File_1 will be ingested with 80MB worth of inserts, file_2 will be ingested with 40MB worth of inserts and\nFile_3 will be ingested with 30MB worth of inserts."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bin packing small files",src:t(45651).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"Figure: Incoming records are bin packed to existing small files")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Once all small files are bin packed to its max capacity and if there are pending inserts unassigned, new file\ngroups/data files are created and inserts are assigned to them. Number of records per new data file is determined from insert split\nsize config. Assuming the insert split size is configured to 120k records, if there are 300k remaining records, 3 new\nfiles will be created in which 2 of them (File_6 and File_7) will be filled with 120k records and the last one (File_8)\nwill be filled with 60k records (assuming each record is 1000 bytes). In future ingestions, 3rd new file will be\nconsidered as a small file to be packed with more data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Assigning to new files",src:t(2374).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"Figure: Remaining records are assigned to new files")),(0,a.kt)("p",null,"Hudi leverages mechanisms such as custom partitioning for optimized record distribution to different files, executing\nthe algorithm above. After this round of ingestion is complete, all files except File_8 are nicely sized to the optimum size.\nThis process is followed during every ingestion to ensure there are no small files in your Hudi tables. "),(0,a.kt)("p",null,"Hopefully the blog gave you an overview into how hudi manages small files and assists in boosting your query performance."))}f.isMDXComponent=!0},2374:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/adding_new_files-13e5a1cf0c213c07a412b09a29be4e3d.png"},45651:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/bin_packing_existing_data_files-021f5b531f048bfd9cc1230f93c22a71.png"},82998:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/initial_layout-ba5e4c454e6d2328f74dfc5e9fa2966a.png"}}]);