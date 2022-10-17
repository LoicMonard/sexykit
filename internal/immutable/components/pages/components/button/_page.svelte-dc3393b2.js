import{S as T,i as P,s as j,w as m,x as p,y as i,f as c,t as _,z as g,a as w,c as x,b as d,h as b,q as z,r as S,k,l as v,m as H,H as E,B as q}from"../../../../chunks/index-d67b84d5.js";import{B as W}from"../../../../chunks/Button-4b9a22ce.js";import{C as A}from"../../../../chunks/Card-9dd2fd8c.js";import{C}from"../../../../chunks/index-74ab43d1.js";import{C as D}from"../../../../chunks/CodeBlock-d08c46e0.js";import{T as I}from"../../../../chunks/Text-9dc16de8.js";function F(o){let t;return{c(){t=z("Comonly used button")},l(u){t=S(u,"Comonly used button")},m(u,e){d(u,t,e)},d(u){u&&b(t)}}}function G(o){let t;return{c(){t=z("Basic button")},l(u){t=S(u,"Basic button")},m(u,e){d(u,t,e)},d(u){u&&b(t)}}}function J(o){let t,u,e,l,$,s;return t=new W({props:{primary:!0,label:"Button",icon:"user"}}),e=new W({props:{label:"Button"}}),$=new W({props:{label:"Rounded",rounded:!0}}),{c(){m(t.$$.fragment),u=w(),m(e.$$.fragment),l=w(),m($.$$.fragment)},l(f){p(t.$$.fragment,f),u=x(f),p(e.$$.fragment,f),l=x(f),p($.$$.fragment,f)},m(f,r){i(t,f,r),d(f,u,r),i(e,f,r),d(f,l,r),i($,f,r),s=!0},p:q,i(f){s||(c(t.$$.fragment,f),c(e.$$.fragment,f),c($.$$.fragment,f),s=!0)},o(f){_(t.$$.fragment,f),_(e.$$.fragment,f),_($.$$.fragment,f),s=!1},d(f){g(t,f),f&&b(u),g(e,f),f&&b(l),g($,f)}}}function K(o){let t,u,e,l;return t=new C({props:{gap:"10px",fullWidth:!0,$$slots:{default:[J]},$$scope:{ctx:o}}}),e=new D({props:{code:`<Container gap="10px" fullWidth>
	<Button primary label="Button" icon="user" />
	<Button label="Button" />
	<Button label="Rounded" rounded />
</Container>`}}),{c(){m(t.$$.fragment),u=w(),m(e.$$.fragment)},l($){p(t.$$.fragment,$),u=x($),p(e.$$.fragment,$)},m($,s){i(t,$,s),d($,u,s),i(e,$,s),l=!0},p($,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:$}),t.$set(f)},i($){l||(c(t.$$.fragment,$),c(e.$$.fragment,$),l=!0)},o($){_(t.$$.fragment,$),_(e.$$.fragment,$),l=!1},d($){g(t,$),$&&b(u),g(e,$)}}}function N(o){let t,u;return t=new C({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[K]},$$scope:{ctx:o}}}),{c(){m(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,l){i(t,e,l),u=!0},p(e,l){const $={};l&2&&($.$$scope={dirty:l,ctx:e}),t.$set($)},i(e){u||(c(t.$$.fragment,e),u=!0)},o(e){_(t.$$.fragment,e),u=!1},d(e){g(t,e)}}}function O(o){let t,u,e,l,$,s,f;return l=new I({props:{$$slots:{default:[G]},$$scope:{ctx:o}}}),s=new A({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){t=k("h2"),u=z("Basic"),e=w(),m(l.$$.fragment),$=w(),m(s.$$.fragment)},l(r){t=v(r,"H2",{});var n=H(t);u=S(n,"Basic"),n.forEach(b),e=x(r),p(l.$$.fragment,r),$=x(r),p(s.$$.fragment,r)},m(r,n){d(r,t,n),E(t,u),d(r,e,n),i(l,r,n),d(r,$,n),i(s,r,n),f=!0},p(r,n){const a={};n&2&&(a.$$scope={dirty:n,ctx:r}),l.$set(a);const B={};n&2&&(B.$$scope={dirty:n,ctx:r}),s.$set(B)},i(r){f||(c(l.$$.fragment,r),c(s.$$.fragment,r),f=!0)},o(r){_(l.$$.fragment,r),_(s.$$.fragment,r),f=!1},d(r){r&&b(t),r&&b(e),g(l,r),r&&b($),g(s,r)}}}function Q(o){let t;return{c(){t=z("Button with icon")},l(u){t=S(u,"Button with icon")},m(u,e){d(u,t,e)},d(u){u&&b(t)}}}function U(o){let t,u,e,l,$,s,f,r;return t=new W({props:{primary:!0,label:"Add",leftIcon:"add"}}),e=new W({props:{label:"Delete",rightIcon:"trash"}}),$=new W({props:{leftIcon:"plus",icon:!0}}),f=new W({props:{leftIcon:"plus",icon:!0,rounded:!0}}),{c(){m(t.$$.fragment),u=w(),m(e.$$.fragment),l=w(),m($.$$.fragment),s=w(),m(f.$$.fragment)},l(n){p(t.$$.fragment,n),u=x(n),p(e.$$.fragment,n),l=x(n),p($.$$.fragment,n),s=x(n),p(f.$$.fragment,n)},m(n,a){i(t,n,a),d(n,u,a),i(e,n,a),d(n,l,a),i($,n,a),d(n,s,a),i(f,n,a),r=!0},p:q,i(n){r||(c(t.$$.fragment,n),c(e.$$.fragment,n),c($.$$.fragment,n),c(f.$$.fragment,n),r=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),_($.$$.fragment,n),_(f.$$.fragment,n),r=!1},d(n){g(t,n),n&&b(u),g(e,n),n&&b(l),g($,n),n&&b(s),g(f,n)}}}function V(o){let t,u,e,l;return t=new C({props:{gap:"10px",fullWidth:!0,$$slots:{default:[U]},$$scope:{ctx:o}}}),e=new D({props:{code:`<Container gap="10px" fullWidth>
	<Button primary label="Add" leftIcon="add" />
	<Button label="Delete" rightIcon="trash" />
	<Button leftIcon="plus" icon />
	<Button leftIcon="plus" icon rounded />
</Container>`}}),{c(){m(t.$$.fragment),u=w(),m(e.$$.fragment)},l($){p(t.$$.fragment,$),u=x($),p(e.$$.fragment,$)},m($,s){i(t,$,s),d($,u,s),i(e,$,s),l=!0},p($,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:$}),t.$set(f)},i($){l||(c(t.$$.fragment,$),c(e.$$.fragment,$),l=!0)},o($){_(t.$$.fragment,$),_(e.$$.fragment,$),l=!1},d($){g(t,$),$&&b(u),g(e,$)}}}function X(o){let t,u;return t=new C({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){m(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,l){i(t,e,l),u=!0},p(e,l){const $={};l&2&&($.$$scope={dirty:l,ctx:e}),t.$set($)},i(e){u||(c(t.$$.fragment,e),u=!0)},o(e){_(t.$$.fragment,e),u=!1},d(e){g(t,e)}}}function Y(o){let t,u,e,l,$,s,f;return l=new I({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),s=new A({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){t=k("h2"),u=z("With icon"),e=w(),m(l.$$.fragment),$=w(),m(s.$$.fragment)},l(r){t=v(r,"H2",{});var n=H(t);u=S(n,"With icon"),n.forEach(b),e=x(r),p(l.$$.fragment,r),$=x(r),p(s.$$.fragment,r)},m(r,n){d(r,t,n),E(t,u),d(r,e,n),i(l,r,n),d(r,$,n),i(s,r,n),f=!0},p(r,n){const a={};n&2&&(a.$$scope={dirty:n,ctx:r}),l.$set(a);const B={};n&2&&(B.$$scope={dirty:n,ctx:r}),s.$set(B)},i(r){f||(c(l.$$.fragment,r),c(s.$$.fragment,r),f=!0)},o(r){_(l.$$.fragment,r),_(s.$$.fragment,r),f=!1},d(r){r&&b(t),r&&b(e),g(l,r),r&&b($),g(s,r)}}}function Z(o){let t;return{c(){t=z("Button sizes")},l(u){t=S(u,"Button sizes")},m(u,e){d(u,t,e)},d(u){u&&b(t)}}}function y(o){let t,u,e,l,$,s;return t=new W({props:{size:"large",label:"Large"}}),e=new W({props:{primary:!0,label:"Medium"}}),$=new W({props:{size:"small",label:"Small"}}),{c(){m(t.$$.fragment),u=w(),m(e.$$.fragment),l=w(),m($.$$.fragment)},l(f){p(t.$$.fragment,f),u=x(f),p(e.$$.fragment,f),l=x(f),p($.$$.fragment,f)},m(f,r){i(t,f,r),d(f,u,r),i(e,f,r),d(f,l,r),i($,f,r),s=!0},p:q,i(f){s||(c(t.$$.fragment,f),c(e.$$.fragment,f),c($.$$.fragment,f),s=!0)},o(f){_(t.$$.fragment,f),_(e.$$.fragment,f),_($.$$.fragment,f),s=!1},d(f){g(t,f),f&&b(u),g(e,f),f&&b(l),g($,f)}}}function h(o){let t,u,e,l;return t=new C({props:{gap:"10px",fullWidth:!0,$$slots:{default:[y]},$$scope:{ctx:o}}}),e=new D({props:{code:`<Container gap="10px" fullWidth>
	<Button size="large" label="Large" />
	<Button primary label="Medium" />
	<Button size="small" label="Small" />
</Container>`}}),{c(){m(t.$$.fragment),u=w(),m(e.$$.fragment)},l($){p(t.$$.fragment,$),u=x($),p(e.$$.fragment,$)},m($,s){i(t,$,s),d($,u,s),i(e,$,s),l=!0},p($,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:$}),t.$set(f)},i($){l||(c(t.$$.fragment,$),c(e.$$.fragment,$),l=!0)},o($){_(t.$$.fragment,$),_(e.$$.fragment,$),l=!1},d($){g(t,$),$&&b(u),g(e,$)}}}function tt(o){let t,u;return t=new C({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[h]},$$scope:{ctx:o}}}),{c(){m(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,l){i(t,e,l),u=!0},p(e,l){const $={};l&2&&($.$$scope={dirty:l,ctx:e}),t.$set($)},i(e){u||(c(t.$$.fragment,e),u=!0)},o(e){_(t.$$.fragment,e),u=!1},d(e){g(t,e)}}}function et(o){let t,u,e,l,$,s,f;return l=new I({props:{$$slots:{default:[Z]},$$scope:{ctx:o}}}),s=new A({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){t=k("h2"),u=z("Sizes"),e=w(),m(l.$$.fragment),$=w(),m(s.$$.fragment)},l(r){t=v(r,"H2",{});var n=H(t);u=S(n,"Sizes"),n.forEach(b),e=x(r),p(l.$$.fragment,r),$=x(r),p(s.$$.fragment,r)},m(r,n){d(r,t,n),E(t,u),d(r,e,n),i(l,r,n),d(r,$,n),i(s,r,n),f=!0},p(r,n){const a={};n&2&&(a.$$scope={dirty:n,ctx:r}),l.$set(a);const B={};n&2&&(B.$$scope={dirty:n,ctx:r}),s.$set(B)},i(r){f||(c(l.$$.fragment,r),c(s.$$.fragment,r),f=!0)},o(r){_(l.$$.fragment,r),_(s.$$.fragment,r),f=!1},d(r){r&&b(t),r&&b(e),g(l,r),r&&b($),g(s,r)}}}function $t(o){let t,u,e,l,$,s,f,r;return t=new I({props:{$$slots:{default:[F]},$$scope:{ctx:o}}}),e=new C({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[O]},$$scope:{ctx:o}}}),$=new C({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Y]},$$scope:{ctx:o}}}),f=new C({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){m(t.$$.fragment),u=w(),m(e.$$.fragment),l=w(),m($.$$.fragment),s=w(),m(f.$$.fragment)},l(n){p(t.$$.fragment,n),u=x(n),p(e.$$.fragment,n),l=x(n),p($.$$.fragment,n),s=x(n),p(f.$$.fragment,n)},m(n,a){i(t,n,a),d(n,u,a),i(e,n,a),d(n,l,a),i($,n,a),d(n,s,a),i(f,n,a),r=!0},p(n,a){const B={};a&2&&(B.$$scope={dirty:a,ctx:n}),t.$set(B);const L={};a&2&&(L.$$scope={dirty:a,ctx:n}),e.$set(L);const M={};a&2&&(M.$$scope={dirty:a,ctx:n}),$.$set(M);const R={};a&2&&(R.$$scope={dirty:a,ctx:n}),f.$set(R)},i(n){r||(c(t.$$.fragment,n),c(e.$$.fragment,n),c($.$$.fragment,n),c(f.$$.fragment,n),r=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),_($.$$.fragment,n),_(f.$$.fragment,n),r=!1},d(n){g(t,n),n&&b(u),g(e,n),n&&b(l),g($,n),n&&b(s),g(f,n)}}}function nt(o){let t,u;return t=new C({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){m(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,l){i(t,e,l),u=!0},p(e,[l]){const $={};l&2&&($.$$scope={dirty:l,ctx:e}),t.$set($)},i(e){u||(c(t.$$.fragment,e),u=!0)},o(e){_(t.$$.fragment,e),u=!1},d(e){g(t,e)}}}function rt(o,t,u){return[!0]}class mt extends T{constructor(t){super(),P(this,t,rt,nt,j,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{mt as default};
