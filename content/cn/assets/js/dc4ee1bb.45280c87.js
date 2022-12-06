"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[52399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return r?i.createElement(h,a(a({ref:t},d),{},{components:r})):i.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73696:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={title:"Metrics",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:new Date("2020-06-20T19:59:57.000Z")},a=void 0,s={unversionedId:"metrics",id:"version-0.9.0/metrics",title:"Metrics",description:"In this section, we will introduce the MetricsReporter and HoodieMetrics in Hudi. You can view the metrics-related configurations here.",source:"@site/versioned_docs/version-0.9.0/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/cn/docs/0.9.0/metrics",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/metrics.md",tags:[],version:"0.9.0",frontMatter:{title:"Metrics",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:"2020-06-20T19:59:57.000Z"},sidebar:"version-0.9.0/docs",previous:{title:"Docker Demo",permalink:"/cn/docs/0.9.0/docker_demo"},next:{title:"Privacy Policy",permalink:"/cn/docs/0.9.0/privacy"}},l=[{value:"MetricsReporter",id:"metricsreporter",children:[{value:"JmxMetricsReporter",id:"jmxmetricsreporter",children:[{value:"Configurations",id:"configurations",children:[],level:4},{value:"Demo",id:"demo",children:[],level:4}],level:3},{value:"MetricsGraphiteReporter",id:"metricsgraphitereporter",children:[{value:"Configurations",id:"configurations-1",children:[],level:4},{value:"Demo",id:"demo-1",children:[],level:4}],level:3},{value:"DatadogMetricsReporter",id:"datadogmetricsreporter",children:[{value:"Configurations",id:"configurations-2",children:[],level:4},{value:"Demo",id:"demo-2",children:[],level:4}],level:3},{value:"UserDefinedMetricsReporter",id:"userdefinedmetricsreporter",children:[{value:"Configurations",id:"configurations-3",children:[],level:4},{value:"Demo",id:"demo-3",children:[],level:4}],level:3}],level:2},{value:"HoodieMetrics",id:"hoodiemetrics",children:[],level:2}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section, we will introduce the ",(0,n.kt)("inlineCode",{parentName:"p"},"MetricsReporter")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," in Hudi. You can view the metrics-related configurations ",(0,n.kt)("a",{parentName:"p",href:"configurations#metrics-configs"},"here"),"."),(0,n.kt)("h2",{id:"metricsreporter"},"MetricsReporter"),(0,n.kt)("p",null,"MetricsReporter provides APIs for reporting ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," to user-specified backends. Currently, the implementations include InMemoryMetricsReporter, JmxMetricsReporter, MetricsGraphiteReporter and DatadogMetricsReporter. Since InMemoryMetricsReporter is only used for testing, we will introduce the other three implementations."),(0,n.kt)("h3",{id:"jmxmetricsreporter"},"JmxMetricsReporter"),(0,n.kt)("p",null,"JmxMetricsReporter is an implementation of JMX reporter, which used to report JMX metrics."),(0,n.kt)("h4",{id:"configurations"},"Configurations"),(0,n.kt)("p",null,"The following is an example of ",(0,n.kt)("inlineCode",{parentName:"p"},"JmxMetricsReporter"),". More detaile configurations can be referenced ",(0,n.kt)("a",{parentName:"p",href:"configurations#jmx"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=JMX\nhoodie.metrics.jmx.host=192.168.0.106\nhoodie.metrics.jmx.port=4001\n")),(0,n.kt)("h4",{id:"demo"},"Demo"),(0,n.kt)("p",null,"As configured above, JmxMetricsReporter will started JMX server on port 4001. We can start a jconsole to connect to 192.168.0.106:4001. Below is an illustration of monitoring Hudi JMX metrics through jconsole."),(0,n.kt)("figure",null,(0,n.kt)("img",{className:"docimage",src:r(94362).Z,alt:"hudi_jxm_metrics.png"})),(0,n.kt)("h3",{id:"metricsgraphitereporter"},"MetricsGraphiteReporter"),(0,n.kt)("p",null,"MetricsGraphiteReporter is an implementation of Graphite reporter, which connects to a Graphite server, and send ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," to it."),(0,n.kt)("h4",{id:"configurations-1"},"Configurations"),(0,n.kt)("p",null,"The following is an example of ",(0,n.kt)("inlineCode",{parentName:"p"},"MetricsGraphiteReporter"),". More detaile configurations can be referenced ",(0,n.kt)("a",{parentName:"p",href:"configurations#graphite"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=GRAPHITE\nhoodie.metrics.graphite.host=192.168.0.106\nhoodie.metrics.graphite.port=2003\nhoodie.metrics.graphite.metric.prefix=<your metrics prefix>\n")),(0,n.kt)("h4",{id:"demo-1"},"Demo"),(0,n.kt)("p",null,"As configured above, assuming a Graphite server is running on host 192.168.0.106 and port 2003, a running Hudi job will connect and report metrics data to it. Below is an illustration of monitoring hudi metrics through Graphite."),(0,n.kt)("figure",null,(0,n.kt)("img",{className:"docimage",src:r(94415).Z,alt:"hudi_graphite_metrics.png"})),(0,n.kt)("h3",{id:"datadogmetricsreporter"},"DatadogMetricsReporter"),(0,n.kt)("p",null,"DatadogMetricsReporter is an implementation of Datadog reporter.\nA reporter which publishes metric values to Datadog monitoring service via Datadog HTTP API."),(0,n.kt)("h4",{id:"configurations-2"},"Configurations"),(0,n.kt)("p",null,"The following is an example of ",(0,n.kt)("inlineCode",{parentName:"p"},"DatadogMetricsReporter"),". More detailed configurations can be referenced ",(0,n.kt)("a",{parentName:"p",href:"configurations#datadog"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=DATADOG\nhoodie.metrics.datadog.api.site=EU # or US\nhoodie.metrics.datadog.api.key=<your api key>\nhoodie.metrics.datadog.metric.prefix=<your metrics prefix>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.api.site")," will set the Datadog API site, which determines whether the requests will be sent to api.datadoghq.eu (EU) or api.datadoghq.com (US). Set this according to your Datadog account settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.api.key")," will set the api key."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.metric.prefix")," will help segregate metrics by setting different prefixes for different jobs. Note that it will use ",(0,n.kt)("inlineCode",{parentName:"li"},".")," to delimit the prefix and the metric name. For example, if the prefix is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"foo"),", then ",(0,n.kt)("inlineCode",{parentName:"li"},"foo.")," will be prepended to the metric name.")),(0,n.kt)("h4",{id:"demo-2"},"Demo"),(0,n.kt)("p",null,"In this demo, we ran a ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," job with ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," turned on and other configurations set properly."),(0,n.kt)("figure",null,(0,n.kt)("img",{className:"docimage",src:r(76748).Z,alt:"hudi_datadog_metrics.png"})),(0,n.kt)("p",null," As shown above, we were able to collect Hudi's action-related metrics like"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.commit.totalScanTime"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.clean.duration"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.index.lookup.duration")),(0,n.kt)("p",{parentName:"li"},"as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"-specific metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.deltastreamer.duration"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.deltastreamer.hiveSyncDuration")))),(0,n.kt)("h3",{id:"userdefinedmetricsreporter"},"UserDefinedMetricsReporter"),(0,n.kt)("p",null,"Allows users to define a custom metrics reporter."),(0,n.kt)("h4",{id:"configurations-3"},"Configurations"),(0,n.kt)("p",null,"The following is an example of ",(0,n.kt)("inlineCode",{parentName:"p"},"UserDefinedMetricsReporter"),". More detailed configurations can be referenced ",(0,n.kt)("a",{parentName:"p",href:"configurations#user-defined-reporter"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.class=test.TestUserDefinedMetricsReporter\n")),(0,n.kt)("h4",{id:"demo-3"},"Demo"),(0,n.kt)("p",null,"In this simple demo, TestMetricsReporter will print all gauges every 10 seconds"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public static class TestUserDefinedMetricsReporter \n    extends AbstractUserDefinedMetricsReporter {\n  private static final Logger log = LogManager.getLogger(DummyMetricsReporter.class);\n\n  private ScheduledExecutorService exec = Executors.newScheduledThreadPool(1, r -> {\n      Thread t = Executors.defaultThreadFactory().newThread(r);\n      t.setDaemon(true);\n      return t;\n  });\n\n  public TestUserDefinedMetricsReporter(Properties props, MetricRegistry registry) {\n    super(props, registry);\n  }\n\n  @Override\n  public void start() {\n    exec.schedule(this::report, 10, TimeUnit.SECONDS);\n  }\n\n  @Override\n  public void report() {\n    this.getRegistry().getGauges().forEach((key, value) -> \n      log.info("key: " + key + " value: " + value.getValue().toString()));\n  }\n\n  @Override\n  public Closeable getReporter() {\n    return null;\n  }\n\n  @Override\n  public void stop() {\n    exec.shutdown();\n  }\n}\n')),(0,n.kt)("h2",{id:"hoodiemetrics"},"HoodieMetrics"),(0,n.kt)("p",null,"Once the Hudi writer is configured with the right table and environment for ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetrics"),", it produces the following ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetrics"),", that aid in debugging hudi tables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Commit Duration")," - The amount of time it took to successfully commit a batch of records"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rollback Duration")," - Similarly, the amount of time taken to undo partial data left over by a failed commit (rollback happens automatically after a failing write)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"File Level metrics")," - Shows the amount of new files added, versions, deleted (cleaned) in each commit"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Record Level Metrics")," - Total records inserted/updated etc per commit"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Partition Level metrics")," - number of partitions upserted (super useful to understand sudden spikes in commit duration)")),(0,n.kt)("p",null,"These ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," can then be plotted on a standard tool like grafana. Below is a sample commit duration chart."),(0,n.kt)("figure",null,(0,n.kt)("img",{className:"docimage",src:r(82641).Z,alt:"hudi_commit_duration.png"})))}d.isMDXComponent=!0},76748:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/2020-05-28-datadog-metrics-demo-fff08d34cd7ef2473f16e9b48dd66793.png"},82641:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/hudi_commit_duration-64b7b65fc946ab2d6b69ffdf6f5bb9b0.png"},94415:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/hudi_graphite_metrics-095040421628091f1e447e385189aa5d.png"},94362:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/hudi_jxm_metrics-477d99943f7bc84f9063e4ce2787cc6c.png"}}]);