(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(8),i=c.n(a),r=(c(15),c(6)),s=c(9),d=c(4),u=(c(7),c(16),c(19)),j=c(0);function l(e){var t=e.todos,c=e.toogleComplete,n=e.delTodo;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("input",{type:"checkbox",className:"checktoogle",onChange:function(){return c(e)},checked:e.check}),Object(j.jsx)("span",{id:"center",className:e.check?"float overstrike":"float ",children:e.text}),Object(j.jsx)(u.a,{id:"icon-right",className:"float",onClick:function(){return n(e)}})]})}))})}function b(e){var t=e.addTodo,c=Object(n.useState)(""),o=Object(d.a)(c,2),a=o[0],i=o[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"input-add",children:[Object(j.jsx)("input",{type:"text",name:"todoadd",id:"inputtodo",placeholder:"Add...",value:a,onChange:function(e){i(e.target.value)}}),Object(j.jsx)(u.b,{onClick:function(e){e.preventDefault(),t(a),i("")}})]})})}function h(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],o=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:"To do List"}),Object(j.jsx)(b,{addTodo:function(e){""!==e&&o([].concat(Object(s.a)(c),[{text:e,check:!1}]))}}),Object(j.jsx)(l,{todos:c,toogleComplete:function(e){var t=c.map((function(t){return t===e?Object(r.a)(Object(r.a)({},t),{},{check:!t.check}):t}));o(t)},delTodo:function(e){var t=c.filter((function(e){return!1===e.check}));o(t)}})]})})}var f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),f()},7:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.b8f99208.chunk.js.map