import{S as U,i as Y,s as $,C as A,k as O,l as E,m as w,h,n as m,b as D,D as S,E as B,F,f as p,t as v,W as x,a0 as W,o as se,a1 as X,a as Z,c as j,H as M,I as H,T as ee,g as P,d as Q,K as te,X as le,Z as z,P as ie,Q as G,q as oe,r as re,u as ae,B as N}from"./index-d67b84d5.js";import{w as ne}from"./index-4918c768.js";import{q as ce}from"./index-74ab43d1.js";function fe(t){let e,s;const l=t[4].default,o=A(l,t,t[3],null);return{c(){e=O("div"),o&&o.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var i=w(e);o&&o.l(i),i.forEach(h),this.h()},h(){m(e,"class","collapse")},m(r,i){D(r,e,i),o&&o.m(e,null),s=!0},p(r,[i]){o&&o.p&&(!s||i&8)&&S(o,l,r,r[3],s?F(l,r[3],i,null):B(r[3]),null)},i(r){s||(p(o,r),s=!0)},o(r){v(o,r),s=!1},d(r){r&&h(e),o&&o.d(r)}}}function ue(t,e,s){let l,{$$slots:o={},$$scope:r}=e,{activeItemsNames:i=[]}=e,{accordion:a=!1}=e,f=ne([]);return x(t,f,u=>s(5,l=u)),W("updateCollapseItems",{updateCollapseItems:u=>{a&&(l[0]===u?f.set([]):f.set([u]))}}),W("activeItems",{activeItems:f}),se(async()=>{a?X(f,l=[i[0]||[]],l):X(f,l=i,l)}),t.$$set=u=>{"activeItemsNames"in u&&s(1,i=u.activeItemsNames),"accordion"in u&&s(2,a=u.accordion),"$$scope"in u&&s(3,r=u.$$scope)},[f,i,a,r,o]}class Ce extends U{constructor(e){super(),Y(this,e,ue,fe,$,{activeItemsNames:1,accordion:2})}}const _e=t=>({}),J=t=>({}),de=t=>({}),L=t=>({});function me(t){let e;return{c(){e=oe(t[0])},l(s){e=re(s,t[0])},m(s,l){D(s,e,l)},p(s,l){l&1&&ae(e,s[0])},i:N,o:N,d(s){s&&h(e)}}}function he(t){let e;const s=t[10].header,l=A(s,t,t[9],L);return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,r){l&&l.m(o,r),e=!0},p(o,r){l&&l.p&&(!e||r&512)&&S(l,s,o,o[9],e?F(s,o[9],r,de):B(o[9]),L)},i(o){e||(p(l,o),e=!0)},o(o){v(l,o),e=!1},d(o){l&&l.d(o)}}}function ge(t){let e,s;return{c(){e=O("i"),this.h()},l(l){e=E(l,"I",{class:!0}),w(e).forEach(h),this.h()},h(){m(e,"class",s="collapse-item__chevron "+(t[2]?"collapse-item__chevron--open":"")+" fa-solid fa-chevron-right")},m(l,o){D(l,e,o)},p(l,o){o&4&&s!==(s="collapse-item__chevron "+(l[2]?"collapse-item__chevron--open":"")+" fa-solid fa-chevron-right")&&m(e,"class",s)},i:N,o:N,d(l){l&&h(e)}}}function pe(t){let e,s,l,o;const r=t[10].trigger,i=A(r,t,t[9],J);return{c(){e=O("div"),i&&i.c(),this.h()},l(a){e=E(a,"DIV",{class:!0,tabindex:!0,role:!0});var f=w(e);i&&i.l(f),f.forEach(h),this.h()},h(){m(e,"class","collapse-item__trigger"),m(e,"tabindex","0"),m(e,"role","button")},m(a,f){D(a,e,f),i&&i.m(e,null),s=!0,l||(o=[H(e,"click",function(){ee(t[4]("trigger",t[0]))&&t[4]("trigger",t[0]).apply(this,arguments)}),H(e,"keydown",t[11])],l=!0)},p(a,f){t=a,i&&i.p&&(!s||f&512)&&S(i,r,t,t[9],s?F(r,t[9],f,_e):B(t[9]),J)},i(a){s||(p(i,a),s=!0)},o(a){v(i,a),s=!1},d(a){a&&h(e),i&&i.d(a),l=!1,te(o)}}}function R(t){let e,s,l;const o=t[10].default,r=A(o,t,t[9],null);return{c(){e=O("div"),r&&r.c(),this.h()},l(i){e=E(i,"DIV",{class:!0});var a=w(e);r&&r.l(a),a.forEach(h),this.h()},h(){m(e,"class","collapse-item__body")},m(i,a){D(i,e,a),r&&r.m(e,null),l=!0},p(i,a){r&&r.p&&(!l||a&512)&&S(r,o,i,i[9],l?F(o,i[9],a,null):B(i[9]),null)},i(i){l||(p(r,i),ie(()=>{s||(s=G(e,t[5],{},!0)),s.run(1)}),l=!0)},o(i){v(r,i),s||(s=G(e,t[5],{},!1)),s.run(0),l=!1},d(i){i&&h(e),r&&r.d(i),i&&s&&s.end()}}}function be(t){let e,s,l,o,r,i,a,f,u,g,I,T;const y=[he,me],b=[];function V(d,_){return d[6].header?0:1}l=V(t),o=b[l]=y[l](t);const q=[pe,ge],n=[];function C(d,_){return d[6].trigger?0:1}i=C(t),a=n[i]=q[i](t);let c=t[2]&&R(t);return{c(){e=O("div"),s=O("div"),o.c(),r=Z(),a.c(),f=Z(),c&&c.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var _=w(e);s=E(_,"DIV",{class:!0,role:!0,tabindex:!0});var k=w(s);o.l(k),r=j(k),a.l(k),k.forEach(h),f=j(_),c&&c.l(_),_.forEach(h),this.h()},h(){m(s,"class","collapse-item__header"),m(s,"role","button"),m(s,"tabindex","0"),m(e,"class",u="collapse-item "+(t[1]?"":"collapse-item--no-borders"))},m(d,_){D(d,e,_),M(e,s),b[l].m(s,null),M(s,r),n[i].m(s,null),M(e,f),c&&c.m(e,null),g=!0,I||(T=[H(s,"click",function(){ee(t[4]("header",t[0]))&&t[4]("header",t[0]).apply(this,arguments)}),H(s,"keydown",t[12])],I=!0)},p(d,[_]){t=d;let k=l;l=V(t),l===k?b[l].p(t,_):(P(),v(b[k],1,1,()=>{b[k]=null}),Q(),o=b[l],o?o.p(t,_):(o=b[l]=y[l](t),o.c()),p(o,1),o.m(s,r));let K=i;i=C(t),i===K?n[i].p(t,_):(P(),v(n[K],1,1,()=>{n[K]=null}),Q(),a=n[i],a?a.p(t,_):(a=n[i]=q[i](t),a.c()),p(a,1),a.m(s,null)),t[2]?c?(c.p(t,_),_&4&&p(c,1)):(c=R(t),c.c(),p(c,1),c.m(e,null)):c&&(P(),v(c,1,1,()=>{c=null}),Q()),(!g||_&2&&u!==(u="collapse-item "+(t[1]?"":"collapse-item--no-borders")))&&m(e,"class",u)},i(d){g||(p(o),p(a),p(c),g=!0)},o(d){v(o),v(a),v(c),g=!1},d(d){d&&h(e),b[l].d(),n[i].d(),c&&c.d(),I=!1,te(T)}}}function ve(t,e,s){let l,{$$slots:o={},$$scope:r}=e;const i=le(o);let{name:a}=e,{toggleOnTriggerOnly:f=!1}=e,{bordered:u=!0}=e,g=!1;const{activeItems:I}=z("activeItems");x(t,I,n=>s(8,l=n));const{updateCollapseItems:T}=z("updateCollapseItems"),y=(n,C,c=null)=>{if(n==="trigger"&&f||n==="header"&&!f||n==="header focus"&&!f&&(c==null?void 0:c.keyCode)===13||n==="trigger focus"&&f&&(c==null?void 0:c.keyCode)===13)T(C),s(2,g=!g);else return},b=(n,{speed:C=1})=>({duration:300*C,css:c=>`max-height: ${c*n.offsetHeight}px; margin-bottom: ${c*20}px;`,easing:ce}),V=n=>y("trigger focus",a,n),q=n=>y("header focus",a,n);return t.$$set=n=>{"name"in n&&s(0,a=n.name),"toggleOnTriggerOnly"in n&&s(7,f=n.toggleOnTriggerOnly),"bordered"in n&&s(1,u=n.bordered),"$$scope"in n&&s(9,r=n.$$scope)},t.$$.update=()=>{t.$$.dirty&257&&(Array.isArray(l)&&l.includes(a)?s(2,g=!0):s(2,g=!1))},[a,u,g,I,y,b,i,f,l,r,o,V,q]}class Oe extends U{constructor(e){super(),Y(this,e,ve,be,$,{name:0,toggleOnTriggerOnly:7,bordered:1})}}export{Ce as C,Oe as a};
