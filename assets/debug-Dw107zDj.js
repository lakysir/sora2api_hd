import{d as me,u as Oe,a as Ae,ax as Ie,r as S,J as f,b as Re,c as M,o as T,k as t,m as o,t as Ve,e as n,z as p,y as i,B as $e,a5 as ue,p as C,q as O,A as x,$ as Ne,U as qe,L as Be,M as Je,V as Pe,E as _,H as ze}from"./index-BrPOWOUr.js";import{E as Ke,a as Ge}from"./el-tab-pane-AQj16yid.js";import{E as He}from"./el-input-number-oibYRegh.js";import{E as Le}from"./el-progress-DXavHSwF.js";import{E as Me}from"./el-alert-DWlq82Pn.js";import{E as Ye,a as Fe}from"./el-table-column-CdfA6daK.js";import"./el-checkbox-B0iAiAfQ.js";import{E as De,a as Qe}from"./el-descriptions-item-iBidgEXs.js";import{E as We}from"./el-card-DUNJ1nv5.js";import{E as Xe,a as Ze}from"./el-form-item-BRb4NJKR.js";/* empty css                       *//* empty css                 */import{i as et,j as tt,k as at,l as st,n as ot}from"./mirrmart-CpufBZLg.js";import{E as lt,a as nt}from"./index-D4PvqCs3.js";import"./index-DQRmtjtP.js";import"./index-Cqsfnz-F.js";import"./_initCloneObject-DiWWaKgi.js";import"./_baseClone-ZHXTnkMx.js";const rt={class:"p-2"},it={class:"flex items-center justify-between"},dt={class:"flex items-center gap-2"},pt={class:"flex items-center gap-2 mb-3"},ut={class:"font-bold"},mt={class:"flex items-center gap-2 mb-3"},ct={class:"flex items-center gap-2 w-full"},_t={class:"mt-2 flex items-center gap-2"},yt={class:"w-full"},gt={class:"mb-2"},ft={class:"mono"},kt={class:"mt-2"},vt={class:"flex items-center gap-2"},bt={class:"flex items-center gap-2 w-full"},St={class:"mb-2"},Tt={class:"flex justify-end mb-2"},xt={class:"flex justify-end mb-2"},wt={class:"flex justify-end mb-2"},Et={class:"flex justify-end mb-2"},Ut={class:"flex items-center justify-between"},ht={class:"flex items-center gap-2"},jt={key:0,class:"text-xs text-gray-500 mb-2"},Ct=me({name:"DqcFpOpenApiDebug"}),Ot=me({...Ct,setup(At){const V=Oe(),ce=Ae(),P="shuzhi.fpOpenApiDebug.v1",s=Ie({baseUrl:"",authMode:"x-api-key",apiKey:"",taskTypeCode:"",prompt:"",firstImageUrl:"",aspectRatio:"16:9",nFrames:300,jsonText:`{
  "prompt": "一只穿宇航服的猫在月球上缓慢行走，电影级光照，细节丰富",
  "first_image_url": "https://oss.aimh8.com/upload/test.png",
  "aspect_ratio": "16:9",
  "n_frames": 300
}`,page:1,pageSize:20,taskId:""}),w=S(!1),$=S("create"),z=S("py"),K=S([]),E=S(null),Y=S(null),k=S(null),_e=f(()=>{var u,m,c;const a=Y.value,e=(a==null?void 0:a.items)??((u=a==null?void 0:a.data)==null?void 0:u.items)??(a==null?void 0:a.list)??(a==null?void 0:a.rows)??((m=a==null?void 0:a.data)==null?void 0:m.list)??((c=a==null?void 0:a.data)==null?void 0:c.rows)??[];return(Array.isArray(e)?e:[]).map(l=>{const y=String((l==null?void 0:l.task_id)??(l==null?void 0:l.taskId)??(l==null?void 0:l.id)??""),U=String((l==null?void 0:l.task_type_code)??(l==null?void 0:l.taskTypeCode)??(l==null?void 0:l.task_type)??(l==null?void 0:l.taskType)??""),v=Number((l==null?void 0:l.progress)??(l==null?void 0:l.progressPct)??(l==null?void 0:l.progress_pct)??0);return{id:String((l==null?void 0:l.id)??y),task_id:y,task_type_code:U,status:String((l==null?void 0:l.status)??""),progress:Number.isFinite(v)?v:0,upstream_task_id:String((l==null?void 0:l.upstream_task_id)??(l==null?void 0:l.upstreamTaskId)??""),error_message:String((l==null?void 0:l.error_message)??(l==null?void 0:l.errorMessage)??""),create_time:String((l==null?void 0:l.create_time)??(l==null?void 0:l.createTime)??""),update_time:String((l==null?void 0:l.update_time)??(l==null?void 0:l.updateTime)??""),_raw:l}})}),N=S(null),G=S(""),A=f(()=>({baseUrl:s.baseUrl,apiKey:s.apiKey,authMode:s.authMode})),q=()=>`${"https://www.aimh8.com/agent".replace(/\/+$/,"")}/openapi/fpbrowser2api`,F=a=>{if(a==null)return"";try{return JSON.stringify(a,null,2)}catch{return String(a)}},D=f(()=>F(N.value)),ye=f(()=>F(k.value)),j=async a=>{try{await navigator.clipboard.writeText(String(a||"")),_.success("已复制")}catch{_.warning("复制失败，请手动复制")}},Q=()=>String(s.baseUrl||"").trim().replace(/\/+$/,""),ge=()=>{if(Q()||(s.baseUrl=q()),!String(s.apiKey||"").trim())throw new Error("请先填写 API Key")},fe=(a,e)=>{var y,U,v,J;const d=(e==null?void 0:e.message)||String(e),u=Number((e==null?void 0:e.status)||((y=e==null?void 0:e.response)==null?void 0:y.status)||0)||void 0,m=(e==null?void 0:e.data)??((U=e==null?void 0:e.response)==null?void 0:U.data),c=(e==null?void 0:e.url)??((v=e==null?void 0:e.config)==null?void 0:v.url),l=(e==null?void 0:e.method)??((J=e==null?void 0:e.config)==null?void 0:J.method);return{success:!1,error:d,status:u,endpoint:a,method:l,url:c,response:m}},I=async(a,e)=>{w.value=!0,G.value=a;try{ge();const d=await e();return N.value=d,d}catch(d){const u=fe(a,d);return N.value=u,_.warning(u.error),null}finally{w.value=!1}},ke=()=>{try{const a=localStorage.getItem(P);if(!a)return;const e=JSON.parse(a);Object.assign(s,e)}catch{}},W=()=>{try{localStorage.setItem(P,JSON.stringify(s)),_.success("已保存到本地")}catch{_.warning("保存失败")}},ve=()=>{try{localStorage.removeItem(P),_.success("已清空本地")}catch{_.warning("清空失败")}},X=()=>{var d,u,m,c;s.baseUrl=String(((d=V.query)==null?void 0:d.baseUrl)||"")||q(),s.apiKey=String(((u=V.query)==null?void 0:u.apiKey)||"");const a=String(((m=V.query)==null?void 0:m.authMode)||"");a==="authorization"&&(s.authMode="authorization"),a==="x-api-key"&&(s.authMode="x-api-key");const e=String(((c=V.query)==null?void 0:c.taskId)||"");e&&(s.taskId=e),_.success("已从 URL 载入")},be=()=>{ce.push("/dqc_play/fpOpenApi")},Se=async()=>{const a=await I("GET /v1/me",()=>et(A.value));a&&(E.value=a)},Z=async()=>{var m;const a=await I("GET /v1/task-types",()=>tt(A.value)),e=(a==null?void 0:a.task_types)||(a==null?void 0:a.taskTypes)||[],d=Array.isArray(e)?e:[];K.value=d;const u=d.filter(c=>Number(c==null?void 0:c.enabled)===1);!s.taskTypeCode&&u.length&&(s.taskTypeCode=((m=u[0])==null?void 0:m.code)||"")},ee=()=>{const a={},e=String(s.prompt||"").trim();e&&(a.prompt=e);const d=String(s.firstImageUrl||"").trim();d&&(a.first_image_url=d);const u=String(s.aspectRatio||"").trim();u&&(a.aspect_ratio=u);const m=Number(s.nFrames);Number.isNaN(m)||(a.n_frames=m),s.jsonText=JSON.stringify(a,null,2)},Te=()=>{s.taskTypeCode="sora_gen_video",s.prompt="一只穿宇航服的猫在月球上缓慢行走，电影级光照，细节丰富",s.firstImageUrl="https://oss.aimh8.com/upload/test.png",s.aspectRatio="16:9",s.nFrames=300,ee()},xe=()=>{s.jsonText=JSON.stringify({video_url:"https://.../your_video.mp4"},null,2)},we=()=>{try{const a=JSON.parse(String(s.jsonText||"{}"));s.jsonText=JSON.stringify(a,null,2)}catch{_.warning("json 不是合法 JSON")}},Ee=async()=>{if(!String(s.taskTypeCode||"").trim()){_.warning("请选择 task_type_code");return}let a={};try{a=JSON.parse(String(s.jsonText||"{}"))}catch{_.warning("json(最终提交) 不是合法 JSON");return}const e=await I("POST /v1/create-task",()=>at(A.value,{task_type_code:s.taskTypeCode,json:a}));console.log("d",e),e!=null&&e.task_id&&(s.taskId=String(e.task_id),W())},Ue=async()=>{const a=await I("GET /v1/tasks",()=>st(A.value,{page:s.page,page_size:s.pageSize}));a&&(Y.value=a)},te=async()=>{const a=String(s.taskId||"").trim();if(!a){_.warning("task_id 不能为空");return}const e=await I(`GET /v1/tasks/${a}`,()=>ot(A.value,a));e&&(k.value=e)},he=a=>{const e=String((a==null?void 0:a.task_id)??(a==null?void 0:a.taskId)??"").trim();e&&(s.taskId=e,$.value="detail",te())};f(()=>{const a="<YOUR_API_KEY>";return s.authMode==="authorization"?`Authorization: Bearer ${a}`:`x-api-key: ${a}`});const B=f(()=>`${Q()||q()}`),ae=f(()=>`import requests

BASE_URL = "${B.value}"
API_KEY = "<YOUR_API_KEY>"

headers = {
  "${s.authMode==="authorization"?"Authorization":"x-api-key"}": ${s.authMode==="authorization"?'"Bearer " + API_KEY':"API_KEY"},
  "Accept": "application/json",
}

# 1) GET /v1/me
r = requests.get(f"{BASE_URL}/v1/me", headers=headers, timeout=30)
print(r.status_code, r.text)

# 2) GET /v1/task-types
r = requests.get(f"{BASE_URL}/v1/task-types", headers=headers, timeout=30)
print(r.status_code, r.text)

# 3) GET /v1/tasks?page=1&page_size=20
r = requests.get(f"{BASE_URL}/v1/tasks", headers=headers, params={"page": 1, "page_size": 20}, timeout=30)
print(r.status_code, r.text)

# 4) POST /v1/create-task
payload = {
  "task_type_code": "${String(s.taskTypeCode||"sora_gen_video")}",
  "json": ${(()=>{try{return JSON.stringify(JSON.parse(String(s.jsonText||"{}")),null,2)}catch{return'{ "prompt": "一只穿宇航服的猫在月球上缓慢行走，电影级光照，细节丰富", "first_image_url": "https://oss.aimh8.com/upload/test.png", "aspect_ratio": "16:9", "n_frames": 300 }'}})()}
}
r = requests.post(f"{BASE_URL}/v1/create-task", headers={**headers, "Content-Type":"application/json"}, json=payload, timeout=30)
print(r.status_code, r.text)

# 5) POST /v1/create-task（仅传 video_url：创建 sora 视频角色）
payload = {
  "task_type_code": "${String(s.taskTypeCode||"sora_gen_video")}",
  "json": { "video_url": "https://.../your_video.mp4" }
}
r = requests.post(f"{BASE_URL}/v1/create-task", headers={**headers, "Content-Type":"application/json"}, json=payload, timeout=30)
print(r.status_code, r.text)

# 6) GET /v1/tasks/{task_id}
task_id = "${String(s.taskId||"<TASK_ID>")}"
r = requests.get(f"{BASE_URL}/v1/tasks/{task_id}", headers=headers, timeout=30)
print(r.status_code, r.text)
`),se=f(()=>{const a=s.authMode==="authorization"?'.addHeader("Authorization", "Bearer " + apiKey)':'.addHeader("x-api-key", apiKey)',e=(()=>{try{return JSON.stringify({task_type_code:String(s.taskTypeCode||"sora_gen_video"),json:JSON.parse(String(s.jsonText||"{}"))},null,2)}catch{return'{ "task_type_code": "sora_gen_video", "json": { "prompt": "一只穿宇航服的猫在月球上缓慢行走，电影级光照，细节丰富", "first_image_url": "https://oss.aimh8.com/upload/test.png", "aspect_ratio": "16:9", "n_frames": 300 } }'}})(),d=JSON.stringify({task_type_code:String(s.taskTypeCode||"sora_gen_video"),json:{video_url:"https://.../your_video.mp4"}},null,2);return`import okhttp3.*;

public class OpenApiDemo {
  static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

  public static void main(String[] args) throws Exception {
    String baseUrl = "${B.value}";
    String apiKey = "<YOUR_API_KEY>";

    OkHttpClient client = new OkHttpClient();

    // 1) GET /v1/me
    Request meReq = new Request.Builder()
      .url(baseUrl + "/v1/me")
      ${a}
      .addHeader("Accept", "application/json")
      .get()
      .build();
    System.out.println(client.newCall(meReq).execute().body().string());

    // 2) GET /v1/task-types
    Request typesReq = new Request.Builder()
      .url(baseUrl + "/v1/task-types")
      ${a}
      .addHeader("Accept", "application/json")
      .get()
      .build();
    System.out.println(client.newCall(typesReq).execute().body().string());

    // 3) GET /v1/tasks?page=1&page_size=20
    HttpUrl listUrl = HttpUrl.parse(baseUrl + "/v1/tasks").newBuilder()
      .addQueryParameter("page", "1")
      .addQueryParameter("page_size", "20")
      .build();
    Request listReq = new Request.Builder()
      .url(listUrl)
      ${a}
      .addHeader("Accept", "application/json")
      .get()
      .build();
    System.out.println(client.newCall(listReq).execute().body().string());

    // 4) POST /v1/create-task
    String postBody = ${JSON.stringify(e)};
    Request postReq = new Request.Builder()
      .url(baseUrl + "/v1/create-task")
      ${a}
      .addHeader("Accept", "application/json")
      .post(RequestBody.create(postBody, JSON))
      .build();
    System.out.println(client.newCall(postReq).execute().body().string());

    // 5) POST /v1/create-task（仅传 video_url：创建 sora 视频角色）
    String postBody2 = ${JSON.stringify(d)};
    Request postReq2 = new Request.Builder()
      .url(baseUrl + "/v1/create-task")
      ${a}
      .addHeader("Accept", "application/json")
      .post(RequestBody.create(postBody2, JSON))
      .build();
    System.out.println(client.newCall(postReq2).execute().body().string());

    // 6) GET /v1/tasks/{task_id}
    String taskId = "${String(s.taskId||"<TASK_ID>")}";
    Request detailReq = new Request.Builder()
      .url(baseUrl + "/v1/tasks/" + taskId)
      ${a}
      .addHeader("Accept", "application/json")
      .get()
      .build();
    System.out.println(client.newCall(detailReq).execute().body().string());
  }
}
`}),oe=f(()=>{const a=s.authMode==="authorization"?'{"Authorization": "Bearer " + apiKey, "Accept": "application/json"}':'{"x-api-key": apiKey, "Accept": "application/json"}',e=(()=>{try{return JSON.stringify({task_type_code:String(s.taskTypeCode||"sora_gen_video"),json:JSON.parse(String(s.jsonText||"{}"))},null,2)}catch{return'{ "task_type_code": "sora_gen_video", "json": { "prompt": "一只穿宇航服的猫在月球上缓慢行走，电影级光照，细节丰富", "first_image_url": "https://oss.aimh8.com/upload/test.png", "aspect_ratio": "16:9", "n_frames": 300 } }'}})();return`// fetch 版本
const baseUrl = "${B.value}";
const apiKey = "<YOUR_API_KEY>";
const headers = ${a};

// 1) GET /v1/me
console.log(await (await fetch(baseUrl + "/v1/me", { headers })).json());

// 2) GET /v1/task-types
console.log(await (await fetch(baseUrl + "/v1/task-types", { headers })).json());

// 3) GET /v1/tasks?page=1&page_size=20
const listUrl = new URL(baseUrl + "/v1/tasks");
listUrl.searchParams.set("page", "1");
listUrl.searchParams.set("page_size", "20");
console.log(await (await fetch(listUrl, { headers })).json());

// 4) POST /v1/create-task
const body = ${e};
console.log(await (await fetch(baseUrl + "/v1/create-task", {
  method: "POST",
  headers: { ...headers, "Content-Type": "application/json" },
  body: JSON.stringify(body),
})).json());

// 5) POST /v1/create-task（仅传 video_url：创建 sora 视频角色）
const body2 = {
  task_type_code: "${String(s.taskTypeCode||"sora_gen_video")}",
  json: { video_url: "https://.../your_video.mp4" },
};
console.log(await (await fetch(baseUrl + "/v1/create-task", {
  method: "POST",
  headers: { ...headers, "Content-Type": "application/json" },
  body: JSON.stringify(body2),
})).json());

// 6) GET /v1/tasks/{task_id}
const taskId = "${String(s.taskId||"<TASK_ID>")}";
console.log(await (await fetch(baseUrl + "/v1/tasks/" + encodeURIComponent(taskId), { headers })).json());

// axios 版本（可选）
// import axios from "axios";
// const r = await axios.get(baseUrl + "/v1/me", { headers });
// console.log(r.data);
`}),le=f(()=>{const a=B.value,e=s.authMode==="authorization"?'-H "Authorization: Bearer <YOUR_API_KEY>"':'-H "x-api-key: <YOUR_API_KEY>"',d=(()=>{try{return JSON.stringify({task_type_code:String(s.taskTypeCode||"sora_gen_video"),json:JSON.parse(String(s.jsonText||"{}"))},null,2)}catch{return'{ "task_type_code": "sora_gen_video", "json": { "prompt": "一只穿宇航服的猫在月球上缓慢行走，电影级光照，细节丰富", "first_image_url": "https://oss.aimh8.com/upload/test.png", "aspect_ratio": "16:9", "n_frames": 300 } }'}})(),u=JSON.stringify({task_type_code:String(s.taskTypeCode||"sora_gen_video"),json:{video_url:"https://.../your_video.mp4"}},null,2),m=String(s.taskId||"<TASK_ID>");return`# 1) GET /v1/me
curl -sS ${e} -H "Accept: application/json" "${a}/v1/me"

# 2) GET /v1/task-types
curl -sS ${e} -H "Accept: application/json" "${a}/v1/task-types"

# 3) GET /v1/tasks
curl -sS ${e} -H "Accept: application/json" "${a}/v1/tasks?page=1&page_size=20"

# 4) POST /v1/create-task
curl -sS ${e} -H "Accept: application/json" -H "Content-Type: application/json" \\
  -d '${d.replace(/'/g,"'\\''")}' \\
  "${a}/v1/create-task"

# 5) POST /v1/create-task（仅传 video_url：创建 sora 视频角色）
curl -sS ${e} -H "Accept: application/json" -H "Content-Type: application/json" \\
  -d '${u.replace(/'/g,"'\\''")}' \\
  "${a}/v1/create-task"

# 6) GET /v1/tasks/{task_id}
curl -sS ${e} -H "Accept: application/json" "${a}/v1/tasks/${encodeURIComponent(m)}"
`});return Re(()=>{s.baseUrl=q(),ke(),X()}),(a,e)=>{const d=$e,u=Ve,m=Ze,c=nt,l=lt,y=Xe,U=We,v=Qe,J=De,g=Ge,b=Fe,je=Ne,ne=Ye,R=Pe,H=qe,L=Me,re=Le,ie=He,de=Ke;return T(),M("div",rt,[t(U,{shadow:"never",class:"mb-3"},{header:o(()=>[i("div",it,[e[24]||(e[24]=i("div",{class:"font-bold"},"fpbrowser2api OpenAPI 调试台",-1)),i("div",dt,[t(d,{plain:"",onClick:be},{default:o(()=>e[20]||(e[20]=[p("返回接口列表")])),_:1}),t(d,{plain:"",onClick:X},{default:o(()=>e[21]||(e[21]=[p("从 URL 载入参数")])),_:1}),t(d,{plain:"",onClick:W},{default:o(()=>e[22]||(e[22]=[p("保存到本地")])),_:1}),t(d,{type:"danger",plain:"",onClick:ve},{default:o(()=>e[23]||(e[23]=[p("清空本地")])),_:1})])])]),default:o(()=>[t(y,{"label-width":"140px",class:"grid grid-cols-1 lg:grid-cols-2 gap-x-6"},{default:o(()=>[t(m,{label:"OpenAPI Base URL"},{default:o(()=>[t(u,{modelValue:n(s).baseUrl,"onUpdate:modelValue":e[0]||(e[0]=r=>n(s).baseUrl=r),placeholder:"例如：https://www.aimh8.com/agent/openapi/fpbrowser2api"},null,8,["modelValue"])]),_:1}),t(m,{label:"鉴权方式"},{default:o(()=>[t(l,{modelValue:n(s).authMode,"onUpdate:modelValue":e[1]||(e[1]=r=>n(s).authMode=r)},{default:o(()=>[t(c,{value:"x-api-key"},{default:o(()=>e[25]||(e[25]=[p("x-api-key")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"API Key"},{default:o(()=>[t(u,{modelValue:n(s).apiKey,"onUpdate:modelValue":e[2]||(e[2]=r=>n(s).apiKey=r),placeholder:"请输入 API Key","show-password":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(U,{shadow:"never",class:"mb-3"},{header:o(()=>e[26]||(e[26]=[i("div",{class:"font-bold"},"接口调试",-1)])),default:o(()=>[t(de,{modelValue:n($),"onUpdate:modelValue":e[17]||(e[17]=r=>ue($)?$.value=r:null)},{default:o(()=>[t(g,{label:"我的信息 GET /v1/me",name:"me"},{default:o(()=>[i("div",pt,[t(d,{type:"primary",loading:n(w),onClick:Se},{default:o(()=>e[27]||(e[27]=[p("发送请求")])),_:1},8,["loading"])]),t(J,{column:1,border:""},{default:o(()=>{var r,h;return[((r=n(E))==null?void 0:r.balance)!=null?(T(),C(v,{key:0,label:"当前余额"},{default:o(()=>[i("span",ut,x(n(E).balance),1)]),_:1})):O("",!0),(h=n(E))!=null&&h.client?(T(),C(v,{key:1,label:"限速"},{default:o(()=>[i("span",null," qps="+x(n(E).client.qps)+" / burst="+x(n(E).client.burst)+" / create_task_concurrency="+x(n(E).client.create_task_concurrency),1)]),_:1})):O("",!0),n(E)?O("",!0):(T(),C(v,{key:2,label:"提示"},{default:o(()=>e[28]||(e[28]=[p(" 点击“发送请求”获取结果（响应会显示在下方“响应结果”区域）。 ")])),_:1}))]}),_:1})]),_:1}),t(g,{label:"任务类型 GET /v1/task-types",name:"types"},{default:o(()=>[i("div",mt,[t(d,{type:"primary",loading:n(w),onClick:Z},{default:o(()=>e[29]||(e[29]=[p("发送请求")])),_:1},8,["loading"])]),t(ne,{data:n(K),size:"small",border:"",height:"420"},{default:o(()=>[t(b,{label:"name",prop:"name","min-width":"180","show-overflow-tooltip":""}),t(b,{label:"code",prop:"code","min-width":"220","show-overflow-tooltip":""}),t(b,{label:"enabled",prop:"enabled",width:"100"},{default:o(r=>[t(je,{type:Number(r.row.enabled)===1?"success":"info"},{default:o(()=>[p(x(Number(r.row.enabled)===1?"1":String(r.row.enabled??0)),1)]),_:2},1032,["type"])]),_:1})]),_:1},8,["data"])]),_:1}),t(g,{label:"创建任务 POST /v1/create-task",name:"create"},{default:o(()=>[t(y,{"label-width":"140px"},{default:o(()=>[t(m,{label:"task_type_code"},{default:o(()=>[i("div",ct,[t(H,{modelValue:n(s).taskTypeCode,"onUpdate:modelValue":e[3]||(e[3]=r=>n(s).taskTypeCode=r),filterable:"",placeholder:"先加载 task-types",class:"flex-1"},{default:o(()=>[(T(!0),M(Be,null,Je(n(K),r=>(T(),C(R,{key:r.code,label:`${r.name} (${r.code})`,value:r.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),t(d,{loading:n(w),onClick:Z},{default:o(()=>e[30]||(e[30]=[p("GET /v1/task-types")])),_:1},8,["loading"])])]),_:1}),t(m,{label:"prompt"},{default:o(()=>[t(u,{modelValue:n(s).prompt,"onUpdate:modelValue":e[4]||(e[4]=r=>n(s).prompt=r),type:"textarea",rows:4,placeholder:"文本提示词"},null,8,["modelValue"])]),_:1}),t(m,{label:"first_image_url"},{default:o(()=>[t(u,{modelValue:n(s).firstImageUrl,"onUpdate:modelValue":e[5]||(e[5]=r=>n(s).firstImageUrl=r),placeholder:"https://..."},null,8,["modelValue"])]),_:1}),t(m,{label:"aspect_ratio"},{default:o(()=>[t(H,{modelValue:n(s).aspectRatio,"onUpdate:modelValue":e[6]||(e[6]=r=>n(s).aspectRatio=r),placeholder:"请选择"},{default:o(()=>[t(R,{label:"16:9",value:"16:9"}),t(R,{label:"9:16",value:"9:16"})]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"n_frames"},{default:o(()=>[t(H,{modelValue:n(s).nFrames,"onUpdate:modelValue":e[7]||(e[7]=r=>n(s).nFrames=r),placeholder:"请选择"},{default:o(()=>[t(R,{label:"300",value:300}),t(R,{label:"450",value:450})]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"json(最终提交)"},{default:o(()=>[t(u,{modelValue:n(s).jsonText,"onUpdate:modelValue":e[8]||(e[8]=r=>n(s).jsonText=r),type:"textarea",rows:8,class:"mono"},null,8,["modelValue"]),e[37]||(e[37]=i("div",{class:"text-xs text-gray-500 mt-1"}," 点击“从表单生成 JSON”可覆盖该内容；也可以直接手工编辑。 ",-1)),t(L,{type:"info",closable:!1,"show-icon":"",class:"mt-2",title:"/v1/create-task 的 json 字段用法"},{default:o(()=>e[31]||(e[31]=[i("div",{class:"text-xs leading-5"},[i("div",null,[p(" 1) 常规生成视频：在 "),i("span",{class:"mono"},"json"),p(" 中按需传 "),i("span",{class:"mono"},"prompt"),p(" / "),i("span",{class:"mono"},"first_image_url"),p(" / "),i("span",{class:"mono"},"aspect_ratio"),p(" / "),i("span",{class:"mono"},"n_frames"),p(" 等参数（以服务端任务类型定义为准）。 ")]),i("div",{class:"mt-1"},[p(" 2) "),i("strong",null,"创建 Sora 视频角色"),p("：可在 "),i("span",{class:"mono"},"json"),p(" 中"),i("strong",null,"只传"),i("span",{class:"mono"},"video_url"),p("，例如： "),i("span",{class:"mono"},'{ "video_url": "https://.../your_video.mp4" }')])],-1)])),_:1}),i("div",_t,[t(d,{plain:"",onClick:ee},{default:o(()=>e[32]||(e[32]=[p("从表单生成 JSON")])),_:1}),t(d,{plain:"",disabled:n(s).taskTypeCode!=="sora_gen_video",onClick:Te},{default:o(()=>e[33]||(e[33]=[p("填充 sora 示例")])),_:1},8,["disabled"]),t(d,{plain:"",onClick:xe},{default:o(()=>e[34]||(e[34]=[p("填充 video_url 示例(创建角色)")])),_:1}),t(d,{plain:"",onClick:we},{default:o(()=>e[35]||(e[35]=[p("格式化")])),_:1}),t(d,{type:"primary",loading:n(w),onClick:Ee},{default:o(()=>e[36]||(e[36]=[p("提交任务")])),_:1},8,["loading"])]),e[38]||(e[38]=i("div",{class:"text-xs text-red-600 mt-2"},[p(" 注意：点击“提交任务”后会"),i("strong",null,"先扣费"),p("（无论任务最终成功/失败）。若任务最终状态为 "),i("span",{class:"mono"},"failed"),p("， 系统会在你通过“任务详情查询/轮询”（GET "),i("span",{class:"mono"},"/v1/tasks/{task_id}"),p("）发现失败时"),i("strong",null,"自动退回本次扣费"),p("（仅一次）。 ")],-1))]),_:1}),n(k)?(T(),C(m,{key:0,label:"任务进度"},{default:o(()=>[i("div",yt,[i("div",gt,[e[39]||(e[39]=i("div",{class:"text-xs text-gray-500"},"task_id",-1)),i("div",ft,x(n(s).taskId||"-"),1)]),t(re,{percentage:Number(n(k).progress||0)},null,8,["percentage"]),i("div",kt,"状态："+x(n(k).status||"-"),1)])]),_:1})):O("",!0)]),_:1})]),_:1}),t(g,{label:"任务列表 GET /v1/tasks",name:"list"},{default:o(()=>[t(y,{"label-width":"140px"},{default:o(()=>[t(m,{label:"page / page_size"},{default:o(()=>[i("div",vt,[t(ie,{modelValue:n(s).page,"onUpdate:modelValue":e[9]||(e[9]=r=>n(s).page=r),min:1,max:99999,"controls-position":"right"},null,8,["modelValue"]),t(ie,{modelValue:n(s).pageSize,"onUpdate:modelValue":e[10]||(e[10]=r=>n(s).pageSize=r),min:1,max:200,"controls-position":"right"},null,8,["modelValue"]),t(d,{type:"primary",loading:n(w),onClick:Ue},{default:o(()=>e[40]||(e[40]=[p("查询")])),_:1},8,["loading"])])]),_:1})]),_:1}),t(ne,{data:n(_e),border:"",height:"420"},{default:o(()=>[t(b,{label:"id",prop:"id",width:"90"}),t(b,{label:"task_id",prop:"task_id","min-width":"220","show-overflow-tooltip":""}),t(b,{label:"task_type_code",prop:"task_type_code",width:"200"}),t(b,{label:"status",prop:"status",width:"120"}),t(b,{label:"progress",prop:"progress",width:"110"}),t(b,{label:"操作",width:"140"},{default:o(r=>[t(d,{link:"",type:"primary",onClick:h=>he(r.row)},{default:o(()=>e[41]||(e[41]=[p("查看详情")])),_:2},1032,["onClick"]),t(d,{link:"",type:"primary",onClick:h=>j(String(r.row.task_id||""))},{default:o(()=>e[42]||(e[42]=[p("复制ID")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),t(g,{label:"任务详情 GET /v1/tasks/{task_id}",name:"detail"},{default:o(()=>{var r,h,pe;return[t(y,{"label-width":"140px"},{default:o(()=>[t(m,{label:"task_id"},{default:o(()=>[i("div",bt,[t(u,{modelValue:n(s).taskId,"onUpdate:modelValue":e[11]||(e[11]=Ce=>n(s).taskId=Ce),placeholder:"请输入 task_id",class:"flex-1"},null,8,["modelValue"]),t(d,{type:"primary",loading:n(w),onClick:te},{default:o(()=>e[43]||(e[43]=[p("查询")])),_:1},8,["loading"])]),e[44]||(e[44]=i("div",{class:"text-xs text-red-600 mt-2"},[p(" 提示：如果查询到任务状态为 "),i("span",{class:"mono"},"failed"),p("，服务端会在本次查询过程中"),i("strong",null,"自动退费"),p("（仅一次）。 ")],-1))]),_:1})]),_:1}),(r=n(k))!=null&&r.error?(T(),C(L,{key:0,type:"error",closable:!1,title:String(n(k).error),class:"mb-2"},null,8,["title"])):O("",!0),t(re,{percentage:Number(((h=n(k))==null?void 0:h.progress)||0),class:"mb-2"},null,8,["percentage"]),i("div",St,"状态："+x(((pe=n(k))==null?void 0:pe.status)||"-"),1),t(u,{"model-value":n(ye),type:"textarea",rows:14,readonly:"",class:"mono"},null,8,["model-value"])]}),_:1}),t(g,{label:"代码示例",name:"code"},{default:o(()=>[t(L,{type:"info",closable:!1,title:"示例代码会根据当前 Base URL / API Key / 鉴权方式自动生成，可直接复制使用。",class:"mb-2"}),t(de,{modelValue:n(z),"onUpdate:modelValue":e[16]||(e[16]=r=>ue(z)?z.value=r:null)},{default:o(()=>[t(g,{label:"Python",name:"py"},{default:o(()=>[i("div",Tt,[t(d,{size:"small",onClick:e[12]||(e[12]=r=>j(n(ae)))},{default:o(()=>e[45]||(e[45]=[p("复制")])),_:1})]),t(u,{"model-value":n(ae),type:"textarea",rows:18,readonly:"",class:"mono"},null,8,["model-value"])]),_:1}),t(g,{label:"Java(OkHttp)",name:"java"},{default:o(()=>[i("div",xt,[t(d,{size:"small",onClick:e[13]||(e[13]=r=>j(n(se)))},{default:o(()=>e[46]||(e[46]=[p("复制")])),_:1})]),t(u,{"model-value":n(se),type:"textarea",rows:18,readonly:"",class:"mono"},null,8,["model-value"])]),_:1}),t(g,{label:"JS(fetch/axios)",name:"js"},{default:o(()=>[i("div",wt,[t(d,{size:"small",onClick:e[14]||(e[14]=r=>j(n(oe)))},{default:o(()=>e[47]||(e[47]=[p("复制")])),_:1})]),t(u,{"model-value":n(oe),type:"textarea",rows:18,readonly:"",class:"mono"},null,8,["model-value"])]),_:1}),t(g,{label:"cURL",name:"curl"},{default:o(()=>[i("div",Et,[t(d,{size:"small",onClick:e[15]||(e[15]=r=>j(n(le)))},{default:o(()=>e[48]||(e[48]=[p("复制")])),_:1})]),t(u,{"model-value":n(le),type:"textarea",rows:18,readonly:"",class:"mono"},null,8,["model-value"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(U,{shadow:"never"},{header:o(()=>[i("div",Ut,[e[51]||(e[51]=i("div",{class:"font-bold"},"响应结果（当前）",-1)),i("div",ht,[t(d,{size:"small",onClick:e[18]||(e[18]=r=>j(n(D)))},{default:o(()=>e[49]||(e[49]=[p("复制")])),_:1}),t(d,{size:"small",plain:"",onClick:e[19]||(e[19]=r=>N.value=null)},{default:o(()=>e[50]||(e[50]=[p("清空")])),_:1})])])]),default:o(()=>[n(G)?(T(),M("div",jt,"最后调用："+x(n(G)),1)):O("",!0),t(u,{"model-value":n(D),type:"textarea",rows:16,readonly:"",class:"mono"},null,8,["model-value"])]),_:1})])}}}),Qt=ze(Ot,[["__scopeId","data-v-246af177"]]);export{Qt as default};
