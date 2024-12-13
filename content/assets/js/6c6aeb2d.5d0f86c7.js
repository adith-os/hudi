"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[106],{32799:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"migration_guide","title":"Bootstrapping","description":"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.","source":"@site/docs/migration_guide.md","sourceDirName":".","slug":"/migration_guide","permalink":"/docs/next/migration_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/docs/migration_guide.md","tags":[],"version":"current","frontMatter":{"title":"Bootstrapping","keywords":["hudi","migration","use case"],"summary":"In this page, we will discuss some available tools for migrating your existing table into a Hudi table","last_modified_at":"2019-12-30T19:59:57.000Z","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Disaster Recovery","permalink":"/docs/next/disaster_recovery"},"next":{"title":"Performance","permalink":"/docs/next/performance"}}');var a=o(74848),r=o(28453);const s={title:"Bootstrapping",keywords:["hudi","migration","use case"],summary:"In this page, we will discuss some available tools for migrating your existing table into a Hudi table",last_modified_at:new Date("2019-12-30T19:59:57.000Z"),toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},n=void 0,d={},l=[{value:"Approaches",id:"approaches",level:2},{value:"Use Hudi for new partitions alone",id:"use-hudi-for-new-partitions-alone",level:3},{value:"Convert existing table to Hudi",id:"convert-existing-table-to-hudi",level:3},{value:"Using Hudi Streamer",id:"using-hudi-streamer",level:4},{value:"Using Spark Datasource Writer",id:"using-spark-datasource-writer",level:4},{value:"Using Spark SQL CALL Procedure",id:"using-spark-sql-call-procedure",level:4},{value:"Using Hudi CLI",id:"using-hudi-cli",level:4},{value:"Configs",id:"configs",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.\nTo be able to start using Hudi for your existing table, you will need to migrate your existing table into a Hudi managed table. There are a couple of ways to achieve this."}),"\n",(0,a.jsx)(t.h2,{id:"approaches",children:"Approaches"}),"\n",(0,a.jsx)(t.h3,{id:"use-hudi-for-new-partitions-alone",children:"Use Hudi for new partitions alone"}),"\n",(0,a.jsx)(t.p,{children:"Hudi can be used to manage an existing table without affecting/altering the historical data already present in the\ntable. Hudi has been implemented to be compatible with such a mixed table with a caveat that either the complete\nHive partition is Hudi managed or not. Thus the lowest granularity at which Hudi manages a table is a Hive\npartition. Start using the datasource API or the WriteClient to write to the table and make sure you start writing\nto a new partition or convert your last N partitions into Hudi instead of the entire table. Note, since the historical\npartitions are not managed by HUDI, none of the primitives provided by HUDI work on the data in those partitions. More concretely, one cannot perform upserts or incremental pull on such older partitions not managed by the HUDI table.\nTake this approach if your table is an append only type of table and you do not expect to perform any updates to existing (or non Hudi managed) partitions."}),"\n",(0,a.jsx)(t.h3,{id:"convert-existing-table-to-hudi",children:"Convert existing table to Hudi"}),"\n",(0,a.jsx)(t.p,{children:"Import your existing table into a Hudi managed table. Since all the data is Hudi managed, none of the limitations\nof Approach 1 apply here. Updates spanning any partitions can be applied to this table and Hudi will efficiently\nmake the update available to queries. Note that not only do you get to use all Hudi primitives on this table,\nthere are other additional advantages of doing this. Hudi automatically manages file sizes of a Hudi managed table\n. You can define the desired file size when converting this table and Hudi will ensure it writes out files\nadhering to the config. It will also ensure that smaller files later get corrected by routing some new inserts into\nsmall files rather than writing new small ones thus maintaining the health of your cluster."}),"\n",(0,a.jsx)(t.p,{children:"There are a few options when choosing this approach."}),"\n",(0,a.jsx)(t.h4,{id:"using-hudi-streamer",children:"Using Hudi Streamer"}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.a,{href:"/docs/hoodie_streaming_ingestion#hudi-streamer",children:"Hudi Streamer"})," tool. HoodieStreamer supports bootstrap with\n--run-bootstrap command line option. There are two types of bootstrap, METADATA_ONLY and FULL_RECORD. METADATA_ONLY will\ngenerate just skeleton base files with keys/footers, avoiding full cost of rewriting the dataset. FULL_RECORD will\nperform a full copy/rewrite of the data as a Hudi table.  Additionally, once can choose selective partitions using regex\npatterns to apply one of the above bootstrap modes."]}),"\n",(0,a.jsxs)(t.p,{children:["Here is an example for running FULL_RECORD bootstrap on all partitions that match the regex pattern ",(0,a.jsx)(t.code,{children:".*"})," and keeping\nhive style partition with HoodieStreamer. This example configures\n",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations#hoodiebootstrapmodeselector",children:"hoodie.bootstrap.mode.selector"})," to\n",(0,a.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector"}),"  which allows applying ",(0,a.jsx)(t.code,{children:"FULL_RECORD"})," bootstrap\nmode to selective partitions based on the regex pattern ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations#hoodiebootstrapmodeselectorregex",children:"hoodie.bootstrap.mode.selector.regex"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"spark-submit --master local \\\n--jars \"packaging/hudi-utilities-slim-bundle/target/hudi-utilities-slim-bundle_2.12-1.0.0.jar,packaging/hudi-spark-bundle/target/hudi-spark3.5-bundle_2.12-1.0.0.jar\" \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer `ls packaging/hudi-utilities-slim-bundle/target/hudi-utilities-slim-bundle-*.jar` \\\n--run-bootstrap \\\n--target-base-path /tmp/hoodie/bootstrap_table \\\n--target-table bootstrap_table \\\n--table-type COPY_ON_WRITE \\\n--hoodie-conf hoodie.bootstrap.base.path=/tmp/source_table \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=${KEY_FIELD} \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=${PARTITION_FIELD} \\\n--hoodie-conf hoodie.datasource.write.precombine.field=${PRECOMBINE_FILED} \\\n--hoodie-conf hoodie.bootstrap.keygen.class=org.apache.hudi.keygen.SimpleKeyGenerator \\\n--hoodie-conf hoodie.bootstrap.mode.selector=org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector \\\n--hoodie-conf hoodie.bootstrap.mode.selector.regex='.*' \\\n--hoodie-conf hoodie.bootstrap.mode.selector.regex.mode=FULL_RECORD \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true\n"})}),"\n",(0,a.jsx)(t.h4,{id:"using-spark-datasource-writer",children:"Using Spark Datasource Writer"}),"\n",(0,a.jsx)(t.p,{children:"For huge tables, this could be as simple as :"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'for partition in [list of partitions in source table] {\n        val inputDF = spark.read.format("any_input_format").load("partition_path")\n        inputDF.write.format("org.apache.hudi").option()....save("basePath")\n}\n'})}),"\n",(0,a.jsx)(t.h4,{id:"using-spark-sql-call-procedure",children:"Using Spark SQL CALL Procedure"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/procedures#bootstrap",children:"Bootstrap procedure"})," for more details."]}),"\n",(0,a.jsx)(t.h4,{id:"using-hudi-cli",children:"Using Hudi CLI"}),"\n",(0,a.jsxs)(t.p,{children:["Write your own custom logic of how to load an existing table into a Hudi managed one. Please read about the RDD API\n",(0,a.jsx)(t.a,{href:"/docs/quick-start-guide",children:"here"}),". Using the bootstrap run CLI. Once hudi has been built via ",(0,a.jsx)(t.code,{children:"mvn clean install -DskipTests"}),", the shell can be\nfired by via ",(0,a.jsx)(t.code,{children:"cd hudi-cli && ./hudi-cli.sh"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"hudi->bootstrap run --srcPath /tmp/source_table --targetPath /tmp/hoodie/bootstrap_table --tableName bootstrap_table --tableType COPY_ON_WRITE --rowKeyField ${KEY_FIELD} --partitionPathField ${PARTITION_FIELD} --sparkMaster local --hoodieConfigs hoodie.datasource.write.hive_style_partitioning=true --selectorClass org.apache.hudi.client.bootstrap.selector.FullRecordBootstrapModeSelector\n"})}),"\n",(0,a.jsx)(t.p,{children:'Unlike Hudi Streamer, FULL_RECORD or METADATA_ONLY is set with --selectorClass, see details with help "bootstrap run".'}),"\n",(0,a.jsx)(t.h2,{id:"configs",children:"Configs"}),"\n",(0,a.jsx)(t.p,{children:"Here are the basic configs that control bootstrapping."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Config Name"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.bootstrap.base.path"}),(0,a.jsxs)(t.td,{children:["N/A ",(0,a.jsx)(t.strong,{children:"(Required)"})]}),(0,a.jsxs)(t.td,{children:["Base path of the dataset that needs to be bootstrapped as a Hudi table",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: BASE_PATH"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.6.0"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.bootstrap.mode.selector"}),(0,a.jsx)(t.td,{children:"org.apache.hudi.client.bootstrap.selector.MetadataOnlyBootstrapModeSelector (Optional)"}),(0,a.jsxs)(t.td,{children:["Selects the mode in which each file/partition in the bootstrapped dataset gets bootstrapped",(0,a.jsx)("br",{}),"Possible values:",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.MetadataOnlyBootstrapModeSelector"}),": In this mode, the full record data is not copied into Hudi therefore it avoids full cost of rewriting the dataset. Instead, 'skeleton' files containing just the corresponding metadata columns are added to the Hudi table. Hudi relies on the data in the original table and will face data-loss or corruption if files in the original table location are deleted or modified."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.FullRecordBootstrapModeSelector"}),": In this mode, the full record data is copied into hudi and metadata columns are added. A full record bootstrap is functionally equivalent to a bulk-insert. After a full record bootstrap, Hudi will function properly even if the original table is modified or deleted."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector"}),": A bootstrap selector which employs bootstrap mode by specified partitions."]})]}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: MODE_SELECTOR_CLASS_NAME"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.6.0"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.bootstrap.mode.selector.regex"}),(0,a.jsx)(t.td,{children:".* (Optional)"}),(0,a.jsxs)(t.td,{children:["Matches each bootstrap dataset partition against this regex and applies the mode below to it. This is ",(0,a.jsx)(t.strong,{children:"applicable only when"})," ",(0,a.jsx)(t.code,{children:"hoodie.bootstrap.mode.selector"})," equals ",(0,a.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: PARTITION_SELECTOR_REGEX_PATTERN"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.6.0"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hoodie.bootstrap.mode.selector.regex.mode"}),(0,a.jsx)(t.td,{children:"METADATA_ONLY (Optional)"}),(0,a.jsxs)(t.td,{children:["When specified, applies one of the possible ",(0,a.jsx)("u",{children:(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/bc583b4158684c23f35d787de5afda13c2865ad4/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/client/bootstrap/BootstrapMode.java",children:"Bootstrap Modes"})})," to the partitions that match the regex provided as part of the ",(0,a.jsx)(t.code,{children:"hoodie.bootstrap.mode.selector.regex"}),". For unmatched partitions the other Bootstrap Mode is applied. This is ",(0,a.jsx)(t.strong,{children:"applicable only when"})," ",(0,a.jsx)(t.code,{children:"hoodie.bootstrap.mode.selector"})," equals ",(0,a.jsx)(t.code,{children:"org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector"}),".",(0,a.jsx)("br",{}),"Possible values: ",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("u",{children:(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/bc583b4158684c23f35d787de5afda13c2865ad4/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/client/bootstrap/BootstrapMode.java#L36C5-L36C5",children:"FULL_RECORD"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("u",{children:(0,a.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/bc583b4158684c23f35d787de5afda13c2865ad4/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/client/bootstrap/BootstrapMode.java#L44C4-L44C4",children:"METADATA_ONLY"})})})]}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Config Param: PARTITION_SELECTOR_REGEX_MODE"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"Since Version: 0.6.0"})]})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["By default, with only ",(0,a.jsx)(t.code,{children:"hoodie.bootstrap.base.path"})," being provided METADATA_ONLY mode is selected. For other options, please refer ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Bootstrap-Configs",children:"bootstrap configs"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsx)("h3",{children:"Videos"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=iTNLqbW3YYA",children:"Bootstrapping in Apache Hudi on EMR Serverless with Lab"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>n});var i=o(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);