import{j as s}from"./index-c91b1751.js";import{e as p,v as r,S as c,a as l,f as u,L as m,g as x}from"./index-3df7add1.js";import{B as h,U as f,T as g}from"./page-38417304.js";import{S as j}from"./chunk-MZBQPWGD-c414e802.js";const w=({dialog:e})=>{var t;const i=p(),a=r.useCheckIsDialogViewed(e.id,e.updated),o=()=>i(r.updateViewedDialog({dialogId:e.id,updated:e.updated}));return s.jsx(h,{py:"4",children:s.jsxs(c,{direction:["column","row"],justifyContent:"space-between",alignItems:"center",gap:["0","10"],opacity:a?.5:void 0,onClick:o,children:[s.jsx(f,{user:e.human}),s.jsx(g,{w:["100%","60%"],pt:"2",fontSize:"sm",textAlign:["center","right"],whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",dangerouslySetInnerHTML:{__html:((t=e.dialog)==null?void 0:t.message)??"No messages"}})]})})},I=({dialogNavigateTo:e,refetchOnMountOrArgChange:i,limit:a})=>{const{userId:o}=l(),{data:t,isFetching:d}=u({userId:o,limit:a},{refetchOnMountOrArgChange:i});return d?s.jsx(m,{}):s.jsx(c,{divider:s.jsx(j,{}),spacing:"0",children:t==null?void 0:t.map(n=>s.jsx(x,{to:e instanceof Function?e(n):e,children:s.jsx(w,{dialog:n})},n.id))})};export{I as D};
