import{j as s}from"./index-6a72a591.js";import{d as p,v as n,e as l,L as u}from"./index-20740df3.js";import{a as m,S as c,U as x,T as h,L as f}from"./page-6af04b3b.js";import{u as j}from"./use-app-params-92a9fe39.js";import{S as g}from"./chunk-MZBQPWGD-a3dd585e.js";const w=({dialog:e})=>{var t;const i=p(),a=n.useCheckIsDialogViewed(e.id,e.updated),o=()=>i(n.updateViewedDialog({dialogId:e.id,updated:e.updated}));return s.jsx(m,{py:"4",children:s.jsxs(c,{direction:["column","row"],justifyContent:"space-between",alignItems:"center",gap:["0","10"],opacity:a?.5:void 0,onClick:o,children:[s.jsx(x,{user:e.human}),s.jsx(h,{w:["100%","60%"],pt:"2",fontSize:"sm",textAlign:["center","right"],whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",dangerouslySetInnerHTML:{__html:((t=e.dialog)==null?void 0:t.message)??"No messages"}})]})})},y=({dialogNavigateTo:e,refetchOnMountOrArgChange:i,limit:a})=>{const{userId:o}=j(),{data:t,isFetching:d}=l({userId:o,limit:a},{refetchOnMountOrArgChange:i});return d?s.jsx(f,{}):s.jsx(c,{divider:s.jsx(g,{}),spacing:"0",children:t==null?void 0:t.map(r=>s.jsx(u,{to:e instanceof Function?e(r):e,children:s.jsx(w,{dialog:r})},r.id))})};export{y as D};
