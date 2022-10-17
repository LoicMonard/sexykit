import{_ as M}from"./preload-helper-0ffe6af8.js";import{S as V,i as q,s as K,e as N,a as w,w as u,a2 as Q,h as i,c as h,x as _,H as I,b,y as m,f as c,t as p,z as g,o as U,a3 as Y,a4 as F,v as H,g as Z,d as j,k as W,l as C,m as S,n as L,p as J,B as k,I as ee,q as T,r as B}from"./index-d67b84d5.js";import{T as A,B as v}from"./Text-f596dfe7.js";import{C as O}from"./Card-9dd2fd8c.js";import{C as te,a as ne}from"./CollapseItem-044112aa.js";import{C as x}from"./index-74ab43d1.js";function re(o){const e=o.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),t=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},n={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=o.inherit(n,{begin:/\(/,end:/\)/}),$=o.inherit(o.APOS_STRING_MODE,{className:"string"}),f=o.inherit(o.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[n,f,$,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[n,a,f,$]}]}]},o.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[f]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:l}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const ae={name:"xml",register:re},z=ae;function G(o){let e,r;return{c(){e=new Y(!1),r=N(),this.h()},l(t){e=F(t,!1),r=N(),this.h()},h(){e.a=r},m(t,s){e.m(o[3],t,s),b(t,r,s)},p(t,s){s&8&&e.p(t[3])},d(t){t&&i(r),t&&e.d()}}}function se(o){let e,r,t;var s=o[2];function n(a){return{props:{language:a[0],langtag:!0,code:a[1]}}}return s&&(e=H(s,n(o))),{c(){e&&u(e.$$.fragment),r=N()},l(a){e&&_(e.$$.fragment,a),r=N()},m(a,$){e&&m(e,a,$),b(a,r,$),t=!0},p(a,$){const f={};if($&1&&(f.language=a[0]),$&2&&(f.code=a[1]),s!==(s=a[2])){if(e){Z();const l=e;p(l.$$.fragment,1,0,()=>{g(l,1)}),j()}s?(e=H(s,n(a)),u(e.$$.fragment),c(e.$$.fragment,1),m(e,r.parentNode,r)):e=null}else s&&e.$set(f)},i(a){t||(e&&c(e.$$.fragment,a),t=!0)},o(a){e&&p(e.$$.fragment,a),t=!1},d(a){a&&i(r),e&&g(e,a)}}}function le(o){let e,r,t;return{c(){e=W("i"),this.h()},l(s){e=C(s,"I",{class:!0,style:!0}),S(e).forEach(i),this.h()},h(){L(e,"class","fa-solid fa-copy"),J(e,"font-size","12px")},m(s,n){b(s,e,n),r||(t=ee(e,"click",o[4]),r=!0)},p:k,d(s){s&&i(e),r=!1,t()}}}function $e(o){let e,r;return e=new x({props:{gap:"10px",fullWidth:!0,slot:"header",justify:"end",style:"padding-right: 8px",$$slots:{default:[le]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){m(e,t,s),r=!0},p(t,s){const n={};s&128&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function fe(o){let e;return{c(){e=W("i"),this.h()},l(r){e=C(r,"I",{class:!0,style:!0,slot:!0}),S(e).forEach(i),this.h()},h(){L(e,"class","fa-solid fa-code"),J(e,"font-size","12px"),L(e,"slot","trigger")},m(r,t){b(r,e,t)},p:k,d(r){r&&i(e)}}}function oe(o){let e,r;return e=new ne({props:{toggleOnTriggerOnly:!0,bordered:!1,$$slots:{trigger:[fe],header:[$e],default:[se]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){m(e,t,s),r=!0},p(t,s){const n={};s&135&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function ie(o){let e,r,t,s,n=o[3]&&G(o);return t=new te({props:{$$slots:{default:[oe]},$$scope:{ctx:o}}}),{c(){n&&n.c(),e=N(),r=w(),u(t.$$.fragment)},l(a){const $=Q("svelte-10kwchr",document.head);n&&n.l($),e=N(),$.forEach(i),r=h(a),_(t.$$.fragment,a)},m(a,$){n&&n.m(document.head,null),I(document.head,e),b(a,r,$),m(t,a,$),s=!0},p(a,[$]){a[3]?n?n.p(a,$):(n=G(a),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null);const f={};$&135&&(f.$$scope={dirty:$,ctx:a}),t.$set(f)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){p(t.$$.fragment,a),s=!1},d(a){n&&n.d(a),i(e),a&&i(r),g(t,a)}}}function ue(o,e,r){let{langtag:t="svelte"}=e,{language:s=z}=e,{code:n}=e,a,$;const f=()=>{window.navigator.clipboard.writeText(n)};return U(async()=>{z.name=t,r(2,a=(await M(()=>import("./index-4eee95fe.js"),["index-4eee95fe.js","../assets/index-548b5b0d.css","index-d67b84d5.js"],import.meta.url)).Highlight),r(3,$=(await M(()=>import("./atom-one-dark-5260fbe1.js"),[],import.meta.url)).default)}),o.$$set=l=>{"langtag"in l&&r(5,t=l.langtag),"language"in l&&r(0,s=l.language),"code"in l&&r(1,n=l.code)},[s,n,a,$,f,t]}class R extends V{constructor(e){super(),q(this,e,ue,ie,K,{langtag:5,language:0,code:1})}}function X(o){let e,r;return{c(){e=new Y(!1),r=N(),this.h()},l(t){e=F(t,!1),r=N(),this.h()},h(){e.a=r},m(t,s){e.m(o[0],t,s),b(t,r,s)},p(t,s){s&1&&e.p(t[0])},d(t){t&&i(r),t&&e.d()}}}function me(o){let e;return{c(){e=T("Comonly used button")},l(r){e=B(r,"Comonly used button")},m(r,t){b(r,e,t)},d(r){r&&i(e)}}}function ce(o){let e;return{c(){e=T("Basic button")},l(r){e=B(r,"Basic button")},m(r,t){b(r,e,t)},d(r){r&&i(e)}}}function pe(o){let e,r,t,s,n,a;return e=new v({props:{primary:!0,label:"Button",icon:"user"}}),t=new v({props:{label:"Button"}}),n=new v({props:{label:"Rounded",rounded:!0}}),{c(){u(e.$$.fragment),r=w(),u(t.$$.fragment),s=w(),u(n.$$.fragment)},l($){_(e.$$.fragment,$),r=h($),_(t.$$.fragment,$),s=h($),_(n.$$.fragment,$)},m($,f){m(e,$,f),b($,r,f),m(t,$,f),b($,s,f),m(n,$,f),a=!0},p:k,i($){a||(c(e.$$.fragment,$),c(t.$$.fragment,$),c(n.$$.fragment,$),a=!0)},o($){p(e.$$.fragment,$),p(t.$$.fragment,$),p(n.$$.fragment,$),a=!1},d($){g(e,$),$&&i(r),g(t,$),$&&i(s),g(n,$)}}}function ge(o){let e,r,t,s;return e=new x({props:{gap:"10px",fullWidth:!0,$$slots:{default:[pe]},$$scope:{ctx:o}}}),t=new R({props:{code:`<Container gap="10px" fullWidth>
	<Button primary label="Button" icon="user" />
	<Button label="Button" />
	<Button label="Rounded" rounded />
</Container>`}}),{c(){u(e.$$.fragment),r=w(),u(t.$$.fragment)},l(n){_(e.$$.fragment,n),r=h(n),_(t.$$.fragment,n)},m(n,a){m(e,n,a),b(n,r,a),m(t,n,a),s=!0},p(n,a){const $={};a&16&&($.$$scope={dirty:a,ctx:n}),e.$set($)},i(n){s||(c(e.$$.fragment,n),c(t.$$.fragment,n),s=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),s=!1},d(n){g(e,n),n&&i(r),g(t,n)}}}function _e(o){let e,r;return e=new x({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[ge]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){m(e,t,s),r=!0},p(t,s){const n={};s&16&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function de(o){let e,r,t,s,n,a,$;return s=new A({props:{$$slots:{default:[ce]},$$scope:{ctx:o}}}),a=new O({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[_e]},$$scope:{ctx:o}}}),{c(){e=W("h2"),r=T("Basic"),t=w(),u(s.$$.fragment),n=w(),u(a.$$.fragment)},l(f){e=C(f,"H2",{});var l=S(e);r=B(l,"Basic"),l.forEach(i),t=h(f),_(s.$$.fragment,f),n=h(f),_(a.$$.fragment,f)},m(f,l){b(f,e,l),I(e,r),b(f,t,l),m(s,f,l),b(f,n,l),m(a,f,l),$=!0},p(f,l){const d={};l&16&&(d.$$scope={dirty:l,ctx:f}),s.$set(d);const E={};l&16&&(E.$$scope={dirty:l,ctx:f}),a.$set(E)},i(f){$||(c(s.$$.fragment,f),c(a.$$.fragment,f),$=!0)},o(f){p(s.$$.fragment,f),p(a.$$.fragment,f),$=!1},d(f){f&&i(e),f&&i(t),g(s,f),f&&i(n),g(a,f)}}}function be(o){let e;return{c(){e=T("Button with icon")},l(r){e=B(r,"Button with icon")},m(r,t){b(r,e,t)},d(r){r&&i(e)}}}function we(o){let e,r,t,s,n,a,$,f;return e=new v({props:{primary:!0,label:"Add",leftIcon:"add"}}),t=new v({props:{label:"Delete",rightIcon:"trash"}}),n=new v({props:{leftIcon:"plus",icon:!0}}),$=new v({props:{leftIcon:"plus",icon:!0,rounded:!0}}),{c(){u(e.$$.fragment),r=w(),u(t.$$.fragment),s=w(),u(n.$$.fragment),a=w(),u($.$$.fragment)},l(l){_(e.$$.fragment,l),r=h(l),_(t.$$.fragment,l),s=h(l),_(n.$$.fragment,l),a=h(l),_($.$$.fragment,l)},m(l,d){m(e,l,d),b(l,r,d),m(t,l,d),b(l,s,d),m(n,l,d),b(l,a,d),m($,l,d),f=!0},p:k,i(l){f||(c(e.$$.fragment,l),c(t.$$.fragment,l),c(n.$$.fragment,l),c($.$$.fragment,l),f=!0)},o(l){p(e.$$.fragment,l),p(t.$$.fragment,l),p(n.$$.fragment,l),p($.$$.fragment,l),f=!1},d(l){g(e,l),l&&i(r),g(t,l),l&&i(s),g(n,l),l&&i(a),g($,l)}}}function he(o){let e,r,t,s;return e=new x({props:{gap:"10px",fullWidth:!0,$$slots:{default:[we]},$$scope:{ctx:o}}}),t=new R({props:{code:`<Container gap="10px" fullWidth>
	<Button primary label="Add" leftIcon="add" />
	<Button label="Delete" rightIcon="trash" />
	<Button leftIcon="plus" icon />
	<Button leftIcon="plus" icon rounded />
</Container>`}}),{c(){u(e.$$.fragment),r=w(),u(t.$$.fragment)},l(n){_(e.$$.fragment,n),r=h(n),_(t.$$.fragment,n)},m(n,a){m(e,n,a),b(n,r,a),m(t,n,a),s=!0},p(n,a){const $={};a&16&&($.$$scope={dirty:a,ctx:n}),e.$set($)},i(n){s||(c(e.$$.fragment,n),c(t.$$.fragment,n),s=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),s=!1},d(n){g(e,n),n&&i(r),g(t,n)}}}function Ee(o){let e,r;return e=new x({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){m(e,t,s),r=!0},p(t,s){const n={};s&16&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function xe(o){let e,r,t,s,n,a,$;return s=new A({props:{$$slots:{default:[be]},$$scope:{ctx:o}}}),a=new O({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[Ee]},$$scope:{ctx:o}}}),{c(){e=W("h2"),r=T("With icon"),t=w(),u(s.$$.fragment),n=w(),u(a.$$.fragment)},l(f){e=C(f,"H2",{});var l=S(e);r=B(l,"With icon"),l.forEach(i),t=h(f),_(s.$$.fragment,f),n=h(f),_(a.$$.fragment,f)},m(f,l){b(f,e,l),I(e,r),b(f,t,l),m(s,f,l),b(f,n,l),m(a,f,l),$=!0},p(f,l){const d={};l&16&&(d.$$scope={dirty:l,ctx:f}),s.$set(d);const E={};l&16&&(E.$$scope={dirty:l,ctx:f}),a.$set(E)},i(f){$||(c(s.$$.fragment,f),c(a.$$.fragment,f),$=!0)},o(f){p(s.$$.fragment,f),p(a.$$.fragment,f),$=!1},d(f){f&&i(e),f&&i(t),g(s,f),f&&i(n),g(a,f)}}}function ve(o){let e;return{c(){e=T("Button sizes")},l(r){e=B(r,"Button sizes")},m(r,t){b(r,e,t)},d(r){r&&i(e)}}}function Ne(o){let e,r,t,s,n,a;return e=new v({props:{size:"large",label:"Large"}}),t=new v({props:{primary:!0,label:"Medium"}}),n=new v({props:{size:"small",label:"Small"}}),{c(){u(e.$$.fragment),r=w(),u(t.$$.fragment),s=w(),u(n.$$.fragment)},l($){_(e.$$.fragment,$),r=h($),_(t.$$.fragment,$),s=h($),_(n.$$.fragment,$)},m($,f){m(e,$,f),b($,r,f),m(t,$,f),b($,s,f),m(n,$,f),a=!0},p:k,i($){a||(c(e.$$.fragment,$),c(t.$$.fragment,$),c(n.$$.fragment,$),a=!0)},o($){p(e.$$.fragment,$),p(t.$$.fragment,$),p(n.$$.fragment,$),a=!1},d($){g(e,$),$&&i(r),g(t,$),$&&i(s),g(n,$)}}}function Te(o){let e,r,t,s;return e=new x({props:{gap:"10px",fullWidth:!0,$$slots:{default:[Ne]},$$scope:{ctx:o}}}),t=new R({props:{code:`<Container gap="10px" fullWidth>
	<Button size="large" label="Large" />
	<Button primary label="Medium" />
	<Button size="small" label="Small" />
</Container>`}}),{c(){u(e.$$.fragment),r=w(),u(t.$$.fragment)},l(n){_(e.$$.fragment,n),r=h(n),_(t.$$.fragment,n)},m(n,a){m(e,n,a),b(n,r,a),m(t,n,a),s=!0},p(n,a){const $={};a&16&&($.$$scope={dirty:a,ctx:n}),e.$set($)},i(n){s||(c(e.$$.fragment,n),c(t.$$.fragment,n),s=!0)},o(n){p(e.$$.fragment,n),p(t.$$.fragment,n),s=!1},d(n){g(e,n),n&&i(r),g(t,n)}}}function Be(o){let e,r;return e=new x({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){m(e,t,s),r=!0},p(t,s){const n={};s&16&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function Ie(o){let e,r,t,s,n,a,$;return s=new A({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),a=new O({props:{fullWidth:!0,bodyStyle:"padding-bottom: 0px",$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){e=W("h2"),r=T("Sizes"),t=w(),u(s.$$.fragment),n=w(),u(a.$$.fragment)},l(f){e=C(f,"H2",{});var l=S(e);r=B(l,"Sizes"),l.forEach(i),t=h(f),_(s.$$.fragment,f),n=h(f),_(a.$$.fragment,f)},m(f,l){b(f,e,l),I(e,r),b(f,t,l),m(s,f,l),b(f,n,l),m(a,f,l),$=!0},p(f,l){const d={};l&16&&(d.$$scope={dirty:l,ctx:f}),s.$set(d);const E={};l&16&&(E.$$scope={dirty:l,ctx:f}),a.$set(E)},i(f){$||(c(s.$$.fragment,f),c(a.$$.fragment,f),$=!0)},o(f){p(s.$$.fragment,f),p(a.$$.fragment,f),$=!1},d(f){f&&i(e),f&&i(t),g(s,f),f&&i(n),g(a,f)}}}function We(o){let e,r,t,s,n,a,$,f;return e=new A({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),t=new x({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[de]},$$scope:{ctx:o}}}),n=new x({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[xe]},$$scope:{ctx:o}}}),$=new x({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[Ie]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment),r=w(),u(t.$$.fragment),s=w(),u(n.$$.fragment),a=w(),u($.$$.fragment)},l(l){_(e.$$.fragment,l),r=h(l),_(t.$$.fragment,l),s=h(l),_(n.$$.fragment,l),a=h(l),_($.$$.fragment,l)},m(l,d){m(e,l,d),b(l,r,d),m(t,l,d),b(l,s,d),m(n,l,d),b(l,a,d),m($,l,d),f=!0},p(l,d){const E={};d&16&&(E.$$scope={dirty:d,ctx:l}),e.$set(E);const D={};d&16&&(D.$$scope={dirty:d,ctx:l}),t.$set(D);const P={};d&16&&(P.$$scope={dirty:d,ctx:l}),n.$set(P);const y={};d&16&&(y.$$scope={dirty:d,ctx:l}),$.$set(y)},i(l){f||(c(e.$$.fragment,l),c(t.$$.fragment,l),c(n.$$.fragment,l),c($.$$.fragment,l),f=!0)},o(l){p(e.$$.fragment,l),p(t.$$.fragment,l),p(n.$$.fragment,l),p($.$$.fragment,l),f=!1},d(l){g(e,l),l&&i(r),g(t,l),l&&i(s),g(n,l),l&&i(a),g($,l)}}}function Ce(o){let e,r,t,s,n=o[0]&&X(o);return t=new x({props:{direction:"column",gap:"20px",fullWidth:!0,$$slots:{default:[We]},$$scope:{ctx:o}}}),{c(){n&&n.c(),e=N(),r=w(),u(t.$$.fragment)},l(a){const $=Q("svelte-10kwchr",document.head);n&&n.l($),e=N(),$.forEach(i),r=h(a),_(t.$$.fragment,a)},m(a,$){n&&n.m(document.head,null),I(document.head,e),b(a,r,$),m(t,a,$),s=!0},p(a,[$]){a[0]?n?n.p(a,$):(n=X(a),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null);const f={};$&16&&(f.$$scope={dirty:$,ctx:a}),t.$set(f)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){p(t.$$.fragment,a),s=!1},d(a){n&&n.d(a),i(e),a&&i(r),g(t,a)}}}function Se(o,e,r){let s;return U(async()=>{z.name="svelte",(await M(()=>import("./index-4eee95fe.js"),["index-4eee95fe.js","../assets/index-548b5b0d.css","index-d67b84d5.js"],import.meta.url)).Highlight,r(0,s=(await M(()=>import("./atom-one-dark-5260fbe1.js"),[],import.meta.url)).default)}),[s,!0]}class Re extends V{constructor(e){super(),q(this,e,Se,Ce,K,{prerender:1})}get prerender(){return this.$$.ctx[1]}}export{Re as P,re as x};