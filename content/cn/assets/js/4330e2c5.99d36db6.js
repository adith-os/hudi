"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[12865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,p=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(p,s(s({ref:t},h),{},{components:a})):r.createElement(p,s({ref:t},h))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={title:"Schema evolution with DeltaStreamer using KafkaSource",excerpt:"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business",author:"sbernauer",category:"blog",image:"/assets/images/blog/hudi_schemaevolution.png",tags:["design","deltastreamer","schema","apache hudi","apache kafka"]},s=void 0,o={permalink:"/cn/blog/2021/08/16/kafka-custom-deserializer",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-16-kafka-custom-deserializer.md",source:"@site/blog/2021-08-16-kafka-custom-deserializer.md",title:"Schema evolution with DeltaStreamer using KafkaSource",description:"The schema used for data exchange between services can change rapidly with new business requirements.",date:"2021-08-16T00:00:00.000Z",formattedDate:"August 16, 2021",tags:[{label:"design",permalink:"/cn/blog/tags/design"},{label:"deltastreamer",permalink:"/cn/blog/tags/deltastreamer"},{label:"schema",permalink:"/cn/blog/tags/schema"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"},{label:"apache kafka",permalink:"/cn/blog/tags/apache-kafka"}],readingTime:3.155,truncated:!0,authors:[{name:"sbernauer"}],prevItem:{title:"Adding support for Virtual Keys in Hudi",permalink:"/cn/blog/2021/08/18/virtual-keys"},nextItem:{title:"Cost-Efficient Open Source Big Data Platform at Uber",permalink:"/cn/blog/2021/08/11/Cost-Efficient-Open-Source-Big-Data-Platform-at-Uber"}},l={authorsImageUrls:[void 0]},c=[{value:"What do we want to achieve?",id:"what-do-we-want-to-achieve",children:[],level:2},{value:"What is the problem?",id:"what-is-the-problem",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2},{value:"Configurations",id:"configurations",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The schema used for data exchange between services can change rapidly with new business requirements.\nApache Hudi is often used in combination with kafka as a event stream where all events are transmitted according to a record schema.\nIn our case a Confluent schema registry is used to maintain the schema and as schema evolves, newer versions are updated in the schema registry."),(0,i.kt)("h2",{id:"what-do-we-want-to-achieve"},"What do we want to achieve?"),(0,i.kt)("p",null,"We have multiple instances of DeltaStreamer running, consuming many topics with different schemas ingesting to multiple Hudi tables. Deltastreamer is a utility in Hudi to assist in ingesting data from multiple sources like DFS, kafka, etc into Hudi. If interested, you can read more about DeltaStreamer tool ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/writing_data#deltastreamer"},"here"),"\nIdeally every topic should be able to evolve the schema to match new business requirements. Producers start producing data with a new schema version and the DeltaStreamer picks up the new schema and ingests the data with the new schema. For this to work, we run our DeltaStreamer instances with the latest schema version available from the Schema Registry to ensure that we always use the freshest schema with all attributes.\nA prerequisites is that all the mentioned Schema evolutions must be ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKWARD_TRANSITIVE")," compatible (see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/avro.html"},"Schema Evolution and Compatibility of Avro Schema changes"),". This ensures that every record in the kafka topic can always be read using the latest schema."),(0,i.kt)("h2",{id:"what-is-the-problem"},"What is the problem?"),(0,i.kt)("p",null,"The normal operation looks like this. Multiple (or a single) producers write records to the kafka topic.\nIn regular flow of events, all records are in the same schema v1 and is in sync with schema registry.\n",(0,i.kt)("img",{alt:"Normal operation",src:a(53854).Z}),(0,i.kt)("br",null),"\nThings get complicated when a producer switches to a new Writer-Schema v2 (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"Producer A"),"). ",(0,i.kt)("inlineCode",{parentName:"p"},"Producer B")," remains on Schema v1. E.g. an attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"myattribute")," was added to the schema, resulting in schema version v2.\nDeltastreamer is capable of handling such schema evolution, if all incoming records were evolved and serialized with evolved schema. But the complication is that, some records are serialized with schema version v1 and some are serialized with schema version v2."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Schema evolution",src:a(15071).Z}),(0,i.kt)("br",null),"\nThe default deserializer used by Hudi ",(0,i.kt)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroDeserializer")," uses the schema that the record was serialized with for deserialization. This causes Hudi to get records with multiple different schema from the kafka client. E.g. Event #13 has the new attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"myattribute"),", Event #14 does not have the new attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"myattribute"),". This makes things complicated and error-prone for Hudi."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confluent Deserializer",src:a(82747).Z}),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Hudi added a new custom Deserializer ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaAvroSchemaDeserializer")," to solve this problem of different producers producing records in different schema versions, but to use the latest schema from schema registry to deserialize all the records.",(0,i.kt)("br",null),"\nAs first step the Deserializer gets the latest schema from the Hudi SchemaProvider. The SchemaProvider can get the schema for example from a Confluent Schema-Registry or a file.\nThe Deserializer then reads the records from the topic using the schema the record was written with. As next step it will convert all the records to the latest schema from the SchemaProvider, in our case the latest schema. As a result, the kafka client will return all records with a unified schema i.e. the latest schema as per schema registry. Hudi does not need to handle different schemas inside a single batch."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KafkaAvroSchemaDeserializer",src:a(96848).Z}),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"As of upcoming release 0.9.0, normal Confluent Deserializer is used by default. One has to explicitly set KafkaAvroSchemaDeserializer as below,\nin order to ensure smooth schema evolution with different producers producing records in different versions."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.deltastreamer.source.kafka.value.deserializer.class=org.apache.hudi.utilities.deser.KafkaAvroSchemaDeserializer")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Hope this blog helps in ingesting data from kafka into Hudi using Deltastreamer tool catering to different schema evolution\nneeds. Hudi has a very active development community and we look forward for more contributions.\nPlease check out ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/contribute/get-involved"},"this")," link to start contributing."))}u.isMDXComponent=!0},96848:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/KafkaAvroSchemaDeserializer-7077d39b24f01312dbefecdc9cfb937a.png"},82747:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/confluent_deserializer-acede4110283a5d72af7029f3c4a98a6.png"},53854:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/normal_operation-5bf358ee14c1ee57978939d66f0ccc3e.png"},15071:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/schema_evolution-b6cbf3c7c40814a0d8fcbd9f9176ea72.png"}}]);