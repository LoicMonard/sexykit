function y(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function J(){return Object.create(null)}function b(t){t.forEach(X)}function O(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Gt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function It(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,c){if(s){const r=Y(e,n,i,c);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Xt(t){const e={};for(const n in t)e[n]=!0;return e}function Yt(t,e,n){return t.set(n),e}function Zt(t){return t&&O(t.destroy)?t.destroy:y}const Z=typeof window<"u";let dt=Z?()=>window.performance.now():()=>Date.now(),G=Z?t=>requestAnimationFrame(t):y;const x=new Set;function tt(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&G(tt)}function ht(t){let e;return x.size===0&&G(tt),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function mt(){P=!0}function pt(){P=!1}function yt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:yt(1,s,a=>e[n[a]].claim_order,u))-1;i[o]=n[_]+1;const f=_+1;n[f]=o,s=Math.max(f,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const _=u<c.length?c[u]:null;t.insertBefore(r[o],_)}}function $t(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=W("style");return bt(et(t),e),e.sheet}function bt(t,e){return $t(t.head||t,e),e.sheet}function wt(t,e){if(P){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){t.insertBefore(e,n||null)}function Et(t,e,n){P&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function ee(){return I(" ")}function ne(){return I("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:At(t,i,e[i])}function Tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){nt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function kt(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ce(t,e,n){return kt(t,e,n,W)}function Ct(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function oe(t){return Ct(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function le(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);nt(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(c,e)}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function _e(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class St{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Nt(n.nodeName):this.e=W(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)vt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class Q extends St{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Et(this.t,this.n[n],e)}}function de(t,e){return new t(e)}const j=new Map;let H=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:xt(e),rules:{}};return j.set(t,n),n}function U(t,e,n,i,s,c,r,l=0){const o=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=o){const $=e+(n-e)*c(p);u+=p*100+`%{${r($,1-$)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Dt(_)}_${l}`,a=et(t),{stylesheet:d,rules:h}=j.get(a)||Mt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${i}ms linear ${s}ms 1 both`,H+=1,f}function jt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||Ht())}function Ht(){G(()=>{H||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),j.clear())})}let A;function E(t){A=t}function T(){if(!A)throw new Error("Function called outside component initialization");return A}function he(t){T().$$.on_mount.push(t)}function me(t){T().$$.after_update.push(t)}function pe(){const t=T();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=st(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ye(t,e){return T().$$.context.set(t,e),e}function ge(t){return T().$$.context.get(t)}function $e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],V=[],D=[],z=[],rt=Promise.resolve();let F=!1;function ct(){F||(F=!0,rt.then(ot))}function xe(){return ct(),rt}function L(t){D.push(t)}function be(t){z.push(t)}const q=new Set;let S=0;function ot(){const t=A;do{for(;S<v.length;){const e=v[S];S++,E(e),Lt(e.$$)}for(E(null),v.length=0,S=0;V.length;)V.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];q.has(n)||(q.add(n),n())}D.length=0}while(v.length);for(;z.length;)z.pop()();F=!1,q.clear(),E(t)}function Lt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let w;function Ot(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function B(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const M=new Set;let m;function we(){m={r:0,c:[],p:m}}function ve(){m.r||b(m.c),m=m.p}function Pt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Ee(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),m.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function Ne(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,l=null,o=null;function u(){o&&jt(t,o)}function _(a,d){const h=a.b-c;return d*=Math.abs(h),{a:c,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:g=ut,tick:p=y,css:$}=s||Rt,R={start:dt()+d,b:a};a||(R.group=m,m.r+=1),r||l?l=R:($&&(u(),o=U(t,c,a,h,d,g,$)),a&&p(0,1),r=_(R,h),L(()=>B(t,a,"start")),ht(k=>{if(l&&k>l.start&&(r=_(l,h),l=null,B(t,r.b,"start"),$&&(u(),o=U(t,c,r.b,r.duration,0,g,s.css))),r){if(k>=r.end)p(c=r.b,1-c),B(t,r.b,"end"),l||(r.b?u():--r.group.r||b(r.group.c)),r=null;else if(k>=r.start){const lt=k-r.start;c=r.a+r.d*g(lt/r.duration),p(c,1-c)}}return!!(r||l)}))}return{run(a){O(s)?Ot().then(()=>{s=s(),f(a)}):f(a)},end(){u(),r=l=null}}}function Ae(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Te(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ke(t){t&&t.c()}function Ce(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||L(()=>{const r=t.$$.on_mount.map(X).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...r):b(r),t.$$.on_mount=[]}),c.forEach(L)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,s,c,r,l=[-1]){const o=A;E(t);const u=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&zt(t,f)),a}):[],u.update(),_=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const f=Tt(e.target);u.fragment&&u.fragment.l(f),f.forEach(N)}else u.fragment&&u.fragment.c();e.intro&&Pt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),pt(),ot()}E(o)}class De{$destroy(){Bt(this,1),this.$destroy=y}$on(e,n){if(!O(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ut as $,xe as A,y as B,It as C,Kt as D,Qt as E,Jt as F,Gt as G,wt as H,ie as I,se as J,b as K,pe as L,$e as M,V as N,ut as O,L as P,Ne as Q,te as R,De as S,O as T,Te as U,be as V,Wt as W,Xt as X,Zt as Y,ge as Z,at as _,ee as a,ye as a0,Yt as a1,_e as a2,Q as a3,le as a4,Vt as a5,re as a6,fe as a7,Ae as a8,Et as b,oe as c,ve as d,ne as e,Pt as f,we as g,N as h,Se as i,me as j,W as k,ce as l,Tt as m,At as n,he as o,ae as p,I as q,Ct as r,Ft as s,Ee as t,ue as u,de as v,ke as w,Ce as x,qt as y,Bt as z};
