import{S as J,i as K,s as N,k as v,a as Q,l as y,m as L,c as V,h as g,n as I,b as U,J as E,M as T,f as A,g as z,d as G,Q as P,R,t as D,T as H,O as W,L as X,q as S,r as C,U as Y,u as F}from"./index-2bfe2af9.js";import{f as O,s as j}from"./index-49e42792.js";function q(t,e,l){const u=t.slice();return u[13]=e[l],u}function B(t){let e,l=t[13][t[1]]+"",u,r,f,d,m,h;function s(..._){return t[9](t[13],..._)}return{c(){e=v("li"),u=S(l),this.h()},l(_){e=y(_,"LI",{class:!0});var a=L(e);u=C(a,l),a.forEach(g),this.h()},h(){I(e,"class",r=["itemlist__option",`${t[13].disabled?"itemlist__option--disabled":""}`,`${t[3].find(s)?"itemlist__option--selected":""}`,`${t[4]===t[13]?"itemlist__option--focused":""}`].join(" "))},m(_,a){U(_,e,a),E(e,u),d=!0,m||(h=T(e,"mousedown",function(){Y(t[5](t[13]))&&t[5](t[13]).apply(this,arguments)}),m=!0)},p(_,a){t=_,(!d||a&3)&&l!==(l=t[13][t[1]]+"")&&F(u,l),(!d||a&25&&r!==(r=["itemlist__option",`${t[13].disabled?"itemlist__option--disabled":""}`,`${t[3].find(s)?"itemlist__option--selected":""}`,`${t[4]===t[13]?"itemlist__option--focused":""}`].join(" ")))&&I(e,"class",r)},i(_){d||(P(()=>{f||(f=R(e,j,{},!0)),f.run(1)}),d=!0)},o(_){f||(f=R(e,j,{},!1)),f.run(0),d=!1},d(_){_&&g(e),_&&f&&f.end(),m=!1,h()}}}function M(t){let e,l,u;return{c(){e=v("ul"),l=v("li"),u=S(t[2]),this.h()},l(r){e=y(r,"UL",{class:!0});var f=L(e);l=y(f,"LI",{});var d=L(l);u=C(d,t[2]),d.forEach(g),f.forEach(g),this.h()},h(){I(e,"class","itemlist__option itemlist__option--empty")},m(r,f){U(r,e,f),E(e,l),E(l,u)},p(r,f){f&4&&F(u,r[2])},d(r){r&&g(e)}}}function Z(t){let e,l,u,r,f,d,m,h=t[0],s=[];for(let i=0;i<h.length;i+=1)s[i]=B(q(t,h,i));const _=i=>D(s[i],1,1,()=>{s[i]=null});let a=!t[0].length&&M(t);return{c(){e=v("div"),l=v("ul");for(let i=0;i<s.length;i+=1)s[i].c();u=Q(),a&&a.c(),this.h()},l(i){e=y(i,"DIV",{class:!0,tabindex:!0,role:!0});var c=L(e);l=y(c,"UL",{class:!0});var n=L(l);for(let p=0;p<s.length;p+=1)s[p].l(n);u=V(n),a&&a.l(n),n.forEach(g),c.forEach(g),this.h()},h(){I(l,"class","itemlist__options"),I(e,"class","itemlist"),I(e,"tabindex","0"),I(e,"role","button")},m(i,c){U(i,e,c),E(e,l);for(let n=0;n<s.length;n+=1)s[n].m(l,null);E(l,u),a&&a.m(l,null),f=!0,d||(m=[T(e,"keydown",t[8]),T(e,"focus",t[6]),T(e,"blur",t[7])],d=!0)},p(i,[c]){if(c&59){h=i[0];let n;for(n=0;n<h.length;n+=1){const p=q(i,h,n);s[n]?(s[n].p(p,c),A(s[n],1)):(s[n]=B(p),s[n].c(),A(s[n],1),s[n].m(l,u))}for(z(),n=h.length;n<s.length;n+=1)_(n);G()}i[0].length?a&&(a.d(1),a=null):a?a.p(i,c):(a=M(i),a.c(),a.m(l,null))},i(i){if(!f){for(let c=0;c<h.length;c+=1)A(s[c]);P(()=>{r||(r=R(l,O,{y:-10,duration:300},!0)),r.run(1)}),f=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)D(s[c]);r||(r=R(l,O,{y:-10,duration:300},!1)),r.run(0),f=!1},d(i){i&&g(e),H(s,i),a&&a.d(),i&&r&&r.end(),d=!1,W(m)}}}function x(t,e,l){let{items:u=[]}=e,{itemLabel:r="label"}=e,{noResultText:f="Pas de r\xE9sultat"}=e,{selectedItems:d=[]}=e,m=null;const h=X(),s=o=>{h("select",o)},_=()=>{l(4,m=c(u,null))},a=()=>{h("close")},i=o=>{o.key==="ArrowDown"?l(4,m=c(u,m)):o.key==="ArrowUp"?l(4,m=n(u,m)):o.key==="Enter"?h("select",m):o.key==="Escape"?h("close"):o.key},c=(o,k)=>{let w=o.indexOf(k);const b=o[w+1];return!b||b.disabled?c(o,b):b},n=(o,k)=>{let w=o.indexOf(k);const b=o[w?w-1:o.length-1];return!b||b.disabled?n(o,b):b},p=(o,k)=>k.value===o.value;return t.$$set=o=>{"items"in o&&l(0,u=o.items),"itemLabel"in o&&l(1,r=o.itemLabel),"noResultText"in o&&l(2,f=o.noResultText),"selectedItems"in o&&l(3,d=o.selectedItems)},[u,r,f,d,m,s,_,a,i,p]}class te extends J{constructor(e){super(),K(this,e,x,Z,N,{items:0,itemLabel:1,noResultText:2,selectedItems:3})}}export{te as I};
