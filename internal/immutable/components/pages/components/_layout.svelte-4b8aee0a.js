import{S,i as x,s as D,w as m,x as u,y as h,f as $,t as d,z as _,o as I,a as v,c as w,b,h as g,C as k,k as T,q as W,l as y,m as B,r as E,H as F,u as H,D as q,E as A,F as L}from"../../../chunks/index-d67b84d5.js";import{C as M}from"../../../chunks/Card-9dd2fd8c.js";import{C}from"../../../chunks/index-74ab43d1.js";import{D as N,S as z}from"../../../chunks/Divider-c82d5481.js";import{c as p}from"../../../chunks/singletons-f78d20f2.js";p.disable_scroll_handling;const O=p.goto;p.invalidate;p.invalidateAll;p.prefetch;p.prefetch_routes;p.before_navigate;p.after_navigate;function U(i){let t,r;return t=new z({props:{tree:i[1],activeItem:i[0],firstLevelItemStyle:"font-weight: bold",itemStyle:"height: 40px",defaultExpandedItems:["*"]}}),t.$on("click",i[5]),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,l){h(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.activeItem=e[0]),t.$set(a)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function j(i){let t,r;return t=new M({props:{fullWidth:!0,shadow:"never",$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,l){h(t,e,l),r=!0},p(e,l){const a={};l&65&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function G(i){let t,r,e,l,a,c;l=new N({props:{margin:"20px"}});const f=i[4].default,o=k(f,i,i[6],null);return{c(){t=T("h1"),r=W(i[0]),e=v(),m(l.$$.fragment),a=v(),o&&o.c()},l(n){t=y(n,"H1",{});var s=B(t);r=E(s,i[0]),s.forEach(g),e=w(n),u(l.$$.fragment,n),a=w(n),o&&o.l(n)},m(n,s){b(n,t,s),F(t,r),b(n,e,s),h(l,n,s),b(n,a,s),o&&o.m(n,s),c=!0},p(n,s){(!c||s&1)&&H(r,n[0]),o&&o.p&&(!c||s&64)&&q(o,f,n,n[6],c?L(f,n[6],s,null):A(n[6]),null)},i(n){c||($(l.$$.fragment,n),$(o,n),c=!0)},o(n){d(l.$$.fragment,n),d(o,n),c=!1},d(n){n&&g(t),n&&g(e),_(l,n),n&&g(a),o&&o.d(n)}}}function J(i){let t,r,e,l;return t=new C({props:{maxWidth:"240px",fullWidth:!0,$$slots:{default:[j]},$$scope:{ctx:i}}}),e=new C({props:{style:"flex: 1;",padding:"20px",direction:"column",$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment),r=v(),m(e.$$.fragment)},l(a){u(t.$$.fragment,a),r=w(a),u(e.$$.fragment,a)},m(a,c){h(t,a,c),b(a,r,c),h(e,a,c),l=!0},p(a,c){const f={};c&65&&(f.$$scope={dirty:c,ctx:a}),t.$set(f);const o={};c&65&&(o.$$scope={dirty:c,ctx:a}),e.$set(o)},i(a){l||($(t.$$.fragment,a),$(e.$$.fragment,a),l=!0)},o(a){d(t.$$.fragment,a),d(e.$$.fragment,a),l=!1},d(a){_(t,a),a&&g(r),_(e,a)}}}function K(i){let t,r;return t=new C({props:{direction:"row",fullWidth:!0,padding:"20px",gap:"20px",$$slots:{default:[J]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,l){h(t,e,l),r=!0},p(e,[l]){const a={};l&65&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){_(t,e)}}}function P(i,t,r){let{$$slots:e={},$$scope:l}=t;const a=!0,c=[{label:"Basic",children:[{label:"Button",path:"button",children:[]},{label:"Container",path:"container",children:[]},{label:"Text",path:"text",children:[]}]},{label:"Form",children:[{label:"Select",path:"select",children:[]},{label:"Textfield",path:"textfield",children:[]}]},{label:"Data",children:[{label:"Card",path:"card",children:[]},{label:"Collapse",path:"collapse",children:[]}]},{label:"Navigation",children:[{label:"Dropdown",path:"dropdown",children:[]},{label:"Header",path:"header",children:[]},{label:"Sidenav",path:"sidenav",children:[]},{label:"Tabs",path:"tabs",children:[]}]},{label:"Feedback",children:[{label:"Modal",path:"modal",children:[]}]},{label:"Others",children:[{label:"Divider",path:"divider",children:[]}]}];let f="Button";const o=s=>{r(0,f=s.label),O("/sexykit/components/"+s.path)};I(()=>{const s=window.location.pathname.split("/");r(0,f=s[s.length-1].charAt(0).toUpperCase()+s[s.length-1].slice(1))});const n=s=>{o(s.detail)};return i.$$set=s=>{"$$scope"in s&&r(6,l=s.$$scope)},[f,c,o,a,e,n,l]}class Z extends S{constructor(t){super(),x(this,t,P,K,D,{prerender:3})}get prerender(){return this.$$.ctx[3]}}export{Z as default};
