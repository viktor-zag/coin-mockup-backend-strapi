"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8378],{78378:(Y,I,t)=>{t.r(I),t.d(I,{E:()=>F,a:()=>$,b:()=>Le});var e=t(92132),f=t(21272),m=t(83997),R=t(8361),S=t(43064),L=t(46462),U=t(66809),y=t(84843),_=t(81621),a=t(98765),g=t(30893),M=t(379),A=t(4181),B=t(50215),x=t(94061),K=t(90151),O=t(68074),N=t(7537),ne=t(18629),re=t(76517),ae=t(80782),oe=t(55356),G=t(85963),ie=t(4198),de=t(38413),T=t(55506),le=t(71389),z=t(17703),w=t(28721),Q=t(82529),ce=t(1927),ge=t(21610),he=t(5194),Z=t(68802),ue=t(84795),X=t(54514),_e=t(98052),Ee=t(46270),b=t(61535),W=t(54894),C=t(12083),me=t(89032),V=t(63891),pe=t(87652);const[fe,J]=(0,me.q)("WebhookEvent"),Me=({children:s})=>{const{formatMessage:n}=(0,W.A)(),{collectionTypes:r,isLoading:h}=(0,Q.u)(),o=f.useMemo(()=>r.some(i=>i.options?.draftAndPublish===!0),[r]),c=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(fe,{isDraftAndPublish:o,children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(R.d,{"aria-hidden":!0,children:c}),h&&(0,e.jsx)(S.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(ye,{"aria-label":c,children:s})]})})},ye=(0,V.Ay)(L.X)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,xe=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},je=({getHeaders:s=xe})=>{const{isDraftAndPublish:n}=J("Headers"),{formatMessage:r}=(0,W.A)(),h=s(n);return(0,e.jsx)(U.r,{children:(0,e.jsxs)(y.N,{children:[(0,e.jsx)(_.e,{children:(0,e.jsx)(a.s,{children:r({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),h.map(o=>["app.utils.publish","app.utils.unpublish"].includes(o?.id??"")?(0,e.jsx)(_.e,{title:r({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id):(0,e.jsx)(_.e,{children:(0,e.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id))]})})},ve=({providedEvents:s})=>{const{isDraftAndPublish:n}=J("Body"),r=s||Pe(n),{values:h,handleChange:o}=(0,b.j7)(),c="events",i=h.events,p=[],j=i.reduce((d,l)=>{const E=l.split(".")[0];return d[E]||(d[E]=[]),d[E].push(l),d},{}),u=({target:{name:d,value:l}})=>{const E=new Set(i);l?E.add(d):E.delete(d),o({target:{name:c,value:Array.from(E)}})},P=({target:{name:d,value:l}})=>{const E=new Set(i);l?r[d].forEach(D=>{p.includes(D)||E.add(D)}):r[d].forEach(D=>E.delete(D)),o({target:{name:c,value:Array.from(E)}})};return(0,e.jsx)(M.f,{children:Object.entries(r).map(([d,l])=>(0,e.jsx)(q,{disabledEvents:p,name:d,events:l,inputValue:j[d],handleSelect:u,handleSelectAll:P},d))})},Pe=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},q=({disabledEvents:s=[],name:n,events:r=[],inputValue:h=[],handleSelect:o,handleSelectAll:c})=>{const{formatMessage:i}=(0,W.A)(),p=r.filter(l=>!s.includes(l)),j=h.length>0,u=h.length===p.length,P=({target:{name:l}})=>{c({target:{name:l,value:!u}})},d=5;return(0,e.jsxs)(y.N,{children:[(0,e.jsx)(_.N,{children:(0,e.jsx)(A.S,{indeterminate:j&&!u,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:P,value:u,children:Oe(n)})}),r.map(l=>(0,e.jsx)(_.N,{children:(0,e.jsx)(B.J,{disabled:s.includes(l),"aria-label":l,name:l,value:h.includes(l),onValueChange:E=>o({target:{name:l,value:E}})})},l)),r.length<d&&(0,e.jsx)(_.N,{colSpan:d-r.length})]})},Oe=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),$={Root:Me,Headers:je,Body:ve,Row:q},be=()=>(0,e.jsxs)($.Root,{children:[(0,e.jsx)($.Headers,{}),(0,e.jsx)($.Body,{})]}),De=()=>{const{formatMessage:s}=(0,W.A)(),{values:n,errors:r}=(0,b.j7)();return(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(R.d,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(x.a,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(b.ED,{validateOnChange:!1,name:"headers",render:({push:h,remove:o})=>(0,e.jsxs)(K.x,{gap:4,children:[n.headers.map((c,i)=>{const p=r.headers?.[i],j=typeof p=="object"?p.key:void 0,u=typeof p=="object"?p.value:void 0;return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsx)(O.E,{col:6,children:(0,e.jsx)(b.D0,{as:Ae,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:j})}),(0,e.jsx)(O.E,{col:6,children:(0,e.jsxs)(m.s,{alignItems:"flex-end",children:[(0,e.jsx)(x.a,{style:{flex:1},children:(0,e.jsx)(b.D0,{as:N.k,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:u})}),(0,e.jsx)(m.s,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:u?0:5,children:(0,e.jsx)(T.yX,{disabled:n.headers.length===1,onClick:()=>o(i),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${c.key}`)}),(0,e.jsx)(O.E,{col:12,children:(0,e.jsx)(ne.Q,{type:"button",onClick:()=>{h({key:"",value:""})},startIcon:(0,e.jsx)(he.A,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},Ae=({name:s,onChange:n,value:r,...h})=>{const{values:{headers:o}}=(0,b.j7)(),[c,i]=f.useState([...ee]);f.useEffect(()=>{const u=ee.filter(P=>!o?.some(d=>d.key!==r&&d.key===P));i(u)},[o,r]);const p=u=>{n({target:{name:s,value:u}})},j=u=>{i(P=>[...P,u]),p(u)};return(0,e.jsx)(re.nP,{...h,onClear:()=>p(""),onChange:p,onCreateOption:j,placeholder:"",value:r,children:c.map(u=>(0,e.jsx)(ae.j,{value:u,children:u},u))})},ee=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Ce=({isPending:s,onCancel:n,response:r})=>{const{statusCode:h,message:o}=r??{},{formatMessage:c}=(0,W.A)();return(0,e.jsx)(x.a,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(K.x,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(O.E,{col:3,children:(0,e.jsx)(g.o,{children:c({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(O.E,{col:3,children:(0,e.jsx)(Te,{isPending:s,statusCode:h})}),(0,e.jsx)(O.E,{col:6,children:s?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:n,type:"button",children:(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(g.o,{textColor:"neutral400",children:c({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(H,{as:Z.A,color:"neutral400"})]})})}):(0,e.jsx)(We,{statusCode:h,message:o})})]})})},H=V.Ay.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,V.AH)`
          path {
            fill: ${s.colors[n]};
          }
        `:""}
`),Te=({isPending:s,statusCode:n})=>{const{formatMessage:r}=(0,W.A)();return s||!n?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(H,{as:ue.A}),(0,e.jsx)(g.o,{children:r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(H,{as:X.A,color:"success700"}),(0,e.jsx)(g.o,{children:r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(H,{as:Z.A,color:"danger700"}),(0,e.jsxs)(g.o,{children:[r({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},We=({statusCode:s,message:n})=>{const{formatMessage:r}=(0,W.A)();return s?s>=200&&s<300?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)(g.o,{textColor:"neutral600",ellipsis:!0,children:r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)(m.s,{maxWidth:(0,T.a8)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(g.o,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Ie=({handleSubmit:s,triggerWebhook:n,isCreating:r,isTriggering:h,triggerResponse:o,data:c})=>{const{formatMessage:i}=(0,W.A)(),[p,j]=f.useState(!1),u=(0,w.p)(be,async()=>(await t.e(3384).then(t.bind(t,63384))).EventsTableEE),P=l=>Object.keys(l).length?Object.entries(l).map(([E,D])=>({key:E,value:D})):[{key:"",value:""}],d=(0,b.Wx)({initialValues:{name:c?.name||"",url:c?.url||"",headers:P(c?.headers||{}),events:c?.events||[]},async onSubmit(l,E){await s(l,E),E.resetForm({values:l})},validationSchema:Se({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return u?(0,e.jsx)(b.QI,{value:d,children:(0,e.jsxs)(T.lV,{children:[(0,e.jsx)(oe.Q,{primaryAction:(0,e.jsxs)(m.s,{gap:2,children:[(0,e.jsx)(G.$,{onClick:()=>{n(),j(!0)},variant:"tertiary",startIcon:(0,e.jsx)(_e.A,{}),disabled:r||h,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(G.$,{startIcon:(0,e.jsx)(X.A,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):c?.name,navigationAction:(0,e.jsx)(ge.N,{as:le.k2,startIcon:(0,e.jsx)(Ee.A,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(ie.s,{children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:4,children:[p&&(0,e.jsx)(Ce,{isPending:h,response:o,onCancel:()=>j(!1)}),(0,e.jsx)(x.a,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(K.x,{gap:6,children:[(0,e.jsx)(O.E,{col:6,children:(0,e.jsx)(b.D0,{as:N.k,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(O.E,{col:12,children:(0,e.jsx)(b.D0,{as:N.k,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(De,{}),(0,e.jsx)(u,{})]})})]})})]})}):null},Re=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,ke=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Se=({formatMessage:s})=>C.Ik().shape({name:C.Yj().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Re,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:C.Yj().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(ke,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:C.RZ(n=>{const r=C.YO();if(n.length===1){const{key:h,value:o}=n[0];if(!h&&!o)return r}return r.of(C.Ik().shape({key:C.Yj().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:C.Yj().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:C.YO()}),se=s=>({...s,headers:s.headers.reduce((n,{key:r,value:h})=>(r!==""&&(n[r]=h),n),{})}),F=()=>{const n=(0,z.W5)("/settings/webhooks/:id")?.params.id,r=n==="create",{replace:h}=(0,z.W6)(),o=(0,T.hN)(),{_unstableFormatAPIError:c,_unstableFormatValidationErrors:i}=(0,T.wq)(),{isLoading:p}=(0,Q.u)(),[j,u]=f.useState(!1),[P,d]=f.useState(),{isLoading:l,webhooks:E,error:D,createWebhook:Ue,updateWebhook:Be,triggerWebhook:Ke}=(0,pe.u)({id:n},{skip:r});f.useEffect(()=>{D&&o({type:"warning",message:c(D)})},[D,o,c]);const we=async()=>{try{u(!0);const k=await Ke(n);if("error"in k){o({type:"warning",message:c(k.error)});return}d(k.data)}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{u(!1)}},$e=async(k,te)=>{try{if(r){const v=await Ue(se(k));if("error"in v){(0,w.x)(v.error)&&v.error.name==="ValidationError"?te.setErrors(i(v.error)):o({type:"warning",message:c(v.error)});return}o({type:"success",message:{id:"Settings.webhooks.created"}}),h(`/settings/webhooks/${v.data.id}`)}else{const v=await Be({id:n,...se(k)});if("error"in v){(0,w.x)(v.error)&&v.error.name==="ValidationError"?te.setErrors(i(v.error)):o({type:"warning",message:c(v.error)});return}o({type:"success",message:{id:"notification.form.success.fields"}})}}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(l||p)return(0,e.jsx)(T.Bl,{});const[He]=E??[];return(0,e.jsxs)(de.g,{children:[(0,e.jsx)(T.x7,{name:"Webhooks"}),(0,e.jsx)(Ie,{data:He,handleSubmit:$e,triggerWebhook:we,isCreating:r,isTriggering:j,triggerResponse:P})]})},Le=Object.freeze(Object.defineProperty({__proto__:null,EditPage:F,ProtectedEditPage:()=>{const s=(0,w.j)(ce.s);return(0,e.jsx)(T.kz,{permissions:s.settings?.webhooks.update,children:(0,e.jsx)(F,{})})}},Symbol.toStringTag,{value:"Module"}))},82529:(Y,I,t)=>{t.d(I,{u:()=>U});var e=t(21272),f=t(55506),m=t(28721);const R=m.n.injectEndpoints({endpoints:y=>({getComponents:y.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:_=>_.data}),getContentTypes:y.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:_=>_.data})}),overrideExisting:!1}),{useGetComponentsQuery:S,useGetContentTypesQuery:L}=R;function U(){const{_unstableFormatAPIError:y}=(0,f.wq)(),_=(0,f.hN)(),a=S(),g=L();e.useEffect(()=>{g.error&&_({type:"warning",message:y(g.error)})},[g.error,y,_]),e.useEffect(()=>{a.error&&_({type:"warning",message:y(a.error)})},[a.error,y,_]);const M=a.isLoading||g.isLoading,A=e.useMemo(()=>(g?.data??[]).filter(x=>x.kind==="collectionType"&&x.isDisplayed),[g?.data]),B=e.useMemo(()=>(g?.data??[]).filter(x=>x.kind!=="collectionType"&&x.isDisplayed),[g?.data]);return{isLoading:M,components:e.useMemo(()=>a?.data??[],[a?.data]),collectionTypes:A,singleTypes:B}}},87652:(Y,I,t)=>{t.d(I,{u:()=>y});var e=t(28721);const f=e.n.injectEndpoints({endpoints:_=>({getWebhooks:_.query({query:a=>({url:`/admin/webhooks/${a?.id??""}`,method:"GET"}),transformResponse:a=>Array.isArray(a.data)?a.data:[a.data],providesTags:(a,g,M)=>typeof M=="object"&&"id"in M?[{type:"Webhook",id:M.id}]:[...a?.map(({id:A})=>({type:"Webhook",id:A}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:_.mutation({query:a=>({url:"/admin/webhooks",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:_.mutation({query:({id:a,...g})=>({url:`/admin/webhooks/${a}`,method:"PUT",data:g}),transformResponse:a=>a.data,invalidatesTags:(a,g,{id:M})=>[{type:"Webhook",id:M}]}),triggerWebhook:_.mutation({query:a=>({url:`/admin/webhooks/${a}/trigger`,method:"POST"}),transformResponse:a=>a.data}),deleteManyWebhooks:_.mutation({query:a=>({url:"/admin/webhooks/batch-delete",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:(a,g,{ids:M})=>M.map(A=>({type:"Webhook",id:A}))})}),overrideExisting:!1}),{useGetWebhooksQuery:m,useCreateWebhookMutation:R,useUpdateWebhookMutation:S,useTriggerWebhookMutation:L,useDeleteManyWebhooksMutation:U}=f,y=(_=void 0,a)=>{const{data:g,isLoading:M,error:A}=m(_,a),[B]=R(),[x]=S(),[K]=L(),[O]=U();return{webhooks:g,isLoading:M,error:A,createWebhook:B,updateWebhook:x,triggerWebhook:K,deleteManyWebhooks:O}}}}]);
