import{S as C,i as x,s as I,w as m,x as u,y as h,f as $,t as p,B as _,a as v,c as w,b,h as g,F as D,l as k,r as B,m as T,n as W,u as y,K as F,v as H,G as E,H as N,I as q}from"../../chunks/index-e5468021.js";import{C as G}from"../../chunks/Card-e0e88ba4.js";import{C as S}from"../../chunks/index-c9380717.js";import{D as K,S as L}from"../../chunks/Divider-1581c6af.js";import{c as d}from"../../chunks/singletons-3468a0d6.js";d.disable_scroll_handling;const M=d.goto;d.invalidate;d.prefetch;d.prefetch_routes;d.before_navigate;d.after_navigate;function O(s){let t,r;return t=new L({props:{tree:s[1],activeItem:s[0],firstLevelItemStyle:"font-weight: bold",itemStyle:"height: 40px",defaultExpandedItems:["*"]}}),t.$on("click",s[4]),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){h(t,e,n),r=!0},p(e,n){const l={};n&1&&(l.activeItem=e[0]),t.$set(l)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function j(s){let t,r;return t=new G({props:{fullWidth:!0,shadow:"never",$$slots:{default:[O]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){h(t,e,n),r=!0},p(e,n){const l={};n&33&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function z(s){let t,r,e,n,l,i;n=new K({props:{margin:"20px"}});const f=s[3].default,o=D(f,s,s[5],null);return{c(){t=k("h1"),r=B(s[0]),e=v(),m(n.$$.fragment),l=v(),o&&o.c()},l(a){t=T(a,"H1",{});var c=W(t);r=y(c,s[0]),c.forEach(g),e=w(a),u(n.$$.fragment,a),l=w(a),o&&o.l(a)},m(a,c){b(a,t,c),F(t,r),b(a,e,c),h(n,a,c),b(a,l,c),o&&o.m(a,c),i=!0},p(a,c){(!i||c&1)&&H(r,a[0]),o&&o.p&&(!i||c&32)&&E(o,f,a,a[5],i?q(f,a[5],c,null):N(a[5]),null)},i(a){i||($(n.$$.fragment,a),$(o,a),i=!0)},o(a){p(n.$$.fragment,a),p(o,a),i=!1},d(a){a&&g(t),a&&g(e),_(n,a),a&&g(l),o&&o.d(a)}}}function A(s){let t,r,e,n;return t=new S({props:{maxWidth:"240px",fullWidth:!0,$$slots:{default:[j]},$$scope:{ctx:s}}}),e=new S({props:{style:"flex: 1;",padding:"20px",direction:"column",$$slots:{default:[z]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment),r=v(),m(e.$$.fragment)},l(l){u(t.$$.fragment,l),r=w(l),u(e.$$.fragment,l)},m(l,i){h(t,l,i),b(l,r,i),h(e,l,i),n=!0},p(l,i){const f={};i&33&&(f.$$scope={dirty:i,ctx:l}),t.$set(f);const o={};i&33&&(o.$$scope={dirty:i,ctx:l}),e.$set(o)},i(l){n||($(t.$$.fragment,l),$(e.$$.fragment,l),n=!0)},o(l){p(t.$$.fragment,l),p(e.$$.fragment,l),n=!1},d(l){_(t,l),l&&g(r),_(e,l)}}}function J(s){let t,r;return t=new S({props:{direction:"row",fullWidth:!0,padding:"20px",gap:"20px",$$slots:{default:[A]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){h(t,e,n),r=!0},p(e,[n]){const l={};n&33&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function P(s,t,r){let{$$slots:e={},$$scope:n}=t;const l=[{label:"Basic",children:[{label:"Button",path:"button",children:[]},{label:"Container",path:"container",children:[]},{label:"Text",path:"text",children:[]}]},{label:"Form",children:[{label:"Select",path:"select",children:[]},{label:"Textfield",path:"textfield",children:[]}]},{label:"Data",children:[{label:"Card",path:"card",children:[]},{label:"Collapse",path:"collapse",children:[]}]},{label:"Navigation",children:[{label:"Dropdown",path:"dropdown",children:[]},{label:"Header",path:"header",children:[]},{label:"Sidenav",path:"sidenav",children:[]},{label:"Tabs",path:"tabs",children:[]}]},{label:"Feedback",children:[{label:"Modal",path:"modal",children:[]}]},{label:"Others",children:[{label:"Divider",path:"divider",children:[]}]}];let i="Button";const f=a=>{r(0,i=a.label),M("/sexykit/components/"+a.path)},o=a=>{f(a.detail)};return s.$$set=a=>{"$$scope"in a&&r(5,n=a.$$scope)},[i,l,f,e,o,n]}class Y extends C{constructor(t){super(),x(this,t,P,J,I,{})}}export{Y as default};