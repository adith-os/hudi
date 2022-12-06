"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73248:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},o=void 0,l={unversionedId:"metadata",id:"version-0.12.1/metadata",title:"Metadata Table",description:"Motivation for a Metadata Table",source:"@site/versioned_docs/version-0.12.1/metadata.md",sourceDirName:".",slug:"/metadata",permalink:"/docs/metadata",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/metadata.md",tags:[],version:"0.12.1",frontMatter:{title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},sidebar:"docs",previous:{title:"File Layouts",permalink:"/docs/file_layouts"},next:{title:"Write Operations",permalink:"/docs/write_operations"}},s=[{value:"Motivation for a Metadata Table",id:"motivation-for-a-metadata-table",children:[{value:"Some numbers from a study:",id:"some-numbers-from-a-study",children:[],level:3},{value:"Supporting Multi-Modal Index",id:"supporting-multi-modal-index",children:[],level:3}],level:2},{value:"Enable Hudi Metadata Table and Multi-Modal Index",id:"enable-hudi-metadata-table-and-multi-modal-index",children:[],level:2},{value:"Deployment considerations",id:"deployment-considerations",children:[{value:"Deployment Model A: Single writer with inline table services",id:"deployment-model-a-single-writer-with-inline-table-services",children:[],level:3},{value:"Deployment Model B: Single writer with async table services",id:"deployment-model-b-single-writer-with-async-table-services",children:[],level:3},{value:"Deployment Model C: Multi-writer",id:"deployment-model-c-multi-writer",children:[],level:3}],level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"motivation-for-a-metadata-table"},"Motivation for a Metadata Table"),(0,i.kt)("p",null,'The Apache Hudi Metadata Table can significantly improve read/write performance of your queries. The main purpose of the\nMetadata Table is to eliminate the requirement for the "list files" operation.'),(0,i.kt)("p",null,"When reading and writing data, file listing operations are performed to get the current view of the file system.\nWhen data sets are large, listing all the files may be a performance bottleneck, but more importantly in the case of cloud storage systems\nlike AWS S3, the large number of file listing requests sometimes causes throttling due to certain request limits.\nThe Metadata Table will instead proactively maintain the list of files and remove the need for recursive file listing operations"),(0,i.kt)("h3",{id:"some-numbers-from-a-study"},"Some numbers from a study:"),(0,i.kt)("p",null,"Running a TPCDS benchmark the p50 list latencies for a single folder scales ~linearly with the amount of files/objects:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number of files/objects"),(0,i.kt)("th",{parentName:"tr",align:null},"100"),(0,i.kt)("th",{parentName:"tr",align:null},"1K"),(0,i.kt)("th",{parentName:"tr",align:null},"10K"),(0,i.kt)("th",{parentName:"tr",align:null},"100K"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P50 list latency"),(0,i.kt)("td",{parentName:"tr",align:null},"50ms"),(0,i.kt)("td",{parentName:"tr",align:null},"131ms"),(0,i.kt)("td",{parentName:"tr",align:null},"1062ms"),(0,i.kt)("td",{parentName:"tr",align:null},"9932ms")))),(0,i.kt)("p",null,"Whereas listings from the Metadata Table will not scale linearly with file/object count and instead take about 100-500ms per read even for very large tables.\nEven better, the timeline server caches portions of the metadata (currently only for writers), and provides ~10ms performance for listings."),(0,i.kt)("h3",{id:"supporting-multi-modal-index"},"Supporting Multi-Modal Index"),(0,i.kt)("p",null,"Multi-modal index can drastically improve the lookup performance in file index and query latency with data skipping.\nBloom filter index containing the file-level bloom filter facilitates the key lookup and file pruning.  The column stats\nindex containing the statistics of all columns improves file pruning based on key and column value range in both the\nwriter and the reader, in query planning in Spark for example.  Multi-modal index is implemented as independent partitions\ncontaining the indices in the metadata table."),(0,i.kt)("h2",{id:"enable-hudi-metadata-table-and-multi-modal-index"},"Enable Hudi Metadata Table and Multi-Modal Index"),(0,i.kt)("p",null,"Since 0.11.0, the metadata table with synchronous updates and metadata-table-based file listing are enabled by default.\nThere are prerequisite configurations and steps in ",(0,i.kt)("a",{parentName:"p",href:"#deployment-considerations"},"Deployment considerations")," to\nsafely use this feature.  The metadata table and related file listing functionality can still be turned off by setting\n",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#hoodiemetadataenable"},(0,i.kt)("inlineCode",{parentName:"a"},"hoodie.metadata.enable"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".  For 0.10.1 and prior releases, metadata\ntable is disabled by default, and you can turn it on by setting the same config to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"If you turn off the metadata table after enabling, be sure to wait for a few commits so that the metadata table is fully\ncleaned up, before re-enabling the metadata table again."),(0,i.kt)("p",null,"The multi-modal index is introduced in 0.11.0 release.  They are disabled by default.  You can choose to enable bloom\nfilter index by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.index.bloom.filter.enable")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and enable column stats index by setting\n",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.index.column.stats.enable")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", when metadata table is enabled.  In 0.11.0 release, data skipping\nto improve queries in Spark now relies on the column stats index in metadata table.  The enabling of metadata table and\ncolumn stats index is prerequisite to enabling data skipping with ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.enable.data.skipping"),"."),(0,i.kt)("h2",{id:"deployment-considerations"},"Deployment considerations"),(0,i.kt)("p",null,"To ensure that Metadata Table stays up to date, all write operations on the same Hudi table need additional configurations\nbesides the above in different deployment models.  Before enabling metadata table, all writers on the same table must\nbe stopped."),(0,i.kt)("h3",{id:"deployment-model-a-single-writer-with-inline-table-services"},"Deployment Model A: Single writer with inline table services"),(0,i.kt)("p",null,"If your current deployment model is single writer and all table services (cleaning, clustering, compaction) are configured\nto be inline, such as Deltastreamer sync-once mode and Spark Datasource with default configs, there is no additional configuration\nrequired.  After setting ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#hoodiemetadataenable"},(0,i.kt)("inlineCode",{parentName:"a"},"hoodie.metadata.enable"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", restarting\nthe single writer is sufficient to safely enable metadata table."),(0,i.kt)("h3",{id:"deployment-model-b-single-writer-with-async-table-services"},"Deployment Model B: Single writer with async table services"),(0,i.kt)("p",null,"If your current deployment model is single writer along with async table services (such as cleaning, clustering, compaction)\nrunning in the same process, such as Deltastreamer continuous mode writing MOR table, Spark streaming (where compaction is async by default),\nand your own job setup enabling async table services inside the same writer, it is a must to have the optimistic concurrency control,\nthe lock provider, and lazy failed write clean policy configured before enabling metadata table as follows.  This is to guarantee\nthe proper behavior of ",(0,i.kt)("a",{parentName:"p",href:"/docs/concurrency_control#enabling-multi-writing"},"optimistic concurrency control")," when enabling\nmetadata table. Failing to follow the configuration guide leads to loss of data.  Note that these configurations are\nrequired only if metadata table is enabled in this deployment model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.InProcessLockProvider\n")),(0,i.kt)("p",null,"If multiple writers in different processes are present, including one writer with async table services, please refer to\n",(0,i.kt)("a",{parentName:"p",href:"#deployment-model-c-multi-writer"},"Deployment Model C: Multi-writer")," for configs, with the difference of using a\ndistributed lock provider.  Note that running a separate compaction (",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieCompactor"),") or clustering (",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieClusteringJob"),")\njob apart from the ingestion writer is considered as multi-writer deployment, as they are not running in the same\nprocess which cannot rely on the in-process lock provider."),(0,i.kt)("h3",{id:"deployment-model-c-multi-writer"},"Deployment Model C: Multi-writer"),(0,i.kt)("p",null,"If your current deployment model is multi-writer along with a lock provider and other required configs set for every writer\nas follows, there is no additional configuration required.  You can bring up the writers sequentially after stopping the\nwriters for enabling metadata table.  Applying the proper configurations to only partial writers leads to loss of data\nfrom the inconsistent writer. So, ensure you enable metadata table across all writers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=<distributed-lock-provider-classname>\n")),(0,i.kt)("p",null,"Note that there are 3 different distributed ",(0,i.kt)("a",{parentName:"p",href:"/docs/concurrency_control#enabling-multi-writing"},"lock providers available"),"\nto choose from: ",(0,i.kt)("inlineCode",{parentName:"p"},"ZookeeperBasedLockProvider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HiveMetastoreBasedLockProvider"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DynamoDBBasedLockProvider"),"."))}c.isMDXComponent=!0}}]);