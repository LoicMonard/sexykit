import{S as B,i as J,s as F,w as h,x as b,y as g,f as S,t as w,z as x,a as y,c as I,b as p,h as o,q as d,k as T,r as _,l as C,m as k,n as E,J as A,B as z}from"../../../../chunks/index-97b34f3e.js";import{C as R}from"../../../../chunks/Card-08cd6080.js";import{C as H}from"../../../../chunks/index-89521a05.js";import{C as j}from"../../../../chunks/CodeBlock-6dc55396.js";import{T as W}from"../../../../chunks/Text-4b6d6a33.js";import{S as q}from"../../../../chunks/Sidenav-d3cb8396.js";function G(f){let t,n,l,r;return{c(){t=d("The "),n=T("span"),l=d("Sidenav"),r=d(`\r
		component is a navigation component that can be used to display a tree of items.`),this.h()},l(e){t=_(e,"The "),n=C(e,"SPAN",{class:!0});var a=k(n);l=_(a,"Sidenav"),a.forEach(o),r=_(e,`\r
		component is a navigation component that can be used to display a tree of items.`),this.h()},h(){E(n,"class","property")},m(e,a){p(e,t,a),p(e,n,a),A(n,l),p(e,r,a)},p:z,d(e){e&&o(t),e&&o(n),e&&o(r)}}}function K(f){let t,n,l,r,e,a,$,s,m,v;return{c(){t=d("An array of object is used to build the whole tree of items. An item can have a "),n=T("span"),l=d("label"),r=d(`\r
			, an\r
			`),e=T("span"),a=d("icon"),$=d(`\r
			and a\r
			`),s=T("span"),m=d("children"),v=d(`\r
			array.`),this.h()},l(c){t=_(c,"An array of object is used to build the whole tree of items. An item can have a "),n=C(c,"SPAN",{class:!0});var i=k(n);l=_(i,"label"),i.forEach(o),r=_(c,`\r
			, an\r
			`),e=C(c,"SPAN",{class:!0});var u=k(e);a=_(u,"icon"),u.forEach(o),$=_(c,`\r
			and a\r
			`),s=C(c,"SPAN",{class:!0});var P=k(s);m=_(P,"children"),P.forEach(o),v=_(c,`\r
			array.`),this.h()},h(){E(n,"class","property"),E(e,"class","property"),E(s,"class","property")},m(c,i){p(c,t,i),p(c,n,i),A(n,l),p(c,r,i),p(c,e,i),A(e,a),p(c,$,i),p(c,s,i),A(s,m),p(c,v,i)},p:z,d(c){c&&o(t),c&&o(n),c&&o(r),c&&o(e),c&&o($),c&&o(s),c&&o(v)}}}function M(f){let t,n;return t=new q({props:{tree:f[1],activeItem:f[0]}}),t.$on("click",f[3]),{c(){h(t.$$.fragment)},l(l){b(t.$$.fragment,l)},m(l,r){g(t,l,r),n=!0},p(l,r){const e={};r&1&&(e.activeItem=l[0]),t.$set(e)},i(l){n||(S(t.$$.fragment,l),n=!0)},o(l){w(t.$$.fragment,l),n=!1},d(l){x(t,l)}}}function O(f){let t,n,l,r;return t=new H({props:{gap:"10px",fullWidth:!0,$$slots:{default:[M]},$$scope:{ctx:f}}}),l=new j({props:{code:`<script>
	import Sidenav from 'pathToReplace/Sidenav.svelte';

  const sidenavTree = [
		{
			label: 'Home',
			icon: 'home',
			children: [
				{
					label: 'level 1.1',
					children: [
						{
							label: 'level 1.1.1',
							children: [
								{
									label: 'level 1.1.1.1',
									children: []
								}
							]
						}
					]
				},
				{
					label: 'level 1.2',
					children: []
				}
			]
		},
		{
			label: 'Dashboard',
			icon: 'dashboard',
			children: [
				{
					label: 'level 2.1',
					children: []
				},
				{
					label: 'level 2.2',
					children: []
				},
				{
					label: 'level 2.3',
					children: []
				}
			]
		},
		{
			label: 'Settings',
			icon: 'gear',
			children: []
		}
	];

	let activeSidenavItem = 'Home';
<\/script>

<Sidenav
  tree={sidenavTree}
  activeItem={activeSidenavItem}
  on:click={(e) => {
    activeSidenavItem = e.detail.label;
  }} />`}}),{c(){h(t.$$.fragment),n=y(),h(l.$$.fragment)},l(e){b(t.$$.fragment,e),n=I(e),b(l.$$.fragment,e)},m(e,a){g(t,e,a),p(e,n,a),g(l,e,a),r=!0},p(e,a){const $={};a&33&&($.$$scope={dirty:a,ctx:e}),t.$set($)},i(e){r||(S(t.$$.fragment,e),S(l.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),w(l.$$.fragment,e),r=!1},d(e){x(t,e),e&&o(n),x(l,e)}}}function Q(f){let t,n;return t=new H({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[O]},$$scope:{ctx:f}}}),{c(){h(t.$$.fragment)},l(l){b(t.$$.fragment,l)},m(l,r){g(t,l,r),n=!0},p(l,r){const e={};r&33&&(e.$$scope={dirty:r,ctx:l}),t.$set(e)},i(l){n||(S(t.$$.fragment,l),n=!0)},o(l){w(t.$$.fragment,l),n=!1},d(l){x(t,l)}}}function U(f){let t,n,l,r,e,a,$;return r=new W({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),a=new R({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){t=T("h2"),n=d("Default sidenav"),l=y(),h(r.$$.fragment),e=y(),h(a.$$.fragment)},l(s){t=C(s,"H2",{});var m=k(t);n=_(m,"Default sidenav"),m.forEach(o),l=I(s),b(r.$$.fragment,s),e=I(s),b(a.$$.fragment,s)},m(s,m){p(s,t,m),A(t,n),p(s,l,m),g(r,s,m),p(s,e,m),g(a,s,m),$=!0},p(s,m){const v={};m&32&&(v.$$scope={dirty:m,ctx:s}),r.$set(v);const c={};m&33&&(c.$$scope={dirty:m,ctx:s}),a.$set(c)},i(s){$||(S(r.$$.fragment,s),S(a.$$.fragment,s),$=!0)},o(s){w(r.$$.fragment,s),w(a.$$.fragment,s),$=!1},d(s){s&&o(t),s&&o(l),x(r,s),s&&o(e),x(a,s)}}}function V(f){let t,n,l,r;return{c(){t=d("The "),n=T("span"),l=d("Sidenav"),r=d(`\r
			component can be customized with the following properties :`),this.h()},l(e){t=_(e,"The "),n=C(e,"SPAN",{class:!0});var a=k(n);l=_(a,"Sidenav"),a.forEach(o),r=_(e,`\r
			component can be customized with the following properties :`),this.h()},h(){E(n,"class","property")},m(e,a){p(e,t,a),p(e,n,a),A(n,l),p(e,r,a)},p:z,d(e){e&&o(t),e&&o(n),e&&o(r)}}}function X(f){let t,n,l,r;return{c(){t=d("- "),n=T("span"),l=d("firstLevelItemStyle"),r=d(`\r
			which is used to customize the only first level item`),this.h()},l(e){t=_(e,"- "),n=C(e,"SPAN",{class:!0});var a=k(n);l=_(a,"firstLevelItemStyle"),a.forEach(o),r=_(e,`\r
			which is used to customize the only first level item`),this.h()},h(){E(n,"class","property")},m(e,a){p(e,t,a),p(e,n,a),A(n,l),p(e,r,a)},p:z,d(e){e&&o(t),e&&o(n),e&&o(r)}}}function Y(f){let t,n,l,r;return{c(){t=d("- "),n=T("span"),l=d("itemStyle"),r=d(`\r
			which is used to customize every item`),this.h()},l(e){t=_(e,"- "),n=C(e,"SPAN",{class:!0});var a=k(n);l=_(a,"itemStyle"),a.forEach(o),r=_(e,`\r
			which is used to customize every item`),this.h()},h(){E(n,"class","property")},m(e,a){p(e,t,a),p(e,n,a),A(n,l),p(e,r,a)},p:z,d(e){e&&o(t),e&&o(n),e&&o(r)}}}function Z(f){let t,n;return t=new q({props:{tree:f[1],activeItem:f[0],firstLevelItemStyle:"font-weight: bold",itemStyle:"height: 40px"}}),t.$on("click",f[4]),{c(){h(t.$$.fragment)},l(l){b(t.$$.fragment,l)},m(l,r){g(t,l,r),n=!0},p(l,r){const e={};r&1&&(e.activeItem=l[0]),t.$set(e)},i(l){n||(S(t.$$.fragment,l),n=!0)},o(l){w(t.$$.fragment,l),n=!1},d(l){x(t,l)}}}function ee(f){let t,n,l,r;return t=new H({props:{gap:"10px",style:"width: 200px;",$$slots:{default:[Z]},$$scope:{ctx:f}}}),l=new j({props:{code:`<script>
	import Sidenav from 'pathToReplace/Sidenav.svelte';
	import Container from 'pathToReplace/Container.svelte';

  const sidenavTree = [
		{
			label: 'Home',
			icon: 'home',
			children: [
				{
					label: 'level 1.1',
					children: [
						{
							label: 'level 1.1.1',
							children: [
								{
									label: 'level 1.1.1.1',
									children: []
								}
							]
						}
					]
				},
				{
					label: 'level 1.2',
					children: []
				}
			]
		},
		{
			label: 'Dashboard',
			icon: 'dashboard',
			children: [
				{
					label: 'level 2.1',
					children: []
				},
				{
					label: 'level 2.2',
					children: []
				},
				{
					label: 'level 2.3',
					children: []
				}
			]
		},
		{
			label: 'Settings',
			icon: 'gear',
			children: []
		}
	];

	let activeSidenavItem = 'Home';
<\/script>

<Container gap="10px" style="width: 200px;">
  <Sidenav
    tree={sidenavTree}
    activeItem={activeSidenavItem}
    firstLevelItemStyle="font-weight: bold"
    itemStyle="height: 40px"
    on:click={(e) => {
      activeSidenavItem = e.detail.label;
    }} />
</Container>`}}),{c(){h(t.$$.fragment),n=y(),h(l.$$.fragment)},l(e){b(t.$$.fragment,e),n=I(e),b(l.$$.fragment,e)},m(e,a){g(t,e,a),p(e,n,a),g(l,e,a),r=!0},p(e,a){const $={};a&33&&($.$$scope={dirty:a,ctx:e}),t.$set($)},i(e){r||(S(t.$$.fragment,e),S(l.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),w(l.$$.fragment,e),r=!1},d(e){x(t,e),e&&o(n),x(l,e)}}}function te(f){let t,n;return t=new H({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[ee]},$$scope:{ctx:f}}}),{c(){h(t.$$.fragment)},l(l){b(t.$$.fragment,l)},m(l,r){g(t,l,r),n=!0},p(l,r){const e={};r&33&&(e.$$scope={dirty:r,ctx:l}),t.$set(e)},i(l){n||(S(t.$$.fragment,l),n=!0)},o(l){w(t.$$.fragment,l),n=!1},d(l){x(t,l)}}}function le(f){let t,n,l,r,e,a,$,s,m,v,c;return r=new W({props:{$$slots:{default:[V]},$$scope:{ctx:f}}}),a=new W({props:{$$slots:{default:[X]},$$scope:{ctx:f}}}),s=new W({props:{$$slots:{default:[Y]},$$scope:{ctx:f}}}),v=new R({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[te]},$$scope:{ctx:f}}}),{c(){t=T("h2"),n=d("Custom style sidenav"),l=y(),h(r.$$.fragment),e=y(),h(a.$$.fragment),$=y(),h(s.$$.fragment),m=y(),h(v.$$.fragment)},l(i){t=C(i,"H2",{});var u=k(t);n=_(u,"Custom style sidenav"),u.forEach(o),l=I(i),b(r.$$.fragment,i),e=I(i),b(a.$$.fragment,i),$=I(i),b(s.$$.fragment,i),m=I(i),b(v.$$.fragment,i)},m(i,u){p(i,t,u),A(t,n),p(i,l,u),g(r,i,u),p(i,e,u),g(a,i,u),p(i,$,u),g(s,i,u),p(i,m,u),g(v,i,u),c=!0},p(i,u){const P={};u&32&&(P.$$scope={dirty:u,ctx:i}),r.$set(P);const N={};u&32&&(N.$$scope={dirty:u,ctx:i}),a.$set(N);const D={};u&32&&(D.$$scope={dirty:u,ctx:i}),s.$set(D);const L={};u&33&&(L.$$scope={dirty:u,ctx:i}),v.$set(L)},i(i){c||(S(r.$$.fragment,i),S(a.$$.fragment,i),S(s.$$.fragment,i),S(v.$$.fragment,i),c=!0)},o(i){w(r.$$.fragment,i),w(a.$$.fragment,i),w(s.$$.fragment,i),w(v.$$.fragment,i),c=!1},d(i){i&&o(t),i&&o(l),x(r,i),i&&o(e),x(a,i),i&&o($),x(s,i),i&&o(m),x(v,i)}}}function ne(f){let t,n,l,r,e,a;return t=new W({props:{$$slots:{default:[G]},$$scope:{ctx:f}}}),l=new H({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[U]},$$scope:{ctx:f}}}),e=new H({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[le]},$$scope:{ctx:f}}}),{c(){h(t.$$.fragment),n=y(),h(l.$$.fragment),r=y(),h(e.$$.fragment)},l($){b(t.$$.fragment,$),n=I($),b(l.$$.fragment,$),r=I($),b(e.$$.fragment,$)},m($,s){g(t,$,s),p($,n,s),g(l,$,s),p($,r,s),g(e,$,s),a=!0},p($,s){const m={};s&32&&(m.$$scope={dirty:s,ctx:$}),t.$set(m);const v={};s&33&&(v.$$scope={dirty:s,ctx:$}),l.$set(v);const c={};s&33&&(c.$$scope={dirty:s,ctx:$}),e.$set(c)},i($){a||(S(t.$$.fragment,$),S(l.$$.fragment,$),S(e.$$.fragment,$),a=!0)},o($){w(t.$$.fragment,$),w(l.$$.fragment,$),w(e.$$.fragment,$),a=!1},d($){x(t,$),$&&o(n),x(l,$),$&&o(r),x(e,$)}}}function re(f){let t,n;return t=new H({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){h(t.$$.fragment)},l(l){b(t.$$.fragment,l)},m(l,r){g(t,l,r),n=!0},p(l,[r]){const e={};r&33&&(e.$$scope={dirty:r,ctx:l}),t.$set(e)},i(l){n||(S(t.$$.fragment,l),n=!0)},o(l){w(t.$$.fragment,l),n=!1},d(l){x(t,l)}}}function ae(f,t,n){const r=[{label:"Home",icon:"home",children:[{label:"level 1.1",children:[{label:"level 1.1.1",children:[{label:"level 1.1.1.1",children:[]}]}]},{label:"level 1.2",children:[]}]},{label:"Dashboard",icon:"dashboard",children:[{label:"level 2.1",children:[]},{label:"level 2.2",children:[]},{label:"level 2.3",children:[]}]},{label:"Settings",icon:"gear",children:[]}];let e="Home";return[e,r,!0,s=>{n(0,e=s.detail.label)},s=>{n(0,e=s.detail.label)}]}class pe extends B{constructor(t){super(),J(this,t,ae,re,F,{prerender:2})}get prerender(){return this.$$.ctx[2]}}export{pe as default};
