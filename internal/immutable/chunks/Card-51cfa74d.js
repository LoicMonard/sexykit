import{S as V,i as q,s as F,C,k as y,a as X,l as v,m as w,c as j,h as c,n as h,b as D,I as b,f as _,g as z,t as m,d as A,D as E,E as I,F as W,X as B}from"./index-cc3481cb.js";const G=o=>({}),g=o=>({});function k(o){let t,n;const d=o[6].header,a=C(d,o,o[5],g);return{c(){t=y("div"),a&&a.c(),this.h()},l(s){t=v(s,"DIV",{class:!0,style:!0});var i=w(t);a&&a.l(i),i.forEach(c),this.h()},h(){h(t,"class","card--header"),h(t,"style",o[2])},m(s,i){D(s,t,i),a&&a.m(t,null),n=!0},p(s,i){a&&a.p&&(!n||i&32)&&E(a,d,s,s[5],n?W(d,s[5],i,G):I(s[5]),g),(!n||i&4)&&h(t,"style",s[2])},i(s){n||(_(a,s),n=!0)},o(s){m(a,s),n=!1},d(s){s&&c(t),a&&a.d(s)}}}function H(o){let t,n,d,a,s,i,l=o[4].header&&k(o);const u=o[6].default,f=C(u,o,o[5],null);return{c(){t=y("div"),l&&l.c(),n=X(),d=y("div"),f&&f.c(),this.h()},l(e){t=v(e,"DIV",{class:!0,style:!0});var r=w(t);l&&l.l(r),n=j(r),d=v(r,"DIV",{class:!0,style:!0});var S=w(d);f&&f.l(S),S.forEach(c),r.forEach(c),this.h()},h(){h(d,"class","card--body"),h(d,"style",o[3]),h(t,"class",a=`card card-shadow--${o[1]}`),h(t,"style",s=o[0]?"width: 100%;":"width: fit-content")},m(e,r){D(e,t,r),l&&l.m(t,null),b(t,n),b(t,d),f&&f.m(d,null),i=!0},p(e,[r]){e[4].header?l?(l.p(e,r),r&16&&_(l,1)):(l=k(e),l.c(),_(l,1),l.m(t,n)):l&&(z(),m(l,1,1,()=>{l=null}),A()),f&&f.p&&(!i||r&32)&&E(f,u,e,e[5],i?W(u,e[5],r,null):I(e[5]),null),(!i||r&8)&&h(d,"style",e[3]),(!i||r&2&&a!==(a=`card card-shadow--${e[1]}`))&&h(t,"class",a),(!i||r&1&&s!==(s=e[0]?"width: 100%;":"width: fit-content"))&&h(t,"style",s)},i(e){i||(_(l),_(f,e),i=!0)},o(e){m(l),m(f,e),i=!1},d(e){e&&c(t),l&&l.d(),f&&f.d(e)}}}function J(o,t,n){let{$$slots:d={},$$scope:a}=t;const s=B(d);let{fullWidth:i=!1}=t,{shadow:l="hover"}=t,{headerStyle:u=""}=t,{bodyStyle:f=""}=t;return o.$$set=e=>{"fullWidth"in e&&n(0,i=e.fullWidth),"shadow"in e&&n(1,l=e.shadow),"headerStyle"in e&&n(2,u=e.headerStyle),"bodyStyle"in e&&n(3,f=e.bodyStyle),"$$scope"in e&&n(5,a=e.$$scope)},[i,l,u,f,s,a,d]}class L extends V{constructor(t){super(),q(this,t,J,H,F,{fullWidth:0,shadow:1,headerStyle:2,bodyStyle:3})}}export{L as C};