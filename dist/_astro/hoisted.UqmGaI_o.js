const S={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0,experimentalSlotFixes:!1};let E,sn,F,ln=!1,O=!1,N=!1,$=!1,Q=null,P=!1;const j=(t,n="")=>()=>{},yn="slot-fb{display:contents}slot-fb[hidden]{display:none}",X="http://www.w3.org/1999/xlink",G={},bn="http://www.w3.org/2000/svg",zn="http://www.w3.org/1999/xhtml",kn=t=>t!=null,W=t=>(t=typeof t,t==="object"||t==="function");function wn(t){var n,a,e;return(e=(a=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||a===void 0?void 0:a.getAttribute("content"))!==null&&e!==void 0?e:void 0}const m=(t,n,...a)=>{let e=null,s=null,i=null,r=!1,l=!1;const o=[],f=c=>{for(let g=0;g<c.length;g++)e=c[g],Array.isArray(e)?f(e):e!=null&&typeof e!="boolean"&&((r=typeof t!="function"&&!W(e))&&(e=String(e)),r&&l?o[o.length-1].$text$+=e:o.push(r?R(null,e):e),l=r)};if(f(a),n){n.key&&(s=n.key),n.name&&(i=n.name);{const c=n.className||n.class;c&&(n.class=typeof c!="object"?c:Object.keys(c).filter(g=>c[g]).join(" "))}}if(typeof t=="function")return t(n===null?{}:n,o,En);const p=R(t,null);return p.$attrs$=n,o.length>0&&(p.$children$=o),p.$key$=s,p.$name$=i,p},R=(t,n)=>{const a={$flags$:0,$tag$:t,$text$:n,$elm$:null,$children$:null};return a.$attrs$=null,a.$key$=null,a.$name$=null,a},Sn={},jn=t=>t&&t.$tag$===Sn,En={forEach:(t,n)=>t.map(I).forEach(n),map:(t,n)=>t.map(I).map(n).map(Tn)},I=t=>({vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}),Tn=t=>{if(typeof t.vtag=="function"){const a=Object.assign({},t.vattrs);return t.vkey&&(a.key=t.vkey),t.vname&&(a.name=t.vname),m(t.vtag,a,...t.vchildren||[])}const n=R(t.vtag,t.vtext);return n.$attrs$=t.vattrs,n.$children$=t.vchildren,n.$key$=t.vkey,n.$name$=t.vname,n},_n=t=>tt.map(n=>n(t)).find(n=>!!n),Ln=(t,n)=>t!=null&&!W(t)?n&4?t==="false"?!1:t===""||!!t:n&2?parseFloat(t):n&1?String(t):t:t,K=new WeakMap,Cn=(t,n,a)=>{let e=B.get(t);st&&a?(e=e||new CSSStyleSheet,typeof e=="string"?e=n:e.replaceSync(n)):e=n,B.set(t,e)},Dn=(t,n,a)=>{var e;const s=rn(n,a),i=B.get(s);if(t=t.nodeType===11?t:b,i)if(typeof i=="string"){t=t.head||t;let r=K.get(t),l;if(r||K.set(t,r=new Set),!r.has(s)){{l=b.createElement("style"),l.innerHTML=i;const o=(e=u.$nonce$)!==null&&e!==void 0?e:wn(b);o!=null&&l.setAttribute("nonce",o),t.insertBefore(l,t.querySelector("link"))}n.$flags$&4&&(l.innerHTML+=yn),r&&r.add(s)}}else t.adoptedStyleSheets.includes(i)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,i]);return s},An=t=>{const n=t.$cmpMeta$,a=t.$hostElement$,e=n.$flags$,s=j("attachStyles",n.$tagName$),i=Dn(a.shadowRoot?a.shadowRoot:a.getRootNode(),n,t.$modeName$);e&10&&(a["s-sc"]=i,a.classList.add(i+"-h"),e&2&&a.classList.add(i+"-s")),s()},rn=(t,n)=>"sc-"+(n&&t.$flags$&32?t.$tagName$+"-"+n:t.$tagName$),J=(t,n,a,e,s,i)=>{if(a!==e){let r=tn(t,n),l=n.toLowerCase();if(n==="class"){const o=t.classList,f=Y(a),p=Y(e);o.remove(...f.filter(c=>c&&!p.includes(c))),o.add(...p.filter(c=>c&&!f.includes(c)))}else if(n==="style"){for(const o in a)(!e||e[o]==null)&&(o.includes("-")?t.style.removeProperty(o):t.style[o]="");for(const o in e)(!a||e[o]!==a[o])&&(o.includes("-")?t.style.setProperty(o,e[o]):t.style[o]=e[o])}else if(n!=="key")if(n==="ref")e&&e(t);else if(!t.__lookupSetter__(n)&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"?n=n.slice(3):tn(U,l)?n=l.slice(2):n=l[2]+n.slice(3),a||e){const o=n.endsWith(on);n=n.replace(Rn,""),a&&u.rel(t,n,a,o),e&&u.ael(t,n,e,o)}}else{const o=W(e);if((r||o&&e!==null)&&!s)try{if(t.tagName.includes("-"))t[n]=e;else{const p=e??"";n==="list"?r=!1:(a==null||t[n]!=p)&&(t[n]=p)}}catch{}let f=!1;l!==(l=l.replace(/^xlink\:?/,""))&&(n=l,f=!0),e==null||e===!1?(e!==!1||t.getAttribute(n)==="")&&(f?t.removeAttributeNS(X,n):t.removeAttribute(n)):(!r||i&4||s)&&!o&&(e=e===!0?"":e,f?t.setAttributeNS(X,n,e):t.setAttribute(n,e))}}},On=/\s/,Y=t=>t?t.split(On):[],on="Capture",Rn=new RegExp(on+"$"),pn=(t,n,a,e)=>{const s=n.$elm$.nodeType===11&&n.$elm$.host?n.$elm$.host:n.$elm$,i=t&&t.$attrs$||G,r=n.$attrs$||G;for(e in i)e in r||J(s,e,i[e],void 0,a,n.$flags$);for(e in r)J(s,e,i[e],r[e],a,n.$flags$)},H=(t,n,a,e)=>{var s;const i=n.$children$[a];let r=0,l,o,f;if(ln||(N=!0,i.$tag$==="slot"&&(E&&e.classList.add(E+"-s"),i.$flags$|=i.$children$?2:1)),i.$text$!==null)l=i.$elm$=b.createTextNode(i.$text$);else if(i.$flags$&1)l=i.$elm$=b.createTextNode("");else{if($||($=i.$tag$==="svg"),l=i.$elm$=b.createElementNS($?bn:zn,i.$flags$&2?"slot-fb":i.$tag$),$&&i.$tag$==="foreignObject"&&($=!1),pn(null,i,$),kn(E)&&l["s-si"]!==E&&l.classList.add(l["s-si"]=E),i.$children$)for(r=0;r<i.$children$.length;++r)o=H(t,i,r,l),o&&l.appendChild(o);i.$tag$==="svg"?$=!1:l.tagName==="foreignObject"&&($=!0)}return l["s-hn"]=F,i.$flags$&3&&(l["s-sr"]=!0,l["s-fs"]=(s=i.$attrs$)===null||s===void 0?void 0:s.slot,l["s-cr"]=sn,l["s-sn"]=i.$name$||"",f=t&&t.$children$&&t.$children$[a],f&&f.$tag$===i.$tag$&&t.$elm$&&L(t.$elm$,!1)),l},L=(t,n)=>{var a;u.$flags$|=1;const e=t.childNodes;for(let s=e.length-1;s>=0;s--){const i=e[s];i["s-hn"]!==F&&i["s-ol"]&&(fn(i).insertBefore(i,q(i)),i["s-ol"].remove(),i["s-ol"]=void 0,i["s-sh"]=void 0,i.nodeType===1&&i.setAttribute("slot",(a=i["s-sn"])!==null&&a!==void 0?a:""),N=!0),n&&L(i,n)}u.$flags$&=-2},cn=(t,n,a,e,s,i)=>{let r=t["s-cr"]&&t["s-cr"].parentNode||t,l;for(r.shadowRoot&&r.tagName===F&&(r=r.shadowRoot);s<=i;++s)e[s]&&(l=H(null,a,s,t),l&&(e[s].$elm$=l,r.insertBefore(l,q(n))))},gn=(t,n,a)=>{for(let e=n;e<=a;++e){const s=t[e];if(s){const i=s.$elm$;vn(s),i&&(O=!0,i["s-ol"]?i["s-ol"].remove():L(i,!0),i.remove())}}},Hn=(t,n,a,e,s=!1)=>{let i=0,r=0,l=0,o=0,f=n.length-1,p=n[0],c=n[f],g=e.length-1,d=e[0],x=e[g],v,h;for(;i<=f&&r<=g;)if(p==null)p=n[++i];else if(c==null)c=n[--f];else if(d==null)d=e[++r];else if(x==null)x=e[--g];else if(A(p,d,s))T(p,d,s),p=n[++i],d=e[++r];else if(A(c,x,s))T(c,x,s),c=n[--f],x=e[--g];else if(A(p,x,s))(p.$tag$==="slot"||x.$tag$==="slot")&&L(p.$elm$.parentNode,!1),T(p,x,s),t.insertBefore(p.$elm$,c.$elm$.nextSibling),p=n[++i],x=e[--g];else if(A(c,d,s))(p.$tag$==="slot"||x.$tag$==="slot")&&L(c.$elm$.parentNode,!1),T(c,d,s),t.insertBefore(c.$elm$,p.$elm$),c=n[--f],d=e[++r];else{for(l=-1,o=i;o<=f;++o)if(n[o]&&n[o].$key$!==null&&n[o].$key$===d.$key$){l=o;break}l>=0?(h=n[l],h.$tag$!==d.$tag$?v=H(n&&n[r],a,l,t):(T(h,d,s),n[l]=void 0,v=h.$elm$),d=e[++r]):(v=H(n&&n[r],a,r,t),d=e[++r]),v&&fn(p.$elm$).insertBefore(v,q(p.$elm$))}i>f?cn(t,e[g+1]==null?null:e[g+1].$elm$,a,e,r,g):r>g&&gn(n,i,f)},A=(t,n,a=!1)=>t.$tag$===n.$tag$?t.$tag$==="slot"?t.$name$===n.$name$:a?!0:t.$key$===n.$key$:!1,q=t=>t&&t["s-ol"]||t,fn=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,T=(t,n,a=!1)=>{const e=n.$elm$=t.$elm$,s=t.$children$,i=n.$children$,r=n.$tag$,l=n.$text$;let o;l===null?($=r==="svg"?!0:r==="foreignObject"?!1:$,r==="slot"||pn(t,n,$),s!==null&&i!==null?Hn(e,s,n,i,a):i!==null?(t.$text$!==null&&(e.textContent=""),cn(e,null,n,i,0,i.length-1)):s!==null&&gn(s,0,s.length-1),$&&r==="svg"&&($=!1)):(o=e["s-cr"])?o.parentNode.textContent=l:t.$text$!==l&&(e.data=l)},dn=t=>{const n=t.childNodes;for(const a of n)if(a.nodeType===1){if(a["s-sr"]){const e=a["s-sn"];a.hidden=!1;for(const s of n)if(s!==a){if(s["s-hn"]!==a["s-hn"]||e!==""){if(s.nodeType===1&&(e===s.getAttribute("slot")||e===s["s-sn"])){a.hidden=!0;break}}else if(s.nodeType===1||s.nodeType===3&&s.textContent.trim()!==""){a.hidden=!0;break}}}dn(a)}},z=[],xn=t=>{let n,a,e;for(const s of t.childNodes){if(s["s-sr"]&&(n=s["s-cr"])&&n.parentNode){a=n.parentNode.childNodes;const i=s["s-sn"];for(e=a.length-1;e>=0;e--)if(n=a[e],!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==s["s-hn"]&&!S.experimentalSlotFixes)if(Z(n,i)){let r=z.find(l=>l.$nodeToRelocate$===n);O=!0,n["s-sn"]=n["s-sn"]||i,r?(r.$nodeToRelocate$["s-sh"]=s["s-hn"],r.$slotRefNode$=s):(n["s-sh"]=s["s-hn"],z.push({$slotRefNode$:s,$nodeToRelocate$:n})),n["s-sr"]&&z.map(l=>{Z(l.$nodeToRelocate$,n["s-sn"])&&(r=z.find(o=>o.$nodeToRelocate$===n),r&&!l.$slotRefNode$&&(l.$slotRefNode$=r.$slotRefNode$))})}else z.some(r=>r.$nodeToRelocate$===n)||z.push({$nodeToRelocate$:n})}s.nodeType===1&&xn(s)}},Z=(t,n)=>t.nodeType===1?t.getAttribute("slot")===null&&n===""||t.getAttribute("slot")===n:t["s-sn"]===n?!0:n==="",vn=t=>{t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(vn)},Bn=(t,n,a=!1)=>{var e,s,i,r;const l=t.$hostElement$,o=t.$cmpMeta$,f=t.$vnode$||R(null,null),p=jn(n)?n:m(null,null,n);if(F=l.tagName,o.$attrsToReflect$&&(p.$attrs$=p.$attrs$||{},o.$attrsToReflect$.map(([c,g])=>p.$attrs$[g]=l[c])),a&&p.$attrs$)for(const c of Object.keys(p.$attrs$))l.hasAttribute(c)&&!["key","ref","style","class"].includes(c)&&(p.$attrs$[c]=l[c]);p.$tag$=null,p.$flags$|=4,t.$vnode$=p,p.$elm$=f.$elm$=l.shadowRoot||l,E=l["s-sc"],sn=l["s-cr"],ln=(o.$flags$&1)!==0,O=!1,T(f,p,a);{if(u.$flags$|=1,N){xn(p.$elm$);for(const c of z){const g=c.$nodeToRelocate$;if(!g["s-ol"]){const d=b.createTextNode("");d["s-nr"]=g,g.parentNode.insertBefore(g["s-ol"]=d,g)}}for(const c of z){const g=c.$nodeToRelocate$,d=c.$slotRefNode$;if(d){const x=d.parentNode;let v=d.nextSibling;{let h=(e=g["s-ol"])===null||e===void 0?void 0:e.previousSibling;for(;h;){let y=(s=h["s-nr"])!==null&&s!==void 0?s:null;if(y&&y["s-sn"]===g["s-sn"]&&x===y.parentNode&&(y=y.nextSibling,!y||!y["s-nr"])){v=y;break}h=h.previousSibling}}(!v&&x!==g.parentNode||g.nextSibling!==v)&&g!==v&&(!g["s-hn"]&&g["s-ol"]&&(g["s-hn"]=g["s-ol"].parentNode.nodeName),x.insertBefore(g,v),g.nodeType===1&&(g.hidden=(i=g["s-ih"])!==null&&i!==void 0?i:!1))}else g.nodeType===1&&(a&&(g["s-ih"]=(r=g.hidden)!==null&&r!==void 0?r:!1),g.hidden=!0)}}O&&dn(p.$elm$),u.$flags$&=-2,z.length=0}},Fn=(t,n)=>{},un=(t,n)=>(t.$flags$|=16,Fn(t,t.$ancestorComponent$),rt(()=>Un(t,n))),Un=(t,n)=>{const a=t.$hostElement$,e=j("scheduleUpdate",t.$cmpMeta$.$tagName$),s=a;let i;return n?i=_(s,"componentWillLoad"):i=_(s,"componentWillUpdate"),i=V(i,()=>_(s,"componentWillRender")),e(),V(i,()=>Mn(t,s,n))},V=(t,n)=>Pn(t)?t.then(n):n(),Pn=t=>t instanceof Promise||t&&t.then&&typeof t.then=="function",Mn=async(t,n,a)=>{const e=t.$hostElement$,s=j("update",t.$cmpMeta$.$tagName$);e["s-rc"],a&&An(t);const i=j("render",t.$cmpMeta$.$tagName$);Nn(t,n,e,a),i(),s(),Wn(t)},Nn=(t,n,a,e)=>{try{Q=n,n=n.render&&n.render(),t.$flags$&=-17,t.$flags$|=2,(S.hasRenderFn||S.reflect)&&(S.vdomRender||S.reflect)&&(S.hydrateServerSide||Bn(t,n,e))}catch(o){D(o,t.$hostElement$)}return Q=null,null},Wn=t=>{const n=t.$cmpMeta$.$tagName$,a=t.$hostElement$,e=j("postUpdate",n),s=a;t.$ancestorComponent$,_(s,"componentDidRender"),t.$flags$&64?(_(s,"componentDidUpdate"),e()):(t.$flags$|=64,_(s,"componentDidLoad"),e())},_=(t,n,a)=>{if(t&&t[n])try{return t[n](a)}catch(e){D(e)}},qn=(t,n)=>C(t).$instanceValues$.get(n),Qn=(t,n,a,e)=>{const s=C(t),i=t,r=s.$instanceValues$.get(n),l=s.$flags$,o=i;a=Ln(a,e.$members$[n][0]);const f=Number.isNaN(r)&&Number.isNaN(a);if(a!==r&&!f){s.$instanceValues$.set(n,a);{if(e.$watchers$&&l&128){const c=e.$watchers$[n];c&&c.map(g=>{try{o[g](a,r,n)}catch(d){D(d,i)}})}if((l&18)===2){if(o.componentShouldUpdate&&o.componentShouldUpdate(a,r,n)===!1)return;un(s,!1)}}}},Xn=(t,n,a)=>{var e;const s=t.prototype;if(n.$members$){t.watchers&&(n.$watchers$=t.watchers);const i=Object.entries(n.$members$);i.map(([r,[l]])=>{(l&31||l&32)&&Object.defineProperty(s,r,{get(){return qn(this,r)},set(o){Qn(this,r,o,n)},configurable:!0,enumerable:!0})});{const r=new Map;s.attributeChangedCallback=function(l,o,f){u.jmp(()=>{var p;const c=r.get(l);if(this.hasOwnProperty(c))f=this[c],delete this[c];else{if(s.hasOwnProperty(c)&&typeof this[c]=="number"&&this[c]==f)return;if(c==null){const g=C(this),d=g?.$flags$;if(d&&!(d&8)&&d&128&&f!==o){const v=this,h=(p=n.$watchers$)===null||p===void 0?void 0:p[l];h?.forEach(y=>{v[y]!=null&&v[y].call(v,f,o,l)})}return}}this[c]=f===null&&typeof this[c]=="boolean"?!1:f})},t.observedAttributes=Array.from(new Set([...Object.keys((e=n.$watchers$)!==null&&e!==void 0?e:{}),...i.filter(([l,o])=>o[0]&15).map(([l,o])=>{var f;const p=o[1]||l;return r.set(p,l),o[0]&512&&((f=n.$attrsToReflect$)===null||f===void 0||f.push([l,p])),p})]))}}return t},Gn=async(t,n,a,e)=>{let s;if(!(n.$flags$&32)&&(n.$flags$|=32,s=t.constructor,customElements.whenDefined(a.$tagName$).then(()=>n.$flags$|=128),s.style)){let r=s.style;typeof r!="string"&&(r=r[n.$modeName$=_n(t)]);const l=rn(a,n.$modeName$);if(!B.has(l)){const o=j("registerStyles",a.$tagName$);Cn(l,r,!!(a.$flags$&1)),o()}}n.$ancestorComponent$,un(n,!0)},nn=t=>{},In=t=>{if(!(u.$flags$&1)){const n=C(t),a=n.$cmpMeta$,e=j("connectedCallback",a.$tagName$);n.$flags$&1?(hn(t,n,a.$listeners$),n?.$lazyInstance$?nn(n.$lazyInstance$):n?.$onReadyPromise$&&n.$onReadyPromise$.then(()=>nn(n.$lazyInstance$))):(n.$flags$|=1,a.$flags$&12&&Kn(t),a.$members$&&Object.entries(a.$members$).map(([s,[i]])=>{if(i&31&&t.hasOwnProperty(s)){const r=t[s];delete t[s],t[s]=r}}),Gn(t,n,a)),e()}},Kn=t=>{const n=t["s-cr"]=b.createComment("");n["s-cn"]=!0,t.insertBefore(n,t.firstChild)},Jn=async t=>{if(!(u.$flags$&1)){const n=C(t);n.$rmListeners$&&(n.$rmListeners$.map(a=>a()),n.$rmListeners$=void 0)}},k=(t,n)=>{const a={$flags$:n[0],$tagName$:n[1]};a.$members$=n[2],a.$listeners$=n[3],a.$watchers$=t.$watchers$,a.$attrsToReflect$=[];const e=t.prototype.connectedCallback,s=t.prototype.disconnectedCallback;return Object.assign(t.prototype,{__registerHost(){nt(this,a)},connectedCallback(){In(this),e&&e.call(this)},disconnectedCallback(){Jn(this),s&&s.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(a.$flags$&16)})}}),t.is=a.$tagName$,Xn(t,a)},hn=(t,n,a,e)=>{a&&a.map(([s,i,r])=>{const l=Zn(t,s),o=Yn(n,r),f=Vn(s);u.ael(l,i,o,f),(n.$rmListeners$=n.$rmListeners$||[]).push(()=>u.rel(l,i,o,f))})},Yn=(t,n)=>a=>{try{S.lazyLoad||t.$hostElement$[n](a)}catch(e){D(e)}},Zn=(t,n)=>n&4?b:n&8?U:n&16?b.body:t,Vn=t=>et?{passive:(t&1)!==0,capture:(t&2)!==0}:(t&2)!==0,$n=new WeakMap,C=t=>$n.get(t),nt=(t,n)=>{const a={$flags$:0,$hostElement$:t,$cmpMeta$:n,$instanceValues$:new Map};return hn(t,a,n.$listeners$),$n.set(t,a)},tn=(t,n)=>n in t,D=(t,n)=>(0,console.error)(t,n),B=new Map,tt=[],U=typeof window<"u"?window:{},b=U.document||{head:{}},w=U.HTMLElement||class{},u={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,a,e)=>t.addEventListener(n,a,e),rel:(t,n,a,e)=>t.removeEventListener(n,a,e),ce:(t,n)=>new CustomEvent(t,n)},et=(()=>{let t=!1;try{b.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch{}return t})(),at=t=>Promise.resolve(t),st=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),en=[],mn=[],it=(t,n)=>a=>{t.push(a),P||(P=!0,n&&u.$flags$&4?lt(M):u.raf(M))},an=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(a){D(a)}t.length=0},M=()=>{an(en),an(mn),(P=en.length>0)&&u.raf(M)},lt=t=>at().then(t),rt=it(mn,!0),ot=":host,a{box-sizing:border-box;position:relative;display:inline}a{color:var(--color-brand-700);font-weight:var(--font-weight-bold);text-decoration:inherit}",pt=k(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.href=void 0,this.target=void 0,this.rel=void 0}render(){var n;const a=this.target,e=(n=this.rel)!==null&&n!==void 0?n:a==="_blank"?"noreferrer noopener":void 0;return m("a",{part:"host",href:this.href,target:a,rel:e},m("slot",null))}static get style(){return ot}},[1,"slate-link",{href:[513],target:[513],rel:[513]}]);function ct(){if(typeof customElements>"u")return;["slate-link"].forEach(n=>{switch(n){case"slate-link":customElements.get(n)||customElements.define(n,pt);break}})}ct();const gt=`@layer slate-components-1 {
  slate-container {
    /* Normalize */
    display: block;
    box-sizing: border-box;
    position: relative;

    margin: 0 auto;
    inline-size: 100%;
    max-inline-size: var(--breakpoint-lg);
  }

  slate-container[size='xs'] {
    max-inline-size: var(--breakpoint-xs);
  }
  slate-container[size='sm'] {
    max-inline-size: var(--breakpoint-sm);
  }
  slate-container[size='md'] {
    max-inline-size: var(--breakpoint-md);
  }
  slate-container[size='lg'] {
    max-inline-size: var(--breakpoint-lg);
  }
  slate-container[size='xl'] {
    max-inline-size: var(--breakpoint-xl);
  }
  slate-container[size='2xl'] {
    max-inline-size: var(--breakpoint-2xl);
  }

  slate-container[align='start'] {
    margin: 0;
  }
  slate-container[align='center'] {
    margin: 0 auto;
  }
  slate-container[align='end'] {
    margin: 0 0 0 auto;
  }
}
`,ft=k(class extends w{constructor(){super(),this.__registerHost(),this.size=void 0,this.align=void 0}static get style(){return gt}},[0,"slate-container",{size:[513],align:[513]}]);function dt(){if(typeof customElements>"u")return;["slate-container"].forEach(n=>{switch(n){case"slate-container":customElements.get(n)||customElements.define(n,ft);break}})}dt();const xt=`@layer slate-components-1 {
  slate-heading {
    /* Normalize */
    display: block;
    box-sizing: border-box;
    position: relative;

    font-family: var(--font-family-heading);

    /* Defaults - size */
    --text-font-size: var(--text-md-font-size);
    --text-line-height: var(--text-md-line-height);
    --text-margin-before: var(--text-md-margin-before);
    --text-margin-after: var(--text-md-margin-after);
    font-size: var(--text-font-size);
    line-height: var(--text-line-height);
    /* Defaults - weight */
    font-weight: var(--font-weight-normal);
    /* Defaults - variant */
    color: hsl(var(--color-text-primary));
  }

  slate-heading::before {
    content: '';
    display: table;
    margin-block-end: var(--text-margin-before);
  }

  slate-heading::after {
    content: '';
    display: table;
    margin-block-start: var(--text-margin-after);
  }

  slate-heading[variant='primary'] {
    color: hsl(var(--color-text-primary));
  }
  slate-heading[variant='secondary'] {
    color: hsl(var(--color-text-secondary));
  }

  slate-heading[size='xs'] {
    --text-font-size: var(--text-xs-font-size);
    --text-line-height: var(--text-xs-line-height);
    --text-margin-before: var(--text-xs-margin-before);
    --text-margin-after: var(--text-xs-margin-after);
    font-weight: var(--font-weight-bold);
  }

  slate-heading[size='sm'] {
    --text-font-size: var(--text-sm-font-size);
    --text-line-height: var(--text-sm-line-height);
    --text-margin-before: var(--text-sm-margin-before);
    --text-margin-after: var(--text-sm-margin-after);
  }

  slate-heading[size='md'] {
    --text-font-size: var(--text-md-font-size);
    --text-line-height: var(--text-md-line-height);
    --text-margin-before: var(--text-md-margin-before);
    --text-margin-after: var(--text-md-margin-after);
  }

  slate-heading[size='lg'] {
    --text-font-size: var(--text-lg-font-size);
    --text-line-height: var(--text-lg-line-height);
    --text-margin-before: var(--text-lg-margin-before);
    --text-margin-after: var(--text-lg-margin-after);
  }

  slate-heading[size='xl'] {
    --text-font-size: var(--text-xl-font-size);
    --text-line-height: var(--text-xl-line-height);
    --text-margin-before: var(--text-xl-margin-before);
    --text-margin-after: var(--text-xl-margin-after);
  }

  slate-heading[size='2xl'] {
    --text-font-size: var(--text-2xl-font-size);
    --text-line-height: var(--text-2xl-line-height);
    --text-margin-before: var(--text-2xl-margin-before);
    --text-margin-after: var(--text-2xl-margin-after);
  }

  slate-heading[size='3xl'] {
    --text-font-size: var(--text-3xl-font-size);
    --text-line-height: var(--text-3xl-line-height);
    font-weight: var(--font-weight-light);
    --text-margin-before: var(--text-3xl-margin-before);
    --text-margin-after: var(--text-3xl-margin-after);
  }

  slate-heading[size='4xl'] {
    --text-font-size: var(--text-4xl-font-size);
    --text-line-height: var(--text-4xl-line-height);
    font-weight: var(--font-weight-light);
    --text-margin-before: var(--text-4xl-margin-before);
    --text-margin-after: var(--text-4xl-margin-after);
  }

  slate-heading[size='5xl'] {
    --text-font-size: var(--text-5xl-font-size);
    --text-line-height: var(--text-5xl-line-height);
    --text-margin-before: var(--text-5xl-margin-before);
    --text-margin-after: var(--text-5xl-margin-after);
    font-weight: var(--font-weight-light);
  }

  slate-heading[size='6xl'] {
    --text-font-size: var(--text-6xl-font-size);
    --text-line-height: var(--text-6xl-line-height);
    --text-margin-before: var(--text-6xl-margin-before);
    --text-margin-after: var(--text-6xl-margin-after);
    font-weight: var(--font-weight-light);
  }

  slate-heading[size='7xl'] {
    --text-font-size: var(--text-7xl-font-size);
    --text-line-height: var(--text-7xl-line-height);
    --text-margin-before: var(--text-7xl-margin-before);
    --text-margin-after: var(--text-7xl-margin-after);
    font-weight: var(--font-weight-light);
  }

  slate-heading[transform='uppercase'] {
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-lg);
  }
  slate-heading[transform='uppercase'][size='4xl'],
  slate-heading[transform='uppercase'][size='5xl'],
  slate-heading[transform='uppercase'][size='6xl'] {
    letter-spacing: var(--letter-spacing-xl);
  }

  slate-heading[weight='light'] {
    font-weight: var(--font-weight-light);
  }
  slate-heading[weight='normal'] {
    font-weight: var(--font-weight-normal);
  }
  slate-heading[weight='bold'] {
    font-weight: var(--font-weight-bold);
  }

  slate-heading[wrap='false'] {
    white-space: nowrap;
  }
}
`,vt=k(class extends w{constructor(){super(),this.__registerHost(),this.level="2",this.role="heading",this.size=void 0,this.transform=void 0,this.variant=void 0,this.weight=void 0,this.wrap=void 0}connectedCallback(){this.host.setAttribute("aria-level",this.level)}handleUpdateLevel(n){this.host.setAttribute("aria-level",n)}get host(){return this}static get watchers(){return{level:["handleUpdateLevel"]}}static get style(){return xt}},[0,"slate-heading",{level:[513],role:[513],size:[513],transform:[513],variant:[513],weight:[513],wrap:[516]},void 0,{level:["handleUpdateLevel"]}]);function ut(){if(typeof customElements>"u")return;["slate-heading"].forEach(n=>{switch(n){case"slate-heading":customElements.get(n)||customElements.define(n,vt);break}})}ut();const ht=`@layer slate-components-1 {
  slate-stack {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: flex;
    /* Fix for deprecated [align] attribute */
    text-align: initial;

    /* Defaults - align */
    align-items: start;
    /* Defaults - direction */
    flex-direction: column;
    /* Defaults - gap */
    gap: var(--spacing-md);
  }

  slate-stack[align='baseline'] {
    align-items: baseline;
  }
  slate-stack[align='start'] {
    align-items: flex-start;
  }
  slate-stack[align='center'] {
    align-items: center;
  }
  slate-stack[align='end'] {
    align-items: flex-end;
  }
  slate-stack[align='stretch'] {
    align-items: stretch;
  }

  slate-stack[direction='row'] {
    flex-direction: row;
  }
  slate-stack[direction='column'] {
    flex-direction: column;
  }

  slate-stack[gap='4xs'] {
    gap: var(--spacing-4xs);
  }
  slate-stack[gap='3xs'] {
    gap: var(--spacing-3xs);
  }
  slate-stack[gap='2xs'] {
    gap: var(--spacing-2xs);
  }
  slate-stack[gap='xs'] {
    gap: var(--spacing-xs);
  }
  slate-stack[gap='sm'] {
    gap: var(--spacing-sm);
  }
  slate-stack[gap='md'] {
    gap: var(--spacing-md);
  }
  slate-stack[gap='lg'] {
    gap: var(--spacing-lg);
  }
  slate-stack[gap='xl'] {
    gap: var(--spacing-xl);
  }
  slate-stack[gap='2xl'] {
    gap: var(--spacing-2xl);
  }
  slate-stack[gap='3xl'] {
    gap: var(--spacing-3xl);
  }
  slate-stack[gap='4xl'] {
    gap: var(--spacing-4xl);
  }
  slate-stack[gap='5xl'] {
    gap: var(--spacing-5xl);
  }
  slate-stack[gap='6xl'] {
    gap: var(--spacing-6xl);
  }
  slate-stack[gap='7xl'] {
    gap: var(--spacing-7xl);
  }
  slate-stack[gap='full'] {
    justify-content: space-between;
    gap: var(--spacing-3xs);
  }

  slate-stack[justify='start'] {
    justify-content: flex-start;
  }
  slate-stack[justify='center'] {
    justify-content: center;
  }
  slate-stack[justify='end'] {
    justify-content: flex-end;
  }
  slate-stack[justify='stretch'] {
    justify-content: stretch;
  }

  slate-stack[wrap] {
    flex-wrap: wrap;
  }
}
`,$t=k(class extends w{constructor(){super(),this.__registerHost(),this.align=void 0,this.direction=void 0,this.gap=void 0,this.justify=void 0,this.wrap=void 0}static get style(){return ht}},[0,"slate-stack",{align:[513],direction:[513],gap:[513],justify:[513],wrap:[516]}]);function mt(){if(typeof customElements>"u")return;["slate-stack"].forEach(n=>{switch(n){case"slate-stack":customElements.get(n)||customElements.define(n,$t);break}})}mt();const yt=`@layer slate-components-1 {
  slate-text {
    /* Normalize */
    display: block;
    box-sizing: border-box;
    position: relative;

    /* Defaults - size */
    --text-font-size: var(--text-md-font-size);
    --text-line-height: var(--text-md-line-height);
    --text-margin-before: var(--text-md-margin-before);
    --text-margin-after: var(--text-md-margin-after);
    font-size: var(--text-font-size);
    line-height: var(--text-line-height);
    /* Defaults - weight */
    font-weight: var(--font-weight-normal);
    /* Defaults - variant */
    color: hsl(var(--color-text-primary));
  }

  slate-text::before {
    content: '';
    display: table;
    margin-block-end: var(--text-margin-before);
  }

  slate-text::after {
    content: '';
    display: table;
    margin-block-start: var(--text-margin-after);
  }

  slate-text[variant='primary'] {
    color: hsl(var(--color-text-primary));
  }
  slate-text[variant='secondary'] {
    color: hsl(var(--color-text-secondary));
  }

  slate-text[size='xs'] {
    --text-font-size: var(--text-xs-font-size);
    --text-line-height: var(--text-xs-line-height);
    --text-margin-before: var(--text-xs-margin-before);
    --text-margin-after: var(--text-xs-margin-after);
    font-weight: var(--font-weight-bold);
  }

  slate-text[size='sm'] {
    --text-font-size: var(--text-sm-font-size);
    --text-line-height: var(--text-sm-line-height);
    --text-margin-before: var(--text-sm-margin-before);
    --text-margin-after: var(--text-sm-margin-after);
  }

  slate-text[size='md'] {
    --text-font-size: var(--text-md-font-size);
    --text-line-height: var(--text-md-line-height);
    --text-margin-before: var(--text-md-margin-before);
    --text-margin-after: var(--text-md-margin-after);
  }

  slate-text[size='lg'] {
    --text-font-size: var(--text-lg-font-size);
    --text-line-height: var(--text-lg-line-height);
    --text-margin-before: var(--text-lg-margin-before);
    --text-margin-after: var(--text-lg-margin-after);
  }

  slate-text[size='xl'] {
    --text-font-size: var(--text-xl-font-size);
    --text-line-height: var(--text-xl-line-height);
    --text-margin-before: var(--text-xl-margin-before);
    --text-margin-after: var(--text-xl-margin-after);
  }

  slate-text[size='2xl'] {
    --text-font-size: var(--text-2xl-font-size);
    --text-line-height: var(--text-2xl-line-height);
    --text-margin-before: var(--text-2xl-margin-before);
    --text-margin-after: var(--text-2xl-margin-after);
  }

  slate-text[size='3xl'] {
    --text-font-size: var(--text-3xl-font-size);
    --text-line-height: var(--text-3xl-line-height);
    font-weight: var(--font-weight-light);
    --text-margin-before: var(--text-3xl-margin-before);
    --text-margin-after: var(--text-3xl-margin-after);
  }

  slate-text[size='4xl'] {
    --text-font-size: var(--text-4xl-font-size);
    --text-line-height: var(--text-4xl-line-height);
    font-weight: var(--font-weight-light);
    --text-margin-before: var(--text-4xl-margin-before);
    --text-margin-after: var(--text-4xl-margin-after);
  }

  slate-text[size='5xl'] {
    --text-font-size: var(--text-5xl-font-size);
    --text-line-height: var(--text-5xl-line-height);
    --text-margin-before: var(--text-5xl-margin-before);
    --text-margin-after: var(--text-5xl-margin-after);
    font-weight: var(--font-weight-light);
  }

  slate-text[size='6xl'] {
    --text-font-size: var(--text-6xl-font-size);
    --text-line-height: var(--text-6xl-line-height);
    --text-margin-before: var(--text-6xl-margin-before);
    --text-margin-after: var(--text-6xl-margin-after);
    font-weight: var(--font-weight-light);
  }

  slate-text[size='7xl'] {
    --text-font-size: var(--text-7xl-font-size);
    --text-line-height: var(--text-7xl-line-height);
    --text-margin-before: var(--text-7xl-margin-before);
    --text-margin-after: var(--text-7xl-margin-after);
    font-weight: var(--font-weight-light);
  }

  slate-text[transform='uppercase'] {
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-lg);
  }
  slate-text[transform='uppercase'][size='4xl'],
  slate-text[transform='uppercase'][size='5xl'],
  slate-text[transform='uppercase'][size='6xl'] {
    letter-spacing: var(--letter-spacing-xl);
  }

  slate-text[weight='light'] {
    font-weight: var(--font-weight-light);
  }
  slate-text[weight='normal'] {
    font-weight: var(--font-weight-normal);
  }
  slate-text[weight='bold'] {
    font-weight: var(--font-weight-bold);
  }

  slate-text[wrap='false'] {
    white-space: nowrap;
  }
}
`,bt=k(class extends w{constructor(){super(),this.__registerHost(),this.size=void 0,this.transform=void 0,this.variant=void 0,this.weight=void 0,this.wrap=void 0}static get style(){return yt}},[0,"slate-text",{size:[513],transform:[513],variant:[513],weight:[513],wrap:[516]}]);function zt(){if(typeof customElements>"u")return;["slate-text"].forEach(n=>{switch(n){case"slate-text":customElements.get(n)||customElements.define(n,bt);break}})}zt();const kt=`@layer slate-components-1 {
  slate-app-bar {
    /* Normalize */
    display: block;
    box-sizing: border-box;
    position: relative;

    inline-size: 100%;
    border-block-end: 1px solid hsl(var(--color-border));
    background: hsl(var(--color-background-primary));
  }
}
`,wt=k(class extends w{constructor(){super(),this.__registerHost()}static get style(){return kt}},[0,"slate-app-bar"]);function St(){if(typeof customElements>"u")return;["slate-app-bar"].forEach(n=>{switch(n){case"slate-app-bar":customElements.get(n)||customElements.define(n,wt);break}})}St();const jt=`@layer slate-components-1 {
  /**
   * <slate-app-nav>
   */
  slate-app-nav {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: row;
    /* Fix for deprecated [align] attribute */
    text-align: initial;
    inline-size: 100%;

    /* Defaults - align */
    align-items: center;
    /* Defaults - gap */
    gap: var(--spacing-md);
    /* Defaults - justify */
    justify-content: flex-start;
  }

  slate-app-nav[align='start'] {
    align-items: start;
  }
  slate-app-nav[align='center'] {
    align-items: center;
  }
  slate-app-nav[align='end'] {
    align-items: end;
  }

  /* TODO - Shared CSS for shared props? */
  slate-app-nav[gap='4xs'] {
    gap: var(--spacing-4xs);
  }
  slate-app-nav[gap='3xs'] {
    gap: var(--spacing-3xs);
  }
  slate-app-nav[gap='2xs'] {
    gap: var(--spacing-2xs);
  }
  slate-app-nav[gap='xs'] {
    gap: var(--spacing-xs);
  }
  slate-app-nav[gap='sm'] {
    gap: var(--spacing-sm);
  }
  slate-app-nav[gap='md'] {
    gap: var(--spacing-md);
  }
  slate-app-nav[gap='lg'] {
    gap: var(--spacing-lg);
  }
  slate-app-nav[gap='xl'] {
    gap: var(--spacing-xl);
  }
  slate-app-nav[gap='2xl'] {
    gap: var(--spacing-2xl);
  }
  slate-app-nav[gap='3xl'] {
    gap: var(--spacing-3xl);
  }
  slate-app-nav[gap='4xl'] {
    gap: var(--spacing-4xl);
  }
  slate-app-nav[gap='5xl'] {
    gap: var(--spacing-5xl);
  }
  slate-app-nav[gap='6xl'] {
    gap: var(--spacing-6xl);
  }
  slate-app-nav[gap='7xl'] {
    gap: var(--spacing-7xl);
  }
  slate-app-nav[gap='full'] {
    justify-content: space-between;
    gap: var(--spacing-3xs);
  }

  slate-app-nav[justify='start'] {
    justify-content: flex-start;
  }
  slate-app-nav[justify='center'] {
    justify-content: center;
  }
  slate-app-nav[justify='end'] {
    justify-content: flex-end;
  }
  slate-app-nav[justify='stretch'] {
    justify-content: stretch;
  }
  slate-app-nav[justify='around'] {
    justify-content: space-around;
  }
  slate-app-nav[justify='between'] {
    justify-content: space-between;
  }
  slate-app-nav[justify='evenly'] {
    justify-content: space-evenly;
  }

  slate-app-nav[wrap] {
    flex-wrap: wrap;
  }

  slate-app-nav[open] slate-app-nav-content {
    translate: 0 0;
  }

  /**
   * <slate-app-nav-content>
   */
  slate-app-nav-content {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    inline-size: 320px;
    max-inline-size: 100%;
    position: fixed;
    inset-block: 0;
    inset-inline-start: 0;
    translate: -100% 0;
    border-inline-end: var(--border-size-sm) solid hsl(var(--color-border));
    background-color: hsl(var(--color-background-primary));
    z-index: var(--z-index-forward);
    transition: translate 0.2s ease;

    /* Defaults - gap */
    gap: var(--spacing-md);
  }

  @media (--viewport-sm) {
    slate-app-nav-content {
      flex-direction: row;
      align-items: center;
      position: relative;
      border-inline-end: none;
      translate: 0 0;
    }
  }

  /* TODO - Shared CSS for shared props? */
  slate-app-nav-content[gap='4xs'] {
    gap: var(--spacing-4xs);
  }
  slate-app-nav-content[gap='3xs'] {
    gap: var(--spacing-3xs);
  }
  slate-app-nav-content[gap='2xs'] {
    gap: var(--spacing-2xs);
  }
  slate-app-nav-content[gap='xs'] {
    gap: var(--spacing-xs);
  }
  slate-app-nav-content[gap='sm'] {
    gap: var(--spacing-sm);
  }
  slate-app-nav-content[gap='md'] {
    gap: var(--spacing-md);
  }
  slate-app-nav-content[gap='lg'] {
    gap: var(--spacing-lg);
  }
  slate-app-nav-content[gap='xl'] {
    gap: var(--spacing-xl);
  }
  slate-app-nav-content[gap='2xl'] {
    gap: var(--spacing-2xl);
  }
  slate-app-nav-content[gap='3xl'] {
    gap: var(--spacing-3xl);
  }
  slate-app-nav-content[gap='4xl'] {
    gap: var(--spacing-4xl);
  }
  slate-app-nav-content[gap='5xl'] {
    gap: var(--spacing-5xl);
  }
  slate-app-nav-content[gap='6xl'] {
    gap: var(--spacing-6xl);
  }
  slate-app-nav-content[gap='7xl'] {
    gap: var(--spacing-7xl);
  }
  slate-app-nav-content[gap='full'] {
    justify-content: space-between;
    gap: var(--spacing-3xs);
  }

  /**
   * <slate-app-nav-menu-button>
   */
  slate-app-nav-menu-button {
    /* Normalize */
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  slate-app-nav-menu-button button,
  [slate-app-nav-menu-button] {
    border: none;
    padding: var(--spacing-none);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-inline-size: var(--size-lg);
    min-block-size: var(--size-lg);
    appearance: none;
    color: hsl(var(--color-icon-primary));
    background-color: transparent;
    cursor: pointer;
  }

  slate-app-nav:not([open]) slate-app-nav-menu-button [slate-icon-close] {
    display: none;
  }

  slate-app-nav[open] slate-app-nav-menu-button [slate-icon-menu] {
    display: none;
  }

  @media (--viewport-sm) {
    slate-app-nav-menu-button,
    [slate-app-nav-menu-button] {
      display: none;
    }
  }
}
`,Et=k(class extends w{constructor(){super(),this.__registerHost(),this.gap=void 0}static get style(){return jt}},[0,"slate-app-nav-content",{gap:[513]}]);function Tt(){if(typeof customElements>"u")return;["slate-app-nav-content"].forEach(n=>{switch(n){case"slate-app-nav-content":customElements.get(n)||customElements.define(n,Et);break}})}Tt();const _t=`@layer slate-components-1 {
  /**
   * <slate-app-nav>
   */
  slate-app-nav {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: row;
    /* Fix for deprecated [align] attribute */
    text-align: initial;
    inline-size: 100%;

    /* Defaults - align */
    align-items: center;
    /* Defaults - gap */
    gap: var(--spacing-md);
    /* Defaults - justify */
    justify-content: flex-start;
  }

  slate-app-nav[align='start'] {
    align-items: start;
  }
  slate-app-nav[align='center'] {
    align-items: center;
  }
  slate-app-nav[align='end'] {
    align-items: end;
  }

  /* TODO - Shared CSS for shared props? */
  slate-app-nav[gap='4xs'] {
    gap: var(--spacing-4xs);
  }
  slate-app-nav[gap='3xs'] {
    gap: var(--spacing-3xs);
  }
  slate-app-nav[gap='2xs'] {
    gap: var(--spacing-2xs);
  }
  slate-app-nav[gap='xs'] {
    gap: var(--spacing-xs);
  }
  slate-app-nav[gap='sm'] {
    gap: var(--spacing-sm);
  }
  slate-app-nav[gap='md'] {
    gap: var(--spacing-md);
  }
  slate-app-nav[gap='lg'] {
    gap: var(--spacing-lg);
  }
  slate-app-nav[gap='xl'] {
    gap: var(--spacing-xl);
  }
  slate-app-nav[gap='2xl'] {
    gap: var(--spacing-2xl);
  }
  slate-app-nav[gap='3xl'] {
    gap: var(--spacing-3xl);
  }
  slate-app-nav[gap='4xl'] {
    gap: var(--spacing-4xl);
  }
  slate-app-nav[gap='5xl'] {
    gap: var(--spacing-5xl);
  }
  slate-app-nav[gap='6xl'] {
    gap: var(--spacing-6xl);
  }
  slate-app-nav[gap='7xl'] {
    gap: var(--spacing-7xl);
  }
  slate-app-nav[gap='full'] {
    justify-content: space-between;
    gap: var(--spacing-3xs);
  }

  slate-app-nav[justify='start'] {
    justify-content: flex-start;
  }
  slate-app-nav[justify='center'] {
    justify-content: center;
  }
  slate-app-nav[justify='end'] {
    justify-content: flex-end;
  }
  slate-app-nav[justify='stretch'] {
    justify-content: stretch;
  }
  slate-app-nav[justify='around'] {
    justify-content: space-around;
  }
  slate-app-nav[justify='between'] {
    justify-content: space-between;
  }
  slate-app-nav[justify='evenly'] {
    justify-content: space-evenly;
  }

  slate-app-nav[wrap] {
    flex-wrap: wrap;
  }

  slate-app-nav[open] slate-app-nav-content {
    translate: 0 0;
  }

  /**
   * <slate-app-nav-content>
   */
  slate-app-nav-content {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    inline-size: 320px;
    max-inline-size: 100%;
    position: fixed;
    inset-block: 0;
    inset-inline-start: 0;
    translate: -100% 0;
    border-inline-end: var(--border-size-sm) solid hsl(var(--color-border));
    background-color: hsl(var(--color-background-primary));
    z-index: var(--z-index-forward);
    transition: translate 0.2s ease;

    /* Defaults - gap */
    gap: var(--spacing-md);
  }

  @media (--viewport-sm) {
    slate-app-nav-content {
      flex-direction: row;
      align-items: center;
      position: relative;
      border-inline-end: none;
      translate: 0 0;
    }
  }

  /* TODO - Shared CSS for shared props? */
  slate-app-nav-content[gap='4xs'] {
    gap: var(--spacing-4xs);
  }
  slate-app-nav-content[gap='3xs'] {
    gap: var(--spacing-3xs);
  }
  slate-app-nav-content[gap='2xs'] {
    gap: var(--spacing-2xs);
  }
  slate-app-nav-content[gap='xs'] {
    gap: var(--spacing-xs);
  }
  slate-app-nav-content[gap='sm'] {
    gap: var(--spacing-sm);
  }
  slate-app-nav-content[gap='md'] {
    gap: var(--spacing-md);
  }
  slate-app-nav-content[gap='lg'] {
    gap: var(--spacing-lg);
  }
  slate-app-nav-content[gap='xl'] {
    gap: var(--spacing-xl);
  }
  slate-app-nav-content[gap='2xl'] {
    gap: var(--spacing-2xl);
  }
  slate-app-nav-content[gap='3xl'] {
    gap: var(--spacing-3xl);
  }
  slate-app-nav-content[gap='4xl'] {
    gap: var(--spacing-4xl);
  }
  slate-app-nav-content[gap='5xl'] {
    gap: var(--spacing-5xl);
  }
  slate-app-nav-content[gap='6xl'] {
    gap: var(--spacing-6xl);
  }
  slate-app-nav-content[gap='7xl'] {
    gap: var(--spacing-7xl);
  }
  slate-app-nav-content[gap='full'] {
    justify-content: space-between;
    gap: var(--spacing-3xs);
  }

  /**
   * <slate-app-nav-menu-button>
   */
  slate-app-nav-menu-button {
    /* Normalize */
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  slate-app-nav-menu-button button,
  [slate-app-nav-menu-button] {
    border: none;
    padding: var(--spacing-none);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-inline-size: var(--size-lg);
    min-block-size: var(--size-lg);
    appearance: none;
    color: hsl(var(--color-icon-primary));
    background-color: transparent;
    cursor: pointer;
  }

  slate-app-nav:not([open]) slate-app-nav-menu-button [slate-icon-close] {
    display: none;
  }

  slate-app-nav[open] slate-app-nav-menu-button [slate-icon-menu] {
    display: none;
  }

  @media (--viewport-sm) {
    slate-app-nav-menu-button,
    [slate-app-nav-menu-button] {
      display: none;
    }
  }
}
`,Lt=k(class extends w{constructor(){super(),this.__registerHost(),this.label="Main menu"}render(){return m("button",{"aria-label":this.label},m("svg",{"slate-icon-menu":!0,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},m("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),m("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),m("line",{x1:"3",y1:"18",x2:"21",y2:"18"})),m("svg",{"slate-icon-close":!0,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},m("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),m("line",{x1:"6",y1:"6",x2:"18",y2:"18"})))}static get style(){return _t}},[0,"slate-app-nav-menu-button",{label:[513]}]);function Ct(){if(typeof customElements>"u")return;["slate-app-nav-menu-button"].forEach(n=>{switch(n){case"slate-app-nav-menu-button":customElements.get(n)||customElements.define(n,Lt);break}})}Ct();const Dt=`@layer slate-components-1 {
  /**
   * <slate-app-nav>
   */
  slate-app-nav {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: row;
    /* Fix for deprecated [align] attribute */
    text-align: initial;
    inline-size: 100%;

    /* Defaults - align */
    align-items: center;
    /* Defaults - gap */
    gap: var(--spacing-md);
    /* Defaults - justify */
    justify-content: flex-start;
  }

  slate-app-nav[align='start'] {
    align-items: start;
  }
  slate-app-nav[align='center'] {
    align-items: center;
  }
  slate-app-nav[align='end'] {
    align-items: end;
  }

  /* TODO - Shared CSS for shared props? */
  slate-app-nav[gap='4xs'] {
    gap: var(--spacing-4xs);
  }
  slate-app-nav[gap='3xs'] {
    gap: var(--spacing-3xs);
  }
  slate-app-nav[gap='2xs'] {
    gap: var(--spacing-2xs);
  }
  slate-app-nav[gap='xs'] {
    gap: var(--spacing-xs);
  }
  slate-app-nav[gap='sm'] {
    gap: var(--spacing-sm);
  }
  slate-app-nav[gap='md'] {
    gap: var(--spacing-md);
  }
  slate-app-nav[gap='lg'] {
    gap: var(--spacing-lg);
  }
  slate-app-nav[gap='xl'] {
    gap: var(--spacing-xl);
  }
  slate-app-nav[gap='2xl'] {
    gap: var(--spacing-2xl);
  }
  slate-app-nav[gap='3xl'] {
    gap: var(--spacing-3xl);
  }
  slate-app-nav[gap='4xl'] {
    gap: var(--spacing-4xl);
  }
  slate-app-nav[gap='5xl'] {
    gap: var(--spacing-5xl);
  }
  slate-app-nav[gap='6xl'] {
    gap: var(--spacing-6xl);
  }
  slate-app-nav[gap='7xl'] {
    gap: var(--spacing-7xl);
  }
  slate-app-nav[gap='full'] {
    justify-content: space-between;
    gap: var(--spacing-3xs);
  }

  slate-app-nav[justify='start'] {
    justify-content: flex-start;
  }
  slate-app-nav[justify='center'] {
    justify-content: center;
  }
  slate-app-nav[justify='end'] {
    justify-content: flex-end;
  }
  slate-app-nav[justify='stretch'] {
    justify-content: stretch;
  }
  slate-app-nav[justify='around'] {
    justify-content: space-around;
  }
  slate-app-nav[justify='between'] {
    justify-content: space-between;
  }
  slate-app-nav[justify='evenly'] {
    justify-content: space-evenly;
  }

  slate-app-nav[wrap] {
    flex-wrap: wrap;
  }

  slate-app-nav[open] slate-app-nav-content {
    translate: 0 0;
  }

  /**
   * <slate-app-nav-content>
   */
  slate-app-nav-content {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    inline-size: 320px;
    max-inline-size: 100%;
    position: fixed;
    inset-block: 0;
    inset-inline-start: 0;
    translate: -100% 0;
    border-inline-end: var(--border-size-sm) solid hsl(var(--color-border));
    background-color: hsl(var(--color-background-primary));
    z-index: var(--z-index-forward);
    transition: translate 0.2s ease;

    /* Defaults - gap */
    gap: var(--spacing-md);
  }

  @media (--viewport-sm) {
    slate-app-nav-content {
      flex-direction: row;
      align-items: center;
      position: relative;
      border-inline-end: none;
      translate: 0 0;
    }
  }

  /* TODO - Shared CSS for shared props? */
  slate-app-nav-content[gap='4xs'] {
    gap: var(--spacing-4xs);
  }
  slate-app-nav-content[gap='3xs'] {
    gap: var(--spacing-3xs);
  }
  slate-app-nav-content[gap='2xs'] {
    gap: var(--spacing-2xs);
  }
  slate-app-nav-content[gap='xs'] {
    gap: var(--spacing-xs);
  }
  slate-app-nav-content[gap='sm'] {
    gap: var(--spacing-sm);
  }
  slate-app-nav-content[gap='md'] {
    gap: var(--spacing-md);
  }
  slate-app-nav-content[gap='lg'] {
    gap: var(--spacing-lg);
  }
  slate-app-nav-content[gap='xl'] {
    gap: var(--spacing-xl);
  }
  slate-app-nav-content[gap='2xl'] {
    gap: var(--spacing-2xl);
  }
  slate-app-nav-content[gap='3xl'] {
    gap: var(--spacing-3xl);
  }
  slate-app-nav-content[gap='4xl'] {
    gap: var(--spacing-4xl);
  }
  slate-app-nav-content[gap='5xl'] {
    gap: var(--spacing-5xl);
  }
  slate-app-nav-content[gap='6xl'] {
    gap: var(--spacing-6xl);
  }
  slate-app-nav-content[gap='7xl'] {
    gap: var(--spacing-7xl);
  }
  slate-app-nav-content[gap='full'] {
    justify-content: space-between;
    gap: var(--spacing-3xs);
  }

  /**
   * <slate-app-nav-menu-button>
   */
  slate-app-nav-menu-button {
    /* Normalize */
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  slate-app-nav-menu-button button,
  [slate-app-nav-menu-button] {
    border: none;
    padding: var(--spacing-none);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-inline-size: var(--size-lg);
    min-block-size: var(--size-lg);
    appearance: none;
    color: hsl(var(--color-icon-primary));
    background-color: transparent;
    cursor: pointer;
  }

  slate-app-nav:not([open]) slate-app-nav-menu-button [slate-icon-close] {
    display: none;
  }

  slate-app-nav[open] slate-app-nav-menu-button [slate-icon-menu] {
    display: none;
  }

  @media (--viewport-sm) {
    slate-app-nav-menu-button,
    [slate-app-nav-menu-button] {
      display: none;
    }
  }
}
`,At=k(class extends w{constructor(){super(),this.__registerHost(),this.align=void 0,this.gap=void 0,this.justify=void 0,this.role="navigation",this.wrap=void 0,this.open=!1}handleClick({target:n}){n.closest("slate-app-nav-menu-button, [slate-app-nav-menu-button]")&&(this.open=!this.open)}static get style(){return Dt}},[0,"slate-app-nav",{align:[513],gap:[513],justify:[513],role:[513],wrap:[516],open:[516]},[[0,"click","handleClick"]]]);function Ot(){if(typeof customElements>"u")return;["slate-app-nav"].forEach(n=>{switch(n){case"slate-app-nav":customElements.get(n)||customElements.define(n,At);break}})}Ot();export{w as H,k as p};
