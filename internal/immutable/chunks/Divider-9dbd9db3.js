import{S as H,i as z,s as M,k as E,a as B,q as le,l as y,m as k,c as C,r as ie,h as I,n as _,b as q,H as V,I as ne,u as ae,f as g,g as O,t as D,d as P,L as se,P as fe,Q as j,R as X,w as Y,x as Z,y as x,z as $,M as ee,p as A,B as F}from"./index-d67b84d5.js";import{q as re}from"./index-74ab43d1.js";function G(a,e,l){const t=a.slice();return t[11]=e[l],t}function J(a){let e,l,t;return{c(){e=E("div"),l=E("i"),this.h()},l(i){e=y(i,"DIV",{class:!0});var n=k(e);l=y(n,"I",{class:!0}),k(l).forEach(I),n.forEach(I),this.h()},h(){_(l,"class",t="fa-solid fa-"+a[0].icon),_(e,"class","sidenavItem__icon")},m(i,n){q(i,e,n),V(e,l)},p(i,n){n&1&&t!==(t="fa-solid fa-"+i[0].icon)&&_(l,"class",t)},d(i){i&&I(e)}}}function K(a){let e,l;return{c(){e=E("i"),this.h()},l(t){e=y(t,"I",{class:!0}),k(e).forEach(I),this.h()},h(){_(e,"class",l="sidenavItem__chevron "+(a[6]?"sidenavItem__chevron--open":"")+" fa-solid fa-chevron-right")},m(t,i){q(t,e,i)},p(t,i){i&64&&l!==(l="sidenavItem__chevron "+(t[6]?"sidenavItem__chevron--open":"")+" fa-solid fa-chevron-right")&&_(e,"class",l)},d(t){t&&I(e)}}}function N(a){let e,l,t,i=a[0].children,n=[];for(let s=0;s<i.length;s+=1)n[s]=T(G(a,i,s));const c=s=>D(n[s],1,1,()=>{n[s]=null});return{c(){e=E("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0});var f=k(e);for(let r=0;r<n.length;r+=1)n[r].l(f);f.forEach(I),this.h()},h(){_(e,"class","sidenavItem__children")},m(s,f){q(s,e,f);for(let r=0;r<n.length;r+=1)n[r].m(e,null);t=!0},p(s,f){if(f&63){i=s[0].children;let r;for(r=0;r<i.length;r+=1){const L=G(s,i,r);n[r]?(n[r].p(L,f),g(n[r],1)):(n[r]=T(L),n[r].c(),g(n[r],1),n[r].m(e,null))}for(O(),r=i.length;r<n.length;r+=1)c(r);P()}},i(s){if(!t){for(let f=0;f<i.length;f+=1)g(n[f]);fe(()=>{l||(l=j(e,a[8],{},!0)),l.run(1)}),t=!0}},o(s){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)D(n[f]);l||(l=j(e,a[8],{},!1)),l.run(0),t=!1},d(s){s&&I(e),X(n,s),s&&l&&l.end()}}}function T(a){let e,l;return e=new te({props:{item:a[11],depth:a[1]+1,activeItem:a[2],itemStyle:a[4],firstLevelItemStyle:a[3],defaultExpandedItems:a[5]}}),e.$on("click",a[9]),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){x(e,t,i),l=!0},p(t,i){const n={};i&1&&(n.item=t[11]),i&2&&(n.depth=t[1]+1),i&4&&(n.activeItem=t[2]),i&16&&(n.itemStyle=t[4]),i&8&&(n.firstLevelItemStyle=t[3]),i&32&&(n.defaultExpandedItems=t[5]),e.$set(n)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function ce(a){var Q;let e,l,t,i,n=a[0].label+"",c,s,f,r,L,p,S,w,m,u=a[0].icon&&J(a),h=((Q=a[0].children)==null?void 0:Q.length)&&K(a),d=a[6]&&N(a);return{c(){e=E("div"),l=E("div"),u&&u.c(),t=B(),i=E("div"),c=le(n),f=B(),h&&h.c(),L=B(),d&&d.c(),this.h()},l(o){e=y(o,"DIV",{class:!0});var v=k(e);l=y(v,"DIV",{class:!0,style:!0});var b=k(l);u&&u.l(b),t=C(b),i=y(b,"DIV",{class:!0,style:!0});var R=k(i);c=ie(R,n),R.forEach(I),f=C(b),h&&h.l(b),b.forEach(I),L=C(v),d&&d.l(v),v.forEach(I),this.h()},h(){_(i,"class","sidenavItem__label"),_(i,"style",s=a[1]===0?a[3]:""),_(l,"class","sidenavItem__trigger"),_(l,"style",r="padding-left: "+(a[1]+1)*20+"px; "+a[4]),_(e,"class",p="sidenavItem "+(a[0].label===a[2]?"sidenavItem--active":""))},m(o,v){q(o,e,v),V(e,l),u&&u.m(l,null),V(l,t),V(l,i),V(i,c),V(l,f),h&&h.m(l,null),V(e,L),d&&d.m(e,null),S=!0,w||(m=ne(l,"click",a[7]),w=!0)},p(o,[v]){var b;o[0].icon?u?u.p(o,v):(u=J(o),u.c(),u.m(l,t)):u&&(u.d(1),u=null),(!S||v&1)&&n!==(n=o[0].label+"")&&ae(c,n),(!S||v&10&&s!==(s=o[1]===0?o[3]:""))&&_(i,"style",s),(b=o[0].children)!=null&&b.length?h?h.p(o,v):(h=K(o),h.c(),h.m(l,null)):h&&(h.d(1),h=null),(!S||v&18&&r!==(r="padding-left: "+(o[1]+1)*20+"px; "+o[4]))&&_(l,"style",r),o[6]?d?(d.p(o,v),v&64&&g(d,1)):(d=N(o),d.c(),g(d,1),d.m(e,null)):d&&(O(),D(d,1,1,()=>{d=null}),P()),(!S||v&5&&p!==(p="sidenavItem "+(o[0].label===o[2]?"sidenavItem--active":"")))&&_(e,"class",p)},i(o){S||(g(d),S=!0)},o(o){D(d),S=!1},d(o){o&&I(e),u&&u.d(),h&&h.d(),d&&d.d(),w=!1,m()}}}function oe(a,e,l){let{item:t}=e,{depth:i}=e,{activeItem:n}=e,{firstLevelItemStyle:c}=e,{itemStyle:s}=e,{defaultExpandedItems:f=[]}=e,r=f[0]=="*"||f.includes(t.label);const L=se(),p=()=>{var m;l(6,r=!r),(m=t.children)!=null&&m.length||L("click",t)},S=(m,{speed:u=1})=>({duration:200*u,css:h=>`max-height: ${h*m.offsetHeight}px;`,easing:re});function w(m){ee.call(this,a,m)}return a.$$set=m=>{"item"in m&&l(0,t=m.item),"depth"in m&&l(1,i=m.depth),"activeItem"in m&&l(2,n=m.activeItem),"firstLevelItemStyle"in m&&l(3,c=m.firstLevelItemStyle),"itemStyle"in m&&l(4,s=m.itemStyle),"defaultExpandedItems"in m&&l(5,f=m.defaultExpandedItems)},[t,i,n,c,s,f,r,p,S,w]}class te extends H{constructor(e){super(),z(this,e,oe,ce,M,{item:0,depth:1,activeItem:2,firstLevelItemStyle:3,itemStyle:4,defaultExpandedItems:5})}}function U(a,e,l){const t=a.slice();return t[6]=e[l],t}function W(a){let e,l;return e=new te({props:{item:a[6],depth:0,activeItem:a[1],itemStyle:a[3],firstLevelItemStyle:a[2],defaultExpandedItems:a[4]}}),e.$on("click",a[5]),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){x(e,t,i),l=!0},p(t,i){const n={};i&1&&(n.item=t[6]),i&2&&(n.activeItem=t[1]),i&8&&(n.itemStyle=t[3]),i&4&&(n.firstLevelItemStyle=t[2]),i&16&&(n.defaultExpandedItems=t[4]),e.$set(n)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function me(a){let e,l,t=a[0],i=[];for(let c=0;c<t.length;c+=1)i[c]=W(U(a,t,c));const n=c=>D(i[c],1,1,()=>{i[c]=null});return{c(){e=E("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=y(c,"DIV",{class:!0});var s=k(e);for(let f=0;f<i.length;f+=1)i[f].l(s);s.forEach(I),this.h()},h(){_(e,"class","sidenav")},m(c,s){q(c,e,s);for(let f=0;f<i.length;f+=1)i[f].m(e,null);l=!0},p(c,[s]){if(s&31){t=c[0];let f;for(f=0;f<t.length;f+=1){const r=U(c,t,f);i[f]?(i[f].p(r,s),g(i[f],1)):(i[f]=W(r),i[f].c(),g(i[f],1),i[f].m(e,null))}for(O(),f=t.length;f<i.length;f+=1)n(f);P()}},i(c){if(!l){for(let s=0;s<t.length;s+=1)g(i[s]);l=!0}},o(c){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)D(i[s]);l=!1},d(c){c&&I(e),X(i,c)}}}function de(a,e,l){let{tree:t=[]}=e,{activeItem:i}=e,{firstLevelItemStyle:n}=e,{itemStyle:c}=e,{defaultExpandedItems:s=[]}=e;function f(r){ee.call(this,a,r)}return a.$$set=r=>{"tree"in r&&l(0,t=r.tree),"activeItem"in r&&l(1,i=r.activeItem),"firstLevelItemStyle"in r&&l(2,n=r.firstLevelItemStyle),"itemStyle"in r&&l(3,c=r.itemStyle),"defaultExpandedItems"in r&&l(4,s=r.defaultExpandedItems)},[t,i,n,c,s,f]}class Ie extends H{constructor(e){super(),z(this,e,de,me,M,{tree:0,activeItem:1,firstLevelItemStyle:2,itemStyle:3,defaultExpandedItems:4})}}function ue(a){let e;return{c(){e=E("div"),this.h()},l(l){e=y(l,"DIV",{class:!0,style:!0}),k(e).forEach(I),this.h()},h(){_(e,"class","divider"),A(e,"margin",a[0]+" 0")},m(l,t){q(l,e,t)},p(l,[t]){t&1&&A(e,"margin",l[0]+" 0")},i:F,o:F,d(l){l&&I(e)}}}function he(a,e,l){let{margin:t="0px"}=e;return a.$$set=i=>{"margin"in i&&l(0,t=i.margin)},[t]}class ge extends H{constructor(e){super(),z(this,e,he,ue,M,{margin:0})}}export{ge as D,Ie as S};
