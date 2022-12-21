import{S as j,i as q,s as H,w as d,x as g,y as w,f as h,t as b,z as v,a as S,c as k,b as i,h as $,q as c,k as A,r as m,l as D,m as T,n as y,K as C,H as N,p as I}from"../../../../chunks/index-d72a5c04.js";import{C as K}from"../../../../chunks/Card-a1d368df.js";import{C as B}from"../../../../chunks/index-cc26733c.js";import{C as R}from"../../../../chunks/CodeBlock-354db432.js";import{T as W}from"../../../../chunks/Text-0afca507.js";import{D as z}from"../../../../chunks/Dropdown-766c1bd4.js";import{B as F}from"../../../../chunks/Button-117d9dc2.js";function G(p){let n,o,e,r;return{c(){n=c("The "),o=A("span"),e=c("Dropdown"),r=c(`\r
		component is mainly used to display a list of clickable options`),this.h()},l(t){n=m(t,"The "),o=D(t,"SPAN",{class:!0});var s=T(o);e=m(s,"Dropdown"),s.forEach($),r=m(t,`\r
		component is mainly used to display a list of clickable options`),this.h()},h(){y(o,"class","property")},m(t,s){i(t,n,s),i(t,o,s),C(o,e),i(t,r,s)},p:N,d(t){t&&$(n),t&&$(o),t&&$(r)}}}function J(p){let n,o,e,r,t,s,u,f,x,a;return{c(){n=c("As the "),o=A("span"),e=c("Dropdown"),r=c(`\r
			component uses the same item list as the\r
			`),t=A("span"),s=c("Select"),u=c(`\r
			component, you will need to pass an array of objects to the\r
			`),f=A("span"),x=c("items"),a=c(`\r
			property.`),this.h()},l(l){n=m(l,"As the "),o=D(l,"SPAN",{class:!0});var _=T(o);e=m(_,"Dropdown"),_.forEach($),r=m(l,`\r
			component uses the same item list as the\r
			`),t=D(l,"SPAN",{class:!0});var E=T(t);s=m(E,"Select"),E.forEach($),u=m(l,`\r
			component, you will need to pass an array of objects to the\r
			`),f=D(l,"SPAN",{class:!0});var P=T(f);x=m(P,"items"),P.forEach($),a=m(l,`\r
			property.`),this.h()},h(){y(o,"class","property"),y(t,"class","property"),y(f,"class","property")},m(l,_){i(l,n,_),i(l,o,_),C(o,e),i(l,r,_),i(l,t,_),C(t,s),i(l,u,_),i(l,f,_),C(f,x),i(l,a,_)},p:N,d(l){l&&$(n),l&&$(o),l&&$(r),l&&$(t),l&&$(u),l&&$(f),l&&$(a)}}}function L(p){let n,o,e,r;return{c(){n=c("The "),o=A("span"),e=c("Dropdown"),r=c(`\r
			component works with a single default slot.`),this.h()},l(t){n=m(t,"The "),o=D(t,"SPAN",{class:!0});var s=T(o);e=m(s,"Dropdown"),s.forEach($),r=m(t,`\r
			component works with a single default slot.`),this.h()},h(){y(o,"class","property")},m(t,s){i(t,n,s),i(t,o,s),C(o,e),i(t,r,s)},p:N,d(t){t&&$(n),t&&$(o),t&&$(r)}}}function M(p){let n,o;return n=new F({props:{label:"Dropdown"}}),{c(){d(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,r){w(n,e,r),o=!0},p:N,i(e){o||(h(n.$$.fragment,e),o=!0)},o(e){b(n.$$.fragment,e),o=!1},d(e){v(n,e)}}}function O(p){let n,o;return{c(){n=c(`Trigger\r
							`),o=A("i"),this.h()},l(e){n=m(e,`Trigger\r
							`),o=D(e,"I",{class:!0,style:!0}),T(o).forEach($),this.h()},h(){y(o,"class","fa-solid fa-chevron-down"),I(o,"font-size","12px")},m(e,r){i(e,n,r),i(e,o,r)},p:N,d(e){e&&$(n),e&&$(o)}}}function Q(p){let n,o;return n=new W({props:{link:!0,$$slots:{default:[O]},$$scope:{ctx:p}}}),{c(){d(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,r){w(n,e,r),o=!0},p(e,r){const t={};r&8&&(t.$$scope={dirty:r,ctx:e}),n.$set(t)},i(e){o||(h(n.$$.fragment,e),o=!0)},o(e){b(n.$$.fragment,e),o=!1},d(e){v(n,e)}}}function U(p){let n,o,e,r;return n=new z({props:{items:[{value:"option1",label:"Action 1"},{value:"option2",label:"Action 2"},{value:"option3",label:"Action 3"}],$$slots:{default:[M]},$$scope:{ctx:p}}}),n.$on("change",p[1]),e=new z({props:{items:[{value:"option1",label:"Action 1"},{value:"option2",label:"Action 2",disabled:!0},{value:"option3",label:"Action 3"}],$$slots:{default:[Q]},$$scope:{ctx:p}}}),e.$on("change",p[2]),{c(){d(n.$$.fragment),o=S(),d(e.$$.fragment)},l(t){g(n.$$.fragment,t),o=k(t),g(e.$$.fragment,t)},m(t,s){w(n,t,s),i(t,o,s),w(e,t,s),r=!0},p(t,s){const u={};s&8&&(u.$$scope={dirty:s,ctx:t}),n.$set(u);const f={};s&8&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){r||(h(n.$$.fragment,t),h(e.$$.fragment,t),r=!0)},o(t){b(n.$$.fragment,t),b(e.$$.fragment,t),r=!1},d(t){v(n,t),t&&$(o),v(e,t)}}}function V(p){let n,o,e,r;return n=new B({props:{gap:"10px",fullWidth:!0,$$slots:{default:[U]},$$scope:{ctx:p}}}),e=new R({props:{code:`<script>
	import Dropdown from 'pathToReplace/Dropdown.svelte';
<\/script>

<Dropdown
  on:change={(e) => console.log(e.detail)}
  items={[
    { value: 'option1', label: 'Action 1' },
    { value: 'option2', label: 'Action 2' },
    { value: 'option3', label: 'Action 3' }
  ]}>
  <Button label="Dropdown" />
</Dropdown>
<Dropdown
  on:change={(e) => console.log(e.detail)}
  items={[
    { value: 'option1', label: 'Action 1' },
    { value: 'option2', label: 'Action 2', disabled: true },
    { value: 'option3', label: 'Action 3' }
  ]}>
  <Text link>
    Trigger
    <i class="fa-solid fa-chevron-down" style="font-size: 12px" />
  </Text>
</Dropdown>`}}),{c(){d(n.$$.fragment),o=S(),d(e.$$.fragment)},l(t){g(n.$$.fragment,t),o=k(t),g(e.$$.fragment,t)},m(t,s){w(n,t,s),i(t,o,s),w(e,t,s),r=!0},p(t,s){const u={};s&8&&(u.$$scope={dirty:s,ctx:t}),n.$set(u)},i(t){r||(h(n.$$.fragment,t),h(e.$$.fragment,t),r=!0)},o(t){b(n.$$.fragment,t),b(e.$$.fragment,t),r=!1},d(t){v(n,t),t&&$(o),v(e,t)}}}function X(p){let n,o;return n=new B({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[V]},$$scope:{ctx:p}}}),{c(){d(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,r){w(n,e,r),o=!0},p(e,r){const t={};r&8&&(t.$$scope={dirty:r,ctx:e}),n.$set(t)},i(e){o||(h(n.$$.fragment,e),o=!0)},o(e){b(n.$$.fragment,e),o=!1},d(e){v(n,e)}}}function Y(p){let n,o,e,r,t,s,u,f,x;return r=new W({props:{$$slots:{default:[J]},$$scope:{ctx:p}}}),s=new W({props:{$$slots:{default:[L]},$$scope:{ctx:p}}}),f=new K({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[X]},$$scope:{ctx:p}}}),{c(){n=A("h2"),o=c("Default dropdown"),e=S(),d(r.$$.fragment),t=S(),d(s.$$.fragment),u=S(),d(f.$$.fragment)},l(a){n=D(a,"H2",{});var l=T(n);o=m(l,"Default dropdown"),l.forEach($),e=k(a),g(r.$$.fragment,a),t=k(a),g(s.$$.fragment,a),u=k(a),g(f.$$.fragment,a)},m(a,l){i(a,n,l),C(n,o),i(a,e,l),w(r,a,l),i(a,t,l),w(s,a,l),i(a,u,l),w(f,a,l),x=!0},p(a,l){const _={};l&8&&(_.$$scope={dirty:l,ctx:a}),r.$set(_);const E={};l&8&&(E.$$scope={dirty:l,ctx:a}),s.$set(E);const P={};l&8&&(P.$$scope={dirty:l,ctx:a}),f.$set(P)},i(a){x||(h(r.$$.fragment,a),h(s.$$.fragment,a),h(f.$$.fragment,a),x=!0)},o(a){b(r.$$.fragment,a),b(s.$$.fragment,a),b(f.$$.fragment,a),x=!1},d(a){a&&$(n),a&&$(e),v(r,a),a&&$(t),v(s,a),a&&$(u),v(f,a)}}}function Z(p){let n,o,e,r;return n=new W({props:{$$slots:{default:[G]},$$scope:{ctx:p}}}),e=new B({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Y]},$$scope:{ctx:p}}}),{c(){d(n.$$.fragment),o=S(),d(e.$$.fragment)},l(t){g(n.$$.fragment,t),o=k(t),g(e.$$.fragment,t)},m(t,s){w(n,t,s),i(t,o,s),w(e,t,s),r=!0},p(t,s){const u={};s&8&&(u.$$scope={dirty:s,ctx:t}),n.$set(u);const f={};s&8&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){r||(h(n.$$.fragment,t),h(e.$$.fragment,t),r=!0)},o(t){b(n.$$.fragment,t),b(e.$$.fragment,t),r=!1},d(t){v(n,t),t&&$(o),v(e,t)}}}function tt(p){let n,o;return n=new B({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Z]},$$scope:{ctx:p}}}),{c(){d(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,r){w(n,e,r),o=!0},p(e,[r]){const t={};r&8&&(t.$$scope={dirty:r,ctx:e}),n.$set(t)},i(e){o||(h(n.$$.fragment,e),o=!0)},o(e){b(n.$$.fragment,e),o=!1},d(e){v(n,e)}}}function et(p,n,o){return[!0,s=>console.log(s.detail),s=>console.log(s.detail)]}class pt extends j{constructor(n){super(),q(this,n,et,tt,H,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{pt as default};
