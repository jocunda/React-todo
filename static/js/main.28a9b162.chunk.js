(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(8),i=c.n(a),r=(c(15),c(6)),s=c(9),d=c(4),u=(c(7),c(16),c(19)),l=c(0);function j(e){var t=e.todos,c=e.toogleComplete,n=e.delTodo;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("input",{type:"checkbox",className:"checktoogle",onChange:function(){return c(e)},checked:e.check}),Object(l.jsx)("span",{id:"center",className:e.check?"float overstrike":"float ",children:e.text}),Object(l.jsx)(u.a,{id:"icon-right",className:"float",onClick:function(){return n(e)}})]})}))})}function b(e){var t=e.addTodo,c=Object(n.useState)(""),o=Object(d.a)(c,2),a=o[0],i=o[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{className:"input-add",children:[Object(l.jsx)("input",{type:"text",name:"todoadd",id:"inputtodo",placeholder:"Add...",value:a,onChange:function(e){i(e.target.value),console.log(a)}}),Object(l.jsx)(u.b,{onClick:function(e){e.preventDefault(),t(a),i("")}})]})})}function h(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],o=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title",children:"To do List"}),Object(l.jsx)(b,{addTodo:function(e){""!==e&&o([].concat(Object(s.a)(c),[{text:e,check:!1}]))}}),Object(l.jsx)(j,{todos:c,toogleComplete:function(e){var t=c.map((function(t){return t===e?Object(r.a)(Object(r.a)({},t),{},{check:!t.check}):t}));o(t)},delTodo:function(){var e=c.filter((function(e){return!1===e.check}));o(e)}})]})})}var f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()},7:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.28a9b162.chunk.js.map