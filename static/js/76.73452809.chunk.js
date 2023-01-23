"use strict";(self.webpackChunkts_spa_cb=self.webpackChunkts_spa_cb||[]).push([[76],{2076:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var r=n(2791),s=n(3153),i=n(7237),o=n(9439),a=n(1087),c=n(1889),l=n(4554),u=n(890),x=n(3471),p=n(7767),f=n(8266),d=n(376),h=n(8264),g=n(3329),Z=function(t){var e=t.articleInfo,n=e.imageUrl,i=e.title,Z=e.summary,j=e.updatedAt,m=e.id,v=(0,s.C)((function(t){return t.filter})).value,b=(0,r.useState)(!0),w=(0,o.Z)(b,2),y=w[0],C=w[1],k=v.toLowerCase().split(" ");return(0,g.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,g.jsxs)(p.Z,{variant:"outlined",sx:{height:"530px",borderColor:"#EAEAEA",borderRadius:"5px"},children:[(0,g.jsxs)(a.rU,{style:{textDecoration:"none",color:"inherit"},to:{pathname:"/articles/".concat(m)},children:[(0,g.jsx)(f.Z,{sx:{mb:"25px"},children:(0,g.jsx)(x.Z,{ratio:"2",children:(0,g.jsx)("img",{src:n,loading:"lazy",alt:i})})}),(0,g.jsxs)(l.Z,{sx:{display:"flex",mb:"24px"},children:[(0,g.jsx)(d.Z,{sx:{color:"#363636"}}),(0,g.jsx)(u.Z,{sx:{ml:"8px",color:"#363636"},children:new Date(j).toDateString()})]}),(0,g.jsx)(u.Z,{variant:"h2",sx:{fontFamily:"Montserrat",fontWeight:400,fontSize:"24px",lineHeight:1.2,mb:"20px"},children:i.toLowerCase().split(" ").map((function(t,e){return k.includes(t)?(0,g.jsx)("span",{style:{backgroundColor:"yellow"},children:t+" "},e):" "+t+" "}))}),(0,g.jsx)(u.Z,{sx:{fontFamily:"Montserrat",fontWeight:400,fontSize:"16px",lineHeight:1.2,mb:"20px"},children:y?Z.slice(0,100):Z.toLowerCase().split(" ").map((function(t,e){return k.includes(t)?(0,g.jsx)("span",{style:{backgroundColor:"yellow"},children:t},e):" "+t+" "}))})]}),(0,g.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",gap:"6px",color:"000",fontSize:"16px",fontWeight:600,cursor:"pointer"},onClick:function(){C(!y)},children:[y?"...read more":" show less",(0,g.jsx)(h.Z,{sx:{color:"#363636",fontSize:"15px"}})]})]})})},j=n(7924),m=function(){var t=(0,s.C)((function(t){return t.filter})).value,e=(0,s.C)((function(t){return t.articles})).articlesList.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.summary.toLowerCase().includes(t.toLowerCase())})),n=e.length;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(u.Z,{children:["Results: ",n]}),(0,g.jsx)(j.Z,{sx:{mb:"45px"}}),(0,g.jsx)(c.ZP,{container:!0,spacing:"45px",sx:{listStyle:"none"},children:e.map((function(t){return(0,g.jsx)(Z,{articleInfo:t},t.id)}))})]})},v=n(9643),b=n(7940),w=n(3466),y=n(5403),C=function(){var t=(0,s.T)();return(0,g.jsxs)(l.Z,{sx:{display:"inline-grid"},children:[(0,g.jsx)(u.Z,{sx:{mb:1,fontFamily:"Montserrat",fontWeight:600,lineHeight:1.5},children:"Filter by keywords"}),(0,g.jsx)(b.Z,{sx:{height:50,width:600,input:{color:"#575757",fontWeight:400},boxShadow:5,mb:"40px"},onChange:function(e){return t((0,v.Tv)(e.currentTarget.value))},type:"text",InputProps:{startAdornment:(0,g.jsx)(w.Z,{position:"start",children:(0,g.jsx)(y.Z,{})})}})]})},k=n(1614),L=function(){var t=(0,s.C)((function(t){return t.articles})),e=t.articlesList,n=t.isLoading,o=t.error,a=(0,s.T)();return(0,r.useEffect)((function(){a((0,i.Z)())}),[]),(0,g.jsx)(k.Z,{sx:{px:"75px",py:"50px"},children:(0,g.jsxs)("section",{children:[n&&(0,g.jsx)("b",{children:"Loading articles..."}),o&&(0,g.jsx)("b",{children:o}),(0,g.jsx)(C,{}),(0,g.jsx)(m,{articlesList:e})]})})}},3153:function(t,e,n){n.d(e,{C:function(){return i},T:function(){return s}});var r=n(9434),s=r.I0,i=r.v9},7237:function(t,e,n){n.d(e,{R:function(){return l},Z:function(){return c}});var r=n(4165),s=n(5861),i=n(3263),o=n(7165),a=n(3291);i.Z.defaults.baseURL="https://api.spaceflightnewsapi.net/v3";var c=function(){return function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e((0,a.zx)()),t.next=4,i.Z.get("/articles");case 4:n=t.sent,e((0,a.Hg)(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e((0,a.Ik)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},l=function(t){return function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n((0,o.xd)()),e.next=4,i.Z.get("/articles/".concat(t));case 4:s=e.sent,n((0,o.pu)(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n((0,o.CT)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=76.73452809.chunk.js.map