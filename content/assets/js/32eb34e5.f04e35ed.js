"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[20865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},48332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Delete support in Hudi",excerpt:"Deletes are supported at a record level in Hudi with 0.5.1 release. This blog is a \u201chow to\u201d blog on how to delete records in hudi.",author:"shivnarayan",category:"blog",tags:["how-to","delete","apache hudi"]},l=void 0,i={permalink:"/blog/2020/01/15/delete-support-in-hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-01-15-delete-support-in-hudi.md",source:"@site/blog/2020-01-15-delete-support-in-hudi.md",title:"Delete support in Hudi",description:'Deletes are supported at a record level in Hudi with 0.5.1 release. This blog is a "how to" blog on how to delete records in hudi. Deletes can be done with 3 flavors: Hudi RDD APIs, with Spark data source and with DeltaStreamer.',date:"2020-01-15T00:00:00.000Z",formattedDate:"January 15, 2020",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"delete",permalink:"/blog/tags/delete"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:3.835,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Change Capture Using AWS Database Migration Service and Hudi",permalink:"/blog/2020/01/20/change-capture-using-aws"},nextItem:{title:"New \u2013 Insert, Update, Delete Data on S3 with Amazon EMR and Apache Hudi",permalink:"/blog/2019/11/15/New-Insert-Update-Delete-Data-on-S3-with-Amazon-EMR-and-Apache-Hudi"}},s={authorsImageUrls:[void 0]},p=[{value:"Delete using RDD Level APIs",id:"delete-using-rdd-level-apis",children:[],level:3},{value:"Deletion with Datasource",id:"deletion-with-datasource",children:[],level:3},{value:"Deletion with HoodieDeltaStreamer",id:"deletion-with-hoodiedeltastreamer",children:[],level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Deletes are supported at a record level in Hudi with 0.5.1 release. This blog is a "how to" blog on how to delete records in hudi. Deletes can be done with 3 flavors: Hudi RDD APIs, with Spark data source and with DeltaStreamer.'),(0,r.kt)("h3",{id:"delete-using-rdd-level-apis"},"Delete using RDD Level APIs"),(0,r.kt)("p",null,"If you have embedded  ",(0,r.kt)("em",{parentName:"p"},"HoodieWriteClient")," , then deletion is as simple as passing in a  ",(0,r.kt)("em",{parentName:"p"},"JavaRDD","<","HoodieKey",">")," to the delete api."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Fetch list of HoodieKeys from elsewhere that needs to be deleted\n// convert to JavaRDD if required. JavaRDD<HoodieKey> toBeDeletedKeys\nList<WriteStatus> statuses = writeClient.delete(toBeDeletedKeys, commitTime);\n")),(0,r.kt)("h3",{id:"deletion-with-datasource"},"Deletion with Datasource"),(0,r.kt)("p",null,"Now we will walk through an example of how to perform deletes on a sample dataset using the Datasource API. Quick Start has the same example as below. Feel free to check it out."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," : Launch spark shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/spark-shell --packages org.apache.hudi:hudi-spark-bundle:0.5.1-incubating \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," : Import as required and set up table name, etc for sample dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n     \nval tableName = "hudi_cow_table"\nval basePath = "file:///tmp/hudi_cow_table"\nval dataGen = new DataGenerator\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," : Insert data. Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi dataset as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("org.apache.hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," For non-partitioned table, set"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'option(KEYGENERATOR_CLASS_PROP, "org.apache.hudi.keygen.NonpartitionedKeyGenerator")\n')),(0,r.kt)("p",null," Checkout ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators"},"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators")," for more options"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4")," : Query data. Load the data files into a DataFrame."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val roViewDF = spark.read.\n  format("org.apache.hudi").\n  load(basePath + "/*/*/*/*")\nroViewDF.createOrReplaceTempView("hudi_ro_table")\nspark.sql("select count(*) from hudi_ro_table").show() // should return 10 (number of records inserted above)\nval riderValue = spark.sql("select distinct rider from hudi_ro_table").show()\n// copy the value displayed to be used in next step\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5"),' : Fetch records that needs to be deleted, with the above rider value. This example is just to illustrate how to delete. In real world, use a select query using spark sql to fetch records that needs to be deleted and from the result we could invoke deletes as given below. Example rider value used is "rider-213".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val df = spark.sql(\"select uuid, partitionPath from hudi_ro_table where rider = 'rider-213'\")\n")),(0,r.kt)("p",null,"// Replace the above query with any other query that will fetch records to be deleted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6")," : Issue deletes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val deletes = dataGen.generateDeletes(df.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2));\ndf.write.format("org.apache.hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"delete").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," For non-partitioned table, set"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'option(KEYGENERATOR_CLASS_PROP, "org.apache.hudi.keygen.NonpartitionedKeyGenerator")\n')),(0,r.kt)("p",null," Checkout ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators"},"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators")," for more options"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 7")," : Reload the table and verify that the records are deleted"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val roViewDFAfterDelete = spark.\n  read.\n  format("org.apache.hudi").\n  load(basePath + "/*/*/*/*")\nroViewDFAfterDelete.createOrReplaceTempView("hudi_ro_table")\nspark.sql("select uuid, partitionPath from hudi_ro_table where rider = \'rider-213\'").show() // should not return any rows\n')),(0,r.kt)("h2",{id:"deletion-with-hoodiedeltastreamer"},"Deletion with HoodieDeltaStreamer"),(0,r.kt)("p",null,"Deletion with ",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),' takes the same path as upsert and so it relies on a specific field called  "',(0,r.kt)("em",{parentName:"p"},"_hoodie_is_deleted"),'" of type boolean in each record.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a record has the field value set to  ",(0,r.kt)("em",{parentName:"li"},"false")," or it's not present, then it is considered a regular upsert"),(0,r.kt)("li",{parentName:"ul"},"if not (if the value is set to  ",(0,r.kt)("em",{parentName:"li"},"true")," ), then its considered to be deleted record.")),(0,r.kt)("p",null,"This essentially means that the schema has to be changed for the source, to add this field and all incoming records are expected to have this field set. We will be working to relax this in future releases."),(0,r.kt)("p",null,"Lets say the original schema is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"record",\n  "name":"example_tbl",\n  "fields":[{\n     "name": "uuid",\n     "type": "String"\n  }, {\n     "name": "ts",\n     "type": "string"\n  },  {\n     "name": "partitionPath",\n     "type": "string"\n  }, {\n     "name": "rank",\n     "type": "long"\n  }\n]}\n')),(0,r.kt)("p",null,"To leverage deletion capabilities of ",(0,r.kt)("inlineCode",{parentName:"p"},"DeltaStreamer"),", you have to change the schema as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"record",\n  "name":"example_tbl",\n  "fields":[{\n     "name": "uuid",\n     "type": "String"\n  }, {\n     "name": "ts",\n     "type": "string"\n  },  {\n     "name": "partitionPath",\n     "type": "string"\n  }, {\n     "name": "rank",\n     "type": "long"\n  }, {\n    "name" : "_hoodie_is_deleted",\n    "type" : "boolean",\n    "default" : false\n  }\n]}\n')),(0,r.kt)("p",null,"Example incoming record for upsert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 0.0,\n  "uuid":"69cdb048-c93e-4532-adf9-f61ce6afe605",\n  "rank": 1034,\n  "partitionpath":"americas/brazil/sao_paulo",\n  "_hoodie_is_deleted":false\n}\n')),(0,r.kt)("p",null,"Example incoming record that needs to be deleted"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 0.0,\n  "uuid": "19tdb048-c93e-4532-adf9-f61ce6afe10",\n  "rank": 1045,\n  "partitionpath":"americas/brazil/sao_paulo",\n  "_hoodie_is_deleted":true\n}\n')),(0,r.kt)("p",null,"These are one time changes. Once these are in, then the DeltaStreamer pipeline will handle both upserts and deletions within every batch. Each batch could contain a mix of upserts and deletes and no additional step or changes are required after this. Note that this is to perform hard deletion instead of soft deletion."))}u.isMDXComponent=!0}}]);