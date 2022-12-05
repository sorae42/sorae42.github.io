(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function w(){}const ve=t=>t;function me(t){return t()}function te(){return Object.create(null)}function z(t){t.forEach(me)}function Y(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function be(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function $e(t){return Object.keys(t).length===0}const _e=typeof window<"u";let we=_e?()=>window.performance.now():()=>Date.now(),X=_e?t=>requestAnimationFrame(t):w;const T=new Set;function ge(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&X(ge)}function Se(t){let e;return T.size===0&&X(ge),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}function d(t,e){t.appendChild(e)}function ye(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ee(t){const e=g("style");return Pe(ye(t),e),e.sheet}function Pe(t,e){return d(t.head||t,e),e.sheet}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function Q(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function E(){return S(" ")}function xe(){return S("")}function Ae(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return Array.from(t.childNodes)}function ze(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}const j=new Map;let D=0;function Le(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Me(t,e){const n={stylesheet:Ee(e),rules:{}};return j.set(t,n),n}function Fe(t,e,n,o,r,l,i,a=0){const c=16.666/o;let s=`{
`;for(let m=0;m<=1;m+=c){const k=e+(n-e)*l(m);s+=m*100+`%{${i(k,1-k)}}
`}const f=s+`100% {${i(n,1-n)}}
}`,u=`__svelte_${Le(f)}_${a}`,p=ye(t),{stylesheet:v,rules:y}=j.get(p)||Me(p,t);y[u]||(y[u]=!0,v.insertRule(`@keyframes ${u} ${f}`,v.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${u} ${o}ms linear ${r}ms 1 both`,D+=1,u}function Ce(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-o.length;r&&(t.style.animation=o.join(", "),D-=r,D||Ne())}function Ne(){X(()=>{D||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),j.clear())})}let Z;function F(t){Z=t}const M=[],W=[],O=[],ne=[],Oe=Promise.resolve();let K=!1;function Re(){K||(K=!0,Oe.then(ke))}function I(t){O.push(t)}const J=new Set;let N=0;function ke(){const t=Z;do{for(;N<M.length;){const e=M[N];N++,F(e),je(e.$$)}for(F(null),M.length=0,N=0;W.length;)W.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];J.has(n)||(J.add(n),n())}O.length=0}while(M.length);for(;ne.length;)ne.pop()();K=!1,J.clear(),F(t)}function je(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}let L;function De(){return L||(L=Promise.resolve(),L.then(()=>{L=null})),L}function oe(t,e,n){t.dispatchEvent(ze(`${e?"intro":"outro"}${n}`))}const R=new Set;let x;function re(){x={r:0,c:[],p:x}}function ie(){x.r||z(x.c),x=x.p}function P(t,e){t&&t.i&&(R.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),x.c.push(()=>{R.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}const Ie={duration:0};function Be(t,e,n){let o=e(t,n),r=!0,l;const i=x;i.r+=1;function a(){const{delay:c=0,duration:s=300,easing:f=ve,tick:u=w,css:p}=o||Ie;p&&(l=Fe(t,1,0,s,c,f,p));const v=we()+c,y=v+s;I(()=>oe(t,!1,"start")),Se(_=>{if(r){if(_>=y)return u(0,1),oe(t,!1,"end"),--i.r||z(i.c),!1;if(_>=v){const m=f((_-v)/s);u(1-m,m)}}return r})}return Y(o)?De().then(()=>{o=o(),a()}):a(),{end(c){c&&o.tick&&o.tick(1,0),r&&(l&&Ce(t,l),r=!1)}}}function V(t){t&&t.c()}function B(t,e,n,o){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),o||I(()=>{const i=t.$$.on_mount.map(me).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...i):z(i),t.$$.on_mount=[]}),l.forEach(I)}function q(t,e){const n=t.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(t,e){t.$$.dirty[0]===-1&&(M.push(t),Re(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,o,r,l,i,a=[-1]){const c=Z;F(t);const s=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:te(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};i&&i(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(u,p,...v)=>{const y=v.length?v[0]:p;return s.ctx&&r(s.ctx[u],s.ctx[u]=y)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](y),f&&qe(t,u)),p}):[],s.update(),f=!0,z(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){const u=Te(e.target);s.fragment&&s.fragment.l(u),u.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&P(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),ke()}F(c)}class H{$destroy(){q(this,1),this.$destroy=w}$on(e,n){if(!Y(n))return w;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!$e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ue(t){const e=t-1;return e*e*e+1}function Ge(t,{delay:e=0,duration:n=400,easing:o=Ue,x:r=0,y:l=0,opacity:i=0}={}){const a=getComputedStyle(t),c=+a.opacity,s=a.transform==="none"?"":a.transform,f=c*(1-i);return{delay:e,duration:n,easing:o,css:(u,p)=>`
			transform: ${s} translate(${(1-u)*r}px, ${(1-u)*l}px);
			opacity: ${c-f*p}`}}function se(t,e,n){const o=t.slice();return o[1]=e[n],o}function le(t){let e,n;return{c(){e=g("a"),n=g("i"),h(n,"class","fa fa-"+t[1].icon+" svelte-1gzz4s7"),h(e,"href",t[1].href),h(e,"class","svelte-1gzz4s7")},m(o,r){$(o,e,r),d(e,n)},p:w,d(o){o&&b(e)}}}function He(t){let e,n,o,r,l,i,a=t[0],c=[];for(let s=0;s<a.length;s+=1)c[s]=le(se(t,a,s));return{c(){e=g("div"),n=g("span"),n.innerHTML=`<h2>Greetings,</h2> 
        <h1 class="svelte-1gzz4s7">my name is <span id="name" class="svelte-1gzz4s7">Sora</span>.</h1>`,o=E(),r=g("p"),r.textContent="I'm a freelance developer and a content creator.",l=E(),i=g("span");for(let s=0;s<c.length;s+=1)c[s].c();h(n,"id","greet"),h(n,"class","svelte-1gzz4s7"),h(r,"class","svelte-1gzz4s7"),h(i,"id","social"),h(i,"class","svelte-1gzz4s7"),h(e,"id","intro"),h(e,"class","svelte-1gzz4s7")},m(s,f){$(s,e,f),d(e,n),d(e,o),d(e,r),d(e,l),d(e,i);for(let u=0;u<c.length;u+=1)c[u].m(i,null)},p(s,[f]){if(f&1){a=s[0];let u;for(u=0;u<a.length;u+=1){const p=se(s,a,u);c[u]?c[u].p(p,f):(c[u]=le(p),c[u].c(),c[u].m(i,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=a.length}},i:w,o:w,d(s){s&&b(e),Q(c,s)}}}function Je(t){return[[{href:"https://twitter.com/astr3me_dayo",icon:"twitter"},{href:"https://ko-fi.com/shigukk",icon:"coffee"},{href:"https://www.youtube.com/channel/UCITM2whX5c-88KPL56ndUlw",icon:"youtube-play"},{href:"https://github.com/sorae42",icon:"github"},{href:"mailto:bonniefoxy2009@gmail.com",icon:"envelope"}]]}class We extends H{constructor(e){super(),G(this,e,Je,He,U,{})}}const ce=[{name:"Touhou Yukkuri Minecraft mod (BETA)",description:"[A proper featured banner will be made soon] Take it Easy in Minecraft!",links:[{type:"download",link:"https://modrinth.com/mod/yukkuri"},{type:"source",link:"https://github.com/sorae42/yukkuri-mod"}]},{name:"Simply Gensokyo",description:"A Stepmania theme based on Simply Love, with Touhou visual included.",links:[{type:"source",link:"https://github.com/sorae42/Simply-Gensokyo"}]},{name:"Altelier Shop",description:"Shop for rhythm gamers. Now closed.",links:[{type:"source",link:"https://github.com/JinPots/alter6k-pre-order"}]},{name:"BMS Radio Station",description:"Discover and listen to a collection of BMS music.",links:[{type:"download",link:"https://github.com/skyventuree/bms-radio/releases",icon:""},{type:"source",link:"https://github.com/skyventuree/bms-radio/",icon:"github"}]},{name:"Facebook 60 FPS Re-encoder",description:"A tool to re-encode your Facebook video to support 60 FPS uploading.",links:[{type:"download",link:"https://github.com/JinPots/Facebook60FPS-Re-Encoder/releases",icon:"arrow-circle-down"},{type:"source",link:"https://github.com/JinPots/Facebook60FPS-Re-Encoder"}]},{name:"TomakoSMP",description:"A small website I made for my own Minecraft SMP server.",links:[{type:"link",link:"https://skyventuree.github.io/tomakosmp/"},{type:"source",link:"https://github.com/skyventuree/tomakosmp/"}]}],Ke=""+new URL("p5cc-card.1102a68a.jpeg",import.meta.url).href;function Ve(t){let e,n,o,r,l;return{c(){e=g("div"),n=g("img"),r=E(),l=g("div"),l.innerHTML=`<h3>~ Featured Project ~</h3> 
        <h1 class="svelte-kgo38y">Persona 5 Calling Card Maker</h1> 
        <p class="svelte-kgo38y">For the sake of effortlessly making a calling card.
            <br/>Sending your card to the darkest desire.</p> 
        <span class="link"><a href="https://skyventuree.github.io/p5cc"><button class="svelte-kgo38y">Visit site<i class="fa fa-external-link"></i></button></a> 
            <a href="https://github.com/skyventuree/p5cc"><button class="svelte-kgo38y"><i class="fa fa-github"></i>Source code</button></a></span>`,be(n.src,o=Ke)||h(n,"src",o),h(n,"alt","P5CC card sample"),h(n,"class","svelte-kgo38y"),h(l,"class","content svelte-kgo38y"),h(e,"id","p5cc"),h(e,"class","svelte-kgo38y")},m(i,a){$(i,e,a),d(e,n),d(e,r),d(e,l)},p:w,i:w,o:w,d(i){i&&b(e)}}}class Ye extends H{constructor(e){super(),G(this,e,null,Ve,U,{})}}function ae(t,e,n){const o=t.slice();return o[1]=e[n],o}function ue(t,e,n){const o=t.slice();return o[4]=e[n],o}function Xe(t){let e,n=t[0][t[4].type][1]+"",o;return{c(){e=g("i"),o=S(n),h(e,"class","fa fa-"+t[0][t[4].type][0]+" svelte-gk5i9w")},m(r,l){$(r,e,l),$(r,o,l)},p:w,d(r){r&&b(e),r&&b(o)}}}function Qe(t){let e,n;return{c(){e=S("Visit site"),n=g("i"),h(n,"class","fa fa-external-link svelte-gk5i9w")},m(o,r){$(o,e,r),$(o,n,r)},p:w,d(o){o&&b(e),o&&b(n)}}}function fe(t){let e,n,o;function r(a,c){return a[4].type==="link"?Qe:Xe}let i=r(t)(t);return{c(){e=g("a"),n=g("button"),i.c(),o=E(),h(e,"href",t[4].link)},m(a,c){$(a,e,c),d(e,n),i.m(n,null),d(n,o)},p(a,c){i.p(a,c)},d(a){a&&b(e),i.d()}}}function de(t){let e,n,o,r=t[1].name+"",l,i,a,c=t[1].description+"",s,f,u,p,v=t[1].links,y=[];for(let _=0;_<v.length;_+=1)y[_]=fe(ue(t,v,_));return{c(){e=g("div"),n=g("div"),o=g("h2"),l=S(r),i=E(),a=g("p"),s=S(c),f=E(),u=g("span");for(let _=0;_<y.length;_+=1)y[_].c();p=E(),h(n,"class","details"),h(u,"class","link"),h(e,"class","content")},m(_,m){$(_,e,m),d(e,n),d(n,o),d(o,l),d(n,i),d(n,a),d(a,s),d(e,f),d(e,u);for(let k=0;k<y.length;k+=1)y[k].m(u,null);d(e,p)},p(_,m){if(m&1){v=_[1].links;let k;for(k=0;k<v.length;k+=1){const ee=ue(_,v,k);y[k]?y[k].p(ee,m):(y[k]=fe(ee),y[k].c(),y[k].m(u,null))}for(;k<y.length;k+=1)y[k].d(1);y.length=v.length}},d(_){_&&b(e),Q(y,_)}}}function Ze(t){let e,n,o,r,l,i,a;r=new Ye({});let c=ce,s=[];for(let f=0;f<c.length;f+=1)s[f]=de(ae(t,c,f));return{c(){e=g("div"),n=g("h1"),n.innerHTML='my works<i class="fa fa-chevron-right svelte-gk5i9w"></i>',o=E(),V(r.$$.fragment),l=E(),i=g("div");for(let f=0;f<s.length;f+=1)s[f].c();h(n,"class","header svelte-gk5i9w"),h(i,"id","other-works"),h(i,"class","svelte-gk5i9w"),h(e,"id","works"),h(e,"class","svelte-gk5i9w")},m(f,u){$(f,e,u),d(e,n),d(e,o),B(r,e,null),d(e,l),d(e,i);for(let p=0;p<s.length;p+=1)s[p].m(i,null);a=!0},p(f,[u]){if(u&1){c=ce;let p;for(p=0;p<c.length;p+=1){const v=ae(f,c,p);s[p]?s[p].p(v,u):(s[p]=de(v),s[p].c(),s[p].m(i,null))}for(;p<s.length;p+=1)s[p].d(1);s.length=c.length}},i(f){a||(P(r.$$.fragment,f),a=!0)},o(f){A(r.$$.fragment,f),a=!1},d(f){f&&b(e),q(r),Q(s,f)}}}function et(t){return[{download:["arrow-circle-down","Download"],source:["github",""]}]}class tt extends H{constructor(e){super(),G(this,e,et,Ze,U,{})}}function pe(t){let e,n,o,r,l,i;return{c(){e=g("div"),n=g("div"),o=E(),r=g("p"),r.textContent="~ We are now preparing. Please watch warmly. ~",h(n,"class","loader svelte-bcvriv"),h(r,"id","loading-text"),h(r,"class","svelte-bcvriv")},m(a,c){$(a,e,c),d(e,n),d(e,o),d(e,r),t[6](r),i=!0},p:w,i(a){i||(l&&l.end(1),i=!0)},o(a){l=Be(e,Ge,{x:1e4,duration:2500,opacity:100}),i=!1},d(a){a&&b(e),t[6](null),a&&l&&l.end()}}}function he(t){let e,n,o,r,l,i,a,c,s,f,u,p,v,y,_;return e=new We({}),o=new tt({}),{c(){V(e.$$.fragment),n=E(),V(o.$$.fragment),r=E(),l=g("div"),i=S("\xA9 "),a=S(t[3]),c=S(" sorae42. PERSONA 5 \xA9 ATLUS."),s=g("br"),f=S(`
        Facebook \xA9 `),u=S(t[3]),p=S(" Meta. All right reserved."),v=g("br"),y=S(`
        All assets are under fair use.`),h(l,"id","copyright"),h(l,"class","svelte-bcvriv")},m(m,k){B(e,m,k),$(m,n,k),B(o,m,k),$(m,r,k),$(m,l,k),d(l,i),d(l,a),d(l,c),d(l,s),d(l,f),d(l,u),d(l,p),d(l,v),d(l,y),_=!0},p:w,i(m){_||(P(e.$$.fragment,m),P(o.$$.fragment,m),_=!0)},o(m){A(e.$$.fragment,m),A(o.$$.fragment,m),_=!1},d(m){q(e,m),m&&b(n),q(o,m),m&&b(r),m&&b(l)}}}function nt(t){let e,n,o,r,l,i=!t[0]&&pe(t),a=t[0]&&t[1]&&he(t);return{c(){i&&i.c(),e=E(),a&&a.c(),n=xe()},m(c,s){i&&i.m(c,s),$(c,e,s),a&&a.m(c,s),$(c,n,s),o=!0,r||(l=Ae(window,"load",t[5]),r=!0)},p(c,[s]){c[0]?i&&(re(),A(i,1,1,()=>{i=null}),ie()):i?(i.p(c,s),s&1&&P(i,1)):(i=pe(c),i.c(),P(i,1),i.m(e.parentNode,e)),c[0]&&c[1]?a?(a.p(c,s),s&3&&P(a,1)):(a=he(c),a.c(),P(a,1),a.m(n.parentNode,n)):a&&(re(),A(a,1,1,()=>{a=null}),ie())},i(c){o||(P(i),P(a),o=!0)},o(c){A(i),A(a),o=!1},d(c){i&&i.d(c),c&&b(e),a&&a.d(c),c&&b(n),r=!1,l()}}}function ot(t,e,n){let o=new Date().getFullYear(),r=!1,l=!1,i;function a(){n(2,i.innerText="Done!",i),setTimeout(()=>{n(0,r=!0),setTimeout(()=>{n(1,l=!0)},240)},420)}const c=()=>a();function s(f){W[f?"unshift":"push"](()=>{i=f,n(2,i)})}return[r,l,i,o,a,c,s]}class rt extends H{constructor(e){super(),G(this,e,ot,nt,U,{})}}new rt({target:document.getElementById("app")});
