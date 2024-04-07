import{s as ot,e as k,c as y,b as D,f as F,m as A,i as M,A as ae,n as ie,r as ut,B as We,C as je,D as Je,E as ne,F as Ze,t as z,G as Qe,d as V,h as n,j as ht,H as Ue,I as dt,q as mt,J as pt,a as j,l as T,g as x,p as xe}from"../chunks/scheduler.Ch0H1XW6.js";import{S as ct,i as ft,c as ke,a as U,t as X,b as Ae,d as Se,m as qe,e as De,g as ye}from"../chunks/index.CT4Qbzw8.js";import{e as R,u as we,o as Ce}from"../chunks/each.C5jJoVFb.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.DfM2jt22.js";function _t(r,t){const e={},a={},h={$$scope:1};let m=r.length;for(;m--;){const o=r[m],p=t[m];if(p){for(const u in o)u in p||(a[u]=1);for(const u in p)h[u]||(e[u]=p[u],h[u]=1);r[m]=p}else for(const u in o)h[u]=1}for(const o in a)o in e||(e[o]=void 0);return e}function gt(r){let t,e,a=String(r[1]).substring(0,2).toUpperCase()+"",h,m;return{c(){t=Ze("svg"),e=Ze("text"),h=z(a),this.h()},l(o){t=Qe(o,"svg",{class:!0,viewBox:!0});var p=D(t);e=Qe(p,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var u=D(e);h=V(u,a),u.forEach(F),p.forEach(F),this.h()},h(){A(e,"x","50%"),A(e,"y","50%"),A(e,"dominant-baseline","central"),A(e,"text-anchor","middle"),A(e,"font-weight","bold"),A(e,"font-size",r[3]),A(e,"class",m="avatar-text "+r[2]),A(t,"class","avatar-initials w-full h-full"),A(t,"viewBox","0 0 512 512")},m(o,p){M(o,t,p),n(t,e),n(e,h)},p(o,p){p&2&&a!==(a=String(o[1]).substring(0,2).toUpperCase()+"")&&ht(h,a),p&8&&A(e,"font-size",o[3]),p&4&&m!==(m="avatar-text "+o[2])&&A(e,"class",m)},d(o){o&&F(t)}}}function vt(r){let t,e,a,h,m,o,p,u,v=[{class:e="avatar-image "+kt},{style:a=r[9].style??""},{src:h=r[0]},{alt:m=r[9].alt||""},r[8]()],i={};for(let d=0;d<v.length;d+=1)i=je(i,v[d]);return{c(){t=k("img"),this.h()},l(d){t=y(d,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){Ue(t,i)},m(d,C){M(d,t,C),p||(u=[dt(o=r[5].call(null,t,r[6])),ae(t,"error",r[20])],p=!0)},p(d,C){Ue(t,i=_t(v,[{class:e},C&512&&a!==(a=d[9].style??"")&&{style:a},C&1&&!mt(t.src,h=d[0])&&{src:h},C&512&&m!==(m=d[9].alt||"")&&{alt:m},d[8]()])),o&&pt(o.update)&&C&64&&o.update.call(null,d[6])},d(d){d&&F(t),p=!1,ut(u)}}}function bt(r){let t,e,a,h;function m(u,v){return u[0]?vt:gt}let o=m(r),p=o(r);return{c(){t=k("figure"),p.c(),this.h()},l(u){t=y(u,"FIGURE",{class:!0,"data-testid":!0});var v=D(t);p.l(v),v.forEach(F),this.h()},h(){A(t,"class",e="avatar "+r[7]),A(t,"data-testid","avatar")},m(u,v){M(u,t,v),p.m(t,null),a||(h=[ae(t,"click",r[16]),ae(t,"keydown",r[17]),ae(t,"keyup",r[18]),ae(t,"keypress",r[19])],a=!0)},p(u,[v]){o===(o=m(u))&&p?p.p(u,v):(p.d(1),p=o(u),p&&(p.c(),p.m(t,null))),v&128&&e!==(e="avatar "+u[7])&&A(t,"class",e)},i:ie,o:ie,d(u){u&&F(t),p.d(),a=!1,ut(h)}}}let Ft="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",kt="w-full object-cover";function yt(r,t,e){let a;const h=["initials","fill","fontSize","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let m=We(t,h),{initials:o="AB"}=t,{fill:p="fill-token"}=t,{fontSize:u=150}=t,{src:v=""}=t,{fallback:i=""}=t,{action:d=()=>{}}=t,{actionParams:C=""}=t,{background:q="bg-surface-400-500-token"}=t,{width:S="w-16"}=t,{border:f=""}=t,{rounded:s="rounded-full"}=t,{shadow:g=""}=t,{cursor:l=""}=t;function P(){return delete m.class,m}function H(w){ne.call(this,r,w)}function Y(w){ne.call(this,r,w)}function K(w){ne.call(this,r,w)}function N(w){ne.call(this,r,w)}const le=()=>e(0,v=i);return r.$$set=w=>{e(9,t=je(je({},t),Je(w))),e(21,m=We(t,h)),"initials"in w&&e(1,o=w.initials),"fill"in w&&e(2,p=w.fill),"fontSize"in w&&e(3,u=w.fontSize),"src"in w&&e(0,v=w.src),"fallback"in w&&e(4,i=w.fallback),"action"in w&&e(5,d=w.action),"actionParams"in w&&e(6,C=w.actionParams),"background"in w&&e(10,q=w.background),"width"in w&&e(11,S=w.width),"border"in w&&e(12,f=w.border),"rounded"in w&&e(13,s=w.rounded),"shadow"in w&&e(14,g=w.shadow),"cursor"in w&&e(15,l=w.cursor)},r.$$.update=()=>{e(7,a=`${Ft} ${q} ${S} ${f} ${s} ${g} ${l} ${t.class??""}`)},t=Je(t),[v,o,p,u,i,d,C,a,P,t,q,S,f,s,g,l,H,Y,K,N,le]}class Pe extends ct{constructor(t){super(),ft(this,t,yt,bt,ot,{initials:1,fill:2,fontSize:3,src:0,fallback:4,action:5,actionParams:6,background:10,width:11,border:12,rounded:13,shadow:14,cursor:15})}}function Xe(r,t,e){const a=r.slice();return a[3]=t[e],a}function Ye(r,t,e){const a=r.slice();return a[6]=t[e],a}function Ke(r,t,e){const a=r.slice();return a[3]=t[e],a}function $e(r,t,e){const a=r.slice();return a[6]=t[e],a}function et(r,t,e){const a=r.slice();return a[3]=t[e],a}function tt(r,t,e){const a=r.slice();return a[6]=t[e],a}function at(r){let t,e=r[6].pos+"",a,h,m,o=r[6].years+"",p,u,v;return{c(){t=k("p"),a=z(e),h=j(),m=k("p"),p=z(o),u=j(),v=k("br")},l(i){t=y(i,"P",{});var d=D(t);a=V(d,e),d.forEach(F),h=x(i),m=y(i,"P",{});var C=D(m);p=V(C,o),C.forEach(F),u=x(i),v=y(i,"BR",{})},m(i,d){M(i,t,d),n(t,a),M(i,h,d),M(i,m,d),n(m,p),M(i,u,d),M(i,v,d)},p:ie,d(i){i&&(F(t),F(h),F(m),F(u),F(v))}}}function it(r,t){let e,a,h,m,o,p=t[3].name+"",u,v,i,d,C,q;h=new Pe({props:{src:t[3].img,alt:t[3].name,width:"w-32",rounded:"rounded-md"}});let S=R(t[3].positions),f=[];for(let s=0;s<S.length;s+=1)f[s]=at(tt(t,S,s));return{key:r,first:null,c(){e=k("div"),a=k("a"),Ae(h.$$.fragment),m=j(),o=k("h4"),u=z(p),v=j(),i=k("br"),d=j();for(let s=0;s<f.length;s+=1)f[s].c();C=j(),this.h()},l(s){e=y(s,"DIV",{class:!0});var g=D(e);a=y(g,"A",{href:!0,target:!0});var l=D(a);Se(h.$$.fragment,l),l.forEach(F),m=x(g),o=y(g,"H4",{});var P=D(o);u=V(P,p),P.forEach(F),v=x(g),i=y(g,"BR",{}),d=x(g);for(let H=0;H<f.length;H+=1)f[H].l(g);C=x(g),g.forEach(F),this.h()},h(){A(a,"href","https://clubs.iiit.ac.in/profile/"+t[3].uid),A(a,"target","_blank"),A(e,"class","flex flex-col items-center"),this.first=e},m(s,g){M(s,e,g),n(e,a),qe(h,a,null),n(e,m),n(e,o),n(o,u),n(e,v),n(e,i),n(e,d);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(e,null);n(e,C),q=!0},p(s,g){if(t=s,g&1){S=R(t[3].positions);let l;for(l=0;l<S.length;l+=1){const P=tt(t,S,l);f[l]?f[l].p(P,g):(f[l]=at(P),f[l].c(),f[l].m(e,C))}for(;l<f.length;l+=1)f[l].d(1);f.length=S.length}},i(s){q||(U(h.$$.fragment,s),q=!0)},o(s){X(h.$$.fragment,s),q=!1},d(s){s&&F(e),De(h),xe(f,s)}}}function lt(r){let t,e=r[6].pos+"",a,h,m,o=r[6].years+"",p,u,v;return{c(){t=k("p"),a=z(e),h=j(),m=k("p"),p=z(o),u=j(),v=k("br")},l(i){t=y(i,"P",{});var d=D(t);a=V(d,e),d.forEach(F),h=x(i),m=y(i,"P",{});var C=D(m);p=V(C,o),C.forEach(F),u=x(i),v=y(i,"BR",{})},m(i,d){M(i,t,d),n(t,a),M(i,h,d),M(i,m,d),n(m,p),M(i,u,d),M(i,v,d)},p:ie,d(i){i&&(F(t),F(h),F(m),F(u),F(v))}}}function st(r,t){let e,a,h,m,o,p=t[3].name+"",u,v,i,d,C,q;h=new Pe({props:{src:t[3].img,alt:t[3].name,width:"w-32",rounded:"rounded-md"}});let S=R(t[3].positions),f=[];for(let s=0;s<S.length;s+=1)f[s]=lt($e(t,S,s));return{key:r,first:null,c(){e=k("div"),a=k("a"),Ae(h.$$.fragment),m=j(),o=k("h4"),u=z(p),v=j(),i=k("br"),d=j();for(let s=0;s<f.length;s+=1)f[s].c();C=j(),this.h()},l(s){e=y(s,"DIV",{class:!0});var g=D(e);a=y(g,"A",{href:!0,target:!0});var l=D(a);Se(h.$$.fragment,l),l.forEach(F),m=x(g),o=y(g,"H4",{});var P=D(o);u=V(P,p),P.forEach(F),v=x(g),i=y(g,"BR",{}),d=x(g);for(let H=0;H<f.length;H+=1)f[H].l(g);C=x(g),g.forEach(F),this.h()},h(){A(a,"href","https://clubs.iiit.ac.in/profile/"+t[3].uid),A(a,"target","_blank"),A(e,"class","flex flex-col items-center"),this.first=e},m(s,g){M(s,e,g),n(e,a),qe(h,a,null),n(e,m),n(e,o),n(o,u),n(e,v),n(e,i),n(e,d);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(e,null);n(e,C),q=!0},p(s,g){if(t=s,g&2){S=R(t[3].positions);let l;for(l=0;l<S.length;l+=1){const P=$e(t,S,l);f[l]?f[l].p(P,g):(f[l]=lt(P),f[l].c(),f[l].m(e,C))}for(;l<f.length;l+=1)f[l].d(1);f.length=S.length}},i(s){q||(U(h.$$.fragment,s),q=!0)},o(s){X(h.$$.fragment,s),q=!1},d(s){s&&F(e),De(h),xe(f,s)}}}function nt(r){let t,e=r[6].pos+"",a,h,m,o=r[6].years+"",p,u,v;return{c(){t=k("p"),a=z(e),h=j(),m=k("p"),p=z(o),u=j(),v=k("br")},l(i){t=y(i,"P",{});var d=D(t);a=V(d,e),d.forEach(F),h=x(i),m=y(i,"P",{});var C=D(m);p=V(C,o),C.forEach(F),u=x(i),v=y(i,"BR",{})},m(i,d){M(i,t,d),n(t,a),M(i,h,d),M(i,m,d),n(m,p),M(i,u,d),M(i,v,d)},p:ie,d(i){i&&(F(t),F(h),F(m),F(u),F(v))}}}function rt(r,t){let e,a,h,m,o,p=t[3].name+"",u,v,i,d,C,q;h=new Pe({props:{src:t[3].img,alt:t[3].name,width:"w-32",rounded:"rounded-md"}});let S=R(t[3].positions),f=[];for(let s=0;s<S.length;s+=1)f[s]=nt(Ye(t,S,s));return{key:r,first:null,c(){e=k("div"),a=k("a"),Ae(h.$$.fragment),m=j(),o=k("h4"),u=z(p),v=j(),i=k("br"),d=j();for(let s=0;s<f.length;s+=1)f[s].c();C=j(),this.h()},l(s){e=y(s,"DIV",{class:!0});var g=D(e);a=y(g,"A",{href:!0,target:!0});var l=D(a);Se(h.$$.fragment,l),l.forEach(F),m=x(g),o=y(g,"H4",{});var P=D(o);u=V(P,p),P.forEach(F),v=x(g),i=y(g,"BR",{}),d=x(g);for(let H=0;H<f.length;H+=1)f[H].l(g);C=x(g),g.forEach(F),this.h()},h(){A(a,"href","https://clubs.iiit.ac.in/profile/"+t[3].uid),A(a,"target","_blank"),A(e,"class","flex flex-col items-center"),this.first=e},m(s,g){M(s,e,g),n(e,a),qe(h,a,null),n(e,m),n(e,o),n(o,u),n(e,v),n(e,i),n(e,d);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(e,null);n(e,C),q=!0},p(s,g){if(t=s,g&4){S=R(t[3].positions);let l;for(l=0;l<S.length;l+=1){const P=Ye(t,S,l);f[l]?f[l].p(P,g):(f[l]=nt(P),f[l].c(),f[l].m(e,C))}for(;l<f.length;l+=1)f[l].d(1);f.length=S.length}},i(s){q||(U(h.$$.fragment,s),q=!0)},o(s){X(h.$$.fragment,s),q=!1},d(s){s&&F(e),De(h),xe(f,s)}}}function wt(r){let t,e,a,h="Student Affairs Committe (SAC)",m,o,p="Members",u,v,i=[],d=new Map,C,q,S="Student Life Committe (SLC)",f,s,g,l,P="What do we do?",H,Y,K,N,le=`The Student Life Comittee is dedicated to enhancing the overall student experience and
			fostering a vibrant and inclusive campus community. We believe that student life is an
			integral part of a well-rounded education, and we strive to create opportunities for personal
			growth, leadership development, and meaningful connections among students.
			<br/>
			Our committee consists of passionate student representatives who work closely with faculty, staff,
			and the wider student body to organize and coordinate a wide range of events, programs, and initiatives.
			From social gatherings and cultural celebrations to educational workshops and community service
			projects, we aim to provide diverse opportunities for students to explore their interests, build
			lasting friendships, and make a positive impact on campus.`,w,re,oe,I,Me="Members",ue,G,B=[],He=new Map,ce,O,Be="Student Life Office (SLO)",fe,he,de,W,Ee="What do we do?",me,pe,_e,Q,Re=`Our mission is to enhance the overall student experience and promote a vibrant campus
			community. We are dedicated to encouraging an equitable balance between academics and
			extra-curricular activities for all students across campus and empowering students throughout
			their academic journey.
			<br/>
			The Student Life Office is here to assist you and ensure that your time at our institution is fulfilling,
			enjoyable, memorable and our friendly staff is ready to answer your questions and provide the support
			you need. We understand that your time in college is about more than just attending classes and
			studying; it&#39;s about discovering your passions and creating lasting memories. That&#39;s why we offer
			a variety of programs and initiatives designed to enrich your student life experience.`,ge,ve,be,J,Le="Members",Fe,Z,E=[],Te=new Map,se,$=R(r[0]);const ze=b=>b[3].uid;for(let b=0;b<$.length;b+=1){let _=et(r,$,b),c=ze(_);d.set(c,i[b]=it(c,_))}let ee=R(r[1]);const Ve=b=>b[3].uid;for(let b=0;b<ee.length;b+=1){let _=Ke(r,ee,b),c=Ve(_);He.set(c,B[b]=st(c,_))}let te=R(r[2]);const Ne=b=>b[3].uid;for(let b=0;b<te.length;b+=1){let _=Xe(r,te,b),c=Ne(_);Te.set(c,E[b]=rt(c,_))}return{c(){t=k("div"),e=k("div"),a=k("h2"),a.textContent=h,m=j(),o=k("h3"),o.textContent=p,u=j(),v=k("div");for(let b=0;b<i.length;b+=1)i[b].c();C=j(),q=k("h2"),q.textContent=S,f=j(),s=k("br"),g=j(),l=k("h3"),l.textContent=P,H=j(),Y=k("br"),K=j(),N=k("p"),N.innerHTML=le,w=j(),re=k("br"),oe=j(),I=k("h3"),I.textContent=Me,ue=j(),G=k("div");for(let b=0;b<B.length;b+=1)B[b].c();ce=j(),O=k("h2"),O.textContent=Be,fe=j(),he=k("br"),de=j(),W=k("h3"),W.textContent=Ee,me=j(),pe=k("br"),_e=j(),Q=k("p"),Q.innerHTML=Re,ge=j(),ve=k("br"),be=j(),J=k("h3"),J.textContent=Le,Fe=j(),Z=k("div");for(let b=0;b<E.length;b+=1)E[b].c();this.h()},l(b){t=y(b,"DIV",{class:!0});var _=D(t);e=y(_,"DIV",{class:!0});var c=D(e);a=y(c,"H2",{class:!0,"data-svelte-h":!0}),T(a)!=="svelte-g5r9ig"&&(a.textContent=h),m=x(c),o=y(c,"H3",{class:!0,"data-svelte-h":!0}),T(o)!=="svelte-kjujof"&&(o.textContent=p),u=x(c),v=y(c,"DIV",{class:!0});var Ie=D(v);for(let L=0;L<i.length;L+=1)i[L].l(Ie);Ie.forEach(F),C=x(c),q=y(c,"H2",{class:!0,"data-svelte-h":!0}),T(q)!=="svelte-1vq4ef3"&&(q.textContent=S),f=x(c),s=y(c,"BR",{}),g=x(c),l=y(c,"H3",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-i7cmvz"&&(l.textContent=P),H=x(c),Y=y(c,"BR",{}),K=x(c),N=y(c,"P",{"data-svelte-h":!0}),T(N)!=="svelte-m5k7gy"&&(N.innerHTML=le),w=x(c),re=y(c,"BR",{}),oe=x(c),I=y(c,"H3",{class:!0,"data-svelte-h":!0}),T(I)!=="svelte-kjujof"&&(I.textContent=Me),ue=x(c),G=y(c,"DIV",{class:!0});var Ge=D(G);for(let L=0;L<B.length;L+=1)B[L].l(Ge);Ge.forEach(F),ce=x(c),O=y(c,"H2",{class:!0,"data-svelte-h":!0}),T(O)!=="svelte-7n33pl"&&(O.textContent=Be),fe=x(c),he=y(c,"BR",{}),de=x(c),W=y(c,"H3",{class:!0,"data-svelte-h":!0}),T(W)!=="svelte-i7cmvz"&&(W.textContent=Ee),me=x(c),pe=y(c,"BR",{}),_e=x(c),Q=y(c,"P",{"data-svelte-h":!0}),T(Q)!=="svelte-dy27fi"&&(Q.innerHTML=Re),ge=x(c),ve=y(c,"BR",{}),be=x(c),J=y(c,"H3",{class:!0,"data-svelte-h":!0}),T(J)!=="svelte-kjujof"&&(J.textContent=Le),Fe=x(c),Z=y(c,"DIV",{class:!0});var Oe=D(Z);for(let L=0;L<E.length;L+=1)E[L].l(Oe);Oe.forEach(F),c.forEach(F),_.forEach(F),this.h()},h(){A(a,"class","h2"),A(o,"class","h3"),A(v,"class","avatar-grid svelte-7v0h0y"),A(q,"class","h2"),A(l,"class","h3"),A(I,"class","h3"),A(G,"class","avatar-grid svelte-7v0h0y"),A(O,"class","h2"),A(W,"class","h3"),A(J,"class","h3"),A(Z,"class","avatar-grid svelte-7v0h0y"),A(e,"class","flex flex-col"),A(t,"class","container h-full w-full mx-auto flex justify-center flex-col")},m(b,_){M(b,t,_),n(t,e),n(e,a),n(e,m),n(e,o),n(e,u),n(e,v);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(v,null);n(e,C),n(e,q),n(e,f),n(e,s),n(e,g),n(e,l),n(e,H),n(e,Y),n(e,K),n(e,N),n(e,w),n(e,re),n(e,oe),n(e,I),n(e,ue),n(e,G);for(let c=0;c<B.length;c+=1)B[c]&&B[c].m(G,null);n(e,ce),n(e,O),n(e,fe),n(e,he),n(e,de),n(e,W),n(e,me),n(e,pe),n(e,_e),n(e,Q),n(e,ge),n(e,ve),n(e,be),n(e,J),n(e,Fe),n(e,Z);for(let c=0;c<E.length;c+=1)E[c]&&E[c].m(Z,null);se=!0},p(b,[_]){_&1&&($=R(b[0]),ye(),i=we(i,_,ze,1,b,$,d,v,Ce,it,null,et),ke()),_&2&&(ee=R(b[1]),ye(),B=we(B,_,Ve,1,b,ee,He,G,Ce,st,null,Ke),ke()),_&4&&(te=R(b[2]),ye(),E=we(E,_,Ne,1,b,te,Te,Z,Ce,rt,null,Xe),ke())},i(b){if(!se){for(let _=0;_<$.length;_+=1)U(i[_]);for(let _=0;_<ee.length;_+=1)U(B[_]);for(let _=0;_<te.length;_+=1)U(E[_]);se=!0}},o(b){for(let _=0;_<i.length;_+=1)X(i[_]);for(let _=0;_<B.length;_+=1)X(B[_]);for(let _=0;_<E.length;_+=1)X(E[_]);se=!1},d(b){b&&F(t);for(let _=0;_<i.length;_+=1)i[_].d();for(let _=0;_<B.length;_+=1)B[_].d();for(let _=0;_<E.length;_+=1)E[_].d()}}}function Ct(r){return[[{uid:"radhika.mamidi",name:"Radhika Mamidi",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DcoSNu725F37yRao3p477xM_radhika.mamidi.jpg&w=1080&q=75",positions:[{pos:"Student Affairs Committee Chair",years:"2021-present"}]},{uid:"tapan.sau",name:"Tapan Sau",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D6RPGaYhvNDfG4JshstTZF6_tapan.sau.jpg&w=1080&q=75",positions:[{pos:"Student Life Committee Chair",years:"2021-present"},{pos:"Anti-Ragging Committee Chair",years:"2018-present"}]},{uid:"priyanka.srivastava",name:"Priyanka Srivastava",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DmvTng5J29NFDUcFj95aj3j_priyanka.srivastava.jpg&w=1080&q=75",positions:[{pos:"Mental Health Coordinator",years:"2023-present"}]},{uid:"vinod.pk",name:"Vinod Pallakad",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DBr4XwM4gBkJpLpeqPbjxeX_vinod.pk.jpg&w=1080&q=75",positions:[{pos:"Sports Chair",years:"2020-present"}]},{uid:"ashamn",name:"Asham M N",img:"https://avatar.iran.liara.run/public",positions:[{pos:"Council of Wardens Chair",years:"2023-present"}]},{uid:"radhika.krishnan",name:"Radhika Krishnan",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D4EFtOczGGdX9t2nE2zk0tn0A_radhika.krishnan.jpeg&w=1080&q=75",positions:[{pos:"Mess Committee Chair",years:"2021-present"}]},{uid:"prabhakar",name:"Prabhakar M",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTW7T3LrHjbyyDtHPHNztiq_prabhakar.jpg&w=1080&q=75",positions:[{pos:"SLO Head",years:"2019-present"}]}],[{uid:"tapan.sau",name:"Tapan Sau",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D6RPGaYhvNDfG4JshstTZF6_tapan.sau.jpg&w=1080&q=75",positions:[{pos:"Student Life Committee Chair",years:"2021-present"}]},{uid:"radhika.mamidi",name:"Radhika Mamidi",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DcoSNu725F37yRao3p477xM_radhika.mamidi.jpg&w=1080&q=75",positions:[{pos:"Student Affairs Committee Chair",years:"2021-present"}]},{uid:"indranil.chakraborty",name:"Indranil Chakraborty",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D8C92ohv2FnZQF5k32euBB7_indranil.chakrabarty.jpg&w=1080&q=75",positions:[{pos:"Cultural Coordinator",years:"2021-present"}]},{uid:"subhadip.mitra",name:"Subhadip Mitra",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DgQZ2jQcuoqhCZ6tVmRBP9P_subhadip.mitra.jpg&w=1080&q=75",positions:[{pos:"Cultural Coordinator",years:"2021-present"}]},{uid:"aftab.hussain",name:"Aftab M Hussain",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D1gedB8HrQiU6rQotz3hpfCV8_aftab.hussain.jpg&w=1080&q=75",positions:[{pos:"Cultural Coordinator",years:"2021-present"}]},{uid:"sunita.palissery",name:"Sunita Palissery",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D746Jqpw8AVFya6McqnFv52_sunitha.palissery.jpg&w=1080&q=75",positions:[{pos:"Campus Life Coordinator",years:"2021-present"}]},{uid:"rcprasad",name:"Ramachandra Prasad P",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DNevNpri3qtu5yAZiGaPrBy_rcprasad.jpg&w=1080&q=75",positions:[{pos:"Campus Life Coordinator",years:"2021-present"}]},{uid:"chiranjeevi.yarra",name:"Chiranjeevi Yarra",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DBBdL5zwRwwB7FRasoqZpry_chiranjeevi.yarra.jpg&w=1080&q=75",positions:[{pos:"NSS Officer",years:"2021-present"}]},{uid:"prasad.krishnan",name:"Prasad Krishnan",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTt6hYCDiiXmkfbSK2iVJc5_prasad.krishnan.jpg&w=1080&q=75",positions:[{pos:"NSS Officer",years:"2021-present"}]},{uid:"priyanka.srivastava",name:"Priyanka Srivastava",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DmvTng5J29NFDUcFj95aj3j_priyanka.srivastava.jpg&w=1080&q=75",positions:[{pos:"Counselling Coordinator",years:"2023-present"}]},{uid:"prabhakar",name:"Prabhakar M",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTW7T3LrHjbyyDtHPHNztiq_prabhakar.jpg&w=1080&q=75",positions:[{pos:"Admin Support",years:"2019-present"}]}],[{uid:"prabhakar",name:"Prabhakar M",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTW7T3LrHjbyyDtHPHNztiq_prabhakar.jpg&w=1080&q=75",positions:[{pos:"SLO Head",years:"2019-present"}]},{uid:"vamsi.krishna",name:"Vamsi Krishna",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D3fXHVeqViSZ8A9BHaVeSdt_vamsi.krishna.jpg&w=1080&q=75",positions:[{pos:"Member",years:"2023-present"}]},{uid:"akhil.a",name:"Akhil A",img:"https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DLCLbLdaM6nL9AppVYT3qTQ_akhil.a.jpg&w=1080&q=75",positions:[{pos:"Member",years:"2021-2023"}]}]]}class qt extends ct{constructor(t){super(),ft(this,t,Ct,wt,ot,{})}}export{qt as component};
