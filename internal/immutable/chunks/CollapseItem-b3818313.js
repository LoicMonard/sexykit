import{S as $,i as x,s as ee,C as M,k as C,l as E,m as O,h as m,n as g,b as V,D as S,E as B,F,f as p,t as k,W as te,Y as X,o as se,Z as Y,a as Z,c as j,J as A,M as D,U,g as Q,d as R,O as W,X as le,_ as z,Q as ie,R as G,q as oe,r as re,u as ne,B as H,$ as ae}from"./index-2bfe2af9.js";import{w as ce}from"./index-ee34d10b.js";import{q as fe}from"./index-9239572f.js";function ue(e){let t,s;const i=e[4].default,o=M(i,e,e[3],null);return{c(){t=C("div"),o&&o.c(),this.h()},l(r){t=E(r,"DIV",{class:!0});var l=O(t);o&&o.l(l),l.forEach(m),this.h()},h(){g(t,"class","collapse")},m(r,l){V(r,t,l),o&&o.m(t,null),s=!0},p(r,[l]){o&&o.p&&(!s||l&8)&&S(o,i,r,r[3],s?F(i,r[3],l,null):B(r[3]),null)},i(r){s||(p(o,r),s=!0)},o(r){k(o,r),s=!1},d(r){r&&m(t),o&&o.d(r)}}}function _e(e,t,s){let i,{$$slots:o={},$$scope:r}=t,{activeItemsNames:l=[]}=t,{accordion:n=!1}=t,a=ce([]);return te(e,a,_=>s(5,i=_)),X("updateCollapseItems",{updateCollapseItems:_=>{n&&(i[0]===_?a.set([]):a.set([_]))}}),X("activeItems",{activeItems:a}),se(async()=>{n?Y(a,i=[l[0]||[]],i):Y(a,i=l,i)}),e.$$set=_=>{"activeItemsNames"in _&&s(1,l=_.activeItemsNames),"accordion"in _&&s(2,n=_.accordion),"$$scope"in _&&s(3,r=_.$$scope)},[a,l,n,r,o]}class Ee extends ${constructor(t){super(),x(this,t,_e,ue,ee,{activeItemsNames:1,accordion:2})}}const de=e=>({}),K=e=>({}),me=e=>({}),L=e=>({});function ge(e){let t;return{c(){t=oe(e[0])},l(s){t=re(s,e[0])},m(s,i){V(s,t,i)},p(s,i){i&1&&ne(t,s[0])},i:H,o:H,d(s){s&&m(t)}}}function he(e){let t;const s=e[10].header,i=M(s,e,e[9],L);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,r){i&&i.m(o,r),t=!0},p(o,r){i&&i.p&&(!t||r&512)&&S(i,s,o,o[9],t?F(s,o[9],r,me):B(o[9]),L)},i(o){t||(p(i,o),t=!0)},o(o){k(i,o),t=!1},d(o){i&&i.d(o)}}}function pe(e){let t,s,i,o,r;return{c(){t=C("div"),s=C("i"),this.h()},l(l){t=E(l,"DIV",{});var n=O(t);s=E(n,"I",{class:!0}),O(s).forEach(m),n.forEach(m),this.h()},h(){g(s,"class",i="collapse-item__chevron "+(e[2]?"collapse-item__chevron--open":"")+" fa-solid fa-chevron-right")},m(l,n){V(l,t,n),A(t,s),o||(r=[D(t,"click",ae(function(){U(e[4]("trigger",e[0]))&&e[4]("trigger",e[0]).apply(this,arguments)})),D(t,"keydown",e[12])],o=!0)},p(l,n){e=l,n&4&&i!==(i="collapse-item__chevron "+(e[2]?"collapse-item__chevron--open":"")+" fa-solid fa-chevron-right")&&g(s,"class",i)},i:H,o:H,d(l){l&&m(t),o=!1,W(r)}}}function be(e){let t,s,i,o;const r=e[10].trigger,l=M(r,e,e[9],K);return{c(){t=C("div"),l&&l.c(),this.h()},l(n){t=E(n,"DIV",{class:!0,tabindex:!0,role:!0});var a=O(t);l&&l.l(a),a.forEach(m),this.h()},h(){g(t,"class","collapse-item__trigger"),g(t,"tabindex","0"),g(t,"role","button")},m(n,a){V(n,t,a),l&&l.m(t,null),s=!0,i||(o=[D(t,"click",function(){U(e[4]("trigger",e[0]))&&e[4]("trigger",e[0]).apply(this,arguments)}),D(t,"keydown",e[11])],i=!0)},p(n,a){e=n,l&&l.p&&(!s||a&512)&&S(l,r,e,e[9],s?F(r,e[9],a,de):B(e[9]),K)},i(n){s||(p(l,n),s=!0)},o(n){k(l,n),s=!1},d(n){n&&m(t),l&&l.d(n),i=!1,W(o)}}}function P(e){let t,s,i;const o=e[10].default,r=M(o,e,e[9],null);return{c(){t=C("div"),r&&r.c(),this.h()},l(l){t=E(l,"DIV",{class:!0});var n=O(t);r&&r.l(n),n.forEach(m),this.h()},h(){g(t,"class","collapse-item__body")},m(l,n){V(l,t,n),r&&r.m(t,null),i=!0},p(l,n){r&&r.p&&(!i||n&512)&&S(r,o,l,l[9],i?F(o,l[9],n,null):B(l[9]),null)},i(l){i||(p(r,l),ie(()=>{s||(s=G(t,e[5],{},!0)),s.run(1)}),i=!0)},o(l){k(r,l),s||(s=G(t,e[5],{},!1)),s.run(0),i=!1},d(l){l&&m(t),r&&r.d(l),l&&s&&s.end()}}}function ve(e){let t,s,i,o,r,l,n,a,_,h,w,q;const y=[he,ge],b=[];function T(u,d){return u[6].header?0:1}i=T(e),o=b[i]=y[i](e);const N=[be,pe],v=[];function c(u,d){return u[6].trigger?0:1}l=c(e),n=v[l]=N[l](e);let f=e[2]&&P(e);return{c(){t=C("div"),s=C("div"),o.c(),r=Z(),n.c(),a=Z(),f&&f.c(),this.h()},l(u){t=E(u,"DIV",{class:!0});var d=O(t);s=E(d,"DIV",{class:!0,role:!0,tabindex:!0});var I=O(s);o.l(I),r=j(I),n.l(I),I.forEach(m),a=j(d),f&&f.l(d),d.forEach(m),this.h()},h(){g(s,"class","collapse-item__header"),g(s,"role","button"),g(s,"tabindex","0"),g(t,"class",_="collapse-item "+(e[1]?"":"collapse-item--no-borders"))},m(u,d){V(u,t,d),A(t,s),b[i].m(s,null),A(s,r),v[l].m(s,null),A(t,a),f&&f.m(t,null),h=!0,w||(q=[D(s,"click",function(){U(e[4]("header",e[0]))&&e[4]("header",e[0]).apply(this,arguments)}),D(s,"keydown",e[13])],w=!0)},p(u,[d]){e=u;let I=i;i=T(e),i===I?b[i].p(e,d):(Q(),k(b[I],1,1,()=>{b[I]=null}),R(),o=b[i],o?o.p(e,d):(o=b[i]=y[i](e),o.c()),p(o,1),o.m(s,r));let J=l;l=c(e),l===J?v[l].p(e,d):(Q(),k(v[J],1,1,()=>{v[J]=null}),R(),n=v[l],n?n.p(e,d):(n=v[l]=N[l](e),n.c()),p(n,1),n.m(s,null)),e[2]?f?(f.p(e,d),d&4&&p(f,1)):(f=P(e),f.c(),p(f,1),f.m(t,null)):f&&(Q(),k(f,1,1,()=>{f=null}),R()),(!h||d&2&&_!==(_="collapse-item "+(e[1]?"":"collapse-item--no-borders")))&&g(t,"class",_)},i(u){h||(p(o),p(n),p(f),h=!0)},o(u){k(o),k(n),k(f),h=!1},d(u){u&&m(t),b[i].d(),v[l].d(),f&&f.d(),w=!1,W(q)}}}function ke(e,t,s){let i,{$$slots:o={},$$scope:r}=t;const l=le(o);let{name:n}=t,{toggleOnTriggerOnly:a=!1}=t,{bordered:_=!0}=t,h=!1;const{activeItems:w}=z("activeItems");te(e,w,c=>s(8,i=c));const{updateCollapseItems:q}=z("updateCollapseItems"),y=(c,f,u=null)=>{if(c==="trigger"&&a||c==="header"&&!a||c==="header focus"&&!a&&(u==null?void 0:u.key)==="Enter"||c==="trigger focus"&&a&&(u==null?void 0:u.key)==="Enter")q(f),s(2,h=!h);else return},b=(c,{speed:f=1})=>({duration:300*f,css:u=>`max-height: ${u*c.offsetHeight}px; margin-bottom: ${u*20}px;`,easing:fe}),T=c=>y("trigger focus",n,c),N=c=>y("trigger focus",n,c),v=c=>y("header focus",n,c);return e.$$set=c=>{"name"in c&&s(0,n=c.name),"toggleOnTriggerOnly"in c&&s(7,a=c.toggleOnTriggerOnly),"bordered"in c&&s(1,_=c.bordered),"$$scope"in c&&s(9,r=c.$$scope)},e.$$.update=()=>{e.$$.dirty&257&&(Array.isArray(i)&&i.includes(n)?s(2,h=!0):s(2,h=!1))},[n,_,h,w,y,b,l,a,i,r,o,T,N,v]}class Oe extends ${constructor(t){super(),x(this,t,ke,ve,ee,{name:0,toggleOnTriggerOnly:7,bordered:1})}}export{Ee as C,Oe as a};
