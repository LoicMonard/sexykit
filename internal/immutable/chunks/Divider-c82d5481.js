import{S as H,i as z,s as K,k as y,a as B,q as ie,l as E,m as k,c as C,r as ne,h as I,n as _,b as w,H as p,I as R,u as ae,f as g,g as M,t as D,d as O,K as se,L as fe,P as re,Q as j,R as Y,w as Z,x,y as $,z as ee,M as te,p as A,B as F}from"./index-d67b84d5.js";import{q as ce}from"./index-74ab43d1.js";function G(n,e,l){const t=n.slice();return t[11]=e[l],t}function J(n){let e,l,t;return{c(){e=y("div"),l=y("i"),this.h()},l(i){e=E(i,"DIV",{class:!0});var a=k(e);l=E(a,"I",{class:!0}),k(l).forEach(I),a.forEach(I),this.h()},h(){_(l,"class",t="fa-solid fa-"+n[0].icon),_(e,"class","sidenavItem__icon")},m(i,a){w(i,e,a),p(e,l)},p(i,a){a&1&&t!==(t="fa-solid fa-"+i[0].icon)&&_(l,"class",t)},d(i){i&&I(e)}}}function N(n){let e,l;return{c(){e=y("i"),this.h()},l(t){e=E(t,"I",{class:!0}),k(e).forEach(I),this.h()},h(){_(e,"class",l="sidenavItem__chevron "+(n[6]?"sidenavItem__chevron--open":"")+" fa-solid fa-chevron-right")},m(t,i){w(t,e,i)},p(t,i){i&64&&l!==(l="sidenavItem__chevron "+(t[6]?"sidenavItem__chevron--open":"")+" fa-solid fa-chevron-right")&&_(e,"class",l)},d(t){t&&I(e)}}}function T(n){let e,l,t,i=n[0].children,a=[];for(let s=0;s<i.length;s+=1)a[s]=U(G(n,i,s));const c=s=>D(a[s],1,1,()=>{a[s]=null});return{c(){e=y("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var f=k(e);for(let r=0;r<a.length;r+=1)a[r].l(f);f.forEach(I),this.h()},h(){_(e,"class","sidenavItem__children")},m(s,f){w(s,e,f);for(let r=0;r<a.length;r+=1)a[r].m(e,null);t=!0},p(s,f){if(f&63){i=s[0].children;let r;for(r=0;r<i.length;r+=1){const L=G(s,i,r);a[r]?(a[r].p(L,f),g(a[r],1)):(a[r]=U(L),a[r].c(),g(a[r],1),a[r].m(e,null))}for(M(),r=i.length;r<a.length;r+=1)c(r);O()}},i(s){if(!t){for(let f=0;f<i.length;f+=1)g(a[f]);re(()=>{l||(l=j(e,n[8],{},!0)),l.run(1)}),t=!0}},o(s){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)D(a[f]);l||(l=j(e,n[8],{},!1)),l.run(0),t=!1},d(s){s&&I(e),Y(a,s),s&&l&&l.end()}}}function U(n){let e,l;return e=new le({props:{item:n[11],depth:n[1]+1,activeItem:n[2],itemStyle:n[4],firstLevelItemStyle:n[3],defaultExpandedItems:n[5]}}),e.$on("click",n[9]),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,i){$(e,t,i),l=!0},p(t,i){const a={};i&1&&(a.item=t[11]),i&2&&(a.depth=t[1]+1),i&4&&(a.activeItem=t[2]),i&16&&(a.itemStyle=t[4]),i&8&&(a.firstLevelItemStyle=t[3]),i&32&&(a.defaultExpandedItems=t[5]),e.$set(a)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function oe(n){var P;let e,l,t,i,a=n[0].label+"",c,s,f,r,L,V,S,q,o,m=n[0].icon&&J(n),h=((P=n[0].children)==null?void 0:P.length)&&N(n),u=n[6]&&T(n);return{c(){e=y("div"),l=y("div"),m&&m.c(),t=B(),i=y("div"),c=ie(a),f=B(),h&&h.c(),L=B(),u&&u.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=k(e);l=E(v,"DIV",{class:!0,style:!0,tabindex:!0,role:!0});var b=k(l);m&&m.l(b),t=C(b),i=E(b,"DIV",{class:!0,style:!0});var Q=k(i);c=ne(Q,a),Q.forEach(I),f=C(b),h&&h.l(b),b.forEach(I),L=C(v),u&&u.l(v),v.forEach(I),this.h()},h(){_(i,"class","sidenavItem__label"),_(i,"style",s=n[1]===0?n[3]:""),_(l,"class","sidenavItem__trigger"),_(l,"style",r="padding-left: "+(n[1]+1)*20+"px; "+n[4]),_(l,"tabindex","0"),_(l,"role","button"),_(e,"class",V="sidenavItem "+(n[0].label===n[2]?"sidenavItem--active":""))},m(d,v){w(d,e,v),p(e,l),m&&m.m(l,null),p(l,t),p(l,i),p(i,c),p(l,f),h&&h.m(l,null),p(e,L),u&&u.m(e,null),S=!0,q||(o=[R(l,"click",n[7]),R(l,"keydown",n[7])],q=!0)},p(d,[v]){var b;d[0].icon?m?m.p(d,v):(m=J(d),m.c(),m.m(l,t)):m&&(m.d(1),m=null),(!S||v&1)&&a!==(a=d[0].label+"")&&ae(c,a),(!S||v&10&&s!==(s=d[1]===0?d[3]:""))&&_(i,"style",s),(b=d[0].children)!=null&&b.length?h?h.p(d,v):(h=N(d),h.c(),h.m(l,null)):h&&(h.d(1),h=null),(!S||v&18&&r!==(r="padding-left: "+(d[1]+1)*20+"px; "+d[4]))&&_(l,"style",r),d[6]?u?(u.p(d,v),v&64&&g(u,1)):(u=T(d),u.c(),g(u,1),u.m(e,null)):u&&(M(),D(u,1,1,()=>{u=null}),O()),(!S||v&5&&V!==(V="sidenavItem "+(d[0].label===d[2]?"sidenavItem--active":"")))&&_(e,"class",V)},i(d){S||(g(u),S=!0)},o(d){D(u),S=!1},d(d){d&&I(e),m&&m.d(),h&&h.d(),u&&u.d(),q=!1,se(o)}}}function de(n,e,l){let{item:t}=e,{depth:i}=e,{activeItem:a}=e,{firstLevelItemStyle:c}=e,{itemStyle:s}=e,{defaultExpandedItems:f=[]}=e,r=f[0]=="*"||f.includes(t.label);const L=fe(),V=(o=null)=>{var m;((o==null?void 0:o.type)==="click"||(o==null?void 0:o.key)==="Enter")&&(l(6,r=!r),(m=t.children)!=null&&m.length||L("click",t))},S=(o,{speed:m=1})=>({duration:200*m,css:h=>`max-height: ${h*o.offsetHeight}px;`,easing:ce});function q(o){te.call(this,n,o)}return n.$$set=o=>{"item"in o&&l(0,t=o.item),"depth"in o&&l(1,i=o.depth),"activeItem"in o&&l(2,a=o.activeItem),"firstLevelItemStyle"in o&&l(3,c=o.firstLevelItemStyle),"itemStyle"in o&&l(4,s=o.itemStyle),"defaultExpandedItems"in o&&l(5,f=o.defaultExpandedItems)},[t,i,a,c,s,f,r,V,S,q]}class le extends H{constructor(e){super(),z(this,e,de,oe,K,{item:0,depth:1,activeItem:2,firstLevelItemStyle:3,itemStyle:4,defaultExpandedItems:5})}}function W(n,e,l){const t=n.slice();return t[6]=e[l],t}function X(n){let e,l;return e=new le({props:{item:n[6],depth:0,activeItem:n[1],itemStyle:n[3],firstLevelItemStyle:n[2],defaultExpandedItems:n[4]}}),e.$on("click",n[5]),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,i){$(e,t,i),l=!0},p(t,i){const a={};i&1&&(a.item=t[6]),i&2&&(a.activeItem=t[1]),i&8&&(a.itemStyle=t[3]),i&4&&(a.firstLevelItemStyle=t[2]),i&16&&(a.defaultExpandedItems=t[4]),e.$set(a)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function me(n){let e,l,t=n[0],i=[];for(let c=0;c<t.length;c+=1)i[c]=X(W(n,t,c));const a=c=>D(i[c],1,1,()=>{i[c]=null});return{c(){e=y("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var s=k(e);for(let f=0;f<i.length;f+=1)i[f].l(s);s.forEach(I),this.h()},h(){_(e,"class","sidenav")},m(c,s){w(c,e,s);for(let f=0;f<i.length;f+=1)i[f].m(e,null);l=!0},p(c,[s]){if(s&31){t=c[0];let f;for(f=0;f<t.length;f+=1){const r=W(c,t,f);i[f]?(i[f].p(r,s),g(i[f],1)):(i[f]=X(r),i[f].c(),g(i[f],1),i[f].m(e,null))}for(M(),f=t.length;f<i.length;f+=1)a(f);O()}},i(c){if(!l){for(let s=0;s<t.length;s+=1)g(i[s]);l=!0}},o(c){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)D(i[s]);l=!1},d(c){c&&I(e),Y(i,c)}}}function ue(n,e,l){let{tree:t=[]}=e,{activeItem:i}=e,{firstLevelItemStyle:a}=e,{itemStyle:c}=e,{defaultExpandedItems:s=[]}=e;function f(r){te.call(this,n,r)}return n.$$set=r=>{"tree"in r&&l(0,t=r.tree),"activeItem"in r&&l(1,i=r.activeItem),"firstLevelItemStyle"in r&&l(2,a=r.firstLevelItemStyle),"itemStyle"in r&&l(3,c=r.itemStyle),"defaultExpandedItems"in r&&l(4,s=r.defaultExpandedItems)},[t,i,a,c,s,f]}class ge extends H{constructor(e){super(),z(this,e,ue,me,K,{tree:0,activeItem:1,firstLevelItemStyle:2,itemStyle:3,defaultExpandedItems:4})}}function he(n){let e;return{c(){e=y("div"),this.h()},l(l){e=E(l,"DIV",{class:!0,style:!0}),k(e).forEach(I),this.h()},h(){_(e,"class","divider"),A(e,"margin",n[0]+" 0")},m(l,t){w(l,e,t)},p(l,[t]){t&1&&A(e,"margin",l[0]+" 0")},i:F,o:F,d(l){l&&I(e)}}}function _e(n,e,l){let{margin:t="0px"}=e;return n.$$set=i=>{"margin"in i&&l(0,t=i.margin)},[t]}class Se extends H{constructor(e){super(),z(this,e,_e,he,K,{margin:0})}}export{Se as D,ge as S};