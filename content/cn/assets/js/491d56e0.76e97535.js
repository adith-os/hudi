"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[72907],{48105:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"record_merger","title":"Record Mergers","description":"Hudi handles mutations to records and streaming data, as we briefly touched upon in timeline ordering section.","source":"@site/docs/record_merger.md","sourceDirName":".","slug":"/record_merger","permalink":"/cn/docs/next/record_merger","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/record_merger.md","tags":[],"version":"current","frontMatter":{"title":"Record Mergers","keywords":["hudi","merge","upsert","precombine"],"toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Key Generation","permalink":"/cn/docs/next/key_generation"},"next":{"title":"Table Metadata","permalink":"/cn/docs/next/metadata"}}');var o=i(74848),t=i(28453);const a={title:"Record Mergers",keywords:["hudi","merge","upsert","precombine"],toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},s=void 0,d={},c=[{value:"COMMIT_TIME_ORDERING",id:"commit_time_ordering",level:3},{value:"EVENT_TIME_ORDERING",id:"event_time_ordering",level:3},{value:"CUSTOM",id:"custom",level:3},{value:"Record Merge Configs",id:"record-merge-configs",level:3},{value:"Record Payloads",id:"record-payloads",level:3},{value:"OverwriteWithLatestAvroPayload",id:"overwritewithlatestavropayload",level:4},{value:"DefaultHoodieRecordPayload",id:"defaulthoodierecordpayload",level:4},{value:"EventTimeAvroPayload",id:"eventtimeavropayload",level:4},{value:"OverwriteNonDefaultsWithLatestAvroPayload",id:"overwritenondefaultswithlatestavropayload",level:4},{value:"PartialUpdateAvroPayload",id:"partialupdateavropayload",level:4},{value:"Configs",id:"configs",level:4},{value:"Related Resources",id:"related-resources",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Hudi handles mutations to records and streaming data, as we briefly touched upon in ",(0,o.jsx)(r.a,{href:"timeline#ordering-of-actions",children:"timeline ordering"})," section.\nTo provide users full-fledged support for stream processing, Hudi goes all the way making the storage engine and the underlying storage format\nunderstand how to merge changes to the same record key, that may arrive even in different order at different times. With the rise of mobile applications\nand IoT, these scenarios have become the normal than an exception. For e.g. a social networking application uploading user events several hours after they happened,\nwhen the user connects to WiFi networks."]}),"\n",(0,o.jsx)(r.p,{children:"To achieve this, Hudi supports merge modes, which define how the base and log files are ordered in a file slice and further how different records with\nthe same record key within that file slice are merged consistently to produce the same deterministic results for snapshot queries, writers and table services. Specifically,\nthere are three merge modes supported as a table-level configuration, invoked in the following places."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"(writing)"})," Combining multiple change records for the same record key while reading input data during writes. This is an optional optimization that\nreduces the number of records written to log files to improve query and write performance subsequently."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"(writing)"})," Merging final change record (partial/full update/delete) against existing record in storage for CoW tables."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"(compaction)"})," Compaction service merges all change records in log files against base files, respecting the merge mode."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"(query)"})," Merging change records in log files, after filtering/projections against base file for MoR table queries."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Note that the merge mode should not be altered once the table is created to avoid inconsistent behavior due to compaction producing\ndifferent merge results when switching between the modes."}),"\n",(0,o.jsx)(r.h3,{id:"commit_time_ordering",children:"COMMIT_TIME_ORDERING"}),"\n",(0,o.jsx)(r.p,{children:"Here, we expect the input records to arrive in strict order such that arrival order is same as their\ndelta commit order on the table. Merging simply picks the record belonging to the latest write as the merged result. In relational data mode speak,\nthis provides overwrite semantics aligned with serializable writes on the timeline."}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:i(38526).A,alt:"upsert_path.png"})}),"\n",(0,o.jsx)(r.p,{children:"In the example above, the writer process consumes a database change log, expected to be in strict order of a logical sequence number (lsn)\nthat denotes the ordering of the writes in the upstream database."}),"\n",(0,o.jsx)(r.h3,{id:"event_time_ordering",children:"EVENT_TIME_ORDERING"}),"\n",(0,o.jsxs)(r.p,{children:["This is the default merge mode. While commit time ordering provides a well-understood standard behavior, it's hardly sufficient. The commit time is unrelated to the actual\nordering of data that a user may care about and strict ordering of input in complex distributed systems is difficult to achieve.\nWith event time ordering, the merging picks the record with the highest value on a user specified ",(0,o.jsx)(r.em,{children:(0,o.jsx)(r.strong,{children:"ordering or precombine field"})})," as the merged result."]}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:i(57159).A,alt:"upsert_path.png"})}),"\n",(0,o.jsxs)(r.p,{children:['In the example above, two microservices product change records about orders at different times, that can arrive out-of-order. As color coded,\nthis can lead to application-level inconsistent states in the table if simply merged in commit time order like a cancelled order being re-created or\na paid order moved back to just created state expecting payment again. Event time ordering helps by ignoring older state changes that arrive late and\navoiding order status from "jumping back" in time. Combined with ',(0,o.jsx)(r.a,{href:"concurrency_control#non-blocking-concurrency-control-mode",children:"non-blocking concurrency control"}),",\nthis provides a very powerful way for processing such data streams efficiently and correctly."]}),"\n",(0,o.jsx)(r.h3,{id:"custom",children:"CUSTOM"}),"\n",(0,o.jsx)(r.p,{children:'In some cases, even more control and customization may be needed. Extending the same example above, the two microservices could be updating two different\nset of columns "order_info" and "payment_info", along with order state. The merge logic is then expected to not only resolve the correct status, but merge\norder_info from the record in created state, into the record in cancelled state that already has payment_info fields populated with reasons payment failed.\nSuch reconciliation provide a simple denormalized data model for downstream consumption where queries (for e.g. fraud detection) can simply filter fields\nacross order_info and payment_info without costly self-join on each access.'}),"\n",(0,o.jsxs)(r.p,{children:["Hudi allows authoring of cross-language custom record mergers on top of a standard record merger API, that supports full and partial merges. The java APIs\nare sketched below at a high-level. It simply takes older/newer records in engine native formats and produces a merged record or returns empty to skip them entirely (e.g. soft deletes).\nRecord merger is configured using a ",(0,o.jsx)(r.code,{children:"hoodie.write.record.merge.strategy.id"})," write config whose value is an uuid, that is taken by the writer to persist in the table config, and is expected to be returned by ",(0,o.jsx)(r.code,{children:"getMergingStrategy()"}),"\nmethod below. Using this mechanism, Hudi can automatically deduce the record merger to use for the table across different language/engine runtimes."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-Java",children:"interface HoodieRecordMerger {\n\n    Option<Pair<HoodieRecord, Schema>> merge(HoodieRecord older, Schema oldSchema, \n                                             HoodieRecord newer, Schema newSchema, \n                                             TypedProperties props) {\n        ...\n    }\n\n    Option<Pair<HoodieRecord, Schema>> partialMerge(HoodieRecord older, Schema oldSchema, \n                                                    HoodieRecord newer, Schema newSchema, \n                                                    Schema readerSchema, TypedProperties props) {\n        ...\n    }\n     \n    HoodieRecordType getRecordType() {...}\n    \n    String getMergingStrategy(); {...}\n}\n"})}),"\n",(0,o.jsx)(r.h3,{id:"record-merge-configs",children:"Record Merge Configs"}),"\n",(0,o.jsx)(r.p,{children:"The record merge mode and optional record merge strategy ID and custom merge implementation classes can be specified using the below configs."}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Config Name"}),(0,o.jsx)(r.th,{children:"Default"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"hoodie.write.record.merge.mode"}),(0,o.jsx)(r.td,{children:"EVENT_TIME_ORDERING"}),(0,o.jsxs)(r.td,{children:["Determines the logic of merging different records with the same record key. Valid values: (1) ",(0,o.jsx)(r.code,{children:"COMMIT_TIME_ORDERING"}),": use commit time to merge records, i.e., the record from later commit overwrites the earlier record with the same key. (2) ",(0,o.jsx)(r.code,{children:"EVENT_TIME_ORDERING"})," (default): use event time as the ordering to merge records, i.e., the record with the larger event time overwrites the record with the smaller event time on the same key, regardless of commit time. The event time or preCombine field needs to be specified by the user. (3) ",(0,o.jsx)(r.code,{children:"CUSTOM"}),": use custom merging logic specified by the user.",(0,o.jsx)("br",{}),(0,o.jsx)(r.code,{children:"Config Param: RECORD_MERGE_MODE"}),(0,o.jsx)("br",{}),(0,o.jsx)(r.code,{children:"Since Version: 1.0.0"})]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"hoodie.write.record.merge.strategy.id"}),(0,o.jsx)(r.td,{children:"N/A (Optional)"}),(0,o.jsxs)(r.td,{children:["ID of record merge strategy. When you specify this config, you also need to specify ",(0,o.jsx)(r.code,{children:"hoodie.write.record.merge.custom.implementation.classes"}),". Hudi picks the ",(0,o.jsx)(r.code,{children:"HoodieRecordMerger"})," implementation class from the list of classes in ",(0,o.jsx)(r.code,{children:"hoodie.write.record.merge.custom.implementation.classes"})," that has the specified merge strategy ID.",(0,o.jsx)("br",{}),(0,o.jsx)(r.code,{children:"Config Param: RECORD_MERGE_STRATEGY_ID"}),(0,o.jsx)("br",{}),(0,o.jsx)(r.code,{children:"Since Version: 0.13.0"})]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"hoodie.write.record.merge.custom.implementation.classes"}),(0,o.jsx)(r.td,{children:"N/A (Optional)"}),(0,o.jsxs)(r.td,{children:["List of ",(0,o.jsx)(r.code,{children:"HoodieRecordMerger"})," implementations constituting Hudi's merging strategy based on the engine used. Hudi picks the ",(0,o.jsx)(r.code,{children:"HoodieRecordMerger"})," implementation class from this list based on the specified ",(0,o.jsx)(r.code,{children:"hoodie.write.record.merge.strategy.id"}),".",(0,o.jsx)("br",{}),(0,o.jsx)(r.code,{children:"Config Param: RECORD_MERGE_IMPL_CLASSES"}),(0,o.jsx)("br",{}),(0,o.jsx)(r.code,{children:"Since Version: 0.13.0"})]})]})]})]}),"\n",(0,o.jsx)(r.h3,{id:"record-payloads",children:"Record Payloads"}),"\n",(0,o.jsx)(r.admonition,{type:"caution",children:(0,o.jsx)(r.p,{children:"Going forward, we recommend users to migrate and use the record merger APIs and not write new payload implementations."})}),"\n",(0,o.jsx)(r.p,{children:"Record payload is an older abstraction/API for achieving similar record-level merge capabilities. While record payloads were very useful and popular,\nit had drawbacks like lower performance due to conversion of engine native record formats to Apache Avro for merging and lack of cross-language support.\nAs we shall see below, Hudi provides out-of-box support for different payloads for different use cases. Hudi implements fallback from\nrecord merger APIs to payload APIs internally, to provide backwards compatibility for existing payload implementations."}),"\n",(0,o.jsx)(r.h4,{id:"overwritewithlatestavropayload",children:"OverwriteWithLatestAvroPayload"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteWithLatestAvroPayload\n"})}),"\n",(0,o.jsxs)(r.p,{children:["This is the default record payload implementation. It picks the record with the greatest value (determined by calling\n",(0,o.jsx)(r.code,{children:".compareTo()"})," on the value of precombine key) to break ties and simply picks the latest record while merging. This gives\nlatest-write-wins style semantics."]}),"\n",(0,o.jsx)(r.h4,{id:"defaulthoodierecordpayload",children:"DefaultHoodieRecordPayload"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.DefaultHoodieRecordPayload\n"})}),"\n",(0,o.jsxs)(r.p,{children:["While ",(0,o.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," precombines based on an ordering field and picks the latest record while merging,\n",(0,o.jsx)(r.code,{children:"DefaultHoodieRecordPayload"})," honors the ordering field for both precombinig and merging. Let's understand the difference with an example:"]}),"\n",(0,o.jsxs)(r.p,{children:["Let's say the ordering field is ",(0,o.jsx)(r.code,{children:"ts"})," and record key is ",(0,o.jsx)(r.code,{children:"id"})," and schema is:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Current record in storage:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,o.jsx)(r.p,{children:"Incoming record:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       name_1    price_1\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Result data after merging using ",(0,o.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," (latest-write-wins):"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       name_1  price_1\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Result data after merging using ",(0,o.jsx)(r.code,{children:"DefaultHoodieRecordPayload"})," (always honors ordering field):"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,o.jsx)(r.h4,{id:"eventtimeavropayload",children:"EventTimeAvroPayload"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.EventTimeAvroPayload\n"})}),"\n",(0,o.jsxs)(r.p,{children:["This is the default record payload for Flink based writing. Some use cases require merging records by event time and\nthus event time plays the role of an ordering field. This payload is particularly useful in the case of late-arriving data.\nFor such use cases, users need to set the ",(0,o.jsx)(r.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"payload event time field"})," configuration."]}),"\n",(0,o.jsx)(r.h4,{id:"overwritenondefaultswithlatestavropayload",children:"OverwriteNonDefaultsWithLatestAvroPayload"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteNonDefaultsWithLatestAvroPayload\n"})}),"\n",(0,o.jsxs)(r.p,{children:["This payload is quite similar to ",(0,o.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," with slight difference while merging records. For\nprecombining, just like ",(0,o.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"}),", it picks the latest record for a key, based on an ordering\nfield. While merging, it overwrites the existing record on storage only for the specified ",(0,o.jsx)(r.strong,{children:"fields that don't equal\ndefault value"})," for that field."]}),"\n",(0,o.jsx)(r.h4,{id:"partialupdateavropayload",children:"PartialUpdateAvroPayload"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.PartialUpdateAvroPayload\n"})}),"\n",(0,o.jsxs)(r.p,{children:["This payload supports partial update. Typically, once the merge step resolves which record to pick, then the record on\nstorage is fully replaced by the resolved record. But, in some cases, the requirement is to update only certain fields\nand not replace the whole record. This is called partial update. ",(0,o.jsx)(r.code,{children:"PartialUpdateAvroPayload"})," provides out-of-box support\nfor such use cases. To illustrate the point, let us look at a simple example:"]}),"\n",(0,o.jsxs)(r.p,{children:["Let's say the ordering field is ",(0,o.jsx)(r.code,{children:"ts"})," and record key is ",(0,o.jsx)(r.code,{children:"id"})," and schema is:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Current record in storage:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_1  null\n"})}),"\n",(0,o.jsx)(r.p,{children:"Incoming record:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       null    price_1\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Result data after merging using ",(0,o.jsx)(r.code,{children:"PartialUpdateAvroPayload"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_1  price_1\n"})}),"\n",(0,o.jsx)(r.h4,{id:"configs",children:"Configs"}),"\n",(0,o.jsxs)(r.p,{children:["Payload class can be specified using the below configs. For more advanced configs refer ",(0,o.jsx)(r.a,{href:"https://hudi.apache.org/docs/configurations#RECORD_PAYLOAD",children:"here"})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Spark based configs:"})}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Config Name"}),(0,o.jsx)(r.th,{children:"Default"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"hoodie.datasource.write.payload.class"}),(0,o.jsx)(r.td,{children:"org.apache.hudi.common.model.OverwriteWithLatestAvroPayload (Optional)"}),(0,o.jsxs)(r.td,{children:["Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for PRECOMBINE_FIELD_OPT_VAL in-effective",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(r.code,{children:"Config Param: WRITE_PAYLOAD_CLASS_NAME"})]})]})})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Flink based configs:"})}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Config Name"}),(0,o.jsx)(r.th,{children:"Default"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"payload.class"}),(0,o.jsx)(r.td,{children:"org.apache.hudi.common.model.EventTimeAvroPayload (Optional)"}),(0,o.jsxs)(r.td,{children:["Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for the option in-effective",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})," ",(0,o.jsx)(r.code,{children:"Config Param: PAYLOAD_CLASS_NAME"})]})]})})]}),"\n",(0,o.jsxs)(r.p,{children:["There are also quite a few other implementations. Developers may be interested in looking at the hierarchy of ",(0,o.jsx)(r.code,{children:"HoodieRecordPayload"})," interface. For\nexample, ",(0,o.jsx)(r.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/MySqlDebeziumAvroPayload.java",children:(0,o.jsx)(r.code,{children:"MySqlDebeziumAvroPayload"})})," and ",(0,o.jsx)(r.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/PostgresDebeziumAvroPayload.java",children:(0,o.jsx)(r.code,{children:"PostgresDebeziumAvroPayload"})})," provides support for seamlessly applying changes\ncaptured via Debezium for MySQL and PostgresDB. ",(0,o.jsx)(r.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/AWSDmsAvroPayload.java",children:(0,o.jsx)(r.code,{children:"AWSDmsAvroPayload"})})," provides support for applying changes captured via Amazon Database Migration Service onto S3.\nFor full configurations, go ",(0,o.jsx)(r.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"here"})," and please check out ",(0,o.jsx)(r.a,{href:"faq_writing_tables/#can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage",children:"this FAQ"})," if you want to implement your own custom payloads."]}),"\n",(0,o.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,o.jsx)("h3",{children:"Blogs"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://medium.com/@simpsons/how-to-define-your-own-merge-logic-with-apache-hudi-622ee5ccab1e",children:"How to define your own merge logic with Apache Hudi"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},38526:(e,r,i)=>{i.d(r,{A:()=>n});const n=i.p+"assets/images/commit-time-ordering-merge-mode-e9b6af3dcdb508053202617218f3ffe6.png"},57159:(e,r,i)=>{i.d(r,{A:()=>n});const n=i.p+"assets/images/event-time-ordering-merge-mode-c8164e035840388bf4290fa81ac6262a.png"},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>s});var n=i(96540);const o={},t=n.createContext(o);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);