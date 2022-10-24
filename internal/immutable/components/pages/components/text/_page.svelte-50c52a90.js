import{S as j,i as F,s as G,w as d,x,y as w,f as C,t as T,z as L,a as h,c as z,b as m,h as a,q as _,r as g,k as E,l as k,m as P,I as A,n as D,B as R}from"../../../../chunks/index-3a6db277.js";import{C as Y}from"../../../../chunks/Card-c7b03245.js";import{C as N}from"../../../../chunks/index-66c33c47.js";import{C as y}from"../../../../chunks/CodeBlock-5afa92e1.js";import{T as S}from"../../../../chunks/Text-bee6de0f.js";function J(u){let t;return{c(){t=_("The text component provides a simple way to style text.")},l(r){t=g(r,"The text component provides a simple way to style text.")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function K(u){let t,r,e,n;return{c(){t=_("The default text you would be using. It replaces "),r=E("span"),e=_("span"),n=_(`\r
			tags and helps homogeneity between your pages.`),this.h()},l(s){t=g(s,"The default text you would be using. It replaces "),r=k(s,"SPAN",{class:!0});var p=P(r);e=g(p,"span"),p.forEach(a),n=g(s,`\r
			tags and helps homogeneity between your pages.`),this.h()},h(){D(r,"class","property")},m(s,p){m(s,t,p),m(s,r,p),A(r,e),m(s,n,p)},p:R,d(s){s&&a(t),s&&a(r),s&&a(n)}}}function M(u){let t;return{c(){t=_("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},l(r){t=g(r,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function Q(u){let t,r;return t=new S({props:{$$slots:{default:[M]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){w(t,e,n),r=!0},p(e,n){const s={};n&2&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(C(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function U(u){let t,r,e,n;return t=new N({props:{gap:"10px",fullWidth:!0,$$slots:{default:[Q]},$$scope:{ctx:u}}}),e=new y({props:{code:`<script>
	import Text from 'pathToReplace/Text.svelte';
<\/script>

<Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
					`}}),{c(){d(t.$$.fragment),r=h(),d(e.$$.fragment)},l(s){x(t.$$.fragment,s),r=z(s),x(e.$$.fragment,s)},m(s,p){w(t,s,p),m(s,r,p),w(e,s,p),n=!0},p(s,p){const i={};p&2&&(i.$$scope={dirty:p,ctx:s}),t.$set(i)},i(s){n||(C(t.$$.fragment,s),C(e.$$.fragment,s),n=!0)},o(s){T(t.$$.fragment,s),T(e.$$.fragment,s),n=!1},d(s){L(t,s),s&&a(r),L(e,s)}}}function V(u){let t,r;return t=new N({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[U]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){w(t,e,n),r=!0},p(e,n){const s={};n&2&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(C(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function X(u){let t,r,e,n,s,p,i;return n=new S({props:{$$slots:{default:[K]},$$scope:{ctx:u}}}),p=new Y({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[V]},$$scope:{ctx:u}}}),{c(){t=E("h2"),r=_("Default text"),e=h(),d(n.$$.fragment),s=h(),d(p.$$.fragment)},l(o){t=k(o,"H2",{});var f=P(t);r=g(f,"Default text"),f.forEach(a),e=z(o),x(n.$$.fragment,o),s=z(o),x(p.$$.fragment,o)},m(o,f){m(o,t,f),A(t,r),m(o,e,f),w(n,o,f),m(o,s,f),w(p,o,f),i=!0},p(o,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:o}),n.$set(b);const c={};f&2&&(c.$$scope={dirty:f,ctx:o}),p.$set(c)},i(o){i||(C(n.$$.fragment,o),C(p.$$.fragment,o),i=!0)},o(o){T(n.$$.fragment,o),T(p.$$.fragment,o),i=!1},d(o){o&&a(t),o&&a(e),L(n,o),o&&a(s),L(p,o)}}}function Z(u){let t,r,e,n,s,p,i,o,f,b,c,W,$;return{c(){t=_("You can use a bunch of properties to change the text type, like "),r=E("span"),e=_("bold"),n=_(`\r
			,\r
			`),s=E("span"),p=_("italic"),i=_(`\r
			, or even use a custom color with\r
			`),o=E("span"),f=_("color"),b=_(`\r
			. Text component also offers a\r
			`),c=E("span"),W=_("size"),$=_(`\r
			property to change the text size.`),this.h()},l(l){t=g(l,"You can use a bunch of properties to change the text type, like "),r=k(l,"SPAN",{class:!0});var v=P(r);e=g(v,"bold"),v.forEach(a),n=g(l,`\r
			,\r
			`),s=k(l,"SPAN",{class:!0});var I=P(s);p=g(I,"italic"),I.forEach(a),i=g(l,`\r
			, or even use a custom color with\r
			`),o=k(l,"SPAN",{class:!0});var q=P(o);f=g(q,"color"),q.forEach(a),b=g(l,`\r
			. Text component also offers a\r
			`),c=k(l,"SPAN",{class:!0});var B=P(c);W=g(B,"size"),B.forEach(a),$=g(l,`\r
			property to change the text size.`),this.h()},h(){D(r,"class","property"),D(s,"class","property"),D(o,"class","property"),D(c,"class","property")},m(l,v){m(l,t,v),m(l,r,v),A(r,e),m(l,n,v),m(l,s,v),A(s,p),m(l,i,v),m(l,o,v),A(o,f),m(l,b,v),m(l,c,v),A(c,W),m(l,$,v)},p:R,d(l){l&&a(t),l&&a(r),l&&a(n),l&&a(s),l&&a(i),l&&a(o),l&&a(b),l&&a(c),l&&a($)}}}function tt(u){let t;return{c(){t=_("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},l(r){t=g(r,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function et(u){let t;return{c(){t=_("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},l(r){t=g(r,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function rt(u){let t;return{c(){t=_("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},l(r){t=g(r,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function st(u){let t;return{c(){t=_("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},l(r){t=g(r,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function ot(u){let t;return{c(){t=_("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},l(r){t=g(r,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function nt(u){let t;return{c(){t=_("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},l(r){t=g(r,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?")},m(r,e){m(r,t,e)},d(r){r&&a(t)}}}function $t(u){let t,r,e,n,s,p,i,o,f,b,c,W;return t=new S({props:{size:"small",$$slots:{default:[tt]},$$scope:{ctx:u}}}),e=new S({props:{$$slots:{default:[et]},$$scope:{ctx:u}}}),s=new S({props:{size:"large",$$slots:{default:[rt]},$$scope:{ctx:u}}}),i=new S({props:{bold:!0,$$slots:{default:[st]},$$scope:{ctx:u}}}),f=new S({props:{italic:!0,$$slots:{default:[ot]},$$scope:{ctx:u}}}),c=new S({props:{color:"red",$$slots:{default:[nt]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment),r=h(),d(e.$$.fragment),n=h(),d(s.$$.fragment),p=h(),d(i.$$.fragment),o=h(),d(f.$$.fragment),b=h(),d(c.$$.fragment)},l($){x(t.$$.fragment,$),r=z($),x(e.$$.fragment,$),n=z($),x(s.$$.fragment,$),p=z($),x(i.$$.fragment,$),o=z($),x(f.$$.fragment,$),b=z($),x(c.$$.fragment,$)},m($,l){w(t,$,l),m($,r,l),w(e,$,l),m($,n,l),w(s,$,l),m($,p,l),w(i,$,l),m($,o,l),w(f,$,l),m($,b,l),w(c,$,l),W=!0},p($,l){const v={};l&2&&(v.$$scope={dirty:l,ctx:$}),t.$set(v);const I={};l&2&&(I.$$scope={dirty:l,ctx:$}),e.$set(I);const q={};l&2&&(q.$$scope={dirty:l,ctx:$}),s.$set(q);const B={};l&2&&(B.$$scope={dirty:l,ctx:$}),i.$set(B);const H={};l&2&&(H.$$scope={dirty:l,ctx:$}),f.$set(H);const O={};l&2&&(O.$$scope={dirty:l,ctx:$}),c.$set(O)},i($){W||(C(t.$$.fragment,$),C(e.$$.fragment,$),C(s.$$.fragment,$),C(i.$$.fragment,$),C(f.$$.fragment,$),C(c.$$.fragment,$),W=!0)},o($){T(t.$$.fragment,$),T(e.$$.fragment,$),T(s.$$.fragment,$),T(i.$$.fragment,$),T(f.$$.fragment,$),T(c.$$.fragment,$),W=!1},d($){L(t,$),$&&a(r),L(e,$),$&&a(n),L(s,$),$&&a(p),L(i,$),$&&a(o),L(f,$),$&&a(b),L(c,$)}}}function it(u){let t,r,e,n;return t=new N({props:{direction:"column",gap:"10px",fullWidth:!0,$$slots:{default:[$t]},$$scope:{ctx:u}}}),e=new y({props:{code:`<script>
	import Text from 'pathToReplace/Text.svelte';
<\/script>
				
<Text size="small">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text size="large">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text bold>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text italic>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text color="red">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
					`}}),{c(){d(t.$$.fragment),r=h(),d(e.$$.fragment)},l(s){x(t.$$.fragment,s),r=z(s),x(e.$$.fragment,s)},m(s,p){w(t,s,p),m(s,r,p),w(e,s,p),n=!0},p(s,p){const i={};p&2&&(i.$$scope={dirty:p,ctx:s}),t.$set(i)},i(s){n||(C(t.$$.fragment,s),C(e.$$.fragment,s),n=!0)},o(s){T(t.$$.fragment,s),T(e.$$.fragment,s),n=!1},d(s){L(t,s),s&&a(r),L(e,s)}}}function lt(u){let t,r;return t=new N({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[it]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){w(t,e,n),r=!0},p(e,n){const s={};n&2&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(C(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function pt(u){let t,r,e,n,s,p,i;return n=new S({props:{$$slots:{default:[Z]},$$scope:{ctx:u}}}),p=new Y({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[lt]},$$scope:{ctx:u}}}),{c(){t=E("h2"),r=_("Other text types"),e=h(),d(n.$$.fragment),s=h(),d(p.$$.fragment)},l(o){t=k(o,"H2",{});var f=P(t);r=g(f,"Other text types"),f.forEach(a),e=z(o),x(n.$$.fragment,o),s=z(o),x(p.$$.fragment,o)},m(o,f){m(o,t,f),A(t,r),m(o,e,f),w(n,o,f),m(o,s,f),w(p,o,f),i=!0},p(o,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:o}),n.$set(b);const c={};f&2&&(c.$$scope={dirty:f,ctx:o}),p.$set(c)},i(o){i||(C(n.$$.fragment,o),C(p.$$.fragment,o),i=!0)},o(o){T(n.$$.fragment,o),T(p.$$.fragment,o),i=!1},d(o){o&&a(t),o&&a(e),L(n,o),o&&a(s),L(p,o)}}}function ft(u){let t,r,e,n,s,p;return t=new S({props:{$$slots:{default:[J]},$$scope:{ctx:u}}}),e=new N({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[X]},$$scope:{ctx:u}}}),s=new N({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[pt]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment),r=h(),d(e.$$.fragment),n=h(),d(s.$$.fragment)},l(i){x(t.$$.fragment,i),r=z(i),x(e.$$.fragment,i),n=z(i),x(s.$$.fragment,i)},m(i,o){w(t,i,o),m(i,r,o),w(e,i,o),m(i,n,o),w(s,i,o),p=!0},p(i,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:i}),t.$set(f);const b={};o&2&&(b.$$scope={dirty:o,ctx:i}),e.$set(b);const c={};o&2&&(c.$$scope={dirty:o,ctx:i}),s.$set(c)},i(i){p||(C(t.$$.fragment,i),C(e.$$.fragment,i),C(s.$$.fragment,i),p=!0)},o(i){T(t.$$.fragment,i),T(e.$$.fragment,i),T(s.$$.fragment,i),p=!1},d(i){L(t,i),i&&a(r),L(e,i),i&&a(n),L(s,i)}}}function at(u){let t,r;return t=new N({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[ft]},$$scope:{ctx:u}}}),{c(){d(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){w(t,e,n),r=!0},p(e,[n]){const s={};n&2&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(C(t.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ut(u,t,r){return[!0]}class xt extends j{constructor(t){super(),F(this,t,ut,at,G,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{xt as default};