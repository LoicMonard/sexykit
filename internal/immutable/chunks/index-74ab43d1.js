import{S as W,i as j,s as w,C,k as H,l as b,m as q,h as y,n as d,b as D,D as E,E as O,F as S,f as k,t as F}from"./index-d67b84d5.js";function I(n){let t,l,s;const u=n[11].default,f=C(u,n,n[10],null);return{c(){t=H("div"),f&&f.c(),this.h()},l(i){t=b(i,"DIV",{id:!0,class:!0,style:!0});var a=q(t);f&&f.l(a),a.forEach(y),this.h()},h(){d(t,"id",n[0]),d(t,"class","container"),d(t,"style",l="flex-direction: "+n[1]+"; justify-content: "+n[2]+"; align-items: "+n[3]+"; gap: "+n[4]+"; padding: "+n[8]+"; width: "+(n[5]?"100%":"fit-content")+"; height: "+(n[6]?"100%":"fit-content")+"; max-width: "+n[7]+"; "+n[9])},m(i,a){D(i,t,a),f&&f.m(t,null),s=!0},p(i,[a]){f&&f.p&&(!s||a&1024)&&E(f,u,i,i[10],s?S(u,i[10],a,null):O(i[10]),null),(!s||a&1)&&d(t,"id",i[0]),(!s||a&1022&&l!==(l="flex-direction: "+i[1]+"; justify-content: "+i[2]+"; align-items: "+i[3]+"; gap: "+i[4]+"; padding: "+i[8]+"; width: "+(i[5]?"100%":"fit-content")+"; height: "+(i[6]?"100%":"fit-content")+"; max-width: "+i[7]+"; "+i[9]))&&d(t,"style",l)},i(i){s||(k(f,i),s=!0)},o(i){F(f,i),s=!1},d(i){i&&y(t),f&&f.d(i)}}}function V(n,t,l){let{$$slots:s={},$$scope:u}=t,{id:f}=t,{direction:i="row"}=t,{justify:a="start"}=t,{align:h="start"}=t,{gap:g="0px"}=t,{fullWidth:_=!1}=t,{fullHeight:m=!1}=t,{maxWidth:o="100%"}=t,{padding:c="0px"}=t,{style:r=""}=t;return n.$$set=e=>{"id"in e&&l(0,f=e.id),"direction"in e&&l(1,i=e.direction),"justify"in e&&l(2,a=e.justify),"align"in e&&l(3,h=e.align),"gap"in e&&l(4,g=e.gap),"fullWidth"in e&&l(5,_=e.fullWidth),"fullHeight"in e&&l(6,m=e.fullHeight),"maxWidth"in e&&l(7,o=e.maxWidth),"padding"in e&&l(8,c=e.padding),"style"in e&&l(9,r=e.style),"$$scope"in e&&l(10,u=e.$$scope)},[f,i,a,h,g,_,m,o,c,r,u,s]}class A extends W{constructor(t){super(),j(this,t,V,I,w,{id:0,direction:1,justify:2,align:3,gap:4,fullWidth:5,fullHeight:6,maxWidth:7,padding:8,style:9})}}function B(n){const t=n-1;return t*t*t+1}function G(n){return-n*(n-2)}export{A as C,B as c,G as q};