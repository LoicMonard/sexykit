import{S as F,i as G,s as J,w as E,x as D,y as I,f as V,t as W,z as b,a as h,c as w,b as p,h as r,q as g,k as v,r as k,l as x,m as d,n as y,K as N,H as P,p as S}from"../../../../chunks/index-d72a5c04.js";/* empty css                                */import{C as z}from"../../../../chunks/Card-a1d368df.js";import{C as j}from"../../../../chunks/index-68eac868.js";import{C as q}from"../../../../chunks/CodeBlock-b1e2714f.js";import{T as R}from"../../../../chunks/Text-0afca507.js";function L(m){let e,f,s,i,t,l,$,n,a,o,u,C,c;return{c(){e=g("The "),f=v("span"),s=g("Container"),i=g(`
		component is used to organize your elements. It is flex and acts like flexboxes but embeds some
		useful features like
		`),t=v("span"),l=g("gap"),$=g(`
		,
		`),n=v("span"),a=g("direction"),o=g(`
		,
		`),u=v("span"),C=g("alignment"),c=g(`
		, etc.`),this.h()},l(_){e=k(_,"The "),f=x(_,"SPAN",{class:!0});var A=d(f);s=k(A,"Container"),A.forEach(r),i=k(_,`
		component is used to organize your elements. It is flex and acts like flexboxes but embeds some
		useful features like
		`),t=x(_,"SPAN",{class:!0});var H=d(t);l=k(H,"gap"),H.forEach(r),$=k(_,`
		,
		`),n=x(_,"SPAN",{class:!0});var T=d(n);a=k(T,"direction"),T.forEach(r),o=k(_,`
		,
		`),u=x(_,"SPAN",{class:!0});var Y=d(u);C=k(Y,"alignment"),Y.forEach(r),c=k(_,`
		, etc.`),this.h()},h(){y(f,"class","property"),y(t,"class","property"),y(n,"class","property"),y(u,"class","property")},m(_,A){p(_,e,A),p(_,f,A),N(f,s),p(_,i,A),p(_,t,A),N(t,l),p(_,$,A),p(_,n,A),N(n,a),p(_,o,A),p(_,u,A),N(u,C),p(_,c,A)},p:P,d(_){_&&r(e),_&&r(f),_&&r(i),_&&r(t),_&&r($),_&&r(n),_&&r(o),_&&r(u),_&&r(c)}}}function M(m){let e,f,s,i;return{c(){e=g("Default container only fits to its content, and is row-based. Simply add "),f=v("span"),s=g("fullWidth"),i=g(`
			 property so the Container can stretch to the parent width`),this.h()},l(t){e=k(t,"Default container only fits to its content, and is row-based. Simply add "),f=x(t,"SPAN",{class:!0});var l=d(f);s=k(l,"fullWidth"),l.forEach(r),i=k(t,`
			 property so the Container can stretch to the parent width`),this.h()},h(){y(f,"class","property")},m(t,l){p(t,e,l),p(t,f,l),N(f,s),p(t,i,l)},p:P,d(t){t&&r(e),t&&r(f),t&&r(i)}}}function O(m){let e,f,s,i,t;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(l),s=x(l,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(l),t=x(l,"DIV",{class:!0,style:!0}),d(t).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px"),y(t,"class","line svelte-1x5ht6s"),S(t,"width","150px")},m(l,$){p(l,e,$),p(l,f,$),p(l,s,$),p(l,i,$),p(l,t,$)},p:P,d(l){l&&r(e),l&&r(f),l&&r(s),l&&r(i),l&&r(t)}}}function Q(m){let e,f,s,i,t;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(l),s=x(l,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(l),t=x(l,"DIV",{class:!0,style:!0}),d(t).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"flex","1"),y(s,"class","line svelte-1x5ht6s"),S(s,"flex","1"),y(t,"class","line svelte-1x5ht6s"),S(t,"flex","1")},m(l,$){p(l,e,$),p(l,f,$),p(l,s,$),p(l,i,$),p(l,t,$)},p:P,d(l){l&&r(e),l&&r(f),l&&r(s),l&&r(i),l&&r(t)}}}function U(m){let e,f,s,i,t,l;return e=new j({props:{$$slots:{default:[O]},$$scope:{ctx:m}}}),s=new j({props:{fullWidth:!0,$$slots:{default:[Q]},$$scope:{ctx:m}}}),t=new q({props:{code:`<script>
	import Container from 'pathToReplace/Container.svelte';
<\/script>

<Container>
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
</Container>

<Container fullWidth>
  <div class="line" style="flex: 1" />
  <div class="line" style="flex: 1" />
  <div class="line" style="flex: 1" />
</Container>`}}),{c(){E(e.$$.fragment),f=h(),E(s.$$.fragment),i=h(),E(t.$$.fragment)},l($){D(e.$$.fragment,$),f=w($),D(s.$$.fragment,$),i=w($),D(t.$$.fragment,$)},m($,n){I(e,$,n),p($,f,n),I(s,$,n),p($,i,n),I(t,$,n),l=!0},p($,n){const a={};n&2&&(a.$$scope={dirty:n,ctx:$}),e.$set(a);const o={};n&2&&(o.$$scope={dirty:n,ctx:$}),s.$set(o)},i($){l||(V(e.$$.fragment,$),V(s.$$.fragment,$),V(t.$$.fragment,$),l=!0)},o($){W(e.$$.fragment,$),W(s.$$.fragment,$),W(t.$$.fragment,$),l=!1},d($){b(e,$),$&&r(f),b(s,$),$&&r(i),b(t,$)}}}function X(m){let e,f;return e=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[U]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){I(e,s,i),f=!0},p(s,i){const t={};i&2&&(t.$$scope={dirty:i,ctx:s}),e.$set(t)},i(s){f||(V(e.$$.fragment,s),f=!0)},o(s){W(e.$$.fragment,s),f=!1},d(s){b(e,s)}}}function Z(m){let e,f,s,i,t,l,$;return i=new R({props:{$$slots:{default:[M]},$$scope:{ctx:m}}}),l=new z({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[X]},$$scope:{ctx:m}}}),{c(){e=v("h2"),f=g("Default container"),s=h(),E(i.$$.fragment),t=h(),E(l.$$.fragment)},l(n){e=x(n,"H2",{});var a=d(e);f=k(a,"Default container"),a.forEach(r),s=w(n),D(i.$$.fragment,n),t=w(n),D(l.$$.fragment,n)},m(n,a){p(n,e,a),N(e,f),p(n,s,a),I(i,n,a),p(n,t,a),I(l,n,a),$=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),i.$set(o);const u={};a&2&&(u.$$scope={dirty:a,ctx:n}),l.$set(u)},i(n){$||(V(i.$$.fragment,n),V(l.$$.fragment,n),$=!0)},o(n){W(i.$$.fragment,n),W(l.$$.fragment,n),$=!1},d(n){n&&r(e),n&&r(s),b(i,n),n&&r(t),b(l,n)}}}function tt(m){let e,f,s,i,t,l,$;return{c(){e=g("Containers inherits from flexbox, so you can use "),f=v("span"),s=g("direction"),i=g(`
			property to change the direction of the container. You can also use
			`),t=v("span"),l=g("fullHeight"),$=g(`
			property to make the container take the full height of its parent.`),this.h()},l(n){e=k(n,"Containers inherits from flexbox, so you can use "),f=x(n,"SPAN",{class:!0});var a=d(f);s=k(a,"direction"),a.forEach(r),i=k(n,`
			property to change the direction of the container. You can also use
			`),t=x(n,"SPAN",{class:!0});var o=d(t);l=k(o,"fullHeight"),o.forEach(r),$=k(n,`
			property to make the container take the full height of its parent.`),this.h()},h(){y(f,"class","property"),y(t,"class","property")},m(n,a){p(n,e,a),p(n,f,a),N(f,s),p(n,i,a),p(n,t,a),N(t,l),p(n,$,a)},p:P,d(n){n&&r(e),n&&r(f),n&&r(i),n&&r(t),n&&r($)}}}function et(m){let e,f,s,i,t;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(l),s=x(l,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(l),t=x(l,"DIV",{class:!0,style:!0}),d(t).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px"),y(t,"class","line svelte-1x5ht6s"),S(t,"width","150px")},m(l,$){p(l,e,$),p(l,f,$),p(l,s,$),p(l,i,$),p(l,t,$)},p:P,d(l){l&&r(e),l&&r(f),l&&r(s),l&&r(i),l&&r(t)}}}function st(m){let e,f,s,i,t;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(l),s=x(l,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(l),t=x(l,"DIV",{class:!0,style:!0}),d(t).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),S(e,"flex","1"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px"),S(s,"flex","1"),y(t,"class","line svelte-1x5ht6s"),S(t,"width","150px"),S(t,"flex","1")},m(l,$){p(l,e,$),p(l,f,$),p(l,s,$),p(l,i,$),p(l,t,$)},p:P,d(l){l&&r(e),l&&r(f),l&&r(s),l&&r(i),l&&r(t)}}}function lt(m){let e,f,s,i;return e=new j({props:{direction:"column",$$slots:{default:[et]},$$scope:{ctx:m}}}),s=new j({props:{direction:"column",fullHeight:!0,$$slots:{default:[st]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment),f=h(),E(s.$$.fragment)},l(t){D(e.$$.fragment,t),f=w(t),D(s.$$.fragment,t)},m(t,l){I(e,t,l),p(t,f,l),I(s,t,l),i=!0},p(t,l){const $={};l&2&&($.$$scope={dirty:l,ctx:t}),e.$set($);const n={};l&2&&(n.$$scope={dirty:l,ctx:t}),s.$set(n)},i(t){i||(V(e.$$.fragment,t),V(s.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),W(s.$$.fragment,t),i=!1},d(t){b(e,t),t&&r(f),b(s,t)}}}function it(m){let e,f,s,i;return e=new j({props:{direction:"row",gap:"20px",style:"height: 150px",$$slots:{default:[lt]},$$scope:{ctx:m}}}),s=new q({props:{code:`<script>
	import Container from 'pathToReplace/Container.svelte';
<\/script>

<Container direction="column">
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
</Container>

<Container direction="column" fullHeight>
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
</Container>`}}),{c(){E(e.$$.fragment),f=h(),E(s.$$.fragment)},l(t){D(e.$$.fragment,t),f=w(t),D(s.$$.fragment,t)},m(t,l){I(e,t,l),p(t,f,l),I(s,t,l),i=!0},p(t,l){const $={};l&2&&($.$$scope={dirty:l,ctx:t}),e.$set($)},i(t){i||(V(e.$$.fragment,t),V(s.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),W(s.$$.fragment,t),i=!1},d(t){b(e,t),t&&r(f),b(s,t)}}}function ft(m){let e,f;return e=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[it]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){I(e,s,i),f=!0},p(s,i){const t={};i&2&&(t.$$scope={dirty:i,ctx:s}),e.$set(t)},i(s){f||(V(e.$$.fragment,s),f=!0)},o(s){W(e.$$.fragment,s),f=!1},d(s){b(e,s)}}}function nt(m){let e,f,s,i,t,l,$;return i=new R({props:{$$slots:{default:[tt]},$$scope:{ctx:m}}}),l=new z({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[ft]},$$scope:{ctx:m}}}),{c(){e=v("h2"),f=g("Column container"),s=h(),E(i.$$.fragment),t=h(),E(l.$$.fragment)},l(n){e=x(n,"H2",{});var a=d(e);f=k(a,"Column container"),a.forEach(r),s=w(n),D(i.$$.fragment,n),t=w(n),D(l.$$.fragment,n)},m(n,a){p(n,e,a),N(e,f),p(n,s,a),I(i,n,a),p(n,t,a),I(l,n,a),$=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),i.$set(o);const u={};a&2&&(u.$$scope={dirty:a,ctx:n}),l.$set(u)},i(n){$||(V(i.$$.fragment,n),V(l.$$.fragment,n),$=!0)},o(n){W(i.$$.fragment,n),W(l.$$.fragment,n),$=!1},d(n){n&&r(e),n&&r(s),b(i,n),n&&r(t),b(l,n)}}}function rt(m){let e,f,s,i,t,l,$,n,a,o;return{c(){e=g("You can use "),f=v("span"),s=g("align"),i=g(`
			,
			`),t=v("span"),l=g("justify"),$=g(`
			and
			`),n=v("span"),a=g("gap"),o=g(`
			 properties to align, justify and space your elements.`),this.h()},l(u){e=k(u,"You can use "),f=x(u,"SPAN",{class:!0});var C=d(f);s=k(C,"align"),C.forEach(r),i=k(u,`
			,
			`),t=x(u,"SPAN",{class:!0});var c=d(t);l=k(c,"justify"),c.forEach(r),$=k(u,`
			and
			`),n=x(u,"SPAN",{class:!0});var _=d(n);a=k(_,"gap"),_.forEach(r),o=k(u,`
			 properties to align, justify and space your elements.`),this.h()},h(){y(f,"class","property"),y(t,"class","property"),y(n,"class","property")},m(u,C){p(u,e,C),p(u,f,C),N(f,s),p(u,i,C),p(u,t,C),N(t,l),p(u,$,C),p(u,n,C),N(n,a),p(u,o,C)},p:P,d(u){u&&r(e),u&&r(f),u&&r(i),u&&r(t),u&&r($),u&&r(n),u&&r(o)}}}function $t(m){let e,f,s,i,t;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(l),s=x(l,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(l),t=x(l,"DIV",{class:!0,style:!0}),d(t).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"flex","1"),y(s,"class","line svelte-1x5ht6s"),S(s,"flex","1"),y(t,"class","line svelte-1x5ht6s"),S(t,"flex","1")},m(l,$){p(l,e,$),p(l,f,$),p(l,s,$),p(l,i,$),p(l,t,$)},p:P,d(l){l&&r(e),l&&r(f),l&&r(s),l&&r(i),l&&r(t)}}}function ut(m){let e,f,s,i,t;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(l),s=x(l,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(l),t=x(l,"DIV",{class:!0,style:!0}),d(t).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px"),y(t,"class","line svelte-1x5ht6s"),S(t,"width","150px")},m(l,$){p(l,e,$),p(l,f,$),p(l,s,$),p(l,i,$),p(l,t,$)},p:P,d(l){l&&r(e),l&&r(f),l&&r(s),l&&r(i),l&&r(t)}}}function pt(m){let e,f,s,i,t,l,$,n,a;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),l=h(),$=v("div"),n=h(),a=v("div"),this.h()},l(o){e=x(o,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(o),s=x(o,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(o),t=x(o,"DIV",{class:!0,style:!0}),d(t).forEach(r),l=w(o),$=x(o,"DIV",{class:!0,style:!0}),d($).forEach(r),n=w(o),a=x(o,"DIV",{class:!0,style:!0}),d(a).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px"),y(t,"class","line svelte-1x5ht6s"),S(t,"width","150px"),y($,"class","line svelte-1x5ht6s"),S($,"width","150px"),y(a,"class","line svelte-1x5ht6s"),S(a,"width","150px")},m(o,u){p(o,e,u),p(o,f,u),p(o,s,u),p(o,i,u),p(o,t,u),p(o,l,u),p(o,$,u),p(o,n,u),p(o,a,u)},p:P,d(o){o&&r(e),o&&r(f),o&&r(s),o&&r(i),o&&r(t),o&&r(l),o&&r($),o&&r(n),o&&r(a)}}}function at(m){let e,f,s;return{c(){e=v("div"),f=h(),s=v("div"),this.h()},l(i){e=x(i,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(i),s=x(i,"DIV",{class:!0,style:!0}),d(s).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"flex","1"),y(s,"class","line svelte-1x5ht6s"),S(s,"flex","1")},m(i,t){p(i,e,t),p(i,f,t),p(i,s,t)},p:P,d(i){i&&r(e),i&&r(f),i&&r(s)}}}function ot(m){let e,f,s;return{c(){e=v("div"),f=h(),s=v("div"),this.h()},l(i){e=x(i,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(i),s=x(i,"DIV",{class:!0,style:!0}),d(s).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px")},m(i,t){p(i,e,t),p(i,f,t),p(i,s,t)},p:P,d(i){i&&r(e),i&&r(f),i&&r(s)}}}function ct(m){let e,f,s;return{c(){e=v("div"),f=h(),s=v("div"),this.h()},l(i){e=x(i,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(i),s=x(i,"DIV",{class:!0,style:!0}),d(s).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px")},m(i,t){p(i,e,t),p(i,f,t),p(i,s,t)},p:P,d(i){i&&r(e),i&&r(f),i&&r(s)}}}function mt(m){let e,f,s,i,t,l,$,n,a,o,u,C;return e=new j({props:{direction:"row",fullWidth:!0,gap:"4px",$$slots:{default:[$t]},$$scope:{ctx:m}}}),s=new j({props:{direction:"row",fullWidth:!0,justify:"center",gap:"50px",$$slots:{default:[ut]},$$scope:{ctx:m}}}),t=new j({props:{direction:"row",fullWidth:!0,justify:"space-evenly",$$slots:{default:[pt]},$$scope:{ctx:m}}}),$=new j({props:{direction:"row",fullWidth:!0,justify:"space-between",gap:"50px",$$slots:{default:[at]},$$scope:{ctx:m}}}),a=new j({props:{direction:"row",fullWidth:!0,justify:"end",gap:"4px",$$slots:{default:[ot]},$$scope:{ctx:m}}}),u=new j({props:{direction:"column",fullWidth:!0,gap:"4px",align:"center",style:"background-color: #f5f5f5",$$slots:{default:[ct]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment),f=h(),E(s.$$.fragment),i=h(),E(t.$$.fragment),l=h(),E($.$$.fragment),n=h(),E(a.$$.fragment),o=h(),E(u.$$.fragment)},l(c){D(e.$$.fragment,c),f=w(c),D(s.$$.fragment,c),i=w(c),D(t.$$.fragment,c),l=w(c),D($.$$.fragment,c),n=w(c),D(a.$$.fragment,c),o=w(c),D(u.$$.fragment,c)},m(c,_){I(e,c,_),p(c,f,_),I(s,c,_),p(c,i,_),I(t,c,_),p(c,l,_),I($,c,_),p(c,n,_),I(a,c,_),p(c,o,_),I(u,c,_),C=!0},p(c,_){const A={};_&2&&(A.$$scope={dirty:_,ctx:c}),e.$set(A);const H={};_&2&&(H.$$scope={dirty:_,ctx:c}),s.$set(H);const T={};_&2&&(T.$$scope={dirty:_,ctx:c}),t.$set(T);const Y={};_&2&&(Y.$$scope={dirty:_,ctx:c}),$.$set(Y);const B={};_&2&&(B.$$scope={dirty:_,ctx:c}),a.$set(B);const K={};_&2&&(K.$$scope={dirty:_,ctx:c}),u.$set(K)},i(c){C||(V(e.$$.fragment,c),V(s.$$.fragment,c),V(t.$$.fragment,c),V($.$$.fragment,c),V(a.$$.fragment,c),V(u.$$.fragment,c),C=!0)},o(c){W(e.$$.fragment,c),W(s.$$.fragment,c),W(t.$$.fragment,c),W($.$$.fragment,c),W(a.$$.fragment,c),W(u.$$.fragment,c),C=!1},d(c){b(e,c),c&&r(f),b(s,c),c&&r(i),b(t,c),c&&r(l),b($,c),c&&r(n),b(a,c),c&&r(o),b(u,c)}}}function _t(m){let e,f,s,i;return e=new j({props:{direction:"column",fullWidth:!0,gap:"20px",$$slots:{default:[mt]},$$scope:{ctx:m}}}),s=new q({props:{code:`<script>
	import Container from 'pathToReplace/Container.svelte';
<\/script>

<Container direction="column" fullWidth gap="20px">
  <Container direction="row" fullWidth gap="4px">
    <div class="line" style="flex: 1;" />
    <div class="line" style="flex: 1;" />
    <div class="line" style="flex: 1;" />
  </Container>

  <Container direction="row" fullWidth justify="center" gap="50px">
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>

  <Container direction="row" fullWidth justify="space-evenly">
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>

  <Container direction="row" fullWidth justify="space-between" gap="50px">
    <div class="line" style="flex: 1;" />
    <div class="line" style="flex: 1;" />
  </Container>

  <Container direction="row" fullWidth justify="end" gap="4px">
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>
  
  <Container
    direction="column"
    fullWidth
    gap="4px"
    align="center"
    style="background-color: #f5f5f5"
  >
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>
</Container>`}}),{c(){E(e.$$.fragment),f=h(),E(s.$$.fragment)},l(t){D(e.$$.fragment,t),f=w(t),D(s.$$.fragment,t)},m(t,l){I(e,t,l),p(t,f,l),I(s,t,l),i=!0},p(t,l){const $={};l&2&&($.$$scope={dirty:l,ctx:t}),e.$set($)},i(t){i||(V(e.$$.fragment,t),V(s.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),W(s.$$.fragment,t),i=!1},d(t){b(e,t),t&&r(f),b(s,t)}}}function vt(m){let e,f;return e=new j({props:{direction:"column",fullWidth:!0,gap:"20px",$$slots:{default:[_t]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){I(e,s,i),f=!0},p(s,i){const t={};i&2&&(t.$$scope={dirty:i,ctx:s}),e.$set(t)},i(s){f||(V(e.$$.fragment,s),f=!0)},o(s){W(e.$$.fragment,s),f=!1},d(s){b(e,s)}}}function xt(m){let e,f,s,i,t,l,$;return i=new R({props:{$$slots:{default:[rt]},$$scope:{ctx:m}}}),l=new z({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[vt]},$$scope:{ctx:m}}}),{c(){e=v("h2"),f=g("Alignment, justifying and spacing"),s=h(),E(i.$$.fragment),t=h(),E(l.$$.fragment)},l(n){e=x(n,"H2",{});var a=d(e);f=k(a,"Alignment, justifying and spacing"),a.forEach(r),s=w(n),D(i.$$.fragment,n),t=w(n),D(l.$$.fragment,n)},m(n,a){p(n,e,a),N(e,f),p(n,s,a),I(i,n,a),p(n,t,a),I(l,n,a),$=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),i.$set(o);const u={};a&2&&(u.$$scope={dirty:a,ctx:n}),l.$set(u)},i(n){$||(V(i.$$.fragment,n),V(l.$$.fragment,n),$=!0)},o(n){W(i.$$.fragment,n),W(l.$$.fragment,n),$=!1},d(n){n&&r(e),n&&r(s),b(i,n),n&&r(t),b(l,n)}}}function dt(m){let e,f,s,i;return{c(){e=g("You can use "),f=v("span"),s=g("style"),i=g(`
			 property to add custom style to your container.`),this.h()},l(t){e=k(t,"You can use "),f=x(t,"SPAN",{class:!0});var l=d(f);s=k(l,"style"),l.forEach(r),i=k(t,`
			 property to add custom style to your container.`),this.h()},h(){y(f,"class","property")},m(t,l){p(t,e,l),p(t,f,l),N(f,s),p(t,i,l)},p:P,d(t){t&&r(e),t&&r(f),t&&r(i)}}}function ht(m){let e,f,s,i,t;return{c(){e=v("div"),f=h(),s=v("div"),i=h(),t=v("div"),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0}),d(e).forEach(r),f=w(l),s=x(l,"DIV",{class:!0,style:!0}),d(s).forEach(r),i=w(l),t=x(l,"DIV",{class:!0,style:!0}),d(t).forEach(r),this.h()},h(){y(e,"class","line svelte-1x5ht6s"),S(e,"width","150px"),y(s,"class","line svelte-1x5ht6s"),S(s,"width","150px"),y(t,"class","line svelte-1x5ht6s"),S(t,"width","150px")},m(l,$){p(l,e,$),p(l,f,$),p(l,s,$),p(l,i,$),p(l,t,$)},p:P,d(l){l&&r(e),l&&r(f),l&&r(s),l&&r(i),l&&r(t)}}}function wt(m){let e,f,s,i;return e=new j({props:{direction:"row",gap:"20px",fullWidth:!0,justify:"space-evenly",style:"padding: 10px; background-color: #f5f5f5;",$$slots:{default:[ht]},$$scope:{ctx:m}}}),s=new q({props:{code:`<script>
	import Container from 'pathToReplace/Container.svelte';
<\/script>

<Container direction="column">
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
</Container>

<Container direction="column" fullHeight justify="space-between">
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
</Container>`}}),{c(){E(e.$$.fragment),f=h(),E(s.$$.fragment)},l(t){D(e.$$.fragment,t),f=w(t),D(s.$$.fragment,t)},m(t,l){I(e,t,l),p(t,f,l),I(s,t,l),i=!0},p(t,l){const $={};l&2&&($.$$scope={dirty:l,ctx:t}),e.$set($)},i(t){i||(V(e.$$.fragment,t),V(s.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),W(s.$$.fragment,t),i=!1},d(t){b(e,t),t&&r(f),b(s,t)}}}function yt(m){let e,f;return e=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[wt]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){I(e,s,i),f=!0},p(s,i){const t={};i&2&&(t.$$scope={dirty:i,ctx:s}),e.$set(t)},i(s){f||(V(e.$$.fragment,s),f=!0)},o(s){W(e.$$.fragment,s),f=!1},d(s){b(e,s)}}}function Ct(m){let e,f,s,i,t,l,$;return i=new R({props:{$$slots:{default:[dt]},$$scope:{ctx:m}}}),l=new z({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[yt]},$$scope:{ctx:m}}}),{c(){e=v("h2"),f=g("Custom style container"),s=h(),E(i.$$.fragment),t=h(),E(l.$$.fragment)},l(n){e=x(n,"H2",{});var a=d(e);f=k(a,"Custom style container"),a.forEach(r),s=w(n),D(i.$$.fragment,n),t=w(n),D(l.$$.fragment,n)},m(n,a){p(n,e,a),N(e,f),p(n,s,a),I(i,n,a),p(n,t,a),I(l,n,a),$=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),i.$set(o);const u={};a&2&&(u.$$scope={dirty:a,ctx:n}),l.$set(u)},i(n){$||(V(i.$$.fragment,n),V(l.$$.fragment,n),$=!0)},o(n){W(i.$$.fragment,n),W(l.$$.fragment,n),$=!1},d(n){n&&r(e),n&&r(s),b(i,n),n&&r(t),b(l,n)}}}function Et(m){let e,f,s,i,t,l,$,n,a,o;return e=new R({props:{$$slots:{default:[L]},$$scope:{ctx:m}}}),s=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Z]},$$scope:{ctx:m}}}),t=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[nt]},$$scope:{ctx:m}}}),$=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[xt]},$$scope:{ctx:m}}}),a=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Ct]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment),f=h(),E(s.$$.fragment),i=h(),E(t.$$.fragment),l=h(),E($.$$.fragment),n=h(),E(a.$$.fragment)},l(u){D(e.$$.fragment,u),f=w(u),D(s.$$.fragment,u),i=w(u),D(t.$$.fragment,u),l=w(u),D($.$$.fragment,u),n=w(u),D(a.$$.fragment,u)},m(u,C){I(e,u,C),p(u,f,C),I(s,u,C),p(u,i,C),I(t,u,C),p(u,l,C),I($,u,C),p(u,n,C),I(a,u,C),o=!0},p(u,C){const c={};C&2&&(c.$$scope={dirty:C,ctx:u}),e.$set(c);const _={};C&2&&(_.$$scope={dirty:C,ctx:u}),s.$set(_);const A={};C&2&&(A.$$scope={dirty:C,ctx:u}),t.$set(A);const H={};C&2&&(H.$$scope={dirty:C,ctx:u}),$.$set(H);const T={};C&2&&(T.$$scope={dirty:C,ctx:u}),a.$set(T)},i(u){o||(V(e.$$.fragment,u),V(s.$$.fragment,u),V(t.$$.fragment,u),V($.$$.fragment,u),V(a.$$.fragment,u),o=!0)},o(u){W(e.$$.fragment,u),W(s.$$.fragment,u),W(t.$$.fragment,u),W($.$$.fragment,u),W(a.$$.fragment,u),o=!1},d(u){b(e,u),u&&r(f),b(s,u),u&&r(i),b(t,u),u&&r(l),b($,u),u&&r(n),b(a,u)}}}function Dt(m){let e,f;return e=new j({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Et]},$$scope:{ctx:m}}}),{c(){E(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){I(e,s,i),f=!0},p(s,[i]){const t={};i&2&&(t.$$scope={dirty:i,ctx:s}),e.$set(t)},i(s){f||(V(e.$$.fragment,s),f=!0)},o(s){W(e.$$.fragment,s),f=!1},d(s){b(e,s)}}}function It(m,e,f){return[!0]}class jt extends F{constructor(e){super(),G(this,e,It,Dt,J,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{jt as default};
