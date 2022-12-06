"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9137],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(i),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return i?a.createElement(m,o(o({ref:t},u),{},{components:i})):a.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},23794:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const r={title:"JuiceFS",keywords:["hudi","hive","juicefs","jfs","spark","flink"],summary:"In this page, we go over how to configure Hudi with JuiceFS file system.",last_modified_at:new Date("2021-10-12T02:50:00.000Z")},o=void 0,s={unversionedId:"jfs_hoodie",id:"version-0.12.1/jfs_hoodie",title:"JuiceFS",description:"In this page, we explain how to use Hudi with JuiceFS.",source:"@site/versioned_docs/version-0.12.1/jfs_hoodie.md",sourceDirName:".",slug:"/jfs_hoodie",permalink:"/docs/jfs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/jfs_hoodie.md",tags:[],version:"0.12.1",frontMatter:{title:"JuiceFS",keywords:["hudi","hive","juicefs","jfs","spark","flink"],summary:"In this page, we go over how to configure Hudi with JuiceFS file system.",last_modified_at:"2021-10-12T02:50:00.000Z"},sidebar:"docs",previous:{title:"Baidu Cloud",permalink:"/docs/bos_hoodie"},next:{title:"Use Cases",permalink:"/docs/use_cases"}},c=[{value:"JuiceFS configs",id:"juicefs-configs",children:[{value:"Creating JuiceFS file system",id:"creating-juicefs-file-system",children:[{value:"Download JuiceFS client",id:"download-juicefs-client",children:[],level:4},{value:"Install JuiceFS client",id:"install-juicefs-client",children:[],level:4},{value:"Format a JuiceFS file system",id:"format-a-juicefs-file-system",children:[],level:4}],level:3},{value:"Adding JuiceFS configuration for Hudi",id:"adding-juicefs-configuration-for-hudi",children:[],level:3},{value:"Adding JuiceFS Hadoop Java SDK",id:"adding-juicefs-hadoop-java-sdk",children:[],level:3}],level:2}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this page, we explain how to use Hudi with JuiceFS."),(0,n.kt)("h2",{id:"juicefs-configs"},"JuiceFS configs"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs"},"JuiceFS")," is a high-performance distributed file system. Any data stored into JuiceFS, the data itself will be persisted in object storage (e.g. Amazon S3), and the metadata corresponding to the data can be persisted in various database engines such as Redis, MySQL, and TiKV according to the needs of the scene."),(0,n.kt)("p",null,"There are three configurations required for Hudi-JuiceFS compatibility:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Creating JuiceFS file system"),(0,n.kt)("li",{parentName:"ol"},"Adding JuiceFS configuration for Hudi"),(0,n.kt)("li",{parentName:"ol"},"Adding required JAR to ",(0,n.kt)("inlineCode",{parentName:"li"},"classpath"))),(0,n.kt)("h3",{id:"creating-juicefs-file-system"},"Creating JuiceFS file system"),(0,n.kt)("p",null,"JuiceFS supports multiple ",(0,n.kt)("a",{parentName:"p",href:"https://juicefs.com/docs/community/databases_for_metadata"},"metadata engines")," such as Redis, MySQL, SQLite, and TiKV. And supports almost all ",(0,n.kt)("a",{parentName:"p",href:"https://juicefs.com/docs/community/how_to_setup_object_storage#supported-object-storage"},"object storage")," as data storage, e.g. Amazon S3, Google Cloud Storage, Azure Blob Storage."),(0,n.kt)("p",null,'The following example uses Redis as "Metadata Engine" and Amazon S3 as "Data Storage" in Linux environment.'),(0,n.kt)("h4",{id:"download-juicefs-client"},"Download JuiceFS client"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ JFS_LATEST_TAG=$(curl -s https://api.github.com/repos/juicedata/juicefs/releases/latest | grep 'tag_name' | cut -d '\"' -f 4 | tr -d 'v')\n$ wget \"https://github.com/juicedata/juicefs/releases/download/v${JFS_LATEST_TAG}/juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz\"\n")),(0,n.kt)("h4",{id:"install-juicefs-client"},"Install JuiceFS client"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ mkdir juice && tar -zxvf "juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz" -C juice\n$ sudo install juice/juicefs /usr/local/bin\n')),(0,n.kt)("h4",{id:"format-a-juicefs-file-system"},"Format a JuiceFS file system"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ juicefs format \\\n    --storage s3 \\\n    --bucket https://<bucket>.s3.<region>.amazonaws.com \\\n    --access-key <your-access-key-id> \\\n    --secret-key <your-access-key-secret> \\\n    redis://:<password>@<redis-host>:6379/1 \\\n    myjfs\n")),(0,n.kt)("p",null,"For more information, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://juicefs.com/docs/community/quick_start_guide"},'"JuiceFS Quick Start Guide"'),"."),(0,n.kt)("h3",{id:"adding-juicefs-configuration-for-hudi"},"Adding JuiceFS configuration for Hudi"),(0,n.kt)("p",null,"Add the required configurations in your ",(0,n.kt)("inlineCode",{parentName:"p"},"core-site.xml")," from where Hudi can fetch them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<property>\n    <name>fs.defaultFS</name>\n    <value>jfs://myjfs</value>\n    <description>Optional, you can also specify full path "jfs://myjfs/path-to-dir" with location to use JuiceFS</description>\n</property>\n<property>\n    <name>fs.jfs.impl</name>\n    <value>io.juicefs.JuiceFileSystem</value>\n</property>\n<property>\n    <name>fs.AbstractFileSystem.jfs.impl</name>\n    <value>io.juicefs.JuiceFS</value>\n</property>\n<property>\n    <name>juicefs.meta</name>\n    <value>redis://:<password>@<redis-host>:6379/1</value>\n</property>\n<property>\n    <name>juicefs.cache-dir</name>\n    <value>/path-to-your-disk</value>\n</property>\n<property>\n    <name>juicefs.cache-size</name>\n    <value>1024</value>\n</property>\n<property>\n    <name>juicefs.access-log</name>\n    <value>/tmp/juicefs.access.log</value>\n</property>\n')),(0,n.kt)("p",null,"You can visit ",(0,n.kt)("a",{parentName:"p",href:"https://juicefs.com/docs/community/hadoop_java_sdk#client-configurations"},"here")," for more configuration information."),(0,n.kt)("h3",{id:"adding-juicefs-hadoop-java-sdk"},"Adding JuiceFS Hadoop Java SDK"),(0,n.kt)("p",null,"You can download latest JuiceFS Hadoop Java SDK from ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/juicedata/juicefs/releases/latest"},"here")," (download the file called like ",(0,n.kt)("inlineCode",{parentName:"p"},"juicefs-hadoop-X.Y.Z-linux-amd64.jar"),"), and place it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"classpath"),". You can also ",(0,n.kt)("a",{parentName:"p",href:"https://juicefs.com/docs/community/hadoop_java_sdk#client-compilation"},"compile")," it by yourself."),(0,n.kt)("p",null,"For example, if you use Hudi in Spark, please put the JAR in ",(0,n.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/jars"),"."))}u.isMDXComponent=!0}}]);