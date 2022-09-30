(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(3)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.todoId,s=e.setTodoId;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":c===e.id}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered"}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()("far",{"fa-eye-slash":c===e.id},{"fa-eye":c!==e.id})})})})})]},e.id)}))})]})},j=function(e){var t=e.selectedOption,c=e.query,s=e.setQuery,a=e.setSelectedOption;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return a(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(o.jsx)("button",{"aria-label":"close","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.todos,c=e.todoId,s=e.setTodoId,a=Object(l.useState)(null),d=Object(n.a)(a,2),i=d[0],r=d[1],j=t.find((function(e){return c===e.id}));return Object(l.useEffect)((function(){var e;j&&(e=j.userId,u("/users/".concat(e))).then(r)}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===j||void 0===j?void 0:j.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(0),r(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===j||void 0===j?void 0:j.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==j&&void 0!==j&&j.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:Sincere@april.biz",children:i.name})]})]})]}):Object(o.jsx)(b,{})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),d=Object(n.a)(a,2),i=d[0],O=d[1],m=Object(l.useState)(!1),x=Object(n.a)(m,2),f=x[0],p=x[1],v=Object(l.useState)("all"),N=Object(n.a)(v,2),y=N[0],g=N[1],k=Object(l.useState)(""),S=Object(n.a)(k,2),I=S[0],w=S[1];Object(l.useEffect)((function(){u("/todos").then((function(e){s(e),p(!0)}))}),[]);var C=c.filter((function(e){switch(y){case"active":return!e.completed;case"completed":return e.completed;default:return!0}})).filter((function(e){return e.title.toLowerCase().includes(I.toLowerCase())}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{selectedOption:y,query:I,setSelectedOption:g,setQuery:w})}),Object(o.jsx)("div",{className:"block",children:f?Object(o.jsx)(r,{todos:C,todoId:i,setTodoId:O}):Object(o.jsx)(b,{})})]})})}),0!==i&&Object(o.jsx)(h,{todos:C,todoId:i,setTodoId:O})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.07c55793.chunk.js.map