import{r as h,j as e}from"./index-944a0c3f.js";import{P as D}from"./page-ee67c78d.js";import{i as E,j as $,k as G,B as f,a as j,u as b,e as k,l as L,v as M,m as U,n as P,P as V,S as N}from"./index-e276ecd0.js";import{S as O,U as F,M as H}from"./message-list-9f0713d3.js";import{c as w,I}from"./chunk-DEQZ7DVA-da17cced.js";function Q(s,t={}){const{ssr:o=!0,fallback:n}=t,{getWindow:r}=E(),a=Array.isArray(s)?s:[s];let i=Array.isArray(n)?n:[n];i=i.filter(c=>c!=null);const[l,u]=h.useState(()=>a.map((c,p)=>({media:c,matches:o?!!i[p]:r().matchMedia(c).matches})));return h.useEffect(()=>{const c=r();u(a.map(d=>({media:d,matches:c.matchMedia(d).matches})));const p=a.map(d=>c.matchMedia(d)),g=d=>{u(v=>v.slice().map(m=>m.media===d.media?{...m,matches:d.matches}:m))};return p.forEach(d=>{typeof d.addListener=="function"?d.addListener(g):d.addEventListener("change",g)}),()=>{p.forEach(d=>{typeof d.removeListener=="function"?d.removeListener(g):d.removeEventListener("change",g)})}},[r]),l.map(c=>c.matches)}function W(s){const{breakpoint:t,hide:o,children:n,ssr:r}=s,[a]=Q(t,{ssr:r});return(o?!a:a)?n:null}var y=(s,t)=>{var o,n;return(n=(o=s==null?void 0:s.breakpoints)==null?void 0:o[t])!=null?n:t};function Z(s){const{breakpoint:t="",below:o,above:n}=s,r=$(),a=y(r,o),i=y(r,n);let l=t;return a?l=`(max-width: ${a})`:i&&(l=`(min-width: ${i})`),l}function x(s){const{children:t,ssr:o}=s,n=Z(s);return e.jsx(W,{breakpoint:n,ssr:o,children:t})}x.displayName="Show";const R=()=>{const[s,t]=h.useState(),[o,n]=h.useState(null),r=h.useMemo(()=>G(s),[s]),a=h.useMemo(()=>r.filter(({fromId:i})=>!o||i.toString()===o),[r,o]);return{setMessages:t,photos:a,filterByUserId:o,setFilterByUserId:n,photosCount:r.length}},S=({onClick:s,pressed:t,photosCount:o,loading:n})=>e.jsxs(f,{colorScheme:"blue",variant:t?"solid":"outline",onClick:s,isDisabled:!t&&o<1,isLoading:n,loadingText:"Gallery",spinnerPlacement:"end",children:["Gallery (",o,")"]});var T=w({displayName:"ArrowLeftIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),e.jsx("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})}),_=w({displayName:"ArrowRightIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),e.jsx("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"})]})});const A=({onInterlocutorChanged:s})=>{const{userId:t,interlocutorId:o}=j(),n=b(),r=k(),{data:a}=L({userId:t,interlocutorId:o}),i=l=>{const u=a==null?void 0:a.next;u&&(n(`/user/${t}/dialog/${u.humanId}`,{replace:!0}),s==null||s(l),r(M.updateViewedDialog({dialogId:u.dialog.id,updated:u.dialog.updated})))};return e.jsx(I,{"aria-label":"Previous dialog",icon:e.jsx(_,{}),isDisabled:!(a!=null&&a.next),onClick:i})},C=({onInterlocutorChanged:s})=>{const{userId:t,interlocutorId:o}=j(),n=b(),r=k(),{data:a}=L({userId:t,interlocutorId:o}),i=l=>{const u=a==null?void 0:a.prev;u&&(n(`/user/${t}/dialog/${u.humanId}`,{replace:!0}),s==null||s(l),r(M.updateViewedDialog({dialogId:u.dialog.id,updated:u.dialog.updated})))};return e.jsx(I,{"aria-label":"Previous dialog",icon:e.jsx(T,{}),isDisabled:!(a!=null&&a.prev),onClick:i})},z=({children:s})=>e.jsx(x,{above:"md",children:s}),J=h.memo(z),K=({galleryOpen:s=!1,handleFilterPhotos:t,photosCount:o,onInterlocutorChanged:n,loadingPhotos:r,children:a})=>{const{userId:i,interlocutorId:l}=j(),u=b(),{data:c,isLoading:p}=U({userId:i,interlocutorId:l}),g=h.useCallback(()=>u(`/user/${c==null?void 0:c.id}`,{replace:!0}),[u,c==null?void 0:c.id]),d=()=>u(`/user/${i}`);return e.jsxs(O,{children:[e.jsx(F,{user:c,loading:p,leftSlot:e.jsx(x,{above:"md",children:e.jsx(C,{onInterlocutorChanged:n})}),rightSlot:e.jsx(x,{above:"md",children:e.jsx(A,{onInterlocutorChanged:n})}),onClick:g,childrenWrapper:J,children:e.jsxs(P,{justify:"center",children:[e.jsx(f,{onClick:d,children:"Back"}),e.jsx(S,{pressed:s,onClick:t,photosCount:o,loading:r})]})}),a]})},X=({showOnlyPhotos:s,handleFilterPhotos:t,photosCount:o,onInterlocutorChanged:n,loadingPhotos:r})=>{const{userId:a}=j(),i=b(),l=()=>i(`/user/${a}`);return e.jsxs(V,{display:"flex",justifyContent:"space-between",pos:"fixed",bottom:"0",left:"0",right:"0",gap:"3",py:"7",zIndex:"1",bg:"#fff",children:[e.jsx(C,{onInterlocutorChanged:n}),e.jsxs(N,{direction:"row",children:[e.jsx(f,{onClick:l,children:"Back"}),e.jsx(S,{pressed:s,onClick:t,photosCount:o,loading:r})]}),e.jsx(A,{onInterlocutorChanged:n})]})},te=()=>{const{userId:s,interlocutorId:t}=j(),{photos:o,photosCount:n,filterByUserId:r,setFilterByUserId:a,setMessages:i}=R(),[l,u]=h.useState(!1),[c,p]=h.useState(!0),g=()=>u(()=>!l),d=()=>{p(!0),i([])},v=h.useCallback(B=>{i(B),p(!1)},[i]),m=h.useCallback(()=>p(!0),[]);return e.jsx(e.Fragment,{children:e.jsx(D,{header:e.jsx(K,{galleryOpen:l,handleFilterPhotos:g,photosCount:n,onInterlocutorChanged:d,loadingPhotos:c,children:l&&e.jsxs(P,{justify:"center",mt:3,children:[e.jsx(f,{colorScheme:"blue",variant:r===t?"solid":"outline",onClick:()=>{if(r===t)return a(null);t&&a(t)},children:"Interlocutor"}),e.jsx(f,{colorScheme:"blue",variant:r===s?"solid":"outline",onClick:()=>{if(r===s)return a(null);s&&a(s)},children:"User"})]})}),footer:e.jsx(x,{below:"md",children:e.jsx(X,{showOnlyPhotos:l,handleFilterPhotos:g,photosCount:n,onInterlocutorChanged:d,loadingPhotos:c})}),children:e.jsx(H,{onMessageListLoadEnded:v,onMessageListLoadStarted:m,galleryPhotos:o,galleryOpen:l})})})};export{te as default};
