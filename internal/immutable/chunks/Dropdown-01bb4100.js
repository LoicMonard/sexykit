import{S as D,i as C,s as I,C as L,k as v,a as O,l as w,m as E,h,c as $,n as _,b as S,J as b,M as g,a2 as V,D as q,E as z,F as A,f as m,g as F,t as p,d as J,O as M,L as P,w as j,x as B,y as G,z as H,A as K}from"./index-8e55f17f.js";import{I as N}from"./ItemList-48919a5b.js";function Q(n){const e=t=>{n&&!n.contains(t.target)&&!t.defaultPrevented&&n.dispatchEvent(new CustomEvent("click_outside",n))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function y(n){let e,t;return e=new N({props:{items:n[0]}}),e.$on("select",n[2]),e.$on("toggle",n[3]),e.$on("close",n[7]),{c(){j(e.$$.fragment)},l(o){B(e.$$.fragment,o)},m(o,r){G(e,o,r),t=!0},p(o,r){const u={};r&1&&(u.items=o[0]),e.$set(u)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){p(e.$$.fragment,o),t=!1},d(o){H(e,o)}}}function R(n){let e,t,o,r,u,f;const d=n[6].default,i=L(d,n,n[5],null);let s=n[1]&&y(n);return{c(){e=v("div"),t=v("div"),i&&i.c(),o=O(),s&&s.c(),this.h()},l(l){e=w(l,"DIV",{class:!0});var c=E(e);t=w(c,"DIV",{class:!0,tabindex:!0,role:!0});var a=E(t);i&&i.l(a),a.forEach(h),o=$(c),s&&s.l(c),c.forEach(h),this.h()},h(){_(t,"class","dropdown__trigger"),_(t,"tabindex","0"),_(t,"role","button"),_(e,"class","dropdown")},m(l,c){S(l,e,c),b(e,t),i&&i.m(t,null),b(e,o),s&&s.m(e,null),r=!0,u||(f=[g(t,"click",n[3]),g(t,"keydown",n[3]),V(Q.call(null,e)),g(e,"click_outside",n[4])],u=!0)},p(l,[c]){i&&i.p&&(!r||c&32)&&q(i,d,l,l[5],r?A(d,l[5],c,null):z(l[5]),null),l[1]?s?(s.p(l,c),c&2&&m(s,1)):(s=y(l),s.c(),m(s,1),s.m(e,null)):s&&(F(),p(s,1,1,()=>{s=null}),J())},i(l){r||(m(i,l),m(s),r=!0)},o(l){p(i,l),p(s),r=!1},d(l){l&&h(e),i&&i.d(l),s&&s.d(),u=!1,M(f)}}}function T(n,e,t){let{$$slots:o={},$$scope:r}=e,{items:u=[]}=e,f=!1;const d=P(),i=async a=>{const k=a.detail;k.disabled||(await K(),d("change",k),t(1,f=!1))},s=(a=null)=>{((a==null?void 0:a.type)==="click"||(a==null?void 0:a.key)==="Enter")&&t(1,f=!f)},l=()=>{t(1,f=!1)},c=a=>{t(1,f=!1)};return n.$$set=a=>{"items"in a&&t(0,u=a.items),"$$scope"in a&&t(5,r=a.$$scope)},[u,f,i,s,l,r,o,c]}class X extends D{constructor(e){super(),C(this,e,T,R,I,{items:0})}}export{X as D};
