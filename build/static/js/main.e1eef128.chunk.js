(this["webpackJsonpmy-app-pwa"]=this["webpackJsonpmy-app-pwa"]||[]).push([[0],{134:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),c=n.n(r),i=n(16),s=n.n(i),o=(n(134),n(67)),u=n(20),l=n(75),d=n(35),j=n(206),h=n(201),b=n(200),p=n(36),O=n(119),v=n(210),g=n(208);function f(e){return Object(a.jsx)(g.a,Object(O.a)({elevation:6,variant:"filled"},e))}var m=function(e){var t=e.text,n=e.severity,r=e.visible,i=c.a.useState(!1),s=Object(d.a)(i,2),o=s[0],u=s[1];c.a.useEffect((function(){u(r)}),[r]);var l=function(e,t){"clickaway"!==t&&u(!1)};return Object(a.jsx)(v.a,{open:o,autoHideDuration:6e3,onClose:l,children:Object(a.jsx)(f,{severity:n,onClose:l,children:t})})};function x(){var e=Object(l.a)(["\n   mutation($msg: String!) {\n    insert_messages_one(object: {message: $msg, user_id: 1}) {\n      id\n      created_at\n    }\n  }\n "]);return x=function(){return e},e}var y=function(){var e=c.a.useState(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(p.gql)(x()),s=Object(p.useMutation)(i),o=Object(d.a)(s,1)[0],u=c.a.useState(""),l=Object(d.a)(u,2),O=l[0],v=l[1];return Object(a.jsxs)(b.a,{maxWidth:"sm",children:[Object(a.jsx)("h2",{children:"Neuer Bewusstseinsspruch"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o({variables:{msg:O}}).then((function(){return r(!0)}))},children:[Object(a.jsx)(j.a,{label:"Spruch",multiline:!0,variant:"filled",onChange:function(e){return v(e.target.value)}}),Object(a.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Speichern"})]}),Object(a.jsx)(m,{text:"Gespeichert!",severity:"success",visible:n})]})},w=n(211),_=n(114),k=n.n(_);function S(){var e=Object(l.a)(['\n  query MyQuery {\n    messages(order_by: {created_at: desc}, where: {created_at: {_gt: "2021-01-10"}}) {\n      id\n      message\n      updated_at\n      user_id\n      created_at\n    }\n  }\n'],['\n  query MyQuery {\n    messages(order_by: {created_at: desc}, where: {created_at: {_gt: \\"2021-01-10\\"}}) {\n      id\n      message\n      updated_at\n      user_id\n      created_at\n    }\n  }\n']);return S=function(){return e},e}var C=Object(p.gql)(S());var I=function(){document.body.style.backgroundColor="skyblue";var e=Object(w.a)().css,t=c.a.useState(0),n=Object(d.a)(t,2),r=n[0],i=n[1],s=c.a.useState(0),o=Object(d.a)(s,2),u=o[0],l=o[1];c.a.useEffect((function(){i(window.innerWidth),l(window.innerHeight)}));var j=Object(p.useQuery)(C,{variables:{},pollInterval:1e4}),h=j.loading,b=j.error,O=j.data;if(h)return Object(a.jsx)("p",{children:"Loading..."});if(b)return Object(a.jsx)("p",{children:"Error :("});var v=O.messages.map((function(t){return{content:function(n){n.action,n.isPaused;return Object(a.jsx)("div",{className:e({font:"18px Arial Black, sans-serif",fontWeight:900,lineHeight:"4vw",margin:0,padding:"40px",textAlign:"center",width:"100%",fontSize:"4vw",background:"#"+Math.random().toString(16).substr(-6),color:"#16161d",display:"flex",alignItems:"center",justifyContent:"center"}),children:t.message})}}}));return Object(a.jsx)(k.a,{stories:v,defaultInterval:8e3,loop:!0,keyboardNavigation:!0,width:r,height:u})},B=n(205),M=n(207),q=n(118),A=n(212),E=n(199),H=n(116),L=n.n(H);var N=function(){var e=c.a.useState(null),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(w.a)().css;return Object(a.jsxs)("div",{className:i({position:"fixed",zIndex:2e3,right:0}),children:[Object(a.jsx)(E.a,{"aria-label":"more","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},children:Object(a.jsx)(L.a,{})}),Object(a.jsxs)(q.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){r(null)},children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)(A.a,{children:"Home"})}),Object(a.jsx)(o.b,{to:"/add",children:Object(a.jsx)(A.a,{children:"Neuer Bewusstseinsspruch"})})]})]})};var W=function(){var e=Object(B.a)(),t=Object(p.createHttpLink)({uri:"https://daily-awareness-hasura.herokuapp.com/v1/graphql",headers:{"x-hasura-admin-secret":"hasuraDAILY2021"}});console.log("https://daily-awareness-hasura.herokuapp.com/v1/graphql");var n=new p.ApolloClient({cache:new p.InMemoryCache,link:t});return Object(a.jsx)(M.a,{renderer:e,children:Object(a.jsx)(p.ApolloProvider,{client:n,children:Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{path:"/add",children:Object(a.jsx)(y,{})}),Object(a.jsx)(u.a,{path:"/",children:Object(a.jsx)(I,{})})]})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(154),s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()}},[[156,1,2]]]);
//# sourceMappingURL=main.e1eef128.chunk.js.map