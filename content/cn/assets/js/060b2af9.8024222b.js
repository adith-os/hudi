"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[45781],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77930:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={version:"0.6.0",title:"Concepts",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,l={unversionedId:"concepts",id:"version-0.10.0/concepts",title:"Concepts",description:"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over hadoop compatible storages",source:"@site/versioned_docs/version-0.10.0/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/cn/docs/0.10.0/concepts",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/concepts.md",tags:[],version:"0.10.0",frontMatter:{version:"0.6.0",title:"Concepts",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"}},s=[{value:"Timeline",id:"timeline",children:[],level:2},{value:"File management",id:"file-management",children:[],level:2},{value:"Index",id:"index",children:[],level:2},{value:"Table Types &amp; Queries",id:"table-types--queries",children:[{value:"Table Types",id:"table-types",children:[],level:3},{value:"Query types",id:"query-types",children:[],level:3}],level:2},{value:"Copy On Write Table",id:"copy-on-write-table",children:[],level:2},{value:"Merge On Read Table",id:"merge-on-read-table",children:[],level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over hadoop compatible storages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update/Delete Records      (how do I change records in a table?)"),(0,i.kt)("li",{parentName:"ul"},"Change Streams             (how do I fetch records that changed?)")),(0,i.kt)("p",null,"In this section, we will discuss key concepts & terminologies that are important to understand, to be able to effectively use these primitives."),(0,i.kt)("h2",{id:"timeline"},"Timeline"),(0,i.kt)("p",null,"At its core, Hudi maintains a ",(0,i.kt)("inlineCode",{parentName:"p"},"timeline")," of all actions performed on the table at different ",(0,i.kt)("inlineCode",{parentName:"p"},"instants")," of time that helps provide instantaneous views of the table,\nwhile also efficiently supporting retrieval of data in the order of arrival. A Hudi instant consists of the following components "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instant action")," : Type of action performed on the table"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instant time")," : Instant time is typically a timestamp (e.g: 20190117010349), which monotonically increases in the order of action's begin time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," : current state of the instant")),(0,i.kt)("p",null,"Hudi guarantees that the actions performed on the timeline are atomic & timeline consistent based on the instant time."),(0,i.kt)("p",null,"Key actions performed include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMMITS")," - A commit denotes an ",(0,i.kt)("strong",{parentName:"li"},"atomic write")," of a batch of records into a table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLEANS")," - Background activity that gets rid of older versions of files in the table, that are no longer needed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELTA_COMMIT")," - A delta commit refers to an ",(0,i.kt)("strong",{parentName:"li"},"atomic write")," of a batch of records into a  MergeOnRead type table, where some/all of the data could be just written to delta logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMPACTION")," - Background activity to reconcile differential data structures within Hudi e.g: moving updates from row based log files to columnar formats. Internally, compaction manifests as a special commit on the timeline"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ROLLBACK")," - Indicates that a commit/delta commit was unsuccessful & rolled back, removing any partial files produced during such a write"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SAVEPOINT"),' - Marks certain file groups as "saved", such that cleaner will not delete them. It helps restore the table to a point on the timeline, in case of disaster/data recovery scenarios.')),(0,i.kt)("p",null,"Any given instant can be\nin one of the following states"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REQUESTED")," - Denotes an action has been scheduled, but has not initiated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INFLIGHT")," - Denotes that the action is currently being performed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMPLETED")," - Denotes completion of an action on the timeline")),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:"/assets/images/hudi_timeline.png",alt:"hudi_timeline.png"})),(0,i.kt)("p",null,"Example above shows upserts happenings between 10:00 and 10:20 on a Hudi table, roughly every 5 mins, leaving commit metadata on the Hudi timeline, along\nwith other background cleaning/compactions. One key observation to make is that the commit time indicates the ",(0,i.kt)("inlineCode",{parentName:"p"},"arrival time")," of the data (10:20AM), while the actual data\norganization reflects the actual time or ",(0,i.kt)("inlineCode",{parentName:"p"},"event time"),", the data was intended for (hourly buckets from 07:00). These are two key concepts when reasoning about tradeoffs between latency and completeness of data."),(0,i.kt)("p",null,"When there is late arriving data (data intended for 9:00 arriving >1 hr late at 10:20), we can see the upsert producing new data into even older time buckets/folders.\nWith the help of the timeline, an incremental query attempting to get all new data that was committed successfully since 10:00 hours, is able to very efficiently consume\nonly the changed files without say scanning all the time buckets > 07:00."),(0,i.kt)("h2",{id:"file-management"},"File management"),(0,i.kt)("p",null,"Hudi organizes a table into a directory structure under a ",(0,i.kt)("inlineCode",{parentName:"p"},"basepath")," on DFS. Table is broken up into partitions, which are folders containing data files for that partition,\nvery similar to Hive tables. Each partition is uniquely identified by its ",(0,i.kt)("inlineCode",{parentName:"p"},"partitionpath"),", which is relative to the basepath."),(0,i.kt)("p",null,"Within each partition, files are organized into ",(0,i.kt)("inlineCode",{parentName:"p"},"file groups"),", uniquely identified by a ",(0,i.kt)("inlineCode",{parentName:"p"},"file id"),". Each file group contains several\n",(0,i.kt)("inlineCode",{parentName:"p"},"file slices"),", where each slice contains a base file (",(0,i.kt)("inlineCode",{parentName:"p"},"*.parquet"),") produced at a certain commit/compaction instant time,\nalong with set of log files (",(0,i.kt)("inlineCode",{parentName:"p"},"*.log.*"),") that contain inserts/updates to the base file since the base file was produced.\nHudi adopts a MVCC design, where compaction action merges logs and base files to produce new file slices and cleaning action gets rid of\nunused/older file slices to reclaim space on DFS. "),(0,i.kt)("h2",{id:"index"},"Index"),(0,i.kt)("p",null,"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."),(0,i.kt)("h2",{id:"table-types--queries"},"Table Types & Queries"),(0,i.kt)("p",null,"Hudi table types define how data is indexed & laid out on the DFS and how the above primitives and timeline activities are implemented on top of such organization (i.e how data is written).\nIn turn, ",(0,i.kt)("inlineCode",{parentName:"p"},"query types")," define how the underlying data is exposed to the queries (i.e how data is read). "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Table Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported Query types"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Copy On Write"),(0,i.kt)("td",{parentName:"tr",align:null},"Snapshot Queries + Incremental Queries")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Merge On Read"),(0,i.kt)("td",{parentName:"tr",align:null},"Snapshot Queries + Incremental Queries + Read Optimized Queries")))),(0,i.kt)("h3",{id:"table-types"},"Table Types"),(0,i.kt)("p",null,"Hudi supports the following table types."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#copy-on-write-table"},"Copy On Write")," : Stores data using exclusively columnar file formats (e.g parquet). Updates simply version & rewrite the files by performing a synchronous merge during write."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#merge-on-read-table"},"Merge On Read")," : Stores data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats. Updates are logged to delta files & later compacted to produce new versions of columnar files synchronously or asynchronously.")),(0,i.kt)("p",null,"Following table summarizes the trade-offs between these two table types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trade-off"),(0,i.kt)("th",{parentName:"tr",align:null},"CopyOnWrite"),(0,i.kt)("th",{parentName:"tr",align:null},"MergeOnRead"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Latency"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Update cost (I/O)"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher (rewrite entire parquet)"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower (append to delta log)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parquet File Size"),(0,i.kt)("td",{parentName:"tr",align:null},"Smaller (high update(I/0) cost)"),(0,i.kt)("td",{parentName:"tr",align:null},"Larger (low update cost)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Write Amplification"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower (depending on compaction strategy)")))),(0,i.kt)("h3",{id:"query-types"},"Query types"),(0,i.kt)("p",null,"Hudi supports the following query types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Snapshot Queries")," : Queries see the latest snapshot of the table as of a given commit or compaction action. In case of merge on read table, it exposes near-real time data(few mins) by merging\nthe base and delta files of the latest file slice on-the-fly. For copy on write table,  it provides a drop-in replacement for existing parquet tables, while providing upsert/delete and other write side features. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Incremental Queries")," : Queries only see new data written to the table, since a given commit/compaction. This effectively provides change streams to enable incremental data pipelines. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Read Optimized Queries")," : Queries see the latest snapshot of table as of a given commit/compaction action. Exposes only the base/columnar files in latest file slices and guarantees the\nsame columnar query performance compared to a non-hudi columnar table.")),(0,i.kt)("p",null,"Following table summarizes the trade-offs between the different query types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trade-off"),(0,i.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,i.kt)("th",{parentName:"tr",align:null},"Read Optimized"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Latency"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Query Latency"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher (merge base / columnar file + row based delta / log files)"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower (raw base / columnar file performance)")))),(0,i.kt)("h2",{id:"copy-on-write-table"},"Copy On Write Table"),(0,i.kt)("p",null,"File slices in Copy-On-Write table only contain the base/columnar file and each commit produces new versions of base files.\nIn other words, we implicitly compact on every commit, such that only columnar data exists. As a result, the write amplification\n(number of bytes written for 1 byte of incoming data) is much higher, where read amplification is zero.\nThis is a much desired property for analytical workloads, which is predominantly read-heavy."),(0,i.kt)("p",null,"Following illustrates how this works conceptually, when data written into copy-on-write table  and two queries running on top of it."),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:"/assets/images/hudi_cow.png",alt:"hudi_cow.png"})),(0,i.kt)("p",null,"As data gets written, updates to existing file groups produce a new slice for that file group stamped with the commit instant time,\nwhile inserts allocate a new file group and write its first slice for that file group. These file slices and their commit instant times are color coded above.\nSQL queries running against such a table (eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"select count(*)")," counting the total records in that partition), first checks the timeline for the latest commit\nand filters all but latest file slices of each file group. As you can see, an old query does not see the current inflight commit's files color coded in pink,\nbut a new query starting after the commit picks up the new data. Thus queries are immune to any write failures/partial writes and only run on committed data."),(0,i.kt)("p",null,"The intention of copy on write table, is to fundamentally improve how tables are managed today through"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First class support for atomically updating data at file-level, instead of rewriting whole tables/partitions"),(0,i.kt)("li",{parentName:"ul"},"Ability to incremental consume changes, as opposed to wasteful scans or fumbling with heuristics"),(0,i.kt)("li",{parentName:"ul"},"Tight control of file sizes to keep query performance excellent (small files hurt query performance considerably).")),(0,i.kt)("h2",{id:"merge-on-read-table"},"Merge On Read Table"),(0,i.kt)("p",null,"Merge on read table is a superset of copy on write, in the sense it still supports read optimized queries of the table by exposing only the base/columnar files in latest file slices.\nAdditionally, it stores incoming upserts for each file group, onto a row based delta log, to support snapshot queries by applying the delta log,\nonto the latest version of each file id on-the-fly during query time. Thus, this table type attempts to balance read and write amplification intelligently, to provide near real-time data.\nThe most significant change here, would be to the compactor, which now carefully chooses which delta log files need to be compacted onto\ntheir columnar base file, to keep the query performance in check (larger delta log files would incur longer merge times with merge data on query side)"),(0,i.kt)("p",null,"Following illustrates how the table works, and shows two types of queries - snapshot query and read optimized query."),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:"/assets/images/hudi_mor.png",alt:"hudi_mor.png"})),(0,i.kt)("p",null,"There are lot of interesting things happening in this example, which bring out the subtleties in the approach."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We now have commits every 1 minute or so, something we could not do in the other table type."),(0,i.kt)("li",{parentName:"ul"},"Within each file id group, now there is an delta log file, which holds incoming updates to the records already present in the base columnar files. In the example, the delta log files hold\nall the data from 10:05 to 10:10. The base columnar files are still versioned with the commit, as before.\nThus, if one were to simply look at base files alone, then the table layout looks exactly like a copy on write table."),(0,i.kt)("li",{parentName:"ul"},"A periodic compaction process reconciles these changes from the delta log and produces a new version of base file, just like what happened at 10:05 in the example."),(0,i.kt)("li",{parentName:"ul"},"There are two ways of querying the same underlying table: Read Optimized query and Snapshot query, depending on whether we chose query performance or freshness of data."),(0,i.kt)("li",{parentName:"ul"},"The semantics around when data from a commit is available to a query changes in a subtle way for a read optimized query. Note, that such a query\nrunning at 10:10, wont see data after 10:05 above, while a snapshot query always sees the freshest data."),(0,i.kt)("li",{parentName:"ul"},"When we trigger compaction & what it decides to compact hold all the key to solving these hard problems. By implementing a compacting\nstrategy, where we aggressively compact the latest partitions compared to older partitions, we could ensure the read optimized queries see data\npublished within X minutes in a consistent fashion.")),(0,i.kt)("p",null,"The intention of merge on read table is to enable near real-time processing directly on top of DFS, as opposed to copying\ndata out to specialized systems, which may not be able to handle the data volume. There are also a few secondary side benefits to\nthis table such as reduced write amplification by avoiding synchronous merge of data, i.e, the amount of data written per 1 bytes of data in a batch"))}d.isMDXComponent=!0}}]);