(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(15),o=e.n(r),i=e(6),a=e(3),u=e(2),s=function(t){var n=t.note,e=t.toggleImportance,r=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:r})]})},j=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},l=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},f=e(4),b=e.n(f),d="/api/notes",m=function(){return b.a.get(d).then((function(t){return t.data}))},O=function(t){return b.a.post(d,t).then((function(t){return t.data}))},p=function(t,n){return b.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(u.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=Object(u.useState)(""),f=Object(a.a)(o,2),b=f[0],d=f[1],h=Object(u.useState)(!1),v=Object(a.a)(h,2),x=v[0],g=v[1],S=Object(u.useState)(null),k=Object(a.a)(S,2),y=k[0],w=k[1];Object(u.useEffect)((function(){m().then((function(t){r(t)}))}),[]);var N=x?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(j,{message:y}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:N.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});p(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(t){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:b,date:(new Date).toISOString(),important:Math.random()>.5};O(n).then((function(t){r(e.concat(t)),d("")}))},children:[Object(c.jsx)("input",{value:b,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(l,{})]})};e(39);o.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1f9d8a0e.chunk.js.map