(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},Ht=[],et=()=>{},Qo=()=>!1,Hn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Un=e=>e.startsWith("onUpdate:"),be=Object.assign,ki=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xr=Object.prototype.hasOwnProperty,ee=(e,t)=>xr.call(e,t),G=Array.isArray,St=e=>hn(e)==="[object Map]",_n=e=>hn(e)==="[object Set]",eo=e=>hn(e)==="[object Date]",K=e=>typeof e=="function",de=e=>typeof e=="string",tt=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",zo=e=>(te(e)||K(e))&&K(e.then)&&K(e.catch),Xo=Object.prototype.toString,hn=e=>Xo.call(e),Sr=e=>hn(e).slice(8,-1),Zo=e=>hn(e)==="[object Object]",Oi=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,en=Mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Er=/-\w/g,Ae=qn(e=>e.replace(Er,t=>t.slice(1).toUpperCase())),wr=/\B([A-Z])/g,kt=qn(e=>e.replace(wr,"-$1").toLowerCase()),Fn=qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ni=qn(e=>e?`on${Fn(e)}`:""),Ze=(e,t)=>!Object.is(e,t),Rn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},es=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Tr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let to;const Jn=()=>to||(to=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vn(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=de(i)?Cr(i):vn(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(de(e)||te(e))return e}const Rr=/;(?![^(]*\))/g,Ar=/:([^]+)/,Lr=/\/\*[^]*?\*\//g;function Cr(e){const t={};return e.replace(Lr,"").split(Rr).forEach(n=>{if(n){const i=n.split(Ar);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function je(e){let t="";if(de(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const i=je(e[n]);i&&(t+=i+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const _r="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ir=Mi(_r);function ts(e){return!!e||e===""}function Mr(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=Ft(e[i],t[i]);return n}function no(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),i=new Uint8Array(n.length);for(const o of e){let s=-1;for(let r=0;r<n.length;r++)if(!i[r]&&Ft(o,n[r])){s=r;break}if(s<0)return!1;i[s]=1}return!0}function Ft(e,t){if(e===t)return!0;let n=eo(e),i=eo(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=tt(e),i=tt(t),n||i)return e===t;if(n=G(e),i=G(t),n||i)return n&&i?Mr(e,t):!1;if(n=te(e),i=te(t),n||i){if(!n||!i)return!1;if(n=St(e),i=St(t),n||i||(n=_n(e),i=_n(t),n||i))return n&&i?no(e,t):!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const r in e){const a=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(a&&!l||!a&&l||!Ft(e[r],t[r]))return!1}}return String(e)===String(t)}const ns=e=>!!(e&&e.__v_isRef===!0),V=e=>de(e)?e:e==null?"":G(e)||te(e)&&(e.toString===Xo||!K(e.toString))?ns(e)?V(e.value):JSON.stringify(e,is,2):String(e),is=(e,t)=>ns(t)?is(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],s)=>(n[ii(i,s)+" =>"]=o,n),{})}:_n(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ii(n))}:tt(t)?ii(t):te(t)&&!G(t)&&!Zo(t)?String(t):t,ii=(e,t="")=>{var n;return tt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ve;class kr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ve&&(ve.active?(this.parent=ve,this.index=(ve.scopes||(ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=ve;try{return ve=this,t()}finally{ve=n}}}on(){++this._on===1&&(this.prevScope=ve,ve=this)}off(){if(this._on>0&&--this._on===0){if(ve===this)ve=this.prevScope;else{let t=ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,i=o.length;n<i;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Or(){return ve}let le;const oi=new WeakSet;class os{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ve&&(ve.active?ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oi.has(this)&&(oi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,io(this),as(this);const t=le,n=Be;le=this,Be=!0;try{return this.fn()}finally{ls(this),le=t,Be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Pi(t);this.deps=this.depsTail=void 0,io(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hi(this)&&this.run()}get dirty(){return hi(this)}}let ss=0,tn,nn;function rs(e,t=!1){if(e.flags|=8,t){e.next=nn,nn=e;return}e.next=tn,tn=e}function ji(){ss++}function Ni(){if(--ss>0)return;if(nn){let t=nn;for(nn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;tn;){let t=tn;for(tn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function as(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ls(e){let t,n=e.depsTail,i=n;for(;i;){const o=i.prevDep;i.version===-1?(i===n&&(n=o),Pi(i),jr(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=t,e.depsTail=n}function hi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(cs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function cs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===cn)||(e.globalVersion=cn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!hi(e))))return;e.flags|=2;const t=e.dep,n=le,i=Be;le=e,Be=!0;try{as(e);const o=e.fn(e._value);(t.version===0||Ze(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{le=n,Be=i,ls(e),e.flags&=-3}}function Pi(e,t=!1){const{dep:n,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Pi(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function jr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Be=!0;const ps=[];function pt(){ps.push(Be),Be=!1}function ut(){const e=ps.pop();Be=e===void 0?!0:e}function io(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let cn=0;class Nr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Di{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!le||!Be||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new Nr(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,us(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=i)}return n}trigger(t){this.version++,cn++,this.notify(t)}notify(t){ji();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ni()}}}function us(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)us(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const vi=new WeakMap,Ct=Symbol(""),bi=Symbol(""),pn=Symbol("");function xe(e,t,n){if(Be&&le){let i=vi.get(e);i||vi.set(e,i=new Map);let o=i.get(n);o||(i.set(n,o=new Di),o.map=i,o.key=n),o.track()}}function lt(e,t,n,i,o,s){const r=vi.get(e);if(!r){cn++;return}const a=l=>{l&&l.trigger()};if(ji(),t==="clear")r.forEach(a);else{const l=G(e),c=l&&Oi(n);if(l&&n==="length"){const u=Number(i);r.forEach((g,m)=>{(m==="length"||m===pn||!tt(m)&&m>=u)&&a(g)})}else switch((n!==void 0||r.has(void 0))&&a(r.get(n)),c&&a(r.get(pn)),t){case"add":l?c&&a(r.get("length")):(a(r.get(Ct)),St(e)&&a(r.get(bi)));break;case"delete":l||(a(r.get(Ct)),St(e)&&a(r.get(bi)));break;case"set":St(e)&&a(r.get(Ct));break}}Ni()}function Pt(e){const t=Z(e);return t===e?t:(xe(t,"iterate",pn),Pe(e)?t:t.map(Ue))}function Vn(e){return xe(e=Z(e),"iterate",pn),e}function ze(e,t){return dt(e)?Jt(_t(e)?Ue(t):t):Ue(t)}const Pr={__proto__:null,[Symbol.iterator](){return si(this,Symbol.iterator,e=>ze(this,e))},concat(...e){return Pt(this).concat(...e.map(t=>G(t)?Pt(t):t))},entries(){return si(this,"entries",e=>(e[1]=ze(this,e[1]),e))},every(e,t){return it(this,"every",e,t,void 0,arguments)},filter(e,t){return it(this,"filter",e,t,n=>n.map(i=>ze(this,i)),arguments)},find(e,t){return it(this,"find",e,t,n=>ze(this,n),arguments)},findIndex(e,t){return it(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return it(this,"findLast",e,t,n=>ze(this,n),arguments)},findLastIndex(e,t){return it(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return it(this,"forEach",e,t,void 0,arguments)},includes(...e){return ri(this,"includes",e)},indexOf(...e){return ri(this,"indexOf",e)},join(e){return Pt(this).join(e)},lastIndexOf(...e){return ri(this,"lastIndexOf",e)},map(e,t){return it(this,"map",e,t,void 0,arguments)},pop(){return $t(this,"pop")},push(...e){return $t(this,"push",e)},reduce(e,...t){return oo(this,"reduce",e,t)},reduceRight(e,...t){return oo(this,"reduceRight",e,t)},shift(){return $t(this,"shift")},some(e,t){return it(this,"some",e,t,void 0,arguments)},splice(...e){return $t(this,"splice",e)},toReversed(){return Pt(this).toReversed()},toSorted(e){return Pt(this).toSorted(e)},toSpliced(...e){return Pt(this).toSpliced(...e)},unshift(...e){return $t(this,"unshift",e)},values(){return si(this,"values",e=>ze(this,e))}};function si(e,t,n){const i=Vn(e),o=i[t]();return i!==e&&!Pe(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.done||(s.value=n(s.value)),s}),o}const Dr=Array.prototype;function it(e,t,n,i,o,s){const r=Vn(e),a=r!==e&&!Pe(e),l=r[t];if(l!==Dr[t]){const g=l.apply(e,s);return a?Ue(g):g}let c=n;r!==e&&(a?c=function(g,m){return n.call(this,ze(e,g),m,e)}:n.length>2&&(c=function(g,m){return n.call(this,g,m,e)}));const u=l.call(r,c,i);return a&&o?o(u):u}function oo(e,t,n,i){const o=Vn(e),s=o!==e&&!Pe(e);let r=n,a=!1;o!==e&&(s?(a=i.length===0,r=function(c,u,g){return a&&(a=!1,c=ze(e,c)),n.call(this,c,ze(e,u),g,e)}):n.length>3&&(r=function(c,u,g){return n.call(this,c,u,g,e)}));const l=o[t](r,...i);return a?ze(e,l):l}function ri(e,t,n){const i=Z(e);xe(i,"iterate",pn);const o=i[t](...n);return(o===-1||o===!1)&&Ui(n[0])?(n[0]=Z(n[0]),i[t](...n)):o}function $t(e,t,n=[]){pt(),ji();const i=Z(e)[t].apply(e,n);return Ni(),ut(),i}const Br=Mi("__proto__,__v_isRef,__isVue"),ds=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tt));function Hr(e){tt(e)||(e=String(e));const t=Z(this);return xe(t,"has",e),t.hasOwnProperty(e)}class gs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(o?s?$r:hs:s?ys:ms).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=G(t);if(!o){let l;if(r&&(l=Pr[n]))return l;if(n==="hasOwnProperty")return Hr}const a=Reflect.get(t,n,Ee(t)?t:i);if((tt(n)?ds.has(n):Br(n))||(o||xe(t,"get",n),s))return a;if(Ee(a)){const l=r&&Oi(n)?a:a.value;return o&&te(l)?Si(l):l}return te(a)?o?Si(a):Gn(a):a}}class fs extends gs{constructor(t=!1){super(!1,t)}set(t,n,i,o){let s=t[n];const r=G(t)&&Oi(n);if(!this._isShallow){const c=dt(s);if(!Pe(i)&&!dt(i)&&(s=Z(s),i=Z(i)),!r&&Ee(s)&&!Ee(i))return c||(s.value=i),!0}const a=r?Number(n)<t.length:ee(t,n),l=Reflect.set(t,n,i,Ee(t)?t:o);return t===Z(o)&&l&&(a?Ze(i,s)&&lt(t,"set",n,i):lt(t,"add",n,i)),l}deleteProperty(t,n){const i=ee(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&lt(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!tt(n)||!ds.has(n))&&xe(t,"has",n),i}ownKeys(t){return xe(t,"iterate",G(t)?"length":Ct),Reflect.ownKeys(t)}}class Ur extends gs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const qr=new fs,Fr=new Ur,Jr=new fs(!0);const xi=e=>e,Sn=e=>Reflect.getPrototypeOf(e);function Vr(e,t,n){return function(...i){const o=this.__v_raw,s=Z(o),r=St(s),a=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,c=o[e](...i),u=n?xi:t?Jt:Ue;return!t&&xe(s,"iterate",l?bi:Ct),be(Object.create(c),{next(){const{value:g,done:m}=c.next();return m?{value:g,done:m}:{value:a?[u(g[0]),u(g[1])]:u(g),done:m}}})}}function En(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Gr(e,t){const n={get(o){const s=this.__v_raw,r=Z(s),a=Z(o);e||(Ze(o,a)&&xe(r,"get",o),xe(r,"get",a));const{has:l}=Sn(r),c=t?xi:e?Jt:Ue;if(l.call(r,o))return c(s.get(o));if(l.call(r,a))return c(s.get(a));s!==r&&s.get(o)},get size(){const o=this.__v_raw;return!e&&xe(Z(o),"iterate",Ct),o.size},has(o){const s=this.__v_raw,r=Z(s),a=Z(o);return e||(Ze(o,a)&&xe(r,"has",o),xe(r,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const r=this,a=r.__v_raw,l=Z(a),c=t?xi:e?Jt:Ue;return!e&&xe(l,"iterate",Ct),a.forEach((u,g)=>o.call(s,c(u),c(g),r))}};return be(n,e?{add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear")}:{add(o){const s=Z(this),r=Sn(s),a=Z(o),l=!t&&!Pe(o)&&!dt(o)?a:o;return r.has.call(s,l)||Ze(o,l)&&r.has.call(s,o)||Ze(a,l)&&r.has.call(s,a)||(s.add(l),lt(s,"add",l,l)),this},set(o,s){!t&&!Pe(s)&&!dt(s)&&(s=Z(s));const r=Z(this),{has:a,get:l}=Sn(r);let c=a.call(r,o);c||(o=Z(o),c=a.call(r,o));const u=l.call(r,o);return r.set(o,s),c?Ze(s,u)&&lt(r,"set",o,s):lt(r,"add",o,s),this},delete(o){const s=Z(this),{has:r,get:a}=Sn(s);let l=r.call(s,o);l||(o=Z(o),l=r.call(s,o)),a&&a.call(s,o);const c=s.delete(o);return l&&lt(s,"delete",o,void 0),c},clear(){const o=Z(this),s=o.size!==0,r=o.clear();return s&&lt(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Vr(o,e,t)}),n}function Bi(e,t){const n=Gr(e,t);return(i,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(ee(n,o)&&o in i?n:i,o,s)}const Wr={get:Bi(!1,!1)},Kr={get:Bi(!1,!0)},Yr={get:Bi(!0,!1)};const ms=new WeakMap,ys=new WeakMap,hs=new WeakMap,$r=new WeakMap;function Qr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gn(e){return dt(e)?e:Hi(e,!1,qr,Wr,ms)}function vs(e){return Hi(e,!1,Jr,Kr,ys)}function Si(e){return Hi(e,!0,Fr,Yr,hs)}function Hi(e,t,n,i,o){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const r=Qr(Sr(e));if(r===0)return e;const a=new Proxy(e,r===2?i:n);return o.set(e,a),a}function _t(e){return dt(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function dt(e){return!!(e&&e.__v_isReadonly)}function Pe(e){return!!(e&&e.__v_isShallow)}function Ui(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function zr(e){return!ee(e,"__v_skip")&&Object.isExtensible(e)&&es(e,"__v_skip",!0),e}const Ue=e=>te(e)?Gn(e):e,Jt=e=>te(e)?Si(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function rt(e){return bs(e,!1)}function Xr(e){return bs(e,!0)}function bs(e,t){return Ee(e)?e:new Zr(e,t)}class Zr{constructor(t,n){this.dep=new Di,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Z(t),this._value=n?t:Ue(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Pe(t)||dt(t);t=i?t:Z(t),Ze(t,n)&&(this._rawValue=t,this._value=i?t:Ue(t),this.dep.trigger())}}function _e(e){return Ee(e)?e.value:e}const ea={get:(e,t,n)=>t==="__v_raw"?e:_e(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return Ee(o)&&!Ee(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function xs(e){return _t(e)?e:new Proxy(e,ea)}class ta{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Di(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return rs(this,!0),!0}get value(){const t=this.dep.track();return cs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function na(e,t,n=!1){let i,o;return K(e)?i=e:(i=e.get,o=e.set),new ta(i,o,n)}const wn={},In=new WeakMap;let At;function ia(e,t=!1,n=At){if(n){let i=In.get(n);i||In.set(n,i=[]),i.push(e)}}function oa(e,t,n=ae){const{immediate:i,deep:o,once:s,scheduler:r,augmentJob:a,call:l}=n,c=k=>o?k:Pe(k)||o===!1||o===0?ct(k,1):ct(k);let u,g,m,y,O=!1,R=!1;if(Ee(e)?(g=()=>e.value,O=Pe(e)):_t(e)?(g=()=>c(e),O=!0):G(e)?(R=!0,O=e.some(k=>_t(k)||Pe(k)),g=()=>e.map(k=>{if(Ee(k))return k.value;if(_t(k))return c(k);if(K(k))return l?l(k,2):k()})):K(e)?t?g=l?()=>l(e,2):e:g=()=>{if(m){pt();try{m()}finally{ut()}}const k=At;At=u;try{return l?l(e,3,[y]):e(y)}finally{At=k}}:g=et,t&&o){const k=g,U=o===!0?1/0:o;g=()=>ct(k(),U)}const F=Or(),H=()=>{u.stop(),F&&F.active&&ki(F.effects,u)};if(s&&t){const k=t;t=(...U)=>{const N=k(...U);return H(),N}}let L=R?new Array(e.length).fill(wn):wn;const j=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(t){const U=u.run();if(k||o||O||(R?U.some((N,C)=>Ze(N,L[C])):Ze(U,L))){m&&m();const N=At;At=u;try{const C=[U,L===wn?void 0:R&&L[0]===wn?[]:L,y];L=U,l?l(t,3,C):t(...C)}finally{At=N}}}else u.run()};return a&&a(j),u=new os(g),u.scheduler=r?()=>r(j,!1):j,y=k=>ia(k,!1,u),m=u.onStop=()=>{const k=In.get(u);if(k){if(l)l(k,4);else for(const U of k)U();In.delete(u)}},t?i?j(!0):L=u.run():r?r(j.bind(null,!0),!0):u.run(),H.pause=u.pause.bind(u),H.resume=u.resume.bind(u),H.stop=H,H}function ct(e,t=1/0,n){if(t<=0||!te(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))ct(e.value,t,n);else if(G(e))for(let i=0;i<e.length;i++)ct(e[i],t,n);else if(_n(e)||St(e))e.forEach(i=>{ct(i,t,n)});else if(Zo(e)){for(const i in e)ct(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&ct(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bn(e,t,n,i){try{return i?e(...i):e()}catch(o){Wn(o,t,n)}}function qe(e,t,n,i){if(K(e)){const o=bn(e,t,n,i);return o&&zo(o)&&o.catch(s=>{Wn(s,t,n)}),o}if(G(e)){const o=[];for(let s=0;s<e.length;s++)o.push(qe(e[s],t,n,i));return o}}function Wn(e,t,n,i=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](e,l,c)===!1)return}a=a.parent}if(s){pt(),bn(s,null,10,[e,l,c]),ut();return}}sa(e,n,o,i,r)}function sa(e,t,n,i=!0,o=!1){if(o)throw e;console.error(e)}const Re=[];let Qe=-1;const Ut=[];let bt=null,Dt=0;const Ss=Promise.resolve();let Mn=null;function Es(e){const t=Mn||Ss;return e?t.then(this?e.bind(this):e):t}function ra(e){let t=Qe+1,n=Re.length;for(;t<n;){const i=t+n>>>1,o=Re[i],s=un(o);s<e||s===e&&o.flags&2?t=i+1:n=i}return t}function qi(e){if(!(e.flags&1)){const t=un(e),n=Re[Re.length-1];!n||!(e.flags&2)&&t>=un(n)?Re.push(e):Re.splice(ra(t),0,e),e.flags|=1,ws()}}function ws(){Mn||(Mn=Ss.then(Rs))}function aa(e){if(!G(e))bt&&e.id===-1?bt.splice(Dt+1,0,e):e.flags&1||(Ut.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Ut.push(e[t]);ws()}function so(e,t,n=Qe+1){for(;n<Re.length;n++){const i=Re[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Re.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ts(e){if(Ut.length){const t=[...new Set(Ut)].sort((n,i)=>un(n)-un(i));if(Ut.length=0,bt){for(let n=0;n<t.length;n++)bt.push(t[n]);return}for(bt=t,Dt=0;Dt<bt.length;Dt++){const n=bt[Dt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,Dt=0}}const un=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Rs(e){try{for(Qe=0;Qe<Re.length;Qe++){const t=Re[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),bn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qe<Re.length;Qe++){const t=Re[Qe];t&&(t.flags&=-2)}Qe=-1,Re.length=0,Ts(),Mn=null,(Re.length||Ut.length)&&Rs()}}let Me=null,As=null;function kn(e){const t=Me;return Me=e,As=e&&e.type.__scopeId||null,t}function fe(e,t=Me,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Nn(-1);const s=kn(t),r=It.length;let a;try{a=e(...o)}finally{for(let l=It.length;l>r;l--)Zs();kn(s),i._d&&Nn(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ro(e,t){if(Me===null)return e;const n=zn(Me),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,a,l=ae]=t[o];s&&(K(s)&&(s={mounted:s,updated:s}),s.deep&&ct(r),i.push({dir:s,instance:n,value:r,oldValue:void 0,arg:a,modifiers:l}))}return e}function Tt(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];s&&(a.oldValue=s[r].value);let l=a.dir[i];l&&(pt(),qe(l,n,8,[e.el,a,e,t]),ut())}}function An(e,t){if(Se){let n=Se.provides;const i=Se.parent&&Se.parent.provides;i===n&&(n=Se.provides=Object.create(i)),n[e]=t}}function He(e,t,n=!1){const i=sl();if(i||qt){let o=qt?qt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&K(t)?t.call(i&&i.proxy):t}}const la=Symbol.for("v-scx"),ca=()=>He(la);function on(e,t,n){return Ls(e,t,n)}function Ls(e,t,n=ae){const{immediate:i,deep:o,flush:s,once:r}=n,a=be({},n),l=t&&i||!t&&s!=="post";let c;if(mn){if(s==="sync"){const y=ca();c=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=et,y.resume=et,y.pause=et,y}}const u=Se;a.call=(y,O,R)=>qe(y,u,O,R);let g=!1;s==="post"?a.scheduler=y=>{Ce(y,u&&u.suspense)}:s!=="sync"&&(g=!0,a.scheduler=(y,O)=>{O?y():qi(y)}),a.augmentJob=y=>{t&&(y.flags|=4),g&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const m=oa(e,t,a);return mn&&(c?c.push(m):l&&m()),m}function pa(e,t,n){const i=this.proxy,o=de(e)?e.includes(".")?Cs(i,e):()=>i[e]:e.bind(i,i);let s;K(t)?s=t:(s=t.handler,n=t);const r=xn(this),a=Ls(o,s.bind(i),n);return r(),a}function Cs(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}const ua=Symbol("_vte"),Kn=e=>e.__isTeleport,ai=Symbol("_leaveCb");function da(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==gt){t=n;break}}return t}function _s(e){if(!Ji(e))return Kn(e.type)&&e.children?da(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function Fi(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Fi(Kn(n.type)&&_s(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Is(e,t){return K(e)?be({name:e.name},t,{setup:e}):e}function Ms(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ao(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const On=new WeakMap;function sn(e,t,n,i,o=!1){if(G(e)){e.forEach((R,F)=>sn(R,t&&(G(t)?t[F]:t),n,i,o));return}if(rn(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&sn(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?zn(i.component):i.el,r=o?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,g=a.setupState,m=Z(g),y=g===ae?Qo:R=>ao(u,R)?!1:ee(m,R),O=(R,F)=>!(F&&ao(u,F));if(c!=null&&c!==l){if(lo(t),de(c))u[c]=null,y(c)&&(g[c]=null);else if(Ee(c)){const R=t;O(c,R.k)&&(c.value=null),R.k&&(u[R.k]=null)}}if(K(l))bn(l,a,12,[r,u]);else{const R=de(l),F=Ee(l);if(R||F){const H=()=>{if(e.f){const L=R?y(l)?g[l]:u[l]:O()||!e.k?l.value:u[e.k];if(o)G(L)&&ki(L,s);else if(G(L))L.includes(s)||L.push(s);else if(R)u[l]=[s],y(l)&&(g[l]=u[l]);else{const j=[s];O(l,e.k)&&(l.value=j),e.k&&(u[e.k]=j)}}else R?(u[l]=r,y(l)&&(g[l]=r)):F&&(O(l,e.k)&&(l.value=r),e.k&&(u[e.k]=r))};if(r){const L=()=>{H(),On.delete(e)};L.id=-1,On.set(e,L),Ce(L,n)}else lo(e),H()}}}function lo(e){const t=On.get(e);t&&(t.flags|=8,On.delete(e))}Jn().requestIdleCallback;Jn().cancelIdleCallback;const rn=e=>!!e.type.__asyncLoader,Ji=e=>e.type.__isKeepAlive;function ga(e,t){ks(e,"a",t)}function fa(e,t){ks(e,"da",t)}function ks(e,t,n=Se){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Yn(t,i,n),n){let o=n.parent;for(;o&&o.parent;)Ji(o.parent.vnode)&&ma(i,t,n,o),o=o.parent}}function ma(e,t,n,i){const o=Yn(t,e,i,!0);Ns(()=>{ki(i[t],o)},n)}function Yn(e,t,n=Se,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{pt();const a=xn(n),l=qe(t,n,e,r);return a(),ut(),l});return i?o.unshift(s):o.push(s),s}}const ft=e=>(t,n=Se)=>{(!mn||e==="sp")&&Yn(e,(...i)=>t(...i),n)},ya=ft("bm"),Os=ft("m"),ha=ft("bu"),va=ft("u"),js=ft("bum"),Ns=ft("um"),ba=ft("sp"),xa=ft("rtg"),Sa=ft("rtc");function Ea(e,t=Se){Yn("ec",e,t)}const wa="components";function dn(e,t){return Ra(wa,e,!0,t)||e}const Ta=Symbol.for("v-ndc");function Ra(e,t,n=!0,i=!1){const o=Me||Se;if(o){const s=o.type;{const a=pl(s,!1);if(a&&(a===t||a===Ae(t)||a===Fn(Ae(t))))return s}const r=co(o[e]||s[e],t)||co(o.appContext[e],t);return!r&&i?s:r}}function co(e,t){return e&&(e[t]||e[Ae(t)]||e[Fn(Ae(t))])}function Ne(e,t,n,i){let o;const s=n,r=G(e);if(r||de(e)){const a=r&&_t(e);let l=!1,c=!1;a&&(l=!Pe(e),c=dt(e),e=Vn(e)),o=new Array(e.length);for(let u=0,g=e.length;u<g;u++)o[u]=t(l?c?Jt(Ue(e[u])):Ue(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s)}else if(te(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];o[l]=t(e[u],u,l,s)}}else o=[];return o}const Ei=e=>e?nr(e)?zn(e):Ei(e.parent):null,an=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ei(e.parent),$root:e=>Ei(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ds(e),$forceUpdate:e=>e.f||(e.f=()=>{qi(e.update)}),$nextTick:e=>e.n||(e.n=Es.bind(e.proxy)),$watch:e=>pa.bind(e)}),li=(e,t)=>e!==ae&&!e.__isScriptSetup&&ee(e,t),Aa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:a,appContext:l}=e;if(t[0]!=="$"){const m=r[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(li(i,t))return r[t]=1,i[t];if(o!==ae&&ee(o,t))return r[t]=2,o[t];if(ee(s,t))return r[t]=3,s[t];if(n!==ae&&ee(n,t))return r[t]=4,n[t];wi&&(r[t]=0)}}const c=an[t];let u,g;if(c)return t==="$attrs"&&xe(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==ae&&ee(n,t))return r[t]=4,n[t];if(g=l.config.globalProperties,ee(g,t))return g[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return li(o,t)?(o[t]=n,!0):i!==ae&&ee(i,t)?(i[t]=n,!0):ee(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,props:s,type:r}},a){let l;return!!(n[a]||e!==ae&&a[0]!=="$"&&ee(e,a)||li(t,a)||ee(s,a)||ee(i,a)||ee(an,a)||ee(o.config.globalProperties,a)||(l=r.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function po(e){return G(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wi=!0;function La(e){const t=Ds(e),n=e.proxy,i=e.ctx;wi=!1,t.beforeCreate&&uo(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:a,provide:l,inject:c,created:u,beforeMount:g,mounted:m,beforeUpdate:y,updated:O,activated:R,deactivated:F,beforeDestroy:H,beforeUnmount:L,destroyed:j,unmounted:k,render:U,renderTracked:N,renderTriggered:C,errorCaptured:oe,serverPrefetch:De,expose:Je,inheritAttrs:mt,components:Et,directives:Ve,filters:Kt}=t;if(c&&Ca(c,i,null),r)for(const ne in r){const z=r[ne];K(z)&&(i[ne]=z.bind(n))}if(o){const ne=o.call(n,n);te(ne)&&(e.data=Gn(ne))}if(wi=!0,s)for(const ne in s){const z=s[ne],nt=K(z)?z.bind(n,n):K(z.get)?z.get.bind(n,n):et,yt=!K(z)&&K(z.set)?z.set.bind(n):et,Ge=pe({get:nt,set:yt});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Le=>Ge.value=Le})}if(a)for(const ne in a)Ps(a[ne],i,n,ne);if(l){const ne=K(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(z=>{An(z,ne[z])})}u&&uo(u,e,"c");function ye(ne,z){G(z)?z.forEach(nt=>ne(nt.bind(n))):z&&ne(z.bind(n))}if(ye(ya,g),ye(Os,m),ye(ha,y),ye(va,O),ye(ga,R),ye(fa,F),ye(Ea,oe),ye(Sa,N),ye(xa,C),ye(js,L),ye(Ns,k),ye(ba,De),G(Je))if(Je.length){const ne=e.exposed||(e.exposed={});Je.forEach(z=>{Object.defineProperty(ne,z,{get:()=>n[z],set:nt=>n[z]=nt,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===et&&(e.render=U),mt!=null&&(e.inheritAttrs=mt),Et&&(e.components=Et),Ve&&(e.directives=Ve),De&&Ms(e)}function Ca(e,t,n=et){G(e)&&(e=Ti(e));for(const i in e){const o=e[i];let s;te(o)?"default"in o?s=He(o.from||i,o.default,!0):s=He(o.from||i):s=He(o),Ee(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function uo(e,t,n){qe(G(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ps(e,t,n,i){let o=i.includes(".")?Cs(n,i):()=>n[i];if(de(e)){const s=t[e];K(s)&&on(o,s)}else if(K(e))on(o,e.bind(n));else if(te(e))if(G(e))e.forEach(s=>Ps(s,t,n,i));else{const s=K(e.handler)?e.handler.bind(n):t[e.handler];K(s)&&on(o,s,e)}}function Ds(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!n&&!i?l=t:(l={},o.length&&o.forEach(c=>jn(l,c,r,!0)),jn(l,t,r)),te(t)&&s.set(t,l),l}function jn(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&jn(e,s,n,!0),o&&o.forEach(r=>jn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const a=_a[r]||n&&n[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const _a={data:go,props:fo,emits:fo,methods:Xt,computed:Xt,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Xt,directives:Xt,watch:Ma,provide:go,inject:Ia};function go(e,t){return t?e?function(){return be(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Ia(e,t){return Xt(Ti(e),Ti(t))}function Ti(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Xt(e,t){return e?be(Object.create(null),e,t):t}function fo(e,t){return e?G(e)&&G(t)?[...new Set([...e,...t])]:be(Object.create(null),po(e),po(t??{})):t}function Ma(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const i in t)n[i]=we(e[i],t[i]);return n}function Bs(){return{app:null,config:{isNativeTag:Qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ka=0;function Oa(e,t){return function(i,o=null){K(i)||(i=be({},i)),o!=null&&!te(o)&&(o=null);const s=Bs(),r=new WeakSet,a=[];let l=!1;const c=s.app={_uid:ka++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:dl,get config(){return s.config},set config(u){},use(u,...g){return r.has(u)||(u&&K(u.install)?(r.add(u),u.install(c,...g)):K(u)&&(r.add(u),u(c,...g))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,g){return g?(s.components[u]=g,c):s.components[u]},directive(u,g){return g?(s.directives[u]=g,c):s.directives[u]},mount(u,g,m){if(!l){const y=c._ceVNode||$(i,o);return y.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(y,u,m),l=!0,c._container=u,u.__vue_app__=c,zn(y.component)}},onUnmount(u){a.push(u)},unmount(){l&&(qe(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,g){return s.provides[u]=g,c},runWithContext(u){const g=qt;qt=c;try{return u()}finally{qt=g}}};return c}}let qt=null;const ja=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ae(t)}Modifiers`]||e[`${kt(t)}Modifiers`];function Na(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ae;let o=n;const s=t.startsWith("update:"),r=s&&ja(i,t.slice(7));r&&(r.trim&&(o=n.map(u=>de(u)?u.trim():u)),r.number&&(o=o.map(Tr)));let a,l=i[a=ni(t)]||i[a=ni(Ae(t))];!l&&s&&(l=i[a=ni(kt(t))]),l&&qe(l,e,6,o);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,qe(c,e,6,o)}}const Pa=new WeakMap;function Hs(e,t,n=!1){const i=n?Pa:t.emitsCache,o=i.get(e);if(o!==void 0)return o;const s=e.emits;let r={},a=!1;if(!K(e)){const l=c=>{const u=Hs(c,t,!0);u&&(a=!0,be(r,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(te(e)&&i.set(e,null),null):(G(s)?s.forEach(l=>r[l]=null):be(r,s),te(e)&&i.set(e,r),r)}function $n(e,t){return!e||!Hn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ee(e,t[0].toLowerCase()+t.slice(1))||ee(e,kt(t))||ee(e,t))}function mo(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:a,emit:l,render:c,renderCache:u,props:g,data:m,setupState:y,ctx:O,inheritAttrs:R}=e,F=kn(e);let H,L;try{if(n.shapeFlag&4){const k=o||i,U=k;H=Xe(c.call(U,k,u,g,y,m,O)),L=a}else{const k=t;H=Xe(k.length>1?k(g,{attrs:a,slots:r,emit:l}):k(g,null)),L=t.props?a:Da(a)}}catch(k){It.length=0,Wn(k,e,1),H=$(gt)}let j=H;if(L&&R!==!1){const k=Object.keys(L),{shapeFlag:U}=j;k.length&&U&7&&(s&&k.some(Un)&&(L=Ba(L,s)),j=Vt(j,L,!1,!0))}if(n.dirs&&(j=Vt(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition){const k=Kn(j.type)&&_s(j)||j;Fi(k,n.transition)}return H=j,kn(F),H}const Da=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},Ba=(e,t)=>{const n={};for(const i in e)(!Un(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Ha(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?yo(i,r,c):!!r;if(l&8){const u=t.dynamicProps;for(let g=0;g<u.length;g++){const m=u[g];if(Us(r,i,m)&&!$n(c,m))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?yo(i,r,c):!0:!!r;return!1}function yo(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(Us(t,e,s)&&!$n(n,s))return!0}return!1}function Us(e,t,n){const i=e[n],o=t[n];return n==="style"&&te(i)&&te(o)?!Ft(i,o):i!==o}function Ua({vnode:e,parent:t,suspense:n},i){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=i,e=o),o===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const qs={},Fs=()=>Object.create(qs),Js=e=>Object.getPrototypeOf(e)===qs;function qa(e,t,n,i=!1){const o={},s=Fs();e.propsDefaults=Object.create(null),Vs(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:vs(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Fa(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,a=Z(o),[l]=e.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let g=0;g<u.length;g++){let m=u[g];if($n(e.emitsOptions,m))continue;const y=t[m];if(l)if(ee(s,m))y!==s[m]&&(s[m]=y,c=!0);else{const O=Ae(m);o[O]=Ri(l,a,O,y,e,!1)}else y!==s[m]&&(s[m]=y,c=!0)}}}else{Vs(e,t,o,s)&&(c=!0);let u;for(const g in a)(!t||!ee(t,g)&&((u=kt(g))===g||!ee(t,u)))&&(l?n&&(n[g]!==void 0||n[u]!==void 0)&&(o[g]=Ri(l,a,g,void 0,e,!0)):delete o[g]);if(s!==a)for(const g in s)(!t||!ee(t,g))&&(delete s[g],c=!0)}c&&lt(e.attrs,"set","")}function Vs(e,t,n,i){const[o,s]=e.propsOptions;let r=!1,a;if(t)for(let l in t){if(en(l))continue;const c=t[l];let u;o&&ee(o,u=Ae(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:$n(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,r=!0)}if(s){const l=Z(n),c=a||ae;for(let u=0;u<s.length;u++){const g=s[u];n[g]=Ri(o,l,g,c[g],e,!ee(c,g))}}return r}function Ri(e,t,n,i,o,s){const r=e[n];if(r!=null){const a=ee(r,"default");if(a&&i===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&K(l)){const{propsDefaults:c}=o;if(n in c)i=c[n];else{const u=xn(o);i=c[n]=l.call(null,t),u()}}else i=l;o.ce&&o.ce._setProp(n,i)}r[0]&&(s&&!a?i=!1:r[1]&&(i===""||i===kt(n))&&(i=!0))}return i}const Ja=new WeakMap;function Gs(e,t,n=!1){const i=n?Ja:t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},a=[];let l=!1;if(!K(e)){const u=g=>{l=!0;const[m,y]=Gs(g,t,!0);be(r,m),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return te(e)&&i.set(e,Ht),Ht;if(G(s))for(let u=0;u<s.length;u++){const g=Ae(s[u]);ho(g)&&(r[g]=ae)}else if(s)for(const u in s){const g=Ae(u);if(ho(g)){const m=s[u],y=r[g]=G(m)||K(m)?{type:m}:be({},m),O=y.type;let R=!1,F=!0;if(G(O))for(let H=0;H<O.length;++H){const L=O[H],j=K(L)&&L.name;if(j==="Boolean"){R=!0;break}else j==="String"&&(F=!1)}else R=K(O)&&O.name==="Boolean";y[0]=R,y[1]=F,(R||ee(y,"default"))&&a.push(g)}}const c=[r,a];return te(e)&&i.set(e,c),c}function ho(e){return e[0]!=="$"&&!en(e)}const Vi=e=>e==="_"||e==="_ctx"||e==="$stable",Gi=e=>G(e)?e.map(Xe):[Xe(e)],Va=(e,t,n)=>{if(t._n)return t;const i=fe((...o)=>Gi(t(...o)),n);return i._c=!1,i},Ws=(e,t,n)=>{const i=e._ctx;for(const o in e){if(Vi(o))continue;const s=e[o];if(K(s))t[o]=Va(o,s,i);else if(s!=null){const r=Gi(s);t[o]=()=>r}}},Ks=(e,t)=>{const n=Gi(t);e.slots.default=()=>n},Ys=(e,t,n)=>{for(const i in t)(n||!Vi(i))&&(e[i]=t[i])},Ga=(e,t,n)=>{const i=e.slots=Fs();if(e.vnode.shapeFlag&32){const o=t._;o?(Ys(i,t,n),n&&es(i,"_",o,!0)):Ws(t,i)}else t&&Ks(e,t)},Wa=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=ae;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Ys(o,t,n):(s=!t.$stable,Ws(t,o)),r=t}else t&&(Ks(e,t),r={default:1});if(s)for(const a in o)!Vi(a)&&r[a]==null&&delete o[a]},Ce=za;function Ka(e){return Ya(e)}function Ya(e,t){const n=Jn();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:a,createComment:l,setText:c,setElementText:u,parentNode:g,nextSibling:m,setScopeId:y=et,insertStaticContent:O}=e,R=(p,d,f,v=null,x=null,h=null,A=void 0,T=null,w=!!d.dynamicChildren)=>{if(p===d)return;p&&!Qt(p,d)&&(v=b(p),Le(p,x,h,!0),p=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:S,ref:B,shapeFlag:I}=d;switch(S){case Qn:F(p,d,f,v);break;case gt:H(p,d,f,v);break;case Ln:p==null&&L(d,f,v,A);break;case ce:Et(p,d,f,v,x,h,A,T,w);break;default:I&1?U(p,d,f,v,x,h,A,T,w):I&6?Ve(p,d,f,v,x,h,A,T,w):(I&64||I&128)&&S.process(p,d,f,v,x,h,A,T,w,P)}B!=null&&x?sn(B,p&&p.ref,h,d||p,!d):B==null&&p&&p.ref!=null&&sn(p.ref,null,h,p,!0)},F=(p,d,f,v)=>{if(p==null)i(d.el=a(d.children),f,v);else{const x=d.el=p.el;d.children!==p.children&&c(x,d.children)}},H=(p,d,f,v)=>{p==null?i(d.el=l(d.children||""),f,v):d.el=p.el},L=(p,d,f,v)=>{[p.el,p.anchor]=O(p.children,d,f,v,p.el,p.anchor)},j=({el:p,anchor:d},f,v)=>{let x;for(;p&&p!==d;)x=m(p),i(p,f,v),p=x;i(d,f,v)},k=({el:p,anchor:d})=>{let f;for(;p&&p!==d;)f=m(p),o(p),p=f;o(d)},U=(p,d,f,v,x,h,A,T,w)=>{if(d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),p==null)N(d,f,v,x,h,A,T,w);else{const S=p.el&&p.el._isVueCE?p.el:null;try{S&&S._beginPatch(),De(p,d,x,h,A,T,w)}finally{S&&S._endPatch()}}},N=(p,d,f,v,x,h,A,T)=>{let w,S;const{props:B,shapeFlag:I,transition:D,dirs:J}=p;if(w=p.el=r(p.type,h,B&&B.is,B),I&8?u(w,p.children):I&16&&oe(p.children,w,null,v,x,ci(p,h),A,T),J&&Tt(p,null,v,"created"),C(w,p,p.scopeId,A,v),B){for(const se in B)se!=="value"&&!en(se)&&s(w,se,null,B[se],h,v);"value"in B&&s(w,"value",null,B.value,h),(S=B.onVnodeBeforeMount)&&$e(S,v,p)}J&&Tt(p,null,v,"beforeMount");const Q=$a(x,D);Q&&D.beforeEnter(w),i(w,d,f),((S=B&&B.onVnodeMounted)||Q||J)&&Ce(()=>{try{S&&$e(S,v,p),Q&&D.enter(w),J&&Tt(p,null,v,"mounted")}finally{}},x)},C=(p,d,f,v,x)=>{if(f&&y(p,f),v)for(let h=0;h<v.length;h++)y(p,v[h]);if(x){let h=x.subTree;if(d===h||Xs(h.type)&&(h.ssContent===d||h.ssFallback===d)){const A=x.vnode;C(p,A,A.scopeId,A.slotScopeIds,x.parent)}}},oe=(p,d,f,v,x,h,A,T,w=0)=>{for(let S=w;S<p.length;S++){const B=p[S]=T?at(p[S]):Xe(p[S]);R(null,B,d,f,v,x,h,A,T)}},De=(p,d,f,v,x,h,A)=>{const T=d.el=p.el;let{patchFlag:w,dynamicChildren:S,dirs:B}=d;w|=p.patchFlag&16;const I=p.props||ae,D=d.props||ae;let J;if(f&&Rt(f,!1),(J=D.onVnodeBeforeUpdate)&&$e(J,f,d,p),B&&Tt(d,p,f,"beforeUpdate"),f&&Rt(f,!0),S&&(!p.dynamicChildren||p.dynamicChildren.length!==S.length)&&(w=0,A=!1,S=null),(I.innerHTML&&D.innerHTML==null||I.textContent&&D.textContent==null)&&u(T,""),S?Je(p.dynamicChildren,S,T,f,v,ci(d,x),h):A||z(p,d,T,null,f,v,ci(d,x),h,!1),w>0){if(w&16)mt(T,I,D,f,x);else if(w&2&&I.class!==D.class&&s(T,"class",null,D.class,x),w&4&&s(T,"style",I.style,D.style,x),w&8){const Q=d.dynamicProps;for(let se=0;se<Q.length;se++){const ie=Q[se],ge=I[ie],he=D[ie];(he!==ge||ie==="value")&&s(T,ie,ge,he,x,f)}}w&1&&p.children!==d.children&&u(T,d.children)}else!A&&S==null&&mt(T,I,D,f,x);((J=D.onVnodeUpdated)||B)&&Ce(()=>{J&&$e(J,f,d,p),B&&Tt(d,p,f,"updated")},v)},Je=(p,d,f,v,x,h,A)=>{for(let T=0;T<d.length;T++){const w=p[T],S=d[T],B=w.el&&(w.type===ce||!Qt(w,S)||w.shapeFlag&198)?g(w.el):f;R(w,S,B,null,v,x,h,A,!0)}},mt=(p,d,f,v,x)=>{if(d!==f){if(d!==ae)for(const h in d)!en(h)&&!(h in f)&&s(p,h,d[h],null,x,v);for(const h in f){if(en(h))continue;const A=f[h],T=d[h];A!==T&&h!=="value"&&s(p,h,T,A,x,v)}"value"in f&&s(p,"value",d.value,f.value,x)}},Et=(p,d,f,v,x,h,A,T,w)=>{const S=d.el=p?p.el:a(""),B=d.anchor=p?p.anchor:a("");let{patchFlag:I,dynamicChildren:D,slotScopeIds:J}=d;J&&(T=T?T.concat(J):J),p==null?(i(S,f,v),i(B,f,v),oe(d.children||[],f,B,x,h,A,T,w)):I>0&&I&64&&D&&p.dynamicChildren&&p.dynamicChildren.length===D.length?(Je(p.dynamicChildren,D,f,x,h,A,T),(d.key!=null||x&&d===x.subTree)&&$s(p,d,!0)):z(p,d,f,B,x,h,A,T,w)},Ve=(p,d,f,v,x,h,A,T,w)=>{d.slotScopeIds=T,p==null?d.shapeFlag&512?x.ctx.activate(d,f,v,A,w):Kt(d,f,v,x,h,A,w):Ot(p,d,w)},Kt=(p,d,f,v,x,h,A)=>{const T=p.component=ol(p,v,x);if(Ji(p)&&(T.ctx.renderer=P),rl(T,!1,A),T.asyncDep){if(x&&x.registerDep(T,ye,A),!p.el){const w=T.subTree=$(gt);H(null,w,d,f),p.placeholder=w.el}}else ye(T,p,d,f,x,h,A)},Ot=(p,d,f)=>{const v=d.component=p.component;if(Ha(p,d,f))if(v.asyncDep&&!v.asyncResolved){ne(v,d,f);return}else v.next=d,v.update();else d.el=p.el,v.vnode=d},ye=(p,d,f,v,x,h,A)=>{const T=()=>{if(p.isMounted){let{next:I,bu:D,u:J,parent:Q,vnode:se}=p;{const Ke=Qs(p);if(Ke){I&&(I.el=se.el,ne(p,I,A)),Ke.asyncDep.then(()=>{Ce(()=>{p.isUnmounted||S()},x)});return}}let ie=I,ge;Rt(p,!1),I?(I.el=se.el,ne(p,I,A)):I=se,D&&Rn(D),(ge=I.props&&I.props.onVnodeBeforeUpdate)&&$e(ge,Q,I,se),Rt(p,!0);const he=mo(p),We=p.subTree;p.subTree=he,R(We,he,g(We.el),b(We),p,x,h),I.el=he.el,ie===null&&Ua(p,he.el),J&&Ce(J,x),(ge=I.props&&I.props.onVnodeUpdated)&&Ce(()=>$e(ge,Q,I,se),x)}else{let I;const{el:D,props:J}=d,{bm:Q,m:se,parent:ie,root:ge,type:he}=p,We=rn(d);Rt(p,!1),Q&&Rn(Q),!We&&(I=J&&J.onVnodeBeforeMount)&&$e(I,ie,d),Rt(p,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(he,p.parent?p.parent.type:void 0);const Ke=p.subTree=mo(p);R(null,Ke,f,v,p,x,h),d.el=Ke.el}if(se&&Ce(se,x),!We&&(I=J&&J.onVnodeMounted)){const Ke=d;Ce(()=>$e(I,ie,Ke),x)}(d.shapeFlag&256||ie&&rn(ie.vnode)&&ie.vnode.shapeFlag&256)&&p.a&&Ce(p.a,x),p.isMounted=!0,d=f=v=null}};p.scope.on();const w=p.effect=new os(T);p.scope.off();const S=p.update=w.run.bind(w),B=p.job=w.runIfDirty.bind(w);B.i=p,B.id=p.uid,w.scheduler=()=>qi(B),Rt(p,!0),S()},ne=(p,d,f)=>{d.component=p;const v=p.vnode.props;p.vnode=d,p.next=null,Fa(p,d.props,v,f),Wa(p,d.children,f),pt(),so(p),ut()},z=(p,d,f,v,x,h,A,T,w=!1)=>{const S=p&&p.children,B=p?p.shapeFlag:0,I=d.children,{patchFlag:D,shapeFlag:J}=d;if(D>0){if(D&128){yt(S,I,f,v,x,h,A,T,w);return}else if(D&256){nt(S,I,f,v,x,h,A,T,w);return}}J&8?(B&16&&Oe(S,x,h),I!==S&&u(f,I)):B&16?J&16?yt(S,I,f,v,x,h,A,T,w):Oe(S,x,h,!0):(B&8&&u(f,""),J&16&&oe(I,f,v,x,h,A,T,w))},nt=(p,d,f,v,x,h,A,T,w)=>{p=p||Ht,d=d||Ht;const S=p.length,B=d.length,I=Math.min(S,B);let D;for(D=0;D<I;D++){const J=d[D]=w?at(d[D]):Xe(d[D]);R(p[D],J,f,null,x,h,A,T,w)}S>B?Oe(p,x,h,!0,!1,I):oe(d,f,v,x,h,A,T,w,I)},yt=(p,d,f,v,x,h,A,T,w)=>{let S=0;const B=d.length;let I=p.length-1,D=B-1;for(;S<=I&&S<=D;){const J=p[S],Q=d[S]=w?at(d[S]):Xe(d[S]);if(Qt(J,Q))R(J,Q,f,null,x,h,A,T,w);else break;S++}for(;S<=I&&S<=D;){const J=p[I],Q=d[D]=w?at(d[D]):Xe(d[D]);if(Qt(J,Q))R(J,Q,f,null,x,h,A,T,w);else break;I--,D--}if(S>I){if(S<=D){const J=D+1,Q=J<B?d[J].el:v;for(;S<=D;)R(null,d[S]=w?at(d[S]):Xe(d[S]),f,Q,x,h,A,T,w),S++}}else if(S>D)for(;S<=I;)Le(p[S],x,h,!0),S++;else{const J=S,Q=S,se=new Map;for(S=Q;S<=D;S++){const Ie=d[S]=w?at(d[S]):Xe(d[S]);Ie.key!=null&&se.set(Ie.key,S)}let ie,ge=0;const he=D-Q+1;let We=!1,Ke=0;const Yt=new Array(he);for(S=0;S<he;S++)Yt[S]=0;for(S=J;S<=I;S++){const Ie=p[S];if(ge>=he){Le(Ie,x,h,!0);continue}let Ye;if(Ie.key!=null)Ye=se.get(Ie.key);else for(ie=Q;ie<=D;ie++)if(Yt[ie-Q]===0&&Qt(Ie,d[ie])){Ye=ie;break}Ye===void 0?Le(Ie,x,h,!0):(Yt[Ye-Q]=S+1,Ye>=Ke?Ke=Ye:We=!0,R(Ie,d[Ye],f,null,x,h,A,T,w),ge++)}const zi=We?Qa(Yt):Ht;for(ie=zi.length-1,S=he-1;S>=0;S--){const Ie=Q+S,Ye=d[Ie],Xi=d[Ie+1],Zi=Ie+1<B?Xi.el||zs(Xi):v;Yt[S]===0?R(null,Ye,f,Zi,x,h,A,T,w):We&&(ie<0||S!==zi[ie]?Ge(Ye,f,Zi,2):ie--)}}},Ge=(p,d,f,v,x=null)=>{const{el:h,type:A,transition:T,children:w,shapeFlag:S}=p;if(S&6){Ge(p.component.subTree,d,f,v);return}if(S&128){p.suspense.move(d,f,v);return}if(S&64){A.move(p,d,f,P);return}if(A===ce){i(h,d,f);for(let I=0;I<w.length;I++)Ge(w[I],d,f,v);i(p.anchor,d,f);return}if(A===Ln){j(p,d,f);return}if(v!==2&&S&1&&T)if(v===0)T.persisted&&!h[ai]?i(h,d,f):(T.beforeEnter(h),i(h,d,f),Ce(()=>T.enter(h),x));else{const{leave:I,delayLeave:D,afterLeave:J}=T,Q=()=>{p.ctx.isUnmounted?o(h):i(h,d,f)},se=()=>{const ie=h._isLeaving||!!h[ai];h._isLeaving&&h[ai](!0),T.persisted&&!ie?Q():I(h,()=>{Q(),J&&J()})};D?D(h,Q,se):se()}else i(h,d,f)},Le=(p,d,f,v=!1,x=!1)=>{const{type:h,props:A,ref:T,children:w,dynamicChildren:S,shapeFlag:B,patchFlag:I,dirs:D,cacheIndex:J,memo:Q}=p;if(I===-2&&(x=!1),T!=null&&(pt(),sn(T,null,f,p,!0),ut()),J!=null&&(d.renderCache[J]=void 0),B&256){d.ctx.deactivate(p);return}const se=B&1&&D,ie=!rn(p);let ge;if(ie&&(ge=A&&A.onVnodeBeforeUnmount)&&$e(ge,d,p),B&6)wt(p.component,f,v);else{if(B&128){p.suspense.unmount(f,v);return}se&&Tt(p,null,d,"beforeUnmount"),B&64?p.type.remove(p,d,f,P,v):S&&!S.hasOnce&&(h!==ce||I>0&&I&64)?Oe(S,d,f,!1,!0):(h===ce&&I&384||!x&&B&16)&&Oe(w,d,f),v&&jt(p)}const he=Q!=null&&J==null;(ie&&(ge=A&&A.onVnodeUnmounted)||se||he)&&Ce(()=>{ge&&$e(ge,d,p),se&&Tt(p,null,d,"unmounted"),he&&(p.el=null)},f)},jt=p=>{const{type:d,el:f,anchor:v,transition:x}=p;if(d===ce){Nt(f,v);return}if(d===Ln){k(p);return}const h=()=>{o(f),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(p.shapeFlag&1&&x&&!x.persisted){const{leave:A,delayLeave:T}=x,w=()=>A(f,h);T?T(p.el,h,w):w()}else h()},Nt=(p,d)=>{let f;for(;p!==d;)f=m(p),o(p),p=f;o(d)},wt=(p,d,f)=>{const{bum:v,scope:x,job:h,subTree:A,um:T,m:w,a:S}=p;vo(w),vo(S),v&&Rn(v),x.stop(),h&&(h.flags|=8,Le(A,p,d,f)),T&&Ce(T,d),Ce(()=>{p.isUnmounted=!0},d)},Oe=(p,d,f,v=!1,x=!1,h=0)=>{for(let A=h;A<p.length;A++)Le(p[A],d,f,v,x)},b=p=>{if(p.shapeFlag&6)return b(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const d=m(p.anchor||p.el),f=d&&d[ua];return f?m(f):d};let M=!1;const _=(p,d,f)=>{let v;p==null?d._vnode&&(Le(d._vnode,null,null,!0),v=d._vnode.component):R(d._vnode||null,p,d,null,null,null,f),d._vnode=p,M||(M=!0,so(v),Ts(),M=!1)},P={p:R,um:Le,m:Ge,r:jt,mt:Kt,mc:oe,pc:z,pbc:Je,n:b,o:e};return{render:_,hydrate:void 0,createApp:Oa(_)}}function ci({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function $a(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $s(e,t,n=!1){const i=e.children,o=t.children;if(G(i)&&G(o))for(let s=0;s<i.length;s++){const r=i[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=at(o[s]),a.el=r.el),!n&&a.patchFlag!==-2&&$s(r,a)),a.type===Qn&&(a.patchFlag===-1&&(a=o[s]=at(a)),a.el=r.el),a.type===gt&&!a.el&&(a.el=r.el)}}function Qa(e){const t=e.slice(),n=[0];let i,o,s,r,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(o=n[n.length-1],e[o]<c){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)a=s+r>>1,e[n[a]]<c?s=a+1:r=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function Qs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qs(t)}function vo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function zs(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?zs(t.subTree):null}const Xs=e=>e.__isSuspense;function za(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):aa(e)}const ce=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),gt=Symbol.for("v-cmt"),Ln=Symbol.for("v-stc"),It=[];let ke=null;function q(e=!1){It.push(ke=e?null:[])}function Zs(){It.pop(),ke=It[It.length-1]||null}let gn=1;function Nn(e,t=!1){gn+=e,e<0&&ke&&t&&(ke.hasOnce=!0)}function er(e){return e.dynamicChildren=gn>0?ke||Ht:null,Zs(),gn>0&&ke&&ke.push(e),e}function W(e,t,n,i,o,s){return er(E(e,t,n,i,o,s,!0))}function Wi(e,t,n,i,o){return er($(e,t,n,i,o,!0))}function Pn(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const tr=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||Ee(e)||K(e)?{i:Me,r:e,k:t,f:!!n}:e:null);function E(e,t=null,n=null,i=0,o=null,s=e===ce?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tr(t),ref:t&&Cn(t),scopeId:As,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Me};return a?(Dn(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),gn>0&&!r&&ke&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ke.push(l),l}const $=Xa;function Xa(e,t=null,n=null,i=0,o=null,s=!1){if((!e||e===Ta)&&(e=gt),Pn(e)){const a=Vt(e,t,!0);return n&&Dn(a,n),gn>0&&!s&&ke&&(a.shapeFlag&6?ke[ke.indexOf(e)]=a:ke.push(a)),a.patchFlag=-2,a}if(ul(e)&&(e=e.__vccOpts),t){t=Za(t);let{class:a,style:l}=t;a&&!de(a)&&(t.class=je(a)),te(l)&&(Ui(l)&&!G(l)&&(l=be({},l)),t.style=vn(l))}const r=de(e)?1:Xs(e)?128:Kn(e)?64:te(e)?4:K(e)?2:0;return E(e,t,n,i,o,r,s,!0)}function Za(e){return e?Ui(e)||Js(e)?be({},e):e:null}function Vt(e,t,n=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:a,transition:l}=e,c=t?tl(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&tr(c),ref:t&&t.ref?n&&s?G(s)?s.concat(Cn(t)):[s,Cn(t)]:Cn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Fi(u,l.clone(u)),u}function re(e=" ",t=0){return $(Qn,null,e,t)}function el(e,t){const n=$(Ln,null,e);return n.staticCount=t,n}function Mt(e="",t=!1){return t?(q(),Wi(gt,null,e)):$(gt,null,e)}function Xe(e){return e==null||typeof e=="boolean"?$(gt):G(e)?$(ce,null,e.slice()):Pn(e)?at(e):$(Qn,null,String(e))}function at(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function Dn(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),Dn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Js(t)?t._ctx=Me:o===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(K(t)){if(i&65){Dn(e,{default:t});return}t={default:t,_ctx:Me},n=32}else t=String(t),i&64?(n=16,t=[re(t)]):n=8;e.children=t,e.shapeFlag|=n}function tl(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=je([t.class,i.class]));else if(o==="style")t.style=vn([t.style,i.style]);else if(Hn(o)){const s=t[o],r=i[o];r&&s!==r&&!(G(s)&&s.includes(r))?t[o]=s?[].concat(s,r):r:r==null&&s==null&&!Un(o)&&(t[o]=r)}else o!==""&&(t[o]=i[o])}return t}function $e(e,t,n,i=null){qe(e,t,7,[n,i])}const nl=Bs();let il=0;function ol(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||nl,s={uid:il++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gs(i,o),emitsOptions:Hs(i,o),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:i.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Na.bind(null,s),e.ce&&e.ce(s),s}let Se=null;const sl=()=>Se||Me;let Bn,fn;{const e=Jn(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};Bn=t("__VUE_INSTANCE_SETTERS__",n=>Se=n),fn=t("__VUE_SSR_SETTERS__",n=>mn=n)}const xn=e=>{const t=Se;return Bn(e),e.scope.on(),()=>{e.scope.off(),Bn(t)}},bo=()=>{Se&&Se.scope.off(),Bn(null)};function nr(e){return e.vnode.shapeFlag&4}let mn=!1;function rl(e,t=!1,n=!1){t&&fn(t);const{props:i,children:o}=e.vnode,s=nr(e);qa(e,i,s,t),Ga(e,o,n||t);const r=s?al(e,t):void 0;return t&&fn(!1),r}function al(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Aa);const{setup:i}=n;if(i){pt();const o=e.setupContext=i.length>1?cl(e):null,s=xn(e),r=bn(i,e,0,[e.props,o]),a=zo(r);if(ut(),s(),(a||e.sp)&&!rn(e)&&Ms(e),a){if(r.then(bo,bo),t)return r.then(l=>{fn(!0);try{xo(e,l,t)}finally{fn(!1)}}).catch(l=>{Wn(l,e,0)});e.asyncDep=r}else xo(e,r)}else ir(e)}function xo(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=xs(t)),ir(e)}function ir(e,t,n){const i=e.type;e.render||(e.render=i.render||et);{const o=xn(e);pt();try{La(e)}finally{ut(),o()}}}const ll={get(e,t){return xe(e,"get",""),e[t]}};function cl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ll),slots:e.slots,emit:e.emit,expose:t}}function zn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xs(zr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in an)return an[n](e)},has(t,n){return n in t||n in an}})):e.proxy}function pl(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function ul(e){return K(e)&&"__vccOpts"in e}const pe=(e,t)=>na(e,t,mn);function or(e,t,n){try{Nn(-1);const i=arguments.length;return i===2?te(t)&&!G(t)?Pn(t)?$(e,null,[t]):$(e,t):$(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Pn(n)&&(n=[n]),$(e,t,n))}finally{Nn(1)}}const dl="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ai;const So=typeof window<"u"&&window.trustedTypes;if(So)try{Ai=So.createPolicy("vue",{createHTML:e=>e})}catch{}const sr=Ai?e=>Ai.createHTML(e):e=>e,gl="http://www.w3.org/2000/svg",fl="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,Eo=st&&st.createElement("template"),ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?st.createElementNS(gl,e):t==="mathml"?st.createElementNS(fl,e):n?st.createElement(e,{is:n}):st.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Eo.innerHTML=sr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=Eo.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yl=Symbol("_vtc");function hl(e,t,n){const i=e[yl];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const wo=Symbol("_vod"),vl=Symbol("_vsh"),bl=Symbol(""),xl=/(?:^|;)\s*display\s*:/;function Sl(e,t,n){const i=e.style,o=de(n);let s=!1;if(n&&!o){if(t)if(de(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();n[a]==null&&Zt(i,a,"")}else for(const r in t)n[r]==null&&Zt(i,r,"");for(const r in n){r==="display"&&(s=!0);const a=n[r];a!=null?wl(e,r,!de(t)&&t?t[r]:void 0,a)||Zt(i,r,a):Zt(i,r,"")}}else if(o){if(t!==n){const r=i[bl];r&&(n+=";"+r),i.cssText=n,s=xl.test(n)}}else t&&e.removeAttribute("style");wo in e&&(e[wo]=s?i.display:"",e[vl]&&(i.display="none"))}const Tn=/\s*!important$/;function Zt(e,t,n){if(G(n))n.forEach(i=>Zt(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))Tn.test(n)?e.setProperty(t,n.replace(Tn,""),"important"):e.setProperty(t,n);else{const i=El(e,t);Tn.test(n)?e.setProperty(kt(i),n.replace(Tn,""),"important"):e[i]=n}}const To=["Webkit","Moz","ms"],pi={};function El(e,t){const n=pi[t];if(n)return n;let i=Ae(t);if(i!=="filter"&&i in e)return pi[t]=i;i=Fn(i);for(let o=0;o<To.length;o++){const s=To[o]+i;if(s in e)return pi[t]=s}return t}function wl(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&de(i)&&n===i}const Ro="http://www.w3.org/1999/xlink";function Ao(e,t,n,i,o,s=Ir(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ro,t.slice(6,t.length)):e.setAttributeNS(Ro,t,n):n==null||s&&!ts(n)?e.removeAttribute(t):e.setAttribute(t,s?"":tt(n)?String(n):n)}function Lo(e,t,n,i,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?sr(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ts(n):n==null&&a==="string"?(n="",r=!0):a==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function rr(e,t,n,i){e.addEventListener(t,n,i)}function Tl(e,t,n,i){e.removeEventListener(t,n,i)}const Co=Symbol("_vei");function Rl(e,t,n,i,o=null){const s=e[Co]||(e[Co]={}),r=s[t];if(i&&r)r.value=i;else{const[a,l]=Cl(t);if(i){const c=s[t]=Ml(i,o);rr(e,a,c,l)}else r&&(Tl(e,a,r,l),s[t]=void 0)}}const Al=/(Once|Passive|Capture)$/,Ll=/^on:?(?:Once|Passive|Capture)$/;function Cl(e){let t,n;for(;(n=e.match(Al))&&!Ll.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):kt(e.slice(2)),t]}let ui=0;const _l=Promise.resolve(),Il=()=>ui||(_l.then(()=>ui=0),ui=Date.now());function Ml(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const o=n.value;if(G(o)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const r=o.slice(),a=[i];for(let l=0;l<r.length&&!i._stopped;l++){const c=r[l];c&&qe(c,t,5,a)}}else qe(o,t,5,[i])};return n.value=e,n.attached=Il(),n}const _o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,kl=(e,t,n,i,o,s)=>{const r=o==="svg";t==="class"?hl(e,i,r):t==="style"?Sl(e,n,i):Hn(t)?Un(t)||Rl(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ol(e,t,i,r))?(Lo(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ao(e,t,i,r,s,t!=="value")):e._isVueCE&&(jl(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!de(i)))?Lo(e,Ae(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Ao(e,t,i,r))};function Ol(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&_o(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return _o(t)&&de(n)?!1:t in e}function jl(e,t){const n=e._def.props;if(!n)return!1;const i=Ae(t);return Array.isArray(n)?n.some(o=>Ae(o)===i):Object.keys(n).some(o=>Ae(o)===i)}const Io=e=>{const t=e.props["onUpdate:modelValue"]||!1;return G(t)?n=>Rn(t,n):t},di=Symbol("_assign"),Mo={created(e,{value:t},n){e.checked=Ft(t,n.props.value),e[di]=Io(n),rr(e,"change",()=>{e[di](Nl(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e[di]=Io(i),t!==n&&(e.checked=Ft(t,i.props.value))}};function Nl(e){return"_value"in e?e._value:e.value}const Pl=be({patchProp:kl},ml);let ko;function Dl(){return ko||(ko=Ka(Pl))}const Bl=((...e)=>{const t=Dl().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=Ul(i);if(!o)return;const s=t._component;!K(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,Hl(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t});function Hl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ul(e){return de(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Bt=typeof document<"u";function ar(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ql(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ar(e.default)}const X=Object.assign;function gi(e,t){const n={};for(const i in t){const o=t[i];n[i]=Fe(o)?o.map(e):e(o)}return n}const ln=()=>{},Fe=Array.isArray;function Oo(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const lr=/#/g,Fl=/&/g,Jl=/\//g,Vl=/=/g,Gl=/\?/g,cr=/\+/g,Wl=/%5B/g,Kl=/%5D/g,pr=/%5E/g,Yl=/%60/g,ur=/%7B/g,$l=/%7C/g,dr=/%7D/g,Ql=/%20/g;function Ki(e){return e==null?"":encodeURI(""+e).replace($l,"|").replace(Wl,"[").replace(Kl,"]")}function zl(e){return Ki(e).replace(ur,"{").replace(dr,"}").replace(pr,"^")}function Li(e){return Ki(e).replace(cr,"%2B").replace(Ql,"+").replace(lr,"%23").replace(Fl,"%26").replace(Yl,"`").replace(ur,"{").replace(dr,"}").replace(pr,"^")}function Xl(e){return Li(e).replace(Vl,"%3D")}function Zl(e){return Ki(e).replace(lr,"%23").replace(Gl,"%3F")}function ec(e){return Zl(e).replace(Jl,"%2F")}function yn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const tc=/\/$/,nc=e=>e.replace(tc,"");function fi(e,t,n="/"){let i,o={},s="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),s=t.slice(l,a>0?a:t.length),o=e(s.slice(1))),a>=0&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=rc(i??t,n),{fullPath:i+s+r,path:i,query:o,hash:yn(r)}}function ic(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function jo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function oc(e,t,n){const i=t.matched.length-1,o=n.matched.length-1;return i>-1&&i===o&&Gt(t.matched[i],n.matched[o])&&gr(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function gr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!sc(e[n],t[n]))return!1;return!0}function sc(e,t){return Fe(e)?No(e,t):Fe(t)?No(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function No(e,t){return Fe(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function rc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),o=i[i.length-1];(o===".."||o===".")&&i.push("");let s=n.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r).join("/")}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ci=(function(e){return e.pop="pop",e.push="push",e})({}),mi=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function ac(e){if(!e)if(Bt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nc(e)}const lc=/^[^#]+#/;function cc(e,t){return e.replace(lc,"#")+t}function pc(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Xn=()=>({left:window.scrollX,top:window.scrollY});function uc(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=pc(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Po(e,t){return(history.state?history.state.position-t:-1)+e}const _i=new Map;function dc(e,t){_i.set(e,t)}function gc(e){const t=_i.get(e);return _i.delete(e),t}function fc(e){return typeof e=="string"||e&&typeof e=="object"}function fr(e){return typeof e=="string"||typeof e=="symbol"}let ue=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const mr=Symbol("");ue.MATCHER_NOT_FOUND+"",ue.NAVIGATION_GUARD_REDIRECT+"",ue.NAVIGATION_ABORTED+"",ue.NAVIGATION_CANCELLED+"",ue.NAVIGATION_DUPLICATED+"";function Wt(e,t){return X(new Error,{type:e,[mr]:!0},t)}function ot(e,t){return e instanceof Error&&mr in e&&(t==null||!!(e.type&t))}const mc=["params","query","hash"];function yc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of mc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function hc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<n.length;++i){const o=n[i].replace(cr," "),s=o.indexOf("="),r=yn(s<0?o:o.slice(0,s)),a=s<0?null:yn(o.slice(s+1));if(r in t){let l=t[r];Fe(l)||(l=t[r]=[l]),l.push(a)}else t[r]=a}return t}function Do(e){let t="";for(let n in e){const i=e[n];if(n=Xl(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fe(i)?i.map(o=>o&&Li(o)):[i&&Li(i)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function vc(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Fe(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return t}const bc=Symbol(""),Bo=Symbol(""),Zn=Symbol(""),Yi=Symbol(""),Ii=Symbol("");function zt(){let e=[];function t(i){return e.push(i),()=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function xt(e,t,n,i,o,s=r=>r()){const r=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const c=m=>{m===!1?l(Wt(ue.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):fc(m)?l(Wt(ue.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(r&&i.enterCallbacks[o]===r&&typeof m=="function"&&r.push(m),a())},u=s(()=>e.call(i&&i.instances[o],t,n,c));let g=Promise.resolve(u);e.length<3&&(g=g.then(c)),g.catch(m=>l(m))})}function yi(e,t,n,i,o=s=>s()){const s=[];for(const r of e)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(ar(l)){const c=(l.__vccOpts||l)[t];c&&s.push(xt(c,n,i,r,a,o))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const g=ql(u)?u.default:u;r.mods[a]=u,r.components[a]=g;const m=(g.__vccOpts||g)[t];return m&&xt(m,n,i,r,a,o)()}))}}return s}function xc(e,t){const n=[],i=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let r=0;r<s;r++){const a=t.matched[r];a&&(e.matched.find(c=>Gt(c,a))?i.push(a):n.push(a));const l=e.matched[r];l&&(t.matched.find(c=>Gt(c,l))||o.push(l))}return[n,i,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Sc=()=>location.protocol+"//"+location.host;function yr(e,t){const{pathname:n,search:i,hash:o}=t,s=e.indexOf("#");if(s>-1){let r=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(r);return a[0]!=="/"&&(a="/"+a),jo(a,"")}return jo(n,e)+i+o}function Ec(e,t,n,i){let o=[],s=[],r=null;const a=({state:m})=>{const y=yr(e,location),O=n.value,R=t.value;let F=0;if(m){if(n.value=y,t.value=m,r&&r===O){r=null;return}F=R?m.position-R.position:0}else i(y);o.forEach(H=>{H(n.value,O,{delta:F,type:Ci.pop,direction:F?F>0?mi.forward:mi.back:mi.unknown})})};function l(){r=n.value}function c(m){o.push(m);const y=()=>{const O=o.indexOf(m);O>-1&&o.splice(O,1)};return s.push(y),y}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(X({},m.state,{scroll:Xn()}),"")}}function g(){for(const m of s)m();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:g}}function Ho(e,t,n,i=!1,o=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:o?Xn():null}}function wc(e){const{history:t,location:n}=window,i={value:yr(e,n)},o={value:t.state};o.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const g=e.indexOf("#"),m=g>-1?(n.host&&document.querySelector("base")?e:e.slice(g))+l:Sc()+e+l;try{t[u?"replaceState":"pushState"](c,"",m),o.value=c}catch(y){console.error(y),n[u?"replace":"assign"](m)}}function r(l,c){s(l,X({},t.state,Ho(o.value.back,l,o.value.forward,!0),c,{position:o.value.position}),!0),i.value=l}function a(l,c){const u=X({},o.value,t.state,{forward:l,scroll:Xn()});s(u.current,u,!0),s(l,X({},Ho(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:o,push:a,replace:r}}function Tc(e){e=ac(e);const t=wc(e),n=Ec(e,t.state,t.location,t.replace);function i(s,r=!0){r||n.pauseListeners(),history.go(s)}const o=X({location:"",base:e,go:i,createHref:cc.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Rc(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Tc(e)}let Lt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var me=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(me||{});const Ac={type:Lt.Static,value:""},Lc=/[a-zA-Z0-9_]/;function Cc(e){if(!e)return[[]];if(e==="/")return[[Ac]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${c}": ${y}`)}let n=me.Static,i=n;const o=[];let s;function r(){s&&o.push(s),s=[]}let a=0,l,c="",u="";function g(){c&&(n===me.Static?s.push({type:Lt.Static,value:c}):n===me.Param||n===me.ParamRegExp||n===me.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Lt.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==me.ParamRegExp){i=n,n=me.EscapeNext;continue}switch(n){case me.Static:l==="/"?(c&&g(),r()):l===":"?(g(),n=me.Param):m();break;case me.EscapeNext:m(),n=i;break;case me.Param:l==="("?n=me.ParamRegExp:Lc.test(l)?m():(g(),n=me.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case me.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=me.ParamRegExpEnd:u+=l;break;case me.ParamRegExpEnd:g(),n=me.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===me.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),g(),r(),o}const Uo="[^/]+?",_c={sensitive:!1,strict:!1,start:!0,end:!0};var Te=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Te||{});const Ic=/[.+*?^${}()[\]/\\]/g;function Mc(e,t){const n=X({},_c,t),i=[];let o=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[Te.Root];n.strict&&!c.length&&(o+="/");for(let g=0;g<c.length;g++){const m=c[g];let y=Te.Segment+(n.sensitive?Te.BonusCaseSensitive:0);if(m.type===Lt.Static)g||(o+="/"),o+=m.value.replace(Ic,"\\$&"),y+=Te.Static;else if(m.type===Lt.Param){const{value:O,repeatable:R,optional:F,regexp:H}=m;s.push({name:O,repeatable:R,optional:F});const L=H||Uo;if(L!==Uo){y+=Te.BonusCustomRegExp;try{`${L}`}catch(k){throw new Error(`Invalid custom RegExp for param "${O}" (${L}): `+k.message)}}let j=R?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;g||(j=F&&c.length<2?`(?:/${j})`:"/"+j),F&&(j+="?"),o+=j,y+=Te.Dynamic,F&&(y+=Te.BonusOptional),R&&(y+=Te.BonusRepeatable),L===".*"&&(y+=Te.BonusWildcard)}u.push(y)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Te.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const r=new RegExp(o,n.sensitive?"":"i");function a(c){const u=c.match(r),g={};if(!u)return null;for(let m=1;m<u.length;m++){const y=u[m]||"",O=s[m-1];g[O.name]=y&&O.repeatable?y.split("/"):y}return g}function l(c){let u="",g=!1;for(const m of e){(!g||!u.endsWith("/"))&&(u+="/"),g=!1;for(const y of m)if(y.type===Lt.Static)u+=y.value;else if(y.type===Lt.Param){const{value:O,repeatable:R,optional:F}=y,H=O in c?c[O]:"";if(Fe(H)&&!R)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const L=Fe(H)?H.join("/"):H;if(!L)if(F)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):g=!0);else throw new Error(`Missing required param "${O}"`);u+=L}}return u||"/"}return{re:r,score:i,keys:s,parse:a,stringify:l}}function kc(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===Te.Static+Te.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Te.Static+Te.Segment?1:-1:0}function hr(e,t){let n=0;const i=e.score,o=t.score;for(;n<i.length&&n<o.length;){const s=kc(i[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-i.length)===1){if(qo(i))return 1;if(qo(o))return-1}return o.length-i.length}function qo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Oc={strict:!1,end:!0,sensitive:!1};function jc(e,t,n){const i=Mc(Cc(e.path),n),o=X(i,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Nc(e,t){const n=[],i=new Map;t=Oo(Oc,t);function o(g){return i.get(g)}function s(g,m,y){const O=!y,R=Jo(g);R.aliasOf=y&&y.record;const F=Oo(t,g),H=[R];if("alias"in g){const k=typeof g.alias=="string"?[g.alias]:g.alias;for(const U of k)H.push(Jo(X({},R,{components:y?y.record.components:R.components,path:U,aliasOf:y?y.record:R})))}let L,j;for(const k of H){const{path:U}=k;if(m&&U[0]!=="/"){const N=m.record.path,C=N[N.length-1]==="/"?"":"/";k.path=m.record.path+(U&&C+U)}if(L=jc(k,m,F),y?y.alias.push(L):(j=j||L,j!==L&&j.alias.push(L),O&&g.name&&!Vo(L)&&r(g.name)),vr(L)&&l(L),R.children){const N=R.children;for(let C=0;C<N.length;C++)s(N[C],L,y&&y.children[C])}y=y||L}return j?()=>{r(j)}:ln}function r(g){if(fr(g)){const m=i.get(g);m&&(i.delete(g),n.splice(n.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=n.indexOf(g);m>-1&&(n.splice(m,1),g.record.name&&i.delete(g.record.name),g.children.forEach(r),g.alias.forEach(r))}}function a(){return n}function l(g){const m=Bc(g,n);n.splice(m,0,g),g.record.name&&!Vo(g)&&i.set(g.record.name,g)}function c(g,m){let y,O={},R,F;if("name"in g&&g.name){if(y=i.get(g.name),!y)throw Wt(ue.MATCHER_NOT_FOUND,{location:g});F=y.record.name,O=X(Fo(m.params,y.keys.filter(j=>!j.optional).concat(y.parent?y.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),g.params&&Fo(g.params,y.keys.map(j=>j.name))),R=y.stringify(O)}else if(g.path!=null)R=g.path,y=n.find(j=>j.re.test(R)),y&&(O=y.parse(R),F=y.record.name);else{if(y=m.name?i.get(m.name):n.find(j=>j.re.test(m.path)),!y)throw Wt(ue.MATCHER_NOT_FOUND,{location:g,currentLocation:m});F=y.record.name,O=X({},m.params,g.params),R=y.stringify(O)}const H=[];let L=y;for(;L;)H.unshift(L.record),L=L.parent;return{name:F,path:R,params:O,matched:H,meta:Dc(H)}}e.forEach(g=>s(g));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:r,clearRoutes:u,getRoutes:a,getRecordMatcher:o}}function Fo(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Jo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Pc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function Vo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dc(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Bc(e,t){let n=0,i=t.length;for(;n!==i;){const s=n+i>>1;hr(e,t[s])<0?i=s:n=s+1}const o=Hc(e);return o&&(i=t.lastIndexOf(o,i-1)),i}function Hc(e){let t=e;for(;t=t.parent;)if(vr(t)&&hr(e,t)===0)return t}function vr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Go(e){const t=He(Zn),n=He(Yi),i=pe(()=>{const l=_e(e.to);return t.resolve(l)}),o=pe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],g=n.matched;if(!u||!g.length)return-1;const m=g.findIndex(Gt.bind(null,u));if(m>-1)return m;const y=Wo(l[c-2]);return c>1&&Wo(u)===y&&g[g.length-1].path!==y?g.findIndex(Gt.bind(null,l[c-2])):m}),s=pe(()=>o.value>-1&&Vc(n.params,i.value.params)),r=pe(()=>o.value>-1&&o.value===n.matched.length-1&&gr(n.params,i.value.params));function a(l={}){if(Jc(l)){const c=t[_e(e.replace)?"replace":"push"](_e(e.to)).catch(ln);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:pe(()=>i.value.href),isActive:s,isExactActive:r,navigate:a}}function Uc(e){return e.length===1?e[0]:e}const qc=Is({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Go,setup(e,{slots:t}){const n=Gn(Go(e)),{options:i}=He(Zn),o=pe(()=>({[Ko(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ko(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&Uc(t.default(n));return e.custom?s:or("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Fc=qc;function Jc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Vc(e,t){for(const n in t){const i=t[n],o=e[n];if(typeof i=="string"){if(i!==o)return!1}else if(!Fe(o)||o.length!==i.length||i.some((s,r)=>s.valueOf()!==o[r].valueOf()))return!1}return!0}function Wo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ko=(e,t,n)=>e??t??n,Gc=Is({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=He(Ii),o=pe(()=>e.route||i.value),s=He(Bo,0),r=pe(()=>{let c=_e(s);const{matched:u}=o.value;let g;for(;(g=u[c])&&!g.components;)c++;return c}),a=pe(()=>o.value.matched[r.value]);An(Bo,pe(()=>r.value+1)),An(bc,a),An(Ii,o);const l=rt();return on(()=>[l.value,a.value,e.name],([c,u,g],[m,y,O])=>{u&&(u.instances[g]=c,y&&y!==u&&c&&c===m&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),c&&u&&(!y||!Gt(u,y)||!m)&&(u.enterCallbacks[g]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,g=a.value,m=g&&g.components[u];if(!m)return Yo(n.default,{Component:m,route:c});const y=g.props[u],O=y?y===!0?c.params:typeof y=="function"?y(c):y:null,F=or(m,X({},O,t,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(g.instances[u]=null)},ref:l}));return Yo(n.default,{Component:F,route:c})||F}}});function Yo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wc=Gc;function Kc(e){const t=Nc(e.routes,e),n=e.parseQuery||hc,i=e.stringifyQuery||Do,o=e.history,s=zt(),r=zt(),a=zt(),l=Xr(ht);let c=ht;Bt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gi.bind(null,b=>""+b),g=gi.bind(null,ec),m=gi.bind(null,yn);function y(b,M){let _,P;return fr(b)?(_=t.getRecordMatcher(b),P=M):P=b,t.addRoute(P,_)}function O(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function R(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function H(b,M){if(M=X({},M||l.value),typeof b=="string"){const f=fi(n,b,M.path),v=t.resolve({path:f.path},M),x=o.createHref(f.fullPath);return X(f,v,{params:m(v.params),hash:yn(f.hash),redirectedFrom:void 0,href:x})}let _;if(b.path!=null)_=X({},b,{path:fi(n,b.path,M.path).path});else{const f=X({},b.params);for(const v in f)f[v]==null&&delete f[v];_=X({},b,{params:g(f)}),M.params=g(M.params)}const P=t.resolve(_,M),Y=b.hash||"";P.params=u(m(P.params));const p=ic(i,X({},b,{hash:zl(Y),path:P.path})),d=o.createHref(p);return X({fullPath:p,hash:Y,query:i===Do?vc(b.query):b.query||{}},P,{redirectedFrom:void 0,href:d})}function L(b){return typeof b=="string"?fi(n,b,l.value.path):X({},b)}function j(b,M){if(c!==b)return Wt(ue.NAVIGATION_CANCELLED,{from:M,to:b})}function k(b){return C(b)}function U(b){return k(X(L(b),{replace:!0}))}function N(b,M){const _=b.matched[b.matched.length-1];if(_&&_.redirect){const{redirect:P}=_;let Y=typeof P=="function"?P(b,M):P;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=L(Y):{path:Y},Y.params={}),X({query:b.query,hash:b.hash,params:Y.path!=null?{}:b.params},Y)}}function C(b,M){const _=c=H(b),P=l.value,Y=b.state,p=b.force,d=b.replace===!0,f=N(_,P);if(f)return C(X(L(f),{state:typeof f=="object"?X({},Y,f.state):Y,force:p,replace:d}),M||_);const v=_;v.redirectedFrom=M;let x;return!p&&oc(i,P,_)&&(x=Wt(ue.NAVIGATION_DUPLICATED,{to:v,from:P}),Ge(P,P,!0,!1)),(x?Promise.resolve(x):Je(v,P)).catch(h=>ot(h)?ot(h,ue.NAVIGATION_GUARD_REDIRECT)?h:yt(h):z(h,v,P)).then(h=>{if(h){if(ot(h,ue.NAVIGATION_GUARD_REDIRECT))return C(X({replace:d},L(h.to),{state:typeof h.to=="object"?X({},Y,h.to.state):Y,force:p}),M||v)}else h=Et(v,P,!0,d,Y);return mt(v,P,h),h})}function oe(b,M){const _=j(b,M);return _?Promise.reject(_):Promise.resolve()}function De(b){const M=Nt.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(b):b()}function Je(b,M){let _;const[P,Y,p]=xc(b,M);_=yi(P.reverse(),"beforeRouteLeave",b,M);for(const f of P)f.leaveGuards.forEach(v=>{_.push(xt(v,b,M))});const d=oe.bind(null,b,M);return _.push(d),Oe(_).then(()=>{_=[];for(const f of s.list())_.push(xt(f,b,M));return _.push(d),Oe(_)}).then(()=>{_=yi(Y,"beforeRouteUpdate",b,M);for(const f of Y)f.updateGuards.forEach(v=>{_.push(xt(v,b,M))});return _.push(d),Oe(_)}).then(()=>{_=[];for(const f of p)if(f.beforeEnter)if(Fe(f.beforeEnter))for(const v of f.beforeEnter)_.push(xt(v,b,M));else _.push(xt(f.beforeEnter,b,M));return _.push(d),Oe(_)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),_=yi(p,"beforeRouteEnter",b,M,De),_.push(d),Oe(_))).then(()=>{_=[];for(const f of r.list())_.push(xt(f,b,M));return _.push(d),Oe(_)}).catch(f=>ot(f,ue.NAVIGATION_CANCELLED)?f:Promise.reject(f))}function mt(b,M,_){a.list().forEach(P=>De(()=>P(b,M,_)))}function Et(b,M,_,P,Y){const p=j(b,M);if(p)return p;const d=M===ht,f=Bt?history.state:{};_&&(P||d?o.replace(b.fullPath,X({scroll:d&&f&&f.scroll},Y)):o.push(b.fullPath,Y)),l.value=b,Ge(b,M,_,d),yt()}let Ve;function Kt(){Ve||(Ve=o.listen((b,M,_)=>{if(!wt.listening)return;const P=H(b),Y=N(P,wt.currentRoute.value);if(Y){C(X(Y,{replace:!0,force:!0}),P).catch(ln);return}c=P;const p=l.value;Bt&&dc(Po(p.fullPath,_.delta),Xn()),Je(P,p).catch(d=>ot(d,ue.NAVIGATION_ABORTED|ue.NAVIGATION_CANCELLED)?d:ot(d,ue.NAVIGATION_GUARD_REDIRECT)?(C(X(L(d.to),{force:!0}),P).then(f=>{ot(f,ue.NAVIGATION_ABORTED|ue.NAVIGATION_DUPLICATED)&&!_.delta&&_.type===Ci.pop&&o.go(-1,!1)}).catch(ln),Promise.reject()):(_.delta&&o.go(-_.delta,!1),z(d,P,p))).then(d=>{d=d||Et(P,p,!1),d&&(_.delta&&!ot(d,ue.NAVIGATION_CANCELLED)?o.go(-_.delta,!1):_.type===Ci.pop&&ot(d,ue.NAVIGATION_ABORTED|ue.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),mt(P,p,d)}).catch(ln)}))}let Ot=zt(),ye=zt(),ne;function z(b,M,_){yt(b);const P=ye.list();return P.length?P.forEach(Y=>Y(b,M,_)):console.error(b),Promise.reject(b)}function nt(){return ne&&l.value!==ht?Promise.resolve():new Promise((b,M)=>{Ot.add([b,M])})}function yt(b){return ne||(ne=!b,Kt(),Ot.list().forEach(([M,_])=>b?_(b):M()),Ot.reset()),b}function Ge(b,M,_,P){const{scrollBehavior:Y}=e;if(!Bt||!Y)return Promise.resolve();const p=!_&&gc(Po(b.fullPath,0))||(P||!_)&&history.state&&history.state.scroll||null;return Es().then(()=>Y(b,M,p)).then(d=>d&&uc(d)).catch(d=>z(d,b,M))}const Le=b=>o.go(b);let jt;const Nt=new Set,wt={currentRoute:l,listening:!0,addRoute:y,removeRoute:O,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:R,resolve:H,options:e,push:k,replace:U,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:s.add,beforeResolve:r.add,afterEach:a.add,onError:ye.add,isReady:nt,install(b){b.component("RouterLink",Fc),b.component("RouterView",Wc),b.config.globalProperties.$router=wt,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(l)}),Bt&&!jt&&l.value===ht&&(jt=!0,k(o.location).catch(P=>{}));const M={};for(const P in ht)Object.defineProperty(M,P,{get:()=>l.value[P],enumerable:!0});b.provide(Zn,wt),b.provide(Yi,vs(M)),b.provide(Ii,l);const _=b.unmount;Nt.add(b),b.unmount=function(){Nt.delete(b),Nt.size<1&&(c=ht,Ve&&Ve(),Ve=null,l.value=ht,jt=!1,ne=!1),_()}}};function Oe(b){return b.reduce((M,_)=>M.then(()=>De(_)),Promise.resolve())}return wt}function br(){return He(Zn)}function ei(e){return He(Yi)}const Yc={class:"site-header"},$c={class:"header-inner"},Qc={class:"main-nav"},zc={class:"nav-drop-panel"},Xc={class:"nav-drop-panel"},Zc={class:"nav-drop-panel"},ep={class:"page-main"},tp={__name:"App",setup(e){const t=ei(),n=rt(null),i={html:"frontend",css:"frontend",js:"frontend",vue:"frontend",uniapp:"frontend",java:"backend",python:"backend",pg:"backend",git:"tools",maven:"tools"},o=pe(()=>i[t.params.id]||null);function s(l){n.value=n.value===l?null:l}function r(){n.value=null}function a(l){l.target.closest(".nav-dropdown")||(n.value=null)}return Os(()=>document.addEventListener("click",a)),js(()=>document.removeEventListener("click",a)),(l,c)=>{const u=dn("RouterLink"),g=dn("RouterView");return q(),W(ce,null,[E("header",Yc,[E("div",$c,[$(u,{to:"/",class:"logo"},{default:fe(()=>[...c[3]||(c[3]=[re("IT ",-1),E("span",null,"学习中心",-1)])]),_:1}),E("nav",Qc,[$(u,{to:"/"},{default:fe(()=>[...c[4]||(c[4]=[re("首页",-1)])]),_:1}),E("div",{class:je(["nav-dropdown",{open:n.value==="frontend",active:o.value==="frontend"}])},[E("button",{class:"nav-drop-btn",type:"button",onClick:c[0]||(c[0]=m=>s("frontend"))},[...c[5]||(c[5]=[re(" 前端开发 ",-1),E("span",{class:"caret"},"▾",-1)])]),E("div",zc,[$(u,{to:"/category/html",onClick:r},{default:fe(()=>[...c[6]||(c[6]=[re("HTML",-1)])]),_:1}),$(u,{to:"/category/css",onClick:r},{default:fe(()=>[...c[7]||(c[7]=[re("CSS",-1)])]),_:1}),$(u,{to:"/category/js",onClick:r},{default:fe(()=>[...c[8]||(c[8]=[re("JavaScript",-1)])]),_:1}),$(u,{to:"/category/vue",onClick:r},{default:fe(()=>[...c[9]||(c[9]=[re("Vue",-1)])]),_:1}),$(u,{to:"/category/uniapp",onClick:r},{default:fe(()=>[...c[10]||(c[10]=[re("小程序(uni-app)",-1)])]),_:1})])],2),E("div",{class:je(["nav-dropdown",{open:n.value==="backend",active:o.value==="backend"}])},[E("button",{class:"nav-drop-btn",type:"button",onClick:c[1]||(c[1]=m=>s("backend"))},[...c[11]||(c[11]=[re(" 后端与数据库 ",-1),E("span",{class:"caret"},"▾",-1)])]),E("div",Xc,[$(u,{to:"/category/java",onClick:r},{default:fe(()=>[...c[12]||(c[12]=[re("Java",-1)])]),_:1}),$(u,{to:"/category/springboot",onClick:r},{default:fe(()=>[...c[13]||(c[13]=[re("Spring Boot",-1)])]),_:1}),$(u,{to:"/category/python",onClick:r},{default:fe(()=>[...c[14]||(c[14]=[re("Python",-1)])]),_:1}),$(u,{to:"/category/pg",onClick:r},{default:fe(()=>[...c[15]||(c[15]=[re("PostgreSQL",-1)])]),_:1})])],2),E("div",{class:je(["nav-dropdown",{open:n.value==="tools",active:o.value==="tools"}])},[E("button",{class:"nav-drop-btn",type:"button",onClick:c[2]||(c[2]=m=>s("tools"))},[...c[16]||(c[16]=[re(" 开发工具 ",-1),E("span",{class:"caret"},"▾",-1)])]),E("div",Zc,[$(u,{to:"/category/git",onClick:r},{default:fe(()=>[...c[17]||(c[17]=[re("Git",-1)])]),_:1}),$(u,{to:"/category/maven",onClick:r},{default:fe(()=>[...c[18]||(c[18]=[re("Maven",-1)])]),_:1})])],2),$(u,{to:"/quiz"},{default:fe(()=>[...c[19]||(c[19]=[re("综合测试",-1)])]),_:1})])])]),E("main",ep,[$(g)]),c[20]||(c[20]=E("footer",{class:"site-footer"}," IT 学习中心 · 个人学习使用 · HTML / CSS / JavaScript / Vue / 小程序 / Java / Spring Boot / Python / PostgreSQL / Git / Maven ",-1))],64)}}},np={id:"html",name:"HTML",short:"H",color:"#e34f26",description:"网页的骨架：负责搭建页面的结构与内容",chapters:[{id:"html-ch1",title:"第一章 HTML 入门",lessons:[{id:"html-what-is",title:"1.1 什么是 HTML",sections:[{type:"text",content:"HTML（HyperText Markup Language，**超文本标记语言**）是用来描述网页结构的语言。你看到的每一个网页，都是由 HTML 搭建出骨架，再由 CSS 美化外观、JavaScript 添加交互的。"},{type:"text",content:"所谓「标记语言」，就是通过一堆**标签（tag）**来告诉浏览器：这里是一个标题、这里是一段文字、这里是一张图片。"},{type:"list",title:"网页三要素",items:["**HTML**：结构（骨架）—— 页面上有什么内容","**CSS**：样式（皮肤）—— 内容长什么样子","**JavaScript**：行为（大脑）—— 页面如何响应用户操作"]},{type:"code",title:"一段最简单的 HTML",lang:"html",code:`<h1>我是一个一级标题</h1>
<p>我是一个段落。</p>
<a href="https://example.com">我是一个链接</a>`},{type:"tip",content:'HTML 不是编程语言，它没有变量、判断这些概念，只负责"描述结构"，学起来非常轻松。'}]},{id:"html-first-page",title:"1.2 第一个 HTML 页面：文档结构",sections:[{type:"text",content:"每个完整的 HTML 文件都有一套固定的结构。新建一个 `index.html` 文件，输入以下内容，再用浏览器打开，就得到了你的第一个网页。"},{type:"code",title:"标准文档结构",lang:"html",code:`<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一个网页</title>
  </head>
  <body>
    <h1>你好，世界！</h1>
    <p>这是我写的第一个网页。</p>
  </body>
</html>`},{type:"table",title:"结构中各部分的作用",headers:["部分","作用"],rows:[["`<!DOCTYPE html>`","声明这是 HTML5 文档，必须放在第一行"],["`<html>`","网页的根元素，所有内容都在它里面"],["`<head>`","头部：存放页面的配置信息，用户看不到"],['`<meta charset="UTF-8">`',"声明字符编码为 UTF-8，防止中文乱码"],["`<title>`","浏览器标签页上显示的标题"],["`<body>`","主体：用户在页面上看到的所有内容都写在这里"]]},{type:"warn",content:'`<meta charset="UTF-8">` 千万不要漏写，否则中文很可能显示成乱码。'}]},{id:"html-tag-syntax",title:"1.3 标签语法：元素、属性与嵌套",sections:[{type:"text",content:"HTML 的核心语法很简单：**标签成对出现，内容夹在中间，属性写在开始标签里**。"},{type:"list",title:"三条基本规则",items:["**双标签**：`<p>内容</p>`，开始标签 + 内容 + 结束标签（结束标签多一个 `/`）","**单标签**：`<br>`、`<img>` 等没有内容的标签可以只写一个",'**属性**：写在开始标签中，格式为 `名称="值"`，多个属性用空格隔开']},{type:"code",title:"标签与属性示例",lang:"html",code:`<!-- 双标签：段落 -->
<p>这是一个段落。</p>

<!-- 带属性的标签：href 是属性名，引号内是属性值 -->
<a href="https://example.com">打开链接</a>

<!-- 单标签：换行 -->
<p>第一行<br>第二行</p>`},{type:"text",content:"标签可以**嵌套**，但必须先开始的后结束，不能交叉："},{type:"code",lang:"html",title:"正确与错误写法对比",code:`<!-- 正确：先 <p> 后 <b>，则先 </b> 后 </p> -->
<p>这是 <b>加粗文字</b>。</p>

<!-- 错误：标签交叉了 -->
<p>这是 <b>加粗文字</p></b>`},{type:"tip",content:"HTML 标签不区分大小写，但约定俗成全部使用**小写**。注释写法：`<!-- 这是注释 -->`。"}]}]},{id:"html-ch2",title:"第二章 常用文本标签",lessons:[{id:"html-heading-paragraph",title:"2.1 标题与段落",sections:[{type:"text",content:"文章需要标题来分层，需要段落来承载内容，这是网页中使用频率最高的一组标签。"},{type:"code",title:"六级标题与段落",lang:"html",code:`<h1>一级标题：页面主标题（一个页面最好只用一次）</h1>
<h2>二级标题：大的章节</h2>
<h3>三级标题：小节</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题：最小的标题</h6>

<p>这是一个段落，浏览器会自动在段落之间留出空隙。</p>
<p>这是另一个段落。段落内部想强制换行可以用 br 标签：<br>这里就换到第二行了。</p>`},{type:"list",title:"要点",items:["标题从 `h1` 到 `h6` 逐渐变小变细，**重要性递减**","`<h1>` 一般只出现一次，代表页面主题","`<p>` 是段落，段落之间自带间距；`<br>` 是强制换行；`<hr>` 是水平分隔线","不要为了「字大一点」而滥用标题，标题表达的是**层级关系**"]}]},{id:"html-format",title:"2.2 文本格式化标签",sections:[{type:"text",content:"想让某些文字突出显示，就需要格式化标签。它们能让文字加粗、倾斜、加下划线等等。"},{type:"code",title:"常用格式化标签",lang:"html",code:`<p><strong>strong：加粗，表示重要内容（推荐）</strong></p>
<p><em>em：倾斜，表示强调（推荐）</em></p>
<p><mark>mark：黄色高亮标记</mark></p>
<p><del>del：删除线，表示已删除的内容</del></p>
<p><ins>ins：下划线，表示新插入的内容</ins></p>
<p>水的化学式：H<sub>2</sub>O，上标示例：2<sup>3</sup> = 8</p>
<p><small>small：更小的字，常用于版权、备注</small></p>`},{type:"table",title:"strong 与 b 的区别",headers:["标签","效果","语义"],rows:[["`<strong>`","加粗","表示内容**重要**，搜索引擎能理解"],["`<b>`","加粗","纯粹视觉上加粗，无特殊含义"],["`<em>`","倾斜","表示**强调**语气"],["`<i>`","倾斜","纯粹视觉上倾斜，常用于术语、外语"]]},{type:"tip",content:"日常开发中优先使用 `strong` 和 `em`，因为它们带有语义，对搜索引擎优化（SEO）和无障碍访问更友好。"}]},{id:"html-entities",title:"2.3 特殊字符（实体字符）",sections:[{type:"text",content:"有些字符在 HTML 中有特殊用途（比如 `<`、`>` 是标签的一部分），想原样显示它们，就要用**实体字符**——以 `&` 开头、`;` 结尾的特殊写法。"},{type:"code",title:"常用实体字符",lang:"html",code:`<p>显示小于号：1 &lt; 2</p>
<p>显示大于号：3 &gt; 2</p>
<p>显示引号：他说&quot;你好&quot;</p>
<p>显示与符号：AT&amp;T</p>
<p>多个连续空格需要用&nbsp;&nbsp;&nbsp;空格实体才能保留</p>
<p>版权符号：&copy; 2026 我的网站</p>`},{type:"table",title:"必会的实体字符",headers:["写法","显示效果","说明"],rows:[["`&lt;`","<","小于号（less than）"],["`&gt;`",">","大于号（greater than）"],["`&amp;`","&","与符号"],["`&quot;`",'"',"双引号"],["`&nbsp;`","空格","不换行空格，连续写多个可保留空白"],["`&copy;`","©","版权符号"]]},{type:"warn",content:"在 HTML 源码里直接敲多个空格、多个回车，浏览器只会当成一个空格。想保留空白请用 `&nbsp;` 或改用 CSS 控制。"}]},{id:"html-div-span",title:"2.4 div 与 span：通用容器",sections:[{type:"text",content:'`<div>` 和 `<span>` 本身没有任何样式和含义，它们是两个"空盒子"，专门用来**把内容分组**，方便整体设置样式或布局。'},{type:"list",title:"两者的区别",items:["`<div>`：**块级元素**，独占一行，用来划分大的区域（如整块布局）","`<span>`：**行内元素**，不换行，用来包住一行文字中的一小段"]},{type:"code",title:"div 与 span 的典型用法",lang:"html",code:`<!-- div：把相关内容分成一块 -->
<div class="header-area">
  <h1>网站标题</h1>
  <p>网站简介</p>
</div>

<!-- span：包住行内的一小段文字 -->
<p>这件商品价格 <span class="price">99 元</span>，数量有限。</p>`},{type:"tip",content:"有语义合适的标签（如 `header`、`p`）时优先用语义标签；找不到合适的，才用 `div`、`span` 兜底。"}]}]},{id:"html-ch3",title:"第三章 语义化标签",lessons:[{id:"html-semantic",title:"3.1 语义化与页面结构标签",sections:[{type:"text",content:'**语义化**就是"用贴切的标签表达内容的含义"。以前的网页满屏都是 `div`，而 HTML5 提供了一组结构标签，让"页头、导航、页脚"一眼就能看出来。'},{type:"code",title:"一个典型的语义化页面骨架",lang:"html",code:`<body>
  <header>页头：放 Logo、网站名</header>
  <nav>导航栏：放菜单链接</nav>
  <main>主体：页面核心内容（一个页面只有一个）</main>
  <footer>页脚：放版权信息、联系方式</footer>
</body>`},{type:"list",title:"常用结构标签",items:["`<header>`：页头或某个区块的头部","`<nav>`：导航链接区域","`<main>`：页面主要内容，**每页只能有一个**","`<footer>`：页脚","`<aside>`：侧边栏、与主体内容关系不大的信息"]},{type:"tip",content:"语义化的好处：代码可读性强、方便搜索引擎理解页面、屏幕阅读器（无障碍）能正确朗读内容。"}]},{id:"html-semantic2",title:"3.2 内容分区：article、section 与 figure",sections:[{type:"text",content:'除了页面级结构，HTML5 还提供了表达"内容块"的标签，常用于 `main` 内部组织文章内容。'},{type:"code",title:"article 与 section 示例",lang:"html",code:`<main>
  <article>
    <h1>一篇独立的文章</h1>
    <p>article 表示一段独立完整的内容，例如一篇博客、一条评论、一条新闻。</p>

    <section>
      <h2>第一节</h2>
      <p>section 表示文章中的一个主题分区。</p>
    </section>

    <section>
      <h2>第二节</h2>
      <p>每个 section 通常应该有自己的标题。</p>
    </section>
  </article>

  <figure>
    <img src="chart.png" alt="销量统计图">
    <figcaption>图 1：2026 年销量统计</figcaption>
  </figure>
</main>`},{type:"list",title:"要点",items:["`<article>`：**独立成篇**的内容（文章、评论、卡片），脱离页面也说得通","`<section>`：主题分组，一般配合标题使用","`<figure>` + `<figcaption>`：图片/图表 + 图注的组合",'`<time datetime="2026-01-01">`：标注时间，方便机器识别']},{type:"warn",content:"不确定用哪个语义标签时，用 `div` 也可以，不要为了语义化而强行套用。"}]}]},{id:"html-ch4",title:"第四章 列表",lessons:[{id:"html-ul",title:"4.1 无序列表 ul / li",sections:[{type:"text",content:"无序列表用于罗列**没有先后顺序**的内容，比如菜单、功能清单。浏览器默认给每项前面加一个圆点。"},{type:"code",title:"无序列表",lang:"html",code:`<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橘子</li>
</ul>`},{type:"list",title:"要点",items:["`<ul>`（unordered list）是列表容器，`<li>`（list item）是每一项","`ul` 的**直接子元素只能是 `li`**，其他标签都不合法","网站导航栏 90% 都是用 `ul + li` 搭建的","前面的圆点样式可以由 CSS 的 `list-style` 属性修改或去掉"]}]},{id:"html-ol",title:"4.2 有序列表 ol / li",sections:[{type:"text",content:"有序列表用于**有先后顺序**的内容，比如步骤说明、排行榜，每项前面自动带编号。"},{type:"code",title:"有序列表及其属性",lang:"html",code:`<!-- 普通有序列表：1 2 3 -->
<ol>
  <li>打开电脑</li>
  <li>登录系统</li>
  <li>开始工作</li>
</ol>

<!-- 从 5 开始编号 -->
<ol start="5">
  <li>第五名</li>
  <li>第六名</li>
</ol>

<!-- 倒序编号 -->
<ol reversed>
  <li>第三名</li>
  <li>第二名</li>
  <li>第一名</li>
</ol>`},{type:"table",title:"ol 的常用属性",headers:["属性","作用","示例"],rows:[["`start`","设置起始编号",'`<ol start="5">` 从 5 开始'],["`reversed`","倒序排列","3 2 1"],["`type`","编号样式","`1` 数字、`a` 小写字母、`A` 大写字母、`i` 罗马数字"]]}]},{id:"html-dl-nest",title:"4.3 定义列表与嵌套列表",sections:[{type:"text",content:"定义列表用于「**术语 + 解释**」这种成对的内容；而列表里再套列表，就是嵌套列表，常用于多级菜单。"},{type:"code",title:"定义列表 dl / dt / dd",lang:"html",code:`<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言，负责网页结构</dd>

  <dt>CSS</dt>
  <dd>层叠样式表，负责网页样式</dd>
</dl>
<!-- dt 是术语，dd 是解释，可以一 dt 对多个 dd -->`},{type:"code",title:"嵌套列表（二级菜单）",lang:"html",code:`<ul>
  <li>水果
    <ul>
      <li>苹果</li>
      <li>香蕉</li>
    </ul>
  </li>
  <li>蔬菜
    <ul>
      <li>白菜</li>
      <li>萝卜</li>
    </ul>
  </li>
</ul>`},{type:"tip",content:"嵌套列表的子列表要放在**父项的 `li` 内部**，而不是 `ul` 直接子元素的位置。"}]}]},{id:"html-ch5",title:"第五章 链接与媒体",lessons:[{id:"html-link",title:"5.1 超链接 a 标签",sections:[{type:"text",content:"超链接是互联网的灵魂，`<a>` 标签让页面之间可以互相跳转。`href` 属性指定跳转目标。"},{type:"code",title:"a 标签常见用法",lang:"html",code:`<!-- 跳转到外部网站 -->
<a href="https://example.com">去别的网站</a>

<!-- 跳转到本地页面 -->
<a href="./about.html">关于我们</a>

<!-- 新窗口打开（target="_blank"） -->
<a href="https://example.com" target="_blank">新窗口打开</a>

<!-- 链接到邮箱和电话 -->
<a href="mailto:someone@example.com">发邮件</a>
<a href="tel:10086">打电话</a>`},{type:"table",title:"target 属性的取值",headers:["取值","效果"],rows:[["`_self`","当前窗口打开（默认值）"],["`_blank`","新窗口/新标签页打开"],["`_parent`","在父框架中打开（配合 iframe 使用）"],["`_top`","在整个窗口中打开（配合 iframe 使用）"]]},{type:"warn",content:'使用 `target="_blank"` 时建议加上 `rel="noopener"`，防止新页面通过 `window.opener` 操控原页面，更安全。'}]},{id:"html-anchor",title:"5.2 锚点：页面内跳转",sections:[{type:"text",content:"点击后跳到当前页面的某个指定位置，这种功能叫**锚点**。实现方式：给目标元素一个 `id`，链接的 `href` 写 `#id`。"},{type:"code",title:"锚点跳转",lang:"html",code:`<!-- 点击链接跳到页面对应位置 -->
<a href="#chapter2">跳到第二章</a>
<a href="#bottom">跳到页面底部</a>

<!-- 目标元素：id 与 # 后面的名字对应 -->
<h2 id="chapter2">第二章</h2>
<p>这里有很多内容...</p>

<div id="bottom">页面底部</div>

<!-- href="#" 表示空锚点，常用于"回到顶部" -->
<a href="#">回到顶部</a>`},{type:"list",title:"要点",items:["`id` 在同一个页面内**必须唯一**","跨页面的锚点写法：`about.html#contact`（跳到 about 页的 contact 区域）","配合 CSS 的 `scroll-behavior: smooth` 可以实现平滑滚动"]}]},{id:"html-img",title:"5.3 图片 img 标签",sections:[{type:"text",content:"`<img>` 是单标签，通过 `src` 指定图片地址，`alt` 提供图片加载失败或无障碍场景下的文字说明。"},{type:"code",title:"图片的基本用法",lang:"html",code:`<!-- 基本用法 -->
<img src="cat.jpg" alt="一只橘猫趴在窗台上">

<!-- 指定宽高（建议只设一个，另一个等比缩放） -->
<img src="cat.jpg" alt="一只橘猫" width="300">

<!-- 使用网络图片 -->
<img src="https://example.com/logo.png" alt="网站标志">`},{type:"table",title:"常用属性",headers:["属性","作用"],rows:[["`src`","图片路径，**必填**"],["`alt`","图片描述，**必填**：加载失败时显示，也是无障碍必需品"],["`width` / `height`","宽高，单位像素，一般只设置一个以保持比例"],['`loading="lazy"`',"懒加载：滚动到附近才加载，提升页面速度"]]},{type:"list",title:"常见图片格式怎么选",items:["`.jpg`：照片类图片，体积小，不支持透明","`.png`：需要透明背景的图片、截图","`.gif`：简单动画","`.webp`：新一代格式，体积更小，现代浏览器都支持","`.svg`：矢量图标，放大不失真，适合 Logo 和图标"]}]},{id:"html-path",title:"5.4 相对路径与绝对路径",sections:[{type:"text",content:"引用图片、链接其他页面时都要写**路径**。路径分两种：绝对路径是完整地址，相对路径是相对于当前文件的位置。"},{type:"code",title:"相对路径的写法",lang:"html",code:`<!-- 假设当前文件是 index.html，位于 site 文件夹中 -->

<!-- 同目录下的图片 -->
<img src="cat.jpg" alt="">

<!-- 下一级 images 文件夹中的图片 -->
<img src="images/cat.jpg" alt="">

<!-- 上一级文件夹中的图片（../ 表示上一级） -->
<img src="../cat.jpg" alt="">

<!-- 上两级 -->
<img src="../../cat.jpg" alt="">`},{type:"table",title:"符号含义",headers:["写法","含义"],rows:[["`./` 或不写","当前文件所在目录"],["`images/xx.jpg`","当前目录下的 images 文件夹里"],["`../`","上一级目录"],["`../../`","上两级目录"],["`https://...`","绝对路径：完整的网络地址"]]},{type:"tip",content:"项目内的文件一律用相对路径，这样整个项目文件夹移动位置后依然正常工作。"}]},{id:"html-audio-video",title:"5.5 音频与视频",sections:[{type:"text",content:"HTML5 之前播放音视频要靠 Flash 插件，现在用原生 `<audio>` 和 `<video>` 标签即可。"},{type:"code",title:"音频与视频示例",lang:"html",code:`<!-- 音频：controls 显示播放控件 -->
<audio controls src="music.mp3">
  您的浏览器不支持音频播放。
</audio>

<!-- 视频：可以设置宽高和多个属性 -->
<video src="movie.mp4" controls width="500" poster="cover.jpg">
  您的浏览器不支持视频播放。
</video>

<!-- source 写法：提供多种格式，浏览器自动选择支持的 -->
<video controls>
  <source src="movie.webm" type="video/webm">
  <source src="movie.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>`},{type:"table",title:"常用属性",headers:["属性","作用"],rows:[["`controls`","显示播放/暂停/音量等控件"],["`autoplay`","自动播放（浏览器一般要求静音时才允许）"],["`loop`","循环播放"],["`muted`","静音"],["`poster`","视频封面图（仅 video）"],["`preload`","预加载策略：`auto` / `metadata` / `none`"]]}]},{id:"html-iframe",title:"5.6 iframe：在页面中嵌页面",sections:[{type:"text",content:'`<iframe>` 可以把另一个网页"嵌"进当前页面，像开了一扇小窗户。地图、在线文档、视频平台常用这种方式提供嵌入代码。'},{type:"code",title:"iframe 示例",lang:"html",code:`<!-- 嵌入其他网页 -->
<iframe src="https://example.com" width="600" height="400" title="示例页面"></iframe>

<!-- 嵌入本地页面 -->
<iframe src="./demo.html" width="100%" height="300" title="演示"></iframe>

<!-- 视频平台的嵌入代码一般长这样（以通用格式示意） -->
<iframe src="https://player.example.com/video/123" 
        width="560" height="315" 
        allowfullscreen title="视频"></iframe>`},{type:"list",title:"要点",items:["务必写 `title` 属性，说明这个嵌入内容是什么","`allowfullscreen` 允许全屏播放","很多网站通过安全策略禁止被 iframe 嵌入，嵌不了不是你的代码写错了","iframe 会拖慢页面加载，能不用尽量不用"]}]}]},{id:"html-ch6",title:"第六章 表格",lessons:[{id:"html-table-basic",title:"6.1 表格基础：table / tr / td",sections:[{type:"text",content:"表格用来展示**行列结构的数据**。`<table>` 是表格，`<tr>` 是一行（table row），`<td>` 是一个单元格（table data）。"},{type:"code",title:"最简单的表格",lang:"html",code:`<table>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
  </tr>
  <tr>
    <td>小明</td>
    <td>18</td>
  </tr>
  <tr>
    <td>小红</td>
    <td>17</td>
  </tr>
</table>

<!-- th 是表头单元格（加粗居中），td 是普通数据单元格 -->`},{type:"list",title:"要点",items:["第一行用 `th` 表头，其余用 `td`","表格默认**没有边框**，需要用 CSS 添加：`table, th, td { border: 1px solid #333; }`","相邻边框默认有间隙，用 `border-collapse: collapse` 合并为单线"]},{type:"warn",content:"表格只适合展示数据，**不要用表格做页面布局**——那是十多年前的做法，现代布局请用 CSS（Flex/Grid）。"}]},{id:"html-table-structure",title:"6.2 表格结构化：caption、thead、tbody、tfoot",sections:[{type:"text",content:"数据多的表格，应该分成表头、表身、表脚三个区域，再加上标题。结构清晰，也方便 CSS 分区控制样式。"},{type:"code",title:"结构完整的表格",lang:"html",code:`<table>
  <caption>2026 年第一季度销售统计</caption>

  <thead>
    <tr>
      <th>月份</th>
      <th>销售额</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 月</td>
      <td>10 万</td>
    </tr>
    <tr>
      <td>2 月</td>
      <td>12 万</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>合计</td>
      <td>22 万</td>
    </tr>
  </tfoot>
</table>`},{type:"list",title:"要点",items:["`<caption>`：表格标题，必须写在 `table` 的**第一个子元素**位置","`<thead>`：表头区（放 `th` 那一行）","`<tbody>`：表身区（数据行），即使不写浏览器也会自动生成","`<tfoot>`：表脚区（合计行），写在 HTML 里虽然在最后，渲染时也固定在底部"]}]},{id:"html-table-merge",title:"6.3 合并单元格：rowspan 与 colspan",sections:[{type:"text",content:'想让某个单元格"占多行"或"占多列"，需要用合并属性：`rowspan` 跨行合并，`colspan` 跨列合并。'},{type:"code",title:"合并单元格示例",lang:"html",code:`<table>
  <tr>
    <th rowspan="2">姓名</th>
    <th colspan="2">成绩</th>
  </tr>
  <tr>
    <td>语文</td>
    <td>数学</td>
  </tr>
  <tr>
    <td>小明</td>
    <td>90</td>
    <td>95</td>
  </tr>
</table>

<!-- "姓名"占 2 行，"成绩"占 2 列 -->
<!-- 被合并的位置不需要再写单元格，写了会错位 -->`},{type:"list",title:"要点",items:['`colspan="2"`：该单元格横向占 2 列','`rowspan="2"`：该单元格纵向占 2 行',"合并后，被占掉的位置**不要再写** `td` / `th`","复杂合并容易算错，建议先在纸上画格子，数清每行的单元格数量"]}]}]},{id:"html-ch7",title:"第七章 表单",lessons:[{id:"html-form",title:"7.1 表单 form 与第一个输入框",sections:[{type:"text",content:"表单是网页**收集用户输入**的工具：登录框、搜索框、注册页都是表单。`<form>` 是表单容器，里面放各种输入控件。"},{type:"code",title:"第一个表单",lang:"html",code:`<form action="/submit" method="get">
  <!-- input 是单标签，type 决定控件形态 -->
  <input type="text" name="username" placeholder="请输入用户名">
  <input type="password" name="pwd" placeholder="请输入密码">
  <button type="submit">登录</button>
</form>

<!-- action：数据提交到哪个地址 -->
<!-- method：提交方式，get 或 post -->
<!-- name：控件的名字，提交数据时的 key，非常重要 -->`},{type:"list",title:"三个关键属性",items:["`action`：表单数据要提交到的服务器地址","`method`：提交方式 `get`（数据在网址里）或 `post`（数据在请求体里）",'`name`：每个控件的"变量名"，**没有 name 的控件数据不会被提交**']}]},{id:"html-input-types",title:"7.2 input 常用类型",sections:[{type:"text",content:"`<input>` 通过 `type` 属性变化出十多种形态，是表单里最灵活的控件。"},{type:"code",title:"常用 input 类型",lang:"html",code:`<!-- 文本框 -->
<input type="text" placeholder="文本">

<!-- 密码框：输入内容显示为圆点 -->
<input type="password" placeholder="密码">

<!-- 数字框：只能输入数字，可带步进按钮 -->
<input type="number" min="0" max="100" step="1">

<!-- 邮箱框：提交时自动校验格式 -->
<input type="email" placeholder="邮箱">

<!-- 日期选择 -->
<input type="date">

<!-- 文件选择 -->
<input type="file" accept="image/*">

<!-- 滑块 -->
<input type="range" min="0" max="100">

<!-- 隐藏域：用户看不到，但会随表单提交 -->
<input type="hidden" name="token" value="abc123">`},{type:"table",title:"常用通用属性",headers:["属性","作用"],rows:[["`placeholder`","提示文字（输入前显示的灰色提示）"],["`value`","默认值"],["`required`","必填项，为空时提交会被拦截"],["`disabled`","禁用控件（灰色不可操作，不提交数据）"],["`readonly`","只读（不能改，但会提交数据）"],["`maxlength`","最大输入长度"],["`min` / `max` / `step`","数字/日期的范围与步长"]]},{type:"tip",content:"HTML5 的 `email`、`url` 等类型自带浏览器校验，能省不少 JS 验证代码。"}]},{id:"html-select-radio",title:"7.3 选择类控件：radio、checkbox、select",sections:[{type:"text",content:"单选、多选、下拉选择是表单的三大选择控件，它们的共同点是：靠 `name` 分组、靠 `value` 提供提交值。"},{type:"code",title:"三种选择控件",lang:"html",code:`<!-- 单选框：同一组 name 相同，只能选一个 -->
<p>性别：</p>
<input type="radio" name="gender" value="male" checked> 男
<input type="radio" name="gender" value="female"> 女

<!-- 复选框：同一组 name 相同，可多选 -->
<p>爱好：</p>
<input type="checkbox" name="hobby" value="read"> 阅读
<input type="checkbox" name="hobby" value="run" checked> 跑步
<input type="checkbox" name="hobby" value="music"> 音乐

<!-- 下拉框：select 容器 + option 选项 -->
<p>城市：</p>
<select name="city">
  <option value="">-- 请选择 --</option>
  <option value="beijing" selected>北京</option>
  <option value="shanghai">上海</option>
  <option value="guangzhou">广州</option>
</select>`},{type:"list",title:"要点",items:["radio **同组必须同 `name`**，否则起不到单选互斥的效果","`checked` / `selected` 表示默认选中","用户看到的是选项文字，实际提交的是 `value` 的值","`select` 加 `multiple` 属性可变成多选下拉（按住 Ctrl 选）",'`<optgroup label="分组名">` 可以给 option 分组']}]},{id:"html-label",title:"7.4 label 与控件分组",sections:[{type:"text",content:"点一下文字就能选中对应的输入框？这就是 `<label>` 的作用。它把文字和控件**关联**起来，大幅提升点击体验。"},{type:"code",title:"label 的两种写法",lang:"html",code:`<!-- 写法一：for 指向控件的 id -->
<label for="user">用户名</label>
<input type="text" id="user" name="username">

<!-- 写法二：直接把控件包进 label（不用写 for/id） -->
<label>
  <input type="radio" name="gender" value="male"> 男
</label>
<label>
  <input type="radio" name="gender" value="female"> 女
</label>

<!-- fieldset：把控件分组，legend 是组标题 -->
<fieldset>
  <legend>联系方式</legend>
  <input type="tel" name="phone" placeholder="电话">
  <input type="email" name="mail" placeholder="邮箱">
</fieldset>`},{type:"tip",content:"radio 和 checkbox 强烈建议配 label，否则那个小小的圆圈很难点中。"}]},{id:"html-textarea-button",title:"7.5 多行文本 textarea 与按钮 button",sections:[{type:"text",content:"`<textarea>` 是多行文本输入框，`<button>` 是按钮。button 有三种类型，行为完全不同。"},{type:"code",title:"textarea 与 button",lang:"html",code:`<!-- 多行文本框：rows 行数，cols 列数 -->
<textarea name="intro" rows="5" cols="40" placeholder="介绍一下自己...">默认内容写在这里</textarea>

<!-- 按钮的三种类型 -->
<button type="submit">提交（默认类型，提交表单）</button>
<button type="reset">重置（清空表单所有输入）</button>
<button type="button">普通按钮（不干任何事，配合 JS 使用）</button>`},{type:"list",title:"要点",items:["textarea 是**双标签**，默认值写在标签中间，不是 `value` 属性","`resize: none`（CSS）可以禁止用户拖拽右下角调整大小","表单里的 button **不写 type 时默认是 submit**，容易误提交，要留意",'按钮也可以用 `<input type="submit" value="提交">` 实现，但 button 更灵活（可以放图标等）']}]},{id:"html-form-submit",title:"7.6 表单提交与 get / post",sections:[{type:"text",content:"点击提交按钮后，浏览器会把表单里**所有带 `name` 的控件**打包，按 `method` 指定的方式发送到 `action` 地址。"},{type:"code",title:"get 提交后的网址变化",lang:"html",code:`<form action="/search" method="get">
  <input type="text" name="keyword" placeholder="搜索关键词">
  <button type="submit">搜索</button>
</form>

<!-- 提交后地址栏变成： -->
<!-- /search?keyword=html -->
<!-- 多个数据用 & 连接：/search?keyword=html&page=2 -->`},{type:"table",title:"get 与 post 的区别",headers:["对比项","get","post"],rows:[["数据位置","拼接在网址后面（?key=value）","放在请求体里，地址栏看不到"],["数据量","受网址长度限制，较小","基本无限制"],["安全性","低：密码等会直接显示在网址里","相对高"],["典型场景","搜索、筛选、分页","登录、注册、上传文件"]]},{type:"warn",content:'涉及密码、隐私的操作必须用 `post`；文件上传的表单还要加 `enctype="multipart/form-data"`。'}]}]},{id:"html-ch8",title:"第八章 全局属性与 HTML5",lessons:[{id:"html-global-attrs",title:"8.1 全局属性：id、class 与更多",sections:[{type:"text",content:"全局属性是**所有标签都能用**的属性。它们是 HTML 与 CSS、JavaScript 之间的桥梁，必须熟练掌握。"},{type:"code",title:"常用全局属性",lang:"html",code:`<!-- id：唯一标识，一个页面不能重复 -->
<h1 id="main-title">标题</h1>

<!-- class：类名，可以重复、可以多个（空格隔开） -->
<p class="text red">我有两个类</p>
<p class="text">我有一个类</p>

<!-- style：行内样式，直接写 CSS（优先级高，但不推荐多用） -->
<p style="color: blue;">我是蓝色</p>

<!-- title：鼠标悬停时的提示文字 -->
<span title="这是一段补充说明">悬停看我</span>

<!-- hidden：直接隐藏元素 -->
<p hidden>你看不到我</p>

<!-- contenteditable：让内容可以编辑 -->
<p contenteditable>点我试试，这段文字可以编辑</p>

<!-- data-*：自定义数据属性，常给 JS 提供数据 -->
<button data-goods-id="1001" data-price="99">加入购物车</button>`},{type:"table",title:"id 与 class 对比",headers:["对比项","id","class"],rows:[["唯一性","页面内必须唯一","可以重复使用"],["多个值","只能一个","空格隔开可写多个"],["CSS 选择器","`#main-title`","`.text`"],["JS 获取","`document.getElementById`",'`querySelector(".text")`'],["使用建议","锚点、单个关键元素","**日常开发的主力**"]]}]},{id:"html5-new-tags",title:"8.2 HTML5 实用新标签",sections:[{type:"text",content:"除了语义标签，HTML5 还带来了一批实用的小控件标签，不用写一行 JS 就有交互效果。"},{type:"code",title:"details、datalist、progress 与 meter",lang:"html",code:`<!-- details：点击展开/收起，summary 是标题 -->
<details>
  <summary>什么是 HTML？</summary>
  <p>HTML 是超文本标记语言，用来搭建网页结构。</p>
</details>

<!-- datalist：为输入框提供候选选项 -->
<input type="text" list="cities" placeholder="输入城市">
<datalist id="cities">
  <option value="北京">
  <option value="上海">
  <option value="广州">
</datalist>

<!-- progress：进度条 -->
<progress value="70" max="100"></progress>

<!-- meter：度量值（如磁盘用量） -->
<meter value="6" min="0" max="10" low="3" high="8"></meter>`},{type:"list",title:"要点",items:["`details` 默认收起，加 `open` 属性默认展开","`datalist` 的 `id` 要和输入框的 `list` 值对应","`progress` 表进度（0 到 max），`meter` 表度量（有正常/警戒范围）","还有 `<mark>` 高亮、`<time>` 时间等小标签，见前面章节"]}]},{id:"html5-overview",title:"8.3 HTML5 新特性概览",sections:[{type:"text",content:"HTML5 是一次大版本升级，除了新标签，还包含一系列新能力。这里先建立整体印象，学到 JS 部分会用到其中几个。"},{type:"list",title:"HTML5 的主要新特性",items:["**语义化标签**：header、nav、article、section 等（第三章已学）","**多媒体**：audio、video 原生播放（第五章已学）","**表单增强**：email/date/range 等新类型 + 自带校验（第七章已学）","**绘图**：`<canvas>` 用 JS 画图，`<svg>` 矢量图形","**本地存储**：localStorage / sessionStorage，网页也能存数据","**地理定位**：浏览器经纬度接口","**Web Workers**：后台多线程计算"]},{type:"code",title:"canvas 与 svg 长什么样",lang:"html",code:`<!-- canvas：一块画布，内容由 JS 绘制 -->
<canvas id="board" width="200" height="100"></canvas>

<!-- svg：矢量图形，直接写标签就能显示 -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="steelblue"></circle>
</svg>`},{type:"tip",content:'到这里 HTML 的常用知识点已经齐全了。建议动手做一个"个人介绍页"，用上标题、段落、列表、图片、链接、表格和表单，做出来才算真的掌握。接下来进入 **CSS** 的学习。'}]}]}]},ip={id:"css",name:"CSS",short:"C",color:"#2563eb",description:"网页的皮肤：负责页面的外观、布局与动效",chapters:[{id:"css-ch1",title:"第一章 CSS 入门",lessons:[{id:"css-what-is",title:"1.1 什么是 CSS 与三种引入方式",sections:[{type:"text",content:'CSS（Cascading Style Sheets，**层叠样式表**）负责网页的外观：颜色、字体、大小、位置、动画，全都由它控制。HTML 说"这里有个标题"，CSS 说"这个标题是红色、36 像素"。'},{type:"code",title:"三种引入 CSS 的方式",lang:"html",code:`<!-- 方式一：行内样式（写在标签的 style 属性里） -->
<p style="color: red; font-size: 18px;">红色文字</p>

<!-- 方式二：内部样式（写在 head 的 style 标签里） -->
<head>
  <style>
    p { color: red; }
  </style>
</head>

<!-- 方式三：外部样式（单独的 .css 文件，推荐） -->
<head>
  <link rel="stylesheet" href="style.css">
</head>`},{type:"list",title:"三种方式怎么选",items:["**外部样式**（推荐）：结构与样式分离，可以多页面共用，方便维护","**内部样式**：单个页面的小demo、临时实验可以用","**行内样式**：优先级最高，但难以复用，只在个别地方临时覆盖时使用"]},{type:"tip",content:"三种方式同时存在时，行内样式 > 内部样式 / 外部样式（后写的覆盖先写的）。"}]},{id:"css-syntax",title:"1.2 基本语法与注释",sections:[{type:"text",content:"CSS 的一句话语法：**选中谁（选择器），改什么（属性），改成什么（值）**。"},{type:"code",title:"CSS 语法结构",lang:"css",code:`/* 这是 CSS 的注释，只有这一种写法 */

/* 选择器 { 属性: 值; } */
p {
  color: red;        /* 文字颜色 */
  font-size: 16px;   /* 字号 */
  line-height: 1.6;  /* 行高 */
}

/* 多个选择器写在一起（并集） */
h1, h2, h3 {
  font-weight: bold;
}

/* 一个属性多个值，空格隔开 */
div {
  border: 1px solid #333;  /* 宽度 样式 颜色 */
}`},{type:"list",title:"书写规范建议",items:["每条声明以**分号**结尾（最后一条也建议写）","属性名不区分大小写，但约定全部**小写**","注释用 `/* */`，**不能嵌套**注释","缩进用 2 或 4 空格，保持统一"]},{type:"warn",content:"CSS 注释只有 `/* */` 一种，`//` 在 CSS 里是非法的，会导致后面的样式失效。"}]}]},{id:"css-ch2",title:"第二章 选择器",lessons:[{id:"css-basic-selectors",title:"2.1 基础选择器",sections:[{type:"text",content:"选择器决定样式作用于**哪些元素**，是 CSS 最重要的基础。先掌握四个基础选择器。"},{type:"code",title:"四大基础选择器",lang:"css",code:`/* 1. 标签选择器：选中所有该标签 */
p {
  color: #333;
}

/* 2. 类选择器：选中 class="active" 的元素（最常用） */
.active {
  color: blue;
}

/* 3. id 选择器：选中 id="header" 的唯一元素 */
#header {
  background: #f5f5f5;
}

/* 4. 通配符选择器：选中所有元素（常用于清除默认样式） */
* {
  margin: 0;
  padding: 0;
}`},{type:"code",title:"对应的 HTML",lang:"html",code:`<p>我是段落，会被标签选择器选中</p>
<p class="active">我还会被类选择器选中</p>
<div id="header">我唯一</div>`},{type:"tip",content:"日常开发中**类选择器使用频率最高**：不与标签绑定、可复用、可叠加多个类。"}]},{id:"css-combine-selectors",title:"2.2 组合选择器",sections:[{type:"text",content:"单个选择器可以组合起来，实现更精准的定位。重点掌握**后代**与**子代**的区别。"},{type:"code",title:"五种组合方式",lang:"css",code:`/* 1. 后代选择器：空格隔开 —— 选中 .nav 里面所有的 a（不管嵌套多深） */
.nav a {
  color: #333;
}

/* 2. 子代选择器：> 隔开 —— 只选中 .nav 的直接子级 a */
.nav > a {
  color: blue;
}

/* 3. 相邻兄弟选择器：+ —— 紧跟在 h2 后面的第一个 p */
h2 + p {
  font-weight: bold;
}

/* 4. 通用兄弟选择器：~ —— h2 后面所有的 p（同层级） */
h2 ~ p {
  color: gray;
}

/* 5. 交集选择器：连写 —— 既是 p 又有 .active 类 */
p.active {
  color: red;
}

/* 并集选择器：逗号隔开 —— 同时选中多种 */
h1, h2, .title {
  font-size: 24px;
}`},{type:"code",title:"看懂后代与子代的区别",lang:"html",code:`<div class="nav">
  <a href="#">直接子级，后代与子代选择器都选中</a>
  <ul>
    <li><a href="#">更深层，只有后代选择器选中</a></li>
  </ul>
</div>`},{type:"warn",content:"后代选择器是空格，交集选择器是连写（无分隔符），`div.active` 和 `div .active` 是完全不同的两个选择器。"}]},{id:"css-pseudo-class",title:"2.3 伪类选择器",sections:[{type:"text",content:"伪类用**单个冒号**表示，用来选中元素的**某种状态**或**特定位置**，比如鼠标悬停、第一个子元素。"},{type:"code",title:"常用状态伪类",lang:"css",code:`/* 鼠标悬停（最常用） */
button:hover {
  background: #2563eb;
}

/* 获得焦点（输入框点击/Tab进入时） */
input:focus {
  border-color: #2563eb;
  outline: none;
}

/* 被激活（按下去的瞬间） */
button:active {
  transform: scale(0.98);
}

/* 表单禁用状态 */
input:disabled {
  background: #eee;
}`},{type:"code",title:"结构伪类：按位置选择",lang:"css",code:`/* 第一个和最后一个子元素 */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }

/* 第 3 个子元素 */
li:nth-child(3) { color: red; }

/* 偶数行（2、4、6...）常用于表格斑马纹 */
tr:nth-child(even) { background: #fafafa; }

/* 奇数行 */
tr:nth-child(odd) { background: #fff; }

/* 3 的倍数 */
li:nth-child(3n) { color: blue; }

/* 倒数第 2 个 */
li:nth-last-child(2) { color: gray; }`},{type:"tip",content:"`nth-child` 的参数很灵活：`even` 偶数、`odd` 奇数、`2n` 倍数、`3n+1` 带余数的公式。"}]},{id:"css-pseudo-element",title:"2.4 伪元素选择器",sections:[{type:"text",content:"伪元素用**两个冒号**表示，用来选中元素的一部分内容，甚至**创造不存在的元素**。最经典的是 `::before` 和 `::after`。"},{type:"code",title:"常用伪元素",lang:"css",code:`/* ::before / ::after：在元素内容前/后插入内容 */
.price::before {
  content: "￥";          /* content 必须写，哪怕是空字符串 */
  color: red;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;            /* 经典的清除浮动写法 */
}

/* ::first-letter：第一个字，常做首字放大 */
article p::first-letter {
  font-size: 2em;
}

/* ::selection：用户选中文字时的样式 */
p::selection {
  background: #2563eb;
  color: white;
}`},{type:"list",title:"要点",items:["`::before` / `::after` **必须配合 `content` 属性**使用","插入的内容默认是**行内元素**，可以设置 `display` 改变","伪元素在 DOM 里**真实不存在**，无法被 JS 直接选中，但可以美化界面而不增加 HTML","单冒号 `:before` 是旧写法，现在统一用双冒号"]}]},{id:"css-attr-selector",title:"2.5 属性选择器",sections:[{type:"text",content:"属性选择器按**HTML 属性**来匹配元素，不需要额外加类名，写表单样式和图标时特别好用。"},{type:"code",title:"属性选择器全家桶",lang:"css",code:`/* 选中拥有 disabled 属性的按钮 */
button[disabled] {
  background: #eee;
}

/* 选中 type="text" 的输入框 */
input[type="text"] {
  border: 1px solid #ccc;
}

/* class 属性值"包含"单词 icon 的元素 */
[class~="icon"] {
  display: inline-block;
}

/* href 以 https 开头的链接 */
a[href^="https"] {
  color: green;
}

/* href 以 .pdf 结尾的链接，自动加图标提示 */
a[href$=".pdf"]::after {
  content: " (PDF)";
  font-size: 12px;
  color: red;
}

/* alt 属性中包含"猫"的图片 */
img[alt*="猫"] {
  border: 2px solid orange;
}`},{type:"table",title:"符号含义速记",headers:["写法","含义"],rows:[["`[attr]`","拥有该属性"],['`[attr="v"]`',"属性值完全等于 v"],['`[attr~="v"]`',"属性值包含单词 v（按空格分词）"],['`[attr^="v"]`',"以 v **开头**（^ 像向上的箭头）"],['`[attr$="v"]`',"以 v **结尾**（$ 像结尾符号）"],['`[attr*="v"]`',"包含 v 这段**子串**"]]}]},{id:"css-specificity",title:"2.6 优先级、继承与 !important",sections:[{type:"text",content:"多条规则命中同一个元素时听谁的？这就是**优先级（层叠性）**问题。CSS 有一套明确的权重算法。"},{type:"table",title:"优先级从高到低",headers:["排名","选择器","权重示意"],rows:[["1",'行内样式 `style="..."`',"1000"],["2","id 选择器 `#id`","100"],["3","类 / 伪类 / 属性选择器 `.a` `:hover` `[attr]`","10"],["4","标签 / 伪元素选择器 `p` `::before`","1"],["5","通配符 `*`、继承的样式","0"]]},{type:"code",title:"权重比较示例",lang:"css",code:`/* 权重 = 1 个标签 = 1 */
p { color: gray; }

/* 权重 = 1 个类 = 10，胜出 */
.text { color: blue; }

/* 权重 = 1 个 id = 100，再胜出 */
#intro { color: red; }

/* 权重 = id + 类 = 110，最终胜出 */
#intro.text { color: green; }`},{type:"list",title:"三条判定规则",items:["权重**逐级比较**：先比 id 个数，再比类个数，最后比标签个数","权重相同时，**后写的覆盖先写的**","属性值带 `inherit`（继承）的样式永远打不过直接选中的样式"]},{type:"warn",content:"`!important` 可以强行提权到最高，但会破坏正常的层叠逻辑，让代码难维护，**不到万不得已不要用**。"}]}]},{id:"css-ch3",title:"第三章 样式基础",lessons:[{id:"css-color",title:"3.1 颜色的四种表示法",sections:[{type:"text",content:"CSS 中颜色有四种写法，日常开发前两种最常用，`rgba` 在需要透明度时必备。"},{type:"code",title:"四种颜色写法",lang:"css",code:`div {
  /* 1. 颜色关键字 */
  color: red;

  /* 2. 十六进制：#RRGGBB，可缩写成三位 */
  color: #ff0000;   /* 红色 */
  color: #f00;      /* 等价缩写 */
  color: #333333;   /* 深灰（网页最常用的文字色） */
  color: #fff;      /* 白色 */

  /* 3. rgb：红绿蓝三通道，各 0~255 */
  color: rgb(255, 0, 0);

  /* 4. rgba：多一个透明度 alpha，0 全透明 ~ 1 不透明 */
  color: rgba(255, 0, 0, 0.5);   /* 半透明红色 */
  background: rgba(0, 0, 0, 0.6); /* 常用于遮罩层 */
}`},{type:"list",title:"要点",items:["十六进制的本质就是 rgb，`#f00` = `rgb(255,0,0)`","`rgba` 的透明度写在**第四个参数**，0.5 也可以写成 `.5`","透明色可用 `transparent` 关键字","还有 `hsl(色相, 饱和度, 亮度)` 写法，调色更直观，感兴趣可自行了解"]}]},{id:"css-units",title:"3.2 尺寸单位：px、em、rem、vw、vh、%",sections:[{type:"text",content:"CSS 单位分**绝对单位**（px）和**相对单位**（em、rem、vw、vh、%）。掌握相对单位是做响应式页面的前提。"},{type:"table",title:"常用单位一览",headers:["单位","相对于谁","典型用途"],rows:[["`px`","固定像素，不随环境变化","边框、图标等需要精确的场合"],["`em`","**父元素**的字号","行高、内边距随字号缩放"],["`rem`","**根元素** html 的字号（默认 16px）","整体字号、间距，响应式首选"],["`vw` / `vh`","视口宽/高的 1%","全屏横幅、满屏布局"],["`%`","父元素的对应属性","宽度自适应"]]},{type:"code",title:"rem 的换算示例",lang:"css",code:`/* html 默认 font-size: 16px */
html {
  font-size: 16px;
}

/* 1rem = 16px，1.5rem = 24px */
h1 {
  font-size: 1.5rem;   /* 24px */
}

p {
  font-size: 0.875rem; /* 14px */
  line-height: 1.6;    /* 行高不带单位 = 字号的 1.6 倍（推荐写法） */
}

/* 移动端常用：改根字号，全页随动 */
@media (max-width: 640px) {
  html { font-size: 14px; }
}`},{type:"tip",content:"经验法则：**字号、间距用 rem，布局宽度用 %，全屏区块用 vw/vh，边框用 px**。"}]},{id:"css-font",title:"3.3 字体属性 font",sections:[{type:"text",content:"字体属性控制文字的**字体族、大小、粗细、样式**，是最常调整的一组外观属性。"},{type:"code",title:"字体全家桶",lang:"css",code:`p {
  /* 字体族：从左往右找，找到系统里有的为止，最后必须兜底 */
  font-family: "Microsoft YaHei", "PingFang SC", Arial, sans-serif;

  /* 字号 */
  font-size: 16px;

  /* 粗细：normal=400，bold=700，也可以写数字 */
  font-weight: 700;      /* 100~900，越大越粗 */

  /* 样式：italic 斜体 */
  font-style: italic;

  /* font 复合写法：样式 粗细 字号/行高 字体族 */
  font: italic 700 16px/1.5 "Microsoft YaHei", sans-serif;
}`},{type:"list",title:"要点",items:["`font-family` 里带空格的字体名要**加引号**","最后一定要写一个通用兜底：`sans-serif`（无衬线）或 `serif`（衬线）","中文网页常用：微软雅黑（Windows）、苹方（Mac）","`font-weight` 用数字更精确：400 常规、500 中等、600 半粗、700 粗"]},{type:"tip",content:"想在网页用特殊字体，可用 `@font-face` 引入字体文件，或使用在线字体服务；注意中文字体文件较大。"}]},{id:"css-text",title:"3.4 文本属性 text 与行高",sections:[{type:"text",content:"文本属性控制整段文字的**对齐、装饰、间距**等排版效果，学会它们页面立刻精致起来。"},{type:"code",title:"常用文本属性",lang:"css",code:`p {
  /* 颜色 */
  color: #333;

  /* 对齐：left / center / right / justify（两端对齐） */
  text-align: center;

  /* 装饰线：underline 下划线 / line-through 删除线 / none 去掉 */
  text-decoration: none;   /* 常用于去掉 a 标签下划线 */

  /* 字间距 与 词间距 */
  letter-spacing: 2px;
  word-spacing: 4px;

  /* 首行缩进：2em = 缩进两个汉字 */
  text-indent: 2em;

  /* 大小写转换（英文场景） */
  text-transform: uppercase;

  /* 行高：数字写法 = 字号的倍数（推荐） */
  line-height: 1.7;

  /* 文字溢出省略（单行，三件套缺一不可） */
  white-space: nowrap;      /* 不换行 */
  overflow: hidden;         /* 溢出隐藏 */
  text-overflow: ellipsis;  /* 溢出显示省略号 */
}`},{type:"list",title:"行高的两个妙用",items:["**让单行文字垂直居中**：把 `line-height` 设为元素高度一样，按钮文字居中就是这原理","正文行高建议 `1.5 ~ 1.8`，阅读体验最舒适"]}]},{id:"css-list-table",title:"3.5 列表与表格样式",sections:[{type:"text",content:"列表和表格都有默认的浏览器样式（圆点、边框间隙），实际开发中第一件事通常是调整或去掉它们。"},{type:"code",title:"列表样式",lang:"css",code:`/* 去掉列表圆点（做导航栏必用） */
ul {
  list-style: none;
}

/* 换成实心方块 / 数字 / 自定义图标 */
ul.square { list-style-type: square; }
ol.roman  { list-style-type: lower-roman; }
ul.custom { list-style-image: url("dot.png"); }`},{type:"code",title:"表格样式",lang:"css",code:`table {
  /* 合并相邻边框：collapse 是表格美化第一步 */
  border-collapse: collapse;

  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-align: left;
}

/* 表头底色 */
th {
  background: #f5f5f5;
}

/* 斑马纹：偶数行灰底（伪类结合使用） */
tbody tr:nth-child(even) {
  background: #fafafa;
}

/* 鼠标经过行高亮 */
tbody tr:hover {
  background: #eff6ff;
}`}]}]},{id:"css-ch4",title:"第四章 盒模型",lessons:[{id:"css-box-model",title:"4.1 盒模型：一切皆盒子",sections:[{type:"text",content:"页面上每个元素都是一个**矩形盒子**，由内到外分四层：内容 content、内边距 padding、边框 border、外边距 margin。这就是盒模型，CSS 布局的基石。"},{type:"code",title:"盒模型四层结构",lang:"css",code:`div {
  /* 1. 内容区：width 和 height 默认只控制这一层 */
  width: 200px;
  height: 100px;

  /* 2. 内边距：内容与边框之间的空隙（在盒子内部） */
  padding: 20px;

  /* 3. 边框：盒子的描边 */
  border: 2px solid #333;

  /* 4. 外边距：盒子与别的盒子之间的距离（在盒子外部） */
  margin: 10px;
}`},{type:"list",title:"记忆口诀",items:['**padding 在内**：想撑开盒子的"留白"用 padding',"**margin 在外**：想拉开盒子之间的距离用 margin","padding 会显示背景色，margin 区域不显示背景"]},{type:"tip",content:"浏览器 F12 打开开发者工具，Elements 面板里能直观看到每个元素的盒模型图，学习时多打开看。"}]},{id:"css-padding-margin",title:"4.2 padding 与 margin 的简写和技巧",sections:[{type:"text",content:"padding 和 margin 都支持 1~4 个值的简写，还各有一两个必须掌握的经典技巧。"},{type:"code",title:"简写规则（以 margin 为例，padding 完全相同）",lang:"css",code:`div {
  /* 1 个值：上下左右都是 10px */
  margin: 10px;

  /* 2 个值：上下 10px，左右 20px */
  margin: 10px 20px;

  /* 3 个值：上 10px，左右 20px，下 30px */
  margin: 10px 20px 30px;

  /* 4 个值：上 右 下 左（顺时针方向） */
  margin: 10px 20px 30px 40px;

  /* 也可以单独写某一边 */
  margin-top: 10px;
  padding-left: 20px;
}`},{type:"code",title:"两个经典技巧",lang:"css",code:`/* 1. 块级元素水平居中：左右 margin 设为 auto */
.container {
  width: 800px;
  margin: 0 auto;   /* 上下 0，左右自动平分 = 居中 */
}

/* 2. margin 合并现象：
      相邻两个块级元素的上下 margin 会"合并"取较大值，
      不会叠加。上盒子的 margin-bottom: 30px
      + 下盒子的 margin-top: 20px = 实际间距 30px */`},{type:"warn",content:'margin 合并只发生在**垂直方向**的相邻块级元素之间；padding 没有"合并"一说，但会把盒子撑大，注意总宽度计算。'}]},{id:"css-border",title:"4.3 边框、圆角与轮廓",sections:[{type:"text",content:"边框 border 是盒子的描边；圆角 border-radius 能把方盒子变圆、甚至变圆球，是美化页面的利器。"},{type:"code",title:"边框与圆角",lang:"css",code:`div {
  /* 边框三要素：宽度 样式 颜色 */
  border: 1px solid #ccc;

  /* 常见样式：solid 实线 / dashed 虚线 / dotted 点线 / none 无 */

  /* 只给某一边加边框 */
  border-bottom: 2px solid #2563eb;

  /* 圆角：数值越大越圆 */
  border-radius: 8px;       /* 四个角都是 8px */
  border-radius: 8px 0 0 0; /* 只圆左上角 */
  border-radius: 50%;       /* 正方形变圆球 */
  border-radius: 18px 18px 0 0; /* 顶部圆角卡片 */
}

/* 轮廓 outline：不占空间的"外描边"，常用于表单焦点 */
input:focus {
  outline: 2px solid #2563eb;
}

/* 去掉轮廓（记得提供其他焦点样式） */
button { outline: none; }`},{type:"tip",content:"`border-radius: 50%` 与 `999px` 都能做圆形/胶囊形，前者适合正方形，后者适合长条（如标签、按钮）。"}]},{id:"css-box-sizing",title:"4.4 box-sizing：盒子到底多大",sections:[{type:"text",content:"默认情况下（`content-box`），`width` 只算内容区，加上 padding 和 border 后，**盒子实际占的宽度会更大**。这常让布局算不准。"},{type:"code",title:"两种盒模型的区别",lang:"css",code:`/* 默认：content-box，width 只包含内容 */
/* 实际宽度 = 200 + 20*2 + 1*2 = 242px */
.box1 {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 1px solid #333;
}

/* border-box：width 包含内容 + padding + border */
/* 实际宽度 = 200px，所见即所得 */
.box2 {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 1px solid #333;
}

/* 工程实践：全局改成 border-box，一劳永逸 */
* {
  box-sizing: border-box;
}`},{type:"list",title:"要点",items:["`content-box`：width = 内容宽度（传统模式，越用越宽）","`border-box`：width = 整个盒子宽度（改 padding 不会撑大盒子）","现代项目几乎**全局使用 `border-box`**，计算简单直觉"]}]},{id:"css-shadow-overflow",title:"4.5 阴影与溢出处理",sections:[{type:"text",content:'阴影让元素有"浮起来"的立体感；overflow 控制内容装不下时的表现，两者都是高频属性。'},{type:"code",title:"阴影 box-shadow",lang:"css",code:`.card {
  /* 参数：x偏移 y偏移 模糊半径 扩散半径 颜色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* 向下的柔和阴影：最常用的卡片效果 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  /* 内阴影（inset）：输入框凹陷感 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);

  /* 阴影不占空间，多个阴影逗号隔开 */
  box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.1);
}`},{type:"code",title:"溢出 overflow",lang:"css",code:`.box {
  width: 200px;
  height: 100px;

  /* visible：默认，溢出部分照常显示 */
  overflow: visible;

  /* hidden：裁掉溢出部分（做头像圆框、滚动区常用） */
  overflow: hidden;

  /* auto：装不下就出现滚动条 */
  overflow: auto;

  /* scroll：始终显示滚动条（包括横向） */
  overflow: scroll;

  /* 分开控制：横向隐藏，竖向可滚 */
  overflow-x: hidden;
  overflow-y: auto;
}`},{type:"tip",content:"`overflow: hidden` 还有一个隐藏功能：**清除浮动**、**阻止 margin 合并**（形成 BFC），后面布局章节会用到。"}]}]},{id:"css-ch5",title:"第五章 显示与定位",lessons:[{id:"css-display",title:"5.1 display 与元素类型",sections:[{type:"text",content:"元素分为**块级**和**行内**两大类，display 属性可以改变它们的排布方式，是理解布局的第一道门。"},{type:"table",title:"块级 vs 行内 vs 行内块",headers:["对比项","block 块级","inline 行内","inline-block 行内块"],rows:[["独占一行","是","否","否"],["设置宽高","有效","**无效**","有效"],["默认宽度","占满父级","由内容撑开","由内容撑开"],["典型标签","div、p、h1、ul、li","span、a、strong","img、button（本质）"]]},{type:"code",title:"display 常用取值",lang:"css",code:`a {
  /* 把行内 a 变成行内块：可以设置宽高，又不换行 */
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;  /* 单行文字垂直居中 */
  text-align: center;
}

span {
  /* 行内变块级 */
  display: block;
}

/* 两个主流布局模式（后面章节详解） */
.flex-box { display: flex; }
.grid-box { display: grid; }`},{type:"tip",content:"记忆点：行内元素设置宽高无效，想设置就先 `display: inline-block` 或 `block`。"}]},{id:"css-visibility",title:"5.2 隐藏元素的三种方式",sections:[{type:"text",content:'把元素从眼前"藏起来"有三种常用手段，它们的区别是高频面试题，实际使用场景也不同。'},{type:"table",title:"三种隐藏方式对比",headers:["方式","占不占空间","能否交互/显示子内容","能否过渡动画"],rows:[["`display: none`","不占（彻底消失）","否","不能"],["`visibility: hidden`","占（隐身但占位）","否","可以"],["`opacity: 0`","占","**能**（透明但可点击）","可以（最常用）"]]},{type:"code",title:"典型用法",lang:"css",code:`/* 彻底移除显示：菜单切换、条件渲染 */
.modal { display: none; }
.modal.open { display: block; }

/* 淡入淡出动画必须用 opacity */
.tip {
  opacity: 0;
  transition: opacity 0.3s;
}
.tip:hover {
  opacity: 1;
}`},{type:"warn",content:'`opacity: 0` 的元素**仍然可以点击和被屏幕阅读器读到**，如果想"看不见也不响应"，请用 `visibility: hidden` 或 `display: none`。'}]},{id:"css-position",title:"5.3 position 定位",sections:[{type:"text",content:"定位让元素**脱离常规排布**，可以放到页面的任意位置：悬浮按钮、固定导航、角标都靠它实现。"},{type:"table",title:"五种定位方式",headers:["取值","参考物","是否脱标","典型场景"],rows:[["`static`","无（默认值）","否","普通文档流"],["`relative`","自己原来的位置","否","做定位父级、微调位置"],["`absolute`","**最近的非 static 祖先**","是","角标、覆盖层"],["`fixed`","浏览器视口","是","固定导航、回到顶部"],["`sticky`","滚动容器","半脱离","吸顶表头"]]},{type:"code",title:"定位标准写法（子绝父相）",lang:"css",code:`/* 父级：相对定位（作为参照物，不改变自身显示） */
.card {
  position: relative;
}

/* 子级：绝对定位，贴在父级右上角 */
.badge {
  position: absolute;
  top: -8px;      /* 上边距（可以为负） */
  right: -8px;    /* 右边距 */
}

/* 固定导航：始终钉在窗口顶部 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

/* 吸顶效果：滚到顶就粘住 */
.table-head {
  position: sticky;
  top: 0;
}`},{type:"warn",content:"使用 `absolute` 前先给**父级加 `position: relative`**（子绝父相），否则元素会一直往外找，最后相对整个页面定位，位置就乱了。"}]},{id:"css-zindex",title:"5.4 z-index 与层叠顺序",sections:[{type:"text",content:"定位元素重叠时，谁在上面？`z-index` 控制堆叠顺序，数值越大越靠上，类似图层的概念。"},{type:"code",title:"z-index 基本用法",lang:"css",code:`/* 弹窗遮罩：盖住整个页面 */
.mask {
  position: fixed;
  inset: 0;            /* 四边贴满（top/right/bottom/left 的简写） */
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

/* 弹窗本体：盖在遮罩上面 */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* 居中三件套 */
  z-index: 101;
}`},{type:"list",title:"要点",items:["`z-index` **只对定位元素**（非 static）和 flex/grid 子项生效","数值不需要很大：10、100、1000 这种分层即可","元素自身的 DOM 顺序也会影响：同级未设 z-index 时，后来的在上",'如果 z-index "不生效"，多半是父级创建了独立的层叠上下文，检查父级是否设置了 opacity、transform、z-index 等']}]}]},{id:"css-ch6",title:"第六章 布局",lessons:[{id:"css-float",title:"6.1 文档流与浮动 float",sections:[{type:"text",content:'元素默认按"从上到下、从左到右"排列，这叫**文档流**。float 最初是为了实现"文字环绕图片"，后被广泛用于横向排列。'},{type:"code",title:"浮动与清除",lang:"css",code:`/* 图片浮动：文字环绕效果 */
img {
  float: left;       /* left / right / none */
  margin: 0 12px 8px 0;
}

/* 浮动的副作用：父级高度塌陷
   （子级全部浮动后，父级当子级不存在） */

/* 清除浮动方案一：父级加 overflow: hidden */
.parent {
  overflow: hidden;
}

/* 清除浮动方案二：伪元素清除法（经典写法） */
.clearfix::after {
  content: "";
  display: block;
  clear: both;      /* 左右浮动都不允许 --> 撑起父级 */
}`},{type:"list",title:"要点",items:["浮动元素**脱离文档流**，但文字会环绕它","浮动的最大坑：**父级高度塌陷**，必须清除浮动",'现代开发中 float 已基本被 Flex/Grid 取代，重点掌握"清除浮动"的思路即可']},{type:"tip",content:"看到老项目里满屏 float 不必惊讶，那也是当时的主流方案；新项目请直接用下一课的 Flex。"}]},{id:"css-flex-container",title:"6.2 Flex 布局：容器属性",sections:[{type:"text",content:"Flex（弹性布局）是现代布局的第一主力：一行代码实现横向排列、垂直居中、两端对齐。给父元素加 `display: flex`，它就成了 flex 容器，子元素自动弹性排列。"},{type:"code",title:"容器四大常用属性",lang:"css",code:`.container {
  display: flex;          /* 开启弹性布局 */

  /* 主轴方向：row 横向（默认）/ column 纵向 */
  flex-direction: row;

  /* 换行：默认 nowrap 不换行（会被压缩），wrap 换行 */
  flex-wrap: wrap;

  /* 主轴对齐（横向）：最常用的一组值 */
  justify-content: flex-start;   /* 起点（默认） */
  justify-content: center;       /* 居中 */
  justify-content: space-between;/* 两端对齐，中间平分 */
  justify-content: space-around; /* 每项两侧等距 */
  justify-content: space-evenly; /* 完全等距 */

  /* 交叉轴对齐（纵向）：垂直居中就靠它 */
  align-items: center;
  align-items: flex-start;  /* 顶部 */
  align-items: flex-end;    /* 底部 */
  align-items: stretch;     /* 拉伸铺满（默认） */

  /* 行与行的间距（多行时） */
  align-content: space-between;

  /* 项目之间的间距（新属性，很好用） */
  gap: 12px;
}`},{type:"code",title:"万能居中大法",lang:"css",code:`/* 水平垂直同时居中：Flex 之前很难，之后一行搞定 */
.parent {
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */
}`},{type:"tip",content:"记忆技巧：`justify-content` 管**主轴**（默认水平），`align-items` 管**交叉轴**（默认垂直）。"}]},{id:"css-flex-item",title:"6.3 Flex 项目属性与经典实例",sections:[{type:"text",content:'容器里的每个子元素叫 flex 项目，它们也有自己的弹性属性，尤其是 `flex: 1`，实现"剩余空间自动分配"。'},{type:"code",title:"项目常用属性",lang:"css",code:`/* flex: 1 --> 自动吃掉剩余空间（万能等分布局） */
.main {
  flex: 1;
}

.sidebar {
  /* 不放大、不缩小、固定 200px */
  flex: 0 0 200px;
}

.item {
  /* 单个项目"自己"的交叉轴对齐（覆盖容器的 align-items） */
  align-self: flex-end;

  /* 排序：数值小的在前，默认都是 0 */
  order: -1;

  /* 不许被压缩 */
  flex-shrink: 0;
}`},{type:"code",title:"经典布局：上导航 + 中主体 + 下页脚",lang:"css",code:`body {
  display: flex;
  flex-direction: column;  /* 改成纵向主轴 */
  min-height: 100vh;       /* 至少占满整个视口高 */
}

main {
  flex: 1;                 /* 中间区域自动吃掉剩余高度 */
}
/* 这样无论内容多少，页脚都贴在底部 */`},{type:"list",title:"flex 缩写速记",items:["`flex: 1` = 放大 1、缩小 1、基准 0% --> **均分剩余空间**","`flex: none` = 不放大不缩小 --> 固定尺寸","`flex: auto` = 放大缩小都行，按内容分配"]}]},{id:"css-grid",title:"6.4 Grid 布局入门",sections:[{type:"text",content:"Grid（网格布局）擅长**二维布局**：同时管行和列，做卡片列表、页面骨架比 Flex 更省事。同样写在父元素上。"},{type:"code",title:"Grid 核心用法",lang:"css",code:`.container {
  display: grid;

  /* 定义 3 列：每列等宽（1fr = 一份剩余空间） */
  grid-template-columns: 1fr 1fr 1fr;

  /* 更简洁的等分写法：自动铺满每行，每行 3 个 */
  grid-template-columns: repeat(3, 1fr);

  /* 行高定义 */
  grid-template-rows: auto;

  /* 网格间距（横竖都管） */
  gap: 16px;

  /* 不定列数的响应式写法：
     每列最少 250px，能塞几个塞几个（超好用） */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

/* 项目跨行跨列 */
.feature {
  grid-column: span 2;   /* 横跨 2 列 */
  grid-row: span 2;      /* 纵跨 2 行 */
}`},{type:"table",title:"Flex 与 Grid 怎么选",headers:["场景","推荐"],rows:[["一行/一维排列（导航、按钮组）","Flex"],["多行多列（卡片墙、相册）","Grid"],["内容多少不定、沿一个方向伸缩","Flex"],["行列结构规整、需要跨行跨列","Grid"],["两者混用完全没问题","外层 Grid，内层 Flex"]]}]}]},{id:"css-ch7",title:"第七章 进阶效果",lessons:[{id:"css-background",title:"7.1 背景样式与渐变",sections:[{type:"text",content:"背景不止是纯色：图片、平铺方式、位置、大小、渐变，组合起来能做出丰富的视觉效果。"},{type:"code",title:"背景全家桶",lang:"css",code:`.banner {
  /* 背景色 */
  background-color: #2563eb;

  /* 背景图（可与颜色共存） */
  background-image: url("bg.jpg");

  /* 平铺：no-repeat 不平铺 / repeat / repeat-x */
  background-repeat: no-repeat;

  /* 位置：关键词或百分比 */
  background-position: center;

  /* 尺寸：cover 铺满并裁剪（最常用）/ contain 完整显示 */
  background-size: cover;

  /* 固定背景：滚动页面时背景不动（视差感） */
  background-attachment: fixed;

  /* 复合简写 */
  background: #2563eb url("bg.jpg") no-repeat center / cover;
}`},{type:"code",title:"渐变背景（不用图片）",lang:"css",code:`.box {
  /* 线性渐变：方向 + 颜色列表 */
  background: linear-gradient(to right, #2563eb, #7c3aed);
  background: linear-gradient(135deg, #667eea, #764ba2);

  /* 径向渐变：从中心向外扩散 */
  background: radial-gradient(circle, #fff, #ddd);

  /* 半透明渐变叠在图片上：Banner 常用 */
  background:
    linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
    url("bg.jpg") center / cover;
}`}]},{id:"css-transition",title:"7.2 过渡 transition",sections:[{type:"text",content:"transition 让属性值的变化**平滑过渡**而不是瞬间跳变：悬停变色、卡片浮起都靠它，是最简单实用的动效。"},{type:"code",title:"过渡写法",lang:"css",code:`.card {
  background: #fff;
  transform: translateY(0);

  /* 参数：属性 时长 缓动函数 延迟 */
  transition: all 0.3s ease;

  /* 推荐写法：指明具体属性，性能更好 */
  transition: background 0.3s, transform 0.3s;
}

.card:hover {
  background: #f0f7ff;
  transform: translateY(-4px);   /* 悬停上浮 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* 缓动函数常用值 */
.ease-demo {
  transition-timing-function: ease;     /* 默认，先快后慢 */
  transition-timing-function: linear;   /* 匀速 */
  transition-timing-function: ease-in;  /* 慢进 */
  transition-timing-function: ease-out; /* 慢出 */
  transition-timing-function: cubic-bezier(.4, 0, .2, 1); /* 自定义 */
}`},{type:"list",title:"要点",items:["transition 写在**元素本身**上（不是 :hover 里），鼠标移出时才有回弹动画",'并非所有属性都能过渡：能"算中间值"的才行（颜色、尺寸、位移可以；display 不行）',"时长建议 0.2s ~ 0.4s，太快看不清，太慢显得拖沓"]}]},{id:"css-transform",title:"7.3 变换 transform",sections:[{type:"text",content:"transform 能对元素做**位移、旋转、缩放、倾斜**，且不占据布局空间、不影响其他元素，配合 transition 就是最顺滑的动效方案。"},{type:"code",title:"2D 变换四件套",lang:"css",code:`.box {
  /* 位移：x 和 y，可用 %（相对自身） */
  transform: translate(20px, -10px);

  /* 旋转：正数顺时针 */
  transform: rotate(45deg);

  /* 缩放：1 = 原始大小，1.2 放大 20% */
  transform: scale(1.2);
  transform: scale(1.2, 0.8);  /* x、y 方向分别缩放 */

  /* 倾斜 */
  transform: skew(10deg);

  /* 组合：从左到右依次执行，顺序不同结果不同 */
  transform: translate(20px) rotate(10deg) scale(1.1);
}

/* 水平垂直居中的经典用法 */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`},{type:"tip",content:"动画位移优先用 `transform: translate`，而不是 `top/left`：transform 由 GPU 加速，性能好得多。"}]},{id:"css-animation",title:"7.4 动画 animation 与 @keyframes",sections:[{type:"text",content:'transition 只能处理"两个状态之间"的变化；要**多关键帧的复杂动画**（循环跳动、多段变化），就需要 animation。'},{type:"code",title:"定义并使用动画",lang:"css",code:`/* 第一步：用 @keyframes 定义动画的关键帧 */
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* 第二步：把动画绑到元素上 */
.ball {
  /* 动画名 时长 缓动 循环次数 */
  animation: bounce 1s ease infinite;   /* infinite = 无限循环 */
}

.tips {
  animation: fadeIn 0.5s ease both;     /* both = 保持首尾状态 */
  animation-delay: 0.3s;                /* 延迟开始 */
}`},{type:"table",title:"常用动画属性",headers:["属性","作用"],rows:[["`animation-name`","关键帧名称"],["`animation-duration`","一轮时长"],["`animation-timing-function`","缓动函数（同 transition）"],["`animation-delay`","延迟"],["`animation-iteration-count`","次数：数字或 `infinite`"],["`animation-direction`","`alternate` 往返播放"],["`animation-fill-mode`","`both` 保持开始/结束状态"]]},{type:"tip",content:"做加载动画的经典组合：`rotate` 关键帧 + `infinite` 循环，几行 CSS 就有一个转圈圈效果。"}]},{id:"css-media",title:"7.5 媒体查询与响应式布局",sections:[{type:"text",content:"响应式布局让同一份代码在手机、平板、电脑上都显示良好。核心工具是**媒体查询**：满足条件时才应用某段样式。"},{type:"code",title:"媒体查询写法",lang:"css",code:`/* 基础样式：手机优先（默认就是小屏样式） */
.container {
  width: 100%;
  padding: 12px;
}

/* 平板：>= 768px 时生效 */
@media (min-width: 768px) {
  .container {
    width: 720px;
    margin: 0 auto;
  }
}

/* 桌面：>= 1024px 时生效 */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }

  .sidebar { display: block; }  /* 小屏隐藏的侧栏这时显示 */
}

/* 也可以针对横竖屏、暗色模式等条件 */
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}`},{type:"code",title:"viewport 设置（响应式第一步）",lang:"html",code:`<!-- 必须写在 head 里，否则手机会按 980px 宽渲染页面 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">`},{type:"list",title:"响应式开发套路",items:["HTML 里先加 `viewport` 的 meta 标签","全局 `box-sizing: border-box`，用 % / rem / flex / grid 布局","手机优先写基础样式，再用 `min-width` 逐级增强大屏","常用断点：768px（平板）、1024px（笔记本）、1280px（桌面）"]},{type:"tip",content:"到这里 CSS 的常用知识点已经齐全了。试着把你的 HTML 个人介绍页加上样式：导航、卡片、悬停动效、手机适配。完成后进入 **JavaScript** 的学习。"}]}]}]},op={id:"js",name:"JavaScript",short:"JS",color:"#b45309",description:"网页的大脑：负责页面的交互逻辑与数据处理",chapters:[{id:"js-ch1",title:"第一章 JS 入门",lessons:[{id:"js-what-is",title:"1.1 JavaScript 是什么",sections:[{type:"text",content:'JavaScript（简称 JS）是网页的**编程语言**。HTML 搭好骨架、CSS 化好妆之后，JS 负责"活起来"：响应用户的点击、请求数据、验证表单、更新页面内容。'},{type:"list",title:"JS 能做什么",items:["**操作页面**：点击按钮弹出窗口、切换菜单、轮播图","**处理数据**：表单校验、列表筛选、计算统计","**网络请求**：从服务器获取数据，无需刷新页面（Ajax/Fetch）","**运行环境广泛**：浏览器里是前端，服务器上（Node.js）也能跑，桌面、小程序都支持"]},{type:"code",title:"第一段 JS：点按钮弹提示",lang:"html",code:`<button onclick="alert("你点了我！")">点我</button>

<!-- 页面瞬间就"活"了：点击按钮弹出提示框 -->`},{type:"tip",content:"JS 和 Java 除了名字像，几乎是两种语言。名字带 Java 纯粹是当年的营销策略。"}]},{id:"js-usage",title:"1.2 在页面中使用 JS：script 标签",sections:[{type:"text",content:"JS 代码要写进 `<script>` 标签里（或引入外部 .js 文件），浏览器解析到 script 才会执行代码。"},{type:"code",title:"三种使用方式",lang:"html",code:`<!-- 方式一：内联脚本（写多少行都行） -->
<script>
  console.log("你好，JS！");
<\/script>

<!-- 方式二：外部文件（推荐，结构与逻辑分离） -->
<script src="main.js"><\/script>

<!-- 方式三：行内事件（只适合一两句的简单场景） -->
<button onclick="alert(1)">按钮</button>

<!-- 推荐：script 放在 body 最后，或加 defer -->
<script src="main.js" defer><\/script>`},{type:"list",title:"要点",items:["script 放在 `</body>` 前：等 HTML 都加载完再执行，避免找不到元素","现代写法加 `defer` 属性：脚本下载不阻塞页面，执行时机在文档解析完后","外部 JS 文件里**不需要**再写 `<script>` 标签，直接写代码","网页注释同样支持 `//` 单行 和 `/* */` 多行"]}]},{id:"js-console",title:"1.3 控制台：JS 的第一个朋友",sections:[{type:"text",content:'按 `F12` 打开浏览器开发者工具，切到 Console（控制台）面板——它是 JS 的"终端"，`console.log` 的内容都打印在这里，报错也在这里看。**学 JS 全程都离不开它**。'},{type:"code",title:"常用输出方式",lang:"js",code:`// 打印普通信息（用得最多）
console.log("Hello, JavaScript!");

// 可以一次打印多个值
console.log("姓名：", "小明", "年龄：", 18);

// 警告与错误信息（黄色/红色）
console.warn("这是一条警告");
console.error("这是一条错误");

// 弹窗三兄弟（调试少用，交互场景用）
alert("弹出提示框");                 // 提示
var ok = confirm("确定删除吗？");     // 确认框，返回 true/false
var name = prompt("你叫什么名字？");  // 输入框，返回输入内容或 null`},{type:"tip",content:"控制台还能直接敲代码回车执行，做实验最方便——不用写文件，输入 `1 + 1` 回车看看。"}]}]},{id:"js-ch2",title:"第二章 变量与数据类型",lessons:[{id:"js-variables",title:"2.1 变量与常量：let、const、var",sections:[{type:"text",content:'变量是存放数据的"盒子"，数据可以随时更换；常量一旦赋值就不能再改。现代 JS 使用 `let`（变量）和 `const`（常量），`var` 是老写法，认识即可。'},{type:"code",title:"let 与 const 的使用",lang:"js",code:`// let：声明变量，值可以变
let age = 18;
age = 19;           // 重新赋值，没问题

// const：声明常量，值不能变
const name = "小明";
// name = "小红";   // 报错！常量不能重新赋值

// 注意：const 的"对象内容"可以改，只是不能换对象
const user = { name: "小明" };
user.name = "小红";  // 允许
// user = {};       // 报错

// 一行声明多个
let a = 1, b = 2, c = 3;`},{type:"table",title:"let / const / var 对比",headers:["对比项","let","const","var（旧）"],rows:[["重复声明","不允许","不允许","允许（容易出错）"],["修改值","可以","不行","可以"],["块级作用域","有","有","没有"],["使用建议","默认用它","声明后不改就它","**别再用**"]]},{type:"list",title:"命名规则",items:["只能包含字母、数字、下划线、`$`，且**不能以数字开头**","区分大小写：`age` 和 `Age` 是两个变量","不能用关键字（如 `if`、`let`、`function`）","约定**驼峰命名**：`userName`、`totalCount`、`onClickHandler`"]}]},{id:"js-data-types",title:"2.2 数据类型总览与 typeof",sections:[{type:"text",content:"JS 的数据分两大类：**基本类型**和**引用类型（对象）**。用 `typeof` 可以查看一个值的类型。"},{type:"table",title:"七种数据类型",headers:["类型","说明","示例"],rows:[["`number`","数字（整数小数都算）","`1`、`3.14`、`-10`"],["`string`","字符串",'`"hello"`、`"你好"`'],["`boolean`","布尔：真或假","`true`、`false`"],["`undefined`","声明了但没赋值","`let a;`"],["`null`",'空值，通常主动表示"没有"',"`null`"],["`object`","对象、数组、日期等","`{}`、`[]`"],["`symbol`","唯一标识符（进阶）","`Symbol()`"]]},{type:"code",title:"typeof 实操",lang:"js",code:`console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"（历史遗留的 bug，记住即可）
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"（数组也是对象）
console.log(typeof function(){}); // "function"`},{type:"warn",content:'`typeof null` 返回 `"object"` 是 JS 出名的历史 bug，判断 null 请用 `value === null`。'}]},{id:"js-number-string",title:"2.3 数字与字符串基础",sections:[{type:"text",content:"数字类型要注意几个特殊值；字符串是日常打交道最多的类型，先掌握基本操作，更多方法第七章细讲。"},{type:"code",title:"数字类型",lang:"js",code:`let n1 = 10;       // 整数
let n2 = 3.14;     // 小数

// 特殊数字值
console.log(10 / 0);   // Infinity（无穷）
console.log("abc" * 2); // NaN（Not a Number，非法运算）
console.log(isNaN("abc" * 2)); // true，NaN 与任何值都不相等

// 常用：数字与字符串相加会拼接
console.log(1 + 1);     // 2
console.log("1" + 1);   // "11"（字符串拼接！）`},{type:"code",title:"字符串基础",lang:"js",code:`let s1 = "单引号也可以";
let s2 = "双引号";

// 引号嵌套：外双内单 或 外单内双
let s3 = "他说：\\"你好\\"";
let s4 = "他说：";
console.log(s1.length);   // 长度：6（中文也按 1 个算）
console.log(s4.length);   // 5

// 字符串拼接用 +
let msg = "我是" + "小明" + "，今年" + 18 + "岁";
console.log(msg);  // 我是小明，今年18岁`},{type:"tip",content:'拼接字符串记一个坑：**任何值 + 字符串都会变成字符串拼接**，`"1" + 1` 是 "11" 而不是 2。'}]},{id:"js-template-literal",title:"2.4 模板字符串：拼接的优雅写法",sections:[{type:"text",content:"用 `+` 拼接变量多了非常难读。ES6 的**模板字符串**用反引号（`` ` ``）包裹，变量直接写在 `${}` 里，清晰又强大。"},{type:"code",title:"对比：加号拼接 vs 模板字符串",lang:"js",code:`let name = "小明";
let age = 18;

// 老写法：引号、加号满天飞
var msg1 = "我是" + name + "，今年" + age + "岁";

// 新写法：反引号 + \${变量}
let msg2 = "我是" + name + "，今年" + age + "岁";

// 模板字符串支持任意表达式
let price = 99;
let info = "总价：\${price * 2} 元";   // 总价：198 元

// 可以直接换行，保持格式
let html = "
  <ul>
    <li>" + name + "</li>
    <li>" + age + " 岁</li>
  </ul>
";`},{type:"list",title:"要点",items:["必须用**反引号** `` ` `` 包裹，普通引号没有此功能","变量/表达式写法：`${...}`，大括号里可以运算、调用函数","天然支持多行文本，不需要 `\\n`","本站的代码块里为了展示用加号代替了嵌套反引号，自己写代码请放心用 `${}`"]}]},{id:"js-conversion",title:"2.5 类型转换与 == / ===",sections:[{type:"text",content:'JS 是"弱类型"语言，类型经常自动转换。显式转换靠 `Number()`、`String()`、`Boolean()`；比较时**强烈建议用 `===` 严格相等**。'},{type:"code",title:"显式转换",lang:"js",code:`// 转数字
Number("123");     // 123
Number("12.5");    // 12.5
Number("abc");     // NaN
Number("");        // 0
parseInt("18px");  // 18（解析开头的整数）
parseFloat("3.14m"); // 3.14（解析小数）

// 转字符串
String(123);       // "123"
(123).toString();  // "123"

// 转布尔：空值都是 false，其余 true
Boolean(0);        // false
Boolean("");       // false
Boolean(null);     // false
Boolean(undefined);// false
Boolean("0");      // true（非空字符串）`},{type:"code",title:"== 与 === 的区别",lang:"js",code:`// == 会先转换类型再比较（容易出错）
console.log(1 == "1");    // true
console.log(0 == "");     // true
console.log(null == undefined); // true

// === 类型和值都必须一样（推荐）
console.log(1 === "1");   // false
console.log(1 === 1);     // true

// 结论：永远使用 === 和 !==`},{type:"warn",content:"记住铁律：**判断相等一律用 `===`**，`==` 的隐式转换规则坑过无数人。"}]}]},{id:"js-ch3",title:"第三章 运算符与流程控制",lessons:[{id:"js-operators",title:"3.1 运算符全家桶",sections:[{type:"text",content:"运算符负责计算和判断，分算术、赋值、比较、逻辑几大类，绝大多数和数学课上的直觉一致。"},{type:"code",title:"算术与赋值运算符",lang:"js",code:`// 算术：+ - * / %（取余） **（幂）
console.log(10 % 3);   // 1（取余，判断奇偶常用）
console.log(2 ** 10);  // 1024（2 的 10 次方）

// 自增自减
let i = 5;
i++;   // i 变成 6（相当于 i = i + 1）
i--;   // i 变回 5

// 复合赋值
let n = 10;
n += 5;  // n = n + 5 --> 15
n -= 3;  // 12
n *= 2;  // 24
n /= 4;  // 6`},{type:"code",title:"逻辑运算符与短路",lang:"js",code:`// 与 &&：都真才真
// 或 ||：有一个真就真
// 非 !：取反
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

// 短路技巧 1：|| 给默认值（左边是假值就用右边）
let name = "";
let nick = name || "匿名用户";   // "匿名用户"

// 短路技巧 2：&& 满足条件才执行
let user = { name: "小明" };
user && console.log(user.name);

// ES2020 新增：?. 可选链（存在才访问）
// user.profile?.age --> profile 不存在也不报错，返回 undefined`}]},{id:"js-if",title:"3.2 if 条件语句",sections:[{type:"text",content:'条件语句让程序"看情况办事"：满足条件才执行某段代码，这是所有逻辑判断的地基。'},{type:"code",title:"if 的三种形态",lang:"js",code:`// 1. 单分支
let age = 20;
if (age >= 18) {
  console.log("已成年");
}

// 2. 双分支
let score = 55;
if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

// 3. 多分支（从上往下匹配，命中即止）
score = 85;
if (score >= 90) {
  console.log("优秀");
} else if (score >= 80) {
  console.log("良好");     // 命中这条
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}`},{type:"list",title:"假值速记",items:["条件里的值会被转成布尔：以下六个是**假值**",'`false`、`0`、`""`（空字符串）、`null`、`undefined`、`NaN`','其余全是真值（包括 `"0"`、`[]`、`{}`）']},{type:"tip",content:'三元表达式是 if/else 的简写：`var result = score >= 60 ? "及格" : "不及格";`，简单判断时很好用。'}]},{id:"js-switch",title:"3.3 switch 语句",sections:[{type:"text",content:"对**同一个变量的多种取值**分别处理时，switch 比 if/else 更清晰。别忘了每个 case 后面写 `break`。"},{type:"code",title:"switch 用法",lang:"js",code:`let day = 3;

switch (day) {
  case 1:
    console.log("星期一");
    break;
  case 2:
    console.log("星期二");
    break;
  case 3:
    console.log("星期三");   // 命中这里
    break;
  default:
    console.log("无效的日期");  // 都不匹配时执行
}

// 不写 break 的后果：穿透到下一个 case 继续执行！
// 有时反而利用穿透：
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("工作日");
    break;
  case 6:
  case 7:
    console.log("周末");
    break;
}`},{type:"warn",content:'switch 使用**严格相等（===）**比较，`case "3"` 不会匹配数字 3。'}]},{id:"js-for",title:"3.4 for 循环",sections:[{type:"text",content:'循环让一段代码**重复执行**。for 循环最经典，适合"知道要循环几次"的场景，比如遍历数组。'},{type:"code",title:"for 循环结构与遍历数组",lang:"js",code:`// 结构：for (初始; 条件; 更新)
for (let i = 1; i <= 5; i++) {
  console.log("第 " + i + " 次");
}

// 遍历数组：最常用的套路
let fruits = ["苹果", "香蕉", "橘子"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// ES6 的 for...of：直接拿值，更简洁
for (const fruit of fruits) {
  console.log(fruit);
}`},{type:"list",title:"执行顺序",items:["① 初始化（只执行一次）","② 判断条件 --> true 执行循环体 / false 结束","③ 执行循环体","④ 执行更新表达式，回到 ②","括号里的两个分号**不能省**"]}]},{id:"js-while",title:"3.5 while 与 do...while",sections:[{type:"text",content:'while 适合"**不知道循环几次，满足条件就一直做**"的场景，比如掷骰子直到掷出 6。'},{type:"code",title:"while 与 do...while",lang:"js",code:`// while：先判断再执行（可能一次都不执行）
let count = 0;
while (count < 3) {
  console.log("count = " + count);
  count++;   // 千万别忘了更新条件，否则死循环！
}

// do...while：先执行一次再判断（至少执行一次）
let input;
do {
  // 模拟用户输入
  input = "y";
  console.log("你输入了：" + input);
} while (input !== "y");`},{type:"warn",content:"条件永远为真的循环叫**死循环**，会卡死页面。写 while 时确认循环体内有让条件趋向 false 的代码。"}]},{id:"js-break-nest",title:"3.6 break、continue 与循环嵌套",sections:[{type:"text",content:"`break` 提前结束整个循环，`continue` 跳过本轮进入下一轮；循环里再套循环可以处理二维数据。"},{type:"code",title:"break 与 continue",lang:"js",code:`// break：找到就停
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;          // 到 5 直接结束整个循环
  }
  console.log(i);   // 只输出 1 2 3 4
}

// continue：跳过不要的
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;       // 跳过偶数
  }
  console.log(i);   // 输出 1 3 5 7 9
}`},{type:"code",title:"嵌套循环：九九乘法表",lang:"js",code:`// 外层控制行，内层控制列
for (let i = 1; i <= 9; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + "x" + i + "=" + (i * j) + "\\t";
  }
  console.log(line);
}`}]}]},{id:"js-ch4",title:"第四章 函数与作用域",lessons:[{id:"js-function-basic",title:"4.1 函数基础：封装一段可复用的代码",sections:[{type:"text",content:"函数把一段代码**打包命名**，随取随用。写函数三步：定义（参数）-> 调用（传参）-> 返回（结果）。"},{type:"code",title:"函数的定义与调用",lang:"js",code:`// 定义：function 函数名(参数)
function greet(name) {
  return "你好，" + name + "!";   // return 把结果交出去
}

// 调用：函数名(实参)
let msg = greet("小明");
console.log(msg);        // 你好，小明!

// 多个参数
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));  // 8

// 没写 return 的函数默认返回 undefined
function logIt(x) {
  console.log(x);
}
console.log(logIt(1));   // 先打印 1，再打印 undefined`},{type:"list",title:"要点",items:["**参数**是函数的输入占位，调用时传入具体值","**return** 立即结束函数并交出结果，后面的代码不再执行","函数只有**被调用**才会执行，定义时不执行",'函数是"一等公民"：可以赋值给变量、当参数传递']}]},{id:"js-arrow-function",title:"4.2 函数表达式与箭头函数",sections:[{type:"text",content:"除了 function 声明，函数还能写成**表达式**和更简洁的**箭头函数**（ES6）。回调场景里箭头函数是绝对主流。"},{type:"code",title:"三种写法对比",lang:"js",code:`// 1. 函数声明
function double(n) {
  return n * 2;
}

// 2. 函数表达式：函数没有名字，赋给变量
var double2 = function (n) {
  return n * 2;
};

// 3. 箭头函数
var double3 = (n) => {
  return n * 2;
};

// 箭头函数简化：只有一个参数可省括号，直接 return 可省大括号
var double4 = n => n * 2;

// 两个参数、无参数
var add = (a, b) => a + b;
var hello = () => console.log("hi");`},{type:"list",title:"箭头函数使用注意",items:["语法糖链：`(参数) => 表达式` 自动 return 该表达式的值","箭头函数**没有自己的 this**，继承外层作用域（后面对象章节会体会）","适合当**回调函数**：数组方法、事件处理里大量使用","不适合做对象方法（this 指向不符合预期）"]}]},{id:"js-scope",title:"4.3 作用域与变量查找",sections:[{type:"text",content:'作用域决定变量"**在哪里可见**"。JS 有全局作用域、函数作用域和块级作用域（let/const），查找变量时由内向外逐层找。'},{type:"code",title:"作用域示例",lang:"js",code:`let global = "全局变量，哪里都能用";

function outer() {
  let outerVar = "函数变量，只在函数里可用";

  function inner() {
    // 由内向外找：inner 没有 --> outer 有 --> 用它
    console.log(outerVar);
    console.log(global);   // 也能找到全局的
  }
  inner();
}

// 块级作用域：{} 内声明的 let/const 出了块就不可见
if (true) {
  let blockVar = "块内变量";
}
// console.log(blockVar); // 报错：blockVar is not defined`},{type:"code",title:"var 的经典坑：循环里的函数",lang:"js",code:`// var 没有块级作用域，三次都打印 3
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);   // 3 3 3
  }, 100);
}

// let 每轮创建新的 i，正常打印 0 1 2
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j);   // 0 1 2
  }, 100);
}`},{type:"tip",content:"这节课是理解 JS 的分水岭。记住一句话：**let/const 在哪个大括号里声明，就只在那个大括号里活着**。"}]}]},{id:"js-ch5",title:"第五章 数组",lessons:[{id:"js-array-basic",title:"5.1 数组基础与遍历",sections:[{type:"text",content:"数组是**有序的数据集合**，把一组数据装进一个变量里。它是 JS 中使用频率最高的数据结构。"},{type:"code",title:"数组的创建与访问",lang:"js",code:`// 创建数组（字面量写法，推荐）
let fruits = ["苹果", "香蕉", "橘子"];
let mixed = [1, "文字", true, null];  // 可以混装任意类型

// 访问：下标从 0 开始
console.log(fruits[0]);   // 苹果
console.log(fruits[2]);   // 橘子
console.log(fruits[5]);   // undefined（越界不报错）

// length：元素个数
console.log(fruits.length);  // 3

// 修改
fruits[1] = "葡萄";
console.log(fruits);  // ["苹果", "葡萄", "橘子"]`},{type:"code",title:"三种遍历方式",lang:"js",code:`let arr = ["a", "b", "c"];

// 1. for 循环（能拿到下标）
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 2. for...of（只要值时最简洁）
for (const item of arr) {
  console.log(item);
}

// 3. forEach（数组自带的方法）
arr.forEach(function (item, index) {
  console.log(index, item);
});`}]},{id:"js-array-add-remove",title:"5.2 数组增删：push、pop、splice",sections:[{type:"text",content:"数组可随时增删元素。头尾操作用四个单词方法，**中间任意位置增删用 splice**，它是最强大的一个。"},{type:"code",title:"头尾增删四件套",lang:"js",code:`let arr = ["b", "c"];

// 尾部
arr.push("d");       // 尾部加 --> ["b", "c", "d"]
arr.pop();           // 尾部删（返回被删的） --> ["b", "c"]

// 头部
arr.unshift("a");    // 头部加 --> ["a", "b", "c"]
arr.shift();         // 头部删 --> ["b", "c"]`},{type:"code",title:"splice：任意位置增删改",lang:"js",code:`let arr = ["a", "b", "c", "d"];

// 语法：splice(起始下标, 删除个数, 要插入的元素...)

// 删除：从下标 1 开始删 2 个
arr.splice(1, 2);
console.log(arr);       // ["a", "d"]

// 插入：下标 1 处删 0 个，插入 x 和 y
arr.splice(1, 0, "x", "y");
console.log(arr);       // ["a", "x", "y", "d"]

// 替换：删 1 个的同时插入新的
arr.splice(1, 1, "z");
console.log(arr);       // ["a", "z", "y", "d"]`}]},{id:"js-array-search",title:"5.3 数组查找、切割与排序",sections:[{type:"text",content:'这组方法负责"找到目标"、"变成字符串"、"重新排列"，是处理列表数据的日常工具。'},{type:"code",title:"查找与转换",lang:"js",code:`let arr = [3, 1, 4, 1, 5];

// 查找
console.log(arr.indexOf(4));     // 2（首次出现的下标，找不到返回 -1）
console.log(arr.includes(5));    // true（是否包含）

// 截取：slice(起, 止)，不含止，不改变原数组
console.log(arr.slice(1, 3));    // [1, 4]
console.log(arr);                // 原数组没变

// 合并与反转
let a = [1, 2].concat([3, 4]);   // [1, 2, 3, 4]
[1, 2, 3].reverse();             // [3, 2, 1]

// 转字符串
console.log([1, 2, 3].join("-")); // "1-2-3"`},{type:"code",title:"排序 sort 的坑与正解",lang:"js",code:`let nums = [10, 1, 5, 2];

// 坑：sort 默认按"字符串"排序
console.log(nums.sort());      // [1, 10, 2, 5] 不是想要的！

// 正解：传入比较函数
nums.sort(function (a, b) {
  return a - b;   // 升序（b - a 则是降序）
});
console.log(nums);  // [1, 2, 5, 10]

// 对象数组排序
let users = [
  { name: "小明", age: 20 },
  { name: "小红", age: 18 }
];
users.sort((x, y) => x.age - y.age);  // 按年龄升序`},{type:"warn",content:"`sort` 和 `reverse` 会**修改原数组**；`slice`、`concat`、`join` 不修改。分不清时先打印原数组验证。"}]},{id:"js-array-hof",title:"5.4 高阶方法：map、filter、reduce",sections:[{type:"text",content:'这三个方法接受**函数作为参数**，对数组做"加工"，是 ES6 后处理数据的主力，也是箭头函数的主场。'},{type:"code",title:"map：每个元素加工一遍",lang:"js",code:`let nums = [1, 2, 3];

// 全部乘 2，返回新数组
let doubled = nums.map(n => n * 2);
console.log(doubled);   // [2, 4, 6]

// 取对象的部分字段
let users = [
  { name: "小明", age: 20 },
  { name: "小红", age: 18 }
];
let names = users.map(u => u.name);
console.log(names);   // ["小明", "小红"]`},{type:"code",title:"filter：筛选符合条件的",lang:"js",code:`let nums = [5, 12, 8, 130, 44];

// 保留大于 10 的
let big = nums.filter(n => n > 10);
console.log(big);   // [12, 130, 44]

let users = [
  { name: "小明", age: 20 },
  { name: "小红", age: 17 }
];
let adults = users.filter(u => u.age >= 18);
console.log(adults.length);   // 1`},{type:"code",title:"reduce：汇总成一个值",lang:"js",code:`let nums = [1, 2, 3, 4];

// 求和：prev 是累加结果，next 是当前元素
// 0 是初始值
let sum = nums.reduce((prev, next) => prev + next, 0);
console.log(sum);   // 10

// find：找到第一个符合条件的元素（返回元素本身）
let first = nums.find(n => n > 2);
console.log(first);   // 3

// some / every：只要有一个 / 全部
console.log(nums.some(n => n > 3));   // true
console.log(nums.every(n => n > 0));  // true`},{type:"tip",content:"三个方法都**不改变原数组**，都返回新数据。链式调用很常见：`arr.filter(...).map(...)`。"}]}]},{id:"js-ch6",title:"第六章 对象",lessons:[{id:"js-object-basic",title:"6.1 对象基础：属性与方法的集合",sections:[{type:"text",content:'对象用**键值对**描述一个"东西"：名字、年龄、会做什么。数组管"一堆同类的值"，对象管"一个东西的多方面信息"。'},{type:"code",title:"对象的创建与读写",lang:"js",code:`// 创建对象：大括号 + 属性名: 属性值
let user = {
  name: "小明",
  age: 18,
  isStudent: true,
  hobbies: ["篮球", "游戏"],        // 属性值可以是数组
  sayHi: function () {              // 属性值是函数时叫"方法"
    console.log("大家好，我是 " + this.name);  // this 指向当前对象
  }
};

// 读取属性：点语法 或 方括号
console.log(user.name);      // 小明
console.log(user["age"]);    // 18（方括号里是字符串）

// 修改 / 新增
user.age = 20;
user.email = "xm@test.com";  // 原本没有，就是新增

// 删除
delete user.isStudent;

// 调用方法
user.sayHi();   // 大家好，我是 小明`},{type:"list",title:"要点",items:['属性名一般不加引号；含特殊字符时加引号：`"my-name": 1`',"点语法取不到**变量做属性名**的值，那种情况用方括号：`obj[key]`","`this` 在方法里指向**调用方法的那个对象**","访问不存在的属性得到 `undefined`，不报错"]}]},{id:"js-object-traverse",title:"6.2 对象遍历、解构与展开",sections:[{type:"text",content:"遍历对象要借助 `Object.keys` 等工具；ES6 的解构和展开运算符让对象操作极其顺手，在 Vue/React 项目里天天见。"},{type:"code",title:"遍历对象",lang:"js",code:`let user = { name: "小明", age: 18, city: "北京" };

// 方式一：for...in 遍历所有键
for (const key in user) {
  console.log(key, user[key]);
}

// 方式二：Object.keys 拿到键数组再遍历（更常用）
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

// Object.values / Object.entries
console.log(Object.values(user));   // ["小明", 18, "北京"]
console.log(Object.entries(user));  // [["name","小明"], ["age",18], ...]`},{type:"code",title:"解构与展开（ES6 明星语法）",lang:"js",code:`let user = { name: "小明", age: 18 };

// 解构：一次性取出多个属性存成变量
let { name, age } = user;
console.log(name, age);   // 小明 18

// 展开运算符：复制对象并覆盖/新增属性
let updated = { ...user, age: 20 };
console.log(updated);   // { name: "小明", age: 20 }

// 数组同样支持
let arr = [1, 2, 3];
let copy = [...arr, 4];   // [1, 2, 3, 4]

// 解构函数参数（Vue 组件里超常见）
function showUser({ name, age }) {
  console.log(name + " " + age + " 岁");
}
showUser(user);   // 小明 18 岁`},{type:"tip",content:'记住高频套路：**改对象前先展开复制**（`{ ...obj, 新值 }`），不直接改原对象，这叫"不可变更新"，主流框架都这么干。'}]}]},{id:"js-ch7",title:"第七章 字符串、数学与日期",lessons:[{id:"js-string-methods",title:"7.1 字符串常用方法",sections:[{type:"text",content:"字符串方法负责查找、截取、替换、拆分。**注意：所有方法都不改变原字符串**，而是返回新字符串。"},{type:"code",title:"常用方法一览",lang:"js",code:`let s = "Hello JavaScript";

// 长度与访问
console.log(s.length);            // 15
console.log(s[0]);                // "H"
console.log(s.charAt(0));         // "H"

// 查找
console.log(s.indexOf("Script")); // 7（找不到返回 -1）
console.log(s.includes("Java"));  // true
console.log(s.startsWith("He"));  // true

// 截取：slice(起, 止)，支持负数（倒数）
console.log(s.slice(0, 5));       // "Hello"
console.log(s.slice(-6));         // "Script"
console.log(s.substring(0, 5));   // "Hello"（不支持负数）

// 替换（只替换第一个匹配）
console.log(s.replace("Java", "Type"));  // "Hello TypeScript"

// 大小写
console.log(s.toUpperCase());  // 全大写
console.log(s.toLowerCase());  // 全小写

// 去两端空白（处理用户输入必备）
console.log("  hi  ".trim());  // "hi"

// 拆分成数组
console.log("a,b,c".split(","));  // ["a", "b", "c"]`},{type:"tip",content:"高频组合：`input.trim()` 清理输入 --> `includes` 判断 --> `split` 拆开处理。"}]},{id:"js-math",title:"7.2 Math 数学对象",sections:[{type:"text",content:"Math 是内置的数学工具箱：取整、绝对值、随机数、最大最小值，不需要创建，直接 `Math.xxx` 使用。"},{type:"code",title:"常用 Math 方法",lang:"js",code:`// 取整三兄弟
console.log(Math.round(4.5));  // 5（四舍五入）
console.log(Math.floor(4.9));  // 4（向下取整）
console.log(Math.ceil(4.1));   // 5（向上取整）

console.log(Math.abs(-3));     // 3（绝对值）
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1

// 随机数：0 ~ 1 之间的小数（不含 1）
console.log(Math.random());

// 经典公式：随机整数 [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 10));   // 随机 1~10，掷骰子！

// 随机点名
let names = ["小明", "小红", "小刚"];
let lucky = names[Math.floor(Math.random() * names.length)];
console.log(lucky);`}]},{id:"js-date",title:"7.3 Date 日期对象",sections:[{type:"text",content:"Date 对象处理日期时间。注意**月份从 0 开始**（0 = 一月），这是出了名的坑。"},{type:"code",title:"Date 基本用法",lang:"js",code:`// 当前时间
let now = new Date();
console.log(now);

// 获取各部分
console.log(now.getFullYear());  // 年 2026
console.log(now.getMonth());     // 月 0~11（！要 +1 才是真实月份）
console.log(now.getDate());      // 日
console.log(now.getDay());       // 星期 0（周日）~6（周六）
console.log(now.getHours());     // 时
console.log(now.getMinutes());   // 分
console.log(now.getSeconds());   // 秒

// 格式化为 常见样式
function format(date) {
  const pad = n => String(n).padStart(2, "0");
  return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) +
    " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
}
console.log(format(now));   // 例如 2026-08-30 14:05

// 时间戳（毫秒数，常用于计算、排序）
console.log(Date.now());`},{type:"tip",content:"实际项目里更推荐用 `dayjs` 等日期库处理复杂需求，但 Date 的基本操作是必须懂的底子。"}]}]},{id:"js-ch8",title:"第八章 DOM 与事件",lessons:[{id:"js-dom-get",title:"8.1 DOM：用 JS 选中页面元素",sections:[{type:"text",content:"DOM（文档对象模型）把 HTML 变成 JS 可操作的**对象树**。操作页面的第一步永远是：**选中元素**。"},{type:"code",title:"获取元素的两组方法",lang:"js",code:`// 【推荐】querySelector 系列：CSS 选择器语法，现代主流
const box = document.querySelector(".box");     // 第一个匹配的
const items = document.querySelectorAll("li");  // 所有匹配的（NodeList）
const btn = document.querySelector("#submit-btn");

// 【传统】按 id / 类名 / 标签名
const el = document.getElementById("app");
const list = document.getElementsByClassName("item");
const divs = document.getElementsByTagName("div");

// 遍历 querySelectorAll 的结果
items.forEach(function (item) {
  console.log(item.textContent);
});`},{type:"list",title:"要点",items:['`querySelector` 参数就是 **CSS 选择器**：`".a"`、`"#b"`、`"div > p"`','`querySelectorAll` 返回的是"伪数组"，可以用 `forEach`',"选不到元素返回 `null`，后续操作前最好先判断","脚本尽量写在 `</body>` 前，保证元素已经存在"]}]},{id:"js-dom-modify",title:"8.2 修改内容、样式与属性",sections:[{type:"text",content:"选中元素后就能为所欲为：改文字、改样式、改属性。这三件事是 DOM 操作的日常。"},{type:"code",title:"内容、样式、属性",lang:"js",code:`const title = document.querySelector("h1");

// ---- 内容 ----
title.textContent = "新标题";     // 纯文本（安全，推荐）
title.innerHTML = "新<b>标题</b>"; // 会解析 HTML 标签（慎防注入）

// ---- 样式：style 属性（驼峰命名） ----
title.style.color = "red";
title.style.backgroundColor = "#eee";  // CSS 里的 background-color

// ---- 类名：classList（比直接改 className 好用） ----
title.classList.add("active");     // 加类
title.classList.remove("active");  // 删类
title.classList.toggle("dark");    // 有则删无则加（开关）
title.classList.contains("dark");  // 是否有 --> true/false

// ---- 属性 ----
const img = document.querySelector("img");
img.src = "new.png";
img.alt = "新图片";
img.setAttribute("data-id", "1001");  // 通用设置
console.log(img.getAttribute("src"));`},{type:"tip",content:"改样式优先用 `classList` 加减类名（样式写在 CSS 里），而不是一行行改 `style`，代码更整洁。"}]},{id:"js-dom-create",title:"8.3 创建与删除节点",sections:[{type:"text",content:'列表渲染、动态弹窗都靠"**创建元素 --> 设置内容 --> 插入页面**"三步曲。'},{type:"code",title:"动态创建元素",lang:"js",code:`// 1. 创建一个 li
const li = document.createElement("li");
li.textContent = "新任务";
li.classList.add("todo-item");

// 2. 找到父元素，插入
const list = document.querySelector("ul");
list.appendChild(li);        // 加到最后
list.prepend(li);            // 加到最前（新写法）

// 在某个元素前面插入
const first = list.firstElementChild;
list.insertBefore(li, first);

// 3. 删除元素（新写法，元素自己删自己）
li.remove();

// 老写法：父元素.removeChild(子元素)
list.removeChild(li);`},{type:"code",title:"实战：渲染一个待办列表",lang:"js",code:`const todos = ["写作业", "看书", "跑步"];
const list = document.querySelector("#todo-list");

// 清空旧内容
list.innerHTML = "";

// 循环生成 li 并插入
todos.forEach(function (text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});`}]},{id:"js-events",title:"8.4 事件处理：addEventListener",sections:[{type:"text",content:"事件是 JS 与用户交互的核心：**点击、输入、滚动**都通过监听事件来响应。标准写法是 `addEventListener`。"},{type:"code",title:"事件监听标准写法",lang:"js",code:`const btn = document.querySelector("#btn");

// addEventListener("事件名", 处理函数)
btn.addEventListener("click", function () {
  console.log("按钮被点击了");
});

// 箭头函数写法
btn.addEventListener("click", (e) => {
  console.log("事件对象：", e);
});

// 一个元素可以绑定多个同类事件
btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2);  // 两个都会执行

// 移除监听（必须传入同一个函数引用）
function handler1() { console.log("hi"); }
btn.removeEventListener("click", handler1);`},{type:"code",title:"事件对象 e 的常用信息",lang:"js",code:`document.addEventListener("click", function (e) {
  console.log(e.target);        // 实际被点击的元素
  console.log(e.type);          // 事件类型 "click"
  console.log(e.clientX, e.clientY); // 鼠标坐标
});

// 阻止默认行为：比如阻止 a 跳转、表单提交刷新
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();   // 页面就不会刷新了
  console.log("自己处理提交逻辑");
});`}]},{id:"js-event-types",title:"8.5 常见事件类型",sections:[{type:"table",title:"必须认识的事件",headers:["分类","事件名","触发时机"],rows:[["鼠标","`click`","点击"],["鼠标","`dblclick`","双击"],["鼠标","`mouseenter` / `mouseleave`","鼠标移入 / 移出"],["表单","`input`","输入内容变化（每敲一个字触发）"],["表单","`change`","值改变且失焦后"],["表单","`focus` / `blur`","获得焦点 / 失去焦点"],["表单","`submit`","表单提交"],["键盘","`keydown` / `keyup`","按下 / 松开按键"],["窗口","`scroll`","页面滚动"],["窗口","`resize`","窗口大小改变"],["文档","`DOMContentLoaded`","HTML 加载解析完成（比 load 早）"]]},{type:"code",title:"实战：实时搜索框 + 键盘事件",lang:"js",code:`const input = document.querySelector("#search");
const tip = document.querySelector("#tip");

// input 事件：边输入边响应
input.addEventListener("input", function () {
  const val = this.value.trim();   // this 指向当前元素
  tip.textContent = val ? "正在搜索：" + val : "请输入关键词";
});

// 回车键触发搜索
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("搜索：", this.value);
  }
});`}]},{id:"js-event-delegate",title:"8.6 事件冒泡与事件委托",sections:[{type:"text",content:"点击子元素时，事件会像水泡一样**逐级向上传播**到父级，这叫冒泡。利用它，可以在父元素上统一监听子元素的事件——这就是**事件委托**，列表场景的省事神器。"},{type:"code",title:"事件委托：一个监听管所有子项",lang:"js",code:`<!-- HTML：一个 ul，li 可以动态增删 -->
<ul id="list">
  <li data-id="1">任务一</li>
  <li data-id="2">任务二</li>
</ul>`},{type:"code",lang:"js",title:"委托写法与 e.target",code:`const list = document.querySelector("#list");

// 只在父元素上监听一次
list.addEventListener("click", function (e) {
  // e.target 是真正被点的子元素
  if (e.target.tagName === "LI") {
    console.log("点击了任务：", e.target.dataset.id);
    e.target.remove();   // 点击删除该条
  }
});

// 之后 JS 动态加进来的 li，
// 不用再单独绑事件，也自动生效！`},{type:"list",title:"为什么用事件委托",items:["给 1000 个 li 各绑一个监听 vs 父级绑一个：**性能差距巨大**","动态新增的子元素**自动生效**，不用重新绑定","判断真正目标用 `e.target`，注意和 `e.currentTarget`（绑定监听的元素）区分"]}]}]},{id:"js-ch9",title:"第九章 异步与浏览器",lessons:[{id:"js-timer",title:"9.1 定时器：setTimeout 与 setInterval",sections:[{type:"text",content:"定时器是最简单的**异步**代码：设个闹钟，到点执行函数。轮播图、倒计时、防抖节流都基于它。"},{type:"code",title:"两种定时器",lang:"js",code:`// setTimeout：延迟一次执行
// 参数：函数, 毫秒
const timerId = setTimeout(function () {
  console.log("3 秒后打印我");
}, 3000);

// clearTimeout：取消还没执行的定时器
clearTimeout(timerId);

// setInterval：每隔一段时间重复执行
let count = 0;
const clock = setInterval(function () {
  count++;
  console.log("第 " + count + " 秒");
  if (count >= 5) {
    clearInterval(clock);   // 必须手动停止，否则永远跑下去
  }
}, 1000);

// 实战：倒计时 10 秒
let left = 10;
const countdown = setInterval(() => {
  console.log(left--);
  if (left < 0) clearInterval(countdown);
}, 1000);`},{type:"warn",content:"`setInterval` 不会自己停，**一定要在合适时机 `clearInterval`**，否则页面关不掉它，浪费性能。"}]},{id:"js-promise",title:"9.2 异步与 Promise 入门",sections:[{type:"text",content:'JS 是**单线程**的，耗时操作（网络请求、读文件）不能卡住页面，于是采用"**异步**"：先去干活，干完再通知我。Promise 就是异步结果的"取货凭证"。'},{type:"code",title:"Promise 三种状态与基本用法",lang:"js",code:`// 创建一个 Promise（模拟 2 秒后取到数据）
const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const ok = true;
    if (ok) {
      resolve("数据来了");    // 成功：兑现
    } else {
      reject("出错了");       // 失败：拒绝
    }
  }, 2000);
});

// 使用：then 接收成功，catch 接收失败
p.then(function (data) {
  console.log(data);      // 2 秒后打印"数据来了"
}).catch(function (err) {
  console.log(err);
});

// 实际开发中最常见的 Promise：fetch 请求
fetch("https://api.example.com/list")
  .then(res => res.json())      // 把响应转成 JSON（也是异步）
  .then(data => console.log(data))
  .catch(err => console.error(err));`},{type:"list",title:"要点",items:["Promise 有三种状态：**pending 等待 / fulfilled 成功 / rejected 失败**","状态一旦改变就**不可逆**",'`then` 链式调用可以串联多个异步步骤，避免"回调地狱"']}]},{id:"js-async-await",title:"9.3 async / await：异步的最终形态",sections:[{type:"text",content:"async/await 让异步代码**长得像同步代码**，可读性最好，是现代 JS 处理异步的标准姿势。"},{type:"code",title:"async/await 写法",lang:"js",code:`// 在函数前加 async --> 函数内可以使用 await
async function loadData() {
  try {
    // await：等这个 Promise 出结果再继续往下走
    const res = await fetch("https://api.example.com/list");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    // 对应 Promise 的失败分支
    console.error("请求失败：", err);
  }
}

loadData();

// await 只能用在 async 函数里（或模块顶层）
// 对比上一课的 .then 写法：逻辑一样，但这里像同步代码一样从上往下读`},{type:"list",title:"要点",items:["`async` 函数**永远返回一个 Promise**","`await` 后面通常跟 Promise，等它出结果（成功拿值，失败抛异常）","用 `try...catch` 捕获 await 的报错","多个无依赖的请求想并行，用 `await Promise.all([p1, p2])`"]}]},{id:"js-storage",title:"9.4 浏览器存储：localStorage 与 JSON",sections:[{type:"text",content:"网页想在用户浏览器里**长期保存数据**（登录状态、用户偏好），用 localStorage。它只能存字符串，对象要先经 JSON 转换。"},{type:"code",title:"localStorage 基本用法",lang:"js",code:`// 存：键和值都必须是字符串
localStorage.setItem("theme", "dark");

// 取（不存在时返回 null）
const theme = localStorage.getItem("theme");
console.log(theme);   // "dark"

// 删除
localStorage.removeItem("theme");

// 清空本站所有存储
// localStorage.clear();

// 存对象：JSON 序列化
const user = { name: "小明", age: 18 };
localStorage.setItem("user", JSON.stringify(user));

// 取对象：JSON 反序列化
const saved = JSON.parse(localStorage.getItem("user"));
console.log(saved.name);   // 小明`},{type:"table",title:"localStorage vs sessionStorage vs Cookie",headers:["对比项","localStorage","sessionStorage","Cookie"],rows:[["生命周期","永久（手动清）","关闭标签页就没了","可设过期时间"],["容量","约 5MB","约 5MB","约 4KB"],["随请求发送给服务器","否","否","是"],["典型用途","主题、草稿、偏好","一次性临时数据","登录凭证（后端主导）"]]},{type:"warn",content:"不要把密码等敏感信息存进 localStorage，任何页面脚本都能读到它。"}]},{id:"js-bom-final",title:"9.5 BOM 浏览器对象与学习总结",sections:[{type:"text",content:"BOM（浏览器对象模型）提供操作**浏览器窗口本身**的能力：跳转、刷新、历史记录、窗口信息。最后把三大件的知识串成一个综合小项目。"},{type:"code",title:"常用 BOM 对象",lang:"js",code:`// window 是全局对象（平时省略不写）
window.alert("等价于 alert()");

// location：地址栏
console.log(location.href);    // 当前完整网址
console.log(location.search);  // ?id=100 这类查询串
location.href = "https://example.com";  // 跳转
location.reload();             // 刷新页面

// history：前进后退
history.back();    // 后退
history.forward(); // 前进

// navigator：浏览器信息
console.log(navigator.userAgent);  // 设备与浏览器标识

// screen：屏幕信息
console.log(screen.width, screen.height);`},{type:"code",title:"综合练习：记事本草稿自动保存",lang:"js",code:`<!-- HTML -->
<!-- <textarea id="editor"></textarea> -->
<!-- <p id="status"></p> -->`},{type:"code",lang:"js",title:"三件套知识全部用上：DOM + 事件 + 存储",code:`const editor = document.querySelector("#editor");
const status = document.querySelector("#status");

// 1. 打开页面时恢复上次草稿（localStorage）
editor.value = localStorage.getItem("draft") || "";

// 2. 监听输入（DOM 事件）
editor.addEventListener("input", function () {
  // 3. 实时保存
  localStorage.setItem("draft", this.value);
  status.textContent = "已自动保存 " + new Date().toLocaleTimeString();
});

// 就这么几行，一个"关了浏览器也不丢"的草稿箱就完成了。
// HTML 搭结构、CSS 做外观、JS 给生命 —— 恭喜你走完了前端第一步！`},{type:"tip",content:"建议立刻做综合测试检验成果，然后动手写一个完整小页面（如个人主页、待办清单），把 HTML、CSS、JS 串起来用。后续本站还会添加更多技能模块。"}]}]}]},sp={id:"java",name:"Java",short:"Java",color:"#0f766e",description:"跨平台的面向对象语言：企业级后端与安卓开发的常青树",chapters:[{id:"java-ch1",title:"第一章 Java 入门",lessons:[{id:"java-what-is",title:"1.1 Java 是什么",sections:[{type:"text",content:'Java 是一门**面向对象**的编程语言，最大的特点是"一次编写，到处运行"（Write Once, Run Anywhere）：同一份代码编译一次，可以在 Windows、Linux、macOS 上直接运行。它长期占据编程语言排行榜前列，是企业级后端、安卓开发、大数据领域的主力语言。'},{type:"list",title:"Java 的特点",items:["**跨平台**：代码编译成字节码，由 JVM（Java 虚拟机）负责在不同系统上运行",'**面向对象**：一切皆对象，代码以"类"为基本单位组织，适合大型项目',"**强类型**：每个变量都必须声明类型，编译期就能发现大量错误","**生态庞大**：Spring 全家桶、安卓、Hadoop/Spark 等框架和工具极其丰富","**自动内存管理**：有垃圾回收器（GC）自动回收不用的内存，不用手动释放"]},{type:"tip",content:"Java 和 JavaScript 名字像但完全是两种语言：Java 是编译型的通用编程语言，JS 最初只是浏览器脚本。"}]},{id:"java-jdk-install",title:"1.2 JDK、JRE、JVM 与环境安装",sections:[{type:"text",content:"学 Java 常听到三个缩写，它们是三层包含关系：**JDK ⊃ JRE ⊃ JVM**。"},{type:"list",title:"三者区别",items:['**JVM**（Java Virtual Machine）：Java 虚拟机，负责执行字节码，是"跨平台"的关键','**JRE**（Java Runtime Environment）：Java 运行环境 = JVM + 核心类库，只能"运行"程序',"**JDK**（Java Development Kit）：开发工具包 = JRE + 编译器 javac + 调试工具，**写代码必须装它**"]},{type:"list",title:"安装步骤",items:["下载 JDK：推荐 JDK 17 或 21（长期支持版本 LTS），官网或 Adoptium 均可下载","安装后配置环境变量 `JAVA_HOME` 指向 JDK 目录，并把 `%JAVA_HOME%\\bin` 加入 `Path`","验证：打开命令行输入 `java -version` 和 `javac -version`，都能显示版本号即成功","编辑器：入门可用 IDEA 社区版（免费）或 VS Code + Java 插件"]},{type:"tip",content:"只跑 Java 程序装 JRE 就够，但要写代码、编译程序就必须装 JDK。"}]},{id:"java-hello-world",title:"1.3 第一个程序：Hello World",sections:[{type:"text",content:'按惯例，学任何语言的第一步都是让程序打印出 "Hello, World!"。Java 的固定套路是：**定义一个类，类里写一个 main 方法**，程序从这里开始执行。'},{type:"code",title:"HelloWorld.java",lang:"java",code:`// public class 后面的名字必须和文件名一模一样：HelloWorld.java
public class HelloWorld {
    // main 方法是程序入口，这行写法是固定格式
    public static void main(String[] args) {
        // 在控制台打印一行文字
        System.out.println("Hello, World!");
    }
}`},{type:"list",title:"编译与运行（命令行版）",items:["编译：`javac HelloWorld.java` —— 生成字节码文件 `HelloWorld.class`","运行：`java HelloWorld` —— 注意这里**不加 .class 后缀**","输出：控制台打印 `Hello, World!`"]},{type:"tip",content:"常见的第一个报错：类名与文件名不一致、main 拼错、丢了分号。对照上面的固定写法检查即可。"}]},{id:"java-compile-flow",title:"1.4 Java 程序的运行原理",sections:[{type:"text",content:'Java 是"**先编译、再解释执行**"的混合模式：`.java` 源文件经 javac 编译成 `.class` **字节码**，字节码由 JVM 逐条加载执行。JVM 在执行时还会把热点代码即时编译成机器码（JIT），所以运行速度并不慢。'},{type:"code",title:"从源码到运行",lang:"text",code:`HelloWorld.java  --javac 编译-->  HelloWorld.class（字节码）
                                      |
              Windows JVM <-----------+-----------> Linux JVM
             （在本机运行）                    （同样能运行）`},{type:"list",title:"为什么要设计成这样",items:["字节码是中间格式，屏蔽了各操作系统的差异，实现跨平台","编译期做语法检查，很多错误在运行前就能被发现","JIT 即时编译让高频代码越跑越快"]},{type:"tip",content:"记忆口诀：源码给程序员看，字节码给 JVM 看。"}]}]},{id:"java-ch2",title:"第二章 变量与基础语法",lessons:[{id:"java-data-types",title:"2.1 变量与八大基本数据类型",sections:[{type:"text",content:"Java 是**强类型语言**：声明变量时必须写明类型，且类型确定了就不能随便装别的类型的数据。基本类型有 8 个，分四组记忆。"},{type:"code",title:"八大基本类型与声明示例",lang:"java",code:`// 整数四种：byte(1字节) short(2字节) int(4字节) long(8字节)
int age = 18;
long bigNum = 900000000000L;   // long 结尾要加 L

// 浮点两种：float(4字节) double(8字节)
double price = 9.99;
float f = 3.14F;               // float 结尾要加 F

// 字符：char，用单引号装一个字符
char grade = 'A';

// 布尔：boolean，只有 true / false
boolean isVip = true;`},{type:"list",title:"使用要点",items:["日常整数用 `int`，很大才用 `long`；小数默认用 `double`","变量命名：小驼峰 `studentName`；类名：大驼峰 `HelloWorld`；常量全大写 `MAX_SIZE`","变量必须**先赋值再使用**，否则编译报错","除基本类型外的一切都是**引用类型**，比如 `String`（字符串）"]},{type:"tip",content:'String 是引用类型不是基本类型，但用起来很像基本类型，别混进"八大基本类型"里。'}]},{id:"java-operators",title:"2.2 运算符",sections:[{type:"text",content:"Java 运算符与 C/JS 家族基本一致：算术、比较、逻辑三大家族，外加独有的字符串拼接行为。"},{type:"code",title:"常用运算符速览",lang:"java",code:`// 算术：+ - * / %
System.out.println(10 / 3);    // 3，整数相除只保留整数
System.out.println(10 % 3);    // 1，取余
System.out.println(10.0 / 4);  // 2.5，有一方是小数就是小数除法

// 比较：==  !=  >  <  >=  <=，结果是 boolean
System.out.println(5 >= 5);    // true

// 逻辑：&& 与（都真才真）  || 或（有真就真）  ! 非
boolean ok = 3 > 2 && 5 > 4;   // true

// 自增自减：i++ 先用后加，++i 先加后用
int i = 1;
System.out.println(i++);       // 输出 1，之后 i 变 2

// 字符串拼接：+ 两边只要有一个是字符串就是拼接
System.out.println("分数：" + 98);  // 分数：98`},{type:"list",title:"易错点",items:["`5 / 2` 结果是 2 不是 2.5，想得到小数至少一方要是浮点数","两个整数 `%` 取余结果符号跟被除数一致","判断两个整数相等用 `==`，但判断**字符串内容**相等必须用 `equals()`，这是 Java 高频考点"]}]},{id:"java-type-cast",title:"2.3 类型转换",sections:[{type:"text",content:"类型转换分两种方向：**自动转换**（小范围 → 大范围，安全，默默完成）和**强制转换**（大范围 → 小范围，可能丢数据，必须写明）。"},{type:"code",title:"两种转换写法",lang:"java",code:`// 自动类型转换（隐式）：小杯子的水倒进大杯子
int a = 10;
double d = a;          // int 自动转 double，d = 10.0
long l = a;            // int 自动转 long

// 强制类型转换（显式）：大杯子硬塞进小杯子，可能溢出
double pi = 3.99;
int n = (int) pi;      // 结果 3，直接砍掉小数，不是四舍五入
int big = 130;
byte b = (byte) big;   // 结果 -126，超出 byte 范围发生溢出

// 字符串与数字互转
int num = Integer.parseInt("123");   // 字符串 -> int
double d2 = Double.parseDouble("3.14");
String s = String.valueOf(456);      // 数字 -> 字符串`},{type:"list",title:"记忆要点",items:["自动转换方向：byte -> short -> int -> long -> float -> double，char 也可转 int","强制转换语法：`(目标类型) 值`，小数转整数是**截断**不是四舍五入","字符串转数字失败会抛出 `NumberFormatException` 异常"]},{type:"tip",content:"char 本质是数字（字符编码表里的序号），所以 char 能参与算术运算，这是面试常考冷知识。"}]},{id:"java-scanner",title:"2.4 键盘输入：Scanner",sections:[{type:"text",content:"程序要接收用户输入，最常用 `Scanner` 类。它住在 `java.util` 包里，使用前要先 `import` 导入。"},{type:"code",title:"读取用户输入的小程序",lang:"java",code:`import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        // 创建扫描器对象，System.in 代表标准输入（键盘）
        Scanner sc = new Scanner(System.in);

        System.out.print("请输入你的年龄：");
        int age = sc.nextInt();          // 读取一个整数

        System.out.print("请输入你的名字：");
        String name = sc.next();         // 读取一个单词（遇空格结束）

        System.out.println(name + " 今年 " + age + " 岁");
    }
}`},{type:"list",title:"常用输入方法",items:["`nextInt()` 读整数、`nextDouble()` 读小数","`next()` 读一个单词；`nextLine()` 读**一整行**（含空格）","混用时注意：`nextInt()` 后紧跟 `nextLine()` 会读到残留的换行，需要先补一个 `nextLine()` 吸收"]},{type:"tip",content:"写完 Scanner 最好调用 `sc.close()` 关闭，养成资源管理好习惯。"}]}]},{id:"java-ch3",title:"第三章 流程控制",lessons:[{id:"java-if",title:"3.1 if 分支结构",sections:[{type:"text",content:'if 语句按条件决定"走哪条路"。Java 的 if 有三种形态：单分支、双分支、多分支。条件必须是 `boolean` 类型，这点比 JS 严格——不能拿数字当条件。'},{type:"code",title:"三种 if 形态",lang:"java",code:`int score = 85;

// 多分支：从上往下匹配，命中一个就结束
if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 80) {
    System.out.println("良好");
} else if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}

// 单分支：只有满足才执行
if (score < 60) {
    System.out.println("需要补考");
}

// 求两个数中较大的一个（三目运算符写法）
int a = 10, b = 20;
int max = a > b ? a : b;`},{type:"list",title:"易错点",items:["条件必须是 boolean，不能写 `if (1)` —— 这在 JS 里合法，Java 直接编译错误","写 `==` 比较时把常量放前面（`if (0 == x)`）可避免误写成赋值",'大括号即使只有一句也建议写上，避免"悬空 else"陷阱']}]},{id:"java-switch",title:"3.2 switch 分支",sections:[{type:"text",content:"当要根据**一个变量的多个具体取值**来分支时，switch 比 if-else 更清晰。Java 12+ 还支持了箭头语法，更简洁。"},{type:"code",title:"传统写法与箭头写法",lang:"java",code:`int day = 6;

// 传统写法：记得每个 case 都要 break，否则穿透
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        System.out.println("工作日");
        break;
    case 6:
    case 7:
        System.out.println("周末");
        break;
    default:
        System.out.println("非法日期");
}

// 箭头写法（Java 14+）：不需要 break，不会穿透
switch (day) {
    case 1, 2, 3, 4, 5 -> System.out.println("工作日");
    case 6, 7 -> System.out.println("周末");
    default -> System.out.println("非法日期");
}`},{type:"list",title:"要点",items:["switch 能匹配的类型：`byte short char int`、枚举、`String`（Java 7 起）","传统写法漏写 `break` 会**穿透**到下一个 case 继续执行","把命中概率高的 case 放前面，可以减少判断次数"]},{type:"tip",content:"case 的值不能重复，且必须是常量，不能是变量或范围。需要范围判断时用 if。"}]},{id:"java-loops",title:"3.3 for 与 while 循环",sections:[{type:"text",content:"循环让计算机重复干活。Java 有三种循环：`for`（次数明确）、`while`（次数不确定）、`do-while`（至少执行一次），外加遍历数组/集合专用的**增强 for**。"},{type:"code",title:"三种循环 + 增强 for",lang:"java",code:`// for：打印 1 到 5
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

// while：条件为真就一直转，先判断后执行
int money = 100;
while (money >= 30) {
    money -= 30;              // 每次花 30 元
    System.out.println("花完剩 " + money);
}

// do-while：先执行一次再判断，循环体至少跑一遍
int x = 0;
do {
    System.out.println("至少执行一次");
} while (x > 0);

// 增强 for（for-each）：遍历数组和集合最方便
int[] nums = {10, 20, 30};
for (int n : nums) {
    System.out.println(n);
}`},{type:"list",title:"选择建议",items:["知道循环几次：用 `for`",'不知道几次、只看条件：用 `while`（如"用户一直输错就一直重来"）','要"先做一次再说"：用 `do-while`（如菜单至少显示一次）',"只是遍历每个元素：用增强 `for`，代码最短"]}]},{id:"java-break-continue",title:"3.4 break、continue 与嵌套循环",sections:[{type:"text",content:"`break` **终止整个循环**，`continue` **跳过本轮进入下一轮**。循环里套循环叫嵌套循环，经典应用是打印九九乘法表。"},{type:"code",title:"跳转关键字与乘法表",lang:"java",code:`// break：找到就停
int[] arr = {3, 7, 11, 18, 25};
for (int n : arr) {
    if (n == 11) {
        System.out.println("找到了 11");
        break;                 // 结束整个循环，后面的 18、25 不再看
    }
}

// continue：只跳过本轮
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        continue;              // 跳过偶数，进入下一轮
    }
    System.out.println(i);     // 输出 1 3 5
}

// 嵌套循环：九九乘法表
for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + "x" + i + "=" + (i * j) + "\\t");
    }
    System.out.println();      // 每打完一行换行
}`},{type:"tip",content:"嵌套循环里外层走一步、内层走完一轮。想直接跳出外层可以给循环起标签（outer:）后用 `break outer;`，但日常更推荐把内层条件封装成方法用 return 结束。"}]}]},{id:"java-ch4",title:"第四章 方法与数组",lessons:[{id:"java-method",title:"4.1 方法的定义与调用",sections:[{type:"text",content:'方法（Method）就是一段**起好名字、可反复调用**的代码块，相当于其他语言里的"函数"。Java 方法必须声明在类里面。'},{type:"code",title:"方法的五种形态",lang:"java",code:`public class Demo {
    // 1. 无参数无返回值
    static void sayHello() {
        System.out.println("你好！");
    }

    // 2. 有参数无返回值
    static void greet(String name) {
        System.out.println("你好，" + name);
    }

    // 3. 有参数有返回值：return 把结果交回给调用处
    static int add(int a, int b) {
        return a + b;
    }

    // 4. 判断型：直接返回 boolean 表达式
    static boolean isAdult(int age) {
        return age >= 18;
    }

    public static void main(String[] args) {
        sayHello();                       // 调用
        greet("小明");
        int sum = add(3, 5);              // 用变量接住返回值
        System.out.println("3+5=" + sum);
        System.out.println(isAdult(20));
    }
}`},{type:"list",title:"要点",items:["语法：`修饰符 返回值类型 方法名(参数列表) { ... }`，无返回值写 `void`","`return` 会**立即结束**方法并交回结果；void 方法里可单独写 `return;` 提前结束","方法不调用不执行；调用时实参个数、类型、顺序要和形参对应"]},{type:"tip",content:"本例为了能在 main 里直接调用，方法加了 static；学完面向对象后，普通方法写在类里即可不用 static。"}]},{id:"java-overload",title:"4.2 方法重载（Overload）",sections:[{type:"text",content:"**方法重载**：同一个类里方法名相同，但**参数列表不同**（个数或类型不同）。调用时 JVM 根据你传的参数自动匹配对应版本。`println` 能打印任何类型就是重载的典型。"},{type:"code",title:"一个名字，多种参数",lang:"java",code:`public class Calculator {
    // 两个 int 相加
    static int add(int a, int b) {
        return a + b;
    }

    // 三个 int 相加：参数个数不同，构成重载
    static int add(int a, int b, int c) {
        return a + b + c;
    }

    // 两个 double 相加：参数类型不同，构成重载
    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(1, 2));        // 自动调用第一个
        System.out.println(add(1, 2, 3));     // 自动调用第二个
        System.out.println(add(1.5, 2.5));    // 自动调用第三个
    }
}`},{type:"list",title:"构成重载的条件（两必须一无关）",items:["必须在**同一个类**里、方法名相同","参数的**个数**或**类型**必须不同（顺序不同也算）","与返回值类型无关 —— 只改返回值不构成重载，会编译报错"]},{type:"tip",content:"记忆：重载看参数，不看返回值。"}]},{id:"java-array",title:"4.3 数组",sections:[{type:"text",content:"数组是**长度固定、类型相同**的一批数据的容器。元素从下标 0 开始编号，通过 `数组名[下标]` 读写。"},{type:"code",title:"数组的声明、遍历与常见操作",lang:"java",code:`// 静态初始化：直接给出元素
int[] arr = {10, 20, 30, 40};

// 动态初始化：指定长度，元素为默认值（int 是 0）
int[] arr2 = new int[5];

// 访问与修改
System.out.println(arr[0]);    // 10
arr[0] = 99;

// 数组长度用 .length（注意没有小括号）
System.out.println(arr.length);

// 遍历 + 求最大值
int max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
System.out.println("最大值：" + max);

// 越界访问会抛出 ArrayIndexOutOfBoundsException
// System.out.println(arr[100]);  // 运行时报错`},{type:"list",title:"要点",items:["下标范围：0 到 length-1，越界直接抛异常",'数组是引用类型，两个变量指向同一数组时，一边改另一边也"变"',"默认值规则：int 为 0、double 为 0.0、boolean 为 false、引用类型为 null"]}]},{id:"java-arrays-util",title:"4.4 二维数组与 Arrays 工具类",sections:[{type:"text",content:'二维数组是"数组的数组"，常用来表示表格/矩阵。`java.util.Arrays` 则是操作数组的工具箱，排序、查找、打印一行代码搞定。'},{type:"code",title:"二维数组与 Arrays 常用方法",lang:"java",code:`import java.util.Arrays;

// 二维数组：3 行 2 列
int[][] table = {
    {90, 85},
    {77, 68},
    {100, 95}
};
System.out.println(table[1][0]);   // 第 2 行第 1 列：77

// 遍历二维数组
for (int[] row : table) {
    for (int v : row) {
        System.out.print(v + " ");
    }
    System.out.println();
}

// Arrays 工具类
int[] nums = {5, 2, 8, 1};
Arrays.sort(nums);                          // 排序（升序）
System.out.println(Arrays.toString(nums));  // [1, 2, 5, 8] 一行打印数组
int idx = Arrays.binarySearch(nums, 5);     // 二分查找，返回下标
int[] copy = Arrays.copyOf(nums, 6);        // 扩容式复制，多出的补 0`},{type:"list",title:"易错点",items:['直接打印数组名得到的是"[I@地址"之类的乱码，要打印内容用 `Arrays.toString()`',"`binarySearch` 前必须先排序，否则结果不可靠"]},{type:"tip",content:"后续学的集合（ArrayList 等）长度可变、功能更强，但数组在性能和底层原理上依然是必修基本功。"}]}]},{id:"java-ch5",title:"第五章 面向对象基础",lessons:[{id:"java-class-object",title:"5.1 类与对象",sections:[{type:"text",content:'**类**是"图纸"，**对象**是按图纸造出来的"实物"。类描述一类事物有哪些**属性**（成员变量）和**行为**（方法），对象是这个描述的具体实例。面向对象就是把数据和行为打包在一起编程。'},{type:"code",title:"定义类并创建对象",lang:"java",code:`// 定义一个学生类
public class Student {
    // 成员变量（属性）
    String name;
    int age;

    // 成员方法（行为）
    void study() {
        System.out.println(name + " 正在学习");
    }
}

// 使用：new 出对象，通过 . 访问属性和方法
Student stu1 = new Student();   // 创建第一个学生
stu1.name = "小明";
stu1.age = 18;
stu1.study();                   // 小明 正在学习

Student stu2 = new Student();   // 每个对象的属性互不影响
stu2.name = "小红";
stu2.study();                   // 小红 正在学习`},{type:"list",title:"要点",items:["`new 类名()` 就是创建对象，返回的是对象的**引用地址**","成员变量有默认值（int 为 0，String 为 null），局部变量没有默认值",'`null` 表示"不指向任何对象"，对 null 调用方法会抛 `NullPointerException`——Java 最常见的异常']}]},{id:"java-constructor",title:"5.2 构造方法与 this",sections:[{type:"text",content:'**构造方法**是创建对象时自动执行的特殊方法，方法名与类名完全相同、没有返回值类型，用于给属性赋初值。**this** 代表"当前对象"，用来区分成员变量和同名参数。'},{type:"code",title:"构造方法 + this",lang:"java",code:`public class Student {
    String name;
    int age;

    // 无参构造：new Student() 时执行
    public Student() {
    }

    // 有参构造：new Student("小明", 18) 时执行
    public Student(String name, int age) {
        // this.name 是成员变量，name 是参数
        this.name = name;
        this.age = age;
    }

    public void show() {
        System.out.println(name + " " + age);
    }
}

// 使用
Student s1 = new Student("小明", 18);  // 直接带初值创建
s1.show();                             // 小明 18`},{type:"list",title:"规则",items:["如果一个构造方法都没写，编译器**自动赠送**一个无参构造","一旦自己写了有参构造，赠送的无参构造就**消失**了，需要的话要自己补写","`this(参数)` 可以在一个构造方法里调用另一个构造方法（必须放第一行）"]},{type:"tip",content:"IDEA 快捷键 Alt+Insert 可一键生成构造方法、getter/setter，工程里非常常用。"}]},{id:"java-encapsulation",title:"5.3 封装",sections:[{type:"text",content:"**封装**是把属性藏起来（private），只通过公共方法（public）访问的思想。好处：可以在方法里加校验，防止外部塞进非法数据。它是面向对象三大特性（封装、继承、多态）之一。"},{type:"code",title:"private + getter/setter 标准套路",lang:"java",code:`public class Student {
    // 属性全部私有化：外部不能直接访问
    private String name;
    private int age;

    // getter：提供读取入口
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // setter：提供修改入口，顺便做校验
    public void setAge(int age) {
        if (age < 0 || age > 150) {
            System.out.println("年龄非法，已忽略");
            return;
        }
        this.age = age;
    }
}

// 使用：只能通过方法访问
Student s = new Student();
s.setAge(300);          // 年龄非法，已忽略
s.setAge(18);           // 正常设置
System.out.println(s.getAge());`},{type:"list",title:"访问修饰符四种权限（大到小）",items:["`public`：任何地方都能访问","`protected`：同包 + 子类可访问","（默认，不写）：同包内可访问","`private`：只有本类可访问"]}]},{id:"java-static",title:"5.4 static 关键字",sections:[{type:"text",content:'**static** 表示"属于类，而不属于某个对象"。static 变量被所有对象**共享一份**；static 方法通过类名直接调用，不用先 new 对象。工具类（如 Math、Arrays）全靠 static 工作。'},{type:"code",title:"static 变量与方法",lang:"java",code:`public class Counter {
    // 静态变量：所有对象共享同一个计数器
    static int count = 0;
    // 实例变量：每个对象一份
    String name;

    public Counter(String name) {
        this.name = name;
        count++;               // 每创建一个对象就 +1
    }

    // 静态方法：类名直接调用
    static void printCount() {
        System.out.println("已创建 " + count + " 个对象");
    }
}

// 使用
new Counter("a");
new Counter("b");
Counter.printCount();          // 已创建 2 个对象（不用 new 也能调用）`},{type:"list",title:"使用限制",items:["静态方法里**不能直接访问**非静态成员（因为非静态成员需要对象才存在）","静态方法里**不能使用** this","常量惯例：`public static final double PI = 3.14;` 全大写，全局共享且不可改"]},{type:"tip",content:'加载顺序：静态成员随类加载而存在，比对象"出生"得早——这就是静态方法摸不到对象成员的根本原因。'}]}]},{id:"java-ch6",title:"第六章 面向对象进阶",lessons:[{id:"java-inheritance",title:"6.1 继承与 super",sections:[{type:"text",content:"**继承**让子类自动拥有父类的属性和方法（`extends` 关键字），实现代码复用。子类可以在父类基础上**新增**成员，或**重写**父类方法。Java 只支持单继承：一个类只能有一个直接父类。"},{type:"code",title:"继承与 super 用法",lang:"java",code:`// 父类
public class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " 在吃东西");
    }
}

// 子类：自动拥有 name 和 eat()
public class Dog extends Animal {
    public Dog(String name) {
        super(name);           // 调用父类构造方法，必须放第一行
    }

    // 方法重写：覆盖父类的行为
    @Override
    public void eat() {
        super.eat();           // 先执行父类逻辑
        System.out.println(name + " 啃骨头");  // 再补充自己的
    }

    // 子类独有方法
    public void bark() {
        System.out.println("汪汪！");
    }
}

// 使用
Dog d = new Dog("旺财");
d.eat();     // 旺财 在吃东西 + 旺财 啃骨头
d.bark();`},{type:"list",title:"要点",items:["`super.` 访问父类成员，`super(参数)` 调用父类构造方法","重写方法签名必须与父类一致，建议加 `@Override` 注解让编译器帮你检查","private 成员虽被继承但子类不能直接访问，要通过父类的 public 方法"]}]},{id:"java-polymorphism",title:"6.2 多态",sections:[{type:"text",content:'**多态**：同一个方法调用，不同对象有不同的表现。写法上就是"**父类引用指向子类对象**"（`Animal a = new Dog();`）。这是面向对象最灵活的特性，框架设计的基础。'},{type:"code",title:"多态的用法与 instanceof",lang:"java",code:`public class Test {
    // 参数写成父类类型，就能接收任何子类对象
    static void feed(Animal a) {
        a.eat();               // 实际执行的是子类重写后的版本
    }

    public static void main(String[] args) {
        // 父类引用指向子类对象
        Animal a = new Dog("旺财");
        a.eat();               // 走的是 Dog 的 eat()

        feed(new Dog("大黄"));
        feed(new Cat("咪咪"));  // 一个方法通吃所有动物

        // 想调用子类特有方法，需要向下转型
        if (a instanceof Dog) {
            Dog d = (Dog) a;
            d.bark();
        }
    }
}`},{type:"list",title:"要点",items:["多态三要素：继承/实现、方法重写、父类引用指向子类对象","编译看左边（只能调父类有的方法），运行看右边（实际执行子类重写的代码）","向下转型前必须用 `instanceof` 判断，否则类型不匹配会抛 `ClassCastException`"]},{type:"tip",content:"Java 16+ 支持 `if (a instanceof Dog d)` 模式匹配，判断和转型一步完成。"}]},{id:"java-abstract",title:"6.3 抽象类",sections:[{type:"text",content:'**抽象类**（abstract class）是"半成品类"：用 `abstract` 声明，可以包含**没有方法体的抽象方法**，强迫子类去实现。抽象类不能被直接 new 出来，只能被继承。'},{type:"code",title:"抽象类与抽象方法",lang:"java",code:`// 抽象类：图形
public abstract class Shape {
    // 抽象方法：只有声明没有方法体，子类必须实现
    public abstract double area();

    // 普通方法：抽象类里也可以有正常方法
    public void describe() {
        System.out.println("我的面积是 " + area());
    }
}

// 子类必须实现所有抽象方法，否则自己也得声明为抽象类
public class Circle extends Shape {
    double r;

    public Circle(double r) {
        this.r = r;
    }

    @Override
    public double area() {
        return 3.14159 * r * r;
    }
}

// 使用：用父类引用接子类对象
Shape s = new Circle(2);
s.describe();      // 我的面积是 12.56636`},{type:"list",title:"要点",items:["抽象类不能 `new`，但可以有构造方法（供子类 super 调用）","有抽象方法的类**必须**是抽象类；抽象类可以没有抽象方法",'适合"知道要做什么、但不知道具体怎么做"的模板场景']}]},{id:"java-interface",title:"6.4 接口",sections:[{type:"text",content:'**接口**（interface）是一份"能力契约"：规定实现者必须提供哪些方法，但不关心怎么实现。类用 `implements` 实现接口，可以**同时实现多个**接口——弥补了 Java 单继承的限制。'},{type:"code",title:"接口的定义与实现",lang:"java",code:`// 定义接口：一组能力声明
public interface Flyable {
    void fly();               // 接口方法默认是 public abstract
}

public interface Swimmable {
    void swim();
}

// 一个类可以实现多个接口
public class Duck extends Animal implements Flyable, Swimmable {
    public Duck(String name) {
        super(name);
    }

    @Override
    public void fly() {
        System.out.println(name + " 扑腾着飞");
    }

    @Override
    public void swim() {
        System.out.println(name + " 划水游泳");
    }
}

// 使用：接口类型的引用也能实现多态
Flyable f = new Duck("唐老鸭");
f.fly();`},{type:"list",title:"要点",items:["接口成员变量默认 `public static final`（常量），方法默认 `public abstract`","Java 8 后接口允许 `default` 默认方法和 `static` 方法，带方法体",'抽象类描述"是什么"（is-a），接口描述"能做什么"（can-do），设计时优先用接口']},{type:"tip",content:"为什么接口里的方法不需要写 public abstract？接口天生就是给外部实现的，编译器自动帮你补上。"}]}]},{id:"java-ch7",title:"第七章 常用 API 与集合",lessons:[{id:"java-string",title:"7.1 String 与 StringBuilder",sections:[{type:"text",content:"String 是使用频率最高的类。关键认知：**String 内容不可变**（immutable），频繁拼接会产生大量垃圾对象，此时应换 **StringBuilder**。"},{type:"code",title:"String 常用方法与 StringBuilder",lang:"java",code:`String s = "Hello Java";

// 常用方法
System.out.println(s.length());            // 10，长度
System.out.println(s.charAt(0));           // H，取下标字符
System.out.println(s.substring(6));        // Java，截取
System.out.println(s.indexOf("Java"));     // 6，查找位置，找不到返回 -1
System.out.println(s.toUpperCase());       // HELLO JAVA
System.out.println(s.replace("Java", "World"));  // 替换
System.out.println("  a b  ".trim());      // 去首尾空格
System.out.println(s.equals("hello java"));        // false，比较内容区分大小写
System.out.println(s.equalsIgnoreCase("hello java"));  // true，忽略大小写

// 频繁拼接：用 StringBuilder
StringBuilder sb = new StringBuilder();
for (int i = 1; i <= 5; i++) {
    sb.append(i).append(",");              // 链式追加
}
String result = sb.toString();             // "1,2,3,4,5,"`},{type:"list",title:"高频考点",items:["比较字符串内容一律用 `equals()`，`==` 比较的是地址","字符串可以存进 switch 里做分支",'split() 按分隔符拆成数组：`"a,b,c".split(",")` 得到 ["a","b","c"]']}]},{id:"java-collections",title:"7.2 集合框架：List、Set、Map",sections:[{type:"text",content:"数组长度固定，集合长度**可变**、功能丰富，实际开发中用得远比数组多。三大主力：**List** 有序可重复、**Set** 不重复、**Map** 键值对。"},{type:"code",title:"三大集合速览",lang:"java",code:`import java.util.*;

// List：有序、可重复，下标访问
List<String> list = new ArrayList<>();
list.add("苹果");
list.add("香蕉");
list.add("苹果");                  // 可以重复
System.out.println(list.get(0));   // 苹果
System.out.println(list.size());   // 3

// 遍历 List
for (String fruit : list) {
    System.out.println(fruit);
}

// Set：不允许重复
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(1);                        // 添加失败（重复），集合仍只有 1 个
System.out.println(set.size());    // 1

// Map：键值对，键不能重复
Map<String, Integer> scores = new HashMap<>();
scores.put("小明", 90);
scores.put("小红", 95);
System.out.println(scores.get("小明"));    // 90
System.out.println(scores.containsKey("小李"));  // false

// 遍历 Map
for (Map.Entry<String, Integer> e : scores.entrySet()) {
    System.out.println(e.getKey() + "=" + e.getValue());
}`},{type:"list",title:"如何选择",items:["要按顺序存、可能重复 → `ArrayList`","要去重、不关心顺序 → `HashSet`",'要通过"名字"找"值" → `HashMap`',"面试常问：ArrayList 底层是数组，查询快增删慢；LinkedList 底层是链表，增删快查询慢"]},{type:"tip",content:"集合只能存对象不能存基本类型，所以泛型写 Integer 而不是 int（装箱机制自动转换）。"}]},{id:"java-generics",title:"7.3 泛型",sections:[{type:"text",content:'**泛型**（尖括号里的类型参数）让集合在编译期就限定"只能装什么类型"，取出来也不用强制转换，把运行时错误提前到编译期发现。'},{type:"code",title:"泛型集合与泛型方法",lang:"java",code:`// 不用泛型的老写法：什么都能装，取出要强转，容易出错
List raw = new ArrayList();
raw.add("hello");
raw.add(123);
String s = (String) raw.get(0);   // 手动强转，万一取到 123 就崩

// 用泛型：编译期就锁死类型
List<String> list = new ArrayList<>();
list.add("hello");
// list.add(123);                 // 编译直接报错，风险提前暴露
String s2 = list.get(0);          // 无需强转

// 自定义泛型方法：T 是类型占位符，调用时才确定
static <T> T firstOrNull(List<T> list) {
    return list.isEmpty() ? null : list.get(0);
}

// 泛型类
class Box<T> {
    private T value;
    public void set(T v) { value = v; }
    public T get() { return value; }
}`},{type:"list",title:"要点",items:["泛型只在编译期起作用（类型擦除），运行时不存在","泛型字母习惯：T(Type) E(Element) K,V(Key,Value)","泛型不支持基本类型，要用包装类：`List<Integer>` 而不是 `List<int>`"]}]},{id:"java-common-api",title:"7.4 常用工具类：Math、包装类、日期",sections:[{type:"text",content:'JDK 自带大量工具类，先掌握最常用的几个，遇到需求先想想"标准库是不是已经有了"。'},{type:"code",title:"常用 API 示例",lang:"java",code:`import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// Math：数学工具
System.out.println(Math.abs(-5));      // 5，绝对值
System.out.println(Math.max(3, 9));    // 9
System.out.println(Math.pow(2, 10));   // 1024.0，幂
System.out.println(Math.random());     // [0, 1) 随机小数
int dice = (int) (Math.random() * 6) + 1;  // 掷骰子 1~6

// 包装类：int 的对象版，提供类型转换等实用方法
Integer n = Integer.valueOf("123");    // 字符串转 int
System.out.println(Integer.parseInt("456"));  // 常用写法
System.out.println(Integer.MAX_VALUE); // int 的最大值

// 日期时间（Java 8+ 新 API，线程安全，推荐）
LocalDate today = LocalDate.now();
System.out.println(today.getYear());   // 2026
LocalDate birthday = LocalDate.of(2000, 1, 1);
System.out.println(today.isAfter(birthday));  // true

// 格式化
LocalDateTime now = LocalDateTime.now();
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
System.out.println(now.format(fmt));`},{type:"tip",content:"老代码里的 Date 和 SimpleDateFormat 有线程安全问题，新项目统一用 java.time 包下的新 API。"}]}]},{id:"java-ch8",title:"第八章 异常处理与文件",lessons:[{id:"java-exception",title:"8.1 异常处理：try-catch-finally",sections:[{type:"text",content:"异常是程序运行期发生的错误（如除零、空指针、文件不存在）。Java 用 **try-catch-finally** 结构优雅地处理异常，保证程序不会直接崩溃。"},{type:"code",title:"异常处理标准结构",lang:"java",code:`public class Demo {
    public static void main(String[] args) {
        try {
            // 可能出错的代码
            int[] arr = new int[3];
            System.out.println(arr[5]);       // 这里会越界
        } catch (ArrayIndexOutOfBoundsException e) {
            // 捕获指定异常：给用户友好提示，而不是让程序崩掉
            System.out.println("数组下标越界：" + e.getMessage());
        } catch (Exception e) {
            // 兜底：捕获其他所有异常
            System.out.println("出错了：" + e.getMessage());
        } finally {
            // 无论是否发生异常都会执行，常用于释放资源
            System.out.println("处理完毕");
        }

        System.out.println("程序继续运行，没有崩溃");
    }
}`},{type:"list",title:"异常体系",items:["顶层是 `Throwable`，下面分 `Error`（严重错误，不用管）和 `Exception`","**编译时异常**（如 IOException）：必须 try-catch 或 throws 声明，强制处理","**运行时异常**（RuntimeException 及其子类，如空指针、越界）：可以不处理，属于编程 bug，应当修复代码"]}]},{id:"java-throw",title:"8.2 throw、throws 与自定义异常",sections:[{type:"text",content:'`try-catch` 是"接住"异常，`throw` 则是"抛出"异常：当业务上遇到非法情况，主动抛出异常比返回错误码更清晰。项目里常自定义异常类表达业务错误。'},{type:"code",title:"主动抛出与自定义异常",lang:"java",code:`// 自定义异常：继承 RuntimeException（运行时异常）
public class AgeException extends RuntimeException {
    public AgeException(String message) {
        super(message);      // 把错误信息交给父类
    }
}

public class Person {
    private int age;

    public void setAge(int age) {
        if (age < 0 || age > 150) {
            // 业务不合法，直接抛异常，中断流程
            throw new AgeException("年龄必须在 0~150 之间，收到：" + age);
        }
        this.age = age;
    }
}

// 调用方选择捕获处理
try {
    new Person().setAge(300);
} catch (AgeException e) {
    System.out.println("注册失败：" + e.getMessage());
}`},{type:"list",title:"throw 与 throws 的区别",items:["`throw`：语句，在方法**内部**抛出一个异常对象",'`throws`：声明，写在方法签名上，告诉调用者"本方法可能抛出这些异常，请自行处理"']}]},{id:"java-io",title:"8.3 文件读写",sections:[{type:"text",content:'Java 7 引入的 `java.nio.file.Files` 工具类让文件操作变得非常简单，配合 `Path` 接口几行代码完成读写。掌握它能实现"把数据存到硬盘"的小工具。'},{type:"code",title:"Files 工具类读写文件",lang:"java",code:`import java.nio.file.*;
import java.util.List;

public class FileDemo {
    public static void main(String[] args) throws Exception {
        Path path = Path.of("notes.txt");

        // 写文件：一行一个元素
        Files.write(path, List.of("第一行", "第二行", "第三行"));

        // 读文件：一次读进所有行
        List<String> lines = Files.readAllLines(path);
        for (String line : lines) {
            System.out.println(line);
        }

        // 判断文件是否存在
        System.out.println(Files.exists(path));   // true

        // 追加写入
        Files.write(path, List.of("追加的一行"),
                StandardOpenOption.APPEND);
    }
}`},{type:"list",title:"要点",items:["文件 IO 属于编译时异常，方法签名要 `throws Exception` 或 try-catch","读不存在的文件会抛 `NoSuchFileException`，先 `exists()` 判断","字符编码问题：写中文时可用 `StandardCharsets.UTF_8` 参数指定编码"]},{type:"tip",content:"传统流式写法（FileReader/BufferedReader）在处理大文件时仍不可替代，入门阶段掌握 Files 工具类够用。"}]}]},{id:"java-ch9",title:"第九章 进阶与实战",lessons:[{id:"java-thread",title:"9.1 多线程入门",sections:[{type:"text",content:"线程是程序里**同时干多件事**的能力。Java 内置多线程支持：创建线程最简单的两种方式是继承 Thread 和实现 Runnable。"},{type:"code",title:"两种创建线程的方式",lang:"java",code:`// 方式一：继承 Thread，重写 run
public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println("子线程：" + i);
        }
    }
}

// 方式二：实现 Runnable（推荐，不影响继承其他类）
Runnable task = () -> System.out.println("Runnable 线程跑起来了");

public class Demo {
    public static void main(String[] args) {
        new MyThread().start();    // start() 才是新线程，run() 是普通调用
        new Thread(task).start();
        System.out.println("主线程继续干活");   // 三者交替输出
    }
}`},{type:"list",title:"要点",items:["调用 `start()` 才会开启新线程；直接调 `run()` 只是普通方法调用",'多个线程同时改同一份数据会产生"线程安全问题"，可用 `synchronized` 加锁',"实际项目更推荐**线程池**（ExecutorService）管理线程，避免频繁创建销毁的开销"]}]},{id:"java-lambda-stream",title:"9.2 Lambda 与 Stream",sections:[{type:"text",content:'Java 8 引入的 Lambda 表达式和 Stream 流是现代 Java 代码的标配：**Lambda** 让"一段代码"可以像数据一样传递，**Stream** 用链式调用完成集合的筛选、映射、汇总，代替大部分 for 循环。'},{type:"code",title:"Lambda 与 Stream 实战",lang:"java",code:`import java.util.*;
import java.util.stream.Collectors;

List<String> names = List.of("小明", "小红", "张三丰", "李四", "王五");

// Lambda：实现只有一个方法的接口（函数式接口）
// 老写法：new Thread(() -> { ... })，Lambda 就是匿名方法的简写
Runnable r = () -> System.out.println("lambda 执行");

// Comparator 用 Lambda 排序
List<Integer> nums = new ArrayList<>(List.of(5, 2, 8, 1));
nums.sort((a, b) -> a - b);        // 升序

// Stream：筛选 + 映射 + 收集，一气呵成
List<String> result = names.stream()
        .filter(n -> n.length() >= 2)     // 只留长度 >= 2 的
        .map(n -> "同学：" + n)           // 每个元素加工
        .sorted()                          // 排序
        .collect(Collectors.toList());     // 收集成 List
System.out.println(result);

// 汇总操作
int sum = List.of(1, 2, 3, 4, 5).stream()
        .mapToInt(Integer::intValue)
        .sum();                            // 15
long count = names.stream().count();       // 5`},{type:"list",title:"常用 Stream 操作",items:["`filter` 筛选、`map` 加工、`sorted` 排序、`distinct` 去重","`collect` 收集、`forEach` 遍历、`count/sum` 汇总",'Stream 是"懒执行"的：只有遇到终结操作（collect 等）才真正开始计算']},{type:"tip",content:"方法引用是 Lambda 的再简写：`names.forEach(System.out::println)` 等价于 `n -> System.out.println(n)`。"}]},{id:"java-roadmap",title:"9.3 学习路线与实战建议",sections:[{type:"text",content:"学完本站内容，你已经具备了 Java 核心语法功底。Java 的世界很大，下面是推荐路线。"},{type:"list",title:"下一步学什么",items:["**巩固期**：用面向对象 + 集合 + IO 写一个控制台项目（如学生管理系统、记账本），把知识串起来","**数据库**：学 SQL 基础和 JDBC，Java 操作数据库是后端的必修课","**Maven**：项目管理与依赖工具，类似前端的 npm","**Spring Boot**：企业开发主流框架，几行注解就能起一个 Web 服务","**深入方向**：JVM 调优、并发编程、设计模式，是进阶高级工程师的必经之路"]},{type:"list",title:"实战小项目建议",items:["控制台记账本：练习集合、文件持久化、异常处理","学生成绩管理：练习面向对象设计、排序、Map 统计","简单的命令行小游戏：练习流程控制与随机数"]},{type:"tip",content:"建议每学一章就回本站做一次对应范围的综合测试，查漏补缺效果最好。"}]}]}]},rp={id:"springboot",name:"Spring Boot",short:"Spring",color:"#6db33f",description:"基于 Spring 的快速开发框架：自动装配、内嵌服务器，Java 后端开发的事实标准",chapters:[{id:"sb-ch1",title:"第一章 Spring Boot 入门",lessons:[{id:"sb-what-is",title:"1.1 Spring Boot 是什么",sections:[{type:"text",content:'你已经学过 Java 了。用原生 Java 写一个能处理 HTTP 请求的 Web 服务，需要配置 Tomcat、web.xml、一大堆 XML……非常繁琐。**Spring** 框架用 IoC（控制反转）和 AOP（面向切面）简化了开发，但配置还是不少。**Spring Boot** 在 Spring 之上做了彻底简化：**约定优于配置 + 自动装配**，让"写个后端接口"变成几分钟的事。'},{type:"list",title:"Spring Boot 的核心特点",items:["**自动装配（Auto Configuration）**：引入依赖后，框架自动帮你完成绝大部分配置","**起步依赖（Starter）**：一个 `spring-boot-starter-web` 就打包了 Web 开发需要的全部依赖","**内嵌服务器**：自带 Tomcat，不用单独安装，`java -jar` 一条命令就能跑","**生产级监控**：Actuator 提供健康检查、指标监控等端点","**零 XML**：基本告别 XML 配置，注解 + 少量 yml 即可"]},{type:"table",title:"Spring 与 Spring Boot 的关系",headers:["对比项","Spring","Spring Boot"],rows:[["定位","基础框架（IoC / AOP）","快速开发脚手架"],["配置","XML / Java 配置较多","自动装配，约定优先"],["服务器","需外置 Tomcat 部署 war","内嵌 Tomcat，直接跑 jar"],["依赖管理","自己一个个引","starter 起步依赖一站式搞定"]]},{type:"tip",content:'可以把它理解为：Spring Boot = Spring + 一堆"开箱即用"的默认配置。企业里的 Java 后端项目，如今绝大多数都是 Spring Boot 项目。'}]},{id:"sb-first-app",title:"1.2 创建第一个项目",sections:[{type:"text",content:"官方提供了 **Spring Initializr**（start.spring.io）在线生成项目骨架：选好 JDK 版本和依赖，下载解压，用 IDEA 打开就能跑。本站假设你已安装 **JDK 17+** 和 **Maven**（IDEA 自带 Maven 也可）。"},{type:"code",title:"生成的核心文件 pom.xml（节选）",lang:"xml",code:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <!-- 所有 Spring Boot 项目都继承这个父工程，统一管理依赖版本 -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.4</version>
    </parent>

    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>

    <dependencies>
        <!-- Web 起步依赖：内含 Spring MVC + 内嵌 Tomcat + JSON 处理 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>`},{type:"code",title:"启动类：整个应用的入口",lang:"java",code:`package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan
// 它标记这是启动类，并开启自动装配和组件扫描
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        // 启动内嵌 Tomcat 并初始化 Spring 容器
        SpringApplication.run(DemoApplication.class, args);
    }
}`},{type:"code",title:"写第一个接口并启动",lang:"java",code:`package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    // 浏览器访问 http://localhost:8080/hello 即可看到返回内容
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}`},{type:"warn",content:"Spring Boot 3.x 要求 **JDK 17 及以上**。如果用的是 JDK 8，请选择 Spring Boot 2.7.x 或先升级 JDK。默认端口是 **8080**，被占用时启动会报错。"}]},{id:"sb-structure",title:"1.3 项目结构解析",sections:[{type:"text",content:"Spring Boot 项目有固定的目录约定，**按约定放代码，框架才能自动找到它们**。"},{type:"code",title:"标准目录结构",lang:"text",code:`demo
├── src/main/java/com/example/demo
│   ├── DemoApplication.java      # 启动类（必须放在最外层包）
│   ├── controller/               # 控制层：处理 HTTP 请求
│   ├── service/                  # 业务层：核心业务逻辑
│   ├── repository/               # 数据层：数据库读写
│   └── entity/                   # 实体类：对应数据库表
├── src/main/resources
│   ├── application.yml           # 核心配置文件
│   ├── static/                   # 静态资源（css/js/图片）
│   └── templates/                # 模板页面（前后端分离时基本不用）
├── src/test/java                 # 测试代码
└── pom.xml                       # Maven 依赖配置`},{type:"list",title:"两个关键约定",items:["**启动类放在根包**：`@SpringBootApplication` 自带组件扫描，只扫描启动类**所在包及子包**。放错层级，你的 Controller 就不会被识别","**resources 是配置和静态资源家**：application.yml 名字固定，框架自动加载"]},{type:"tip",content:"application.yml 与 application.properties 二选一即可，yml 层级清晰更推荐。两者同时存在时 properties 优先。"}]}]},{id:"sb-ch2",title:"第二章 Web 开发基础",lessons:[{id:"sb-restcontroller",title:"2.1 @RestController 与 GET 接口",sections:[{type:"text",content:"**@RestController** 是写接口最常用的注解，它等于 **@Controller + @ResponseBody**：类里每个方法的返回值都会自动转成 JSON 写回响应体，而不是跳转页面——这正是前后端分离项目需要的。"},{type:"code",title:"几种常用的 GET 接口写法",lang:"java",code:`@RestController
public class UserController {

    // 最简单：返回字符串
    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    // 返回对象：自动转成 JSON，如 {"id":1,"name":"张三"}
    @GetMapping("/user")
    public User user() {
        User u = new User();
        u.setId(1L);
        u.setName("张三");
        return u;
    }

    // @RequestMapping 也能写，但 method 要单独指定；@GetMapping 更简洁
    // @PostMapping / @PutMapping / @DeleteMapping 分别对应 POST / PUT / DELETE
}`},{type:"list",title:"要点",items:["`@RestController` 类中方法返回值 → 自动 JSON 序列化（底层用 Jackson）",'`@GetMapping("/xx")` 把 URL 映射到方法，等价于 `@RequestMapping(value="/xx", method=GET)`',"方法名随意，URL 才是对外的标识"]}]},{id:"sb-params",title:"2.2 接收参数：@RequestParam 与 @PathVariable",sections:[{type:"text",content:"客户端传参主要有两种位置：**URL 路径里**（如 `/user/1`）和**查询串里**（如 `/search?keyword=java`）。Spring Boot 提供了对应注解一一接收。"},{type:"code",title:"两种取参方式",lang:"java",code:`@RestController
public class SearchController {

    // 1. @PathVariable：取路径里的值，URL 如 /user/42
    @GetMapping("/user/{id}")
    public String getUser(@PathVariable Long id) {
        return "查询用户 id=" + id;
    }

    // 2. @RequestParam：取问号后的查询参数，URL 如 /search?keyword=java&page=2
    @GetMapping("/search")
    public String search(@RequestParam String keyword,
                         @RequestParam(defaultValue = "1") Integer page) {
        return "关键词=" + keyword + "，页码=" + page;
    }
}`},{type:"table",title:"常用取参注解对照",headers:["注解","取什么","示例 URL"],rows:[["@PathVariable","路径占位符 {id}","/user/42"],["@RequestParam","查询串参数 ?k=v","/search?keyword=java"],["@RequestBody","请求体 JSON（POST/PUT）","见下一课"],["@RequestHeader","请求头","Authorization 等"]]},{type:"warn",content:"必填的 `@RequestParam` 缺失时会直接 400 报错。可选参数用 `required = false` 并给默认值，避免接口太脆弱。"}]},{id:"sb-requestbody",title:"2.3 请求体与 DTO：@RequestBody",sections:[{type:"text",content:"POST/PUT 请求的数据通常放在**请求体**里，前端传 JSON，后端用 **@RequestBody** 把它自动转成 Java 对象。这个对象一般叫 **DTO**（Data Transfer Object），专门用来承载数据传输。"},{type:"code",title:"DTO 类 + POST 接口",lang:"java",code:`// DTO：字段名要和前端 JSON 的 key 一致，Jackson 才能自动对上
public class UserCreateDTO {
    private String name;
    private Integer age;

    // 必须有 getter/setter（或用 Lombok 的 @Data 自动生成）
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }
}`},{type:"code",title:"接收 JSON 请求体",lang:"java",code:`@RestController
public class UserController {

    // 前端 POST /users，请求体：{"name":"张三","age":20}
    @PostMapping("/users")
    public String create(@RequestBody UserCreateDTO dto) {
        return "创建用户：" + dto.getName() + "，年龄 " + dto.getAge();
    }
}`},{type:"list",title:"要点",items:["`@RequestBody` 只能有一个（一个请求只有一个体），而 `@RequestParam` 可以多个","字段对不上时 Jackson 默认忽略未知字段；类型对不上会抛 400","实际项目用 **Lombok** 的 `@Data` 注解替代手写 getter/setter，代码量大幅减少"]}]},{id:"sb-restful",title:"2.4 RESTful 风格与增删改查接口",sections:[{type:"text",content:"**RESTful** 是一套接口设计风格：用 **URL 表示资源**、用 **HTTP 方法表示操作**。同一资源 `/users`，方法不同就是不同操作，URL 简洁统一。"},{type:"table",title:"用户模块 RESTful 设计",headers:["操作","方法 + URL","说明"],rows:[["查询列表","GET /users","返回用户数组"],["查询单个","GET /users/{id}","返回一个用户"],["新增","POST /users","请求体带新用户数据"],["修改","PUT /users/{id}","请求体带修改内容"],["删除","DELETE /users/{id}","删除指定用户"]]},{type:"code",title:"完整的增删改查 Controller",lang:"java",code:`@RestController
@RequestMapping("/users")  // 类级别前缀，下面所有接口都带 /users
public class UserController {

    @GetMapping
    public List<User> list() { return userService.findAll(); }

    @GetMapping("/{id}")
    public User detail(@PathVariable Long id) { return userService.findById(id); }

    @PostMapping
    public User create(@RequestBody UserCreateDTO dto) { return userService.create(dto); }

    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody UserUpdateDTO dto) {
        return userService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { userService.delete(id); }
}`},{type:"tip",content:'返回"单个对象"和"列表"用不同类型表达，删除类操作可以返回 void（状态码 200 即可）。前端通过状态码 + 响应体综合判断结果。'}]},{id:"sb-exception",title:"2.5 全局异常处理",sections:[{type:"text",content:"接口一旦抛异常，默认会给前端返回一大页错误堆栈，既不友好也不安全。**@RestControllerAdvice** 可以统一捕获所有 Controller 抛出的异常，返回统一格式的 JSON。"},{type:"code",title:"自定义业务异常 + 全局处理器",lang:"java",code:`// 业务异常：携带希望返回给前端的提示信息
public class BusinessException extends RuntimeException {
    public BusinessException(String message) { super(message); }
}`},{type:"code",title:"统一异常处理器",lang:"java",code:`@RestControllerAdvice
public class GlobalExceptionHandler {

    // 捕获业务异常：返回 200 或自定义状态码，body 里带提示
    @ExceptionHandler(BusinessException.class)
    public Map<String, Object> handleBusiness(BusinessException e) {
        Map<String, Object> result = new HashMap<>();
        result.put("code", 400);
        result.put("message", e.getMessage());
        return result;
    }

    // 兜底：捕获所有未知异常，避免把堆栈暴露给前端
    @ExceptionHandler(Exception.class)
    public Map<String, Object> handleOther(Exception e) {
        Map<String, Object> result = new HashMap<>();
        result.put("code", 500);
        result.put("message", "服务器开小差了，请稍后再试");
        return result;
    }
}`},{type:"list",title:"要点",items:['业务代码里直接 `throw new BusinessException("余额不足")`，不用层层 try-catch',"参数校验异常（MethodArgumentNotValidException）通常也在这里单独处理","给用户看的 message 要友好；给开发排查的细节记到日志里"]}]}]},{id:"sb-ch3",title:"第三章 配置与 IoC 容器",lessons:[{id:"sb-config",title:"3.1 application.yml 与配置读取",sections:[{type:"text",content:"端口、数据库地址、自定义参数都写在 **application.yml** 里。读取配置有两种方式：零散配置用 **@Value**，成组配置用 **@ConfigurationProperties**。"},{type:"code",title:"application.yml 示例",lang:"yaml",code:`server:
  port: 8080          # 服务端口

app:
  name: IT学习中心     # 自定义配置（框架不认识，但可以读）
  upload-dir: /data/upload`},{type:"code",title:"两种读取方式",lang:"java",code:`// 方式一：@Value 适合单个零散配置
@RestController
public class DemoController {
    @Value("\${app.name}")
    private String appName;
}

// 方式二：@ConfigurationProperties 适合一组相关配置
// 前缀 app 会自动匹配 app.name、app.upload-dir
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;        // <- app.name
    private String uploadDir;   // <- app.upload-dir（自动驼峰映射）
    // getter/setter 省略（用 Lombok @Data 即可）
}`},{type:"tip",content:"yml 里 `key: value` 冒号后**必须有空格**；缩进用空格不能用 Tab。这是新手最常见的两个报错来源。"}]},{id:"sb-profiles",title:"3.2 多环境配置",sections:[{type:"text",content:"开发、测试、生产的数据库通常不一样。Spring Boot 用 **Profile** 解决：每个环境一个配置文件，启动时激活对应环境。"},{type:"code",title:"多环境文件组织",lang:"text",code:`src/main/resources
├── application.yml            # 公共配置 + 激活哪个环境
├── application-dev.yml        # 开发环境
├── application-test.yml       # 测试环境
└── application-prod.yml       # 生产环境`},{type:"code",title:"公共配置里指定激活环境",lang:"yaml",code:`# application.yml
spring:
  profiles:
    active: dev    # 默认激活开发环境

# 启动命令也可以临时覆盖：
# java -jar demo.jar --spring.profiles.active=prod`},{type:"list",title:"要点",items:["不同环境的文件只写**有差异的配置**（如数据库地址），公共配置留在主文件","生产环境的密码等敏感信息不要提交到 Git，可用环境变量 `${DB_PASSWORD}` 注入","打包时也可以通过启动参数切换环境，一个 jar 走天下"]}]},{id:"sb-ioc",title:"3.3 IoC 容器与 Bean",sections:[{type:"text",content:"**IoC（控制反转）**是 Spring 的核心思想：对象的创建和管理不由你自己 `new`，而是交给 Spring 的**容器**统一负责。容器里管理的对象就叫 **Bean**。你在 1.2 里写的 `@RestController` 类，其实就已经是一个 Bean 了。"},{type:"code",title:"把类交给容器管理：常用注解",lang:"java",code:`@Component            // 通用组件（不属于下面任何一层的工具类用它）
public class SmsUtil { }

@Service              // 业务层组件（语义化标注，功能同 @Component）
public class UserService { }

@Repository           // 数据层组件
public class UserRepository { }

@RestController       // 控制层组件
public class UserController { }`},{type:"code",title:"配置类：手动注册第三方库的 Bean",lang:"java",code:`@Configuration  // 声明这是配置类，启动时会被加载
public class AppConfig {

    // 第三方类你改不了源码、加不了注解，就在配置方法里手动 new 后交给容器
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();  // 之后别处注入 RestTemplate 即可使用
    }
}`},{type:"list",title:"要点",items:["容器默认是**单例**：全程序共用同一个 Bean 实例（可用 @Scope 改原型）","启动时容器创建所有 Bean，所以**启动慢、改代码要重启**是正常的",'同一接口有多个实现类时，用 @Primary 标默认，或 @Qualifier("名字") 指定']}]},{id:"sb-di",title:"3.4 依赖注入",sections:[{type:"text",content:'容器里有了 Bean，怎么在别的类里用？答案是**依赖注入（DI）**：不要自己 new，让容器把它"塞"进来。这样类的依赖是可替换、可测试的。'},{type:"code",title:"三种注入方式（推荐第一种）",lang:"java",code:`@Service
public class UserService {

    private final UserRepository userRepository;

    // 1. 构造器注入（推荐）：字段可加 final，依赖一目了然，且便于单元测试
    //    如果类里只有一个构造器，@Autowired 可以省略
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// 2. 字段注入：写法最短，但不利于测试，官方不推荐
@Service
class OrderService {
    @Autowired
    private UserService userService;
}

// 3. Setter 注入：用于可选依赖，少见
@Service
class ReportService {
    private SmsUtil smsUtil;
    @Autowired
    public void setSmsUtil(SmsUtil smsUtil) { this.smsUtil = smsUtil; }
}`},{type:"table",title:"三种方式对比",headers:["方式","优点","缺点"],rows:[["构造器注入","final 安全、强制依赖明确、易测试","参数多时构造器略长"],["字段注入","代码最少","无法 final、隐藏依赖、难单测"],["Setter 注入","可选依赖","依赖可能被中途改掉"]]},{type:"warn",content:"IDEA 会在字段注入的 @Autowired 上给黄色警告，就是在提醒你用构造器注入。Spring 官方文档也推荐构造器注入。"}]}]},{id:"sb-ch4",title:"第四章 数据库操作",lessons:[{id:"sb-datasource",title:"4.1 连接数据库",sections:[{type:"text",content:"以 PostgreSQL 为例（你已学过），只需引入驱动依赖 + 写好连接配置，Spring Boot 自动装配好数据源，无需手写连接池代码。"},{type:"code",title:"pom.xml 引入依赖",lang:"xml",code:`<!-- PostgreSQL 驱动（版本由 parent 统一管理） -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>`},{type:"code",title:"application.yml 数据源配置",lang:"yaml",code:`spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/itstudy
    username: postgres
    password: 你的密码
    driver-class-name: org.postgresql.Driver`},{type:"code",title:"最直接的操作方式：JdbcTemplate",lang:"java",code:`@RestController
public class JdbcController {

    private final JdbcTemplate jdbcTemplate;

    public JdbcController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/count")
    public Long count() {
        // queryForObject：查单个值
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", Long.class);
    }
}`},{type:"warn",content:"JdbcTemplate 适合简单场景和临时脚本，字段多时手写映射很痛苦。正式项目推荐下面的 Spring Data JPA 或 MyBatis。"}]},{id:"sb-jpa",title:"4.2 Spring Data JPA 入门",sections:[{type:"text",content:"**JPA** 是 Java 的 ORM 规范：**类对应表、字段对应列、对象对应行**，不用手写 SQL 就能完成常规增删改查。Spring Data JPA 是它的最佳实现，核心是**接口即实现**——你只声明接口，框架自动生成实现。"},{type:"code",title:"实体类：映射 users 表",lang:"java",code:`import jakarta.persistence.*;

@Entity                       // 声明这是 JPA 实体
@Table(name = "users")        // 对应的表名
public class User {

    @Id                       // 主键
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // 自增
    private Long id;

    private String name;      // 默认映射到 name 列

    @Column(name = "created_at")
    private LocalDateTime createdAt;  // 列名不同用 @Column 指定

    // JPA 要求必须有无参构造；getter/setter 省略
    public User() { }
}`},{type:"code",title:"Repository 接口：一行代码获得 CRUD",lang:"java",code:`import org.springframework.data.jpa.repository.JpaRepository;

// 继承 JpaRepository<实体, 主键类型>，自动拥有 save/findById/findAll/delete 等方法
public interface UserRepository extends JpaRepository<User, Long> {
    // 这一行就够了！不写任何实现，框架在运行时自动生成
}`},{type:"code",title:"在 Service 里直接使用",lang:"java",code:`@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(String name) {
        User user = new User();
        user.setName(name);
        // save：有 id 就更新，没 id 就插入，返回带 id 的实体
        return userRepository.save(user);
    }

    public List<User> all() { return userRepository.findAll(); }

    public User one(Long id) {
        // orElseThrow：查不到就抛异常（配合全局异常处理）
        return userRepository.findById(id)
            .orElseThrow(() -> new BusinessException("用户不存在"));
    }
}`},{type:"tip",content:"记得在配置里加 `spring.jpa.hibernate.ddl-auto: update`，JPA 会按实体自动建表/改表。生产环境建议用 `validate` + 手写 SQL 脚本管理表结构。"}]},{id:"sb-jpa-query",title:"4.3 查询方法与 @Query",sections:[{type:"text",content:"Spring Data JPA 最惊艳的能力是**方法名即查询**：按规则命名方法，框架自动解析生成 SQL，一个实现类都不用写。复杂查询再用 @Query 兜底。"},{type:"code",title:"方法名推导查询",lang:"java",code:`public interface UserRepository extends JpaRepository<User, Long> {

    // 自动生成：SELECT * FROM users WHERE name = ?
    List<User> findByName(String name);

    // 自动生成：SELECT * FROM users WHERE name LIKE %?%
    List<User> findByNameContaining(String keyword);

    // 自动生成：SELECT * FROM users WHERE age >= ? ORDER BY id DESC
    List<User> findByAgeGreaterThanOrderByIdDesc(Integer age);

    // 自动生成：SELECT COUNT(*) ... WHERE age BETWEEN ? AND ?
    Long countByAgeBetween(Integer min, Integer max);
}`},{type:"code",title:"复杂查询：@Query 自定义 JPQL / SQL",lang:"java",code:`public interface UserRepository extends JpaRepository<User, Long> {

    // JPQL：面向实体和字段，:name 是命名参数
    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findOlderThan(@Param("age") Integer age);

    // 原生 SQL：加 nativeQuery = true，写的是真正的数据库 SQL
    @Query(value = "SELECT * FROM users WHERE name LIKE %:kw%", nativeQuery = true)
    List<User> searchNative(@Param("kw") String kw);
}`},{type:"table",title:"方法名关键字速查",headers:["关键字","含义","示例"],rows:[["And / Or","且 / 或","findByNameAndAge"],["Containing","LIKE %x%","findByNameContaining"],["GreaterThan / LessThan","大于 / 小于","findByAgeGreaterThan"],["Between","区间","findByAgeBetween"],["IsNull / IsNotNull","为空 / 非空","findByEmailIsNull"],["OrderBy + 字段 + Desc","排序","OrderByIdDesc"]]},{type:"warn",content:"方法名推导只适合简单条件。一旦方法名长得离谱（三个 And 以上），就换 @Query，别硬撑。"}]},{id:"sb-mybatis",title:"4.4 MyBatis 与技术选型",sections:[{type:"text",content:"国内公司大量使用 **MyBatis / MyBatis-Plus**：SQL 完全由自己掌控，写在 XML 或注解里。它和 JPA 思路不同：**JPA 帮你写 SQL，MyBatis 让你亲写 SQL**。"},{type:"code",title:"MyBatis 的 Mapper 写法",lang:"java",code:`@Mapper  // 标注后 MyBatis 会为接口生成代理实现
public interface UserMapper {

    // 简单 SQL 直接注解写
    @Select("SELECT * FROM users WHERE id = #{id}")
    User findById(Long id);

    // 复杂 SQL 放 XML（同包同名 XML 文件里）
    List<User> search(@Param("kw") String keyword);
}`},{type:"code",title:"对应的 XML（resources/mapper/UserMapper.xml）",lang:"xml",code:`<mapper namespace="com.example.demo.mapper.UserMapper">
    <select id="search" resultType="com.example.demo.entity.User">
        SELECT * FROM users
        WHERE name LIKE CONCAT('%', #{kw}, '%')
        ORDER BY id DESC
    </select>
</mapper>`},{type:"table",title:"JPA vs MyBatis 选型参考",headers:["对比项","Spring Data JPA","MyBatis / MyBatis-Plus"],rows:[["SQL 控制","自动生成，简单高效","完全手写，灵活可控"],["开发速度","常规 CRUD 极快","需要写 XML/注解"],["复杂查询","推荐 @Query 或原生 SQL","擅长，想怎么写怎么写"],["适用场景","中小项目、外企/海外风格","国内主流、复杂报表多"]]},{type:"tip",content:"学习建议：先用 JPA 快速理解 ORM 思想，再学 MyBatis 适应国内主流。两者底层 JDBC 是一样的，切换成本不高。"}]}]},{id:"sb-ch5",title:"第五章 分层架构与事务",lessons:[{id:"sb-layers",title:"5.1 三层架构",sections:[{type:"text",content:"企业项目都遵循**三层架构**：Controller 管请求响应，Service 管业务逻辑，Repository 管数据读写。职责单一、层层依赖，代码才好维护、好测试。"},{type:"code",title:"一次请求的完整流转",lang:"text",code:`前端请求 → Controller（收参数、调 Service、返回结果）
         → Service（校验、业务规则、组合多个 Repository）
         → Repository（读写数据库）
         ← 数据原路返回，Controller 转成 JSON 给前端`},{type:"code",title:"标准分层代码示例",lang:"java",code:`@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) { this.userService = userService; }

    @PostMapping
    public User create(@RequestBody @Valid UserCreateDTO dto) {
        // 只做参数接收与结果返回，不写业务
        return userService.create(dto);
    }
}

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) { this.userRepository = userRepository; }

    public User create(UserCreateDTO dto) {
        // 业务规则写在 Service：如查重
        if (userRepository.findByName(dto.getName()).isPresent()) {
            throw new BusinessException("用户名已存在");
        }
        User user = new User();
        user.setName(dto.getName());
        return userRepository.save(user);
    }
}`},{type:"warn",content:"常见坏味道：Controller 里直接注入 Repository 写业务，或者 Service 里拼 JSON。层次一旦穿透，后期维护成本指数级上升。"}]},{id:"sb-transaction",title:"5.2 事务管理 @Transactional",sections:[{type:"text",content:"一个业务往往涉及多条 SQL，要么全成功、要么全回滚（你已在 PostgreSQL 课程学过事务）。Spring 里只需在方法上加 **@Transactional**，框架自动管理提交与回滚。"},{type:"code",title:"转账示例：经典的原子操作",lang:"java",code:`@Service
public class TransferService {

    private final AccountRepository accountRepository;

    public TransferService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Transactional  // 方法内所有数据库操作包成一个事务
    public void transfer(Long fromId, Long toId, BigDecimal amount) {
        Account from = accountRepository.findById(fromId).orElseThrow();
        Account to = accountRepository.findById(toId).orElseThrow();

        from.setBalance(from.getBalance().subtract(amount));
        to.setBalance(to.getBalance().add(amount));

        accountRepository.save(from);
        // 假设这里抛出异常：上面已"保存"的扣款会自动回滚，钱不会凭空消失
        accountRepository.save(to);
    }
}`},{type:"list",title:"重要细节",items:["默认只在遇到 **RuntimeException**（含 BusinessException）时回滚；受检异常需 `@Transactional(rollbackFor = Exception.class)`","注解加在类上 = 类里所有 public 方法都开启事务","**自调用失效**：同一个类里 A 方法调 B 方法（B 上有注解），B 的事务不生效——因为事务靠代理对象实现，this 调用绕过了代理"]},{type:"warn",content:"@Transactional 方法里别写耗时操作（调外部接口、发邮件），会长时间占用数据库连接，拖垮系统。先提交事务，再做副作用动作。"}]},{id:"sb-validation",title:"5.3 参数校验",sections:[{type:"text",content:"前端传来的数据不可信。与其在 Service 里写一串 if 判断，不如用 **Validation 注解**声明式校验：字段上标规则，入口自动检查。"},{type:"code",title:"DTO 上标注校验规则",lang:"java",code:`public class UserCreateDTO {

    @NotBlank(message = "用户名不能为空")       // 非空白字符串
    private String name;

    @Min(value = 1, message = "年龄最小 1 岁")
    @Max(value = 150, message = "年龄最大 150 岁")
    private Integer age;

    @Email(message = "邮箱格式不正确")
    private String email;

    // getter/setter 省略
}`},{type:"code",title:"入口加 @Valid 生效",lang:"java",code:`@PostMapping("/users")
public User create(@RequestBody @Valid UserCreateDTO dto) {
    // 校验不通过会抛 MethodArgumentNotValidException，进不了方法体
    return userService.create(dto);
}

// 配合全局异常处理，把校验信息友好地返回给前端
@ExceptionHandler(MethodArgumentNotValidException.class)
public Map<String, Object> handleValid(MethodArgumentNotValidException e) {
    String msg = e.getBindingResult().getFieldErrors().stream()
        .map(FieldError::getDefaultMessage)
        .collect(Collectors.joining("；"));
    return Map.of("code", 400, "message", msg);
}`},{type:"table",title:"常用校验注解",headers:["注解","作用"],rows:[["@NotNull / @NotBlank / @NotEmpty","非 null / 非空白串 / 非空集合"],["@Size(min, max)","长度或元素个数范围"],["@Min / @Max","数值范围"],["@Email","邮箱格式"],["@Pattern(regexp)","正则表达式"]]}]},{id:"sb-result",title:"5.4 统一响应封装",sections:[{type:"text",content:"接口直接返回裸数据，前端难以统一判断成功失败。业界惯例是所有接口返回**统一结构**：code（业务码）、message（提示）、data（数据本体）。"},{type:"code",title:"定义统一响应类",lang:"java",code:`public class Result<T> {
    private Integer code;     // 0 成功，非 0 失败
    private String message;   // 提示信息
    private T data;           // 业务数据

    public static <T> Result<T> ok(T data) {
        Result<T> r = new Result<>();
        r.code = 0;
        r.message = "success";
        r.data = data;
        return r;
    }

    public static <T> Result<T> fail(Integer code, String message) {
        Result<T> r = new Result<>();
        r.code = code;
        r.message = message;
        return r;
    }
    // getter/setter 省略
}`},{type:"code",title:"Controller 统一返回 Result",lang:"java",code:`@GetMapping("/{id}")
public Result<User> detail(@PathVariable Long id) {
    return Result.ok(userService.one(id));
}

// 前端拿到的 JSON：
// {"code":0,"message":"success","data":{"id":1,"name":"张三"}}`},{type:"tip",content:"进阶做法：全局异常处理器也返回 Result.fail(...)，让**成功与失败共用同一结构**；HTTP 状态码保持 200、用业务码区分，是国内外常见做法之一，团队统一即可。"}]}]},{id:"sb-ch6",title:"第六章 认证与安全",lessons:[{id:"sb-security",title:"6.1 Spring Security 入门",sections:[{type:"text",content:"**Spring Security** 是 Spring 官方的安全框架，负责两件事：**认证（你是谁）**和**授权（你能干什么）**。它基于一条**过滤器链**：请求进来先过一串安全过滤器，再到达你的 Controller。"},{type:"code",title:"引入依赖后的基本配置",lang:"xml",code:`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`},{type:"code",title:"SecurityFilterChain 配置（Spring Security 6 写法）",lang:"java",code:`@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // 关闭 CSRF（前后端分离 + JWT 场景通常不需要）
            .csrf(csrf -> csrf.disable())
            // 配置哪些 URL 需要什么权限
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/login", "/hello").permitAll()  // 放行
                .anyRequest().authenticated()                          // 其余都要登录
            )
            // 前后端分离用无状态会话
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    }
}`},{type:"list",title:"要点",items:["引入依赖后**所有接口默认都要登录**，必须写配置放行公开接口","默认会生成一个随机密码打印在启动日志里（用户名 user），开发期可用","前后端分离项目：关 CSRF + 无状态会话 + 自定义登录接口是标准组合"]}]},{id:"sb-jwt",title:"6.2 JWT 登录认证",sections:[{type:"text",content:"传统 Session 把登录状态存在服务器，集群和跨域都不方便。**JWT（JSON Web Token）**把登录凭证做成一段自包含的加密串发给前端，前端每次请求放在 `Authorization` 头里，服务器**验签即可信任**，无需存会话。"},{type:"code",title:"JWT 的三段结构",lang:"text",code:`xxxxx.yyyyy.zzzzz
  │      │      │
  │      │      └── 签名：用密钥对前两段签名，防篡改
  │      └── 载荷 Payload：用户 id、过期时间等（Base64，非加密！）
  └── 头部 Header：算法说明`},{type:"code",title:"登录接口：签发 token",lang:"java",code:`@RestController
public class AuthController {

    @PostMapping("/auth/login")
    public Map<String, String> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        // 1. 校验账号密码（省略）

        // 2. 用 JJWT 生成 token（引入 io.jsonwebtoken:jjwt 依赖）
        String token = Jwts.builder()
            .subject(username)                                   // 放用户标识
            .expiration(new Date(System.currentTimeMillis() + 7 * 24 * 3600 * 1000))  // 7 天过期
            .signWith(secretKey)                                 // 用密钥签名
            .compact();

        return Map.of("token", token);
    }
}`},{type:"code",title:"校验 token：过滤器统一拦截",lang:"java",code:`@Component
public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain) throws IOException, ServletException {
        String token = request.getHeader("Authorization");
        // 有 token 且格式正确 → 解析验签 → 构造登录身份放入上下文
        if (token != null && token.startsWith("Bearer ")) {
            try {
                Claims claims = Jwts.parser().verifyWith(secretKey).build()
                    .parseSignedClaims(token.substring(7)).getPayload();
                // 解析成功即认证通过（简化示例，实际要构造 Authentication 对象）
            } catch (JwtException e) {
                response.setStatus(401);
                return;  // token 无效直接拦截
            }
        }
        chain.doFilter(request, response);  // 放行给下一个过滤器
    }
}`},{type:"list",title:"要点",items:["token 放在请求头 `Authorization: Bearer <token>`","**Payload 只是 Base64 编码，不是加密**——绝不能放密码、手机号等敏感明文","token 泄露即身份泄露，设置较短过期时间 + Refresh Token 是常见加固方案"]}]},{id:"sb-bcrypt",title:"6.3 密码加密与权限控制",sections:[{type:"text",content:"密码**绝不能明文存库**（拖库即泄露）。用 **BCrypt** 单向哈希：存哈希值，登录时用 matches 比对。权限控制用注解声明即可。"},{type:"code",title:"注册：BCrypt 加密入库",lang:"java",code:`@Service
public class AuthService {

    // BCryptPasswordEncoder 已由 Security 自动装配，直接注入使用
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void register(String username, String rawPassword) {
        String hash = encoder.encode(rawPassword);
        // 存入数据库的是 hash，例如：$2a$10$X5wFBtLrL/kHcmrOGGTrGufsBX8CJ0WpQpfn3z8e...
        // 同一密码每次加密结果都不同（自带随机盐），但都能验证通过
        userRepository.save(new User(username, hash));
    }

    public boolean login(String username, String rawPassword) {
        User user = userRepository.findByName(username).orElseThrow();
        return encoder.matches(rawPassword, user.getPassword());  // 比对
    }
}`},{type:"code",title:"注解式权限控制",lang:"java",code:`@Configuration
@EnableMethodSecurity  // 开启方法级权限注解
public class MethodSecurityConfig { }

@RestController
public class AdminController {

    @PreAuthorize("hasRole('ADMIN')")   // 只有 ADMIN 角色能调
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) { /* ... */ }

    @PreAuthorize("isAuthenticated()")  // 登录即可
    @GetMapping("/me")
    public User me() { /* ... */ }
}`},{type:"list",title:"要点",items:["BCrypt 自带盐且**故意很慢**（可调强度），能有效抵御彩虹表和暴力破解","角色/权限存在数据库，登录时查出来放进认证上下文，注解按需声明","敏感操作（改密码、删除）建议二次校验权限，别只依赖前端隐藏按钮"]}]}]},{id:"sb-ch7",title:"第七章 缓存与任务",lessons:[{id:"sb-redis",title:"7.1 集成 Redis",sections:[{type:"text",content:"**Redis** 是内存键值数据库，读写极快（你已了解其数据类型）。Java 里通过 **Spring Data Redis** 操作，先引入依赖再配置连接，然后注入 **RedisTemplate** 或 **StringRedisTemplate** 使用。"},{type:"code",title:"依赖与配置",lang:"xml",code:`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>`},{type:"code",title:"application.yml 连接配置",lang:"yaml",code:`spring:
  data:
    redis:
      host: localhost
      port: 6379
      # password: 可选`},{type:"code",title:"典型用法：接口防重与计数",lang:"java",code:`@RestController
public class RankController {

    // StringRedisTemplate：键值都是字符串，最常用
    private final StringRedisTemplate redis;

    public RankController(StringRedisTemplate redis) { this.redis = redis; }

    // 点赞：自增计数
    @PostMapping("/like/{id}")
    public Long like(@PathVariable Long id) {
        return redis.opsForValue().increment("like:" + id);
    }

    // 简单防重：同一 IP 一分钟内只能提交一次
    @PostMapping("/submit")
    public String submit(HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        Boolean first = redis.opsForValue()
            .setIfAbsent("lock:" + ip, "1", Duration.ofMinutes(1));  // 不存在才设置
        if (Boolean.FALSE.equals(first)) {
            throw new BusinessException("操作太频繁，请稍后再试");
        }
        return "ok";
    }
}`},{type:"tip",content:"存对象推荐先转 JSON 字符串再存（Jackson 序列化），读取时反序列化回来，避免 JDK 原生序列化的兼容性坑。"}]},{id:"sb-cache",title:"7.2 Spring Cache 缓存抽象",sections:[{type:"text",content:"手动读写缓存代码重复度高。Spring 提供**缓存抽象**：加注解即可让方法的返回值自动进缓存，底层切换（Redis / Caffeine）不改业务代码。"},{type:"code",title:"开启缓存并使用注解",lang:"java",code:`@SpringBootApplication
@EnableCaching  // 开启缓存能力
public class DemoApplication { }

@Service
public class ArticleService {

    @Cacheable(value = "article", key = "#id")
    // 第一次执行方法并把结果缓存；之后同 id 直接命中缓存，方法体不再执行
    public Article findById(Long id) {
        return articleRepository.findById(id).orElseThrow();
    }

    @CacheEvict(value = "article", key = "#id")
    // 更新/删除时清除对应缓存，防止读到旧数据
    public void update(Long id, ArticleDTO dto) {
        /* 更新数据库 */
    }

    @CachePut(value = "article", key = "#id")
    // 执行方法并用返回值刷新缓存（适合"更新后返回最新值"）
    public Article save(Article article) { return articleRepository.save(article); }
}`},{type:"table",title:"三个核心注解",headers:["注解","时机","典型场景"],rows:[["@Cacheable","先查缓存，未命中才执行方法","查详情、查列表"],["@CachePut","执行方法并刷新缓存","更新后返回新值"],["@CacheEvict","执行方法并清缓存","删除、修改后失效旧数据"]]},{type:"warn",content:"缓存最大风险是**数据不一致**：更新数据库时一定要同步失效缓存（先更新库、再删缓存），否则用户会一直看到旧数据。"}]},{id:"sb-schedule",title:"7.3 定时任务与异步",sections:[{type:"text",content:"统计报表每天凌晨跑一次、日志每周清理一次——用 **@Scheduled**；发短信、生成大文件等耗时操作不该阻塞用户请求——用 **@Async** 异步执行。"},{type:"code",title:"定时任务",lang:"java",code:`@SpringBootApplication
@EnableScheduling  // 开启定时任务
public class DemoApplication { }

@Component
public class ReportJob {

    // cron 表达式：秒 分 时 日 月 周
    @Scheduled(cron = "0 0 2 * * ?")     // 每天凌晨 2 点执行
    public void dailyReport() {
        /* 统计昨日数据、生成报表 */
    }

    @Scheduled(fixedRate = 5 * 60 * 1000) // 每 5 分钟执行一次
    public void heartbeat() { /* ... */ }
}`},{type:"code",title:"异步任务",lang:"java",code:`@SpringBootApplication
@EnableAsync  // 开启异步
public class DemoApplication { }

@Service
public class NotifyService {

    @Async  // 调用时立即返回，方法体在别的线程执行
    public void sendSms(String phone, String content) {
        /* 调短信网关，可能耗时几秒 */
    }
}

// 业务里调用：用户请求瞬间返回，短信在后台慢慢发
notifyService.sendSms("13800000000", "您的订单已发货");`},{type:"list",title:"易错点",items:["@Scheduled 默认**单线程**串行执行，任务耗时长会互相阻塞，可自定义线程池","@Async 方法必须**被代理调用**（注入后调用），同类 this 调用不生效——和事务失效同理","@Async 方法不要声明返回依赖结果；需要结果时返回 Future/CompletableFuture"]}]}]},{id:"sb-ch8",title:"第八章 测试与部署",lessons:[{id:"sb-test",title:"8.1 单元测试与接口测试",sections:[{type:"text",content:"Spring Boot 自带 **JUnit 5** 测试体系。单元测试用 **Mockito** 模拟依赖隔离测试单个类；接口测试用 **MockMvc** 模拟 HTTP 请求验证整个链路。"},{type:"code",title:"单元测试：Mock 掉数据库依赖",lang:"java",code:`@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock                 // 模拟对象：不连真实数据库
    UserRepository userRepository;

    @InjectMocks          // 被测对象：自动注入上面的 Mock
    UserService userService;

    @Test
    void 创建用户_重名应抛异常() {
        // given：让 findByName 返回"已存在"
        when(userRepository.findByName("张三"))
            .thenReturn(Optional.of(new User()));

        // when + then：断言抛出业务异常
        assertThrows(BusinessException.class,
            () -> userService.create(new UserCreateDTO("张三", 20)));
    }
}`},{type:"code",title:"接口测试：MockMvc 模拟 HTTP 请求",lang:"java",code:`@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void 查询用户_应返回200和JSON() throws Exception {
        mockMvc.perform(get("/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.code").value(0));
    }
}`},{type:"list",title:"测试策略",items:["**单元测试**：不启动容器、毫秒级运行，覆盖业务规则（数量最多）","**接口测试**：启动完整上下文，验证参数绑定、校验、序列化（数量适中）","测试类/方法名直接写中文更易读；遵循 given-when-then 结构"]}]},{id:"sb-log",title:"8.2 日志",sections:[{type:"text",content:"Spring Boot 默认集成 **SLF4J + Logback**：代码里面向 SLF4J 接口打日志，Logback 负责输出格式与文件管理。生产排查问题全靠日志，别再 System.out.println 了。"},{type:"code",title:"两种打日志的方式",lang:"java",code:`@RestController
public class DemoController {

    // 方式一：声明 Logger（传统）
    private static final Logger log = LoggerFactory.getLogger(DemoController.class);

    // 方式二：Lombok 的 @Slf4j 注解自动生成上面的 log 字段

    @GetMapping("/demo")
    public String demo() {
        log.debug("调试信息，生产默认不输出");
        log.info("用户 {} 请求了接口", "张三");   // {} 占位符，避免字符串拼接
        log.warn("警告：库存不足");
        log.error("出错了", new RuntimeException("示例异常"));  // 异常作为第二参数
        return "ok";
    }
}`},{type:"code",title:"日志配置：级别与文件输出",lang:"yaml",code:`logging:
  level:
    root: info                    # 全局级别
    com.example.demo: debug       # 自己的包开 debug 便于开发
  file:
    name: logs/app.log            # 输出到文件
  logback:
    rollingpolicy:
      max-file-size: 10MB         # 单文件上限，自动滚动归档
      max-history: 30             # 保留 30 天`},{type:"table",title:"日志级别从低到高",headers:["级别","用途"],rows:[["DEBUG","开发调试细节，生产关闭"],["INFO","关键流程节点（订单创建、登录成功）"],["WARN","可自动恢复的异常状态"],["ERROR","错误，需要人工介入排查"]]}]},{id:"sb-package",title:"8.3 打包部署",sections:[{type:"text",content:"Spring Boot 项目打成**可执行 jar**（内嵌 Tomcat），服务器上有 JDK 就能跑，无需安装任何中间件——这是它部署简单的原因。"},{type:"code",title:"打包与运行",lang:"bash",code:`# 1. Maven 打包（跳过测试可加 -DskipTests）
mvn clean package

# 2. 产物在 target 目录：demo-0.0.1-SNAPSHOT.jar

# 3. 上传服务器后直接运行（需 JDK 17+）
java -jar demo-0.0.1-SNAPSHOT.jar

# 4. 常用启动参数：指定端口、环境、后台运行
java -jar demo.jar --server.port=9090 --spring.profiles.active=prod
nohup java -jar demo.jar > app.log 2>&1 &`},{type:"code",title:"进阶：Docker 部署（Dockerfile）",lang:"dockerfile",code:`# 用 JDK 17 作为基础镜像
FROM eclipse-temurin:17

# 把 jar 复制进镜像
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# 容器启动时运行
ENTRYPOINT ["java", "-jar", "/app.jar"]

# 构建并运行：
# docker build -t demo .
# docker run -d -p 8080:8080 demo`},{type:"list",title:"部署检查清单",items:["生产配置（数据库、密钥）走**环境变量或独立配置**，不打包进 jar","用 `nohup ... &` 或 systemd/Docker 让进程**常驻后台**，SSH 断开不退出","健康检查：引入 actuator，访问 `/actuator/health` 确认服务存活"]}]}]},{id:"sb-ch9",title:"第九章 综合实战",lessons:[{id:"sb-project-design",title:"9.1 项目设计：图书管理 API",sections:[{type:"text",content:"把前面学的东西串起来，做一个**图书管理 API**：登录、图书增删改查、列表缓存。动手前先做两件设计：**表结构**和**接口清单**。"},{type:"code",title:"表结构（PostgreSQL）",lang:"sql",code:`-- 用户表：存登录账号
CREATE TABLE users (
    id          BIGSERIAL PRIMARY KEY,
    username    VARCHAR(50)  NOT NULL UNIQUE,
    password    VARCHAR(100) NOT NULL,   -- BCrypt 哈希
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 图书表
CREATE TABLE books (
    id          BIGSERIAL PRIMARY KEY,
    title       VARCHAR(100) NOT NULL,
    author      VARCHAR(50),
    price       NUMERIC(10, 2),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`},{type:"table",title:"接口清单",headers:["方法 + URL","说明","是否需登录"],rows:[["POST /auth/register","注册（密码 BCrypt 加密）","否"],["POST /auth/login","登录，返回 JWT","否"],["GET /books","图书列表（Redis 缓存）","否"],["GET /books/{id}","图书详情","否"],["POST /books","新增图书（校验 + 登录）","是"],["PUT /books/{id}","修改图书（失效缓存）","是"],["DELETE /books/{id}","删除图书（失效缓存）","是"]]},{type:"list",title:"技术点对照",items:["分层：Controller → Service → Repository","数据：Spring Data JPA + PostgreSQL","安全：JWT 登录 + BCrypt 密码","缓存：Spring Cache + Redis","规范：统一响应 Result + 全局异常 + 参数校验"]}]},{id:"sb-project-code",title:"9.2 核心功能实现",sections:[{type:"text",content:"按依赖顺序写代码：**实体 → Repository → Service → Controller → 安全配置**。下面是最核心的片段，完整代码建议亲手敲一遍。"},{type:"code",title:"实体与 Repository",lang:"java",code:`@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "书名不能为空")
    private String title;

    private String author;

    @DecimalMin(value = "0.0", message = "价格不能为负")
    private BigDecimal price;

    public Book() { }
    // getter/setter 省略
}

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByTitleContaining(String kw);
}`},{type:"code",title:"Service：业务 + 缓存",lang:"java",code:`@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Cacheable(value = "bookList", key = 'all')
    public List<Book> list(String keyword) {
        // 有关键词走模糊查询，否则查全部
        return (keyword == null || keyword.isBlank())
            ? bookRepository.findAll()
            : bookRepository.findByTitleContaining(keyword);
    }

    @CacheEvict(value = "bookList", allEntries = true)  // 增删改都清列表缓存
    public Book create(BookCreateDTO dto) {
        Book book = new Book();
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setPrice(dto.getPrice());
        return bookRepository.save(book);
    }

    @CacheEvict(value = "bookList", allEntries = true)
    public void delete(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new BusinessException("图书不存在");
        }
        bookRepository.deleteById(id);
    }
}`},{type:"code",title:"Controller：统一响应 + 校验",lang:"java",code:`@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) { this.bookService = bookService; }

    @GetMapping
    public Result<List<Book>> list(@RequestParam(required = false) String keyword) {
        return Result.ok(bookService.list(keyword));
    }

    @PostMapping
    public Result<Book> create(@RequestBody @Valid BookCreateDTO dto) {
        return Result.ok(bookService.create(dto));
    }

    @DeleteMapping("/{id}")
    public Result<Void> delete(@PathVariable Long id) {
        bookService.delete(id);
        return Result.ok(null);
    }
}`},{type:"tip",content:"用 Postman 或 IDEA 的 HTTP Client 从注册、登录开始完整走一遍流程，每个接口都试成功与失败两种情况，收获最大。"}]},{id:"sb-roadmap",title:"9.3 进阶路线",sections:[{type:"text",content:'完成图书管理项目后，你已经能独立开发常规后端服务了。接下来按这个顺序进阶，每个方向都建议以"做一个小项目"来巩固。'},{type:"table",title:"进阶方向一览",headers:["方向","学什么","对应课程"],rows:[["接口文档","Swagger / springdoc 自动生成 API 文档","本课"],["AOP","切面编程：接口耗时统计、操作日志","本课"],["消息队列","RabbitMQ / Kafka：削峰、解耦、异步","进阶"],["微服务","Spring Cloud：注册中心、网关、配置中心","进阶"],["容器化","Docker + Docker Compose 一键部署","运维"],["监控","Actuator + Prometheus + Grafana","运维"]]},{type:"list",title:"建议的练手项目（由易到难）",items:["**博客系统**：文章 CRUD + 评论 + 标签，练熟关联查询与分页","**在线商城**：商品 + 订单 + 支付流程，练事务与并发（库存扣减）","**短链接服务**：练 Redis 高频读写与设计权衡","每做完一个，把它**部署上线**，比多写十个本地 Demo 更有含金量"]},{type:"tip",content:"学后端的终点不是背注解，而是理解**每个技术解决什么问题**：缓存解决慢、队列解决堵、微服务解决大。带着问题学，知识才能串成线。"}]}]}]},ap={id:"python",name:"Python",short:"Python",color:"#7c3aed",description:"简洁优雅的胶水语言：数据分析、人工智能与自动化的首选",chapters:[{id:"python-ch1",title:"第一章 Python 入门",lessons:[{id:"python-what-is",title:"1.1 Python 是什么",sections:[{type:"text",content:"Python 是一门以**简洁易读**著称的编程语言：同样的功能，代码量常常只有 Java 的一半甚至更少。它是数据分析、人工智能、自动化办公、网络爬虫领域的第一语言，也常被选为**编程入门的第一门语言**。"},{type:"list",title:"Python 能做什么",items:["**数据分析**：用 pandas、matplotlib 处理表格、画图表","**人工智能**：机器学习、深度学习框架几乎都以 Python 为主接口","**自动化脚本**：批量重命名文件、自动发邮件、操作 Excel，解放双手","**网站后端**：Django、Flask 框架搭建网站服务","**网络爬虫**：自动抓取网页数据做汇总分析"]},{type:"tip",content:'Python 的名字来自喜剧团体"蒙提·派森"，跟蟒蛇没关系，但它的图标确实是两条蛇。'}]},{id:"python-install",title:"1.2 安装与两种运行方式",sections:[{type:"text",content:"Python 有两种常见运行方式：**交互式环境**（输入一行执行一行，适合做实验）和**脚本文件**（写好 .py 文件整体运行，正式写代码用）。"},{type:"list",title:"安装步骤",items:["到官网 python.org 下载最新稳定版（3.x），安装时**务必勾选 Add Python to PATH**","验证：命令行输入 `python --version` 显示版本号即成功","编辑器：推荐 VS Code（装 Python 插件）或 PyCharm 社区版"]},{type:"code",title:"两种运行方式",lang:"text",code:`# 方式一：交互式环境（命令行输入 python 回车进入）
>>> print("你好")
你好
>>> 1 + 1
2
>>> exit()   # 退出

# 方式二：把代码写进 hello.py，然后命令行执行
# > python hello.py
# 程序从上到下执行一遍后结束`},{type:"tip",content:'交互式环境是学 Python 的"草稿纸"：随输随得，试语法最方便。'}]},{id:"python-hello",title:"1.3 第一个程序与注释",sections:[{type:"text",content:'Python 没有"类必须叫什么"的仪式感，一行 `print` 就是完整程序。注释用 `#`，多行注释用三个引号。'},{type:"code",title:"hello.py",lang:"python",code:`# 这是单行注释，井号后面的内容不执行

"""
这是多行注释（文档字符串）
可以写很多行说明
"""

print("Hello, World!")     # 打印输出
print("人生苦短，我用 Python")

# print 可以一次打印多个值，默认用空格分隔
print("姓名：", "小明", "年龄：", 18)`},{type:"list",title:"与 Java 对比（如果你学过）",items:["Java 要写类和 main 方法，Python 一行就是程序","Python 用**缩进**代替大括号表示代码块，这是它最大的语法特色","语句结尾**不需要分号**，一行一条语句"]}]},{id:"python-print-input",title:"1.4 print 进阶与 input 输入",sections:[{type:"text",content:'print 和 input 是 Python 的"嘴巴和耳朵"，先熟练掌握这两个内置函数，后面一切交互程序都靠它们。'},{type:"code",title:"输出与输入",lang:"python",code:`# print 的常用参数
print("A", "B", "C", sep="-")     # A-B-C，sep 指定分隔符
print("不换行", end="")            # end 控制结尾，默认是换行
print("接着打印")

# input：读取键盘输入，返回的永远是字符串
name = input("你叫什么名字？")
print("你好，" + name)

# 输入的数字要转成 int 才能做算术
age = input("你几岁？")
age = int(age)                    # 字符串转整数
print("明年你就", age + 1, "岁了")`},{type:"list",title:"要点",items:['`input()` 返回的**一定是字符串**，"5" + 1 会报错，必须先 `int()` 转换',"忘记转换是新手最常踩的坑，报错 TypeError 时先检查输入类型","`print()` 变量不用加引号，加了引号打印的就是文字本身"]}]}]},{id:"python-ch2",title:"第二章 变量与基础语法",lessons:[{id:"python-variables",title:"2.1 变量与数据类型",sections:[{type:"text",content:"Python 是**动态类型**语言：变量不用声明类型，赋什么值就是什么类型，还能随时换。常用内置类型：int（整数）、float（小数）、str（字符串）、bool（布尔）、list/dict/tuple/set（组合类型，第四章细讲）。"},{type:"code",title:"变量与类型",lang:"python",code:`age = 18               # int，不用写类型
ame = "小明"           # str，单双引号都可以
price = 9.99           # float
is_vip = True          # bool 注意首字母大写

# type() 查看类型
print(type(age))       # <class 'int'>
print(type(name))      # <class 'str'>

# 变量可以随时改变类型（动态类型的自由与风险）
x = 100
x = "hello"            # 合法，但会让代码难读，要克制

# 命名规范：小写加下划线（snake_case）
student_name = "小红"
MAX_COUNT = 100        # 常量习惯全大写（Python 没有真正的常量）`},{type:"list",title:"要点",items:["命名：字母/下划线开头，见名知意，小写+下划线是社区主流","`type()` 查类型，`isinstance(x, int)` 判断类型","Python 没有字符和字符串之分，`\"a\"` 和 `'a'` 都是 str"]}]},{id:"python-string",title:"2.2 字符串与 f-string",sections:[{type:"text",content:"Python 的字符串功能强大。**f-string**（格式化字符串）是把变量嵌进文字的最好方式：字符串前加 f，变量用大括号包住。"},{type:"code",title:"字符串常用操作",lang:"python",code:`name = "python"

# f-string：最推荐的拼接方式
age = 18
print(f"我叫小明，今年 {age} 岁")         # 大括号里直接放变量
print(f"明年 {age + 1} 岁")               # 大括号里还能算表达式
pi = 3.14159
print(f"圆周率保留两位：{pi:.2f}")         # 3.14

# 常用方法
print(name.upper())        # PYTHON
print(name.capitalize())   # Python 首字母大写
print(len(name))           # 6，取长度是内置函数不是方法
print(name.replace("py", "PY"))
print("  hi  ".strip())    # 去首尾空格
print("a,b,c".split(","))  # ['a', 'b', 'c'] 拆成列表
print("py" in name)        # True，in 判断包含

# 长文本用三引号，可以换行
text = """第一行
第二行"""
print(text)`},{type:"list",title:"格式化方式对比",items:['f-string：`f"{name}今年{age}"` —— 最简洁，Python 3.6+ 首选','format 方法：`"{}今年{}".format(name, age)` —— 兼容老版本','% 格式化：`"%s今年%d" % (name, age)` —— 老代码常见，新代码别用']}]},{id:"python-cast",title:"2.3 类型转换",sections:[{type:"text",content:"类型之间用**转换函数**切换：`int()`、`float()`、`str()`、`bool()`。转换失败会抛 ValueError 异常（第七章讲如何捕获）。"},{type:"code",title:"转换函数",lang:"python",code:`# 字符串 <-> 数字
n = int("123")         # "123" -> 123
f = float("3.14")      # "3.14" -> 3.14
s = str(456)           # 456 -> "456"

# int 转换规则：直接砍掉小数（不是四舍五入）
print(int(3.99))       # 3
print(int(-3.99))      # -3，向零取整

# 四舍五入用 round
print(round(3.5))      # 4（银行家舍入，.5 取偶数）
print(round(3.14159, 2))   # 3.14

# bool 转换：空值都是 False
print(bool(0), bool(""), bool([]))    # False False False
print(bool(1), bool("a"), bool([0]))  # True True True

# 转换失败会抛异常
# int("abc")   # ValueError: invalid literal for int()`},{type:"tip",content:"eval() 能把字符串当代码执行，很酷但很危险，永远不要对用户输入用 eval。"}]},{id:"python-operators",title:"2.4 运算符（含独门绝技）",sections:[{type:"text",content:"Python 运算符和其他语言大同小异，但有几个**独门绝技**：幂运算 `**`、整除 `//`、链式比较、多重赋值。"},{type:"code",title:"运算符速览",lang:"python",code:`# 算术
print(7 / 2)     # 3.5，除法永远得小数
print(7 // 2)    # 3，整除（向下取整）
print(7 % 2)     # 1，取余
print(2 ** 10)   # 1024，幂运算

# 链式比较：Python 特有的优雅写法
score = 85
print(60 <= score < 90)      # True，等价于 60 <= score and score < 90

# 多重赋值：一行交换两个变量
a, b = 1, 2
a, b = b, a                  # 交换完成，不需要临时变量！
print(a, b)                  # 2 1

# 逻辑运算符是英文单词
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# 身份判断：is 比较是否同一个对象，== 比较内容是否相等
x = [1, 2]
y = [1, 2]
print(x == y)    # True，内容一样
print(x is y)    # False，两个不同的列表对象`},{type:"list",title:"易错点",items:["`/` 除法结果永远是 float，`10 / 2` 得 5.0","比较内容用 `==`，`is` 只用于 None 判断（`if x is None`）","`and`/`or`/`not` 是单词，不是 `&&`/`||`/`!`"]}]}]},{id:"python-ch3",title:"第三章 流程控制",lessons:[{id:"python-if",title:"3.1 if 条件判断",sections:[{type:"text",content:"Python 用**缩进**代替大括号：冒号后面缩进的代码属于这个分支。缩进通常是 4 个空格，必须保持一致，缩进错误会直接报错——强制你写出整洁代码。"},{type:"code",title:"if / elif / else",lang:"python",code:`score = 85

# elif 是 else if 的缩写
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")          # 走这条分支
elif score >= 60:
    print("及格")
else:
    print("不及格")

# 条件组合用 and / or
age = 20
if age >= 18 and age < 60:
    print("成年人")

# Python 独有的多值判断
fruit = "苹果"
if fruit in ["苹果", "香蕉", "橘子"]:
    print("这是常见水果")

# 三目（条件表达式）：值1 if 条件 else 值2
status = "成年" if age >= 18 else "未成年"`},{type:"list",title:"要点",items:["冒号 + 缩进是 Python 的语法骨架，缩进不一致直接 IndentationError","空列表、空字符串、0、None 都算 False，可以直接 `if items:` 判断非空","判断相等用 `==`，赋值 `=` 不能出现在条件里"]}]},{id:"python-while",title:"3.2 while 循环",sections:[{type:"text",content:'while 循环"条件为真就一直转"，适合**次数不确定**的场景，比如让用户反复输入直到正确为止。'},{type:"code",title:"while 与无限循环",lang:"python",code:`# 倒计时
n = 5
while n > 0:
    print(n)
    n -= 1            # Python 没有 n--，要用 n -= 1
print("发射！")

# 猜数字：while True + break 是经典套路
answer = 42
while True:               # 永远循环
    guess = int(input("猜一个数字："))
    if guess == answer:
        print("猜对了！")
        break             # 跳出循环
    elif guess < answer:
        print("小了")
    else:
        print("大了")`},{type:"list",title:"要点",items:["Python 没有 `n++`，自增写 `n += 1`",'`while True` 配合 `break` 是"直到成功为止"的标准写法',"循环条件永远为真又忘了 break，就是死循环，Ctrl+C 可以强制中断"]}]},{id:"python-for-range",title:"3.3 for 循环与 range",sections:[{type:"text",content:'Python 的 for 是"**遍历**"：直接拿出序列里的每个元素，不需要下标。要下标时用 `range()` 生成数字序列。'},{type:"code",title:"for 与 range",lang:"python",code:`# 遍历列表：直接拿元素，不用写 arr[i]
fruits = ["苹果", "香蕉", "橘子"]
for fruit in fruits:
    print(fruit)

# range 三种用法
for i in range(5):          # 0 1 2 3 4，range(5) 是 0 到 4
    print(i, end=" ")
print()

for i in range(1, 6):       # 1 到 5，含头不含尾
    print(i, end=" ")
print()

for i in range(10, 0, -2):  # 步长 -2：10 8 6 4 2
    print(i, end=" ")
print()

# 1 到 100 求和
total = 0
for i in range(1, 101):
    total += i
print(total)                # 5050

# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}x{i}={i*j}", end="\\t")
    print()`},{type:"list",title:"要点",items:["`range(结束)`、`range(开始, 结束)`、`range(开始, 结束, 步长)`，都是**含头不含尾**","遍历字典、字符串、文件都可以直接 for","要同时要下标和元素用 `enumerate(fruits)`"]}]},{id:"python-break-continue",title:"3.4 break、continue 与循环配 else",sections:[{type:"text",content:'break 结束整个循环，continue 跳过本轮。Python 还有一个其他语言没有的冷知识：**循环可以配 else**——循环"没被 break 打断、正常跑完"时执行。'},{type:"code",title:"跳转与循环 else",lang:"python",code:`nums = [3, 7, 11, 18, 25]

# break：找到就停
for n in nums:
    if n == 11:
        print("找到了 11")
        break

# continue：跳过偶数
for n in range(1, 6):
    if n % 2 == 0:
        continue
    print(n)               # 1 3 5

# 循环配 else：常用于"找遍了都没有"的场景
for n in nums:
    if n == 100:
        print("找到了")
        break
else:
    # 只有循环完整跑完（没被 break）才会执行
    print("没找到 100")`},{type:"tip",content:'for-else 很冷门但很优雅，判断"是否存在"时可以省掉一个标志变量。'}]}]},{id:"python-ch4",title:"第四章 组合数据类型",lessons:[{id:"python-list",title:"4.1 列表：万能的百宝箱",sections:[{type:"text",content:"列表（list）是 Python 最常用的容器：**有序、可变、可混合类型**，相当于其他语言的数组但要灵活得多。"},{type:"code",title:"列表增删改查",lang:"python",code:`nums = [10, 20, 30]

# 增
nums.append(40)            # 尾部追加
nums.insert(0, 5)          # 指定位置插入
nums.extend([50, 60])      # 合并另一个列表

# 删
nums.remove(20)            # 按值删（删第一个匹配的）
last = nums.pop()          # 弹出末尾并返回
first = nums.pop(0)        # 弹出指定位置

# 改查
nums[0] = 99               # 下标赋值
print(nums[0], len(nums))
print(30 in nums)          # True

# 常用操作
scores = [88, 92, 75, 60, 95]
print(max(scores), min(scores), sum(scores))
print(sum(scores) / len(scores))   # 平均分
scores.sort()              # 原地升序排序
scores.sort(reverse=True)  # 降序
print(sorted(scores))      # sorted 返回新列表，不改原列表`},{type:"list",title:"要点",items:["下标从 0 开始；负数下标从尾部数：`nums[-1]` 是最后一个元素","`append` 一次加一个，`extend` 合并一批","`sort()` 改原列表，`sorted()` 产生新列表，注意区分"]}]},{id:"python-tuple-slice",title:"4.2 元组与切片",sections:[{type:"text",content:'**元组**（tuple）是"不可变的列表"：创建后不能增删改，适合存放不该被修改的数据。**切片**（slice）则是对序列"取一段"的通用语法，列表、字符串、元组都支持。'},{type:"code",title:"元组与切片语法",lang:"python",code:`# 元组：小括号定义，不可修改
point = (3, 5)
x, y = point              # 解包：一次拆给两个变量
print(x, y)               # 3 5
# point[0] = 9            # 报错！元组不可修改

# 只有 1 个元素的元组要加逗号
t = (42,)                 # 不加逗号就成了普通括号表达式

# 切片语法：序列[开始:结束:步长]，含头不含尾
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(nums[2:5])     # [2, 3, 4]
print(nums[:3])      # [0, 1, 2]，从头取
print(nums[7:])      # [7, 8, 9]，取到尾
print(nums[::2])     # [0, 2, 4, 6, 8]，步长 2
print(nums[::-1])    # 倒序！经典技巧

# 字符串同样支持切片
s = "Hello Python"
print(s[0:5])        # Hello
print(s[::-1])       # nohtyP olleH`},{type:"tip",content:"函数返回多个值，其实就是返回了一个元组：`return x, y`，接收时自动解包。"}]},{id:"python-dict",title:"4.3 字典：键值对的映射",sections:[{type:"text",content:'字典（dict）存"键值对"，通过**键**直接查**值**，查询速度极快，相当于 Java 里的 HashMap，是 Python 里用得第二多的容器。'},{type:"code",title:"字典增删改查与遍历",lang:"python",code:`student = {"name": "小明", "age": 18}

# 查：用键取值
print(student["name"])              # 小明，键不存在会报错 KeyError
print(student.get("phone"))         # None，get 不会报错
print(student.get("phone", "未填写"))  # 可以给默认值

# 增改：同一个写法，键存在就改、不存在就增
student["age"] = 19
student["city"] = "深圳"

# 删
student.pop("city")

# 遍历
for key in student:                 # 默认遍历键
    print(key, student[key])

for key, value in student.items():  # 同时拿键和值（推荐）
    print(f"{key}: {value}")

# 成员判断
print("name" in student)            # True，判断的是键

# 字典嵌套：很常见的数据结构
users = {
    "u1": {"name": "小明", "score": 90},
    "u2": {"name": "小红", "score": 95},
}
print(users["u2"]["score"])         # 95`},{type:"list",title:"要点",items:["键必须是不可变类型（字符串、数字、元组），值随意","取值首选 `.get()`，避免键不存在时崩溃","Python 3.7+ 字典保持插入顺序"]}]},{id:"python-set",title:"4.4 集合与去重",sections:[{type:"text",content:"集合（set）是**无序、不重复**的容器，天生就是去重神器，还支持数学上的交并差运算。"},{type:"code",title:"集合去重与运算",lang:"python",code:`# 最常见用法：列表去重
nums = [1, 2, 2, 3, 3, 3]
unique = list(set(nums))
print(unique)               # [1, 2, 3]（顺序可能变化）

# 增删
s = {1, 2, 3}
s.add(4)
s.discard(2)                # 不存在也不报错（remove 会报错）

# 数学运算
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)    # {3, 4}，交集：都有的
print(a | b)    # {1, 2, 3, 4, 5, 6}，并集：合并
print(a - b)    # {1, 2}，差集：a 有 b 没有

# 判断关系
print({1, 2} <= a)          # True，是子集`},{type:"tip",content:"空集合必须写 set()，写 {} 得到的是空字典——新手常踩的坑。"}]}]},{id:"python-ch5",title:"第五章 函数",lessons:[{id:"python-function",title:"5.1 定义、调用与返回值",sections:[{type:"text",content:"用 `def` 定义函数。Python 函数可以返回多个值（其实是返回元组自动解包），这是它简洁的另一体现。"},{type:"code",title:"函数基础",lang:"python",code:`# 定义：def 函数名(参数): + 缩进函数体
def greet(name):
    """向某人问好（文档字符串）"""       # 三引号说明文档
    print(f"你好，{name}！")

# 有返回值
def add(a, b):
    return a + b

# 返回多个值
def min_max(nums):
    return min(nums), max(nums)

low, high = min_max([3, 1, 9, 4])   # 解包接收
print(low, high)                     # 1 9

# 没写 return 或 return 后面为空，返回 None
result = greet("小明")               # 打印：你好，小明！
print(result)                        # None

# 带默认提示的提前返回
def divide(a, b):
    if b == 0:
        return None                  # 提前结束
    return a / b`},{type:"list",title:"要点",items:["函数定义不会执行，调用才执行；必须**先定义后调用**","`return` 立即结束函数；返回多个值用逗号隔开","函数是好程序的基本单位：一段逻辑起个名字，反复使用"]}]},{id:"python-args",title:"5.2 参数详解：默认、可变、关键字",sections:[{type:"text",content:"Python 的参数系统非常灵活：可以给参数默认值、可以一次接收任意多个参数、可以不按顺序用名字传参。"},{type:"code",title:"四种参数形态",lang:"python",code:`# 1. 默认参数：不传就用默认值
def greet(name, greeting="你好"):
    print(f"{greeting}，{name}")

greet("小明")               # 你好，小明
greet("小明", "早安")       # 早安，小明

# 2. 关键字参数：按名字传，不用管顺序
greet(greeting="晚安", name="小红")

# 3. 可变参数 *args：收一堆位置参数，打包成元组
def total(*args):
    print(sum(args))

total(1, 2, 3)              # 6
total(1, 2, 3, 4, 5)        # 15

# 4. 关键字可变参数 **kwargs：收一堆键值对，打包成字典
def info(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}={v}")

info(name="小明", age=18)   # name=小明 / age=18

# 经典组合签名：def fn(普通, 默认=值, *args, **kwargs)`},{type:"list",title:"大坑警示：可变默认值",items:["默认值不要用列表/字典！`def f(x=[])` 的默认列表会被所有调用共享修改","正确做法：默认用 None，函数体内再创建 `x = x or []` 或判空新建"]}]},{id:"python-scope-lambda",title:"5.3 作用域与 lambda",sections:[{type:"text",content:'函数内创建的变量是**局部变量**，函数外看不见；函数外的是**全局变量**。**lambda** 则是"一次性小函数"的快捷写法，常与排序、map/filter 搭配。'},{type:"code",title:"作用域与 lambda",lang:"python",code:`# 作用域
count = 0                  # 全局变量

def increase():
    global count           # 声明要修改全局变量
    count += 1

increase()
print(count)               # 1

# 局部变量只在函数内有效
def demo():
    x = 10                 # 局部变量
    print(x)

# lambda：参数: 表达式，表达式结果就是返回值
square = lambda x: x ** 2
print(square(5))           # 25

# 最常见用法：给 sorted 提供排序规则
students = [("小明", 90), ("小红", 95), ("小刚", 85)]
by_score = sorted(students, key=lambda s: s[1], reverse=True)
print(by_score)            # 按分数从高到低

# 配合 map / filter
nums = [1, 2, 3, 4, 5]
print(list(map(lambda x: x * 2, nums)))       # [2,4,6,8,10]
print(list(filter(lambda x: x % 2 == 0, nums)))  # [2,4]`},{type:"tip",content:"lambda 只能写一行表达式，复杂逻辑还是老实写 def。能赋名字的 lambda（square = lambda...）建议直接改成 def，规范更好。"}]},{id:"python-module",title:"5.4 模块与 import",sections:[{type:"text",content:'**模块**就是一个 .py 文件，**包**是模块的文件夹。import 的世界让 Python 的"电池全含"标准库和第三方生态为你所用。'},{type:"code",title:"import 的各种姿势",lang:"python",code:`# 1. 导入整个模块
import math
print(math.sqrt(16))       # 4.0

# 2. 只导入需要的函数
from math import sqrt, pi
print(sqrt(25), pi)        # 5.0 3.14159...

# 3. 起别名
import json as j

# 4. 导入自己写的模块
# 假设有 utils.py，里面有 def hello(): ...
# from utils import hello
# hello()

# 标准库几个好用的
import random
print(random.randint(1, 6))        # 随机整数 1~6

import time
time.sleep(1)                      # 暂停 1 秒

import os
print(os.getcwd())                 # 当前工作目录

# __name__ 技巧：模块既能被运行又能被导入
def main():
    print("程序启动")

if __name__ == "__main__":         # 直接运行本文件时才执行
    main()                         # 被别人 import 时不执行`},{type:"tip",content:'`if __name__ == "__main__":` 是每个脚本文件的标准结尾写法，含义是"只有直接运行才执行，被导入不执行"。'}]}]},{id:"python-ch6",title:"第六章 面向对象",lessons:[{id:"python-class",title:"6.1 类与实例",sections:[{type:"text",content:"Python 用 `class` 定义类。**`__init__`** 是构造方法（注意两边各两个下划线），**self** 代表当前实例——相当于 Java 的 this，但必须显式写出来。"},{type:"code",title:"类的定义与使用",lang:"python",code:`class Student:
    # 类属性：所有实例共享
    school = "实验中学"

    # 构造方法：创建实例时自动执行
    def __init__(self, name, age):
        # 实例属性：每个对象一份
        self.name = name
        self.age = age

    # 实例方法：第一个参数永远是 self
    def introduce(self):
        print(f"我是{self.name}，{self.age}岁")

    def birthday(self):
        self.age += 1

# 创建实例：不需要 new 关键字
s1 = Student("小明", 18)
s2 = Student("小红", 17)

s1.introduce()             # 我是小明，18岁
s1.birthday()
print(s1.age)              # 19，只影响 s1 自己
print(Student.school)      # 类属性通过类访问
print(s2.school)           # 实例也能访问到`},{type:"list",title:"要点",items:["self 必须是实例方法的第一个参数，调用时不用传，Python 自动传入","`__init__` 里以 self.xxx = 形参 的方式定义实例属性",'属性可以随时给实例添加：`s1.phone = "13800"` 合法但要有节制']}]},{id:"python-inherit",title:"6.2 继承与多态",sections:[{type:"text",content:'Python 支持多继承：`class Dog(Animal)` 表示继承 Animal。子类重写父类方法后，用 **super()** 调用父类版本。多态在 Python 里是"鸭子类型"：不看类型看行为。'},{type:"code",title:"继承与重写",lang:"python",code:`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print("动物在叫")


class Dog(Animal):                 # 括号里写父类
    def __init__(self, name, breed):
        super().__init__(name)     # 调用父类构造方法
        self.breed = breed         # 补充自己的属性

    def speak(self):               # 重写父类方法
        print(f"{self.name}：汪汪！")


class Cat(Animal):
    def speak(self):
        print(f"{self.name}：喵~")


# 多态：同一个调用，不同表现
animals = [Dog("旺财", "柴犬"), Cat("咪咪")]
for a in animals:
    a.speak()                      # 各自执行自己重写的版本

# isinstance 判断类型
print(isinstance(Dog("A", "B"), Animal))   # True`},{type:"tip",content:'鸭子类型：只要对象有 speak() 方法就能传进循环里用，Python 不检查它是不是 Animal 的子类——"走起来像鸭子，那它就是鸭子"。'}]},{id:"python-magic",title:"6.3 魔术方法",sections:[{type:"text",content:"**魔术方法**是双下划线包住的特殊方法（如 `__init__`、`__str__`），它们由 Python 在特定时机自动调用。用好魔术方法能让自定义类像内置类型一样好用。"},{type:"code",title:"常用魔术方法",lang:"python",code:`class Book:
    def __init__(self, title, price):
        self.title = title
        self.price = price

    def __str__(self):
        # print(对象) 时自动调用，返回面向用户的描述
        return f"《{self.title}》 ¥{self.price}"

    def __eq__(self, other):
        # == 比较时自动调用，自定义"相等"的标准
        return self.title == other.title and self.price == other.price

    def __len__(self):
        # len(对象) 时自动调用
        return len(self.title)

b1 = Book("Python入门", 59.0)
b2 = Book("Python入门", 59.0)
print(b1)                  # 《Python入门》 ¥59.0
print(len(b1))             # 9
print(b1 == b2)            # True，因为自定义了 __eq__
print(b1 is b2)            # False，还是两个不同对象`},{type:"list",title:"常见魔术方法一览",items:["`__init__` 构造、`__str__` 打印、`__repr__` 调试显示","`__eq__` 相等、`__lt__` 小于（可让对象参与排序）","`__len__` 长度、`__getitem__` 让对象支持 [] 下标访问、`__iter__` 支持遍历"]}]}]},{id:"python-ch7",title:"第七章 文件、异常与标准库",lessons:[{id:"python-file",title:"7.1 文件读写：with open",sections:[{type:"text",content:"Python 读写文件的标准姿势是 **with open(...)**：with 块结束时文件自动关闭，永远不会忘记释放资源。"},{type:"code",title:"文件的写与读",lang:"python",code:`# 写文件：w 模式覆盖写（不存在则创建）
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("第一行\\n")
    f.write("第二行\\n")
    f.writelines(["第三行\\n", "第四行\\n"])

# 追加写：a 模式
with open("notes.txt", "a", encoding="utf-8") as f:
    f.write("追加的一行\\n")

# 读文件：r 模式
with open("notes.txt", "r", encoding="utf-8") as f:
    content = f.read()          # 一次读全部
    print(content)

# 逐行读（大文件友好）
with open("notes.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())     # strip 去掉行尾换行符

# 一次性读成行列表
with open("notes.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()`},{type:"list",title:"模式与编码",items:['"r" 读、"w" 覆盖写、"a" 追加写；加 b 是二进制模式（图片等）','**encoding="utf-8" 必须写**，否则 Windows 下读中文可能乱码',"读不存在的文件抛 FileNotFoundError，可配合下一课的 try 捕获"]}]},{id:"python-json",title:"7.2 JSON：数据的通用格式",sections:[{type:"text",content:"JSON 是程序之间交换数据的通用格式，长得和 Python 字典几乎一样。`json` 模块负责字典与 JSON 文本之间的转换，是做配置文件、保存数据、调用接口的必备工具。"},{type:"code",title:"JSON 与字典互转",lang:"python",code:`import json

student = {"name": "小明", "age": 18, "scores": [90, 85]}

# 字典 -> JSON 字符串（序列化）
s = json.dumps(student, ensure_ascii=False)   # ensure_ascii=False 让中文正常显示
print(s)                    # {"name": "小明", "age": 18, "scores": [90, 85]}

# JSON 字符串 -> 字典（反序列化）
data = json.loads('{"name": "小红", "age": 17}')
print(data["name"])         # 小红

# 保存到文件 / 从文件读取
with open("student.json", "w", encoding="utf-8") as f:
    json.dump(student, f, ensure_ascii=False, indent=2)   # indent 美化缩进

with open("student.json", "r", encoding="utf-8") as f:
    obj = json.load(f)
print(obj["scores"])        # [90, 85]`},{type:"list",title:"易混淆的方法名",items:["`dumps`/`loads` 处理**字符串**（s 结尾 = string）","`dump`/`load` 直接读写**文件**","JSON 的键必须是字符串，Python 字典的键则随意（元组等不可当 JSON 键）"]}]},{id:"python-exception",title:"7.3 异常处理：try-except",sections:[{type:"text",content:"Python 用 **try-except-finally** 处理异常，思想和 Java 一样，关键字不同。捕获异常后程序不会崩溃，可以给出友好提示或重试。"},{type:"code",title:"异常处理结构",lang:"python",code:`try:
    age = int(input("请输入年龄："))    # 可能抛 ValueError
    result = 100 / age                  # 可能抛 ZeroDivisionError
    print(f"结果：{result}")
except ValueError:
    print("请输入合法的数字")
except ZeroDivisionError:
    print("年龄不能为 0")
except Exception as e:                  # 兜底捕获，e 是异常对象
    print(f"未知错误：{e}")
else:
    print("没有异常时执行这句")          # 可选分支
finally:
    print("无论如何都执行，适合收尾清理")

# 主动抛出异常：raise
# raise ValueError("年龄不合法")

# 自定义异常
class AgeError(Exception):
    pass

# raise AgeError("年龄超出范围")`},{type:"list",title:"要点",items:["except 从上到下匹配，具体的异常放前面，Exception 兜底放最后","`as e` 拿到异常对象，`e` 可打印错误信息","抛异常用 `raise`，自定义异常继承 Exception 即可"]}]},{id:"python-stdlib",title:"7.4 常用标准库巡礼",sections:[{type:"text",content:'Python 的口号是"电池全含"：标准库覆盖日常开发的大部分需求。认识几个最常用的，遇到需求记得先想标准库。'},{type:"code",title:"标准库小例子",lang:"python",code:`import os
import shutil

# os：操作系统交互
print(os.getcwd())                    # 当前目录
print(os.listdir("."))                # 列出目录内容
# os.makedirs("新文件夹", exist_ok=True)
# shutil.copy("a.txt", "b.txt")       # 复制文件

# pathlib：更现代的路径处理
from pathlib import Path
p = Path("data") / "notes.txt"        # 用 / 拼路径，跨平台
print(p.suffix)                       # .txt

# datetime：日期时间
from datetime import datetime, timedelta
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))  # 格式化输出
tomorrow = now + timedelta(days=1)     # 时间加减

# collections：增强容器
from collections import Counter
words = ["苹果", "香蕉", "苹果", "苹果", "橘子"]
print(Counter(words))                  # 统计次数：{"苹果": 3, ...}

# itertools：迭代工具
import itertools
print(list(itertools.combinations("ABC", 2)))  # 组合：[(A,B),(A,C),(B,C)]`},{type:"tip",content:'学标准库的诀窍不是背，而是遇到问题时知道"标准库可能已经有了"，先查文档再造轮子。'}]}]},{id:"python-ch8",title:"第八章 进阶特性",lessons:[{id:"python-comprehension",title:"8.1 列表推导式",sections:[{type:"text",content:'**推导式**（comprehension）是 Python 最有标志性的语法：一行代码完成"遍历 + 加工 + 筛选"，替代大部分简单 for 循环。'},{type:"code",title:"推导式全家桶",lang:"python",code:`# 老写法：把列表每个元素平方
nums = [1, 2, 3, 4, 5]
squares = []
for n in nums:
    squares.append(n ** 2)

# 列表推导式：一行搞定
squares = [n ** 2 for n in nums]
print(squares)               # [1, 4, 9, 16, 25]

# 带条件筛选：只要偶数的平方
even_squares = [n ** 2 for n in nums if n % 2 == 0]
print(even_squares)          # [4, 16]

# 带转换的字符串处理
names = ["alice", "bob", "carl"]
print([n.capitalize() for n in names])   # [Alice, Bob, Carl]

# 字典推导式：单词 -> 长度
words = ["apple", "banana", "cherry"]
length_map = {w: len(w) for w in words}
print(length_map)            # {apple: 5, banana: 6, cherry: 6}

# 集合推导式
print({n % 3 for n in nums}) # {0, 1, 2}

# 生成器表达式：圆括号，惰性求值省内存
total = sum(n ** 2 for n in range(101))   # 1~100 的平方和
print(total)`},{type:"list",title:"何时使用",items:["逻辑简单（一两个步骤）用推导式，可读性最好","逻辑复杂就老老实实写 for 循环，别硬塞进一行","数据量巨大且只需遍历一次时，用生成器表达式省内存"]}]},{id:"python-generator",title:"8.2 生成器",sections:[{type:"text",content:'**生成器**（generator）是"边生成边消费"的序列：不一次性把所有数据放进内存，而是要用一个算一个。写法上就是把 return 换成 **yield**。处理海量数据、无限序列的利器。'},{type:"code",title:"yield 与惰性求值",lang:"python",code:`# 普通函数：一次性生成整个列表，数据量大时吃内存
def make_squares_list(n):
    result = []
    for i in range(n):
        result.append(i ** 2)
    return result

# 生成器函数：包含 yield，调用时立即返回一个生成器对象
def make_squares_gen(n):
    for i in range(n):
        yield i ** 2        # 每次在这里"暂停"，交出一个值

# 使用：for 会自动推动它逐个产出
gen = make_squares_gen(5)
for v in gen:
    print(v)                # 0 1 4 9 16

# next() 手动取下一个值
g = make_squares_gen(3)
print(next(g))              # 0
print(next(g))              # 1
print(next(g))              # 4
# 再 next 会抛 StopIteration，for 循环会自动处理它

# 无限序列只有生成器能表达
def natural_numbers():
    n = 1
    while True:             # 无限循环也没关系，用到才计算
        yield n
        n += 1`},{type:"tip",content:'记忆：return 是"把全部结果交出去就结束"，yield 是"交出一个结果然后暂停，下次从这继续"。'}]},{id:"python-decorator",title:"8.3 装饰器初步",sections:[{type:"text",content:'**装饰器**（decorator）是"给函数套一层外壳"的语法：不修改原函数代码，就能给它增加统一的功能（如计时、日志、权限检查）。它本质是"接收函数、返回新函数"的高阶函数。'},{type:"code",title:"计时装饰器",lang:"python",code:`import time
from functools import wraps

def timer(func):
    @wraps(func)                       # 保留原函数的名字和文档
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs) # 调用原函数
        cost = time.time() - start
        print(f"{func.__name__} 耗时 {cost:.3f} 秒")
        return result
    return wrapper

# @timer 的含义：slow_task = timer(slow_task)
@timer
def slow_task(n):
    total = sum(i for i in range(n))
    return total

slow_task(10_000_000)     # 输出：slow_task 耗时 0.xxx 秒

# 多个装饰器可以叠加（从下往上套）
# @timer
# @logger
# def foo(): ...`},{type:"list",title:"要点",items:["`@装饰器名` 只是 `函数 = 装饰器(函数)` 的语法糖",'装饰器不改变原函数的调用方式，"透明地"增加功能',"Web 框架里的登录校验、接口缓存，大多由装饰器实现"]},{type:"tip",content:"初学阶段看懂装饰器即可，先会用（比如直接用别人的 @timer），写复杂装饰器的能力随项目经验自然增长。"}]}]},{id:"python-ch9",title:"第九章 实战与方向",lessons:[{id:"python-pip",title:"9.1 pip 与虚拟环境",sections:[{type:"text",content:"标准库之外，Python 的真正威力来自**第三方库**（pandas、requests、numpy……），用 pip 安装。**虚拟环境**则让每个项目有独立的库版本，互不干扰——工程实践第一步。"},{type:"code",title:"pip 与 venv 常用命令",lang:"text",code:`# 安装第三方库（终端执行，不是 python 代码）
pip install requests            # 安装
pip install pandas==2.0.0       # 指定版本
pip list                        # 查看已安装
pip install --upgrade pip       # 升级 pip 自己

# 创建虚拟环境（每个项目一份独立环境）
python -m venv .venv

# 激活（Windows PowerShell）
.venv\\Scripts\\Activate.ps1
# 激活后命令行前面出现 (.venv)，此时 pip 装的库只属于本项目

# 导出 / 恢复依赖清单（配合 git 使用）
pip freeze > requirements.txt
pip install -r requirements.txt`},{type:"list",title:"工作流约定",items:["每个新项目都先建虚拟环境再装库，别往全局环境乱装","requirements.txt 提交到 git，换电脑/换机器一条命令恢复环境","IDE（PyCharm/VS Code）里把解释器指向项目的 .venv"]},{type:"tip",content:"国内网络慢可以给 pip 换清华镜像：pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 库名。"}]},{id:"python-mini-project",title:"9.2 综合小项目：命令行记账本",sections:[{type:"text",content:"把学过的知识串起来：这个记账本用到**函数、字典/列表、文件持久化（json）、异常处理、循环交互**，全部代码不到 60 行。"},{type:"code",title:"ledger.py 完整代码",lang:"python",code:`import json
from pathlib import Path

DATA_FILE = Path("ledger.json")


def load_records():
    """从文件加载历史记录，没有就返回空列表"""
    if DATA_FILE.exists():
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def save_records(records):
    """把记录保存到文件"""
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)


def add_record(records):
    """添加一笔支出"""
    item = input("买了什么：")
    try:
        amount = float(input("花了多少钱："))
    except ValueError:
        print("金额必须是数字，重新来")
        return
    records.append({"item": item, "amount": amount})
    save_records(records)
    print(f"已记录：{item} ¥{amount}")


def show_records(records):
    """展示全部记录与总支出"""
    if not records:
        print("还没有记录")
        return
    for i, r in enumerate(records, start=1):
        print(f"{i}. {r['item']} ¥{r['amount']}")
    total = sum(r["amount"] for r in records)
    print(f"共 {len(records)} 笔，总计 ¥{total:.2f}")


def main():
    records = load_records()          # 启动时加载历史数据
    while True:
        print("\\n==== 记账本 ====")
        print("1. 记一笔  2. 查看全部  3. 退出")
        choice = input("请选择：")
        if choice == "1":
            add_record(records)
        elif choice == "2":
            show_records(records)
        elif choice == "3":
            print("再见！")
            break
        else:
            print("无效选项")


if __name__ == "__main__":
    main()`},{type:"list",title:"这个项目练到了什么",items:["函数拆分：每个功能一个小函数，main 负责调度","数据持久化：json + pathlib 让数据关机也不丢","异常处理：float() 转换失败不至于崩溃","循环交互：while True + break 的标准命令行套路"]}]},{id:"python-roadmap",title:"9.3 学习路线与方向选择",sections:[{type:"text",content:"掌握核心语法后，Python 的方向差异很大，根据兴趣选一条深入即可。"},{type:"list",title:"四大主流方向",items:["**数据分析/科学计算**：numpy → pandas → matplotlib，处理表格数据、画图报告","**人工智能**：在数据分析基础上学 scikit-learn（机器学习）→ PyTorch（深度学习）","**Web 后端**：Flask（轻量）或 Django（全家桶），配合数据库做网站接口","**自动化办公/爬虫**：openpyxl 操作 Excel、requests + BeautifulSoup 抓数据，见效最快"]},{type:"list",title:"实战建议",items:["自动化：写脚本批量整理你电脑里的文件、自动导出 Excel 报表","爬虫：抓一个你常逛网站的数据做统计分析",'数据分析：找一份公开数据集（如电影评分），完整走一遍"清洗→分析→可视化"',"每个项目都回本站对应章节复习，用综合测试自测"]},{type:"tip",content:'学编程的最快路径是"带着问题找答案"：先想做点什么，再学需要的部分，比按部就班啃书高效得多。'}]}]}]},lp={id:"pg",name:"PostgreSQL",short:"PG",color:"#336791",description:"功能强大的开源关系型数据库：存数据、查数据是后端开发的必修课",chapters:[{id:"pg-ch1",title:"第一章 数据库入门",lessons:[{id:"pg-what-is",title:"1.1 什么是数据库与 PostgreSQL",sections:[{type:"text",content:'前面学的变量、文件都在内存或文本文件里，程序一关数据就没了。**数据库**是专门用来"长期、安全、高效存取数据"的软件。关系型数据库把数据组织成一张张**表格**（行列结构），并用 **SQL** 语言进行操作。'},{type:"list",title:"为什么选 PostgreSQL（简称 PG）",items:["**完全开源免费**，没有商业授权烦恼，个人和企业都能随便用","**功能最全的开源库**：支持 JSON、数组、全文检索、地理信息等高级特性","**标准 SQL 实现最严格**，学会了 PG 再用 MySQL/Oracle 都容易上手","**生态地位高**：国内外大厂大量使用，近年 popularity 增速第一"]},{type:"list",title:"常见关系型数据库对比",items:["PostgreSQL：功能最全、标准严格，本站的选择","MySQL：互联网公司常用，读多写少场景表现好","SQLite：单文件数据库，无需安装，手机 App 内嵌常用","Oracle / SQL Server：商业数据库，银行等传统大企业使用"]},{type:"tip",content:"NoSQL（如 MongoDB、Redis）是另一大流派，适合特定场景；打牢关系型数据库基础是通用能力。"}]},{id:"pg-install",title:"1.2 安装与连接工具",sections:[{type:"text",content:"PG 采用**客户端-服务器**架构：数据库服务（postgres 进程）在后台运行，你用客户端工具连接它执行 SQL。安装一次服务，之后所有客户端都能连。"},{type:"list",title:"安装步骤（Windows）",items:["官网 postgresql.org 下载安装包（推荐 16 或 17 版本），安装时设置超级用户 postgres 的密码","记住端口默认 **5432**，安装完成后 PG 服务会作为 Windows 服务自动启动","命令行验证：`psql -U postgres -h localhost`，输入密码能进入即成功（可能需要把 bin 目录加入 Path）"]},{type:"list",title:"客户端工具怎么选",items:["**psql**：官方命令行客户端，最轻量，学它还能顺便掌握运维命令","**pgAdmin**：官方图形界面，可视化建表、看数据，新手友好","**DBeaver**：免费的通用数据库工具，一个软件连多种数据库，强烈推荐","**IDEA / VS Code 插件**：写代码时顺便查库，开发中最顺手"]},{type:"tip",content:"本站示例统一用 psql 风格书写，图形工具里粘贴 SQL 一样能跑。"}]},{id:"pg-concepts",title:"1.3 核心概念：库、表、行、列",sections:[{type:"text",content:'PG 的层级结构像"文件系统"：一台数据库服务器（Server）里建多个**数据库**（Database），每个库里有多张**表**（Table），表由**列**（Column，规定了数据类型）和**行**（Row，一条条记录）组成。'},{type:"code",title:"一张表长什么样",lang:"text",code:`表：students（学生表）
+----+--------+-----+---------+
| id | name   | age | city    |     <- 列（Column），有类型约束
+----+--------+-----+---------+
| 1  | 小明   | 18  | 深圳    |     <- 行（Row），一条记录
| 2  | 小红   | 17  | 广州    |
| 3  | 小刚   | 19  | 北京    |
+----+--------+-----+---------+
主键 id：每一行的唯一编号，绝不允许重复`},{type:"list",title:"必知术语",items:["**主键（Primary Key）**：唯一标识一行的列，不能重复、不能为空",'**字段（Field）**：列的别名，"name 字段"就是 name 列','**实例（实例化）无关**：表结构是"型"，一行行数据是"值"',"**SQL**：Structed Query Language，和数据库对话的标准语言"]},{type:"tip",content:'设计表时先想清楚"存什么、每列是什么类型、靠哪列区分每一行"，比急着写 SQL 更重要。'}]},{id:"pg-sql-types",title:"1.4 SQL 分类与学习地图",sections:[{type:"text",content:"SQL 语句按功能分四大类，整个数据库学习就是围绕它们展开的。"},{type:"code",title:"SQL 的四大门派",lang:"text",code:`DQL 数据查询（用得最多，本站重点）
  SELECT ... FROM ... WHERE ...

DML 数据操纵（增删改数据）
  INSERT / UPDATE / DELETE

DDL 数据定义（创建修改表结构）
  CREATE / ALTER / DROP

DCL 数据控制（权限管理）
  GRANT / REVOKE`},{type:"list",title:"学习顺序建议",items:["第一章先建库建表（DDL），往里放数据（DML）","第二~五章集中火力练查询（DQL），这是日常 80% 的工作","第六~八章学函数、视图索引、事务，处理真实项目需求",'最后一章动手连接程序语言，数据库才算真正"用起来"']},{type:"tip",content:"SQL 关键字大小写不敏感（SELECT 和 select 等价），但习惯上关键字大写、表名列名小写，可读性最好。"}]}]},{id:"pg-ch2",title:"第二章 基础查询",lessons:[{id:"pg-select",title:"2.1 SELECT：从表里取数据",sections:[{type:"text",content:'SELECT 是 SQL 的灵魂：告诉数据库"**要哪些列、从哪张表**"。本课用一张 students 示例表贯穿学习。'},{type:"code",title:"SELECT 基本用法",lang:"sql",code:`-- 查所有列：* 代表全部（学习用，生产别用 *）
SELECT * FROM students;

-- 只查需要的列（列顺序可以自定义）
SELECT name, age FROM students;

-- 给列起别名（AS 可省略）
SELECT name AS 姓名, age AS 年龄 FROM students;

-- 查询时做简单计算
SELECT name, 2026 - birth_year AS age FROM students;

-- 只查前几条
SELECT * FROM students LIMIT 5;`},{type:"list",title:"要点",items:["FROM 后面是表名；多条语句用分号分隔",'别名用 AS（或空格），含中文/空格时加双引号：`AS "姓 名"`',"SELECT 后可以写字段、常量、表达式，不一定是纯列名"]}]},{id:"pg-where",title:"2.2 WHERE：条件过滤",sections:[{type:"text",content:'WHERE 负责"**只留下满足条件的行**"，是查询精准度的关键。比较、逻辑、模糊三类条件必须熟练。'},{type:"code",title:"WHERE 全家福",lang:"sql",code:`-- 比较：= <> != > < >= <=（等于是一个等号！）
SELECT * FROM students WHERE age >= 18;
SELECT * FROM students WHERE city = '深圳';   -- 文本要加单引号

-- 逻辑组合：AND OR NOT
SELECT * FROM students WHERE age >= 18 AND city = '深圳';

-- 范围：BETWEEN 含头含尾
SELECT * FROM students WHERE age BETWEEN 17 AND 19;

-- 集合：IN 列表匹配
SELECT * FROM students WHERE city IN ('北京', '上海');

-- 空值判断：不能用 = NULL，必须用 IS NULL / IS NOT NULL
SELECT * FROM students WHERE phone IS NULL;

-- 模糊匹配：% 任意多个字符，_ 单个字符
SELECT * FROM students WHERE name LIKE '小%';   -- 小明、小红、小刚
SELECT * FROM students WHERE name LIKE '_明';   -- 小明、大明（两字且第二字是明）`},{type:"list",title:"易错点",items:['文本用**单引号**，双引号在 PG 里是给"列名/表名"用的',"NULL 判断必须 IS NULL，写 = NULL 永远查不到","AND 优先级高于 OR，混用时加括号最保险"]}]},{id:"pg-order-limit",title:"2.3 ORDER BY 排序与 LIMIT 分页",sections:[{type:"text",content:'查出来的数据默认"乱序"（物理存储顺序）。ORDER BY 指定排序规则，LIMIT 控制条数——两者组合就是**分页查询**。'},{type:"code",title:"排序与分页",lang:"sql",code:`-- 按年龄从大到小（DESC 降序，ASC 升序默认可省略）
SELECT * FROM students ORDER BY age DESC;

-- 多字段排序：先按城市升序，同城再按年龄降序
SELECT * FROM students ORDER BY city ASC, age DESC;

-- 分页：第 1 页每页 10 条
SELECT * FROM students ORDER BY id LIMIT 10 OFFSET 0;
-- 第 3 页（每页 10 条）
SELECT * FROM students ORDER BY id LIMIT 10 OFFSET 20;`},{type:"list",title:"要点",items:["**没有 ORDER BY 的分页不可靠**，必须先排序再 LIMIT","OFFSET 跳过前 N 条：页码 n、每页 m，公式 `OFFSET (n-1)*m`","排序字段有重复值时结果顺序不稳定，分页排序最好带上主键兜底"]},{type:"tip",content:'OFFSET 很大时（如第 1000 页）性能会变差，大分页优化可以改用"记住上一页最后一条 id"的方式（游标分页）。'}]},{id:"pg-distinct-null",title:"2.4 DISTINCT 去重与 NULL 的脾气",sections:[{type:"text",content:'DISTINCT 用来去掉查询结果里的重复行；NULL 则是 SQL 里最特殊的值——它表示"**不知道、不存在**"，不等于任何值包括它自己。'},{type:"code",title:"去重与 NULL",lang:"sql",code:`-- 看看表里有哪些城市（自动去重）
SELECT DISTINCT city FROM students;

-- 多列去重：city 和 age 都相同才算重复
SELECT DISTINCT city, age FROM students;

-- 统计行数时注意 NULL
SELECT COUNT(*) FROM students;          -- 所有行数
SELECT COUNT(phone) FROM students;      -- phone 不为 NULL 的行数！

-- NULL 参与运算结果还是 NULL
-- 有人的 bonus 是 NULL，想算总收入：
SELECT name, salary + COALESCE(bonus, 0) AS total FROM employees;`},{type:"list",title:"NULL 三定律",items:["NULL = NULL 结果是 NULL（不是 true），所以必须用 IS NULL","NULL 和任何值做算术运算，结果都是 NULL","COUNT(列) 不统计 NULL，COUNT(*) 统计所有行——两者结果可能不同"]}]}]},{id:"pg-ch3",title:"第三章 表设计与增删改",lessons:[{id:"pg-datatypes",title:"3.1 常用数据类型",sections:[{type:"text",content:"建表前必须知道每列该用什么类型。PG 的类型系统非常丰富，日常掌握下面这些就够用了。"},{type:"code",title:"常用类型速查",lang:"sql",code:`-- 整数
SMALLINT          -- 小整数
INTEGER           -- 常用整数（int）
BIGINT            -- 大整数（雪花 id、计数）

-- 小数
NUMERIC(10, 2)    -- 精确小数，总共 10 位、2 位小数，金额必用！
REAL / DOUBLE PRECISION  -- 浮点（有精度误差，别存钱）

-- 文本
VARCHAR(50)       -- 限长文本
TEXT              -- 不限长（PG 里 TEXT 一样高效，推荐）

-- 时间
DATE              -- 日期 2026-08-30
TIMESTAMP         -- 日期+时间
TIMESTAMPTZ       -- 带时区的时间戳（推荐）

-- 其他
BOOLEAN           -- true / false
JSONB             -- 二进制 JSON，可索引可查询，PG 招牌特性
UUID              -- 全局唯一标识`},{type:"list",title:"选型经验",items:["**钱必须用 NUMERIC**，浮点类型会有 0.1+0.2≠0.3 的精度问题","文本长度不确定一律 TEXT，PG 对 TEXT 做了优化，不必迷信 VARCHAR(n)","时间用 TIMESTAMPTZ，存储 UTC，显示自动转时区，避免时区灾难",'数据里天然有一层"结构不稳定"的信息（如商品扩展属性）可用 JSONB']}]},{id:"pg-create-table",title:"3.2 CREATE TABLE 与约束",sections:[{type:"text",content:'约束（Constraint）是表结构的"守门员"：不符合规则的数据直接拒绝写入，从源头保证数据质量。**PRIMARY KEY、NOT NULL、UNIQUE、DEFAULT、CHECK、FOREIGN KEY** 六大约束必须掌握。'},{type:"code",title:"建表实战",lang:"sql",code:`-- 建学生表
CREATE TABLE students (
    id          INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,  -- 自增主键
    name        VARCHAR(20) NOT NULL,            -- 非空
    email       VARCHAR(100) UNIQUE,             -- 唯一
    age         SMALLINT CHECK (age BETWEEN 0 AND 150),  -- 检查条件
    city        VARCHAR(20) DEFAULT '未知',      -- 默认值
    created_at  TIMESTAMPTZ DEFAULT now()        -- 默认当前时间
);

-- 删除表（慎重！数据全没）
DROP TABLE IF EXISTS students;

-- 清空表数据但保留表结构（比 DELETE 快）
TRUNCATE TABLE students;`},{type:"list",title:"约束小结",items:["PRIMARY KEY 主键：唯一 + 非空，一行数据的身份证","NOT NULL：必填；UNIQUE：不许重复（可空）","DEFAULT：不传值时自动填充","CHECK：自定义合法性校验","自增推荐 `GENERATED ALWAYS AS IDENTITY`，这是 SQL 标准写法"]}]},{id:"pg-insert-update-delete",title:"3.3 INSERT / UPDATE / DELETE",sections:[{type:"text",content:"数据写操作三件套。共同的红线：**UPDATE 和 DELETE 一定要带 WHERE**，否则全表遭殃——这是数据库界的头号事故来源。"},{type:"code",title:"增删改三件套",lang:"sql",code:`-- 增：指定列插入（id 自增不用管）
INSERT INTO students (name, age, city)
VALUES ('小明', 18, '深圳');

-- 一次插多行
INSERT INTO students (name, age, city) VALUES
    ('小红', 17, '广州'),
    ('小刚', 19, '北京');

-- 改：务必带 WHERE！
UPDATE students SET age = 20 WHERE name = '小明';

-- 多列同时改
UPDATE students SET age = 20, city = '上海' WHERE id = 1;

-- 删：务必带 WHERE！
DELETE FROM students WHERE id = 3;

-- 插入冲突处理：email 重复时就更新（UPSERT）
INSERT INTO students (name, email) VALUES ('小明', 'xm@qq.com')
ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name;`},{type:"list",title:"安全守则",items:["写 UPDATE/DELETE 前先用相同 WHERE 跑一遍 SELECT，确认影响范围","返回自增 id：INSERT ... RETURNING id;（PG 特色，很方便）","插入列清单要写全，避免表结构变化后语句悄悄失效"]},{type:"tip",content:'正规公司上线数据变更必须走审核 + 事务保护，个人练习也请养成"先 SELECT 后 UPDATE"的习惯。'}]},{id:"pg-alter",title:"3.4 ALTER：修改表结构",sections:[{type:"text",content:"需求总在变化：加列、改类型、加约束……ALTER TABLE 负责在**不丢数据**的前提下调整表结构。"},{type:"code",title:"ALTER 常用姿势",lang:"sql",code:`-- 加列
ALTER TABLE students ADD COLUMN phone VARCHAR(20);

-- 删列
ALTER TABLE students DROP COLUMN phone;

-- 改列类型
ALTER TABLE students ALTER COLUMN name TYPE VARCHAR(50);

-- 改默认值
ALTER TABLE students ALTER COLUMN city SET DEFAULT '深圳';

-- 加 / 删约束
ALTER TABLE students ADD CONSTRAINT chk_age CHECK (age >= 0);
ALTER TABLE students DROP CONSTRAINT chk_age;

-- 列改名 / 表改名
ALTER TABLE students RENAME COLUMN name TO student_name;
ALTER TABLE students RENAME TO pupils;`},{type:"list",title:"注意事项",items:["大表改类型、加 UNIQUE 约束可能锁表较久，生产环境要挑低峰期","收窄类型（如 VARCHAR(50) 改 VARCHAR(20)）若已有超长数据会失败","结构变更也应纳入版本管理，团队里用迁移工具（Flyway/Liquibase）管理"]}]}]},{id:"pg-ch4",title:"第四章 聚合与分组",lessons:[{id:"pg-aggregate",title:"4.1 聚合函数：一行结果看全表",sections:[{type:"text",content:"聚合函数把**多行**算成**一个值**：总数、总和、平均、最大、最小——报表统计的基石。"},{type:"code",title:"五大聚合函数",lang:"sql",code:`SELECT COUNT(*)      AS 人数,
       SUM(age)      AS 年龄总和,
       AVG(age)      AS 平均年龄,
       MAX(age)      AS 最大年龄,
       MIN(age)      AS 最小年龄
FROM students;

-- AVG 的坑：AVG(整数) 结果是小数但会截断精度，可以转一下
SELECT AVG(age::NUMERIC) FROM students;

-- 条件计数：只统计深圳的学生数
SELECT COUNT(*) FROM students WHERE city = '深圳';

-- 去重计数：有多少个不同的城市
SELECT COUNT(DISTINCT city) FROM students;`},{type:"list",title:"要点",items:["COUNT(*) 数行数，COUNT(列) 忽略 NULL，COUNT(DISTINCT 列) 先去重","聚合函数**忽略 NULL**（除了 COUNT(*)），算平均分时缺考者会被排除","没有 GROUP BY 时，聚合函数把全表当一组，结果只有一行"]}]},{id:"pg-group-by",title:"4.2 GROUP BY：分组统计",sections:[{type:"text",content:'GROUP BY 按**某个字段把行分成若干组**，每组各算一次聚合——"每个城市多少人、每个班平均分多少"全靠它。'},{type:"code",title:"分组统计",lang:"sql",code:`-- 每个城市的人数
SELECT city, COUNT(*) AS cnt
FROM students
GROUP BY city;

-- 每个城市的平均年龄，并按人数降序
SELECT city,
       COUNT(*)    AS cnt,
       AVG(age)    AS avg_age
FROM students
GROUP BY city
ORDER BY cnt DESC;

-- 多字段分组：每个城市每个年龄段的人数
SELECT city, age, COUNT(*)
FROM students
GROUP BY city, age;`},{type:"list",title:"铁律",items:["SELECT 里出现的列，**要么在 GROUP BY 里，要么包在聚合函数里**，否则报错","分组前的过滤用 WHERE，分组后的过滤用 HAVING（下一课）","GROUP BY city ORDER BY cnt 混用时注意：ORDER BY 可以用聚合结果"]}]},{id:"pg-having-order",title:"4.3 HAVING 与完整执行顺序",sections:[{type:"text",content:'HAVING 专门过滤"**分组之后**的结果"（如只要人数超过 3 的城市）。理解 SQL 的逻辑执行顺序，很多报错和疑惑会瞬间消失。'},{type:"code",title:"HAVING 与书写顺序",lang:"sql",code:`-- 找出平均年龄超过 18 的城市
SELECT city, AVG(age) AS avg_age
FROM students
WHERE age IS NOT NULL          -- 1. 先过滤行（分组前）
GROUP BY city                  -- 2. 再分组
HAVING AVG(age) > 18           -- 3. 再过滤组（分组后）
ORDER BY avg_age DESC          -- 4. 最后排序
LIMIT 10;                      -- 5. 限量

-- 完整逻辑执行顺序（背下来！）：
-- FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT`},{type:"list",title:"WHERE 与 HAVING 的区别",items:["WHERE 过滤**原始行**，不能用聚合函数","HAVING 过滤**分组结果**，可以（通常也必须）用聚合函数","能在 WHERE 里做的过滤就别放 HAVING，性能更好"]},{type:"tip",content:"为什么 WHERE 里不能用聚合？因为执行到 WHERE 时还没分组，聚合结果根本不存在——理解执行顺序后这些都顺理成章。"}]}]},{id:"pg-ch5",title:"第五章 多表查询",lessons:[{id:"pg-fk-design",title:"5.1 关系设计与外键",sections:[{type:"text",content:'真实数据总是多张表协作：学生表、班级表、成绩表。**外键**（FOREIGN KEY）声明"这一列的值必须来自另一张表"，是表与表之间的纽带，防止出现孤儿数据。'},{type:"code",title:"两张关联表",lang:"sql",code:`-- 班级表（主表）
CREATE TABLE classes (
    id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

-- 学生表（从表），class_id 关联班级表
CREATE TABLE students (
    id       INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name     VARCHAR(20) NOT NULL,
    class_id INTEGER REFERENCES classes(id)   -- 外键：必须存在这个班级
);

-- 设计常见三种关系：
-- 一对一：人 <-> 身份证（唯一外键）
-- 一对多：班级 <-> 学生（外键放多方）
-- 多对多：学生 <-> 课程（中间成绩表，两个外键）`},{type:"list",title:"要点",items:["外键保证引用完整性：班级不存在的学生插不进去","多对多关系靠**中间表**（如 scores：student_id + course_id + score）实现",'项目里也常"逻辑外键"（不加约束只靠代码保证），取舍看团队规范']}]},{id:"pg-join",title:"5.2 JOIN：把表连起来查",sections:[{type:"text",content:"JOIN 按**连接条件**把多张表的行拼在一起。四种连接必须分清：INNER（交集）、LEFT（左表全保留）、RIGHT、FULL。LEFT JOIN 最常用。"},{type:"code",title:"JOIN 家族",lang:"sql",code:`-- 内连接：只返回两边都匹配的行（学生 + 他的班级名）
SELECT s.name, c.name AS class_name
FROM students s
JOIN classes c ON s.class_id = c.id;

-- 左连接：学生全部保留，没分班的 class_name 为 NULL
SELECT s.name, c.name AS class_name
FROM students s
LEFT JOIN classes c ON s.class_id = c.id;

-- 经典应用：找出还没分班的学生
SELECT s.name
FROM students s
LEFT JOIN classes c ON s.class_id = c.id
WHERE c.id IS NULL;

-- 三表连接：学生 + 班级 + 成绩
SELECT s.name, c.name AS class_name, sc.score
FROM students s
JOIN classes c  ON s.class_id = c.id
JOIN scores  sc ON sc.student_id = s.id;`},{type:"list",title:"要点",items:["表别名（FROM students s）让 SQL 简短清晰，多表查询必用","ON 后写连接条件，WHERE 后写业务过滤，别混在一起",'LEFT JOIN 后右表字段为 NULL = "左边有、右边没有"，是排查问题的常用手法']}]},{id:"pg-subquery",title:"5.3 子查询",sections:[{type:"text",content:'子查询是"**查询里套查询**"：内层先算出一个结果，外层拿它继续查。按位置分 WHERE 子查询、FROM 子查询（派生表）等。'},{type:"code",title:"子查询典型用法",lang:"sql",code:`-- 1. WHERE 里：比平均年龄大的学生
SELECT * FROM students
WHERE age > (SELECT AVG(age) FROM students);

-- 2. 配合 IN：查有成绩记录的学生
SELECT * FROM students
WHERE id IN (SELECT DISTINCT student_id FROM scores);

-- 3. EXISTS：同样查有成绩的学生（大表时通常更快）
SELECT * FROM students s
WHERE EXISTS (SELECT 1 FROM scores sc WHERE sc.student_id = s.id);

-- 4. FROM 子查询：把分组结果当一张新表再查
SELECT city, cnt
FROM (SELECT city, COUNT(*) AS cnt FROM students GROUP BY city) t
WHERE cnt > 2;`},{type:"list",title:"要点",items:['标量子查询（只返回一行一列）可以当"一个值"用',"IN 与 EXISTS 大多数场景等价，大表+大数据量时 EXISTS 往往更优","子查询能改写成 JOIN 的尽量改写，优化器执行得更轻松"]}]},{id:"pg-union",title:"5.4 UNION 与集合操作",sections:[{type:"text",content:"两个查询结果的纵向合并用集合操作：**UNION**（并集去重）、**UNION ALL**（不去重，更快）、**INTERSECT**（交集）、**EXCEPT**（差集）。"},{type:"code",title:"合并查询结果",lang:"sql",code:`-- 参加篮球的 + 参加足球的（去重）
SELECT student_id FROM basketball_team
UNION
SELECT student_id FROM football_team;

-- 不去重：一个人两个队都报了会出现两次，但性能更好
SELECT student_id FROM basketball_team
UNION ALL
SELECT student_id FROM football_team;

-- 交集：两个队都参加了的
SELECT student_id FROM basketball_team
INTERSECT
SELECT student_id FROM football_team;

-- 差集：只在篮队的
SELECT student_id FROM basketball_team
EXCEPT
SELECT student_id FROM football_team;`},{type:"tip",content:"UNION 各分支的列数和类型必须一致；不确定要不要去重时，先用 UNION ALL 看原始结果再决定。"}]}]},{id:"pg-ch6",title:"第六章 常用函数与表达式",lessons:[{id:"pg-func-text-date",title:"6.1 字符串、数字与日期函数",sections:[{type:"text",content:"函数让你在查询中直接加工数据。挑最高频的记住，其余随用随查官方文档。"},{type:"code",title:"高频函数速览",lang:"sql",code:`-- 字符串
SELECT LENGTH('hello');            -- 5
SELECT UPPER('abc');               -- ABC
SELECT TRIM('  hi  ');             -- hi
SELECT REPLACE('a-b-c', '-', '@'); -- a@b@c
SELECT SUBSTRING('hello', 1, 3);   -- hel（下标从 1 开始！）
SELECT 'a' || 'b';                 -- ab，|| 是拼接符

-- 数字
SELECT ROUND(3.14159, 2);          -- 3.14
SELECT ABS(-5), CEIL(3.2), FLOOR(3.8);  -- 5 4 3
SELECT MOD(10, 3);                 -- 1

-- 日期时间
SELECT now();                      -- 当前时间
SELECT CURRENT_DATE;               -- 今天
SELECT EXTRACT(YEAR FROM now());   -- 2026
SELECT now() - INTERVAL '7 days';  -- 7 天前，interval 用法很重要
SELECT AGE(TIMESTAMP '2000-01-01');-- 计算年龄间隔`},{type:"list",title:"要点",items:["字符串下标从 **1** 开始（和编程语言的 0 不同）","时间加减用 INTERVAL，如 now() + INTERVAL '3 hours'","日期格式化用 TO_CHAR(now(), 'YYYY-MM-DD HH24:MI')"]}]},{id:"pg-case-coalesce",title:"6.2 CASE 与 COALESCE：查询里的 if-else",sections:[{type:"text",content:'CASE 表达式是 SQL 里的分支逻辑，COALESCE 负责"取第一个非 NULL 的值"，两者组合能解决大量报表需求。'},{type:"code",title:"条件逻辑",lang:"sql",code:`-- CASE：成绩转等级
SELECT name, score,
       CASE
           WHEN score >= 90 THEN '优秀'
           WHEN score >= 60 THEN '及格'
           ELSE '不及格'
       END AS grade
FROM scores;

-- CASE 分组统计：一行里同时数出男女各多少人
SELECT
    COUNT(*) FILTER (WHERE gender = 'M') AS 男生数,   -- PG 特色 FILTER 语法
    COUNT(*) FILTER (WHERE gender = 'F') AS 女生数
FROM students;

-- COALESCE：空值兜底
SELECT name, COALESCE(nickname, name) AS display_name FROM users;

-- NULLIF：除零保护
SELECT total / NULLIF(cnt, 0) AS avg_val FROM stats;`},{type:"list",title:"要点",items:["CASE WHEN 按顺序匹配，命中即停；ELSE 缺省时返回 NULL","COALESCE(a, b, c) 从左到右找第一个非 NULL","NULLIF(a, b)：a=b 时返回 NULL，常用来防除零"]}]},{id:"pg-cast",title:"6.3 类型转换",sections:[{type:"text",content:"不同类型运算前常需转换。PG 提供三种写法，`::` 是它最有辨识度的语法糖。"},{type:"code",title:"三种转换写法",lang:"sql",code:`-- 1. :: 语法糖（PG 特色，最常用）
SELECT '123'::INTEGER;
SELECT age::NUMERIC / 2 FROM students;
SELECT now()::DATE;

-- 2. CAST 标准函数
SELECT CAST('123' AS INTEGER);

-- 3. 转换函数
SELECT TO_NUMBER('1234', '9999');
SELECT TO_CHAR(1234, '9999');
SELECT TO_DATE('2026-08-30', 'YYYY-MM-DD');

-- 隐式转换：PG 会在需要时自动转，但依赖它可读性差
SELECT '5'::INTEGER + 1;   -- 6，显式更清晰`},{type:"tip",content:"转换失败（如 'abc'::INTEGER）会直接报错；不确定的输入先用正则校验或包一层异常处理。"}]}]},{id:"pg-ch7",title:"第七章 视图、索引与自增",lessons:[{id:"pg-view",title:"7.1 视图：保存常用的查询",sections:[{type:"text",content:'**视图**（VIEW）是一条"起了名字、存进库里"的 SELECT。它不存数据，每次查询时实时执行，可以当作"虚拟表"复用复杂 SQL，也能用来做权限隔离。'},{type:"code",title:"视图的创建与使用",lang:"sql",code:`-- 创建视图：高三学生视图
CREATE VIEW v_senior AS
SELECT id, name, age, city
FROM students
WHERE age >= 17;

-- 像查普通表一样查视图
SELECT * FROM v_senior WHERE city = '深圳';

-- 表结构变了，视图定义要同步修改
CREATE OR REPLACE VIEW v_senior AS
SELECT id, name, age, city, email
FROM students
WHERE age >= 17;

-- 删除视图
DROP VIEW IF EXISTS v_senior;`},{type:"list",title:"要点",items:['视图适合封装"经常用到、逻辑复杂"的查询，业务代码不用重复写 JOIN',"对应用只开放视图、不开放原表，是简单的权限控制手段","物化视图（MATERIALIZED VIEW）会把结果真实存下来，查询飞快但需要刷新"]}]},{id:"pg-index",title:"7.2 索引：查询提速的关键",sections:[{type:"text",content:"没有索引，查询要**逐行扫描**全表；有了索引，就像书的目录，直接定位。代价是占磁盘空间、拖慢写入——这是数据库调优的第一课。"},{type:"code",title:"索引的创建与使用",lang:"sql",code:`-- 给 name 列建 B-tree 索引（默认类型）
CREATE INDEX idx_students_name ON students(name);

-- 唯一索引：同时兼做唯一性约束
CREATE UNIQUE INDEX idx_students_email ON students(email);

-- 多列复合索引（遵守最左前缀）
CREATE INDEX idx_students_city_age ON students(city, age);

-- 删除索引
DROP INDEX idx_students_name;

-- 分析查询有没有走索引（EXPLAIN 是调优第一步）
EXPLAIN ANALYZE SELECT * FROM students WHERE name = '小明';`},{type:"list",title:"用索引的智慧",items:["主键、外键、经常出现在 WHERE / JOIN / ORDER BY 的列值得建索引","写了 SELECT * 或者 WHERE 里对列做函数运算（如 UPPER(name)=...），索引可能失效","并非索引越多越好：每个索引都会拖慢 INSERT/UPDATE"]},{type:"tip",content:"调优口诀：先 EXPLAIN 看计划，确认慢在哪一步，再对症建索引，而不是凭感觉乱加。"}]},{id:"pg-sequence",title:"7.3 序列与自增主键",sections:[{type:"text",content:"自增主键背后是**序列**（Sequence）：一张自动发号的表。理解它能解释 id 跳号、迁移数据等常见现象。"},{type:"code",title:"IDENTITY 与序列操作",lang:"sql",code:`-- IDENTITY 列（推荐写法）背后自动挂一个序列
CREATE TABLE t (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY
);

-- GENERATED ALWAYS：不允许手动插 id（除非用 OVERRIDING）
-- GENERATED BY DEFAULT：给值就用手动值，不给就自增

-- 手动查看 / 设置序列当前值
SELECT pg_get_serial_sequence('t', 'id');          -- 找到序列名
SELECT last_value FROM t_id_seq;                   -- 看当前发到几号
SELECT setval('t_id_seq', 100);                    -- 把计数器拨到 100

-- UUID：分布式场景下的全局唯一主键
CREATE TABLE logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid()
);`},{type:"list",title:"要点",items:['事务回滚后 id 也会"跳号"，这是正常现象不要恐慌',"导入数据后记得对齐序列（setval），否则新插入会主键冲突","单机业务用 IDENTITY；分布式、数据合并场景考虑 UUID 或雪花算法"]}]}]},{id:"pg-ch8",title:"第八章 事务与运维",lessons:[{id:"pg-transaction",title:"8.1 事务：要么全成，要么全不做",sections:[{type:"text",content:"转账 = 扣钱 + 加钱，两步必须**同生共死**。事务（Transaction）把多条语句打包成原子操作：全部成功才提交（COMMIT），任何一步失败整体回滚（ROLLBACK）。数据库可靠性全靠它。"},{type:"code",title:"事务三件套",lang:"sql",code:`BEGIN;                                  -- 开启事务

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- 检查无误后提交
COMMIT;

-- 中途发现问题，全部撤销（就像没发生过）
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
ROLLBACK;

-- PG 特色：SAVEPOINT 事务里的存档点
BEGIN;
UPDATE students SET age = 19 WHERE id = 1;
SAVEPOINT sp1;
UPDATE students SET age = 999 WHERE id = 2;   -- 这步错了
ROLLBACK TO sp1;                              -- 只撤销这一步
COMMIT;                                       -- 第一步仍然生效`},{type:"list",title:"ACID 四大特性",items:["**原子性**（Atomicity）：全部成功或全部失败","**一致性**（Consistency）：数据始终满足约束规则","**隔离性**（Isolation）：并发事务互不干扰（读未提交/读已提交/可重复读/串行化）","**持久性**（Durability）：提交后宕机也不丢"]}]},{id:"pg-users",title:"8.2 用户与权限管理",sections:[{type:"text",content:"生产库不能人人用超级用户 postgres。正确的姿势是：按角色建用户，**最小权限原则**只授予必需的库表权限。"},{type:"code",title:"用户与授权",lang:"sql",code:`-- 创建用户（PG 里用户=带登录权限的角色）
CREATE USER app_user WITH PASSWORD 'StrongPass123';

-- 建只读角色并授权给用户（推荐的角色化管理）
CREATE ROLE readonly;
GRANT CONNECT ON DATABASE school TO readonly;
GRANT USAGE ON SCHEMA public TO readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
GRANT readonly TO app_user;

-- 授予读写
GRANT SELECT, INSERT, UPDATE ON students TO app_user;

-- 收回权限
REVOKE INSERT ON students FROM app_user;

-- 查看当前用户
SELECT current_user;`},{type:"list",title:"安全清单",items:["应用连接串里的账号永远不要用 postgres 超级用户","密码强度、IP 白名单（pg_hba.conf）、SSL 三件套配齐","离职/下线及时禁用账号：ALTER USER app_user WITH LOGIN; 改为 NOLOGIN"]}]},{id:"pg-backup",title:"8.3 备份与恢复",sections:[{type:"text",content:"数据无价，**备份是运维的底线**。PG 自带 pg_dump（逻辑备份）与 pg_basebackup（物理备份），个人和中小项目掌握 pg_dump 即可。"},{type:"code",title:"pg_dump 与恢复",lang:"text",code:`# 备份整个数据库为 SQL 文件（命令行执行）
pg_dump -U postgres -h localhost school > school_backup.sql

# 只备份某张表
pg_dump -U postgres -t students school > students_backup.sql

# 压缩格式（自定义格式，恢复更灵活）
pg_dump -U postgres -Fc school > school.dump

# 恢复：纯 SQL 文件用 psql 执行
psql -U postgres -d school_new -f school_backup.sql

# 恢复自定义格式
pg_restore -U postgres -d school_new school.dump`},{type:"list",title:"备份策略建议",items:["定期全量备份（如每天一次）+ 归档日志（WAL）可恢复到任意时刻","**备份要异地存放**，并定期做恢复演练——没验证过的备份等于没有","个人项目用 cron/任务计划每天自动 pg_dump 一份即可"]}]},{id:"pg-psql",title:"8.4 psql 常用命令速查",sections:[{type:"text",content:'psql 里以反斜杠开头的命令不发给数据库，是客户端自己的"快捷键"。背下这几个，日常操作效率翻倍。'},{type:"code",title:"psql 元命令",lang:"text",code:`\\l              -- 列出所有数据库
\\c school       -- 切换/连接数据库
\\dt             -- 列出当前库的所有表
\\d students     -- 查看表结构（字段、类型、约束）
\\dn             -- 列出模式
\\du             -- 列出用户/角色
\\x              -- 切换扩展显示（行太宽时很好用）
\\timing         -- 显示 SQL 执行耗时
\\i init.sql     -- 执行 SQL 文件
\\q              -- 退出 psql`},{type:"tip",content:"在 psql 里直接输 SELECT 会一直等分号，语句没写完按回车不会执行——看到没出结果先检查是不是漏了分号。"}]}]},{id:"pg-ch9",title:"第九章 实战与方向",lessons:[{id:"pg-connect-code",title:"9.1 用代码连接数据库",sections:[{type:"text",content:"SQL 在客户端里执行，但真正的项目要**程序语言连接数据库**。这里给出 JavaScript（Node.js）和 Python 两种最常见连法，思路完全一致：建立连接 -> 执行 SQL -> 处理结果 -> 释放连接。"},{type:"code",title:"Node.js 连接 PG（pg 包）",lang:"javascript",code:`// npm install pg
const { Pool } = require('pg');

// 连接池：复用连接，性能好，实际项目标配
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'app_user',
    password: 'StrongPass123',
    database: 'school'
});

// 参数化查询：$1 占位符，防 SQL 注入！
async function findStudent(name) {
    const res = await pool.query(
        'SELECT * FROM students WHERE name = $1',
        [name]                       // 值走参数，绝不拼接字符串
    );
    return res.rows;
}

findStudent('小明').then(rows => console.log(rows));`},{type:"code",title:"Python 连接 PG（psycopg）",lang:"python",code:`# pip install "psycopg[binary]"
import psycopg

# with 自动管理连接和事务
with psycopg.connect(
    "host=localhost port=5432 dbname=school user=app_user password=StrongPass123"
) as conn:
    with conn.cursor() as cur:
        # 参数化查询：%s 占位符，同样防注入
        cur.execute("SELECT * FROM students WHERE age > %s", [17])
        for row in cur.fetchall():
            print(row)

        cur.execute(
            "INSERT INTO students (name, age) VALUES (%s, %s) RETURNING id",
            ("小新", 16),
        )
        print("新学生的 id:", cur.fetchone()[0])   # RETURNING 拿自增 id`},{type:"list",title:"必须牢记的安全铁律",items:["用户输入**永远走参数占位**（$1 / %s），拼字符串=SQL 注入漏洞","连接信息放环境变量/配置文件，**绝不能写死提交到 git**","用连接池而不是每次新建连接"]}]},{id:"pg-design-practice",title:"9.2 综合实战：学生成绩管理库表设计",sections:[{type:"text",content:"综合运用所学：设计一个小型成绩管理系统的库表，覆盖建库建表、约束、外键、索引与常用查询。"},{type:"code",title:"建库与建表",lang:"sql",code:`-- 1. 建库
CREATE DATABASE school;

-- 2. 班级、学生、课程、成绩四张表
CREATE TABLE classes (
    id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE students (
    id       INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name     VARCHAR(20) NOT NULL,
    class_id INTEGER NOT NULL REFERENCES classes(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_students_class ON students(class_id);   -- 外键常查，建索引

CREATE TABLE courses (
    id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

-- 成绩表：学生与课程的多对多中间表
CREATE TABLE scores (
    student_id INTEGER REFERENCES students(id),
    course_id  INTEGER REFERENCES courses(id),
    score      NUMERIC(5,1) CHECK (score BETWEEN 0 AND 100),
    PRIMARY KEY (student_id, course_id)      -- 联合主键：一人一课一条
);`},{type:"code",title:"核心业务查询",lang:"sql",code:`-- 每个学生的平均分排名
SELECT s.name, ROUND(AVG(sc.score), 1) AS avg_score
FROM students s
JOIN scores sc ON sc.student_id = s.id
GROUP BY s.id, s.name
ORDER BY avg_score DESC;

-- 每门课的不及格人数
SELECT c.name, COUNT(*) FILTER (WHERE sc.score < 60) AS failed
FROM scores sc
JOIN courses c ON c.id = sc.course_id
GROUP BY c.id, c.name;

-- 某个学生缺考（没有成绩记录）的课程
SELECT s.name, c.name AS missing_course
FROM students s
CROSS JOIN courses c
LEFT JOIN scores sc ON sc.student_id = s.id AND sc.course_id = c.id
WHERE sc.student_id IS NULL;`},{type:"list",title:"设计复盘",items:["主键全用 IDENTITY 自增，中间表用联合主键防重复","金额/分数用 NUMERIC，外键约束兜底数据关系","查询频繁的列建索引；统计需求用聚合 + FILTER 一条 SQL 搞定"]}]},{id:"pg-roadmap",title:"9.3 学习路线与进阶方向",sections:[{type:"text",content:"掌握本站内容后，你已能独立完成中小项目的库表设计与日常 SQL。后续按需深入。"},{type:"list",title:"进阶路线",items:["**SQL 精进**：窗口函数（ROW_NUMBER/RANK）、CTE（WITH 子句）、递归查询","**性能调优**：EXPLAIN 深入、执行计划阅读、统计信息与 VACUUM 机制","**高可用运维**：主从复制、流复制、Patroni 集群、监控（pg_stat_statements）","**结合后端框架**：Node 的 Prisma/Drizzle、Python 的 SQLAlchemy、Java 的 MyBatis/JPA","**扩展玩法**：JSONB 文档化设计、PostGIS 地理信息、全文检索"]},{type:"list",title:"练习建议",items:["把前面 Java/Python 章节的实战项目数据改存 PG，练一遍完整链路","用 EXPLAIN ANALYZE 优化一条慢查询，体会索引前后的差距","每周回本站做一次 PG 范围的综合测试，保持手感"]},{type:"tip",content:"数据库能力 = 设计能力 + 查询能力 + 运维意识。三者都过一遍，面试和实战都不慌。"}]}]}]},cp={id:"vue",name:"Vue.js",short:"Vue",color:"#16a34a",description:"渐进式前端框架：声明式、组件化，把 HTML/CSS/JS 组装成现代网页（本站就是用它写的）",chapters:[{id:"vue-ch1",title:"第一章 Vue 入门",lessons:[{id:"vue-what-is",title:"1.1 Vue 是什么",sections:[{type:"text",content:'学完了 HTML/CSS/JS，你已经会用 JS 手动操作 DOM（getElementById、改 innerHTML）了。但页面一复杂，"改数据还得顺手改 DOM"的代码就会混乱不堪。**Vue** 的核心思想是：**你只管改数据，DOM 它帮你更新**——这叫**声明式渲染**与**响应式**。'},{type:"list",title:"Vue 帮你解决了什么",items:["**不用手动操作 DOM**：数据一变，页面自动更新（响应式）","**组件化**：页面拆成一个个组件（导航栏、卡片、弹窗），像积木一样拼装复用","**渐进式**：可以只用一小部分功能，也可以全家桶（路由+状态管理）全上","**生态完整**：官方路由 Vue Router、状态库 Pinia、脚手架 Vite 全有官方支持"]},{type:"code",title:"感受一下：手动 DOM vs Vue",lang:"javascript",code:`// 原生 JS：改数据后还要自己找元素、更新文本
let count = 0;
function add() {
    count++;
    document.getElementById("num").innerText = count;  // 别忘了更新 DOM
}

// Vue：只改数据，页面自动变
const count = ref(0);
function add() {
    count.value++;      // 页面上绑定了 count 的地方自动更新
}`},{type:"tip",content:"本站（IT 学习中心）就是用 Vue 3 + Vite + Vue Router 写的：首页、课时页、测试页全是组件。学完这章你可以回头看看自己天天在用的网站。"}]},{id:"vue-create-project",title:"1.2 创建第一个 Vue 项目",sections:[{type:"text",content:"现代 Vue 开发都用 **Vite**（官方推荐的前端构建工具）创建工程化项目，开发时秒级热更新，打包时高效优化。"},{type:"code",title:"命令行创建并运行",lang:"text",code:`# 创建项目（选 Vue -> JavaScript）
npm create vue@latest

# 进入项目并安装依赖
cd my-project
npm install

# 启动开发服务器
npm run dev

# 打包发布（生成 dist 目录）
npm run build`},{type:"code",title:"默认的项目结构",lang:"text",code:`my-project/
├── index.html          # 页面入口（只有一个 div#app）
├── vite.config.js      # Vite 配置
└── src/
    ├── main.js         # JS 入口：创建 Vue 应用并挂载
    ├── App.vue         # 根组件
    ├── components/     # 组件目录
    ├── views/          # 页面级组件
    ├── router/         # 路由配置
    └── assets/         # 静态资源（样式、图片）`},{type:"list",title:"main.js 做了什么",items:["import App：引入根组件","createApp(App)：创建应用实例",".use(router)：安装插件（路由等）",'.mount("#app")：把应用渲染到 index.html 的 div#app 里']},{type:"tip",content:'不装任何依赖也能尝鲜：HTML 里加一行 <script src="vue 全局构建 CDN">，即可在页面里直接写 Vue，适合快速体验。'}]},{id:"vue-sfc",title:"1.3 单文件组件（.vue 文件）",sections:[{type:"text",content:"Vue 项目里最常见的就是 **.vue 文件（单文件组件 SFC）**：一个组件的**结构（template）、逻辑（script）、样式（style）** 写在同一个文件里，内聚又清晰。"},{type:"code",title:"一个标准的 .vue 组件",lang:"html",code:`<!-- 1. 结构：模板区，写 HTML -->
<template>
  <div class="counter">
    <p>当前计数：{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<!-- 2. 逻辑：脚本区，setup 写法（Vue 3 推荐） -->
<script setup>
import { ref } from "vue"

const count = ref(0)          // ref 创建响应式数据
function add() {
  count.value++               // 脚本里读写要用 .value
}
<\/script>

<!-- 3. 样式：scoped 表示只作用于本组件 -->
<style scoped>
.counter { color: #333; }
</style>`},{type:"list",title:"三个区块职责",items:["template：只有**一个根元素**包裹即可（Vue 3 支持多个根）","script setup：语法糖，里面声明的变量和函数**模板里直接用**，不用 return","style scoped：样式只影响本组件，不会污染全局（原理是给元素加 data 属性）"]},{type:"tip",content:"推荐 VS Code 装 Vue - Official（原 Volar）插件，.vue 文件高亮、提示、跳转一步到位。"}]}]},{id:"vue-ch2",title:"第二章 模板语法",lessons:[{id:"vue-interpolation",title:"2.1 插值与常用指令",sections:[{type:"text",content:"模板里用**双大括号 {{ }}** 输出数据（插值），用 **v- 开头的指令**给 HTML 元素附加行为。指令是 Vue 模板的灵魂。"},{type:"code",title:"插值与四大常用指令",lang:"html",code:`<template>
  <!-- 插值：可以放变量、表达式，不能放语句 -->
  <p>{{ message }}</p>
  <p>{{ age >= 18 ? "成年" : "未成年" }}</p>

  <!-- v-bind: 绑定属性（缩写为冒号:） -->
  <img v-bind:src="imgUrl">
  <a :href="link">点我</a>
  <button :disabled="loading">加载中</button>

  <!-- v-on: 绑定事件（缩写为 @） -->
  <button v-on:click="say">点我说话</button>
  <button @click="count++">内联表达式也行</button>

  <!-- v-html：输出真正的 HTML（慎用，有注入风险） -->
  <div v-html="richContent"></div>
</template>

<script setup>
import { ref } from "vue"
const message = ref("你好 Vue")
const age = ref(18)
const imgUrl = ref("/logo.png")
const link = ref("https://cn.vuejs.org")
const loading = ref(false)
const richContent = ref("<b>加粗内容</b>")
function say() { alert(message.value) }
const count = ref(0)
<\/script>`},{type:"list",title:"要点",items:["{{ }} 里可以写 JS 表达式（三元、算术、方法调用），不能写 if/for 语句","v-bind 缩写 `:`、v-on 缩写 `@`，实际项目都用缩写","模板里的变量不用 .value，脚本里才需要（setup 自动解包）"]}]},{id:"vue-class-style",title:"2.2 class 与 style 绑定",sections:[{type:"text",content:"操作 class 和 style 是前端高频需求，Vue 把它做成了**对象语法**和**数组语法**，比手动拼字符串优雅太多。"},{type:"code",title:"动态 class 与 style",lang:"html",code:`<template>
  <!-- 对象语法：key 是类名，value 是布尔值（true 就加上） -->
  <div :class="{ active: isActive, error: hasError }">对象写法</div>

  <!-- 数组语法：多个类自由组合 -->
  <div :class="[baseClass, sizeClass]">数组写法</div>

  <!-- 同时写静态 class 和动态 :class，会自动合并 -->
  <div class="box" :class="{ highlight: isVip }">合并写法</div>

  <!-- style 对象写法（属性用驼峰） -->
  <div :style="{ color: textColor, fontSize: size + 'px' }">内联样式</div>
</template>

<script setup>
import { ref } from "vue"
const isActive = ref(true)
const hasError = ref(false)
const baseClass = ref("btn")
const sizeClass = ref("btn-large")
const isVip = ref(true)
const textColor = ref("red")
const size = ref(16)
<\/script>`},{type:"tip",content:"对象语法最常用：根据状态切换类名（如选中高亮、禁用置灰），一行搞定。"}]},{id:"vue-if-show",title:"2.3 条件渲染：v-if 与 v-show",sections:[{type:"text",content:'两个指令都能控制"显示/隐藏"，但原理完全不同：**v-if 是真的创建/销毁元素**，**v-show 只是切换 display 样式**。'},{type:"code",title:"条件渲染全家",lang:"html",code:`<template>
  <!-- v-if / v-else-if / v-else 必须紧挨着写 -->
  <p v-if="score >= 90">优秀</p>
  <p v-else-if="score >= 60">及格</p>
  <p v-else>不及格</p>

  <!-- v-show：只是 display:none，组件始终存在 -->
  <p v-show="loading">加载中...</p>

  <!-- v-if 加在 template 上可以包裹多个元素且不产生多余节点 -->
  <template v-if="login">
    <h3>欢迎回来</h3>
    <button>退出</button>
  </template>
</template>`},{type:"list",title:"怎么选",items:["切换**不频繁**、条件分支少：用 v-if（省内存）","频繁**来回切换**（如 tab 页、下拉菜单）：用 v-show（不反复创建销毁，切换快）","v-if 有更高的切换开销，v-show 有更高的初始渲染开销"]},{type:"tip",content:"v-if 和 v-for 不要同时用在一个元素上（Vue 3 中 v-if 优先级更高，容易出 bug），需要时先用 computed 过滤数据。"}]},{id:"vue-v-for",title:"2.4 列表渲染：v-for",sections:[{type:"text",content:"v-for 遍历数组/对象生成列表，是最常用的指令之一。配套的 **:key** 决定更新的性能和正确性，必须理解。"},{type:"code",title:"v-for 各种姿势",lang:"html",code:`<template>
  <!-- 数组：(元素, 下标) in 数组 -->
  <ul>
    <li v-for="(fruit, index) in fruits" :key="fruit.id">
      {{ index + 1 }}. {{ fruit.name }} - ￥{{ fruit.price }}
    </li>
  </ul>

  <!-- 对象：(值, 键) in 对象 -->
  <p v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</p>

  <!-- 数字循环：1 到 10 -->
  <span v-for="n in 10" :key="n">{{ n }} </span>
</template>

<script setup>
import { ref } from "vue"
const fruits = ref([
  { id: 1, name: "苹果", price: 5 },
  { id: 2, name: "香蕉", price: 3 },
  { id: 3, name: "橘子", price: 4 }
])
const user = ref({ name: "小明", age: 18 })
<\/script>`},{type:"list",title:":key 为什么重要",items:['key 是每个节点的"身份证"，Vue 靠它识别哪些项增删改了',"用**唯一且稳定的 id** 做 key，别用数组下标（排序/删除时会错位）","key 没写或写错，列表更新可能出现内容串位、输入框内容残留等诡异 bug"]}]}]},{id:"vue-ch3",title:"第三章 响应式与交互",lessons:[{id:"vue-ref-reactive",title:"3.1 响应式数据：ref 与 reactive",sections:[{type:"text",content:"响应式是 Vue 的招牌：数据变化时**依赖它的视图自动更新**。Vue 3 用 `ref` 和 `reactive` 两个 API 创建响应式数据。"},{type:"code",title:"ref 与 reactive",lang:"javascript",code:`import { ref, reactive } from "vue"

// ref：包装任何类型（基础类型必须用它）
const count = ref(0)
const title = ref("hello")
console.log(count.value)        // 脚本里访问要 .value

// reactive：只用于对象/数组，直接访问属性
const user = reactive({ name: "小明", age: 18 })
user.age = 19                   // 不需要 .value

// 数组也常用 ref（整体替换时更方便）
const list = ref([1, 2, 3])
list.value.push(4)
list.value = [10, 20]           // 整体替换，依然响应式

// reactive 的坑：解构后失去响应式！
const { name } = user           // name 变成普通字符串，改它页面不更新
// 要解构请用 toRefs：const { name } = toRefs(user)`},{type:"list",title:"选择建议",items:["基础类型（数字、字符串、布尔）→ 只能 `ref`","对象、数组 → `ref` 或 `reactive` 都行，**团队统一即可**","新人建议：全用 ref，规则简单不易踩坑（脚本里记得 .value）"]},{type:"tip",content:"为什么 ref 要 .value？因为 JS 无法拦截基础类型的属性访问，Vue 只能包一层对象（Proxy）来监听变化。"}]},{id:"vue-events",title:"3.2 事件处理：v-on",sections:[{type:"text",content:"@ 指令绑定事件，可以指向方法、写内联表达式，还能用**事件修饰符**优雅处理 preventDefault、stopPropagation 这类样板逻辑。"},{type:"code",title:"事件绑定与修饰符",lang:"html",code:`<template>
  <!-- 指向方法 / 内联写法 / 传参 -->
  <button @click="handleClick">无参</button>
  <button @click="greet('小明')">传参</button>
  <button @click="count = count + 1">内联</button>
  <button @click="greet($event)">要事件对象用 $event</button>

  <!-- 事件修饰符（超好用） -->
  <form @submit.prevent="onSubmit">      <!-- 阻止默认提交刷新 -->
    <input @keyup.enter="search">        <!-- 回车才触发 -->
    <div @click.stop="inner">            <!-- 阻止冒泡 -->
      <button @click.once="init">只触发一次</button>
    </div>
  </form>
</template>

<script setup>
const count = ref(0)
function handleClick() { console.log("点击了") }
function greet(name, e) { console.log("你好", name) }
function onSubmit() { console.log("表单提交") }
function search() { console.log("回车搜索") }
function init() { console.log("只会执行一次") }
<\/script>`},{type:"list",title:"常用修饰符",items:["`.prevent`：阻止默认行为（等价 event.preventDefault()）","`.stop`：阻止冒泡；`.once`：只触发一次","`.enter` / `.esc` / `.tab`：键盘按键；`.self`：只有点自己才触发"]}]},{id:"vue-v-model",title:"3.3 表单绑定：v-model",sections:[{type:"text",content:'v-model 是表单的"双向绑定"语法糖：**数据变了输入框跟着变，用户输入了数据也自动变**。它的本质是 `:value` + `@input` 的合体。'},{type:"code",title:"v-model 全家桶",lang:"html",code:`<template>
  <!-- 文本框 -->
  <input v-model="name" placeholder="输入姓名">
  <p>你好，{{ name }}</p>

  <!-- 多行文本 / 复选框 / 单选 / 下拉 -->
  <textarea v-model="bio"></textarea>
  <input type="checkbox" v-model="agree"> 我同意协议
  <input type="radio" value="M" v-model="gender"> 男
  <input type="radio" value="F" v-model="gender"> 女
  <select v-model="city">
    <option value="">请选择</option>
    <option value="sz">深圳</option>
    <option value="gz">广州</option>
  </select>

  <!-- 修饰符：.number 转数字，.trim 去空格，.lazy 失焦才更新 -->
  <input v-model.number="age" type="number">
  <input v-model.trim="name">
</template>

<script setup>
import { ref } from "vue"
const name = ref(""), bio = ref(""), agree = ref(false)
const gender = ref("M"), city = ref(""), age = ref(0)
<\/script>`},{type:"list",title:"要点",items:["复选框单个绑定布尔值；多个复选框绑同一个数组收集选中项",".number 很重要：不转换的话 input 拿到的永远是字符串","自定义组件上也能用 v-model（defineModel / update:modelValue 事件）"]}]},{id:"vue-computed-watch",title:"3.4 计算属性 computed 与侦听器 watch",sections:[{type:"text",content:'**computed**：由其他数据"算出来"的值，自带缓存——依赖没变就不重算。**watch**：监听某个数据变化后执行副作用（请求接口、写 localStorage）。两者各司其职。'},{type:"code",title:"computed 与 watch",lang:"javascript",code:`import { ref, computed, watch } from "vue"

const cart = ref([
  { name: "苹果", price: 5, count: 2 },
  { name: "香蕉", price: 3, count: 5 }
])

// computed：购物车总价（依赖变了自动重算，没变走缓存）
const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.count, 0)
)

// 可写的 computed：get 取值 / set 赋值
const fullName = computed({
  get: () => firstName.value + " " + lastName.value,
  set: (val) => { [firstName.value, lastName.value] = val.split(" ") }
})

// watch：监听 count，变化时执行回调（能拿到新旧值）
const keyword = ref("")
watch(keyword, (newVal, oldVal) => {
  console.log("搜索词变化", oldVal, "->", newVal)
  // 在这里发请求搜索...
})

// 立即执行一次 + 深度监听
watch(cart, () => saveToLocal(), { immediate: true, deep: true })

// watchEffect：自动收集依赖，用到谁就监听谁
watchEffect(() => console.log("keyword 是", keyword.value))`},{type:"list",title:"怎么选",items:["**由已有数据算出新数据**（总价、过滤列表、格式化）→ computed","**数据变化后做副作用**（请求、定时器、localStorage、操作 DOM）→ watch","computed 必须有返回值且**别在里面改数据**；watch 里才适合做异步"]}]}]},{id:"vue-ch4",title:"第四章 组件基础",lessons:[{id:"vue-component-use",title:"4.1 组件的定义与使用",sections:[{type:"text",content:"组件是**可复用的页面积木**：把一段界面+逻辑封装起来，哪里需要哪里引入。Vue 项目本质就是一棵组件树，App.vue 是树根。"},{type:"code",title:"定义并使用组件",lang:"javascript",code:`// src/components/MyButton.vue —— 子组件（一个普通的 .vue 文件）
<template>
  <button class="my-btn">{{ text }}</button>
</template>

<script setup>
defineProps({ text: String })   // 接收外部数据（下一课细讲）
<\/script>`},{type:"code",title:"父组件里使用",lang:"html",code:`<!-- 父组件：引入 -> 注册（setup 里导入即注册） -> 使用 -->
<template>
  <MyButton text="确定" />
  <my-button text="取消" />      <!-- 大驼峰和短横线写法等价 -->
</template>

<script setup>
import MyButton from "./components/MyButton.vue"   // 导入即注册
<\/script>`},{type:"list",title:"要点",items:["script setup 里 import 的组件**直接就能用**，不需要 components 选项","组件名用大驼峰（MyButton），模板里也可写成短横线（my-button）","每个 .vue 文件就是一个组件，文件名即组件名（尽量大驼峰命名）"]}]},{id:"vue-props",title:"4.2 props：父传子",sections:[{type:"text",content:"**props** 是组件的入参：父组件通过属性把数据传给子组件。核心纪律是**单向数据流**——子组件只能读 props，不能改它。"},{type:"code",title:"props 的声明与传递",lang:"javascript",code:`// 子组件 StudentCard.vue
<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>年龄：{{ age }}，城市：{{ city }}</p>
  </div>
</template>

<script setup>
// 对象写法：可声明类型、必填、默认值
const props = defineProps({
  name: { type: String, required: true },
  age:  { type: Number, default: 18 },
  city: { type: String, default: "未知" }
})
// 脚本里用 props.name 访问；模板里直接 {{ name }}
console.log(props.name)
<\/script>`},{type:"code",title:"父组件传值",lang:"html",code:`<template>
  <!-- 静态值 / 动态值 / 简写 -->
  <StudentCard name="小明" :age="18" city="深圳" />
  <StudentCard v-for="s in list" :key="s.id" v-bind="s" />  <!-- v-bind 一次性传对象 -->
</template>`},{type:"list",title:"单向数据流",items:["数据从父组件流向子组件，**子组件不许直接修改 props**（控制台会警告）",'需要"改"，把意图通过事件告诉父组件（下一课），由父组件改源头数据',"props 变化时子组件自动重新渲染——响应式依然生效"]},{type:"tip",content:"为什么单向？数据只有一个人管（父），才知道是谁改的，出问题好排查。双向改来改去，大型项目就是灾难。"}]},{id:"vue-emit",title:"4.3 自定义事件 emit：子传父",sections:[{type:"text",content:'子组件想影响父组件？通过 **emit 抛出自定义事件**，父组件用 @ 监听处理——"孩子提需求，家长做决定"。'},{type:"code",title:"子组件抛事件",lang:"javascript",code:`// 子组件 DeleteButton.vue
<template>
  <button @click="onDelete">删除</button>
</template>

<script setup>
// 声明会抛出的事件（建议写上，可被校验）
const emit = defineEmits(["delete"])

function onDelete() {
  emit("delete", 42)     // 第二个参数开始是携带的数据
}
<\/script>`},{type:"code",title:"父组件监听处理",lang:"html",code:`<template>
  <!-- @事件名 = 处理函数，$event 是 emit 传来的数据 -->
  <DeleteButton @delete="handleDelete" />
  <DeleteButton @delete="id => removeStudent(id)" />
</template>

<script setup>
function handleDelete(id) {
  console.log("父组件收到删除请求，id =", id)
  // 由父组件真正修改数据（改的是数据源头）
}
<\/script>`},{type:"list",title:"父子通信闭环",items:["父传子：props（数据下行）","子传父：emit 事件（意图上行），父组件改自己的数据，props 再流回来",'这套"数据下行 + 事件上行"就是 Vue 组件通信的标准范式']}]},{id:"vue-slot",title:"4.4 插槽 slot：把内容传进去",sections:[{type:"text",content:'props 传的是**数据**，插槽传的是**HTML 结构/组件**。弹窗、卡片、布局这类"外壳固定、内容多变"的组件全靠插槽。'},{type:"code",title:"默认插槽与具名插槽",lang:"javascript",code:`// 子组件 MyCard.vue：预留插槽
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">默认标题</slot>   <!-- 具名插槽 -->
    </div>
    <div class="card-body">
      <slot></slot>                          <!-- 默认插槽 -->
    </div>
  </div>
</template>`},{type:"code",title:"父组件填充插槽",lang:"html",code:`<template>
  <MyCard>
    <template #header>
      <h2>学生信息</h2>            <!-- #header 是 v-slot:header 缩写 -->
    </template>

    <p>这里是默认插槽的内容</p>
    <StudentCard name="小明" />
  </MyCard>
</template>`},{type:"list",title:"插槽家族",items:["默认插槽：`<slot>` 接收任意内容",'具名插槽：`<slot name="x">` + `<template #x>`，一个组件多个坑位','作用域插槽：`<slot :row="item">` 子组件把内部数据传给插槽内容（表格列渲染常用）']}]}]},{id:"vue-ch5",title:"第五章 组件进阶",lessons:[{id:"vue-lifecycle",title:"5.1 生命周期",sections:[{type:"text",content:"组件从**创建 -> 挂载 -> 更新 -> 卸载**的一生中，每个节点都会触发钩子函数。最常用的是 onMounted（挂载后）和 onUnmounted（卸载前）。"},{type:"code",title:"常用生命周期钩子",lang:"javascript",code:`import { ref, onMounted, onUnmounted, onUpdated } from "vue"

const data = ref(null)
const timer = ref(null)

// 组件挂载完成：DOM 已经在页面上了，可以放心发请求、操作 DOM
onMounted(async () => {
  data.value = await fetch("/api/list").then(r => r.json())
  timer.value = setInterval(() => console.log("tick"), 1000)
})

// 响应式数据变化导致 DOM 更新后
onUpdated(() => { console.log("页面更新了") })

// 组件卸载前：清理定时器、解绑监听，防内存泄漏
onUnmounted(() => {
  clearInterval(timer.value)
})`},{type:"list",title:"钩子速记",items:["onBeforeMount / onMounted：挂载前后（发请求放 onMounted）","onBeforeUpdate / onUpdated：更新前后","onBeforeUnmount / onUnmounted：卸载前后（清理资源）"]},{type:"tip",content:"记住配对原则：谁创建的（定时器/监听器/订阅），就在 onUnmounted 里销毁谁。"}]},{id:"vue-communication",title:"5.2 组件通信方式总结",sections:[{type:"text",content:"props/emit 解决父子通信，但组件层级一深，逐层传递（prop drilling）就很痛苦。Vue 提供了跨层级方案 **provide / inject**，全局状态则交给 Pinia（第六章）。"},{type:"code",title:"provide / inject 跨层级传值",lang:"javascript",code:`// 祖先组件 provide（提供）
import { provide, ref } from "vue"
const theme = ref("dark")
provide("theme", theme)          // key + 响应式数据

// 任意深层子孙组件 inject（注入）
import { inject } from "vue"
const theme = inject("theme", "light")   // 第二个参数是默认值
template 里直接用 theme，改 theme.value 全家同步`},{type:"list",title:"通信方式选型表",items:["父子：**props 下行 + emit 上行**（90% 的场景）","祖孙/跨层级：**provide / inject**","任意组件共享的**全局状态**：Pinia（用户信息、购物车、主题）","模板引用：`ref()` 拿到子组件实例直接调用其方法（兜底手段，别滥用）"]},{type:"tip",content:'通信越多组件耦合越重。设计组件时先想想"能不能靠 props + emit 解决"，实在不行再升级手段。'}]},{id:"vue-composables",title:"5.3 组合式函数（Composables）",sections:[{type:"text",content:'**组合式函数**是"use 开头的可复用逻辑函数"：把一段带响应式数据的逻辑（如鼠标位置、倒计时、请求封装）抽出来，多个组件共享。这是组合式 API 最大的威力。'},{type:"code",title:"自己写一个 useMouse",lang:"javascript",code:`// src/composables/useMouse.js
import { ref, onMounted, onUnmounted } from "vue"

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => window.addEventListener("mousemove", update))
  onUnmounted(() => window.removeEventListener("mousemove", update))

  return { x, y }        // 把响应式状态暴露出去
}`},{type:"code",title:"组件里一行接入",lang:"javascript",code:`<script setup>
import { useMouse } from "../composables/useMouse"
const { x, y } = useMouse()   // 鼠标位置实时响应式更新
<\/script>

<template>
  <p>鼠标位置：{{ x }}, {{ y }}</p>
</template>`},{type:"list",title:"约定与生态",items:["命名必须 use 开头：useMouse、useFetch、useStorage","官方维护的 VueUse 库有 200+ 现成组合式函数，先查再造",'和"工具函数"的区别：组合式函数内部**包含响应式状态和生命周期**']}]}]},{id:"vue-ch6",title:"第六章 路由与状态管理",lessons:[{id:"vue-router-basic",title:"6.1 Vue Router：单页应用的导航",sections:[{type:"text",content:'单页应用（SPA）只有一个 HTML，"换页"其实是**切换组件**——这件事由 Vue Router 负责。配置路径与组件的映射，router-link 跳转，router-view 渲染。'},{type:"code",title:"路由配置（本站同款结构）",lang:"javascript",code:`// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHashHistory(),       // hash 模式（URL 带 #），部署最省心
  routes: [
    { path: "/", component: Home },
    { path: "/category/:id", component: () => import("../views/Category.vue") },  // 动态路由+懒加载
    { path: "/quiz", component: () => import("../views/Quiz.vue") }
  ]
})

export default router`},{type:"code",title:"页面里使用",lang:"html",code:`<template>
  <!-- router-link：导航（渲染成 a 标签，但不刷新页面） -->
  <router-link to="/">首页</router-link>
  <router-link :to="'/category/' + cat.id">{{ cat.name }}</router-link>

  <!-- 路由出口：匹配到的组件渲染在这里 -->
  <router-view />
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
const route = useRoute()    // 当前路由信息（取参数）
console.log(route.params.id)
const router = useRouter()  // 编程式导航
function goHome() { router.push("/") }
<\/script>`},{type:"list",title:"要点",items:["hash 模式（#/path）部署无需服务器配置；history 模式 URL 更干净但要服务器兜底","`component: () => import(...)` 是**路由懒加载**：用到才加载，首屏更快","route.params 取路径参数，route.query 取 ?a=1 查询参数"]}]},{id:"vue-router-guard",title:"6.2 导航守卫与动态路由",sections:[{type:"text",content:'**导航守卫**是路由跳转的"安检员"：登录校验、权限控制都写在这里。`:id` 动态参数让一条路由规则服务一类页面（本站的课时页就是这样）。'},{type:"code",title:"守卫与参数",lang:"javascript",code:`// 全局前置守卫：每次跳转前都会经过
router.beforeEach((to, from) => {
  // to：要去哪；from：从哪来
  const needLogin = to.meta.requireLogin       // 路由元信息
  if (needLogin && !localStorage.getItem("token")) {
    return "/login"            // 返回路径 = 重定向拦截
  }
  // 不返回或返回 true = 放行
})

// 路由表里标记谁需要登录
// { path: "/admin", component: Admin, meta: { requireLogin: true } }

// 动态路由 /lesson/:id，同一路由参数变化时组件会复用，要监听参数：
watch(() => route.params.id, (newId) => {
  loadLesson(newId)            // 参数变了重新加载数据
})`},{type:"list",title:"要点",items:["守卫返回 false 取消导航，返回路由路径则重定向","组件被复用时（仅参数变）生命周期不会重跑，记得 watch 路由参数",'404 路由：`{ path: "/:pathMatch(.*)*", component: NotFound }` 放最后']}]},{id:"vue-pinia",title:"6.3 Pinia：全局状态管理",sections:[{type:"text",content:'当很多组件都要读写**同一份全局数据**（登录用户、购物车、主题设置），靠 props 层层传就疯了。**Pinia**（Vue 官方状态库）把这些数据放在"全局仓库"，谁要用谁取。'},{type:"code",title:"定义一个 store",lang:"javascript",code:`// src/stores/user.js
import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useUserStore = defineStore("user", () => {
  // state：数据
  const name = ref("")
  const isLogin = computed(() => name.value !== "")   // getter

  // action：修改数据的方法
  function login(userName) { name.value = userName }
  function logout() { name.value = "" }

  return { name, isLogin, login, logout }
})`},{type:"code",title:"任意组件使用",lang:"javascript",code:`<script setup>
import { useUserStore } from "../stores/user"
const user = useUserStore()

user.login("小明")            // 调用 action
console.log(user.name)        // 读状态
console.log(user.isLogin)     // 用 getter
<\/script>

<template>
  <p v-if="user.isLogin">欢迎，{{ user.name }}</p>
</template>`},{type:"list",title:"要点",items:["一个业务域一个 store（user/cart/theme），不要把所有数据塞一个 store","状态放 store 后，组件里的 props/emit 链条大幅缩短","配合持久化插件 pinia-plugin-persistedstate，刷新页面状态不丢"]}]},{id:"vue-axios",title:"6.4 请求接口：axios 与加载状态",sections:[{type:"text",content:"页面数据通常来自后端接口。用 **axios**（或原生 fetch）请求，配合 ref 管理 loading / data / error 三态，这是列表页的标准写法。"},{type:"code",title:"接口请求标准三态",lang:"javascript",code:`// npm install axios
import axios from "axios"
import { ref, onMounted } from "vue"

const list = ref([])
const loading = ref(false)
const error = ref("")

async function fetchList() {
  loading.value = true
  error.value = ""
  try {
    const res = await axios.get("/api/students", { params: { page: 1 } })
    list.value = res.data
  } catch (e) {
    error.value = "加载失败，请稍后重试"
  } finally {
    loading.value = false          // 无论成败都关 loading
  }
}

onMounted(fetchList)`},{type:"code",title:"模板三态渲染",lang:"html",code:`<template>
  <p v-if="loading">加载中...</p>
  <p v-else-if="error">{{ error }}</p>
  <ul v-else>
    <li v-for="s in list" :key="s.id">{{ s.name }}</li>
  </ul>
</template>`},{type:"list",title:"要点",items:["axios.create({ baseURL, timeout }) 封装公共配置；拦截器统一加 token、统一处理错误","fetch 是原生方案，轻量但要手动抛错、手动转 JSON","接口地址别写死：开发用 Vite 代理，生产用环境变量（第八章）"]}]}]},{id:"vue-ch7",title:"第七章 实战技巧",lessons:[{id:"vue-key-detail",title:"7.1 v-for 之 key 深入与列表更新",sections:[{type:"text",content:"数组更新触发列表重新渲染时，Vue 用 **diff 算法**对比新旧虚拟 DOM，key 就是 diff 的比对依据。理解它，才算真懂列表更新。"},{type:"code",title:"key 的正确与错误用法",lang:"javascript",code:`// ✅ 正确：用数据里唯一稳定的 id
<li v-for="item in list" :key="item.id">{{ item.name }}</li>

// ❌ 错误：用下标做 key
// 在头部插入/排序/删除时，下标全部位移，diff 大量误判
// 轻则性能差，重则带输入框的列表出现内容错乱
<li v-for="(item, i) in list" :key="i">{{ item.name }}</li>

// 常用更新操作（Vue 会自动响应）
list.value.push(newItem)              // 增
list.value.splice(index, 1)           // 删
list.value[index].name = "新名字"      // 改
list.value = list.value.filter(...)   // 过滤替换（触发 diff）
list.value.sort((a, b) => a.age - b.age)  // 排序（key 保住状态不乱）`},{type:"list",title:"经验法则",items:["id 都没有的数据（纯字符串列表）可以用字符串本身做 key","列表项里带 input/组件内部状态时，key 错了 bug 会非常明显","大量数据渲染卡顿：上分页，或用虚拟滚动（vueuse 的 useVirtualList）"]}]},{id:"vue-transition",title:"7.2 过渡动画与组件懒加载",sections:[{type:"text",content:"Vue 内置 **<Transition>** 组件，在元素插入/移除时自动帮你加动画 class；**defineAsyncComponent** 则让组件按需加载，首屏更快。"},{type:"code",title:"过渡动画",lang:"html",code:`<template>
  <button @click="show = !show">切换</button>
  <Transition name="fade">
    <p v-if="show">我会淡入淡出</p>
  </Transition>
</template>

<style scoped>
/* 进入过程 / 离开过程，Vue 自动切这三个类 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>`},{type:"code",title:"异步组件（懒加载）",lang:"javascript",code:`import { defineAsyncComponent } from "vue"

// 大组件（图表、编辑器）用到时才下载
const HeavyChart = defineAsyncComponent(() =>
  import("./components/HeavyChart.vue")
)
// 路由懒加载（第六章）本质上也是这个思路
// component: () => import("../views/Quiz.vue")`},{type:"tip",content:'动画类名规律：name="fade" 则是 fade-enter-from（起点）、fade-enter-active（过程）、fade-enter-to（终点），leave 同理。'}]},{id:"vue-debug",title:"7.3 常见坑与调试",sections:[{type:"text",content:"列一组新手高频 bug 和排查方法，遇到问题先对号入座。"},{type:"list",title:"高频坑位表",items:["改了数据页面没更新 → 忘了 .value（脚本里）或数据被解构丢了响应式",'props 报警告 "Set operation on key... failed" → 子组件直接改 props，改成 emit 让父组件改',"v-for 页面内容串位 → key 用了下标，换成唯一 id","onMounted 里拿不到某个 DOM → 元素在 v-if 里还没渲染，改用 watch + nextTick","刷新后登录态丢失 → store 没持久化，接 pinia-plugin-persistedstate 或 localStorage"]},{type:"code",title:"两个调试利器",lang:"javascript",code:`// 1. nextTick：等 DOM 更新完成后再操作
import { nextTick } from "vue"
async function addItem() {
  list.value.push(newItem)
  await nextTick()
  document.querySelector(".list").scrollTop = 99999   // 这时 DOM 才是新的
}

// 2. Vue Devtools 浏览器插件：
// 可视化查看组件树、每个组件的 props/状态，Pinia 数据也能直接改`},{type:"tip",content:"控制台出现 Vue 警告不要无视，它们几乎都指向真实的隐患；开发版 Vue 的警告在生产构建里不会出现。"}]}]},{id:"vue-ch8",title:"第八章 工程化",lessons:[{id:"vue-env-build",title:"8.1 环境变量与打包部署",sections:[{type:"text",content:"开发环境和生产环境的接口地址通常不同。Vite 用 **.env 文件**管理环境变量（必须以 VITE_ 开头才会暴露给前端），`npm run build` 打包出纯静态文件。"},{type:"code",title:"环境变量与使用",lang:"text",code:`# .env.development（开发环境）
VITE_API_BASE=http://localhost:3000/api

# .env.production（生产环境，build 时生效）
VITE_API_BASE=https://api.mysite.com`},{type:"code",title:"代码中读取",lang:"javascript",code:`const BASE = import.meta.env.VITE_API_BASE
axios.defaults.baseURL = BASE`},{type:"list",title:"部署三部曲",items:["`npm run build` 生成 dist 目录（纯静态：html/css/js）","把 dist 扔给任意静态服务器：Nginx、Vercel、Netlify 都行","history 模式路由需要服务器把所有路径回退到 index.html（Nginx try_files 配置）；hash 模式无需此步"]},{type:"tip",content:"前端环境变量会打进打包产物里，用户可见——所以后端密钥绝对不能放这里，敏感逻辑必须放在服务端。"}]},{id:"vue-lint",title:"8.2 代码规范：ESLint 与 Prettier",sections:[{type:"text",content:"**ESLint** 检查代码质量问题（未使用变量、可能的 bug），**Prettier** 统一格式（缩进、引号、分号）。两者配合 + 保存自动格式化，团队代码风格立刻一致。"},{type:"code",title:"创建项目时勾选，或手动安装",lang:"text",code:`# npm create vue@latest 时勾选 ESLint + Prettier 即可

# 常用命令
npm run lint          # 检查并尝试修复
npm run format        # 全项目格式化`},{type:"list",title:"VS Code 推荐配置",items:["安装 ESLint + Prettier 插件","设置里开启 Format On Save（保存即格式化）","设 Prettier 为默认格式化工具，冲突时以 Prettier 为准"]},{type:"tip",content:'规范的价值在协作：三个月后的你也是"协作者"。个人项目也建议开着，养成肌肉记忆。'}]},{id:"vue-structure",title:"8.3 项目组织最佳实践",sections:[{type:"text",content:"项目变大后，目录结构决定可维护性。参考下面这套通用组织（本站就是这个结构）。"},{type:"code",title:"推荐的目录结构",lang:"text",code:`src/
├── main.js            # 入口
├── App.vue            # 根组件（只负责骨架）
├── router/index.js    # 路由
├── stores/            # Pinia 状态
├── views/             # 页面级组件（对应路由）
├── components/        # 通用组件（按钮、卡片、代码块...）
├── composables/       # 组合式函数
├── data/              # 静态数据/配置
└── assets/            # 全局样式、图片`},{type:"list",title:"组织原则",items:['views 只放"路由对应的页面"，可复用的 UI 一律沉到 components',"组件超过 300 行就该考虑拆分：按功能块拆子组件，逻辑抽 composable","命名：views 用页面名（Home/Quiz），components 用大驼峰（CodeBlock/MyCard）"]}]}]},{id:"vue-ch9",title:"第九章 综合实战",lessons:[{id:"vue-todo",title:"9.1 实战一：待办事项（Todo List）",sections:[{type:"text",content:'前端界的"Hello World 进阶版"：一个文件用上 ref、v-model、v-for、computed、watch 持久化，把第二三章的知识全部串起来。'},{type:"code",title:"TodoApp.vue 完整代码",lang:"javascript",code:`<template>
  <div>
    <input v-model.trim="newTodo" @keyup.enter="add" placeholder="输入待办，回车添加">
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="remove(todo.id)">删</button>
      </li>
    </ul>
    <p>
      <button @click="filter = 'all'">全部</button>
      <button @click="filter = 'doing'">未完成</button>
      <button @click="filter = 'done'">已完成</button>
      共 {{ todos.length }} 项，剩 {{ remaining }} 项未完成
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"

// 数据 + 持久化
const todos = ref(JSON.parse(localStorage.getItem("todos") || "[]"))
watch(todos, (val) => localStorage.setItem("todos", JSON.stringify(val)), { deep: true })

const newTodo = ref("")
const filter = ref("all")

function add() {
  if (!newTodo.value) return
  todos.value.push({ id: Date.now(), text: newTodo.value, done: false })
  newTodo.value = ""
}
function remove(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}

// computed：过滤列表 + 剩余数（数据变自动重算）
const filteredTodos = computed(() => {
  if (filter.value === "doing") return todos.value.filter(t => !t.done)
  if (filter.value === "done") return todos.value.filter(t => t.done)
  return todos.value
})
const remaining = computed(() => todos.value.filter(t => !t.done).length)
<\/script>

<style scoped>
.done { text-decoration: line-through; color: #999; }
</style>`},{type:"list",title:"复盘：这个组件用到了什么",items:["v-model 双向绑定 + @keyup.enter 修饰符","v-for 列表渲染 + 唯一 id 做 key","computed 派生数据（过滤、计数）","watch + localStorage 持久化，刷新不丢数据"]}]},{id:"vue-list-page",title:"9.2 实战二：带搜索的接口列表页",sections:[{type:"text",content:"真实业务最常见的页面形态：**请求接口 + 搜索过滤 + 加载状态**。把第三、六章的三态请求和 computed 结合起来。"},{type:"code",title:"StudentList.vue 核心逻辑",lang:"javascript",code:`<template>
  <input v-model.trim="keyword" placeholder="搜索姓名">

  <p v-if="loading">加载中...</p>
  <p v-else-if="error">{{ error }} <button @click="fetchList">重试</button></p>
  <p v-else-if="filteredList.length === 0">没有匹配的学生</p>
  <ul v-else>
    <li v-for="s in filteredList" :key="s.id">{{ s.name }} - {{ s.city }}</li>
  </ul>
  <p>共 {{ filteredList.length }} 人</p>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import axios from "axios"

const list = ref([]), keyword = ref("")
const loading = ref(false), error = ref("")

async function fetchList() {
  loading.value = true; error.value = ""
  try {
    const res = await axios.get("/api/students")
    list.value = res.data
  } catch { error.value = "加载失败" } finally { loading.value = false }
}

// 搜索：纯前端过滤用 computed（数据源不变时零请求）
const filteredList = computed(() =>
  list.value.filter(s => s.name.includes(keyword.value))
)

onMounted(fetchList)
<\/script>`},{type:"list",title:"进阶方向",items:["搜索请求防抖：watch keyword + debounce，避免每敲一个字发一次请求","分页：page/pageSize 状态 + watch 联动重新请求","抽成 useList() 组合式函数，所有列表页复用（第五章）"]},{type:"tip",content:"写完这两个项目，你已经具备独立开发 Vue 页面的能力——本站每个页面（首页/分类/课时/测试）用的都是同样的套路。"}]},{id:"vue-roadmap",title:"9.3 学习路线与方向",sections:[{type:"text",content:"掌握本站内容后，Vue 的日常开发你已经能上手。下面是进阶地图。"},{type:"list",title:"进阶路线",items:["**UI 组件库**：Element Plus / Ant Design Vue / Naive UI，表单表格秒搭","**TS 化**：TypeScript + Vue（defineProps 泛型、类型安全 store），中大型项目标配","**服务端渲染**：Nuxt 3（SSR/SSG），做 SEO 友好的官网和内容站","**原理深入**：虚拟 DOM 与 diff、Proxy 响应式、编译优化（patch flags）","**周边生态**：VueUse、 UnoCSS/Tailwind、Vitest 单元测试、Vite 插件开发"]},{type:"list",title:"实战建议",items:["给本站加功能就是最好的练习：学习进度保存（localStorage/Pinia）、笔记功能、题目收藏","做一个完整的个人小站（博客/工具集），走完开发-打包-部署全流程","每学一章回综合测试自测 Vue 范围，查漏补缺"]},{type:"tip",content:"官方文档 cn.vuejs.org 的深度指南和示例 playground 质量极高，遇到疑问先查官方文档再搜博客。"}]}]}]},pp={id:"uniapp",name:"小程序开发（uni-app）",short:"uni-app",color:"#07c160",description:"一套 Vue 语法的代码同时发布微信小程序、H5、App：移动端开发的跨端利器",chapters:[{id:"ua-ch1",title:"第一章 认识小程序与 uni-app",lessons:[{id:"ua-what-is-mp",title:"1.1 什么是微信小程序",sections:[{type:"text",content:'**小程序**是一种"不用下载安装、在微信里扫码或搜索就能用"的轻应用。它介于网页和原生 App 之间：比网页更流畅、能调用微信能力（登录、支付、扫码），又比 App 轻量——用完即走，不占桌面。你在微信里用的点餐、共享单车、健康码，大多是小程序。'},{type:"table",title:"小程序 vs H5 网页 vs 原生 App",headers:["对比项","H5 网页","微信小程序","原生 App"],rows:[["获取方式","浏览器输入网址","微信内搜索/扫码","应用商店下载安装"],["开发语言","HTML/CSS/JS","类前端语法（wxml/wxss 或 Vue）","Java/Kotlin、Swift"],["能力","受浏览器限制","可调用微信登录/支付/相机等","能力最全"],["审核","无","需微信审核","需应用商店审核"],["体验","一般","接近原生","最好"]]},{type:"list",title:"小程序的技术特点",items:["**双线程模型**：视图层（渲染界面）和逻辑层（JS）分开运行，通过通信桥交换数据","**没有 DOM/BOM**：不能用 document.getElementById，也没有 window 对象","**组件化标签**：用 view、text、image 等小程序组件代替 div、span、img","**rpx 单位**：自带响应式尺寸，750rpx 恒等于屏幕宽度"]},{type:"tip",content:"这就是为什么学完本站的 Vue 课再来学小程序会非常顺：uni-app 让你继续写 Vue，底层帮你翻译成小程序能懂的代码。"}]},{id:"ua-why-uniapp",title:"1.2 原生小程序 vs uni-app",sections:[{type:"text",content:"开发微信小程序有两条路：**原生开发**（微信自己的 wxml/wxss/js 语法）和 **uni-app**（用 Vue 语法写，编译成小程序）。uni-app 是 DCloud 推出的跨端框架：**一套代码，可发布到微信小程序、支付宝小程序、H5、App 等十几个平台**。"},{type:"table",title:"两种开发方式对比",headers:["对比项","微信原生","uni-app"],rows:[["语法","wxml + wxss + js（自研）","Vue 单文件组件（你已学过）"],["跨端能力","只能微信小程序","小程序/H5/App 一套代码"],["生态","微信官方组件","插件市场 + uni-ui 组件库"],["学习成本","需重新学一套模板语法","会 Vue 就会一大半"],["调试工具","微信开发者工具","HBuilderX + 微信开发者工具"]]},{type:"list",title:"为什么本课程选 uni-app",items:["**知识复用**：Vue 的数据绑定、组件、props/emit、Pinia 全部直接用","**一套多端**：写一次，微信小程序、H5 网页、手机 App 都能出","**生态成熟**：uni-ui 组件库、uView 等开箱即用","**就业面广**：国内大量公司用 uni-app 做小程序和混合 App"]},{type:"warn",content:'uni-app 不是"银弹"：需要极致性能或深度原生能力（复杂动画、蓝牙底层）的场景，原生更合适。但 90% 的业务类小程序，uni-app 完全够用。'}]},{id:"ua-env-setup",title:"1.3 开发环境搭建",sections:[{type:"text",content:"开发 uni-app 小程序需要两个工具配合：**HBuilderX**（写代码、编译，uni-app 官方 IDE）和**微信开发者工具**（预览、调试、上传小程序）。另外需要一个小程序的 AppID（身份证）。"},{type:"list",title:"三步搭好环境",items:['**1. 注册小程序账号**：mp.weixin.qq.com 注册"小程序"类型账号（个人可免费注册），在「开发管理 → 开发设置」里拿到 AppID','**2. 下载 HBuilderX**：dcloud.io 下载"正式版"（内置 uni-app 编译器，开箱即用）',"**3. 下载微信开发者工具**：developers.weixin.qq.com 下载稳定版；在工具「设置 → 安全设置」里打开「服务端口」（HBuilderX 要靠它唤起工具）"]},{type:"code",title:"创建并运行第一个项目",lang:"text",code:`1. HBuilderX：文件 -> 新建 -> 项目 -> 选 uni-app
   模板选「默认模板」，Vue 版本选 Vue 3
2. 菜单「运行 -> 运行到小程序模拟器 -> 微信开发者工具」
3. 首次运行提示填写 AppID：
   打开 manifest.json -> 微信小程序配置 -> 填入你的 AppID
   （没有 AppID 可先选「测试号」，部分能力受限）
4. HBuilderX 自动编译并唤起微信开发者工具，看到页面即成功`},{type:"tip",content:"也可以用 CLI 方式（vue-cli / vite 创建）配合 VS Code 开发，但新手强烈建议先用 HBuilderX，零配置、运行按钮一点就通。"}]}]},{id:"ua-ch2",title:"第二章 项目结构与配置",lessons:[{id:"ua-structure",title:"2.1 项目目录结构",sections:[{type:"text",content:'uni-app 项目遵循"约定优于配置"：页面放哪、静态资源放哪、全局样式放哪都有固定位置，和你学过的 Vite 项目思路一致。'},{type:"code",title:"标准目录结构",lang:"text",code:`my-uniapp/
├── pages/                 # ★ 所有页面（每个页面一个文件夹）
│   ├── index/index.vue    # 首页
│   └── mine/mine.vue      # 我的页
├── static/                # 静态资源（图片、图标，注意：不编译，原样拷贝）
├── components/            # 自定义组件
├── App.vue                # 应用根组件（全局生命周期、全局样式）
├── main.js                # 应用入口（创建 app、注册插件）
├── pages.json             # ★ 页面路由、导航栏、tabBar 配置
├── manifest.json          # ★ 应用配置（AppID、名称、各端设置）
└── uni.scss               # 全局样式变量（可选）`},{type:"list",title:"和纯 Vue 项目的关键区别",items:["**pages.json 是核心**：页面必须在这里注册，不注册打不开（相当于路由表 + 全局样式配置）","**static 目录特殊**：放这里的图片不会被编译处理，引用时写绝对路径 /static/logo.png","**没有 vue-router**：路由由 pages.json + uni.navigateTo 系列 API 管理","**App.vue 不放界面**：它只写全局生命周期（onLaunch 等）和全局样式"]}]},{id:"ua-pages-json",title:"2.2 pages.json：路由与窗口配置",sections:[{type:"text",content:"pages.json 是 uni-app 最重要的配置文件，干三件事：**注册页面路径**、**配置导航栏样式**、**配置底部 tabBar**。数组第一项就是小程序启动后的首页。"},{type:"code",title:"pages.json 典型配置",lang:"json",code:`{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationBarBackgroundColor": "#07c160",
        "navigationBarTextStyle": "white"
      }
    },
    {
      "path": "pages/mine/mine",
      "style": { "navigationBarTitleText": "我的" }
    }
  ],
  "globalStyle": {
    "navigationBarTitleText": "我的小程序",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "backgroundColor": "#f5f5f5"
  },
  "tabBar": {
    "color": "#999999",
    "selectedColor": "#07c160",
    "list": [
      { "pagePath": "pages/index/index", "text": "首页",
        "iconPath": "static/home.png",
        "selectedIconPath": "static/home-on.png" },
      { "pagePath": "pages/mine/mine", "text": "我的",
        "iconPath": "static/mine.png",
        "selectedIconPath": "static/mine-on.png" }
    ]
  }
}`},{type:"list",title:"配置要点",items:["**pages 数组**：每项 path 对应 pages 目录下的 .vue 文件（不用写后缀）","**style**：单页样式，优先级高于 globalStyle；可配导航栏文字、颜色、是否下拉刷新","**tabBar**：底部导航，list 至少 2 项、最多 5 项；图标放 static 目录，建议 81×81px","**HBuilderX 可视化编辑**：双击 pages.json 可切到表单界面填，不用手写 JSON"]},{type:"warn",content:'新加页面忘了在 pages.json 注册，跳转时会报 "page is not found"。这是新手第一高频错误。'}]},{id:"ua-manifest",title:"2.3 manifest.json 与 App.vue",sections:[{type:"text",content:'manifest.json 是"应用身份证"：应用名称、AppID、各平台的专属设置都在这里。App.vue 则是应用根组件，管理**应用级生命周期**——注意它和页面生命周期是两回事。'},{type:"code",title:"manifest.json 关键字段",lang:"json",code:`{
  "name": "我的学习小程序",
  "appid": "",
  "mp-weixin": {
    "appid": "wx1234567890abcdef",
    "setting": { "urlCheck": false },
    "usingComponents": true
  },
  "h5": { "title": "我的学习小程序" }
}`},{type:"code",title:"App.vue：应用生命周期",lang:"vue",code:`<script setup>
// 应用级生命周期（整个小程序只触发一次）
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('小程序启动时触发一次：适合读本地缓存、自动登录')
})
onShow(() => {
  console.log('小程序从后台进入前台时触发')
})
onHide(() => {
  console.log('小程序切到后台（按 Home 键）时触发')
})
<\/script>

<style>
/* App.vue 里的样式是全局样式，所有页面生效 */
page { background-color: #f5f5f5; }
</style>`},{type:"tip",content:'记忆层级：onLaunch/onShow/onHide 管"整个应用"；页面里的 onLoad/onShow 管"单个页面"。App 级 onShow 在每次回到小程序时触发，页面级 onShow 在每次进入该页面时触发。'}]}]},{id:"ua-ch3",title:"第三章 页面与路由",lessons:[{id:"ua-first-page",title:"3.1 第一个页面：单文件结构",sections:[{type:"text",content:"uni-app 的页面就是 Vue 单文件组件：template 写结构、script 写逻辑、style 写样式。但标签换成了小程序组件：**view 相当于 div，text 相当于 span，image 相当于 img**。"},{type:"code",title:"pages/index/index.vue",lang:"vue",code:`<template>
  <view class="container">
    <text class="title">{{ title }}</text>
    <image class="logo" src="/static/logo.png" mode="aspectFit" />
    <button type="primary" @tap="goDetail">进入详情</button>
  </view>
</template>

<script setup>
import { ref } from 'vue'

// 响应式数据：和 Vue 完全一样
const title = ref('你好，uni-app')

function goDetail() {
  uni.navigateTo({ url: '/pages/detail/detail?id=1' })
}
<\/script>

<style scoped>
.container { padding: 30rpx; }
.title { font-size: 40rpx; font-weight: bold; }
.logo { width: 200rpx; height: 200rpx; }
</style>`},{type:"table",title:"HTML 标签 → 小程序组件对照",headers:["HTML/Vue 网页","uni-app 小程序","说明"],rows:[["div","view","容器（最常用）"],["span / 文本","text","行内文本，长按可复制"],["img","image","必须设 mode，默认 320×240 不缩放"],["a 链接","navigator","声明式跳转组件"],["button","button","按钮（有 open-type 微信能力）"],["scroll 容器","scroll-view","局部滚动区域"]]},{type:"warn",content:"小程序里文字最好都包在 <text> 里，直接写在 view 里虽能显示，但无法设置部分文本样式；image 不写 mode 图片会变形。"}]},{id:"ua-navigation",title:"3.2 页面跳转四兄弟",sections:[{type:"text",content:'小程序没有路由链接标签（navigator 组件除外），跳转靠 uni 的四个 API。它们的区别在于"是否保留当前页"和"能否跳 tabBar 页"，选错会导致页面栈混乱或跳转失败。'},{type:"table",title:"四个跳转 API",headers:["API","行为","页面栈","能否跳 tabBar"],rows:[["uni.navigateTo","打开新页（可返回）","入栈（最多 10 层）","不能"],["uni.redirectTo","关闭当前页再打开","替换栈顶","不能"],["uni.switchTab","跳底部 tabBar 页","清空非 tab 页","只能跳 tabBar 页"],["uni.reLaunch","关闭所有页再打开","栈清空只剩目标页","都可以"]]},{type:"code",title:"跳转与返回",lang:"javascript",code:`// 普通跳转（详情页），左上角有返回箭头
uni.navigateTo({ url: '/pages/detail/detail?id=1' })

// 替换：登录页跳首页，不想让用户返回到登录页
uni.redirectTo({ url: '/pages/index/index' })

// 切 tabBar 页（首页/我的这种底部导航页）
uni.switchTab({ url: '/pages/mine/mine' })

// 重启应用到某页（如退出登录后）
uni.reLaunch({ url: '/pages/login/login' })

// 返回上一页 / 返回多级
uni.navigateBack()
uni.navigateBack({ delta: 2 })`},{type:"tip",content:'高频坑：用 navigateTo 跳 tabBar 页面会静默失败。记住规律——去 tabBar 页用 switchTab，普通页用 navigateTo，"回不去"的场景用 redirectTo/reLaunch。'}]},{id:"ua-params",title:"3.3 页面传参与接收",sections:[{type:"text",content:"跳转传参和网页 query string 一样拼在 URL 后面；接收方在**页面生命周期 onLoad** 里通过参数 options 拿到。复杂对象建议先存 Storage 或用全局状态，URL 有长度限制。"},{type:"code",title:"传参 → 接收",lang:"vue",code:`// A 页面：跳转时拼参数
uni.navigateTo({
  url: '/pages/detail/detail?id=100&name=' + encodeURIComponent('苹果')
})

// B 页面 detail.vue：onLoad 接收
<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const id = ref('')
const name = ref('')

onLoad((options) => {
  console.log('收到的参数：', options)  // { id: '100', name: '苹果' }
  id.value = options.id
  name.value = decodeURIComponent(options.name || '')
})
<\/script>`},{type:"list",title:"传参注意事项",items:["**参数都是字符串**：数字、布尔值接收到后要自己转型","**中文要编码**：参数含中文/特殊字符时用 encodeURIComponent，接收时 decodeURIComponent","**对象别硬塞**：数据大用 uni.setStorage 存，传一个 id 过去再取","**事件通道 EventChannel**：navigateTo 支持 events 回调，可实现页面间双向通信（进阶）"]}]},{id:"ua-page-lifecycle",title:"3.4 页面生命周期",sections:[{type:"text",content:'页面除了 Vue 组件本身的生命周期（onMounted 等），还有一套**小程序页面生命周期**，需要从 @dcloudio/uni-app 导入。数据加载通常写在 onLoad，需要"每次返回页面都刷新"的数据写在 onShow。'},{type:"table",title:"页面生命周期触发时机",headers:["钩子","触发时机","典型用途"],rows:[["onLoad","页面加载时（一次）","接收上一页参数、首次加载数据"],["onShow","页面显示时（每次）","刷新数据（如从详情页返回后更新列表）"],["onReady","页面首次渲染完成（一次）","依赖界面渲染完成的操作"],["onHide","页面隐藏时","暂停定时器、保存草稿"],["onUnload","页面卸载时（返回/redirect）","清理定时器、解绑事件"],["onPullDownRefresh","下拉刷新","重新拉取列表数据"],["onReachBottom","滚动到底部","加载下一页（分页）"]]},{type:"code",title:"组合使用示例",lang:"vue",code:`<script setup>
import { ref } from 'vue'
import { onLoad, onShow, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app'

const list = ref([])
const page = ref(1)

onLoad((options) => {
  loadCategory(options.type)   // 只在进入页面时读一次参数
})
onShow(() => {
  // 每次显示都刷新未读数等
})
onReachBottom(() => {
  page.value++
  loadList(page.value)          // 上拉加载更多
})
onPullDownRefresh(() => {
  list.value = []
  page.value = 1
  loadList(1)
  uni.stopPullDownRefresh()     // 手动停止刷新动画
})
<\/script>`},{type:"tip",content:'下拉刷新需要先在 pages.json 的 style 里开启 "enablePullDownRefresh": true，否则 onPullDownRefresh 不会触发。'}]}]},{id:"ua-ch4",title:"第四章 视图层：组件与样式",lessons:[{id:"ua-binding",title:"4.1 数据绑定与列表渲染",sections:[{type:"text",content:"好消息：模板里的数据绑定、v-for、v-if、computed、class/style 绑定——和 Vue 课学的**完全一致**。唯一要记住的是 key 绑定在小程序里编译为 wx:key，写法不变。"},{type:"code",title:"列表渲染与条件渲染",lang:"vue",code:`<template>
  <view class="goods">
    <!-- v-if 条件渲染 -->
    <text v-if="list.length === 0">暂无数据</text>

    <!-- v-for 列表渲染：:key 必写 -->
    <view
      v-for="item in list"
      :key="item.id"
      class="goods-item"
      @tap="tapItem(item)"
    >
      <image :src="item.cover" mode="aspectFill" class="cover" />
      <text class="name">{{ item.name }}</text>
      <text class="price">¥{{ item.price.toFixed(2) }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
  { id: 1, name: '苹果', price: 5.5, cover: '/static/apple.png' },
  { id: 2, name: '香蕉', price: 3.2, cover: '/static/banana.png' }
])
function tapItem(item) {
  uni.navigateTo({ url: '/pages/detail/detail?id=' + item.id })
}
<\/script>`},{type:"list",title:"小程序端的注意点",items:["**:key 必须写且唯一**：长列表不写 key 会导致渲染错乱和性能问题","**插值里能写表达式**：{{ price.toFixed(2) }} 可以，但别写复杂逻辑，用 computed","**不支持 DOM 操作**：没有 ref 拿元素、没有 getElementById，想操作界面靠数据驱动","**双向绑定**：表单用 v-model（uni-app 已封装好，底层对应小程序的 input 事件）"]}]},{id:"ua-rpx",title:"4.2 rpx 响应式单位",sections:[{type:"text",content:"**rpx（responsive pixel）** 是小程序专为多屏适配设计的尺寸单位：规定**屏幕宽度恒为 750rpx**。在 375px 宽的手机上 1rpx = 0.5px，在 414px 宽的手机上 1rpx ≈ 0.552px——同一套代码自动等比缩放。"},{type:"table",title:"单位选择建议",headers:["单位","特点","使用场景"],rows:[["rpx","随屏幕宽度等比缩放","布局尺寸：宽高、间距、字号（主力单位）"],["px","固定物理像素","1px 边框等不希望缩放的细节"],["%","相对父容器","宽度比例布局"],["vh/vw","视口比例","全屏容器"]]},{type:"code",title:"rpx 实战",lang:"css",code:`/* 设计稿按 750px 宽出图时：量出多少 px 就写多少 rpx */
.card {
  width: 690rpx;          /* 左右各留 30rpx 边距 */
  margin: 20rpx 30rpx;
  padding: 30rpx;
  border-radius: 16rpx;
  font-size: 28rpx;        /* 正文常用 26~30rpx */
}
.title { font-size: 36rpx; font-weight: 600; }

/* 细边框用 px，避免被缩放成模糊的 0.5rpx */
.card { border-bottom: 1px solid #eee; }`},{type:"tip",content:"设计师通常按 iPhone 6（375pt 宽）出 2 倍稿，即 750px 宽的设计图——图上量得 100px，样式直接写 100rpx，零换算。"}]},{id:"ua-form",title:"4.3 表单组件",sections:[{type:"text",content:"小程序表单用 input、textarea、switch、picker 等组件，配合 v-model 收集数据。注意小程序的 input 是**自闭合组件**，没有 select 标签——下拉选择用 picker。"},{type:"code",title:"常见表单写法",lang:"vue",code:`<template>
  <view class="form">
    <view class="row">
      <text>昵称</text>
      <input v-model="form.nickname" placeholder="请输入昵称" />
    </view>

    <view class="row">
      <text>性别</text>
      <!-- picker：底部滚轮选择器 -->
      <picker :range="genders" @change="onGenderChange">
        <text>{{ form.gender || '请选择' }}</text>
      </picker>
    </view>

    <view class="row">
      <text>接收通知</text>
      <switch :checked="form.notify" @change="form.notify = $event.detail.value" />
    </view>

    <button type="primary" @tap="submit">提交</button>
  </view>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ nickname: '', gender: '', notify: true })
const genders = ['男', '女', '保密']
function onGenderChange(e) {
  form.gender = genders[e.detail.value]   // e.detail.value 是选中的下标
}
function submit() {
  if (!form.nickname) return uni.showToast({ title: '请填昵称', icon: 'none' })
  console.log('提交：', form)
}
<\/script>`},{type:"warn",content:"小程序事件取值靠 e.detail：input 内容是 e.detail.value，switch 状态也是 e.detail.value——和网页的 e.target.value 不同。"}]},{id:"ua-layout-components",title:"4.4 常用布局组件",sections:[{type:"text",content:"除了基础组件，三个布局类组件出场率极高：**scroll-view**（局部滚动区）、**swiper**（轮播图）、**navigator**（声明式跳转）。"},{type:"code",title:"轮播图 swiper",lang:"vue",code:`<template>
  <!-- 轮播图：indicator-dots 显示小圆点 -->
  <swiper class="banner" indicator-dots autoplay interval="3000" circular
          indicator-active-color="#07c160">
    <swiper-item v-for="(img, i) in banners" :key="i">
      <image :src="img" mode="aspectFill" class="banner-img" />
    </swiper-item>
  </swiper>

  <!-- 声明式跳转（等价于 navigateTo） -->
  <navigator url="/pages/about/about" hover-class="nav-hover">
    <view class="link">关于我们</view>
  </navigator>
</template>

<script setup>
const banners = ['/static/b1.png', '/static/b2.png', '/static/b3.png']
<\/script>

<style>
.banner { width: 750rpx; height: 300rpx; }
.banner-img { width: 100%; height: 100%; }
</style>`},{type:"list",title:"组件记忆要点",items:["**swiper** 必须给固定高度，swiper-item 内放内容；circular 表示首尾衔接循环","**scroll-view** 局部滚动：scroll-x 横向、scroll-y 纵向，同样需要固定高度",'**navigator** 跳 tabBar 页要加 open-type="switchTab"',"**hover-class**：手指按下时的样式类，做点击反馈用"]}]}]},{id:"ua-ch5",title:"第五章 事件与常用 API",lessons:[{id:"ua-events",title:"5.1 事件处理",sections:[{type:"text",content:'小程序里点击事件推荐用 **@tap**（编译为 bindtap），@click 也兼容但 tap 响应更快（300ms 延迟优化）。传参不能写 @tap="fn(item)" 之外的方式吗？其实可以——但要理解小程序事件绑定的两种写法。'},{type:"code",title:"事件绑定与传参",lang:"vue",code:`<template>
  <!-- 写法一（推荐）：Vue 风格直接传参，uni-app 自动处理 -->
  <button @tap="handle(1, 'ok')">点我</button>

  <!-- 写法二：小程序原生风格，data-* 传参 -->
  <view data-id="99" data-name="商品" @tap="handleNative">
    原生风格
  </view>
</template>

<script setup>
function handle(num, str) {
  console.log(num, str)   // 1 'ok'
}
function handleNative(e) {
  console.log(e.currentTarget.dataset)  // { id: 99, name: '商品' }
}
<\/script>`},{type:"table",title:"常用事件",headers:["事件","触发时机"],rows:[["@tap","点击（推荐，无延迟）"],["@longpress","长按"],["@input","输入框内容变化"],["@change","选择器/开关状态变化"],["@scroll / @scrolltolower","scroll-view 滚动 / 滚到底"]]},{type:"tip",content:"事件对象里：e.detail 存组件产生的数据（输入值等）；e.currentTarget.dataset 存 data-* 自定义参数；touches 里有触摸坐标，做滑动手势时用。"}]},{id:"ua-request",title:"5.2 网络请求 uni.request",sections:[{type:"text",content:"小程序里没有 axios，发请求用 **uni.request**。它默认是回调风格，实际开发中通常包一层 Promise，并统一处理 baseURL、请求头 token、错误提示。"},{type:"code",title:"基础用法与 Promise 封装",lang:"javascript",code:`// 基础用法
uni.request({
  url: 'https://api.example.com/goods',
  method: 'GET',
  data: { page: 1 },
  header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },
  success: (res) => console.log(res.data),
  fail: (err) => uni.showToast({ title: '网络错误', icon: 'none' })
})

// ---- 推荐：封装成 utils/request.js ----
const BASE_URL = 'https://api.example.com'

export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + uni.getStorageSync('token')
      },
      success: (res) => {
        if (res.statusCode === 200 && res.data.code === 0) {
          resolve(res.data.data)
        } else if (res.statusCode === 401) {
          uni.reLaunch({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({ title: res.data.msg || '请求失败', icon: 'none' })
          reject(res)
        }
      },
      fail: (err) => {
        uni.showToast({ title: '网络连接失败', icon: 'none' })
        reject(err)
      }
    })
  })
}`},{type:"warn",content:"小程序正式版要求请求地址必须是 **HTTPS** 且在微信公众平台「开发设置 → 服务器域名」里配置 request 合法域名。开发阶段可在开发者工具勾选「不校验合法域名」临时调试。"}]},{id:"ua-storage",title:"5.3 本地存储 Storage",sections:[{type:"text",content:"小程序的本地存储类似 localStorage，但 API 是 uni.setStorage/getStorage，分同步（带 Sync 后缀）和异步两种。单个 key 上限 1MB，总上限 10MB，适合存 token、用户信息、草稿。"},{type:"code",title:"同步 API（简单场景推荐）",lang:"javascript",code:`// 存（对象会自动序列化）
uni.setStorageSync('token', 'eyJhbGci...')
uni.setStorageSync('userInfo', { id: 1, name: '小明' })

// 取
const token = uni.getStorageSync('token')
const user = uni.getStorageSync('userInfo')  // 直接拿到对象

// 删一个 / 清空全部
uni.removeStorageSync('token')
uni.clearStorageSync()

// 安全读取：key 不存在时同步 API 返回空字符串 ''
const t = uni.getStorageSync('token')
if (t) { /* 已登录 */ }`},{type:"list",title:"使用建议",items:["**token 必存 Storage**：小程序关闭后再打开仍保持登录，在 onLaunch 里读取","**别存大数据**：图片、长列表不要塞 Storage，会拖慢启动","**敏感信息权衡**：Storage 可被微信开发者工具查看，不要存密码明文","**同步 API 够用**：数据量小直接用 Sync 版本，代码简单；批量写入再考虑异步"]}]},{id:"ua-feedback",title:"5.4 交互反馈与媒体 API",sections:[{type:"text",content:"小程序提供一套原生交互组件，调用即可弹出，样式统一且体验好，不用自己写弹窗。媒体类 API 则能调起微信的选图、拍照、扫码能力。"},{type:"code",title:"反馈四件套",lang:"javascript",code:`// 轻提示（1.5 秒自动消失）
uni.showToast({ title: '保存成功', icon: 'success' })
uni.showToast({ title: '手机号格式错误', icon: 'none' })  // 纯文字

// 加载中（手动关闭）
uni.showLoading({ title: '加载中...', mask: true })
uni.hideLoading()

// 确认对话框（有确定/取消回调）
uni.showModal({
  title: '提示',
  content: '确定删除这条记录吗？',
  success: (res) => {
    if (res.confirm) console.log('用户点了确定')
    else if (res.cancel) console.log('用户点了取消')
  }
})

// 底部操作菜单
uni.showActionSheet({
  itemList: ['拍照', '从相册选择'],
  success: (res) => console.log('选择了第', res.tapIndex, '项')
})`},{type:"code",title:"选图与扫码",lang:"javascript",code:`// 选择图片（头像上传场景）
uni.chooseImage({
  count: 1,
  success: (res) => {
    const tempPath = res.tempFilePaths[0]  // 临时路径，可直接预览
    // 正式上传：uni.uploadFile 传给服务器
  }
})

// 扫码（微信扫一扫）
uni.scanCode({
  success: (res) => console.log('扫码结果：', res.result)
})`},{type:"tip",content:"网络请求时配合 showLoading（mask: true 防止重复点击），请求结束一定记得 hideLoading——通常封装在 request 函数里自动处理。"}]}]},{id:"ua-ch6",title:"第六章 组件化开发",lessons:[{id:"ua-easycom",title:"6.1 组件与 easycom 自动引入",sections:[{type:"text",content:"组件化思想和 Vue 课完全一致：把可复用的 UI（商品卡片、空状态、导航条）抽成组件。uni-app 还有个贴心机制 **easycom**：只要组件放在 components/组件名/组件名.vue 目录下，**不用 import、不用注册，直接在页面里用标签**。"},{type:"code",title:"目录约定与使用",lang:"text",code:`components/
└── goods-card/
    └── goods-card.vue      ← 文件名和文件夹名一致

页面里直接写：
<goods-card :info="item" @tap="goDetail" />

<!-- 不需要 import，不需要 components 注册，easycom 自动识别 -->`},{type:"code",title:"goods-card.vue 组件示例",lang:"vue",code:`<template>
  <view class="card" @tap="$emit('tap')">
    <image :src="info.cover" mode="aspectFill" class="cover" />
    <view class="info">
      <text class="name">{{ info.name }}</text>
      <text class="price">¥{{ info.price }}</text>
    </view>
  </view>
</template>

<script setup>
defineProps({
  info: { type: Object, required: true }
})
defineEmits(['tap'])
<\/script>`},{type:"tip",content:"easycom 规则：components/组件名/组件名.vue 自动生效。uni-ui 等第三方组件库也遵循此规则，安装后直接用 <uni-badge> 等标签。"}]},{id:"ua-props-emit",title:"6.2 父子组件通信",sections:[{type:"text",content:"通信方式和 Vue 一模一样：**props 下行、emit 上行**。这里复习巩固，并强调小程序端的两个注意点：样式隔离和事件命名。"},{type:"code",title:"父传子 props、子传父 emit",lang:"vue",code:`// 父页面
<template>
  <view>
    <stepper :count="num" @change="onChange" />
  </view>
</template>
<script setup>
import { ref } from 'vue'
const num = ref(1)
function onChange(newVal) { num.value = newVal }
<\/script>

// 子组件 stepper.vue
<template>
  <view class="stepper">
    <button @tap="dec">-</button>
    <text>{{ count }}</text>
    <button @tap="inc">+</button>
  </view>
</template>
<script setup>
const props = defineProps({ count: { type: Number, default: 1 } })
const emit = defineEmits(['change'])
function inc() { emit('change', props.count + 1) }
function dec() { if (props.count > 1) emit('change', props.count - 1) }
<\/script>`},{type:"list",title:"小程序端注意点",items:["**样式默认隔离**：组件里的 class 不会影响页面，但组件根节点外的样式也穿不进来；需要外部控制样式用 props 传 class 或用 :deep()","**事件名建议用 kebab-case**：@change 这类短名没问题；复杂场景如 @item-click 对应 emit('item-click')","**没有事件总线 $on/$off**（Vue3 已移除）：跨页面/跨组件通信用 Pinia"]}]},{id:"ua-uniui",title:"6.3 uni-ui 组件库",sections:[{type:"text",content:"官方组件库 **uni-ui** 提供了一批高质量跨端组件：图标、徽章、卡片、弹出层、日历、分页器等。它遵循 easycom 规范，安装后直接用标签，不用自己造轮子。"},{type:"list",title:"常用组件举例",items:["**uni-icons**：内置几百个图标，免去切图","**uni-badge / uni-tag**：数字角标、标签","**uni-popup**：底部/居中弹出层（做筛选、分享菜单）","**uni-list / uni-card**：标准列表项、卡片，后台管理类页面神器","**uni-datetime-picker**：日期时间选择","**uni-notice-bar**：滚动公告条"]},{type:"code",title:"安装与使用",lang:"text",code:`安装（HBuilderX）：
  插件市场 ext.dcloud.net.cn 搜索 uni-ui -> 使用 HBuilderX 导入插件

页面中直接使用（easycom 自动生效）：
<uni-icons type="heart" size="24" color="#e11d48" />
<uni-badge text="99+" type="error" />
<uni-tag text="新品" type="success" />

文档：uniapp.dcloud.net.cn/component/uniui/uni-ui.html`},{type:"tip",content:"社区还有 uView UI、wot-design-uni 等更丰富的组件库，项目复杂时可按需选择；新手先用 uni-ui 打基础。"}]}]},{id:"ua-ch7",title:"第七章 跨端机制",lessons:[{id:"ua-conditional-compile",title:"7.1 条件编译",sections:[{type:"text",content:'一套代码发多端，难免有"只有微信端要做"的逻辑（如微信支付）。**条件编译**用特殊注释实现：被标记的代码只在特定平台编译时保留，其他平台直接剔除。'},{type:"table",title:"平台标识",headers:["标识","平台"],rows:[["MP-WEIXIN","微信小程序"],["MP-ALIPAY","支付宝小程序"],["H5","H5 网页"],["APP-PLUS","App（含 nvue）"],["MP","所有小程序端"]]},{type:"code",title:"三种位置的写法",lang:"vue",code:`// 1. JS / script 中
// #ifdef MP-WEIXIN
uni.login({ provider: 'weixin' })
// #endif

// #ifdef H5
console.log('这段只在 H5 端编译')
// #endif

<!-- 2. template 中 -->
<view>
  <!-- #ifdef MP-WEIXIN -->
  <button open-type="getUserInfo">微信登录</button>
  <!-- #endif -->
  <!-- #ifdef H5 -->
  <button>账号密码登录</button>
  <!-- #endif -->
</view>

/* 3. style 中 */
/* #ifdef H5 */
.box { cursor: pointer; }
/* #endif */`},{type:"tip",content:"条件编译是注释不是代码：注意必须是 // 或 <!-- --> 形式，endif 不能漏，否则后续代码全被吞掉。"}]},{id:"ua-platform-diff",title:"7.2 多端差异与适配",sections:[{type:"text",content:'跨端不是"完全一样"，而是"能力求同存异"。大部分业务代码天然跨端，少数平台特有用条件编译处理。开发策略上，建议**先跑通一个端（微信小程序），再逐步验证其他端**。'},{type:"list",title:"常见差异点",items:["**页面路由**：小程序是 pages.json + navigateTo；H5 端自动变成 URL 路径","**支付/登录**：微信端用 wx.login + 微信支付；H5 用网页授权；App 用各渠道 SDK","**DOM 相关库不能用**：jQuery、ECharts 操作 DOM 的部分在小程序端失效（图表用 renderjs 或 ucharts）","**样式差异**：小程序不支持 * 通配符、部分 CSS3 选择器；H5 端全部支持","**安全区域**：全面屏底部横条用 safe-area-inset-bottom 适配"]},{type:"code",title:"底部安全区适配",lang:"css",code:`/* 底部固定按钮栏避开 iPhone 横条 */
.tabbar {
  padding-bottom: constant(safe-area-inset-bottom);  /* 老 iOS */
  padding-bottom: env(safe-area-inset-bottom);      /* 标准写法 */
}`}]},{id:"ua-wx-login-pay",title:"7.3 微信登录与支付（流程）",sections:[{type:"text",content:'小程序最核心的两个商业能力是**登录**和**支付**。它们都遵循"小程序端拿凭证 → 发给你的后端 → 后端调微信服务器换结果"的模式，小程序端本身只负责发起。理解流程比背 API 更重要。'},{type:"list",title:"微信登录流程",items:["**1.** 小程序调用 uni.login() 拿到临时登录凭证 code（5 分钟有效）","**2.** 把 code 发给自己的后端","**3.** 后端用 code + AppID + AppSecret 请求微信服务器，换 openid（用户唯一标识）和 session_key","**4.** 后端判断该 openid 是否已注册，生成自己的 token 返回给小程序","**5.** 小程序存 token（Storage），之后请求都带上——完成登录",'头像昵称通过 button open-type="chooseAvatar" + input 昵称填写获取（微信已收紧 getUserInfo）']},{type:"list",title:"微信支付流程",items:["**1.** 小程序提交订单给后端","**2.** 后端统一下单，调微信 API 生成预支付参数（prepay_id 等）返回","**3.** 小程序拿到参数调用 uni.requestPayment 唤起微信支付弹窗","**4.** 用户输密码支付；结果以微信后端回调通知你的服务器为准（前端成功不可全信）"]},{type:"warn",content:"AppSecret（小程序密钥）绝不能出现在前端代码里——它只保存在后端。前端只接触 code 和后端返回的 token/支付参数。"}]}]},{id:"ua-ch8",title:"第八章 工程化与性能",lessons:[{id:"ua-pinia",title:"8.1 状态管理 Pinia",sections:[{type:"text",content:"跨页面共享数据（用户信息、购物车、定位城市）用 **Pinia**——和 Vue 课学的完全一样，uni-app 原生支持。页面间传参复杂、多个页面读写同一份数据时就该上状态管理。"},{type:"code",title:"stores/user.js",lang:"javascript",code:`import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: uni.getStorageSync('token') || '',
    userInfo: null
  }),
  getters: {
    isLogin: (state) => !!state.token
  },
  actions: {
    setLogin(token, userInfo) {
      this.token = token
      this.userInfo = userInfo
      uni.setStorageSync('token', token)   // 同步持久化
    },
    logout() {
      this.token = ''
      this.userInfo = null
      uni.removeStorageSync('token')
    }
  }
})

// 页面中使用：
// const userStore = useUserStore()
// if (userStore.isLogin) { ... }`},{type:"tip",content:"经典用法：Pinia 存状态 + Storage 做持久化（actions 里同步读写），onLaunch 时从 Storage 恢复。购物车同理存一个 store。"}]},{id:"ua-subpackage",title:"8.2 分包加载",sections:[{type:"text",content:"微信小程序对代码包有大小限制：**主包不超过 2MB，整个小程序所有包不超过 20MB**（超了无法上传）。解决方案是**分包**：把不常用的页面（如个人中心、活动页）放进分包，用到时才下载，启动更快。"},{type:"code",title:"pages.json 配置分包",lang:"json",code:`{
  "pages": [
    { "path": "pages/index/index", "style": { "navigationBarTitleText": "首页" } }
  ],
  "subPackages": [
    {
      "root": "pagesMine",
      "pages": [
        { "path": "setting/setting", "style": { "navigationBarTitleText": "设置" } },
        { "path": "about/about", "style": { "navigationBarTitleText": "关于" } }
      ]
    },
    {
      "root": "pagesActivity",
      "pages": [
        { "path": "lottery/lottery", "style": { "navigationBarTitleText": "抽奖" } }
      ]
    }
  ],
  "preloadRule": {
    "pages/index/index": { "network": "wifi", "packages": ["pagesMine"] }
  }
}`},{type:"list",title:"分包原则",items:["**主包放高频页**：首页、tabBar 页面必须在主包（tabBar 页不能分包）","**分包放低频页**：设置、关于、活动、订单详情等","**preloadRule 预下载**：WiFi 下用户进入首页时后台预拉分包，点开时无感知","**跳转方式不变**：分包页面同样用 navigateTo，路径写 root + page 完整路径"]}]},{id:"ua-performance",title:"8.3 性能优化清单",sections:[{type:"text",content:'小程序性能的核心指标是**启动速度**和**渲染流畅度**。优化手段大多围绕"减少首屏加载量"和"减少通信次数"展开（双线程模型下，setData/数据变化越频繁、数据量越大，通信开销越高）。'},{type:"list",title:"实用优化手段",items:["**图片**：用 CDN + WebP/压缩，别把大图放 static 打进包内；image 设 lazy-load","**列表**：长列表用 key，配合分页加载；超长列表考虑官方 recycle-list 组件","**数据**：接口分页、按需返回；别把整个大对象塞进响应式数据","**分包**：上一课讲的 subPackages 直接减小主包体积","**防抖节流**：搜索输入、滚动监听加防抖/节流","**定时器清理**：onHide/onUnload 里清掉 setInterval，避免后台空转"]},{type:"code",title:"搜索输入防抖示例",lang:"javascript",code:`let timer = null
function onInput(e) {
  clearTimeout(timer)
  const kw = e.detail.value
  timer = setTimeout(() => {
    if (kw.trim()) search(kw)   // 停顿 300ms 才发请求
  }, 300)
}`},{type:"tip",content:"微信开发者工具的「Audits 面板」可以自动评分体检（启动性能、UI 规范），优化前先跑一遍看建议。"}]}]},{id:"ua-ch9",title:"第九章 调试、发布与实战",lessons:[{id:"ua-debug",title:"9.1 调试技巧",sections:[{type:"text",content:"调试主要在微信开发者工具里完成：它提供模拟器、Console 日志、Network 请求、Storage 查看、断点调试。真机和模拟器表现不一致时，用**真机调试**看真实环境。"},{type:"list",title:"常用调试手段",items:["**Console**：console.log 打印数据，HBuilderX 保存后自动编译刷新","**Network**：查看 uni.request 的请求参数、响应、状态码","**Storage 面板**：直接查看/清除本地存储，调试登录状态很方便","**真机预览**：点「预览」扫码在手机上跑；「真机调试」可以连手机看日志","**清缓存**：工具菜单「清缓存 → 全部清除」，遇到诡异问题先清缓存"]},{type:"warn",content:"模拟器和真机差异：定位、扫码、支付等能力模拟器无法完整模拟；样式问题（尤其安全区、滚动）以真机为准。"}]},{id:"ua-publish",title:"9.2 上传审核与发布",sections:[{type:"text",content:"开发完成后的上线流程：HBuilderX 编译发行 → 微信开发者工具上传 → 公众平台提交审核 → 审核通过后发布。个人主体也能发布小程序，但部分类目（支付、社交）需要企业资质。"},{type:"list",title:"发布四步",items:["**1. 发行编译**：HBuilderX 菜单「发行 → 小程序-微信」，生成产物并打开开发者工具","**2. 上传**：开发者工具点「上传」，填版本号（如 1.0.0）和备注","**3. 提交审核**：登录 mp.weixin.qq.com → 管理 → 版本管理 → 把刚上传的版本「提交审核」，填写功能页面路径、测试账号（如有）","**4. 发布**：审核通过（通常几小时~1 天）后点「发布」，用户即可搜索使用"]},{type:"list",title:"上线前检查清单",items:["服务器域名已在公众平台配置（request、uploadFile 等都要 HTTPS）","关闭开发者工具的「不校验合法域名」调试选项后仍正常","小程序名称、图标、简介合规；测试账号可用","首页无 console 报错、无空白页、无死链按钮","版本号按规范递增（1.0.0 → 1.1.0）"]}]},{id:"ua-real-project",title:"9.3 实战串联：小应用开发流程",sections:[{type:"text",content:'把全课程串成一个真实项目的开发顺序。以"课程表/待办清单"这类小工具为例，体会从建项目到上线的完整节奏——每个环节你都已经学过。'},{type:"list",title:"推荐开发顺序",items:["**1. 需求与页面清单**：列出有哪些页面（首页列表、编辑页、关于页）、哪些是 tabBar","**2. 建项目配路由**：HBuilderX 新建项目，pages.json 注册页面、配 tabBar","**3. 静态页面**：先用假数据把每个页面的 UI 搭出来（view/text/rpx 布局）","**4. 抽组件**：列表项、空状态、弹窗抽成 components 组件（easycom）","**5. 接数据**：封装 request；纯本地应用就用 Storage 做增删改查","**6. 交互完善**：toast/modal 反馈、下拉刷新、上拉加载、表单校验","**7. 状态管理**：用户信息/全局数据用 Pinia + Storage 持久化","**8. 适配与优化**：真机预览、安全区、图片压缩、必要时分包","**9. 上传审核**：按 9.2 的清单检查后发布"]},{type:"tip",content:"学习建议：照这个顺序做一个自己的小工具（记账、打卡、书单都行），做完这一个，小程序开发就真正入门了。遇到知识点回本站对应章节查即可。"}]}]}]},up={id:"git",name:"Git 版本控制",short:"Git",color:"#e11d48",description:'分布式版本控制系统：记录每次改动、随时回退、多人协作不冲突，程序员的"时光机"',chapters:[{id:"git-ch1",title:"第一章 Git 入门",lessons:[{id:"git-what-is",title:"1.1 什么是版本控制",sections:[{type:"text",content:'写代码时你一定遇到过这些场景：改崩了想退回昨天的版本，只能靠"最终版"、"最终版2"、"真最终版"文件夹；或者想把同事改的部分合并进来，只能开两个窗口肉眼比对。**版本控制**就是解决这些问题的工具：它像一台**时光机**，记录文件的每一次改动，让你随时回到任意历史时刻，也能安全地合并多人的修改。'},{type:"list",title:"为什么一定要用 Git",items:["**历史可追溯**：每一次保存（提交）都有快照，谁改的、什么时候改的、为什么改，一查便知","**后悔药**：改崩了随时回退到任意版本，不怕丢代码",'**并行开发**：分支让"开发新功能"和"修复线上 Bug"互不干扰',"**团队协作**：多人同时改同一个项目，Git 帮你合并、提示冲突","**事实上的标准**：全球几乎所有的开源与商业项目都用 Git 管理代码"]},{type:"table",title:"集中式 vs 分布式",headers:["对比项","集中式（SVN）","分布式（Git）"],rows:[["仓库位置","只有中央服务器有完整历史","每个人电脑上都有完整历史"],["离线工作","基本不能提交历史","完全可以离线提交，联网再同步"],["速度","多数操作要走网络","本地操作，速度极快"],["安全性","服务器坏了历史就丢了","任何一台电脑都是完整备份"]]},{type:"tip",content:"Git（工具）和 GitHub（网站）不是一回事：Git 是你电脑上的版本控制软件；GitHub 是托管 Git 仓库的平台，类似的还有 Gitee（码云）、GitLab。"}]},{id:"git-install",title:"1.2 安装与初始配置",sections:[{type:"text",content:'Git 是免费开源软件，支持 Windows / macOS / Linux。安装完成后必须先配置**用户名和邮箱**——每一次提交都会记录"作者是谁"，Git 就是从这个配置里读取的。'},{type:"code",title:"安装后必做的全局配置",lang:"bash",code:`# 告诉 Git 你是谁（提交记录会显示）
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"

# 常用别名：敲短命令等于敲长命令
git config --global alias.st status
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all"

# 查看所有配置
git config --global --list`},{type:"list",title:"配置的三个层级",items:["**system**：整台电脑所有用户生效，很少用","**global**：当前用户生效（--global），最常用","**local**：只对某一个仓库生效（在仓库目录里去掉 --global 执行），可以给不同项目配不同身份"]},{type:"tip",content:"邮箱建议用 GitHub 提供的 noreply 邮箱（如 12345678+username@users.noreply.github.com），公开仓库的提交历史里就不会暴露真实邮箱。"}]},{id:"git-areas",title:"1.3 三个工作区与文件状态",sections:[{type:"text",content:'理解 Git 的关键，是理解文件在**三个区域**之间流转：**工作区**（你正在编辑的目录）→ `git add` → **暂存区**（下次要提交的清单）→ `git commit` → **版本库**（永久历史）。很多"Git 怎么不听话"的困惑，都源于没分清文件此刻在哪个区。'},{type:"code",title:"文件状态流转",lang:"bash",code:`# 新建的文件：Untracked（未跟踪）
echo hello > a.txt

# add 后进入暂存区：Staged
git add a.txt

# commit 后进入版本库：Committed，工作区干净
git commit -m "add a.txt"

# 再次修改已跟踪文件：Modified
echo world >> a.txt

# 再 add、再 commit，如此循环
git add a.txt && git commit -m "update a.txt"`},{type:"table",title:"用 git status 看到的状态",headers:["提示","含义","下一步"],rows:[["Untracked files","新文件，Git 还没管它","git add 纳入跟踪"],["Changes not staged","已跟踪文件被修改","git add 加入暂存"],["Changes to be committed","已在暂存区，等待提交","git commit 提交"],["nothing to commit, working tree clean","工作区干净，与最新提交一致","可以放心切换分支"]]},{type:"tip",content:'暂存区的意义：它让你能把多个改动"分组提交"——比如这次只提交修 Bug 的两个文件，另一个没写完的功能先不放进来。'}]}]},{id:"git-ch2",title:"第二章 基础操作",lessons:[{id:"git-init-clone",title:"2.1 创建仓库：init 与 clone",sections:[{type:"text",content:"让 Git 管理一个目录，有两种起点：**本地新建**（git init）适合自己的新项目；**克隆已有**（git clone）适合参与现成的项目。执行后目录里会多出一个隐藏的 `.git` 文件夹——它就是版本库本体，所有历史都存在里面，**千万不要手动删除或修改它**。"},{type:"code",title:"两种创建方式",lang:"bash",code:`# 方式一：把当前目录变成 Git 仓库
cd my-project
git init

# 方式二：克隆远程仓库（自动包含全部历史和分支）
git clone https://github.com/用户名/仓库名.git
cd 仓库名`},{type:"list",title:"init 之后建议马上做的事",items:["创建 `.gitignore`，排除不需要跟踪的文件","创建 `README.md` 写清项目说明",'首次 `git add . && git commit -m "init"` 建立起点']},{type:"warn",content:"git init 只需要在项目根目录执行一次。在子目录里重复执行虽然不会报错，但可能造出嵌套仓库，让状态变得混乱。"}]},{id:"git-add-commit",title:"2.2 记录变更：add 与 commit",sections:[{type:"text",content:"日常写代码的节奏就是两步循环：`git add` 把改动放进暂存区，`git commit` 把暂存区内容打包成一个**提交**。每个提交都是项目在那一刻的完整快照，并有一个唯一的 ID（SHA-1 哈希，如 a1b2c3d）。"},{type:"code",title:"add 与 commit 常用姿势",lang:"bash",code:`# 添加单个文件
git add index.html

# 添加整个目录
git add src/

# 添加全部改动（最常用）
git add .

# 提交，-m 后面写说明（必写！）
git commit -m "修复登录按钮在手机上错位的问题"

# add + commit 二合一（只对已跟踪文件有效）
git commit -am "update readme"`},{type:"list",title:"好提交 vs 坏提交",items:["**一个提交做一件事**：修 Bug 一个提交、新功能一个提交，方便回退和排查",'**说明写清楚**：写"修复登录报空指针"，不要写"改了点东西"、"111"',"**提交要小而频繁**：攒一周的改动一次提交，回退粒度就太粗了"]},{type:"tip",content:"提交信息有个流行规范叫 Conventional Commits：feat 新功能、fix 修 Bug、docs 文档、style 格式、refactor 重构、test 测试。例如：feat: 支持暗色模式切换。"}]},{id:"git-log-diff",title:"2.3 查看历史：log、diff、show",sections:[{type:"text",content:'版本库的价值在于"可回溯"。三个命令帮你回答：发生过什么（log）、某次改动具体改了什么（show / diff）、当前还有哪些没提交的修改（diff）。'},{type:"code",title:"历史与差异",lang:"bash",code:`# 查看完整历史（空格翻页，q 退出）
git log

# 单行简洁模式
git log --oneline

# 图形化显示分支合并
git log --oneline --graph --all

# 看某个文件的历史
git log --oneline -- src/main.js

# 看当前未暂存的修改（工作区 vs 暂存区）
git diff

# 看已暂存的修改（暂存区 vs 最新提交）
git diff --staged

# 看某次提交改了什么
git show a1b2c3d`},{type:"table",title:"diff 的读法",headers:["符号","含义"],rows:[["--- a/file +++ b/file","对比的两个版本"],["@@ -1,4 +1,5 @@","旧文件第 1 行起 4 行，对应新文件第 1 行起 5 行"],["- 开头的行","被删除 / 修改前的内容"],["+ 开头的行","新增 / 修改后的内容"]]},{type:"tip",content:'给 log 配上 --graph --all 后能看到分支的"地铁图"，是理解项目历史走向最直观的方式。'}]},{id:"git-ignore",title:"2.4 .gitignore 忽略规则",sections:[{type:"text",content:'不是所有文件都该进版本库：依赖包（node_modules）、编译产物（dist、target）、本地配置（.env）、编辑器缓存（.idea）等，体积大、可再生成、或含敏感信息。`.gitignore` 文件就是用来声明"这些别管"。'},{type:"code",title:"常用写法（本站项目的真实例子）",lang:"bash",code:`# 依赖目录
node_modules/

# 构建产物
dist/

# 环境变量与敏感信息
.env
.env.local

# 日志与临时文件
*.log
*.tmp

# 编辑器/IDE
.idea/
.vscode/

# 忽略所有 .a 文件但保留 lib.a
*.a
!lib.a`},{type:"list",title:"规则语法速记",items:["**node_modules/**：匹配目录（斜杠结尾）","**\\*.log**：通配符匹配所有 .log 文件",'**!important.log**：感叹号表示"例外，不要忽略"',"**build/**：只忽略根目录或任意层级的 build 目录","**/dist**：只忽略仓库根目录下的 dist（前面加斜杠限定层级）"]},{type:"warn",content:'.gitignore 只对"未跟踪"的文件生效。如果文件已经被提交过，后来才加进 ignore，它仍会被继续跟踪——需要先执行 git rm --cached 文件名 把它移出跟踪，再提交。'}]}]},{id:"git-ch3",title:"第三章 撤销与回退",lessons:[{id:"git-restore-work",title:"3.1 撤销工作区修改",sections:[{type:"text",content:"文件改乱了、还没 add，想回到上次提交的样子——用 `git restore`（老版本用 `git checkout -- 文件`，效果相同）。注意这是**危险操作**：未提交的修改会被直接丢弃，找不回来。"},{type:"code",title:"丢弃工作区修改",lang:"bash",code:`# 丢弃单个文件的修改
git restore index.html

# 丢弃当前目录下所有修改
git restore .

# 旧写法（等价）
git checkout -- index.html`},{type:"warn",content:"执行前想清楚：这些修改从未提交过，丢弃后 Git 也无法恢复。拿不准时可以先 git stash 存起来（下一节讲）。"}]},{id:"git-unstage",title:"3.2 取消暂存",sections:[{type:"text",content:'`git add` 手滑把不该提交的文件加进了暂存区？用 `git restore --staged` 把它**退回工作区**——注意文件内容不会被改动，只是从"待提交清单"里拿掉。'},{type:"code",title:"把文件移出暂存区",lang:"bash",code:`# 取消暂存单个文件
git restore --staged secret.txt

# 取消暂存全部
git restore --staged .

# 旧写法（等价）
git reset HEAD secret.txt

# 情景：文件已暂存且被修改，想连同修改一起撤销
git restore --staged --worktree secret.txt`},{type:"tip",content:'记忆口诀：restore 默认管工作区，加 --staged 管暂存区，两个都加就是"全部恢复到上次提交"。'}]},{id:"git-reset",title:"3.3 回退提交：reset 三种模式",sections:[{type:"text",content:'提交错了想撤回，用 `git reset`。它把**当前分支的指针**挪到指定提交，三种模式决定了"那些被撤下的改动去哪"：`--soft` 留在暂存区、`--mixed`（默认）留在工作区、`--hard` 直接销毁。'},{type:"code",title:"回退到上一次提交",lang:"bash",code:`# 回退提交，改动保留在暂存区（想改改提交说明重来）
git reset --soft HEAD~1

# 回退提交，改动保留在工作区（想重新挑着 add）
git reset HEAD~1

# 彻底回退，改动全丢（危险！）
git reset --hard HEAD~1

# 回退到指定提交（ID 用 git log 查看）
git reset --hard a1b2c3d`},{type:"table",title:"三种模式对比",headers:["模式","版本库","暂存区","工作区","典型场景"],rows:[["--soft","回退","保留","保留","只是想重新组织提交"],["--mixed","回退","清空","保留","想重新选择要 add 的内容"],["--hard","回退","清空","清空","确定不要这些改动了"]]},{type:"warn",content:"--hard 会销毁未提交的修改。已推送到远程的提交不要用 reset 抹掉（会让协作者历史错乱），改用下一节的 revert。"}]},{id:"git-revert-stash",title:"3.4 安全回退 revert 与暂存 stash",sections:[{type:"text",content:'`revert` 是 reset 的安全替代：它不抹掉历史，而是**生成一个反向提交**把指定提交的效果抵消掉。历史完整保留，可以放心用在已推送的公共分支上。`stash` 则是"临时收纳架"：活干到一半要切分支救火，把改动先存起来，回来再取。'},{type:"code",title:"revert 与 stash",lang:"bash",code:`# 撤销某次提交（生成一条新提交，历史可追溯）
git revert a1b2c3d
# 撤销最近一次提交
git revert HEAD

# ---- stash ----
# 把工作区和暂存区的改动收起来
git stash

# 带说明地存
git stash push -m "做一半的搜索功能"

# 查看存了哪些
git stash list

# 取出最近存的（并从列表删除）
git stash pop

# 取出但不删除（想用在多个分支）
git stash apply`},{type:"list",title:"何时用哪个",items:["**私有分支、刚提交还没推送**：reset 方便直接","**已推送的公共分支**：一律 revert，别动公共历史","**临时切换任务**：stash 收起，回来 pop 续上"]},{type:"tip",content:"stash 默认不包含未跟踪的新文件，需要时用 git stash -u 把新文件也一起收进去。"}]}]},{id:"git-ch4",title:"第四章 分支",lessons:[{id:"git-branch-concept",title:"4.1 分支是什么",sections:[{type:"text",content:'分支是 Git 最强大的功能。本质很简单：**分支只是一个指向某次提交的 movable 指针**（40 位哈希写在一个小文件里），创建分支几乎零成本。主分支通常叫 `main`（旧项目叫 master），`HEAD` 则指向"你当前站在哪个分支上"。'},{type:"code",title:"直观感受分支的轻量",lang:"bash",code:`# 查看所有分支，* 标记当前所在
git branch

# 创建 + 切换一步到位
git switch -c feature-search

# 查看分支指向关系（图形化）
git log --oneline --graph --all`},{type:"list",title:"为什么要用分支",items:["**隔离**：新功能在 feature 分支上开发，写坏了不影响 main","**并行**：同时开多个分支处理不同任务","**协作**：每个人的改动在自己的分支上，合并时才汇合","**试错**：实验性想法开个分支随便折腾，不满意整个删掉"]},{type:"tip",content:"一个常见约定：main 永远保持可发布状态；开发中的东西都放在 feature/xxx 分支，完成并验证后再合并回 main。"}]},{id:"git-branch-switch",title:"4.2 创建与切换分支",sections:[{type:"text",content:"新版本 Git 推荐用 `switch` 来切换/创建分支（职责单一不易误操作），`branch` 专职管理。老命令 `checkout` 两者都能干，网上教程里依然常见，两个都要认识。"},{type:"code",title:"分支操作全家桶",lang:"bash",code:`# 创建分支（不切换）
git branch feature-login

# 切换分支
git switch feature-login

# 创建并切换（最常用）
git switch -c feature-login

# 旧写法（等价于上一条）
git checkout -b feature-login

# 重命名分支
git branch -m feature-login feature/auth

# 删除已合并的分支
git branch -d feature-login

# 强制删除（不管合并没合并）
git branch -D feature-login`},{type:"warn",content:"切换分支前最好保持工作区干净（先 commit 或 stash）。带着未提交修改切分支，Git 会尝试带着改动过去，容易造成意外的混合。"}]},{id:"git-merge",title:"4.3 合并分支：merge",sections:[{type:"text",content:"功能写完，把 feature 分支合并回 main。Git 会找两个分支的公共祖先做合并：如果 main 在分叉后没有新提交，直接把指针快进（**fast-forward**）；如果两边都有新提交，就做一次**三方合并**并生成一个合并提交。"},{type:"code",title:"合并流程",lang:"bash",code:`# 1. 先切到要接收合并的分支（通常是 main）
git switch main

# 2. 把 feature 分支合并进来
git merge feature-search

# 3. 合完删掉功能分支
git branch -d feature-search

# 强制生成合并提交（保留分叉痕迹）
git merge --no-ff feature-search`},{type:"list",title:"fast-forward 与三方合并",items:["**fast-forward**：main 分叉后没动过，直接把指针挪到 feature 的最新提交，历史是一条直线","**三方合并**：两边都有新提交，Git 自动把两边的改动融合，产生一个有两个父提交的 merge commit",'**--no-ff**：即使能快进也强制造合并提交，让"这一段是一个功能"在历史上一目了然']}]},{id:"git-conflict",title:"4.4 解决冲突",sections:[{type:"text",content:'两个分支改了**同一个文件的同一处**，Git 无法替你决定用谁的，就会报告冲突（CONFLICT）。冲突不可怕，它只是提醒："这里需要人来裁决"。解决三步：打开文件改到满意 → add 标记已解决 → commit 收尾。'},{type:"code",title:"冲突文件长这样",lang:"javascript",code:`function greet() {
<<<<<<< HEAD
    console.log("main 分支上的版本");
=======
    console.log("feature 分支上的版本");
>>>>>>> feature-greet
}`},{type:"list",title:"解决步骤",items:["**git status** 找到所有冲突文件（both modified 标记）","**打开文件**：<<<<<<< 与 >>>>>>> 之间是冲突块，======= 分隔双方；决定保留谁、或融合两者，删掉全部标记行","**git add 文件** 告诉 Git 已解决","**git commit** 完成合并（合并中的冲突不需要再写 -m 也有默认信息）"]},{type:"tip",content:"VS Code 会在冲突处显示「Accept Current / Incoming / Both」按钮，点一下就能自动清理标记，新手强烈推荐。"}]}]},{id:"git-ch5",title:"第五章 远程协作",lessons:[{id:"git-remote",title:"5.1 远程仓库：remote",sections:[{type:"text",content:"仓库放在 GitHub / Gitee 上，就成了**远程仓库**——它既是团队同步的中转站，也是异地备份。`origin` 是克隆时自动起的默认名字，指代远程仓库的地址，仅仅是个别名，叫什么都可以。"},{type:"code",title:"remote 管理",lang:"bash",code:`# 查看已配置的远程仓库
git remote -v

# 添加远程仓库（本地已有项目时）
git remote add origin https://github.com/FGBGO/it-study.git

# 改名 / 换地址
git remote rename origin upstream
git remote set-url origin git@github.com:FGBGO/it-study.git

# 删除
git remote remove origin`},{type:"table",title:"HTTPS 与 SSH 地址",headers:["方式","地址形态","认证"],rows:[["HTTPS","https://github.com/... ","用户名 + Personal Access Token"],["SSH","git@github.com:... ","配置好的密钥对，免输密码"]]},{type:"tip",content:"fork 别人项目后，常把 origin 指向自己的 fork、upstream 指向原仓库，方便同步上游更新。"}]},{id:"git-push-pull",title:"5.2 push 与 pull",sections:[{type:"text",content:"`push` 把本地提交上传到远程；`pull` 把远程更新下载并合并到本地。首次推送用 `-u`（--set-upstream）建立**跟踪关系**，之后本地分支就知道自己对应远程哪条分支，git status / pull 都会变得智能。"},{type:"code",title:"推送与拉取",lang:"bash",code:`# 首次推送：-u 建立跟踪关系
git push -u origin main

# 之后推送只需
git push

# 推送并创建远程同名分支
git push -u origin feature-search

# 拉取远程更新并合并到当前分支
git pull

# 删除远程分支
git push origin --delete feature-search`},{type:"warn",content:"push 被拒绝（non-fast-forward）说明远程有你没有的新提交——先 git pull 合并完再推。永远不要对公共分支使用 git push --force。"}]},{id:"git-fetch",title:"5.3 fetch 与远程分支",sections:[{type:"text",content:"`git pull` 其实是两个动作的合体：`fetch`（下载远程更新）+ `merge`（合并进当前分支）。只 `fetch` 不合并，可以先**观察**远程发生了什么，再决定怎么处理——这是更稳妥的习惯。远程分支在本地以 `origin/分支名` 的形式只读存在。"},{type:"code",title:"先看再合",lang:"bash",code:`# 下载远程所有更新（不影响本地分支）
git fetch

# 看看 main 落后远程多少
git log main..origin/main --oneline

# 确认没问题再合并
git merge origin/main

# 基于远程分支创建本地分支
git switch -c feature-x origin/feature-x

# 查看所有分支（含远程）
git branch -a`},{type:"tip",content:'git pull --rebase 会把本地未推送的提交"搬"到远程更新之后，让历史保持直线，避免频繁的合并提交，团队常用。'}]},{id:"git-workflow",title:"5.4 团队协作流程与 Pull Request",sections:[{type:"text",content:"团队协作的典型模式叫 **GitHub Flow**：main 保持可用 → 每个任务开 feature 分支 → 推送到远程 → 发起 **Pull Request（PR）** → 队友 review 提意见 → 通过后合并 → 删分支。PR 不只是合并按钮，更是**代码评审和讨论**的载体。"},{type:"list",title:"一次完整的协作循环",items:["**1. 同步**：git switch main && git pull 更新主线","**2. 开分支**：git switch -c feat/user-avatar，命名写清用途","**3. 开发提交**：小步多次 commit，说明写清楚","**4. 推送**：git push -u origin feat/user-avatar","**5. 发 PR**：在 GitHub 上写清做了什么、怎么验证，请队友 review","**6. 评审**：按意见继续提交，PR 会自动包含新提交","**7. 合并**：Squash merge 把零碎提交压成一个干净的提交进 main","**8. 清理**：删除本地和远程的功能分支"]},{type:"tip",content:'个人项目也建议走这套流程：分支隔离 + 自我 review，能显著降低"改着改着把主线改坏"的概率。'}]}]},{id:"git-ch6",title:"第六章 进阶技巧",lessons:[{id:"git-tag",title:"6.1 tag 标签与版本发布",sections:[{type:"text",content:"项目发布重要版本时，给某次提交打上**标签**（如 v1.0.0），以后就能一步回到这个发布点。标签分两种：轻量标签（只是个名字）和**附注标签**（带说明、作者、日期，发布用这种）。"},{type:"code",title:"标签操作",lang:"bash",code:`# 给当前提交打附注标签
git tag -a v1.0.0 -m "第一个正式版本"

# 列出所有标签
git tag

# 查看标签详情
git show v1.0.0

# 推送标签到远程（push 默认不带标签！）
git push origin v1.0.0

# 一次推送全部标签
git push origin --tags

# 删除标签
git tag -d v1.0.0
git push origin --delete v1.0.0`},{type:"tip",content:"语义化版本（SemVer）：主版本.次版本.修订号。大改动不兼容升主版本，加功能升次版本，修 Bug 升修订号——v2.1.3 就传达了兼容性信息。"}]},{id:"git-rebase",title:"6.2 rebase 变基",sections:[{type:"text",content:'`rebase` 把自己分支上的提交"摘下来"，**逐个重放**到另一条分支的最新提交之后，效果是历史变成一条直线。与 merge 的区别：merge 保留分叉事实（多一个合并提交），rebase 重写历史（更整洁但"说谎"）。'},{type:"code",title:"变基的两种用法",lang:"bash",code:`# 在 feature 分支上：把我的提交搬到 main 最新之后
git switch feature-search
git rebase main

# 遇到冲突时：解决后继续（不是 commit）
git add .
git rebase --continue

# 想放弃变基，回到之前状态
git rebase --abort

# 交互式变基：整理最近 3 个提交
git rebase -i HEAD~3`},{type:"table",title:"merge vs rebase",headers:["对比项","merge","rebase"],rows:[["历史形态","真实保留分叉","变成一条直线"],["新增提交","产生合并提交","不产生（重写原提交）"],["安全性","不改历史，绝对安全","改历史，公共分支禁用"],["适用","合并功能分支","个人分支同步主线 / 提交前整理"]]},{type:"warn",content:"黄金法则：**绝不要对已推送给他人（公共分支）的提交做 rebase**。只 rebase 自己独占的分支。"}]},{id:"git-cherry-reflog",title:"6.3 cherry-pick 与 reflog 找回",sections:[{type:"text",content:'`cherry-pick` 像"摘樱桃"：从别的分支**只挑某个提交**应用到当前分支，不合并整个分支。`reflog` 则是"后悔药中的后悔药"：它记录 HEAD 的每一次移动，即使提交被 reset 丢弃、分支被误删，都能从这里找回。'},{type:"code",title:"摘提交与找历史",lang:"bash",code:`# 把 feature 上的 a1b2c3d 单独摘到当前分支
git cherry-pick a1b2c3d

# ---- reflog：救命用 ----
# 查看 HEAD 的移动记录
git reflog

# 输出示例：
# a1b2c3d HEAD@{0}: commit: 更新首页
# 9f8e7d6 HEAD@{1}: reset: moving to HEAD~1

# 回到 reset 之前的状态
git reset --hard 9f8e7d6`},{type:"list",title:"reflog 的典型救命场景",items:["**reset --hard 后想反悔**：reflog 找到 reset 前的提交，reset 回去","**误删分支**：git branch 分支名 被删提交的哈希 重建","**rebase 搞砸了**：rebase --abort 或 reflog 回到 rebase 前"]},{type:"tip",content:"只要提交过的东西，在 Git 里几乎不会真正丢失——reflog 默认保留 90 天。但从未 add/commit 的工作区修改除外。"}]},{id:"git-bisect",title:"6.4 二分排查 bisect 与效率技巧",sections:[{type:"text",content:'"这个 Bug 是哪次提交引入的？"如果历史有一百个提交，挨个检查太慢。`git bisect` 用**二分法**自动帮你缩小范围：你只需告诉它"这个提交是好的、那个是坏的"，它几次就能定位到引入 Bug 的那一次。'},{type:"code",title:"二分定位 Bug",lang:"bash",code:`# 开始：标记当前是坏的、v1.0 是好的
git bisect start
git bisect bad
git bisect good v1.0

# Git 自动切到中间提交，你测试后告诉它：
git bisect good   # 或 git bisect bad

# 重复几次后输出：a1b2c3d is the first bad commit

# 结束，回到原来的分支
git bisect reset`},{type:"list",title:"提效小技巧合集",items:["**git status -s**：短格式状态，一行一个文件","**git commit --amend**：补充修改最近一次提交（说明或内容）","**git log -p 文件**：看文件每处代码是谁哪次改的","**git blame 文件**：逐行标注作者与提交","**alias.lg 图形日志**：log --oneline --graph --all 起个别名天天用"]}]}]},{id:"git-ch7",title:"第七章 实战场景急救手册",lessons:[{id:"git-rescue",title:"7.1 常见误操作急救",sections:[{type:"text",content:'这一课把新手最怕的几个"翻车现场"的解法集中列出。核心武器就三个：reflog（找回历史）、reset（移动指针）、cherry-pick（捞提交）。'},{type:"code",title:"场景与解法",lang:"bash",code:`# 场景 1：reset --hard 后悔了
git reflog                     # 找到出事前的哈希
git reset --hard 出事前的哈希

# 场景 2：误删了还没合并的分支
git reflog                     # 找到分支最后的提交
git branch feature-search 哈希

# 场景 3：提交到了错误的分支
# （在错误分支上）
git branch 正确分支名           # 先在原地把分支建出来
git reset --hard HEAD~1        # 再把当前分支退回去

# 场景 4：提交说明写错了（还没推送）
git commit --amend -m "正确的说明"

# 场景 5：commit 漏了文件（还没推送）
git add 漏掉的文件
git commit --amend --no-edit`},{type:"tip",content:"处理误操作前先 git reflog + git status 看清现状，比慌乱中乱敲命令安全得多。"}]},{id:"git-rewrite-history",title:"7.2 整理提交历史",sections:[{type:"text",content:'开发时commit 写得很碎（"改错字"、"真改好了"），合并进 main 前值得整理。交互式变基 `rebase -i` 可以**合并多个提交（squash）**、**重排顺序**、**改写说明**，让功能分支的历史清爽可读。'},{type:"code",title:"压缩最近三个提交",lang:"bash",code:`git rebase -i HEAD~3

# 打开的编辑器里，每行开头是动作（pick 默认保留）：
# pick a1b2c3 feat: 搜索框基本功能
# pick e4f5g6 fix: 搜索框样式
# pick h7i8j9 fix: 搜索防抖

# 把后两行的 pick 改成 squash（并入上一行）：
# pick a1b2c3 feat: 搜索框基本功能
# squash e4f5g6
# squash h7i8j9

# 保存后 Git 让你编辑合并后的提交说明，再保存即可`},{type:"warn",content:"只对**没有推送给别人**的提交做整理。已推送的公共历史被改写，队友 pull 时会天下大乱。"}]},{id:"git-binary-lfs",title:"7.3 大文件与二进制文件",sections:[{type:"text",content:"Git 对文本文件做了极致优化（按行存差异），但对图片、视频、压缩包这类**二进制文件**：每次改动都存一份完整副本，仓库会迅速膨胀。原则：**源代码进 Git，构建产物和大文件不进**（实在需要则用 Git LFS）。"},{type:"list",title:"实践建议",items:["**不提交**：node_modules、dist、target、日志、数据库 dump —— 全部写进 .gitignore","**设计稿/图片**：小图可以进仓库；频繁改动的大图用 LFS 或放对象存储",'**Git LFS**：git lfs install 后 git lfs track "*.psd"，大文件存指针，实体走专用存储',"**数据库**：不要提交数据文件，提交建表脚本（SQL）"]},{type:"warn",content:"大文件一旦进了历史，事后 .gitignore 也删不掉历史里的它，需要 rewrite history（filter-repo）才能瘦身——代价很大。预防远胜于治疗。"}]}]},{id:"git-ch8",title:"第八章 GitHub 实用指南",lessons:[{id:"git-github-ssh",title:"8.1 SSH 免密配置",sections:[{type:"text",content:"HTTPS 方式每次推送都可能要输 Token，配好 **SSH 密钥**后 git@github.com: 开头的地址就能免密收发。原理：本地生成一对密钥，私钥留在电脑，公钥贴到 GitHub，配对成功即认证。"},{type:"code",title:"三步配好 SSH",lang:"bash",code:`# 1. 生成密钥对（邮箱换成你的，一路回车即可）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. 查看公钥内容并复制
cat ~/.ssh/id_ed25519.pub

# 3. GitHub 右上角头像 -> Settings -> SSH and GPG keys
#    -> New SSH key，粘贴公钥保存

# 测试连通性
ssh -T git@github.com`},{type:"tip",content:"本站部署 GitHub Pages 时用的 publish-gh.bat 若遇到 HTTPS 认证麻烦，把远程地址换成 SSH 形式（git remote set-url origin git@github.com:FGBGO/it-study.git）即可免密推送。"}]},{id:"git-github-features",title:"8.2 README、Pages 与开源协作",sections:[{type:"text",content:'GitHub 不只是"存代码的网盘"：README 是项目门面，**GitHub Pages** 能免费托管静态网站（本站就是这么部署的），Issue 管理待办，Fork + PR 是参与开源的标准路径。'},{type:"list",title:"平台功能速览",items:["**README.md**：仓库首页自动展示，写清是什么、怎么跑起来","**GitHub Pages**：仓库 Settings -> Pages 选 gh-pages 分支，静态站即刻上线","**Issues**：记录 Bug 与功能需求，可关联提交（提交信息写 fix #1）","**Fork**：把别人的仓库复制到自己账号下，改好后发 PR 贡献回去","**Actions**：CI/CD 自动化，推送时自动测试、构建、部署"]},{type:"tip",content:"给开源项目贡献代码的完整路径：fork 仓库 -> clone 自己的 fork -> 开分支修改 -> push 到自己的 fork -> 在 GitHub 上向原仓库发 PR。"}]}]},{id:"git-ch9",title:"第九章 综合实战",lessons:[{id:"git-personal-flow",title:"9.1 个人项目标准工作流",sections:[{type:"text",content:'把前面所学串成每天重复的肌肉记忆。个人开发也建议走"分支 + 合并"的完整流程——习惯养成了，团队协作无缝衔接。'},{type:"code",title:"每日开发循环",lang:"bash",code:`# 1. 更新主线
git switch main && git pull

# 2. 为新任务开分支
git switch -c feat/quiz-timer

# 3. 写代码，小步提交（重复多次）
git add .
git commit -m "feat: 测试页增加倒计时"

# 4. 推送备份
git push -u origin feat/quiz-timer

# 5. 功能完成：合并回主线（本地直接合）
git switch main
git merge --no-ff feat/quiz-timer
git push

# 6. 清理
git branch -d feat/quiz-timer
git push origin --delete feat/quiz-timer`},{type:"list",title:"坚持这套流程的收益",items:['main 始终是"能跑的最新稳定版"，随时可以演示',"每个功能一段独立历史，出问题能整体回退","每天 push，代码永远有异地备份"]}]},{id:"git-commit-style",title:"9.2 提交信息与分支命名规范",sections:[{type:"text",content:'规范不是形式主义：三个月后翻历史时，"feat: 测试页增加倒计时"和"修改"的区别，就是能不能快速定位的区别。推荐业界通用的 **Conventional Commits** 规范。'},{type:"table",title:"提交类型前缀",headers:["前缀","用途","示例"],rows:[["feat","新功能","feat: 支持暗色模式"],["fix","修 Bug","fix: 修复答题记录互相覆盖"],["docs","文档","docs: 补充部署说明"],["style","格式调整（不影响逻辑）","style: 统一缩进"],["refactor","重构（不加功能不修 Bug）","refactor: 抽取公共请求方法"],["test","测试","test: 增加工具函数单测"],["chore","构建/工具/杂务","chore: 升级 vite 版本"]]},{type:"list",title:"分支命名建议",items:["**feature/xxx 或 feat/xxx**：新功能","**fix/xxx**：修 Bug","**hotfix/xxx**：紧急修复线上问题","**用英文小写 + 连字符**：feat/user-avatar，不要用中文和空格"]},{type:"tip",content:"本站的提交历史就是这个规范的实际样例：可以打开 GitHub 仓库的 Commits 页面对照感受。"}]}]}]},dp={id:"maven",name:"Maven 构建工具",short:"Maven",color:"#0891b2",description:"Java 世界的标准构建与依赖管理工具：一条命令完成编译、测试、打包，依赖 jar 包自动下载",chapters:[{id:"mvn-ch1",title:"第一章 Maven 入门",lessons:[{id:"mvn-why",title:"1.1 为什么需要构建工具",sections:[{type:"text",content:'没有构建工具的 Java 项目是什么样？想用个 MySQL 驱动，去官网下 jar；驱动又依赖另一个 jar，接着下；版本不兼容跑起来报错，逐个试……**Maven** 把这一切自动化：你只需要在 pom.xml 里**声明**"我需要什么"，它负责**下载依赖、编译代码、跑测试、打包部署**的全套流程。'},{type:"list",title:"Maven 解决的三大问题",items:["**依赖管理**：声明式引入 jar 包，传递依赖自动带上，版本集中管理","**标准化构建**：统一的生命周期命令，任何 Maven 项目都是 clean / compile / package 一套走","**标准化结构**：源码放哪、配置放哪、测试放哪，全球约定一致，接手任何项目都不陌生"]},{type:"table",title:"常见构建工具对比",headers:["工具","配置文件","特点"],rows:[["Maven","pom.xml（XML）","约定优于配置、生态最广、资料最多"],["Gradle","build.gradle（脚本）","更灵活、构建更快，Android 官方采用"],["Ant","build.xml（手写流程）","老一代，一切自己写，已基本被淘汰"]]},{type:"tip",content:'Maven 读作"梅文"（意第绪语"知识的积累者"），不是"马文"。学它还有个隐藏收益：Spring Boot 官方脚手架生成的项目默认就是 Maven 结构。'}]},{id:"mvn-install",title:"1.2 安装与配置",sections:[{type:"text",content:"Maven 依赖 JDK，先装好 Java 再装 Maven。国内环境必做的一步是配置**阿里云镜像**——不配置的话，中央仓库（国外）下载依赖会非常慢。"},{type:"code",title:"安装与验证",lang:"bash",code:`# 1. 前置：确认 JDK 已安装
java -version

# 2. 下载解压 Maven（maven.apache.org），配置环境变量：
#    MAVEN_HOME = D:\\tools\\apache-maven-3.9.9
#    Path 中追加 %MAVEN_HOME%\\bin

# 3. 验证
mvn -v`},{type:"code",title:"settings.xml：本地仓库与阿里云镜像",lang:"xml",code:`<!-- 文件位置：MAVEN_HOME/conf/settings.xml（全局）
     或 ~/.m2/settings.xml（当前用户，推荐复制一份改这个） -->

<!-- 本地仓库位置：依赖 jar 的缓存目录 -->
<localRepository>D:\\maven-repo</localRepository>

<!-- 阿里云镜像：所有中央仓库请求走国内 -->
<mirrors>
  <mirror>
    <id>aliyunmaven</id>
    <mirrorOf>central</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
  </mirror>
</mirrors>`},{type:"warn",content:"用 IDEA 内置的 Maven 也没问题，但建议在 Settings 里把「Maven home」指向自己安装的版本、settings.xml 指向同一份配置，保证命令行和 IDE 行为一致。"}]},{id:"mvn-first-project",title:"1.3 第一个 Maven 项目",sections:[{type:"text",content:"用 archetype（项目模板）可以生成一个标准骨架；实际开发中更常直接用 IDEA 的 New Project -> Maven Archetype 向导。重点认识 Maven 的**约定目录结构**——不要自作主张改名字。"},{type:"code",title:"命令行生成项目",lang:"bash",code:`mvn archetype:generate ^
  -DgroupId=com.fgbgo.demo ^
  -DartifactId=hello-maven ^
  -DarchetypeArtifactId=maven-archetype-quickstart ^
  -DinteractiveMode=false

cd hello-maven
mvn package`},{type:"code",title:"标准目录结构",lang:"text",code:`hello-maven/
├── pom.xml                    # 项目说明书（核心）
└── src/
    ├── main/
    │   ├── java/              # 源代码（包路径 = groupId 相关）
    │   │   └── com/fgbgo/demo/App.java
    │   └── resources/         # 配置文件（application.yml 等）
    └── test/
        ├── java/              # 测试代码（类名以 Test 结尾）
        └── resources/         # 测试专用配置

target/                        # 构建输出（编译类、jar 包），不需要提交 Git`},{type:"list",title:"第一次构建会发生什么",items:["Maven 按生命周期执行：validate -> compile -> test -> package","首次运行会下载大量插件与依赖到本地仓库（配了镜像就很快）","完成后在 target/ 下生成 hello-maven-1.0-SNAPSHOT.jar"]}]}]},{id:"mvn-ch2",title:"第二章 POM 与坐标",lessons:[{id:"mvn-pom-basics",title:"2.1 pom.xml 全貌与坐标",sections:[{type:"text",content:'POM（Project Object Model，项目对象模型）是 Maven 的一切入口。每个项目在"仓库世界"里的唯一身份证叫**坐标**：groupId（组织）、artifactId（项目名）、version（版本）——三者合起来能唯一定位一个 jar 包，就像 (经度, 纬度, 海拔) 定位一个点。'},{type:"code",title:"最小可用的 pom.xml",lang:"xml",code:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <!-- 坐标三要素：世界里的唯一地址 -->
  <groupId>com.fgbgo</groupId>       <!-- 组织/公司倒写域名 -->
  <artifactId>it-study-api</artifactId> <!-- 项目/模块名 -->
  <version>1.0.0</version>           <!-- 版本号 -->
  <packaging>jar</packaging>         <!-- 打包方式：jar / war / pom -->

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>
</project>`},{type:"list",title:"版本号里的 SNAPSHOT 是什么",items:["**1.0.0**：正式版（release），发布后内容永不改变","**1.0.0-SNAPSHOT**：开发中的快照版，内容随时在变，Maven 会定期检查更新","团队协作时，公共模块常用 SNAPSHOT 供大家实时联调；对外发布必须用正式版"]},{type:"tip",content:'去 mvnrepository.com 搜索任何第三方库，都能直接复制它的坐标三要素粘贴到 pom 里——这是日常最常用的"查坐标"姿势。'}]},{id:"mvn-properties",title:"2.2 properties 与统一版本管理",sections:[{type:"text",content:'`<properties>` 里定义的是**变量**，用 `${变量名}` 引用。最重要的实践：把所有依赖版本号集中定义成属性，改版本只改一处，杜绝"改了 30 处漏了 2 处"的事故。'},{type:"code",title:"集中管理版本",lang:"xml",code:`<properties>
  <mysql.version>8.4.0</mysql.version>
  <junit.version>5.10.2</junit.version>
  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>

<dependencies>
  <dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>\${mysql.version}</version>   <!-- 引用变量 -->
  </dependency>
</dependencies>`},{type:"list",title:"常用内置属性",items:["**${project.version}**：本项目版本","**${project.build.directory}**：target 目录","**${basedir}**：项目根目录（插件配置里定位文件用）","**${project.build.sourceEncoding}**：源码编码，务必设为 UTF-8"]},{type:"warn",content:'Windows 下不设置 UTF-8 编码属性，编译含中文注释的代码经常报"编码 GBK 的不可映射字符"，这是新手最高频报错之一。'}]},{id:"mvn-build-config",title:"2.3 build 构建配置",sections:[{type:"text",content:'`<build>` 节点控制"怎么打包"：产物叫什么名字、哪些文件算资源、打包时做什么额外处理。最常见的两个需求：改 jar 包名、让 resources 里的占位符被替换（资源过滤）。'},{type:"code",title:"常用 build 配置",lang:"xml",code:`<build>
  <!-- 打包出来的文件名，避免带上一长串版本号 -->
  <finalName>it-study-api</finalName>

  <plugins>
    <!-- 指定编译的 Java 版本（也可用 properties 实现） -->
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <configuration>
        <release>17</release>
      </configuration>
    </plugin>
  </plugins>
</build>`},{type:"tip",content:"Spring Boot 项目的 build 里会多一个 spring-boot-maven-plugin，它负责把依赖一起打进可执行 jar（java -jar 能跑的那种）——普通 mvn package 不会打依赖进去。"}]}]},{id:"mvn-ch3",title:"第三章 依赖管理（核心）",lessons:[{id:"mvn-add-dep",title:"3.1 添加依赖",sections:[{type:"text",content:'依赖管理是 Maven 的灵魂。添加依赖三步：去 mvnrepository.com 搜库名 -> 选版本复制 XML -> 粘贴到 pom 的 `<dependencies>` 里，保存后 IDEA 自动下载。本地仓库里没有的包，Maven 会按"本地仓库 -> 远程仓库"的顺序查找并下载缓存。'},{type:"code",title:"添加一个依赖",lang:"xml",code:`<dependencies>
  <!-- Jackson：JSON 处理 -->
  <dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.17.2</version>
  </dependency>

  <!-- JUnit 5：单元测试（只在测试时需要） -->
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>`},{type:"list",title:"依赖下载到哪了",items:["默认在 **~/.m2/repository**（settings.xml 里 localRepository 可改）","同一个 jar 全电脑只存一份，所有项目共享，不会重复下载","jar 在本地仓库的路径 = groupId 转路径 + artifactId + version"]},{type:"warn",content:"jar 包坏了/下载了一半（表现为 .lastUpdated 文件）时，删掉本地仓库里对应的目录重新下载即可，不要直接改仓库里的文件。"}]},{id:"mvn-scope",title:"3.2 依赖范围 scope",sections:[{type:"text",content:'不是所有依赖在所有阶段都需要：JUnit 只要测试时在，Servlet API 只要在编译时在（运行时由 Tomcat 提供）。`<scope>` 就是声明"这个依赖在哪些阶段参与 classpath"。'},{type:"table",title:"五种 scope",headers:["scope","编译","测试","运行","典型例子"],rows:[["compile（默认）","参与","参与","参与","Spring、Jackson"],["provided","参与","参与","不参与（容器提供）","servlet-api、lombok"],["runtime","不参与","参与","参与","JDBC 驱动"],["test","不参与","参与","不参与","JUnit、Mockito"],["system","参与","参与","不参与","本地 jar（几乎不用，已过时）"]]},{type:"code",title:"provided 的经典场景",lang:"xml",code:`<!-- 打 war 包部署到外置 Tomcat 时：
     编译时要它（写代码用到），运行时不要它（Tomcat 自带） -->
<dependency>
  <groupId>jakarta.servlet</groupId>
  <artifactId>jakarta.servlet-api</artifactId>
  <version>6.0.0</version>
  <scope>provided</scope>
</dependency>`},{type:"tip",content:"记不住就先记三个：普通依赖不写 scope（默认 compile）、测试类库写 test、外置容器提供的写 provided。"}]},{id:"mvn-transitive",title:"3.3 传递依赖与冲突调解",sections:[{type:"text",content:"你引入 A，A 又需要 B——B 就被**传递依赖**自动带进来了，省心但也埋雷：两条路径带来不同版本的 B 时就产生**依赖冲突**。Maven 的调解规则只有两条：**路径最短优先**；路径一样长时，**先声明者优先**（pom 里写在前面的 dependency 赢）。"},{type:"code",title:"查看依赖树：排查冲突的头号工具",lang:"bash",code:`# 打印完整的依赖树（含传递依赖）
mvn dependency:tree

# 只关心冲突或被忽略的版本
mvn dependency:tree -Dverbose

# 过滤某个库相关路径
mvn dependency:tree -Dincludes=com.google.guava:guava`},{type:"code",title:"用 exclusions 排除不想要的传递依赖",lang:"xml",code:`<dependency>
  <groupId>com.example</groupId>
  <artifactId>legacy-sdk</artifactId>
  <version>2.0.0</version>
  <exclusions>
    <!-- 不要它带来的旧版日志绑定，我自己引新的 -->
    <exclusion>
      <groupId>ch.qos.logback</groupId>
      <artifactId>logback-classic</artifactId>
    </exclusion>
  </exclusions>
</dependency>`},{type:"tip",content:"日志框架冲突（多个 SLF4J 绑定并存）是 Java 项目最常见的冲突，报错会提示 Multiple bindings。套路固定：dependency:tree 找出多余绑定 -> exclusions 排除。"}]},{id:"mvn-dep-mgmt",title:"3.4 dependencyManagement 与 BOM",sections:[{type:"text",content:'`<dependencyManagement>` 声明"版本标准"但**不真正引入依赖**；真正的引入仍在 `<dependencies>` 里完成、且可以不写 version。它解决的是"多模块/多项目版本统一"的问题，是 Maven 进阶的分水岭概念。'},{type:"code",title:"两段式写法",lang:"xml",code:`<!-- 在 parent 或本 pom 中：只定版本，不引入 -->
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>com.mysql</groupId>
      <artifactId>mysql-connector-j</artifactId>
      <version>8.4.0</version>
    </dependency>
  </dependencies>
</dependencyManagement>

<!-- 子模块里：干净地引入，不写版本 -->
<dependencies>
  <dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
  </dependency>
</dependencies>`},{type:"list",title:"BOM（Bill of Materials）",items:["**是什么**：只含 dependencyManagement 的一类特殊 jar，一次性锁定一族库的版本","**怎么用**：import 进 dependencyManagement，之后这族库全部不用写版本号","**最熟悉的例子**：Spring Boot 的 parent 就是一个巨大的 BOM——你在 dependencies 里从不写 spring-web 的版本，就是它的功劳"]},{type:"tip",content:'对比记忆：dependencies = 引入并给版本；dependencyManagement = 只定版本不引入。一个是"点菜"，一个是"定价表"。'}]}]},{id:"mvn-ch4",title:"第四章 生命周期与插件",lessons:[{id:"mvn-lifecycle",title:"4.1 三套生命周期",sections:[{type:"text",content:'Maven 把构建抽象为三套独立的**生命周期**：clean（清理）、default（核心，从校验到部署）、site（生成站点）。每套生命周期由一串有序的 **phase（阶段）** 组成，执行某个 phase 时，**前面的 phase 会依次执行**——这就是"mvn package 连编译都帮你做了"的原因。'},{type:"table",title:"default 生命周期常用阶段",headers:["phase","作用"],rows:[["validate","校验项目结构正确"],["compile","编译主代码到 target/classes"],["test","运行单元测试"],["package","打成 jar / war"],["verify","运行集成测试等检查"],["install","安装到本地仓库（供本机其他项目引用）"],["deploy","发布到远程仓库（团队共享）"]]},{type:"code",title:"命令即阶段名",lang:"bash",code:`mvn clean          # 清空 target
mvn compile        # 只编译
mvn test           # 编译 + 跑测试
mvn package        # 编译 + 测试 + 打包
mvn install        # 上一条 + 装进本地仓库
mvn clean package  # 先清再打包（最常用组合）

# 跳过测试打包（赶时间时）
mvn package -DskipTests`},{type:"tip",content:'注意：mvn install 和 install 插件是两回事——前者是生命周期阶段，后者是完成"复制 jar 到本地仓库"这个动作的插件。日常敲的命令都是阶段名。'}]},{id:"mvn-plugins",title:"4.2 插件：真正干活的人",sections:[{type:"text",content:'生命周期只是"流程表"，每个阶段的具体工作由**插件**的 **goal（目标）** 完成：compile 阶段绑定了 maven-compiler-plugin 的 compile goal。理解这一点，你就能看懂任何插件配置——无非是"把某个 goal 绑到某个 phase 上，并传参数"。'},{type:"code",title:"常见插件配置示例",lang:"xml",code:`<build>
  <plugins>
    <!-- 编译插件：指定 Java 版本 -->
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.13.0</version>
      <configuration>
        <release>17</release>
      </configuration>
    </plugin>

    <!-- 单测插件：失败不立刻中断，跑完一起报告 -->
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-surefire-plugin</artifactId>
      <configuration>
        <testFailureIgnore>false</testFailureIgnore>
      </configuration>
    </plugin>
  </plugins>
</build>`},{type:"list",title:"值得认识的高频插件",items:["**maven-compiler-plugin**：编译与 JDK 版本","**maven-surefire-plugin**：执行单元测试","**spring-boot-maven-plugin**：打可执行 fat jar、本地 run","**maven-shade-plugin / assembly-plugin**：打含依赖的自定义包","**versions-maven-plugin**：批量检查/升级依赖版本"]},{type:"tip",content:"命令行也能直接调插件 goal：如 mvn dependency:tree、mvn versions:display-dependency-updates。冒号前的就是插件名。"}]},{id:"mvn-commands",title:"4.3 常用命令速查与辨析",sections:[{type:"text",content:"package、install、deploy 长得很像，级别却完全不同：package 产出 jar 在 target 里；install 额外放进**本地**仓库；deploy 是发布到**远程**仓库给整个团队用。清晰地区分它们，是多模块协作的基础。"},{type:"table",title:"高频命令速查",headers:["命令","做什么","产物在哪"],rows:[["mvn clean","删除 target 目录","-"],["mvn compile","编译主代码","target/classes"],["mvn test","编译并执行单元测试","target/surefire-reports"],["mvn package","编译 + 测试 + 打包","target/xxx.jar"],["mvn install","package + 装入本地仓库","~/.m2/repository"],["mvn deploy","install + 发布到远程仓库","Nexus/中央仓库"],["mvn dependency:tree","打印依赖树","-"]]},{type:"list",title:"多模块项目下的规律",items:["在**父工程目录**执行命令，默认对所有子模块依次执行",'改了公共模块后其他模块报"找不到新方法"，通常是忘了先 install 公共模块',"-pl 模块名 可只构建指定模块：mvn install -pl common"]},{type:"warn",content:"-DskipTests 只是不跑测试，测试类仍会编译；-Dmaven.test.skip=true 连编译都跳过。赶时间用前者即可，发布前请完整跑一遍测试。"}]}]},{id:"mvn-ch5",title:"第五章 仓库体系",lessons:[{id:"mvn-repo-types",title:"5.1 本地仓库与远程仓库",sections:[{type:"text",content:"Maven 的仓库分两层：**本地仓库**（你电脑上的缓存目录）和**远程仓库**（网络上的仓库群，包括中央仓库、公司私服等）。查找顺序永远从本地开始——这也是第二次构建快得多的原因。"},{type:"code",title:"依赖查找顺序",lang:"text",code:`项目声明依赖
    │
    ├─ 1. 本地仓库（~/.m2 或自定义 localRepository）命中 -> 直接用
    │
    ├─ 2. 未命中 -> 按配置的镜像/远程仓库下载 -> 缓存到本地 -> 使用
    │
    └─ 都没有 -> 报错 Could not find artifact ...

远程仓库的常见角色：
  central（中央仓库，全球公共库）
  私服 Nexus（公司内部仓库：代理公共库 + 存放内部包）
  其他公共仓库（如 Spring milestones）`},{type:"list",title:"本地仓库的日常维护",items:["**占空间了**：可以整体删除，下次构建会重新下载（记得配置了镜像）","**个别包坏了**：只删该包的目录（或 .lastUpdated 文件）再重新构建","**换电脑**：直接拷贝整个本地仓库目录，秒级迁移依赖缓存"]}]},{id:"mvn-mirror",title:"5.2 镜像与私服",sections:[{type:"text",content:'**镜像**是某个仓库的"替身"：mirrorOf=central 表示"凡是要去中央仓库的请求，都改道访问我"。国内配阿里云镜像能把依赖下载从几分钟降到几秒。**私服**（Nexus/Artifactory）则是公司自建的仓库：对外代理中央仓库，对内存放内部组件。'},{type:"code",title:"settings.xml 里的镜像配置",lang:"xml",code:`<mirrors>
  <!-- 所有 central 请求走阿里云 -->
  <mirror>
    <id>aliyunmaven</id>
    <mirrorOf>central</mirrorOf>
    <url>https://maven.aliyun.com/repository/public</url>
  </mirror>

  <!-- 更彻底：拦截一切仓库请求（公司内网常用）
  <mirror>
    <id>nexus</id>
    <mirrorOf>*</mirrorOf>
    <url>http://nexus.company.com/repository/maven-public/</url>
  </mirror>
  -->
</mirrors>`},{type:"list",title:"mirrorOf 的匹配写法",items:["**central**：只镜像中央仓库","**\\***：镜像所有仓库请求","**external:\\***：镜像所有非本机仓库","**repo1,repo2**：只镜像列出的这几个仓库"]},{type:"tip",content:"settings.xml 放两份：Maven 安装目录下的 conf/settings.xml 是全局的；复制到 ~/.m2/settings.xml 是用户级的，后者优先。升级 Maven 版本时用户级的不会被覆盖。"}]}]},{id:"mvn-ch6",title:"第六章 多模块项目",lessons:[{id:"mvn-aggregate",title:"6.1 聚合与继承",sections:[{type:"text",content:"项目变大后要拆成多个模块（common、dao、service、web...）。Maven 用两个机制组织它们：**聚合（modules）**——父工程一条命令构建所有子模块；**继承（parent）**——子模块共享父 pom 的依赖与配置。两者通常配合使用，但概念上是独立的。"},{type:"code",title:"父 pom：聚合 + 依赖版本管理",lang:"xml",code:`<!-- 根目录 pom.xml -->
<project>
  <groupId>com.fgbgo</groupId>
  <artifactId>shop-parent</artifactId>
  <version>1.0.0</version>
  <packaging>pom</packaging>   <!-- 关键：聚合工程必须是 pom -->

  <!-- 聚合：声明有哪些子模块 -->
  <modules>
    <module>shop-common</module>
    <module>shop-dao</module>
    <module>shop-service</module>
    <module>shop-web</module>
  </modules>

  <!-- 继承：子模块版本都听这里的 -->
  <dependencyManagement> ... </dependencyManagement>
</project>`},{type:"code",title:"子 pom：指向父亲",lang:"xml",code:`<!-- shop-web/pom.xml -->
<project>
  <!-- 继承：版本、依赖管理、插件配置都从父工程来 -->
  <parent>
    <groupId>com.fgbgo</groupId>
    <artifactId>shop-parent</artifactId>
    <version>1.0.0</version>
  </parent>

  <!-- 自己的 artifactId 不写 groupId/version，默认继承父的 -->
  <artifactId>shop-web</artifactId>

  <dependencies>
    <!-- 依赖同项目的 shop-service 模块 -->
    <dependency>
      <groupId>com.fgbgo</groupId>
      <artifactId>shop-service</artifactId>
      <version>\${project.version}</version>
    </dependency>
  </dependencies>
</project>`},{type:"tip",content:'子模块之间也靠"坐标"互相依赖：web 依赖 service，service 依赖 dao，依赖关系顺着模块链自然传递——这正是分层架构在构建层的体现。'}]},{id:"mvn-module-split",title:"6.2 多模块实战与分层",sections:[{type:"text",content:"一个典型后端项目的模块划分，和你在 Spring Boot 课程里学的三层架构是一一对应的：每一层一个模块，依赖只能从上往下（web -> service -> dao -> common），禁止反向依赖和跨层依赖，架构就稳了。"},{type:"code",title:"推荐的项目结构",lang:"text",code:`shop-parent/
├── pom.xml                 # packaging=pom，只管聚合和版本
├── shop-common/            # 工具类、统一返回、异常定义（谁都能依赖它）
├── shop-dao/               # 实体 + Repository，依赖 common
├── shop-service/           # 业务逻辑，依赖 dao
└── shop-web/               # Controller + 启动类 + 配置，依赖 service

依赖链：web -> service -> dao -> common（单向，不可逆）`},{type:"list",title:"多模块的好处",items:["**边界清晰**：想用 dao 里的东西？必须显式声明依赖，防止随手乱引","**构建快**：改了 common 只需重受影响的模块，配合 -pl 增量构建","**复用容易**：common / dao 可以被另一个项目直接当 jar 复用","**职责单一**：web 模块只放接口层，想换成 RPC 暴露只动这一个模块"]},{type:"warn",content:"构建顺序 Maven 会根据依赖关系自动计算，不用手写顺序。但本地联调时，改了下游模块（如 common）要记得先 install，上游才能看到新代码。"}]},{id:"mvn-springboot-parent",title:"6.3 Spring Boot 项目里的 Maven",sections:[{type:"text",content:'现在把视角拉回你的 Spring Boot 项目：它的 pom 本质上就是"继承 + BOM + 插件"三件套的组合应用。看懂这段 pom，Maven 的核心就全部串起来了。'},{type:"code",title:"Spring Boot 项目的标准 pom（注解版）",lang:"xml",code:`<parent>
  <!-- 关键 1：继承 Spring Boot 官方 parent
       它是一个 BOM，锁定了 200+ 依赖的兼容版本
       所以下面引 spring-boot-starter-* 全都不用写版本号 -->
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-parent</artifactId>
  <version>3.3.4</version>
</parent>

<dependencies>
  <!-- 关键 2：starter 起步依赖，一个顶一串 -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>  <!-- 无版本号 -->
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>
</dependencies>

<build>
  <plugins>
    <!-- 关键 3：打包插件，产出可执行 fat jar -->
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>`},{type:"list",title:"starter 的本质",items:["一个 starter = 一组精心挑选、版本互相兼容的依赖集合","spring-boot-starter-web = spring-web + spring-mvc + jackson + tomcat + 日志……","没有 starter 的年代，搭个 Web 项目要引十几个包还要对版本——现在一行搞定"]},{type:"tip",content:"想看 parent 到底帮你锁了哪些版本？在项目里执行 mvn dependency:tree 或打开 IDEA 的 Maven 面板，所有版本号一目了然。"}]}]},{id:"mvn-ch7",title:"第七章 实战技巧",lessons:[{id:"mvn-profiles",title:"7.1 profiles 多环境配置",sections:[{type:"text",content:"开发、测试、生产三套环境，数据库地址各不相同，怎么打包时自动切换？`<profiles>` 给项目提供了多套可切换的配置。Spring Boot 项目更常用的做法是 yml 多环境（application-dev.yml），两者思路相通：**把差异声明出来，按需激活**。"},{type:"code",title:"Maven profiles 示例",lang:"xml",code:`<profiles>
  <profile>
    <id>dev</id>
    <activation>
      <activeByDefault>true</activeByDefault>  <!-- 默认激活 -->
    </activation>
    <properties>
      <db.url>jdbc:postgresql://localhost:5432/dev</db.url>
    </properties>
  </profile>

  <profile>
    <id>prod</id>
    <properties>
      <db.url>jdbc:postgresql://10.0.0.8:5432/prod</db.url>
    </properties>
  </profile>
</profiles>

<!-- 打包时切换：mvn package -Pprod -->`},{type:"tip",content:'Spring Boot 项目建议以 yml 多环境为主（spring.profiles.active），Maven profiles 只用来切"构建期差异"（如跳过某些资源的打包），分工更清晰。'}]},{id:"mvn-filtering",title:"7.2 资源过滤与占位符",sections:[{type:"text",content:"开启**资源过滤（filtering）**后，Maven 打包时会把 resources 里的 `${...}` 占位符替换成真实值——比如把配置文件里的 `@project.version@` 替换成实际版本号，接口里就能展示当前版本了。"},{type:"code",title:"开启过滤并在配置中占位",lang:"xml",code:`<build>
  <resources>
    <resource>
      <directory>src/main/resources</directory>
      <filtering>true</filtering>   <!-- 开启替换 -->
    </resource>
  </resources>
</build>`},{type:"code",title:"application.yml 里使用占位符",lang:"yaml",code:`# 打包后 @project.version@ 会被替换成 pom 里的版本
app:
  name: IT 学习中心
  version: @project.version@`},{type:"warn",content:"filtering 对二进制文件（图片、字体）会做文本替换导致文件损坏。开启过滤时记得把二进制类型用 <nonFilteredFileExtensions> 排除，或把二进制文件放到不过滤的目录。"}]},{id:"mvn-idea",title:"7.3 IDEA 中的 Maven 实操",sections:[{type:"text",content:"日常开发 90% 的 Maven 操作都在 IDEA 里完成：右侧 Maven 面板可视化执行生命周期、查看依赖树，改完 pom 记得点刷新（Reload All Maven Projects）。"},{type:"list",title:"高频操作清单",items:["**Maven 面板**：双击 clean / package 等阶段即可执行，不用敲命令","**刷新图标**：pom 变更后点「Reload All Maven Projects」，否则依赖不生效","**依赖分析**：右键模块 -> Maven -> Show Dependencies，可视化看冲突（红线标冲突）","**跳过测试**：面板上的「Toggle Skip Tests」图标，打包临时不用测试","**统一设置**：Settings -> Build Tools -> Maven，把 Maven home 和 settings.xml 指向你的安装"]},{type:"warn",content:'IDEA 报"程序包 xxx 不存在"但命令行能构建通过时，九成是 pom 改了没刷新。先点 Reload，再考虑 File -> Invalidate Caches。'}]},{id:"mvn-troubleshoot",title:"7.4 常见报错排查手册",sections:[{type:"text",content:"Maven 报错虽然吓人，但模式非常固定。把最高频的几类集中在这里，遇到时对号入座。"},{type:"table",title:"高频报错与解法",headers:["报错关键信息","原因","解法"],rows:[["Could not resolve dependencies / 下载超时","没配镜像或网络问题","配阿里云镜像；删 .lastUpdated 后重试"],["程序包 xxx 不存在","依赖没引入 / 没刷新 / install 缺失","检查 pom；IDEA 点 Reload；先 install 被依赖模块"],["编码 GBK 的不可映射字符","未设置 UTF-8","properties 里设 project.build.sourceEncoding=UTF-8"],["invalid target release: 17","编译版本高于当前 JDK","升级 JDK 或把 release 改低"],["NoSuchMethodError / NoClassDefFoundError","运行时依赖版本冲突","mvn dependency:tree -Dverbose 定位，exclusions 排除"],["Multiple SLF4J bindings","多个日志绑定共存","依赖树找出多余绑定并排除"]]},{type:"code",title:"排查三板斧",lang:"bash",code:`# 1. 看依赖到底从哪来（verbose 会标注 omitted for conflict）
mvn dependency:tree -Dverbose

# 2. 强制重新下载依赖
mvn clean install -U

# 3. 输出详细日志定位卡点
mvn clean package -X | more`},{type:"tip",content:'-U（--update-snapshots）强制刷新 SNAPSHOT 与失败的下载，是处理"改了依赖却不生效"的万能第一招。'}]}]},{id:"mvn-ch8",title:"第八章 综合实战",lessons:[{id:"mvn-real-pom",title:"8.1 实战：完整的项目 pom",sections:[{type:"text",content:"把所学组合起来，看一个贴近真实后端项目的 pom.xml（Web + 数据库 + 测试 + 打包配置齐全）。对照注释逐段理解，以后自己写 pom 就有底稿了。"},{type:"code",title:"完整示例（可直接当模板）",lang:"xml",code:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.3.4</version>
  </parent>

  <groupId>com.fgbgo</groupId>
  <artifactId>library-api</artifactId>
  <version>1.0.0</version>

  <properties>
    <java.version>17</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
    <!-- Web 层 -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <!-- 数据层 -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
      <scope>runtime</scope>   <!-- 运行期才需要驱动 -->
    </dependency>
    <!-- 测试 -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>library-api</finalName>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
</project>`},{type:"list",title:"这段 pom 里你学过的知识点",items:["**parent 继承**：版本号全由 Spring Boot BOM 托管","**scope 实战**：postgresql 用 runtime、test 用 test","**build 配置**：finalName 改产物名，插件打可执行 jar","**properties**：JDK 版本与编码统一声明"]}]},{id:"mvn-wrapper",title:"8.2 Maven Wrapper 与命令行构建",sections:[{type:"text",content:'新人 clone 项目报"Maven 版本不对"？**Maven Wrapper（mvnw）** 解决它：项目里自带一个小脚本 + 指定版本的 Maven 分发包，任何人 clone 后无需预装 Maven，直接 `./mvnw` 即可用**统一版本**构建。CI/CD 环境也靠它保证版本一致。'},{type:"code",title:"Wrapper 的使用",lang:"bash",code:`# 项目初始化 Wrapper（只需做一次，会生成 mvnw / mvnw.cmd / .mvn/）
mvn wrapper:wrapper -Dmaven=3.9.9

# 之后所有协作者（含 CI）都用它构建，Windows 用 mvnw.cmd
./mvnw clean package        # macOS / Linux
mvnw.cmd clean package      # Windows

# 这几个文件要提交进 Git：
#   mvnw  mvnw.cmd  .mvn/wrapper/maven-wrapper.properties`},{type:"list",title:"一套命令行构建流程（CI 常用）",items:["**./mvnw clean verify**：清理 + 全量编译 + 测试 + 打包 + 检查","**java -jar target/xxx.jar**：验证可执行包能正常启动","**docker build .**：把 jar 打进镜像（Spring Boot 课程里做过）","三个命令连起来，就是最简单的持续交付流水线"]},{type:"tip",content:"至此你已经打通了 Java 后端的全链路：Java 语法 -> Spring Boot 开发 -> PostgreSQL 存数据 -> Maven 管构建。下一步可以了解 Git 分支管理课程，把代码协作也标准化。"}]}]}]},$i=[np,ip,op,cp,pp,sp,rp,ap,lp,up,dp],Qi=new Map;$i.forEach(e=>{e.chapters.forEach(t=>{t.lessons.forEach(n=>{Qi.set(n.id,{lesson:n,chapter:t,category:e})})})});function gp(e){return Qi.get(e)||null}function fp(e){var o;const t=(o=Qi.get(e))==null?void 0:o.category;if(!t)return{prev:null,next:null};const n=t.chapters.flatMap(s=>s.lessons),i=n.findIndex(s=>s.id===e);return{prev:i>0?n[i-1]:null,next:i>=0&&i<n.length-1?n[i+1]:null}}const ti=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},mp={class:"grid"},yp={class:"page-desc"},hp={class:"cat-count"},vp={class:"card quiz-entry"},bp={__name:"Home",setup(e){const t=pe(()=>$i.map(n=>({...n,lessonCount:n.chapters.reduce((i,o)=>i+o.lessons.length,0)})));return(n,i)=>{const o=dn("RouterLink");return q(),W("div",null,[i[2]||(i[2]=el('<section class="card hero" data-v-b5e73a71><h1 class="page-title" data-v-b5e73a71>欢迎来到 IT 学习中心</h1><p class="page-desc" data-v-b5e73a71> 这里是一套为个人学习整理的编程教程，涵盖前端三件套 <strong data-v-b5e73a71>HTML</strong>、<strong data-v-b5e73a71>CSS</strong>、<strong data-v-b5e73a71>JavaScript</strong>， 前端框架 <strong data-v-b5e73a71>Vue</strong> 与<strong data-v-b5e73a71>小程序开发（uni-app）</strong>，后端语言 <strong data-v-b5e73a71>Java</strong>、 <strong data-v-b5e73a71>Spring Boot</strong>、<strong data-v-b5e73a71>Python</strong>， 数据库 <strong data-v-b5e73a71>PostgreSQL</strong>， 以及开发工具 <strong data-v-b5e73a71>Git</strong>、<strong data-v-b5e73a71>Maven</strong>。 每个知识点都配有讲解、要点总结和可复制的代码示例， 学完后可以通过「综合测试」检验学习成果。 </p><p class="page-desc" data-v-b5e73a71> 建议路线：先学 <strong data-v-b5e73a71>HTML</strong> + <strong data-v-b5e73a71>CSS</strong> + <strong data-v-b5e73a71>JavaScript</strong> 打好基础， 再学 <strong data-v-b5e73a71>Vue</strong> 进入现代前端开发，之后可用 <strong data-v-b5e73a71>uni-app</strong> 一套代码做出微信小程序； 后端走 <strong data-v-b5e73a71>Java</strong> + <strong data-v-b5e73a71>Spring Boot</strong> 或 <strong data-v-b5e73a71>Python</strong>， 配合 <strong data-v-b5e73a71>PostgreSQL</strong> 掌握数据存储与查询； 全程用 <strong data-v-b5e73a71>Git</strong> 管理代码版本，用 <strong data-v-b5e73a71>Maven</strong> 管理依赖与构建。 </p></section>',1)),E("section",mp,[(q(!0),W(ce,null,Ne(t.value,s=>(q(),Wi(o,{key:s.id,to:`/category/${s.id}`,class:"card cat-card"},{default:fe(()=>[E("div",{class:"cat-badge",style:vn({background:s.color})},V(s.short),5),E("h2",null,V(s.name),1),E("p",yp,V(s.description),1),E("span",hp,"共 "+V(s.lessonCount)+" 个知识点",1)]),_:2},1032,["to"]))),128))]),E("section",vp,[i[1]||(i[1]=E("div",null,[E("h2",null,"综合测试"),E("p",{class:"page-desc"}," 选择题为主、主观题为辅，覆盖全部十一个技能分类的知识点， 用来检验阶段学习成果。 ")],-1)),$(o,{to:"/quiz",class:"btn btn-primary"},{default:fe(()=>[...i[0]||(i[0]=[re("开始测试",-1)])]),_:1})])])}}},xp=ti(bp,[["__scopeId","data-v-b5e73a71"]]),Sp={key:0},Ep={class:"cat-head"},wp={class:"page-title"},Tp={class:"page-desc"},Rp={class:"chapter-title"},Ap={class:"lesson-list"},Lp={class:"cat-footer"},Cp={__name:"Category",setup(e){const t=ei(),n=br(),i=pe(()=>{const s=$i.find(r=>r.id===t.params.id);return s||n.replace("/"),s}),o=pe(()=>i.value?i.value.chapters.reduce((s,r)=>s+r.lessons.length,0):0);return(s,r)=>{const a=dn("RouterLink");return i.value?(q(),W("div",Sp,[E("div",Ep,[E("div",{class:"cat-badge",style:vn({background:i.value.color})},V(i.value.short),5),E("div",null,[E("h1",wp,V(i.value.name),1),E("p",Tp,V(i.value.description)+" · 共 "+V(o.value)+" 个知识点",1)])]),(q(!0),W(ce,null,Ne(i.value.chapters,l=>(q(),W("section",{key:l.id,class:"card chapter"},[E("h2",Rp,V(l.title),1),E("ul",Ap,[(q(!0),W(ce,null,Ne(l.lessons,c=>(q(),W("li",{key:c.id},[$(a,{to:`/lesson/${c.id}`,class:"lesson-link"},{default:fe(()=>[re(V(c.title)+" ",1),r[0]||(r[0]=E("span",{class:"arrow"},">",-1))]),_:2},1032,["to"])]))),128))])]))),128)),E("div",Lp,[$(a,{to:`/quiz?range=${i.value.id}`,class:"btn btn-primary"},{default:fe(()=>[re(" 测试 "+V(i.value.name)+" 掌握情况 ",1)]),_:1},8,["to"])])])):Mt("",!0)}}},_p=ti(Cp,[["__scopeId","data-v-3b74d57c"]]),Ip={class:"code-block"},Mp={class:"code-block__bar"},kp={class:"code-block__pre"},Op={__name:"CodeBlock",props:{code:{type:String,default:""},lang:{type:String,default:""},title:{type:String,default:""}},setup(e){const t=e,n=rt(!1);async function i(){try{await navigator.clipboard.writeText(t.code),n.value=!0,setTimeout(()=>n.value=!1,1500)}catch{}}return(o,s)=>(q(),W("div",Ip,[E("div",Mp,[E("span",null,V(e.title||e.lang||"代码"),1),E("button",{class:"code-block__copy",onClick:i},V(n.value?"已复制":"复制"),1)]),E("pre",kp,[E("code",null,V(e.code),1)])]))}};function jp(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function vt(e=""){let t=jp(e);return t=t.replace(/`([^`]+)`/g,'<code class="inline-code">$1</code>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t}const Np={class:"sections"},Pp=["innerHTML"],Dp={key:1,class:"sec-list"},Bp=["innerHTML"],Hp=["innerHTML"],Up={key:3,class:"sec-tip"},qp=["innerHTML"],Fp={key:4,class:"sec-warn"},Jp=["innerHTML"],Vp={key:5},Gp=["innerHTML"],Wp={class:"sec-table"},Kp=["innerHTML"],Yp=["innerHTML"],$p={__name:"SectionRenderer",props:{sections:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(q(),W("div",Np,[(q(!0),W(ce,null,Ne(e.sections,(i,o)=>(q(),W(ce,{key:o},[i.type==="text"?(q(),W("p",{key:0,class:"sec-text",innerHTML:_e(vt)(i.content)},null,8,Pp)):i.type==="list"?(q(),W("div",Dp,[i.title?(q(),W("p",{key:0,class:"sec-list-title",innerHTML:_e(vt)(i.title)},null,8,Bp)):Mt("",!0),E("ul",null,[(q(!0),W(ce,null,Ne(i.items,(s,r)=>(q(),W("li",{key:r,innerHTML:_e(vt)(s)},null,8,Hp))),128))])])):i.type==="code"?(q(),Wi(Op,{key:2,code:i.code,lang:i.lang,title:i.title},null,8,["code","lang","title"])):i.type==="tip"?(q(),W("div",Up,[n[0]||(n[0]=E("span",{class:"sec-tag"},"提示",-1)),E("span",{innerHTML:_e(vt)(i.content)},null,8,qp)])):i.type==="warn"?(q(),W("div",Fp,[n[1]||(n[1]=E("span",{class:"sec-tag"},"注意",-1)),E("span",{innerHTML:_e(vt)(i.content)},null,8,Jp)])):i.type==="table"?(q(),W("div",Vp,[i.title?(q(),W("p",{key:0,class:"sec-list-title",innerHTML:_e(vt)(i.title)},null,8,Gp)):Mt("",!0),E("table",Wp,[E("thead",null,[E("tr",null,[(q(!0),W(ce,null,Ne(i.headers,(s,r)=>(q(),W("th",{key:r,innerHTML:_e(vt)(s)},null,8,Kp))),128))])]),E("tbody",null,[(q(!0),W(ce,null,Ne(i.rows,(s,r)=>(q(),W("tr",{key:r},[(q(!0),W(ce,null,Ne(s,(a,l)=>(q(),W("td",{key:l,innerHTML:_e(vt)(a)},null,8,Yp))),128))]))),128))])])])):Mt("",!0)],64))),128))]))}},Qp={key:0},zp={class:"crumbs"},Xp={class:"cur"},Zp={class:"page-title lesson-title"},eu={class:"card lesson-body"},tu={class:"lesson-nav"},nu=["disabled"],iu=["disabled"],ou={__name:"Lesson",setup(e){const t=ei(),n=br(),i=pe(()=>{const r=gp(t.params.id);return r||n.replace("/"),r}),o=pe(()=>i.value?fp(i.value.lesson.id):{prev:null,next:null});on(()=>t.params.id,()=>{i.value&&(document.title=`${i.value.lesson.title} - IT 学习中心`)},{immediate:!0});function s(r){r&&n.push(`/lesson/${r}`)}return(r,a)=>{const l=dn("RouterLink");return i.value?(q(),W("div",Qp,[E("div",zp,[$(l,{to:`/category/${i.value.category.id}`},{default:fe(()=>[re(V(i.value.category.name),1)]),_:1},8,["to"]),a[2]||(a[2]=E("span",{class:"sep"},"/",-1)),E("span",null,V(i.value.chapter.title),1),a[3]||(a[3]=E("span",{class:"sep"},"/",-1)),E("span",Xp,V(i.value.lesson.title),1)]),E("h1",Zp,V(i.value.lesson.title),1),E("article",eu,[$($p,{sections:i.value.lesson.sections},null,8,["sections"])]),E("div",tu,[E("button",{class:"btn",disabled:!o.value.prev,onClick:a[0]||(a[0]=c=>s(o.value.prev&&o.value.prev.id))}," < 上一课"+V(o.value.prev?`：${o.value.prev.title}`:""),9,nu),E("button",{class:"btn btn-primary",disabled:!o.value.next,onClick:a[1]||(a[1]=c=>s(o.value.next&&o.value.next.id))},V(o.value.next?`下一课：${o.value.next.title}`:"已是最后一课")+" > ",9,iu)])])):Mt("",!0)}}},su=ti(ou,[["__scopeId","data-v-ad821c5e"]]),$o=[{type:"choice",category:"html",question:"HTML 的中文全称是？",options:["超文本标记语言","层叠样式表","脚本编程语言","可扩展标记语言"],answer:0,explanation:"HTML（HyperText Markup Language）即超文本标记语言，负责网页的结构。"},{type:"choice",category:"html",question:"防止网页中文乱码，需要设置哪个 meta 标签？",options:['<meta name="viewport">','<meta charset="UTF-8">','<meta http-equiv="refresh">','<meta name="keywords">'],answer:1,explanation:'`<meta charset="UTF-8">` 声明字符编码，是每个网页的标配。'},{type:"choice",category:"html",question:"关于标题标签，下列说法正确的是？",options:["h1 到 h6 字号逐渐变大","一个页面建议只使用一个 h1","h7 是最小的标题","标题标签只能放英文字母"],answer:1,explanation:"h1 代表页面主标题，语义最重要，一般一个页面只用一次。"},{type:"choice",category:"html",question:"想在段落中强制换行，应该使用哪个标签？",options:["<p>","<br>","<hr>","<span>"],answer:1,explanation:"`<br>` 是单标签，用于强制换行；`<hr>` 是水平分隔线。"},{type:"choice",category:"html",question:'想要加粗文字并表达"内容重要"的语义，推荐使用？',options:["<b>","<strong>","<bold>","<big>"],answer:1,explanation:'`<strong>` 带有"重要"语义，比纯视觉加粗的 `<b>` 更推荐。'},{type:"choice",category:"html",question:"在 HTML 中显示小于号 <，正确的写法是？",options:["&lt;","&gt;","&nbsp;","&amp;"],answer:0,explanation:"`&lt;` 是小于号实体，`&gt;` 是大于号实体。"},{type:"choice",category:"html",question:"关于 ul 无序列表，下列说法错误的是？",options:["ul 是列表容器，li 是列表项","ul 的直接子元素只能是 li","导航栏常用 ul + li 搭建","ul 里面必须直接嵌套 a 标签"],answer:3,explanation:"a 标签应写在 li 里面，ul 的直接子元素只能是 li。"},{type:"choice",category:"html",question:"链接在新标签页中打开，应设置哪个属性？",options:['href="_blank"','target="_blank"','rel="_blank"','open="new"'],answer:1,explanation:'`target="_blank"` 表示在新窗口/标签页打开。'},{type:"choice",category:"html",question:"img 标签的 alt 属性作用是？",options:["设置图片的加载动画","图片的替换文本：加载失败时显示，也是无障碍必需品","控制图片的模糊程度","设置图片的链接地址"],answer:1,explanation:"alt 是图片描述，加载失败时显示，也供屏幕阅读器朗读。"},{type:"choice",category:"html",question:"图片路径写成 `../images/cat.jpg`，其中 `../` 的含义是？",options:["当前目录","下一级目录","上一级目录","根目录"],answer:2,explanation:"`../` 表示上一级目录，`../../` 是上两级。"},{type:"choice",category:"html",question:'合并单元格时，"跨列合并"使用的属性是？',options:["rowspan","colspan","span","merge"],answer:1,explanation:"`colspan` 跨列，`rowspan` 跨行；被占的位置不要再写单元格。"},{type:"choice",category:"html",question:"表单中的控件如果不写 name 属性，提交时会发生什么？",options:["数据正常提交","该控件的数据不会被提交","表单会报错","浏览器会自动补上 name"],answer:1,explanation:"name 是提交数据的键名，没有 name 的控件数据不会随表单提交。"},{type:"choice",category:"html",question:'多个单选框要实现"只能选一个"，必须保证？',options:["它们的 id 相同","它们的 value 相同","它们的 name 相同","它们的 class 相同"],answer:2,explanation:"radio 同组必须同 name，才能互斥单选；id 反而必须唯一。"},{type:"choice",category:"html",question:"表单中按钮 button 不写 type 属性时，默认是？",options:["button","reset","submit","submit-button"],answer:2,explanation:'默认是 submit，容易导致意外提交表单，普通按钮要写 type="button"。'},{type:"choice",category:"html",question:'下列哪个标签表示"页面主要内容"，且一个页面只能有一个？',options:["<section>","<main>","<article>","<aside>"],answer:1,explanation:"`<main>` 是页面核心内容区域，每页只能出现一次。"},{type:"choice",category:"html",question:"点击链接跳转到页面内指定位置（锚点），链接的 href 应该写成？",options:["链接到元素所在行号","# 加上目标元素的 id","target 加上元素名","scroll 加上数字"],answer:1,explanation:'锚点写法：`<a href="#目标id">`，目标元素需要设置对应的 id。'},{type:"choice",category:"css",question:"CSS 的中文全称是？",options:["超文本标记语言","层叠样式表","文档对象模型","异步脚本语言"],answer:1,explanation:"CSS（Cascading Style Sheets）即层叠样式表，负责网页外观。"},{type:"choice",category:"css",question:"实际开发中最推荐的 CSS 引入方式是？",options:["行内样式","内部样式","外部样式表","js 动态写入"],answer:2,explanation:"外部样式表（link 引入）结构与样式分离、可复用、易维护。"},{type:"choice",category:"css",question:"类选择器的语法是？",options:["#name",".name","name","*name"],answer:1,explanation:"类选择器用点号（.name），id 选择器用井号（#name）。"},{type:"choice",category:"css",question:"选择器 `.nav a` 和 `.nav > a` 的区别是？",options:["完全一样","前者选中 .nav 的所有后代 a，后者只选中直接子级 a","前者只选中直接子级 a，后者选中所有后代 a","前者是错误写法"],answer:1,explanation:"空格是后代选择器（不管嵌套多深），> 是子代选择器（只取直接子级）。"},{type:"choice",category:"css",question:"鼠标悬停在按钮上时改变背景色，应使用哪个伪类？",options:[":hover",":focus",":active",":visited"],answer:0,explanation:":hover 是悬停状态；:focus 是焦点；:active 是按下的瞬间。"},{type:"choice",category:"css",question:"表格斑马纹（偶数行变灰）常用哪个结构伪类？",options:[":first-child",":nth-child(even)",":last-child",":only-child"],answer:1,explanation:"`nth-child(even)` 选中偶数个子元素，odd 是奇数。"},{type:"choice",category:"css",question:"以下选择器优先级最高的是？",options:["p",".text","#intro","p.active"],answer:2,explanation:"id（100）> 类（10）> 标签（1），#intro 权重最高。"},{type:"choice",category:"css",question:"十六进制颜色 `#f00` 表示什么颜色？",options:["绿色","蓝色","红色","黑色"],answer:2,explanation:"#f00 是 #ff0000 的缩写，红色通道拉满，即红色。"},{type:"choice",category:"css",question:"rem 这个单位相对于谁？",options:["父元素的字号","根元素 html 的字号","视口宽度","元素自身字号"],answer:1,explanation:"rem 相对根元素 html 的字号（默认 16px）；em 才相对父元素。"},{type:"choice",category:"css",question:"块级元素在父容器中水平居中（有固定宽度），经典写法是？",options:["text-align: center","margin: 0 auto","padding: 0 auto","vertical-align: middle"],answer:1,explanation:"左右 margin 设为 auto 会自动平分剩余空间，实现水平居中。"},{type:"choice",category:"css",question:'盒模型中，"内容与边框之间"的距离用哪个属性控制？',options:["margin","padding","border","gap"],answer:1,explanation:"padding 是内边距（内容到边框），margin 是外边距（盒子到盒子）。"},{type:"choice",category:"css",question:"全局设置 `box-sizing: border-box` 后，元素的 width 包含？",options:["只包含内容","内容 + 内边距 + 边框","内容 + 外边距","内容 + 四个方向的 margin 和 padding"],answer:1,explanation:"border-box 模式下 width = 内容 + padding + border，所见即所得。"},{type:"choice",category:"css",question:"使用 position: absolute 定位时，元素相对于谁定位？",options:["永远相对于浏览器窗口","最近的非 static 定位的祖先元素","它的父元素，无论父元素什么定位","文档根节点"],answer:1,explanation:"absolute 相对最近的非 static 祖先；没有就逐级往外，最后相对页面。"},{type:"choice",category:"css",question:"关于三种隐藏元素的方式，下列说法正确的是？",options:["display: none 的元素仍占据空间","visibility: hidden 的元素不占空间","opacity: 0 的元素仍占据空间且可交互","三种方式效果完全一样"],answer:2,explanation:"display:none 不占空间；visibility:hidden 占空间但不可交互；opacity:0 占空间且可点击。"},{type:"choice",category:"css",question:"Flex 布局中，主轴（默认水平方向）的居中对齐用哪个属性？",options:["align-items: center","justify-content: center","text-align: center","align-content: center"],answer:1,explanation:"justify-content 管主轴，align-items 管交叉轴（默认垂直）。"},{type:"choice",category:"css",question:"Flex 项目设置 `flex: 1` 的效果是？",options:["固定不变","自动分配剩余空间（等分放大）","隐藏该项目","把项目移到最前面"],answer:1,explanation:"`flex: 1` = 放大 1、缩小 1、基准 0%，即均分剩余空间。"},{type:"choice",category:"css",question:'想让元素"水平垂直双向居中"，最简洁的现代方案是？',options:["父级 display:flex + justify-content:center + align-items:center","子级 margin: auto 一个就够了（任何场景）","text-align: center + line-height","float + clear"],answer:0,explanation:"Flex 居中大法：justify-content 管水平，align-items 管垂直。"},{type:"choice",category:"css",question:"悬停时有平滑的颜色渐变效果（而不是瞬间变化），应使用？",options:["animation","transition","transform","filter"],answer:1,explanation:"transition 负责两个状态之间的平滑过渡；animation 负责多关键帧动画。"},{type:"choice",category:"css",question:"媒体查询 `@media (min-width: 768px)` 的含义是？",options:["只在 768px 宽时生效","视口宽度大于等于 768px 时生效","视口高度大于 768px 时生效","768px 以下生效"],answer:1,explanation:'min-width 表示"最小宽度"，即 >= 768px 时应用其中的样式。'},{type:"choice",category:"js",question:'现代 JavaScript 中声明"不可重新赋值"的常量，应使用？',options:["var","let","const","final"],answer:2,explanation:"const 声明常量，赋值后不能重新赋值；let 声明可变变量。"},{type:"choice",category:"js",question:"`typeof null` 的返回值是？",options:['"null"','"undefined"','"object"','"boolean"'],answer:2,explanation:'这是 JS 著名的历史 bug，返回 "object"；判断 null 请用 === null。'},{type:"choice",category:"js",question:'表达式 `"1" + 1` 的结果是？',options:["2",'"11"',"NaN","报错"],answer:1,explanation:'任何值与字符串相加都会变成字符串拼接，结果为 "11"。'},{type:"choice",category:"js",question:'下列哪个是 JS 中的"假值"？',options:['"0"（非空字符串）',"[]（空数组）","0（数字零）","{}（空对象）"],answer:2,explanation:'六个假值：false、0、""、null、undefined、NaN；注意 "0"、[]、{} 都是真值。'},{type:"choice",category:"js",question:"比较两个值是否相等，推荐的运算符是？",options:["==","===","=","=>"],answer:1,explanation:"=== 严格相等，类型和值都要一样；== 会隐式转换类型，容易出错。"},{type:"choice",category:"js",question:"`10 % 3` 的结果是？",options:["3","3.33","1","0"],answer:2,explanation:"% 是取余运算符，10 除以 3 余 1；常用于判断奇偶。"},{type:"choice",category:"js",question:"switch 语句中漏写 break 会导致？",options:["语法错误","穿透到下一个 case 继续执行","自动结束整个 switch","跳过 default"],answer:1,explanation:'不写 break 会继续执行下一个 case 的代码，这叫"穿透"。'},{type:"choice",category:"js",question:'循环中"提前结束整个循环"使用的关键字是？',options:["continue","break","return","exit"],answer:1,explanation:"break 结束整个循环；continue 只是跳过本轮、进入下一轮。"},{type:"choice",category:"js",question:'数组 `["a","b","c"]` 的下标范围是？',options:["1 到 3","0 到 3","0 到 2","1 到 2"],answer:2,explanation:"数组下标从 0 开始，长度为 3 的数组下标是 0、1、2。"},{type:"choice",category:"js",question:"想在数组尾部追加一个元素，使用哪个方法？",options:["push","pop","shift","unshift"],answer:0,explanation:"push 尾部加，pop 尾部删，unshift 头部加，shift 头部删。"},{type:"choice",category:"js",question:"对数字数组 `[10, 1, 5]` 直接调用 sort() 不传参数，结果是？",options:["[1, 5, 10] 正确排序","[1, 10, 5] 按字符串排序","[10, 5, 1]","报错"],answer:1,explanation:"sort 默认把元素转成字符串比较；数字排序要传比较函数 (a, b) => a - b。"},{type:"choice",category:"js",question:"`map` 方法的作用是？",options:["筛选出符合条件的元素","对每个元素加工后返回新数组","把数组汇总成一个值","原地反转数组"],answer:1,explanation:"map 逐个加工并返回新数组；filter 筛选；reduce 汇总。三者都不改原数组。"},{type:"choice",category:"js",question:"对象方法中使用 `this`，它通常指向？",options:["全局对象 window","调用该方法的那个对象","undefined","永远指向函数自身"],answer:1,explanation:'普通方法中的 this 指向"谁调用就指向谁"，即调用方法的那个对象。'},{type:"choice",category:"js",question:'从对象 `{ name: "小明", age: 18 }` 中用解构取出 name，正确的写法是？',options:["let [name] = user;","let { name } = user;","let name = user->name;","let name := user.name;"],answer:1,explanation:"对象解构用大括号：`let { name } = user;`，数组解构才是方括号。"},{type:"choice",category:"js",question:'在 DOM 操作中，用 CSS 选择器"选中第一个匹配的元素"的方法是？',options:["document.getElementById()","document.querySelector()","document.querySelectorAll()","document.getElementsByTagName()"],answer:1,explanation:"querySelector 返回第一个匹配元素；querySelectorAll 返回所有匹配。"},{type:"choice",category:"js",question:"监听元素点击事件的标准方法是？",options:["onclick 属性（唯一方式）",'addEventListener("click", fn)','listen("click")',"bindClick(fn)"],answer:1,explanation:"addEventListener 是标准写法，可绑定多个监听器，也更灵活。"},{type:"choice",category:"js",question:'在事件处理函数中，"真正被点击的那个子元素"是？',options:["e.currentTarget","e.target","this（总是）","e.srcElement 只有它对"],answer:1,explanation:"e.target 是实际触发事件的目标元素；e.currentTarget 是绑定监听的元素。"},{type:"choice",category:"js",question:"阻止表单提交时页面刷新，应调用？",options:["e.stopPropagation()","e.preventDefault()","return false 之外没别的办法","window.stop()"],answer:1,explanation:"preventDefault 阻止默认行为；stopPropagation 阻止事件冒泡，两者作用不同。"},{type:"choice",category:"js",question:"`setInterval` 与 `setTimeout` 的核心区别是？",options:["setTimeout 重复执行，setInterval 执行一次","setInterval 重复执行，setTimeout 只执行一次","两者完全一样","setTimeout 只能用于动画"],answer:1,explanation:'setInterval 是"闹钟反复响"，setTimeout 是"响一次"；都要记得用对应的 clear 清除。'},{type:"choice",category:"js",question:"把对象存入 localStorage 前，必须先做哪一步？",options:["用 JSON.stringify 转成字符串","用 toString() 转换","压缩对象","不需要任何处理，直接存"],answer:0,explanation:"localStorage 只能存字符串，对象要用 JSON.stringify 序列化，取出时 JSON.parse。"},{type:"choice",category:"js",question:"async 函数内部，等待一个 Promise 出结果的关键字是？",options:["yield","await","async","defer"],answer:1,explanation:'await 会"暂停"等待 Promise 完成，让异步代码读起来像同步代码。'},{type:"choice",category:"java",question:"关于 JDK、JRE、JVM 三者关系，正确的是？",options:["JVM 包含 JDK","JDK 包含 JRE，JRE 包含 JVM","三者互不相关","JRE 包含 JDK"],answer:1,explanation:"JDK（开发工具包）= JRE + 编译器等工具；JRE（运行环境）= JVM + 核心类库。写代码必须装 JDK。"},{type:"choice",category:"java",question:"Java 程序的入口 main 方法的正确写法是？",options:["public void main(String args)","static void Main()","public static void main(String[] args)","void main(String[] args)"],answer:2,explanation:"固定格式：public static void main(String[] args)，一个字母都不能错，JVM 从这里开始执行。"},{type:"choice",category:"java",question:"System.out.println(10 / 3) 的输出结果是？",options:["3.33","3","3.0","4"],answer:1,explanation:"两个整数相除只保留整数部分，结果是 3；想得到小数至少一方要是浮点数。"},{type:"choice",category:"java",question:"声明一个 long 类型的变量并直接赋大数值，末尾需要加什么？",options:["加 L","加 l 或不加都行","加 D","不需要任何后缀"],answer:0,explanation:"long 字面量结尾要加 L（推荐大写，小写 l 容易和 1 混淆）；float 则加 F。"},{type:"choice",category:"java",question:"比较两个字符串的内容是否相等，正确的写法是？",options:["s1 == s2","s1.equals(s2)","s1 = s2","compare(s1, s2)"],answer:1,explanation:"== 比较的是引用地址，equals() 才比较内容。这是 Java 最经典的易错点。"},{type:"choice",category:"java",question:"关于方法重载（Overload），下列说法正确的是？",options:["重载要求方法名和参数列表完全相同","改变返回值类型就能构成重载","重载要求方法名相同、参数列表不同，与返回值无关","重载必须发生在父子类之间"],answer:2,explanation:"重载看参数（个数或类型不同），不看返回值；发生在同一个类里。重写（Override）才发生在父子类之间。"},{type:"choice",category:"java",question:"关于构造方法，下列说法错误的是？",options:["构造方法名必须与类名相同","构造方法没有返回值类型，也不能写 void","如果自己写了有参构造，无参构造会自动保留","构造方法在创建对象（new）时自动执行"],answer:2,explanation:"一旦自己写了有参构造，编译器赠送的无参构造就消失了，需要时要自己补写。"},{type:"choice",category:"java",question:"多态写法 Animal a = new Dog() 中，调用 a.eat() 时？",options:["编译看左边（父类），运行看右边（实际执行子类重写的方法）","编译和运行都看右边","只能执行父类的方法体","编译和运行都看左边"],answer:0,explanation:"编译期检查父类是否有该方法（没有就报错），运行时执行的是子类重写后的版本。"},{type:"choice",category:"java",question:"关于抽象类，下列说法正确的是？",options:["抽象类可以被直接 new 出来","抽象类不能有构造方法","抽象类不能被实例化，只能被继承","有抽象方法的类可以不是抽象类"],answer:2,explanation:"抽象类不能 new，但有构造方法供子类 super 调用；有抽象方法的类必须是抽象类。"},{type:"choice",category:"java",question:'需要存储一组"不允许重复"的元素，应该使用哪个集合？',options:["ArrayList","HashSet","HashMap","LinkedList"],answer:1,explanation:"Set 的特点是不允许重复；List 有序可重复；Map 是键值对。"},{type:"choice",category:"python",question:"input() 函数读取到的用户输入是什么类型？",options:["整数 int","字符串 str","浮点数 float","取决于用户输入的内容"],answer:1,explanation:'input() 永远返回字符串，"5" 不能直接做算术，要先 int() 转换。'},{type:"choice",category:"python",question:"表达式 7 // 2 的结果是？",options:["3.5","3","4","1"],answer:1,explanation:"// 是整除（向下取整）得 3；/ 是普通除法得 3.5；% 是取余得 1。"},{type:"choice",category:"python",question:"表达式 2 ** 10 的结果是？",options:["20","12","1024","100"],answer:2,explanation:"** 是幂运算符，2 的 10 次方等于 1024。"},{type:"choice",category:"python",question:"Python 用什么来表示代码块的层次（代替其他语言的大括号）？",options:["大括号 {}","begin...end","缩进","分号"],answer:2,explanation:"冒号后缩进（通常 4 空格）的部分属于该代码块，缩进错误会直接报错。"},{type:"choice",category:"python",question:"列表 nums = [10, 20, 30]，nums[-1] 的值是？",options:["10","报错","30","20"],answer:2,explanation:"负数下标从尾部数起，-1 是最后一个元素 30，-2 是倒数第二个。"},{type:"choice",category:"python",question:"关于元组（tuple），下列说法正确的是？",options:["元组创建后可以随意增删改元素","元组是不可变序列，创建后不能修改","元组就是另一个名字的列表","元组只能存数字"],answer:1,explanation:"元组是不可变的，适合存放不应被修改的数据；需要增删改就用列表。"},{type:"choice",category:"python",question:'从字典中取值时希望"键不存在也不报错、还能给默认值"，应该用？',options:["d[key]","d.get(key, 默认值)","d.key","d->key"],answer:1,explanation:"d[key] 键不存在会抛 KeyError；get() 不存在返回 None 或指定的默认值。"},{type:"choice",category:"python",question:"想最快把列表 [1,2,2,3,3,3] 去重，最方便的做法是？",options:["用 for 循环逐个判断","list(set(nums))","nums.unique()","nums.sort()"],answer:1,explanation:"集合（set）天生不重复，set(nums) 一行去重，再转回列表即可。"},{type:"choice",category:"python",question:'生成器函数中，"交出一个值并暂停，下次从这继续"的关键字是？',options:["return","yield","pass","raise"],answer:1,explanation:"yield 让函数变成生成器，边生成边消费，不把全部数据一次性放进内存。"},{type:"choice",category:"python",question:'脚本里常见的 if __name__ == "__main__": 的作用是？',options:["声明程序的主类","只有直接运行本文件时才执行其下代码，被 import 时不执行","Python 程序必须写的固定开头","导入所有第三方库"],answer:1,explanation:'被别人 import 时 __name__ 是模块名而不是 "__main__"，这句判断可以避免导入时执行主逻辑。'},{type:"choice",category:"pg",question:"SQL 按功能分类，SELECT 属于哪一类？",options:["DDL 数据定义","DML 数据操纵","DQL 数据查询","DCL 数据控制"],answer:2,explanation:"SELECT 是数据查询语言（DQL）；CREATE/ALTER/DROP 是 DDL，INSERT/UPDATE/DELETE 是 DML，GRANT/REVOKE 是 DCL。"},{type:"choice",category:"pg",question:"查询年龄大于 18 且城市为深圳的学生，正确的 WHERE 写法是？",options:["WHERE age > 18 AND city = '深圳'","WHERE age > 18, city = '深圳'","WHERE age > 18 OR city = '深圳'",'WHERE age > 18 AND city == "深圳"'],answer:0,explanation:'条件之间用 AND/OR 连接；SQL 的文本用单引号、相等判断是一个等号。OR 会把"年龄大"和"在深圳"的都查出来，逻辑就错了。'},{type:"choice",category:"pg",question:"判断某列是否为 NULL，正确的写法是？",options:["WHERE col = NULL","WHERE col == NULL","WHERE col IS NULL","WHERE col LIKE NULL"],answer:2,explanation:"NULL 与任何值（包括它自己）的 = 比较结果都不是 true，必须用 IS NULL / IS NOT NULL。"},{type:"choice",category:"pg",question:"SELECT DISTINCT city FROM students 的作用是？",options:["统计学生总数","按城市排序","去掉重复的城市，返回不重复的城市列表","只查第一个城市"],answer:2,explanation:'DISTINCT 对查询结果去重；多列 DISTINCT 表示"这几列的组合完全相同"才算重复。'},{type:"choice",category:"pg",question:"按年龄降序取第 3 页数据（每页 10 条），正确的写法是？",options:["ORDER BY age DESC LIMIT 10 OFFSET 20","ORDER BY age DESC LIMIT 30","LIMIT 10 OFFSET 20 ORDER BY age DESC","TOP 30 ORDER BY age"],answer:0,explanation:"先 ORDER BY 排序再 LIMIT/OFFSET；第 n 页每页 m 条的 OFFSET 是 (n-1)*m，第 3 页跳过前 20 条。"},{type:"choice",category:"pg",question:"关于 GROUP BY，下列说法正确的是？",options:["SELECT 里的列可以随意写，不受 GROUP BY 限制","SELECT 里出现的列必须在 GROUP BY 中，或是聚合函数","WHERE 里可以使用聚合函数过滤分组结果","GROUP BY 只能按一个字段分组"],answer:1,explanation:"分组后每一组只出一行，非聚合列必须出现在 GROUP BY 里；过滤分组结果用 HAVING 不是 WHERE；可以多字段分组。"},{type:"choice",category:"pg",question:"想保留左边表的所有行、即使右边没有匹配（匹配不上的填 NULL），应该用？",options:["INNER JOIN","LEFT JOIN","CROSS JOIN","SELF JOIN"],answer:1,explanation:"LEFT JOIN 以左表为准全保留；INNER JOIN 只留两边都匹配的；CROSS JOIN 是笛卡尔积。"},{type:"choice",category:"pg",question:"存储金额字段，最合适的类型是？",options:["REAL 浮点","DOUBLE PRECISION","NUMERIC(10,2) 精确小数","INTEGER"],answer:2,explanation:"浮点类型有精度误差（0.1+0.2≠0.3），金额必须用精确小数 NUMERIC；INTEGER 存不了小数。"},{type:"choice",category:"pg",question:'转账场景"扣钱 + 加钱"必须同生共死，靠什么机制保证？',options:["索引 INDEX","事务 TRANSACTION","视图 VIEW","序列 SEQUENCE"],answer:1,explanation:"事务保证原子性：COMMIT 提交全部生效，ROLLBACK 全部撤销。ACID 是数据库可靠性的基石。"},{type:"choice",category:"pg",question:"防止 SQL 注入，程序里执行带用户输入的查询，正确做法是？",options:["把用户输入直接拼进 SQL 字符串","使用参数化查询（占位符 $1 / %s 传值）","先过滤掉所有单引号再拼接","用 MD5 加密用户输入后拼接"],answer:1,explanation:'参数化查询让"数据"和"代码"分离，输入内容再恶意也只会被当成参数值；拼接字符串（哪怕过滤）都可能被绕过。'},{type:"choice",category:"vue",question:"Vue 的核心思想是？",options:["手动获取元素并修改 DOM","只管修改数据，视图随数据自动更新（声明式 + 响应式）","所有页面刷新跳转","必须配合 jQuery 使用"],answer:1,explanation:'Vue 把"数据 -> 视图"自动化：开发者只改数据，DOM 更新交给框架，这正是它和原生 JS 最大的区别。'},{type:"choice",category:"vue",question:"在 script setup 中，ref 创建的响应式数据如何访问和修改？",options:["直接 count++","count.value++","count()++","setCount(count + 1)"],answer:1,explanation:"ref 包装后通过 .value 读写（脚本里）；模板里使用时会自动解包，不用 .value。"},{type:"choice",category:"vue",question:"v-if 与 v-show 的区别，正确的是？",options:["完全一样，可以随便换用","v-if 是真创建/销毁元素，v-show 只是切换 display 样式","v-show 是真创建/销毁元素，v-if 只是改样式","v-if 只能用于组件"],answer:1,explanation:"频繁切换用 v-show（不反复创建销毁），条件很少变化用 v-if（不渲染就省资源）。"},{type:"choice",category:"vue",question:"v-for 列表渲染中，:key 应该用什么？",options:["数组下标 index","随机数","数据里唯一且稳定的 id","不写 key 性能最好"],answer:2,explanation:'key 是 diff 比对的"身份证"，用下标在插入/排序/删除时会错位；唯一 id 才能保证正确复用节点。'},{type:"choice",category:"vue",question:"v-model 的本质是什么？",options:["一个神奇的指令没有任何原理",":value 绑定 + @input 事件更新的语法糖","只能用于 input 输入框","双向修改父组件的 props"],answer:1,explanation:"v-model = 值绑定 + 输入事件监听的语法糖，表单和自定义组件都遵循这个本质。"},{type:"choice",category:"vue",question:"关于 computed 计算属性，下列说法正确的是？",options:["每次页面渲染都会重新执行一遍","基于依赖缓存：依赖不变就不重新计算","主要用于监听数据变化后发请求","必须在里面修改原始数据"],answer:1,explanation:'computed 有缓存，适合"由已有数据算出新数据"；发请求属于副作用应该用 watch。'},{type:"choice",category:"vue",question:'子组件想通知父组件"我被点击了"，正确的通信方式是？',options:["子组件直接修改父组件传来的 props","子组件用 emit 抛出自定义事件，父组件 @ 监听","子组件用 $parent 强行改父组件数据","把数据存到全局变量里"],answer:1,explanation:"单向数据流：props 下行传数据，emit 上行传意图，父组件修改数据源后再经 props 流回来。"},{type:"choice",category:"vue",question:"发送接口请求（如 fetch 数据）通常放在哪个生命周期钩子里？",options:["onBeforeMount","onMounted","onUnmounted","onUpdated"],answer:1,explanation:"onMounted 表示组件已挂载、DOM 就绪，是发请求、初始化第三方库的标准位置；onUnmounted 负责清理。"},{type:"choice",category:"vue",question:"很多不相邻的组件需要共享登录用户信息，最合适的方案是？",options:["一层层 props 传下去","用 Pinia 建全局 store","每层组件都 provide 一遍","存到 window 全局变量"],answer:1,explanation:"跨组件/全局共享状态用 Pinia：集中管理、任意组件读写、配合持久化插件刷新不丢。"},{type:"choice",category:"vue",question:'Vue Router 中 component: () => import("../views/Quiz.vue") 这种写法的好处是？',options:["没有好处，纯属个人风格","路由懒加载：组件用到时才加载，减小首屏体积","让组件自动获得动画","防止用户直接输入 URL 访问"],answer:1,explanation:"动态 import 让每个页面打包成独立 chunk，首屏只加载当前页，访问其他页时再按需下载。"},{type:"subjective",category:"html",question:'简述 HTML、CSS、JavaScript 三者在网页中的作用，并说明为什么说"语义化标签"很重要。',reference:`HTML 负责网页的结构与内容（骨架），CSS 负责外观样式（皮肤），JavaScript 负责交互行为（大脑）。
语义化标签的重要性：
1. 代码可读性强，开发者一眼能看出 header/nav/main/footer 各是什么区域；
2. 有利于搜索引擎优化（SEO），搜索引擎能更好地理解页面结构；
3. 对无障碍访问友好，屏幕阅读器可以按语义朗读内容；
4. 便于团队协作与后期维护。`},{type:"subjective",category:"html",question:"写出表单中 get 和 post 两种提交方式的主要区别，并各举一个适用场景。",reference:`主要区别：
1. 数据位置：get 把数据拼接在网址后面（?key=value），post 把数据放在请求体中，地址栏不可见；
2. 数据量：get 受网址长度限制，post 基本无限制；
3. 安全性：get 的数据直接暴露在网址中（不适合密码），post 相对安全；
适用场景：get 适合搜索、筛选、分页等幂等查询；post 适合登录、注册、上传文件等提交数据的操作。`},{type:"subjective",category:"css",question:"请解释盒模型的四层结构，并说明 box-sizing: content-box 与 border-box 的区别。",reference:`盒模型由内到外四层：
1. content 内容区：元素的实际内容（文字、图片等），width/height 默认控制这一层；
2. padding 内边距：内容与边框之间的空隙，会显示背景色；
3. border 边框：盒子的描边；
4. margin 外边距：盒子与其他盒子之间的距离，不显示背景。
区别：content-box（默认）下 width 只包含内容，加 padding/border 会把盒子撑大；
border-box 下 width 包含内容 + padding + border，设置多少就是多大，计算直观，
现代项目通常全局设置 * { box-sizing: border-box; }。`},{type:"subjective",category:"css",question:'要实现"元素在父容器中水平垂直同时居中"，请写出至少两种不同的 CSS 方案。',reference:`方案一（Flex，推荐）：
.parent { display: flex; justify-content: center; align-items: center; }
方案二（Grid）：
.parent { display: grid; place-items: center; }
方案三（绝对定位 + transform）：
.parent { position: relative; }
.child { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
方案四（老式，单行文本场景）：text-align: center + line-height 等于容器高度（只适合单行文字水平垂直居中）。`},{type:"subjective",category:"js",question:"说明 let/const 与 var 的区别，并举出 var 在循环中的一个经典问题。",reference:`区别：
1. 作用域：let/const 有块级作用域（{} 内有效），var 只有函数作用域；
2. 重复声明：let/const 不允许重复声明，var 允许；
3. const 声明后不能重新赋值；
var 的经典问题：在 for 循环中用 var 声明循环变量，配合 setTimeout 打印时，
由于 var 是全局/函数级的一个变量，循环结束后 i 已经是 3，三次回调都打印 3；
改用 let 后每轮循环都会创建一个新的 i，可以正确打印 0、1、2。`},{type:"subjective",category:"js",question:"什么是事件委托？它解决了什么问题？请描述实现思路。",reference:`事件委托：利用事件冒泡机制，把子元素的事件监听统一绑定在它们的父元素上，
在父级的处理函数中通过 e.target 判断真正被点击的子元素，再执行对应逻辑。
解决的问题：
1. 性能：1000 个列表项只需要 1 个监听器，而不是 1000 个；
2. 动态元素：后续通过 JS 新增的子元素自动生效，不需要重新绑定事件。
实现思路：父元素 addEventListener("click", e => { if (e.target 匹配目标) { 处理 } })。`},{type:"subjective",category:"java",question:"面向对象三大特性是封装、继承、多态，请分别说明各自的作用，并举例说明多态给程序带来的好处。",reference:`封装：把属性用 private 隐藏，通过 public 的 getter/setter 提供受控访问，
可以在方法里加校验逻辑，防止外部写入非法数据，降低模块间耦合。
继承：子类通过 extends 复用父类的属性和方法（代码复用），并可在父类基础上扩展或重写。
多态：父类引用指向子类对象，同一方法调用在不同子类上有不同表现。
多态的好处举例：feed(Animal a) 方法可以接收任何 Animal 子类对象（狗、猫、鸟），
新增动物种类时无需修改 feed 方法，符合"对扩展开放、对修改关闭"的原则，
这是框架和大型系统能保持灵活可扩展的基石。`},{type:"subjective",category:"python",question:"比较 Python 中列表（list）、元组（tuple）、字典（dict）、集合（set）四种容器的特点，并各举一个典型使用场景。",reference:`列表：有序、可变、允许重复，下标访问。场景：购物清单、待办事项等需要频繁增删改的序列。
元组：有序、不可变、允许重复。场景：坐标点 (x, y)、函数返回多个值、不应被修改的配置常量。
字典：键值对映射、键唯一、查询极快（3.7+ 保持插入顺序）。场景：一个学生的信息 {"name": "小明", "age": 18}，通过名字查值的场合。
集合：无序、不重复。场景：列表去重、求两份数据的交集/并集/差集（如共同好友）。`},{type:"subjective",category:"pg",question:"解释 SQL 的逻辑执行顺序（FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT），并据此说明 WHERE 与 HAVING 的区别。",reference:`逻辑执行顺序：先 FROM 确定数据来源，WHERE 过滤原始行，GROUP BY 把行分组，
HAVING 过滤分组结果，SELECT 计算输出列，ORDER BY 排序，LIMIT 截取条数。
WHERE 与 HAVING 的区别：
1. WHERE 在分组前执行，过滤的是"原始行"，不能使用聚合函数——因为执行到它时还没有分组，聚合结果不存在；
2. HAVING 在分组后执行，过滤的是"组"，通常配合聚合函数使用（如 HAVING COUNT(*) > 3）；
3. 能在 WHERE 里完成的过滤尽量放 WHERE，提前减少参与分组的数据量，性能更好。`},{type:"subjective",category:"vue",question:'请描述 Vue 的响应式原理（Proxy），并结合"props 下行、emit 上行"说明父子组件的数据流转过程。',reference:`响应式原理：Vue 3 用 Proxy 拦截对象的读取和修改。组件渲染时会读取用到的数据（依赖收集），
数据被修改时触发拦截器，通知所有依赖它的地方（组件、computed、watch）重新执行，
因此开发者只改数据、不用碰 DOM，视图自动更新。
ref 包装基础类型（脚本里 .value 访问），reactive 代理对象；解构 reactive 会丢失响应式。
父子数据流转：
1. 父组件把数据通过 props 传给子组件（数据下行），子组件只读不改；
2. 子组件需要"改"时，通过 defineEmits 抛出自定义事件并携带数据（意图上行）；
3. 父组件在事件回调里修改自己的数据源，新数据再经 props 流回子组件，视图同步更新；
4. 单向数据流让数据变化始终可追踪（只有父组件能改源头），是可维护性的关键。`},{type:"choice",category:"springboot",question:"Spring Boot 相比传统 Spring 最大的特点是？",options:["只能开发桌面应用","约定优于配置 + 自动装配 + 内嵌服务器，大幅简化开发与部署","不支持数据库操作","必须使用 XML 配置所有 Bean"],answer:1,explanation:"Spring Boot 用自动装配和起步依赖省掉大量配置，内嵌 Tomcat 让 java -jar 一条命令就能跑，这正是它取代传统 Spring 部署方式的原因。"},{type:"choice",category:"springboot",question:"@SpringBootApplication 注解等价于下面哪组注解的组合？",options:["@Override + @Test + @Service","@Configuration + @EnableAutoConfiguration + @ComponentScan","@Entity + @Table + @Id","@GetMapping + @PostMapping + @PutMapping"],answer:1,explanation:"它组合了配置类、开启自动装配、组件扫描三大注解，这就是为什么启动类要放在根包——组件扫描只扫它所在包及子包。"},{type:"choice",category:"springboot",question:"Spring Boot 3.x 要求的最低 JDK 版本是？",options:["JDK 8","JDK 11","JDK 17","JDK 21"],answer:2,explanation:"Spring Boot 3.x 基于 Spring Framework 6，最低要求 JDK 17。还在用 JDK 8 的老项目一般停留在 Spring Boot 2.7.x。"},{type:"choice",category:"springboot",question:'RESTful 风格中，"修改用户"通常使用哪种方法与 URL？',options:["POST /users/create","GET /users/update?id=1","PUT /users/{id}","DELETE /users/{id}"],answer:2,explanation:"RESTful 用 URL 表示资源、HTTP 方法表示操作：GET 查、POST 增、PUT 改、DELETE 删，修改就是 PUT /users/{id}。"},{type:"choice",category:"springboot",question:"前端 POST 一个 JSON 请求体，后端应该用哪个注解接收？",options:["@RequestParam","@PathVariable","@RequestBody","@RequestHeader"],answer:2,explanation:"@RequestBody 把请求体里的 JSON 自动反序列化成 Java 对象；@RequestParam 取查询串，@PathVariable 取路径占位符，@RequestHeader 取请求头。"},{type:"choice",category:"springboot",question:"关于依赖注入，Spring 官方推荐的方式是？",options:["字段注入 @Autowired","构造器注入（依赖可加 final，依赖关系明确、便于测试）","直接 new 一个新对象","在方法里用 ApplicationContext.getBean() 现取"],answer:1,explanation:"构造器注入的字段可以声明为 final 保证不可变，依赖一目了然，单测时可以直接传入 Mock 对象。IDEA 对字段注入会给出黄色警告。"},{type:"choice",category:"springboot",question:"关于 @Transactional 事务，下列说法正确的是？",options:["任何异常都会自动回滚","默认只在 RuntimeException 及其子类抛出时回滚","同一个类里 A 方法调用本类的 B 方法，B 上的事务注解一定生效","事务方法里调用外部接口耗时越久越好"],answer:1,explanation:"默认只回滚 RuntimeException（受检异常需 rollbackFor 声明）；同类 this 自调用会绕过代理导致事务失效；事务方法里写耗时操作会长期占用数据库连接。"},{type:"choice",category:"springboot",question:"Spring Data JPA 中，方法 findByNameContaining(String kw) 会自动生成什么 SQL 条件？",options:["name = ?","name LIKE %?%","name IS NULL","age > ?"],answer:1,explanation:'方法名即查询：Containing 翻译成 LIKE %参数%，这是 Spring Data JPA "接口即实现"的核心能力。'},{type:"choice",category:"springboot",question:"关于 JWT，下列说法正确的是？",options:["Payload 部分是加密的，可以放心存密码","Payload 只是 Base64 编码，任何人都能解开查看，不能放敏感明文","JWT 必须存在服务端的 Session 里","JWT 永远不会过期"],answer:1,explanation:"JWT 的三段中前两段（头部、载荷）只是 Base64 编码，签名只保证不被篡改、不保证保密，所以密码等敏感信息绝不能放进 Payload。"},{type:"choice",category:"springboot",question:"用户密码在数据库中的正确存储方式是？",options:["明文存储，方便找回","MD5 一次哈希即可，绝对安全","使用 BCrypt 加盐哈希存储，登录时用 matches 比对","Base64 编码存储"],answer:2,explanation:"BCrypt 自带随机盐且故意计算很慢，能有效抵御彩虹表与暴力破解；MD5 太快已被大规模破解；明文和 Base64 都是严重安全事故。"},{type:"choice",category:"springboot",question:"@Cacheable 注解的作用是？",options:["每次都执行方法体并强制刷新缓存","先查缓存，命中则直接返回，未命中才执行方法并把结果缓存","执行方法后立即删除缓存","只能搭配 MySQL 使用"],answer:1,explanation:'@Cacheable 是"读缓存"语义：命中直接返回不执行方法；@CachePut 是执行并刷新；@CacheEvict 是清缓存。三者配合使用。'},{type:"subjective",category:"springboot",question:'请以"图书管理 API"为例，说明 Spring Boot 项目的三层架构中各层的职责，并说明 @Transactional 事务与 Spring Cache 缓存在其中如何配合使用。',reference:`三层架构与职责：
1. Controller（@RestController）：接收 HTTP 请求、做参数校验（@Valid）、调用 Service、用统一结构 Result 返回，不写业务逻辑；
2. Service（@Service）：核心业务规则，如查重、组合多个数据操作；事务边界加在这里（@Transactional）；
3. Repository（继承 JpaRepository）：只负责数据库读写，常规 CRUD 由框架自动生成。
事务配合：
一个业务方法涉及多条 SQL 时加 @Transactional，保证要么全成功要么全回滚（默认只回滚 RuntimeException）；
注意同类自调用会导致事务失效，耗时操作不要放在事务方法里。
缓存配合：
查询方法加 @Cacheable 让结果进 Redis，减少数据库压力；
新增/修改/删除方法加 @CacheEvict 及时失效旧缓存，遵循"先更新数据库、再删缓存"，避免用户读到脏数据；
整体流程：请求 → Controller 校验参数 → Service 业务 + 事务 + 缓存注解 → Repository 读写 PostgreSQL → 逐层返回 → 统一 JSON 响应。`},{type:"choice",category:"git",question:"Git 属于哪种类型的版本控制系统？",options:["集中式版本控制系统","分布式版本控制系统","云端文档同步系统","文件备份压缩工具"],answer:1,explanation:"Git 是分布式版本控制：每个人电脑上都有完整的历史记录，可离线提交，联网时再与远程仓库同步。"},{type:"choice",category:"git",question:"文件从工作区进入版本库的正确流转顺序是？",options:["commit → add → 工作区","工作区 → git add → 暂存区 → git commit → 版本库","工作区 → git commit → 暂存区 → git push → 版本库","暂存区 → git add → 工作区 → git commit → 版本库"],answer:1,explanation:"三个区域：工作区（编辑中）→ git add 进入暂存区（待提交清单）→ git commit 固化为版本库中的一次提交。"},{type:"choice",category:"git",question:"git add 的作用是？",options:["把文件提交到远程仓库","创建一个新分支","把改动加入暂存区，等待下次提交","撤销上一次提交"],answer:2,explanation:"add 负责把工作区改动放进暂存区；真正记录历史的是 commit，推送到远程的是 push。"},{type:"choice",category:"git",question:"想查看提交历史，应该使用哪个命令？",options:["git status","git diff","git log","git show HEAD~5"],answer:2,explanation:"git log 列出提交历史；status 看当前文件状态；diff 看未提交的差异；show 看某一次提交的详情。"},{type:"choice",category:"git",question:"git reset --hard HEAD~1 执行后，未提交的修改会？",options:["保留在暂存区","保留在工作区","被彻底丢弃，无法从工作区恢复","被自动推送到远程"],answer:2,explanation:"--hard 会同时清空暂存区和工作区。已提交的内容还能通过 reflog 找回，但从未提交的修改会真正丢失，慎用。"},{type:"choice",category:"git",question:"对已推送到公共分支的错误提交，推荐用什么方式撤销？",options:["git reset --hard 回退后强推","git revert 生成一个反向提交","直接修改远程仓库的文件","删除整个仓库重建"],answer:1,explanation:'revert 通过生成"抵消提交"来撤销效果，历史完整保留、不影响协作者；reset + 强推会改写公共历史，是团队协作大忌。'},{type:"choice",category:"git",question:"关于分支，下列说法正确的是？",options:["创建分支需要完整复制一遍所有文件，开销很大","分支只是指向某次提交的可移动指针，创建几乎零成本","分支一旦创建就不能删除","main 分支上的提交不能被撤销"],answer:1,explanation:"分支本质是一个 40 位哈希的小文件（指针），创建/切换/删除都极快；main 上的提交同样可以 revert/reset。"},{type:"choice",category:"git",question:"合并分支时出现冲突，正确的处理流程是？",options:["放弃合并，重新写一遍代码","打开冲突文件，编辑冲突块后 git add，再 git commit 完成合并","执行 git push 让远程自动解决","删除其中一个分支即可"],answer:1,explanation:'冲突意味着 Git 无法自动裁决"同一处两个版本"。人工编辑冲突文件（处理 <<<<<<< ======= >>>>>>> 标记）→ add 标记已解决 → commit 收尾。'},{type:"choice",category:"git",question:"git pull 等价于哪两个命令的组合？",options:["git clone + git merge","git fetch + git merge","git push + git fetch","git commit + git push"],answer:1,explanation:"pull = fetch（下载远程更新）+ merge（合并到当前分支）。想先观察再合并，可以单独用 fetch。"},{type:"choice",category:"git",question:"文件已被 Git 跟踪（提交过）后，再把它加入 .gitignore，会怎样？",options:["Git 立刻停止跟踪它","该文件被自动删除","它仍会被继续跟踪，ignore 只对未跟踪文件生效，需先 git rm --cached 移出",".gitignore 会报错"],answer:2,explanation:'.gitignore 只能阻止"未跟踪"文件被纳入。已跟踪文件要先 git rm --cached 移出索引（保留本地文件），ignore 才会生效。'},{type:"subjective",category:"git",question:"请描述团队协作中一次完整的功能开发流程（从同步主线到清理分支），并说明：①为什么功能要在独立分支上开发；②遇到合并冲突时如何解决。",reference:`标准流程（GitHub Flow）：
1. 同步主线：git switch main && git pull；
2. 开功能分支：git switch -c feat/xxx（命名写清用途）；
3. 小步开发：多次 add + commit，提交说明用 Conventional Commits 规范（feat/fix/...）；
4. 推送备份：git push -u origin feat/xxx；
5. 发起 Pull Request，队友 code review，按意见继续提交；
6. 审核通过后合并（可 Squash merge 保持主线整洁）；
7. 删除本地与远程功能分支。
①独立分支的原因：隔离未完成的工作，main 始终保持可发布状态；
出问题可整体回退/丢弃分支，不影响他人；多人并行开发互不阻塞。
②冲突处理：冲突发生在"两个分支修改了同一文件的同一处"，Git 无法自动裁决；
git status 找出冲突文件 → 打开文件处理 <<<<<<< ======= >>>>>>> 标记块，
决定保留哪方或融合双方 → git add 标记已解决 → git commit 完成合并。
思路是"冲突不是错误，是需要人来做的业务决策"。`},{type:"choice",category:"maven",question:"Maven 的核心作用不包括以下哪项？",options:["自动下载和管理依赖 jar 包","提供标准化的项目结构","提供统一的生命周期构建命令","替代 Java 编译器生成字节码规范"],answer:3,explanation:'Maven 调用 JDK 的编译器来编译代码，它本身定义的是"依赖管理 + 标准结构 + 生命周期"这套构建流程，不是编译规范。'},{type:"choice",category:"maven",question:"Maven 坐标的三要素是？",options:["groupId、artifactId、version","name、url、description","groupId、packaging、scope","artifactId、scope、classifier"],answer:0,explanation:"groupId（组织）+ artifactId（项目/模块名）+ version（版本）三者组合在仓库世界中唯一定位一个构件。"},{type:"choice",category:"maven",question:"<dependency> 不写 <scope> 时，默认值是？",options:["test","provided","compile","runtime"],answer:2,explanation:"默认 scope 是 compile：编译、测试、运行三个阶段都参与 classpath，是最常见的普通依赖。"},{type:"choice",category:"maven",question:"servlet-api 这类由 Tomcat 在运行时提供的库，打包部署时应设置 scope 为？",options:["compile","provided","runtime","test"],answer:1,explanation:'provided 表示"编译期需要（写代码用到），运行期由容器提供"，打 war 部署到外置 Tomcat 的标准写法，避免 jar 冲突。'},{type:"choice",category:"maven",question:"两条依赖路径分别带来 1.0 和 2.0 版本的同一个库（路径长度不同），Maven 采用哪个版本？",options:["版本号较大的 2.0","依赖路径最短的那个版本","pom 里声明顺序在后的","随机选择一个"],answer:1,explanation:'冲突调解第一规则是"最短路径优先"；路径长度相同时才按"先声明者优先"。可用 mvn dependency:tree -Dverbose 排查。'},{type:"choice",category:"maven",question:"mvn install 与 mvn package 的区别是？",options:["没有区别，只是名字不同","install 会额外把打好的包安装进本地仓库，供本机其他项目引用","package 会把包发布到中央仓库","install 不执行测试，package 会执行"],answer:1,explanation:"package 产出 jar 到 target/；install = package + 装入本地仓库（~/.m2）；deploy 才是发布到远程仓库。两者默认都会先跑测试。"},{type:"choice",category:"maven",question:"关于 Maven 生命周期，正确的说法是？",options:["执行 mvn package 只会运行 package 阶段","执行某个 phase 时，同生命周期中它之前的阶段会依次执行","clean、default、site 三套生命周期必须一起执行","插件与生命周期无关"],answer:1,explanation:"生命周期是有序阶段链：mvn package 会依次执行 validate → compile → test → package。插件提供具体实现，绑定在各 phase 上完成实际工作。"},{type:"choice",category:"maven",question:"<dependencyManagement> 与 <dependencies> 的关系是？",options:["两者完全等价，可以互换","dependencyManagement 只声明版本不引入依赖；dependencies 里的同坐标依赖可不写版本","dependencyManagement 用于下载源码包","dependencies 只能出现在父 pom 中"],answer:1,explanation:'dependencyManagement 是"定价表"：统一锁定版本但不真正引入；子模块/本 pom 在 dependencies 里引用时免写版本。Spring Boot parent 就是这样托管版本的。'},{type:"choice",category:"maven",question:"settings.xml 可以配置的内容是？",options:["Java 源代码的包结构","本地仓库位置、远程仓库镜像、私服认证信息","Spring Boot 的端口号","单元测试的断言方式"],answer:1,explanation:"settings.xml 是 Maven 的用户级配置：localRepository（本地仓库路径）、mirrors（如阿里云镜像）、servers（私服账号）等，与项目代码无关。"},{type:"choice",category:"maven",question:"多模块项目中，父工程 pom 必须设置的 packaging 是？",options:["jar","war","pom","maven-plugin"],answer:2,explanation:"聚合（父）工程的 packaging 必须是 pom，它通过 <modules> 聚合子模块、通过 <parent> 被子模块继承，本身不含代码。"},{type:"subjective",category:"maven",question:"请说明 Maven 解析一个依赖时的查找顺序，并描述：①依赖冲突的调解规则；②如何用命令排查并解决版本冲突。",reference:`依赖查找顺序：
1. 先查本地仓库（~/.m2/repository 或 localRepository 配置的目录），命中直接使用；
2. 未命中则按配置的镜像/远程仓库（如阿里云、中央仓库）下载并缓存到本地；
3. 都不存在则报 Could not find artifact。
冲突调解规则：
1. 路径最短优先：A→B→C(2.0) 与 A→C(1.0) 冲突时选路径短的 1.0；
2. 路径长度相同时，先声明者优先（pom 中靠前的 dependency 获胜）。
排查与解决：
1. mvn dependency:tree -Dverbose 查看依赖树，定位同一库的不同来源与被忽略(omitted)的版本；
2. 在引入方使用 <exclusions> 排除不需要的传递依赖；
3. 需要统一版本时用 dependencyManagement（或 BOM）锁定版本；
4. 修改后重新构建验证（必要时 mvn clean install -U 强制刷新）。`},{type:"choice",category:"uniapp",question:"uni-app 开发小程序时使用的核心语法是？",options:["原生微信小程序的 wxml/wxss","Vue 单文件组件语法（template + script + style）","React JSX 语法","纯 HTML + jQuery"],answer:1,explanation:"uni-app 用 Vue 语法编写，编译器把 Vue 组件翻译成微信小程序的 wxml/wxss/js，因此学完 Vue 即可快速上手。"},{type:"choice",category:"uniapp",question:"uni-app 项目中，页面路由和导航栏样式主要在哪个文件配置？",options:["manifest.json","pages.json","App.vue","router/index.js"],answer:1,explanation:"pages.json 注册页面路径、配置 navigationBar 样式和底部 tabBar；manifest.json 管应用身份（AppID 等）；uni-app 没有 vue-router。"},{type:"choice",category:"uniapp",question:"小程序中用于容器布局、相当于网页 div 的组件是？",options:["<div>","<view>","<container>","<box>"],answer:1,explanation:"小程序组件：view 相当于 div，text 相当于 span/文本，image 相当于 img，navigator 相当于 a 链接。"},{type:"choice",category:"uniapp",question:"rpx 单位的特点是？",options:["固定等于 1 个物理像素","屏幕宽度恒为 750rpx，随屏幕自动等比缩放","只在 iOS 上生效","和 px 完全等价"],answer:1,explanation:"rpx 是响应式像素：任何屏幕宽度都是 750rpx，布局尺寸用 rpx 会自动等比缩放；750px 宽的设计稿量得多少 px 就写多少 rpx。"},{type:"choice",category:"uniapp",question:'从首页跳转到底部 tabBar 的"我的"页面，应该使用？',options:["uni.navigateTo","uni.switchTab","uni.redirectTo","uni.navigateBack"],answer:1,explanation:"tabBar 页面只能用 switchTab 跳转，navigateTo 跳 tabBar 页会静默失败；navigateTo 用于普通页面（可返回）。"},{type:"choice",category:"uniapp",question:"接收上一页跳转参数（如 id=100）应在哪个页面生命周期中处理？",options:["onLaunch","onLoad","onReady","onUnload"],answer:1,explanation:"onLoad(options) 在页面加载时触发一次，options 就是 URL 上的参数对象；onLaunch 是应用级生命周期，在 App.vue 中。"},{type:"choice",category:"uniapp",question:"小程序中发起网络请求使用的 API 是？",options:["fetch()","axios.get()","uni.request()","XMLHttpRequest"],answer:2,explanation:"小程序没有 DOM/BOM，不能用 fetch、XHR、axios（其底层依赖 XHR）；统一用 uni.request，实际开发中通常封装成 Promise。"},{type:"choice",category:"uniapp",question:"关于小程序本地存储，正确的是？",options:["使用 localStorage.setItem","使用 uni.setStorageSync，数据会持久化，关闭小程序再打开仍在","数据只存在内存中，关闭即丢失","可以无限制存储任意大小数据"],answer:1,explanation:"uni.setStorageSync/getStorageSync 对应小程序 Storage，持久化保存（适合存 token）；单个 key 上限 1MB、总量 10MB，不能存大数据。"},{type:"choice",category:"uniapp",question:'某段"调用微信支付"的代码只希望在微信小程序端编译，应使用？',options:['if (platform === "weixin")',"条件编译注释 // #ifdef MP-WEIXIN ... // #endif","try/catch 包裹","放到 App.vue 中即可"],answer:1,explanation:"条件编译用特殊注释：// #ifdef MP-WEIXIN 到 // #endif 之间的代码只在微信小程序端保留，其他平台编译时直接剔除，template/style 中也有对应写法。"},{type:"choice",category:"uniapp",question:"微信小程序主包体积超过 2MB 无法上传时，正确的解决方向是？",options:["压缩手机存储空间","使用分包加载（subPackages），把低频页面放进分包","删除 node_modules 文件夹","换一个 AppID"],answer:1,explanation:"小程序主包上限 2MB、总包 20MB。把设置页、活动页等低频页面配置到 subPackages 分包中，主包只保留首页和 tabBar 页面。"},{type:"subjective",category:"uniapp",question:'请描述微信小程序中"用户登录"的完整流程，并说明：①为什么 AppSecret 不能放在前端代码里；②uni-app 中页面之间共享登录状态（token）常用什么方案。',reference:`微信登录流程：
1. 小程序端调用 uni.login() 获取临时凭证 code（5 分钟有效）；
2. 小程序把 code 发送给自己的后端服务器；
3. 后端用 code + AppID + AppSecret 请求微信服务器，换取 openid（用户在该小程序的唯一标识）和 session_key；
4. 后端判断 openid 是否已注册：未注册则自动建号，已注册则直接登录；然后生成自家系统的 token（如 JWT）返回给小程序；
5. 小程序把 token 存入本地（uni.setStorageSync），之后所有业务请求在 header 中带上 token；
6. 后端校验 token 识别用户身份；token 失效（401）时跳转登录页。
①AppSecret 是小程序的服务端密钥，拥有它可以冒充该小程序调用微信接口；
  前端代码（小程序包）可以被反编译/在开发者工具中查看，放入 AppSecret 等于公开密钥，
  会被人盗用接口额度甚至伪造登录，因此它只能保存在后端服务器环境变量中。
②共享登录状态的常用方案：token 用 uni.setStorageSync 持久化（关闭重开不丢失），
  应用启动 onLaunch 时读取恢复；多页面共享响应式状态用 Pinia（store 内存放 token/userInfo，
  actions 中同步读写 Storage），页面通过 useUserStore() 访问 isLogin 等状态，退出登录清空 store 与 Storage。`}],ru={key:0,class:"card quiz-card"},au={class:"field"},lu={class:"options"},cu=["value"],pu={class:"field"},uu={class:"options"},du=["value"],gu={key:1,class:"card quiz-card"},fu={class:"progress-info"},mu={class:"question"},yu={key:0,class:"options vertical"},hu=["name","checked","onChange"],vu=["value"],bu={class:"quiz-nav"},xu=["disabled"],Su={class:"answered-tip"},Eu={key:2},wu={class:"card score-card"},Tu={class:"score-main"},Ru={class:"score-sub"},Au={class:"score-rate"},Lu={class:"review-q"},Cu={class:"review-line"},_u={key:0,class:"review-line ok"},Iu={class:"review-exp"},Mu={class:"review-self"},ku={class:"review-ref"},Ou={__name:"Quiz",setup(e){const t=ei(),n=rt("config"),i=rt(t.query.range||"all"),o=rt(10),s=pe(()=>$o.filter(U=>U.type==="choice"&&(i.value==="all"||U.category===i.value))),r=pe(()=>$o.filter(U=>U.type==="subjective"&&(i.value==="all"||U.category===i.value)));function a(U){const N=[...U];for(let C=N.length-1;C>0;C--){const oe=Math.floor(Math.random()*(C+1));[N[C],N[oe]]=[N[oe],N[C]]}return N}const l=rt([]),c=rt({});function u(){const U=o.value===0?s.value.length:o.value,N=a(s.value).slice(0,Math.min(U,s.value.length)),C=a(r.value).slice(0,2);l.value=[...N,...C].map((oe,De)=>({...oe,id:`q${De+1}`})),c.value={},g.value=0,n.value="run"}const g=rt(0),m=pe(()=>l.value[g.value]);function y(U){c.value[m.value.id]=U}function O(U){c.value[m.value.id]=U.target.value}const R=pe(()=>g.value===l.value.length-1),F=pe(()=>l.value.filter(U=>c.value[U.id]!==void 0).length);function H(){n.value="result"}const L=pe(()=>{const U=l.value.filter(C=>C.type==="choice"),N=U.filter(C=>c.value[C.id]===C.answer).length;return{total:U.length,right:N,wrong:U.length-N}}),j={html:"HTML",css:"CSS",js:"JavaScript",vue:"Vue",uniapp:"小程序(uni-app)",java:"Java",springboot:"Spring Boot",python:"Python",pg:"PostgreSQL",git:"Git",maven:"Maven",all:"综合"},k=["all","html","css","js","vue","uniapp","java","springboot","python","pg","git","maven"];return(U,N)=>(q(),W("div",null,[N[10]||(N[10]=E("h1",{class:"page-title"},"综合测试",-1)),N[11]||(N[11]=E("p",{class:"page-desc"},"选择题自动判分，主观题请对照参考答案自评。",-1)),n.value==="config"?(q(),W("div",ru,[E("div",au,[N[5]||(N[5]=E("p",{class:"field-label"},"测试范围",-1)),E("div",lu,[(q(),W(ce,null,Ne(k,C=>E("label",{key:C,class:je(["option",{active:i.value===C}])},[ro(E("input",{type:"radio",value:C,"onUpdate:modelValue":N[0]||(N[0]=oe=>i.value=oe)},null,8,cu),[[Mo,i.value]]),re(" "+V(j[C]),1)],2)),64))])]),E("div",pu,[N[6]||(N[6]=E("p",{class:"field-label"},"题目数量",-1)),E("div",uu,[(q(),W(ce,null,Ne([10,20,0],C=>E("label",{key:C,class:je(["option",{active:o.value===C}])},[ro(E("input",{type:"radio",value:C,"onUpdate:modelValue":N[1]||(N[1]=oe=>o.value=oe)},null,8,du),[[Mo,o.value]]),re(" "+V(C===0?"全部":`${C} 题`),1)],2)),64))])]),E("button",{class:"btn btn-primary",onClick:u},"开始测试")])):n.value==="run"&&m.value?(q(),W("div",gu,[E("div",fu,[E("span",null,"第 "+V(g.value+1)+" / "+V(l.value.length)+" 题",1),E("span",{class:je(["progress-tag",`cat-${m.value.category}`])},V(j[m.value.category]),3),E("span",null,V(m.value.type==="choice"?"选择题":"主观题"),1)]),E("p",mu,V(m.value.question),1),m.value.type==="choice"?(q(),W("div",yu,[(q(!0),W(ce,null,Ne(m.value.options,(C,oe)=>(q(),W("label",{key:oe,class:je(["option",{active:c.value[m.value.id]===oe}])},[E("input",{type:"radio",name:m.value.id,checked:c.value[m.value.id]===oe,onChange:De=>y(oe)},null,40,hu),re(" "+V(String.fromCharCode(65+oe))+". "+V(C),1)],2))),128))])):(q(),W("textarea",{key:1,class:"subjective-input",rows:"6",placeholder:"在此输入你的答案（不参与自动评分，交卷后可对照参考答案自评）",value:c.value[m.value.id]||"",onInput:O},null,40,vu)),E("div",bu,[E("button",{class:"btn",disabled:g.value===0,onClick:N[2]||(N[2]=C=>g.value--)},"上一题",8,xu),E("span",Su,"已答 "+V(F.value)+" / "+V(l.value.length),1),R.value?(q(),W("button",{key:1,class:"btn btn-primary",onClick:H},"交卷")):(q(),W("button",{key:0,class:"btn btn-primary",onClick:N[3]||(N[3]=C=>g.value++)},"下一题"))])])):n.value==="result"?(q(),W("div",Eu,[E("div",wu,[E("p",Tu,V(L.value.right)+" / "+V(L.value.total),1),E("p",Ru,"选择题答对 "+V(L.value.right)+" 题，答错 "+V(L.value.wrong)+" 题",1),E("p",Au,"正确率 "+V(L.value.total?Math.round(L.value.right/L.value.total*100):0)+"%",1),E("button",{class:"btn btn-primary",onClick:N[4]||(N[4]=C=>n.value="config")},"再测一次")]),(q(!0),W(ce,null,Ne(l.value,(C,oe)=>(q(),W("div",{key:C.id,class:"card review-card"},[E("p",Lu,[re(V(oe+1)+". "+V(C.question)+" ",1),E("span",{class:je(["progress-tag",`cat-${C.category}`])},V(j[C.category]),3)]),C.type==="choice"?(q(),W(ce,{key:0},[E("p",Cu,[N[7]||(N[7]=re(" 你的答案： ",-1)),E("b",{class:je(c.value[C.id]===C.answer?"ok":"bad")},V(c.value[C.id]!==void 0?String.fromCharCode(65+c.value[C.id])+". "+C.options[c.value[C.id]]:"未作答"),3)]),c.value[C.id]!==C.answer?(q(),W("p",_u," 正确答案："+V(String.fromCharCode(65+C.answer))+". "+V(C.options[C.answer]),1)):Mt("",!0),E("p",Iu,"解析："+V(C.explanation),1)],64)):(q(),W(ce,{key:1},[N[8]||(N[8]=E("p",{class:"review-line"},"你的作答：",-1)),E("p",Mu,V(c.value[C.id]||"（未作答）"),1),N[9]||(N[9]=E("p",{class:"review-line ok"},"参考答案：",-1)),E("p",ku,V(C.reference),1)],64))]))),128))])):Mt("",!0)]))}},ju=ti(Ou,[["__scopeId","data-v-5eb0a7f0"]]),Nu=[{path:"/",name:"home",component:xp},{path:"/category/:id",name:"category",component:_p},{path:"/lesson/:id",name:"lesson",component:su},{path:"/quiz",name:"quiz",component:ju},{path:"/:pathMatch(.*)*",redirect:"/"}],Pu=Kc({history:Rc(),routes:Nu,scrollBehavior(){return{top:0}}});Bl(tp).use(Pu).mount("#app");
